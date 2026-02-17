"""
Create progressive transparent PNG drawing layers from a photo.
Each step adds new detail. White pixels become transparent, dark pixels stay.
The app renders these as <image> elements inside the SVG.
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
    return canvas, x_off, y_off, new_w, new_h

def make_transparent(sketch_gray, ink_color=(74, 74, 74)):
    """Convert white-on-black sketch to RGBA with transparent background.
    sketch_gray: grayscale image where 0=ink, 255=paper
    Returns BGRA image.
    """
    h, w = sketch_gray.shape
    bgra = np.zeros((h, w, 4), dtype=np.uint8)
    # Ink intensity: 0=full ink, 255=no ink
    ink_strength = 255 - sketch_gray
    bgra[:,:,0] = ink_color[2]  # B
    bgra[:,:,1] = ink_color[1]  # G
    bgra[:,:,2] = ink_color[0]  # R
    bgra[:,:,3] = ink_strength  # Alpha: more ink = more opaque
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
    """Apply mask to sketch: keep sketch details only where mask is white."""
    result = np.ones_like(sketch) * 255  # white (no edges)
    result[mask > 0] = sketch[mask > 0]
    return result

def subtract_mask(mask_a, mask_b):
    """Return mask_a minus mask_b (areas in A but not in B)."""
    return cv2.subtract(mask_a, mask_b)

def main():
    photo = sys.argv[1] if len(sys.argv) > 1 else "www/img/miguel-bebe.jpeg"
    out_dir = "www/img/miguelbebe"
    os.makedirs(out_dir, exist_ok=True)

    print("Loading image...")
    img, x_off, y_off, rw, rh = load_and_resize(photo)

    # The baby is centered in the image. Compute approximate regions.
    # These are tuned for the miguel-bebe.jpeg photo resized to 360x450
    baby_cx, baby_cy = W//2, H//2 - 20  # baby center is slightly above canvas center

    # Create multiple edge/sketch versions
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Smooth to reduce noise while preserving edges
    smooth = cv2.bilateralFilter(gray, 9, 75, 75)

    # === Create sketch using adaptive threshold (best for line art) ===
    sketch_adapt = cv2.adaptiveThreshold(smooth, 255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 3)

    # === Create edges using Canny (good for contours) ===
    edges = cv2.Canny(smooth, 35, 90)
    # Thicken edges slightly
    kernel = np.ones((2,2), np.uint8)
    edges_thick = cv2.dilate(edges, kernel, iterations=1)
    sketch_canny = 255 - edges_thick

    # === Combined: use canny for outlines + adaptive for shading ===
    # Blend: take the DARKER pixel from each (more detail)
    sketch_combined = cv2.min(sketch_adapt, sketch_canny)

    # Choose the best version for the final layers
    sketch = sketch_combined

    # Save full sketch for reference
    cv2.imwrite(f"{out_dir}/full_sketch.png", sketch)
    print(f"Saved full sketch to {out_dir}/full_sketch.png")

    # === DEFINE SPATIAL REGIONS FOR EACH STEP ===
    # Step 1: Head outline (large ellipse around head)
    head_mask = ellipse_mask(sketch.shape, 180, 85, 70, 65)

    # Step 2: Face features (smaller area: eyes, nose, mouth)
    face_mask = ellipse_mask(sketch.shape, 180, 105, 45, 40)

    # Step 3: Right arm (goes UP near head, viewer's left)
    arm_r_mask = poly_mask(sketch.shape, [
        (90, 50), (155, 50), (160, 170), (100, 170), (70, 130)
    ])
    # Remove head overlap
    arm_r_only = subtract_mask(arm_r_mask, head_mask)

    # Step 4: Body + clothing (torso, cardigan)
    body_mask = poly_mask(sketch.shape, [
        (120, 150), (240, 150), (245, 290), (115, 290)
    ])
    # Remove head and arm overlaps
    body_only = subtract_mask(body_mask, head_mask)
    body_only = subtract_mask(body_only, arm_r_mask)

    # Step 5: Left arm + Letter M + rosary (viewer's right, going down)
    arm_l_mask = poly_mask(sketch.shape, [
        (200, 150), (280, 150), (280, 300), (180, 300)
    ])
    arm_l_only = subtract_mask(arm_l_mask, head_mask)
    arm_l_only = subtract_mask(arm_l_only, body_mask)

    # Step 6: Legs + feet
    legs_mask = rect_mask(sketch.shape, 80, 280, 280, 430)
    legs_only = subtract_mask(legs_mask, body_mask)
    legs_only = subtract_mask(legs_only, arm_l_mask)

    # Step 7: Background (everything not yet covered)
    covered = np.zeros(sketch.shape[:2], dtype=np.uint8)
    for m in [head_mask, face_mask, arm_r_only, body_only, arm_l_only, legs_only]:
        covered = cv2.bitwise_or(covered, m)
    bg_mask = cv2.bitwise_not(covered)

    # === CREATE STEP IMAGES ===
    # Step 0: Construction guides (keep programmatic — just light reference lines)
    # Steps 1-7: Progressive traced layers

    steps = [
        ("step1_head", head_mask),
        ("step2_face", face_mask),
        ("step3_arm_right", arm_r_only),
        ("step4_body", body_only),
        ("step5_arm_left_objects", arm_l_only),
        ("step6_legs", legs_only),
        ("step7_background", bg_mask),
    ]

    for name, mask in steps:
        # Extract this step's sketch content
        step_sketch = apply_mask(sketch, mask)

        # Check if this step has any content
        ink_pixels = np.sum(step_sketch < 200)
        print(f"  {name}: {ink_pixels} ink pixels")

        # Convert to transparent PNG
        step_rgba = make_transparent(step_sketch, ink_color=(74, 74, 74))

        # Save
        out_path = f"{out_dir}/{name}.png"
        cv2.imwrite(out_path, step_rgba)
        print(f"    Saved {out_path}")

    # Also create a full combined image for the "done" screen
    full_rgba = make_transparent(sketch, ink_color=(74, 74, 74))
    cv2.imwrite(f"{out_dir}/full.png", full_rgba)
    print(f"  Saved full combined: {out_dir}/full.png")

    # Create an ORANGE highlighted version of each step for active state
    for name, mask in steps:
        step_sketch = apply_mask(sketch, mask)
        step_rgba = make_transparent(step_sketch, ink_color=(230, 81, 0))  # HL color #E65100
        out_path = f"{out_dir}/{name}_active.png"
        cv2.imwrite(out_path, step_rgba)

    print(f"\nAll layers saved to {out_dir}/")
    print("Steps: 7 drawing layers + full combined + active variants")

if __name__ == '__main__':
    main()
