const paitioLayers = [
  // =====================================================================
  // Layer 0: Composition guides — table edge, three figure zones, wall
  // =====================================================================
  (g, a) => {
    // Table edge horizontal guide at y~300
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Table bottom extent
    pp(g, ['M 0 300 L 0 450', 'M 360 300 L 360 450'], a, lt);
    // Ricardo/Pai zone (left, stocky) — wider zone
    pp(g, ['M 5 40 L 5 300', 'M 145 40 L 145 300'], a, lt);
    // Ricardo center crosshair
    pp(g, ['M 75 70 L 75 170', 'M 25 120 L 125 120'], a, lt);
    // Miguel zone (center, child) — narrower
    pp(g, ['M 140 70 L 140 300', 'M 225 70 L 225 300'], a, lt);
    // Miguel center crosshair
    pp(g, ['M 182 90 L 182 200', 'M 148 150 L 218 150'], a, lt);
    // Bruno/Tio zone (right, lean, leaning forward)
    pp(g, ['M 220 20 L 220 300', 'M 355 20 L 355 300'], a, lt);
    // Bruno center crosshair
    pp(g, ['M 290 50 L 290 170', 'M 235 110 L 345 110'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 25 185 L 340 185'], a, lt);
    // Wall top line
    pp(g, ['M 0 0 L 360 0'], a, lt);
    // Frame zone guides (photos on wall)
    pp(g, ['M 30 15 L 88 15 L 88 55 L 30 55 Z'], a, lt);
    pp(g, ['M 145 10 L 215 10 L 215 55 L 145 55 Z'], a, lt);
    pp(g, ['M 270 14 L 340 14 L 340 56 L 270 56 Z'], a, lt);
    // Head proportion circles
    pp(g, ['M 45 76 C 45 76 105 76 105 120 C 105 152 80 168 75 168 C 62 168 45 152 45 120 Z'], a, lt);
    pp(g, ['M 157 110 C 157 110 207 110 207 148 C 207 178 188 192 182 192 C 170 192 157 178 157 148 Z'], a, lt);
    pp(g, ['M 262 70 C 262 70 318 70 318 108 C 318 140 296 156 290 156 C 278 156 262 140 262 108 Z'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — three bodies, heads, necks, torsos, arms
  // =====================================================================
  (g, a) => {
    // ---- RICARDO/PAI (left, stocky build, x~75) ----
    // Head — wider, rounder for stocky build, slight leftward tilt
    pp(g, [
      'M 48 120 C 46 98 52 82 60 76 C 68 70 80 68 90 72 C 100 78 106 92 104 114 C 104 128 100 140 94 150 C 88 158 84 162 78 166 C 72 164 66 158 60 150 C 54 142 50 132 48 120 Z'
    ], a);
    // Left ear — visible, slightly protruding
    pp(g, [
      'M 46 112 C 40 108 36 110 35 118 C 34 126 38 132 44 130',
      'M 38 116 C 36 120 36 126 38 130'
    ], a);
    // Right ear — partially hidden by head angle
    pp(g, [
      'M 106 110 C 112 106 116 110 116 118 C 116 126 112 130 106 128',
      'M 112 114 C 114 118 114 124 112 128'
    ], a);
    // Neck — thick, stocky
    pp(g, [
      'M 66 164 C 64 170 62 176 62 182',
      'M 88 164 C 90 170 92 176 92 182'
    ], a);
    // Left shoulder/trapezius — muscular slope
    pp(g, [
      'M 62 182 C 50 184 38 188 28 196 C 18 204 12 214 10 228'
    ], a);
    // Right shoulder — broader
    pp(g, [
      'M 92 182 C 104 184 116 188 126 196 C 134 204 138 214 140 228'
    ], a);
    // Torso — wide, stocky barrel chest
    pp(g, [
      'M 10 228 C 8 248 8 268 10 288 L 14 300',
      'M 140 228 C 142 248 142 268 140 288 L 138 300'
    ], a);
    // Left arm — extended back, resting on chair behind
    pp(g, [
      'M 28 196 C 22 206 16 220 12 236 C 8 252 6 268 8 280 C 10 290 14 296 20 298'
    ], a);
    // Left arm inner contour
    pp(g, [
      'M 34 200 C 28 210 22 224 18 240 C 14 256 14 270 16 280'
    ], a);
    // Right arm — relaxed at side, hand near table
    pp(g, [
      'M 126 196 C 132 210 136 228 138 248 C 140 268 140 284 140 298'
    ], a);
    // Right arm inner
    pp(g, [
      'M 120 200 C 126 214 130 232 132 250 C 134 268 134 282 134 296'
    ], a);

    // ---- MIGUEL (center, child ~4yo, x~182) ----
    // Head — round child proportions, looking slightly down
    pp(g, [
      'M 157 148 C 155 130 160 118 168 112 C 176 108 186 106 194 110 C 202 116 208 128 207 148 C 208 162 204 174 198 182 C 192 188 188 192 183 194 C 178 192 174 188 168 182 C 162 174 158 162 157 148 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 155 144 C 149 140 145 143 145 151 C 145 159 149 163 155 161',
      'M 148 148 C 146 152 146 158 148 162'
    ], a);
    // Right ear
    pp(g, [
      'M 209 142 C 215 138 219 141 219 149 C 219 157 215 161 209 159',
      'M 216 146 C 218 150 218 156 216 160'
    ], a);
    // Neck — thin child neck
    pp(g, [
      'M 174 192 C 172 198 170 204 170 208',
      'M 192 192 C 194 198 196 204 196 208'
    ], a);
    // Shoulders — child narrow
    pp(g, [
      'M 170 208 C 160 210 152 216 148 224 C 144 232 142 240 142 248',
      'M 196 208 C 206 210 214 216 218 224 C 222 232 224 240 224 248'
    ], a);
    // Torso
    pp(g, [
      'M 142 248 C 140 264 140 280 142 294 L 144 300',
      'M 224 248 C 226 264 226 280 224 294 L 222 300'
    ], a);
    // Left arm — down on table, holding egg
    pp(g, [
      'M 148 224 C 142 238 138 254 136 270 C 134 282 134 292 136 298'
    ], a);
    // Left arm inner
    pp(g, [
      'M 154 228 C 148 242 144 258 142 274 C 140 284 140 292 142 296'
    ], a);
    // Right arm — on table
    pp(g, [
      'M 218 224 C 224 238 228 254 230 270 C 232 282 230 292 228 298'
    ], a);
    // Right arm inner
    pp(g, [
      'M 212 228 C 218 242 222 258 224 274 C 226 284 224 292 222 296'
    ], a);

    // ---- BRUNO/TIO (right, lean build, x~290, leaning forward) ----
    // Head — lean, angular face, tilted slightly left (leaning toward Miguel)
    pp(g, [
      'M 266 108 C 264 88 270 74 278 68 C 286 64 296 62 304 68 C 314 76 318 90 316 108 C 318 122 314 134 308 142 C 302 150 298 154 292 158 C 286 156 282 150 276 142 C 270 134 266 122 266 108 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 264 104 C 258 100 254 103 254 111 C 254 119 258 123 264 121',
      'M 257 108 C 255 112 255 118 257 122'
    ], a);
    // Right ear — mostly hidden by head angle
    pp(g, [
      'M 318 102 C 324 98 328 101 328 109 C 328 117 324 121 318 119'
    ], a);
    // Neck — lean, tendons visible at angle
    pp(g, [
      'M 282 156 C 280 162 278 168 276 174',
      'M 300 156 C 302 162 304 168 306 174'
    ], a);
    // Shoulders — athletic, leaning forward significantly
    pp(g, [
      'M 276 174 C 264 176 252 180 244 188 C 236 196 232 206 230 218',
      'M 306 174 C 316 176 326 180 334 188 C 342 196 346 206 350 218'
    ], a);
    // Torso — lean, forward lean
    pp(g, [
      'M 230 218 C 228 238 226 260 228 282 L 230 300',
      'M 350 218 C 352 238 354 260 352 282 L 350 300'
    ], a);
    // Left arm — extended forward showing egg to Miguel
    pp(g, [
      'M 244 188 C 238 200 232 216 228 234 C 224 248 222 262 224 274 C 226 282 228 288 232 292'
    ], a);
    // Left arm inner
    pp(g, [
      'M 250 192 C 244 204 238 220 234 238 C 230 252 228 264 230 276'
    ], a);
    // Right arm — at side, partially visible
    pp(g, [
      'M 334 188 C 340 200 344 218 348 238 C 350 254 350 270 348 286 L 346 300'
    ], a);
    // Right arm inner
    pp(g, [
      'M 328 192 C 334 204 338 222 342 242 C 344 258 344 274 342 288'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — extremely detailed for all three
  // =====================================================================
  (g, a) => {
    // ---- RICARDO/PAI face (left, x~75) ----
    // Left eye — slightly squinting, tired/relaxed look
    pp(g, [
      'M 58 114 C 60 108 64 106 68 108 C 72 110 74 114 74 118 C 74 122 72 126 68 126 C 64 126 60 122 58 118 Z'
    ], a);
    // Left eye upper lid fold — heavy, defining squint
    pp(g, [
      'M 56 112 C 60 106 66 104 72 106',
      'M 57 110 C 62 104 68 102 74 104'
    ], a);
    // Left eye lower lid
    pp(g, ['M 60 122 C 64 124 68 124 72 122'], a, lt);
    // Left eye crease under eye (slight bag)
    pp(g, ['M 58 126 C 62 128 66 130 72 128'], a, lt);
    // Right eye — slightly squinting
    pp(g, [
      'M 82 112 C 84 106 88 104 92 106 C 96 108 98 112 98 116 C 98 120 96 124 92 124 C 88 124 84 120 82 116 Z'
    ], a);
    // Right eye upper lid fold
    pp(g, [
      'M 80 110 C 84 104 90 102 96 104',
      'M 81 108 C 86 102 92 100 98 102'
    ], a);
    // Right eye lower lid
    pp(g, ['M 84 120 C 88 122 92 122 96 120'], a, lt);
    // Right eye crease
    pp(g, ['M 82 124 C 86 126 90 128 96 126'], a, lt);
    // Left pupil — dark brown iris with pupil
    fe(g, 'circle', { cx: 66, cy: 116, r: 4, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 66, cy: 116, r: 2, fill: a ? HL : '#1A0E08' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 90, cy: 114, r: 4, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 90, cy: 114, r: 2, fill: a ? HL : '#1A0E08' }, a);
    // Eyebrows — thick, dark, prominent, slightly furrowed
    pp(g, [
      'M 52 106 C 58 98 66 96 74 100',
      'M 54 104 C 60 96 68 94 76 98',
      'M 55 108 C 61 100 69 98 77 102'
    ], a);
    pp(g, [
      'M 80 98 C 88 94 96 96 104 102',
      'M 82 96 C 90 92 98 94 106 100',
      'M 81 100 C 89 96 97 98 105 104'
    ], a);
    // Nose — broad, slightly bulbous tip
    pp(g, [
      'M 76 104 C 75 112 74 120 73 128',
      'M 78 104 C 77 112 76 120 75 128'
    ], a);
    // Nose tip and nostrils — wide
    pp(g, [
      'M 66 132 C 68 136 72 140 76 142 C 80 140 84 138 88 136 C 92 132 92 130 90 130',
      'M 68 134 C 70 130 72 128 74 128',
      'M 86 132 C 84 128 82 126 80 126'
    ], a);
    // Nose bridge shadow line
    pp(g, ['M 76 106 C 76 114 76 122 76 130'], a, lt);
    // Nasolabial folds — deep, characteristic
    pp(g, [
      'M 64 134 C 62 140 60 146 60 152',
      'M 90 132 C 92 138 94 144 94 150'
    ], a);
    // Mouth — relaxed, neutral, slightly parted
    pp(g, [
      'M 62 152 C 66 148 72 146 78 148 C 84 146 88 148 92 152'
    ], a);
    // Upper lip detail — cupid's bow
    pp(g, [
      'M 66 150 C 70 146 74 144 78 146 C 82 144 86 146 90 150'
    ], a);
    // Lower lip — full
    pp(g, [
      'M 64 154 C 68 160 74 162 78 162 C 82 162 88 160 92 154'
    ], a);
    // Chin crease
    pp(g, ['M 70 168 C 74 170 80 170 84 168'], a, lt);
    // Chin contour
    pp(g, ['M 68 164 C 72 168 76 170 80 170 C 84 168 88 164 90 160'], a, lt);
    // Jaw angle definition
    pp(g, ['M 48 132 C 50 142 54 152 58 158'], a, lt);
    pp(g, ['M 104 128 C 102 138 98 148 94 154'], a, lt);

    // ---- MIGUEL face (center, x~182) ----
    // Left eye — looking down at egg, partially closed
    pp(g, [
      'M 168 144 C 170 138 174 136 178 138 C 182 140 184 144 184 148 C 184 152 182 154 178 154 C 174 154 170 150 168 146 Z'
    ], a);
    // Left eye upper lid — lowered, looking down
    pp(g, [
      'M 166 142 C 170 136 176 134 182 136',
      'M 167 140 C 172 134 178 132 184 134'
    ], a);
    // Left eye lower lashes
    pp(g, ['M 170 152 C 174 154 178 154 182 152'], a, lt);
    // Right eye — looking down
    pp(g, [
      'M 188 142 C 190 136 194 134 198 136 C 202 138 204 142 204 146 C 204 150 202 152 198 152 C 194 152 190 148 188 144 Z'
    ], a);
    // Right eye upper lid
    pp(g, [
      'M 186 140 C 190 134 196 132 202 134',
      'M 187 138 C 192 132 198 130 204 132'
    ], a);
    // Right eye lower lashes
    pp(g, ['M 190 150 C 194 152 198 152 202 150'], a, lt);
    // Left pupil — positioned low (looking down at egg)
    fe(g, 'circle', { cx: 176, cy: 148, r: 3.2, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 176, cy: 148, r: 1.6, fill: a ? HL : '#1A0E08' }, a);
    // Right pupil — positioned low
    fe(g, 'circle', { cx: 196, cy: 146, r: 3.2, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 196, cy: 146, r: 1.6, fill: a ? HL : '#1A0E08' }, a);
    // Eyebrows — softer child brows, gentle arch
    pp(g, [
      'M 164 136 C 170 130 178 128 186 132',
      'M 165 134 C 172 128 180 126 188 130'
    ], a);
    pp(g, [
      'M 188 130 C 194 128 200 130 208 134',
      'M 189 128 C 196 126 202 128 210 132'
    ], a);
    // Nose — small child button nose
    pp(g, [
      'M 182 140 C 181 148 180 156 179 162'
    ], a);
    // Nose tip — round, childlike
    pp(g, [
      'M 175 164 C 177 168 181 170 184 170 C 187 168 190 166 192 162',
      'M 177 164 C 179 162 181 160 183 160',
      'M 189 162 C 187 160 185 158 183 158'
    ], a);
    // Mouth — slightly pursed, concentrating, looking at eggs
    pp(g, [
      'M 172 178 C 176 174 180 172 184 174 C 188 172 192 174 196 178'
    ], a);
    // Upper lip detail
    pp(g, [
      'M 174 176 C 178 172 182 170 184 172 C 186 170 190 172 194 176'
    ], a);
    // Lower lip
    pp(g, [
      'M 174 180 C 178 184 182 186 186 186 C 190 184 194 182 196 178'
    ], a);
    // Chin — round child chin
    pp(g, ['M 178 190 C 182 192 186 192 190 190'], a, lt);
    // Cheek fullness lines
    pp(g, ['M 160 164 C 162 168 164 172 166 174'], a, lt);
    pp(g, ['M 204 162 C 202 166 200 170 198 172'], a, lt);

    // ---- BRUNO/TIO face (right, x~290) ----
    // Left eye — warm, slightly crinkled from smiling
    pp(g, [
      'M 276 104 C 278 98 282 96 286 98 C 290 100 292 104 292 108 C 292 112 290 116 286 116 C 282 116 278 112 276 108 Z'
    ], a);
    // Left eye upper lid — smile crinkle
    pp(g, [
      'M 274 102 C 278 96 284 94 290 96',
      'M 275 100 C 280 94 286 92 292 94'
    ], a);
    // Left eye lower lid — crinkled from smile
    pp(g, ['M 278 112 C 282 114 286 114 290 112'], a, lt);
    // Left eye smile crease
    pp(g, ['M 276 116 C 280 118 284 120 290 118'], a, lt);
    // Right eye — crinkled smile
    pp(g, [
      'M 298 102 C 300 96 304 94 308 96 C 312 98 314 102 314 106 C 314 110 312 114 308 114 C 304 114 300 110 298 106 Z'
    ], a);
    // Right eye upper lid
    pp(g, [
      'M 296 100 C 300 94 306 92 312 94',
      'M 297 98 C 302 92 308 90 314 92'
    ], a);
    // Right eye lower lid
    pp(g, ['M 300 110 C 304 112 308 112 312 110'], a, lt);
    // Right eye smile crease
    pp(g, ['M 298 114 C 302 116 306 118 312 116'], a, lt);
    // Left pupil
    fe(g, 'circle', { cx: 284, cy: 106, r: 4, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 284, cy: 106, r: 2, fill: a ? HL : '#1A0E08' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 306, cy: 104, r: 4, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 306, cy: 104, r: 2, fill: a ? HL : '#1A0E08' }, a);
    // Eyebrows — neat, defined
    pp(g, [
      'M 272 96 C 278 88 286 86 294 90',
      'M 274 94 C 280 86 288 84 296 88'
    ], a);
    pp(g, [
      'M 296 88 C 302 86 310 88 318 94',
      'M 298 86 C 304 84 312 86 320 92'
    ], a);
    // Nose — straight, narrow, lean
    pp(g, [
      'M 290 96 C 289 104 288 112 287 118',
      'M 292 96 C 291 104 290 112 289 118'
    ], a);
    // Nose tip — angular
    pp(g, [
      'M 282 122 C 284 126 288 128 292 128 C 296 126 298 124 300 120',
      'M 284 122 C 286 118 288 116 290 116',
      'M 298 120 C 296 116 294 114 292 114'
    ], a);
    // Nose bridge subtle
    pp(g, ['M 290 94 C 290 102 290 110 290 118'], a, lt);
    // Mouth — warm, open smile showing teeth
    pp(g, [
      'M 276 138 C 280 132 286 130 292 132 C 298 130 302 132 308 138'
    ], a);
    // Upper teeth line
    pp(g, ['M 278 138 L 306 138'], a);
    // Individual teeth hints
    pp(g, [
      'M 284 138 L 284 142',
      'M 290 138 L 290 143',
      'M 296 138 L 296 142',
      'M 302 138 L 302 141'
    ], a, lt);
    // Lower lip with smile
    pp(g, [
      'M 278 140 C 282 148 288 152 292 152 C 296 152 302 148 306 140'
    ], a);
    // Smile lines — crow's feet
    pp(g, [
      'M 272 112 C 268 116 266 120 264 124',
      'M 318 110 C 322 114 324 118 326 122'
    ], a, lt);
    // Chin — angular
    pp(g, [
      'M 284 154 C 288 158 294 158 298 154'
    ], a, lt);
    // Jaw definition — lean
    pp(g, ['M 266 124 C 268 134 270 144 274 150'], a, lt);
    pp(g, ['M 316 120 C 314 130 312 140 308 148'], a, lt);
    // Cheekbone highlights
    pp(g, ['M 274 118 C 278 120 282 120 286 118'], a, lt);
    pp(g, ['M 298 116 C 302 118 306 118 310 116'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and facial hair
  // =====================================================================
  (g, a) => {
    // ---- RICARDO hair — dark brown, short, slightly messy/buzzcut ----
    // Hairline contour — receding slightly at temples
    pp(g, [
      'M 50 116 C 48 98 54 82 62 76 C 68 70 76 68 84 68 C 92 70 98 72 102 78 C 108 86 110 96 108 112'
    ], a);
    // Hair mass — dense short hair
    pp(g, [
      'M 54 112 C 52 96 58 82 66 76 C 74 70 82 68 88 68 C 96 70 102 74 106 82 C 110 90 110 102 108 110'
    ], a);
    // Inner volume and texture
    pp(g, [
      'M 58 108 C 58 96 62 84 70 78 C 78 72 86 70 92 72 C 100 76 104 86 104 98 C 106 106 106 110 104 112'
    ], a);
    // Hair texture strands — short
    pp(g, [
      'M 64 72 C 70 68 78 66 86 68',
      'M 58 80 C 66 74 76 72 86 74',
      'M 54 90 C 62 82 74 80 84 82',
      'M 52 100 C 60 92 72 90 82 92',
      'M 96 72 C 100 76 104 82 106 90',
      'M 90 70 C 96 72 100 78 104 86'
    ], a, lt);
    // Temple hair thinning
    pp(g, [
      'M 52 108 C 50 102 50 94 52 86',
      'M 106 106 C 108 100 108 92 106 84'
    ], a, lt);

    // RICARDO beard/stubble — dense, dark, covering jaw and chin
    const ricStubble = [];
    // Left jawline — dense stubble
    for (let i = 0; i < 8; i++) {
      ricStubble.push([50 + i * 2, 140 + i * 3]);
      ricStubble.push([52 + i * 2, 142 + i * 3]);
    }
    // Chin area — very dense
    for (let x = 64; x <= 92; x += 2) {
      for (let y = 162; y <= 172; y += 2.5) {
        ricStubble.push([x + (Math.sin(x * y) * 0.5), y + (Math.cos(x * y) * 0.5)]);
      }
    }
    // Right jawline
    for (let i = 0; i < 8; i++) {
      ricStubble.push([94 + i * 2, 156 - i * 2]);
      ricStubble.push([96 + i * 2, 154 - i * 2]);
    }
    // Upper lip area
    for (let x = 68; x <= 88; x += 2) {
      ricStubble.push([x, 146]);
      ricStubble.push([x + 1, 148]);
    }
    // Neck stubble
    for (let x = 66; x <= 90; x += 2.5) {
      ricStubble.push([x, 174]);
      ricStubble.push([x + 1, 176]);
    }
    // Under chin
    for (let x = 68; x <= 88; x += 2) {
      ricStubble.push([x, 170]);
    }
    ricStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx: cx.toFixed(1), cy: cy.toFixed(1), r: 0.5, fill: a ? HL : '#2C1810' }, a);
    });
    // Stubble shadow patches for denser areas
    pp(g, [
      'M 66 164 C 70 166 76 168 80 168 C 84 166 88 164 90 162',
      'M 68 170 C 74 172 80 174 84 172 C 88 170 90 168 92 164'
    ], a, lt);

    // ---- MIGUEL hair — dark brown, short, child texture, slightly tousled ----
    // Hair mass contour — full, round child hair
    pp(g, [
      'M 160 144 C 158 126 162 114 170 108 C 178 102 188 100 196 104 C 204 108 210 118 212 132 C 214 142 214 148 212 154'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 164 140 C 164 128 168 118 174 112 C 182 106 192 104 198 108 C 206 114 208 124 210 136 C 212 144 212 148 210 150'
    ], a);
    // Hair texture — soft child strands
    pp(g, [
      'M 174 104 C 180 100 188 98 196 102',
      'M 168 110 C 176 104 186 102 196 106',
      'M 164 120 C 172 112 184 110 194 114',
      'M 162 130 C 170 122 182 120 192 124',
      'M 160 138 C 168 130 180 128 190 132',
      'M 200 104 C 206 108 210 114 212 124',
      'M 196 102 C 204 106 208 112 210 120'
    ], a, lt);
    // Fringe/bangs detail
    pp(g, [
      'M 166 116 C 170 110 176 106 184 106 C 192 108 198 112 202 118',
      'M 168 114 C 174 108 180 106 186 108'
    ], a);
    // Hair parting hint
    pp(g, ['M 182 102 C 184 106 186 112 186 118'], a, lt);

    // ---- BRUNO hair — dark brown, short, neat cut ----
    // Hair contour — close-cropped
    pp(g, [
      'M 268 104 C 266 86 272 72 280 66 C 288 62 298 60 306 64 C 314 68 320 78 320 92 C 322 100 320 108 318 114'
    ], a);
    // Hair mass
    pp(g, [
      'M 272 100 C 272 88 276 76 284 70 C 292 66 300 64 308 68 C 316 74 318 84 318 96 C 320 104 318 110 316 112'
    ], a);
    // Hair inner texture
    pp(g, [
      'M 276 96 C 276 86 280 78 288 74 C 296 70 304 68 310 72 C 316 78 316 88 316 98'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 284 66 C 290 62 298 60 306 64',
      'M 278 74 C 286 68 296 66 304 70',
      'M 274 84 C 282 76 294 74 304 78',
      'M 272 94 C 280 86 292 84 302 88',
      'M 310 66 C 316 72 318 80 320 90'
    ], a, lt);
    // Side hair line — neat trim
    pp(g, [
      'M 268 100 C 266 94 266 86 268 78',
      'M 320 98 C 322 92 322 84 320 76'
    ], a, lt);

    // Bruno light stubble — sparse, lighter than Ricardo
    const brunoStubble = [];
    // Chin area — light
    for (let x = 280; x <= 304; x += 3) {
      brunoStubble.push([x, 150]);
      brunoStubble.push([x + 1, 152]);
      brunoStubble.push([x, 154]);
    }
    // Jaw hints
    for (let i = 0; i < 5; i++) {
      brunoStubble.push([272 + i * 2, 140 + i * 2]);
      brunoStubble.push([310 - i * 2, 138 + i * 2]);
    }
    brunoStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.35, fill: a ? HL : '#8D6E63' }, a);
    });
  },

  // =====================================================================
  // Layer 4: Clothing with folds and details
  // =====================================================================
  (g, a) => {
    // ---- RICARDO gray "Sagres 0.0" t-shirt ----
    // Collar — crew neck, ribbed
    pp(g, [
      'M 60 184 C 64 178 70 176 76 176 C 82 176 88 178 92 184',
      'M 62 186 C 66 180 72 178 78 178 C 84 180 90 182 94 186'
    ], a);
    // Collar ribbing texture
    pp(g, [
      'M 64 182 C 68 178 74 176 80 178',
      'M 66 184 C 70 180 76 178 82 180'
    ], a, lt);
    // Left sleeve seam
    pp(g, [
      'M 28 196 C 24 202 20 210 18 220',
      'M 32 198 C 28 204 24 212 22 222'
    ], a, lt);
    // Right sleeve seam
    pp(g, [
      'M 126 196 C 130 202 132 210 134 220',
      'M 122 198 C 126 204 128 212 130 222'
    ], a, lt);
    // Shoulder seam lines
    pp(g, [
      'M 58 186 C 48 190 38 196 28 206',
      'M 94 186 C 104 190 114 196 126 206'
    ], a, lt);
    // Torso fabric folds — vertical drape
    pp(g, [
      'M 52 210 C 50 230 50 250 52 270',
      'M 66 200 C 64 224 64 250 66 276',
      'M 88 200 C 86 224 86 250 88 276',
      'M 102 210 C 104 230 104 250 102 270'
    ], a, lt);
    // Side hem wrinkle
    pp(g, [
      'M 14 288 C 16 292 20 294 26 296',
      'M 136 288 C 134 292 130 294 126 296'
    ], a, lt);
    // SAGRES 0.0 logo area — outlined rectangle on chest
    pp(g, ['M 50 218 L 102 218 L 102 256 L 50 256 Z'], a, lt);
    // Wings emblem sketch — left wing
    pp(g, [
      'M 66 226 C 60 220 54 222 54 228 C 54 234 60 238 66 236',
      'M 62 224 C 58 220 54 222 54 226'
    ], a, lt);
    // Wings emblem sketch — right wing
    pp(g, [
      'M 86 226 C 92 220 98 222 98 228 C 98 234 92 238 86 236',
      'M 90 224 C 94 220 98 222 98 226'
    ], a, lt);
    // Wings center
    pp(g, ['M 66 230 L 76 228 L 86 230'], a, lt);
    // "SAGRES" text area
    pp(g, ['M 58 244 L 94 244'], a, lt);
    // "0.0" text area
    pp(g, ['M 68 252 L 84 252'], a, lt);
    // Armpit folds
    pp(g, [
      'M 34 210 C 38 206 42 204 48 204',
      'M 108 208 C 112 204 116 202 120 202'
    ], a, lt);

    // ---- MIGUEL white t-shirt with cartoon character prints ----
    // Collar — crew neck
    pp(g, [
      'M 170 208 C 174 204 178 202 182 202 C 186 202 190 204 196 208',
      'M 172 210 C 176 206 180 204 184 204 C 188 206 192 208 198 210'
    ], a);
    // Collar ribbing
    pp(g, [
      'M 174 208 C 178 204 182 202 186 204',
      'M 176 210 C 180 206 184 204 188 206'
    ], a, lt);
    // Sleeve seams
    pp(g, [
      'M 148 224 C 144 230 140 238 138 248',
      'M 152 226 C 148 232 144 240 142 250'
    ], a, lt);
    pp(g, [
      'M 218 224 C 222 230 226 238 228 248',
      'M 214 226 C 218 232 222 240 224 250'
    ], a, lt);
    // Cartoon character pattern hints — scattered figures
    // Stick figure 1 (orange character)
    pp(g, [
      'M 160 232 L 160 238', 'M 158 234 L 162 234',
      'M 160 238 L 158 242', 'M 160 238 L 162 242'
    ], a, lt);
    fe(g, 'circle', { cx: 160, cy: 230, r: 1.5, fill: a ? HL : '#FF7043' }, a);
    // Stick figure 2 (blue character)
    pp(g, [
      'M 172 224 L 172 230', 'M 170 226 L 174 226',
      'M 172 230 L 170 234', 'M 172 230 L 174 234'
    ], a, lt);
    fe(g, 'circle', { cx: 172, cy: 222, r: 1.5, fill: a ? HL : '#42A5F5' }, a);
    // Stick figure 3 (green)
    pp(g, [
      'M 192 236 L 192 242', 'M 190 238 L 194 238',
      'M 192 242 L 190 246', 'M 192 242 L 194 246'
    ], a, lt);
    fe(g, 'circle', { cx: 192, cy: 234, r: 1.5, fill: a ? HL : '#66BB6A' }, a);
    // More scattered character dots
    fe(g, 'circle', { cx: 180, cy: 244, r: 1.2, fill: a ? HL : '#FFA726' }, a);
    fe(g, 'circle', { cx: 168, cy: 250, r: 1.2, fill: a ? HL : '#AB47BC' }, a);
    fe(g, 'circle', { cx: 196, cy: 248, r: 1.2, fill: a ? HL : '#26A69A' }, a);
    fe(g, 'circle', { cx: 156, cy: 244, r: 1.0, fill: a ? HL : '#E53935' }, a);
    fe(g, 'circle', { cx: 204, cy: 240, r: 1.0, fill: a ? HL : '#1E88E5' }, a);
    // "W" letter on shirt (larger, visible)
    const wt = ce('text', {
      x: 174, y: 268, fill: a ? HL : LP,
      'font-size': '10', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif'
    });
    wt.textContent = 'W';
    if (a) wt.classList.add('active-element');
    g.appendChild(wt);
    // Body fold lines
    pp(g, [
      'M 158 240 C 156 256 156 272 158 288',
      'M 170 230 C 168 250 168 270 170 290',
      'M 194 230 C 192 250 192 270 194 290',
      'M 206 240 C 208 256 208 272 206 288'
    ], a, lt);

    // ---- BRUNO dark navy sports t-shirt ----
    // Collar — round neck
    pp(g, [
      'M 278 176 C 282 170 288 168 292 168 C 296 168 302 170 306 176',
      'M 280 178 C 284 172 290 170 294 170 C 298 172 304 174 308 178'
    ], a);
    // Center seam — raglan style
    pp(g, ['M 292 176 L 290 300'], a, lt);
    // Raglan sleeve seams
    pp(g, [
      'M 284 176 C 274 182 264 192 254 206',
      'M 302 176 C 312 182 322 192 332 206'
    ], a, lt);
    // Shoulder seams
    pp(g, [
      'M 276 178 C 264 182 252 188 244 198',
      'M 306 178 C 316 182 328 188 336 198'
    ], a, lt);
    // Side seams
    pp(g, [
      'M 232 220 C 230 240 228 260 230 280',
      'M 348 220 C 350 240 352 260 350 280'
    ], a, lt);
    // Torso folds — leaning creates distinctive crease pattern
    pp(g, [
      'M 256 220 C 254 240 252 260 254 280',
      'M 270 210 C 268 234 268 258 270 282',
      'M 310 210 C 308 234 308 258 310 282',
      'M 326 220 C 328 240 330 260 328 280'
    ], a, lt);
    // Compression folds from leaning forward
    pp(g, [
      'M 244 230 C 260 228 276 226 292 228',
      'M 248 246 C 264 244 280 242 296 244',
      'M 252 262 C 268 260 284 258 300 260'
    ], a, lt);
    // Small brand logo hint on chest
    pp(g, [
      'M 322 210 C 326 208 330 210 332 214 C 334 218 332 222 328 224'
    ], a, lt);
    // Sleeve hem
    pp(g, [
      'M 238 208 C 236 212 234 216 234 220',
      'M 340 206 C 342 210 344 214 344 218'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands, Easter eggs, and fine details
  // =====================================================================
  (g, a) => {
    // ---- MIGUEL hands holding/showing painted eggs ----
    // Left hand — palm cupped around small painted egg
    pp(g, [
      'M 140 280 C 136 274 132 276 130 282 C 128 290 132 296 138 294'
    ], a);
    // Left hand fingers — curved around egg
    pp(g, [
      'M 134 276 C 130 270 126 266 126 262 C 126 258 130 258 132 262 C 134 266 136 270 138 274',
      'M 136 274 C 132 268 128 264 128 260 C 128 256 132 256 134 260 C 136 264 138 268 140 272',
      'M 138 272 C 136 266 132 262 132 258 C 132 254 136 254 138 258 C 140 262 142 266 142 270',
      'M 140 272 C 140 266 138 262 138 258 C 140 254 144 256 144 260 C 144 264 142 268 142 272'
    ], a);
    // Left thumb — opposing grip
    pp(g, [
      'M 140 292 C 144 286 148 280 150 276 C 152 272 150 270 148 272 C 146 274 144 278 142 284'
    ], a);
    // Orange/red painted egg in left hand
    pp(g, [
      'M 132 268 C 132 258 136 250 142 250 C 148 250 152 258 152 268 C 152 278 148 286 142 286 C 136 286 132 278 132 268 Z'
    ], a);
    // Egg decorative stripes
    pp(g, [
      'M 134 262 C 138 258 144 258 150 262',
      'M 134 270 C 138 266 144 266 150 270',
      'M 136 278 C 140 276 144 276 148 278'
    ], a, lt);
    // Egg zigzag pattern
    pp(g, [
      'M 136 266 L 138 264 L 140 266 L 142 264 L 144 266 L 146 264 L 148 266'
    ], a, lt);

    // Right hand — also on table, relaxed
    pp(g, [
      'M 224 280 C 228 274 232 276 234 282 C 236 290 232 296 226 294'
    ], a);
    // Right hand fingers
    pp(g, [
      'M 228 276 C 232 270 236 266 236 262 C 236 258 232 258 230 262 C 228 266 226 270 224 274',
      'M 226 274 C 230 268 234 264 234 260 C 234 256 230 256 228 260 C 226 264 224 268 222 272',
      'M 224 272 C 226 266 230 262 230 258 C 230 254 226 254 224 258 C 222 262 220 266 220 270'
    ], a);
    // Right thumb
    pp(g, [
      'M 222 292 C 218 286 214 280 212 276 C 210 272 212 270 214 272 C 216 274 218 278 220 284'
    ], a);

    // ---- BRUNO left hand extended with blue egg ----
    // Hand — open palm, fingers spread, showing egg to Miguel
    pp(g, [
      'M 232 268 C 228 262 224 264 222 270 C 220 278 224 282 230 280'
    ], a);
    // Fingers extended — showing/offering egg
    pp(g, [
      'M 226 264 C 222 258 218 254 218 250 C 218 246 222 246 224 250 C 226 254 228 258 228 262',
      'M 228 262 C 224 256 220 252 220 248 C 220 244 224 244 226 248 C 228 252 230 256 230 260',
      'M 230 260 C 228 254 226 250 226 246 C 226 242 230 242 232 246 C 234 250 234 254 232 258',
      'M 234 260 C 234 254 236 250 238 246 C 240 242 238 240 236 242 C 234 244 232 248 232 254'
    ], a);
    // Thumb — supporting from below
    pp(g, [
      'M 232 280 C 236 274 240 268 242 264 C 244 260 242 258 240 260 C 238 262 236 266 234 272'
    ], a);
    // Blue painted egg in palm
    pp(g, [
      'M 222 248 C 222 236 228 228 236 228 C 244 228 250 236 250 248 C 250 260 244 268 236 268 C 228 268 222 260 222 248 Z'
    ], a);
    // Egg decorative dots pattern
    pp(g, [
      'M 230 236 C 232 234 234 234 236 236',
      'M 240 240 C 242 238 244 238 246 240',
      'M 228 244 C 230 242 232 242 234 244',
      'M 238 248 C 240 246 242 246 244 248',
      'M 230 252 C 232 250 234 250 236 252',
      'M 240 256 C 242 254 244 254 246 256',
      'M 232 260 C 234 258 236 258 238 260'
    ], a, lt);
    // Egg horizontal band
    pp(g, [
      'M 224 248 C 230 244 240 244 248 248',
      'M 224 252 C 230 248 240 248 248 252'
    ], a, lt);

    // ---- RICARDO right hand near table surface ----
    // Relaxed hand on table
    pp(g, [
      'M 134 286 C 130 280 126 282 124 288 C 122 296 126 300 132 298'
    ], a);
    // Fingers resting
    pp(g, [
      'M 128 282 C 124 276 120 274 120 270 C 120 268 124 268 126 272 C 128 276 130 280 130 282',
      'M 130 280 C 126 274 122 272 122 268 C 122 266 126 266 128 270 C 130 274 132 278 132 280'
    ], a);
    // Ricardo left hand/arm behind — resting on chair
    pp(g, [
      'M 20 286 C 16 280 12 276 12 272 C 12 268 16 268 18 272 C 20 276 22 280 22 284',
      'M 24 284 C 22 278 20 274 20 270 C 20 266 24 266 26 270 C 28 274 28 278 28 282'
    ], a);
    // Left hand fist/relaxed grip
    pp(g, [
      'M 14 280 C 10 274 8 278 8 284 C 8 292 12 296 18 294'
    ], a);

    // ---- Table surface items ----
    // Paint brush on table (near Miguel)
    pp(g, [
      'M 154 296 L 166 288',
      'M 166 288 C 168 286 170 284 172 284 C 174 284 176 286 176 288'
    ], a, lt);
    // Brush tip
    pp(g, ['M 172 284 C 174 282 176 280 178 280'], a, lt);
    // Paint spots on tablecloth
    fe(g, 'circle', { cx: 110, cy: 296, r: 2, fill: a ? HL : '#66BB6A' }, a);
    fe(g, 'circle', { cx: 116, cy: 298, r: 1.5, fill: a ? HL : '#42A5F5' }, a);
    fe(g, 'circle', { cx: 200, cy: 298, r: 1.8, fill: a ? HL : '#FF7043' }, a);
    // Small paint cup/container hint
    pp(g, [
      'M 104 290 L 104 300 L 118 300 L 118 290 C 116 288 106 288 104 290 Z'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — wall, framed photos, chair, table, room
  // =====================================================================
  (g, a) => {
    // Wall outline
    pp(g, ['M 0 0 L 360 0 L 360 300 L 0 300 Z'], a, lt);

    // ---- Four framed photos on wall (visible in photo) ----
    // Frame 1 (far left) — outer frame with wood detail
    pp(g, ['M 32 18 L 86 18 L 86 56 L 32 56 Z'], a);
    pp(g, ['M 35 21 L 83 21 L 83 53 L 35 53 Z'], a);
    // Frame 1 content — head/shoulders portrait hint
    pp(g, [
      'M 50 30 C 54 26 62 26 66 30 C 70 34 68 42 60 44 C 52 42 48 36 50 30',
      'M 46 48 C 50 44 56 42 60 42 C 64 42 70 44 74 48'
    ], a, lt);
    // Frame corner shadows
    pp(g, ['M 32 56 L 86 56', 'M 86 18 L 86 56'], a, lt);

    // Frame 2 (center-left) — larger, colorful
    pp(g, ['M 148 12 L 214 12 L 214 56 L 148 56 Z'], a);
    pp(g, ['M 151 15 L 211 15 L 211 53 L 151 53 Z'], a);
    // Frame 2 content — group/family scene hint
    pp(g, [
      'M 166 26 C 168 22 174 22 176 26 C 178 30 174 34 170 36 C 166 34 164 30 166 26',
      'M 184 24 C 186 20 192 20 194 24 C 196 28 192 32 188 34 C 184 32 182 28 184 24',
      'M 198 26 C 200 22 204 22 206 26 C 208 30 204 34 200 36 C 196 34 196 30 198 26',
      'M 160 44 C 168 38 180 36 190 36 C 200 36 206 38 210 44'
    ], a, lt);

    // Frame 3 (center-right)
    pp(g, ['M 240 16 L 296 16 L 296 54 L 240 54 Z'], a);
    pp(g, ['M 243 19 L 293 19 L 293 51 L 243 51 Z'], a);
    // Frame 3 content — drawing/art
    pp(g, [
      'M 254 28 C 260 24 268 22 274 26 C 280 30 284 36 286 42',
      'M 250 46 L 290 46'
    ], a, lt);

    // Frame 4 (far right, partially visible)
    pp(g, ['M 310 14 L 354 14 L 354 52 L 310 52 Z'], a);
    pp(g, ['M 313 17 L 351 17 L 351 49 L 313 49 Z'], a);
    // Frame 4 content hint
    pp(g, [
      'M 324 28 C 330 24 338 24 342 28',
      'M 320 42 L 346 42'
    ], a, lt);

    // ---- Wooden chair behind Ricardo ----
    // Chair back vertical posts
    pp(g, ['M 14 80 L 14 300'], a);
    pp(g, ['M 40 80 L 40 184'], a);
    // Chair back top rail — curved
    pp(g, ['M 14 80 C 20 76 32 76 40 80'], a);
    // Chair horizontal bars
    pp(g, ['M 14 100 L 40 100'], a, lt);
    pp(g, ['M 14 120 L 40 120'], a, lt);
    pp(g, ['M 14 140 L 40 140'], a, lt);
    pp(g, ['M 14 160 L 40 160'], a, lt);
    // Chair back decorative center slat
    pp(g, ['M 27 80 L 27 180'], a, lt);
    // Chair seat
    pp(g, ['M 10 184 L 46 184'], a, lt);
    // Chair leg
    pp(g, ['M 14 184 L 12 300'], a, lt);

    // ---- Sofa/couch visible behind Miguel and Bruno ----
    // Sofa back — curved line behind figures
    pp(g, [
      'M 130 72 C 160 66 200 64 240 66 C 280 68 320 72 350 78'
    ], a, lt);
    // Sofa arm (right side)
    pp(g, [
      'M 346 78 C 350 82 354 90 356 100 L 356 180'
    ], a, lt);
    // Sofa cushion line
    pp(g, [
      'M 132 80 C 170 76 210 74 250 76 C 290 78 330 82 350 86'
    ], a, lt);

    // ---- Table ----
    // Table front edge (solid, thick)
    pp(g, ['M 0 300 L 360 300'], a);
    // Table edge thickness with detail
    pp(g, ['M 0 300 L 0 310 L 360 310 L 360 300'], a);
    // Table edge lip
    pp(g, ['M 0 308 L 360 308'], a, lt);
    // Table legs
    pp(g, ['M 28 310 L 26 450', 'M 332 310 L 334 450'], a, lt);
    // Table cross-brace
    pp(g, ['M 28 420 L 332 420'], a, lt);
    // Table inner legs
    pp(g, ['M 120 310 L 118 440', 'M 240 310 L 242 440'], a, lt);

    // ---- Wall texture hints ----
    // Subtle wall corner shadow (left)
    pp(g, ['M 0 0 L 0 300'], a, lt);
    // Light switch/outlet hint on wall
    pp(g, ['M 130 66 L 138 66 L 138 74 L 130 74 Z'], a, lt);

    // ---- Ceiling/molding line ----
    pp(g, ['M 0 6 L 360 6'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — FIGURES (skin gradients, hair, clothing)
  // =====================================================================
  (g, a, defs) => {
    // ---- RICARDO/PAI fills ----
    // Face skin — gradient for depth (warm tone, warmer on cheeks)
    const ricSkinG = gd(defs, 'r', [
      ['0%', '#F5D0A9', 1], ['50%', '#EDBE8C', 1], ['100%', '#D4A574', 1]
    ], { cx: 76, cy: 130, r: 50 });
    fl(g,
      'M 48 120 C 46 98 52 82 60 76 C 68 70 80 68 90 72 C 100 78 106 92 104 114 C 104 128 100 140 94 150 C 88 158 84 162 78 166 C 72 164 66 158 60 150 C 54 142 50 132 48 120 Z',
      ricSkinG, a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 39, cy: 120, rx: 7, ry: 11, fill: '#DEB07A' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 112, cy: 118, rx: 6, ry: 10, fill: '#DEB07A' }, false);
    // Neck skin — gradient darker at bottom
    const ricNeckG = gd(defs, 'l', [
      ['0%', '#E8BE8A', 1], ['100%', '#D4A070', 1]
    ], { x1: 76, y1: 164, x2: 76, y2: 184 });
    fl(g,
      'M 62 164 C 64 164 70 166 78 168 C 86 166 92 164 92 164 L 92 184 L 62 184 Z',
      ricNeckG, false);
    // Hair fill — dark brown buzzcut
    const ricHairG = gd(defs, 'r', [
      ['0%', '#5D4037', 1], ['60%', '#4E342E', 1], ['100%', '#3E2723', 1]
    ], { cx: 76, cy: 88, r: 40 });
    fl(g,
      'M 50 116 C 48 98 54 82 62 76 C 68 70 76 68 84 68 C 92 70 98 72 102 78 C 108 86 110 96 108 112 L 104 108 C 106 98 104 88 100 80 C 96 74 88 70 80 70 C 72 70 64 74 58 82 C 52 90 50 100 50 110 Z',
      ricHairG, false);
    // Eye whites
    fl(g, 'M 58 114 C 60 108 64 106 68 108 C 72 110 74 114 74 118 C 74 122 72 126 68 126 C 64 126 60 122 58 118 Z', '#F5F0EA', false);
    fl(g, 'M 82 112 C 84 106 88 104 92 106 C 96 108 98 112 98 116 C 98 120 96 124 92 124 C 88 124 84 120 82 116 Z', '#F5F0EA', false);
    // Gray t-shirt — gradient with fabric depth
    const ricShirtG = gd(defs, 'l', [
      ['0%', '#C8C8C8', 1], ['30%', '#BDBDBD', 1], ['70%', '#B0B0B0', 1], ['100%', '#A0A0A0', 1]
    ], { x1: 10, y1: 196, x2: 140, y2: 196 });
    fl(g,
      'M 28 196 C 36 188 50 182 62 182 C 70 176 82 176 92 182 C 104 182 120 188 128 196 L 140 228 C 142 248 142 268 140 288 L 138 300 L 14 300 L 10 288 C 8 268 8 248 10 228 Z',
      ricShirtG, a);
    // Left arm skin fill
    fl(g,
      'M 28 196 C 22 206 16 220 12 236 C 8 252 6 268 8 280 C 10 290 14 296 20 298 L 16 280 C 14 270 14 256 18 240 C 22 224 28 210 34 200 Z',
      '#DEB07A', false);
    // Hand skin fills
    fe(g, 'ellipse', { cx: 16, cy: 288, rx: 10, ry: 12, fill: '#E8BE8A' }, false);
    fe(g, 'ellipse', { cx: 130, cy: 290, rx: 9, ry: 10, fill: '#E8BE8A' }, false);

    // ---- MIGUEL fills ----
    // Face skin — child warm rosy gradient
    const migSkinG = gd(defs, 'r', [
      ['0%', '#FAD8B0', 1], ['50%', '#F5CCA0', 1], ['100%', '#E8BE8A', 1]
    ], { cx: 183, cy: 155, r: 40 });
    fl(g,
      'M 157 148 C 155 130 160 118 168 112 C 176 108 186 106 194 110 C 202 116 208 128 207 148 C 208 162 204 174 198 182 C 192 188 188 192 183 194 C 178 192 174 188 168 182 C 162 174 158 162 157 148 Z',
      migSkinG, a);
    // Ears
    fe(g, 'ellipse', { cx: 148, cy: 152, rx: 5, ry: 10, fill: '#F0C8A0' }, false);
    fe(g, 'ellipse', { cx: 216, cy: 150, rx: 5, ry: 10, fill: '#F0C8A0' }, false);
    // Hair fill — rich dark brown
    const migHairG = gd(defs, 'r', [
      ['0%', '#5D4037', 1], ['60%', '#4E342E', 1], ['100%', '#3E2723', 1]
    ], { cx: 186, cy: 118, r: 35 });
    fl(g,
      'M 160 144 C 158 126 162 114 170 108 C 178 102 188 100 196 104 C 204 108 210 118 212 132 C 214 142 214 148 212 154 L 208 150 C 210 140 210 130 206 122 C 202 114 196 108 188 106 C 180 104 172 108 166 116 C 162 122 160 132 160 140 Z',
      migHairG, false);
    // Neck
    fl(g,
      'M 170 192 C 174 192 180 194 186 194 C 192 192 196 192 196 192 L 196 210 L 170 210 Z',
      '#F0C8A0', false);
    // Eye whites
    fl(g, 'M 168 144 C 170 138 174 136 178 138 C 182 140 184 144 184 148 C 184 152 182 154 178 154 C 174 154 170 150 168 146 Z', '#F5F0EA', false);
    fl(g, 'M 188 142 C 190 136 194 134 198 136 C 202 138 204 142 204 146 C 204 150 202 152 198 152 C 194 152 190 148 188 144 Z', '#F5F0EA', false);
    // White t-shirt — slightly warm white
    const migShirtG = gd(defs, 'l', [
      ['0%', '#FAFAFA', 1], ['40%', '#F5F5F5', 1], ['60%', '#EEEEEE', 1], ['100%', '#E0E0E0', 1]
    ], { x1: 142, y1: 220, x2: 224, y2: 220 });
    fl(g,
      'M 148 224 C 152 216 162 210 170 208 C 176 202 190 202 196 208 C 204 210 214 216 218 224 L 224 248 C 226 264 226 280 224 294 L 222 300 L 144 300 L 142 294 C 140 280 140 264 142 248 Z',
      migShirtG, a);
    // Arms skin
    fl(g,
      'M 148 224 C 142 238 138 254 136 270 C 134 282 134 292 136 298 L 142 296 C 140 292 140 284 142 274 C 144 258 148 242 154 228 Z',
      '#F0C8A0', false);
    fl(g,
      'M 218 224 C 224 238 228 254 230 270 C 232 282 230 292 228 298 L 222 296 C 224 292 226 284 224 274 C 222 258 218 242 212 228 Z',
      '#F0C8A0', false);
    // Hand fills
    fe(g, 'ellipse', { cx: 138, cy: 286, rx: 10, ry: 12, fill: '#F0C8A0' }, false);
    fe(g, 'ellipse', { cx: 226, cy: 286, rx: 10, ry: 12, fill: '#F0C8A0' }, false);

    // ---- BRUNO/TIO fills ----
    // Face skin — gradient (lean, angular shadows)
    const bruSkinG = gd(defs, 'r', [
      ['0%', '#F5D0A9', 1], ['50%', '#EDBE8C', 1], ['100%', '#D4A574', 1]
    ], { cx: 292, cy: 120, r: 45 });
    fl(g,
      'M 266 108 C 264 88 270 74 278 68 C 286 64 296 62 304 68 C 314 76 318 90 316 108 C 318 122 314 134 308 142 C 302 150 298 154 292 158 C 286 156 282 150 276 142 C 270 134 266 122 266 108 Z',
      bruSkinG, a);
    // Ears
    fe(g, 'ellipse', { cx: 258, cy: 112, rx: 5, ry: 10, fill: '#DEB07A' }, false);
    fe(g, 'ellipse', { cx: 326, cy: 110, rx: 4, ry: 8, fill: '#DEB07A' }, false);
    // Neck
    fl(g,
      'M 276 156 C 280 156 286 158 294 158 C 300 156 306 156 306 156 L 306 176 L 276 176 Z',
      '#DEB07A', false);
    // Hair fill
    const bruHairG = gd(defs, 'r', [
      ['0%', '#5D4037', 1], ['50%', '#4E342E', 1], ['100%', '#3E2723', 1]
    ], { cx: 294, cy: 82, r: 40 });
    fl(g,
      'M 268 104 C 266 86 272 72 280 66 C 288 62 298 60 306 64 C 314 68 320 78 320 92 C 322 100 320 108 318 114 L 316 110 C 318 100 318 90 314 80 C 310 72 302 66 294 64 C 286 64 278 68 274 76 C 270 84 268 94 268 102 Z',
      bruHairG, false);
    // Eye whites
    fl(g, 'M 276 104 C 278 98 282 96 286 98 C 290 100 292 104 292 108 C 292 112 290 116 286 116 C 282 116 278 112 276 108 Z', '#F5F0EA', false);
    fl(g, 'M 298 102 C 300 96 304 94 308 96 C 312 98 314 102 314 106 C 314 110 312 114 308 114 C 304 114 300 110 298 106 Z', '#F5F0EA', false);
    // Dark navy sports t-shirt — gradient
    const bruShirtG = gd(defs, 'l', [
      ['0%', '#1A237E', 1], ['30%', '#263238', 1], ['70%', '#37474F', 1], ['100%', '#263238', 1]
    ], { x1: 230, y1: 188, x2: 350, y2: 188 });
    fl(g,
      'M 244 188 C 252 180 264 176 276 174 C 284 168 300 168 306 174 C 318 176 330 180 338 188 L 350 218 C 352 238 354 260 352 282 L 350 300 L 230 300 L 228 282 C 226 260 228 238 230 218 Z',
      bruShirtG, a);
    // Left arm skin
    fl(g,
      'M 244 188 C 238 200 232 216 228 234 C 224 248 222 262 224 274 C 226 282 228 288 232 292 L 230 276 C 228 264 230 252 234 238 C 238 220 244 204 250 192 Z',
      '#DEB07A', false);
    // Hand skin fills
    fe(g, 'ellipse', { cx: 228, cy: 274, rx: 10, ry: 12, fill: '#E8BE8A' }, false);
    // Right arm partial fill (darker shirt continues)
    fl(g,
      'M 334 188 C 340 200 344 218 348 238 C 350 254 350 270 348 286 L 346 300 L 342 288 C 344 274 344 258 342 242 C 338 222 334 204 328 192 Z',
      '#2C3E50', false);
  },

  // =====================================================================
  // Layer 8: Color fills — SCENE (wall, tablecloth, frames, eggs, chair)
  // =====================================================================
  (g, a, defs) => {
    // Cream wall — warm gradient (darker at top from lighting)
    const wallG = gd(defs, 'l', [
      ['0%', '#F5E6CC', 1], ['30%', '#FFF8E1', 1], ['80%', '#FFFDE7', 1], ['100%', '#FFF8E1', 1]
    ], { x1: 180, y1: 0, x2: 180, y2: 300 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: wallG }, a);

    // Wall shadow areas — darker near corners
    fo(g, 'M 0 0 L 30 0 L 30 300 L 0 300 Z', '#8D6E63', 0.06, false);
    fo(g, 'M 330 0 L 360 0 L 360 300 L 330 300 Z', '#8D6E63', 0.04, false);

    // Orange tablecloth — rich gradient
    const tableG = gd(defs, 'l', [
      ['0%', '#E65100', 1], ['25%', '#FF8F00', 1], ['50%', '#FFA726', 1], ['75%', '#FF8F00', 1], ['100%', '#EF6C00', 1]
    ], { x1: 0, y1: 340, x2: 360, y2: 340 });
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: tableG }, a);
    // Table edge strip — darker orange
    const edgeG = gd(defs, 'l', [
      ['0%', '#BF360C', 1], ['50%', '#E65100', 1], ['100%', '#BF360C', 1]
    ], { x1: 0, y1: 300, x2: 360, y2: 300 });
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 10, fill: edgeG }, false);

    // Tablecloth fold patterns — lighter ridges
    hi(g, 'M 20 314 C 40 308 60 310 80 314 L 80 318 C 60 314 40 312 20 318 Z', 0.1, false);
    hi(g, 'M 120 312 C 140 306 160 308 180 312 L 180 316 C 160 312 140 310 120 316 Z', 0.08, false);
    hi(g, 'M 220 314 C 240 308 260 310 280 314 L 280 318 C 260 314 240 312 220 318 Z', 0.1, false);
    // Tablecloth shadow folds
    sh(g, 'M 60 310 C 70 316 80 318 90 316 L 90 324 C 80 326 70 324 60 318 Z', 0.06, false);
    sh(g, 'M 180 308 C 190 314 200 316 210 314 L 210 322 C 200 324 190 322 180 316 Z', 0.06, false);
    sh(g, 'M 300 310 C 310 316 320 318 330 316 L 330 324 C 320 326 310 324 300 318 Z', 0.06, false);

    // ---- Framed photos fills ----
    // Frame 1 — warm wood with inner cream
    const frameWood = '#8D6E63';
    fe(g, 'rect', { x: 32, y: 18, width: 54, height: 38, rx: 1, fill: frameWood }, false);
    fe(g, 'rect', { x: 35, y: 21, width: 48, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 2
    fe(g, 'rect', { x: 148, y: 12, width: 66, height: 44, rx: 1, fill: frameWood }, false);
    fe(g, 'rect', { x: 151, y: 15, width: 60, height: 38, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 3
    fe(g, 'rect', { x: 240, y: 16, width: 56, height: 38, rx: 1, fill: frameWood }, false);
    fe(g, 'rect', { x: 243, y: 19, width: 50, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 4
    fe(g, 'rect', { x: 310, y: 14, width: 44, height: 38, rx: 1, fill: frameWood }, false);
    fe(g, 'rect', { x: 313, y: 17, width: 38, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    // Frame shadows (cast on wall)
    sh(g, 'M 32 56 L 90 56 L 88 62 L 34 62 Z', 0.08, false);
    sh(g, 'M 148 56 L 218 56 L 216 62 L 150 62 Z', 0.08, false);
    sh(g, 'M 240 54 L 300 54 L 298 60 L 242 60 Z', 0.08, false);
    sh(g, 'M 310 52 L 358 52 L 356 58 L 312 58 Z', 0.08, false);

    // ---- Orange/red egg fill — in Miguel's hand ----
    const eggOrangeG = gd(defs, 'r', [
      ['0%', '#FFB74D', 1], ['40%', '#FF7043', 1], ['100%', '#E64A19', 1]
    ], { cx: 140, cy: 265, r: 16 });
    fl(g,
      'M 132 268 C 132 258 136 250 142 250 C 148 250 152 258 152 268 C 152 278 148 286 142 286 C 136 286 132 278 132 268 Z',
      eggOrangeG, a);
    // Egg stripe decorations
    fo(g, 'M 134 262 C 138 258 144 258 150 262 L 150 266 C 144 262 138 262 134 266 Z', '#FFE082', 0.6, false);
    fo(g, 'M 136 274 C 140 272 144 272 148 274 L 148 278 C 144 276 140 276 136 278 Z', '#FFE082', 0.5, false);

    // ---- Blue egg fill — in Bruno's hand ----
    const eggBlueG = gd(defs, 'r', [
      ['0%', '#90CAF9', 1], ['40%', '#64B5F6', 1], ['100%', '#1976D2', 1]
    ], { cx: 234, cy: 245, r: 18 });
    fl(g,
      'M 222 248 C 222 236 228 228 236 228 C 244 228 250 236 250 248 C 250 260 244 268 236 268 C 228 268 222 260 222 248 Z',
      eggBlueG, a);
    // Blue egg decorative dots
    fe(g, 'circle', { cx: 232, cy: 238, r: 2.5, fill: '#0D47A1' }, false);
    fe(g, 'circle', { cx: 240, cy: 244, r: 2.5, fill: '#0D47A1' }, false);
    fe(g, 'circle', { cx: 232, cy: 254, r: 2.5, fill: '#0D47A1' }, false);
    fe(g, 'circle', { cx: 242, cy: 258, r: 2, fill: '#0D47A1' }, false);
    fe(g, 'circle', { cx: 228, cy: 248, r: 2, fill: '#0D47A1' }, false);
    fe(g, 'circle', { cx: 244, cy: 250, r: 1.8, fill: '#0D47A1' }, false);
    // Blue egg band
    fo(g, 'M 224 248 C 230 244 240 244 248 248 L 248 252 C 240 248 230 248 224 252 Z', '#BBDEFB', 0.4, false);

    // ---- Chair fill ----
    // Chair back panels — warm wood with grain
    const chairG = gd(defs, 'l', [
      ['0%', '#A1887F', 1], ['50%', '#8D6E63', 1], ['100%', '#795548', 1]
    ], { x1: 14, y1: 80, x2: 40, y2: 80 });
    feo(g, 'rect', { x: 14, y: 80, width: 28, height: 104, rx: 2, fill: chairG }, 0.4, false);
    // Chair seat
    feo(g, 'rect', { x: 10, y: 182, width: 38, height: 6, rx: 2, fill: '#8D6E63' }, 0.45, false);
    // Chair leg
    feo(g, 'rect', { x: 12, y: 188, width: 4, height: 112, fill: '#8D6E63' }, 0.25, false);

    // ---- Sofa fill (behind figures) ----
    fo(g, 'M 130 72 C 160 66 200 64 240 66 C 280 68 320 72 350 78 L 356 180 L 130 180 Z', '#8D6E63', 0.12, false);

    // ---- Paint container on table ----
    fe(g, 'rect', { x: 104, y: 290, width: 14, height: 10, rx: 2, fill: '#E0E0E0' }, false);
    fe(g, 'rect', { x: 106, y: 292, width: 10, height: 6, rx: 1, fill: '#81D4FA' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — catchlights, shadows, highlights, egg textures,
  // ambient lighting, refinements
  // =====================================================================
  (g, a, defs) => {
    // ---- Eye catchlights — all three ----
    // Ricardo eye shines — primary
    fe(g, 'circle', { cx: 64, cy: 114, r: 1.8, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 88, cy: 112, r: 1.8, fill: '#FFFFFF' }, a);
    // Ricardo secondary highlights
    feo(g, 'circle', { cx: 68, cy: 118, r: 0.9, fill: '#FFFFFF' }, 0.5, false);
    feo(g, 'circle', { cx: 92, cy: 116, r: 0.9, fill: '#FFFFFF' }, 0.5, false);
    // Ricardo iris detail rings
    feo(g, 'circle', { cx: 66, cy: 116, r: 3.5, fill: 'none', stroke: '#5D4037', 'stroke-width': 0.3 }, 0.4, false);
    feo(g, 'circle', { cx: 90, cy: 114, r: 3.5, fill: 'none', stroke: '#5D4037', 'stroke-width': 0.3 }, 0.4, false);

    // Miguel eye shines
    fe(g, 'circle', { cx: 174, cy: 146, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 194, cy: 144, r: 1.5, fill: '#FFFFFF' }, a);
    // Miguel secondary highlights
    feo(g, 'circle', { cx: 178, cy: 150, r: 0.7, fill: '#FFFFFF' }, 0.5, false);
    feo(g, 'circle', { cx: 198, cy: 148, r: 0.7, fill: '#FFFFFF' }, 0.5, false);

    // Bruno eye shines
    fe(g, 'circle', { cx: 282, cy: 104, r: 1.8, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 304, cy: 102, r: 1.8, fill: '#FFFFFF' }, a);
    // Bruno secondary highlights
    feo(g, 'circle', { cx: 286, cy: 108, r: 0.9, fill: '#FFFFFF' }, 0.5, false);
    feo(g, 'circle', { cx: 308, cy: 106, r: 0.9, fill: '#FFFFFF' }, 0.5, false);
    // Bruno iris detail
    feo(g, 'circle', { cx: 284, cy: 106, r: 3.5, fill: 'none', stroke: '#5D4037', 'stroke-width': 0.3 }, 0.4, false);
    feo(g, 'circle', { cx: 306, cy: 104, r: 3.5, fill: 'none', stroke: '#5D4037', 'stroke-width': 0.3 }, 0.4, false);

    // ---- Cheek blush ----
    // Miguel cheek blush — warm rosy (child)
    feo(g, 'ellipse', { cx: 166, cy: 172, rx: 9, ry: 5, fill: '#FFAB91' }, 0.25, a);
    feo(g, 'ellipse', { cx: 200, cy: 170, rx: 9, ry: 5, fill: '#FFAB91' }, 0.25, a);
    // Ricardo slight flush
    feo(g, 'ellipse', { cx: 58, cy: 138, rx: 8, ry: 4, fill: '#FFAB91' }, 0.12, false);
    feo(g, 'ellipse', { cx: 96, cy: 136, rx: 8, ry: 4, fill: '#FFAB91' }, 0.12, false);
    // Bruno cheeks — slight warmth from smile
    feo(g, 'ellipse', { cx: 274, cy: 128, rx: 8, ry: 4, fill: '#FFAB91' }, 0.15, false);
    feo(g, 'ellipse', { cx: 312, cy: 126, rx: 8, ry: 4, fill: '#FFAB91' }, 0.15, false);

    // ---- Face shadows (under brows, nose, chin) ----
    // Ricardo face shadows
    sh(g, 'M 56 106 C 62 102 70 100 78 104 L 78 108 C 70 104 62 106 56 110 Z', 0.08, false);
    sh(g, 'M 82 104 C 90 100 98 102 106 108 L 106 112 C 98 106 90 104 82 108 Z', 0.08, false);
    // Under nose shadow
    sh(g, 'M 66 140 C 72 142 80 142 88 138 L 88 144 C 80 148 72 148 66 146 Z', 0.1, false);
    // Under chin shadow
    sh(g, 'M 62 164 C 68 168 76 170 84 168 C 90 164 94 158 96 154 L 96 162 C 92 168 86 174 78 176 C 70 174 64 170 62 166 Z', 0.12, false);
    // Ricardo neck shadow
    sh(g, 'M 62 176 C 68 174 76 172 84 174 L 92 176 L 92 184 L 62 184 Z', 0.08, false);

    // Miguel face shadows
    sh(g, 'M 168 182 C 174 186 180 190 186 190 C 192 186 198 180 202 174 L 202 180 C 198 186 192 192 186 194 C 180 192 174 188 168 184 Z', 0.1, false);
    // Miguel under-chin shadow
    sh(g, 'M 170 192 C 176 196 182 198 190 196 L 196 192 L 196 208 L 170 208 Z', 0.06, false);

    // Bruno face shadows
    sh(g, 'M 276 142 C 282 148 288 152 294 152 C 300 148 306 140 310 134 L 310 140 C 306 148 300 156 294 158 C 288 156 282 150 276 144 Z', 0.08, false);
    // Bruno smile depth shadow
    sh(g, 'M 278 140 C 282 148 288 152 292 152 C 296 152 302 148 306 140 L 306 146 C 302 152 296 156 292 156 C 288 156 282 152 278 146 Z', 0.06, false);

    // ---- SAGRES logo fills on Ricardo's shirt ----
    // Wings emblem filled — left wing
    fl(g,
      'M 66 226 C 60 220 54 222 54 228 C 54 234 60 238 66 236 L 76 232 Z',
      '#1A237E', false);
    // Wings emblem filled — right wing
    fl(g,
      'M 86 226 C 92 220 98 222 98 228 C 98 234 92 238 86 236 L 76 232 Z',
      '#1A237E', false);
    // Wings center diamond/circle
    fe(g, 'circle', { cx: 76, cy: 232, r: 2.5, fill: '#FFC107' }, false);
    // "SAGRES" text
    const sg = ce('text', {
      x: 58, y: 242, fill: '#1A237E',
      'font-size': '6', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    sg.textContent = 'SAGRES';
    g.appendChild(sg);
    // "0.0" text below
    const sg2 = ce('text', {
      x: 70, y: 250, fill: '#1A237E',
      'font-size': '5', 'font-family': 'Arial, sans-serif'
    });
    sg2.textContent = '0.0';
    g.appendChild(sg2);

    // ---- "W" on Miguel's shirt — gray fill ----
    const wf = ce('text', {
      x: 174, y: 268, fill: '#9E9E9E',
      'font-size': '10', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif'
    });
    wf.textContent = 'W';
    g.appendChild(wf);
    // Filled character dots on Miguel's shirt
    fe(g, 'circle', { cx: 160, cy: 232, r: 2, fill: '#FF7043' }, false);
    fe(g, 'circle', { cx: 172, cy: 224, r: 2, fill: '#42A5F5' }, false);
    fe(g, 'circle', { cx: 192, cy: 236, r: 2, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 180, cy: 246, r: 1.8, fill: '#FFA726' }, false);
    fe(g, 'circle', { cx: 168, cy: 252, r: 1.8, fill: '#AB47BC' }, false);
    fe(g, 'circle', { cx: 196, cy: 250, r: 1.8, fill: '#26A69A' }, false);
    fe(g, 'circle', { cx: 156, cy: 246, r: 1.5, fill: '#E53935' }, false);
    fe(g, 'circle', { cx: 204, cy: 242, r: 1.5, fill: '#1E88E5' }, false);
    // Tiny character limb hints
    pps(g, [
      'M 160 234 L 160 238', 'M 158 236 L 162 236',
      'M 172 226 L 172 230', 'M 170 228 L 174 228',
      'M 192 238 L 192 242', 'M 190 240 L 194 240'
    ], false, 0.4, '#666');

    // ---- Ricardo beard shadow enhancement ----
    sh(g, 'M 60 150 C 66 158 72 164 78 168 C 84 164 90 158 96 150 L 96 156 C 90 164 84 170 78 172 C 72 170 66 164 60 156 Z', 0.15, false);
    // Beard color overlay — gives denser feel
    fo(g, 'M 60 146 C 62 150 66 156 72 162 L 78 166 L 84 162 C 90 156 94 150 96 146 L 94 152 C 90 158 86 164 78 168 C 70 164 66 158 62 152 Z', '#3E2723', 0.2, false);

    // ---- Ricardo nasolabial folds ----
    pps(g, [
      'M 64 134 C 62 140 60 146 60 152',
      'M 90 132 C 92 138 94 144 94 150'
    ], false, 0.6, '#B08060');

    // ---- Bruno mouth fill (warm smile with teeth) ----
    // Teeth area
    fl(g,
      'M 278 138 L 306 138 L 306 142 C 300 140 290 140 284 140 L 278 142 Z',
      '#F5F0EA', false);
    // Lower lip color
    fl(g,
      'M 278 140 C 282 148 288 152 292 152 C 296 152 302 148 306 140 L 304 144 C 300 150 296 154 292 154 C 288 154 284 150 280 144 Z',
      '#D4766A', false);
    // Mouth interior shadow
    sh(g, 'M 280 142 C 284 148 288 150 292 150 C 296 148 300 144 304 140 L 304 142 C 300 148 296 152 292 152 C 288 152 284 148 280 144 Z', 0.15, false);

    // ---- Egg highlight shines ----
    // Orange egg specular highlight
    const eggOHighG = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.5], ['100%', '#FFFFFF', 0]
    ], { cx: 138, cy: 258, r: 6 });
    fl(g, 'M 134 254 C 136 250 140 248 144 250 C 148 252 148 258 146 262 C 144 264 138 264 136 260 C 134 258 134 256 134 254 Z', eggOHighG, false);
    // Blue egg specular highlight
    const eggBHighG = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.5], ['100%', '#FFFFFF', 0]
    ], { cx: 232, cy: 238, r: 8 });
    fl(g, 'M 228 234 C 230 230 234 228 238 230 C 242 232 244 238 242 242 C 240 244 234 244 232 240 C 230 238 228 236 228 234 Z', eggBHighG, false);
    // Egg cast shadows on table
    sh(g, 'M 130 286 C 134 290 142 292 150 290 C 152 292 150 296 142 298 C 134 296 130 292 130 288 Z', 0.1, false);
    sh(g, 'M 222 268 C 228 272 238 274 248 272 C 250 276 248 280 240 282 C 232 280 224 276 222 270 Z', 0.08, false);

    // ---- Clothing shadows ----
    // Ricardo shirt — arm shadow, side shadow
    sh(g, 'M 30 200 C 36 196 44 194 50 196 L 50 220 C 44 218 38 216 32 218 Z', 0.1, false);
    sh(g, 'M 114 200 C 120 196 128 194 134 196 L 134 220 C 128 218 122 216 116 218 Z', 0.08, false);
    // Ricardo shirt wrinkle highlights
    hi(g, 'M 60 206 C 62 220 62 240 60 260 L 64 260 C 66 240 66 220 64 206 Z', 0.06, false);
    hi(g, 'M 90 206 C 88 220 88 240 90 260 L 94 260 C 92 240 92 220 94 206 Z', 0.06, false);

    // Miguel shirt shadows
    sh(g, 'M 148 230 C 152 226 158 224 164 224 L 164 260 C 158 258 152 254 150 248 Z', 0.06, false);
    sh(g, 'M 216 230 C 212 226 206 224 200 224 L 200 260 C 206 258 212 254 214 248 Z', 0.06, false);

    // Bruno shirt shadows — leaning creates deep folds
    sh(g, 'M 244 210 C 260 208 276 206 290 208 L 290 230 C 276 228 260 226 248 228 Z', 0.08, false);
    sh(g, 'M 330 210 C 340 208 348 210 352 216 L 352 240 C 348 236 340 234 332 236 Z', 0.06, false);

    // ---- Warm ambient lighting effects ----
    // Overall warm glow from interior light (top-right warm source)
    const warmGlow = gd(defs, 'r', [
      ['0%', '#FFE082', 0.06], ['100%', '#FFE082', 0]
    ], { cx: 280, cy: 60, r: 240 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: warmGlow }, false);

    // Table surface warm reflection
    const tableRefl = gd(defs, 'r', [
      ['0%', '#FFECB3', 0.1], ['100%', '#FFECB3', 0]
    ], { cx: 180, cy: 300, r: 160 });
    fe(g, 'ellipse', { cx: 180, cy: 300, rx: 160, ry: 30, fill: tableRefl }, false);

    // Light reflection on wall behind
    hi(g, 'M 100 60 C 140 50 180 48 220 52 C 260 56 300 62 340 72 L 340 80 C 300 70 260 64 220 60 C 180 56 140 58 100 68 Z', 0.04, false);

    // ---- Finger/hand skin refinements ----
    // Ricardo hand near table — fingertip detail
    feo(g, 'ellipse', { cx: 126, cy: 276, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);
    feo(g, 'ellipse', { cx: 122, cy: 272, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);
    // Ricardo left hand fingers
    feo(g, 'ellipse', { cx: 16, cy: 276, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);
    feo(g, 'ellipse', { cx: 22, cy: 274, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);
    // Miguel hand finger tips
    feo(g, 'ellipse', { cx: 132, cy: 264, rx: 3, ry: 4, fill: '#F0C8A0' }, 0.5, false);
    feo(g, 'ellipse', { cx: 136, cy: 260, rx: 3, ry: 4, fill: '#F0C8A0' }, 0.5, false);
    feo(g, 'ellipse', { cx: 230, cy: 264, rx: 3, ry: 4, fill: '#F0C8A0' }, 0.5, false);
    // Bruno hand fingers
    feo(g, 'ellipse', { cx: 224, cy: 254, rx: 3, ry: 5, fill: '#E8BE8A' }, 0.5, false);
    feo(g, 'ellipse', { cx: 228, cy: 250, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);
    feo(g, 'ellipse', { cx: 232, cy: 248, rx: 3, ry: 4, fill: '#E8BE8A' }, 0.5, false);

    // ---- Frame inner content colorization ----
    // Hint of color in frame photos
    feo(g, 'rect', { x: 37, y: 28, width: 44, height: 20, fill: '#BBDEFB' }, 0.15, false);
    feo(g, 'rect', { x: 153, y: 22, width: 56, height: 24, fill: '#C8E6C9' }, 0.12, false);
    feo(g, 'rect', { x: 245, y: 24, width: 46, height: 20, fill: '#FFE0B2' }, 0.12, false);
    feo(g, 'rect', { x: 315, y: 22, width: 34, height: 20, fill: '#D1C4E9' }, 0.1, false);
    // Frame glass reflections
    hi(g, 'M 36 22 L 60 22 L 46 36 L 36 36 Z', 0.08, false);
    hi(g, 'M 152 16 L 180 16 L 166 30 L 152 30 Z', 0.06, false);

    // ---- Tablecloth vertical drape lines with shadow ----
    pps(g, [
      'M 50 310 L 48 440',
      'M 130 310 L 128 440',
      'M 180 310 L 178 440',
      'M 240 310 L 238 440',
      'M 310 310 L 308 440'
    ], false, 0.4, '#BF360C');

    // ---- Paint spots on table — colorful splashes ----
    feo(g, 'circle', { cx: 110, cy: 296, r: 2.5, fill: '#66BB6A' }, 0.7, false);
    feo(g, 'circle', { cx: 116, cy: 298, r: 2, fill: '#42A5F5' }, 0.6, false);
    feo(g, 'circle', { cx: 200, cy: 298, r: 2.2, fill: '#FF7043' }, 0.7, false);
    feo(g, 'circle', { cx: 102, cy: 298, r: 1.5, fill: '#AB47BC' }, 0.5, false);
    feo(g, 'circle', { cx: 208, cy: 296, r: 1.5, fill: '#FFC107' }, 0.5, false);

    // ---- Nose highlights ----
    hi(g, 'M 72 128 C 74 126 78 126 80 128 C 82 130 80 134 76 134 C 72 134 70 130 72 128 Z', 0.12, false);
    hi(g, 'M 178 158 C 180 156 184 156 186 158 C 188 160 186 164 182 164 C 178 164 176 160 178 158 Z', 0.1, false);
    hi(g, 'M 286 116 C 288 114 292 114 294 116 C 296 118 294 122 290 122 C 286 122 284 118 286 116 Z', 0.12, false);

    // ---- Forehead highlights ----
    hi(g, 'M 62 90 C 70 86 82 86 90 90 L 88 96 C 80 92 72 92 64 96 Z', 0.06, false);
    hi(g, 'M 170 120 C 178 116 190 116 198 120 L 196 126 C 188 122 180 122 172 126 Z', 0.05, false);
    hi(g, 'M 278 80 C 286 76 298 76 306 80 L 304 86 C 296 82 288 82 280 86 Z', 0.06, false);

    // ---- Hair highlights ----
    hi(g, 'M 66 76 C 72 72 80 70 88 72 L 86 78 C 78 76 70 78 66 80 Z', 0.08, false);
    hi(g, 'M 176 106 C 182 102 190 102 196 106 L 194 112 C 188 108 182 108 178 112 Z', 0.06, false);
    hi(g, 'M 284 68 C 292 64 300 64 308 68 L 306 74 C 298 70 290 70 286 74 Z', 0.08, false);

    // ---- Ear inner shadows ----
    sh(g, 'M 38 118 C 36 122 36 126 38 130 L 42 128 C 40 124 40 120 42 116 Z', 0.15, false);
    sh(g, 'M 148 150 C 146 154 146 158 148 162 L 152 160 C 150 156 150 152 152 148 Z', 0.12, false);
    sh(g, 'M 257 110 C 255 114 255 118 257 122 L 261 120 C 259 116 259 112 261 108 Z', 0.15, false);

    // ---- Ambient occlusion — where figures meet table ----
    sh(g, 'M 10 296 C 40 298 70 300 100 298 C 130 296 140 294 150 296 C 170 298 200 300 230 298 C 260 296 290 298 320 300 C 340 298 350 296 360 298 L 360 304 L 0 304 Z', 0.06, false);

    // ---- Final warm color grading overlay ----
    const warmOverlay = gd(defs, 'l', [
      ['0%', '#FF8F00', 0.02], ['50%', '#FFE082', 0.01], ['100%', '#FF8F00', 0.02]
    ], { x1: 0, y1: 0, x2: 360, y2: 450 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: warmOverlay }, false);
  }
];
