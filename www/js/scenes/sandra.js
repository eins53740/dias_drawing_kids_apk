const sandraLayers = [
  // Layer 0: Construction guides — center axis, head proportions, table edge, body zones
  (g, a) => {
    // Vertical center axis
    pp(g, ['M 180 10 L 180 450'], a, lt);
    // Table edge horizon
    pp(g, ['M 0 250 L 360 250'], a, lt);
    // Head oval guide
    pp(g, ['M 180 38 C 214 38 234 62 234 92 C 234 122 214 148 180 148 C 146 148 126 122 126 92 C 126 62 146 38 180 38 Z'], a, lt);
    // Face vertical center (slightly left due to 3/4 angle)
    pp(g, ['M 176 40 L 176 150'], a, lt);
    // Eye line guide
    pp(g, ['M 135 88 L 225 88'], a, lt);
    // Nose line guide
    pp(g, ['M 145 112 L 215 112'], a, lt);
    // Mouth line guide
    pp(g, ['M 150 128 L 210 128'], a, lt);
    // Shoulder line guide
    pp(g, ['M 90 174 L 270 174'], a, lt);
    // Checkered grid for tablecloth
    for (let x = 0; x <= 360; x += 45) {
      pp(g, [`M ${x} 250 L ${x} 450`], a, lt);
    }
    for (let y = 250; y <= 450; y += 33) {
      pp(g, [`M 0 ${y} L 360 ${y}`], a, lt);
    }
    // Body center zone
    pp(g, ['M 105 10 L 105 250', 'M 255 10 L 255 250'], a, lt);
    // Arm construction lines
    pp(g, ['M 120 180 C 108 210 96 240 92 250'], a, lt);
    pp(g, ['M 240 180 C 252 210 264 240 268 250'], a, lt);
  },

  // Layer 1: Body outlines — head, neck, shoulders, arms, torso with anatomical detail
  (g, a) => {
    // Head — refined oval with jaw definition, chin, slight 3/4 angle
    pp(g, [
      'M 180 40 C 160 40 147 48 140 60 C 134 70 132 82 132 92 C 132 102 134 112 140 122 C 144 128 150 134 156 140 C 162 144 170 148 180 149 C 190 148 198 144 204 140 C 210 134 216 128 220 122 C 226 112 228 102 228 92 C 228 82 226 70 220 60 C 213 48 200 40 180 40 Z'
    ], a);
    // Jawline refinement — more angular, realistic jaw
    pp(g, [
      'M 140 122 C 142 126 146 132 152 138 C 156 142 162 146 170 148',
      'M 220 122 C 218 126 214 132 208 138 C 204 142 198 146 190 148'
    ], a);
    // Chin contour
    pp(g, [
      'M 170 148 C 174 150 178 151 180 151 C 182 151 186 150 190 148'
    ], a);
    // Neck — slim, slightly forward tilt (looking down at dominoes)
    pp(g, [
      'M 168 148 C 167 152 166 158 166 164 C 166 168 166 170 166 172',
      'M 192 148 C 193 152 194 158 194 164 C 194 168 194 170 194 172'
    ], a);
    // Neck tendon lines (sternocleidomastoid muscle hints)
    pps(g, [
      'M 170 150 C 168 156 166 162 164 168',
      'M 190 150 C 192 156 194 162 196 168'
    ], a, 0.6, '#888');
    // Trapezius muscle from neck to shoulders
    pp(g, [
      'M 166 172 C 156 174 144 178 132 184 C 122 190 114 196 108 206',
      'M 194 172 C 204 174 216 178 228 184 C 238 190 246 196 252 206'
    ], a);
    // Left shoulder and arm — detailed contour
    pp(g, [
      'M 108 206 C 106 212 104 220 102 228 C 100 236 98 242 96 248 C 95 250 94 252 94 254'
    ], a);
    // Left arm inner contour
    pp(g, [
      'M 132 184 C 126 192 120 204 116 216 C 112 228 110 240 108 250'
    ], a);
    // Right shoulder and arm — detailed contour
    pp(g, [
      'M 252 206 C 254 212 256 220 258 228 C 260 236 262 242 264 248 C 265 250 266 252 266 254'
    ], a);
    // Right arm inner contour
    pp(g, [
      'M 228 184 C 234 192 240 204 244 216 C 248 228 250 240 252 250'
    ], a);
    // Torso sides going to table edge
    pp(g, [
      'M 108 206 C 106 218 104 232 102 250',
      'M 252 206 C 254 218 256 232 258 250'
    ], a);
    // Left ear — partially visible behind hair
    pp(g, [
      'M 134 82 C 131 78 128 80 127 86 C 126 92 128 98 131 100 C 133 102 135 100 136 96'
    ], a);
    // Ear inner detail (antihelix)
    pps(g, [
      'M 130 84 C 129 88 129 92 130 96',
      'M 131 86 C 130 89 131 93 132 95'
    ], a, 0.5, '#888');
    // Right ear — partially visible
    pp(g, [
      'M 226 82 C 229 78 232 80 233 86 C 234 92 232 98 229 100 C 227 102 225 100 224 96'
    ], a);
    // Right ear inner detail
    pps(g, [
      'M 230 84 C 231 88 231 92 230 96'
    ], a, 0.5, '#888');
  },

  // Layer 2: Face — photorealistic eyes, brows, nose, mouth, expression lines
  (g, a) => {
    // === LEFT EYE (her right) — looking down, half-lidded ===
    // Upper eyelid crease (double eyelid fold)
    pp(g, [
      'M 156 80 C 158 77 162 75 168 75 C 174 75 178 76 182 78 C 184 79 185 80 186 82'
    ], a);
    // Upper eyelid — heavy, covering upper iris
    pp(g, [
      'M 157 85 C 159 82 163 80 169 80 C 175 80 179 81 183 83 C 185 84 186 86 186 88'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 157 90 C 160 93 165 95 171 96 C 177 96 182 94 186 91'
    ], a);
    // Eye opening shape (almond)
    pp(g, [
      'M 157 87 C 159 84 164 82 170 82 C 176 82 181 83 185 86',
      'M 157 87 C 160 91 165 93 171 94 C 177 94 182 92 185 89'
    ], a);
    // Tear duct (inner corner)
    pps(g, [
      'M 156 87 C 155 86 155 88 156 89'
    ], a, 0.5, '#888');
    // Iris outline
    pp(g, [
      'M 167 84 C 164 86 164 90 167 93 C 170 95 175 95 178 93 C 181 90 181 86 178 84 C 175 82 170 82 167 84 Z'
    ], a);
    // Pupil
    fe(g, 'ellipse', { cx: 172, cy: 89, rx: 3.2, ry: 3.0, fill: a ? HL : '#3E2415' }, a);
    // Eyelashes — upper (6 individual lashes)
    pps(g, [
      'M 158 84 C 156 81 155 78 156 76',
      'M 161 82 C 159 79 159 76 160 74',
      'M 165 81 C 164 78 164 75 165 73',
      'M 170 80 C 170 77 170 74 171 72',
      'M 175 80 C 176 77 177 74 177 72',
      'M 180 82 C 182 79 183 76 183 74'
    ], a, 0.6, '#4A4A4A');
    // Lower lashes — subtle
    pps(g, [
      'M 162 94 C 160 96 159 97 158 98',
      'M 168 95 C 167 97 166 99 165 100',
      'M 174 95 C 174 97 174 99 173 100',
      'M 180 94 C 181 96 182 97 183 98'
    ], a, 0.4, '#888');

    // === RIGHT EYE (her left) — looking down, half-lidded ===
    // Upper eyelid crease
    pp(g, [
      'M 194 82 C 196 79 200 77 206 76 C 212 76 216 77 220 79 C 222 80 223 81 224 82'
    ], a);
    // Upper eyelid
    pp(g, [
      'M 194 88 C 196 85 200 83 206 82 C 212 82 216 83 219 85 C 221 86 222 88 222 90'
    ], a);
    // Lower eyelid
    pp(g, [
      'M 194 92 C 197 95 202 97 208 97 C 214 97 219 95 222 92'
    ], a);
    // Eye opening shape
    pp(g, [
      'M 194 89 C 197 86 202 84 208 84 C 214 84 218 85 221 88',
      'M 194 89 C 197 93 202 95 208 95 C 214 95 218 93 221 91'
    ], a);
    // Tear duct
    pps(g, [
      'M 223 90 C 224 89 224 91 223 92'
    ], a, 0.5, '#888');
    // Iris outline
    pp(g, [
      'M 204 86 C 201 88 201 92 204 94 C 207 96 212 96 215 94 C 218 92 218 88 215 86 C 212 84 207 84 204 86 Z'
    ], a);
    // Pupil
    fe(g, 'ellipse', { cx: 209, cy: 90, rx: 3.2, ry: 3.0, fill: a ? HL : '#3E2415' }, a);
    // Eyelashes — upper (6 individual lashes)
    pps(g, [
      'M 196 87 C 194 84 193 81 194 79',
      'M 200 84 C 199 81 199 78 200 76',
      'M 204 83 C 204 80 204 77 205 75',
      'M 209 82 C 210 79 210 76 211 74',
      'M 214 83 C 215 80 216 77 216 75',
      'M 219 85 C 221 82 222 79 222 77'
    ], a, 0.6, '#4A4A4A');
    // Lower lashes
    pps(g, [
      'M 199 95 C 198 97 197 98 196 99',
      'M 205 96 C 205 98 204 99 204 100',
      'M 211 96 C 211 98 212 99 212 100',
      'M 217 94 C 218 96 219 97 220 98'
    ], a, 0.4, '#888');

    // === EYEBROWS ===
    // Left eyebrow — arched, with individual hair strokes
    pp(g, [
      'M 152 72 C 156 66 164 63 172 64 C 178 65 182 67 186 72'
    ], a);
    // Eyebrow hair strokes
    pps(g, [
      'M 154 72 C 156 68 160 66 162 65',
      'M 158 70 C 160 67 164 65 166 64',
      'M 162 69 C 164 66 168 64 170 64',
      'M 166 68 C 168 66 172 64 174 65',
      'M 170 68 C 172 66 176 65 178 66',
      'M 174 69 C 176 67 180 66 182 68',
      'M 178 70 C 180 68 184 68 186 70'
    ], a, 0.5, '#7A5A30');
    // Right eyebrow — arched
    pp(g, [
      'M 194 72 C 198 67 204 64 212 64 C 218 65 222 68 226 72'
    ], a);
    // Eyebrow hair strokes
    pps(g, [
      'M 196 72 C 198 69 202 66 204 65',
      'M 200 70 C 202 67 206 65 208 65',
      'M 204 70 C 206 67 210 65 212 65',
      'M 208 70 C 210 67 214 66 216 66',
      'M 212 70 C 214 68 218 67 220 68',
      'M 216 71 C 218 69 222 68 224 70'
    ], a, 0.5, '#7A5A30');

    // === NOSE ===
    // Nose bridge — subtle line from between eyes
    pps(g, [
      'M 180 78 C 179 82 178 88 177 94 C 176 100 175 106 174 110'
    ], a, 0.8, '#888');
    // Nose tip — rounded
    pp(g, [
      'M 170 112 C 171 114 173 116 176 118 C 179 119 182 119 184 118 C 187 116 189 114 190 112'
    ], a);
    // Nostrils
    pp(g, [
      'M 172 115 C 173 113 175 112 177 114 C 178 115 177 116 175 116 C 173 116 172 116 172 115 Z',
      'M 183 114 C 185 112 187 113 188 115 C 188 116 187 116 185 116 C 183 116 183 115 183 114 Z'
    ], a);
    // Alar crease (nose-to-cheek fold)
    pps(g, [
      'M 170 112 C 168 114 166 116 165 118',
      'M 190 112 C 192 114 194 116 195 118'
    ], a, 0.4, '#888');

    // === MOUTH — gentle concentration, slight smile ===
    // Upper lip — cupid's bow
    pp(g, [
      'M 164 128 C 167 126 170 124 174 125 C 176 126 178 127 180 127 C 182 127 184 126 186 125 C 190 124 193 126 196 128'
    ], a);
    // Lower lip — fuller
    pp(g, [
      'M 164 128 C 166 132 170 136 174 138 C 178 139 182 139 186 138 C 190 136 194 132 196 128'
    ], a);
    // Vermillion border detail
    pps(g, [
      'M 166 128 C 168 127 172 126 176 127 C 178 128 180 128 182 127 C 186 126 190 127 194 128'
    ], a, 0.4, '#C06060');
    // Philtrum (groove above upper lip)
    pps(g, [
      'M 178 120 C 177 122 176 124 176 126',
      'M 182 120 C 183 122 184 124 184 126'
    ], a, 0.3, '#888');
    // Lip parting line
    pps(g, [
      'M 166 129 C 170 128 176 127 180 127 C 184 127 190 128 194 129'
    ], a, 0.5, '#A06060');

    // === NASOLABIAL FOLDS ===
    pps(g, [
      'M 164 118 C 162 122 160 126 160 130',
      'M 196 118 C 198 122 200 126 200 130'
    ], a, 0.4, '#888');

    // === CHIN ===
    // Chin crease
    pps(g, [
      'M 174 143 C 176 144 178 145 180 145 C 182 145 184 144 186 143'
    ], a, 0.4, '#888');
  },

  // Layer 3: Hair — voluminous wavy/curly hair with ponytail, many individual strands
  (g, a) => {
    // Main hair mass — top of head volume
    pp(g, [
      'M 148 82 C 146 68 148 52 156 42 C 162 34 170 28 180 26 C 190 24 200 26 210 32 C 218 38 224 46 228 58 C 230 66 230 76 228 86'
    ], a);
    // Hair left side volume — sweeping down
    pp(g, [
      'M 148 82 C 144 72 144 60 148 50 C 152 42 158 36 166 30 C 172 26 178 24 184 24'
    ], a);
    // Hair right side — flows into ponytail gathering
    pp(g, [
      'M 228 86 C 230 78 232 68 236 60 C 240 54 244 50 248 50'
    ], a);
    // Ponytail — main volume going back-right and down
    pp(g, [
      'M 226 48 C 236 42 248 44 254 52 C 260 62 264 76 264 92 C 264 108 262 124 256 136 C 252 144 248 150 242 154 C 238 156 234 158 230 158'
    ], a);
    // Ponytail underside
    pp(g, [
      'M 224 54 C 232 50 242 52 248 58 C 254 68 256 82 256 98 C 256 114 252 130 246 142 C 242 148 238 152 234 154'
    ], a);
    // Hair elastic / scrunchie
    pp(g, [
      'M 222 46 C 226 42 232 40 238 42 C 244 44 246 48 244 52 C 242 56 236 58 230 56 C 226 54 222 52 222 46 Z'
    ], a);
    // Loose strands framing left side of face
    pp(g, [
      'M 146 76 C 144 86 142 98 144 112 C 146 124 148 134 152 144',
      'M 142 80 C 138 92 136 106 138 120 C 140 132 144 142 148 150',
      'M 140 84 C 136 94 134 104 134 116 C 134 126 136 136 140 146'
    ], a);
    // Loose strands framing right side
    pp(g, [
      'M 228 78 C 230 88 232 100 230 114 C 228 124 226 132 224 138',
      'M 230 82 C 232 92 234 104 232 118 C 230 128 228 136 226 142'
    ], a);
    // Wave texture lines through hair — interior strand paths (20+ strands)
    pps(g, [
      'M 158 36 C 166 30 178 26 190 28',
      'M 154 46 C 162 38 174 34 186 36 C 198 38 208 44 216 52',
      'M 152 58 C 160 50 172 46 184 48 C 196 50 206 56 214 64',
      'M 150 70 C 158 62 170 58 182 60 C 194 62 204 68 212 76',
      'M 156 34 C 160 30 166 28 172 26',
      'M 168 28 C 174 26 182 24 190 26',
      'M 190 26 C 198 28 206 32 212 38',
      'M 210 40 C 216 46 220 54 224 62'
    ], a, 0.5, '#A07040');
    // Ponytail interior strands
    pps(g, [
      'M 230 50 C 238 48 244 52 248 58 C 254 68 258 82 258 98',
      'M 228 52 C 234 48 240 50 244 56 C 250 66 254 80 254 96 C 254 112 250 128 244 140',
      'M 234 46 C 240 44 246 46 250 52 C 256 64 260 80 260 98 C 260 116 256 132 250 142',
      'M 238 54 C 242 58 246 66 248 76 C 250 88 250 100 248 112 C 246 124 242 134 238 142',
      'M 244 60 C 248 68 250 78 252 90 C 252 102 250 114 246 126'
    ], a, 0.5, '#A07040');
    // Flyaway strands at edges
    pps(g, [
      'M 138 78 C 136 76 134 78 134 82',
      'M 232 74 C 234 72 236 74 236 78',
      'M 144 68 C 140 66 138 68 138 72',
      'M 226 44 C 228 42 230 44 230 48',
      'M 148 46 C 146 42 144 44 144 48',
      'M 250 48 C 252 46 254 48 254 52',
      'M 242 154 C 244 156 246 158 244 160',
      'M 232 156 C 234 158 236 160 234 162'
    ], a, 0.4, '#A07040');
    // Part line — center-ish
    pps(g, [
      'M 178 24 C 180 30 182 38 184 48'
    ], a, 0.6, '#6B4A28');
  },

  // Layer 4: Clothing — pink cardigan open over black t-shirt, wrinkles, seams, text
  (g, a) => {
    // === PINK CARDIGAN — open front ===
    // Left shoulder seam / outer edge
    pp(g, [
      'M 118 178 C 126 170 140 164 156 162 C 162 162 166 162 168 162'
    ], a);
    // Right shoulder seam / outer edge
    pp(g, [
      'M 242 178 C 234 170 220 164 204 162 C 198 162 194 162 192 162'
    ], a);
    // Cardigan left opening — V-shape
    pp(g, [
      'M 164 168 C 162 178 160 192 158 208 C 156 222 154 236 152 250'
    ], a);
    // Cardigan right opening
    pp(g, [
      'M 196 168 C 198 178 200 192 202 208 C 204 222 206 236 208 250'
    ], a);
    // Left collar / lapel fold
    pp(g, [
      'M 164 168 C 160 164 154 162 150 166 C 146 170 146 176 150 180 C 154 184 158 182 160 178 C 162 174 163 172 164 168'
    ], a);
    // Right collar / lapel fold
    pp(g, [
      'M 196 168 C 200 164 206 162 210 166 C 214 170 214 176 210 180 C 206 184 202 182 200 178 C 198 174 197 172 196 168'
    ], a);
    // Left sleeve wrinkles — shoulder area
    pps(g, [
      'M 124 182 C 122 186 120 190 118 194',
      'M 130 178 C 128 182 126 186 124 190',
      'M 118 194 C 116 200 114 206 112 212',
      'M 112 212 C 110 218 108 224 106 230'
    ], a, 0.5, '#888');
    // Right sleeve wrinkles — shoulder area
    pps(g, [
      'M 236 182 C 238 186 240 190 242 194',
      'M 230 178 C 232 182 234 186 236 190',
      'M 242 194 C 244 200 246 206 248 212',
      'M 248 212 C 250 218 252 224 254 230'
    ], a, 0.5, '#888');
    // Left arm fold at elbow area
    pps(g, [
      'M 106 220 C 110 224 114 228 118 230',
      'M 104 226 C 108 230 112 234 116 236',
      'M 108 214 C 106 218 104 222 102 226'
    ], a, 0.5, '#888');
    // Right arm fold at elbow area
    pps(g, [
      'M 254 220 C 250 224 246 228 242 230',
      'M 256 226 C 252 230 248 234 244 236',
      'M 252 214 C 254 218 256 222 258 226'
    ], a, 0.5, '#888');
    // Cardigan side seams — left
    pps(g, [
      'M 102 250 C 104 236 106 220 108 206 C 110 198 112 192 116 186'
    ], a, 0.5, '#888');
    // Cardigan side seams — right
    pps(g, [
      'M 258 250 C 256 236 254 220 252 206 C 250 198 248 192 244 186'
    ], a, 0.5, '#888');
    // Cardigan center back fold lines
    pps(g, [
      'M 140 184 C 138 198 136 214 134 230',
      'M 220 184 C 222 198 224 214 226 230'
    ], a, 0.4, '#888');
    // Gravity drape lines on cardigan
    pps(g, [
      'M 126 188 C 124 202 122 218 120 236 C 118 244 116 248 114 250',
      'M 234 188 C 236 202 238 218 240 236 C 242 244 244 248 246 250'
    ], a, 0.4, '#888');

    // === BLACK T-SHIRT visible V-neckline ===
    pp(g, [
      'M 162 172 C 168 180 174 198 180 222',
      'M 198 172 C 192 180 186 198 180 222'
    ], a);
    // T-shirt neckline — rounded
    pp(g, [
      'M 162 172 C 166 170 172 168 180 168 C 188 168 194 170 198 172'
    ], a);
    // T-shirt collar seam detail
    pps(g, [
      'M 163 173 C 168 171 174 170 180 170 C 186 170 192 171 197 173'
    ], a, 0.4, '#555');
    // Cursive text hint on black t-shirt ("It's all good")
    pps(g, [
      'M 169 200 C 171 196 173 198 175 194 C 177 196 179 194 181 198 C 183 196 185 198 187 196 C 189 198 191 196 193 198'
    ], a, 0.5, '#888');
  },

  // Layer 5: Hands holding domino pieces — anatomical fingers, knuckle details
  (g, a) => {
    // === LEFT HAND ===
    // Wrist transition
    pp(g, ['M 100 240 C 98 244 94 246 90 246'], a);
    // Palm outline
    pp(g, [
      'M 90 246 C 84 246 80 242 78 238 C 76 234 78 230 82 228 C 86 226 90 228 94 232 C 96 236 98 240 100 240'
    ], a);
    // Thumb — with knuckle and nail
    pp(g, ['M 94 232 C 98 228 100 222 98 218 C 96 214 92 214 90 218 C 88 222 88 226 90 230'], a);
    pps(g, ['M 96 222 C 95 222 94 222 93 222'], a, 0.3, '#888'); // thumb knuckle crease
    // Index finger — with joints
    pp(g, ['M 82 228 C 78 222 74 216 72 210 C 70 206 72 202 76 202 C 80 202 82 206 82 210 C 82 214 82 218 82 222'], a);
    pps(g, ['M 74 210 C 76 210 78 210 80 210'], a, 0.3, '#888'); // knuckle crease
    pps(g, ['M 73 206 C 75 206 77 206 78 207'], a, 0.3, '#888'); // fingertip crease
    // Middle finger
    pp(g, ['M 80 230 C 74 224 70 216 68 208 C 66 202 68 198 72 198 C 76 198 78 202 78 208 C 78 212 78 218 80 224'], a);
    pps(g, ['M 70 208 C 72 208 74 208 76 208'], a, 0.3, '#888');
    // Ring finger
    pp(g, ['M 78 234 C 72 228 68 220 66 212 C 64 206 66 202 70 202 C 74 202 76 206 76 212 C 76 218 78 224 78 228'], a);
    pps(g, ['M 68 212 C 70 212 72 212 74 212'], a, 0.3, '#888');
    // Pinky finger
    pp(g, ['M 78 238 C 74 234 70 226 68 220 C 66 216 68 212 72 214 C 74 216 76 220 76 224 C 76 228 78 232 78 236'], a);
    // Fingernail hints
    pps(g, [
      'M 74 204 C 75 202 77 202 78 204',
      'M 70 200 C 71 198 73 198 74 200',
      'M 68 204 C 69 202 71 202 72 204',
      'M 70 214 C 71 213 73 213 74 214'
    ], a, 0.3, '#888');

    // Domino fan in left hand (3 dominoes, tilted)
    const ld1 = ce('g', { transform: 'rotate(-25 72 196)' });
    const lr1 = ce('rect', { x: 64, y: 182, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr1, a); ld1.appendChild(lr1);
    const ll1 = ce('line', { x1: 64, y1: 196, x2: 80, y2: 196, stroke: 'none' });
    lt(ll1, a); ld1.appendChild(ll1);
    fe(ld1, 'circle', { cx: 72, cy: 189, r: 1.2, fill: a ? HL : P }, false);
    fe(ld1, 'circle', { cx: 72, cy: 202, r: 1.2, fill: a ? HL : P }, false);
    fe(ld1, 'circle', { cx: 68, cy: 205, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld1);

    const ld2 = ce('g', { transform: 'rotate(-8 80 194)' });
    const lr2 = ce('rect', { x: 72, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr2, a); ld2.appendChild(lr2);
    const ll2 = ce('line', { x1: 72, y1: 194, x2: 88, y2: 194, stroke: 'none' });
    lt(ll2, a); ld2.appendChild(ll2);
    fe(ld2, 'circle', { cx: 78, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld2, 'circle', { cx: 82, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld2, 'circle', { cx: 80, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld2);

    const ld3 = ce('g', { transform: 'rotate(10 88 194)' });
    const lr3 = ce('rect', { x: 80, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(lr3, a); ld3.appendChild(lr3);
    const ll3 = ce('line', { x1: 80, y1: 194, x2: 96, y2: 194, stroke: 'none' });
    lt(ll3, a); ld3.appendChild(ll3);
    fe(ld3, 'circle', { cx: 86, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 90, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 88, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(ld3, 'circle', { cx: 84, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(ld3);

    // === RIGHT HAND ===
    // Wrist transition
    pp(g, ['M 260 240 C 262 244 266 246 270 246'], a);
    // Palm outline
    pp(g, [
      'M 270 246 C 276 246 280 242 282 238 C 284 234 282 230 278 228 C 274 226 270 228 266 232 C 264 236 262 240 260 240'
    ], a);
    // Thumb
    pp(g, ['M 266 232 C 262 228 260 222 262 218 C 264 214 268 214 270 218 C 272 222 272 226 270 230'], a);
    pps(g, ['M 264 222 C 265 222 266 222 267 222'], a, 0.3, '#888');
    // Index finger
    pp(g, ['M 278 228 C 282 222 286 216 288 210 C 290 206 288 202 284 202 C 280 202 278 206 278 210 C 278 214 278 218 278 222'], a);
    pps(g, ['M 286 210 C 284 210 282 210 280 210'], a, 0.3, '#888');
    // Middle finger
    pp(g, ['M 280 230 C 286 224 290 216 292 208 C 294 202 292 198 288 198 C 284 198 282 202 282 208 C 282 212 282 218 280 224'], a);
    pps(g, ['M 290 208 C 288 208 286 208 284 208'], a, 0.3, '#888');
    // Ring finger
    pp(g, ['M 282 234 C 288 228 292 220 294 212 C 296 206 294 202 290 202 C 286 202 284 206 284 212 C 284 218 282 224 282 228'], a);
    pps(g, ['M 292 212 C 290 212 288 212 286 212'], a, 0.3, '#888');
    // Pinky finger
    pp(g, ['M 282 238 C 286 234 290 226 292 220 C 294 216 292 212 288 214 C 286 216 284 220 284 224 C 284 228 282 232 282 236'], a);
    // Fingernail hints
    pps(g, [
      'M 286 204 C 285 202 283 202 282 204',
      'M 290 200 C 289 198 287 198 286 200',
      'M 292 204 C 291 202 289 202 288 204',
      'M 290 214 C 289 213 287 213 286 214'
    ], a, 0.3, '#888');

    // Domino fan in right hand (3 dominoes)
    const rd1 = ce('g', { transform: 'rotate(-10 272 194)' });
    const rr1 = ce('rect', { x: 264, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr1, a); rd1.appendChild(rr1);
    const rl1 = ce('line', { x1: 264, y1: 194, x2: 280, y2: 194, stroke: 'none' });
    lt(rl1, a); rd1.appendChild(rl1);
    fe(rd1, 'circle', { cx: 270, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(rd1, 'circle', { cx: 274, cy: 186, r: 1.2, fill: a ? HL : P }, false);
    fe(rd1, 'circle', { cx: 272, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd1);

    const rd2 = ce('g', { transform: 'rotate(8 280 194)' });
    const rr2 = ce('rect', { x: 272, y: 180, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr2, a); rd2.appendChild(rr2);
    const rl2 = ce('line', { x1: 272, y1: 194, x2: 288, y2: 194, stroke: 'none' });
    lt(rl2, a); rd2.appendChild(rl2);
    fe(rd2, 'circle', { cx: 280, cy: 187, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 280, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 276, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    fe(rd2, 'circle', { cx: 284, cy: 200, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd2);

    const rd3 = ce('g', { transform: 'rotate(25 288 196)' });
    const rr3 = ce('rect', { x: 280, y: 182, width: 16, height: 28, rx: 2, fill: 'none' });
    sk(rr3, a); rd3.appendChild(rr3);
    const rl3 = ce('line', { x1: 280, y1: 196, x2: 296, y2: 196, stroke: 'none' });
    lt(rl3, a); rd3.appendChild(rl3);
    fe(rd3, 'circle', { cx: 288, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 284, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 292, cy: 188, r: 1.2, fill: a ? HL : P }, false);
    fe(rd3, 'circle', { cx: 288, cy: 204, r: 1.2, fill: a ? HL : P }, false);
    g.appendChild(rd3);

    // Watch on left wrist
    pp(g, [
      'M 88 248 L 88 254 L 100 254 L 100 248 Z'
    ], a);
    // Watch face
    fe(g, 'rect', { cx: 94, cy: 251, x: 90, y: 249, width: 8, height: 4, rx: 1, fill: 'none', stroke: a ? HL : P, 'stroke-width': 0.6 }, a);
    // Watch band
    pps(g, [
      'M 88 251 C 86 251 84 250 82 250',
      'M 100 251 C 102 251 104 250 106 250'
    ], a, 0.5, '#888');
  },

  // Layer 6: Background & table objects — cabinets, painting, domino chain, phone, remote, napkin
  (g, a) => {
    // === KITCHEN CABINETS (upper left background) ===
    pp(g, [
      'M 0 0 L 0 30 L 82 30 L 82 0',
      'M 0 15 L 82 15'
    ], a, lt);
    // Cabinet panel lines
    pps(g, [
      'M 4 3 L 4 12 L 38 12 L 38 3 Z',
      'M 42 3 L 42 12 L 78 12 L 78 3 Z',
      'M 4 18 L 4 27 L 38 27 L 38 18 Z',
      'M 42 18 L 42 27 L 78 27 L 78 18 Z'
    ], a, 0.4, '#888');
    // Cabinet handles
    pps(g, [
      'M 18 8 L 26 8',
      'M 56 8 L 64 8',
      'M 18 22 L 26 22',
      'M 56 22 L 64 22'
    ], a, 0.5, '#888');
    // Cabinet edge / countertop line
    pps(g, [
      'M 0 32 L 82 32',
      'M 0 36 L 82 36'
    ], a, 0.3, '#888');

    // === DARK PAINTING/PHOTO behind Sandra (right side) ===
    pp(g, ['M 268 18 L 322 18 L 322 80 L 268 80 Z'], a, lt);
    // Frame detail
    pps(g, [
      'M 270 20 L 320 20 L 320 78 L 270 78 Z'
    ], a, 0.4, '#888');
    // Image content hints (dark landscape)
    pps(g, [
      'M 274 60 C 280 54 290 50 300 52 C 310 54 316 60 318 68',
      'M 272 70 L 320 70'
    ], a, 0.3, '#555');

    // === DOMINO CHAIN on table (7 played pieces) ===
    const dominoes = [
      { x: 100, y: 268, r: -8 },
      { x: 120, y: 272, r: 3 },
      { x: 140, y: 269, r: 85 },
      { x: 156, y: 272, r: -4 },
      { x: 176, y: 268, r: 90 },
      { x: 196, y: 270, r: 6 },
      { x: 216, y: 274, r: -3 }
    ];
    dominoes.forEach(({ x, y, r }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      const rect = ce('rect', { x, y, width: 16, height: 12, rx: 1.5, fill: 'none' });
      sk(rect, a);
      dg.appendChild(rect);
      const line = ce('line', { x1: x + 8, y1: y, x2: x + 8, y2: y + 12 });
      lt(line, a);
      dg.appendChild(line);
      g.appendChild(dg);
    });

    // === PHONE — face-down on table ===
    pp(g, [
      'M 278 286 L 312 286 L 312 312 L 278 312 Z',
      'M 280 288 L 310 288 L 310 310 L 280 310 Z'
    ], a);
    // Phone camera bump
    fe(g, 'circle', { cx: 284, cy: 292, r: 2, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : SW }, a);
    // Phone edge detail
    pps(g, [
      'M 295 286 L 295 288',
      'M 278 296 L 280 296',
      'M 312 300 L 310 300'
    ], a, 0.3, '#888');

    // === TV REMOTE ===
    pp(g, ['M 322 276 L 340 276 L 340 324 L 322 324 Z'], a);
    // Remote rounded top
    pps(g, [
      'M 324 278 L 338 278',
      'M 324 282 L 338 282'
    ], a, 0.4, '#888');
    // Remote buttons
    pps(g, [
      'M 328 286 L 334 286',
      'M 328 292 L 334 292',
      'M 328 298 L 334 298'
    ], a, 0.4, '#888');
    // Power button
    fe(g, 'circle', { cx: 331, cy: 280, r: 2, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // D-pad
    pps(g, [
      'M 328 306 L 334 306',
      'M 331 303 L 331 309'
    ], a, 0.4, '#888');
    // Bottom buttons
    fe(g, 'circle', { cx: 328, cy: 316, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    fe(g, 'circle', { cx: 334, cy: 316, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);

    // === WHITE NAPKIN ===
    pp(g, [
      'M 48 284 C 50 282 56 280 64 282 C 72 284 76 286 78 290 C 80 294 76 298 70 300 C 64 302 56 300 50 298 C 46 296 46 290 48 284 Z'
    ], a);
    // Napkin fold lines
    pps(g, [
      'M 54 286 C 58 290 64 292 68 290',
      'M 52 294 C 56 296 62 296 66 294',
      'M 58 284 C 60 286 62 288 64 288'
    ], a, 0.4, '#888');

    // === WALL / BACKGROUND architectural lines ===
    pps(g, [
      'M 82 0 L 82 100',
      'M 268 0 L 268 100',
      'M 0 100 L 82 100'
    ], a, 0.3, '#aaa');
  },

  // Layer 7: Color fills — skin with gradients, hair, clothing
  (g, a, defs) => {
    // === SKIN — face with realistic gradient ===
    // Base skin tone
    const skinBase = gd(defs, 'l', [
      ['0%', '#FADCC2', 1],
      ['40%', '#F5D0B0', 1],
      ['100%', '#E8C0A0', 1]
    ], { x1: 180, y1: 40, x2: 180, y2: 150 });
    fl(g, 'M 180 42 C 158 42 144 54 138 68 C 134 78 132 90 132 100 C 132 112 136 122 142 130 C 148 138 158 144 168 148 C 174 150 180 151 180 151 C 180 151 186 150 192 148 C 202 144 212 138 218 130 C 224 122 228 112 228 100 C 228 90 226 78 222 68 C 216 54 202 42 180 42 Z', skinBase, a);

    // Forehead highlight — lighter on upper forehead
    const foreheadHi = gd(defs, 'r', [
      ['0%', '#FFF0E0', 0.5],
      ['100%', '#FFF0E0', 0]
    ], { cx: 180, cy: 60, r: 30 });
    fo(g, 'M 155 42 C 165 38 175 38 185 38 C 195 38 205 42 215 48 C 208 44 198 42 188 42 C 178 42 168 44 160 48 Z', foreheadHi, 1, false);

    // Cheek warmth — left cheek radial gradient
    const cheekL = gd(defs, 'r', [
      ['0%', '#F4A0A0', 0.35],
      ['70%', '#F4A0A0', 0.1],
      ['100%', '#F4A0A0', 0]
    ], { cx: 155, cy: 118, r: 18 });
    feo(g, 'ellipse', { cx: 155, cy: 118, rx: 16, ry: 10, fill: cheekL }, 1, false);

    // Cheek warmth — right cheek
    const cheekR = gd(defs, 'r', [
      ['0%', '#F4A0A0', 0.35],
      ['70%', '#F4A0A0', 0.1],
      ['100%', '#F4A0A0', 0]
    ], { cx: 205, cy: 118, r: 18 });
    feo(g, 'ellipse', { cx: 205, cy: 118, rx: 16, ry: 10, fill: cheekR }, 1, false);

    // Neck skin — slightly darker/shadowed
    const neckSkin = gd(defs, 'l', [
      ['0%', '#E8C0A0', 1],
      ['100%', '#D8B090', 1]
    ], { x1: 180, y1: 148, x2: 180, y2: 172 });
    fl(g, 'M 166 148 C 166 156 166 164 166 172 L 194 172 C 194 164 194 156 194 148 C 188 150 182 151 180 151 C 178 151 172 150 166 148 Z', neckSkin, false);

    // Ears skin
    fl(g, 'M 134 82 C 131 78 128 80 127 86 C 126 92 128 98 131 100 C 133 102 135 100 136 96 C 136 90 136 84 134 82 Z', '#F0C8A8', false);
    fl(g, 'M 226 82 C 229 78 232 80 233 86 C 234 92 232 98 229 100 C 227 102 225 100 224 96 C 224 90 224 84 226 82 Z', '#F0C8A8', false);

    // === HAIR FILL — main mass with gradient ===
    const hairGrad = gd(defs, 'l', [
      ['0%', '#A07040', 1],
      ['30%', '#8B6538', 1],
      ['100%', '#7A5530', 1]
    ], { x1: 160, y1: 24, x2: 220, y2: 90 });
    fl(g, 'M 148 82 C 146 68 148 52 156 42 C 162 34 170 28 180 26 C 190 24 200 26 210 32 C 218 38 224 46 228 58 C 230 66 230 76 228 86 C 226 92 224 96 222 98 L 222 92 C 224 84 226 74 226 64 C 224 50 216 40 208 34 C 200 28 190 26 182 26 C 172 26 164 32 158 40 C 152 48 148 60 148 74 Z', hairGrad, a);

    // Ponytail fill
    const tailGrad = gd(defs, 'l', [
      ['0%', '#8B6538', 1],
      ['50%', '#7A5530', 1],
      ['100%', '#6B4A28', 1]
    ], { x1: 224, y1: 44, x2: 260, y2: 150 });
    fl(g, 'M 222 46 C 228 42 236 40 244 42 C 250 44 256 52 260 64 C 264 78 264 94 264 108 C 262 124 258 138 252 148 C 246 154 240 158 234 158 L 236 154 C 244 148 250 138 254 126 C 258 112 260 96 258 80 C 256 66 252 54 246 48 C 240 44 232 42 226 46 Z', tailGrad, false);

    // Hair elastic fill
    fl(g, 'M 222 46 C 226 42 232 40 238 42 C 244 44 246 48 244 52 C 242 56 236 58 230 56 C 226 54 222 52 222 46 Z', '#5D4037', false);

    // Loose strand fills (frame face)
    fo(g, 'M 146 76 C 144 86 142 98 144 112 C 146 124 148 134 152 144 L 148 150 C 144 142 140 132 138 120 C 136 106 138 92 142 80 C 144 76 146 74 148 74 Z', '#7A5A30', 0.7, false);
    fo(g, 'M 228 78 C 230 88 232 100 230 114 C 228 124 226 132 224 138 L 226 142 C 230 132 232 120 234 108 C 236 96 234 84 232 76 Z', '#7A5A30', 0.7, false);

    // === PINK CARDIGAN FILL ===
    const cardiganL = gd(defs, 'l', [
      ['0%', '#F8A0C0', 1],
      ['50%', '#F48FB1', 1],
      ['100%', '#E88098', 1]
    ], { x1: 100, y1: 170, x2: 160, y2: 250 });
    fl(g, 'M 118 180 C 128 170 148 164 168 162 L 164 168 C 162 178 160 192 158 208 C 156 222 154 236 152 250 L 100 250 C 102 232 104 216 106 206 C 110 194 114 186 118 180 Z', cardiganL, a);

    const cardiganR = gd(defs, 'l', [
      ['0%', '#F8A0C0', 1],
      ['50%', '#F48FB1', 1],
      ['100%', '#E88098', 1]
    ], { x1: 200, y1: 170, x2: 260, y2: 250 });
    fl(g, 'M 242 180 C 232 170 212 164 192 162 L 196 168 C 198 178 200 192 202 208 C 204 222 206 236 208 250 L 260 250 C 258 232 256 216 254 206 C 250 194 246 186 242 180 Z', cardiganR, false);

    // Cardigan left arm sleeve fill
    fl(g, 'M 118 180 C 112 190 108 204 104 218 C 100 232 98 244 96 250 L 102 250 C 104 240 106 228 110 216 C 114 204 118 194 124 184 Z', '#F48FB1', false);
    // Cardigan right arm sleeve fill
    fl(g, 'M 242 180 C 248 190 252 204 256 218 C 260 232 262 244 264 250 L 258 250 C 256 240 254 228 250 216 C 246 204 242 194 236 184 Z', '#F48FB1', false);

    // Collar fills — deeper pink
    fl(g, 'M 164 168 C 160 164 154 162 150 166 C 146 170 146 176 150 180 C 154 184 158 182 160 178 C 162 174 163 172 164 168 Z', '#E0708E', false);
    fl(g, 'M 196 168 C 200 164 206 162 210 166 C 214 170 214 176 210 180 C 206 184 202 182 200 178 C 198 174 197 172 196 168 Z', '#E0708E', false);

    // === BLACK T-SHIRT V fill ===
    const shirtGrad = gd(defs, 'l', [
      ['0%', '#2C3E50', 1],
      ['50%', '#1C2833', 1],
      ['100%', '#17202A', 1]
    ], { x1: 180, y1: 168, x2: 180, y2: 222 });
    fl(g, 'M 162 172 C 168 180 174 198 180 222 C 186 198 192 180 198 172 C 194 170 188 168 180 168 C 172 168 166 170 162 172 Z', shirtGrad, a);

    // === ARM SKIN (visible near table) ===
    feo(g, 'ellipse', { cx: 96, cy: 248, rx: 10, ry: 6, fill: '#F0C8A8' }, 1, false);
    feo(g, 'ellipse', { cx: 264, cy: 248, rx: 10, ry: 6, fill: '#F0C8A8' }, 1, false);

    // Hand skin fills
    fl(g, 'M 90 246 C 84 246 80 242 78 238 C 76 234 78 230 82 228 C 86 226 90 228 94 232 C 96 236 98 240 100 240 L 100 244 C 96 246 92 246 90 246 Z', '#F0C8A8', false);
    fl(g, 'M 270 246 C 276 246 280 242 282 238 C 284 234 282 230 278 228 C 274 226 270 228 266 232 C 264 236 262 240 260 240 L 260 244 C 264 246 268 246 270 246 Z', '#F0C8A8', false);
  },

  // Layer 8: Color fills — tablecloth, dominos, phone, remote, background
  (g, a, defs) => {
    // === CHECKERED TABLECLOTH ===
    // Warm yellow/beige check pattern
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 8; col++) {
        const x = col * 45;
        const y = 250 + row * 33;
        const dark = (col + row) % 2 === 0;
        fe(g, 'rect', { x, y, width: 45, height: 33, fill: dark ? '#C8A870' : '#EDE0C8' }, false);
      }
    }
    // Tablecloth fabric texture — subtle woven lines
    for (let y = 250; y <= 450; y += 33) {
      fo(g, `M 0 ${y} L 360 ${y} L 360 ${y + 1} L 0 ${y + 1} Z`, '#000000', 0.04, false);
    }
    for (let x = 0; x <= 360; x += 45) {
      fo(g, `M ${x} 250 L ${x + 1} 250 L ${x + 1} 450 L ${x} 450 Z`, '#000000', 0.04, false);
    }

    // === DOMINO FILLS on table ===
    const dPositions = [
      { x: 100, y: 268, r: -8 },
      { x: 120, y: 272, r: 3 },
      { x: 140, y: 269, r: 85 },
      { x: 156, y: 272, r: -4 },
      { x: 176, y: 268, r: 90 },
      { x: 196, y: 270, r: 6 },
      { x: 216, y: 274, r: -3 }
    ];
    dPositions.forEach(({ x, y, r }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 11, rx: 1.5, fill: '#ECEFF1' }, false);
      g.appendChild(dg);
    });

    // === PHONE FILL (gold/rose back) ===
    const phoneGrad = gd(defs, 'l', [
      ['0%', '#D4AD6E', 1],
      ['50%', '#C9A060', 1],
      ['100%', '#B89050', 1]
    ], { x1: 278, y1: 286, x2: 312, y2: 312 });
    fe(g, 'rect', { x: 279, y: 287, width: 32, height: 24, rx: 3, fill: phoneGrad }, a);
    fe(g, 'rect', { x: 281, y: 289, width: 28, height: 20, rx: 2, fill: '#B8956A' }, false);

    // === TV REMOTE FILL ===
    const remoteGrad = gd(defs, 'l', [
      ['0%', '#2C3E50', 1],
      ['100%', '#1A252F', 1]
    ], { x1: 322, y1: 276, x2: 340, y2: 324 });
    fe(g, 'rect', { x: 323, y: 277, width: 16, height: 46, rx: 3, fill: remoteGrad }, a);
    // Remote button highlights
    feo(g, 'circle', { cx: 331, cy: 280, r: 2, fill: '#C0392B' }, 0.8, false);
    feo(g, 'rect', { x: 327, y: 284, width: 8, height: 2, rx: 1, fill: '#556677' }, 0.6, false);
    feo(g, 'rect', { x: 327, y: 290, width: 8, height: 2, rx: 1, fill: '#556677' }, 0.6, false);
    feo(g, 'rect', { x: 327, y: 296, width: 8, height: 2, rx: 1, fill: '#556677' }, 0.6, false);

    // === NAPKIN FILL ===
    fl(g, 'M 48 284 C 50 282 56 280 64 282 C 72 284 76 286 78 290 C 80 294 76 298 70 300 C 64 302 56 300 50 298 C 46 296 46 290 48 284 Z', '#FAFAFA', false);
    // Napkin shadow
    fo(g, 'M 50 296 C 54 298 60 300 66 300 C 72 300 76 298 78 294 C 80 296 78 300 72 302 C 66 304 58 302 52 300 C 48 298 48 296 50 296 Z', '#000000', 0.06, false);

    // === HELD DOMINO FILLS (white) ===
    const ldPos = [
      { x: 64, y: 182, r: -25, cx: 72, cy: 196 },
      { x: 72, y: 180, r: -8, cx: 80, cy: 194 },
      { x: 80, y: 180, r: 10, cx: 88, cy: 194 }
    ];
    ldPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: '#F5F5F5' }, false);
      g.appendChild(dg);
    });
    const rdPos = [
      { x: 264, y: 180, r: -10, cx: 272, cy: 194 },
      { x: 272, y: 180, r: 8, cx: 280, cy: 194 },
      { x: 280, y: 182, r: 25, cx: 288, cy: 196 }
    ];
    rdPos.forEach(({ x, y, r, cx, cy }) => {
      const dg = ce('g', { transform: `rotate(${r} ${cx} ${cy})` });
      fe(dg, 'rect', { x: x + 0.5, y: y + 0.5, width: 15, height: 27, rx: 2, fill: '#F5F5F5' }, false);
      g.appendChild(dg);
    });

    // === BACKGROUND FILLS ===
    // Upper background — warm wall color
    const wallGrad = gd(defs, 'l', [
      ['0%', '#F5EDE0', 0.3],
      ['100%', '#EDE0D0', 0.3]
    ], { x1: 0, y1: 0, x2: 360, y2: 250 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 250, fill: wallGrad }, false);

    // Kitchen cabinets fill — white
    feo(g, 'rect', { x: 1, y: 1, width: 80, height: 13, rx: 1, fill: '#ECEFF1' }, 0.5, false);
    feo(g, 'rect', { x: 1, y: 16, width: 80, height: 13, rx: 1, fill: '#E8E8EC' }, 0.5, false);

    // Dark painting/photo fill
    const paintGrad = gd(defs, 'l', [
      ['0%', '#1A2530', 1],
      ['50%', '#2C3E50', 1],
      ['100%', '#1A2530', 1]
    ], { x1: 268, y1: 18, x2: 322, y2: 80 });
    fe(g, 'rect', { x: 269, y: 19, width: 52, height: 60, rx: 1, fill: paintGrad }, false);
    // Painting landscape hint — dark blue horizon
    fo(g, 'M 270 60 C 280 52 295 48 310 52 C 315 54 318 58 320 64 L 320 78 L 270 78 Z', '#1A3A5A', 0.6, false);
  },

  // Layer 9: Polish — eye catchlights, skin shading, lip detail, hair shine, shadows, ambient
  (g, a, defs) => {
    // === EYE CATCHLIGHTS ===
    // Left eye — primary catchlight
    fe(g, 'circle', { cx: 169, cy: 87, r: 1.8, fill: 'white' }, a);
    // Left eye — secondary smaller catchlight
    feo(g, 'circle', { cx: 174, cy: 91, r: 0.9, fill: 'white' }, 0.7, false);
    // Right eye — primary
    fe(g, 'circle', { cx: 206, cy: 88, r: 1.8, fill: 'white' }, a);
    // Right eye — secondary
    feo(g, 'circle', { cx: 211, cy: 92, r: 0.9, fill: 'white' }, 0.7, false);

    // === IRIS DETAIL ===
    // Left iris — brown with lighter ring
    const irisL = gd(defs, 'r', [
      ['0%', '#2A1A0A', 1],
      ['40%', '#4A3018', 1],
      ['80%', '#6B4A28', 1],
      ['100%', '#5A3820', 1]
    ], { cx: 172, cy: 89, r: 5 });
    feo(g, 'circle', { cx: 172, cy: 89, r: 4.5, fill: irisL }, 0.8, false);
    // Right iris
    const irisR = gd(defs, 'r', [
      ['0%', '#2A1A0A', 1],
      ['40%', '#4A3018', 1],
      ['80%', '#6B4A28', 1],
      ['100%', '#5A3820', 1]
    ], { cx: 209, cy: 90, r: 5 });
    feo(g, 'circle', { cx: 209, cy: 90, r: 4.5, fill: irisR }, 0.8, false);

    // === LIP COLOR ===
    // Upper lip fill
    const lipGrad = gd(defs, 'l', [
      ['0%', '#D46060', 1],
      ['50%', '#C85050', 1],
      ['100%', '#D46060', 1]
    ], { x1: 164, y1: 126, x2: 196, y2: 126 });
    fl(g, 'M 164 128 C 167 126 170 124 174 125 C 176 126 178 127 180 127 C 182 127 184 126 186 125 C 190 124 193 126 196 128 L 194 129 C 190 128 186 127 182 127 C 178 127 174 128 170 129 Z', lipGrad, false);
    // Lower lip fill — slightly different shade
    const lipLower = gd(defs, 'l', [
      ['0%', '#D86868', 1],
      ['50%', '#CC5858', 1],
      ['100%', '#D86868', 1]
    ], { x1: 164, y1: 130, x2: 196, y2: 138 });
    fl(g, 'M 164 128 C 166 132 170 136 174 138 C 178 139 182 139 186 138 C 190 136 194 132 196 128 C 192 129 186 130 180 130 C 174 130 168 129 164 128 Z', lipLower, false);
    // Lip gloss highlight — center of lower lip
    const lipShine = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.35],
      ['100%', '#FFFFFF', 0]
    ], { cx: 180, cy: 132, r: 6 });
    feo(g, 'ellipse', { cx: 180, cy: 132, rx: 5, ry: 3, fill: lipShine }, 1, false);

    // === NOSE SHADOW ===
    // Shadow beside nose — left side
    sh(g, 'M 168 98 C 166 104 164 110 164 116 C 166 118 168 114 170 110 C 172 106 174 100 174 96 Z', 0.08, false);
    // Shadow beside nose — right side
    sh(g, 'M 192 98 C 194 104 196 110 196 116 C 194 118 192 114 190 110 C 188 106 186 100 186 96 Z', 0.06, false);
    // Nose tip highlight
    hi(g, 'M 176 112 C 178 110 182 110 184 112 C 186 114 184 116 180 116 C 176 116 174 114 176 112 Z', 0.2, false);

    // === SHADOW UNDER CHIN ===
    sh(g, 'M 162 146 C 166 148 174 150 180 151 C 186 150 194 148 198 146 C 196 152 192 156 186 158 C 180 160 174 160 168 158 C 164 156 162 152 162 146 Z', 0.15, false);

    // === EYE SOCKET SHADOWS ===
    sh(g, 'M 155 80 C 158 78 164 76 172 77 C 178 78 182 80 186 82 C 184 84 178 82 172 82 C 166 82 160 82 155 80 Z', 0.06, false);
    sh(g, 'M 192 82 C 196 80 202 78 208 77 C 214 76 220 78 224 80 C 220 82 214 82 208 82 C 202 82 196 84 192 82 Z', 0.06, false);

    // === CHEEK BLUSH — subtle warmth ===
    const blushL = gd(defs, 'r', [
      ['0%', '#E89090', 0.25],
      ['60%', '#E89090', 0.08],
      ['100%', '#E89090', 0]
    ], { cx: 156, cy: 116, r: 16 });
    feo(g, 'ellipse', { cx: 156, cy: 116, rx: 14, ry: 8, fill: blushL }, 1, a);
    const blushR = gd(defs, 'r', [
      ['0%', '#E89090', 0.25],
      ['60%', '#E89090', 0.08],
      ['100%', '#E89090', 0]
    ], { cx: 204, cy: 116, r: 16 });
    feo(g, 'ellipse', { cx: 204, cy: 116, rx: 14, ry: 8, fill: blushR }, 1, a);

    // === FOREHEAD HIGHLIGHT ===
    hi(g, 'M 165 48 C 170 46 176 44 182 44 C 188 44 194 46 200 48 C 196 52 190 54 184 54 C 178 54 172 52 165 48 Z', 0.12, false);

    // === CHEEKBONE HIGHLIGHTS ===
    hi(g, 'M 148 108 C 152 106 156 106 160 108 C 158 110 154 112 150 112 Z', 0.1, false);
    hi(g, 'M 200 108 C 204 106 208 106 212 108 C 210 110 206 112 202 112 Z', 0.1, false);

    // === HAIR SHINE STREAKS ===
    const hairShine = gd(defs, 'l', [
      ['0%', '#FFFFFF', 0],
      ['40%', '#FFFFFF', 0.15],
      ['60%', '#FFFFFF', 0.15],
      ['100%', '#FFFFFF', 0]
    ], { x1: 150, y1: 30, x2: 220, y2: 80 });
    fo(g, 'M 164 38 C 170 34 178 32 186 34 C 192 36 196 38 198 42 C 192 40 184 38 176 38 C 170 38 166 40 164 38 Z', hairShine, 1, false);
    fo(g, 'M 156 52 C 162 46 172 42 182 44 C 190 46 196 50 200 56 C 194 52 186 48 178 48 C 170 48 162 50 156 52 Z', hairShine, 1, false);
    // Ponytail shine
    hi(g, 'M 236 56 C 240 62 244 72 246 84 C 248 96 248 108 246 118 C 244 110 242 98 242 86 C 242 74 240 64 236 56 Z', 0.1, false);

    // === CLOTHING SHADOWS / FOLDS ===
    // Cardigan shadow under arm — left
    sh(g, 'M 120 188 C 118 198 116 210 114 224 C 112 232 110 240 108 248 C 112 242 114 234 116 224 C 118 212 120 200 122 190 Z', 0.08, false);
    // Cardigan shadow under arm — right
    sh(g, 'M 240 188 C 242 198 244 210 246 224 C 248 232 250 240 252 248 C 248 242 246 234 244 224 C 242 212 240 200 238 190 Z', 0.08, false);
    // Cardigan opening shadow
    sh(g, 'M 156 180 C 154 196 152 212 150 230 L 152 230 C 154 212 156 196 158 180 Z', 0.06, false);
    sh(g, 'M 204 180 C 206 196 208 212 210 230 L 208 230 C 206 212 204 196 202 180 Z', 0.06, false);

    // === T-SHIRT TEXT ===
    const ct = ce('text', {
      x: 168, y: 202,
      fill: '#8899AA',
      'font-size': '5',
      'font-style': 'italic',
      'font-family': 'cursive',
      'letter-spacing': '0.3'
    });
    ct.textContent = "It's all good";
    if (a) ct.classList.add('active-element');
    g.appendChild(ct);

    // === WATCH FILL ===
    feo(g, 'rect', { x: 90, y: 249, width: 8, height: 4, rx: 1.5, fill: '#607D8B' }, 0.9, a);
    feo(g, 'rect', { x: 91, y: 249.5, width: 6, height: 3, rx: 1, fill: '#B0BEC5' }, 0.8, false);

    // === DOMINO DOTS on played pieces ===
    const dotSets = [
      { x: 100, y: 268, r: -8, left: [[3, 3], [3, 9]], right: [[11, 3], [11, 9], [11, 6]] },
      { x: 120, y: 272, r: 3, left: [[3, 3], [3, 9], [5, 3], [5, 9]], right: [[11, 6]] },
      { x: 140, y: 269, r: 85, left: [[3, 3], [3, 9], [5, 6], [5, 3], [5, 9]], right: [[11, 3], [11, 9]] },
      { x: 156, y: 272, r: -4, left: [[3, 3], [3, 9], [3, 6]], right: [[11, 2], [11, 5], [11, 8], [13, 2], [13, 5], [13, 8]] },
      { x: 176, y: 268, r: 90, left: [[3, 6]], right: [[11, 3], [11, 9], [13, 3], [13, 9]] },
      { x: 196, y: 270, r: 6, left: [[3, 2], [3, 6], [3, 10], [5, 2], [5, 6], [5, 10]], right: [[11, 2], [11, 6], [11, 10], [13, 2], [13, 10]] },
      { x: 216, y: 274, r: -3, left: [[3, 3], [3, 9]], right: [[11, 3], [11, 9], [11, 6]] }
    ];
    dotSets.forEach(({ x, y, r, left, right }) => {
      const dg = ce('g', { transform: `rotate(${r} ${x + 8} ${y + 6})` });
      left.forEach(([dx, dy]) => {
        fe(dg, 'circle', { cx: x + dx, cy: y + dy, r: 0.9, fill: '#333' }, false);
      });
      right.forEach(([dx, dy]) => {
        fe(dg, 'circle', { cx: x + dx, cy: y + dy, r: 0.9, fill: '#333' }, false);
      });
      g.appendChild(dg);
    });

    // === WARM LIGHTING OVERLAY ===
    feo(g, 'rect', { x: 0, y: 0, width: 360, height: 250, fill: '#FFF8E1' }, 0.05, false);

    // === TABLE SHADOW UNDER SANDRA ===
    sh(g, 'M 100 250 C 120 252 160 254 180 254 C 200 254 240 252 260 250 L 260 256 C 240 258 200 260 180 260 C 160 260 120 258 100 256 Z', 0.08, false);

    // === SUBTLE AMBIENT OCCLUSION at clothing folds ===
    sh(g, 'M 150 178 C 148 180 146 184 148 186 C 150 184 152 182 154 180 Z', 0.05, false);
    sh(g, 'M 210 178 C 212 180 214 184 212 186 C 210 184 208 182 206 180 Z', 0.05, false);

    // === SKIN AMBIENT — subtle color variation ===
    // Temple shadow
    sh(g, 'M 138 68 C 140 72 142 78 144 82 C 142 80 140 76 138 72 Z', 0.05, false);
    sh(g, 'M 222 68 C 220 72 218 78 216 82 C 218 80 220 76 222 72 Z', 0.05, false);

    // === HAIR-FACE SHADOW LINE ===
    sh(g, 'M 148 76 C 146 82 144 90 144 100 C 144 108 146 116 148 122 C 146 118 144 110 144 100 C 144 90 146 82 148 76 Z', 0.08, false);
    sh(g, 'M 228 80 C 230 86 232 94 232 104 C 232 112 230 118 228 124 C 230 118 232 110 232 100 C 232 90 230 84 228 78 Z', 0.06, false);
  }
];
