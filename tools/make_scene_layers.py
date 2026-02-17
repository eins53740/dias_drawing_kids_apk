"""
Generic PNG layer generator for any scene.
Creates 4 transparent PNG layers from a photo using edge detection.

Usage:
  python tools/make_scene_layers.py <scene_id> <photo_path>
  python tools/make_scene_layers.py batizado www/img/batizado-miguel.jpg
  python tools/make_scene_layers.py --all   (process all scenes)

Output: www/img/<scene_id>/step1.png, step1_hl.png, ..., full.png
"""
import cv2
import numpy as np
import os
import sys

W, H = 360, 450

# Scene ID -> photo path mapping
SCENES = {
    'batizado':     'www/img/batizado-miguel.jpg',
    'miguel':       'www/img/Miguel.jpg',
    'matilde':      'www/img/matilde.jpg',
    'mdd':          'www/img/mdd.jpeg',
    'paisestudio':  'www/img/pais-estudio.jpeg',
    'casamento':    'www/img/casamento-pais.jpg',
    'pais':         'www/img/pais.jpg',
    'sandra':       'www/img/Sandra.jpg',
    'paitio':       'www/img/pai-tio-miguel.jpg',
    'brunomiguel':  'www/img/Bruno + Miguel.jpg',
    'padrinhos':    'www/img/padrinhos.jpg',
    'avoesduarte':  'www/img/avoes-duarte.jpg',
    'avosdias':     'www/img/avos-dias.jpg',
    'bivo':         'www/img/bivo.jpg',
    'tioavo':       'www/img/tio-avo.jpg',
}


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
    bgra[:, :, 0] = ink_color[2]
    bgra[:, :, 1] = ink_color[1]
    bgra[:, :, 2] = ink_color[0]
    bgra[:, :, 3] = ink_strength
    return bgra


def rect_mask(shape, x1, y1, x2, y2):
    mask = np.zeros(shape[:2], dtype=np.uint8)
    cv2.rectangle(mask, (int(x1), int(y1)), (int(x2), int(y2)), 255, -1)
    return mask


def apply_mask(sketch, mask):
    result = np.ones_like(sketch) * 255
    result[mask > 0] = sketch[mask > 0]
    return result


def process_scene(scene_id, photo_path):
    out_dir = f"www/img/{scene_id}"
    os.makedirs(out_dir, exist_ok=True)

    print(f"\n=== Processing: {scene_id} ({photo_path}) ===")
    img = load_and_resize(photo_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Light smoothing
    smooth = cv2.bilateralFilter(gray, 7, 50, 50)

    # Edge detection
    edges = cv2.Canny(smooth, 30, 80)
    kernel = np.ones((2, 2), np.uint8)
    edges = cv2.dilate(edges, kernel, iterations=1)
    sketch = 255 - edges

    # Fine detail pass for texture layer
    smooth_fine = cv2.bilateralFilter(gray, 5, 40, 40)
    edges_fine = cv2.Canny(smooth_fine, 22, 55)
    edges_fine = cv2.dilate(edges_fine, kernel, iterations=1)
    sketch_fine = 255 - edges_fine

    shape = gray.shape

    # 4 spatial regions: horizontal bands
    # Adaptive split based on where the most edge content is
    h_third = H // 3
    h_half = H // 2

    # Step 1: Top third (heads, faces, sky)
    step1_mask = rect_mask(shape, 0, 0, W, h_third + 20)

    # Step 2: Middle third (torso, arms, main body)
    step2_mask = rect_mask(shape, 0, h_third - 20, W, 2 * h_third + 20)
    step2_only = cv2.subtract(step2_mask, step1_mask)

    # Step 3: Bottom third (legs, table, floor)
    step3_mask = rect_mask(shape, 0, 2 * h_third - 20, W, H)
    step3_only = cv2.subtract(step3_mask, step2_mask)

    # Step 4: Fine detail overlay (texture that wasn't in main edges)
    step4_mask = rect_mask(shape, 0, 0, W, H)

    step_configs = [
        ("step1", step1_mask, sketch, "Top region"),
        ("step2", step2_only, sketch, "Middle region"),
        ("step3", step3_only, sketch, "Bottom region"),
        ("step4", step4_mask, sketch_fine, "Fine detail"),
    ]

    for name, mask, src, desc in step_configs:
        step_sketch = apply_mask(src, mask)
        ink = np.sum(step_sketch < 200)
        print(f"  {desc}: {ink} ink pixels")

        # For step 4 (fine detail), only keep NEW edges not in main sketch
        if name == "step4":
            main_dark = sketch < 200
            fine_dark = step_sketch < 200
            new_detail = fine_dark & ~main_dark
            result = np.ones_like(step_sketch) * 255
            result[new_detail] = step_sketch[new_detail]
            step_sketch = result
            ink = np.sum(step_sketch < 200)
            print(f"    (new detail only: {ink} pixels)")

        # Normal version (dark ink)
        rgba = make_transparent(step_sketch, ink_color=(74, 74, 74))
        cv2.imwrite(f"{out_dir}/{name}.png", rgba)

        # Orange highlight version
        rgba_hl = make_transparent(step_sketch, ink_color=(230, 81, 0))
        cv2.imwrite(f"{out_dir}/{name}_hl.png", rgba_hl)

    # Full combined
    full_rgba = make_transparent(sketch, ink_color=(74, 74, 74))
    cv2.imwrite(f"{out_dir}/full.png", full_rgba)

    # Report file sizes
    total = 0
    for f in sorted(os.listdir(out_dir)):
        if f.endswith('.png') and not f.startswith('_'):
            size = os.path.getsize(os.path.join(out_dir, f))
            total += size
    print(f"  Total: {total // 1024}KB ({len([f for f in os.listdir(out_dir) if f.endswith('.png')])} files)")

    return True


def main():
    if len(sys.argv) < 2:
        print("Usage: python tools/make_scene_layers.py <scene_id> [photo_path]")
        print("       python tools/make_scene_layers.py --all")
        print(f"\nAvailable scenes: {', '.join(SCENES.keys())}")
        sys.exit(1)

    if sys.argv[1] == '--all':
        for sid, photo in SCENES.items():
            try:
                process_scene(sid, photo)
            except Exception as e:
                print(f"  ERROR: {e}")
    else:
        scene_id = sys.argv[1]
        if len(sys.argv) > 2:
            photo_path = sys.argv[2]
        elif scene_id in SCENES:
            photo_path = SCENES[scene_id]
        else:
            print(f"Unknown scene: {scene_id}")
            print(f"Available: {', '.join(SCENES.keys())}")
            sys.exit(1)
        process_scene(scene_id, photo_path)


if __name__ == '__main__':
    main()
