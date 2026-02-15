
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
