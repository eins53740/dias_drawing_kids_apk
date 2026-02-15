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

