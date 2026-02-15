const casamentoLayers = [
  // =================================================================
  // Layer 0: Composition guides — church floor, bench, zones, ceiling
  // =================================================================
  (g, a) => {
    // Church floor line
    pp(g, ['M 0 340 L 360 340'], a, lt);
    // Bench / seat line
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Groom zone (left)
    pp(g, ['M 60 30 L 60 340', 'M 200 30 L 200 340'], a, lt);
    // Bride zone (right)
    pp(g, ['M 160 30 L 160 340', 'M 310 30 L 310 340'], a, lt);
    // Groom head center cross
    pp(g, ['M 130 60 L 130 180', 'M 80 110 L 180 110'], a, lt);
    // Bride head center cross
    pp(g, ['M 220 60 L 220 180', 'M 170 110 L 270 110'], a, lt);
    // Ceiling area top
    pp(g, ['M 0 0 L 360 0 L 360 50 L 0 50 Z'], a, lt);
    // Ceiling beam guides
    pp(g, ['M 0 25 L 360 25'], a, lt);
    // Wall lamp position (left)
    pp(g, ['M 25 100 L 25 140'], a, lt);
    fe(g, 'circle', { cx: 25, cy: 120, r: 6, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // Guest area background
    pp(g, ['M 10 170 L 350 170', 'M 10 220 L 350 220'], a, lt);
    // Stone arch position (right)
    pp(g, ['M 320 80 C 340 80 350 100 350 130 C 350 160 340 180 320 180'], a, lt);
  },

  // =================================================================
  // Layer 1: Main outlines — groom and bride bodies
  // =================================================================
  (g, a) => {
    // === GROOM (left, seated) ===
    // Head — angular male face, strong jaw
    pp(g, [
      'M 130 62 C 112 62 100 78 100 98 C 100 116 106 130 114 138 C 120 144 125 148 130 150 C 135 148 140 144 146 138 C 154 130 160 116 160 98 C 160 78 148 62 130 62 Z'
    ], a);
    // Neck
    pp(g, ['M 122 150 L 120 164', 'M 138 150 L 140 164'], a);
    // Torso — seated, suit jacket
    pp(g, [
      'M 80 196 C 90 178 110 166 130 164 C 150 166 170 178 180 196 L 182 300 L 78 300 Z'
    ], a);
    // Left arm resting
    pp(g, ['M 84 200 C 76 216 72 236 70 256 C 68 272 70 286 74 300'], a);
    // Right arm reaching toward bride
    pp(g, ['M 176 200 C 182 216 186 236 188 256 C 190 268 190 280 188 300'], a);

    // === BRIDE (right, seated) ===
    // Head — softer oval, feminine
    pp(g, [
      'M 220 66 C 204 66 192 80 192 98 C 192 116 200 130 208 138 C 214 144 218 148 220 150 C 222 148 226 144 232 138 C 240 130 248 116 248 98 C 248 80 236 66 220 66 Z'
    ], a);
    // Neck — slim, graceful
    pp(g, ['M 214 150 L 212 162', 'M 226 150 L 228 162'], a);
    // Shoulders (strapless — bare skin to bodice top)
    pp(g, [
      'M 186 178 C 196 168 208 162 220 162 C 232 162 244 168 254 178'
    ], a);
    // Bodice — fitted, strapless, sweetheart neckline implied
    pp(g, [
      'M 186 178 L 184 220 C 184 232 192 240 200 248 C 208 254 214 256 220 258 C 226 256 232 254 240 248 C 248 240 256 232 256 220 L 254 178'
    ], a);
    // Voluminous tulle ball-gown skirt — wide spread
    pp(g, [
      'M 200 248 C 188 260 170 280 156 300 C 144 318 134 340 130 370 C 128 390 130 410 136 430 L 304 430 C 310 410 312 390 310 370 C 306 340 296 318 284 300 C 270 280 252 260 240 248'
    ], a);
    // Skirt fold lines — gentle curves across tulle
    pp(g, [
      'M 168 290 C 180 278 200 268 220 268 C 240 268 260 278 272 290',
      'M 152 320 C 170 306 196 294 220 294 C 244 294 270 306 288 320',
      'M 142 356 C 164 338 192 326 220 326 C 248 326 276 338 298 356'
    ], a, lt);
  },

  // =================================================================
  // Layer 2: Face details — eyes, brows, noses, mouths
  // =================================================================
  (g, a) => {
    // === GROOM FACE ===
    // Left eye — almond, composed gaze
    pp(g, [
      'M 116 92 C 118 88 122 86 126 87 C 130 88 132 92 130 95 C 128 98 122 99 118 97 C 116 96 115 94 116 92 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 134 91 C 136 87 140 85 144 86 C 148 87 150 91 148 94 C 146 97 140 98 136 96 C 134 95 133 93 134 91 Z'
    ], a);
    // Groom left pupil
    fe(g, 'circle', { cx: 124, cy: 93, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Groom right pupil
    fe(g, 'circle', { cx: 142, cy: 92, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Left eyebrow — strong, slightly angular
    pp(g, ['M 114 84 C 118 78 124 76 130 78 C 134 80 136 82 138 84'], a);
    // Right eyebrow
    pp(g, ['M 132 83 C 136 77 142 75 148 77 C 152 79 154 81 156 83'], a);
    // Nose — strong straight bridge
    pp(g, ['M 132 86 C 131 94 130 102 129 108'], a);
    pp(g, ['M 126 110 C 128 114 132 116 136 114 C 138 112 139 108 140 106'], a);
    // Mouth — composed, lips together
    pp(g, ['M 120 126 C 124 122 128 120 132 120 C 136 120 140 122 144 126'], a);
    // Lower lip
    pp(g, ['M 122 128 C 126 132 130 134 132 134 C 134 134 138 132 142 128'], a);
    // Left ear
    pp(g, ['M 100 92 C 96 88 93 92 93 98 C 93 104 96 108 100 106'], a);
    // Right ear
    pp(g, ['M 160 92 C 164 88 167 92 167 98 C 167 104 164 108 160 106'], a);
    // Jaw line definition
    pp(g, ['M 104 122 C 110 136 118 144 130 150', 'M 156 122 C 150 136 142 144 130 150'], a, lt);

    // === BRIDE FACE ===
    // Left eye — almond, softer, emotional
    pp(g, [
      'M 208 92 C 210 88 214 86 218 87 C 222 88 224 92 222 95 C 220 98 214 99 210 97 C 208 96 207 94 208 92 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 224 91 C 226 87 230 85 234 86 C 238 87 240 91 238 94 C 236 97 230 98 226 96 C 224 95 223 93 224 91 Z'
    ], a);
    // Bride left pupil
    fe(g, 'circle', { cx: 216, cy: 93, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Bride right pupil
    fe(g, 'circle', { cx: 232, cy: 92, r: 2.8, fill: a ? HL : '#2D2D2D' }, a);
    // Left eyelashes (upper)
    pp(g, [
      'M 208 91 C 206 88 205 85 206 83',
      'M 212 89 C 211 86 211 83 212 81',
      'M 216 88 C 216 85 217 82 218 80'
    ], a);
    // Right eyelashes (upper)
    pp(g, [
      'M 240 90 C 242 87 243 84 242 82',
      'M 236 88 C 237 85 237 82 236 80',
      'M 232 87 C 232 84 231 81 230 79'
    ], a);
    // Left eyebrow — arched, elegant
    pp(g, ['M 206 82 C 210 76 216 74 222 76 C 226 78 228 80 230 82'], a);
    // Right eyebrow
    pp(g, ['M 222 81 C 226 75 232 73 238 75 C 242 77 244 79 246 81'], a);
    // Nose — delicate
    pp(g, ['M 222 86 C 221 94 220 102 219 108'], a);
    pp(g, ['M 216 110 C 218 113 222 115 226 113 C 228 111 229 108 230 106'], a);
    // Mouth — soft emotional smile
    pp(g, ['M 210 124 C 214 120 218 118 222 118 C 226 118 230 120 234 124'], a);
    // Lower lip — fuller, gentle
    pp(g, ['M 212 126 C 216 130 220 133 222 133 C 224 133 228 130 232 126'], a);
    // Upper lip cupid's bow
    pp(g, ['M 210 124 C 214 122 218 121 220 123 C 221 124 223 124 224 123 C 226 121 230 122 234 124'], a);
  },

  // =================================================================
  // Layer 3: Hair, headwear, groom's tie/collar
  // =================================================================
  (g, a) => {
    // === GROOM HAIR — slicked back ===
    // Hairline contour
    pp(g, [
      'M 104 96 C 102 80 108 66 120 58 C 128 54 136 54 142 58 C 152 66 158 80 158 94'
    ], a);
    // Slicked-back texture lines
    pp(g, [
      'M 118 60 C 122 56 128 54 134 56',
      'M 112 68 C 118 62 126 58 136 60 C 144 62 150 68 154 76',
      'M 108 78 C 114 70 122 64 132 64 C 142 66 150 72 156 82',
      'M 106 88 C 110 80 118 72 128 70 C 138 70 148 76 154 86'
    ], a, lt);
    // Side hair above ears
    pp(g, [
      'M 100 86 C 98 78 102 70 108 64',
      'M 160 86 C 162 78 158 70 152 64'
    ], a);

    // === GROOM TIE AND COLLAR ===
    // Shirt collar left
    pp(g, [
      'M 118 166 C 114 162 108 160 106 164 C 104 168 108 172 114 172'
    ], a);
    // Shirt collar right
    pp(g, [
      'M 142 166 C 146 162 152 160 154 164 C 156 168 152 172 146 172'
    ], a);
    // Tie knot (triangular)
    pp(g, [
      'M 126 168 L 130 162 L 134 168 Z'
    ], a);
    // Tie body hanging down
    pp(g, [
      'M 126 168 L 124 210 L 130 216 L 136 210 L 134 168'
    ], a);
    // Tie texture lines
    pp(g, ['M 128 180 L 132 180', 'M 127 195 L 133 195'], a, lt);

    // === BRIDE HAIR — updo/bun with waves ===
    // Main hair mass — top and sides
    pp(g, [
      'M 196 94 C 194 76 200 62 212 54 C 220 50 228 50 234 54 C 242 60 246 72 246 88'
    ], a);
    // Bun at back — round shape
    pp(g, [
      'M 240 72 C 252 66 262 70 266 80 C 270 90 268 102 262 110 C 258 116 252 118 246 114 C 240 110 238 100 238 90 C 238 82 240 76 240 72 Z'
    ], a);
    // Hair wave texture on top
    pp(g, [
      'M 204 60 C 210 54 218 52 226 54',
      'M 200 72 C 208 64 218 58 228 60 C 236 62 242 68 244 76',
      'M 198 84 C 204 76 214 68 224 68 C 234 70 242 78 244 86'
    ], a, lt);
    // Loose curly waves framing face
    pp(g, [
      'M 196 88 C 194 96 192 106 194 118 C 196 126 198 132 200 136',
      'M 248 88 C 250 96 252 104 250 114 C 248 122 246 128 244 134'
    ], a);
    // Hair flower/accessory (~5 petals) at side of bun
    pp(g, [
      'M 256 78 C 258 74 262 74 264 78',
      'M 264 78 C 268 78 270 82 268 84',
      'M 268 84 C 268 88 264 90 260 88',
      'M 260 88 C 256 88 254 84 256 82',
      'M 256 82 C 254 78 256 76 256 78'
    ], a);
    // Flower center
    fe(g, 'circle', { cx: 261, cy: 82, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
  },

  // =================================================================
  // Layer 4: Clothing details — suit, bodice, skirt gathers
  // =================================================================
  (g, a) => {
    // === GROOM SUIT ===
    // Jacket lapels — V-shape from collar down
    pp(g, [
      'M 114 172 C 118 180 120 190 122 200 L 126 230',
      'M 146 172 C 142 180 140 190 138 200 L 134 230'
    ], a);
    // Lapel outer edges
    pp(g, [
      'M 106 170 C 108 174 112 178 118 184 L 122 200',
      'M 154 170 C 152 174 148 178 142 184 L 138 200'
    ], a);
    // Shirt front visible between lapels
    pp(g, [
      'M 126 172 L 126 230',
      'M 134 172 L 134 230'
    ], a, lt);
    // Suit buttons (2)
    fe(g, 'circle', { cx: 130, cy: 212, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 130, cy: 228, r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Pocket square (left breast)
    pp(g, [
      'M 110 194 C 112 190 116 188 118 190 C 120 192 118 196 116 198 L 110 198 Z'
    ], a);
    // Jacket shoulder seams
    pp(g, [
      'M 90 182 C 100 174 112 168 120 166',
      'M 170 182 C 160 174 148 168 140 166'
    ], a, lt);
    // Jacket side seam lines
    pp(g, ['M 84 200 L 80 300', 'M 176 200 L 180 300'], a, lt);

    // === BRIDE BODICE ===
    // Strapless top edge — straight across with subtle sweetheart dip
    pp(g, [
      'M 188 178 C 194 174 204 170 212 172 C 216 174 218 178 220 180 C 222 178 224 174 228 172 C 236 170 246 174 252 178'
    ], a);
    // Bodice boning lines (4 vertical seams)
    pp(g, [
      'M 198 178 L 196 242',
      'M 210 176 L 208 250',
      'M 230 176 L 232 250',
      'M 242 178 L 244 242'
    ], a, lt);
    // Waist sash / ribbon
    pp(g, [
      'M 192 240 C 200 244 210 248 220 250 C 230 248 240 244 248 240'
    ], a);
    // Sash bow hint (center front)
    pp(g, [
      'M 216 250 C 218 254 222 256 224 254 C 226 252 224 248 220 250',
      'M 220 250 C 218 252 214 254 212 252 C 210 250 214 248 220 250'
    ], a);
    // Skirt gather / tulle pleat detail at waist junction
    pp(g, [
      'M 200 252 C 204 256 208 258 212 256',
      'M 228 256 C 232 258 236 256 240 252',
      'M 212 256 C 216 260 220 262 224 260 C 228 258 228 256 228 256'
    ], a, lt);
  },

  // =================================================================
  // Layer 5: Hands, bench, elderly lady, stone floor outline
  // =================================================================
  (g, a) => {
    // === GROOM HANDS ===
    // Left hand resting on bench/thigh (fingers visible)
    pp(g, ['M 74 290 C 72 286 68 282 66 278 C 64 274 66 270 70 270 C 74 270 76 274 76 278'], a);
    pp(g, ['M 72 288 C 68 284 64 278 62 274 C 60 268 62 264 66 264 C 70 264 72 268 72 274'], a);
    pp(g, ['M 70 286 C 66 282 62 276 60 272 C 58 266 60 262 64 262 C 68 262 70 268 70 272'], a);
    // Thumb
    pp(g, ['M 76 282 C 80 278 82 272 80 268 C 78 264 74 264 72 268'], a);

    // Right hand over bride's hand (holding)
    pp(g, ['M 188 278 C 192 274 196 270 200 268 C 204 266 208 268 208 272 C 208 276 204 280 200 282'], a);
    pp(g, ['M 190 282 C 194 278 198 274 202 272 C 206 270 210 272 210 276 C 210 280 206 284 202 286'], a);
    // Groom thumb over bride's hand
    pp(g, ['M 186 276 C 188 272 192 266 194 262 C 196 258 194 254 190 256 C 186 258 186 264 186 270'], a);

    // === BRIDE HANDS ===
    // Bride's hands in lap (partially under groom's right hand)
    pp(g, ['M 200 282 C 204 286 208 290 212 292 C 216 294 220 292 220 288 C 220 284 216 280 212 278'], a);
    pp(g, ['M 210 290 C 214 292 218 296 222 298 C 226 300 230 298 230 294 C 230 290 226 286 222 284'], a);
    // Bride's left hand fingers
    pp(g, ['M 222 284 C 226 280 230 278 234 280 C 238 282 238 286 234 290'], a);
    // Bride wrist
    pp(g, ['M 202 280 C 198 276 196 270 196 264'], a, lt);

    // === MODERN DARK BENCH ===
    // Bench seat surface
    pp(g, [
      'M 50 296 L 290 296 L 290 310 L 50 310 Z'
    ], a);
    // Bench front face
    pp(g, [
      'M 50 310 L 290 310 L 290 320 L 50 320 Z'
    ], a);
    // Left leg
    pp(g, ['M 60 320 L 58 345', 'M 68 320 L 66 345'], a);
    // Right leg
    pp(g, ['M 278 320 L 276 345', 'M 286 320 L 284 345'], a);
    // Center support
    pp(g, ['M 168 320 L 166 345', 'M 176 320 L 174 345'], a, lt);

    // === ELDERLY LADY (left side, simplified silhouette) ===
    // Head
    pp(g, [
      'M 40 230 C 32 230 26 238 26 248 C 26 258 32 266 40 268 C 48 266 54 258 54 248 C 54 238 48 230 40 230 Z'
    ], a);
    // Body — seated, hunched slightly
    pp(g, [
      'M 30 268 C 24 274 20 286 18 300 L 18 340 L 62 340 L 62 300 C 60 286 56 274 50 268'
    ], a);
    // Arms
    pp(g, ['M 24 280 C 20 290 18 300 18 310', 'M 56 280 C 60 290 62 300 62 310'], a, lt);

    // === STONE FLOOR OUTLINE ===
    pp(g, ['M 0 340 L 360 340 L 360 450 L 0 450 Z'], a, lt);
    // Floor slab dividers
    pp(g, [
      'M 60 340 L 60 450', 'M 130 340 L 130 450', 'M 200 340 L 200 450',
      'M 270 340 L 270 450', 'M 340 340 L 340 450'
    ], a, lt);
    pp(g, ['M 0 390 L 360 390'], a, lt);
  },

  // =================================================================
  // Layer 6: Background — ceiling, walls, arch, lamp, guests, standing person
  // =================================================================
  (g, a) => {
    // === CEILING with wooden beams ===
    // Ceiling top border
    pp(g, ['M 0 0 L 360 0 L 360 50 L 0 50 Z'], a);
    // Beam divisions (vertical lines across ceiling)
    for (let x = 40; x < 360; x += 50) {
      pp(g, [`M ${x} 0 L ${x} 50`], a, lt);
    }
    // Beam horizontal lines (cross supports)
    pp(g, ['M 0 16 L 360 16', 'M 0 34 L 360 34'], a, lt);

    // === LEFT STONE WALL ===
    pp(g, ['M 0 50 L 50 50 L 50 340 L 0 340 Z'], a);
    // Irregular stone blocks — left wall
    const leftStones = [
      'M 2 55 L 24 55 L 24 78 L 2 78 Z',
      'M 26 55 L 48 55 L 48 72 L 26 72 Z',
      'M 2 80 L 18 80 L 18 106 L 2 106 Z',
      'M 20 74 L 48 74 L 48 100 L 20 100 Z',
      'M 2 108 L 30 108 L 30 132 L 2 132 Z',
      'M 32 102 L 48 102 L 48 128 L 32 128 Z',
      'M 2 134 L 22 134 L 22 158 L 2 158 Z',
      'M 24 130 L 48 130 L 48 162 L 24 162 Z',
      'M 2 160 L 32 160 L 32 186 L 2 186 Z',
      'M 34 164 L 48 164 L 48 190 L 34 190 Z',
      'M 2 188 L 20 188 L 20 214 L 2 214 Z',
      'M 22 192 L 48 192 L 48 218 L 22 218 Z',
      'M 2 216 L 28 216 L 28 242 L 2 242 Z',
      'M 30 220 L 48 220 L 48 246 L 30 246 Z',
      'M 2 244 L 24 244 L 24 268 L 2 268 Z',
      'M 26 248 L 48 248 L 48 274 L 26 274 Z',
      'M 2 270 L 18 270 L 18 296 L 2 296 Z',
      'M 20 276 L 48 276 L 48 300 L 20 300 Z',
      'M 2 298 L 30 298 L 30 322 L 2 322 Z',
      'M 32 302 L 48 302 L 48 330 L 32 330 Z',
      'M 2 324 L 48 324 L 48 340 L 2 340 Z'
    ];
    pp(g, leftStones, a, lt);

    // === RIGHT STONE WALL ===
    pp(g, ['M 310 50 L 360 50 L 360 340 L 310 340 Z'], a);
    // Irregular stone blocks — right wall
    const rightStones = [
      'M 312 55 L 336 55 L 336 76 L 312 76 Z',
      'M 338 55 L 358 55 L 358 72 L 338 72 Z',
      'M 312 78 L 328 78 L 328 104 L 312 104 Z',
      'M 330 74 L 358 74 L 358 98 L 330 98 Z',
      'M 312 106 L 342 106 L 342 130 L 312 130 Z',
      'M 344 100 L 358 100 L 358 126 L 344 126 Z',
      'M 312 132 L 326 132 L 326 158 L 312 158 Z',
      'M 328 128 L 358 128 L 358 156 L 328 156 Z',
      'M 312 160 L 340 160 L 340 184 L 312 184 Z',
      'M 342 158 L 358 158 L 358 188 L 342 188 Z',
      'M 312 186 L 324 186 L 324 210 L 312 210 Z',
      'M 326 190 L 358 190 L 358 214 L 326 214 Z',
      'M 312 212 L 338 212 L 338 238 L 312 238 Z',
      'M 340 216 L 358 216 L 358 242 L 340 242 Z',
      'M 312 240 L 330 240 L 330 264 L 312 264 Z',
      'M 332 244 L 358 244 L 358 270 L 332 270 Z',
      'M 312 266 L 346 266 L 346 292 L 312 292 Z',
      'M 348 272 L 358 272 L 358 296 L 348 296 Z',
      'M 312 294 L 334 294 L 334 320 L 312 320 Z',
      'M 336 298 L 358 298 L 358 324 L 336 324 Z',
      'M 312 322 L 358 322 L 358 340 L 312 340 Z'
    ];
    pp(g, rightStones, a, lt);

    // === STONE ARCH (right wall) ===
    pp(g, [
      'M 318 180 C 318 140 328 110 338 96 C 346 86 352 84 356 86 C 358 88 360 94 360 104',
      'M 318 180 L 318 260 L 360 260 L 360 180'
    ], a);
    // Arch keystone detail
    pp(g, ['M 336 92 L 340 84 L 344 92'], a, lt);

    // === ROUND WALL LAMP (left wall) ===
    // Lamp circle
    fe(g, 'circle', { cx: 25, cy: 120, r: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Inner lamp circle
    fe(g, 'circle', { cx: 25, cy: 120, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Lamp stem/mount
    pp(g, ['M 25 112 L 25 105', 'M 22 105 L 28 105'], a);

    // === GUEST SILHOUETTES ===
    // Front bench (wooden)
    pp(g, ['M 54 226 L 305 226 L 305 238 L 54 238 Z'], a);

    // Front row guests (~5 figures, simplified head+shoulders)
    const frontGuests = [
      { cx: 75, cy: 208, hw: 12 },
      { cx: 110, cy: 210, hw: 11 },
      { cx: 155, cy: 206, hw: 12 },
      { cx: 210, cy: 208, hw: 11 },
      { cx: 260, cy: 210, hw: 12 }
    ];
    frontGuests.forEach(({ cx, cy, hw }) => {
      // Head
      fe(g, 'ellipse', { cx, cy: cy - 16, rx: hw - 3, ry: hw - 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      // Shoulders
      pp(g, [`M ${cx - hw} ${cy - 4} C ${cx - hw + 4} ${cy - 10} ${cx - 4} ${cy - 12} ${cx} ${cy - 12} C ${cx + 4} ${cy - 12} ${cx + hw - 4} ${cy - 10} ${cx + hw} ${cy - 4} L ${cx + hw} ${cy + 14} L ${cx - hw} ${cy + 14} Z`], a, lt);
    });

    // Back bench (higher up)
    pp(g, ['M 54 176 L 305 176 L 305 188 L 54 188 Z'], a);

    // Back row guests (~7 figures, smaller)
    const backGuests = [
      { cx: 70, cy: 164 },
      { cx: 100, cy: 162 },
      { cx: 135, cy: 166 },
      { cx: 170, cy: 163 },
      { cx: 205, cy: 165 },
      { cx: 240, cy: 162 },
      { cx: 275, cy: 164 }
    ];
    backGuests.forEach(({ cx, cy }) => {
      // Head
      fe(g, 'ellipse', { cx, cy: cy - 10, rx: 7, ry: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      // Shoulders
      pp(g, [`M ${cx - 9} ${cy} C ${cx - 5} ${cy - 6} ${cx - 2} ${cy - 8} ${cx} ${cy - 8} C ${cx + 2} ${cy - 8} ${cx + 5} ${cy - 6} ${cx + 9} ${cy} L ${cx + 9} ${cy + 12} L ${cx - 9} ${cy + 12} Z`], a, lt);
    });

    // === STANDING PERSON near arch (right) ===
    // Head
    fe(g, 'ellipse', { cx: 330, cy: 200, rx: 8, ry: 10, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Body
    pp(g, [
      'M 320 212 C 324 210 328 208 330 208 C 332 208 336 210 340 212 L 342 260 L 318 260 Z'
    ], a);
    // Legs
    pp(g, ['M 324 260 L 322 290 L 326 290', 'M 336 260 L 338 290 L 334 290'], a, lt);

    // === FLOOR STONE LINES ===
    pp(g, [
      'M 0 370 L 360 370',
      'M 0 400 L 360 400',
      'M 0 430 L 360 430',
      'M 30 340 L 30 450', 'M 90 340 L 90 450',
      'M 160 340 L 160 450', 'M 230 340 L 230 450',
      'M 300 340 L 300 450'
    ], a, lt);
  },

  // =================================================================
  // Layer 7: Color fills — FIGURES GRAYSCALE
  // =================================================================
  (g, a) => {
    // === GROOM SKIN ===
    // Face
    fl(g, 'M 130 64 C 114 64 102 80 102 98 C 102 116 108 130 116 138 C 122 144 127 148 130 150 C 133 148 138 144 144 138 C 152 130 158 116 158 98 C 158 80 146 64 130 64 Z', '#BDBDBD', a);
    // Ears
    fe(g, 'ellipse', { cx: 97, cy: 98, rx: 5, ry: 8, fill: '#B0B0B0' }, false);
    fe(g, 'ellipse', { cx: 163, cy: 98, rx: 5, ry: 8, fill: '#B0B0B0' }, false);
    // Neck
    fe(g, 'rect', { x: 121, y: 148, width: 18, height: 18, rx: 4, fill: '#B0B0B0' }, false);

    // === GROOM HAIR (slicked back, dark gray) ===
    fl(g, 'M 106 94 C 104 80 110 66 122 58 C 128 54 136 54 142 58 C 150 64 156 78 156 90 L 158 94 C 160 82 158 72 152 62 C 146 52 136 50 128 52 C 116 54 106 66 102 80 C 100 88 100 92 102 96 Z', '#616161', a);
    // Sideburns
    fl(g, 'M 100 86 C 98 78 100 72 106 66 L 104 68 C 100 74 98 82 100 90 Z', '#616161', false);
    fl(g, 'M 160 86 C 162 78 160 72 154 66 L 156 68 C 160 74 162 82 160 90 Z', '#616161', false);

    // === GROOM SUIT (dark charcoal) ===
    fl(g, 'M 82 198 C 92 180 112 168 130 166 C 148 168 168 180 178 198 L 180 300 L 80 300 Z', '#37474F', a);
    // Left arm suit
    fl(g, 'M 84 200 C 76 216 72 236 70 256 C 68 272 70 286 74 300 L 80 300 L 82 200 Z', '#37474F', false);
    // Right arm suit
    fl(g, 'M 176 200 C 182 216 186 236 188 256 C 190 268 190 280 188 300 L 180 300 L 178 200 Z', '#37474F', false);

    // === GROOM WHITE SHIRT (visible between lapels) ===
    fl(g, 'M 126 168 L 124 230 L 136 230 L 134 168 Z', '#FAFAFA', false);
    // Shirt collar fill
    fl(g, 'M 118 166 C 114 162 108 160 106 164 C 104 168 108 172 114 172 Z', '#FAFAFA', false);
    fl(g, 'M 142 166 C 146 162 152 160 154 164 C 156 168 152 172 146 172 Z', '#FAFAFA', false);

    // === GROOM TIE (medium gray) ===
    fl(g, 'M 126 168 L 130 162 L 134 168 L 136 210 L 130 216 L 124 210 Z', '#757575', false);

    // === BRIDE SKIN ===
    // Face
    fl(g, 'M 220 68 C 206 68 194 82 194 98 C 194 116 202 130 210 138 C 216 144 218 148 220 150 C 222 148 224 144 230 138 C 238 130 246 116 246 98 C 246 82 234 68 220 68 Z', '#BDBDBD', a);
    // Neck
    fe(g, 'rect', { x: 213, y: 148, width: 14, height: 16, rx: 4, fill: '#B0B0B0' }, false);
    // Bare shoulders / upper chest (strapless)
    fl(g, 'M 188 178 C 196 170 208 164 220 164 C 232 164 244 170 252 178 L 252 182 L 188 182 Z', '#BDBDBD', false);

    // === BRIDE HAIR (dark gray updo) ===
    fl(g, 'M 198 92 C 196 76 202 62 214 54 C 222 50 230 50 236 56 C 244 64 248 78 248 92 L 246 90 C 248 80 246 68 240 60 C 236 54 228 52 220 54 C 210 58 202 70 200 86 Z', '#616161', a);
    // Bun fill
    fl(g, 'M 242 74 C 252 68 262 72 266 82 C 270 92 268 104 262 112 C 258 118 252 120 246 116 C 240 112 238 102 238 92 C 238 84 240 78 242 74 Z', '#616161', false);
    // Loose waves fill
    fl(g, 'M 196 88 C 194 96 192 108 194 120 C 196 128 198 134 200 138 L 198 140 C 194 134 192 126 190 118 C 188 106 190 94 194 86 Z', '#757575', false);
    fl(g, 'M 248 88 C 250 96 252 106 250 116 C 248 124 246 130 244 136 L 246 138 C 250 130 252 122 254 114 C 256 104 254 94 250 86 Z', '#757575', false);

    // === BRIDE BODICE (white) ===
    fl(g, 'M 188 182 L 186 222 C 186 234 194 242 202 250 C 210 256 216 258 220 260 C 224 258 230 256 238 250 C 246 242 254 234 254 222 L 252 182 Z', '#FFFFFF', a);

    // === BRIDE TULLE SKIRT (off-white) ===
    fl(g, 'M 202 250 C 190 262 172 282 158 302 C 146 320 136 342 132 372 C 130 392 132 412 138 432 L 302 432 C 308 412 310 392 308 372 C 304 342 294 320 282 302 C 268 282 250 262 238 250 Z', '#F5F5F5', a);

    // === ELDERLY LADY fills ===
    // Head
    fe(g, 'ellipse', { cx: 40, cy: 248, rx: 12, ry: 14, fill: '#BDBDBD' }, false);
    // Hair
    fl(g, 'M 30 238 C 28 234 30 228 36 226 C 42 224 48 226 50 230 C 52 234 52 238 50 242 L 48 240 C 50 236 50 232 48 230 C 46 228 40 226 36 228 C 32 230 30 234 32 238 Z', '#9E9E9E', false);
    // Body
    fl(g, 'M 32 268 C 26 274 22 286 20 300 L 20 338 L 60 338 L 60 300 C 58 286 54 274 48 268 Z', '#757575', false);
  },

  // =================================================================
  // Layer 8: Color fills — SCENE GRAYSCALE
  // =================================================================
  (g, a) => {
    // === CEILING (dark gray) ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 50, fill: '#424242' }, a);
    // Beam fills (slightly darker)
    for (let x = 0; x < 360; x += 50) {
      fe(g, 'rect', { x, y: 16, width: 50, height: 18, fill: '#37474F', opacity: '0.5' }, false);
    }

    // === STONE WALLS (medium gray base) ===
    // Left wall base
    fe(g, 'rect', { x: 0, y: 50, width: 50, height: 290, fill: '#9E9E9E' }, a);
    // Right wall base
    fe(g, 'rect', { x: 310, y: 50, width: 50, height: 290, fill: '#9E9E9E' }, false);

    // Left wall block variation fills (different grays for depth)
    const leftBlockFills = [
      { x: 2, y: 56, w: 22, h: 22, c: '#A0A0A0' },
      { x: 26, y: 56, w: 22, h: 16, c: '#8E8E8E' },
      { x: 2, y: 80, w: 16, h: 26, c: '#949494' },
      { x: 20, y: 74, w: 28, h: 26, c: '#A8A8A8' },
      { x: 2, y: 134, w: 20, h: 24, c: '#8A8A8A' },
      { x: 24, y: 130, w: 24, h: 32, c: '#A4A4A4' }
    ];
    leftBlockFills.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // Right wall block variation fills
    const rightBlockFills = [
      { x: 312, y: 56, w: 24, h: 20, c: '#A0A0A0' },
      { x: 338, y: 56, w: 20, h: 16, c: '#929292' },
      { x: 312, y: 106, w: 30, h: 24, c: '#A6A6A6' },
      { x: 344, y: 100, w: 14, h: 26, c: '#8C8C8C' },
      { x: 312, y: 186, w: 12, h: 24, c: '#969696' },
      { x: 326, y: 190, w: 32, h: 24, c: '#A2A2A2' }
    ];
    rightBlockFills.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === BACKGROUND GUEST AREA (light gray) ===
    fe(g, 'rect', { x: 50, y: 140, width: 260, height: 100, fill: '#E0E0E0' }, a);

    // === GUEST BENCH FILLS (wood tone — dark brown-gray) ===
    // Back bench
    fe(g, 'rect', { x: 55, y: 177, width: 249, height: 10, rx: 2, fill: '#5D4037' }, false);
    // Front bench
    fe(g, 'rect', { x: 55, y: 227, width: 249, height: 10, rx: 2, fill: '#5D4037' }, false);

    // === GUEST SILHOUETTE FILLS (semi-transparent gray) ===
    // Back row
    [70, 100, 135, 170, 205, 240, 275].forEach(cx => {
      fe(g, 'ellipse', { cx, cy: 154, rx: 7, ry: 8, fill: '#9E9E9E', opacity: '0.5' }, false);
      fe(g, 'rect', { x: cx - 9, y: 156, width: 18, height: 20, fill: '#9E9E9E', opacity: '0.4' }, false);
    });
    // Front row
    [75, 110, 155, 210, 260].forEach((cx, i) => {
      const hw = [12, 11, 12, 11, 12][i];
      fe(g, 'ellipse', { cx, cy: 192, rx: hw - 3, ry: hw - 2, fill: '#9E9E9E', opacity: '0.5' }, false);
      fe(g, 'rect', { x: cx - hw, y: 196, width: hw * 2, height: 28, fill: '#9E9E9E', opacity: '0.4' }, false);
    });

    // === DARK MODERN BENCH (main couple's bench) ===
    fe(g, 'rect', { x: 51, y: 297, width: 238, height: 12, rx: 2, fill: '#212121' }, a);
    fe(g, 'rect', { x: 51, y: 311, width: 238, height: 9, rx: 1, fill: '#1A1A1A' }, false);
    // Bench legs
    fe(g, 'rect', { x: 58, y: 320, width: 10, height: 25, fill: '#212121' }, false);
    fe(g, 'rect', { x: 276, y: 320, width: 10, height: 25, fill: '#212121' }, false);
    fe(g, 'rect', { x: 166, y: 320, width: 10, height: 25, fill: '#1A1A1A' }, false);

    // === STONE FLOOR ===
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: '#E0E0E0' }, a);
    // Alternating slab fills (checkerboard-like pattern)
    const floorSlabs = [
      { x: 0, y: 340, w: 60, h: 50, c: '#D5D5D5' },
      { x: 60, y: 340, w: 70, h: 50, c: '#EEEEEE' },
      { x: 130, y: 340, w: 70, h: 50, c: '#D5D5D5' },
      { x: 200, y: 340, w: 70, h: 50, c: '#EEEEEE' },
      { x: 270, y: 340, w: 70, h: 50, c: '#D5D5D5' },
      { x: 340, y: 340, w: 20, h: 50, c: '#EEEEEE' },
      { x: 0, y: 390, w: 60, h: 60, c: '#EEEEEE' },
      { x: 60, y: 390, w: 70, h: 60, c: '#D5D5D5' },
      { x: 130, y: 390, w: 70, h: 60, c: '#EEEEEE' },
      { x: 200, y: 390, w: 70, h: 60, c: '#D5D5D5' },
      { x: 270, y: 390, w: 70, h: 60, c: '#EEEEEE' },
      { x: 340, y: 390, w: 20, h: 60, c: '#D5D5D5' }
    ];
    floorSlabs.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === LAMP HALO GLOW ===
    fe(g, 'circle', { cx: 25, cy: 120, r: 18, fill: '#FFF9C4', opacity: '0.12' }, false);
    fe(g, 'circle', { cx: 25, cy: 120, r: 10, fill: '#FFF9C4', opacity: '0.18' }, false);

    // === ARCH OPENING (cool light gray) ===
    fl(g, 'M 320 180 L 320 258 L 358 258 L 358 106 C 358 94 356 88 352 86 C 348 84 342 88 336 98 C 328 112 320 140 320 180 Z', '#CFD8DC', false);

    // === STANDING PERSON fills ===
    fe(g, 'ellipse', { cx: 330, cy: 200, rx: 8, ry: 10, fill: '#BDBDBD' }, false);
    fl(g, 'M 322 212 C 326 210 328 208 330 208 C 332 208 334 210 338 212 L 340 258 L 320 258 Z', '#757575', false);
    fe(g, 'rect', { x: 322, y: 258, width: 4, height: 30, fill: '#616161' }, false);
    fe(g, 'rect', { x: 334, y: 258, width: 4, height: 30, fill: '#616161' }, false);
  },

  // =================================================================
  // Layer 9: Polish — eye shines, details, textures, shadows, vignette
  // =================================================================
  (g, a) => {
    // === EYE SHINES (white sparkle) ===
    // Groom
    fe(g, 'circle', { cx: 122, cy: 91, r: 1.3, fill: 'white' }, a);
    fe(g, 'circle', { cx: 140, cy: 90, r: 1.3, fill: 'white' }, a);
    // Groom secondary shine
    fe(g, 'circle', { cx: 126, cy: 95, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 144, cy: 94, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    // Bride
    fe(g, 'circle', { cx: 214, cy: 91, r: 1.3, fill: 'white' }, a);
    fe(g, 'circle', { cx: 230, cy: 90, r: 1.3, fill: 'white' }, a);
    // Bride secondary shine
    fe(g, 'circle', { cx: 218, cy: 95, r: 0.6, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 234, cy: 94, r: 0.6, fill: 'white', opacity: '0.7' }, false);

    // === BRIDE LIP TONE (gray) ===
    fl(g, 'M 210 124 C 214 122 218 121 220 123 C 221 124 223 124 224 123 C 226 121 230 122 234 124 C 230 130 224 133 222 133 C 220 133 214 130 210 124 Z', '#9E9E9E', false);

    // === TULLE TEXTURE LINES (very fine, ~4 horizontal curves) ===
    const tulleLine = ce('path', { d: 'M 156 310 C 176 304 198 300 220 300 C 242 300 264 304 284 310', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine);
    const tulleLine2 = ce('path', { d: 'M 148 340 C 172 332 196 328 220 328 C 244 328 268 332 292 340', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine2);
    const tulleLine3 = ce('path', { d: 'M 140 370 C 166 360 194 354 220 354 C 246 354 274 360 300 370', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine3);
    const tulleLine4 = ce('path', { d: 'M 136 400 C 164 388 192 382 220 382 C 248 382 276 388 304 400', fill: 'none', stroke: '#E0E0E0', 'stroke-width': '0.5', opacity: '0.6' });
    g.appendChild(tulleLine4);

    // === DRESS SHIMMER ELLIPSES (white, very subtle) ===
    fe(g, 'ellipse', { cx: 196, cy: 310, rx: 4, ry: 2, fill: 'white', opacity: '0.15' }, false);
    fe(g, 'ellipse', { cx: 244, cy: 318, rx: 3, ry: 1.5, fill: 'white', opacity: '0.12' }, false);
    fe(g, 'ellipse', { cx: 210, cy: 350, rx: 5, ry: 2, fill: 'white', opacity: '0.1' }, false);
    fe(g, 'ellipse', { cx: 235, cy: 370, rx: 4, ry: 1.5, fill: 'white', opacity: '0.12' }, false);
    fe(g, 'ellipse', { cx: 180, cy: 380, rx: 3, ry: 1.5, fill: 'white', opacity: '0.1' }, false);
    fe(g, 'ellipse', { cx: 260, cy: 392, rx: 4, ry: 2, fill: 'white', opacity: '0.1' }, false);

    // === HAIR FLOWER FILL ===
    fl(g, 'M 256 78 C 258 74 262 74 264 78 C 268 78 270 82 268 84 C 268 88 264 90 260 88 C 256 88 254 84 256 82 C 254 78 256 76 256 78 Z', '#E0E0E0', false);
    fe(g, 'circle', { cx: 261, cy: 82, r: 2, fill: '#C0C0C0' }, false);

    // === SUIT LAPEL SHADOWS ===
    fl(g, 'M 114 174 C 118 182 120 192 122 202 L 120 202 C 118 192 116 182 112 174 Z', '#263238', false);
    fl(g, 'M 146 174 C 142 182 140 192 138 202 L 140 202 C 142 192 144 182 148 174 Z', '#263238', false);
    // Pocket square hint (faint white triangle)
    fl(g, 'M 111 195 C 113 191 116 189 118 191 C 119 193 117 197 115 199 L 111 199 Z', '#E0E0E0', false);

    // === LAMP GLOW INNER ===
    fe(g, 'circle', { cx: 25, cy: 120, r: 3, fill: '#FFFDE7', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 25, cy: 120, r: 6, fill: '#FFF9C4', opacity: '0.2' }, false);

    // === CEILING BEAM SHADOWS ===
    for (let x = 0; x < 360; x += 50) {
      fe(g, 'rect', { x: x + 1, y: 34, width: 48, height: 4, fill: '#212121', opacity: '0.2' }, false);
    }
    // Beam bottom shadow edge
    fe(g, 'rect', { x: 0, y: 48, width: 360, height: 3, fill: '#1A1A1A', opacity: '0.15' }, false);

    // === STONE MORTAR LINES (very faint, between blocks) ===
    // Left wall mortar
    const leftMortarLines = [
      'M 2 78 L 24 78', 'M 2 106 L 18 106', 'M 2 132 L 30 132',
      'M 2 158 L 22 158', 'M 2 186 L 32 186', 'M 2 214 L 20 214',
      'M 2 242 L 28 242', 'M 2 268 L 24 268', 'M 2 296 L 18 296'
    ];
    leftMortarLines.forEach(d => {
      const p = ce('path', { d, fill: 'none', stroke: '#787878', 'stroke-width': '0.4', opacity: '0.5' });
      g.appendChild(p);
    });
    // Right wall mortar
    const rightMortarLines = [
      'M 312 76 L 336 76', 'M 312 104 L 328 104', 'M 312 130 L 342 130',
      'M 312 158 L 326 158', 'M 312 184 L 340 184', 'M 312 210 L 324 210',
      'M 312 238 L 338 238', 'M 312 264 L 330 264', 'M 312 292 L 346 292'
    ];
    rightMortarLines.forEach(d => {
      const p = ce('path', { d, fill: 'none', stroke: '#787878', 'stroke-width': '0.4', opacity: '0.5' });
      g.appendChild(p);
    });

    // === FLOOR SHADOW UNDER BENCH ===
    fe(g, 'rect', { x: 52, y: 340, width: 236, height: 8, fill: '#1A1A1A', opacity: '0.12' }, false);

    // === SKIRT SPREAD SHADOW (bottom edge) ===
    fl(g, 'M 136 424 C 164 430 192 434 220 434 C 248 434 276 430 304 424 L 304 432 C 276 438 248 440 220 440 C 192 440 164 438 136 432 Z', '#D0D0D0', false);

    // === SUBTLE VIGNETTE ON EDGES ===
    // Left vignette
    fe(g, 'rect', { x: 0, y: 0, width: 20, height: 450, fill: '#000000', opacity: '0.06' }, false);
    // Right vignette
    fe(g, 'rect', { x: 340, y: 0, width: 20, height: 450, fill: '#000000', opacity: '0.06' }, false);
    // Top vignette
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 12, fill: '#000000', opacity: '0.08' }, false);
    // Bottom vignette
    fe(g, 'rect', { x: 0, y: 438, width: 360, height: 12, fill: '#000000', opacity: '0.06' }, false);

    // === GROOM NASOLABIAL FOLDS (very faint) ===
    const nl1 = ce('path', { d: 'M 122 108 C 120 114 118 120 116 126', fill: 'none', stroke: '#909090', 'stroke-width': '0.4', opacity: '0.5' });
    g.appendChild(nl1);
    const nl2 = ce('path', { d: 'M 140 106 C 142 112 144 118 146 124', fill: 'none', stroke: '#909090', 'stroke-width': '0.4', opacity: '0.5' });
    g.appendChild(nl2);

    // === BRIDE CHEEK SOFTNESS (subtle highlight) ===
    fe(g, 'ellipse', { cx: 208, cy: 112, rx: 8, ry: 4, fill: '#C8C8C8', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 234, cy: 112, rx: 8, ry: 4, fill: '#C8C8C8', opacity: '0.2' }, false);

    // === BODICE BONING SHADOW HINTS ===
    const boningShade = [198, 210, 230, 242];
    boningShade.forEach(bx => {
      const bs = ce('path', { d: `M ${bx + 1} 182 L ${bx - 1} 244`, fill: 'none', stroke: '#D0D0D0', 'stroke-width': '0.5', opacity: '0.4' });
      g.appendChild(bs);
    });

    // === OVERALL WARM GRAY OVERLAY (very subtle film grain feel) ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#9E9E9E', opacity: '0.02' }, false);
  }
];
