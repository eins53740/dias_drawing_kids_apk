const casamentoLayers = [
  // =================================================================
  // Layer 0: Composition guides — church floor, bench, zones, ceiling
  // =================================================================
  (g, a) => {
    // Church floor line
    pp(g, ['M 0 340 L 360 340'], a, lt);
    // Bench / seat line
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Groom zone vertical guides
    pp(g, ['M 60 30 L 60 340', 'M 200 30 L 200 340'], a, lt);
    // Bride zone vertical guides
    pp(g, ['M 160 30 L 160 340', 'M 310 30 L 310 340'], a, lt);
    // Groom head center cross
    pp(g, ['M 130 60 L 130 180', 'M 80 110 L 180 110'], a, lt);
    // Bride head center cross
    pp(g, ['M 228 60 L 228 180', 'M 178 110 L 278 110'], a, lt);
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
    // Body proportion guides
    pp(g, ['M 130 148 L 130 300', 'M 228 148 L 228 300'], a, lt);
    // Shoulder width guides
    pp(g, ['M 82 186 L 178 186', 'M 188 176 L 268 176'], a, lt);
    // Dress spread guide
    pp(g, ['M 140 260 L 130 430', 'M 316 260 L 306 430'], a, lt);
  },

  // =================================================================
  // Layer 1: Body outlines — bride and groom with wedding attire
  // =================================================================
  (g, a) => {
    // === GROOM (left-center, seated, slight 3/4 view facing left) ===
    // Head — angular male face, strong jaw, slightly turned
    pp(g, [
      'M 130 58 C 116 58 104 68 100 82 C 97 92 97 104 100 114 C 103 124 108 132 114 138 C 120 144 126 148 130 150 C 134 148 140 144 146 138 C 152 132 157 124 160 114 C 163 104 163 92 160 82 C 156 68 144 58 130 58 Z'
    ], a);
    // Neck — strong, slightly angled
    pp(g, [
      'M 120 148 C 118 152 116 158 116 164',
      'M 140 148 C 142 152 144 158 144 164'
    ], a);
    // Left shoulder sloping down
    pp(g, [
      'M 116 164 C 108 168 96 174 86 182 C 80 188 76 194 74 200'
    ], a);
    // Right shoulder
    pp(g, [
      'M 144 164 C 152 168 164 174 174 182 C 180 188 184 194 186 200'
    ], a);
    // Torso — seated, suit jacket, broad chest
    pp(g, [
      'M 74 200 C 72 216 72 232 74 248 C 76 264 78 280 80 296 L 80 310',
      'M 186 200 C 188 216 188 232 186 248 C 184 264 182 280 180 296 L 180 310'
    ], a);
    // Left arm resting on thigh — slightly bent
    pp(g, [
      'M 74 200 C 68 212 64 228 62 244 C 60 258 58 272 58 284 C 58 292 60 298 64 302',
      'M 86 200 C 80 212 76 226 74 240 C 72 254 72 268 72 280 C 72 288 74 294 76 298'
    ], a);
    // Right arm — reaching toward bride
    pp(g, [
      'M 186 200 C 190 212 194 228 196 244 C 198 256 200 268 200 278',
      'M 176 200 C 180 210 184 224 188 240 C 190 252 192 264 194 274'
    ], a);

    // === BRIDE (right of groom, seated, facing slightly toward camera) ===
    // Head — softer oval, feminine, slightly tilted
    pp(g, [
      'M 228 62 C 214 62 204 72 200 84 C 197 94 197 106 200 116 C 203 126 208 134 214 140 C 220 146 224 148 228 150 C 232 148 236 146 242 140 C 248 134 253 126 256 116 C 259 106 259 94 256 84 C 252 72 242 62 228 62 Z'
    ], a);
    // Neck — slim, graceful
    pp(g, [
      'M 220 148 C 218 152 216 158 216 164',
      'M 236 148 C 238 152 240 158 240 164'
    ], a);
    // Bare shoulders — strapless dress, visible skin
    pp(g, [
      'M 216 164 C 210 166 200 170 192 176 C 188 180 186 184 186 188',
      'M 240 164 C 246 166 256 170 264 176 C 268 180 270 184 270 188'
    ], a);
    // Bodice — fitted strapless, sweetheart neckline
    pp(g, [
      'M 186 188 C 186 196 186 208 188 220 C 190 232 194 244 200 254 C 206 262 214 268 220 270 C 226 268 234 262 240 254 C 246 244 250 232 252 220 C 254 208 254 196 254 188'
    ], a);
    // Bodice top — sweetheart neckline curve
    pp(g, [
      'M 186 188 C 192 184 200 180 210 180 C 216 180 220 184 224 188 C 228 184 232 180 238 180 C 248 180 256 184 262 188'
    ], a);
    // Voluminous tulle ball-gown skirt — enormous spread
    pp(g, [
      'M 200 254 C 192 264 178 280 164 298 C 152 314 142 334 136 358 C 132 378 130 398 132 420 C 134 434 136 442 138 448',
      'M 240 254 C 248 264 262 280 276 298 C 288 314 298 334 304 358 C 308 378 310 398 308 420 C 306 434 304 442 302 448',
      'M 138 448 L 302 448'
    ], a);
    // Skirt fold lines — gentle curves across tulle layers
    pp(g, [
      'M 174 286 C 188 276 208 270 224 270 C 240 270 256 276 268 286',
      'M 158 316 C 176 304 200 296 224 296 C 248 296 268 304 282 316',
      'M 148 350 C 168 336 196 326 224 326 C 252 326 276 336 292 350',
      'M 140 386 C 162 370 194 358 224 358 C 254 358 282 370 300 386',
      'M 136 418 C 160 404 192 394 224 394 C 256 394 284 404 304 418'
    ], a, lt);
    // Skirt gathers radiating from waist
    pp(g, [
      'M 210 262 C 196 290 178 330 166 380 C 158 412 154 438 152 448',
      'M 236 262 C 250 290 264 330 274 380 C 280 412 284 438 286 448',
      'M 218 268 C 210 300 198 346 190 398 C 186 426 184 444 184 448',
      'M 230 268 C 236 300 244 346 250 398 C 254 426 256 444 256 448'
    ], a, lt);
  },

  // =================================================================
  // Layer 2: Face details — highly detailed eyes, brows, noses, mouths
  // =================================================================
  (g, a) => {
    // === GROOM FACE (slightly turned, looking left-forward) ===
    // Left eye — almond shape, composed gaze, deeper set
    pp(g, [
      'M 114 92 C 116 88 119 86 123 85 C 127 85 130 87 132 90 C 134 93 133 96 130 98 C 127 100 122 100 118 98 C 115 96 114 94 114 92 Z'
    ], a);
    // Left eye upper lid crease
    pp(g, ['M 112 88 C 116 84 121 82 126 82 C 131 83 134 85 136 88'], a, lt);
    // Left eye lower lid subtle line
    pp(g, ['M 116 98 C 120 100 124 101 128 100 C 130 99 132 97 132 96'], a, lt);
    // Right eye — slightly further away (3/4 view)
    pp(g, [
      'M 136 90 C 137 87 140 85 143 84 C 147 84 150 86 152 89 C 153 92 152 95 149 97 C 146 99 141 99 138 97 C 136 95 135 93 136 90 Z'
    ], a);
    // Right eye upper lid crease
    pp(g, ['M 134 86 C 138 82 143 80 147 81 C 151 82 154 84 156 87'], a, lt);
    // Right eye lower lid
    pp(g, ['M 138 97 C 142 99 146 99 149 98 C 151 97 152 95 152 93'], a, lt);
    // Groom left pupil + iris detail
    fe(g, 'circle', { cx: 124, cy: 92, r: 3.2, fill: a ? HL : '#2D2D2D' }, a);
    fe(g, 'circle', { cx: 124, cy: 92, r: 1.8, fill: a ? HL : '#1A1A1A' }, a);
    // Groom right pupil + iris detail
    fe(g, 'circle', { cx: 144, cy: 91, r: 3.0, fill: a ? HL : '#2D2D2D' }, a);
    fe(g, 'circle', { cx: 144, cy: 91, r: 1.6, fill: a ? HL : '#1A1A1A' }, a);
    // Left eyebrow — thick, straight, strong male brow
    pp(g, [
      'M 110 84 C 114 79 119 76 125 76 C 131 77 135 79 138 82',
      'M 110 86 C 114 81 119 78 125 78 C 131 79 135 81 138 84'
    ], a);
    // Right eyebrow
    pp(g, [
      'M 134 82 C 138 77 143 75 148 75 C 153 76 157 78 160 81',
      'M 134 84 C 138 79 143 77 148 77 C 153 78 157 80 160 83'
    ], a);
    // Nose — strong bridge, slightly aquiline, defined tip
    pp(g, [
      'M 131 84 C 130 90 129 96 128 102 C 127 106 126 110 126 114',
      'M 124 116 C 125 118 127 120 130 121 C 133 122 136 121 138 119 C 140 117 141 114 141 112'
    ], a);
    // Nostril hints
    pp(g, ['M 126 118 C 124 116 123 114 124 112', 'M 136 118 C 138 116 139 114 138 112'], a, lt);
    // Nose bridge shadow line
    pp(g, ['M 132 86 C 132 92 131 98 130 104'], a, lt);
    // Mouth — composed, lips lightly closed, slight set to jaw
    pp(g, [
      'M 118 130 C 122 126 126 124 130 124 C 134 124 138 126 142 130'
    ], a);
    // Upper lip detail — thin
    pp(g, [
      'M 118 130 C 122 128 126 127 129 128 C 130 129 131 129 132 128 C 134 127 138 128 142 130'
    ], a);
    // Lower lip — fuller
    pp(g, ['M 120 132 C 124 136 128 138 131 138 C 134 138 138 136 142 132'], a);
    // Chin dimple hint
    pp(g, ['M 128 142 C 130 144 132 144 134 142'], a, lt);
    // Left ear — visible, well-defined
    pp(g, [
      'M 100 86 C 97 82 94 84 93 90 C 92 96 93 102 95 108 C 97 112 100 114 102 112',
      'M 96 90 C 95 94 95 100 96 106'
    ], a);
    // Right ear (partially hidden)
    pp(g, ['M 162 88 C 164 84 166 86 166 92 C 166 98 165 104 163 108'], a, lt);
    // Jaw line — strong angular
    pp(g, [
      'M 100 108 C 104 118 110 128 116 136 C 120 140 124 144 130 148',
      'M 162 106 C 158 116 154 126 148 134 C 144 138 138 142 132 146'
    ], a);
    // Nasolabial folds
    pp(g, ['M 124 114 C 122 120 120 126 118 130', 'M 140 112 C 142 118 143 124 144 128'], a, lt);
    // Forehead wrinkle hints
    pp(g, ['M 116 74 C 122 72 130 72 138 72 C 146 72 152 73 156 74'], a, lt);
    pp(g, ['M 118 70 C 124 68 132 68 140 68 C 148 68 154 69 158 70'], a, lt);

    // === BRIDE FACE (facing slightly toward camera, gentle smile) ===
    // Left eye — larger, rounder, expressive, emotional
    pp(g, [
      'M 214 94 C 216 90 219 88 223 87 C 227 87 230 89 232 92 C 234 95 233 98 230 100 C 227 102 222 102 218 100 C 215 98 214 96 214 94 Z'
    ], a);
    // Left eye upper lid crease — more arched
    pp(g, ['M 212 90 C 216 85 221 83 226 83 C 231 84 234 86 236 90'], a, lt);
    // Left eye lower lid with subtle curve
    pp(g, ['M 216 100 C 220 102 224 103 228 102 C 231 101 233 99 234 96'], a, lt);
    // Right eye
    pp(g, [
      'M 236 93 C 237 89 240 87 244 86 C 248 86 251 88 253 91 C 254 94 253 97 250 99 C 247 101 242 101 239 99 C 237 97 236 95 236 93 Z'
    ], a);
    // Right eye upper lid crease
    pp(g, ['M 234 89 C 238 84 243 82 248 82 C 253 83 256 85 258 89'], a, lt);
    // Right eye lower lid
    pp(g, ['M 239 99 C 243 101 247 101 250 100 C 252 99 254 97 254 94'], a, lt);
    // Bride left pupil + iris
    fe(g, 'circle', { cx: 224, cy: 94, r: 3.2, fill: a ? HL : '#2D2D2D' }, a);
    fe(g, 'circle', { cx: 224, cy: 94, r: 1.8, fill: a ? HL : '#1A1A1A' }, a);
    // Bride right pupil + iris
    fe(g, 'circle', { cx: 245, cy: 93, r: 3.0, fill: a ? HL : '#2D2D2D' }, a);
    fe(g, 'circle', { cx: 245, cy: 93, r: 1.6, fill: a ? HL : '#1A1A1A' }, a);
    // Upper eyelashes — delicate, feminine
    pp(g, [
      'M 214 93 C 212 90 211 87 212 85',
      'M 218 91 C 217 88 217 85 218 83',
      'M 222 90 C 222 87 223 84 224 82',
      'M 254 92 C 256 89 257 86 256 84',
      'M 250 90 C 251 87 251 84 250 82',
      'M 246 89 C 246 86 245 83 244 81'
    ], a);
    // Lower lashes — very subtle
    pp(g, [
      'M 220 101 C 219 103 218 104 218 105',
      'M 226 102 C 226 104 226 105 226 106',
      'M 244 101 C 244 103 244 104 244 105',
      'M 248 100 C 249 102 250 103 250 104'
    ], a, lt);
    // Left eyebrow — arched, elegant, thinner
    pp(g, [
      'M 210 86 C 214 80 220 77 226 78 C 232 79 236 82 238 85',
      'M 210 88 C 214 82 220 79 226 80 C 232 81 236 84 238 87'
    ], a);
    // Right eyebrow
    pp(g, [
      'M 234 84 C 238 78 244 75 250 76 C 256 77 260 80 262 84',
      'M 234 86 C 238 80 244 77 250 78 C 256 79 260 82 262 86'
    ], a);
    // Nose — delicate, slightly upturned
    pp(g, [
      'M 230 86 C 229 92 228 98 227 104 C 226 108 225 112 225 116',
      'M 222 118 C 224 120 226 122 229 123 C 232 124 235 123 237 121 C 239 119 240 116 240 114'
    ], a);
    // Nostril hints — small, delicate
    pp(g, ['M 224 118 C 222 116 221 114 222 112', 'M 234 118 C 236 116 237 114 236 112'], a, lt);
    // Mouth — emotional soft smile, lips slightly parted
    pp(g, [
      'M 216 132 C 220 128 224 126 228 126 C 232 126 236 128 240 132'
    ], a);
    // Upper lip — cupid's bow
    pp(g, [
      'M 216 132 C 220 130 224 129 227 130 C 228 131 229 131 230 130 C 232 129 236 130 240 132'
    ], a);
    // Lower lip — full, soft
    pp(g, [
      'M 218 134 C 222 138 226 140 229 140 C 232 140 236 138 240 134'
    ], a);
    // Smile crinkle at eyes — crow's feet hint
    pp(g, ['M 212 94 C 210 96 208 98 207 100', 'M 255 93 C 257 95 259 97 260 99'], a, lt);
    // Chin — rounded, feminine
    pp(g, ['M 226 144 C 228 146 230 146 232 144'], a, lt);
    // Jaw line — softer, oval
    pp(g, [
      'M 200 110 C 204 120 208 130 214 138 C 218 142 222 146 228 150',
      'M 258 108 C 254 118 250 128 244 136 C 240 140 236 144 232 148'
    ], a);
    // Cheekbone highlights
    pp(g, ['M 210 108 C 214 106 218 106 222 108', 'M 240 106 C 244 104 248 104 252 106'], a, lt);
    // Nasolabial folds — softer
    pp(g, ['M 224 114 C 222 120 220 126 218 132', 'M 238 114 C 240 120 241 126 242 130'], a, lt);
    // Dimples — subtle smile indentations
    pp(g, ['M 216 134 C 214 132 213 130 214 128', 'M 242 132 C 244 130 245 128 244 126'], a, lt);
  },

  // =================================================================
  // Layer 3: Hair — bride's curly hair, groom's styled hair
  // =================================================================
  (g, a) => {
    // === GROOM HAIR — short, styled, slightly swept ===
    // Main hairline contour
    pp(g, [
      'M 102 96 C 100 82 104 68 112 60 C 118 54 126 50 134 50 C 142 50 150 54 156 62 C 162 70 164 82 162 96'
    ], a);
    // Hair top mass — volume and shape
    pp(g, [
      'M 108 68 C 114 56 124 48 136 48 C 148 50 156 58 160 70',
      'M 106 78 C 110 64 120 52 134 50 C 146 52 154 62 158 76'
    ], a);
    // Side texture — combed direction lines
    pp(g, [
      'M 104 80 C 108 72 116 64 126 60 C 136 58 146 62 154 70',
      'M 106 90 C 110 82 118 72 128 68 C 138 66 148 70 156 80',
      'M 102 96 C 106 88 112 80 122 74 C 132 72 142 74 152 82'
    ], a, lt);
    // Left sideburn
    pp(g, [
      'M 100 86 C 98 80 100 72 106 66',
      'M 100 92 C 96 86 96 78 100 72'
    ], a);
    // Right sideburn
    pp(g, [
      'M 160 86 C 162 80 160 72 156 66',
      'M 162 92 C 166 86 166 78 162 72'
    ], a);
    // Temple area detail
    pp(g, ['M 104 76 C 102 80 100 86 100 92', 'M 160 76 C 162 80 164 86 164 92'], a, lt);
    // Hair parting — subtle
    pp(g, ['M 122 52 C 126 50 132 50 138 52'], a, lt);

    // === GROOM TIE AND COLLAR ===
    // Shirt collar left flap
    pp(g, [
      'M 118 166 C 114 162 108 158 104 160 C 100 162 100 168 104 172 C 108 174 114 174 118 172'
    ], a);
    // Shirt collar right flap
    pp(g, [
      'M 142 166 C 146 162 152 158 156 160 C 160 162 160 168 156 172 C 152 174 146 174 142 172'
    ], a);
    // Tie knot — triangular with depth
    pp(g, [
      'M 126 168 L 130 160 L 134 168 Z',
      'M 127 168 L 130 162 L 133 168'
    ], a);
    // Tie body — long, hanging
    pp(g, [
      'M 126 168 L 124 212 L 130 220 L 136 212 L 134 168'
    ], a);
    // Tie texture — diagonal stripe pattern
    pp(g, [
      'M 127 176 L 133 180', 'M 126 184 L 132 188',
      'M 125 192 L 131 196', 'M 125 200 L 131 204',
      'M 125 208 L 130 212'
    ], a, lt);

    // === BRIDE HAIR — curly dark hair, parted, flowing down ===
    // Main hair mass — top volume
    pp(g, [
      'M 200 90 C 198 76 202 62 210 54 C 216 48 224 44 232 44 C 240 44 248 48 254 56 C 260 64 262 76 262 90'
    ], a);
    // Hair top — volume and lift
    pp(g, [
      'M 204 66 C 210 52 222 44 234 44 C 244 46 252 54 258 66',
      'M 202 78 C 206 64 216 52 228 50 C 240 52 250 62 256 76'
    ], a);
    // Curly wave texture — right side flowing down
    pp(g, [
      'M 258 84 C 262 90 264 98 266 106 C 268 114 268 122 266 130 C 264 136 260 140 256 142',
      'M 262 90 C 268 96 272 106 274 116 C 276 126 274 136 270 144 C 266 150 260 154 256 152',
      'M 264 100 C 270 108 276 118 278 130 C 280 140 278 150 274 158 C 270 164 264 166 260 162'
    ], a);
    // Curly wave texture — left side flowing down
    pp(g, [
      'M 198 84 C 194 90 192 98 190 108 C 188 118 190 126 192 132 C 194 136 196 138 198 136',
      'M 196 92 C 190 100 188 110 186 122 C 184 132 186 140 190 146 C 194 150 198 148 200 144'
    ], a);
    // Individual curl strands — right side
    pp(g, [
      'M 254 96 C 258 100 260 106 258 112 C 256 116 254 114 254 108',
      'M 260 108 C 264 114 266 122 264 128 C 262 132 260 130 260 124',
      'M 264 120 C 268 126 270 134 268 140 C 266 146 264 144 264 136',
      'M 268 132 C 272 140 274 148 272 154 C 270 158 268 156 268 148'
    ], a, lt);
    // Individual curl strands — left side
    pp(g, [
      'M 196 100 C 192 106 190 114 192 120 C 194 124 196 122 196 116',
      'M 192 114 C 188 120 186 128 188 134 C 190 138 192 136 192 130',
      'M 190 128 C 186 134 184 142 186 148 C 188 152 190 150 190 144'
    ], a, lt);
    // Hair parting
    pp(g, ['M 218 48 C 224 44 230 44 236 48'], a, lt);
    // Forehead hairline detail
    pp(g, [
      'M 204 78 C 210 68 218 60 228 58 C 238 60 246 68 252 78'
    ], a, lt);
    // Hair accessory / decorative element at right side
    pp(g, [
      'M 262 74 C 266 70 270 70 274 74 C 276 78 274 82 270 84 C 266 86 262 84 260 80 C 260 76 262 74 262 74 Z'
    ], a);
    // Small accent feathers/pins
    pp(g, [
      'M 268 68 C 272 62 276 58 278 56',
      'M 270 66 C 274 60 280 56 284 54',
      'M 272 70 C 278 64 282 60 286 58'
    ], a, lt);
  },

  // =================================================================
  // Layer 4: Wedding clothing — dress details, suit, accessories
  // =================================================================
  (g, a) => {
    // === GROOM SUIT JACKET ===
    // Jacket lapels — V-shape from collar
    pp(g, [
      'M 114 172 C 116 178 118 186 120 196 C 122 206 124 216 126 228',
      'M 146 172 C 144 178 142 186 140 196 C 138 206 136 216 134 228'
    ], a);
    // Lapel outer edges — rolled
    pp(g, [
      'M 104 172 C 106 176 110 182 116 190 C 120 196 122 202 124 208',
      'M 156 172 C 154 176 150 182 144 190 C 140 196 138 202 136 208'
    ], a);
    // Lapel fold lines (inner)
    pp(g, [
      'M 108 174 C 112 180 116 188 120 198',
      'M 152 174 C 148 180 144 188 140 198'
    ], a, lt);
    // Shirt front visible between lapels
    pp(g, ['M 126 168 L 126 228', 'M 134 168 L 134 228'], a, lt);
    // Shirt button placket
    pp(g, ['M 130 170 L 130 228'], a, lt);
    // Suit buttons
    fe(g, 'circle', { cx: 130, cy: 210, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 130, cy: 228, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Button detail — holes
    fe(g, 'circle', { cx: 130, cy: 210, r: 1.0, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1 : 0.5 }, a);
    fe(g, 'circle', { cx: 130, cy: 228, r: 1.0, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1 : 0.5 }, a);
    // Pocket square (left breast)
    pp(g, [
      'M 108 196 C 110 192 114 190 116 192 C 118 194 118 198 116 200 L 108 200 Z',
      'M 110 194 C 112 190 116 190 116 194'
    ], a);
    // Jacket shoulder seams
    pp(g, [
      'M 86 186 C 96 178 108 170 118 166',
      'M 174 186 C 164 178 152 170 142 166'
    ], a, lt);
    // Jacket side seam lines
    pp(g, ['M 76 200 L 80 310', 'M 184 200 L 180 310'], a, lt);
    // Jacket vent at back (visible at seat)
    pp(g, ['M 120 280 L 120 310', 'M 140 280 L 140 310'], a, lt);
    // Sleeve cuff lines
    pp(g, [
      'M 60 278 C 62 280 66 282 70 282',
      'M 196 270 C 198 272 200 274 202 274'
    ], a, lt);
    // Trouser leg visible below jacket
    pp(g, [
      'M 86 296 L 86 340 C 86 344 88 346 92 346 L 106 346 C 110 346 112 344 112 340 L 112 296',
      'M 148 296 L 148 340 C 148 344 150 346 154 346 L 168 346 C 172 346 174 344 174 340 L 174 296'
    ], a);
    // Trouser crease lines
    pp(g, ['M 100 296 L 100 344', 'M 160 296 L 160 344'], a, lt);
    // Shoe hints at bottom
    pp(g, [
      'M 86 342 C 84 346 86 350 92 352 L 112 352 C 116 350 116 346 112 342',
      'M 148 342 C 146 346 148 350 154 352 L 174 352 C 178 350 178 346 174 342'
    ], a);

    // === BRIDE BODICE DETAILS ===
    // Strapless top edge — sweetheart neckline with detailed curve
    pp(g, [
      'M 188 188 C 194 184 200 180 206 178 C 210 176 214 176 218 178 C 222 180 226 184 228 188',
      'M 228 188 C 230 184 234 180 238 178 C 242 176 246 176 250 178 C 256 180 262 184 268 188'
    ], a);
    // Lace detailing on bodice edge
    pp(g, [
      'M 192 186 C 194 184 196 182 198 184 C 200 186 202 184 204 182 C 206 184 208 186 210 184',
      'M 248 184 C 250 186 252 184 254 182 C 256 184 258 186 260 184 C 262 182 264 184 266 186'
    ], a, lt);
    // Bodice boning lines — 6 vertical structural seams
    pp(g, [
      'M 196 186 L 194 248',
      'M 206 182 L 204 256',
      'M 218 180 L 216 264',
      'M 236 180 L 238 264',
      'M 248 182 L 250 256',
      'M 258 186 L 260 248'
    ], a, lt);
    // Bodice lace overlay pattern — delicate swirl hints
    pp(g, [
      'M 200 192 C 204 190 208 192 206 196 C 204 200 200 198 200 194',
      'M 212 188 C 216 186 220 188 218 192 C 216 196 212 194 212 190',
      'M 234 188 C 238 186 242 188 240 192 C 238 196 234 194 234 190',
      'M 246 192 C 250 190 254 192 252 196 C 250 200 246 198 246 194'
    ], a, lt);
    // Waist sash / ribbon
    pp(g, [
      'M 192 248 C 200 252 210 256 220 258 C 230 256 240 252 248 248',
      'M 194 252 C 202 256 212 260 222 262 C 232 260 242 256 250 252'
    ], a);
    // Sash knot/bow at center
    pp(g, [
      'M 218 258 C 220 262 224 264 226 262 C 228 260 226 256 222 258',
      'M 222 258 C 220 260 216 262 214 260 C 212 258 216 256 222 258',
      'M 220 262 C 220 266 222 270 224 268 C 226 266 224 262 222 262'
    ], a);
    // Tulle layer transitions — scalloped edges where bodice meets skirt
    pp(g, [
      'M 198 256 C 202 260 206 262 210 260 C 212 258 212 256 212 256',
      'M 232 256 C 236 260 240 262 244 260 C 246 258 246 256 246 256',
      'M 210 260 C 214 264 218 266 222 264 C 226 262 226 260 226 260'
    ], a, lt);
  },

  // =================================================================
  // Layer 5: Hands, bench, elderly lady, stone floor elements
  // =================================================================
  (g, a) => {
    // === GROOM LEFT HAND — resting on thigh ===
    // Palm and fingers
    pp(g, [
      'M 64 282 C 62 278 58 274 56 270 C 54 266 54 262 56 260 C 58 258 62 258 64 262 C 66 266 66 270 66 274'
    ], a);
    pp(g, [
      'M 62 280 C 58 276 54 270 52 266 C 50 262 50 258 52 256 C 54 254 58 254 60 258 C 62 262 62 268 62 274'
    ], a);
    pp(g, [
      'M 60 278 C 56 274 52 268 50 264 C 48 260 48 256 50 254 C 52 252 56 254 58 258 C 60 262 60 268 60 272'
    ], a);
    pp(g, [
      'M 58 276 C 54 272 50 266 48 262 C 46 258 48 254 50 252 C 52 250 56 252 56 256'
    ], a);
    // Thumb
    pp(g, [
      'M 68 276 C 72 272 76 266 76 260 C 76 256 74 254 70 256 C 66 258 64 264 64 270'
    ], a);
    // Wrist definition
    pp(g, ['M 58 286 C 60 290 64 294 68 296', 'M 72 282 C 74 286 76 290 78 294'], a, lt);
    // Knuckle creases
    pp(g, ['M 54 268 C 58 266 62 266 64 268', 'M 52 262 C 56 260 60 260 62 262'], a, lt);

    // === GROOM RIGHT HAND — over bride's hands ===
    pp(g, [
      'M 196 268 C 200 264 204 260 208 258 C 212 256 216 258 216 262 C 216 266 212 270 208 274',
      'M 198 274 C 202 270 206 266 210 264 C 214 262 218 264 218 268 C 218 272 214 276 210 280',
      'M 200 278 C 204 274 208 270 212 268 C 216 266 220 268 220 272 C 220 276 216 280 212 284'
    ], a);
    // Thumb curling over
    pp(g, [
      'M 194 266 C 196 262 200 256 202 252 C 204 248 202 244 198 246 C 194 248 192 254 194 260'
    ], a);
    // Wrist
    pp(g, ['M 194 280 C 192 276 190 272 190 268'], a, lt);

    // === BRIDE HANDS — in lap, partially under groom's hand ===
    pp(g, [
      'M 208 274 C 212 278 216 282 220 286 C 224 288 228 286 228 282 C 228 278 224 274 220 272',
      'M 218 284 C 222 288 226 292 230 294 C 234 296 238 294 238 290 C 238 286 234 282 230 278'
    ], a);
    // Bride's fingers delicately resting
    pp(g, [
      'M 230 278 C 234 276 238 276 240 278 C 242 280 242 284 240 288',
      'M 236 282 C 240 280 244 280 246 282 C 248 284 248 288 246 292'
    ], a);
    // Bride's wrist — slender
    pp(g, ['M 210 274 C 206 270 204 264 204 258', 'M 218 272 C 214 268 212 262 212 256'], a, lt);
    // Ring finger hint — bride
    pp(g, ['M 222 280 C 220 278 220 276 222 276'], a, lt);

    // === MODERN DARK BENCH ===
    // Bench seat surface — heavy, dark, modern
    pp(g, [
      'M 44 296 L 296 296 L 296 312 L 44 312 Z'
    ], a);
    // Bench front face — thick panel
    pp(g, [
      'M 44 312 L 296 312 L 296 324 L 44 324 Z'
    ], a);
    // Left leg — square, sturdy
    pp(g, ['M 52 324 L 50 350', 'M 62 324 L 60 350', 'M 50 350 L 62 350'], a);
    // Right leg
    pp(g, ['M 282 324 L 280 350', 'M 292 324 L 290 350', 'M 280 350 L 292 350'], a);
    // Center support
    pp(g, ['M 166 324 L 164 350', 'M 176 324 L 174 350'], a, lt);
    // Bench edge detail
    pp(g, ['M 44 296 C 44 294 46 292 48 292 L 292 292 C 294 292 296 294 296 296'], a, lt);

    // === ELDERLY LADY (left side, seated on separate bench) ===
    // Head — rounder, older features
    pp(g, [
      'M 40 226 C 32 226 24 234 24 246 C 24 258 32 266 40 268 C 48 266 56 258 56 246 C 56 234 48 226 40 226 Z'
    ], a);
    // Glasses — round frames
    pp(g, [
      'M 30 240 C 30 236 34 234 38 234 C 42 234 44 236 44 240 C 44 244 42 246 38 246 C 34 246 30 244 30 240 Z',
      'M 44 240 L 48 240',
      'M 48 240 C 48 236 50 234 54 234 C 56 234 58 236 58 238'
    ], a);
    // Face features — simplified but characterful
    pp(g, ['M 36 250 C 38 252 40 252 42 250'], a, lt); // nose
    pp(g, ['M 34 256 C 36 254 40 254 44 256'], a, lt); // mouth
    // Hair — short, styled
    pp(g, [
      'M 28 242 C 26 236 28 228 34 224 C 38 222 42 222 46 224 C 52 228 54 236 52 242'
    ], a);
    // Body — seated, wearing a dark dress, slightly hunched
    pp(g, [
      'M 28 268 C 22 274 18 286 16 300 L 14 340 L 66 340 L 66 300 C 64 286 58 274 52 268'
    ], a);
    // Arms crossed/in lap
    pp(g, [
      'M 22 278 C 18 288 14 300 14 314',
      'M 58 278 C 62 288 64 300 64 314',
      'M 28 300 C 32 296 36 294 40 296 C 44 298 48 302 52 300'
    ], a, lt);
    // Legs/knees visible — seated
    pp(g, [
      'M 24 336 C 24 340 26 344 30 346 L 42 346',
      'M 52 336 C 52 340 50 344 46 346'
    ], a, lt);
    // Handbag/clutch on lap
    pp(g, ['M 30 306 L 50 306 L 50 316 L 30 316 Z'], a, lt);

    // === STONE FLOOR ===
    pp(g, ['M 0 340 L 360 340 L 360 450 L 0 450 Z'], a, lt);
    // Stone slab dividers — irregular spacing
    pp(g, [
      'M 55 340 L 55 450', 'M 120 340 L 120 450', 'M 195 340 L 195 450',
      'M 265 340 L 265 450', 'M 330 340 L 330 450',
      'M 0 386 L 360 386', 'M 0 420 L 360 420'
    ], a, lt);
    // Dark carpet runner in aisle
    pp(g, ['M 70 340 L 70 450', 'M 290 340 L 290 450'], a, lt);
  },

  // =================================================================
  // Layer 6: Background — ceiling, walls, arch, lamp, guests
  // =================================================================
  (g, a) => {
    // === WOODEN BEAM CEILING ===
    pp(g, ['M 0 0 L 360 0 L 360 52 L 0 52 Z'], a);
    // Individual beam divisions
    for (let x = 0; x < 360; x += 42) {
      pp(g, [`M ${x} 0 L ${x} 52`], a, lt);
    }
    // Beam cross supports — horizontal
    pp(g, ['M 0 14 L 360 14', 'M 0 28 L 360 28', 'M 0 42 L 360 42'], a, lt);
    // Beam bottom edge — heavy timber
    pp(g, ['M 0 50 L 360 50', 'M 0 52 L 360 52'], a);
    // Roof peak perspective lines
    pp(g, [
      'M 0 0 C 60 4 120 8 180 10 C 240 8 300 4 360 0',
      'M 0 14 C 60 18 120 22 180 24 C 240 22 300 18 360 14'
    ], a, lt);

    // === LEFT STONE WALL ===
    pp(g, ['M 0 52 L 56 52 L 56 340 L 0 340 Z'], a);
    // Stone blocks — irregular, realistic masonry
    const leftStones = [
      'M 2 54 L 26 54 L 26 78 L 2 78 Z',
      'M 28 54 L 54 54 L 54 74 L 28 74 Z',
      'M 2 80 L 20 80 L 20 108 L 2 108 Z',
      'M 22 76 L 54 76 L 54 104 L 22 104 Z',
      'M 2 110 L 32 110 L 32 136 L 2 136 Z',
      'M 34 106 L 54 106 L 54 132 L 34 132 Z',
      'M 2 138 L 24 138 L 24 164 L 2 164 Z',
      'M 26 134 L 54 134 L 54 168 L 26 168 Z',
      'M 2 166 L 36 166 L 36 194 L 2 194 Z',
      'M 38 170 L 54 170 L 54 198 L 38 198 Z',
      'M 2 196 L 22 196 L 22 224 L 2 224 Z',
      'M 24 200 L 54 200 L 54 228 L 24 228 Z',
      'M 2 226 L 30 226 L 30 254 L 2 254 Z',
      'M 32 230 L 54 230 L 54 258 L 32 258 Z',
      'M 2 256 L 26 256 L 26 282 L 2 282 Z',
      'M 28 260 L 54 260 L 54 286 L 28 286 Z',
      'M 2 284 L 20 284 L 20 310 L 2 310 Z',
      'M 22 288 L 54 288 L 54 314 L 22 314 Z',
      'M 2 312 L 34 312 L 34 340 L 2 340 Z',
      'M 36 316 L 54 316 L 54 340 L 36 340 Z'
    ];
    pp(g, leftStones, a, lt);

    // === RIGHT STONE WALL (with architectural details) ===
    pp(g, ['M 306 52 L 360 52 L 360 340 L 306 340 Z'], a);
    const rightStones = [
      'M 308 54 L 334 54 L 334 76 L 308 76 Z',
      'M 336 54 L 358 54 L 358 72 L 336 72 Z',
      'M 308 78 L 326 78 L 326 106 L 308 106 Z',
      'M 328 74 L 358 74 L 358 100 L 328 100 Z',
      'M 308 108 L 340 108 L 340 134 L 308 134 Z',
      'M 342 102 L 358 102 L 358 130 L 342 130 Z',
      'M 308 136 L 324 136 L 324 164 L 308 164 Z',
      'M 326 132 L 358 132 L 358 162 L 326 162 Z',
      'M 308 166 L 342 166 L 342 192 L 308 192 Z',
      'M 344 164 L 358 164 L 358 196 L 344 196 Z',
      'M 308 194 L 322 194 L 322 220 L 308 220 Z',
      'M 324 198 L 358 198 L 358 224 L 324 224 Z',
      'M 308 222 L 338 222 L 338 250 L 308 250 Z',
      'M 340 226 L 358 226 L 358 254 L 340 254 Z',
      'M 308 252 L 328 252 L 328 278 L 308 278 Z',
      'M 330 256 L 358 256 L 358 282 L 330 282 Z',
      'M 308 280 L 344 280 L 344 308 L 308 308 Z',
      'M 346 284 L 358 284 L 358 312 L 346 312 Z',
      'M 308 310 L 332 310 L 332 340 L 308 340 Z',
      'M 334 314 L 358 314 L 358 340 L 334 340 Z'
    ];
    pp(g, rightStones, a, lt);

    // === STONE ARCH (right wall) — romanesque ===
    pp(g, [
      'M 314 186 C 314 150 322 120 332 104 C 340 92 348 86 354 88 C 358 90 360 98 360 110',
      'M 314 186 L 314 270 L 360 270 L 360 186',
      'M 318 190 C 318 156 326 126 334 110 C 342 96 348 92 352 94'
    ], a);
    // Arch voussoir stones (wedge-shaped keystone blocks)
    pp(g, [
      'M 332 100 L 336 92 L 340 100',
      'M 324 118 L 328 108 L 332 118',
      'M 340 100 L 344 92 L 348 102',
      'M 318 138 L 322 128 L 326 138',
      'M 346 104 L 350 96 L 354 108'
    ], a, lt);
    // Inner arch decorative molding
    pp(g, ['M 318 190 C 318 158 324 128 334 112 C 342 100 348 96 354 98'], a, lt);
    // Column/pilaster at arch edge
    pp(g, [
      'M 310 186 L 310 270', 'M 314 186 L 314 270',
      'M 310 186 C 310 184 312 182 314 182',
      'M 310 270 C 310 272 312 274 314 274'
    ], a);
    // Column capital detail
    pp(g, [
      'M 308 180 L 316 180 L 316 186 L 308 186 Z',
      'M 306 178 L 318 178 L 318 180 L 306 180 Z'
    ], a, lt);

    // === ROUND WALL LAMP (left wall, high up) ===
    fe(g, 'circle', { cx: 28, cy: 110, r: 10, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 28, cy: 110, r: 6, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    fe(g, 'circle', { cx: 28, cy: 110, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Lamp mount bracket
    pp(g, ['M 28 100 L 28 90', 'M 24 90 L 32 90'], a);
    pp(g, ['M 20 108 L 16 106', 'M 36 108 L 40 106', 'M 20 112 L 16 114', 'M 36 112 L 40 114'], a, lt);

    // === GUEST ROWS ===
    // Front bench (wooden pew)
    pp(g, ['M 56 228 L 300 228 L 300 240 L 56 240 Z'], a);
    pp(g, ['M 56 240 L 300 240 L 300 244 L 56 244 Z'], a, lt);
    // Pew back rest
    pp(g, ['M 56 218 L 300 218 L 300 228 L 56 228 Z'], a, lt);

    // Front row guests (~5 figures, more detailed silhouettes)
    const frontGuests = [
      { cx: 78, cy: 210, hw: 13, hair: 'short' },
      { cx: 114, cy: 212, hw: 12, hair: 'med' },
      { cx: 158, cy: 208, hw: 13, hair: 'short' },
      { cx: 214, cy: 210, hw: 12, hair: 'med' },
      { cx: 264, cy: 212, hw: 13, hair: 'short' }
    ];
    frontGuests.forEach(({ cx, cy, hw }) => {
      fe(g, 'ellipse', { cx, cy: cy - 18, rx: hw - 4, ry: hw - 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      pp(g, [`M ${cx - hw} ${cy - 4} C ${cx - hw + 4} ${cy - 12} ${cx - 4} ${cy - 14} ${cx} ${cy - 14} C ${cx + 4} ${cy - 14} ${cx + hw - 4} ${cy - 12} ${cx + hw} ${cy - 4} L ${cx + hw} ${cy + 16} L ${cx - hw} ${cy + 16} Z`], a, lt);
    });

    // Back bench (higher up)
    pp(g, ['M 56 178 L 300 178 L 300 190 L 56 190 Z'], a);
    pp(g, ['M 56 168 L 300 168 L 300 178 L 56 178 Z'], a, lt);

    // Back row guests (~7 figures, smaller)
    const backGuests = [
      { cx: 72, cy: 164 }, { cx: 102, cy: 162 }, { cx: 138, cy: 166 },
      { cx: 172, cy: 163 }, { cx: 208, cy: 165 }, { cx: 242, cy: 162 },
      { cx: 278, cy: 164 }
    ];
    backGuests.forEach(({ cx, cy }) => {
      fe(g, 'ellipse', { cx, cy: cy - 12, rx: 7, ry: 9, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
      pp(g, [`M ${cx - 10} ${cy} C ${cx - 6} ${cy - 8} ${cx - 2} ${cy - 10} ${cx} ${cy - 10} C ${cx + 2} ${cy - 10} ${cx + 6} ${cy - 8} ${cx + 10} ${cy} L ${cx + 10} ${cy + 14} L ${cx - 10} ${cy + 14} Z`], a, lt);
    });

    // === STANDING PERSON near arch (right side, bridesmaid?) ===
    fe(g, 'ellipse', { cx: 326, cy: 198, rx: 9, ry: 11, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    pp(g, [
      'M 315 212 C 320 208 324 206 326 206 C 328 206 332 208 337 212 L 340 268 L 312 268 Z'
    ], a);
    pp(g, ['M 320 268 L 318 300 L 324 300', 'M 332 268 L 334 300 L 328 300'], a, lt);
    // Hair — pulled back
    pp(g, [
      'M 318 194 C 316 186 320 180 326 178 C 332 180 336 186 334 194'
    ], a, lt);

    // === ADDITIONAL BACKGROUND ELEMENTS ===
    // Iron chandelier/candelabra hint (hanging from ceiling)
    pp(g, [
      'M 180 52 L 180 66',
      'M 170 66 L 190 66',
      'M 170 66 L 168 72 L 172 72',
      'M 190 66 L 192 72 L 188 72'
    ], a, lt);

    // === FLOOR STONE DETAIL LINES ===
    pp(g, [
      'M 0 370 L 360 370', 'M 0 400 L 360 400', 'M 0 430 L 360 430',
      'M 30 340 L 30 450', 'M 90 340 L 90 450',
      'M 155 340 L 155 450', 'M 225 340 L 225 450',
      'M 295 340 L 295 450'
    ], a, lt);
    // Carpet runner border lines
    pp(g, ['M 72 340 L 72 450', 'M 288 340 L 288 450'], a, lt);
  },

  // =================================================================
  // Layer 7: Color fills — FIGURES (grayscale/sepia)
  // =================================================================
  (g, a, defs) => {
    // === GROOM SKIN — gradient for tonal depth ===
    const groomSkinGrad = gd(defs, 'r', [
      [0, '#C0B8B0', 1], [0.5, '#B0A8A0', 1], [1, '#A09890', 1]
    ], { cx: 130, cy: 100, r: 50 });
    // Face fill
    fl(g, 'M 130 60 C 116 60 104 70 100 84 C 97 94 97 106 100 116 C 103 126 108 134 114 140 C 120 146 126 150 130 152 C 134 150 140 146 146 140 C 152 134 157 126 160 116 C 163 106 163 94 160 84 C 156 70 144 60 130 60 Z', groomSkinGrad, a);
    // Ears
    fe(g, 'ellipse', { cx: 97, cy: 96, rx: 5, ry: 9, fill: '#A89888' }, false);
    fe(g, 'ellipse', { cx: 165, cy: 96, rx: 4, ry: 8, fill: '#A89888' }, false);
    // Neck
    fl(g, 'M 118 148 C 116 154 114 160 114 166 L 146 166 C 146 160 144 154 142 148 C 138 150 134 152 130 152 C 126 152 122 150 118 148 Z', '#A89888', false);

    // === GROOM HAIR (dark, rich tones) ===
    const groomHairGrad = gd(defs, 'l', [
      [0, '#3D3530', 1], [0.5, '#4A3F38', 1], [1, '#352D28', 1]
    ], { x1: 100, y1: 50, x2: 162, y2: 100 });
    fl(g, 'M 104 96 C 102 82 106 66 114 58 C 120 52 128 48 136 48 C 144 48 152 54 158 64 C 162 72 164 84 162 96 L 160 84 C 158 72 152 62 144 56 C 138 52 130 50 122 54 C 114 58 108 68 104 82 Z', groomHairGrad, a);
    // Sideburns
    fl(g, 'M 100 86 C 98 80 100 72 106 66 L 104 68 C 100 74 98 82 100 92 Z', '#3D3530', false);
    fl(g, 'M 162 86 C 164 80 162 72 156 66 L 158 68 C 162 74 164 82 162 92 Z', '#3D3530', false);

    // === GROOM SUIT (dark charcoal with subtle warmth) ===
    const suitGrad = gd(defs, 'l', [
      [0, '#2D2926', 1], [0.3, '#3A3530', 1], [0.7, '#2D2926', 1], [1, '#252220', 1]
    ], { x1: 74, y1: 180, x2: 186, y2: 310 });
    // Main torso
    fl(g, 'M 74 200 C 84 180 104 168 130 166 C 156 168 176 180 186 200 L 186 310 L 74 310 Z', suitGrad, a);
    // Left arm
    fl(g, 'M 74 200 C 68 212 64 228 62 244 C 60 258 58 272 58 284 C 58 292 60 298 64 302 L 76 298 C 74 294 72 288 72 280 C 72 268 72 254 74 240 C 76 226 80 212 86 200 Z', '#2D2926', false);
    // Right arm
    fl(g, 'M 186 200 C 190 212 194 228 196 244 C 198 256 200 268 200 278 L 194 274 C 192 264 190 252 188 240 C 184 224 180 210 176 200 Z', '#2D2926', false);

    // === GROOM SHIRT (cream white — sepia cast) ===
    fl(g, 'M 126 168 L 124 228 L 136 228 L 134 168 Z', '#F0E8E0', false);
    fl(g, 'M 118 166 C 114 162 108 158 104 160 C 100 162 100 168 104 172 C 108 174 114 174 118 172 Z', '#F0E8E0', false);
    fl(g, 'M 142 166 C 146 162 152 158 156 160 C 160 162 160 168 156 172 C 152 174 146 174 142 172 Z', '#F0E8E0', false);

    // === GROOM TIE (medium warm gray with pattern) ===
    const tieGrad = gd(defs, 'l', [
      [0, '#6B6058', 1], [0.5, '#7A6E64', 1], [1, '#6B6058', 1]
    ], { x1: 124, y1: 160, x2: 136, y2: 220 });
    fl(g, 'M 126 168 L 130 160 L 134 168 L 136 212 L 130 220 L 124 212 Z', tieGrad, false);

    // === BRIDE SKIN — luminous, soft tones ===
    const brideSkinGrad = gd(defs, 'r', [
      [0, '#D0C8C0', 1], [0.4, '#C8BEB6', 1], [1, '#B8AEA6', 1]
    ], { cx: 228, cy: 100, r: 48 });
    // Face
    fl(g, 'M 228 64 C 214 64 204 74 200 86 C 197 96 197 108 200 118 C 203 128 208 136 214 142 C 220 148 224 150 228 152 C 232 150 236 148 242 142 C 248 136 253 128 256 118 C 259 108 259 96 256 86 C 252 74 242 64 228 64 Z', brideSkinGrad, a);
    // Neck
    fl(g, 'M 218 148 C 216 154 214 160 214 166 L 242 166 C 242 160 240 154 238 148 C 234 150 232 152 228 152 C 224 152 222 150 218 148 Z', '#C0B4AA', false);
    // Bare shoulders
    fl(g, 'M 216 164 C 210 166 200 170 192 176 C 188 180 186 184 186 188 L 270 188 C 270 184 268 180 264 176 C 256 170 246 166 240 164 C 238 164 234 166 228 166 C 222 166 218 164 216 164 Z', '#C8BEB6', false);

    // === BRIDE HAIR ===
    const brideHairGrad = gd(defs, 'l', [
      [0, '#3A3230', 1], [0.4, '#4A403A', 1], [0.8, '#3A3230', 1], [1, '#2E2826', 1]
    ], { x1: 186, y1: 44, x2: 280, y2: 170 });
    // Main hair mass
    fl(g, 'M 204 90 C 202 76 206 62 214 54 C 220 48 228 44 236 44 C 244 44 252 50 258 60 C 264 70 266 82 264 94 L 262 88 C 262 78 260 68 254 58 C 248 50 240 46 232 46 C 222 48 212 56 206 68 C 202 76 200 84 200 90 Z', brideHairGrad, a);
    // Left side flowing hair
    fl(g, 'M 198 84 C 194 92 190 104 188 118 C 186 130 188 142 192 150 L 198 146 C 196 138 194 128 194 118 C 196 106 198 96 200 88 Z', '#3A3230', false);
    // Right side flowing hair
    fl(g, 'M 258 84 C 264 94 268 108 272 122 C 276 136 274 150 270 160 L 264 156 C 268 146 270 134 268 120 C 266 106 262 94 258 86 Z', '#3A3230', false);
    // Hair accessory fill
    fl(g, 'M 262 74 C 266 70 270 70 274 74 C 276 78 274 82 270 84 C 266 86 262 84 260 80 C 260 76 262 74 262 74 Z', '#C8C0B8', false);

    // === BRIDE BODICE (white with slight warmth) ===
    const bodiceGrad = gd(defs, 'l', [
      [0, '#FAF6F2', 1], [0.5, '#FFFFFF', 1], [1, '#F4F0EC', 1]
    ], { x1: 186, y1: 188, x2: 270, y2: 270 });
    fl(g, 'M 186 188 C 186 196 186 208 188 220 C 190 232 194 244 200 254 C 206 262 214 268 220 270 C 226 268 234 262 240 254 C 246 244 250 232 252 220 C 254 208 254 196 254 188 L 270 188 C 270 196 268 208 266 220 C 264 234 258 248 250 260 C 242 270 234 276 228 278 C 222 276 214 270 206 260 C 198 248 192 234 190 220 C 188 208 186 196 186 188 Z', bodiceGrad, a);

    // === BRIDE TULLE SKIRT (layered whites) ===
    const skirtGrad = gd(defs, 'l', [
      [0, '#EAE4DE', 1], [0.3, '#F6F2EE', 1], [0.5, '#FFFFFF', 1], [0.7, '#F6F2EE', 1], [1, '#EAE4DE', 1]
    ], { x1: 130, y1: 254, x2: 310, y2: 448 });
    fl(g, 'M 200 254 C 192 264 178 280 164 298 C 152 314 142 334 136 358 C 132 378 130 398 132 420 C 134 434 136 442 138 448 L 302 448 C 304 442 306 434 308 420 C 310 398 308 378 304 358 C 298 334 288 314 276 298 C 262 280 248 264 240 254 Z', skirtGrad, a);

    // === ELDERLY LADY ===
    // Head
    fe(g, 'ellipse', { cx: 40, cy: 246, rx: 14, ry: 16, fill: '#B8AEA6' }, false);
    // Hair
    fl(g, 'M 30 238 C 28 232 30 226 36 222 C 42 220 48 222 52 226 C 54 230 54 236 52 240 L 50 238 C 52 234 52 230 50 228 C 46 224 40 222 36 224 C 32 226 30 230 30 236 Z', '#8E8480', false);
    // Body — dark dress
    const ladyDressGrad = gd(defs, 'l', [
      [0, '#4A4240', 1], [1, '#5A524E', 1]
    ], { x1: 14, y1: 268, x2: 66, y2: 340 });
    fl(g, 'M 30 268 C 24 276 20 288 18 302 L 16 340 L 64 340 L 64 302 C 62 288 56 276 50 268 Z', ladyDressGrad, false);

    // === GROOM TROUSERS ===
    const trouserGrad = gd(defs, 'l', [
      [0, '#2A2624', 1], [0.5, '#363230', 1], [1, '#2A2624', 1]
    ], { x1: 86, y1: 296, x2: 174, y2: 350 });
    fl(g, 'M 86 296 L 86 342 C 86 346 90 348 94 348 L 106 348 C 110 348 112 346 112 342 L 112 296 Z', trouserGrad, false);
    fl(g, 'M 148 296 L 148 342 C 148 346 150 348 154 348 L 168 348 C 172 348 174 346 174 342 L 174 296 Z', trouserGrad, false);
    // Shoes
    fl(g, 'M 86 342 C 84 346 86 352 94 354 L 112 354 C 118 352 118 346 112 342 Z', '#1E1A18', false);
    fl(g, 'M 148 342 C 146 346 148 352 154 354 L 174 354 C 180 352 180 346 174 342 Z', '#1E1A18', false);
  },

  // =================================================================
  // Layer 8: Church/scene colors — walls, ceiling, floor, guests
  // =================================================================
  (g, a, defs) => {
    // === CEILING (dark warm wood tones) ===
    const ceilingGrad = gd(defs, 'l', [
      [0, '#3A3228', 1], [0.5, '#4A4038', 1], [1, '#3A3228', 1]
    ], { x1: 0, y1: 0, x2: 360, y2: 52 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 52, fill: ceilingGrad }, a);
    // Individual beam fills — alternating tones
    for (let x = 0; x < 360; x += 42) {
      const shade = (x / 42) % 2 === 0 ? '#3D352C' : '#443C32';
      feo(g, 'rect', { x, y: 14, width: 42, height: 14, fill: shade }, 0.6, false);
    }
    // Beam bottom shadow strips
    for (let x = 0; x < 360; x += 42) {
      feo(g, 'rect', { x, y: 42, width: 42, height: 10, fill: '#2A2420' }, 0.4, false);
    }

    // === LEFT STONE WALL (warm gray stone) ===
    const leftWallGrad = gd(defs, 'l', [
      [0, '#A09488', 1], [0.4, '#B0A498', 1], [0.8, '#9A8E82', 1], [1, '#8A7E72', 1]
    ], { x1: 0, y1: 52, x2: 56, y2: 340 });
    fe(g, 'rect', { x: 0, y: 52, width: 56, height: 288, fill: leftWallGrad }, a);
    // Stone block variation fills
    const leftBlocks = [
      { x: 2, y: 54, w: 24, h: 24, c: '#A89C90' },
      { x: 28, y: 54, w: 26, h: 20, c: '#988C80' },
      { x: 2, y: 80, w: 18, h: 28, c: '#9C9084' },
      { x: 22, y: 76, w: 32, h: 28, c: '#B0A498' },
      { x: 2, y: 110, w: 30, h: 26, c: '#948878' },
      { x: 34, y: 106, w: 20, h: 26, c: '#A89C8C' },
      { x: 2, y: 138, w: 22, h: 26, c: '#9E9286' },
      { x: 26, y: 134, w: 28, h: 34, c: '#B4A89C' },
      { x: 2, y: 166, w: 34, h: 28, c: '#8E8276' },
      { x: 2, y: 196, w: 20, h: 28, c: '#A29688' },
      { x: 24, y: 200, w: 30, h: 28, c: '#968A7E' },
      { x: 2, y: 226, w: 28, h: 28, c: '#AC9E92' },
      { x: 2, y: 284, w: 18, h: 26, c: '#988C80' },
      { x: 22, y: 288, w: 32, h: 26, c: '#A69A8E' }
    ];
    leftBlocks.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === RIGHT STONE WALL ===
    const rightWallGrad = gd(defs, 'l', [
      [0, '#8A7E72', 1], [0.3, '#A09488', 1], [0.7, '#B0A498', 1], [1, '#9A8E82', 1]
    ], { x1: 306, y1: 52, x2: 360, y2: 340 });
    fe(g, 'rect', { x: 306, y: 52, width: 54, height: 288, fill: rightWallGrad }, false);
    const rightBlocks = [
      { x: 308, y: 54, w: 26, h: 22, c: '#A89C90' },
      { x: 336, y: 54, w: 22, h: 18, c: '#988C80' },
      { x: 308, y: 108, w: 32, h: 26, c: '#B0A498' },
      { x: 342, y: 102, w: 16, h: 28, c: '#928678' },
      { x: 308, y: 194, w: 14, h: 26, c: '#9C9084' },
      { x: 324, y: 198, w: 34, h: 26, c: '#A49888' },
      { x: 308, y: 280, w: 36, h: 28, c: '#A29688' },
      { x: 346, y: 284, w: 12, h: 28, c: '#8E8276' }
    ];
    rightBlocks.forEach(({ x, y, w, h, c }) => {
      fe(g, 'rect', { x, y, width: w, height: h, fill: c }, false);
    });

    // === BACKGROUND GUEST AREA (warm light gray) ===
    const bgGrad = gd(defs, 'l', [
      [0, '#C8C0B8', 1], [0.5, '#D8D0C8', 1], [1, '#C8C0B8', 1]
    ], { x1: 56, y1: 140, x2: 306, y2: 246 });
    fe(g, 'rect', { x: 56, y: 140, width: 250, height: 106, fill: bgGrad }, a);

    // === GUEST BENCH FILLS (dark wood) ===
    fe(g, 'rect', { x: 57, y: 179, width: 242, height: 10, rx: 2, fill: '#4A3E34' }, false);
    fe(g, 'rect', { x: 57, y: 169, width: 242, height: 10, rx: 2, fill: '#5A4E44' }, false);
    fe(g, 'rect', { x: 57, y: 229, width: 242, height: 10, rx: 2, fill: '#4A3E34' }, false);
    fe(g, 'rect', { x: 57, y: 219, width: 242, height: 10, rx: 2, fill: '#5A4E44' }, false);

    // === GUEST SILHOUETTES — back row ===
    [72, 102, 138, 172, 208, 242, 278].forEach(cx => {
      const bodyColor = (cx % 3 === 0) ? '#8A7E76' : '#9A8E86';
      fe(g, 'ellipse', { cx, cy: 152, rx: 7, ry: 9, fill: '#B0A498' }, false);
      feo(g, 'rect', { x: cx - 10, y: 154, width: 20, height: 24, fill: bodyColor }, 0.7, false);
    });
    // Front row
    [78, 114, 158, 214, 264].forEach((cx, i) => {
      const hw = [13, 12, 13, 12, 13][i];
      const bodyColor = i % 2 === 0 ? '#8A7E76' : '#7A6E66';
      fe(g, 'ellipse', { cx, cy: 192, rx: hw - 4, ry: hw - 2, fill: '#B0A498' }, false);
      feo(g, 'rect', { x: cx - hw, y: 196, width: hw * 2, height: 30, fill: bodyColor }, 0.6, false);
    });

    // === MAIN COUPLE BENCH (dark modern) ===
    const benchGrad = gd(defs, 'l', [
      [0, '#1E1A16', 1], [0.5, '#2A2622', 1], [1, '#1E1A16', 1]
    ], { x1: 44, y1: 296, x2: 296, y2: 324 });
    fe(g, 'rect', { x: 45, y: 297, width: 250, height: 14, rx: 2, fill: benchGrad }, a);
    fe(g, 'rect', { x: 45, y: 313, width: 250, height: 10, rx: 1, fill: '#161412' }, false);
    // Bench legs
    fe(g, 'rect', { x: 50, y: 324, width: 12, height: 26, fill: '#1E1A16' }, false);
    fe(g, 'rect', { x: 280, y: 324, width: 12, height: 26, fill: '#1E1A16' }, false);
    fe(g, 'rect', { x: 164, y: 324, width: 12, height: 26, fill: '#161412' }, false);

    // === STONE FLOOR ===
    const floorGrad = gd(defs, 'l', [
      [0, '#D0C8C0', 1], [0.5, '#E0D8D0', 1], [1, '#C8C0B8', 1]
    ], { x1: 0, y1: 340, x2: 360, y2: 450 });
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 110, fill: floorGrad }, a);
    // Carpet runner (dark)
    const carpetGrad = gd(defs, 'l', [
      [0, '#4A4440', 1], [0.5, '#5A5450', 1], [1, '#4A4440', 1]
    ], { x1: 72, y1: 340, x2: 288, y2: 450 });
    feo(g, 'rect', { x: 72, y: 340, width: 216, height: 110, fill: carpetGrad }, 0.5, false);
    // Stone slab alternating fills
    const slabColors = ['#C8C0B8', '#D8D0C8', '#C0B8B0', '#D4CCC4'];
    let si = 0;
    [0, 55, 120, 195, 265, 330].forEach((sx, i) => {
      const sw = (i < 5) ? [55, 65, 75, 70, 65][i] : 30;
      [340, 386, 420].forEach((sy, j) => {
        const sh2 = (j < 2) ? [46, 34][j] : 30;
        fe(g, 'rect', { x: sx, y: sy, width: sw, height: sh2, fill: slabColors[si % 4] }, false);
        si++;
      });
    });

    // === LAMP HALO GLOW ===
    const lampGlow = gd(defs, 'r', [
      [0, '#FFF8E0', 0.3], [0.3, '#FFF4D0', 0.15], [0.7, '#FFF0C0', 0.05], [1, '#FFF0C0', 0]
    ], { cx: 28, cy: 110, r: 30 });
    fe(g, 'circle', { cx: 28, cy: 110, r: 30, fill: lampGlow }, false);

    // === ARCH OPENING (cool stone interior light) ===
    const archGrad = gd(defs, 'l', [
      [0, '#C0B8B0', 1], [0.5, '#D0C8C0', 1], [1, '#B8B0A8', 1]
    ], { x1: 314, y1: 100, x2: 360, y2: 270 });
    fl(g, 'M 314 186 L 314 268 L 358 268 L 358 110 C 358 98 356 92 352 88 C 348 86 342 90 336 100 C 328 114 318 146 314 186 Z', archGrad, false);

    // === STANDING PERSON fills ===
    fe(g, 'ellipse', { cx: 326, cy: 198, rx: 9, ry: 11, fill: '#B8AEA6' }, false);
    fl(g, 'M 317 212 C 322 208 326 206 326 206 C 326 206 330 208 335 212 L 338 266 L 314 266 Z', '#6A6058', false);
    fe(g, 'rect', { x: 318, y: 266, width: 6, height: 32, fill: '#5A524A' }, false);
    fe(g, 'rect', { x: 330, y: 266, width: 6, height: 32, fill: '#5A524A' }, false);
  },

  // =================================================================
  // Layer 9: Polish — highlights, shadows, textures, vignette, detail
  // =================================================================
  (g, a, defs) => {
    // === EYE SHINES (white sparkle) ===
    fe(g, 'circle', { cx: 122, cy: 90, r: 1.4, fill: 'white' }, a);
    fe(g, 'circle', { cx: 142, cy: 89, r: 1.4, fill: 'white' }, a);
    fe(g, 'circle', { cx: 126, cy: 94, r: 0.7, fill: 'white', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 146, cy: 93, r: 0.7, fill: 'white', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 222, cy: 92, r: 1.4, fill: 'white' }, a);
    fe(g, 'circle', { cx: 243, cy: 91, r: 1.4, fill: 'white' }, a);
    fe(g, 'circle', { cx: 226, cy: 96, r: 0.7, fill: 'white', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 247, cy: 95, r: 0.7, fill: 'white', opacity: '0.6' }, false);

    // === FACE SHADOWS AND MODELING ===
    // Groom face shadows — under cheekbones, side of nose, under brow
    sh(g, 'M 112 96 C 114 102 116 108 118 114 C 116 118 114 120 112 118 C 110 114 110 108 110 102 Z', 0.15, false);
    sh(g, 'M 150 94 C 152 100 154 106 156 112 C 158 116 160 118 160 116 C 162 112 162 106 160 100 Z', 0.12, false);
    // Under brow shadow
    sh(g, 'M 112 86 C 118 84 126 84 132 86 L 132 90 C 126 88 118 88 112 90 Z', 0.1, false);
    sh(g, 'M 134 84 C 140 82 148 82 156 84 L 156 88 C 148 86 140 86 134 88 Z', 0.1, false);
    // Groom nose shadow (right side)
    sh(g, 'M 132 86 C 134 94 136 102 138 110 L 140 112 C 142 106 140 98 138 90 Z', 0.08, false);
    // Groom jaw shadow
    sh(g, 'M 104 118 C 108 128 114 136 122 142 L 118 144 C 110 138 104 130 100 120 Z', 0.1, false);

    // Bride face shadows — softer, more subtle
    sh(g, 'M 206 98 C 208 104 210 110 212 116 C 210 120 208 122 206 120 C 204 116 204 110 204 104 Z', 0.12, false);
    sh(g, 'M 252 96 C 254 102 256 108 258 114 C 260 118 262 120 262 118 C 264 114 264 108 262 102 Z', 0.1, false);
    // Under bride's brow
    sh(g, 'M 212 88 C 218 86 226 86 232 88 L 232 92 C 226 90 218 90 212 92 Z', 0.08, false);
    sh(g, 'M 234 86 C 240 84 248 84 256 86 L 256 90 C 248 88 240 88 234 90 Z', 0.08, false);
    // Bride's nose shadow
    sh(g, 'M 230 88 C 232 96 234 104 236 112 L 238 114 C 240 108 238 100 236 92 Z', 0.07, false);

    // === BRIDE LIP TONE (muted rose-gray) ===
    fl(g, 'M 216 132 C 220 130 224 129 227 130 C 228 131 229 131 230 130 C 232 129 236 130 240 132 C 236 138 232 140 229 140 C 226 140 222 138 218 134 Z', '#9E8E86', false);
    // Lip highlight
    hi(g, 'M 222 130 C 226 128 230 128 234 130 L 232 132 C 228 130 224 130 220 132 Z', 0.2, false);

    // === GROOM LIP COLOR (subtle) ===
    fl(g, 'M 118 130 C 122 128 126 127 129 128 C 130 129 131 129 132 128 C 134 127 138 128 142 130 C 138 136 134 138 131 138 C 128 138 124 136 120 132 Z', '#8A7E76', false);

    // === SUIT FABRIC SHADING ===
    // Lapel shadows — deep creases
    sh(g, 'M 114 174 C 116 182 118 192 120 202 L 118 202 C 116 192 114 182 112 174 Z', 0.2, false);
    sh(g, 'M 146 174 C 144 182 142 192 140 202 L 142 202 C 144 192 146 182 148 174 Z', 0.2, false);
    // Suit shoulder shadow gradient
    sh(g, 'M 74 200 C 78 194 84 188 90 184 L 94 188 C 88 192 82 198 78 204 Z', 0.15, false);
    sh(g, 'M 186 200 C 182 194 176 188 170 184 L 166 188 C 172 192 178 198 182 204 Z', 0.15, false);
    // Pocket square highlight
    fl(g, 'M 109 196 C 111 192 114 190 116 192 C 118 194 117 198 115 200 L 109 200 Z', '#E8E0D8', false);

    // === BODICE AND DRESS SHADING ===
    // Bodice boning shadows — subtle vertical lines
    pps(g, [
      'M 197 186 L 195 248', 'M 207 182 L 205 256',
      'M 219 180 L 217 264', 'M 237 180 L 239 264',
      'M 249 182 L 251 256', 'M 259 186 L 261 248'
    ], false, 0.4, '#D0C8C0');
    // Bodice highlight center
    hi(g, 'M 218 186 C 222 184 234 184 238 186 L 238 240 C 234 244 222 244 218 240 Z', 0.12, false);
    // Bodice shadow sides
    sh(g, 'M 186 188 C 190 194 192 204 194 216 L 190 220 C 188 208 186 196 186 188 Z', 0.1, false);
    sh(g, 'M 270 188 C 266 194 264 204 262 216 L 266 220 C 268 208 270 196 270 188 Z', 0.1, false);

    // === TULLE TEXTURE AND HIGHLIGHTS ===
    // Soft curved tulle layer lines
    pps(g, [
      'M 160 306 C 184 298 208 294 228 294 C 248 294 268 298 286 306',
      'M 150 338 C 178 328 206 322 228 322 C 250 322 274 328 296 338',
      'M 142 370 C 172 358 202 350 228 350 C 254 350 280 358 304 370',
      'M 138 400 C 168 388 200 380 228 380 C 256 380 284 388 306 400',
      'M 136 428 C 166 416 198 408 228 408 C 258 408 286 416 306 428'
    ], false, 0.5, '#E8E0DA');
    // Tulle shimmer highlights — scattered ellipses
    const shimmerSpots = [
      { cx: 196, cy: 310, rx: 5, ry: 2 }, { cx: 252, cy: 318, rx: 4, ry: 1.5 },
      { cx: 216, cy: 348, rx: 6, ry: 2 }, { cx: 244, cy: 370, rx: 5, ry: 2 },
      { cx: 180, cy: 380, rx: 4, ry: 1.5 }, { cx: 268, cy: 392, rx: 5, ry: 2 },
      { cx: 202, cy: 410, rx: 4, ry: 1.5 }, { cx: 256, cy: 420, rx: 5, ry: 2 },
      { cx: 172, cy: 432, rx: 3, ry: 1 }, { cx: 284, cy: 438, rx: 4, ry: 1.5 },
      { cx: 228, cy: 330, rx: 6, ry: 2.5 }, { cx: 188, cy: 360, rx: 4, ry: 1.5 }
    ];
    shimmerSpots.forEach(s => {
      feo(g, 'ellipse', { cx: s.cx, cy: s.cy, rx: s.rx, ry: s.ry, fill: 'white' }, 0.14, false);
    });
    // Tulle skirt depth shadows — darker at folds
    sh(g, 'M 200 254 C 194 266 186 280 178 296 L 172 294 C 180 278 188 264 196 254 Z', 0.08, false);
    sh(g, 'M 240 254 C 246 266 254 280 262 296 L 268 294 C 260 278 252 264 244 254 Z', 0.08, false);
    // Deep shadow under skirt bottom
    sh(g, 'M 138 440 C 170 446 200 448 228 448 C 256 448 282 446 302 440 L 302 448 L 138 448 Z', 0.15, false);

    // === HAIR DETAIL POLISH ===
    // Bride hair highlights — curl sheen
    hi(g, 'M 212 58 C 220 52 230 50 238 54 L 236 58 C 228 54 220 56 214 62 Z', 0.15, false);
    hi(g, 'M 260 92 C 264 98 266 108 264 118 L 260 116 C 262 108 262 100 258 94 Z', 0.1, false);
    // Groom hair sheen
    hi(g, 'M 116 62 C 124 54 134 52 142 56 L 140 60 C 132 56 124 58 118 64 Z', 0.12, false);

    // === STONE WALL TEXTURE ===
    // Mortar lines — left wall (warm gray, very fine)
    const leftMortar = [
      'M 2 78 L 26 78', 'M 2 108 L 20 108', 'M 2 136 L 32 136',
      'M 2 164 L 24 164', 'M 2 194 L 36 194', 'M 2 224 L 22 224',
      'M 2 254 L 30 254', 'M 2 282 L 26 282', 'M 2 310 L 20 310',
      'M 26 54 L 26 78', 'M 20 80 L 20 108', 'M 32 110 L 32 136',
      'M 24 138 L 24 164', 'M 36 166 L 36 194', 'M 22 196 L 22 224'
    ];
    pps(g, leftMortar, false, 0.4, '#7A7068');
    // Right wall mortar
    const rightMortar = [
      'M 308 76 L 334 76', 'M 308 106 L 326 106', 'M 308 134 L 340 134',
      'M 308 164 L 324 164', 'M 308 192 L 342 192', 'M 308 220 L 322 220',
      'M 308 250 L 338 250', 'M 308 278 L 328 278', 'M 308 308 L 344 308',
      'M 334 54 L 334 76', 'M 326 78 L 326 106', 'M 340 108 L 340 134',
      'M 324 136 L 324 164'
    ];
    pps(g, rightMortar, false, 0.4, '#7A7068');
    // Stone surface texture — tiny scratches/marks on left wall
    pps(g, [
      'M 8 62 C 10 64 14 66 16 64', 'M 30 86 C 32 88 36 88 38 86',
      'M 6 120 C 8 122 12 124 14 122', 'M 28 150 C 30 152 34 152 36 150',
      'M 10 210 C 12 212 16 212 18 210', 'M 32 268 C 34 270 38 270 40 268'
    ], false, 0.3, '#8A7E72');
    // Right wall texture
    pps(g, [
      'M 316 64 C 318 66 322 66 324 64', 'M 340 120 C 342 122 346 122 348 120',
      'M 318 178 C 320 180 324 180 326 178', 'M 338 240 C 340 242 344 242 346 240'
    ], false, 0.3, '#8A7E72');

    // === LAMP GLOW INNER ===
    const lampInner = gd(defs, 'r', [
      [0, '#FFFDE0', 0.8], [0.5, '#FFF8C0', 0.4], [1, '#FFF4A0', 0]
    ], { cx: 28, cy: 110, r: 8 });
    fe(g, 'circle', { cx: 28, cy: 110, r: 8, fill: lampInner }, false);
    fe(g, 'circle', { cx: 28, cy: 110, r: 3, fill: '#FFFDE7', opacity: '0.7' }, false);

    // === CEILING BEAM SHADOWS ===
    for (let x = 0; x < 360; x += 42) {
      feo(g, 'rect', { x: x + 1, y: 46, width: 40, height: 6, fill: '#1A1614' }, 0.2, false);
    }
    feo(g, 'rect', { x: 0, y: 50, width: 360, height: 4, fill: '#1A1614' }, 0.15, false);

    // === FLOOR SHADOW UNDER BENCH ===
    sh(g, 'M 48 340 L 294 340 L 294 356 L 48 356 Z', 0.12, false);
    // Shadow under skirt spread
    sh(g, 'M 148 440 C 180 446 210 448 228 448 C 246 448 272 446 296 440 L 296 448 L 148 448 Z', 0.08, false);
    // Dark carpet shadow variation
    sh(g, 'M 72 340 L 120 340 L 120 450 L 72 450 Z', 0.06, false);
    sh(g, 'M 240 340 L 288 340 L 288 450 L 240 450 Z', 0.06, false);

    // === CHEEK/FACE HIGHLIGHTS ===
    // Bride cheek glow — subtle warmth
    feo(g, 'ellipse', { cx: 214, cy: 112, rx: 8, ry: 4, fill: '#D8CCC0' }, 0.25, false);
    feo(g, 'ellipse', { cx: 244, cy: 110, rx: 8, ry: 4, fill: '#D8CCC0' }, 0.25, false);
    // Groom forehead highlight
    hi(g, 'M 118 68 C 124 64 132 62 140 64 C 148 66 154 70 158 76 L 154 78 C 150 72 144 68 138 66 C 130 64 122 66 118 70 Z', 0.1, false);
    // Bride forehead highlight
    hi(g, 'M 210 70 C 218 64 228 62 238 66 C 246 70 252 76 256 82 L 252 84 C 248 78 242 72 234 68 C 226 66 216 68 210 72 Z', 0.1, false);

    // === SHOULDER/SKIN HIGHLIGHTS ===
    hi(g, 'M 200 172 C 210 168 220 166 228 166 C 236 166 246 168 256 172 L 252 176 C 244 172 236 170 228 170 C 220 170 212 172 204 176 Z', 0.15, false);

    // === HAND DETAIL SHADOWS ===
    sh(g, 'M 56 266 C 58 262 62 258 66 260 L 68 268 C 64 266 60 266 58 268 Z', 0.1, false);
    sh(g, 'M 200 262 C 204 258 210 256 214 260 L 212 268 C 208 264 204 264 202 266 Z', 0.1, false);

    // === ARCH INTERIOR DEPTH ===
    // Shadow inside arch
    sh(g, 'M 314 186 C 314 170 318 150 324 136 L 318 140 C 316 156 314 172 314 186 Z', 0.1, false);
    // Light spill from arch
    hi(g, 'M 340 186 L 340 266 L 356 266 L 356 120 C 356 110 354 100 350 96 Z', 0.08, false);

    // === VIGNETTE (photographic darkening at edges) ===
    const vignetteL = gd(defs, 'l', [
      [0, '#000000', 0.12], [1, '#000000', 0]
    ], { x1: 0, y1: 0, x2: 40, y2: 0 });
    fe(g, 'rect', { x: 0, y: 0, width: 40, height: 450, fill: vignetteL }, false);
    const vignetteR = gd(defs, 'l', [
      [0, '#000000', 0], [1, '#000000', 0.12]
    ], { x1: 320, y1: 0, x2: 360, y2: 0 });
    fe(g, 'rect', { x: 320, y: 0, width: 40, height: 450, fill: vignetteR }, false);
    const vignetteT = gd(defs, 'l', [
      [0, '#000000', 0.1], [1, '#000000', 0]
    ], { x1: 0, y1: 0, x2: 0, y2: 20 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 20, fill: vignetteT }, false);
    const vignetteB = gd(defs, 'l', [
      [0, '#000000', 0], [1, '#000000', 0.08]
    ], { x1: 0, y1: 430, x2: 0, y2: 450 });
    fe(g, 'rect', { x: 0, y: 430, width: 360, height: 20, fill: vignetteB }, false);

    // === BODICE BONING SHADOW HINTS ===
    [196, 206, 218, 236, 248, 258].forEach(bx => {
      pps(g, [`M ${bx + 1} 186 L ${bx - 1} 254`], false, 0.5, '#D8D0C8');
    });

    // === FILM GRAIN TEXTURE OVERLAY ===
    feo(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#8A7E72' }, 0.02, false);

    // === SEPIA TINT OVERLAY (very subtle warm cast) ===
    feo(g, 'rect', { x: 0, y: 0, width: 360, height: 450, fill: '#D4B896' }, 0.03, false);
  }
];
