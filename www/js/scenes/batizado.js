const batizadoLayers = [
  // ================================================================
  // Layer 0: Composition guides — baby head circle left, candle
  // rectangle center-right, flame guide, adult hand zone, azulejo grid
  // ================================================================
  (g, a) => {
    // Baby head oval guide (3/4 view, left side)
    pp(g, [
      'M 120 155 C 152 155 165 180 165 220 C 165 260 152 285 120 285 C 88 285 75 260 75 220 C 75 180 88 155 120 155 Z'
    ], a, lt);
    // Baby body/shoulders zone guide
    pp(g, ['M 60 285 L 60 440 L 195 440 L 195 285'], a, lt);
    // Large candle rectangle guide
    pp(g, ['M 218 75 L 262 75 L 262 390 L 218 390 Z'], a, lt);
    // Candle vertical center
    pp(g, ['M 240 30 L 240 400'], a, lt);
    // Flame teardrop guide
    pp(g, ['M 240 28 L 256 60 L 240 78 L 224 60 Z'], a, lt);
    // Adult hand zone guide (right side)
    pp(g, ['M 280 165 L 340 165 L 340 270 L 280 270 Z'], a, lt);
    // Small candle guide
    pp(g, ['M 310 105 L 324 105 L 324 235 L 310 235 Z'], a, lt);
    // Azulejo grid vertical guides
    pp(g, ['M 0 0 L 0 450', 'M 60 0 L 60 450', 'M 180 0 L 180 450', 'M 300 0 L 300 450', 'M 360 0 L 360 450'], a, lt);
    // Azulejo grid horizontal guides
    pp(g, ['M 0 0 L 360 0', 'M 0 60 L 360 60', 'M 0 120 L 360 120', 'M 0 300 L 360 300', 'M 0 360 L 360 360', 'M 0 420 L 360 420'], a, lt);
  },

  // ================================================================
  // Layer 1: Main outlines — baby head 3/4 view, neck, shoulders
  // and baptism shirt, large candle cylinder with rim
  // ================================================================
  (g, a) => {
    // Baby head — 3/4 view, turned slightly right, large oval
    pp(g, [
      'M 120 158 C 150 158 164 178 164 218 C 164 254 150 280 120 282 C 94 280 78 258 78 218 C 78 178 94 158 120 158 Z'
    ], a);
    // Neck — short baby neck
    pp(g, [
      'M 108 280 C 107 290 106 298 105 305',
      'M 134 280 C 135 290 136 298 137 305'
    ], a);
    // Shoulders and baptism shirt
    pp(g, [
      'M 105 305 C 88 310 62 322 48 338 L 48 440 L 192 440 L 192 338 C 178 322 152 310 137 305'
    ], a);
    // Large candle cylinder body
    pp(g, [
      'M 220 78 L 220 372 C 220 380 228 388 240 388 C 252 388 260 380 260 372 L 260 78'
    ], a);
    // Candle top ellipse — rim
    pp(g, [
      'M 220 78 C 220 68 228 62 240 62 C 252 62 260 68 260 78 C 260 88 252 92 240 92 C 228 92 220 88 220 78 Z'
    ], a);
    // Candle bottom ellipse
    pp(g, [
      'M 220 372 C 220 380 228 388 240 388 C 252 388 260 380 260 372'
    ], a);
  },

  // ================================================================
  // Layer 2: Face details — 3/4 perspective eyes (left smaller,
  // right larger), pupils looking right at candle, eyebrows,
  // small nose, slightly open mouth, left ear, upper eyelashes
  // ================================================================
  (g, a) => {
    // Left eye — farther from viewer, slightly smaller (3/4)
    pp(g, [
      'M 94 210 C 94 202 100 196 108 196 C 116 196 122 202 122 210 C 122 218 116 224 108 224 C 100 224 94 218 94 210 Z'
    ], a);
    // Right eye — closer to viewer, slightly larger (3/4)
    pp(g, [
      'M 124 208 C 124 199 131 192 140 192 C 149 192 156 199 156 208 C 156 217 149 224 140 224 C 131 224 124 217 124 208 Z'
    ], a);
    // Left iris outline
    pp(g, [
      'M 100 211 C 100 206 104 202 109 202 C 114 202 118 206 118 211 C 118 216 114 220 109 220 C 104 220 100 216 100 211 Z'
    ], a);
    // Right iris outline
    pp(g, [
      'M 130 209 C 130 204 134 199 140 199 C 146 199 150 204 150 209 C 150 214 146 219 140 219 C 134 219 130 214 130 209 Z'
    ], a);
    // Left pupil — looking right toward candle
    fe(g, 'circle', {cx: 112, cy: 211, r: 4.5, fill: '#2D1B0E'}, a);
    // Right pupil — looking right toward candle
    fe(g, 'circle', {cx: 144, cy: 209, r: 5.5, fill: '#2D1B0E'}, a);
    // Left eyebrow — gentle arch
    pp(g, ['M 94 194 C 100 188 110 186 122 190'], a);
    // Right eyebrow — gentle arch
    pp(g, ['M 124 190 C 134 184 146 183 156 188'], a);
    // Nose — small baby nose, 3/4 profile
    pp(g, [
      'M 138 228 C 140 234 143 240 146 243 C 143 245 139 244 137 241 C 135 238 136 234 138 228'
    ], a);
    // Nose bridge hint
    pp(g, ['M 136 220 C 137 224 138 228 138 228'], a, lt);
    // Nostril hint
    pp(g, ['M 136 242 C 138 244 142 245 144 244'], a, lt);
    // Mouth — slightly open in wonder
    pp(g, [
      'M 120 256 C 126 260 133 262 140 261 C 146 260 150 256 148 254'
    ], a);
    // Lower lip
    pp(g, [
      'M 122 257 C 128 263 135 265 141 264 C 146 262 150 258 148 254'
    ], a);
    // Left ear (visible in 3/4)
    pp(g, [
      'M 80 216 C 74 210 72 216 72 222 C 72 228 74 234 80 232'
    ], a);
    // Left ear inner fold
    pp(g, ['M 75 214 C 73 219 73 225 75 230'], a, lt);
    // Upper eyelashes — left eye
    pp(g, ['M 95 206 C 93 202 95 198 97 196'], a);
    pp(g, ['M 106 197 C 106 193 108 191 110 190'], a);
    // Upper eyelashes — right eye
    pp(g, ['M 126 202 C 124 198 126 194 128 192'], a);
    pp(g, ['M 140 193 C 140 189 142 187 144 186'], a);
    pp(g, ['M 153 200 C 156 196 158 194 158 192'], a);
  },

  // ================================================================
  // Layer 3: Hair and flames — wispy baby hair on top with side
  // wisps, large candle flame (teardrop + inner + core), small
  // candle flame
  // ================================================================
  (g, a) => {
    // Central wispy hair — top of head
    pp(g, ['M 108 164 C 112 154 120 148 128 150 C 136 148 144 154 148 164'], a);
    // Left wisp cluster
    pp(g, ['M 98 172 C 100 160 108 152 115 155'], a);
    pp(g, ['M 92 178 C 95 166 104 158 112 160'], a);
    // Right wisp cluster
    pp(g, ['M 152 172 C 148 160 140 152 133 155'], a);
    pp(g, ['M 158 178 C 155 166 146 158 138 160'], a);
    // Top fine strands — light pencil for wispy baby hair
    pp(g, [
      'M 104 162 C 110 150 118 146 125 148',
      'M 125 148 C 132 146 140 150 146 162'
    ], a, lt);
    // Side wisp — left temple
    pp(g, ['M 86 178 C 83 172 85 165 90 162'], a);
    // Side wisp — right temple
    pp(g, ['M 160 180 C 163 174 161 167 156 164'], a);
    // Forehead hairline hint
    pp(g, [
      'M 90 182 C 98 174 108 168 118 166',
      'M 130 166 C 140 168 148 174 155 182'
    ], a, lt);

    // === Large candle flame — teardrop shape ===
    pp(g, [
      'M 240 32 C 249 44 257 54 257 64 C 257 72 250 78 240 78 C 230 78 223 72 223 64 C 223 54 231 44 240 32 Z'
    ], a);
    // Inner flame
    pp(g, [
      'M 240 40 C 246 48 251 56 251 64 C 251 70 246 74 240 74 C 234 74 229 70 229 64 C 229 56 234 48 240 40 Z'
    ], a);
    // Flame core
    pp(g, [
      'M 240 50 C 244 55 246 60 246 65 C 246 70 244 72 240 72 C 236 72 234 70 234 65 C 234 60 236 55 240 50 Z'
    ], a);

    // === Small candle flame ===
    pp(g, [
      'M 317 112 C 320 117 323 122 323 126 C 323 130 320 132 317 132 C 314 132 311 130 311 126 C 311 122 314 117 317 112 Z'
    ], a);
  },

  // ================================================================
  // Layer 4: Clothing details — high collar, collar band, pintuck
  // lines, candle decorative bands, red letter A, gold medallion
  // with cross
  // ================================================================
  (g, a) => {
    // High collar — left side
    pp(g, [
      'M 108 282 C 104 288 100 294 100 300 C 100 306 104 310 108 310'
    ], a);
    // High collar — right side
    pp(g, [
      'M 134 282 C 138 288 142 294 142 300 C 142 306 138 310 134 310'
    ], a);
    // Collar band connecting both sides
    pp(g, [
      'M 100 300 C 108 304 120 306 132 304 C 138 302 142 300 142 300'
    ], a);
    // Collar top edge detail
    pp(g, [
      'M 100 294 C 108 298 120 300 132 298 C 138 296 142 294 142 294'
    ], a, lt);

    // Shirt front pintuck lines (vertical)
    pp(g, ['M 112 310 L 112 400'], a);
    pp(g, ['M 118 310 L 118 400'], a);
    pp(g, ['M 124 310 L 124 400'], a);
    pp(g, ['M 130 310 L 130 400'], a);

    // Shirt shoulder seams hint
    pp(g, ['M 88 315 C 95 310 105 308 108 310'], a, lt);
    pp(g, ['M 155 315 C 148 310 138 308 134 310'], a, lt);

    // === Candle decorative bands ===
    // Upper band pair
    pp(g, ['M 220 105 L 260 105'], a);
    pp(g, ['M 220 115 L 260 115'], a);
    // Lower band pair
    pp(g, ['M 220 328 L 260 328'], a);
    pp(g, ['M 220 340 L 260 340'], a);

    // Band inner texture (subtle horizontal hatching)
    pp(g, ['M 222 108 L 258 108', 'M 222 112 L 258 112'], a, lt);
    pp(g, ['M 222 332 L 258 332', 'M 222 336 L 258 336'], a, lt);

    // === Red letter A on candle ===
    pp(g, ['M 232 250 L 240 222 L 248 250'], a);
    pp(g, ['M 234 242 L 246 242'], a);
    // A serifs
    pp(g, ['M 230 250 L 234 250', 'M 246 250 L 250 250'], a);

    // === Gold medallion circle ===
    pp(g, [
      'M 240 268 C 249 268 256 275 256 284 C 256 293 249 300 240 300 C 231 300 224 293 224 284 C 224 275 231 268 240 268 Z'
    ], a);
    // Cross inside medallion — vertical
    pp(g, ['M 240 272 L 240 296'], a);
    // Cross inside medallion — horizontal
    pp(g, ['M 230 284 L 250 284'], a);
    // Cross decorative ends
    pp(g, [
      'M 238 272 L 242 272',
      'M 238 296 L 242 296',
      'M 230 282 L 230 286',
      'M 250 282 L 250 286'
    ], a, lt);

    // Medallion inner ring
    pp(g, [
      'M 240 271 C 247 271 253 277 253 284 C 253 291 247 297 240 297 C 233 297 227 291 227 284 C 227 277 233 271 240 271 Z'
    ], a, lt);
  },

  // ================================================================
  // Layer 5: Adult hand with small candle — hand from right side
  // with fingers, thin candle shaft, small flame, ribbon/bow
  // ================================================================
  (g, a) => {
    // Adult hand — palm approaching from right
    pp(g, [
      'M 310 192 C 318 188 326 190 328 196 C 330 202 328 212 322 218'
    ], a);
    // Thumb — curving around candle
    pp(g, [
      'M 310 192 C 306 196 302 204 300 212'
    ], a);
    // Index finger
    pp(g, [
      'M 308 198 C 312 194 316 193 318 196 C 320 200 318 210 314 216'
    ], a);
    // Middle finger
    pp(g, [
      'M 304 204 C 308 200 312 198 314 201 C 316 204 314 214 310 220'
    ], a);
    // Ring finger
    pp(g, [
      'M 300 210 C 304 206 308 204 310 207 C 312 210 310 220 306 226'
    ], a);
    // Pinky finger
    pp(g, [
      'M 296 216 C 300 212 304 210 306 213 C 308 216 306 226 302 230'
    ], a);
    // Finger creases
    pp(g, ['M 316 200 C 315 204 314 208 314 210'], a, lt);
    pp(g, ['M 312 206 C 311 210 310 214 310 216'], a, lt);
    pp(g, ['M 308 212 C 307 216 306 220 306 222'], a, lt);

    // === Small thin candle shaft ===
    pp(g, ['M 314 132 L 314 230 L 320 230 L 320 132 Z'], a);

    // === Small flame on thin candle ===
    pp(g, [
      'M 317 112 C 320 117 323 122 323 126 C 323 130 320 132 317 132 C 314 132 311 130 311 126 C 311 122 314 117 317 112 Z'
    ], a);

    // === Ribbon/bow on small candle ===
    // Left bow loop
    pp(g, [
      'M 306 188 C 300 182 296 176 300 173 C 304 170 310 176 314 182'
    ], a);
    // Right bow loop
    pp(g, [
      'M 320 182 C 324 176 330 170 334 173 C 338 176 334 182 328 188'
    ], a);
    // Left ribbon tail
    pp(g, [
      'M 306 188 C 302 196 298 206 296 212'
    ], a);
    // Right ribbon tail
    pp(g, [
      'M 328 188 C 332 196 336 206 338 212'
    ], a);
    // Left tail end flair
    pp(g, ['M 296 212 C 293 214 292 210 294 208'], a);
    // Right tail end flair
    pp(g, ['M 338 212 C 341 214 342 210 340 208'], a);
    // Ribbon center knot
    fe(g, 'circle', {cx: 317, cy: 185, r: 3.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW}, a);
    // Knot detail
    pp(g, ['M 315 183 L 319 187', 'M 319 183 L 315 187'], a, lt);
  },

  // ================================================================
  // Layer 6: Background azulejo tiles — tile grid lines, botanical
  // motifs in blue (at least 8 patterns) in corners and visible
  // background areas
  // ================================================================
  (g, a) => {
    // Tile grid vertical lines
    pp(g, ['M 0 0 L 0 450'], a);
    pp(g, ['M 60 0 L 60 450'], a);
    pp(g, ['M 120 0 L 120 450'], a);
    pp(g, ['M 180 0 L 180 450'], a);
    pp(g, ['M 240 0 L 240 450'], a);
    pp(g, ['M 300 0 L 300 450'], a);
    pp(g, ['M 360 0 L 360 450'], a);
    // Tile grid horizontal lines
    pp(g, ['M 0 0 L 360 0'], a);
    pp(g, ['M 0 60 L 360 60'], a);
    pp(g, ['M 0 120 L 360 120'], a);
    pp(g, ['M 0 180 L 360 180'], a);
    pp(g, ['M 0 240 L 360 240'], a);
    pp(g, ['M 0 300 L 360 300'], a);
    pp(g, ['M 0 360 L 360 360'], a);
    pp(g, ['M 0 420 L 360 420'], a);

    // === Botanical motifs (Portuguese azulejo style) ===
    // Motif 1 — top-left tile: leaf/scroll
    pp(g, [
      'M 15 15 C 22 8 30 8 36 15 C 42 22 44 34 36 40 C 30 44 22 40 15 34 C 8 28 8 22 15 15',
      'M 20 20 C 25 15 32 18 30 24 C 28 30 22 28 20 20'
    ], a);
    // Motif 2 — top-left second row: flower
    pp(g, [
      'M 25 78 C 30 72 38 72 42 78 C 46 84 46 92 42 98 C 38 104 30 104 25 98 C 20 92 20 84 25 78',
      'M 30 85 C 33 82 37 85 34 88 C 31 91 27 88 30 85'
    ], a);
    // Motif 3 — top-right tile: scroll with curl
    pp(g, [
      'M 315 15 C 322 8 330 8 336 15 C 342 22 344 34 336 40 C 330 44 322 40 315 34 C 308 28 308 22 315 15',
      'M 320 24 C 324 18 332 20 330 26 C 328 32 322 30 320 24'
    ], a);
    // Motif 4 — top-right second row: quatrefoil
    pp(g, [
      'M 330 75 C 335 70 340 74 338 80 C 342 76 348 78 346 84 C 350 88 346 94 340 92 C 344 96 340 102 334 98 C 330 102 324 98 328 92 C 322 94 320 88 326 84 C 322 80 326 74 330 75'
    ], a);
    // Motif 5 — bottom-left tile: fern leaf
    pp(g, [
      'M 18 370 C 25 364 35 366 40 374 C 45 382 44 394 36 400 C 28 404 20 398 16 390 C 12 382 12 374 18 370',
      'M 22 378 C 26 374 32 376 30 382 C 28 388 22 386 22 378'
    ], a);
    // Motif 6 — bottom-left second row: vine spiral
    pp(g, [
      'M 20 430 C 26 424 34 424 40 430 C 46 436 46 444 40 448 C 34 450 26 448 20 444 C 14 440 14 434 20 430',
      'M 28 434 C 32 430 36 434 34 438 C 32 442 28 440 28 434'
    ], a);
    // Motif 7 — bottom-right tile: sunburst
    pp(g, [
      'M 316 374 C 322 368 332 368 338 374 C 344 380 344 392 338 398 C 332 404 322 404 316 398 C 310 392 310 380 316 374',
      'M 327 380 L 327 392 M 321 386 L 333 386',
      'M 322 381 L 332 391 M 332 381 L 322 391'
    ], a);
    // Motif 8 — bottom-right second row: tulip
    pp(g, [
      'M 322 432 C 326 424 334 424 338 432 C 342 440 340 448 332 450 C 328 450 324 448 320 446 C 316 442 318 436 322 432',
      'M 330 432 L 330 446'
    ], a);
    // Motif 9 — mid-left visible area: rosette
    pp(g, [
      'M 20 190 C 28 184 38 186 40 194 C 42 202 36 210 28 210 C 20 210 14 202 16 194 C 16 188 18 186 20 190',
      'M 25 195 C 28 192 34 194 32 198 C 30 202 24 200 25 195'
    ], a);
    // Motif 10 — mid-right visible area: acanthus leaf hint
    pp(g, [
      'M 318 246 C 324 240 332 240 336 246 C 340 252 338 260 332 264 C 326 268 318 266 314 260 C 310 254 312 248 318 246'
    ], a);
  },

  // ================================================================
  // Layer 7: Color fills FIGURES — baby skin, ear, white shirt,
  // collar, eye whites, hair, adult hand, candle body, small candle,
  // ribbon
  // ================================================================
  (g, a) => {
    // Baby head skin fill
    fl(g, 'M 120 158 C 150 158 164 178 164 218 C 164 254 150 280 120 282 C 94 280 78 258 78 218 C 78 178 94 158 120 158 Z', '#F5D0A9', a);
    // Baby neck skin
    fl(g, 'M 108 280 C 107 290 106 298 105 305 L 137 305 C 136 298 135 290 134 280 Z', '#F5D0A9', a);
    // Ear skin
    fl(g, 'M 80 216 C 74 210 72 216 72 222 C 72 228 74 234 80 232 Z', '#F5D0A9', a);
    // White baptism shirt fill
    fl(g, 'M 105 305 C 88 310 62 322 48 338 L 48 440 L 192 440 L 192 338 C 178 322 152 310 137 305 Z', '#FEFEFA', a);
    // White collar fill
    fl(g, 'M 108 282 C 104 288 100 294 100 300 C 100 306 108 310 121 312 C 134 310 142 306 142 300 C 142 294 138 288 134 282 Z', '#FFFFFF', a);
    // Eye whites — left
    fl(g, 'M 94 210 C 94 202 100 196 108 196 C 116 196 122 202 122 210 C 122 218 116 224 108 224 C 100 224 94 218 94 210 Z', '#FFFFFF', a);
    // Eye whites — right
    fl(g, 'M 124 208 C 124 199 131 192 140 192 C 149 192 156 199 156 208 C 156 217 149 224 140 224 C 131 224 124 217 124 208 Z', '#FFFFFF', a);
    // Iris fill — left (dark brown)
    fl(g, 'M 100 211 C 100 206 104 202 109 202 C 114 202 118 206 118 211 C 118 216 114 220 109 220 C 104 220 100 216 100 211 Z', '#3E2723', a);
    // Iris fill — right (dark brown)
    fl(g, 'M 130 209 C 130 204 134 199 140 199 C 146 199 150 204 150 209 C 150 214 146 219 140 219 C 134 219 130 214 130 209 Z', '#3E2723', a);
    // Baby hair fill — light brown wisps
    fl(g, 'M 92 178 C 95 162 108 150 125 150 C 142 148 155 162 158 178 C 155 172 145 164 125 165 C 105 164 95 172 92 178 Z', '#A0845C', a);
    // Adult hand skin fill
    fl(g, 'M 296 216 C 300 210 306 200 312 194 C 318 188 328 188 330 196 C 332 204 326 218 318 226 C 312 232 304 232 300 228 Z', '#F0C8A0', a);
    // Large candle — white body fill
    fl(g, 'M 220 78 L 220 372 C 220 380 228 388 240 388 C 252 388 260 380 260 372 L 260 78 C 260 88 252 92 240 92 C 228 92 220 88 220 78 Z', '#FAFAFA', a);
    // Candle top fill
    fl(g, 'M 220 78 C 220 88 228 92 240 92 C 252 92 260 88 260 78 C 260 68 252 62 240 62 C 228 62 220 68 220 78 Z', '#F0F0F0', a);
    // Small candle fill
    fl(g, 'M 314 132 L 314 230 L 320 230 L 320 132 Z', '#FAFAFA', a);
    // Ribbon bow fill
    fl(g, 'M 306 188 C 300 182 296 176 300 173 C 304 170 310 176 314 182 L 320 182 C 324 176 330 170 334 173 C 338 176 334 182 328 188 Z', '#F5F5F5', a);
  },

  // ================================================================
  // Layer 8: Color fills SCENE — background tile white, azulejo blue
  // motifs, large flame (outer/inner/core), small flame, red A,
  // gold medallion, decorative bands
  // ================================================================
  (g, a) => {
    // Full background tile white
    fl(g, 'M 0 0 L 360 0 L 360 450 L 0 450 Z', '#F8F8FF', a);

    // === Azulejo blue motif fills ===
    // Motif 1
    fl(g, 'M 15 15 C 22 8 30 8 36 15 C 42 22 44 34 36 40 C 30 44 22 40 15 34 C 8 28 8 22 15 15 Z', '#1565C0', a);
    // Motif 2
    fl(g, 'M 25 78 C 30 72 38 72 42 78 C 46 84 46 92 42 98 C 38 104 30 104 25 98 C 20 92 20 84 25 78 Z', '#1565C0', a);
    // Motif 3
    fl(g, 'M 315 15 C 322 8 330 8 336 15 C 342 22 344 34 336 40 C 330 44 322 40 315 34 C 308 28 308 22 315 15 Z', '#1565C0', a);
    // Motif 4
    fl(g, 'M 330 75 C 335 70 340 74 338 80 C 342 76 348 78 346 84 C 350 88 346 94 340 92 C 344 96 340 102 334 98 C 330 102 324 98 328 92 C 322 94 320 88 326 84 C 322 80 326 74 330 75 Z', '#1565C0', a);
    // Motif 5
    fl(g, 'M 18 370 C 25 364 35 366 40 374 C 45 382 44 394 36 400 C 28 404 20 398 16 390 C 12 382 12 374 18 370 Z', '#1565C0', a);
    // Motif 6
    fl(g, 'M 20 430 C 26 424 34 424 40 430 C 46 436 46 444 40 448 C 34 450 26 448 20 444 C 14 440 14 434 20 430 Z', '#1565C0', a);
    // Motif 7
    fl(g, 'M 316 374 C 322 368 332 368 338 374 C 344 380 344 392 338 398 C 332 404 322 404 316 398 C 310 392 310 380 316 374 Z', '#1565C0', a);
    // Motif 8
    fl(g, 'M 322 432 C 326 424 334 424 338 432 C 342 440 340 448 332 450 C 328 450 324 448 320 446 C 316 442 318 436 322 432 Z', '#1565C0', a);
    // Motif 9
    fl(g, 'M 20 190 C 28 184 38 186 40 194 C 42 202 36 210 28 210 C 20 210 14 202 16 194 C 16 188 18 186 20 190 Z', '#1565C0', a);
    // Motif 10
    fl(g, 'M 318 246 C 324 240 332 240 336 246 C 340 252 338 260 332 264 C 326 268 318 266 314 260 C 310 254 312 248 318 246 Z', '#1565C0', a);

    // === Large candle flame fills ===
    // Outer flame — orange
    fl(g, 'M 240 32 C 249 44 257 54 257 64 C 257 72 250 78 240 78 C 230 78 223 72 223 64 C 223 54 231 44 240 32 Z', '#FF9800', a);
    // Inner flame — yellow
    fl(g, 'M 240 40 C 246 48 251 56 251 64 C 251 70 246 74 240 74 C 234 74 229 70 229 64 C 229 56 234 48 240 40 Z', '#FFC107', a);
    // Flame core — white-yellow
    fl(g, 'M 240 50 C 244 55 246 60 246 65 C 246 70 244 72 240 72 C 236 72 234 70 234 65 C 234 60 236 55 240 50 Z', '#FFF9C4', a);
    // Small candle flame — warm yellow
    fl(g, 'M 317 112 C 320 117 323 122 323 126 C 323 130 320 132 317 132 C 314 132 311 130 311 126 C 311 122 314 117 317 112 Z', '#FFC107', a);

    // === Red letter A fill ===
    fl(g, 'M 232 250 L 240 222 L 248 250 L 244 250 L 240 232 L 236 250 Z', '#C62828', a);

    // === Gold medallion fill ===
    fl(g, 'M 240 268 C 249 268 256 275 256 284 C 256 293 249 300 240 300 C 231 300 224 293 224 284 C 224 275 231 268 240 268 Z', '#FFD700', a);

    // === Decorative bands fill ===
    fl(g, 'M 220 105 L 260 105 L 260 115 L 220 115 Z', '#E8D5B0', a);
    fl(g, 'M 220 328 L 260 328 L 260 340 L 220 340 Z', '#E8D5B0', a);
  },

  // ================================================================
  // Layer 9: Polish — warm candlelight eye reflections, cheek blush,
  // flame glow halos, wax drip details, cross highlight, ribbon
  // highlight
  // ================================================================
  (g, a) => {
    // === Eye reflections — warm candlelight ===
    // Left eye — warm yellow reflection (from large candle)
    fe(g, 'circle', {cx: 113, cy: 207, r: 2.5, fill: '#FFF9C4'}, a);
    // Left eye — white sparkle
    fe(g, 'circle', {cx: 110, cy: 210, r: 1, fill: '#FFFFFF'}, a);
    // Right eye — warm yellow reflection (larger, candle is closer)
    fe(g, 'circle', {cx: 146, cy: 205, r: 3, fill: '#FFF9C4'}, a);
    // Right eye — white sparkle
    fe(g, 'circle', {cx: 143, cy: 208, r: 1.2, fill: '#FFFFFF'}, a);
    // Second warm reflection in right eye (small candle)
    fe(g, 'circle', {cx: 148, cy: 212, r: 1, fill: '#FFF9C4', opacity: '0.7'}, a);

    // === Cheek blush — warm from candlelight ===
    // Left cheek
    fe(g, 'ellipse', {cx: 98, cy: 248, rx: 10, ry: 6, fill: '#F8C0B0', opacity: '0.55'}, a);
    // Right cheek (slightly warmer — closer to candle)
    fe(g, 'ellipse', {cx: 150, cy: 246, rx: 11, ry: 7, fill: '#F8C0B0', opacity: '0.6'}, a);

    // === Flame glow halos ===
    // Large flame glow — outer warm halo
    fe(g, 'circle', {cx: 240, cy: 58, r: 35, fill: '#FFF9C4', opacity: '0.2'}, a);
    // Large flame glow — inner halo
    fe(g, 'circle', {cx: 240, cy: 58, r: 22, fill: '#FFF9C4', opacity: '0.25'}, a);
    // Small flame glow halo
    fe(g, 'circle', {cx: 317, cy: 124, r: 12, fill: '#FFF9C4', opacity: '0.25'}, a);

    // === Warm light on baby's face (side glow) ===
    fe(g, 'ellipse', {cx: 155, cy: 220, rx: 6, ry: 20, fill: '#FFF9C4', opacity: '0.12'}, a);

    // === Wax drip details on large candle ===
    pp(g, ['M 224 135 C 222 144 223 152 224 148'], a);
    pp(g, ['M 257 155 C 259 164 258 172 257 168'], a);
    pp(g, ['M 225 200 C 223 208 224 214 225 210'], a);

    // === Cross highlight in medallion ===
    fe(g, 'circle', {cx: 237, cy: 281, r: 1.5, fill: '#FFFFFF', opacity: '0.8'}, a);
    // Medallion rim shine
    fe(g, 'ellipse', {cx: 234, cy: 274, rx: 3, ry: 1.5, fill: '#FFFFFF', opacity: '0.4'}, a);

    // === Ribbon bow highlights ===
    fe(g, 'circle', {cx: 300, cy: 176, r: 1, fill: '#FFFFFF', opacity: '0.8'}, a);
    fe(g, 'circle', {cx: 334, cy: 176, r: 1, fill: '#FFFFFF', opacity: '0.8'}, a);

    // === Candle surface highlight (vertical shine) ===
    fl(g, 'M 228 92 L 228 370 L 230 370 L 230 92 Z', '#FFFFFF', a);

    // === Lip color subtle fill ===
    fl(g, 'M 122 256 C 128 261 135 263 141 262 C 147 260 150 256 148 254 C 144 258 136 260 128 258 Z', '#E8A0A0', a);

    // === Candle wick ===
    pp(g, ['M 240 62 L 240 38'], a);

    // === Nose tip highlight ===
    fe(g, 'circle', {cx: 143, cy: 240, r: 1.5, fill: '#FDECD0', opacity: '0.6'}, a);
  }
];
