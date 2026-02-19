// ===== FULL-SCENE PROGRESSIVE SVG DRAWING SYSTEM =====
const SVG_NS = 'http://www.w3.org/2000/svg';
const VB = '0 0 360 450';
const VB_LANDSCAPE = '0 0 450 360';
const LANDSCAPE_IDS = new Set([
  'batizado', 'miguel', 'matilde', 'paitio',
  'avoesduarte', 'avosdias', 'tioavo',
  'diasfamily', 'espedrada', 'espedradaprimos'
]);
const P = '#4A4A4A'; // pencil
const LP = '#888';    // light pencil
const HL = '#E65100'; // highlight
const PW = 1.6;
const HW = 2.5;
const SW = 1.0;

// Core helpers
function ce(t, a) { const e = document.createElementNS(SVG_NS, t); for (const [k, v] of Object.entries(a)) e.setAttribute(k, v); return e; }
function sk(e, a, w) { e.setAttribute('stroke', a ? HL : P); e.setAttribute('stroke-width', a ? HW : (w || PW)); e.setAttribute('stroke-linecap', 'round'); e.setAttribute('stroke-linejoin', 'round'); if (!e.getAttribute('fill')) e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
function lt(e, a) { e.setAttribute('stroke', a ? HL : LP); e.setAttribute('stroke-width', a ? 1.5 : SW); e.setAttribute('stroke-linecap', 'round'); if (!e.getAttribute('fill')) e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
function pp(g, ds, a, fn) { ds.forEach(d => { const p = ce('path', { d, fill: 'none' }); (fn || sk)(p, a); g.appendChild(p); }); }
function fl(g, d, c, a) { const e = ce('path', { d, fill: c, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }
function fe(g, t, a2, a) { const e = ce(t, { ...a2, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }

// Photorealistic helpers — gradients, opacity fills, shadows, highlights
let _gid = 0;
function gd(defs, type, stops, attrs) {
  const id = '_g' + (++_gid);
  const el = ce(type === 'r' ? 'radialGradient' : 'linearGradient', { id, gradientUnits: 'userSpaceOnUse', ...attrs });
  stops.forEach(s => { el.appendChild(ce('stop', { offset: s[0], 'stop-color': s[1], 'stop-opacity': s[2] !== undefined ? s[2] : 1 })); });
  defs.appendChild(el);
  return 'url(#' + id + ')';
}
function fo(g, d, c, o, a) { const e = ce('path', { d, fill: c, 'fill-opacity': o, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }
function sh(g, d, o, a) { fo(g, d, '#1a1a2e', o || 0.12, a); }
function hi(g, d, o, a) { fo(g, d, '#FFFFFF', o || 0.18, a); }
function feo(g, t, a2, o, a) { const e = ce(t, { ...a2, 'fill-opacity': o, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }
function ssk(e, a, w, c) { e.setAttribute('stroke', a ? HL : (c || P)); e.setAttribute('stroke-width', a ? HW : (w || PW)); e.setAttribute('stroke-linecap', 'round'); e.setAttribute('stroke-linejoin', 'round'); e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
function pps(g, ds, a, w, c) { ds.forEach(d => { const p = ce('path', { d, fill: 'none' }); ssk(p, a, w, c); g.appendChild(p); }); }

// Filter helpers — drop shadow, glow, filtered fills
let _fid = 0;
function sf(defs, blur, dx, dy, color, opacity) {
  const id = '_sf' + (++_fid);
  const f = ce('filter', { id, x: '-20%', y: '-20%', width: '140%', height: '140%' });
  const ds = ce('feDropShadow', { dx: dx||0, dy: dy||1, stdDeviation: blur||1.5, 'flood-color': color||'#000', 'flood-opacity': opacity||0.3 });
  f.appendChild(ds); defs.appendChild(f);
  return 'url(#' + id + ')';
}
function gf(defs, blur) {
  const id = '_gf' + (++_fid);
  const f = ce('filter', { id, x: '-40%', y: '-40%', width: '180%', height: '180%' });
  f.appendChild(ce('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: blur||2 }));
  defs.appendChild(f);
  return 'url(#' + id + ')';
}
function ff(g, d, c, o, filter) {
  const e = ce('path', { d, fill: c, 'fill-opacity': o||1, stroke: 'none', filter: filter });
  g.appendChild(e);
}
function fef(g, t, attrs, filter) {
  const e = ce(t, { ...attrs, stroke: 'none', filter: filter });
  g.appendChild(e);
}
// Hatching style — thin parallel lines for form shading
function ht(e, a) { e.setAttribute('stroke', a ? HL : '#aaa'); e.setAttribute('stroke-width', a ? 0.8 : 0.35); e.setAttribute('stroke-linecap', 'round'); e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
// Medium weight — secondary contours and form lines
function md(e, a) { e.setAttribute('stroke', a ? HL : '#777'); e.setAttribute('stroke-width', a ? 1.2 : 0.7); e.setAttribute('stroke-linecap', 'round'); e.setAttribute('stroke-linejoin', 'round'); e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }

const miguelbebeLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step1_hl.png' : 'img/miguelbebe/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step2_hl.png' : 'img/miguelbebe/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step3_hl.png' : 'img/miguelbebe/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step4_hl.png' : 'img/miguelbebe/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/miguel-bebe.jpeg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const batizadoLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step1_hl.png' : 'img/batizado/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step2_hl.png' : 'img/batizado/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step3_hl.png' : 'img/batizado/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step4_hl.png' : 'img/batizado/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/batizado-miguel.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Batizado';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const matildeLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step1_hl.png' : 'img/matilde/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step2_hl.png' : 'img/matilde/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step3_hl.png' : 'img/matilde/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step4_hl.png' : 'img/matilde/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/matilde.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Matilde';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const mddLayers = [
  // =====================================================================
  // Layer 0: Composition guides — wall band, Miguel zone, father zone,
  //          ground line, village skyline
  // =====================================================================
  (g, a) => {
    // Wall horizontal band (two lines for top/bottom of wall)
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a, lt);
    // Miguel zone — left/center
    pp(g, ['M 60 20 L 60 300', 'M 220 20 L 220 300'], a, lt);
    // Miguel vertical center
    pp(g, ['M 140 20 L 140 260'], a, lt);
    // Miguel head circle guide
    pp(g, ['M 140 52 C 168 52 188 72 188 96 C 188 120 168 140 140 140 C 112 140 92 120 92 96 C 92 72 112 52 140 52 Z'], a, lt);
    // Father zone — right edge
    pp(g, ['M 280 40 L 280 200', 'M 360 40 L 360 200'], a, lt);
    // Ground line
    pp(g, ['M 0 380 L 360 380'], a, lt);
    // Village skyline guide
    pp(g, ['M 0 120 L 360 120'], a, lt);
    // Shoulder line
    pp(g, ['M 80 170 L 200 170'], a, lt);
  },

  // =====================================================================
  // Layer 1: Miguel body — round child head, neck, shoulders/torso
  //          leaning forward on wall, both arms on wall. Father partial.
  // =====================================================================
  (g, a) => {
    // Head — large round child head
    pp(g, [
      'M 140 50 C 162 50 180 64 182 84 C 184 100 180 116 172 126 C 164 136 154 142 140 144 C 126 142 116 136 108 126 C 100 116 96 100 98 84 C 100 64 118 50 140 50 Z'
    ], a);
    // Neck — short, child proportions
    pp(g, [
      'M 130 142 L 128 158',
      'M 150 142 L 152 158'
    ], a);
    // Shoulders and torso — leaning forward onto wall
    pp(g, [
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z'
    ], a);
    // Left arm — resting on wall top
    pp(g, [
      'M 92 190 C 82 206 74 226 70 248 C 68 254 72 258 78 256 L 112 244'
    ], a);
    // Right arm — resting on wall top
    pp(g, [
      'M 188 190 C 198 206 206 226 210 248 C 212 254 208 258 202 256 L 168 244'
    ], a);
    // Father — partial head peeking from right
    pp(g, [
      'M 300 102 C 300 82 312 70 326 66 C 340 70 350 82 350 102 C 352 114 348 124 342 132 C 338 136 332 140 326 142'
    ], a);
    // Father neck + shoulders (partial)
    pp(g, [
      'M 318 140 L 316 154',
      'M 334 140 L 336 154'
    ], a);
    pp(g, [
      'M 290 176 C 300 162 314 154 326 154 C 338 154 350 162 360 176 L 360 260 L 282 260 Z'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face — eyes, eyebrows, nose, open mouth with teeth, ears.
  //          Father partial face (one eye, beard stubble).
  // =====================================================================
  (g, a) => {
    // Left eye — round child eye
    pp(g, [
      'M 120 88 C 122 82 128 79 134 80 C 140 82 142 88 140 94 C 138 98 132 100 126 98 C 122 96 120 92 120 88 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 146 88 C 148 82 154 79 160 80 C 166 82 168 88 166 94 C 164 98 158 100 152 98 C 148 96 146 92 146 88 Z'
    ], a);
    // Left pupil — dark, expressive
    fe(g, 'circle', { cx: 130, cy: 90, r: 4, fill: a ? HL : '#2D1B0E' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 156, cy: 90, r: 4, fill: a ? HL : '#2D1B0E' }, a);
    // Left eyelid crease
    pp(g, ['M 122 84 C 126 80 132 78 138 80'], a, lt);
    // Right eyelid crease
    pp(g, ['M 148 84 C 152 80 158 78 164 80'], a, lt);
    // Left eyebrow — slightly arched
    pp(g, ['M 118 78 C 124 72 132 70 140 74'], a);
    // Right eyebrow
    pp(g, ['M 148 74 C 156 70 164 72 170 78'], a);
    // Nose — small child nose
    pp(g, [
      'M 138 86 C 137 94 136 100 134 106',
      'M 130 108 C 134 112 138 114 142 114 C 146 112 148 108 150 106'
    ], a);
    // Nose bridge (subtle)
    pp(g, ['M 140 86 C 139 92 138 96 137 100'], a, lt);
    // Mouth — slightly open, showing teeth, cute smile
    pp(g, [
      'M 124 120 C 128 116 134 114 140 116 C 146 114 152 116 156 120'
    ], a);
    // Lower lip
    pp(g, [
      'M 124 120 C 128 130 134 134 140 134 C 146 134 152 130 156 120'
    ], a);
    // Upper teeth row
    pp(g, ['M 126 120 L 154 120'], a);
    pp(g, [
      'M 132 120 L 132 124',
      'M 137 120 L 137 125',
      'M 143 120 L 143 125',
      'M 148 120 L 148 124'
    ], a, lt);
    // Left ear — slightly prominent
    pp(g, [
      'M 96 86 C 90 82 86 88 86 96 C 86 104 90 108 96 106'
    ], a);
    // Left ear inner detail
    pp(g, ['M 90 90 C 88 94 88 100 90 104'], a, lt);
    // Right ear — slightly prominent
    pp(g, [
      'M 184 86 C 190 82 194 88 194 96 C 194 104 190 108 184 106'
    ], a);
    // Right ear inner detail
    pp(g, ['M 190 90 C 192 94 192 100 190 104'], a, lt);
    // Father's partial face — one eye
    pp(g, [
      'M 316 98 C 318 92 324 90 328 94 C 332 98 330 104 326 106 C 322 108 318 104 316 98 Z'
    ], a);
    fe(g, 'circle', { cx: 324, cy: 100, r: 2.8, fill: a ? HL : '#2C1810' }, a);
    // Father eyebrow
    pp(g, ['M 314 90 C 320 86 328 86 334 90'], a);
    // Father beard stubble dots
    const bd = [
      [310, 124], [314, 128], [318, 132], [322, 134], [326, 136],
      [330, 134], [334, 132], [338, 128], [342, 124],
      [318, 138], [322, 140], [326, 142], [330, 140],
      [314, 134], [326, 130], [334, 128]
    ];
    bd.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a);
    });
  },

  // =====================================================================
  // Layer 3: Hair + puffy jacket — dark short hair with texture,
  //          quilted jacket body, hood with orange lining, emblem circle.
  //          Father shirt collar.
  // =====================================================================
  (g, a) => {
    // Hair outline — dark brown, short
    pp(g, [
      'M 100 84 C 98 66 106 50 122 42 C 134 36 150 36 162 42 C 174 50 180 66 178 84'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 104 80 C 106 66 114 52 128 46 C 140 42 152 44 162 52 C 170 60 174 72 172 82'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 118 42 C 128 38 140 38 150 42',
      'M 110 52 C 122 46 136 44 148 48',
      'M 106 62 C 118 56 132 54 144 58',
      'M 112 72 C 124 66 136 64 148 68'
    ], a, lt);
    // Hair wisp on forehead
    pp(g, [
      'M 126 46 C 130 50 136 52 142 50',
      'M 120 54 C 124 58 130 60 136 58'
    ], a, lt);

    // Jacket body — navy puffy quilted
    pp(g, [
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z'
    ], a);
    // Horizontal quilting lines — the signature puffy look
    pp(g, [
      'M 90 196 C 108 194 140 192 190 196',
      'M 88 210 C 110 208 140 206 192 210',
      'M 87 224 C 112 222 140 220 193 224',
      'M 86 238 C 114 236 140 234 194 238'
    ], a, lt);
    // Quilting side curves (showing puffiness)
    pp(g, [
      'M 90 196 C 88 200 86 206 88 210',
      'M 88 210 C 86 216 86 220 87 224',
      'M 87 224 C 85 230 84 234 86 238',
      'M 190 196 C 192 200 194 206 192 210',
      'M 192 210 C 194 216 194 220 193 224',
      'M 193 224 C 195 230 196 234 194 238'
    ], a, lt);

    // Hood — draped behind neck, visible around neckline
    pp(g, [
      'M 100 168 C 94 164 88 166 86 174 C 84 182 88 188 96 186',
      'M 180 168 C 186 164 192 166 194 174 C 196 182 192 188 184 186'
    ], a);
    // Hood back curve
    pp(g, [
      'M 96 186 C 112 192 126 194 140 194 C 154 194 168 192 184 186'
    ], a);
    // Hood lining edge — orange/camel visible strip at neckline
    pp(g, [
      'M 96 184 C 112 190 126 192 140 192 C 154 192 168 190 184 184'
    ], a);
    // Hood lining inner edge
    pp(g, [
      'M 98 182 C 114 188 128 190 140 190 C 152 190 166 188 182 182'
    ], a, lt);

    // Emblem circle on chest
    fe(g, 'circle', { cx: 140, cy: 210, r: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Emblem inner circle hint
    fe(g, 'circle', { cx: 140, cy: 210, r: 5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.2 : SW }, a);

    // Father shirt collar
    pp(g, [
      'M 310 152 C 318 156 326 158 334 156 C 340 154 346 152 350 150'
    ], a);
    // Father shirt neckline
    pp(g, ['M 318 142 C 322 148 326 150 330 148'], a, lt);
  },

  // =====================================================================
  // Layer 4: Jacket details — zipper with teeth, pocket outlines,
  //          hood drawstrings, sleeve seams
  // =====================================================================
  (g, a) => {
    // Center zipper line
    pp(g, ['M 140 192 L 140 260'], a);
    // Zipper teeth marks
    for (let y = 196; y < 258; y += 5) {
      pp(g, [`M 138 ${y} L 142 ${y}`], a, lt);
    }
    // Zipper pull tab at top
    pp(g, [
      'M 139 193 L 137 198 L 143 198 L 141 193'
    ], a, lt);

    // Left pocket outline
    pp(g, ['M 96 226 L 120 226 L 120 250 L 96 250 Z'], a, lt);
    // Left pocket flap
    pp(g, ['M 96 226 L 120 226'], a);
    // Right pocket outline
    pp(g, ['M 160 226 L 184 226 L 184 250 L 160 250 Z'], a, lt);
    // Right pocket flap
    pp(g, ['M 160 226 L 184 226'], a);

    // Hood drawstrings hanging from neckline
    pp(g, [
      'M 130 190 C 128 200 126 210 124 220',
      'M 150 190 C 152 200 154 210 156 220'
    ], a, lt);
    // Drawstring tips (small knots)
    pp(g, [
      'M 123 220 C 122 224 124 226 126 224 C 128 222 126 218 124 218',
      'M 155 220 C 154 224 156 226 158 224 C 160 222 158 218 156 218'
    ], a, lt);

    // Left sleeve seam
    pp(g, ['M 92 190 C 88 198 86 208 84 218'], a, lt);
    // Right sleeve seam
    pp(g, ['M 188 190 C 192 198 194 208 196 218'], a, lt);
    // Left sleeve quilting
    pp(g, [
      'M 90 202 C 84 204 78 208 74 212',
      'M 88 216 C 82 218 76 222 72 226',
      'M 86 230 C 80 232 76 236 72 240'
    ], a, lt);
    // Right sleeve quilting
    pp(g, [
      'M 190 202 C 196 204 202 208 206 212',
      'M 192 216 C 198 218 204 222 208 226',
      'M 194 230 C 200 232 204 236 208 240'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands + green toy — both chubby child hands holding
  //          dinosaur/dragon figurine on top of wall
  // =====================================================================
  (g, a) => {
    // Left hand — chubby child fingers on wall
    pp(g, [
      'M 112 248 C 108 242 102 244 100 250 C 98 256 102 260 108 258'
    ], a);
    // Left thumb
    pp(g, [
      'M 112 246 C 116 242 118 236 116 232 C 114 228 110 228 108 232'
    ], a);
    // Left index finger
    pp(g, [
      'M 104 246 C 100 240 96 234 98 230 C 100 226 104 226 106 230'
    ], a);
    // Left middle finger
    pp(g, [
      'M 102 248 C 98 242 94 236 96 232 C 98 228 102 228 104 232'
    ], a);
    // Left ring + pinky (grouped, shorter)
    pp(g, [
      'M 100 252 C 96 248 94 242 96 238',
      'M 98 254 C 94 250 92 246 94 242'
    ], a, lt);

    // Right hand — chubby child fingers
    pp(g, [
      'M 168 248 C 172 242 178 244 180 250 C 182 256 178 260 172 258'
    ], a);
    // Right thumb
    pp(g, [
      'M 168 246 C 164 242 162 236 164 232 C 166 228 170 228 172 232'
    ], a);
    // Right index finger
    pp(g, [
      'M 176 246 C 180 240 184 234 182 230 C 180 226 176 226 174 230'
    ], a);
    // Right middle finger
    pp(g, [
      'M 178 248 C 182 242 186 236 184 232 C 182 228 178 228 176 232'
    ], a);
    // Right ring + pinky
    pp(g, [
      'M 180 252 C 184 248 186 242 184 238',
      'M 182 254 C 186 250 188 246 186 242'
    ], a, lt);

    // Green toy (dinosaur/dragon figurine) on wall top
    // Toy body — rounded horizontal shape
    pp(g, [
      'M 118 238 C 116 230 122 222 132 220 C 138 218 144 220 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238'
    ], a);
    // Toy head/neck — left side, sticking up
    pp(g, [
      'M 132 220 C 130 214 132 206 138 202 C 142 200 146 202 148 208 L 148 224'
    ], a);
    // Toy head detail
    pp(g, [
      'M 136 204 C 134 200 136 196 140 194 C 144 196 146 200 144 204'
    ], a);
    // Toy eye
    fe(g, 'circle', { cx: 139, cy: 200, r: 1.5, fill: a ? HL : P }, a);
    // Toy spine bumps (3 bumps along back)
    pp(g, [
      'M 136 212 C 134 208 136 204 138 206',
      'M 142 210 C 140 206 142 202 144 204',
      'M 150 212 C 148 208 150 204 152 206',
      'M 158 214 C 156 210 158 206 160 208'
    ], a);
    // Toy legs — two pairs
    pp(g, [
      'M 128 234 L 124 244',
      'M 136 236 L 134 244',
      'M 162 236 L 164 244',
      'M 170 234 L 174 244'
    ], a, lt);
    // Toy tail — curving right
    pp(g, [
      'M 164 224 C 170 226 178 224 184 220 C 190 216 194 212 192 208'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — stone wall (irregular stones, two rows),
  //          moss patches, village houses, bare trees, ground/grass, sky
  // =====================================================================
  (g, a) => {
    // Stone wall — top and bottom edges
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a);
    // Upper row stone outlines (irregular shapes)
    pp(g, [
      'M 0 260 L 38 262 L 40 280 L 0 278 Z',
      'M 38 262 L 88 258 L 90 282 L 40 280 Z',
      'M 88 258 L 148 260 L 146 284 L 90 282 Z',
      'M 148 260 L 208 262 L 206 280 L 146 284 Z',
      'M 208 262 L 268 258 L 270 282 L 206 280 Z',
      'M 268 258 L 328 260 L 330 278 L 270 282 Z',
      'M 328 260 L 360 262 L 360 280 L 330 278 Z'
    ], a);
    // Lower row stone outlines
    pp(g, [
      'M 0 278 L 48 282 L 46 300 L 0 300 Z',
      'M 48 282 L 118 278 L 120 300 L 46 300 Z',
      'M 118 278 L 178 282 L 176 300 L 120 300 Z',
      'M 178 282 L 238 280 L 240 300 L 176 300 Z',
      'M 238 280 L 308 282 L 310 300 L 240 300 Z',
      'M 308 282 L 360 278 L 360 300 L 310 300 Z'
    ], a);
    // Moss patches on top of wall
    pp(g, [
      'M 18 258 C 22 254 30 252 36 254 C 42 256 44 258 38 260',
      'M 78 256 C 84 252 92 250 98 252 C 104 254 106 258 98 258',
      'M 158 258 C 164 254 172 252 180 254 C 186 256 188 260 180 260',
      'M 248 256 C 254 252 262 250 268 254 C 274 256 276 260 268 258'
    ], a);

    // Village houses (above wall, background)
    // House 1 — stone cottage, left
    pp(g, [
      'M 8 148 L 8 260 L 56 260 L 56 126 Z'
    ], a, lt);
    // House 1 pitched roof
    pp(g, ['M 8 148 L 32 116 L 56 126'], a, lt);
    // House 1 windows
    pp(g, [
      'M 18 168 L 36 168 L 36 186 L 18 186 Z',
      'M 22 210 L 42 210 L 42 240 L 22 240 Z'
    ], a, lt);
    // House 1 door
    pp(g, ['M 28 230 L 42 230 L 42 260 L 28 260 Z'], a, lt);

    // House 2 — taller, right of house 1
    pp(g, [
      'M 56 136 L 56 260 L 104 260 L 104 156 Z'
    ], a, lt);
    // House 2 roof
    pp(g, ['M 56 136 L 80 106 L 104 156'], a, lt);
    // House 2 windows
    pp(g, [
      'M 64 168 L 80 168 L 80 184 L 64 184 Z',
      'M 84 168 L 96 168 L 96 184 L 84 184 Z'
    ], a, lt);

    // Metal shed/warehouse — far right background
    pp(g, [
      'M 232 180 L 232 260 L 278 260 L 278 170 Z'
    ], a, lt);
    // Shed flat roof
    pp(g, ['M 230 180 L 280 170'], a, lt);
    // Shed ridges (corrugated metal)
    pp(g, [
      'M 240 180 L 240 260',
      'M 250 178 L 250 260',
      'M 260 176 L 260 260',
      'M 270 174 L 270 260'
    ], a, lt);

    // Bare winter trees
    // Tree 1 — between houses and shed
    pp(g, [
      'M 190 130 L 190 260'
    ], a, lt);
    pp(g, [
      'M 190 150 C 180 138 174 128 168 118',
      'M 190 164 C 200 152 206 142 212 132',
      'M 190 178 C 182 168 176 158 170 148',
      'M 190 188 C 198 178 204 168 210 158'
    ], a, lt);
    // Small branches
    pp(g, [
      'M 168 118 C 164 114 160 112 158 114',
      'M 212 132 C 216 128 220 126 222 128',
      'M 170 148 C 166 144 162 142 160 144'
    ], a, lt);

    // Tree 2 — far right area
    pp(g, [
      'M 300 160 L 300 260'
    ], a, lt);
    pp(g, [
      'M 300 178 C 292 166 286 158 282 150',
      'M 300 190 C 308 180 314 172 318 164'
    ], a, lt);

    // Stone path/yard hint between houses
    pp(g, ['M 104 260 L 130 250 L 168 252 L 190 260'], a, lt);

    // Ground/grass area below wall
    pp(g, ['M 0 300 L 0 450 L 360 450 L 360 300 Z'], a, lt);
    // Grass tufts
    pp(g, [
      'M 20 310 C 24 304 28 300 30 304',
      'M 60 308 C 64 302 68 298 70 302',
      'M 120 312 C 124 306 128 302 130 306',
      'M 200 310 C 204 304 208 300 210 304',
      'M 280 308 C 284 302 288 298 290 302',
      'M 340 310 C 344 304 348 300 350 304'
    ], a, lt);

    // Sky area outline
    pp(g, ['M 0 0 L 360 0 L 360 120 L 0 120 Z'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — figures (Miguel skin, ears, hair, jacket,
  //          hood + orange lining, hand skin, arm jacket, green toy,
  //          father skin, father shirt, neck)
  // =====================================================================
  (g, a) => {
    // Miguel skin — face
    fl(g,
      'M 140 52 C 160 52 178 66 180 84 C 182 100 178 114 170 124 C 162 134 152 140 140 142 C 128 140 118 134 110 124 C 102 114 98 100 100 84 C 102 66 120 52 140 52 Z',
      '#F5D0A9', a);
    // Neck skin
    fl(g,
      'M 130 140 L 128 158 L 152 158 L 150 140 Z',
      '#F0C8A0', false);
    // Left ear fill
    fe(g, 'ellipse', { cx: 90, cy: 96, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 190, cy: 96, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Miguel hair — dark brown
    fl(g,
      'M 102 84 C 100 68 108 52 124 44 C 136 38 152 38 164 44 C 176 52 182 68 180 84 L 176 82 C 178 72 174 62 168 56 C 162 48 150 44 140 46 C 128 48 118 56 112 66 C 108 72 106 78 104 82 Z',
      '#4E342E', a);
    // Miguel jacket — navy puffy
    fl(g,
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z',
      '#1A237E', a);
    // Hood — navy
    fl(g,
      'M 100 168 C 94 164 88 166 86 174 C 84 182 88 188 96 186 C 112 192 126 194 140 194 C 154 194 168 192 184 186 C 192 188 196 182 194 174 C 192 166 186 164 180 168 L 152 172 L 128 172 Z',
      '#1A237E', false);
    // Hood orange lining strip — visible at neckline
    fl(g,
      'M 96 184 C 112 190 126 192 140 192 C 154 192 168 190 184 184 C 168 188 154 190 140 190 C 126 190 112 188 96 184 Z',
      '#FF8F00', a);
    // Second lining strip (inner, lighter orange)
    fl(g,
      'M 100 182 C 114 186 128 188 140 188 C 152 188 166 186 180 182 C 166 184 152 186 140 186 C 128 186 114 184 100 182 Z',
      '#FFB300', false);
    // Left hand skin
    fe(g, 'ellipse', { cx: 106, cy: 248, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    // Right hand skin
    fe(g, 'ellipse', { cx: 174, cy: 248, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    // Left arm jacket fill
    fl(g,
      'M 92 190 C 82 206 74 226 70 248 C 68 254 72 258 78 256 L 112 244 Z',
      '#1A237E', false);
    // Right arm jacket fill
    fl(g,
      'M 188 190 C 198 206 206 226 210 248 C 212 254 208 258 202 256 L 168 244 Z',
      '#1A237E', false);
    // Green toy fill — turquoise/teal
    fl(g,
      'M 118 238 C 116 230 122 222 132 220 C 130 214 132 206 138 202 C 134 200 136 196 140 194 C 144 196 146 200 144 204 C 142 200 146 202 148 208 L 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238 L 164 240 C 170 226 178 224 184 220 C 190 216 194 212 192 208 Z',
      '#26A69A', a);
    // Toy body simpler fill (overlay)
    fl(g,
      'M 118 238 C 116 230 122 222 132 220 C 138 218 144 220 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238 Z',
      '#2BBBAD', false);
    // Father skin — partial face
    fl(g,
      'M 302 102 C 302 84 312 72 326 68 C 340 72 348 84 348 102 C 350 112 346 122 340 130 C 336 134 330 138 326 140 C 322 138 316 134 312 130 C 306 122 302 112 302 102 Z',
      '#EDBE8C', false);
    // Father neck
    fl(g,
      'M 318 138 L 316 154 L 336 154 L 334 138 Z',
      '#E8B882', false);
    // Father shirt — white
    fl(g,
      'M 290 176 C 300 162 314 154 326 154 C 338 154 350 162 360 176 L 360 260 L 282 260 Z',
      '#FAFAFA', false);
  },

  // =====================================================================
  // Layer 8: Color fills — scene (sky, houses, roofs, windows,
  //          stone wall tones, moss, grass, clouds)
  // =====================================================================
  (g, a) => {
    // Overcast gray sky
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 260, fill: '#CFD8DC' }, a);

    // House 1 fill — stone/tan
    fl(g,
      'M 8 148 L 8 260 L 56 260 L 56 126 Z',
      '#D7CCC8', false);
    // House 1 roof — terracotta
    fl(g,
      'M 8 148 L 32 116 L 56 126 Z',
      '#A1887F', false);
    // House 2 fill — lighter stone
    fl(g,
      'M 56 136 L 56 260 L 104 260 L 104 156 Z',
      '#BCAAA4', false);
    // House 2 roof — darker terracotta
    fl(g,
      'M 56 136 L 80 106 L 104 156 Z',
      '#8D6E63', false);
    // House 1 windows
    fe(g, 'rect', { x: 19, y: 169, width: 16, height: 16, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 23, y: 211, width: 18, height: 28, fill: '#546E7A' }, false);
    // House 2 windows
    fe(g, 'rect', { x: 65, y: 169, width: 14, height: 14, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 85, y: 169, width: 10, height: 14, fill: '#546E7A' }, false);
    // Window light reflections
    fe(g, 'rect', { x: 20, y: 170, width: 4, height: 6, fill: '#90A4AE', opacity: '0.4' }, false);
    fe(g, 'rect', { x: 66, y: 170, width: 4, height: 5, fill: '#90A4AE', opacity: '0.4' }, false);

    // Metal shed fill — dark gray
    fl(g,
      'M 232 180 L 232 260 L 278 260 L 278 170 Z',
      '#78909C', false);
    // Shed roof highlight
    fl(g,
      'M 230 180 L 280 170 L 278 174 L 232 184 Z',
      '#90A4AE', false);

    // Stone wall fills — alternating gray/brown tones (upper row)
    fl(g, 'M 0 260 L 38 262 L 40 280 L 0 278 Z', '#9E9E9E', false);
    fl(g, 'M 38 262 L 88 258 L 90 282 L 40 280 Z', '#BDBDBD', false);
    fl(g, 'M 88 258 L 148 260 L 146 284 L 90 282 Z', '#8D6E63', false);
    fl(g, 'M 148 260 L 208 262 L 206 280 L 146 284 Z', '#9E9E9E', false);
    fl(g, 'M 208 262 L 268 258 L 270 282 L 206 280 Z', '#BDBDBD', false);
    fl(g, 'M 268 258 L 328 260 L 330 278 L 270 282 Z', '#8D6E63', false);
    fl(g, 'M 328 260 L 360 262 L 360 280 L 330 278 Z', '#9E9E9E', false);
    // Lower row
    fl(g, 'M 0 278 L 48 282 L 46 300 L 0 300 Z', '#BDBDBD', false);
    fl(g, 'M 48 282 L 118 278 L 120 300 L 46 300 Z', '#9E9E9E', false);
    fl(g, 'M 118 278 L 178 282 L 176 300 L 120 300 Z', '#BDBDBD', false);
    fl(g, 'M 178 282 L 238 280 L 240 300 L 176 300 Z', '#8D6E63', false);
    fl(g, 'M 238 280 L 308 282 L 310 300 L 240 300 Z', '#9E9E9E', false);
    fl(g, 'M 308 282 L 360 278 L 360 300 L 310 300 Z', '#BDBDBD', false);

    // Moss green patches on wall top
    fl(g, 'M 18 258 C 22 254 30 252 36 254 C 42 256 44 258 38 260 L 18 260 Z', '#558B2F', false);
    fl(g, 'M 78 256 C 84 252 92 250 98 252 C 104 254 106 258 98 258 L 78 258 Z', '#558B2F', false);
    fl(g, 'M 158 258 C 164 254 172 252 180 254 C 186 256 188 260 180 260 L 158 260 Z', '#558B2F', false);
    fl(g, 'M 248 256 C 254 252 262 250 268 254 C 274 256 276 260 268 258 L 248 258 Z', '#558B2F', false);
    // Extra moss spots (smaller, lighter)
    fl(g, 'M 52 258 C 56 256 60 254 64 256 C 66 258 64 260 58 260 L 52 260 Z', '#689F38', false);
    fl(g, 'M 210 258 C 214 256 218 254 222 256 C 224 258 222 260 216 260 L 210 260 Z', '#689F38', false);

    // Green grass ground
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#7CB342' }, a);
    // Grass variation — darker band at top
    fl(g,
      'M 0 300 C 20 296 40 298 60 300 C 80 302 100 298 120 300 C 140 302 160 296 180 300 C 200 304 220 298 240 300 C 260 302 280 296 300 300 C 320 302 340 298 360 300 L 360 312 L 0 312 Z',
      '#689F38', false);
    // Lighter grass band
    fl(g,
      'M 0 320 C 40 316 80 318 120 316 C 160 314 200 318 240 316 C 280 314 320 318 360 316 L 360 340 L 0 340 Z',
      '#8BC34A', false);

    // Overcast clouds (layered)
    fl(g,
      'M 0 18 C 30 12 60 16 90 10 C 120 4 150 14 180 8 C 210 2 240 12 270 6 C 300 0 330 10 360 4 L 360 0 L 0 0 Z',
      '#B0BEC5', false);
    fl(g,
      'M 0 46 C 40 40 80 44 120 38 C 160 32 200 42 240 36 C 280 30 320 40 360 34 L 360 18 C 330 24 300 14 270 18 C 240 24 210 14 180 20 C 150 26 120 16 90 22 C 60 28 30 24 0 30 Z',
      '#B0BEC5', false);
    // Lighter cloud wisps
    fl(g,
      'M 40 60 C 60 54 80 58 100 52 C 120 46 140 56 160 50 L 160 58 C 140 64 120 54 100 60 C 80 66 60 62 40 68 Z',
      '#CFD8DC', false);

    // Tree trunk fills
    fl(g,
      'M 188 130 L 188 260 L 192 260 L 192 130 Z',
      '#5D4037', false);
    fl(g,
      'M 298 160 L 298 260 L 302 260 L 302 160 Z',
      '#5D4037', false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, rosy cold cheeks, mouth fill,
  //          jacket emblem detail, toy eye dot, wall texture,
  //          tree bark, father details, clouds, grass streaks
  // =====================================================================
  (g, a) => {
    // Eye shine — left
    fe(g, 'circle', { cx: 128, cy: 88, r: 1.8, fill: 'white' }, a);
    // Eye shine — right
    fe(g, 'circle', { cx: 154, cy: 88, r: 1.8, fill: 'white' }, a);
    // Second smaller highlights
    fe(g, 'circle', { cx: 132, cy: 92, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 158, cy: 92, r: 0.9, fill: 'white', opacity: '0.7' }, false);

    // Rosy cold cheeks — brighter pink (it's winter!)
    fe(g, 'ellipse', { cx: 118, cy: 114, rx: 11, ry: 6, fill: '#FF8A65', opacity: '0.5' }, a);
    fe(g, 'ellipse', { cx: 162, cy: 114, rx: 11, ry: 6, fill: '#FF8A65', opacity: '0.5' }, a);
    // Extra rosy dots for cold emphasis
    fe(g, 'ellipse', { cx: 116, cy: 116, rx: 6, ry: 3, fill: '#EF5350', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 164, cy: 116, rx: 6, ry: 3, fill: '#EF5350', opacity: '0.2' }, false);

    // Mouth fill — pink/red gums
    fl(g,
      'M 126 120 C 130 128 136 132 140 132 C 144 132 150 128 154 120 L 150 120 C 148 126 144 128 140 128 C 136 128 132 126 130 120 Z',
      '#E57373', false);
    // Tongue hint
    fl(g,
      'M 134 124 C 136 128 140 130 144 128 C 146 126 146 122 144 120 L 136 120 C 134 122 134 124 134 124 Z',
      '#EF9A9A', false);
    // Teeth fill (white)
    fl(g,
      'M 128 120 L 152 120 L 150 124 C 146 125 142 126 140 126 C 138 126 134 125 130 124 Z',
      '#FAFAFA', false);

    // Jacket emblem detail — circle with inner design
    fe(g, 'circle', { cx: 140, cy: 210, r: 6, fill: '#283593' }, false);
    fe(g, 'circle', { cx: 140, cy: 210, r: 3.5, fill: '#FFD740' }, false);
    // Emblem inner cross/star hint
    pp(g, [
      'M 138 208 L 142 212',
      'M 142 208 L 138 212'
    ], a, lt);

    // Toy eye dot (already placed in layer 5, reinforce with color)
    fe(g, 'circle', { cx: 139, cy: 200, r: 1.2, fill: '#1B5E20' }, false);
    // Toy nostril
    fe(g, 'circle', { cx: 137, cy: 197, r: 0.6, fill: '#004D40' }, false);

    // Wall texture lines — vertical joints between stones
    pp(g, [
      'M 38 262 L 40 280',
      'M 88 258 L 90 282',
      'M 148 260 L 146 284',
      'M 208 262 L 206 280',
      'M 268 258 L 270 282',
      'M 328 260 L 330 278'
    ], a, lt);
    // Wall mortar texture (subtle horizontal cracks)
    pp(g, [
      'M 10 270 L 30 272',
      'M 55 268 L 75 270',
      'M 100 272 L 130 270',
      'M 160 268 L 190 272',
      'M 220 270 L 255 268',
      'M 285 272 L 320 270'
    ], a, lt);

    // Tree bark texture — vertical lines
    pp(g, [
      'M 189 140 L 189 200',
      'M 191 150 L 191 210',
      'M 299 170 L 299 220',
      'M 301 180 L 301 230'
    ], a, lt);
    // Branch knots
    fe(g, 'circle', { cx: 190, cy: 170, r: 1.5, fill: '#4E342E' }, false);
    fe(g, 'circle', { cx: 300, cy: 195, r: 1.2, fill: '#4E342E' }, false);

    // Father eye shine
    fe(g, 'circle', { cx: 322, cy: 98, r: 1.2, fill: 'white' }, false);
    // Father hair fill
    fl(g,
      'M 304 98 C 302 82 312 72 326 68 C 338 72 346 82 344 98 L 340 96 C 342 86 338 78 332 74 C 326 70 318 70 312 74 C 306 78 304 86 306 94 Z',
      '#4E342E', false);
    // Father shirt wrinkle hint
    pp(g, [
      'M 310 170 C 320 174 330 174 340 170',
      'M 306 186 C 316 190 326 190 336 186'
    ], a, lt);

    // Cloud shapes — upper sky detail
    fl(g,
      'M 200 70 C 210 62 220 66 230 60 C 240 54 250 64 260 58 L 260 68 C 250 74 240 64 230 70 C 220 76 210 72 200 78 Z',
      '#B0BEC5', false);
    fl(g,
      'M 300 50 C 310 44 320 48 330 42 L 330 52 C 320 58 310 54 300 58 Z',
      '#CFD8DC', false);

    // Grass detail streaks (individual blades)
    pp(g, [
      'M 30 318 C 34 312 36 308 38 312',
      'M 90 316 C 94 310 96 306 98 310',
      'M 150 320 C 154 314 156 310 158 314',
      'M 220 316 C 224 310 226 306 228 310',
      'M 300 318 C 304 312 306 308 308 312',
      'M 60 322 C 64 316 66 312 68 316',
      'M 180 324 C 184 318 186 314 188 318',
      'M 260 320 C 264 314 266 310 268 314',
      'M 340 322 C 344 316 346 312 348 316'
    ], a, lt);
    // Darker grass tufts near wall base
    pp(g, [
      'M 10 302 C 14 298 16 296 18 300',
      'M 50 304 C 54 300 56 298 58 302',
      'M 100 302 C 104 298 106 296 108 300',
      'M 160 304 C 164 300 166 298 168 302',
      'M 240 302 C 244 298 246 296 248 300',
      'M 320 304 C 324 300 326 298 328 302'
    ], a, lt);

    // Stone path texture between houses
    pp(g, [
      'M 108 258 C 116 256 124 254 132 256',
      'M 140 254 C 150 252 160 254 170 258'
    ], a, lt);
  }
];

const paisestudioLayers = [
  // =====================================================================
  // Layer 0: Composition guides — center vertical, Sandra zone, Ricardo
  //          behind zone, Miguel on hip zone, shoulder line, pampas zones
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Sandra zone (center figure)
    pp(g, ['M 120 30 L 120 420', 'M 240 30 L 240 420'], a, lt);
    // Sandra head crosshair
    pp(g, ['M 180 50 L 180 170', 'M 130 110 L 230 110'], a, lt);
    // Ricardo behind zone (upper right-center)
    pp(g, ['M 190 20 L 190 260', 'M 280 20 L 280 260'], a, lt);
    // Ricardo head crosshair
    pp(g, ['M 228 30 L 228 120', 'M 195 70 L 265 70'], a, lt);
    // Miguel on hip zone (left)
    pp(g, ['M 60 50 L 60 320', 'M 150 50 L 150 320'], a, lt);
    // Miguel head crosshair
    pp(g, ['M 106 55 L 106 160', 'M 65 105 L 145 105'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 50 195 L 310 195'], a, lt);
    // Pampas grass zone left
    pp(g, ['M 0 0 L 0 420 L 70 420 L 70 0'], a, lt);
    // Pampas grass zone right
    pp(g, ['M 290 0 L 290 420 L 360 420 L 360 0'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — Ricardo head behind, Sandra head center,
  //          Sandra neck/body/shoulders/arms, Miguel head+body on hip
  // =====================================================================
  (g, a) => {
    // --- Ricardo (behind Sandra, slightly higher and right) ---
    // Ricardo head — oval, broader jaw
    pp(g, [
      'M 228 38 C 210 38 198 52 196 72 C 194 90 198 106 206 114 C 214 122 222 126 228 128 C 234 126 242 122 250 114 C 258 106 262 90 260 72 C 258 52 246 38 228 38 Z'
    ], a);
    // Ricardo left ear
    pp(g, ['M 196 68 C 190 64 186 68 186 76 C 186 84 190 88 196 86'], a);
    // Ricardo right ear
    pp(g, ['M 260 66 C 266 62 270 66 270 74 C 270 82 266 86 260 84'], a);
    // Ricardo neck
    pp(g, ['M 220 126 L 218 148', 'M 238 126 L 240 148'], a);
    // Ricardo shoulders and body (behind Sandra)
    pp(g, [
      'M 184 178 C 194 160 212 148 228 148 C 244 148 264 160 276 178 L 282 300',
      'M 184 178 L 178 300'
    ], a);

    // --- Sandra (center, focal point) ---
    // Sandra head — elegant oval, slightly narrower chin
    pp(g, [
      'M 180 58 C 158 58 144 72 142 90 C 140 108 144 124 152 134 C 158 142 168 150 180 152 C 192 150 202 142 208 134 C 216 124 220 108 218 90 C 216 72 202 58 180 58 Z'
    ], a);
    // Sandra left ear (partially behind hair)
    pp(g, ['M 142 88 C 138 84 135 88 135 94 C 135 100 138 104 142 102'], a);
    // Sandra right ear
    pp(g, ['M 218 86 C 222 82 225 86 225 92 C 225 98 222 102 218 100'], a);
    // Sandra neck
    pp(g, ['M 172 150 L 170 168', 'M 188 150 L 190 168'], a);
    // Sandra shoulders and body — turtleneck
    pp(g, [
      'M 120 202 C 132 184 156 170 180 168 C 204 170 228 184 240 202 L 248 420',
      'M 120 202 L 112 420'
    ], a);
    // Sandra left arm (holding Miguel)
    pp(g, [
      'M 132 190 C 122 200 114 216 110 234 C 108 248 108 260 110 270'
    ], a);
    // Sandra right arm (resting)
    pp(g, [
      'M 228 190 C 236 200 242 216 246 234 C 248 248 248 260 246 270'
    ], a);

    // --- Miguel (small child on Sandra's left hip) ---
    // Miguel head — round child head
    pp(g, [
      'M 106 66 C 90 66 80 78 80 94 C 80 110 86 122 94 128 C 100 132 106 134 106 134 C 106 134 112 132 118 128 C 126 122 132 110 132 94 C 132 78 122 66 106 66 Z'
    ], a);
    // Miguel left ear
    pp(g, ['M 80 90 C 74 86 70 90 70 96 C 70 102 74 106 80 104'], a);
    // Miguel right ear
    pp(g, ['M 132 88 C 138 84 142 88 142 94 C 142 100 138 104 132 102'], a);
    // Miguel neck (short, child)
    pp(g, ['M 100 134 L 98 144', 'M 112 134 L 114 144'], a);
    // Miguel body — plaid shirt, on Sandra's hip
    pp(g, [
      'M 76 172 C 84 156 96 146 106 144 C 116 146 128 156 136 172 L 140 280',
      'M 76 172 L 72 280'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details all three — eyes, eyebrows, noses, smiles
  // =====================================================================
  (g, a) => {
    // --- Sandra face ---
    // Left eye — almond shape
    pp(g, [
      'M 164 98 C 166 94 172 91 177 92 C 182 93 186 96 186 100 C 186 104 182 108 177 108 C 172 108 166 104 164 98 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 186 98 C 188 94 194 91 199 92 C 204 93 208 96 208 100 C 208 104 204 108 199 108 C 194 108 188 104 186 98 Z'
    ], a);
    // Sandra left pupil
    fe(g, 'ellipse', { cx: 176, cy: 101, rx: 3.5, ry: 3, fill: a ? HL : '#3E2518' }, a);
    // Sandra right pupil
    fe(g, 'ellipse', { cx: 198, cy: 101, rx: 3.5, ry: 3, fill: a ? HL : '#3E2518' }, a);
    // Sandra eyelashes upper left
    pp(g, [
      'M 164 97 C 162 94 161 91 162 88',
      'M 168 95 C 166 92 166 89 167 86',
      'M 172 94 C 171 91 172 88 174 86'
    ], a);
    // Sandra eyelashes upper right
    pp(g, [
      'M 208 97 C 210 94 211 91 210 88',
      'M 204 95 C 206 92 206 89 205 86',
      'M 200 94 C 201 91 200 88 198 86'
    ], a);
    // Sandra eyebrows — arched
    pp(g, ['M 160 86 C 164 80 172 78 180 80'], a);
    pp(g, ['M 184 80 C 192 78 200 80 206 86'], a);
    // Sandra nose
    pp(g, ['M 180 92 C 179 98 178 106 176 112'], a);
    pp(g, ['M 174 116 C 176 120 180 122 184 120 C 186 118 188 116 188 114'], a);
    // Sandra wide smile showing teeth
    pp(g, ['M 166 134 C 170 130 176 128 180 128 C 184 128 190 130 194 134'], a);
    pp(g, ['M 166 134 C 170 140 176 143 180 143 C 184 143 190 140 194 134'], a);
    // Teeth line
    pp(g, ['M 168 134 L 192 134'], a, lt);

    // --- Ricardo face (behind Sandra, slightly above) ---
    // Ricardo left eye
    pp(g, [
      'M 214 78 C 216 74 220 72 224 73 C 228 74 230 78 228 81 C 226 84 218 83 214 78 Z'
    ], a);
    // Ricardo right eye
    pp(g, [
      'M 236 76 C 238 72 242 70 246 71 C 250 72 252 76 250 79 C 248 82 240 81 236 76 Z'
    ], a);
    // Ricardo pupils
    fe(g, 'circle', { cx: 222, cy: 78, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 244, cy: 76, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Ricardo eyebrows
    pp(g, ['M 212 72 C 216 68 222 66 228 68'], a);
    pp(g, ['M 234 66 C 240 64 246 66 252 70'], a);
    // Ricardo nose
    pp(g, ['M 230 72 C 229 80 228 88 226 94'], a);
    pp(g, ['M 224 98 C 226 102 230 104 234 102 C 236 100 238 98 238 96'], a);
    // Ricardo warm smile
    pp(g, ['M 218 112 C 222 108 226 106 230 106 C 234 106 238 108 242 112'], a);
    pp(g, ['M 220 114 C 226 118 234 118 240 114'], a);
    // Beard stubble dots along jawline
    const stubble = [
      [200, 106], [198, 100], [198, 94], [198, 88],
      [256, 84], [258, 90], [258, 96], [258, 102],
      [206, 116], [210, 120], [214, 124], [220, 126],
      [236, 126], [242, 124], [248, 120], [252, 116],
      [224, 128], [228, 130], [232, 130], [222, 106], [226, 106],
      [234, 106], [238, 106]
    ];
    stubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#5D4037' }, a);
    });

    // --- Miguel face ---
    // Miguel left eye — big round child eye
    pp(g, [
      'M 92 92 C 93 88 97 86 101 87 C 105 88 108 91 108 95 C 108 99 105 102 101 102 C 97 102 93 98 92 92 Z'
    ], a);
    // Miguel right eye
    pp(g, [
      'M 110 92 C 111 88 115 86 119 87 C 123 88 126 91 126 95 C 126 99 123 102 119 102 C 115 102 111 98 110 92 Z'
    ], a);
    // Miguel pupils
    fe(g, 'circle', { cx: 101, cy: 95, r: 3, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 119, cy: 95, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Miguel eyebrows (soft, child)
    pp(g, ['M 90 86 C 94 82 100 80 106 82'], a);
    pp(g, ['M 112 82 C 118 80 124 82 128 86'], a);
    // Miguel nose — small button
    pp(g, ['M 106 92 C 105 98 104 104 103 108'], a);
    pp(g, ['M 100 110 C 103 114 107 116 110 114 C 112 112 114 110 114 108'], a);
    // Miguel big excited smile showing teeth
    pp(g, ['M 94 120 C 98 116 102 114 106 114 C 110 114 114 116 118 120'], a);
    pp(g, ['M 94 120 C 98 126 102 128 106 128 C 110 128 114 126 118 120'], a);
    // Miguel teeth line
    pp(g, ['M 96 120 L 116 120'], a, lt);
    // Miguel ears inner
    pp(g, ['M 74 94 C 72 98 72 102 74 104'], a, lt);
    pp(g, ['M 138 92 C 140 96 140 100 138 102'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and accessories — Sandra dark straight hair with middle
  //          part, earrings, chain necklace; Ricardo short hair; Miguel hair
  // =====================================================================
  (g, a) => {
    // --- Sandra hair: dark straight, middle part, falls to shoulders ---
    // Hair top volume
    pp(g, [
      'M 146 92 C 144 74 150 58 164 50 C 172 46 180 44 188 46 C 200 50 212 60 216 78 C 218 88 218 94 218 98'
    ], a);
    // Left side hair falling to shoulder
    pp(g, [
      'M 146 92 C 144 108 140 128 136 148 C 132 168 128 188 126 204'
    ], a);
    // Right side hair falling to shoulder
    pp(g, [
      'M 218 98 C 220 114 222 134 222 148 C 222 168 220 188 218 204'
    ], a);
    // Middle part line
    pp(g, ['M 180 46 C 180 52 180 60 180 68'], a);
    // Hair inner texture strands
    pp(g, [
      'M 156 56 C 164 50 174 48 182 50',
      'M 184 50 C 192 48 200 50 208 58',
      'M 150 72 C 158 64 168 60 178 62',
      'M 182 62 C 192 60 202 64 210 72'
    ], a, lt);
    // Left hair volume strands
    pp(g, [
      'M 148 98 C 146 116 142 136 138 156',
      'M 144 96 C 140 114 136 138 132 162'
    ], a, lt);
    // Right hair volume strands
    pp(g, [
      'M 216 102 C 218 118 220 138 220 158',
      'M 220 100 C 222 116 224 138 224 162'
    ], a, lt);

    // --- Sandra gold drop earrings ---
    // Left earring
    pp(g, ['M 140 100 C 138 104 136 110 138 116 C 140 120 142 118 142 114'], a);
    fe(g, 'ellipse', { cx: 138, cy: 118, rx: 3, ry: 4, fill: 'none', stroke: a ? HL : '#B8860B', 'stroke-width': a ? HW : PW }, a);
    // Right earring
    pp(g, ['M 220 98 C 222 102 224 108 222 114 C 220 118 218 116 218 112'], a);
    fe(g, 'ellipse', { cx: 222, cy: 116, rx: 3, ry: 4, fill: 'none', stroke: a ? HL : '#B8860B', 'stroke-width': a ? HW : PW }, a);

    // --- Sandra chunky gold chain necklace ---
    // Chain link shapes across chest
    pp(g, [
      'M 156 172 C 158 168 162 166 166 168 C 170 170 170 174 166 176 C 162 178 158 176 156 172 Z',
      'M 166 170 C 168 166 172 164 176 166 C 180 168 180 172 176 174 C 172 176 168 174 166 170 Z',
      'M 176 168 C 178 164 182 162 186 164 C 190 166 190 170 186 172 C 182 174 178 172 176 168 Z',
      'M 186 168 C 188 164 192 162 196 164 C 200 166 200 170 196 172 C 192 174 188 172 186 168 Z',
      'M 196 170 C 198 166 202 164 206 168 C 208 172 206 176 202 176 C 198 176 196 174 196 170 Z'
    ], a);

    // --- Ricardo short brown hair with texture ---
    pp(g, [
      'M 200 72 C 198 56 204 42 216 36 C 224 32 234 32 242 36 C 252 42 260 56 258 72'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 204 68 C 204 54 210 44 220 40 C 230 36 240 38 248 44 C 254 52 256 62 256 70'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 214 38 C 220 34 228 34 234 38',
      'M 208 48 C 216 42 226 40 236 44',
      'M 204 58 C 212 50 222 48 232 52'
    ], a, lt);

    // --- Miguel short brown hair ---
    pp(g, [
      'M 82 90 C 80 76 86 66 96 60 C 104 56 112 56 120 62 C 128 68 132 78 132 90'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 86 86 C 86 74 92 66 100 62 C 108 58 116 60 122 66 C 128 72 130 80 130 86'
    ], a);
    // Hair texture
    pp(g, [
      'M 96 60 C 102 56 110 56 116 60',
      'M 90 70 C 98 64 108 62 118 66'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — Sandra turtleneck folds, Ricardo quarter-
  //          zip collar+zip, Miguel plaid shirt pattern
  // =====================================================================
  (g, a) => {
    // --- Sandra turtleneck neckline and folds ---
    // Turtleneck high collar
    pp(g, [
      'M 164 162 C 168 158 174 156 180 156 C 186 156 192 158 196 162',
      'M 162 166 C 168 162 174 160 180 160 C 186 160 192 162 198 166'
    ], a);
    // Collar fold ring
    pp(g, ['M 166 164 C 172 160 178 158 184 160 C 190 162 194 164 196 166'], a, lt);
    // Body center seam
    pp(g, ['M 180 168 L 180 380'], a, lt);
    // Shoulder seam hints
    pp(g, [
      'M 148 182 C 154 176 164 172 174 170',
      'M 212 182 C 206 176 196 172 186 170'
    ], a, lt);
    // Sleeve fold lines
    pp(g, [
      'M 128 198 C 124 210 120 224 118 236',
      'M 232 198 C 236 210 240 224 242 236'
    ], a, lt);
    // Torso fold lines
    pp(g, [
      'M 150 210 C 148 230 146 250 148 270',
      'M 210 210 C 212 230 214 250 212 270'
    ], a, lt);

    // --- Ricardo quarter-zip fleece ---
    // Collar fold
    pp(g, [
      'M 214 150 C 210 146 206 146 204 150 C 202 154 206 158 210 156',
      'M 242 150 C 246 146 250 146 252 150 C 254 154 250 158 246 156'
    ], a);
    // Collar neckline
    pp(g, ['M 210 156 C 218 160 226 162 234 160 C 240 158 244 156 246 156'], a);
    // Zip line down center
    pp(g, ['M 228 162 L 228 300'], a);
    // Zipper teeth
    for (let y = 168; y < 296; y += 8) {
      pp(g, [`M 226 ${y} L 230 ${y}`], a, lt);
    }
    // Zip pull rectangle
    fe(g, 'rect', {
      x: 225, y: 160, width: 6, height: 8, rx: 1,
      fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW
    }, a);
    // Shoulder seams
    pp(g, ['M 194 166 C 200 158 212 152 224 150'], a, lt);
    pp(g, ['M 266 166 C 258 158 246 152 234 150'], a, lt);

    // --- Miguel plaid shirt pattern ---
    // Collar
    pp(g, [
      'M 96 146 C 92 142 88 142 86 146 C 84 150 88 154 92 152',
      'M 116 146 C 120 142 124 142 126 146 C 128 150 124 154 120 152'
    ], a);
    pp(g, ['M 92 152 C 98 156 104 158 110 156 C 116 154 118 152 120 152'], a);
    // Vertical plaid lines
    pp(g, [
      'M 88 152 L 82 280',
      'M 98 150 L 92 280',
      'M 114 150 L 120 280',
      'M 124 152 L 130 280'
    ], a, lt);
    // Horizontal plaid lines
    pp(g, [
      'M 76 180 L 140 180',
      'M 76 200 L 140 200',
      'M 76 220 L 140 220',
      'M 76 240 L 140 240',
      'M 76 260 L 140 260'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands — Sandra holding Miguel, Ricardo hands on Sandra,
  //          Miguel small hands
  // =====================================================================
  (g, a) => {
    // --- Sandra left hand supporting Miguel ---
    // Arm leading to hand under Miguel
    pp(g, ['M 110 270 C 108 258 104 248 100 242 C 96 236 92 234 88 236'], a);
    // Palm under Miguel's body
    pp(g, [
      'M 88 236 C 82 238 78 244 78 250 C 78 256 82 260 88 260 C 92 260 96 258 100 254'
    ], a);
    // Thumb
    pp(g, ['M 100 244 C 104 240 106 234 104 230 C 102 226 98 226 96 230'], a);
    // Fingers wrapping under Miguel
    pp(g, [
      'M 86 240 C 82 234 78 228 76 224 C 74 220 76 218 80 218',
      'M 84 242 C 78 236 74 230 72 226 C 70 222 72 220 76 220',
      'M 82 246 C 76 240 72 234 70 230 C 68 226 70 224 74 224',
      'M 82 252 C 78 248 74 242 72 238 C 70 234 72 232 76 234'
    ], a);

    // --- Sandra right hand ---
    pp(g, ['M 246 270 C 248 258 250 246 252 238'], a);
    // Right hand resting
    pp(g, [
      'M 252 238 C 256 234 260 232 264 234 C 268 236 268 242 264 246 C 260 250 254 250 250 248'
    ], a);
    // Fingers
    pp(g, [
      'M 260 236 C 264 230 268 226 270 222 C 272 218 270 216 266 218',
      'M 262 238 C 268 232 272 228 274 224 C 276 220 274 218 270 220',
      'M 264 240 C 270 236 274 232 276 228 C 278 224 276 222 272 224'
    ], a);
    // Thumb
    pp(g, ['M 254 240 C 250 236 248 230 250 226 C 252 222 256 222 258 226'], a);

    // --- Ricardo hands on Sandra's waist/arms ---
    // Ricardo left hand on Sandra's left arm
    pp(g, [
      'M 186 210 C 178 220 170 232 164 240'
    ], a);
    pp(g, [
      'M 164 240 C 160 244 156 242 156 238 C 156 234 160 230 164 228 C 168 226 170 228 170 232'
    ], a);
    // Ricardo right hand on Sandra's right side
    pp(g, [
      'M 270 210 C 264 220 256 232 250 240'
    ], a);
    pp(g, [
      'M 250 240 C 246 244 242 242 242 238 C 242 234 246 230 250 228 C 254 226 256 228 256 232'
    ], a);

    // --- Miguel small hands ---
    // Left hand
    pp(g, [
      'M 76 192 C 70 196 66 200 64 206 C 62 210 64 214 68 214 C 72 214 76 210 78 204'
    ], a);
    // Right hand
    pp(g, [
      'M 136 192 C 140 196 144 202 146 208 C 148 212 146 216 142 214 C 138 212 134 208 132 202'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — pampas grass LEFT and RIGHT with feathery plumes,
  //          green decorative balls, golden leaf shapes
  // =====================================================================
  (g, a) => {
    // --- Pampas grass LEFT arrangement ---
    // Main stems
    pp(g, [
      'M 40 420 C 42 360 44 300 42 240 C 40 180 36 120 30 60',
      'M 52 420 C 54 350 56 280 54 220 C 50 160 44 100 38 40',
      'M 32 420 C 30 370 28 320 26 270 C 24 220 22 170 24 120'
    ], a);
    // Plume feathers radiating — left arrangement top
    pp(g, [
      'M 30 60 C 20 40 16 20 18 0',
      'M 30 60 C 24 38 22 16 26 0',
      'M 30 60 C 34 40 38 20 36 0',
      'M 38 40 C 28 20 24 4 28 0',
      'M 38 40 C 42 22 48 6 44 0',
      'M 38 40 C 32 24 26 10 20 0'
    ], a);
    // Plume feather texture strokes
    pp(g, [
      'M 24 48 C 18 30 14 12 16 0',
      'M 34 52 C 40 32 44 14 40 0',
      'M 20 70 C 12 50 8 28 10 8',
      'M 42 66 C 48 46 52 26 50 8',
      'M 26 80 C 16 60 10 38 12 18',
      'M 44 76 C 52 56 56 34 54 16'
    ], a, lt);
    // Mid plumes on left
    pp(g, [
      'M 24 120 C 14 90 8 60 10 30',
      'M 24 120 C 18 94 14 68 18 42',
      'M 24 120 C 30 94 34 68 32 42'
    ], a, lt);
    // Lower left feathery accents
    pp(g, [
      'M 42 240 C 32 210 24 180 20 150',
      'M 54 220 C 46 194 40 168 38 142',
      'M 42 240 C 50 214 56 188 58 162'
    ], a, lt);

    // --- Pampas grass RIGHT arrangement ---
    // Main stems
    pp(g, [
      'M 320 420 C 318 360 316 300 318 240 C 320 180 324 120 330 60',
      'M 308 420 C 306 350 304 280 306 220 C 310 160 316 100 322 40',
      'M 332 420 C 334 370 336 320 338 270 C 340 220 342 170 340 120'
    ], a);
    // Plume feathers radiating — right arrangement top
    pp(g, [
      'M 330 60 C 340 40 344 20 342 0',
      'M 330 60 C 336 38 338 16 334 0',
      'M 330 60 C 326 40 322 20 324 0',
      'M 322 40 C 332 20 336 4 332 0',
      'M 322 40 C 318 22 312 6 316 0',
      'M 322 40 C 328 24 334 10 340 0'
    ], a);
    // Plume feather texture strokes
    pp(g, [
      'M 336 48 C 342 30 346 12 344 0',
      'M 326 52 C 320 32 316 14 320 0',
      'M 340 70 C 348 50 352 28 350 8',
      'M 318 66 C 312 46 308 26 310 8',
      'M 334 80 C 344 60 350 38 348 18',
      'M 316 76 C 308 56 304 34 306 16'
    ], a, lt);
    // Mid plumes on right
    pp(g, [
      'M 340 120 C 348 90 352 60 350 30',
      'M 340 120 C 344 94 348 68 344 42',
      'M 340 120 C 336 94 332 68 334 42'
    ], a, lt);

    // --- Green decorative balls ---
    // Left side balls
    pp(g, ['M 38 100 C 42 96 48 96 52 100 C 56 104 56 110 52 114 C 48 118 42 118 38 114 C 34 110 34 104 38 100 Z'], a);
    pp(g, ['M 18 180 C 22 176 28 176 32 180 C 36 184 36 190 32 194 C 28 198 22 198 18 194 C 14 190 14 184 18 180 Z'], a);
    // Right side balls
    pp(g, ['M 312 110 C 316 106 322 106 326 110 C 330 114 330 120 326 124 C 322 128 316 128 312 124 C 308 120 308 114 312 110 Z'], a);
    pp(g, ['M 330 200 C 334 196 340 196 344 200 C 348 204 348 210 344 214 C 340 218 334 218 330 214 C 326 210 326 204 330 200 Z'], a);

    // --- Golden leaf shapes ---
    // Left side leaves
    pp(g, ['M 48 130 C 56 120 64 118 66 126 C 68 134 60 140 48 130 Z'], a);
    pp(g, ['M 22 150 C 30 140 38 138 40 146 C 42 154 34 160 22 150 Z'], a);
    pp(g, ['M 56 160 C 64 150 72 148 74 156 C 76 164 68 170 56 160 Z'], a);
    // Right side leaves
    pp(g, ['M 312 140 C 304 130 296 128 294 136 C 292 144 300 150 312 140 Z'], a);
    pp(g, ['M 340 160 C 332 150 324 148 322 156 C 320 164 328 170 340 160 Z'], a);
    pp(g, ['M 306 180 C 298 170 290 168 288 176 C 286 184 294 190 306 180 Z'], a);

    // White cotton/berry accents
    fe(g, 'circle', { cx: 52, cy: 50, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 36, cy: 90, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 60, cy: 140, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 310, cy: 56, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 328, cy: 96, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 302, cy: 150, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
  },

  // =====================================================================
  // Layer 7: Color fills FIGURES — skin, hair, clothing fills for all three
  // =====================================================================
  (g, a) => {
    // --- Sandra skin ---
    fl(g,
      'M 180 60 C 160 60 146 74 144 92 C 142 110 146 126 154 136 C 160 144 170 152 180 154 C 190 152 200 144 206 136 C 214 126 218 110 216 92 C 214 74 200 60 180 60 Z',
      '#FADCC2', a);
    // Sandra neck skin
    fe(g, 'rect', { x: 170, y: 148, width: 20, height: 20, rx: 5, fill: '#F0C8A8' }, false);
    // Sandra ears
    fe(g, 'ellipse', { cx: 138, cy: 94, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 92, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    // Sandra eye whites
    fl(g, 'M 164 98 C 166 94 172 91 177 92 C 182 93 186 96 186 100 C 186 104 182 108 177 108 C 172 108 166 104 164 98 Z', '#FFFFFF', false);
    fl(g, 'M 186 98 C 188 94 194 91 199 92 C 204 93 208 96 208 100 C 208 104 204 108 199 108 C 194 108 188 104 186 98 Z', '#FFFFFF', false);

    // Sandra hair fill — dark straight
    fl(g,
      'M 148 92 C 146 74 152 58 166 50 C 174 46 182 44 190 46 C 202 50 214 60 218 78 C 220 88 220 98 218 102 L 214 98 C 216 90 216 80 214 72 C 210 60 202 52 192 48 C 184 46 174 48 166 54 C 156 62 150 74 150 88 Z',
      '#3E2518', a);
    // Hair sides falling down — left
    fl(g,
      'M 148 92 C 146 108 142 128 138 148 C 134 168 130 188 128 204 L 124 204 C 126 186 130 166 134 146 C 138 126 142 106 144 90 Z',
      '#3E2518', false);
    // Hair sides falling down — right
    fl(g,
      'M 218 98 C 220 114 222 134 222 148 C 222 168 220 188 218 204 L 222 204 C 224 188 226 168 226 148 C 226 134 224 114 222 98 Z',
      '#3E2518', false);

    // Sandra teal turtleneck fill
    fl(g,
      'M 120 202 C 132 184 156 170 180 168 C 204 170 228 184 240 202 L 248 420 L 112 420 Z',
      '#00695C', a);
    // Turtleneck collar fill (slightly lighter)
    fl(g,
      'M 164 162 C 168 158 174 156 180 156 C 186 156 192 158 196 162 L 198 168 C 192 164 186 162 180 162 C 174 162 168 164 162 168 Z',
      '#00796B', false);

    // Sandra necklace gold chain fill
    const chainLinks = [
      'M 156 172 C 158 168 162 166 166 168 C 170 170 170 174 166 176 C 162 178 158 176 156 172 Z',
      'M 166 170 C 168 166 172 164 176 166 C 180 168 180 172 176 174 C 172 176 168 174 166 170 Z',
      'M 176 168 C 178 164 182 162 186 164 C 190 166 190 170 186 172 C 182 174 178 172 176 168 Z',
      'M 186 168 C 188 164 192 162 196 164 C 200 166 200 170 196 172 C 192 174 188 172 186 168 Z',
      'M 196 170 C 198 166 202 164 206 168 C 208 172 206 176 202 176 C 198 176 196 174 196 170 Z'
    ];
    chainLinks.forEach(d => fl(g, d, '#FFD700', false));

    // Sandra gold earring fills
    fe(g, 'ellipse', { cx: 138, cy: 118, rx: 3, ry: 4, fill: '#FFD700' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 116, rx: 3, ry: 4, fill: '#FFD700' }, false);

    // --- Ricardo skin ---
    fl(g,
      'M 228 40 C 212 40 200 54 198 74 C 196 92 200 108 208 116 C 216 124 224 128 228 130 C 232 128 240 124 248 116 C 256 108 260 92 258 74 C 256 54 244 40 228 40 Z',
      '#EDBE8C', a);
    // Ricardo ears
    fe(g, 'ellipse', { cx: 190, cy: 76, rx: 5, ry: 10, fill: '#DEB07A' }, false);
    fe(g, 'ellipse', { cx: 266, cy: 74, rx: 5, ry: 10, fill: '#DEB07A' }, false);
    // Ricardo neck
    fe(g, 'rect', { x: 218, y: 124, width: 20, height: 24, rx: 4, fill: '#DEB07A' }, false);
    // Ricardo eye whites
    fl(g, 'M 214 78 C 216 74 220 72 224 73 C 228 74 230 78 228 81 C 226 84 218 83 214 78 Z', '#FFFFFF', false);
    fl(g, 'M 236 76 C 238 72 242 70 246 71 C 250 72 252 76 250 79 C 248 82 240 81 236 76 Z', '#FFFFFF', false);

    // Ricardo gray fleece fill
    fl(g,
      'M 184 178 C 194 160 212 148 228 148 C 244 148 264 160 276 178 L 282 300 L 178 300 Z',
      '#78909C', a);

    // --- Miguel skin ---
    fl(g,
      'M 106 68 C 92 68 82 80 82 96 C 82 112 88 124 96 130 C 102 134 106 136 106 136 C 106 136 110 134 116 130 C 124 124 130 112 130 96 C 130 80 120 68 106 68 Z',
      '#FADCC2', a);
    // Miguel ears
    fe(g, 'ellipse', { cx: 74, cy: 96, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 138, cy: 94, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    // Miguel neck
    fe(g, 'rect', { x: 98, y: 132, width: 16, height: 12, rx: 3, fill: '#F0C8A8' }, false);
    // Miguel eye whites
    fl(g, 'M 92 92 C 93 88 97 86 101 87 C 105 88 108 91 108 95 C 108 99 105 102 101 102 C 97 102 93 98 92 92 Z', '#FFFFFF', false);
    fl(g, 'M 110 92 C 111 88 115 86 119 87 C 123 88 126 91 126 95 C 126 99 123 102 119 102 C 115 102 111 98 110 92 Z', '#FFFFFF', false);

    // Miguel plaid shirt base fill
    fl(g,
      'M 76 172 C 84 156 96 146 106 144 C 116 146 128 156 136 172 L 140 280 L 72 280 Z',
      '#D7CCC8', a);

    // Miguel hair fill
    fl(g,
      'M 84 90 C 82 76 88 66 98 60 C 106 56 114 56 122 62 C 130 68 134 78 134 90 L 130 86 C 130 78 126 70 120 64 C 114 60 106 58 100 62 C 92 68 86 76 86 86 Z',
      '#4E342E', false);
  },

  // =====================================================================
  // Layer 8: Color fills SCENE — green wall, floor, pampas grass fills,
  //          green balls, golden leaves, plaid shirt accent stripes
  // =====================================================================
  (g, a) => {
    // Green wall background
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 420, fill: '#2E7D32' }, a);
    // Floor/base darker green
    fe(g, 'rect', { x: 0, y: 420, width: 360, height: 30, fill: '#1B5E20' }, false);

    // --- Pampas grass fills LEFT ---
    // Main plume fills
    fl(g,
      'M 14 0 C 20 20 26 50 30 60 C 28 50 22 30 18 10 C 16 4 14 0 14 0 Z',
      '#D7CCC8', false);
    fl(g,
      'M 28 0 C 30 16 34 40 38 40 C 36 30 32 14 30 0 Z',
      '#BCAAA4', false);
    fl(g,
      'M 38 0 C 36 14 34 30 30 60 C 34 40 40 18 42 0 Z',
      '#D7CCC8', false);
    // Broader plume mass left
    fl(g,
      'M 8 8 C 14 30 20 60 24 120 C 18 80 12 44 6 14 Z',
      '#D7CCC8', false);
    fl(g,
      'M 44 8 C 46 30 50 60 54 120 C 50 80 46 44 44 14 Z',
      '#BCAAA4', false);
    // Mid-height plume fills
    fl(g,
      'M 20 150 C 28 170 34 200 42 240 C 38 210 30 180 22 160 Z',
      '#D7CCC8', false);
    fl(g,
      'M 50 142 C 54 168 56 196 54 220 C 52 196 48 168 46 148 Z',
      '#BCAAA4', false);
    // Stem area fills
    fl(g,
      'M 36 240 C 38 300 40 360 40 420 L 44 420 C 44 360 42 300 40 240 Z',
      '#BCAAA4', false);
    fl(g,
      'M 48 220 C 50 280 52 340 52 420 L 56 420 C 56 340 54 280 52 220 Z',
      '#D7CCC8', false);

    // --- Pampas grass fills RIGHT ---
    fl(g,
      'M 346 0 C 340 20 334 50 330 60 C 332 50 338 30 342 10 C 344 4 346 0 346 0 Z',
      '#D7CCC8', false);
    fl(g,
      'M 332 0 C 330 16 326 40 322 40 C 324 30 328 14 330 0 Z',
      '#BCAAA4', false);
    fl(g,
      'M 322 0 C 324 14 326 30 330 60 C 326 40 320 18 318 0 Z',
      '#D7CCC8', false);
    // Broader plume mass right
    fl(g,
      'M 352 8 C 346 30 340 60 336 120 C 342 80 348 44 354 14 Z',
      '#D7CCC8', false);
    fl(g,
      'M 316 8 C 314 30 310 60 306 120 C 310 80 314 44 316 14 Z',
      '#BCAAA4', false);
    // Mid-height plume fills right
    fl(g,
      'M 340 150 C 332 170 326 200 318 240 C 322 210 330 180 338 160 Z',
      '#D7CCC8', false);
    fl(g,
      'M 310 142 C 306 168 304 196 306 220 C 308 196 312 168 314 148 Z',
      '#BCAAA4', false);
    // Stem area fills right
    fl(g,
      'M 324 240 C 322 300 320 360 320 420 L 316 420 C 316 360 318 300 320 240 Z',
      '#BCAAA4', false);
    fl(g,
      'M 312 220 C 310 280 308 340 308 420 L 304 420 C 304 340 306 280 308 220 Z',
      '#D7CCC8', false);

    // --- Green decorative balls fills ---
    fe(g, 'circle', { cx: 45, cy: 107, r: 8, fill: '#26A69A' }, a);
    fe(g, 'circle', { cx: 25, cy: 187, r: 7, fill: '#2E7D32' }, false);
    fe(g, 'circle', { cx: 319, cy: 117, r: 8, fill: '#26A69A' }, a);
    fe(g, 'circle', { cx: 337, cy: 207, r: 7, fill: '#2E7D32' }, false);

    // --- Golden leaf fills ---
    fl(g, 'M 48 130 C 56 120 64 118 66 126 C 68 134 60 140 48 130 Z', '#FFB300', false);
    fl(g, 'M 22 150 C 30 140 38 138 40 146 C 42 154 34 160 22 150 Z', '#FFB300', false);
    fl(g, 'M 56 160 C 64 150 72 148 74 156 C 76 164 68 170 56 160 Z', '#FFB300', false);
    fl(g, 'M 312 140 C 304 130 296 128 294 136 C 292 144 300 150 312 140 Z', '#FFB300', false);
    fl(g, 'M 340 160 C 332 150 324 148 322 156 C 320 164 328 170 340 160 Z', '#FFB300', false);
    fl(g, 'M 306 180 C 298 170 290 168 288 176 C 286 184 294 190 306 180 Z', '#FFB300', false);

    // White cotton/berry fills
    fe(g, 'circle', { cx: 52, cy: 50, r: 3, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 36, cy: 90, r: 2.5, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 60, cy: 140, r: 2.5, fill: '#F5F5F5' }, false);
    fe(g, 'circle', { cx: 310, cy: 56, r: 3, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 328, cy: 96, r: 2.5, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 302, cy: 150, r: 2.5, fill: '#F5F5F5' }, false);

    // --- Miguel plaid shirt accent stripes (darker cross-hatch) ---
    // Vertical accent stripes
    fl(g, 'M 86 152 L 88 152 L 82 280 L 80 280 Z', '#8D6E63', false);
    fl(g, 'M 96 150 L 98 150 L 92 280 L 90 280 Z', '#8D6E63', false);
    fl(g, 'M 114 150 L 116 150 L 122 280 L 120 280 Z', '#8D6E63', false);
    fl(g, 'M 124 152 L 126 152 L 132 280 L 130 280 Z', '#8D6E63', false);
    // Horizontal accent stripes
    fe(g, 'rect', { x: 76, y: 179, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 199, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 219, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 239, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 259, width: 64, height: 2, fill: '#8D6E63' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, cheeks, lip colors, teeth, necklace
  //          highlights, fleece zip highlight, pampas detail, studio light
  // =====================================================================
  (g, a) => {
    // --- Sandra eye shines ---
    fe(g, 'circle', { cx: 174, cy: 99, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 196, cy: 99, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 178, cy: 103, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 200, cy: 103, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Sandra cheek blush
    fe(g, 'ellipse', { cx: 160, cy: 120, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);
    fe(g, 'ellipse', { cx: 200, cy: 120, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);

    // Sandra lip color fill
    fl(g,
      'M 166 134 C 170 130 176 128 180 128 C 184 128 190 130 194 134 C 190 140 184 143 180 143 C 176 143 170 140 166 134 Z',
      '#E57373', false);
    // Sandra teeth hint (white strip)
    fe(g, 'rect', { x: 170, y: 131, width: 20, height: 3, rx: 1, fill: '#FFFFFF', opacity: '0.7' }, false);

    // --- Ricardo eye shines ---
    fe(g, 'circle', { cx: 220, cy: 76, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 242, cy: 74, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 224, cy: 80, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 246, cy: 78, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Ricardo mouth interior
    fl(g,
      'M 220 112 C 226 108 230 106 234 108 C 238 110 240 112 242 112 L 240 114 C 234 118 226 118 220 114 Z',
      '#E57373', false);

    // --- Miguel eye shines ---
    fe(g, 'circle', { cx: 99, cy: 93, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 117, cy: 93, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 103, cy: 97, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 121, cy: 97, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Miguel cheek blush
    fe(g, 'ellipse', { cx: 90, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 122, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // Miguel mouth color
    fl(g,
      'M 94 120 C 98 116 102 114 106 114 C 110 114 114 116 118 120 C 114 126 110 128 106 128 C 102 128 98 126 94 120 Z',
      '#E57373', false);
    // Miguel teeth hint
    fe(g, 'rect', { x: 98, y: 118, width: 16, height: 2, rx: 1, fill: '#FFFFFF', opacity: '0.7' }, false);

    // --- Necklace / earring highlights ---
    // Chain link highlights (small bright spots)
    fe(g, 'circle', { cx: 160, cy: 170, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 172, cy: 168, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 184, cy: 166, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 196, cy: 168, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    // Earring highlights
    fe(g, 'circle', { cx: 137, cy: 116, r: 1, fill: '#FFF8E1', opacity: '0.5' }, false);
    fe(g, 'circle', { cx: 223, cy: 114, r: 1, fill: '#FFF8E1', opacity: '0.5' }, false);

    // --- Ricardo fleece zip highlight ---
    pp(g, ['M 229 164 L 229 280'], false, lt);

    // --- Pampas feather detail strokes (extra wispy lines) ---
    pp(g, [
      'M 16 20 C 22 40 28 58 30 60',
      'M 44 18 C 40 38 36 56 38 40',
      'M 344 20 C 338 40 332 58 330 60',
      'M 316 18 C 320 38 324 56 322 40'
    ], false, lt);
    // Extra feathery wisps
    pp(g, [
      'M 10 40 C 18 60 24 80 26 100',
      'M 52 36 C 48 56 46 76 48 96',
      'M 350 40 C 342 60 336 80 334 100',
      'M 308 36 C 312 56 314 76 312 96'
    ], false, lt);

    // --- Soft studio light effect (warm overlay) ---
    fe(g, 'rect', { x: 70, y: 0, width: 220, height: 420, fill: '#FFF8E1', opacity: '0.04' }, false);
    // Subtle rim light on Sandra's hair
    pp(g, [
      'M 148 68 C 146 82 144 96 144 108',
      'M 218 72 C 220 86 222 100 222 112'
    ], false, lt);

    // --- Plaid cross-hatch extra detail on Miguel ---
    // Thinner cross lines at intersections
    const plaidYs = [180, 200, 220, 240, 260];
    const plaidXs = [85, 95, 115, 125];
    plaidYs.forEach(y => {
      plaidXs.forEach(x => {
        fe(g, 'rect', { x: x - 1, y: y - 1, width: 2, height: 2, fill: '#5D4037', opacity: '0.4' }, false);
      });
    });

    // Hand skin fills for Sandra
    fe(g, 'ellipse', { cx: 84, cy: 248, rx: 10, ry: 12, fill: '#FADCC2', opacity: '0.8' }, false);
    fe(g, 'ellipse', { cx: 258, cy: 240, rx: 8, ry: 10, fill: '#FADCC2', opacity: '0.7' }, false);

    // Ricardo hand skin fills
    fe(g, 'ellipse', { cx: 162, cy: 238, rx: 7, ry: 8, fill: '#EDBE8C', opacity: '0.7' }, false);
    fe(g, 'ellipse', { cx: 252, cy: 238, rx: 7, ry: 8, fill: '#EDBE8C', opacity: '0.7' }, false);

    // Miguel hand skin fills
    fe(g, 'ellipse', { cx: 66, cy: 206, rx: 5, ry: 6, fill: '#FADCC2', opacity: '0.7' }, false);
    fe(g, 'ellipse', { cx: 144, cy: 208, rx: 5, ry: 6, fill: '#FADCC2', opacity: '0.7' }, false);
  }
];

const casamentoLayers = [
  // =================================================================
  // Layer 0: Composition guides — church floor, bench, zones, ceiling
  // =================================================================
  (g, a) => {
    // Church floor line
    pp(g, ['M 0 340 L 360 340'], a, lt);
    // Bench / seat line
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Groom zone (left)
    pp(g, ['M 60 30 L 60 340', 'M 200 30 L 200 340'], a, lt);
    // Bride zone (right)
    pp(g, ['M 160 30 L 160 340', 'M 310 30 L 310 340'], a, lt);
    // Groom head center cross
    pp(g, ['M 130 60 L 130 180', 'M 80 110 L 180 110'], a, lt);
    // Bride head center cross
    pp(g, ['M 220 60 L 220 180', 'M 170 110 L 270 110'], a, lt);
    // Ceiling area top
    pp(g, ['M 0 0 L 360 0 L 360 50 L 0 50 Z'], a, lt);
    // Ceiling beam guides
    pp(g, ['M 0 25 L 360 25'], a, lt);
    // Wall lamp position (left)
    pp(g, ['M 25 100 L 25 140'], a, lt);
    fe(g, 'circle', { cx: 25, cy: 120, r: 6, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // Guest area background
    pp(g, ['M 10 170 L 350 170', 'M 10 220 L 350 220'], a, lt);
    // Stone arch position (right)
    pp(g, ['M 320 80 C 340 80 350 100 350 130 C 350 160 340 180 320 180'], a, lt);
  },

  // =================================================================
  // Layer 1: Main outlines — groom and bride bodies
  // =================================================================
  (g, a) => {
    // === GROOM (left, seated) ===
    // Head — angular male face, strong jaw
    pp(g, [
      'M 130 62 C 112 62 100 78 100 98 C 100 116 106 130 114 138 C 120 144 125 148 130 150 C 135 148 140 144 146 138 C 154 130 160 116 160 98 C 160 78 148 62 130 62 Z'
    ], a);
    // Neck
    pp(g, ['M 122 150 L 120 164', 'M 138 150 L 140 164'], a);
    // Torso — seated, suit jacket
    pp(g, [
      'M 80 196 C 90 178 110 166 130 164 C 150 166 170 178 180 196 L 182 300 L 78 300 Z'
    ], a);
    // Left arm resting
    pp(g, ['M 84 200 C 76 216 72 236 70 256 C 68 272 70 286 74 300'], a);
    // Right arm reaching toward bride
    pp(g, ['M 176 200 C 182 216 186 236 188 256 C 190 268 190 280 188 300'], a);

    // === BRIDE (right, seated) ===
    // Head — softer oval, feminine
    pp(g, [
      'M 220 66 C 204 66 192 80 192 98 C 192 116 200 130 208 138 C 214 144 218 148 220 150 C 222 148 226 144 232 138 C 240 130 248 116 248 98 C 248 80 236 66 220 66 Z'
    ], a);
    // Neck — slim, graceful
    pp(g, ['M 214 150 L 212 162', 'M 226 150 L 228 162'], a);
    // Shoulders (strapless — bare skin to bodice top)
    pp(g, [
      'M 186 178 C 196 168 208 162 220 162 C 232 162 244 168 254 178'
    ], a);
    // Bodice — fitted, strapless, sweetheart neckline implied
    pp(g, [
      'M 186 178 L 184 220 C 184 232 192 240 200 248 C 208 254 214 256 220 258 C 226 256 232 254 240 248 C 248 240 256 232 256 220 L 254 178'
    ], a);
    // Voluminous tulle ball-gown skirt — wide spread
    pp(g, [
      'M 200 248 C 188 260 170 280 156 300 C 144 318 134 340 130 370 C 128 390 130 410 136 430 L 304 430 C 310 410 312 390 310 370 C 306 340 296 318 284 300 C 270 280 252 260 240 248'
    ], a);
    // Skirt fold lines — gentle curves across tulle
    pp(g, [
      'M 168 290 C 180 278 200 268 220 268 C 240 268 260 278 272 290',
      'M 152 320 C 170 306 196 294 220 294 C 244 294 270 306 288 320',
      'M 142 356 C 164 338 192 326 220 326 C 248 326 276 338 298 356'
    ], a, lt);
  },

  // =================================================================
  // Layer 2: Face details — eyes, brows, noses, mouths
  // =================================================================
  (g, a) => {
    // === GROOM FACE ===
    // Left eye — almond, composed gaze
    pp(g, [
      'M 116 92 C 118 88 122 86 126 87 C 130 88 132 92 130 95 C 128 98 122 99 118 97 C 116 96 115 94 116 92 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 134 91 C 136 87 140 85 144 86 C 148 87 150 91 148 94 C 146 97 140 98 136 96 C 134 95 133 93 134 91 Z'
    ], a);
    // Groom left pupil
    fe(g, 'circle', { cx: 124, cy: 93, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Groom right pupil
    fe(g, 'circle', { cx: 142, cy: 92, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Left eyebrow — strong, slightly angular
    pp(g, ['M 114 84 C 118 78 124 76 130 78 C 134 80 136 82 138 84'], a);
    // Right eyebrow
    pp(g, ['M 132 83 C 136 77 142 75 148 77 C 152 79 154 81 156 83'], a);
    // Nose — strong straight bridge
    pp(g, ['M 132 86 C 131 94 130 102 129 108'], a);
    pp(g, ['M 126 110 C 128 114 132 116 136 114 C 138 112 139 108 140 106'], a);
    // Mouth — composed, lips together
    pp(g, ['M 120 126 C 124 122 128 120 132 120 C 136 120 140 122 144 126'], a);
    // Lower lip
    pp(g, ['M 122 128 C 126 132 130 134 132 134 C 134 134 138 132 142 128'], a);
    // Left ear
    pp(g, ['M 100 92 C 96 88 93 92 93 98 C 93 104 96 108 100 106'], a);
    // Right ear
    pp(g, ['M 160 92 C 164 88 167 92 167 98 C 167 104 164 108 160 106'], a);
    // Jaw line definition
    pp(g, ['M 104 122 C 110 136 118 144 130 150', 'M 156 122 C 150 136 142 144 130 150'], a, lt);

    // === BRIDE FACE ===
    // Left eye — almond, softer, emotional
    pp(g, [
      'M 208 92 C 210 88 214 86 218 87 C 222 88 224 92 222 95 C 220 98 214 99 210 97 C 208 96 207 94 208 92 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 224 91 C 226 87 230 85 234 86 C 238 87 240 91 238 94 C 236 97 230 98 226 96 C 224 95 223 93 224 91 Z'
    ], a);
    // Bride left pupil
    fe(g, 'circle', { cx: 216, cy: 93, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Bride right pupil
    fe(g, 'circle', { cx: 232, cy: 92, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Left eyelashes (upper)
    pp(g, [
      'M 208 91 C 206 88 205 85 206 83',
      'M 212 89 C 211 86 211 83 212 81',
      'M 216 88 C 216 85 217 82 218 80'
    ], a);
    // Right eyelashes (upper)
    pp(g, [
      'M 240 90 C 242 87 243 84 242 82',
      'M 236 88 C 237 85 237 82 236 80',
      'M 232 87 C 232 84 231 81 230 79'
    ], a);
    // Left eyebrow — arched, elegant
    pp(g, ['M 206 82 C 210 76 216 74 222 76 C 226 78 228 80 230 82'], a);
    // Right eyebrow
    pp(g, ['M 222 81 C 226 75 232 73 238 75 C 242 77 244 79 246 81'], a);
    // Nose — delicate
    pp(g, ['M 222 86 C 221 94 220 102 219 108'], a);
    pp(g, ['M 216 110 C 218 113 222 115 226 113 C 228 111 229 108 230 106'], a);
    // Mouth — soft emotional smile
    pp(g, ['M 210 124 C 214 120 218 118 222 118 C 226 118 230 120 234 124'], a);
    // Lower lip — fuller, gentle
    pp(g, ['M 212 126 C 216 130 220 133 222 133 C 224 133 228 130 232 126'], a);
    // Upper lip cupid's bow
    pp(g, ['M 210 124 C 214 122 218 121 220 123 C 221 124 223 124 224 123 C 226 121 230 122 234 124'], a);
  },

  // =================================================================
  // Layer 3: Hair, headwear, groom's tie/collar
  // =================================================================
  (g, a) => {
    // === GROOM HAIR — slicked back ===
    // Hairline contour
    pp(g, [
      'M 104 96 C 102 80 108 66 120 58 C 128 54 136 54 142 58 C 152 66 158 80 158 94'
    ], a);
    // Slicked-back texture lines
    pp(g, [
      'M 118 60 C 122 56 128 54 134 56',
      'M 112 68 C 118 62 126 58 136 60 C 144 62 150 68 154 76',
      'M 108 78 C 114 70 122 64 132 64 C 142 66 150 72 156 82',
      'M 106 88 C 110 80 118 72 128 70 C 138 70 148 76 154 86'
    ], a, lt);
    // Side hair above ears
    pp(g, [
      'M 100 86 C 98 78 102 70 108 64',
      'M 160 86 C 162 78 158 70 152 64'
    ], a);

    // === GROOM TIE AND COLLAR ===
    // Shirt collar left
    pp(g, [
      'M 118 166 C 114 162 108 160 106 164 C 104 168 108 172 114 172'
    ], a);
    // Shirt collar right
    pp(g, [
      'M 142 166 C 146 162 152 160 154 164 C 156 168 152 172 146 172'
    ], a);
    // Tie knot (triangular)
    pp(g, [
      'M 126 168 L 130 162 L 134 168 Z'
    ], a);
    // Tie body hanging down
    pp(g, [
      'M 126 168 L 124 210 L 130 216 L 136 210 L 134 168'
    ], a);
    // Tie texture lines
    pp(g, ['M 128 180 L 132 180', 'M 127 195 L 133 195'], a, lt);

    // === BRIDE HAIR — updo/bun with waves ===
    // Main hair mass — top and sides
    pp(g, [
      'M 196 94 C 194 76 200 62 212 54 C 220 50 228 50 234 54 C 242 60 246 72 246 88'
    ], a);
    // Bun at back — round shape
    pp(g, [
      'M 240 72 C 252 66 262 70 266 80 C 270 90 268 102 262 110 C 258 116 252 118 246 114 C 240 110 238 100 238 90 C 238 82 240 76 240 72 Z'
    ], a);
    // Hair wave texture on top
    pp(g, [
      'M 204 60 C 210 54 218 52 226 54',
      'M 200 72 C 208 64 218 58 228 60 C 236 62 242 68 244 76',
      'M 198 84 C 204 76 214 68 224 68 C 234 70 242 78 244 86'
    ], a, lt);
    // Loose curly waves framing face
    pp(g, [
      'M 196 88 C 194 96 192 106 194 118 C 196 126 198 132 200 136',
      'M 248 88 C 250 96 252 104 250 114 C 248 122 246 128 244 134'
    ], a);
    // Hair flower/accessory (~5 petals) at side of bun
    pp(g, [
      'M 256 78 C 258 74 262 74 264 78',
      'M 264 78 C 268 78 270 82 268 84',
      'M 268 84 C 268 88 264 90 260 88',
      'M 260 88 C 256 88 254 84 256 82',
      'M 256 82 C 254 78 256 76 256 78'
    ], a);
    // Flower center
    fe(g, 'circle', { cx: 261, cy: 82, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
  },

  // =================================================================
  // Layer 4: Clothing details — suit, bodice, skirt gathers
  // =================================================================
  (g, a) => {
    // === GROOM SUIT ===
    // Jacket lapels — V-shape from collar down
    pp(g, [
      'M 114 172 C 118 180 120 190 122 200 L 126 230',
      'M 146 172 C 142 180 140 190 138 200 L 134 230'
    ], a);
    // Lapel outer edges
    pp(g, [
      'M 106 170 C 108 174 112 178 118 184 L 122 200',
      'M 154 170 C 152 174 148 178 142 184 L 138 200'
    ], a);
    // Shirt front visible between lapels
    pp(g, [
      'M 126 172 L 126 230',
      'M 134 172 L 134 230'
    ], a, lt);
    // Suit buttons (2)
    fe(g, 'circle', { cx: 130, cy: 212, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 130, cy: 228, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Pocket square (left breast)
    pp(g, [
      'M 110 194 C 112 190 116 188 118 190 C 120 192 118 196 116 198 L 110 198 Z'
    ], a);
    // Jacket shoulder seams
    pp(g, [
      'M 90 182 C 100 174 112 168 120 166',
      'M 170 182 C 160 174 148 168 140 166'
    ], a, lt);
    // Jacket side seam lines
    pp(g, ['M 84 200 L 80 300', 'M 176 200 L 180 300'], a, lt);

    // === BRIDE BODICE ===
    // Strapless top edge — straight across with subtle sweetheart dip
    pp(g, [
      'M 188 178 C 194 174 204 170 212 172 C 216 174 218 178 220 180 C 222 178 224 174 228 172 C 236 170 246 174 252 178'
    ], a);
    // Bodice boning lines (4 vertical seams)
    pp(g, [
      'M 198 178 L 196 242',
      'M 210 176 L 208 250',
      'M 230 176 L 232 250',
      'M 242 178 L 244 242'
    ], a, lt);
    // Waist sash / ribbon
    pp(g, [
      'M 192 240 C 200 244 210 248 220 250 C 230 248 240 244 248 240'
    ], a);
    // Sash bow hint (center front)
    pp(g, [
      'M 216 250 C 218 254 222 256 224 254 C 226 252 224 248 220 250',
      'M 220 250 C 218 252 214 254 212 252 C 210 250 214 248 220 250'
    ], a);
    // Skirt gather / tulle pleat detail at waist junction
    pp(g, [
      'M 200 252 C 204 256 208 258 212 256',
      'M 228 256 C 232 258 236 256 240 252',
      'M 212 256 C 216 260 220 262 224 260 C 228 258 228 256 228 256'
    ], a, lt);
  },

  // =================================================================
  // Layer 5: Hands, bench, elderly lady, stone floor outline
  // =================================================================
  (g, a) => {
    // === GROOM HANDS ===
    // Left hand resting on bench/thigh (fingers visible)
    pp(g, ['M 74 290 C 72 286 68 282 66 278 C 64 274 66 270 70 270 C 74 270 76 274 76 278'], a);
    pp(g, ['M 72 288 C 68 284 64 278 62 274 C 60 268 62 264 66 264 C 70 264 72 268 72 274'], a);
    pp(g, ['M 70 286 C 66 282 62 276 60 272 C 58 266 60 262 64 262 C 68 262 70 268 70 272'], a);
    // Thumb
    pp(g, ['M 76 282 C 80 278 82 272 80 268 C 78 264 74 264 72 268'], a);

    // Right hand over bride's hand (holding)
    pp(g, ['M 188 278 C 192 274 196 270 200 268 C 204 266 208 268 208 272 C 208 276 204 280 200 282'], a);
    pp(g, ['M 190 282 C 194 278 198 274 202 272 C 206 270 210 272 210 276 C 210 280 206 284 202 286'], a);
    // Groom thumb over bride's hand
    pp(g, ['M 186 276 C 188 272 192 266 194 262 C 196 258 194 254 190 256 C 186 258 186 264 186 270'], a);

    // === BRIDE HANDS ===
    // Bride's hands in lap (partially under groom's right hand)
    pp(g, ['M 200 282 C 204 286 208 290 212 292 C 216 294 220 292 220 288 C 220 284 216 280 212 278'], a);
    pp(g, ['M 210 290 C 214 292 218 296 222 298 C 226 300 230 298 230 294 C 230 290 226 286 222 284'], a);
    // Bride's left hand fingers
    pp(g, ['M 222 284 C 226 280 230 278 234 280 C 238 282 238 286 234 290'], a);
    // Bride wrist
    pp(g, ['M 202 280 C 198 276 196 270 196 264'], a, lt);

    // === MODERN DARK BENCH ===
    // Bench seat surface
    pp(g, [
      'M 50 296 L 290 296 L 290 310 L 50 310 Z'
    ], a);
    // Bench front face
    pp(g, [
      'M 50 310 L 290 310 L 290 320 L 50 320 Z'
    ], a);
    // Left leg
    pp(g, ['M 60 320 L 58 345', 'M 68 320 L 66 345'], a);
    // Right leg
    pp(g, ['M 278 320 L 276 345', 'M 286 320 L 284 345'], a);
    // Center support
    pp(g, ['M 168 320 L 166 345', 'M 176 320 L 174 345'], a, lt);

    // === ELDERLY LADY (left side, simplified silhouette) ===
    // Head
    pp(g, [
      'M 40 230 C 32 230 26 238 26 248 C 26 258 32 266 40 268 C 48 266 54 258 54 248 C 54 238 48 230 40 230 Z'
    ], a);
    // Body — seated, hunched slightly
    pp(g, [
      'M 30 268 C 24 274 20 286 18 300 L 18 340 L 62 340 L 62 300 C 60 286 56 274 50 268'
    ], a);
    // Arms
    pp(g, ['M 24 280 C 20 290 18 300 18 310', 'M 56 280 C 60 290 62 300 62 310'], a, lt);

    // === STONE FLOOR OUTLINE ===
    pp(g, ['M 0 340 L 360 340 L 360 450 L 0 450 Z'], a, lt);
    // Floor slab dividers
    pp(g, [
      'M 60 340 L 60 450', 'M 130 340 L 130 450', 'M 200 340 L 200 450',
      'M 270 340 L 270 450', 'M 340 340 L 340 450'
    ], a, lt);
    pp(g, ['M 0 390 L 360 390'], a, lt);
  },

  // =================================================================
  // Layer 6: Background — ceiling, walls, arch, lamp, guests, standing person
  // =================================================================
  (g, a) => {
    // === CEILING with wooden beams ===
    // Ceiling top border
    pp(g, ['M 0 0 L 360 0 L 360 50 L 0 50 Z'], a);
    // Beam divisions (vertical lines across ceiling)
    for (let x = 40; x < 360; x += 50) {
      pp(g, [`M ${x} 0 L ${x} 50`], a, lt);
    }
    // Beam horizontal lines (cross supports)
    pp(g, ['M 0 16 L 360 16', 'M 0 34 L 360 34'], a, lt);

    // === LEFT STONE WALL ===
    pp(g, ['M 0 50 L 50 50 L 50 340 L 0 340 Z'], a);
    // Irregular stone blocks — left wall
    const leftStones = [
      'M 2 55 L 24 55 L 24 78 L 2 78 Z',
      'M 26 55 L 48 55 L 48 72 L 26 72 Z',
      'M 2 80 L 18 80 L 18 106 L 2 106 Z',
      'M 20 74 L 48 74 L 48 100 L 20 100 Z',
      'M 2 108 L 30 108 L 30 132 L 2 132 Z',
      'M 32 102 L 48 102 L 48 128 L 32 128 Z',
      'M 2 134 L 22 134 L 22 158 L 2 158 Z',
      'M 24 130 L 48 130 L 48 162 L 24 162 Z',
      'M 2 160 L 32 160 L 32 186 L 2 186 Z',
      'M 34 164 L 48 164 L 48 190 L 34 190 Z',
      'M 2 188 L 20 188 L 20 214 L 2 214 Z',
      'M 22 192 L 48 192 L 48 218 L 22 218 Z',
      'M 2 216 L 28 216 L 28 242 L 2 242 Z',
      'M 30 220 L 48 220 L 48 246 L 30 246 Z',
      'M 2 244 L 24 244 L 24 268 L 2 268 Z',
      'M 26 248 L 48 248 L 48 274 L 26 274 Z',
      'M 2 270 L 18 270 L 18 296 L 2 296 Z',
      'M 20 276 L 48 276 L 48 300 L 20 300 Z',
      'M 2 298 L 30 298 L 30 322 L 2 322 Z',
      'M 32 302 L 48 302 L 48 330 L 32 330 Z',
      'M 2 324 L 48 324 L 48 340 L 2 340 Z'
    ];
    pp(g, leftStones, a, lt);

    // === RIGHT STONE WALL ===
    pp(g, ['M 310 50 L 360 50 L 360 340 L 310 340 Z'], a);
    // Irregular stone blocks — right wall
    const rightStones = [
      'M 312 55 L 336 55 L 336 76 L 312 76 Z',
      'M 338 55 L 358 55 L 358 72 L 338 72 Z',
      'M 312 78 L 328 78 L 328 104 L 312 104 Z',
      'M 330 74 L 358 74 L 358 98 L 330 98 Z',
      'M 312 106 L 342 106 L 342 130 L 312 130 Z',
      'M 344 100 L 358 100 L 358 126 L 344 126 Z',
      'M 312 132 L 326 132 L 326 158 L 312 158 Z',
      'M 328 128 L 358 128 L 358 156 L 328 156 Z',
      'M 312 160 L 340 160 L 340 184 L 312 184 Z',
      'M 342 158 L 358 158 L 358 188 L 342 188 Z',
      'M 312 186 L 324 186 L 324 210 L 312 210 Z',
      'M 326 190 L 358 190 L 358 214 L 326 214 Z',
      'M 312 212 L 338 212 L 338 238 L 312 238 Z',
      'M 340 216 L 358 216 L 358 242 L 340 242 Z',
      'M 312 240 L 330 240 L 330 264 L 312 264 Z',
      'M 332 244 L 358 244 L 358 270 L 332 270 Z',
      'M 312 266 L 346 266 L 346 292 L 312 292 Z',
      'M 348 272 L 358 272 L 358 296 L 348 296 Z',
      'M 312 294 L 334 294 L 334 320 L 312 320 Z',
      'M 336 298 L 358 298 L 358 324 L 336 324 Z',
      'M 312 322 L 358 322 L 358 340 L 312 340 Z'
    ];
    pp(g, rightStones, a, lt);

    // === STONE ARCH (right wall) ===
    pp(g, [
      'M 318 180 C 318 140 328 110 338 96 C 346 86 352 84 356 86 C 358 88 360 94 360 104',
      'M 318 180 L 318 260 L 360 260 L 360 180'
    ], a);
    // Arch keystone detail
    pp(g, ['M 336 92 L 340 84 L 344 92'], a, lt);

    // === ROUND WALL LAMP (left wall) ===
    // Lamp circle
    fe(g, 'circle', { cx: 25, cy: 120, r: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Inner lamp circle
    fe(g, 'circle', { cx: 25, cy: 120, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Lamp stem/mount
    pp(g, ['M 25 112 L 25 105', 'M 22 105 L 28 105'], a);

    // === GUEST SILHOUETTES ===
    // Front bench (wooden)
    pp(g, ['M 54 226 L 305 226 L 305 238 L 54 238 Z'], a);

    // Front row guests (~5 figures, simplified head+shoulders)
    const frontGuests = [
      { cx: 75, cy: 208, hw: 12 },
      { cx: 110, cy: 210, hw: 11 },
      { cx: 155, cy: 206, hw: 12 },
      { cx: 210, cy: 208, hw: 11 },
      { cx: 260, cy: 210, hw: 12 }
    ];
    frontGuests.forEach(({ cx, cy, hw }) => {
      // Head
      fe(g, 'ellipse', { cx, cy: cy - 16, rx: hw - 3, ry: hw - 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      // Shoulders
      pp(g, [`M ${cx - hw} ${cy - 4} C ${cx - hw + 4} ${cy - 10} ${cx - 4} ${cy - 12} ${cx} ${cy - 12} C ${cx + 4} ${cy - 12} ${cx + hw - 4} ${cy - 10} ${cx + hw} ${cy - 4} L ${cx + hw} ${cy + 14} L ${cx - hw} ${cy + 14} Z`], a, lt);
    });

    // Back bench (higher up)
    pp(g, ['M 54 176 L 305 176 L 305 188 L 54 188 Z'], a);

    // Back row guests (~7 figures, smaller)
    const backGuests = [
      { cx: 70, cy: 164 },
      { cx: 100, cy: 162 },
      { cx: 135, cy: 166 },
      { cx: 170, cy: 163 },
      { cx: 205, cy: 165 },
      { cx: 240, cy: 162 },
      { cx: 275, cy: 164 }
    ];
    backGuests.forEach(({ cx, cy }) => {
      // Head
      fe(g, 'ellipse', { cx, cy: cy - 10, rx: 7, ry: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      // Shoulders
      pp(g, [`M ${cx - 9} ${cy} C ${cx - 5} ${cy - 6} ${cx - 2} ${cy - 8} ${cx} ${cy - 8} C ${cx + 2} ${cy - 8} ${cx + 5} ${cy - 6} ${cx + 9} ${cy} L ${cx + 9} ${cy + 12} L ${cx - 9} ${cy + 12} Z`], a, lt);
    });

    // === STANDING PERSON near arch (right) ===
    // Head
    fe(g, 'ellipse', { cx: 330, cy: 200, rx: 8, ry: 10, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Body
    pp(g, [
      'M 320 212 C 324 210 328 208 330 208 C 332 208 336 210 340 212 L 342 260 L 318 260 Z'
    ], a);
    // Legs
    pp(g, ['M 324 260 L 322 290 L 326 290', 'M 336 260 L 338 290 L 334 290'], a, lt);

    // === FLOOR STONE LINES ===
    pp(g, [
      'M 0 370 L 360 370',
      'M 0 400 L 360 400',
      'M 0 430 L 360 430',
      'M 30 340 L 30 450', 'M 90 340 L 90 450',
      'M 160 340 L 160 450', 'M 230 340 L 230 450',
      'M 300 340 L 300 450'
    ], a, lt);
  },

  // =================================================================
  // Layer 7: Color fills — FIGURES GRAYSCALE
  // =================================================================
  (g, a) => {
    // === GROOM SKIN ===
    // Face
    fl(g, 'M 130 64 C 114 64 102 80 102 98 C 102 116 108 130 116 138 C 122 144 127 148 130 150 C 133 148 138 144 144 138 C 152 130 158 116 158 98 C 158 80 146 64 130 64 Z', '#BDBDBD', a);
    // Ears
    fe(g, 'ellipse', { cx: 97, cy: 98, rx: 5, ry: 8, fill: '#B0B0B0' }, false);
    fe(g, 'ellipse', { cx: 163, cy: 98, rx: 5, ry: 8, fill: '#B0B0B0' }, false);
    // Neck
    fe(g, 'rect', { x: 121, y: 148, width: 18, height: 18, rx: 4, fill: '#B0B0B0' }, false);

    // === GROOM HAIR (slicked back, dark gray) ===
    fl(g, 'M 106 94 C 104 80 110 66 122 58 C 128 54 136 54 142 58 C 150 64 156 78 156 90 L 158 94 C 160 82 158 72 152 62 C 146 52 136 50 128 52 C 116 54 106 66 102 80 C 100 88 100 92 102 96 Z', '#616161', a);
    // Sideburns
    fl(g, 'M 100 86 C 98 78 100 72 106 66 L 104 68 C 100 74 98 82 100 90 Z', '#616161', false);
    fl(g, 'M 160 86 C 162 78 160 72 154 66 L 156 68 C 160 74 162 82 160 90 Z', '#616161', false);

    // === GROOM SUIT (dark charcoal) ===
    fl(g, 'M 82 198 C 92 180 112 168 130 166 C 148 168 168 180 178 198 L 180 300 L 80 300 Z', '#37474F', a);
    // Left arm suit
    fl(g, 'M 84 200 C 76 216 72 236 70 256 C 68 272 70 286 74 300 L 80 300 L 82 200 Z', '#37474F', false);
    // Right arm suit
    fl(g, 'M 176 200 C 182 216 186 236 188 256 C 190 268 190 280 188 300 L 180 300 L 178 200 Z', '#37474F', false);

    // === GROOM WHITE SHIRT (visible between lapels) ===
    fl(g, 'M 126 168 L 124 230 L 136 230 L 134 168 Z', '#FAFAFA', false);
    // Shirt collar fill
    fl(g, 'M 118 166 C 114 162 108 160 106 164 C 104 168 108 172 114 172 Z', '#FAFAFA', false);
    fl(g, 'M 142 166 C 146 162 152 160 154 164 C 156 168 152 172 146 172 Z', '#FAFAFA', false);

    // === GROOM TIE (medium gray) ===
    fl(g, 'M 126 168 L 130 162 L 134 168 L 136 210 L 130 216 L 124 210 Z', '#757575', false);

    // === BRIDE SKIN ===
    // Face
    fl(g, 'M 220 68 C 206 68 194 82 194 98 C 194 116 202 130 210 138 C 216 144 218 148 220 150 C 222 148 224 144 230 138 C 238 130 246 116 246 98 C 246 82 234 68 220 68 Z', '#BDBDBD', a);
    // Neck
    fe(g, 'rect', { x: 213, y: 148, width: 14, height: 16, rx: 4, fill: '#B0B0B0' }, false);
    // Bare shoulders / upper chest (strapless)
    fl(g, 'M 188 178 C 196 170 208 164 220 164 C 232 164 244 170 252 178 L 252 182 L 188 182 Z', '#BDBDBD', false);

    // === BRIDE HAIR (dark gray updo) ===
    fl(g, 'M 198 92 C 196 76 202 62 214 54 C 222 50 230 50 236 56 C 244 64 248 78 248 92 L 246 90 C 248 80 246 68 240 60 C 236 54 228 52 220 54 C 210 58 202 70 200 86 Z', '#616161', a);
    // Bun fill
    fl(g, 'M 242 74 C 252 68 262 72 266 82 C 270 92 268 104 262 112 C 258 118 252 120 246 116 C 240 112 238 102 238 92 C 238 84 240 78 242 74 Z', '#616161', false);
    // Loose waves fill
    fl(g, 'M 196 88 C 194 96 192 108 194 120 C 196 128 198 134 200 138 L 198 140 C 194 134 192 126 190 118 C 188 106 190 94 194 86 Z', '#757575', false);
    fl(g, 'M 248 88 C 250 96 252 106 250 116 C 248 124 246 130 244 136 L 246 138 C 250 130 252 122 254 114 C 256 104 254 94 250 86 Z', '#757575', false);

    // === BRIDE BODICE (white) ===
    fl(g, 'M 188 182 L 186 222 C 186 234 194 242 202 250 C 210 256 216 258 220 260 C 224 258 230 256 238 250 C 246 242 254 234 254 222 L 252 182 Z', '#FFFFFF', a);

    // === BRIDE TULLE SKIRT (off-white) ===
    fl(g, 'M 202 250 C 190 262 172 282 158 302 C 146 320 136 342 132 372 C 130 392 132 412 138 432 L 302 432 C 308 412 310 392 308 372 C 304 342 294 320 282 302 C 268 282 250 262 238 250 Z', '#F5F5F5', a);

    // === ELDERLY LADY fills ===
    // Head
    fe(g, 'ellipse', { cx: 40, cy: 248, rx: 12, ry: 14, fill: '#BDBDBD' }, false);
    // Hair
    fl(g, 'M 30 238 C 28 234 30 228 36 226 C 42 224 48 226 50 230 C 52 234 52 238 50 242 L 48 240 C 50 236 50 232 48 230 C 46 228 40 226 36 228 C 32 230 30 234 32 238 Z', '#9E9E9E', false);
    // Body
    fl(g, 'M 32 268 C 26 274 22 286 20 300 L 20 338 L 60 338 L 60 300 C 58 286 54 274 48 268 Z', '#757575', false);
  },

  // =================================================================
  // Layer 8: Color fills — SCENE GRAYSCALE
  // =================================================================
  (g, a) => {
    // === CEILING (dark gray) ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 50, fill: '#424242' }, a);
    // Beam fills (slightly darker)
    for (let x = 0; x < 360; x += 50) {
      fe(g, 'rect', { x, y: 16, width: 50, height: 18, fill: '#37474F', opacity: '0.5' }, false);
    }

    // === STONE WALLS (medium gray base) ===
    // Left wall base
    fe(g, 'rect', { x: 0, y: 50, width: 50, height: 290, fill: '#9E9E9E' }, a);
    // Right wall base
    fe(g, 'rect', { x: 310, y: 50, width: 50, height: 290, fill: '#9E9E9E' }, false);

    // Left wall block variation fills (different grays for depth)
    const leftBlockFills = [
      { x: 2, y: 56, w: 22, h: 22, c: '#A0A0A0' },
      { x: 26, y: 56, w: 22, h: 16, c: '#8E8E8E' },
      { x: 2, y: 80, w: 16, h: 26, c: '#949494' },
      { x: 20, y: 74, w: 28, h: 26, c: '#A8A8A8' },
      { x: 2, y: 134, w: 20, h: 24, c: '#8A8A8A' },
      { x: 24, y: 130, w: 24, h: 32, c: '#A4A4A4' }
    ];
    leftBlockFills.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // Right wall block variation fills
    const rightBlockFills = [
      { x: 312, y: 56, w: 24, h: 20, c: '#A0A0A0' },
      { x: 338, y: 56, w: 20, h: 16, c: '#929292' },
      { x: 312, y: 106, w: 30, h: 24, c: '#A6A6A6' },
      { x: 344, y: 100, w: 14, h: 26, c: '#8C8C8C' },
      { x: 312, y: 186, w: 12, h: 24, c: '#969696' },
      { x: 326, y: 190, w: 32, h: 24, c: '#A2A2A2' }
    ];
    rightBlockFills.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === BACKGROUND GUEST AREA (light gray) ===
    fe(g, 'rect', { x: 50, y: 140, width: 260, height: 100, fill: '#E0E0E0' }, a);

    // === GUEST BENCH FILLS (wood tone — dark brown-gray) ===
    // Back bench
    fe(g, 'rect', { x: 55, y: 177, width: 249, height: 10, rx: 2, fill: '#5D4037' }, false);
    // Front bench
    fe(g, 'rect', { x: 55, y: 227, width: 249, height: 10, rx: 2, fill: '#5D4037' }, false);

    // === GUEST SILHOUETTE FILLS (semi-transparent gray) ===
    // Back row
    [70, 100, 135, 170, 205, 240, 275].forEach(cx => {
      fe(g, 'ellipse', { cx, cy: 154, rx: 7, ry: 8, fill: '#9E9E9E', opacity: '0.5' }, false);
      fe(g, 'rect', { x: cx - 9, y: 156, width: 18, height: 20, fill: '#9E9E9E', opacity: '0.4' }, false);
    });
    // Front row
    [75, 110, 155, 210, 260].forEach((cx, i) => {
      const hw = [12, 11, 12, 11, 12][i];
      fe(g, 'ellipse', { cx, cy: 192, rx: hw - 3, ry: hw - 2, fill: '#9E9E9E', opacity: '0.5' }, false);
      fe(g, 'rect', { x: cx - hw, y: 196, width: hw * 2, height: 28, fill: '#9E9E9E', opacity: '0.4' }, false);
    });

    // === DARK MODERN BENCH (main couple's bench) ===
    fe(g, 'rect', { x: 51, y: 297, width: 238, height: 12, rx: 2, fill: '#212121' }, a);
    fe(g, 'rect', { x: 51, y: 311, width: 238, height: 9, rx: 1, fill: '#1A1A1A' }, false);
    // Bench legs
    fe(g, 'rect', { x: 58, y: 320, width: 10, height: 25, fill: '#212121' }, false);
    fe(g, 'rect', { x: 276, y: 320, width: 10, height: 25, fill: '#212121' }, false);
    fe(g, 'rect', { x: 166, y: 320, width: 10, height: 25, fill: '#1A1A1A' }, false);

    // === STONE FLOOR ===
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: '#E0E0E0' }, a);
    // Alternating slab fills (checkerboard-like pattern)
    const floorSlabs = [
      { x: 0, y: 340, w: 60, h: 50, c: '#D5D5D5' },
      { x: 60, y: 340, w: 70, h: 50, c: '#EEEEEE' },
      { x: 130, y: 340, w: 70, h: 50, c: '#D5D5D5' },
      { x: 200, y: 340, w: 70, h: 50, c: '#EEEEEE' },
      { x: 270, y: 340, w: 70, h: 50, c: '#D5D5D5' },
      { x: 340, y: 340, w: 20, h: 50, c: '#EEEEEE' },
      { x: 0, y: 390, w: 60, h: 60, c: '#EEEEEE' },
      { x: 60, y: 390, w: 70, h: 60, c: '#D5D5D5' },
      { x: 130, y: 390, w: 70, h: 60, c: '#EEEEEE' },
      { x: 200, y: 390, w: 70, h: 60, c: '#D5D5D5' },
      { x: 270, y: 390, w: 70, h: 60, c: '#EEEEEE' },
      { x: 340, y: 390, w: 20, h: 60, c: '#D5D5D5' }
    ];
    floorSlabs.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === LAMP HALO GLOW ===
    fe(g, 'circle', { cx: 25, cy: 120, r: 18, fill: '#FFF9C4', opacity: '0.12' }, false);
    fe(g, 'circle', { cx: 25, cy: 120, r: 10, fill: '#FFF9C4', opacity: '0.18' }, false);

    // === ARCH OPENING (cool light gray) ===
    fl(g, 'M 320 180 L 320 258 L 358 258 L 358 106 C 358 94 356 88 352 86 C 348 84 342 88 336 98 C 328 112 320 140 320 180 Z', '#CFD8DC', false);

    // === STANDING PERSON fills ===
    fe(g, 'ellipse', { cx: 330, cy: 200, rx: 8, ry: 10, fill: '#BDBDBD' }, false);
    fl(g, 'M 322 212 C 326 210 328 208 330 208 C 332 208 334 210 338 212 L 340 258 L 320 258 Z', '#757575', false);
    fe(g, 'rect', { x: 322, y: 258, width: 4, height: 30, fill: '#616161' }, false);
    fe(g, 'rect', { x: 334, y: 258, width: 4, height: 30, fill: '#616161' }, false);
  },

  // =================================================================
  // Layer 9: Polish — eye shines, details, textures, shadows, vignette
  // =================================================================
  (g, a) => {
    // === EYE SHINES (white sparkle) ===
    // Groom
    fe(g, 'circle', { cx: 122, cy: 91, r: 1.3, fill: 'white' }, a);
    fe(g, 'circle', { cx: 140, cy: 90, r: 1.3, fill: 'white' }, a);
    // Groom secondary shine
    fe(g, 'circle', { cx: 126, cy: 95, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 144, cy: 94, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    // Bride
    fe(g, 'circle', { cx: 214, cy: 91, r: 1.3, fill: 'white' }, a);
    fe(g, 'circle', { cx: 230, cy: 90, r: 1.3, fill: 'white' }, a);
    // Bride secondary shine
    fe(g, 'circle', { cx: 218, cy: 95, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 234, cy: 94, r: 0.6, fill: 'white', opacity: '0.7' }, false);

    // === BRIDE LIP TONE (gray) ===
    fl(g, 'M 210 124 C 214 122 218 121 220 123 C 221 124 223 124 224 123 C 226 121 230 122 234 124 C 230 130 224 133 222 133 C 220 133 214 130 210 124 Z', '#9E9E9E', false);

    // === TULLE TEXTURE LINES (very fine, ~4 horizontal curves) ===
    const tulleLine = ce('path', { d: 'M 156 310 C 176 304 198 300 220 300 C 242 300 264 304 284 310', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine);
    const tulleLine2 = ce('path', { d: 'M 148 340 C 172 332 196 328 220 328 C 244 328 268 332 292 340', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine2);
    const tulleLine3 = ce('path', { d: 'M 140 370 C 166 360 194 354 220 354 C 246 354 274 360 300 370', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine3);
    const tulleLine4 = ce('path', { d: 'M 136 400 C 164 388 192 382 220 382 C 248 382 276 388 304 400', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine4);

    // === DRESS SHIMMER ELLIPSES (white, very subtle) ===
    fe(g, 'ellipse', { cx: 196, cy: 310, rx: 4, ry: 2, fill: 'white', opacity: '0.15' }, false);
    fe(g, 'ellipse', { cx: 244, cy: 318, rx: 3, ry: 1.5, fill: 'white', opacity: '0.12' }, false);
    fe(g, 'ellipse', { cx: 210, cy: 350, rx: 5, ry: 2, fill: 'white', opacity: '0.1' }, false);
    fe(g, 'ellipse', { cx: 235, cy: 370, rx: 4, ry: 1.5, fill: 'white', opacity: '0.12' }, false);
    fe(g, 'ellipse', { cx: 180, cy: 380, rx: 3, ry: 1.5, fill: 'white', opacity: '0.1' }, false);
    fe(g, 'ellipse', { cx: 260, cy: 392, rx: 4, ry: 2, fill: 'white', opacity: '0.1' }, false);

    // === HAIR FLOWER FILL ===
    fl(g, 'M 256 78 C 258 74 262 74 264 78 C 268 78 270 82 268 84 C 268 88 264 90 260 88 C 256 88 254 84 256 82 C 254 78 256 76 256 78 Z', '#E0E0E0', false);
    fe(g, 'circle', { cx: 261, cy: 82, r: 2, fill: '#C0C0C0' }, false);

    // === SUIT LAPEL SHADOWS ===
    fl(g, 'M 114 174 C 118 182 120 192 122 202 L 120 202 C 118 192 116 182 112 174 Z', '#263238', false);
    fl(g, 'M 146 174 C 142 182 140 192 138 202 L 140 202 C 142 192 144 182 148 174 Z', '#263238', false);
    // Pocket square hint (faint white triangle)
    fl(g, 'M 111 195 C 113 191 116 189 118 191 C 119 193 117 197 115 199 L 111 199 Z', '#E0E0E0', false);

    // === LAMP GLOW INNER ===
    fe(g, 'circle', { cx: 25, cy: 120, r: 3, fill: '#FFFDE7', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 25, cy: 120, r: 6, fill: '#FFF9C4', opacity: '0.2' }, false);

    // === CEILING BEAM SHADOWS ===
    for (let x = 0; x < 360; x += 50) {
      fe(g, 'rect', { x: x + 1, y: 34, width: 48, height: 4, fill: '#212121', opacity: '0.2' }, false);
    }
    // Beam bottom shadow edge
    fe(g, 'rect', { x: 0, y: 48, width: 360, height: 3, fill: '#1A1A1A', opacity: '0.15' }, false);

    // === STONE MORTAR LINES (very faint, between blocks) ===
    // Left wall mortar
    const leftMortarLines = [
      'M 2 78 L 24 78', 'M 2 106 L 18 106', 'M 2 132 L 30 132',
      'M 2 158 L 22 158', 'M 2 186 L 32 186', 'M 2 214 L 20 214',
      'M 2 242 L 28 242', 'M 2 268 L 24 268', 'M 2 296 L 18 296'
    ];
    leftMortarLines.forEach(d => {
      const p = ce('path', { d, fill: 'none', stroke: '#787878', 'stroke-width': '0.4', opacity: '0.5' });
      g.appendChild(p);
    });
    // Right wall mortar
    const rightMortarLines = [
      'M 312 76 L 336 76', 'M 312 104 L 328 104', 'M 312 130 L 342 130',
      'M 312 158 L 326 158', 'M 312 184 L 340 184', 'M 312 210 L 324 210',
      'M 312 238 L 338 238', 'M 312 264 L 330 264', 'M 312 292 L 346 292'
    ];
    rightMortarLines.forEach(d => {
      const p = ce('path', { d, fill: 'none', stroke: '#787878', 'stroke-width': '0.4', opacity: '0.5' });
      g.appendChild(p);
    });

    // === FLOOR SHADOW UNDER BENCH ===
    fe(g, 'rect', { x: 52, y: 340, width: 236, height: 8, fill: '#1A1A1A', opacity: '0.12' }, false);

    // === SKIRT SPREAD SHADOW (bottom edge) ===
    fl(g, 'M 136 424 C 164 430 192 434 220 434 C 248 434 276 430 304 424 L 304 432 C 276 438 248 440 220 440 C 192 440 164 438 136 432 Z', '#D0D0D0', false);

    // === SUBTLE VIGNETTE ON EDGES ===
    // Left vignette
    fe(g, 'rect', { x: 0, y: 0, width: 20, height: 450, fill: '#000000', opacity: '0.06' }, false);
    // Right vignette
    fe(g, 'rect', { x: 340, y: 0, width: 20, height: 450, fill: '#000000', opacity: '0.06' }, false);
    // Top vignette
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 12, fill: '#000000', opacity: '0.08' }, false);
    // Bottom vignette
    fe(g, 'rect', { x: 0, y: 438, width: 360, height: 12, fill: '#000000', opacity: '0.06' }, false);

    // === GROOM NASOLABIAL FOLDS (very faint) ===
    const nl1 = ce('path', { d: 'M 122 108 C 120 114 118 120 116 126', fill: 'none', stroke: '#909090', 'stroke-width': '0.4', opacity: '0.5' });
    g.appendChild(nl1);
    const nl2 = ce('path', { d: 'M 140 106 C 142 112 144 118 146 124', fill: 'none', stroke: '#909090', 'stroke-width': '0.4', opacity: '0.5' });
    g.appendChild(nl2);

    // === BRIDE CHEEK SOFTNESS (subtle highlight) ===
    fe(g, 'ellipse', { cx: 208, cy: 112, rx: 8, ry: 4, fill: '#C8C8C8', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 234, cy: 112, rx: 8, ry: 4, fill: '#C8C8C8', opacity: '0.2' }, false);

    // === BODICE BONING SHADOW HINTS ===
    const boningShade = [198, 210, 230, 242];
    boningShade.forEach(bx => {
      const bs = ce('path', { d: `M ${bx + 1} 182 L ${bx - 1} 244`, fill: 'none', stroke: '#D0D0D0', 'stroke-width': '0.5', opacity: '0.4' });
      g.appendChild(bs);
    });

    // === OVERALL WARM GRAY OVERLAY (very subtle film grain feel) ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#9E9E9E', opacity: '0.02' }, false);
  }
];

const paisLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/pais/step1_hl.png' : 'img/pais/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/pais/step2_hl.png' : 'img/pais/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/pais/step3_hl.png' : 'img/pais/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/pais/step4_hl.png' : 'img/pais/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/pais.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Ricardo & Sandra';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const sandraLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/sandra/step1_hl.png' : 'img/sandra/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/sandra/step2_hl.png' : 'img/sandra/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/sandra/step3_hl.png' : 'img/sandra/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/sandra/step4_hl.png' : 'img/sandra/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/Sandra.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Sandra';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const paitioLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/paitio/step1_hl.png' : 'img/paitio/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/paitio/step2_hl.png' : 'img/paitio/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/paitio/step3_hl.png' : 'img/paitio/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/paitio/step4_hl.png' : 'img/paitio/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/pai-tio-miguel.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Pai, Tio & Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const brunomiguelLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/brunomiguel/step1_hl.png' : 'img/brunomiguel/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/brunomiguel/step2_hl.png' : 'img/brunomiguel/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/brunomiguel/step3_hl.png' : 'img/brunomiguel/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/brunomiguel/step4_hl.png' : 'img/brunomiguel/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/Bruno + Miguel.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Bruno & Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const padrinhosLayers = [
  // =====================================================================
  // Layer 0: Composition guides — godmother zone left, godfather zone right,
  //          head level, baby level, feet level, window guide, center vertical
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Godmother zone (left)
    pp(g, ['M 30 20 L 30 430', 'M 190 20 L 190 430'], a, lt);
    // Godfather zone (right)
    pp(g, ['M 170 20 L 170 430', 'M 330 20 L 330 430'], a, lt);
    // Head level guide
    pp(g, ['M 20 90 L 340 90'], a, lt);
    // Baby level guide (at godmother's hip)
    pp(g, ['M 50 190 L 200 190'], a, lt);
    // Feet level guide
    pp(g, ['M 20 420 L 340 420'], a, lt);
    // Window guide (center-top)
    pp(g, ['M 130 10 L 230 10 L 230 70 L 130 70 Z'], a, lt);
    // Godmother head center cross
    pp(g, ['M 110 50 L 110 140', 'M 70 90 L 150 90'], a, lt);
    // Godfather head center cross
    pp(g, ['M 250 50 L 250 140', 'M 210 90 L 290 90'], a, lt);
    // Baby center guide
    pp(g, ['M 130 180 L 130 280'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — full bodies of all three figures
  // Godmother (left), Baby Miguel (at hip), Godfather (right)
  // =====================================================================
  (g, a) => {
    // === GODMOTHER (left, centered ~x=110) ===
    // Head — oval, slightly narrower chin, warm face
    pp(g, [
      'M 110 52 C 88 52 76 68 76 88 C 76 108 84 122 96 130 C 102 134 106 136 110 138 C 114 136 118 134 124 130 C 136 122 144 108 144 88 C 144 68 132 52 110 52 Z'
    ], a);
    // Neck
    pp(g, ['M 102 136 L 100 150', 'M 118 136 L 120 150'], a);
    // Body — sleeveless long dress/jumpsuit to feet
    pp(g, [
      'M 68 174 C 78 158 94 150 110 150 C 126 158 142 166 148 180 L 152 340 L 156 420',
      'M 68 174 L 64 340 L 60 420'
    ], a);
    // Left arm (holding baby, bent at elbow)
    pp(g, [
      'M 68 174 C 60 186 56 200 58 216 C 60 230 68 240 78 246'
    ], a);
    // Right arm (supporting baby from below)
    pp(g, [
      'M 148 180 C 152 194 150 210 144 226 C 140 236 134 244 128 248'
    ], a);

    // === BABY MIGUEL (at godmother's hip, ~x=130, y=206) ===
    // Head — large round baby head
    pp(g, [
      'M 118 190 C 118 178 124 168 134 166 C 144 168 150 178 150 190 C 150 202 144 212 136 216 C 132 218 128 216 124 212 C 118 206 118 198 118 190 Z'
    ], a);
    // Baby body — small torso
    pp(g, [
      'M 122 214 C 124 220 130 224 136 224 C 142 224 146 220 148 214',
      'M 122 214 L 118 250 L 120 270',
      'M 148 214 L 152 250 L 150 270'
    ], a);
    // Baby legs
    pp(g, [
      'M 118 250 C 114 260 112 272 114 280',
      'M 150 250 C 154 260 156 272 154 280'
    ], a);

    // === GODFATHER (right, centered ~x=250) ===
    // Head — slightly angular, lean
    pp(g, [
      'M 250 52 C 228 52 216 68 216 88 C 216 108 224 122 236 130 C 242 134 246 136 250 138 C 254 136 258 134 264 130 C 276 122 284 108 284 88 C 284 68 272 52 250 52 Z'
    ], a);
    // Neck
    pp(g, ['M 242 136 L 240 150', 'M 258 136 L 260 150'], a);
    // Body — shirt, belt, pants
    pp(g, [
      'M 204 178 C 214 160 232 150 250 150 C 268 160 286 168 292 182 L 296 340 L 300 420',
      'M 204 178 L 200 340 L 196 420'
    ], a);
    // Right arm (pointing at camera) — extended forward
    pp(g, [
      'M 292 182 C 298 194 306 204 316 210 C 324 214 332 216 340 218'
    ], a);
    // Left arm at side
    pp(g, [
      'M 204 178 C 196 192 192 208 190 226 C 188 240 190 254 194 266'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — all three figures
  // =====================================================================
  (g, a) => {
    // === GODMOTHER FACE ===
    // Eyes — warm, looking toward baby
    pp(g, [
      'M 96 84 C 98 80 102 78 106 80 C 110 82 110 86 108 90 C 104 92 96 90 96 84 Z',
      'M 116 84 C 118 80 122 78 126 80 C 130 82 130 86 128 90 C 124 92 116 90 116 84 Z'
    ], a);
    // Pupils (looking down toward baby)
    fe(g, 'circle', { cx: 104, cy: 87, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 124, cy: 87, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows — feminine, arched
    pp(g, ['M 94 78 C 98 74 104 72 110 74', 'M 116 74 C 122 72 128 74 132 78'], a);
    // Nose
    pp(g, ['M 112 80 C 111 86 110 94 108 100', 'M 106 102 C 108 106 112 108 116 106'], a);
    // Wide warm smile with teeth line
    pp(g, ['M 96 114 C 100 110 106 108 110 110 C 114 108 120 110 124 114'], a);
    // Teeth gap (upper teeth showing)
    pp(g, ['M 100 114 L 120 114'], a);
    // Lower lip
    pp(g, ['M 98 116 C 104 122 114 122 122 116'], a);
    // Right ear (visible)
    pp(g, ['M 144 84 C 148 80 152 84 152 92 C 152 100 148 104 144 102'], a);
    pp(g, ['M 148 88 C 150 92 150 98 148 100'], a, lt);

    // === BABY MIGUEL FACE ===
    // Big eyes
    pp(g, [
      'M 124 186 C 126 182 130 180 134 182 C 138 184 138 190 134 192 C 130 194 124 192 124 186 Z',
      'M 138 186 C 140 182 144 180 148 182 C 152 184 152 190 148 192 C 144 194 138 192 138 186 Z'
    ], a);
    // Baby pupils
    fe(g, 'circle', { cx: 131, cy: 188, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 145, cy: 188, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Baby tiny nose
    pp(g, ['M 136 190 C 135 194 136 196 138 196 C 140 196 141 194 140 190'], a);
    // Baby small smile
    pp(g, ['M 130 200 C 134 198 138 198 142 200', 'M 132 202 C 136 204 140 204 144 202'], a);

    // === GODFATHER FACE ===
    // Rectangular glasses frames
    pp(g, [
      // Left lens
      'M 230 82 L 248 82 L 248 98 L 230 98 Z',
      // Right lens
      'M 252 82 L 270 82 L 270 98 L 252 98 Z',
      // Bridge
      'M 248 90 L 252 90',
      // Left arm of glasses
      'M 230 90 L 218 86',
      // Right arm of glasses
      'M 270 90 L 282 86'
    ], a);
    // Eyes behind glasses
    pp(g, [
      'M 234 88 C 236 84 240 82 244 84 C 248 86 248 92 244 94 C 240 96 234 94 234 88 Z',
      'M 256 88 C 258 84 262 82 266 84 C 270 86 270 92 266 94 C 262 96 256 94 256 88 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 241, cy: 90, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 263, cy: 90, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows — strong
    pp(g, ['M 230 78 C 236 74 242 73 248 76', 'M 252 76 C 258 73 264 74 270 78'], a);
    // Nose
    pp(g, ['M 252 82 C 251 90 250 98 248 104', 'M 246 106 C 248 110 252 112 256 110'], a);
    // Mouth
    pp(g, ['M 240 118 C 244 114 250 112 254 114 C 258 112 262 114 266 118'], a);
    pp(g, ['M 242 120 C 248 124 258 124 264 120'], a);
    // Ears
    pp(g, ['M 216 86 C 210 82 206 86 206 94 C 206 102 210 106 216 104'], a);
    pp(g, ['M 216 90 C 212 94 212 100 214 102'], a, lt);
    pp(g, ['M 284 86 C 290 82 294 86 294 94 C 294 102 290 106 284 104'], a);
    pp(g, ['M 290 90 C 292 94 292 100 290 102'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and accessories — godmother long hair, baby wispy hair,
  //          godfather short hair, goatee dots, bracelet, watch
  // =====================================================================
  (g, a) => {
    // === GODMOTHER HAIR — long straight dark brown to shoulders ===
    // Hairline contour
    pp(g, [
      'M 78 84 C 76 66 84 50 100 44 C 110 40 120 42 128 48 C 138 56 144 68 144 84'
    ], a);
    // Hair mass on left side flowing to shoulder
    pp(g, [
      'M 76 86 C 74 100 70 116 66 132 C 62 148 58 164 56 176',
      'M 80 86 C 78 100 76 114 74 128 C 72 142 70 156 68 168'
    ], a);
    // Hair mass on right side
    pp(g, [
      'M 144 86 C 146 100 148 116 150 132 C 152 148 154 162 154 174',
      'M 140 86 C 142 100 142 114 144 128 C 146 142 146 156 146 168'
    ], a);
    // Hair strand texture
    pp(g, [
      'M 88 48 C 98 42 112 40 122 46',
      'M 82 58 C 92 50 106 48 116 52',
      'M 80 70 C 86 64 96 60 108 62',
      'M 72 104 C 70 112 68 122 66 132',
      'M 146 104 C 148 112 150 122 152 132'
    ], a, lt);

    // Godmother black bracelet on wrist
    pp(g, [
      'M 56 228 C 54 224 52 220 56 218 C 60 216 64 220 62 224 C 60 228 56 232 56 228 Z'
    ], a);

    // === BABY HAIR — very short fine wisps ===
    pp(g, [
      'M 122 186 C 120 174 126 164 136 162 C 146 160 152 166 154 176 C 154 182 152 186 150 190'
    ], a);
    // Wispy strands
    pp(g, [
      'M 130 164 C 134 160 140 158 146 162',
      'M 126 170 C 130 166 136 164 142 166'
    ], a, lt);

    // === GODFATHER HAIR — short dark hair with texture ===
    pp(g, [
      'M 220 84 C 218 66 226 50 242 44 C 252 40 262 42 270 48 C 280 56 286 68 286 84'
    ], a);
    // Hair texture — short strokes
    pp(g, [
      'M 234 48 C 242 42 254 40 264 46',
      'M 228 56 C 238 48 252 46 262 52',
      'M 224 66 C 232 60 244 58 256 62',
      'M 222 76 C 228 70 238 66 248 68'
    ], a, lt);

    // === GOATEE — dots array (~12 dots around chin/mouth) ===
    const goateeDots = [
      [244, 122], [248, 124], [252, 126], [256, 126], [260, 124], [264, 122],
      [246, 128], [250, 130], [254, 132], [258, 130], [262, 128],
      [252, 134]
    ];
    goateeDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a);
    });

    // === WATCH on godfather left wrist ===
    pp(g, [
      'M 188 252 L 196 250 L 198 258 L 190 260 Z'
    ], a);
    fe(g, 'circle', { cx: 194, cy: 255, r: 3.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Watch band
    pp(g, ['M 186 254 L 182 250', 'M 192 262 L 196 268'], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — godmother sleeveless dress, godfather shirt
  //          with collar, buttons, belt, pants, micro-dot pattern
  // =====================================================================
  (g, a) => {
    // === GODMOTHER DRESS ===
    // Sleeveless neckline V-shape
    pp(g, [
      'M 96 152 C 100 148 106 146 110 146 C 114 146 120 148 124 152',
      'M 96 152 C 98 158 102 162 108 164',
      'M 124 152 C 122 158 118 162 112 164'
    ], a);
    // Dress straight to feet — long, flowing
    pp(g, ['M 64 340 L 60 420', 'M 152 340 L 156 420'], a, lt);
    // Drape fold lines on dress (~4 folds)
    pp(g, [
      'M 80 200 C 78 220 76 250 74 280',
      'M 92 190 C 90 220 88 260 86 300',
      'M 126 200 C 128 230 130 270 132 310',
      'M 140 210 C 142 240 144 280 146 320'
    ], a, lt);

    // === GODFATHER SHIRT ===
    // Collar with points
    pp(g, [
      'M 234 152 C 230 148 224 148 220 152 C 218 156 222 162 228 160',
      'M 266 152 C 270 148 276 148 280 152 C 282 156 278 162 272 160',
      'M 228 160 C 236 164 246 166 254 166 C 262 164 268 162 272 160'
    ], a);
    // Button line vertical (center of shirt)
    pp(g, ['M 250 166 L 250 310'], a, lt);
    // 4 button dots
    fe(g, 'circle', { cx: 250, cy: 182, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 206, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 230, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 254, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Belt double lines
    pp(g, ['M 204 308 L 296 308', 'M 204 314 L 296 314'], a);
    // Belt buckle rectangle
    pp(g, ['M 242 306 L 258 306 L 258 316 L 242 316 Z'], a);
    // Buckle inner rectangle
    pp(g, ['M 244 308 L 256 308 L 256 314 L 244 314 Z'], a, lt);
    // Pants seam
    pp(g, ['M 248 316 L 248 420'], a, lt);
    // Pants legs
    pp(g, ['M 200 340 L 196 420', 'M 296 340 L 300 420'], a, lt);
    // Micro-dot pattern on shirt using loop
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 6; col++) {
        const cx = 218 + col * 12 + (row % 2 === 0 ? 0 : 6);
        const cy = 170 + row * 11;
        if (cy < 306) {
          fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : LP }, a);
        }
      }
    }
  },

  // =====================================================================
  // Layer 5: Hands and pointing gesture — godmother cradling baby,
  //          baby feet/shoes, godfather pointing RIGHT hand, left hand at side
  // =====================================================================
  (g, a) => {
    // === GODMOTHER LEFT ARM cradling baby ===
    pp(g, [
      'M 58 216 C 64 226 74 234 86 240 C 96 244 108 246 118 244'
    ], a);
    // Hand under baby with finger details
    pp(g, [
      'M 86 240 C 82 236 78 234 76 238 C 74 242 78 246 82 246',
      'M 80 238 C 76 234 72 232 70 236 C 68 240 72 244 76 244',
      'M 78 242 C 74 240 70 238 68 242 C 66 246 70 248 74 248',
      'M 84 244 C 82 248 86 252 90 250 C 94 248 92 244 88 244'
    ], a);
    // Thumb
    pp(g, ['M 90 238 C 94 234 98 232 100 236 C 102 240 98 244 94 242'], a);

    // === GODMOTHER RIGHT ARM supporting baby from below ===
    pp(g, [
      'M 144 226 C 140 234 134 240 128 244'
    ], a);
    // Right hand supporting
    pp(g, [
      'M 128 244 C 132 248 136 252 138 256 C 140 260 136 262 132 260 C 128 258 126 254 126 250',
      'M 130 248 C 134 252 136 256 134 258',
      'M 128 250 C 132 254 132 258 130 260'
    ], a);

    // === BABY FEET / SHOES ===
    // Left shoe
    pp(g, [
      'M 114 278 C 110 280 106 284 106 290 C 106 296 110 300 116 298 C 120 296 122 290 120 284 Z'
    ], a);
    // Right shoe
    pp(g, [
      'M 154 278 C 158 280 162 284 162 290 C 162 296 158 300 152 298 C 148 296 146 290 148 284 Z'
    ], a);
    // Shoe sole lines
    pp(g, ['M 108 294 L 118 294', 'M 150 294 L 160 294'], a, lt);

    // === GODFATHER RIGHT HAND — POINTING at camera ===
    // Forearm to hand
    pp(g, [
      'M 316 210 C 322 212 330 214 336 216'
    ], a);
    // INDEX FINGER extended straight (key visual element)
    pp(g, [
      'M 336 216 C 340 214 346 212 352 210 C 356 208 358 206 356 204 C 354 202 350 204 346 206 C 342 208 338 210 336 212'
    ], a);
    // Index finger top edge
    pp(g, [
      'M 336 212 C 340 210 346 208 352 206'
    ], a);
    // Other 3 fingers curled
    pp(g, [
      // Middle finger curled
      'M 336 218 C 340 220 342 224 340 228 C 338 232 334 230 332 226',
      // Ring finger curled
      'M 334 220 C 338 222 340 226 338 230 C 336 234 332 232 330 228',
      // Pinky curled
      'M 332 222 C 336 224 338 228 336 232 C 334 236 330 234 328 230'
    ], a);
    // Thumb visible (tucked under, slightly visible)
    pp(g, [
      'M 336 216 C 334 220 330 222 326 220 C 322 218 322 214 326 212 C 330 210 334 212 336 216'
    ], a);
    // Knuckle detail
    pp(g, ['M 332 216 C 334 218 336 220 338 218'], a, lt);

    // === GODFATHER LEFT HAND at side ===
    pp(g, [
      'M 194 262 C 192 268 190 274 188 280'
    ], a);
    // Hand fingers
    pp(g, [
      'M 188 280 C 186 284 184 288 182 292 C 180 296 182 298 186 296 C 190 294 192 290 192 286',
      'M 190 282 C 188 286 186 290 186 294',
      'M 192 280 C 190 284 188 290 188 294',
      'M 186 280 C 184 284 182 288 182 290'
    ], a);
    // Thumb
    pp(g, ['M 192 278 C 196 280 198 284 196 288 C 194 290 192 288 190 284'], a);
  },

  // =====================================================================
  // Layer 6: Background — stone wall with irregular blocks, window with
  //          4 glass panes, wall shadow, ground/floor line
  // =====================================================================
  (g, a) => {
    // === STONE WALL — irregular block outlines in ~6 rows ===
    // Row 1 (y=0-40)
    pp(g, [
      'M 0 0 L 58 0 L 58 38 L 0 38 Z',
      'M 62 0 L 128 0 L 128 36 L 62 36 Z',
      'M 232 0 L 310 0 L 310 38 L 232 38 Z',
      'M 314 0 L 360 0 L 360 40 L 314 40 Z'
    ], a, lt);
    // Row 2 (y=40-80)
    pp(g, [
      'M 0 42 L 72 42 L 72 78 L 0 78 Z',
      'M 76 40 L 126 40 L 126 76 L 76 76 Z',
      'M 234 42 L 300 42 L 300 78 L 234 78 Z',
      'M 304 40 L 360 40 L 360 80 L 304 80 Z'
    ], a, lt);
    // Row 3 (y=80-120) — window area in center
    pp(g, [
      'M 0 82 L 60 82 L 60 118 L 0 118 Z',
      'M 64 80 L 124 80 L 124 116 L 64 116 Z',
      'M 236 82 L 310 82 L 310 120 L 236 120 Z',
      'M 314 82 L 360 82 L 360 118 L 314 118 Z'
    ], a, lt);
    // Row 4 (y=120-160)
    pp(g, [
      'M 0 122 L 68 122 L 68 158 L 0 158 Z',
      'M 72 120 L 132 120 L 132 156 L 72 156 Z',
      'M 136 118 L 226 118 L 226 158 L 136 158 Z',
      'M 230 122 L 296 122 L 296 160 L 230 160 Z',
      'M 300 120 L 360 120 L 360 156 L 300 156 Z'
    ], a, lt);
    // Row 5 (y=160-200) — behind figures, less visible
    pp(g, [
      'M 0 162 L 54 162 L 54 198 L 0 198 Z',
      'M 298 160 L 360 160 L 360 200 L 298 200 Z'
    ], a, lt);
    // Row 6 (y=200-240) — sides only
    pp(g, [
      'M 0 202 L 46 202 L 46 238 L 0 238 Z',
      'M 308 202 L 360 202 L 360 240 L 308 240 Z'
    ], a, lt);

    // === WINDOW — rectangle with inner frame and cross dividers ===
    // Outer frame
    pp(g, ['M 136 10 L 224 10 L 224 68 L 136 68 Z'], a);
    // Inner frame (slightly inset)
    pp(g, ['M 140 14 L 220 14 L 220 64 L 140 64 Z'], a);
    // Vertical divider
    pp(g, ['M 180 14 L 180 64'], a);
    // Horizontal divider
    pp(g, ['M 140 39 L 220 39'], a);
    // Window ledge
    pp(g, ['M 132 68 L 228 68 L 228 76 L 132 76 Z'], a);

    // === WALL SHADOW on right side ===
    pp(g, [
      'M 310 0 L 310 420 L 360 420 L 360 0 Z'
    ], a, lt);

    // === GROUND / FLOOR LINE ===
    pp(g, ['M 0 420 L 360 420'], a);
    // Ground surface hint
    pp(g, ['M 0 420 L 0 450 L 360 450 L 360 420'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — FIGURES (skin, hair, clothing for all three)
  // =====================================================================
  (g, a) => {
    // === GODMOTHER ===
    // Face skin
    fl(g,
      'M 110 52 C 88 52 76 68 76 88 C 76 108 84 122 96 130 C 102 134 106 136 110 138 C 114 136 118 134 124 130 C 136 122 144 108 144 88 C 144 68 132 52 110 52 Z',
      '#F5D0A9', a);
    // Ear skin
    fe(g, 'ellipse', { cx: 148, cy: 92, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    // Neck skin
    fe(g, 'rect', { x: 100, y: 134, width: 20, height: 18, rx: 4, fill: '#EDBE8C' }, false);
    // Hair fill — dark brown, both sides
    fl(g,
      'M 78 84 C 76 66 84 50 100 44 C 110 40 120 42 128 48 C 138 56 144 68 144 84 L 140 82 C 140 72 136 60 128 54 C 122 48 114 46 106 48 C 96 52 86 62 82 76 Z',
      '#4E342E', false);
    // Hair sides flowing down — left
    fl(g,
      'M 76 86 C 74 100 70 116 66 132 C 62 148 58 164 56 176 L 62 176 C 64 164 68 148 72 132 C 76 116 78 100 80 86 Z',
      '#4E342E', false);
    // Hair sides flowing down — right
    fl(g,
      'M 144 86 C 146 100 148 116 150 132 C 152 148 154 162 154 174 L 148 174 C 148 162 146 148 144 132 C 142 116 140 100 140 86 Z',
      '#4E342E', false);
    // Navy dress fill
    fl(g,
      'M 68 174 C 78 158 94 150 110 150 C 126 158 142 166 148 180 L 152 340 L 156 420 L 60 420 L 64 340 Z',
      '#1A237E', a);
    // Arm skin (left arm visible)
    fl(g,
      'M 68 174 C 60 186 56 200 58 216 C 60 226 66 234 74 240 L 80 236 C 72 230 66 222 64 214 C 62 202 64 190 70 178 Z',
      '#F5D0A9', false);

    // === BABY MIGUEL ===
    // Baby face skin
    fl(g,
      'M 118 190 C 118 178 124 168 134 166 C 144 168 150 178 150 190 C 150 202 144 212 136 216 C 132 218 128 216 124 212 C 118 206 118 198 118 190 Z',
      '#FADCC2', a);
    // Baby body — white clothes
    fl(g,
      'M 122 214 C 124 220 130 224 136 224 C 142 224 146 220 148 214 L 152 250 L 150 270 L 120 270 L 118 250 Z',
      '#FAFAFA', false);
    // Baby legs — white
    fl(g,
      'M 118 250 C 114 260 112 272 114 280 L 120 280 L 120 270 Z',
      '#FAFAFA', false);
    fl(g,
      'M 150 250 C 154 260 156 272 154 280 L 148 280 L 148 270 Z',
      '#FAFAFA', false);
    // Baby white shoes
    fe(g, 'ellipse', { cx: 112, cy: 290, rx: 8, ry: 7, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 156, cy: 290, rx: 8, ry: 7, fill: '#FAFAFA' }, false);

    // === GODFATHER ===
    // Face skin
    fl(g,
      'M 250 52 C 228 52 216 68 216 88 C 216 108 224 122 236 130 C 242 134 246 136 250 138 C 254 136 258 134 264 130 C 276 122 284 108 284 88 C 284 68 272 52 250 52 Z',
      '#F5D0A9', a);
    // Ears skin
    fe(g, 'ellipse', { cx: 210, cy: 94, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 290, cy: 94, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    // Neck skin
    fe(g, 'rect', { x: 240, y: 134, width: 20, height: 18, rx: 4, fill: '#EDBE8C' }, false);
    // Hair fill — dark brown
    fl(g,
      'M 220 84 C 218 66 226 50 242 44 C 252 40 262 42 270 48 C 280 56 286 68 286 84 L 282 82 C 282 72 278 62 270 54 C 264 48 256 46 248 48 C 238 52 228 62 224 76 Z',
      '#3E2C20', false);
    // White shirt fill
    fl(g,
      'M 204 178 C 214 160 232 150 250 150 C 268 160 286 168 292 182 L 296 308 L 204 308 Z',
      '#F5F5F5', a);
    // Brown belt fill
    fl(g,
      'M 204 308 L 296 308 L 296 314 L 204 314 Z',
      '#795548', false);
    // Belt buckle fill
    fe(g, 'rect', { x: 243, y: 307, width: 14, height: 8, rx: 1, fill: '#A1887F' }, false);
    // Dark pants fill
    fl(g,
      'M 200 314 L 296 314 L 300 420 L 196 420 Z',
      '#37474F', a);
    // Right pointing arm skin
    fl(g,
      'M 292 182 C 298 194 306 204 316 210 C 324 214 332 216 340 218 L 338 224 C 330 222 322 220 314 216 C 304 210 296 200 290 188 Z',
      '#F5D0A9', false);
    // Left arm skin
    fl(g,
      'M 204 178 C 196 192 192 208 190 226 C 188 240 190 254 194 266 L 200 264 C 196 252 194 240 196 226 C 198 210 202 196 208 184 Z',
      '#F5D0A9', false);
    // Glasses fill (dark frames)
    fe(g, 'rect', { x: 230, y: 82, width: 18, height: 16, rx: 1, fill: '#424242', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 252, y: 82, width: 18, height: 16, rx: 1, fill: '#424242', opacity: '0.3' }, false);
    // Bracelet fill (godmother)
    fe(g, 'ellipse', { cx: 58, cy: 224, rx: 5, ry: 6, fill: '#212121' }, false);
  },

  // =====================================================================
  // Layer 8: Color fills — SCENE (stone wall, individual stones, window,
  //          shadow, ground, pointing hand skin, hands, watch)
  // =====================================================================
  (g, a) => {
    // === STONE WALL base fill ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 420, fill: '#D7C8A0', opacity: '0.35' }, a);

    // === INDIVIDUAL STONES with varying warm fills ===
    // Row 1
    fe(g, 'rect', { x: 2, y: 2, width: 54, height: 34, rx: 2, fill: '#C8A96E', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 64, y: 2, width: 62, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 234, y: 2, width: 74, height: 34, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 316, y: 2, width: 42, height: 36, rx: 2, fill: '#C8A96E', opacity: '0.22' }, false);
    // Row 2
    fe(g, 'rect', { x: 2, y: 44, width: 68, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 78, y: 42, width: 46, height: 32, rx: 2, fill: '#B8A060', opacity: '0.22' }, false);
    fe(g, 'rect', { x: 236, y: 44, width: 62, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 306, y: 42, width: 52, height: 36, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    // Row 3
    fe(g, 'rect', { x: 2, y: 84, width: 56, height: 32, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 66, y: 82, width: 56, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 238, y: 84, width: 70, height: 34, rx: 2, fill: '#D7C8A0', opacity: '0.22' }, false);
    fe(g, 'rect', { x: 316, y: 84, width: 42, height: 32, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    // Row 4
    fe(g, 'rect', { x: 2, y: 124, width: 64, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 74, y: 122, width: 56, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 138, y: 120, width: 86, height: 36, rx: 2, fill: '#B8A060', opacity: '0.15' }, false);
    fe(g, 'rect', { x: 232, y: 124, width: 62, height: 34, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 302, y: 122, width: 56, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    // Row 5 (sides)
    fe(g, 'rect', { x: 2, y: 164, width: 50, height: 32, rx: 2, fill: '#B8A060', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 300, y: 162, width: 58, height: 36, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    // Row 6 (sides)
    fe(g, 'rect', { x: 2, y: 204, width: 42, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 310, y: 204, width: 48, height: 34, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);

    // === WINDOW ===
    // Frame fill — white
    fe(g, 'rect', { x: 136, y: 10, width: 88, height: 58, rx: 2, fill: '#FAFAFA' }, a);
    // Glass panes — sky blue, 4 panes (2x2)
    fe(g, 'rect', { x: 142, y: 16, width: 36, height: 21, rx: 1, fill: '#90CAF9' }, false);
    fe(g, 'rect', { x: 182, y: 16, width: 36, height: 21, rx: 1, fill: '#64B5F6' }, false);
    fe(g, 'rect', { x: 142, y: 41, width: 36, height: 21, rx: 1, fill: '#42A5F5' }, false);
    fe(g, 'rect', { x: 182, y: 41, width: 36, height: 21, rx: 1, fill: '#90CAF9' }, false);
    // Window ledge
    fe(g, 'rect', { x: 132, y: 68, width: 96, height: 8, rx: 1, fill: '#E0E0E0' }, false);

    // === WALL SHADOW (right side) ===
    fe(g, 'rect', { x: 310, y: 0, width: 50, height: 420, fill: '#000000', opacity: '0.06' }, false);

    // === GROUND ===
    fe(g, 'rect', { x: 0, y: 420, width: 360, height: 30, fill: '#9E9E9E' }, false);

    // === POINTING HAND + INDEX FINGER skin fill ===
    fl(g,
      'M 336 212 C 340 210 346 208 352 206 C 356 204 356 208 352 210 C 346 212 340 214 336 216 Z',
      '#F5D0A9', false);
    // Curled fingers fill
    fl(g,
      'M 332 218 C 336 220 340 224 340 228 C 338 232 334 230 332 226 Z',
      '#F5D0A9', false);
    fl(g,
      'M 330 220 C 334 222 338 226 336 230 C 334 234 330 232 328 228 Z',
      '#F5D0A9', false);
    // Thumb fill
    fl(g,
      'M 336 216 C 334 220 330 222 326 220 C 322 218 322 214 326 212 C 330 210 334 212 336 216 Z',
      '#F5D0A9', false);

    // === LEFT HAND skin fill (godfather) ===
    fl(g,
      'M 188 280 C 186 284 184 288 182 292 C 180 296 182 298 186 296 C 190 294 192 290 192 286 L 188 280 Z',
      '#F5D0A9', false);

    // === GODMOTHER cradling hand skin fill ===
    fl(g,
      'M 86 240 C 82 236 78 234 76 238 C 74 242 78 246 82 246 L 90 242 Z',
      '#F5D0A9', false);
    fl(g,
      'M 128 244 C 132 248 136 252 138 256 C 140 260 136 262 132 260 C 128 258 126 254 128 244 Z',
      '#F5D0A9', false);

    // === WATCH fill (godfather left wrist) ===
    fe(g, 'circle', { cx: 194, cy: 255, r: 3, fill: '#78909C' }, false);
    fe(g, 'circle', { cx: 194, cy: 255, r: 1.5, fill: '#B0BEC5' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, glasses glare, smiles, cheeks, goatee
  //          shadow, micro-dots, stone mortar, sun highlight, shoe hints
  // =====================================================================
  (g, a) => {
    // === EYE SHINES — godmother ===
    fe(g, 'circle', { cx: 102, cy: 85, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 122, cy: 85, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 106, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 126, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === EYE SHINES — baby ===
    fe(g, 'circle', { cx: 129, cy: 186, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 143, cy: 186, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 133, cy: 190, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 147, cy: 190, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === EYE SHINES — godfather (behind glasses) ===
    fe(g, 'circle', { cx: 239, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 261, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 243, cy: 92, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 265, cy: 92, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === GLASSES GLARE rectangles (white) ===
    fe(g, 'rect', { x: 234, y: 84, width: 8, height: 4, rx: 1, fill: '#FFFFFF', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 256, y: 84, width: 8, height: 4, rx: 1, fill: '#FFFFFF', opacity: '0.25' }, false);

    // === GODMOTHER SMILE fill ===
    fl(g,
      'M 98 116 C 104 120 114 120 122 116 C 118 114 108 112 98 116 Z',
      '#E57373', false);
    // Teeth white
    fl(g, 'M 100 114 L 120 114 L 118 116 L 102 116 Z', '#FAFAFA', false);

    // === BABY SMILE fill ===
    fl(g,
      'M 132 202 C 136 204 140 204 144 202 C 142 200 134 200 132 202 Z',
      '#F48FB1', false);

    // === GODMOTHER CHEEKS ===
    fe(g, 'ellipse', { cx: 92, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 128, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // === BABY CHEEKS ===
    fe(g, 'ellipse', { cx: 124, cy: 202, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 146, cy: 202, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);

    // === GOATEE SHADOW ===
    fl(g,
      'M 244 120 C 248 124 254 128 258 128 C 262 126 266 122 268 118 C 264 124 258 130 252 132 C 246 130 242 126 244 120 Z',
      '#5D4037', false);

    // === SHIRT MICRO-DOT pattern layer (godfather — subtle repeat) ===
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 5; col++) {
        const cx = 220 + col * 14 + (row % 2 === 0 ? 0 : 7);
        const cy = 174 + row * 13;
        if (cy < 306) {
          fe(g, 'circle', { cx, cy, r: 0.4, fill: '#BDBDBD', opacity: '0.5' }, false);
        }
      }
    }

    // === STONE MORTAR LINES — horizontal and vertical ===
    // Horizontal mortar
    pp(g, [
      'M 0 40 L 126 40',
      'M 232 38 L 360 38',
      'M 0 80 L 124 80',
      'M 234 78 L 360 78',
      'M 0 120 L 360 120',
      'M 0 160 L 360 160',
      'M 0 200 L 54 200',
      'M 298 200 L 360 200',
      'M 0 240 L 46 240',
      'M 308 240 L 360 240'
    ], false, lt);
    // Vertical mortar
    pp(g, [
      'M 58 0 L 58 40',
      'M 128 0 L 128 80',
      'M 72 42 L 72 80',
      'M 310 0 L 310 120',
      'M 234 0 L 234 80',
      'M 132 120 L 132 160',
      'M 226 120 L 226 160',
      'M 296 120 L 296 160'
    ], false, lt);

    // === SUN HIGHLIGHT warm spot on wall ===
    fe(g, 'ellipse', { cx: 180, cy: 110, rx: 30, ry: 18, fill: '#FFE082', opacity: '0.08' }, false);

    // === SHOE HINTS at bottom ===
    // Godmother shoe hints
    fe(g, 'ellipse', { cx: 80, cy: 424, rx: 12, ry: 4, fill: '#1A237E', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 140, cy: 424, rx: 12, ry: 4, fill: '#1A237E', opacity: '0.6' }, false);
    // Godfather shoe hints
    fe(g, 'ellipse', { cx: 224, cy: 424, rx: 14, ry: 5, fill: '#263238', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 276, cy: 424, rx: 14, ry: 5, fill: '#263238', opacity: '0.6' }, false);

    // === GODFATHER MOUTH COLOR ===
    fl(g,
      'M 242 120 C 248 124 258 124 264 120 C 260 118 246 118 242 120 Z',
      '#C9877A', false);

    // === BABY EYE WHITES ===
    fl(g, 'M 124 186 C 126 182 130 180 134 182 C 138 184 138 190 134 192 C 130 194 124 192 124 186 Z', '#FFFFFF', false);
    fl(g, 'M 138 186 C 140 182 144 180 148 182 C 152 184 152 190 148 192 C 144 194 138 192 138 186 Z', '#FFFFFF', false);

    // === GODMOTHER EYE WHITES ===
    fl(g, 'M 96 84 C 98 80 102 78 106 80 C 110 82 110 86 108 90 C 104 92 96 90 96 84 Z', '#FFFFFF', false);
    fl(g, 'M 116 84 C 118 80 122 78 126 80 C 130 82 130 86 128 90 C 124 92 116 90 116 84 Z', '#FFFFFF', false);

    // === GODFATHER EYE WHITES ===
    fl(g, 'M 234 88 C 236 84 240 82 244 84 C 248 86 248 92 244 94 C 240 96 234 94 234 88 Z', '#FFFFFF', false);
    fl(g, 'M 256 88 C 258 84 262 82 266 84 C 270 86 270 92 266 94 C 262 96 256 94 256 88 Z', '#FFFFFF', false);

    // === WINDOW FRAME divider lines (crisp white over glass) ===
    fe(g, 'rect', { x: 178, y: 14, width: 4, height: 50, fill: '#FAFAFA' }, false);
    fe(g, 'rect', { x: 140, y: 37, width: 80, height: 4, fill: '#FAFAFA' }, false);
  }
];

// ==============================================================
// SCENE: AVÓS DUARTE — Grandparents Duarte with baby Miguel
// Grandfather (center-left, bald, glasses, goatee, striped shirt)
// Grandmother (right, gray-blonde hair, glasses, navy blouse, pearls)
// Baby Miguel (on grandfather's lap, huge smile)
// Background: rustic stone wall, dark wooden door, flower boxes
// ==============================================================

const segundafamiliaLayers = [
  // ================================================================
  // PNG TRACED APPROACH (3-star): 6 layers, no fine detail.
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/segundafamilia/step1_hl.png' : 'img/segundafamilia/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/segundafamilia/step2_hl.png' : 'img/segundafamilia/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/segundafamilia/step3_hl.png' : 'img/segundafamilia/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/segunda-familia.jpeg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Segunda Familia';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const avoesduarteLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/avoesduarte/step1_hl.png' : 'img/avoesduarte/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/avoesduarte/step2_hl.png' : 'img/avoesduarte/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/avoesduarte/step3_hl.png' : 'img/avoesduarte/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/avoesduarte/step4_hl.png' : 'img/avoesduarte/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/avoes-duarte.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Avos Duarte';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const avosdiasLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosdias/step1_hl.png' : 'img/avosdias/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosdias/step2_hl.png' : 'img/avosdias/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosdias/step3_hl.png' : 'img/avosdias/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/avosdias/step4_hl.png' : 'img/avosdias/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/avos-dias.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Avos Dias';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

// ==============================================================
// SCENE: BISAVÔ — Great-grandfather celebrating at restaurant
// Elderly man (~85-90) with huge joyful smile, holding water bottle
// Orange baroque tablecloth, balloons, fire extinguisher
// ==============================================================
const bivoLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Table edge guide
    pp(g, ['M 0 290 L 360 290'], a, lt);
    // Figure zone verticals
    pp(g, ['M 100 10 L 100 290', 'M 244 10 L 244 290'], a, lt);
    // Head center horizontal
    pp(g, ['M 100 120 L 244 120'], a, lt);
    // Background ceiling line
    pp(g, ['M 0 10 L 360 10'], a, lt);
    // Shoulder line
    pp(g, ['M 100 200 L 244 200'], a, lt);
    // Chair zone right
    pp(g, ['M 270 60 L 330 60 L 330 290'], a, lt);
  },

  // Layer 1: Head, ears, neck, shoulders, seated body
  (g, a) => {
    // Head — slightly elongated, elderly angular shape
    pp(g, [
      'M 148 124 C 146 100 152 80 162 72 C 168 66 176 64 184 66 C 192 68 200 76 204 88 C 208 100 206 116 204 128 C 202 140 198 152 190 160 C 184 166 178 170 172 172 C 166 170 160 166 154 160 C 148 152 146 140 148 124 Z'
    ], a);
    // Left ear — large, prominent
    pp(g, [
      'M 142 110 C 134 104 128 108 126 118 C 124 128 126 138 130 144 C 134 148 140 146 142 140'
    ], a);
    // Left ear inner curve
    pp(g, ['M 136 114 C 132 118 130 126 132 134 C 134 140 138 142 140 138'], a, lt);
    // Right ear — large, prominent
    pp(g, [
      'M 206 110 C 214 104 220 108 222 118 C 224 128 222 138 218 144 C 214 148 208 146 206 140'
    ], a);
    // Right ear inner curve
    pp(g, ['M 212 114 C 216 118 218 126 216 134 C 214 140 210 142 208 138'], a, lt);
    // Neck — thin, elderly, wrinkled
    pp(g, ['M 162 170 L 160 188', 'M 182 170 L 184 188'], a);
    // Shoulders — thin, slightly hunched forward
    pp(g, [
      'M 116 216 C 124 198 144 188 172 188 C 200 188 220 198 228 216'
    ], a);
    // Body behind table (torso sides down to table)
    pp(g, ['M 116 216 L 112 290', 'M 228 216 L 232 290'], a);
    // Shoulder hunch curve
    pp(g, ['M 120 210 C 126 206 132 200 140 196', 'M 224 210 C 218 206 212 200 204 196'], a, lt);
  },

  // Layer 2: Face — eyes, wrinkles, nose, HUGE smile, age spots
  (g, a) => {
    // === EYES (small, between deep wrinkles) ===
    // Left eye
    pp(g, [
      'M 156 116 C 158 112 162 110 166 112 C 170 114 170 120 166 124 C 162 126 156 122 156 116 Z'
    ], a);
    // Left iris
    fe(g, 'circle', { cx: 163, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    // Right eye
    pp(g, [
      'M 180 116 C 182 112 186 110 190 112 C 194 114 194 120 190 124 C 186 126 180 122 180 116 Z'
    ], a);
    // Right iris
    fe(g, 'circle', { cx: 187, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    // Upper eyelid folds (heavy, droopy)
    pp(g, ['M 154 114 C 158 110 164 108 168 110', 'M 178 110 C 182 108 188 110 192 114'], a, lt);
    // Lower eyelid bags
    pp(g, ['M 156 124 C 160 127 164 128 168 126', 'M 180 126 C 184 128 188 127 192 124'], a, lt);

    // === EYEBROWS (sparse, thin, white) ===
    pp(g, ['M 152 108 C 158 104 166 103 170 106'], a, lt);
    pp(g, ['M 178 106 C 182 103 190 104 196 108'], a, lt);

    // === LARGE ANGULAR NOSE ===
    // Bridge
    pp(g, ['M 174 108 C 173 114 172 122 171 128 C 170 132 168 136 166 138'], a);
    // Nostril detail
    pp(g, [
      'M 164 140 C 166 144 170 146 176 146 C 180 146 184 144 186 140',
      'M 168 142 C 170 140 174 140 176 142',
      'M 166 140 C 164 138 164 136 166 136',
      'M 184 140 C 186 138 186 136 184 136'
    ], a);
    // Nose width lines
    pp(g, ['M 172 130 C 168 134 166 138 164 140', 'M 176 130 C 180 134 182 138 186 140'], a);

    // === THE HUGE SMILE (the heart of this drawing!) ===
    // Upper lip line — wide open grin
    pp(g, [
      'M 148 154 C 154 148 162 144 172 144 C 182 144 190 148 196 154'
    ], a);
    // Lower lip / jaw — mouth WIDE open with joy
    pp(g, [
      'M 148 154 C 152 166 160 176 172 180 C 184 176 192 166 196 154'
    ], a);
    // Teeth line (upper row)
    pp(g, ['M 152 156 L 192 156'], a);
    // Individual teeth separators
    pp(g, [
      'M 160 156 L 160 162',
      'M 168 156 L 168 164',
      'M 176 156 L 176 164',
      'M 184 156 L 184 162'
    ], a, lt);
    // Lower teeth hint
    pp(g, ['M 156 170 L 188 170'], a, lt);
    pp(g, ['M 164 168 L 164 172', 'M 172 168 L 172 174', 'M 180 168 L 180 172'], a, lt);
    // Lip corners — deep laugh creases
    pp(g, ['M 148 154 C 146 152 144 150 144 148', 'M 196 154 C 198 152 200 150 200 148'], a);

    // === FOREHEAD WRINKLES (3-4 deep horizontal lines) ===
    pp(g, [
      'M 150 82 C 158 78 168 76 178 76 C 188 78 196 80 202 84'
    ], a, lt);
    pp(g, [
      'M 148 88 C 156 84 168 82 178 82 C 188 84 196 86 202 90'
    ], a, lt);
    pp(g, [
      'M 150 94 C 158 90 168 88 178 88 C 188 90 196 92 200 96'
    ], a, lt);
    pp(g, [
      'M 152 100 C 160 96 170 94 180 94 C 190 96 196 98 200 102'
    ], a, lt);

    // === CROW'S FEET (3 lines each side) ===
    // Left crow's feet
    pp(g, [
      'M 152 114 C 148 110 144 108 140 108',
      'M 152 118 C 148 118 144 120 140 122',
      'M 152 122 C 148 126 144 130 140 134'
    ], a, lt);
    // Right crow's feet
    pp(g, [
      'M 196 114 C 200 110 204 108 208 108',
      'M 196 118 C 200 118 204 120 208 122',
      'M 196 122 C 200 126 204 130 208 134'
    ], a, lt);

    // === NASOLABIAL FOLDS (deep creases from nose to mouth corners) ===
    pp(g, [
      'M 162 132 C 160 138 156 146 150 154',
      'M 186 132 C 188 138 192 146 196 154'
    ], a);

    // === NECK WRINKLES (horizontal lines on thin neck) ===
    pp(g, ['M 158 174 C 164 172 178 172 184 174'], a, lt);
    pp(g, ['M 160 178 C 166 176 178 176 182 178'], a, lt);
    pp(g, ['M 160 182 C 166 180 178 180 182 182'], a, lt);

    // === CHIN WRINKLE ===
    pp(g, ['M 162 182 C 168 186 176 186 182 182'], a, lt);

    // === AGE SPOTS (forehead) ===
    fe(g, 'circle', { cx: 158, cy: 84, r: 3.5, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 180, cy: 80, r: 2.5, fill: a ? HL : '#C49A6C', opacity: '0.3' }, a);
    fe(g, 'circle', { cx: 194, cy: 90, r: 2, fill: a ? HL : '#C49A6C', opacity: '0.35' }, a);
    fe(g, 'circle', { cx: 168, cy: 76, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.25' }, a);
  },

  // Layer 3: Hair — bald dome, sparse white wisps on sides
  (g, a) => {
    // Bald dome outline — smooth, shiny top
    pp(g, [
      'M 146 114 C 144 92 150 76 162 68 C 170 62 180 60 188 62 C 198 66 206 76 208 92 C 210 102 210 112 208 118'
    ], a);
    // Shine arc on bald dome (subtle)
    pp(g, [
      'M 160 72 C 168 66 180 64 190 70'
    ], a, lt);
    pp(g, [
      'M 164 78 C 172 74 182 74 188 78'
    ], a, lt);

    // === Left side sparse white hair wisps (individual thin curves) ===
    const leftWisps = [
      [140, 108], [138, 114], [136, 120], [138, 126],
      [140, 132], [142, 138]
    ];
    leftWisps.forEach(([cx, cy]) => {
      pp(g, [`M ${cx} ${cy} C ${cx - 3} ${cy - 4} ${cx - 6} ${cy - 2} ${cx - 6} ${cy + 2}`], a, lt);
    });
    // Additional left wisps — thinner, shorter
    pp(g, [
      'M 138 110 C 134 108 132 112 134 116',
      'M 136 122 C 132 120 130 124 132 128'
    ], a, lt);

    // === Right side sparse white hair wisps ===
    const rightWisps = [
      [208, 108], [210, 114], [212, 120], [210, 126],
      [208, 132], [206, 138]
    ];
    rightWisps.forEach(([cx, cy]) => {
      pp(g, [`M ${cx} ${cy} C ${cx + 3} ${cy - 4} ${cx + 6} ${cy - 2} ${cx + 6} ${cy + 2}`], a, lt);
    });
    // Additional right wisps
    pp(g, [
      'M 210 110 C 214 108 216 112 214 116',
      'M 212 122 C 216 120 218 124 216 128'
    ], a, lt);

    // One lone wisp on top of bald head
    pp(g, ['M 172 64 C 174 58 178 58 180 64'], a, lt);
    pp(g, ['M 176 62 C 178 56 182 58 182 64'], a, lt);
  },

  // Layer 4: Clothing — cream button-up shirt with collar
  (g, a) => {
    // === COLLAR (open at neck, V-shape) ===
    // Left collar flap
    pp(g, [
      'M 156 190 C 150 186 146 188 144 194 C 142 200 146 206 152 204'
    ], a);
    // Right collar flap
    pp(g, [
      'M 188 190 C 194 186 198 188 200 194 C 202 200 198 206 192 204'
    ], a);
    // Collar base — connects around neck
    pp(g, [
      'M 152 204 C 160 208 168 210 172 210 C 176 210 184 208 192 204'
    ], a);
    // Collar points
    pp(g, [
      'M 144 194 C 140 190 138 194 140 198',
      'M 200 194 C 204 190 206 194 204 198'
    ], a);

    // === SHIRT OPENING (V from collar to table) ===
    pp(g, ['M 172 210 L 172 290'], a, lt);

    // === BUTTONS (3 visible down the front) ===
    fe(g, 'circle', { cx: 172, cy: 224, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 244, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 264, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // === SHOULDER SEAMS ===
    pp(g, [
      'M 142 200 C 132 196 124 200 120 210',
      'M 202 200 C 212 196 220 200 224 210'
    ], a, lt);

    // Shirt chest fold lines
    pp(g, [
      'M 136 220 C 142 224 150 226 160 226',
      'M 208 220 C 202 224 194 226 184 226'
    ], a, lt);

    // Sleeve wrinkles (left)
    pp(g, ['M 118 224 C 122 228 126 226 128 222'], a, lt);
    // Sleeve wrinkles (right)
    pp(g, ['M 226 224 C 222 228 218 226 216 222'], a, lt);
  },

  // Layer 5: Hands + water bottle (toast gesture) + left hand near plate
  (g, a) => {
    // === RIGHT ARM — raised high, holding water bottle ===
    pp(g, [
      'M 224 216 C 232 208 240 196 248 184 C 254 174 258 168 260 162'
    ], a);
    // Right forearm detail
    pp(g, ['M 226 218 C 234 210 242 198 250 186'], a, lt);

    // === RIGHT HAND gripping bottle ===
    // Thumb
    pp(g, [
      'M 258 160 C 256 154 252 150 250 152 C 248 156 248 162 250 166'
    ], a);
    // Index finger
    pp(g, [
      'M 254 158 C 252 152 248 148 246 150 C 244 154 244 160 246 164'
    ], a);
    // Middle finger
    pp(g, [
      'M 250 160 C 248 154 244 150 242 152 C 240 156 240 162 242 166'
    ], a);
    // Ring finger
    pp(g, [
      'M 246 162 C 244 158 240 154 238 156 C 236 160 238 166 240 168'
    ], a);
    // Pinky hint
    pp(g, ['M 242 164 C 240 160 236 158 234 162 C 234 166 236 170 238 170'], a, lt);

    // === WATER BOTTLE ===
    // Bottle body (tall cylinder)
    pp(g, [
      'M 240 94 L 240 170',
      'M 262 94 L 262 170'
    ], a);
    // Bottle bottom curve
    pp(g, ['M 240 170 C 240 174 248 176 251 176 C 254 176 262 174 262 170'], a);
    // Bottle neck taper
    pp(g, [
      'M 240 94 C 240 88 244 84 248 82',
      'M 262 94 C 262 88 258 84 254 82'
    ], a);
    // Bottle mouth
    pp(g, ['M 248 82 L 248 74 L 254 74 L 254 82'], a);
    // Cap
    pp(g, ['M 246 74 L 246 66 L 256 66 L 256 74'], a);
    // Cap ridges
    pp(g, ['M 247 68 L 255 68', 'M 247 71 L 255 71'], a, lt);
    // Label area outline
    pp(g, ['M 242 112 L 260 112 L 260 148 L 242 148 Z'], a, lt);
    // Label inner detail
    pp(g, ['M 244 120 L 258 120', 'M 244 132 L 258 132', 'M 244 140 L 258 140'], a, lt);

    // === LEFT ARM — resting near plate on table ===
    pp(g, [
      'M 120 218 C 114 226 108 240 106 258 C 104 270 106 280 112 284'
    ], a);
    // Left forearm detail
    pp(g, ['M 118 220 C 112 228 108 242 106 260'], a, lt);

    // === LEFT HAND with fingers ===
    // Palm
    pp(g, [
      'M 112 284 C 118 280 124 270 130 258 C 134 248 136 238 136 230'
    ], a);
    // Index finger
    pp(g, [
      'M 108 266 C 104 260 100 254 100 250 C 100 246 104 244 106 248'
    ], a);
    // Middle finger
    pp(g, [
      'M 110 270 C 106 264 102 258 102 254 C 102 250 106 248 108 252'
    ], a);
    // Ring + pinky hint
    pp(g, [
      'M 112 274 C 108 268 104 262 106 258',
      'M 114 278 C 110 274 108 268 110 264'
    ], a, lt);
    // Thumb (left hand)
    pp(g, ['M 118 262 C 122 256 126 252 128 254 C 130 258 128 264 124 268'], a);

    // === AGE SPOTS on hands ===
    fe(g, 'circle', { cx: 112, cy: 272, r: 2.2, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 120, cy: 264, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.35' }, a);
    fe(g, 'circle', { cx: 254, cy: 166, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 248, cy: 160, r: 1.5, fill: a ? HL : '#C49A6C', opacity: '0.3' }, a);
  },

  // Layer 6: Table, tablecloth pattern, plate, glass, cutlery, balloons, chair, fire extinguisher
  (g, a) => {
    // === TABLE EDGE ===
    pp(g, ['M 0 290 L 360 290'], a);
    pp(g, ['M 0 290 L 0 450', 'M 360 290 L 360 450'], a);

    // === BAROQUE TABLECLOTH PATTERN (programmatic spirals/scrolls) ===
    // Row 1 of baroque scrolls
    for (let x = 10; x < 350; x += 55) {
      // Spiral scroll
      pp(g, [
        `M ${x} 315 C ${x + 8} 305 ${x + 16} 300 ${x + 27} 305 C ${x + 38} 310 ${x + 38} 320 ${x + 27} 325 C ${x + 20} 328 ${x + 14} 326 ${x + 12} 320 C ${x + 10} 314 ${x + 16} 310 ${x + 22} 312`
      ], a, lt);
    }
    // Row 2 of baroque scrolls
    for (let x = 30; x < 350; x += 55) {
      pp(g, [
        `M ${x} 350 C ${x + 8} 340 ${x + 16} 335 ${x + 27} 340 C ${x + 38} 345 ${x + 38} 355 ${x + 27} 360 C ${x + 20} 363 ${x + 14} 361 ${x + 12} 355 C ${x + 10} 349 ${x + 16} 345 ${x + 22} 347`
      ], a, lt);
    }
    // Row 3 of scrolls
    for (let x = 10; x < 350; x += 55) {
      pp(g, [
        `M ${x} 385 C ${x + 8} 375 ${x + 16} 370 ${x + 27} 375 C ${x + 38} 380 ${x + 38} 390 ${x + 27} 395 C ${x + 20} 398 ${x + 14} 396 ${x + 12} 390 C ${x + 10} 384 ${x + 16} 380 ${x + 22} 382`
      ], a, lt);
    }
    // Connecting S-curves between rows
    for (let x = 45; x < 360; x += 55) {
      pp(g, [
        `M ${x} 326 C ${x + 4} 332 ${x + 2} 338 ${x - 2} 342`,
        `M ${x} 362 C ${x + 4} 368 ${x + 2} 374 ${x - 2} 378`
      ], a, lt);
    }

    // === PLATE (oval, white, in front of figure) ===
    pp(g, [
      'M 140 316 C 140 306 158 300 180 300 C 202 300 220 306 220 316 C 220 326 202 332 180 332 C 158 332 140 326 140 316 Z'
    ], a);
    // Plate rim
    pp(g, [
      'M 146 316 C 146 310 160 306 180 306 C 200 306 214 310 214 316 C 214 322 200 326 180 326 C 160 326 146 322 146 316 Z'
    ], a, lt);

    // === WINE GLASS (empty, with stem) ===
    // Bowl
    pp(g, [
      'M 80 278 C 80 268 86 262 96 262 C 106 262 112 268 112 278 C 112 286 106 290 96 292'
    ], a);
    pp(g, [
      'M 80 278 C 80 286 86 290 96 292'
    ], a);
    // Stem
    pp(g, ['M 96 292 L 96 318'], a);
    // Base
    pp(g, ['M 84 318 C 84 320 90 322 96 322 C 102 322 108 320 108 318'], a);
    pp(g, ['M 84 318 L 108 318'], a);

    // === CUTLERY ===
    // Knife (right of plate)
    pp(g, ['M 232 298 L 232 342'], a, lt);
    pp(g, ['M 230 298 C 230 294 232 290 234 294 C 236 298 234 300 232 300'], a, lt);
    // Fork (left of plate)
    pp(g, ['M 126 298 L 126 342'], a, lt);
    pp(g, [
      'M 124 298 L 124 308',
      'M 126 298 L 126 308',
      'M 128 298 L 128 308'
    ], a, lt);

    // === DECORATIVE NAPKIN/CARD on table ===
    pp(g, [
      'M 250 302 L 270 302 L 270 324 L 250 324 Z',
      'M 252 308 L 268 308',
      'M 252 316 L 268 316'
    ], a, lt);

    // === BALLOONS (3 gold ovals at top) ===
    // Left balloon
    pp(g, [
      'M 72 46 C 62 26 66 6 82 4 C 98 2 104 22 94 42 C 88 52 78 52 72 46 Z'
    ], a);
    // Center balloon (higher)
    pp(g, [
      'M 168 36 C 158 16 162 -4 178 -6 C 194 -8 200 12 190 32 C 184 42 174 42 168 36 Z'
    ], a);
    // Right balloon
    pp(g, [
      'M 280 52 C 270 32 274 12 290 10 C 306 8 312 28 302 48 C 296 58 286 58 280 52 Z'
    ], a);
    // Balloon strings
    pp(g, [
      'M 82 48 C 84 56 82 62 80 66',
      'M 178 38 C 180 46 178 52 176 58',
      'M 290 54 C 292 62 290 68 288 72'
    ], a, lt);
    // Balloon knots
    pp(g, [
      'M 80 46 L 84 50 L 80 50',
      'M 176 36 L 180 40 L 176 40',
      'M 288 52 L 292 56 L 288 56'
    ], a, lt);

    // === CHAIR (ladder-back design, behind figure on right) ===
    // Vertical posts
    pp(g, ['M 280 70 L 280 400', 'M 322 70 L 322 400'], a, lt);
    // Horizontal ladder rungs
    pp(g, [
      'M 282 90 L 320 90',
      'M 282 130 L 320 130',
      'M 282 170 L 320 170',
      'M 282 210 L 320 210'
    ], a, lt);
    // Chair top rail (curved)
    pp(g, ['M 278 70 C 290 62 310 62 322 70'], a, lt);
    // Seat hint
    pp(g, ['M 278 250 L 324 250'], a, lt);

    // === FIRE EXTINGUISHER (on wall, left side) ===
    // Body
    pp(g, ['M 24 190 L 48 190 L 48 258 L 24 258 Z'], a, lt);
    // Handle/head
    pp(g, ['M 30 186 L 42 186 L 42 190 L 30 190 Z'], a, lt);
    // Nozzle
    pp(g, ['M 36 186 L 36 178 C 36 174 32 172 30 174 L 26 180'], a, lt);
    // Pressure gauge
    fe(g, 'circle', { cx: 36, cy: 204, r: 4, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // Label band
    pp(g, ['M 26 220 L 46 220 L 46 240 L 26 240 Z'], a, lt);

    // === ANOTHER PERSON'S ARM (left edge hint) ===
    pp(g, ['M 0 250 C 10 246 20 244 30 248 C 40 252 44 260 40 268'], a, lt);
  },

  // Layer 7: Color fills — figure (skin, ears, bald head, hair, shirt, neck, hands)
  (g, a) => {
    // === SKIN (elderly — lighter, warmer tone with slight variation) ===
    fl(g,
      'M 148 124 C 146 100 152 80 162 72 C 168 66 176 64 184 66 C 192 68 200 76 204 88 C 208 100 206 116 204 128 C 202 140 198 152 190 160 C 184 166 178 170 172 172 C 166 170 160 166 154 160 C 148 152 146 140 148 124 Z',
      '#EDCBA0', a);
    // Subtle skin variation — lower face slightly different
    fl(g,
      'M 154 140 C 156 150 162 160 168 166 L 172 168 L 176 166 C 182 160 188 150 190 140 C 188 148 184 156 178 162 L 172 164 L 166 162 C 160 156 156 148 154 140 Z',
      '#E8C090', false);

    // === EAR FILLS ===
    fl(g,
      'M 142 112 C 136 108 130 110 128 118 C 126 128 128 138 132 142 C 136 146 140 144 142 138 C 142 132 140 122 142 112 Z',
      '#E8C090', false);
    fl(g,
      'M 206 112 C 212 108 218 110 220 118 C 222 128 220 138 216 142 C 212 146 208 144 206 138 C 206 132 208 122 206 112 Z',
      '#E8C090', false);
    // Inner ear pink
    fe(g, 'ellipse', { cx: 134, cy: 126, rx: 4, ry: 10, fill: '#DEBA88', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 214, cy: 126, rx: 4, ry: 10, fill: '#DEBA88', opacity: '0.6' }, false);

    // === BALD HEAD (skin-colored dome) ===
    fl(g,
      'M 148 116 C 146 94 152 78 164 70 C 172 64 182 62 190 64 C 200 68 208 78 210 94 C 212 104 212 114 210 120 L 206 118 C 208 108 208 98 206 90 C 202 78 196 70 188 66 C 180 64 170 66 164 72 C 156 80 150 92 150 106 Z',
      '#EDCBA0', false);
    // Bald head highlight / shine
    fl(g,
      'M 166 72 C 174 66 184 66 192 72 C 186 68 176 68 170 72 Z',
      '#F5E0C0', false);

    // === SIDE HAIR (white/gray thin patches) ===
    fe(g, 'rect', { x: 134, y: 108, width: 8, height: 30, rx: 3, fill: '#E8E4E0' }, false);
    fe(g, 'rect', { x: 206, y: 108, width: 8, height: 30, rx: 3, fill: '#E8E4E0' }, false);

    // === NECK FILL ===
    fe(g, 'rect', { x: 160, y: 168, width: 24, height: 20, rx: 4, fill: '#DEBA88' }, false);

    // === SHIRT FILL (cream/beige) ===
    fl(g,
      'M 118 216 C 126 198 146 188 172 188 C 198 188 218 198 226 216 L 230 290 L 114 290 Z',
      '#F5F0DC', a);

    // === COLLAR FILL ===
    fl(g,
      'M 158 192 C 152 188 148 190 146 196 C 144 202 148 208 154 206 C 162 210 170 212 172 212 C 174 212 182 210 190 206 C 196 208 200 202 198 196 C 196 190 192 188 186 192 L 180 200 C 176 204 168 204 164 200 Z',
      '#EDE4C8', false);

    // === HAND SKIN FILLS ===
    // Right hand (gripping bottle)
    fe(g, 'ellipse', { cx: 250, cy: 162, rx: 12, ry: 10, fill: '#EDCBA0' }, false);
    // Left hand (near plate)
    fe(g, 'ellipse', { cx: 114, cy: 270, rx: 12, ry: 12, fill: '#EDCBA0' }, false);

    // === ARM SKIN ===
    // Right arm fill
    fl(g,
      'M 224 216 C 230 210 238 198 246 186 C 252 176 256 170 258 164 L 262 166 C 260 172 256 180 250 190 C 244 200 236 212 228 220 Z',
      '#E8C8A0', false);
    // Left arm fill
    fl(g,
      'M 120 218 C 114 228 110 242 108 258 C 106 270 108 280 112 284 L 116 282 C 112 276 110 268 112 258 C 114 244 118 230 124 220 Z',
      '#E8C8A0', false);
  },

  // Layer 8: Color fills — scene (tablecloth, plate, glass, balloons, chair, extinguisher, bottle, wall)
  (g, a) => {
    // === WALL (subtle warm tint) ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 290, fill: '#FFF8E1', opacity: '0.2' }, false);

    // === ORANGE TABLECLOTH (vibrant) ===
    fe(g, 'rect', { x: 0, y: 290, width: 360, height: 160, fill: '#FF8F00' }, a);

    // === DARKER SPIRAL PATTERN OVERLAY on tablecloth ===
    for (let x = 10; x < 350; x += 55) {
      fl(g,
        `M ${x} 310 C ${x + 8} 300 ${x + 20} 298 ${x + 30} 306 C ${x + 38} 312 ${x + 36} 322 ${x + 28} 326 C ${x + 22} 328 ${x + 16} 324 ${x + 14} 318 C ${x + 12} 312 ${x + 18} 308 ${x + 24} 310 Z`,
        '#E65100', false);
    }
    for (let x = 30; x < 350; x += 55) {
      fl(g,
        `M ${x} 345 C ${x + 8} 335 ${x + 20} 333 ${x + 30} 341 C ${x + 38} 347 ${x + 36} 357 ${x + 28} 361 C ${x + 22} 363 ${x + 16} 359 ${x + 14} 353 C ${x + 12} 347 ${x + 18} 343 ${x + 24} 345 Z`,
        '#E65100', false);
    }
    for (let x = 10; x < 350; x += 55) {
      fl(g,
        `M ${x} 380 C ${x + 8} 370 ${x + 20} 368 ${x + 30} 376 C ${x + 38} 382 ${x + 36} 392 ${x + 28} 396 C ${x + 22} 398 ${x + 16} 394 ${x + 14} 388 C ${x + 12} 382 ${x + 18} 378 ${x + 24} 380 Z`,
        '#E65100', false);
    }
    // Extra tablecloth depth — lighter orange between rows
    for (let x = 20; x < 340; x += 55) {
      fe(g, 'ellipse', { cx: x + 20, cy: 330, rx: 8, ry: 4, fill: '#FFA726', opacity: '0.3' }, false);
      fe(g, 'ellipse', { cx: x + 20, cy: 365, rx: 8, ry: 4, fill: '#FFA726', opacity: '0.3' }, false);
    }

    // === PLATE (white) ===
    fl(g,
      'M 142 316 C 142 308 160 302 180 302 C 200 302 218 308 218 316 C 218 324 200 330 180 330 C 160 330 142 324 142 316 Z',
      '#FAFAFA', a);
    // Plate rim highlight
    fl(g,
      'M 148 316 C 148 312 162 308 180 308 C 198 308 212 312 212 316 C 212 320 198 324 180 324 C 162 324 148 320 148 316 Z',
      '#FFFFFF', false);

    // === WINE GLASS FILL (transparent/light gray) ===
    fl(g,
      'M 82 280 C 82 270 88 264 96 264 C 104 264 110 270 110 280 C 110 288 104 292 96 294 C 88 292 82 288 82 280 Z',
      '#E8E8E8', false);
    // Glass stem
    fe(g, 'rect', { x: 94, y: 292, width: 4, height: 26, fill: '#E0E0E0' }, false);
    // Glass base
    fe(g, 'ellipse', { cx: 96, cy: 320, rx: 12, ry: 3, fill: '#E0E0E0' }, false);

    // === BALLOON FILLS (gold/yellow) ===
    fl(g,
      'M 72 46 C 62 26 66 6 82 4 C 98 2 104 22 94 42 C 88 52 78 52 72 46 Z',
      '#FFD54F', a);
    fl(g,
      'M 168 36 C 158 16 162 -4 178 -6 C 194 -8 200 12 190 32 C 184 42 174 42 168 36 Z',
      '#FFCA28', false);
    fl(g,
      'M 280 52 C 270 32 274 12 290 10 C 306 8 312 28 302 48 C 296 58 286 58 280 52 Z',
      '#FFD54F', false);

    // === CHAIR FILL (brown wood) ===
    fe(g, 'rect', { x: 279, y: 70, width: 44, height: 330, rx: 3, fill: '#8D6E63', opacity: '0.2' }, false);
    // Chair rungs (slightly darker)
    fe(g, 'rect', { x: 282, y: 88, width: 38, height: 6, rx: 1, fill: '#795548', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 282, y: 128, width: 38, height: 6, rx: 1, fill: '#795548', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 282, y: 168, width: 38, height: 6, rx: 1, fill: '#795548', opacity: '0.2' }, false);

    // === FIRE EXTINGUISHER (red) ===
    fe(g, 'rect', { x: 25, y: 191, width: 22, height: 66, rx: 3, fill: '#D32F2F' }, false);
    // Extinguisher handle
    fe(g, 'rect', { x: 31, y: 187, width: 10, height: 5, rx: 1, fill: '#424242' }, false);
    // Label band
    fe(g, 'rect', { x: 27, y: 222, width: 18, height: 18, rx: 1, fill: '#FFEB3B', opacity: '0.7' }, false);

    // === WATER BOTTLE FILL ===
    // Bottle body (clear/light blue)
    fl(g,
      'M 242 96 L 242 168 C 242 172 250 174 251 174 C 252 174 260 172 260 168 L 260 96 C 260 90 258 86 254 84 L 248 84 C 244 86 242 90 242 96 Z',
      '#E3F2FD', false);
    // Blue label
    fe(g, 'rect', { x: 244, y: 114, width: 14, height: 32, rx: 1, fill: '#1565C0', opacity: '0.5' }, false);
    // Cap (blue)
    fe(g, 'rect', { x: 247, y: 67, width: 8, height: 8, rx: 1, fill: '#1565C0' }, false);

    // === CUTLERY metal sheen ===
    fe(g, 'rect', { x: 125, y: 298, width: 2, height: 44, rx: 0.5, fill: '#BDBDBD', opacity: '0.4' }, false);
    fe(g, 'rect', { x: 231, y: 298, width: 2, height: 44, rx: 0.5, fill: '#BDBDBD', opacity: '0.4' }, false);

    // === NAPKIN/CARD FILL ===
    fe(g, 'rect', { x: 251, y: 303, width: 18, height: 20, rx: 1, fill: '#FFF9C4' }, false);

    // === PERSON'S ARM on left edge ===
    fl(g,
      'M 0 248 C 10 244 22 244 32 250 C 42 256 44 264 40 270 L 36 266 C 38 260 36 254 28 250 C 20 246 10 248 0 252 Z',
      '#F5D0A9', false);

    // Door/opening hint on right background
    fe(g, 'rect', { x: 340, y: 100, width: 20, height: 180, rx: 2, fill: '#E8F5E9', opacity: '0.15' }, false);
  },

  // Layer 9: Polish — eye shine, mouth color, teeth, age spots, balloon shine, bottle details, wrinkle shadows, cheeks, LUSO label
  (g, a) => {
    // === EYE SHINES (bright, alive eyes despite wrinkles!) ===
    fe(g, 'circle', { cx: 161, cy: 116, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 185, cy: 116, r: 1.5, fill: 'white' }, a);
    // Secondary smaller shine
    fe(g, 'circle', { cx: 164, cy: 119, r: 0.8, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 188, cy: 119, r: 0.8, fill: 'white', opacity: '0.7' }, false);

    // === MOUTH OPEN FILL (pink/red — PURE JOY!) ===
    fl(g,
      'M 150 156 L 194 156 C 192 166 184 176 172 180 C 160 176 152 166 150 156 Z',
      '#E57373', false);
    // Darker mouth interior
    fl(g,
      'M 154 162 C 160 170 166 176 172 178 C 178 176 184 170 190 162 L 188 168 C 182 174 178 178 172 180 C 166 178 162 174 156 168 Z',
      '#C62828', false);

    // === TEETH FILL (white, upper row) ===
    fl(g, 'M 154 156 L 190 156 L 190 164 L 154 164 Z', '#FAFAFA', false);
    // Gap between teeth (slight shadows)
    fe(g, 'rect', { x: 159.5, y: 156, width: 0.8, height: 7, fill: '#E0E0E0' }, false);
    fe(g, 'rect', { x: 167.5, y: 156, width: 0.8, height: 8, fill: '#E0E0E0' }, false);
    fe(g, 'rect', { x: 175.5, y: 156, width: 0.8, height: 8, fill: '#E0E0E0' }, false);
    fe(g, 'rect', { x: 183.5, y: 156, width: 0.8, height: 7, fill: '#E0E0E0' }, false);
    // Lower teeth hint
    fl(g, 'M 158 168 L 186 168 L 186 172 L 158 172 Z', '#F0F0F0', false);

    // === AGE SPOT FILLS (forehead — soft, subtle) ===
    fe(g, 'circle', { cx: 158, cy: 84, r: 3.5, fill: '#C49A6C', opacity: '0.2' }, false);
    fe(g, 'circle', { cx: 180, cy: 80, r: 2.5, fill: '#C49A6C', opacity: '0.18' }, false);
    fe(g, 'circle', { cx: 194, cy: 90, r: 2, fill: '#C49A6C', opacity: '0.2' }, false);
    fe(g, 'circle', { cx: 168, cy: 76, r: 1.8, fill: '#C49A6C', opacity: '0.15' }, false);
    // Age spot on temple
    fe(g, 'circle', { cx: 148, cy: 96, r: 2, fill: '#C49A6C', opacity: '0.18' }, false);

    // === BALLOON SHINE HIGHLIGHTS ===
    fe(g, 'ellipse', { cx: 78, cy: 20, rx: 7, ry: 5, fill: 'white', opacity: '0.35' }, false);
    fe(g, 'ellipse', { cx: 174, cy: 10, rx: 7, ry: 5, fill: 'white', opacity: '0.35' }, false);
    fe(g, 'ellipse', { cx: 286, cy: 26, rx: 7, ry: 5, fill: 'white', opacity: '0.35' }, false);
    // Balloon bottom shadow
    fe(g, 'ellipse', { cx: 82, cy: 44, rx: 5, ry: 3, fill: '#F9A825', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 178, cy: 34, rx: 5, ry: 3, fill: '#F9A825', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 290, cy: 50, rx: 5, ry: 3, fill: '#F9A825', opacity: '0.3' }, false);

    // === BOTTLE WATER LINE ===
    pp(g, ['M 244 136 C 248 134 252 133 256 134 C 258 135 260 136 258 136'], a, lt);
    // Bottle water fill below water line
    fl(g,
      'M 244 136 C 248 134 254 133 258 136 L 258 168 C 258 170 252 172 251 172 C 250 172 244 170 244 168 Z',
      '#BBDEFB', false);

    // === WRINKLE SHADOW ENHANCEMENT (subtle darker lines) ===
    pp(g, ['M 150 90 C 160 86 172 84 186 86'], a, lt);
    pp(g, ['M 152 96 C 162 92 174 90 188 92'], a, lt);
    // Nasolabial fold shadow
    fl(g,
      'M 160 134 C 158 140 154 148 150 154 L 152 156 C 156 150 160 142 162 136 Z',
      '#D4A87A', false);
    fl(g,
      'M 188 134 C 190 140 194 148 198 154 L 196 156 C 192 150 188 142 186 136 Z',
      '#D4A87A', false);

    // === CHEEK BLUSH (happy glow — the man is beaming!) ===
    fe(g, 'ellipse', { cx: 150, cy: 142, rx: 12, ry: 6, fill: '#FFAB91', opacity: '0.35' }, a);
    fe(g, 'ellipse', { cx: 194, cy: 142, rx: 12, ry: 6, fill: '#FFAB91', opacity: '0.35' }, a);

    // === LABEL TEXT "LUSO" on water bottle ===
    const lb = ce('text', {
      x: 245, y: 134,
      fill: '#FAFAFA',
      'font-size': '5.5',
      'font-family': 'sans-serif',
      'font-weight': 'bold',
      'letter-spacing': '0.5'
    });
    lb.textContent = 'LUSO';
    if (a) lb.classList.add('active-element');
    g.appendChild(lb);

    // Sub-label hint
    const lb2 = ce('text', {
      x: 247, y: 140,
      fill: '#FAFAFA',
      'font-size': '2.5',
      'font-family': 'sans-serif',
      opacity: '0.7'
    });
    lb2.textContent = 'Natural';
    g.appendChild(lb2);

    // === FIRE EXTINGUISHER DETAILS ===
    // Pressure gauge fill
    fe(g, 'circle', { cx: 36, cy: 204, r: 3, fill: '#4CAF50', opacity: '0.5' }, false);
    // Gauge needle
    pp(g, ['M 36 204 L 38 201'], a, lt);

    // === PLATE SHADOW ===
    fe(g, 'ellipse', { cx: 180, cy: 330, rx: 36, ry: 4, fill: '#E65100', opacity: '0.15' }, false);

    // === GLASS HIGHLIGHT ===
    fe(g, 'ellipse', { cx: 90, cy: 272, rx: 3, ry: 6, fill: 'white', opacity: '0.25' }, false);

    // === BALD HEAD SHINE (final polish) ===
    fe(g, 'ellipse', { cx: 176, cy: 68, rx: 10, ry: 4, fill: 'white', opacity: '0.15' }, false);

    // === SHIRT BUTTON DETAILS ===
    fe(g, 'circle', { cx: 172, cy: 224, r: 1.2, fill: '#D7CEB0' }, false);
    fe(g, 'circle', { cx: 172, cy: 244, r: 1.2, fill: '#D7CEB0' }, false);
    fe(g, 'circle', { cx: 172, cy: 264, r: 1.2, fill: '#D7CEB0' }, false);
  }
];

const tioavoLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/tioavo/step1_hl.png' : 'img/tioavo/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/tioavo/step2_hl.png' : 'img/tioavo/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/tioavo/step3_hl.png' : 'img/tioavo/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/tioavo/step4_hl.png' : 'img/tioavo/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/tio-avo.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Tio & Avo';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

const miguelLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step1_hl.png' : 'img/miguel/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step2_hl.png' : 'img/miguel/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step3_hl.png' : 'img/miguel/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step4_hl.png' : 'img/miguel/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/Miguel.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

// Phase 2 scene placeholders (replaced by splice_scene.py)
const avosmddLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosmdd/step1_hl.png' : 'img/avosmdd/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosmdd/step2_hl.png' : 'img/avosmdd/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/avosmdd/step3_hl.png' : 'img/avosmdd/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/avosmdd/step4_hl.png' : 'img/avosmdd/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/avos-mdd.png');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Avos e Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const diasfamilyLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/diasfamily/step1_hl.png' : 'img/diasfamily/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/diasfamily/step2_hl.png' : 'img/diasfamily/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/diasfamily/step3_hl.png' : 'img/diasfamily/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/diasfamily/step4_hl.png' : 'img/diasfamily/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/dias-family.png');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Familia Dias';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const dias66Layers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/dias66/step1_hl.png' : 'img/dias66/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/dias66/step2_hl.png' : 'img/dias66/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/dias66/step3_hl.png' : 'img/dias66/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/dias66/step4_hl.png' : 'img/dias66/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/dias-family-2.png');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Familia Dias';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const espedradaLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedrada/step1_hl.png' : 'img/espedrada/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedrada/step2_hl.png' : 'img/espedrada/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedrada/step3_hl.png' : 'img/espedrada/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/espedrada/step4_hl.png' : 'img/espedrada/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/espedrada.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Espedrada';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const espedradaprimosLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 450x360
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 225 0 L 225 360'], a, lt);
    pp(g, ['M 0 120 L 450 120'], a, lt);
    pp(g, ['M 0 240 L 450 240'], a, lt);
    pp(g, ['M 10 5 L 440 5 L 440 355 L 10 355 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedradaprimos/step1_hl.png' : 'img/espedradaprimos/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedradaprimos/step2_hl.png' : 'img/espedradaprimos/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/espedradaprimos/step3_hl.png' : 'img/espedradaprimos/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/espedradaprimos/step4_hl.png' : 'img/espedradaprimos/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '450', height: '360', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/espedrada-primos.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 225, y: 345,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Bisavo e Netos';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const mddeamigosLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddeamigos/step1_hl.png' : 'img/mddeamigos/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddeamigos/step2_hl.png' : 'img/mddeamigos/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddeamigos/step3_hl.png' : 'img/mddeamigos/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/mddeamigos/step4_hl.png' : 'img/mddeamigos/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/mdd-amigos.png');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Miguel e Amigos';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const mddsprunkiesLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddsprunkies/step1_hl.png' : 'img/mddsprunkies/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddsprunkies/step2_hl.png' : 'img/mddsprunkies/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/mddsprunkies/step3_hl.png' : 'img/mddsprunkies/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/mddsprunkies/step4_hl.png' : 'img/mddsprunkies/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/mdd-sprunkies.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Miguel e Sprunkies';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
const primosespedradaLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: 360x450
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/primosespedrada/step1_hl.png' : 'img/primosespedrada/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/primosespedrada/step2_hl.png' : 'img/primosespedrada/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/primosespedrada/step3_hl.png' : 'img/primosespedrada/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/primosespedrada/step4_hl.png' : 'img/primosespedrada/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/primos-espedrada.jpg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Signature
  (g, a) => {
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Primos Espedrada';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

// ===== RENDER ENGINE =====
const drawingData = {
  miguelbebe: miguelbebeLayers,
  batizado: batizadoLayers,
  miguel: miguelLayers,
  matilde: matildeLayers,
  mdd: mddLayers,
  paisestudio: paisestudioLayers,
  casamento: casamentoLayers,
  pais: paisLayers,
  sandra: sandraLayers,
  paitio: paitioLayers,
  brunomiguel: brunomiguelLayers,
  padrinhos: padrinhosLayers,
  segundafamilia: segundafamiliaLayers,
  avoesduarte: avoesduarteLayers,
  avosdias: avosdiasLayers,
  bivo: bivoLayers,
  tioavo: tioavoLayers,
  avosmdd: avosmddLayers,
  diasfamily: diasfamilyLayers,
  dias66: dias66Layers,
  espedrada: espedradaLayers,
  espedradaprimos: espedradaprimosLayers,
  mddeamigos: mddeamigosLayers,
  mddsprunkies: mddsprunkiesLayers,
  primosespedrada: primosespedradaLayers
};

function renderDrawing(memberId, step) {
  _gid = 0;
  const layers = drawingData[memberId];
  if (!layers) return null;
  const isLand = LANDSCAPE_IDS.has(memberId);
  const vb = isLand ? VB_LANDSCAPE : VB;
  const cw = isLand ? 450 : 360;
  const ch = isLand ? 360 : 450;
  const svg = ce('svg', { viewBox: vb, width: '100%', height: '100%', xmlns: SVG_NS });
  svg.dataset.landscape = isLand ? '1' : '0';
  const defs = ce('defs', {});
  svg.appendChild(defs);
  svg.appendChild(ce('rect', { width: cw, height: ch, rx: 10, fill: '#FEFCF8', stroke: '#E8E0D4', 'stroke-width': 0.8 }));
  for (let y = 25; y < ch - 5; y += 14) svg.appendChild(ce('line', { x1: 12, y1: y, x2: cw - 12, y2: y, stroke: '#F2EDE6', 'stroke-width': 0.3 }));
  for (let i = 7; i <= step && i < layers.length; i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step, defs); svg.appendChild(grp); }
  for (let i = 0; i < Math.min(step + 1, 7, layers.length); i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step, defs); svg.appendChild(grp); }
  return svg;
}
