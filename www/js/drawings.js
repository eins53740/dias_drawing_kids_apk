// ===== FULL-SCENE PROGRESSIVE SVG DRAWING SYSTEM =====
const SVG_NS = 'http://www.w3.org/2000/svg';
const VB = '0 0 360 450';
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
  // TRACED APPROACH: Layers use PNG images auto-traced from the photo.
  // Each step reveals a spatial region of the traced drawing.
  // Layers 0-5: progressive outline regions (PNG overlays)
  // Layer 6: color reference
  // Layer 7: final polish (name text, eye highlights)
  // ================================================================

  // Layer 0: Construction guides — light proportional reference lines
  (g, a) => {
    // Vertical center
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Horizontal thirds
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Head oval guide
    pp(g, ['M 180 28 C 220 28 252 55 252 90 C 252 125 220 152 180 152 C 140 152 108 125 108 90 C 108 55 140 28 180 28 Z'], a, lt);
    // Eye line
    pp(g, ['M 120 93 L 240 93'], a, lt);
    // Torso guide
    pp(g, ['M 140 155 L 220 155 L 235 290 L 125 290 Z'], a, lt);
    // Right arm direction (UP toward head)
    pp(g, ['M 142 168 L 112 120 L 128 78'], a, lt);
    // Left arm direction (DOWN toward M)
    pp(g, ['M 218 168 L 240 218 L 208 258'], a, lt);
    // Leg directions
    pp(g, ['M 160 280 L 130 335 L 118 382'], a, lt);
    pp(g, ['M 200 280 L 232 335 L 248 382'], a, lt);
    // Blanket frame
    pp(g, ['M 20 10 L 340 10 L 340 440 L 20 440 Z'], a, lt);
  },

  // Layer 1: Head and face — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step1_hl.png' : 'img/miguelbebe/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Body, arms, and objects — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step2_hl.png' : 'img/miguelbebe/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Clothing texture detail — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step3_hl.png' : 'img/miguelbebe/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Legs and booties — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step4_hl.png' : 'img/miguelbebe/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Background (blanket, stripes, pompoms, frame) — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step5_hl.png' : 'img/miguelbebe/step5.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/miguel-bebe.jpeg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 7: Final polish — name text
  (g, a) => {
    // Baby name text
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
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    // Grid lines
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Frame
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step1_hl.png' : 'img/batizado/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step2_hl.png' : 'img/batizado/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step3_hl.png' : 'img/batizado/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/batizado/step4_hl.png' : 'img/batizado/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/batizado-miguel.jpg');
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
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    // Grid lines
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Frame
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step1_hl.png' : 'img/matilde/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step2_hl.png' : 'img/matilde/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step3_hl.png' : 'img/matilde/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/matilde/step4_hl.png' : 'img/matilde/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/matilde.jpg');
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
  // =====================================================================
  // Layer 0: Composition guides — Ricardo zone left, Sandra zone right,
  //          center vertical, head level, hand meeting level, feet level,
  //          perspective lines from below
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Ricardo zone (left)
    pp(g, ['M 30 20 L 30 430', 'M 210 20 L 210 430'], a, lt);
    // Sandra zone (right)
    pp(g, ['M 150 20 L 150 430', 'M 330 20 L 330 430'], a, lt);
    // Head level guide
    pp(g, ['M 0 70 L 360 70'], a, lt);
    // Shoulder level guide
    pp(g, ['M 0 130 L 360 130'], a, lt);
    // Hand meeting level at center
    pp(g, ['M 140 188 L 220 188'], a, lt);
    // Waist / hip level
    pp(g, ['M 0 260 L 360 260'], a, lt);
    // Feet level guide
    pp(g, ['M 0 420 L 360 420'], a, lt);
    // Perspective lines from below (vanishing point at ~180, 450)
    pp(g, ['M 180 450 L 60 0', 'M 180 450 L 300 0'], a, lt);
    pp(g, ['M 180 450 L 0 180', 'M 180 450 L 360 180'], a, lt);
    // Ricardo head circle guide
    pp(g, ['M 120 30 C 145 30 162 48 162 72 C 162 96 145 114 120 114 C 95 114 78 96 78 72 C 78 48 95 30 120 30 Z'], a, lt);
    // Sandra head circle guide
    pp(g, ['M 240 42 C 262 42 278 58 278 78 C 278 98 262 116 240 116 C 218 116 202 98 202 78 C 202 58 218 42 240 42 Z'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines full bodies — both figures in dynamic jump
  //          poses, shot from below looking up
  // =====================================================================
  (g, a) => {
    // === RICARDO (left, taller) ===
    // Head — slightly foreshortened from below angle
    pp(g, [
      'M 120 34 C 142 34 158 48 158 70 C 158 92 142 108 120 108 C 98 108 82 92 82 70 C 82 48 98 34 120 34 Z'
    ], a);
    // Neck — seen from below, shorter perspective
    pp(g, [
      'M 110 108 C 109 112 108 116 108 120',
      'M 130 108 C 131 112 132 116 132 120'
    ], a);
    // Torso — black t-shirt, wide from below perspective
    pp(g, [
      'M 108 120 C 96 124 78 134 68 148 C 60 160 58 176 58 196 L 62 268',
      'M 132 120 C 144 124 162 134 172 148 C 180 160 182 176 182 196 L 178 268'
    ], a);
    // Left arm — extended WIDE to the side
    pp(g, [
      'M 68 148 C 56 144 40 138 24 134 C 12 130 4 128 0 130'
    ], a);
    // Left arm underside
    pp(g, [
      'M 72 158 C 58 154 42 150 26 146 C 14 142 6 142 2 144'
    ], a);
    // Right arm — reaching to center, hand clasped with Sandra
    pp(g, [
      'M 172 148 C 180 152 186 162 188 174 C 190 182 190 186 188 190'
    ], a);
    // Right arm underside
    pp(g, [
      'M 168 158 C 176 162 180 170 182 180 C 184 186 182 190 180 194'
    ], a);
    // Left leg — spread in star-jump, foreshortened
    pp(g, [
      'M 68 268 C 62 288 50 314 40 340 C 34 358 30 378 28 396 C 26 410 28 420 32 430',
      'M 80 268 C 74 290 64 318 56 344 C 50 362 48 382 48 398 C 48 412 50 424 54 432'
    ], a);
    // Right leg — spread in star-jump
    pp(g, [
      'M 160 268 C 168 290 178 316 186 342 C 192 360 196 380 198 398 C 200 412 198 422 194 432',
      'M 172 268 C 178 288 188 312 196 336 C 202 354 206 374 208 392 C 210 408 210 420 208 430'
    ], a);

    // === SANDRA (right, shorter) ===
    // Head — slightly lower and smaller than Ricardo
    pp(g, [
      'M 240 44 C 260 44 274 56 274 76 C 274 96 260 110 240 110 C 220 110 206 96 206 76 C 206 56 220 44 240 44 Z'
    ], a);
    // Neck
    pp(g, [
      'M 232 110 C 231 114 230 118 230 122',
      'M 248 110 C 249 114 250 118 250 122'
    ], a);
    // Torso — black t-shirt
    pp(g, [
      'M 230 122 C 220 126 206 134 198 146 C 192 156 190 170 190 188 L 194 262',
      'M 250 122 C 260 126 274 134 282 146 C 288 156 290 170 290 188 L 286 262'
    ], a);
    // Left arm — reaching to center, clasped with Ricardo
    pp(g, [
      'M 198 146 C 196 152 194 164 192 176 C 190 184 190 188 192 192'
    ], a);
    // Left arm underside
    pp(g, [
      'M 202 156 C 200 162 198 172 196 182 C 194 188 194 192 196 196'
    ], a);
    // Right arm — raised HIGH in a V shape
    pp(g, [
      'M 282 146 C 296 136 310 118 320 96 C 326 82 330 68 332 56'
    ], a);
    // Right arm underside
    pp(g, [
      'M 278 156 C 290 146 302 130 312 110 C 318 96 322 82 324 70'
    ], a);
    // Left leg — spread jump
    pp(g, [
      'M 198 262 C 194 282 184 308 174 334 C 168 352 164 372 162 390 C 160 406 162 418 166 428',
      'M 210 262 C 206 284 198 312 192 338 C 186 356 184 376 184 392 C 184 408 186 420 188 428'
    ], a);
    // Right leg — spread jump
    pp(g, [
      'M 280 262 C 286 282 296 308 306 334 C 312 352 318 372 320 390 C 322 406 320 418 316 428',
      'M 290 262 C 294 280 302 304 310 328 C 316 346 320 366 322 384 C 324 400 324 416 322 426'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — sunglasses, noses, mouths, ears
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // Rectangular sunglasses — left lens
    pp(g, [
      'M 100 64 L 118 62 L 120 78 L 102 80 Z'
    ], a);
    // Right lens
    pp(g, [
      'M 122 62 L 140 64 L 138 80 L 120 78 Z'
    ], a);
    // Bridge
    pp(g, ['M 118 68 L 122 68'], a);
    // Sunglasses arms (temples) — going to ears
    pp(g, [
      'M 100 66 C 94 66 88 68 84 72',
      'M 140 66 C 146 66 152 68 156 72'
    ], a);
    // Nose — visible from below angle, wider nostril view
    pp(g, [
      'M 118 80 C 117 86 116 90 116 94',
      'M 112 96 C 114 100 118 102 122 102 C 126 100 128 98 130 96'
    ], a);
    // Nostrils hint (from below)
    pp(g, [
      'M 116 98 C 118 96 120 96 122 98',
      'M 124 98 C 126 96 128 96 130 98'
    ], a, lt);
    // Mouth — slight grin
    pp(g, [
      'M 110 106 C 114 104 118 102 122 102 C 126 102 130 104 134 106'
    ], a);
    // Lower lip hint
    pp(g, [
      'M 112 108 C 116 112 120 114 124 114 C 128 112 132 108 134 106'
    ], a);
    // Left ear
    pp(g, [
      'M 82 66 C 78 62 74 66 74 72 C 74 78 78 84 82 82'
    ], a);
    // Right ear
    pp(g, [
      'M 158 66 C 162 62 166 66 166 72 C 166 78 162 84 158 82'
    ], a);

    // === SANDRA ===
    // Rectangular sunglasses — left lens
    pp(g, [
      'M 222 72 L 238 70 L 240 84 L 224 86 Z'
    ], a);
    // Right lens
    pp(g, [
      'M 242 70 L 258 72 L 256 86 L 240 84 Z'
    ], a);
    // Bridge
    pp(g, ['M 238 76 L 242 76'], a);
    // Sunglasses arms
    pp(g, [
      'M 222 74 C 216 74 212 76 208 78',
      'M 258 74 C 264 74 268 76 272 78'
    ], a);
    // Nose
    pp(g, [
      'M 238 86 C 237 90 236 94 236 98',
      'M 234 100 C 236 104 240 106 244 104 C 246 102 248 100 248 98'
    ], a);
    // Wide radiant smile with teeth hints
    pp(g, [
      'M 226 108 C 230 104 236 102 240 102 C 244 102 250 104 254 108'
    ], a);
    // Lower lip — big open smile
    pp(g, [
      'M 226 108 C 230 116 236 120 240 120 C 244 120 250 116 254 108'
    ], a);
    // Upper teeth row hint
    pp(g, ['M 228 108 L 252 108'], a, lt);
    // Teeth divisions
    pp(g, [
      'M 234 108 L 234 112',
      'M 240 108 L 240 113',
      'M 246 108 L 246 112'
    ], a, lt);
    // Left ear
    pp(g, [
      'M 206 74 C 202 70 198 74 198 80 C 198 86 202 90 206 88'
    ], a);
    // Right ear
    pp(g, [
      'M 274 74 C 278 70 282 74 282 80 C 282 86 278 90 274 88'
    ], a);
  },

  // =====================================================================
  // Layer 3: Hair and accessories — Ricardo short dark hair, Sandra
  //          reddish-brown hair flying in wind
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // Short dark hair — from below angle, hairline visible
    pp(g, [
      'M 84 66 C 82 52 90 38 106 32 C 118 28 132 28 142 34 C 150 40 156 50 156 62'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 88 62 C 88 50 96 40 110 36 C 122 32 134 34 142 40 C 148 46 152 54 152 62'
    ], a);
    // Hair texture — short strands
    pp(g, [
      'M 100 34 C 108 30 118 30 126 34',
      'M 94 42 C 104 36 116 34 126 38',
      'M 90 52 C 100 46 112 44 122 48'
    ], a, lt);
    // Sunglasses arm detail on sides
    pp(g, [
      'M 100 66 C 96 66 90 68 86 72',
      'M 140 66 C 144 66 150 68 154 72'
    ], a, lt);

    // === SANDRA ===
    // Hair base — reddish-brown
    pp(g, [
      'M 208 74 C 206 58 214 44 228 38 C 240 34 254 36 262 42 C 270 50 274 60 274 74'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 212 70 C 212 56 220 46 232 42 C 244 38 256 40 264 48 C 270 54 272 64 270 72'
    ], a);
    // Hair flying RIGHT in the wind — multiple flowing strands
    pp(g, [
      'M 270 50 C 284 44 300 40 318 38 C 330 36 340 38 346 42',
      'M 272 58 C 288 52 306 48 322 46 C 334 44 342 48 348 54',
      'M 274 66 C 290 60 308 56 326 54 C 338 54 344 58 348 64',
      'M 272 74 C 286 70 302 68 316 68 C 328 68 336 72 340 78'
    ], a);
    // Hair strands flying LEFT (wind effect from the other side)
    pp(g, [
      'M 210 50 C 198 46 184 44 172 46 C 164 48 160 52 158 58',
      'M 208 60 C 196 56 184 54 174 56 C 168 58 164 62 162 68'
    ], a);
    // Hair wave texture
    pp(g, [
      'M 220 40 C 230 36 242 36 252 40',
      'M 216 50 C 228 44 242 42 254 46',
      'M 214 60 C 226 54 240 52 252 56'
    ], a, lt);
    // Sunglasses arms
    pp(g, [
      'M 222 74 C 218 74 214 76 210 78',
      'M 258 74 C 262 74 266 76 270 78'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — t-shirt collars, "300" text, jeans
  //          waistband, seams, belt loops, pocket arcs
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // T-shirt collar — crew neck
    pp(g, [
      'M 108 120 C 114 124 120 126 126 126 C 130 124 132 122 132 120'
    ], a);
    // T-shirt collar inner neckline
    pp(g, [
      'M 110 122 C 116 126 122 128 128 126 C 132 124 134 122 134 120'
    ], a, lt);
    // "300" text on chest — using text element
    const t300 = ce('text', {
      x: 98, y: 186,
      fill: a ? HL : P,
      'font-size': '22', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif',
      'letter-spacing': '2'
    });
    t300.textContent = '300';
    if (a) t300.classList.add('active-element');
    g.appendChild(t300);
    // Shirt hem at waist
    pp(g, [
      'M 62 266 C 80 270 100 272 120 272 C 140 272 160 270 178 266'
    ], a);
    // Shirt sleeve hems
    pp(g, [
      'M 66 152 C 60 150 54 148 48 148',
      'M 174 152 C 176 154 178 158 180 162'
    ], a, lt);
    // Pants center seam
    pp(g, ['M 120 268 L 120 290'], a, lt);
    // Left pant leg seam
    pp(g, ['M 56 300 C 52 318 46 340 40 358'], a, lt);
    // Right pant leg seam
    pp(g, ['M 168 300 C 174 320 180 342 186 360'], a, lt);

    // === SANDRA ===
    // T-shirt collar
    pp(g, [
      'M 230 122 C 234 126 238 128 242 128 C 246 126 248 124 250 122'
    ], a);
    // Inner neckline
    pp(g, [
      'M 232 124 C 236 128 240 130 244 128 C 248 126 250 124 252 122'
    ], a, lt);
    // Shirt hem
    pp(g, [
      'M 194 258 C 210 262 224 264 240 264 C 256 264 270 262 286 258'
    ], a);
    // Sleeve hems
    pp(g, [
      'M 200 150 C 198 154 196 160 194 166',
      'M 280 150 C 288 142 296 132 304 120'
    ], a, lt);
    // Jeans waistband — double lines
    pp(g, [
      'M 194 258 C 210 262 230 264 240 264 C 250 264 270 262 286 258',
      'M 196 262 C 212 266 232 268 240 268 C 248 268 268 266 284 262'
    ], a);
    // Belt loops
    pp(g, [
      'M 210 258 L 210 268',
      'M 228 260 L 228 270',
      'M 252 260 L 252 270',
      'M 270 258 L 270 268'
    ], a, lt);
    // Pocket arcs
    pp(g, [
      'M 202 268 C 206 276 214 282 222 280',
      'M 278 268 C 274 276 266 282 258 280'
    ], a);
    // Jeans center seam
    pp(g, ['M 240 264 L 240 290'], a, lt);
    // Pant leg seams
    pp(g, [
      'M 190 300 C 186 318 180 340 174 358',
      'M 296 300 C 302 320 308 340 312 358'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands clasped center + shoes — emotional focal point
  // =====================================================================
  (g, a) => {
    // === CLASPED HANDS at center (~x=180, y=188) ===
    // Ricardo's right hand — coming from left
    pp(g, [
      'M 188 186 C 186 180 182 176 178 174 C 174 172 170 174 170 178 C 170 182 174 186 178 188'
    ], a);
    // Ricardo's right thumb
    pp(g, [
      'M 186 182 C 190 178 192 172 190 168 C 188 164 184 164 182 168'
    ], a);
    // Ricardo's right fingers wrapping around
    pp(g, [
      'M 178 174 C 174 170 170 166 168 162 C 166 158 168 156 172 156 C 176 156 178 160 178 164',
      'M 176 176 C 172 172 168 168 166 164 C 164 160 166 158 170 158 C 174 158 176 162 176 166',
      'M 174 180 C 170 176 166 172 164 168 C 162 164 164 162 168 162'
    ], a);
    // Sandra's left hand — coming from right
    pp(g, [
      'M 192 190 C 194 184 198 180 202 178 C 206 176 210 178 210 182 C 210 186 206 190 202 192'
    ], a);
    // Sandra's left thumb
    pp(g, [
      'M 194 186 C 190 182 188 176 190 172 C 192 168 196 168 198 172'
    ], a);
    // Sandra's left fingers wrapping
    pp(g, [
      'M 202 178 C 206 174 210 170 212 166 C 214 162 212 160 208 160 C 204 160 202 164 202 168',
      'M 204 180 C 208 176 212 172 214 168 C 216 164 214 162 210 162 C 206 162 204 166 204 170',
      'M 206 184 C 210 180 214 176 216 172 C 218 168 216 166 212 166'
    ], a);
    // Interlocking finger bridge
    pp(g, [
      'M 172 164 C 176 160 180 158 184 160 C 188 162 192 160 196 158 C 200 156 204 158 208 162'
    ], a);
    // Wrist connections
    pp(g, [
      'M 188 190 C 186 196 184 200 182 204',
      'M 192 194 C 194 200 196 204 198 208'
    ], a, lt);

    // === RICARDO'S SHOES — Nike sneakers ===
    // Left shoe — gray/black Nike
    pp(g, [
      'M 24 428 C 20 424 16 430 12 436 C 8 442 12 448 20 450 C 28 452 40 450 48 446 C 52 444 54 440 52 436 C 50 432 44 430 38 430'
    ], a);
    // Left shoe sole line
    pp(g, ['M 14 444 C 22 448 34 448 46 444'], a, lt);
    // Left Nike swoosh
    pp(g, [
      'M 20 436 C 26 432 34 430 42 432 C 44 432 44 434 42 436'
    ], a);
    // Right shoe
    pp(g, [
      'M 198 428 C 202 424 208 428 212 434 C 216 440 212 446 204 448 C 196 450 184 448 178 444 C 174 442 172 438 174 434 C 176 430 182 428 188 428'
    ], a);
    // Right shoe sole line
    pp(g, ['M 210 442 C 202 446 190 446 180 442'], a, lt);
    // Right Nike swoosh
    pp(g, [
      'M 206 434 C 200 430 192 428 184 430 C 182 430 182 432 184 434'
    ], a);

    // === SANDRA'S SHOES — black flat shoes ===
    // Left shoe
    pp(g, [
      'M 162 426 C 158 422 152 424 148 428 C 144 434 148 440 156 442 C 164 444 174 442 180 438 C 184 436 184 432 182 428 C 180 424 174 422 168 424'
    ], a);
    // Right shoe
    pp(g, [
      'M 320 424 C 324 420 330 422 334 426 C 338 432 334 438 326 440 C 318 442 308 440 302 436 C 298 434 298 430 300 426 C 302 422 308 420 314 422'
    ], a);
    // Shoe detail lines
    pp(g, [
      'M 152 434 C 158 438 168 438 176 434',
      'M 328 432 C 322 436 312 436 304 432'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — sky gradient bands, frame edges, sun glow
  // =====================================================================
  (g, a) => {
    // Sky gradient horizontal bands — dark at top to lighter at bottom
    pp(g, [
      'M 0 0 L 360 0',
      'M 0 50 L 360 50',
      'M 0 100 L 360 100',
      'M 0 150 L 360 150',
      'M 0 200 L 360 200',
      'M 0 250 L 360 250',
      'M 0 300 L 360 300',
      'M 0 350 L 360 350',
      'M 0 400 L 360 400',
      'M 0 450 L 360 450'
    ], a, lt);
    // Frame edges
    pp(g, [
      'M 0 0 L 360 0 L 360 450 L 0 450 Z'
    ], a, lt);
    // Sun glow hint at bottom center — radial lines
    pp(g, [
      'M 180 450 C 170 430 160 410 155 400',
      'M 180 450 C 190 430 200 410 205 400',
      'M 180 450 C 150 420 130 400 120 390',
      'M 180 450 C 210 420 230 400 240 390'
    ], a, lt);
    // Diagonal perspective emphasis lines
    pp(g, [
      'M 0 450 C 40 420 80 390 120 370',
      'M 360 450 C 320 420 280 390 240 370'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills FIGURES — skin, hair, clothing, sunglasses
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // Face skin fill
    fl(g,
      'M 120 36 C 140 36 156 50 156 70 C 156 90 140 106 120 106 C 100 106 84 90 84 70 C 84 50 100 36 120 36 Z',
      '#F5D0A9', a);
    // Neck skin
    fe(g, 'rect', { x: 109, y: 106, width: 22, height: 14, rx: 4, fill: '#EDBE8C' }, false);
    // Ears skin
    fe(g, 'ellipse', { cx: 78, cy: 72, rx: 5, ry: 9, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 162, cy: 72, rx: 5, ry: 9, fill: '#EDBE8C' }, false);
    // Hair fill — dark brown
    fl(g,
      'M 86 64 C 84 50 92 38 108 32 C 120 28 134 28 144 34 C 152 42 156 52 156 62 L 152 60 C 150 52 146 44 140 38 C 132 32 120 32 110 36 C 98 42 90 50 88 60 Z',
      '#5D4037', a);
    // Sunglasses fill — black lenses
    fl(g, 'M 100 64 L 118 62 L 120 78 L 102 80 Z', '#212121', false);
    fl(g, 'M 122 62 L 140 64 L 138 80 L 120 78 Z', '#212121', false);
    // Black t-shirt fill
    fl(g,
      'M 108 120 C 96 124 78 134 68 148 C 60 160 58 176 58 196 L 62 268 L 178 268 L 182 196 C 182 176 180 160 172 148 C 162 134 144 124 132 120 Z',
      '#212121', a);
    // Left arm skin — extended wide
    fl(g,
      'M 68 148 C 56 144 40 138 24 134 L 2 144 C 6 142 14 142 26 146 C 42 150 58 154 72 158 Z',
      '#F5D0A9', false);
    // Right arm skin — reaching to center
    fl(g,
      'M 172 148 C 180 152 186 162 188 174 L 182 180 C 180 170 176 162 168 158 Z',
      '#F5D0A9', false);
    // Black pants fill
    fl(g,
      'M 62 268 C 56 288 44 314 34 340 C 28 358 26 396 28 420 L 54 432 C 50 412 48 382 56 344 C 64 318 74 290 80 268 Z',
      '#212121', false);
    fl(g,
      'M 160 268 C 168 290 178 316 186 342 C 196 372 200 402 194 432 L 208 430 C 210 408 208 372 196 336 C 188 312 178 288 172 268 Z',
      '#212121', false);

    // === SANDRA ===
    // Face skin fill
    fl(g,
      'M 240 46 C 258 46 272 58 272 76 C 272 94 258 108 240 108 C 222 108 208 94 208 76 C 208 58 222 46 240 46 Z',
      '#FADCC2', a);
    // Neck skin
    fe(g, 'rect', { x: 231, y: 108, width: 18, height: 14, rx: 4, fill: '#F0C8A8' }, false);
    // Ears skin
    fe(g, 'ellipse', { cx: 202, cy: 80, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 278, cy: 80, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    // Hair fill — reddish-brown
    fl(g,
      'M 210 72 C 208 58 216 44 230 38 C 242 34 256 36 264 42 C 272 50 274 62 274 74 L 270 72 C 268 62 264 52 258 46 C 250 40 240 38 232 42 C 222 48 216 58 214 68 Z',
      '#8D6E63', a);
    // Windblown hair fills — right flowing strands
    fl(g,
      'M 270 50 C 284 44 300 40 318 38 C 330 36 340 38 346 42 L 348 54 C 342 48 334 44 322 46 C 306 48 288 52 272 58 Z',
      '#8D6E63', false);
    fl(g,
      'M 274 66 C 290 60 308 56 326 54 C 338 54 344 58 348 64 L 340 78 C 336 72 328 68 316 68 C 302 68 286 70 272 74 Z',
      '#7B5B4F', false);
    // Windblown hair fills — left
    fl(g,
      'M 210 50 C 198 46 184 44 172 46 C 164 48 160 52 158 58 L 162 68 C 164 62 168 58 174 56 C 184 54 196 56 208 60 Z',
      '#8D6E63', false);
    // Sunglasses fill — black
    fl(g, 'M 222 72 L 238 70 L 240 84 L 224 86 Z', '#212121', false);
    fl(g, 'M 242 70 L 258 72 L 256 86 L 240 84 Z', '#212121', false);
    // Black t-shirt fill
    fl(g,
      'M 230 122 C 220 126 206 134 198 146 C 192 156 190 170 190 188 L 194 262 L 286 262 L 290 188 C 290 170 288 156 282 146 C 274 134 260 126 250 122 Z',
      '#212121', a);
    // Left arm skin — reaching to center
    fl(g,
      'M 198 146 C 196 152 194 164 192 176 L 196 182 C 198 172 200 162 202 156 Z',
      '#FADCC2', false);
    // Right arm skin — raised high in V
    fl(g,
      'M 282 146 C 296 136 310 118 320 96 C 326 82 330 68 332 56 L 324 70 C 322 82 318 96 312 110 C 302 130 290 146 278 156 Z',
      '#FADCC2', false);
    // Blue jeans fill
    fl(g,
      'M 194 258 C 190 278 180 308 170 338 C 164 356 162 390 166 428 L 188 428 C 184 408 184 376 192 338 C 198 312 206 284 210 262 Z',
      '#5C6BC0', a);
    fl(g,
      'M 280 258 C 286 278 296 308 306 334 C 316 362 322 396 316 428 L 322 426 C 324 400 320 366 310 328 C 302 304 294 280 290 262 Z',
      '#5C6BC0', false);
  },

  // =====================================================================
  // Layer 8: Color fills SCENE — sky gradient, shoes, hand skin fills
  // =====================================================================
  (g, a) => {
    // Sky gradient bands — dark top (#1565C0) to light bottom (#64B5F6)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 56, fill: '#1565C0' }, a);
    fe(g, 'rect', { x: 0, y: 56, width: 360, height: 56, fill: '#1976D2' }, false);
    fe(g, 'rect', { x: 0, y: 112, width: 360, height: 56, fill: '#1E88E5' }, false);
    fe(g, 'rect', { x: 0, y: 168, width: 360, height: 56, fill: '#2196F3' }, false);
    fe(g, 'rect', { x: 0, y: 224, width: 360, height: 56, fill: '#42A5F5' }, false);
    fe(g, 'rect', { x: 0, y: 280, width: 360, height: 56, fill: '#64B5F6' }, false);
    fe(g, 'rect', { x: 0, y: 336, width: 360, height: 56, fill: '#90CAF9' }, false);
    fe(g, 'rect', { x: 0, y: 392, width: 360, height: 58, fill: '#BBDEFB' }, false);
    // Light bloom / sun glow at bottom center
    fe(g, 'ellipse', { cx: 180, cy: 450, rx: 140, ry: 60, fill: '#90CAF9', opacity: '0.5' }, false);
    fe(g, 'ellipse', { cx: 180, cy: 450, rx: 80, ry: 35, fill: '#E3F2FD', opacity: '0.4' }, false);

    // === RICARDO'S SHOES — gray with blue swoosh ===
    // Left shoe fill
    fl(g,
      'M 24 428 C 20 424 16 430 12 436 C 8 442 12 448 20 450 C 28 452 40 450 48 446 C 52 444 54 440 52 436 C 50 432 44 430 38 430 Z',
      '#616161', a);
    // Left shoe sole
    fl(g,
      'M 14 444 C 22 448 34 448 46 444 L 48 446 C 38 450 24 452 14 448 Z',
      '#424242', false);
    // Left blue swoosh fill
    fl(g,
      'M 20 436 C 26 432 34 430 42 432 C 44 432 44 434 42 436 C 34 434 26 436 20 440 Z',
      '#1E88E5', false);
    // Right shoe fill
    fl(g,
      'M 198 428 C 202 424 208 428 212 434 C 216 440 212 446 204 448 C 196 450 184 448 178 444 C 174 442 172 438 174 434 C 176 430 182 428 188 428 Z',
      '#616161', false);
    // Right shoe sole
    fl(g,
      'M 210 442 C 202 446 190 446 180 442 L 178 444 C 188 448 202 450 212 446 Z',
      '#424242', false);
    // Right blue swoosh fill
    fl(g,
      'M 206 434 C 200 430 192 428 184 430 C 182 430 182 432 184 434 C 192 432 200 434 206 438 Z',
      '#1E88E5', false);

    // === SANDRA'S SHOES — black flat ===
    fl(g,
      'M 162 426 C 158 422 152 424 148 428 C 144 434 148 440 156 442 C 164 444 174 442 180 438 C 184 436 184 432 182 428 C 180 424 174 422 168 424 Z',
      '#212121', a);
    fl(g,
      'M 320 424 C 324 420 330 422 334 426 C 338 432 334 438 326 440 C 318 442 308 440 302 436 C 298 434 298 430 300 426 C 302 422 308 420 314 422 Z',
      '#212121', false);

    // === HAND SKIN FILLS at center ===
    // Ricardo's right hand skin
    fl(g,
      'M 178 174 C 174 172 170 174 170 178 C 170 182 174 186 178 188 L 188 186 C 186 180 182 176 178 174 Z',
      '#F5D0A9', false);
    // Sandra's left hand skin
    fl(g,
      'M 202 178 C 206 176 210 178 210 182 C 210 186 206 190 202 192 L 192 190 C 194 184 198 180 202 178 Z',
      '#FADCC2', false);
  },

  // =====================================================================
  // Layer 9: Polish — "300" text fill, Sandra smile, cheeks, sunglasses
  //          shine, cloth folds, hair wind detail, shoe treads, finger
  //          lines, Sandra raised hand
  // =====================================================================
  (g, a) => {
    // "300" text fill on Ricardo's shirt
    const t300f = ce('text', {
      x: 100, y: 184,
      fill: '#9E9E9E',
      'font-size': '20', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif',
      'letter-spacing': '2'
    });
    t300f.textContent = '300';
    if (a) t300f.classList.add('active-element');
    g.appendChild(t300f);

    // Sandra smile fill — teeth and lips
    fl(g,
      'M 228 108 C 232 114 236 118 240 118 C 244 118 248 114 252 108 L 248 108 C 246 112 244 116 240 116 C 236 116 234 112 232 108 Z',
      '#E57373', false);
    // Teeth fill
    fe(g, 'rect', { x: 229, y: 108, width: 22, height: 5, rx: 1, fill: '#FFFFFF', opacity: '0.85' }, false);

    // Ricardo mouth fill
    fl(g,
      'M 112 108 C 116 112 120 114 124 114 C 128 112 132 108 134 106 L 130 106 C 128 110 126 112 122 112 C 118 112 116 110 114 106 Z',
      '#C9756B', false);

    // Sandra cheek blush
    fe(g, 'ellipse', { cx: 222, cy: 98, rx: 8, ry: 4, fill: '#F48FB1', opacity: '0.25' }, a);
    fe(g, 'ellipse', { cx: 258, cy: 98, rx: 8, ry: 4, fill: '#F48FB1', opacity: '0.25' }, a);

    // Sunglasses shine reflections — white highlights
    // Ricardo left lens
    fe(g, 'ellipse', { cx: 106, cy: 68, rx: 3, ry: 2, fill: 'white', opacity: '0.35' }, a);
    // Ricardo right lens
    fe(g, 'ellipse', { cx: 128, cy: 68, rx: 3, ry: 2, fill: 'white', opacity: '0.35' }, false);
    // Sandra left lens
    fe(g, 'ellipse', { cx: 228, cy: 76, rx: 3, ry: 2, fill: 'white', opacity: '0.35' }, false);
    // Sandra right lens
    fe(g, 'ellipse', { cx: 248, cy: 76, rx: 3, ry: 2, fill: 'white', opacity: '0.35' }, false);

    // Cloth fold lines on Ricardo's t-shirt
    pp(g, [
      'M 80 160 C 84 172 86 184 84 196',
      'M 152 162 C 156 174 158 186 156 198',
      'M 100 200 C 104 210 106 220 104 232',
      'M 138 202 C 142 212 144 222 142 234'
    ], a, lt);
    // Cloth fold lines on Sandra's t-shirt
    pp(g, [
      'M 210 150 C 212 162 214 174 212 186',
      'M 268 152 C 272 164 274 176 272 188',
      'M 224 192 C 226 202 228 212 226 222',
      'M 256 194 C 260 204 262 214 260 224'
    ], a, lt);

    // Jeans fold lines
    pp(g, [
      'M 200 280 C 196 296 190 312 184 328',
      'M 290 278 C 294 294 300 310 306 326',
      'M 206 300 C 202 316 196 332 192 346',
      'M 284 298 C 288 314 294 330 300 344'
    ], a, lt);

    // Hair wind detail strands — extra wisps for Sandra
    pp(g, [
      'M 268 54 C 280 48 296 44 312 42',
      'M 274 62 C 286 56 300 52 316 50',
      'M 270 70 C 282 66 296 64 310 62',
      'M 212 54 C 200 50 188 48 178 50',
      'M 210 64 C 198 60 188 58 180 60'
    ], a, lt);

    // Shoe sole treads — Ricardo
    pp(g, [
      'M 18 446 C 22 448 28 448 34 446',
      'M 24 448 C 28 450 34 450 40 448',
      'M 184 444 C 188 446 194 446 200 444',
      'M 180 446 C 186 448 192 448 198 446'
    ], a, lt);

    // Finger lines at clasp — detail crosshatching
    pp(g, [
      'M 174 168 C 178 164 182 162 186 164',
      'M 196 162 C 200 160 204 162 208 166',
      'M 176 172 C 180 168 184 166 188 168',
      'M 194 166 C 198 164 202 166 206 170'
    ], a, lt);

    // Sandra's raised right hand at top — fingers spread in V
    // Hand
    fl(g,
      'M 328 56 C 332 52 336 50 338 54 C 340 58 336 64 332 66 C 328 68 324 66 324 62 Z',
      '#FADCC2', a);
    // Fingers spread
    pp(g, [
      'M 332 54 C 334 48 336 42 334 36 C 332 32 328 32 328 36',
      'M 336 52 C 340 46 342 38 340 32 C 338 28 334 28 334 32',
      'M 338 56 C 342 50 346 44 344 38 C 342 34 338 34 338 38',
      'M 338 60 C 344 58 348 54 348 48 C 348 44 344 44 342 48',
      'M 330 56 C 326 50 322 46 324 42 C 326 38 330 40 330 44'
    ], a);
    // Finger skin fills for raised hand
    fl(g,
      'M 332 54 C 334 48 336 42 334 36 C 332 32 328 32 328 36 C 328 42 330 48 332 54 Z',
      '#FADCC2', false);
    fl(g,
      'M 336 52 C 340 46 342 38 340 32 C 338 28 334 28 334 32 C 334 38 334 46 336 52 Z',
      '#FADCC2', false);
    fl(g,
      'M 338 56 C 342 50 346 44 344 38 C 342 34 338 34 338 38 C 338 44 338 50 338 56 Z',
      '#FADCC2', false);

    // Subtle light bloom overlay at bottom
    fe(g, 'ellipse', { cx: 180, cy: 450, rx: 100, ry: 30, fill: '#E3F2FD', opacity: '0.15' }, false);
  }
];

const sandraLayers = [
  // Layer 0: Guides — table edge, checkered grid, Sandra center zone
  (g, a) => {
    // Table edge
    pp(g, ['M 0 250 L 360 250'], a, lt);
    // Vertical grid guides for checkered pattern
    for (let x = 0; x <= 360; x += 45) {
      pp(g, [`M ${x} 250 L ${x} 450`], a, lt);
    }
    // Horizontal grid guides
    for (let y = 250; y <= 450; y += 33) {
      pp(g, [`M 0 ${y} L 360 ${y}`], a, lt);
    }
    // Sandra center zone
    pp(g, ['M 110 10 L 110 250', 'M 250 10 L 250 250'], a, lt);
    // Head circle guide
    pp(g, ['M 180 40 C 210 40 230 60 230 90 C 230 120 210 140 180 140 C 150 140 130 120 130 90 C 130 60 150 40 180 40 Z'], a, lt);
    // Shoulder guide
    pp(g, ['M 110 170 L 250 170'], a, lt);
  },

  // Layer 1: Body — head oval, neck, shoulders, upper body behind table, arms
  (g, a) => {
    // Head — elegant oval, slightly narrower chin
    pp(g, [
      'M 180 42 C 155 42 140 58 138 78 C 136 98 140 114 148 126 C 156 138 166 146 180 148 C 194 146 204 138 212 126 C 220 114 224 98 222 78 C 220 58 205 42 180 42 Z'
    ], a);
    // Neck — slim, slightly tilted forward (looking down)
    pp(g, [
      'M 170 146 C 169 150 168 156 168 162',
      'M 190 146 C 191 150 192 156 192 162'
    ], a);
    // Shoulders and upper body
    pp(g, [
      'M 168 162 C 158 164 140 170 124 180 C 112 188 106 196 104 210 L 100 250',
      'M 192 162 C 202 164 220 170 236 180 C 248 188 254 196 256 210 L 260 250'
    ], a);
    // Left upper arm
    pp(g, [
      'M 124 180 C 116 192 108 210 102 230 C 98 242 96 248 96 250'
    ], a);
    // Right upper arm
    pp(g, [
      'M 236 180 C 244 192 252 210 258 230 C 262 242 264 248 264 250'
    ], a);
    // Ears (partially visible behind hair)
    pp(g, [
      'M 138 82 C 134 78 131 82 130 88 C 129 94 132 100 136 98',
      'M 222 82 C 226 78 229 82 230 88 C 231 94 228 100 224 98'
    ], a);
  },

  // Layer 2: Face — eyes looking DOWN, eyelashes, eyebrows, nose, smile
  (g, a) => {
    // Left eye — almond shape, half-closed lid, looking down
    pp(g, [
      'M 160 86 C 162 82 168 79 174 80 C 180 81 184 84 184 88 C 184 92 180 96 174 96 C 168 96 162 92 160 86 Z'
    ], a);
    // Left upper eyelid (heavy, covering top of iris — looking down)
    pp(g, [
      'M 160 86 C 164 84 170 82 176 83 C 182 84 184 86 184 88'
    ], a);
    // Right eye — almond shape, half-closed lid
    pp(g, [
      'M 188 86 C 190 82 196 79 202 80 C 208 81 212 84 212 88 C 212 92 208 96 202 96 C 196 96 190 92 188 86 Z'
    ], a);
    // Right upper eyelid
    pp(g, [
      'M 188 86 C 192 84 198 82 204 83 C 210 84 212 86 212 88'
    ], a);
    // Left pupil (positioned low — looking down)
    fe(g, 'ellipse', { cx: 172, cy: 91, rx: 3.5, ry: 3, fill: a ? HL : '#5E4023' }, a);
    // Right pupil (positioned low)
    fe(g, 'ellipse', { cx: 200, cy: 91, rx: 3.5, ry: 3, fill: a ? HL : '#5E4023' }, a);
    // Left eyelashes (upper)
    pp(g, [
      'M 160 85 C 158 82 157 79 158 76',
      'M 164 83 C 162 80 162 77 163 74',
      'M 168 82 C 167 79 168 76 170 74'
    ], a);
    // Right eyelashes (upper)
    pp(g, [
      'M 212 85 C 214 82 215 79 214 76',
      'M 208 83 C 210 80 210 77 209 74',
      'M 204 82 C 205 79 204 76 202 74'
    ], a);
    // Lower lash hints
    pp(g, [
      'M 166 95 C 164 97 162 98 160 98',
      'M 206 95 C 208 97 210 98 212 98'
    ], a, lt);
    // Left eyebrow — arched, elegant
    pp(g, [
      'M 156 74 C 160 68 168 65 176 66 C 180 67 184 70 186 74'
    ], a);
    // Right eyebrow — arched
    pp(g, [
      'M 186 74 C 190 68 198 65 206 66 C 210 67 214 70 216 74'
    ], a);
    // Nose bridge
    pp(g, [
      'M 180 78 C 179 84 178 92 176 100 C 175 104 174 108 173 110'
    ], a);
    // Nose tip and nostrils
    pp(g, [
      'M 170 112 C 172 116 176 118 180 118 C 184 116 186 114 188 112',
      'M 173 114 C 174 112 176 112 178 114',
      'M 182 114 C 184 112 186 112 187 114'
    ], a);
    // Gentle concentrated smile — lips together, slight upturn
    pp(g, [
      'M 166 128 C 170 124 174 122 180 122 C 186 122 190 124 194 128'
    ], a);
    // Lower lip
    pp(g, [
      'M 166 128 C 170 134 176 137 180 137 C 184 137 190 134 194 128'
    ], a);
    // Upper lip cupid's bow
    pp(g, [
      'M 166 128 C 170 126 174 124 177 126 C 179 128 181 128 183 126 C 186 124 190 126 194 128'
    ], a);
  },

  // Layer 3: Hair — wavy volume, ponytail, hair elastic, loose strands, wave texture
  (g, a) => {
    // Main hair mass — volume on top and sides
    pp(g, [
      'M 148 84 C 144 62 152 42 168 32 C 176 28 186 26 196 28 C 210 32 222 44 226 62 C 228 72 228 82 226 90'
    ], a);
    // Hair left side volume
    pp(g, [
      'M 148 84 C 146 74 148 62 154 50 C 160 40 168 34 176 30'
    ], a);
    // Hair right side into ponytail
    pp(g, [
      'M 226 90 C 228 82 230 72 234 64 C 238 56 242 52 246 52'
    ], a);
    // Ponytail — going back and down with volume
    pp(g, [
      'M 224 50 C 234 44 246 46 252 54 C 258 64 260 78 260 94 C 260 110 256 124 250 134 C 246 140 242 144 238 146'
    ], a);
    // Ponytail underside
    pp(g, [
      'M 222 56 C 230 52 240 54 244 60 C 250 70 252 84 252 100 C 252 114 248 128 242 138'
    ], a);
    // Hair elastic / band
    pp(g, [
      'M 220 48 C 224 44 230 42 234 44 C 238 46 240 50 238 54 C 236 58 230 58 226 56 C 222 54 220 52 220 48 Z'
    ], a);
    // Loose strands framing left side of face
    pp(g, [
      'M 150 78 C 148 88 146 100 148 114 C 150 126 152 136 156 144',
      'M 146 82 C 142 94 140 108 142 122 C 144 132 148 140 152 146'
    ], a);
    // Loose strands right side
    pp(g, [
      'M 224 80 C 226 90 228 102 226 116 C 224 126 222 134 220 140'
    ], a);
    // Wave texture lines through hair
    pp(g, [
      'M 158 38 C 166 32 178 28 190 30',
      'M 154 50 C 162 42 174 38 186 40 C 198 42 208 48 216 56',
      'M 152 64 C 160 56 172 50 184 52 C 196 54 206 60 214 68',
      'M 240 56 C 246 62 250 72 252 84',
      'M 244 68 C 248 76 250 86 250 98'
    ], a, lt);
    // Part line
    pp(g, [
      'M 176 28 C 178 34 180 42 182 52'
    ], a, lt);
  },

  // Layer 4: Clothing — pink cardigan open, black t-shirt, cursive text hint, folds
  (g, a) => {
    // Cardigan outer shoulders (over body silhouette)
    pp(g, [
      'M 118 178 C 128 168 148 162 168 162',
      'M 242 178 C 232 168 212 162 192 162'
    ], a);
    // Cardigan opening — V-shape down center
    pp(g, [
      'M 164 166 C 162 176 160 190 158 206 C 156 220 154 236 152 250',
      'M 196 166 C 198 176 200 190 202 206 C 204 220 206 236 208 250'
    ], a);
    // Left collar / lapel
    pp(g, [
      'M 164 166 C 160 162 154 160 150 164 C 146 168 146 174 150 178 C 154 182 158 180 160 176'
    ], a);
    // Right collar / lapel
    pp(g, [
      'M 196 166 C 200 162 206 160 210 164 C 214 168 214 174 210 178 C 206 182 202 180 200 176'
    ], a);
    // Black t-shirt V-neck visible beneath cardigan
    pp(g, [
      'M 162 170 C 168 178 174 196 180 220',
      'M 198 170 C 192 178 186 196 180 220'
    ], a);
    // T-shirt neckline
    pp(g, [
      'M 162 170 C 168 168 174 166 180 166 C 186 166 192 168 198 170'
    ], a);
    // Cardigan fold lines (left side)
    pp(g, [
      'M 126 186 C 124 200 122 218 120 238 C 118 244 116 248 114 250',
      'M 140 182 C 138 196 136 212 134 228'
    ], a, lt);
    // Cardigan fold lines (right side)
    pp(g, [
      'M 234 186 C 236 200 238 218 240 238 C 242 244 244 248 246 250',
      'M 220 182 C 222 196 224 212 226 228'
    ], a, lt);
    // Elbow fold lines
    pp(g, [
      'M 108 218 C 112 224 116 228 120 230',
      'M 252 218 C 248 224 244 228 240 230'
    ], a, lt);
    // Cursive text hint on black t-shirt
    pp(g, [
      'M 170 198 C 172 194 176 196 178 192 C 180 194 184 192 186 196 C 188 194 190 196 192 194'
    ], a, lt);
  },

  // Layer 5: Hands holding fanned domino pieces — fingers, domino rectangles with dots
  (g, a) => {
    // === LEFT HAND ===
    // Wrist
    pp(g, ['M 102 238 C 100 242 96 244 92 244'], a);
    // Palm
    pp(g, ['M 92 244 C 86 244 82 240 80 236 C 78 232 80 228 84 226 C 88 224 92 226 96 230 C 98 234 100 238 102 238'], a);
    // Left thumb
    pp(g, ['M 96 230 C 100 226 102 220 100 216 C 98 212 94 212 92 216'], a);
    // Left index finger
    pp(g, ['M 84 226 C 80 220 76 214 74 208 C 72 204 74 200 78 200 C 82 200 84 204 84 208'], a);
    // Left middle finger
    pp(g, ['M 82 228 C 76 222 72 214 70 206 C 68 200 70 196 74 196 C 78 196 80 200 80 206'], a);
    // Left ring finger
    pp(g, ['M 80 232 C 74 226 70 218 68 210 C 66 204 68 200 72 200 C 76 200 78 204 78 210'], a);
    // Left pinky finger
    pp(g, ['M 80 236 C 76 232 72 224 70 218 C 68 214 70 210 74 212 C 76 214 78 218 78 222'], a);

    // Domino fan in left hand (3 dominoes fanned out)
    // Domino 1 (leftmost, tilted left)
    const ld1 = ce('g', { transform: 'rotate(-25 72 196)' });
    const lr1 = ce('rect', { x: 64, y: 182, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr1, a); ld1.appendChild(lr1);
    const ll1 = ce('line', { x1: 64, y1: 196, x2: 80, y2: 196, stroke: 'none' });
    lt(ll1, a); ld1.appendChild(ll1);
    fe(ld1, 'circle', { cx: 72, cy: 189, r: 1.2, fill: a ? HL : P }, false);
    fe(ld1, 'circle', { cx: 72, cy: 202, r: 1.2, fill: a ? HL : P }, false);
    fe(ld1, 'circle', { cx: 68, cy: 205, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld1);

    // Domino 2 (center, nearly vertical)
    const ld2 = ce('g', { transform: 'rotate(-8 80 194)' });
    const lr2 = ce('rect', { x: 72, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr2, a); ld2.appendChild(lr2);
    const ll2 = ce('line', { x1: 72, y1: 194, x2: 88, y2: 194, stroke: 'none' });
    lt(ll2, a); ld2.appendChild(ll2);
    fe(ld2, 'circle', { cx: 78, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld2, 'circle', { cx: 82, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld2, 'circle', { cx: 80, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld2);

    // Domino 3 (rightmost in left hand, tilted right)
    const ld3 = ce('g', { transform: 'rotate(10 88 194)' });
    const lr3 = ce('rect', { x: 80, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr3, a); ld3.appendChild(lr3);
    const ll3 = ce('line', { x1: 80, y1: 194, x2: 96, y2: 194, stroke: 'none' });
    lt(ll3, a); ld3.appendChild(ll3);
    fe(ld3, 'circle', { cx: 86, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 90, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 88, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 84, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld3);

    // === RIGHT HAND ===
    // Wrist
    pp(g, ['M 258 238 C 260 242 264 244 268 244'], a);
    // Palm
    pp(g, ['M 268 244 C 274 244 278 240 280 236 C 282 232 280 228 276 226 C 272 224 268 226 264 230 C 262 234 260 238 258 238'], a);
    // Right thumb
    pp(g, ['M 264 230 C 260 226 258 220 260 216 C 262 212 266 212 268 216'], a);
    // Right index finger
    pp(g, ['M 276 226 C 280 220 284 214 286 208 C 288 204 286 200 282 200 C 278 200 276 204 276 208'], a);
    // Right middle finger
    pp(g, ['M 278 228 C 284 222 288 214 290 206 C 292 200 290 196 286 196 C 282 196 280 200 280 206'], a);
    // Right ring finger
    pp(g, ['M 280 232 C 286 226 290 218 292 210 C 294 204 292 200 288 200 C 284 200 282 204 282 210'], a);
    // Right pinky finger
    pp(g, ['M 280 236 C 284 232 288 224 290 218 C 292 214 290 210 286 212 C 284 214 282 218 282 222'], a);

    // Domino fan in right hand (3 dominoes)
    // Domino 4 (leftmost in right hand)
    const rd1 = ce('g', { transform: 'rotate(-10 272 194)' });
    const rr1 = ce('rect', { x: 264, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr1, a); rd1.appendChild(rr1);
    const rl1 = ce('line', { x1: 264, y1: 194, x2: 280, y2: 194, stroke: 'none' });
    lt(rl1, a); rd1.appendChild(rl1);
    fe(rd1, 'circle', { cx: 270, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(rd1, 'circle', { cx: 274, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(rd1, 'circle', { cx: 272, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd1);

    // Domino 5 (center)
    const rd2 = ce('g', { transform: 'rotate(8 280 194)' });
    const rr2 = ce('rect', { x: 272, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr2, a); rd2.appendChild(rr2);
    const rl2 = ce('line', { x1: 272, y1: 194, x2: 288, y2: 194, stroke: 'none' });
    lt(rl2, a); rd2.appendChild(rl2);
    fe(rd2, 'circle', { cx: 280, cy: 187, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 280, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 276, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 284, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd2);

    // Domino 6 (rightmost, tilted right)
    const rd3 = ce('g', { transform: 'rotate(25 288 196)' });
    const rr3 = ce('rect', { x: 280, y: 182, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr3, a); rd3.appendChild(rr3);
    const rl3 = ce('line', { x1: 280, y1: 196, x2: 296, y2: 196, stroke: 'none' });
    lt(rl3, a); rd3.appendChild(rl3);
    fe(rd3, 'circle', { cx: 288, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 284, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 292, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 288, cy: 204, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd3);
  },

  // Layer 6: Table objects — played domino chain, phone, TV remote, napkin
  (g, a) => {
    // Played domino chain across table surface (7 dominoes, slightly rotated)
    const dominoes = [
      { x: 100, y: 268, r: -8 },
      { x: 120, y: 272, r: 3 },
      { x: 140, y: 269, r: 85 },
      { x: 156, y: 272, r: -4 },
      { x: 176, y: 268, r: 90 },
      { x: 196, y: 270, r: 6 },
      { x: 216, y: 274, r: -3 }
    ];
    dominoes.forEach(({ x, y, r }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      const rect = ce('rect', { x, y, width: 16, height: 12, rx: 1.5, fill: 'none' });
      sk(rect, a);
      dg.appendChild(rect);
      const line = ce('line', { x1: x + 8, y1: y, x2: x + 8, y2: y + 12 });
      lt(line, a);
      dg.appendChild(line);
      g.appendChild(dg);
    });

    // Phone — face-down rectangle (gold/rose back)
    pp(g, [
      'M 278 286 L 312 286 L 312 310 L 278 310 Z',
      'M 280 288 L 310 288 L 310 308 L 280 308 Z'
    ], a);
    // Phone camera bump
    fe(g, 'circle', { cx: 284, cy: 292, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);

    // TV remote — dark rectangular
    pp(g, [
      'M 322 276 L 340 276 L 340 322 L 322 322 Z'
    ], a);
    // Remote buttons
    pp(g, [
      'M 328 284 L 334 284',
      'M 328 290 L 334 290',
      'M 328 296 L 334 296'
    ], a, lt);
    // Remote power button
    fe(g, 'circle', { cx: 331, cy: 280, r: 2, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // Remote d-pad
    pp(g, [
      'M 328 304 L 334 304',
      'M 331 301 L 331 307'
    ], a, lt);
    // Remote bottom buttons
    fe(g, 'circle', { cx: 328, cy: 314, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    fe(g, 'circle', { cx: 334, cy: 314, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);

    // White napkin / tissue — crumpled rectangle
    pp(g, [
      'M 50 284 C 52 282 58 280 66 282 C 74 284 78 286 80 290 C 82 294 78 298 72 300 C 66 302 58 300 52 298 C 48 296 48 290 50 284 Z'
    ], a);
    // Napkin fold lines
    pp(g, [
      'M 56 286 C 60 290 66 292 70 290',
      'M 54 294 C 58 296 64 296 68 294'
    ], a, lt);
  },

  // Layer 7: Color fills — Sandra (skin, hair, clothing, neck)
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // Skin — face (radial gradient: warm center, softer edges)
    const skinFace = a ? HL : gd(defs, 'r', [['0%','#FCE4D0'],['100%','#E8B888']], { cx: 180, cy: 90, r: 55 });
    fl(g, 'M 180 44 C 157 44 142 60 140 80 C 138 100 142 116 150 128 C 158 140 168 148 180 150 C 192 148 202 140 210 128 C 218 116 222 100 220 80 C 218 60 203 44 180 44 Z', skinFace, a);
    // Forehead highlight
    hi(g, 'M 168 50 C 176 46 186 46 194 50 C 190 48 178 48 172 52 Z', 0.15, false);
    // Nose shadow
    sh(g, 'M 178 96 C 180 102 182 108 184 112 L 180 114 C 178 108 176 102 176 96 Z', 0.08, false);
    // Jawline shadow
    sh(g, 'M 148 120 C 156 134 166 144 180 148 C 194 144 204 134 212 120 L 210 124 C 202 136 192 146 180 150 C 168 146 158 136 150 124 Z', 0.1, false);

    // Neck skin (gradient)
    const neckGrad = a ? HL : gd(defs, 'l', [['0%','#F0C8A8'],['100%','#DCAA88']], { x1: 180, y1: 144, x2: 180, y2: 164 });
    fe(g, 'rect', { x: 169, y: 144, width: 22, height: 20, rx: 5, fill: neckGrad }, false);
    // Ears skin (radial)
    const earGradL = gd(defs, 'r', [['0%','#F5D0B0'],['100%','#E0B888']], { cx: 134, cy: 88, r: 10 });
    fe(g, 'ellipse', { cx: 134, cy: 88, rx: 5, ry: 8, fill: earGradL }, false);
    const earGradR = gd(defs, 'r', [['0%','#F5D0B0'],['100%','#E0B888']], { cx: 226, cy: 88, r: 10 });
    fe(g, 'ellipse', { cx: 226, cy: 88, rx: 5, ry: 8, fill: earGradR }, false);

    // Hair fill — main mass (gradient crown to tips)
    const hairGrad = a ? HL : gd(defs, 'l', [['0%','#A07840'],['100%','#6D4C28']], { x1: 180, y1: 28, x2: 180, y2: 92 });
    fl(g, 'M 150 84 C 146 64 154 44 170 34 C 178 30 188 28 198 30 C 212 34 224 46 228 64 C 230 74 230 84 228 92 L 224 90 C 226 82 226 72 224 62 C 220 48 210 38 198 34 C 190 32 180 34 172 38 C 160 46 152 60 154 80 Z', hairGrad, a);
    // Hair volume highlight
    hi(g, 'M 172 38 C 180 34 190 32 198 34 C 192 34 182 36 176 40 Z', 0.2, false);
    // Part-line shadow
    sh(g, 'M 186 30 C 188 40 190 52 192 66 L 188 66 C 186 52 184 40 184 30 Z', 0.1, false);

    // Ponytail fill (gradient along length)
    const ponyGrad = gd(defs, 'l', [['0%','#8B6538'],['100%','#6D4C28']], { x1: 230, y1: 48, x2: 248, y2: 148 });
    fl(g, 'M 222 52 C 232 46 244 48 250 56 C 256 66 258 80 258 96 C 258 112 254 126 248 136 C 244 142 240 146 236 148 L 240 140 C 246 130 250 116 250 102 C 250 86 248 70 244 60 C 240 54 232 50 224 54 Z', ponyGrad, false);
    // Hair elastic fill
    fl(g, 'M 222 48 C 226 44 232 42 236 44 C 240 46 242 50 240 54 C 238 58 232 58 228 56 C 224 54 222 52 222 48 Z', '#6D4C41', false);
    // Loose strand fills (darker tint)
    fl(g, 'M 152 78 C 150 88 148 100 150 114 C 152 126 154 136 158 144 L 154 146 C 150 138 146 126 144 114 C 142 100 144 88 148 76 Z', '#7A5A30', false);

    // Pink cardigan fill (gradient shoulder to waist)
    const cardiganGrad = a ? HL : gd(defs, 'l', [['0%','#F8A0C0'],['100%','#E07098']], { x1: 180, y1: 162, x2: 180, y2: 250 });
    fl(g, 'M 120 180 C 130 170 150 164 168 162 L 164 166 C 162 176 160 190 158 206 C 156 220 154 236 152 250 L 100 250 L 104 210 C 106 196 112 188 120 180 Z', cardiganGrad, a);
    fl(g, 'M 240 180 C 230 170 210 164 192 162 L 196 166 C 198 176 200 190 202 206 C 204 220 206 236 208 250 L 260 250 L 256 210 C 254 196 248 188 240 180 Z', cardiganGrad, false);
    // Cardigan fold shadows
    sh(g, 'M 130 186 C 134 200 132 220 130 240 L 126 240 C 128 220 130 200 126 186 Z', 0.1, false);
    sh(g, 'M 230 186 C 226 200 228 220 230 240 L 234 240 C 232 220 230 200 234 186 Z', 0.1, false);
    // Cardigan collar fills
    fl(g, 'M 164 166 C 160 162 154 160 150 164 C 146 168 146 174 150 178 C 154 182 158 180 160 176 Z', '#E91E8E', false);
    fl(g, 'M 196 166 C 200 162 206 160 210 164 C 214 168 214 174 210 178 C 206 182 202 180 200 176 Z', '#E91E8E', false);

    // Black t-shirt V fill (gradient for depth)
    const tshirtGrad = a ? HL : gd(defs, 'l', [['0%','#37474F'],['100%','#263238']], { x1: 180, y1: 170, x2: 180, y2: 220 });
    fl(g, 'M 162 170 C 168 178 174 196 180 220 C 186 196 192 178 198 170 C 192 168 186 166 180 166 C 174 166 168 168 162 170 Z', tshirtGrad, a);

    // Arm skin (lower arms visible near table)
    const armGrad = gd(defs, 'r', [['0%','#F5D0B0'],['100%','#E0B888']], { cx: 98, cy: 246, r: 10 });
    fe(g, 'ellipse', { cx: 98, cy: 246, rx: 8, ry: 6, fill: armGrad }, false);
    const armGradR = gd(defs, 'r', [['0%','#F5D0B0'],['100%','#E0B888']], { cx: 262, cy: 246, r: 10 });
    fe(g, 'ellipse', { cx: 262, cy: 246, rx: 8, ry: 6, fill: armGradR }, false);

    // Under-chin shadow
    sh(g, 'M 168 148 C 174 152 186 152 192 148 L 190 154 C 184 156 176 156 170 154 Z', 0.12, false);
  },

  // Layer 8: Color fills — table (checkered), dominoes, phone, remote
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // Define 2 shared gradients for checkered tablecloth (avoids 56 gradient defs)
    const darkSquareGrad = gd(defs, 'l', [['0%','#A1887F'],['100%','#8D6E63']], { x1: 0, y1: 250, x2: 0, y2: 481 });
    const lightSquareGrad = gd(defs, 'l', [['0%','#EFEBE9'],['100%','#E0D8D0']], { x1: 0, y1: 250, x2: 0, y2: 481 });
    // Checkered tablecloth — alternating squares with shared gradients
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 8; col++) {
        const x = col * 45;
        const y = 250 + row * 33;
        const dark = (col + row) % 2 === 0;
        fe(g, 'rect', { x, y, width: 45, height: 33, fill: dark ? darkSquareGrad : lightSquareGrad }, false);
      }
    }
    // Table edge shadow
    sh(g, 'M 0 250 L 360 250 L 360 256 L 0 256 Z', 0.1, false);

    // Domino fills on table (subtle gradient + drop shadows)
    const domShadow = sf(defs, 1, 0.5, 0.5, '#000', 0.15);
    const dominoGrad = gd(defs, 'l', [['0%','#F5F5F5'],['100%','#E0E0E0']], { x1: 0, y1: 0, x2: 15, y2: 11 });
    const dPositions = [
      { x: 100, y: 268, r: -8 },
      { x: 120, y: 272, r: 3 },
      { x: 140, y: 269, r: 85 },
      { x: 156, y: 272, r: -4 },
      { x: 176, y: 268, r: 90 },
      { x: 196, y: 270, r: 6 },
      { x: 216, y: 274, r: -3 }
    ];
    dPositions.forEach(({ x, y, r }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 11, rx: 1.5, fill: dominoGrad, filter: domShadow }, false);
      g.appendChild(dg);
    });

    // Phone fill (metallic gradient + specular highlight)
    const phoneGrad = a ? HL : gd(defs, 'l', [['0%','#D4B87A'],['50%','#C9A96E'],['100%','#B8956A']], { x1: 279, y1: 287, x2: 311, y2: 287 });
    fe(g, 'rect', { x: 279, y: 287, width: 32, height: 22, rx: 3, fill: phoneGrad }, a);
    fe(g, 'rect', { x: 281, y: 289, width: 28, height: 18, rx: 2, fill: '#B8956A' }, false);
    // Phone specular
    hi(g, 'M 283 289 L 307 289 L 307 291 L 283 291 Z', 0.15, false);

    // TV remote fill (gradient plastic)
    const remoteGrad = a ? HL : gd(defs, 'l', [['0%','#37474F'],['50%','#263238'],['100%','#1A2228']], { x1: 323, y1: 299, x2: 339, y2: 299 });
    fe(g, 'rect', { x: 323, y: 277, width: 16, height: 44, rx: 3, fill: remoteGrad }, a);

    // Napkin fill
    fl(g, 'M 50 284 C 52 282 58 280 66 282 C 74 284 78 286 80 290 C 82 294 78 298 72 300 C 66 302 58 300 52 298 C 48 296 48 290 50 284 Z', '#FAFAFA', false);

    // Held domino fills (gradient + shadow)
    const heldDomGrad = gd(defs, 'l', [['0%','#FAFAFA'],['100%','#E8E8E8']], { x1: 0, y1: 0, x2: 15, y2: 27 });
    const ldPos = [
      { x: 64, y: 182, r: -25, cx: 72, cy: 196 },
      { x: 72, y: 180, r: -8, cx: 80, cy: 194 },
      { x: 80, y: 180, r: 10, cx: 88, cy: 194 }
    ];
    ldPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: heldDomGrad, filter: domShadow }, false);
      g.appendChild(dg);
    });
    const rdPos = [
      { x: 264, y: 180, r: -10, cx: 272, cy: 194 },
      { x: 272, y: 180, r: 8, cx: 280, cy: 194 },
      { x: 280, y: 182, r: 25, cx: 288, cy: 196 }
    ];
    rdPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: heldDomGrad, filter: domShadow }, false);
      g.appendChild(dg);
    });

    // Light falloff overlay (subtle vignette on table)
    const tableFalloff = gd(defs, 'r', [['0%','#000000',0],['100%','#000000',0.05]], { cx: 180, cy: 350, r: 200 });
    fe(g, 'rect', { x: 0, y: 250, width: 360, height: 200, fill: tableFalloff }, false);
  },

  // Layer 9: Polish — eye shines, cheek blush, lip color, text, watch, highlights, background, domino dots
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // Eye shine glow (soft glow behind bright dots)
    const eyeGlow = gf(defs, 2);
    fef(g, 'circle', { cx: 170, cy: 89, r: 3, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    fef(g, 'circle', { cx: 198, cy: 89, r: 3, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    // Eye shine (white sparkle)
    fe(g, 'circle', { cx: 170, cy: 89, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 198, cy: 89, r: 1.5, fill: 'white' }, a);
    // Secondary smaller shine
    fe(g, 'circle', { cx: 174, cy: 93, r: 0.8, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 202, cy: 93, r: 0.8, fill: 'white', opacity: '0.7' }, false);

    // Cheek blush (radial gradient for natural falloff)
    const blushL = gd(defs, 'r', [['0%','#F48FB1',0.3],['100%','#F48FB1',0]], { cx: 158, cy: 116, r: 14 });
    fe(g, 'ellipse', { cx: 158, cy: 116, rx: 14, ry: 7, fill: blushL }, a);
    const blushR = gd(defs, 'r', [['0%','#F48FB1',0.3],['100%','#F48FB1',0]], { cx: 202, cy: 116, r: 14 });
    fe(g, 'ellipse', { cx: 202, cy: 116, rx: 14, ry: 7, fill: blushR }, a);

    // Lip color — gradient for depth
    const lipGrad = gd(defs, 'r', [['0%','#EF5350'],['100%','#C62828']], { cx: 180, cy: 132, r: 16 });
    fl(g, 'M 166 128 C 170 126 174 124 177 126 C 179 128 181 128 183 126 C 186 124 190 126 194 128 C 190 134 184 137 180 137 C 176 137 170 134 166 128 Z', lipGrad, false);

    // Cursive text "It's all good" on black t-shirt
    const ct = ce('text', {
      x: 168, y: 200,
      fill: '#B0BEC5',
      'font-size': '5',
      'font-style': 'italic',
      'font-family': 'cursive',
      'letter-spacing': '0.3'
    });
    ct.textContent = "It's all good";
    if (a) ct.classList.add('active-element');
    g.appendChild(ct);

    // Watch on left wrist (metallic gradient)
    const watchGrad = a ? HL : gd(defs, 'l', [['0%','#607D8B'],['50%','#90A4AE'],['100%','#607D8B']], { x1: 92, y1: 251, x2: 102, y2: 251 });
    fe(g, 'rect', { x: 92, y: 248, width: 10, height: 7, rx: 2.5, fill: watchGrad }, a);
    const watchFaceGrad = gd(defs, 'r', [['0%','#CFD8DC'],['100%','#90A4AE']], { cx: 97, cy: 251, r: 5 });
    fe(g, 'rect', { x: 94, y: 249, width: 6, height: 5, rx: 1.5, fill: watchFaceGrad }, false);
    // Watch band
    pp(g, [
      'M 92 251 C 90 251 88 250 86 250',
      'M 102 251 C 104 251 106 250 108 250'
    ], a, lt);

    // Hair highlights — lighter streaks through hair
    pp(g, [
      'M 164 40 C 170 36 178 34 184 38',
      'M 192 32 C 198 30 206 32 210 38',
      'M 236 58 C 240 64 242 74 242 84',
      'M 156 56 C 162 48 170 44 178 44'
    ], a, lt);

    // Sandra's figure shadow on table
    sh(g, 'M 120 248 C 140 252 220 252 240 248 L 242 256 C 220 260 140 260 118 256 Z', 0.08, false);

    // Atmospheric face glow (warm light on face)
    const faceGlow = gd(defs, 'r', [['0%','#FFF8E1',0.08],['100%','#FFF8E1',0]], { cx: 180, cy: 90, r: 60 });
    fe(g, 'ellipse', { cx: 180, cy: 90, rx: 60, ry: 50, fill: faceGlow }, false);

    // Background — kitchen cabinets hint (top left)
    pp(g, ['M 0 0 L 0 28 L 80 28 L 80 0', 'M 0 14 L 80 14'], a, lt);
    fe(g, 'rect', { x: 2, y: 2, width: 76, height: 11, rx: 2, fill: '#ECEFF1', opacity: '0.15' }, false);
    fe(g, 'rect', { x: 2, y: 15, width: 76, height: 11, rx: 2, fill: '#ECEFF1', opacity: '0.12' }, false);
    // Cabinet handles
    pp(g, ['M 36 8 L 44 8', 'M 36 22 L 44 22'], a, lt);

    // Dark painting/photo behind Sandra
    fe(g, 'rect', { x: 270, y: 20, width: 50, height: 60, rx: 2, fill: '#37474F', opacity: '0.15' }, false);
    pp(g, ['M 270 20 L 320 20 L 320 80 L 270 80 Z'], a, lt);

    // Domino dots on played pieces (various pip patterns)
    const dotSets = [
      { x: 100, y: 268, r: -8, left: [[3, 3], [3, 9]], right: [[11, 3], [11, 9], [11, 6]] },
      { x: 120, y: 272, r: 3, left: [[3, 3], [3, 9], [5, 3], [5, 9]], right: [[11, 6]] },
      { x: 140, y: 269, r: 85, left: [[3, 3], [3, 9], [5, 6], [5, 3], [5, 9]], right: [[11, 3], [11, 9]] },
      { x: 156, y: 272, r: -4, left: [[3, 3], [3, 9], [3, 6]], right: [[11, 2], [11, 5], [11, 8], [13, 2], [13, 5], [13, 8]] },
      { x: 176, y: 268, r: 90, left: [[3, 6]], right: [[11, 3], [11, 9], [13, 3], [13, 9]] },
      { x: 196, y: 270, r: 6, left: [[3, 2], [3, 6], [3, 10], [5, 2], [5, 6], [5, 10]], right: [[11, 2], [11, 6], [11, 10], [13, 2], [13, 10]] },
      { x: 216, y: 274, r: -3, left: [[3, 3], [3, 9]], right: [[11, 3], [11, 9], [11, 6]] }
    ];
    dotSets.forEach(({ x, y, r, left, right }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      left.forEach(([dx, dy]) => {
        fe(dg, 'circle', { cx: x + dx, cy: y + dy, r: 0.9, fill: '#333' }, false);
      });
      right.forEach(([dx, dy]) => {
        fe(dg, 'circle', { cx: x + dx, cy: y + dy, r: 0.9, fill: '#333' }, false);
      });
      g.appendChild(dg);
    });

    // Warm lighting overlay (radial vignette instead of flat)
    const warmVignette = gd(defs, 'r', [['0%','#FFF8E1',0.07],['100%','#FFF8E1',0]], { cx: 180, cy: 125, r: 180 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 250, fill: warmVignette }, false);
  }
];

const paitioLayers = [
  // =====================================================================
  // Layer 0: Composition guides - table edge, three figure zones, wall
  // =====================================================================
  (g, a) => {
    // Table edge horizontal guide at y=300
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Table bottom extent
    pp(g, ['M 0 300 L 0 450', 'M 360 300 L 360 450'], a, lt);
    // Bruno zone (left, stocky) — wider zone
    pp(g, ['M 10 40 L 10 300', 'M 140 40 L 140 300'], a, lt);
    // Bruno center crosshair
    pp(g, ['M 75 70 L 75 170', 'M 30 120 L 120 120'], a, lt);
    // Miguel zone (center, child) — narrower
    pp(g, ['M 145 70 L 145 300', 'M 220 70 L 220 300'], a, lt);
    // Miguel center crosshair
    pp(g, ['M 182 90 L 182 200', 'M 150 150 L 215 150'], a, lt);
    // Ricardo zone (right, lean)
    pp(g, ['M 225 30 L 225 300', 'M 350 30 L 350 300'], a, lt);
    // Ricardo center crosshair
    pp(g, ['M 287 60 L 287 170', 'M 240 110 L 335 110'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 30 180 L 330 180'], a, lt);
    // Wall top line
    pp(g, ['M 0 0 L 360 0'], a, lt);
    // Frame zone guides (three rectangles on wall)
    pp(g, ['M 35 18 L 85 18 L 85 58 L 35 58 Z'], a, lt);
    pp(g, ['M 148 12 L 210 12 L 210 56 L 148 56 Z'], a, lt);
    pp(g, ['M 275 16 L 335 16 L 335 58 L 275 58 Z'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — three bodies, heads, necks, torsos, arms
  // =====================================================================
  (g, a) => {
    // ---- BRUNO (left, stocky build, x~80) ----
    // Head — wider, rounder for stocky build
    pp(g, [
      'M 52 118 C 50 96 58 78 75 72 C 92 78 100 96 98 118 C 100 134 96 148 90 156 C 84 164 80 168 76 170 C 72 168 68 164 62 156 C 56 148 52 134 52 118 Z'
    ], a);
    // Left ear
    pp(g, ['M 50 112 C 44 108 40 112 40 120 C 40 128 44 132 50 130'], a);
    // Left ear inner fold
    pp(g, ['M 44 116 C 42 120 42 126 44 130'], a, lt);
    // Right ear
    pp(g, ['M 100 110 C 106 106 110 110 110 118 C 110 126 106 130 100 128'], a);
    // Right ear inner fold
    pp(g, ['M 106 114 C 108 118 108 124 106 128'], a, lt);
    // Neck — thick for stocky build
    pp(g, ['M 68 168 L 66 182', 'M 84 168 L 86 182'], a);
    // Body — wide stocky torso
    pp(g, [
      'M 34 210 C 42 192 58 182 76 182 C 94 182 110 192 118 210 L 124 300',
      'M 34 210 L 28 300'
    ], a);
    // Left arm — behind, resting casually
    pp(g, [
      'M 36 214 C 26 230 20 250 18 270 C 16 284 18 294 24 298'
    ], a);
    // Right arm — to table, relaxed
    pp(g, [
      'M 116 214 C 124 234 130 258 134 282 C 136 292 136 298 138 300'
    ], a);

    // ---- MIGUEL (center, child ~4yo, x~182) ----
    // Head — round child proportions, smaller
    pp(g, [
      'M 160 148 C 158 130 166 114 182 108 C 198 114 206 130 204 148 C 206 164 202 176 196 184 C 190 190 186 194 182 196 C 178 194 174 190 168 184 C 162 176 158 164 160 148 Z'
    ], a);
    // Left ear
    pp(g, ['M 158 144 C 152 140 148 144 148 152 C 148 160 152 164 158 162'], a);
    // Right ear
    pp(g, ['M 206 142 C 212 138 216 142 216 150 C 216 158 212 162 206 160'], a);
    // Neck — child thin
    pp(g, ['M 174 194 L 172 206', 'M 190 194 L 192 206'], a);
    // Body — child proportions
    pp(g, [
      'M 152 230 C 158 214 170 206 182 206 C 194 206 206 214 212 230 L 216 300',
      'M 152 230 L 148 300'
    ], a);
    // Left arm — on table
    pp(g, [
      'M 154 234 C 146 252 142 272 140 290 C 138 296 140 300 142 300'
    ], a);
    // Right arm — on table
    pp(g, [
      'M 210 234 C 218 252 222 272 224 290 C 226 296 224 300 222 300'
    ], a);

    // ---- RICARDO (right, lean build, x~287) ----
    // Head — lean, narrower face
    pp(g, [
      'M 264 110 C 262 90 270 74 287 68 C 304 74 312 90 310 110 C 312 126 308 138 302 146 C 296 154 292 158 287 160 C 282 158 278 154 272 146 C 266 138 262 126 264 110 Z'
    ], a);
    // Left ear
    pp(g, ['M 262 106 C 256 102 252 106 252 114 C 252 122 256 126 262 124'], a);
    // Right ear
    pp(g, ['M 312 104 C 318 100 322 104 322 112 C 322 120 318 124 312 122'], a);
    // Neck — lean
    pp(g, ['M 278 158 L 276 172', 'M 296 158 L 298 172'], a);
    // Body — lean, leaning forward toward Miguel
    pp(g, [
      'M 254 200 C 262 184 274 172 287 172 C 300 172 312 184 320 200 L 326 300',
      'M 254 200 L 248 300'
    ], a);
    // Left arm — extended forward showing egg
    pp(g, [
      'M 256 204 C 246 222 234 244 226 264 C 222 276 224 284 228 290'
    ], a);
    // Right arm — at side
    pp(g, [
      'M 318 204 C 326 224 332 248 336 274 C 338 286 336 296 334 300'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — all three people
  // =====================================================================
  (g, a) => {
    // ---- BRUNO face ----
    // Left eye — slightly squinting
    pp(g, [
      'M 62 114 C 64 108 70 106 74 110 C 78 114 76 120 72 122 C 68 124 62 120 62 114 Z'
    ], a);
    // Right eye — slightly squinting
    pp(g, [
      'M 82 112 C 84 106 90 104 94 108 C 98 112 96 118 92 120 C 88 122 82 118 82 112 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 70, cy: 116, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 90, cy: 114, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Squint crease — upper eyelid heavy
    pp(g, ['M 64 110 C 68 106 72 104 78 106'], a, lt);
    pp(g, ['M 84 108 C 88 104 92 102 98 104'], a, lt);
    // Eyebrows — thick, defining feature
    pp(g, ['M 58 106 C 64 100 72 98 80 102'], a);
    pp(g, ['M 82 100 C 90 96 98 98 106 104'], a);
    // Eyebrow thickness line
    pp(g, ['M 60 108 C 66 102 74 100 82 104'], a);
    pp(g, ['M 84 102 C 92 98 100 100 108 106'], a);
    // Nose — broad, prominent
    pp(g, ['M 78 108 C 77 116 76 126 74 132'], a);
    pp(g, ['M 70 136 C 74 140 78 142 82 142 C 86 140 88 136 90 132'], a);
    // Nose bridge
    pp(g, ['M 76 106 C 76 112 76 120 76 128'], a, lt);
    // Mouth — relaxed, slightly open
    pp(g, ['M 64 150 C 70 146 76 144 80 146 C 84 144 90 146 96 150'], a);
    // Lower lip
    pp(g, ['M 66 152 C 72 156 78 158 82 158 C 86 156 92 154 96 150'], a);

    // ---- MIGUEL face ----
    // Left eye — looking down, concentrated
    pp(g, [
      'M 170 144 C 172 138 178 136 182 140 C 186 144 184 150 180 152 C 176 154 170 150 170 144 Z'
    ], a);
    // Right eye — looking down
    pp(g, [
      'M 186 142 C 188 136 194 134 198 138 C 202 142 200 148 196 150 C 192 152 186 148 186 142 Z'
    ], a);
    // Left pupil — positioned low (looking down)
    fe(g, 'circle', { cx: 178, cy: 148, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Right pupil — positioned low
    fe(g, 'circle', { cx: 194, cy: 146, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Heavy upper eyelids (downcast emphasis)
    pp(g, ['M 170 142 C 174 138 180 136 186 138'], a);
    pp(g, ['M 186 140 C 190 136 196 134 202 136'], a);
    // Eyebrows — softer child brows
    pp(g, ['M 168 136 C 174 132 180 130 188 134'], a);
    pp(g, ['M 188 132 C 194 130 200 132 208 136'], a);
    // Nose — small child button nose
    pp(g, ['M 182 140 C 181 148 180 156 178 162'], a);
    pp(g, ['M 176 164 C 180 168 184 170 188 170 C 192 168 194 164 196 162'], a);
    // Mouth — slightly pursed, concentrating
    pp(g, ['M 174 178 C 178 174 182 172 186 174 C 190 172 194 174 198 178'], a);
    // Lower lip hint
    pp(g, ['M 176 180 C 182 184 190 184 196 180'], a);

    // ---- RICARDO face ----
    // Left eye
    pp(g, [
      'M 274 106 C 276 100 282 98 286 102 C 290 106 288 112 284 114 C 280 116 274 112 274 106 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 292 104 C 294 98 300 96 304 100 C 308 104 306 110 302 112 C 298 114 292 110 292 104 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 282, cy: 108, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 300, cy: 106, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Eyelid creases
    pp(g, ['M 276 102 C 280 98 284 96 290 98'], a, lt);
    pp(g, ['M 294 100 C 298 96 302 94 308 96'], a, lt);
    // Eyebrows
    pp(g, ['M 270 98 C 276 92 284 90 292 94'], a);
    pp(g, ['M 294 92 C 300 90 308 92 316 98'], a);
    // Nose — straight, lean
    pp(g, ['M 286 100 C 285 108 284 116 282 122'], a);
    pp(g, ['M 280 124 C 284 128 288 130 292 130 C 296 128 298 124 300 122'], a);
    // Nose bridge subtle
    pp(g, ['M 284 98 C 284 104 284 112 284 118'], a, lt);
    // Mouth — warm smile, wider
    pp(g, ['M 272 140 C 278 134 284 132 290 134 C 296 132 300 134 306 140'], a);
    // Lower lip with smile
    pp(g, ['M 274 142 C 280 148 286 150 290 150 C 294 150 300 148 304 142'], a);
    // Chin definition
    pp(g, ['M 282 156 C 286 160 292 160 296 156'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and beard/stubble
  // =====================================================================
  (g, a) => {
    // ---- BRUNO hair — dark, short, buzzcut ----
    // Hairline contour
    pp(g, [
      'M 54 114 C 52 96 60 78 76 72 C 92 68 102 76 106 88 C 110 98 108 110 106 116'
    ], a);
    // Inner volume
    pp(g, [
      'M 58 110 C 58 96 64 82 78 76 C 92 72 100 80 104 90 C 106 98 106 108 104 112'
    ], a);
    // Texture strands
    pp(g, [
      'M 68 74 C 74 70 82 68 88 72',
      'M 62 82 C 70 76 80 74 90 78',
      'M 58 92 C 66 84 78 82 88 86'
    ], a, lt);

    // BRUNO stubble/beard dots — dense array across jawline, chin, upper lip
    const brunoStubble = [
      // Left jawline
      [54, 146], [56, 150], [58, 154], [60, 158], [62, 162], [64, 166],
      // Chin
      [68, 168], [72, 170], [76, 172], [80, 170], [84, 168],
      // Right jawline
      [88, 166], [90, 162], [92, 158], [94, 154], [96, 150], [98, 146],
      // Chin area denser
      [70, 166], [74, 168], [78, 170], [82, 168], [86, 166],
      // Upper lip shadow
      [72, 144], [76, 144], [80, 144], [84, 144], [88, 144],
      // Neck stubble
      [70, 172], [74, 174], [78, 174], [82, 174], [86, 172]
    ];
    brunoStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a);
    });

    // ---- MIGUEL hair — dark brown, short, child texture ----
    // Hair mass contour
    pp(g, [
      'M 162 144 C 160 126 168 112 184 106 C 200 102 208 110 212 122 C 216 132 214 144 212 150'
    ], a);
    // Inner volume
    pp(g, [
      'M 166 140 C 166 128 174 116 186 112 C 198 108 206 116 208 126 C 210 134 210 142 208 146'
    ], a);
    // Hair texture strands — child, softer
    pp(g, [
      'M 178 108 C 184 104 192 104 198 108',
      'M 172 116 C 180 110 190 108 200 112',
      'M 168 126 C 176 118 188 116 198 120',
      'M 166 136 C 174 128 186 126 196 130'
    ], a, lt);

    // ---- RICARDO hair — short brown, neat ----
    // Hair contour
    pp(g, [
      'M 266 106 C 264 88 272 72 287 66 C 302 62 312 70 316 82 C 320 92 318 106 314 112'
    ], a);
    // Inner volume
    pp(g, [
      'M 270 102 C 270 90 278 76 290 72 C 302 68 310 76 312 86 C 316 94 314 104 312 108'
    ], a);
    // Hair texture
    pp(g, [
      'M 280 68 C 288 64 296 64 304 68',
      'M 274 78 C 284 72 296 70 306 74'
    ], a, lt);

    // Ricardo light stubble dots — sparse, lighter color
    const ricStubble = [
      [270, 140], [274, 144], [278, 148], [282, 150], [287, 152],
      [292, 150], [296, 148], [300, 144], [304, 140],
      [278, 146], [287, 150], [296, 146], [282, 148]
    ];
    ricStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.4, fill: a ? HL : '#8D6E63' }, a);
    });
  },

  // =====================================================================
  // Layer 4: Clothing details — collars, logos, patterns, seams
  // =====================================================================
  (g, a) => {
    // ---- BRUNO gray t-shirt ----
    // Collar
    pp(g, ['M 62 184 C 66 180 72 178 76 178 C 80 178 86 180 90 184'], a);
    // Collar ribbing
    pp(g, ['M 64 186 C 68 182 74 180 78 180 C 82 180 88 182 92 186'], a, lt);
    // SAGRES 0.0 logo area rectangle
    pp(g, ['M 54 214 L 98 214 L 98 248 L 54 248 Z'], a, lt);
    // Wings emblem sketch — left wing
    pp(g, [
      'M 66 222 C 62 218 58 220 58 224 C 58 228 62 232 66 230'
    ], a, lt);
    // Wings emblem sketch — right wing
    pp(g, [
      'M 86 222 C 90 218 94 220 94 224 C 94 228 90 232 86 230'
    ], a, lt);
    // Wings center connecting
    pp(g, ['M 66 226 L 76 224 L 86 226'], a, lt);
    // "SAGRES" text outline guide
    pp(g, ['M 62 240 L 90 240'], a, lt);
    // "0.0" text guide below
    pp(g, ['M 68 246 L 84 246'], a, lt);
    // Shirt seam — sleeve left
    pp(g, ['M 38 216 C 34 224 32 234 32 244'], a, lt);
    // Shirt seam — sleeve right
    pp(g, ['M 114 216 C 118 224 120 234 120 244'], a, lt);

    // ---- MIGUEL white t-shirt with character prints ----
    // Collar
    pp(g, ['M 170 208 C 174 204 178 202 182 202 C 186 202 190 204 194 208'], a);
    // Collar ribbing
    pp(g, ['M 172 210 C 176 206 180 204 184 204 C 188 206 192 208 196 210'], a, lt);
    // Small colorful character pattern dots — cartoon figures suggested
    fe(g, 'circle', { cx: 168, cy: 234, r: 1.5, fill: a ? HL : '#FF7043' }, a);
    fe(g, 'circle', { cx: 178, cy: 226, r: 1.5, fill: a ? HL : '#42A5F5' }, a);
    fe(g, 'circle', { cx: 188, cy: 238, r: 1.5, fill: a ? HL : '#66BB6A' }, a);
    fe(g, 'circle', { cx: 196, cy: 228, r: 1.5, fill: a ? HL : '#FFA726' }, a);
    fe(g, 'circle', { cx: 172, cy: 248, r: 1.5, fill: a ? HL : '#AB47BC' }, a);
    fe(g, 'circle', { cx: 192, cy: 250, r: 1.5, fill: a ? HL : '#26A69A' }, a);
    // Tiny stick figure hints near the dots
    pp(g, [
      'M 168 231 L 168 233', 'M 167 232 L 169 232',
      'M 188 235 L 188 237', 'M 187 236 L 189 236'
    ], a, lt);
    // "W" letter on shirt
    const wt = ce('text', {
      x: 177, y: 262, fill: a ? HL : LP,
      'font-size': '8', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif'
    });
    wt.textContent = 'W';
    if (a) wt.classList.add('active-element');
    g.appendChild(wt);

    // ---- RICARDO dark sports t-shirt ----
    // Collar
    pp(g, ['M 272 174 C 276 170 282 168 287 168 C 292 168 298 170 302 174'], a);
    // Center seam line
    pp(g, ['M 287 174 L 287 300'], a, lt);
    // Shoulder seam lines
    pp(g, ['M 264 204 C 272 208 282 210 292 208 C 302 206 310 204 318 200'], a, lt);
    // Side seam lines
    pp(g, ['M 254 206 C 252 218 250 232 250 248'], a, lt);
    pp(g, ['M 318 206 C 322 218 324 232 326 248'], a, lt);
    // Raglan sleeve line left
    pp(g, ['M 278 174 C 270 180 262 190 256 204'], a, lt);
    // Raglan sleeve line right
    pp(g, ['M 296 174 C 304 180 312 190 318 204'], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands and Easter eggs
  // =====================================================================
  (g, a) => {
    // ---- MIGUEL hands on table with orange egg ----
    // Left hand — palm and fingers resting on table
    pp(g, [
      'M 142 290 C 138 284 134 286 132 292 C 130 298 134 302 140 300'
    ], a);
    // Left hand fingers
    pp(g, [
      'M 136 288 C 132 282 128 278 130 274 C 132 270 136 272 138 276',
      'M 138 286 C 134 280 130 276 132 272 C 134 268 138 270 140 274',
      'M 140 284 C 138 278 134 274 136 270 C 138 268 142 270 142 274'
    ], a);
    // Left thumb
    pp(g, ['M 142 292 C 146 288 150 284 152 280 C 154 278 152 276 150 278'], a);
    // Right hand — palm and fingers
    pp(g, [
      'M 222 290 C 226 284 230 286 232 292 C 234 298 230 302 224 300'
    ], a);
    // Right hand fingers
    pp(g, [
      'M 226 288 C 230 282 234 278 232 274 C 230 270 226 272 224 276',
      'M 224 286 C 228 280 232 276 230 272 C 228 268 224 270 222 274',
      'M 222 284 C 224 278 228 274 226 270 C 224 268 220 270 220 274'
    ], a);
    // Right thumb
    pp(g, ['M 220 292 C 216 288 212 284 210 280 C 208 278 210 276 212 278'], a);

    // Orange egg in Miguel's hands — oval with pattern lines
    pp(g, [
      'M 170 280 C 170 268 176 260 182 260 C 188 260 194 268 194 280 C 194 292 188 298 182 298 C 176 298 170 292 170 280 Z'
    ], a);
    // Egg decorative stripes
    pp(g, [
      'M 172 276 C 178 272 186 272 192 276',
      'M 174 284 C 180 280 186 280 190 284',
      'M 176 292 C 180 290 184 290 188 292'
    ], a, lt);

    // ---- RICARDO hand extended with blue egg ----
    // Left hand — open palm showing egg
    pp(g, [
      'M 228 266 C 224 260 220 262 218 268 C 216 274 220 278 226 276'
    ], a);
    // Fingers spread showing egg
    pp(g, [
      'M 222 264 C 218 258 214 254 216 250 C 218 246 222 248 224 252',
      'M 224 262 C 220 256 216 252 218 248 C 220 244 224 246 226 250',
      'M 226 260 C 224 254 222 250 224 246 C 226 242 230 244 230 248',
      'M 230 262 C 232 256 234 252 236 248 C 238 244 236 242 234 244'
    ], a);
    // Thumb supporting egg from below
    pp(g, ['M 230 276 C 234 272 238 268 240 264 C 242 260 240 258 238 260'], a);
    // Blue egg in Ricardo's palm — oval with decorative dots
    pp(g, [
      'M 224 248 C 224 236 230 228 237 228 C 244 228 250 236 250 248 C 250 260 244 268 237 268 C 230 268 224 260 224 248 Z'
    ], a);
    // Egg dot pattern positions
    pp(g, [
      'M 233 238 C 234 236 236 236 237 238',
      'M 240 246 C 241 244 243 244 244 246',
      'M 232 254 C 233 252 235 252 236 254',
      'M 241 258 C 242 256 244 256 245 258'
    ], a, lt);

    // ---- BRUNO arm/hand near table ----
    // Right arm coming down to table area
    pp(g, [
      'M 118 214 C 126 232 132 254 136 278 C 138 290 138 296 140 300'
    ], a);
    // Bruno hand near table surface
    pp(g, [
      'M 138 290 C 134 284 130 286 128 292 C 126 298 130 302 136 300'
    ], a);
    // Bruno hand fingers hint
    pp(g, [
      'M 132 288 C 128 282 124 280 126 276 C 128 274 132 276 134 280'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — wall, framed photos, chair, table
  // =====================================================================
  (g, a) => {
    // Wall outline
    pp(g, ['M 0 0 L 360 0 L 360 300 L 0 300 Z'], a, lt);

    // ---- Three framed photos on wall ----
    // Frame 1 (left) — outer frame
    pp(g, ['M 36 20 L 84 20 L 84 58 L 36 58 Z'], a);
    // Frame 1 inner frame
    pp(g, ['M 39 23 L 81 23 L 81 55 L 39 55 Z'], a);
    // Frame 1 content hint — simple head/shoulders silhouette
    pp(g, [
      'M 52 32 C 56 28 64 28 68 32 C 72 36 68 44 60 46 C 52 44 48 38 52 32',
      'M 48 50 C 52 46 58 44 60 44 C 62 44 68 46 72 50'
    ], a, lt);

    // Frame 2 (center) — outer frame
    pp(g, ['M 150 14 L 208 14 L 208 56 L 150 56 Z'], a);
    // Frame 2 inner frame
    pp(g, ['M 153 17 L 205 17 L 205 53 L 153 53 Z'], a);
    // Frame 2 content hint — group silhouette
    pp(g, [
      'M 168 28 C 170 24 176 24 178 28 C 180 32 176 36 172 38 C 168 36 166 32 168 28',
      'M 184 28 C 186 24 192 24 194 28 C 196 32 192 36 188 38 C 184 36 182 32 184 28',
      'M 164 44 L 200 44'
    ], a, lt);

    // Frame 3 (right) — outer frame
    pp(g, ['M 278 18 L 334 18 L 334 58 L 278 58 Z'], a);
    // Frame 3 inner frame
    pp(g, ['M 281 21 L 331 21 L 331 55 L 281 55 Z'], a);
    // Frame 3 content hint — landscape/scene
    pp(g, [
      'M 290 42 C 296 34 304 30 310 34 C 316 38 320 42 326 40',
      'M 286 46 L 326 46'
    ], a, lt);

    // ---- Wooden chair behind Bruno ----
    // Chair back vertical — left post
    pp(g, ['M 18 100 L 18 300'], a);
    // Chair back vertical — right post
    pp(g, ['M 42 100 L 42 182'], a);
    // Chair back top rail
    pp(g, ['M 18 100 L 42 100'], a);
    // Chair horizontal bars
    pp(g, ['M 18 120 L 42 120'], a, lt);
    pp(g, ['M 18 140 L 42 140'], a, lt);
    pp(g, ['M 18 160 L 42 160'], a, lt);
    // Chair seat hint
    pp(g, ['M 14 182 L 46 182'], a, lt);

    // ---- Table ----
    // Table front edge (solid)
    pp(g, ['M 0 300 L 360 300'], a);
    // Table edge thickness
    pp(g, ['M 0 300 L 0 308 L 360 308 L 360 300'], a);
    // Table legs
    pp(g, ['M 30 308 L 30 450', 'M 330 308 L 330 450'], a, lt);
    // Table inner legs
    pp(g, ['M 120 308 L 120 440', 'M 240 308 L 240 440'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — FIGURES (skin, hair, clothing)
  // =====================================================================
  (g, a) => {
    // ---- BRUNO fills ----
    // Face skin
    fl(g,
      'M 52 118 C 50 96 58 78 75 72 C 92 78 100 96 98 118 C 100 134 96 148 90 156 C 84 164 80 168 76 170 C 72 168 68 164 62 156 C 56 148 52 134 52 118 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 44, cy: 120, rx: 6, ry: 10, fill: '#E8C49A' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 106, cy: 118, rx: 6, ry: 10, fill: '#E8C49A' }, false);
    // Hair fill — dark brown buzzcut
    fl(g,
      'M 54 114 C 52 96 60 78 76 72 C 92 68 102 76 106 88 C 110 98 108 110 106 116 L 102 112 C 104 102 102 92 98 84 C 94 78 86 74 78 74 C 68 76 60 86 56 100 Z',
      '#4E342E', false);
    // Neck skin
    fe(g, 'rect', { x: 67, y: 168, width: 18, height: 14, rx: 4, fill: '#E8C49A' }, false);
    // Eye whites
    fl(g, 'M 62 114 C 64 108 70 106 74 110 C 78 114 76 120 72 122 C 68 124 62 120 62 114 Z', '#FFFFFF', false);
    fl(g, 'M 82 112 C 84 106 90 104 94 108 C 98 112 96 118 92 120 C 88 122 82 118 82 112 Z', '#FFFFFF', false);
    // Gray t-shirt
    fl(g,
      'M 34 210 C 42 192 58 182 76 182 C 94 182 110 192 118 210 L 124 300 L 28 300 Z',
      '#BDBDBD', a);

    // ---- MIGUEL fills ----
    // Face skin
    fl(g,
      'M 160 148 C 158 130 166 114 182 108 C 198 114 206 130 204 148 C 206 164 202 176 196 184 C 190 190 186 194 182 196 C 178 194 174 190 168 184 C 162 176 158 164 160 148 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 152, cy: 152, rx: 5, ry: 9, fill: '#F0C8A0' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 212, cy: 150, rx: 5, ry: 9, fill: '#F0C8A0' }, false);
    // Hair fill — dark brown
    fl(g,
      'M 162 144 C 160 126 168 112 184 106 C 200 102 208 110 212 122 C 216 132 214 144 212 150 L 208 146 C 210 136 210 128 206 120 C 202 114 196 108 186 110 C 176 112 168 122 164 134 Z',
      '#4E342E', false);
    // Neck skin
    fe(g, 'rect', { x: 173, y: 194, width: 18, height: 12, rx: 4, fill: '#F0C8A0' }, false);
    // Eye whites
    fl(g, 'M 170 144 C 172 138 178 136 182 140 C 186 144 184 150 180 152 C 176 154 170 150 170 144 Z', '#FFFFFF', false);
    fl(g, 'M 186 142 C 188 136 194 134 198 138 C 202 142 200 148 196 150 C 192 152 186 148 186 142 Z', '#FFFFFF', false);
    // White t-shirt
    fl(g,
      'M 152 230 C 158 214 170 206 182 206 C 194 206 206 214 212 230 L 216 300 L 148 300 Z',
      '#FAFAFA', a);

    // ---- RICARDO fills ----
    // Face skin
    fl(g,
      'M 264 110 C 262 90 270 74 287 68 C 304 74 312 90 310 110 C 312 126 308 138 302 146 C 296 154 292 158 287 160 C 282 158 278 154 272 146 C 266 138 262 126 264 110 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 256, cy: 114, rx: 5, ry: 10, fill: '#E8C49A' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 318, cy: 112, rx: 5, ry: 10, fill: '#E8C49A' }, false);
    // Hair fill — slightly lighter brown
    fl(g,
      'M 266 106 C 264 88 272 72 287 66 C 302 62 312 70 316 82 C 320 92 318 106 314 112 L 310 108 C 312 98 312 90 308 82 C 304 74 296 68 288 68 C 278 70 270 80 268 94 Z',
      '#5D4037', false);
    // Neck skin
    fe(g, 'rect', { x: 277, y: 158, width: 20, height: 14, rx: 4, fill: '#E8C49A' }, false);
    // Eye whites
    fl(g, 'M 274 106 C 276 100 282 98 286 102 C 290 106 288 112 284 114 C 280 116 274 112 274 106 Z', '#FFFFFF', false);
    fl(g, 'M 292 104 C 294 98 300 96 304 100 C 308 104 306 110 302 112 C 298 114 292 110 292 104 Z', '#FFFFFF', false);
    // Dark sports t-shirt
    fl(g,
      'M 254 200 C 262 184 274 172 287 172 C 300 172 312 184 320 200 L 326 300 L 248 300 Z',
      '#263238', a);

    // ---- Hand skin fills ----
    // Miguel left hand
    fe(g, 'ellipse', { cx: 138, cy: 292, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Miguel right hand
    fe(g, 'ellipse', { cx: 224, cy: 292, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Ricardo extended hand
    fe(g, 'ellipse', { cx: 228, cy: 266, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Bruno right hand near table
    fe(g, 'ellipse', { cx: 134, cy: 292, rx: 8, ry: 8, fill: '#F5D0A9' }, false);
    // Bruno left arm/hand (behind)
    fe(g, 'ellipse', { cx: 22, cy: 290, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
  },

  // =====================================================================
  // Layer 8: Color fills — SCENE (wall, tablecloth, frames, eggs, chair)
  // =====================================================================
  (g, a) => {
    // Cream wall
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: '#FFF8E1' }, a);

    // Orange tablecloth
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#FF8F00' }, a);
    // Table edge strip (slightly darker)
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 8, fill: '#EF6C00' }, false);

    // Tablecloth fold highlights
    pp(g, [
      'M 40 314 C 60 310 80 312 100 314',
      'M 160 312 C 180 308 200 310 220 312',
      'M 280 314 C 300 310 320 312 340 314'
    ], false, lt);

    // ---- Framed photos fills ----
    // Frame 1 — brown outer + cream inner
    fe(g, 'rect', { x: 36, y: 20, width: 48, height: 38, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 39, y: 23, width: 42, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 2
    fe(g, 'rect', { x: 150, y: 14, width: 58, height: 42, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 153, y: 17, width: 52, height: 36, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 3
    fe(g, 'rect', { x: 278, y: 18, width: 56, height: 40, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 281, y: 21, width: 50, height: 34, rx: 1, fill: '#EFEBE9' }, false);

    // ---- Orange egg fill ----
    fl(g,
      'M 170 280 C 170 268 176 260 182 260 C 188 260 194 268 194 280 C 194 292 188 298 182 298 C 176 298 170 292 170 280 Z',
      '#FF7043', a);
    // Orange egg stripe highlight
    fl(g,
      'M 172 276 C 178 272 186 272 192 276 L 192 280 C 186 276 178 276 172 280 Z',
      '#FFB74D', false);
    // Orange egg lower stripe
    fl(g,
      'M 176 290 C 180 288 184 288 188 290 L 188 294 C 184 292 180 292 176 294 Z',
      '#FFB74D', false);

    // ---- Blue egg fill ----
    fl(g,
      'M 224 248 C 224 236 230 228 237 228 C 244 228 250 236 250 248 C 250 260 244 268 237 268 C 230 268 224 260 224 248 Z',
      '#64B5F6', a);
    // Blue egg dots
    fe(g, 'circle', { cx: 233, cy: 238, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 241, cy: 246, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 234, cy: 256, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 242, cy: 260, r: 2, fill: '#1565C0' }, false);
    // Blue egg highlight
    fe(g, 'ellipse', { cx: 234, cy: 240, rx: 3, ry: 2, fill: '#90CAF9', opacity: '0.5' }, false);

    // ---- Chair fill ----
    // Chair back panels (semi-transparent wood)
    fe(g, 'rect', { x: 16, y: 100, width: 28, height: 82, rx: 2, fill: '#A1887F', opacity: '0.35' }, false);
    // Chair seat
    fe(g, 'rect', { x: 12, y: 180, width: 36, height: 6, rx: 2, fill: '#A1887F', opacity: '0.4' }, false);
    // Chair legs below seat
    fe(g, 'rect', { x: 16, y: 186, width: 4, height: 114, fill: '#A1887F', opacity: '0.2' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, cheeks, logo fills, textures, warmth
  // =====================================================================
  (g, a) => {
    // ---- Eye shines — all three ----
    // Bruno eye shines
    fe(g, 'circle', { cx: 68, cy: 114, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 88, cy: 112, r: 1.5, fill: '#FFFFFF' }, a);
    // Bruno secondary highlights
    fe(g, 'circle', { cx: 72, cy: 118, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 92, cy: 116, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // Miguel eye shines
    fe(g, 'circle', { cx: 176, cy: 146, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 192, cy: 144, r: 1.3, fill: '#FFFFFF' }, a);
    // Miguel secondary highlights
    fe(g, 'circle', { cx: 180, cy: 150, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 196, cy: 148, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);

    // Ricardo eye shines
    fe(g, 'circle', { cx: 280, cy: 106, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 298, cy: 104, r: 1.5, fill: '#FFFFFF' }, a);
    // Ricardo secondary highlights
    fe(g, 'circle', { cx: 284, cy: 110, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 302, cy: 108, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // ---- Miguel cheek blush ----
    fe(g, 'ellipse', { cx: 170, cy: 174, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 196, cy: 174, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // ---- SAGRES logo filled on Bruno's shirt ----
    // "SAGRES" text
    const sg = ce('text', {
      x: 60, y: 236, fill: '#1A237E',
      'font-size': '6', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    sg.textContent = 'SAGRES';
    if (a) sg.classList.add('active-element');
    g.appendChild(sg);
    // "0.0" text below SAGRES
    const sg2 = ce('text', {
      x: 70, y: 244, fill: '#1A237E',
      'font-size': '5', 'font-family': 'Arial, sans-serif'
    });
    sg2.textContent = '0.0';
    g.appendChild(sg2);
    // Wings emblem filled — left wing
    fl(g,
      'M 66 222 C 62 218 58 220 58 224 C 58 228 62 232 66 230 L 76 226 Z',
      '#1A237E', false);
    // Wings emblem filled — right wing
    fl(g,
      'M 86 222 C 90 218 94 220 94 224 C 94 228 90 232 86 230 L 76 226 Z',
      '#1A237E', false);
    // Wings center diamond
    fe(g, 'circle', { cx: 76, cy: 226, r: 2, fill: '#FFC107' }, false);

    // ---- "W" on Miguel's shirt — gray fill ----
    const wf = ce('text', {
      x: 177, y: 262, fill: '#9E9E9E',
      'font-size': '8', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif'
    });
    wf.textContent = 'W';
    g.appendChild(wf);
    // Pattern dots on Miguel's shirt — brighter fill versions
    fe(g, 'circle', { cx: 168, cy: 234, r: 1.8, fill: '#FF7043' }, false);
    fe(g, 'circle', { cx: 178, cy: 226, r: 1.8, fill: '#42A5F5' }, false);
    fe(g, 'circle', { cx: 188, cy: 238, r: 1.8, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 196, cy: 228, r: 1.8, fill: '#FFA726' }, false);
    fe(g, 'circle', { cx: 172, cy: 248, r: 1.8, fill: '#AB47BC' }, false);
    fe(g, 'circle', { cx: 192, cy: 250, r: 1.8, fill: '#26A69A' }, false);
    // Tiny character figure hints (filled)
    fe(g, 'circle', { cx: 168, cy: 231, r: 0.5, fill: '#BF360C' }, false);
    fe(g, 'circle', { cx: 188, cy: 235, r: 0.5, fill: '#1B5E20' }, false);

    // ---- Ricardo mouth fill (warm smile) ----
    fl(g,
      'M 274 142 C 280 148 286 150 290 150 C 294 150 300 148 304 142 C 300 150 294 152 290 152 C 286 152 280 150 274 142 Z',
      '#E57373', false);

    // ---- Bruno beard shadow under chin ----
    fl(g,
      'M 62 156 C 68 164 74 170 78 172 C 82 170 88 164 94 156 C 90 162 84 168 80 170 C 76 168 68 162 62 156 Z',
      '#5D4037', false);

    // ---- Nasolabial folds — Bruno ----
    pp(g, ['M 68 134 C 66 140 64 146 64 150'], false, lt);
    pp(g, ['M 88 132 C 90 138 92 144 92 148'], false, lt);

    // ---- Tablecloth texture — fold highlights ----
    pp(g, [
      'M 20 320 C 40 316 60 318 80 320',
      'M 140 318 C 160 314 180 316 200 318',
      'M 260 320 C 280 316 300 318 320 320'
    ], a, lt);
    // Tablecloth subtle vertical drape lines
    pp(g, [
      'M 60 308 L 58 440',
      'M 180 308 L 178 440',
      'M 300 308 L 298 440'
    ], false, lt);

    // ---- Warm ambient light overlay ----
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: '#FFF8E1', opacity: '0.05' }, false);
    // Soft warm glow on table area
    fe(g, 'ellipse', { cx: 180, cy: 300, rx: 160, ry: 30, fill: '#FFECB3', opacity: '0.08' }, false);

    // ---- Finger skin refinements ----
    // Miguel left hand fingers
    fe(g, 'ellipse', { cx: 132, cy: 278, rx: 4, ry: 5, fill: '#F5D0A9', opacity: '0.5' }, false);
    // Miguel right hand fingers
    fe(g, 'ellipse', { cx: 228, cy: 278, rx: 4, ry: 5, fill: '#F5D0A9', opacity: '0.5' }, false);
    // Ricardo extended fingers
    fe(g, 'ellipse', { cx: 224, cy: 252, rx: 5, ry: 6, fill: '#F5D0A9', opacity: '0.5' }, false);

    // ---- Egg highlight shines ----
    // Orange egg shine
    fe(g, 'ellipse', { cx: 178, cy: 270, rx: 3, ry: 2, fill: '#FFCCBC', opacity: '0.5' }, false);
    // Blue egg shine
    fe(g, 'ellipse', { cx: 234, cy: 238, rx: 3, ry: 2, fill: '#BBDEFB', opacity: '0.5' }, false);

    // ---- Frame inner shadows (subtle depth) ----
    fe(g, 'rect', { x: 39, y: 50, width: 42, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 153, y: 48, width: 52, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 281, y: 50, width: 50, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
  }
];

const brunomiguelLayers = [
  // =====================================================================
  // Layer 0: Composition guides — table edge, Bruno zone, Miguel zone,
  //          third person zone
  // =====================================================================
  (g, a) => {
    // Table/counter horizontal guide
    pp(g, ['M 0 340 L 360 340'], a, lt);
    // Bruno zone (left)
    pp(g, ['M 10 20 L 10 340', 'M 155 20 L 155 340'], a, lt);
    // Bruno head center crosshair
    pp(g, ['M 86 60 L 86 160', 'M 40 100 L 130 100'], a, lt);
    // Miguel zone (center-right)
    pp(g, ['M 160 30 L 160 340', 'M 285 30 L 285 340'], a, lt);
    // Miguel head center crosshair
    pp(g, ['M 216 60 L 216 170', 'M 170 110 L 265 110'], a, lt);
    // Third person zone (far right, torso only)
    pp(g, ['M 290 50 L 290 220 L 355 220 L 355 50'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 30 180 L 280 180'], a, lt);
  },

  // =====================================================================
  // Layer 1: Bruno — head, face, neck, shoulders, body
  // Angular jawline, prominent nose, thick brows, slight smile
  // =====================================================================
  (g, a) => {
    // Head — angular jawline, defined chin, lean face
    pp(g, [
      'M 58 96 C 56 72 64 52 78 44 C 90 38 100 40 108 48 C 116 58 120 74 118 92 C 118 108 116 120 110 130 C 106 138 100 146 94 152 C 90 156 86 158 82 156 C 76 152 70 144 64 134 C 58 124 56 110 58 96 Z'
    ], a);
    // Left ear
    pp(g, ['M 56 90 C 50 86 46 90 46 98 C 46 106 50 112 56 110'], a);
    // Left ear inner
    pp(g, ['M 50 94 C 48 98 48 104 50 108'], a, lt);
    // Right ear
    pp(g, ['M 118 88 C 124 84 128 88 128 96 C 128 104 124 110 118 108'], a);
    // Right ear inner
    pp(g, ['M 124 92 C 126 96 126 102 124 106'], a, lt);
    // Left eye — almond, looking right toward Miguel
    pp(g, [
      'M 66 90 C 68 84 74 82 80 84 C 86 86 86 92 82 96 C 78 98 68 96 66 90 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 92 88 C 94 82 100 80 106 82 C 112 84 112 90 108 94 C 104 96 94 94 92 88 Z'
    ], a);
    // Left pupil (gazing right toward Miguel)
    fe(g, 'circle', { cx: 76, cy: 90, r: 3.2, fill: a ? HL : '#2C1810' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 102, cy: 88, r: 3.2, fill: a ? HL : '#2C1810' }, a);
    // Left eyelid crease
    pp(g, ['M 68 84 C 72 80 78 78 84 80'], a, lt);
    // Right eyelid crease
    pp(g, ['M 94 82 C 98 78 104 76 110 78'], a, lt);
    // Thick dark eyebrows — defining feature
    pp(g, ['M 62 80 C 70 74 78 72 86 76'], a);
    pp(g, ['M 90 74 C 98 70 106 72 114 78'], a);
    // Eyebrow thickness (doubled line)
    pp(g, ['M 64 82 C 72 76 80 74 88 78'], a);
    pp(g, ['M 92 76 C 100 72 108 74 116 80'], a);
    // Nose — prominent, straight bridge with defined tip
    pp(g, ['M 90 82 C 89 90 88 98 87 106'], a);
    pp(g, ['M 82 110 C 86 114 90 116 94 114 C 97 112 98 108 100 106'], a);
    // Nose bridge subtle line
    pp(g, ['M 88 80 C 88 86 88 92 88 98'], a, lt);
    // Mouth — slight smile
    pp(g, ['M 72 132 C 78 128 84 126 90 128 C 96 126 100 128 104 132'], a);
    // Lower lip
    pp(g, ['M 74 134 C 80 138 86 140 92 140 C 96 138 100 136 104 132'], a);
    // Chin definition
    pp(g, ['M 82 152 C 86 156 90 156 94 152'], a, lt);
    // Neck
    pp(g, ['M 78 156 L 76 172', 'M 96 154 L 98 172'], a);
    // Shoulders and body — jacket
    pp(g, [
      'M 36 204 C 44 186 62 174 86 172 C 110 174 128 186 136 204 L 140 340 M 36 204 L 32 340'
    ], a);
  },

  // =====================================================================
  // Layer 2: Bruno — buzzcut hair (stippling) and beard stubble
  // =====================================================================
  (g, a) => {
    // Hairline contour
    pp(g, [
      'M 60 92 C 58 76 64 58 78 48 C 92 42 104 44 112 54 C 118 64 120 78 118 90'
    ], a);
    // Buzzcut hair stippling dots — dense array across the scalp area
    const buzzDots = [
      [78, 44], [84, 42], [90, 42], [96, 44],
      [70, 50], [78, 48], [86, 46], [94, 46], [102, 48], [108, 52],
      [64, 58], [72, 54], [80, 50], [88, 48], [96, 50], [104, 54], [112, 60],
      [60, 68], [68, 62], [76, 56], [84, 52], [92, 52], [100, 56], [108, 62], [116, 70],
      [58, 78], [66, 70], [74, 64], [82, 58], [90, 56], [98, 60], [106, 66], [114, 74],
      [62, 84], [70, 76], [78, 68], [86, 62], [94, 62], [102, 68], [110, 76], [116, 84],
      [66, 88], [74, 80], [82, 70], [90, 66], [98, 68], [106, 74], [112, 82]
    ];
    buzzDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a);
    });

    // Beard stubble dots along jawline and chin
    const stubbleDots = [
      // Left jawline
      [58, 118], [60, 122], [62, 126], [64, 130], [66, 134], [68, 138],
      [70, 142], [72, 146], [74, 150],
      // Chin bottom
      [78, 152], [82, 154], [86, 156], [90, 154], [94, 152],
      // Right jawline
      [98, 150], [100, 146], [102, 142], [104, 138], [106, 134],
      [108, 130], [110, 126], [112, 122], [114, 118],
      // Chin area (denser fill)
      [76, 148], [80, 150], [84, 152], [88, 152], [92, 150], [96, 148],
      // Neck top stubble
      [78, 156], [82, 158], [86, 160], [90, 158], [94, 156],
      // Upper lip shadow area
      [80, 126], [84, 126], [88, 126], [92, 126], [96, 126]
    ];
    stubbleDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#4A3628' }, a);
    });

    // Nasolabial fold lines (faint)
    pp(g, ['M 80 108 C 78 114 76 120 74 128'], a, lt);
    pp(g, ['M 100 106 C 102 112 104 118 106 126'], a, lt);
  },

  // =====================================================================
  // Layer 3: Bruno — jacket details: collar, zipper, orange patches,
  //          PESSOAL logo area, colored dots, zipper pull
  // =====================================================================
  (g, a) => {
    // Collar — standing collar with fold
    pp(g, [
      'M 70 174 C 66 170 60 170 58 176 C 56 182 60 186 66 184',
      'M 102 174 C 106 170 112 170 114 176 C 116 182 112 186 106 184',
      'M 66 184 C 74 188 82 190 88 190 C 94 190 100 188 106 184'
    ], a);
    // Zipper center line
    pp(g, ['M 88 190 L 88 340'], a);
    // Zipper teeth marks (alternating small horizontal dashes)
    for (let y = 196; y < 336; y += 7) {
      pp(g, [`M 86 ${y} L 90 ${y}`], a, lt);
    }
    // Zipper pull at top (small rectangle)
    fe(g, 'rect', {
      x: 85, y: 190, width: 6, height: 8, rx: 1,
      fill: 'none', stroke: a ? HL : P,
      'stroke-width': a ? HW : PW
    }, a);
    // Left orange shoulder patch
    pp(g, ['M 40 208 L 56 204 L 56 218 L 40 222 Z'], a);
    // Right orange shoulder patch
    pp(g, ['M 132 208 L 116 204 L 116 218 L 132 222 Z'], a);
    // PESSOAL logo rectangle (left chest area)
    pp(g, ['M 56 230 L 82 230 L 82 248 L 56 248 Z'], a);
    // Logo interior lines hint
    pp(g, [
      'M 60 236 L 62 236 L 62 242 L 60 242',
      'M 64 236 L 68 236 L 68 240 L 64 240 L 64 244'
    ], a, lt);
    // Three colored dots under logo
    fe(g, 'circle', { cx: 64, cy: 246, r: 1.5, fill: '#FF6F00' }, a);
    fe(g, 'circle', { cx: 69, cy: 246, r: 1.5, fill: '#4CAF50' }, a);
    fe(g, 'circle', { cx: 74, cy: 246, r: 1.5, fill: '#2196F3' }, a);
    // Left sleeve seam
    pp(g, ['M 42 210 C 38 218 36 228 36 238'], a, lt);
    // Right sleeve seam
    pp(g, ['M 130 210 C 134 218 136 228 136 238'], a, lt);
    // Jacket pocket hint
    pp(g, [
      'M 46 280 C 54 284 66 286 78 286',
      'M 98 286 C 106 284 116 282 124 278'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Miguel — body, face, hair, neck, body/sweater outline
  // Round child face, eyes looking DOWN at toy
  // =====================================================================
  (g, a) => {
    // Head — round child proportions
    pp(g, [
      'M 190 110 C 190 88 200 72 216 68 C 232 72 242 88 242 110 C 244 126 240 140 234 148 C 228 154 222 160 216 162 C 210 160 204 154 198 148 C 192 140 188 126 190 110 Z'
    ], a);
    // Left ear
    pp(g, ['M 190 108 C 184 104 180 108 180 116 C 180 124 184 128 190 126'], a);
    // Left ear inner
    pp(g, ['M 184 112 C 182 116 182 122 184 126'], a, lt);
    // Right ear
    pp(g, ['M 242 106 C 248 102 252 106 252 114 C 252 122 248 126 242 124'], a);
    // Right ear inner
    pp(g, ['M 248 110 C 250 114 250 120 248 124'], a, lt);
    // Eyes — looking DOWN, heavy eyelids, pupils positioned low
    // Left eye (partially closed, downcast)
    pp(g, [
      'M 200 108 C 202 104 208 102 212 104 C 216 106 216 112 212 114 C 208 116 200 114 200 108 Z'
    ], a);
    // Right eye (partially closed, downcast)
    pp(g, [
      'M 222 106 C 224 102 230 100 234 102 C 238 104 238 110 234 112 C 230 114 222 112 222 106 Z'
    ], a);
    // Left pupil — positioned low (looking down at toy)
    fe(g, 'circle', { cx: 208, cy: 111, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Right pupil — positioned low
    fe(g, 'circle', { cx: 230, cy: 109, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Heavy upper eyelid lines (emphasize downcast)
    pp(g, ['M 200 106 C 204 102 210 100 214 102'], a);
    pp(g, ['M 222 104 C 226 100 232 98 236 100'], a);
    // Eyebrows — child, softer
    pp(g, ['M 198 100 C 204 96 210 94 216 96'], a);
    pp(g, ['M 222 96 C 228 94 234 96 240 100'], a);
    // Nose — small child nose
    pp(g, ['M 214 102 C 213 108 212 114 210 120'], a);
    pp(g, ['M 208 122 C 212 126 216 128 220 126 C 222 124 224 122 224 120'], a);
    // Mouth — slightly open with concentration
    pp(g, ['M 206 138 C 210 134 214 132 218 134 C 222 132 226 134 230 138'], a);
    pp(g, ['M 208 140 C 214 144 222 144 228 140'], a);
    // Hair — dark brown, short, with texture
    pp(g, [
      'M 192 106 C 190 88 198 72 212 66 C 226 62 238 66 246 76 C 252 86 254 98 250 108'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 196 102 C 196 86 204 74 216 70 C 228 68 238 72 244 80 C 248 88 250 96 248 104'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 208 68 C 214 64 222 64 228 68',
      'M 202 76 C 210 70 220 68 230 72',
      'M 198 86 C 206 78 216 76 226 80'
    ], a, lt);
    // Neck
    pp(g, ['M 208 160 L 206 172', 'M 224 158 L 226 172'], a);
    // Body — sweater
    pp(g, [
      'M 170 200 C 180 182 198 172 216 172 C 234 172 252 182 262 200 L 266 340 M 170 200 L 166 340'
    ], a);
  },

  // =====================================================================
  // Layer 5: Miguel — sweater details ("95", "YEARS"), hands holding toy
  // Both hands interlocked around oval toy (half blue, half red)
  // =====================================================================
  (g, a) => {
    // Crew neckline
    pp(g, ['M 200 174 C 206 178 212 180 218 180 C 224 178 228 176 232 174'], a);
    // Neckline ribbing
    pp(g, ['M 202 176 C 208 180 214 182 220 180 C 226 178 230 176 234 174'], a, lt);
    // "95" text outline on chest
    const t95 = ce('text', {
      x: 200, y: 224,
      fill: a ? HL : P,
      'font-size': '18', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '1'
    });
    t95.textContent = '95';
    if (a) t95.classList.add('active-element');
    g.appendChild(t95);
    // "YEARS" small text below "95"
    const tyr = ce('text', {
      x: 205, y: 234,
      fill: a ? HL : LP,
      'font-size': '5', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '1'
    });
    tyr.textContent = 'YEARS';
    if (a) tyr.classList.add('active-element');
    g.appendChild(tyr);

    // ---- Hands and toy ----
    // Toy — oval shape divided in half
    pp(g, [
      'M 196 262 C 196 252 204 244 216 244 C 228 244 236 252 236 262 C 236 272 228 278 216 278 C 204 278 196 272 196 262 Z'
    ], a);
    // Toy dividing line (vertical center)
    pp(g, ['M 216 244 L 216 278'], a, lt);

    // Left hand — wrapping around left side of toy
    // Palm back
    pp(g, [
      'M 198 256 C 192 250 186 252 184 258 C 182 264 186 268 192 266'
    ], a);
    // Left thumb
    pp(g, [
      'M 198 252 C 196 246 192 242 188 242 C 184 244 184 248 186 252'
    ], a);
    // Left index finger (wrapped around toy top)
    pp(g, [
      'M 192 254 C 188 248 184 244 182 240 C 180 236 182 234 186 234 C 190 234 192 238 194 244'
    ], a);
    // Left middle finger
    pp(g, [
      'M 190 258 C 186 252 182 246 180 242 C 178 238 180 236 184 236 C 188 236 190 240 192 246'
    ], a);
    // Left ring finger (shorter)
    pp(g, [
      'M 188 262 C 184 256 182 250 180 246 C 178 242 180 240 184 240'
    ], a);
    // Left pinky (curled)
    pp(g, [
      'M 188 266 C 184 262 182 256 182 252 C 182 248 184 246 186 248'
    ], a);

    // Right hand — wrapping around right side of toy
    // Palm back
    pp(g, [
      'M 234 254 C 240 248 246 250 248 256 C 250 262 246 266 240 264'
    ], a);
    // Right thumb
    pp(g, [
      'M 234 250 C 236 244 240 240 244 240 C 248 242 248 246 246 250'
    ], a);
    // Right index finger
    pp(g, [
      'M 240 252 C 244 246 248 242 250 238 C 252 234 250 232 246 232 C 242 232 240 236 238 242'
    ], a);
    // Right middle finger
    pp(g, [
      'M 242 256 C 246 250 250 244 252 240 C 254 236 252 234 248 234 C 244 234 242 238 240 244'
    ], a);
    // Right ring finger
    pp(g, [
      'M 244 260 C 248 254 250 248 252 244 C 254 240 252 238 248 238'
    ], a);
    // Right pinky
    pp(g, [
      'M 244 264 C 248 260 250 254 250 250 C 250 246 248 244 246 246'
    ], a);

    // Sleeve wrinkle lines
    pp(g, ['M 174 204 C 170 210 168 218 168 226'], a, lt);
    pp(g, ['M 258 202 C 262 208 264 216 264 224'], a, lt);
  },

  // =====================================================================
  // Layer 6: Table/counter, objects, Bruno's left hand, third person hint
  // =====================================================================
  (g, a) => {
    // Table/counter surface
    pp(g, ['M 0 340 L 360 340'], a);
    // Table front edge thickness
    pp(g, ['M 0 340 L 0 350 L 360 350 L 360 340'], a);
    // Table legs hint
    pp(g, ['M 40 350 L 40 450', 'M 320 350 L 320 450'], a, lt);

    // Blue ball/disc on table
    pp(g, [
      'M 158 332 C 158 322 168 314 180 314 C 192 314 202 322 202 332 C 202 338 192 340 180 340 C 168 340 158 338 158 332 Z'
    ], a);

    // White paper cup
    pp(g, [
      'M 242 316 L 240 340',
      'M 260 316 L 258 340',
      'M 240 340 C 244 344 252 344 258 340',
      'M 242 316 L 260 316'
    ], a);
    // Cup rim
    pp(g, ['M 240 316 C 244 314 252 314 260 316'], a);

    // Napkin/paper on table
    pp(g, ['M 268 326 L 298 326 L 300 340 L 266 340 Z'], a, lt);
    // Napkin fold line
    pp(g, ['M 280 326 L 282 340'], a, lt);

    // Bruno's left arm — gesturing hand with spread fingers
    pp(g, [
      'M 36 206 C 28 220 20 238 18 258 C 16 274 18 286 24 292'
    ], a);
    // Hand palm
    pp(g, [
      'M 24 292 C 30 296 38 294 44 288 C 50 282 54 272 56 262'
    ], a);
    // Index finger (pointing/gesturing)
    pp(g, [
      'M 28 288 C 22 282 18 274 16 268 C 14 264 16 260 20 260 C 24 260 26 264 26 270'
    ], a);
    // Middle finger
    pp(g, [
      'M 26 290 C 20 284 14 276 12 270 C 10 266 12 262 16 262 C 20 262 22 266 22 272'
    ], a);
    // Ring finger
    pp(g, [
      'M 26 294 C 20 290 16 282 14 276 C 12 272 14 268 18 268'
    ], a);
    // Thumb
    pp(g, [
      'M 34 290 C 36 284 40 278 44 274 C 46 272 48 274 48 278 C 48 282 44 288 40 292'
    ], a);

    // Third person (far right) — torso hint, no face
    pp(g, [
      'M 292 56 C 300 48 316 44 328 46 C 340 50 350 60 352 78 L 354 220 M 288 78 L 286 220'
    ], a, lt);
    // Third person neckline hint
    pp(g, ['M 306 56 C 312 52 320 52 326 56'], a, lt);
    // Third person hands gesturing
    pp(g, [
      'M 340 168 C 346 178 348 188 344 198',
      'M 294 174 C 290 182 288 192 290 200'
    ], a, lt);
    // Third person arm lines
    pp(g, [
      'M 348 120 C 346 140 344 158 340 168',
      'M 290 124 C 292 144 294 162 294 174'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — figures (skin, ears, clothing, third person)
  // =====================================================================
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // ----- Bruno -----
    // Bruno skin fill — face (radial gradient, light from left)
    const brunoSkin = a ? HL : gd(defs, 'r', [['0%','#F5CCA0'],['100%','#D8A060']], { cx: 80, cy: 95, r: 50 });
    fl(g,
      'M 58 96 C 56 72 64 52 78 44 C 90 38 100 40 108 48 C 116 58 120 74 118 92 C 118 108 116 120 110 130 C 106 138 100 146 94 152 C 90 156 86 158 82 156 C 76 152 70 144 64 134 C 58 124 56 110 58 96 Z',
      brunoSkin, a);
    // Bruno forehead highlight
    hi(g, 'M 72 48 C 80 44 92 42 100 46 C 94 44 82 46 76 50 Z', 0.15, false);
    // Bruno face shadow (right side)
    sh(g, 'M 108 58 C 116 68 118 82 118 96 C 118 108 116 118 112 126 L 110 124 C 114 116 116 106 116 94 C 116 80 114 66 106 56 Z', 0.08, false);

    // Bruno left ear fill (radial)
    const brunoEarL = gd(defs, 'r', [['0%','#EDBE8C'],['100%','#D0A060']], { cx: 50, cy: 100, r: 12 });
    fe(g, 'ellipse', { cx: 50, cy: 100, rx: 6, ry: 10, fill: brunoEarL }, false);
    // Bruno right ear fill
    const brunoEarR = gd(defs, 'r', [['0%','#EDBE8C'],['100%','#D0A060']], { cx: 124, cy: 98, r: 12 });
    fe(g, 'ellipse', { cx: 124, cy: 98, rx: 6, ry: 10, fill: brunoEarR }, false);
    // Bruno neck skin (gradient)
    const brunoNeck = gd(defs, 'l', [['0%','#DEB07A'],['100%','#C89860']], { x1: 87, y1: 154, x2: 87, y2: 172 });
    fe(g, 'rect', { x: 76, y: 154, width: 22, height: 18, rx: 4, fill: brunoNeck }, false);
    // Bruno eye whites
    fl(g, 'M 66 90 C 68 84 74 82 80 84 C 86 86 86 92 82 96 C 78 98 68 96 66 90 Z', '#FFFFFF', false);
    fl(g, 'M 92 88 C 94 82 100 80 106 82 C 112 84 112 90 108 94 C 104 96 94 94 92 88 Z', '#FFFFFF', false);

    // Bruno jacket fill — dark navy (gradient for depth)
    const jacketGrad = a ? HL : gd(defs, 'l', [['0%','#243442'],['100%','#0F1A22']], { x1: 32, y1: 270, x2: 140, y2: 270 });
    fl(g,
      'M 36 204 C 44 186 62 174 86 172 C 110 174 128 186 136 204 L 140 340 L 32 340 Z',
      jacketGrad, a);
    // Jacket fold shadows
    sh(g, 'M 56 210 C 58 230 56 260 54 290 L 50 290 C 52 260 54 230 52 210 Z', 0.1, false);
    sh(g, 'M 116 210 C 114 230 116 260 118 290 L 122 290 C 120 260 118 230 120 210 Z', 0.1, false);
    // Jacket shoulder highlight
    hi(g, 'M 58 190 C 68 182 78 176 86 174 C 78 178 68 184 60 192 Z', 0.08, false);

    // Collar fill
    fl(g,
      'M 70 174 C 66 170 60 170 58 176 C 56 182 60 186 66 184 C 74 188 82 190 88 190 C 94 190 100 188 106 184 C 112 186 116 182 114 176 C 112 170 106 170 102 174 Z',
      '#263842', false);
    // Orange shoulder patches (radial gradient, bright center)
    const patchGradL = a ? HL : gd(defs, 'r', [['0%','#FF8F00'],['100%','#E65100']], { cx: 50, cy: 213, r: 12 });
    fe(g, 'path', { d: 'M 42 210 L 58 206 L 58 216 L 42 220 Z', fill: patchGradL }, a);
    const patchGradR = a ? HL : gd(defs, 'r', [['0%','#FF8F00'],['100%','#E65100']], { cx: 122, cy: 213, r: 12 });
    fe(g, 'path', { d: 'M 130 210 L 114 206 L 114 216 L 130 220 Z', fill: patchGradR }, a);
    // Zipper strip (metallic gradient)
    const zipGrad = gd(defs, 'l', [['0%','#455A64'],['50%','#78909C'],['100%','#455A64']], { x1: 86, y1: 265, x2: 90, y2: 265 });
    fe(g, 'rect', { x: 86, y: 190, width: 4, height: 150, fill: zipGrad }, false);
    // Zipper pull fill
    fe(g, 'rect', { x: 84, y: 190, width: 8, height: 8, rx: 1, fill: '#FF6F00' }, false);

    // Bruno's left arm/hand skin
    fl(g,
      'M 24 280 C 18 272 14 264 16 258 C 18 250 22 260 28 272 C 32 280 36 288 40 292 C 34 294 28 292 24 280 Z',
      '#EDBE8C', false);
    // Bruno under-chin shadow
    sh(g, 'M 72 150 C 78 154 88 156 96 152 L 94 158 C 86 160 78 160 74 156 Z', 0.12, false);

    // ----- Miguel -----
    // Miguel skin fill — face (radial gradient + rosy warmth)
    const migSkin = a ? HL : gd(defs, 'r', [['0%','#F8DCC0'],['100%','#E0B888']], { cx: 216, cy: 110, r: 50 });
    fl(g,
      'M 190 110 C 190 88 200 72 216 68 C 232 72 242 88 242 110 C 244 126 240 140 234 148 C 228 154 222 160 216 162 C 210 160 204 154 198 148 C 192 140 188 126 190 110 Z',
      migSkin, a);
    // Miguel left ear fill (radial)
    const migEarL = gd(defs, 'r', [['0%','#F5D0A9'],['100%','#E0B888']], { cx: 184, cy: 118, r: 12 });
    fe(g, 'ellipse', { cx: 184, cy: 118, rx: 5, ry: 10, fill: migEarL }, false);
    // Miguel right ear fill
    const migEarR = gd(defs, 'r', [['0%','#F5D0A9'],['100%','#E0B888']], { cx: 248, cy: 116, r: 12 });
    fe(g, 'ellipse', { cx: 248, cy: 116, rx: 5, ry: 10, fill: migEarR }, false);
    // Miguel neck skin (gradient)
    const migNeck = gd(defs, 'l', [['0%','#F0C8A0'],['100%','#DCAA80']], { x1: 215, y1: 158, x2: 215, y2: 172 });
    fe(g, 'rect', { x: 206, y: 158, width: 18, height: 14, rx: 4, fill: migNeck }, false);
    // Miguel eye whites
    fl(g, 'M 200 108 C 202 104 208 102 212 104 C 216 106 216 112 212 114 C 208 116 200 114 200 108 Z', '#FFFFFF', false);
    fl(g, 'M 222 106 C 224 102 230 100 234 102 C 238 104 238 110 234 112 C 230 114 222 112 222 106 Z', '#FFFFFF', false);

    // Miguel sweater fill — navy blue (gradient for depth)
    const sweaterGrad = a ? HL : gd(defs, 'l', [['0%','#283593'],['100%','#0D1548']], { x1: 166, y1: 260, x2: 266, y2: 260 });
    fl(g,
      'M 170 200 C 180 182 198 172 216 172 C 234 172 252 182 262 200 L 266 340 L 166 340 Z',
      sweaterGrad, a);
    // Sweater fold shadows
    sh(g, 'M 190 210 C 192 230 190 260 188 290 L 184 290 C 186 260 188 230 186 210 Z', 0.08, false);
    sh(g, 'M 242 210 C 240 230 242 260 244 290 L 248 290 C 246 260 244 230 246 210 Z', 0.08, false);

    // Miguel hand skin fills (around toy area)
    fl(g,
      'M 198 254 C 192 248 186 250 184 256 C 182 262 186 268 192 266 L 198 256 Z',
      '#F5D0A9', false);
    fl(g,
      'M 234 252 C 240 246 246 248 248 254 C 250 260 246 264 240 262 L 234 252 Z',
      '#F5D0A9', false);
    // Miguel under-chin shadow
    sh(g, 'M 206 158 C 210 162 222 162 226 158 L 224 164 C 218 166 212 166 208 164 Z', 0.12, false);

    // ----- Third person -----
    // Third person torso fill — brown/tan sweater
    fl(g,
      'M 290 78 C 294 56 314 46 328 48 C 342 52 352 62 354 80 L 356 220 L 288 220 Z',
      '#795548', false);
  },

  // =====================================================================
  // Layer 8: Color fills — scene: table, objects, hair, toy, background
  // =====================================================================
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // Warm ambient background (radial gradient, warm center, cooler edges)
    const ambientGrad = gd(defs, 'r', [['0%','#FFF8E1',0.12],['100%','#E8E0D0',0.04]], { cx: 160, cy: 170, r: 200 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 340, fill: ambientGrad }, false);

    // Dark table/counter (gradient for depth)
    const tableGrad = a ? HL : gd(defs, 'l', [['0%','#37474F'],['100%','#263238']], { x1: 0, y1: 395, x2: 360, y2: 395 });
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: tableGrad }, a);
    // Table surface top highlight
    fe(g, 'rect', { x: 0, y: 336, width: 360, height: 4, fill: '#455A64' }, false);
    // Surface reflection band
    hi(g, 'M 40 342 C 80 340 120 341 160 342 L 160 344 C 120 343 80 342 40 344 Z', 0.06, false);
    hi(g, 'M 200 342 C 240 340 280 341 320 342 L 320 344 C 280 343 240 342 200 344 Z', 0.06, false);

    // Blue ball (radial gradient with offset highlight)
    const ballGrad = a ? HL : gd(defs, 'r', [['0%','#42A5F5'],['60%','#1E88E5'],['100%','#1565C0']], { cx: 175, cy: 322, r: 22 });
    fl(g,
      'M 160 332 C 160 324 170 316 180 316 C 190 316 200 324 200 332 C 200 338 190 340 180 340 C 170 340 160 338 160 332 Z',
      ballGrad, a);
    // Ball highlight
    fe(g, 'ellipse', { cx: 176, cy: 322, rx: 4, ry: 3, fill: '#90CAF9', opacity: '0.5' }, false);
    // Ball cast shadow
    sh(g, 'M 168 338 C 174 340 186 340 192 338 L 194 342 C 186 344 174 344 166 342 Z', 0.1, false);

    // White cup (gradient + rim highlight)
    const cupGrad = a ? HL : gd(defs, 'l', [['0%','#FAFAFA'],['100%','#E0E0E0']], { x1: 244, y1: 328, x2: 262, y2: 328 });
    fl(g,
      'M 244 318 L 242 338 C 246 342 254 342 260 338 L 262 318 Z',
      cupGrad, a);
    // Cup rim highlight
    hi(g, 'M 246 318 L 260 318 L 260 320 L 246 320 Z', 0.2, false);
    // Cup shadow
    fl(g,
      'M 244 330 C 248 332 254 332 260 330 L 262 338 C 258 342 248 342 242 338 Z',
      '#E0E0E0', false);

    // Toy halves — radial gradients per half
    const toyBlue = a ? HL : gd(defs, 'r', [['0%','#42A5F5'],['100%','#1565C0']], { cx: 208, cy: 258, r: 20 });
    fl(g,
      'M 198 262 C 198 254 206 246 216 246 L 216 276 C 206 276 198 270 198 262 Z',
      toyBlue, a);
    const toyRed = a ? HL : gd(defs, 'r', [['0%','#EF5350'],['100%','#C62828']], { cx: 226, cy: 258, r: 20 });
    fl(g,
      'M 216 246 C 226 246 234 254 234 262 C 234 270 226 276 216 276 Z',
      toyRed, a);
    // Toy dividing shadow
    sh(g, 'M 215 248 L 215 274 L 217 274 L 217 248 Z', 0.12, false);

    // Napkin fill
    fe(g, 'rect', { x: 269, y: 327, width: 30, height: 12, rx: 1, fill: '#FAFAFA' }, false);

    // Bruno hair fill (gradient crown to temple)
    const brunoHairGrad = gd(defs, 'l', [['0%','#4E3828'],['100%','#2E1C10']], { x1: 86, y1: 42, x2: 86, y2: 92 });
    fl(g,
      'M 60 92 C 58 76 64 58 78 48 C 92 42 104 44 112 54 C 118 64 120 78 118 90 L 114 88 C 116 78 112 66 106 58 C 100 50 90 46 80 48 C 70 52 62 64 60 78 Z',
      brunoHairGrad, false);

    // Miguel hair fill (gradient crown to temple)
    const migHairGrad = gd(defs, 'l', [['0%','#5D4037'],['100%','#3E2723']], { x1: 216, y1: 64, x2: 216, y2: 108 });
    fl(g,
      'M 194 106 C 192 90 200 74 214 68 C 228 64 240 68 248 78 C 254 88 256 98 252 108 L 248 104 C 250 96 248 86 244 80 C 238 72 228 68 218 70 C 208 74 200 82 196 94 Z',
      migHairGrad, false);

    // Cast shadows on table from figures
    sh(g, 'M 40 340 C 60 344 110 344 130 340 L 132 346 C 110 350 60 350 38 346 Z', 0.08, false);
    sh(g, 'M 170 340 C 190 344 240 344 260 340 L 262 346 C 240 350 190 350 168 346 Z', 0.08, false);

    // Background wooden wall panels (vertical lines, warm)
    pp(g, [
      'M 20 0 L 20 340',
      'M 60 0 L 60 172',
      'M 100 0 L 100 172',
      'M 140 0 L 140 340',
      'M 260 0 L 260 172',
      'M 300 0 L 300 340',
      'M 340 0 L 340 340'
    ], false, lt);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, text details, beard shadow, blush,
  //          cafe background, table reflection, final touches
  // =====================================================================
  (g, a) => {
    const defs = ce('defs', {}); g.appendChild(defs);

    // Eye shine glow — Bruno (soft glow behind dots)
    const eyeGlow = gf(defs, 2);
    fef(g, 'circle', { cx: 74, cy: 88, r: 3, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    fef(g, 'circle', { cx: 100, cy: 86, r: 3, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    // Eye shines — Bruno
    fe(g, 'circle', { cx: 74, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 100, cy: 86, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 78, cy: 92, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 104, cy: 90, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Eye shine glow — Miguel
    fef(g, 'circle', { cx: 206, cy: 109, r: 2.5, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    fef(g, 'circle', { cx: 228, cy: 107, r: 2.5, fill: 'white', opacity: '0.3', filter: eyeGlow }, false);
    // Eye shines — Miguel
    fe(g, 'circle', { cx: 206, cy: 109, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 228, cy: 107, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 210, cy: 112, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 232, cy: 110, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // PESSOAL text on Bruno's jacket
    const pt = ce('text', {
      x: 58, y: 242, fill: '#ECEFF1',
      'font-size': '5', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    pt.textContent = 'PESSOAL';
    if (a) pt.classList.add('active-element');
    g.appendChild(pt);
    // Refresh colored dots
    fe(g, 'circle', { cx: 64, cy: 246, r: 1.5, fill: '#FF8F00' }, false);
    fe(g, 'circle', { cx: 69, cy: 246, r: 1.5, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 74, cy: 246, r: 1.5, fill: '#42A5F5' }, false);

    // "95" on Miguel's sweater
    const t95f = ce('text', {
      x: 202, y: 222, fill: '#ECEFF1',
      'font-size': '16', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '1'
    });
    t95f.textContent = '95';
    if (a) t95f.classList.add('active-element');
    g.appendChild(t95f);
    const tyf = ce('text', {
      x: 207, y: 232, fill: '#B0BEC5',
      'font-size': '4.5', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '0.8'
    });
    tyf.textContent = 'YEARS';
    g.appendChild(tyf);

    // Beard shadow (gradient for smooth transition)
    const beardGrad = gd(defs, 'r', [['0%','#5D4037',0.3],['100%','#5D4037',0]], { cx: 86, cy: 144, r: 24 });
    fl(g,
      'M 64 134 C 70 142 78 150 86 154 C 94 150 100 142 106 134 C 102 142 96 148 88 152 C 80 148 72 142 64 134 Z',
      beardGrad, false);

    // Miguel cheek blush (radial gradient for natural falloff)
    const migBlushL = gd(defs, 'r', [['0%','#FFAB91',0.35],['100%','#FFAB91',0]], { cx: 202, cy: 128, r: 12 });
    fe(g, 'ellipse', { cx: 202, cy: 128, rx: 10, ry: 5, fill: migBlushL }, a);
    const migBlushR = gd(defs, 'r', [['0%','#FFAB91',0.35],['100%','#FFAB91',0]], { cx: 234, cy: 126, r: 12 });
    fe(g, 'ellipse', { cx: 234, cy: 126, rx: 10, ry: 5, fill: migBlushR }, a);

    // Bruno mouth interior color
    fl(g,
      'M 76 134 C 82 136 88 138 94 138 C 98 136 102 134 104 132 L 102 134 C 98 138 92 140 88 140 C 84 140 80 138 76 134 Z',
      '#E57373', false);

    // Cafe background hints — ceiling fluorescent light with glow
    const lightGlow = gf(defs, 3);
    pp(g, ['M 130 0 L 130 18', 'M 230 0 L 230 18'], a, lt);
    pp(g, ['M 130 18 L 230 18'], a, lt);
    fef(g, 'rect', { x: 132, y: 6, width: 96, height: 12, rx: 2, fill: '#FFF9C4', opacity: '0.15', filter: lightGlow }, false);
    fe(g, 'rect', { x: 132, y: 6, width: 96, height: 12, rx: 2, fill: '#FFF9C4', opacity: '0.2' }, false);
    // Light cone paths (subtle)
    fo(g, 'M 150 18 L 120 170 L 180 170 Z', '#FFF8E1', 0.03, false);
    fo(g, 'M 210 18 L 180 170 L 240 170 Z', '#FFF8E1', 0.03, false);

    // Wooden wall panel texture (warm wood grain accents)
    pp(g, [
      'M 22 40 C 24 60 22 80 24 100',
      'M 142 20 C 140 40 142 60 140 80',
      'M 302 30 C 300 50 302 70 300 90'
    ], false, lt);

    // Table reflection lines
    pp(g, [
      'M 40 358 C 80 354 120 356 160 358',
      'M 200 356 C 240 352 280 354 320 358'
    ], a, lt);

    // Finger skin fills for Miguel's hands
    fe(g, 'ellipse', { cx: 186, cy: 248, rx: 5, ry: 4, fill: '#F5D0A9', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 246, cy: 246, rx: 5, ry: 4, fill: '#F5D0A9', opacity: '0.6' }, false);

    // Bruno gesturing hand skin fill
    fe(g, 'ellipse', { cx: 24, cy: 276, rx: 10, ry: 12, fill: '#EDBE8C' }, false);

    // Toy highlight (subtle shine)
    fe(g, 'ellipse', { cx: 210, cy: 254, rx: 3, ry: 2, fill: '#64B5F6', opacity: '0.4' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 254, rx: 3, ry: 2, fill: '#EF9A9A', opacity: '0.4' }, false);

    // Warm light spots on faces
    const faceWarmB = gd(defs, 'r', [['0%','#FFF8E1',0.06],['100%','#FFF8E1',0]], { cx: 80, cy: 100, r: 40 });
    fe(g, 'ellipse', { cx: 80, cy: 100, rx: 40, ry: 35, fill: faceWarmB }, false);
    const faceWarmM = gd(defs, 'r', [['0%','#FFF8E1',0.06],['100%','#FFF8E1',0]], { cx: 216, cy: 115, r: 35 });
    fe(g, 'ellipse', { cx: 216, cy: 115, rx: 35, ry: 30, fill: faceWarmM }, false);

    // Vignette overlay
    const vignette = gd(defs, 'r', [['0%','#000000',0],['100%','#000000',0.06]], { cx: 180, cy: 200, r: 220 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: vignette }, false);

    // Third person collar/neckline detail
    pp(g, ['M 304 58 C 310 54 318 54 324 58'], false, lt);
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
const avoesduarteLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Floor / seat line
    pp(g, ['M 0 395 L 360 395'], a, lt);
    // Grandfather zone (center-left)
    pp(g, ['M 70 30 L 70 395', 'M 250 30 L 250 395'], a, lt);
    // Grandmother zone (right)
    pp(g, ['M 200 30 L 200 395', 'M 350 30 L 350 395'], a, lt);
    // Head-line guides
    pp(g, ['M 70 140 L 250 140'], a, lt);
    pp(g, ['M 200 150 L 350 150'], a, lt);
    // Baby zone on grandfather's lap
    pp(g, ['M 110 220 L 210 220', 'M 110 220 L 110 360', 'M 210 220 L 210 360'], a, lt);
    // Grandfather head center cross
    pp(g, ['M 160 70 L 160 170', 'M 120 120 L 200 120'], a, lt);
    // Grandmother head center cross
    pp(g, ['M 276 80 L 276 180', 'M 240 130 L 312 130'], a, lt);
  },

  // Layer 1: Bodies — proper seated proportions
  (g, a) => {
    // === GRANDFATHER (center-left) ===
    // Head — round, slightly wider face
    pp(g, [
      'M 160 68 C 130 68 116 88 116 112 C 116 136 130 156 148 162 C 154 164 157 166 160 167 C 163 166 166 164 172 162 C 190 156 204 136 204 112 C 204 88 190 68 160 68 Z'
    ], a);
    // Neck
    pp(g, ['M 148 165 L 146 182', 'M 172 165 L 174 182'], a);
    // Torso — seated, broad
    pp(g, [
      'M 100 210 C 112 192 136 182 160 182 C 184 182 208 192 220 210 L 224 395 L 96 395 Z'
    ], a);
    // Left arm resting / holding baby
    pp(g, ['M 104 214 C 96 228 90 248 88 268 C 86 284 88 296 92 306'], a);
    // Right arm on baby's other side
    pp(g, ['M 216 214 C 224 228 228 248 226 268 C 225 284 222 296 218 306'], a);

    // === GRANDMOTHER (right) ===
    // Head — slightly narrower, elegant
    pp(g, [
      'M 276 78 C 250 78 238 96 238 118 C 238 140 250 158 266 164 C 270 166 273 168 276 169 C 279 168 282 166 286 164 C 302 158 314 140 314 118 C 314 96 302 78 276 78 Z'
    ], a);
    // Neck
    pp(g, ['M 266 167 L 264 184', 'M 286 167 L 288 184'], a);
    // Torso — seated, slightly turned toward baby
    pp(g, [
      'M 232 212 C 242 196 258 186 276 186 C 294 186 310 196 320 212 L 324 395 L 228 395 Z'
    ], a);
    // Left arm
    pp(g, ['M 236 216 C 228 230 222 250 220 268'], a);
    // Right arm
    pp(g, ['M 316 216 C 324 230 328 248 330 266'], a);

    // === BABY MIGUEL (on grandfather's lap) ===
    // Head — large round baby head
    pp(g, [
      'M 160 228 C 140 228 130 242 130 258 C 130 274 140 290 152 296 C 156 298 158 299 160 300 C 162 299 164 298 168 296 C 180 290 190 274 190 258 C 190 242 180 228 160 228 Z'
    ], a);
    // Baby body — small torso on lap
    pp(g, [
      'M 142 298 L 140 310 C 140 316 146 320 160 320 C 174 316 180 310 178 298'
    ], a);
    // Baby legs dangling
    pp(g, [
      'M 140 318 C 136 334 130 350 128 368 C 127 376 130 384 136 388',
      'M 178 318 C 182 334 188 350 190 368 C 191 376 188 384 182 388'
    ], a);
  },

  // Layer 2: Faces — eyes, glasses, noses, mouths, goatee, baby smile
  (g, a) => {
    // === GRANDFATHER FACE ===
    // Eyes — almond shapes
    pp(g, [
      'M 140 110 C 142 104 148 102 153 106 C 158 110 156 116 152 118 C 148 120 140 116 140 110 Z',
      'M 168 110 C 170 104 176 102 181 106 C 186 110 184 116 180 118 C 176 120 168 116 168 110 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 149, cy: 111, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 177, cy: 111, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    // Glasses — rectangular, thick frames
    pp(g, [
      // Left lens
      'M 134 104 L 160 104 L 160 122 L 134 122 Z',
      // Right lens
      'M 164 104 L 190 104 L 190 122 L 164 122 Z',
      // Bridge
      'M 160 112 L 164 112',
      // Left arm
      'M 134 112 L 118 108',
      // Right arm
      'M 190 112 L 206 108'
    ], a);
    // Nose — wider, rounded
    pp(g, ['M 162 108 C 160 118 158 128 156 134', 'M 152 136 C 156 140 160 142 164 140 C 168 138 170 134 168 132'], a);
    // Mouth — warm, slight smile, looking down at baby
    pp(g, ['M 148 148 C 152 144 158 142 162 144 C 166 142 170 144 174 148'], a);
    pp(g, ['M 150 150 C 156 154 164 154 172 150'], a);
    // Goatee — multiple short strokes for texture
    pp(g, [
      'M 150 152 C 148 156 148 162 152 166',
      'M 154 152 C 152 158 152 164 156 168',
      'M 158 154 C 157 160 157 166 160 170',
      'M 164 154 C 165 160 165 166 162 170',
      'M 168 152 C 170 158 170 164 166 168',
      'M 172 150 C 174 156 174 162 170 166'
    ], a);
    // Chin outline through goatee
    pp(g, ['M 148 152 C 146 160 148 168 154 172 C 160 174 166 172 170 168 C 176 162 178 154 176 150'], a, lt);
    // Eyebrows — thick, expressive
    pp(g, ['M 136 100 C 142 96 150 95 158 98', 'M 166 98 C 174 95 182 96 188 100'], a);

    // === GRANDMOTHER FACE ===
    // Eyes — slightly smaller, elegant
    pp(g, [
      'M 258 116 C 260 110 266 108 271 112 C 276 116 274 122 270 124 C 266 126 258 122 258 116 Z',
      'M 282 116 C 284 110 290 108 295 112 C 300 116 298 122 294 124 C 290 126 282 122 282 116 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 267, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 291, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    // Glasses — rectangular, similar to grandfather
    pp(g, [
      // Left lens
      'M 254 110 L 278 110 L 278 126 L 254 126 Z',
      // Right lens
      'M 282 110 L 306 110 L 306 126 L 282 126 Z',
      // Bridge
      'M 278 118 L 282 118',
      // Left arm
      'M 254 118 L 240 114',
      // Right arm
      'M 306 118 L 320 114'
    ], a);
    // Eyebrows — thinner, arched
    pp(g, ['M 254 106 C 260 102 268 101 276 104', 'M 282 104 C 290 101 298 102 304 106'], a);
    // Nose — delicate
    pp(g, ['M 278 112 C 277 120 276 128 274 134', 'M 270 136 C 274 140 278 142 282 140'], a);
    // Mouth — warm smile, turned toward baby
    pp(g, ['M 264 148 C 268 144 274 142 278 144 C 282 142 286 144 290 148'], a);
    pp(g, ['M 266 150 C 272 156 280 156 288 150'], a);
    // Smile lines
    pp(g, ['M 260 146 C 258 142 258 138 260 136', 'M 294 146 C 296 142 296 138 294 136'], a, lt);

    // === BABY MIGUEL FACE ===
    // Eyes — big round baby eyes
    pp(g, [
      'M 144 254 C 146 248 152 246 157 250 C 162 254 160 260 156 262 C 152 264 144 260 144 254 Z',
      'M 166 254 C 168 248 174 246 179 250 C 184 254 182 260 178 262 C 174 264 166 260 166 254 Z'
    ], a);
    // Big round pupils
    fe(g, 'circle', { cx: 153, cy: 256, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 175, cy: 256, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    // Baby nose — tiny button
    pp(g, ['M 162 260 C 160 264 159 268 161 270 C 163 272 165 270 164 266'], a);
    // HUGE SMILE — mouth wide open with joy, teeth showing
    pp(g, [
      'M 146 276 C 150 272 156 270 160 272 C 164 270 170 272 176 276',
      'M 146 276 C 150 288 156 294 160 294 C 164 294 170 288 176 276'
    ], a);
    // Upper teeth — small rectangles
    pp(g, [
      'M 152 278 L 152 282 L 156 282 L 156 278',
      'M 158 278 L 158 282 L 162 282 L 162 278',
      'M 164 278 L 164 282 L 168 282 L 168 278'
    ], a);
    // Lower teeth hint
    pp(g, ['M 154 288 L 166 288'], a, lt);
    // Baby ears
    pp(g, [
      'M 130 254 C 124 250 120 256 120 264 C 120 272 124 278 130 278',
      'M 190 254 C 196 250 200 256 200 264 C 200 272 196 278 190 278'
    ], a);
    // Baby cheek lines
    pp(g, ['M 138 270 C 140 274 142 276 144 276', 'M 182 270 C 180 274 178 276 176 276'], a, lt);
  },

  // Layer 3: Hair and accessories
  (g, a) => {
    // === GRANDFATHER — bald dome with gray side hair ===
    // Bald dome outline — smooth curve over top of head
    pp(g, [
      'M 120 108 C 118 84 130 64 150 58 C 160 54 170 54 180 58 C 196 64 206 82 204 108'
    ], a);
    // Shine lines on bald head
    pp(g, [
      'M 140 72 C 150 66 168 64 178 70',
      'M 144 82 C 154 76 172 74 182 80'
    ], a, lt);
    // Left side hair — gray, short
    pp(g, [
      'M 116 106 C 114 112 112 120 114 128 C 115 134 116 140 118 144'
    ], a);
    // Right side hair
    pp(g, [
      'M 204 106 C 206 112 208 120 206 128 C 205 134 204 140 202 144'
    ], a);
    // Side hair texture — small strokes
    const gSideHair = [
      [114, 110], [113, 116], [114, 122], [115, 128], [116, 134],
      [205, 110], [206, 116], [205, 122], [204, 128], [203, 134]
    ];
    gSideHair.forEach(([cx, cy]) => {
      pp(g, [`M ${cx} ${cy} L ${cx - 2} ${cy + 4}`], a, lt);
    });
    // Ears — visible, slightly large (older man)
    pp(g, [
      'M 116 108 C 108 104 104 110 104 120 C 104 130 108 138 116 138',
      'M 204 108 C 212 104 216 110 216 120 C 216 130 212 138 204 138'
    ], a);

    // === GRANDMOTHER — long gray-blonde hair pulled back, volume ===
    // Top of hair with volume
    pp(g, [
      'M 242 114 C 240 90 250 72 268 66 C 280 62 292 64 302 72 C 312 80 318 94 316 114'
    ], a);
    // Hair texture — swept back
    pp(g, [
      'M 248 108 C 252 92 262 78 276 72 C 290 68 302 74 310 86 C 314 94 316 106 314 114',
      'M 256 82 C 266 74 282 70 294 78',
      'M 252 94 C 262 86 278 82 292 88'
    ], a, lt);
    // Hair flowing down past shoulders — long
    pp(g, [
      'M 242 118 C 238 132 234 150 232 168 C 230 186 228 200 226 214',
      'M 316 118 C 320 132 322 150 324 168 C 326 186 326 200 326 212'
    ], a);
    // Hair texture strands on sides
    pp(g, [
      'M 236 140 C 234 154 232 168 230 180',
      'M 318 140 C 320 154 322 168 324 180'
    ], a, lt);

    // === BABY — fine light hair ===
    pp(g, [
      'M 134 252 C 132 238 140 226 154 220 C 164 216 174 218 182 226 C 188 234 192 246 190 256'
    ], a);
    // Baby hair wisps
    pp(g, [
      'M 148 224 C 154 218 164 216 172 222',
      'M 142 232 C 148 226 158 222 168 226'
    ], a, lt);
  },

  // Layer 4: Clothing details
  (g, a) => {
    // === GRANDFATHER — striped shirt with collar open ===
    // Collar — open V-neck
    pp(g, [
      'M 142 184 C 136 180 130 182 128 188 L 136 200',
      'M 178 184 C 184 180 190 182 192 188 L 184 200'
    ], a);
    // Collar points
    pp(g, [
      'M 136 200 C 142 196 150 192 160 190 C 170 192 178 196 184 200'
    ], a);
    // Vertical stripes on shirt — blue/white pattern
    for (let x = 108; x <= 216; x += 10) {
      pp(g, [`M ${x} 210 L ${x} 395`], a, lt);
    }
    // Shirt seam at shoulder
    pp(g, ['M 104 212 C 108 208 114 206 120 206', 'M 216 212 C 212 208 206 206 200 206'], a, lt);
    // Sleeve edges
    pp(g, ['M 98 232 C 94 236 90 242 88 248', 'M 222 232 C 226 236 228 242 228 248'], a, lt);

    // === GRANDMOTHER — navy blouse with chiffon neckline ===
    // Shoulder seams
    pp(g, [
      'M 236 212 C 240 208 248 204 256 204',
      'M 316 212 C 312 208 304 204 296 204'
    ], a, lt);
    // Chiffon neckline — sheer overlay with delicate texture
    pp(g, [
      'M 256 190 C 262 194 270 198 276 198 C 282 198 290 194 296 190'
    ], a);
    // Chiffon texture — light, airy lines
    pp(g, [
      'M 258 192 C 264 196 272 200 278 198 C 284 196 290 192 294 188',
      'M 262 194 C 268 198 276 200 282 198 C 288 194 292 190 296 186',
      'M 260 190 C 266 192 274 196 280 194 C 286 192 290 188 294 184'
    ], a, lt);
    // Blouse V-neckline
    pp(g, ['M 258 196 C 264 204 270 210 276 212 C 282 210 288 204 294 196'], a);

    // === PEARL NECKLACE — loop of small circles ===
    for (let i = 0; i < 11; i++) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    }

    // === BABY CLOTHES ===
    // White shirt neckline
    pp(g, ['M 144 300 C 148 296 154 294 160 294 C 166 294 172 296 176 300'], a);
    // Baby white shirt
    pp(g, ['M 140 310 L 138 340', 'M 180 310 L 182 340'], a, lt);
    // Dark pants
    pp(g, ['M 138 340 L 134 368', 'M 182 340 L 186 368'], a, lt);
    // Pants waistband
    pp(g, ['M 136 338 L 184 338'], a);
  },

  // Layer 5: Hands, watch, baby hands/feet
  (g, a) => {
    // === GRANDFATHER HANDS — cradling baby with fingers ===
    // Left hand under baby
    pp(g, [
      'M 92 300 C 88 292 82 290 78 296 C 74 302 78 310 84 308 L 100 298'
    ], a);
    // Left hand fingers — individual
    pp(g, [
      'M 80 294 C 76 288 72 282 74 278 C 76 274 80 274 82 278',
      'M 78 298 C 72 294 68 286 70 282 C 72 278 76 278 78 282',
      'M 76 302 C 70 298 66 292 68 288 C 70 284 74 284 76 288',
      'M 82 306 C 78 304 74 300 74 296 C 76 292 80 292 82 296'
    ], a);
    // Thumb
    pp(g, ['M 86 292 C 90 286 94 284 96 288 C 98 292 94 296 90 296'], a);

    // Right hand on baby's side
    pp(g, [
      'M 218 300 C 222 292 228 290 232 296 C 236 302 232 310 226 308 L 210 298'
    ], a);
    // Right hand fingers
    pp(g, [
      'M 230 294 C 234 288 238 282 236 278 C 234 274 230 274 228 278',
      'M 232 298 C 238 294 242 286 240 282 C 238 278 234 278 232 282',
      'M 234 302 C 240 298 244 292 242 288 C 240 284 236 284 234 288',
      'M 228 306 C 232 304 236 300 236 296 C 234 292 230 292 228 296'
    ], a);
    // Thumb
    pp(g, ['M 224 292 C 220 286 216 284 214 288 C 212 292 216 296 220 296'], a);

    // Watch on grandfather's left wrist
    pp(g, ['M 86 280 L 96 278 L 98 286 L 88 288 Z'], a);
    // Watch band
    pp(g, ['M 84 282 L 80 278', 'M 90 290 L 94 296'], a, lt);
    // Watch face circle
    fe(g, 'circle', { cx: 92, cy: 283, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // === BABY TINY HANDS ===
    fe(g, 'circle', { cx: 136, cy: 310, r: 7, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 184, cy: 310, r: 7, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Tiny finger bumps on baby hands
    pp(g, [
      'M 130 306 C 128 304 128 302 130 300',
      'M 132 304 C 130 302 130 300 132 298',
      'M 190 306 C 192 304 192 302 190 300',
      'M 188 304 C 190 302 190 300 188 298'
    ], a, lt);

    // === BABY BARE FEET ===
    // Left foot
    pp(g, [
      'M 128 370 C 124 374 120 380 122 386 C 124 392 130 394 134 390 C 138 386 136 378 132 372'
    ], a);
    // Left toes
    pp(g, ['M 122 384 C 120 382 118 380 120 378', 'M 124 386 C 122 384 120 382 122 380'], a, lt);
    // Right foot
    pp(g, [
      'M 190 370 C 194 374 198 380 196 386 C 194 392 188 394 184 390 C 180 386 182 378 186 372'
    ], a);
    // Right toes
    pp(g, ['M 196 384 C 198 382 200 380 198 378', 'M 194 386 C 196 384 198 382 196 380'], a, lt);
  },

  // Layer 6: Background — stone wall, wooden door, flower boxes, bench
  (g, a) => {
    // === STONE WALL — irregular rectangles ===
    const stoneRows = [
      { y: 0, h: 32, offsets: [0, 58, 110, 175, 240, 300] },
      { y: 36, h: 30, offsets: [-15, 45, 105, 160, 225, 285, 345] },
      { y: 70, h: 34, offsets: [5, 65, 130, 195, 255, 320] },
      { y: 108, h: 28, offsets: [-10, 50, 115, 175, 240, 305] },
      { y: 140, h: 32, offsets: [0, 60, 125, 190, 250, 315] },
      { y: 176, h: 30, offsets: [-20, 42, 100, 165, 230, 290, 350] },
      { y: 210, h: 34, offsets: [10, 75, 140, 200, 265, 330] },
      { y: 248, h: 28, offsets: [-5, 55, 118, 180, 245, 310] },
      { y: 280, h: 32, offsets: [0, 62, 128, 192, 255, 318] },
      { y: 316, h: 30, offsets: [-12, 48, 110, 172, 238, 300] },
      { y: 350, h: 34, offsets: [8, 70, 135, 200, 260, 325] }
    ];
    stoneRows.forEach(row => {
      for (let i = 0; i < row.offsets.length - 1; i++) {
        const x1 = Math.max(0, row.offsets[i]);
        const x2 = Math.min(360, row.offsets[i + 1] - 4);
        const w = x2 - x1;
        if (w > 10) {
          pp(g, [`M ${x1} ${row.y} L ${x2} ${row.y} L ${x2} ${row.y + row.h} L ${x1} ${row.y + row.h} Z`], a, lt);
        }
      }
    });

    // === DARK WOODEN DOOR / WINDOW — behind left side ===
    pp(g, [
      'M 10 30 L 75 30 L 75 200 L 10 200 Z'
    ], a);
    // Door frame
    pp(g, [
      'M 10 30 L 75 30',
      'M 10 30 L 10 200',
      'M 75 30 L 75 200',
      'M 10 200 L 75 200'
    ], a);
    // Door center divider
    pp(g, ['M 42 30 L 42 200'], a);
    // Door wood grain
    pp(g, ['M 26 40 L 26 190', 'M 58 40 L 58 190'], a, lt);

    // === FLOWER BOXES with plants ===
    // Left flower box on wall
    pp(g, ['M 4 210 L 52 210 L 52 240 L 4 240 Z'], a);
    // Plants in left box — green stems and leaves
    pp(g, [
      'M 14 208 C 12 196 16 186 20 180 C 24 174 28 178 26 186',
      'M 28 208 C 26 194 30 184 34 178 C 38 172 42 176 40 184',
      'M 42 208 C 40 198 44 190 48 184 C 52 178 54 182 50 190'
    ], a);
    // Leaves
    pp(g, [
      'M 16 190 C 12 186 10 180 14 178 C 18 176 20 182 18 188',
      'M 34 186 C 30 182 28 176 32 174 C 36 172 38 178 36 184',
      'M 46 192 C 50 188 54 182 50 180 C 46 178 44 184 46 190'
    ], a);

    // Right flower box hint
    pp(g, ['M 336 240 L 358 240 L 358 268 L 336 268 Z'], a, lt);
    pp(g, [
      'M 342 238 C 340 228 344 220 348 214',
      'M 352 238 C 350 230 354 222 356 218'
    ], a, lt);

    // === SEAT / BENCH ===
    pp(g, ['M 86 388 L 230 388 L 230 395 L 86 395 Z'], a);
    // Bench legs
    pp(g, ['M 92 395 L 92 410', 'M 224 395 L 224 410'], a, lt);
    // Wooden pedestal hint (right side)
    pp(g, ['M 312 370 L 340 370 L 340 395 L 312 395 Z'], a, lt);
  },

  // Layer 7: Color — figures (skin, clothing base fills)
  (g, a) => {
    // === GRANDFATHER SKIN — warmer tone ===
    fl(g, 'M 160 68 C 130 68 116 88 116 112 C 116 136 130 156 148 162 C 154 164 157 166 160 167 C 163 166 166 164 172 162 C 190 156 204 136 204 112 C 204 88 190 68 160 68 Z', '#EDBE8C', a);
    // Ears skin
    fe(g, 'ellipse', { cx: 110, cy: 122, rx: 7, ry: 14, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 210, cy: 122, rx: 7, ry: 14, fill: '#EDBE8C' }, false);
    // Neck fill
    fe(g, 'rect', { x: 146, y: 164, width: 28, height: 20, rx: 5, fill: '#DEB07A' }, false);
    // Grandfather shirt — white base
    fl(g, 'M 100 210 C 112 192 136 182 160 182 C 184 182 208 192 220 210 L 224 395 L 96 395 Z', '#FAFAFA', a);

    // === GRANDMOTHER SKIN — lighter, elegant tone ===
    fl(g, 'M 276 78 C 250 78 238 96 238 118 C 238 140 250 158 266 164 C 270 166 273 168 276 169 C 279 168 282 166 286 164 C 302 158 314 140 314 118 C 314 96 302 78 276 78 Z', '#FADCC2', a);
    // Neck fill
    fe(g, 'rect', { x: 264, y: 166, width: 24, height: 20, rx: 5, fill: '#F0C8A8' }, false);
    // Grandmother blouse — navy blue
    fl(g, 'M 232 212 C 242 196 258 186 276 186 C 294 186 310 196 320 212 L 324 395 L 228 395 Z', '#1A237E', a);

    // === BABY SKIN — pinkish, soft ===
    fl(g, 'M 160 228 C 140 228 130 242 130 258 C 130 274 140 290 152 296 C 156 298 158 299 160 300 C 162 299 164 298 168 296 C 180 290 190 274 190 258 C 190 242 180 228 160 228 Z', '#F5D0A9', a);
    // Baby ears
    fe(g, 'ellipse', { cx: 125, cy: 264, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 195, cy: 264, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Baby white shirt
    fl(g, 'M 142 298 C 142 296 148 292 160 292 C 172 292 178 296 178 298 L 182 340 L 138 340 Z', '#FAFAFA', false);
    // Baby dark pants
    fl(g, 'M 136 338 L 134 370 L 186 370 L 184 338 Z', '#1A237E', false);
    // Baby feet skin
    fe(g, 'ellipse', { cx: 127, cy: 384, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 191, cy: 384, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
    // Baby hands skin
    fe(g, 'circle', { cx: 136, cy: 310, r: 7, fill: '#F5D0A9' }, false);
    fe(g, 'circle', { cx: 184, cy: 310, r: 7, fill: '#F5D0A9' }, false);
    // Grandfather hands skin
    fl(g, 'M 92 300 C 88 292 82 290 78 296 C 74 302 78 310 84 308 L 100 298 Z', '#DEB07A', false);
    fl(g, 'M 218 300 C 222 292 228 290 232 296 C 236 302 232 310 226 308 L 210 298 Z', '#DEB07A', false);
    // Grandfather arm skin
    fl(g, 'M 88 268 C 86 274 86 280 88 286 L 98 286 C 96 280 96 274 98 268 Z', '#DEB07A', false);
    fl(g, 'M 226 268 C 228 274 228 280 226 286 L 216 286 C 218 280 218 274 216 268 Z', '#DEB07A', false);
  },

  // Layer 8: Color — scene (wall, door, plants, hair, pearls, stripes)
  (g, a) => {
    // === STONE WALL fill — subtle texture ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 400, fill: '#A1887F', opacity: '0.12' }, a);
    // Individual stone tint variation
    const stoneTints = [
      { x: 5, y: 5, w: 52, h: 28, c: '#BCAAA4', o: '0.15' },
      { x: 115, y: 40, w: 48, h: 26, c: '#D7CCC8', o: '0.12' },
      { x: 200, y: 75, w: 52, h: 30, c: '#A1887F', o: '0.1' },
      { x: 70, y: 112, w: 50, h: 24, c: '#BCAAA4', o: '0.14' },
      { x: 260, y: 145, w: 48, h: 28, c: '#D7CCC8', o: '0.1' },
      { x: 10, y: 250, w: 46, h: 28, c: '#BCAAA4', o: '0.12' },
      { x: 320, y: 284, w: 38, h: 28, c: '#D7CCC8', o: '0.1' }
    ];
    stoneTints.forEach(s => {
      fe(g, 'rect', { x: s.x, y: s.y, width: s.w, height: s.h, rx: 2, fill: s.c, opacity: s.o }, false);
    });

    // === DARK WOODEN DOOR ===
    fe(g, 'rect', { x: 12, y: 32, width: 61, height: 166, rx: 2, fill: '#4E342E' }, a);
    // Door wood grain highlights
    fe(g, 'rect', { x: 14, y: 34, width: 26, height: 162, fill: '#5D4037', opacity: '0.5' }, false);
    fe(g, 'rect', { x: 44, y: 34, width: 26, height: 162, fill: '#5D4037', opacity: '0.5' }, false);

    // === FLOWER BOX ===
    fe(g, 'rect', { x: 6, y: 212, width: 44, height: 26, rx: 2, fill: '#795548' }, false);
    // Plant fills — green foliage
    fl(g, 'M 10 210 C 8 196 14 184 20 178 C 26 172 32 176 30 186 L 30 210 Z', '#4CAF50', false);
    fl(g, 'M 24 210 C 22 194 28 182 34 176 C 40 170 44 174 42 184 L 42 210 Z', '#388E3C', false);
    fl(g, 'M 38 210 C 36 200 40 190 46 184 C 50 180 54 184 50 192 L 50 210 Z', '#66BB6A', false);

    // === GRANDFATHER BALD HEAD — skin on top, gray on sides ===
    fl(g, 'M 120 108 C 118 84 130 64 150 58 C 160 54 170 54 180 58 C 196 64 206 82 204 108 L 200 106 C 202 86 192 70 178 62 C 168 58 152 60 142 68 C 132 76 124 90 122 106 Z', '#EDBE8C', false);
    // Gray side hair fill
    fe(g, 'rect', { x: 111, y: 106, width: 7, height: 34, rx: 2, fill: '#9E9E9E' }, false);
    fe(g, 'rect', { x: 202, y: 106, width: 7, height: 34, rx: 2, fill: '#9E9E9E' }, false);

    // === GRANDMOTHER HAIR fill ===
    fl(g, 'M 242 114 C 240 90 250 72 268 66 C 280 62 292 64 302 72 C 312 80 318 94 316 114 L 312 112 C 314 96 308 82 300 76 C 292 68 280 66 268 70 C 256 76 246 92 246 112 Z', '#B0A090', false);
    // Hair flowing down — side fills
    fl(g, 'M 242 118 C 238 132 234 150 232 168 C 230 186 228 200 226 214 L 230 214 C 232 200 234 186 236 168 C 238 150 240 134 244 118 Z', '#B0A090', false);
    fl(g, 'M 316 118 C 320 132 322 150 324 168 C 326 186 326 200 326 212 L 322 212 C 322 200 322 186 320 168 C 318 150 316 134 316 118 Z', '#B0A090', false);

    // === BABY HAIR fill ===
    fl(g, 'M 134 252 C 132 238 140 226 154 220 C 164 216 174 218 182 226 C 188 234 192 246 190 256 L 186 254 C 186 244 184 236 178 230 C 172 224 164 222 156 224 C 148 228 140 238 138 250 Z', '#A1887F', false);

    // === BENCH ===
    fe(g, 'rect', { x: 86, y: 388, width: 144, height: 7, rx: 2, fill: '#8D6E63' }, false);

    // === PEARL NECKLACE fills ===
    for (let i = 0; i < 11; i++) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2, fill: '#F5F5F5' }, false);
    }

    // === SHIRT STRIPE OVERLAYS (blue on white) ===
    for (let x = 108; x <= 214; x += 14) {
      fe(g, 'rect', { x, y: 210, width: 4, height: 185, fill: '#42A5F5', opacity: '0.25' }, false);
    }

    // === RIGHT FLOWER BOX ===
    fe(g, 'rect', { x: 338, y: 242, width: 18, height: 24, rx: 2, fill: '#795548', opacity: '0.6' }, false);
    fl(g, 'M 342 240 C 340 230 344 222 348 216 L 350 216 C 346 222 344 230 346 240 Z', '#4CAF50', false);

    // === PEDESTAL ===
    fe(g, 'rect', { x: 314, y: 372, width: 24, height: 23, rx: 2, fill: '#8D6E63', opacity: '0.5' }, false);
  },

  // Layer 9: Polish — eye shines, blush, reflections, goatee shadow, mouth color
  (g, a) => {
    // === EYE SHINES ===
    // Grandfather
    fe(g, 'circle', { cx: 147, cy: 109, r: 1.8, fill: 'white' }, a);
    fe(g, 'circle', { cx: 175, cy: 109, r: 1.8, fill: 'white' }, a);
    // Grandmother
    fe(g, 'circle', { cx: 265, cy: 116, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 289, cy: 116, r: 1.5, fill: 'white' }, a);
    // Baby — larger, more alive
    fe(g, 'circle', { cx: 151, cy: 254, r: 2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 173, cy: 254, r: 2, fill: 'white' }, a);

    // === BABY CHEEK BLUSH ===
    fe(g, 'ellipse', { cx: 140, cy: 274, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.45' }, a);
    fe(g, 'ellipse', { cx: 180, cy: 274, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.45' }, a);

    // === GLASSES REFLECTIONS ===
    // Grandfather — small white rectangles on lenses
    fe(g, 'rect', { x: 138, y: 106, width: 8, height: 4, rx: 1, fill: 'white', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 168, y: 106, width: 8, height: 4, rx: 1, fill: 'white', opacity: '0.25' }, false);
    // Grandmother
    fe(g, 'rect', { x: 258, y: 112, width: 7, height: 3, rx: 1, fill: 'white', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 286, y: 112, width: 7, height: 3, rx: 1, fill: 'white', opacity: '0.25' }, false);

    // === WATCH FILL ===
    fe(g, 'circle', { cx: 92, cy: 283, r: 3.5, fill: '#78909C' }, false);
    // Watch face detail
    fe(g, 'circle', { cx: 92, cy: 283, r: 1.5, fill: '#B0BEC5' }, false);
    // Watch band fill
    fe(g, 'rect', { x: 87, y: 278, width: 3, height: 6, rx: 1, fill: '#90A4AE' }, false);
    fe(g, 'rect', { x: 92, y: 288, width: 3, height: 6, rx: 1, fill: '#90A4AE' }, false);

    // === BABY MOUTH COLOR — huge open smile ===
    fl(g, 'M 146 276 C 150 288 156 294 160 294 C 164 294 170 288 176 276 Z', '#E57373', false);
    // Inside mouth — darker
    fl(g, 'M 150 280 C 154 290 158 292 160 292 C 162 292 166 290 170 280 Z', '#C62828', false);
    // Teeth fill — white
    fl(g, 'M 152 278 L 168 278 L 168 282 L 152 282 Z', '#FAFAFA', false);

    // === GRANDFATHER GOATEE SHADOW FILL ===
    fl(g, 'M 148 152 C 146 158 148 166 154 172 C 160 176 168 174 172 168 C 178 160 180 152 178 148 C 172 152 164 156 158 154 Z', '#9E9E9E', false);
    // Goatee texture overlay — slightly darker patches
    fl(g, 'M 152 156 C 150 162 152 168 158 172 C 162 174 166 172 168 168 C 172 162 174 156 172 152 Z', '#757575', false);

    // === GRANDMOTHER SMILE ===
    fl(g, 'M 266 150 C 272 156 280 156 288 150 Z', '#E57373', false);

    // === GRANDMOTHER BLOUSE NECKLINE SHEER EFFECT ===
    fe(g, 'ellipse', { cx: 276, cy: 196, rx: 20, ry: 8, fill: '#283593', opacity: '0.3' }, false);

    // === PEARL HIGHLIGHTS ===
    for (let i = 0; i < 11; i += 3) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 0.8, fill: 'white', opacity: '0.7' }, false);
    }

    // === BALD HEAD SHINE ===
    fe(g, 'ellipse', { cx: 160, cy: 72, rx: 18, ry: 6, fill: 'white', opacity: '0.08' }, false);

    // === WARM EXPRESSION LINES ===
    // Grandfather smile lines (gentle)
    pp(g, ['M 142 146 C 140 142 140 138 142 134', 'M 178 146 C 180 142 180 138 178 134'], a, lt);
    // Grandmother crow's feet (gentle, elegant)
    pp(g, ['M 254 120 C 252 118 250 116 250 114', 'M 308 120 C 310 118 312 116 312 114'], a, lt);
  }
];

const avosdiasLayers = [
  // =============================================
  // Layer 0: Composition guides
  // =============================================
  (g, a) => {
    // Awning baseline
    pp(g, ['M 0 80 L 360 80'], a, lt);
    // Grandmother zone (left)
    pp(g, ['M 50 80 L 50 440', 'M 160 80 L 160 440'], a, lt);
    // Grandfather zone (right)
    pp(g, ['M 200 80 L 200 440', 'M 310 80 L 310 440'], a, lt);
    // Head alignment line
    pp(g, ['M 50 130 L 310 130'], a, lt);
    // Baby zone in grandmother's arms
    pp(g, ['M 70 220 L 150 220', 'M 70 320 L 150 320'], a, lt);
    // Center vertical
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Awning curve guide
    pp(g, ['M 0 76 C 60 60 120 68 180 58 C 240 48 300 60 360 72'], a, lt);
    // Shoulder line
    pp(g, ['M 60 200 L 300 200'], a, lt);
  },

  // =============================================
  // Layer 1: Body outlines for all 3 figures
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER (left, x~80-140) ---
    // Head - slightly wider, rounder face for heavier build
    pp(g, [
      'M 110 100 C 90 100 76 112 74 130 C 72 148 80 164 92 172 C 98 176 104 180 110 182 C 116 180 122 176 128 172 C 140 164 148 148 146 130 C 144 112 130 100 110 100 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 74 130 C 68 126 64 132 64 140 C 64 148 68 154 74 152'
    ], a);
    // Right ear
    pp(g, [
      'M 146 130 C 152 126 156 132 156 140 C 156 148 152 154 146 152'
    ], a);
    // Neck - slightly wider for heavier build
    pp(g, ['M 100 180 L 98 196', 'M 120 180 L 122 196'], a);
    // Shoulders and torso - slightly heavier build, sleeveless
    pp(g, [
      'M 60 224 C 68 208 86 196 110 196 C 134 196 152 208 160 224 L 164 440 M 60 224 L 56 440'
    ], a);
    // Left arm (bare, holding baby from outside)
    pp(g, [
      'M 62 228 C 54 244 48 264 48 282 C 48 296 50 306 54 314 C 56 318 60 322 64 320 C 68 318 72 310 74 300'
    ], a);
    // Right arm (bare, holding baby from other side)
    pp(g, [
      'M 158 228 C 166 244 172 264 172 282 C 172 296 170 306 166 314 C 164 318 160 322 156 320 C 152 318 148 310 146 300'
    ], a);

    // --- BABY MIGUEL (center-left, in grandmother's arms) ---
    // Head - round baby head
    pp(g, [
      'M 106 232 C 92 232 82 242 80 254 C 78 266 84 278 94 284 C 98 286 102 288 106 288 C 110 288 114 286 118 284 C 128 278 134 266 132 254 C 130 242 120 232 106 232 Z'
    ], a);
    // Baby body (small, in white outfit)
    pp(g, [
      'M 94 292 C 98 288 102 286 106 286 C 110 286 114 288 118 292 L 122 350 M 94 292 L 90 350'
    ], a);
    // Baby left leg
    pp(g, [
      'M 92 346 C 88 354 86 362 88 366 C 90 370 94 368 96 362'
    ], a);
    // Baby right leg
    pp(g, [
      'M 120 346 C 124 354 126 362 124 366 C 122 370 118 368 116 362'
    ], a);

    // --- GRANDFATHER (right, x~220-290) ---
    // Head - angular, lean face
    pp(g, [
      'M 258 90 C 240 90 228 102 226 118 C 224 134 230 150 240 158 C 246 162 252 166 258 168 C 264 166 270 162 276 158 C 286 150 292 134 290 118 C 288 102 276 90 258 90 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 226 118 C 220 114 216 120 216 128 C 216 136 220 142 226 140'
    ], a);
    // Right ear
    pp(g, [
      'M 290 118 C 296 114 300 120 300 128 C 300 136 296 142 290 140'
    ], a);
    // Neck - lean
    pp(g, ['M 250 166 L 248 182', 'M 266 166 L 268 182'], a);
    // Shoulders and torso - tall, lean build
    pp(g, [
      'M 214 210 C 222 194 240 182 258 182 C 276 182 294 194 302 210 L 308 440 M 214 210 L 208 440'
    ], a);
    // Left arm
    pp(g, [
      'M 216 214 C 208 228 204 244 204 258 C 204 270 206 280 210 286'
    ], a);
    // Right arm
    pp(g, [
      'M 300 214 C 308 228 312 244 312 258 C 312 270 310 280 306 286'
    ], a);
  },

  // =============================================
  // Layer 2: Face details - eyes, glasses, nose, mouth
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER FACE ---
    // Left eye - almond shape with eyelid curve
    pp(g, [
      'M 92 128 C 94 123 99 120 104 120 C 109 120 114 123 116 128 C 114 133 109 136 104 136 C 99 136 94 133 92 128 Z'
    ], a);
    // Left upper eyelid crease
    pp(g, ['M 92 124 C 96 119 102 117 108 117 C 112 117 116 119 118 122'], a, lt);
    // Left iris
    fe(g, 'circle', { cx: 104, cy: 128, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Left pupil
    fe(g, 'circle', { cx: 104, cy: 128, r: 2.2, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 104 128 C 106 123 111 120 116 120 C 121 120 126 123 128 128 C 126 133 121 136 116 136 C 111 136 106 133 104 128 Z'
    ], a);
    // Right upper eyelid crease
    pp(g, ['M 102 124 C 106 119 112 117 118 117 C 122 117 126 119 128 122'], a, lt);
    // Right iris
    fe(g, 'circle', { cx: 116, cy: 128, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Right pupil
    fe(g, 'circle', { cx: 116, cy: 128, r: 2.2, fill: a ? HL : '#3E2518' }, a);

    // Glasses - rectangular frames
    // Left lens frame
    pp(g, [
      'M 86 120 L 110 120 C 112 120 114 122 114 124 L 114 138 C 114 140 112 142 110 142 L 86 142 C 84 142 82 140 82 138 L 82 124 C 82 122 84 120 86 120 Z'
    ], a);
    // Right lens frame
    pp(g, [
      'M 108 120 L 132 120 C 134 120 136 122 136 124 L 136 138 C 136 140 134 142 132 142 L 108 142 C 106 142 104 140 104 138 L 104 124 C 104 122 106 120 108 120 Z'
    ], a);
    // Bridge between lenses
    pp(g, ['M 114 130 L 104 130'], a);
    // Left arm of glasses
    pp(g, ['M 82 130 L 74 128'], a);
    // Right arm of glasses
    pp(g, ['M 136 130 L 146 128'], a);

    // Grandmother nose - defined bridge and nostrils
    pp(g, [
      'M 108 134 C 107 140 106 148 105 152',
      'M 100 156 C 103 160 107 162 110 162 C 113 160 116 158 118 156',
      'M 102 156 C 104 154 106 153 108 154',
      'M 112 154 C 114 153 116 154 118 156'
    ], a);
    // Grandmother warm smile - with lip definition
    pp(g, [
      'M 94 166 C 98 162 104 160 110 160 C 116 160 122 162 126 166'
    ], a);
    pp(g, [
      'M 94 166 C 100 172 106 176 110 176 C 114 176 120 172 126 166'
    ], a);
    // Upper lip shape
    pp(g, [
      'M 98 164 C 102 162 106 160 110 161 C 114 160 118 162 122 164'
    ], a);
    // Smile lines (nasolabial folds)
    pp(g, [
      'M 90 148 C 88 154 88 160 90 166',
      'M 130 148 C 132 154 132 160 130 166'
    ], a, lt);
    // Fine wrinkles at eye corners
    pp(g, [
      'M 80 126 C 78 124 76 124 74 126',
      'M 80 130 C 78 130 76 132 74 134',
      'M 138 126 C 140 124 142 124 144 126',
      'M 138 130 C 140 130 142 132 144 134'
    ], a, lt);

    // --- GRANDFATHER FACE ---
    // THICK EYEBROWS - his most distinctive feature (double lines + fill)
    // Left eyebrow - thick, bold, dark
    pp(g, [
      'M 236 106 C 242 100 252 98 260 102'
    ], a);
    pp(g, [
      'M 236 110 C 242 104 252 102 260 106'
    ], a);
    // Fill path for left eyebrow
    fl(g, 'M 236 106 C 242 100 252 98 260 102 L 260 106 C 252 102 242 104 236 110 Z', a ? HL : '#2D2D2D', a);
    // Right eyebrow - thick, bold, dark
    pp(g, [
      'M 256 102 C 264 98 274 100 280 106'
    ], a);
    pp(g, [
      'M 256 106 C 264 102 274 104 280 110'
    ], a);
    // Fill path for right eyebrow
    fl(g, 'M 256 102 C 264 98 274 100 280 106 L 280 110 C 274 104 264 102 256 106 Z', a ? HL : '#2D2D2D', a);
    // Additional brow thickness strokes
    pp(g, [
      'M 238 108 C 244 102 254 100 260 104',
      'M 258 104 C 266 100 276 102 280 108'
    ], a);

    // Left eye - with eyelid detail
    pp(g, [
      'M 240 116 C 242 111 248 108 254 108 C 260 108 266 111 268 116 C 266 121 260 124 254 124 C 248 124 242 121 240 116 Z'
    ], a);
    // Left upper eyelid
    pp(g, ['M 238 112 C 244 107 252 105 258 106 C 264 107 268 110 270 114'], a, lt);
    // Left iris
    fe(g, 'circle', { cx: 254, cy: 116, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Left pupil
    fe(g, 'circle', { cx: 254, cy: 116, r: 2.2, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 254 116 C 256 111 262 108 268 108 C 274 108 280 111 282 116 C 280 121 274 124 268 124 C 262 124 256 121 254 116 Z'
    ], a);
    // Right upper eyelid
    pp(g, ['M 252 112 C 258 107 266 105 272 106 C 278 107 282 110 284 114'], a, lt);
    // Right iris
    fe(g, 'circle', { cx: 268, cy: 116, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Right pupil
    fe(g, 'circle', { cx: 268, cy: 116, r: 2.2, fill: a ? HL : '#3E2518' }, a);

    // Grandfather strong nose - prominent with bridge detail
    pp(g, [
      'M 260 108 C 259 116 258 126 257 132',
      'M 250 136 C 254 142 258 144 262 144 C 266 142 268 140 270 136',
      'M 252 136 C 254 134 258 133 260 134',
      'M 264 134 C 266 133 268 134 270 136'
    ], a);

    // Grandfather composed expression / slight smile
    pp(g, [
      'M 246 152 C 250 148 256 146 260 148 C 264 146 270 148 274 152'
    ], a);
    pp(g, [
      'M 248 154 C 252 158 258 160 262 158 C 266 156 270 154'
    ], a);
    // Defined jawline (lean angular face)
    pp(g, [
      'M 228 138 C 232 154 240 164 250 168',
      'M 288 138 C 284 154 276 164 266 168'
    ], a, lt);
    // Subtle forehead lines
    pp(g, [
      'M 242 96 C 250 94 262 94 274 96',
      'M 244 100 C 252 98 264 98 272 100'
    ], a, lt);

    // --- BABY MIGUEL FACE ---
    // Left eye - big baby eyes
    pp(g, [
      'M 94 252 C 96 248 100 246 104 246 C 108 246 112 248 114 252 C 112 256 108 258 104 258 C 100 258 96 256 94 252 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 104, cy: 253, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 100 252 C 102 248 106 246 110 246 C 114 246 118 248 120 252 C 118 256 114 258 110 258 C 106 258 102 256 100 252 Z'
    ], a);
    // Right pupil
    fe(g, 'circle', { cx: 110, cy: 253, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Baby tiny nose
    pp(g, [
      'M 106 260 C 105 262 104 264 105 266 C 106 268 108 268 109 266 C 110 264 109 262 108 260'
    ], a);
    // Baby calm little mouth
    pp(g, [
      'M 100 272 C 103 270 107 270 110 272',
      'M 102 273 C 105 276 109 276 112 273'
    ], a);
    // Baby left ear
    pp(g, [
      'M 80 254 C 76 250 74 254 74 260 C 74 266 76 270 80 268'
    ], a);
    // Baby right ear
    pp(g, [
      'M 132 254 C 136 250 138 254 138 260 C 138 266 136 270 132 268'
    ], a);
  },

  // =============================================
  // Layer 3: Hair details
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER curly gray-brown hair with volume ---
    // Main hair outline - short curly volume
    pp(g, [
      'M 74 126 C 70 110 76 96 88 90 C 100 84 114 82 126 86 C 138 90 148 100 150 114 C 152 122 150 130 148 136'
    ], a);
    // Individual curls on top
    pp(g, [
      'M 82 96 C 80 90 84 84 90 86 C 94 88 92 94 86 96',
      'M 92 88 C 90 82 94 76 100 78 C 104 80 102 86 96 88',
      'M 102 84 C 100 78 104 72 110 74 C 114 76 112 82 106 84',
      'M 112 84 C 110 78 114 72 120 74 C 124 76 122 82 116 84',
      'M 122 88 C 120 82 124 76 130 78 C 134 80 132 86 126 88',
      'M 130 94 C 128 88 132 82 138 84 C 142 86 140 92 134 94'
    ], a);
    // Curls on left side
    pp(g, [
      'M 72 108 C 68 104 66 110 68 116 C 70 120 74 118 74 114',
      'M 70 120 C 66 118 64 124 66 130 C 68 134 72 132 72 128',
      'M 68 134 C 64 132 62 138 64 144 C 66 148 70 146 70 142'
    ], a);
    // Curls on right side
    pp(g, [
      'M 148 110 C 152 106 154 112 152 118 C 150 122 146 120 146 116',
      'M 150 122 C 154 120 156 126 154 132 C 152 136 148 134 148 130',
      'M 152 134 C 156 132 158 138 156 144 C 154 148 150 146 150 142'
    ], a);
    // Hair texture wisps
    pp(g, [
      'M 88 92 C 94 86 102 84 108 86',
      'M 96 82 C 104 78 114 78 122 82',
      'M 76 102 C 82 94 92 88 100 86'
    ], a, lt);

    // --- GRANDFATHER short gray/salt-and-pepper hair ---
    // Main hair outline
    pp(g, [
      'M 226 114 C 224 100 230 88 242 82 C 254 76 268 74 278 78 C 288 82 294 92 294 104 C 294 112 292 118 290 122'
    ], a);
    // Short textured strokes
    pp(g, [
      'M 248 82 C 254 78 264 76 272 80',
      'M 240 88 C 248 82 260 80 270 84',
      'M 234 96 C 242 88 254 86 266 90',
      'M 232 104 C 238 96 248 92 258 94'
    ], a, lt);
    // Hair at temples (short, neat)
    pp(g, [
      'M 224 108 C 222 102 224 96 228 92',
      'M 292 108 C 294 102 292 96 288 92'
    ], a, lt);
    // Textured short hair top
    pp(g, [
      'M 242 78 C 244 74 248 72 252 74',
      'M 254 76 C 258 72 264 72 268 76',
      'M 272 78 C 276 74 280 76 282 80'
    ], a);

    // --- BABY fine light hair ---
    pp(g, [
      'M 84 250 C 82 240 88 232 98 228 C 108 224 118 226 126 232 C 132 238 134 246 132 254'
    ], a);
    // Wispy baby hair
    pp(g, [
      'M 96 230 C 100 226 108 224 114 228',
      'M 92 236 C 98 230 106 228 112 232',
      'M 100 226 C 104 222 110 222 114 226'
    ], a, lt);
  },

  // =============================================
  // Layer 4: Clothing details
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER teal sleeveless tank top ---
    // Tank top straps
    pp(g, [
      'M 92 196 C 88 192 84 194 82 200 L 80 212',
      'M 128 196 C 132 192 136 194 138 200 L 140 212'
    ], a);
    // Neckline - V or scoop
    pp(g, [
      'M 84 210 C 90 214 100 218 110 218 C 120 218 130 214 136 210'
    ], a);
    // Tank top body / side seams
    pp(g, [
      'M 80 212 L 56 440',
      'M 140 212 L 164 440'
    ], a, lt);
    // Fabric wrinkles on torso
    pp(g, [
      'M 88 240 C 98 244 108 244 118 240',
      'M 82 270 C 94 276 110 276 128 270',
      'M 78 310 C 92 316 112 316 132 310',
      'M 86 350 C 98 354 114 354 126 350'
    ], a, lt);
    // Arm hole definition
    pp(g, [
      'M 80 212 C 72 218 66 226 62 236',
      'M 140 212 C 148 218 154 226 158 236'
    ], a, lt);

    // Gold chain necklace
    pp(g, ['M 96 200 C 100 204 106 208 110 210 C 114 208 120 204 124 200'], a);
    // Chain links (small ovals)
    pp(g, [
      'M 100 202 C 101 204 103 206 105 206 C 107 206 109 204 110 202',
      'M 110 204 C 111 206 113 208 115 208 C 117 208 119 206 120 204'
    ], a, lt);
    // Pendant hanging
    pp(g, ['M 110 210 L 110 222'], a);
    // Pendant (teardrop / oval)
    pp(g, [
      'M 110 222 C 106 224 104 228 106 232 C 108 236 112 236 114 232 C 116 228 114 224 110 222 Z'
    ], a);

    // --- GRANDFATHER white polo shirt ---
    // Collar - prominent fold-over polo collar
    pp(g, [
      'M 242 184 C 248 190 254 192 258 192 C 262 192 268 190 274 184'
    ], a);
    // Left collar point
    pp(g, [
      'M 240 184 C 236 180 232 182 230 186 C 228 192 232 196 238 194 L 244 188'
    ], a);
    // Right collar point
    pp(g, [
      'M 276 184 C 280 180 284 182 286 186 C 288 192 284 196 278 194 L 272 188'
    ], a);
    // Polo button placket
    pp(g, ['M 258 192 L 258 230'], a);
    // Buttons
    fe(g, 'circle', { cx: 258, cy: 200, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 212, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Sleeve hems
    pp(g, [
      'M 216 220 C 214 224 212 228 212 232',
      'M 300 220 C 302 224 304 228 304 232'
    ], a);
    // Shirt body wrinkles
    pp(g, [
      'M 240 240 C 250 244 266 244 276 240',
      'M 232 280 C 246 286 270 286 284 280',
      'M 226 330 C 242 336 274 336 290 330'
    ], a, lt);

    // --- BABY white ceremony outfit ---
    // Baby collar / neckline
    pp(g, [
      'M 94 290 C 98 286 104 284 106 284 C 108 284 114 286 118 290'
    ], a);
    // Small collar detail
    pp(g, [
      'M 96 288 C 94 286 92 288 94 290',
      'M 116 288 C 118 286 120 288 118 290'
    ], a);
    // Baby shirt texture lines
    pp(g, [
      'M 96 304 C 102 306 110 306 116 304',
      'M 94 318 C 100 320 112 320 118 318',
      'M 92 334 C 100 336 112 336 120 334'
    ], a, lt);
    // Bloomers / shorts bottom edge
    pp(g, [
      'M 90 344 C 88 348 88 352 90 354 L 92 350',
      'M 122 344 C 124 348 124 352 122 354 L 120 350'
    ], a, lt);
  },

  // =============================================
  // Layer 5: Hands, arms detail, objects
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER arms cradling baby ---
    // Left arm detail with forearm curve
    pp(g, [
      'M 62 228 C 56 242 50 258 48 274 C 46 286 48 296 52 306',
      'M 52 306 C 56 312 62 316 66 314 C 70 312 72 306 74 296'
    ], a);
    // Left hand - fingers cradling baby's bottom
    pp(g, [
      'M 74 296 C 76 292 80 290 84 292',
      'M 84 292 C 88 294 90 298 88 302',
      'M 74 300 C 76 296 80 294 82 296',
      'M 82 296 C 86 298 86 302 84 306',
      'M 72 304 C 74 300 76 298 78 300',
      'M 78 300 C 80 304 78 308 76 310'
    ], a);
    // Thumb
    pp(g, [
      'M 68 310 C 66 306 64 302 66 298 C 68 294 72 294 74 298'
    ], a);
    // Bordeaux nails on left hand
    const nailsL = [[86, 294], [82, 298], [78, 302], [76, 306], [70, 300]];
    nailsL.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 1.4, fill: a ? HL : '#800020' }, a));

    // Right arm detail
    pp(g, [
      'M 158 228 C 164 242 170 258 172 274 C 174 286 172 296 168 306',
      'M 168 306 C 164 312 158 316 154 314 C 150 312 148 306 146 296'
    ], a);
    // Right hand - fingers supporting baby's back
    pp(g, [
      'M 146 296 C 144 292 140 290 136 292',
      'M 136 292 C 132 294 130 298 132 302',
      'M 146 300 C 144 296 140 294 138 296',
      'M 138 296 C 134 298 134 302 136 306',
      'M 148 304 C 146 300 144 298 142 300',
      'M 142 300 C 140 304 142 308 144 310'
    ], a);
    // Thumb
    pp(g, [
      'M 152 310 C 154 306 156 302 154 298 C 152 294 148 294 146 298'
    ], a);
    // Bordeaux nails on right hand
    const nailsR = [[134, 294], [138, 298], [142, 302], [144, 306], [150, 300]];
    nailsR.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 1.4, fill: a ? HL : '#800020' }, a));

    // --- BABY's hands ---
    // Baby left hand (small, chubby)
    pp(g, [
      'M 90 310 C 86 308 84 312 86 316 C 88 320 92 320 94 316'
    ], a);
    // Baby right hand holding small yellow-green object
    pp(g, [
      'M 122 310 C 126 308 128 312 126 316 C 124 320 120 320 118 316'
    ], a);
    // Yellow-green object in baby's hand
    fe(g, 'ellipse', { cx: 128, cy: 314, rx: 6, ry: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // --- GRANDFATHER hands ---
    // Left hand at side
    pp(g, [
      'M 210 286 C 208 292 206 298 208 302',
      'M 208 302 C 210 306 214 308 216 304',
      'M 210 296 C 208 300 210 304 212 306',
      'M 212 292 C 210 296 212 300 214 302',
      'M 214 290 C 212 294 214 298 216 300',
      'M 216 288 C 214 292 216 296 218 298'
    ], a);
    // Right hand at side
    pp(g, [
      'M 306 286 C 308 292 310 298 308 302',
      'M 308 302 C 306 306 302 308 300 304',
      'M 306 296 C 308 300 306 304 304 306',
      'M 304 292 C 306 296 304 300 302 302',
      'M 302 290 C 304 294 302 298 300 300',
      'M 300 288 C 302 292 300 296 298 298'
    ], a);
  },

  // =============================================
  // Layer 6: Background - awning, restaurant, greenery
  // =============================================
  (g, a) => {
    // --- Decorative fabric awning ---
    // Awning main curve (top)
    pp(g, [
      'M 0 20 C 30 14 60 18 90 12 C 120 6 150 10 180 8 C 210 10 240 4 270 10 C 300 16 330 12 360 18'
    ], a);
    // Awning bottom scalloped edge
    pp(g, [
      'M 0 76 C 15 86 30 86 45 76 C 60 86 75 86 90 76 C 105 86 120 86 135 76 C 150 86 165 86 180 76 C 195 86 210 86 225 76 C 240 86 255 86 270 76 C 285 86 300 86 315 76 C 330 86 345 86 360 76'
    ], a);
    // Vertical stripes in awning
    for (let x = 0; x < 370; x += 24) {
      pp(g, [`M ${x} 20 L ${x} 78`], a, lt);
    }
    // Awning pattern - wavy decorative lines
    pp(g, [
      'M 0 36 C 30 30 60 34 90 28 C 120 22 150 26 180 24 C 210 26 240 20 270 26 C 300 32 330 28 360 34',
      'M 0 52 C 30 46 60 50 90 44 C 120 38 150 42 180 40 C 210 42 240 36 270 42 C 300 48 330 44 360 50',
      'M 0 64 C 30 58 60 62 90 56 C 120 50 150 54 180 52 C 210 54 240 48 270 54 C 300 60 330 56 360 62'
    ], a, lt);

    // Lamp hanging from awning
    pp(g, ['M 180 8 L 180 32'], a);
    // Lamp shade
    pp(g, [
      'M 170 32 C 172 28 176 26 180 26 C 184 26 188 28 190 32 L 192 40 C 188 44 184 46 180 46 C 176 46 172 44 168 40 Z'
    ], a);
    // Lamp bulb
    fe(g, 'circle', { cx: 180, cy: 50, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // Background greenery (behind figures, above tables)
    pp(g, [
      'M 0 100 C 10 94 20 98 30 92 C 40 88 50 94 60 90 C 70 86 80 92 90 88',
      'M 310 100 C 320 94 330 98 340 92 C 350 88 360 94 360 90'
    ], a, lt);
    // More greenery hints
    pp(g, [
      'M 0 110 C 14 104 28 110 42 104',
      'M 318 110 C 332 104 346 110 360 104'
    ], a, lt);

    // Background table suggestions (very light)
    pp(g, [
      'M 0 400 L 40 400 L 40 440',
      'M 320 400 L 360 400 L 360 440',
      'M 10 400 L 10 430',
      'M 30 400 L 30 430',
      'M 340 400 L 340 430',
      'M 350 400 L 350 430'
    ], a, lt);
    // People at tables (silhouette hints)
    pp(g, [
      'M 15 386 C 13 378 17 372 22 372 C 27 372 31 378 29 386',
      'M 342 386 C 340 378 344 372 349 372 C 354 372 358 378 356 386'
    ], a, lt);

    // Ground line / floor
    pp(g, ['M 0 430 L 360 430'], a, lt);
  },

  // =============================================
  // Layer 7: Color fills - figures
  // =============================================
  (g, a) => {
    // --- Grandmother skin (lighter tone) ---
    fl(g, 'M 110 100 C 90 100 76 112 74 130 C 72 148 80 164 92 172 C 98 176 104 180 110 182 C 116 180 122 176 128 172 C 140 164 148 148 146 130 C 144 112 130 100 110 100 Z', '#FADCC2', a);
    // Grandmother neck skin
    fe(g, 'rect', { x: 98, y: 180, width: 24, height: 16, rx: 4, fill: '#F0C8A8' }, false);
    // Grandmother ears
    fe(g, 'ellipse', { cx: 69, cy: 140, rx: 5, ry: 10, fill: '#FADCC2' }, false);
    fe(g, 'ellipse', { cx: 151, cy: 140, rx: 5, ry: 10, fill: '#FADCC2' }, false);
    // Grandmother arms (bare skin)
    fl(g, 'M 62 228 C 56 242 50 258 48 274 C 46 286 48 296 52 306 C 56 312 62 316 66 314 C 70 312 72 306 74 296 L 74 280 C 72 270 68 258 66 244 Z', '#F0C8A8', false);
    fl(g, 'M 158 228 C 164 242 170 258 172 274 C 174 286 172 296 168 306 C 164 312 158 316 154 314 C 150 312 148 306 146 296 L 146 280 C 148 270 152 258 154 244 Z', '#F0C8A8', false);
    // Grandmother teal tank top fill
    fl(g, 'M 60 224 C 68 208 86 196 110 196 C 134 196 152 208 160 224 L 164 440 L 56 440 Z', '#00897B', a);
    // Tank top straps
    fl(g, 'M 92 196 C 88 192 84 194 82 200 L 80 212 L 86 214 L 88 200 C 90 196 92 194 94 196 Z', '#00897B', false);
    fl(g, 'M 128 196 C 132 192 136 194 138 200 L 140 212 L 134 214 L 132 200 C 130 196 128 194 126 196 Z', '#00897B', false);

    // Glasses lens tint (very light)
    fe(g, 'rect', { x: 83, y: 121, width: 30, height: 20, rx: 2, fill: '#A1887F', opacity: '0.08' }, false);
    fe(g, 'rect', { x: 105, y: 121, width: 30, height: 20, rx: 2, fill: '#A1887F', opacity: '0.08' }, false);

    // Eye whites - grandmother
    fe(g, 'ellipse', { cx: 104, cy: 128, rx: 6, ry: 4, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 116, cy: 128, rx: 6, ry: 4, fill: '#FAFAFA' }, false);

    // --- Grandfather skin (tanned/bronzed) ---
    fl(g, 'M 258 90 C 240 90 228 102 226 118 C 224 134 230 150 240 158 C 246 162 252 166 258 168 C 264 166 270 162 276 158 C 286 150 292 134 290 118 C 288 102 276 90 258 90 Z', '#D7A86E', a);
    // Grandfather neck skin
    fe(g, 'rect', { x: 248, y: 166, width: 20, height: 16, rx: 4, fill: '#C8956E' }, false);
    // Grandfather ears
    fe(g, 'ellipse', { cx: 221, cy: 128, rx: 5, ry: 10, fill: '#D7A86E' }, false);
    fe(g, 'ellipse', { cx: 295, cy: 128, rx: 5, ry: 10, fill: '#D7A86E' }, false);
    // Grandfather white polo fill
    fl(g, 'M 214 210 C 222 194 240 182 258 182 C 276 182 294 194 302 210 L 308 440 L 208 440 Z', '#FAFAFA', a);
    // Eye whites - grandfather
    fe(g, 'ellipse', { cx: 254, cy: 116, rx: 6, ry: 4, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 268, cy: 116, rx: 6, ry: 4, fill: '#FAFAFA' }, false);

    // --- Baby skin ---
    fl(g, 'M 106 232 C 92 232 82 242 80 254 C 78 266 84 278 94 284 C 98 286 102 288 106 288 C 110 288 114 286 118 284 C 128 278 134 266 132 254 C 130 242 120 232 106 232 Z', '#F5D0A9', a);
    // Baby ears
    fe(g, 'ellipse', { cx: 77, cy: 260, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 135, cy: 260, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    // Baby white outfit fill
    fl(g, 'M 94 292 C 98 288 102 286 106 286 C 110 286 114 288 118 292 L 122 354 L 90 354 Z', '#FAFAFA', false);
    // Eye whites - baby
    fe(g, 'ellipse', { cx: 104, cy: 253, rx: 5, ry: 3.5, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 110, cy: 253, rx: 5, ry: 3.5, fill: '#FAFAFA' }, false);
  },

  // =============================================
  // Layer 8: Color fills - scene, hair, accessories
  // =============================================
  (g, a) => {
    // --- Awning color pattern ---
    // Red/pink stripes
    for (let x = 0; x < 380; x += 48) {
      const e = ce('path', { d: `M ${x} 18 L ${x + 24} 18 L ${x + 24} 78 L ${x} 78 Z`, fill: '#E91E63', stroke: 'none', opacity: '0.25' });
      g.appendChild(e);
    }
    // White/light pink alternating stripes
    for (let x = 24; x < 380; x += 48) {
      const e = ce('path', { d: `M ${x} 18 L ${x + 24} 18 L ${x + 24} 78 L ${x} 78 Z`, fill: '#F8BBD0', stroke: 'none', opacity: '0.15' });
      g.appendChild(e);
    }
    // Scallop edge color
    for (let x = 0; x < 360; x += 45) {
      const e2 = ce('path', { d: `M ${x} 76 C ${x + 12} 88 ${x + 33} 88 ${x + 45} 76 L ${x + 45} 80 C ${x + 33} 92 ${x + 12} 92 ${x} 80 Z`, fill: '#F48FB1', stroke: 'none', opacity: '0.2' });
      g.appendChild(e2);
    }

    // Background greenery fill
    fe(g, 'rect', { x: 0, y: 88, width: 70, height: 40, fill: '#8BC34A', opacity: '0.1' }, false);
    fe(g, 'rect', { x: 310, y: 88, width: 50, height: 40, fill: '#8BC34A', opacity: '0.1' }, false);

    // Warm sunlight overlay (golden summer light)
    fe(g, 'rect', { x: 0, y: 80, width: 360, height: 370, fill: '#FFF8E1', opacity: '0.06' }, false);

    // --- Grandmother hair fill (gray-brown) ---
    fl(g, 'M 74 126 C 70 110 76 96 88 90 C 100 84 114 82 126 86 C 138 90 148 100 150 114 C 152 122 150 130 148 136 L 146 130 C 144 112 130 100 110 100 C 90 100 76 112 74 130 Z', '#8D7B6B', false);
    // Hair side fills
    fl(g, 'M 68 108 C 64 118 62 132 64 144 C 66 148 70 146 72 140 L 74 130 C 74 120 72 112 68 108 Z', '#8D7B6B', false);
    fl(g, 'M 148 110 C 152 120 154 132 154 144 C 154 148 150 146 148 140 L 146 130 C 146 120 148 114 148 110 Z', '#8D7B6B', false);

    // --- Grandfather hair fill (gray/salt-and-pepper) ---
    fl(g, 'M 226 114 C 224 100 230 88 242 82 C 254 76 268 74 278 78 C 288 82 294 92 294 104 C 294 112 292 118 290 122 L 290 118 C 288 102 276 90 258 90 C 240 90 228 102 226 118 Z', '#9E9E9E', false);

    // --- Grandfather thick eyebrow fills ---
    fl(g, 'M 236 106 C 242 100 252 98 260 102 L 260 110 C 252 106 242 108 236 112 Z', '#37474F', false);
    fl(g, 'M 256 102 C 264 98 274 100 280 106 L 280 112 C 274 108 264 106 256 108 Z', '#37474F', false);

    // --- Gold pendant fill ---
    fl(g, 'M 110 222 C 106 224 104 228 106 232 C 108 236 112 236 114 232 C 116 228 114 224 110 222 Z', '#FFD700', false);
    // Gold chain highlight
    pp(g, ['M 100 202 C 104 206 108 210 110 212'], false, lt);

    // --- Baby object (yellow-green) ---
    fe(g, 'ellipse', { cx: 128, cy: 314, rx: 5, ry: 3.5, fill: '#C0CA33' }, false);

    // --- Baby hair fill (very light) ---
    fl(g, 'M 84 250 C 82 240 88 232 98 228 C 108 224 118 226 126 232 C 132 238 134 246 132 254 L 130 252 C 128 240 120 234 110 234 C 98 234 88 240 86 252 Z', '#D7CCC8', false);

    // Lamp glow
    fe(g, 'circle', { cx: 180, cy: 50, r: 8, fill: '#FFF9C4', opacity: '0.15' }, false);
    fe(g, 'circle', { cx: 180, cy: 50, r: 3, fill: '#FFECB3', opacity: '0.4' }, false);
  },

  // =============================================
  // Layer 9: Polish - shines, blush, detail
  // =============================================
  (g, a) => {
    // --- Eye shines (white dots) ---
    // Grandmother
    fe(g, 'circle', { cx: 102, cy: 126, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 114, cy: 126, r: 1.5, fill: 'white' }, a);
    // Grandfather
    fe(g, 'circle', { cx: 252, cy: 114, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 266, cy: 114, r: 1.5, fill: 'white' }, a);
    // Baby
    fe(g, 'circle', { cx: 102, cy: 251, r: 1.2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 108, cy: 251, r: 1.2, fill: 'white' }, a);

    // --- Cheek blush ---
    // Grandmother cheeks
    fe(g, 'ellipse', { cx: 90, cy: 158, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 130, cy: 158, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    // Baby cheeks (rosier)
    fe(g, 'ellipse', { cx: 94, cy: 268, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.45' }, a);
    fe(g, 'ellipse', { cx: 118, cy: 268, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.45' }, a);
    // Grandfather slight warmth on cheekbones
    fe(g, 'ellipse', { cx: 242, cy: 142, rx: 6, ry: 3, fill: '#D7A86E', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 274, cy: 142, rx: 6, ry: 3, fill: '#D7A86E', opacity: '0.2' }, false);

    // --- Lip colors ---
    // Grandmother warm smile lip color
    fl(g, 'M 94 166 C 100 172 106 176 110 176 C 114 176 120 172 126 166 C 120 170 114 174 110 174 C 106 174 100 170 94 166 Z', '#D48C8C', false);
    // Grandfather subtle lip line
    fl(g, 'M 248 154 C 252 158 258 160 262 158 C 266 156 270 154 L 268 156 C 264 158 258 160 254 160 C 250 158 248 156 Z', '#C49A6C', false);
    // Baby lips
    fl(g, 'M 102 273 C 105 276 109 276 112 273 C 110 278 106 278 102 273 Z', '#E8A0A0', false);

    // --- Nail polish fills (bordeaux) ---
    [[86, 294], [82, 298], [78, 302], [76, 306], [70, 300]].forEach(([cx, cy]) =>
      fe(g, 'circle', { cx, cy, r: 1.2, fill: '#800020' }, false)
    );
    [[134, 294], [138, 298], [142, 302], [144, 306], [150, 300]].forEach(([cx, cy]) =>
      fe(g, 'circle', { cx, cy, r: 1.2, fill: '#800020' }, false)
    );

    // --- Glasses frame tint overlay ---
    fe(g, 'rect', { x: 83, y: 121, width: 30, height: 20, rx: 2, fill: '#795548', opacity: '0.06' }, false);
    fe(g, 'rect', { x: 105, y: 121, width: 30, height: 20, rx: 2, fill: '#795548', opacity: '0.06' }, false);

    // --- Expression wrinkles (fine detail) ---
    // Grandmother smile crinkles at eyes
    pp(g, [
      'M 80 126 C 78 124 76 125 74 127',
      'M 80 130 C 78 131 76 133 74 135',
      'M 138 126 C 140 124 142 125 144 127',
      'M 138 130 C 140 131 142 133 144 135'
    ], a, lt);
    // Grandfather forehead depth
    pp(g, [
      'M 244 98 C 252 96 264 96 272 98'
    ], a, lt);

    // --- Warm sunlight spots ---
    fe(g, 'ellipse', { cx: 110, cy: 120, rx: 20, ry: 10, fill: '#FFF9C4', opacity: '0.06' }, false);
    fe(g, 'ellipse', { cx: 258, cy: 110, rx: 20, ry: 10, fill: '#FFF9C4', opacity: '0.06' }, false);
    fe(g, 'ellipse', { cx: 180, cy: 60, rx: 40, ry: 12, fill: '#FFF9C4', opacity: '0.08' }, false);

    // --- Gold chain shimmer ---
    fe(g, 'circle', { cx: 110, cy: 228, r: 1, fill: '#FFF9C4', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 108, cy: 224, r: 0.8, fill: '#FFF9C4', opacity: '0.5' }, false);

    // --- Baby object highlight ---
    fe(g, 'ellipse', { cx: 127, cy: 313, rx: 2, ry: 1, fill: '#FFFFFF', opacity: '0.4' }, false);

    // --- Polo collar shadow ---
    fl(g, 'M 232 194 C 244 198 256 200 258 200 C 260 200 272 198 284 194 L 282 198 C 270 202 260 204 258 204 C 256 204 246 202 234 198 Z', '#E0E0E0', false);

    // --- Tank top neckline shadow ---
    fl(g, 'M 84 210 C 90 214 100 218 110 218 C 120 218 130 214 136 210 L 134 214 C 126 218 118 222 110 222 C 102 222 94 218 86 214 Z', '#00796B', false);
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
  // Layer 0: Composition guides
  // Horizon ~y220, figure zones, mountain triangle guides
  // ================================================================
  (g, a) => {
    // Horizon line
    pp(g, ['M 0 220 L 360 220'], a, lt);
    // Vertical center
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Bruno figure zone (left, larger - selfie perspective)
    pp(g, ['M 40 230 L 40 450', 'M 170 230 L 170 450'], a, lt);
    pp(g, ['M 40 280 L 170 280'], a, lt);
    // Grandpa figure zone (right, slightly smaller/behind)
    pp(g, ['M 195 240 L 195 450', 'M 310 240 L 310 450'], a, lt);
    pp(g, ['M 195 275 L 310 275'], a, lt);
    // Mountain triangle guides
    pp(g, ['M 0 220 L 90 20 L 180 220'], a, lt);
    pp(g, ['M 180 220 L 280 30 L 360 220'], a, lt);
    // Sky zone top
    pp(g, ['M 0 0 L 360 0 L 360 60 L 0 60'], a, lt);
  },

  // ================================================================
  // Layer 1: Landscape outlines
  // Mountain ridges, valley, boardwalk, distant features
  // ================================================================
  (g, a) => {
    // Left mountain ridge - steep, dramatic with rocky contours
    pp(g, [
      'M 0 200 C 8 175 18 145 30 120 C 42 95 55 72 68 55 C 78 42 88 32 98 28 C 108 24 115 28 122 38 C 132 52 140 75 148 100 C 155 122 162 150 168 178 C 172 195 176 210 180 220'
    ], a);
    // Left mountain secondary ridge (darker near slope)
    pp(g, [
      'M 0 180 C 10 160 22 135 35 115 C 48 95 60 80 72 68 C 80 60 86 56 92 55'
    ], a);
    // Right mountain ridge - gentler slope with golden-brown character
    pp(g, [
      'M 180 220 C 182 200 186 170 195 140 C 204 112 216 86 230 65 C 242 48 255 36 270 30 C 285 24 298 28 310 42 C 322 56 334 80 345 110 C 352 130 358 158 360 190'
    ], a);
    // Right mountain secondary contour
    pp(g, [
      'M 280 38 C 295 44 310 60 322 82 C 334 104 344 130 352 158'
    ], a);
    // Valley bottom curve
    pp(g, ['M 135 220 C 148 212 160 207 172 204 C 184 202 196 204 208 210 C 216 214 222 218 228 220'], a);
    // Distant mountains (background, lighter)
    pp(g, [
      'M 0 120 C 15 100 32 85 50 78 C 68 72 82 76 95 68 C 108 60 120 48 135 42 C 148 38 160 42 172 55 C 180 64 180 80 180 100'
    ], a, lt);
    pp(g, [
      'M 180 100 C 180 80 185 60 200 48 C 215 36 235 30 255 38 C 275 46 295 60 315 70 C 335 80 348 90 360 100'
    ], a, lt);

    // Boardwalk structure on right hillside
    // Main deck line (top edge)
    pp(g, ['M 220 125 C 240 118 260 112 280 108 C 300 104 320 102 340 100'], a);
    // Main deck line (bottom edge)
    pp(g, ['M 220 133 C 240 126 260 120 280 116 C 300 112 320 110 340 108'], a);
    // Railing line
    pp(g, ['M 220 119 C 240 112 260 106 280 102 C 300 98 320 96 340 94'], a);
    // Support pillars (vertical posts going down into hillside)
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const x = 228 + t * 108;
      const yTop = 127 - t * 20;
      const yBot = yTop + 28 + t * 8;
      pp(g, [`M ${x.toFixed(0)} ${yTop.toFixed(0)} L ${x.toFixed(0)} ${yBot.toFixed(0)}`], a);
    }
    // Railing posts (short verticals between railing and deck)
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const x = 228 + t * 108;
      const yRail = 120 - t * 18;
      const yDeck = 127 - t * 20;
      pp(g, [`M ${x.toFixed(0)} ${yRail.toFixed(0)} L ${x.toFixed(0)} ${yDeck.toFixed(0)}`], a, lt);
    }
  },

  // ================================================================
  // Layer 2: Bruno figure (left, closer to camera - selfie perspective)
  // Angular lean face, defined jawline, prominent nose, friendly smile
  // ================================================================
  (g, a) => {
    // Head outline - larger due to selfie perspective, angular jawline
    pp(g, [
      'M 78 295 C 76 272 82 254 94 245 C 102 240 110 238 118 242 C 130 248 138 262 140 282 C 142 298 138 312 132 322 C 126 330 120 336 114 340 C 108 342 102 340 96 336 C 88 330 82 318 80 305'
    ], a);
    // Left ear
    pp(g, ['M 76 282 C 70 278 66 282 66 290 C 66 298 70 302 76 300'], a);
    // Right ear
    pp(g, ['M 142 278 C 148 274 152 278 152 286 C 152 294 148 298 142 296'], a);
    // Left eye - almond shape
    pp(g, ['M 88 284 C 90 278 96 275 102 278 C 108 281 108 288 104 292 C 100 295 90 292 88 286 Z'], a);
    // Right eye
    pp(g, ['M 114 282 C 116 276 122 273 128 276 C 134 279 134 286 130 290 C 126 293 116 290 114 284 Z'], a);
    // Left pupil
    fe(g, 'circle', { cx: 98, cy: 285, r: 3.5, fill: a ? HL : '#2C1810' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 124, cy: 283, r: 3.5, fill: a ? HL : '#2C1810' }, a);
    // Thick dark eyebrows (family trait)
    pp(g, ['M 86 274 C 92 268 100 266 108 270'], a);
    pp(g, ['M 112 268 C 120 264 128 266 136 272'], a);
    // Nose - prominent, straight bridge with defined tip
    pp(g, ['M 112 274 C 111 280 110 288 109 296'], a);
    pp(g, ['M 104 300 C 107 304 110 306 114 305 C 117 304 119 302 120 300'], a);
    // Nose bridge line
    pp(g, ['M 110 272 C 110 276 111 280 111 284'], a, lt);
    // Friendly smile showing teeth
    pp(g, ['M 92 318 C 98 312 106 310 114 312 C 120 310 126 314 130 320'], a);
    // Lower lip / smile bottom
    pp(g, ['M 94 322 C 102 330 112 332 122 328 C 126 326 130 322 132 320'], a);
    // Individual teeth lines
    pp(g, ['M 102 316 L 102 322', 'M 108 314 L 108 322', 'M 114 314 L 114 322', 'M 120 316 L 120 322'], a, lt);
    // Chin definition
    pp(g, ['M 102 340 C 106 344 110 346 114 344'], a, lt);
    // Neck
    pp(g, ['M 100 340 L 98 358', 'M 120 338 L 122 356'], a);
    // Shoulders and body (cut off at bottom of frame)
    pp(g, [
      'M 56 395 C 64 375 80 360 108 358 C 136 360 152 375 160 395 L 164 450'
    ], a);
    pp(g, ['M 56 395 L 52 450'], a);
  },

  // ================================================================
  // Layer 3: Grandpa figure (right, slightly behind/smaller)
  // Angular lean face, VERY thick eyebrows, squinting, warm smile
  // ================================================================
  (g, a) => {
    // Head outline - slightly smaller than Bruno (further from camera)
    pp(g, [
      'M 222 288 C 220 268 226 252 237 244 C 244 240 251 238 258 242 C 268 248 274 260 276 276 C 278 290 274 302 268 310 C 262 318 258 322 253 324 C 248 326 243 324 238 320 C 231 314 226 304 224 295'
    ], a);
    // Left ear
    pp(g, ['M 220 278 C 214 274 210 278 210 286 C 210 294 214 298 220 296'], a);
    // Right ear
    pp(g, ['M 278 274 C 284 270 288 274 288 282 C 288 290 284 294 278 292'], a);
    // Eyes (semi-closed, squinting in sun - narrower)
    pp(g, ['M 232 278 C 234 274 240 272 244 275 C 247 278 246 282 242 284 C 238 286 233 283 232 279 Z'], a);
    pp(g, ['M 254 276 C 256 272 262 270 266 273 C 269 276 268 280 264 282 C 260 284 255 281 254 277 Z'], a);
    // Pupils (smaller due to squinting)
    fe(g, 'circle', { cx: 240, cy: 278, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 262, cy: 276, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // VERY THICK DARK EYEBROWS - doubled line technique (defining feature!)
    // Left eyebrow - thick outer line
    pp(g, ['M 228 268 C 234 261 244 258 252 262'], a);
    // Left eyebrow - thick inner line (doubled)
    pp(g, ['M 230 270 C 236 264 245 261 253 264'], a);
    // Right eyebrow - thick outer line
    pp(g, ['M 256 260 C 264 256 274 258 280 264'], a);
    // Right eyebrow - thick inner line (doubled)
    pp(g, ['M 255 263 C 263 259 272 261 278 267'], a);
    // Crow's feet / eye wrinkles (squinting lines at corners)
    pp(g, ['M 228 276 C 225 274 222 272', 'M 228 280 C 225 280 222 280'], a, lt);
    pp(g, ['M 270 274 C 273 272 276 270', 'M 270 278 C 273 278 276 278'], a, lt);
    // Forehead wrinkle lines
    pp(g, ['M 234 254 C 244 252 254 252 264 254'], a, lt);
    pp(g, ['M 236 258 C 246 256 256 256 266 258'], a, lt);
    // Nose - similar shape to Bruno (family resemblance)
    pp(g, ['M 252 268 C 251 274 250 282 249 290'], a);
    pp(g, ['M 244 294 C 247 298 250 300 254 298 C 257 296 258 294 259 292'], a);
    // Warm smile
    pp(g, ['M 234 310 C 240 304 248 302 254 304 C 260 302 264 306 268 312'], a);
    pp(g, ['M 236 314 C 244 320 254 322 264 316'], a);
    // Neck
    pp(g, ['M 242 324 L 240 340', 'M 262 322 L 264 338'], a);
    // Body (shoulders, cut off at bottom)
    pp(g, [
      'M 204 378 C 212 362 228 348 250 346 C 272 348 288 362 296 378 L 300 450'
    ], a);
    pp(g, ['M 204 378 L 200 450'], a);
    // Short gray hair outline (top of head)
    pp(g, [
      'M 224 284 C 222 266 228 250 240 244 C 252 240 264 244 272 254 C 278 264 280 276 278 286'
    ], a);
    // Hair texture lines (short)
    pp(g, ['M 238 246 C 245 242 254 242 262 246'], a, lt);
    pp(g, ['M 232 256 C 240 250 252 248 264 252'], a, lt);
  },

  // ================================================================
  // Layer 4: Clothing details
  // Bruno's white Quechua t-shirt, grandpa's navy sweatshirt
  // ================================================================
  (g, a) => {
    // Bruno - white Quechua sport t-shirt
    // T-shirt neckline (crew/round)
    pp(g, ['M 92 360 C 98 356 104 354 110 354 C 116 354 122 356 128 360'], a);
    // Left sleeve seam
    pp(g, ['M 62 398 C 58 392 54 396 52 402 C 50 408 54 412 60 410'], a);
    // Right sleeve seam
    pp(g, ['M 154 396 C 158 390 162 394 164 400 C 166 406 162 410 156 408'], a);
    // Sleeve edges (short sleeves)
    pp(g, ['M 58 388 C 56 392 54 398 54 402'], a, lt);
    pp(g, ['M 158 386 C 160 390 162 396 164 400'], a, lt);
    // Quechua brand logo area (left chest/shoulder)
    pp(g, ['M 68 374 L 92 374 L 92 386 L 68 386 Z'], a, lt);
    // Logo mountain symbol hint
    pp(g, ['M 72 384 L 76 376 L 80 382 L 84 374 L 88 384'], a, lt);

    // Grandpa - navy/dark blue sweatshirt
    // Sweatshirt neckline (round/crew)
    pp(g, ['M 236 342 C 240 338 246 336 252 336 C 258 336 264 338 268 342'], a);
    // Sweatshirt collar ribbing
    pp(g, ['M 234 344 C 240 340 248 338 252 338 C 256 338 264 340 270 344'], a, lt);
    // Left sleeve
    pp(g, ['M 210 382 C 206 376 202 380 200 386 C 198 392 202 396 208 394'], a);
    // Right sleeve
    pp(g, ['M 290 380 C 294 374 298 378 300 384 C 302 390 298 394 292 392'], a);
    // Sweatshirt hem visible
    pp(g, ['M 206 440 L 300 440'], a, lt);
  },

  // ================================================================
  // Layer 5: Bruno hair/beard details (stippling patterns)
  // Buzzcut hair, stubble beard, facial definition lines
  // ================================================================
  (g, a) => {
    // Hairline contour
    pp(g, [
      'M 82 290 C 80 272 86 256 98 248 C 110 242 124 244 134 254 C 140 262 144 274 144 286'
    ], a);
    // Buzzcut hair stippling dots (dense array of small dots)
    const buzzDots = [
      [94,248],[100,244],[106,242],[112,244],[118,248],
      [88,256],[96,252],[104,248],[112,248],[120,252],[128,258],
      [84,266],[92,260],[100,254],[108,252],[116,254],[124,260],[132,268],
      [82,276],[90,268],[98,262],[106,258],[114,260],[122,266],[130,274],
      [80,284],[88,276],[96,268],[104,264],[112,264],[120,270],[128,278],[136,284],
      [86,282],[94,274],[102,268],[110,266],[118,268],[126,274],[134,280],
      [92,278],[100,272],[108,268],[116,270],[124,276]
    ];
    buzzDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a));

    // Beard stubble dots along jawline and chin
    const stubbleDots = [
      // Jawline left side
      [82,312],[84,316],[86,320],[88,324],[90,328],[92,332],
      // Chin bottom
      [96,336],[100,338],[104,340],[108,342],[112,340],[116,338],[120,336],
      // Jawline right side
      [124,332],[126,328],[128,324],[130,320],[132,316],[134,312],
      // Chin area (denser)
      [96,334],[100,336],[104,338],[108,340],[112,338],[116,336],[120,334],
      // Neck top stubble
      [98,342],[102,344],[106,344],[110,344],[114,342],[118,340],
      // Upper lip shadow
      [100,314],[104,314],[108,314],[112,314],[116,314]
    ];
    stubbleDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.55, fill: a ? HL : '#4A3628' }, a));

    // Nasolabial fold lines (faint)
    pp(g, ['M 98 298 C 96 304 94 310 92 316'], a, lt);
    pp(g, ['M 120 296 C 122 302 124 308 126 314'], a, lt);
  },

  // ================================================================
  // Layer 6: Landscape details
  // Clouds, vegetation, rocky outcrops, boardwalk planks, river
  // ================================================================
  (g, a) => {
    // Cloud 1 (left - large cumulus)
    pp(g, [
      'M 30 25 C 38 14 50 10 62 14 C 70 8 82 6 92 12 C 100 6 112 8 120 16 C 128 10 138 14 142 22 C 148 18 156 22 156 30 C 156 36 148 40 138 38 C 130 42 118 42 110 38 C 100 42 88 42 78 38 C 68 42 52 40 44 36 C 36 38 28 34 30 28'
    ], a);
    // Cloud inner volume lines
    pp(g, ['M 50 22 C 58 18 68 16 78 18', 'M 100 16 C 108 12 118 14 124 18'], a, lt);

    // Cloud 2 (right - smaller)
    pp(g, [
      'M 250 35 C 256 26 266 22 278 26 C 286 20 298 22 306 28 C 314 24 322 28 324 34 C 326 40 318 44 308 42 C 298 46 284 44 276 40 C 266 44 254 42 250 38'
    ], a);
    pp(g, ['M 268 30 C 276 26 286 26 294 30'], a, lt);

    // Cloud 3 (center, distant/small)
    pp(g, ['M 155 48 C 160 42 168 40 176 44 C 182 40 190 42 194 48 C 194 52 188 54 180 52 C 172 54 162 52 158 50'], a, lt);

    // Vegetation patches on left mountain (Mediterranean scrub)
    pp(g, ['M 15 170 C 22 164 30 168 38 164 C 46 160 54 164 62 160'], a, lt);
    pp(g, ['M 40 140 C 48 134 56 138 64 134 C 72 130 78 134 84 130'], a, lt);
    pp(g, ['M 25 190 C 32 184 40 188 48 184'], a, lt);
    // Bush/tree silhouettes on left slope
    pp(g, ['M 52 148 C 56 140 64 138 68 142 C 72 138 78 140 80 148'], a, lt);
    pp(g, ['M 18 178 C 22 170 28 168 32 172 C 36 168 42 170 44 178'], a, lt);

    // Vegetation on right mountain (golden-brown/green mix)
    pp(g, ['M 280 90 C 288 84 296 88 304 84 C 312 80 320 84 328 80'], a, lt);
    pp(g, ['M 300 70 C 306 64 314 66 320 62 C 328 58 334 62 340 58'], a, lt);
    pp(g, ['M 260 120 C 268 114 276 118 284 114'], a, lt);

    // Rocky outcrops - left mountain
    pp(g, ['M 45 135 L 55 118 L 68 122 L 62 140'], a, lt);
    pp(g, ['M 75 105 L 82 92 L 95 98 L 90 112'], a, lt);
    pp(g, ['M 10 195 L 18 182 L 28 186 L 22 200'], a, lt);

    // Rocky outcrops - right mountain (golden-brown)
    pp(g, ['M 305 75 L 312 60 L 325 65 L 320 82'], a, lt);
    pp(g, ['M 265 108 L 272 96 L 282 100 L 278 114'], a, lt);
    pp(g, ['M 340 90 L 348 78 L 358 84 L 354 96'], a, lt);

    // River/path at valley bottom
    pp(g, [
      'M 148 218 C 156 212 164 208 174 206 C 184 204 194 206 204 210 C 210 212 216 216 220 218'
    ], a, lt);
    // Second river line (wider appearance)
    pp(g, ['M 155 216 C 162 212 170 208 180 207 C 190 208 198 210 206 214'], a, lt);

    // Boardwalk planks (cross beams - getting smaller with distance)
    for (let i = 0; i < 10; i++) {
      const t = i / 9;
      const x = 222 + t * 114;
      const yTop = 126 - t * 22;
      const yBot = 132 - t * 20;
      const w = 2.5 - t * 1.2;
      pp(g, [`M ${x.toFixed(1)} ${yTop.toFixed(1)} L ${(x + w).toFixed(1)} ${yBot.toFixed(1)}`], a, lt);
    }

    // Valley shadow/depth lines
    pp(g, ['M 140 220 C 148 218 156 216 164 215', 'M 196 215 C 204 216 212 218 220 220'], a, lt);
  },

  // ================================================================
  // Layer 7: Color fills - figures
  // Bruno skin (lighter), grandpa skin (tanned), clothing
  // ================================================================
  (g, a) => {
    // Bruno skin fill - head
    fl(g, 'M 78 295 C 76 272 82 254 94 245 C 102 240 110 238 118 242 C 130 248 138 262 140 282 C 142 298 138 312 132 322 C 126 330 120 336 114 340 C 108 342 102 340 96 336 C 88 330 82 318 80 305 Z', '#EDBE8C', a);
    // Bruno left ear fill
    fl(g, 'M 76 282 C 70 278 66 282 66 290 C 66 298 70 302 76 300 Z', '#E0B080', a);
    // Bruno right ear fill
    fl(g, 'M 142 278 C 148 274 152 278 152 286 C 152 294 148 298 142 296 Z', '#E0B080', a);
    // Bruno neck fill
    fe(g, 'rect', { x: 97, y: 338, width: 26, height: 20, rx: 4, fill: '#DEB07A' }, false);
    // Bruno white Quechua t-shirt fill
    fl(g, 'M 56 395 C 64 375 80 360 108 358 C 136 360 152 375 160 395 L 164 450 L 52 450 Z', '#FAFAFA', a);

    // Eye whites - Bruno
    fl(g, 'M 88 284 C 90 278 96 275 102 278 C 108 281 108 288 104 292 C 100 295 90 292 88 286 Z', '#FFFFFF', false);
    fl(g, 'M 114 282 C 116 276 122 273 128 276 C 134 279 134 286 130 290 C 126 293 116 290 114 284 Z', '#FFFFFF', false);

    // Grandpa skin fill - head (tanned/bronzed)
    fl(g, 'M 222 288 C 220 268 226 252 237 244 C 244 240 251 238 258 242 C 268 248 274 260 276 276 C 278 290 274 302 268 310 C 262 318 258 322 253 324 C 248 326 243 324 238 320 C 231 314 226 304 224 295 Z', '#D7A06A', a);
    // Grandpa left ear fill
    fl(g, 'M 220 278 C 214 274 210 278 210 286 C 210 294 214 298 220 296 Z', '#C89460', a);
    // Grandpa right ear fill
    fl(g, 'M 278 274 C 284 270 288 274 288 282 C 288 290 284 294 278 292 Z', '#C89460', a);
    // Grandpa neck fill
    fe(g, 'rect', { x: 239, y: 322, width: 24, height: 18, rx: 4, fill: '#C8956E' }, false);
    // Grandpa navy sweatshirt fill
    fl(g, 'M 204 378 C 212 362 228 348 250 346 C 272 348 288 362 296 378 L 300 450 L 200 450 Z', '#1A237E', a);

    // Eye whites - Grandpa
    fl(g, 'M 232 278 C 234 274 240 272 244 275 C 247 278 246 282 242 284 C 238 286 233 283 232 279 Z', '#FFFFFF', false);
    fl(g, 'M 254 276 C 256 272 262 270 266 273 C 269 276 268 280 264 282 C 260 284 255 281 254 277 Z', '#FFFFFF', false);
  },

  // ================================================================
  // Layer 8: Color fills - landscape, hair, eyebrows
  // Sky, mountains, boardwalk, clouds, hair/eyebrow fills
  // ================================================================
  (g, a) => {
    // Sky gradient layers (top darker, bottom lighter)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 50, fill: '#1565C0', opacity: '0.35' }, a);
    fe(g, 'rect', { x: 0, y: 50, width: 360, height: 50, fill: '#1E88E5', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 0, y: 100, width: 360, height: 60, fill: '#42A5F5', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 0, y: 160, width: 360, height: 60, fill: '#64B5F6', opacity: '0.12' }, false);

    // Cloud fills
    fl(g, 'M 30 25 C 38 14 50 10 62 14 C 70 8 82 6 92 12 C 100 6 112 8 120 16 C 128 10 138 14 142 22 C 148 18 156 22 156 30 C 156 36 148 40 138 38 C 130 42 118 42 110 38 C 100 42 88 42 78 38 C 68 42 52 40 44 36 C 36 38 28 34 30 28 Z', '#FAFAFA', false);
    fe(g, 'ellipse', { cx: 93, cy: 22, rx: 60, ry: 14, fill: '#FFFFFF', opacity: '0.3' }, false);
    fl(g, 'M 250 35 C 256 26 266 22 278 26 C 286 20 298 22 306 28 C 314 24 322 28 324 34 C 326 40 318 44 308 42 C 298 46 284 44 276 40 C 266 44 254 42 250 38 Z', '#F5F5F5', false);
    fl(g, 'M 155 48 C 160 42 168 40 176 44 C 182 40 190 42 194 48 C 194 52 188 54 180 52 C 172 54 162 52 158 50 Z', '#E8E8E8', false);

    // Distant mountains fill (background - lighter, bluer tones)
    fl(g, 'M 0 120 C 15 100 32 85 50 78 C 68 72 82 76 95 68 C 108 60 120 48 135 42 C 148 38 160 42 172 55 C 180 64 180 80 180 100 L 180 160 L 0 160 Z', '#81C784', false);
    fl(g, 'M 180 100 C 180 80 185 60 200 48 C 215 36 235 30 255 38 C 275 46 295 60 315 70 C 335 80 348 90 360 100 L 360 160 L 180 160 Z', '#90CAF9', false);

    // Near left mountain fill (darker green - steep with scrub)
    fl(g, 'M 0 200 C 8 175 18 145 30 120 C 42 95 55 72 68 55 C 78 42 88 32 98 28 C 108 24 115 28 122 38 C 132 52 140 75 148 100 C 155 122 162 150 168 178 C 172 195 176 210 180 220 L 0 220 Z', '#33691E', false);

    // Near right mountain fill (mixed green/golden)
    fl(g, 'M 180 220 C 182 200 186 170 195 140 C 204 112 216 86 230 65 C 242 48 255 36 270 30 C 285 24 298 28 310 42 C 322 56 334 80 345 110 C 352 130 358 158 360 190 L 360 220 Z', '#2E7D32', false);
    // Golden-brown rocky patches on right mountain
    fe(g, 'path', { d: 'M 305 75 L 312 60 L 325 65 L 320 82 Z', fill: '#A1887F', opacity: '0.4' }, false);
    fe(g, 'path', { d: 'M 265 108 L 272 96 L 282 100 L 278 114 Z', fill: '#A1887F', opacity: '0.35' }, false);
    fe(g, 'path', { d: 'M 340 90 L 348 78 L 358 84 L 354 96 Z', fill: '#8D6E63', opacity: '0.35' }, false);
    // Rocky patches on left mountain
    fe(g, 'path', { d: 'M 45 135 L 55 118 L 68 122 L 62 140 Z', fill: '#8D6E63', opacity: '0.3' }, false);
    fe(g, 'path', { d: 'M 75 105 L 82 92 L 95 98 L 90 112 Z', fill: '#795548', opacity: '0.3' }, false);

    // Valley bottom (very dark green)
    fl(g, 'M 135 220 C 148 214 162 208 174 206 C 186 204 198 206 210 212 C 218 216 224 218 228 220 L 135 220 Z', '#1B5E20', false);

    // Boardwalk fill (wood brown)
    fl(g, 'M 220 125 C 240 118 260 112 280 108 C 300 104 320 102 340 100 L 340 108 C 320 110 300 112 280 116 C 260 120 240 126 220 133 Z', '#A1887F', false);
    // Railing fill (slightly lighter wood)
    fl(g, 'M 220 119 C 240 112 260 106 280 102 C 300 98 320 96 340 94 L 340 100 C 320 102 300 104 280 108 C 260 112 240 118 220 125 Z', '#8D6E63', false);

    // Bruno hair fill (dark brown buzzcut area)
    fl(g, 'M 82 290 C 80 272 86 256 98 248 C 110 242 124 244 134 254 C 140 262 144 274 144 286 L 140 284 C 140 274 138 264 132 256 C 126 248 116 244 106 246 C 96 248 88 258 84 272 Z', '#3E2C20', false);

    // Grandpa hair fill (gray/salt-and-pepper)
    fl(g, 'M 224 284 C 222 266 228 250 240 244 C 252 240 264 244 272 254 C 278 264 280 276 278 286 L 274 282 C 276 272 276 264 272 256 C 268 248 260 244 252 244 C 244 246 236 254 230 266 C 226 274 226 280 226 286 Z', '#9E9E9E', false);

    // Grandpa thick eyebrow fills (very dark - defining feature)
    fl(g, 'M 228 268 C 234 261 244 258 252 262 L 253 264 C 245 261 236 264 230 270 Z', '#37474F', false);
    fl(g, 'M 256 260 C 264 256 274 258 280 264 L 278 267 C 272 261 264 259 256 263 Z', '#37474F', false);
  },

  // ================================================================
  // Layer 9: Polish and final details
  // Eye shines, teeth, cheek blush, Quechua text, vegetation texture,
  // sun glare, mountain depth shadows
  // ================================================================
  (g, a) => {
    // Eye shines - Bruno
    fe(g, 'circle', { cx: 96, cy: 283, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 122, cy: 281, r: 1.5, fill: '#FFFFFF' }, a);
    // Eye shines - Grandpa
    fe(g, 'circle', { cx: 238, cy: 276, r: 1.2, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 260, cy: 274, r: 1.2, fill: '#FFFFFF' }, a);

    // Teeth fill - Bruno (showing individual teeth)
    fl(g, 'M 94 318 C 98 314 106 312 114 314 C 120 312 126 316 130 320 L 130 322 C 126 320 120 318 114 318 C 108 318 100 318 94 322 Z', '#FAFAFA', false);
    // Tooth lines inside
    pp(g, ['M 102 316 L 102 320', 'M 108 315 L 108 320', 'M 114 315 L 114 320', 'M 120 316 L 120 320'], false, lt);
    // Lower teeth hint
    fl(g, 'M 96 322 C 104 328 112 330 120 326 L 122 324 C 114 328 104 326 96 322 Z', '#F5F5F5', false);

    // Teeth fill - Grandpa
    fl(g, 'M 236 312 C 242 306 250 304 256 306 C 262 304 266 308 268 312 L 268 314 C 264 312 260 310 254 310 C 248 310 240 312 236 314 Z', '#FAFAFA', false);

    // Cheek blush - Bruno
    fe(g, 'ellipse', { cx: 88, cy: 308, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 130, cy: 306, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);
    // Cheek blush - Grandpa (sun-touched)
    fe(g, 'ellipse', { cx: 232, cy: 298, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.25' }, false);
    fe(g, 'ellipse', { cx: 268, cy: 296, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.25' }, false);

    // Quechua brand text on Bruno's t-shirt
    const qt = ce('text', { x: 70, y: 384, fill: '#9E9E9E', 'font-size': '5', 'font-weight': 'bold', 'font-family': 'sans-serif' });
    qt.textContent = 'QUECHUA';
    if (a) qt.classList.add('active-element');
    g.appendChild(qt);
    // Quechua mountain logo fill
    fl(g, 'M 72 384 L 76 376 L 80 382 L 84 374 L 88 384 Z', '#BDBDBD', false);

    // Vegetation texture lines (small brush marks)
    pp(g, ['M 28 172 C 32 168 36 170 40 168', 'M 48 158 C 52 154 56 156 60 154'], a, lt);
    pp(g, ['M 55 142 C 59 138 63 140 67 138', 'M 20 186 C 24 182 28 184 32 182'], a, lt);
    pp(g, ['M 288 86 C 292 82 296 84 300 82', 'M 310 68 C 314 64 318 66 322 64'], a, lt);
    pp(g, ['M 262 116 C 266 112 270 114 274 112'], a, lt);

    // Sun glare / warm light in sky
    fe(g, 'ellipse', { cx: 300, cy: 20, rx: 45, ry: 18, fill: '#FFF9C4', opacity: '0.08' }, false);
    fe(g, 'ellipse', { cx: 300, cy: 20, rx: 25, ry: 10, fill: '#FFFFFF', opacity: '0.06' }, false);

    // Mountain depth shadows (subtle lines showing depth)
    pp(g, ['M 95 115 C 105 125 120 135 140 145', 'M 115 90 C 125 100 138 112 150 125'], a, lt);
    pp(g, ['M 285 95 C 295 105 310 115 325 125', 'M 310 70 C 320 80 332 92 342 105'], a, lt);
    // Valley shadow emphasis
    pp(g, ['M 160 210 C 168 208 176 206 184 206', 'M 184 206 C 192 208 200 210 208 214'], a, lt);

    // Left mountain slope shadow lines (adding depth)
    fl(g, 'M 0 180 C 10 160 22 135 35 115 C 48 95 60 80 72 68 C 80 60 86 56 92 55 L 92 70 C 86 72 78 80 68 95 C 55 115 42 140 30 165 C 20 185 10 200 0 210 Z', '#1B5E20', false);

    // Grandpa wrinkle detail (forehead shading)
    pp(g, ['M 236 256 C 244 254 252 254 262 256'], false, lt);

    // Boardwalk shadow underneath
    fl(g, 'M 220 133 C 240 126 260 120 280 116 C 300 112 320 110 340 108 L 340 114 C 320 116 300 118 280 122 C 260 126 240 132 220 139 Z', '#5D4037', false);
  }
];

const miguelLayers = [
  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {
    // Grid lines
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Frame
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  },

  // Layer 1: Top region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step1_hl.png' : 'img/miguel/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Middle region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step2_hl.png' : 'img/miguel/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Bottom region — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step3_hl.png' : 'img/miguel/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Fine detail — traced from photo
  (g, a) => {
    const src = a ? 'img/miguel/step4_hl.png' : 'img/miguel/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/Miguel.jpg');
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
  avoesduarte: avoesduarteLayers,
  avosdias: avosdiasLayers,
  bivo: bivoLayers,
  tioavo: tioavoLayers
};

function renderDrawing(memberId, step) {
  _gid = 0;
  const layers = drawingData[memberId];
  if (!layers) return null;
  const svg = ce('svg', { viewBox: VB, width: '100%', height: '100%', xmlns: SVG_NS });
  const defs = ce('defs', {});
  svg.appendChild(defs);
  svg.appendChild(ce('rect', { width: 360, height: 450, rx: 10, fill: '#FEFCF8', stroke: '#E8E0D4', 'stroke-width': 0.8 }));
  for (let y = 25; y < 445; y += 14) svg.appendChild(ce('line', { x1: 12, y1: y, x2: 348, y2: y, stroke: '#F2EDE6', 'stroke-width': 0.3 }));
  for (let i = 7; i <= step && i < layers.length; i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step, defs); svg.appendChild(grp); }
  for (let i = 0; i < Math.min(step + 1, 7, layers.length); i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step, defs); svg.appendChild(grp); }
  return svg;
}
