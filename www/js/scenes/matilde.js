const matildeLayers = [
  // =====================================================================
  // Layer 0: Composition guides — face oval, chair bar positions,
  // eye/nose/mouth lines, hair mass, hand placement, shoulder line
  // =====================================================================
  (g, a, defs) => {
    // Vertical center guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Horizontal thirds
    pp(g, ['M 0 150 L 360 150', 'M 0 300 L 360 300'], a, lt);
    // Face oval guide — child proportions (high forehead, round cheeks)
    pp(g, [
      'M 180 115 C 220 115 248 150 248 195 C 248 240 220 272 180 272 C 140 272 112 240 112 195 C 112 150 140 115 180 115 Z'
    ], a, lt);
    // Eye line guide — slightly below center of face
    pp(g, ['M 115 205 L 245 205'], a, lt);
    // Nose line guide
    pp(g, ['M 158 238 L 202 238'], a, lt);
    // Mouth line guide
    pp(g, ['M 152 260 L 208 260'], a, lt);
    // Hair mass outline guide — wild voluminous curls
    pp(g, [
      'M 180 72 C 250 72 290 115 290 175 C 290 230 265 260 235 278 L 125 278 C 95 260 70 230 70 175 C 70 115 110 72 180 72 Z'
    ], a, lt);
    // Left chair bar guide
    pp(g, ['M 50 20 L 50 430'], a, lt);
    // Right chair bar guide
    pp(g, ['M 310 20 L 310 430'], a, lt);
    // Shoulder line guide
    pp(g, ['M 105 310 L 255 310'], a, lt);
    // Adult hand placement guide at top
    pp(g, ['M 120 60 L 240 60 L 240 110 L 120 110 Z'], a, lt);
    // Chair crossbar guide
    pp(g, ['M 35 385 L 325 385'], a, lt);
    // Chin to neck center line
    pp(g, ['M 180 270 L 180 300'], a, lt);
  },

  // =====================================================================
  // Layer 1: Body — detailed face contour with child proportions,
  // neck, shoulders, chair bars, ears
  // =====================================================================
  (g, a, defs) => {
    // Face — child proportions: big forehead, full round cheeks, soft chin
    // Very smooth bezier curves with many control points
    pp(g, [
      'M 180 122 C 164 122 150 126 140 134 C 130 142 123 154 120 168 C 117 182 116 197 118 210 C 120 223 124 234 130 244 C 136 252 144 258 153 263 C 160 266 168 268 176 269 C 180 270 184 270 188 269 C 196 268 204 266 211 263 C 220 258 228 252 234 244 C 240 234 244 223 246 210 C 248 197 247 182 244 168 C 241 154 234 142 224 134 C 214 126 200 122 180 122 Z'
    ], a);
    // Left jawline refinement — softer contour below cheek
    pp(g, [
      'M 118 210 C 119 220 122 230 127 239 C 132 248 140 256 150 262'
    ], a);
    // Right jawline refinement
    pp(g, [
      'M 246 210 C 245 220 242 230 237 239 C 232 248 224 256 214 262'
    ], a);
    // Chin dimple hint
    pps(g, ['M 176 268 C 178 270 182 270 184 268'], a, 0.5, '#888');
    // Neck — short and round, child-like
    pp(g, [
      'M 164 268 C 162 274 160 282 160 290',
      'M 196 268 C 198 274 200 282 200 290'
    ], a);
    // Neck center line (subtle)
    pps(g, ['M 180 269 C 180 276 180 284 180 290'], a, 0.4, '#AAA');
    // Shoulders — small child shoulders with peach shirt
    pp(g, [
      'M 160 290 C 148 292 132 298 118 308 C 110 314 106 322 104 334 L 100 395',
      'M 200 290 C 212 292 228 298 242 308 C 250 314 254 322 256 334 L 260 395'
    ], a);
    // Bottom shirt edge
    pp(g, ['M 100 395 L 260 395'], a);
    // Left chair bar — wooden vertical post with rounded edges
    pp(g, [
      'M 44 18 C 47 16 56 16 59 18 L 60 435 C 57 437 48 437 45 435 Z'
    ], a);
    // Right chair bar — wooden vertical post
    pp(g, [
      'M 301 18 C 304 16 313 16 316 18 L 317 435 C 314 437 305 437 302 435 Z'
    ], a);
    // Left ear — partially visible behind hair
    pp(g, [
      'M 120 198 C 115 192 111 196 110 204 C 109 212 112 220 118 218 C 120 217 121 214 121 210'
    ], a);
    // Left ear tragus detail
    pps(g, ['M 114 204 C 116 200 118 200 118 204'], a, 0.6, '#888');
    // Right ear — partially visible behind hair
    pp(g, [
      'M 244 198 C 249 192 253 196 254 204 C 255 212 252 220 246 218 C 244 217 243 214 243 210'
    ], a);
    // Right ear tragus detail
    pps(g, ['M 250 204 C 248 200 246 200 246 204'], a, 0.6, '#888');
    // Collarbone hints
    pps(g, [
      'M 160 294 C 150 296 142 300 136 306',
      'M 200 294 C 210 296 218 300 224 306'
    ], a, 0.5, '#AAA');
  },

  // =====================================================================
  // Layer 2: Face details — EXTREMELY detailed eyes with eyelids, lashes,
  // iris patterns, nose with bridge, mouth with teeth, expression lines
  // =====================================================================
  (g, a, defs) => {
    // === LEFT EYE ===
    // Eye outline — very large, nearly round (child proportions)
    pp(g, [
      'M 143 202 C 143 190 152 180 165 180 C 178 180 187 190 187 202 C 187 214 178 224 165 224 C 152 224 143 214 143 202 Z'
    ], a);
    // Upper eyelid crease
    pp(g, [
      'M 145 196 C 148 188 155 182 165 180 C 175 178 183 184 186 192'
    ], a);
    // Lower eyelid line
    pps(g, [
      'M 147 210 C 152 218 158 222 165 224 C 172 222 178 218 183 210'
    ], a, 0.7, '#8B7355');
    // Inner corner fold (epicanthal)
    pps(g, ['M 145 200 C 143 202 143 206 145 208'], a, 0.5, '#8B7355');
    // Outer corner crinkle
    pps(g, ['M 186 200 C 188 202 188 204 186 206'], a, 0.5, '#8B7355');

    // === RIGHT EYE ===
    // Eye outline — very large, nearly round
    pp(g, [
      'M 177 202 C 177 190 186 180 199 180 C 212 180 221 190 221 202 C 221 214 212 224 199 224 C 186 224 177 214 177 202 Z'
    ], a);
    // Upper eyelid crease
    pp(g, [
      'M 179 196 C 182 188 189 182 199 180 C 209 178 217 184 220 192'
    ], a);
    // Lower eyelid line
    pps(g, [
      'M 181 210 C 186 218 192 222 199 224 C 206 222 212 218 217 210'
    ], a, 0.7, '#8B7355');
    // Inner corner fold
    pps(g, ['M 179 200 C 177 202 177 206 179 208'], a, 0.5, '#8B7355');
    // Outer corner crinkle
    pps(g, ['M 220 200 C 222 202 222 204 220 206'], a, 0.5, '#8B7355');

    // === LEFT IRIS — large, dark brown ===
    pp(g, [
      'M 153 204 C 153 195 158 188 166 188 C 174 188 179 195 179 204 C 179 213 174 220 166 220 C 158 220 153 213 153 204 Z'
    ], a);
    // Left iris inner ring detail
    pps(g, [
      'M 158 204 C 158 198 161 193 166 193 C 171 193 174 198 174 204 C 174 210 171 215 166 215 C 161 215 158 210 158 204 Z'
    ], a, 0.4, '#3E2010');
    // Left iris radial lines (texture)
    pps(g, [
      'M 166 190 L 166 194', 'M 160 192 L 162 196', 'M 172 192 L 170 196',
      'M 155 198 L 159 200', 'M 177 198 L 173 200',
      'M 154 206 L 158 206', 'M 178 206 L 174 206',
      'M 157 213 L 160 210', 'M 175 213 L 172 210'
    ], a, 0.3, '#5E3518');

    // === RIGHT IRIS — large, dark brown ===
    pp(g, [
      'M 187 204 C 187 195 192 188 200 188 C 208 188 213 195 213 204 C 213 213 208 220 200 220 C 192 220 187 213 187 204 Z'
    ], a);
    // Right iris inner ring detail
    pps(g, [
      'M 192 204 C 192 198 195 193 200 193 C 205 193 208 198 208 204 C 208 210 205 215 200 215 C 195 215 192 210 192 204 Z'
    ], a, 0.4, '#3E2010');
    // Right iris radial lines
    pps(g, [
      'M 200 190 L 200 194', 'M 194 192 L 196 196', 'M 206 192 L 204 196',
      'M 189 198 L 193 200', 'M 211 198 L 207 200',
      'M 188 206 L 192 206', 'M 212 206 L 208 206',
      'M 191 213 L 194 210', 'M 209 213 L 206 210'
    ], a, 0.3, '#5E3518');

    // === LEFT PUPIL ===
    fe(g, 'circle', { cx: 166, cy: 205, r: 5.8, fill: a ? HL : '#0D0D0D' }, a);
    // === RIGHT PUPIL ===
    fe(g, 'circle', { cx: 200, cy: 205, r: 5.8, fill: a ? HL : '#0D0D0D' }, a);

    // === UPPER EYELASHES — LEFT (long, visible) ===
    pps(g, [
      'M 144 198 C 142 194 140 190 139 186',
      'M 148 194 C 146 190 144 186 144 182',
      'M 152 190 C 151 186 151 182 152 178',
      'M 157 187 C 156 183 157 180 158 177',
      'M 162 185 C 162 181 163 178 165 175',
      'M 168 183 C 170 179 172 177 175 175',
      'M 174 182 C 177 179 180 177 183 176',
      'M 180 183 C 183 180 186 179 188 178'
    ], a, 0.7, '#3E2723');
    // Lower lashes left (subtle)
    pps(g, [
      'M 150 214 C 148 216 146 218 144 219',
      'M 156 218 C 154 220 152 222 150 223',
      'M 162 220 C 160 222 159 224 157 225'
    ], a, 0.4, '#5D4037');

    // === UPPER EYELASHES — RIGHT ===
    pps(g, [
      'M 220 198 C 222 194 224 190 225 186',
      'M 216 194 C 218 190 220 186 220 182',
      'M 212 190 C 213 186 213 182 212 178',
      'M 207 187 C 208 183 207 180 206 177',
      'M 202 185 C 202 181 201 178 199 175',
      'M 196 183 C 194 179 192 177 189 175',
      'M 190 182 C 187 179 184 177 181 176',
      'M 184 183 C 181 180 178 179 176 178'
    ], a, 0.7, '#3E2723');
    // Lower lashes right
    pps(g, [
      'M 214 214 C 216 216 218 218 220 219',
      'M 208 218 C 210 220 212 222 214 223',
      'M 202 220 C 204 222 205 224 207 225'
    ], a, 0.4, '#5D4037');

    // === EYEBROWS — soft, childlike arches ===
    // Left eyebrow — slightly thick, natural
    pp(g, [
      'M 140 175 C 144 168 152 163 162 163 C 170 163 176 166 182 172'
    ], a);
    // Left eyebrow lower edge
    pps(g, [
      'M 142 178 C 146 172 154 168 163 168 C 170 168 176 170 181 174'
    ], a, 0.6, '#5D4037');
    // Eyebrow hair strokes left
    pps(g, [
      'M 144 176 C 148 170 152 167 156 166',
      'M 152 174 C 156 168 160 165 164 164',
      'M 160 172 C 164 167 168 165 172 165',
      'M 168 170 C 172 166 176 166 180 168'
    ], a, 0.35, '#5D4037');

    // Right eyebrow
    pp(g, [
      'M 182 172 C 188 166 194 163 202 163 C 212 163 220 168 224 175'
    ], a);
    // Right eyebrow lower edge
    pps(g, [
      'M 183 174 C 190 170 196 168 201 168 C 212 168 218 172 222 178'
    ], a, 0.6, '#5D4037');
    // Eyebrow hair strokes right
    pps(g, [
      'M 186 170 C 190 166 194 165 198 165',
      'M 194 168 C 198 165 202 164 206 164',
      'M 202 167 C 206 164 210 164 214 166',
      'M 210 170 C 214 167 218 168 222 172'
    ], a, 0.35, '#5D4037');

    // === NOSE — delicate child nose ===
    // Nose bridge — faint line
    pps(g, ['M 182 194 C 181 206 180 218 178 230'], a, 0.5, '#B8A090');
    // Nose tip ball — small, cute rounded shape
    pp(g, [
      'M 171 237 C 173 241 176 244 180 244 C 184 244 187 241 189 237'
    ], a);
    // Left nostril
    pp(g, [
      'M 172 239 C 173 237 175 236 178 238'
    ], a);
    // Right nostril
    pp(g, [
      'M 182 238 C 185 236 187 237 188 239'
    ], a);
    // Nose wing left
    pps(g, ['M 170 236 C 168 234 168 230 170 228'], a, 0.5, '#B8A090');
    // Nose wing right
    pps(g, ['M 190 236 C 192 234 192 230 190 228'], a, 0.5, '#B8A090');
    // Nostril shadow curves
    pps(g, [
      'M 174 240 C 175 238 177 237 179 239',
      'M 181 239 C 183 237 185 238 186 240'
    ], a, 0.4, '#A08070');

    // === MOUTH — warm smile showing top teeth ===
    // Upper lip — cupid's bow shape
    pp(g, [
      'M 158 260 C 162 255 168 252 174 254 C 177 256 178 257 180 257 C 182 257 183 256 186 254 C 192 252 198 255 202 260'
    ], a);
    // Lower lip — full, gentle curve
    pp(g, [
      'M 158 260 C 162 272 170 278 180 278 C 190 278 198 272 202 260'
    ], a);
    // Lip parting line (showing teeth)
    pp(g, [
      'M 160 261 C 165 263 172 264 180 264 C 188 264 195 263 200 261'
    ], a);
    // Individual tooth separators
    pps(g, [
      'M 168 261 L 168 266',
      'M 174 261 L 174 267',
      'M 180 261 L 180 267',
      'M 186 261 L 186 267',
      'M 192 261 L 192 266'
    ], a, 0.35, '#D0C0B0');
    // Smile crease left
    pps(g, ['M 152 255 C 150 258 150 262 152 266'], a, 0.5, '#B8A090');
    // Smile crease right
    pps(g, ['M 208 255 C 210 258 210 262 208 266'], a, 0.5, '#B8A090');
    // Lower lip center line
    pps(g, ['M 172 272 C 176 274 184 274 188 272'], a, 0.4, '#C09080');
    // Philtrum (above upper lip)
    pps(g, [
      'M 177 248 C 178 252 178 256 177 258',
      'M 183 248 C 182 252 182 256 183 258'
    ], a, 0.35, '#C0A898');

    // === LEFT EAR inner detail ===
    pps(g, ['M 113 200 C 111 204 111 210 113 214'], a, 0.5, '#C09878');
    pps(g, ['M 115 202 C 114 206 114 210 115 213'], a, 0.3, '#B08868');
    // === RIGHT EAR inner detail ===
    pps(g, ['M 251 200 C 253 204 253 210 251 214'], a, 0.5, '#C09878');
    pps(g, ['M 249 202 C 250 206 250 210 249 213'], a, 0.3, '#B08868');

    // Nasolabial folds (very faint for a child)
    pps(g, [
      'M 155 232 C 154 240 153 248 154 256',
      'M 209 232 C 210 240 211 248 210 256'
    ], a, 0.3, '#C0A898');
  },

  // =====================================================================
  // Layer 3: Wild curly hair — voluminous mass, individual curls,
  // spiral textures, flyaway strands (35+ curl elements)
  // =====================================================================
  (g, a, defs) => {
    // === MAIN HAIR MASS — LEFT SIDE ===
    pp(g, [
      'M 128 188 C 122 170 112 148 106 132 C 98 114 90 100 86 94 C 80 84 76 88 78 104 C 80 120 84 138 86 156 C 88 174 88 192 90 210 C 92 228 94 244 100 258'
    ], a);
    // Left side secondary contour
    pp(g, [
      'M 100 258 C 96 248 92 232 90 214 C 88 196 88 178 90 160 C 92 142 96 126 102 114'
    ], a);

    // === MAIN HAIR MASS — TOP ===
    pp(g, [
      'M 128 188 C 124 158 122 136 126 114 C 130 94 140 80 156 72 C 168 66 184 64 200 68 C 216 72 228 82 234 98 C 240 114 242 132 240 152 C 240 168 238 182 234 196'
    ], a);
    // Top crown contour detail
    pp(g, [
      'M 148 82 C 158 74 170 68 184 66 C 198 68 210 74 220 84'
    ], a);

    // === MAIN HAIR MASS — RIGHT SIDE ===
    pp(g, [
      'M 234 196 C 240 178 252 152 260 136 C 266 122 274 108 278 100 C 284 92 286 96 284 110 C 282 126 278 142 274 158 C 272 174 270 192 268 210 C 266 228 264 244 260 258'
    ], a);
    // Right side secondary contour
    pp(g, [
      'M 260 258 C 264 248 268 232 270 214 C 272 196 272 178 270 160 C 268 142 264 126 258 114'
    ], a);

    // === HAIR BOTTOM EDGES ===
    pp(g, ['M 100 258 C 108 266 118 270 128 272'], a);
    pp(g, ['M 260 258 C 252 266 242 270 232 272'], a);

    // === INDIVIDUAL CURLS — TOP CROWN ===
    // Curl 1 — top center
    pp(g, [
      'M 172 74 C 170 68 174 62 180 60 C 186 58 192 62 192 68 C 192 74 188 78 182 78 C 178 78 174 76 172 74'
    ], a);
    // Curl 2 — top left of center
    pp(g, [
      'M 152 80 C 148 74 150 66 156 64 C 162 62 166 66 166 72 C 166 78 162 82 156 82 C 152 82 150 80 152 80'
    ], a);
    // Curl 3 — top right of center
    pp(g, [
      'M 208 80 C 212 74 210 66 204 64 C 198 62 194 66 194 72 C 194 78 198 82 204 82 C 208 82 210 80 208 80'
    ], a);
    // Curl 4 — far left crown
    pp(g, [
      'M 138 90 C 134 84 136 76 142 74 C 148 72 152 76 152 82 C 152 88 148 92 142 92 C 138 92 136 90 138 90'
    ], a);
    // Curl 5 — far right crown
    pp(g, [
      'M 222 90 C 226 84 224 76 218 74 C 212 72 208 76 208 82 C 208 88 212 92 218 92 C 222 92 224 90 222 90'
    ], a);
    // Curl 6 — crown center secondary
    pp(g, [
      'M 162 70 C 160 64 164 58 170 58 C 176 58 178 64 176 70 C 174 74 168 76 164 72'
    ], a);
    // Curl 7 — crown right secondary
    pp(g, [
      'M 198 70 C 200 64 196 58 190 58 C 184 58 182 64 184 70 C 186 74 192 76 196 72'
    ], a);

    // === INDIVIDUAL CURLS — LEFT SIDE ===
    // Curl 8 — left upper side
    pp(g, [
      'M 94 122 C 88 116 84 124 86 132 C 88 140 94 142 98 136 C 102 130 100 122 94 122'
    ], a);
    // Curl 9 — left mid side
    pp(g, [
      'M 90 158 C 84 152 80 158 82 166 C 84 174 90 178 94 172 C 98 166 94 158 90 158'
    ], a);
    // Curl 10 — left lower side
    pp(g, [
      'M 92 200 C 86 194 82 200 84 208 C 86 216 92 220 96 214 C 100 208 96 200 92 200'
    ], a);
    // Curl 11 — left lowest
    pp(g, [
      'M 96 236 C 90 230 86 236 88 244 C 90 252 96 254 100 248 C 104 242 100 236 96 236'
    ], a);
    // Curl 12 — left forehead
    pp(g, [
      'M 130 126 C 124 120 122 112 126 106 C 130 102 136 104 138 110 C 140 116 136 124 132 128'
    ], a);
    // Curl 13 — left temple
    pp(g, [
      'M 112 148 C 106 142 104 150 106 158 C 108 164 114 166 116 160 C 118 154 114 148 112 148'
    ], a);

    // === INDIVIDUAL CURLS — RIGHT SIDE ===
    // Curl 14 — right upper side
    pp(g, [
      'M 266 122 C 272 116 276 124 274 132 C 272 140 266 142 262 136 C 258 130 260 122 266 122'
    ], a);
    // Curl 15 — right mid side
    pp(g, [
      'M 270 158 C 276 152 280 158 278 166 C 276 174 270 178 266 172 C 262 166 266 158 270 158'
    ], a);
    // Curl 16 — right lower side
    pp(g, [
      'M 268 200 C 274 194 278 200 276 208 C 274 216 268 220 264 214 C 260 208 264 200 268 200'
    ], a);
    // Curl 17 — right lowest
    pp(g, [
      'M 264 236 C 270 230 274 236 272 244 C 270 252 264 254 260 248 C 256 242 260 236 264 236'
    ], a);
    // Curl 18 — right forehead
    pp(g, [
      'M 230 126 C 236 120 238 112 234 106 C 230 102 224 104 222 110 C 220 116 224 124 228 128'
    ], a);
    // Curl 19 — right temple
    pp(g, [
      'M 248 148 C 254 142 256 150 254 158 C 252 164 246 166 244 160 C 242 154 246 148 248 148'
    ], a);

    // === FOREHEAD HAIR DRAPE ===
    // Hair falling across forehead
    pp(g, [
      'M 142 140 C 148 134 158 128 170 126 C 182 124 194 128 204 134 C 210 138 218 142 222 148'
    ], a);
    // Secondary forehead wisps
    pps(g, [
      'M 146 146 C 154 138 164 132 176 130 C 188 132 198 138 206 146',
      'M 150 152 C 158 144 168 138 180 136 C 192 138 202 144 210 152'
    ], a, 0.6, '#8B6538');

    // === HAIR TEXTURE STRANDS — flowing internal lines ===
    pps(g, [
      'M 134 96 C 146 86 164 76 180 74',
      'M 180 74 C 196 76 214 86 226 96',
      'M 104 140 C 112 128 124 118 136 112',
      'M 256 140 C 248 128 236 118 224 112',
      'M 98 188 C 102 174 108 162 118 154',
      'M 262 188 C 258 174 252 162 242 154',
      'M 96 224 C 100 212 106 200 114 192',
      'M 264 224 C 260 212 254 200 246 192'
    ], a, 0.5, '#A07848');
    // Additional fine texture strands
    pps(g, [
      'M 140 108 C 150 98 162 88 176 82',
      'M 176 82 C 190 88 202 98 220 108',
      'M 108 160 C 114 148 122 138 132 130',
      'M 252 160 C 246 148 238 138 228 130',
      'M 94 204 C 98 190 104 178 112 168',
      'M 266 204 C 262 190 256 178 248 168'
    ], a, 0.35, '#9E7E58');

    // === CURL SPIRAL DETAILS (inner textures) ===
    pps(g, [
      'M 174 66 C 178 62 184 62 186 66 C 188 70 184 74 180 74',
      'M 154 76 C 158 72 164 72 166 76',
      'M 206 76 C 202 72 196 72 194 76',
      'M 88 130 C 90 126 94 126 96 130',
      'M 272 130 C 270 126 266 126 264 130',
      'M 84 164 C 86 160 90 160 92 164',
      'M 276 164 C 274 160 270 160 268 164'
    ], a, 0.4, '#A07848');

    // === FLYAWAY STRANDS ===
    pps(g, [
      'M 148 72 C 144 64 142 56 146 52',
      'M 210 72 C 214 64 218 56 214 52',
      'M 82 106 C 76 100 74 92 78 86',
      'M 278 106 C 284 100 286 92 282 86',
      'M 130 82 C 126 74 128 66 134 62',
      'M 228 82 C 232 74 230 66 224 62'
    ], a, 0.3, '#9E7E58');
  },

  // =====================================================================
  // Layer 4: Clothing — ruffled collar detail, shirt wrinkles,
  // fabric folds, chair bar wood grain, chair knot details
  // =====================================================================
  (g, a, defs) => {
    // === RUFFLED COLLAR — peach/salmon top with frills ===
    // Main collar curve
    pp(g, [
      'M 148 294 C 152 286 162 282 172 282 C 178 282 182 282 188 282 C 198 282 208 286 212 294'
    ], a);
    // Collar ruffle petals — left side
    pp(g, [
      'M 148 294 C 146 290 142 288 139 291 C 136 294 138 298 142 300 C 146 302 150 300 152 296',
      'M 142 300 C 140 296 136 294 133 297 C 130 300 132 304 136 306 C 140 308 144 306 146 302'
    ], a);
    // Collar ruffle petals — right side
    pp(g, [
      'M 212 294 C 214 290 218 288 221 291 C 224 294 222 298 218 300 C 214 302 210 300 208 296',
      'M 218 300 C 220 296 224 294 227 297 C 230 300 228 304 224 306 C 220 308 216 306 214 302'
    ], a);
    // Collar ruffle center
    pp(g, [
      'M 166 284 C 164 280 168 278 172 280 C 176 282 180 280 184 278 C 188 276 192 278 194 282 C 192 286 188 284 184 284 C 180 284 176 286 172 284 C 168 286 166 284 166 284'
    ], a);
    // Collar ruffle inner folds
    pps(g, [
      'M 152 290 C 154 286 158 284 162 286',
      'M 198 286 C 202 284 206 286 208 290',
      'M 170 286 C 174 282 180 282 186 286'
    ], a, 0.5, '#D09090');

    // === SHIRT WRINKLE LINES ===
    // Left shoulder wrinkles
    pps(g, [
      'M 132 302 C 128 312 124 324 122 336',
      'M 142 298 C 138 308 134 320 132 332',
      'M 126 308 C 122 318 118 330 116 342'
    ], a, 0.5, '#D8A0A0');
    // Right shoulder wrinkles
    pps(g, [
      'M 228 302 C 232 312 236 324 238 336',
      'M 218 298 C 222 308 226 320 228 332',
      'M 234 308 C 238 318 242 330 244 342'
    ], a, 0.5, '#D8A0A0');
    // Center wrinkles
    pps(g, [
      'M 170 298 C 172 312 174 328 176 344',
      'M 190 298 C 188 312 186 328 184 344',
      'M 180 296 C 180 310 180 326 180 342'
    ], a, 0.4, '#D8A0A0');
    // Armpit fold lines
    pps(g, [
      'M 114 312 C 118 318 122 324 126 328',
      'M 246 312 C 242 318 238 324 234 328'
    ], a, 0.5, '#D0A0A0');

    // === SLEEVE RUFFLE HINTS ===
    pp(g, [
      'M 112 312 C 108 308 104 310 106 316 C 108 320 114 320 116 316',
      'M 106 316 C 102 312 98 314 100 320 C 102 324 108 324 110 320'
    ], a);
    pp(g, [
      'M 248 312 C 252 308 256 310 254 316 C 252 320 246 320 244 316',
      'M 254 316 C 258 312 262 314 260 320 C 258 324 252 324 250 320'
    ], a);

    // === LEFT CHAIR BAR — wood grain ===
    pps(g, [
      'M 48 50 C 49 70 48 90 49 110',
      'M 52 120 C 51 150 52 180 51 210',
      'M 48 220 C 49 250 48 280 49 310',
      'M 52 320 C 51 350 52 380 51 410',
      'M 55 60 C 56 90 55 120 56 150',
      'M 48 160 C 49 190 48 220 49 250'
    ], a, 0.4, '#A68A5B');
    // Left bar knot — upper
    pp(g, [
      'M 50 175 C 48 171 46 173 46 177 C 46 181 48 183 52 181 C 54 179 54 175 52 173',
      'M 49 176 C 48 174 47 175 47 178 C 47 180 48 181 50 180'
    ], a);
    // Left bar knot — lower
    pp(g, [
      'M 54 318 C 56 314 54 312 50 312 C 46 312 46 316 48 320 C 50 322 54 322 56 318',
      'M 52 315 C 53 313 51 312 49 313 C 47 314 47 317 49 318'
    ], a);

    // === RIGHT CHAIR BAR — wood grain ===
    pps(g, [
      'M 305 50 C 306 70 305 90 306 110',
      'M 309 120 C 308 150 309 180 308 210',
      'M 305 220 C 306 250 305 280 306 310',
      'M 309 320 C 308 350 309 380 308 410',
      'M 312 60 C 313 90 312 120 313 150',
      'M 305 160 C 306 190 305 220 306 250'
    ], a, 0.4, '#A68A5B');
    // Right bar knot — upper
    pp(g, [
      'M 310 195 C 312 191 314 193 314 197 C 314 201 312 203 308 201 C 306 199 306 195 308 193',
      'M 311 196 C 312 194 313 195 313 198 C 313 200 312 201 310 200'
    ], a);
    // Right bar knot — lower
    pp(g, [
      'M 306 338 C 304 334 306 332 310 332 C 314 332 314 336 312 340 C 310 342 306 342 304 338',
      'M 309 335 C 310 333 312 333 312 336 C 312 338 310 339 308 338'
    ], a);

    // === CHAIR CROSSBAR WOOD GRAIN ===
    pps(g, [
      'M 58 383 C 100 385 160 383 200 385 C 240 383 280 385 305 383',
      'M 58 389 C 110 387 170 389 220 387 C 260 389 290 387 305 389',
      'M 70 386 C 120 384 180 386 230 384 C 270 386 300 384 310 386'
    ], a, 0.4, '#A68A5B');
  },

  // =====================================================================
  // Layer 5: Adult hand on head — detailed fingers with anatomy,
  // fingernails, knuckles, partial palm/wrist at top edge
  // =====================================================================
  (g, a, defs) => {
    // === PALM BASE — coming from above, resting on head ===
    pp(g, [
      'M 134 88 C 132 80 130 72 130 64 C 130 54 134 44 142 38 C 150 32 162 28 176 28 C 190 28 202 32 210 38 C 218 44 222 54 222 64 C 222 72 220 80 218 88'
    ], a);
    // Palm underside contour
    pps(g, [
      'M 136 86 C 148 80 164 76 180 76 C 196 76 212 80 220 86'
    ], a, 0.5, '#C8A888');

    // === WRIST — at top edge of frame ===
    pp(g, [
      'M 142 38 C 138 30 136 20 136 10 L 136 0',
      'M 210 38 C 214 30 216 20 216 10 L 216 0'
    ], a);
    // Wrist creases
    pps(g, [
      'M 144 36 C 160 32 176 30 192 32 C 204 34 212 36 214 38'
    ], a, 0.4, '#C0A088');

    // === INDEX FINGER — leftmost ===
    pp(g, [
      'M 134 88 C 130 94 124 104 122 112 C 120 120 122 126 126 128 C 130 130 134 128 136 122 C 138 116 138 108 138 100 C 138 94 136 90 136 88'
    ], a);
    // Index fingernail
    pp(g, [
      'M 122 114 C 120 116 120 122 122 126 C 124 130 128 130 132 126'
    ], a);
    // Index nail highlight
    pps(g, ['M 124 118 C 126 116 128 116 130 118'], a, 0.3, '#E8D0C0');
    // Index finger side contour
    pps(g, ['M 126 96 C 124 102 122 108 122 114'], a, 0.4, '#C0A088');

    // === MIDDLE FINGER ===
    pp(g, [
      'M 150 86 C 148 92 144 104 142 114 C 140 122 142 128 146 130 C 150 132 154 128 156 122 C 158 114 158 104 156 96 C 156 90 154 86 152 86'
    ], a);
    // Middle fingernail
    pp(g, [
      'M 142 118 C 140 120 140 126 144 130 C 146 132 150 132 152 128'
    ], a);
    // Middle nail highlight
    pps(g, ['M 144 122 C 146 120 148 120 150 122'], a, 0.3, '#E8D0C0');

    // === RING FINGER ===
    pp(g, [
      'M 174 84 C 172 90 170 100 170 110 C 170 120 172 126 176 128 C 180 130 184 126 184 118 C 184 110 182 100 180 92 C 180 86 178 84 176 84'
    ], a);
    // Ring fingernail
    pp(g, [
      'M 170 114 C 168 116 168 124 172 128 C 174 130 178 130 180 126'
    ], a);
    // Ring nail highlight
    pps(g, ['M 172 118 C 174 116 176 116 178 118'], a, 0.3, '#E8D0C0');

    // === PINKY FINGER — shorter ===
    pp(g, [
      'M 196 86 C 194 92 192 100 192 108 C 192 116 194 120 198 122 C 202 124 206 120 206 112 C 206 104 204 96 202 90 C 202 86 200 86 198 86'
    ], a);
    // Pinky fingernail
    pp(g, [
      'M 192 110 C 190 112 190 118 194 122 C 196 124 200 122 202 118'
    ], a);

    // === THUMB — wrapping around right side (partially hidden) ===
    pp(g, [
      'M 218 88 C 222 94 226 104 226 112 C 226 120 224 124 220 122 C 216 120 216 114 216 108 C 216 102 216 96 218 88'
    ], a);
    // Thumb wrinkle
    pps(g, ['M 220 100 C 222 98 224 98 226 100'], a, 0.4, '#C0A088');

    // === KNUCKLE CREASES ===
    pps(g, [
      'M 132 92 C 134 90 136 90 138 92',
      'M 148 90 C 150 88 152 88 154 90',
      'M 172 88 C 174 86 176 86 178 88',
      'M 194 90 C 196 88 200 88 202 90'
    ], a, 0.5, '#C0A088');
    // Inter-finger web hints
    pps(g, [
      'M 138 94 C 142 92 146 92 150 94',
      'M 156 92 C 162 90 168 90 174 92',
      'M 180 90 C 186 88 190 88 196 90'
    ], a, 0.3, '#B09878');

    // Finger shadow edges
    pps(g, [
      'M 134 96 C 132 102 130 108 128 114',
      'M 152 92 C 150 98 148 106 146 114',
      'M 176 90 C 174 96 172 104 172 112',
      'M 200 92 C 198 98 196 104 194 110'
    ], a, 0.3, '#B09878');
  },

  // =====================================================================
  // Layer 6: Background — dark panels, chair structure, crossbar,
  // environmental detail from photo
  // =====================================================================
  (g, a, defs) => {
    // Dark background — left outer panel
    pp(g, ['M 0 0 L 44 0 L 44 450 L 0 450 Z'], a);
    // Dark background — right outer panel
    pp(g, ['M 316 0 L 360 0 L 360 450 L 316 450 Z'], a);
    // Dark background — top panel (above hand)
    pp(g, ['M 59 0 L 301 0 L 301 24 L 59 24 Z'], a);
    // Dark background — left gap between bar and face
    pp(g, ['M 59 24 L 88 24 L 88 430 L 59 430 Z'], a, lt);
    // Dark background — right gap between bar and face
    pp(g, ['M 272 24 L 301 24 L 301 430 L 272 430 Z'], a, lt);

    // Chair crossbar — horizontal connecting bar at bottom
    pp(g, [
      'M 38 380 C 40 376 48 374 54 376 L 306 376 C 312 374 320 376 322 380 L 322 394 C 320 398 312 400 306 398 L 54 398 C 48 400 40 398 38 394 Z'
    ], a);
    // Crossbar wood grain lines
    pps(g, [
      'M 56 384 C 100 386 160 384 200 386 C 240 384 280 386 306 384',
      'M 56 390 C 110 388 170 390 220 388 C 260 390 290 388 306 390'
    ], a, 0.4, '#A68A5B');

    // Chair top bar — horizontal piece at top
    pp(g, ['M 44 18 L 316 18'], a);
    pp(g, ['M 44 28 L 316 28'], a);
    // Chair top bar end caps
    pps(g, [
      'M 44 18 C 44 22 44 24 44 28',
      'M 316 18 C 316 22 316 24 316 28'
    ], a, 0.6, '#A68A5B');

    // Background texture hints — vertical panel grain on dark areas
    pps(g, [
      'M 12 40 L 12 420',
      'M 28 50 L 28 410',
      'M 336 40 L 336 420',
      'M 348 50 L 348 410'
    ], a, 0.25, '#4E3728');

    // Background side panels — behind chair bars (dim room)
    pps(g, [
      'M 64 50 C 66 100 64 150 66 200 C 64 250 66 300 64 350',
      'M 76 60 C 78 120 76 180 78 240 C 76 300 78 360 76 400',
      'M 280 50 C 278 100 280 150 278 200 C 280 250 278 300 280 350',
      'M 292 60 C 290 120 292 180 290 240 C 292 300 290 360 292 400'
    ], a, 0.2, '#4E3728');
  },

  // =====================================================================
  // Layer 7: Color fills FIGURES — gradient skin, hair, eyes, shirt,
  // lips, teeth, adult hand (using gradients for realism)
  // =====================================================================
  (g, a, defs) => {
    // === HAIR FILLS — multi-toned brown ===
    // Main hair gradient — warm brown with golden highlights
    var hairGrad = gd(defs, 'l', [
      [0, '#7A5830', 1], [0.3, '#8B6538', 1], [0.5, '#9E7848', 1],
      [0.7, '#8B6538', 1], [1, '#6B4E28', 1]
    ], { x1: 80, y1: 70, x2: 280, y2: 270 });

    // Hair mass — left side
    fl(g,
      'M 128 188 C 122 170 112 148 106 132 C 98 114 90 100 86 94 C 80 84 76 88 78 104 C 80 120 84 138 86 156 C 88 174 88 192 90 210 C 92 228 94 244 100 258 C 108 266 118 270 128 272 L 130 244 C 124 225 120 205 118 185 C 120 155 132 132 150 120 C 140 124 132 138 128 156 Z',
      hairGrad, a);
    // Hair mass — right side
    fl(g,
      'M 234 196 C 240 178 252 152 260 136 C 266 122 274 108 278 100 C 284 92 286 96 284 110 C 282 126 278 142 274 158 C 272 174 270 192 268 210 C 266 228 264 244 260 258 C 252 266 242 270 232 272 L 230 244 C 238 225 242 205 244 185 C 242 155 228 132 210 120 C 220 124 228 138 234 156 Z',
      hairGrad, false);
    // Hair mass — top
    fl(g,
      'M 128 188 C 124 158 122 136 126 114 C 130 94 140 80 156 72 C 168 66 184 64 200 68 C 216 72 228 82 234 98 C 240 114 242 132 240 152 C 240 168 238 182 234 196 L 224 184 C 228 162 228 140 222 120 C 216 104 204 90 184 86 C 164 90 152 104 146 120 C 140 140 138 162 142 184 Z',
      hairGrad, false);

    // Curl highlight fills — lighter golden tone
    var curlHi = '#C4A265';
    fl(g, 'M 172 74 C 170 68 174 62 180 60 C 186 58 192 62 192 68 C 192 74 188 78 182 78 C 178 78 174 76 172 74 Z', curlHi, false);
    fl(g, 'M 94 122 C 88 116 84 124 86 132 C 88 140 94 142 98 136 C 102 130 100 122 94 122 Z', curlHi, false);
    fl(g, 'M 266 122 C 272 116 276 124 274 132 C 272 140 266 142 262 136 C 258 130 260 122 266 122 Z', curlHi, false);
    fl(g, 'M 90 158 C 84 152 80 158 82 166 C 84 174 90 178 94 172 C 98 166 94 158 90 158 Z', '#B09050', false);
    fl(g, 'M 270 158 C 276 152 280 158 278 166 C 276 174 270 178 266 172 C 262 166 266 158 270 158 Z', '#B09050', false);
    // Additional curl fills for richness
    fl(g, 'M 152 80 C 148 74 150 66 156 64 C 162 62 166 66 166 72 C 166 78 162 82 156 82 Z', '#A88848', false);
    fl(g, 'M 208 80 C 212 74 210 66 204 64 C 198 62 194 66 194 72 C 194 78 198 82 204 82 Z', '#A88848', false);
    fl(g, 'M 92 200 C 86 194 82 200 84 208 C 86 216 92 220 96 214 C 100 208 96 200 92 200 Z', '#9E7E58', false);
    fl(g, 'M 268 200 C 274 194 278 200 276 208 C 274 216 268 220 264 214 C 260 208 264 200 268 200 Z', '#9E7E58', false);

    // Hair shadow at face boundary
    sh(g, 'M 128 140 C 136 132 148 126 164 124 C 172 124 180 126 188 128 C 200 132 212 138 224 148 L 230 160 C 220 148 206 138 192 132 C 180 128 168 128 156 132 C 144 138 134 148 128 162 Z', 0.15, false);

    // === SKIN FILLS — gradient for realistic tone ===
    var skinGrad = gd(defs, 'r', [
      [0, '#FCE4CC', 1], [0.4, '#F8D4B8', 1], [0.7, '#F0C8A8', 1], [1, '#E8B898', 1]
    ], { cx: 180, cy: 200, r: 90 });

    // Face skin fill
    fl(g,
      'M 180 126 C 148 126 122 156 120 188 C 118 210 122 230 130 246 C 138 258 152 268 170 272 C 178 273 182 273 190 272 C 208 268 222 258 230 246 C 238 230 242 210 244 188 C 242 156 216 126 180 126 Z',
      skinGrad, a);
    // Forehead warmth (slight redness up top)
    fo(g,
      'M 148 130 C 158 126 170 124 180 124 C 190 124 202 126 212 130 C 218 140 222 152 224 164 L 136 164 C 138 152 142 140 148 130 Z',
      '#FCDCC8', 0.3, false);

    // Neck skin — slightly darker
    var neckGrad = gd(defs, 'l', [
      [0, '#ECBFA0', 1], [1, '#E0B090', 1]
    ], { x1: 160, y1: 268, x2: 200, y2: 295 });
    fl(g,
      'M 164 268 C 162 274 160 282 160 290 L 200 290 C 200 282 198 274 196 268 Z',
      neckGrad, false);
    // Neck shadow under chin
    sh(g, 'M 164 268 C 170 272 176 273 182 273 C 188 273 194 272 200 268 L 198 274 C 192 278 186 280 180 280 C 174 280 168 278 162 274 Z', 0.18, false);

    // Ear fills with skin gradient
    feo(g, 'ellipse', { cx: 114, cy: 208, rx: 7, ry: 12, fill: '#F0C0A0' }, 0.9, false);
    feo(g, 'ellipse', { cx: 250, cy: 208, rx: 7, ry: 12, fill: '#F0C0A0' }, 0.9, false);

    // === EYE WHITES ===
    // Left eye white — with slight blue tint for realism
    var eyeWhiteGrad = gd(defs, 'r', [
      [0, '#FFFFFF', 1], [0.6, '#F8F4F0', 1], [1, '#ECE4DC', 1]
    ], { cx: 166, cy: 202, r: 18 });
    fl(g,
      'M 146 202 C 146 192 154 184 166 184 C 178 184 186 192 186 202 C 186 212 178 220 166 220 C 154 220 146 212 146 202 Z',
      eyeWhiteGrad, a);
    // Right eye white
    var eyeWhiteGrad2 = gd(defs, 'r', [
      [0, '#FFFFFF', 1], [0.6, '#F8F4F0', 1], [1, '#ECE4DC', 1]
    ], { cx: 200, cy: 202, r: 18 });
    fl(g,
      'M 180 202 C 180 192 188 184 200 184 C 212 184 220 192 220 202 C 220 212 212 220 200 220 C 188 220 180 212 180 202 Z',
      eyeWhiteGrad2, false);

    // === IRIS FILLS — rich dark brown with gradient ===
    var irisGrad = gd(defs, 'r', [
      [0, '#2A1808', 1], [0.3, '#3E2010', 1], [0.6, '#5E3518', 1], [1, '#4A2810', 1]
    ], { cx: 166, cy: 205, r: 13 });
    fl(g,
      'M 154 205 C 154 196 159 190 167 190 C 175 190 180 196 180 205 C 180 214 175 220 167 220 C 159 220 154 214 154 205 Z',
      irisGrad, a);
    var irisGrad2 = gd(defs, 'r', [
      [0, '#2A1808', 1], [0.3, '#3E2010', 1], [0.6, '#5E3518', 1], [1, '#4A2810', 1]
    ], { cx: 200, cy: 205, r: 13 });
    fl(g,
      'M 188 205 C 188 196 193 190 201 190 C 209 190 214 196 214 205 C 214 214 209 220 201 220 C 193 220 188 214 188 205 Z',
      irisGrad2, false);

    // Pupil fills — deep black
    fe(g, 'circle', { cx: 167, cy: 206, r: 6, fill: '#0A0A0A' }, false);
    fe(g, 'circle', { cx: 201, cy: 206, r: 6, fill: '#0A0A0A' }, false);

    // === SHIRT FILL — peach/salmon pink with gradient ===
    var shirtGrad = gd(defs, 'l', [
      [0, '#F5A0B0', 1], [0.3, '#F8B0BC', 1], [0.5, '#FCBCC8', 1],
      [0.7, '#F5A8B8', 1], [1, '#F09CAC', 1]
    ], { x1: 100, y1: 290, x2: 260, y2: 395 });
    fl(g,
      'M 148 294 C 152 286 162 282 172 282 C 178 282 182 282 188 282 C 198 282 208 286 212 294 L 242 308 C 250 314 254 322 256 334 L 260 395 L 100 395 L 104 334 C 106 322 110 314 118 308 Z',
      shirtGrad, a);
    // Shirt collar fill
    fl(g,
      'M 148 294 C 146 290 142 288 139 291 C 136 294 138 298 142 300 C 146 302 152 300 148 294 Z',
      '#F8B8C4', false);
    fl(g,
      'M 212 294 C 214 290 218 288 221 291 C 224 294 222 298 218 300 C 214 302 210 300 212 294 Z',
      '#F8B8C4', false);

    // === LIP FILL — natural pink tones ===
    var lipGrad = gd(defs, 'l', [
      [0, '#D88888', 1], [0.5, '#E8999A', 1], [1, '#D88888', 1]
    ], { x1: 158, y1: 258, x2: 202, y2: 278 });
    // Upper lip
    fl(g,
      'M 158 260 C 162 255 168 252 174 254 C 177 256 178 257 180 257 C 182 257 183 256 186 254 C 192 252 198 255 202 260 L 200 261 C 196 262 188 264 180 264 C 172 264 164 262 160 261 Z',
      lipGrad, false);
    // Lower lip — slightly lighter
    fl(g,
      'M 160 261 C 164 262 172 264 180 264 C 188 264 196 262 200 261 C 198 272 190 278 180 278 C 170 278 162 272 160 261 Z',
      '#E8A0A0', false);

    // Teeth fill — white area
    fl(g,
      'M 162 261 L 198 261 L 198 268 C 194 270 188 272 180 272 C 172 272 166 270 162 268 Z',
      '#FEFEFE', false);
    // Tooth gap shadows
    fo(g, 'M 168 261 L 168.5 261 L 168.5 267 L 168 267 Z', '#D8D0C8', 0.5, false);
    fo(g, 'M 174 261 L 174.5 261 L 174.5 268 L 174 268 Z', '#D8D0C8', 0.5, false);
    fo(g, 'M 180 261 L 180.5 261 L 180.5 268 L 180 268 Z', '#D8D0C8', 0.5, false);
    fo(g, 'M 186 261 L 186.5 261 L 186.5 268 L 186 268 Z', '#D8D0C8', 0.5, false);
    fo(g, 'M 192 261 L 192.5 261 L 192.5 267 L 192 267 Z', '#D8D0C8', 0.5, false);

    // === ADULT HAND SKIN — gradient for warm tone ===
    var handGrad = gd(defs, 'l', [
      [0, '#F0C8A0', 1], [0.5, '#E8BFA0', 1], [1, '#E0B898', 1]
    ], { x1: 130, y1: 28, x2: 222, y2: 130 });
    // Palm
    fl(g,
      'M 134 88 C 132 80 130 72 130 64 C 130 54 134 44 142 38 C 150 32 162 28 176 28 C 190 28 202 32 210 38 C 218 44 222 54 222 64 C 222 72 220 80 218 88 L 216 94 C 208 88 194 84 180 84 C 166 84 152 88 144 94 Z',
      handGrad, a);
    // Index finger fill
    fl(g,
      'M 134 88 C 130 94 124 104 122 112 C 120 120 122 126 126 128 C 130 130 134 128 136 122 C 138 116 138 108 138 100 C 138 94 136 90 136 88 Z',
      '#F0C8A0', false);
    // Middle finger fill
    fl(g,
      'M 150 86 C 148 92 144 104 142 114 C 140 122 142 128 146 130 C 150 132 154 128 156 122 C 158 114 158 104 156 96 C 156 90 154 86 152 86 Z',
      '#F0C8A0', false);
    // Ring finger fill
    fl(g,
      'M 174 84 C 172 90 170 100 170 110 C 170 120 172 126 176 128 C 180 130 184 126 184 118 C 184 110 182 100 180 92 C 180 86 178 84 176 84 Z',
      '#F0C8A0', false);
    // Pinky finger fill
    fl(g,
      'M 196 86 C 194 92 192 100 192 108 C 192 116 194 120 198 122 C 202 124 206 120 206 112 C 206 104 204 96 202 90 C 202 86 200 86 198 86 Z',
      '#E8C098', false);
    // Thumb fill
    fl(g,
      'M 218 88 C 222 94 226 104 226 112 C 226 120 224 124 220 122 C 216 120 216 114 216 108 C 216 102 216 96 218 88 Z',
      '#E8C098', false);

    // Finger shadow between fingers
    sh(g, 'M 138 94 C 140 92 144 90 148 92 L 148 98 C 144 96 140 96 138 98 Z', 0.1, false);
    sh(g, 'M 156 92 C 160 90 166 88 172 90 L 172 96 C 166 94 160 94 156 96 Z', 0.1, false);
    sh(g, 'M 182 88 C 188 86 194 88 198 90 L 198 96 C 194 94 188 92 182 94 Z', 0.1, false);
  },

  // =====================================================================
  // Layer 8: Color fills SCENE — dark background, chair bars wood
  // color, wood grain overlay, crossbar, ambient tones
  // =====================================================================
  (g, a, defs) => {
    // === DARK BACKGROUND ===
    // Background gradient — warm dark brown (indoor scene)
    var bgGrad = gd(defs, 'r', [
      [0, '#4A3528', 1], [0.5, '#3E2B20', 1], [1, '#2E1E15', 1]
    ], { cx: 180, cy: 200, r: 250 });

    // Left outer panel
    fe(g, 'rect', { x: 0, y: 0, width: 44, height: 450, fill: '#2E1E15' }, a);
    // Right outer panel
    fe(g, 'rect', { x: 316, y: 0, width: 44, height: 450, fill: '#2E1E15' }, false);
    // Top panel
    fe(g, 'rect', { x: 59, y: 0, width: 242, height: 24, fill: '#3A2820' }, false);
    // Left gap between bar and face
    fe(g, 'rect', { x: 59, y: 24, width: 29, height: 410, fill: '#3A2820' }, false);
    fo(g, 'M 59 24 L 88 24 L 88 434 L 59 434 Z', '#2E1E15', 0.4, false);
    // Right gap between bar and face
    fe(g, 'rect', { x: 272, y: 24, width: 29, height: 410, fill: '#3A2820' }, false);
    fo(g, 'M 272 24 L 301 24 L 301 434 L 272 434 Z', '#2E1E15', 0.4, false);

    // === CHAIR BAR FILLS — rich honey oak ===
    var woodGrad = gd(defs, 'l', [
      [0, '#B8884C', 1], [0.2, '#C89858', 1], [0.5, '#D4A868', 1],
      [0.8, '#C89858', 1], [1, '#B08048', 1]
    ], { x1: 44, y1: 0, x2: 60, y2: 0 });

    // Left chair bar fill
    fl(g,
      'M 44 18 C 47 16 56 16 59 18 L 60 435 C 57 437 48 437 45 435 Z',
      woodGrad, a);
    // Right chair bar fill
    var woodGrad2 = gd(defs, 'l', [
      [0, '#B08048', 1], [0.2, '#C89858', 1], [0.5, '#D4A868', 1],
      [0.8, '#C89858', 1], [1, '#B8884C', 1]
    ], { x1: 301, y1: 0, x2: 317, y2: 0 });
    fl(g,
      'M 301 18 C 304 16 313 16 316 18 L 317 435 C 314 437 305 437 302 435 Z',
      woodGrad2, false);

    // === WOOD GRAIN OVERLAYS — left bar ===
    fo(g, 'M 46 50 C 48 46 54 46 56 50 L 56 110 C 54 114 48 114 46 110 Z', '#A07838', 0.25, false);
    fo(g, 'M 46 180 C 48 176 54 176 56 180 L 56 250 C 54 254 48 254 46 250 Z', '#A07838', 0.25, false);
    fo(g, 'M 46 320 C 48 316 54 316 56 320 L 56 400 C 54 404 48 404 46 400 Z', '#A07838', 0.25, false);
    // Right bar grain overlays
    fo(g, 'M 303 70 C 305 66 311 66 313 70 L 313 140 C 311 144 305 144 303 140 Z', '#A07838', 0.25, false);
    fo(g, 'M 303 200 C 305 196 311 196 313 200 L 313 270 C 311 274 305 274 303 270 Z', '#A07838', 0.25, false);
    fo(g, 'M 303 340 C 305 336 311 336 313 340 L 313 420 C 311 424 305 424 303 420 Z', '#A07838', 0.25, false);

    // === KNOT FILLS ===
    feo(g, 'ellipse', { cx: 50, cy: 178, rx: 4, ry: 5, fill: '#8B6830' }, 0.5, false);
    feo(g, 'ellipse', { cx: 53, cy: 318, rx: 4, ry: 5, fill: '#8B6830' }, 0.5, false);
    feo(g, 'ellipse', { cx: 310, cy: 198, rx: 4, ry: 5, fill: '#8B6830' }, 0.5, false);
    feo(g, 'ellipse', { cx: 307, cy: 338, rx: 4, ry: 5, fill: '#8B6830' }, 0.5, false);

    // === CHAIR CROSSBAR FILL ===
    var crossbarGrad = gd(defs, 'l', [
      [0, '#B08048', 1], [0.5, '#D4A868', 1], [1, '#B08048', 1]
    ], { x1: 38, y1: 380, x2: 38, y2: 400 });
    fl(g,
      'M 38 380 C 40 376 48 374 54 376 L 306 376 C 312 374 320 376 322 380 L 322 394 C 320 398 312 400 306 398 L 54 398 C 48 400 40 398 38 394 Z',
      crossbarGrad, a);
    // Crossbar grain overlay
    fo(g, 'M 56 381 L 306 381 L 306 387 L 56 387 Z', '#A07838', 0.2, false);

    // === CHAIR TOP BAR FILL ===
    var topBarGrad = gd(defs, 'l', [
      [0, '#C89858', 1], [0.5, '#D4A868', 1], [1, '#C89858', 1]
    ], { x1: 44, y1: 18, x2: 44, y2: 28 });
    fl(g, 'M 44 18 L 316 18 L 316 28 L 44 28 Z', topBarGrad, false);

    // Background ambient warmth on scene edges
    fo(g, 'M 59 24 L 88 24 L 88 120 L 59 120 Z', '#5A3A25', 0.15, false);
    fo(g, 'M 272 24 L 301 24 L 301 120 L 272 120 Z', '#5A3A25', 0.15, false);
  },

  // =====================================================================
  // Layer 9: Polish — catchlights, eye shine, cheek blush, nose highlight,
  // hair shine, lip gloss, shadows, highlights, fingernails, warm glow
  // =====================================================================
  (g, a, defs) => {
    // === EYE CATCHLIGHTS ===
    // Left eye — main sparkle (upper left quadrant, reflection of light source)
    fe(g, 'circle', { cx: 162, cy: 200, r: 2.5, fill: 'white' }, a);
    // Left eye — secondary sparkle (lower right)
    feo(g, 'circle', { cx: 171, cy: 210, rx: 1.3, ry: 1.3, fill: 'white' }, 0.7, false);
    // Left eye — third tiny sparkle
    feo(g, 'circle', { cx: 164, cy: 196, rx: 0.8, ry: 0.8, fill: 'white' }, 0.5, false);
    // Right eye — main sparkle
    fe(g, 'circle', { cx: 196, cy: 200, r: 2.5, fill: 'white' }, a);
    // Right eye — secondary sparkle
    feo(g, 'circle', { cx: 205, cy: 210, rx: 1.3, ry: 1.3, fill: 'white' }, 0.7, false);
    // Right eye — third tiny sparkle
    feo(g, 'circle', { cx: 198, cy: 196, rx: 0.8, ry: 0.8, fill: 'white' }, 0.5, false);

    // Eye iris highlights — light arc in upper iris
    hi(g, 'M 158 198 C 160 194 164 192 168 192 C 172 192 176 194 178 198 C 174 196 170 195 166 195 C 162 195 160 196 158 198 Z', 0.2, false);
    hi(g, 'M 192 198 C 194 194 198 192 202 192 C 206 192 210 194 212 198 C 208 196 204 195 200 195 C 196 195 194 196 192 198 Z', 0.2, false);

    // Eye shadow under brow bone
    sh(g, 'M 144 178 C 150 174 160 170 170 170 C 178 170 184 174 186 178 L 184 182 C 180 178 174 176 166 176 C 158 176 150 180 146 184 Z', 0.08, false);
    sh(g, 'M 178 178 C 184 174 194 170 204 170 C 212 170 218 174 220 178 L 218 182 C 214 178 208 176 200 176 C 192 176 184 180 180 184 Z', 0.08, false);

    // === CHEEK BLUSH — warm peachy pink (radial fade) ===
    var blushLeft = gd(defs, 'r', [
      [0, '#FBBCAE', 0.5], [0.6, '#FBBCAE', 0.2], [1, '#FBBCAE', 0]
    ], { cx: 145, cy: 238, r: 20 });
    fl(g, 'M 125 238 C 125 228 135 218 145 218 C 155 218 165 228 165 238 C 165 248 155 258 145 258 C 135 258 125 248 125 238 Z', blushLeft, a);
    var blushRight = gd(defs, 'r', [
      [0, '#FBBCAE', 0.5], [0.6, '#FBBCAE', 0.2], [1, '#FBBCAE', 0]
    ], { cx: 215, cy: 238, r: 20 });
    fl(g, 'M 195 238 C 195 228 205 218 215 218 C 225 218 235 228 235 238 C 235 248 225 258 215 258 C 205 258 195 248 195 238 Z', blushRight, a);

    // === NOSE HIGHLIGHT ===
    hi(g, 'M 176 234 C 178 232 182 232 184 234 C 182 236 178 236 176 234 Z', 0.35, a);
    // Nose bridge highlight — faint vertical strip
    hi(g, 'M 178 200 C 179 198 181 198 182 200 L 182 228 C 181 230 179 230 178 228 Z', 0.08, false);

    // === FACE SHADOWS ===
    // Under-eye shadow — left
    sh(g, 'M 148 218 C 152 222 158 224 166 224 C 170 224 174 222 178 218 L 176 222 C 172 226 168 228 164 228 C 158 228 152 226 148 222 Z', 0.08, false);
    // Under-eye shadow — right
    sh(g, 'M 182 218 C 186 222 192 224 200 224 C 204 224 208 222 212 218 L 210 222 C 206 226 202 228 198 228 C 192 228 186 226 182 222 Z', 0.08, false);
    // Jaw shadow — left side (subtle modeling)
    sh(g, 'M 118 210 C 120 224 124 236 130 246 C 122 240 118 228 116 214 Z', 0.06, false);
    // Jaw shadow — right side
    sh(g, 'M 246 210 C 244 224 240 236 234 246 C 242 240 246 228 248 214 Z', 0.06, false);
    // Temple shadows
    sh(g, 'M 126 155 C 130 145 136 138 144 134 L 140 140 C 134 146 130 154 128 162 Z', 0.06, false);
    sh(g, 'M 238 155 C 234 145 228 138 220 134 L 224 140 C 230 146 234 154 236 162 Z', 0.06, false);

    // === FOREHEAD HIGHLIGHT — broad light area ===
    hi(g, 'M 160 140 C 168 136 176 134 184 136 C 192 138 198 142 202 148 L 198 154 C 194 148 188 144 180 142 C 172 140 166 142 162 146 Z', 0.12, false);

    // === HAIR SHINE — golden highlights on curls ===
    // Crown top shine
    hi(g, 'M 158 78 C 164 72 174 68 182 70 C 190 72 196 78 198 84 C 192 80 184 76 176 76 C 168 76 162 78 158 82 Z', 0.15, false);
    // Golden curl highlights
    var goldHi = '#D4B060';
    fo(g, 'M 158 92 C 160 86 168 82 174 86 C 180 90 178 98 172 100 C 166 102 160 98 158 92 Z', goldHi, 0.3, false);
    fo(g, 'M 198 92 C 196 86 188 82 182 86 C 176 90 178 98 184 100 C 190 102 196 98 198 92 Z', goldHi, 0.3, false);
    fo(g, 'M 96 148 C 100 142 106 142 108 148 C 110 154 106 160 100 160 C 94 160 92 154 96 148 Z', goldHi, 0.25, false);
    fo(g, 'M 264 148 C 260 142 254 142 252 148 C 250 154 254 160 260 160 C 266 160 268 154 264 148 Z', goldHi, 0.25, false);
    // Additional hair edge highlights
    hi(g, 'M 136 108 C 142 98 152 90 164 86 L 160 92 C 150 96 142 104 138 114 Z', 0.1, false);
    hi(g, 'M 224 108 C 218 98 208 90 196 86 L 200 92 C 210 96 218 104 222 114 Z', 0.1, false);

    // === HAIR SHADOW — under-hair on face ===
    sh(g, 'M 130 140 C 140 130 156 124 172 122 C 180 122 188 122 196 124 C 210 128 222 136 232 148 L 228 156 C 220 144 208 136 194 132 C 180 128 166 130 154 136 C 144 142 138 150 134 158 Z', 0.12, false);

    // === FINGERNAIL HIGHLIGHTS ===
    feo(g, 'ellipse', { cx: 126, cy: 120, rx: 2.5, ry: 1.5, fill: 'white' }, 0.5, a);
    feo(g, 'ellipse', { cx: 146, cy: 124, rx: 2.5, ry: 1.5, fill: 'white' }, 0.5, false);
    feo(g, 'ellipse', { cx: 176, cy: 120, rx: 2.5, ry: 1.5, fill: 'white' }, 0.5, false);
    feo(g, 'ellipse', { cx: 198, cy: 116, rx: 2, ry: 1.2, fill: 'white' }, 0.5, false);

    // === LIP SHINE — subtle gloss on lower lip ===
    hi(g, 'M 172 268 C 176 266 180 265 184 266 C 188 268 190 270 188 272 C 184 270 178 270 174 272 C 172 270 172 268 172 268 Z', 0.25, a);
    // Upper lip cupid's bow highlight
    hi(g, 'M 176 256 C 178 254 182 254 184 256 C 182 255 178 255 176 256 Z', 0.2, false);

    // === CHAIR BAR SHINE ===
    // Left bar — vertical highlight strip
    hi(g, 'M 48 30 C 49 28 51 28 52 30 L 52 120 C 51 122 49 122 48 120 Z', 0.12, false);
    hi(g, 'M 48 200 C 49 198 51 198 52 200 L 52 300 C 51 302 49 302 48 300 Z', 0.08, false);
    // Right bar — vertical highlight strip
    hi(g, 'M 308 40 C 309 38 311 38 312 40 L 312 140 C 311 142 309 142 308 140 Z', 0.1, false);
    hi(g, 'M 308 220 C 309 218 311 218 312 220 L 312 320 C 311 322 309 322 308 320 Z', 0.07, false);

    // === CROSSBAR SHINE ===
    hi(g, 'M 70 381 L 290 381 L 290 384 L 70 384 Z', 0.1, false);

    // === SHIRT FABRIC HIGHLIGHTS ===
    hi(g, 'M 170 300 C 174 296 180 294 186 296 C 192 298 196 302 198 308 L 190 306 C 186 302 180 300 174 302 Z', 0.1, false);
    // Shoulder highlight left
    hi(g, 'M 120 318 C 124 314 130 312 136 314 L 134 320 C 128 318 124 320 122 324 Z', 0.08, false);
    // Shoulder highlight right
    hi(g, 'M 240 318 C 236 314 230 312 224 314 L 226 320 C 232 318 236 320 238 324 Z', 0.08, false);

    // === SHIRT COLLAR SHINE ===
    hi(g, 'M 168 284 C 174 280 180 279 186 280 C 192 282 196 286 198 290 L 192 288 C 188 284 182 282 176 284 C 172 286 170 288 170 290 Z', 0.12, false);

    // === WARM AMBIENT LIGHTING OVERLAY ===
    // Gentle warm wash over the entire central scene
    var warmGlow = gd(defs, 'r', [
      [0, '#FFF8E1', 0.06], [0.5, '#FFF0D0', 0.03], [1, '#FFF8E1', 0]
    ], { cx: 180, cy: 200, r: 180 });
    fl(g, 'M 59 24 L 301 24 L 301 395 L 59 395 Z', warmGlow, false);

    // Slight vignette on edges
    var vignette = gd(defs, 'r', [
      [0, '#000000', 0], [0.6, '#000000', 0], [1, '#000000', 0.08]
    ], { cx: 180, cy: 210, r: 200 });
    fl(g, 'M 0 0 L 360 0 L 360 450 L 0 450 Z', vignette, false);

    // Hand shadow on hair
    sh(g, 'M 140 94 C 152 88 166 84 180 84 C 194 84 208 88 218 94 L 216 100 C 206 94 194 90 180 90 C 166 90 154 94 144 100 Z', 0.1, false);

    // Subtle skin sheen on forehead
    var sheenGrad = gd(defs, 'r', [
      [0, '#FFFFFF', 0.1], [0.5, '#FFFFFF', 0.04], [1, '#FFFFFF', 0]
    ], { cx: 180, cy: 152, r: 30 });
    fl(g, 'M 155 140 C 165 134 175 132 185 134 C 195 136 202 142 206 150 C 200 146 192 142 180 140 C 170 140 162 142 158 146 Z', sheenGrad, false);
  }
];
