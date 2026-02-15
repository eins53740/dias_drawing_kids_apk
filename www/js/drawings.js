// ===== FULL-SCENE PROGRESSIVE SVG DRAWING SYSTEM =====
const SVG_NS = 'http://www.w3.org/2000/svg';
const VB = '0 0 360 450';
const P = '#4A4A4A'; // pencil
const LP = '#888';    // light pencil
const HL = '#E65100'; // highlight
const PW = 1.6;
const HW = 2.5;
const SW = 1.0;

function ce(t, a) { const e = document.createElementNS(SVG_NS, t); for (const [k, v] of Object.entries(a)) e.setAttribute(k, v); return e; }
function sk(e, a, w) { e.setAttribute('stroke', a ? HL : P); e.setAttribute('stroke-width', a ? HW : (w || PW)); e.setAttribute('stroke-linecap', 'round'); e.setAttribute('stroke-linejoin', 'round'); if (!e.getAttribute('fill')) e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
function lt(e, a) { e.setAttribute('stroke', a ? HL : LP); e.setAttribute('stroke-width', a ? 1.5 : SW); e.setAttribute('stroke-linecap', 'round'); if (!e.getAttribute('fill')) e.setAttribute('fill', 'none'); if (a) e.classList.add('active-element'); }
function pp(g, ds, a, fn) { ds.forEach(d => { const p = ce('path', { d, fill: 'none' }); (fn || sk)(p, a); g.appendChild(p); }); }
function fl(g, d, c, a) { const e = ce('path', { d, fill: c, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }
function fe(g, t, a2, a) { const e = ce(t, { ...a2, stroke: 'none' }); if (a) e.classList.add('active-element'); g.appendChild(e); }

// Scene 1: Bird's-eye view of baby Miguel on striped blanket
const miguelbebeLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Center horizontal guide
    pp(g, ['M 0 225 L 360 225'], a, lt);
    // Head circle guide
    pp(g, ['M 180 55 C 205 55 225 75 225 100 C 225 125 205 145 180 145 C 155 145 135 125 135 100 C 135 75 155 55 180 55 Z'], a, lt);
    // Body oval guide
    pp(g, ['M 180 145 C 220 145 245 175 245 210 C 245 245 220 270 180 270 C 140 270 115 245 115 210 C 115 175 140 145 180 145 Z'], a, lt);
    // Left arm guide
    pp(g, ['M 115 170 L 60 190'], a, lt);
    // Right arm guide
    pp(g, ['M 245 170 L 300 190'], a, lt);
    // Left leg guide
    pp(g, ['M 145 270 L 110 340'], a, lt);
    // Right leg guide
    pp(g, ['M 215 270 L 250 340'], a, lt);
    // Blanket rectangle guide
    pp(g, ['M 20 20 L 340 20 L 340 430 L 20 430 Z'], a, lt);
  },

  // Layer 1: Main figure outlines (head, body)
  (g, a) => {
    // Head - large round baby head
    pp(g, ['M 180 55 C 210 55 228 72 228 102 C 228 132 210 148 180 148 C 150 148 132 132 132 102 C 132 72 150 55 180 55 Z'], a);
    // Body torso - chubby oval
    pp(g, ['M 145 148 C 145 145 155 140 180 140 C 205 140 215 145 215 148 L 225 180 C 232 210 230 245 220 265 C 210 278 190 282 180 282 C 170 282 150 278 140 265 C 130 245 128 210 135 180 Z'], a);
    // Left arm
    pp(g, ['M 135 165 C 120 168 95 175 75 185 C 65 190 58 198 60 205 C 62 212 70 215 80 212 C 95 207 115 195 135 185'], a);
    // Right arm
    pp(g, ['M 225 165 C 240 168 265 175 285 185 C 295 190 302 198 300 205 C 298 212 290 215 280 212 C 265 207 245 195 225 185'], a);
    // Left leg - bent outward
    pp(g, ['M 155 275 C 148 290 130 310 118 325 C 112 335 108 345 115 352 C 122 358 132 355 138 348 C 148 335 155 315 160 295'], a);
    // Right leg - bent outward
    pp(g, ['M 205 275 C 212 290 230 310 242 325 C 248 335 252 345 245 352 C 238 358 228 355 222 348 C 212 335 205 315 200 295'], a);
    // Left foot
    pp(g, ['M 115 348 C 108 352 100 350 98 342 C 96 335 100 330 108 328'], a);
    // Right foot
    pp(g, ['M 245 348 C 252 352 260 350 262 342 C 264 335 260 330 252 328'], a);
  },

  // Layer 2: Face details
  (g, a) => {
    // Left eye
    pp(g, ['M 162 95 C 162 90 168 86 173 86 C 178 86 184 90 184 95 C 184 100 178 104 173 104 C 168 104 162 100 162 95 Z'], a);
    // Right eye
    pp(g, ['M 176 95 C 176 90 182 86 187 86 C 192 86 198 90 198 95 C 198 100 192 104 187 104 C 182 104 176 100 176 95 Z'], a);
    // Left pupil
    fe(g, 'circle', {cx: 174, cy: 96, r: 4, fill: '#2D2D2D'}, a);
    // Right pupil
    fe(g, 'circle', {cx: 188, cy: 96, r: 4, fill: '#2D2D2D'}, a);
    // Nose - small button nose
    pp(g, ['M 178 105 C 176 108 175 112 177 114 C 179 116 181 116 183 114 C 185 112 184 108 182 105'], a);
    // Mouth - small smile
    pp(g, ['M 172 120 C 175 125 178 127 180 127 C 182 127 185 125 188 120'], a);
    // Left ear
    pp(g, ['M 133 95 C 128 90 125 95 125 100 C 125 105 128 110 133 108'], a);
    // Right ear
    pp(g, ['M 227 95 C 232 90 235 95 235 100 C 235 105 232 110 227 108'], a);
  },

  // Layer 3: Hair and baby features
  (g, a) => {
    // Wispy baby hair on top of head
    pp(g, ['M 160 60 C 165 50 175 48 180 50 C 185 48 195 50 200 60'], a);
    pp(g, ['M 155 65 C 160 55 170 52 175 55'], a);
    pp(g, ['M 205 65 C 200 55 190 52 185 55'], a);
    pp(g, ['M 170 56 C 172 48 178 45 180 46 C 182 45 188 48 190 56'], a);
  },

  // Layer 4: Clothing details - knit outfit with V-texture
  (g, a) => {
    // Neckline
    pp(g, ['M 160 148 C 165 155 175 158 180 158 C 185 158 195 155 200 148'], a);
    // V-pattern knit rows on torso
    pp(g, ['M 145 168 L 180 180 L 215 168'], a);
    pp(g, ['M 142 185 L 180 197 L 218 185'], a);
    pp(g, ['M 140 202 L 180 214 L 220 202'], a);
    pp(g, ['M 138 219 L 180 231 L 222 219'], a);
    pp(g, ['M 140 236 L 180 248 L 220 236'], a);
    pp(g, ['M 142 253 L 180 265 L 218 253'], a);
    // Left leg knit pattern
    pp(g, ['M 148 285 L 155 295 L 140 295'], a);
    pp(g, ['M 140 305 L 148 315 L 132 315'], a);
    pp(g, ['M 132 325 L 140 335 L 124 335'], a);
    // Right leg knit pattern
    pp(g, ['M 212 285 L 205 295 L 220 295'], a);
    pp(g, ['M 220 305 L 212 315 L 228 315'], a);
    pp(g, ['M 228 325 L 220 335 L 236 335'], a);
  },

  // Layer 5: Hands, letter M, rosary
  (g, a) => {
    // Letter M block on belly
    pp(g, ['M 165 215 L 195 215 L 195 250 L 165 250 Z'], a);
    // Letter M
    pp(g, ['M 170 245 L 170 222 L 177 235 L 180 230 L 183 235 L 190 222 L 190 245'], a);
    // Left hand fingers (open)
    pp(g, ['M 60 205 C 55 200 52 195 54 192 C 56 190 60 192 62 196'], a);
    pp(g, ['M 62 202 C 58 196 56 191 58 188 C 60 186 64 188 66 193'], a);
    pp(g, ['M 66 200 C 63 194 62 189 64 186 C 66 184 70 186 71 191'], a);
    pp(g, ['M 70 200 C 68 195 68 190 70 188 C 72 186 75 188 75 193'], a);
    // Right hand (holding rosary)
    pp(g, ['M 300 205 C 305 200 308 195 306 192 C 304 190 300 192 298 196'], a);
    pp(g, ['M 296 200 C 300 194 302 189 300 186 C 298 184 294 186 293 191'], a);
    // Rosary string from right hand
    pp(g, ['M 298 200 C 302 210 308 225 310 240 C 312 255 308 270 300 280 C 292 290 280 295 270 292'], a);
    // Rosary beads (alternating blue and red)
    fe(g, 'circle', {cx: 302, cy: 215, r: 4, fill: '#2196F3'}, a);
    fe(g, 'circle', {cx: 306, cy: 228, r: 4, fill: '#F44336'}, a);
    fe(g, 'circle', {cx: 310, cy: 241, r: 4, fill: '#2196F3'}, a);
    fe(g, 'circle', {cx: 310, cy: 254, r: 4, fill: '#F44336'}, a);
    fe(g, 'circle', {cx: 306, cy: 267, r: 4, fill: '#2196F3'}, a);
    fe(g, 'circle', {cx: 300, cy: 278, r: 4, fill: '#F44336'}, a);
    fe(g, 'circle', {cx: 290, cy: 286, r: 4, fill: '#2196F3'}, a);
    fe(g, 'circle', {cx: 278, cy: 292, r: 4, fill: '#F44336'}, a);
    // Rosary cross at end
    pp(g, ['M 270 292 L 270 308'], a);
    pp(g, ['M 264 300 L 276 300'], a);
  },

  // Layer 6: Background - blanket with stripes, pompons
  (g, a) => {
    // Blanket outline
    pp(g, ['M 25 25 L 335 25 L 335 425 L 25 425 Z'], a);
    // Horizontal stripes on blanket
    pp(g, ['M 25 60 L 335 60'], a);
    pp(g, ['M 25 70 L 335 70'], a);
    pp(g, ['M 25 140 L 335 140'], a);
    pp(g, ['M 25 150 L 335 150'], a);
    pp(g, ['M 25 220 L 335 220'], a);
    pp(g, ['M 25 230 L 335 230'], a);
    pp(g, ['M 25 300 L 335 300'], a);
    pp(g, ['M 25 310 L 335 310'], a);
    pp(g, ['M 25 380 L 335 380'], a);
    pp(g, ['M 25 390 L 335 390'], a);
    // Pompons scattered on blanket
    pp(g, ['M 60 108 C 65 103 72 103 76 108 C 80 113 80 120 76 124 C 72 128 65 128 60 124 C 56 120 56 113 60 108 Z'], a);
    pp(g, ['M 300 88 C 305 83 312 83 316 88 C 320 93 320 100 316 104 C 312 108 305 108 300 104 C 296 100 296 93 300 88 Z'], a);
    pp(g, ['M 80 368 C 85 363 92 363 96 368 C 100 373 100 380 96 384 C 92 388 85 388 80 384 C 76 380 76 373 80 368 Z'], a);
    pp(g, ['M 280 348 C 285 343 292 343 296 348 C 300 353 300 360 296 364 C 292 368 285 368 280 364 C 276 360 276 353 280 348 Z'], a);
    pp(g, ['M 50 268 C 55 263 62 263 66 268 C 70 273 70 280 66 284 C 62 288 55 288 50 284 C 46 280 46 273 50 268 Z'], a);
    pp(g, ['M 310 288 C 315 283 322 283 326 288 C 330 293 330 300 326 304 C 322 308 315 308 310 304 C 306 300 306 293 310 288 Z'], a);
  },

  // Layer 7: Color fills for FIGURES (skin, knit clothes)
  (g, a) => {
    // Skin fill - head
    fl(g, 'M 180 55 C 210 55 228 72 228 102 C 228 132 210 148 180 148 C 150 148 132 132 132 102 C 132 72 150 55 180 55 Z', '#F5D0A9', a);
    // Skin fill - left arm
    fl(g, 'M 135 165 C 120 168 95 175 75 185 C 65 190 58 198 60 205 C 62 212 70 215 80 212 C 95 207 115 195 135 185 Z', '#F5D0A9', a);
    // Skin fill - right arm
    fl(g, 'M 225 165 C 240 168 265 175 285 185 C 295 190 302 198 300 205 C 298 212 290 215 280 212 C 265 207 245 195 225 185 Z', '#F5D0A9', a);
    // Skin fill - left hand
    fl(g, 'M 60 205 C 55 195 52 188 58 185 C 64 182 75 186 75 193 C 75 200 65 210 60 205 Z', '#F5D0A9', a);
    // Skin fill - right hand
    fl(g, 'M 300 205 C 305 195 308 188 302 185 C 296 182 290 186 290 193 C 290 200 295 210 300 205 Z', '#F5D0A9', a);
    // Knit outfit fill - torso
    fl(g, 'M 145 148 C 145 145 155 140 180 140 C 205 140 215 145 215 148 L 225 180 C 232 210 230 245 220 265 C 210 278 190 282 180 282 C 170 282 150 278 140 265 C 128 245 128 210 135 180 Z', '#C4A882', a);
    // Knit outfit fill - left leg
    fl(g, 'M 155 275 C 148 290 130 310 118 325 C 112 335 108 345 115 352 C 122 358 132 355 138 348 C 148 335 155 315 160 295 Z', '#C4A882', a);
    // Knit outfit fill - right leg
    fl(g, 'M 205 275 C 212 290 230 310 242 325 C 248 335 252 345 245 352 C 238 358 228 355 222 348 C 212 335 205 315 200 295 Z', '#C4A882', a);
    // Skin fill - left foot
    fl(g, 'M 115 348 C 108 352 100 350 98 342 C 96 335 100 330 108 328 C 112 335 115 345 115 348 Z', '#F5D0A9', a);
    // Skin fill - right foot
    fl(g, 'M 245 348 C 252 352 260 350 262 342 C 264 335 260 330 252 328 C 248 335 245 345 245 348 Z', '#F5D0A9', a);
    // Letter M block fill
    fl(g, 'M 165 215 L 195 215 L 195 250 L 165 250 Z', '#FAFAFA', a);
    // Letter M shadow
    fl(g, 'M 195 215 L 199 219 L 199 254 L 195 250 Z', '#E0E0E0', a);
    // Ears skin fill
    fl(g, 'M 133 95 C 128 90 125 95 125 100 C 125 105 128 110 133 108 Z', '#F5D0A9', a);
    fl(g, 'M 227 95 C 232 90 235 95 235 100 C 235 105 232 110 227 108 Z', '#F5D0A9', a);
    // Eye whites
    fl(g, 'M 162 95 C 162 90 168 86 173 86 C 178 86 184 90 184 95 C 184 100 178 104 173 104 C 168 104 162 100 162 95 Z', '#FFFFFF', a);
    fl(g, 'M 176 95 C 176 90 182 86 187 86 C 192 86 198 90 198 95 C 198 100 192 104 187 104 C 182 104 176 100 176 95 Z', '#FFFFFF', a);
    // Wispy hair fill
    fl(g, 'M 155 65 C 160 50 170 45 180 46 C 190 45 200 50 205 65 C 200 58 190 55 180 56 C 170 55 160 58 155 65 Z', '#A0845C', a);
  },

  // Layer 8: Color fills for SCENE (blanket, stripes, pompons)
  (g, a) => {
    // Blanket base fill
    fl(g, 'M 25 25 L 335 25 L 335 425 L 25 425 Z', '#FEFDF8', a);
    // Stripe fills
    fl(g, 'M 25 58 L 335 58 L 335 72 L 25 72 Z', '#D5D0CB', a);
    fl(g, 'M 25 138 L 335 138 L 335 152 L 25 152 Z', '#D5D0CB', a);
    fl(g, 'M 25 218 L 335 218 L 335 232 L 25 232 Z', '#D5D0CB', a);
    fl(g, 'M 25 298 L 335 298 L 335 312 L 25 312 Z', '#D5D0CB', a);
    fl(g, 'M 25 378 L 335 378 L 335 392 L 25 392 Z', '#D5D0CB', a);
    // Pompon fills
    fe(g, 'circle', {cx: 68, cy: 116, r: 12, fill: '#F44336'}, a);
    fe(g, 'circle', {cx: 308, cy: 96, r: 12, fill: '#2196F3'}, a);
    fe(g, 'circle', {cx: 88, cy: 376, r: 12, fill: '#FFC107'}, a);
    fe(g, 'circle', {cx: 288, cy: 356, r: 12, fill: '#4CAF50'}, a);
    fe(g, 'circle', {cx: 58, cy: 276, r: 12, fill: '#8BC34A'}, a);
    fe(g, 'circle', {cx: 318, cy: 296, r: 12, fill: '#FF9800'}, a);
  },

  // Layer 9: Final polish (eye shine, cheek blush)
  (g, a) => {
    // Eye shine left
    fe(g, 'circle', {cx: 172, cy: 93, r: 1.5, fill: '#FFFFFF'}, a);
    // Eye shine right
    fe(g, 'circle', {cx: 186, cy: 93, r: 1.5, fill: '#FFFFFF'}, a);
    // Left cheek blush
    fe(g, 'ellipse', {cx: 158, cy: 115, rx: 10, ry: 6, fill: '#F8C0B0'}, a);
    // Right cheek blush
    fe(g, 'ellipse', {cx: 202, cy: 115, rx: 10, ry: 6, fill: '#F8C0B0'}, a);
    // Pompon shine dots
    fe(g, 'circle', {cx: 64, cy: 112, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 304, cy: 92, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 84, cy: 372, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 284, cy: 352, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 54, cy: 272, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 314, cy: 292, r: 3, fill: '#FFFFFF'}, a);
    // Rosary cross shine
    fe(g, 'circle', {cx: 270, cy: 298, r: 2, fill: '#FFFFFF'}, a);
    // Baby name text
    const t = ce('text', {x: 180, y: 420, fill: '#C4A882', 'font-size': '14', 'text-anchor': 'middle', 'font-family': 'serif'});
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];

// Scene 2: Baby Miguel mesmerized by baptism candle with azulejo tiles
const batizadoLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Baby head placement circle
    pp(g, ['M 120 150 C 155 150 170 180 170 220 C 170 260 155 290 120 290 C 85 290 70 260 70 220 C 70 180 85 150 120 150 Z'], a, lt);
    // Candle vertical center guide
    pp(g, ['M 240 40 L 240 400'], a, lt);
    // Candle rectangle guide
    pp(g, ['M 222 80 L 258 80 L 258 380 L 222 380 Z'], a, lt);
    // Flame guide
    pp(g, ['M 240 30 L 255 65 L 240 80 L 225 65 Z'], a, lt);
    // Adult hand guide
    pp(g, ['M 285 180 L 330 180 L 330 260 L 285 260 Z'], a, lt);
    // Azulejo grid guides
    pp(g, ['M 0 0 L 360 0 L 360 450 L 0 450 Z'], a, lt);
    pp(g, ['M 60 0 L 60 450'], a, lt);
    pp(g, ['M 120 0 L 120 450'], a, lt);
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 240 0 L 240 450'], a, lt);
    pp(g, ['M 300 0 L 300 450'], a, lt);
    pp(g, ['M 0 60 L 360 60'], a, lt);
    pp(g, ['M 0 120 L 360 120'], a, lt);
  },

  // Layer 1: Main figure outlines (baby head, body, candle)
  (g, a) => {
    // Baby head - turned right, slightly oval from 3/4 view
    pp(g, ['M 120 155 C 155 155 168 178 168 218 C 168 258 155 285 120 285 C 90 285 75 258 75 218 C 75 178 90 155 120 155 Z'], a);
    // Baby neck
    pp(g, ['M 108 282 C 108 292 105 300 105 308 L 135 308 C 135 300 132 292 132 282'], a);
    // Baby shoulders/shirt top
    pp(g, ['M 105 308 C 85 312 55 325 45 340 L 45 450 L 195 450 L 195 340 C 185 325 155 312 135 308'], a);
    // Large candle cylinder
    pp(g, ['M 222 80 L 222 375 C 222 382 228 388 240 388 C 252 388 258 382 258 375 L 258 80 C 258 75 252 70 240 70 C 228 70 222 75 222 80 Z'], a);
    // Candle top rim
    pp(g, ['M 222 80 C 222 88 228 93 240 93 C 252 93 258 88 258 80'], a);
  },

  // Layer 2: Face details - large eyes looking at candle
  (g, a) => {
    // Left eye (farther, slightly smaller due to 3/4 view)
    pp(g, ['M 96 208 C 96 200 102 194 110 194 C 118 194 124 200 124 208 C 124 216 118 222 110 222 C 102 222 96 216 96 208 Z'], a);
    // Right eye (closer to viewer, larger)
    pp(g, ['M 126 206 C 126 197 133 190 142 190 C 151 190 158 197 158 206 C 158 215 151 222 142 222 C 133 222 126 215 126 206 Z'], a);
    // Left pupil - looking right toward candle
    fe(g, 'circle', {cx: 114, cy: 208, r: 5, fill: '#2D2D2D'}, a);
    // Right pupil - looking right toward candle
    fe(g, 'circle', {cx: 148, cy: 206, r: 6, fill: '#2D2D2D'}, a);
    // Left eyebrow
    pp(g, ['M 96 192 C 102 186 112 184 124 188'], a);
    // Right eyebrow
    pp(g, ['M 126 188 C 136 182 148 181 158 186'], a);
    // Nose - small, 3/4 view
    pp(g, ['M 140 225 C 142 232 145 238 148 240 C 144 242 140 241 138 238'], a);
    // Mouth - slightly open in wonder
    pp(g, ['M 122 252 C 128 258 135 260 142 258 C 148 256 150 252 148 250 C 144 254 136 256 128 254 C 124 252 122 252 122 252 Z'], a);
    // Left ear (barely visible)
    pp(g, ['M 78 212 C 72 206 70 212 70 218 C 70 224 72 230 78 228'], a);
    // Upper eyelashes left
    pp(g, ['M 96 204 C 94 200 96 196 98 194'], a);
    pp(g, ['M 108 195 C 108 191 110 189 112 188'], a);
    // Upper eyelashes right
    pp(g, ['M 128 200 C 126 196 128 192 130 190'], a);
    pp(g, ['M 142 191 C 142 187 144 185 146 184'], a);
    pp(g, ['M 155 198 C 158 194 160 192 160 190'], a);
  },

  // Layer 3: Hair, baptism details
  (g, a) => {
    // Baby hair - wispy on top
    pp(g, ['M 95 162 C 100 148 112 142 125 144 C 138 142 150 148 155 162'], a);
    pp(g, ['M 100 158 C 105 146 115 140 120 143'], a);
    pp(g, ['M 140 158 C 135 146 125 140 120 143'], a);
    pp(g, ['M 108 155 C 110 143 118 138 122 140'], a);
    pp(g, ['M 132 155 C 130 143 125 139 122 140'], a);
    // Hair wisps on side
    pp(g, ['M 85 170 C 82 165 84 158 90 155'], a);
    pp(g, ['M 160 175 C 164 168 162 160 155 158'], a);
    // Flame - teardrop shape
    pp(g, ['M 240 38 C 248 48 255 58 255 66 C 255 74 248 80 240 80 C 232 80 225 74 225 66 C 225 58 232 48 240 38 Z'], a);
    // Inner flame
    pp(g, ['M 240 46 C 245 52 249 60 249 66 C 249 72 245 76 240 76 C 235 76 231 72 231 66 C 231 60 235 52 240 46 Z'], a);
    // Flame core
    pp(g, ['M 240 54 C 243 58 245 63 245 67 C 245 72 243 74 240 74 C 237 74 235 72 235 67 C 235 63 237 58 240 54 Z'], a);
  },

  // Layer 4: Clothing details - baptism shirt
  (g, a) => {
    // High collar left
    pp(g, ['M 108 286 C 104 290 100 296 100 302 C 100 308 104 312 108 312'], a);
    // High collar right
    pp(g, ['M 132 286 C 136 290 140 296 140 302 C 140 308 136 312 132 312'], a);
    // Collar band
    pp(g, ['M 100 302 C 108 306 120 308 132 306 C 138 304 140 302 140 302'], a);
    // Shirt front detail - vertical pintuck lines
    pp(g, ['M 112 312 L 112 400'], a);
    pp(g, ['M 118 312 L 118 400'], a);
    pp(g, ['M 124 312 L 124 400'], a);
    pp(g, ['M 130 312 L 130 400'], a);
    // Candle decorative bands
    pp(g, ['M 222 110 L 258 110'], a);
    pp(g, ['M 222 130 L 258 130'], a);
    pp(g, ['M 222 320 L 258 320'], a);
    pp(g, ['M 222 340 L 258 340'], a);
    // Red letter A on candle
    pp(g, ['M 233 245 L 240 218 L 247 245'], a);
    pp(g, ['M 235 236 L 245 236'], a);
    // Gold medallion circle on candle
    pp(g, ['M 240 265 C 248 265 254 271 254 279 C 254 287 248 293 240 293 C 232 293 226 287 226 279 C 226 271 232 265 240 265 Z'], a);
    // Cross inside medallion
    pp(g, ['M 240 269 L 240 289'], a);
    pp(g, ['M 232 279 L 248 279'], a);
  },

  // Layer 5: Adult hand with small candle and ribbon
  (g, a) => {
    // Adult hand holding small candle - from right side
    pp(g, ['M 310 195 C 318 190 325 192 328 198 C 330 204 328 212 322 218 L 320 218 C 326 212 328 204 326 198 C 324 194 320 193 314 196'], a);
    // Fingers wrapped around thin candle
    pp(g, ['M 308 200 C 312 196 316 195 318 198 C 320 202 318 210 314 216'], a);
    pp(g, ['M 304 206 C 308 202 312 200 314 203 C 316 206 314 214 310 220'], a);
    pp(g, ['M 300 212 C 304 208 308 206 310 209 C 312 212 310 220 306 226'], a);
    pp(g, ['M 296 218 C 300 214 304 212 306 215 C 308 218 306 226 302 230'], a);
    // Thumb
    pp(g, ['M 310 195 C 306 198 302 204 300 212'], a);
    // Small thin candle
    pp(g, ['M 314 130 L 314 220 L 320 220 L 320 130 Z'], a);
    // Small flame on thin candle
    pp(g, ['M 317 118 C 320 122 322 127 322 130 C 322 133 320 134 317 134 C 314 134 312 133 312 130 C 312 127 314 122 317 118 Z'], a);
    // Ribbon/bow on small candle
    pp(g, ['M 306 185 C 300 180 296 175 300 172 C 304 170 310 175 314 180'], a);
    pp(g, ['M 320 180 C 324 175 330 170 334 172 C 338 175 334 180 328 185'], a);
    // Ribbon tails
    pp(g, ['M 306 185 C 302 192 298 200 296 205'], a);
    pp(g, ['M 328 185 C 332 192 336 200 338 205'], a);
    // Ribbon center knot
    fe(g, 'circle', {cx: 317, cy: 183, r: 3, fill: '#E8E8E8'}, a);
  },

  // Layer 6: Background - azulejo tiles
  (g, a) => {
    // Tile grid vertical lines
    pp(g, ['M 0 0 L 0 450'], a);
    pp(g, ['M 60 0 L 60 450'], a);
    pp(g, ['M 120 0 L 120 450'], a);
    pp(g, ['M 180 0 L 180 450'], a);
    pp(g, ['M 240 0 L 240 450'], a);
    pp(g, ['M 300 0 L 300 450'], a);
    pp(g, ['M 360 0 L 360 450'], a);
    // Tile grid horizontal lines
    pp(g, ['M 0 0 L 360 0'], a);
    pp(g, ['M 0 60 L 360 60'], a);
    pp(g, ['M 0 120 L 360 120'], a);
    pp(g, ['M 0 180 L 360 180'], a);
    pp(g, ['M 0 240 L 360 240'], a);
    pp(g, ['M 0 300 L 360 300'], a);
    pp(g, ['M 0 360 L 360 360'], a);
    pp(g, ['M 0 420 L 360 420'], a);
    // Azulejo botanical motifs in some tiles (simplified leaf/scroll patterns)
    // Top-left area tiles
    pp(g, ['M 15 15 C 20 10 25 10 30 15 C 35 20 40 30 30 35 C 25 38 20 35 15 30 C 10 25 10 20 15 15'], a);
    pp(g, ['M 45 30 C 50 25 55 30 50 35 C 45 40 40 35 45 30'], a);
    // More tile motifs scattered in visible background areas
    pp(g, ['M 15 75 C 20 70 25 70 30 75 C 35 80 40 90 30 95 C 25 98 20 95 15 90 C 10 85 10 80 15 75'], a);
    pp(g, ['M 315 15 C 320 10 325 10 330 15 C 335 20 340 30 330 35 C 325 38 320 35 315 30 C 310 25 310 20 315 15'], a);
    pp(g, ['M 315 75 C 320 70 325 70 330 75 C 335 80 340 90 330 95 C 325 98 320 95 315 90 C 310 85 310 80 315 75'], a);
    // Tile motifs in lower area
    pp(g, ['M 15 375 C 20 370 25 370 30 375 C 35 380 40 390 30 395 C 25 398 20 395 15 390 C 10 385 10 380 15 375'], a);
    pp(g, ['M 15 435 C 20 430 25 430 30 435 C 35 440 40 445 30 448 C 25 450 20 448 15 444 C 10 440 10 435 15 435'], a);
    pp(g, ['M 315 375 C 320 370 325 370 330 375 C 335 380 340 390 330 395 C 325 398 320 395 315 390 C 310 385 310 380 315 375'], a);
    pp(g, ['M 315 435 C 320 430 325 430 330 435 C 335 440 340 445 330 448 C 325 450 320 448 315 444 C 310 440 310 435 315 435'], a);
  },

  // Layer 7: Color fills for FIGURES
  (g, a) => {
    // Baby head skin
    fl(g, 'M 120 155 C 155 155 168 178 168 218 C 168 258 155 285 120 285 C 90 285 75 258 75 218 C 75 178 90 155 120 155 Z', '#F5D0A9', a);
    // Baby neck skin
    fl(g, 'M 108 282 C 108 292 105 300 105 308 L 135 308 C 135 300 132 292 132 282 Z', '#F5D0A9', a);
    // Ear skin
    fl(g, 'M 78 212 C 72 206 70 212 70 218 C 70 224 72 230 78 228 Z', '#F5D0A9', a);
    // White baptism shirt
    fl(g, 'M 105 308 C 85 312 55 325 45 340 L 45 450 L 195 450 L 195 340 C 185 325 155 312 135 308 Z', '#FEFEFA', a);
    // White collar
    fl(g, 'M 108 286 C 104 290 100 296 100 302 C 100 308 108 312 120 314 C 132 312 140 308 140 302 C 140 296 136 290 132 286 Z', '#FFFFFF', a);
    // Eye whites
    fl(g, 'M 96 208 C 96 200 102 194 110 194 C 118 194 124 200 124 208 C 124 216 118 222 110 222 C 102 222 96 216 96 208 Z', '#FFFFFF', a);
    fl(g, 'M 126 206 C 126 197 133 190 142 190 C 151 190 158 197 158 206 C 158 215 151 222 142 222 C 133 222 126 215 126 206 Z', '#FFFFFF', a);
    // Baby hair
    fl(g, 'M 95 162 C 100 148 112 142 125 144 C 138 142 150 148 155 162 C 155 158 148 155 120 155 C 92 155 87 158 95 162 Z', '#A0845C', a);
    // Adult hand skin
    fl(g, 'M 296 218 C 300 212 304 206 310 200 C 318 192 328 192 330 200 C 332 208 326 218 318 224 C 312 228 306 228 302 226 Z', '#F0C8A0', a);
    // Candle white body
    fl(g, 'M 222 80 L 222 375 C 222 382 228 388 240 388 C 252 388 258 382 258 375 L 258 80 C 258 88 252 93 240 93 C 228 93 222 88 222 80 Z', '#FAFAFA', a);
    // Candle top
    fl(g, 'M 222 80 C 222 88 228 93 240 93 C 252 93 258 88 258 80 C 258 75 252 70 240 70 C 228 70 222 75 222 80 Z', '#F0F0F0', a);
    // Small candle white
    fl(g, 'M 314 130 L 314 220 L 320 220 L 320 130 Z', '#FAFAFA', a);
    // Ribbon fill
    fl(g, 'M 306 185 C 300 180 296 175 300 172 C 304 170 310 175 314 180 L 320 180 C 324 175 330 170 334 172 C 338 175 334 180 328 185 Z', '#F5F5F5', a);
  },

  // Layer 8: Color fills for SCENE (azulejo background, candle details)
  (g, a) => {
    // Full background white for tiles
    fl(g, 'M 0 0 L 360 0 L 360 450 L 0 450 Z', '#F8F8FF', a);
    // Azulejo blue motif fills (simplified botanical in key tiles)
    fl(g, 'M 15 15 C 20 10 25 10 30 15 C 35 20 40 30 30 35 C 25 38 20 35 15 30 C 10 25 10 20 15 15 Z', '#1565C0', a);
    fl(g, 'M 45 30 C 50 25 55 30 50 35 C 45 40 40 35 45 30 Z', '#1565C0', a);
    fl(g, 'M 15 75 C 20 70 25 70 30 75 C 35 80 40 90 30 95 C 25 98 20 95 15 90 C 10 85 10 80 15 75 Z', '#1565C0', a);
    fl(g, 'M 315 15 C 320 10 325 10 330 15 C 335 20 340 30 330 35 C 325 38 320 35 315 30 C 310 25 310 20 315 15 Z', '#1565C0', a);
    fl(g, 'M 315 75 C 320 70 325 70 330 75 C 335 80 340 90 330 95 C 325 98 320 95 315 90 C 310 85 310 80 315 75 Z', '#1565C0', a);
    fl(g, 'M 15 375 C 20 370 25 370 30 375 C 35 380 40 390 30 395 C 25 398 20 395 15 390 C 10 385 10 380 15 375 Z', '#1565C0', a);
    fl(g, 'M 15 435 C 20 430 25 430 30 435 C 35 440 40 445 30 448 C 25 450 20 448 15 444 C 10 440 10 435 15 435 Z', '#1565C0', a);
    fl(g, 'M 315 375 C 320 370 325 370 330 375 C 335 380 340 390 330 395 C 325 398 320 395 315 390 C 310 385 310 380 315 375 Z', '#1565C0', a);
    fl(g, 'M 315 435 C 320 430 325 430 330 435 C 335 440 340 445 330 448 C 325 450 320 448 315 444 C 310 440 310 435 315 435 Z', '#1565C0', a);
    // Flame fills - outer orange
    fl(g, 'M 240 38 C 248 48 255 58 255 66 C 255 74 248 80 240 80 C 232 80 225 74 225 66 C 225 58 232 48 240 38 Z', '#FF9800', a);
    // Flame inner yellow
    fl(g, 'M 240 46 C 245 52 249 60 249 66 C 249 72 245 76 240 76 C 235 76 231 72 231 66 C 231 60 235 52 240 46 Z', '#FFC107', a);
    // Flame core white-yellow
    fl(g, 'M 240 54 C 243 58 245 63 245 67 C 245 72 243 74 240 74 C 237 74 235 72 235 67 C 235 63 237 58 240 54 Z', '#FFF9C4', a);
    // Small candle flame
    fl(g, 'M 317 118 C 320 122 322 127 322 130 C 322 133 320 134 317 134 C 314 134 312 133 312 130 C 312 127 314 122 317 118 Z', '#FFC107', a);
    // Red letter A fill on candle
    fl(g, 'M 233 245 L 240 218 L 247 245 L 243 245 L 240 228 L 237 245 Z', '#C62828', a);
    // Gold medallion fill
    fl(g, 'M 240 265 C 248 265 254 271 254 279 C 254 287 248 293 240 293 C 232 293 226 287 226 279 C 226 271 232 265 240 265 Z', '#FFD700', a);
    // Candle decorative bands
    fl(g, 'M 222 110 L 258 110 L 258 130 L 222 130 Z', '#E8D5B0', a);
    fl(g, 'M 222 320 L 258 320 L 258 340 L 222 340 Z', '#E8D5B0', a);
  },

  // Layer 9: Final polish
  (g, a) => {
    // Eye shine - warm candlelight reflection in left eye
    fe(g, 'circle', {cx: 115, cy: 204, r: 2.5, fill: '#FFF9C4'}, a);
    fe(g, 'circle', {cx: 112, cy: 207, r: 1, fill: '#FFFFFF'}, a);
    // Eye shine - warm candlelight reflection in right eye
    fe(g, 'circle', {cx: 149, cy: 202, r: 3, fill: '#FFF9C4'}, a);
    fe(g, 'circle', {cx: 146, cy: 205, r: 1.2, fill: '#FFFFFF'}, a);
    // Cheek blush
    fe(g, 'ellipse', {cx: 100, cy: 245, rx: 10, ry: 6, fill: '#F8C0B0'}, a);
    fe(g, 'ellipse', {cx: 152, cy: 243, rx: 11, ry: 7, fill: '#F8C0B0'}, a);
    // Flame glow halo
    fe(g, 'circle', {cx: 240, cy: 60, r: 30, fill: '#FFF9C4'}, a);
    // Candle wax drip details
    pp(g, ['M 224 140 C 222 148 223 155 224 150'], a);
    pp(g, ['M 256 160 C 258 168 257 175 256 170'], a);
    // Cross highlight in medallion
    fe(g, 'circle', {cx: 237, cy: 276, r: 1.5, fill: '#FFFFFF'}, a);
    // Small flame glow
    fe(g, 'circle', {cx: 317, cy: 126, r: 10, fill: '#FFF9C4'}, a);
    // Ribbon bow highlight
    fe(g, 'circle', {cx: 299, cy: 174, r: 1, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 335, cy: 174, r: 1, fill: '#FFFFFF'}, a);
  }
];

// Scene 3: Close-up portrait of curly-haired girl Matilde framed by chair bars
const matildeLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Face oval guide
    pp(g, ['M 180 140 C 240 140 270 175 270 225 C 270 280 240 320 180 320 C 120 320 90 280 90 225 C 90 175 120 140 180 140 Z'], a, lt);
    // Left chair bar guide
    pp(g, ['M 72 20 L 72 420'], a, lt);
    pp(g, ['M 88 20 L 88 420'], a, lt);
    // Right chair bar guide
    pp(g, ['M 272 20 L 272 420'], a, lt);
    pp(g, ['M 288 20 L 288 420'], a, lt);
    // Eye line guide
    pp(g, ['M 90 215 L 270 215'], a, lt);
    // Nose line guide
    pp(g, ['M 90 255 L 270 255'], a, lt);
    // Mouth line guide
    pp(g, ['M 90 280 L 270 280'], a, lt);
    // Hair mass guide - wide circle
    pp(g, ['M 180 95 C 260 95 300 150 300 220 C 300 290 260 340 180 340 C 100 340 60 290 60 220 C 60 150 100 95 180 95 Z'], a, lt);
    // Hand placement guide
    pp(g, ['M 145 50 L 215 50 L 215 80 L 145 80 Z'], a, lt);
  },

  // Layer 1: Main figure outlines (face, chair bars)
  (g, a) => {
    // Face oval - childish proportions, big forehead
    pp(g, ['M 180 148 C 232 148 260 178 260 228 C 260 272 240 310 200 318 C 190 320 170 320 160 318 C 120 310 100 272 100 228 C 100 178 128 148 180 148 Z'], a);
    // Left chair bar
    pp(g, ['M 73 20 L 73 420 L 87 420 L 87 20 Z'], a);
    // Right chair bar
    pp(g, ['M 273 20 L 273 420 L 287 420 L 287 20 Z'], a);
    // Neck
    pp(g, ['M 160 315 C 158 325 155 340 155 355 L 205 355 C 205 340 202 325 200 315'], a);
    // Shoulders/top of shirt
    pp(g, ['M 155 355 C 130 360 90 375 60 395 L 60 450 L 300 450 L 300 395 C 270 375 230 360 205 355'], a);
  },

  // Layer 2: Face details - huge eyes, shy smile
  (g, a) => {
    // Left eye - very large
    pp(g, ['M 135 208 C 135 196 143 188 155 188 C 167 188 175 196 175 208 C 175 220 167 228 155 228 C 143 228 135 220 135 208 Z'], a);
    // Right eye - very large
    pp(g, ['M 185 208 C 185 196 193 188 205 188 C 217 188 225 196 225 208 C 225 220 217 228 205 228 C 193 228 185 220 185 208 Z'], a);
    // Left iris
    pp(g, ['M 143 210 C 143 202 148 196 155 196 C 162 196 167 202 167 210 C 167 218 162 224 155 224 C 148 224 143 218 143 210 Z'], a);
    // Right iris
    pp(g, ['M 193 210 C 193 202 198 196 205 196 C 212 196 217 202 217 210 C 217 218 212 224 205 224 C 198 224 193 218 193 210 Z'], a);
    // Left pupil
    fe(g, 'circle', {cx: 157, cy: 212, r: 6, fill: '#1A1A1A'}, a);
    // Right pupil
    fe(g, 'circle', {cx: 207, cy: 212, r: 6, fill: '#1A1A1A'}, a);
    // Left upper eyelashes (long)
    pp(g, ['M 135 204 C 132 198 133 192 136 188'], a);
    pp(g, ['M 142 195 C 140 189 141 184 144 181'], a);
    pp(g, ['M 152 189 C 152 183 153 179 156 177'], a);
    pp(g, ['M 162 190 C 164 184 166 180 168 178'], a);
    pp(g, ['M 172 196 C 175 190 178 187 180 186'], a);
    // Right upper eyelashes (long)
    pp(g, ['M 188 196 C 185 190 184 187 182 186'], a);
    pp(g, ['M 195 190 C 194 184 194 180 196 178'], a);
    pp(g, ['M 205 189 C 206 183 207 179 210 177'], a);
    pp(g, ['M 215 195 C 218 189 220 184 222 181'], a);
    pp(g, ['M 225 204 C 228 198 229 192 226 188'], a);
    // Left eyebrow
    pp(g, ['M 134 186 C 140 178 150 174 165 176 C 172 177 176 180 178 184'], a);
    // Right eyebrow
    pp(g, ['M 182 184 C 184 180 188 177 195 176 C 210 174 220 178 226 186'], a);
    // Nose
    pp(g, ['M 178 238 C 176 244 174 250 172 254 C 170 258 172 262 176 263 C 178 264 182 264 184 263 C 188 262 190 258 188 254 C 186 250 184 244 182 238'], a);
    // Shy smile with small teeth
    pp(g, ['M 158 280 C 163 286 170 290 180 290 C 190 290 197 286 202 280'], a);
    // Upper lip
    pp(g, ['M 162 278 C 168 274 175 272 180 273 C 185 272 192 274 198 278'], a);
    // Teeth line inside smile
    pp(g, ['M 165 282 L 195 282'], a);
    // Small tooth gaps
    pp(g, ['M 175 282 L 175 286'], a);
    pp(g, ['M 180 282 L 180 287'], a);
    pp(g, ['M 185 282 L 185 286'], a);
  },

  // Layer 3: Curly wild hair
  (g, a) => {
    // Main hair mass outline - voluminous
    pp(g, ['M 180 105 C 240 100 290 130 295 185 C 298 220 295 260 285 290 C 278 310 265 325 248 332 C 240 335 230 340 220 338 C 210 336 205 330 200 320'], a);
    pp(g, ['M 180 105 C 120 100 70 130 65 185 C 62 220 65 260 75 290 C 82 310 95 325 112 332 C 120 335 130 340 140 338 C 150 336 155 330 160 320'], a);
    // Top curls
    pp(g, ['M 130 115 C 125 108 120 110 118 118 C 116 126 120 130 128 128 C 132 126 134 122 130 115'], a);
    pp(g, ['M 155 105 C 150 98 145 100 143 108 C 141 116 145 120 153 118 C 157 116 159 112 155 105'], a);
    pp(g, ['M 180 100 C 178 92 173 92 170 98 C 168 105 172 110 178 110 C 182 110 184 106 180 100'], a);
    pp(g, ['M 205 105 C 210 98 215 100 217 108 C 219 116 215 120 207 118 C 203 116 201 112 205 105'], a);
    pp(g, ['M 230 115 C 235 108 240 110 242 118 C 244 126 240 130 232 128 C 228 126 226 122 230 115'], a);
    // Left side curls
    pp(g, ['M 80 160 C 72 155 68 160 68 168 C 68 176 74 180 80 176 C 84 174 85 168 80 160'], a);
    pp(g, ['M 72 195 C 64 190 60 195 60 203 C 60 211 66 215 72 211 C 76 209 77 203 72 195'], a);
    pp(g, ['M 68 230 C 60 225 56 230 56 238 C 56 246 62 250 68 246 C 72 244 73 238 68 230'], a);
    pp(g, ['M 72 265 C 64 260 60 265 60 273 C 60 281 66 285 72 281 C 76 279 77 273 72 265'], a);
    pp(g, ['M 80 295 C 72 290 68 295 70 303 C 72 311 78 314 84 310 C 88 307 86 300 80 295'], a);
    // Right side curls
    pp(g, ['M 280 160 C 288 155 292 160 292 168 C 292 176 286 180 280 176 C 276 174 275 168 280 160'], a);
    pp(g, ['M 288 195 C 296 190 300 195 300 203 C 300 211 294 215 288 211 C 284 209 283 203 288 195'], a);
    pp(g, ['M 292 230 C 300 225 304 230 304 238 C 304 246 298 250 292 246 C 288 244 287 238 292 230'], a);
    pp(g, ['M 288 265 C 296 260 300 265 300 273 C 300 281 294 285 288 281 C 284 279 283 273 288 265'], a);
    pp(g, ['M 280 295 C 288 290 292 295 290 303 C 288 311 282 314 276 310 C 272 307 274 300 280 295'], a);
    // Forehead curls falling down
    pp(g, ['M 120 145 C 115 138 110 142 112 150 C 114 156 118 158 122 155'], a);
    pp(g, ['M 145 138 C 140 132 136 135 138 142 C 140 148 144 150 148 147'], a);
    pp(g, ['M 215 138 C 220 132 224 135 222 142 C 220 148 216 150 212 147'], a);
    pp(g, ['M 240 145 C 245 138 250 142 248 150 C 246 156 242 158 238 155'], a);
  },

  // Layer 4: Clothing details - salmon/pink top
  (g, a) => {
    // Neckline of top - round collar
    pp(g, ['M 155 355 C 160 350 170 345 180 345 C 190 345 200 350 205 355'], a);
    // Collar detail
    pp(g, ['M 152 358 C 160 352 172 348 180 348 C 188 348 200 352 208 358'], a);
    // Shirt wrinkle lines
    pp(g, ['M 140 380 C 150 375 160 378 165 385'], a);
    pp(g, ['M 220 380 C 210 375 200 378 195 385'], a);
    pp(g, ['M 120 400 C 135 395 145 398 150 405'], a);
    pp(g, ['M 240 400 C 225 395 215 398 210 405'], a);
    // Chair bar wood grain lines
    pp(g, ['M 78 40 L 78 400'], a);
    pp(g, ['M 82 50 L 82 410'], a);
    pp(g, ['M 278 40 L 278 400'], a);
    pp(g, ['M 282 50 L 282 410'], a);
    // Chair bar knot detail left
    fe(g, 'ellipse', {cx: 80, cy: 200, rx: 4, ry: 6, fill: 'none'}, a);
    // Chair bar knot detail right
    fe(g, 'ellipse', {cx: 280, cy: 250, rx: 4, ry: 6, fill: 'none'}, a);
  },

  // Layer 5: Adult hand resting on head
  (g, a) => {
    // Adult hand - 4 fingertips resting on top of head
    // Index finger
    pp(g, ['M 152 68 C 150 58 152 48 156 42 C 160 38 164 38 166 42 C 168 48 168 58 166 68 C 164 74 160 78 156 76 C 153 74 152 72 152 68 Z'], a);
    // Middle finger
    pp(g, ['M 166 64 C 164 54 166 42 170 36 C 174 32 178 32 180 36 C 182 42 182 54 180 64 C 178 70 174 74 170 72 C 167 70 166 68 166 64 Z'], a);
    // Ring finger
    pp(g, ['M 182 66 C 180 56 182 44 186 38 C 190 34 194 34 196 38 C 198 44 198 56 196 66 C 194 72 190 76 186 74 C 183 72 182 70 182 66 Z'], a);
    // Pinky finger
    pp(g, ['M 198 72 C 196 62 198 52 202 46 C 206 42 210 42 212 46 C 214 52 214 62 212 72 C 210 78 206 80 202 78 C 199 76 198 74 198 72 Z'], a);
    // Partial palm/wrist at top edge
    pp(g, ['M 150 68 C 148 60 146 50 148 40 C 150 30 158 22 170 20 L 200 20 C 212 22 218 30 218 40 C 218 50 216 60 214 72'], a);
    // Fingernails
    pp(g, ['M 155 46 C 157 42 161 42 163 46'], a);
    pp(g, ['M 172 40 C 174 36 178 36 180 40'], a);
    pp(g, ['M 188 42 C 190 38 194 38 196 42'], a);
    pp(g, ['M 204 50 C 206 46 210 46 212 50'], a);
  },

  // Layer 6: Background - dark behind chair
  (g, a) => {
    // Dark background panels visible through chair bars
    // Left panel
    pp(g, ['M 0 0 L 73 0 L 73 450 L 0 450 Z'], a);
    // Right panel
    pp(g, ['M 287 0 L 360 0 L 360 450 L 287 450 Z'], a);
    // Top area between bars (above head/hand)
    pp(g, ['M 87 0 L 273 0 L 273 20 L 87 20 Z'], a);
    // Chair crossbar at top
    pp(g, ['M 73 15 L 287 15 L 287 25 L 73 25 Z'], a);
    // Background between chair bars behind hair
    pp(g, ['M 87 25 L 273 25 L 273 95 L 87 95 Z'], a);
  },

  // Layer 7: Color fills for FIGURES (skin, hair, clothes)
  (g, a) => {
    // Hair mass fill - brown
    fl(g, 'M 180 105 C 240 100 290 130 295 185 C 298 220 295 260 285 290 C 278 310 265 325 248 332 C 240 335 220 340 200 320 C 200 315 200 310 180 310 C 160 310 160 315 160 320 C 140 340 120 335 112 332 C 95 325 82 310 75 290 C 65 260 62 220 65 185 C 70 130 120 100 180 105 Z', '#8B6538', a);
    // Face skin fill
    fl(g, 'M 180 148 C 232 148 260 178 260 228 C 260 272 240 310 200 318 C 190 320 170 320 160 318 C 120 310 100 272 100 228 C 100 178 128 148 180 148 Z', '#FADCC2', a);
    // Neck skin
    fl(g, 'M 160 315 C 158 325 155 340 155 355 L 205 355 C 205 340 202 325 200 315 Z', '#FADCC2', a);
    // Eye whites
    fl(g, 'M 135 208 C 135 196 143 188 155 188 C 167 188 175 196 175 208 C 175 220 167 228 155 228 C 143 228 135 220 135 208 Z', '#FFFFFF', a);
    fl(g, 'M 185 208 C 185 196 193 188 205 188 C 217 188 225 196 225 208 C 225 220 217 228 205 228 C 193 228 185 220 185 208 Z', '#FFFFFF', a);
    // Iris fills - brown
    fl(g, 'M 143 210 C 143 202 148 196 155 196 C 162 196 167 202 167 210 C 167 218 162 224 155 224 C 148 224 143 218 143 210 Z', '#5E4023', a);
    fl(g, 'M 193 210 C 193 202 198 196 205 196 C 212 196 217 202 217 210 C 217 218 212 224 205 224 C 198 224 193 218 193 210 Z', '#5E4023', a);
    // Salmon/pink top
    fl(g, 'M 155 355 C 130 360 90 375 60 395 L 60 450 L 300 450 L 300 395 C 270 375 230 360 205 355 Z', '#F48FB1', a);
    // Lip fill
    fl(g, 'M 162 278 C 168 274 175 272 180 273 C 185 272 192 274 198 278 C 197 286 190 290 180 290 C 170 290 163 286 162 278 Z', '#E8999A', a);
    // Teeth
    fl(g, 'M 165 282 L 195 282 L 197 280 C 193 284 188 287 180 287 C 172 287 167 284 163 280 Z', '#FEFEFE', a);
    // Adult hand skin
    fl(g, 'M 150 68 C 148 50 150 30 170 20 L 200 20 C 218 22 218 40 214 72 C 212 80 206 82 202 78 L 198 72 C 198 62 200 50 202 46 C 204 42 210 44 212 50 L 214 72 M 198 72 C 196 76 192 76 188 74 C 184 72 182 70 182 66 C 180 56 184 42 186 38 C 190 34 196 38 196 48 L 196 66 M 182 66 C 180 70 176 74 172 72 C 168 70 166 68 166 64 C 164 54 168 40 170 36 C 174 32 180 36 180 44 L 180 64 M 166 64 C 164 74 160 78 156 76 C 153 74 152 72 152 68 C 150 58 154 44 156 42 C 160 38 166 42 166 50 L 166 68 Z', '#F0C8A0', a);
    // Hair curl highlight strands
    fl(g, 'M 130 115 C 125 108 120 110 118 118 C 116 126 120 130 128 128 C 132 126 134 122 130 115 Z', '#C4A265', a);
    fl(g, 'M 155 105 C 150 98 145 100 143 108 C 141 116 145 120 153 118 C 157 116 159 112 155 105 Z', '#C4A265', a);
    fl(g, 'M 205 105 C 210 98 215 100 217 108 C 219 116 215 120 207 118 C 203 116 201 112 205 105 Z', '#C4A265', a);
    fl(g, 'M 230 115 C 235 108 240 110 242 118 C 244 126 240 130 232 128 C 228 126 226 122 230 115 Z', '#C4A265', a);
    fl(g, 'M 80 160 C 72 155 68 160 68 168 C 68 176 74 180 80 176 C 84 174 85 168 80 160 Z', '#C4A265', a);
    fl(g, 'M 280 160 C 288 155 292 160 292 168 C 292 176 286 180 280 176 C 276 174 275 168 280 160 Z', '#C4A265', a);
  },

  // Layer 8: Color fills for SCENE (chair, background)
  (g, a) => {
    // Dark background left
    fl(g, 'M 0 0 L 73 0 L 73 450 L 0 450 Z', '#3E2723', a);
    // Dark background right
    fl(g, 'M 287 0 L 360 0 L 360 450 L 287 450 Z', '#3E2723', a);
    // Dark background top center
    fl(g, 'M 87 25 L 273 25 L 273 95 L 87 95 Z', '#3E2723', a);
    // Very top strip
    fl(g, 'M 87 0 L 273 0 L 273 15 L 87 15 Z', '#3E2723', a);
    // Left chair bar fill
    fl(g, 'M 73 20 L 73 420 L 87 420 L 87 20 Z', '#C49A6C', a);
    // Right chair bar fill
    fl(g, 'M 273 20 L 273 420 L 287 420 L 287 20 Z', '#C49A6C', a);
    // Chair crossbar fill
    fl(g, 'M 73 15 L 287 15 L 287 25 L 73 25 Z', '#C49A6C', a);
    // Chair bar wood grain overlay left
    fl(g, 'M 77 30 L 77 410 L 79 410 L 79 30 Z', '#A1887F', a);
    fl(g, 'M 83 40 L 83 400 L 84 400 L 84 40 Z', '#A1887F', a);
    // Chair bar wood grain overlay right
    fl(g, 'M 277 30 L 277 410 L 279 410 L 279 30 Z', '#A1887F', a);
    fl(g, 'M 283 40 L 283 400 L 284 400 L 284 40 Z', '#A1887F', a);
  },

  // Layer 9: Final polish (eye shine, cheek blush, highlights)
  (g, a) => {
    // Eye shine left - two white dots
    fe(g, 'circle', {cx: 153, cy: 205, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 160, cy: 215, r: 1.5, fill: '#FFFFFF'}, a);
    // Eye shine right - two white dots
    fe(g, 'circle', {cx: 203, cy: 205, r: 3, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 210, cy: 215, r: 1.5, fill: '#FFFFFF'}, a);
    // Left cheek blush
    fe(g, 'ellipse', {cx: 120, cy: 260, rx: 14, ry: 8, fill: '#FBBCAE'}, a);
    // Right cheek blush
    fe(g, 'ellipse', {cx: 240, cy: 258, rx: 14, ry: 8, fill: '#FBBCAE'}, a);
    // Nose tip highlight
    fe(g, 'circle', {cx: 179, cy: 254, r: 2, fill: '#FDE8D8'}, a);
    // Hair shine highlights
    fe(g, 'ellipse', {cx: 140, cy: 130, rx: 8, ry: 3, fill: '#D4A855'}, a);
    fe(g, 'ellipse', {cx: 220, cy: 128, rx: 8, ry: 3, fill: '#D4A855'}, a);
    fe(g, 'ellipse', {cx: 180, cy: 112, rx: 6, ry: 2, fill: '#D4A855'}, a);
    // Fingernail highlights
    fe(g, 'circle', {cx: 159, cy: 44, r: 1, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 176, cy: 38, r: 1, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 192, cy: 40, r: 1, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 208, cy: 48, r: 1, fill: '#FFFFFF'}, a);
    // Lower lip shine
    fe(g, 'ellipse', {cx: 180, cy: 284, rx: 5, ry: 2, fill: '#F0AAAB'}, a);
    // Chair bar subtle shine
    fl(g, 'M 75 50 L 75 380 L 76 380 L 76 50 Z', '#D4B896', a);
    fl(g, 'M 275 50 L 275 380 L 276 380 L 276 50 Z', '#D4B896', a);
  }
];
// ==============================================================
// SCENE 1: MDD - Miguel na Aldeia
// Boy (~3-4 years) leaning on mossy stone wall, holding green toy.
// Rural Portuguese village behind. Father partially visible right.
// ==============================================================
const mddLayers = [
  // 0: Composition guides
  (g, a) => {
    // Wall horizontal band
    pp(g, ['M0 260 L360 260', 'M0 300 L360 300'], a, lt);
    // Miguel zone (left/center)
    pp(g, ['M60 20 L60 300 M220 20 L220 300', 'M60 130 L220 130'], a, lt);
    // Father zone (right partial)
    pp(g, ['M270 40 L270 200 M350 40 L350 200'], a, lt);
    // Ground line
    pp(g, ['M0 380 L360 380'], a, lt);
    // Village skyline guide
    pp(g, ['M0 120 L360 120'], a, lt);
  },

  // 1: Miguel body outline - leaning on wall
  (g, a) => {
    // Head (round child head)
    pp(g, ['M108 96 C108 72 120 56 140 50 C160 56 172 72 172 96 C174 112 170 126 162 136 C156 144 150 150 140 152 C130 150 124 144 118 136 C112 126 108 112 108 96'], a);
    // Neck
    pp(g, ['M130 150 L128 164 M150 150 L152 164'], a);
    // Shoulders and torso - leaning forward onto wall
    pp(g, ['M90 190 C100 174 118 164 140 164 C162 164 180 174 190 190 L194 260 M90 190 L86 260'], a);
    // Left arm resting on wall
    pp(g, ['M94 194 C82 210 74 230 70 252 C68 258 72 262 78 260 L110 248'], a);
    // Right arm resting on wall
    pp(g, ['M186 194 C198 210 206 230 210 252 C212 258 208 262 202 260 L170 248'], a);
    // Father partial (right side) - shoulder and head hint
    pp(g, ['M290 108 C290 88 302 76 316 72 C330 76 340 88 340 108 C342 120 338 130 332 138 C328 142 322 146 316 148'], a);
    pp(g, ['M280 180 C290 164 306 156 316 156 C326 156 340 164 350 180 L360 260 M280 180 L270 260'], a);
  },

  // 2: Miguel face details
  (g, a) => {
    // Eyes
    pp(g, ['M122 92 C124 86 132 84 136 88 C140 92 138 98 134 100 C130 102 124 98 122 92 Z'], a);
    pp(g, ['M148 92 C150 86 158 84 162 88 C166 92 164 98 160 100 C156 102 150 98 148 92 Z'], a);
    // Pupils
    fe(g, 'circle', { cx: 130, cy: 93, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 156, cy: 93, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M120 82 C126 78 134 77 138 80', 'M150 80 C154 77 162 78 168 82'], a);
    // Nose
    pp(g, ['M138 88 C137 96 136 104 134 108', 'M131 110 C134 114 138 116 142 116 C146 114 148 110 150 108'], a);
    // Mouth - slight open smile
    pp(g, ['M126 124 C130 120 136 118 140 120 C144 118 150 120 154 124', 'M128 126 C134 132 140 134 146 132 C150 130 154 126'], a);
    // Ears
    pp(g, ['M106 92 C100 88 96 94 96 102 C96 110 100 114 106 114', 'M174 92 C180 88 184 94 184 102 C184 110 180 114 174 114'], a);
    // Father's partial face - beard, one eye
    pp(g, ['M306 104 C308 98 314 96 318 100 C322 104 320 110 316 112 C312 114 308 110 306 104 Z'], a);
    fe(g, 'circle', { cx: 313, cy: 106, r: 2.5, fill: a ? HL : '#2C1810' }, a);
    // Father beard stubble dots
    const bd = [[300,130],[304,134],[308,138],[312,140],[316,142],[320,140],[324,138],[328,134],[332,130],[308,144],[312,146],[316,148],[320,146]];
    bd.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a); });
  },

  // 3: Hair, jacket with hood
  (g, a) => {
    // Miguel hair - dark, short
    pp(g, ['M110 90 C108 72 118 56 134 48 C148 44 162 48 170 56 C176 64 178 76 174 90'], a);
    pp(g, ['M114 86 C116 72 124 58 138 52 C150 48 160 52 168 60 C174 68 176 78 172 88'], a);
    // Hair texture
    pp(g, ['M128 50 C136 46 146 46 154 50', 'M120 60 C130 54 142 52 152 56', 'M116 72 C126 64 138 62 148 66'], a, lt);
    // Jacket body - puffy/quilted with horizontal lines
    pp(g, ['M90 190 C100 174 118 164 140 164 C162 164 180 174 190 190 L194 260 L86 260 Z'], a);
    // Quilting lines (horizontal)
    pp(g, ['M92 200 C110 198 140 196 188 200', 'M90 214 C112 212 140 210 190 214', 'M88 228 C114 226 140 224 192 228', 'M87 242 C115 240 140 238 193 242'], a, lt);
    // Hood with orange lining visible
    pp(g, ['M100 170 C94 166 88 168 86 176 C84 184 88 190 96 188 L128 172', 'M180 170 C186 166 192 168 194 176 C196 184 192 190 184 188 L152 172'], a);
    // Hood lining edge (orange visible)
    pp(g, ['M96 188 C112 194 128 196 140 196 C152 196 168 194 184 188'], a);
    // Emblem circle on chest
    fe(g, 'circle', { cx: 140, cy: 210, r: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Father shirt collar
    pp(g, ['M300 156 C308 160 316 162 324 160 C330 158 336 156 340 154'], a);
  },

  // 4: Clothing details - jacket quilting, hood lining
  (g, a) => {
    // Jacket zipper
    pp(g, ['M140 196 L140 260'], a);
    for (let y = 200; y < 258; y += 6) { pp(g, [`M138 ${y} L142 ${y}`], a, lt); }
    // Jacket pocket outlines
    pp(g, ['M98 228 L120 228 L120 250 L98 250 Z', 'M160 228 L182 228 L182 250 L160 250 Z'], a, lt);
    // Hood drawstring
    pp(g, ['M130 194 L126 216', 'M150 194 L154 216'], a, lt);
    // Father's gray fleece quarter-zip
    pp(g, ['M316 156 L316 180'], a);
    pp(g, ['M310 160 C314 162 318 162 322 160'], a);
    // Sleeve seam on Miguel's jacket
    pp(g, ['M94 194 C90 200 88 208 86 216', 'M186 194 C190 200 192 208 194 216'], a, lt);
  },

  // 5: Hands holding green toy on wall
  (g, a) => {
    // Left hand
    pp(g, ['M110 252 C106 246 100 248 98 254 C96 260 100 264 106 262'], a);
    pp(g, ['M102 250 C98 244 94 238 96 234 C98 230 102 230 104 234', 'M104 248 C100 242 96 236 98 232 C100 228 104 228 106 232'], a);
    // Right hand
    pp(g, ['M170 252 C174 246 180 248 182 254 C184 260 180 264 174 262'], a);
    pp(g, ['M178 250 C182 244 186 238 184 234 C182 230 178 230 176 234', 'M176 248 C180 242 184 236 182 232 C180 228 176 228 174 232'], a);
    // Green toy (small dinosaur/dragon shape) on top of wall
    pp(g, ['M120 240 C118 232 124 224 134 222 C140 220 146 222 150 226 C154 222 160 220 166 222 C172 224 178 232 176 240'], a);
    // Toy body detail
    pp(g, ['M134 222 C132 216 136 210 142 208 C148 210 150 216 148 222'], a); // head/neck
    pp(g, ['M142 208 C140 204 142 198 146 196 C150 198 152 204 150 208'], a); // spike
    // Toy spine bumps
    pp(g, ['M136 212 C134 208 136 206 138 208', 'M142 210 C140 206 142 204 144 206', 'M148 212 C146 208 148 206 150 208'], a, lt);
    // Toy legs
    pp(g, ['M128 236 L124 244', 'M168 236 L172 244'], a, lt);
    // Toy tail
    pp(g, ['M166 226 C172 228 178 226 182 222 C186 218 188 214 186 212'], a);
  },

  // 6: Background - stone wall, village, sky
  (g, a) => {
    // Stone wall - irregular blocks
    pp(g, ['M0 260 L360 260', 'M0 300 L360 300'], a);
    // Stone outlines in wall
    pp(g, ['M0 260 L40 262 L42 280 L0 278 Z', 'M40 262 L90 258 L92 282 L42 280 Z', 'M90 258 L150 260 L148 284 L92 282 Z', 'M150 260 L210 262 L208 280 L148 284 Z', 'M210 262 L270 258 L272 282 L208 280 Z', 'M270 258 L330 260 L332 278 L272 282 Z', 'M330 260 L360 262 L360 280 L332 278 Z'], a);
    pp(g, ['M0 278 L50 282 L48 300 L0 300 Z', 'M50 282 L120 278 L122 300 L48 300 Z', 'M120 278 L180 282 L178 300 L122 300 Z', 'M180 282 L240 280 L242 300 L178 300 Z', 'M240 280 L310 282 L312 300 L242 300 Z', 'M310 282 L360 278 L360 300 L312 300 Z'], a);
    // Moss patches on top of wall
    pp(g, ['M20 258 C24 254 32 252 38 254 C44 256 46 258 40 260', 'M80 256 C86 252 94 250 100 252 C106 254 108 258 100 258', 'M160 258 C166 254 174 252 182 254 C188 256 190 260 182 260', 'M250 256 C256 252 264 250 270 254 C276 256 278 260 270 258'], a);
    // Village houses background (above wall)
    pp(g, ['M10 140 L10 260 L60 260 L60 120 L10 140 Z', 'M60 130 L60 260 L110 260 L110 150 L60 130 Z'], a, lt);
    // House roofs
    pp(g, ['M10 140 L35 110 L60 120', 'M60 130 L85 100 L110 150'], a, lt);
    // Windows
    pp(g, ['M22 160 L42 160 L42 180 L22 180 Z', 'M72 160 L92 160 L92 180 L72 180 Z'], a, lt);
    // Bare winter trees
    pp(g, ['M230 120 L230 260', 'M230 140 C220 126 212 118 206 110', 'M230 160 C240 146 248 136 254 128', 'M230 180 C222 168 216 158 210 148', 'M230 190 C238 180 244 170 250 160'], a, lt);
    // Ground/grass below wall
    pp(g, ['M0 300 L0 450 L360 450 L360 300 Z'], a, lt);
    // Grass tufts
    pp(g, ['M20 310 C24 304 28 300 30 304', 'M60 308 C64 302 68 298 70 302', 'M120 312 C124 306 128 302 130 306', 'M200 310 C204 304 208 300 210 304', 'M280 308 C284 302 288 298 290 302', 'M340 310 C344 304 348 300 350 304'], a, lt);
    // Sky area hint
    pp(g, ['M0 0 L360 0 L360 120 L0 120 Z'], a, lt);
  },

  // 7: Color fills - FIGURES (skin, hair, clothes)
  (g, a) => {
    // Miguel skin
    fl(g, 'M110 96 C110 74 122 58 140 52 C158 58 170 74 170 96 C172 112 168 126 160 136 C154 144 148 150 140 152 C132 150 126 144 120 136 C114 126 110 112 110 96 Z', '#F5D0A9', a);
    // Miguel ears
    fe(g, 'ellipse', { cx: 101, cy: 102, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 179, cy: 102, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Miguel hair
    fl(g, 'M112 90 C110 74 120 58 136 50 C150 46 164 50 172 58 C178 66 180 78 176 90 L172 88 C174 78 172 68 168 62 C162 54 152 50 140 52 C128 54 120 64 116 76 Z', '#4E342E', a);
    // Miguel jacket (navy puffy)
    fl(g, 'M90 190 C100 174 118 164 140 164 C162 164 180 174 190 190 L194 260 L86 260 Z', '#1A237E', a);
    // Hood (navy with orange lining visible)
    fl(g, 'M100 170 C94 166 88 168 86 176 C84 184 88 190 96 188 C112 194 128 196 140 196 C152 196 168 194 184 188 C192 190 196 184 194 176 C192 168 186 166 180 170 L152 172 L128 172 Z', '#1A237E', false);
    // Hood lining strip (orange)
    fl(g, 'M96 186 C112 192 128 194 140 194 C152 194 168 192 184 186 C168 190 152 192 140 192 C128 192 112 190 96 186 Z', '#FF8F00', a);
    // Hand skin
    fe(g, 'ellipse', { cx: 106, cy: 252, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 174, cy: 252, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    // Arm jacket fill (left)
    fl(g, 'M94 194 C82 210 74 230 70 252 C68 258 72 262 78 260 L110 248 L94 194 Z', '#1A237E', false);
    // Arm jacket fill (right)
    fl(g, 'M186 194 C198 210 206 230 210 252 C212 258 208 262 202 260 L170 248 L186 194 Z', '#1A237E', false);
    // Green toy fill
    fl(g, 'M120 240 C118 232 124 224 134 222 C132 216 136 210 142 208 C148 210 150 216 148 222 C154 222 160 220 166 222 C172 224 178 232 176 240 Z', '#26A69A', a);
    // Father skin (partial)
    fl(g, 'M292 108 C292 90 304 78 316 74 C328 78 338 90 338 108 C340 118 336 128 330 136 C326 140 320 144 316 146 C312 144 306 140 302 136 C296 128 292 118 292 108 Z', '#EDBE8C', false);
    // Father shirt (white)
    fl(g, 'M280 180 C290 164 306 156 316 156 C326 156 340 164 350 180 L360 260 L270 260 Z', '#FAFAFA', false);
    // Neck fill
    fe(g, 'rect', { x: 128, y: 150, width: 24, height: 14, rx: 4, fill: '#F0C8A0' }, false);
  },

  // 8: Color fills - SCENE (wall, sky, ground, houses)
  (g, a) => {
    // Sky
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 260, fill: '#CFD8DC' }, a);
    // Houses background
    fl(g, 'M10 140 L10 260 L60 260 L60 120 Z', '#D7CCC8', false);
    fl(g, 'M60 130 L60 260 L110 260 L110 150 Z', '#BCAAA4', false);
    // Roofs
    fl(g, 'M10 140 L35 110 L60 120 Z', '#8D6E63', false);
    fl(g, 'M60 130 L85 100 L110 150 Z', '#795548', false);
    // Windows
    fe(g, 'rect', { x: 23, y: 161, width: 18, height: 18, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 73, y: 161, width: 18, height: 18, fill: '#546E7A' }, false);
    // Stone wall fill - alternating gray tones
    fl(g, 'M0 260 L40 262 L42 280 L0 278 Z', '#9E9E9E', false);
    fl(g, 'M40 262 L90 258 L92 282 L42 280 Z', '#BDBDBD', false);
    fl(g, 'M90 258 L150 260 L148 284 L92 282 Z', '#8D6E63', false);
    fl(g, 'M150 260 L210 262 L208 280 L148 284 Z', '#9E9E9E', false);
    fl(g, 'M210 262 L270 258 L272 282 L208 280 Z', '#BDBDBD', false);
    fl(g, 'M270 258 L330 260 L332 278 L272 282 Z', '#8D6E63', false);
    fl(g, 'M330 260 L360 262 L360 280 L332 278 Z', '#9E9E9E', false);
    // Bottom row
    fl(g, 'M0 278 L50 282 L48 300 L0 300 Z', '#BDBDBD', false);
    fl(g, 'M50 282 L120 278 L122 300 L48 300 Z', '#9E9E9E', false);
    fl(g, 'M120 278 L180 282 L178 300 L122 300 Z', '#BDBDBD', false);
    fl(g, 'M180 282 L240 280 L242 300 L178 300 Z', '#8D6E63', false);
    fl(g, 'M240 280 L310 282 L312 300 L242 300 Z', '#9E9E9E', false);
    fl(g, 'M310 282 L360 278 L360 300 L312 300 Z', '#BDBDBD', false);
    // Moss patches on wall
    fl(g, 'M20 258 C24 254 32 252 38 254 C44 256 46 258 40 260 L20 260 Z', '#558B2F', false);
    fl(g, 'M80 256 C86 252 94 250 100 252 C106 254 108 258 100 258 L80 258 Z', '#558B2F', false);
    fl(g, 'M160 258 C166 254 174 252 182 254 C188 256 190 260 182 260 L160 260 Z', '#558B2F', false);
    fl(g, 'M250 256 C256 252 264 250 270 254 C276 256 278 260 270 258 L250 258 Z', '#558B2F', false);
    // Ground grass
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#7CB342' }, a);
    // Grass variation
    fl(g, 'M0 300 C20 296 40 298 60 300 C80 302 100 298 120 300 C140 302 160 296 180 300 C200 304 220 298 240 300 C260 302 280 296 300 300 C320 302 340 298 360 300 L360 310 L0 310 Z', '#689F38', false);
  },

  // 9: Final polish
  (g, a) => {
    // Eye shine
    fe(g, 'circle', { cx: 128, cy: 91, r: 1.8, fill: 'white' }, a);
    fe(g, 'circle', { cx: 154, cy: 91, r: 1.8, fill: 'white' }, a);
    // Cheeks (rosadas do frio)
    fe(g, 'ellipse', { cx: 120, cy: 118, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.5' }, a);
    fe(g, 'ellipse', { cx: 160, cy: 118, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.5' }, a);
    // Mouth fill
    fl(g, 'M128 126 C134 132 140 134 146 132 C150 130 154 126 C150 128 146 130 140 130 C134 130 130 128 128 126 Z', '#E57373', false);
    // Jacket quilting highlight lines
    pp(g, ['M92 200 C110 198 140 196 188 200', 'M90 214 C112 212 140 210 190 214', 'M88 228 C114 226 140 224 192 228', 'M87 242 C115 240 140 238 193 242'], a, lt);
    // Jacket emblem detail
    fe(g, 'circle', { cx: 140, cy: 210, r: 6, fill: '#283593' }, false);
    fe(g, 'circle', { cx: 140, cy: 210, r: 3, fill: '#FFD740' }, false);
    // Toy eye dot
    fe(g, 'circle', { cx: 139, cy: 212, r: 1, fill: '#1B5E20' }, false);
    // Wall texture lines between stones
    pp(g, ['M40 262 L40 280', 'M90 258 L92 282', 'M150 260 L148 284', 'M210 262 L208 280', 'M270 258 L272 282', 'M330 260 L332 278'], a, lt);
    // Tree bark texture
    pp(g, ['M228 140 L228 200', 'M232 160 L232 200'], a, lt);
    // Father eye shine
    fe(g, 'circle', { cx: 311, cy: 104, r: 1.2, fill: 'white' }, false);
    // Father hair
    fl(g, 'M294 104 C292 88 302 76 316 72 C328 76 338 88 336 104 L332 100 C334 90 330 82 324 78 C318 74 310 74 304 78 C298 82 294 90 296 100 Z', '#4E342E', false);
    // Overcast sky clouds
    fl(g, 'M0 20 C30 14 60 18 90 12 C120 6 150 16 180 10 C210 4 240 14 270 8 C300 2 330 12 360 6 L360 0 L0 0 Z', '#B0BEC5', false);
    fl(g, 'M0 50 C40 44 80 48 120 42 C160 36 200 46 240 40 C280 34 320 44 360 38 L360 20 C330 26 300 18 270 22 C240 28 210 18 180 24 C150 30 120 20 90 26 C60 32 30 28 0 34 Z', '#B0BEC5', false);
    // Grass detail streaks
    pp(g, ['M30 320 C34 314 36 310 38 314', 'M90 318 C94 312 96 308 98 312', 'M150 322 C154 316 156 312 158 316', 'M220 318 C224 312 226 308 228 312', 'M300 320 C304 314 306 310 308 314'], a, lt);
  }
];

// ==============================================================
// SCENE 2: PAISESTUDIO - Studio family portrait
// Sandra center, Ricardo behind, baby Miguel on Sandra's hip.
// Pampas grass on sides, green wall.
// ==============================================================
const paisestudioLayers = [
  // 0: Composition guides
  (g, a) => {
    // Center vertical
    pp(g, ['M180 0 L180 450'], a, lt);
    // Sandra zone
    pp(g, ['M110 60 L110 420 M250 60 L250 420'], a, lt);
    // Ricardo behind
    pp(g, ['M140 20 L140 200 M220 20 L220 200'], a, lt);
    // Miguel on left hip
    pp(g, ['M60 140 L60 320 M140 140 L140 320'], a, lt);
    // Shoulder line
    pp(g, ['M110 200 L250 200'], a, lt);
    // Pampas grass zones
    pp(g, ['M0 100 L60 100 L60 400 L0 400 Z', 'M300 100 L360 100 L360 400 L300 400 Z'], a, lt);
  },

  // 1: Main figure outlines - Sandra center, Ricardo behind
  (g, a) => {
    // Ricardo head (behind and above Sandra)
    pp(g, ['M156 72 C156 52 166 38 180 32 C194 38 204 52 204 72 C206 86 202 96 196 104 C192 108 186 112 180 114'], a);
    // Sandra head
    pp(g, ['M150 130 C148 108 162 90 180 84 C198 90 212 108 210 130 C212 146 208 158 200 168 C194 176 188 182 180 184 C172 182 166 176 160 168 C154 158 150 146 150 130'], a);
    // Sandra neck
    pp(g, ['M170 182 L168 198 M190 182 L192 198'], a);
    // Sandra shoulders and body
    pp(g, ['M120 224 C132 206 158 198 180 198 C202 198 228 206 240 224 L244 400 M120 224 L116 400'], a);
    // Sandra left arm (holding Miguel)
    pp(g, ['M124 228 C110 244 98 260 92 280 C88 296 90 308 96 316'], a);
    // Sandra right arm
    pp(g, ['M236 228 C248 244 256 260 258 280 C260 296 256 312 252 320'], a);
    // Miguel small body on Sandra's left hip
    pp(g, ['M82 178 C80 162 90 148 106 142 C122 148 132 162 130 178 C132 192 128 202 122 210 C118 214 112 218 106 220 C100 218 94 214 90 210 C86 202 82 192 82 178'], a);
    // Miguel small body
    pp(g, ['M78 250 C86 236 96 228 106 228 C116 228 126 236 134 250 L138 330 M78 250 L74 330'], a);
  },

  // 2: Face details - all three
  (g, a) => {
    // Sandra eyes
    pp(g, ['M164 126 C168 120 176 118 180 122 C184 126 182 132 178 134 C174 136 166 132 164 126 Z'], a);
    pp(g, ['M186 126 C190 120 198 118 202 122 C206 126 204 132 200 134 C196 136 188 132 186 126 Z'], a);
    fe(g, 'circle', { cx: 174, cy: 128, r: 3, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 196, cy: 128, r: 3, fill: a ? HL : '#5E4023' }, a);
    // Sandra eyebrows
    pp(g, ['M160 116 C168 110 178 109 184 112', 'M188 112 C194 109 204 110 212 116'], a);
    // Sandra nose
    pp(g, ['M178 122 C177 130 176 138 174 144', 'M170 146 C174 150 178 152 182 152 C186 150 188 146 190 144'], a);
    // Sandra smile (wide, radiant)
    pp(g, ['M164 162 C170 158 176 156 180 158 C184 156 190 158 196 162', 'M164 162 C170 170 176 174 180 174 C184 174 190 170 196 162'], a);
    // Sandra eyelashes
    pp(g, ['M164 124 C162 122 161 120 162 118', 'M202 122 C204 120 205 118 206 120'], a, lt);
    // Ricardo eyes (partially visible behind)
    pp(g, ['M168 68 C170 64 176 62 180 66 C184 70 182 74 178 76 C174 78 170 74 168 68 Z'], a);
    pp(g, ['M188 68 C190 64 196 62 200 66 C204 70 202 74 198 76 C194 78 190 74 188 68 Z'], a);
    fe(g, 'circle', { cx: 176, cy: 70, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 196, cy: 70, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Ricardo smile
    pp(g, ['M172 98 C176 94 182 92 186 94 C190 92 194 94 198 98', 'M174 100 C178 104 184 106 188 104 C192 102 196 100'], a);
    // Ricardo beard
    const rb = [[164,100],[168,104],[172,106],[176,108],[180,110],[184,108],[188,106],[192,104],[196,100],[200,98],[170,108],[174,110],[178,112],[182,112],[186,110],[190,108]];
    rb.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#4A3628' }, a); });
    // Baby Miguel eyes
    pp(g, ['M94 174 C96 170 102 168 106 172 C110 176 108 180 104 182 C100 184 96 180 94 174 Z', 'M114 174 C116 170 122 168 126 172 C130 176 128 180 124 182 C120 184 116 180 114 174 Z'], a);
    fe(g, 'circle', { cx: 102, cy: 176, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 122, cy: 176, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Miguel big smile
    pp(g, ['M96 192 C100 188 104 186 108 188 C112 186 116 188 120 192', 'M98 194 C102 200 108 204 112 200 C116 198 118 194'], a);
    // Miguel nose
    pp(g, ['M106 178 C105 182 104 186 103 188'], a);
    // Miguel ears
    pp(g, ['M80 174 C74 170 70 176 70 184 C70 192 74 196 80 196', 'M132 174 C138 170 142 176 142 184 C142 192 138 196 132 196'], a);
  },

  // 3: Hair, accessories
  (g, a) => {
    // Sandra hair - dark, straight, middle part
    pp(g, ['M148 126 C144 102 156 82 176 74 C192 70 208 76 218 88 C226 98 228 112 224 126'], a);
    pp(g, ['M154 122 C158 108 166 92 180 84 C194 80 206 86 214 96 C220 106 222 118 218 126'], a);
    // Hair falling to shoulders
    pp(g, ['M148 126 C144 140 142 158 140 176 C138 192 136 204 134 210', 'M224 126 C228 140 230 158 230 176 C230 192 228 204 226 210'], a);
    // Middle part line
    pp(g, ['M180 76 L180 90'], a, lt);
    // Hair texture
    pp(g, ['M160 80 C168 74 178 72 186 76', 'M152 96 C162 86 178 82 194 88', 'M150 112 C158 106 172 102 190 108'], a, lt);
    // Sandra earrings (gold drop)
    pp(g, ['M148 148 C146 152 146 158 148 162 C150 166 152 164 152 160 C152 156 150 152 148 148'], a);
    pp(g, ['M212 148 C214 152 214 158 212 162 C210 166 208 164 208 160 C208 156 210 152 212 148'], a);
    // Sandra necklace (chain link)
    pp(g, ['M158 194 C162 190 168 188 174 190 C178 192 180 196 178 200 C176 204 172 206 168 204 C164 202 160 198 158 194', 'M178 200 C182 196 188 194 194 196 C198 198 200 202 198 206 C196 210 192 212 188 210 C184 208 180 204 178 200', 'M198 206 C202 202 208 200 214 202 C218 204 220 208 218 212'], a);
    // Ricardo hair - short brown
    pp(g, ['M158 68 C156 54 164 40 178 34 C190 30 200 34 206 42 C212 50 214 60 210 70'], a);
    pp(g, ['M162 64 C164 54 170 44 180 38 C190 34 198 38 204 44 C208 52 210 60 208 66'], a);
    // Ricardo hair texture
    pp(g, ['M172 36 C178 32 186 32 192 36', 'M166 46 C174 40 184 38 192 42'], a, lt);
    // Baby Miguel hair
    pp(g, ['M84 172 C82 158 90 146 104 140 C116 136 128 140 134 150 C138 158 140 166 136 176'], a);
    pp(g, ['M88 168 C90 158 96 148 106 144 C116 142 124 146 130 154 C134 160 136 168 134 174'], a);
  },

  // 4: Clothing details
  (g, a) => {
    // Sandra turtleneck
    pp(g, ['M162 198 C168 190 176 186 180 186 C184 186 192 190 198 198'], a);
    pp(g, ['M158 194 C164 186 172 182 180 182 C188 182 196 186 202 194'], a);
    // Turtleneck folds
    pp(g, ['M164 192 C170 188 176 186 182 188', 'M162 196 C168 192 178 190 186 192'], a, lt);
    // Sandra body seam
    pp(g, ['M180 198 L180 400'], a, lt);
    // Sandra arm sleeve details
    pp(g, ['M124 228 C118 236 114 244 112 252', 'M236 228 C242 236 246 244 248 252'], a, lt);
    // Ricardo quarter-zip fleece detail
    pp(g, ['M180 114 L180 140'], a);
    pp(g, ['M174 116 C178 118 182 118 186 116'], a);
    // Fleece collar
    pp(g, ['M164 112 C170 108 176 106 180 106 C184 106 190 108 196 112'], a);
    // Miguel plaid shirt - crossed lines
    pp(g, ['M80 240 L80 320', 'M90 236 L90 320', 'M100 232 L100 320', 'M110 234 L110 320', 'M120 236 L120 320', 'M130 240 L130 320'], a, lt);
    pp(g, ['M78 250 L134 250', 'M76 264 L136 264', 'M74 278 L138 278', 'M74 292 L138 292', 'M74 306 L138 306'], a, lt);
    // Miguel shirt collar
    pp(g, ['M92 228 C98 224 106 222 112 224 C118 226 122 228 126 232'], a);
  },

  // 5: Hands, held objects
  (g, a) => {
    // Sandra's left hand supporting Miguel
    pp(g, ['M92 280 C88 274 82 276 80 282 C78 288 82 292 88 290'], a);
    pp(g, ['M84 278 C80 272 76 266 78 262 C80 258 84 258 86 262', 'M86 276 C82 270 78 264 80 260 C82 256 86 256 88 260'], a);
    // Sandra's right hand
    pp(g, ['M258 280 C262 274 268 276 270 282 C272 288 268 292 262 290'], a);
    pp(g, ['M264 278 C268 272 272 266 270 262 C268 258 264 258 262 262'], a);
    // Ricardo's hands on Sandra's shoulders/arms
    pp(g, ['M128 214 C122 210 116 214 114 220 C112 226 116 230 122 228'], a);
    pp(g, ['M232 214 C238 210 244 214 246 220 C248 226 244 230 238 228'], a);
    // Miguel's small hands
    pp(g, ['M78 270 C74 266 70 268 68 274 C66 278 70 282 76 280'], a);
    pp(g, ['M134 268 C138 264 142 266 144 272 C146 276 142 280 136 278'], a);
    // Necklace chain detail (additional links)
    pp(g, ['M166 196 C168 200 172 202 176 200', 'M186 202 C188 206 192 208 196 206', 'M206 208 C208 212 212 214 216 212'], a, lt);
  },

  // 6: Background - pampas grass, green wall
  (g, a) => {
    // Pampas grass LEFT - feathery plumes radiating upward
    pp(g, ['M30 380 C28 340 22 280 16 220 C12 180 8 140 4 100', 'M30 380 C32 340 36 280 40 220 C42 180 44 140 46 100', 'M30 380 C24 330 14 260 6 180', 'M30 380 C36 330 46 260 54 180', 'M30 380 C20 320 10 240 2 160', 'M30 380 C40 320 50 240 58 160'], a);
    // Plume feathers left
    pp(g, ['M10 120 C6 112 4 104 2 96', 'M16 110 C14 102 10 94 8 86', 'M40 120 C42 112 44 104 46 96', 'M46 110 C48 102 50 94 52 86', 'M8 150 C4 140 2 130 0 120', 'M50 150 C54 140 56 130 58 120'], a, lt);

    // Pampas grass RIGHT
    pp(g, ['M330 380 C328 340 322 280 316 220 C312 180 308 140 304 100', 'M330 380 C332 340 336 280 340 220 C342 180 344 140 346 100', 'M330 380 C324 330 314 260 306 180', 'M330 380 C336 330 346 260 354 180', 'M330 380 C320 320 310 240 302 160', 'M330 380 C340 320 350 240 358 160'], a);
    // Plume feathers right
    pp(g, ['M310 120 C306 112 304 104 302 96', 'M316 110 C314 102 310 94 308 86', 'M340 120 C342 112 344 104 346 96', 'M346 110 C348 102 350 94 352 86', 'M308 150 C304 140 302 130 300 120', 'M350 150 C354 140 356 130 358 120'], a, lt);

    // Green decorative balls
    fe(g, 'circle', { cx: 20, cy: 280, r: 6, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 45, cy: 240, r: 5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 340, cy: 280, r: 6, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 315, cy: 240, r: 5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // Golden leaves
    pp(g, ['M12 250 C8 244 10 236 16 234 C22 232 28 238 26 244 C24 250 18 254 12 250 Z', 'M348 250 C352 244 350 236 344 234 C338 232 332 238 334 244 C336 250 342 254 348 250 Z'], a);
    pp(g, ['M35 200 C31 194 33 186 39 184 C45 182 51 188 49 194 C47 200 41 204 35 200 Z', 'M325 200 C329 194 327 186 321 184 C315 182 309 188 311 194 C313 200 319 204 325 200 Z'], a);
  },

  // 7: Color fills - FIGURES
  (g, a) => {
    // Sandra skin
    fl(g, 'M152 130 C150 110 164 92 180 86 C196 92 210 110 208 130 C210 146 206 158 198 168 C192 176 186 182 180 184 C174 182 168 176 162 168 C156 158 152 146 152 130 Z', '#FADCC2', a);
    // Sandra hair
    fl(g, 'M150 126 C146 104 158 84 178 76 C194 72 210 78 220 90 C228 100 230 114 226 126 L222 124 C224 114 222 104 218 96 C212 86 202 80 190 80 C178 78 168 82 162 90 C156 98 152 110 154 122 Z', '#3E2518', a);
    // Hair sides
    fl(g, 'M148 126 C144 140 142 158 140 176 C138 192 136 204 134 210 L130 208 C132 196 134 180 136 164 C138 148 140 134 144 124 Z', '#3E2518', false);
    fl(g, 'M224 126 C228 140 230 158 230 176 C230 192 228 204 226 210 L230 208 C230 196 230 180 228 164 C226 148 224 134 222 124 Z', '#3E2518', false);
    // Sandra turtleneck (teal)
    fl(g, 'M120 224 C132 206 158 198 180 198 C202 198 228 206 240 224 L244 400 L116 400 Z', '#00695C', a);
    // Turtleneck collar
    fl(g, 'M158 194 C164 186 172 182 180 182 C188 182 196 186 202 194 L198 198 C192 192 186 188 180 188 C174 188 168 192 162 198 Z', '#00796B', false);
    // Sandra neck skin
    fe(g, 'rect', { x: 169, y: 182, width: 22, height: 16, rx: 4, fill: '#F0C8A8' }, false);
    // Necklace color
    fl(g, 'M158 194 C162 190 168 188 174 190 C178 192 180 196 178 200 C176 204 172 206 168 204 C164 202 160 198 158 194 Z', '#FFD700', false);
    fl(g, 'M178 200 C182 196 188 194 194 196 C198 198 200 202 198 206 C196 210 192 212 188 210 C184 208 180 204 178 200 Z', '#FFD700', false);
    fl(g, 'M198 206 C202 202 208 200 214 202 C218 204 220 208 218 212 L214 210 Z', '#FFD700', false);
    // Earrings
    fe(g, 'ellipse', { cx: 150, cy: 156, rx: 3, ry: 6, fill: '#FFD700' }, false);
    fe(g, 'ellipse', { cx: 210, cy: 156, rx: 3, ry: 6, fill: '#FFD700' }, false);

    // Ricardo skin
    fl(g, 'M158 72 C158 54 168 40 180 34 C192 40 202 54 202 72 C204 84 200 94 194 102 C190 106 184 110 180 112 C176 110 170 106 166 102 C160 94 158 84 158 72 Z', '#EDBE8C', false);
    // Ricardo fleece (gray)
    fl(g, 'M148 132 C156 118 168 112 180 112 C192 112 204 118 212 132 L216 200 L144 200 Z', '#78909C', false);

    // Baby Miguel skin
    fl(g, 'M84 178 C82 164 92 150 106 144 C120 150 130 164 128 178 C130 192 126 202 120 210 C116 214 110 218 106 220 C100 218 96 214 92 210 C88 202 84 192 84 178 Z', '#FADCC2', a);
    // Miguel ears
    fe(g, 'ellipse', { cx: 75, cy: 184, rx: 5, ry: 8, fill: '#FADCC2' }, false);
    fe(g, 'ellipse', { cx: 137, cy: 184, rx: 5, ry: 8, fill: '#FADCC2' }, false);
    // Miguel plaid shirt (base)
    fl(g, 'M78 250 C86 236 96 228 106 228 C116 228 126 236 134 250 L138 330 L74 330 Z', '#D7CCC8', a);
    // Miguel hair
    fl(g, 'M86 172 C84 160 92 148 106 142 C118 138 130 142 136 152 C140 160 142 168 138 176 L134 174 C136 166 136 160 132 154 C128 148 120 144 110 146 C100 148 94 156 90 166 Z', '#4E342E', false);
  },

  // 8: Color fills - SCENE (wall, pampas)
  (g, a) => {
    // Green wall background
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#2E7D32' }, a);
    // Floor
    fe(g, 'rect', { x: 0, y: 400, width: 360, height: 50, fill: '#1B5E20' }, false);
    // Pampas grass LEFT fills
    fl(g, 'M0 80 C8 100 14 140 18 180 C22 220 26 280 30 380 C34 280 38 220 42 180 C46 140 52 100 60 80 L56 70 C50 90 44 130 40 170 C36 210 32 270 30 370 C28 270 24 210 20 170 C16 130 10 90 4 70 Z', '#D7CCC8', false);
    // Pampas feathery top left
    fl(g, 'M2 100 C6 80 12 70 20 60 C28 50 34 56 40 70 C46 80 52 96 58 100 C52 90 44 76 36 68 C28 60 20 56 14 64 C8 72 4 86 2 100 Z', '#BCAAA4', false);
    fl(g, 'M0 130 C4 110 10 96 16 86 C22 76 28 80 34 92 C40 100 46 116 52 130 C46 120 40 106 34 96 C28 86 22 82 16 90 C10 98 4 114 0 130 Z', '#D7CCC8', false);

    // Pampas grass RIGHT fills
    fl(g, 'M300 80 C308 100 314 140 318 180 C322 220 326 280 330 380 C334 280 338 220 342 180 C346 140 352 100 360 80 L356 70 C350 90 344 130 340 170 C336 210 332 270 330 370 C328 270 324 210 320 170 C316 130 310 90 304 70 Z', '#D7CCC8', false);
    // Pampas feathery top right
    fl(g, 'M302 100 C306 80 312 70 320 60 C328 50 334 56 340 70 C346 80 352 96 358 100 C352 90 344 76 336 68 C328 60 320 56 314 64 C308 72 304 86 302 100 Z', '#BCAAA4', false);
    fl(g, 'M300 130 C304 110 310 96 316 86 C322 76 328 80 334 92 C340 100 346 116 352 130 C346 120 340 106 334 96 C328 86 322 82 316 90 C310 98 304 114 300 130 Z', '#D7CCC8', false);

    // Green decorative balls
    fe(g, 'circle', { cx: 20, cy: 280, r: 6, fill: '#26A69A' }, false);
    fe(g, 'circle', { cx: 45, cy: 240, r: 5, fill: '#2E7D32' }, false);
    fe(g, 'circle', { cx: 340, cy: 280, r: 6, fill: '#26A69A' }, false);
    fe(g, 'circle', { cx: 315, cy: 240, r: 5, fill: '#2E7D32' }, false);

    // Golden leaves
    fl(g, 'M12 250 C8 244 10 236 16 234 C22 232 28 238 26 244 C24 250 18 254 12 250 Z', '#FFB300', false);
    fl(g, 'M348 250 C352 244 350 236 344 234 C338 232 332 238 334 244 C336 250 342 254 348 250 Z', '#FFB300', false);
    fl(g, 'M35 200 C31 194 33 186 39 184 C45 182 51 188 49 194 C47 200 41 204 35 200 Z', '#FFB300', false);
    fl(g, 'M325 200 C329 194 327 186 321 184 C315 182 309 188 311 194 C313 200 319 204 325 200 Z', '#FFB300', false);

    // Plaid lines on Miguel shirt
    fl(g, 'M88 244 L92 244 L92 330 L88 244 Z', '#8D6E63', false);
    fl(g, 'M104 236 L108 236 L108 330 L104 236 Z', '#8D6E63', false);
    fl(g, 'M120 240 L124 240 L124 330 L120 240 Z', '#8D6E63', false);
  },

  // 9: Final polish
  (g, a) => {
    // Sandra eye shine
    fe(g, 'circle', { cx: 172, cy: 126, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 194, cy: 126, r: 1.5, fill: 'white' }, a);
    // Sandra cheeks
    fe(g, 'ellipse', { cx: 162, cy: 152, rx: 8, ry: 4, fill: '#F48FB1', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 198, cy: 152, rx: 8, ry: 4, fill: '#F48FB1', opacity: '0.3' }, a);
    // Sandra lip color
    fl(g, 'M166 162 C174 168 180 170 186 168 C190 166 194 162 C190 168 184 174 180 174 C176 174 170 168 166 162 Z', '#E57373', false);
    // Ricardo eye shine
    fe(g, 'circle', { cx: 174, cy: 68, r: 1.2, fill: 'white' }, false);
    fe(g, 'circle', { cx: 194, cy: 68, r: 1.2, fill: 'white' }, false);
    // Miguel eye shine
    fe(g, 'circle', { cx: 100, cy: 174, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 120, cy: 174, r: 1.5, fill: 'white' }, a);
    // Miguel cheeks
    fe(g, 'ellipse', { cx: 92, cy: 196, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 120, cy: 196, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.4' }, a);
    // Miguel mouth color
    fl(g, 'M98 194 C102 200 108 204 112 200 C116 198 118 194 Z', '#E57373', false);
    // Necklace metallic highlights
    fe(g, 'circle', { cx: 168, cy: 196, r: 1, fill: 'white', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 188, cy: 202, r: 1, fill: 'white', opacity: '0.6' }, false);
    // Earring highlights
    fe(g, 'circle', { cx: 149, cy: 154, r: 1, fill: 'white', opacity: '0.5' }, false);
    fe(g, 'circle', { cx: 211, cy: 154, r: 1, fill: 'white', opacity: '0.5' }, false);
    // Plaid shirt cross-hatch strokes
    pp(g, ['M76 256 L136 256', 'M74 270 L138 270', 'M74 284 L138 284', 'M74 298 L138 298', 'M74 312 L138 312'], a, lt);
    // Ricardo fleece zip highlight
    pp(g, ['M180 114 L180 140'], a, lt);
    // Pampas feather detail strokes
    pp(g, ['M8 90 C12 82 18 76 24 72', 'M50 90 C46 82 42 76 36 72', 'M308 90 C312 82 318 76 324 72', 'M350 90 C346 82 342 76 336 72'], a, lt);
    // Soft studio light effect
    fe(g, 'ellipse', { cx: 180, cy: 100, rx: 100, ry: 40, fill: 'white', opacity: '0.04' }, false);
    // Sandra teeth hint
    pp(g, ['M170 164 L190 164', 'M174 164 L174 168 M180 164 L180 169 M186 164 L186 168'], a, lt);
  }
];

// ==============================================================
// SCENE 3: CASAMENTO - Black-and-white wedding scene
// Bride and groom seated in stone church. GRAYSCALE ONLY.
// ==============================================================
const casamentoLayers = [
  // 0: Composition guides
  (g, a) => {
    // Church floor line
    pp(g, ['M0 340 L360 340'], a, lt);
    // Bench line
    pp(g, ['M60 300 L300 300'], a, lt);
    // Groom zone (left)
    pp(g, ['M60 60 L60 340 M200 60 L200 340', 'M60 160 L200 160'], a, lt);
    // Bride zone (right)
    pp(g, ['M160 60 L160 340 M300 60 L300 340', 'M160 170 L300 170'], a, lt);
    // Ceiling beams
    pp(g, ['M0 0 L360 0 L360 40 L0 40 Z', 'M0 20 L360 20'], a, lt);
    // Wall lamp position
    pp(g, ['M30 80 L50 80 L50 120 L30 120 Z'], a, lt);
    // Guest area
    pp(g, ['M0 80 L360 80 L360 200 L0 200'], a, lt);
  },

  // 1: Main figure outlines - groom and bride
  (g, a) => {
    // GROOM (Ricardo) - seated left
    // Head
    pp(g, ['M104 128 C104 108 114 94 130 88 C146 94 156 108 156 128 C158 142 154 154 148 162 C142 168 136 172 130 174 C124 172 118 168 112 162 C106 154 104 142 104 128'], a);
    // Neck
    pp(g, ['M122 172 L120 186 M138 172 L140 186'], a);
    // Torso - seated, straight posture
    pp(g, ['M88 214 C98 196 116 186 130 186 C144 186 162 196 172 214 L176 300 M88 214 L84 300'], a);
    // Left arm
    pp(g, ['M92 218 C80 234 72 254 68 274 C66 284 70 290 76 288'], a);
    // Right arm
    pp(g, ['M168 218 C178 234 184 254 186 274 C188 284 184 290 178 288'], a);

    // BRIDE (Sandra) - seated right
    // Head
    pp(g, ['M194 138 C194 118 204 104 220 98 C236 104 246 118 246 138 C248 152 244 164 238 172 C232 178 226 182 220 184 C214 182 208 178 202 172 C196 164 194 152 194 138'], a);
    // Neck
    pp(g, ['M212 182 L210 196 M228 182 L230 196'], a);
    // Shoulders and bodice (strapless)
    pp(g, ['M182 216 C192 200 210 194 220 194 C230 194 248 200 258 216'], a);
    // Bodice tight
    pp(g, ['M186 218 L182 260 M254 218 L258 260'], a);
    // Voluminous tulle skirt
    pp(g, ['M160 260 C156 280 148 300 140 320 C134 336 130 350 128 370 C126 390 130 410 140 430 L300 430 C310 410 314 390 312 370 C310 350 306 336 300 320 C292 300 284 280 280 260'], a);
    // Skirt layers/folds
    pp(g, ['M160 280 C180 276 200 274 220 276 C240 274 260 276 280 280', 'M150 310 C180 306 210 304 230 306 C250 304 270 306 290 310', 'M140 350 C170 346 200 344 230 346 C260 344 280 346 300 350'], a, lt);
  },

  // 2: Face details
  (g, a) => {
    // GROOM eyes
    pp(g, ['M116 124 C118 118 126 116 130 120 C134 124 132 130 128 132 C124 134 118 130 116 124 Z'], a);
    pp(g, ['M138 124 C140 118 148 116 152 120 C156 124 154 130 150 132 C146 134 140 130 138 124 Z'], a);
    fe(g, 'circle', { cx: 124, cy: 126, r: 3, fill: a ? HL : '#424242' }, a);
    fe(g, 'circle', { cx: 146, cy: 126, r: 3, fill: a ? HL : '#424242' }, a);
    // Groom eyebrows
    pp(g, ['M114 114 C120 110 128 109 134 112', 'M140 112 C146 109 154 110 160 114'], a);
    // Groom nose
    pp(g, ['M128 120 C127 128 126 136 124 140', 'M121 142 C124 146 128 148 132 148 C136 146 138 142 140 140'], a);
    // Groom mouth - composed
    pp(g, ['M118 156 C124 152 130 150 134 152 C138 150 142 152 148 156'], a);
    // Groom ears
    pp(g, ['M102 124 C96 120 92 126 92 134 C92 142 96 146 102 146', 'M158 124 C164 120 168 126 168 134 C168 142 164 146 158 146'], a);
    // Groom jaw line (strong)
    pp(g, ['M108 152 C112 162 120 170 130 174 C140 170 148 162 152 152'], a, lt);

    // BRIDE eyes
    pp(g, ['M206 134 C208 128 216 126 220 130 C224 134 222 140 218 142 C214 144 208 140 206 134 Z'], a);
    pp(g, ['M228 134 C230 128 238 126 242 130 C246 134 244 140 240 142 C236 144 230 140 228 134 Z'], a);
    fe(g, 'circle', { cx: 214, cy: 136, r: 3, fill: a ? HL : '#424242' }, a);
    fe(g, 'circle', { cx: 236, cy: 136, r: 3, fill: a ? HL : '#424242' }, a);
    // Bride eyelashes
    pp(g, ['M206 132 C204 130 203 128 204 126', 'M242 130 C244 128 245 126 246 128'], a, lt);
    // Bride eyebrows
    pp(g, ['M202 124 C210 118 220 117 226 120', 'M230 120 C236 117 246 118 254 124'], a);
    // Bride nose
    pp(g, ['M218 130 C217 138 216 146 214 150', 'M211 152 C214 156 218 158 222 158 C226 156 228 152 230 150'], a);
    // Bride smile - soft and emotional
    pp(g, ['M208 168 C214 164 220 162 224 164 C228 162 232 164 238 168', 'M210 170 C216 176 222 178 226 176 C230 174 236 170'], a);
  },

  // 3: Hair, headwear
  (g, a) => {
    // GROOM hair - slicked back
    pp(g, ['M106 124 C104 108 112 92 126 84 C138 80 150 84 158 92 C164 100 166 112 162 124'], a);
    pp(g, ['M110 118 C112 106 118 94 130 88 C142 84 152 88 158 96 C162 104 164 114 160 122'], a);
    // Hair texture
    pp(g, ['M122 86 C130 82 140 82 148 86', 'M116 96 C126 90 138 88 148 92', 'M112 106 C122 98 136 96 148 100'], a, lt);

    // BRIDE hair - updo/bun with waves
    pp(g, ['M192 134 C188 110 200 90 216 82 C232 78 246 84 252 96 C258 108 258 120 254 134'], a);
    pp(g, ['M198 128 C200 116 208 100 220 92 C232 86 242 90 248 100 C252 110 254 122 250 130'], a);
    // Bun at back
    pp(g, ['M242 94 C250 86 260 82 268 86 C274 90 276 100 272 108 C268 116 260 120 252 118 C246 116 242 110 242 104'], a);
    // Hair waves
    pp(g, ['M210 86 C218 80 228 78 236 82', 'M204 98 C212 90 224 88 234 92', 'M200 110 C208 104 220 100 232 104'], a, lt);
    // Small flower/accessory in hair
    pp(g, ['M254 92 C258 88 262 88 264 92 C268 88 272 88 274 92 C278 88 280 90 278 94 C276 98 272 100 268 98 C264 100 258 98 256 94 C254 96 252 94 254 92 Z'], a);

    // Groom tie/collar detail
    pp(g, ['M122 186 C126 182 130 180 134 182 C138 180 140 182 144 186'], a);
    pp(g, ['M130 186 L128 210', 'M136 186 L138 210'], a);
    // Tie knot
    pp(g, ['M128 186 L130 192 L132 186 L134 192 L136 186'], a);
  },

  // 4: Clothing details
  (g, a) => {
    // GROOM suit jacket lapels
    pp(g, ['M108 198 L120 216 L128 240', 'M152 198 L140 216 L132 240'], a);
    // Shirt front
    pp(g, ['M120 216 L122 300', 'M140 216 L138 300'], a, lt);
    // Suit buttons
    fe(g, 'circle', { cx: 130, cy: 240, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 130, cy: 258, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Pocket square
    pp(g, ['M108 228 L114 228 L116 240 L106 240 Z'], a, lt);
    // Suit jacket seams
    pp(g, ['M96 220 C94 240 92 260 90 280', 'M164 220 C166 240 168 260 170 280'], a, lt);
    // BRIDE bodice details - strapless top edge
    pp(g, ['M186 216 C196 212 210 210 220 210 C230 210 244 212 254 216'], a);
    // Bodice boning lines
    pp(g, ['M196 218 L194 258', 'M210 216 L208 260', 'M230 216 L232 260', 'M244 218 L246 258'], a, lt);
    // Bodice sweetheart neckline
    pp(g, ['M186 216 C192 208 204 204 220 206 C236 204 248 208 254 216'], a);
    // Waist sash
    pp(g, ['M182 256 C200 252 220 250 240 252 C260 250 270 252 280 256'], a);
    // Skirt gather detail
    pp(g, ['M170 270 C180 268 190 266 200 268', 'M240 268 C250 266 260 268 270 270'], a, lt);
  },

  // 5: Hands, bench
  (g, a) => {
    // Groom's left hand
    pp(g, ['M68 274 C64 268 58 270 56 276 C54 282 58 286 64 284'], a);
    pp(g, ['M60 272 C56 266 52 260 54 256 C56 252 60 252 62 256', 'M58 276 C54 270 50 264 52 260 C54 256 58 256 60 260'], a);
    // Groom's right hand resting on bride's hand
    pp(g, ['M178 284 C182 278 188 280 190 286 C192 292 188 296 182 294'], a);
    pp(g, ['M186 282 C190 276 194 270 192 266 C190 262 186 262 184 266'], a);
    // Bride's left hand
    pp(g, ['M190 290 C194 284 200 286 202 292 C204 298 200 302 194 300'], a);
    pp(g, ['M198 288 C202 282 206 276 204 272 C202 268 198 268 196 272'], a);
    // Bride's right hand in lap
    pp(g, ['M250 280 C254 274 260 276 262 282 C264 288 260 292 254 290'], a);

    // BENCH (modern dark)
    pp(g, ['M60 296 L300 296 L300 310 L60 310 Z'], a);
    // Bench legs
    pp(g, ['M70 310 L70 340', 'M290 310 L290 340'], a);
    // Bench seat surface
    pp(g, ['M60 296 L300 296'], a);

    // Elderly lady on left bench
    pp(g, ['M20 240 C20 228 28 220 36 218 C44 220 50 228 50 240 C50 248 46 254 42 258 C38 260 34 260 32 258', 'M14 280 C20 266 28 260 36 260 C44 260 50 266 56 280 L58 320 L12 320'], a, lt);

    // Stone floor
    pp(g, ['M0 340 L360 340', 'M0 340 L0 450 L360 450 L360 340'], a, lt);
  },

  // 6: Background - stone walls, ceiling, guests
  (g, a) => {
    // CEILING BEAMS
    pp(g, ['M0 0 L360 0 L360 40 L0 40 Z', 'M0 20 L360 20'], a);
    pp(g, ['M60 0 L60 40', 'M120 0 L120 40', 'M180 0 L180 40', 'M240 0 L240 40', 'M300 0 L300 40'], a, lt);

    // STONE WALLS - irregular blocks
    pp(g, ['M0 40 L0 340 M360 40 L360 340'], a);
    // Left wall stones
    pp(g, ['M0 40 L30 42 L32 70 L0 68 Z', 'M30 42 L60 40 L62 72 L32 70 Z', 'M0 68 L34 72 L32 100 L0 98 Z', 'M34 72 L60 68 L62 102 L32 100 Z', 'M0 98 L28 102 L26 130 L0 128 Z', 'M28 102 L60 98 L62 132 L26 130 Z'], a, lt);
    // Right wall stones
    pp(g, ['M300 40 L330 42 L332 70 L300 68 Z', 'M330 42 L360 40 L360 72 L332 70 Z', 'M300 68 L334 72 L332 100 L300 98 Z', 'M334 72 L360 68 L360 102 L332 100 Z'], a, lt);

    // ARCH on right wall
    pp(g, ['M300 180 C300 130 320 100 340 90 C350 86 356 90 360 100 L360 180'], a);

    // WALL LAMP on left wall
    fe(g, 'circle', { cx: 40, cy: 100, r: 12, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    pp(g, ['M40 88 L40 80', 'M40 112 L40 120 L36 120 L44 120'], a);

    // GUESTS behind - rows of people on wooden benches (simplified)
    // Back row wooden bench
    pp(g, ['M70 140 L290 140 L290 150 L70 150 Z'], a, lt);
    // Guest silhouettes (back row)
    pp(g, ['M80 110 C80 100 86 94 92 92 C98 94 104 100 104 110 L104 140 L80 140 Z', 'M110 108 C110 98 116 92 122 90 C128 92 134 98 134 108 L134 140 L110 140 Z', 'M140 110 C140 100 146 94 152 92 C158 94 164 100 164 110 L164 140 L140 140 Z', 'M170 108 C170 98 176 92 182 90 C188 92 194 98 194 108 L194 140 L170 140 Z', 'M200 110 C200 100 206 94 212 92 C218 94 224 100 224 110 L224 140 L200 140 Z', 'M230 108 C230 98 236 92 242 90 C248 92 254 98 254 108 L254 140 L230 140 Z', 'M260 110 C260 100 266 94 272 92 C278 94 284 100 284 110 L284 140 L260 140 Z'], a, lt);

    // Front row bench
    pp(g, ['M70 196 L290 196 L290 206 L70 206 Z'], a, lt);
    // Guest silhouettes (front row)
    pp(g, ['M80 166 C80 156 86 150 92 148 C98 150 104 156 104 166 L104 196 L80 196 Z', 'M110 164 C110 154 116 148 122 146 C128 148 134 154 134 164 L134 196 L110 196 Z', 'M140 166 C140 156 146 150 152 148 C158 150 164 156 164 166 L164 196 L140 196 Z', 'M230 164 C230 154 236 148 242 146 C248 148 254 154 254 164 L254 196 L230 196 Z', 'M260 166 C260 156 266 150 272 148 C278 150 284 156 284 166 L284 196 L260 196 Z'], a, lt);

    // Standing person on right near arch
    pp(g, ['M316 140 C316 130 322 124 328 122 C334 124 340 130 340 140 C340 148 336 154 332 158 C330 160 326 160 324 158', 'M312 178 C318 166 324 160 328 160 C332 160 338 166 344 178 L346 240 L310 240'], a, lt);

    // Floor stones
    pp(g, ['M0 370 L360 370', 'M0 400 L360 400', 'M0 430 L360 430'], a, lt);
    pp(g, ['M60 340 L60 450', 'M140 340 L140 450', 'M220 340 L220 450', 'M300 340 L300 450'], a, lt);
  },

  // 7: Color fills - FIGURES (grayscale)
  (g, a) => {
    // GROOM skin
    fl(g, 'M106 128 C106 110 116 96 130 90 C144 96 154 110 154 128 C156 142 152 154 146 162 C140 168 134 172 130 174 C126 172 120 168 114 162 C108 154 106 142 106 128 Z', '#BDBDBD', a);
    // Groom ears
    fe(g, 'ellipse', { cx: 97, cy: 134, rx: 5, ry: 10, fill: '#BDBDBD' }, false);
    fe(g, 'ellipse', { cx: 163, cy: 134, rx: 5, ry: 10, fill: '#BDBDBD' }, false);
    // Groom hair
    fl(g, 'M108 124 C106 110 114 94 128 86 C140 82 152 86 160 94 C166 102 168 114 164 124 L160 122 C162 114 160 104 156 98 C150 90 142 86 132 88 C122 90 116 98 112 108 Z', '#616161', a);
    // Groom suit
    fl(g, 'M88 214 C98 196 116 186 130 186 C144 186 162 196 172 214 L176 300 L84 300 Z', '#37474F', a);
    // Groom shirt
    fl(g, 'M120 216 L122 300 L138 300 L140 216 Z', '#FAFAFA', false);
    // Groom tie
    fl(g, 'M128 186 L126 240 L130 244 L134 240 L132 186 Z', '#757575', false);
    // Groom neck
    fe(g, 'rect', { x: 121, y: 172, width: 18, height: 14, rx: 4, fill: '#B0B0B0' }, false);

    // BRIDE skin
    fl(g, 'M196 138 C196 120 206 106 220 100 C234 106 244 120 244 138 C246 152 242 164 236 172 C230 178 224 182 220 184 C216 182 210 178 204 172 C198 164 196 152 196 138 Z', '#BDBDBD', a);
    // Bride hair
    fl(g, 'M194 134 C190 112 202 92 218 84 C234 80 248 86 254 98 C260 110 260 122 256 134 L252 130 C254 122 254 112 250 102 C246 92 238 86 228 86 C218 86 210 92 206 100 C200 110 198 122 198 130 Z', '#616161', a);
    // Bride bun
    fl(g, 'M244 96 C252 88 262 84 270 88 C276 92 278 102 274 110 C270 118 262 122 254 120 C248 118 244 112 244 106 Z', '#616161', false);
    // Bride neck
    fe(g, 'rect', { x: 211, y: 182, width: 18, height: 14, rx: 4, fill: '#B0B0B0' }, false);
    // Bride dress bodice (white)
    fl(g, 'M186 216 C196 208 210 204 220 206 C230 204 244 208 254 216 L258 260 L182 260 Z', '#FFFFFF', a);
    // Bride tulle skirt (white with gray shading)
    fl(g, 'M160 260 C156 280 148 300 140 320 C134 336 130 350 128 370 C126 390 130 410 140 430 L300 430 C310 410 314 390 312 370 C310 350 306 336 300 320 C292 300 284 280 280 260 Z', '#F5F5F5', a);

    // Elderly lady fill
    fl(g, 'M22 240 C22 230 30 222 36 220 C42 222 48 230 48 240 C48 248 44 254 40 258 L32 258 Z', '#BDBDBD', false);
    fl(g, 'M14 280 C20 266 28 260 36 260 C44 260 50 266 56 280 L58 320 L12 320 Z', '#757575', false);
  },

  // 8: Color fills - SCENE (walls, floor, ceiling, guests)
  (g, a) => {
    // Ceiling
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 40, fill: '#424242' }, a);
    // Beam lines
    fe(g, 'rect', { x: 0, y: 18, width: 360, height: 4, fill: '#37474F' }, false);

    // Stone walls fill
    fe(g, 'rect', { x: 0, y: 40, width: 60, height: 300, fill: '#9E9E9E' }, false);
    fe(g, 'rect', { x: 300, y: 40, width: 60, height: 300, fill: '#9E9E9E' }, false);
    // Wall stone variation
    fl(g, 'M0 40 L30 42 L32 70 L0 68 Z', '#8E8E8E', false);
    fl(g, 'M30 42 L60 40 L62 72 L32 70 Z', '#A0A0A0', false);
    fl(g, 'M0 68 L34 72 L32 100 L0 98 Z', '#959595', false);
    fl(g, 'M34 72 L60 68 L62 102 L32 100 Z', '#757575', false);
    fl(g, 'M0 98 L28 102 L26 130 L0 128 Z', '#A0A0A0', false);
    fl(g, 'M28 102 L60 98 L62 132 L26 130 Z', '#8E8E8E', false);
    fl(g, 'M300 40 L330 42 L332 70 L300 68 Z', '#959595', false);
    fl(g, 'M330 42 L360 40 L360 72 L332 70 Z', '#8E8E8E', false);
    fl(g, 'M300 68 L334 72 L332 100 L300 98 Z', '#A0A0A0', false);
    fl(g, 'M334 72 L360 68 L360 102 L332 100 Z', '#757575', false);

    // Background area (where guests sit) - soft gray
    fe(g, 'rect', { x: 60, y: 40, width: 240, height: 210, fill: '#E0E0E0', opacity: '0.3' }, false);

    // Guest bench fills
    fe(g, 'rect', { x: 72, y: 141, width: 216, height: 9, fill: '#5D4037' }, false);
    fe(g, 'rect', { x: 72, y: 197, width: 216, height: 9, fill: '#5D4037' }, false);
    // Guest silhouette fills (semi-transparent)
    const gx = [80, 110, 140, 170, 200, 230, 260];
    gx.forEach(x => {
      fe(g, 'rect', { x: x + 2, y: 100, width: 20, height: 40, rx: 10, fill: '#9E9E9E', opacity: '0.5' }, false);
    });
    const gx2 = [80, 110, 140, 230, 260];
    gx2.forEach(x => {
      fe(g, 'rect', { x: x + 2, y: 156, width: 20, height: 40, rx: 10, fill: '#9E9E9E', opacity: '0.5' }, false);
    });

    // Bench (dark modern)
    fe(g, 'rect', { x: 62, y: 297, width: 236, height: 13, rx: 2, fill: '#212121' }, a);
    // Bench legs
    fe(g, 'rect', { x: 68, y: 310, width: 4, height: 30, fill: '#212121' }, false);
    fe(g, 'rect', { x: 288, y: 310, width: 4, height: 30, fill: '#212121' }, false);

    // Stone floor
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: '#E0E0E0' }, a);
    // Floor stone lines
    fl(g, 'M0 340 L60 340 L60 370 L0 370 Z', '#D5D5D5', false);
    fl(g, 'M60 340 L140 340 L140 370 L60 370 Z', '#EEEEEE', false);
    fl(g, 'M140 340 L220 340 L220 370 L140 370 Z', '#D5D5D5', false);
    fl(g, 'M220 340 L300 340 L300 370 L220 370 Z', '#EEEEEE', false);
    fl(g, 'M300 340 L360 340 L360 370 L300 370 Z', '#D5D5D5', false);
    fl(g, 'M0 370 L80 370 L80 400 L0 400 Z', '#EEEEEE', false);
    fl(g, 'M80 370 L180 370 L180 400 L80 400 Z', '#D5D5D5', false);
    fl(g, 'M180 370 L280 370 L280 400 L180 400 Z', '#EEEEEE', false);
    fl(g, 'M280 370 L360 370 L360 400 L280 400 Z', '#D5D5D5', false);

    // Lamp halo glow
    fe(g, 'circle', { cx: 40, cy: 100, r: 30, fill: '#FFF9C4', opacity: '0.3' }, false);

    // Arch opening (lighter)
    fl(g, 'M302 180 C302 132 322 102 340 92 C350 88 356 92 358 100 L358 180 Z', '#CFD8DC', false);

    // Standing person on right
    fl(g, 'M318 140 C318 132 324 126 328 124 C332 126 338 132 338 140 C338 148 334 154 330 158 L326 158 Z', '#BDBDBD', false);
    fl(g, 'M314 178 C318 168 324 162 328 162 C332 162 338 168 342 178 L344 240 L312 240 Z', '#757575', false);
  },

  // 9: Final polish
  (g, a) => {
    // Groom eye shine
    fe(g, 'circle', { cx: 122, cy: 124, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 144, cy: 124, r: 1.5, fill: 'white' }, a);
    // Bride eye shine
    fe(g, 'circle', { cx: 212, cy: 134, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 234, cy: 134, r: 1.5, fill: 'white' }, a);
    // Bride lip tone
    fl(g, 'M210 170 C216 176 222 178 226 176 C230 174 236 170 C232 172 226 176 222 176 C218 176 214 172 210 170 Z', '#9E9E9E', false);
    // Tulle texture lines (very fine)
    pp(g, ['M170 280 C190 274 210 272 230 276 C250 272 260 274 270 280', 'M155 310 C185 304 215 302 235 306 C255 302 275 304 285 310', 'M145 350 C175 344 205 342 235 346 C265 342 285 344 295 350', 'M140 390 C170 384 200 382 230 386 C260 382 280 384 300 390'], a, lt);
    // Dress shimmer
    fe(g, 'ellipse', { cx: 220, cy: 300, rx: 30, ry: 10, fill: 'white', opacity: '0.15' }, false);
    fe(g, 'ellipse', { cx: 200, cy: 360, rx: 40, ry: 12, fill: 'white', opacity: '0.1' }, false);
    // Hair flower accessory fill
    fl(g, 'M254 92 C258 88 262 88 264 92 C268 88 272 88 274 92 C278 88 280 90 278 94 C276 98 272 100 268 98 C264 100 258 98 256 94 C254 96 252 94 254 92 Z', '#E0E0E0', false);
    // Suit lapel shadow
    fl(g, 'M108 198 L120 216 L128 240 L130 240 L122 218 L112 200 Z', '#263238', false);
    fl(g, 'M152 198 L140 216 L132 240 L130 240 L138 218 L148 200 Z', '#263238', false);
    // Lamp glow inner
    fe(g, 'circle', { cx: 40, cy: 100, r: 8, fill: '#FFF9C4', opacity: '0.5' }, false);
    fe(g, 'circle', { cx: 40, cy: 100, r: 4, fill: '#FFFFFF', opacity: '0.6' }, false);
    // Ceiling beam shadows
    pp(g, ['M60 40 L60 42', 'M120 40 L120 42', 'M180 40 L180 42', 'M240 40 L240 42', 'M300 40 L300 42'], a, lt);
    // Stone wall mortar lines
    pp(g, ['M0 68 L60 68', 'M0 98 L60 98', 'M0 128 L60 128', 'M0 158 L60 158', 'M300 68 L360 68', 'M300 98 L360 98', 'M300 128 L360 128'], a, lt);
    // Floor shadow under bench
    fe(g, 'ellipse', { cx: 180, cy: 344, rx: 120, ry: 4, fill: '#9E9E9E', opacity: '0.3' }, false);
    // Skirt floor spread shadow
    fe(g, 'ellipse', { cx: 220, cy: 432, rx: 80, ry: 6, fill: '#BDBDBD', opacity: '0.2' }, false);
    // Pocket square hint
    fe(g, 'rect', { x: 109, y: 229, width: 6, height: 10, rx: 1, fill: '#FAFAFA' }, false);
    // Subtle vignette on edges
    fe(g, 'rect', { x: 0, y: 0, width: 10, height: 450, fill: '#424242', opacity: '0.1' }, false);
    fe(g, 'rect', { x: 350, y: 0, width: 10, height: 450, fill: '#424242', opacity: '0.1' }, false);
  }
];
// ==============================================================
// SCENE 1: PAIS - Parents jumping in the air against pure blue sky
// Shot from below looking up. Ricardo LEFT, Sandra RIGHT, hands clasped center.
// ==============================================================
const paisLayers = [
  // 0: Composition guides - two figure zones, center hand meeting point
  (g, a) => {
    // Ricardo zone (left)
    pp(g, ['M20 20 L20 420 M170 20 L170 420'], a, lt);
    // Sandra zone (right)
    pp(g, ['M190 20 L190 420 M340 20 L340 420'], a, lt);
    // Center vertical axis
    pp(g, ['M180 0 L180 450'], a, lt);
    // Head level guide
    pp(g, ['M20 80 L340 80'], a, lt);
    // Hand meeting level
    pp(g, ['M120 180 L240 180'], a, lt);
    // Feet level guide
    pp(g, ['M20 380 L340 380'], a, lt);
    // Perspective lines (from below, converging upward)
    pp(g, ['M0 450 L120 80', 'M360 450 L240 90'], a, lt);
  },

  // 1: Main figure outlines - Ricardo (left) and Sandra (right) full bodies
  (g, a) => {
    // RICARDO - Head (smaller, he's above us)
    pp(g, ['M104 64 C104 50 110 40 120 38 C130 40 136 50 136 64 C138 74 134 82 128 88 C124 92 122 94 120 95 C118 94 116 92 112 88 C106 82 102 74 104 64'], a);
    // Ricardo neck
    pp(g, ['M114 94 L112 106 M126 94 L128 106'], a);
    // Ricardo torso (lean, slight trapezoid from below)
    pp(g, ['M90 126 C96 112 108 106 120 106 C132 106 144 112 150 126 L155 220 M90 126 L85 220'], a);
    // Ricardo left arm stretched down-left (star jump)
    pp(g, ['M92 130 C78 148 60 170 42 200 C34 216 30 232 32 248'], a);
    // Ricardo right arm reaching center to Sandra's hand
    pp(g, ['M148 130 C156 145 162 158 168 172 C172 180 175 185 178 188'], a);
    // Ricardo left leg spread wide left
    pp(g, ['M95 218 C88 250 72 290 55 330 C48 350 42 370 38 390'], a);
    // Ricardo right leg spread wide right
    pp(g, ['M145 218 C148 250 152 290 158 330 C162 350 165 370 168 390'], a);

    // SANDRA - Head
    pp(g, ['M224 72 C224 58 230 48 240 46 C250 48 256 58 256 72 C258 82 254 90 248 96 C244 100 242 102 240 103 C238 102 236 100 232 96 C226 90 222 82 224 72'], a);
    // Sandra neck
    pp(g, ['M234 102 L232 114 M246 102 L248 114'], a);
    // Sandra torso
    pp(g, ['M214 134 C220 120 232 114 240 114 C248 114 260 120 266 134 L270 228 M214 134 L210 228'], a);
    // Sandra left arm reaching center to Ricardo's hand
    pp(g, ['M216 138 C210 152 202 166 194 178 C190 184 186 187 182 188'], a);
    // Sandra right arm raised high in V
    pp(g, ['M264 138 C276 126 288 110 298 92 C304 82 308 74 310 66'], a);
    // Sandra left leg
    pp(g, ['M218 226 C214 258 208 296 200 340 C196 358 194 374 192 392'], a);
    // Sandra right leg
    pp(g, ['M262 226 C268 258 276 296 286 340 C290 358 294 374 296 392'], a);
  },

  // 2: Face details - sunglasses, mouths, expressions
  (g, a) => {
    // RICARDO face
    // Sunglasses (rectangular, dark)
    pp(g, ['M108 60 L118 58 L120 68 L110 70 Z', 'M122 58 L132 60 L130 70 L120 68 Z'], a);
    // Glasses bridge
    pp(g, ['M120 64 L120 64'], a);
    // Nose
    pp(g, ['M118 66 C117 70 118 74 120 76 C122 74 123 70 122 66'], a);
    // Mouth (slight grin)
    pp(g, ['M112 80 C116 78 120 77 124 78 C128 80 126 84 122 85 C118 86 114 84 112 80'], a);
    // Ears
    pp(g, ['M102 62 C98 60 96 64 96 68 C96 72 98 74 102 72', 'M138 62 C142 60 144 64 144 68 C144 72 142 74 138 72'], a);

    // SANDRA face
    // Sunglasses (rectangular)
    pp(g, ['M228 68 L238 66 L240 76 L230 78 Z', 'M242 66 L252 68 L250 78 L240 76 Z'], a);
    // Glasses bridge
    pp(g, ['M240 72 L240 72'], a);
    // Nose
    pp(g, ['M238 74 C237 78 238 82 240 84 C242 82 243 78 242 74'], a);
    // Smile (open, radiantly happy)
    pp(g, ['M232 88 C236 84 240 83 244 84 C248 86 246 92 242 94 C238 96 234 94 232 88'], a);
    // Teeth in smile
    pp(g, ['M234 90 L244 88', 'M236 90 L236 92 M240 89 L240 91 M244 90 L244 92'], a, lt);
    // Ears
    pp(g, ['M222 70 C218 68 216 72 216 76 C216 80 218 82 222 80', 'M258 70 C262 68 264 72 264 76 C264 80 262 82 258 80'], a);
  },

  // 3: Hair, accessories - sunglasses detail, hair flying
  (g, a) => {
    // RICARDO hair - dark short, seen from below
    pp(g, ['M106 62 C104 52 110 42 120 40 C130 42 136 52 134 62'], a);
    pp(g, ['M110 56 C114 48 120 44 126 46 C132 48 134 54 132 58'], a);
    // Hair texture
    pp(g, ['M114 44 C118 40 124 40 128 44', 'M110 50 C116 46 126 46 130 50'], a, lt);

    // SANDRA hair - reddish-brown, flying in wind
    pp(g, ['M226 68 C224 56 230 46 240 44 C250 46 256 56 254 68'], a);
    // Hair flowing right (wind)
    pp(g, ['M254 52 C264 46 276 44 288 48 C296 52 300 58 298 66'], a);
    pp(g, ['M252 60 C260 54 272 50 284 54 C292 58 296 64 294 72'], a);
    // Hair flowing left
    pp(g, ['M226 56 C218 50 212 52 208 58 C206 64 208 70 212 74'], a);
    // Hair strands in wind
    pp(g, ['M256 48 C268 42 280 40 292 44', 'M258 56 C270 50 282 48 290 52', 'M224 52 C216 48 210 50 206 56'], a, lt);
    // Sandra sunglasses arms
    pp(g, ['M228 68 C224 68 222 70 222 72', 'M252 68 C256 68 258 70 258 72'], a, lt);
    // Ricardo sunglasses arms
    pp(g, ['M108 60 C104 60 102 62 102 64', 'M132 60 C136 60 138 62 138 64'], a, lt);
  },

  // 4: Clothing details - t-shirts, pants, jeans
  (g, a) => {
    // RICARDO t-shirt collar
    pp(g, ['M108 108 C112 104 118 102 120 102 C122 102 128 104 132 108'], a);
    // "300" text on Ricardo's chest
    const t300 = ce('text', { x: 106, y: 160, fill: a ? HL : P, 'font-size': '14', 'font-weight': 'bold', 'font-family': 'Arial' });
    t300.textContent = '300'; if (a) t300.classList.add('active-element'); g.appendChild(t300);
    // Ricardo shirt hem
    pp(g, ['M88 218 C100 222 140 222 152 218'], a, lt);
    // Ricardo pants seam
    pp(g, ['M120 218 L120 320'], a, lt);
    // Ricardo pant legs separation
    pp(g, ['M95 218 L55 390', 'M145 218 L168 390'], a);

    // SANDRA t-shirt collar
    pp(g, ['M228 116 C232 112 238 110 240 110 C242 110 248 112 252 116'], a);
    // Sandra shirt hem
    pp(g, ['M212 226 C224 230 256 230 268 226'], a, lt);
    // Sandra jeans waistband
    pp(g, ['M212 226 L268 226', 'M214 230 L266 230'], a);
    // Jeans seam
    pp(g, ['M240 226 L240 340'], a, lt);
    // Belt loops hint
    pp(g, ['M224 226 L224 232', 'M240 226 L240 232', 'M256 226 L256 232'], a, lt);
    // Jeans pocket arcs
    pp(g, ['M216 234 C220 240 228 244 236 242', 'M264 234 C260 240 252 244 244 242'], a, lt);
  },

  // 5: Hands clasped at center, shoes, action details
  (g, a) => {
    // HANDS CLASPED at center (~180, 188) - emotional focal point
    // Ricardo's right hand coming from left
    pp(g, ['M178 188 C176 182 172 178 168 176 C164 174 160 176 160 180 C160 184 164 186 168 186'], a);
    // Sandra's left hand coming from right
    pp(g, ['M182 188 C184 182 188 178 192 176 C196 174 200 176 200 180 C200 184 196 186 192 186'], a);
    // Interlocked fingers
    pp(g, ['M168 182 C170 178 174 176 178 178 C180 180 182 176 186 178 C188 180 190 178 192 182', 'M168 186 C172 190 176 192 180 190 C184 192 188 190 192 186'], a);
    // Wrist connection to arms
    pp(g, ['M168 176 C166 174 164 172 162 170', 'M192 176 C194 174 196 172 198 170'], a, lt);

    // RICARDO SHOES - Nike sneakers (closer/larger from below angle)
    // Left shoe
    pp(g, ['M28 388 C24 384 22 378 26 372 L46 372 C52 374 54 380 50 386 C48 392 40 396 32 396 C28 396 26 392 28 388 Z'], a);
    // Swoosh on left shoe
    pp(g, ['M30 382 C34 380 40 378 46 380 C42 382 36 384 30 382'], a);
    // Right shoe
    pp(g, ['M158 388 C154 384 152 378 156 372 L176 372 C182 374 184 380 180 386 C178 392 170 396 162 396 C158 396 156 392 158 388 Z'], a);
    // Swoosh on right shoe
    pp(g, ['M160 382 C164 380 170 378 176 380 C172 382 166 384 160 382'], a);
    // Shoe sole lines
    pp(g, ['M28 392 L48 392', 'M158 392 L178 392'], a, lt);

    // SANDRA SHOES - black flat shoes
    // Left shoe
    pp(g, ['M184 390 C180 386 180 380 184 376 L200 376 C206 378 208 384 204 390 C200 394 190 396 186 394 Z'], a);
    // Right shoe
    pp(g, ['M288 390 C284 386 284 380 288 376 L304 376 C310 378 312 384 308 390 C304 394 294 396 290 394 Z'], a);
  },

  // 6: Background - pure blue sky
  (g, a) => {
    // Sky gradient indication (horizontal bands from dark top to lighter bottom)
    pp(g, ['M0 0 L360 0', 'M0 60 L360 60', 'M0 150 L360 150', 'M0 250 L360 250', 'M0 350 L360 350', 'M0 450 L360 450'], a, lt);
    // Frame edges
    pp(g, ['M0 0 L0 450', 'M360 0 L360 450'], a, lt);
    // Subtle sun glow hint at bottom (light source from below/behind)
    pp(g, ['M120 430 C150 420 210 420 240 430'], a, lt);
  },

  // 7: Color fills - figures (skin, hair, clothes)
  (g, a) => {
    // RICARDO skin - face
    fl(g, 'M106 64 C106 52 112 42 120 40 C128 42 134 52 134 64 C136 74 132 82 126 88 C122 92 120 94 120 95 C118 94 116 92 114 88 C108 82 104 74 106 64 Z', '#F5D0A9', a);
    // Ricardo ears
    fe(g, 'ellipse', { cx: 99, cy: 67, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 141, cy: 67, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    // Ricardo hair
    fl(g, 'M108 62 C106 52 112 42 120 40 C128 42 134 52 132 62 L130 58 C128 50 124 46 120 44 C116 46 112 50 110 58 Z', '#5D4037', a);
    // Ricardo sunglasses fill
    fl(g, 'M108 60 L118 58 L120 68 L110 70 Z', '#212121', false);
    fl(g, 'M122 58 L132 60 L130 70 L120 68 Z', '#212121', false);
    // Ricardo neck skin
    fe(g, 'rect', { x: 113, y: 94, width: 14, height: 12, rx: 3, fill: '#F5D0A9' }, false);
    // Ricardo black t-shirt
    fl(g, 'M90 126 C96 112 108 106 120 106 C132 106 144 112 150 126 L155 220 L85 220 Z', '#212121', a);
    // Ricardo left arm skin
    fl(g, 'M92 130 C78 148 60 170 42 200 C34 216 30 232 32 248 L38 250 C36 234 40 218 48 202 C64 172 82 150 96 134 Z', '#F5D0A9', false);
    // Ricardo right arm skin (to hand)
    fl(g, 'M148 130 C156 145 162 158 168 172 C172 180 175 185 178 188 L174 192 C170 186 166 178 162 168 C156 154 150 140 144 132 Z', '#F5D0A9', false);
    // Ricardo black pants
    fl(g, 'M85 218 L155 218 L168 390 L158 392 L120 320 L95 320 L38 390 L28 388 Z', '#212121', a);

    // SANDRA skin - face
    fl(g, 'M226 72 C226 60 232 50 240 48 C248 50 254 60 254 72 C256 82 252 90 246 96 C242 100 240 102 240 103 C238 102 236 100 234 96 C228 90 224 82 226 72 Z', '#FADCC2', a);
    // Sandra ears
    fe(g, 'ellipse', { cx: 219, cy: 75, rx: 4, ry: 6, fill: '#FADCC2' }, false);
    fe(g, 'ellipse', { cx: 261, cy: 75, rx: 4, ry: 6, fill: '#FADCC2' }, false);
    // Sandra hair
    fl(g, 'M228 68 C226 56 232 46 240 44 C248 46 254 56 252 68 L250 64 C248 56 244 50 240 48 C236 50 232 56 230 64 Z', '#8D6E63', false);
    // Sandra windblown hair right
    fl(g, 'M254 52 C264 46 276 44 288 48 C296 52 300 58 298 66 L294 64 C296 58 292 54 286 50 C276 46 266 48 256 54 Z', '#8D6E63', a);
    // Sandra windblown hair left
    fl(g, 'M226 56 C218 50 212 52 208 58 C206 64 208 70 212 74 L214 70 C212 64 214 58 218 54 C222 52 224 54 226 56 Z', '#8D6E63', false);
    // Sandra sunglasses fill
    fl(g, 'M228 68 L238 66 L240 76 L230 78 Z', '#212121', false);
    fl(g, 'M242 66 L252 68 L250 78 L240 76 Z', '#212121', false);
    // Sandra neck skin
    fe(g, 'rect', { x: 233, y: 102, width: 14, height: 12, rx: 3, fill: '#FADCC2' }, false);
    // Sandra black t-shirt
    fl(g, 'M214 134 C220 120 232 114 240 114 C248 114 260 120 266 134 L270 228 L210 228 Z', '#212121', a);
    // Sandra left arm skin (to hand)
    fl(g, 'M216 138 C210 152 202 166 194 178 C190 184 186 187 182 188 L186 192 C190 188 194 182 198 174 C206 160 214 146 220 138 Z', '#FADCC2', false);
    // Sandra right arm raised skin
    fl(g, 'M264 138 C276 126 288 110 298 92 C304 82 308 74 310 66 L314 70 C310 78 306 86 300 96 C290 114 278 130 268 142 Z', '#FADCC2', false);
    // Sandra jeans (blue)
    fl(g, 'M210 226 L270 226 L296 392 L288 394 L240 340 L218 340 L192 392 L184 390 Z', '#5C6BC0', a);
  },

  // 8: Color fills - sky background
  (g, a) => {
    // Sky gradient - dark top to lighter bottom (full background)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 90, fill: '#1565C0' }, a);
    fe(g, 'rect', { x: 0, y: 90, width: 360, height: 90, fill: '#1976D2' }, false);
    fe(g, 'rect', { x: 0, y: 180, width: 360, height: 90, fill: '#2196F3' }, false);
    fe(g, 'rect', { x: 0, y: 270, width: 360, height: 90, fill: '#42A5F5' }, false);
    fe(g, 'rect', { x: 0, y: 360, width: 360, height: 90, fill: '#64B5F6' }, false);
    // Subtle light bloom at bottom center
    fe(g, 'ellipse', { cx: 180, cy: 450, rx: 140, ry: 40, fill: '#90CAF9', opacity: '0.3' }, false);

    // Ricardo shoes fill - gray/black
    fl(g, 'M28 388 C24 384 22 378 26 372 L46 372 C52 374 54 380 50 386 C48 392 40 396 32 396 C28 396 26 392 28 388 Z', '#616161', a);
    fl(g, 'M158 388 C154 384 152 378 156 372 L176 372 C182 374 184 380 180 386 C178 392 170 396 162 396 C158 396 156 392 158 388 Z', '#616161', false);
    // Nike swoosh blue
    fl(g, 'M30 382 C34 380 40 378 46 380 C42 382 36 384 30 382 Z', '#1E88E5', a);
    fl(g, 'M160 382 C164 380 170 378 176 380 C172 382 166 384 160 382 Z', '#1E88E5', false);
    // Sandra shoes fill - black
    fl(g, 'M184 390 C180 386 180 380 184 376 L200 376 C206 378 208 384 204 390 C200 394 190 396 186 394 Z', '#212121', a);
    fl(g, 'M288 390 C284 386 284 380 288 376 L304 376 C310 378 312 384 308 390 C304 394 294 396 290 394 Z', '#212121', false);

    // Hand skin fills at center
    fe(g, 'ellipse', { cx: 180, cy: 184, rx: 18, ry: 10, fill: '#F5D0A9' }, false);
  },

  // 9: Final details - eye shine, text, highlights, cloth folds
  (g, a) => {
    // "300" text on Ricardo's shirt (white/gray)
    const t300f = ce('text', { x: 106, y: 160, fill: '#9E9E9E', 'font-size': '14', 'font-weight': 'bold', 'font-family': 'Arial' });
    t300f.textContent = '300'; if (a) t300f.classList.add('active-element'); g.appendChild(t300f);
    // Sandra smile fill
    fl(g, 'M234 90 L244 88 C244 92 240 96 238 96 C236 96 234 94 234 90 Z', '#E57373', false);
    // Ricardo mouth fill
    fl(g, 'M114 80 C118 78 122 78 126 80 C124 84 120 86 116 84 Z', '#D4796A', false);
    // Sandra cheeks
    fe(g, 'ellipse', { cx: 232, cy: 88, rx: 5, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 248, cy: 88, rx: 5, ry: 3, fill: '#FFAB91', opacity: '0.4' }, false);
    // Sunglasses shine - reflection rectangles
    fe(g, 'rect', { x: 112, y: 60, width: 3, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, a);
    fe(g, 'rect', { x: 126, y: 60, width: 3, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, false);
    fe(g, 'rect', { x: 232, y: 68, width: 3, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, false);
    fe(g, 'rect', { x: 246, y: 68, width: 3, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, false);
    // Cloth fold lines on shirts (movement/gravity)
    pp(g, ['M100 140 C104 160 102 180 106 200', 'M140 140 C136 160 138 180 134 200'], a, lt);
    pp(g, ['M222 150 C226 168 224 188 228 208', 'M258 150 C254 168 256 188 252 208'], a, lt);
    // Jeans fold lines
    pp(g, ['M218 240 C216 260 214 280 212 300', 'M262 240 C264 260 266 280 268 300'], a, lt);
    // Hair wind strands (extra detail)
    pp(g, ['M258 48 C270 42 284 40 296 46', 'M260 56 C272 50 286 48 294 54'], a, lt);
    // Shoe sole treads
    pp(g, ['M30 394 L32 394 M36 394 L38 394 M42 394 L44 394', 'M160 394 L162 394 M166 394 L168 394 M172 394 L174 394'], a, lt);
    // Hand detail - finger lines at clasp
    pp(g, ['M172 184 L174 182 M176 186 L178 184 M182 184 L184 182 M186 186 L188 184'], a, lt);
    // Sandra raised hand at top
    pp(g, ['M308 64 C310 58 314 54 318 56 C316 60 314 64 310 66', 'M306 66 C308 60 312 56 316 58'], a);
    fe(g, 'ellipse', { cx: 312, cy: 62, rx: 6, ry: 8, fill: '#FADCC2' }, false);
  }
];

// ==============================================================
// SCENE 2: PAITIO - Three figures around table painting Easter eggs.
// Bruno (tio) left, Miguel center, Ricardo (pai) right.
// Orange tablecloth, wall with framed photos behind.
// ==============================================================
const paitioLayers = [
  // 0: Composition guides - three figure zones, table
  (g, a) => {
    // Table edge
    pp(g, ['M0 300 L360 300'], a);
    // Table bottom
    pp(g, ['M0 300 L0 450 M360 300 L360 450'], a, lt);
    // Bruno zone (left)
    pp(g, ['M10 40 L10 300 M130 40 L130 300', 'M10 140 L130 140'], a, lt);
    // Miguel zone (center)
    pp(g, ['M135 60 L135 300 M225 60 L225 300', 'M135 170 L225 170'], a, lt);
    // Ricardo zone (right)
    pp(g, ['M230 30 L230 300 M350 30 L350 300', 'M230 130 L350 130'], a, lt);
    // Wall line
    pp(g, ['M0 0 L360 0'], a, lt);
  },

  // 1: Main figure outlines - three bodies
  (g, a) => {
    // BRUNO (left, stocky build) - Head
    pp(g, ['M56 120 C54 100 62 84 80 78 C98 84 106 100 104 120 C106 134 102 146 96 154 C90 162 86 166 80 168 C74 166 70 162 64 154 C58 146 54 134 56 120'], a);
    // Bruno neck
    pp(g, ['M72 166 L70 178 M88 166 L90 178'], a);
    // Bruno body (wider, stocky)
    pp(g, ['M42 204 C50 186 64 178 80 178 C96 178 110 186 118 204 L122 300 M42 204 L38 300'], a);
    // Bruno left arm (behind chair/Miguel)
    pp(g, ['M44 208 C34 224 28 244 28 264 C28 276 32 284 38 288'], a);
    // Bruno right arm (resting on table)
    pp(g, ['M116 208 C124 228 128 252 130 280 C130 290 132 296 134 300'], a);

    // MIGUEL (center, child) - Head
    pp(g, ['M162 150 C160 132 168 118 180 114 C192 118 200 132 198 150 C200 164 196 176 190 184 C184 190 182 192 180 194 C178 192 176 190 170 184 C164 176 160 164 162 150'], a);
    // Miguel neck
    pp(g, ['M174 192 L172 202 M186 192 L188 202'], a);
    // Miguel body (smaller, child proportions)
    pp(g, ['M152 224 C158 210 170 202 180 202 C190 202 202 210 208 224 L212 300 M152 224 L148 300'], a);
    // Miguel arms on table
    pp(g, ['M154 228 C146 244 142 264 140 284 C138 292 140 298 142 300'], a);
    pp(g, ['M206 228 C214 244 218 264 220 284 C222 292 220 298 218 300'], a);

    // RICARDO (right, lean build) - Head
    pp(g, ['M260 112 C258 92 266 76 280 70 C294 76 302 92 300 112 C302 126 298 138 292 146 C286 154 282 158 280 160 C278 158 274 154 268 146 C262 138 258 126 260 112'], a);
    // Ricardo neck
    pp(g, ['M272 158 L270 170 M288 158 L290 170'], a);
    // Ricardo body (lean, leaning toward Miguel)
    pp(g, ['M248 196 C256 180 268 170 280 170 C292 170 304 180 312 196 L316 300 M248 196 L244 300'], a);
    // Ricardo left arm (extended showing egg)
    pp(g, ['M250 200 C240 218 228 240 220 260 C216 272 218 280 222 284'], a);
    // Ricardo right arm
    pp(g, ['M310 200 C320 220 326 244 328 268 C330 280 328 290 326 300'], a);
  },

  // 2: Face details - all three
  (g, a) => {
    // BRUNO face
    // Eyes
    pp(g, ['M66 116 C68 110 74 108 78 112 C82 116 80 122 76 124 C72 126 66 122 66 116 Z'], a);
    pp(g, ['M86 116 C88 110 94 108 98 112 C102 116 100 122 96 124 C92 126 86 122 86 116 Z'], a);
    fe(g, 'circle', { cx: 74, cy: 118, r: 3, fill: a ? HL : '#2C1810' }, a);
    fe(g, 'circle', { cx: 94, cy: 118, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Eyebrows (thick)
    pp(g, ['M62 108 C68 102 76 101 82 104', 'M88 104 C94 101 102 102 108 108'], a);
    // Nose
    pp(g, ['M78 112 C77 118 76 126 74 130', 'M72 132 C76 136 80 138 84 138 C88 136 90 132 92 130'], a);
    // Mouth (relaxed)
    pp(g, ['M68 146 C74 142 80 141 84 142 C88 141 92 142 96 146'], a);

    // MIGUEL face
    // Eyes (looking down, concentrated)
    pp(g, ['M170 146 C172 140 178 138 182 142 C186 146 184 152 180 154 C176 156 170 152 170 146 Z'], a);
    pp(g, ['M186 146 C188 140 194 138 198 142 C202 146 200 152 196 154 C192 156 186 152 186 146 Z'], a);
    fe(g, 'circle', { cx: 178, cy: 149, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 194, cy: 149, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M168 138 C174 134 180 133 186 136', 'M188 136 C194 133 200 134 206 138'], a);
    // Nose
    pp(g, ['M180 142 C179 148 178 156 176 160', 'M174 162 C178 166 182 168 186 168 C190 166 192 162 194 160'], a);
    // Mouth (slightly open, concentrating)
    pp(g, ['M172 176 C178 172 184 172 188 176', 'M174 178 C180 180 186 180 190 178'], a);

    // RICARDO face
    // Eyes
    pp(g, ['M268 108 C270 102 276 100 280 104 C284 108 282 114 278 116 C274 118 268 114 268 108 Z'], a);
    pp(g, ['M286 108 C288 102 294 100 298 104 C302 108 300 114 296 116 C292 118 286 114 286 108 Z'], a);
    fe(g, 'circle', { cx: 276, cy: 110, r: 3, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 294, cy: 110, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M264 100 C270 96 278 95 284 98', 'M288 98 C294 95 302 96 308 100'], a);
    // Nose
    pp(g, ['M280 104 C279 110 278 118 276 122', 'M274 124 C278 128 282 130 286 130 C290 128 292 124 294 122'], a);
    // Mouth (warm smile)
    pp(g, ['M270 138 C276 134 282 133 286 134 C290 133 294 134 298 138', 'M272 140 C278 144 284 146 286 146 C288 146 292 144 296 140'], a);
    // Ears
    pp(g, ['M258 108 C254 106 252 110 252 116 C252 122 254 124 258 122', 'M302 108 C306 106 308 110 308 116 C308 122 306 124 302 122'], a);
  },

  // 3: Hair, beard/stubble details
  (g, a) => {
    // BRUNO hair - dark, short
    pp(g, ['M58 116 C56 98 64 82 78 76 C92 72 104 78 108 90 C112 100 110 112 108 118'], a);
    pp(g, ['M62 110 C64 96 72 84 82 80 C92 76 100 82 104 92 C108 100 108 108 106 114'], a);
    // Bruno stubble/short beard
    const bs = [[60,148],[64,152],[68,156],[72,160],[76,164],[80,166],[84,166],[88,164],[92,160],[96,156],[100,152],[104,148],[68,160],[74,162],[80,166],[86,164],[92,160],[96,156],[66,144],[100,144]];
    bs.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a); });

    // MIGUEL hair - dark brown short
    pp(g, ['M164 146 C162 130 170 116 182 112 C194 108 202 114 206 124 C210 134 208 144 206 150'], a);
    pp(g, ['M168 140 C170 128 176 118 186 116 C196 114 202 120 204 128 C206 136 206 142 204 146'], a);
    // Hair texture
    pp(g, ['M176 114 C182 110 188 110 194 114', 'M170 122 C178 116 188 114 196 118', 'M168 132 C176 124 186 122 194 126'], a, lt);

    // RICARDO hair - short brown with light stubble
    pp(g, ['M262 108 C260 90 268 74 280 68 C292 64 302 70 306 82 C310 92 308 106 304 112'], a);
    pp(g, ['M266 104 C268 90 274 78 284 74 C294 72 300 78 302 86 C306 94 306 104 304 108'], a);
    // Light stubble
    const rs = [[264,140],[268,144],[272,148],[276,150],[280,152],[284,152],[288,150],[292,148],[296,144],[300,140],[272,146],[280,150],[288,148]];
    rs.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.4, fill: a ? HL : '#8D6E63' }, a); });
  },

  // 4: Clothing details
  (g, a) => {
    // BRUNO t-shirt collar
    pp(g, ['M66 180 C72 176 78 174 80 174 C82 174 88 176 94 180'], a);
    // SAGRES 0.0 logo area on chest
    pp(g, ['M58 210 L102 210 L102 240 L58 240 Z'], a, lt);
    // Wings emblem sketch
    pp(g, ['M70 218 C66 214 62 216 62 220 C62 224 66 228 70 226', 'M90 218 C94 214 98 216 98 220 C98 224 94 228 90 226'], a, lt);
    // "SAGRES" text outline
    pp(g, ['M66 234 L94 234'], a, lt);

    // MIGUEL t-shirt collar
    pp(g, ['M170 204 C174 200 178 198 180 198 C182 198 186 200 190 204'], a);
    // Small colorful pattern dots on white shirt
    fe(g, 'circle', { cx: 168, cy: 230, r: 1.2, fill: a ? HL : '#FF7043' }, a);
    fe(g, 'circle', { cx: 176, cy: 222, r: 1.2, fill: a ? HL : '#42A5F5' }, a);
    fe(g, 'circle', { cx: 184, cy: 234, r: 1.2, fill: a ? HL : '#66BB6A' }, a);
    fe(g, 'circle', { cx: 192, cy: 224, r: 1.2, fill: a ? HL : '#FFA726' }, a);
    fe(g, 'circle', { cx: 172, cy: 242, r: 1.2, fill: a ? HL : '#AB47BC' }, a);
    fe(g, 'circle', { cx: 188, cy: 244, r: 1.2, fill: a ? HL : '#26A69A' }, a);
    // "W" letter on shirt
    const wt = ce('text', { x: 176, y: 254, fill: a ? HL : LP, 'font-size': '7', 'font-weight': 'bold', 'font-family': 'Arial' });
    wt.textContent = 'W'; if (a) wt.classList.add('active-element'); g.appendChild(wt);

    // RICARDO t-shirt collar
    pp(g, ['M266 172 C272 168 278 166 280 166 C282 166 288 168 294 172'], a);
    // Sports shirt seam lines
    pp(g, ['M280 172 L280 300'], a, lt);
    pp(g, ['M260 200 C268 204 280 206 292 204 C300 202 306 200 310 198'], a, lt);
  },

  // 5: Hands, eggs, and action
  (g, a) => {
    // MIGUEL hands on table holding orange egg
    pp(g, ['M142 290 C138 284 134 286 132 292 C130 298 134 302 140 300', 'M218 290 C222 284 226 286 228 292 C230 298 226 302 220 300'], a);
    // Fingers
    pp(g, ['M136 288 C132 282 128 278 130 274 C132 270 136 272 138 276', 'M214 288 C218 282 222 278 220 274 C218 270 214 272 212 276'], a);
    // Orange egg in Miguel's hands
    pp(g, ['M168 278 C168 268 174 260 180 260 C186 260 192 268 192 278 C192 288 186 294 180 294 C174 294 168 288 168 278 Z'], a);
    // Egg pattern/color line
    pp(g, ['M170 275 C176 270 184 270 190 275', 'M172 282 C178 278 184 278 188 282'], a, lt);

    // RICARDO hand extended showing blue egg
    pp(g, ['M220 260 C216 254 212 256 210 262 C208 268 212 272 218 270', 'M228 258 C232 252 236 254 238 260 C240 266 236 270 230 268'], a);
    // Blue egg in Ricardo's palm
    pp(g, ['M220 248 C220 238 226 232 232 232 C238 232 244 238 244 248 C244 258 238 264 232 264 C226 264 220 258 220 248 Z'], a);

    // BRUNO arm behind Miguel (protective/casual)
    pp(g, ['M116 208 C124 220 130 236 134 252 C136 264 138 276 140 286'], a);
    // Bruno hand near table
    pp(g, ['M138 286 C134 280 130 282 128 288 C126 294 130 298 136 296'], a);
  },

  // 6: Background - wall with framed photos, chair
  (g, a) => {
    // Wall
    pp(g, ['M0 0 L360 0 L360 300 L0 300 Z'], a, lt);
    // Framed photos on wall
    pp(g, ['M40 20 L80 20 L80 56 L40 56 Z', 'M42 22 L78 22 L78 54 L42 54 Z'], a);
    pp(g, ['M150 10 L200 10 L200 50 L150 50 Z', 'M152 12 L198 12 L198 48 L152 48 Z'], a);
    pp(g, ['M280 15 L330 15 L330 55 L280 55 Z', 'M282 17 L328 17 L328 53 L282 53 Z'], a);
    // Photo content hints (simple shapes inside frames)
    pp(g, ['M52 32 C56 28 64 28 68 32 C72 36 68 42 64 44 C60 44 52 40 52 36', 'M162 26 C166 22 174 22 178 26 C182 30 178 36 174 38 C170 38 162 34 162 30'], a, lt);

    // Chair visible behind Bruno
    pp(g, ['M24 160 L24 300', 'M24 160 L44 160 L44 178'], a);
    pp(g, ['M24 170 L44 170', 'M24 180 L44 180'], a, lt);

    // Table front edge visible
    pp(g, ['M0 300 L360 300'], a);
    pp(g, ['M0 300 L0 450 M360 300 L360 450'], a, lt);
    // Table legs hint
    pp(g, ['M30 300 L30 440', 'M330 300 L330 440'], a, lt);
  },

  // 7: Color fills - figures
  (g, a) => {
    // BRUNO skin
    fl(g, 'M58 120 C56 102 64 86 80 80 C96 86 104 102 102 120 C104 134 100 146 94 154 C88 162 84 166 80 168 C76 166 72 162 66 154 C60 146 56 134 58 120 Z', '#F5D0A9', a);
    fe(g, 'ellipse', { cx: 50, cy: 116, rx: 5, ry: 8, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 110, cy: 116, rx: 5, ry: 8, fill: '#F5D0A9' }, false);
    // Bruno hair
    fl(g, 'M60 116 C58 100 66 84 80 78 C94 74 106 80 110 92 C114 102 112 114 110 118 L106 114 C108 104 106 94 102 86 C98 80 90 76 82 78 C72 80 64 90 62 104 Z', '#4E342E', false);
    // Bruno neck skin
    fe(g, 'rect', { x: 71, y: 166, width: 18, height: 12, rx: 3, fill: '#F5D0A9' }, false);
    // Bruno gray t-shirt
    fl(g, 'M42 204 C50 186 64 178 80 178 C96 178 110 186 118 204 L122 300 L38 300 Z', '#BDBDBD', a);

    // MIGUEL skin
    fl(g, 'M164 150 C162 134 170 120 180 116 C190 120 198 134 196 150 C198 164 194 176 188 184 C182 190 180 192 180 194 C178 192 176 190 172 184 C166 176 162 164 164 150 Z', '#F5D0A9', a);
    fe(g, 'ellipse', { cx: 156, cy: 148, rx: 5, ry: 7, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 204, cy: 148, rx: 5, ry: 7, fill: '#F5D0A9' }, false);
    // Miguel hair
    fl(g, 'M166 146 C164 130 172 116 184 112 C196 108 204 114 208 124 C212 134 210 144 208 150 L204 146 C206 138 204 130 200 122 C196 116 190 112 184 114 C176 116 170 124 168 136 Z', '#4E342E', false);
    // Miguel neck skin
    fe(g, 'rect', { x: 173, y: 192, width: 14, height: 10, rx: 3, fill: '#F5D0A9' }, false);
    // Miguel white t-shirt
    fl(g, 'M152 224 C158 210 170 202 180 202 C190 202 202 210 208 224 L212 300 L148 300 Z', '#FAFAFA', a);

    // RICARDO skin
    fl(g, 'M262 112 C260 94 268 78 280 72 C292 78 300 94 298 112 C300 126 296 138 290 146 C284 154 280 158 280 160 C278 158 276 154 270 146 C264 138 260 126 262 112 Z', '#F5D0A9', a);
    fe(g, 'ellipse', { cx: 254, cy: 108, rx: 5, ry: 8, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 306, cy: 108, rx: 5, ry: 8, fill: '#F5D0A9' }, false);
    // Ricardo hair
    fl(g, 'M264 108 C262 92 270 76 282 70 C294 66 304 72 308 84 C312 94 310 108 306 112 L302 108 C304 98 304 90 300 82 C296 74 290 70 282 72 C274 74 268 84 266 96 Z', '#5D4037', false);
    // Ricardo neck skin
    fe(g, 'rect', { x: 271, y: 158, width: 18, height: 12, rx: 3, fill: '#F5D0A9' }, false);
    // Ricardo dark sports t-shirt
    fl(g, 'M248 196 C256 180 268 170 280 170 C292 170 304 180 312 196 L316 300 L244 300 Z', '#263238', a);

    // Hand skin fills
    fe(g, 'ellipse', { cx: 138, cy: 292, rx: 8, ry: 8, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 220, cy: 292, rx: 8, ry: 8, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 224, cy: 262, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
  },

  // 8: Color fills - scene (table, wall, eggs, frames)
  (g, a) => {
    // Wall (cream)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: '#FFF8E1' }, a);
    // Orange tablecloth
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#FF8F00' }, a);
    // Table cloth folds
    pp(g, ['M60 310 C80 306 100 308 120 310', 'M200 308 C220 304 240 306 260 308'], false, lt);

    // Framed photos fill
    fe(g, 'rect', { x: 40, y: 20, width: 40, height: 36, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 42, y: 22, width: 36, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    fe(g, 'rect', { x: 150, y: 10, width: 50, height: 40, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 152, y: 12, width: 46, height: 36, rx: 1, fill: '#EFEBE9' }, false);
    fe(g, 'rect', { x: 280, y: 15, width: 50, height: 40, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 282, y: 17, width: 46, height: 36, rx: 1, fill: '#EFEBE9' }, false);

    // Orange egg
    fl(g, 'M170 278 C170 268 176 262 180 262 C184 262 190 268 190 278 C190 288 184 292 180 292 C176 292 170 288 170 278 Z', '#FF7043', a);
    // Egg stripe
    fl(g, 'M172 274 C176 270 184 270 188 274 L188 278 C184 274 176 274 172 278 Z', '#FFB74D', false);

    // Blue egg
    fl(g, 'M222 248 C222 238 228 234 232 234 C236 234 242 238 242 248 C242 258 236 262 232 262 C228 262 222 258 222 248 Z', '#64B5F6', a);
    // Egg dots
    fe(g, 'circle', { cx: 229, cy: 244, r: 2, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 235, cy: 250, r: 2, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 231, cy: 256, r: 2, fill: '#1565C0' }, false);

    // Chair fill
    fe(g, 'rect', { x: 22, y: 160, width: 24, height: 140, rx: 2, fill: '#A1887F', opacity: '0.3' }, false);
  },

  // 9: Final details - text, eye shine, logo details
  (g, a) => {
    // Eye shines - Bruno
    fe(g, 'circle', { cx: 72, cy: 116, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 92, cy: 116, r: 1.5, fill: 'white' }, a);
    // Eye shines - Miguel
    fe(g, 'circle', { cx: 176, cy: 147, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 192, cy: 147, r: 1.5, fill: 'white' }, a);
    // Eye shines - Ricardo
    fe(g, 'circle', { cx: 274, cy: 108, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 292, cy: 108, r: 1.5, fill: 'white' }, a);

    // Miguel cheeks (child blush)
    fe(g, 'ellipse', { cx: 170, cy: 172, rx: 7, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 192, cy: 172, rx: 7, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);

    // SAGRES 0.0 text on Bruno's shirt
    const sg = ce('text', { x: 60, y: 228, fill: '#1A237E', 'font-size': '6', 'font-weight': 'bold', 'font-family': 'Arial' });
    sg.textContent = 'SAGRES'; if (a) sg.classList.add('active-element'); g.appendChild(sg);
    const sg2 = ce('text', { x: 72, y: 236, fill: '#1A237E', 'font-size': '5', 'font-family': 'Arial' });
    sg2.textContent = '0.0'; g.appendChild(sg2);
    // Wings emblem (filled)
    fl(g, 'M70 218 C66 214 62 216 62 220 C62 224 66 228 70 226 L80 222 L90 226 C94 228 98 224 98 220 C98 216 94 214 90 218 L80 222 Z', '#1A237E', false);

    // "W" on Miguel's shirt
    const wf = ce('text', { x: 176, y: 254, fill: '#9E9E9E', 'font-size': '7', 'font-weight': 'bold', 'font-family': 'Arial' });
    wf.textContent = 'W'; g.appendChild(wf);
    // Pattern dots on Miguel's shirt (colored)
    fe(g, 'circle', { cx: 168, cy: 230, r: 1.2, fill: '#FF7043' }, false);
    fe(g, 'circle', { cx: 176, cy: 222, r: 1.2, fill: '#42A5F5' }, false);
    fe(g, 'circle', { cx: 184, cy: 234, r: 1.2, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 192, cy: 224, r: 1.2, fill: '#FFA726' }, false);
    fe(g, 'circle', { cx: 172, cy: 242, r: 1.2, fill: '#AB47BC' }, false);
    fe(g, 'circle', { cx: 188, cy: 244, r: 1.2, fill: '#26A69A' }, false);

    // Ricardo mouth fill (warm smile)
    fl(g, 'M272 140 C278 144 284 146 286 146 C288 146 292 144 296 140 C292 146 288 148 286 148 C284 148 278 146 272 140 Z', '#E57373', false);
    // Bruno beard shadow
    fl(g, 'M62 148 C68 156 76 164 80 166 C84 164 92 156 98 148 C96 154 90 162 84 164 C78 164 68 156 62 148 Z', '#5D4037', false);

    // Tablecloth fold highlights
    pp(g, ['M40 306 C60 302 80 304 100 306', 'M160 304 C180 300 200 302 220 304', 'M280 306 C300 302 320 304 340 306'], a, lt);

    // Warm ambient light
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, rx: 0, fill: '#FFF8E1', opacity: '0.05' }, false);
  }
];

// ==============================================================
// SCENE 3: PADRINHOS - Godparents with baby Miguel against stone wall.
// Godmother left with baby, Godfather right pointing at camera.
// ==============================================================
const padrinhosLayers = [
  // 0: Composition guides - two adult figures, baby, wall
  (g, a) => {
    // Godmother zone (left)
    pp(g, ['M30 30 L30 440 M180 30 L180 440'], a, lt);
    // Godfather zone (right)
    pp(g, ['M190 30 L190 440 M340 30 L340 440'], a, lt);
    // Head level
    pp(g, ['M30 100 L340 100'], a, lt);
    // Baby level
    pp(g, ['M80 200 L180 200 M80 260 L180 260'], a, lt);
    // Feet level
    pp(g, ['M30 430 L340 430'], a, lt);
    // Window guide (center-top)
    pp(g, ['M140 30 L220 30 L220 90 L140 90 Z'], a, lt);
    // Center vertical
    pp(g, ['M180 0 L180 450'], a, lt);
  },

  // 1: Main figure outlines - godmother, godfather, full body
  (g, a) => {
    // GODMOTHER (left) - Head
    pp(g, ['M90 82 C88 64 96 50 110 44 C124 50 132 64 130 82 C132 96 128 108 122 116 C116 122 114 126 110 128 C106 126 104 122 98 116 C92 108 88 96 90 82'], a);
    // Godmother neck
    pp(g, ['M104 126 L102 138 M116 126 L118 138'], a);
    // Godmother body (sleeveless dress, full length)
    pp(g, ['M80 158 C86 144 98 138 110 138 C122 138 134 144 140 158 L146 350 C146 370 144 400 142 430 M80 158 L74 350 C74 370 76 400 78 430'], a);
    // Godmother left arm holding baby
    pp(g, ['M82 162 C74 178 68 198 66 218 C64 234 68 248 74 256'], a);
    // Godmother right arm at side
    pp(g, ['M138 162 C146 180 150 200 152 224 C154 248 152 280 148 310'], a);

    // BABY MIGUEL at godmother's hip (~130, 220)
    pp(g, ['M118 206 C116 196 120 188 130 186 C140 188 144 196 142 206 C144 214 140 220 136 224 C132 226 130 228 130 228 C128 228 126 226 124 224 C120 220 118 214 118 206'], a);
    // Baby body
    pp(g, ['M120 228 C124 232 128 234 130 234 C132 234 136 232 140 228 L142 260 M120 228 L118 260'], a);
    // Baby legs
    pp(g, ['M120 258 L116 278', 'M140 258 L144 278'], a);

    // GODFATHER (right) - Head
    pp(g, ['M230 74 C228 56 236 40 250 34 C264 40 272 56 270 74 C272 88 268 100 262 108 C256 114 254 118 250 120 C246 118 244 114 238 108 C232 100 228 88 230 74'], a);
    // Godfather neck
    pp(g, ['M244 118 L242 130 M256 118 L258 130'], a);
    // Godfather body (shirt, belt, pants, full length)
    pp(g, ['M222 150 C228 136 240 130 250 130 C260 130 272 136 278 150 L282 280 L284 350 C284 380 282 410 280 430 M222 150 L218 280 L216 350 C216 380 218 410 220 430'], a);
    // Godfather right arm pointing at camera
    pp(g, ['M276 154 C288 168 296 180 302 192 C306 200 310 206 314 210'], a);
    // Godfather left arm at side
    pp(g, ['M224 154 C216 172 210 194 208 220 C206 244 208 268 210 290'], a);
  },

  // 2: Face details - all three
  (g, a) => {
    // GODMOTHER face
    // Eyes (warm, looking at baby)
    pp(g, ['M96 78 C98 72 104 70 108 74 C112 78 110 84 106 86 C102 88 96 84 96 78 Z'], a);
    pp(g, ['M114 78 C116 72 122 70 126 74 C130 78 128 84 124 86 C120 88 114 84 114 78 Z'], a);
    fe(g, 'circle', { cx: 104, cy: 80, r: 3, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 122, cy: 80, r: 3, fill: a ? HL : '#5E4023' }, a);
    // Eyebrows
    pp(g, ['M94 70 C100 66 108 65 112 68', 'M116 68 C120 65 128 66 134 70'], a);
    // Nose
    pp(g, ['M110 74 C109 80 108 88 106 92', 'M104 94 C108 98 112 100 116 100 C120 98 122 94 124 92'], a);
    // Wide warm smile
    pp(g, ['M96 106 C102 100 108 98 112 100 C116 98 122 100 128 106', 'M98 108 C106 116 112 120 114 120 C116 120 122 116 128 108'], a);
    // Teeth
    pp(g, ['M100 108 L126 106', 'M106 108 L106 112 M112 107 L112 112 M118 107 L118 111'], a, lt);
    // Ears
    pp(g, ['M88 78 C84 76 82 80 82 86 C82 92 84 94 88 92'], a);

    // BABY MIGUEL face
    // Eyes (baby, simple, large)
    pp(g, ['M124 202 C126 198 130 196 132 200 C134 204 132 208 130 208 C128 208 124 206 124 202 Z'], a);
    pp(g, ['M134 202 C136 198 140 196 142 200 C144 204 142 208 140 208 C138 208 134 206 134 202 Z'], a);
    fe(g, 'circle', { cx: 129, cy: 203, r: 2, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 139, cy: 203, r: 2, fill: a ? HL : '#3E2518' }, a);
    // Baby nose
    pp(g, ['M133 204 C133 208 132 210 131 212'], a);
    // Baby smile
    pp(g, ['M126 216 C130 214 134 214 138 216', 'M128 218 C132 220 136 220 140 218'], a);

    // GODFATHER face
    // Glasses (rectangular frames)
    pp(g, ['M236 68 L248 66 L250 78 L238 80 Z', 'M252 66 L264 68 L262 80 L250 78 Z'], a);
    // Glasses bridge
    pp(g, ['M250 72 L250 72'], a);
    // Glasses arms
    pp(g, ['M236 70 C232 70 230 72 228 74', 'M264 70 C268 70 270 72 272 74'], a);
    // Eyes behind glasses
    fe(g, 'circle', { cx: 244, cy: 73, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 258, cy: 73, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M234 62 C240 58 248 57 252 60', 'M254 60 C258 57 266 58 272 62'], a);
    // Nose
    pp(g, ['M250 72 C249 78 248 84 246 88', 'M244 90 C248 94 252 96 256 96 C260 94 262 90 264 88'], a);
    // Mouth with goatee/beard
    pp(g, ['M240 102 C246 98 252 97 256 98 C260 97 264 98 268 102', 'M242 104 C248 108 254 110 256 110 C258 110 262 108 268 104'], a);
    // Ears
    pp(g, ['M228 72 C224 70 222 74 222 80 C222 86 224 88 228 86', 'M272 72 C276 70 278 74 278 80 C278 86 276 88 272 86'], a);
  },

  // 3: Hair, accessories
  (g, a) => {
    // GODMOTHER hair - long, straight, dark brown to shoulders
    pp(g, ['M92 78 C90 62 98 46 112 40 C126 46 134 62 132 78'], a);
    pp(g, ['M94 72 C96 60 104 50 112 46 C120 50 128 60 130 72'], a);
    // Long hair falling to shoulders
    pp(g, ['M88 80 C84 96 80 118 78 136 C76 150 78 160 80 168', 'M132 80 C136 96 140 118 142 136 C144 150 142 160 140 168'], a);
    // Hair strands
    pp(g, ['M90 90 C86 108 82 128 80 148', 'M130 90 C134 108 138 128 140 148', 'M94 86 C92 102 88 120 86 138', 'M126 86 C128 102 132 120 134 138'], a, lt);

    // Godmother bracelet (black)
    pp(g, ['M64 246 C60 244 58 248 60 252 C62 256 66 258 68 254 C70 250 68 246 64 246 Z'], a);

    // BABY hair - very short, fine
    pp(g, ['M120 204 C118 196 122 190 130 188 C138 190 142 196 140 204'], a, lt);

    // GODFATHER hair - short dark
    pp(g, ['M232 70 C230 56 238 40 252 34 C266 40 274 56 272 70'], a);
    pp(g, ['M236 66 C238 54 244 44 252 42 C260 44 266 54 268 66'], a);
    // Hair texture
    pp(g, ['M244 38 C248 34 256 34 260 38', 'M240 46 C248 40 258 40 264 46', 'M236 54 C244 48 260 48 268 54'], a, lt);

    // Goatee/beard
    const gd = [[242,104],[246,108],[250,112],[254,114],[258,112],[262,108],[266,104],[248,110],[256,110],[252,116],[250,106],[258,106]];
    gd.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a); });

    // Watch on godfather's wrist
    pp(g, ['M206 250 L214 250 L214 260 L206 260 Z'], a);
    fe(g, 'rect', { x: 204, y: 248, width: 4, height: 6, rx: 1, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, false);
  },

  // 4: Clothing details
  (g, a) => {
    // GODMOTHER sleeveless dress - neckline
    pp(g, ['M96 140 C100 136 106 134 110 134 C114 134 120 136 124 140'], a);
    // Dress V-neckline
    pp(g, ['M96 140 C100 148 106 154 110 158', 'M124 140 C120 148 114 154 110 158'], a);
    // Dress falls straight to feet
    pp(g, ['M74 350 C76 380 78 410 78 430', 'M146 350 C144 380 142 410 142 430'], a);
    // Dress drape folds
    pp(g, ['M86 200 C84 240 82 280 80 320', 'M134 200 C136 240 138 280 140 320', 'M100 180 C98 220 96 260 94 300', 'M120 180 C122 220 124 260 126 300'], a, lt);

    // GODFATHER shirt collar
    pp(g, ['M238 132 C240 128 246 126 250 126 C254 126 260 128 262 132'], a);
    // Collar points
    pp(g, ['M238 132 C234 136 232 142 236 146', 'M262 132 C266 136 268 142 264 146'], a);
    // Button line
    pp(g, ['M250 134 L250 280'], a, lt);
    // Buttons
    fe(g, 'circle', { cx: 250, cy: 150, r: 1.5, fill: a ? HL : LP }, a);
    fe(g, 'circle', { cx: 250, cy: 170, r: 1.5, fill: a ? HL : LP }, false);
    fe(g, 'circle', { cx: 250, cy: 190, r: 1.5, fill: a ? HL : LP }, false);
    fe(g, 'circle', { cx: 250, cy: 210, r: 1.5, fill: a ? HL : LP }, false);
    // Belt
    pp(g, ['M220 280 L280 280', 'M220 288 L280 288'], a);
    // Belt buckle
    pp(g, ['M244 280 L256 280 L256 288 L244 288 Z'], a);
    // Pants seam
    pp(g, ['M250 288 L250 430'], a, lt);
    // Pants legs
    pp(g, ['M220 288 L220 430', 'M280 288 L280 430'], a);
    // Micro-dot pattern hint on shirt
    for (let py = 140; py < 275; py += 12) {
      for (let px = 232; px < 270; px += 8) {
        fe(g, 'circle', { cx: px, cy: py, r: 0.4, fill: a ? HL : '#BDBDBD' }, false);
      }
    }
  },

  // 5: Hands, pointing gesture, baby holding
  (g, a) => {
    // GODMOTHER holding baby - left arm cradling
    pp(g, ['M82 162 C74 178 68 198 66 218 L74 256 C80 248 90 240 100 236'], a);
    // Right arm supporting baby from below
    pp(g, ['M116 260 C110 264 104 266 98 264 C92 262 88 258 86 254'], a);
    // Godmother hand under baby
    pp(g, ['M86 254 C82 250 80 246 82 242 C84 238 88 238 90 242', 'M92 250 C88 246 86 240 88 236 C90 232 94 232 96 236'], a);

    // BABY feet/shoes
    pp(g, ['M114 274 C112 270 114 266 118 266 L124 266 C128 268 128 274 124 276 Z', 'M136 274 C134 270 136 266 140 266 L146 266 C150 268 150 274 146 276 Z'], a);

    // GODFATHER right hand pointing at camera
    pp(g, ['M314 210 C318 204 322 200 326 198 C330 196 334 198 336 202 C338 206 336 210 332 212'], a);
    // Index finger extended (pointing)
    pp(g, ['M336 202 C340 196 344 190 348 186 C352 184 354 186 352 190 C350 194 346 200 342 206'], a);
    // Other fingers curled
    pp(g, ['M332 212 C328 216 324 218 322 214 C320 210 322 206 326 204', 'M326 214 C322 218 318 220 316 216 C314 212 316 208 320 206', 'M320 216 C316 220 312 220 312 216 C312 212 314 208 318 208'], a);
    // Thumb
    pp(g, ['M316 202 C312 198 310 202 312 208 C314 212 318 214 320 210'], a);

    // Godfather left hand at side
    pp(g, ['M208 286 C204 280 200 282 198 288 C196 294 200 298 206 296'], a);
    // Fingers
    pp(g, ['M202 284 C198 278 194 274 196 270 C198 266 202 266 204 270', 'M200 288 C196 282 192 276 194 272 C196 268 200 268 202 272'], a);
  },

  // 6: Background - stone wall with window
  (g, a) => {
    // Stone wall blocks (golden/beige granite irregular pattern)
    // Row 1
    pp(g, ['M0 0 L80 0 L80 40 L0 40 Z', 'M80 0 L160 0 L160 36 L80 36 Z', 'M160 0 L260 0 L260 42 L160 42 Z', 'M260 0 L360 0 L360 38 L260 38 Z'], a, lt);
    // Row 2
    pp(g, ['M0 40 L100 40 L100 82 L0 82 Z', 'M100 36 L200 36 L200 80 L100 80 Z', 'M200 42 L280 42 L280 78 L200 78 Z', 'M280 38 L360 38 L360 84 L280 84 Z'], a, lt);
    // Row 3
    pp(g, ['M0 82 L70 82 L70 124 L0 124 Z', 'M70 80 L180 80 L180 120 L70 120 Z', 'M180 78 L290 78 L290 126 L180 126 Z', 'M290 84 L360 84 L360 122 L290 122 Z'], a, lt);
    // Row 4
    pp(g, ['M0 124 L90 124 L90 168 L0 168 Z', 'M90 120 L190 120 L190 164 L90 164 Z', 'M190 126 L300 126 L300 170 L190 170 Z', 'M300 122 L360 122 L360 166 L300 166 Z'], a, lt);
    // More rows...
    pp(g, ['M0 168 L110 168 L110 210 L0 210 Z', 'M110 164 L220 164 L220 212 L110 212 Z', 'M220 170 L360 170 L360 208 L220 208 Z'], a, lt);
    pp(g, ['M0 210 L80 210 L80 250 L0 250 Z', 'M80 212 L170 212 L170 254 L80 254 Z', 'M170 208 L280 208 L280 248 L170 248 Z', 'M280 208 L360 208 L360 252 L280 252 Z'], a, lt);

    // Window (white frame, center-top)
    pp(g, ['M140 30 L220 30 L220 90 L140 90 Z'], a);
    // Window inner frame
    pp(g, ['M144 34 L216 34 L216 86 L144 86 Z'], a);
    // Window cross
    pp(g, ['M180 34 L180 86', 'M144 60 L216 60'], a);
    // Window ledge
    pp(g, ['M136 90 L224 90 L224 96 L136 96 Z'], a);

    // Shadow on wall from sunlight (right side darker)
    pp(g, ['M260 100 C280 120 300 160 320 220 C340 280 350 340 355 400'], a, lt);

    // Ground/floor line
    pp(g, ['M0 440 L360 440'], a, lt);
  },

  // 7: Color fills - figures
  (g, a) => {
    // GODMOTHER skin - face
    fl(g, 'M92 82 C90 66 98 52 110 46 C122 52 130 66 128 82 C130 96 126 108 120 116 C114 122 112 126 110 128 C108 126 106 122 100 116 C94 108 90 96 92 82 Z', '#F5D0A9', a);
    fe(g, 'ellipse', { cx: 86, cy: 80, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    // Godmother hair
    fl(g, 'M94 78 C92 64 100 48 112 42 C124 48 132 64 130 78 L128 74 C128 64 124 56 118 50 C112 46 106 48 100 52 C96 56 94 64 92 74 Z', '#4E342E', a);
    // Hair falling on sides
    fl(g, 'M88 80 C84 96 80 118 78 136 C76 150 78 160 80 168 L86 166 C84 158 82 148 84 136 C86 118 90 98 92 82 Z', '#4E342E', false);
    fl(g, 'M132 80 C136 96 140 118 142 136 C144 150 142 160 140 168 L134 166 C136 158 138 148 136 136 C134 118 130 98 128 82 Z', '#4E342E', false);
    // Godmother neck
    fe(g, 'rect', { x: 103, y: 126, width: 14, height: 12, rx: 3, fill: '#F5D0A9' }, false);
    // Godmother navy dress
    fl(g, 'M80 158 C86 144 98 138 110 138 C122 138 134 144 140 158 L146 350 C146 380 144 410 142 430 L78 430 C76 410 74 380 74 350 Z', '#1A237E', a);
    // Arms skin
    fl(g, 'M82 162 C74 178 68 198 66 218 L72 220 C74 200 80 180 88 164 Z', '#F5D0A9', false);
    fl(g, 'M138 162 C146 180 150 200 152 224 L146 226 C144 202 140 182 132 164 Z', '#F5D0A9', false);

    // BABY skin
    fl(g, 'M120 206 C118 198 122 190 130 188 C138 190 142 198 140 206 C142 214 138 220 134 224 C130 226 128 228 130 228 C128 228 126 226 126 224 C122 220 120 214 120 206 Z', '#FADCC2', a);
    // Baby white clothes
    fl(g, 'M120 228 C124 232 128 234 130 234 C132 234 136 232 140 228 L142 260 L118 260 Z', '#FAFAFA', false);
    // Baby legs in white
    fl(g, 'M118 258 L116 278 L122 280 L124 260 Z', '#FAFAFA', false);
    fl(g, 'M138 258 L144 278 L150 276 L142 260 Z', '#FAFAFA', false);
    // Baby white shoes
    fl(g, 'M114 274 C112 270 114 266 118 266 L124 266 C128 268 128 274 124 276 Z', '#FAFAFA', false);
    fl(g, 'M136 274 C134 270 136 266 140 266 L146 266 C150 268 150 274 146 276 Z', '#FAFAFA', false);

    // GODFATHER skin - face
    fl(g, 'M232 74 C230 58 238 42 250 36 C262 42 270 58 268 74 C270 88 266 100 260 108 C254 114 252 118 250 120 C248 118 246 114 240 108 C234 100 230 88 232 74 Z', '#F5D0A9', a);
    fe(g, 'ellipse', { cx: 226, cy: 76, rx: 4, ry: 7, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 274, cy: 76, rx: 4, ry: 7, fill: '#F5D0A9' }, false);
    // Godfather hair
    fl(g, 'M234 70 C232 58 240 42 252 36 C264 42 272 58 270 70 L266 66 C266 58 262 50 256 44 C250 42 244 44 240 50 C238 56 236 64 236 70 Z', '#3E2C20', false);
    // Godfather neck
    fe(g, 'rect', { x: 243, y: 118, width: 14, height: 12, rx: 3, fill: '#F5D0A9' }, false);
    // Godfather white shirt
    fl(g, 'M222 150 C228 136 240 130 250 130 C260 130 272 136 278 150 L282 280 L218 280 Z', '#F5F5F5', a);
    // Godfather brown belt
    fe(g, 'rect', { x: 218, y: 278, width: 64, height: 10, rx: 1, fill: '#795548' }, a);
    // Belt buckle
    fe(g, 'rect', { x: 244, y: 279, width: 12, height: 8, rx: 1, fill: '#A1887F' }, false);
    // Godfather dark pants
    fl(g, 'M218 288 L282 288 L284 350 C284 380 282 410 280 430 L220 430 C218 410 216 380 216 350 Z', '#37474F', a);
    // Pointing arm skin
    fl(g, 'M276 154 C288 168 296 180 302 192 C306 200 310 206 314 210 L310 214 C306 210 302 204 298 196 C292 184 284 172 272 158 Z', '#F5D0A9', false);
    // Left arm skin
    fl(g, 'M224 154 C216 172 210 194 208 220 L214 222 C216 198 222 176 230 158 Z', '#F5D0A9', false);

    // Glasses fill
    fl(g, 'M236 68 L248 66 L250 78 L238 80 Z', '#424242', false);
    fl(g, 'M252 66 L264 68 L262 80 L250 78 Z', '#424242', false);

    // Bracelet on godmother
    fe(g, 'ellipse', { cx: 66, cy: 250, rx: 5, ry: 4, fill: '#212121' }, false);
  },

  // 8: Color fills - stone wall, window, scene
  (g, a) => {
    // Stone wall base color
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#D7C8A0' }, a);
    // Individual stones with varying colors
    // Row 1
    fe(g, 'rect', { x: 1, y: 1, width: 78, height: 38, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 81, y: 1, width: 78, height: 34, rx: 2, fill: '#D7C8A0' }, false);
    fe(g, 'rect', { x: 161, y: 1, width: 98, height: 40, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 261, y: 1, width: 98, height: 36, rx: 2, fill: '#C8A96E' }, false);
    // Row 2
    fe(g, 'rect', { x: 1, y: 41, width: 98, height: 40, rx: 2, fill: '#D7C8A0' }, false);
    fe(g, 'rect', { x: 101, y: 37, width: 98, height: 42, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 201, y: 43, width: 78, height: 34, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 281, y: 39, width: 78, height: 44, rx: 2, fill: '#D7C8A0' }, false);
    // Row 3
    fe(g, 'rect', { x: 1, y: 83, width: 68, height: 40, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 71, y: 81, width: 108, height: 38, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 181, y: 79, width: 108, height: 46, rx: 2, fill: '#D7C8A0' }, false);
    fe(g, 'rect', { x: 291, y: 85, width: 68, height: 36, rx: 2, fill: '#C8A96E' }, false);
    // Row 4
    fe(g, 'rect', { x: 1, y: 125, width: 88, height: 42, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 91, y: 121, width: 98, height: 42, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 191, y: 127, width: 108, height: 42, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 301, y: 123, width: 58, height: 42, rx: 2, fill: '#D7C8A0' }, false);
    // More rows
    fe(g, 'rect', { x: 1, y: 169, width: 108, height: 40, rx: 2, fill: '#D7C8A0' }, false);
    fe(g, 'rect', { x: 111, y: 165, width: 108, height: 46, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 221, y: 171, width: 138, height: 36, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 1, y: 211, width: 78, height: 38, rx: 2, fill: '#B8A060' }, false);
    fe(g, 'rect', { x: 81, y: 213, width: 88, height: 40, rx: 2, fill: '#D7C8A0' }, false);
    fe(g, 'rect', { x: 171, y: 209, width: 108, height: 38, rx: 2, fill: '#C8A96E' }, false);
    fe(g, 'rect', { x: 281, y: 209, width: 78, height: 42, rx: 2, fill: '#D7C8A0' }, false);

    // Window fill
    fe(g, 'rect', { x: 136, y: 26, width: 88, height: 70, rx: 1, fill: '#FAFAFA' }, false);
    // Window glass (dark/sky)
    fe(g, 'rect', { x: 145, y: 35, width: 34, height: 24, rx: 0, fill: '#90CAF9' }, false);
    fe(g, 'rect', { x: 181, y: 35, width: 34, height: 24, rx: 0, fill: '#64B5F6' }, false);
    fe(g, 'rect', { x: 145, y: 61, width: 34, height: 24, rx: 0, fill: '#42A5F5' }, false);
    fe(g, 'rect', { x: 181, y: 61, width: 34, height: 24, rx: 0, fill: '#90CAF9' }, false);
    // Window ledge
    fe(g, 'rect', { x: 136, y: 90, width: 88, height: 6, rx: 0, fill: '#E0E0E0' }, false);

    // Shadow on wall (right side)
    fe(g, 'rect', { x: 260, y: 100, width: 100, height: 350, fill: '#000', opacity: '0.06' }, false);

    // Ground
    fe(g, 'rect', { x: 0, y: 435, width: 360, height: 15, fill: '#9E9E9E', opacity: '0.3' }, false);

    // Pointing hand skin fill
    fe(g, 'ellipse', { cx: 330, cy: 204, rx: 14, ry: 12, fill: '#F5D0A9' }, false);
    // Index finger skin
    fl(g, 'M336 202 C340 196 344 190 348 186 C352 184 354 186 352 190 C350 194 346 200 342 206 Z', '#F5D0A9', false);

    // Left hand skin
    fe(g, 'ellipse', { cx: 204, cy: 290, rx: 8, ry: 8, fill: '#F5D0A9' }, false);
    // Godmother cradling hand skin
    fe(g, 'ellipse', { cx: 88, cy: 248, rx: 8, ry: 8, fill: '#F5D0A9' }, false);

    // Watch fill
    fe(g, 'rect', { x: 207, y: 251, width: 6, height: 8, rx: 1, fill: '#78909C' }, false);
  },

  // 9: Final details - eye shine, glasses glare, text, highlights
  (g, a) => {
    // Eye shines - Godmother
    fe(g, 'circle', { cx: 102, cy: 78, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 120, cy: 78, r: 1.5, fill: 'white' }, a);
    // Eye shines - Baby
    fe(g, 'circle', { cx: 128, cy: 201, r: 1, fill: 'white' }, a);
    fe(g, 'circle', { cx: 138, cy: 201, r: 1, fill: 'white' }, a);
    // Eye shines - Godfather (behind glasses)
    fe(g, 'circle', { cx: 243, cy: 71, r: 1.2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 257, cy: 71, r: 1.2, fill: 'white' }, a);

    // Glasses glare (rectangular)
    fe(g, 'rect', { x: 240, y: 68, width: 4, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, a);
    fe(g, 'rect', { x: 256, y: 68, width: 4, height: 2, rx: 0.5, fill: 'white', opacity: '0.5' }, false);

    // Godmother smile fill
    fl(g, 'M100 108 L126 106 C122 116 114 120 112 120 C108 120 102 114 100 108 Z', '#E57373', false);
    // Baby smile fill
    fl(g, 'M128 218 C132 220 136 220 140 218 C138 222 134 224 132 224 C130 224 128 222 128 218 Z', '#F48FB1', false);

    // Godmother cheeks
    fe(g, 'ellipse', { cx: 98, cy: 100, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 124, cy: 100, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.3' }, false);
    // Baby cheeks
    fe(g, 'ellipse', { cx: 126, cy: 214, rx: 4, ry: 2, fill: '#FFAB91', opacity: '0.4' }, false);
    fe(g, 'ellipse', { cx: 138, cy: 214, rx: 4, ry: 2, fill: '#FFAB91', opacity: '0.4' }, false);

    // Goatee shadow
    fl(g, 'M244 104 C248 110 254 114 258 112 C264 108 268 104 266 102 C262 106 258 110 254 112 C250 110 246 106 244 104 Z', '#5D4037', false);

    // Shirt micro-dot pattern visible layer
    for (let py = 142; py < 275; py += 14) {
      for (let px = 230; px < 272; px += 10) {
        fe(g, 'circle', { cx: px, cy: py, r: 0.3, fill: '#E0E0E0' }, false);
      }
    }

    // Stone wall mortar lines (detail over color)
    pp(g, ['M0 40 L360 40', 'M0 82 L360 82', 'M0 124 L360 124', 'M0 168 L360 168', 'M0 210 L360 210', 'M0 252 L360 252'], a, lt);
    pp(g, ['M80 0 L80 40', 'M160 0 L160 42', 'M260 0 L260 40', 'M100 40 L100 82', 'M200 36 L200 80', 'M280 38 L280 84', 'M70 82 L70 124', 'M180 80 L180 126', 'M290 84 L290 122', 'M90 124 L90 168', 'M190 120 L190 170', 'M300 122 L300 166', 'M110 168 L110 210', 'M220 164 L220 212', 'M80 210 L80 252', 'M170 208 L170 254', 'M280 208 L280 252'], a, lt);

    // Sun highlight on wall (warm spot)
    fe(g, 'ellipse', { cx: 80, cy: 300, rx: 60, ry: 40, fill: '#FFE082', opacity: '0.08' }, false);

    // Godfather shoes hint
    pp(g, ['M216 428 L230 428 C234 430 234 436 230 438 L216 438 Z', 'M270 428 L284 428 C288 430 288 436 284 438 L270 438 Z'], a, lt);
    // Godmother shoes hint
    pp(g, ['M76 428 L92 428 C96 430 96 436 92 438 L76 438 Z', 'M128 428 L144 428 C148 430 148 436 144 438 L128 438 Z'], a, lt);
  }
];

// ==============================================================
// SCENE: AVÓS DUARTE - Grandparents with baby Miguel
// Grandpa center (bald, glasses, striped shirt) holding baby,
// Grandma right (gray-blonde hair, glasses, navy, pearls)
// ==============================================================
const avoesduarteLayers = [
  // 0: Composition
  (g, a) => {
    pp(g, ['M0 400 L360 400'], a, lt);
    pp(g, ['M80 20 L80 400', 'M280 20 L280 400'], a, lt);
    pp(g, ['M80 140 L280 140'], a, lt);
    pp(g, ['M120 30 L220 30 L220 380 L120 380'], a, lt);
  },
  // 1: Bodies
  (g, a) => {
    // Grandpa head
    pp(g, ['M130 120 C128 96 140 76 160 70 C180 76 192 96 190 120 C192 136 186 148 178 156 C172 162 166 166 160 168 C154 166 148 162 142 156 C136 148 130 136 130 120'], a);
    pp(g, ['M148 166 L146 180 M172 166 L174 180'], a);
    pp(g, ['M110 210 C120 190 140 180 160 180 C180 180 200 190 210 210 L214 400 M110 210 L106 400'], a);
    // Grandma head
    pp(g, ['M252 130 C250 108 260 90 276 84 C292 90 302 108 300 130 C302 144 298 156 292 164 C286 170 280 174 276 176 C272 174 266 170 260 164 C254 156 250 144 252 130'], a);
    pp(g, ['M266 174 L264 188 M286 174 L288 188'], a);
    pp(g, ['M236 216 C244 198 260 188 276 188 C292 188 308 198 316 216 L320 400 M236 216 L232 400'], a);
    // Baby
    pp(g, ['M140 260 C138 244 146 232 160 228 C174 232 182 244 180 260 C182 272 178 280 172 286 C168 290 164 292 160 294 C156 292 152 290 148 286 C142 280 140 272 140 260'], a);
    pp(g, ['M148 292 L146 310 M172 292 L174 310'], a);
    pp(g, ['M130 330 C136 318 148 310 160 310 C172 310 184 318 190 330 L192 400 M130 330 L128 400'], a);
  },
  // 2: Faces
  (g, a) => {
    // Grandpa eyes
    pp(g, ['M146 114 C148 108 154 106 158 110 C162 114 160 120 156 122 C152 124 146 120 146 114 Z', 'M166 114 C168 108 174 106 178 110 C182 114 180 120 176 122 C172 124 166 120 166 114 Z'], a);
    fe(g, 'circle', { cx: 154, cy: 115, r: 3, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 174, cy: 115, r: 3, fill: a ? HL : '#5E4023' }, a);
    // Grandpa glasses
    pp(g, ['M140 108 L164 108 L164 124 L140 124 Z', 'M168 108 L192 108 L192 124 L168 124 Z', 'M164 116 L168 116', 'M140 116 L134 114', 'M192 116 L198 114'], a);
    // Grandpa nose and mouth
    pp(g, ['M162 110 C161 118 160 126 158 130', 'M154 134 C158 138 162 140 166 138'], a);
    pp(g, ['M148 148 C154 144 162 142 168 144 C172 142 176 146 178 150', 'M150 150 C158 156 168 156 176 150'], a);
    // Grandpa beard/goatee
    pp(g, ['M150 150 C148 156 150 162 156 166 C162 168 168 166 172 162 C176 156 178 150 176 148'], a, lt);
    // Grandma eyes
    pp(g, ['M262 124 C264 118 270 116 274 120 C278 124 276 130 272 132 C268 134 262 130 262 124 Z', 'M282 124 C284 118 290 116 294 120 C298 124 296 130 292 132 C288 134 282 130 282 124 Z'], a);
    fe(g, 'circle', { cx: 270, cy: 126, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 290, cy: 126, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    // Grandma glasses
    pp(g, ['M258 118 L278 118 L278 134 L258 134 Z', 'M284 118 L304 118 L304 134 L284 134 Z', 'M278 126 L284 126', 'M258 126 L252 124', 'M304 126 L310 124'], a);
    // Grandma nose and mouth
    pp(g, ['M276 120 C275 128 274 134 272 138', 'M268 140 C272 144 276 146 280 144'], a);
    pp(g, ['M264 154 C270 150 276 148 282 150 C286 148 290 152 292 156', 'M266 156 C274 162 284 162 290 156'], a);
    // Baby face
    pp(g, ['M148 256 C150 250 156 248 160 252 C164 256 162 260 158 262 C154 264 148 260 148 256 Z', 'M166 256 C168 250 174 248 178 252 C182 256 180 260 176 262 C172 264 166 260 166 256 Z'], a);
    fe(g, 'circle', { cx: 156, cy: 257, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 172, cy: 257, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    pp(g, ['M155 268 C159 266 163 266 167 268', 'M156 270 C160 276 164 276 168 270'], a);
  },
  // 3: Hair and accessories
  (g, a) => {
    // Grandpa bald head (shiny top)
    pp(g, ['M134 110 C132 88 142 72 158 66 C174 62 186 68 192 78 C196 86 196 98 194 110'], a);
    pp(g, ['M142 80 C150 72 166 68 178 74', 'M146 90 C156 82 170 80 180 86'], a, lt);
    // Grandpa side hair
    pp(g, ['M130 108 C128 114 128 120 130 126', 'M190 108 C192 114 192 120 190 126'], a, lt);
    const ghd = [[132,112],[132,118],[132,124],[190,112],[190,118],[190,124]];
    ghd.forEach(([cx,cy]) => fe(g, 'circle', {cx, cy, r: 0.6, fill: a ? HL : '#9E9E9E'}, a));
    // Grandma hair
    pp(g, ['M254 124 C250 102 258 84 272 78 C288 74 300 80 308 92 C312 100 312 112 310 124'], a);
    pp(g, ['M260 120 C262 106 268 92 278 86 C288 82 298 86 304 96 C308 104 308 116 306 124'], a);
    pp(g, ['M254 130 C250 140 248 152 250 162 C252 170 256 176 260 180'], a, lt);
    pp(g, ['M264 86 C272 80 284 78 292 84', 'M258 96 C268 88 282 86 292 92'], a, lt);
    // Baby hair
    pp(g, ['M142 254 C140 242 148 232 158 228 C168 226 178 232 182 242 C184 248 182 254 180 258'], a);
    pp(g, ['M150 234 C158 228 168 228 174 234'], a, lt);
    // Grandpa ears
    pp(g, ['M128 112 C122 108 118 114 118 122 C118 130 122 136 128 136', 'M192 112 C198 108 202 114 202 122 C202 130 198 136 192 136'], a);
  },
  // 4: Clothing
  (g, a) => {
    // Grandpa striped shirt
    pp(g, ['M122 186 C118 182 114 184 112 190 C110 196 114 200 120 198', 'M198 186 C202 182 206 184 208 190 C210 196 206 200 200 198'], a);
    // Vertical stripes
    for (let x = 118; x < 210; x += 8) { pp(g, [`M${x} 210 L${x} 400`], a, lt); }
    // Collar
    pp(g, ['M146 182 C140 178 136 180 134 186 L140 196 M174 182 C180 178 184 180 186 186 L180 196'], a);
    // Grandma blouse
    pp(g, ['M256 194 C250 190 246 192 244 198 C242 204 246 208 252 206', 'M296 194 C300 190 304 192 306 198 C308 204 304 208 298 206'], a);
    pp(g, ['M252 206 C260 210 268 212 276 212 C284 212 292 210 298 206'], a);
    // Chiffon neckline
    pp(g, ['M256 196 C262 200 270 204 276 204 C282 204 290 200 296 196'], a, lt);
    pp(g, ['M260 198 C266 202 274 204 280 202', 'M264 200 C270 204 278 202 284 198'], a, lt);
    // Pearl necklace
    for (let i = 0; i < 9; i++) {
      const angle = Math.PI * 0.15 + (Math.PI * 0.7 / 8) * i;
      const cx = 276 + Math.cos(angle) * 22;
      const cy = 186 + Math.sin(angle) * 14;
      fe(g, 'circle', { cx, cy, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    }
    // Baby clothes
    pp(g, ['M138 310 C142 302 150 296 160 296 C170 296 178 302 182 310'], a);
    pp(g, ['M140 330 L140 380 M180 330 L180 380'], a, lt);
  },
  // 5: Hands
  (g, a) => {
    // Grandpa hands holding baby
    pp(g, ['M120 240 C116 232 108 228 104 234 C100 240 104 248 110 246 L130 236'], a);
    pp(g, ['M200 240 C204 232 212 228 216 234 C220 240 216 248 210 246 L190 236'], a);
    // Grandpa fingers
    pp(g, ['M106 232 C102 226 98 220 100 216 C102 212 106 212 108 216', 'M104 236 C98 232 94 224 96 220 C98 216 102 216 104 220'], a);
    pp(g, ['M214 232 C218 226 222 220 220 216 C218 212 214 212 212 216', 'M216 236 C222 232 226 224 224 220 C222 216 218 216 216 220'], a);
    // Grandpa watch
    fe(g, 'rect', { x: 114, y: 232, width: 8, height: 6, rx: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Baby hands (tiny)
    fe(g, 'circle', { cx: 142, cy: 310, r: 6, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 178, cy: 310, r: 6, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Baby bare feet
    pp(g, ['M145 385 C142 390 144 398 150 400 C154 400 158 396 156 390', 'M165 385 C168 390 166 398 160 400 C156 400 152 396 154 390'], a);
  },
  // 6: Background
  (g, a) => {
    // Stone wall
    for (let y = 0; y < 400; y += 35) {
      for (let x = (y % 70 === 0 ? 0 : -20); x < 380; x += 55) {
        pp(g, [`M${x} ${y} L${x+50} ${y} L${x+50} ${y+30} L${x} ${y+30} Z`], a, lt);
      }
    }
    // Dark wooden door/window
    pp(g, ['M20 30 L90 30 L90 180 L20 180 Z', 'M20 30 L90 30', 'M55 30 L55 180'], a);
    // Flower box
    pp(g, ['M10 200 L60 200 L60 230 L10 230 Z'], a, lt);
    pp(g, ['M20 190 C24 180 28 186 32 182 C36 178 40 184 44 180 C48 176 52 182 56 188'], a);
    // Seat/bench hint
    pp(g, ['M100 390 L220 390 L220 400 L100 400'], a, lt);
  },
  // 7: Color - figures
  (g, a) => {
    // Grandpa skin
    fl(g, 'M132 120 C130 98 142 78 160 72 C178 78 190 98 188 120 C190 136 184 148 176 156 C170 162 164 166 160 168 C156 166 150 162 144 156 C138 148 132 136 132 120 Z', '#EDBE8C', a);
    fe(g, 'ellipse', { cx: 124, cy: 120, rx: 6, ry: 12, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 196, cy: 120, rx: 6, ry: 12, fill: '#EDBE8C' }, false);
    // Grandpa shirt (striped pattern = base white)
    fl(g, 'M112 210 C122 192 142 182 160 182 C178 182 198 192 208 210 L212 398 L108 398 Z', '#FAFAFA', a);
    // Grandma skin
    fl(g, 'M254 130 C252 110 262 92 278 86 C294 92 304 110 302 130 C304 144 300 156 294 164 C288 170 282 174 278 176 C274 174 268 170 262 164 C256 156 252 144 254 130 Z', '#FADCC2', a);
    // Grandma blouse
    fl(g, 'M238 216 C246 200 262 190 278 190 C294 190 310 200 318 216 L320 398 L234 398 Z', '#1A237E', a);
    // Baby skin
    fl(g, 'M142 260 C140 246 148 234 160 230 C172 234 180 246 178 260 C180 272 176 280 170 286 C166 290 162 292 160 294 C158 292 154 290 150 286 C144 280 142 272 142 260 Z', '#F5D0A9', a);
    // Baby clothes
    fl(g, 'M132 330 C138 320 150 312 160 312 C170 312 182 320 188 330 L190 398 L130 398 Z', '#FAFAFA', a);
    fl(g, 'M142 330 L142 398 L178 398 L178 330 Z', '#1A237E', false);
    // Neck fills
    fe(g, 'rect', { x: 147, y: 166, width: 26, height: 16, rx: 4, fill: '#DEB07A' }, false);
    fe(g, 'rect', { x: 265, y: 174, width: 22, height: 14, rx: 4, fill: '#F0C8A8' }, false);
  },
  // 8: Color - scene
  (g, a) => {
    // Wall fill
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 400, fill: '#A1887F', opacity: '0.15' }, a);
    // Wooden door
    fe(g, 'rect', { x: 22, y: 32, width: 66, height: 146, rx: 2, fill: '#5D4037' }, a);
    // Flower box
    fe(g, 'rect', { x: 12, y: 202, width: 46, height: 26, rx: 2, fill: '#8D6E63' }, false);
    // Plants
    fl(g, 'M22 192 C26 182 30 188 34 184 C38 180 42 186 46 182 C50 178 54 184 58 190 L58 200 L22 200 Z', '#4CAF50', false);
    // Grandpa hair fill (bald top = skin, gray sides)
    fl(g, 'M136 110 C134 90 144 74 160 68 C176 64 188 70 194 80 C198 88 198 100 196 110 L192 108 C194 98 192 86 188 78 C182 70 172 66 160 70 C148 74 140 86 138 100 Z', '#EDBE8C', false);
    fe(g, 'rect', { x: 128, y: 108, width: 6, height: 20, rx: 1, fill: '#9E9E9E' }, false);
    fe(g, 'rect', { x: 188, y: 108, width: 6, height: 20, rx: 1, fill: '#9E9E9E' }, false);
    // Grandma hair
    fl(g, 'M256 124 C252 104 260 86 274 80 C290 76 302 82 310 94 C314 102 314 114 312 124 L306 122 C308 112 306 100 302 94 C296 86 288 82 278 84 C268 86 262 96 260 108 Z', '#B0A090', false);
    // Baby hair
    fl(g, 'M144 254 C142 244 150 234 160 230 C170 228 180 234 184 244 C186 250 184 256 182 260 L180 258 C182 252 182 246 180 240 C176 234 168 230 160 232 C152 234 146 240 146 248 Z', '#8D6E63', false);
    // Bench
    fe(g, 'rect', { x: 100, y: 390, width: 120, height: 10, rx: 2, fill: '#8D6E63' }, false);
    // Pearl fills
    for (let i = 0; i < 9; i++) {
      const angle = Math.PI * 0.15 + (Math.PI * 0.7 / 8) * i;
      const cx = 276 + Math.cos(angle) * 22;
      const cy = 186 + Math.sin(angle) * 14;
      fe(g, 'circle', { cx, cy, r: 1.8, fill: '#F5F5F5' }, false);
    }
    // Shirt stripes (blue)
    for (let x = 120; x < 206; x += 16) {
      fe(g, 'rect', { x, y: 210, width: 4, height: 188, fill: '#42A5F5', opacity: '0.3' }, false);
    }
  },
  // 9: Final details
  (g, a) => {
    // Eye shine - grandpa
    fe(g, 'circle', { cx: 152, cy: 113, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 172, cy: 113, r: 1.5, fill: 'white' }, a);
    // Eye shine - grandma
    fe(g, 'circle', { cx: 268, cy: 124, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 288, cy: 124, r: 1.5, fill: 'white' }, a);
    // Eye shine - baby
    fe(g, 'circle', { cx: 154, cy: 255, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 170, cy: 255, r: 1.5, fill: 'white' }, a);
    // Baby cheeks
    fe(g, 'ellipse', { cx: 148, cy: 270, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 172, cy: 270, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.4' }, a);
    // Glasses lens reflection - grandpa
    fe(g, 'rect', { x: 144, y: 110, width: 6, height: 3, rx: 1, fill: 'white', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 172, y: 110, width: 6, height: 3, rx: 1, fill: 'white', opacity: '0.3' }, false);
    // Glasses lens reflection - grandma
    fe(g, 'rect', { x: 262, y: 120, width: 5, height: 3, rx: 1, fill: 'white', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 288, y: 120, width: 5, height: 3, rx: 1, fill: 'white', opacity: '0.3' }, false);
    // Watch fill
    fe(g, 'rect', { x: 115, y: 233, width: 6, height: 4, rx: 1, fill: '#78909C' }, false);
    // Baby mouth color
    fl(g, 'M158 270 C162 276 166 276 170 270 Z', '#E57373', false);
    // Grandpa goatee shadow
    fl(g, 'M152 150 C150 156 152 162 158 166 C164 168 170 166 174 162 C178 156 180 150 178 148 C172 152 164 154 158 152 Z', '#9E9E9E', false);
  }
];

// ==============================================================
// SCENE: AVÓS DIAS - Grandparents under decorative awning
// Grandma left (teal top, curly hair, glasses), Grandpa right (thick eyebrows, white polo)
// ==============================================================
const avosdiasLayers = [
  // 0: Composition
  (g, a) => {
    pp(g, ['M0 80 L360 80'], a, lt);
    pp(g, ['M80 80 L80 440', 'M280 80 L280 440'], a, lt);
    pp(g, ['M80 160 L280 160'], a, lt);
    pp(g, ['M0 80 C40 60 80 70 120 60 C160 50 200 60 240 50 C280 60 320 50 360 70'], a, lt);
  },
  // 1: Bodies
  (g, a) => {
    // Grandma head
    pp(g, ['M82 150 C80 128 90 110 106 104 C122 110 132 128 130 150 C132 164 128 176 122 184 C116 190 110 194 106 196 C102 194 96 190 90 184 C84 176 80 164 82 150'], a);
    pp(g, ['M96 194 L94 208 M116 194 L118 208'], a);
    pp(g, ['M70 236 C78 218 94 208 106 208 C118 208 134 218 142 236 L146 440 M70 236 L66 440'], a);
    // Grandpa head
    pp(g, ['M232 140 C230 118 240 100 256 94 C272 100 282 118 280 140 C282 154 278 166 272 174 C266 180 260 184 256 186 C252 184 246 180 240 174 C234 166 230 154 232 140'], a);
    pp(g, ['M246 184 L244 198 M266 184 L268 198'], a);
    pp(g, ['M220 226 C228 208 244 198 256 198 C268 198 284 208 292 226 L296 440 M220 226 L216 440'], a);
    // Baby in grandma's arms
    pp(g, ['M90 250 C88 238 94 228 106 224 C118 228 124 238 122 250 C124 260 120 268 116 274 C112 278 108 280 106 282 C104 280 100 278 96 274 C92 268 90 260 90 250'], a);
    pp(g, ['M94 290 C98 284 102 280 106 280 C110 280 114 284 118 290 L120 340 M94 290 L92 340'], a);
  },
  // 2: Faces
  (g, a) => {
    // Grandma eyes
    pp(g, ['M94 144 C96 138 102 136 106 140 C110 144 108 150 104 152 C100 154 94 150 94 144 Z', 'M112 144 C114 138 120 136 124 140 C128 144 126 150 122 152 C118 154 112 150 112 144 Z'], a);
    fe(g, 'circle', { cx: 102, cy: 146, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 120, cy: 146, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    // Grandma glasses
    pp(g, ['M88 138 L110 138 L110 154 L88 154 Z', 'M116 138 L136 138 L136 154 L116 154 Z', 'M110 146 L116 146'], a);
    pp(g, ['M104 144 C103 150 102 156 100 160', 'M96 162 C100 166 104 168 108 166'], a);
    pp(g, ['M90 172 C96 168 104 166 110 168 C116 166 120 170 124 174', 'M92 174 C100 180 108 180 122 174'], a);
    // Grandpa eyes
    pp(g, ['M244 136 C246 130 252 128 256 132 C260 136 258 142 254 144 C250 146 244 142 244 136 Z', 'M262 136 C264 130 270 128 274 132 C278 136 276 142 272 144 C268 146 262 142 262 136 Z'], a);
    fe(g, 'circle', { cx: 252, cy: 138, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 270, cy: 138, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Grandpa THICK eyebrows
    pp(g, ['M238 126 C244 120 254 118 262 122', 'M258 122 C266 118 276 120 282 126'], a);
    pp(g, ['M240 128 C246 122 256 120 264 124', 'M256 124 C264 120 274 122 280 128'], a);
    pp(g, ['M256 130 C255 138 254 146 252 150', 'M248 154 C252 158 256 160 260 158'], a);
    pp(g, ['M244 166 C250 162 258 160 264 162 C268 160 272 164 274 168', 'M246 168 C254 174 264 174 272 168'], a);
    // Baby face
    pp(g, ['M96 246 C98 240 102 238 106 242 C110 246 108 250 104 252 C100 254 96 250 96 246 Z', 'M112 246 C114 240 118 238 122 242 C126 246 124 250 120 252 C116 254 112 250 112 246 Z'], a);
    fe(g, 'circle', { cx: 104, cy: 248, r: 2, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 118, cy: 248, r: 2, fill: a ? HL : '#3E2518' }, a);
    pp(g, ['M104 260 C108 258 112 258 116 260', 'M106 262 C110 266 114 266 118 262'], a);
  },
  // 3: Hair
  (g, a) => {
    // Grandma curly hair
    pp(g, ['M84 144 C80 124 88 106 102 98 C116 94 128 100 134 112 C138 120 138 134 136 144'], a);
    // Curls
    pp(g, ['M86 108 C84 102 88 96 94 98 C98 100 96 106 90 108', 'M96 100 C94 94 98 88 104 90 C108 92 106 98 100 100', 'M106 96 C104 90 108 84 114 86 C118 88 116 94 110 96', 'M116 98 C114 92 118 86 124 88 C128 90 126 96 120 98', 'M124 102 C122 96 126 90 132 92 C136 94 134 100 128 102'], a);
    pp(g, ['M82 150 C78 158 76 166 78 174 C80 180 84 186 88 190', 'M132 150 C136 158 138 166 136 174'], a, lt);
    // Grandpa short hair
    pp(g, ['M234 136 C232 118 240 102 254 96 C268 92 280 98 286 110 C290 118 290 130 288 140'], a);
    pp(g, ['M248 98 C256 94 266 94 274 100', 'M242 108 C250 100 264 98 276 104'], a, lt);
    // Baby hair
    pp(g, ['M92 246 C90 236 96 228 104 224 C112 222 120 226 124 234 C126 240 124 248 122 252'], a);
    pp(g, ['M100 228 C106 224 114 224 118 228'], a, lt);
  },
  // 4: Clothing
  (g, a) => {
    // Grandma teal sleeveless top
    pp(g, ['M82 216 C78 212 76 216 76 222 L78 236', 'M130 216 C134 212 136 216 136 222 L134 236'], a);
    pp(g, ['M78 236 L66 440', 'M134 236 L146 440'], a, lt);
    // Neckline
    pp(g, ['M86 210 C94 214 102 216 106 216 C110 216 118 214 126 210'], a);
    // Gold pendant
    pp(g, ['M106 210 L106 222'], a, lt);
    fe(g, 'circle', { cx: 106, cy: 224, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Grandpa white polo
    pp(g, ['M236 204 C232 200 228 202 226 208 C224 214 228 218 234 216', 'M276 204 C280 200 284 202 286 208 C288 214 284 218 278 216'], a);
    // Collar
    pp(g, ['M240 200 C248 206 256 208 256 208 C256 208 264 206 272 200'], a);
    pp(g, ['M244 198 C242 194 238 194 236 198 L240 204', 'M268 198 C270 194 274 194 276 198 L272 204'], a);
    // Baby white clothes
    pp(g, ['M96 284 C100 280 104 278 106 278 C108 278 112 280 116 284'], a);
    pp(g, ['M94 290 L92 340 L120 340 L118 290'], a, lt);
  },
  // 5: Hands and objects
  (g, a) => {
    // Grandma arms holding baby
    pp(g, ['M74 240 C68 252 64 268 66 280 C68 290 72 296 78 294 L94 280'], a);
    pp(g, ['M138 240 C144 252 146 268 144 280 C142 290 138 296 132 294 L118 280'], a);
    // Baby small object in hand
    fe(g, 'ellipse', { cx: 124, cy: 304, rx: 5, ry: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Grandma nails (bordeaux dots)
    const nd = [[66,280],[70,276],[74,272],[132,280],[128,276],[124,272]];
    nd.forEach(([cx,cy]) => fe(g, 'circle', { cx, cy, r: 1.5, fill: a ? HL : '#7B1FA2' }, a));
  },
  // 6: Background
  (g, a) => {
    // Awning pattern
    for (let x = 0; x < 380; x += 30) {
      pp(g, [`M${x} 0 L${x} 80`], a, lt);
    }
    pp(g, ['M0 80 C30 70 60 60 90 65 C120 70 150 55 180 60 C210 55 240 65 270 60 C300 55 330 65 360 70'], a);
    // Scallop bottom edge
    for (let x = 0; x < 360; x += 30) {
      pp(g, [`M${x} 78 C${x+8} 88 ${x+22} 88 ${x+30} 78`], a, lt);
    }
    // Background restaurant hints
    pp(g, ['M0 420 L360 420'], a, lt);
    // Candelabro/lamp hint
    fe(g, 'circle', { cx: 180, cy: 46, r: 6, fill: 'none', stroke: a ? HL : LP, 'stroke-width': SW }, false);
    pp(g, ['M180 40 L180 20'], a, lt);
    // Greenery at back
    pp(g, ['M300 100 C310 94 320 98 330 92 C340 88 350 94 360 90', 'M0 110 C10 104 20 108 30 102 C40 98 50 104 60 100'], a, lt);
  },
  // 7: Color - figures
  (g, a) => {
    // Grandma skin
    fl(g, 'M84 150 C82 130 92 112 108 106 C124 112 134 130 132 150 C134 164 130 176 124 184 C118 190 112 194 108 196 C104 194 98 190 92 184 C86 176 82 164 84 150 Z', '#FADCC2', a);
    // Grandma teal top
    fl(g, 'M72 236 C80 220 96 210 108 210 C120 210 136 220 144 236 L148 438 L68 438 Z', '#00897B', a);
    // Grandpa skin (tanned)
    fl(g, 'M234 140 C232 120 242 102 258 96 C274 102 284 120 282 140 C284 154 280 166 274 174 C268 180 262 184 258 186 C254 184 248 180 242 174 C236 166 232 154 234 140 Z', '#D7A86E', a);
    // Grandpa polo
    fl(g, 'M222 226 C230 210 246 200 258 200 C270 200 286 210 294 226 L298 438 L218 438 Z', '#FAFAFA', a);
    // Baby skin
    fl(g, 'M92 250 C90 240 96 230 108 226 C120 230 126 240 124 250 C126 260 122 268 118 274 C114 278 110 280 108 282 C106 280 102 278 98 274 C94 268 92 260 92 250 Z', '#F5D0A9', a);
    // Baby white clothes
    fl(g, 'M94 290 C98 284 104 280 108 280 C112 280 118 284 122 290 L124 338 L92 338 Z', '#FAFAFA', false);
    // Neck fills
    fe(g, 'rect', { x: 95, y: 194, width: 22, height: 14, rx: 3, fill: '#F0C8A8' }, false);
    fe(g, 'rect', { x: 245, y: 184, width: 22, height: 14, rx: 3, fill: '#C8956E' }, false);
  },
  // 8: Color - scene
  (g, a) => {
    // Awning fill
    for (let x = 0; x < 380; x += 60) {
      fe(g, 'rect', { x, y: 0, width: 30, height: 80, fill: '#E91E63', opacity: '0.25' }, false);
      fe(g, 'rect', { x: x + 30, y: 0, width: 30, height: 80, fill: '#F48FB1', opacity: '0.15' }, false);
    }
    // Background greenery
    fe(g, 'rect', { x: 0, y: 90, width: 360, height: 50, fill: '#8BC34A', opacity: '0.1' }, false);
    // Warm sunlight overlay
    fe(g, 'rect', { x: 0, y: 80, width: 360, height: 360, fill: '#FFF8E1', opacity: '0.08' }, false);
    // Grandma hair
    fl(g, 'M86 144 C82 126 90 108 104 100 C118 96 130 102 136 114 C140 122 140 136 138 144 L134 142 C136 134 136 122 132 112 C128 104 118 98 108 102 C98 106 90 116 88 130 Z', '#8D7B6B', false);
    // Grandpa hair
    fl(g, 'M236 136 C234 120 242 104 256 98 C270 94 282 100 288 112 C292 120 292 132 290 140 L286 138 C288 130 288 120 284 112 C280 104 272 98 262 100 C252 102 244 110 240 122 Z', '#9E9E9E', false);
    // Grandpa eyebrows fill (thick dark)
    fl(g, 'M240 128 C246 122 256 120 264 124 L262 128 C254 124 244 126 240 128 Z', '#37474F', false);
    fl(g, 'M256 124 C264 120 274 122 280 128 L278 130 C272 126 264 124 258 126 Z', '#37474F', false);
    // Gold pendant fill
    fe(g, 'circle', { cx: 106, cy: 224, r: 2.5, fill: '#FFD700' }, false);
    // Baby object
    fe(g, 'ellipse', { cx: 124, cy: 304, rx: 4, ry: 3, fill: '#C0CA33' }, false);
  },
  // 9: Final details
  (g, a) => {
    // Eye shines
    fe(g, 'circle', { cx: 100, cy: 144, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 118, cy: 144, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 250, cy: 136, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 268, cy: 136, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 102, cy: 246, r: 1.2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 116, cy: 246, r: 1.2, fill: 'white' }, a);
    // Baby cheeks
    fe(g, 'ellipse', { cx: 98, cy: 260, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 118, cy: 260, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);
    // Grandma glasses tint
    fe(g, 'rect', { x: 89, y: 139, width: 20, height: 14, rx: 1, fill: '#795548', opacity: '0.08' }, false);
    fe(g, 'rect', { x: 117, y: 139, width: 18, height: 14, rx: 1, fill: '#795548', opacity: '0.08' }, false);
    // Nail fills (bordeaux)
    [[66,280],[70,276],[74,272],[132,280],[128,276],[124,272]].forEach(([cx,cy]) => fe(g, 'circle', { cx, cy, r: 1.2, fill: '#7B1FA2' }, false));
    // Lip colors
    fl(g, 'M94 174 C102 180 110 180 124 174 C118 178 110 182 106 182 C102 182 96 178 92 174 Z', '#D48C8C', false);
    // Grandpa composed expression lines
    pp(g, ['M240 148 C244 146 248 146 250 148', 'M262 148 C266 146 270 146 274 148'], a, lt);
    // Sunlight warm spots
    fe(g, 'ellipse', { cx: 180, cy: 120, rx: 60, ry: 30, fill: '#FFF9C4', opacity: '0.06' }, false);
  }
];

// ==============================================================
// SCENE: BISAVÔ - Great-grandfather at celebration
// Elderly man at orange tablecloth, gold balloons, huge smile
// ==============================================================
const bivoLayers = [
  // 0: Composition
  (g, a) => {
    pp(g, ['M0 290 L360 290'], a);
    pp(g, ['M100 10 L100 290', 'M260 10 L260 290'], a, lt);
    pp(g, ['M100 120 L260 120'], a, lt);
    pp(g, ['M0 60 L360 60'], a, lt);
  },
  // 1: Body
  (g, a) => {
    // Head
    pp(g, ['M144 120 C142 96 152 76 172 68 C192 76 202 96 200 120 C202 136 198 148 192 156 C186 162 180 166 172 168 C164 166 158 162 152 156 C146 148 142 136 144 120'], a);
    // Ears (large)
    pp(g, ['M140 114 C132 108 126 114 126 124 C126 136 132 142 140 142', 'M204 114 C212 108 218 114 218 124 C218 136 212 142 204 142'], a);
    // Neck (thin, elderly)
    pp(g, ['M162 166 L160 182 M182 166 L184 182'], a);
    // Shoulders (thin, slightly hunched)
    pp(g, ['M120 210 C130 192 152 182 172 182 C192 182 214 192 224 210 L228 290 M120 210 L116 290'], a);
  },
  // 2: Face - wrinkles and smile
  (g, a) => {
    // Eyes (small between wrinkles)
    pp(g, ['M156 114 C158 110 162 108 166 112 C168 116 166 120 162 122 C158 124 154 118 156 114 Z', 'M180 114 C182 110 186 108 190 112 C192 116 190 120 186 122 C182 124 178 118 180 114 Z'], a);
    fe(g, 'circle', { cx: 162, cy: 116, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 186, cy: 116, r: 2.5, fill: a ? HL : '#5E4023' }, a);
    // Eyebrows (sparse, white)
    pp(g, ['M152 106 C158 102 166 102 170 104', 'M178 104 C182 102 190 102 196 106'], a, lt);
    // Large nose
    pp(g, ['M174 108 C173 116 172 126 170 132', 'M164 136 C168 142 174 144 180 142 C184 140 186 136 188 132'], a);
    // HUGE SMILE - mouth wide open
    pp(g, ['M150 152 C156 146 164 142 172 144 C180 142 188 146 194 152'], a);
    pp(g, ['M152 154 C158 166 166 174 172 176 C178 174 186 166 192 154'], a);
    // Teeth
    pp(g, ['M154 154 L190 154'], a);
    pp(g, ['M162 154 L162 160', 'M170 154 L170 162', 'M178 154 L178 160', 'M186 154 L186 158'], a, lt);
    // WRINKLES - forehead
    pp(g, ['M148 86 C158 82 172 80 186 82 C192 84 196 86 200 90', 'M150 92 C160 88 174 86 188 88 C194 90 198 92 200 96', 'M152 98 C162 94 176 92 190 94 C196 96 198 98 200 102'], a, lt);
    // Crow's feet
    pp(g, ['M144 112 C140 108 136 106 132 106', 'M144 116 C140 116 136 118 132 120', 'M144 120 C140 124 136 128 132 132'], a, lt);
    pp(g, ['M200 112 C204 108 208 106 212 106', 'M200 116 C204 116 208 118 212 120', 'M200 120 C204 124 208 128 212 132'], a, lt);
    // Nasolabial folds
    pp(g, ['M160 130 C158 138 156 146 154 152', 'M184 130 C186 138 188 146 190 152'], a);
    // Neck wrinkles
    pp(g, ['M158 170 C164 168 176 168 184 170', 'M160 174 C166 172 178 172 182 174'], a, lt);
    // Age spots
    fe(g, 'circle', { cx: 158, cy: 84, r: 3, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 178, cy: 80, r: 2.5, fill: a ? HL : '#C49A6C', opacity: '0.3' }, a);
    fe(g, 'circle', { cx: 192, cy: 90, r: 2, fill: a ? HL : '#C49A6C', opacity: '0.3' }, a);
  },
  // 3: Hair (nearly bald, wisps of white)
  (g, a) => {
    // Bald dome outline
    pp(g, ['M146 110 C144 88 154 72 170 66 C186 62 198 68 204 80 C208 88 208 100 206 110'], a);
    // Very sparse white hair on sides
    const wh = [[138,112],[136,118],[136,124],[138,130],[140,136],[206,112],[208,118],[208,124],[206,130],[204,136]];
    wh.forEach(([cx,cy]) => {
      pp(g, [`M${cx} ${cy} C${cx-2} ${cy-3} ${cx-4} ${cy-2} ${cx-4} ${cy+1}`], a, lt);
    });
    // Top of head - completely bald, maybe one wisp
    pp(g, ['M166 68 C170 64 176 64 180 68'], a, lt);
  },
  // 4: Clothing
  (g, a) => {
    // Cream shirt collar
    pp(g, ['M154 184 C148 180 144 182 142 188 L148 196', 'M190 184 C196 180 200 182 202 188 L196 196'], a);
    pp(g, ['M148 196 C156 200 164 202 172 202 C180 202 188 200 196 196'], a);
    // Shirt opening
    pp(g, ['M172 202 L172 290'], a, lt);
    // Shirt buttons
    fe(g, 'circle', { cx: 172, cy: 216, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 236, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 256, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Shoulder seams
    pp(g, ['M138 196 C128 192 122 198 120 206', 'M206 196 C216 192 222 198 224 206'], a, lt);
  },
  // 5: Hands + water bottle
  (g, a) => {
    // Right arm raised holding bottle
    pp(g, ['M220 214 C230 206 242 194 252 180 C258 172 262 166 264 160'], a);
    // Hand gripping bottle
    pp(g, ['M256 158 C252 152 248 154 246 160 C244 166 248 170 254 168', 'M250 156 C246 150 242 148 240 154 C238 158 240 162 244 164'], a);
    // Water bottle
    pp(g, ['M240 90 L240 168 M260 90 L260 168', 'M240 90 C240 84 244 80 248 78 L252 78 C256 80 260 84 260 90'], a);
    // Bottle cap
    pp(g, ['M244 78 L244 70 L256 70 L256 78'], a);
    // Label
    pp(g, ['M242 110 L258 110 L258 140 L242 140 Z'], a, lt);
    // Left hand on table
    pp(g, ['M120 214 C112 222 106 238 104 256 C102 268 106 278 112 280', 'M112 280 C118 276 124 266 130 254 C134 244 136 234 136 226'], a);
    pp(g, ['M106 260 C102 254 98 248 100 244 C102 240 106 240 108 244', 'M108 264 C104 258 100 252 102 248 C104 244 108 244 110 248'], a);
    // Age spots on hands
    fe(g, 'circle', { cx: 110, cy: 270, r: 2, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 254, cy: 164, r: 1.5, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
  },
  // 6: Table and background
  (g, a) => {
    // Table
    pp(g, ['M0 290 L360 290', 'M0 290 L0 450 M360 290 L360 450'], a);
    // Tablecloth baroque pattern
    for (let x = 20; x < 340; x += 60) {
      pp(g, [`M${x} 310 C${x+10} 300 ${x+20} 300 ${x+30} 310 C${x+40} 320 ${x+50} 320 ${x+60} 310`], a, lt);
      pp(g, [`M${x} 340 C${x+10} 330 ${x+20} 330 ${x+30} 340 C${x+40} 350 ${x+50} 350 ${x+60} 340`], a, lt);
    }
    // Plate
    pp(g, ['M140 320 C140 310 155 304 180 304 C205 304 220 310 220 320 C220 330 205 336 180 336 C155 336 140 330 140 320 Z'], a);
    // Wine glass
    pp(g, ['M82 280 L84 300 C84 306 92 310 100 310 C108 310 116 306 116 300 L118 280'], a);
    pp(g, ['M100 310 L100 330 L88 330 L112 330'], a);
    // Cutlery
    pp(g, ['M126 300 L126 340', 'M232 300 L232 340'], a, lt);
    pp(g, ['M124 300 C124 294 128 290 130 294 C132 298 130 300 128 300'], a, lt);
    // Balloons at top
    pp(g, ['M80 40 C70 20 74 0 90 0 C106 0 110 20 100 40 C94 48 86 48 80 40 Z', 'M280 50 C270 30 274 10 290 10 C306 10 310 30 300 50 C294 58 286 58 280 50 Z', 'M170 30 C160 10 164 -10 180 -10 C196 -10 200 10 190 30 C184 38 176 38 170 30 Z'], a);
    // Balloon strings
    pp(g, ['M90 40 L90 60', 'M290 50 L290 60', 'M180 30 L180 60'], a, lt);
    // Chair
    pp(g, ['M280 160 L280 400 M320 160 L320 400', 'M282 160 L318 160', 'M282 200 L318 200', 'M282 240 L318 240'], a, lt);
    // Fire extinguisher (realistic detail)
    pp(g, ['M30 200 L50 200 L50 260 L30 260 Z', 'M36 196 L44 196 L44 200 L36 200 Z'], a, lt);
  },
  // 7: Color - figure
  (g, a) => {
    // Skin
    fl(g, 'M146 120 C144 98 154 78 174 70 C194 78 204 98 202 120 C204 136 200 148 194 156 C188 162 182 166 174 168 C166 166 160 162 154 156 C148 148 144 136 146 120 Z', '#EDBE8C', a);
    // Ears
    fe(g, 'ellipse', { cx: 133, cy: 126, rx: 8, ry: 14, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 211, cy: 126, rx: 8, ry: 14, fill: '#EDBE8C' }, false);
    // Bald top (same as skin)
    fl(g, 'M148 110 C146 90 156 74 172 68 C188 64 200 70 206 82 C210 90 210 102 208 110 L204 108 C206 100 206 88 202 80 C198 72 190 66 178 68 C166 70 158 80 154 92 Z', '#EDBE8C', false);
    // Side hair wisps (white/gray)
    fe(g, 'rect', { x: 134, y: 110, width: 8, height: 28, rx: 2, fill: '#E0E0E0' }, false);
    fe(g, 'rect', { x: 202, y: 110, width: 8, height: 28, rx: 2, fill: '#E0E0E0' }, false);
    // Shirt
    fl(g, 'M122 210 C132 194 154 184 174 184 C194 184 216 194 226 210 L230 288 L118 288 Z', '#F5F5DC', a);
    // Collar
    fl(g, 'M156 186 C150 182 146 184 144 190 L150 198 C158 202 166 204 174 204 C182 204 190 202 198 198 L204 190 C202 184 198 182 192 186 L184 194 C178 198 170 200 164 196 Z', '#EDE8D0', false);
    // Neck
    fe(g, 'rect', { x: 161, y: 166, width: 22, height: 16, rx: 3, fill: '#DEB07A' }, false);
    // Hand skin
    fe(g, 'ellipse', { cx: 250, cy: 162, rx: 10, ry: 8, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 112, cy: 268, rx: 10, ry: 10, fill: '#EDBE8C' }, false);
  },
  // 8: Color - scene
  (g, a) => {
    // Orange tablecloth
    fe(g, 'rect', { x: 0, y: 290, width: 360, height: 160, fill: '#FF8F00' }, a);
    // Tablecloth pattern (darker spirals)
    for (let x = 20; x < 340; x += 60) {
      fl(g, `M${x} 310 C${x+10} 300 ${x+20} 300 ${x+30} 310 C${x+40} 320 ${x+50} 320 ${x+60} 310 L${x+60} 340 C${x+50} 350 ${x+40} 350 ${x+30} 340 C${x+20} 330 ${x+10} 330 ${x} 340 Z`, '#E65100', false);
    }
    // Plate
    fl(g, 'M142 320 C142 312 157 306 180 306 C203 306 218 312 218 320 C218 328 203 334 180 334 C157 334 142 328 142 320 Z', '#FAFAFA', a);
    // Glass
    fl(g, 'M84 282 L86 298 C86 304 94 308 100 308 C106 308 114 304 114 298 L116 282 Z', '#E0E0E0', false);
    // Balloons
    fl(g, 'M82 40 C72 22 76 2 92 2 C108 2 112 22 102 40 C96 48 88 48 82 40 Z', '#FFD700', a);
    fl(g, 'M282 50 C272 32 276 12 292 12 C308 12 312 32 302 50 C296 58 288 58 282 50 Z', '#FFD700', false);
    fl(g, 'M172 30 C162 12 166 -8 182 -8 C198 -8 202 12 192 30 C186 38 178 38 172 30 Z', '#FFD700', false);
    // Chair
    fe(g, 'rect', { x: 281, y: 162, width: 38, height: 236, rx: 2, fill: '#A1887F', opacity: '0.2' }, false);
    // Fire extinguisher
    fe(g, 'rect', { x: 31, y: 201, width: 18, height: 58, rx: 2, fill: '#D32F2F' }, false);
    // Water bottle
    fl(g, 'M242 92 L242 166 L258 166 L258 92 C258 86 256 82 252 80 L248 80 C244 82 242 86 242 92 Z', '#E3F2FD', false);
    fe(g, 'rect', { x: 244, y: 112, width: 12, height: 28, rx: 1, fill: '#1565C0', opacity: '0.4' }, false);
    fe(g, 'rect', { x: 245, y: 72, width: 10, height: 8, rx: 1, fill: '#1565C0' }, false);
    // Wall
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 290, fill: '#FFF8E1', opacity: '0.15' }, false);
  },
  // 9: Final details
  (g, a) => {
    // Eye shine
    fe(g, 'circle', { cx: 160, cy: 114, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 184, cy: 114, r: 1.5, fill: 'white' }, a);
    // Smile fill (mouth open)
    fl(g, 'M154 154 L190 154 C188 164 182 172 174 174 C166 172 158 164 154 154 Z', '#E57373', false);
    // Teeth
    fl(g, 'M156 154 L188 154 L188 160 L156 160 Z', '#FAFAFA', false);
    // Age spots fills
    fe(g, 'circle', { cx: 158, cy: 84, r: 3, fill: '#C49A6C', opacity: '0.25' }, false);
    fe(g, 'circle', { cx: 178, cy: 80, r: 2.5, fill: '#C49A6C', opacity: '0.2' }, false);
    fe(g, 'circle', { cx: 192, cy: 90, r: 2, fill: '#C49A6C', opacity: '0.2' }, false);
    // Balloon shine
    fe(g, 'ellipse', { cx: 86, cy: 22, rx: 6, ry: 4, fill: 'white', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 286, cy: 32, rx: 6, ry: 4, fill: 'white', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 176, cy: 12, rx: 6, ry: 4, fill: 'white', opacity: '0.3' }, false);
    // Bottle water line
    pp(g, ['M244 130 C248 128 252 128 256 130'], a, lt);
    // Wrinkle shadow enhancement
    pp(g, ['M150 88 C160 84 174 82 188 84'], a, lt);
    // Cheeks (happy glow)
    fe(g, 'ellipse', { cx: 150, cy: 140, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 194, cy: 140, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.3' }, a);
    // Label text hint
    const lb = ce('text', { x: 244, y: 128, fill: '#1565C0', 'font-size': '4', 'font-family': 'sans-serif' });
    lb.textContent = 'LUSO'; if (a) lb.classList.add('active-element'); g.appendChild(lb);
  }
];

// ==============================================================
// SCENE: TIO + AVÔ - Bruno and Grandpa Dias hiking selfie
// Mountain valley, wooden boardwalk, dramatic landscape
// ==============================================================
const tioavoLayers = [
  // 0: Composition
  (g, a) => {
    pp(g, ['M0 220 L360 220'], a, lt);
    pp(g, ['M180 220 L180 450'], a, lt);
    pp(g, ['M60 220 L60 450', 'M300 220 L300 450'], a, lt);
    pp(g, ['M0 0 L180 100 L360 0'], a, lt);
  },
  // 1: Landscape - mountains
  (g, a) => {
    // Left mountain ridge
    pp(g, ['M0 180 C20 120 60 60 100 40 C130 24 150 30 170 80 C180 110 180 160 180 220'], a);
    // Right mountain ridge
    pp(g, ['M180 220 C180 160 182 100 200 60 C220 30 250 20 290 40 C320 56 350 100 360 160'], a);
    // Valley bottom
    pp(g, ['M140 220 C150 210 160 206 180 204 C200 206 210 210 220 220'], a, lt);
    // Distant mountains
    pp(g, ['M0 100 C20 80 40 70 60 80 C80 90 100 60 130 50 C150 44 170 60 180 80', 'M180 80 C200 50 230 40 260 50 C290 60 320 80 360 70'], a, lt);
    // Boardwalk on right hillside
    pp(g, ['M240 100 L340 130', 'M240 106 L340 136'], a);
    // Boardwalk supports
    for (let i = 0; i < 5; i++) {
      const x = 250 + i * 20;
      const y1 = 102 + i * 6;
      pp(g, [`M${x} ${y1} L${x} ${y1 + 30}`], a, lt);
    }
    // Boardwalk railing
    pp(g, ['M240 96 L340 126'], a, lt);
  },
  // 2: Figures - Bruno (left, closer)
  (g, a) => {
    // Bruno head (larger - selfie perspective)
    pp(g, ['M80 290 C78 266 88 248 106 242 C124 248 134 266 132 290 C134 306 130 318 124 326 C118 332 112 336 106 338 C100 336 94 332 88 326 C82 318 78 306 80 290'], a);
    // Bruno eyes
    pp(g, ['M92 284 C94 278 100 276 104 280 C108 284 106 290 102 292 C98 294 92 290 92 284 Z', 'M112 284 C114 278 120 276 124 280 C128 284 126 290 122 292 C118 294 112 290 112 284 Z'], a);
    fe(g, 'circle', { cx: 100, cy: 286, r: 3, fill: a ? HL : '#2C1810' }, a);
    fe(g, 'circle', { cx: 120, cy: 286, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Thick eyebrows
    pp(g, ['M88 274 C94 268 104 266 110 270', 'M116 270 C122 266 132 268 138 274'], a);
    // Nose
    pp(g, ['M108 280 C107 288 106 296 104 300', 'M100 304 C104 308 108 310 112 308'], a);
    // Smile
    pp(g, ['M92 316 C98 312 106 310 112 312 C118 310 122 314 126 318', 'M94 318 C102 324 112 326 124 318'], a);
    // Neck
    pp(g, ['M98 336 L96 350 M114 336 L116 350'], a);
    // Shoulders/body (cut off at bottom)
    pp(g, ['M60 380 C70 362 88 350 106 350 C124 350 142 362 152 380 L156 450 M60 380 L56 450'], a);
  },
  // 3: Figures - Grandpa (right, slightly behind)
  (g, a) => {
    // Grandpa head (slightly smaller - further from camera)
    pp(g, ['M220 280 C218 258 228 242 244 236 C260 242 270 258 268 280 C270 294 266 304 260 312 C254 318 248 322 244 324 C240 322 234 318 228 312 C222 304 218 294 220 280'], a);
    // Eyes (semi-closed, squinting in sun)
    pp(g, ['M232 276 C234 272 240 270 244 274 C246 278 244 282 240 282 C236 282 232 280 232 276 Z', 'M250 276 C252 272 258 270 262 274 C264 278 262 282 258 282 C254 282 250 280 250 276 Z'], a);
    fe(g, 'circle', { cx: 240, cy: 278, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 258, cy: 278, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // THICK DARK EYEBROWS (prominent!)
    pp(g, ['M228 266 C234 260 244 258 250 262', 'M254 262 C260 258 270 260 276 266'], a);
    pp(g, ['M230 268 C236 262 246 260 252 264', 'M252 264 C258 260 268 262 274 268'], a);
    // Nose
    pp(g, ['M246 272 C245 280 244 288 242 292', 'M238 296 C242 300 246 302 250 300'], a);
    // Smile
    pp(g, ['M232 308 C238 304 244 302 250 304 C256 302 260 306 264 310', 'M234 310 C242 316 252 316 262 310'], a);
    // Neck
    pp(g, ['M238 322 L236 336 M250 322 L252 336'], a);
    // Body
    pp(g, ['M208 366 C216 350 232 336 244 336 C256 336 272 350 280 366 L284 450 M208 366 L204 450'], a);
    // Hair (short gray)
    pp(g, ['M222 276 C220 260 228 244 242 238 C256 234 268 240 274 252 C278 260 278 272 276 280'], a);
    pp(g, ['M236 240 C244 236 254 236 262 242'], a, lt);
  },
  // 4: Clothing
  (g, a) => {
    // Bruno - white Quechua t-shirt
    pp(g, ['M72 358 C68 354 64 356 62 362 C60 368 64 372 70 370', 'M140 358 C144 354 148 356 150 362 C152 368 148 372 142 370'], a);
    // Logo hint
    const qt = ce('text', { x: 80, y: 392, fill: a ? HL : LP, 'font-size': '5', 'font-family': 'sans-serif' });
    qt.textContent = 'Quechua'; if (a) qt.classList.add('active-element'); g.appendChild(qt);
    // Grandpa - navy sweatshirt
    pp(g, ['M216 344 C212 340 208 342 206 348 C204 354 208 358 214 356', 'M272 344 C276 340 280 342 282 348 C284 354 280 358 274 356'], a);
    pp(g, ['M214 356 C224 360 236 362 244 362 C252 362 264 360 274 356'], a);
  },
  // 5: Bruno hair/beard (stippling) + details
  (g, a) => {
    // Hairline
    pp(g, ['M84 284 C82 268 90 250 104 244 C118 240 130 246 136 258 C140 266 140 278 138 288'], a);
    // Buzz dots
    const bhd = [[96,246],[106,242],[116,246],[90,256],[100,250],[110,248],[120,252],[130,258],[86,268],[96,260],[106,254],[116,256],[126,264],[136,272],[90,278],[100,268],[110,262],[120,264],[130,272]];
    bhd.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a));
    // Beard stubble
    const bbd = [[86,318],[90,322],[94,326],[98,330],[102,334],[106,336],[110,334],[114,330],[118,326],[122,322],[126,318],[92,328],[98,332],[104,336],[110,336],[116,332],[120,328]];
    bbd.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#4A3628' }, a));
  },
  // 6: Landscape details
  (g, a) => {
    // Sky
    pp(g, ['M0 0 L360 0 L360 30 L0 30'], a, lt);
    // Clouds
    pp(g, ['M40 20 C50 10 70 10 80 20 C90 10 100 14 106 20 C110 12 120 14 126 22 C130 16 140 20 140 26', 'M240 30 C250 20 270 18 280 28 C290 20 300 24 306 30'], a, lt);
    // Vegetation patches
    pp(g, ['M20 160 C30 154 40 158 50 154 C60 150 70 156 80 152', 'M280 100 C290 96 300 100 310 96 C320 92 330 98 340 94'], a, lt);
    // Rocky outcrops
    pp(g, ['M50 140 L60 120 L80 130 L70 150', 'M300 80 L310 64 L330 74 L320 90'], a, lt);
    // River/path at valley bottom
    pp(g, ['M150 214 C160 210 170 208 180 208 C190 208 200 210 210 214'], a, lt);
    // Boardwalk planks
    for (let i = 0; i < 8; i++) {
      const x = 244 + i * 12;
      const y = 101 + i * 3.6;
      pp(g, [`M${x} ${y} L${x+2} ${y+6}`], a, lt);
    }
  },
  // 7: Color - figures
  (g, a) => {
    // Bruno skin
    fl(g, 'M82 290 C80 268 90 250 108 244 C126 250 136 268 134 290 C136 306 132 318 126 326 C120 332 114 336 108 338 C102 336 96 332 90 326 C84 318 80 306 82 290 Z', '#EDBE8C', a);
    fe(g, 'ellipse', { cx: 74, cy: 286, rx: 6, ry: 10, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 138, cy: 286, rx: 6, ry: 10, fill: '#EDBE8C' }, false);
    // Bruno t-shirt (white)
    fl(g, 'M62 380 C72 364 90 352 108 352 C126 352 144 364 154 380 L158 448 L58 448 Z', '#FAFAFA', a);
    // Grandpa skin (tanned)
    fl(g, 'M222 280 C220 260 230 244 246 238 C262 244 272 260 270 280 C272 294 268 304 262 312 C256 318 250 322 246 324 C242 322 236 318 230 312 C224 304 220 294 222 280 Z', '#D7A86E', a);
    fe(g, 'ellipse', { cx: 214, cy: 278, rx: 5, ry: 9, fill: '#D7A86E' }, false);
    fe(g, 'ellipse', { cx: 276, cy: 278, rx: 5, ry: 9, fill: '#D7A86E' }, false);
    // Grandpa sweatshirt (navy)
    fl(g, 'M210 366 C218 352 234 338 246 338 C258 338 274 352 282 366 L286 448 L206 448 Z', '#1A237E', a);
    // Necks
    fe(g, 'rect', { x: 97, y: 336, width: 18, height: 14, rx: 3, fill: '#DEB07A' }, false);
    fe(g, 'rect', { x: 237, y: 322, width: 16, height: 14, rx: 3, fill: '#C8956E' }, false);
  },
  // 8: Color - landscape
  (g, a) => {
    // Sky gradient (blue)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 80, fill: '#1565C0', opacity: '0.3' }, a);
    fe(g, 'rect', { x: 0, y: 80, width: 360, height: 140, fill: '#42A5F5', opacity: '0.2' }, false);
    // Clouds
    fe(g, 'ellipse', { cx: 83, cy: 20, rx: 50, ry: 12, fill: '#FAFAFA', opacity: '0.4' }, false);
    fe(g, 'ellipse', { cx: 273, cy: 28, rx: 35, ry: 8, fill: '#FAFAFA', opacity: '0.3' }, false);
    // Near mountains (darker green)
    fl(g, 'M0 180 C20 120 60 60 100 40 C130 24 150 30 170 80 C180 110 180 160 180 220 L0 220 Z', '#33691E', false);
    fl(g, 'M180 220 C180 160 182 100 200 60 C220 30 250 20 290 40 C320 56 350 100 360 160 L360 220 Z', '#2E7D32', false);
    // Distant mountains (lighter, bluer)
    fl(g, 'M0 100 C20 80 40 70 60 80 C80 90 100 60 130 50 C150 44 170 60 180 80 L180 140 L0 140 Z', '#81C784', false);
    fl(g, 'M180 80 C200 50 230 40 260 50 C290 60 320 80 360 70 L360 140 L180 140 Z', '#90CAF9', false);
    // Boardwalk (wood)
    fl(g, 'M240 98 L340 128 L340 138 L240 108 Z', '#A1887F', false);
    // Rocky patches
    fe(g, 'path', { d: 'M50 140 L60 120 L80 130 L70 150 Z', fill: '#8D6E63', opacity: '0.3' }, false);
    fe(g, 'path', { d: 'M300 80 L310 64 L330 74 L320 90 Z', fill: '#8D6E63', opacity: '0.3' }, false);
    // Valley bottom (dark green)
    fl(g, 'M140 220 C150 212 165 208 180 206 C195 208 210 212 220 220 L220 220 L140 220 Z', '#1B5E20', false);
    // Grandpa hair
    fl(g, 'M224 276 C222 262 230 246 244 240 C258 236 270 242 276 254 C280 262 280 274 278 282 L274 280 C276 272 276 262 272 254 C268 246 260 240 250 242 C240 244 232 252 228 264 Z', '#9E9E9E', false);
    // Grandpa eyebrows fill
    fl(g, 'M230 268 C236 262 246 260 252 264 L250 268 C244 264 236 266 232 270 Z', '#37474F', false);
    fl(g, 'M252 264 C258 260 268 262 274 268 L272 270 C266 266 258 264 254 268 Z', '#37474F', false);
    // Bruno hair
    fl(g, 'M86 284 C84 270 92 252 106 246 C120 242 132 248 138 260 C142 268 142 280 140 288 L136 286 C138 278 138 268 134 260 C130 252 122 246 112 248 C102 250 94 258 90 270 Z', '#3E2C20', false);
  },
  // 9: Final details
  (g, a) => {
    // Eye shines
    fe(g, 'circle', { cx: 98, cy: 284, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 118, cy: 284, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 238, cy: 276, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 256, cy: 276, r: 1.5, fill: 'white' }, a);
    // Teeth
    fl(g, 'M96 318 L124 318 C120 324 112 326 108 326 C104 326 98 324 96 318 Z', '#FAFAFA', false);
    fl(g, 'M236 310 L262 310 C258 316 252 316 248 316 C244 316 238 316 236 310 Z', '#FAFAFA', false);
    // Bruno cheeks
    fe(g, 'ellipse', { cx: 90, cy: 308, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 122, cy: 308, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    // Quechua logo
    const qt2 = ce('text', { x: 82, y: 394, fill: '#9E9E9E', 'font-size': '5', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    qt2.textContent = 'QUECHUA'; g.appendChild(qt2);
    // Vegetation texture
    pp(g, ['M30 170 C34 166 38 168 42 166', 'M50 158 C54 154 58 156 62 154', 'M290 92 C294 88 298 90 302 88'], a, lt);
    // Sun glare
    fe(g, 'ellipse', { cx: 180, cy: 30, rx: 40, ry: 20, fill: '#FFF9C4', opacity: '0.08' }, false);
    // Mountain depth shadows
    pp(g, ['M100 120 C110 130 130 140 150 150', 'M280 100 C290 110 310 120 330 130'], a, lt);
  }
];
// ==============================================================
// SCENE 1: MIGUEL - Boy eating at table with red tablecloth,
// wine bottle, lemon drink, can, bowl, cup
// ==============================================================
const miguelLayers = [
  // 0: Composition - table line, Miguel placement zone
  (g, a) => {
    // Table edge (horizontal)
    pp(g, ['M0 240 L360 240'], a);
    // Table front
    pp(g, ['M0 240 L0 450 M360 240 L360 450'], a, lt);
    // Miguel zone guide (right side)
    pp(g, [
      'M190 20 L190 240',  // vertical guide
      'M190 130 L340 130',  // shoulder line
    ], a, lt);
    // Chair back hint
    pp(g, ['M200 60 L200 220 M340 60 L340 220 M200 60 L340 60'], a, lt);
  },

  // 1: Miguel body outline - sitting behind table, leaning forward
  (g, a) => {
    // Head
    pp(g, ['M236 80 C236 56 254 42 270 42 C286 42 304 56 304 80 C306 100 300 116 292 126 C284 134 276 140 270 142 C264 140 256 134 248 126 C240 116 236 100 236 80'], a);
    // Neck
    pp(g, ['M258 140 L256 155 M282 140 L284 155'], a);
    // Shoulders and torso
    pp(g, ['M220 175 C230 160 248 155 270 155 C292 155 310 160 320 175 L325 240 M220 175 L215 240'], a);
    // Left arm going to mouth
    pp(g, ['M225 180 C210 195 200 210 195 225 C192 232 196 238 205 236 L230 220 C240 208 248 190 254 170'], a);
    // Right arm holding cup
    pp(g, ['M315 180 C325 195 332 210 335 228 C336 234 332 238 326 236 L310 225'], a);
  },

  // 2: Miguel face details
  (g, a) => {
    // Eyes
    pp(g, ['M254 78 C256 72 264 70 268 74 C272 78 270 84 266 86 C262 88 256 84 254 78 Z'], a);
    pp(g, ['M276 78 C278 72 286 70 290 74 C294 78 292 84 288 86 C284 88 278 84 276 78 Z'], a);
    // Pupils
    fe(g, 'circle', { cx: 262, cy: 79, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 284, cy: 79, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M252 68 C258 64 266 63 270 66', 'M278 66 C282 63 290 64 296 68'], a);
    // Nose
    pp(g, ['M268 82 C267 88 266 94 264 98', 'M261 100 C264 104 268 106 272 106 C276 104 278 100 280 98'], a);
    // Open mouth - eating grin
    pp(g, ['M256 112 C260 108 268 107 274 108 C280 108 286 110 290 114', 'M256 112 C260 122 268 128 274 128 C280 128 286 122 290 114'], a);
    // Teeth
    pp(g, ['M258 114 L290 114', 'M264 114 L264 118 M270 114 L270 119 M276 114 L276 119 M282 114 L282 118'], a, lt);
    // Ears
    pp(g, ['M234 78 C228 74 224 80 224 88 C224 96 228 100 234 100', 'M306 78 C312 74 316 80 316 88 C316 96 312 100 306 100'], a);
  },

  // 3: Hair + hoodie
  (g, a) => {
    // Hair - short, dirty blonde, swept right
    pp(g, ['M238 76 C236 58 244 42 260 36 C272 32 286 34 296 40 C306 48 310 60 306 76', 'M242 72 C244 60 250 48 262 42 C274 38 286 42 294 50 C300 58 304 66 302 74'], a);
    // Hair texture
    pp(g, ['M256 38 C262 34 272 34 280 38', 'M248 48 C256 42 268 40 278 44', 'M244 58 C252 50 264 48 276 52'], a, lt);
    // Hoodie body
    pp(g, ['M228 166 C222 162 216 166 214 174 C212 182 216 188 224 186 L250 170', 'M312 166 C318 162 324 166 326 174 C328 182 324 188 316 186 L290 170'], a);
    // Hood neckline
    pp(g, ['M224 186 C240 192 256 194 270 194 C284 194 300 192 316 186'], a);
    // Drawstrings
    pp(g, ['M260 188 L256 210', 'M280 188 L284 210'], a, lt);
    // Center seam
    pp(g, ['M270 194 L270 240'], a, lt);
  },

  // 4: Hands + cup + food action
  (g, a) => {
    // Left hand near mouth with food
    pp(g, ['M248 162 C242 158 236 160 234 166 C232 172 236 176 242 174', 'M236 164 C232 158 230 152 232 148 C234 144 238 144 240 148', 'M240 160 C238 154 236 148 238 144 C240 140 244 142 244 146'], a);
    // Food piece
    pp(g, ['M230 142 C228 136 232 132 240 134 C244 136 244 142 240 144'], a);
    // Right hand + cup
    pp(g, ['M308 220 L306 248 C306 254 312 258 320 258 C328 258 332 254 332 248 L330 220 Z'], a);
    // Liquid
    pp(g, ['M310 230 C316 232 324 232 328 230'], a, lt);
    // Fingers on cup
    pp(g, ['M308 232 C304 234 302 240 304 244', 'M330 232 C334 234 336 240 334 244'], a);
  },

  // 5: Table - red cloth + bowl
  (g, a) => {
    // Tablecloth drape
    pp(g, ['M0 240 L360 240', 'M0 240 C10 244 20 248 20 260 L0 260', 'M360 240 C350 244 340 248 340 260 L360 260'], a);
    // Cloth folds
    pp(g, ['M40 242 C50 248 60 252 80 248', 'M180 242 C170 248 160 252 140 248', 'M220 242 C240 248 260 250 280 248'], a, lt);
    // Bowl
    pp(g, ['M230 260 C230 250 250 244 270 244 C290 244 310 250 310 260 C310 270 290 276 270 276 C250 276 230 270 230 260'], a);
    // Food in bowl
    pp(g, ['M236 256 C248 250 260 248 270 248 C280 248 292 250 304 256'], a, lt);
    // Moon on bowl
    pp(g, ['M266 266 C264 262 266 258 270 258 C268 260 268 264 270 266'], a, lt);
  },

  // 6: Bottles and can
  (g, a) => {
    // Wine bottle (Quinta do Cardo) - tall, dark, center-left
    pp(g, ['M140 130 L140 240 M160 130 L160 240', 'M140 130 C140 122 144 118 148 116 L152 116 C156 118 160 122 160 130'], a);
    // Wine bottle neck
    pp(g, ['M146 116 L146 98 M154 116 L154 98', 'M144 98 L156 98'], a);
    // Glass stopper (round glass ball)
    pp(g, ['M146 98 C144 94 144 88 150 84 C156 88 156 94 154 98'], a);
    pp(g, ['M148 84 C146 78 148 70 150 66 C152 70 154 78 152 84'], a);
    // Wine label area
    pp(g, ['M142 170 L158 170 L158 210 L142 210 Z'], a, lt);

    // Lemon drink bottle - shorter, wider, left of wine
    pp(g, ['M100 160 L100 240 M124 160 L124 240', 'M100 160 C100 152 106 148 110 146 L114 146 C118 148 124 152 124 160'], a);
    // Yellow cap
    pp(g, ['M106 146 L106 138 L118 138 L118 146'], a);
    // Label area
    pp(g, ['M102 180 L122 180 L122 220 L102 220 Z'], a, lt);

    // Red can - far left
    pp(g, ['M50 210 L50 250 C50 256 58 260 66 260 C74 260 82 256 82 250 L82 210 C82 204 74 200 66 200 C58 200 50 204 50 210 Z'], a);

    // Empty glass far right
    pp(g, ['M330 240 L332 260 C332 264 328 268 320 268 C312 268 308 264 308 260 L310 240'], a, lt);
  },

  // 7: Color - Miguel
  (g, a) => {
    // Skin
    fl(g, 'M238 80 C238 58 256 44 270 44 C284 44 302 58 302 80 C304 98 298 114 290 124 C282 132 274 138 270 140 C266 138 258 132 250 124 C242 114 238 98 238 80 Z', '#F5D0A9', a);
    // Ears
    fe(g, 'ellipse', { cx: 229, cy: 88, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 311, cy: 88, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Hair
    fl(g, 'M240 76 C238 60 246 44 262 38 C274 34 288 36 298 42 C308 50 312 62 308 76 L304 74 C306 64 302 54 294 48 C286 42 274 40 264 44 C252 48 246 58 244 72 Z', '#C4A265', a);
    // Hoodie
    fl(g, 'M220 175 C230 160 248 155 270 155 C292 155 310 160 320 175 L325 240 L215 240 Z', '#FFD740', a);
    // Hood
    fl(g, 'M228 166 C222 162 216 166 214 174 C212 182 216 188 224 186 C240 192 256 194 270 194 C284 194 300 192 316 186 C324 188 328 182 326 174 C324 166 318 162 312 166 L290 170 L250 170 Z', '#FFC107', a);
    // Hand skin
    fe(g, 'ellipse', { cx: 238, cy: 164, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
  },

  // 8: Color - table and objects
  (g, a) => {
    // Red tablecloth
    fe(g, 'rect', { x: 0, y: 240, width: 360, height: 210, fill: '#C62828' }, a);
    // Bowl
    fl(g, 'M232 260 C232 252 252 246 270 246 C288 246 308 252 308 260 C308 268 288 274 270 274 C252 274 232 268 232 260 Z', '#9E9E9E', a);
    // Food in bowl
    fl(g, 'M238 256 C250 250 262 248 270 248 C278 248 290 250 302 256 C296 258 282 260 270 260 C258 260 244 258 238 256 Z', '#F5DEB3', false);
    // Wine bottle
    fl(g, 'M142 132 L142 238 L158 238 L158 132 C158 124 156 120 152 118 L148 118 C144 120 142 124 142 132 Z', '#1B5E20', a);
    // Lemon drink
    fl(g, 'M102 162 L102 238 L122 238 L122 162 C122 154 118 150 114 148 L110 148 C106 150 102 154 102 162 Z', '#5D4037', a);
    // Yellow cap
    fe(g, 'rect', { x: 107, y: 139, width: 10, height: 9, rx: 1, fill: '#FDD835' }, false);
    // Red can
    fl(g, 'M52 212 L52 248 C52 254 58 258 66 258 C74 258 80 254 80 248 L80 212 C80 206 74 202 66 202 C58 202 52 206 52 212 Z', '#D32F2F', a);
    // Cup
    fl(g, 'M309 241 L311 259 C311 263 316 266 320 266 C324 266 329 263 329 259 L331 241 Z', '#E0E0E0', false);
    // Glass stopper
    fe(g, 'circle', { cx: 150, cy: 80, rx: 8, fill: '#E0E0E0', opacity: '0.5' }, false);
  },

  // 9: Final details - labels, glass stopper, background
  (g, a) => {
    // Eye shine
    fe(g, 'circle', { cx: 260, cy: 77, r: 1.8, fill: 'white' }, a);
    fe(g, 'circle', { cx: 282, cy: 77, r: 1.8, fill: 'white' }, a);
    // Cheeks
    fe(g, 'ellipse', { cx: 252, cy: 106, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 290, cy: 106, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.4' }, a);
    // Mouth color
    fl(g, 'M258 114 L288 114 C286 122 278 128 274 128 C268 128 260 122 258 114 Z', '#E57373', false);
    // Wine label text
    const wt = ce('text', { x: 144, y: 192, fill: '#FAFAFA', 'font-size': '4.5', 'font-family': 'serif' });
    wt.textContent = 'QUINTA'; g.appendChild(wt);
    const wt2 = ce('text', { x: 142, y: 198, fill: '#FAFAFA', 'font-size': '4.5', 'font-family': 'serif' });
    wt2.textContent = 'DO CARDO'; g.appendChild(wt2);
    // Lemon label
    const lt2 = ce('text', { x: 104, y: 200, fill: '#FDD835', 'font-size': '4', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    lt2.textContent = 'Lemon'; if (a) lt2.classList.add('active-element'); g.appendChild(lt2);
    // Stopper shine
    fe(g, 'circle', { cx: 148, cy: 76, r: 2, fill: 'white', opacity: '0.6' }, false);
    // Background wall hint
    pp(g, ['M0 0 L0 240', 'M360 0 L360 240'], a, lt);
    // Fridge hint (far left background)
    pp(g, ['M0 20 L40 20 L40 200 L0 200', 'M0 120 L40 120'], a, lt);
    fe(g, 'rect', { x: 0, y: 20, width: 40, height: 180, rx: 2, fill: '#546E7A', opacity: '0.15' }, false);
    // Chair back
    fe(g, 'rect', { x: 202, y: 62, width: 136, height: 155, rx: 6, fill: '#37474F', opacity: '0.12' }, false);
    // Food crumb
    fl(g, 'M230 138 C228 132 232 128 240 130 C244 132 244 138 240 140 Z', '#F5DEB3', a);
    // Tablecloth wrinkle highlights
    pp(g, ['M60 260 C80 256 100 258 120 260', 'M200 258 C220 254 240 256 260 258'], a, lt);
  }
];

// ==============================================================
// SCENE 2: SANDRA - Woman playing dominoes at checkered table,
// pink jacket, black top, phone and remote on table
// ==============================================================
const sandraLayers = [
  // 0: Composition - checkered table, Sandra zone
  (g, a) => {
    // Table edge
    pp(g, ['M0 250 L360 250'], a);
    // Checkered pattern guides
    for (let x = 0; x < 360; x += 40) { pp(g, [`M${x} 250 L${x} 450`], a, lt); }
    for (let y = 250; y < 450; y += 30) { pp(g, [`M0 ${y} L360 ${y}`], a, lt); }
    // Sandra center guide
    pp(g, ['M120 20 L120 250 M240 20 L240 250', 'M120 130 L240 130'], a, lt);
  },

  // 1: Sandra body - sitting, leaning slightly toward dominoes
  (g, a) => {
    // Head
    pp(g, ['M152 90 C150 66 162 48 180 42 C198 48 210 66 208 90 C210 106 206 120 198 132 C192 140 186 146 180 148 C174 146 168 140 162 132 C154 120 150 106 152 90'], a);
    // Neck
    pp(g, ['M170 146 L168 162 M190 146 L192 162'], a);
    // Shoulders + body
    pp(g, ['M130 190 C140 170 160 162 180 162 C200 162 220 170 230 190 L234 250 M130 190 L126 250'], a);
    // Left arm
    pp(g, ['M134 195 C118 210 106 230 100 248'], a);
    // Right arm
    pp(g, ['M226 195 C242 210 254 230 260 248'], a);
  },

  // 2: Sandra face
  (g, a) => {
    // Eyes (looking down)
    pp(g, ['M164 88 C168 82 176 80 180 84 C184 88 182 94 178 96 C174 98 166 94 164 88 Z'], a);
    pp(g, ['M186 88 C190 82 198 80 202 84 C206 88 204 94 200 96 C196 98 188 94 186 88 Z'], a);
    // Pupils (looking down)
    fe(g, 'circle', { cx: 174, cy: 90, r: 3, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 196, cy: 90, r: 3, fill: a ? HL : '#5E4023' }, a);
    // Eyelashes
    pp(g, ['M164 86 C162 84 161 82 162 80', 'M202 84 C204 82 205 81 206 82'], a, lt);
    // Eyebrows
    pp(g, ['M160 76 C168 70 178 69 184 72', 'M186 72 C192 69 202 70 210 76'], a);
    // Nose
    pp(g, ['M178 84 C177 92 176 100 174 106', 'M170 108 C174 112 178 114 182 114 C186 112 188 108 190 106'], a);
    // Gentle smile
    pp(g, ['M166 124 C170 120 176 118 180 120 C184 118 190 120 194 124', 'M166 124 C172 130 178 134 180 134 C182 134 188 130 194 124'], a);
  },

  // 3: Hair - wavy, ponytail, loose strands
  (g, a) => {
    // Hair volume
    pp(g, ['M150 86 C146 62 156 40 174 32 C190 26 206 30 216 42 C224 52 226 68 222 86'], a);
    pp(g, ['M156 82 C158 68 164 52 176 44 C188 38 200 42 208 52 C214 62 216 74 216 84'], a);
    // Ponytail
    pp(g, ['M210 46 C222 40 234 44 238 54 C244 66 246 82 244 96 C242 108 238 118 232 126'], a);
    // Hair band
    pp(g, ['M208 44 C212 40 218 40 222 44 C218 48 212 48 208 44'], a);
    // Loose strands
    pp(g, ['M154 82 C150 92 148 106 150 118 C152 128 156 136 158 142', 'M220 82 C224 92 226 104 224 116'], a, lt);
    // Wave texture
    pp(g, ['M166 38 C176 32 188 30 198 36', 'M158 52 C166 44 178 40 190 44', 'M230 50 C236 56 240 68 242 80', 'M234 62 C238 70 240 80 238 90'], a, lt);
  },

  // 4: Clothing - pink jacket, black top
  (g, a) => {
    // Jacket shoulders
    pp(g, ['M130 190 C140 170 160 162 180 162 C200 162 220 170 230 190'], a);
    // Jacket opening V
    pp(g, ['M160 168 L172 220 L178 250', 'M200 168 L188 220 L182 250'], a);
    // Collar
    pp(g, ['M160 168 C156 164 150 164 148 170 C146 176 150 180 156 178', 'M200 168 C204 164 210 164 212 170 C214 176 210 180 204 178'], a);
    // V-neck top
    pp(g, ['M164 170 C170 176 176 200 180 220', 'M196 170 C190 176 184 200 180 220'], a);
    // Cursive text on top
    pp(g, ['M172 196 C174 192 178 194 180 190 C182 192 186 190 188 194'], a, lt);
    // Jacket folds
    pp(g, ['M150 180 C148 200 146 220 144 240', 'M210 180 C212 200 214 220 216 240'], a, lt);
  },

  // 5: Hands holding dominoes
  (g, a) => {
    // Left hand + arm to table
    pp(g, ['M100 248 C96 240 90 244 88 250 C86 256 90 260 96 258'], a);
    // Fingers
    pp(g, ['M90 248 C86 242 82 236 80 230 C78 226 80 222 84 222', 'M88 252 C82 248 78 240 76 234 C74 230 76 226 80 226', 'M94 246 C98 240 100 234 98 228 C96 224 92 224 90 228'], a);
    // Domino in left hand
    pp(g, ['M76 218 L90 218 L90 234 L76 234 Z', 'M76 226 L90 226'], a);
    fe(g, 'circle', { cx: 80, cy: 222, r: 1.2, fill: a ? HL : P }, a);
    fe(g, 'circle', { cx: 86, cy: 222, r: 1.2, fill: a ? HL : P }, a);
    fe(g, 'circle', { cx: 83, cy: 230, r: 1.2, fill: a ? HL : P }, a);

    // Right hand
    pp(g, ['M260 248 C264 240 270 244 272 250 C274 256 270 260 264 258'], a);
    pp(g, ['M268 248 C272 242 276 236 278 230 C280 226 278 222 274 222', 'M270 252 C276 248 280 240 282 234 C284 230 282 226 278 226', 'M264 246 C260 240 258 234 260 228 C262 224 266 224 268 228'], a);
    // Domino in right hand
    pp(g, ['M270 218 L284 218 L284 234 L270 234 Z', 'M270 226 L284 226'], a);
    fe(g, 'circle', { cx: 275, cy: 222, r: 1.2, fill: a ? HL : P }, a);
    fe(g, 'circle', { cx: 280, cy: 222, r: 1.2, fill: a ? HL : P }, a);
    fe(g, 'circle', { cx: 275, cy: 230, r: 1.2, fill: a ? HL : P }, a);
    fe(g, 'circle', { cx: 280, cy: 230, r: 1.2, fill: a ? HL : P }, a);
  },

  // 6: Table - dominoes played, phone, remote
  (g, a) => {
    // Played dominoes chain on table
    const dominos = [
      { x: 130, y: 270, r: 0 }, { x: 146, y: 268, r: 5 }, { x: 162, y: 272, r: -3 },
      { x: 178, y: 269, r: 8 }, { x: 194, y: 274, r: -5 }, { x: 210, y: 270, r: 2 },
    ];
    dominos.forEach(({ x, y, r }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 7} ${y + 5})` });
      const rect = ce('rect', { x, y, width: 14, height: 10, rx: 1, fill: 'none' });
      sk(rect, a);
      dg.appendChild(rect);
      const line = ce('line', { x1: x + 7, y1: y, x2: x + 7, y2: y + 10 });
      lt(line, a);
      dg.appendChild(line);
      // Random dots
      fe(dg, 'circle', { cx: x + 3, cy: y + 3, r: 0.8, fill: a ? HL : P }, false);
      fe(dg, 'circle', { cx: x + 10, cy: y + 7, r: 0.8, fill: a ? HL : P }, false);
      g.appendChild(dg);
    });

    // Phone (right side of table)
    pp(g, ['M280 290 L310 290 L310 310 L280 310 Z'], a);
    pp(g, ['M282 292 L308 292 L308 308 L282 308 Z'], a, lt);

    // TV remote (far right)
    pp(g, ['M320 280 L338 280 L338 320 L320 320 Z'], a);
    pp(g, ['M326 286 L332 286', 'M326 292 L332 292', 'M324 300 L326 300 M330 300 L332 300 M334 300 L336 300'], a, lt);
  },

  // 7: Color - Sandra
  (g, a) => {
    // Skin
    fl(g, 'M154 90 C152 68 164 50 180 44 C196 50 208 68 206 90 C208 106 204 120 196 132 C190 140 184 146 180 148 C176 146 170 140 164 132 C156 120 152 106 154 90 Z', '#FADCC2', a);
    // Hair
    fl(g, 'M152 86 C148 64 158 42 176 34 C192 28 208 32 218 44 C226 54 228 70 224 86 L218 84 C220 72 216 58 210 50 C202 42 192 38 180 42 C168 46 160 58 158 72 Z', '#8B6538', a);
    // Ponytail
    fl(g, 'M212 46 C224 42 236 46 240 56 C246 68 248 84 246 98 C244 110 240 120 234 128 L230 124 C236 116 240 106 242 94 C244 82 242 66 238 56 C234 48 226 44 216 48 Z', '#8B6538', false);
    // Jacket (pink)
    fl(g, 'M132 190 C142 172 162 164 180 164 C198 164 218 172 228 190 L232 248 L128 248 Z', '#F48FB1', a);
    // Black top V
    fl(g, 'M166 170 C172 178 178 200 180 220 C182 200 188 178 194 170 L200 168 C204 164 210 164 212 170 L210 180 C212 200 214 220 216 240 L144 240 C146 220 148 200 150 180 L148 170 C146 164 150 164 156 168 Z', '#F48FB1', false);
    fl(g, 'M166 172 C172 180 178 202 180 222 C182 202 188 180 194 172 Z', '#37474F', a);
    // Neck skin
    fe(g, 'rect', { x: 169, y: 146, width: 22, height: 18, rx: 4, fill: '#F0C8A8' }, false);
  },

  // 8: Color - table (checkered), dominoes, phone
  (g, a) => {
    // Checkered tablecloth
    for (let y = 250; y < 450; y += 30) {
      for (let x = 0; x < 360; x += 40) {
        const dark = ((x / 40 + y / 30) % 2 === 0);
        fe(g, 'rect', { x, y, width: 40, height: 30, fill: dark ? '#A1887F' : '#EFEBE9' }, false);
      }
    }
    // Domino fills
    const dx = [130, 146, 162, 178, 194, 210];
    dx.forEach(x => {
      fe(g, 'rect', { x: x + 0.5, y: 270.5, width: 13, height: 9, rx: 1, fill: '#ECEFF1' }, false);
    });
    // Phone fill
    fe(g, 'rect', { x: 281, y: 291, width: 28, height: 18, rx: 2, fill: '#CFD8DC' }, a);
    // Remote fill
    fe(g, 'rect', { x: 321, y: 281, width: 16, height: 38, rx: 2, fill: '#263238' }, a);
  },

  // 9: Final details
  (g, a) => {
    // Eye shine
    fe(g, 'circle', { cx: 172, cy: 88, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 194, cy: 88, r: 1.5, fill: 'white' }, a);
    // Cheeks
    fe(g, 'ellipse', { cx: 164, cy: 114, rx: 8, ry: 5, fill: '#F48FB1', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 198, cy: 114, rx: 8, ry: 5, fill: '#F48FB1', opacity: '0.3' }, a);
    // Lip color
    fl(g, 'M168 124 C176 128 184 128 192 124 C188 130 182 134 180 134 C178 134 172 130 168 124 Z', '#E57373', false);
    // Cursive text on top
    const ct = ce('text', { x: 170, y: 198, fill: '#B0BEC5', 'font-size': '4.5', 'font-style': 'italic', 'font-family': 'cursive' });
    ct.textContent = "It's all good"; if (a) ct.classList.add('active-element'); g.appendChild(ct);
    // Watch
    fe(g, 'rect', { x: 96, y: 250, width: 8, height: 6, rx: 2, fill: '#78909C' }, a);
    // Hair highlights
    pp(g, ['M168 40 C172 36 178 36 182 40', 'M190 36 C194 34 200 36 202 40'], a, lt);
    // Background - kitchen hints
    pp(g, ['M0 0 L0 30 L80 30 L80 0', 'M0 15 L80 15'], a, lt); // cabinet
    fe(g, 'rect', { x: 2, y: 2, width: 76, height: 12, rx: 2, fill: '#ECEFF1', opacity: '0.2' }, false);
    // Domino dots on played pieces
    [130, 146, 162, 178, 194, 210].forEach(x => {
      fe(g, 'circle', { cx: x + 4, cy: 273, r: 0.8, fill: '#333' }, false);
      fe(g, 'circle', { cx: x + 10, cy: 277, r: 0.8, fill: '#333' }, false);
    });
  }
];

// ==============================================================
// SCENE 3: BRUNO + MIGUEL - Father and son at café table,
// Bruno left (dark jacket, orange), Miguel right (navy "95" sweater),
// toy in hands, blue ball, third person background
// ==============================================================
const brunomiguelLayers = [
  // 0: Composition - two figures side by side, table below
  (g, a) => {
    // Table/counter line
    pp(g, ['M0 340 L360 340'], a);
    // Bruno zone (left)
    pp(g, ['M10 20 L10 340 M150 20 L150 340', 'M10 140 L150 140'], a, lt);
    // Miguel zone (center-right)
    pp(g, ['M155 50 L155 340 M280 50 L280 340', 'M155 140 L280 140'], a, lt);
    // Third person zone (far right, just torso)
    pp(g, ['M285 40 L285 200 L350 200 L350 40'], a, lt);
  },

  // 1: Bruno - body and face (angular, lean, looking at Miguel)
  (g, a) => {
    // Head
    pp(g, ['M48 100 C46 76 56 56 72 48 C86 42 98 46 106 56 C114 66 118 82 116 100 C118 116 114 130 108 140 C102 150 94 156 86 160 C78 156 70 150 64 140 C58 130 54 116 48 100'], a);
    // Face details
    pp(g, ['M62 96 C64 90 72 88 76 92 C80 96 78 102 74 104 C70 106 64 102 62 96 Z', 'M86 96 C88 90 96 88 100 92 C104 96 102 102 98 104 C94 106 88 102 86 96 Z'], a);
    fe(g, 'circle', { cx: 70, cy: 98, r: 3, fill: a ? HL : '#2C1810' }, a);
    fe(g, 'circle', { cx: 94, cy: 98, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Thick eyebrows
    pp(g, ['M58 86 C64 80 74 79 80 82', 'M88 82 C94 79 104 80 110 86'], a);
    // Nose
    pp(g, ['M84 88 C83 96 82 104 80 110', 'M76 114 C80 118 84 120 88 120 C92 118 94 114 96 110'], a);
    // Mouth
    pp(g, ['M70 130 C76 126 82 125 86 126 C90 125 94 126 98 130', 'M72 132 C78 136 84 138 88 138 C92 138 96 136 100 132'], a);
    // Neck
    pp(g, ['M76 158 L74 172 M96 158 L98 172'], a);
    // Body
    pp(g, ['M40 200 C50 180 66 172 86 172 C106 172 122 180 132 200 L136 340 M40 200 L36 340'], a);
  },

  // 2: Bruno - hair (buzzed) and beard (stubble)
  (g, a) => {
    // Hairline
    pp(g, ['M54 94 C52 78 58 60 72 52 C84 46 96 48 104 58 C112 68 114 82 112 94'], a);
    // Buzz dots
    const hd = [[66,52],[76,48],[86,50],[96,54],[62,62],[72,56],[82,52],[92,56],[102,62],[58,72],[68,64],[78,58],[88,60],[98,66],[108,74],[56,84],[66,74],[76,66],[86,66],[96,72],[106,82],[60,90],[70,82],[80,74],[90,76],[100,84],[110,92]];
    hd.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a); });
    // Beard stubble
    const bd = [[58,132],[62,136],[66,140],[70,144],[74,148],[78,152],[82,154],[86,154],[90,152],[94,148],[98,144],[102,140],[106,136],[110,132],[66,148],[72,150],[78,154],[84,156],[90,154],[96,150],[100,146],[74,126],[100,126],[70,128],[102,128]];
    bd.forEach(([cx, cy]) => { fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#4A3628' }, a); });
  },

  // 3: Bruno - jacket (dark + orange accents + PESSOAL)
  (g, a) => {
    // Collar
    pp(g, ['M66 172 C62 168 56 168 54 174 C52 180 56 184 62 182', 'M106 172 C110 168 116 168 118 174 C120 180 116 184 110 182', 'M62 182 C72 186 80 188 86 188 C92 188 100 186 110 182'], a);
    // Zipper
    pp(g, ['M86 188 L86 340'], a);
    for (let y = 194; y < 335; y += 8) { pp(g, [`M84 ${y} L88 ${y}`], a, lt); }
    // Orange patches
    pp(g, ['M44 204 L58 200 L58 212 L44 216 Z', 'M128 204 L114 200 L114 212 L128 216 Z'], a);
    // PESSOAL logo
    pp(g, ['M56 224 L80 224 L80 240 L56 240 Z'], a);
    pp(g, ['M60 230 L62 230 L62 236 L60 236', 'M64 230 L68 230 L68 234 L64 234 L64 238'], a, lt);
    // Logo dots
    fe(g, 'circle', { cx: 64, cy: 238, r: 1.5, fill: '#FF6F00' }, a);
    fe(g, 'circle', { cx: 69, cy: 238, r: 1.5, fill: '#4CAF50' }, a);
    fe(g, 'circle', { cx: 74, cy: 238, r: 1.5, fill: '#2196F3' }, a);
    // Zipper pull
    fe(g, 'rect', { x: 83, y: 188, width: 6, height: 8, rx: 1, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
  },

  // 4: Miguel - body and face (round child face, looking down)
  (g, a) => {
    // Head
    pp(g, ['M188 110 C188 90 200 76 216 72 C232 76 244 90 244 110 C246 126 240 138 234 146 C228 152 222 156 216 158 C210 156 204 152 198 146 C192 138 188 126 188 110'], a);
    // Eyes (looking down)
    pp(g, ['M200 106 C202 100 208 98 212 102 C216 106 214 112 210 114 C206 116 200 112 200 106 Z', 'M222 106 C224 100 230 98 234 102 C238 106 236 112 232 114 C228 116 222 112 222 106 Z'], a);
    fe(g, 'circle', { cx: 208, cy: 108, r: 3, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 230, cy: 108, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows
    pp(g, ['M198 98 C204 94 212 93 216 96', 'M224 96 C228 93 236 94 242 98'], a);
    // Nose
    pp(g, ['M214 102 C213 108 212 114 210 118', 'M207 120 C210 124 214 126 218 126 C222 124 224 120 226 118'], a);
    // Mouth (slightly open)
    pp(g, ['M206 134 C210 130 214 129 218 130 C222 129 226 130 230 134', 'M208 136 C214 140 222 140 228 136'], a);
    // Hair (darker in this photo, short)
    pp(g, ['M190 106 C188 88 196 72 210 66 C224 62 236 66 244 76 C250 86 252 96 248 108'], a);
    pp(g, ['M194 102 C196 86 202 74 214 70 C226 68 236 72 242 80 C246 88 248 96 246 104'], a);
    // Hair texture
    pp(g, ['M206 68 C212 64 220 64 226 68', 'M200 76 C208 70 218 68 228 72', 'M196 86 C204 78 214 76 224 80'], a, lt);
    // Neck + body
    pp(g, ['M208 156 L206 168 M224 156 L226 168'], a);
    pp(g, ['M170 198 C180 178 200 168 216 168 C232 168 252 178 262 198 L266 340 M170 198 L166 340'], a);
  },

  // 5: Miguel - sweater "95" + hands with toy
  (g, a) => {
    // Crew neck
    pp(g, ['M200 170 C208 174 216 176 224 174 C228 172 232 170 234 168'], a);
    // "95" on chest
    const t95 = ce('text', { x: 204, y: 220, fill: a ? HL : P, 'font-size': '16', 'font-weight': 'bold', 'font-family': 'Arial' });
    t95.textContent = '95'; if (a) t95.classList.add('active-element'); g.appendChild(t95);
    // Hands holding toy (centered, below face)
    pp(g, ['M196 260 C190 254 184 256 182 262 C180 268 184 272 190 270', 'M236 260 C242 254 248 256 250 262 C252 268 248 272 242 270'], a);
    // Fingers
    pp(g, ['M184 260 C180 254 176 248 178 244 C180 240 184 240 186 244', 'M246 260 C250 254 254 248 252 244 C250 240 246 240 244 244'], a);
    // Toy (colorful object - blue and red)
    pp(g, ['M194 244 C194 236 202 230 214 230 C226 230 234 236 234 244 C234 252 226 256 214 256 C202 256 194 252 194 244 Z'], a);
    pp(g, ['M214 230 L214 256'], a, lt); // divide
    // Small text "YEARS" under 95
    const ty = ce('text', { x: 207, y: 230, fill: a ? HL : LP, 'font-size': '5', 'font-family': 'Arial' });
    ty.textContent = 'YEARS'; if (a) ty.classList.add('active-element'); g.appendChild(ty);
  },

  // 6: Table, objects, third person background
  (g, a) => {
    // Table/counter
    pp(g, ['M0 340 L360 340', 'M0 340 L0 450 M360 340 L360 450'], a);
    // Blue ball on table
    pp(g, ['M180 336 C180 324 188 316 200 316 C212 316 220 324 220 336'], a);
    // White cup
    pp(g, ['M244 320 L242 340 M264 320 L262 340', 'M242 340 C246 344 256 344 262 340', 'M244 320 L264 320'], a);
    // Bruno's gesturing hand
    pp(g, ['M40 200 C28 216 20 240 18 264 C16 280 20 290 28 294', 'M28 294 C36 286 46 268 56 248 C62 234 66 222 68 214'], a);
    pp(g, ['M54 242 C48 236 42 230 38 226 C34 222 36 218 40 218', 'M56 246 C50 240 44 232 42 228 C40 224 42 220 46 220', 'M60 250 C64 244 66 236 64 230 C62 226 58 224 54 228'], a);

    // Third person (right, only torso visible)
    pp(g, ['M290 50 C296 46 310 44 320 46 C336 50 348 60 350 80 L352 200 M286 80 L284 200'], a, lt);
    // Third person's hands
    pp(g, ['M340 160 C346 170 348 180 344 190', 'M290 170 C286 178 284 188 286 196'], a, lt);
    // Napkin/paper on table
    pp(g, ['M270 328 L300 328 L300 340 L270 340 Z'], a, lt);
  },

  // 7: Color - figures
  (g, a) => {
    // Bruno skin
    fl(g, 'M50 100 C48 78 58 58 74 50 C88 44 100 48 108 58 C116 68 120 84 118 100 C120 116 116 130 110 140 C104 150 96 156 88 160 C80 156 72 150 66 140 C60 130 56 116 50 100 Z', '#EDBE8C', a);
    fe(g, 'ellipse', { cx: 42, cy: 96, rx: 6, ry: 10, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 122, cy: 96, rx: 6, ry: 10, fill: '#EDBE8C' }, false);
    // Bruno jacket
    fl(g, 'M40 200 C50 180 66 172 86 172 C106 172 122 180 132 200 L136 340 L36 340 Z', '#1B2632', a);
    // Collar
    fl(g, 'M66 172 C62 168 56 168 54 174 C52 180 56 184 62 182 C72 186 80 188 86 188 C92 188 100 186 110 182 C116 184 120 180 118 174 C116 168 110 168 106 172 Z', '#263842', false);
    // Orange patches
    fe(g, 'path', { d: 'M46 206 L60 202 L60 210 L46 214 Z', fill: '#FF6F00' }, a);
    fe(g, 'path', { d: 'M126 206 L112 202 L112 210 L126 214 Z', fill: '#FF6F00' }, a);
    // Zipper
    fe(g, 'rect', { x: 84, y: 188, width: 4, height: 152, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 82, y: 188, width: 8, height: 8, rx: 1, fill: '#FF6F00' }, false);

    // Miguel skin
    fl(g, 'M190 110 C190 92 202 78 218 74 C234 78 246 92 246 110 C248 126 242 140 236 148 C230 154 224 158 218 160 C212 158 206 154 200 148 C194 140 190 126 190 110 Z', '#F5D0A9', a);
    // Miguel sweater (navy)
    fl(g, 'M172 198 C182 180 202 170 218 170 C234 170 254 180 264 198 L268 340 L168 340 Z', '#1A237E', a);

    // Third person (brown shirt)
    fl(g, 'M288 80 C292 54 310 46 322 48 C338 52 350 62 352 82 L354 200 L286 200 Z', '#795548', false);
    // Neck skin
    fe(g, 'rect', { x: 76, y: 158, width: 22, height: 14, rx: 4, fill: '#DEB07A' }, false);
    fe(g, 'rect', { x: 208, y: 156, width: 18, height: 12, rx: 4, fill: '#F0C8A0' }, false);
  },

  // 8: Color - scene
  (g, a) => {
    // Table/counter dark
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: '#37474F' }, a);
    // Blue ball
    fl(g, 'M182 336 C182 326 190 318 200 318 C210 318 218 326 218 336 Z', '#1E88E5', a);
    // Ball highlight
    fe(g, 'ellipse', { cx: 196, cy: 324, rx: 4, ry: 3, fill: '#64B5F6', opacity: '0.5' }, false);
    // White cup
    fl(g, 'M245 322 L243 338 C247 342 257 342 261 338 L263 322 Z', '#FAFAFA', a);
    // Toy color (blue + red halves)
    fl(g, 'M196 244 C196 238 204 232 214 232 L214 254 C204 254 196 250 196 244 Z', '#1E88E5', a);
    fl(g, 'M214 232 C224 232 232 238 232 244 C232 250 224 254 214 254 Z', '#E53935', a);
    // Napkin
    fe(g, 'rect', { x: 271, y: 329, width: 28, height: 10, fill: '#FAFAFA' }, false);
    // Hair fills
    fl(g, 'M56 94 C54 80 60 62 74 54 C86 48 98 50 106 60 C114 70 116 84 114 94 L110 92 C112 82 108 72 102 64 C96 56 86 52 76 56 C66 60 60 72 58 86 Z', '#3E2C20', false);
    fl(g, 'M192 106 C190 90 198 74 212 68 C226 64 238 68 246 78 C252 88 254 98 250 108 L246 104 C248 96 246 86 242 80 C236 72 228 68 218 70 C208 72 200 80 196 92 Z', '#4E342E', false);
    // Warm ambient background
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 340, rx: 0, fill: '#FFF8E1', opacity: '0.1' }, false);
  },

  // 9: Final details
  (g, a) => {
    // Eye shines
    fe(g, 'circle', { cx: 68, cy: 96, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 92, cy: 96, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 206, cy: 106, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 228, cy: 106, r: 1.5, fill: 'white' }, a);
    // PESSOAL text
    const pt = ce('text', { x: 58, y: 234, fill: '#ECEFF1', 'font-size': '5', 'font-weight': 'bold', 'font-family': 'Arial' });
    pt.textContent = 'PESSOAL'; if (a) pt.classList.add('active-element'); g.appendChild(pt);
    fe(g, 'circle', { cx: 64, cy: 238, r: 1.5, fill: '#FF6F00' }, false);
    fe(g, 'circle', { cx: 69, cy: 238, r: 1.5, fill: '#4CAF50' }, false);
    fe(g, 'circle', { cx: 74, cy: 238, r: 1.5, fill: '#2196F3' }, false);
    // "95" on Miguel's sweater
    const t95 = ce('text', { x: 206, y: 222, fill: '#ECEFF1', 'font-size': '14', 'font-weight': 'bold', 'font-family': 'Arial' });
    t95.textContent = '95'; if (a) t95.classList.add('active-element'); g.appendChild(t95);
    const ty = ce('text', { x: 209, y: 230, fill: '#B0BEC5', 'font-size': '4.5', 'font-family': 'Arial' });
    ty.textContent = 'YEARS'; g.appendChild(ty);
    // Beard shadow (Bruno)
    fl(g, 'M62 134 C68 144 76 152 86 156 C96 152 102 146 108 138 C104 144 96 150 86 152 C76 150 68 144 62 134 Z', '#5D4037', false);
    // Miguel cheeks
    fe(g, 'ellipse', { cx: 202, cy: 126, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 234, cy: 126, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    // Background cafe hints - vertical lines
    pp(g, ['M0 0 L0 340', 'M360 0 L360 340'], a, lt);
    // Ceiling light hint
    pp(g, ['M140 0 L140 20 M220 0 L220 20', 'M140 20 L220 20'], a, lt);
    fe(g, 'rect', { x: 142, y: 10, width: 76, height: 10, rx: 2, fill: '#FFF9C4', opacity: '0.2' }, false);
    // Table reflection
    pp(g, ['M40 360 C80 356 120 358 160 360', 'M200 358 C240 354 280 356 320 360'], a, lt);
    // Hand skin fill for Bruno's gesture
    fe(g, 'ellipse', { cx: 48, cy: 240, rx: 12, ry: 10, fill: '#EDBE8C' }, false);
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
  const layers = drawingData[memberId];
  if (!layers) return null;
  const svg = ce('svg', { viewBox: VB, width: '100%', height: '100%', xmlns: SVG_NS });
  svg.appendChild(ce('rect', { width: 360, height: 450, rx: 10, fill: '#FEFCF8', stroke: '#E8E0D4', 'stroke-width': 0.8 }));
  for (let y = 25; y < 445; y += 14) svg.appendChild(ce('line', { x1: 12, y1: y, x2: 348, y2: y, stroke: '#F2EDE6', 'stroke-width': 0.3 }));
  for (let i = 7; i <= step && i < layers.length; i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step); svg.appendChild(grp); }
  for (let i = 0; i < Math.min(step + 1, 7, layers.length); i++) { const grp = ce('g', { class: `layer layer-${i}` }); layers[i](grp, i === step); svg.appendChild(grp); }
  return svg;
}
