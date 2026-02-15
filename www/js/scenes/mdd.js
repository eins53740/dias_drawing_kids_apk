const mddLayers = [
  // =====================================================================
  // Layer 0: Composition guides — wall band, Miguel zone, father zone,
  //          ground line, village skyline
  // =====================================================================
  (g, a) => {
    // Wall horizontal band (two lines for top/bottom of wall)
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a, lt);
    // Miguel zone — left/center
    pp(g, ['M 60 20 L 60 300', 'M 220 20 L 220 300'], a, lt);
    // Miguel vertical center
    pp(g, ['M 140 20 L 140 260'], a, lt);
    // Miguel head circle guide
    pp(g, ['M 140 52 C 168 52 188 72 188 96 C 188 120 168 140 140 140 C 112 140 92 120 92 96 C 92 72 112 52 140 52 Z'], a, lt);
    // Father zone — right edge
    pp(g, ['M 280 40 L 280 200', 'M 360 40 L 360 200'], a, lt);
    // Ground line
    pp(g, ['M 0 380 L 360 380'], a, lt);
    // Village skyline guide
    pp(g, ['M 0 120 L 360 120'], a, lt);
    // Shoulder line
    pp(g, ['M 80 170 L 200 170'], a, lt);
  },

  // =====================================================================
  // Layer 1: Miguel body — round child head, neck, shoulders/torso
  //          leaning forward on wall, both arms on wall. Father partial.
  // =====================================================================
  (g, a) => {
    // Head — large round child head
    pp(g, [
      'M 140 50 C 162 50 180 64 182 84 C 184 100 180 116 172 126 C 164 136 154 142 140 144 C 126 142 116 136 108 126 C 100 116 96 100 98 84 C 100 64 118 50 140 50 Z'
    ], a);
    // Neck — short, child proportions
    pp(g, [
      'M 130 142 L 128 158',
      'M 150 142 L 152 158'
    ], a);
    // Shoulders and torso — leaning forward onto wall
    pp(g, [
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z'
    ], a);
    // Left arm — resting on wall top
    pp(g, [
      'M 92 190 C 82 206 74 226 70 248 C 68 254 72 258 78 256 L 112 244'
    ], a);
    // Right arm — resting on wall top
    pp(g, [
      'M 188 190 C 198 206 206 226 210 248 C 212 254 208 258 202 256 L 168 244'
    ], a);
    // Father — partial head peeking from right
    pp(g, [
      'M 300 102 C 300 82 312 70 326 66 C 340 70 350 82 350 102 C 352 114 348 124 342 132 C 338 136 332 140 326 142'
    ], a);
    // Father neck + shoulders (partial)
    pp(g, [
      'M 318 140 L 316 154',
      'M 334 140 L 336 154'
    ], a);
    pp(g, [
      'M 290 176 C 300 162 314 154 326 154 C 338 154 350 162 360 176 L 360 260 L 282 260 Z'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face — eyes, eyebrows, nose, open mouth with teeth, ears.
  //          Father partial face (one eye, beard stubble).
  // =====================================================================
  (g, a) => {
    // Left eye — round child eye
    pp(g, [
      'M 120 88 C 122 82 128 79 134 80 C 140 82 142 88 140 94 C 138 98 132 100 126 98 C 122 96 120 92 120 88 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 146 88 C 148 82 154 79 160 80 C 166 82 168 88 166 94 C 164 98 158 100 152 98 C 148 96 146 92 146 88 Z'
    ], a);
    // Left pupil — dark, expressive
    fe(g, 'circle', { cx: 130, cy: 90, r: 4, fill: a ? HL : '#2D1B0E' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 156, cy: 90, r: 4, fill: a ? HL : '#2D1B0E' }, a);
    // Left eyelid crease
    pp(g, ['M 122 84 C 126 80 132 78 138 80'], a, lt);
    // Right eyelid crease
    pp(g, ['M 148 84 C 152 80 158 78 164 80'], a, lt);
    // Left eyebrow — slightly arched
    pp(g, ['M 118 78 C 124 72 132 70 140 74'], a);
    // Right eyebrow
    pp(g, ['M 148 74 C 156 70 164 72 170 78'], a);
    // Nose — small child nose
    pp(g, [
      'M 138 86 C 137 94 136 100 134 106',
      'M 130 108 C 134 112 138 114 142 114 C 146 112 148 108 150 106'
    ], a);
    // Nose bridge (subtle)
    pp(g, ['M 140 86 C 139 92 138 96 137 100'], a, lt);
    // Mouth — slightly open, showing teeth, cute smile
    pp(g, [
      'M 124 120 C 128 116 134 114 140 116 C 146 114 152 116 156 120'
    ], a);
    // Lower lip
    pp(g, [
      'M 124 120 C 128 130 134 134 140 134 C 146 134 152 130 156 120'
    ], a);
    // Upper teeth row
    pp(g, ['M 126 120 L 154 120'], a);
    pp(g, [
      'M 132 120 L 132 124',
      'M 137 120 L 137 125',
      'M 143 120 L 143 125',
      'M 148 120 L 148 124'
    ], a, lt);
    // Left ear — slightly prominent
    pp(g, [
      'M 96 86 C 90 82 86 88 86 96 C 86 104 90 108 96 106'
    ], a);
    // Left ear inner detail
    pp(g, ['M 90 90 C 88 94 88 100 90 104'], a, lt);
    // Right ear — slightly prominent
    pp(g, [
      'M 184 86 C 190 82 194 88 194 96 C 194 104 190 108 184 106'
    ], a);
    // Right ear inner detail
    pp(g, ['M 190 90 C 192 94 192 100 190 104'], a, lt);
    // Father's partial face — one eye
    pp(g, [
      'M 316 98 C 318 92 324 90 328 94 C 332 98 330 104 326 106 C 322 108 318 104 316 98 Z'
    ], a);
    fe(g, 'circle', { cx: 324, cy: 100, r: 2.8, fill: a ? HL : '#2C1810' }, a);
    // Father eyebrow
    pp(g, ['M 314 90 C 320 86 328 86 334 90'], a);
    // Father beard stubble dots
    const bd = [
      [310, 124], [314, 128], [318, 132], [322, 134], [326, 136],
      [330, 134], [334, 132], [338, 128], [342, 124],
      [318, 138], [322, 140], [326, 142], [330, 140],
      [314, 134], [326, 130], [334, 128]
    ];
    bd.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.7, fill: a ? HL : '#3E2C20' }, a);
    });
  },

  // =====================================================================
  // Layer 3: Hair + puffy jacket — dark short hair with texture,
  //          quilted jacket body, hood with orange lining, emblem circle.
  //          Father shirt collar.
  // =====================================================================
  (g, a) => {
    // Hair outline — dark brown, short
    pp(g, [
      'M 100 84 C 98 66 106 50 122 42 C 134 36 150 36 162 42 C 174 50 180 66 178 84'
    ], a);
    // Hair inner volume
    pp(g, [
      'M 104 80 C 106 66 114 52 128 46 C 140 42 152 44 162 52 C 170 60 174 72 172 82'
    ], a);
    // Hair texture strands
    pp(g, [
      'M 118 42 C 128 38 140 38 150 42',
      'M 110 52 C 122 46 136 44 148 48',
      'M 106 62 C 118 56 132 54 144 58',
      'M 112 72 C 124 66 136 64 148 68'
    ], a, lt);
    // Hair wisp on forehead
    pp(g, [
      'M 126 46 C 130 50 136 52 142 50',
      'M 120 54 C 124 58 130 60 136 58'
    ], a, lt);

    // Jacket body — navy puffy quilted
    pp(g, [
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z'
    ], a);
    // Horizontal quilting lines — the signature puffy look
    pp(g, [
      'M 90 196 C 108 194 140 192 190 196',
      'M 88 210 C 110 208 140 206 192 210',
      'M 87 224 C 112 222 140 220 193 224',
      'M 86 238 C 114 236 140 234 194 238'
    ], a, lt);
    // Quilting side curves (showing puffiness)
    pp(g, [
      'M 90 196 C 88 200 86 206 88 210',
      'M 88 210 C 86 216 86 220 87 224',
      'M 87 224 C 85 230 84 234 86 238',
      'M 190 196 C 192 200 194 206 192 210',
      'M 192 210 C 194 216 194 220 193 224',
      'M 193 224 C 195 230 196 234 194 238'
    ], a, lt);

    // Hood — draped behind neck, visible around neckline
    pp(g, [
      'M 100 168 C 94 164 88 166 86 174 C 84 182 88 188 96 186',
      'M 180 168 C 186 164 192 166 194 174 C 196 182 192 188 184 186'
    ], a);
    // Hood back curve
    pp(g, [
      'M 96 186 C 112 192 126 194 140 194 C 154 194 168 192 184 186'
    ], a);
    // Hood lining edge — orange/camel visible strip at neckline
    pp(g, [
      'M 96 184 C 112 190 126 192 140 192 C 154 192 168 190 184 184'
    ], a);
    // Hood lining inner edge
    pp(g, [
      'M 98 182 C 114 188 128 190 140 190 C 152 190 166 188 182 182'
    ], a, lt);

    // Emblem circle on chest
    fe(g, 'circle', { cx: 140, cy: 210, r: 8, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Emblem inner circle hint
    fe(g, 'circle', { cx: 140, cy: 210, r: 5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.2 : SW }, a);

    // Father shirt collar
    pp(g, [
      'M 310 152 C 318 156 326 158 334 156 C 340 154 346 152 350 150'
    ], a);
    // Father shirt neckline
    pp(g, ['M 318 142 C 322 148 326 150 330 148'], a, lt);
  },

  // =====================================================================
  // Layer 4: Jacket details — zipper with teeth, pocket outlines,
  //          hood drawstrings, sleeve seams
  // =====================================================================
  (g, a) => {
    // Center zipper line
    pp(g, ['M 140 192 L 140 260'], a);
    // Zipper teeth marks
    for (let y = 196; y < 258; y += 5) {
      pp(g, [`M 138 ${y} L 142 ${y}`], a, lt);
    }
    // Zipper pull tab at top
    pp(g, [
      'M 139 193 L 137 198 L 143 198 L 141 193'
    ], a, lt);

    // Left pocket outline
    pp(g, ['M 96 226 L 120 226 L 120 250 L 96 250 Z'], a, lt);
    // Left pocket flap
    pp(g, ['M 96 226 L 120 226'], a);
    // Right pocket outline
    pp(g, ['M 160 226 L 184 226 L 184 250 L 160 250 Z'], a, lt);
    // Right pocket flap
    pp(g, ['M 160 226 L 184 226'], a);

    // Hood drawstrings hanging from neckline
    pp(g, [
      'M 130 190 C 128 200 126 210 124 220',
      'M 150 190 C 152 200 154 210 156 220'
    ], a, lt);
    // Drawstring tips (small knots)
    pp(g, [
      'M 123 220 C 122 224 124 226 126 224 C 128 222 126 218 124 218',
      'M 155 220 C 154 224 156 226 158 224 C 160 222 158 218 156 218'
    ], a, lt);

    // Left sleeve seam
    pp(g, ['M 92 190 C 88 198 86 208 84 218'], a, lt);
    // Right sleeve seam
    pp(g, ['M 188 190 C 192 198 194 208 196 218'], a, lt);
    // Left sleeve quilting
    pp(g, [
      'M 90 202 C 84 204 78 208 74 212',
      'M 88 216 C 82 218 76 222 72 226',
      'M 86 230 C 80 232 76 236 72 240'
    ], a, lt);
    // Right sleeve quilting
    pp(g, [
      'M 190 202 C 196 204 202 208 206 212',
      'M 192 216 C 198 218 204 222 208 226',
      'M 194 230 C 200 232 204 236 208 240'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands + green toy — both chubby child hands holding
  //          dinosaur/dragon figurine on top of wall
  // =====================================================================
  (g, a) => {
    // Left hand — chubby child fingers on wall
    pp(g, [
      'M 112 248 C 108 242 102 244 100 250 C 98 256 102 260 108 258'
    ], a);
    // Left thumb
    pp(g, [
      'M 112 246 C 116 242 118 236 116 232 C 114 228 110 228 108 232'
    ], a);
    // Left index finger
    pp(g, [
      'M 104 246 C 100 240 96 234 98 230 C 100 226 104 226 106 230'
    ], a);
    // Left middle finger
    pp(g, [
      'M 102 248 C 98 242 94 236 96 232 C 98 228 102 228 104 232'
    ], a);
    // Left ring + pinky (grouped, shorter)
    pp(g, [
      'M 100 252 C 96 248 94 242 96 238',
      'M 98 254 C 94 250 92 246 94 242'
    ], a, lt);

    // Right hand — chubby child fingers
    pp(g, [
      'M 168 248 C 172 242 178 244 180 250 C 182 256 178 260 172 258'
    ], a);
    // Right thumb
    pp(g, [
      'M 168 246 C 164 242 162 236 164 232 C 166 228 170 228 172 232'
    ], a);
    // Right index finger
    pp(g, [
      'M 176 246 C 180 240 184 234 182 230 C 180 226 176 226 174 230'
    ], a);
    // Right middle finger
    pp(g, [
      'M 178 248 C 182 242 186 236 184 232 C 182 228 178 228 176 232'
    ], a);
    // Right ring + pinky
    pp(g, [
      'M 180 252 C 184 248 186 242 184 238',
      'M 182 254 C 186 250 188 246 186 242'
    ], a, lt);

    // Green toy (dinosaur/dragon figurine) on wall top
    // Toy body — rounded horizontal shape
    pp(g, [
      'M 118 238 C 116 230 122 222 132 220 C 138 218 144 220 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238'
    ], a);
    // Toy head/neck — left side, sticking up
    pp(g, [
      'M 132 220 C 130 214 132 206 138 202 C 142 200 146 202 148 208 L 148 224'
    ], a);
    // Toy head detail
    pp(g, [
      'M 136 204 C 134 200 136 196 140 194 C 144 196 146 200 144 204'
    ], a);
    // Toy eye
    fe(g, 'circle', { cx: 139, cy: 200, r: 1.5, fill: a ? HL : P }, a);
    // Toy spine bumps (3 bumps along back)
    pp(g, [
      'M 136 212 C 134 208 136 204 138 206',
      'M 142 210 C 140 206 142 202 144 204',
      'M 150 212 C 148 208 150 204 152 206',
      'M 158 214 C 156 210 158 206 160 208'
    ], a);
    // Toy legs — two pairs
    pp(g, [
      'M 128 234 L 124 244',
      'M 136 236 L 134 244',
      'M 162 236 L 164 244',
      'M 170 234 L 174 244'
    ], a, lt);
    // Toy tail — curving right
    pp(g, [
      'M 164 224 C 170 226 178 224 184 220 C 190 216 194 212 192 208'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — stone wall (irregular stones, two rows),
  //          moss patches, village houses, bare trees, ground/grass, sky
  // =====================================================================
  (g, a) => {
    // Stone wall — top and bottom edges
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a);
    // Upper row stone outlines (irregular shapes)
    pp(g, [
      'M 0 260 L 38 262 L 40 280 L 0 278 Z',
      'M 38 262 L 88 258 L 90 282 L 40 280 Z',
      'M 88 258 L 148 260 L 146 284 L 90 282 Z',
      'M 148 260 L 208 262 L 206 280 L 146 284 Z',
      'M 208 262 L 268 258 L 270 282 L 206 280 Z',
      'M 268 258 L 328 260 L 330 278 L 270 282 Z',
      'M 328 260 L 360 262 L 360 280 L 330 278 Z'
    ], a);
    // Lower row stone outlines
    pp(g, [
      'M 0 278 L 48 282 L 46 300 L 0 300 Z',
      'M 48 282 L 118 278 L 120 300 L 46 300 Z',
      'M 118 278 L 178 282 L 176 300 L 120 300 Z',
      'M 178 282 L 238 280 L 240 300 L 176 300 Z',
      'M 238 280 L 308 282 L 310 300 L 240 300 Z',
      'M 308 282 L 360 278 L 360 300 L 310 300 Z'
    ], a);
    // Moss patches on top of wall
    pp(g, [
      'M 18 258 C 22 254 30 252 36 254 C 42 256 44 258 38 260',
      'M 78 256 C 84 252 92 250 98 252 C 104 254 106 258 98 258',
      'M 158 258 C 164 254 172 252 180 254 C 186 256 188 260 180 260',
      'M 248 256 C 254 252 262 250 268 254 C 274 256 276 260 268 258'
    ], a);

    // Village houses (above wall, background)
    // House 1 — stone cottage, left
    pp(g, [
      'M 8 148 L 8 260 L 56 260 L 56 126 Z'
    ], a, lt);
    // House 1 pitched roof
    pp(g, ['M 8 148 L 32 116 L 56 126'], a, lt);
    // House 1 windows
    pp(g, [
      'M 18 168 L 36 168 L 36 186 L 18 186 Z',
      'M 22 210 L 42 210 L 42 240 L 22 240 Z'
    ], a, lt);
    // House 1 door
    pp(g, ['M 28 230 L 42 230 L 42 260 L 28 260 Z'], a, lt);

    // House 2 — taller, right of house 1
    pp(g, [
      'M 56 136 L 56 260 L 104 260 L 104 156 Z'
    ], a, lt);
    // House 2 roof
    pp(g, ['M 56 136 L 80 106 L 104 156'], a, lt);
    // House 2 windows
    pp(g, [
      'M 64 168 L 80 168 L 80 184 L 64 184 Z',
      'M 84 168 L 96 168 L 96 184 L 84 184 Z'
    ], a, lt);

    // Metal shed/warehouse — far right background
    pp(g, [
      'M 232 180 L 232 260 L 278 260 L 278 170 Z'
    ], a, lt);
    // Shed flat roof
    pp(g, ['M 230 180 L 280 170'], a, lt);
    // Shed ridges (corrugated metal)
    pp(g, [
      'M 240 180 L 240 260',
      'M 250 178 L 250 260',
      'M 260 176 L 260 260',
      'M 270 174 L 270 260'
    ], a, lt);

    // Bare winter trees
    // Tree 1 — between houses and shed
    pp(g, [
      'M 190 130 L 190 260'
    ], a, lt);
    pp(g, [
      'M 190 150 C 180 138 174 128 168 118',
      'M 190 164 C 200 152 206 142 212 132',
      'M 190 178 C 182 168 176 158 170 148',
      'M 190 188 C 198 178 204 168 210 158'
    ], a, lt);
    // Small branches
    pp(g, [
      'M 168 118 C 164 114 160 112 158 114',
      'M 212 132 C 216 128 220 126 222 128',
      'M 170 148 C 166 144 162 142 160 144'
    ], a, lt);

    // Tree 2 — far right area
    pp(g, [
      'M 300 160 L 300 260'
    ], a, lt);
    pp(g, [
      'M 300 178 C 292 166 286 158 282 150',
      'M 300 190 C 308 180 314 172 318 164'
    ], a, lt);

    // Stone path/yard hint between houses
    pp(g, ['M 104 260 L 130 250 L 168 252 L 190 260'], a, lt);

    // Ground/grass area below wall
    pp(g, ['M 0 300 L 0 450 L 360 450 L 360 300 Z'], a, lt);
    // Grass tufts
    pp(g, [
      'M 20 310 C 24 304 28 300 30 304',
      'M 60 308 C 64 302 68 298 70 302',
      'M 120 312 C 124 306 128 302 130 306',
      'M 200 310 C 204 304 208 300 210 304',
      'M 280 308 C 284 302 288 298 290 302',
      'M 340 310 C 344 304 348 300 350 304'
    ], a, lt);

    // Sky area outline
    pp(g, ['M 0 0 L 360 0 L 360 120 L 0 120 Z'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — figures (Miguel skin, ears, hair, jacket,
  //          hood + orange lining, hand skin, arm jacket, green toy,
  //          father skin, father shirt, neck)
  // =====================================================================
  (g, a) => {
    // Miguel skin — face
    fl(g,
      'M 140 52 C 160 52 178 66 180 84 C 182 100 178 114 170 124 C 162 134 152 140 140 142 C 128 140 118 134 110 124 C 102 114 98 100 100 84 C 102 66 120 52 140 52 Z',
      '#F5D0A9', a);
    // Neck skin
    fl(g,
      'M 130 140 L 128 158 L 152 158 L 150 140 Z',
      '#F0C8A0', false);
    // Left ear fill
    fe(g, 'ellipse', { cx: 90, cy: 96, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 190, cy: 96, rx: 6, ry: 10, fill: '#F5D0A9' }, false);
    // Miguel hair — dark brown
    fl(g,
      'M 102 84 C 100 68 108 52 124 44 C 136 38 152 38 164 44 C 176 52 182 68 180 84 L 176 82 C 178 72 174 62 168 56 C 162 48 150 44 140 46 C 128 48 118 56 112 66 C 108 72 106 78 104 82 Z',
      '#4E342E', a);
    // Miguel jacket — navy puffy
    fl(g,
      'M 88 186 C 98 170 116 160 140 160 C 164 160 182 170 192 186 L 196 260 L 84 260 Z',
      '#1A237E', a);
    // Hood — navy
    fl(g,
      'M 100 168 C 94 164 88 166 86 174 C 84 182 88 188 96 186 C 112 192 126 194 140 194 C 154 194 168 192 184 186 C 192 188 196 182 194 174 C 192 166 186 164 180 168 L 152 172 L 128 172 Z',
      '#1A237E', false);
    // Hood orange lining strip — visible at neckline
    fl(g,
      'M 96 184 C 112 190 126 192 140 192 C 154 192 168 190 184 184 C 168 188 154 190 140 190 C 126 190 112 188 96 184 Z',
      '#FF8F00', a);
    // Second lining strip (inner, lighter orange)
    fl(g,
      'M 100 182 C 114 186 128 188 140 188 C 152 188 166 186 180 182 C 166 184 152 186 140 186 C 128 186 114 184 100 182 Z',
      '#FFB300', false);
    // Left hand skin
    fe(g, 'ellipse', { cx: 106, cy: 248, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    // Right hand skin
    fe(g, 'ellipse', { cx: 174, cy: 248, rx: 10, ry: 8, fill: '#F5D0A9' }, false);
    // Left arm jacket fill
    fl(g,
      'M 92 190 C 82 206 74 226 70 248 C 68 254 72 258 78 256 L 112 244 Z',
      '#1A237E', false);
    // Right arm jacket fill
    fl(g,
      'M 188 190 C 198 206 206 226 210 248 C 212 254 208 258 202 256 L 168 244 Z',
      '#1A237E', false);
    // Green toy fill — turquoise/teal
    fl(g,
      'M 118 238 C 116 230 122 222 132 220 C 130 214 132 206 138 202 C 134 200 136 196 140 194 C 144 196 146 200 144 204 C 142 200 146 202 148 208 L 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238 L 164 240 C 170 226 178 224 184 220 C 190 216 194 212 192 208 Z',
      '#26A69A', a);
    // Toy body simpler fill (overlay)
    fl(g,
      'M 118 238 C 116 230 122 222 132 220 C 138 218 144 220 148 224 C 152 220 158 218 164 220 C 174 222 180 230 178 238 Z',
      '#2BBBAD', false);
    // Father skin — partial face
    fl(g,
      'M 302 102 C 302 84 312 72 326 68 C 340 72 348 84 348 102 C 350 112 346 122 340 130 C 336 134 330 138 326 140 C 322 138 316 134 312 130 C 306 122 302 112 302 102 Z',
      '#EDBE8C', false);
    // Father neck
    fl(g,
      'M 318 138 L 316 154 L 336 154 L 334 138 Z',
      '#E8B882', false);
    // Father shirt — white
    fl(g,
      'M 290 176 C 300 162 314 154 326 154 C 338 154 350 162 360 176 L 360 260 L 282 260 Z',
      '#FAFAFA', false);
  },

  // =====================================================================
  // Layer 8: Color fills — scene (sky, houses, roofs, windows,
  //          stone wall tones, moss, grass, clouds)
  // =====================================================================
  (g, a) => {
    // Overcast gray sky
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 260, fill: '#CFD8DC' }, a);

    // House 1 fill — stone/tan
    fl(g,
      'M 8 148 L 8 260 L 56 260 L 56 126 Z',
      '#D7CCC8', false);
    // House 1 roof — terracotta
    fl(g,
      'M 8 148 L 32 116 L 56 126 Z',
      '#A1887F', false);
    // House 2 fill — lighter stone
    fl(g,
      'M 56 136 L 56 260 L 104 260 L 104 156 Z',
      '#BCAAA4', false);
    // House 2 roof — darker terracotta
    fl(g,
      'M 56 136 L 80 106 L 104 156 Z',
      '#8D6E63', false);
    // House 1 windows
    fe(g, 'rect', { x: 19, y: 169, width: 16, height: 16, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 23, y: 211, width: 18, height: 28, fill: '#546E7A' }, false);
    // House 2 windows
    fe(g, 'rect', { x: 65, y: 169, width: 14, height: 14, fill: '#546E7A' }, false);
    fe(g, 'rect', { x: 85, y: 169, width: 10, height: 14, fill: '#546E7A' }, false);
    // Window light reflections
    fe(g, 'rect', { x: 20, y: 170, width: 4, height: 6, fill: '#90A4AE', opacity: '0.4' }, false);
    fe(g, 'rect', { x: 66, y: 170, width: 4, height: 5, fill: '#90A4AE', opacity: '0.4' }, false);

    // Metal shed fill — dark gray
    fl(g,
      'M 232 180 L 232 260 L 278 260 L 278 170 Z',
      '#78909C', false);
    // Shed roof highlight
    fl(g,
      'M 230 180 L 280 170 L 278 174 L 232 184 Z',
      '#90A4AE', false);

    // Stone wall fills — alternating gray/brown tones (upper row)
    fl(g, 'M 0 260 L 38 262 L 40 280 L 0 278 Z', '#9E9E9E', false);
    fl(g, 'M 38 262 L 88 258 L 90 282 L 40 280 Z', '#BDBDBD', false);
    fl(g, 'M 88 258 L 148 260 L 146 284 L 90 282 Z', '#8D6E63', false);
    fl(g, 'M 148 260 L 208 262 L 206 280 L 146 284 Z', '#9E9E9E', false);
    fl(g, 'M 208 262 L 268 258 L 270 282 L 206 280 Z', '#BDBDBD', false);
    fl(g, 'M 268 258 L 328 260 L 330 278 L 270 282 Z', '#8D6E63', false);
    fl(g, 'M 328 260 L 360 262 L 360 280 L 330 278 Z', '#9E9E9E', false);
    // Lower row
    fl(g, 'M 0 278 L 48 282 L 46 300 L 0 300 Z', '#BDBDBD', false);
    fl(g, 'M 48 282 L 118 278 L 120 300 L 46 300 Z', '#9E9E9E', false);
    fl(g, 'M 118 278 L 178 282 L 176 300 L 120 300 Z', '#BDBDBD', false);
    fl(g, 'M 178 282 L 238 280 L 240 300 L 176 300 Z', '#8D6E63', false);
    fl(g, 'M 238 280 L 308 282 L 310 300 L 240 300 Z', '#9E9E9E', false);
    fl(g, 'M 308 282 L 360 278 L 360 300 L 310 300 Z', '#BDBDBD', false);

    // Moss green patches on wall top
    fl(g, 'M 18 258 C 22 254 30 252 36 254 C 42 256 44 258 38 260 L 18 260 Z', '#558B2F', false);
    fl(g, 'M 78 256 C 84 252 92 250 98 252 C 104 254 106 258 98 258 L 78 258 Z', '#558B2F', false);
    fl(g, 'M 158 258 C 164 254 172 252 180 254 C 186 256 188 260 180 260 L 158 260 Z', '#558B2F', false);
    fl(g, 'M 248 256 C 254 252 262 250 268 254 C 274 256 276 260 268 258 L 248 258 Z', '#558B2F', false);
    // Extra moss spots (smaller, lighter)
    fl(g, 'M 52 258 C 56 256 60 254 64 256 C 66 258 64 260 58 260 L 52 260 Z', '#689F38', false);
    fl(g, 'M 210 258 C 214 256 218 254 222 256 C 224 258 222 260 216 260 L 210 260 Z', '#689F38', false);

    // Green grass ground
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#7CB342' }, a);
    // Grass variation — darker band at top
    fl(g,
      'M 0 300 C 20 296 40 298 60 300 C 80 302 100 298 120 300 C 140 302 160 296 180 300 C 200 304 220 298 240 300 C 260 302 280 296 300 300 C 320 302 340 298 360 300 L 360 312 L 0 312 Z',
      '#689F38', false);
    // Lighter grass band
    fl(g,
      'M 0 320 C 40 316 80 318 120 316 C 160 314 200 318 240 316 C 280 314 320 318 360 316 L 360 340 L 0 340 Z',
      '#8BC34A', false);

    // Overcast clouds (layered)
    fl(g,
      'M 0 18 C 30 12 60 16 90 10 C 120 4 150 14 180 8 C 210 2 240 12 270 6 C 300 0 330 10 360 4 L 360 0 L 0 0 Z',
      '#B0BEC5', false);
    fl(g,
      'M 0 46 C 40 40 80 44 120 38 C 160 32 200 42 240 36 C 280 30 320 40 360 34 L 360 18 C 330 24 300 14 270 18 C 240 24 210 14 180 20 C 150 26 120 16 90 22 C 60 28 30 24 0 30 Z',
      '#B0BEC5', false);
    // Lighter cloud wisps
    fl(g,
      'M 40 60 C 60 54 80 58 100 52 C 120 46 140 56 160 50 L 160 58 C 140 64 120 54 100 60 C 80 66 60 62 40 68 Z',
      '#CFD8DC', false);

    // Tree trunk fills
    fl(g,
      'M 188 130 L 188 260 L 192 260 L 192 130 Z',
      '#5D4037', false);
    fl(g,
      'M 298 160 L 298 260 L 302 260 L 302 160 Z',
      '#5D4037', false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, rosy cold cheeks, mouth fill,
  //          jacket emblem detail, toy eye dot, wall texture,
  //          tree bark, father details, clouds, grass streaks
  // =====================================================================
  (g, a) => {
    // Eye shine — left
    fe(g, 'circle', { cx: 128, cy: 88, r: 1.8, fill: 'white' }, a);
    // Eye shine — right
    fe(g, 'circle', { cx: 154, cy: 88, r: 1.8, fill: 'white' }, a);
    // Second smaller highlights
    fe(g, 'circle', { cx: 132, cy: 92, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 158, cy: 92, r: 0.9, fill: 'white', opacity: '0.7' }, false);

    // Rosy cold cheeks — brighter pink (it's winter!)
    fe(g, 'ellipse', { cx: 118, cy: 114, rx: 11, ry: 6, fill: '#FF8A65', opacity: '0.5' }, a);
    fe(g, 'ellipse', { cx: 162, cy: 114, rx: 11, ry: 6, fill: '#FF8A65', opacity: '0.5' }, a);
    // Extra rosy dots for cold emphasis
    fe(g, 'ellipse', { cx: 116, cy: 116, rx: 6, ry: 3, fill: '#EF5350', opacity: '0.2' }, false);
    fe(g, 'ellipse', { cx: 164, cy: 116, rx: 6, ry: 3, fill: '#EF5350', opacity: '0.2' }, false);

    // Mouth fill — pink/red gums
    fl(g,
      'M 126 120 C 130 128 136 132 140 132 C 144 132 150 128 154 120 L 150 120 C 148 126 144 128 140 128 C 136 128 132 126 130 120 Z',
      '#E57373', false);
    // Tongue hint
    fl(g,
      'M 134 124 C 136 128 140 130 144 128 C 146 126 146 122 144 120 L 136 120 C 134 122 134 124 134 124 Z',
      '#EF9A9A', false);
    // Teeth fill (white)
    fl(g,
      'M 128 120 L 152 120 L 150 124 C 146 125 142 126 140 126 C 138 126 134 125 130 124 Z',
      '#FAFAFA', false);

    // Jacket emblem detail — circle with inner design
    fe(g, 'circle', { cx: 140, cy: 210, r: 6, fill: '#283593' }, false);
    fe(g, 'circle', { cx: 140, cy: 210, r: 3.5, fill: '#FFD740' }, false);
    // Emblem inner cross/star hint
    pp(g, [
      'M 138 208 L 142 212',
      'M 142 208 L 138 212'
    ], a, lt);

    // Toy eye dot (already placed in layer 5, reinforce with color)
    fe(g, 'circle', { cx: 139, cy: 200, r: 1.2, fill: '#1B5E20' }, false);
    // Toy nostril
    fe(g, 'circle', { cx: 137, cy: 197, r: 0.6, fill: '#004D40' }, false);

    // Wall texture lines — vertical joints between stones
    pp(g, [
      'M 38 262 L 40 280',
      'M 88 258 L 90 282',
      'M 148 260 L 146 284',
      'M 208 262 L 206 280',
      'M 268 258 L 270 282',
      'M 328 260 L 330 278'
    ], a, lt);
    // Wall mortar texture (subtle horizontal cracks)
    pp(g, [
      'M 10 270 L 30 272',
      'M 55 268 L 75 270',
      'M 100 272 L 130 270',
      'M 160 268 L 190 272',
      'M 220 270 L 255 268',
      'M 285 272 L 320 270'
    ], a, lt);

    // Tree bark texture — vertical lines
    pp(g, [
      'M 189 140 L 189 200',
      'M 191 150 L 191 210',
      'M 299 170 L 299 220',
      'M 301 180 L 301 230'
    ], a, lt);
    // Branch knots
    fe(g, 'circle', { cx: 190, cy: 170, r: 1.5, fill: '#4E342E' }, false);
    fe(g, 'circle', { cx: 300, cy: 195, r: 1.2, fill: '#4E342E' }, false);

    // Father eye shine
    fe(g, 'circle', { cx: 322, cy: 98, r: 1.2, fill: 'white' }, false);
    // Father hair fill
    fl(g,
      'M 304 98 C 302 82 312 72 326 68 C 338 72 346 82 344 98 L 340 96 C 342 86 338 78 332 74 C 326 70 318 70 312 74 C 306 78 304 86 306 94 Z',
      '#4E342E', false);
    // Father shirt wrinkle hint
    pp(g, [
      'M 310 170 C 320 174 330 174 340 170',
      'M 306 186 C 316 190 326 190 336 186'
    ], a, lt);

    // Cloud shapes — upper sky detail
    fl(g,
      'M 200 70 C 210 62 220 66 230 60 C 240 54 250 64 260 58 L 260 68 C 250 74 240 64 230 70 C 220 76 210 72 200 78 Z',
      '#B0BEC5', false);
    fl(g,
      'M 300 50 C 310 44 320 48 330 42 L 330 52 C 320 58 310 54 300 58 Z',
      '#CFD8DC', false);

    // Grass detail streaks (individual blades)
    pp(g, [
      'M 30 318 C 34 312 36 308 38 312',
      'M 90 316 C 94 310 96 306 98 310',
      'M 150 320 C 154 314 156 310 158 314',
      'M 220 316 C 224 310 226 306 228 310',
      'M 300 318 C 304 312 306 308 308 312',
      'M 60 322 C 64 316 66 312 68 316',
      'M 180 324 C 184 318 186 314 188 318',
      'M 260 320 C 264 314 266 310 268 314',
      'M 340 322 C 344 316 346 312 348 316'
    ], a, lt);
    // Darker grass tufts near wall base
    pp(g, [
      'M 10 302 C 14 298 16 296 18 300',
      'M 50 304 C 54 300 56 298 58 302',
      'M 100 302 C 104 298 106 296 108 300',
      'M 160 304 C 164 300 166 298 168 302',
      'M 240 302 C 244 298 246 296 248 300',
      'M 320 304 C 324 300 326 298 328 302'
    ], a, lt);

    // Stone path texture between houses
    pp(g, [
      'M 108 258 C 116 256 124 254 132 256',
      'M 140 254 C 150 252 160 254 170 258'
    ], a, lt);
  }
];
