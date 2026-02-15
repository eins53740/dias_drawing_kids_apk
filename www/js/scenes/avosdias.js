const avosdiasLayers = [
  // =============================================
  // Layer 0: Composition guides
  // =============================================
  (g, a) => {
    // Awning baseline
    pp(g, ['M 0 80 L 360 80'], a, lt);
    // Grandmother zone (left)
    pp(g, ['M 50 80 L 50 440', 'M 160 80 L 160 440'], a, lt);
    // Grandfather zone (right)
    pp(g, ['M 200 80 L 200 440', 'M 310 80 L 310 440'], a, lt);
    // Head alignment line
    pp(g, ['M 50 130 L 310 130'], a, lt);
    // Baby zone in grandmother's arms
    pp(g, ['M 70 220 L 150 220', 'M 70 320 L 150 320'], a, lt);
    // Center vertical
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Awning curve guide
    pp(g, ['M 0 76 C 60 60 120 68 180 58 C 240 48 300 60 360 72'], a, lt);
    // Shoulder line
    pp(g, ['M 60 200 L 300 200'], a, lt);
  },

  // =============================================
  // Layer 1: Body outlines for all 3 figures
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER (left, x~80-140) ---
    // Head - slightly wider, rounder face for heavier build
    pp(g, [
      'M 110 100 C 90 100 76 112 74 130 C 72 148 80 164 92 172 C 98 176 104 180 110 182 C 116 180 122 176 128 172 C 140 164 148 148 146 130 C 144 112 130 100 110 100 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 74 130 C 68 126 64 132 64 140 C 64 148 68 154 74 152'
    ], a);
    // Right ear
    pp(g, [
      'M 146 130 C 152 126 156 132 156 140 C 156 148 152 154 146 152'
    ], a);
    // Neck - slightly wider for heavier build
    pp(g, ['M 100 180 L 98 196', 'M 120 180 L 122 196'], a);
    // Shoulders and torso - slightly heavier build, sleeveless
    pp(g, [
      'M 60 224 C 68 208 86 196 110 196 C 134 196 152 208 160 224 L 164 440 M 60 224 L 56 440'
    ], a);
    // Left arm (bare, holding baby from outside)
    pp(g, [
      'M 62 228 C 54 244 48 264 48 282 C 48 296 50 306 54 314 C 56 318 60 322 64 320 C 68 318 72 310 74 300'
    ], a);
    // Right arm (bare, holding baby from other side)
    pp(g, [
      'M 158 228 C 166 244 172 264 172 282 C 172 296 170 306 166 314 C 164 318 160 322 156 320 C 152 318 148 310 146 300'
    ], a);

    // --- BABY MIGUEL (center-left, in grandmother's arms) ---
    // Head - round baby head
    pp(g, [
      'M 106 232 C 92 232 82 242 80 254 C 78 266 84 278 94 284 C 98 286 102 288 106 288 C 110 288 114 286 118 284 C 128 278 134 266 132 254 C 130 242 120 232 106 232 Z'
    ], a);
    // Baby body (small, in white outfit)
    pp(g, [
      'M 94 292 C 98 288 102 286 106 286 C 110 286 114 288 118 292 L 122 350 M 94 292 L 90 350'
    ], a);
    // Baby left leg
    pp(g, [
      'M 92 346 C 88 354 86 362 88 366 C 90 370 94 368 96 362'
    ], a);
    // Baby right leg
    pp(g, [
      'M 120 346 C 124 354 126 362 124 366 C 122 370 118 368 116 362'
    ], a);

    // --- GRANDFATHER (right, x~220-290) ---
    // Head - angular, lean face
    pp(g, [
      'M 258 90 C 240 90 228 102 226 118 C 224 134 230 150 240 158 C 246 162 252 166 258 168 C 264 166 270 162 276 158 C 286 150 292 134 290 118 C 288 102 276 90 258 90 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 226 118 C 220 114 216 120 216 128 C 216 136 220 142 226 140'
    ], a);
    // Right ear
    pp(g, [
      'M 290 118 C 296 114 300 120 300 128 C 300 136 296 142 290 140'
    ], a);
    // Neck - lean
    pp(g, ['M 250 166 L 248 182', 'M 266 166 L 268 182'], a);
    // Shoulders and torso - tall, lean build
    pp(g, [
      'M 214 210 C 222 194 240 182 258 182 C 276 182 294 194 302 210 L 308 440 M 214 210 L 208 440'
    ], a);
    // Left arm
    pp(g, [
      'M 216 214 C 208 228 204 244 204 258 C 204 270 206 280 210 286'
    ], a);
    // Right arm
    pp(g, [
      'M 300 214 C 308 228 312 244 312 258 C 312 270 310 280 306 286'
    ], a);
  },

  // =============================================
  // Layer 2: Face details - eyes, glasses, nose, mouth
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER FACE ---
    // Left eye - almond shape with eyelid curve
    pp(g, [
      'M 92 128 C 94 123 99 120 104 120 C 109 120 114 123 116 128 C 114 133 109 136 104 136 C 99 136 94 133 92 128 Z'
    ], a);
    // Left upper eyelid crease
    pp(g, ['M 92 124 C 96 119 102 117 108 117 C 112 117 116 119 118 122'], a, lt);
    // Left iris
    fe(g, 'circle', { cx: 104, cy: 128, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Left pupil
    fe(g, 'circle', { cx: 104, cy: 128, r: 2.2, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 104 128 C 106 123 111 120 116 120 C 121 120 126 123 128 128 C 126 133 121 136 116 136 C 111 136 106 133 104 128 Z'
    ], a);
    // Right upper eyelid crease
    pp(g, ['M 102 124 C 106 119 112 117 118 117 C 122 117 126 119 128 122'], a, lt);
    // Right iris
    fe(g, 'circle', { cx: 116, cy: 128, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Right pupil
    fe(g, 'circle', { cx: 116, cy: 128, r: 2.2, fill: a ? HL : '#3E2518' }, a);

    // Glasses - rectangular frames
    // Left lens frame
    pp(g, [
      'M 86 120 L 110 120 C 112 120 114 122 114 124 L 114 138 C 114 140 112 142 110 142 L 86 142 C 84 142 82 140 82 138 L 82 124 C 82 122 84 120 86 120 Z'
    ], a);
    // Right lens frame
    pp(g, [
      'M 108 120 L 132 120 C 134 120 136 122 136 124 L 136 138 C 136 140 134 142 132 142 L 108 142 C 106 142 104 140 104 138 L 104 124 C 104 122 106 120 108 120 Z'
    ], a);
    // Bridge between lenses
    pp(g, ['M 114 130 L 104 130'], a);
    // Left arm of glasses
    pp(g, ['M 82 130 L 74 128'], a);
    // Right arm of glasses
    pp(g, ['M 136 130 L 146 128'], a);

    // Grandmother nose - defined bridge and nostrils
    pp(g, [
      'M 108 134 C 107 140 106 148 105 152',
      'M 100 156 C 103 160 107 162 110 162 C 113 160 116 158 118 156',
      'M 102 156 C 104 154 106 153 108 154',
      'M 112 154 C 114 153 116 154 118 156'
    ], a);
    // Grandmother warm smile - with lip definition
    pp(g, [
      'M 94 166 C 98 162 104 160 110 160 C 116 160 122 162 126 166'
    ], a);
    pp(g, [
      'M 94 166 C 100 172 106 176 110 176 C 114 176 120 172 126 166'
    ], a);
    // Upper lip shape
    pp(g, [
      'M 98 164 C 102 162 106 160 110 161 C 114 160 118 162 122 164'
    ], a);
    // Smile lines (nasolabial folds)
    pp(g, [
      'M 90 148 C 88 154 88 160 90 166',
      'M 130 148 C 132 154 132 160 130 166'
    ], a, lt);
    // Fine wrinkles at eye corners
    pp(g, [
      'M 80 126 C 78 124 76 124 74 126',
      'M 80 130 C 78 130 76 132 74 134',
      'M 138 126 C 140 124 142 124 144 126',
      'M 138 130 C 140 130 142 132 144 134'
    ], a, lt);

    // --- GRANDFATHER FACE ---
    // THICK EYEBROWS - his most distinctive feature (double lines + fill)
    // Left eyebrow - thick, bold, dark
    pp(g, [
      'M 236 106 C 242 100 252 98 260 102'
    ], a);
    pp(g, [
      'M 236 110 C 242 104 252 102 260 106'
    ], a);
    // Fill path for left eyebrow
    fl(g, 'M 236 106 C 242 100 252 98 260 102 L 260 106 C 252 102 242 104 236 110 Z', a ? HL : '#2D2D2D', a);
    // Right eyebrow - thick, bold, dark
    pp(g, [
      'M 256 102 C 264 98 274 100 280 106'
    ], a);
    pp(g, [
      'M 256 106 C 264 102 274 104 280 110'
    ], a);
    // Fill path for right eyebrow
    fl(g, 'M 256 102 C 264 98 274 100 280 106 L 280 110 C 274 104 264 102 256 106 Z', a ? HL : '#2D2D2D', a);
    // Additional brow thickness strokes
    pp(g, [
      'M 238 108 C 244 102 254 100 260 104',
      'M 258 104 C 266 100 276 102 280 108'
    ], a);

    // Left eye - with eyelid detail
    pp(g, [
      'M 240 116 C 242 111 248 108 254 108 C 260 108 266 111 268 116 C 266 121 260 124 254 124 C 248 124 242 121 240 116 Z'
    ], a);
    // Left upper eyelid
    pp(g, ['M 238 112 C 244 107 252 105 258 106 C 264 107 268 110 270 114'], a, lt);
    // Left iris
    fe(g, 'circle', { cx: 254, cy: 116, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Left pupil
    fe(g, 'circle', { cx: 254, cy: 116, r: 2.2, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 254 116 C 256 111 262 108 268 108 C 274 108 280 111 282 116 C 280 121 274 124 268 124 C 262 124 256 121 254 116 Z'
    ], a);
    // Right upper eyelid
    pp(g, ['M 252 112 C 258 107 266 105 272 106 C 278 107 282 110 284 114'], a, lt);
    // Right iris
    fe(g, 'circle', { cx: 268, cy: 116, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Right pupil
    fe(g, 'circle', { cx: 268, cy: 116, r: 2.2, fill: a ? HL : '#3E2518' }, a);

    // Grandfather strong nose - prominent with bridge detail
    pp(g, [
      'M 260 108 C 259 116 258 126 257 132',
      'M 250 136 C 254 142 258 144 262 144 C 266 142 268 140 270 136',
      'M 252 136 C 254 134 258 133 260 134',
      'M 264 134 C 266 133 268 134 270 136'
    ], a);

    // Grandfather composed expression / slight smile
    pp(g, [
      'M 246 152 C 250 148 256 146 260 148 C 264 146 270 148 274 152'
    ], a);
    pp(g, [
      'M 248 154 C 252 158 258 160 262 158 C 266 156 270 154'
    ], a);
    // Defined jawline (lean angular face)
    pp(g, [
      'M 228 138 C 232 154 240 164 250 168',
      'M 288 138 C 284 154 276 164 266 168'
    ], a, lt);
    // Subtle forehead lines
    pp(g, [
      'M 242 96 C 250 94 262 94 274 96',
      'M 244 100 C 252 98 264 98 272 100'
    ], a, lt);

    // --- BABY MIGUEL FACE ---
    // Left eye - big baby eyes
    pp(g, [
      'M 94 252 C 96 248 100 246 104 246 C 108 246 112 248 114 252 C 112 256 108 258 104 258 C 100 258 96 256 94 252 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 104, cy: 253, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Right eye
    pp(g, [
      'M 100 252 C 102 248 106 246 110 246 C 114 246 118 248 120 252 C 118 256 114 258 110 258 C 106 258 102 256 100 252 Z'
    ], a);
    // Right pupil
    fe(g, 'circle', { cx: 110, cy: 253, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Baby tiny nose
    pp(g, [
      'M 106 260 C 105 262 104 264 105 266 C 106 268 108 268 109 266 C 110 264 109 262 108 260'
    ], a);
    // Baby calm little mouth
    pp(g, [
      'M 100 272 C 103 270 107 270 110 272',
      'M 102 273 C 105 276 109 276 112 273'
    ], a);
    // Baby left ear
    pp(g, [
      'M 80 254 C 76 250 74 254 74 260 C 74 266 76 270 80 268'
    ], a);
    // Baby right ear
    pp(g, [
      'M 132 254 C 136 250 138 254 138 260 C 138 266 136 270 132 268'
    ], a);
  },

  // =============================================
  // Layer 3: Hair details
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER curly gray-brown hair with volume ---
    // Main hair outline - short curly volume
    pp(g, [
      'M 74 126 C 70 110 76 96 88 90 C 100 84 114 82 126 86 C 138 90 148 100 150 114 C 152 122 150 130 148 136'
    ], a);
    // Individual curls on top
    pp(g, [
      'M 82 96 C 80 90 84 84 90 86 C 94 88 92 94 86 96',
      'M 92 88 C 90 82 94 76 100 78 C 104 80 102 86 96 88',
      'M 102 84 C 100 78 104 72 110 74 C 114 76 112 82 106 84',
      'M 112 84 C 110 78 114 72 120 74 C 124 76 122 82 116 84',
      'M 122 88 C 120 82 124 76 130 78 C 134 80 132 86 126 88',
      'M 130 94 C 128 88 132 82 138 84 C 142 86 140 92 134 94'
    ], a);
    // Curls on left side
    pp(g, [
      'M 72 108 C 68 104 66 110 68 116 C 70 120 74 118 74 114',
      'M 70 120 C 66 118 64 124 66 130 C 68 134 72 132 72 128',
      'M 68 134 C 64 132 62 138 64 144 C 66 148 70 146 70 142'
    ], a);
    // Curls on right side
    pp(g, [
      'M 148 110 C 152 106 154 112 152 118 C 150 122 146 120 146 116',
      'M 150 122 C 154 120 156 126 154 132 C 152 136 148 134 148 130',
      'M 152 134 C 156 132 158 138 156 144 C 154 148 150 146 150 142'
    ], a);
    // Hair texture wisps
    pp(g, [
      'M 88 92 C 94 86 102 84 108 86',
      'M 96 82 C 104 78 114 78 122 82',
      'M 76 102 C 82 94 92 88 100 86'
    ], a, lt);

    // --- GRANDFATHER short gray/salt-and-pepper hair ---
    // Main hair outline
    pp(g, [
      'M 226 114 C 224 100 230 88 242 82 C 254 76 268 74 278 78 C 288 82 294 92 294 104 C 294 112 292 118 290 122'
    ], a);
    // Short textured strokes
    pp(g, [
      'M 248 82 C 254 78 264 76 272 80',
      'M 240 88 C 248 82 260 80 270 84',
      'M 234 96 C 242 88 254 86 266 90',
      'M 232 104 C 238 96 248 92 258 94'
    ], a, lt);
    // Hair at temples (short, neat)
    pp(g, [
      'M 224 108 C 222 102 224 96 228 92',
      'M 292 108 C 294 102 292 96 288 92'
    ], a, lt);
    // Textured short hair top
    pp(g, [
      'M 242 78 C 244 74 248 72 252 74',
      'M 254 76 C 258 72 264 72 268 76',
      'M 272 78 C 276 74 280 76 282 80'
    ], a);

    // --- BABY fine light hair ---
    pp(g, [
      'M 84 250 C 82 240 88 232 98 228 C 108 224 118 226 126 232 C 132 238 134 246 132 254'
    ], a);
    // Wispy baby hair
    pp(g, [
      'M 96 230 C 100 226 108 224 114 228',
      'M 92 236 C 98 230 106 228 112 232',
      'M 100 226 C 104 222 110 222 114 226'
    ], a, lt);
  },

  // =============================================
  // Layer 4: Clothing details
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER teal sleeveless tank top ---
    // Tank top straps
    pp(g, [
      'M 92 196 C 88 192 84 194 82 200 L 80 212',
      'M 128 196 C 132 192 136 194 138 200 L 140 212'
    ], a);
    // Neckline - V or scoop
    pp(g, [
      'M 84 210 C 90 214 100 218 110 218 C 120 218 130 214 136 210'
    ], a);
    // Tank top body / side seams
    pp(g, [
      'M 80 212 L 56 440',
      'M 140 212 L 164 440'
    ], a, lt);
    // Fabric wrinkles on torso
    pp(g, [
      'M 88 240 C 98 244 108 244 118 240',
      'M 82 270 C 94 276 110 276 128 270',
      'M 78 310 C 92 316 112 316 132 310',
      'M 86 350 C 98 354 114 354 126 350'
    ], a, lt);
    // Arm hole definition
    pp(g, [
      'M 80 212 C 72 218 66 226 62 236',
      'M 140 212 C 148 218 154 226 158 236'
    ], a, lt);

    // Gold chain necklace
    pp(g, ['M 96 200 C 100 204 106 208 110 210 C 114 208 120 204 124 200'], a);
    // Chain links (small ovals)
    pp(g, [
      'M 100 202 C 101 204 103 206 105 206 C 107 206 109 204 110 202',
      'M 110 204 C 111 206 113 208 115 208 C 117 208 119 206 120 204'
    ], a, lt);
    // Pendant hanging
    pp(g, ['M 110 210 L 110 222'], a);
    // Pendant (teardrop / oval)
    pp(g, [
      'M 110 222 C 106 224 104 228 106 232 C 108 236 112 236 114 232 C 116 228 114 224 110 222 Z'
    ], a);

    // --- GRANDFATHER white polo shirt ---
    // Collar - prominent fold-over polo collar
    pp(g, [
      'M 242 184 C 248 190 254 192 258 192 C 262 192 268 190 274 184'
    ], a);
    // Left collar point
    pp(g, [
      'M 240 184 C 236 180 232 182 230 186 C 228 192 232 196 238 194 L 244 188'
    ], a);
    // Right collar point
    pp(g, [
      'M 276 184 C 280 180 284 182 286 186 C 288 192 284 196 278 194 L 272 188'
    ], a);
    // Polo button placket
    pp(g, ['M 258 192 L 258 230'], a);
    // Buttons
    fe(g, 'circle', { cx: 258, cy: 200, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 212, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Sleeve hems
    pp(g, [
      'M 216 220 C 214 224 212 228 212 232',
      'M 300 220 C 302 224 304 228 304 232'
    ], a);
    // Shirt body wrinkles
    pp(g, [
      'M 240 240 C 250 244 266 244 276 240',
      'M 232 280 C 246 286 270 286 284 280',
      'M 226 330 C 242 336 274 336 290 330'
    ], a, lt);

    // --- BABY white ceremony outfit ---
    // Baby collar / neckline
    pp(g, [
      'M 94 290 C 98 286 104 284 106 284 C 108 284 114 286 118 290'
    ], a);
    // Small collar detail
    pp(g, [
      'M 96 288 C 94 286 92 288 94 290',
      'M 116 288 C 118 286 120 288 118 290'
    ], a);
    // Baby shirt texture lines
    pp(g, [
      'M 96 304 C 102 306 110 306 116 304',
      'M 94 318 C 100 320 112 320 118 318',
      'M 92 334 C 100 336 112 336 120 334'
    ], a, lt);
    // Bloomers / shorts bottom edge
    pp(g, [
      'M 90 344 C 88 348 88 352 90 354 L 92 350',
      'M 122 344 C 124 348 124 352 122 354 L 120 350'
    ], a, lt);
  },

  // =============================================
  // Layer 5: Hands, arms detail, objects
  // =============================================
  (g, a) => {
    // --- GRANDMOTHER arms cradling baby ---
    // Left arm detail with forearm curve
    pp(g, [
      'M 62 228 C 56 242 50 258 48 274 C 46 286 48 296 52 306',
      'M 52 306 C 56 312 62 316 66 314 C 70 312 72 306 74 296'
    ], a);
    // Left hand - fingers cradling baby's bottom
    pp(g, [
      'M 74 296 C 76 292 80 290 84 292',
      'M 84 292 C 88 294 90 298 88 302',
      'M 74 300 C 76 296 80 294 82 296',
      'M 82 296 C 86 298 86 302 84 306',
      'M 72 304 C 74 300 76 298 78 300',
      'M 78 300 C 80 304 78 308 76 310'
    ], a);
    // Thumb
    pp(g, [
      'M 68 310 C 66 306 64 302 66 298 C 68 294 72 294 74 298'
    ], a);
    // Bordeaux nails on left hand
    const nailsL = [[86, 294], [82, 298], [78, 302], [76, 306], [70, 300]];
    nailsL.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 1.4, fill: a ? HL : '#800020' }, a));

    // Right arm detail
    pp(g, [
      'M 158 228 C 164 242 170 258 172 274 C 174 286 172 296 168 306',
      'M 168 306 C 164 312 158 316 154 314 C 150 312 148 306 146 296'
    ], a);
    // Right hand - fingers supporting baby's back
    pp(g, [
      'M 146 296 C 144 292 140 290 136 292',
      'M 136 292 C 132 294 130 298 132 302',
      'M 146 300 C 144 296 140 294 138 296',
      'M 138 296 C 134 298 134 302 136 306',
      'M 148 304 C 146 300 144 298 142 300',
      'M 142 300 C 140 304 142 308 144 310'
    ], a);
    // Thumb
    pp(g, [
      'M 152 310 C 154 306 156 302 154 298 C 152 294 148 294 146 298'
    ], a);
    // Bordeaux nails on right hand
    const nailsR = [[134, 294], [138, 298], [142, 302], [144, 306], [150, 300]];
    nailsR.forEach(([cx, cy]) => fe(g, 'circle', { cx, cy, r: 1.4, fill: a ? HL : '#800020' }, a));

    // --- BABY's hands ---
    // Baby left hand (small, chubby)
    pp(g, [
      'M 90 310 C 86 308 84 312 86 316 C 88 320 92 320 94 316'
    ], a);
    // Baby right hand holding small yellow-green object
    pp(g, [
      'M 122 310 C 126 308 128 312 126 316 C 124 320 120 320 118 316'
    ], a);
    // Yellow-green object in baby's hand
    fe(g, 'ellipse', { cx: 128, cy: 314, rx: 6, ry: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // --- GRANDFATHER hands ---
    // Left hand at side
    pp(g, [
      'M 210 286 C 208 292 206 298 208 302',
      'M 208 302 C 210 306 214 308 216 304',
      'M 210 296 C 208 300 210 304 212 306',
      'M 212 292 C 210 296 212 300 214 302',
      'M 214 290 C 212 294 214 298 216 300',
      'M 216 288 C 214 292 216 296 218 298'
    ], a);
    // Right hand at side
    pp(g, [
      'M 306 286 C 308 292 310 298 308 302',
      'M 308 302 C 306 306 302 308 300 304',
      'M 306 296 C 308 300 306 304 304 306',
      'M 304 292 C 306 296 304 300 302 302',
      'M 302 290 C 304 294 302 298 300 300',
      'M 300 288 C 302 292 300 296 298 298'
    ], a);
  },

  // =============================================
  // Layer 6: Background - awning, restaurant, greenery
  // =============================================
  (g, a) => {
    // --- Decorative fabric awning ---
    // Awning main curve (top)
    pp(g, [
      'M 0 20 C 30 14 60 18 90 12 C 120 6 150 10 180 8 C 210 10 240 4 270 10 C 300 16 330 12 360 18'
    ], a);
    // Awning bottom scalloped edge
    pp(g, [
      'M 0 76 C 15 86 30 86 45 76 C 60 86 75 86 90 76 C 105 86 120 86 135 76 C 150 86 165 86 180 76 C 195 86 210 86 225 76 C 240 86 255 86 270 76 C 285 86 300 86 315 76 C 330 86 345 86 360 76'
    ], a);
    // Vertical stripes in awning
    for (let x = 0; x < 370; x += 24) {
      pp(g, [`M ${x} 20 L ${x} 78`], a, lt);
    }
    // Awning pattern - wavy decorative lines
    pp(g, [
      'M 0 36 C 30 30 60 34 90 28 C 120 22 150 26 180 24 C 210 26 240 20 270 26 C 300 32 330 28 360 34',
      'M 0 52 C 30 46 60 50 90 44 C 120 38 150 42 180 40 C 210 42 240 36 270 42 C 300 48 330 44 360 50',
      'M 0 64 C 30 58 60 62 90 56 C 120 50 150 54 180 52 C 210 54 240 48 270 54 C 300 60 330 56 360 62'
    ], a, lt);

    // Lamp hanging from awning
    pp(g, ['M 180 8 L 180 32'], a);
    // Lamp shade
    pp(g, [
      'M 170 32 C 172 28 176 26 180 26 C 184 26 188 28 190 32 L 192 40 C 188 44 184 46 180 46 C 176 46 172 44 168 40 Z'
    ], a);
    // Lamp bulb
    fe(g, 'circle', { cx: 180, cy: 50, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // Background greenery (behind figures, above tables)
    pp(g, [
      'M 0 100 C 10 94 20 98 30 92 C 40 88 50 94 60 90 C 70 86 80 92 90 88',
      'M 310 100 C 320 94 330 98 340 92 C 350 88 360 94 360 90'
    ], a, lt);
    // More greenery hints
    pp(g, [
      'M 0 110 C 14 104 28 110 42 104',
      'M 318 110 C 332 104 346 110 360 104'
    ], a, lt);

    // Background table suggestions (very light)
    pp(g, [
      'M 0 400 L 40 400 L 40 440',
      'M 320 400 L 360 400 L 360 440',
      'M 10 400 L 10 430',
      'M 30 400 L 30 430',
      'M 340 400 L 340 430',
      'M 350 400 L 350 430'
    ], a, lt);
    // People at tables (silhouette hints)
    pp(g, [
      'M 15 386 C 13 378 17 372 22 372 C 27 372 31 378 29 386',
      'M 342 386 C 340 378 344 372 349 372 C 354 372 358 378 356 386'
    ], a, lt);

    // Ground line / floor
    pp(g, ['M 0 430 L 360 430'], a, lt);
  },

  // =============================================
  // Layer 7: Color fills - figures
  // =============================================
  (g, a) => {
    // --- Grandmother skin (lighter tone) ---
    fl(g, 'M 110 100 C 90 100 76 112 74 130 C 72 148 80 164 92 172 C 98 176 104 180 110 182 C 116 180 122 176 128 172 C 140 164 148 148 146 130 C 144 112 130 100 110 100 Z', '#FADCC2', a);
    // Grandmother neck skin
    fe(g, 'rect', { x: 98, y: 180, width: 24, height: 16, rx: 4, fill: '#F0C8A8' }, false);
    // Grandmother ears
    fe(g, 'ellipse', { cx: 69, cy: 140, rx: 5, ry: 10, fill: '#FADCC2' }, false);
    fe(g, 'ellipse', { cx: 151, cy: 140, rx: 5, ry: 10, fill: '#FADCC2' }, false);
    // Grandmother arms (bare skin)
    fl(g, 'M 62 228 C 56 242 50 258 48 274 C 46 286 48 296 52 306 C 56 312 62 316 66 314 C 70 312 72 306 74 296 L 74 280 C 72 270 68 258 66 244 Z', '#F0C8A8', false);
    fl(g, 'M 158 228 C 164 242 170 258 172 274 C 174 286 172 296 168 306 C 164 312 158 316 154 314 C 150 312 148 306 146 296 L 146 280 C 148 270 152 258 154 244 Z', '#F0C8A8', false);
    // Grandmother teal tank top fill
    fl(g, 'M 60 224 C 68 208 86 196 110 196 C 134 196 152 208 160 224 L 164 440 L 56 440 Z', '#00897B', a);
    // Tank top straps
    fl(g, 'M 92 196 C 88 192 84 194 82 200 L 80 212 L 86 214 L 88 200 C 90 196 92 194 94 196 Z', '#00897B', false);
    fl(g, 'M 128 196 C 132 192 136 194 138 200 L 140 212 L 134 214 L 132 200 C 130 196 128 194 126 196 Z', '#00897B', false);

    // Glasses lens tint (very light)
    fe(g, 'rect', { x: 83, y: 121, width: 30, height: 20, rx: 2, fill: '#A1887F', opacity: '0.08' }, false);
    fe(g, 'rect', { x: 105, y: 121, width: 30, height: 20, rx: 2, fill: '#A1887F', opacity: '0.08' }, false);

    // Eye whites - grandmother
    fe(g, 'ellipse', { cx: 104, cy: 128, rx: 6, ry: 4, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 116, cy: 128, rx: 6, ry: 4, fill: '#FAFAFA' }, false);

    // --- Grandfather skin (tanned/bronzed) ---
    fl(g, 'M 258 90 C 240 90 228 102 226 118 C 224 134 230 150 240 158 C 246 162 252 166 258 168 C 264 166 270 162 276 158 C 286 150 292 134 290 118 C 288 102 276 90 258 90 Z', '#D7A86E', a);
    // Grandfather neck skin
    fe(g, 'rect', { x: 248, y: 166, width: 20, height: 16, rx: 4, fill: '#C8956E' }, false);
    // Grandfather ears
    fe(g, 'ellipse', { cx: 221, cy: 128, rx: 5, ry: 10, fill: '#D7A86E' }, false);
    fe(g, 'ellipse', { cx: 295, cy: 128, rx: 5, ry: 10, fill: '#D7A86E' }, false);
    // Grandfather white polo fill
    fl(g, 'M 214 210 C 222 194 240 182 258 182 C 276 182 294 194 302 210 L 308 440 L 208 440 Z', '#FAFAFA', a);
    // Eye whites - grandfather
    fe(g, 'ellipse', { cx: 254, cy: 116, rx: 6, ry: 4, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 268, cy: 116, rx: 6, ry: 4, fill: '#FAFAFA' }, false);

    // --- Baby skin ---
    fl(g, 'M 106 232 C 92 232 82 242 80 254 C 78 266 84 278 94 284 C 98 286 102 288 106 288 C 110 288 114 286 118 284 C 128 278 134 266 132 254 C 130 242 120 232 106 232 Z', '#F5D0A9', a);
    // Baby ears
    fe(g, 'ellipse', { cx: 77, cy: 260, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 135, cy: 260, rx: 4, ry: 6, fill: '#F5D0A9' }, false);
    // Baby white outfit fill
    fl(g, 'M 94 292 C 98 288 102 286 106 286 C 110 286 114 288 118 292 L 122 354 L 90 354 Z', '#FAFAFA', false);
    // Eye whites - baby
    fe(g, 'ellipse', { cx: 104, cy: 253, rx: 5, ry: 3.5, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 110, cy: 253, rx: 5, ry: 3.5, fill: '#FAFAFA' }, false);
  },

  // =============================================
  // Layer 8: Color fills - scene, hair, accessories
  // =============================================
  (g, a) => {
    // --- Awning color pattern ---
    // Red/pink stripes
    for (let x = 0; x < 380; x += 48) {
      const e = ce('path', { d: `M ${x} 18 L ${x + 24} 18 L ${x + 24} 78 L ${x} 78 Z`, fill: '#E91E63', stroke: 'none', opacity: '0.25' });
      g.appendChild(e);
    }
    // White/light pink alternating stripes
    for (let x = 24; x < 380; x += 48) {
      const e = ce('path', { d: `M ${x} 18 L ${x + 24} 18 L ${x + 24} 78 L ${x} 78 Z`, fill: '#F8BBD0', stroke: 'none', opacity: '0.15' });
      g.appendChild(e);
    }
    // Scallop edge color
    for (let x = 0; x < 360; x += 45) {
      const e2 = ce('path', { d: `M ${x} 76 C ${x + 12} 88 ${x + 33} 88 ${x + 45} 76 L ${x + 45} 80 C ${x + 33} 92 ${x + 12} 92 ${x} 80 Z`, fill: '#F48FB1', stroke: 'none', opacity: '0.2' });
      g.appendChild(e2);
    }

    // Background greenery fill
    fe(g, 'rect', { x: 0, y: 88, width: 70, height: 40, fill: '#8BC34A', opacity: '0.1' }, false);
    fe(g, 'rect', { x: 310, y: 88, width: 50, height: 40, fill: '#8BC34A', opacity: '0.1' }, false);

    // Warm sunlight overlay (golden summer light)
    fe(g, 'rect', { x: 0, y: 80, width: 360, height: 370, fill: '#FFF8E1', opacity: '0.06' }, false);

    // --- Grandmother hair fill (gray-brown) ---
    fl(g, 'M 74 126 C 70 110 76 96 88 90 C 100 84 114 82 126 86 C 138 90 148 100 150 114 C 152 122 150 130 148 136 L 146 130 C 144 112 130 100 110 100 C 90 100 76 112 74 130 Z', '#8D7B6B', false);
    // Hair side fills
    fl(g, 'M 68 108 C 64 118 62 132 64 144 C 66 148 70 146 72 140 L 74 130 C 74 120 72 112 68 108 Z', '#8D7B6B', false);
    fl(g, 'M 148 110 C 152 120 154 132 154 144 C 154 148 150 146 148 140 L 146 130 C 146 120 148 114 148 110 Z', '#8D7B6B', false);

    // --- Grandfather hair fill (gray/salt-and-pepper) ---
    fl(g, 'M 226 114 C 224 100 230 88 242 82 C 254 76 268 74 278 78 C 288 82 294 92 294 104 C 294 112 292 118 290 122 L 290 118 C 288 102 276 90 258 90 C 240 90 228 102 226 118 Z', '#9E9E9E', false);

    // --- Grandfather thick eyebrow fills ---
    fl(g, 'M 236 106 C 242 100 252 98 260 102 L 260 110 C 252 106 242 108 236 112 Z', '#37474F', false);
    fl(g, 'M 256 102 C 264 98 274 100 280 106 L 280 112 C 274 108 264 106 256 108 Z', '#37474F', false);

    // --- Gold pendant fill ---
    fl(g, 'M 110 222 C 106 224 104 228 106 232 C 108 236 112 236 114 232 C 116 228 114 224 110 222 Z', '#FFD700', false);
    // Gold chain highlight
    pp(g, ['M 100 202 C 104 206 108 210 110 212'], false, lt);

    // --- Baby object (yellow-green) ---
    fe(g, 'ellipse', { cx: 128, cy: 314, rx: 5, ry: 3.5, fill: '#C0CA33' }, false);

    // --- Baby hair fill (very light) ---
    fl(g, 'M 84 250 C 82 240 88 232 98 228 C 108 224 118 226 126 232 C 132 238 134 246 132 254 L 130 252 C 128 240 120 234 110 234 C 98 234 88 240 86 252 Z', '#D7CCC8', false);

    // Lamp glow
    fe(g, 'circle', { cx: 180, cy: 50, r: 8, fill: '#FFF9C4', opacity: '0.15' }, false);
    fe(g, 'circle', { cx: 180, cy: 50, r: 3, fill: '#FFECB3', opacity: '0.4' }, false);
  },

  // =============================================
  // Layer 9: Polish - shines, blush, detail
  // =============================================
  (g, a) => {
    // --- Eye shines (white dots) ---
    // Grandmother
    fe(g, 'circle', { cx: 102, cy: 126, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 114, cy: 126, r: 1.5, fill: 'white' }, a);
    // Grandfather
    fe(g, 'circle', { cx: 252, cy: 114, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 266, cy: 114, r: 1.5, fill: 'white' }, a);
    // Baby
    fe(g, 'circle', { cx: 102, cy: 251, r: 1.2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 108, cy: 251, r: 1.2, fill: 'white' }, a);

    // --- Cheek blush ---
    // Grandmother cheeks
    fe(g, 'ellipse', { cx: 90, cy: 158, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 130, cy: 158, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    // Baby cheeks (rosier)
    fe(g, 'ellipse', { cx: 94, cy: 268, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.45' }, a);
    fe(g, 'ellipse', { cx: 118, cy: 268, rx: 7, ry: 3.5, fill: '#FFAB91', opacity: '0.45' }, a);
    // Grandfather slight warmth on cheekbones
    fe(g, 'ellipse', { cx: 242, cy: 142, rx: 6, ry: 3, fill: '#D7A86E', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 274, cy: 142, rx: 6, ry: 3, fill: '#D7A86E', opacity: '0.2' }, false);

    // --- Lip colors ---
    // Grandmother warm smile lip color
    fl(g, 'M 94 166 C 100 172 106 176 110 176 C 114 176 120 172 126 166 C 120 170 114 174 110 174 C 106 174 100 170 94 166 Z', '#D48C8C', false);
    // Grandfather subtle lip line
    fl(g, 'M 248 154 C 252 158 258 160 262 158 C 266 156 270 154 L 268 156 C 264 158 258 160 254 160 C 250 158 248 156 Z', '#C49A6C', false);
    // Baby lips
    fl(g, 'M 102 273 C 105 276 109 276 112 273 C 110 278 106 278 102 273 Z', '#E8A0A0', false);

    // --- Nail polish fills (bordeaux) ---
    [[86, 294], [82, 298], [78, 302], [76, 306], [70, 300]].forEach(([cx, cy]) =>
      fe(g, 'circle', { cx, cy, r: 1.2, fill: '#800020' }, false)
    );
    [[134, 294], [138, 298], [142, 302], [144, 306], [150, 300]].forEach(([cx, cy]) =>
      fe(g, 'circle', { cx, cy, r: 1.2, fill: '#800020' }, false)
    );

    // --- Glasses frame tint overlay ---
    fe(g, 'rect', { x: 83, y: 121, width: 30, height: 20, rx: 2, fill: '#795548', opacity: '0.06' }, false);
    fe(g, 'rect', { x: 105, y: 121, width: 30, height: 20, rx: 2, fill: '#795548', opacity: '0.06' }, false);

    // --- Expression wrinkles (fine detail) ---
    // Grandmother smile crinkles at eyes
    pp(g, [
      'M 80 126 C 78 124 76 125 74 127',
      'M 80 130 C 78 131 76 133 74 135',
      'M 138 126 C 140 124 142 125 144 127',
      'M 138 130 C 140 131 142 133 144 135'
    ], a, lt);
    // Grandfather forehead depth
    pp(g, [
      'M 244 98 C 252 96 264 96 272 98'
    ], a, lt);

    // --- Warm sunlight spots ---
    fe(g, 'ellipse', { cx: 110, cy: 120, rx: 20, ry: 10, fill: '#FFF9C4', opacity: '0.06' }, false);
    fe(g, 'ellipse', { cx: 258, cy: 110, rx: 20, ry: 10, fill: '#FFF9C4', opacity: '0.06' }, false);
    fe(g, 'ellipse', { cx: 180, cy: 60, rx: 40, ry: 12, fill: '#FFF9C4', opacity: '0.08' }, false);

    // --- Gold chain shimmer ---
    fe(g, 'circle', { cx: 110, cy: 228, r: 1, fill: '#FFF9C4', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 108, cy: 224, r: 0.8, fill: '#FFF9C4', opacity: '0.5' }, false);

    // --- Baby object highlight ---
    fe(g, 'ellipse', { cx: 127, cy: 313, rx: 2, ry: 1, fill: '#FFFFFF', opacity: '0.4' }, false);

    // --- Polo collar shadow ---
    fl(g, 'M 232 194 C 244 198 256 200 258 200 C 260 200 272 198 284 194 L 282 198 C 270 202 260 204 258 204 C 256 204 246 202 234 198 Z', '#E0E0E0', false);

    // --- Tank top neckline shadow ---
    fl(g, 'M 84 210 C 90 214 100 218 110 218 C 120 218 130 214 136 210 L 134 214 C 126 218 118 222 110 222 C 102 222 94 218 86 214 Z', '#00796B', false);
  }
];
