const paisestudioLayers = [
  // =====================================================================
  // Layer 0: Composition guides — center vertical, Sandra zone, Ricardo
  //          behind zone, Miguel on hip zone, shoulder line, pampas zones
  // =====================================================================
  (g, a) => {
    // Center vertical guide
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Sandra zone (center figure)
    pp(g, ['M 120 30 L 120 420', 'M 240 30 L 240 420'], a, lt);
    // Sandra head crosshair
    pp(g, ['M 180 50 L 180 170', 'M 130 110 L 230 110'], a, lt);
    // Ricardo behind zone (upper right-center)
    pp(g, ['M 190 20 L 190 260', 'M 280 20 L 280 260'], a, lt);
    // Ricardo head crosshair
    pp(g, ['M 228 30 L 228 120', 'M 195 70 L 265 70'], a, lt);
    // Miguel on hip zone (left)
    pp(g, ['M 60 50 L 60 320', 'M 150 50 L 150 320'], a, lt);
    // Miguel head crosshair
    pp(g, ['M 106 55 L 106 160', 'M 65 105 L 145 105'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 50 195 L 310 195'], a, lt);
    // Pampas grass zone left
    pp(g, ['M 0 0 L 0 420 L 70 420 L 70 0'], a, lt);
    // Pampas grass zone right
    pp(g, ['M 290 0 L 290 420 L 360 420 L 360 0'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — Ricardo head behind, Sandra head center,
  //          Sandra neck/body/shoulders/arms, Miguel head+body on hip
  // =====================================================================
  (g, a) => {
    // --- Ricardo (behind Sandra, slightly higher and right) ---
    // Ricardo head — oval, broader jaw
    pp(g, [
      'M 228 38 C 210 38 198 52 196 72 C 194 90 198 106 206 114 C 214 122 222 126 228 128 C 234 126 242 122 250 114 C 258 106 262 90 260 72 C 258 52 246 38 228 38 Z'
    ], a);
    // Ricardo left ear
    pp(g, ['M 196 68 C 190 64 186 68 186 76 C 186 84 190 88 196 86'], a);
    // Ricardo right ear
    pp(g, ['M 260 66 C 266 62 270 66 270 74 C 270 82 266 86 260 84'], a);
    // Ricardo neck
    pp(g, ['M 220 126 L 218 148', 'M 238 126 L 240 148'], a);
    // Ricardo shoulders and body (behind Sandra)
    pp(g, [
      'M 184 178 C 194 160 212 148 228 148 C 244 148 264 160 276 178 L 282 300',
      'M 184 178 L 178 300'
    ], a);

    // --- Sandra (center, focal point) ---
    // Sandra head — elegant oval, slightly narrower chin
    pp(g, [
      'M 180 58 C 158 58 144 72 142 90 C 140 108 144 124 152 134 C 158 142 168 150 180 152 C 192 150 202 142 208 134 C 216 124 220 108 218 90 C 216 72 202 58 180 58 Z'
    ], a);
    // Sandra left ear (partially behind hair)
    pp(g, ['M 142 88 C 138 84 135 88 135 94 C 135 100 138 104 142 102'], a);
    // Sandra right ear
    pp(g, ['M 218 86 C 222 82 225 86 225 92 C 225 98 222 102 218 100'], a);
    // Sandra neck
    pp(g, ['M 172 150 L 170 168', 'M 188 150 L 190 168'], a);
    // Sandra shoulders and body — turtleneck
    pp(g, [
      'M 120 202 C 132 184 156 170 180 168 C 204 170 228 184 240 202 L 248 420',
      'M 120 202 L 112 420'
    ], a);
    // Sandra left arm (holding Miguel)
    pp(g, [
      'M 132 190 C 122 200 114 216 110 234 C 108 248 108 260 110 270'
    ], a);
    // Sandra right arm (resting)
    pp(g, [
      'M 228 190 C 236 200 242 216 246 234 C 248 248 248 260 246 270'
    ], a);

    // --- Miguel (small child on Sandra's left hip) ---
    // Miguel head — round child head
    pp(g, [
      'M 106 66 C 90 66 80 78 80 94 C 80 110 86 122 94 128 C 100 132 106 134 106 134 C 106 134 112 132 118 128 C 126 122 132 110 132 94 C 132 78 122 66 106 66 Z'
    ], a);
    // Miguel left ear
    pp(g, ['M 80 90 C 74 86 70 90 70 96 C 70 102 74 106 80 104'], a);
    // Miguel right ear
    pp(g, ['M 132 88 C 138 84 142 88 142 94 C 142 100 138 104 132 102'], a);
    // Miguel neck (short, child)
    pp(g, ['M 100 134 L 98 144', 'M 112 134 L 114 144'], a);
    // Miguel body — plaid shirt, on Sandra's hip
    pp(g, [
      'M 76 172 C 84 156 96 146 106 144 C 116 146 128 156 136 172 L 140 280',
      'M 76 172 L 72 280'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details all three — eyes, eyebrows, noses, smiles
  // =====================================================================
  (g, a) => {
    // --- Sandra face ---
    // Left eye — almond shape
    pp(g, [
      'M 164 98 C 166 94 172 91 177 92 C 182 93 186 96 186 100 C 186 104 182 108 177 108 C 172 108 166 104 164 98 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 186 98 C 188 94 194 91 199 92 C 204 93 208 96 208 100 C 208 104 204 108 199 108 C 194 108 188 104 186 98 Z'
    ], a);
    // Sandra left pupil
    fe(g, 'ellipse', { cx: 176, cy: 101, rx: 3.5, ry: 3, fill: a ? HL : '#3E2518' }, a);
    // Sandra right pupil
    fe(g, 'ellipse', { cx: 198, cy: 101, rx: 3.5, ry: 3, fill: a ? HL : '#3E2518' }, a);
    // Sandra eyelashes upper left
    pp(g, [
      'M 164 97 C 162 94 161 91 162 88',
      'M 168 95 C 166 92 166 89 167 86',
      'M 172 94 C 171 91 172 88 174 86'
    ], a);
    // Sandra eyelashes upper right
    pp(g, [
      'M 208 97 C 210 94 211 91 210 88',
      'M 204 95 C 206 92 206 89 205 86',
      'M 200 94 C 201 91 200 88 198 86'
    ], a);
    // Sandra eyebrows — arched
    pp(g, ['M 160 86 C 164 80 172 78 180 80'], a);
    pp(g, ['M 184 80 C 192 78 200 80 206 86'], a);
    // Sandra nose
    pp(g, ['M 180 92 C 179 98 178 106 176 112'], a);
    pp(g, ['M 174 116 C 176 120 180 122 184 120 C 186 118 188 116 188 114'], a);
    // Sandra wide smile showing teeth
    pp(g, ['M 166 134 C 170 130 176 128 180 128 C 184 128 190 130 194 134'], a);
    pp(g, ['M 166 134 C 170 140 176 143 180 143 C 184 143 190 140 194 134'], a);
    // Teeth line
    pp(g, ['M 168 134 L 192 134'], a, lt);

    // --- Ricardo face (behind Sandra, slightly above) ---
    // Ricardo left eye
    pp(g, [
      'M 214 78 C 216 74 220 72 224 73 C 228 74 230 78 228 81 C 226 84 218 83 214 78 Z'
    ], a);
    // Ricardo right eye
    pp(g, [
      'M 236 76 C 238 72 242 70 246 71 C 250 72 252 76 250 79 C 248 82 240 81 236 76 Z'
    ], a);
    // Ricardo pupils
    fe(g, 'circle', { cx: 222, cy: 78, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 244, cy: 76, r: 2.8, fill: a ? HL : '#3E2518' }, a);
    // Ricardo eyebrows
    pp(g, ['M 212 72 C 216 68 222 66 228 68'], a);
    pp(g, ['M 234 66 C 240 64 246 66 252 70'], a);
    // Ricardo nose
    pp(g, ['M 230 72 C 229 80 228 88 226 94'], a);
    pp(g, ['M 224 98 C 226 102 230 104 234 102 C 236 100 238 98 238 96'], a);
    // Ricardo warm smile
    pp(g, ['M 218 112 C 222 108 226 106 230 106 C 234 106 238 108 242 112'], a);
    pp(g, ['M 220 114 C 226 118 234 118 240 114'], a);
    // Beard stubble dots along jawline
    const stubble = [
      [200, 106], [198, 100], [198, 94], [198, 88],
      [256, 84], [258, 90], [258, 96], [258, 102],
      [206, 116], [210, 120], [214, 124], [220, 126],
      [236, 126], [242, 124], [248, 120], [252, 116],
      [224, 128], [228, 130], [232, 130], [222, 106], [226, 106],
      [234, 106], [238, 106]
    ];
    stubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.5, fill: a ? HL : '#5D4037' }, a);
    });

    // --- Miguel face ---
    // Miguel left eye — big round child eye
    pp(g, [
      'M 92 92 C 93 88 97 86 101 87 C 105 88 108 91 108 95 C 108 99 105 102 101 102 C 97 102 93 98 92 92 Z'
    ], a);
    // Miguel right eye
    pp(g, [
      'M 110 92 C 111 88 115 86 119 87 C 123 88 126 91 126 95 C 126 99 123 102 119 102 C 115 102 111 98 110 92 Z'
    ], a);
    // Miguel pupils
    fe(g, 'circle', { cx: 101, cy: 95, r: 3, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 119, cy: 95, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Miguel eyebrows (soft, child)
    pp(g, ['M 90 86 C 94 82 100 80 106 82'], a);
    pp(g, ['M 112 82 C 118 80 124 82 128 86'], a);
    // Miguel nose — small button
    pp(g, ['M 106 92 C 105 98 104 104 103 108'], a);
    pp(g, ['M 100 110 C 103 114 107 116 110 114 C 112 112 114 110 114 108'], a);
    // Miguel big excited smile showing teeth
    pp(g, ['M 94 120 C 98 116 102 114 106 114 C 110 114 114 116 118 120'], a);
    pp(g, ['M 94 120 C 98 126 102 128 106 128 C 110 128 114 126 118 120'], a);
    // Miguel teeth line
    pp(g, ['M 96 120 L 116 120'], a, lt);
    // Miguel ears inner
    pp(g, ['M 74 94 C 72 98 72 102 74 104'], a, lt);
    pp(g, ['M 138 92 C 140 96 140 100 138 102'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and accessories — Sandra dark straight hair with middle
  //          part, earrings, chain necklace; Ricardo short hair; Miguel hair
  // =====================================================================
  (g, a) => {
    // --- Sandra hair: dark straight, middle part, falls to shoulders ---
    // Hair top volume
    pp(g, [
      'M 146 92 C 144 74 150 58 164 50 C 172 46 180 44 188 46 C 200 50 212 60 216 78 C 218 88 218 94 218 98'
    ], a);
    // Left side hair falling to shoulder
    pp(g, [
      'M 146 92 C 144 108 140 128 136 148 C 132 168 128 188 126 204'
    ], a);
    // Right side hair falling to shoulder
    pp(g, [
      'M 218 98 C 220 114 222 134 222 148 C 222 168 220 188 218 204'
    ], a);
    // Middle part line
    pp(g, ['M 180 46 C 180 52 180 60 180 68'], a);
    // Hair inner texture strands
    pp(g, [
      'M 156 56 C 164 50 174 48 182 50',
      'M 184 50 C 192 48 200 50 208 58',
      'M 150 72 C 158 64 168 60 178 62',
      'M 182 62 C 192 60 202 64 210 72'
    ], a, lt);
    // Left hair volume strands
    pp(g, [
      'M 148 98 C 146 116 142 136 138 156',
      'M 144 96 C 140 114 136 138 132 162'
    ], a, lt);
    // Right hair volume strands
    pp(g, [
      'M 216 102 C 218 118 220 138 220 158',
      'M 220 100 C 222 116 224 138 224 162'
    ], a, lt);

    // --- Sandra gold drop earrings ---
    // Left earring
    pp(g, ['M 140 100 C 138 104 136 110 138 116 C 140 120 142 118 142 114'], a);
    fe(g, 'ellipse', { cx: 138, cy: 118, rx: 3, ry: 4, fill: 'none', stroke: a ? HL : '#B8860B', 'stroke-width': a ? HW : PW }, a);
    // Right earring
    pp(g, ['M 220 98 C 222 102 224 108 222 114 C 220 118 218 116 218 112'], a);
    fe(g, 'ellipse', { cx: 222, cy: 116, rx: 3, ry: 4, fill: 'none', stroke: a ? HL : '#B8860B', 'stroke-width': a ? HW : PW }, a);

    // --- Sandra chunky gold chain necklace ---
    // Chain link shapes across chest
    pp(g, [
      'M 156 172 C 158 168 162 166 166 168 C 170 170 170 174 166 176 C 162 178 158 176 156 172 Z',
      'M 166 170 C 168 166 172 164 176 166 C 180 168 180 172 176 174 C 172 176 168 174 166 170 Z',
      'M 176 168 C 178 164 182 162 186 164 C 190 166 190 170 186 172 C 182 174 178 172 176 168 Z',
      'M 186 168 C 188 164 192 162 196 164 C 200 166 200 170 196 172 C 192 174 188 172 186 168 Z',
      'M 196 170 C 198 166 202 164 206 168 C 208 172 206 176 202 176 C 198 176 196 174 196 170 Z'
    ], a);

    // --- Ricardo short brown hair with texture ---
    pp(g, [
      'M 200 72 C 198 56 204 42 216 36 C 224 32 234 32 242 36 C 252 42 260 56 258 72'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 204 68 C 204 54 210 44 220 40 C 230 36 240 38 248 44 C 254 52 256 62 256 70'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 214 38 C 220 34 228 34 234 38',
      'M 208 48 C 216 42 226 40 236 44',
      'M 204 58 C 212 50 222 48 232 52'
    ], a, lt);

    // --- Miguel short brown hair ---
    pp(g, [
      'M 82 90 C 80 76 86 66 96 60 C 104 56 112 56 120 62 C 128 68 132 78 132 90'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 86 86 C 86 74 92 66 100 62 C 108 58 116 60 122 66 C 128 72 130 80 130 86'
    ], a);
    // Hair texture
    pp(g, [
      'M 96 60 C 102 56 110 56 116 60',
      'M 90 70 C 98 64 108 62 118 66'
    ], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing details — Sandra turtleneck folds, Ricardo quarter-
  //          zip collar+zip, Miguel plaid shirt pattern
  // =====================================================================
  (g, a) => {
    // --- Sandra turtleneck neckline and folds ---
    // Turtleneck high collar
    pp(g, [
      'M 164 162 C 168 158 174 156 180 156 C 186 156 192 158 196 162',
      'M 162 166 C 168 162 174 160 180 160 C 186 160 192 162 198 166'
    ], a);
    // Collar fold ring
    pp(g, ['M 166 164 C 172 160 178 158 184 160 C 190 162 194 164 196 166'], a, lt);
    // Body center seam
    pp(g, ['M 180 168 L 180 380'], a, lt);
    // Shoulder seam hints
    pp(g, [
      'M 148 182 C 154 176 164 172 174 170',
      'M 212 182 C 206 176 196 172 186 170'
    ], a, lt);
    // Sleeve fold lines
    pp(g, [
      'M 128 198 C 124 210 120 224 118 236',
      'M 232 198 C 236 210 240 224 242 236'
    ], a, lt);
    // Torso fold lines
    pp(g, [
      'M 150 210 C 148 230 146 250 148 270',
      'M 210 210 C 212 230 214 250 212 270'
    ], a, lt);

    // --- Ricardo quarter-zip fleece ---
    // Collar fold
    pp(g, [
      'M 214 150 C 210 146 206 146 204 150 C 202 154 206 158 210 156',
      'M 242 150 C 246 146 250 146 252 150 C 254 154 250 158 246 156'
    ], a);
    // Collar neckline
    pp(g, ['M 210 156 C 218 160 226 162 234 160 C 240 158 244 156 246 156'], a);
    // Zip line down center
    pp(g, ['M 228 162 L 228 300'], a);
    // Zipper teeth
    for (let y = 168; y < 296; y += 8) {
      pp(g, [`M 226 ${y} L 230 ${y}`], a, lt);
    }
    // Zip pull rectangle
    fe(g, 'rect', {
      x: 225, y: 160, width: 6, height: 8, rx: 1,
      fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW
    }, a);
    // Shoulder seams
    pp(g, ['M 194 166 C 200 158 212 152 224 150'], a, lt);
    pp(g, ['M 266 166 C 258 158 246 152 234 150'], a, lt);

    // --- Miguel plaid shirt pattern ---
    // Collar
    pp(g, [
      'M 96 146 C 92 142 88 142 86 146 C 84 150 88 154 92 152',
      'M 116 146 C 120 142 124 142 126 146 C 128 150 124 154 120 152'
    ], a);
    pp(g, ['M 92 152 C 98 156 104 158 110 156 C 116 154 118 152 120 152'], a);
    // Vertical plaid lines
    pp(g, [
      'M 88 152 L 82 280',
      'M 98 150 L 92 280',
      'M 114 150 L 120 280',
      'M 124 152 L 130 280'
    ], a, lt);
    // Horizontal plaid lines
    pp(g, [
      'M 76 180 L 140 180',
      'M 76 200 L 140 200',
      'M 76 220 L 140 220',
      'M 76 240 L 140 240',
      'M 76 260 L 140 260'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands — Sandra holding Miguel, Ricardo hands on Sandra,
  //          Miguel small hands
  // =====================================================================
  (g, a) => {
    // --- Sandra left hand supporting Miguel ---
    // Arm leading to hand under Miguel
    pp(g, ['M 110 270 C 108 258 104 248 100 242 C 96 236 92 234 88 236'], a);
    // Palm under Miguel's body
    pp(g, [
      'M 88 236 C 82 238 78 244 78 250 C 78 256 82 260 88 260 C 92 260 96 258 100 254'
    ], a);
    // Thumb
    pp(g, ['M 100 244 C 104 240 106 234 104 230 C 102 226 98 226 96 230'], a);
    // Fingers wrapping under Miguel
    pp(g, [
      'M 86 240 C 82 234 78 228 76 224 C 74 220 76 218 80 218',
      'M 84 242 C 78 236 74 230 72 226 C 70 222 72 220 76 220',
      'M 82 246 C 76 240 72 234 70 230 C 68 226 70 224 74 224',
      'M 82 252 C 78 248 74 242 72 238 C 70 234 72 232 76 234'
    ], a);

    // --- Sandra right hand ---
    pp(g, ['M 246 270 C 248 258 250 246 252 238'], a);
    // Right hand resting
    pp(g, [
      'M 252 238 C 256 234 260 232 264 234 C 268 236 268 242 264 246 C 260 250 254 250 250 248'
    ], a);
    // Fingers
    pp(g, [
      'M 260 236 C 264 230 268 226 270 222 C 272 218 270 216 266 218',
      'M 262 238 C 268 232 272 228 274 224 C 276 220 274 218 270 220',
      'M 264 240 C 270 236 274 232 276 228 C 278 224 276 222 272 224'
    ], a);
    // Thumb
    pp(g, ['M 254 240 C 250 236 248 230 250 226 C 252 222 256 222 258 226'], a);

    // --- Ricardo hands on Sandra's waist/arms ---
    // Ricardo left hand on Sandra's left arm
    pp(g, [
      'M 186 210 C 178 220 170 232 164 240'
    ], a);
    pp(g, [
      'M 164 240 C 160 244 156 242 156 238 C 156 234 160 230 164 228 C 168 226 170 228 170 232'
    ], a);
    // Ricardo right hand on Sandra's right side
    pp(g, [
      'M 270 210 C 264 220 256 232 250 240'
    ], a);
    pp(g, [
      'M 250 240 C 246 244 242 242 242 238 C 242 234 246 230 250 228 C 254 226 256 228 256 232'
    ], a);

    // --- Miguel small hands ---
    // Left hand
    pp(g, [
      'M 76 192 C 70 196 66 200 64 206 C 62 210 64 214 68 214 C 72 214 76 210 78 204'
    ], a);
    // Right hand
    pp(g, [
      'M 136 192 C 140 196 144 202 146 208 C 148 212 146 216 142 214 C 138 212 134 208 132 202'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — pampas grass LEFT and RIGHT with feathery plumes,
  //          green decorative balls, golden leaf shapes
  // =====================================================================
  (g, a) => {
    // --- Pampas grass LEFT arrangement ---
    // Main stems
    pp(g, [
      'M 40 420 C 42 360 44 300 42 240 C 40 180 36 120 30 60',
      'M 52 420 C 54 350 56 280 54 220 C 50 160 44 100 38 40',
      'M 32 420 C 30 370 28 320 26 270 C 24 220 22 170 24 120'
    ], a);
    // Plume feathers radiating — left arrangement top
    pp(g, [
      'M 30 60 C 20 40 16 20 18 0',
      'M 30 60 C 24 38 22 16 26 0',
      'M 30 60 C 34 40 38 20 36 0',
      'M 38 40 C 28 20 24 4 28 0',
      'M 38 40 C 42 22 48 6 44 0',
      'M 38 40 C 32 24 26 10 20 0'
    ], a);
    // Plume feather texture strokes
    pp(g, [
      'M 24 48 C 18 30 14 12 16 0',
      'M 34 52 C 40 32 44 14 40 0',
      'M 20 70 C 12 50 8 28 10 8',
      'M 42 66 C 48 46 52 26 50 8',
      'M 26 80 C 16 60 10 38 12 18',
      'M 44 76 C 52 56 56 34 54 16'
    ], a, lt);
    // Mid plumes on left
    pp(g, [
      'M 24 120 C 14 90 8 60 10 30',
      'M 24 120 C 18 94 14 68 18 42',
      'M 24 120 C 30 94 34 68 32 42'
    ], a, lt);
    // Lower left feathery accents
    pp(g, [
      'M 42 240 C 32 210 24 180 20 150',
      'M 54 220 C 46 194 40 168 38 142',
      'M 42 240 C 50 214 56 188 58 162'
    ], a, lt);

    // --- Pampas grass RIGHT arrangement ---
    // Main stems
    pp(g, [
      'M 320 420 C 318 360 316 300 318 240 C 320 180 324 120 330 60',
      'M 308 420 C 306 350 304 280 306 220 C 310 160 316 100 322 40',
      'M 332 420 C 334 370 336 320 338 270 C 340 220 342 170 340 120'
    ], a);
    // Plume feathers radiating — right arrangement top
    pp(g, [
      'M 330 60 C 340 40 344 20 342 0',
      'M 330 60 C 336 38 338 16 334 0',
      'M 330 60 C 326 40 322 20 324 0',
      'M 322 40 C 332 20 336 4 332 0',
      'M 322 40 C 318 22 312 6 316 0',
      'M 322 40 C 328 24 334 10 340 0'
    ], a);
    // Plume feather texture strokes
    pp(g, [
      'M 336 48 C 342 30 346 12 344 0',
      'M 326 52 C 320 32 316 14 320 0',
      'M 340 70 C 348 50 352 28 350 8',
      'M 318 66 C 312 46 308 26 310 8',
      'M 334 80 C 344 60 350 38 348 18',
      'M 316 76 C 308 56 304 34 306 16'
    ], a, lt);
    // Mid plumes on right
    pp(g, [
      'M 340 120 C 348 90 352 60 350 30',
      'M 340 120 C 344 94 348 68 344 42',
      'M 340 120 C 336 94 332 68 334 42'
    ], a, lt);

    // --- Green decorative balls ---
    // Left side balls
    pp(g, ['M 38 100 C 42 96 48 96 52 100 C 56 104 56 110 52 114 C 48 118 42 118 38 114 C 34 110 34 104 38 100 Z'], a);
    pp(g, ['M 18 180 C 22 176 28 176 32 180 C 36 184 36 190 32 194 C 28 198 22 198 18 194 C 14 190 14 184 18 180 Z'], a);
    // Right side balls
    pp(g, ['M 312 110 C 316 106 322 106 326 110 C 330 114 330 120 326 124 C 322 128 316 128 312 124 C 308 120 308 114 312 110 Z'], a);
    pp(g, ['M 330 200 C 334 196 340 196 344 200 C 348 204 348 210 344 214 C 340 218 334 218 330 214 C 326 210 326 204 330 200 Z'], a);

    // --- Golden leaf shapes ---
    // Left side leaves
    pp(g, ['M 48 130 C 56 120 64 118 66 126 C 68 134 60 140 48 130 Z'], a);
    pp(g, ['M 22 150 C 30 140 38 138 40 146 C 42 154 34 160 22 150 Z'], a);
    pp(g, ['M 56 160 C 64 150 72 148 74 156 C 76 164 68 170 56 160 Z'], a);
    // Right side leaves
    pp(g, ['M 312 140 C 304 130 296 128 294 136 C 292 144 300 150 312 140 Z'], a);
    pp(g, ['M 340 160 C 332 150 324 148 322 156 C 320 164 328 170 340 160 Z'], a);
    pp(g, ['M 306 180 C 298 170 290 168 288 176 C 286 184 294 190 306 180 Z'], a);

    // White cotton/berry accents
    fe(g, 'circle', { cx: 52, cy: 50, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 36, cy: 90, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 60, cy: 140, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 310, cy: 56, r: 3, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 328, cy: 96, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 302, cy: 150, r: 2.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
  },

  // =====================================================================
  // Layer 7: Color fills FIGURES — skin, hair, clothing fills for all three
  // =====================================================================
  (g, a) => {
    // --- Sandra skin ---
    fl(g,
      'M 180 60 C 160 60 146 74 144 92 C 142 110 146 126 154 136 C 160 144 170 152 180 154 C 190 152 200 144 206 136 C 214 126 218 110 216 92 C 214 74 200 60 180 60 Z',
      '#FADCC2', a);
    // Sandra neck skin
    fe(g, 'rect', { x: 170, y: 148, width: 20, height: 20, rx: 5, fill: '#F0C8A8' }, false);
    // Sandra ears
    fe(g, 'ellipse', { cx: 138, cy: 94, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 92, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    // Sandra eye whites
    fl(g, 'M 164 98 C 166 94 172 91 177 92 C 182 93 186 96 186 100 C 186 104 182 108 177 108 C 172 108 166 104 164 98 Z', '#FFFFFF', false);
    fl(g, 'M 186 98 C 188 94 194 91 199 92 C 204 93 208 96 208 100 C 208 104 204 108 199 108 C 194 108 188 104 186 98 Z', '#FFFFFF', false);

    // Sandra hair fill — dark straight
    fl(g,
      'M 148 92 C 146 74 152 58 166 50 C 174 46 182 44 190 46 C 202 50 214 60 218 78 C 220 88 220 98 218 102 L 214 98 C 216 90 216 80 214 72 C 210 60 202 52 192 48 C 184 46 174 48 166 54 C 156 62 150 74 150 88 Z',
      '#3E2518', a);
    // Hair sides falling down — left
    fl(g,
      'M 148 92 C 146 108 142 128 138 148 C 134 168 130 188 128 204 L 124 204 C 126 186 130 166 134 146 C 138 126 142 106 144 90 Z',
      '#3E2518', false);
    // Hair sides falling down — right
    fl(g,
      'M 218 98 C 220 114 222 134 222 148 C 222 168 220 188 218 204 L 222 204 C 224 188 226 168 226 148 C 226 134 224 114 222 98 Z',
      '#3E2518', false);

    // Sandra teal turtleneck fill
    fl(g,
      'M 120 202 C 132 184 156 170 180 168 C 204 170 228 184 240 202 L 248 420 L 112 420 Z',
      '#00695C', a);
    // Turtleneck collar fill (slightly lighter)
    fl(g,
      'M 164 162 C 168 158 174 156 180 156 C 186 156 192 158 196 162 L 198 168 C 192 164 186 162 180 162 C 174 162 168 164 162 168 Z',
      '#00796B', false);

    // Sandra necklace gold chain fill
    const chainLinks = [
      'M 156 172 C 158 168 162 166 166 168 C 170 170 170 174 166 176 C 162 178 158 176 156 172 Z',
      'M 166 170 C 168 166 172 164 176 166 C 180 168 180 172 176 174 C 172 176 168 174 166 170 Z',
      'M 176 168 C 178 164 182 162 186 164 C 190 166 190 170 186 172 C 182 174 178 172 176 168 Z',
      'M 186 168 C 188 164 192 162 196 164 C 200 166 200 170 196 172 C 192 174 188 172 186 168 Z',
      'M 196 170 C 198 166 202 164 206 168 C 208 172 206 176 202 176 C 198 176 196 174 196 170 Z'
    ];
    chainLinks.forEach(d => fl(g, d, '#FFD700', false));

    // Sandra gold earring fills
    fe(g, 'ellipse', { cx: 138, cy: 118, rx: 3, ry: 4, fill: '#FFD700' }, false);
    fe(g, 'ellipse', { cx: 222, cy: 116, rx: 3, ry: 4, fill: '#FFD700' }, false);

    // --- Ricardo skin ---
    fl(g,
      'M 228 40 C 212 40 200 54 198 74 C 196 92 200 108 208 116 C 216 124 224 128 228 130 C 232 128 240 124 248 116 C 256 108 260 92 258 74 C 256 54 244 40 228 40 Z',
      '#EDBE8C', a);
    // Ricardo ears
    fe(g, 'ellipse', { cx: 190, cy: 76, rx: 5, ry: 10, fill: '#DEB07A' }, false);
    fe(g, 'ellipse', { cx: 266, cy: 74, rx: 5, ry: 10, fill: '#DEB07A' }, false);
    // Ricardo neck
    fe(g, 'rect', { x: 218, y: 124, width: 20, height: 24, rx: 4, fill: '#DEB07A' }, false);
    // Ricardo eye whites
    fl(g, 'M 214 78 C 216 74 220 72 224 73 C 228 74 230 78 228 81 C 226 84 218 83 214 78 Z', '#FFFFFF', false);
    fl(g, 'M 236 76 C 238 72 242 70 246 71 C 250 72 252 76 250 79 C 248 82 240 81 236 76 Z', '#FFFFFF', false);

    // Ricardo gray fleece fill
    fl(g,
      'M 184 178 C 194 160 212 148 228 148 C 244 148 264 160 276 178 L 282 300 L 178 300 Z',
      '#78909C', a);

    // --- Miguel skin ---
    fl(g,
      'M 106 68 C 92 68 82 80 82 96 C 82 112 88 124 96 130 C 102 134 106 136 106 136 C 106 136 110 134 116 130 C 124 124 130 112 130 96 C 130 80 120 68 106 68 Z',
      '#FADCC2', a);
    // Miguel ears
    fe(g, 'ellipse', { cx: 74, cy: 96, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    fe(g, 'ellipse', { cx: 138, cy: 94, rx: 5, ry: 8, fill: '#F0C8A8' }, false);
    // Miguel neck
    fe(g, 'rect', { x: 98, y: 132, width: 16, height: 12, rx: 3, fill: '#F0C8A8' }, false);
    // Miguel eye whites
    fl(g, 'M 92 92 C 93 88 97 86 101 87 C 105 88 108 91 108 95 C 108 99 105 102 101 102 C 97 102 93 98 92 92 Z', '#FFFFFF', false);
    fl(g, 'M 110 92 C 111 88 115 86 119 87 C 123 88 126 91 126 95 C 126 99 123 102 119 102 C 115 102 111 98 110 92 Z', '#FFFFFF', false);

    // Miguel plaid shirt base fill
    fl(g,
      'M 76 172 C 84 156 96 146 106 144 C 116 146 128 156 136 172 L 140 280 L 72 280 Z',
      '#D7CCC8', a);

    // Miguel hair fill
    fl(g,
      'M 84 90 C 82 76 88 66 98 60 C 106 56 114 56 122 62 C 130 68 134 78 134 90 L 130 86 C 130 78 126 70 120 64 C 114 60 106 58 100 62 C 92 68 86 76 86 86 Z',
      '#4E342E', false);
  },

  // =====================================================================
  // Layer 8: Color fills SCENE — green wall, floor, pampas grass fills,
  //          green balls, golden leaves, plaid shirt accent stripes
  // =====================================================================
  (g, a) => {
    // Green wall background
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 420, fill: '#2E7D32' }, a);
    // Floor/base darker green
    fe(g, 'rect', { x: 0, y: 420, width: 360, height: 30, fill: '#1B5E20' }, false);

    // --- Pampas grass fills LEFT ---
    // Main plume fills
    fl(g,
      'M 14 0 C 20 20 26 50 30 60 C 28 50 22 30 18 10 C 16 4 14 0 14 0 Z',
      '#D7CCC8', false);
    fl(g,
      'M 28 0 C 30 16 34 40 38 40 C 36 30 32 14 30 0 Z',
      '#BCAAA4', false);
    fl(g,
      'M 38 0 C 36 14 34 30 30 60 C 34 40 40 18 42 0 Z',
      '#D7CCC8', false);
    // Broader plume mass left
    fl(g,
      'M 8 8 C 14 30 20 60 24 120 C 18 80 12 44 6 14 Z',
      '#D7CCC8', false);
    fl(g,
      'M 44 8 C 46 30 50 60 54 120 C 50 80 46 44 44 14 Z',
      '#BCAAA4', false);
    // Mid-height plume fills
    fl(g,
      'M 20 150 C 28 170 34 200 42 240 C 38 210 30 180 22 160 Z',
      '#D7CCC8', false);
    fl(g,
      'M 50 142 C 54 168 56 196 54 220 C 52 196 48 168 46 148 Z',
      '#BCAAA4', false);
    // Stem area fills
    fl(g,
      'M 36 240 C 38 300 40 360 40 420 L 44 420 C 44 360 42 300 40 240 Z',
      '#BCAAA4', false);
    fl(g,
      'M 48 220 C 50 280 52 340 52 420 L 56 420 C 56 340 54 280 52 220 Z',
      '#D7CCC8', false);

    // --- Pampas grass fills RIGHT ---
    fl(g,
      'M 346 0 C 340 20 334 50 330 60 C 332 50 338 30 342 10 C 344 4 346 0 346 0 Z',
      '#D7CCC8', false);
    fl(g,
      'M 332 0 C 330 16 326 40 322 40 C 324 30 328 14 330 0 Z',
      '#BCAAA4', false);
    fl(g,
      'M 322 0 C 324 14 326 30 330 60 C 326 40 320 18 318 0 Z',
      '#D7CCC8', false);
    // Broader plume mass right
    fl(g,
      'M 352 8 C 346 30 340 60 336 120 C 342 80 348 44 354 14 Z',
      '#D7CCC8', false);
    fl(g,
      'M 316 8 C 314 30 310 60 306 120 C 310 80 314 44 316 14 Z',
      '#BCAAA4', false);
    // Mid-height plume fills right
    fl(g,
      'M 340 150 C 332 170 326 200 318 240 C 322 210 330 180 338 160 Z',
      '#D7CCC8', false);
    fl(g,
      'M 310 142 C 306 168 304 196 306 220 C 308 196 312 168 314 148 Z',
      '#BCAAA4', false);
    // Stem area fills right
    fl(g,
      'M 324 240 C 322 300 320 360 320 420 L 316 420 C 316 360 318 300 320 240 Z',
      '#BCAAA4', false);
    fl(g,
      'M 312 220 C 310 280 308 340 308 420 L 304 420 C 304 340 306 280 308 220 Z',
      '#D7CCC8', false);

    // --- Green decorative balls fills ---
    fe(g, 'circle', { cx: 45, cy: 107, r: 8, fill: '#26A69A' }, a);
    fe(g, 'circle', { cx: 25, cy: 187, r: 7, fill: '#2E7D32' }, false);
    fe(g, 'circle', { cx: 319, cy: 117, r: 8, fill: '#26A69A' }, a);
    fe(g, 'circle', { cx: 337, cy: 207, r: 7, fill: '#2E7D32' }, false);

    // --- Golden leaf fills ---
    fl(g, 'M 48 130 C 56 120 64 118 66 126 C 68 134 60 140 48 130 Z', '#FFB300', false);
    fl(g, 'M 22 150 C 30 140 38 138 40 146 C 42 154 34 160 22 150 Z', '#FFB300', false);
    fl(g, 'M 56 160 C 64 150 72 148 74 156 C 76 164 68 170 56 160 Z', '#FFB300', false);
    fl(g, 'M 312 140 C 304 130 296 128 294 136 C 292 144 300 150 312 140 Z', '#FFB300', false);
    fl(g, 'M 340 160 C 332 150 324 148 322 156 C 320 164 328 170 340 160 Z', '#FFB300', false);
    fl(g, 'M 306 180 C 298 170 290 168 288 176 C 286 184 294 190 306 180 Z', '#FFB300', false);

    // White cotton/berry fills
    fe(g, 'circle', { cx: 52, cy: 50, r: 3, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 36, cy: 90, r: 2.5, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 60, cy: 140, r: 2.5, fill: '#F5F5F5' }, false);
    fe(g, 'circle', { cx: 310, cy: 56, r: 3, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 328, cy: 96, r: 2.5, fill: '#FAFAFA' }, false);
    fe(g, 'circle', { cx: 302, cy: 150, r: 2.5, fill: '#F5F5F5' }, false);

    // --- Miguel plaid shirt accent stripes (darker cross-hatch) ---
    // Vertical accent stripes
    fl(g, 'M 86 152 L 88 152 L 82 280 L 80 280 Z', '#8D6E63', false);
    fl(g, 'M 96 150 L 98 150 L 92 280 L 90 280 Z', '#8D6E63', false);
    fl(g, 'M 114 150 L 116 150 L 122 280 L 120 280 Z', '#8D6E63', false);
    fl(g, 'M 124 152 L 126 152 L 132 280 L 130 280 Z', '#8D6E63', false);
    // Horizontal accent stripes
    fe(g, 'rect', { x: 76, y: 179, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 199, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 219, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 239, width: 64, height: 2, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 76, y: 259, width: 64, height: 2, fill: '#8D6E63' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, cheeks, lip colors, teeth, necklace
  //          highlights, fleece zip highlight, pampas detail, studio light
  // =====================================================================
  (g, a) => {
    // --- Sandra eye shines ---
    fe(g, 'circle', { cx: 174, cy: 99, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 196, cy: 99, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 178, cy: 103, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 200, cy: 103, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Sandra cheek blush
    fe(g, 'ellipse', { cx: 160, cy: 120, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);
    fe(g, 'ellipse', { cx: 200, cy: 120, rx: 10, ry: 5, fill: '#F48FB1', opacity: '0.25' }, a);

    // Sandra lip color fill
    fl(g,
      'M 166 134 C 170 130 176 128 180 128 C 184 128 190 130 194 134 C 190 140 184 143 180 143 C 176 143 170 140 166 134 Z',
      '#E57373', false);
    // Sandra teeth hint (white strip)
    fe(g, 'rect', { x: 170, y: 131, width: 20, height: 3, rx: 1, fill: '#FFFFFF', opacity: '0.7' }, false);

    // --- Ricardo eye shines ---
    fe(g, 'circle', { cx: 220, cy: 76, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 242, cy: 74, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 224, cy: 80, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 246, cy: 78, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Ricardo mouth interior
    fl(g,
      'M 220 112 C 226 108 230 106 234 108 C 238 110 240 112 242 112 L 240 114 C 234 118 226 118 220 114 Z',
      '#E57373', false);

    // --- Miguel eye shines ---
    fe(g, 'circle', { cx: 99, cy: 93, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 117, cy: 93, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 103, cy: 97, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 121, cy: 97, r: 0.7, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Miguel cheek blush
    fe(g, 'ellipse', { cx: 90, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 122, cy: 112, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // Miguel mouth color
    fl(g,
      'M 94 120 C 98 116 102 114 106 114 C 110 114 114 116 118 120 C 114 126 110 128 106 128 C 102 128 98 126 94 120 Z',
      '#E57373', false);
    // Miguel teeth hint
    fe(g, 'rect', { x: 98, y: 118, width: 16, height: 2, rx: 1, fill: '#FFFFFF', opacity: '0.7' }, false);

    // --- Necklace / earring highlights ---
    // Chain link highlights (small bright spots)
    fe(g, 'circle', { cx: 160, cy: 170, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 172, cy: 168, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 184, cy: 166, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 196, cy: 168, r: 1, fill: '#FFF8E1', opacity: '0.6' }, false);
    // Earring highlights
    fe(g, 'circle', { cx: 137, cy: 116, r: 1, fill: '#FFF8E1', opacity: '0.5' }, false);
    fe(g, 'circle', { cx: 223, cy: 114, r: 1, fill: '#FFF8E1', opacity: '0.5' }, false);

    // --- Ricardo fleece zip highlight ---
    pp(g, ['M 229 164 L 229 280'], false, lt);

    // --- Pampas feather detail strokes (extra wispy lines) ---
    pp(g, [
      'M 16 20 C 22 40 28 58 30 60',
      'M 44 18 C 40 38 36 56 38 40',
      'M 344 20 C 338 40 332 58 330 60',
      'M 316 18 C 320 38 324 56 322 40'
    ], false, lt);
    // Extra feathery wisps
    pp(g, [
      'M 10 40 C 18 60 24 80 26 100',
      'M 52 36 C 48 56 46 76 48 96',
      'M 350 40 C 342 60 336 80 334 100',
      'M 308 36 C 312 56 314 76 312 96'
    ], false, lt);

    // --- Soft studio light effect (warm overlay) ---
    fe(g, 'rect', { x: 70, y: 0, width: 220, height: 420, fill: '#FFF8E1', opacity: '0.04' }, false);
    // Subtle rim light on Sandra's hair
    pp(g, [
      'M 148 68 C 146 82 144 96 144 108',
      'M 218 72 C 220 86 222 100 222 112'
    ], false, lt);

    // --- Plaid cross-hatch extra detail on Miguel ---
    // Thinner cross lines at intersections
    const plaidYs = [180, 200, 220, 240, 260];
    const plaidXs = [85, 95, 115, 125];
    plaidYs.forEach(y => {
      plaidXs.forEach(x => {
        fe(g, 'rect', { x: x - 1, y: y - 1, width: 2, height: 2, fill: '#5D4037', opacity: '0.4' }, false);
      });
    });

    // Hand skin fills for Sandra
    fe(g, 'ellipse', { cx: 84, cy: 248, rx: 10, ry: 12, fill: '#FADCC2', opacity: '0.8' }, false);
    fe(g, 'ellipse', { cx: 258, cy: 240, rx: 8, ry: 10, fill: '#FADCC2', opacity: '0.7' }, false);

    // Ricardo hand skin fills
    fe(g, 'ellipse', { cx: 162, cy: 238, rx: 7, ry: 8, fill: '#EDBE8C', opacity: '0.7' }, false);
    fe(g, 'ellipse', { cx: 252, cy: 238, rx: 7, ry: 8, fill: '#EDBE8C', opacity: '0.7' }, false);

    // Miguel hand skin fills
    fe(g, 'ellipse', { cx: 66, cy: 206, rx: 5, ry: 6, fill: '#FADCC2', opacity: '0.7' }, false);
    fe(g, 'ellipse', { cx: 144, cy: 208, rx: 5, ry: 6, fill: '#FADCC2', opacity: '0.7' }, false);
  }
];
