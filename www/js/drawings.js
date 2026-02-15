// ===== REALISTIC PROGRESSIVE SVG DRAWING SYSTEM =====
// Detailed cartoon-sketch portraits based on actual photos.
// Each layer adds realistic detail. Active layer pulses in orange.

const SVG_NS = 'http://www.w3.org/2000/svg';
const VIEWBOX = '0 0 320 450';
const PENCIL = '#4A4A4A';
const LIGHT_PENCIL = '#888';
const HIGHLIGHT = '#E65100';
const PW = 1.8;      // pencil width
const HW = 2.8;      // highlight width
const SKETCH = 1.2;  // sketch/detail width

function ce(tag, attrs) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function stroke(el, active, w) {
  el.setAttribute('stroke', active ? HIGHLIGHT : PENCIL);
  el.setAttribute('stroke-width', active ? HW : (w || PW));
  el.setAttribute('stroke-linecap', 'round');
  el.setAttribute('stroke-linejoin', 'round');
  if (!el.getAttribute('fill')) el.setAttribute('fill', 'none');
  if (active) el.classList.add('active-element');
}

function light(el, active) {
  el.setAttribute('stroke', active ? HIGHLIGHT : LIGHT_PENCIL);
  el.setAttribute('stroke-width', active ? 1.8 : SKETCH);
  el.setAttribute('stroke-linecap', 'round');
  if (!el.getAttribute('fill')) el.setAttribute('fill', 'none');
  if (active) el.classList.add('active-element');
}

function fill(el, color, active) {
  el.setAttribute('fill', color);
  el.setAttribute('stroke', 'none');
  if (active) el.classList.add('active-element');
}

// Helper: add multiple paths to a group
function paths(g, ds, active, styleFn) {
  ds.forEach(d => {
    const p = ce('path', { d, fill: 'none' });
    (styleFn || stroke)(p, active);
    g.appendChild(p);
  });
}

// ===================================================================
// MIGUEL - Young boy ~7yo, round face, short dirty-blonde hair,
// yellow hoodie, eating from bowl, cheeky grin, ears stick out
// ===================================================================
const miguelLayers = [
  // 0: Head shape - round, slightly chubby, child proportions
  (g, a) => {
    // Main face outline - round, wider at cheeks, soft chin
    paths(g, [
      // Full face contour: forehead to right jaw to chin to left jaw
      'M108 148 C108 112 124 88 160 82 C196 88 212 112 212 148 ' +
      'C214 172 210 192 200 206 C192 216 178 224 160 228 ' +
      'C142 224 128 216 120 206 C110 192 106 172 108 148',
    ], a);
    // Chin definition
    paths(g, [
      'M136 218 C148 228 172 228 184 218',
    ], a, light);
    // Cheek roundness lines
    paths(g, [
      'M114 174 C116 180 118 184 122 188',
      'M206 174 C204 180 202 184 198 188',
    ], a, light);
  },

  // 1: Eyes - big, expressive child eyes, slightly round, bright
  (g, a) => {
    // Left eye - full shape with upper/lower lid
    const le = ce('path', { d: 'M130 148 C132 140 142 136 148 140 C154 144 154 152 148 156 C142 160 132 156 130 148 Z', fill: 'none' });
    stroke(le, a);
    g.appendChild(le);
    // Left iris
    const li = ce('ellipse', { cx: 141, cy: 149, rx: 6.5, ry: 7, fill: a ? HIGHLIGHT : '#4E3524' });
    if (a) li.classList.add('active-element');
    g.appendChild(li);
    // Left pupil
    const lpu = ce('circle', { cx: 142, cy: 149, r: 3.2, fill: '#1A1008' });
    g.appendChild(lpu);
    // Left upper lid crease
    const llc = ce('path', { d: 'M128 140 C134 133 146 131 152 136', fill: 'none' });
    light(llc, a);
    g.appendChild(llc);

    // Right eye
    const re = ce('path', { d: 'M172 148 C174 140 184 136 190 140 C196 144 196 152 190 156 C184 160 174 156 172 148 Z', fill: 'none' });
    stroke(re, a);
    g.appendChild(re);
    const ri = ce('ellipse', { cx: 183, cy: 149, rx: 6.5, ry: 7, fill: a ? HIGHLIGHT : '#4E3524' });
    if (a) ri.classList.add('active-element');
    g.appendChild(ri);
    const rpu = ce('circle', { cx: 184, cy: 149, r: 3.2, fill: '#1A1008' });
    g.appendChild(rpu);
    const rlc = ce('path', { d: 'M170 140 C176 133 188 131 194 136', fill: 'none' });
    light(rlc, a);
    g.appendChild(rlc);

    // Eyebrows - short, slightly raised (surprised/cheeky)
    paths(g, [
      'M126 132 C132 126 144 125 150 128',
      'M170 128 C176 125 188 126 194 132',
    ], a);
  },

  // 2: Nose and open mouth (eating/grinning)
  (g, a) => {
    // Nose - small button nose, child-like
    paths(g, [
      // Bridge hint
      'M158 142 C157 152 155 162 153 168',
      // Nose tip and nostrils
      'M148 170 C150 174 154 176 158 176 C162 176 166 174 168 170',
      // Nostril curves
      'M150 173 C148 171 147 168 149 167',
      'M166 173 C168 171 169 168 167 167',
    ], a);

    // Mouth - big open grin, teeth showing, eating
    paths(g, [
      // Upper lip
      'M138 192 C142 188 150 186 160 186 C170 186 178 188 182 192',
      // Lower lip - big open smile
      'M138 192 C142 206 152 214 160 214 C168 214 178 206 182 192',
      // Teeth line
      'M140 194 C148 196 160 196 172 196 C178 195 180 193 182 192',
      // Upper teeth
      'M144 194 L144 198 M152 194 L152 199 M160 194 L160 199 M168 194 L168 198 M176 194 L176 197',
    ], a);
    // Dimples from smiling
    paths(g, [
      'M130 194 C132 198 134 200 134 196',
      'M186 194 C184 198 182 200 182 196',
    ], a, light);
  },

  // 3: Hair - short, straight, dirty blonde, combed right, slight fringe
  (g, a) => {
    // Hair mass outline
    paths(g, [
      // Main hair shape - short on sides, slightly longer on top, swept right
      'M106 142 C104 120 110 96 126 84 C140 76 158 72 170 74 ' +
      'C182 76 198 82 208 96 C216 108 218 124 214 142',
      // Hair line at forehead - natural, slightly uneven
      'M112 138 C114 122 122 108 134 98 C144 92 156 88 168 90 ' +
      'C178 92 190 98 198 108 C206 118 210 130 210 140',
    ], a);
    // Hair texture strands - swept to the right
    paths(g, [
      'M132 80 C138 78 148 76 156 78 C164 80 172 78 180 82',
      'M120 92 C128 84 140 80 152 80 C162 80 174 82 186 90',
      'M114 106 C120 96 132 88 146 86 C158 86 170 88 182 94',
      'M116 118 C122 108 136 98 148 96 C160 96 172 100 184 108',
      'M118 130 C124 120 138 110 150 108 C162 108 174 112 186 120',
      // Side texture
      'M108 134 C110 126 114 118 118 112',
      'M212 134 C210 126 208 118 204 112',
    ], a, light);
    // Fringe detail at forehead
    paths(g, [
      'M136 98 C140 94 146 92 150 94',
      'M154 90 C160 88 168 90 172 94',
    ], a, light);
  },

  // 4: Ears (stick out a bit) and neck
  (g, a) => {
    // Left ear - sticking out
    paths(g, [
      'M106 146 C98 140 92 148 90 158 C88 168 92 178 98 180 C104 182 108 176 108 168',
      // Inner ear detail
      'M100 150 C96 156 96 166 100 174',
      'M102 154 C100 160 100 166 102 170',
    ], a);
    // Right ear
    paths(g, [
      'M214 146 C222 140 228 148 230 158 C232 168 228 178 222 180 C216 182 212 176 212 168',
      'M220 150 C224 156 224 166 220 174',
      'M218 154 C220 160 220 166 218 170',
    ], a);
    // Neck - child's neck, shorter
    paths(g, [
      'M142 226 C140 234 138 244 136 254',
      'M178 226 C180 234 182 244 184 254',
    ], a);
    // Neck shadow hint
    paths(g, [
      'M146 230 C154 234 166 234 174 230',
    ], a, light);
  },

  // 5: Yellow hoodie - hood around neck, front pocket, drawstrings
  (g, a) => {
    // Shoulders and hoodie body
    paths(g, [
      // Left shoulder to body
      'M136 254 C120 258 90 268 74 282 C64 292 60 310 60 340 L60 420',
      // Right shoulder to body
      'M184 254 C200 258 230 268 246 282 C256 292 260 310 260 340 L260 420',
    ], a);
    // Hood around neck - thick folded hood
    paths(g, [
      // Hood left side
      'M118 252 C112 248 106 250 104 258 C102 266 108 272 116 270 L140 260',
      // Hood right side
      'M202 252 C208 248 214 250 216 258 C218 266 212 272 204 270 L180 260',
      // Hood neckline
      'M116 270 C130 276 146 278 160 278 C174 278 190 276 204 270',
    ], a);
    // Center seam
    paths(g, ['M160 278 L160 420'], a, light);
    // Drawstrings
    paths(g, [
      'M148 272 L144 300 L142 304',
      'M172 272 L176 300 L178 304',
    ], a, light);
    // Kangaroo pocket
    paths(g, [
      'M102 350 C104 340 130 334 160 334 C190 334 216 340 218 350 ' +
      'C216 360 190 366 160 366 C130 366 104 360 102 350',
    ], a);
    // Sleeve cuffs
    paths(g, [
      'M62 380 C66 376 74 374 80 376',
      'M258 380 C254 376 246 374 240 376',
    ], a, light);
  },

  // 6: Arms and hands - right hand near mouth (eating), left hand holding cup
  (g, a) => {
    // Left arm (viewer's left = his right arm, reaching to mouth with food)
    paths(g, [
      'M74 282 C58 296 44 320 40 340 C38 354 42 362 50 366',
      // Forearm going up to face
      'M50 366 C56 358 68 340 80 316 C90 296 104 276 118 260',
    ], a);
    // Left hand near mouth with food
    paths(g, [
      // Hand shape
      'M112 254 C106 250 100 252 98 258 C96 264 100 270 106 272 L116 268',
      // Fingers holding food
      'M100 256 C96 252 94 248 96 244 C98 240 102 240 104 244',
      'M106 252 C104 248 102 242 104 238 C106 234 110 236 110 240',
      // Food piece
      'M96 238 C94 232 100 228 108 230 C112 232 112 238 108 240',
    ], a);

    // Right arm (his left, holding cup)
    paths(g, [
      'M246 282 C262 296 272 320 272 344 C272 358 268 366 260 370',
      // Forearm to cup
      'M260 370 C254 364 244 350 238 338 C232 326 228 316 226 310',
    ], a);
    // Right hand and cup
    paths(g, [
      // Cup shape
      'M220 298 L218 330 C218 336 224 340 232 340 C240 340 244 336 244 330 L242 298 Z',
      // Liquid line
      'M222 308 C228 310 236 310 240 308',
      // Fingers around cup
      'M222 310 C218 312 216 318 218 322',
      'M240 310 C244 312 246 318 244 322',
      'M220 320 C216 322 216 328 218 330',
    ], a);
  },

  // 7: Color - skin, hair
  (g, a) => {
    // Face skin fill
    const skin = ce('path', {
      d: 'M110 148 C110 114 126 90 160 84 C194 90 210 114 210 148 ' +
         'C212 172 208 192 198 206 C190 216 176 224 160 228 ' +
         'C144 224 130 216 122 206 C112 192 108 172 110 148 Z',
      fill: '#F5D0A9'
    });
    if (a) skin.classList.add('active-element');
    g.appendChild(skin);

    // Ear skin
    [{ d: 'M106 146 C98 140 92 148 90 158 C88 168 92 178 98 180 C104 182 108 176 108 168 Z' },
     { d: 'M214 146 C222 140 228 148 230 158 C232 168 228 178 222 180 C216 182 212 176 212 168 Z' }
    ].forEach(a2 => {
      const ear = ce('path', { ...a2, fill: '#F5D0A9' });
      g.appendChild(ear);
    });

    // Neck skin
    const neck = ce('path', {
      d: 'M142 226 C140 234 138 244 136 254 L184 254 C182 244 180 234 178 226 ' +
         'C170 230 150 230 142 226 Z',
      fill: '#F0C8A0'
    });
    g.appendChild(neck);

    // Hair fill - dirty blonde
    const hair = ce('path', {
      d: 'M106 142 C104 120 110 96 126 84 C140 76 158 72 170 74 ' +
         'C182 76 198 82 208 96 C216 108 218 124 214 142 ' +
         'L210 140 C210 130 206 118 198 108 C190 98 178 92 168 90 ' +
         'C156 88 144 92 134 98 C122 108 114 122 112 138 Z',
      fill: '#C4A265'
    });
    if (a) hair.classList.add('active-element');
    g.appendChild(hair);

    // Hair highlights
    const hl = ce('path', {
      d: 'M130 86 C140 80 155 78 168 82 L166 86 C155 82 142 84 132 90 Z',
      fill: '#D4B878', stroke: 'none'
    });
    g.appendChild(hl);

    // Hand skin fills
    const handL = ce('path', {
      d: 'M112 254 C106 250 100 252 98 258 C96 264 100 270 106 272 L116 268 Z',
      fill: '#F5D0A9'
    });
    g.appendChild(handL);
  },

  // 8: Color - hoodie yellow, cup
  (g, a) => {
    // Hoodie fill
    const hoodie = ce('path', {
      d: 'M136 254 C120 258 90 268 74 282 C64 292 60 310 60 340 L60 420 ' +
         'L260 420 L260 340 C260 310 256 292 246 282 C230 268 200 258 184 254 ' +
         'C180 260 172 272 160 278 C148 272 140 260 136 254 Z',
      fill: '#FFD740'
    });
    if (a) hoodie.classList.add('active-element');
    g.appendChild(hoodie);

    // Hood darker
    const hood = ce('path', {
      d: 'M118 252 C112 248 106 250 104 258 C102 266 108 272 116 270 ' +
         'C130 276 146 278 160 278 C174 278 190 276 204 270 ' +
         'C212 272 218 266 216 258 C214 250 208 248 202 252 ' +
         'C196 256 186 260 180 260 L140 260 C134 260 124 256 118 252 Z',
      fill: '#FFC400'
    });
    if (a) hood.classList.add('active-element');
    g.appendChild(hood);

    // Pocket shadow
    const pocket = ce('path', {
      d: 'M104 350 C106 342 132 336 160 336 C188 336 214 342 216 350 ' +
         'C214 358 188 364 160 364 C132 364 106 358 104 350 Z',
      fill: '#FFB300', stroke: 'none'
    });
    g.appendChild(pocket);

    // Cup fill
    const cup = ce('path', {
      d: 'M221 300 L219 329 C219 334 225 338 232 338 C239 338 243 334 243 329 L241 300 Z',
      fill: '#E0E0E0'
    });
    g.appendChild(cup);
    // Liquid
    const liq = ce('path', {
      d: 'M222 308 C228 310 236 310 240 308 L240 329 C240 334 236 336 232 336 C228 336 224 334 222 329 Z',
      fill: '#D4A44C', opacity: '0.5'
    });
    g.appendChild(liq);
  },

  // 9: Final details - blush, eye shine, mouth color, food, shadows
  (g, a) => {
    // Rosy cheeks
    [{ cx: 126, cy: 182 }, { cx: 194, cy: 182 }].forEach(p => {
      const c = ce('ellipse', { ...p, rx: 14, ry: 8, fill: '#FFAB91', opacity: '0.4' });
      if (a) c.classList.add('active-element');
      g.appendChild(c);
    });
    // Eye shine
    [{ cx: 139, cy: 146 }, { cx: 181, cy: 146 }].forEach(p => {
      const s = ce('circle', { ...p, r: 2.5, fill: 'white' });
      if (a) s.classList.add('active-element');
      g.appendChild(s);
    });
    // Lip/mouth color
    const mouth = ce('path', {
      d: 'M140 194 C150 198 160 198 172 196 L182 192 ' +
         'C178 206 168 214 160 214 C152 214 142 206 138 192 Z',
      fill: '#E57373', opacity: '0.6'
    });
    if (a) mouth.classList.add('active-element');
    g.appendChild(mouth);
    // Food crumb color
    const food = ce('path', {
      d: 'M96 238 C94 232 100 228 108 230 C112 232 112 238 108 240 Z',
      fill: '#F5DEB3'
    });
    if (a) food.classList.add('active-element');
    g.appendChild(food);
    // Nose shadow
    const ns = ce('path', {
      d: 'M152 170 C154 174 158 176 162 174 L164 170 C162 172 156 172 152 170 Z',
      fill: '#E8C09A', opacity: '0.5'
    });
    g.appendChild(ns);
    // Under-chin shadow
    const cs = ce('path', {
      d: 'M140 224 C150 230 170 230 180 224 C176 228 164 232 160 232 C156 232 144 228 140 224 Z',
      fill: '#D4A87A', opacity: '0.3'
    });
    g.appendChild(cs);
    // Hoodie wrinkle details
    paths(g, [
      'M120 300 C128 296 140 294 160 294',
      'M200 300 C192 296 180 294 160 294',
      'M130 380 C140 376 150 374 160 374',
      'M190 380 C180 376 170 374 160 374',
    ], a, light);
  }
];

// ===================================================================
// SANDRA - Woman, oval face, wavy brown hair in ponytail, pink jacket
// over black top with cursive text, playing dominoes, gentle expression
// ===================================================================
const sandraLayers = [
  // 0: Face shape - elegant oval, defined cheekbones, soft chin
  (g, a) => {
    paths(g, [
      // Face contour - oval, narrower at jaw, defined cheekbones
      'M108 152 C106 124 116 98 134 86 C148 78 168 78 182 86 ' +
      'C200 98 210 124 208 152 ' +
      'C210 170 208 188 200 202 C194 212 186 220 176 226 ' +
      'C168 232 148 232 140 226 C130 220 122 212 116 202 ' +
      'C108 188 106 170 108 152',
    ], a);
    // Cheekbone definition
    paths(g, [
      'M112 168 C114 172 118 176 124 178',
      'M204 168 C202 172 198 176 192 178',
    ], a, light);
    // Jawline refinement
    paths(g, [
      'M124 210 C132 220 148 226 160 228 C172 226 184 220 192 210',
    ], a, light);
    // Chin
    paths(g, [
      'M148 226 C154 232 162 232 168 226',
    ], a, light);
  },

  // 1: Eyes - almond shaped, expressive, looking down at dominoes
  (g, a) => {
    // Left eye - almond, looking slightly down
    const le = ce('path', { d: 'M122 148 C126 140 136 137 144 140 C150 143 150 152 144 155 C138 158 126 156 122 148 Z', fill: 'none' });
    stroke(le, a);
    g.appendChild(le);
    const li = ce('ellipse', { cx: 136, cy: 149, rx: 5.5, ry: 6, fill: a ? HIGHLIGHT : '#5E4023' });
    if (a) li.classList.add('active-element');
    g.appendChild(li);
    const lpu = ce('circle', { cx: 137, cy: 150, r: 2.8, fill: '#1A0E04' });
    g.appendChild(lpu);
    // Upper lid crease
    paths(g, ['M120 140 C128 132 140 130 148 136'], a, light);
    // Lower lash line
    paths(g, ['M124 152 C130 156 138 158 144 154'], a, light);
    // Eyelashes (top)
    paths(g, [
      'M124 146 C122 144 121 142 122 140',
      'M128 143 C126 140 126 138 127 136',
      'M144 140 C146 138 148 137 149 138',
    ], a, light);

    // Right eye
    const re = ce('path', { d: 'M172 148 C176 140 186 137 194 140 C200 143 200 152 194 155 C188 158 176 156 172 148 Z', fill: 'none' });
    stroke(re, a);
    g.appendChild(re);
    const ri = ce('ellipse', { cx: 186, cy: 149, rx: 5.5, ry: 6, fill: a ? HIGHLIGHT : '#5E4023' });
    if (a) ri.classList.add('active-element');
    g.appendChild(ri);
    const rpu = ce('circle', { cx: 187, cy: 150, r: 2.8, fill: '#1A0E04' });
    g.appendChild(rpu);
    paths(g, ['M170 140 C178 132 190 130 198 136'], a, light);
    paths(g, ['M174 152 C180 156 188 158 194 154'], a, light);
    paths(g, [
      'M194 140 C196 138 198 137 199 138',
      'M190 138 C192 136 192 134 191 132',
    ], a, light);

    // Eyebrows - thin, feminine, arched
    paths(g, [
      'M118 132 C126 124 138 122 148 126',
      'M168 126 C178 122 190 124 198 132',
    ], a);
  },

  // 2: Nose and gentle smile
  (g, a) => {
    // Nose - feminine, refined
    paths(g, [
      // Bridge (subtle)
      'M156 144 C155 154 154 164 152 170',
      // Tip and nostrils
      'M146 172 C148 178 152 180 158 180 C162 180 166 178 168 172',
      'M148 176 C146 174 145 170 147 168',
      'M166 176 C168 174 169 170 167 168',
    ], a);

    // Mouth - gentle smile, lips together
    paths(g, [
      // Upper lip - cupid's bow
      'M138 196 C142 192 148 190 154 192 C156 190 160 190 162 192 C168 190 174 192 178 196',
      // Lower lip
      'M138 196 C144 204 152 208 158 208 C164 208 172 204 178 196',
      // Lip line
      'M140 196 C148 198 158 198 168 198 C174 197 176 196 178 196',
    ], a);
    // Smile lines
    paths(g, [
      'M132 192 C134 196 136 200 136 196',
      'M184 192 C182 196 180 200 180 196',
    ], a, light);
  },

  // 3: Hair - wavy brown, pulled back, ponytail, loose strands framing face
  (g, a) => {
    // Hair mass
    paths(g, [
      // Top of head hair volume
      'M104 148 C100 120 108 90 128 76 C142 66 164 64 180 70 ' +
      'C196 76 210 94 214 120 C216 136 214 148 212 152',
      // Hair line at forehead - with slight widow's peak
      'M112 144 C114 128 120 110 132 98 C142 90 154 86 166 88 ' +
      'C178 90 190 96 198 108 C204 118 208 132 208 148',
    ], a);
    // Ponytail going back
    paths(g, [
      'M190 84 C202 78 214 82 220 90 C228 100 232 116 230 132 ' +
      'C228 146 224 158 218 168',
      'M192 80 C198 76 206 74 214 78',
    ], a);
    // Loose strands framing face
    paths(g, [
      // Left side strands
      'M112 140 C108 150 104 166 106 180 C108 192 112 200 114 206',
      'M114 136 C110 148 108 162 110 174',
      // Right side strands
      'M208 140 C212 150 216 166 214 180 C212 192 210 198 208 204',
    ], a, light);
    // Hair wave texture
    paths(g, [
      'M126 80 C134 74 146 70 160 72 C172 74 182 78 190 84',
      'M116 100 C124 90 138 84 152 84 C166 84 178 88 190 96',
      'M112 120 C118 108 132 98 146 96 C160 96 174 100 186 108',
      // Ponytail waves
      'M214 86 C220 92 224 102 226 114 C228 124 226 136 222 148',
      'M218 94 C222 100 224 112 224 124',
      'M216 108 C220 114 222 126 220 138',
    ], a, light);
    // Hair band/elastic
    paths(g, [
      'M188 82 C192 78 196 78 200 82 C196 86 192 86 188 82',
    ], a);
  },

  // 4: Ears (partially hidden by hair) and neck
  (g, a) => {
    // Left ear - partially visible behind hair
    paths(g, [
      'M108 154 C102 150 98 156 96 164 C94 172 98 180 104 180',
      'M100 158 C98 164 98 172 102 176',
    ], a);
    // Right ear
    paths(g, [
      'M208 154 C214 150 218 156 220 164 C222 172 218 180 212 180',
      'M216 158 C218 164 218 172 214 176',
    ], a);
    // Neck - slender, feminine
    paths(g, [
      'M142 228 C140 236 138 246 136 256',
      'M174 228 C176 236 178 246 180 256',
    ], a);
    // Neck tendon hints
    paths(g, [
      'M148 232 C150 240 150 250 148 258',
      'M168 232 C166 240 166 250 168 258',
    ], a, light);
  },

  // 5: Pink jacket open over black top with cursive text
  (g, a) => {
    // Shoulders and jacket
    paths(g, [
      // Left shoulder
      'M136 256 C118 260 88 270 70 286 C58 298 54 316 54 346 L54 420',
      // Right shoulder
      'M180 256 C198 260 228 270 246 286 C258 298 262 316 262 346 L262 420',
    ], a);
    // Jacket opening - V shape
    paths(g, [
      'M128 258 L140 310 L148 420',
      'M188 258 L176 310 L168 420',
    ], a);
    // Collar/lapel
    paths(g, [
      'M128 258 C124 254 118 254 114 260 C110 266 114 272 120 270',
      'M188 258 C192 254 198 254 202 260 C206 266 202 272 196 270',
    ], a);
    // Black top neckline (V-neck)
    paths(g, [
      'M132 260 C140 264 150 280 158 300',
      'M184 260 C176 264 166 280 158 300',
    ], a);
    // Cursive text on black top (just suggesting it)
    paths(g, [
      'M144 290 C148 286 152 288 156 284 C160 286 164 284 168 288',
    ], a, light);
    // Jacket hem and fold lines
    paths(g, [
      'M120 270 C116 290 112 320 108 360',
      'M196 270 C200 290 204 320 208 360',
    ], a, light);
  },

  // 6: Arms and hands holding dominoes
  (g, a) => {
    // Left arm
    paths(g, [
      'M70 286 C56 300 44 324 42 350 C40 368 44 380 52 386',
      'M52 386 C60 378 72 360 84 340 C94 322 102 306 110 296',
    ], a);
    // Left hand - fingers spread, holding dominoes
    paths(g, [
      // Palm
      'M98 300 C92 296 86 298 84 304 C82 310 86 316 92 318',
      // Fingers
      'M86 302 C82 298 78 294 76 290 C74 286 76 282 80 282 C84 282 86 286 86 290',
      'M84 306 C78 302 74 296 72 292 C70 288 72 284 76 284',
      'M84 310 C78 308 74 304 72 300 C70 296 72 292 76 294',
      // Thumb
      'M96 298 C100 294 102 288 100 284 C98 280 94 280 92 284',
    ], a);
    // Domino pieces in left hand
    paths(g, [
      'M72 278 L84 278 L84 292 L72 292 Z',
      'M72 285 L84 285',
      // Dots
    ], a);
    const dots1 = [[76, 282], [80, 282], [76, 288], [80, 288]];
    dots1.forEach(([cx, cy]) => {
      const d = ce('circle', { cx, cy, r: 1.2, fill: a ? HIGHLIGHT : PENCIL });
      g.appendChild(d);
    });

    // Right arm
    paths(g, [
      'M246 286 C260 300 272 324 274 350 C276 368 272 380 264 386',
      'M264 386 C256 378 244 360 232 340 C222 322 214 306 206 296',
    ], a);
    // Right hand
    paths(g, [
      'M218 300 C224 296 230 298 232 304 C234 310 230 316 224 318',
      'M230 302 C234 298 238 294 240 290 C242 286 240 282 236 282 C232 282 230 286 230 290',
      'M232 306 C238 302 242 296 244 292 C246 288 244 284 240 284',
      'M220 298 C216 294 214 288 216 284 C218 280 222 280 224 284',
    ], a);
    // Domino in right hand
    paths(g, [
      'M232 278 L244 278 L244 292 L232 292 Z',
      'M232 285 L244 285',
    ], a);
    const dots2 = [[236, 282], [240, 282], [238, 288]];
    dots2.forEach(([cx, cy]) => {
      const d = ce('circle', { cx, cy, r: 1.2, fill: a ? HIGHLIGHT : PENCIL });
      g.appendChild(d);
    });
  },

  // 7: Color - skin, hair (brown with golden highlights)
  (g, a) => {
    // Face skin
    const skin = ce('path', {
      d: 'M110 152 C108 126 118 100 136 88 C150 80 166 80 180 88 ' +
         'C198 100 208 126 206 152 C208 170 206 188 198 202 ' +
         'C192 212 184 220 174 226 C166 230 150 230 142 226 ' +
         'C132 220 124 212 118 202 C110 188 108 170 110 152 Z',
      fill: '#FADCC2'
    });
    if (a) skin.classList.add('active-element');
    g.appendChild(skin);
    // Ear skin
    const earL = ce('path', { d: 'M108 154 C102 150 98 156 96 164 C94 172 98 180 104 180 L108 170 Z', fill: '#FADCC2' });
    g.appendChild(earL);
    const earR = ce('path', { d: 'M208 154 C214 150 218 156 220 164 C222 172 218 180 212 180 L208 170 Z', fill: '#FADCC2' });
    g.appendChild(earR);
    // Neck skin
    const neck = ce('path', {
      d: 'M142 228 C140 236 138 246 136 256 L180 256 C178 246 176 236 174 228 C168 232 148 232 142 228 Z',
      fill: '#F0C8A8'
    });
    g.appendChild(neck);
    // Hair fill - brown with warmth
    const hair = ce('path', {
      d: 'M104 148 C100 120 108 90 128 76 C142 66 164 64 180 70 ' +
         'C196 76 210 94 214 120 C216 136 214 148 212 152 ' +
         'L208 148 C208 132 204 118 198 108 C190 96 178 90 166 88 ' +
         'C154 86 142 90 132 98 C120 110 114 128 112 144 Z',
      fill: '#8B6538'
    });
    if (a) hair.classList.add('active-element');
    g.appendChild(hair);
    // Ponytail fill
    const pony = ce('path', {
      d: 'M190 84 C202 78 214 82 220 90 C228 100 232 116 230 132 ' +
         'C228 146 224 158 218 168 L214 164 C220 154 224 142 226 128 ' +
         'C228 114 224 98 218 90 C212 82 202 80 192 84 Z',
      fill: '#8B6538'
    });
    g.appendChild(pony);
    // Hair highlights
    const hhl = ce('path', {
      d: 'M130 80 C142 72 160 70 176 74 L174 78 C160 74 144 76 132 84 Z',
      fill: '#A9804E'
    });
    g.appendChild(hhl);
    // Side strand fills
    const stL = ce('path', {
      d: 'M112 140 C108 150 104 166 106 180 C108 192 112 200 114 206 ' +
         'L118 204 C116 198 112 190 110 178 C108 166 112 150 116 140 Z',
      fill: '#7A5830'
    });
    g.appendChild(stL);
    // Hand skin
    const hfL = ce('ellipse', { cx: 88, cy: 304, rx: 12, ry: 14, fill: '#FADCC2', stroke: 'none' });
    g.appendChild(hfL);
    const hfR = ce('ellipse', { cx: 228, cy: 304, rx: 12, ry: 14, fill: '#FADCC2', stroke: 'none' });
    g.appendChild(hfR);
  },

  // 8: Color - clothing (pink jacket, black top)
  (g, a) => {
    // Black top fill (V-neck area)
    const top = ce('path', {
      d: 'M134 260 C142 264 152 280 158 300 L158 420 L168 420 L158 300 ' +
         'C166 280 176 264 182 260 L188 258 C192 254 198 254 202 260 ' +
         'L196 270 C200 290 204 320 208 360 L208 420 L108 420 L108 360 ' +
         'C112 320 116 290 120 270 L114 260 C110 266 114 272 120 270 ' +
         'L128 258 Z',
      fill: '#F48FB1'
    });
    if (a) top.classList.add('active-element');
    g.appendChild(top);
    // Black inner top
    const inner = ce('path', {
      d: 'M134 260 C142 264 152 280 158 300 L158 420 L168 420 L158 300 ' +
         'C166 280 176 264 182 260 ' +
         'C178 262 170 270 164 282 L158 420 L148 420 L152 282 ' +
         'C146 270 138 262 134 260 Z',
      fill: '#37474F'
    });
    if (a) inner.classList.add('active-element');
    g.appendChild(inner);

    // Domino fills
    const df1 = ce('rect', { x: 73, y: 279, width: 10, height: 12, rx: 1, fill: '#ECEFF1' });
    g.appendChild(df1);
    const df2 = ce('rect', { x: 233, y: 279, width: 10, height: 12, rx: 1, fill: '#ECEFF1' });
    g.appendChild(df2);
  },

  // 9: Final details
  (g, a) => {
    // Rosy cheeks
    [{ cx: 122, cy: 180 }, { cx: 194, cy: 180 }].forEach(p => {
      const c = ce('ellipse', { ...p, rx: 12, ry: 7, fill: '#F48FB1', opacity: '0.3' });
      if (a) c.classList.add('active-element');
      g.appendChild(c);
    });
    // Eye shine
    [{ cx: 134, cy: 147 }, { cx: 184, cy: 147 }].forEach(p => {
      const s = ce('circle', { ...p, r: 2, fill: 'white' });
      if (a) s.classList.add('active-element');
      g.appendChild(s);
    });
    // Lip color
    const lips = ce('path', {
      d: 'M140 197 C148 200 158 200 170 198 L178 196 ' +
         'C172 204 164 208 158 208 C152 208 144 204 138 196 Z',
      fill: '#E57373', opacity: '0.5'
    });
    if (a) lips.classList.add('active-element');
    g.appendChild(lips);
    // Watch/bracelet
    const watch = ce('rect', { x: 48, y: 378, width: 10, height: 8, rx: 2, fill: '#78909C' });
    if (a) watch.classList.add('active-element');
    g.appendChild(watch);
    // Nose shadow
    const ns = ce('path', {
      d: 'M152 174 C154 178 158 180 162 178 C164 176 164 172 162 170 Z',
      fill: '#E8C09A', opacity: '0.4'
    });
    g.appendChild(ns);
    // Chin shadow
    const cs = ce('path', {
      d: 'M144 224 C152 230 164 230 172 224 C168 228 160 232 158 232 C156 232 148 228 144 224 Z',
      fill: '#D4A87A', opacity: '0.25'
    });
    g.appendChild(cs);
    // Jacket fold shadows
    paths(g, [
      'M108 290 C112 286 120 284 128 286',
      'M208 290 C204 286 196 284 188 286',
      'M106 340 C110 336 118 334 126 336',
      'M210 340 C206 336 198 334 190 336',
    ], a, light);
    // Cursive text highlight on black top
    const txt = ce('path', {
      d: 'M146 290 C150 286 154 288 158 284 C162 286 166 284 170 288',
      fill: 'none', stroke: '#B0BEC5', 'stroke-width': '0.8'
    });
    if (a) txt.classList.add('active-element');
    g.appendChild(txt);
  }
];

// ===================================================================
// BRUNO - Man, angular lean face, buzzed dark hair, stubble/short beard,
// dark navy jacket with orange accents + "PESSOAL" logo, focused expression
// ===================================================================
const brunoLayers = [
  // 0: Face shape - angular, strong jaw, lean, slightly long
  (g, a) => {
    paths(g, [
      // Face contour - angular jaw, high cheekbones, defined chin
      'M104 150 C102 122 110 96 130 84 C144 76 168 76 182 84 ' +
      'C200 96 208 122 210 150 ' +
      'C212 170 210 190 204 204 ' +
      'C198 216 190 226 180 232 ' +
      'C172 238 164 240 158 240 C152 240 144 238 136 232 ' +
      'C126 226 118 216 112 204 ' +
      'C106 190 104 170 104 150',
    ], a);
    // Jawline - strong, angular
    paths(g, [
      'M112 196 C116 210 126 224 136 232',
      'M204 196 C200 210 190 224 180 232',
    ], a);
    // Cheekbone lines (lean face)
    paths(g, [
      'M108 166 C112 172 116 176 122 178',
      'M208 166 C204 172 200 176 194 178',
    ], a, light);
    // Chin cleft hint
    paths(g, ['M154 236 C156 238 160 238 162 236'], a, light);
  },

  // 1: Eyes - dark, slightly hooded, attentive, looking down
  (g, a) => {
    // Left eye - slightly hooded lid
    const le = ce('path', { d: 'M122 150 C126 143 134 140 140 143 C146 146 146 154 140 157 C134 160 126 157 122 150 Z', fill: 'none' });
    stroke(le, a);
    g.appendChild(le);
    // Hooded lid fold
    paths(g, [
      'M120 146 C124 138 134 134 144 138',
      'M120 142 C126 134 138 132 146 136',
    ], a, light);
    const li = ce('ellipse', { cx: 134, cy: 151, rx: 5, ry: 5.5, fill: a ? HIGHLIGHT : '#2C1810' });
    if (a) li.classList.add('active-element');
    g.appendChild(li);
    const lpu = ce('circle', { cx: 135, cy: 151, r: 2.5, fill: '#0D0604' });
    g.appendChild(lpu);

    // Right eye
    const re = ce('path', { d: 'M174 150 C178 143 186 140 192 143 C198 146 198 154 192 157 C186 160 178 157 174 150 Z', fill: 'none' });
    stroke(re, a);
    g.appendChild(re);
    paths(g, [
      'M172 146 C176 138 186 134 196 138',
      'M172 142 C178 134 190 132 198 136',
    ], a, light);
    const ri = ce('ellipse', { cx: 186, cy: 151, rx: 5, ry: 5.5, fill: a ? HIGHLIGHT : '#2C1810' });
    if (a) ri.classList.add('active-element');
    g.appendChild(ri);
    const rpu = ce('circle', { cx: 187, cy: 151, r: 2.5, fill: '#0D0604' });
    g.appendChild(rpu);

    // Thick eyebrows
    paths(g, [
      'M116 132 C124 124 136 122 146 126',
      'M170 126 C180 122 192 124 200 132',
    ], a);
    // Brow ridge shadow
    paths(g, [
      'M118 136 C126 130 138 128 146 132',
      'M170 132 C178 128 190 130 198 136',
    ], a, light);
  },

  // 2: Nose (straight, angular, prominent) and mouth (focused expression)
  (g, a) => {
    // Nose - straight bridge, angular, slightly larger/more defined
    paths(g, [
      // Bridge
      'M156 136 C155 146 153 158 152 168',
      // Left side of nose
      'M152 168 C148 172 144 176 142 178 C140 180 140 182 142 182',
      // Right side
      'M156 168 C160 172 164 176 166 178 C168 180 168 182 166 182',
      // Nose tip
      'M142 182 C146 186 154 188 158 188 C162 188 168 186 172 182',
      // Nostrils
      'M146 184 C144 182 143 178 145 176',
      'M168 184 C170 182 171 178 169 176',
    ], a);

    // Mouth - slightly pressed, focused
    paths(g, [
      // Upper lip
      'M136 204 C142 200 150 198 158 200 C162 198 166 200 170 200 C174 198 178 200 180 204',
      // Lower lip
      'M136 204 C142 210 150 214 158 214 C166 214 174 210 180 204',
      // Lip line
      'M138 204 C148 206 158 206 168 206 C174 205 178 204 180 204',
    ], a);
    // Nasolabial folds (subtle)
    paths(g, [
      'M130 184 C132 190 134 196 136 200',
      'M186 184 C184 190 182 196 180 200',
    ], a, light);
  },

  // 3: Hair (buzzed, receding) and stubble/short beard
  (g, a) => {
    // Buzzed hair - very short, receding at temples
    paths(g, [
      // Hairline - receding at temples
      'M116 138 C114 120 120 100 136 90 C148 82 166 80 178 86 ' +
      'C192 92 202 106 206 122 C208 132 208 140 206 146',
    ], a);
    // Buzz texture - dots/stippling for very short hair
    const hairArea = [
      [130, 88], [140, 84], [150, 82], [160, 82], [170, 84], [180, 88],
      [122, 96], [132, 92], [142, 88], [152, 86], [162, 86], [172, 88], [184, 94], [192, 100],
      [118, 108], [128, 100], [138, 94], [148, 90], [158, 90], [168, 94], [178, 98], [188, 104], [198, 112],
      [116, 120], [126, 110], [136, 102], [146, 96], [156, 96], [166, 100], [176, 106], [186, 112], [196, 120], [202, 128],
      [114, 132], [124, 122], [134, 112], [144, 104], [154, 102], [164, 104], [174, 110], [184, 118], [194, 126], [204, 136],
      [118, 140], [128, 130], [138, 120], [148, 112], [158, 110], [168, 112], [178, 118], [188, 126], [198, 134],
    ];
    hairArea.forEach(([cx, cy]) => {
      const d = ce('circle', { cx, cy, r: 0.9, fill: a ? HIGHLIGHT : '#3E2C20' });
      if (a) d.classList.add('active-element');
      g.appendChild(d);
    });

    // Stubble/beard - along jawline, chin, upper lip
    // Jaw stubble
    const beardDots = [
      // Along jaw left
      [112, 196], [114, 200], [116, 204], [118, 208], [120, 212], [122, 216], [124, 220], [128, 224], [132, 228], [136, 230],
      // Chin
      [140, 234], [144, 236], [148, 238], [152, 240], [156, 240], [160, 238], [164, 236], [168, 234],
      // Along jaw right
      [172, 230], [176, 228], [180, 224], [184, 220], [186, 216], [188, 212], [190, 208], [192, 204], [194, 200], [196, 196],
      // Under chin
      [142, 232], [148, 234], [154, 236], [160, 236], [166, 234], [172, 232],
      // Cheek stubble
      [114, 190], [116, 194], [194, 190], [192, 194],
      [120, 186], [196, 186],
      // Mustache area
      [140, 198], [144, 196], [148, 196], [152, 196], [156, 196], [160, 196], [164, 196], [168, 196], [172, 198],
      [142, 200], [146, 198], [150, 198], [154, 198], [158, 198], [162, 198], [166, 198], [170, 200],
    ];
    beardDots.forEach(([cx, cy]) => {
      const d = ce('circle', { cx, cy, r: 0.7, fill: a ? HIGHLIGHT : '#4A3628' });
      if (a) d.classList.add('active-element');
      g.appendChild(d);
    });
  },

  // 4: Ears and wider neck
  (g, a) => {
    // Left ear
    paths(g, [
      'M104 148 C96 142 90 148 88 158 C86 170 90 182 98 184 C104 186 108 178 108 170',
      'M96 152 C92 158 92 170 96 178',
      'M98 156 C96 162 96 170 98 174',
    ], a);
    // Right ear
    paths(g, [
      'M210 148 C218 142 224 148 226 158 C228 170 224 182 218 184 C212 186 208 178 208 170',
      'M218 152 C222 158 222 170 218 178',
      'M216 156 C218 162 218 170 216 174',
    ], a);
    // Neck - thicker, masculine
    paths(g, [
      'M138 238 C136 248 132 260 130 268',
      'M178 238 C180 248 184 260 186 268',
    ], a);
    // Adam's apple hint
    paths(g, [
      'M156 248 C158 244 162 244 164 248 C162 252 158 252 156 248',
    ], a, light);
    // Neck tendons
    paths(g, [
      'M144 240 C142 250 140 260 138 268',
      'M172 240 C174 250 176 260 178 268',
    ], a, light);
  },

  // 5: Dark navy jacket with orange accents, zipper, PESSOAL logo
  (g, a) => {
    // Shoulders and jacket body
    paths(g, [
      'M130 268 C112 274 80 286 62 302 C50 314 46 336 46 366 L46 420',
      'M186 268 C204 274 236 286 254 302 C266 314 270 336 270 366 L270 420',
    ], a);
    // Collar - stand-up collar
    paths(g, [
      'M120 268 C116 264 110 264 108 270 C106 276 110 280 116 278',
      'M196 268 C200 264 206 264 208 270 C210 276 206 280 200 278',
      'M116 278 C128 282 142 284 158 284 C174 284 188 282 200 278',
    ], a);
    // Zipper - center
    paths(g, ['M158 284 L158 420'], a);
    // Zipper teeth detail
    for (let y = 290; y < 415; y += 8) {
      const t = ce('path', { d: `M156 ${y} L160 ${y}`, fill: 'none' });
      light(t, a);
      g.appendChild(t);
    }
    // Zipper pull
    paths(g, ['M155 286 L161 286 L161 294 L155 294 Z'], a);
    // Orange shoulder patches
    paths(g, [
      'M76 296 L96 290 L96 306 L76 312 Z',
      'M240 296 L220 290 L220 306 L240 312 Z',
    ], a);
    // PESSOAL logo area on chest
    paths(g, [
      'M108 310 L140 310 L140 330 L108 330 Z',
    ], a);
    // "PESSOAL" text (simplified)
    paths(g, [
      'M112 316 L114 316 L114 324 L112 324 L112 316',
      'M116 316 L120 316 L120 320 L116 320 L116 324',
      'M122 316 L126 316 M122 320 L126 320 M122 324 L126 324',
    ], a, light);
    // Logo dots (3 colored dots under text)
    [{ cx: 118, cy: 328, fill: '#FF6F00' }, { cx: 124, cy: 328, fill: '#4CAF50' }, { cx: 130, cy: 328, fill: '#2196F3' }].forEach(attrs => {
      const d = ce('circle', { ...attrs, r: 2, stroke: a ? HIGHLIGHT : PENCIL, 'stroke-width': a ? 1 : 0.5 });
      if (a) d.classList.add('active-element');
      g.appendChild(d);
    });
    // Pocket flap
    paths(g, [
      'M180 330 L240 330',
      'M185 334 L235 334',
    ], a, light);
  },

  // 6: Arms and hands - left hand gesturing, right hand holding/pinching
  (g, a) => {
    // Left arm (gesturing)
    paths(g, [
      'M62 302 C48 318 36 342 34 366 C32 382 36 392 44 396',
      'M44 396 C54 388 66 370 78 348 C88 330 96 314 104 304',
    ], a);
    // Left hand - fingers in pinch/gesture
    paths(g, [
      // Thumb and index pinching together
      'M72 342 C68 336 62 332 58 334 C54 336 52 342 56 346 C60 350 66 348 70 344',
      // Index finger
      'M70 344 C66 338 60 330 56 324 C54 320 56 316 60 316 C64 316 66 320 66 324 C66 328 68 334 72 340',
      // Middle finger
      'M74 346 C70 340 66 332 62 326 C60 322 62 318 66 318',
      // Ring finger
      'M76 350 C74 344 70 336 68 330 C66 326 68 322 72 322',
      // Thumb
      'M80 348 C84 344 86 338 84 332 C82 328 78 326 74 330 C70 334 72 340 76 344',
    ], a);

    // Right arm
    paths(g, [
      'M254 302 C268 318 276 342 278 366 C280 380 276 390 268 394',
      'M268 394 C258 386 248 370 238 350 C228 332 220 316 212 306',
    ], a);
    // Right hand - more relaxed
    paths(g, [
      'M234 344 C230 338 224 334 220 336 C216 338 214 344 218 348',
      'M228 340 C224 334 218 326 216 322 C214 318 216 314 220 314 C224 314 226 318 226 322',
      'M232 344 C230 338 226 330 224 324 C222 320 224 316 228 316',
      'M236 348 C238 344 240 338 238 332 C236 328 232 326 228 330',
    ], a);
  },

  // 7: Color - skin, hair/beard
  (g, a) => {
    // Face skin
    const skin = ce('path', {
      d: 'M106 150 C104 124 112 98 132 86 C146 78 166 78 180 86 ' +
         'C198 98 206 124 208 150 C210 170 208 190 202 204 ' +
         'C196 216 188 226 178 232 C170 238 162 240 158 240 ' +
         'C154 240 146 238 138 232 C128 226 120 216 114 204 ' +
         'C108 190 106 170 106 150 Z',
      fill: '#EDBE8C'
    });
    if (a) skin.classList.add('active-element');
    g.appendChild(skin);

    // Ear skin
    [{ d: 'M104 148 C96 142 90 148 88 158 C86 170 90 182 98 184 C104 186 108 178 108 170 Z' },
     { d: 'M210 148 C218 142 224 148 226 158 C228 170 224 182 218 184 C212 186 208 178 208 170 Z' }
    ].forEach(attrs => {
      const ear = ce('path', { ...attrs, fill: '#EDBE8C' });
      g.appendChild(ear);
    });

    // Neck skin
    const neck = ce('path', {
      d: 'M138 238 C136 248 132 260 130 268 L186 268 C184 260 180 248 178 238 ' +
         'C170 242 148 242 138 238 Z',
      fill: '#DEB07A'
    });
    g.appendChild(neck);

    // Buzzed hair fill
    const hairFill = ce('path', {
      d: 'M116 138 C114 120 120 100 136 90 C148 82 166 80 178 86 ' +
         'C192 92 202 106 206 122 C208 132 208 140 206 146 ' +
         'L204 140 C202 130 198 118 192 108 C184 96 174 90 164 88 ' +
         'C152 86 142 90 134 98 C124 108 118 122 116 136 Z',
      fill: '#3E2C20', opacity: '0.5'
    });
    if (a) hairFill.classList.add('active-element');
    g.appendChild(hairFill);

    // Beard/stubble shadow on jaw
    const beardShadow = ce('path', {
      d: 'M116 196 C118 210 126 224 136 232 C144 238 152 240 158 240 ' +
         'C164 240 172 238 180 232 C190 224 198 210 200 196 ' +
         'C196 200 190 210 182 218 C174 226 164 232 158 232 ' +
         'C152 232 142 226 134 218 C126 210 120 200 116 196 Z',
      fill: '#5D4037', opacity: '0.25'
    });
    if (a) beardShadow.classList.add('active-element');
    g.appendChild(beardShadow);

    // Hand skin
    const hfL = ce('ellipse', { cx: 68, cy: 340, rx: 14, ry: 12, fill: '#EDBE8C', stroke: 'none' });
    g.appendChild(hfL);
    const hfR = ce('ellipse', { cx: 228, cy: 340, rx: 14, ry: 12, fill: '#EDBE8C', stroke: 'none' });
    g.appendChild(hfR);
  },

  // 8: Color - jacket (dark navy + orange accents)
  (g, a) => {
    // Jacket fill
    const jacket = ce('path', {
      d: 'M130 268 C112 274 80 286 62 302 C50 314 46 336 46 366 L46 420 ' +
         'L270 420 L270 366 C270 336 266 314 254 302 C236 286 204 274 186 268 ' +
         'C182 272 170 280 158 284 C146 280 134 272 130 268 Z',
      fill: '#1B2632'
    });
    if (a) jacket.classList.add('active-element');
    g.appendChild(jacket);

    // Collar fill
    const collar = ce('path', {
      d: 'M120 268 C116 264 110 264 108 270 C106 276 110 280 116 278 ' +
         'C128 282 142 284 158 284 C174 284 188 282 200 278 ' +
         'C206 280 210 276 208 270 C206 264 200 264 196 268 ' +
         'C190 272 174 278 158 280 C142 278 128 274 120 268 Z',
      fill: '#263842'
    });
    g.appendChild(collar);

    // Orange accent patches
    const op1 = ce('path', { d: 'M78 298 L98 292 L98 304 L78 310 Z', fill: '#FF6F00' });
    if (a) op1.classList.add('active-element');
    g.appendChild(op1);
    const op2 = ce('path', { d: 'M238 298 L218 292 L218 304 L238 310 Z', fill: '#FF6F00' });
    if (a) op2.classList.add('active-element');
    g.appendChild(op2);

    // Logo background
    const logoBg = ce('rect', { x: 110, y: 312, width: 30, height: 18, rx: 2, fill: '#2C3E4E' });
    g.appendChild(logoBg);

    // Zipper fill
    const zip = ce('rect', { x: 156, y: 284, width: 4, height: 136, fill: '#546E7A' });
    g.appendChild(zip);

    // Orange zipper pull
    const pull = ce('rect', { x: 154, y: 286, width: 8, height: 10, rx: 1, fill: '#FF6F00' });
    if (a) pull.classList.add('active-element');
    g.appendChild(pull);
  },

  // 9: Final details - eye shine, lip tone, shadows
  (g, a) => {
    // Eye shine
    [{ cx: 132, cy: 149 }, { cx: 184, cy: 149 }].forEach(p => {
      const s = ce('circle', { ...p, r: 2, fill: 'white' });
      if (a) s.classList.add('active-element');
      g.appendChild(s);
    });
    // Lip color (subtle, masculine)
    const lips = ce('path', {
      d: 'M140 204 C148 207 158 207 170 205 L180 204 ' +
         'C174 210 166 214 158 214 C150 214 142 210 136 204 Z',
      fill: '#C8907A', opacity: '0.35'
    });
    if (a) lips.classList.add('active-element');
    g.appendChild(lips);
    // Under-eye slight shadow (tired/focused look)
    [{ d: 'M124 156 C128 160 136 162 142 158' },
     { d: 'M174 156 C178 160 186 162 192 158' }
    ].forEach(attrs => {
      const s = ce('path', { ...attrs, fill: 'none', stroke: '#B8976E', 'stroke-width': '0.7' });
      if (a) s.classList.add('active-element');
      g.appendChild(s);
    });
    // Chin shadow / beard emphasis
    const chinSh = ce('path', {
      d: 'M140 234 C150 240 166 240 176 234 C172 238 164 242 158 242 C152 242 144 238 140 234 Z',
      fill: '#5D4037', opacity: '0.2'
    });
    if (a) chinSh.classList.add('active-element');
    g.appendChild(chinSh);
    // Nose bridge shadow
    const noseSh = ce('path', {
      d: 'M154 142 C153 152 152 162 150 170 L148 170 C150 160 151 150 152 140 Z',
      fill: '#D4A87A', opacity: '0.25'
    });
    g.appendChild(noseSh);
    // Logo text detail (white)
    const logoTxt = ce('text', {
      x: '114', y: '324', fill: '#ECEFF1', 'font-size': '6', 'font-weight': 'bold', 'font-family': 'Arial'
    });
    logoTxt.textContent = 'PESSOAL';
    if (a) logoTxt.classList.add('active-element');
    g.appendChild(logoTxt);
    // Logo dots colored
    [{ cx: 118, cy: 328, fill: '#FF6F00' }, { cx: 124, cy: 328, fill: '#4CAF50' }, { cx: 130, cy: 328, fill: '#2196F3' }].forEach(attrs => {
      const d = ce('circle', { ...attrs, r: 2 });
      g.appendChild(d);
    });
    // Jacket wrinkle lines
    paths(g, [
      'M100 340 C110 334 124 330 140 332',
      'M216 340 C206 334 192 330 176 332',
      'M90 380 C100 374 116 370 132 372',
      'M226 380 C216 374 200 370 184 372',
    ], a, light);
  }
];

// ===================================================================
// RENDER ENGINE
// ===================================================================
const drawingData = {
  miguel: miguelLayers,
  sandra: sandraLayers,
  bruno: brunoLayers
};

function renderDrawing(memberId, step) {
  const layers = drawingData[memberId];
  if (!layers) return null;

  const svg = ce('svg', { viewBox: VIEWBOX, width: '100%', height: '100%', xmlns: SVG_NS });

  // Paper background
  const bg = ce('rect', { width: 320, height: 450, rx: 12, fill: '#FEFCF8', stroke: '#E8E0D4', 'stroke-width': 1 });
  svg.appendChild(bg);
  // Subtle paper lines
  for (let y = 30; y < 440; y += 16) {
    const line = ce('line', { x1: 16, y1: y, x2: 304, y2: y, stroke: '#F2EDE6', 'stroke-width': 0.4 });
    svg.appendChild(line);
  }

  // Coloring layers FIRST (behind outlines) - layers 7+
  const colorStart = 7;
  for (let i = colorStart; i <= step && i < layers.length; i++) {
    const grp = ce('g', { class: `layer layer-${i}` });
    layers[i](grp, i === step);
    svg.appendChild(grp);
  }

  // Outline layers ON TOP - layers 0-6
  for (let i = 0; i < Math.min(step + 1, colorStart, layers.length); i++) {
    const grp = ce('g', { class: `layer layer-${i}` });
    layers[i](grp, i === step);
    svg.appendChild(grp);
  }

  return svg;
}
