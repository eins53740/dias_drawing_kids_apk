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
    // ----- Bruno -----
    // Bruno skin fill — face
    fl(g,
      'M 58 96 C 56 72 64 52 78 44 C 90 38 100 40 108 48 C 116 58 120 74 118 92 C 118 108 116 120 110 130 C 106 138 100 146 94 152 C 90 156 86 158 82 156 C 76 152 70 144 64 134 C 58 124 56 110 58 96 Z',
      '#EDBE8C', a);
    // Bruno left ear fill
    fe(g, 'ellipse', { cx: 50, cy: 100, rx: 6, ry: 10, fill: '#E0B080' }, false);
    // Bruno right ear fill
    fe(g, 'ellipse', { cx: 124, cy: 98, rx: 6, ry: 10, fill: '#E0B080' }, false);
    // Bruno neck skin
    fe(g, 'rect', { x: 76, y: 154, width: 22, height: 18, rx: 4, fill: '#DEB07A' }, false);
    // Bruno eye whites
    fl(g, 'M 66 90 C 68 84 74 82 80 84 C 86 86 86 92 82 96 C 78 98 68 96 66 90 Z', '#FFFFFF', false);
    fl(g, 'M 92 88 C 94 82 100 80 106 82 C 112 84 112 90 108 94 C 104 96 94 94 92 88 Z', '#FFFFFF', false);

    // Bruno jacket fill — dark navy
    fl(g,
      'M 36 204 C 44 186 62 174 86 172 C 110 174 128 186 136 204 L 140 340 L 32 340 Z',
      '#1B2632', a);
    // Collar fill
    fl(g,
      'M 70 174 C 66 170 60 170 58 176 C 56 182 60 186 66 184 C 74 188 82 190 88 190 C 94 190 100 188 106 184 C 112 186 116 182 114 176 C 112 170 106 170 102 174 Z',
      '#263842', false);
    // Orange shoulder patches fill
    fe(g, 'path', { d: 'M 42 210 L 58 206 L 58 216 L 42 220 Z', fill: '#FF6F00' }, a);
    fe(g, 'path', { d: 'M 130 210 L 114 206 L 114 216 L 130 220 Z', fill: '#FF6F00' }, a);
    // Zipper strip
    fe(g, 'rect', { x: 86, y: 190, width: 4, height: 150, fill: '#546E7A' }, false);
    // Zipper pull fill
    fe(g, 'rect', { x: 84, y: 190, width: 8, height: 8, rx: 1, fill: '#FF6F00' }, false);

    // Bruno's left arm/hand skin
    fl(g,
      'M 24 280 C 18 272 14 264 16 258 C 18 250 22 260 28 272 C 32 280 36 288 40 292 C 34 294 28 292 24 280 Z',
      '#EDBE8C', false);

    // ----- Miguel -----
    // Miguel skin fill — face
    fl(g,
      'M 190 110 C 190 88 200 72 216 68 C 232 72 242 88 242 110 C 244 126 240 140 234 148 C 228 154 222 160 216 162 C 210 160 204 154 198 148 C 192 140 188 126 190 110 Z',
      '#F5D0A9', a);
    // Miguel left ear fill
    fe(g, 'ellipse', { cx: 184, cy: 118, rx: 5, ry: 10, fill: '#F0C8A0' }, false);
    // Miguel right ear fill
    fe(g, 'ellipse', { cx: 248, cy: 116, rx: 5, ry: 10, fill: '#F0C8A0' }, false);
    // Miguel neck skin
    fe(g, 'rect', { x: 206, y: 158, width: 18, height: 14, rx: 4, fill: '#F0C8A0' }, false);
    // Miguel eye whites
    fl(g, 'M 200 108 C 202 104 208 102 212 104 C 216 106 216 112 212 114 C 208 116 200 114 200 108 Z', '#FFFFFF', false);
    fl(g, 'M 222 106 C 224 102 230 100 234 102 C 238 104 238 110 234 112 C 230 114 222 112 222 106 Z', '#FFFFFF', false);

    // Miguel sweater fill — navy blue
    fl(g,
      'M 170 200 C 180 182 198 172 216 172 C 234 172 252 182 262 200 L 266 340 L 166 340 Z',
      '#1A237E', a);

    // Miguel hand skin fills (around toy area)
    fl(g,
      'M 198 254 C 192 248 186 250 184 256 C 182 262 186 268 192 266 L 198 256 Z',
      '#F5D0A9', false);
    fl(g,
      'M 234 252 C 240 246 246 248 248 254 C 250 260 246 264 240 262 L 234 252 Z',
      '#F5D0A9', false);

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
    // Warm ambient background (before table)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 340, fill: '#FFF8E1', opacity: '0.1' }, false);

    // Dark table/counter
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: '#37474F' }, a);
    // Table surface top highlight
    fe(g, 'rect', { x: 0, y: 336, width: 360, height: 4, fill: '#455A64' }, false);

    // Blue ball fill with highlight
    fl(g,
      'M 160 332 C 160 324 170 316 180 316 C 190 316 200 324 200 332 C 200 338 190 340 180 340 C 170 340 160 338 160 332 Z',
      '#1E88E5', a);
    // Ball highlight
    fe(g, 'ellipse', { cx: 176, cy: 322, rx: 4, ry: 3, fill: '#64B5F6', opacity: '0.5' }, false);

    // White cup fill
    fl(g,
      'M 244 318 L 242 338 C 246 342 254 342 260 338 L 262 318 Z',
      '#FAFAFA', a);
    // Cup shadow
    fl(g,
      'M 244 330 C 248 332 254 332 260 330 L 262 338 C 258 342 248 342 242 338 Z',
      '#E0E0E0', false);

    // Toy halves — blue left, red right
    fl(g,
      'M 198 262 C 198 254 206 246 216 246 L 216 276 C 206 276 198 270 198 262 Z',
      '#1E88E5', a);
    fl(g,
      'M 216 246 C 226 246 234 254 234 262 C 234 270 226 276 216 276 Z',
      '#E53935', a);

    // Napkin fill
    fe(g, 'rect', { x: 269, y: 327, width: 30, height: 12, rx: 1, fill: '#FAFAFA' }, false);

    // Bruno hair fill (dark brown buzzcut area)
    fl(g,
      'M 60 92 C 58 76 64 58 78 48 C 92 42 104 44 112 54 C 118 64 120 78 118 90 L 114 88 C 116 78 112 66 106 58 C 100 50 90 46 80 48 C 70 52 62 64 60 78 Z',
      '#3E2C20', false);

    // Miguel hair fill (dark brown)
    fl(g,
      'M 194 106 C 192 90 200 74 214 68 C 228 64 240 68 248 78 C 254 88 256 98 252 108 L 248 104 C 250 96 248 86 244 80 C 238 72 228 68 218 70 C 208 74 200 82 196 94 Z',
      '#4E342E', false);

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
    // Eye shines — Bruno
    fe(g, 'circle', { cx: 74, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 100, cy: 86, r: 1.5, fill: '#FFFFFF' }, a);
    // Second smaller highlight — Bruno
    fe(g, 'circle', { cx: 78, cy: 92, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 104, cy: 90, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Eye shines — Miguel
    fe(g, 'circle', { cx: 206, cy: 109, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 228, cy: 107, r: 1.3, fill: '#FFFFFF' }, a);
    // Second smaller highlight — Miguel
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
    // Refresh colored dots (polish layer, slightly brighter)
    fe(g, 'circle', { cx: 64, cy: 246, r: 1.5, fill: '#FF8F00' }, false);
    fe(g, 'circle', { cx: 69, cy: 246, r: 1.5, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 74, cy: 246, r: 1.5, fill: '#42A5F5' }, false);

    // "95" on Miguel's sweater (polish / fill version)
    const t95f = ce('text', {
      x: 202, y: 222, fill: '#ECEFF1',
      'font-size': '16', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '1'
    });
    t95f.textContent = '95';
    if (a) t95f.classList.add('active-element');
    g.appendChild(t95f);
    // "YEARS" on sweater
    const tyf = ce('text', {
      x: 207, y: 232, fill: '#B0BEC5',
      'font-size': '4.5', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '0.8'
    });
    tyf.textContent = 'YEARS';
    g.appendChild(tyf);

    // Beard shadow (subtle darker area under chin/jawline)
    fl(g,
      'M 64 134 C 70 142 78 150 86 154 C 94 150 100 142 106 134 C 102 142 96 148 88 152 C 80 148 72 142 64 134 Z',
      '#5D4037', false);

    // Miguel cheek blush
    fe(g, 'ellipse', { cx: 202, cy: 128, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 234, cy: 126, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // Bruno mouth interior color
    fl(g,
      'M 76 134 C 82 136 88 138 94 138 C 98 136 102 134 104 132 L 102 134 C 98 138 92 140 88 140 C 84 140 80 138 76 134 Z',
      '#E57373', false);

    // Cafe background hints — ceiling fluorescent light
    pp(g, ['M 130 0 L 130 18', 'M 230 0 L 230 18'], a, lt);
    pp(g, ['M 130 18 L 230 18'], a, lt);
    fe(g, 'rect', { x: 132, y: 6, width: 96, height: 12, rx: 2, fill: '#FFF9C4', opacity: '0.2' }, false);

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

    // Finger skin fills for Miguel's hands (small detail fills)
    fe(g, 'ellipse', { cx: 186, cy: 248, rx: 5, ry: 4, fill: '#F5D0A9', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 246, cy: 246, rx: 5, ry: 4, fill: '#F5D0A9', opacity: '0.6' }, false);

    // Bruno gesturing hand skin fill
    fe(g, 'ellipse', { cx: 24, cy: 276, rx: 10, ry: 12, fill: '#EDBE8C' }, false);

    // Toy highlight (subtle shine)
    fe(g, 'ellipse', { cx: 210, cy: 254, rx: 3, ry: 2, fill: '#64B5F6', opacity: '0.4' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 254, rx: 3, ry: 2, fill: '#EF9A9A', opacity: '0.4' }, false);

    // Third person collar/neckline detail
    pp(g, ['M 304 58 C 310 54 318 54 324 58'], false, lt);
  }
];
