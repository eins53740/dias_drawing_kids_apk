"""
Convert a photo to a pencil-sketch SVG using OpenCV edge detection + vtracer.
Generates multiple versions with different detail levels for comparison.
"""
import cv2
import numpy as np
import vtracer
import sys
import os

def load_and_resize(path, width=360, height=450):
    """Load image, resize to fit SVG canvas maintaining aspect ratio, pad if needed."""
    img = cv2.imread(path)
    if img is None:
        raise FileNotFoundError(f"Cannot load: {path}")

    h, w = img.shape[:2]
    target_ratio = width / height
    img_ratio = w / h

    if img_ratio > target_ratio:
        # Image is wider — fit to width, pad top/bottom
        new_w = width
        new_h = int(width / img_ratio)
    else:
        # Image is taller — fit to height, pad left/right
        new_h = height
        new_w = int(height * img_ratio)

    resized = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)

    # Center on white canvas
    canvas = np.ones((height, width, 3), dtype=np.uint8) * 255
    y_off = (height - new_h) // 2
    x_off = (width - new_w) // 2
    canvas[y_off:y_off+new_h, x_off:x_off+new_w] = resized

    return canvas

def sketch_adaptive(img, block_size=11, C=4):
    """Adaptive threshold on grayscale — good for line art."""
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Light blur to reduce noise
    gray = cv2.GaussianBlur(gray, (3, 3), 0)
    # Adaptive threshold: white lines on black bg
    thresh = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                    cv2.THRESH_BINARY, block_size, C)
    return thresh

def sketch_canny(img, low=30, high=100):
    """Canny edge detection — clean contour lines."""
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(gray, low, high)
    # Invert: black lines on white bg
    result = 255 - edges
    # Dilate slightly to thicken lines
    kernel = np.ones((2, 2), np.uint8)
    result = cv2.erode(result, kernel, iterations=1)
    return result

def sketch_pencil(img):
    """OpenCV pencil sketch effect."""
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    inv = 255 - gray
    blur = cv2.GaussianBlur(inv, (21, 21), 0)
    sketch = cv2.divide(gray, 255 - blur, scale=256)
    # Threshold to clean up
    _, clean = cv2.threshold(sketch, 220, 255, cv2.THRESH_BINARY)
    return clean

def sketch_combined(img):
    """Combine adaptive threshold + canny for best detail."""
    adapt = sketch_adaptive(img, block_size=13, C=3)
    canny = sketch_canny(img, low=25, high=80)
    # Combine: pixel is white only if BOTH say white (intersection of edges)
    combined = cv2.bitwise_and(adapt, canny)
    # Clean up small noise
    kernel = np.ones((2, 2), np.uint8)
    combined = cv2.morphologyEx(combined, cv2.MORPH_CLOSE, kernel)
    return combined

def bitmap_to_svg(bmp_path, svg_path, mode='polygon', filter_speckle=4,
                   color_precision=6, corner_threshold=60, segment_length=3.5,
                   splice_threshold=45):
    """Use vtracer to convert bitmap to SVG."""
    vtracer.convert_image_to_svg_py(
        bmp_path, svg_path,
        colormode='binary',
        hierarchical='stacked',
        mode=mode,
        filter_speckle=filter_speckle,
        color_precision=color_precision,
        corner_threshold=corner_threshold,
        length_threshold=segment_length,
        splice_threshold=splice_threshold,
        path_precision=2
    )

def main():
    photo_path = sys.argv[1] if len(sys.argv) > 1 else "www/img/miguel-bebe.jpeg"
    out_dir = "tools/traced"
    os.makedirs(out_dir, exist_ok=True)

    print(f"Loading {photo_path}...")
    img = load_and_resize(photo_path, 360, 450)
    cv2.imwrite(os.path.join(out_dir, "resized.png"), img)

    # Generate different sketch styles
    sketches = {
        "adaptive": sketch_adaptive(img, block_size=11, C=3),
        "canny": sketch_canny(img, low=30, high=90),
        "pencil": sketch_pencil(img),
        "combined": sketch_combined(img),
        # More detail versions
        "adaptive_detail": sketch_adaptive(img, block_size=7, C=2),
        "canny_detail": sketch_canny(img, low=20, high=60),
    }

    for name, sketch in sketches.items():
        bmp_path = os.path.join(out_dir, f"sketch_{name}.png")
        svg_path = os.path.join(out_dir, f"traced_{name}.svg")
        cv2.imwrite(bmp_path, sketch)
        print(f"  Tracing {name}...")
        bitmap_to_svg(bmp_path, svg_path,
                      filter_speckle=4 if 'detail' not in name else 2,
                      segment_length=3.5 if 'detail' not in name else 2.0)

        # Count paths in SVG
        with open(svg_path, 'r') as f:
            content = f.read()
            path_count = content.count('<path')
            print(f"    {name}: {path_count} paths, {len(content)} bytes")

    print(f"\nAll outputs in {out_dir}/")
    print("Inspect the sketch PNGs and traced SVGs to pick the best one.")

if __name__ == '__main__':
    main()
