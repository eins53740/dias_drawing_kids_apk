"""
Create clean pencil-sketch PNG layers from a photo.
V2: Use Canny edges only (no adaptive threshold) for cleaner line art.
Strong bilateral filtering to remove texture noise while keeping edges.
"""
import cv2
import numpy as np
import os
import sys

W, H = 360, 450

def load_and_resize(path):
    img = cv2.imread(path)
    if img is None:
        raise FileNotFoundError(f"Cannot load: {path}")
    h, w = img.shape[:2]
    target_ratio = W / H
    img_ratio = w / h
    if img_ratio > target_ratio:
        new_w = W
        new_h = int(W / img_ratio)
    else:
        new_h = H
        new_w = int(H * img_ratio)
    resized = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)
    canvas = np.ones((H, W, 3), dtype=np.uint8) * 255
    y_off = (H - new_h) // 2
    x_off = (W - new_w) // 2
    canvas[y_off:y_off+new_h, x_off:x_off+new_w] = resized
    return canvas

def make_transparent(sketch_gray, ink_color=(74, 74, 74)):
    h, w = sketch_gray.shape
    bgra = np.zeros((h, w, 4), dtype=np.uint8)
    ink_strength = 255 - sketch_gray
    bgra[:,:,0] = ink_color[2]
    bgra[:,:,1] = ink_color[1]
    bgra[:,:,2] = ink_color[0]
    bgra[:,:,3] = ink_strength
    return bgra

def ellipse_mask(shape, cx, cy, rx, ry):
    mask = np.zeros(shape[:2], dtype=np.uint8)
    cv2.ellipse(mask, (int(cx), int(cy)), (int(rx), int(ry)), 0, 0, 360, 255, -1)
    return mask

def rect_mask(shape, x1, y1, x2, y2):
    mask = np.zeros(shape[:2], dtype=np.uint8)
    cv2.rectangle(mask, (int(x1), int(y1)), (int(x2), int(y2)), 255, -1)
    return mask

def poly_mask(shape, points):
    mask = np.zeros(shape[:2], dtype=np.uint8)
    pts = np.array(points, dtype=np.int32)
    cv2.fillPoly(mask, [pts], 255)
    return mask

def apply_mask(sketch, mask):
    result = np.ones_like(sketch) * 255
    result[mask > 0] = sketch[mask > 0]
    return result

def subtract_mask(a, b):
    return cv2.subtract(a, b)

def main():
    photo = sys.argv[1] if len(sys.argv) > 1 else "www/img/miguel-bebe.jpeg"
    out_dir = "www/img/miguelbebe"
    os.makedirs(out_dir, exist_ok=True)

    print("Loading image...")
    img = load_and_resize(photo)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # === Strong edge-preserving smoothing ===
    # Multiple bilateral filter passes to really smooth texture while keeping edges
    smooth = gray.copy()
    for _ in range(3):
        smooth = cv2.bilateralFilter(smooth, 9, 75, 75)

    # === Create 3 quality levels ===
    # Level A: Strong contours only (body outline, major features)
    edges_a = cv2.Canny(smooth, 50, 120)
    kernel = np.ones((2, 2), np.uint8)
    edges_a = cv2.dilate(edges_a, kernel, iterations=1)
    sketch_a = 255 - edges_a

    # Level B: Medium detail (face features, clothing lines)
    smooth_b = cv2.bilateralFilter(gray, 7, 60, 60)
    edges_b = cv2.Canny(smooth_b, 35, 85)
    edges_b = cv2.dilate(edges_b, kernel, iterations=1)
    sketch_b = 255 - edges_b

    # Level C: Fine detail (texture, small features)
    smooth_c = cv2.bilateralFilter(gray, 5, 50, 50)
    edges_c = cv2.Canny(smooth_c, 25, 65)
    edges_c = cv2.dilate(edges_c, kernel, iterations=1)
    sketch_c = 255 - edges_c

    # === Create pencil sketch for shading (steps 8-9 color/polish) ===
    inv = 255 - gray
    blur_inv = cv2.GaussianBlur(inv, (21, 21), 0)
    pencil = cv2.divide(gray, 255 - blur_inv, scale=256)

    # Save reference images
    cv2.imwrite(f"{out_dir}/_ref_sketch_a.png", sketch_a)
    cv2.imwrite(f"{out_dir}/_ref_sketch_b.png", sketch_b)
    cv2.imwrite(f"{out_dir}/_ref_sketch_c.png", sketch_c)
    cv2.imwrite(f"{out_dir}/_ref_pencil.png", pencil)

    # === SPATIAL MASKS ===
    shape = gray.shape

    # Head outline (large ellipse)
    head_mask = ellipse_mask(shape, 180, 85, 68, 62)

    # Face features (inner ellipse for eyes/nose/mouth)
    face_mask = ellipse_mask(shape, 180, 105, 42, 38)

    # Right arm (UP near head, viewer's left)
    arm_r_mask = poly_mask(shape, [
        (85, 45), (150, 45), (155, 170), (95, 170), (65, 125)
    ])
    arm_r_only = subtract_mask(arm_r_mask, head_mask)

    # Body + clothing (torso between shoulders and hips)
    body_mask = poly_mask(shape, [
        (115, 148), (245, 148), (250, 295), (110, 295)
    ])
    body_only = subtract_mask(body_mask, head_mask)
    body_only = subtract_mask(body_only, arm_r_mask)

    # Left arm + M + rosary (viewer's right, going DOWN)
    arm_l_mask = poly_mask(shape, [
        (200, 148), (285, 148), (285, 305), (175, 305)
    ])
    arm_l_only = subtract_mask(arm_l_mask, head_mask)
    arm_l_only = subtract_mask(arm_l_only, body_mask)

    # Legs + booties
    legs_mask = rect_mask(shape, 75, 285, 285, 435)
    legs_only = subtract_mask(legs_mask, body_mask)
    legs_only = subtract_mask(legs_only, arm_l_mask)

    # Background (everything not covered)
    covered = np.zeros(shape[:2], dtype=np.uint8)
    for m in [head_mask, face_mask, arm_r_only, body_only, arm_l_only, legs_only]:
        covered = cv2.bitwise_or(covered, m)
    bg_mask = cv2.bitwise_not(covered)

    # === GENERATE STEP IMAGES ===
    # Each step uses the sketch level appropriate for its detail:
    # Steps 1-3: Use strong contours (sketch_a) — main shapes
    # Steps 4-5: Use medium detail (sketch_b) — clothing, objects
    # Steps 6-7: Use fine detail (sketch_c) — legs, background

    step_configs = [
        # (name, mask, sketch_source, description)
        ("step1", head_mask, sketch_a, "Head outline"),
        ("step2", face_mask, sketch_b, "Face features"),
        ("step3", arm_r_only, sketch_a, "Right arm (up by head)"),
        ("step4", body_only, sketch_b, "Body and clothing"),
        ("step5", arm_l_only, sketch_b, "Left arm, letter M, rosary"),
        ("step6", legs_only, sketch_b, "Legs and booties"),
        ("step7", bg_mask, sketch_c, "Background (blanket, pompoms)"),
    ]

    for name, mask, sketch, desc in step_configs:
        step_sketch = apply_mask(sketch, mask)
        ink_pixels = np.sum(step_sketch < 200)
        print(f"  {desc}: {ink_pixels} ink pixels")

        # Normal (dark ink) version
        step_rgba = make_transparent(step_sketch, ink_color=(74, 74, 74))
        cv2.imwrite(f"{out_dir}/{name}.png", step_rgba)

        # Active (orange) version
        step_rgba_active = make_transparent(step_sketch, ink_color=(230, 81, 0))
        cv2.imwrite(f"{out_dir}/{name}_hl.png", step_rgba_active)

    # Full combined for reference/done screen (use medium detail everywhere)
    full_rgba = make_transparent(sketch_b, ink_color=(74, 74, 74))
    cv2.imwrite(f"{out_dir}/full.png", full_rgba)

    # Color base: use the pencil sketch as a grayscale shading layer
    _, pencil_clean = cv2.threshold(pencil, 240, 255, cv2.THRESH_BINARY)
    pencil_rgba = make_transparent(pencil_clean, ink_color=(74, 74, 74))
    cv2.imwrite(f"{out_dir}/shading.png", pencil_rgba)

    print(f"\nAll layers saved to {out_dir}/")
    file_sizes = []
    for f in sorted(os.listdir(out_dir)):
        if f.endswith('.png') and not f.startswith('_'):
            size = os.path.getsize(os.path.join(out_dir, f))
            file_sizes.append((f, size))
            print(f"  {f}: {size//1024}KB")
    total = sum(s for _, s in file_sizes)
    print(f"  TOTAL: {total//1024}KB")

if __name__ == '__main__':
    main()
