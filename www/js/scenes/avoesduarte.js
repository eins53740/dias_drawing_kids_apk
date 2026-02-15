// ==============================================================
// SCENE: AVÓS DUARTE — Grandparents Duarte with baby Miguel
// Grandfather (center-left, bald, glasses, goatee, striped shirt)
// Grandmother (right, gray-blonde hair, glasses, navy blouse, pearls)
// Baby Miguel (on grandfather's lap, huge smile)
// Background: rustic stone wall, dark wooden door, flower boxes
// ==============================================================
const avoesduarteLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Floor / seat line
    pp(g, ['M 0 395 L 360 395'], a, lt);
    // Grandfather zone (center-left)
    pp(g, ['M 70 30 L 70 395', 'M 250 30 L 250 395'], a, lt);
    // Grandmother zone (right)
    pp(g, ['M 200 30 L 200 395', 'M 350 30 L 350 395'], a, lt);
    // Head-line guides
    pp(g, ['M 70 140 L 250 140'], a, lt);
    pp(g, ['M 200 150 L 350 150'], a, lt);
    // Baby zone on grandfather's lap
    pp(g, ['M 110 220 L 210 220', 'M 110 220 L 110 360', 'M 210 220 L 210 360'], a, lt);
    // Grandfather head center cross
    pp(g, ['M 160 70 L 160 170', 'M 120 120 L 200 120'], a, lt);
    // Grandmother head center cross
    pp(g, ['M 276 80 L 276 180', 'M 240 130 L 312 130'], a, lt);
  },

  // Layer 1: Bodies — proper seated proportions
  (g, a) => {
    // === GRANDFATHER (center-left) ===
    // Head — round, slightly wider face
    pp(g, [
      'M 160 68 C 130 68 116 88 116 112 C 116 136 130 156 148 162 C 154 164 157 166 160 167 C 163 166 166 164 172 162 C 190 156 204 136 204 112 C 204 88 190 68 160 68 Z'
    ], a);
    // Neck
    pp(g, ['M 148 165 L 146 182', 'M 172 165 L 174 182'], a);
    // Torso — seated, broad
    pp(g, [
      'M 100 210 C 112 192 136 182 160 182 C 184 182 208 192 220 210 L 224 395 L 96 395 Z'
    ], a);
    // Left arm resting / holding baby
    pp(g, ['M 104 214 C 96 228 90 248 88 268 C 86 284 88 296 92 306'], a);
    // Right arm on baby's other side
    pp(g, ['M 216 214 C 224 228 228 248 226 268 C 225 284 222 296 218 306'], a);

    // === GRANDMOTHER (right) ===
    // Head — slightly narrower, elegant
    pp(g, [
      'M 276 78 C 250 78 238 96 238 118 C 238 140 250 158 266 164 C 270 166 273 168 276 169 C 279 168 282 166 286 164 C 302 158 314 140 314 118 C 314 96 302 78 276 78 Z'
    ], a);
    // Neck
    pp(g, ['M 266 167 L 264 184', 'M 286 167 L 288 184'], a);
    // Torso — seated, slightly turned toward baby
    pp(g, [
      'M 232 212 C 242 196 258 186 276 186 C 294 186 310 196 320 212 L 324 395 L 228 395 Z'
    ], a);
    // Left arm
    pp(g, ['M 236 216 C 228 230 222 250 220 268'], a);
    // Right arm
    pp(g, ['M 316 216 C 324 230 328 248 330 266'], a);

    // === BABY MIGUEL (on grandfather's lap) ===
    // Head — large round baby head
    pp(g, [
      'M 160 228 C 140 228 130 242 130 258 C 130 274 140 290 152 296 C 156 298 158 299 160 300 C 162 299 164 298 168 296 C 180 290 190 274 190 258 C 190 242 180 228 160 228 Z'
    ], a);
    // Baby body — small torso on lap
    pp(g, [
      'M 142 298 L 140 310 C 140 316 146 320 160 320 C 174 316 180 310 178 298'
    ], a);
    // Baby legs dangling
    pp(g, [
      'M 140 318 C 136 334 130 350 128 368 C 127 376 130 384 136 388',
      'M 178 318 C 182 334 188 350 190 368 C 191 376 188 384 182 388'
    ], a);
  },

  // Layer 2: Faces — eyes, glasses, noses, mouths, goatee, baby smile
  (g, a) => {
    // === GRANDFATHER FACE ===
    // Eyes — almond shapes
    pp(g, [
      'M 140 110 C 142 104 148 102 153 106 C 158 110 156 116 152 118 C 148 120 140 116 140 110 Z',
      'M 168 110 C 170 104 176 102 181 106 C 186 110 184 116 180 118 C 176 120 168 116 168 110 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 149, cy: 111, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 177, cy: 111, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    // Glasses — rectangular, thick frames
    pp(g, [
      // Left lens
      'M 134 104 L 160 104 L 160 122 L 134 122 Z',
      // Right lens
      'M 164 104 L 190 104 L 190 122 L 164 122 Z',
      // Bridge
      'M 160 112 L 164 112',
      // Left arm
      'M 134 112 L 118 108',
      // Right arm
      'M 190 112 L 206 108'
    ], a);
    // Nose — wider, rounded
    pp(g, ['M 162 108 C 160 118 158 128 156 134', 'M 152 136 C 156 140 160 142 164 140 C 168 138 170 134 168 132'], a);
    // Mouth — warm, slight smile, looking down at baby
    pp(g, ['M 148 148 C 152 144 158 142 162 144 C 166 142 170 144 174 148'], a);
    pp(g, ['M 150 150 C 156 154 164 154 172 150'], a);
    // Goatee — multiple short strokes for texture
    pp(g, [
      'M 150 152 C 148 156 148 162 152 166',
      'M 154 152 C 152 158 152 164 156 168',
      'M 158 154 C 157 160 157 166 160 170',
      'M 164 154 C 165 160 165 166 162 170',
      'M 168 152 C 170 158 170 164 166 168',
      'M 172 150 C 174 156 174 162 170 166'
    ], a);
    // Chin outline through goatee
    pp(g, ['M 148 152 C 146 160 148 168 154 172 C 160 174 166 172 170 168 C 176 162 178 154 176 150'], a, lt);
    // Eyebrows — thick, expressive
    pp(g, ['M 136 100 C 142 96 150 95 158 98', 'M 166 98 C 174 95 182 96 188 100'], a);

    // === GRANDMOTHER FACE ===
    // Eyes — slightly smaller, elegant
    pp(g, [
      'M 258 116 C 260 110 266 108 271 112 C 276 116 274 122 270 124 C 266 126 258 122 258 116 Z',
      'M 282 116 C 284 110 290 108 295 112 C 300 116 298 122 294 124 C 290 126 282 122 282 116 Z'
    ], a);
    // Pupils
    fe(g, 'circle', { cx: 267, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    fe(g, 'circle', { cx: 291, cy: 118, r: 2.8, fill: a ? HL : '#5E4023' }, a);
    // Glasses — rectangular, similar to grandfather
    pp(g, [
      // Left lens
      'M 254 110 L 278 110 L 278 126 L 254 126 Z',
      // Right lens
      'M 282 110 L 306 110 L 306 126 L 282 126 Z',
      // Bridge
      'M 278 118 L 282 118',
      // Left arm
      'M 254 118 L 240 114',
      // Right arm
      'M 306 118 L 320 114'
    ], a);
    // Eyebrows — thinner, arched
    pp(g, ['M 254 106 C 260 102 268 101 276 104', 'M 282 104 C 290 101 298 102 304 106'], a);
    // Nose — delicate
    pp(g, ['M 278 112 C 277 120 276 128 274 134', 'M 270 136 C 274 140 278 142 282 140'], a);
    // Mouth — warm smile, turned toward baby
    pp(g, ['M 264 148 C 268 144 274 142 278 144 C 282 142 286 144 290 148'], a);
    pp(g, ['M 266 150 C 272 156 280 156 288 150'], a);
    // Smile lines
    pp(g, ['M 260 146 C 258 142 258 138 260 136', 'M 294 146 C 296 142 296 138 294 136'], a, lt);

    // === BABY MIGUEL FACE ===
    // Eyes — big round baby eyes
    pp(g, [
      'M 144 254 C 146 248 152 246 157 250 C 162 254 160 260 156 262 C 152 264 144 260 144 254 Z',
      'M 166 254 C 168 248 174 246 179 250 C 184 254 182 260 178 262 C 174 264 166 260 166 254 Z'
    ], a);
    // Big round pupils
    fe(g, 'circle', { cx: 153, cy: 256, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 175, cy: 256, r: 3.5, fill: a ? HL : '#3E2518' }, a);
    // Baby nose — tiny button
    pp(g, ['M 162 260 C 160 264 159 268 161 270 C 163 272 165 270 164 266'], a);
    // HUGE SMILE — mouth wide open with joy, teeth showing
    pp(g, [
      'M 146 276 C 150 272 156 270 160 272 C 164 270 170 272 176 276',
      'M 146 276 C 150 288 156 294 160 294 C 164 294 170 288 176 276'
    ], a);
    // Upper teeth — small rectangles
    pp(g, [
      'M 152 278 L 152 282 L 156 282 L 156 278',
      'M 158 278 L 158 282 L 162 282 L 162 278',
      'M 164 278 L 164 282 L 168 282 L 168 278'
    ], a);
    // Lower teeth hint
    pp(g, ['M 154 288 L 166 288'], a, lt);
    // Baby ears
    pp(g, [
      'M 130 254 C 124 250 120 256 120 264 C 120 272 124 278 130 278',
      'M 190 254 C 196 250 200 256 200 264 C 200 272 196 278 190 278'
    ], a);
    // Baby cheek lines
    pp(g, ['M 138 270 C 140 274 142 276 144 276', 'M 182 270 C 180 274 178 276 176 276'], a, lt);
  },

  // Layer 3: Hair and accessories
  (g, a) => {
    // === GRANDFATHER — bald dome with gray side hair ===
    // Bald dome outline — smooth curve over top of head
    pp(g, [
      'M 120 108 C 118 84 130 64 150 58 C 160 54 170 54 180 58 C 196 64 206 82 204 108'
    ], a);
    // Shine lines on bald head
    pp(g, [
      'M 140 72 C 150 66 168 64 178 70',
      'M 144 82 C 154 76 172 74 182 80'
    ], a, lt);
    // Left side hair — gray, short
    pp(g, [
      'M 116 106 C 114 112 112 120 114 128 C 115 134 116 140 118 144'
    ], a);
    // Right side hair
    pp(g, [
      'M 204 106 C 206 112 208 120 206 128 C 205 134 204 140 202 144'
    ], a);
    // Side hair texture — small strokes
    const gSideHair = [
      [114, 110], [113, 116], [114, 122], [115, 128], [116, 134],
      [205, 110], [206, 116], [205, 122], [204, 128], [203, 134]
    ];
    gSideHair.forEach(([cx, cy]) => {
      pp(g, [`M ${cx} ${cy} L ${cx - 2} ${cy + 4}`], a, lt);
    });
    // Ears — visible, slightly large (older man)
    pp(g, [
      'M 116 108 C 108 104 104 110 104 120 C 104 130 108 138 116 138',
      'M 204 108 C 212 104 216 110 216 120 C 216 130 212 138 204 138'
    ], a);

    // === GRANDMOTHER — long gray-blonde hair pulled back, volume ===
    // Top of hair with volume
    pp(g, [
      'M 242 114 C 240 90 250 72 268 66 C 280 62 292 64 302 72 C 312 80 318 94 316 114'
    ], a);
    // Hair texture — swept back
    pp(g, [
      'M 248 108 C 252 92 262 78 276 72 C 290 68 302 74 310 86 C 314 94 316 106 314 114',
      'M 256 82 C 266 74 282 70 294 78',
      'M 252 94 C 262 86 278 82 292 88'
    ], a, lt);
    // Hair flowing down past shoulders — long
    pp(g, [
      'M 242 118 C 238 132 234 150 232 168 C 230 186 228 200 226 214',
      'M 316 118 C 320 132 322 150 324 168 C 326 186 326 200 326 212'
    ], a);
    // Hair texture strands on sides
    pp(g, [
      'M 236 140 C 234 154 232 168 230 180',
      'M 318 140 C 320 154 322 168 324 180'
    ], a, lt);

    // === BABY — fine light hair ===
    pp(g, [
      'M 134 252 C 132 238 140 226 154 220 C 164 216 174 218 182 226 C 188 234 192 246 190 256'
    ], a);
    // Baby hair wisps
    pp(g, [
      'M 148 224 C 154 218 164 216 172 222',
      'M 142 232 C 148 226 158 222 168 226'
    ], a, lt);
  },

  // Layer 4: Clothing details
  (g, a) => {
    // === GRANDFATHER — striped shirt with collar open ===
    // Collar — open V-neck
    pp(g, [
      'M 142 184 C 136 180 130 182 128 188 L 136 200',
      'M 178 184 C 184 180 190 182 192 188 L 184 200'
    ], a);
    // Collar points
    pp(g, [
      'M 136 200 C 142 196 150 192 160 190 C 170 192 178 196 184 200'
    ], a);
    // Vertical stripes on shirt — blue/white pattern
    for (let x = 108; x <= 216; x += 10) {
      pp(g, [`M ${x} 210 L ${x} 395`], a, lt);
    }
    // Shirt seam at shoulder
    pp(g, ['M 104 212 C 108 208 114 206 120 206', 'M 216 212 C 212 208 206 206 200 206'], a, lt);
    // Sleeve edges
    pp(g, ['M 98 232 C 94 236 90 242 88 248', 'M 222 232 C 226 236 228 242 228 248'], a, lt);

    // === GRANDMOTHER — navy blouse with chiffon neckline ===
    // Shoulder seams
    pp(g, [
      'M 236 212 C 240 208 248 204 256 204',
      'M 316 212 C 312 208 304 204 296 204'
    ], a, lt);
    // Chiffon neckline — sheer overlay with delicate texture
    pp(g, [
      'M 256 190 C 262 194 270 198 276 198 C 282 198 290 194 296 190'
    ], a);
    // Chiffon texture — light, airy lines
    pp(g, [
      'M 258 192 C 264 196 272 200 278 198 C 284 196 290 192 294 188',
      'M 262 194 C 268 198 276 200 282 198 C 288 194 292 190 296 186',
      'M 260 190 C 266 192 274 196 280 194 C 286 192 290 188 294 184'
    ], a, lt);
    // Blouse V-neckline
    pp(g, ['M 258 196 C 264 204 270 210 276 212 C 282 210 288 204 294 196'], a);

    // === PEARL NECKLACE — loop of small circles ===
    for (let i = 0; i < 11; i++) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2.2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    }

    // === BABY CLOTHES ===
    // White shirt neckline
    pp(g, ['M 144 300 C 148 296 154 294 160 294 C 166 294 172 296 176 300'], a);
    // Baby white shirt
    pp(g, ['M 140 310 L 138 340', 'M 180 310 L 182 340'], a, lt);
    // Dark pants
    pp(g, ['M 138 340 L 134 368', 'M 182 340 L 186 368'], a, lt);
    // Pants waistband
    pp(g, ['M 136 338 L 184 338'], a);
  },

  // Layer 5: Hands, watch, baby hands/feet
  (g, a) => {
    // === GRANDFATHER HANDS — cradling baby with fingers ===
    // Left hand under baby
    pp(g, [
      'M 92 300 C 88 292 82 290 78 296 C 74 302 78 310 84 308 L 100 298'
    ], a);
    // Left hand fingers — individual
    pp(g, [
      'M 80 294 C 76 288 72 282 74 278 C 76 274 80 274 82 278',
      'M 78 298 C 72 294 68 286 70 282 C 72 278 76 278 78 282',
      'M 76 302 C 70 298 66 292 68 288 C 70 284 74 284 76 288',
      'M 82 306 C 78 304 74 300 74 296 C 76 292 80 292 82 296'
    ], a);
    // Thumb
    pp(g, ['M 86 292 C 90 286 94 284 96 288 C 98 292 94 296 90 296'], a);

    // Right hand on baby's side
    pp(g, [
      'M 218 300 C 222 292 228 290 232 296 C 236 302 232 310 226 308 L 210 298'
    ], a);
    // Right hand fingers
    pp(g, [
      'M 230 294 C 234 288 238 282 236 278 C 234 274 230 274 228 278',
      'M 232 298 C 238 294 242 286 240 282 C 238 278 234 278 232 282',
      'M 234 302 C 240 298 244 292 242 288 C 240 284 236 284 234 288',
      'M 228 306 C 232 304 236 300 236 296 C 234 292 230 292 228 296'
    ], a);
    // Thumb
    pp(g, ['M 224 292 C 220 286 216 284 214 288 C 212 292 216 296 220 296'], a);

    // Watch on grandfather's left wrist
    pp(g, ['M 86 280 L 96 278 L 98 286 L 88 288 Z'], a);
    // Watch band
    pp(g, ['M 84 282 L 80 278', 'M 90 290 L 94 296'], a, lt);
    // Watch face circle
    fe(g, 'circle', { cx: 92, cy: 283, r: 4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);

    // === BABY TINY HANDS ===
    fe(g, 'circle', { cx: 136, cy: 310, r: 7, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 184, cy: 310, r: 7, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Tiny finger bumps on baby hands
    pp(g, [
      'M 130 306 C 128 304 128 302 130 300',
      'M 132 304 C 130 302 130 300 132 298',
      'M 190 306 C 192 304 192 302 190 300',
      'M 188 304 C 190 302 190 300 188 298'
    ], a, lt);

    // === BABY BARE FEET ===
    // Left foot
    pp(g, [
      'M 128 370 C 124 374 120 380 122 386 C 124 392 130 394 134 390 C 138 386 136 378 132 372'
    ], a);
    // Left toes
    pp(g, ['M 122 384 C 120 382 118 380 120 378', 'M 124 386 C 122 384 120 382 122 380'], a, lt);
    // Right foot
    pp(g, [
      'M 190 370 C 194 374 198 380 196 386 C 194 392 188 394 184 390 C 180 386 182 378 186 372'
    ], a);
    // Right toes
    pp(g, ['M 196 384 C 198 382 200 380 198 378', 'M 194 386 C 196 384 198 382 196 380'], a, lt);
  },

  // Layer 6: Background — stone wall, wooden door, flower boxes, bench
  (g, a) => {
    // === STONE WALL — irregular rectangles ===
    const stoneRows = [
      { y: 0, h: 32, offsets: [0, 58, 110, 175, 240, 300] },
      { y: 36, h: 30, offsets: [-15, 45, 105, 160, 225, 285, 345] },
      { y: 70, h: 34, offsets: [5, 65, 130, 195, 255, 320] },
      { y: 108, h: 28, offsets: [-10, 50, 115, 175, 240, 305] },
      { y: 140, h: 32, offsets: [0, 60, 125, 190, 250, 315] },
      { y: 176, h: 30, offsets: [-20, 42, 100, 165, 230, 290, 350] },
      { y: 210, h: 34, offsets: [10, 75, 140, 200, 265, 330] },
      { y: 248, h: 28, offsets: [-5, 55, 118, 180, 245, 310] },
      { y: 280, h: 32, offsets: [0, 62, 128, 192, 255, 318] },
      { y: 316, h: 30, offsets: [-12, 48, 110, 172, 238, 300] },
      { y: 350, h: 34, offsets: [8, 70, 135, 200, 260, 325] }
    ];
    stoneRows.forEach(row => {
      for (let i = 0; i < row.offsets.length - 1; i++) {
        const x1 = Math.max(0, row.offsets[i]);
        const x2 = Math.min(360, row.offsets[i + 1] - 4);
        const w = x2 - x1;
        if (w > 10) {
          pp(g, [`M ${x1} ${row.y} L ${x2} ${row.y} L ${x2} ${row.y + row.h} L ${x1} ${row.y + row.h} Z`], a, lt);
        }
      }
    });

    // === DARK WOODEN DOOR / WINDOW — behind left side ===
    pp(g, [
      'M 10 30 L 75 30 L 75 200 L 10 200 Z'
    ], a);
    // Door frame
    pp(g, [
      'M 10 30 L 75 30',
      'M 10 30 L 10 200',
      'M 75 30 L 75 200',
      'M 10 200 L 75 200'
    ], a);
    // Door center divider
    pp(g, ['M 42 30 L 42 200'], a);
    // Door wood grain
    pp(g, ['M 26 40 L 26 190', 'M 58 40 L 58 190'], a, lt);

    // === FLOWER BOXES with plants ===
    // Left flower box on wall
    pp(g, ['M 4 210 L 52 210 L 52 240 L 4 240 Z'], a);
    // Plants in left box — green stems and leaves
    pp(g, [
      'M 14 208 C 12 196 16 186 20 180 C 24 174 28 178 26 186',
      'M 28 208 C 26 194 30 184 34 178 C 38 172 42 176 40 184',
      'M 42 208 C 40 198 44 190 48 184 C 52 178 54 182 50 190'
    ], a);
    // Leaves
    pp(g, [
      'M 16 190 C 12 186 10 180 14 178 C 18 176 20 182 18 188',
      'M 34 186 C 30 182 28 176 32 174 C 36 172 38 178 36 184',
      'M 46 192 C 50 188 54 182 50 180 C 46 178 44 184 46 190'
    ], a);

    // Right flower box hint
    pp(g, ['M 336 240 L 358 240 L 358 268 L 336 268 Z'], a, lt);
    pp(g, [
      'M 342 238 C 340 228 344 220 348 214',
      'M 352 238 C 350 230 354 222 356 218'
    ], a, lt);

    // === SEAT / BENCH ===
    pp(g, ['M 86 388 L 230 388 L 230 395 L 86 395 Z'], a);
    // Bench legs
    pp(g, ['M 92 395 L 92 410', 'M 224 395 L 224 410'], a, lt);
    // Wooden pedestal hint (right side)
    pp(g, ['M 312 370 L 340 370 L 340 395 L 312 395 Z'], a, lt);
  },

  // Layer 7: Color — figures (skin, clothing base fills)
  (g, a) => {
    // === GRANDFATHER SKIN — warmer tone ===
    fl(g, 'M 160 68 C 130 68 116 88 116 112 C 116 136 130 156 148 162 C 154 164 157 166 160 167 C 163 166 166 164 172 162 C 190 156 204 136 204 112 C 204 88 190 68 160 68 Z', '#EDBE8C', a);
    // Ears skin
    fe(g, 'ellipse', { cx: 110, cy: 122, rx: 7, ry: 14, fill: '#EDBE8C' }, false);
    fe(g, 'ellipse', { cx: 210, cy: 122, rx: 7, ry: 14, fill: '#EDBE8C' }, false);
    // Neck fill
    fe(g, 'rect', { x: 146, y: 164, width: 28, height: 20, rx: 5, fill: '#DEB07A' }, false);
    // Grandfather shirt — white base
    fl(g, 'M 100 210 C 112 192 136 182 160 182 C 184 182 208 192 220 210 L 224 395 L 96 395 Z', '#FAFAFA', a);

    // === GRANDMOTHER SKIN — lighter, elegant tone ===
    fl(g, 'M 276 78 C 250 78 238 96 238 118 C 238 140 250 158 266 164 C 270 166 273 168 276 169 C 279 168 282 166 286 164 C 302 158 314 140 314 118 C 314 96 302 78 276 78 Z', '#FADCC2', a);
    // Neck fill
    fe(g, 'rect', { x: 264, y: 166, width: 24, height: 20, rx: 5, fill: '#F0C8A8' }, false);
    // Grandmother blouse — navy blue
    fl(g, 'M 232 212 C 242 196 258 186 276 186 C 294 186 310 196 320 212 L 324 395 L 228 395 Z', '#1A237E', a);

    // === BABY SKIN — pinkish, soft ===
    fl(g, 'M 160 228 C 140 228 130 242 130 258 C 130 274 140 290 152 296 C 156 298 158 299 160 300 C 162 299 164 298 168 296 C 180 290 190 274 190 258 C 190 242 180 228 160 228 Z', '#F5D0A9', a);
    // Baby ears
    fe(g, 'ellipse', { cx: 125, cy: 264, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 195, cy: 264, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Baby white shirt
    fl(g, 'M 142 298 C 142 296 148 292 160 292 C 172 292 178 296 178 298 L 182 340 L 138 340 Z', '#FAFAFA', false);
    // Baby dark pants
    fl(g, 'M 136 338 L 134 370 L 186 370 L 184 338 Z', '#1A237E', false);
    // Baby feet skin
    fe(g, 'ellipse', { cx: 127, cy: 384, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
    fe(g, 'ellipse', { cx: 191, cy: 384, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
    // Baby hands skin
    fe(g, 'circle', { cx: 136, cy: 310, r: 7, fill: '#F5D0A9' }, false);
    fe(g, 'circle', { cx: 184, cy: 310, r: 7, fill: '#F5D0A9' }, false);
    // Grandfather hands skin
    fl(g, 'M 92 300 C 88 292 82 290 78 296 C 74 302 78 310 84 308 L 100 298 Z', '#DEB07A', false);
    fl(g, 'M 218 300 C 222 292 228 290 232 296 C 236 302 232 310 226 308 L 210 298 Z', '#DEB07A', false);
    // Grandfather arm skin
    fl(g, 'M 88 268 C 86 274 86 280 88 286 L 98 286 C 96 280 96 274 98 268 Z', '#DEB07A', false);
    fl(g, 'M 226 268 C 228 274 228 280 226 286 L 216 286 C 218 280 218 274 216 268 Z', '#DEB07A', false);
  },

  // Layer 8: Color — scene (wall, door, plants, hair, pearls, stripes)
  (g, a) => {
    // === STONE WALL fill — subtle texture ===
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 400, fill: '#A1887F', opacity: '0.12' }, a);
    // Individual stone tint variation
    const stoneTints = [
      { x: 5, y: 5, w: 52, h: 28, c: '#BCAAA4', o: '0.15' },
      { x: 115, y: 40, w: 48, h: 26, c: '#D7CCC8', o: '0.12' },
      { x: 200, y: 75, w: 52, h: 30, c: '#A1887F', o: '0.1' },
      { x: 70, y: 112, w: 50, h: 24, c: '#BCAAA4', o: '0.14' },
      { x: 260, y: 145, w: 48, h: 28, c: '#D7CCC8', o: '0.1' },
      { x: 10, y: 250, w: 46, h: 28, c: '#BCAAA4', o: '0.12' },
      { x: 320, y: 284, w: 38, h: 28, c: '#D7CCC8', o: '0.1' }
    ];
    stoneTints.forEach(s => {
      fe(g, 'rect', { x: s.x, y: s.y, width: s.w, height: s.h, rx: 2, fill: s.c, opacity: s.o }, false);
    });

    // === DARK WOODEN DOOR ===
    fe(g, 'rect', { x: 12, y: 32, width: 61, height: 166, rx: 2, fill: '#4E342E' }, a);
    // Door wood grain highlights
    fe(g, 'rect', { x: 14, y: 34, width: 26, height: 162, fill: '#5D4037', opacity: '0.5' }, false);
    fe(g, 'rect', { x: 44, y: 34, width: 26, height: 162, fill: '#5D4037', opacity: '0.5' }, false);

    // === FLOWER BOX ===
    fe(g, 'rect', { x: 6, y: 212, width: 44, height: 26, rx: 2, fill: '#795548' }, false);
    // Plant fills — green foliage
    fl(g, 'M 10 210 C 8 196 14 184 20 178 C 26 172 32 176 30 186 L 30 210 Z', '#4CAF50', false);
    fl(g, 'M 24 210 C 22 194 28 182 34 176 C 40 170 44 174 42 184 L 42 210 Z', '#388E3C', false);
    fl(g, 'M 38 210 C 36 200 40 190 46 184 C 50 180 54 184 50 192 L 50 210 Z', '#66BB6A', false);

    // === GRANDFATHER BALD HEAD — skin on top, gray on sides ===
    fl(g, 'M 120 108 C 118 84 130 64 150 58 C 160 54 170 54 180 58 C 196 64 206 82 204 108 L 200 106 C 202 86 192 70 178 62 C 168 58 152 60 142 68 C 132 76 124 90 122 106 Z', '#EDBE8C', false);
    // Gray side hair fill
    fe(g, 'rect', { x: 111, y: 106, width: 7, height: 34, rx: 2, fill: '#9E9E9E' }, false);
    fe(g, 'rect', { x: 202, y: 106, width: 7, height: 34, rx: 2, fill: '#9E9E9E' }, false);

    // === GRANDMOTHER HAIR fill ===
    fl(g, 'M 242 114 C 240 90 250 72 268 66 C 280 62 292 64 302 72 C 312 80 318 94 316 114 L 312 112 C 314 96 308 82 300 76 C 292 68 280 66 268 70 C 256 76 246 92 246 112 Z', '#B0A090', false);
    // Hair flowing down — side fills
    fl(g, 'M 242 118 C 238 132 234 150 232 168 C 230 186 228 200 226 214 L 230 214 C 232 200 234 186 236 168 C 238 150 240 134 244 118 Z', '#B0A090', false);
    fl(g, 'M 316 118 C 320 132 322 150 324 168 C 326 186 326 200 326 212 L 322 212 C 322 200 322 186 320 168 C 318 150 316 134 316 118 Z', '#B0A090', false);

    // === BABY HAIR fill ===
    fl(g, 'M 134 252 C 132 238 140 226 154 220 C 164 216 174 218 182 226 C 188 234 192 246 190 256 L 186 254 C 186 244 184 236 178 230 C 172 224 164 222 156 224 C 148 228 140 238 138 250 Z', '#A1887F', false);

    // === BENCH ===
    fe(g, 'rect', { x: 86, y: 388, width: 144, height: 7, rx: 2, fill: '#8D6E63' }, false);

    // === PEARL NECKLACE fills ===
    for (let i = 0; i < 11; i++) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 2, fill: '#F5F5F5' }, false);
    }

    // === SHIRT STRIPE OVERLAYS (blue on white) ===
    for (let x = 108; x <= 214; x += 14) {
      fe(g, 'rect', { x, y: 210, width: 4, height: 185, fill: '#42A5F5', opacity: '0.25' }, false);
    }

    // === RIGHT FLOWER BOX ===
    fe(g, 'rect', { x: 338, y: 242, width: 18, height: 24, rx: 2, fill: '#795548', opacity: '0.6' }, false);
    fl(g, 'M 342 240 C 340 230 344 222 348 216 L 350 216 C 346 222 344 230 346 240 Z', '#4CAF50', false);

    // === PEDESTAL ===
    fe(g, 'rect', { x: 314, y: 372, width: 24, height: 23, rx: 2, fill: '#8D6E63', opacity: '0.5' }, false);
  },

  // Layer 9: Polish — eye shines, blush, reflections, goatee shadow, mouth color
  (g, a) => {
    // === EYE SHINES ===
    // Grandfather
    fe(g, 'circle', { cx: 147, cy: 109, r: 1.8, fill: 'white' }, a);
    fe(g, 'circle', { cx: 175, cy: 109, r: 1.8, fill: 'white' }, a);
    // Grandmother
    fe(g, 'circle', { cx: 265, cy: 116, r: 1.5, fill: 'white' }, a);
    fe(g, 'circle', { cx: 289, cy: 116, r: 1.5, fill: 'white' }, a);
    // Baby — larger, more alive
    fe(g, 'circle', { cx: 151, cy: 254, r: 2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 173, cy: 254, r: 2, fill: 'white' }, a);

    // === BABY CHEEK BLUSH ===
    fe(g, 'ellipse', { cx: 140, cy: 274, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.45' }, a);
    fe(g, 'ellipse', { cx: 180, cy: 274, rx: 10, ry: 5, fill: '#FFAB91', opacity: '0.45' }, a);

    // === GLASSES REFLECTIONS ===
    // Grandfather — small white rectangles on lenses
    fe(g, 'rect', { x: 138, y: 106, width: 8, height: 4, rx: 1, fill: 'white', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 168, y: 106, width: 8, height: 4, rx: 1, fill: 'white', opacity: '0.25' }, false);
    // Grandmother
    fe(g, 'rect', { x: 258, y: 112, width: 7, height: 3, rx: 1, fill: 'white', opacity: '0.25' }, false);
    fe(g, 'rect', { x: 286, y: 112, width: 7, height: 3, rx: 1, fill: 'white', opacity: '0.25' }, false);

    // === WATCH FILL ===
    fe(g, 'circle', { cx: 92, cy: 283, r: 3.5, fill: '#78909C' }, false);
    // Watch face detail
    fe(g, 'circle', { cx: 92, cy: 283, r: 1.5, fill: '#B0BEC5' }, false);
    // Watch band fill
    fe(g, 'rect', { x: 87, y: 278, width: 3, height: 6, rx: 1, fill: '#90A4AE' }, false);
    fe(g, 'rect', { x: 92, y: 288, width: 3, height: 6, rx: 1, fill: '#90A4AE' }, false);

    // === BABY MOUTH COLOR — huge open smile ===
    fl(g, 'M 146 276 C 150 288 156 294 160 294 C 164 294 170 288 176 276 Z', '#E57373', false);
    // Inside mouth — darker
    fl(g, 'M 150 280 C 154 290 158 292 160 292 C 162 292 166 290 170 280 Z', '#C62828', false);
    // Teeth fill — white
    fl(g, 'M 152 278 L 168 278 L 168 282 L 152 282 Z', '#FAFAFA', false);

    // === GRANDFATHER GOATEE SHADOW FILL ===
    fl(g, 'M 148 152 C 146 158 148 166 154 172 C 160 176 168 174 172 168 C 178 160 180 152 178 148 C 172 152 164 156 158 154 Z', '#9E9E9E', false);
    // Goatee texture overlay — slightly darker patches
    fl(g, 'M 152 156 C 150 162 152 168 158 172 C 162 174 166 172 168 168 C 172 162 174 156 172 152 Z', '#757575', false);

    // === GRANDMOTHER SMILE ===
    fl(g, 'M 266 150 C 272 156 280 156 288 150 Z', '#E57373', false);

    // === GRANDMOTHER BLOUSE NECKLINE SHEER EFFECT ===
    fe(g, 'ellipse', { cx: 276, cy: 196, rx: 20, ry: 8, fill: '#283593', opacity: '0.3' }, false);

    // === PEARL HIGHLIGHTS ===
    for (let i = 0; i < 11; i += 3) {
      const angle = Math.PI * 0.12 + (Math.PI * 0.76 / 10) * i;
      const cx = 276 + Math.cos(angle) * 24;
      const cy = 182 + Math.sin(angle) * 16;
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 0.8, fill: 'white', opacity: '0.7' }, false);
    }

    // === BALD HEAD SHINE ===
    fe(g, 'ellipse', { cx: 160, cy: 72, rx: 18, ry: 6, fill: 'white', opacity: '0.08' }, false);

    // === WARM EXPRESSION LINES ===
    // Grandfather smile lines (gentle)
    pp(g, ['M 142 146 C 140 142 140 138 142 134', 'M 178 146 C 180 142 180 138 178 134'], a, lt);
    // Grandmother crow's feet (gentle, elegant)
    pp(g, ['M 254 120 C 252 118 250 116 250 114', 'M 308 120 C 310 118 312 116 312 114'], a, lt);
  }
];
