const tioavoLayers = [
  // ================================================================
  // Layer 0: Composition guides
  // Horizon, figure zones, mountain triangles, golden-ratio markers
  // ================================================================
  (g, a) => {
    // Horizon line at ~y220
    pp(g, ['M 0 220 L 360 220'], a, lt);
    // Vertical center
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Rule of thirds vertical
    pp(g, ['M 120 0 L 120 450', 'M 240 0 L 240 450'], a, lt);
    // Rule of thirds horizontal
    pp(g, ['M 0 150 L 360 150', 'M 0 300 L 360 300'], a, lt);
    // Bruno figure zone (left, larger — selfie proximity)
    pp(g, ['M 30 230 L 30 450', 'M 175 230 L 175 450'], a, lt);
    pp(g, ['M 30 280 L 175 280'], a, lt);
    // Head oval guide — Bruno
    pp(g, ['M 108 240 C 140 240 160 260 160 290 C 160 320 140 340 108 340 C 76 340 56 320 56 290 C 56 260 76 240 108 240 Z'], a, lt);
    // Tio-Avo figure zone (right, slightly smaller/behind)
    pp(g, ['M 190 240 L 190 450', 'M 320 240 L 320 450'], a, lt);
    pp(g, ['M 190 275 L 320 275'], a, lt);
    // Head oval guide — Tio-Avo
    pp(g, ['M 252 238 C 278 238 295 256 295 282 C 295 308 278 324 252 324 C 226 324 209 308 209 282 C 209 256 226 238 252 238 Z'], a, lt);
    // Mountain triangle guides
    pp(g, ['M 0 220 L 85 15 L 175 220'], a, lt);
    pp(g, ['M 180 220 L 275 25 L 360 220'], a, lt);
    // Sky zone upper bound
    pp(g, ['M 0 60 L 360 60'], a, lt);
    // Boardwalk placement guide
    pp(g, ['M 215 120 L 350 95'], a, lt);
  },

  // ================================================================
  // Layer 1: Body outlines — torsos, shoulders, necks, arms
  // Both figures from chest up, selfie framing
  // ================================================================
  (g, a) => {
    // === BRUNO (left, closer) ===
    // Neck — muscular, slightly angled
    pp(g, [
      'M 90 340 C 88 348 86 354 85 360 C 84 365 83 370 82 375',
      'M 126 338 C 128 346 130 352 131 358 C 132 363 133 368 134 373'
    ], a);
    // Left shoulder contour — sweeping curve down
    pp(g, [
      'M 82 375 C 72 378 60 384 48 392 C 38 400 30 410 26 422 C 24 430 22 440 20 450'
    ], a);
    // Right shoulder contour
    pp(g, [
      'M 134 373 C 144 376 156 382 166 390 C 174 398 180 408 182 420 C 183 432 184 442 184 450'
    ], a);
    // Chest/torso left edge
    pp(g, [
      'M 26 422 C 24 432 22 442 20 450'
    ], a);
    // Chest/torso right edge
    pp(g, [
      'M 182 420 C 183 434 184 444 184 450'
    ], a);
    // Left arm outer edge (visible at side)
    pp(g, [
      'M 48 392 C 40 400 34 412 30 426 C 28 436 26 444 24 450'
    ], a);
    // T-shirt sleeve seam left
    pp(g, [
      'M 52 390 C 46 396 40 404 36 414 C 34 420 32 424 30 428'
    ], a);
    // T-shirt sleeve seam right
    pp(g, [
      'M 162 388 C 168 394 174 402 178 412 C 180 418 182 422 183 426'
    ], a);
    // Collar bone hint left
    pp(g, ['M 86 374 C 78 376 70 380 62 386'], a, lt);
    // Collar bone hint right
    pp(g, ['M 130 372 C 138 374 146 378 154 384'], a, lt);

    // === TIO-AVO (right, slightly behind) ===
    // Neck — thicker, older
    pp(g, [
      'M 238 322 C 236 330 234 338 233 344 C 232 348 232 352 232 356',
      'M 268 320 C 270 328 272 336 273 342 C 274 346 274 350 274 354'
    ], a);
    // Left shoulder
    pp(g, [
      'M 232 356 C 222 360 210 368 200 378 C 192 388 188 398 186 412 C 184 426 184 440 184 450'
    ], a);
    // Right shoulder
    pp(g, [
      'M 274 354 C 284 358 296 364 306 374 C 314 382 320 394 322 408 C 324 424 326 440 328 450'
    ], a);
    // Right arm outer edge
    pp(g, [
      'M 306 374 C 314 384 320 398 324 414 C 326 428 328 442 330 450'
    ], a);
    // Sweatshirt body left
    pp(g, [
      'M 200 378 C 194 392 190 408 188 428 C 186 440 186 446 186 450'
    ], a);
    // Sweatshirt body right
    pp(g, [
      'M 322 408 C 324 424 326 440 328 450'
    ], a);
  },

  // ================================================================
  // Layer 2: EXTREMELY detailed faces
  // Bruno: angular lean face, defined jawline, prominent nose, friendly smile, stubble
  // Tio-Avo: weathered, thick eyebrows, squinting, warm smile, forehead wrinkles
  // ================================================================
  (g, a) => {
    // === BRUNO FACE ===
    // Head outline — larger due to selfie perspective, angular jawline
    pp(g, [
      'M 68 296 C 65 272 70 254 80 244 C 88 236 98 232 108 234 C 118 236 128 244 136 258 C 142 270 146 284 146 298 C 146 310 142 320 136 328 C 130 334 124 340 118 344 C 112 346 106 346 100 342 C 94 338 88 330 82 320 C 76 312 72 306 70 300'
    ], a);
    // Left jaw angle
    pp(g, ['M 68 296 C 66 302 66 308 68 314 C 70 318 74 322 78 324'], a);
    // Right jaw angle
    pp(g, ['M 146 298 C 148 304 148 308 146 312 C 144 316 140 320 136 324'], a);
    // Chin contour
    pp(g, ['M 96 342 C 100 348 106 350 112 350 C 118 348 122 346 124 342'], a);
    // Left ear — detailed with inner folds
    pp(g, [
      'M 64 278 C 58 274 54 278 52 284 C 50 290 50 298 52 304 C 54 308 58 310 64 308'
    ], a);
    // Ear tragus
    pp(g, ['M 60 290 C 58 290 56 292 58 296'], a, lt);
    // Ear helix fold
    pp(g, ['M 56 280 C 54 286 54 294 56 302'], a, lt);
    // Right ear
    pp(g, [
      'M 148 274 C 154 270 158 274 160 280 C 162 286 162 294 160 300 C 158 304 154 306 148 304'
    ], a);
    // Right ear inner fold
    pp(g, ['M 154 282 C 156 288 156 294 154 298'], a, lt);

    // Left eye — detailed almond shape with lid crease
    pp(g, [
      'M 80 286 C 82 280 88 276 96 278 C 104 280 108 284 108 290 C 108 296 102 300 96 300 C 88 300 82 296 80 290'
    ], a);
    // Left upper eyelid fold
    pp(g, ['M 80 286 C 84 282 90 279 96 280 C 102 281 106 284 108 288'], a);
    // Left lower lid
    pp(g, ['M 82 292 C 88 296 94 298 100 296 C 104 294 106 292 108 290'], a, lt);
    // Left iris outline
    fe(g, 'circle', { cx: 94, cy: 288, r: 5.5, fill: 'none', stroke: a ? HL : '#3E2518', 'stroke-width': 0.6 }, a);
    // Left pupil
    fe(g, 'circle', { cx: 94, cy: 288, r: 3, fill: a ? HL : '#1a1a1a' }, a);
    // Left iris detail ring
    fe(g, 'circle', { cx: 94, cy: 288, r: 4.5, fill: 'none', stroke: a ? HL : '#5C3A1E', 'stroke-width': 0.3 }, a);

    // Right eye
    pp(g, [
      'M 118 284 C 120 278 126 274 134 276 C 140 278 144 282 144 288 C 144 294 138 298 132 298 C 124 298 120 294 118 288'
    ], a);
    // Right upper eyelid fold
    pp(g, ['M 118 284 C 122 280 128 277 134 278 C 138 279 142 282 144 286'], a);
    // Right lower lid
    pp(g, ['M 120 290 C 126 294 132 296 136 294 C 140 292 142 290 144 288'], a, lt);
    // Right iris outline
    fe(g, 'circle', { cx: 130, cy: 286, r: 5.5, fill: 'none', stroke: a ? HL : '#3E2518', 'stroke-width': 0.6 }, a);
    // Right pupil
    fe(g, 'circle', { cx: 130, cy: 286, r: 3, fill: a ? HL : '#1a1a1a' }, a);
    // Right iris detail ring
    fe(g, 'circle', { cx: 130, cy: 286, r: 4.5, fill: 'none', stroke: a ? HL : '#5C3A1E', 'stroke-width': 0.3 }, a);

    // Left eyebrow — thick, dark, angular (Dias family trait)
    pp(g, [
      'M 76 274 C 80 266 88 262 98 264 C 104 266 108 270 112 274'
    ], a);
    // Eyebrow thickness line
    pp(g, ['M 78 276 C 82 270 90 266 100 268 C 106 270 110 272 112 276'], a);
    // Right eyebrow
    pp(g, [
      'M 116 272 C 120 266 128 262 136 264 C 142 268 146 272 148 276'
    ], a);
    pp(g, ['M 118 274 C 122 268 130 266 138 268 C 142 270 146 274 148 278'], a);

    // Nose — prominent, straight bridge, defined tip
    pp(g, [
      'M 112 276 C 110 282 109 290 108 298 C 108 302 108 306 108 310'
    ], a);
    // Nose bridge shadow line
    pp(g, ['M 110 278 C 109 284 108 292 108 300'], a, lt);
    // Nose tip — bulbous detail
    pp(g, [
      'M 100 314 C 102 318 106 322 110 322 C 114 322 118 320 120 316 C 122 314 122 312 120 310'
    ], a);
    // Nostril left
    pp(g, ['M 100 314 C 98 312 98 310 100 308'], a);
    // Nostril right
    pp(g, ['M 120 310 C 122 308 124 308 124 310'], a);
    // Nose wing left
    pp(g, ['M 96 310 C 98 314 100 316 102 316'], a, lt);
    // Nose wing right
    pp(g, ['M 122 312 C 120 316 118 318 116 318'], a, lt);

    // Mouth — friendly wide smile showing upper teeth
    pp(g, [
      'M 86 330 C 92 324 100 320 108 320 C 116 320 124 322 130 328'
    ], a);
    // Upper lip contour
    pp(g, [
      'M 86 330 C 90 328 96 324 102 322 C 106 320 110 320 114 322 C 118 324 124 326 130 328'
    ], a);
    // Cupid's bow
    pp(g, ['M 102 322 C 106 318 110 318 114 322'], a);
    // Lower lip
    pp(g, [
      'M 88 332 C 94 340 102 344 110 344 C 118 342 126 338 130 330'
    ], a);
    // Lower lip fullness
    pp(g, ['M 94 338 C 100 342 108 344 114 342 C 120 340 124 336 128 332'], a, lt);
    // Teeth line (upper teeth edge)
    pp(g, ['M 90 330 C 96 326 104 324 110 324 C 116 324 122 326 128 330'], a, lt);
    // Individual tooth lines
    pp(g, ['M 100 326 L 100 330', 'M 106 324 L 106 330', 'M 112 324 L 112 330', 'M 118 326 L 118 330'], a, lt);
    // Gum line
    pp(g, ['M 92 328 C 98 324 106 322 112 322 C 118 322 124 324 128 328'], a, lt);

    // Nasolabial folds — deep creases from nose to mouth corners
    pp(g, [
      'M 96 308 C 94 314 90 322 86 330',
      'M 122 306 C 124 312 126 320 130 328'
    ], a);
    // Secondary nasolabial fold (deeper)
    pp(g, [
      'M 94 310 C 92 316 88 324 86 328',
      'M 124 308 C 126 314 128 322 130 326'
    ], a, lt);

    // Chin dimple/cleft
    pp(g, ['M 106 348 C 108 350 110 350 112 348'], a, lt);
    // Chin shadow line
    pp(g, ['M 98 344 C 102 348 108 350 114 348 C 118 346 122 342 124 338'], a, lt);

    // === TIO-AVO FACE ===
    // Head outline — slightly smaller (further), weathered features
    pp(g, [
      'M 216 284 C 214 264 218 248 228 240 C 236 234 244 232 254 234 C 264 236 272 244 278 256 C 284 266 286 278 286 292 C 286 302 282 312 276 318 C 270 324 264 328 258 330 C 252 332 246 330 240 326 C 234 322 228 314 224 304 C 220 296 218 290 216 286'
    ], a);
    // Left jaw contour
    pp(g, ['M 216 284 C 214 290 214 298 216 304 C 218 308 222 312 226 316'], a);
    // Right jaw contour
    pp(g, ['M 286 292 C 288 298 286 304 284 308 C 282 312 278 316 274 318'], a);
    // Chin
    pp(g, ['M 240 326 C 244 330 250 332 256 332 C 262 330 266 328 268 324'], a);

    // Left ear
    pp(g, [
      'M 212 272 C 206 268 202 272 200 278 C 198 284 198 292 200 298 C 202 302 206 304 212 302'
    ], a);
    pp(g, ['M 204 280 C 202 286 202 292 204 296'], a, lt);
    // Right ear
    pp(g, [
      'M 288 268 C 294 264 298 268 300 274 C 302 280 302 288 300 294 C 298 298 294 300 288 298'
    ], a);
    pp(g, ['M 296 276 C 298 282 298 288 296 292'], a, lt);

    // Eyes — semi-closed, squinting in sunlight
    // Left eye
    pp(g, [
      'M 228 278 C 230 274 236 270 242 272 C 248 274 252 278 252 282 C 252 286 248 288 242 288 C 236 288 230 284 228 280'
    ], a);
    // Left upper lid (heavy, squinting)
    pp(g, ['M 228 278 C 232 274 238 272 244 273 C 248 274 250 276 252 280'], a);
    // Left lower lid
    pp(g, ['M 230 282 C 234 286 240 288 246 286 C 250 284 252 282 252 280'], a, lt);
    // Left pupil (smaller due to squinting)
    fe(g, 'circle', { cx: 240, cy: 280, r: 2.5, fill: a ? HL : '#1a1a1a' }, a);
    fe(g, 'circle', { cx: 240, cy: 280, r: 4, fill: 'none', stroke: a ? HL : '#3E2518', 'stroke-width': 0.5 }, a);

    // Right eye
    pp(g, [
      'M 258 276 C 260 272 266 268 272 270 C 278 272 280 276 280 280 C 280 284 276 286 272 286 C 266 286 260 282 258 278'
    ], a);
    pp(g, ['M 258 276 C 262 272 268 270 274 271 C 278 272 280 274 280 278'], a);
    pp(g, ['M 260 280 C 264 284 270 286 274 284 C 278 282 280 280 280 278'], a, lt);
    fe(g, 'circle', { cx: 270, cy: 278, r: 2.5, fill: a ? HL : '#1a1a1a' }, a);
    fe(g, 'circle', { cx: 270, cy: 278, r: 4, fill: 'none', stroke: a ? HL : '#3E2518', 'stroke-width': 0.5 }, a);

    // VERY THICK DARK EYEBROWS — defining family feature! Triple-line technique
    // Left eyebrow outer
    pp(g, ['M 224 268 C 230 260 240 256 250 260'], a);
    // Left eyebrow middle
    pp(g, ['M 226 270 C 232 264 242 260 252 262'], a);
    // Left eyebrow inner (thickness)
    pp(g, ['M 228 272 C 234 266 244 264 252 266'], a);
    // Right eyebrow outer
    pp(g, ['M 256 258 C 264 254 274 256 282 262'], a);
    // Right eyebrow middle
    pp(g, ['M 254 261 C 262 258 272 260 280 264'], a);
    // Right eyebrow inner
    pp(g, ['M 256 264 C 264 260 274 262 280 268'], a);

    // Crow's feet wrinkles — squinting in sun
    pp(g, [
      'M 226 276 C 222 274 218 272 214 270',
      'M 226 280 C 222 280 218 280 214 280',
      'M 226 284 C 222 286 218 288 214 290'
    ], a, lt);
    pp(g, [
      'M 282 274 C 286 272 290 270 294 268',
      'M 282 278 C 286 278 290 278 294 278',
      'M 282 282 C 286 284 290 286 294 288'
    ], a, lt);

    // Forehead wrinkle lines (3 distinct lines)
    pp(g, ['M 226 250 C 236 248 248 248 260 250 C 268 252 274 254 280 256'], a, lt);
    pp(g, ['M 228 254 C 238 252 250 252 262 254 C 270 256 276 258 282 260'], a, lt);
    pp(g, ['M 230 258 C 240 256 252 256 264 258 C 272 260 278 262 282 264'], a, lt);

    // Nose — prominent, family resemblance to Bruno
    pp(g, [
      'M 254 266 C 252 272 251 280 250 288 C 250 292 250 296 250 300'
    ], a);
    pp(g, ['M 252 268 C 251 274 250 282 250 290'], a, lt);
    // Nose tip
    pp(g, [
      'M 242 304 C 244 308 248 310 252 310 C 256 310 260 308 262 304'
    ], a);
    // Nostrils
    pp(g, ['M 242 304 C 240 302 240 300 242 298'], a);
    pp(g, ['M 262 304 C 264 302 264 300 262 298'], a);
    // Nose wings
    pp(g, ['M 238 300 C 240 304 242 306 244 306'], a, lt);
    pp(g, ['M 264 302 C 262 306 260 308 258 306'], a, lt);

    // Mouth — warm, slightly asymmetric smile
    pp(g, [
      'M 232 316 C 238 310 246 308 252 308 C 258 308 264 310 270 316'
    ], a);
    // Upper lip
    pp(g, ['M 234 316 C 240 312 248 310 252 310 C 258 310 264 312 268 316'], a);
    // Cupid's bow
    pp(g, ['M 248 310 C 250 308 254 308 256 310'], a, lt);
    // Lower lip
    pp(g, [
      'M 234 318 C 240 324 248 328 254 326 C 260 324 266 320 270 316'
    ], a);
    // Teeth hint
    pp(g, ['M 236 316 C 242 312 250 310 254 312 C 260 312 266 314 268 316'], a, lt);
    // Tooth separations
    pp(g, ['M 246 312 L 246 316', 'M 252 310 L 252 316', 'M 258 312 L 258 316'], a, lt);

    // Nasolabial folds — deeper with age
    pp(g, [
      'M 240 298 C 238 304 234 310 232 316',
      'M 264 298 C 266 304 268 310 270 316'
    ], a);
    pp(g, [
      'M 238 300 C 236 306 234 312 232 318',
      'M 266 300 C 268 306 270 312 272 318'
    ], a, lt);
    // Chin line
    pp(g, ['M 244 330 C 248 332 254 332 258 330'], a, lt);

    // Jowl lines (age detail)
    pp(g, ['M 222 310 C 224 314 226 318 228 320'], a, lt);
    pp(g, ['M 280 308 C 278 312 276 316 274 318'], a, lt);
  },

  // ================================================================
  // Layer 3: Hair
  // Bruno: dark brown buzzcut with stipple texture, receding slightly
  // Tio-Avo: short gray/salt-and-pepper, thinning on top
  // ================================================================
  (g, a) => {
    // === BRUNO HAIR ===
    // Hairline contour — receding slightly at temples
    pp(g, [
      'M 64 290 C 62 270 66 254 74 244 C 82 234 92 228 104 226 C 116 224 126 228 134 236 C 142 244 148 258 150 274 C 152 284 152 290 150 296'
    ], a);
    // Temple recession left
    pp(g, ['M 72 260 C 76 252 82 246 88 242'], a);
    // Temple recession right
    pp(g, ['M 140 256 C 136 248 130 242 124 238'], a);
    // Crown contour
    pp(g, ['M 80 236 C 90 228 100 224 110 224 C 120 224 130 228 138 236'], a);

    // Buzzcut stippling — dense array of tiny dots
    const buzzPts = [];
    // Generate systematic coverage for short hair area
    for (let row = 0; row < 12; row++) {
      const y = 230 + row * 4.5;
      const xCenter = 108;
      const maxHalfW = 32 - Math.abs(row - 4) * 2.2;
      for (let col = -5; col <= 5; col++) {
        const x = xCenter + col * (maxHalfW / 5);
        const rx = x + (Math.sin(row * 7 + col * 3) * 1.5);
        const ry = y + (Math.cos(row * 5 + col * 2) * 1.2);
        if (rx > 66 && rx < 150 && ry < 290) {
          buzzPts.push([rx, ry]);
        }
      }
    }
    buzzPts.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 0.65, fill: a ? HL : '#3A2818' }, a);
    });

    // Sideburn left (short)
    pp(g, ['M 64 284 C 62 290 62 298 64 306'], a);
    // Hair texture at sideburn left
    const sideLDots = [[62,288],[60,292],[62,296],[60,300],[62,304]];
    sideLDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#3A2818' }, a));
    // Sideburn right
    pp(g, ['M 150 280 C 152 286 152 294 150 302'], a);
    const sideRDots = [[152,284],[154,288],[152,292],[154,296],[152,300]];
    sideRDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#3A2818' }, a));

    // === TIO-AVO HAIR ===
    // Hair outline — short, gray
    pp(g, [
      'M 212 280 C 210 264 214 248 224 240 C 234 232 244 228 256 228 C 268 230 276 236 282 244 C 288 254 290 266 290 280'
    ], a);
    // Hair top contour
    pp(g, ['M 226 238 C 236 230 248 226 260 228 C 270 230 278 236 284 244'], a);

    // Gray hair stippling — salt-and-pepper mix
    const grayPts = [];
    for (let row = 0; row < 10; row++) {
      const y = 234 + row * 4.2;
      const xCenter = 252;
      const maxHalfW = 28 - Math.abs(row - 3) * 2.5;
      for (let col = -4; col <= 4; col++) {
        const x = xCenter + col * (maxHalfW / 4);
        const rx = x + (Math.sin(row * 6 + col * 4) * 1.3);
        const ry = y + (Math.cos(row * 4 + col * 3) * 1.0);
        if (rx > 214 && rx < 290 && ry < 280) {
          grayPts.push([rx, ry]);
        }
      }
    }
    grayPts.forEach(([cx, cy], i) => {
      // Mix of gray and dark for salt-and-pepper effect
      const c = (i % 3 === 0) ? '#4A4A4A' : (i % 3 === 1) ? '#8E8E8E' : '#B0B0B0';
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 0.6, fill: a ? HL : c }, a);
    });

    // Side hair patches
    pp(g, ['M 212 274 C 210 280 210 288 212 296'], a, lt);
    pp(g, ['M 290 272 C 292 278 292 286 290 294'], a, lt);
    // Thinning crown lines
    pp(g, ['M 240 232 C 248 230 256 230 264 232'], a, lt);
    pp(g, ['M 236 236 C 244 234 252 234 260 236'], a, lt);
  },

  // ================================================================
  // Layer 4: Clothing with folds and detail
  // Bruno: white Quechua sport t-shirt with logo
  // Tio-Avo: navy blue crew-neck sweatshirt
  // ================================================================
  (g, a) => {
    // === BRUNO WHITE T-SHIRT ===
    // Crew neckline — round
    pp(g, [
      'M 82 375 C 86 370 92 366 100 364 C 108 362 116 362 124 364 C 130 366 134 370 136 374'
    ], a);
    // Neckline inner shadow
    pp(g, ['M 86 373 C 92 368 100 366 108 366 C 116 366 124 368 130 372'], a, lt);
    // Collar rib detail
    pp(g, ['M 84 374 C 90 370 98 368 108 366 C 118 368 126 370 132 374'], a, lt);

    // Left sleeve seam detail
    pp(g, [
      'M 48 392 C 44 396 40 402 36 410 C 34 416 32 422 30 428'
    ], a);
    // Sleeve hem left
    pp(g, ['M 42 404 C 38 408 36 414 34 420'], a, lt);
    // Right sleeve seam
    pp(g, [
      'M 166 390 C 170 394 174 400 178 408 C 180 414 182 420 183 426'
    ], a);
    // Sleeve hem right
    pp(g, ['M 170 402 C 174 406 178 412 180 418'], a, lt);

    // Fabric fold lines on chest (subtle)
    pp(g, [
      'M 70 400 C 80 394 92 390 108 388 C 124 390 136 394 146 400',
      'M 60 416 C 72 410 86 404 108 402 C 130 404 144 410 156 416'
    ], a, lt);
    // Center seam/fold
    pp(g, ['M 108 366 C 108 380 108 400 108 420 C 108 434 108 444 108 450'], a, lt);
    // Wrinkle under arm left
    pp(g, ['M 48 400 C 52 404 58 406 64 404', 'M 46 410 C 50 414 56 416 62 414'], a, lt);
    // Wrinkle under arm right
    pp(g, ['M 166 398 C 162 402 156 404 150 402', 'M 168 408 C 164 412 158 414 152 412'], a, lt);

    // Quechua logo area (left chest, upper)
    pp(g, ['M 58 380 L 88 380 L 88 394 L 58 394 Z'], a, lt);
    // Logo mountain peaks symbol
    pp(g, [
      'M 62 392 L 67 382 L 72 388 L 77 380 L 82 390 L 86 392'
    ], a, lt);
    // Brand text placeholder line
    pp(g, ['M 62 396 L 86 396'], a, lt);

    // === TIO-AVO NAVY SWEATSHIRT ===
    // Crew neckline
    pp(g, [
      'M 230 356 C 234 350 240 346 248 344 C 256 342 264 344 270 346 C 276 348 278 352 280 356'
    ], a);
    // Inner neckline ribbing
    pp(g, ['M 232 354 C 238 350 246 348 252 348 C 260 348 268 350 274 354'], a, lt);
    pp(g, ['M 234 358 C 240 354 248 352 252 352 C 258 352 266 354 272 358'], a, lt);

    // Shoulder seam left
    pp(g, ['M 222 360 C 216 364 210 370 206 378'], a, lt);
    // Shoulder seam right
    pp(g, ['M 282 358 C 288 362 294 368 298 376'], a, lt);

    // Fabric folds on navy sweatshirt
    pp(g, [
      'M 208 394 C 218 388 234 384 252 382 C 270 384 286 388 296 394',
      'M 204 410 C 214 404 232 398 252 396 C 272 398 290 404 300 410',
      'M 200 428 C 210 422 230 416 252 414 C 274 416 294 422 304 428'
    ], a, lt);
    // Center fold
    pp(g, ['M 252 348 C 252 370 252 400 252 430 C 252 440 252 446 252 450'], a, lt);
    // Under-arm wrinkle left
    pp(g, ['M 200 386 C 206 390 212 392 218 390', 'M 198 396 C 204 400 210 402 216 400'], a, lt);
    // Under-arm wrinkle right
    pp(g, ['M 304 384 C 298 388 292 390 286 388', 'M 306 394 C 300 398 294 400 288 398'], a, lt);

    // Sweatshirt small flag/brand tab on chest (like in photo)
    pp(g, ['M 272 366 L 282 366 L 282 374 L 272 374 Z'], a, lt);
    pp(g, ['M 274 368 L 280 368', 'M 274 370 L 278 370', 'M 274 372 L 280 372'], a, lt);
  },

  // ================================================================
  // Layer 5: Hands/objects and beard stubble detail
  // Bruno's stubble, facial definition marks
  // Tio-Avo's age spots, skin texture
  // ================================================================
  (g, a) => {
    // === BRUNO BEARD STUBBLE ===
    // Dense stippling along jaw, chin, upper lip area
    const stubbleAreas = [
      // Left jawline
      [70,310],[72,314],[74,318],[76,322],[78,326],[80,330],[82,334],
      [68,312],[70,316],[72,320],[74,324],[76,328],[78,332],
      // Right jawline
      [138,308],[136,312],[134,316],[132,320],[130,324],[128,328],[126,332],
      [140,310],[138,314],[136,318],[134,322],[132,326],[130,330],
      // Chin area (densest)
      [96,342],[98,344],[100,346],[102,348],[104,348],[106,350],[108,350],
      [110,350],[112,348],[114,348],[116,346],[118,344],[120,342],
      [98,340],[100,342],[102,344],[104,346],[106,348],[108,348],
      [110,348],[112,346],[114,344],[116,342],[118,340],
      // Under chin
      [100,352],[104,354],[108,354],[112,354],[116,352],
      [102,350],[106,352],[110,352],[114,350],
      // Upper lip shadow
      [96,320],[100,318],[104,318],[108,318],[112,318],[116,318],[120,320],
      [98,320],[102,318],[106,318],[110,318],[114,318],[118,320],
      // Cheek stubble (lighter)
      [74,306],[76,308],[78,310],[80,312],
      [136,304],[134,306],[132,308],[130,310],
      // Neck stubble
      [90,352],[94,354],[98,356],[102,358],[106,358],[110,358],[114,356],[118,354],[122,352]
    ];
    stubbleAreas.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#4A3628' }, a);
    });

    // Additional fine stubble for density
    const fineStubble = [
      [84,332],[86,336],[88,338],[90,340],[92,342],[94,344],
      [124,334],[122,336],[120,338],[118,340],[116,342],
      [82,328],[84,330],[86,334],[88,336],
      [134,326],[132,328],[130,332],[128,334],
      [100,320],[104,320],[108,320],[112,320],[116,320],
      [96,316],[100,316],[104,316],[108,316],[112,316],[118,316]
    ];
    fineStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.4, fill: a ? HL : '#5C4030' }, a);
    });

    // Under-eye shadow marks — Bruno
    pp(g, ['M 82 294 C 86 296 92 298 98 296'], a, lt);
    pp(g, ['M 120 292 C 124 294 128 296 134 294'], a, lt);
    // Frown line between eyebrows
    pp(g, ['M 110 272 C 112 268 114 268 116 272'], a, lt);

    // === TIO-AVO SKIN TEXTURE ===
    // Age spots / sun spots on cheeks
    const ageSpots = [
      [230,292],[234,296],[228,300],[232,304],
      [274,290],[278,294],[276,298],[280,302],
      [226,306],[236,310],[270,308],[278,304]
    ];
    ageSpots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.8, fill: a ? HL : '#B8956E' }, a);
    });

    // Cheek creases and jowl lines
    pp(g, ['M 220 296 C 222 300 224 304 226 308 C 228 312 230 316 232 318'], a, lt);
    pp(g, ['M 282 294 C 280 298 278 302 276 306 C 274 310 272 314 270 316'], a, lt);

    // Neck tendons — older, more visible
    pp(g, ['M 236 328 C 234 334 234 340 234 346'], a, lt);
    pp(g, ['M 266 326 C 268 332 268 338 268 344'], a, lt);
    pp(g, ['M 242 330 C 240 336 238 342 238 348'], a, lt);
    pp(g, ['M 260 328 C 262 334 264 340 264 346'], a, lt);

    // Under-eye bags — Tio-Avo
    pp(g, ['M 230 284 C 234 286 240 288 244 286'], a, lt);
    pp(g, ['M 260 282 C 264 284 270 286 274 284'], a, lt);

    // Laugh lines around mouth
    pp(g, ['M 228 314 C 226 318 226 322 228 326'], a, lt);
    pp(g, ['M 274 312 C 276 316 276 320 274 324'], a, lt);
  },

  // ================================================================
  // Layer 6: Background — mountains, valley, boardwalk, sky details
  // Portuguese mountain valley (Passadicos-style), boardwalk
  // ================================================================
  (g, a) => {
    // LEFT MOUNTAIN RIDGE — steep, dramatic, rocky with Mediterranean scrub
    pp(g, [
      'M 0 200 C 6 180 14 155 24 130 C 32 110 42 90 54 72 C 64 58 74 46 84 38 C 92 32 100 28 106 30 C 112 32 118 40 124 52 C 132 68 140 90 148 115 C 154 135 160 158 166 180 C 170 196 174 210 178 220'
    ], a);
    // Left mountain secondary ridge
    pp(g, [
      'M 0 178 C 8 160 18 140 30 122 C 40 106 52 90 64 78 C 74 68 82 62 90 58 C 96 56 100 58 104 62'
    ], a);
    // Left mountain tertiary contour
    pp(g, ['M 0 195 C 10 182 20 168 32 152 C 42 138 54 124 66 112'], a, lt);

    // Rocky outcrop details — left
    pp(g, ['M 38 140 L 48 122 L 62 126 L 56 144'], a, lt);
    pp(g, ['M 68 108 L 78 92 L 92 98 L 86 116'], a, lt);
    pp(g, ['M 8 195 L 16 180 L 26 185 L 20 200'], a, lt);
    pp(g, ['M 50 130 L 58 114 L 68 120 L 62 136'], a, lt);

    // RIGHT MOUNTAIN RIDGE — gentler slope, golden-brown rocky
    pp(g, [
      'M 180 220 C 182 202 186 176 194 148 C 202 122 214 96 228 74 C 240 56 254 42 268 34 C 280 28 292 30 304 40 C 316 52 328 72 338 98 C 346 118 352 142 356 170 C 358 186 360 200 360 210'
    ], a);
    // Right mountain secondary contour
    pp(g, [
      'M 274 38 C 288 44 302 56 314 74 C 326 92 336 114 344 140 C 350 160 355 178 358 196'
    ], a);
    // Right mountain tertiary
    pp(g, ['M 262 50 C 276 54 290 68 302 86 C 314 106 324 128 332 152'], a, lt);

    // Rocky outcrops — right
    pp(g, ['M 298 78 L 306 62 L 320 68 L 314 86'], a, lt);
    pp(g, ['M 260 114 L 268 98 L 280 104 L 274 120'], a, lt);
    pp(g, ['M 334 92 L 342 76 L 354 82 L 348 98'], a, lt);
    pp(g, ['M 316 60 L 322 48 L 332 54 L 326 68'], a, lt);

    // DISTANT MOUNTAINS (background, lighter strokes)
    pp(g, [
      'M 0 125 C 12 108 28 92 46 82 C 62 74 78 76 92 70 C 106 64 118 52 132 46 C 144 42 156 44 168 56 C 176 66 180 80 180 100'
    ], a, lt);
    pp(g, [
      'M 180 100 C 180 82 184 64 198 52 C 212 40 230 34 250 40 C 270 48 290 62 310 74 C 330 84 346 94 360 104'
    ], a, lt);

    // VALLEY BOTTOM — dark gorge
    pp(g, [
      'M 132 220 C 142 214 154 208 168 204 C 180 202 192 202 204 206 C 214 210 222 216 228 220'
    ], a);
    // River/stream line
    pp(g, ['M 150 216 C 160 210 170 206 182 205 C 194 206 204 210 212 215'], a, lt);
    pp(g, ['M 155 218 C 164 214 174 210 184 209 C 194 210 202 214 210 218'], a, lt);

    // BOARDWALK STRUCTURE — wooden walkway on right hillside
    // Deck top edge
    pp(g, ['M 216 128 C 236 120 256 114 276 110 C 296 106 316 104 336 102 C 346 100 354 100 360 100'], a);
    // Deck bottom edge
    pp(g, ['M 216 136 C 236 128 256 122 276 118 C 296 114 316 112 336 110 C 346 108 354 108 360 108'], a);
    // Railing top edge
    pp(g, ['M 216 122 C 236 114 256 108 276 104 C 296 100 316 98 336 96 C 346 94 354 94 360 94'], a);
    // Support pillars
    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      const x = 224 + t * 130;
      const yTop = 130 - t * 24;
      const yBot = yTop + 30 + t * 10;
      pp(g, [`M ${x.toFixed(0)} ${yTop.toFixed(0)} L ${x.toFixed(0)} ${yBot.toFixed(0)}`], a);
    }
    // Railing posts
    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      const x = 224 + t * 130;
      const yRail = 124 - t * 22;
      const yDeck = 130 - t * 24;
      pp(g, [`M ${x.toFixed(0)} ${yRail.toFixed(0)} L ${x.toFixed(0)} ${yDeck.toFixed(0)}`], a, lt);
    }
    // Cross-planks on deck
    for (let i = 0; i < 14; i++) {
      const t = i / 13;
      const x = 218 + t * 138;
      const yT = 129 - t * 24;
      const yB = 135 - t * 22;
      pp(g, [`M ${x.toFixed(1)} ${yT.toFixed(1)} L ${(x + 2).toFixed(1)} ${yB.toFixed(1)}`], a, lt);
    }

    // CLOUDS
    // Cloud 1 — large cumulus left
    pp(g, [
      'M 28 26 C 34 16 46 10 58 14 C 66 8 78 4 90 10 C 98 4 110 6 118 14 C 126 8 136 12 140 20 C 146 16 154 20 156 28 C 158 34 150 40 140 38 C 132 42 120 44 112 40 C 102 44 90 44 80 40 C 70 44 54 42 46 38 C 38 40 30 36 28 30'
    ], a);
    // Cloud inner volume
    pp(g, ['M 48 22 C 56 18 66 14 78 16', 'M 98 12 C 106 8 116 10 122 16'], a, lt);
    // Cloud bottom wispy lines
    pp(g, ['M 40 36 C 52 40 66 42 80 40', 'M 100 40 C 112 42 126 40 138 36'], a, lt);

    // Cloud 2 — right
    pp(g, [
      'M 246 36 C 252 26 262 20 276 24 C 284 18 296 20 306 26 C 314 22 324 26 326 34 C 328 40 320 46 310 44 C 300 48 286 46 278 42 C 268 46 256 44 250 40'
    ], a);
    pp(g, ['M 266 28 C 274 24 286 24 296 28'], a, lt);

    // Cloud 3 — small distant center
    pp(g, ['M 152 50 C 158 42 166 40 174 44 C 180 40 188 42 192 48 C 194 54 186 56 178 54 C 170 56 160 54 154 52'], a, lt);
    // Cloud 4 — wispy upper right
    pp(g, ['M 302 18 C 310 12 320 14 326 20 C 330 16 336 18 338 24 C 336 28 328 30 320 28 C 312 30 304 26 302 22'], a, lt);

    // VEGETATION PATCHES — left mountain
    pp(g, ['M 14 174 C 20 168 28 170 36 166 C 44 162 52 166 60 162'], a, lt);
    pp(g, ['M 36 144 C 44 138 52 140 60 136 C 68 132 76 136 82 132'], a, lt);
    pp(g, ['M 22 192 C 28 186 36 188 44 184', 'M 46 180 C 50 176 54 178 58 174'], a, lt);
    // Bush silhouettes left
    pp(g, ['M 48 150 C 52 142 60 140 64 144 C 68 140 74 142 76 150'], a, lt);
    pp(g, ['M 16 180 C 20 172 26 170 30 174 C 34 170 40 172 42 180'], a, lt);
    pp(g, ['M 72 120 C 76 112 82 110 86 114 C 90 110 94 112 96 120'], a, lt);

    // VEGETATION PATCHES — right mountain
    pp(g, ['M 278 92 C 286 86 294 88 302 84 C 310 80 318 84 326 80'], a, lt);
    pp(g, ['M 298 72 C 304 66 312 68 318 64 C 326 60 332 64 338 60'], a, lt);
    pp(g, ['M 256 124 C 264 118 272 120 280 116', 'M 284 112 C 290 108 296 110 302 106'], a, lt);
    // Bush silhouettes right
    pp(g, ['M 290 80 C 294 72 300 70 304 74 C 308 70 314 72 316 80'], a, lt);
    pp(g, ['M 320 64 C 324 58 330 56 334 60 C 338 56 342 58 344 64'], a, lt);

    // Valley depth shadow lines
    pp(g, ['M 138 220 C 146 216 154 212 162 210', 'M 200 210 C 208 214 214 218 220 220'], a, lt);
  },

  // ================================================================
  // Layer 7: Gradient skin/clothing color fills
  // Realistic skin tones with radial gradients, clothing fills
  // ================================================================
  (g, a, defs) => {
    // === SKY GRADIENT ===
    const skyGrad = gd(defs, 'l', [
      ['0%', '#2979FF', 0.4],
      ['30%', '#42A5F5', 0.3],
      ['60%', '#90CAF9', 0.2],
      ['100%', '#BBDEFB', 0.1]
    ], { x1: 180, y1: 0, x2: 180, y2: 220 });
    fl(g, 'M 0 0 L 360 0 L 360 220 L 0 220 Z', skyGrad, false);

    // === DISTANT MOUNTAINS FILL ===
    const distMtnL = gd(defs, 'l', [
      ['0%', '#66BB6A', 0.6],
      ['100%', '#81C784', 0.4]
    ], { x1: 0, y1: 60, x2: 180, y2: 160 });
    fl(g, 'M 0 125 C 12 108 28 92 46 82 C 62 74 78 76 92 70 C 106 64 118 52 132 46 C 144 42 156 44 168 56 C 176 66 180 80 180 100 L 180 160 L 0 160 Z', distMtnL, false);
    const distMtnR = gd(defs, 'l', [
      ['0%', '#90CAF9', 0.5],
      ['100%', '#A5D6A7', 0.4]
    ], { x1: 180, y1: 60, x2: 360, y2: 160 });
    fl(g, 'M 180 100 C 180 82 184 64 198 52 C 212 40 230 34 250 40 C 270 48 290 62 310 74 C 330 84 346 94 360 104 L 360 160 L 180 160 Z', distMtnR, false);

    // === LEFT MOUNTAIN FILL ===
    const lMtnGrad = gd(defs, 'l', [
      ['0%', '#2E7D32', 1],
      ['50%', '#33691E', 1],
      ['100%', '#1B5E20', 1]
    ], { x1: 0, y1: 30, x2: 180, y2: 220 });
    fl(g, 'M 0 200 C 6 180 14 155 24 130 C 32 110 42 90 54 72 C 64 58 74 46 84 38 C 92 32 100 28 106 30 C 112 32 118 40 124 52 C 132 68 140 90 148 115 C 154 135 160 158 166 180 C 170 196 174 210 178 220 L 0 220 Z', lMtnGrad, false);

    // === RIGHT MOUNTAIN FILL ===
    const rMtnGrad = gd(defs, 'l', [
      ['0%', '#388E3C', 1],
      ['40%', '#4E342E', 0.5],
      ['100%', '#33691E', 1]
    ], { x1: 180, y1: 30, x2: 360, y2: 220 });
    fl(g, 'M 180 220 C 182 202 186 176 194 148 C 202 122 214 96 228 74 C 240 56 254 42 268 34 C 280 28 292 30 304 40 C 316 52 328 72 338 98 C 346 118 352 142 356 170 C 358 186 360 200 360 210 L 360 220 Z', rMtnGrad, false);

    // Golden-brown rocky patches on right mountain
    fo(g, 'M 298 78 L 306 62 L 320 68 L 314 86 Z', '#A1887F', 0.5, false);
    fo(g, 'M 260 114 L 268 98 L 280 104 L 274 120 Z', '#A1887F', 0.45, false);
    fo(g, 'M 334 92 L 342 76 L 354 82 L 348 98 Z', '#8D6E63', 0.45, false);
    fo(g, 'M 316 60 L 322 48 L 332 54 L 326 68 Z', '#BCAAA4', 0.35, false);
    // Rocky patches on left mountain
    fo(g, 'M 38 140 L 48 122 L 62 126 L 56 144 Z', '#795548', 0.35, false);
    fo(g, 'M 68 108 L 78 92 L 92 98 L 86 116 Z', '#6D4C41', 0.35, false);
    fo(g, 'M 8 195 L 16 180 L 26 185 L 20 200 Z', '#8D6E63', 0.3, false);
    fo(g, 'M 50 130 L 58 114 L 68 120 L 62 136 Z', '#795548', 0.3, false);

    // Valley gorge fill
    const valleyGrad = gd(defs, 'l', [
      ['0%', '#1B5E20', 1],
      ['50%', '#0D3B0E', 1],
      ['100%', '#1B5E20', 1]
    ], { x1: 132, y1: 200, x2: 228, y2: 220 });
    fl(g, 'M 132 220 C 142 214 154 208 168 204 C 180 202 192 202 204 206 C 214 210 222 216 228 220 Z', valleyGrad, false);

    // CLOUD FILLS
    const cloudGrad1 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.95],
      ['70%', '#F5F5F5', 0.9],
      ['100%', '#E0E0E0', 0.7]
    ], { cx: 90, cy: 22, r: 70 });
    fl(g, 'M 28 26 C 34 16 46 10 58 14 C 66 8 78 4 90 10 C 98 4 110 6 118 14 C 126 8 136 12 140 20 C 146 16 154 20 156 28 C 158 34 150 40 140 38 C 132 42 120 44 112 40 C 102 44 90 44 80 40 C 70 44 54 42 46 38 C 38 40 30 36 28 30 Z', cloudGrad1, false);
    // Cloud 1 highlight
    hi(g, 'M 50 18 C 60 12 74 10 86 14 C 94 10 104 12 110 18 L 100 22 C 92 18 82 16 72 18 C 62 20 54 22 50 24 Z', 0.4, false);

    const cloudGrad2 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.9],
      ['100%', '#EEEEEE', 0.7]
    ], { cx: 286, cy: 32, r: 45 });
    fl(g, 'M 246 36 C 252 26 262 20 276 24 C 284 18 296 20 306 26 C 314 22 324 26 326 34 C 328 40 320 46 310 44 C 300 48 286 46 278 42 C 268 46 256 44 250 40 Z', cloudGrad2, false);

    fl(g, 'M 152 50 C 158 42 166 40 174 44 C 180 40 188 42 192 48 C 194 54 186 56 178 54 C 170 56 160 54 154 52 Z', '#E8E8E8', false);
    fl(g, 'M 302 18 C 310 12 320 14 326 20 C 330 16 336 18 338 24 C 336 28 328 30 320 28 C 312 30 304 26 302 22 Z', '#EEEEEE', false);

    // BOARDWALK FILL
    const bwGrad = gd(defs, 'l', [
      ['0%', '#A1887F', 1],
      ['50%', '#8D6E63', 1],
      ['100%', '#795548', 1]
    ], { x1: 216, y1: 96, x2: 360, y2: 140 });
    fl(g, 'M 216 128 C 236 120 256 114 276 110 C 296 106 316 104 336 102 C 346 100 354 100 360 100 L 360 108 C 354 108 346 108 336 110 C 316 112 296 114 276 118 C 256 122 236 128 216 136 Z', bwGrad, false);
    // Railing fill
    fl(g, 'M 216 122 C 236 114 256 108 276 104 C 296 100 316 98 336 96 C 346 94 354 94 360 94 L 360 100 C 354 100 346 100 336 102 C 316 104 296 106 276 110 C 256 114 236 120 216 128 Z', '#6D4C41', false);

    // === BRUNO SKIN — gradient for realism ===
    const brunoSkinGrad = gd(defs, 'r', [
      ['0%', '#F0C8A0', 1],
      ['40%', '#E8B88A', 1],
      ['80%', '#D8A070', 1],
      ['100%', '#C89060', 1]
    ], { cx: 108, cy: 290, r: 55 });
    // Head fill
    fl(g, 'M 68 296 C 65 272 70 254 80 244 C 88 236 98 232 108 234 C 118 236 128 244 136 258 C 142 270 146 284 146 298 C 146 310 142 320 136 328 C 130 334 124 340 118 344 C 112 346 106 346 100 342 C 94 338 88 330 82 320 C 76 312 72 306 70 300 Z', brunoSkinGrad, a);
    // Left ear fill
    const brunoEarGrad = gd(defs, 'r', [
      ['0%', '#E8B88A', 1],
      ['100%', '#D09868', 1]
    ], { cx: 58, cy: 292, r: 12 });
    fl(g, 'M 64 278 C 58 274 54 278 52 284 C 50 290 50 298 52 304 C 54 308 58 310 64 308 Z', brunoEarGrad, false);
    // Right ear fill
    fl(g, 'M 148 274 C 154 270 158 274 160 280 C 162 286 162 294 160 300 C 158 304 154 306 148 304 Z', brunoEarGrad, false);
    // Neck fill
    const brunoNeckGrad = gd(defs, 'l', [
      ['0%', '#D8A070', 1],
      ['100%', '#C88858', 1]
    ], { x1: 82, y1: 338, x2: 134, y2: 375 });
    fl(g, 'M 90 340 C 88 348 86 354 85 360 C 84 365 83 370 82 375 L 134 373 C 133 368 132 363 131 358 C 130 352 128 346 126 338 Z', brunoNeckGrad, false);

    // Eye whites — Bruno
    fl(g, 'M 80 286 C 82 280 88 276 96 278 C 104 280 108 284 108 290 C 108 296 102 300 96 300 C 88 300 82 296 80 290 Z', '#FAFAFA', false);
    fl(g, 'M 118 284 C 120 278 126 274 134 276 C 140 278 144 282 144 288 C 144 294 138 298 132 298 C 124 298 120 294 118 288 Z', '#FAFAFA', false);
    // Iris fill — warm brown
    fe(g, 'circle', { cx: 94, cy: 288, r: 5, fill: '#5C3A1E' }, false);
    fe(g, 'circle', { cx: 130, cy: 286, r: 5, fill: '#5C3A1E' }, false);

    // BRUNO WHITE T-SHIRT FILL
    const tshirtGrad = gd(defs, 'l', [
      ['0%', '#F5F5F5', 1],
      ['30%', '#FAFAFA', 1],
      ['70%', '#FFFFFF', 1],
      ['100%', '#F0F0F0', 1]
    ], { x1: 20, y1: 370, x2: 184, y2: 450 });
    fl(g, 'M 82 375 C 72 378 60 384 48 392 C 38 400 30 410 26 422 C 24 430 22 440 20 450 L 184 450 C 184 442 183 432 182 420 C 180 408 174 398 166 390 C 156 382 144 376 134 373 L 130 372 C 124 368 116 364 108 364 C 100 364 92 366 86 370 Z', tshirtGrad, a);

    // === TIO-AVO SKIN — warmer, tanned gradient ===
    const tioSkinGrad = gd(defs, 'r', [
      ['0%', '#DCA878', 1],
      ['40%', '#D09868', 1],
      ['80%', '#C08850', 1],
      ['100%', '#B07840', 1]
    ], { cx: 252, cy: 284, r: 48 });
    // Head fill
    fl(g, 'M 216 284 C 214 264 218 248 228 240 C 236 234 244 232 254 234 C 264 236 272 244 278 256 C 284 266 286 278 286 292 C 286 302 282 312 276 318 C 270 324 264 328 258 330 C 252 332 246 330 240 326 C 234 322 228 314 224 304 C 220 296 218 290 216 286 Z', tioSkinGrad, a);
    // Left ear
    const tioEarGrad = gd(defs, 'r', [
      ['0%', '#D09868', 1],
      ['100%', '#B88050', 1]
    ], { cx: 206, cy: 286, r: 10 });
    fl(g, 'M 212 272 C 206 268 202 272 200 278 C 198 284 198 292 200 298 C 202 302 206 304 212 302 Z', tioEarGrad, false);
    // Right ear
    fl(g, 'M 288 268 C 294 264 298 268 300 274 C 302 280 302 288 300 294 C 298 298 294 300 288 298 Z', tioEarGrad, false);
    // Neck
    const tioNeckGrad = gd(defs, 'l', [
      ['0%', '#C08850', 1],
      ['100%', '#A87040', 1]
    ], { x1: 232, y1: 322, x2: 274, y2: 356 });
    fl(g, 'M 238 322 C 236 330 234 338 233 344 C 232 348 232 352 232 356 L 274 354 C 274 350 274 346 273 342 C 272 336 270 328 268 320 Z', tioNeckGrad, false);

    // Eye whites — Tio-Avo
    fl(g, 'M 228 278 C 230 274 236 270 242 272 C 248 274 252 278 252 282 C 252 286 248 288 242 288 C 236 288 230 284 228 280 Z', '#F5F0EA', false);
    fl(g, 'M 258 276 C 260 272 266 268 272 270 C 278 272 280 276 280 280 C 280 284 276 286 272 286 C 266 286 260 282 258 278 Z', '#F5F0EA', false);
    // Iris
    fe(g, 'circle', { cx: 240, cy: 280, r: 4, fill: '#5C3A1E' }, false);
    fe(g, 'circle', { cx: 270, cy: 278, r: 4, fill: '#5C3A1E' }, false);

    // TIO-AVO NAVY SWEATSHIRT FILL
    const navyGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1],
      ['30%', '#1E2A8E', 1],
      ['70%', '#1A237E', 1],
      ['100%', '#0D1553', 1]
    ], { x1: 184, y1: 354, x2: 330, y2: 450 });
    fl(g, 'M 232 356 C 222 360 210 368 200 378 C 192 388 188 398 186 412 C 184 426 184 440 184 450 L 328 450 C 326 440 324 424 322 408 C 320 394 314 382 306 374 C 296 364 284 358 274 354 L 270 352 C 266 350 258 348 252 348 C 246 348 238 350 234 354 Z', navyGrad, a);

    // BRUNO HAIR FILL (dark brown buzzcut)
    const brunoHairGrad = gd(defs, 'r', [
      ['0%', '#4A3420', 1],
      ['60%', '#3A2818', 1],
      ['100%', '#2C1C10', 1]
    ], { cx: 108, cy: 254, r: 50 });
    fl(g, 'M 64 290 C 62 270 66 254 74 244 C 82 234 92 228 104 226 C 116 224 126 228 134 236 C 142 244 148 258 150 274 C 152 284 152 290 150 296 L 146 298 C 146 290 144 278 140 268 C 136 256 128 246 118 240 C 110 236 100 234 92 238 C 84 242 76 252 70 266 C 66 276 64 284 64 292 Z', brunoHairGrad, false);

    // TIO-AVO HAIR FILL (gray/silver)
    const tioHairGrad = gd(defs, 'r', [
      ['0%', '#B0B0B0', 1],
      ['50%', '#9E9E9E', 1],
      ['100%', '#787878', 1]
    ], { cx: 252, cy: 250, r: 42 });
    fl(g, 'M 212 280 C 210 264 214 248 224 240 C 234 232 244 228 256 228 C 268 230 276 236 282 244 C 288 254 290 266 290 280 L 286 284 C 286 274 284 264 280 254 C 276 246 268 240 258 236 C 250 234 242 236 234 242 C 226 248 220 258 216 270 C 214 276 212 280 212 284 Z', tioHairGrad, false);

    // TIO-AVO THICK EYEBROW FILLS
    fl(g, 'M 224 268 C 230 260 240 256 250 260 L 252 266 C 244 264 234 266 228 272 Z', '#37474F', false);
    fl(g, 'M 256 258 C 264 254 274 256 282 262 L 280 268 C 274 262 264 260 256 264 Z', '#37474F', false);
  },

  // ================================================================
  // Layer 8: Scene colors — additional fills, vegetation color, depth
  // Mountain color overlays, skin shading, clothing shading
  // ================================================================
  (g, a, defs) => {
    // Mountain shadow overlays for depth
    // Left mountain slope shadow (sunlight from right)
    const lShadow = gd(defs, 'l', [
      ['0%', '#0D3B0E', 0.5],
      ['60%', '#1B5E20', 0.2],
      ['100%', '#1B5E20', 0]
    ], { x1: 0, y1: 100, x2: 100, y2: 220 });
    fl(g, 'M 0 178 C 8 160 18 140 30 122 C 40 106 52 90 64 78 C 74 68 82 62 90 58 C 96 56 100 58 104 62 L 100 72 C 86 80 72 96 60 114 C 46 136 34 160 24 180 C 16 196 8 208 0 218 Z', lShadow, false);

    // Right mountain golden patches (sunlit areas)
    const rSunlit = gd(defs, 'l', [
      ['0%', '#A1887F', 0],
      ['40%', '#A1887F', 0.3],
      ['100%', '#BCAAA4', 0.4]
    ], { x1: 250, y1: 40, x2: 360, y2: 200 });
    fl(g, 'M 268 34 C 280 28 292 30 304 40 C 316 52 328 72 338 98 C 346 118 352 142 356 170 C 358 186 360 200 360 210 L 360 220 L 300 220 C 300 200 296 176 290 152 C 284 130 276 110 268 94 C 262 80 258 68 258 56 C 260 46 264 38 268 34 Z', rSunlit, false);

    // Vegetation color overlays — green patches on mountains
    fo(g, 'M 48 150 C 52 142 60 140 64 144 C 68 140 74 142 76 150 L 74 154 C 68 148 60 146 54 150 Z', '#4CAF50', 0.5, false);
    fo(g, 'M 16 180 C 20 172 26 170 30 174 C 34 170 40 172 42 180 L 40 184 C 34 178 26 176 20 180 Z', '#43A047', 0.4, false);
    fo(g, 'M 72 120 C 76 112 82 110 86 114 C 90 110 94 112 96 120 L 94 124 C 88 118 80 116 74 120 Z', '#388E3C', 0.45, false);
    fo(g, 'M 290 80 C 294 72 300 70 304 74 C 308 70 314 72 316 80 L 314 84 C 306 78 296 76 292 80 Z', '#6D8B47', 0.4, false);
    fo(g, 'M 320 64 C 324 58 330 56 334 60 C 338 56 342 58 344 64 L 342 68 C 336 62 328 60 322 64 Z', '#7C9C52', 0.35, false);

    // === SKIN SHADING — BRUNO ===
    // Temple shadow left
    sh(g, 'M 70 260 C 74 252 80 246 86 244 L 84 250 C 78 254 74 260 72 268 Z', 0.15, false);
    // Temple shadow right
    sh(g, 'M 142 256 C 138 248 132 244 126 242 L 128 248 C 134 252 138 258 140 266 Z', 0.12, false);
    // Under-eye shadow left
    sh(g, 'M 80 290 C 84 296 90 300 96 300 C 92 298 86 296 82 292 Z', 0.1, false);
    // Under-eye shadow right
    sh(g, 'M 118 288 C 122 294 128 298 134 298 C 128 296 122 294 120 290 Z', 0.1, false);
    // Nose side shadow (left)
    sh(g, 'M 100 296 C 100 302 98 308 96 314 L 100 312 C 102 306 102 300 100 296 Z', 0.12, false);
    // Chin shadow
    sh(g, 'M 96 342 C 100 348 106 352 112 352 C 118 350 122 346 126 340 L 124 342 C 120 346 114 348 108 348 C 102 346 98 344 96 342 Z', 0.1, false);
    // Jaw shadow left (angular)
    sh(g, 'M 68 296 C 66 302 66 310 70 318 C 72 322 76 326 80 328 L 78 324 C 74 320 70 314 68 308 C 66 302 68 298 68 296 Z', 0.12, false);
    // Jaw shadow right
    sh(g, 'M 146 298 C 148 304 146 312 142 318 L 140 314 C 144 308 146 302 146 298 Z', 0.1, false);
    // Neck side shadow
    sh(g, 'M 82 375 C 84 368 86 360 88 352 L 92 354 C 90 362 88 370 86 375 Z', 0.15, false);

    // Forehead highlight (sunlit from right)
    hi(g, 'M 110 240 C 118 238 126 242 132 248 C 136 254 138 262 138 272 L 134 268 C 134 260 132 252 128 248 C 124 244 118 240 112 240 Z', 0.2, false);

    // === SKIN SHADING — TIO-AVO ===
    // Temple shadow left
    sh(g, 'M 218 258 C 222 250 228 244 234 240 L 232 248 C 226 252 222 260 220 268 Z', 0.15, false);
    // Temple shadow right
    sh(g, 'M 282 254 C 278 246 272 240 266 238 L 268 244 C 274 248 280 256 282 264 Z', 0.12, false);
    // Deep eye socket shadow
    sh(g, 'M 226 274 C 230 270 236 268 244 270 C 248 272 252 276 252 280 L 250 278 C 248 274 244 272 240 272 C 236 272 232 274 228 278 Z', 0.12, false);
    sh(g, 'M 256 272 C 260 268 266 266 274 268 C 278 270 280 274 280 278 L 278 276 C 278 272 274 270 270 270 C 266 270 262 272 258 276 Z', 0.12, false);
    // Nose shadow
    sh(g, 'M 242 296 C 242 300 240 304 238 308 L 242 306 C 244 302 244 298 242 296 Z', 0.12, false);
    // Chin shadow
    sh(g, 'M 240 326 C 244 330 250 332 258 332 C 264 330 268 326 270 322 L 266 324 C 262 328 256 330 250 330 C 246 328 242 326 240 326 Z', 0.1, false);
    // Forehead wrinkle shadow lines
    sh(g, 'M 228 252 C 238 250 250 250 262 252 C 268 254 276 256 280 258 L 278 260 C 272 258 264 256 256 254 C 248 252 238 252 230 254 Z', 0.06, false);
    // Jowl shadow
    sh(g, 'M 216 298 C 218 306 220 312 224 318 L 222 316 C 218 310 216 304 216 298 Z', 0.1, false);
    sh(g, 'M 286 296 C 284 304 282 310 278 316 L 280 314 C 284 308 286 302 286 296 Z', 0.1, false);

    // Forehead highlight
    hi(g, 'M 256 236 C 264 238 272 244 278 252 C 282 258 284 266 284 276 L 280 272 C 280 264 278 256 274 250 C 270 244 264 240 258 238 Z', 0.18, false);

    // === CLOTHING SHADING ===
    // T-shirt left side shadow
    sh(g, 'M 20 450 C 22 440 24 430 26 422 C 30 410 38 400 48 392 C 56 386 64 382 72 380 L 68 384 C 60 388 52 394 44 402 C 36 412 30 424 26 438 C 24 444 22 448 20 450 Z', 0.08, false);
    // T-shirt right shadow (near body junction)
    sh(g, 'M 160 390 C 168 398 174 406 178 416 C 180 426 182 438 184 450 L 180 450 C 178 438 176 428 174 418 C 170 408 164 398 158 392 Z', 0.06, false);

    // Navy sweatshirt highlights (subtle lighter areas)
    hi(g, 'M 252 370 C 260 368 270 370 278 376 C 286 382 292 392 296 404 L 292 400 C 288 390 282 382 274 378 C 268 374 260 372 252 374 Z', 0.06, false);
    // Sweatshirt deep fold shadow
    sh(g, 'M 186 412 C 188 404 192 394 198 386 C 204 380 212 374 222 368 L 218 372 C 210 378 204 386 200 394 C 196 404 192 416 190 430 Z', 0.08, false);

    // === MOUTH INTERIOR ===
    // Bruno — teeth fill
    fl(g, 'M 90 330 C 96 326 104 322 110 322 C 116 322 122 326 128 330 L 126 332 C 122 328 116 326 110 326 C 104 326 98 328 92 332 Z', '#F5F5F0', false);
    // Bruno — lower lip interior shadow
    sh(g, 'M 88 332 C 94 340 102 344 110 344 C 118 342 126 338 130 330 L 128 332 C 124 338 118 342 110 342 C 102 342 96 338 90 332 Z', 0.15, false);
    // Tio-Avo — teeth fill
    fl(g, 'M 236 316 C 242 312 250 310 254 312 C 260 312 266 314 268 316 L 266 318 C 262 316 256 314 252 314 C 248 314 242 316 238 318 Z', '#F0EDE8', false);
    // Tio-Avo — lower lip shadow
    sh(g, 'M 234 318 C 240 324 248 328 254 326 C 260 324 266 320 270 316 L 268 318 C 264 322 258 326 252 326 C 248 326 240 322 236 318 Z', 0.12, false);

    // Boardwalk shadow underneath
    sh(g, 'M 216 136 C 236 128 256 122 276 118 C 296 114 316 112 336 110 C 346 108 354 108 360 108 L 360 116 C 354 116 346 116 336 118 C 316 120 296 122 276 126 C 256 130 236 136 216 144 Z', 0.25, false);

    // River/water reflection in valley
    hi(g, 'M 160 210 C 168 208 176 206 184 206 C 192 208 200 210 208 214 L 206 216 C 198 212 190 210 182 210 C 176 210 168 212 162 214 Z', 0.08, false);
  },

  // ================================================================
  // Layer 9: Polish — catchlights, final highlights, shadows, sun glare,
  // hair shine, detail accents
  // ================================================================
  (g, a, defs) => {
    // === EYE CATCHLIGHTS — BRUNO ===
    // Primary catchlight (bright, upper-left)
    fe(g, 'circle', { cx: 91, cy: 285, r: 1.8, fill: '#FFFFFF' }, a);
    // Secondary catchlight (dimmer, smaller)
    fe(g, 'circle', { cx: 96, cy: 290, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);
    // Right eye
    fe(g, 'circle', { cx: 127, cy: 283, r: 1.8, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 132, cy: 288, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // === EYE CATCHLIGHTS — TIO-AVO ===
    fe(g, 'circle', { cx: 237, cy: 277, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 242, cy: 282, r: 0.6, fill: '#FFFFFF', opacity: '0.5' }, false);
    fe(g, 'circle', { cx: 267, cy: 275, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 272, cy: 280, r: 0.6, fill: '#FFFFFF', opacity: '0.5' }, false);

    // === CHEEK BLUSH / SUN GLOW — BRUNO ===
    feo(g, 'ellipse', { cx: 82, cy: 306, rx: 10, ry: 5, fill: '#FFAB91' }, 0.2, false);
    feo(g, 'ellipse', { cx: 136, cy: 304, rx: 10, ry: 5, fill: '#FFAB91' }, 0.18, false);
    // Nose tip warm glow
    feo(g, 'ellipse', { cx: 110, cy: 316, rx: 6, ry: 4, fill: '#E8A080' }, 0.15, false);

    // === CHEEK BLUSH — TIO-AVO (more sun-bronzed) ===
    feo(g, 'ellipse', { cx: 230, cy: 296, rx: 9, ry: 4.5, fill: '#D4845C' }, 0.2, false);
    feo(g, 'ellipse', { cx: 276, cy: 294, rx: 9, ry: 4.5, fill: '#D4845C' }, 0.18, false);
    // Nose warmth
    feo(g, 'ellipse', { cx: 252, cy: 306, rx: 5, ry: 3.5, fill: '#C8886C' }, 0.15, false);

    // === FOREHEAD SHINE — natural skin oil highlights ===
    // Bruno
    hi(g, 'M 100 244 C 106 240 114 240 120 244 C 124 248 126 254 126 260 L 122 256 C 122 252 120 248 116 246 C 112 244 106 244 102 246 Z', 0.15, a);
    // Tio-Avo
    hi(g, 'M 244 240 C 250 238 258 238 264 242 C 268 246 270 252 270 258 L 266 254 C 266 250 264 246 260 244 C 256 242 250 242 246 244 Z', 0.12, a);

    // === HAIR SHINE ===
    // Bruno buzzcut sheen (subtle)
    hi(g, 'M 96 234 C 104 230 114 230 122 234 C 126 238 128 244 128 250 L 124 246 C 124 242 122 238 118 236 C 112 234 104 234 98 236 Z', 0.1, false);
    // Tio-Avo gray hair sheen
    hi(g, 'M 240 232 C 248 228 258 228 266 232 C 272 238 276 246 276 256 L 272 250 C 272 244 268 238 262 236 C 256 234 248 234 242 236 Z', 0.15, false);

    // === LIP MOISTURE HIGHLIGHTS ===
    // Bruno lower lip
    hi(g, 'M 100 338 C 106 340 112 340 118 338 L 116 336 C 110 338 106 338 102 336 Z', 0.2, false);
    // Tio-Avo lower lip
    hi(g, 'M 244 322 C 250 324 256 324 262 322 L 260 320 C 254 322 250 322 246 320 Z', 0.15, false);

    // === QUECHUA BRAND TEXT ===
    const qt = ce('text', {
      x: 60, y: 392, fill: '#9E9E9E',
      'font-size': '5.5', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    qt.textContent = 'Quechua';
    if (a) qt.classList.add('active-element');
    g.appendChild(qt);
    // Logo mountain fill
    fl(g, 'M 62 392 L 67 382 L 72 388 L 77 380 L 82 390 L 86 392 Z', '#B0B0B0', false);

    // === SWEATSHIRT BRAND TAB (small flag on chest) ===
    fl(g, 'M 272 366 L 282 366 L 282 374 L 272 374 Z', '#C62828', false);
    pps(g, ['M 274 368 L 280 368', 'M 274 370 L 278 370', 'M 274 372 L 280 372'], false, 0.3, '#FFFFFF');

    // === SUN GLARE in sky ===
    const sunGlow = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.12],
      ['40%', '#FFF9C4', 0.06],
      ['100%', '#FFF9C4', 0]
    ], { cx: 310, cy: 18, r: 60 });
    fl(g, 'M 250 0 L 360 0 L 360 70 L 260 70 Z', sunGlow, false);
    // Sun bright core
    feo(g, 'ellipse', { cx: 310, cy: 18, rx: 20, ry: 10, fill: '#FFFFFF' }, 0.08, false);

    // === MOUNTAIN DEPTH SHADOWS ===
    // Depth lines on left mountain (dark creases)
    pps(g, [
      'M 90 118 C 100 128 114 138 130 148',
      'M 110 92 C 120 102 134 116 146 130'
    ], a, 0.4, '#1B5E20');
    // Depth lines on right mountain
    pps(g, [
      'M 282 98 C 294 108 308 120 322 132',
      'M 308 72 C 318 82 330 96 340 112'
    ], a, 0.4, '#33691E');

    // === VALLEY EMPHASIS ===
    pps(g, [
      'M 158 212 C 168 208 178 206 186 206',
      'M 186 206 C 196 208 204 212 210 216'
    ], a, 0.3, '#0D3B0E');

    // === NOSE BRIDGE HIGHLIGHT ===
    // Bruno
    hi(g, 'M 108 280 C 110 286 110 292 110 298 L 112 296 C 112 290 112 284 110 278 Z', 0.12, false);
    // Tio-Avo
    hi(g, 'M 250 272 C 252 278 252 284 252 290 L 254 288 C 254 282 254 276 252 270 Z', 0.1, false);

    // === EARLOBE SHADOW ===
    sh(g, 'M 52 300 C 54 304 58 308 62 308 L 60 306 C 56 304 54 302 52 298 Z', 0.12, false);
    sh(g, 'M 200 294 C 202 298 206 302 210 302 L 208 300 C 204 298 202 296 200 292 Z', 0.12, false);

    // === COLLAR SHADOW (where neck meets clothing) ===
    // Bruno t-shirt collar shadow
    sh(g, 'M 86 374 C 92 370 100 368 108 366 C 116 368 124 370 130 374 L 128 376 C 122 372 114 370 108 370 C 102 370 94 372 88 376 Z', 0.1, false);
    // Tio-Avo sweatshirt collar shadow
    sh(g, 'M 234 358 C 240 354 248 350 254 350 C 260 350 268 354 272 358 L 270 360 C 264 356 258 354 252 354 C 246 354 240 356 236 360 Z', 0.12, false);

    // === SUBTLE VEIN DETAIL ON NECK — TIO-AVO (older, thinner skin) ===
    pps(g, [
      'M 240 330 C 238 336 236 342 236 348',
      'M 264 328 C 266 334 268 340 268 346'
    ], false, 0.25, '#A08068');

    // === CLOUD BOTTOM SHADOWS ===
    sh(g, 'M 40 36 C 52 40 68 42 82 40 C 94 42 108 42 120 40 C 132 42 144 40 152 36 L 148 38 C 138 42 126 44 112 42 C 100 44 86 44 74 42 C 62 44 48 42 38 38 Z', 0.06, false);
    sh(g, 'M 256 42 C 266 46 278 46 290 44 C 300 46 312 44 320 42 L 318 44 C 308 48 296 48 286 46 C 276 48 264 46 254 44 Z', 0.05, false);

    // === BOARDWALK PLANK HIGHLIGHTS ===
    for (let i = 0; i < 6; i++) {
      const t = i / 5;
      const x = 226 + t * 120;
      const yT = 129 - t * 22;
      hi(g, `M ${x.toFixed(0)} ${yT.toFixed(0)} L ${(x + 8).toFixed(0)} ${(yT - 1.5).toFixed(0)} L ${(x + 8).toFixed(0)} ${(yT + 1).toFixed(0)} L ${x.toFixed(0)} ${(yT + 2.5).toFixed(0)} Z`, 0.08, false);
    }

    // === FINAL ATMOSPHERE — warm sunlight wash from upper right ===
    const warmWash = gd(defs, 'l', [
      ['0%', '#FFF8E1', 0],
      ['60%', '#FFF8E1', 0],
      ['100%', '#FFE082', 0.04]
    ], { x1: 0, y1: 0, x2: 360, y2: 450 });
    fl(g, 'M 0 0 L 360 0 L 360 450 L 0 450 Z', warmWash, false);
  }
];
