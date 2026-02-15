const paisLayers = [
  // =====================================================================
  // Layer 0: Composition guides — perspective from below, figure zones,
  //          head levels, hand meeting point, feet levels
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Ricardo zone (left third)
    pp(g, ['M 30 0 L 30 450', 'M 190 0 L 190 450'], a, lt);
    // Sandra zone (right third)
    pp(g, ['M 170 0 L 170 450', 'M 340 0 L 340 450'], a, lt);
    // Head level guides
    pp(g, ['M 0 65 L 360 65', 'M 0 110 L 360 110'], a, lt);
    // Shoulder line
    pp(g, ['M 0 130 L 360 130'], a, lt);
    // Hand clasp level
    pp(g, ['M 150 190 L 210 190'], a, lt);
    // Waist / hip level
    pp(g, ['M 0 260 L 360 260'], a, lt);
    // Feet level
    pp(g, ['M 0 420 L 360 420'], a, lt);
    // Perspective vanishing point (below center — shot from below)
    pp(g, ['M 180 500 L 40 0', 'M 180 500 L 320 0'], a, lt);
    pp(g, ['M 180 500 L 0 200', 'M 180 500 L 360 200'], a, lt);
    // Ricardo head oval guide
    pp(g, [
      'M 118 32 C 143 32 162 50 162 74 C 162 98 143 116 118 116 C 93 116 76 98 76 74 C 76 50 93 32 118 32 Z'
    ], a, lt);
    // Sandra head oval guide
    pp(g, [
      'M 242 44 C 264 44 280 60 280 80 C 280 100 264 118 242 118 C 220 118 204 100 204 80 C 204 60 220 44 242 44 Z'
    ], a, lt);
    // Torso center lines
    pp(g, ['M 118 116 L 118 268', 'M 242 118 L 242 262'], a, lt);
    // Arm direction guides
    pp(g, ['M 68 148 L 0 132', 'M 170 148 L 188 190'], a, lt);
    pp(g, ['M 198 148 L 192 190', 'M 280 148 L 334 52'], a, lt);
    // Leg spread guides
    pp(g, ['M 70 268 L 30 432', 'M 168 268 L 200 432'], a, lt);
    pp(g, ['M 200 262 L 166 428', 'M 282 262 L 322 428'], a, lt);
  },

  // =====================================================================
  // Layer 1: Full body outlines — two figures mid-jump, dynamic poses,
  //          shot from below looking up, foreshortened perspective
  // =====================================================================
  (g, a) => {
    // === RICARDO (left, taller figure) ===
    // Head — slightly foreshortened oval from below angle
    pp(g, [
      'M 118 34 C 132 33 144 38 152 48 C 158 56 162 66 162 74 C 162 84 158 92 152 98 C 144 106 134 112 118 112 C 104 112 94 106 86 98 C 80 92 76 82 76 74 C 76 64 80 54 86 48 C 94 38 104 33 118 34 Z'
    ], a);
    // Jawline definition (chin visible from below)
    pp(g, [
      'M 94 100 C 98 106 106 112 118 114 C 130 112 138 106 142 100'
    ], a);
    // Neck — short from below perspective, thick
    pp(g, [
      'M 106 112 C 106 116 105 120 104 122',
      'M 130 112 C 130 116 131 120 132 122'
    ], a);
    // Torso — black t-shirt, broadened from below perspective
    pp(g, [
      'M 104 122 C 96 126 82 134 72 146 C 64 156 60 168 58 182 C 56 198 56 216 58 236 L 62 268',
      'M 132 122 C 140 126 156 134 166 146 C 174 156 178 168 180 182 C 182 198 182 216 180 236 L 176 268'
    ], a);
    // Torso side contours (muscular definition from below)
    pp(g, [
      'M 62 200 C 60 218 60 238 62 258',
      'M 176 200 C 178 218 178 238 176 258'
    ], a);
    // Left arm — extended WIDE to the left, reaching out
    pp(g, [
      'M 72 146 C 62 142 50 138 38 134 C 26 130 16 128 6 128 C 0 128 -2 130 -2 134'
    ], a);
    // Left arm underside
    pp(g, [
      'M 76 156 C 64 152 50 148 38 146 C 26 142 16 140 8 140 C 2 140 -2 142 -2 146'
    ], a);
    // Left forearm muscle contour
    pp(g, [
      'M 48 136 C 44 138 40 140 38 142'
    ], a);
    // Right arm — reaching toward center, clasped hand
    pp(g, [
      'M 166 146 C 172 150 178 158 182 168 C 186 178 188 186 188 192'
    ], a);
    // Right arm underside
    pp(g, [
      'M 164 156 C 170 160 174 168 178 176 C 182 184 184 190 184 196'
    ], a);
    // Right forearm contour
    pp(g, [
      'M 176 162 C 180 170 184 178 186 186'
    ], a);
    // Left leg — spread in star-jump, foreshortened perspective
    pp(g, [
      'M 68 268 C 64 284 56 306 48 328 C 42 346 38 364 36 382 C 34 398 32 412 30 422 C 28 430 28 436 30 440'
    ], a);
    // Left leg inner
    pp(g, [
      'M 82 268 C 78 286 72 308 66 330 C 60 348 58 366 56 384 C 54 400 54 414 54 424 C 54 432 56 438 58 442'
    ], a);
    // Left knee contour
    pp(g, [
      'M 50 336 C 48 340 46 346 46 352'
    ], a);
    // Right leg — spread opposite direction
    pp(g, [
      'M 158 268 C 164 286 172 308 180 330 C 186 348 192 366 196 384 C 198 398 200 410 200 420 C 200 428 198 434 196 438'
    ], a);
    // Right leg inner
    pp(g, [
      'M 170 268 C 174 284 182 304 190 324 C 196 342 200 360 204 378 C 206 394 208 408 210 418 C 210 426 210 432 208 436'
    ], a);
    // Right knee contour
    pp(g, [
      'M 184 338 C 186 342 188 348 188 354'
    ], a);

    // === SANDRA (right, shorter figure) ===
    // Head — slightly lower and smaller, feminine oval
    pp(g, [
      'M 242 46 C 254 45 264 50 272 58 C 278 66 280 74 280 82 C 280 90 278 98 272 104 C 264 112 254 116 242 116 C 230 116 220 112 214 104 C 208 98 206 90 206 82 C 206 74 208 66 214 58 C 220 50 230 45 242 46 Z'
    ], a);
    // Jawline — softer, more rounded
    pp(g, [
      'M 218 102 C 224 110 232 116 242 118 C 252 116 260 110 264 102'
    ], a);
    // Neck — slender, elegant
    pp(g, [
      'M 232 116 C 232 120 231 124 230 126',
      'M 252 116 C 252 120 253 124 254 126'
    ], a);
    // Torso — black t-shirt, narrower than Ricardo
    pp(g, [
      'M 230 126 C 222 130 210 138 202 148 C 196 158 192 170 192 186 C 192 204 192 224 194 244 L 196 262',
      'M 254 126 C 262 130 272 136 280 148 C 286 158 290 170 290 186 C 290 204 290 224 288 244 L 286 262'
    ], a);
    // Left arm — reaching toward center, clasped hand
    pp(g, [
      'M 202 148 C 198 156 196 166 194 176 C 192 184 192 190 192 194'
    ], a);
    // Left arm underside
    pp(g, [
      'M 206 158 C 204 164 202 172 200 180 C 198 188 198 194 198 198'
    ], a);
    // Right arm — raised HIGH, reaching up and right
    pp(g, [
      'M 280 148 C 290 140 300 126 308 112 C 316 98 322 82 328 66 C 332 56 334 48 334 44'
    ], a);
    // Right arm underside
    pp(g, [
      'M 276 156 C 286 148 294 136 302 122 C 310 108 316 92 322 76 C 326 66 328 58 328 54'
    ], a);
    // Right arm muscle contour
    pp(g, [
      'M 296 130 C 302 120 308 108 312 96'
    ], a);
    // Left leg — spread in jump, jeans
    pp(g, [
      'M 200 262 C 196 278 188 300 180 322 C 174 340 170 358 168 376 C 166 392 164 406 164 416 C 164 424 166 430 168 434'
    ], a);
    // Left leg inner
    pp(g, [
      'M 212 262 C 208 280 202 302 196 324 C 190 342 188 360 186 378 C 186 394 186 408 188 418 C 188 424 190 430 192 434'
    ], a);
    // Left knee contour
    pp(g, [
      'M 182 330 C 180 334 178 340 178 346'
    ], a);
    // Right leg — spread in jump
    pp(g, [
      'M 280 262 C 286 280 296 302 306 322 C 314 340 320 358 324 376 C 326 392 326 406 324 416 C 322 424 320 430 318 434'
    ], a);
    // Right leg inner
    pp(g, [
      'M 288 262 C 292 278 300 298 308 318 C 314 334 320 352 322 370 C 324 386 324 400 324 410 C 324 418 322 426 320 432'
    ], a);
    // Right knee contour
    pp(g, [
      'M 310 328 C 312 332 314 338 314 344'
    ], a);
  },

  // =====================================================================
  // Layer 2: DETAILED faces — sunglasses, noses from below, mouths,
  //          ears, chin contours, jawlines, cheekbones
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // Sunglasses frame — left lens (rectangular, slightly angled from below)
    pp(g, [
      'M 96 64 C 98 60 102 58 108 58 L 118 58 C 120 58 122 60 122 64 L 122 76 C 122 78 120 80 118 80 L 106 80 C 102 80 98 78 96 76 Z'
    ], a);
    // Sunglasses frame — right lens
    pp(g, [
      'M 124 64 C 126 60 130 58 134 58 L 142 58 C 146 58 148 60 148 64 L 148 76 C 148 78 146 80 142 80 L 132 80 C 128 80 124 78 124 76 Z'
    ], a);
    // Bridge between lenses
    pp(g, ['M 122 66 C 122 64 124 64 124 66'], a);
    // Sunglasses top frame edge (thicker)
    pp(g, [
      'M 96 62 L 122 60 L 124 60 L 148 62'
    ], a);
    // Temple arms extending to ears
    pp(g, [
      'M 96 62 C 92 62 86 64 82 68 C 80 70 78 74 78 76',
      'M 148 62 C 152 62 156 64 160 68 C 162 70 164 74 164 76'
    ], a);
    // Nose — prominent from below, nostrils visible
    pp(g, [
      'M 118 80 C 117 84 116 88 115 92 C 114 96 113 98 112 100'
    ], a);
    // Nose tip — wider from below view
    pp(g, [
      'M 108 102 C 110 106 114 108 118 108 C 122 108 126 106 128 102'
    ], a);
    // Nostril left
    pp(g, [
      'M 110 102 C 112 98 114 98 116 100 C 114 102 112 104 110 102'
    ], a);
    // Nostril right
    pp(g, [
      'M 126 102 C 124 98 122 98 120 100 C 122 102 124 104 126 102'
    ], a);
    // Nose bridge shadow line
    pp(g, ['M 116 82 C 116 86 116 90 116 94'], a, lt);
    // Mouth — slight grin, relaxed
    pp(g, [
      'M 108 106 C 112 104 116 102 118 102 C 120 102 124 104 128 106'
    ], a);
    // Lower lip
    pp(g, [
      'M 110 108 C 114 112 118 114 122 114 C 126 112 128 110 130 108'
    ], a);
    // Upper lip detail — slight definition
    pp(g, [
      'M 110 106 C 114 104 116 104 118 106 C 120 104 124 104 128 106'
    ], a, lt);
    // Chin from below
    pp(g, [
      'M 108 114 C 112 118 116 120 120 120 C 124 118 128 116 130 114'
    ], a, lt);
    // Left ear
    pp(g, [
      'M 78 66 C 74 62 70 64 70 70 C 70 76 72 82 76 86 C 78 88 80 86 80 82'
    ], a);
    // Left ear inner detail
    pp(g, [
      'M 74 68 C 72 72 72 78 74 82'
    ], a, lt);
    // Right ear
    pp(g, [
      'M 160 66 C 164 62 168 64 168 70 C 168 76 166 82 162 86 C 160 88 158 86 158 82'
    ], a);
    // Right ear inner detail
    pp(g, [
      'M 164 68 C 166 72 166 78 164 82'
    ], a, lt);
    // Cheekbone contour hints
    pp(g, [
      'M 86 80 C 88 84 92 88 96 92',
      'M 152 80 C 150 84 146 88 142 92'
    ], a, lt);

    // === SANDRA ===
    // Sunglasses frame — left lens (slightly smaller, feminine shape)
    pp(g, [
      'M 222 70 C 224 66 228 64 232 64 L 240 64 C 242 64 244 66 244 70 L 244 82 C 244 84 242 86 240 86 L 230 86 C 226 86 222 84 222 82 Z'
    ], a);
    // Sunglasses frame — right lens
    pp(g, [
      'M 246 70 C 248 66 252 64 256 64 L 262 64 C 266 64 268 66 268 70 L 268 82 C 268 84 266 86 262 86 L 254 86 C 250 86 246 84 246 82 Z'
    ], a);
    // Bridge
    pp(g, ['M 244 72 C 244 70 246 70 246 72'], a);
    // Top frame edge
    pp(g, [
      'M 222 68 L 244 66 L 246 66 L 268 68'
    ], a);
    // Temple arms
    pp(g, [
      'M 222 68 C 218 68 214 70 210 74 C 208 76 208 80 208 82',
      'M 268 68 C 272 68 276 70 278 72 C 280 74 280 78 280 80'
    ], a);
    // Nose — slightly upturned, feminine
    pp(g, [
      'M 240 86 C 239 90 238 94 238 96 C 237 98 236 100 236 102'
    ], a);
    // Nose tip
    pp(g, [
      'M 232 104 C 234 108 238 110 242 110 C 246 108 248 106 250 104'
    ], a);
    // Nostrils
    pp(g, [
      'M 234 104 C 236 100 238 100 240 102',
      'M 248 104 C 246 100 244 100 242 102'
    ], a, lt);
    // Wide smile — big, joyful, teeth showing
    pp(g, [
      'M 224 112 C 228 108 234 106 240 106 C 246 106 252 108 256 112'
    ], a);
    // Lower lip — open smile, wide arc
    pp(g, [
      'M 224 112 C 228 120 234 124 240 124 C 246 124 252 120 256 112'
    ], a);
    // Upper lip cupid's bow
    pp(g, [
      'M 226 112 C 230 110 234 108 237 110 C 239 112 241 112 243 110 C 246 108 250 110 254 112'
    ], a);
    // Teeth — upper row
    pp(g, ['M 228 112 L 252 112'], a, lt);
    // Teeth divisions
    pp(g, [
      'M 232 112 L 232 116', 'M 236 112 L 236 117', 'M 240 112 L 240 118',
      'M 244 112 L 244 117', 'M 248 112 L 248 116'
    ], a, lt);
    // Lower teeth hint
    pp(g, ['M 230 118 L 250 118'], a, lt);
    // Chin contour
    pp(g, [
      'M 228 122 C 234 126 240 128 246 126 C 250 124 254 120 256 116'
    ], a, lt);
    // Left ear
    pp(g, [
      'M 208 74 C 204 70 200 72 200 78 C 200 84 202 90 206 92 C 208 94 210 92 210 88'
    ], a);
    // Left ear inner
    pp(g, ['M 202 76 C 200 80 200 86 202 90'], a, lt);
    // Right ear
    pp(g, [
      'M 278 74 C 282 70 286 72 286 78 C 286 84 284 90 280 92 C 278 94 276 92 276 88'
    ], a);
    // Right ear inner
    pp(g, ['M 284 76 C 286 80 286 86 284 90'], a, lt);
    // Cheekbone contours
    pp(g, [
      'M 210 86 C 212 90 216 96 220 100',
      'M 274 86 C 272 90 268 96 264 100'
    ], a, lt);
    // Smile crease lines
    pp(g, [
      'M 222 106 C 220 110 218 114 218 118',
      'M 258 106 C 260 110 262 114 262 118'
    ], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair — Ricardo short dark hair, Sandra reddish-brown hair
  //          flying dramatically in the wind
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // Main hair mass — short, dark, from below angle showing volume
    pp(g, [
      'M 80 66 C 78 52 84 40 94 34 C 104 28 114 26 124 26 C 134 26 144 30 150 38 C 156 46 160 56 160 66'
    ], a);
    // Hair inner volume layer
    pp(g, [
      'M 84 62 C 84 50 90 42 100 36 C 110 30 122 30 132 34 C 140 38 148 46 152 58 C 154 64 156 68 156 72'
    ], a);
    // Hairline — natural V-shape receding slightly at temples
    pp(g, [
      'M 86 58 C 88 50 94 44 104 40 C 112 36 120 34 128 36 C 136 38 142 42 148 48 C 152 52 156 58 158 64'
    ], a);
    // Short hair texture — spiky strands
    pp(g, [
      'M 100 28 C 106 24 114 24 120 28',
      'M 92 34 C 98 28 108 26 116 30',
      'M 108 26 C 116 22 126 24 132 30',
      'M 126 28 C 134 26 142 30 146 36',
      'M 88 44 C 94 38 104 34 112 38',
      'M 96 52 C 102 46 110 44 118 48',
      'M 140 36 C 148 40 152 48 154 56'
    ], a, lt);
    // Side hair contours
    pp(g, [
      'M 82 58 C 80 48 82 40 88 34',
      'M 156 58 C 158 48 156 40 150 34'
    ], a, lt);
    // Sideburns — short
    pp(g, [
      'M 80 68 C 80 74 80 80 82 86',
      'M 158 68 C 158 74 158 80 156 86'
    ], a, lt);

    // === SANDRA ===
    // Hair base mass — reddish-brown
    pp(g, [
      'M 210 74 C 208 58 214 46 226 40 C 236 34 248 34 258 38 C 266 42 272 50 276 60 C 278 68 278 76 276 82'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 214 70 C 214 56 220 46 230 42 C 240 38 252 38 260 44 C 268 50 272 60 272 72'
    ], a);
    // Hairline framing face
    pp(g, [
      'M 214 68 C 216 58 222 48 232 44 C 240 40 250 40 258 44 C 266 48 272 56 274 68'
    ], a);
    // Hair part line
    pp(g, ['M 240 36 C 242 42 244 50 244 58'], a, lt);
    // === Wind-blown hair RIGHT (major flowing strands) ===
    pp(g, [
      'M 272 48 C 288 42 306 38 322 36 C 334 34 344 36 350 40'
    ], a);
    pp(g, [
      'M 274 56 C 292 50 310 46 328 44 C 338 42 346 46 352 52'
    ], a);
    pp(g, [
      'M 276 64 C 294 58 312 54 330 52 C 340 52 348 56 354 62'
    ], a);
    pp(g, [
      'M 276 72 C 292 68 308 66 322 66 C 334 66 342 70 346 76'
    ], a);
    pp(g, [
      'M 274 80 C 288 76 302 74 314 74 C 326 74 334 78 338 84'
    ], a);
    // Wind-blown hair LEFT (secondary strands flying other direction)
    pp(g, [
      'M 212 50 C 198 46 182 44 168 46 C 158 48 152 54 150 60'
    ], a);
    pp(g, [
      'M 210 58 C 198 54 186 52 174 54 C 166 56 160 60 158 66'
    ], a);
    pp(g, [
      'M 208 66 C 196 64 186 64 178 66 C 172 68 168 72 166 76'
    ], a);
    // Hair wave texture lines
    pp(g, [
      'M 218 42 C 228 36 240 36 252 40',
      'M 216 52 C 226 46 238 44 250 48',
      'M 214 62 C 224 56 236 54 248 58',
      'M 280 48 C 296 44 314 42 330 42',
      'M 282 58 C 298 54 316 52 332 52',
      'M 278 68 C 292 64 308 62 322 62'
    ], a, lt);
    // Individual wispy strands for wind effect
    pp(g, [
      'M 270 44 C 286 38 304 36 320 34',
      'M 348 42 C 354 46 356 52 356 58',
      'M 274 52 C 290 46 308 44 326 42',
      'M 346 52 C 352 56 354 62 354 68',
      'M 214 48 C 200 44 186 42 174 44',
      'M 152 58 C 148 64 146 70 146 76',
      'M 210 56 C 198 52 186 52 176 54'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — t-shirt collars, "300" text, jeans
  //          waistband, seams, belt loops, pockets, wrinkles, motion folds
  // =====================================================================
  (g, a) => {
    // === RICARDO ===
    // T-shirt crew neck collar
    pp(g, [
      'M 104 122 C 108 126 114 128 118 128 C 122 128 128 126 132 122'
    ], a);
    // Collar inner neckline
    pp(g, [
      'M 106 124 C 110 128 116 130 120 130 C 124 128 130 126 134 122'
    ], a, lt);
    // Collar ribbing texture
    pp(g, [
      'M 106 123 C 108 125 110 127 112 127',
      'M 124 127 C 126 125 128 123 130 123'
    ], a, lt);
    // "300" text on chest — bold graphic text
    const t300 = ce('text', {
      x: 94, y: 188,
      fill: a ? HL : P,
      'font-size': '24', 'font-weight': 'bold',
      'font-family': 'Impact, Arial Black, sans-serif',
      'letter-spacing': '1'
    });
    t300.textContent = '300';
    if (a) t300.classList.add('active-element');
    g.appendChild(t300);
    // Shirt hem at waist — slightly bunched from motion
    pp(g, [
      'M 60 266 C 72 270 88 274 106 276 C 124 278 144 276 158 274 C 168 272 174 270 178 266'
    ], a);
    // Shirt hem secondary fold line
    pp(g, [
      'M 64 268 C 80 272 100 276 120 278 C 140 276 160 274 176 268'
    ], a, lt);
    // T-shirt sleeve hems
    pp(g, [
      'M 72 148 C 66 146 58 144 52 144',
      'M 164 150 C 168 154 172 160 174 164'
    ], a, lt);
    // Left sleeve wrinkles
    pp(g, [
      'M 64 142 C 58 140 52 140 48 142',
      'M 60 148 C 54 146 48 146 44 148'
    ], a, lt);
    // Torso motion wrinkles
    pp(g, [
      'M 82 160 C 86 172 88 186 86 200',
      'M 98 156 C 100 168 102 182 100 196',
      'M 142 158 C 146 170 148 184 146 198',
      'M 156 162 C 158 174 160 186 158 200',
      'M 92 210 C 94 222 94 234 92 248',
      'M 144 212 C 146 224 146 236 144 250'
    ], a, lt);
    // Pants center seam
    pp(g, ['M 120 268 L 120 292'], a, lt);
    // Left pant leg outer seam
    pp(g, ['M 52 296 C 48 314 42 336 38 356'], a, lt);
    // Right pant leg outer seam
    pp(g, ['M 172 296 C 178 316 184 338 190 358'], a, lt);
    // Left pant leg inner seam
    pp(g, ['M 72 290 C 66 308 60 328 56 348'], a, lt);
    // Right pant leg inner seam
    pp(g, ['M 162 290 C 166 308 172 326 178 346'], a, lt);
    // Left pant knee wrinkle
    pp(g, [
      'M 46 330 C 48 336 50 342 52 346',
      'M 60 326 C 58 332 56 338 56 344'
    ], a, lt);
    // Right pant knee wrinkle
    pp(g, [
      'M 182 336 C 184 342 186 348 188 352',
      'M 194 332 C 196 338 198 344 200 348'
    ], a, lt);

    // === SANDRA ===
    // T-shirt collar
    pp(g, [
      'M 230 126 C 234 130 238 132 242 132 C 246 130 250 128 254 126'
    ], a);
    // Collar inner neckline
    pp(g, [
      'M 232 128 C 236 132 240 134 244 132 C 248 130 252 128 254 126'
    ], a, lt);
    // Collar ribbing
    pp(g, [
      'M 232 127 C 234 129 236 131 238 131',
      'M 248 131 C 250 129 252 127 254 127'
    ], a, lt);
    // Shirt hem — slightly loose
    pp(g, [
      'M 196 258 C 210 262 226 266 242 266 C 258 266 274 262 286 258'
    ], a);
    // Shirt hem fold
    pp(g, [
      'M 198 260 C 214 264 230 268 244 268 C 260 268 276 264 288 260'
    ], a, lt);
    // Sleeve hems
    pp(g, [
      'M 204 152 C 200 158 198 166 196 172',
      'M 278 150 C 284 144 292 134 300 122'
    ], a, lt);
    // Right sleeve wrinkles (stretched arm up)
    pp(g, [
      'M 284 142 C 290 134 296 126 302 116',
      'M 280 146 C 286 138 292 128 296 118'
    ], a, lt);
    // Torso motion wrinkles
    pp(g, [
      'M 212 154 C 214 166 216 180 214 194',
      'M 226 150 C 228 162 228 176 226 190',
      'M 260 152 C 264 164 266 178 264 192',
      'M 274 156 C 276 168 278 180 276 194',
      'M 220 200 C 222 212 222 226 220 240',
      'M 262 202 C 264 214 264 228 262 242'
    ], a, lt);
    // Jeans waistband — double line
    pp(g, [
      'M 196 258 C 212 262 230 264 242 264 C 254 264 272 262 286 258',
      'M 198 262 C 214 266 232 268 242 268 C 252 268 270 266 284 262'
    ], a);
    // Belt loops
    pp(g, [
      'M 212 258 L 212 268', 'M 228 260 L 228 270',
      'M 254 260 L 254 270', 'M 272 258 L 272 268'
    ], a, lt);
    // Front pockets arcs
    pp(g, [
      'M 204 268 C 208 276 216 282 224 280',
      'M 278 268 C 274 276 266 282 258 280'
    ], a);
    // Jeans center seam
    pp(g, ['M 242 264 L 242 292'], a, lt);
    // Jean leg outer seams
    pp(g, [
      'M 192 296 C 188 314 182 336 178 356',
      'M 296 298 C 302 316 308 338 312 358'
    ], a, lt);
    // Jean leg inner seams
    pp(g, [
      'M 206 290 C 202 308 196 328 192 346',
      'M 284 290 C 288 308 294 326 300 344'
    ], a, lt);
    // Jean knee wrinkles
    pp(g, [
      'M 180 328 C 178 334 176 340 176 346',
      'M 190 324 C 188 330 186 336 186 342',
      'M 310 326 C 312 332 314 338 314 344',
      'M 318 322 C 320 328 322 334 322 340'
    ], a, lt);
    // Watch on Sandra's left wrist
    pp(g, [
      'M 194 180 C 192 178 190 178 188 180 C 186 182 186 186 188 188 C 190 190 194 190 196 188 C 198 186 198 182 196 180 Z'
    ], a);
    // Watch strap
    pp(g, ['M 190 178 L 188 174', 'M 194 190 L 196 194'], a, lt);
    // Watch face detail
    fe(g, 'circle', { cx: 192, cy: 184, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : 0.8 }, a);
  },

  // =====================================================================
  // Layer 5: Hands (clasped center + Sandra's raised) and shoes
  // =====================================================================
  (g, a) => {
    // === CLASPED HANDS at center (~x=188, y=192) ===
    // Ricardo's right hand — coming from left side
    pp(g, [
      'M 186 188 C 184 182 180 176 176 172 C 172 168 168 168 166 172 C 164 176 168 182 172 186 C 176 190 180 192 184 192'
    ], a);
    // Ricardo's right thumb
    pp(g, [
      'M 184 184 C 188 180 190 174 188 168 C 186 164 182 162 180 166 C 178 170 180 176 184 180'
    ], a);
    // Ricardo's right fingers wrapping
    pp(g, [
      'M 176 172 C 172 166 168 160 166 156 C 164 152 166 150 170 150 C 174 150 176 154 176 160',
      'M 174 174 C 170 168 166 162 164 158 C 162 154 164 152 168 152 C 172 152 174 156 174 162',
      'M 172 178 C 168 172 164 168 162 164 C 160 160 162 158 166 158 C 170 158 172 162 172 166',
      'M 170 182 C 166 178 162 174 160 170 C 158 166 160 164 164 164 C 168 164 168 168 168 172'
    ], a);
    // Sandra's left hand — coming from right side
    pp(g, [
      'M 194 192 C 196 186 200 180 204 176 C 208 172 212 172 214 176 C 216 180 212 186 208 190 C 204 194 200 196 196 196'
    ], a);
    // Sandra's left thumb
    pp(g, [
      'M 196 188 C 192 184 190 178 192 172 C 194 168 198 166 200 170 C 202 174 200 180 196 184'
    ], a);
    // Sandra's left fingers wrapping
    pp(g, [
      'M 204 176 C 208 170 212 164 214 160 C 216 156 214 154 210 154 C 206 154 204 158 204 164',
      'M 206 178 C 210 172 214 166 216 162 C 218 158 216 156 212 156 C 208 156 206 160 206 166',
      'M 208 182 C 212 176 216 172 218 168 C 220 164 218 162 214 162 C 210 162 208 166 208 170',
      'M 210 186 C 214 182 218 178 220 174 C 222 170 220 168 216 168 C 212 168 212 172 212 176'
    ], a);
    // Interlocking finger bridge
    pp(g, [
      'M 170 158 C 174 154 178 152 182 154 C 186 156 190 156 194 154 C 198 152 202 154 206 158'
    ], a);
    // Wrist connections — Ricardo
    pp(g, [
      'M 186 192 C 186 198 186 204 186 210'
    ], a, lt);
    // Wrist connections — Sandra
    pp(g, [
      'M 194 196 C 194 202 196 208 198 214'
    ], a, lt);
    // Finger joint creases
    pp(g, [
      'M 168 156 C 170 152 172 150 174 152',
      'M 210 160 C 212 156 214 154 216 156',
      'M 166 162 C 168 158 170 156 172 158',
      'M 212 166 C 214 162 216 160 218 162'
    ], a, lt);

    // === SANDRA'S RAISED RIGHT HAND at top (~x=334, y=46) ===
    // Palm base
    pp(g, [
      'M 330 54 C 334 50 338 48 340 52 C 342 56 340 62 336 66 C 332 68 328 66 326 62 C 324 58 326 54 330 52 Z'
    ], a);
    // Index finger — reaching up
    pp(g, [
      'M 334 50 C 336 44 338 38 336 32 C 334 28 330 28 330 32 C 330 38 332 44 334 50'
    ], a);
    // Middle finger — tallest
    pp(g, [
      'M 338 48 C 340 42 342 34 340 28 C 338 24 334 24 334 28 C 334 34 336 42 338 48'
    ], a);
    // Ring finger
    pp(g, [
      'M 340 52 C 344 46 346 40 344 34 C 342 30 338 30 338 34 C 338 40 340 46 340 52'
    ], a);
    // Pinky finger — shorter
    pp(g, [
      'M 340 56 C 344 52 348 48 346 42 C 344 38 340 38 340 42 C 340 48 342 52 342 56'
    ], a);
    // Thumb — angled outward
    pp(g, [
      'M 330 56 C 326 52 322 48 322 44 C 322 40 326 40 328 44 C 330 48 330 52 330 56'
    ], a);
    // Finger joint details
    pp(g, [
      'M 332 36 C 334 34 336 34 336 36',
      'M 336 32 C 338 30 340 30 340 32',
      'M 342 38 C 344 36 346 36 346 38',
      'M 342 44 C 344 42 346 42 346 44'
    ], a, lt);
    // Wrist crease
    pp(g, [
      'M 326 62 C 328 64 332 66 336 66'
    ], a, lt);

    // === RICARDO'S LEFT HAND — spread, extended left ===
    pp(g, [
      'M 2 132 C 0 128 -2 126 0 124 C 2 120 6 120 8 124'
    ], a);
    // Fingers spread
    pp(g, [
      'M 0 126 C -4 122 -6 118 -4 114 C -2 110 2 112 4 116',
      'M 2 124 C -2 118 -4 114 -2 108 C 0 104 4 106 4 110',
      'M 4 126 C 2 120 0 116 2 110 C 4 106 8 108 8 112',
      'M 6 130 C 4 126 2 122 4 118 C 6 114 10 116 10 120',
      'M 4 134 C 2 132 0 130 2 128 C 4 124 8 128 8 132'
    ], a);

    // === RICARDO'S SHOES — Nike sneakers ===
    // Left shoe — gray/black Nike, foreshortened from below
    pp(g, [
      'M 26 436 C 22 430 16 428 10 430 C 4 432 0 438 2 444 C 4 450 12 454 22 456 C 32 458 44 456 52 450 C 56 448 58 444 56 440 C 54 436 48 432 40 432 L 26 436 Z'
    ], a);
    // Left shoe sole
    pp(g, ['M 4 446 C 14 452 26 456 40 454 C 48 452 54 448 56 444'], a);
    // Left shoe tongue
    pp(g, ['M 28 432 C 30 428 32 426 36 426 C 38 426 40 428 40 430'], a, lt);
    // Left Nike swoosh
    pp(g, [
      'M 10 438 C 18 432 28 430 38 432 C 44 434 46 436 44 438 C 40 436 32 434 22 436 C 16 438 12 440 10 442'
    ], a);
    // Left shoe lace area
    pp(g, ['M 30 428 L 36 428', 'M 28 430 L 38 430', 'M 26 432 L 40 432'], a, lt);
    // Right shoe — pointing right
    pp(g, [
      'M 200 434 C 204 428 210 426 216 428 C 222 430 226 436 224 442 C 222 448 214 452 204 454 C 194 456 182 454 176 448 C 172 446 170 442 172 438 C 174 434 180 430 188 430 L 200 434 Z'
    ], a);
    // Right shoe sole
    pp(g, ['M 222 444 C 214 450 202 454 188 452 C 180 450 174 446 172 442'], a);
    // Right shoe tongue
    pp(g, ['M 198 430 C 196 426 194 424 190 424 C 188 424 186 426 186 428'], a, lt);
    // Right Nike swoosh
    pp(g, [
      'M 218 436 C 210 430 200 428 190 430 C 184 432 182 434 184 436 C 190 434 200 432 210 434 C 214 436 218 438 218 440'
    ], a);
    // Right shoe lace area
    pp(g, ['M 194 426 L 188 426', 'M 196 428 L 186 428', 'M 198 430 L 184 430'], a, lt);

    // === SANDRA'S SHOES — black ballet flat shoes ===
    // Left shoe
    pp(g, [
      'M 166 430 C 162 426 156 424 150 426 C 144 428 140 434 142 440 C 144 446 152 450 162 450 C 172 450 180 446 184 440 C 186 436 186 432 184 428 C 182 424 176 422 170 424 Z'
    ], a);
    // Left shoe edge detail
    pp(g, [
      'M 148 432 C 152 428 158 426 164 426',
      'M 146 438 C 152 442 160 444 168 444 C 176 444 182 442 186 438'
    ], a, lt);
    // Left shoe bow
    pp(g, [
      'M 156 428 C 158 426 162 426 164 428 C 162 430 158 430 156 428'
    ], a, lt);
    // Right shoe
    pp(g, [
      'M 322 428 C 326 424 332 422 338 424 C 344 426 348 432 346 438 C 344 444 336 448 326 448 C 316 448 308 444 304 438 C 302 434 302 430 304 426 C 306 422 312 420 318 422 Z'
    ], a);
    // Right shoe edge detail
    pp(g, [
      'M 336 430 C 332 426 326 424 320 424',
      'M 342 436 C 336 440 328 442 320 442 C 312 442 306 440 302 436'
    ], a, lt);
    // Right shoe bow
    pp(g, [
      'M 332 426 C 330 424 326 424 324 426 C 326 428 330 428 332 426'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — sky lines, horizon, sun glow, atmospheric
  //          perspective, frame
  // =====================================================================
  (g, a) => {
    // Sky gradient horizontal bands — darker at top, lighter at bottom
    pp(g, [
      'M 0 0 L 360 0', 'M 0 30 L 360 30', 'M 0 60 L 360 60',
      'M 0 90 L 360 90', 'M 0 120 L 360 120', 'M 0 150 L 360 150',
      'M 0 180 L 360 180', 'M 0 210 L 360 210', 'M 0 240 L 360 240',
      'M 0 270 L 360 270', 'M 0 300 L 360 300', 'M 0 330 L 360 330',
      'M 0 360 L 360 360', 'M 0 390 L 360 390', 'M 0 420 L 360 420',
      'M 0 450 L 360 450'
    ], a, lt);
    // Frame edges
    pp(g, ['M 0 0 L 360 0 L 360 450 L 0 450 Z'], a, lt);
    // Sun glow radial lines from bottom center
    pp(g, [
      'M 180 460 C 170 440 160 420 155 405',
      'M 180 460 C 190 440 200 420 205 405',
      'M 180 460 C 150 430 130 410 120 395',
      'M 180 460 C 210 430 230 410 240 395',
      'M 180 460 C 120 420 80 400 60 385',
      'M 180 460 C 240 420 280 400 300 385'
    ], a, lt);
    // Diagonal perspective emphasis lines (from below view)
    pp(g, [
      'M 0 450 C 40 420 80 390 120 370',
      'M 360 450 C 320 420 280 390 240 370',
      'M 0 450 C 60 400 120 360 180 340',
      'M 360 450 C 300 400 240 360 180 340'
    ], a, lt);
    // Horizon line hint
    pp(g, ['M 0 445 L 360 445'], a, lt);
    // Cloud whisps far away
    pp(g, [
      'M 10 16 C 20 12 40 14 50 18 C 60 22 52 26 40 24 C 28 22 18 20 10 16',
      'M 300 22 C 310 18 326 20 336 24 C 342 28 334 30 322 28 C 312 26 304 24 300 22'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — skin tones (gradient), hair, clothing,
  //          sunglasses with gradients
  // =====================================================================
  (g, a, defs) => {
    // === SKY GRADIENT — base, painted behind everything ===
    // (sky is in layer 8, figure colors here)

    // === RICARDO ===
    // Face skin gradient — warm tones, slight shading from below light
    const rSkinG = gd(defs, 'l', [
      ['0%', '#F7D5AD', 1], ['40%', '#F5CFA0', 1], ['100%', '#E8B888', 1]
    ], { x1: 118, y1: 34, x2: 118, y2: 114 });
    fl(g,
      'M 118 34 C 132 33 144 38 152 48 C 158 56 162 66 162 74 C 162 84 158 92 152 98 C 144 106 134 112 118 112 C 104 112 94 106 86 98 C 80 92 76 82 76 74 C 76 64 80 54 86 48 C 94 38 104 33 118 34 Z',
      rSkinG, a);
    // Jaw/chin area fill
    fo(g,
      'M 94 100 C 98 106 106 112 118 114 C 130 112 138 106 142 100 L 142 112 C 134 112 124 114 118 114 C 112 114 102 112 94 112 Z',
      '#E8B888', 0.5, false);
    // Neck skin
    const rNeckG = gd(defs, 'l', [
      ['0%', '#EDBE8C', 1], ['100%', '#D4A06E', 1]
    ], { x1: 118, y1: 112, x2: 118, y2: 126 });
    fl(g,
      'M 106 112 C 106 116 105 120 104 122 L 132 122 C 131 120 130 116 130 112 Z',
      rNeckG, false);
    // Ears skin
    fl(g,
      'M 78 66 C 74 62 70 64 70 70 C 70 76 72 82 76 86 C 78 88 80 86 80 82 L 82 70 Z',
      '#EDBE8C', false);
    fl(g,
      'M 160 66 C 164 62 168 64 168 70 C 168 76 166 82 162 86 C 160 88 158 86 158 82 L 156 70 Z',
      '#EDBE8C', false);
    // Hair fill — dark brown gradient
    const rHairG = gd(defs, 'l', [
      ['0%', '#3E2723', 1], ['50%', '#4E342E', 1], ['100%', '#5D4037', 1]
    ], { x1: 118, y1: 26, x2: 118, y2: 68 });
    fl(g,
      'M 80 66 C 78 52 84 40 94 34 C 104 28 114 26 124 26 C 134 26 144 30 150 38 C 156 46 160 56 160 66 L 156 62 C 154 52 148 44 140 38 C 132 32 122 30 112 32 C 100 36 90 44 86 56 L 84 62 Z',
      rHairG, a);
    // Sideburn fills
    fo(g, 'M 80 66 C 80 72 80 80 82 86 L 84 86 C 82 80 82 72 82 66 Z', '#3E2723', 0.7, false);
    fo(g, 'M 156 66 C 156 72 156 80 154 86 L 152 86 C 154 80 154 72 154 66 Z', '#3E2723', 0.7, false);
    // Sunglasses fill — dark gradient lenses
    const rLensG = gd(defs, 'l', [
      ['0%', '#1A1A1A', 1], ['60%', '#2C2C2C', 1], ['100%', '#1A1A1A', 1]
    ], { x1: 96, y1: 58, x2: 148, y2: 80 });
    fl(g,
      'M 96 64 C 98 60 102 58 108 58 L 118 58 C 120 58 122 60 122 64 L 122 76 C 122 78 120 80 118 80 L 106 80 C 102 80 98 78 96 76 Z',
      rLensG, false);
    fl(g,
      'M 124 64 C 126 60 130 58 134 58 L 142 58 C 146 58 148 60 148 64 L 148 76 C 148 78 146 80 142 80 L 132 80 C 128 80 124 78 124 76 Z',
      rLensG, false);
    // Sunglasses frame fill
    fo(g,
      'M 96 62 L 122 60 L 124 60 L 148 62 L 148 64 L 124 62 L 122 62 L 96 64 Z',
      '#1A1A1A', 0.9, false);
    // Black t-shirt fill — gradient for fabric depth
    const rShirtG = gd(defs, 'l', [
      ['0%', '#1A1A1A', 1], ['30%', '#252525', 1], ['60%', '#1E1E1E', 1], ['100%', '#141414', 1]
    ], { x1: 60, y1: 122, x2: 180, y2: 268 });
    fl(g,
      'M 104 122 C 96 126 82 134 72 146 C 64 156 60 168 58 182 C 56 198 56 216 58 236 L 62 268 L 176 268 L 180 236 C 182 216 182 198 180 182 C 178 168 174 156 166 146 C 156 134 140 126 132 122 Z',
      rShirtG, a);
    // Left arm skin — extended wide
    const rArmSkinG = gd(defs, 'l', [
      ['0%', '#F5D0A9', 1], ['100%', '#E8BD90', 1]
    ], { x1: 70, y1: 134, x2: 0, y2: 146 });
    fl(g,
      'M 72 146 C 62 142 50 138 38 134 C 26 130 16 128 6 128 L -2 134 L -2 146 C 2 140 8 140 16 140 C 26 142 38 146 50 148 C 64 152 76 156 76 156 Z',
      rArmSkinG, false);
    // Right arm skin — reaching center
    fl(g,
      'M 166 146 C 172 150 178 158 182 168 C 186 178 188 186 188 192 L 184 196 C 182 190 178 180 174 172 C 170 164 166 158 164 156 Z',
      '#F5D0A9', false);
    // Black pants fill — left leg
    const rPantsG = gd(defs, 'l', [
      ['0%', '#181818', 1], ['50%', '#222222', 1], ['100%', '#181818', 1]
    ], { x1: 30, y1: 268, x2: 80, y2: 268 });
    fl(g,
      'M 68 268 C 64 284 56 306 48 328 C 42 346 38 364 36 382 C 34 398 32 412 30 422 L 58 442 C 56 432 56 414 56 400 C 56 384 58 366 60 348 C 66 330 72 308 78 290 L 82 268 Z',
      rPantsG, false);
    // Black pants fill — right leg
    fl(g,
      'M 158 268 C 164 286 172 308 180 330 C 186 348 192 366 196 384 C 198 398 200 410 200 420 L 208 436 C 210 426 210 408 208 392 C 206 378 202 360 196 342 C 190 324 182 304 176 286 L 170 268 Z',
      rPantsG, false);

    // === SANDRA ===
    // Face skin gradient — warmer, lighter feminine tones
    const sSkinG = gd(defs, 'l', [
      ['0%', '#FADCC8', 1], ['40%', '#F7D2B8', 1], ['100%', '#ECBFA0', 1]
    ], { x1: 242, y1: 46, x2: 242, y2: 118 });
    fl(g,
      'M 242 46 C 254 45 264 50 272 58 C 278 66 280 74 280 82 C 280 90 278 98 272 104 C 264 112 254 116 242 116 C 230 116 220 112 214 104 C 208 98 206 90 206 82 C 206 74 208 66 214 58 C 220 50 230 45 242 46 Z',
      sSkinG, a);
    // Jaw/chin fill
    fo(g,
      'M 218 102 C 224 110 232 116 242 118 C 252 116 260 110 264 102 L 264 116 C 256 116 248 118 242 118 C 236 118 226 116 218 116 Z',
      '#ECBFA0', 0.5, false);
    // Neck skin
    const sNeckG = gd(defs, 'l', [
      ['0%', '#F0C8A8', 1], ['100%', '#DAA880', 1]
    ], { x1: 242, y1: 116, x2: 242, y2: 130 });
    fl(g,
      'M 232 116 C 232 120 231 124 230 126 L 254 126 C 253 124 252 120 252 116 Z',
      sNeckG, false);
    // Ears skin
    fl(g,
      'M 208 74 C 204 70 200 72 200 78 C 200 84 202 90 206 92 C 208 94 210 92 210 88 L 212 76 Z',
      '#F0C8A8', false);
    fl(g,
      'M 278 74 C 282 70 286 72 286 78 C 286 84 284 90 280 92 C 278 94 276 92 276 88 L 274 76 Z',
      '#F0C8A8', false);
    // Hair fill — reddish-brown gradient
    const sHairG = gd(defs, 'l', [
      ['0%', '#6D4C41', 1], ['50%', '#8D6E63', 1], ['100%', '#7B5B4F', 1]
    ], { x1: 210, y1: 40, x2: 278, y2: 82 });
    fl(g,
      'M 210 74 C 208 58 214 46 226 40 C 236 34 248 34 258 38 C 266 42 272 50 276 60 C 278 68 278 76 276 82 L 272 72 C 268 60 262 50 256 44 C 248 38 238 38 230 42 C 222 48 216 58 214 68 Z',
      sHairG, a);
    // Wind-blown hair fills — right flowing strands
    const sWindHairG1 = gd(defs, 'l', [
      ['0%', '#8D6E63', 1], ['100%', '#A1887F', 0.7]
    ], { x1: 272, y1: 48, x2: 356, y2: 62 });
    fl(g,
      'M 272 48 C 288 42 306 38 322 36 C 334 34 344 36 350 40 L 352 52 C 346 46 338 42 328 44 C 310 46 292 50 274 56 Z',
      sWindHairG1, false);
    fl(g,
      'M 274 56 C 292 50 310 46 328 44 C 338 42 346 46 352 52 L 354 62 C 348 56 340 52 330 52 C 312 54 294 58 276 64 Z',
      '#8D6E63', false);
    fl(g,
      'M 276 64 C 294 58 312 54 330 52 C 340 52 348 56 354 62 L 346 76 C 342 70 334 66 322 66 C 308 66 292 68 276 72 Z',
      '#7B5B4F', false);
    fl(g,
      'M 276 72 C 292 68 308 66 322 66 C 334 66 342 70 346 76 L 338 84 C 334 78 326 74 314 74 C 302 74 288 76 274 80 Z',
      '#6D4C41', false);
    // Wind-blown hair fills — left flowing
    fl(g,
      'M 212 50 C 198 46 182 44 168 46 C 158 48 152 54 150 60 L 158 66 C 160 60 166 56 174 54 C 186 52 198 54 210 58 Z',
      '#8D6E63', false);
    fl(g,
      'M 210 58 C 198 54 186 52 174 54 C 166 56 160 60 158 66 L 166 76 C 168 72 172 68 178 66 C 186 64 196 64 208 66 Z',
      '#7B5B4F', false);
    // Sunglasses fill — dark gradient
    const sLensG = gd(defs, 'l', [
      ['0%', '#1A1A1A', 1], ['60%', '#2C2C2C', 1], ['100%', '#1A1A1A', 1]
    ], { x1: 222, y1: 64, x2: 268, y2: 86 });
    fl(g,
      'M 222 70 C 224 66 228 64 232 64 L 240 64 C 242 64 244 66 244 70 L 244 82 C 244 84 242 86 240 86 L 230 86 C 226 86 222 84 222 82 Z',
      sLensG, false);
    fl(g,
      'M 246 70 C 248 66 252 64 256 64 L 262 64 C 266 64 268 66 268 70 L 268 82 C 268 84 266 86 262 86 L 254 86 C 250 86 246 84 246 82 Z',
      sLensG, false);
    // Sunglasses frame fill
    fo(g,
      'M 222 68 L 244 66 L 246 66 L 268 68 L 268 70 L 246 68 L 244 68 L 222 70 Z',
      '#1A1A1A', 0.9, false);
    // Black t-shirt fill — gradient
    const sShirtG = gd(defs, 'l', [
      ['0%', '#1A1A1A', 1], ['30%', '#252525', 1], ['60%', '#1E1E1E', 1], ['100%', '#141414', 1]
    ], { x1: 192, y1: 126, x2: 290, y2: 262 });
    fl(g,
      'M 230 126 C 222 130 210 138 202 148 C 196 158 192 170 192 186 C 192 204 192 224 194 244 L 196 262 L 286 262 L 288 244 C 290 224 290 204 290 186 C 290 170 286 158 280 148 C 272 136 262 130 254 126 Z',
      sShirtG, a);
    // Left arm skin — reaching center
    fl(g,
      'M 202 148 C 198 156 196 166 194 176 C 192 184 192 190 192 194 L 198 198 C 198 194 200 188 200 180 C 202 172 204 164 206 158 Z',
      '#FADCC2', false);
    // Right arm skin — raised high
    const sRaiseArmG = gd(defs, 'l', [
      ['0%', '#FADCC2', 1], ['100%', '#F0C8A8', 1]
    ], { x1: 280, y1: 148, x2: 334, y2: 44 });
    fl(g,
      'M 280 148 C 290 140 300 126 308 112 C 316 98 322 82 328 66 C 332 56 334 48 334 44 L 328 54 C 326 66 322 76 316 92 C 310 108 302 122 294 136 C 286 148 276 156 276 156 Z',
      sRaiseArmG, false);
    // Blue jeans fill — gradient for fabric depth
    const sJeansG = gd(defs, 'l', [
      ['0%', '#4A6FA5', 1], ['30%', '#5C7FB5', 1], ['60%', '#4A6FA5', 1], ['100%', '#3D5F8F', 1]
    ], { x1: 164, y1: 262, x2: 324, y2: 262 });
    // Left jean leg
    fl(g,
      'M 200 262 C 196 278 188 300 180 322 C 174 340 170 358 168 376 C 166 392 164 406 164 416 L 192 434 C 190 424 190 408 190 394 C 190 378 192 360 196 342 C 202 324 208 304 212 286 L 212 262 Z',
      sJeansG, false);
    // Right jean leg
    fl(g,
      'M 280 262 C 286 280 296 302 306 322 C 314 340 320 358 324 376 C 326 392 326 406 324 416 L 320 432 C 322 418 324 400 322 386 C 320 370 316 352 310 334 C 302 316 294 298 290 282 L 288 262 Z',
      sJeansG, false);
  },

  // =====================================================================
  // Layer 8: Sky gradient, shoe fills, hand skin fills
  // =====================================================================
  (g, a, defs) => {
    // Sky gradient — deep blue at top to lighter blue at bottom
    const skyG = gd(defs, 'l', [
      ['0%', '#0D47A1', 1], ['15%', '#1565C0', 1], ['30%', '#1976D2', 1],
      ['45%', '#1E88E5', 1], ['60%', '#2196F3', 1], ['75%', '#42A5F5', 1],
      ['88%', '#64B5F6', 1], ['100%', '#90CAF9', 1]
    ], { x1: 180, y1: 0, x2: 180, y2: 450 });
    fl(g,
      'M 0 0 L 360 0 L 360 450 L 0 450 Z',
      skyG, a);

    // Sun glow at bottom — radial gradient bloom
    const sunGlow = gd(defs, 'r', [
      ['0%', '#E3F2FD', 0.45], ['30%', '#BBDEFB', 0.3], ['60%', '#90CAF9', 0.15], ['100%', '#64B5F6', 0]
    ], { cx: 180, cy: 450, r: 180 });
    fl(g,
      'M 0 280 L 360 280 L 360 450 L 0 450 Z',
      sunGlow, false);

    // Secondary inner glow
    const sunGlow2 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.2], ['40%', '#E3F2FD', 0.1], ['100%', '#64B5F6', 0]
    ], { cx: 180, cy: 456, r: 100 });
    fl(g,
      'M 80 380 L 280 380 L 280 450 L 80 450 Z',
      sunGlow2, false);

    // Subtle cloud wisps
    fo(g,
      'M 8 14 C 18 8 38 10 50 16 C 58 20 52 26 40 24 C 26 22 14 18 8 14 Z',
      '#FFFFFF', 0.12, false);
    fo(g,
      'M 296 20 C 308 14 326 16 338 22 C 346 26 338 30 324 28 C 312 26 302 22 296 20 Z',
      '#FFFFFF', 0.1, false);

    // === RICARDO'S SHOES — gray Nike sneakers with blue swoosh ===
    // Left shoe fill — gradient gray
    const rShoeG = gd(defs, 'l', [
      ['0%', '#757575', 1], ['50%', '#616161', 1], ['100%', '#545454', 1]
    ], { x1: 2, y1: 430, x2: 56, y2: 456 });
    fl(g,
      'M 26 436 C 22 430 16 428 10 430 C 4 432 0 438 2 444 C 4 450 12 454 22 456 C 32 458 44 456 52 450 C 56 448 58 444 56 440 C 54 436 48 432 40 432 L 26 436 Z',
      rShoeG, false);
    // Left shoe sole — darker
    fl(g,
      'M 4 446 C 14 452 26 456 40 454 C 48 452 54 448 56 444 L 58 448 C 52 454 40 458 26 460 C 14 458 4 452 2 448 Z',
      '#333333', false);
    // Left blue Nike swoosh
    fl(g,
      'M 10 438 C 18 432 28 430 38 432 C 44 434 46 436 44 438 C 40 436 32 434 22 436 C 16 438 12 440 10 442 Z',
      '#1976D2', false);
    // Right shoe fill
    fl(g,
      'M 200 434 C 204 428 210 426 216 428 C 222 430 226 436 224 442 C 222 448 214 452 204 454 C 194 456 182 454 176 448 C 172 446 170 442 172 438 C 174 434 180 430 188 430 L 200 434 Z',
      rShoeG, false);
    // Right shoe sole
    fl(g,
      'M 222 444 C 214 450 202 454 188 452 C 180 450 174 446 172 442 L 170 446 C 176 452 188 458 202 458 C 214 456 224 450 226 444 Z',
      '#333333', false);
    // Right blue Nike swoosh
    fl(g,
      'M 218 436 C 210 430 200 428 190 430 C 184 432 182 434 184 436 C 190 434 200 432 210 434 C 214 436 218 438 218 440 Z',
      '#1976D2', false);
    // Shoe lace area fills
    fo(g,
      'M 28 426 C 30 424 34 424 38 426 L 40 432 L 26 436 L 26 432 Z',
      '#424242', 0.6, false);
    fo(g,
      'M 196 424 C 194 422 190 422 186 424 L 184 430 L 200 434 L 200 430 Z',
      '#424242', 0.6, false);

    // === SANDRA'S SHOES — black ballet flats ===
    const sShoeG = gd(defs, 'l', [
      ['0%', '#1A1A1A', 1], ['50%', '#2C2C2C', 1], ['100%', '#1A1A1A', 1]
    ], { x1: 140, y1: 424, x2: 186, y2: 450 });
    // Left shoe fill
    fl(g,
      'M 166 430 C 162 426 156 424 150 426 C 144 428 140 434 142 440 C 144 446 152 450 162 450 C 172 450 180 446 184 440 C 186 436 186 432 184 428 C 182 424 176 422 170 424 Z',
      sShoeG, false);
    // Right shoe fill
    fl(g,
      'M 322 428 C 326 424 332 422 338 424 C 344 426 348 432 346 438 C 344 444 336 448 326 448 C 316 448 308 444 304 438 C 302 434 302 430 304 426 C 306 422 312 420 318 422 Z',
      sShoeG, false);
    // Shoe sole lines
    fo(g,
      'M 144 442 C 152 448 162 450 172 448 C 180 446 186 442 186 440 L 188 444 C 182 450 172 454 162 454 C 152 454 144 450 142 446 Z',
      '#111111', 0.8, false);
    fo(g,
      'M 344 440 C 336 446 326 448 316 446 C 308 444 302 440 302 438 L 300 442 C 306 448 316 452 326 452 C 336 452 344 448 346 444 Z',
      '#111111', 0.8, false);

    // === HAND SKIN FILLS at clasp center ===
    // Ricardo's right hand
    const rHandSkinG = gd(defs, 'l', [
      ['0%', '#F5D0A9', 1], ['100%', '#E8BD90', 1]
    ], { x1: 160, y1: 150, x2: 190, y2: 196 });
    fl(g,
      'M 176 172 C 172 168 168 168 166 172 C 164 176 168 182 172 186 C 176 190 180 192 184 192 L 186 188 C 184 182 180 176 176 172 Z',
      rHandSkinG, false);
    // Ricardo fingers
    fl(g,
      'M 176 172 C 172 166 168 160 166 156 C 164 152 166 150 170 150 C 174 150 176 154 176 160 Z',
      '#F5D0A9', false);
    fl(g,
      'M 174 174 C 170 168 166 162 164 158 C 162 154 164 152 168 152 C 172 152 174 156 174 162 Z',
      '#F5D0A9', false);
    fl(g,
      'M 172 178 C 168 172 164 168 162 164 C 160 160 162 158 166 158 C 170 158 172 162 172 166 Z',
      '#F5D0A9', false);
    fl(g,
      'M 170 182 C 166 178 162 174 160 170 C 158 166 160 164 164 164 C 168 164 168 168 168 172 Z',
      '#F5D0A9', false);
    // Ricardo thumb
    fl(g,
      'M 184 184 C 188 180 190 174 188 168 C 186 164 182 162 180 166 C 178 170 180 176 184 180 Z',
      '#EDBE8C', false);

    // Sandra's left hand
    const sHandSkinG = gd(defs, 'l', [
      ['0%', '#FADCC2', 1], ['100%', '#F0C8A8', 1]
    ], { x1: 190, y1: 150, x2: 220, y2: 200 });
    fl(g,
      'M 204 176 C 208 172 212 172 214 176 C 216 180 212 186 208 190 C 204 194 200 196 196 196 L 194 192 C 196 186 200 180 204 176 Z',
      sHandSkinG, false);
    // Sandra fingers
    fl(g,
      'M 204 176 C 208 170 212 164 214 160 C 216 156 214 154 210 154 C 206 154 204 158 204 164 Z',
      '#FADCC2', false);
    fl(g,
      'M 206 178 C 210 172 214 166 216 162 C 218 158 216 156 212 156 C 208 156 206 160 206 166 Z',
      '#FADCC2', false);
    fl(g,
      'M 208 182 C 212 176 216 172 218 168 C 220 164 218 162 214 162 C 210 162 208 166 208 170 Z',
      '#FADCC2', false);
    fl(g,
      'M 210 186 C 214 182 218 178 220 174 C 222 170 220 168 216 168 C 212 168 212 172 212 176 Z',
      '#FADCC2', false);
    // Sandra thumb
    fl(g,
      'M 196 188 C 192 184 190 178 192 172 C 194 168 198 166 200 170 C 202 174 200 180 196 184 Z',
      '#F0C8A8', false);

    // Sandra raised right hand fill
    fl(g,
      'M 330 54 C 334 50 338 48 340 52 C 342 56 340 62 336 66 C 332 68 328 66 326 62 C 324 58 326 54 330 52 Z',
      '#FADCC2', false);
    // Raised hand finger fills
    fl(g,
      'M 334 50 C 336 44 338 38 336 32 C 334 28 330 28 330 32 C 330 38 332 44 334 50 Z',
      '#FADCC2', false);
    fl(g,
      'M 338 48 C 340 42 342 34 340 28 C 338 24 334 24 334 28 C 334 34 336 42 338 48 Z',
      '#FADCC2', false);
    fl(g,
      'M 340 52 C 344 46 346 40 344 34 C 342 30 338 30 338 34 C 338 40 340 46 340 52 Z',
      '#FADCC2', false);
    fl(g,
      'M 340 56 C 344 52 348 48 346 42 C 344 38 340 38 340 42 C 340 48 342 52 342 56 Z',
      '#FADCC2', false);
    fl(g,
      'M 330 56 C 326 52 322 48 322 44 C 322 40 326 40 328 44 C 330 48 330 52 330 56 Z',
      '#F0C8A8', false);

    // Ricardo's left hand fill (at edge)
    fl(g,
      'M 2 132 C 0 128 -2 126 0 124 C 2 120 6 120 8 124 L 6 130 Z',
      '#F5D0A9', false);
    // Ricardo left hand finger fills
    fl(g,
      'M 0 126 C -4 122 -6 118 -4 114 C -2 110 2 112 4 116 L 2 124 Z',
      '#F5D0A9', false);
    fl(g,
      'M 2 124 C -2 118 -4 114 -2 108 C 0 104 4 106 4 110 L 4 122 Z',
      '#F5D0A9', false);
    fl(g,
      'M 4 126 C 2 120 0 116 2 110 C 4 106 8 108 8 112 L 6 124 Z',
      '#F5D0A9', false);
    fl(g,
      'M 6 130 C 4 126 2 122 4 118 C 6 114 10 116 10 120 L 8 128 Z',
      '#F5D0A9', false);
  },

  // =====================================================================
  // Layer 9: Polish — "300" text fill, smiles, cheek blush, sunglasses
  //          reflections, fabric folds, hair wind wisps, shoe treads,
  //          catchlights, shadows, highlights, motion blur hints
  // =====================================================================
  (g, a, defs) => {
    // === "300" TEXT FILL on Ricardo's shirt ===
    const t300fG = gd(defs, 'l', [
      ['0%', '#BDBDBD', 1], ['50%', '#9E9E9E', 1], ['100%', '#757575', 1]
    ], { x1: 94, y1: 170, x2: 140, y2: 190 });
    const t300f = ce('text', {
      x: 96, y: 186,
      fill: t300fG,
      'font-size': '22', 'font-weight': 'bold',
      'font-family': 'Impact, Arial Black, sans-serif',
      'letter-spacing': '1'
    });
    t300f.textContent = '300';
    if (a) t300f.classList.add('active-element');
    g.appendChild(t300f);

    // === FACE SHADOWS AND HIGHLIGHTS ===
    // Ricardo face — shadow under chin from below lighting
    sh(g,
      'M 94 100 C 98 106 106 112 118 114 C 130 112 138 106 142 100 L 136 96 C 130 102 124 106 118 106 C 112 106 106 102 100 96 Z',
      0.15, false);
    // Ricardo nose shadow
    sh(g,
      'M 118 80 C 122 82 126 86 128 94 L 126 100 C 124 92 122 86 118 82 Z',
      0.1, false);
    // Ricardo face highlight — forehead catching light from below
    hi(g,
      'M 96 54 C 104 48 112 46 120 48 C 128 50 136 54 140 60 L 138 66 C 134 60 128 56 120 54 C 112 52 104 54 98 60 Z',
      0.15, false);
    // Sandra face — under chin shadow
    sh(g,
      'M 218 102 C 224 110 232 116 242 118 C 252 116 260 110 264 102 L 258 98 C 252 106 248 110 242 110 C 236 110 232 106 226 98 Z',
      0.15, false);
    // Sandra nose shadow
    sh(g,
      'M 242 86 C 246 88 250 92 250 98 L 248 102 C 248 96 246 92 242 88 Z',
      0.1, false);
    // Sandra face highlight — forehead
    hi(g,
      'M 220 58 C 228 52 236 50 244 52 C 252 54 258 58 262 64 L 260 70 C 256 64 250 60 242 58 C 234 56 226 60 222 66 Z',
      0.12, false);
    // Sandra cheek blush — warm pink spots
    feo(g, 'ellipse', { cx: 222, cy: 100, rx: 9, ry: 4, fill: '#F48FB1' }, 0.2, false);
    feo(g, 'ellipse', { cx: 260, cy: 100, rx: 9, ry: 4, fill: '#F48FB1' }, 0.2, false);
    // Ricardo subtle cheek tone
    feo(g, 'ellipse', { cx: 96, cy: 92, rx: 7, ry: 3, fill: '#E8A080' }, 0.12, false);
    feo(g, 'ellipse', { cx: 140, cy: 92, rx: 7, ry: 3, fill: '#E8A080' }, 0.12, false);

    // === SMILE FILLS ===
    // Sandra — big open smile with lips and teeth
    // Lower lip fill
    fl(g,
      'M 226 112 C 230 118 234 122 240 122 C 246 122 250 118 254 112 L 250 112 C 248 116 244 120 240 120 C 236 120 232 116 230 112 Z',
      '#D46A6A', false);
    // Upper lip fill
    fl(g,
      'M 226 112 C 230 110 234 108 237 110 C 239 112 241 112 243 110 C 246 108 250 110 254 112 L 250 112 C 248 110 246 110 244 112 C 242 114 238 114 236 112 C 234 110 232 110 230 112 Z',
      '#C65858', false);
    // Teeth fill — white
    feo(g, 'rect', { x: 229, y: 112, width: 22, height: 6, rx: 1, fill: '#FFFFFF' }, 0.88, false);
    // Ricardo mouth — slight grin
    fl(g,
      'M 110 108 C 114 112 118 114 122 114 C 126 112 128 110 130 108 L 128 106 C 126 110 124 112 120 112 C 116 112 114 110 112 106 Z',
      '#C9756B', false);

    // === SUNGLASSES REFLECTIONS — catchlights ===
    // Ricardo left lens — bright point reflection
    feo(g, 'ellipse', { cx: 106, cy: 66, rx: 4, ry: 2.5, fill: '#FFFFFF' }, 0.35, a);
    // Ricardo left lens — secondary reflection
    feo(g, 'ellipse', { cx: 114, cy: 72, rx: 2, ry: 1.5, fill: '#FFFFFF' }, 0.15, false);
    // Ricardo right lens
    feo(g, 'ellipse', { cx: 132, cy: 66, rx: 4, ry: 2.5, fill: '#FFFFFF' }, 0.35, false);
    feo(g, 'ellipse', { cx: 140, cy: 72, rx: 2, ry: 1.5, fill: '#FFFFFF' }, 0.15, false);
    // Sandra left lens
    feo(g, 'ellipse', { cx: 230, cy: 72, rx: 3.5, ry: 2, fill: '#FFFFFF' }, 0.35, false);
    feo(g, 'ellipse', { cx: 238, cy: 78, rx: 2, ry: 1.5, fill: '#FFFFFF' }, 0.15, false);
    // Sandra right lens
    feo(g, 'ellipse', { cx: 254, cy: 72, rx: 3.5, ry: 2, fill: '#FFFFFF' }, 0.35, false);
    feo(g, 'ellipse', { cx: 262, cy: 78, rx: 2, ry: 1.5, fill: '#FFFFFF' }, 0.15, false);
    // Sunglasses frame highlights
    pps(g, [
      'M 96 60 L 122 58', 'M 124 58 L 148 60'
    ], false, 0.4, '#555555');
    pps(g, [
      'M 222 66 L 244 64', 'M 246 64 L 268 66'
    ], false, 0.4, '#555555');

    // === FABRIC FOLD SHADOWS AND HIGHLIGHTS ===
    // Ricardo t-shirt folds — shadow creases
    sh(g,
      'M 80 158 C 84 170 86 184 84 200 L 88 200 C 90 184 88 170 84 158 Z',
      0.08, false);
    sh(g,
      'M 148 160 C 152 172 154 186 152 202 L 156 202 C 158 186 156 172 152 160 Z',
      0.08, false);
    sh(g,
      'M 94 212 C 96 224 96 238 94 252 L 98 252 C 100 238 100 224 98 212 Z',
      0.08, false);
    sh(g,
      'M 140 214 C 142 226 142 240 140 254 L 144 254 C 146 240 146 226 144 214 Z',
      0.08, false);
    // Ricardo t-shirt highlight — center chest where light hits
    hi(g,
      'M 106 160 C 112 158 118 156 124 158 C 130 160 134 164 136 170 L 130 172 C 128 168 124 164 118 162 C 112 160 108 162 106 166 Z',
      0.1, false);
    // Sandra t-shirt folds
    sh(g,
      'M 212 154 C 214 166 216 180 214 196 L 218 196 C 220 180 218 166 216 154 Z',
      0.08, false);
    sh(g,
      'M 264 156 C 268 168 270 182 268 198 L 272 198 C 274 182 272 168 268 156 Z',
      0.08, false);
    sh(g,
      'M 222 202 C 224 214 224 228 222 242 L 226 242 C 228 228 228 214 226 202 Z',
      0.08, false);
    sh(g,
      'M 258 204 C 260 216 260 230 258 244 L 262 244 C 264 230 264 216 262 204 Z',
      0.08, false);
    // Sandra t-shirt highlight center
    hi(g,
      'M 234 152 C 240 150 246 150 252 152 C 258 156 262 162 264 168 L 258 170 C 256 166 252 160 246 158 C 240 156 236 156 234 158 Z',
      0.08, false);

    // === JEANS FOLDS AND HIGHLIGHTS ===
    // Sandra jeans fold shadows
    sh(g,
      'M 198 278 C 194 296 188 316 182 336 L 186 336 C 192 316 198 296 202 278 Z',
      0.06, false);
    sh(g,
      'M 290 278 C 296 296 302 316 308 336 L 312 336 C 306 316 300 296 294 278 Z',
      0.06, false);
    // Jeans knee highlight — where fabric catches light
    hi(g,
      'M 178 326 C 182 322 186 320 190 322 C 194 324 196 328 196 334 L 192 336 C 192 330 190 326 188 324 C 186 322 182 324 180 328 Z',
      0.08, false);
    hi(g,
      'M 308 322 C 312 318 316 316 320 318 C 324 320 326 324 326 330 L 322 332 C 322 326 320 322 318 320 C 316 318 312 320 310 324 Z',
      0.08, false);
    // Jeans color variation — faded areas on thighs
    fo(g,
      'M 204 270 C 210 268 218 268 224 270 L 222 290 C 216 288 210 288 204 290 Z',
      '#7C9CC4', 0.2, false);
    fo(g,
      'M 258 270 C 264 268 272 268 278 270 L 276 290 C 270 288 264 288 258 290 Z',
      '#7C9CC4', 0.2, false);

    // === PANTS SHADOWS ===
    // Ricardo pants — shadow in crotch area
    sh(g,
      'M 82 270 C 90 268 100 266 110 266 C 120 266 130 266 140 268 C 150 270 158 272 164 274 L 160 280 C 150 276 140 274 130 274 C 120 274 108 274 96 276 C 88 278 82 280 82 280 Z',
      0.1, false);
    // Ricardo pants — inner leg shadows
    sh(g,
      'M 72 290 C 68 306 62 324 58 340 L 62 342 C 66 326 72 308 76 290 Z',
      0.06, false);
    sh(g,
      'M 162 290 C 166 308 172 326 178 342 L 174 344 C 170 328 164 310 160 292 Z',
      0.06, false);

    // === HAIR WIND DETAIL — extra wisps and movement ===
    // Sandra — individual flying hair wisps
    pps(g, [
      'M 268 46 C 286 38 306 34 326 32',
      'M 276 52 C 296 44 318 40 340 38',
      'M 278 60 C 298 54 320 50 342 48',
      'M 274 68 C 292 62 312 60 328 60',
      'M 216 48 C 202 42 186 40 172 42',
      'M 212 56 C 200 50 188 48 178 50',
      'M 210 64 C 198 60 188 60 180 62'
    ], false, 0.5, '#A1887F');
    // Hair highlight strands — lighter color
    pps(g, [
      'M 274 50 C 290 44 310 42 330 40',
      'M 276 58 C 294 52 314 48 334 46',
      'M 214 52 C 200 48 188 46 176 48'
    ], false, 0.4, '#BCAAA4');
    // Ricardo hair shine
    hi(g,
      'M 108 30 C 114 28 122 28 128 30 C 134 32 138 36 140 40 L 136 42 C 134 38 130 34 124 32 C 118 30 112 32 108 36 Z',
      0.12, false);

    // === SHOE DETAILS ===
    // Ricardo shoe sole treads
    pps(g, [
      'M 8 448 C 14 452 22 454 32 454',
      'M 14 450 C 20 454 28 456 38 456',
      'M 176 448 C 184 452 194 454 204 452',
      'M 180 450 C 188 454 198 456 208 454'
    ], false, 0.4, '#222222');
    // Sandra shoe shine highlight
    hi(g,
      'M 154 430 C 160 428 166 428 172 430 L 170 434 C 164 432 158 432 154 434 Z',
      0.15, false);
    hi(g,
      'M 324 428 C 330 426 336 426 340 428 L 338 432 C 332 430 326 430 322 432 Z',
      0.15, false);
    // Nike swoosh highlight
    hi(g,
      'M 14 436 C 22 432 30 430 38 432 L 36 434 C 28 432 20 434 14 438 Z',
      0.1, false);
    hi(g,
      'M 214 434 C 208 430 200 428 192 430 L 194 432 C 202 430 208 432 214 436 Z',
      0.1, false);

    // === MOTION BLUR HINTS — subtle streaks around figures ===
    // Vertical motion streaks along legs
    pps(g, [
      'M 38 396 L 36 406', 'M 48 394 L 46 404',
      'M 196 394 L 198 404', 'M 206 392 L 208 402',
      'M 166 390 L 164 400', 'M 184 388 L 186 398',
      'M 318 392 L 320 402', 'M 326 390 L 324 400'
    ], false, 0.3, '#90CAF9');
    // Air whoosh lines around spread limbs
    pps(g, [
      'M 40 128 C 30 132 22 138 16 144',
      'M 44 140 C 34 144 26 148 20 154',
      'M 310 98 C 320 92 328 84 334 76',
      'M 304 108 C 314 102 322 94 328 86'
    ], false, 0.3, '#BBDEFB');

    // === BODY SHADOWS ===
    // Shadow under Ricardo's arm on torso
    sh(g,
      'M 72 148 C 78 146 82 148 84 152 L 82 160 C 80 156 78 152 72 154 Z',
      0.08, false);
    // Shadow under Sandra's shirt hem on jeans
    sh(g,
      'M 198 260 C 214 264 232 268 244 268 C 260 268 276 264 288 260 L 288 264 C 276 268 260 272 244 272 C 228 272 212 268 198 264 Z',
      0.08, false);
    // Shadow under Ricardo's shirt hem on pants
    sh(g,
      'M 64 268 C 80 272 100 276 120 278 C 140 276 160 274 176 268 L 176 272 C 160 278 140 280 120 282 C 100 280 80 276 64 272 Z',
      0.08, false);

    // === ATMOSPHERIC DEPTH ===
    // Subtle haze overlay at bottom edges
    const hazeG = gd(defs, 'l', [
      ['0%', '#90CAF9', 0.08], ['100%', '#90CAF9', 0]
    ], { x1: 180, y1: 450, x2: 180, y2: 350 });
    fl(g,
      'M 0 350 L 360 350 L 360 450 L 0 450 Z',
      hazeG, false);

    // === WATCH FACE FILL (Sandra's wrist) ===
    feo(g, 'circle', { cx: 192, cy: 184, r: 2.5, fill: '#E0E0E0' }, 0.6, false);
    // Watch hands
    pps(g, ['M 192 184 L 192 182', 'M 192 184 L 193 183'], false, 0.4, '#333333');

    // === SUBTLE LIGHT BLOOM at bottom center ===
    const bloomG = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.08], ['100%', '#FFFFFF', 0]
    ], { cx: 180, cy: 450, r: 120 });
    fl(g,
      'M 60 340 L 300 340 L 300 450 L 60 450 Z',
      bloomG, false);

    // === FINGER JOINT SHADOW DETAILS ===
    // Shadow between interlocking fingers
    sh(g,
      'M 172 160 C 176 156 182 154 188 156 C 194 158 200 156 206 160 L 204 164 C 198 160 192 162 186 160 C 180 158 174 160 172 164 Z',
      0.08, false);
    // Knuckle highlights on clasped hands
    hi(g,
      'M 168 158 C 170 154 174 152 176 156 L 174 160 C 172 156 170 158 168 162 Z',
      0.06, false);
    hi(g,
      'M 212 162 C 214 158 216 156 218 160 L 216 164 C 214 160 212 162 212 166 Z',
      0.06, false);
  }
];
