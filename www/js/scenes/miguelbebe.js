const miguelbebeLayers = [
  // ================================================================
  // Layer 0: Composition guides — center cross, head/body ovals,
  // arm/leg direction, blanket rectangle
  // ================================================================
  (g, a) => {
    // Vertical center guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Horizontal center guide
    pp(g, ['M 0 225 L 360 225'], a, lt);
    // Head circle guide — large newborn head, center ~(180,105)
    pp(g, [
      'M 180 48 C 215 48 240 72 240 105 C 240 138 215 162 180 162 C 145 162 120 138 120 105 C 120 72 145 48 180 48 Z'
    ], a, lt);
    // Body oval guide — chubby short torso
    pp(g, [
      'M 180 158 C 218 158 245 182 245 215 C 245 248 218 272 180 272 C 142 272 115 248 115 215 C 115 182 142 158 180 158 Z'
    ], a, lt);
    // Left arm direction guide
    pp(g, ['M 120 180 L 55 200'], a, lt);
    // Right arm direction guide
    pp(g, ['M 240 180 L 305 200'], a, lt);
    // Left leg direction guide (frog position — out and down)
    pp(g, ['M 148 272 L 105 350'], a, lt);
    // Right leg direction guide
    pp(g, ['M 212 272 L 255 350'], a, lt);
    // Blanket rectangle guide
    pp(g, ['M 15 15 L 345 15 L 345 435 L 15 435 Z'], a, lt);
    // Letter M placement guide (belly area)
    pp(g, ['M 160 218 L 200 218 L 200 258 L 160 258 Z'], a, lt);
  },

  // ================================================================
  // Layer 1: Main figure outlines — large head, chubby torso,
  // short arms spread, legs in frog position, bootied feet
  // ================================================================
  (g, a) => {
    // Head — very large round newborn head (1/4 of body)
    pp(g, [
      'M 180 50 C 212 50 236 70 236 105 C 236 140 212 160 180 160 C 148 160 124 140 124 105 C 124 70 148 50 180 50 Z'
    ], a);
    // Body torso — short, chubby, pear-shaped
    pp(g, [
      'M 148 158 C 152 153 165 148 180 148 C 195 148 208 153 212 158',
      'M 148 158 C 140 168 132 185 130 200 C 127 220 130 242 138 258 C 146 272 162 280 180 282 C 198 280 214 272 222 258 C 230 242 233 220 230 200 C 228 185 220 168 212 158'
    ], a);
    // Left arm — short, chubby, spread outward
    pp(g, [
      'M 132 175 C 118 178 98 184 80 193 C 70 198 62 206 62 214 C 62 222 68 226 76 224'
    ], a);
    // Left arm underside
    pp(g, [
      'M 136 188 C 122 192 104 200 88 208 C 78 213 72 218 76 224'
    ], a);
    // Right arm — short, chubby, spread outward
    pp(g, [
      'M 228 175 C 242 178 262 184 280 193 C 290 198 298 206 298 214 C 298 222 292 226 284 224'
    ], a);
    // Right arm underside
    pp(g, [
      'M 224 188 C 238 192 256 200 272 208 C 282 213 288 218 284 224'
    ], a);
    // Left leg — bent outward, frog position
    pp(g, [
      'M 152 270 C 146 285 132 306 120 322 C 114 332 110 342 112 350 C 114 356 120 360 128 358'
    ], a);
    // Left leg inner edge
    pp(g, [
      'M 164 274 C 160 288 150 308 140 322 C 134 332 132 340 136 348 C 138 352 128 358 128 358'
    ], a);
    // Right leg — bent outward, frog position
    pp(g, [
      'M 208 270 C 214 285 228 306 240 322 C 246 332 250 342 248 350 C 246 356 240 360 232 358'
    ], a);
    // Right leg inner edge
    pp(g, [
      'M 196 274 C 200 288 210 308 220 322 C 226 332 228 340 224 348 C 222 352 232 358 232 358'
    ], a);
    // Left bootie
    pp(g, [
      'M 112 350 C 106 354 100 352 98 346 C 96 340 98 334 104 330 C 108 328 114 330 118 334'
    ], a);
    // Right bootie
    pp(g, [
      'M 248 350 C 254 354 260 352 262 346 C 264 340 262 334 256 330 C 252 328 246 330 242 334'
    ], a);
  },

  // ================================================================
  // Layer 2: Face details — big round eyes, tiny button nose,
  // small mouth, small ears close to head
  // ================================================================
  (g, a) => {
    // Left eye — big, nearly round (babies have huge eyes)
    pp(g, [
      'M 155 100 C 155 92 161 86 169 86 C 177 86 183 92 183 100 C 183 108 177 114 169 114 C 161 114 155 108 155 100 Z'
    ], a);
    // Right eye — big, nearly round
    pp(g, [
      'M 177 100 C 177 92 183 86 191 86 C 199 86 205 92 205 100 C 205 108 199 114 191 114 C 183 114 177 108 177 100 Z'
    ], a);
    // Left iris outline
    pp(g, [
      'M 161 100 C 161 94 165 90 170 90 C 175 90 179 94 179 100 C 179 106 175 110 170 110 C 165 110 161 106 161 100 Z'
    ], a);
    // Right iris outline
    pp(g, [
      'M 183 100 C 183 94 187 90 192 90 C 197 90 201 94 201 100 C 201 106 197 110 192 110 C 187 110 183 106 183 100 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', {cx: 170, cy: 100, r: 5, fill: '#1A1A1A'}, a);
    // Right pupil
    fe(g, 'circle', {cx: 192, cy: 100, r: 5, fill: '#1A1A1A'}, a);
    // Left upper eyelid crease
    pp(g, ['M 157 88 C 162 84 172 82 181 86'], a, lt);
    // Right upper eyelid crease
    pp(g, ['M 179 86 C 188 82 198 84 203 88'], a, lt);
    // Tiny button nose — just a small bump
    pp(g, [
      'M 177 116 C 176 119 175 123 177 125 C 179 127 181 127 183 125 C 185 123 184 119 183 116'
    ], a);
    // Nose nostrils hint
    pp(g, [
      'M 175 124 C 176 126 178 127 180 127',
      'M 180 127 C 182 127 184 126 185 124'
    ], a, lt);
    // Small mouth — slightly open
    pp(g, [
      'M 172 132 C 175 135 178 136 180 136 C 182 136 185 135 188 132'
    ], a);
    // Lower lip
    pp(g, [
      'M 173 133 C 176 137 179 138 180 138 C 181 138 184 137 187 133'
    ], a);
    // Left ear — small, close to head
    pp(g, [
      'M 126 98 C 121 92 118 96 118 102 C 118 108 121 113 126 112'
    ], a);
    // Left ear inner fold
    pp(g, ['M 122 97 C 120 101 120 106 122 110'], a, lt);
    // Right ear — small, close to head
    pp(g, [
      'M 234 98 C 239 92 242 96 242 102 C 242 108 239 113 234 112'
    ], a);
    // Right ear inner fold
    pp(g, ['M 238 97 C 240 101 240 106 238 110'], a, lt);
  },

  // ================================================================
  // Layer 3: Hair — very wispy, barely visible fine baby hair
  // Just a few thin delicate lines on top of the head
  // ================================================================
  (g, a) => {
    // Central wisp — very light, almost invisible
    pp(g, ['M 170 56 C 173 48 178 45 180 46 C 182 45 187 48 190 56'], a);
    // Left wisp cluster
    pp(g, ['M 155 62 C 160 52 168 48 174 52'], a);
    pp(g, ['M 150 68 C 155 58 163 54 170 56'], a);
    // Right wisp cluster
    pp(g, ['M 205 62 C 200 52 192 48 186 52'], a);
    pp(g, ['M 210 68 C 205 58 197 54 190 56'], a);
    // Top fine strands — light pencil for barely-there effect
    pp(g, [
      'M 165 54 C 170 46 176 44 180 45',
      'M 180 45 C 184 44 190 46 195 54'
    ], a, lt);
    // Forehead hairline hint
    pp(g, [
      'M 148 72 C 155 65 165 60 175 58',
      'M 185 58 C 195 60 205 65 212 72'
    ], a, lt);
  },

  // ================================================================
  // Layer 4: Clothing — knit cardigan (open at front), V-pattern
  // texture rows, knit pattern on bloomers/shorts, bootie texture
  // ================================================================
  (g, a) => {
    // Cardigan neckline — wide, round
    pp(g, [
      'M 155 158 C 160 166 170 170 180 170 C 190 170 200 166 205 158'
    ], a);
    // Cardigan left lapel (open front, showing belly)
    pp(g, [
      'M 155 158 C 152 168 150 180 150 195 C 150 210 152 228 156 245 C 158 255 162 265 168 272'
    ], a);
    // Cardigan right lapel
    pp(g, [
      'M 205 158 C 208 168 210 180 210 195 C 210 210 208 228 204 245 C 202 255 198 265 192 272'
    ], a);
    // V-pattern knit rows on left side
    pp(g, ['M 132 175 L 150 185 L 155 175'], a);
    pp(g, ['M 130 192 L 150 202 L 156 192'], a);
    pp(g, ['M 128 209 L 150 219 L 158 209'], a);
    pp(g, ['M 130 226 L 152 236 L 160 226'], a);
    pp(g, ['M 132 243 L 155 253 L 163 243'], a);
    // V-pattern knit rows on right side
    pp(g, ['M 228 175 L 210 185 L 205 175'], a);
    pp(g, ['M 230 192 L 210 202 L 204 192'], a);
    pp(g, ['M 232 209 L 210 219 L 202 209'], a);
    pp(g, ['M 230 226 L 208 236 L 200 226'], a);
    pp(g, ['M 228 243 L 205 253 L 197 243'], a);
    // Belly area between open cardigan (bare skin, no pattern)
    pp(g, [
      'M 155 185 C 160 182 170 180 180 180 C 190 180 200 182 205 185'
    ], a, lt);
    // Knit bloomer/shorts left leg — chevron lines
    pp(g, [
      'M 150 278 L 155 288 L 142 288',
      'M 146 298 L 150 308 L 136 308',
      'M 138 318 L 142 328 L 128 328'
    ], a);
    // Knit bloomer/shorts right leg — chevron lines
    pp(g, [
      'M 210 278 L 205 288 L 218 288',
      'M 214 298 L 210 308 L 224 308',
      'M 222 318 L 218 328 L 232 328'
    ], a);
    // Left bootie knit detail
    pp(g, [
      'M 100 342 C 104 338 110 336 116 338',
      'M 102 348 C 106 344 112 342 118 344'
    ], a, lt);
    // Right bootie knit detail
    pp(g, [
      'M 260 342 C 256 338 250 336 244 338',
      'M 258 348 C 254 344 248 342 242 344'
    ], a, lt);
    // Cardigan sleeve cuffs
    pp(g, [
      'M 128 172 C 124 176 120 180 118 184',
      'M 136 178 C 132 182 128 186 126 190'
    ], a, lt);
    pp(g, [
      'M 232 172 C 236 176 240 180 242 184',
      'M 224 178 C 228 182 232 186 234 190'
    ], a, lt);
  },

  // ================================================================
  // Layer 5: Hands + Letter M + Rosary
  // Left hand open with chubby fingers, right hand holds rosary,
  // wooden block M on belly, rosary beads + cross
  // ================================================================
  (g, a) => {
    // === LETTER M BLOCK on belly ===
    // Block outline (3D wooden letter)
    pp(g, ['M 162 220 L 198 220 L 198 256 L 162 256 Z'], a);
    // 3D side shadow of block
    pp(g, ['M 198 220 L 202 216 L 202 252 L 198 256'], a);
    // 3D top shadow of block
    pp(g, ['M 162 220 L 166 216 L 202 216 L 198 220'], a);
    // Letter M inside the block — serif style
    pp(g, [
      'M 168 250 L 168 228 L 175 240 L 180 234 L 185 240 L 192 228 L 192 250'
    ], a);
    // M serif bases
    pp(g, ['M 166 250 L 170 250', 'M 190 250 L 194 250'], a);

    // === LEFT HAND — open, chubby baby fingers ===
    // Palm base
    pp(g, [
      'M 76 224 C 72 220 66 216 62 214 C 56 210 50 212 48 218 C 46 224 50 228 56 228'
    ], a);
    // Thumb — short and pudgy
    pp(g, [
      'M 76 218 C 80 212 82 206 80 202 C 78 198 74 198 72 202 C 70 206 72 212 74 218'
    ], a);
    // Index finger
    pp(g, [
      'M 66 214 C 62 208 58 202 56 198 C 54 194 56 192 60 194 C 62 196 64 202 66 208'
    ], a);
    // Middle finger
    pp(g, [
      'M 60 216 C 55 210 50 204 48 200 C 46 196 48 194 52 196 C 54 198 56 206 58 212'
    ], a);
    // Ring finger
    pp(g, [
      'M 54 220 C 50 214 46 210 44 206 C 42 202 44 200 48 202 C 50 204 52 212 54 218'
    ], a);
    // Pinky finger
    pp(g, [
      'M 50 224 C 46 220 42 216 40 214 C 38 210 40 208 44 210 C 46 212 48 218 50 222'
    ], a);

    // === RIGHT HAND — curled, holding rosary ===
    // Palm
    pp(g, [
      'M 284 224 C 288 220 294 216 298 214 C 302 212 306 214 306 220 C 306 226 302 228 298 226'
    ], a);
    // Curled fingers around rosary
    pp(g, [
      'M 298 214 C 302 208 306 204 308 200 C 310 196 308 194 304 196 C 302 198 300 204 298 210'
    ], a);
    pp(g, [
      'M 302 218 C 306 212 310 208 312 204 C 314 200 312 198 308 200 C 306 202 304 210 302 216'
    ], a);

    // === ROSARY ===
    // Rosary string curving from right hand down
    pp(g, [
      'M 304 218 C 308 228 314 242 316 256 C 318 270 314 284 306 294 C 298 304 286 308 276 306'
    ], a);
    // Rosary beads — alternating blue and red
    fe(g, 'circle', {cx: 308, cy: 232, r: 4.5, fill: '#1976D2'}, a);
    fe(g, 'circle', {cx: 312, cy: 244, r: 4.5, fill: '#D32F2F'}, a);
    fe(g, 'circle', {cx: 316, cy: 256, r: 4.5, fill: '#1976D2'}, a);
    fe(g, 'circle', {cx: 316, cy: 268, r: 4.5, fill: '#D32F2F'}, a);
    fe(g, 'circle', {cx: 312, cy: 280, r: 4.5, fill: '#1976D2'}, a);
    fe(g, 'circle', {cx: 306, cy: 290, r: 4.5, fill: '#D32F2F'}, a);
    fe(g, 'circle', {cx: 296, cy: 298, r: 4.5, fill: '#1976D2'}, a);
    fe(g, 'circle', {cx: 284, cy: 304, r: 4.5, fill: '#D32F2F'}, a);
    // Rosary cross — at the end of the chain
    pp(g, ['M 276 306 L 276 324'], a);
    pp(g, ['M 269 314 L 283 314'], a);
    // Cross base detail
    pp(g, ['M 274 322 L 278 322'], a, lt);
    // Cross top detail
    pp(g, ['M 274 308 L 278 308'], a, lt);
  },

  // ================================================================
  // Layer 6: Background — blanket outline, horizontal stripe pairs,
  // 6 pompons scattered, picture frame corner hint
  // ================================================================
  (g, a) => {
    // Blanket outline
    pp(g, ['M 20 20 L 340 20 L 340 430 L 20 430 Z'], a);
    // Blanket edge fold/texture
    pp(g, [
      'M 22 22 L 338 22 L 338 428 L 22 428 Z'
    ], a, lt);

    // Horizontal stripe pairs (evenly spaced across blanket)
    // Pair 1
    pp(g, ['M 20 55 L 340 55', 'M 20 63 L 340 63'], a);
    // Pair 2
    pp(g, ['M 20 120 L 340 120', 'M 20 128 L 340 128'], a);
    // Pair 3
    pp(g, ['M 20 185 L 340 185', 'M 20 193 L 340 193'], a);
    // Pair 4
    pp(g, ['M 20 255 L 340 255', 'M 20 263 L 340 263'], a);
    // Pair 5
    pp(g, ['M 20 325 L 340 325', 'M 20 333 L 340 333'], a);
    // Pair 6
    pp(g, ['M 20 395 L 340 395', 'M 20 403 L 340 403'], a);

    // === 6 POMPONS scattered around baby ===
    // Red pompon — top left
    pp(g, [
      'M 58 80 C 63 74 72 74 77 80 C 82 86 82 94 77 99 C 72 104 63 104 58 99 C 53 94 53 86 58 80 Z'
    ], a);
    // Blue pompon — top right
    pp(g, [
      'M 295 70 C 300 64 309 64 314 70 C 319 76 319 84 314 89 C 309 94 300 94 295 89 C 290 84 290 76 295 70 Z'
    ], a);
    // Yellow pompon — mid left
    pp(g, [
      'M 40 270 C 45 264 54 264 59 270 C 64 276 64 284 59 289 C 54 294 45 294 40 289 C 35 284 35 276 40 270 Z'
    ], a);
    // Green pompon — mid right
    pp(g, [
      'M 305 290 C 310 284 319 284 324 290 C 329 296 329 304 324 309 C 319 314 310 314 305 309 C 300 304 300 296 305 290 Z'
    ], a);
    // Lime pompon — bottom left
    pp(g, [
      'M 75 375 C 80 369 89 369 94 375 C 99 381 99 389 94 394 C 89 399 80 399 75 394 C 70 389 70 381 75 375 Z'
    ], a);
    // Orange pompon — bottom right
    pp(g, [
      'M 275 365 C 280 359 289 359 294 365 C 299 371 299 379 294 384 C 289 389 280 389 275 384 C 270 379 270 371 275 365 Z'
    ], a);

    // Picture frame corner hint — top left
    pp(g, [
      'M 20 20 L 20 50 M 20 20 L 50 20',
      'M 24 24 L 24 46 M 24 24 L 46 24'
    ], a);
    // Frame inner corner line
    pp(g, ['M 26 26 L 44 44'], a, lt);
  },

  // ================================================================
  // Layer 7: Color fills — FIGURES
  // Skin (pinkish baby tone), knit outfit (beige/taupe),
  // letter M (white), ears, eye whites, wispy hair
  // ================================================================
  (g, a) => {
    // Skin fill — head
    fl(g, 'M 180 50 C 212 50 236 70 236 105 C 236 140 212 160 180 160 C 148 160 124 140 124 105 C 124 70 148 50 180 50 Z', '#F8D5B8', a);
    // Skin fill — left ear
    fl(g, 'M 126 98 C 121 92 118 96 118 102 C 118 108 121 113 126 112 Z', '#F8D5B8', a);
    // Skin fill — right ear
    fl(g, 'M 234 98 C 239 92 242 96 242 102 C 242 108 239 113 234 112 Z', '#F8D5B8', a);
    // Skin fill — left arm
    fl(g, 'M 132 175 C 118 178 98 184 80 193 C 70 198 62 206 62 214 C 62 222 68 226 76 224 C 88 220 104 200 136 188 Z', '#F8D5B8', a);
    // Skin fill — right arm
    fl(g, 'M 228 175 C 242 178 262 184 280 193 C 290 198 298 206 298 214 C 298 222 292 226 284 224 C 272 220 256 200 224 188 Z', '#F8D5B8', a);
    // Skin fill — left hand area
    fl(g, 'M 76 224 C 72 220 62 214 48 218 C 46 224 50 228 56 228 C 65 228 72 226 76 224 Z', '#F8D5B8', a);
    // Skin fill — left fingers
    fl(g, 'M 80 202 C 82 206 76 218 72 218 C 62 208 42 206 40 214 C 38 222 46 228 56 228 C 68 228 80 220 80 210 Z', '#F8D5B8', a);
    // Skin fill — right hand area
    fl(g, 'M 284 224 C 288 220 298 214 306 220 C 306 226 302 228 298 226 C 292 224 286 224 284 224 Z', '#F8D5B8', a);
    // Skin fill — belly (visible between open cardigan)
    fl(g, 'M 155 180 C 160 178 170 176 180 176 C 190 176 200 178 205 180 L 208 220 C 204 222 195 224 180 224 C 165 224 156 222 152 220 Z', '#F8D5B8', a);

    // Knit outfit fill — left torso (cardigan)
    fl(g, 'M 148 158 C 140 168 132 185 130 200 C 127 220 130 242 138 258 C 146 272 162 280 168 272 C 162 265 158 255 156 245 C 152 228 150 210 150 195 C 150 180 152 168 155 158 Z', '#C4A882', a);
    // Knit outfit fill — right torso (cardigan)
    fl(g, 'M 212 158 C 220 168 228 185 230 200 C 233 220 230 242 222 258 C 214 272 198 280 192 272 C 198 265 202 255 204 245 C 208 228 210 210 210 195 C 210 180 208 168 205 158 Z', '#C4A882', a);
    // Knit outfit fill — left leg bloomer
    fl(g, 'M 152 270 C 146 285 132 306 120 322 C 114 332 110 342 112 350 C 114 356 120 360 128 358 C 136 348 134 332 140 322 C 150 308 160 288 164 274 Z', '#C4A882', a);
    // Knit outfit fill — right leg bloomer
    fl(g, 'M 208 270 C 214 285 228 306 240 322 C 246 332 250 342 248 350 C 246 356 240 360 232 358 C 224 348 226 332 220 322 C 210 308 200 288 196 274 Z', '#C4A882', a);
    // Bootie fill — left
    fl(g, 'M 112 350 C 106 354 100 352 98 346 C 96 340 98 334 104 330 C 108 328 114 330 118 334 C 116 340 114 346 112 350 Z', '#C4A882', a);
    // Bootie fill — right
    fl(g, 'M 248 350 C 254 354 260 352 262 346 C 264 340 262 334 256 330 C 252 328 246 330 242 334 C 244 340 246 346 248 350 Z', '#C4A882', a);

    // Letter M block fill — white/cream
    fl(g, 'M 162 220 L 198 220 L 198 256 L 162 256 Z', '#FAFAFA', a);
    // Letter M block 3D side shadow
    fl(g, 'M 198 220 L 202 216 L 202 252 L 198 256 Z', '#E0E0E0', a);
    // Letter M block 3D top shadow
    fl(g, 'M 162 220 L 166 216 L 202 216 L 198 220 Z', '#EEEEEE', a);

    // Eye whites — left
    fl(g, 'M 155 100 C 155 92 161 86 169 86 C 177 86 183 92 183 100 C 183 108 177 114 169 114 C 161 114 155 108 155 100 Z', '#FFFFFF', a);
    // Eye whites — right
    fl(g, 'M 177 100 C 177 92 183 86 191 86 C 199 86 205 92 205 100 C 205 108 199 114 191 114 C 183 114 177 108 177 100 Z', '#FFFFFF', a);
    // Iris fill — left (dark brown)
    fl(g, 'M 161 100 C 161 94 165 90 170 90 C 175 90 179 94 179 100 C 179 106 175 110 170 110 C 165 110 161 106 161 100 Z', '#3E2723', a);
    // Iris fill — right (dark brown)
    fl(g, 'M 183 100 C 183 94 187 90 192 90 C 197 90 201 94 201 100 C 201 106 197 110 192 110 C 187 110 183 106 183 100 Z', '#3E2723', a);

    // Wispy hair fill — very subtle
    fl(g, 'M 150 68 C 155 52 168 45 180 46 C 192 45 205 52 210 68 C 205 60 195 54 180 55 C 165 54 155 60 150 68 Z', '#B8956A', a);
  },

  // ================================================================
  // Layer 8: Color fills — SCENE
  // Blanket base, stripe fills, pompon fills (6 bright colors)
  // ================================================================
  (g, a) => {
    // Blanket base fill — off-white/cream
    fl(g, 'M 20 20 L 340 20 L 340 430 L 20 430 Z', '#FEFDF5', a);

    // Stripe pair fills (light gray bands)
    fl(g, 'M 20 53 L 340 53 L 340 65 L 20 65 Z', '#D8D3CE', a);
    fl(g, 'M 20 118 L 340 118 L 340 130 L 20 130 Z', '#D8D3CE', a);
    fl(g, 'M 20 183 L 340 183 L 340 195 L 20 195 Z', '#D8D3CE', a);
    fl(g, 'M 20 253 L 340 253 L 340 265 L 20 265 Z', '#D8D3CE', a);
    fl(g, 'M 20 323 L 340 323 L 340 335 L 20 335 Z', '#D8D3CE', a);
    fl(g, 'M 20 393 L 340 393 L 340 405 L 20 405 Z', '#D8D3CE', a);

    // Pompon fills — 6 colorful circles, r=12
    // Red — top left
    fe(g, 'circle', {cx: 68, cy: 89, r: 13, fill: '#F44336'}, a);
    // Blue — top right
    fe(g, 'circle', {cx: 305, cy: 79, r: 13, fill: '#2196F3'}, a);
    // Yellow — mid left
    fe(g, 'circle', {cx: 50, cy: 279, r: 13, fill: '#FFC107'}, a);
    // Green — mid right
    fe(g, 'circle', {cx: 315, cy: 299, r: 13, fill: '#4CAF50'}, a);
    // Lime — bottom left
    fe(g, 'circle', {cx: 85, cy: 384, r: 13, fill: '#8BC34A'}, a);
    // Orange — bottom right
    fe(g, 'circle', {cx: 285, cy: 374, r: 13, fill: '#FF9800'}, a);

    // Picture frame corner fill hint
    fl(g, 'M 20 20 L 50 20 L 44 26 L 26 26 L 26 44 L 20 50 Z', '#C8B080', a);
  },

  // ================================================================
  // Layer 9: Polish — eye shines, cheek blush, pompon shines,
  // rosary cross shine, navel hint, name text
  // ================================================================
  (g, a) => {
    // Eye shine — left (2 white dots for sparkle)
    fe(g, 'circle', {cx: 167, cy: 96, r: 2, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 173, cy: 103, r: 1, fill: '#FFFFFF'}, a);
    // Eye shine — right
    fe(g, 'circle', {cx: 189, cy: 96, r: 2, fill: '#FFFFFF'}, a);
    fe(g, 'circle', {cx: 195, cy: 103, r: 1, fill: '#FFFFFF'}, a);

    // Cheek blush — left (warm pink ellipse)
    fe(g, 'ellipse', {cx: 152, cy: 125, rx: 12, ry: 7, fill: '#F8C0B0', opacity: '0.6'}, a);
    // Cheek blush — right
    fe(g, 'ellipse', {cx: 208, cy: 125, rx: 12, ry: 7, fill: '#F8C0B0', opacity: '0.6'}, a);

    // Pompon shine dots (one per pompon, offset upper-left)
    fe(g, 'circle', {cx: 64, cy: 85, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);
    fe(g, 'circle', {cx: 301, cy: 75, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);
    fe(g, 'circle', {cx: 46, cy: 275, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);
    fe(g, 'circle', {cx: 311, cy: 295, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);
    fe(g, 'circle', {cx: 81, cy: 380, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);
    fe(g, 'circle', {cx: 281, cy: 370, r: 3.5, fill: '#FFFFFF', opacity: '0.7'}, a);

    // Rosary cross shine
    fe(g, 'circle', {cx: 276, cy: 312, r: 2, fill: '#FFFFFF', opacity: '0.8'}, a);

    // Navel hint — tiny circle on belly
    fe(g, 'circle', {cx: 180, cy: 210, r: 2, fill: '#E8BFA0'}, a);

    // Letter M shadow detail — subtle depth
    fe(g, 'ellipse', {cx: 180, cy: 258, rx: 16, ry: 3, fill: '#D5D0CB', opacity: '0.4'}, a);

    // Baby name text
    const t = ce('text', {
      x: 180, y: 422,
      fill: '#C4A882',
      'font-size': '14',
      'text-anchor': 'middle',
      'font-family': 'serif'
    });
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
