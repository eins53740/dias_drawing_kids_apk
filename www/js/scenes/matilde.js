const matildeLayers = [
  // =====================================================================
  // Layer 0: Composition guides — face oval, chair bar positions,
  // eye/nose/mouth lines, hair mass circle, hand placement
  // =====================================================================
  (g, a) => {
    // Vertical center guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Face oval guide — child proportions (big forehead)
    pp(g, [
      'M 180 120 C 215 120 240 150 240 190 C 240 230 215 260 180 260 C 145 260 120 230 120 190 C 120 150 145 120 180 120 Z'
    ], a, lt);
    // Eye line guide
    pp(g, ['M 120 210 L 240 210'], a, lt);
    // Nose line guide
    pp(g, ['M 160 240 L 200 240'], a, lt);
    // Mouth line guide
    pp(g, ['M 155 265 L 205 265'], a, lt);
    // Hair mass circle guide — wild voluminous curls
    pp(g, [
      'M 180 80 C 240 80 280 120 280 170 C 280 220 260 250 230 270 L 130 270 C 100 250 80 220 80 170 C 80 120 120 80 180 80 Z'
    ], a, lt);
    // Left chair bar guide
    pp(g, ['M 55 30 L 55 420'], a, lt);
    // Right chair bar guide
    pp(g, ['M 305 30 L 305 420'], a, lt);
    // Shoulder line guide
    pp(g, ['M 110 310 L 250 310'], a, lt);
    // Adult hand placement guide at top
    pp(g, ['M 130 90 L 230 90 L 230 130 L 130 130 Z'], a, lt);
    // Chair crossbar guide
    pp(g, ['M 40 380 L 320 380'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — face oval with child proportions,
  // chair bars, neck, shoulders/top of shirt
  // =====================================================================
  (g, a) => {
    // Face — child proportions: big forehead, rounded cheeks, small chin
    pp(g, [
      'M 180 128 C 148 128 126 155 124 185 C 122 205 126 225 134 240 C 142 252 156 262 172 266 C 178 267 182 267 188 266 C 204 262 218 252 226 240 C 234 225 238 205 236 185 C 234 155 212 128 180 128 Z'
    ], a);
    // Neck — short, child-like
    pp(g, [
      'M 166 264 C 164 272 162 280 162 288',
      'M 194 264 C 196 272 198 280 198 288'
    ], a);
    // Shoulders — small, with ruffled shirt top
    pp(g, [
      'M 162 288 C 150 290 130 296 116 306 C 108 312 104 320 102 332 L 98 390',
      'M 198 288 C 210 290 230 296 244 306 C 252 312 256 320 258 332 L 262 390'
    ], a);
    // Left chair bar — wooden vertical post
    pp(g, [
      'M 48 24 C 50 22 58 22 60 24 L 60 430 C 58 432 50 432 48 430 Z'
    ], a);
    // Right chair bar — wooden vertical post
    pp(g, [
      'M 300 24 C 302 22 310 22 312 24 L 312 430 C 310 432 302 432 300 430 Z'
    ], a);
    // Left ear — partially visible
    pp(g, [
      'M 126 196 C 120 190 116 194 116 202 C 116 210 120 216 126 214'
    ], a);
    // Right ear — partially visible
    pp(g, [
      'M 234 196 C 240 190 244 194 244 202 C 244 210 240 216 234 214'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — very large eyes with iris/pupil, long
  // eyelashes, eyebrows, small nose, shy smile with baby teeth
  // =====================================================================
  (g, a) => {
    // Left eye — very large, nearly round (child proportions)
    pp(g, [
      'M 148 204 C 148 194 156 186 166 186 C 176 186 184 194 184 204 C 184 214 176 222 166 222 C 156 222 148 214 148 204 Z'
    ], a);
    // Right eye — very large, nearly round
    pp(g, [
      'M 176 204 C 176 194 184 186 194 186 C 204 186 212 194 212 204 C 212 214 204 222 194 222 C 184 222 176 214 176 204 Z'
    ], a);
    // Left iris
    pp(g, [
      'M 155 206 C 155 198 160 192 167 192 C 174 192 179 198 179 206 C 179 214 174 220 167 220 C 160 220 155 214 155 206 Z'
    ], a);
    // Right iris
    pp(g, [
      'M 183 206 C 183 198 188 192 195 192 C 202 192 207 198 207 206 C 207 214 202 220 195 220 C 188 220 183 214 183 206 Z'
    ], a);
    // Left pupil — large dark center
    fe(g, 'circle', { cx: 167, cy: 208, r: 5.5, fill: a ? HL : '#1A1A1A' }, a);
    // Right pupil — large dark center
    fe(g, 'circle', { cx: 195, cy: 208, r: 5.5, fill: a ? HL : '#1A1A1A' }, a);
    // Left upper eyelashes — long, visible
    pp(g, [
      'M 148 200 C 146 196 144 192 143 188',
      'M 152 196 C 150 192 149 188 149 184',
      'M 157 193 C 156 189 156 185 157 182',
      'M 163 190 C 163 186 164 183 166 180',
      'M 170 188 C 172 184 174 182 177 180'
    ], a);
    // Right upper eyelashes — long, visible
    pp(g, [
      'M 212 200 C 214 196 216 192 217 188',
      'M 208 196 C 210 192 211 188 211 184',
      'M 203 193 C 204 189 204 185 203 182',
      'M 197 190 C 197 186 196 183 194 180',
      'M 190 188 C 188 184 186 182 183 180'
    ], a);
    // Left lower eyelashes — subtle
    pp(g, [
      'M 152 214 C 150 216 148 218 146 219',
      'M 158 218 C 156 220 154 222 152 222'
    ], a, lt);
    // Right lower eyelashes — subtle
    pp(g, [
      'M 208 214 C 210 216 212 218 214 219',
      'M 202 218 C 204 220 206 222 208 222'
    ], a, lt);
    // Left eyebrow — soft arch
    pp(g, [
      'M 144 180 C 150 172 160 168 172 170 C 176 171 180 174 182 178'
    ], a);
    // Right eyebrow — soft arch
    pp(g, [
      'M 180 178 C 182 174 186 171 190 170 C 200 168 210 172 216 180'
    ], a);
    // Nose bridge — delicate
    pp(g, [
      'M 180 196 C 179 206 178 218 176 228'
    ], a, lt);
    // Nose tip and nostrils — small, cute
    pp(g, [
      'M 172 234 C 174 238 177 240 180 240 C 183 240 186 238 188 234',
      'M 174 236 C 175 234 177 234 179 236',
      'M 181 236 C 183 234 185 234 186 236'
    ], a);
    // Upper lip — cupid's bow
    pp(g, [
      'M 162 260 C 166 256 172 254 177 256 C 179 258 181 258 183 256 C 188 254 194 256 198 260'
    ], a);
    // Lower lip — shy smile
    pp(g, [
      'M 162 260 C 166 270 174 274 180 274 C 186 274 194 270 198 260'
    ], a);
    // Tooth line — baby teeth showing
    pp(g, ['M 164 260 L 196 260'], a);
    // Individual teeth separators
    pp(g, [
      'M 170 260 L 170 265',
      'M 176 260 L 176 266',
      'M 182 260 L 182 266',
      'M 188 260 L 188 265'
    ], a, lt);
    // Left ear inner detail
    pp(g, ['M 120 196 C 118 200 118 206 120 210'], a, lt);
    // Right ear inner detail
    pp(g, ['M 240 196 C 242 200 242 206 240 210'], a, lt);
  },

  // =====================================================================
  // Layer 3: Wild curly hair — voluminous mass outline both sides,
  // individual curls at top/sides/forehead (15+ curl spirals)
  // =====================================================================
  (g, a) => {
    // Main hair mass outline — left side volume
    pp(g, [
      'M 134 186 C 128 170 118 148 112 134 C 104 116 96 104 94 100 C 88 90 84 96 86 110 C 88 124 92 140 94 156 C 96 172 96 188 98 204 C 100 220 100 236 106 252'
    ], a);
    // Main hair mass outline — top
    pp(g, [
      'M 134 186 C 130 160 128 140 132 120 C 136 100 144 86 158 78 C 170 72 186 70 200 74 C 214 78 224 88 230 102 C 234 114 236 130 236 150 C 236 166 234 180 230 192'
    ], a);
    // Main hair mass outline — right side volume
    pp(g, [
      'M 230 192 C 236 174 248 150 256 134 C 262 122 268 110 272 104 C 278 96 280 100 278 114 C 276 128 272 144 268 160 C 266 176 264 192 262 208 C 260 224 258 240 254 252'
    ], a);
    // Hair bottom edge — left to chin
    pp(g, [
      'M 106 252 C 112 260 120 264 130 266'
    ], a);
    // Hair bottom edge — right to chin
    pp(g, [
      'M 254 252 C 248 260 240 264 230 266'
    ], a);
    // Curl 1 — top center crown
    pp(g, [
      'M 170 80 C 168 74 172 68 178 66 C 184 64 190 68 190 74 C 190 80 186 84 180 84'
    ], a);
    // Curl 2 — top left
    pp(g, [
      'M 148 86 C 144 80 146 72 152 70 C 158 68 162 72 162 78 C 162 84 158 88 152 88'
    ], a);
    // Curl 3 — top right
    pp(g, [
      'M 212 86 C 216 80 214 72 208 70 C 202 68 198 72 198 78 C 198 84 202 88 208 88'
    ], a);
    // Curl 4 — left forehead
    pp(g, [
      'M 136 130 C 130 124 128 116 132 110 C 136 106 142 108 144 114 C 146 120 142 128 138 132'
    ], a);
    // Curl 5 — right forehead
    pp(g, [
      'M 224 130 C 230 124 232 116 228 110 C 224 106 218 108 216 114 C 214 120 218 128 222 132'
    ], a);
    // Curl 6 — left side upper
    pp(g, [
      'M 100 128 C 94 122 90 130 92 138 C 94 146 100 148 104 142 C 108 136 106 128 100 128'
    ], a);
    // Curl 7 — left side middle
    pp(g, [
      'M 96 164 C 90 158 86 164 88 172 C 90 180 96 184 100 178 C 104 172 100 164 96 164'
    ], a);
    // Curl 8 — left side lower
    pp(g, [
      'M 98 210 C 92 204 88 210 90 218 C 92 226 98 228 102 222 C 106 216 104 210 98 210'
    ], a);
    // Curl 9 — right side upper
    pp(g, [
      'M 260 128 C 266 122 270 130 268 138 C 266 146 260 148 256 142 C 252 136 254 128 260 128'
    ], a);
    // Curl 10 — right side middle
    pp(g, [
      'M 264 164 C 270 158 274 164 272 172 C 270 180 264 184 260 178 C 256 172 260 164 264 164'
    ], a);
    // Curl 11 — right side lower
    pp(g, [
      'M 262 210 C 268 204 272 210 270 218 C 268 226 262 228 258 222 C 254 216 256 210 262 210'
    ], a);
    // Curl 12 — top left crown
    pp(g, [
      'M 156 94 C 152 88 156 82 162 82 C 168 82 170 88 168 94 C 166 98 160 98 156 94'
    ], a);
    // Curl 13 — top right crown
    pp(g, [
      'M 204 94 C 208 88 204 82 198 82 C 192 82 190 88 192 94 C 194 98 200 98 204 94'
    ], a);
    // Curl 14 — forehead center drape
    pp(g, [
      'M 160 140 C 164 134 172 130 180 130 C 188 130 196 134 200 140'
    ], a);
    // Curl 15 — left temple
    pp(g, [
      'M 118 152 C 112 146 110 154 112 162 C 114 168 120 170 122 164 C 124 158 120 152 118 152'
    ], a);
    // Curl 16 — right temple
    pp(g, [
      'M 242 152 C 248 146 250 154 248 162 C 246 168 240 170 238 164 C 236 158 240 152 242 152'
    ], a);
    // Hair texture strands — flowing lines within mass
    pp(g, [
      'M 140 100 C 150 90 166 82 180 80',
      'M 180 80 C 194 82 210 90 220 100',
      'M 110 144 C 118 132 130 122 140 118',
      'M 250 144 C 242 132 230 122 220 118',
      'M 104 192 C 108 178 114 166 124 158',
      'M 256 192 C 252 178 246 166 236 158'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — round collar, shirt wrinkle lines,
  // chair bar wood grain, chair bar knot details
  // =====================================================================
  (g, a) => {
    // Ruffled collar — peach/salmon top with frills
    pp(g, [
      'M 148 290 C 152 284 162 280 172 280 C 178 280 182 280 188 280 C 198 280 208 284 212 290'
    ], a);
    // Collar ruffle left
    pp(g, [
      'M 148 290 C 146 286 142 284 140 288 C 138 292 142 296 148 296 C 152 296 154 294 154 290'
    ], a);
    // Collar ruffle right
    pp(g, [
      'M 212 290 C 214 286 218 284 220 288 C 222 292 218 296 212 296 C 208 296 206 294 206 290'
    ], a);
    // Collar ruffle center
    pp(g, [
      'M 170 282 C 168 278 172 276 176 278 C 180 280 184 278 188 276 C 192 278 194 282 190 284'
    ], a);
    // Shirt wrinkle lines — left shoulder
    pp(g, [
      'M 130 300 C 126 310 122 322 120 334',
      'M 142 296 C 138 306 134 318 132 330'
    ], a, lt);
    // Shirt wrinkle lines — right shoulder
    pp(g, [
      'M 230 300 C 234 310 238 322 240 334',
      'M 218 296 C 222 306 226 318 228 330'
    ], a, lt);
    // Shirt wrinkle lines — center
    pp(g, [
      'M 170 296 C 172 310 174 326 176 340',
      'M 190 296 C 188 310 186 326 184 340'
    ], a, lt);
    // Sleeve ruffle hint — left
    pp(g, [
      'M 112 310 C 108 306 104 308 106 314 C 108 318 114 318 116 314'
    ], a);
    // Sleeve ruffle hint — right
    pp(g, [
      'M 248 310 C 252 306 256 308 254 314 C 252 318 246 318 244 314'
    ], a);

    // Left chair bar — wood grain lines
    pp(g, [
      'M 52 60 C 53 80 52 100 53 120',
      'M 56 140 C 55 170 56 200 55 230',
      'M 53 260 C 54 290 53 320 54 350',
      'M 50 370 C 51 390 50 410 51 425'
    ], a, lt);
    // Left chair bar — knot detail upper
    pp(g, [
      'M 52 180 C 50 176 48 178 48 182 C 48 186 50 188 54 186 C 56 184 56 180 54 178'
    ], a);
    // Left chair bar — knot detail lower
    pp(g, [
      'M 56 320 C 58 316 56 314 52 314 C 48 314 48 318 50 322 C 52 324 56 324 58 320'
    ], a);
    // Right chair bar — wood grain lines
    pp(g, [
      'M 304 60 C 305 80 304 100 305 120',
      'M 308 140 C 307 170 308 200 307 230',
      'M 305 260 C 306 290 305 320 306 350',
      'M 302 370 C 303 390 302 410 303 425'
    ], a, lt);
    // Right chair bar — knot detail upper
    pp(g, [
      'M 308 200 C 310 196 312 198 312 202 C 312 206 310 208 306 206 C 304 204 304 200 306 198'
    ], a);
    // Right chair bar — knot detail lower
    pp(g, [
      'M 304 340 C 302 336 304 334 308 334 C 312 334 312 338 310 342 C 308 344 304 344 302 340'
    ], a);
  },

  // =====================================================================
  // Layer 5: Adult hand on head — 4 distinct fingers with fingertips,
  // fingernails, partial palm/wrist at top edge
  // =====================================================================
  (g, a) => {
    // Palm base — coming from above, resting on top of head
    pp(g, [
      'M 140 94 C 138 86 136 78 136 70 C 136 60 140 50 148 44 C 156 38 168 36 180 36 C 192 36 204 38 212 44 C 220 50 224 60 224 70 C 224 78 222 86 220 94'
    ], a);
    // Wrist — at top edge of frame
    pp(g, [
      'M 148 44 C 144 36 142 26 142 16 L 142 0',
      'M 212 44 C 216 36 218 26 218 16 L 218 0'
    ], a);
    // Index finger — leftmost visible
    pp(g, [
      'M 140 94 C 136 100 130 108 128 116 C 126 122 128 126 132 126 C 136 126 138 122 140 116 C 142 110 142 102 142 96'
    ], a);
    // Index fingernail
    pp(g, [
      'M 128 118 C 126 120 126 124 128 126 C 130 128 134 128 136 124'
    ], a, lt);
    // Middle finger — next to index
    pp(g, [
      'M 155 92 C 152 98 148 108 146 118 C 144 126 146 130 150 130 C 154 130 156 126 158 118 C 160 110 160 100 158 94'
    ], a);
    // Middle fingernail
    pp(g, [
      'M 146 120 C 144 122 144 128 148 130 C 150 132 154 130 156 126'
    ], a, lt);
    // Ring finger
    pp(g, [
      'M 178 90 C 176 96 174 106 174 116 C 174 124 176 128 180 128 C 184 128 186 124 186 116 C 186 106 184 96 182 90'
    ], a);
    // Ring fingernail
    pp(g, [
      'M 174 118 C 172 120 172 126 176 128 C 178 130 182 130 184 126'
    ], a, lt);
    // Pinky finger — rightmost visible, shorter
    pp(g, [
      'M 200 92 C 198 98 196 106 196 114 C 196 120 198 124 202 124 C 206 124 208 120 208 114 C 208 106 206 98 204 92'
    ], a);
    // Pinky fingernail
    pp(g, [
      'M 196 116 C 194 118 194 122 198 124 C 200 126 204 124 206 120'
    ], a, lt);
    // Thumb hint — wrapping around right side of head (partially hidden)
    pp(g, [
      'M 220 94 C 224 100 228 108 228 116 C 228 122 226 126 222 124 C 218 122 218 116 218 110 C 218 104 218 98 220 94'
    ], a);
    // Knuckle creases
    pp(g, [
      'M 138 98 C 140 96 142 96 144 98',
      'M 154 96 C 156 94 158 94 160 96',
      'M 176 94 C 178 92 180 92 182 94',
      'M 198 96 C 200 94 204 94 206 96'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — dark panels through chair bars, top area,
  // chair crossbar
  // =====================================================================
  (g, a) => {
    // Dark background — left panel (behind left chair bar)
    pp(g, [
      'M 0 0 L 48 0 L 48 450 L 0 450 Z'
    ], a);
    // Dark background — right panel (behind right chair bar)
    pp(g, [
      'M 312 0 L 360 0 L 360 450 L 312 450 Z'
    ], a);
    // Dark background — top panel (above hand)
    pp(g, [
      'M 60 0 L 300 0 L 300 30 L 60 30 Z'
    ], a);
    // Dark background — left of face through bars
    pp(g, [
      'M 60 30 L 94 30 L 94 420 L 60 420 Z'
    ], a, lt);
    // Dark background — right of face through bars
    pp(g, [
      'M 266 30 L 300 30 L 300 420 L 266 420 Z'
    ], a, lt);
    // Chair crossbar — horizontal connecting bar at bottom
    pp(g, [
      'M 42 380 C 44 376 52 374 58 376 L 302 376 C 308 374 316 376 318 380 L 318 392 C 316 396 308 398 302 396 L 58 396 C 52 398 44 396 42 392 Z'
    ], a);
    // Crossbar wood grain
    pp(g, [
      'M 60 382 C 100 384 160 382 200 384 C 240 382 280 384 310 382',
      'M 60 390 C 110 388 170 390 220 388 C 260 390 290 388 310 390'
    ], a, lt);
    // Chair back hint — top horizontal piece
    pp(g, [
      'M 48 24 L 312 24',
      'M 48 34 L 312 34'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills FIGURES — hair, skin, eyes, shirt, lip,
  // teeth, adult hand, curl highlights
  // =====================================================================
  (g, a) => {
    // Hair fill — main mass brown
    fl(g,
      'M 134 186 C 128 170 118 148 112 134 C 104 116 96 104 94 100 C 88 90 84 96 86 110 C 88 124 92 140 94 156 C 96 172 96 188 98 204 C 100 220 100 236 106 252 C 112 260 120 264 130 266 L 134 240 C 130 225 126 205 124 185 C 126 155 140 132 158 120 C 148 124 138 138 134 156 Z',
      '#8B6538', a);
    fl(g,
      'M 230 192 C 236 174 248 150 256 134 C 262 122 268 110 272 104 C 278 96 280 100 278 114 C 276 128 272 144 268 160 C 266 176 264 192 262 208 C 260 224 258 240 254 252 C 248 260 240 264 230 266 L 226 240 C 234 225 238 205 236 185 C 234 155 220 132 202 120 C 212 124 222 138 226 156 Z',
      '#8B6538', false);
    fl(g,
      'M 134 186 C 130 160 128 140 132 120 C 136 100 144 86 158 78 C 170 72 186 70 200 74 C 214 78 224 88 230 102 C 234 114 236 130 236 150 C 236 166 234 180 230 192 L 220 180 C 224 160 224 140 218 122 C 212 106 200 92 180 88 C 160 92 148 106 142 122 C 136 140 136 160 140 180 Z',
      '#8B6538', false);
    // Curl highlight fills — lighter tone on select curls
    fl(g,
      'M 170 80 C 168 74 172 68 178 66 C 184 64 190 68 190 74 C 190 80 186 84 180 84 C 176 84 172 82 170 80 Z',
      '#C4A265', false);
    fl(g,
      'M 100 128 C 94 122 90 130 92 138 C 94 146 100 148 104 142 C 108 136 106 128 100 128 Z',
      '#C4A265', false);
    fl(g,
      'M 260 128 C 266 122 270 130 268 138 C 266 146 260 148 256 142 C 252 136 254 128 260 128 Z',
      '#C4A265', false);

    // Skin fill — face
    fl(g,
      'M 180 130 C 150 130 128 157 126 187 C 124 207 128 227 136 242 C 144 254 158 264 174 268 C 180 269 184 269 190 268 C 206 264 220 254 228 242 C 236 227 240 207 238 187 C 236 157 214 130 180 130 Z',
      '#FADCC2', a);
    // Neck skin
    fl(g,
      'M 166 264 C 164 272 162 280 162 288 L 198 288 C 198 280 196 272 194 264 Z',
      '#F0C8A8', false);
    // Ear fills
    fe(g, 'ellipse', { cx: 120, cy: 204, rx: 6, ry: 10, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 240, cy: 204, rx: 6, ry: 10, fill: '#F0C8A8' }, false);

    // Eye whites — left
    fl(g,
      'M 150 204 C 150 196 158 188 168 188 C 178 188 186 196 186 204 C 186 212 178 220 168 220 C 158 220 150 212 150 204 Z',
      '#FFFFFF', a);
    // Eye whites — right
    fl(g,
      'M 178 204 C 178 196 186 188 196 188 C 206 188 214 196 214 204 C 214 212 206 220 196 220 C 186 220 178 212 178 204 Z',
      '#FFFFFF', false);
    // Iris fill — left (dark brown)
    fl(g,
      'M 157 208 C 157 200 162 194 169 194 C 176 194 181 200 181 208 C 181 216 176 222 169 222 C 162 222 157 216 157 208 Z',
      '#5E4023', a);
    // Iris fill — right (dark brown)
    fl(g,
      'M 185 208 C 185 200 190 194 197 194 C 204 194 209 200 209 208 C 209 216 204 222 197 222 C 190 222 185 216 185 208 Z',
      '#5E4023', false);
    // Pupil fills
    fe(g, 'circle', { cx: 169, cy: 210, r: 5.5, fill: '#1A1A1A' }, false);
    fe(g, 'circle', { cx: 197, cy: 210, r: 5.5, fill: '#1A1A1A' }, false);

    // Shirt fill — peach/salmon pink
    fl(g,
      'M 148 290 C 152 284 162 280 172 280 C 178 280 182 280 188 280 C 198 280 208 284 212 290 L 244 306 C 252 312 256 320 258 332 L 262 390 L 98 390 L 102 332 C 104 320 108 312 116 306 Z',
      '#F48FB1', a);

    // Lip fill
    fl(g,
      'M 162 260 C 166 256 172 254 177 256 C 179 258 181 258 183 256 C 188 254 194 256 198 260 C 194 270 186 274 180 274 C 174 274 166 270 162 260 Z',
      '#E8999A', false);
    // Teeth fill — white area
    fl(g,
      'M 164 260 L 196 260 L 196 266 C 192 268 186 270 180 270 C 174 270 168 268 164 266 Z',
      '#FFFFFF', false);

    // Adult hand skin fill
    fl(g,
      'M 140 94 C 138 86 136 78 136 70 C 136 60 140 50 148 44 C 156 38 168 36 180 36 C 192 36 204 38 212 44 C 220 50 224 60 224 70 C 224 78 222 86 220 94 L 218 100 C 210 94 196 90 180 90 C 164 90 150 94 142 100 Z',
      '#F0C8A0', a);
    // Finger fills
    fl(g,
      'M 140 94 C 136 100 130 108 128 116 C 126 122 128 126 132 126 C 136 126 138 122 140 116 C 142 110 142 102 142 96 Z',
      '#F0C8A0', false);
    fl(g,
      'M 155 92 C 152 98 148 108 146 118 C 144 126 146 130 150 130 C 154 130 156 126 158 118 C 160 110 160 100 158 94 Z',
      '#F0C8A0', false);
    fl(g,
      'M 178 90 C 176 96 174 106 174 116 C 174 124 176 128 180 128 C 184 128 186 124 186 116 C 186 106 184 96 182 90 Z',
      '#F0C8A0', false);
    fl(g,
      'M 200 92 C 198 98 196 106 196 114 C 196 120 198 124 202 124 C 206 124 208 120 208 114 C 208 106 206 98 204 92 Z',
      '#F0C8A0', false);
  },

  // =====================================================================
  // Layer 8: Color fills SCENE — dark background, chair bars wood,
  // wood grain overlay, crossbar
  // =====================================================================
  (g, a) => {
    // Dark background fill — left outer panel
    fe(g, 'rect', { x: 0, y: 0, width: 48, height: 450, fill: '#3E2723' }, a);
    // Dark background fill — right outer panel
    fe(g, 'rect', { x: 312, y: 0, width: 48, height: 450, fill: '#3E2723' }, false);
    // Dark background fill — top panel
    fe(g, 'rect', { x: 60, y: 0, width: 240, height: 30, fill: '#3E2723' }, false);
    // Dark background — left gap between bar and face
    fe(g, 'rect', { x: 60, y: 30, width: 34, height: 390, fill: '#3E2723', opacity: '0.85' }, false);
    // Dark background — right gap between bar and face
    fe(g, 'rect', { x: 266, y: 30, width: 34, height: 390, fill: '#3E2723', opacity: '0.85' }, false);

    // Left chair bar fill — wood color
    fl(g,
      'M 48 24 C 50 22 58 22 60 24 L 60 430 C 58 432 50 432 48 430 Z',
      '#C49A6C', a);
    // Right chair bar fill — wood color
    fl(g,
      'M 300 24 C 302 22 310 22 312 24 L 312 430 C 310 432 302 432 300 430 Z',
      '#C49A6C', false);

    // Left bar wood grain overlay
    fl(g,
      'M 50 60 C 52 56 56 56 58 60 L 58 120 C 56 124 52 124 50 120 Z',
      '#A1887F', false);
    fl(g,
      'M 50 200 C 52 196 56 196 58 200 L 58 260 C 56 264 52 264 50 260 Z',
      '#A1887F', false);
    fl(g,
      'M 50 340 C 52 336 56 336 58 340 L 58 400 C 56 404 52 404 50 400 Z',
      '#A1887F', false);
    // Right bar wood grain overlay
    fl(g,
      'M 302 80 C 304 76 308 76 310 80 L 310 140 C 308 144 304 144 302 140 Z',
      '#A1887F', false);
    fl(g,
      'M 302 220 C 304 216 308 216 310 220 L 310 280 C 308 284 304 284 302 280 Z',
      '#A1887F', false);
    fl(g,
      'M 302 360 C 304 356 308 356 310 360 L 310 420 C 308 424 304 424 302 420 Z',
      '#A1887F', false);

    // Chair crossbar fill
    fl(g,
      'M 42 380 C 44 376 52 374 58 376 L 302 376 C 308 374 316 376 318 380 L 318 392 C 316 396 308 398 302 396 L 58 396 C 52 398 44 396 42 392 Z',
      '#C49A6C', a);
    // Crossbar grain overlay
    fl(g,
      'M 60 380 L 300 380 L 300 386 L 60 386 Z',
      '#A1887F', false);

    // Chair top bar fill
    fl(g,
      'M 48 24 L 312 24 L 312 34 L 48 34 Z',
      '#C49A6C', false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shine white dots, cheek blush, nose highlight,
  // hair shine, fingernail highlights, lip shine, chair bar shine
  // =====================================================================
  (g, a) => {
    // Eye shine — left (main sparkle)
    fe(g, 'circle', { cx: 165, cy: 204, r: 2.2, fill: 'white' }, a);
    // Eye shine — left (secondary)
    fe(g, 'circle', { cx: 172, cy: 212, r: 1.1, fill: 'white', opacity: '0.7' }, false);
    // Eye shine — right (main sparkle)
    fe(g, 'circle', { cx: 193, cy: 204, r: 2.2, fill: 'white' }, a);
    // Eye shine — right (secondary)
    fe(g, 'circle', { cx: 200, cy: 212, r: 1.1, fill: 'white', opacity: '0.7' }, false);

    // Cheek blush — left (warm peachy pink)
    fe(g, 'ellipse', { cx: 148, cy: 238, rx: 14, ry: 7, fill: '#FBBCAE', opacity: '0.45' }, a);
    // Cheek blush — right
    fe(g, 'ellipse', { cx: 212, cy: 238, rx: 14, ry: 7, fill: '#FBBCAE', opacity: '0.45' }, a);

    // Nose highlight — small shine on nose tip
    fe(g, 'ellipse', { cx: 180, cy: 234, rx: 3, ry: 2, fill: 'white', opacity: '0.35' }, a);

    // Hair shine — golden highlights on curls
    pp(g, [
      'M 148 86 C 152 82 158 82 162 86',
      'M 208 86 C 204 82 198 82 196 86'
    ], a, lt);
    fl(g,
      'M 156 96 C 158 90 166 86 172 90 C 178 94 176 102 170 104 C 164 106 158 102 156 96 Z',
      '#D4A855', false);
    fl(g,
      'M 196 96 C 194 90 186 86 180 90 C 174 94 176 102 182 104 C 188 106 194 102 196 96 Z',
      '#D4A855', false);
    fl(g,
      'M 102 152 C 106 146 112 146 114 152 C 116 158 112 164 106 164 C 100 164 98 158 102 152 Z',
      '#D4A855', false);
    fl(g,
      'M 258 152 C 254 146 248 146 246 152 C 244 158 248 164 254 164 C 260 164 262 158 258 152 Z',
      '#D4A855', false);

    // Fingernail highlights — small white arcs on each nail
    fe(g, 'ellipse', { cx: 131, cy: 122, rx: 2.5, ry: 1.5, fill: 'white', opacity: '0.5' }, a);
    fe(g, 'ellipse', { cx: 149, cy: 126, rx: 2.5, ry: 1.5, fill: 'white', opacity: '0.5' }, false);
    fe(g, 'ellipse', { cx: 179, cy: 124, rx: 2.5, ry: 1.5, fill: 'white', opacity: '0.5' }, false);
    fe(g, 'ellipse', { cx: 201, cy: 120, rx: 2.5, ry: 1.5, fill: 'white', opacity: '0.5' }, false);

    // Lip shine — subtle highlight
    fe(g, 'ellipse', { cx: 176, cy: 262, rx: 4, ry: 1.5, fill: 'white', opacity: '0.3' }, a);

    // Chair bar shine — left
    fl(g,
      'M 50 40 C 52 38 54 38 56 40 L 56 120 C 54 122 52 122 50 120 Z',
      'white', false);
    fe(g, 'rect', { x: 50, y: 40, width: 4, height: 80, rx: 2, fill: 'white', opacity: '0.12' }, false);
    // Chair bar shine — right
    fe(g, 'rect', { x: 302, y: 50, width: 4, height: 80, rx: 2, fill: 'white', opacity: '0.12' }, false);

    // Crossbar shine
    fe(g, 'rect', { x: 80, y: 380, width: 200, height: 3, rx: 1, fill: 'white', opacity: '0.1' }, false);

    // Shirt collar shine — subtle fabric highlight
    fe(g, 'ellipse', { cx: 180, cy: 284, rx: 12, ry: 3, fill: 'white', opacity: '0.15' }, false);

    // Warm ambient lighting overlay
    fe(g, 'rect', { x: 60, y: 30, width: 240, height: 350, fill: '#FFF8E1', opacity: '0.04' }, false);
  }
];
