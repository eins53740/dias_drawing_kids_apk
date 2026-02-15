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
