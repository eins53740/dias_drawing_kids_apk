const miguelLayers = [
  // =====================================================================
  // Layer 0: Composition guides — table edge, Miguel zone, chair, bottles
  // =====================================================================
  (g, a) => {
    // Table edge horizontal
    pp(g, ['M 0 240 L 360 240'], a, lt);
    // Table front drape guides
    pp(g, ['M 0 240 L 0 450', 'M 360 240 L 360 450'], a, lt);
    // Miguel vertical center guide
    pp(g, ['M 270 10 L 270 240'], a, lt);
    // Shoulder line guide
    pp(g, ['M 200 145 L 340 145'], a, lt);
    // Head zone — refined oval for child's head proportions
    pp(g, [
      'M 270 38 C 298 38 318 58 318 88 C 318 118 298 138 270 138 C 242 138 222 118 222 88 C 222 58 242 38 270 38 Z'
    ], a, lt);
    // Eye line guide
    pp(g, ['M 232 82 L 308 82'], a, lt);
    // Nose line guide
    pp(g, ['M 248 102 L 292 102'], a, lt);
    // Mouth line guide
    pp(g, ['M 245 118 L 295 118'], a, lt);
    // Chair back rectangle guide
    pp(g, ['M 208 22 L 338 22 L 338 225 L 208 225 Z'], a, lt);
    // Bottle zone guide
    pp(g, ['M 80 95 L 180 95 L 180 240 L 80 240 Z'], a, lt);
    // Bowl zone guide
    pp(g, ['M 225 252 L 315 252 L 315 298 L 225 298 Z'], a, lt);
    // Left arm action line
    pp(g, ['M 226 182 C 210 200 195 140 190 120'], a, lt);
    // Right arm action line
    pp(g, ['M 314 182 C 325 210 330 240 330 260'], a, lt);
    // Facial thirds guides
    pp(g, ['M 240 68 L 300 68'], a, lt);
    pp(g, ['M 238 98 L 302 98'], a, lt);
  },

  // =====================================================================
  // Layer 1: Miguel body — detailed head shape, neck, shoulders, torso, arms
  // =====================================================================
  (g, a) => {
    // Head — child proportions: rounder, wider forehead, softer chin
    // Detailed contour with many control points for smooth organic shape
    pp(g, [
      'M 270 40 C 278 39 286 40 293 44 C 300 48 306 54 310 62 C 314 70 316 78 316 86 C 316 94 314 102 310 108 C 306 114 302 118 296 124 C 290 130 282 134 274 136 C 270 137 266 137 262 136 C 256 134 250 130 244 124 C 238 118 234 112 230 106 C 226 98 224 90 224 82 C 224 74 226 66 230 60 C 234 54 240 48 248 44 C 254 40 262 39 270 40 Z'
    ], a);
    // Jawline detail — softer child jaw
    pp(g, [
      'M 296 124 C 292 128 286 132 280 135 C 276 136 272 137 270 137 C 268 137 264 136 260 135 C 254 132 248 128 244 124'
    ], a);
    // Chin subtle cleft/roundness
    pp(g, [
      'M 264 134 C 266 136 268 137 270 137 C 272 137 274 136 276 134'
    ], a);

    // Neck — child neck is shorter and thicker relative to head
    pp(g, [
      'M 258 135 C 256 140 254 146 253 152',
      'M 282 135 C 284 140 286 146 287 152'
    ], a);
    // Neck tendon/muscle hints
    pp(g, [
      'M 262 138 C 260 144 258 150 257 155',
      'M 278 138 C 280 144 282 150 283 155'
    ], a, lt);
    // Trapezius muscle line from neck to shoulder
    pp(g, [
      'M 253 152 C 248 156 240 160 230 164 C 224 168 220 172 218 178',
      'M 287 152 C 292 156 300 160 310 164 C 316 168 320 172 322 178'
    ], a);

    // Shoulders and torso — hoodie fabric, leaning forward posture
    pp(g, [
      'M 218 178 C 222 170 230 162 240 158 C 248 155 258 153 270 153 C 282 153 292 155 300 158 C 310 162 318 170 322 178'
    ], a);
    // Torso sides
    pp(g, [
      'M 218 178 C 216 190 214 204 212 220 C 210 230 210 236 212 240',
      'M 322 178 C 324 190 326 204 328 220 C 330 230 330 236 328 240'
    ], a);
    // Bottom of torso at table edge
    pp(g, ['M 212 240 L 328 240'], a);

    // Left arm — reaching up toward mouth, foreshortened
    pp(g, [
      'M 226 178 C 222 182 218 186 214 192 C 210 198 206 204 202 210 C 200 214 198 218 196 220 C 194 224 194 228 196 232 C 198 236 202 238 206 236'
    ], a);
    // Left arm inner contour
    pp(g, [
      'M 238 176 C 234 180 230 186 226 192 C 222 198 218 206 214 214 C 212 218 210 222 210 226 C 210 230 212 234 216 234'
    ], a);
    // Left forearm/wrist connecting to hand area
    pp(g, [
      'M 206 226 C 208 222 210 216 214 208 C 218 200 224 190 230 182',
      'M 196 220 C 194 216 194 210 196 204 C 198 198 202 190 208 180'
    ], a);

    // Right arm — reaching down toward cup on table
    pp(g, [
      'M 314 178 C 318 184 322 192 324 200 C 326 208 328 216 330 224 C 332 230 332 236 330 240'
    ], a);
    // Right arm inner contour
    pp(g, [
      'M 308 182 C 312 190 316 200 318 210 C 320 218 322 226 322 234 C 322 238 320 240 318 240'
    ], a);
    // Right shoulder seam detail
    pp(g, [
      'M 310 164 C 314 168 318 174 320 180'
    ], a, lt);
    // Left shoulder seam detail
    pp(g, [
      'M 230 164 C 226 168 222 174 220 180'
    ], a, lt);
  },

  // =====================================================================
  // Layer 2: Face — photorealistic eyes, brows, nose, eating grin, ears
  // =====================================================================
  (g, a) => {
    // ---- LEFT EYE (his right) ----
    // Upper eyelid — almond shape with precise curvature
    pp(g, [
      'M 250 80 C 252 74 256 70 260 68 C 264 67 268 68 272 72 C 274 75 275 78 274 82'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 250 80 C 252 86 256 88 260 89 C 264 90 268 89 272 86 C 274 84 274 82 274 82'
    ], a);
    // Upper eyelid fold/crease
    pp(g, [
      'M 252 74 C 254 70 258 66 262 65 C 266 64 270 65 274 68'
    ], a, lt);
    // Double eyelid line
    pp(g, [
      'M 254 76 C 258 72 262 70 266 70 C 270 70 272 72 274 74'
    ], a, lt);
    // Iris outline
    pp(g, [
      'M 258 74 C 256 76 255 79 255 82 C 255 85 256 87 258 88 C 260 89 263 90 266 89 C 268 88 270 86 270 82 C 270 78 269 75 267 74 C 265 73 261 73 258 74 Z'
    ], a);
    // Pupil
    fe(g, 'circle', { cx: 262, cy: 81, r: 3.5, fill: a ? HL : '#1A0F05' }, a);
    // Iris detail ring
    pp(g, [
      'M 258 78 C 259 76 261 75 263 75 C 265 75 267 76 268 78',
      'M 258 84 C 259 86 261 87 263 87 C 265 87 267 86 268 84'
    ], a, lt);
    // Eyelashes — upper lid, 6 individual lashes
    pps(g, [
      'M 252 76 C 251 73 250 71 249 69',
      'M 255 73 C 254 70 253 68 252 66',
      'M 259 70 C 258 67 258 65 257 63',
      'M 264 68 C 264 65 264 63 264 61',
      'M 269 70 C 270 67 271 65 272 63',
      'M 273 74 C 274 71 276 69 277 67'
    ], a, 0.5, a ? HL : '#3E2C1A');
    // Lower lashes — subtle, 3
    pps(g, [
      'M 256 87 C 255 89 254 90 253 91',
      'M 262 89 C 262 91 261 92 260 93',
      'M 268 87 C 269 89 270 90 271 91'
    ], a, 0.3, a ? HL : '#5D4037');
    // Tear duct
    pp(g, [
      'M 250 80 C 249 81 249 82 250 82'
    ], a, lt);

    // ---- RIGHT EYE (his left) ----
    // Upper eyelid
    pp(g, [
      'M 278 82 C 278 78 278 75 280 72 C 282 69 286 67 290 68 C 294 70 298 74 300 80'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 278 82 C 278 84 280 86 282 88 C 286 90 290 90 294 88 C 296 86 298 84 300 80'
    ], a);
    // Upper eyelid fold
    pp(g, [
      'M 278 74 C 280 70 284 66 288 65 C 292 64 296 66 300 70'
    ], a, lt);
    // Double eyelid
    pp(g, [
      'M 280 76 C 282 72 286 70 290 70 C 293 70 296 72 298 76'
    ], a, lt);
    // Iris outline
    pp(g, [
      'M 284 74 C 282 76 281 79 281 82 C 281 85 282 87 284 88 C 286 89 289 90 292 89 C 294 88 296 86 296 82 C 296 78 295 75 293 74 C 291 73 287 73 284 74 Z'
    ], a);
    // Pupil
    fe(g, 'circle', { cx: 288, cy: 81, r: 3.5, fill: a ? HL : '#1A0F05' }, a);
    // Iris detail ring
    pp(g, [
      'M 284 78 C 285 76 287 75 289 75 C 291 75 293 76 294 78',
      'M 284 84 C 285 86 287 87 289 87 C 291 87 293 86 294 84'
    ], a, lt);
    // Eyelashes — upper lid, 6 individual lashes
    pps(g, [
      'M 279 76 C 278 73 277 71 276 69',
      'M 282 73 C 281 70 280 68 279 66',
      'M 286 70 C 286 67 286 65 285 63',
      'M 291 69 C 291 66 292 64 292 62',
      'M 295 71 C 296 68 297 66 298 64',
      'M 299 74 C 300 71 302 69 303 67'
    ], a, 0.5, a ? HL : '#3E2C1A');
    // Lower lashes — subtle, 3
    pps(g, [
      'M 282 88 C 281 90 280 91 279 92',
      'M 288 89 C 288 91 287 92 286 93',
      'M 294 87 C 295 89 296 90 297 91'
    ], a, 0.3, a ? HL : '#5D4037');
    // Tear duct
    pp(g, [
      'M 300 80 C 301 81 301 82 300 82'
    ], a, lt);

    // ---- EYEBROWS ----
    // Left eyebrow — natural child brow with hair strokes
    pp(g, [
      'M 248 64 C 252 60 258 58 264 58 C 268 58 272 60 274 62'
    ], a);
    // Eyebrow hair strokes — left
    pps(g, [
      'M 250 64 C 252 61 254 60 256 59',
      'M 254 63 C 256 60 258 59 260 58',
      'M 258 62 C 260 59 262 58 264 58',
      'M 262 61 C 264 59 266 58 268 59',
      'M 266 61 C 268 59 270 59 272 60',
      'M 270 62 C 271 60 272 60 274 62'
    ], a, 0.6, a ? HL : '#8B7355');
    // Right eyebrow
    pp(g, [
      'M 278 62 C 282 58 288 58 294 58 C 298 60 302 62 304 66'
    ], a);
    // Eyebrow hair strokes — right
    pps(g, [
      'M 280 62 C 282 59 284 58 286 58',
      'M 284 61 C 286 58 288 58 290 58',
      'M 288 60 C 290 58 292 58 294 58',
      'M 292 60 C 294 58 296 59 298 60',
      'M 296 61 C 298 60 300 60 302 62',
      'M 300 63 C 301 62 302 62 304 64'
    ], a, 0.6, a ? HL : '#8B7355');

    // ---- NOSE ----
    // Nose bridge — subtle line from brow
    pp(g, [
      'M 268 70 C 267 76 266 82 266 88 C 266 92 265 96 264 100'
    ], a, lt);
    // Right side nose bridge shadow line
    pp(g, [
      'M 274 72 C 273 78 272 84 272 90 C 272 94 272 96 272 100'
    ], a, lt);
    // Nose tip — round, child-like
    pp(g, [
      'M 264 100 C 262 102 262 104 264 106 C 266 108 270 109 274 108 C 276 106 278 104 276 102 C 274 100 272 100 270 100'
    ], a);
    // Left nostril
    pp(g, [
      'M 260 104 C 258 106 258 108 260 110 C 262 111 264 110 264 108'
    ], a);
    // Right nostril
    pp(g, [
      'M 280 104 C 282 106 282 108 280 110 C 278 111 276 110 276 108'
    ], a);
    // Alar crease — left
    pp(g, [
      'M 258 106 C 256 108 256 110 258 112'
    ], a, lt);
    // Alar crease — right
    pp(g, [
      'M 282 106 C 284 108 284 110 282 112'
    ], a, lt);
    // Nose septum
    pp(g, [
      'M 268 108 C 269 110 271 110 272 108'
    ], a, lt);

    // ---- MOUTH — big eating grin showing teeth ----
    // Upper lip — cupid's bow detail
    pp(g, [
      'M 250 116 C 253 114 256 112 260 111 C 264 110 267 109 270 110 C 270 110 270 108 270 108 C 273 109 276 110 280 111 C 284 112 287 114 290 116'
    ], a);
    // Philtrum (groove from nose to upper lip)
    pp(g, [
      'M 267 108 C 267 110 268 112 270 112',
      'M 273 108 C 273 110 272 112 270 112'
    ], a, lt);
    // Lower lip curve — wide open grin
    pp(g, [
      'M 250 116 C 254 128 260 134 266 136 C 270 137 274 137 278 136 C 284 134 288 128 290 116'
    ], a);
    // Vermillion border — upper lip
    pp(g, [
      'M 252 116 C 256 114 262 112 270 112 C 278 112 284 114 288 116'
    ], a, lt);
    // Lower lip bottom contour
    pp(g, [
      'M 254 124 C 258 130 264 134 270 135 C 276 134 282 130 286 124'
    ], a, lt);
    // Upper teeth row — individual teeth visible through grin
    pp(g, ['M 254 116 L 286 116'], a);
    // Individual upper teeth separations
    pp(g, [
      'M 258 116 L 258 120',
      'M 262 116 L 262 121',
      'M 266 116 L 266 121',
      'M 270 116 L 270 122',
      'M 274 116 L 274 121',
      'M 278 116 L 278 121',
      'M 282 116 L 282 120'
    ], a, lt);
    // Upper teeth bottom edge
    pp(g, [
      'M 256 120 C 260 121 266 122 270 122 C 274 122 280 121 284 120'
    ], a, lt);
    // Lower teeth hint
    pp(g, ['M 258 128 L 282 128'], a, lt);
    pp(g, [
      'M 264 128 L 264 124',
      'M 268 128 L 268 123',
      'M 272 128 L 272 123',
      'M 276 128 L 276 124'
    ], a, lt);
    // Nasolabial fold — left
    pp(g, [
      'M 252 100 C 250 104 248 108 248 112 C 248 114 249 116 250 116'
    ], a, lt);
    // Nasolabial fold — right
    pp(g, [
      'M 288 100 C 290 104 292 108 292 112 C 292 114 291 116 290 116'
    ], a, lt);

    // ---- LEFT EAR ----
    // Helix (outer rim)
    pp(g, [
      'M 224 74 C 220 70 216 72 214 76 C 212 80 212 86 212 92 C 212 96 214 100 218 102 C 222 104 226 102 228 98'
    ], a);
    // Antihelix (inner ridge)
    pp(g, [
      'M 226 76 C 222 78 220 82 220 88 C 220 92 222 96 224 98'
    ], a, lt);
    // Tragus
    pp(g, [
      'M 226 84 C 228 82 228 86 226 88'
    ], a, lt);
    // Antitragus
    pp(g, [
      'M 224 94 C 226 92 226 96 224 98'
    ], a, lt);
    // Ear lobe
    pp(g, [
      'M 218 102 C 218 106 220 108 224 106 C 226 104 226 102 226 100'
    ], a);
    // Concha (deep inner ear)
    pp(g, [
      'M 222 82 C 224 84 224 88 222 90'
    ], a, lt);

    // ---- RIGHT EAR ----
    // Helix
    pp(g, [
      'M 316 74 C 320 70 324 72 326 76 C 328 80 328 86 328 92 C 328 96 326 100 322 102 C 318 104 314 102 312 98'
    ], a);
    // Antihelix
    pp(g, [
      'M 314 76 C 318 78 320 82 320 88 C 320 92 318 96 316 98'
    ], a, lt);
    // Tragus
    pp(g, [
      'M 314 84 C 312 82 312 86 314 88'
    ], a, lt);
    // Antitragus
    pp(g, [
      'M 316 94 C 314 92 314 96 316 98'
    ], a, lt);
    // Ear lobe
    pp(g, [
      'M 322 102 C 322 106 320 108 316 106 C 314 104 314 102 314 100'
    ], a);
    // Concha
    pp(g, [
      'M 318 82 C 316 84 316 88 318 90'
    ], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair — photorealistic volume, many individual strands, texture
  // =====================================================================
  (g, a) => {
    // Hair mass outline — short dirty blonde, swept slightly right
    pp(g, [
      'M 228 72 C 226 60 228 50 234 42 C 240 34 250 28 262 26 C 270 24 278 24 286 26 C 294 28 302 34 308 42 C 312 48 314 56 314 66 C 314 72 312 76 310 78'
    ], a);
    // Hair left side contour
    pp(g, [
      'M 228 72 C 226 68 224 64 224 60 C 224 56 226 50 230 46 C 234 42 238 40 242 38'
    ], a);
    // Hair right side contour
    pp(g, [
      'M 314 66 C 316 62 316 58 316 54 C 316 50 314 46 310 42'
    ], a);
    // Inner volume shape
    pp(g, [
      'M 232 68 C 234 56 240 44 256 36 C 266 32 280 32 292 38 C 300 44 306 54 308 66'
    ], a);

    // ---- Individual hair strands (40+ strands for texture) ----
    // Top strands — swept direction
    pps(g, [
      'M 252 28 C 258 26 266 26 274 28',
      'M 248 30 C 256 27 268 26 280 30',
      'M 244 34 C 254 29 268 28 282 32',
      'M 240 38 C 252 32 266 30 284 36'
    ], a, 0.8, a ? HL : '#B8985A');
    // Upper crown strands
    pps(g, [
      'M 242 40 C 250 35 262 32 276 36',
      'M 238 44 C 250 38 264 36 280 40',
      'M 236 48 C 248 42 264 40 282 44',
      'M 234 52 C 248 46 264 44 284 48'
    ], a, 0.7, a ? HL : '#C4A265');
    // Mid crown strands
    pps(g, [
      'M 232 56 C 246 50 264 48 286 52',
      'M 230 60 C 244 54 264 52 288 56',
      'M 230 64 C 244 58 264 56 290 60',
      'M 228 68 C 242 62 264 60 292 64'
    ], a, 0.6, a ? HL : '#BFA05C');
    // Forehead fringe strands
    pps(g, [
      'M 246 44 C 252 48 258 52 262 58',
      'M 250 42 C 256 46 262 50 266 56',
      'M 256 40 C 260 44 266 48 270 54',
      'M 262 38 C 264 42 268 46 272 52',
      'M 268 36 C 270 40 274 44 278 50',
      'M 274 36 C 276 40 278 44 282 48',
      'M 280 38 C 282 42 284 46 286 50'
    ], a, 0.5, a ? HL : '#D4B872');
    // Left temple strands
    pps(g, [
      'M 230 56 C 228 60 226 66 226 72',
      'M 232 52 C 230 58 228 64 228 70',
      'M 234 48 C 232 54 230 60 228 68'
    ], a, 0.6, a ? HL : '#A89050');
    // Right temple strands
    pps(g, [
      'M 308 52 C 310 58 312 64 314 70',
      'M 306 48 C 308 54 312 60 314 66',
      'M 304 44 C 306 50 310 56 312 62'
    ], a, 0.6, a ? HL : '#A89050');
    // Darker under-layer strands (root depth)
    pps(g, [
      'M 236 60 C 248 54 262 52 278 54',
      'M 238 64 C 250 58 266 56 282 58',
      'M 240 68 C 254 62 268 60 284 62',
      'M 296 62 C 300 56 304 52 306 48',
      'M 294 66 C 298 60 302 56 304 52'
    ], a, 0.4, a ? HL : '#8C7040');
    // Flyaway strands at crown edges
    pps(g, [
      'M 252 26 C 250 22 252 20 256 22',
      'M 268 24 C 270 20 274 20 276 24',
      'M 284 28 C 288 24 290 24 290 28',
      'M 240 36 C 236 32 234 30 236 28',
      'M 300 38 C 304 34 308 34 306 38'
    ], a, 0.3, a ? HL : '#D4B872');
    // Part line hint
    pps(g, [
      'M 262 28 C 264 32 266 38 268 44',
      'M 264 28 C 266 34 268 40 270 46'
    ], a, 0.3, a ? HL : '#F0E0C0');
    // Side hair texture near ears
    pps(g, [
      'M 226 72 C 224 76 224 80 226 82',
      'M 228 70 C 226 74 226 78 228 80',
      'M 312 70 C 314 74 314 78 312 80',
      'M 310 72 C 312 76 312 80 310 82'
    ], a, 0.4, a ? HL : '#A89050');
  },

  // =====================================================================
  // Layer 4: Clothing — yellow hoodie with fabric realism
  // =====================================================================
  (g, a) => {
    // Hoodie body outline — leaning forward posture
    pp(g, [
      'M 218 178 C 222 170 230 162 240 158 C 248 155 258 153 270 153 C 282 153 292 155 300 158 C 310 162 318 170 322 178 L 328 240 L 212 240 Z'
    ], a);
    // Collar/neckline — crew neck visible under hood
    pp(g, [
      'M 250 156 C 256 153 264 152 270 152 C 276 152 284 153 290 156'
    ], a);
    // Inner collar line
    pp(g, [
      'M 252 158 C 258 155 266 154 270 154 C 274 154 282 155 288 158'
    ], a, lt);

    // Hood neckline — lying flat behind neck
    pp(g, [
      'M 232 168 C 240 162 252 158 270 156 C 288 158 300 162 308 168'
    ], a);
    // Hood draped behind shoulders — left
    pp(g, [
      'M 224 186 C 218 180 214 172 216 166 C 218 160 222 158 228 160 C 230 161 232 163 232 166'
    ], a);
    // Hood draped behind shoulders — right
    pp(g, [
      'M 316 186 C 322 180 326 172 324 166 C 322 160 318 158 312 160 C 310 161 308 163 308 166'
    ], a);
    // Hood back curve
    pp(g, [
      'M 224 186 C 234 192 248 196 262 198 C 270 199 278 198 286 196 C 298 192 310 188 316 186'
    ], a);
    // Hood fabric folds
    pp(g, [
      'M 228 168 C 232 172 236 178 238 184',
      'M 240 166 C 244 172 248 180 250 188',
      'M 290 166 C 286 172 282 180 280 188',
      'M 304 168 C 300 172 296 178 294 184'
    ], a, lt);

    // Drawstrings hanging down
    pp(g, [
      'M 258 190 C 257 196 256 204 254 212 C 253 216 252 220 252 224',
      'M 282 190 C 283 196 284 204 286 212 C 287 216 288 220 288 224'
    ], a);
    // Drawstring tips (small aglets)
    pp(g, [
      'M 251 224 C 250 226 250 228 252 230 C 254 230 256 228 255 226 C 254 224 252 224 251 224',
      'M 287 224 C 286 226 286 228 288 230 C 290 230 292 228 291 226 C 290 224 288 224 287 224'
    ], a, lt);
    // Center front seam/zipper
    pp(g, ['M 270 198 L 270 240'], a, lt);

    // ---- Wrinkle and fold details ----
    // Shoulder wrinkles — left
    pp(g, [
      'M 224 172 C 228 170 232 168 236 168',
      'M 222 178 C 226 174 230 172 234 172',
      'M 220 184 C 224 180 228 178 232 178'
    ], a, lt);
    // Shoulder wrinkles — right
    pp(g, [
      'M 316 172 C 312 170 308 168 304 168',
      'M 318 178 C 314 174 310 172 306 172',
      'M 320 184 C 316 180 312 178 308 178'
    ], a, lt);
    // Chest wrinkles — fabric bunching from lean
    pp(g, [
      'M 240 186 C 248 188 256 190 264 190',
      'M 276 190 C 284 188 292 186 300 186',
      'M 242 194 C 250 196 258 198 266 198',
      'M 274 198 C 282 196 290 194 298 194'
    ], a, lt);
    // Belly area wrinkles
    pp(g, [
      'M 238 206 C 246 210 256 212 266 212',
      'M 274 212 C 284 210 294 206 300 204',
      'M 236 218 C 244 222 254 224 264 224',
      'M 276 224 C 286 222 296 218 304 214'
    ], a, lt);

    // Left sleeve wrinkles
    pp(g, [
      'M 226 184 C 222 188 218 194 216 200',
      'M 230 190 C 226 196 222 204 220 210',
      'M 222 196 C 218 202 216 208 214 216',
      'M 228 198 C 224 204 220 212 218 220'
    ], a, lt);
    // Right sleeve wrinkles
    pp(g, [
      'M 314 184 C 318 188 322 194 324 200',
      'M 310 190 C 314 196 318 204 320 210',
      'M 316 196 C 320 202 324 208 326 216',
      'M 312 200 C 316 206 320 214 322 222'
    ], a, lt);

    // Hoodie front pocket — kangaroo pocket
    pp(g, [
      'M 238 218 C 244 222 254 226 264 228 C 270 229 276 228 282 226 C 290 224 298 220 302 218'
    ], a, lt);
    // Pocket opening
    pp(g, [
      'M 246 220 C 254 224 264 226 270 226 C 276 226 286 224 294 220'
    ], a, lt);
    // Pocket side stitching
    pp(g, [
      'M 240 218 C 238 222 238 228 240 234',
      'M 300 218 C 302 222 302 228 300 234'
    ], a, lt);

    // Ribbed cuff hint on left sleeve bottom
    pp(g, [
      'M 198 226 C 200 224 204 222 208 224',
      'M 196 230 C 200 228 204 226 208 228'
    ], a, lt);
    // Ribbed cuff on right sleeve bottom
    pp(g, [
      'M 326 232 C 328 230 330 228 332 230',
      'M 324 236 C 326 234 330 232 332 234'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands + action — left hand with food near mouth, right hand on cup
  // =====================================================================
  (g, a) => {
    // ---- LEFT HAND — bringing food to mouth ----
    // Palm/back of hand
    pp(g, [
      'M 214 152 C 210 148 204 146 200 148 C 196 150 194 154 194 158 C 194 162 196 164 200 166 C 204 168 208 166 212 162'
    ], a);
    // Wrist connection
    pp(g, [
      'M 214 152 C 218 148 222 144 226 142',
      'M 212 162 C 216 158 220 154 224 150'
    ], a);
    // Thumb — opposing, gripping food
    pp(g, [
      'M 214 150 C 218 146 220 140 218 136 C 216 132 212 130 208 132 C 204 134 204 138 206 142 C 208 146 210 150 212 152'
    ], a);
    // Thumb knuckle crease
    pp(g, ['M 210 140 C 212 138 214 138 216 140'], a, lt);
    // Thumbnail
    pp(g, [
      'M 208 132 C 210 130 214 130 216 132',
      'M 210 131 C 212 130 214 130 214 131'
    ], a, lt);

    // Index finger — extended toward mouth
    pp(g, [
      'M 200 148 C 198 142 194 134 192 128 C 190 124 190 120 192 118 C 194 116 198 118 200 122 C 202 126 202 132 200 140'
    ], a);
    // Index fingernail
    pp(g, [
      'M 191 118 C 192 116 194 115 196 116 C 198 117 198 118 196 120'
    ], a, lt);
    // Index finger knuckle creases
    pp(g, ['M 196 128 C 198 127 200 128 200 130'], a, lt);
    pp(g, ['M 198 136 C 200 135 202 136 202 138'], a, lt);

    // Middle finger — slightly curled
    pp(g, [
      'M 198 150 C 194 144 190 136 188 130 C 186 126 186 122 188 120 C 190 118 194 120 196 124 C 198 128 198 134 196 142'
    ], a);
    // Middle fingernail
    pp(g, [
      'M 187 120 C 188 118 190 117 192 118 C 194 119 194 120 192 122'
    ], a, lt);
    // Middle finger knuckle
    pp(g, ['M 192 130 C 194 129 196 130 196 132'], a, lt);

    // Ring finger — more curled
    pp(g, [
      'M 196 154 C 192 148 188 142 186 136 C 184 132 186 128 188 128 C 190 128 192 130 194 134 C 196 138 196 144 196 150'
    ], a);
    // Ring finger knuckle
    pp(g, ['M 190 136 C 192 135 194 136 194 138'], a, lt);

    // Pinky — shortest, most curled
    pp(g, [
      'M 196 158 C 192 154 190 150 190 146 C 190 142 190 140 192 140 C 194 140 196 142 196 146 C 196 150 196 154 196 158'
    ], a);
    // Pinky knuckle
    pp(g, ['M 192 146 C 194 145 196 146 196 148'], a, lt);

    // Food morsel in hand — small piece near fingers
    pp(g, [
      'M 190 116 C 186 112 186 106 190 104 C 194 102 200 104 202 108 C 204 112 200 118 196 118 C 192 118 190 116 190 116 Z'
    ], a);
    // Food texture details
    pp(g, [
      'M 192 108 C 194 106 196 106 198 108',
      'M 190 112 C 192 110 196 110 198 112'
    ], a, lt);

    // ---- RIGHT HAND — holding transparent cup ----
    // Cup outline
    pp(g, [
      'M 316 242 C 316 240 318 238 322 238 L 338 238 C 342 238 344 240 344 242 L 342 268 C 342 274 338 278 330 280 C 322 278 318 274 318 268 Z'
    ], a);
    // Cup rim — top ellipse
    pp(g, [
      'M 316 242 C 320 240 326 238 330 238 C 334 238 340 240 344 242',
      'M 318 242 C 322 244 328 246 330 246 C 332 246 338 244 342 242'
    ], a);
    // Liquid level inside cup
    pp(g, [
      'M 318 254 C 322 256 326 257 330 257 C 334 257 338 256 342 254'
    ], a, lt);
    // Liquid surface highlight
    pp(g, [
      'M 322 254 C 326 255 330 256 334 255'
    ], a, lt);

    // Right hand thumb on cup
    pp(g, [
      'M 316 250 C 312 248 310 250 308 254 C 306 258 308 262 310 264 C 312 266 316 266 316 264'
    ], a);
    // Thumb knuckle
    pp(g, ['M 310 256 C 312 254 314 254 314 256'], a, lt);

    // Right index finger wrapping cup
    pp(g, [
      'M 344 250 C 348 248 350 252 350 258 C 350 262 348 266 344 264'
    ], a);
    // Right middle finger
    pp(g, [
      'M 344 258 C 348 258 352 262 352 268 C 350 272 348 274 344 272'
    ], a);
    // Right ring finger
    pp(g, [
      'M 344 264 C 348 266 350 270 350 276 C 348 278 346 280 344 278'
    ], a);
    // Right pinky
    pp(g, [
      'M 344 270 C 346 272 348 276 346 280 C 344 282 342 280 342 276'
    ], a);
    // Right hand knuckle creases
    pp(g, [
      'M 346 254 C 348 253 350 254 350 256',
      'M 346 262 C 348 261 350 262 350 264',
      'M 346 268 C 348 267 350 268 350 270'
    ], a, lt);
    // Fingernails — right hand
    pp(g, [
      'M 348 250 C 350 249 352 250 352 252',
      'M 350 258 C 352 257 354 258 354 260',
      'M 350 266 C 352 265 352 266 352 268',
      'M 346 272 C 348 271 348 272 348 274'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — fridge, wall, chair, table objects, bottles, bowl
  // =====================================================================
  (g, a) => {
    // ---- WINE BOTTLE (Quinta do Cardo) — tall dark green ----
    // Bottle body
    pp(g, [
      'M 130 142 L 130 240',
      'M 152 142 L 152 240'
    ], a);
    // Bottle bottom
    pp(g, ['M 130 240 C 132 244 148 244 152 240'], a);
    // Bottle shoulder curve
    pp(g, [
      'M 130 142 C 130 136 132 130 136 126 C 137 124 138 123 139 122',
      'M 152 142 C 152 136 150 130 146 126 C 145 124 144 123 143 122'
    ], a);
    // Bottle neck
    pp(g, [
      'M 139 122 L 139 100',
      'M 143 122 L 143 100'
    ], a);
    // Neck lip rings
    pp(g, [
      'M 137 100 L 145 100',
      'M 137 98 L 145 98',
      'M 138 96 L 144 96'
    ], a);
    // Glass ball stopper — distinctive ornate sphere
    pp(g, [
      'M 141 96 C 141 94 140 92 140 90',
      'M 141 90 C 138 88 136 84 136 80 C 136 74 138 70 141 68 C 144 66 148 68 150 72 C 152 76 152 80 150 84 C 148 88 146 90 144 92',
      'M 141 96 C 142 94 143 92 144 92'
    ], a);
    // Stopper stem
    pp(g, ['M 140 96 L 140 90', 'M 142 96 L 142 90'], a);
    // Stopper glass sphere highlight curves
    pp(g, [
      'M 140 78 C 142 74 144 74 146 78',
      'M 138 82 C 140 80 144 80 146 82',
      'M 142 72 C 143 70 145 70 146 72'
    ], a, lt);
    // Wine label area — rectangle
    pp(g, ['M 132 168 L 150 168 L 150 218 L 132 218 Z'], a, lt);
    // Label inner border
    pp(g, ['M 133 170 L 149 170 L 149 216 L 133 216 Z'], a, lt);
    // Label horizontal lines
    pp(g, [
      'M 134 180 L 148 180',
      'M 134 186 L 148 186',
      'M 134 192 L 148 192'
    ], a, lt);
    // Pink/red band on label
    pp(g, ['M 132 194 L 150 194 L 150 212 L 132 212 Z'], a, lt);
    // Bottle body contour lines (glass reflection)
    pp(g, [
      'M 136 148 L 136 236',
      'M 146 148 L 146 236'
    ], a, lt);

    // ---- LEMON DRINK BOTTLE — shorter, brown ----
    // Body
    pp(g, [
      'M 92 170 L 92 240',
      'M 118 170 L 118 240'
    ], a);
    // Shoulder
    pp(g, [
      'M 92 170 C 92 164 94 158 98 154 C 100 152 102 150 104 150',
      'M 118 170 C 118 164 116 158 112 154 C 110 152 108 150 106 150'
    ], a);
    // Neck
    pp(g, [
      'M 100 150 L 100 140',
      'M 110 150 L 110 140'
    ], a);
    // Yellow screw cap
    pp(g, [
      'M 98 140 L 98 132 L 112 132 L 112 140 Z'
    ], a);
    // Cap ridges
    pp(g, [
      'M 100 134 L 100 140',
      'M 103 132 L 103 140',
      'M 106 132 L 106 140',
      'M 109 132 L 109 140'
    ], a, lt);
    // Label area
    pp(g, ['M 94 180 L 116 180 L 116 228 L 94 228 Z'], a, lt);
    // Lemon graphic on label
    pp(g, [
      'M 102 200 C 100 196 100 192 104 188 C 108 186 112 188 114 192 C 116 196 114 202 110 204 C 106 206 102 204 102 200 Z'
    ], a, lt);
    // Label text lines
    pp(g, [
      'M 96 186 L 114 186',
      'M 98 190 L 112 190',
      'M 96 210 L 114 210',
      'M 98 216 L 112 216'
    ], a, lt);
    // Bottle glass reflection
    pp(g, [
      'M 98 174 L 98 236',
      'M 112 174 L 112 236'
    ], a, lt);
    // 1.5L text hint on bottle
    pp(g, ['M 96 174 L 102 174'], a, lt);

    // ---- RED CAN — far left ----
    // Body cylinder
    pp(g, [
      'M 42 216 C 42 210 50 206 60 206 C 70 206 78 210 78 216 L 78 256 C 78 262 70 266 60 266 C 50 266 42 262 42 256 Z'
    ], a);
    // Can top ellipse
    pp(g, [
      'M 42 216 C 42 222 50 226 60 226 C 70 226 78 222 78 216'
    ], a);
    // Can pull tab
    pp(g, [
      'M 55 210 L 65 210 L 63 214 L 57 214 Z',
      'M 60 208 C 60 206 62 206 62 208'
    ], a, lt);
    // Can body vertical seam
    pp(g, ['M 60 216 L 60 256'], a, lt);
    // Can label area
    pp(g, [
      'M 44 228 L 76 228',
      'M 44 248 L 76 248'
    ], a, lt);

    // ---- EMPTY GLASS — far right ----
    pp(g, [
      'M 336 240 L 338 270 C 338 274 334 278 328 278 C 322 278 318 274 318 270 L 320 240'
    ], a, lt);
    // Glass rim
    pp(g, ['M 320 240 C 324 238 332 238 336 240'], a, lt);
    // Glass base
    pp(g, [
      'M 324 278 L 322 282 L 318 284 L 338 284 L 334 282 L 332 278'
    ], a, lt);
    // Glass stem
    pp(g, ['M 328 278 L 328 282'], a, lt);
    // Glass straw
    pp(g, ['M 332 236 L 336 274'], a, lt);

    // ---- BLUE SCISSORS on table ----
    pp(g, [
      'M 178 256 C 176 252 178 248 182 248 C 186 248 188 252 186 256',
      'M 186 256 C 188 260 186 264 182 266 C 178 266 176 262 178 258'
    ], a, lt);
    // Scissor blades
    pp(g, [
      'M 184 252 L 196 244',
      'M 180 262 L 196 270'
    ], a, lt);
    // Scissor handles
    pp(g, [
      'M 196 244 C 200 242 204 244 202 248 C 200 250 196 248 196 244',
      'M 196 270 C 200 272 204 270 202 266 C 200 264 196 266 196 270'
    ], a, lt);

    // ---- TABLE — tablecloth drape lines ----
    pp(g, ['M 0 240 L 360 240'], a);
    // Tablecloth wrinkle lines
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
    // Drape folds hanging down
    pp(g, [
      'M 40 258 C 42 270 44 282 44 296 C 44 310 42 324 40 336',
      'M 120 256 C 122 268 124 282 124 296 C 124 310 122 324 120 336',
      'M 200 258 C 202 270 204 282 204 296 C 204 310 202 324 200 336',
      'M 300 256 C 302 268 304 282 304 296 C 304 310 302 324 300 336'
    ], a, lt);
    // Drape cross folds
    pp(g, [
      'M 0 280 C 20 276 40 278 60 280 C 80 282 100 280 120 278 C 140 276 160 278 180 280 C 200 282 220 280 240 278 C 260 276 280 278 300 280 C 320 282 340 280 360 278'
    ], a, lt);

    // ---- BOWL on table ----
    // Bowl outer rim
    pp(g, [
      'M 228 275 C 228 264 248 254 270 254 C 292 254 312 264 312 275 C 312 286 292 296 270 296 C 248 296 228 286 228 275 Z'
    ], a);
    // Bowl inner rim
    pp(g, [
      'M 234 272 C 234 264 252 256 270 256 C 288 256 306 264 306 272'
    ], a);
    // Food mound in bowl
    pp(g, [
      'M 240 268 C 248 260 258 256 270 256 C 282 256 292 260 300 268',
      'M 244 266 C 252 260 262 258 270 258 C 278 258 288 260 296 266'
    ], a, lt);
    // Moon/star design on bowl
    pp(g, [
      'M 264 282 C 260 278 260 272 264 268 C 262 270 262 276 264 280',
      'M 264 268 C 268 266 272 268 274 272 C 276 276 274 280 270 282'
    ], a, lt);
    // Bowl base shadow line
    pp(g, ['M 240 290 C 250 294 262 296 270 296 C 278 296 290 294 300 290'], a, lt);

    // ---- BACKGROUND ----
    // Fridge — far left
    pp(g, [
      'M 0 18 L 48 18 L 48 212 L 0 212',
      'M 0 120 L 48 120'
    ], a, lt);
    // Fridge handle
    pp(g, ['M 42 55 L 42 105'], a, lt);
    // Fridge door edge
    pp(g, ['M 46 20 L 46 210'], a, lt);

    // Wall — beige background
    // Photo frames on wall
    pp(g, [
      'M 68 28 L 92 28 L 92 50 L 68 50 Z',
      'M 98 24 L 118 24 L 118 44 L 98 44 Z'
    ], a, lt);
    // Frame inner borders
    pp(g, [
      'M 70 30 L 90 30 L 90 48 L 70 48 Z',
      'M 100 26 L 116 26 L 116 42 L 100 42 Z'
    ], a, lt);

    // Chair back — dark gray office/gaming chair behind Miguel
    pp(g, [
      'M 210 24 C 212 22 330 22 332 24 L 334 220 C 334 222 332 224 330 224 L 212 224 C 210 224 208 222 208 220 Z'
    ], a, lt);
    // Chair headrest
    pp(g, [
      'M 218 24 C 220 18 270 16 272 16 C 274 16 322 18 324 24'
    ], a, lt);
    // Chair padding seam
    pp(g, [
      'M 210 80 L 332 80',
      'M 212 160 L 330 160'
    ], a, lt);
    // Chair side arms
    pp(g, [
      'M 210 140 C 206 142 204 146 204 152 C 204 158 206 162 210 164',
      'M 332 140 C 336 142 338 146 338 152 C 338 158 336 162 332 164'
    ], a, lt);

    // Tile floor lines at bottom
    pp(g, [
      'M 0 418 L 360 418',
      'M 0 438 L 360 438'
    ], a, lt);
    pp(g, [
      'M 60 418 L 60 450',
      'M 120 418 L 120 450',
      'M 180 418 L 180 450',
      'M 240 418 L 240 450',
      'M 300 418 L 300 450'
    ], a, lt);

    // Wasabi peanuts packet — far left on table
    pp(g, [
      'M 10 248 L 34 248 L 34 270 L 10 270 Z'
    ], a, lt);
    pp(g, [
      'M 12 252 L 32 252',
      'M 14 258 L 30 258',
      'M 12 264 L 32 264'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — skin with gradients, hair, hoodie, hands
  // =====================================================================
  (g, a, defs) => {
    // ---- SKIN BASE ----
    // Skin gradient — warm tones from forehead to chin
    const skinGrad = gd(defs, 'l', [
      [0, '#FADED0', 1],
      [0.3, '#F5D0A9', 1],
      [0.7, '#F0C8A0', 1],
      [1, '#E8B890', 1]
    ], { x1: 0.5, y1: 0, x2: 0.5, y2: 1 });

    // Face fill with gradient
    fl(g,
      'M 270 42 C 296 42 314 58 316 82 C 318 102 312 116 302 126 C 292 134 282 138 270 140 C 258 138 248 134 238 126 C 228 116 224 102 224 82 C 226 58 244 42 270 42 Z',
      skinGrad, a);

    // Neck skin fill
    fl(g,
      'M 258 136 L 254 155 L 286 155 L 282 136 Z',
      '#F0C8A0', false);

    // Left ear fill with subtle warmth
    const earGrad = gd(defs, 'r', [
      [0, '#F0B8A0', 0.8],
      [1, '#F5D0A9', 1]
    ], { cx: 0.5, cy: 0.5, r: 0.5 });
    fe(g, 'ellipse', { cx: 220, cy: 88, rx: 7, ry: 14, fill: earGrad }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 320, cy: 88, rx: 7, ry: 14, fill: earGrad }, false);

    // ---- CHEEK WARMTH (radial gradients) ----
    const cheekGradL = gd(defs, 'r', [
      [0, '#F5A88A', 0.5],
      [0.5, '#F5B89A', 0.25],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.5, r: 0.5 });
    fe(g, 'ellipse', { cx: 248, cy: 108, rx: 16, ry: 10, fill: cheekGradL }, false);
    const cheekGradR = gd(defs, 'r', [
      [0, '#F5A88A', 0.5],
      [0.5, '#F5B89A', 0.25],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.5, r: 0.5 });
    fe(g, 'ellipse', { cx: 294, cy: 108, rx: 16, ry: 10, fill: cheekGradR }, false);

    // ---- FOREHEAD HIGHLIGHT ----
    const foreheadHi = gd(defs, 'r', [
      [0, '#FFF5E8', 0.4],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.4, r: 0.5 });
    fe(g, 'ellipse', { cx: 270, cy: 60, rx: 20, ry: 12, fill: foreheadHi }, false);

    // ---- HAIR FILL ----
    // Hair gradient — roots darker, tips lighter
    const hairGrad = gd(defs, 'l', [
      [0, '#8C7040', 1],
      [0.3, '#A89050', 1],
      [0.6, '#C4A265', 1],
      [1, '#D4B872', 1]
    ], { x1: 0.5, y1: 0, x2: 0.5, y2: 1 });
    fl(g,
      'M 228 72 C 226 58 232 42 248 32 C 260 26 278 24 292 30 C 304 36 312 50 314 66 C 314 72 312 76 310 78 L 308 72 C 308 60 304 48 296 40 C 286 34 274 30 262 32 C 250 36 240 46 236 58 C 232 66 230 70 228 72 Z',
      hairGrad, a);

    // ---- HOODIE FILL ----
    // Hoodie gradient — brighter yellow at top, slightly warmer at bottom
    const hoodieGrad = gd(defs, 'l', [
      [0, '#FFE040', 1],
      [0.4, '#FFD740', 1],
      [1, '#F5C730', 1]
    ], { x1: 0.5, y1: 0, x2: 0.5, y2: 1 });
    fl(g,
      'M 218 178 C 228 162 248 154 270 153 C 292 154 312 162 322 178 L 328 240 L 212 240 Z',
      hoodieGrad, a);

    // Hood fill — slightly darker/warmer yellow
    const hoodGrad = gd(defs, 'l', [
      [0, '#F5C020', 1],
      [1, '#EABB18', 1]
    ], { x1: 0.5, y1: 0, x2: 0.5, y2: 1 });
    fl(g,
      'M 224 186 C 218 180 214 172 216 166 C 218 160 224 158 232 162 C 244 156 256 154 270 154 C 284 154 296 156 308 162 C 316 158 322 160 324 166 C 326 172 322 180 316 186 C 302 194 286 198 270 198 C 254 198 238 194 224 186 Z',
      hoodGrad, a);

    // Left arm sleeve fill
    fl(g,
      'M 226 178 C 218 188 210 200 204 212 C 198 224 196 232 200 236 C 206 240 214 232 222 218 C 230 204 238 190 242 182 Z',
      '#FFD740', false);
    // Right arm sleeve fill
    fl(g,
      'M 314 178 C 320 190 326 204 330 218 C 334 230 332 240 328 240 L 318 240 C 318 234 316 224 312 214 C 308 204 306 192 308 182 Z',
      '#FFD740', false);

    // Left hand skin
    fl(g,
      'M 214 152 C 210 148 204 146 200 148 C 194 152 194 158 200 166 C 206 168 212 162 214 152 Z',
      '#F5D0A9', false);
    // Right hand skin
    fl(g,
      'M 316 250 C 312 248 308 252 308 258 C 308 264 312 268 316 266 L 316 250 Z',
      '#F5D0A9', false);
    // Right fingers skin
    fl(g,
      'M 344 250 C 350 252 354 262 354 270 C 352 278 346 282 342 278 L 344 270 L 344 258 Z',
      '#F0C8A0', false);

    // ---- IRIS COLOR ----
    // Left iris — dark brown with subtle warm tones
    const irisGrad = gd(defs, 'r', [
      [0, '#1A0F05', 1],
      [0.4, '#3E2C1A', 1],
      [0.8, '#5D4037', 1],
      [1, '#4E342E', 1]
    ], { cx: 0.4, cy: 0.4, r: 0.5 });
    fe(g, 'circle', { cx: 262, cy: 81, r: 5, fill: irisGrad }, false);
    // Right iris
    fe(g, 'circle', { cx: 288, cy: 81, r: 5, fill: irisGrad }, false);
    // Eye whites
    fl(g,
      'M 250 80 C 252 74 258 70 264 70 C 268 70 272 74 274 80 C 272 86 268 88 264 88 C 258 88 252 86 250 80 Z',
      '#FAFAF5', false);
    fl(g,
      'M 278 80 C 280 74 284 70 290 70 C 294 70 298 74 300 80 C 298 86 294 88 290 88 C 284 88 280 86 278 80 Z',
      '#FAFAF5', false);
  },

  // =====================================================================
  // Layer 8: Color fills — table, objects, background
  // =====================================================================
  (g, a, defs) => {
    // ---- BACKGROUND WALL ----
    // Wall gradient — warm cream/beige
    const wallGrad = gd(defs, 'l', [
      [0, '#F5EFE0', 0.15],
      [1, '#EDE5D4', 0.12]
    ], { x1: 0, y1: 0, x2: 1, y2: 1 });
    fe(g, 'rect', { x: 48, y: 0, width: 162, height: 240, fill: wallGrad }, false);

    // ---- FRIDGE ----
    const fridgeGrad = gd(defs, 'l', [
      [0, '#607D8B', 0.2],
      [0.5, '#546E7A', 0.18],
      [1, '#4C6670', 0.22]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fe(g, 'rect', { x: 0, y: 18, width: 48, height: 194, rx: 2, fill: fridgeGrad }, false);
    // Fridge magnets
    fe(g, 'rect', { x: 8, y: 38, width: 10, height: 10, rx: 2, fill: '#F44336', opacity: '0.35' }, false);
    fe(g, 'rect', { x: 24, y: 48, width: 8, height: 10, rx: 2, fill: '#2196F3', opacity: '0.35' }, false);
    fe(g, 'rect', { x: 12, y: 64, width: 9, height: 8, rx: 2, fill: '#4CAF50', opacity: '0.35' }, false);
    fe(g, 'rect', { x: 6, y: 80, width: 8, height: 6, rx: 1, fill: '#FF9800', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 20, y: 72, width: 6, height: 8, rx: 1, fill: '#9C27B0', opacity: '0.25' }, false);

    // ---- CHAIR ----
    // Chair fill — dark gray with subtle gradient
    const chairGrad = gd(defs, 'l', [
      [0, '#455A64', 0.2],
      [0.5, '#37474F', 0.18],
      [1, '#263238', 0.22]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fe(g, 'rect', { x: 210, y: 24, width: 122, height: 198, rx: 8, fill: chairGrad }, false);

    // ---- RED TABLECLOTH ----
    // Main tablecloth gradient — rich red
    const clothGrad = gd(defs, 'l', [
      [0, '#C62828', 1],
      [0.3, '#D32F2F', 1],
      [0.6, '#C62828', 1],
      [1, '#B71C1C', 1]
    ], { x1: 0, y1: 0, x2: 0, y2: 1 });
    fe(g, 'rect', { x: 0, y: 240, width: 360, height: 210, fill: clothGrad }, a);

    // Tablecloth fold shadows
    fo(g,
      'M 58 244 C 62 252 66 260 70 268 L 74 268 C 70 260 66 252 62 244 Z',
      '#8B0000', 0.4, false);
    fo(g,
      'M 158 244 C 162 254 166 264 170 274 L 174 274 C 170 264 166 254 162 244 Z',
      '#8B0000', 0.4, false);
    fo(g,
      'M 238 244 C 242 252 246 260 250 268 L 254 268 C 250 260 246 252 242 244 Z',
      '#8B0000', 0.4, false);
    // Tablecloth fold highlights
    fo(g,
      'M 80 246 C 88 250 96 252 104 250 L 104 248 C 96 250 88 248 80 244 Z',
      '#EF5350', 0.3, false);
    fo(g,
      'M 180 246 C 188 250 196 252 204 250 L 204 248 C 196 250 188 248 180 244 Z',
      '#EF5350', 0.3, false);

    // ---- BOWL ----
    // Bowl gradient — ceramic gray
    const bowlGrad = gd(defs, 'l', [
      [0, '#9E9E9E', 1],
      [0.5, '#BDBDBD', 1],
      [1, '#8E8E8E', 1]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fl(g,
      'M 230 275 C 230 265 250 256 270 256 C 290 256 310 265 310 275 C 310 285 290 294 270 294 C 250 294 230 285 230 275 Z',
      bowlGrad, a);
    // Bowl inner — lighter
    fl(g,
      'M 236 272 C 236 264 254 258 270 258 C 286 258 304 264 304 272 C 304 278 286 282 270 282 C 254 282 236 278 236 272 Z',
      '#D0D0D0', false);
    // Food in bowl — warm beige/cream
    const foodGrad = gd(defs, 'r', [
      [0, '#F5DEB3', 1],
      [0.7, '#E8D0A0', 1],
      [1, '#D4BF90', 1]
    ], { cx: 0.5, cy: 0.3, r: 0.5 });
    fl(g,
      'M 242 268 C 250 262 260 258 270 258 C 280 258 290 262 298 268 C 294 274 282 278 270 278 C 258 278 246 274 242 268 Z',
      foodGrad, false);

    // ---- WINE BOTTLE — dark green ----
    const wineGrad = gd(defs, 'l', [
      [0, '#1B5E20', 1],
      [0.3, '#2E7D32', 1],
      [0.6, '#1B5E20', 1],
      [1, '#0D3B0E', 1]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fl(g,
      'M 131 142 L 131 239 L 151 239 L 151 142 C 151 136 149 130 145 126 L 137 126 C 133 130 131 136 131 142 Z',
      wineGrad, a);
    // Wine bottle neck
    fl(g,
      'M 139 126 L 139 100 L 143 100 L 143 126 Z',
      '#2E7D32', false);
    // Glass ball stopper
    const stopperGrad = gd(defs, 'r', [
      [0, '#F5F5F5', 0.5],
      [0.4, '#E0E0E0', 0.4],
      [1, '#BDBDBD', 0.3]
    ], { cx: 0.3, cy: 0.3, r: 0.6 });
    fe(g, 'circle', { cx: 143, cy: 80, r: 11, fill: stopperGrad }, false);
    // Wine label — pink/red accent
    fe(g, 'rect', { x: 133, y: 194, width: 16, height: 18, rx: 1, fill: '#E91E63', opacity: '0.55' }, false);
    // White label upper area
    fe(g, 'rect', { x: 133, y: 170, width: 16, height: 24, rx: 1, fill: '#FAFAFA', opacity: '0.3' }, false);

    // ---- LEMON BOTTLE — brown ----
    const lemonGrad = gd(defs, 'l', [
      [0, '#4E342E', 1],
      [0.3, '#5D4037', 1],
      [0.7, '#4E342E', 1],
      [1, '#3E2723', 1]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fl(g,
      'M 93 170 L 93 239 L 117 239 L 117 170 C 117 164 115 158 111 154 L 99 154 C 95 158 93 164 93 170 Z',
      lemonGrad, a);
    // Lemon bottle neck
    fl(g,
      'M 101 154 L 101 140 L 109 140 L 109 154 Z',
      '#6D4C41', false);
    // Yellow cap
    fe(g, 'rect', { x: 99, y: 132, width: 12, height: 9, rx: 2, fill: '#FDD835' }, false);
    // Lemon label area — yellow accent
    fe(g, 'rect', { x: 95, y: 196, width: 20, height: 22, rx: 1, fill: '#FDD835', opacity: '0.45' }, false);
    // Brown label area
    fe(g, 'rect', { x: 95, y: 182, width: 20, height: 14, rx: 1, fill: '#795548', opacity: '0.3' }, false);

    // ---- RED CAN ----
    const canGrad = gd(defs, 'l', [
      [0, '#B71C1C', 1],
      [0.3, '#D32F2F', 1],
      [0.6, '#E53935', 1],
      [1, '#C62828', 1]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fl(g,
      'M 44 218 C 44 212 52 208 60 208 C 68 208 76 212 76 218 L 76 254 C 76 260 68 264 60 264 C 52 264 44 260 44 254 Z',
      canGrad, a);
    // Can top
    fl(g,
      'M 44 218 C 44 224 52 228 60 228 C 68 228 76 224 76 218 C 76 212 68 208 60 208 C 52 208 44 212 44 218 Z',
      '#EF5350', false);

    // ---- TRANSPARENT CUP ----
    fo(g,
      'M 318 242 L 316 268 C 316 274 322 280 330 280 C 338 280 344 274 344 268 L 342 242 Z',
      '#E3F2FD', 0.25, false);
    // Liquid in cup — warm amber
    const liquidGrad = gd(defs, 'l', [
      [0, '#FFE082', 0.5],
      [1, '#FFCA28', 0.4]
    ], { x1: 0.5, y1: 0, x2: 0.5, y2: 1 });
    fl(g,
      'M 318 254 C 324 256 330 258 336 256 L 342 254 L 344 268 C 344 274 338 280 330 280 C 322 280 316 274 316 268 Z',
      liquidGrad, false);

    // ---- FOOD MORSEL in hand ----
    fl(g,
      'M 190 116 C 186 112 186 106 190 104 C 194 102 200 104 202 108 C 204 112 200 118 196 118 C 192 118 190 116 190 116 Z',
      '#F5DEB3', false);

    // ---- WASABI PEANUT PACKET ----
    fe(g, 'rect', { x: 10, y: 248, width: 24, height: 22, rx: 2, fill: '#1A237E', opacity: '0.3' }, false);

    // ---- TILE FLOOR ----
    fe(g, 'rect', { x: 0, y: 418, width: 360, height: 32, fill: '#D7CCC8', opacity: '0.1' }, false);

    // ---- SCISSORS ----
    fl(g,
      'M 178 256 C 176 252 178 248 182 248 C 186 248 188 252 186 256 C 188 260 186 264 182 266 C 178 266 176 262 178 258 Z',
      '#1565C0', false);
  },

  // =====================================================================
  // Layer 9: Polish — catchlights, highlights, shadows, refinements
  // =====================================================================
  (g, a, defs) => {
    // ---- EYE CATCHLIGHTS ----
    // Primary catchlight — left eye (bright white dot)
    fe(g, 'circle', { cx: 259, cy: 78, r: 1.8, fill: 'white' }, a);
    // Primary catchlight — right eye
    fe(g, 'circle', { cx: 285, cy: 78, r: 1.8, fill: 'white' }, a);
    // Secondary catchlight — left eye (smaller, lower)
    fe(g, 'circle', { cx: 264, cy: 83, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    // Secondary catchlight — right eye
    fe(g, 'circle', { cx: 290, cy: 83, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    // Tertiary micro-highlight — left
    fe(g, 'circle', { cx: 261, cy: 80, r: 0.4, fill: 'white', opacity: '0.5' }, false);
    // Tertiary micro-highlight — right
    fe(g, 'circle', { cx: 287, cy: 80, r: 0.4, fill: 'white', opacity: '0.5' }, false);

    // ---- EYE SOCKET SHADOWS ----
    // Left eye socket shadow
    const eyeShadowL = gd(defs, 'r', [
      [0, '#D4A880', 0.3],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.3, r: 0.5 });
    fe(g, 'ellipse', { cx: 262, cy: 76, rx: 14, ry: 8, fill: eyeShadowL }, false);
    // Right eye socket shadow
    const eyeShadowR = gd(defs, 'r', [
      [0, '#D4A880', 0.3],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.3, r: 0.5 });
    fe(g, 'ellipse', { cx: 288, cy: 76, rx: 14, ry: 8, fill: eyeShadowR }, false);

    // ---- NOSE SHADOWS AND HIGHLIGHTS ----
    // Nose bridge highlight
    hi(g,
      'M 268 72 C 269 76 270 82 270 88 C 270 92 270 96 270 100 L 272 100 C 272 96 272 92 272 88 C 272 82 271 76 270 72 Z',
      0.2, false);
    // Nose side shadow — left
    sh(g,
      'M 264 88 C 262 92 260 96 258 100 C 256 104 256 106 258 108 L 260 106 C 260 104 260 100 262 96 C 264 92 266 88 266 86 Z',
      0.15, false);
    // Nose side shadow — right
    sh(g,
      'M 276 88 C 278 92 280 96 282 100 C 284 104 284 106 282 108 L 280 106 C 280 104 280 100 278 96 C 276 92 274 88 274 86 Z',
      0.1, false);
    // Nose tip highlight
    const noseTipHi = gd(defs, 'r', [
      [0, '#FFFFFF', 0.25],
      [1, '#F5D0A9', 0]
    ], { cx: 0.5, cy: 0.4, r: 0.5 });
    fe(g, 'ellipse', { cx: 270, cy: 104, rx: 4, ry: 3, fill: noseTipHi }, false);

    // ---- MOUTH COLOR ----
    // Mouth interior — gums/tongue
    fl(g,
      'M 252 116 C 256 126 264 132 270 134 C 276 132 284 126 288 116 L 284 116 C 282 124 278 130 270 130 C 262 130 258 124 256 116 Z',
      '#E57373', false);
    // Tongue
    fl(g,
      'M 262 122 C 264 126 268 128 270 128 C 272 128 276 126 278 122 L 276 120 C 274 124 272 126 270 126 C 268 126 266 124 264 120 Z',
      '#EF9A9A', false);
    // Teeth fill — white
    fl(g,
      'M 256 116 L 284 116 C 280 120 276 122 270 122 C 264 122 260 120 256 116 Z',
      '#FAFAFA', false);
    // Upper lip color
    fo(g,
      'M 252 116 C 256 112 264 110 270 110 C 276 110 284 112 288 116 C 284 114 276 112 270 112 C 264 112 256 114 252 116 Z',
      '#D4736A', 0.6, false);
    // Lower lip highlight
    hi(g,
      'M 264 126 C 266 128 268 130 270 130 C 272 130 274 128 276 126 L 274 124 C 272 126 270 128 270 128 C 270 128 268 126 266 124 Z',
      0.15, false);

    // ---- CHIN SHADOW (under lower lip) ----
    sh(g,
      'M 258 134 C 262 136 266 138 270 138 C 274 138 278 136 282 134 L 280 132 C 276 134 274 136 270 136 C 266 136 264 134 260 132 Z',
      0.1, false);

    // ---- UNDER-CHIN / NECK SHADOW ----
    sh(g,
      'M 254 138 C 258 142 264 144 270 144 C 276 144 282 142 286 138 L 284 140 C 280 144 276 146 270 146 C 264 146 260 144 256 140 Z',
      0.2, false);

    // ---- HAIR HIGHLIGHTS ----
    // Hair shine streak — glossy band across crown
    const hairShine = gd(defs, 'l', [
      [0, '#F0E0C0', 0],
      [0.3, '#F5EAD0', 0.3],
      [0.5, '#FFF5E0', 0.4],
      [0.7, '#F5EAD0', 0.3],
      [1, '#F0E0C0', 0]
    ], { x1: 0, y1: 0, x2: 1, y2: 0 });
    fl(g,
      'M 238 50 C 248 44 264 42 278 44 C 290 46 300 50 306 56 L 304 58 C 298 52 288 48 278 46 C 264 44 250 46 240 52 Z',
      hairShine, false);
    // Secondary shine — lower
    fl(g,
      'M 234 60 C 244 54 260 52 276 54 C 288 56 298 60 306 64 L 304 66 C 296 62 286 58 276 56 C 260 54 246 56 236 62 Z',
      hairShine, false);

    // ---- HOODIE FABRIC SHADING ----
    // Shadow under arms/body lean
    sh(g,
      'M 220 190 C 224 200 228 210 230 220 C 232 228 232 234 232 240 L 228 240 C 228 234 228 226 226 218 C 224 210 220 200 218 190 Z',
      0.12, false);
    sh(g,
      'M 320 190 C 316 200 312 210 310 220 C 308 228 308 234 308 240 L 312 240 C 312 234 312 226 314 218 C 316 210 320 200 322 190 Z',
      0.12, false);
    // Hoodie center highlight
    hi(g,
      'M 264 190 C 266 200 268 212 268 224 C 268 232 268 236 268 240 L 272 240 C 272 236 272 232 272 224 C 272 212 274 200 276 190 Z',
      0.08, false);

    // ---- WINE BOTTLE LABEL TEXT ----
    const wt1 = ce('text', { x: 134, y: 184, fill: '#FAFAFA', 'font-size': '3.8', 'font-family': 'serif', 'letter-spacing': '0.4' });
    wt1.textContent = 'QUINTA';
    if (a) wt1.classList.add('active-element');
    g.appendChild(wt1);
    const wt2 = ce('text', { x: 138, y: 189, fill: '#FAFAFA', 'font-size': '3', 'font-family': 'serif', 'letter-spacing': '0.3' });
    wt2.textContent = 'DO';
    g.appendChild(wt2);
    const wt3 = ce('text', { x: 134, y: 194, fill: '#FAFAFA', 'font-size': '3.8', 'font-family': 'serif', 'letter-spacing': '0.4' });
    wt3.textContent = 'CARDO';
    g.appendChild(wt3);

    // ---- LEMON BOTTLE LABEL TEXT ----
    const lt3 = ce('text', { x: 97, y: 208, fill: '#3E2723', 'font-size': '4.5', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    lt3.textContent = 'Lemon';
    if (a) lt3.classList.add('active-element');
    g.appendChild(lt3);
    const lt4 = ce('text', { x: 95, y: 192, fill: '#5D4037', 'font-size': '2.8', 'font-family': 'sans-serif' });
    lt4.textContent = 'TINTO DE';
    g.appendChild(lt4);
    const lt5 = ce('text', { x: 96, y: 196, fill: '#5D4037', 'font-size': '2.8', 'font-family': 'sans-serif' });
    lt5.textContent = 'VERAO';
    g.appendChild(lt5);

    // ---- GLASS STOPPER SHINE ----
    fe(g, 'circle', { cx: 140, cy: 76, r: 3, fill: 'white', opacity: '0.5' }, a);
    fe(g, 'circle', { cx: 145, cy: 73, r: 1.5, fill: 'white', opacity: '0.35' }, false);
    fe(g, 'circle', { cx: 142, cy: 82, r: 1, fill: 'white', opacity: '0.25' }, false);

    // ---- CAN LABEL ----
    const ct = ce('text', { x: 50, y: 244, fill: '#FFCDD2', 'font-size': '4', 'font-family': 'sans-serif', 'font-weight': 'bold' });
    ct.textContent = 'SB';
    g.appendChild(ct);
    // Can highlight streak
    hi(g,
      'M 64 220 C 65 228 66 236 66 244 C 66 248 66 252 66 256 L 68 256 C 68 252 68 248 68 244 C 68 236 67 228 66 220 Z',
      0.2, false);

    // ---- CUP HIGHLIGHTS ----
    // Glass reflection line
    hi(g,
      'M 320 244 C 320 250 320 258 320 266 L 322 266 C 322 258 322 250 322 244 Z',
      0.3, false);
    // Cup rim highlight
    hi(g,
      'M 322 240 C 326 239 332 239 336 240 L 336 242 C 332 241 326 241 322 242 Z',
      0.2, false);

    // ---- BOWL RIM HIGHLIGHT ----
    hi(g,
      'M 238 270 C 248 264 260 260 270 258 C 280 260 292 264 302 270 L 300 272 C 290 266 280 262 270 260 C 260 262 250 266 240 272 Z',
      0.15, false);

    // ---- BACKGROUND DECORATION TEXT ----
    // "FAMILY" letters on shelf
    const ft = ce('text', { x: 62, y: 58, fill: a ? HL : LP, 'font-size': '6', 'font-family': 'sans-serif', 'letter-spacing': '2', opacity: '0.45' });
    ft.textContent = 'FAMILY';
    if (a) ft.classList.add('active-element');
    g.appendChild(ft);

    // ---- SUBTLE AMBIENT OCCLUSION ----
    // Under bowl shadow on tablecloth
    sh(g,
      'M 234 292 C 248 298 260 300 270 300 C 280 300 292 298 306 292 C 300 296 286 302 270 302 C 254 302 240 296 234 292 Z',
      0.15, false);
    // Under wine bottle shadow
    sh(g,
      'M 128 238 C 130 240 134 242 141 242 C 148 242 152 240 154 238 L 152 240 C 150 242 146 244 141 244 C 136 244 132 242 130 240 Z',
      0.12, false);
    // Under lemon bottle shadow
    sh(g,
      'M 90 238 C 92 240 96 242 105 242 C 114 242 118 240 120 238 L 118 240 C 116 242 112 244 105 244 C 98 244 94 242 92 240 Z',
      0.12, false);
    // Under can shadow
    sh(g,
      'M 40 262 C 46 266 54 268 60 268 C 66 268 74 266 80 262 L 78 264 C 72 268 66 270 60 270 C 54 270 48 268 42 264 Z',
      0.1, false);

    // ---- FOOD CRUMB near mouth ----
    fl(g,
      'M 194 110 C 192 106 194 102 198 102 C 202 102 204 106 202 110 C 200 114 196 114 194 110 Z',
      '#F5DEB3', false);

    // ---- NECK/COLLAR SHADOW ----
    sh(g,
      'M 252 154 C 256 152 264 150 270 150 C 276 150 284 152 288 154 L 286 156 C 282 154 276 152 270 152 C 264 152 258 154 254 156 Z',
      0.15, false);

    // ---- HOODIE DRAWSTRING SHADOWS ----
    sh(g,
      'M 254 192 C 253 200 252 210 252 220 L 254 220 C 254 210 255 200 256 192 Z',
      0.08, false);
    sh(g,
      'M 286 192 C 287 200 288 210 288 220 L 290 220 C 289 210 288 200 287 192 Z',
      0.08, false);

    // ---- WINE BOTTLE GLASS REFLECTION ----
    hi(g,
      'M 134 148 C 134 160 134 180 134 200 C 134 210 134 220 134 236 L 136 236 C 136 220 136 210 136 200 C 136 180 136 160 136 148 Z',
      0.12, false);

    // ---- LEMON BOTTLE GLASS REFLECTION ----
    hi(g,
      'M 96 174 C 96 186 96 200 96 214 C 96 222 96 230 96 238 L 98 238 C 98 230 98 222 98 214 C 98 200 98 186 98 174 Z',
      0.08, false);

    // ---- PHOTO FRAMES — tiny filled ----
    fe(g, 'rect', { x: 70, y: 30, width: 20, height: 18, rx: 1, fill: '#8D6E63', opacity: '0.15' }, false);
    fe(g, 'rect', { x: 100, y: 26, width: 16, height: 16, rx: 1, fill: '#8D6E63', opacity: '0.15' }, false);

    // ---- FLOOR TILE subtle color ----
    fo(g,
      'M 0 418 L 360 418 L 360 450 L 0 450 Z',
      '#BCAAA4', 0.06, false);
  }
];
