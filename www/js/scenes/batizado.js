const batizadoLayers = [
  // ================================================================
  // Layer 0: Composition guides — baby head oval, candle cylinder,
  // flame teardrop, adult hand zone, azulejo tile grid, golden ratio
  // ================================================================
  (g, a) => {
    // Baby head oval guide (3/4 view, left of center)
    pp(g, [
      'M 120 155 C 155 155 168 182 168 220 C 168 258 155 286 120 286 C 85 286 72 258 72 220 C 72 182 85 155 120 155 Z'
    ], a, lt);
    // Baby body/shoulders zone
    pp(g, ['M 55 286 L 55 445 L 198 445 L 198 286'], a, lt);
    // Neck center guide
    pp(g, ['M 120 282 L 120 310'], a, lt);
    // Large candle rectangle guide
    pp(g, ['M 216 70 L 264 70 L 264 395 L 216 395 Z'], a, lt);
    // Candle vertical center
    pp(g, ['M 240 25 L 240 400'], a, lt);
    // Flame teardrop guide
    pp(g, ['M 240 22 L 258 58 L 240 82 L 222 58 Z'], a, lt);
    // Adult hand zone guide (right side)
    pp(g, ['M 275 160 L 350 160 L 350 275 L 275 275 Z'], a, lt);
    // Small candle guide
    pp(g, ['M 308 100 L 326 100 L 326 240 L 308 240 Z'], a, lt);
    // Azulejo tile grid verticals
    pp(g, [
      'M 0 0 L 0 450', 'M 60 0 L 60 450', 'M 120 0 L 120 450',
      'M 180 0 L 180 450', 'M 240 0 L 240 450', 'M 300 0 L 300 450',
      'M 360 0 L 360 450'
    ], a, lt);
    // Azulejo tile grid horizontals
    pp(g, [
      'M 0 0 L 360 0', 'M 0 60 L 360 60', 'M 0 120 L 360 120',
      'M 0 180 L 360 180', 'M 0 240 L 360 240', 'M 0 300 L 360 300',
      'M 0 360 L 360 360', 'M 0 420 L 360 420'
    ], a, lt);
    // Face proportion guides — eye line, nose line, mouth line
    pp(g, ['M 75 212 L 165 212'], a, lt);
    pp(g, ['M 75 240 L 165 240'], a, lt);
    pp(g, ['M 75 258 L 165 258'], a, lt);
    // Diagonal composition line (baby eyes to candle flame)
    pp(g, ['M 130 210 L 240 55'], a, lt);
  },

  // ================================================================
  // Layer 1: Main body outlines — baby head 3/4 view with detailed
  // cranium, jawline, neck, shoulders, baptism shirt body contours,
  // large candle cylinder with top/bottom rims
  // ================================================================
  (g, a) => {
    // Baby head — 3/4 view, turned slightly right, large round cranium
    // detailed jawline with baby fat, smooth forehead curve
    pp(g, [
      'M 118 158 C 128 155 140 155 152 158 C 160 162 166 170 168 180 C 170 192 170 206 168 218 C 167 228 164 238 160 248 C 156 256 150 264 144 270 C 138 275 130 278 122 280 C 114 282 106 280 100 276 C 94 272 88 266 84 258 C 80 248 78 238 76 228 C 74 218 74 206 76 194 C 78 182 82 172 88 164 C 94 158 106 155 118 158 Z'
    ], a);
    // Jawline detail — baby double chin softness
    pp(g, [
      'M 98 268 C 104 274 112 278 120 280 C 128 282 136 280 144 274'
    ], a);
    // Chin roundness
    pp(g, [
      'M 112 276 C 116 280 124 282 130 280 C 134 278 138 274 140 270'
    ], a);
    // Neck — short chubby baby neck
    pp(g, [
      'M 106 278 C 104 286 102 294 100 302 C 98 306 96 310 95 312'
    ], a);
    pp(g, [
      'M 138 274 C 140 282 142 290 144 298 C 146 302 148 306 150 310'
    ], a);
    // Neck skin fold (baby crease)
    pps(g, [
      'M 108 284 C 114 288 126 290 136 286'
    ], a, 0.6, '#8B7355');
    // Shoulders — left side
    pp(g, [
      'M 95 312 C 84 318 72 326 62 336 C 54 344 48 354 46 366 L 46 445'
    ], a);
    // Shoulders — right side
    pp(g, [
      'M 150 310 C 160 316 170 324 178 334 C 186 344 192 354 196 366 L 196 445'
    ], a);
    // Shirt bottom hem
    pp(g, ['M 46 445 L 196 445'], a);
    // Shirt left arm/sleeve opening
    pp(g, [
      'M 62 336 C 56 342 50 350 46 360'
    ], a);
    // Shirt right arm area
    pp(g, [
      'M 178 334 C 184 340 190 348 196 358'
    ], a);

    // === Large candle cylinder body ===
    pp(g, [
      'M 218 80 C 218 76 218 74 218 72 L 218 375 C 218 382 226 390 240 390 C 254 390 262 382 262 375 L 262 72'
    ], a);
    // Candle top ellipse — rim with wax edge
    pp(g, [
      'M 218 72 C 218 62 226 55 240 55 C 254 55 262 62 262 72 C 262 82 254 88 240 88 C 226 88 218 82 218 72 Z'
    ], a);
    // Inner wax pool rim
    pp(g, [
      'M 222 72 C 222 66 228 60 240 60 C 252 60 258 66 258 72 C 258 78 252 84 240 84 C 228 84 222 78 222 72 Z'
    ], a);
    // Candle bottom ellipse
    pp(g, [
      'M 218 375 C 218 382 226 390 240 390 C 254 390 262 382 262 375'
    ], a);
  },

  // ================================================================
  // Layer 2: Face details — EXTREMELY detailed 3/4 view facial features
  // eyes with eyelids, tear ducts, iris detail, lashes, eyebrows,
  // nose with bridge/tip/nostrils, mouth with lip detail, ear anatomy
  // ================================================================
  (g, a) => {
    // === LEFT EYE (farther from viewer, slightly smaller in 3/4) ===
    // Upper eyelid
    pp(g, [
      'M 94 212 C 96 204 102 198 110 196 C 116 195 122 198 125 204 C 126 207 126 210 125 213'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 94 214 C 96 220 102 224 110 225 C 116 225 122 222 125 216'
    ], a);
    // Upper eyelid crease
    pps(g, [
      'M 96 206 C 100 198 108 194 116 193 C 120 193 124 196 126 200'
    ], a, 0.5, '#9E8E7E');
    // Left eye white outline shape
    pp(g, [
      'M 96 213 C 96 206 101 200 110 198 C 118 197 124 202 125 210 C 125 216 120 222 110 223 C 101 223 96 218 96 213 Z'
    ], a);
    // Left iris outline
    pp(g, [
      'M 102 213 C 102 207 106 202 112 202 C 118 202 122 207 122 213 C 122 219 118 224 112 224 C 106 224 102 219 102 213 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', {cx: 114, cy: 213, r: 4.5, fill: a ? HL : '#1A0E05'}, a);
    // Tear duct — inner corner detail
    pps(g, [
      'M 96 213 C 94 212 93 213 94 214'
    ], a, 0.5, '#C4948A');
    // Upper eyelashes — left eye (5 individual lashes)
    pps(g, ['M 97 208 C 95 204 96 200 98 198'], a, 0.5, '#4A3728');
    pps(g, ['M 102 202 C 100 198 101 195 103 193'], a, 0.5, '#4A3728');
    pps(g, ['M 108 199 C 107 195 108 192 110 190'], a, 0.5, '#4A3728');
    pps(g, ['M 114 198 C 114 194 115 191 117 190'], a, 0.5, '#4A3728');
    pps(g, ['M 120 200 C 121 196 123 194 124 193'], a, 0.5, '#4A3728');
    // Lower lash hints — subtle
    pps(g, ['M 104 222 C 103 224 102 225 101 225'], a, 0.3, '#7A6858');
    pps(g, ['M 112 224 C 112 226 111 227 110 227'], a, 0.3, '#7A6858');

    // === RIGHT EYE (closer to viewer, slightly larger in 3/4) ===
    // Upper eyelid
    pp(g, [
      'M 128 209 C 130 200 137 193 146 191 C 153 190 159 194 162 201 C 163 204 163 208 162 211'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 128 212 C 130 219 137 224 146 225 C 153 225 159 222 162 215'
    ], a);
    // Upper eyelid crease
    pps(g, [
      'M 130 203 C 134 195 142 191 150 190 C 155 190 160 193 162 197'
    ], a, 0.5, '#9E8E7E');
    // Right eye white outline
    pp(g, [
      'M 130 211 C 130 203 136 196 146 194 C 155 193 161 199 162 208 C 162 215 157 222 146 223 C 137 223 130 218 130 211 Z'
    ], a);
    // Right iris outline
    pp(g, [
      'M 136 211 C 136 205 140 199 148 199 C 155 199 160 205 160 211 C 160 217 155 223 148 223 C 140 223 136 217 136 211 Z'
    ], a);
    // Right pupil
    fe(g, 'circle', {cx: 150, cy: 211, r: 5.2, fill: a ? HL : '#1A0E05'}, a);
    // Tear duct — inner corner
    pps(g, [
      'M 130 211 C 128 210 127 211 128 212'
    ], a, 0.5, '#C4948A');
    // Upper eyelashes — right eye (6 individual lashes)
    pps(g, ['M 131 206 C 129 202 130 198 132 196'], a, 0.5, '#4A3728');
    pps(g, ['M 137 199 C 135 195 136 192 138 190'], a, 0.5, '#4A3728');
    pps(g, ['M 143 196 C 142 192 143 189 145 187'], a, 0.5, '#4A3728');
    pps(g, ['M 149 194 C 149 190 150 187 152 186'], a, 0.5, '#4A3728');
    pps(g, ['M 155 196 C 156 192 158 190 159 189'], a, 0.5, '#4A3728');
    pps(g, ['M 160 200 C 162 196 164 195 165 194'], a, 0.5, '#4A3728');
    // Lower lash hints
    pps(g, ['M 140 222 C 139 224 138 225 137 225'], a, 0.3, '#7A6858');
    pps(g, ['M 148 224 C 148 226 147 227 146 227'], a, 0.3, '#7A6858');
    pps(g, ['M 155 222 C 156 224 156 225 155 225'], a, 0.3, '#7A6858');

    // === LEFT EYEBROW — gentle soft arch ===
    pp(g, [
      'M 94 198 C 98 192 104 188 112 186 C 118 185 124 186 128 190'
    ], a);
    // Eyebrow thickness — lower edge
    pps(g, [
      'M 96 200 C 100 195 106 192 114 190 C 120 189 124 190 127 192'
    ], a, 0.4, '#7A6040');
    // Individual brow hairs
    pps(g, [
      'M 100 198 C 102 194 105 192 108 190',
      'M 106 196 C 108 192 112 190 114 188',
      'M 114 194 C 116 190 120 188 122 188',
      'M 120 192 C 122 189 125 188 126 189'
    ], a, 0.3, '#7A6040');

    // === RIGHT EYEBROW ===
    pp(g, [
      'M 132 194 C 138 186 146 182 154 182 C 160 182 164 185 166 190'
    ], a);
    pps(g, [
      'M 134 196 C 140 190 148 186 156 186 C 160 186 164 189 165 192'
    ], a, 0.4, '#7A6040');
    pps(g, [
      'M 138 194 C 140 190 144 188 146 186',
      'M 146 192 C 148 188 152 186 154 184',
      'M 152 190 C 154 186 158 184 160 184',
      'M 158 190 C 160 186 162 185 164 186'
    ], a, 0.3, '#7A6040');

    // === NOSE — 3/4 profile, small baby nose ===
    // Nose bridge (subtle)
    pps(g, [
      'M 140 206 C 142 214 144 222 145 230 C 146 234 147 238 148 240'
    ], a, 0.6, '#B8956A');
    // Nose tip — rounded
    pp(g, [
      'M 145 240 C 148 244 152 247 154 246 C 156 245 156 242 154 239'
    ], a);
    // Nostril — right (visible in 3/4)
    pp(g, [
      'M 146 244 C 148 247 152 248 154 246'
    ], a);
    // Nostril — left (partially hidden)
    pps(g, [
      'M 142 244 C 140 246 138 246 137 244'
    ], a, 0.5, '#A08060');
    // Nose shadow crease
    pps(g, [
      'M 140 242 C 142 245 146 247 149 246'
    ], a, 0.4, '#A08060');
    // Nose tip highlight curve
    pps(g, [
      'M 148 238 C 150 240 152 242 152 244'
    ], a, 0.3, '#C8A882');

    // === MOUTH — slightly parted, serious expression ===
    // Upper lip — cupid's bow
    pp(g, [
      'M 122 258 C 126 254 132 252 138 252 C 142 252 146 254 148 256 C 150 258 148 260 146 260'
    ], a);
    // Upper lip — cupid's bow center dip
    pps(g, [
      'M 132 252 C 134 250 138 250 140 252'
    ], a, 0.6, '#B87878');
    // Lower lip
    pp(g, [
      'M 124 260 C 128 266 134 268 140 267 C 146 266 150 262 150 258'
    ], a);
    // Lip parting line
    pp(g, [
      'M 124 258 C 130 261 136 262 142 261 C 146 260 149 258 150 256'
    ], a);
    // Lower lip center fullness
    pps(g, [
      'M 128 264 C 132 266 138 267 142 266 C 146 264 148 262 148 260'
    ], a, 0.4, '#C08888');
    // Philtrum (vertical groove above lip)
    pps(g, [
      'M 136 246 C 136 250 136 254 136 256',
      'M 140 246 C 140 250 140 254 140 256'
    ], a, 0.3, '#B8956A');

    // === LEFT EAR (visible in 3/4 view) ===
    // Outer ear rim (helix)
    pp(g, [
      'M 78 206 C 72 200 68 206 66 214 C 64 222 66 232 70 238 C 74 242 78 240 80 236'
    ], a);
    // Antihelix
    pps(g, [
      'M 74 210 C 70 216 70 226 72 234 C 74 238 76 238 78 236'
    ], a, 0.6, '#A0845C');
    // Tragus
    pps(g, [
      'M 78 218 C 76 220 76 224 78 226'
    ], a, 0.5, '#A0845C');
    // Earlobe
    pp(g, [
      'M 70 238 C 72 244 76 246 80 244 C 82 242 82 238 80 236'
    ], a);
    // Inner ear fold
    pps(g, [
      'M 72 212 C 70 218 70 228 72 234'
    ], a, 0.4, '#C8A882');
  },

  // ================================================================
  // Layer 3: Hair — wispy baby hair with many fine strands, volume,
  // parting, temple wisps, flyaway edges; candle flames with detail
  // ================================================================
  (g, a) => {
    // === BABY HAIR — fine, wispy, light brown ===
    // Main hair mass — top of head crown area
    pp(g, [
      'M 96 172 C 100 162 110 154 120 152 C 130 150 140 152 150 156 C 156 160 160 166 162 174'
    ], a);
    // Hairline — forehead boundary
    pp(g, [
      'M 88 184 C 94 176 104 170 116 168 C 128 166 140 168 150 174 C 156 178 160 182 162 186'
    ], a);
    // Left side hair mass
    pp(g, [
      'M 84 180 C 86 170 92 162 100 158 C 106 155 112 154 118 154'
    ], a);
    // Right side hair mass
    pp(g, [
      'M 160 180 C 158 170 152 162 144 158 C 138 155 132 154 126 154'
    ], a);
    // Individual hair strands — top crown (fine pencil)
    pps(g, [
      'M 106 166 C 110 156 118 150 124 150',
      'M 110 164 C 114 154 120 149 126 149',
      'M 114 162 C 118 152 126 148 132 148',
      'M 118 160 C 124 150 132 148 138 150',
      'M 124 158 C 130 148 138 148 142 152',
      'M 130 158 C 136 150 142 150 148 154',
      'M 136 160 C 140 152 146 152 152 156',
      'M 140 162 C 144 154 150 154 154 158',
      'M 102 168 C 106 158 114 152 120 152',
      'M 144 164 C 148 156 154 156 158 160'
    ], a, lt);
    // Left temple wisps — fine hairs near ear
    pps(g, [
      'M 84 188 C 82 182 84 176 88 172',
      'M 82 192 C 80 186 82 180 86 176',
      'M 80 196 C 78 190 80 184 84 180',
      'M 86 184 C 84 178 86 172 90 168',
      'M 88 180 C 86 174 88 168 92 164'
    ], a, lt);
    // Right temple wisps
    pps(g, [
      'M 162 186 C 164 180 162 174 158 170',
      'M 164 190 C 166 184 164 178 160 174',
      'M 166 194 C 168 188 166 182 162 178',
      'M 160 182 C 162 176 160 170 156 166',
      'M 158 178 C 160 172 158 166 154 162'
    ], a, lt);
    // Forehead baby fuzz — very light
    pps(g, [
      'M 96 180 C 100 176 108 172 116 170',
      'M 100 178 C 106 174 114 170 122 168',
      'M 118 170 C 126 168 134 168 142 172',
      'M 128 168 C 136 168 144 170 150 176',
      'M 136 170 C 142 170 148 174 152 178'
    ], a, lt);
    // Flyaway strands — sticking up from crown
    pps(g, [
      'M 112 160 C 114 150 116 144 118 142',
      'M 120 156 C 122 146 124 140 126 138',
      'M 128 156 C 130 146 132 140 134 138',
      'M 134 158 C 136 148 138 142 140 140',
      'M 108 164 C 108 154 106 148 104 146',
      'M 142 162 C 144 152 146 146 148 144'
    ], a, lt);
    // Hair strand groups — adding density
    pps(g, [
      'M 90 176 C 96 166 106 158 116 156',
      'M 94 174 C 100 164 110 156 120 154',
      'M 148 158 C 152 162 156 168 158 176',
      'M 144 156 C 150 160 154 166 156 174'
    ], a, lt);
    // Back of head hair contour
    pps(g, [
      'M 82 200 C 80 194 80 188 82 182',
      'M 164 198 C 166 192 166 186 164 180'
    ], a, lt);

    // === LARGE CANDLE FLAME — detailed teardrop ===
    // Outer flame boundary — warm orange
    pp(g, [
      'M 240 26 C 250 40 260 52 260 64 C 260 74 252 82 240 82 C 228 82 220 74 220 64 C 220 52 230 40 240 26 Z'
    ], a);
    // Inner flame boundary — yellow
    pp(g, [
      'M 240 36 C 248 46 254 56 254 66 C 254 72 248 76 240 76 C 232 76 226 72 226 66 C 226 56 232 46 240 36 Z'
    ], a);
    // Core flame — white-hot center
    pp(g, [
      'M 240 46 C 245 52 248 60 248 66 C 248 72 245 74 240 74 C 235 74 232 72 232 66 C 232 60 235 52 240 46 Z'
    ], a);
    // Flame flicker edges — wisps of heat
    pps(g, [
      'M 258 58 C 262 52 264 48 262 44',
      'M 222 56 C 218 50 216 46 218 42',
      'M 254 46 C 256 42 258 38 256 34',
      'M 226 44 C 224 40 222 36 224 32'
    ], a, 0.3, '#FF9800');

    // === SMALL CANDLE FLAME ===
    pp(g, [
      'M 317 106 C 321 114 326 122 326 128 C 326 134 322 138 317 138 C 312 138 308 134 308 128 C 308 122 313 114 317 106 Z'
    ], a);
    // Small flame inner
    pp(g, [
      'M 317 112 C 320 118 322 124 322 128 C 322 132 320 134 317 134 C 314 134 312 132 312 128 C 312 124 314 118 317 112 Z'
    ], a);
  },

  // ================================================================
  // Layer 4: Clothing — baptism gown with fabric realism, high collar,
  // pintuck pleats, seams, wrinkle lines, fabric drape; candle
  // decorative elements (bands, red A, gold medallion with cross)
  // ================================================================
  (g, a) => {
    // === HIGH COLLAR — Mandarin/band collar ===
    // Left collar side
    pp(g, [
      'M 106 278 C 102 284 98 292 96 300 C 95 306 96 312 100 314 C 104 316 110 315 112 312'
    ], a);
    // Right collar side
    pp(g, [
      'M 138 274 C 142 280 146 288 148 296 C 149 302 148 308 144 312 C 140 314 134 315 132 312'
    ], a);
    // Collar band — front connection
    pp(g, [
      'M 100 302 C 108 308 118 310 128 308 C 136 306 144 302 148 298'
    ], a);
    // Collar band — top edge
    pp(g, [
      'M 96 296 C 104 302 116 304 126 302 C 136 300 144 296 148 292'
    ], a);
    // Collar inner fold line
    pps(g, [
      'M 100 298 C 108 304 120 306 130 304 C 138 302 144 298 146 294'
    ], a, 0.4, '#C8C0B8');
    // Collar stitching detail
    pps(g, [
      'M 98 306 C 106 310 118 312 128 310 C 136 308 144 306 148 302'
    ], a, 0.3, '#D8D0C8');

    // === PINTUCK PLEATS — vertical front detail ===
    pp(g, ['M 110 314 L 110 410'], a);
    pp(g, ['M 116 314 L 116 415'], a);
    pp(g, ['M 122 314 L 122 420'], a);
    pp(g, ['M 128 314 L 128 418'], a);
    pp(g, ['M 134 314 L 134 414'], a);
    // Pintuck shadow lines (between main pleats)
    pps(g, ['M 113 316 L 113 412'], a, 0.3, '#D0C8C0');
    pps(g, ['M 119 316 L 119 416'], a, 0.3, '#D0C8C0');
    pps(g, ['M 125 316 L 125 420'], a, 0.3, '#D0C8C0');
    pps(g, ['M 131 316 L 131 416'], a, 0.3, '#D0C8C0');

    // === FABRIC WRINKLES — shoulder area ===
    pps(g, [
      'M 88 320 C 92 316 100 312 108 314',
      'M 82 328 C 88 322 96 318 104 316',
      'M 76 338 C 82 330 90 324 98 320'
    ], a, 0.5, '#C8C0B8');
    // Right shoulder wrinkles
    pps(g, [
      'M 156 318 C 150 314 142 312 134 314',
      'M 162 326 C 156 320 148 316 140 316',
      'M 168 336 C 162 328 154 322 146 320'
    ], a, 0.5, '#C8C0B8');
    // Fabric drape wrinkles — body area
    pps(g, [
      'M 60 360 C 70 354 82 350 94 348',
      'M 55 380 C 68 372 82 366 98 362',
      'M 50 400 C 64 392 80 384 96 380',
      'M 186 360 C 176 354 164 350 152 348',
      'M 190 380 C 178 372 164 366 150 362',
      'M 194 400 C 182 392 168 384 154 380'
    ], a, 0.4, '#D0C8C0');

    // === SHOULDER SEAMS ===
    pps(g, [
      'M 86 318 C 94 312 106 310 112 312'
    ], a, 0.5, '#B8B0A8');
    pps(g, [
      'M 158 316 C 150 312 138 310 132 312'
    ], a, 0.5, '#B8B0A8');

    // === CANDLE DECORATIVE ELEMENTS ===
    // Upper decorative band pair
    pp(g, ['M 218 100 L 262 100'], a);
    pp(g, ['M 218 112 L 262 112'], a);
    // Band texture (horizontal lines)
    pps(g, [
      'M 220 103 L 260 103', 'M 220 106 L 260 106', 'M 220 109 L 260 109'
    ], a, 0.3, '#C8B89C');
    // Lower decorative band pair
    pp(g, ['M 218 330 L 262 330'], a);
    pp(g, ['M 218 344 L 262 344'], a);
    pps(g, [
      'M 220 333 L 260 333', 'M 220 336 L 260 336', 'M 220 339 L 260 339'
    ], a, 0.3, '#C8B89C');

    // === RED LETTER A (Alpha) ===
    // A outline — larger, more detailed
    pp(g, [
      'M 230 254 L 240 220 L 250 254'
    ], a);
    // A crossbar
    pp(g, ['M 233 244 L 247 244'], a);
    // A serifs
    pp(g, [
      'M 228 254 L 232 254', 'M 248 254 L 252 254'
    ], a);
    // Inner A strokes for thickness
    pps(g, [
      'M 232 254 L 240 224 L 248 254'
    ], a, 0.5, '#8B1A1A');

    // === GOLD MEDALLION ===
    // Outer circle
    pp(g, [
      'M 240 270 C 250 270 258 278 258 288 C 258 298 250 306 240 306 C 230 306 222 298 222 288 C 222 278 230 270 240 270 Z'
    ], a);
    // Inner circle
    pp(g, [
      'M 240 274 C 248 274 254 280 254 288 C 254 296 248 302 240 302 C 232 302 226 296 226 288 C 226 280 232 274 240 274 Z'
    ], a);
    // Cross — vertical
    pp(g, ['M 240 276 L 240 300'], a);
    // Cross — horizontal
    pp(g, ['M 228 288 L 252 288'], a);
    // Cross decorative ends — flared
    pps(g, [
      'M 238 276 L 242 276', 'M 238 300 L 242 300',
      'M 228 286 L 228 290', 'M 252 286 L 252 290'
    ], a, 0.5, '#8B6914');
    // Medallion beaded rim detail
    pps(g, [
      'M 240 271 C 249 271 257 278 257 288 C 257 297 249 305 240 305 C 231 305 223 297 223 288 C 223 278 231 271 240 271 Z'
    ], a, 0.3, '#8B6914');
    // Radial decorative lines
    pps(g, [
      'M 232 276 L 236 280', 'M 248 276 L 244 280',
      'M 248 300 L 244 296', 'M 232 300 L 236 296',
      'M 224 282 L 228 284', 'M 256 282 L 252 284',
      'M 224 294 L 228 292', 'M 256 294 L 252 292'
    ], a, 0.3, '#8B6914');

    // === WAX DRIP DETAILS on candle body ===
    pp(g, [
      'M 222 130 C 220 140 221 150 222 146',
      'M 258 148 C 260 158 259 168 258 164',
      'M 224 195 C 222 205 223 212 224 208',
      'M 256 220 C 258 230 257 238 256 234'
    ], a);
  },

  // ================================================================
  // Layer 5: Hands & objects — adult hand with fingers holding small
  // candle, small candle shaft, ribbon/bow with detail, baby's
  // small hand/arm reaching toward candle
  // ================================================================
  (g, a) => {
    // === ADULT HAND — coming from right side ===
    // Back of hand contour
    pp(g, [
      'M 340 178 C 336 172 328 168 320 170 C 312 172 306 178 302 186'
    ], a);
    // Palm contour — lower
    pp(g, [
      'M 340 195 C 338 202 334 210 328 218 C 324 224 318 228 312 230'
    ], a);
    // Wrist
    pp(g, [
      'M 340 178 C 344 184 346 190 344 196 C 342 200 340 196 340 195'
    ], a);

    // Index finger — extended, holding candle
    pp(g, [
      'M 308 180 C 312 174 318 170 322 172 C 326 174 326 180 324 186 C 322 192 318 198 314 202'
    ], a);
    // Index finger underside
    pp(g, [
      'M 304 186 C 308 180 312 176 316 176 C 318 178 318 182 316 188 C 314 194 310 200 306 204'
    ], a);
    // Index finger crease lines
    pps(g, [
      'M 312 180 C 316 178 320 178 322 180',
      'M 310 188 C 314 186 318 186 320 188'
    ], a, 0.3, '#B8956A');

    // Middle finger
    pp(g, [
      'M 302 188 C 306 182 312 178 316 180 C 318 184 316 192 312 200 C 310 206 306 210 302 214'
    ], a);
    pp(g, [
      'M 298 194 C 302 188 306 184 310 184 C 312 186 312 192 308 200 C 306 206 302 210 298 214'
    ], a);
    // Middle finger creases
    pps(g, [
      'M 306 190 C 310 188 314 188 316 190',
      'M 304 198 C 308 196 312 196 314 198'
    ], a, 0.3, '#B8956A');

    // Ring finger
    pp(g, [
      'M 296 196 C 300 190 306 186 310 188 C 312 192 310 200 306 208 C 304 212 300 216 296 220'
    ], a);
    pp(g, [
      'M 292 202 C 296 196 300 192 304 192 C 306 194 306 200 302 208 C 300 212 296 216 292 220'
    ], a);
    // Ring finger creases
    pps(g, [
      'M 300 198 C 304 196 308 196 310 198',
      'M 298 206 C 302 204 306 204 308 206'
    ], a, 0.3, '#B8956A');

    // Pinky finger
    pp(g, [
      'M 290 204 C 294 198 300 194 304 196 C 306 200 304 208 300 214 C 298 218 294 222 290 226'
    ], a);
    pp(g, [
      'M 286 210 C 290 204 294 200 298 200 C 300 202 300 208 296 214 C 294 218 290 222 286 226'
    ], a);

    // Thumb — curving around candle
    pp(g, [
      'M 318 174 C 314 178 310 186 306 194 C 304 200 302 208 300 212'
    ], a);
    pp(g, [
      'M 322 178 C 318 184 314 192 310 200 C 308 206 306 212 304 216'
    ], a);
    // Thumb nail
    pps(g, [
      'M 308 192 C 306 196 304 200 304 204 C 304 206 306 206 308 204'
    ], a, 0.4, '#C8A882');

    // Knuckle wrinkles on back of hand
    pps(g, [
      'M 308 184 C 312 182 316 182 318 184',
      'M 304 192 C 308 190 312 190 314 192',
      'M 298 200 C 302 198 306 198 308 200',
      'M 292 208 C 296 206 300 206 302 208'
    ], a, 0.3, '#B8956A');

    // Fingernails
    pps(g, [
      'M 314 200 C 316 198 318 200 316 202',
      'M 308 208 C 310 206 312 208 310 210',
      'M 302 214 C 304 212 306 214 304 216',
      'M 296 220 C 298 218 300 220 298 222'
    ], a, 0.4, '#E8D0C0');

    // === SMALL CANDLE SHAFT ===
    pp(g, ['M 312 138 L 312 236 L 322 236 L 322 138 Z'], a);
    // Candle top rim
    pp(g, [
      'M 312 138 C 312 134 314 132 317 132 C 320 132 322 134 322 138'
    ], a);
    // Candle paper wrap
    pps(g, [
      'M 310 142 C 308 140 306 144 308 148 C 310 152 314 150 316 146',
      'M 324 140 C 326 138 328 142 326 146 C 324 150 320 148 318 144'
    ], a, 0.4, '#A0A0A8');

    // === RIBBON / BOW on small candle ===
    // Left bow loop — detailed
    pp(g, [
      'M 306 192 C 300 186 296 178 298 174 C 300 170 304 170 308 174 C 312 178 314 184 314 188'
    ], a);
    // Right bow loop
    pp(g, [
      'M 322 188 C 322 184 324 178 328 174 C 332 170 336 170 338 174 C 340 178 336 186 330 192'
    ], a);
    // Left ribbon tail
    pp(g, [
      'M 306 192 C 302 200 298 212 296 220 C 294 226 292 230 290 232'
    ], a);
    // Left tail — wider side
    pp(g, [
      'M 308 194 C 306 202 302 214 300 222 C 298 228 296 232 294 234'
    ], a);
    // Right ribbon tail
    pp(g, [
      'M 330 192 C 334 200 338 212 340 220 C 342 226 344 230 346 232'
    ], a);
    pp(g, [
      'M 328 194 C 332 202 336 214 338 222 C 340 228 342 232 344 234'
    ], a);
    // Left tail end V-cut
    pps(g, [
      'M 290 232 C 288 234 286 232 288 228',
      'M 294 234 C 292 236 290 234 292 230'
    ], a, 0.4, '#C8C0B8');
    // Right tail end V-cut
    pps(g, [
      'M 346 232 C 348 234 350 232 348 228',
      'M 344 234 C 346 236 348 234 346 230'
    ], a, 0.4, '#C8C0B8');
    // Bow center knot
    pp(g, [
      'M 312 188 C 314 184 318 184 320 188 C 322 192 318 194 316 194 C 314 194 310 192 312 188 Z'
    ], a);
    // Knot cross detail
    pps(g, [
      'M 314 187 L 318 193', 'M 318 187 L 314 193'
    ], a, 0.4, '#A0A0A8');
    // Ribbon texture lines — left tail
    pps(g, [
      'M 304 200 C 302 208 300 216 298 222',
      'M 300 202 C 298 210 296 218 294 224'
    ], a, 0.3, '#D0C8C0');
    // Ribbon texture lines — right tail
    pps(g, [
      'M 332 200 C 334 208 336 216 338 222',
      'M 336 202 C 338 210 340 218 342 224'
    ], a, 0.3, '#D0C8C0');

    // === BABY'S SMALL HAND/ARM — peeking from gown on left ===
    // Tiny arm/hand peeking from sleeve
    pp(g, [
      'M 66 342 C 62 348 58 356 56 362 C 54 368 56 372 60 374 C 64 376 68 374 70 370 C 72 366 70 360 68 354'
    ], a);
    // Baby fingers — tiny curled
    pps(g, [
      'M 58 364 C 56 368 56 370 58 372',
      'M 60 362 C 58 366 58 370 60 372',
      'M 62 360 C 60 364 60 368 62 370'
    ], a, 0.4, '#B8956A');
  },

  // ================================================================
  // Layer 6: Background — Portuguese azulejo tiles with botanical
  // blue motifs, tile grid lines, church/baptism setting context
  // ================================================================
  (g, a) => {
    // === TILE GRID — blue grout lines ===
    // Vertical grout lines
    pps(g, [
      'M 0 0 L 0 450', 'M 60 0 L 60 450', 'M 120 0 L 120 450',
      'M 180 0 L 180 450', 'M 240 0 L 240 450', 'M 300 0 L 300 450',
      'M 360 0 L 360 450'
    ], a, 0.8, '#3F51B5');
    // Horizontal grout lines
    pps(g, [
      'M 0 0 L 360 0', 'M 0 60 L 360 60', 'M 0 120 L 360 120',
      'M 0 180 L 360 180', 'M 0 240 L 360 240', 'M 0 300 L 360 300',
      'M 0 360 L 360 360', 'M 0 420 L 360 420', 'M 0 450 L 360 450'
    ], a, 0.8, '#3F51B5');

    // === AZULEJO BOTANICAL MOTIFS — Portuguese blue tile art ===
    // The photo shows blue grass/reed-like patterns painted on white tiles

    // TOP-LEFT TILE (0,0)-(60,60) — grass/reed motif
    pps(g, [
      'M 20 55 C 18 40 22 25 28 15 C 30 12 32 10 34 12',
      'M 25 55 C 23 42 20 30 16 20 C 14 16 12 14 10 16',
      'M 30 55 C 32 45 36 35 40 25 C 42 20 44 18 46 20',
      'M 35 55 C 38 48 42 40 48 32 C 50 28 52 26 54 28',
      'M 15 55 C 14 46 10 36 6 28 C 4 24 2 22 0 24',
      'M 40 55 C 44 48 50 42 55 35'
    ], a, 0.6, '#1565C0');

    // TOP-CENTER-LEFT TILE (60,0)-(120,60) — grass
    pps(g, [
      'M 80 55 C 78 40 82 25 88 15',
      'M 85 55 C 83 42 80 30 76 20',
      'M 90 55 C 92 45 96 35 100 25',
      'M 95 55 C 98 48 102 40 108 32',
      'M 75 55 C 74 46 70 36 66 28',
      'M 100 55 C 104 48 110 42 115 35'
    ], a, 0.6, '#1565C0');

    // TOP-CENTER-RIGHT TILE (180,0)-(240,60) — architectural blue line
    pps(g, [
      'M 195 55 C 195 40 200 28 208 18',
      'M 200 55 C 198 42 202 30 210 20',
      'M 205 55 C 208 45 214 35 220 25',
      'M 210 55 C 214 48 218 40 224 30',
      'M 215 55 C 220 48 226 40 232 35',
      'M 190 55 C 188 44 184 34 182 26'
    ], a, 0.6, '#1565C0');

    // TOP-RIGHT TILE (300,0)-(360,60) — grass/reed
    pps(g, [
      'M 320 55 C 318 40 322 25 328 15',
      'M 325 55 C 323 42 320 30 316 20',
      'M 330 55 C 332 45 336 35 340 25',
      'M 335 55 C 338 48 342 40 348 32',
      'M 315 55 C 314 46 310 36 306 28',
      'M 340 55 C 344 48 350 42 355 35'
    ], a, 0.6, '#1565C0');

    // SECOND ROW LEFT TILE (0,60)-(60,120) — reeds with vertical blue band
    pps(g, [
      'M 28 60 L 28 120',
      'M 32 60 L 32 120',
      'M 20 115 C 18 100 22 85 28 75',
      'M 25 115 C 23 102 20 90 16 80',
      'M 35 115 C 38 108 42 100 48 92',
      'M 40 115 C 44 108 50 102 55 95',
      'M 15 115 C 14 106 10 96 6 88'
    ], a, 0.6, '#1565C0');
    // Vertical blue band (prominent in photo)
    pps(g, [
      'M 28 60 L 28 120', 'M 32 60 L 32 120'
    ], a, 1.2, '#1565C0');

    // SECOND ROW RIGHT TILE (300,60)-(360,120)
    pps(g, [
      'M 328 60 L 328 120', 'M 332 60 L 332 120',
      'M 320 115 C 318 100 322 85 328 75',
      'M 325 115 C 323 102 320 90 316 80',
      'M 335 115 C 338 108 342 100 348 92'
    ], a, 0.6, '#1565C0');
    pps(g, ['M 328 60 L 328 120', 'M 332 60 L 332 120'], a, 1.2, '#1565C0');

    // MID-LEFT TILES (0,120)-(60,180) — grass continuing
    pps(g, [
      'M 20 175 C 18 160 22 145 28 135',
      'M 25 175 C 23 162 20 150 16 140',
      'M 30 175 C 32 165 36 155 40 145',
      'M 35 175 C 38 168 42 160 48 152',
      'M 15 175 C 14 166 10 156 6 148',
      'M 40 175 C 44 168 50 162 55 155'
    ], a, 0.6, '#1565C0');

    // MID-RIGHT TILES (300,120)-(360,180)
    pps(g, [
      'M 320 175 C 318 160 322 145 328 135',
      'M 325 175 C 323 162 320 150 316 140',
      'M 330 175 C 332 165 336 155 340 145',
      'M 335 175 C 338 168 342 160 348 152'
    ], a, 0.6, '#1565C0');

    // BOTTOM-LEFT TILE area (0,360)-(60,420)
    pps(g, [
      'M 20 415 C 18 400 22 385 28 375',
      'M 25 415 C 23 402 20 390 16 380',
      'M 30 415 C 32 405 36 395 40 385',
      'M 35 415 C 38 408 42 400 48 392',
      'M 15 415 C 14 406 10 396 6 388'
    ], a, 0.6, '#1565C0');

    // BOTTOM-RIGHT TILE area (300,360)-(360,420)
    pps(g, [
      'M 320 415 C 318 400 322 385 328 375',
      'M 325 415 C 323 402 320 390 316 380',
      'M 330 415 C 332 405 336 395 340 385',
      'M 335 415 C 338 408 342 400 348 392'
    ], a, 0.6, '#1565C0');

    // BOTTOM TILES (0,420)-(60,450) and (300,420)-(360,450)
    pps(g, [
      'M 20 445 C 18 435 22 425 28 420',
      'M 30 445 C 32 438 36 430 40 425',
      'M 320 445 C 318 435 322 425 328 420',
      'M 330 445 C 332 438 336 430 340 425'
    ], a, 0.6, '#1565C0');

    // Vertical blue stripe — prominent crossing feature in the tiles
    // (visible in photo as darker blue vertical lines on the tile seams)
    pps(g, [
      'M 58 0 L 58 120', 'M 62 0 L 62 120',
      'M 178 0 L 178 60', 'M 182 0 L 182 60',
      'M 298 0 L 298 120', 'M 302 0 L 302 120'
    ], a, 0.8, '#0D47A1');

    // Horizontal blue stripe across top
    pps(g, [
      'M 0 58 L 60 58', 'M 0 62 L 60 62',
      'M 300 58 L 360 58', 'M 300 62 L 360 62'
    ], a, 0.8, '#0D47A1');

    // Tile edge highlights (subtle white between tile and grout)
    pps(g, [
      'M 1 1 L 59 1 L 59 59 L 1 59 Z',
      'M 61 1 L 119 1 L 119 59 L 61 59 Z',
      'M 301 1 L 359 1 L 359 59 L 301 59 Z'
    ], a, 0.2, '#E8E8F0');
  },

  // ================================================================
  // Layer 7: Color fills FIGURES — gradient skin tones, hair, eyes,
  // clothing, adult hand, candle body with subtle cream gradients
  // ================================================================
  (g, a, defs) => {
    // === BABY HEAD SKIN — gradient from warm forehead to cooler jaw ===
    var skinGrad = gd(defs, 'l', [
      ['0%', '#FADCB8', 1],
      ['30%', '#F5D0A9', 1],
      ['60%', '#F0C8A0', 1],
      ['100%', '#E8BA92', 1]
    ], {x1: 120, y1: 158, x2: 120, y2: 282});
    fl(g, 'M 118 158 C 128 155 140 155 152 158 C 160 162 166 170 168 180 C 170 192 170 206 168 218 C 167 228 164 238 160 248 C 156 256 150 264 144 270 C 138 275 130 278 122 280 C 114 282 106 280 100 276 C 94 272 88 266 84 258 C 80 248 78 238 76 228 C 74 218 74 206 76 194 C 78 182 82 172 88 164 C 94 158 106 155 118 158 Z', skinGrad, a);

    // Warm cheek radial — right cheek (candle-lit side)
    var cheekWarmR = gd(defs, 'r', [
      ['0%', '#F0A888', 0.5],
      ['100%', '#F0A888', 0]
    ], {cx: 152, cy: 248, r: 18});
    fo(g, 'M 134 230 C 148 230 168 240 168 258 C 168 272 148 272 134 268 C 124 264 120 248 134 230 Z', cheekWarmR, 1, a);

    // Warm cheek radial — left cheek
    var cheekWarmL = gd(defs, 'r', [
      ['0%', '#F0A888', 0.35],
      ['100%', '#F0A888', 0]
    ], {cx: 94, cy: 250, r: 16});
    fo(g, 'M 80 234 C 94 232 110 240 110 256 C 110 268 94 270 82 264 C 74 258 74 242 80 234 Z', cheekWarmL, 1, a);

    // Forehead warmth
    var foreheadWarm = gd(defs, 'r', [
      ['0%', '#FAE0C4', 0.3],
      ['100%', '#FAE0C4', 0]
    ], {cx: 125, cy: 178, r: 30});
    fo(g, 'M 90 160 C 110 158 140 158 160 170 C 170 180 170 200 160 200 C 140 200 100 200 88 190 C 80 182 80 168 90 160 Z', foreheadWarm, 1, a);

    // === BABY NECK SKIN ===
    fl(g, 'M 106 278 C 104 286 102 294 100 302 L 95 312 L 150 310 L 144 298 C 142 290 140 282 138 274 Z', '#ECC09A', a);

    // === EAR SKIN with gradient ===
    var earGrad = gd(defs, 'l', [
      ['0%', '#E8B490', 1],
      ['100%', '#F5D0A9', 1]
    ], {x1: 66, y1: 206, x2: 80, y2: 240});
    fl(g, 'M 78 206 C 72 200 68 206 66 214 C 64 222 66 232 70 238 C 72 244 76 246 80 244 C 82 242 82 238 80 236 Z', earGrad, a);

    // === EYE WHITES — slightly blue-tinted ===
    fl(g, 'M 96 213 C 96 206 101 200 110 198 C 118 197 124 202 125 210 C 125 216 120 222 110 223 C 101 223 96 218 96 213 Z', '#F8F5F0', a);
    fl(g, 'M 130 211 C 130 203 136 196 146 194 C 155 193 161 199 162 208 C 162 215 157 222 146 223 C 137 223 130 218 130 211 Z', '#F8F5F0', a);

    // === IRIS FILLS — dark brown with warm gradient ===
    var irisGradL = gd(defs, 'r', [
      ['0%', '#1A0E05', 1],
      ['40%', '#3E2218', 1],
      ['70%', '#5C3A28', 1],
      ['100%', '#3E2218', 1]
    ], {cx: 112, cy: 213, r: 10});
    fl(g, 'M 102 213 C 102 207 106 202 112 202 C 118 202 122 207 122 213 C 122 219 118 224 112 224 C 106 224 102 219 102 213 Z', irisGradL, a);

    var irisGradR = gd(defs, 'r', [
      ['0%', '#1A0E05', 1],
      ['40%', '#3E2218', 1],
      ['70%', '#5C3A28', 1],
      ['100%', '#3E2218', 1]
    ], {cx: 148, cy: 211, r: 12});
    fl(g, 'M 136 211 C 136 205 140 199 148 199 C 155 199 160 205 160 211 C 160 217 155 223 148 223 C 140 223 136 217 136 211 Z', irisGradR, a);

    // === BABY HAIR — light brown with volume ===
    var hairGrad = gd(defs, 'l', [
      ['0%', '#B89868', 1],
      ['50%', '#A0845C', 1],
      ['100%', '#8A7050', 1]
    ], {x1: 90, y1: 152, x2: 160, y2: 180});
    fl(g, 'M 88 184 C 86 170 92 160 102 156 C 112 152 122 150 130 150 C 140 150 150 154 156 160 C 162 166 164 174 162 186 C 158 180 148 172 130 170 C 112 168 96 174 88 184 Z', hairGrad, a);
    // Hair top wisps fill
    fo(g, 'M 96 170 C 100 158 112 148 126 146 C 140 146 152 156 158 168 C 152 162 140 156 126 156 C 112 156 100 162 96 170 Z', '#A0845C', 0.6, a);

    // === WHITE BAPTISM SHIRT ===
    var shirtGrad = gd(defs, 'l', [
      ['0%', '#FEFEFA', 1],
      ['50%', '#F8F6F2', 1],
      ['100%', '#EDE8E2', 1]
    ], {x1: 46, y1: 310, x2: 196, y2: 445});
    fl(g, 'M 95 312 C 84 318 72 326 62 336 C 54 344 48 354 46 366 L 46 445 L 196 445 L 196 366 C 192 354 186 344 178 334 C 170 324 160 316 150 310 Z', shirtGrad, a);

    // === WHITE COLLAR ===
    var collarGrad = gd(defs, 'l', [
      ['0%', '#FFFFFF', 1],
      ['100%', '#F0ECE6', 1]
    ], {x1: 96, y1: 278, x2: 148, y2: 316});
    fl(g, 'M 106 278 C 102 284 98 292 96 300 C 95 306 96 312 100 314 C 104 316 118 318 128 316 C 140 314 148 310 148 304 C 149 298 146 288 142 280 C 138 274 130 272 122 274 Z', collarGrad, a);

    // === ADULT HAND SKIN ===
    var handGrad = gd(defs, 'l', [
      ['0%', '#F0C8A0', 1],
      ['100%', '#E0B890', 1]
    ], {x1: 290, y1: 170, x2: 340, y2: 230});
    fl(g, 'M 290 204 C 296 194 304 184 312 176 C 320 170 330 168 338 174 C 344 180 344 190 340 200 C 336 210 326 222 316 230 C 308 234 298 232 292 226 C 286 218 286 210 290 204 Z', handGrad, a);

    // === LARGE CANDLE BODY — cream white with subtle warm gradient ===
    var candleGrad = gd(defs, 'l', [
      ['0%', '#FAF8F4', 1],
      ['30%', '#FEFCF8', 1],
      ['70%', '#F4F0EA', 1],
      ['100%', '#E8E2DA', 1]
    ], {x1: 218, y1: 72, x2: 262, y2: 72});
    fl(g, 'M 218 72 L 218 375 C 218 382 226 390 240 390 C 254 390 262 382 262 375 L 262 72 C 262 82 254 88 240 88 C 226 88 218 82 218 72 Z', candleGrad, a);
    // Candle top
    var candleTopGrad = gd(defs, 'r', [
      ['0%', '#F8F4EE', 1],
      ['100%', '#E8E2DA', 1]
    ], {cx: 240, cy: 72, r: 22});
    fl(g, 'M 218 72 C 218 82 226 88 240 88 C 254 88 262 82 262 72 C 262 62 254 55 240 55 C 226 55 218 62 218 72 Z', candleTopGrad, a);

    // === SMALL CANDLE ===
    fl(g, 'M 312 138 L 312 236 L 322 236 L 322 138 Z', '#FAF8F4', a);

    // === RIBBON/BOW — white satin ===
    var ribbonGrad = gd(defs, 'l', [
      ['0%', '#F8F8FA', 1],
      ['50%', '#EEEEF2', 1],
      ['100%', '#E0E0E6', 1]
    ], {x1: 290, y1: 170, x2: 346, y2: 234});
    fl(g, 'M 306 192 C 300 186 296 178 298 174 C 300 170 304 170 308 174 C 312 178 314 184 314 188 L 322 188 C 322 184 324 178 328 174 C 332 170 336 170 338 174 C 340 178 336 186 330 192 Z', ribbonGrad, a);
    // Ribbon tails
    fo(g, 'M 306 192 L 308 194 C 306 202 302 214 300 222 C 298 228 296 232 294 234 L 290 232 C 292 226 296 214 298 206 C 300 198 302 194 306 192 Z', '#EEEEF2', 0.8, a);
    fo(g, 'M 330 192 L 328 194 C 332 202 336 214 338 222 C 340 228 342 232 344 234 L 346 232 C 344 226 340 214 338 206 C 336 198 334 194 330 192 Z', '#EEEEF2', 0.8, a);

    // === LIP COLOR ===
    var lipGrad = gd(defs, 'l', [
      ['0%', '#D89898', 1],
      ['100%', '#C88888', 1]
    ], {x1: 122, y1: 252, x2: 150, y2: 268});
    fl(g, 'M 124 258 C 128 261 134 264 140 263 C 146 262 150 258 148 256 C 146 254 142 252 138 252 C 132 252 126 254 124 258 Z', lipGrad, a);
  },

  // ================================================================
  // Layer 8: Color fills SCENE — background tile base, azulejo blue
  // fills, flame fills (outer/inner/core), candle decorations fills
  // (red A, gold medallion, bands), wick
  // ================================================================
  (g, a, defs) => {
    // === FULL BACKGROUND — warm tile white ===
    fl(g, 'M 0 0 L 360 0 L 360 450 L 0 450 Z', '#F4F2EE', a);

    // === TILE BASE WHITES — individual tiles slightly varied ===
    fl(g, 'M 1 1 L 59 1 L 59 59 L 1 59 Z', '#F8F8FC', a);
    fl(g, 'M 61 1 L 119 1 L 119 59 L 61 59 Z', '#F6F6FA', a);
    fl(g, 'M 181 1 L 239 1 L 239 59 L 181 59 Z', '#F6F6FA', a);
    fl(g, 'M 301 1 L 359 1 L 359 59 L 301 59 Z', '#F8F8FC', a);
    fl(g, 'M 1 61 L 59 61 L 59 119 L 1 119 Z', '#F6F6FA', a);
    fl(g, 'M 301 61 L 359 61 L 359 119 L 301 119 Z', '#F6F6FA', a);
    fl(g, 'M 1 121 L 59 121 L 59 179 L 1 179 Z', '#F8F8FC', a);
    fl(g, 'M 301 121 L 359 121 L 359 179 L 301 179 Z', '#F8F8FC', a);
    fl(g, 'M 1 361 L 59 361 L 59 419 L 1 419 Z', '#F8F8FC', a);
    fl(g, 'M 301 361 L 359 361 L 359 419 L 301 419 Z', '#F8F8FC', a);
    fl(g, 'M 1 421 L 59 421 L 59 449 L 1 449 Z', '#F6F6FA', a);
    fl(g, 'M 301 421 L 359 421 L 359 449 L 301 449 Z', '#F6F6FA', a);

    // === AZULEJO BLUE MOTIF FILLS — grass/reed pattern ===
    // These are soft washes of blue behind the outline strokes
    // Top-left tile
    fo(g, 'M 5 55 C 5 35 15 15 30 10 C 45 8 55 20 55 40 C 55 55 45 58 30 58 C 15 58 5 55 5 55 Z', '#1976D2', 0.15, a);
    // Top-center-left tile
    fo(g, 'M 65 55 C 65 35 75 15 90 10 C 105 8 115 20 115 40 C 115 55 105 58 90 58 C 75 58 65 55 65 55 Z', '#1976D2', 0.15, a);
    // Top-right tile
    fo(g, 'M 305 55 C 305 35 315 15 330 10 C 345 8 355 20 355 40 C 355 55 345 58 330 58 C 315 58 305 55 305 55 Z', '#1976D2', 0.15, a);
    // Second row tiles
    fo(g, 'M 5 115 C 5 85 20 65 35 62 C 50 60 55 75 55 100 C 55 115 45 118 30 118 C 15 118 5 115 5 115 Z', '#1976D2', 0.12, a);
    fo(g, 'M 305 115 C 305 85 320 65 335 62 C 350 60 355 75 355 100 C 355 115 345 118 330 118 C 315 118 305 115 305 115 Z', '#1976D2', 0.12, a);

    // Vertical blue band fills (prominent in photo)
    fo(g, 'M 56 0 L 64 0 L 64 120 L 56 120 Z', '#1565C0', 0.25, a);
    fo(g, 'M 176 0 L 184 0 L 184 60 L 176 60 Z', '#1565C0', 0.2, a);
    fo(g, 'M 296 0 L 304 0 L 304 120 L 296 120 Z', '#1565C0', 0.25, a);

    // === LARGE CANDLE FLAME FILLS ===
    // Outer flame — orange with gradient
    var flameOuterGrad = gd(defs, 'r', [
      ['0%', '#FF6F00', 1],
      ['40%', '#FF9800', 1],
      ['100%', '#FFA726', 0.6]
    ], {cx: 240, cy: 60, r: 25});
    fl(g, 'M 240 26 C 250 40 260 52 260 64 C 260 74 252 82 240 82 C 228 82 220 74 220 64 C 220 52 230 40 240 26 Z', flameOuterGrad, a);
    // Inner flame — yellow
    var flameInnerGrad = gd(defs, 'r', [
      ['0%', '#FFEB3B', 1],
      ['60%', '#FFC107', 1],
      ['100%', '#FFB300', 0.8]
    ], {cx: 240, cy: 64, r: 16});
    fl(g, 'M 240 36 C 248 46 254 56 254 66 C 254 72 248 76 240 76 C 232 76 226 72 226 66 C 226 56 232 46 240 36 Z', flameInnerGrad, a);
    // Core — white-hot
    var flameCoreGrad = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1],
      ['50%', '#FFF9C4', 1],
      ['100%', '#FFF176', 0.9]
    ], {cx: 240, cy: 68, r: 10});
    fl(g, 'M 240 46 C 245 52 248 60 248 66 C 248 72 245 74 240 74 C 235 74 232 72 232 66 C 232 60 235 52 240 46 Z', flameCoreGrad, a);

    // === SMALL CANDLE FLAME ===
    var smFlameGrad = gd(defs, 'r', [
      ['0%', '#FFF9C4', 1],
      ['40%', '#FFC107', 1],
      ['100%', '#FF9800', 0.7]
    ], {cx: 317, cy: 126, r: 12});
    fl(g, 'M 317 106 C 321 114 326 122 326 128 C 326 134 322 138 317 138 C 312 138 308 134 308 128 C 308 122 313 114 317 106 Z', smFlameGrad, a);

    // === RED LETTER A (Alpha) ===
    fl(g, 'M 230 254 L 240 220 L 250 254 L 246 254 L 240 230 L 234 254 Z', '#C62828', a);
    // A crossbar fill
    fl(g, 'M 233 242 L 247 242 L 247 246 L 233 246 Z', '#C62828', a);

    // === GOLD MEDALLION ===
    var medalGrad = gd(defs, 'r', [
      ['0%', '#FFD54F', 1],
      ['50%', '#FFB300', 1],
      ['100%', '#FF8F00', 1]
    ], {cx: 240, cy: 288, r: 18});
    fl(g, 'M 240 270 C 250 270 258 278 258 288 C 258 298 250 306 240 306 C 230 306 222 298 222 288 C 222 278 230 270 240 270 Z', medalGrad, a);
    // Medallion inner bright
    var medalInner = gd(defs, 'r', [
      ['0%', '#FFF8E1', 0.4],
      ['100%', '#FFF8E1', 0]
    ], {cx: 237, cy: 284, r: 10});
    fo(g, 'M 240 274 C 248 274 254 280 254 288 C 254 296 248 302 240 302 C 232 302 226 296 226 288 C 226 280 232 274 240 274 Z', medalInner, 1, a);

    // === DECORATIVE BANDS ===
    var bandGrad = gd(defs, 'l', [
      ['0%', '#E8D5B0', 1],
      ['50%', '#DCC8A0', 1],
      ['100%', '#D0BC94', 1]
    ], {x1: 218, y1: 100, x2: 262, y2: 100});
    fl(g, 'M 218 100 L 262 100 L 262 112 L 218 112 Z', bandGrad, a);
    fl(g, 'M 218 330 L 262 330 L 262 344 L 218 344 Z', bandGrad, a);

    // === CANDLE WICK ===
    pps(g, ['M 240 55 L 240 32'], a, 1.0, '#3E2723');
    // Wick glow at base of flame
    feo(g, 'circle', {cx: 240, cy: 55, r: 2, fill: '#FF6F00'}, 0.6, a);
    // Small candle wick
    pps(g, ['M 317 132 L 317 112'], a, 0.6, '#3E2723');
  },

  // ================================================================
  // Layer 9: Polish — eye catchlights, skin highlights, shadows,
  // cheek blush, flame glow halos, ambient occlusion, nose/lip
  // highlights, candle surface shine, fabric shadows
  // ================================================================
  (g, a, defs) => {
    // === EYE CATCHLIGHTS — warm candlelight reflections ===
    // Left eye — main warm reflection from large candle
    fe(g, 'circle', {cx: 116, cy: 209, r: 2.8, fill: '#FFF9C4'}, a);
    // Left eye — small white sparkle
    fe(g, 'circle', {cx: 114, cy: 211, r: 1.2, fill: '#FFFFFF'}, a);
    // Left eye — secondary warm glow (ambient)
    feo(g, 'circle', {cx: 108, cy: 216, r: 1.5, fill: '#FFF9C4'}, 0.4, a);

    // Right eye — main warm reflection from large candle (bigger, closer)
    fe(g, 'circle', {cx: 152, cy: 207, r: 3.2, fill: '#FFF9C4'}, a);
    // Right eye — white sparkle
    fe(g, 'circle', {cx: 150, cy: 209, r: 1.4, fill: '#FFFFFF'}, a);
    // Right eye — secondary reflection from small candle
    feo(g, 'circle', {cx: 154, cy: 214, r: 1.2, fill: '#FFF9C4'}, 0.5, a);
    // Right eye — tertiary warm ambient
    feo(g, 'circle', {cx: 144, cy: 216, r: 1.0, fill: '#FFE0B2'}, 0.3, a);

    // === IRIS RING — lighter brown ring detail ===
    feo(g, 'circle', {cx: 112, cy: 213, r: 8, fill: 'none', stroke: '#7B5A3A', 'stroke-width': 0.6}, 0.4, a);
    feo(g, 'circle', {cx: 148, cy: 211, r: 9, fill: 'none', stroke: '#7B5A3A', 'stroke-width': 0.6}, 0.4, a);

    // === SKIN SHADOWS — ambient occlusion ===
    // Under-eye shadow — left
    var eyeShadowL = gd(defs, 'r', [
      ['0%', '#C8A088', 0.2],
      ['100%', '#C8A088', 0]
    ], {cx: 108, cy: 224, r: 10});
    fo(g, 'M 96 220 C 96 228 104 234 114 232 C 122 230 126 224 124 218 Z', eyeShadowL, 1, a);
    // Under-eye shadow — right
    var eyeShadowR = gd(defs, 'r', [
      ['0%', '#C8A088', 0.2],
      ['100%', '#C8A088', 0]
    ], {cx: 146, cy: 224, r: 12});
    fo(g, 'M 130 220 C 130 228 140 234 152 232 C 160 230 164 224 162 218 Z', eyeShadowR, 1, a);

    // Shadow under nose
    sh(g, 'M 136 244 C 140 250 148 252 154 248 C 150 254 140 256 134 250 Z', 0.1, a);

    // Shadow under lower lip
    sh(g, 'M 126 268 C 132 272 140 273 146 270 C 148 268 142 274 134 274 C 128 274 124 272 126 268 Z', 0.08, a);

    // Chin shadow
    sh(g, 'M 108 276 C 116 282 128 284 140 280 C 146 276 136 286 122 286 C 110 284 104 280 108 276 Z', 0.06, a);

    // Neck shadow (baby neck crease)
    sh(g, 'M 102 282 C 110 290 126 292 140 288 C 146 286 142 294 124 296 C 108 296 98 290 102 282 Z', 0.12, a);

    // Temple shadows — left
    var templeShadL = gd(defs, 'r', [
      ['0%', '#B89878', 0.15],
      ['100%', '#B89878', 0]
    ], {cx: 82, cy: 200, r: 18});
    fo(g, 'M 74 184 C 74 200 76 216 82 220 C 86 224 90 216 88 200 C 86 188 82 180 74 184 Z', templeShadL, 1, a);

    // Jaw shadow — right side (darker, away from light)
    sh(g, 'M 82 250 C 86 260 92 268 100 274 C 96 270 90 262 86 252 C 84 246 82 250 82 250 Z', 0.08, a);

    // === SKIN HIGHLIGHTS ===
    // Forehead highlight — center-right (facing candle)
    var foreheadHi = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.2],
      ['100%', '#FFFFFF', 0]
    ], {cx: 132, cy: 176, r: 20});
    fo(g, 'M 112 160 C 128 158 148 164 156 178 C 160 186 148 194 128 192 C 110 190 102 178 112 160 Z', foreheadHi, 1, a);

    // Nose tip highlight
    hi(g, 'M 148 238 C 152 240 154 244 152 246 C 150 244 148 242 148 238 Z', 0.35, a);
    // Nose bridge highlight
    hi(g, 'M 142 216 C 144 222 146 228 146 234 C 144 228 142 222 142 216 Z', 0.15, a);

    // Upper lip highlight (philtrum area)
    hi(g, 'M 136 248 C 138 250 140 250 140 248 C 140 250 138 252 136 248 Z', 0.2, a);

    // Lower lip highlight
    hi(g, 'M 132 264 C 136 266 140 266 142 264 C 140 268 134 268 132 264 Z', 0.25, a);

    // === CHEEK BLUSH — warm from candlelight ===
    var blushR = gd(defs, 'r', [
      ['0%', '#F4A090', 0.3],
      ['100%', '#F4A090', 0]
    ], {cx: 154, cy: 248, r: 14});
    feo(g, 'ellipse', {cx: 154, cy: 248, rx: 14, ry: 8, fill: blushR}, 1, a);
    var blushL = gd(defs, 'r', [
      ['0%', '#F4A090', 0.2],
      ['100%', '#F4A090', 0]
    ], {cx: 92, cy: 252, r: 12});
    feo(g, 'ellipse', {cx: 92, cy: 252, rx: 12, ry: 7, fill: blushL}, 1, a);

    // === FLAME GLOW HALOS ===
    // Large flame — outer warm aura
    var flameAura = gd(defs, 'r', [
      ['0%', '#FFF9C4', 0.25],
      ['40%', '#FFECB3', 0.12],
      ['100%', '#FFECB3', 0]
    ], {cx: 240, cy: 56, r: 50});
    feo(g, 'circle', {cx: 240, cy: 56, r: 50, fill: flameAura}, 1, a);
    // Large flame — inner bright glow
    var flameGlowInner = gd(defs, 'r', [
      ['0%', '#FFF9C4', 0.35],
      ['100%', '#FFF9C4', 0]
    ], {cx: 240, cy: 60, r: 25});
    feo(g, 'circle', {cx: 240, cy: 60, r: 25, fill: flameGlowInner}, 1, a);
    // Small flame glow
    var smFlameGlow = gd(defs, 'r', [
      ['0%', '#FFF9C4', 0.2],
      ['100%', '#FFF9C4', 0]
    ], {cx: 317, cy: 124, r: 18});
    feo(g, 'circle', {cx: 317, cy: 124, r: 18, fill: smFlameGlow}, 1, a);

    // === WARM CANDLELIGHT on baby's face (right side illumination) ===
    var faceLight = gd(defs, 'r', [
      ['0%', '#FFF9C4', 0.1],
      ['50%', '#FFE0B2', 0.06],
      ['100%', '#FFE0B2', 0]
    ], {cx: 165, cy: 220, r: 40});
    fo(g, 'M 140 180 C 170 180 175 200 175 230 C 175 260 165 280 140 280 C 140 260 140 200 140 180 Z', faceLight, 1, a);

    // === CANDLE SURFACE HIGHLIGHTS ===
    // Vertical shine on candle body — left edge
    hi(g, 'M 226 88 L 226 374 L 228 374 L 228 88 Z', 0.3, a);
    // Vertical shine — center gloss
    hi(g, 'M 234 88 L 234 374 L 236 374 L 236 88 Z', 0.15, a);
    // Candle top wax pool highlight
    hi(g, 'M 232 64 C 236 60 244 60 248 64 C 244 62 236 62 232 64 Z', 0.25, a);

    // === CROSS HIGHLIGHT in medallion ===
    hi(g, 'M 238 278 C 240 276 242 278 240 280 Z', 0.5, a);
    // Medallion rim shine
    feo(g, 'ellipse', {cx: 234, cy: 276, rx: 3, ry: 1.5, fill: '#FFFFFF'}, 0.35, a);

    // === RIBBON HIGHLIGHTS ===
    hi(g, 'M 300 176 C 302 174 304 176 302 178 Z', 0.5, a);
    hi(g, 'M 334 176 C 336 174 338 176 336 178 Z', 0.5, a);
    // Ribbon satin sheen
    hi(g, 'M 310 186 C 314 184 318 184 320 186 C 318 188 314 188 310 186 Z', 0.3, a);

    // === WAX DRIP HIGHLIGHTS ===
    hi(g, 'M 222 134 C 221 138 222 142 223 140 Z', 0.2, a);
    hi(g, 'M 259 152 C 260 156 259 160 258 158 Z', 0.2, a);

    // === FABRIC SHADOWS on shirt ===
    // Central shadow under chin
    sh(g, 'M 100 316 C 112 322 132 322 144 316 C 140 326 106 326 100 316 Z', 0.06, a);
    // Left shoulder fabric shadow
    sh(g, 'M 60 340 C 70 334 84 330 96 330 C 84 336 72 342 62 350 Z', 0.05, a);
    // Right shoulder fabric shadow
    sh(g, 'M 186 340 C 176 334 162 330 150 330 C 162 336 174 342 184 350 Z', 0.05, a);

    // === HAIR SHEEN — subtle highlights ===
    var hairSheen = gd(defs, 'r', [
      ['0%', '#D4B896', 0.3],
      ['100%', '#D4B896', 0]
    ], {cx: 124, cy: 158, r: 18});
    fo(g, 'M 108 148 C 118 144 134 144 142 150 C 148 154 146 162 136 166 C 126 168 112 166 106 160 C 102 156 104 150 108 148 Z', hairSheen, 1, a);

    // === EAR INNER SHADOW ===
    sh(g, 'M 72 212 C 70 218 70 228 72 234 C 74 228 74 218 72 212 Z', 0.15, a);
    // Ear highlight — outer rim
    hi(g, 'M 70 208 C 68 214 68 224 70 230 Z', 0.12, a);

    // === ADULT HAND SHADOWS ===
    sh(g, 'M 310 190 C 314 196 316 204 314 210 C 312 204 308 196 310 190 Z', 0.08, a);
    // Knuckle highlights
    hi(g, 'M 316 178 C 318 176 320 178 318 180 Z', 0.3, a);
    hi(g, 'M 310 186 C 312 184 314 186 312 188 Z', 0.3, a);

    // === BACKGROUND WARM TONE — candle light spill on nearby tiles ===
    var bgWarm = gd(defs, 'r', [
      ['0%', '#FFF8E1', 0.08],
      ['100%', '#FFF8E1', 0]
    ], {cx: 240, cy: 60, r: 180});
    fo(g, 'M 60 0 L 360 0 L 360 300 L 60 300 Z', bgWarm, 1, a);

    // === VIGNETTE — subtle darkening at edges ===
    var vignetteT = gd(defs, 'l', [
      ['0%', '#1a1a2e', 0.06],
      ['100%', '#1a1a2e', 0]
    ], {x1: 0, y1: 0, x2: 0, y2: 60});
    fo(g, 'M 0 0 L 360 0 L 360 60 L 0 60 Z', vignetteT, 1, a);
    var vignetteB = gd(defs, 'l', [
      ['0%', '#1a1a2e', 0],
      ['100%', '#1a1a2e', 0.06]
    ], {x1: 0, y1: 400, x2: 0, y2: 450});
    fo(g, 'M 0 400 L 360 400 L 360 450 L 0 450 Z', vignetteB, 1, a);
    var vignetteL = gd(defs, 'l', [
      ['0%', '#1a1a2e', 0.05],
      ['100%', '#1a1a2e', 0]
    ], {x1: 0, y1: 0, x2: 60, y2: 0});
    fo(g, 'M 0 0 L 60 0 L 60 450 L 0 450 Z', vignetteL, 1, a);
    var vignetteR = gd(defs, 'l', [
      ['0%', '#1a1a2e', 0],
      ['100%', '#1a1a2e', 0.04]
    ], {x1: 300, y1: 0, x2: 360, y2: 0});
    fo(g, 'M 300 0 L 360 0 L 360 450 L 300 450 Z', vignetteR, 1, a);
  }
];
