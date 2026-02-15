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
    dx.forEach(x => {
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
