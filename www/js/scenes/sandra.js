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
    // Skin — face
    fl(g, 'M 180 44 C 157 44 142 60 140 80 C 138 100 142 116 150 128 C 158 140 168 148 180 150 C 192 148 202 140 210 128 C 218 116 222 100 220 80 C 218 60 203 44 180 44 Z', '#FADCC2', a);
    // Neck skin
    fe(g, 'rect', { x: 169, y: 144, width: 22, height: 20, rx: 5, fill: '#F0C8A8' }, false);
    // Ears skin
    fe(g, 'ellipse', { cx: 134, cy: 88, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 226, cy: 88, rx: 5, ry: 8, fill: '#F0C8A8' }, false);

    // Hair fill — main mass
    fl(g, 'M 150 84 C 146 64 154 44 170 34 C 178 30 188 28 198 30 C 212 34 224 46 228 64 C 230 74 230 84 228 92 L 224 90 C 226 82 226 72 224 62 C 220 48 210 38 198 34 C 190 32 180 34 172 38 C 160 46 152 60 154 80 Z', '#8B6538', a);
    // Ponytail fill
    fl(g, 'M 222 52 C 232 46 244 48 250 56 C 256 66 258 80 258 96 C 258 112 254 126 248 136 C 244 142 240 146 236 148 L 240 140 C 246 130 250 116 250 102 C 250 86 248 70 244 60 C 240 54 232 50 224 54 Z', '#8B6538', false);
    // Hair elastic fill
    fl(g, 'M 222 48 C 226 44 232 42 236 44 C 240 46 242 50 240 54 C 238 58 232 58 228 56 C 224 54 222 52 222 48 Z', '#6D4C41', false);
    // Loose strand fills (darker tint)
    fl(g, 'M 152 78 C 150 88 148 100 150 114 C 152 126 154 136 158 144 L 154 146 C 150 138 146 126 144 114 C 142 100 144 88 148 76 Z', '#7A5A30', false);

    // Pink cardigan fill
    fl(g, 'M 120 180 C 130 170 150 164 168 162 L 164 166 C 162 176 160 190 158 206 C 156 220 154 236 152 250 L 100 250 L 104 210 C 106 196 112 188 120 180 Z', '#F48FB1', a);
    fl(g, 'M 240 180 C 230 170 210 164 192 162 L 196 166 C 198 176 200 190 202 206 C 204 220 206 236 208 250 L 260 250 L 256 210 C 254 196 248 188 240 180 Z', '#F48FB1', false);
    // Cardigan collar fills
    fl(g, 'M 164 166 C 160 162 154 160 150 164 C 146 168 146 174 150 178 C 154 182 158 180 160 176 Z', '#E91E8E', false);
    fl(g, 'M 196 166 C 200 162 206 160 210 164 C 214 168 214 174 210 178 C 206 182 202 180 200 176 Z', '#E91E8E', false);

    // Black t-shirt V fill (visible between cardigan lapels)
    fl(g, 'M 162 170 C 168 178 174 196 180 220 C 186 196 192 178 198 170 C 192 168 186 166 180 166 C 174 166 168 168 162 170 Z', '#37474F', a);

    // Arm skin (lower arms visible near table)
    fe(g, 'ellipse', { cx: 98, cy: 246, rx: 8, ry: 6, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 262, cy: 246, rx: 8, ry: 6, fill: '#F0C8A8' }, false);
  },

  // Layer 8: Color fills — table (checkered), dominoes, phone, remote
  (g, a) => {
    // Checkered tablecloth — alternating beige and brown squares
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 8; col++) {
        const x = col * 45;
        const y = 250 + row * 33;
        const dark = (col + row) % 2 === 0;
        fe(g, 'rect', { x, y, width: 45, height: 33, fill: dark ? '#A1887F' : '#EFEBE9' }, false);
      }
    }

    // Domino fills on table (white fills for played dominoes)
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
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 11, rx: 1.5, fill: '#ECEFF1' }, false);
      g.appendChild(dg);
    });

    // Phone fill (gold/rose back)
    fe(g, 'rect', { x: 279, y: 287, width: 32, height: 22, rx: 3, fill: '#C9A96E' }, a);
    // Phone inner screen area (darker)
    fe(g, 'rect', { x: 281, y: 289, width: 28, height: 18, rx: 2, fill: '#B8956A' }, false);

    // TV remote fill (dark)
    fe(g, 'rect', { x: 323, y: 277, width: 16, height: 44, rx: 3, fill: '#263238' }, a);

    // Napkin fill (white, slightly off-white)
    fl(g, 'M 50 284 C 52 282 58 280 66 282 C 74 284 78 286 80 290 C 82 294 78 298 72 300 C 66 302 58 300 52 298 C 48 296 48 290 50 284 Z', '#FAFAFA', false);

    // Held domino fills (white rectangles in hands)
    // Left hand dominoes
    const ldPos = [
      { x: 64, y: 182, r: -25, cx: 72, cy: 196 },
      { x: 72, y: 180, r: -8, cx: 80, cy: 194 },
      { x: 80, y: 180, r: 10, cx: 88, cy: 194 }
    ];
    ldPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: '#F5F5F5' }, false);
      g.appendChild(dg);
    });
    // Right hand dominoes
    const rdPos = [
      { x: 264, y: 180, r: -10, cx: 272, cy: 194 },
      { x: 272, y: 180, r: 8, cx: 280, cy: 194 },
      { x: 280, y: 182, r: 25, cx: 288, cy: 196 }
    ];
    rdPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: '#F5F5F5' }, false);
      g.appendChild(dg);
    });
  },

  // Layer 9: Polish — eye shines, cheek blush, lip color, text, watch, highlights, background, domino dots
  (g, a) => {
    // Eye shine (white sparkle)
    fe(g, 'circle', { cx: 170, cy: 89, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 198, cy: 89, r: 1.5, fill: 'white' }, a);
    // Secondary smaller shine
    fe(g, 'circle', { cx: 174, cy: 93, r: 0.8, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 202, cy: 93, r: 0.8, fill: 'white', opacity: '0.7' }, false);

    // Cheek blush
    fe(g, 'ellipse', { cx: 158, cy: 116, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);
    fe(g, 'ellipse', { cx: 202, cy: 116, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);

    // Lip color — upper and lower lip fill
    fl(g, 'M 166 128 C 170 126 174 124 177 126 C 179 128 181 128 183 126 C 186 124 190 126 194 128 C 190 134 184 137 180 137 C 176 137 170 134 166 128 Z', '#E57373', false);

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

    // Watch on left wrist
    fe(g, 'rect', { x: 92, y: 248, width: 10, height: 7, rx: 2.5, fill: '#78909C' }, a);
    fe(g, 'rect', { x: 94, y: 249, width: 6, height: 5, rx: 1.5, fill: '#B0BEC5' }, false);
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
      // Domino 1: 2|3
      { x: 100, y: 268, r: -8, left: [[3, 3], [3, 9]], right: [[11, 3], [11, 9], [11, 6]] },
      // Domino 2: 4|1
      { x: 120, y: 272, r: 3, left: [[3, 3], [3, 9], [5, 3], [5, 9]], right: [[11, 6]] },
      // Domino 3: 5|2 (rotated 85 deg)
      { x: 140, y: 269, r: 85, left: [[3, 3], [3, 9], [5, 6], [5, 3], [5, 9]], right: [[11, 3], [11, 9]] },
      // Domino 4: 3|6
      { x: 156, y: 272, r: -4, left: [[3, 3], [3, 9], [3, 6]], right: [[11, 2], [11, 5], [11, 8], [13, 2], [13, 5], [13, 8]] },
      // Domino 5: 1|4 (rotated 90 deg)
      { x: 176, y: 268, r: 90, left: [[3, 6]], right: [[11, 3], [11, 9], [13, 3], [13, 9]] },
      // Domino 6: 6|5
      { x: 196, y: 270, r: 6, left: [[3, 2], [3, 6], [3, 10], [5, 2], [5, 6], [5, 10]], right: [[11, 2], [11, 6], [11, 10], [13, 2], [13, 10]] },
      // Domino 7: 2|3
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

    // Warm lighting overlay (subtle)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 250, fill: '#FFF8E1', opacity: '0.06' }, false);
  }
];
