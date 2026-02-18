"""
Create progressive traced SVG layers from a photo.
Uses multiple Canny thresholds to naturally separate detail levels.
Each level captures edges that the previous level missed.
"""
import cv2
import numpy as np
import vtracer
import os
import re
import sys
import json

OUT_DIR = "tools/traced"
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

def create_edge_image(img, low, high, blur_k=5):
    """Canny edge detection with given thresholds."""
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (blur_k, blur_k), 0)
    edges = cv2.Canny(gray, low, high)
    return edges

def edges_to_sketch(edges):
    """Invert edges and thicken slightly for tracing."""
    result = 255 - edges
    kernel = np.ones((2, 2), np.uint8)
    result = cv2.erode(result, kernel, iterations=1)
    return result

def create_mask(shape, regions):
    """Create a binary mask from a list of (center, radius) tuples."""
    mask = np.zeros(shape[:2], dtype=np.uint8)
    for (cx, cy, rx, ry) in regions:
        cv2.ellipse(mask, (cx, cy), (rx, ry), 0, 0, 360, 255, -1)
    return mask

def trace_to_svg(bmp_path, svg_path, speckle=4, seg_len=3.5):
    vtracer.convert_image_to_svg_py(
        bmp_path, svg_path,
        colormode='binary',
        hierarchical='stacked',
        mode='polygon',
        filter_speckle=speckle,
        color_precision=6,
        corner_threshold=60,
        length_threshold=seg_len,
        splice_threshold=45,
        path_precision=1
    )

def extract_paths(svg_path):
    """Extract all path d-attributes from SVG file."""
    with open(svg_path, 'r') as f:
        content = f.read()
    # Find all path elements with their d attributes
    paths = re.findall(r'<path[^>]*\bd="([^"]+)"[^>]*/?>',  content)
    # Also get fill colors
    fills = re.findall(r'<path[^>]*\bfill="([^"]+)"[^>]*\bd="[^"]*"[^>]*/?>|<path[^>]*\bd="[^"]*"[^>]*\bfill="([^"]+)"[^>]*/?>',  content)
    return paths

def path_bbox(d):
    """Approximate bounding box of a path from its coordinate numbers."""
    nums = re.findall(r'[-+]?\d*\.?\d+', d)
    if len(nums) < 2:
        return (0, 0, 0, 0)
    coords = [float(n) for n in nums]
    xs = coords[0::2]
    ys = coords[1::2]
    if not xs or not ys:
        return (0, 0, 0, 0)
    return (min(xs), min(ys), max(xs), max(ys))

def path_centroid(d):
    """Get approximate centroid of path."""
    x1, y1, x2, y2 = path_bbox(d)
    return ((x1+x2)/2, (y1+y2)/2)

def path_area(d):
    """Approximate area from bounding box."""
    x1, y1, x2, y2 = path_bbox(d)
    return (x2-x1) * (y2-y1)

def classify_path(d):
    """Classify a path into a region based on its centroid and bbox."""
    cx, cy = path_centroid(d)
    x1, y1, x2, y2 = path_bbox(d)
    area = path_area(d)

    # Background: very large paths or paths mostly outside baby region
    if area > 80000:
        return 'background'

    # Head region: centroid y < 160, x between 100-260
    if cy < 160 and 100 < cx < 260:
        # Face features: smaller paths within the face
        if area < 800 and 130 < cx < 230 and 60 < cy < 150:
            return 'face'
        # Head outline: larger paths
        if area > 800:
            return 'head'
        return 'face'

    # Hands and objects region
    # Right hand near head (viewer's left): x < 140, y < 120
    if cx < 140 and cy < 120:
        return 'objects'
    # Left hand + M block (viewer's right): x > 190, 200 < y < 300
    if cx > 190 and 200 < cy < 300 and area < 3000:
        return 'objects'

    # Torso/clothing: central body area
    if 120 < cx < 240 and 150 < cy < 290:
        return 'clothing'

    # Legs/feet area
    if cy > 280 and 90 < cx < 270:
        return 'clothing'

    # Everything else is background
    return 'background'

def main():
    photo = sys.argv[1] if len(sys.argv) > 1 else "www/img/miguel-bebe.jpeg"
    os.makedirs(OUT_DIR, exist_ok=True)

    print("Loading image...")
    img, x_off, y_off, rw, rh = load_and_resize(photo)
    cv2.imwrite(f"{OUT_DIR}/base.png", img)

    # === STRATEGY: 3 progressive edge levels ===
    # Level 1: Strong edges only (body outline, major features)
    # Level 2: Medium edges (face details, clothing lines)
    # Level 3: Fine edges (texture, small details)

    print("Creating edge levels...")
    edges_strong = create_edge_image(img, 60, 130, blur_k=7)
    edges_medium = create_edge_image(img, 35, 90, blur_k=5)
    edges_fine = create_edge_image(img, 20, 60, blur_k=3)

    # Level 1: strong edges
    level1 = edges_strong.copy()
    # Level 2: medium edges MINUS strong (only NEW details)
    level2 = cv2.subtract(edges_medium, edges_strong)
    # Level 3: fine edges MINUS medium (only finest details)
    level3 = cv2.subtract(edges_fine, edges_medium)

    # Clean up each level
    kernel_small = np.ones((2, 2), np.uint8)
    level1 = cv2.morphologyEx(level1, cv2.MORPH_CLOSE, kernel_small)
    level2 = cv2.morphologyEx(level2, cv2.MORPH_CLOSE, kernel_small)
    level3 = cv2.morphologyEx(level3, cv2.MORPH_CLOSE, kernel_small)

    # Save sketches for each level
    for name, level in [("level1_strong", level1), ("level2_medium", level2), ("level3_fine", level3)]:
        sketch = edges_to_sketch(level)
        bmp_path = f"{OUT_DIR}/{name}.png"
        svg_path = f"{OUT_DIR}/{name}.svg"
        cv2.imwrite(bmp_path, sketch)

        print(f"  Tracing {name}...")
        speckle = 4 if 'fine' not in name else 2
        seg_len = 3.0 if 'fine' not in name else 2.0
        trace_to_svg(bmp_path, svg_path, speckle=speckle, seg_len=seg_len)

        paths = extract_paths(svg_path)
        print(f"    {name}: {len(paths)} paths")

    # Also create a FULL combined trace for reference
    full_edges = edges_medium.copy()
    full_sketch = edges_to_sketch(full_edges)
    cv2.imwrite(f"{OUT_DIR}/full_sketch.png", full_sketch)
    trace_to_svg(f"{OUT_DIR}/full_sketch.png", f"{OUT_DIR}/full_traced.svg", speckle=3, seg_len=2.5)

    # === PARSE AND CLASSIFY PATHS ===
    print("\nClassifying paths from full trace...")
    all_paths = extract_paths(f"{OUT_DIR}/full_traced.svg")
    print(f"  Total paths: {len(all_paths)}")

    # Classify each path
    layers = {
        'head': [],
        'face': [],
        'clothing': [],
        'objects': [],
        'background': []
    }

    for d in all_paths:
        # Skip very tiny paths (noise)
        area = path_area(d)
        if area < 5:
            continue
        # Skip the outer white rectangle that vtracer adds
        if area > 150000:
            continue

        category = classify_path(d)
        layers[category].append(d)

    for cat, paths in layers.items():
        print(f"  {cat}: {len(paths)} paths")

    # === GENERATE JAVASCRIPT CODE ===
    print("\nGenerating JavaScript layer code...")

    js_layers = {}
    for cat, paths in layers.items():
        if not paths:
            continue
        lines = []
        for d in paths:
            # Truncate very long paths (simplify)
            if len(d) > 2000:
                # Skip extremely complex paths
                continue
            lines.append(f"    '{d}'")
        js_layers[cat] = lines

    # Write the JS output
    js_output = f"{OUT_DIR}/miguelbebe_traced_layers.js"
    with open(js_output, 'w') as f:
        f.write("// Auto-traced miguelbebe layers from photo\n")
        f.write("// Generated by trace_layers.py\n\n")

        for cat in ['head', 'face', 'clothing', 'objects', 'background']:
            if cat not in js_layers:
                continue
            lines = js_layers[cat]
            f.write(f"// === {cat.upper()} ({len(lines)} paths) ===\n")
            f.write(f"const traced_{cat} = [\n")
            f.write(',\n'.join(lines))
            f.write("\n];\n\n")

        # Write a combined rendering function
        f.write("""
// Render traced paths as filled shapes
function renderTraced(g, paths, a) {
  const color = a ? '#E65100' : '#4A4A4A';
  paths.forEach(d => {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', d);
    p.setAttribute('fill', color);
    p.setAttribute('stroke', 'none');
    if (a) p.classList.add('active-element');
    g.appendChild(p);
  });
}
""")

    total_paths = sum(len(v) for v in js_layers.values())
    print(f"\nDone! Output: {js_output}")
    print(f"Total usable paths: {total_paths}")
    print(f"\nSketch images and SVGs are in {OUT_DIR}/")

    # Summary for inspection
    print("\n=== LAYER SUMMARY ===")
    for cat in ['head', 'face', 'clothing', 'objects', 'background']:
        if cat in js_layers:
            total_chars = sum(len(l) for l in js_layers[cat])
            print(f"  {cat}: {len(js_layers[cat])} paths, ~{total_chars//1024}KB")

if __name__ == '__main__':
    main()
