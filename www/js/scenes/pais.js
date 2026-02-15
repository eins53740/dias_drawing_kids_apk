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
