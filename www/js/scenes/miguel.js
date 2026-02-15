const miguelLayers = [
  // =====================================================================
  // Layer 0: Composition guides — table edge, Miguel zone, chair outline
  // =====================================================================
  (g, a) => {
    // Table edge horizontal
    pp(g, ['M 0 240 L 360 240'], a, lt);
    // Table front drape guides
    pp(g, ['M 0 240 L 0 450', 'M 360 240 L 360 450'], a, lt);
    // Miguel vertical center guide (right side)
    pp(g, ['M 270 10 L 270 240'], a, lt);
    // Shoulder line guide
    pp(g, ['M 200 145 L 340 145'], a, lt);
    // Head zone circle guide
    pp(g, ['M 270 40 C 295 40 315 60 315 85 C 315 110 295 130 270 130 C 245 130 225 110 225 85 C 225 60 245 40 270 40 Z'], a, lt);
    // Chair back rectangle guide
    pp(g, ['M 210 25 L 335 25 L 335 220 L 210 220 Z'], a, lt);
    // Bottle zone guide
    pp(g, ['M 80 100 L 180 100 L 180 240 L 80 240 Z'], a, lt);
  },

  // =====================================================================
  // Layer 1: Miguel body — head, neck, shoulders, torso, arms
  // =====================================================================
  (g, a) => {
    // Head — slightly oval, child proportions
    pp(g, [
      'M 270 42 C 292 42 310 56 312 78 C 314 96 310 112 302 122 C 294 132 284 138 270 140 C 256 138 246 132 238 122 C 230 112 226 96 228 78 C 230 56 248 42 270 42 Z'
    ], a);
    // Neck
    pp(g, [
      'M 258 138 L 255 155',
      'M 282 138 L 285 155'
    ], a);
    // Shoulders and torso in hoodie — leaning forward
    pp(g, [
      'M 218 178 C 228 162 248 154 270 154 C 292 154 312 162 322 178 L 328 240 L 212 240 Z'
    ], a);
    // Left arm — reaching toward mouth
    pp(g, [
      'M 226 182 C 216 192 206 202 198 214 C 192 224 190 232 194 236 C 198 240 206 238 212 230 C 220 218 232 200 242 186'
    ], a);
    // Right arm — reaching toward cup on table
    pp(g, [
      'M 314 182 C 322 194 328 208 332 222 C 334 230 332 236 328 238 C 324 240 320 236 318 228 L 312 210'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face — eyes, brows, nose, eating grin with teeth, ears
  // =====================================================================
  (g, a) => {
    // Left eye — almond, lively
    pp(g, [
      'M 252 78 C 254 72 260 68 266 70 C 272 72 274 78 272 84 C 270 88 264 90 258 88 C 254 86 252 82 252 78 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 274 78 C 276 72 282 68 288 70 C 294 72 296 78 294 84 C 292 88 286 90 280 88 C 276 86 274 82 274 78 Z'
    ], a);
    // Left eyelid crease
    pp(g, ['M 254 72 C 258 68 264 66 270 68'], a, lt);
    // Right eyelid crease
    pp(g, ['M 276 72 C 280 68 286 66 292 68'], a, lt);
    // Left pupil
    fe(g, 'circle', { cx: 262, cy: 80, r: 3.8, fill: a ? HL : '#2D1B0E' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 284, cy: 80, r: 3.8, fill: a ? HL : '#2D1B0E' }, a);
    // Left eyebrow — slightly arched
    pp(g, ['M 250 66 C 256 60 264 58 272 62'], a);
    // Right eyebrow
    pp(g, ['M 278 62 C 286 58 294 60 300 66'], a);
    // Nose — bridge and nostrils
    pp(g, [
      'M 268 76 C 267 84 266 92 264 98',
      'M 260 100 C 263 106 267 108 270 108 C 273 108 277 106 280 100'
    ], a);
    // Nose bridge subtle line
    pp(g, ['M 270 76 C 269 82 268 88 267 94'], a, lt);
    // Open mouth — big eating grin, upper lip
    pp(g, [
      'M 252 114 C 256 110 264 108 270 108 C 276 108 284 110 288 114'
    ], a);
    // Lower lip curve — wide open grin
    pp(g, [
      'M 252 114 C 256 128 264 134 270 134 C 276 134 284 128 288 114'
    ], a);
    // Upper teeth row — 6 individual teeth
    pp(g, ['M 254 114 L 286 114'], a);
    pp(g, [
      'M 259 114 L 259 119',
      'M 264 114 L 264 120',
      'M 270 114 L 270 120',
      'M 276 114 L 276 120',
      'M 281 114 L 281 119'
    ], a, lt);
    // Lower teeth hint
    pp(g, ['M 258 126 L 282 126'], a, lt);
    pp(g, [
      'M 264 126 L 264 122',
      'M 270 126 L 270 121',
      'M 276 126 L 276 122'
    ], a, lt);
    // Left ear — slightly prominent
    pp(g, [
      'M 226 76 C 220 72 216 78 216 86 C 216 94 220 100 226 98'
    ], a);
    // Left ear inner detail
    pp(g, ['M 222 80 C 220 84 220 90 222 94'], a, lt);
    // Right ear — slightly prominent
    pp(g, [
      'M 314 76 C 320 72 324 78 324 86 C 324 94 320 100 314 98'
    ], a);
    // Right ear inner detail
    pp(g, ['M 318 80 C 320 84 320 90 318 94'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair + hoodie details — texture, hood, drawstrings, seam
  // =====================================================================
  (g, a) => {
    // Hair outline — short, dirty blonde, swept to the right
    pp(g, [
      'M 230 74 C 228 58 236 42 252 34 C 264 28 280 28 294 34 C 306 42 312 58 310 74'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 234 70 C 236 56 244 44 258 38 C 270 34 284 36 294 44 C 302 52 306 64 304 72'
    ], a);
    // Hair texture — swept strands
    pp(g, [
      'M 248 36 C 258 30 270 30 282 36',
      'M 240 46 C 252 38 266 36 280 40',
      'M 236 56 C 248 48 262 44 276 48',
      'M 244 64 C 256 58 268 56 280 60'
    ], a, lt);
    // Hair wisp on forehead
    pp(g, [
      'M 258 42 C 262 46 268 48 274 46',
      'M 252 50 C 256 54 264 56 270 54'
    ], a, lt);
    // Hoodie body — yellow fabric
    pp(g, [
      'M 218 178 C 228 162 248 154 270 154 C 292 154 312 162 322 178 L 328 240 L 212 240 Z'
    ], a);
    // Hood neckline — lying flat behind neck
    pp(g, [
      'M 232 168 C 244 160 256 156 270 156 C 284 156 296 160 308 168'
    ], a);
    // Hood draped behind shoulders
    pp(g, [
      'M 224 186 C 218 180 214 172 216 166 C 218 160 224 158 232 162',
      'M 316 186 C 322 180 326 172 324 166 C 322 160 316 158 308 162'
    ], a);
    // Hood back curve
    pp(g, [
      'M 224 186 C 238 194 254 198 270 198 C 286 198 302 194 316 186'
    ], a);
    // Drawstrings hanging down
    pp(g, [
      'M 258 190 C 256 198 254 208 252 218',
      'M 282 190 C 284 198 286 208 288 218'
    ], a);
    // Drawstring tips (small ovals)
    pp(g, [
      'M 251 218 C 250 222 252 224 254 222 C 256 220 254 216 252 216',
      'M 287 218 C 286 222 288 224 290 222 C 292 220 290 216 288 216'
    ], a, lt);
    // Center seam
    pp(g, ['M 270 198 L 270 240'], a, lt);
    // Sleeve creases — left arm
    pp(g, [
      'M 226 184 C 222 188 218 194 216 200',
      'M 230 190 C 226 196 222 204 220 210'
    ], a, lt);
    // Sleeve creases — right arm
    pp(g, [
      'M 314 184 C 318 188 322 194 324 200',
      'M 310 190 C 314 196 318 204 320 210'
    ], a, lt);
    // Hoodie front pocket hint
    pp(g, [
      'M 240 218 C 248 222 260 224 270 224 C 280 224 292 222 300 218'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Hands + action — left hand w/ food to mouth, right hand
  //          holding cup with liquid, individual fingers
  // =====================================================================
  (g, a) => {
    // Left hand — near mouth, bringing food
    // Palm
    pp(g, [
      'M 212 150 C 208 146 202 144 198 148 C 194 152 196 158 200 162'
    ], a);
    // Thumb
    pp(g, [
      'M 212 150 C 216 146 218 140 216 136 C 214 132 210 132 208 136'
    ], a);
    // Index finger — reaching toward mouth
    pp(g, [
      'M 200 148 C 196 142 192 134 190 128 C 188 124 190 120 194 120 C 198 120 200 124 200 130'
    ], a);
    // Middle finger
    pp(g, [
      'M 198 150 C 194 144 188 136 186 130 C 184 126 186 122 190 122 C 194 122 196 126 196 132'
    ], a);
    // Ring finger (shorter)
    pp(g, [
      'M 196 154 C 192 148 188 140 186 136 C 184 132 186 128 190 128'
    ], a);
    // Pinky (shortest, curled)
    pp(g, [
      'M 196 158 C 192 154 190 148 190 144 C 190 140 192 138 194 140'
    ], a);
    // Food piece near fingers — small morsel
    pp(g, [
      'M 188 118 C 184 114 186 108 192 106 C 198 104 204 108 202 114 C 200 118 194 120 190 118'
    ], a);

    // Right hand — holding transparent cup
    // Cup outline
    pp(g, [
      'M 318 244 L 316 268 C 316 274 322 278 330 278 C 338 278 344 274 344 268 L 342 244 Z'
    ], a);
    // Cup rim
    pp(g, [
      'M 316 244 C 322 242 330 240 338 242 L 344 244'
    ], a);
    // Liquid level inside cup
    pp(g, [
      'M 318 254 C 324 256 332 256 340 254'
    ], a, lt);
    // Right hand thumb on cup
    pp(g, [
      'M 316 252 C 312 250 308 254 308 260 C 308 264 312 266 316 264'
    ], a);
    // Right index finger wrapping cup
    pp(g, [
      'M 344 252 C 348 250 352 254 352 260 C 352 264 348 266 344 264'
    ], a);
    // Right middle finger
    pp(g, [
      'M 344 258 C 350 258 354 262 354 268 C 354 272 350 274 346 272'
    ], a);
    // Right ring finger
    pp(g, [
      'M 344 264 C 348 266 350 270 350 274 C 350 278 348 280 344 278'
    ], a);
    // Right pinky
    pp(g, [
      'M 344 270 C 346 272 348 276 346 280 C 344 282 342 280 342 276'
    ], a);
  },

  // =====================================================================
  // Layer 5: Table — red tablecloth with drape/folds, bowl with moon,
  //          food in bowl
  // =====================================================================
  (g, a) => {
    // Tablecloth — full table surface
    pp(g, ['M 0 240 L 360 240'], a);
    // Tablecloth draping over front edge
    pp(g, [
      'M 0 240 C 8 244 14 250 16 262 L 0 262',
      'M 360 240 C 352 244 346 250 344 262 L 360 262'
    ], a);
    // Tablecloth wrinkle/fold lines
    pp(g, [
      'M 30 242 C 50 248 70 252 90 248',
      'M 120 242 C 140 250 160 254 180 248',
      'M 200 242 C 220 248 240 252 260 248',
      'M 280 242 C 300 248 320 250 340 246'
    ], a, lt);
    // Deeper fold lines
    pp(g, [
      'M 60 244 C 64 252 68 258 72 262',
      'M 160 244 C 164 254 168 260 172 266',
      'M 240 244 C 244 252 248 258 252 264'
    ], a, lt);
    // Drape folds at front
    pp(g, [
      'M 40 260 C 44 274 46 288 44 302',
      'M 120 258 C 124 272 126 286 124 300',
      'M 200 260 C 204 274 206 288 204 302',
      'M 300 258 C 304 272 306 286 304 300'
    ], a, lt);

    // Bowl — elliptical ceramic bowl, center-right on table
    pp(g, [
      'M 230 275 C 230 264 248 256 270 256 C 292 256 310 264 310 275 C 310 286 292 294 270 294 C 248 294 230 286 230 275 Z'
    ], a);
    // Bowl rim highlight
    pp(g, [
      'M 234 272 C 234 262 252 256 270 256 C 288 256 306 262 306 272'
    ], a);
    // Food in bowl — mounded rice/food
    pp(g, [
      'M 238 270 C 248 262 260 258 270 258 C 280 258 292 262 302 270'
    ], a, lt);
    pp(g, [
      'M 244 268 C 252 264 262 260 270 260 C 278 260 288 264 296 268'
    ], a, lt);
    // Moon crescent design on bowl
    pp(g, [
      'M 266 282 C 262 278 262 272 266 268 C 264 270 264 276 266 280',
      'M 266 268 C 270 266 274 268 276 272 C 278 276 276 280 272 282'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Bottles, can, glasses — wine bottle w/ glass stopper,
  //          Lemon bottle w/ cap, red can, empty glass, label areas
  // =====================================================================
  (g, a) => {
    // ---- Wine bottle (Quinta do Cardo) — tall, dark green, center-left ----
    // Bottle body
    pp(g, [
      'M 130 142 L 130 240',
      'M 152 142 L 152 240'
    ], a);
    // Bottle shoulder curve
    pp(g, [
      'M 130 142 C 130 134 134 128 138 124',
      'M 152 142 C 152 134 148 128 144 124'
    ], a);
    // Bottle neck
    pp(g, [
      'M 138 124 L 138 100',
      'M 144 124 L 144 100'
    ], a);
    // Neck lip/ring
    pp(g, [
      'M 136 100 L 146 100',
      'M 136 98 L 146 98'
    ], a);
    // Glass ball stopper — distinctive round sphere on top
    pp(g, [
      'M 141 98 C 141 94 138 90 138 86 C 138 78 141 72 145 72 C 149 72 152 78 152 86 C 152 90 149 94 149 98'
    ], a);
    // Stopper cross highlight (glass shine)
    pp(g, [
      'M 142 82 C 144 78 146 78 148 82',
      'M 143 86 C 145 84 147 86 145 88'
    ], a, lt);
    // Wine label area
    pp(g, ['M 132 170 L 150 170 L 150 216 L 132 216 Z'], a, lt);
    // Label inner line
    pp(g, ['M 134 186 L 148 186'], a, lt);
    // Pink/red label accent
    pp(g, ['M 132 192 L 150 192 L 150 210 L 132 210 Z'], a, lt);

    // ---- Lemon drink bottle — shorter, wider, left of wine ----
    // Body
    pp(g, [
      'M 92 170 L 92 240',
      'M 118 170 L 118 240'
    ], a);
    // Shoulder
    pp(g, [
      'M 92 170 C 92 162 96 156 100 152',
      'M 118 170 C 118 162 114 156 110 152'
    ], a);
    // Neck
    pp(g, [
      'M 100 152 L 100 140',
      'M 110 152 L 110 140'
    ], a);
    // Yellow screw cap
    pp(g, [
      'M 98 140 L 98 132 L 112 132 L 112 140 Z'
    ], a);
    // Cap ridges
    pp(g, ['M 100 134 L 100 140', 'M 104 132 L 104 140', 'M 108 134 L 108 140'], a, lt);
    // Label area
    pp(g, ['M 94 182 L 116 182 L 116 226 L 94 226 Z'], a, lt);
    // Lemon graphic hint on label
    pp(g, [
      'M 102 200 C 100 196 102 192 106 190 C 110 188 114 190 114 196 C 114 200 110 204 106 204 C 102 204 100 202 102 200'
    ], a, lt);

    // ---- Red can — far left ----
    // Body (cylinder)
    pp(g, [
      'M 42 216 C 42 210 50 206 60 206 C 70 206 78 210 78 216 L 78 256 C 78 262 70 266 60 266 C 50 266 42 262 42 256 Z'
    ], a);
    // Can top ellipse
    pp(g, [
      'M 42 216 C 42 222 50 226 60 226 C 70 226 78 222 78 216'
    ], a);
    // Can pull tab hint
    pp(g, [
      'M 56 210 L 64 210 L 62 214 L 58 214 Z'
    ], a, lt);

    // ---- Empty Super Bock glass — far right ----
    pp(g, [
      'M 336 240 L 338 270 C 338 274 334 278 328 278 C 322 278 318 274 318 270 L 320 240'
    ], a, lt);
    // Glass rim
    pp(g, ['M 320 240 C 324 238 332 238 336 240'], a, lt);
    // Glass base
    pp(g, ['M 322 278 L 322 284 L 334 284 L 334 278'], a, lt);

    // ---- Blue scissors on table (small detail) ----
    pp(g, [
      'M 178 256 C 176 252 180 248 184 250 C 188 252 186 256 182 258',
      'M 182 258 C 184 262 180 266 176 264 C 172 262 174 258 178 256',
      'M 182 258 L 194 250',
      'M 182 258 L 194 266'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — Miguel (skin, hair, hoodie, ears, hands)
  // =====================================================================
  (g, a) => {
    // Skin — face
    fl(g,
      'M 270 44 C 290 44 308 58 310 78 C 312 96 308 110 300 120 C 292 130 282 136 270 138 C 258 136 248 130 240 120 C 232 110 228 96 230 78 C 232 58 250 44 270 44 Z',
      '#F5D0A9', a);
    // Neck skin
    fl(g,
      'M 258 136 L 255 155 L 285 155 L 282 136 Z',
      '#F5D0A9', false);
    // Left ear fill
    fe(g, 'ellipse', { cx: 220, cy: 88, rx: 6, ry: 12, fill: '#F5D0A9' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 320, cy: 88, rx: 6, ry: 12, fill: '#F5D0A9' }, false);
    // Hair fill — dirty blonde
    fl(g,
      'M 232 74 C 230 58 238 42 254 34 C 266 28 282 28 296 34 C 308 42 314 58 312 74 L 308 72 C 310 60 306 48 296 42 C 286 36 272 34 260 38 C 248 44 240 56 238 70 Z',
      '#C4A265', a);
    // Hoodie fill — bright yellow
    fl(g,
      'M 218 178 C 228 162 248 154 270 154 C 292 154 312 162 322 178 L 328 240 L 212 240 Z',
      '#FFD740', a);
    // Hood fill — slightly darker yellow
    fl(g,
      'M 224 186 C 218 180 214 172 216 166 C 218 160 224 158 232 162 C 244 156 256 154 270 154 C 284 154 296 156 308 162 C 316 158 322 160 324 166 C 326 172 322 180 316 186 C 302 194 286 198 270 198 C 254 198 238 194 224 186 Z',
      '#FFC107', a);
    // Left hand skin fill
    fl(g,
      'M 212 150 C 208 146 202 144 198 148 C 194 152 196 158 200 162 L 212 150 Z',
      '#F5D0A9', false);
    // Right hand skin fill (around cup area)
    fl(g,
      'M 316 252 C 312 250 308 254 308 260 C 308 264 312 266 316 264 L 316 252 Z',
      '#F5D0A9', false);
    // Left arm hoodie sleeve fill
    fl(g,
      'M 226 182 C 216 192 206 202 198 214 C 192 224 194 236 200 238 C 206 240 214 232 220 220 C 228 206 236 192 242 186 Z',
      '#FFD740', false);
    // Right arm hoodie sleeve fill
    fl(g,
      'M 314 182 C 322 194 328 208 332 222 C 334 230 330 238 326 236 C 322 234 318 228 314 216 C 310 204 308 192 310 184 Z',
      '#FFD740', false);
  },

  // =====================================================================
  // Layer 8: Color fills — table, objects (tablecloth, bowl, bottles,
  //          can, cup, glass stopper)
  // =====================================================================
  (g, a) => {
    // Red tablecloth — covers entire table area below y=240
    fe(g, 'rect', { x: 0, y: 240, width: 360, height: 210, fill: '#C62828' }, a);
    // Tablecloth fold shadow accents
    fl(g,
      'M 60 244 C 64 252 68 258 72 262 L 68 262 C 64 258 60 252 58 244 Z',
      '#B71C1C', false);
    fl(g,
      'M 160 244 C 164 254 168 260 172 266 L 168 266 C 164 260 160 254 158 244 Z',
      '#B71C1C', false);

    // Gray ceramic bowl
    fl(g,
      'M 232 275 C 232 266 250 258 270 258 C 290 258 308 266 308 275 C 308 284 290 292 270 292 C 250 292 232 284 232 275 Z',
      '#9E9E9E', a);
    // Bowl inner (lighter)
    fl(g,
      'M 238 272 C 238 264 254 258 270 258 C 286 258 302 264 302 272 C 302 278 286 282 270 282 C 254 282 238 278 238 272 Z',
      '#BDBDBD', false);
    // Food in bowl
    fl(g,
      'M 242 268 C 252 262 262 260 270 260 C 278 260 288 262 298 268 C 294 272 282 274 270 274 C 258 274 246 272 242 268 Z',
      '#F5DEB3', false);

    // Wine bottle — dark green
    fl(g,
      'M 132 142 L 132 238 L 150 238 L 150 142 C 150 136 148 130 144 126 L 140 126 C 136 130 132 136 132 142 Z',
      '#1B5E20', a);
    // Wine bottle neck
    fl(g,
      'M 139 126 L 139 100 L 143 100 L 143 126 Z',
      '#2E7D32', false);
    // Glass ball stopper — translucent sphere
    fe(g, 'circle', { cx: 141, cy: 84, r: 10, fill: '#E0E0E0', opacity: '0.45' }, a);
    // Stopper inner glass hint
    fe(g, 'circle', { cx: 141, cy: 84, r: 7, fill: '#F5F5F5', opacity: '0.3' }, false);
    // Wine label — pink/red area
    fe(g, 'rect', { x: 133, y: 192, width: 16, height: 18, rx: 1, fill: '#E91E63', opacity: '0.6' }, false);

    // Lemon drink bottle — brown
    fl(g,
      'M 94 170 L 94 238 L 116 238 L 116 170 C 116 164 114 158 110 154 L 100 154 C 96 158 94 164 94 170 Z',
      '#5D4037', a);
    // Lemon bottle neck
    fl(g,
      'M 101 154 L 101 142 L 109 142 L 109 154 Z',
      '#6D4C41', false);
    // Yellow cap
    fe(g, 'rect', { x: 99, y: 132, width: 12, height: 10, rx: 2, fill: '#FDD835' }, a);
    // Lemon label accent (yellow-green area)
    fe(g, 'rect', { x: 96, y: 196, width: 18, height: 20, rx: 1, fill: '#FDD835', opacity: '0.5' }, false);

    // Red can
    fl(g,
      'M 44 218 C 44 212 52 208 60 208 C 68 208 76 212 76 218 L 76 254 C 76 260 68 264 60 264 C 52 264 44 260 44 254 Z',
      '#D32F2F', a);
    // Can top highlight
    fl(g,
      'M 44 218 C 44 224 52 228 60 228 C 68 228 76 224 76 218 C 76 212 68 208 60 208 C 52 208 44 212 44 218 Z',
      '#E53935', false);

    // Cup — translucent
    fl(g,
      'M 320 244 L 318 268 C 318 274 324 278 330 278 C 336 278 342 274 342 268 L 340 244 Z',
      '#E3F2FD', false);
    // Liquid in cup
    fl(g,
      'M 320 254 C 324 256 332 256 340 254 L 342 268 C 342 274 336 278 330 278 C 324 278 318 274 318 268 Z',
      '#FFECB3', false);

    // Chair fill — dark behind Miguel
    fe(g, 'rect', { x: 212, y: 28, width: 120, height: 190, rx: 8, fill: '#37474F', opacity: '0.12' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, cheek blush, mouth color, label text,
  //          stopper shine, background hints
  // =====================================================================
  (g, a) => {
    // Eye shine — left
    fe(g, 'circle', { cx: 260, cy: 78, r: 1.6, fill: 'white' }, a);
    // Eye shine — right
    fe(g, 'circle', { cx: 282, cy: 78, r: 1.6, fill: 'white' }, a);
    // Second smaller highlight — left
    fe(g, 'circle', { cx: 264, cy: 82, r: 0.8, fill: 'white', opacity: '0.7' }, false);
    // Second smaller highlight — right
    fe(g, 'circle', { cx: 286, cy: 82, r: 0.8, fill: 'white', opacity: '0.7' }, false);

    // Cheek blush — left
    fe(g, 'ellipse', { cx: 250, cy: 106, rx: 12, ry: 6, fill: '#FFAB91', opacity: '0.35' }, a);
    // Cheek blush — right
    fe(g, 'ellipse', { cx: 292, cy: 106, rx: 12, ry: 6, fill: '#FFAB91', opacity: '0.35' }, a);

    // Mouth interior color — pink/red gums
    fl(g,
      'M 254 114 C 258 126 266 132 270 132 C 274 132 282 126 286 114 L 282 114 C 280 122 276 128 270 128 C 264 128 260 122 258 114 Z',
      '#E57373', false);
    // Tongue hint
    fl(g,
      'M 264 122 C 266 126 270 128 274 126 C 276 124 276 120 274 118 L 266 118 C 264 120 264 122 264 122 Z',
      '#EF9A9A', false);

    // Wine label text — "QUINTA DO CARDO"
    const wt1 = ce('text', { x: 134, y: 186, fill: '#FAFAFA', 'font-size': '4', 'font-family': 'serif', 'letter-spacing': '0.5' });
    wt1.textContent = 'QUINTA';
    if (a) wt1.classList.add('active-element');
    g.appendChild(wt1);
    const wt2 = ce('text', { x: 136, y: 192, fill: '#FAFAFA', 'font-size': '3.5', 'font-family': 'serif', 'letter-spacing': '0.3' });
    wt2.textContent = 'DO';
    g.appendChild(wt2);
    const wt3 = ce('text', { x: 134, y: 198, fill: '#FAFAFA', 'font-size': '4', 'font-family': 'serif', 'letter-spacing': '0.5' });
    wt3.textContent = 'CARDO';
    g.appendChild(wt3);

    // Lemon label text
    const lt3 = ce('text', { x: 97, y: 206, fill: '#4E342E', 'font-size': '4.5', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    lt3.textContent = 'Lemon';
    if (a) lt3.classList.add('active-element');
    g.appendChild(lt3);
    const lt4 = ce('text', { x: 95, y: 212, fill: '#6D4C41', 'font-size': '3', 'font-family': 'sans-serif' });
    lt4.textContent = 'TINTO DE';
    g.appendChild(lt4);
    const lt5 = ce('text', { x: 97, y: 217, fill: '#6D4C41', 'font-size': '3', 'font-family': 'sans-serif' });
    lt5.textContent = 'VERAO';
    g.appendChild(lt5);

    // Glass stopper shine — crescent highlight
    fe(g, 'circle', { cx: 139, cy: 80, r: 2.5, fill: 'white', opacity: '0.6' }, a);
    fe(g, 'circle', { cx: 143, cy: 76, r: 1.2, fill: 'white', opacity: '0.4' }, false);

    // Can label hint
    const ct = ce('text', { x: 52, y: 240, fill: '#FFCDD2', 'font-size': '4', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    ct.textContent = 'SB';
    g.appendChild(ct);

    // Background — fridge (far left, light strokes)
    pp(g, [
      'M 0 20 L 45 20 L 45 210 L 0 210',
      'M 0 120 L 45 120'
    ], a, lt);
    // Fridge fill hint
    fe(g, 'rect', { x: 0, y: 20, width: 45, height: 190, rx: 3, fill: '#546E7A', opacity: '0.12' }, false);
    // Fridge handle
    pp(g, ['M 38 60 L 38 100'], a, lt);
    // Fridge magnets
    fe(g, 'rect', { x: 8, y: 40, width: 8, height: 8, rx: 1, fill: '#F44336', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 22, y: 50, width: 6, height: 8, rx: 1, fill: '#2196F3', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 12, y: 66, width: 7, height: 6, rx: 1, fill: '#4CAF50', opacity: '0.3' }, false);

    // Background — wall (beige/cream)
    fe(g, 'rect', { x: 45, y: 0, width: 165, height: 240, fill: '#F5F0E1', opacity: '0.08' }, false);

    // Wall framed photos (tiny rectangles)
    pp(g, ['M 70 30 L 90 30 L 90 50 L 70 50 Z'], a, lt);
    pp(g, ['M 100 26 L 116 26 L 116 42 L 100 42 Z'], a, lt);
    // "FAMILY" letters on shelf
    pp(g, ['M 56 60 L 130 60'], a, lt);
    const ft = ce('text', { x: 62, y: 58, fill: a ? HL : LP, 'font-size': '6', 'font-family': 'sans-serif', 'letter-spacing': '2', opacity: '0.5' });
    ft.textContent = 'FAMILY';
    if (a) ft.classList.add('active-element');
    g.appendChild(ft);

    // Chair back hint behind Miguel
    pp(g, [
      'M 212 30 C 214 28 330 28 332 30 L 332 218 L 212 218 Z'
    ], a, lt);

    // Tablecloth wrinkle highlights (lighter lines on red)
    pp(g, [
      'M 50 260 C 70 256 90 258 110 260',
      'M 150 258 C 170 254 190 256 210 258',
      'M 260 260 C 280 256 300 258 320 260'
    ], a, lt);

    // Food crumb near Miguel's mouth
    fl(g,
      'M 192 108 C 190 104 194 100 198 102 C 202 104 200 110 196 110 Z',
      '#F5DEB3', false);

    // Tile floor hint at very bottom
    pp(g, [
      'M 0 420 L 360 420',
      'M 0 440 L 360 440'
    ], a, lt);
    pp(g, [
      'M 60 420 L 60 450',
      'M 120 420 L 120 450',
      'M 180 420 L 180 450',
      'M 240 420 L 240 450',
      'M 300 420 L 300 450'
    ], a, lt);
  }
];
