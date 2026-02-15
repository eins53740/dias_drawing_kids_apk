const tioavoLayers = [
  // ================================================================
  // Layer 0: Composition guides
  // Horizon ~y220, figure zones, mountain triangle guides
  // ================================================================
  (g, a) => {
    // Horizon line
    pp(g, ['M 0 220 L 360 220'], a, lt);
    // Vertical center
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Bruno figure zone (left, larger - selfie perspective)
    pp(g, ['M 40 230 L 40 450', 'M 170 230 L 170 450'], a, lt);
    pp(g, ['M 40 280 L 170 280'], a, lt);
    // Grandpa figure zone (right, slightly smaller/behind)
    pp(g, ['M 195 240 L 195 450', 'M 310 240 L 310 450'], a, lt);
    pp(g, ['M 195 275 L 310 275'], a, lt);
    // Mountain triangle guides
    pp(g, ['M 0 220 L 90 20 L 180 220'], a, lt);
    pp(g, ['M 180 220 L 280 30 L 360 220'], a, lt);
    // Sky zone top
    pp(g, ['M 0 0 L 360 0 L 360 60 L 0 60'], a, lt);
  },

  // ================================================================
  // Layer 1: Landscape outlines
  // Mountain ridges, valley, boardwalk, distant features
  // ================================================================
  (g, a) => {
    // Left mountain ridge - steep, dramatic with rocky contours
    pp(g, [
      'M 0 200 C 8 175 18 145 30 120 C 42 95 55 72 68 55 C 78 42 88 32 98 28 C 108 24 115 28 122 38 C 132 52 140 75 148 100 C 155 122 162 150 168 178 C 172 195 176 210 180 220'
    ], a);
    // Left mountain secondary ridge (darker near slope)
    pp(g, [
      'M 0 180 C 10 160 22 135 35 115 C 48 95 60 80 72 68 C 80 60 86 56 92 55'
    ], a);
    // Right mountain ridge - gentler slope with golden-brown character
    pp(g, [
      'M 180 220 C 182 200 186 170 195 140 C 204 112 216 86 230 65 C 242 48 255 36 270 30 C 285 24 298 28 310 42 C 322 56 334 80 345 110 C 352 130 358 158 360 190'
    ], a);
    // Right mountain secondary contour
    pp(g, [
      'M 280 38 C 295 44 310 60 322 82 C 334 104 344 130 352 158'
    ], a);
    // Valley bottom curve
    pp(g, ['M 135 220 C 148 212 160 207 172 204 C 184 202 196 204 208 210 C 216 214 222 218 228 220'], a);
    // Distant mountains (background, lighter)
    pp(g, [
      'M 0 120 C 15 100 32 85 50 78 C 68 72 82 76 95 68 C 108 60 120 48 135 42 C 148 38 160 42 172 55 C 180 64 180 80 180 100'
    ], a, lt);
    pp(g, [
      'M 180 100 C 180 80 185 60 200 48 C 215 36 235 30 255 38 C 275 46 295 60 315 70 C 335 80 348 90 360 100'
    ], a, lt);

    // Boardwalk structure on right hillside
    // Main deck line (top edge)
    pp(g, ['M 220 125 C 240 118 260 112 280 108 C 300 104 320 102 340 100'], a);
    // Main deck line (bottom edge)
    pp(g, ['M 220 133 C 240 126 260 120 280 116 C 300 112 320 110 340 108'], a);
    // Railing line
    pp(g, ['M 220 119 C 240 112 260 106 280 102 C 300 98 320 96 340 94'], a);
    // Support pillars (vertical posts going down into hillside)
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const x = 228 + t * 108;
      const yTop = 127 - t * 20;
      const yBot = yTop + 28 + t * 8;
      pp(g, [`M ${x.toFixed(0)} ${yTop.toFixed(0)} L ${x.toFixed(0)} ${yBot.toFixed(0)}`], a);
    }
    // Railing posts (short verticals between railing and deck)
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const x = 228 + t * 108;
      const yRail = 120 - t * 18;
      const yDeck = 127 - t * 20;
      pp(g, [`M ${x.toFixed(0)} ${yRail.toFixed(0)} L ${x.toFixed(0)} ${yDeck.toFixed(0)}`], a, lt);
    }
  },

  // ================================================================
  // Layer 2: Bruno figure (left, closer to camera - selfie perspective)
  // Angular lean face, defined jawline, prominent nose, friendly smile
  // ================================================================
  (g, a) => {
    // Head outline - larger due to selfie perspective, angular jawline
    pp(g, [
      'M 78 295 C 76 272 82 254 94 245 C 102 240 110 238 118 242 C 130 248 138 262 140 282 C 142 298 138 312 132 322 C 126 330 120 336 114 340 C 108 342 102 340 96 336 C 88 330 82 318 80 305'
    ], a);
    // Left ear
    pp(g, ['M 76 282 C 70 278 66 282 66 290 C 66 298 70 302 76 300'], a);
    // Right ear
    pp(g, ['M 142 278 C 148 274 152 278 152 286 C 152 294 148 298 142 296'], a);
    // Left eye - almond shape
    pp(g, ['M 88 284 C 90 278 96 275 102 278 C 108 281 108 288 104 292 C 100 295 90 292 88 286 Z'], a);
    // Right eye
    pp(g, ['M 114 282 C 116 276 122 273 128 276 C 134 279 134 286 130 290 C 126 293 116 290 114 284 Z'], a);
    // Left pupil
    fe(g, 'circle', { cx: 98, cy: 285, r: 3.5, fill: a ? HL : '#2C1810' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 124, cy: 283, r: 3.5, fill: a ? HL : '#2C1810' }, a);
    // Thick dark eyebrows (family trait)
    pp(g, ['M 86 274 C 92 268 100 266 108 270'], a);
    pp(g, ['M 112 268 C 120 264 128 266 136 272'], a);
    // Nose - prominent, straight bridge with defined tip
    pp(g, ['M 112 274 C 111 280 110 288 109 296'], a);
    pp(g, ['M 104 300 C 107 304 110 306 114 305 C 117 304 119 302 120 300'], a);
    // Nose bridge line
    pp(g, ['M 110 272 C 110 276 111 280 111 284'], a, lt);
    // Friendly smile showing teeth
    pp(g, ['M 92 318 C 98 312 106 310 114 312 C 120 310 126 314 130 320'], a);
    // Lower lip / smile bottom
    pp(g, ['M 94 322 C 102 330 112 332 122 328 C 126 326 130 322 132 320'], a);
    // Individual teeth lines
    pp(g, ['M 102 316 L 102 322', 'M 108 314 L 108 322', 'M 114 314 L 114 322', 'M 120 316 L 120 322'], a, lt);
    // Chin definition
    pp(g, ['M 102 340 C 106 344 110 346 114 344'], a, lt);
    // Neck
    pp(g, ['M 100 340 L 98 358', 'M 120 338 L 122 356'], a);
    // Shoulders and body (cut off at bottom of frame)
    pp(g, [
      'M 56 395 C 64 375 80 360 108 358 C 136 360 152 375 160 395 L 164 450'
    ], a);
    pp(g, ['M 56 395 L 52 450'], a);
  },

  // ================================================================
  // Layer 3: Grandpa figure (right, slightly behind/smaller)
  // Angular lean face, VERY thick eyebrows, squinting, warm smile
  // ================================================================
  (g, a) => {
    // Head outline - slightly smaller than Bruno (further from camera)
    pp(g, [
      'M 222 288 C 220 268 226 252 237 244 C 244 240 251 238 258 242 C 268 248 274 260 276 276 C 278 290 274 302 268 310 C 262 318 258 322 253 324 C 248 326 243 324 238 320 C 231 314 226 304 224 295'
    ], a);
    // Left ear
    pp(g, ['M 220 278 C 214 274 210 278 210 286 C 210 294 214 298 220 296'], a);
    // Right ear
    pp(g, ['M 278 274 C 284 270 288 274 288 282 C 288 290 284 294 278 292'], a);
    // Eyes (semi-closed, squinting in sun - narrower)
    pp(g, ['M 232 278 C 234 274 240 272 244 275 C 247 278 246 282 242 284 C 238 286 233 283 232 279 Z'], a);
    pp(g, ['M 254 276 C 256 272 262 270 266 273 C 269 276 268 280 264 282 C 260 284 255 281 254 277 Z'], a);
    // Pupils (smaller due to squinting)
    fe(g, 'circle', { cx: 240, cy: 278, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 262, cy: 276, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // VERY THICK DARK EYEBROWS - doubled line technique (defining feature!)
    // Left eyebrow - thick outer line
    pp(g, ['M 228 268 C 234 261 244 258 252 262'], a);
    // Left eyebrow - thick inner line (doubled)
    pp(g, ['M 230 270 C 236 264 245 261 253 264'], a);
    // Right eyebrow - thick outer line
    pp(g, ['M 256 260 C 264 256 274 258 280 264'], a);
    // Right eyebrow - thick inner line (doubled)
    pp(g, ['M 255 263 C 263 259 272 261 278 267'], a);
    // Crow's feet / eye wrinkles (squinting lines at corners)
    pp(g, ['M 228 276 C 225 274 222 272', 'M 228 280 C 225 280 222 280'], a, lt);
    pp(g, ['M 270 274 C 273 272 276 270', 'M 270 278 C 273 278 276 278'], a, lt);
    // Forehead wrinkle lines
    pp(g, ['M 234 254 C 244 252 254 252 264 254'], a, lt);
    pp(g, ['M 236 258 C 246 256 256 256 266 258'], a, lt);
    // Nose - similar shape to Bruno (family resemblance)
    pp(g, ['M 252 268 C 251 274 250 282 249 290'], a);
    pp(g, ['M 244 294 C 247 298 250 300 254 298 C 257 296 258 294 259 292'], a);
    // Warm smile
    pp(g, ['M 234 310 C 240 304 248 302 254 304 C 260 302 264 306 268 312'], a);
    pp(g, ['M 236 314 C 244 320 254 322 264 316'], a);
    // Neck
    pp(g, ['M 242 324 L 240 340', 'M 262 322 L 264 338'], a);
    // Body (shoulders, cut off at bottom)
    pp(g, [
      'M 204 378 C 212 362 228 348 250 346 C 272 348 288 362 296 378 L 300 450'
    ], a);
    pp(g, ['M 204 378 L 200 450'], a);
    // Short gray hair outline (top of head)
    pp(g, [
      'M 224 284 C 222 266 228 250 240 244 C 252 240 264 244 272 254 C 278 264 280 276 278 286'
    ], a);
    // Hair texture lines (short)
    pp(g, ['M 238 246 C 245 242 254 242 262 246'], a, lt);
    pp(g, ['M 232 256 C 240 250 252 248 264 252'], a, lt);
  },

  // ================================================================
  // Layer 4: Clothing details
  // Bruno's white Quechua t-shirt, grandpa's navy sweatshirt
  // ================================================================
  (g, a) => {
    // Bruno - white Quechua sport t-shirt
    // T-shirt neckline (crew/round)
    pp(g, ['M 92 360 C 98 356 104 354 110 354 C 116 354 122 356 128 360'], a);
    // Left sleeve seam
    pp(g, ['M 62 398 C 58 392 54 396 52 402 C 50 408 54 412 60 410'], a);
    // Right sleeve seam
    pp(g, ['M 154 396 C 158 390 162 394 164 400 C 166 406 162 410 156 408'], a);
    // Sleeve edges (short sleeves)
    pp(g, ['M 58 388 C 56 392 54 398 54 402'], a, lt);
    pp(g, ['M 158 386 C 160 390 162 396 164 400'], a, lt);
    // Quechua brand logo area (left chest/shoulder)
    pp(g, ['M 68 374 L 92 374 L 92 386 L 68 386 Z'], a, lt);
    // Logo mountain symbol hint
    pp(g, ['M 72 384 L 76 376 L 80 382 L 84 374 L 88 384'], a, lt);

    // Grandpa - navy/dark blue sweatshirt
    // Sweatshirt neckline (round/crew)
    pp(g, ['M 236 342 C 240 338 246 336 252 336 C 258 336 264 338 268 342'], a);
    // Sweatshirt collar ribbing
    pp(g, ['M 234 344 C 240 340 248 338 252 338 C 256 338 264 340 270 344'], a, lt);
    // Left sleeve
    pp(g, ['M 210 382 C 206 376 202 380 200 386 C 198 392 202 396 208 394'], a);
    // Right sleeve
    pp(g, ['M 290 380 C 294 374 298 378 300 384 C 302 390 298 394 292 392'], a);
    // Sweatshirt hem visible
    pp(g, ['M 206 440 L 300 440'], a, lt);
  },

  // ================================================================
  // Layer 5: Bruno hair/beard details (stippling patterns)
  // Buzzcut hair, stubble beard, facial definition lines
  // ================================================================
  (g, a) => {
    // Hairline contour
    pp(g, [
      'M 82 290 C 80 272 86 256 98 248 C 110 242 124 244 134 254 C 140 262 144 274 144 286'
    ], a);
    // Buzzcut hair stippling dots (dense array of small dots)
    const buzzDots = [
      [94,248],[100,244],[106,242],[112,244],[118,248],
      [88,256],[96,252],[104,248],[112,248],[120,252],[128,258],
      [84,266],[92,260],[100,254],[108,252],[116,254],[124,260],[132,268],
      [82,276],[90,268],[98,262],[106,258],[114,260],[122,266],[130,274],
      [80,284],[88,276],[96,268],[104,264],[112,264],[120,270],[128,278],[136,284],
      [86,282],[94,274],[102,268],[110,266],[118,268],[126,274],[134,280],
      [92,278],[100,272],[108,268],[116,270],[124,276]
    ];
    buzzDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a));

    // Beard stubble dots along jawline and chin
    const stubbleDots = [
      // Jawline left side
      [82,312],[84,316],[86,320],[88,324],[90,328],[92,332],
      // Chin bottom
      [96,336],[100,338],[104,340],[108,342],[112,340],[116,338],[120,336],
      // Jawline right side
      [124,332],[126,328],[128,324],[130,320],[132,316],[134,312],
      // Chin area (denser)
      [96,334],[100,336],[104,338],[108,340],[112,338],[116,336],[120,334],
      // Neck top stubble
      [98,342],[102,344],[106,344],[110,344],[114,342],[118,340],
      // Upper lip shadow
      [100,314],[104,314],[108,314],[112,314],[116,314]
    ];
    stubbleDots.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 0.55, fill: a ? HL : '#4A3628' }, a));

    // Nasolabial fold lines (faint)
    pp(g, ['M 98 298 C 96 304 94 310 92 316'], a, lt);
    pp(g, ['M 120 296 C 122 302 124 308 126 314'], a, lt);
  },

  // ================================================================
  // Layer 6: Landscape details
  // Clouds, vegetation, rocky outcrops, boardwalk planks, river
  // ================================================================
  (g, a) => {
    // Cloud 1 (left - large cumulus)
    pp(g, [
      'M 30 25 C 38 14 50 10 62 14 C 70 8 82 6 92 12 C 100 6 112 8 120 16 C 128 10 138 14 142 22 C 148 18 156 22 156 30 C 156 36 148 40 138 38 C 130 42 118 42 110 38 C 100 42 88 42 78 38 C 68 42 52 40 44 36 C 36 38 28 34 30 28'
    ], a);
    // Cloud inner volume lines
    pp(g, ['M 50 22 C 58 18 68 16 78 18', 'M 100 16 C 108 12 118 14 124 18'], a, lt);

    // Cloud 2 (right - smaller)
    pp(g, [
      'M 250 35 C 256 26 266 22 278 26 C 286 20 298 22 306 28 C 314 24 322 28 324 34 C 326 40 318 44 308 42 C 298 46 284 44 276 40 C 266 44 254 42 250 38'
    ], a);
    pp(g, ['M 268 30 C 276 26 286 26 294 30'], a, lt);

    // Cloud 3 (center, distant/small)
    pp(g, ['M 155 48 C 160 42 168 40 176 44 C 182 40 190 42 194 48 C 194 52 188 54 180 52 C 172 54 162 52 158 50'], a, lt);

    // Vegetation patches on left mountain (Mediterranean scrub)
    pp(g, ['M 15 170 C 22 164 30 168 38 164 C 46 160 54 164 62 160'], a, lt);
    pp(g, ['M 40 140 C 48 134 56 138 64 134 C 72 130 78 134 84 130'], a, lt);
    pp(g, ['M 25 190 C 32 184 40 188 48 184'], a, lt);
    // Bush/tree silhouettes on left slope
    pp(g, ['M 52 148 C 56 140 64 138 68 142 C 72 138 78 140 80 148'], a, lt);
    pp(g, ['M 18 178 C 22 170 28 168 32 172 C 36 168 42 170 44 178'], a, lt);

    // Vegetation on right mountain (golden-brown/green mix)
    pp(g, ['M 280 90 C 288 84 296 88 304 84 C 312 80 320 84 328 80'], a, lt);
    pp(g, ['M 300 70 C 306 64 314 66 320 62 C 328 58 334 62 340 58'], a, lt);
    pp(g, ['M 260 120 C 268 114 276 118 284 114'], a, lt);

    // Rocky outcrops - left mountain
    pp(g, ['M 45 135 L 55 118 L 68 122 L 62 140'], a, lt);
    pp(g, ['M 75 105 L 82 92 L 95 98 L 90 112'], a, lt);
    pp(g, ['M 10 195 L 18 182 L 28 186 L 22 200'], a, lt);

    // Rocky outcrops - right mountain (golden-brown)
    pp(g, ['M 305 75 L 312 60 L 325 65 L 320 82'], a, lt);
    pp(g, ['M 265 108 L 272 96 L 282 100 L 278 114'], a, lt);
    pp(g, ['M 340 90 L 348 78 L 358 84 L 354 96'], a, lt);

    // River/path at valley bottom
    pp(g, [
      'M 148 218 C 156 212 164 208 174 206 C 184 204 194 206 204 210 C 210 212 216 216 220 218'
    ], a, lt);
    // Second river line (wider appearance)
    pp(g, ['M 155 216 C 162 212 170 208 180 207 C 190 208 198 210 206 214'], a, lt);

    // Boardwalk planks (cross beams - getting smaller with distance)
    for (let i = 0; i < 10; i++) {
      const t = i / 9;
      const x = 222 + t * 114;
      const yTop = 126 - t * 22;
      const yBot = 132 - t * 20;
      const w = 2.5 - t * 1.2;
      pp(g, [`M ${x.toFixed(1)} ${yTop.toFixed(1)} L ${(x + w).toFixed(1)} ${yBot.toFixed(1)}`], a, lt);
    }

    // Valley shadow/depth lines
    pp(g, ['M 140 220 C 148 218 156 216 164 215', 'M 196 215 C 204 216 212 218 220 220'], a, lt);
  },

  // ================================================================
  // Layer 7: Color fills - figures
  // Bruno skin (lighter), grandpa skin (tanned), clothing
  // ================================================================
  (g, a) => {
    // Bruno skin fill - head
    fl(g, 'M 78 295 C 76 272 82 254 94 245 C 102 240 110 238 118 242 C 130 248 138 262 140 282 C 142 298 138 312 132 322 C 126 330 120 336 114 340 C 108 342 102 340 96 336 C 88 330 82 318 80 305 Z', '#EDBE8C', a);
    // Bruno left ear fill
    fl(g, 'M 76 282 C 70 278 66 282 66 290 C 66 298 70 302 76 300 Z', '#E0B080', a);
    // Bruno right ear fill
    fl(g, 'M 142 278 C 148 274 152 278 152 286 C 152 294 148 298 142 296 Z', '#E0B080', a);
    // Bruno neck fill
    fe(g, 'rect', { x: 97, y: 338, width: 26, height: 20, rx: 4, fill: '#DEB07A' }, false);
    // Bruno white Quechua t-shirt fill
    fl(g, 'M 56 395 C 64 375 80 360 108 358 C 136 360 152 375 160 395 L 164 450 L 52 450 Z', '#FAFAFA', a);

    // Eye whites - Bruno
    fl(g, 'M 88 284 C 90 278 96 275 102 278 C 108 281 108 288 104 292 C 100 295 90 292 88 286 Z', '#FFFFFF', false);
    fl(g, 'M 114 282 C 116 276 122 273 128 276 C 134 279 134 286 130 290 C 126 293 116 290 114 284 Z', '#FFFFFF', false);

    // Grandpa skin fill - head (tanned/bronzed)
    fl(g, 'M 222 288 C 220 268 226 252 237 244 C 244 240 251 238 258 242 C 268 248 274 260 276 276 C 278 290 274 302 268 310 C 262 318 258 322 253 324 C 248 326 243 324 238 320 C 231 314 226 304 224 295 Z', '#D7A06A', a);
    // Grandpa left ear fill
    fl(g, 'M 220 278 C 214 274 210 278 210 286 C 210 294 214 298 220 296 Z', '#C89460', a);
    // Grandpa right ear fill
    fl(g, 'M 278 274 C 284 270 288 274 288 282 C 288 290 284 294 278 292 Z', '#C89460', a);
    // Grandpa neck fill
    fe(g, 'rect', { x: 239, y: 322, width: 24, height: 18, rx: 4, fill: '#C8956E' }, false);
    // Grandpa navy sweatshirt fill
    fl(g, 'M 204 378 C 212 362 228 348 250 346 C 272 348 288 362 296 378 L 300 450 L 200 450 Z', '#1A237E', a);

    // Eye whites - Grandpa
    fl(g, 'M 232 278 C 234 274 240 272 244 275 C 247 278 246 282 242 284 C 238 286 233 283 232 279 Z', '#FFFFFF', false);
    fl(g, 'M 254 276 C 256 272 262 270 266 273 C 269 276 268 280 264 282 C 260 284 255 281 254 277 Z', '#FFFFFF', false);
  },

  // ================================================================
  // Layer 8: Color fills - landscape, hair, eyebrows
  // Sky, mountains, boardwalk, clouds, hair/eyebrow fills
  // ================================================================
  (g, a) => {
    // Sky gradient layers (top darker, bottom lighter)
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 50, fill: '#1565C0', opacity: '0.35' }, a);
    fe(g, 'rect', { x: 0, y: 50, width: 360, height: 50, fill: '#1E88E5', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 0, y: 100, width: 360, height: 60, fill: '#42A5F5', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 0, y: 160, width: 360, height: 60, fill: '#64B5F6', opacity: '0.12' }, false);

    // Cloud fills
    fl(g, 'M 30 25 C 38 14 50 10 62 14 C 70 8 82 6 92 12 C 100 6 112 8 120 16 C 128 10 138 14 142 22 C 148 18 156 22 156 30 C 156 36 148 40 138 38 C 130 42 118 42 110 38 C 100 42 88 42 78 38 C 68 42 52 40 44 36 C 36 38 28 34 30 28 Z', '#FAFAFA', false);
    fe(g, 'ellipse', { cx: 93, cy: 22, rx: 60, ry: 14, fill: '#FFFFFF', opacity: '0.3' }, false);
    fl(g, 'M 250 35 C 256 26 266 22 278 26 C 286 20 298 22 306 28 C 314 24 322 28 324 34 C 326 40 318 44 308 42 C 298 46 284 44 276 40 C 266 44 254 42 250 38 Z', '#F5F5F5', false);
    fl(g, 'M 155 48 C 160 42 168 40 176 44 C 182 40 190 42 194 48 C 194 52 188 54 180 52 C 172 54 162 52 158 50 Z', '#E8E8E8', false);

    // Distant mountains fill (background - lighter, bluer tones)
    fl(g, 'M 0 120 C 15 100 32 85 50 78 C 68 72 82 76 95 68 C 108 60 120 48 135 42 C 148 38 160 42 172 55 C 180 64 180 80 180 100 L 180 160 L 0 160 Z', '#81C784', false);
    fl(g, 'M 180 100 C 180 80 185 60 200 48 C 215 36 235 30 255 38 C 275 46 295 60 315 70 C 335 80 348 90 360 100 L 360 160 L 180 160 Z', '#90CAF9', false);

    // Near left mountain fill (darker green - steep with scrub)
    fl(g, 'M 0 200 C 8 175 18 145 30 120 C 42 95 55 72 68 55 C 78 42 88 32 98 28 C 108 24 115 28 122 38 C 132 52 140 75 148 100 C 155 122 162 150 168 178 C 172 195 176 210 180 220 L 0 220 Z', '#33691E', false);

    // Near right mountain fill (mixed green/golden)
    fl(g, 'M 180 220 C 182 200 186 170 195 140 C 204 112 216 86 230 65 C 242 48 255 36 270 30 C 285 24 298 28 310 42 C 322 56 334 80 345 110 C 352 130 358 158 360 190 L 360 220 Z', '#2E7D32', false);
    // Golden-brown rocky patches on right mountain
    fe(g, 'path', { d: 'M 305 75 L 312 60 L 325 65 L 320 82 Z', fill: '#A1887F', opacity: '0.4' }, false);
    fe(g, 'path', { d: 'M 265 108 L 272 96 L 282 100 L 278 114 Z', fill: '#A1887F', opacity: '0.35' }, false);
    fe(g, 'path', { d: 'M 340 90 L 348 78 L 358 84 L 354 96 Z', fill: '#8D6E63', opacity: '0.35' }, false);
    // Rocky patches on left mountain
    fe(g, 'path', { d: 'M 45 135 L 55 118 L 68 122 L 62 140 Z', fill: '#8D6E63', opacity: '0.3' }, false);
    fe(g, 'path', { d: 'M 75 105 L 82 92 L 95 98 L 90 112 Z', fill: '#795548', opacity: '0.3' }, false);

    // Valley bottom (very dark green)
    fl(g, 'M 135 220 C 148 214 162 208 174 206 C 186 204 198 206 210 212 C 218 216 224 218 228 220 L 135 220 Z', '#1B5E20', false);

    // Boardwalk fill (wood brown)
    fl(g, 'M 220 125 C 240 118 260 112 280 108 C 300 104 320 102 340 100 L 340 108 C 320 110 300 112 280 116 C 260 120 240 126 220 133 Z', '#A1887F', false);
    // Railing fill (slightly lighter wood)
    fl(g, 'M 220 119 C 240 112 260 106 280 102 C 300 98 320 96 340 94 L 340 100 C 320 102 300 104 280 108 C 260 112 240 118 220 125 Z', '#8D6E63', false);

    // Bruno hair fill (dark brown buzzcut area)
    fl(g, 'M 82 290 C 80 272 86 256 98 248 C 110 242 124 244 134 254 C 140 262 144 274 144 286 L 140 284 C 140 274 138 264 132 256 C 126 248 116 244 106 246 C 96 248 88 258 84 272 Z', '#3E2C20', false);

    // Grandpa hair fill (gray/salt-and-pepper)
    fl(g, 'M 224 284 C 222 266 228 250 240 244 C 252 240 264 244 272 254 C 278 264 280 276 278 286 L 274 282 C 276 272 276 264 272 256 C 268 248 260 244 252 244 C 244 246 236 254 230 266 C 226 274 226 280 226 286 Z', '#9E9E9E', false);

    // Grandpa thick eyebrow fills (very dark - defining feature)
    fl(g, 'M 228 268 C 234 261 244 258 252 262 L 253 264 C 245 261 236 264 230 270 Z', '#37474F', false);
    fl(g, 'M 256 260 C 264 256 274 258 280 264 L 278 267 C 272 261 264 259 256 263 Z', '#37474F', false);
  },

  // ================================================================
  // Layer 9: Polish and final details
  // Eye shines, teeth, cheek blush, Quechua text, vegetation texture,
  // sun glare, mountain depth shadows
  // ================================================================
  (g, a) => {
    // Eye shines - Bruno
    fe(g, 'circle', { cx: 96, cy: 283, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 122, cy: 281, r: 1.5, fill: '#FFFFFF' }, a);
    // Eye shines - Grandpa
    fe(g, 'circle', { cx: 238, cy: 276, r: 1.2, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 260, cy: 274, r: 1.2, fill: '#FFFFFF' }, a);

    // Teeth fill - Bruno (showing individual teeth)
    fl(g, 'M 94 318 C 98 314 106 312 114 314 C 120 312 126 316 130 320 L 130 322 C 126 320 120 318 114 318 C 108 318 100 318 94 322 Z', '#FAFAFA', false);
    // Tooth lines inside
    pp(g, ['M 102 316 L 102 320', 'M 108 315 L 108 320', 'M 114 315 L 114 320', 'M 120 316 L 120 320'], false, lt);
    // Lower teeth hint
    fl(g, 'M 96 322 C 104 328 112 330 120 326 L 122 324 C 114 328 104 326 96 322 Z', '#F5F5F5', false);

    // Teeth fill - Grandpa
    fl(g, 'M 236 312 C 242 306 250 304 256 306 C 262 304 266 308 268 312 L 268 314 C 264 312 260 310 254 310 C 248 310 240 312 236 314 Z', '#FAFAFA', false);

    // Cheek blush - Bruno
    fe(g, 'ellipse', { cx: 88, cy: 308, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);
    fe(g, 'ellipse', { cx: 130, cy: 306, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, false);
    // Cheek blush - Grandpa (sun-touched)
    fe(g, 'ellipse', { cx: 232, cy: 298, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.25' }, false);
    fe(g, 'ellipse', { cx: 268, cy: 296, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.25' }, false);

    // Quechua brand text on Bruno's t-shirt
    const qt = ce('text', { x: 70, y: 384, fill: '#9E9E9E', 'font-size': '5', 'font-weight': 'bold', 'font-family': 'sans-serif' });
    qt.textContent = 'QUECHUA';
    if (a) qt.classList.add('active-element');
    g.appendChild(qt);
    // Quechua mountain logo fill
    fl(g, 'M 72 384 L 76 376 L 80 382 L 84 374 L 88 384 Z', '#BDBDBD', false);

    // Vegetation texture lines (small brush marks)
    pp(g, ['M 28 172 C 32 168 36 170 40 168', 'M 48 158 C 52 154 56 156 60 154'], a, lt);
    pp(g, ['M 55 142 C 59 138 63 140 67 138', 'M 20 186 C 24 182 28 184 32 182'], a, lt);
    pp(g, ['M 288 86 C 292 82 296 84 300 82', 'M 310 68 C 314 64 318 66 322 64'], a, lt);
    pp(g, ['M 262 116 C 266 112 270 114 274 112'], a, lt);

    // Sun glare / warm light in sky
    fe(g, 'ellipse', { cx: 300, cy: 20, rx: 45, ry: 18, fill: '#FFF9C4', opacity: '0.08' }, false);
    fe(g, 'ellipse', { cx: 300, cy: 20, rx: 25, ry: 10, fill: '#FFFFFF', opacity: '0.06' }, false);

    // Mountain depth shadows (subtle lines showing depth)
    pp(g, ['M 95 115 C 105 125 120 135 140 145', 'M 115 90 C 125 100 138 112 150 125'], a, lt);
    pp(g, ['M 285 95 C 295 105 310 115 325 125', 'M 310 70 C 320 80 332 92 342 105'], a, lt);
    // Valley shadow emphasis
    pp(g, ['M 160 210 C 168 208 176 206 184 206', 'M 184 206 C 192 208 200 210 208 214'], a, lt);

    // Left mountain slope shadow lines (adding depth)
    fl(g, 'M 0 180 C 10 160 22 135 35 115 C 48 95 60 80 72 68 C 80 60 86 56 92 55 L 92 70 C 86 72 78 80 68 95 C 55 115 42 140 30 165 C 20 185 10 200 0 210 Z', '#1B5E20', false);

    // Grandpa wrinkle detail (forehead shading)
    pp(g, ['M 236 256 C 244 254 252 254 262 256'], false, lt);

    // Boardwalk shadow underneath
    fl(g, 'M 220 133 C 240 126 260 120 280 116 C 300 112 320 110 340 108 L 340 114 C 320 116 300 118 280 122 C 260 126 240 132 220 139 Z', '#5D4037', false);
  }
];
