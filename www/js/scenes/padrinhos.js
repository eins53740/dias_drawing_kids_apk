const padrinhosLayers = [
  // =====================================================================
  // Layer 0: Composition guides — godmother zone left, godfather zone right,
  //          head level, baby level, feet level, window guide, center vertical
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Godmother zone (left)
    pp(g, ['M 30 20 L 30 430', 'M 190 20 L 190 430'], a, lt);
    // Godfather zone (right)
    pp(g, ['M 170 20 L 170 430', 'M 330 20 L 330 430'], a, lt);
    // Head level guide
    pp(g, ['M 20 90 L 340 90'], a, lt);
    // Baby level guide (at godmother's hip)
    pp(g, ['M 50 190 L 200 190'], a, lt);
    // Feet level guide
    pp(g, ['M 20 420 L 340 420'], a, lt);
    // Window guide (center-top)
    pp(g, ['M 130 10 L 230 10 L 230 70 L 130 70 Z'], a, lt);
    // Godmother head center cross
    pp(g, ['M 110 50 L 110 140', 'M 70 90 L 150 90'], a, lt);
    // Godfather head center cross
    pp(g, ['M 250 50 L 250 140', 'M 210 90 L 290 90'], a, lt);
    // Baby center guide
    pp(g, ['M 130 180 L 130 280'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — full bodies of all three figures
  // Godmother (left), Baby Miguel (at hip), Godfather (right)
  // =====================================================================
  (g, a) => {
    // === GODMOTHER (left, centered ~x=110) ===
    // Head — oval, slightly narrower chin, warm face
    pp(g, [
      'M 110 52 C 88 52 76 68 76 88 C 76 108 84 122 96 130 C 102 134 106 136 110 138 C 114 136 118 134 124 130 C 136 122 144 108 144 88 C 144 68 132 52 110 52 Z'
    ], a);
    // Neck
    pp(g, ['M 102 136 L 100 150', 'M 118 136 L 120 150'], a);
    // Body — sleeveless long dress/jumpsuit to feet
    pp(g, [
      'M 68 174 C 78 158 94 150 110 150 C 126 158 142 166 148 180 L 152 340 L 156 420',
      'M 68 174 L 64 340 L 60 420'
    ], a);
    // Left arm (holding baby, bent at elbow)
    pp(g, [
      'M 68 174 C 60 186 56 200 58 216 C 60 230 68 240 78 246'
    ], a);
    // Right arm (supporting baby from below)
    pp(g, [
      'M 148 180 C 152 194 150 210 144 226 C 140 236 134 244 128 248'
    ], a);

    // === BABY MIGUEL (at godmother's hip, ~x=130, y=206) ===
    // Head — large round baby head
    pp(g, [
      'M 118 190 C 118 178 124 168 134 166 C 144 168 150 178 150 190 C 150 202 144 212 136 216 C 132 218 128 216 124 212 C 118 206 118 198 118 190 Z'
    ], a);
    // Baby body — small torso
    pp(g, [
      'M 122 214 C 124 220 130 224 136 224 C 142 224 146 220 148 214',
      'M 122 214 L 118 250 L 120 270',
      'M 148 214 L 152 250 L 150 270'
    ], a);
    // Baby legs
    pp(g, [
      'M 118 250 C 114 260 112 272 114 280',
      'M 150 250 C 154 260 156 272 154 280'
    ], a);

    // === GODFATHER (right, centered ~x=250) ===
    // Head — slightly angular, lean
    pp(g, [
      'M 250 52 C 228 52 216 68 216 88 C 216 108 224 122 236 130 C 242 134 246 136 250 138 C 254 136 258 134 264 130 C 276 122 284 108 284 88 C 284 68 272 52 250 52 Z'
    ], a);
    // Neck
    pp(g, ['M 242 136 L 240 150', 'M 258 136 L 260 150'], a);
    // Body — shirt, belt, pants
    pp(g, [
      'M 204 178 C 214 160 232 150 250 150 C 268 160 286 168 292 182 L 296 340 L 300 420',
      'M 204 178 L 200 340 L 196 420'
    ], a);
    // Right arm (pointing at camera) — extended forward
    pp(g, [
      'M 292 182 C 298 194 306 204 316 210 C 324 214 332 216 340 218'
    ], a);
    // Left arm at side
    pp(g, [
      'M 204 178 C 196 192 192 208 190 226 C 188 240 190 254 194 266'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — all three figures
  // =====================================================================
  (g, a) => {
    // === GODMOTHER FACE ===
    // Eyes — warm, looking toward baby
    pp(g, [
      'M 96 84 C 98 80 102 78 106 80 C 110 82 110 86 108 90 C 104 92 96 90 96 84 Z',
      'M 116 84 C 118 80 122 78 126 80 C 130 82 130 86 128 90 C 124 92 116 90 116 84 Z'
    ], a);
    // Pupils (looking down toward baby)
    fe(g, 'circle', { cx: 104, cy: 87, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 124, cy: 87, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows — feminine, arched
    pp(g, ['M 94 78 C 98 74 104 72 110 74', 'M 116 74 C 122 72 128 74 132 78'], a);
    // Nose
    pp(g, ['M 112 80 C 111 86 110 94 108 100', 'M 106 102 C 108 106 112 108 116 106'], a);
    // Wide warm smile with teeth line
    pp(g, ['M 96 114 C 100 110 106 108 110 110 C 114 108 120 110 124 114'], a);
    // Teeth gap (upper teeth showing)
    pp(g, ['M 100 114 L 120 114'], a);
    // Lower lip
    pp(g, ['M 98 116 C 104 122 114 122 122 116'], a);
    // Right ear (visible)
    pp(g, ['M 144 84 C 148 80 152 84 152 92 C 152 100 148 104 144 102'], a);
    pp(g, ['M 148 88 C 150 92 150 98 148 100'], a, lt);

    // === BABY MIGUEL FACE ===
    // Big eyes
    pp(g, [
      'M 124 186 C 126 182 130 180 134 182 C 138 184 138 190 134 192 C 130 194 124 192 124 186 Z',
      'M 138 186 C 140 182 144 180 148 182 C 152 184 152 190 148 192 C 144 194 138 192 138 186 Z'
    ], a);
    // Baby pupils
    fe(g, 'circle', { cx: 131, cy: 188, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 145, cy: 188, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Baby tiny nose
    pp(g, ['M 136 190 C 135 194 136 196 138 196 C 140 196 141 194 140 190'], a);
    // Baby small smile
    pp(g, ['M 130 200 C 134 198 138 198 142 200', 'M 132 202 C 136 204 140 204 144 202'], a);

    // === GODFATHER FACE ===
    // Rectangular glasses frames
    pp(g, [
      // Left lens
      'M 230 82 L 248 82 L 248 98 L 230 98 Z',
      // Right lens
      'M 252 82 L 270 82 L 270 98 L 252 98 Z',
      // Bridge
      'M 248 90 L 252 90',
      // Left arm of glasses
      'M 230 90 L 218 86',
      // Right arm of glasses
      'M 270 90 L 282 86'
    ], a);
    // Eyes behind glasses
    pp(g, [
      'M 234 88 C 236 84 240 82 244 84 C 248 86 248 92 244 94 C 240 96 234 94 234 88 Z',
      'M 256 88 C 258 84 262 82 266 84 C 270 86 270 92 266 94 C 262 96 256 94 256 88 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 241, cy: 90, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 263, cy: 90, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Eyebrows — strong
    pp(g, ['M 230 78 C 236 74 242 73 248 76', 'M 252 76 C 258 73 264 74 270 78'], a);
    // Nose
    pp(g, ['M 252 82 C 251 90 250 98 248 104', 'M 246 106 C 248 110 252 112 256 110'], a);
    // Mouth
    pp(g, ['M 240 118 C 244 114 250 112 254 114 C 258 112 262 114 266 118'], a);
    pp(g, ['M 242 120 C 248 124 258 124 264 120'], a);
    // Ears
    pp(g, ['M 216 86 C 210 82 206 86 206 94 C 206 102 210 106 216 104'], a);
    pp(g, ['M 216 90 C 212 94 212 100 214 102'], a, lt);
    pp(g, ['M 284 86 C 290 82 294 86 294 94 C 294 102 290 106 284 104'], a);
    pp(g, ['M 290 90 C 292 94 292 100 290 102'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and accessories — godmother long hair, baby wispy hair,
  //          godfather short hair, goatee dots, bracelet, watch
  // =====================================================================
  (g, a) => {
    // === GODMOTHER HAIR — long straight dark brown to shoulders ===
    // Hairline contour
    pp(g, [
      'M 78 84 C 76 66 84 50 100 44 C 110 40 120 42 128 48 C 138 56 144 68 144 84'
    ], a);
    // Hair mass on left side flowing to shoulder
    pp(g, [
      'M 76 86 C 74 100 70 116 66 132 C 62 148 58 164 56 176',
      'M 80 86 C 78 100 76 114 74 128 C 72 142 70 156 68 168'
    ], a);
    // Hair mass on right side
    pp(g, [
      'M 144 86 C 146 100 148 116 150 132 C 152 148 154 162 154 174',
      'M 140 86 C 142 100 142 114 144 128 C 146 142 146 156 146 168'
    ], a);
    // Hair strand texture
    pp(g, [
      'M 88 48 C 98 42 112 40 122 46',
      'M 82 58 C 92 50 106 48 116 52',
      'M 80 70 C 86 64 96 60 108 62',
      'M 72 104 C 70 112 68 122 66 132',
      'M 146 104 C 148 112 150 122 152 132'
    ], a, lt);

    // Godmother black bracelet on wrist
    pp(g, [
      'M 56 228 C 54 224 52 220 56 218 C 60 216 64 220 62 224 C 60 228 56 232 56 228 Z'
    ], a);

    // === BABY HAIR — very short fine wisps ===
    pp(g, [
      'M 122 186 C 120 174 126 164 136 162 C 146 160 152 166 154 176 C 154 182 152 186 150 190'
    ], a);
    // Wispy strands
    pp(g, [
      'M 130 164 C 134 160 140 158 146 162',
      'M 126 170 C 130 166 136 164 142 166'
    ], a, lt);

    // === GODFATHER HAIR — short dark hair with texture ===
    pp(g, [
      'M 220 84 C 218 66 226 50 242 44 C 252 40 262 42 270 48 C 280 56 286 68 286 84'
    ], a);
    // Hair texture — short strokes
    pp(g, [
      'M 234 48 C 242 42 254 40 264 46',
      'M 228 56 C 238 48 252 46 262 52',
      'M 224 66 C 232 60 244 58 256 62',
      'M 222 76 C 228 70 238 66 248 68'
    ], a, lt);

    // === GOATEE — dots array (~12 dots around chin/mouth) ===
    const goateeDots = [
      [244, 122], [248, 124], [252, 126], [256, 126], [260, 124], [264, 122],
      [246, 128], [250, 130], [254, 132], [258, 130], [262, 128],
      [252, 134]
    ];
    goateeDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a);
    });

    // === WATCH on godfather left wrist ===
    pp(g, [
      'M 188 252 L 196 250 L 198 258 L 190 260 Z'
    ], a);
    fe(g, 'circle', { cx: 194, cy: 255, r: 3.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Watch band
    pp(g, ['M 186 254 L 182 250', 'M 192 262 L 196 268'], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — godmother sleeveless dress, godfather shirt
  //          with collar, buttons, belt, pants, micro-dot pattern
  // =====================================================================
  (g, a) => {
    // === GODMOTHER DRESS ===
    // Sleeveless neckline V-shape
    pp(g, [
      'M 96 152 C 100 148 106 146 110 146 C 114 146 120 148 124 152',
      'M 96 152 C 98 158 102 162 108 164',
      'M 124 152 C 122 158 118 162 112 164'
    ], a);
    // Dress straight to feet — long, flowing
    pp(g, ['M 64 340 L 60 420', 'M 152 340 L 156 420'], a, lt);
    // Drape fold lines on dress (~4 folds)
    pp(g, [
      'M 80 200 C 78 220 76 250 74 280',
      'M 92 190 C 90 220 88 260 86 300',
      'M 126 200 C 128 230 130 270 132 310',
      'M 140 210 C 142 240 144 280 146 320'
    ], a, lt);

    // === GODFATHER SHIRT ===
    // Collar with points
    pp(g, [
      'M 234 152 C 230 148 224 148 220 152 C 218 156 222 162 228 160',
      'M 266 152 C 270 148 276 148 280 152 C 282 156 278 162 272 160',
      'M 228 160 C 236 164 246 166 254 166 C 262 164 268 162 272 160'
    ], a);
    // Button line vertical (center of shirt)
    pp(g, ['M 250 166 L 250 310'], a, lt);
    // 4 button dots
    fe(g, 'circle', { cx: 250, cy: 182, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 206, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 230, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 250, cy: 254, r: 1.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Belt double lines
    pp(g, ['M 204 308 L 296 308', 'M 204 314 L 296 314'], a);
    // Belt buckle rectangle
    pp(g, ['M 242 306 L 258 306 L 258 316 L 242 316 Z'], a);
    // Buckle inner rectangle
    pp(g, ['M 244 308 L 256 308 L 256 314 L 244 314 Z'], a, lt);
    // Pants seam
    pp(g, ['M 248 316 L 248 420'], a, lt);
    // Pants legs
    pp(g, ['M 200 340 L 196 420', 'M 296 340 L 300 420'], a, lt);
    // Micro-dot pattern on shirt using loop
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 6; col++) {
        const cx = 218 + col * 12 + (row % 2 === 0 ? 0 : 6);
        const cy = 170 + row * 11;
        if (cy < 306) {
          fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : LP }, a);
        }
      }
    }
  },

  // =====================================================================
  // Layer 5: Hands and pointing gesture — godmother cradling baby,
  //          baby feet/shoes, godfather pointing RIGHT hand, left hand at side
  // =====================================================================
  (g, a) => {
    // === GODMOTHER LEFT ARM cradling baby ===
    pp(g, [
      'M 58 216 C 64 226 74 234 86 240 C 96 244 108 246 118 244'
    ], a);
    // Hand under baby with finger details
    pp(g, [
      'M 86 240 C 82 236 78 234 76 238 C 74 242 78 246 82 246',
      'M 80 238 C 76 234 72 232 70 236 C 68 240 72 244 76 244',
      'M 78 242 C 74 240 70 238 68 242 C 66 246 70 248 74 248',
      'M 84 244 C 82 248 86 252 90 250 C 94 248 92 244 88 244'
    ], a);
    // Thumb
    pp(g, ['M 90 238 C 94 234 98 232 100 236 C 102 240 98 244 94 242'], a);

    // === GODMOTHER RIGHT ARM supporting baby from below ===
    pp(g, [
      'M 144 226 C 140 234 134 240 128 244'
    ], a);
    // Right hand supporting
    pp(g, [
      'M 128 244 C 132 248 136 252 138 256 C 140 260 136 262 132 260 C 128 258 126 254 126 250',
      'M 130 248 C 134 252 136 256 134 258',
      'M 128 250 C 132 254 132 258 130 260'
    ], a);

    // === BABY FEET / SHOES ===
    // Left shoe
    pp(g, [
      'M 114 278 C 110 280 106 284 106 290 C 106 296 110 300 116 298 C 120 296 122 290 120 284 Z'
    ], a);
    // Right shoe
    pp(g, [
      'M 154 278 C 158 280 162 284 162 290 C 162 296 158 300 152 298 C 148 296 146 290 148 284 Z'
    ], a);
    // Shoe sole lines
    pp(g, ['M 108 294 L 118 294', 'M 150 294 L 160 294'], a, lt);

    // === GODFATHER RIGHT HAND — POINTING at camera ===
    // Forearm to hand
    pp(g, [
      'M 316 210 C 322 212 330 214 336 216'
    ], a);
    // INDEX FINGER extended straight (key visual element)
    pp(g, [
      'M 336 216 C 340 214 346 212 352 210 C 356 208 358 206 356 204 C 354 202 350 204 346 206 C 342 208 338 210 336 212'
    ], a);
    // Index finger top edge
    pp(g, [
      'M 336 212 C 340 210 346 208 352 206'
    ], a);
    // Other 3 fingers curled
    pp(g, [
      // Middle finger curled
      'M 336 218 C 340 220 342 224 340 228 C 338 232 334 230 332 226',
      // Ring finger curled
      'M 334 220 C 338 222 340 226 338 230 C 336 234 332 232 330 228',
      // Pinky curled
      'M 332 222 C 336 224 338 228 336 232 C 334 236 330 234 328 230'
    ], a);
    // Thumb visible (tucked under, slightly visible)
    pp(g, [
      'M 336 216 C 334 220 330 222 326 220 C 322 218 322 214 326 212 C 330 210 334 212 336 216'
    ], a);
    // Knuckle detail
    pp(g, ['M 332 216 C 334 218 336 220 338 218'], a, lt);

    // === GODFATHER LEFT HAND at side ===
    pp(g, [
      'M 194 262 C 192 268 190 274 188 280'
    ], a);
    // Hand fingers
    pp(g, [
      'M 188 280 C 186 284 184 288 182 292 C 180 296 182 298 186 296 C 190 294 192 290 192 286',
      'M 190 282 C 188 286 186 290 186 294',
      'M 192 280 C 190 284 188 290 188 294',
      'M 186 280 C 184 284 182 288 182 290'
    ], a);
    // Thumb
    pp(g, ['M 192 278 C 196 280 198 284 196 288 C 194 290 192 288 190 284'], a);
  },

  // =====================================================================
  // Layer 6: Background — stone wall with irregular blocks, window with
  //          4 glass panes, wall shadow, ground/floor line
  // =====================================================================
  (g, a) => {
    // === STONE WALL — irregular block outlines in ~6 rows ===
    // Row 1 (y=0-40)
    pp(g, [
      'M 0 0 L 58 0 L 58 38 L 0 38 Z',
      'M 62 0 L 128 0 L 128 36 L 62 36 Z',
      'M 232 0 L 310 0 L 310 38 L 232 38 Z',
      'M 314 0 L 360 0 L 360 40 L 314 40 Z'
    ], a, lt);
    // Row 2 (y=40-80)
    pp(g, [
      'M 0 42 L 72 42 L 72 78 L 0 78 Z',
      'M 76 40 L 126 40 L 126 76 L 76 76 Z',
      'M 234 42 L 300 42 L 300 78 L 234 78 Z',
      'M 304 40 L 360 40 L 360 80 L 304 80 Z'
    ], a, lt);
    // Row 3 (y=80-120) — window area in center
    pp(g, [
      'M 0 82 L 60 82 L 60 118 L 0 118 Z',
      'M 64 80 L 124 80 L 124 116 L 64 116 Z',
      'M 236 82 L 310 82 L 310 120 L 236 120 Z',
      'M 314 82 L 360 82 L 360 118 L 314 118 Z'
    ], a, lt);
    // Row 4 (y=120-160)
    pp(g, [
      'M 0 122 L 68 122 L 68 158 L 0 158 Z',
      'M 72 120 L 132 120 L 132 156 L 72 156 Z',
      'M 136 118 L 226 118 L 226 158 L 136 158 Z',
      'M 230 122 L 296 122 L 296 160 L 230 160 Z',
      'M 300 120 L 360 120 L 360 156 L 300 156 Z'
    ], a, lt);
    // Row 5 (y=160-200) — behind figures, less visible
    pp(g, [
      'M 0 162 L 54 162 L 54 198 L 0 198 Z',
      'M 298 160 L 360 160 L 360 200 L 298 200 Z'
    ], a, lt);
    // Row 6 (y=200-240) — sides only
    pp(g, [
      'M 0 202 L 46 202 L 46 238 L 0 238 Z',
      'M 308 202 L 360 202 L 360 240 L 308 240 Z'
    ], a, lt);

    // === WINDOW — rectangle with inner frame and cross dividers ===
    // Outer frame
    pp(g, ['M 136 10 L 224 10 L 224 68 L 136 68 Z'], a);
    // Inner frame (slightly inset)
    pp(g, ['M 140 14 L 220 14 L 220 64 L 140 64 Z'], a);
    // Vertical divider
    pp(g, ['M 180 14 L 180 64'], a);
    // Horizontal divider
    pp(g, ['M 140 39 L 220 39'], a);
    // Window ledge
    pp(g, ['M 132 68 L 228 68 L 228 76 L 132 76 Z'], a);

    // === WALL SHADOW on right side ===
    pp(g, [
      'M 310 0 L 310 420 L 360 420 L 360 0 Z'
    ], a, lt);

    // === GROUND / FLOOR LINE ===
    pp(g, ['M 0 420 L 360 420'], a);
    // Ground surface hint
    pp(g, ['M 0 420 L 0 450 L 360 450 L 360 420'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — FIGURES (skin, hair, clothing for all three)
  // =====================================================================
  (g, a) => {
    // === GODMOTHER ===
    // Face skin
    fl(g,
      'M 110 52 C 88 52 76 68 76 88 C 76 108 84 122 96 130 C 102 134 106 136 110 138 C 114 136 118 134 124 130 C 136 122 144 108 144 88 C 144 68 132 52 110 52 Z',
      '#F5D0A9', a);
    // Ear skin
    fe(g, 'ellipse', { cx: 148, cy: 92, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    // Neck skin
    fe(g, 'rect', { x: 100, y: 134, width: 20, height: 18, rx: 4, fill: '#EDBE8C' }, false);
    // Hair fill — dark brown, both sides
    fl(g,
      'M 78 84 C 76 66 84 50 100 44 C 110 40 120 42 128 48 C 138 56 144 68 144 84 L 140 82 C 140 72 136 60 128 54 C 122 48 114 46 106 48 C 96 52 86 62 82 76 Z',
      '#4E342E', false);
    // Hair sides flowing down — left
    fl(g,
      'M 76 86 C 74 100 70 116 66 132 C 62 148 58 164 56 176 L 62 176 C 64 164 68 148 72 132 C 76 116 78 100 80 86 Z',
      '#4E342E', false);
    // Hair sides flowing down — right
    fl(g,
      'M 144 86 C 146 100 148 116 150 132 C 152 148 154 162 154 174 L 148 174 C 148 162 146 148 144 132 C 142 116 140 100 140 86 Z',
      '#4E342E', false);
    // Navy dress fill
    fl(g,
      'M 68 174 C 78 158 94 150 110 150 C 126 158 142 166 148 180 L 152 340 L 156 420 L 60 420 L 64 340 Z',
      '#1A237E', a);
    // Arm skin (left arm visible)
    fl(g,
      'M 68 174 C 60 186 56 200 58 216 C 60 226 66 234 74 240 L 80 236 C 72 230 66 222 64 214 C 62 202 64 190 70 178 Z',
      '#F5D0A9', false);

    // === BABY MIGUEL ===
    // Baby face skin
    fl(g,
      'M 118 190 C 118 178 124 168 134 166 C 144 168 150 178 150 190 C 150 202 144 212 136 216 C 132 218 128 216 124 212 C 118 206 118 198 118 190 Z',
      '#FADCC2', a);
    // Baby body — white clothes
    fl(g,
      'M 122 214 C 124 220 130 224 136 224 C 142 224 146 220 148 214 L 152 250 L 150 270 L 120 270 L 118 250 Z',
      '#FAFAFA', false);
    // Baby legs — white
    fl(g,
      'M 118 250 C 114 260 112 272 114 280 L 120 280 L 120 270 Z',
      '#FAFAFA', false);
    fl(g,
      'M 150 250 C 154 260 156 272 154 280 L 148 280 L 148 270 Z',
      '#FAFAFA', false);
    // Baby white shoes
    fe(g, 'ellipse', { cx: 112, cy: 290, rx: 8, ry: 7, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 156, cy: 290, rx: 8, ry: 7, fill: '#FAFAFA' }, false);

    // === GODFATHER ===
    // Face skin
    fl(g,
      'M 250 52 C 228 52 216 68 216 88 C 216 108 224 122 236 130 C 242 134 246 136 250 138 C 254 136 258 134 264 130 C 276 122 284 108 284 88 C 284 68 272 52 250 52 Z',
      '#F5D0A9', a);
    // Ears skin
    fe(g, 'ellipse', { cx: 210, cy: 94, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 290, cy: 94, rx: 5, ry: 10, fill: '#F5D0A9' }, false);
    // Neck skin
    fe(g, 'rect', { x: 240, y: 134, width: 20, height: 18, rx: 4, fill: '#EDBE8C' }, false);
    // Hair fill — dark brown
    fl(g,
      'M 220 84 C 218 66 226 50 242 44 C 252 40 262 42 270 48 C 280 56 286 68 286 84 L 282 82 C 282 72 278 62 270 54 C 264 48 256 46 248 48 C 238 52 228 62 224 76 Z',
      '#3E2C20', false);
    // White shirt fill
    fl(g,
      'M 204 178 C 214 160 232 150 250 150 C 268 160 286 168 292 182 L 296 308 L 204 308 Z',
      '#F5F5F5', a);
    // Brown belt fill
    fl(g,
      'M 204 308 L 296 308 L 296 314 L 204 314 Z',
      '#795548', false);
    // Belt buckle fill
    fe(g, 'rect', { x: 243, y: 307, width: 14, height: 8, rx: 1, fill: '#A1887F' }, false);
    // Dark pants fill
    fl(g,
      'M 200 314 L 296 314 L 300 420 L 196 420 Z',
      '#37474F', a);
    // Right pointing arm skin
    fl(g,
      'M 292 182 C 298 194 306 204 316 210 C 324 214 332 216 340 218 L 338 224 C 330 222 322 220 314 216 C 304 210 296 200 290 188 Z',
      '#F5D0A9', false);
    // Left arm skin
    fl(g,
      'M 204 178 C 196 192 192 208 190 226 C 188 240 190 254 194 266 L 200 264 C 196 252 194 240 196 226 C 198 210 202 196 208 184 Z',
      '#F5D0A9', false);
    // Glasses fill (dark frames)
    fe(g, 'rect', { x: 230, y: 82, width: 18, height: 16, rx: 1, fill: '#424242', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 252, y: 82, width: 18, height: 16, rx: 1, fill: '#424242', opacity: '0.3' }, false);
    // Bracelet fill (godmother)
    fe(g, 'ellipse', { cx: 58, cy: 224, rx: 5, ry: 6, fill: '#212121' }, false);
  },

  // =====================================================================
  // Layer 8: Color fills — SCENE (stone wall, individual stones, window,
  //          shadow, ground, pointing hand skin, hands, watch)
  // =====================================================================
  (g, a) => {
    // === STONE WALL base fill ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 420, fill: '#D7C8A0', opacity: '0.35' }, a);

    // === INDIVIDUAL STONES with varying warm fills ===
    // Row 1
    fe(g, 'rect', { x: 2, y: 2, width: 54, height: 34, rx: 2, fill: '#C8A96E', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 64, y: 2, width: 62, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 234, y: 2, width: 74, height: 34, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 316, y: 2, width: 42, height: 36, rx: 2, fill: '#C8A96E', opacity: '0.22' }, false);
    // Row 2
    fe(g, 'rect', { x: 2, y: 44, width: 68, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 78, y: 42, width: 46, height: 32, rx: 2, fill: '#B8A060', opacity: '0.22' }, false);
    fe(g, 'rect', { x: 236, y: 44, width: 62, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 306, y: 42, width: 52, height: 36, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    // Row 3
    fe(g, 'rect', { x: 2, y: 84, width: 56, height: 32, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 66, y: 82, width: 56, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 238, y: 84, width: 70, height: 34, rx: 2, fill: '#D7C8A0', opacity: '0.22' }, false);
    fe(g, 'rect', { x: 316, y: 84, width: 42, height: 32, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);
    // Row 4
    fe(g, 'rect', { x: 2, y: 124, width: 64, height: 32, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 74, y: 122, width: 56, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 138, y: 120, width: 86, height: 36, rx: 2, fill: '#B8A060', opacity: '0.15' }, false);
    fe(g, 'rect', { x: 232, y: 124, width: 62, height: 34, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    fe(g, 'rect', { x: 302, y: 122, width: 56, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    // Row 5 (sides)
    fe(g, 'rect', { x: 2, y: 164, width: 50, height: 32, rx: 2, fill: '#B8A060', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 300, y: 162, width: 58, height: 36, rx: 2, fill: '#C8A96E', opacity: '0.2' }, false);
    // Row 6 (sides)
    fe(g, 'rect', { x: 2, y: 204, width: 42, height: 32, rx: 2, fill: '#D7C8A0', opacity: '0.18' }, false);
    fe(g, 'rect', { x: 310, y: 204, width: 48, height: 34, rx: 2, fill: '#B8A060', opacity: '0.2' }, false);

    // === WINDOW ===
    // Frame fill — white
    fe(g, 'rect', { x: 136, y: 10, width: 88, height: 58, rx: 2, fill: '#FAFAFA' }, a);
    // Glass panes — sky blue, 4 panes (2x2)
    fe(g, 'rect', { x: 142, y: 16, width: 36, height: 21, rx: 1, fill: '#90CAF9' }, false);
    fe(g, 'rect', { x: 182, y: 16, width: 36, height: 21, rx: 1, fill: '#64B5F6' }, false);
    fe(g, 'rect', { x: 142, y: 41, width: 36, height: 21, rx: 1, fill: '#42A5F5' }, false);
    fe(g, 'rect', { x: 182, y: 41, width: 36, height: 21, rx: 1, fill: '#90CAF9' }, false);
    // Window ledge
    fe(g, 'rect', { x: 132, y: 68, width: 96, height: 8, rx: 1, fill: '#E0E0E0' }, false);

    // === WALL SHADOW (right side) ===
    fe(g, 'rect', { x: 310, y: 0, width: 50, height: 420, fill: '#000000', opacity: '0.06' }, false);

    // === GROUND ===
    fe(g, 'rect', { x: 0, y: 420, width: 360, height: 30, fill: '#9E9E9E' }, false);

    // === POINTING HAND + INDEX FINGER skin fill ===
    fl(g,
      'M 336 212 C 340 210 346 208 352 206 C 356 204 356 208 352 210 C 346 212 340 214 336 216 Z',
      '#F5D0A9', false);
    // Curled fingers fill
    fl(g,
      'M 332 218 C 336 220 340 224 340 228 C 338 232 334 230 332 226 Z',
      '#F5D0A9', false);
    fl(g,
      'M 330 220 C 334 222 338 226 336 230 C 334 234 330 232 328 228 Z',
      '#F5D0A9', false);
    // Thumb fill
    fl(g,
      'M 336 216 C 334 220 330 222 326 220 C 322 218 322 214 326 212 C 330 210 334 212 336 216 Z',
      '#F5D0A9', false);

    // === LEFT HAND skin fill (godfather) ===
    fl(g,
      'M 188 280 C 186 284 184 288 182 292 C 180 296 182 298 186 296 C 190 294 192 290 192 286 L 188 280 Z',
      '#F5D0A9', false);

    // === GODMOTHER cradling hand skin fill ===
    fl(g,
      'M 86 240 C 82 236 78 234 76 238 C 74 242 78 246 82 246 L 90 242 Z',
      '#F5D0A9', false);
    fl(g,
      'M 128 244 C 132 248 136 252 138 256 C 140 260 136 262 132 260 C 128 258 126 254 128 244 Z',
      '#F5D0A9', false);

    // === WATCH fill (godfather left wrist) ===
    fe(g, 'circle', { cx: 194, cy: 255, r: 3, fill: '#78909C' }, false);
    fe(g, 'circle', { cx: 194, cy: 255, r: 1.5, fill: '#B0BEC5' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, glasses glare, smiles, cheeks, goatee
  //          shadow, micro-dots, stone mortar, sun highlight, shoe hints
  // =====================================================================
  (g, a) => {
    // === EYE SHINES — godmother ===
    fe(g, 'circle', { cx: 102, cy: 85, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 122, cy: 85, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 106, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 126, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === EYE SHINES — baby ===
    fe(g, 'circle', { cx: 129, cy: 186, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 143, cy: 186, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 133, cy: 190, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 147, cy: 190, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === EYE SHINES — godfather (behind glasses) ===
    fe(g, 'circle', { cx: 239, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 261, cy: 88, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 243, cy: 92, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 265, cy: 92, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // === GLASSES GLARE rectangles (white) ===
    fe(g, 'rect', { x: 234, y: 84, width: 8, height: 4, rx: 1, fill: '#FFFFFF', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 256, y: 84, width: 8, height: 4, rx: 1, fill: '#FFFFFF', opacity: '0.25' }, false);

    // === GODMOTHER SMILE fill ===
    fl(g,
      'M 98 116 C 104 120 114 120 122 116 C 118 114 108 112 98 116 Z',
      '#E57373', false);
    // Teeth white
    fl(g, 'M 100 114 L 120 114 L 118 116 L 102 116 Z', '#FAFAFA', false);

    // === BABY SMILE fill ===
    fl(g,
      'M 132 202 C 136 204 140 204 144 202 C 142 200 134 200 132 202 Z',
      '#F48FB1', false);

    // === GODMOTHER CHEEKS ===
    fe(g, 'ellipse', { cx: 92, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 128, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // === BABY CHEEKS ===
    fe(g, 'ellipse', { cx: 124, cy: 202, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);
    fe(g, 'ellipse', { cx: 146, cy: 202, rx: 6, ry: 3, fill: '#FFAB91', opacity: '0.4' }, a);

    // === GOATEE SHADOW ===
    fl(g,
      'M 244 120 C 248 124 254 128 258 128 C 262 126 266 122 268 118 C 264 124 258 130 252 132 C 246 130 242 126 244 120 Z',
      '#5D4037', false);

    // === SHIRT MICRO-DOT pattern layer (godfather — subtle repeat) ===
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 5; col++) {
        const cx = 220 + col * 14 + (row % 2 === 0 ? 0 : 7);
        const cy = 174 + row * 13;
        if (cy < 306) {
          fe(g, 'circle', { cx, cy, r: 0.4, fill: '#BDBDBD', opacity: '0.5' }, false);
        }
      }
    }

    // === STONE MORTAR LINES — horizontal and vertical ===
    // Horizontal mortar
    pp(g, [
      'M 0 40 L 126 40',
      'M 232 38 L 360 38',
      'M 0 80 L 124 80',
      'M 234 78 L 360 78',
      'M 0 120 L 360 120',
      'M 0 160 L 360 160',
      'M 0 200 L 54 200',
      'M 298 200 L 360 200',
      'M 0 240 L 46 240',
      'M 308 240 L 360 240'
    ], false, lt);
    // Vertical mortar
    pp(g, [
      'M 58 0 L 58 40',
      'M 128 0 L 128 80',
      'M 72 42 L 72 80',
      'M 310 0 L 310 120',
      'M 234 0 L 234 80',
      'M 132 120 L 132 160',
      'M 226 120 L 226 160',
      'M 296 120 L 296 160'
    ], false, lt);

    // === SUN HIGHLIGHT warm spot on wall ===
    fe(g, 'ellipse', { cx: 180, cy: 110, rx: 30, ry: 18, fill: '#FFE082', opacity: '0.08' }, false);

    // === SHOE HINTS at bottom ===
    // Godmother shoe hints
    fe(g, 'ellipse', { cx: 80, cy: 424, rx: 12, ry: 4, fill: '#1A237E', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 140, cy: 424, rx: 12, ry: 4, fill: '#1A237E', opacity: '0.6' }, false);
    // Godfather shoe hints
    fe(g, 'ellipse', { cx: 224, cy: 424, rx: 14, ry: 5, fill: '#263238', opacity: '0.6' }, false);
    fe(g, 'ellipse', { cx: 276, cy: 424, rx: 14, ry: 5, fill: '#263238', opacity: '0.6' }, false);

    // === GODFATHER MOUTH COLOR ===
    fl(g,
      'M 242 120 C 248 124 258 124 264 120 C 260 118 246 118 242 120 Z',
      '#C9877A', false);

    // === BABY EYE WHITES ===
    fl(g, 'M 124 186 C 126 182 130 180 134 182 C 138 184 138 190 134 192 C 130 194 124 192 124 186 Z', '#FFFFFF', false);
    fl(g, 'M 138 186 C 140 182 144 180 148 182 C 152 184 152 190 148 192 C 144 194 138 192 138 186 Z', '#FFFFFF', false);

    // === GODMOTHER EYE WHITES ===
    fl(g, 'M 96 84 C 98 80 102 78 106 80 C 110 82 110 86 108 90 C 104 92 96 90 96 84 Z', '#FFFFFF', false);
    fl(g, 'M 116 84 C 118 80 122 78 126 80 C 130 82 130 86 128 90 C 124 92 116 90 116 84 Z', '#FFFFFF', false);

    // === GODFATHER EYE WHITES ===
    fl(g, 'M 234 88 C 236 84 240 82 244 84 C 248 86 248 92 244 94 C 240 96 234 94 234 88 Z', '#FFFFFF', false);
    fl(g, 'M 256 88 C 258 84 262 82 266 84 C 270 86 270 92 266 94 C 262 96 256 94 256 88 Z', '#FFFFFF', false);

    // === WINDOW FRAME divider lines (crisp white over glass) ===
    fe(g, 'rect', { x: 178, y: 14, width: 4, height: 50, fill: '#FAFAFA' }, false);
    fe(g, 'rect', { x: 140, y: 37, width: 80, height: 4, fill: '#FAFAFA' }, false);
  }
];
