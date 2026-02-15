const miguelbebeLayers = [
  // ================================================================
  // Layer 0: Construction guides — composition grid, head/body ovals,
  // limb direction lines, blanket boundary, letter M placement
  // ================================================================
  (g, a) => {
    // Vertical center guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Horizontal thirds
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Head oval guide — large newborn head centered around (180, 100)
    pp(g, [
      'M 180 42 C 220 42 250 66 250 100 C 250 134 220 158 180 158 C 140 158 110 134 110 100 C 110 66 140 42 180 42 Z'
    ], a, lt);
    // Torso guide — shorter, wider baby torso
    pp(g, [
      'M 180 155 C 225 155 258 180 258 215 C 258 250 225 275 180 275 C 135 275 102 250 102 215 C 102 180 135 155 180 155 Z'
    ], a, lt);
    // Left arm direction
    pp(g, ['M 115 175 L 42 210'], a, lt);
    // Right arm direction
    pp(g, ['M 245 175 L 310 220'], a, lt);
    // Left leg direction (slightly splayed)
    pp(g, ['M 148 270 L 100 370'], a, lt);
    // Right leg direction
    pp(g, ['M 212 270 L 260 370'], a, lt);
    // Blanket boundary
    pp(g, ['M 12 8 L 348 8 L 348 442 L 12 442 Z'], a, lt);
    // Letter M placement guide
    pp(g, ['M 155 215 L 205 215 L 205 260 L 155 260 Z'], a, lt);
    // Face proportion cross
    pp(g, ['M 180 55 L 180 155', 'M 120 100 L 240 100'], a, lt);
  },

  // ================================================================
  // Layer 1: Body outlines — photorealistic baby proportions
  // Large round head, chubby short torso, plump arms and legs
  // ================================================================
  (g, a) => {
    // Head — very large, round newborn head with subtle asymmetry
    // Top of head (forehead curve, slightly flattened on back since lying down)
    pp(g, [
      'M 180 46 C 192 44 206 46 218 52 C 228 57 236 65 241 75 C 246 85 248 96 247 107 C 246 118 242 128 236 136 C 230 144 222 150 213 154 C 204 158 194 160 184 160 C 174 160 163 158 154 155 C 145 151 137 145 131 137 C 125 129 120 119 118 109 C 116 98 117 87 121 77 C 125 67 132 58 141 52 C 150 47 162 44 175 44 C 177 44 179 45 180 46 Z'
    ], a);
    // Neck — very short baby neck, nearly hidden by chubby chin
    pp(g, [
      'M 162 155 C 165 160 170 163 176 164 C 180 165 184 165 188 164 C 194 162 198 160 200 156'
    ], a);
    // Left shoulder to torso
    pp(g, [
      'M 162 155 C 155 158 146 164 138 172 C 130 180 124 190 121 202 C 118 214 118 228 121 240 C 124 252 130 262 138 270 C 144 276 152 280 160 282'
    ], a);
    // Right shoulder to torso
    pp(g, [
      'M 200 156 C 207 158 216 164 224 172 C 232 180 238 190 241 202 C 244 214 244 228 241 240 C 238 252 232 262 224 270 C 218 276 210 280 202 282'
    ], a);
    // Bottom torso (connects to diaper/bloomer area)
    pp(g, [
      'M 160 282 C 166 284 173 286 180 286 C 187 286 194 284 202 282'
    ], a);
    // Left arm — upper arm, chubby
    pp(g, [
      'M 138 172 C 130 174 120 178 110 184 C 100 190 90 198 82 206 C 76 212 72 218 70 224'
    ], a);
    // Left arm — underside
    pp(g, [
      'M 146 182 C 138 186 128 192 118 200 C 108 208 98 216 90 222 C 84 226 80 228 78 230'
    ], a);
    // Left wrist area
    pp(g, [
      'M 70 224 C 68 228 66 232 66 236 C 66 240 68 243 72 244',
      'M 78 230 C 76 234 74 238 74 242 C 74 244 75 245 78 244'
    ], a);
    // Right arm — upper arm
    pp(g, [
      'M 224 172 C 232 174 242 178 252 184 C 262 190 272 198 280 206 C 286 212 290 218 292 224'
    ], a);
    // Right arm — underside
    pp(g, [
      'M 216 182 C 224 186 234 192 244 200 C 254 208 264 216 272 222 C 278 226 282 228 284 230'
    ], a);
    // Right wrist area
    pp(g, [
      'M 292 224 C 294 228 296 232 296 236 C 296 240 294 243 290 244',
      'M 284 230 C 286 234 288 238 288 242 C 288 244 287 245 284 244'
    ], a);
    // Left leg — thigh, chubby baby leg with rolls
    pp(g, [
      'M 148 276 C 144 282 138 292 132 304 C 126 316 120 328 116 338 C 113 346 112 352 113 358'
    ], a);
    // Left leg — inner thigh
    pp(g, [
      'M 166 280 C 162 288 156 300 148 314 C 142 326 136 336 132 344 C 130 350 130 354 132 358'
    ], a);
    // Left ankle/bootie connection
    pp(g, [
      'M 113 358 C 114 362 118 366 124 368 C 128 369 132 368 134 366 C 133 362 132 360 132 358'
    ], a);
    // Right leg — thigh
    pp(g, [
      'M 214 276 C 218 282 224 292 230 304 C 236 316 242 328 246 338 C 249 346 250 352 249 358'
    ], a);
    // Right leg — inner thigh
    pp(g, [
      'M 196 280 C 200 288 206 300 214 314 C 220 326 226 336 230 344 C 232 350 232 354 230 358'
    ], a);
    // Right ankle/bootie connection
    pp(g, [
      'M 249 358 C 248 362 244 366 238 368 C 234 369 230 368 228 366 C 229 362 230 360 230 358'
    ], a);
    // Diaper/bloomer waistband line
    pp(g, [
      'M 140 268 C 148 264 160 262 172 261 C 180 260 188 260 196 261 C 208 262 220 264 228 268'
    ], a);
    // Belly button area — subtle indent
    pp(g, [
      'M 178 208 C 177 210 177 213 178 215 C 179 217 181 217 182 215 C 183 213 183 210 182 208'
    ], a);
  },

  // ================================================================
  // Layer 2: Face details — photorealistic baby features
  // Large dark eyes, button nose, tiny mouth, chubby cheeks, ears
  // ================================================================
  (g, a) => {
    // === LEFT EYE (baby's right, our left) — large, dark, expressive ===
    // Upper eyelid — smooth curve with slight epicanthal fold
    pp(g, [
      'M 148 96 C 150 90 155 86 161 84 C 167 82 173 83 178 86 C 180 88 181 90 181 93'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 148 96 C 148 100 150 105 154 108 C 158 111 163 112 168 112 C 173 112 177 110 180 107 C 181 105 181 102 181 100'
    ], a);
    // Iris outline — large, nearly filling the eye opening
    pp(g, [
      'M 155 97 C 155 90 160 85 167 85 C 174 85 179 90 179 97 C 179 104 174 109 167 109 C 160 109 155 104 155 97 Z'
    ], a);
    // Pupil — large, dark
    fe(g, 'circle', {cx: 167, cy: 97, r: 6, fill: '#0D0D0D'}, a);
    // Upper eyelid thickness line
    pp(g, [
      'M 149 95 C 152 89 158 85 164 84 C 170 83 176 84 180 87'
    ], a);
    // Lower eyelash line — subtle
    pps(g, [
      'M 152 107 C 155 110 160 112 166 112 C 172 112 177 110 180 106'
    ], a, 0.5, '#4A3728');
    // Upper eyelashes — fine, short baby lashes
    pps(g, [
      'M 155 87 C 154 84 155 83 156 84',
      'M 160 85 C 159 82 160 81 161 82',
      'M 166 84 C 166 81 167 80 168 81',
      'M 172 84 C 173 81 174 80 175 82',
      'M 177 86 C 179 83 180 83 180 85'
    ], a, 0.4, '#5D4037');
    // Tear duct — inner corner detail
    pp(g, [
      'M 149 96 C 148 97 148 98 149 99 C 150 99 150 98 150 97'
    ], a);

    // === RIGHT EYE — mirror of left ===
    // Upper eyelid
    pp(g, [
      'M 212 96 C 210 90 205 86 199 84 C 193 82 187 83 182 86 C 180 88 179 90 179 93'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 212 96 C 212 100 210 105 206 108 C 202 111 197 112 192 112 C 187 112 183 110 180 107 C 179 105 179 102 179 100'
    ], a);
    // Iris outline
    pp(g, [
      'M 185 97 C 185 90 190 85 197 85 C 204 85 209 90 209 97 C 209 104 204 109 197 109 C 190 109 185 104 185 97 Z'
    ], a);
    // Pupil
    fe(g, 'circle', {cx: 197, cy: 97, r: 6, fill: '#0D0D0D'}, a);
    // Upper eyelid thickness
    pp(g, [
      'M 211 95 C 208 89 202 85 196 84 C 190 83 184 84 180 87'
    ], a);
    // Lower eyelash line
    pps(g, [
      'M 208 107 C 205 110 200 112 194 112 C 188 112 183 110 180 106'
    ], a, 0.5, '#4A3728');
    // Upper eyelashes
    pps(g, [
      'M 205 87 C 206 84 205 83 204 84',
      'M 200 85 C 201 82 200 81 199 82',
      'M 194 84 C 194 81 193 80 192 81',
      'M 188 84 C 187 81 186 80 185 82',
      'M 183 86 C 181 83 180 83 180 85'
    ], a, 0.4, '#5D4037');
    // Tear duct
    pp(g, [
      'M 211 96 C 212 97 212 98 211 99 C 210 99 210 98 210 97'
    ], a);

    // === EYEBROWS — very faint baby eyebrows ===
    pps(g, [
      'M 151 80 C 156 77 163 76 170 77 C 175 78 178 79 179 80'
    ], a, 0.6, '#C4A882');
    pps(g, [
      'M 209 80 C 204 77 197 76 190 77 C 185 78 182 79 181 80'
    ], a, 0.6, '#C4A882');

    // === NOSE — small button nose with nostrils ===
    // Bridge — very subtle
    pps(g, [
      'M 178 110 C 177 114 176 118 176 122'
    ], a, 0.6, '#C4A882');
    pps(g, [
      'M 182 110 C 183 114 184 118 184 122'
    ], a, 0.6, '#C4A882');
    // Nose tip — round, soft
    pp(g, [
      'M 174 124 C 173 126 174 129 176 130 C 178 131 180 132 182 131 C 184 130 186 129 187 127 C 188 125 187 123 186 122'
    ], a);
    // Left nostril
    pp(g, [
      'M 174 127 C 172 128 172 130 173 131 C 174 132 176 131 176 130'
    ], a);
    // Right nostril
    pp(g, [
      'M 186 127 C 188 128 188 130 187 131 C 186 132 184 131 184 130'
    ], a);
    // Nostril shadow shapes
    pps(g, [
      'M 174 128 C 173 129 173 130 174 131',
      'M 186 128 C 187 129 187 130 186 131'
    ], a, 0.4, '#C49A7A');

    // === MOUTH — small, slightly parted baby lips ===
    // Upper lip — cupid's bow
    pp(g, [
      'M 170 139 C 172 137 175 136 178 137 C 179 137 180 138 180 138 C 180 138 181 137 182 137 C 185 136 188 137 190 139'
    ], a);
    // Lower lip — fuller
    pp(g, [
      'M 171 140 C 173 143 176 145 180 145 C 184 145 187 143 189 140'
    ], a);
    // Lip parting line
    pp(g, [
      'M 172 139 C 175 140 178 140 180 140 C 182 140 185 140 188 139'
    ], a);
    // Philtrum — groove above upper lip
    pps(g, [
      'M 178 132 C 178 134 179 136 179 137',
      'M 182 132 C 182 134 181 136 181 137'
    ], a, 0.4, '#D4A68A');

    // === CHIN — soft, round baby chin ===
    pps(g, [
      'M 168 148 C 172 152 176 154 180 154 C 184 154 188 152 192 148'
    ], a, 0.5, '#D4A68A');

    // === LEFT EAR ===
    pp(g, [
      'M 118 90 C 114 86 109 88 107 93 C 105 98 105 104 107 109 C 109 114 113 117 118 116 C 120 115 121 113 120 110'
    ], a);
    // Ear inner fold — helix
    pp(g, [
      'M 116 92 C 113 94 111 98 111 103 C 111 108 113 112 116 114'
    ], a);
    // Ear canal hint
    pps(g, [
      'M 114 100 C 113 102 113 105 114 107'
    ], a, 0.5, '#D4A88A');
    // Tragus
    pp(g, [
      'M 117 100 C 118 102 118 104 117 106'
    ], a);

    // === RIGHT EAR ===
    pp(g, [
      'M 242 90 C 246 86 251 88 253 93 C 255 98 255 104 253 109 C 251 114 247 117 242 116 C 240 115 239 113 240 110'
    ], a);
    // Ear inner fold
    pp(g, [
      'M 244 92 C 247 94 249 98 249 103 C 249 108 247 112 244 114'
    ], a);
    // Ear canal hint
    pps(g, [
      'M 246 100 C 247 102 247 105 246 107'
    ], a, 0.5, '#D4A88A');
    // Tragus
    pp(g, [
      'M 243 100 C 242 102 242 104 243 106'
    ], a);

    // === FOREHEAD CREASES — very subtle baby wrinkles ===
    pps(g, [
      'M 155 72 C 162 70 172 69 180 69 C 188 69 198 70 205 72'
    ], a, 0.3, '#E8C4A8');
    pps(g, [
      'M 158 76 C 165 74 174 73 180 73 C 186 73 195 74 202 76'
    ], a, 0.3, '#E8C4A8');
  },

  // ================================================================
  // Layer 3: Hair — very fine, wispy baby hair
  // Barely there — just a thin layer of downy fuzz
  // ================================================================
  (g, a) => {
    // Central crown area — slightly darker concentration
    pps(g, [
      'M 168 50 C 172 46 177 44 180 44 C 183 44 188 46 192 50'
    ], a, 0.8, '#A08060');
    pps(g, [
      'M 164 52 C 170 47 176 45 180 45 C 184 45 190 47 196 52'
    ], a, 0.7, '#A08060');

    // Fine wispy strands — left side
    pps(g, ['M 148 62 C 153 54 160 49 168 48'], a, 0.4, '#B89870');
    pps(g, ['M 145 66 C 150 58 158 52 166 50'], a, 0.4, '#B89870');
    pps(g, ['M 142 70 C 148 62 156 55 164 52'], a, 0.3, '#C4A880');
    pps(g, ['M 140 74 C 146 66 154 58 162 54'], a, 0.3, '#C4A880');
    pps(g, ['M 138 78 C 144 70 152 62 160 58'], a, 0.3, '#C4A880');

    // Fine wispy strands — right side
    pps(g, ['M 212 62 C 207 54 200 49 192 48'], a, 0.4, '#B89870');
    pps(g, ['M 215 66 C 210 58 202 52 194 50'], a, 0.4, '#B89870');
    pps(g, ['M 218 70 C 212 62 204 55 196 52'], a, 0.3, '#C4A880');
    pps(g, ['M 220 74 C 214 66 206 58 198 54'], a, 0.3, '#C4A880');
    pps(g, ['M 222 78 C 216 70 208 62 200 58'], a, 0.3, '#C4A880');

    // Top strands — center
    pps(g, ['M 170 48 C 174 43 178 42 180 42 C 182 42 186 43 190 48'], a, 0.5, '#A08060');
    pps(g, ['M 166 50 C 172 44 178 43 180 43 C 182 43 188 44 194 50'], a, 0.4, '#A88868');
    pps(g, ['M 162 54 C 170 46 176 44 180 44 C 184 44 190 46 198 54'], a, 0.3, '#B89870');

    // Hairline edge — very soft transition
    pps(g, [
      'M 136 80 C 142 74 150 68 160 63 C 168 59 174 56 180 55 C 186 56 192 59 200 63 C 210 68 218 74 224 80'
    ], a, 0.3, '#C8AA88');

    // Individual wispy hairs at temples
    pps(g, ['M 132 84 C 136 78 142 72 148 68'], a, 0.2, '#C8AA88');
    pps(g, ['M 130 88 C 134 82 140 76 146 72'], a, 0.2, '#C8AA88');
    pps(g, ['M 228 84 C 224 78 218 72 212 68'], a, 0.2, '#C8AA88');
    pps(g, ['M 230 88 C 226 82 220 76 214 72'], a, 0.2, '#C8AA88');

    // Subtle peach fuzz on forehead
    pps(g, [
      'M 155 70 C 158 68 162 66 166 65',
      'M 194 65 C 198 66 202 68 205 70'
    ], a, 0.2, '#D8C0A0');
  },

  // ================================================================
  // Layer 4: Clothing — knitted cardigan, bloomers, booties
  // Realistic knit texture with cable patterns and fabric folds
  // ================================================================
  (g, a) => {
    // === CARDIGAN — open front, showing belly ===
    // Neckline — wide collar
    pp(g, [
      'M 148 160 C 152 164 158 168 166 170 C 172 172 178 172 180 172 C 182 172 188 172 194 170 C 202 168 208 164 212 160'
    ], a);
    // Collar fold left
    pp(g, [
      'M 148 160 C 146 162 144 165 143 168 C 142 172 143 176 146 178'
    ], a);
    // Collar fold right
    pp(g, [
      'M 212 160 C 214 162 216 165 217 168 C 218 172 217 176 214 178'
    ], a);
    // Left cardigan front edge (open, showing belly)
    pp(g, [
      'M 146 178 C 144 186 142 196 142 208 C 142 220 143 232 146 244 C 148 252 152 260 158 268 C 162 274 166 278 170 280'
    ], a);
    // Right cardigan front edge
    pp(g, [
      'M 214 178 C 216 186 218 196 218 208 C 218 220 217 232 214 244 C 212 252 208 260 202 268 C 198 274 194 278 190 280'
    ], a);

    // === KNIT TEXTURE — V-stitch chevron pattern (left side) ===
    // Row 1
    pps(g, ['M 128 178 L 140 186 L 146 178'], a, 0.5, '#B09070');
    pps(g, ['M 125 186 L 138 194 L 144 186'], a, 0.5, '#B09070');
    // Row 2
    pps(g, ['M 124 194 L 136 202 L 142 194'], a, 0.5, '#B09070');
    pps(g, ['M 122 202 L 135 210 L 142 202'], a, 0.5, '#B09070');
    // Row 3
    pps(g, ['M 121 210 L 134 218 L 142 210'], a, 0.5, '#B09070');
    pps(g, ['M 120 218 L 134 226 L 142 218'], a, 0.5, '#B09070');
    // Row 4
    pps(g, ['M 121 226 L 135 234 L 143 226'], a, 0.5, '#B09070');
    pps(g, ['M 122 234 L 136 242 L 144 234'], a, 0.5, '#B09070');
    // Row 5
    pps(g, ['M 124 242 L 138 250 L 146 242'], a, 0.5, '#B09070');
    pps(g, ['M 126 250 L 140 258 L 148 250'], a, 0.5, '#B09070');
    // Row 6
    pps(g, ['M 130 258 L 144 266 L 152 258'], a, 0.5, '#B09070');

    // === KNIT TEXTURE — V-stitch chevron pattern (right side) ===
    pps(g, ['M 232 178 L 220 186 L 214 178'], a, 0.5, '#B09070');
    pps(g, ['M 235 186 L 222 194 L 216 186'], a, 0.5, '#B09070');
    pps(g, ['M 236 194 L 224 202 L 218 194'], a, 0.5, '#B09070');
    pps(g, ['M 238 202 L 225 210 L 218 202'], a, 0.5, '#B09070');
    pps(g, ['M 239 210 L 226 218 L 218 210'], a, 0.5, '#B09070');
    pps(g, ['M 240 218 L 226 226 L 218 218'], a, 0.5, '#B09070');
    pps(g, ['M 239 226 L 225 234 L 217 226'], a, 0.5, '#B09070');
    pps(g, ['M 238 234 L 224 242 L 216 234'], a, 0.5, '#B09070');
    pps(g, ['M 236 242 L 222 250 L 214 242'], a, 0.5, '#B09070');
    pps(g, ['M 234 250 L 220 258 L 212 250'], a, 0.5, '#B09070');
    pps(g, ['M 230 258 L 216 266 L 208 258'], a, 0.5, '#B09070');

    // === SLEEVE DETAILS ===
    // Left sleeve — wrinkles at elbow/wrist
    pp(g, [
      'M 130 172 C 126 176 122 180 118 185 C 114 190 110 196 108 200'
    ], a);
    pp(g, [
      'M 138 178 C 134 182 130 186 126 192 C 122 198 118 204 116 208'
    ], a);
    // Left sleeve cuff ribbing
    pps(g, [
      'M 88 216 C 86 218 84 220 82 222',
      'M 92 218 C 90 220 88 222 86 224',
      'M 96 220 C 94 222 92 224 90 226'
    ], a, 0.4, '#A88868');
    // Right sleeve
    pp(g, [
      'M 230 172 C 234 176 238 180 242 185 C 246 190 250 196 252 200'
    ], a);
    pp(g, [
      'M 222 178 C 226 182 230 186 234 192 C 238 198 242 204 244 208'
    ], a);
    // Right sleeve cuff ribbing
    pps(g, [
      'M 272 216 C 274 218 276 220 278 222',
      'M 268 218 C 270 220 272 222 274 224',
      'M 264 220 C 266 222 268 224 270 226'
    ], a, 0.4, '#A88868');

    // === KNIT BLOOMERS/SHORTS ===
    // Waistband ribbing
    pps(g, [
      'M 142 266 C 155 263 170 261 180 260 C 190 261 205 263 218 266'
    ], a, 0.6, '#A88868');
    pps(g, [
      'M 143 269 C 156 266 170 264 180 263 C 190 264 204 266 217 269'
    ], a, 0.6, '#A88868');
    // Left bloomer knit rows
    pps(g, [
      'M 148 278 L 154 286 L 140 286',
      'M 144 290 L 150 298 L 136 298',
      'M 138 302 L 144 310 L 130 310',
      'M 132 314 L 138 322 L 124 322',
      'M 126 326 L 132 334 L 118 334'
    ], a, 0.5, '#B09070');
    // Right bloomer knit rows
    pps(g, [
      'M 212 278 L 206 286 L 220 286',
      'M 216 290 L 210 298 L 224 298',
      'M 222 302 L 216 310 L 230 310',
      'M 228 314 L 222 322 L 236 322',
      'M 234 326 L 228 334 L 242 334'
    ], a, 0.5, '#B09070');

    // === BOOTIES ===
    // Left bootie outline
    pp(g, [
      'M 113 358 C 110 360 106 362 102 362 C 97 362 93 360 91 356 C 89 352 90 346 93 342 C 96 338 100 336 105 336 C 110 336 114 338 117 342'
    ], a);
    // Left bootie cuff ribbing
    pps(g, [
      'M 114 356 C 112 354 110 354 108 356',
      'M 120 358 C 118 356 116 356 114 358',
      'M 126 360 C 124 358 122 358 120 360'
    ], a, 0.4, '#A88868');
    // Left bootie sole detail
    pps(g, ['M 94 350 C 98 348 102 348 106 350'], a, 0.3, '#A88868');
    // Right bootie outline
    pp(g, [
      'M 249 358 C 252 360 256 362 260 362 C 265 362 269 360 271 356 C 273 352 272 346 269 342 C 266 338 262 336 257 336 C 252 336 248 338 245 342'
    ], a);
    // Right bootie cuff ribbing
    pps(g, [
      'M 248 356 C 250 354 252 354 254 356',
      'M 242 358 C 244 356 246 356 248 358',
      'M 236 360 C 238 358 240 358 242 360'
    ], a, 0.4, '#A88868');
    // Right bootie sole detail
    pps(g, ['M 268 350 C 264 348 260 348 256 350'], a, 0.3, '#A88868');

    // Cardigan button at neckline
    fe(g, 'circle', {cx: 148, cy: 162, r: 3, fill: 'none', stroke: '#8B7355', 'stroke-width': '0.8'}, a);
  },

  // ================================================================
  // Layer 5: Hands, Letter M, and Rosary/Bracelet
  // Chubby baby hands with dimpled knuckles
  // ================================================================
  (g, a) => {
    // === LEFT HAND — open, chubby baby fingers holding M block ===
    // Palm — soft, padded
    pp(g, [
      'M 72 244 C 68 240 62 234 56 230 C 50 226 44 224 40 226 C 36 228 34 232 36 238 C 38 244 44 248 50 250'
    ], a);
    // Thumb — short, pudgy
    pp(g, [
      'M 72 236 C 76 230 78 224 76 218 C 74 214 70 212 66 216 C 64 220 66 228 68 234'
    ], a);
    // Index finger — curled slightly
    pp(g, [
      'M 58 228 C 54 222 50 216 48 210 C 46 206 48 204 52 206 C 54 208 56 216 58 224'
    ], a);
    // Middle finger
    pp(g, [
      'M 52 230 C 47 224 42 218 40 212 C 38 208 40 206 44 208 C 46 210 48 220 50 226'
    ], a);
    // Ring finger
    pp(g, [
      'M 46 234 C 42 228 38 222 36 218 C 34 214 36 212 40 214 C 42 216 44 226 46 232'
    ], a);
    // Pinky — smallest
    pp(g, [
      'M 42 240 C 38 236 34 232 32 228 C 30 224 32 222 36 224 C 38 226 40 234 42 238'
    ], a);
    // Finger dimples/knuckle creases
    pps(g, [
      'M 56 218 C 55 219 54 219 53 218',
      'M 48 220 C 47 221 46 221 45 220',
      'M 42 224 C 41 225 40 225 39 224',
      'M 38 230 C 37 231 36 231 35 230'
    ], a, 0.3, '#D4A68A');
    // Wrist crease left
    pps(g, [
      'M 68 242 C 72 244 76 244 80 242'
    ], a, 0.4, '#D4A68A');

    // === RIGHT HAND — curled, holding rosary bracelet ===
    // Palm
    pp(g, [
      'M 290 244 C 294 240 300 234 306 230 C 312 226 318 224 322 226 C 326 228 328 232 326 238 C 324 244 318 248 312 250'
    ], a);
    // Fingers curled around bracelet
    pp(g, [
      'M 306 230 C 310 224 314 218 316 212 C 318 208 316 206 312 208 C 310 210 308 218 306 226'
    ], a);
    pp(g, [
      'M 312 232 C 316 226 320 220 322 214 C 324 210 322 208 318 210 C 316 212 314 222 312 228'
    ], a);
    pp(g, [
      'M 316 236 C 320 230 324 224 326 220 C 328 216 326 214 322 216 C 320 218 318 228 316 234'
    ], a);
    // Pinky curled
    pp(g, [
      'M 320 240 C 324 236 326 232 328 228 C 330 224 328 222 324 224 C 322 226 320 234 320 238'
    ], a);
    // Finger dimples right hand
    pps(g, [
      'M 312 220 C 311 221 310 221 309 220',
      'M 318 222 C 317 223 316 223 315 222',
      'M 322 226 C 321 227 320 227 319 226'
    ], a, 0.3, '#D4A68A');
    // Wrist crease right
    pps(g, [
      'M 284 242 C 288 244 292 244 296 242'
    ], a, 0.4, '#D4A68A');

    // === LETTER M — wooden block, 3D perspective ===
    // Front face
    pp(g, [
      'M 158 218 C 158 216 160 214 162 214 L 198 214 C 200 214 202 216 202 218 L 202 258 C 202 260 200 262 198 262 L 162 262 C 160 262 158 260 158 258 Z'
    ], a);
    // 3D top face
    pp(g, [
      'M 158 218 L 162 212 L 206 212 L 202 218'
    ], a);
    // 3D right side face
    pp(g, [
      'M 202 218 L 206 212 L 206 254 L 202 258'
    ], a);
    // Letter M carved into block — serif style
    pp(g, [
      'M 167 254 L 167 226 L 174 240 L 180 232 L 186 240 L 193 226 L 193 254'
    ], a);
    // M serif bases
    pp(g, ['M 165 254 L 169 254', 'M 191 254 L 195 254'], a);
    // M serif tops
    pp(g, ['M 165 226 L 169 226', 'M 191 226 L 195 226'], a);
    // Wood grain texture on M block
    pps(g, [
      'M 160 224 C 170 223 185 223 200 224',
      'M 160 238 C 172 237 188 237 200 238',
      'M 160 248 C 174 247 190 247 200 248'
    ], a, 0.2, '#C8B090');

    // === ROSARY/BRACELET — beaded with cross ===
    // String curving from right hand
    pps(g, [
      'M 310 240 C 314 248 318 260 320 274 C 322 288 318 302 310 312 C 302 322 290 328 278 326 C 270 324 264 320 262 314'
    ], a, 0.6, '#8B7355');
    // Beads — alternating red and blue, small
    fe(g, 'circle', {cx: 312, cy: 250, r: 4, fill: '#1565C0'}, a);
    fe(g, 'circle', {cx: 316, cy: 260, r: 4, fill: '#C62828'}, a);
    fe(g, 'circle', {cx: 319, cy: 270, r: 4, fill: '#1565C0'}, a);
    fe(g, 'circle', {cx: 320, cy: 280, r: 4, fill: '#C62828'}, a);
    fe(g, 'circle', {cx: 318, cy: 290, r: 4, fill: '#1565C0'}, a);
    fe(g, 'circle', {cx: 314, cy: 300, r: 4, fill: '#C62828'}, a);
    fe(g, 'circle', {cx: 308, cy: 308, r: 4, fill: '#1565C0'}, a);
    fe(g, 'circle', {cx: 300, cy: 316, r: 4, fill: '#C62828'}, a);
    fe(g, 'circle', {cx: 290, cy: 322, r: 4, fill: '#1565C0'}, a);
    fe(g, 'circle', {cx: 280, cy: 326, r: 4, fill: '#C62828'}, a);
    fe(g, 'circle', {cx: 270, cy: 322, r: 4, fill: '#1565C0'}, a);
    // Cross at end of rosary
    pp(g, ['M 262 314 L 262 336'], a);
    pp(g, ['M 254 324 L 270 324'], a);
    // Cross detail — ends
    pp(g, [
      'M 260 314 L 264 314',
      'M 260 336 L 264 336',
      'M 254 322 L 254 326',
      'M 270 322 L 270 326'
    ], a);
    // Cross center detail
    pps(g, ['M 261 320 L 263 320 L 263 328 L 261 328 Z'], a, 0.4, '#8B7355');
  },

  // ================================================================
  // Layer 6: Background — striped blanket, scattered pompons,
  // picture frame corner, fabric wrinkles
  // ================================================================
  (g, a) => {
    // Blanket outer edge
    pp(g, ['M 15 10 L 345 10 L 345 440 L 15 440 Z'], a);
    // Blanket inner fold line
    pps(g, ['M 18 13 L 342 13 L 342 437 L 18 437 Z'], a, 0.4, '#C8C4BE');

    // Blanket horizontal stripe pairs (thin gray stripes on white)
    // Stripe pair 1
    pp(g, ['M 15 42 L 345 42', 'M 15 48 L 345 48'], a);
    // Stripe pair 2
    pp(g, ['M 15 82 L 345 82', 'M 15 88 L 345 88'], a);
    // Stripe pair 3
    pp(g, ['M 15 122 L 345 122', 'M 15 128 L 345 128'], a);
    // Stripe pair 4
    pp(g, ['M 15 162 L 345 162', 'M 15 168 L 345 168'], a);
    // Stripe pair 5
    pp(g, ['M 15 202 L 345 202', 'M 15 208 L 345 208'], a);
    // Stripe pair 6
    pp(g, ['M 15 242 L 345 242', 'M 15 248 L 345 248'], a);
    // Stripe pair 7
    pp(g, ['M 15 282 L 345 282', 'M 15 288 L 345 288'], a);
    // Stripe pair 8
    pp(g, ['M 15 322 L 345 322', 'M 15 328 L 345 328'], a);
    // Stripe pair 9
    pp(g, ['M 15 362 L 345 362', 'M 15 368 L 345 368'], a);
    // Stripe pair 10
    pp(g, ['M 15 402 L 345 402', 'M 15 408 L 345 408'], a);

    // Fabric wrinkles radiating from baby — soft creases
    pps(g, [
      'M 100 160 C 85 155 65 148 45 142',
      'M 95 200 C 75 198 55 195 35 190',
      'M 260 160 C 275 155 295 148 315 142',
      'M 265 200 C 285 198 305 195 325 190',
      'M 105 340 C 85 350 60 362 40 375',
      'M 255 340 C 275 350 300 362 320 375'
    ], a, 0.3, '#D0CCC6');

    // === POMPONS (6 colorful felt balls scattered around baby) ===
    // Blue pompon — top right area
    pp(g, [
      'M 298 60 C 302 54 310 52 316 56 C 322 60 324 68 320 74 C 316 80 308 82 302 78 C 296 74 294 66 298 60 Z'
    ], a);
    // Pompon fuzzy edge detail
    pps(g, [
      'M 300 58 C 296 56 295 60 298 62',
      'M 320 56 C 324 58 323 62 320 60',
      'M 322 74 C 326 76 324 80 322 78',
      'M 298 76 C 294 78 295 82 298 80'
    ], a, 0.3, '#1565C0');

    // Red/magenta pompon — top left area
    pp(g, [
      'M 55 75 C 59 69 67 67 73 71 C 79 75 81 83 77 89 C 73 95 65 97 59 93 C 53 89 51 81 55 75 Z'
    ], a);
    pps(g, [
      'M 57 73 C 53 71 52 75 55 77',
      'M 77 71 C 81 73 80 77 77 75'
    ], a, 0.3, '#C62828');

    // Yellow pompon — bottom right area
    pp(g, [
      'M 275 380 C 279 374 287 372 293 376 C 299 380 301 388 297 394 C 293 400 285 402 279 398 C 273 394 271 386 275 380 Z'
    ], a);

    // Green pompon — bottom left area
    pp(g, [
      'M 70 365 C 74 359 82 357 88 361 C 94 365 96 373 92 379 C 88 385 80 387 74 383 C 68 379 66 371 70 365 Z'
    ], a);

    // Teal/cyan pompon — mid right
    pp(g, [
      'M 320 285 C 324 279 332 277 338 281 C 344 285 346 293 342 299 C 338 305 330 307 324 303 C 318 299 316 291 320 285 Z'
    ], a);

    // Lime pompon — near left leg
    pp(g, [
      'M 82 310 C 86 304 94 302 100 306 C 106 310 108 318 104 324 C 100 330 92 332 86 328 C 80 324 78 316 82 310 Z'
    ], a);

    // === PICTURE FRAME CORNER — top left ===
    pp(g, [
      'M 15 10 L 15 55 M 15 10 L 60 10'
    ], a);
    pp(g, [
      'M 20 15 L 20 50 M 20 15 L 55 15'
    ], a);
    // Frame inner bevel
    pp(g, ['M 22 17 L 52 47'], a, lt);
    pp(g, [
      'M 24 19 L 24 48 M 24 19 L 53 19'
    ], a, lt);
  },

  // ================================================================
  // Layer 7: Color fills — FIGURES
  // Photorealistic skin tones with gradients, knit outfit fills
  // ================================================================
  (g, a, defs) => {
    // === SKIN GRADIENTS ===
    // Head skin gradient — warm with subtle variation
    const headSkin = gd(defs, 'r', [
      [0, '#FCDCC8', 1],
      [0.4, '#F8D0B8', 1],
      [0.7, '#F2C4A8', 1],
      [1, '#E8B498', 1]
    ], {cx: 180, cy: 95, r: 70});

    // Forehead highlight gradient
    const foreheadHi = gd(defs, 'r', [
      [0, '#FEE8D8', 0.8],
      [0.5, '#FEE8D8', 0.4],
      [1, '#FEE8D8', 0]
    ], {cx: 180, cy: 72, r: 30});

    // Cheek blush gradient — left
    const leftCheek = gd(defs, 'r', [
      [0, '#F4A898', 0.6],
      [0.5, '#F4A898', 0.3],
      [1, '#F4A898', 0]
    ], {cx: 150, cy: 120, r: 22});

    // Cheek blush gradient — right
    const rightCheek = gd(defs, 'r', [
      [0, '#F4A898', 0.6],
      [0.5, '#F4A898', 0.3],
      [1, '#F4A898', 0]
    ], {cx: 210, cy: 120, r: 22});

    // Body skin gradient
    const bodySkin = gd(defs, 'l', [
      [0, '#F6D0B4', 1],
      [0.3, '#FCDCC8', 1],
      [0.7, '#FCDCC8', 1],
      [1, '#F2C4A8', 1]
    ], {x1: 140, y1: 180, x2: 220, y2: 180});

    // Belly skin gradient — warmer center
    const bellySkin = gd(defs, 'r', [
      [0, '#FCE0CC', 1],
      [0.6, '#F8D4BC', 1],
      [1, '#F0C4A4', 1]
    ], {cx: 180, cy: 210, r: 40});

    // Arm skin gradient
    const armSkinL = gd(defs, 'l', [
      [0, '#F6D0B4', 1],
      [0.5, '#FCDCC8', 1],
      [1, '#F2C4A8', 1]
    ], {x1: 140, y1: 180, x2: 60, y2: 240});

    const armSkinR = gd(defs, 'l', [
      [0, '#F6D0B4', 1],
      [0.5, '#FCDCC8', 1],
      [1, '#F2C4A8', 1]
    ], {x1: 220, y1: 180, x2: 300, y2: 240});

    // Hand skin — slightly pinker
    const handSkin = gd(defs, 'r', [
      [0, '#FCDCC8', 1],
      [0.5, '#F8CEB8', 1],
      [1, '#F0C0A4', 1]
    ], {cx: 55, cy: 235, r: 25});

    const handSkinR = gd(defs, 'r', [
      [0, '#FCDCC8', 1],
      [0.5, '#F8CEB8', 1],
      [1, '#F0C0A4', 1]
    ], {cx: 315, cy: 235, r: 25});

    // === OUTFIT GRADIENTS ===
    // Knit cardigan gradient — warm beige/taupe
    const knitGrad = gd(defs, 'l', [
      [0, '#D4B896', 1],
      [0.3, '#C8AA88', 1],
      [0.6, '#BEA080', 1],
      [1, '#B09470', 1]
    ], {x1: 120, y1: 160, x2: 240, y2: 280});

    // Bloomer gradient
    const bloomerGrad = gd(defs, 'l', [
      [0, '#CCAE8E', 1],
      [0.5, '#C4A482', 1],
      [1, '#B8987A', 1]
    ], {x1: 130, y1: 260, x2: 230, y2: 360});

    // Bootie gradient
    const bootieGrad = gd(defs, 'r', [
      [0, '#C8AA88', 1],
      [0.5, '#BEA080', 1],
      [1, '#B09470', 1]
    ], {cx: 100, cy: 350, r: 20});

    const bootieGradR = gd(defs, 'r', [
      [0, '#C8AA88', 1],
      [0.5, '#BEA080', 1],
      [1, '#B09470', 1]
    ], {cx: 262, cy: 350, r: 20});

    // === HEAD SKIN FILL ===
    fl(g, 'M 180 46 C 192 44 206 46 218 52 C 228 57 236 65 241 75 C 246 85 248 96 247 107 C 246 118 242 128 236 136 C 230 144 222 150 213 154 C 204 158 194 160 184 160 C 174 160 163 158 154 155 C 145 151 137 145 131 137 C 125 129 120 119 118 109 C 116 98 117 87 121 77 C 125 67 132 58 141 52 C 150 47 162 44 175 44 C 177 44 179 45 180 46 Z', headSkin, a);

    // Forehead highlight wash
    fo(g, 'M 155 60 C 162 55 172 52 180 52 C 188 52 198 55 205 60 C 210 65 212 72 210 80 C 207 88 198 92 180 92 C 162 92 153 88 150 80 C 148 72 150 65 155 60 Z', foreheadHi, 0.6, a);

    // Left cheek blush
    fo(g, 'M 130 108 C 140 100 160 100 170 108 C 178 116 178 132 170 140 C 160 148 140 148 130 140 C 122 132 122 116 130 108 Z', leftCheek, 0.5, a);

    // Right cheek blush
    fo(g, 'M 190 108 C 200 100 220 100 230 108 C 238 116 238 132 230 140 C 220 148 200 148 190 140 C 182 132 182 116 190 108 Z', rightCheek, 0.5, a);

    // Left ear skin fill
    fl(g, 'M 118 90 C 114 86 109 88 107 93 C 105 98 105 104 107 109 C 109 114 113 117 118 116 C 120 115 121 110 120 105 C 119 98 118 94 118 90 Z', '#F0C4A8', a);

    // Right ear skin fill
    fl(g, 'M 242 90 C 246 86 251 88 253 93 C 255 98 255 104 253 109 C 251 114 247 117 242 116 C 240 115 239 110 240 105 C 241 98 242 94 242 90 Z', '#F0C4A8', a);

    // Neck skin
    fl(g, 'M 162 155 C 165 160 170 163 176 164 C 180 165 184 165 188 164 C 194 162 198 160 200 156 C 204 160 206 165 204 170 C 202 175 196 178 180 178 C 164 178 158 175 156 170 C 154 165 156 160 162 155 Z', '#F0C0A4', a);

    // === LEFT ARM SKIN FILL ===
    fl(g, 'M 138 172 C 130 174 120 178 110 184 C 100 190 90 198 82 206 C 76 212 72 218 70 224 C 68 228 66 232 66 236 C 66 240 68 243 72 244 C 78 244 84 226 90 222 C 98 216 108 208 118 200 C 128 192 138 186 146 182 Z', armSkinL, a);

    // Left hand skin fill
    fl(g, 'M 72 244 C 68 240 62 234 56 230 C 50 226 44 224 40 226 C 36 228 34 232 36 238 C 38 244 44 248 50 250 C 56 250 64 248 72 244 Z', handSkin, a);
    // Left fingers skin fill
    fl(g, 'M 76 218 C 78 224 76 236 72 236 C 64 234 32 222 30 228 C 28 234 36 248 50 250 C 62 252 76 244 76 236 Z', handSkin, a);

    // === RIGHT ARM SKIN FILL ===
    fl(g, 'M 224 172 C 232 174 242 178 252 184 C 262 190 272 198 280 206 C 286 212 290 218 292 224 C 294 228 296 232 296 236 C 296 240 294 243 290 244 C 284 244 278 226 272 222 C 264 216 254 208 244 200 C 234 192 224 186 216 182 Z', armSkinR, a);

    // Right hand skin fill
    fl(g, 'M 290 244 C 294 240 300 234 306 230 C 312 226 318 224 322 226 C 326 228 328 232 326 238 C 324 244 318 248 312 250 C 306 250 298 248 290 244 Z', handSkinR, a);
    // Right fingers skin fill
    fl(g, 'M 306 230 C 310 224 318 212 316 208 C 314 204 308 206 306 226 C 304 236 310 248 312 250 C 318 252 328 244 330 228 C 332 218 324 208 314 210 C 310 212 306 220 306 230 Z', handSkinR, a);

    // === BELLY (exposed between open cardigan) ===
    fl(g, 'M 146 178 C 150 174 160 172 170 171 C 178 170 184 170 192 171 C 202 172 210 174 214 178 L 218 208 C 218 220 217 232 214 244 C 212 250 208 256 202 262 C 196 266 188 268 180 268 C 172 268 164 266 158 262 C 152 256 148 250 146 244 C 143 232 142 220 142 208 Z', bellySkin, a);

    // Belly button
    fe(g, 'circle', {cx: 180, cy: 210, r: 3, fill: '#E0A888'}, a);
    // Belly button shadow ring
    feo(g, 'circle', {cx: 180, cy: 210, r: 4, fill: '#D09878', stroke: 'none'}, 0.3, a);

    // === CARDIGAN FILLS ===
    // Left cardigan panel
    fl(g, 'M 148 160 C 146 162 143 168 142 178 C 142 186 140 196 138 208 C 136 220 134 232 134 244 C 134 252 138 260 144 268 C 148 274 154 278 160 282 C 164 284 168 280 170 276 C 166 274 162 270 158 264 C 152 256 148 248 146 240 C 143 228 142 216 142 204 C 142 192 144 180 146 172 C 146 168 148 164 148 160 Z', knitGrad, a);
    // Right cardigan panel
    fl(g, 'M 212 160 C 214 162 217 168 218 178 C 218 186 220 196 222 208 C 224 220 226 232 226 244 C 226 252 222 260 216 268 C 212 274 206 278 200 282 C 196 284 192 280 190 276 C 194 274 198 270 202 264 C 208 256 212 248 214 240 C 217 228 218 216 218 204 C 218 192 216 180 214 172 C 214 168 212 164 212 160 Z', knitGrad, a);

    // Left sleeve fill
    fl(g, 'M 138 172 C 130 174 118 180 108 188 C 98 196 88 206 80 216 C 78 220 76 224 78 228 C 80 230 84 228 88 224 C 96 216 106 206 116 198 C 126 190 136 184 146 180 Z', knitGrad, a);
    // Right sleeve fill
    fl(g, 'M 224 172 C 232 174 244 180 254 188 C 264 196 274 206 282 216 C 284 220 286 224 284 228 C 282 230 278 228 274 224 C 266 216 256 206 246 198 C 236 190 226 184 216 180 Z', knitGrad, a);

    // === BLOOMER FILLS ===
    // Left bloomer
    fl(g, 'M 148 276 C 144 282 138 292 132 304 C 126 316 120 328 116 338 C 113 346 112 352 113 358 C 114 362 118 366 124 368 C 128 369 132 368 134 366 C 133 360 132 354 132 344 C 136 336 142 326 148 314 C 156 300 162 288 166 280 Z', bloomerGrad, a);
    // Right bloomer
    fl(g, 'M 214 276 C 218 282 224 292 230 304 C 236 316 242 328 246 338 C 249 346 250 352 249 358 C 248 362 244 366 238 368 C 234 369 230 368 228 366 C 229 360 230 354 230 344 C 226 336 220 326 214 314 C 206 300 200 288 196 280 Z', bloomerGrad, a);

    // === BOOTIE FILLS ===
    // Left bootie
    fl(g, 'M 113 358 C 110 360 106 362 102 362 C 97 362 93 360 91 356 C 89 352 90 346 93 342 C 96 338 100 336 105 336 C 110 336 114 338 117 342 C 115 348 114 354 113 358 Z', bootieGrad, a);
    // Right bootie
    fl(g, 'M 249 358 C 252 360 256 362 260 362 C 265 362 269 360 271 356 C 273 352 272 346 269 342 C 266 338 262 336 257 336 C 252 336 248 338 245 342 C 247 348 248 354 249 358 Z', bootieGradR, a);

    // === LETTER M BLOCK FILL ===
    // Front face — off-white/cream
    fl(g, 'M 158 218 L 202 218 L 202 258 L 158 258 Z', '#FAF6F0', a);
    // 3D top face — lighter
    fl(g, 'M 158 218 L 162 212 L 206 212 L 202 218 Z', '#FFFFFF', a);
    // 3D right side face — shadowed
    fl(g, 'M 202 218 L 206 212 L 206 254 L 202 258 Z', '#E8E2D8', a);

    // === EYE FILLS ===
    // Eye white — left (slightly blue-white)
    fl(g, 'M 148 96 C 150 90 155 86 161 84 C 167 82 173 83 178 86 C 180 88 181 90 181 93 C 181 100 181 102 180 107 C 177 110 173 112 168 112 C 163 112 158 111 154 108 C 150 105 148 100 148 96 Z', '#F8F8FC', a);
    // Eye white — right
    fl(g, 'M 212 96 C 210 90 205 86 199 84 C 193 82 187 83 182 86 C 180 88 179 90 179 93 C 179 100 179 102 180 107 C 183 110 187 112 192 112 C 197 112 202 111 206 108 C 210 105 212 100 212 96 Z', '#F8F8FC', a);

    // Iris fill — left (dark brown with warm tones)
    const irisGradL = gd(defs, 'r', [
      [0, '#1A0E06', 1],
      [0.4, '#2E1A0E', 1],
      [0.7, '#3E2416', 1],
      [1, '#4A2E1C', 1]
    ], {cx: 167, cy: 97, r: 12});
    fl(g, 'M 155 97 C 155 90 160 85 167 85 C 174 85 179 90 179 97 C 179 104 174 109 167 109 C 160 109 155 104 155 97 Z', irisGradL, a);

    // Iris fill — right
    const irisGradR = gd(defs, 'r', [
      [0, '#1A0E06', 1],
      [0.4, '#2E1A0E', 1],
      [0.7, '#3E2416', 1],
      [1, '#4A2E1C', 1]
    ], {cx: 197, cy: 97, r: 12});
    fl(g, 'M 185 97 C 185 90 190 85 197 85 C 204 85 209 90 209 97 C 209 104 204 109 197 109 C 190 109 185 104 185 97 Z', irisGradR, a);

    // Wispy hair fill — very subtle coverage
    fo(g, 'M 140 74 C 148 62 162 50 180 46 C 198 50 212 62 220 74 C 215 66 205 56 192 50 C 186 48 180 47 180 47 C 180 47 174 48 168 50 C 155 56 145 66 140 74 Z', '#B89870', 0.4, a);

    // Lip color — upper lip
    fl(g, 'M 170 139 C 172 137 175 136 178 137 C 179 137 180 138 180 138 C 180 138 181 137 182 137 C 185 136 188 137 190 139 C 188 139 185 140 180 140 C 175 140 172 139 170 139 Z', '#E8998A', a);
    // Lower lip — slightly fuller, pinker
    fl(g, 'M 171 140 C 173 143 176 145 180 145 C 184 145 187 143 189 140 C 186 140 183 140 180 140 C 177 140 174 140 171 140 Z', '#ECA09A', a);
  },

  // ================================================================
  // Layer 8: Color fills — SCENE
  // Blanket base, stripe fills, pompon fills, frame corner
  // ================================================================
  (g, a, defs) => {
    // Blanket base fill — soft cream/off-white
    const blanketGrad = gd(defs, 'l', [
      [0, '#F8F4EC', 1],
      [0.3, '#FEFCF6', 1],
      [0.7, '#FEFCF6', 1],
      [1, '#F4F0E8', 1]
    ], {x1: 15, y1: 10, x2: 345, y2: 440});
    fl(g, 'M 15 10 L 345 10 L 345 440 L 15 440 Z', blanketGrad, a);

    // Stripe pair fills — soft gray bands
    fl(g, 'M 15 40 L 345 40 L 345 50 L 15 50 Z', '#E2DED8', a);
    fl(g, 'M 15 80 L 345 80 L 345 90 L 15 90 Z', '#E2DED8', a);
    fl(g, 'M 15 120 L 345 120 L 345 130 L 15 130 Z', '#E2DED8', a);
    fl(g, 'M 15 160 L 345 160 L 345 170 L 15 170 Z', '#E2DED8', a);
    fl(g, 'M 15 200 L 345 200 L 345 210 L 15 210 Z', '#E2DED8', a);
    fl(g, 'M 15 240 L 345 240 L 345 250 L 15 250 Z', '#E2DED8', a);
    fl(g, 'M 15 280 L 345 280 L 345 290 L 15 290 Z', '#E2DED8', a);
    fl(g, 'M 15 320 L 345 320 L 345 330 L 15 330 Z', '#E2DED8', a);
    fl(g, 'M 15 360 L 345 360 L 345 370 L 15 370 Z', '#E2DED8', a);
    fl(g, 'M 15 400 L 345 400 L 345 410 L 15 410 Z', '#E2DED8', a);

    // === POMPON FILLS ===
    // Blue pompon — top right
    const bluePomp = gd(defs, 'r', [
      [0, '#42A5F5', 1],
      [0.4, '#1E88E5', 1],
      [0.8, '#1565C0', 1],
      [1, '#0D47A1', 1]
    ], {cx: 306, cy: 64, r: 14});
    fl(g, 'M 298 60 C 302 54 310 52 316 56 C 322 60 324 68 320 74 C 316 80 308 82 302 78 C 296 74 294 66 298 60 Z', bluePomp, a);

    // Red pompon — top left
    const redPomp = gd(defs, 'r', [
      [0, '#EF5350', 1],
      [0.4, '#E53935', 1],
      [0.8, '#C62828', 1],
      [1, '#B71C1C', 1]
    ], {cx: 63, cy: 79, r: 14});
    fl(g, 'M 55 75 C 59 69 67 67 73 71 C 79 75 81 83 77 89 C 73 95 65 97 59 93 C 53 89 51 81 55 75 Z', redPomp, a);

    // Yellow pompon — bottom right
    const yellowPomp = gd(defs, 'r', [
      [0, '#FFEE58', 1],
      [0.4, '#FDD835', 1],
      [0.8, '#F9A825', 1],
      [1, '#F57F17', 1]
    ], {cx: 283, cy: 384, r: 14});
    fl(g, 'M 275 380 C 279 374 287 372 293 376 C 299 380 301 388 297 394 C 293 400 285 402 279 398 C 273 394 271 386 275 380 Z', yellowPomp, a);

    // Green pompon — bottom left
    const greenPomp = gd(defs, 'r', [
      [0, '#AED581', 1],
      [0.4, '#8BC34A', 1],
      [0.8, '#689F38', 1],
      [1, '#558B2F', 1]
    ], {cx: 78, cy: 369, r: 14});
    fl(g, 'M 70 365 C 74 359 82 357 88 361 C 94 365 96 373 92 379 C 88 385 80 387 74 383 C 68 379 66 371 70 365 Z', greenPomp, a);

    // Teal pompon — mid right
    const tealPomp = gd(defs, 'r', [
      [0, '#4DD0E1', 1],
      [0.4, '#26C6DA', 1],
      [0.8, '#00ACC1', 1],
      [1, '#00838F', 1]
    ], {cx: 328, cy: 289, r: 14});
    fl(g, 'M 320 285 C 324 279 332 277 338 281 C 344 285 346 293 342 299 C 338 305 330 307 324 303 C 318 299 316 291 320 285 Z', tealPomp, a);

    // Lime pompon — near left leg
    const limePomp = gd(defs, 'r', [
      [0, '#C5E1A5', 1],
      [0.4, '#AED581', 1],
      [0.8, '#7CB342', 1],
      [1, '#558B2F', 1]
    ], {cx: 90, cy: 314, r: 14});
    fl(g, 'M 82 310 C 86 304 94 302 100 306 C 106 310 108 318 104 324 C 100 330 92 332 86 328 C 80 324 78 316 82 310 Z', limePomp, a);

    // === ROSARY BEAD FILLS (already done in layer 5 with fe) ===

    // === PICTURE FRAME CORNER ===
    // Outer frame — golden/wood tone
    const frameGrad = gd(defs, 'l', [
      [0, '#D4A860', 1],
      [0.5, '#C89850', 1],
      [1, '#B08040', 1]
    ], {x1: 15, y1: 10, x2: 60, y2: 55});
    fl(g, 'M 15 10 L 60 10 L 55 15 L 20 15 L 20 50 L 15 55 Z', frameGrad, a);
    // Inner frame shadow
    fl(g, 'M 20 15 L 55 15 L 53 19 L 24 19 L 24 48 L 20 50 Z', '#E8C880', a);

    // Blanket shadow under baby — subtle darkening
    fo(g, 'M 100 140 C 120 130 150 125 180 125 C 210 125 240 130 260 140 C 280 155 290 180 295 220 C 300 260 295 310 280 360 C 270 390 255 410 240 420 C 220 432 200 436 180 436 C 160 436 140 432 120 420 C 105 410 90 390 80 360 C 65 310 60 260 65 220 C 70 180 80 155 100 140 Z', '#E8E0D4', 0.3, a);
  },

  // ================================================================
  // Layer 9: Polish — catchlights, highlights, shadows, final details
  // The finishing touches that make it look photorealistic
  // ================================================================
  (g, a, defs) => {
    // === EYE CATCHLIGHTS — the key to lifelike eyes ===
    // Left eye — primary catchlight (window reflection)
    fe(g, 'circle', {cx: 163, cy: 92, r: 2.5, fill: '#FFFFFF'}, a);
    // Left eye — secondary catchlight (smaller)
    fe(g, 'circle', {cx: 171, cy: 101, r: 1.2, fill: '#FFFFFF'}, a);
    // Left eye — tiny tertiary highlight
    feo(g, 'circle', {cx: 165, cy: 95, r: 0.8, fill: '#FFFFFF'}, 0.7, a);

    // Right eye — primary catchlight
    fe(g, 'circle', {cx: 193, cy: 92, r: 2.5, fill: '#FFFFFF'}, a);
    // Right eye — secondary catchlight
    fe(g, 'circle', {cx: 201, cy: 101, r: 1.2, fill: '#FFFFFF'}, a);
    // Right eye — tiny tertiary highlight
    feo(g, 'circle', {cx: 195, cy: 95, r: 0.8, fill: '#FFFFFF'}, 0.7, a);

    // === FACE SHADOWS ===
    // Shadow under nose
    sh(g, 'M 174 130 C 176 132 178 133 180 133 C 182 133 184 132 186 130 C 185 132 183 134 180 134 C 177 134 175 132 174 130 Z', 0.15, a);

    // Shadow under chin/neck fold — babies have that adorable double chin
    sh(g, 'M 158 150 C 162 154 170 158 180 158 C 190 158 198 154 202 150 C 200 156 192 162 180 162 C 168 162 160 156 158 150 Z', 0.2, a);

    // Shadow at nose bridge between eyes
    sh(g, 'M 176 88 C 178 92 178 96 178 100 C 178 96 179 92 180 88 C 181 92 182 96 182 100 C 182 96 182 92 184 88 Z', 0.08, a);

    // Shadow cast by hair on forehead
    sh(g, 'M 140 74 C 148 68 160 62 172 59 C 178 58 184 58 190 60 C 200 62 212 68 220 74 C 216 70 208 64 198 60 C 190 57 182 56 180 56 C 178 56 170 57 162 60 C 152 64 144 70 140 74 Z', 0.06, a);

    // === SKIN HIGHLIGHTS ===
    // Forehead highlight — soft central glow
    hi(g, 'M 170 62 C 175 60 180 59 185 60 C 190 62 192 66 190 72 C 188 78 183 80 180 80 C 177 80 172 78 170 72 C 168 66 168 63 170 62 Z', 0.35, a);

    // Nose tip highlight
    hi(g, 'M 178 124 C 179 122 181 122 182 124 C 183 126 182 128 180 128 C 178 128 177 126 178 124 Z', 0.5, a);

    // Left cheekbone highlight
    hi(g, 'M 142 110 C 146 106 152 104 158 106 C 162 108 162 114 160 118 C 156 122 148 122 144 118 C 140 114 140 112 142 110 Z', 0.2, a);

    // Right cheekbone highlight
    hi(g, 'M 202 106 C 206 104 212 106 216 110 C 218 114 218 118 216 120 C 212 124 204 122 200 118 C 198 114 198 108 202 106 Z', 0.2, a);

    // Chin highlight
    hi(g, 'M 176 148 C 178 146 182 146 184 148 C 186 150 185 153 180 154 C 175 153 174 150 176 148 Z', 0.25, a);

    // === BODY SHADOWS ===
    // Shadow under cardigan lapel — left side
    sh(g, 'M 146 178 C 148 182 150 186 150 190 C 150 194 148 198 146 202 C 144 198 143 194 143 190 C 143 186 144 182 146 178 Z', 0.12, a);

    // Shadow under cardigan lapel — right side
    sh(g, 'M 214 178 C 212 182 210 186 210 190 C 210 194 212 198 214 202 C 216 198 217 194 217 190 C 217 186 216 182 214 178 Z', 0.12, a);

    // Shadow in arm crease — left
    sh(g, 'M 120 190 C 115 195 110 200 108 206 C 112 202 117 197 122 192 Z', 0.1, a);

    // Shadow in arm crease — right
    sh(g, 'M 240 190 C 245 195 250 200 252 206 C 248 202 243 197 238 192 Z', 0.1, a);

    // Shadow under Letter M block on belly
    sh(g, 'M 156 260 C 162 264 174 266 180 266 C 186 266 198 264 204 260 C 202 263 194 268 180 268 C 166 268 158 263 156 260 Z', 0.15, a);

    // Shadow in leg creases (baby rolls)
    sh(g, 'M 148 280 C 150 284 152 288 152 292 C 150 288 148 284 146 280 Z', 0.08, a);
    sh(g, 'M 214 280 C 212 284 210 288 210 292 C 212 288 214 284 216 280 Z', 0.08, a);

    // === CLOTHING HIGHLIGHTS ===
    // Cardigan shoulder highlight — left
    hi(g, 'M 135 172 C 138 168 142 166 146 168 C 148 170 148 174 146 178 C 142 176 138 174 135 172 Z', 0.15, a);

    // Cardigan shoulder highlight — right
    hi(g, 'M 225 172 C 222 168 218 166 214 168 C 212 170 212 174 214 178 C 218 176 222 174 225 172 Z', 0.15, a);

    // Bootie highlight — left
    hi(g, 'M 98 344 C 100 340 104 338 108 340 C 106 342 102 344 100 346 Z', 0.2, a);
    // Bootie highlight — right
    hi(g, 'M 264 344 C 262 340 258 338 254 340 C 256 342 260 344 262 346 Z', 0.2, a);

    // === POMPON HIGHLIGHTS ===
    // Blue pompon shine
    feo(g, 'circle', {cx: 303, cy: 60, r: 4, fill: '#FFFFFF'}, 0.5, a);
    // Red pompon shine
    feo(g, 'circle', {cx: 60, cy: 75, r: 4, fill: '#FFFFFF'}, 0.5, a);
    // Yellow pompon shine
    feo(g, 'circle', {cx: 280, cy: 380, r: 4, fill: '#FFFFFF'}, 0.5, a);
    // Green pompon shine
    feo(g, 'circle', {cx: 75, cy: 365, r: 4, fill: '#FFFFFF'}, 0.5, a);
    // Teal pompon shine
    feo(g, 'circle', {cx: 325, cy: 285, r: 4, fill: '#FFFFFF'}, 0.5, a);
    // Lime pompon shine
    feo(g, 'circle', {cx: 87, cy: 310, r: 4, fill: '#FFFFFF'}, 0.5, a);

    // === POMPON SHADOWS on blanket ===
    feo(g, 'ellipse', {cx: 310, cy: 80, rx: 10, ry: 3, fill: '#C8C0B4'}, 0.3, a);
    feo(g, 'ellipse', {cx: 67, cy: 97, rx: 10, ry: 3, fill: '#C8C0B4'}, 0.3, a);
    feo(g, 'ellipse', {cx: 287, cy: 402, rx: 10, ry: 3, fill: '#C8C0B4'}, 0.3, a);
    feo(g, 'ellipse', {cx: 82, cy: 387, rx: 10, ry: 3, fill: '#C8C0B4'}, 0.3, a);

    // === ROSARY BEAD HIGHLIGHTS ===
    feo(g, 'circle', {cx: 310, cy: 248, r: 1.5, fill: '#FFFFFF'}, 0.7, a);
    feo(g, 'circle', {cx: 314, cy: 258, r: 1.5, fill: '#FFFFFF'}, 0.7, a);
    feo(g, 'circle', {cx: 317, cy: 268, r: 1.5, fill: '#FFFFFF'}, 0.7, a);
    feo(g, 'circle', {cx: 318, cy: 278, r: 1.5, fill: '#FFFFFF'}, 0.7, a);
    feo(g, 'circle', {cx: 316, cy: 288, r: 1.5, fill: '#FFFFFF'}, 0.7, a);
    feo(g, 'circle', {cx: 312, cy: 298, r: 1.5, fill: '#FFFFFF'}, 0.7, a);

    // === LETTER M BLOCK SHADOW ON BELLY ===
    feo(g, 'ellipse', {cx: 180, cy: 262, rx: 24, ry: 4, fill: '#C8B8A0'}, 0.25, a);

    // === LETTER M FACE DETAIL — subtle wood grain highlight ===
    hi(g, 'M 160 220 C 165 218 180 217 195 218 C 200 219 202 220 200 222 C 195 221 180 220 165 221 C 162 221 160 221 160 220 Z', 0.15, a);

    // === CROSS HIGHLIGHT ===
    feo(g, 'circle', {cx: 262, cy: 322, r: 2, fill: '#FFFFFF'}, 0.6, a);

    // === EAR INNER SHADOW ===
    sh(g, 'M 114 96 C 112 100 112 104 114 108 C 112 106 111 102 111 98 C 111 96 112 94 114 96 Z', 0.15, a);
    sh(g, 'M 246 96 C 248 100 248 104 246 108 C 248 106 249 102 249 98 C 249 96 248 94 246 96 Z', 0.15, a);

    // === SUBTLE VIGNETTE — darker corners for depth ===
    fo(g, 'M 15 10 L 80 10 L 60 30 L 15 30 Z', '#D8D0C4', 0.15, a);
    fo(g, 'M 15 410 L 15 440 L 80 440 L 60 420 Z', '#D8D0C4', 0.15, a);
    fo(g, 'M 280 10 L 345 10 L 345 30 L 300 30 Z', '#D8D0C4', 0.15, a);
    fo(g, 'M 345 410 L 345 440 L 280 440 L 300 420 Z', '#D8D0C4', 0.15, a);

    // === BABY NAME TEXT ===
    const t = ce('text', {
      x: 180, y: 430,
      fill: '#B8987A',
      'font-size': '13',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'font-style': 'italic',
      'letter-spacing': '2'
    });
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
];
