"""
V3: Less smoothing, lower thresholds, 5 broader step regions.
Each step has enough visual content to be meaningful.
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

    # Light smoothing only (preserve more detail)
    smooth = cv2.bilateralFilter(gray, 7, 50, 50)

    # Single sketch level: medium-low Canny thresholds for good detail
    edges = cv2.Canny(smooth, 30, 80)
    kernel = np.ones((2, 2), np.uint8)
    edges = cv2.dilate(edges, kernel, iterations=1)
    sketch = 255 - edges

    cv2.imwrite(f"{out_dir}/_ref_full.png", sketch)
    print("Full sketch saved for reference.")

    shape = gray.shape

    # === 5 BROAD STEP REGIONS ===

    # Step 1: Head + face (everything in the head area)
    step1_mask = ellipse_mask(shape, 180, 90, 72, 68)

    # Step 2: Upper body + arms (torso, both arms, shoulders)
    step2_mask = poly_mask(shape, [
        (60, 45), (155, 45), (155, 155),   # right arm going up
        (245, 155),                          # across shoulders
        (285, 155), (285, 305), (175, 305), # left arm going down
        (115, 305), (100, 175),             # left body
        (60, 130)                            # connect to right arm
    ])
    step2_only = subtract_mask(step2_mask, step1_mask)

    # Step 3: Clothing detail (overlap body area, picks up finer texture)
    # Use the fine detail edges just for the clothing area
    smooth_fine = cv2.bilateralFilter(gray, 5, 40, 40)
    edges_fine = cv2.Canny(smooth_fine, 22, 55)
    edges_fine = cv2.dilate(edges_fine, kernel, iterations=1)
    sketch_fine = 255 - edges_fine
    # Only keep edges that are NEW (not already in the main sketch)
    clothing_mask = poly_mask(shape, [
        (115, 148), (245, 148), (250, 310), (110, 310)
    ])
    # Fine detail minus what's already in step 1 and 2
    step3_mask = clothing_mask.copy()

    # Step 4: Legs + booties
    step4_mask = rect_mask(shape, 75, 295, 285, 440)
    step4_only = subtract_mask(step4_mask, step2_mask)

    # Step 5: Background (blanket, frame, pompoms, stripes)
    covered = np.zeros(shape[:2], dtype=np.uint8)
    for m in [step1_mask, step2_mask, step4_mask]:
        covered = cv2.bitwise_or(covered, m)
    step5_mask = cv2.bitwise_not(covered)

    # === GENERATE IMAGES ===
    step_configs = [
        ("step1", step1_mask, sketch, "Head and face"),
        ("step2", step2_only, sketch, "Body, arms, and objects"),
        ("step3", step3_mask, sketch_fine, "Clothing texture detail"),
        ("step4", step4_only, sketch, "Legs and booties"),
        ("step5", step5_mask, sketch, "Background"),
    ]

    for name, mask, src, desc in step_configs:
        step_sketch = apply_mask(src, mask)
        ink = np.sum(step_sketch < 200)
        print(f"  {desc}: {ink} ink pixels")

        # For step 3 (clothing detail), only keep FINE edges not in main sketch
        if name == "step3":
            # Fine detail that's NOT in the main sketch
            main_dark = sketch < 200  # pixels that are already drawn
            fine_dark = step_sketch < 200  # pixels in fine detail
            # Only keep fine pixels that aren't already drawn
            new_detail = fine_dark & ~main_dark
            # Create clean sketch from just the new detail
            result = np.ones_like(step_sketch) * 255
            result[new_detail] = step_sketch[new_detail]
            step_sketch = result
            ink = np.sum(step_sketch < 200)
            print(f"    (after subtracting existing: {ink} new pixels)")

        # Normal version
        rgba = make_transparent(step_sketch, ink_color=(74, 74, 74))
        cv2.imwrite(f"{out_dir}/{name}.png", rgba)

        # Orange highlight version
        rgba_hl = make_transparent(step_sketch, ink_color=(230, 81, 0))
        cv2.imwrite(f"{out_dir}/{name}_hl.png", rgba_hl)

    # Full combined
    full_rgba = make_transparent(sketch, ink_color=(74, 74, 74))
    cv2.imwrite(f"{out_dir}/full.png", full_rgba)

    print(f"\n=== File sizes ===")
    total = 0
    for f in sorted(os.listdir(out_dir)):
        if f.endswith('.png') and not f.startswith('_'):
            size = os.path.getsize(os.path.join(out_dir, f))
            total += size
            print(f"  {f}: {size//1024}KB")
    print(f"  TOTAL: {total//1024}KB")

if __name__ == '__main__':
    main()
