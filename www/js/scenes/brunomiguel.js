const brunomiguelLayers = [
  // =====================================================================
  // Layer 0: Composition guides — table edge, figure zones, alignment
  // =====================================================================
  (g, a) => {
    // Table/counter horizontal guide
    pp(g, ['M 0 340 L 360 340'], a, lt);
    // Bruno zone (left)
    pp(g, ['M 10 20 L 10 340', 'M 155 20 L 155 340'], a, lt);
    // Bruno head center crosshair
    pp(g, ['M 86 60 L 86 160', 'M 40 100 L 130 100'], a, lt);
    // Miguel zone (center-right)
    pp(g, ['M 160 30 L 160 340', 'M 285 30 L 285 340'], a, lt);
    // Miguel head center crosshair
    pp(g, ['M 216 60 L 216 170', 'M 170 110 L 265 110'], a, lt);
    // Third person zone (far right, torso only)
    pp(g, ['M 290 50 L 290 220 L 355 220 L 355 50'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 30 180 L 280 180'], a, lt);
    // Eye line guides
    pp(g, ['M 40 92 L 130 92', 'M 170 108 L 260 108'], a, lt);
    // Nose line guides
    pp(g, ['M 40 114 L 130 114', 'M 170 122 L 260 122'], a, lt);
    // Mouth line guides
    pp(g, ['M 40 132 L 130 132', 'M 170 138 L 260 138'], a, lt);
  },

  // =====================================================================
  // Layer 1: Body outlines — two main figures + third person torso
  // Angular adult proportions (Bruno), round child proportions (Miguel)
  // =====================================================================
  (g, a) => {
    // === BRUNO — head outline ===
    // Angular jawline, lean face, defined chin — 12 control points
    pp(g, [
      'M 57 94 C 55 78 58 62 64 52 C 70 44 78 40 86 40 C 94 40 102 44 108 52 C 114 62 117 78 117 94 C 117 104 116 114 112 122 C 109 130 104 138 98 144 C 94 148 90 152 86 154 C 82 152 78 148 74 144 C 68 138 63 130 60 122 C 57 114 55 104 57 94 Z'
    ], a);
    // Left ear — detailed with tragus
    pp(g, [
      'M 55 88 C 52 84 48 84 46 88 C 44 94 44 102 46 108 C 48 112 52 112 55 108',
      'M 50 90 C 48 94 47 100 48 106',
      'M 51 96 C 50 98 50 100 51 102'
    ], a);
    // Right ear
    pp(g, [
      'M 117 86 C 120 82 124 82 126 86 C 128 92 128 100 126 106 C 124 110 120 110 117 106',
      'M 122 88 C 124 92 125 98 124 104',
      'M 123 94 C 124 96 124 98 123 100'
    ], a);
    // Neck — shows Adam's apple, slight tilt
    pp(g, [
      'M 78 152 C 77 156 76 162 76 168 L 76 174',
      'M 94 150 C 95 154 96 160 97 166 L 98 174',
      'M 86 158 C 87 160 87 162 86 164'
    ], a);
    // Shoulders and torso — jacket outline with bulk
    pp(g, [
      'M 76 174 C 66 176 52 180 42 188 C 36 194 32 200 32 208 L 30 340',
      'M 98 174 C 108 176 120 180 130 188 C 136 194 140 200 140 208 L 142 340'
    ], a);

    // === MIGUEL — head outline ===
    // Round child face, fuller cheeks — 10 control points
    pp(g, [
      'M 190 108 C 190 90 196 76 206 70 C 212 68 220 68 226 70 C 236 76 242 90 242 108 C 243 120 242 132 236 142 C 232 148 226 156 218 160 C 210 156 204 148 200 142 C 194 132 190 120 190 108 Z'
    ], a);
    // Left ear
    pp(g, [
      'M 189 106 C 186 102 182 102 180 106 C 178 112 178 120 180 126 C 182 130 186 130 189 126',
      'M 184 110 C 182 114 181 120 182 124'
    ], a);
    // Right ear
    pp(g, [
      'M 243 104 C 246 100 250 100 252 104 C 254 110 254 118 252 124 C 250 128 246 128 243 124',
      'M 248 108 C 250 112 251 118 250 122'
    ], a);
    // Neck
    pp(g, [
      'M 210 158 C 209 162 208 166 208 172',
      'M 226 156 C 227 160 228 164 228 172'
    ], a);
    // Shoulders and torso — sweater
    pp(g, [
      'M 208 172 C 196 174 180 180 172 190 C 168 196 166 202 166 210 L 164 340',
      'M 228 172 C 238 174 252 180 260 190 C 264 196 266 202 266 210 L 268 340'
    ], a);

    // === THIRD PERSON (far right) — torso only ===
    pp(g, [
      'M 296 52 C 304 46 318 42 330 44 C 342 48 350 58 354 74 L 356 220',
      'M 290 72 C 288 80 286 100 286 120 L 286 220'
    ], a, lt);
  },

  // =====================================================================
  // Layer 2: EXTREMELY detailed faces — eyes, noses, mouths, expressions
  // Bruno gazing down-right at Miguel's toy; Miguel looking down
  // =====================================================================
  (g, a) => {
    // === BRUNO FACE ===
    // Left eye — almond shape, looking down-right toward Miguel
    pp(g, [
      'M 65 90 C 67 85 70 83 74 82 C 78 82 82 83 84 86 C 86 89 85 93 82 96 C 79 98 73 98 69 96 C 66 94 65 92 65 90 Z'
    ], a);
    // Left eye — upper lid thickness
    pp(g, ['M 66 89 C 69 84 74 82 80 82 C 84 83 86 85 86 87'], a);
    // Left eye — lower lid detail
    pp(g, ['M 66 92 C 70 96 76 98 82 96'], a, lt);
    // Left iris outer ring
    pp(g, ['M 72 88 C 72 84 80 84 80 88 C 80 92 72 92 72 88 Z'], a, lt);
    // Left pupil
    fe(g, 'circle', { cx: 77, cy: 89, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Left iris detail ring
    fe(g, 'circle', { cx: 77, cy: 89, r: 4.2, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': '0.5' }, a);
    // Left eyelid crease (deep-set)
    pp(g, ['M 64 84 C 68 79 74 77 80 78 C 84 79 87 81 88 83'], a, lt);
    // Left lower lashes hint
    pps(g, ['M 68 95 C 67 96 66 97 65 97', 'M 72 97 C 71 98 70 99 69 99'], a, 0.4, a ? HL : '#4A3628');

    // Right eye — almond shape
    pp(g, [
      'M 92 88 C 94 83 97 81 101 80 C 105 80 109 81 111 84 C 113 87 112 91 109 94 C 106 96 100 96 96 94 C 93 92 92 90 92 88 Z'
    ], a);
    // Right eye — upper lid thickness
    pp(g, ['M 93 87 C 96 82 101 80 107 80 C 111 81 113 83 113 85'], a);
    // Right eye — lower lid
    pp(g, ['M 93 90 C 97 94 103 96 109 94'], a, lt);
    // Right iris outer ring
    pp(g, ['M 99 86 C 99 82 107 82 107 86 C 107 90 99 90 99 86 Z'], a, lt);
    // Right pupil
    fe(g, 'circle', { cx: 104, cy: 87, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Right iris ring
    fe(g, 'circle', { cx: 104, cy: 87, r: 4.2, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': '0.5' }, a);
    // Right eyelid crease
    pp(g, ['M 91 82 C 95 77 101 75 107 76 C 111 77 114 79 115 81'], a, lt);

    // Thick dark eyebrows — Bruno's defining feature (doubled strokes)
    pp(g, ['M 62 80 C 66 76 72 74 78 74 C 82 74 86 76 88 78'], a);
    pp(g, ['M 63 82 C 67 78 73 76 79 76 C 83 76 87 78 89 80'], a);
    pp(g, ['M 90 76 C 94 73 100 72 106 72 C 110 73 113 75 115 78'], a);
    pp(g, ['M 91 78 C 95 75 101 74 107 74 C 111 75 114 77 116 80'], a);
    // Eyebrow hair texture
    pps(g, [
      'M 64 80 C 66 78 68 77 70 76', 'M 72 76 C 74 75 76 74 78 74',
      'M 92 76 C 94 75 96 74 98 73', 'M 102 73 C 104 73 106 73 108 74'
    ], a, 0.6, a ? HL : '#3E2C20');

    // Nose — prominent, long, straight bridge with bulbous tip
    pp(g, ['M 89 82 C 88 88 88 94 87 100 C 87 104 86 108 86 112'], a);
    // Nose bridge left shadow
    pp(g, ['M 86 84 C 85 90 85 96 84 102'], a, lt);
    // Nose tip and nostrils
    pp(g, [
      'M 80 114 C 82 118 86 120 90 120 C 94 118 96 116 98 114',
      'M 82 116 C 84 114 86 112 86 112',
      'M 96 114 C 94 112 92 110 90 110'
    ], a);
    // Nostril openings (small curves)
    pp(g, ['M 83 116 C 84 118 86 118 87 116', 'M 93 114 C 94 116 96 116 97 114'], a, lt);

    // Mouth — slight smirk/smile, looking amused
    pp(g, [
      'M 72 132 C 76 130 80 128 86 128 C 90 128 94 128 98 130 C 102 132 104 134 104 134'
    ], a);
    // Upper lip — Cupid's bow
    pp(g, [
      'M 74 132 C 78 130 82 128 86 129 C 88 128 90 128 92 129 C 96 130 100 132 104 134'
    ], a);
    // Lower lip — fuller
    pp(g, [
      'M 74 134 C 78 138 82 140 88 140 C 94 140 98 138 104 134'
    ], a);
    // Lip line
    pp(g, ['M 76 133 C 80 132 84 131 88 131 C 92 131 96 132 100 133'], a, lt);
    // Chin crease
    pp(g, ['M 80 148 C 84 150 88 152 92 150'], a, lt);
    // Chin definition
    pp(g, ['M 82 152 C 85 155 88 156 91 155'], a, lt);

    // Nasolabial folds — deeper lines framing mouth
    pp(g, ['M 78 112 C 76 118 74 124 72 132'], a, lt);
    pp(g, ['M 98 110 C 100 116 102 122 104 132'], a, lt);
    // Forehead lines (faint)
    pp(g, ['M 68 64 C 76 62 84 62 92 64', 'M 70 68 C 78 66 86 66 94 68'], a, lt);

    // === MIGUEL FACE ===
    // Left eye — partially closed, looking down at toy
    pp(g, [
      'M 200 106 C 202 102 206 100 210 100 C 214 100 216 102 218 106 C 218 110 216 114 212 116 C 208 116 202 114 200 110 C 200 108 200 107 200 106 Z'
    ], a);
    // Left eye upper lid (heavy, drooping — looking down)
    pp(g, ['M 199 106 C 202 101 207 99 212 99 C 216 100 219 103 220 106'], a);
    // Left eye lower lid
    pp(g, ['M 200 110 C 204 114 210 116 216 114'], a, lt);
    // Left pupil — positioned very low (looking down)
    fe(g, 'circle', { cx: 209, cy: 111, r: 2.6, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 209, cy: 111, r: 3.8, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': '0.4' }, a);
    // Left eyelid crease
    pp(g, ['M 198 100 C 204 96 210 94 216 96 C 220 97 222 99 222 100'], a, lt);

    // Right eye
    pp(g, [
      'M 224 104 C 226 100 230 98 234 98 C 238 98 240 100 242 104 C 242 108 240 112 236 114 C 232 114 226 112 224 108 C 224 106 224 105 224 104 Z'
    ], a);
    // Right eye upper lid
    pp(g, ['M 223 104 C 226 99 231 97 236 97 C 240 98 243 101 244 104'], a);
    // Right eye lower lid
    pp(g, ['M 224 108 C 228 112 234 114 240 112'], a, lt);
    // Right pupil
    fe(g, 'circle', { cx: 233, cy: 109, r: 2.6, fill: a ? HL : '#3E2518' }, a);
    fe(g, 'circle', { cx: 233, cy: 109, r: 3.8, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': '0.4' }, a);
    // Right eyelid crease
    pp(g, ['M 222 98 C 228 94 234 92 240 94 C 244 95 246 97 246 98'], a, lt);

    // Eyebrows — child, softer, natural
    pp(g, ['M 198 96 C 204 92 210 90 216 92 C 218 93 220 94 222 96'], a);
    pp(g, ['M 224 94 C 230 90 236 88 242 90 C 244 91 246 93 246 96'], a);
    // Eyebrow hair texture (light)
    pps(g, [
      'M 202 94 C 206 92 210 91 214 92',
      'M 228 92 C 232 90 236 89 240 90'
    ], a, 0.5, a ? HL : '#5D4037');

    // Nose — small upturned child nose
    pp(g, ['M 216 100 C 215 106 214 112 213 118'], a);
    pp(g, ['M 210 120 C 213 124 217 126 221 124 C 223 122 224 120 224 118'], a);
    // Nostril hints
    pp(g, ['M 212 122 C 213 124 215 124 216 122', 'M 220 120 C 221 122 223 122 224 120'], a, lt);
    // Nose bridge subtle
    pp(g, ['M 215 98 C 215 104 214 110 213 116'], a, lt);

    // Mouth — slightly open, concentrating
    pp(g, ['M 206 138 C 210 136 214 134 218 134 C 222 134 226 136 230 138'], a);
    // Upper lip detail
    pp(g, ['M 208 137 C 212 135 216 134 218 134 C 220 134 224 135 228 137'], a);
    // Lower lip
    pp(g, ['M 208 140 C 212 144 218 146 224 144 C 228 142 230 140 230 138'], a);
    // Lip parting (mouth slightly open)
    pp(g, ['M 210 138 C 214 139 218 140 222 139 C 226 138 228 137 228 137'], a, lt);
    // Chin
    pp(g, ['M 212 154 C 215 156 218 157 221 156'], a, lt);
    // Miguel cheek contour
    pp(g, ['M 194 118 C 192 124 192 130 194 136'], a, lt);
    pp(g, ['M 240 116 C 242 122 242 128 240 134'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair — Bruno buzzcut detail + Miguel's dark brown hair
  // =====================================================================
  (g, a) => {
    // === BRUNO HAIR — buzzcut / very short ===
    // Hairline contour — receding slightly at temples
    pp(g, [
      'M 58 90 C 56 78 60 64 66 54 C 72 46 80 42 88 42 C 96 42 104 46 110 54 C 116 64 118 78 118 90'
    ], a);
    // Hairline detail — widow's peak area
    pp(g, ['M 72 50 C 78 46 84 44 90 46 C 96 44 100 46 104 50'], a, lt);
    // Temple recession lines
    pp(g, ['M 60 68 C 62 62 66 56 72 52', 'M 114 66 C 112 60 108 54 104 50'], a, lt);

    // Buzzcut stippling — dense micro dots across entire scalp
    const buzzRows = [
      // Top crown
      [[78,44],[82,42],[86,42],[90,44],[94,44]],
      [[74,48],[78,46],[82,44],[86,44],[90,44],[94,46],[98,48],[102,48]],
      [[68,52],[72,50],[76,48],[80,46],[84,46],[88,46],[92,48],[96,50],[100,52],[106,54]],
      [[64,58],[68,56],[72,54],[76,52],[80,50],[84,48],[88,48],[92,50],[96,52],[100,54],[104,56],[108,58],[112,60]],
      [[60,64],[64,62],[68,60],[72,58],[76,56],[80,54],[84,52],[88,52],[92,54],[96,56],[100,58],[104,60],[108,62],[112,64],[116,68]],
      [[58,72],[62,70],[66,68],[70,66],[74,64],[78,62],[82,58],[86,56],[90,58],[94,62],[98,64],[102,66],[106,68],[110,70],[114,72]],
      [[56,80],[60,78],[64,76],[68,74],[72,72],[76,68],[80,64],[84,62],[88,62],[92,64],[96,68],[100,72],[104,74],[108,76],[112,78],[116,80]],
      [[56,86],[60,84],[64,82],[68,80],[72,76],[76,74],[80,70],[84,66],[88,66],[92,70],[96,74],[100,76],[104,80],[108,82],[112,84],[116,86]],
      // Side fill
      [[58,88],[62,86],[66,84],[70,80],[74,78]],
      [[112,80],[114,84],[116,88]]
    ];
    buzzRows.forEach(row => {
      row.forEach(([cx, cy]) => {
        fe(g, 'circle', { cx, cy, r: 0.65, fill: a ? HL : '#3E2C20' }, a);
      });
    });
    // Additional scattered dots for density
    const extraBuzz = [
      [80,48],[86,48],[76,54],[84,50],[92,50],[70,60],[78,58],[86,54],[94,56],[102,58],
      [62,66],[74,62],[82,56],[90,56],[98,60],[106,62],[114,66],
      [58,76],[66,72],[78,66],[86,60],[94,60],[102,64],[110,72],
      [60,82],[68,78],[76,72],[84,64],[92,66],[100,70],[108,78],
      [62,88],[66,86],[70,82],[78,76],[86,68],[94,68],[102,74],[110,82]
    ];
    extraBuzz.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.45, fill: a ? HL : '#4A3628' }, a);
    });

    // === MIGUEL HAIR — dark brown, short, textured ===
    // Hair mass outer contour
    pp(g, [
      'M 192 104 C 190 90 194 76 202 68 C 208 64 216 62 224 64 C 232 66 240 72 246 82 C 250 90 252 100 250 108'
    ], a);
    // Hair inner volume line
    pp(g, [
      'M 194 100 C 194 88 198 76 206 70 C 212 66 220 64 228 68 C 234 72 240 80 244 88 C 246 94 248 100 248 106'
    ], a);
    // Hair part line (slightly off-center left)
    pp(g, ['M 210 64 C 212 68 214 72 216 78'], a, lt);
    // Hair strands — flowing texture across the top
    pp(g, [
      'M 204 66 C 210 62 218 62 226 66',
      'M 200 72 C 208 66 218 64 228 68',
      'M 196 80 C 204 72 216 70 228 74',
      'M 194 88 C 200 80 210 76 224 78',
      'M 192 96 C 198 86 208 82 220 84'
    ], a, lt);
    // Right side hair strands
    pp(g, [
      'M 238 72 C 242 78 244 84 246 92',
      'M 234 68 C 240 74 244 82 246 90',
      'M 230 66 C 236 72 242 80 246 88'
    ], a, lt);
    // Fringe/bangs falling over forehead
    pp(g, [
      'M 200 78 C 204 74 208 72 212 74',
      'M 206 76 C 210 72 214 70 218 72',
      'M 214 70 C 218 68 222 68 226 72'
    ], a, lt);
    // Hair tuft at crown
    pp(g, ['M 212 62 C 216 60 220 60 224 62', 'M 208 64 C 214 60 220 60 226 64'], a);

    // Sideburn hints
    pp(g, ['M 192 104 C 190 108 190 112 190 116'], a, lt);
    pp(g, ['M 250 102 C 252 106 252 110 252 114'], a, lt);
  },

  // =====================================================================
  // Layer 4: Clothing with folds — Bruno's jacket, Miguel's sweater
  // =====================================================================
  (g, a) => {
    // === BRUNO JACKET — dark navy zip-up ===
    // Standing collar with fold
    pp(g, [
      'M 70 174 C 68 170 62 168 58 172 C 54 178 56 184 62 186 C 68 188 76 190 86 192',
      'M 102 174 C 104 170 110 168 114 172 C 118 178 116 184 110 186 C 104 188 96 190 86 192'
    ], a);
    // Collar inner fold
    pp(g, [
      'M 64 178 C 68 176 74 176 78 178',
      'M 94 178 C 98 176 104 176 108 178'
    ], a, lt);
    // Zipper center line
    pp(g, ['M 86 192 L 86 340'], a);
    // Zipper teeth — alternating dashes
    for (let y = 198; y < 336; y += 6) {
      pp(g, [`M 84 ${y} L 88 ${y}`], a, lt);
    }
    // Zipper pull at top (small metal piece)
    pp(g, ['M 83 192 L 83 200 L 89 200 L 89 192 Z'], a);
    pp(g, ['M 86 200 L 86 204'], a, lt);

    // Left shoulder seam
    pp(g, ['M 56 186 C 48 190 42 196 38 204'], a, lt);
    // Right shoulder seam
    pp(g, ['M 116 186 C 124 190 130 196 134 204'], a, lt);

    // Left orange shoulder patch
    pp(g, ['M 38 206 L 56 202 L 56 218 L 38 222 Z'], a);
    // Right orange shoulder patch
    pp(g, ['M 134 206 L 116 202 L 116 218 L 134 222 Z'], a);

    // PESSOAL logo rectangle (left chest)
    pp(g, ['M 54 228 L 82 228 L 82 250 L 54 250 Z'], a);
    // Logo text hints
    pp(g, [
      'M 58 236 L 60 236 L 60 240 L 58 240 Z',
      'M 62 236 L 64 236 L 64 240 L 62 240',
      'M 66 236 L 68 236',
      'M 66 238 L 68 238',
      'M 70 236 L 72 236 L 72 240 L 70 240'
    ], a, lt);
    // Three colored dots under logo
    fe(g, 'circle', { cx: 62, cy: 248, r: 1.8, fill: a ? HL : '#FF6F00' }, a);
    fe(g, 'circle', { cx: 68, cy: 248, r: 1.8, fill: a ? HL : '#4CAF50' }, a);
    fe(g, 'circle', { cx: 74, cy: 248, r: 1.8, fill: a ? HL : '#2196F3' }, a);

    // Jacket fabric wrinkle lines — left side
    pp(g, [
      'M 40 210 C 38 220 36 232 36 244',
      'M 44 218 C 42 228 40 240 42 252',
      'M 50 200 C 46 216 44 232 46 248',
      'M 36 260 C 38 272 40 284 38 296',
      'M 50 262 C 48 274 46 286 48 298'
    ], a, lt);
    // Jacket fabric wrinkle lines — right side
    pp(g, [
      'M 132 210 C 134 220 136 232 136 244',
      'M 128 218 C 130 228 132 240 130 252',
      'M 122 200 C 126 216 128 232 126 248',
      'M 136 260 C 134 272 132 284 134 296',
      'M 122 262 C 124 274 126 286 124 298'
    ], a, lt);
    // Pocket line hints
    pp(g, [
      'M 44 280 C 52 284 62 286 76 286',
      'M 96 286 C 108 284 118 282 128 278'
    ], a, lt);

    // === MIGUEL SWEATER — navy crew neck ===
    // Crew neckline
    pp(g, [
      'M 202 174 C 206 178 212 180 218 182 C 224 180 228 178 234 174'
    ], a);
    // Neckline ribbing
    pp(g, [
      'M 204 176 C 210 180 216 182 220 182 C 226 180 230 178 236 176'
    ], a, lt);
    // Ribbing texture at neckline
    pp(g, [
      'M 206 175 L 206 178', 'M 210 176 L 210 180', 'M 214 177 L 214 181',
      'M 218 178 L 218 182', 'M 222 177 L 222 181', 'M 226 176 L 226 180',
      'M 230 175 L 230 178'
    ], a, lt);

    // "95" text outline area on chest
    const t95 = ce('text', {
      x: 200, y: 224,
      fill: a ? HL : P,
      'font-size': '18', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '1'
    });
    t95.textContent = '95';
    if (a) t95.classList.add('active-element');
    g.appendChild(t95);
    // "YEARS" small text below
    const tyr = ce('text', {
      x: 205, y: 234,
      fill: a ? HL : LP,
      'font-size': '5', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '1'
    });
    tyr.textContent = 'YEARS';
    if (a) tyr.classList.add('active-element');
    g.appendChild(tyr);

    // Sweater wrinkle lines
    pp(g, [
      'M 172 198 C 170 210 168 222 168 234',
      'M 176 204 C 174 216 172 228 174 240',
      'M 260 196 C 262 208 264 220 264 232',
      'M 256 202 C 258 214 260 226 258 238'
    ], a, lt);
    // Sweater body folds (subtle)
    pp(g, [
      'M 186 240 C 190 250 194 260 192 272',
      'M 246 238 C 242 248 238 258 240 270',
      'M 200 250 C 204 262 208 274 206 286',
      'M 232 248 C 228 260 224 272 226 284'
    ], a, lt);
    // Sleeve cuffs (Miguel's arms extending down)
    pp(g, [
      'M 172 240 C 170 244 168 248 168 252',
      'M 180 244 C 178 248 176 252 176 256',
      'M 256 238 C 258 242 260 246 260 250',
      'M 248 242 C 250 246 252 250 252 254'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands and objects — Bruno's gesturing hand, Miguel's hands
  // holding toy, toy detail
  // =====================================================================
  (g, a) => {
    // === BRUNO LEFT ARM & GESTURING HAND ===
    // Upper arm going down from shoulder
    pp(g, [
      'M 34 206 C 28 218 22 234 18 252 C 16 266 16 278 20 286',
      'M 42 210 C 36 224 30 240 26 256 C 24 268 24 280 28 288'
    ], a);
    // Hand — palm
    pp(g, [
      'M 20 286 C 22 290 26 294 32 296 C 38 296 44 292 48 286 C 52 280 54 272 54 264'
    ], a);
    // Thumb — extended slightly
    pp(g, [
      'M 34 292 C 36 288 40 282 44 278 C 46 276 48 276 48 278 C 48 282 46 288 42 292'
    ], a);
    // Index finger — slightly curled
    pp(g, [
      'M 26 286 C 22 280 18 274 16 268 C 14 264 16 260 20 260 C 24 262 26 266 26 272'
    ], a);
    // Middle finger
    pp(g, [
      'M 24 288 C 20 282 14 274 12 268 C 10 264 12 260 16 260 C 20 262 22 266 22 274'
    ], a);
    // Ring finger
    pp(g, [
      'M 22 290 C 18 286 14 280 12 274 C 10 270 12 266 16 266 C 18 268 20 272 20 278'
    ], a);
    // Pinky
    pp(g, [
      'M 22 292 C 18 290 16 286 14 280 C 12 276 14 274 18 274 C 20 276 20 280 20 284'
    ], a);
    // Finger creases
    pp(g, [
      'M 18 264 C 20 266 22 266 24 264',
      'M 14 264 C 16 266 18 266 20 264',
      'M 14 270 C 16 272 18 272 18 270'
    ], a, lt);
    // Knuckle lines
    pp(g, ['M 22 282 C 24 284 26 284 28 282'], a, lt);

    // === MIGUEL — HANDS HOLDING TOY ===
    // Toy — oval/capsule shape (like a Kinder egg toy)
    pp(g, [
      'M 196 264 C 196 254 204 246 216 246 C 228 246 236 254 236 264 C 236 274 228 280 216 280 C 204 280 196 274 196 264 Z'
    ], a);
    // Toy dividing line
    pp(g, ['M 216 246 L 216 280'], a, lt);
    // Toy surface detail (cross line)
    pp(g, ['M 198 264 L 234 264'], a, lt);
    // Small mechanism detail on toy
    pp(g, ['M 210 252 L 222 252', 'M 210 258 L 222 258'], a, lt);
    // Toy top ridge
    pp(g, ['M 206 248 C 210 246 222 246 226 248'], a, lt);

    // Left hand — wrapping around left side of toy
    // Back of hand
    pp(g, [
      'M 198 258 C 194 254 188 254 186 258 C 184 264 186 270 192 268 L 198 264'
    ], a);
    // Left thumb
    pp(g, [
      'M 200 254 C 198 248 194 244 190 244 C 186 246 186 250 188 254'
    ], a);
    // Left index (wrapped over toy top)
    pp(g, [
      'M 194 256 C 190 250 186 246 184 242 C 182 238 184 236 188 236 C 192 236 194 240 196 248'
    ], a);
    // Left middle finger
    pp(g, [
      'M 192 260 C 188 254 184 248 182 244 C 180 240 182 238 186 238 C 190 238 192 242 194 250'
    ], a);
    // Left ring finger
    pp(g, [
      'M 190 264 C 186 258 184 252 182 248 C 180 244 182 242 186 242'
    ], a);
    // Left pinky
    pp(g, [
      'M 190 268 C 186 264 184 258 184 254 C 184 250 186 248 188 250'
    ], a);
    // Finger creases left hand
    pp(g, [
      'M 186 240 C 188 242 190 242 192 240',
      'M 184 244 C 186 246 188 246 190 244'
    ], a, lt);

    // Right hand — wrapping around right side of toy
    pp(g, [
      'M 234 256 C 238 252 244 252 246 256 C 248 262 246 268 240 266 L 234 262'
    ], a);
    // Right thumb
    pp(g, [
      'M 232 252 C 234 246 238 242 242 242 C 246 244 246 248 244 252'
    ], a);
    // Right index
    pp(g, [
      'M 238 254 C 242 248 246 244 248 240 C 250 236 248 234 244 234 C 240 234 238 238 236 246'
    ], a);
    // Right middle
    pp(g, [
      'M 240 258 C 244 252 248 246 250 242 C 252 238 250 236 246 236 C 242 236 240 240 238 248'
    ], a);
    // Right ring
    pp(g, [
      'M 242 262 C 246 256 248 250 250 246 C 252 242 250 240 246 240'
    ], a);
    // Right pinky
    pp(g, [
      'M 242 266 C 246 262 248 256 248 252 C 248 248 246 246 244 248'
    ], a);
    // Finger creases right hand
    pp(g, [
      'M 246 238 C 244 240 242 240 240 238',
      'M 248 242 C 246 244 244 244 242 242'
    ], a, lt);

    // Sleeve edges around wrists
    pp(g, [
      'M 176 252 C 180 250 184 250 188 252 C 190 254 192 256 196 256',
      'M 256 250 C 252 248 248 248 244 250 C 242 252 240 254 236 254'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background — cafe interior, table, objects, third person
  // =====================================================================
  (g, a) => {
    // === TABLE / COUNTER ===
    // Table surface — dark, reflective
    pp(g, ['M 0 338 L 360 338'], a);
    // Table front edge — thickness
    pp(g, ['M 0 338 L 0 350 L 360 350 L 360 338'], a);
    // Table rounded corners
    pp(g, ['M 0 344 C 4 348 8 350 12 350', 'M 348 350 C 352 350 356 348 360 344'], a, lt);

    // === BLUE DISC ON TABLE ===
    pp(g, [
      'M 156 332 C 156 324 166 316 178 316 C 190 316 200 324 200 332 C 200 336 190 340 178 340 C 166 340 156 336 156 332 Z'
    ], a);
    // Disc surface detail
    pp(g, ['M 164 328 C 170 324 178 322 186 324 C 192 326 196 330 196 332'], a, lt);

    // === WHITE PAPER CUP ===
    pp(g, [
      'M 244 318 L 242 338',
      'M 262 318 L 260 338',
      'M 242 338 C 246 342 256 342 260 338',
      'M 244 318 C 248 316 256 316 262 318'
    ], a);
    // Cup rim
    pp(g, ['M 242 318 C 246 316 254 316 262 318'], a);
    // Cup seam
    pp(g, ['M 253 318 L 251 338'], a, lt);
    // Cup logo hint
    pp(g, ['M 248 324 C 250 322 254 322 256 324'], a, lt);

    // === NAPKIN/PAPER ===
    pp(g, ['M 270 328 L 300 328 L 302 340 L 268 340 Z'], a, lt);
    pp(g, ['M 282 328 L 284 340'], a, lt);
    pp(g, ['M 274 334 L 296 334'], a, lt);

    // === BROWN SAUCE CUP (bottom left) ===
    pp(g, [
      'M 8 328 C 8 322 14 318 22 318 C 30 318 36 322 36 328 C 36 334 30 338 22 338 C 14 338 8 334 8 328 Z'
    ], a, lt);

    // === THIRD PERSON DETAIL ===
    // Torso outline with more detail
    pp(g, [
      'M 294 54 C 302 48 316 44 328 46 C 340 50 350 60 354 76 L 356 220',
      'M 288 74 C 286 84 286 100 286 120 L 286 220'
    ], a, lt);
    // Neckline — crew neck
    pp(g, ['M 306 54 C 312 50 320 50 326 54'], a, lt);
    pp(g, ['M 308 56 C 314 52 322 52 328 56'], a, lt);
    // Arms/hands gesturing
    pp(g, [
      'M 350 120 C 348 140 346 158 342 170 C 340 176 338 182 336 190 C 334 198 336 206 340 212',
      'M 290 124 C 292 140 294 158 296 170 C 298 176 300 182 302 190 C 304 198 302 206 298 212'
    ], a, lt);
    // Hand shapes (third person gesturing)
    pp(g, [
      'M 340 212 C 344 218 348 222 346 228 C 344 232 340 230 338 226',
      'M 298 212 C 294 218 290 222 292 228 C 294 232 298 230 300 226'
    ], a, lt);
    // Third person shirt pattern (dots/print)
    const shirtDots = [
      [310,72],[320,68],[330,72],[300,84],[312,80],[324,78],[336,82],
      [296,96],[308,92],[320,90],[332,94],[344,98],
      [294,110],[306,106],[318,104],[330,108],[346,112],
      [292,124],[304,120],[316,118],[328,122],[348,126]
    ];
    shirtDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 1.2, fill: 'none', stroke: a ? HL : LP, 'stroke-width': '0.4' }, a);
    });

    // === BACKGROUND — cafe interior ===
    // Wooden wall panel lines
    pp(g, [
      'M 0 0 L 0 338', 'M 140 0 L 140 338',
      'M 280 0 L 280 58', 'M 360 0 L 360 338'
    ], a, lt);
    // Panel horizontal divisions
    pp(g, ['M 0 170 L 140 170', 'M 280 38 L 360 38'], a, lt);
    // Back wall darkness (corridor opening between figures)
    pp(g, [
      'M 142 0 L 142 170 L 278 170 L 278 0'
    ], a, lt);
    // Ceiling fluorescent light fixture
    pp(g, [
      'M 130 8 L 130 20 L 232 20 L 232 8',
      'M 132 14 L 230 14'
    ], a, lt);
    // Light cord
    pp(g, ['M 180 0 L 180 8'], a, lt);
    // Colored artwork/poster hint on far left wall
    pp(g, ['M 4 80 L 28 80 L 28 120 L 4 120 Z'], a, lt);
  },

  // =====================================================================
  // Layer 7: Gradient skin and clothing colors — photorealistic fills
  // =====================================================================
  (g, a, defs) => {
    // === BRUNO SKIN — gradient face fill ===
    const brunoSkinGrad = gd(defs, 'r', [
      ['0%', '#F0C8A0', 1], ['40%', '#EDBE8C', 1], ['70%', '#E0AD78', 1], ['100%', '#D4A06A', 1]
    ], { cx: 86, cy: 100, r: 60 });
    fl(g,
      'M 57 94 C 55 78 58 62 64 52 C 70 44 78 40 86 40 C 94 40 102 44 108 52 C 114 62 117 78 117 94 C 117 104 116 114 112 122 C 109 130 104 138 98 144 C 94 148 90 152 86 154 C 82 152 78 148 74 144 C 68 138 63 130 60 122 C 57 114 55 104 57 94 Z',
      brunoSkinGrad, a);
    // Bruno ears
    feo(g, 'ellipse', { cx: 49, cy: 98, rx: 7, ry: 11, fill: '#DEB080' }, 0.9, false);
    feo(g, 'ellipse', { cx: 123, cy: 96, rx: 7, ry: 11, fill: '#DEB080' }, 0.9, false);
    // Ear inner shadow
    feo(g, 'ellipse', { cx: 49, cy: 99, rx: 4, ry: 7, fill: '#C89868' }, 0.5, false);
    feo(g, 'ellipse', { cx: 123, cy: 97, rx: 4, ry: 7, fill: '#C89868' }, 0.5, false);
    // Bruno neck skin gradient
    const brunoNeckGrad = gd(defs, 'l', [
      ['0%', '#DEB07A', 1], ['100%', '#C89868', 1]
    ], { x1: 76, y1: 154, x2: 98, y2: 174 });
    fl(g,
      'M 76 152 C 78 156 80 164 78 174 L 98 174 C 96 164 94 156 96 152 Z',
      brunoNeckGrad, false);

    // Bruno eye whites with subtle gradient
    const eyeWhiteGrad = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1], ['80%', '#F0EDE8', 1], ['100%', '#E8E2DA', 1]
    ], { cx: 76, cy: 89, r: 10 });
    fl(g, 'M 65 90 C 67 85 70 83 74 82 C 78 82 82 83 84 86 C 86 89 85 93 82 96 C 79 98 73 98 69 96 C 66 94 65 92 65 90 Z', eyeWhiteGrad, false);
    const eyeWhiteGrad2 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1], ['80%', '#F0EDE8', 1], ['100%', '#E8E2DA', 1]
    ], { cx: 103, cy: 87, r: 10 });
    fl(g, 'M 92 88 C 94 83 97 81 101 80 C 105 80 109 81 111 84 C 113 87 112 91 109 94 C 106 96 100 96 96 94 C 93 92 92 90 92 88 Z', eyeWhiteGrad2, false);

    // Bruno iris fills
    fe(g, 'circle', { cx: 77, cy: 89, r: 4.2, fill: '#5D4037' }, false);
    fe(g, 'circle', { cx: 77, cy: 89, r: 3, fill: '#2C1810' }, false);
    fe(g, 'circle', { cx: 104, cy: 87, r: 4.2, fill: '#5D4037' }, false);
    fe(g, 'circle', { cx: 104, cy: 87, r: 3, fill: '#2C1810' }, false);

    // === BRUNO JACKET — dark navy gradient ===
    const jacketGrad = gd(defs, 'l', [
      ['0%', '#1E2D3D', 1], ['30%', '#1B2632', 1], ['70%', '#1B2632', 1], ['100%', '#0F1B26', 1]
    ], { x1: 32, y1: 192, x2: 142, y2: 340 });
    fl(g,
      'M 32 208 C 36 194 52 180 76 174 L 98 174 C 120 180 136 194 140 208 L 142 340 L 30 340 Z',
      jacketGrad, a);
    // Collar fill — slightly lighter
    fl(g,
      'M 70 174 C 68 170 62 168 58 172 C 54 178 56 184 62 186 C 68 188 76 190 86 192 C 96 190 104 188 110 186 C 116 184 118 178 114 172 C 110 168 104 170 102 174 Z',
      '#263842', false);
    // Orange patches
    fl(g, 'M 38 206 L 56 202 L 56 218 L 38 222 Z', '#FF6F00', false);
    fl(g, 'M 134 206 L 116 202 L 116 218 L 134 222 Z', '#FF6F00', false);
    // Zipper strip fill
    fe(g, 'rect', { x: 84, y: 192, width: 4, height: 148, fill: '#546E7A' }, false);
    // Zipper pull
    fe(g, 'rect', { x: 83, y: 192, width: 6, height: 8, rx: 1, fill: '#FF6F00' }, false);

    // Bruno gesturing hand skin
    const handSkinGrad = gd(defs, 'r', [
      ['0%', '#F0C8A0', 1], ['100%', '#DEB080', 1]
    ], { cx: 26, cy: 278, r: 24 });
    fl(g,
      'M 20 286 C 16 274 14 264 16 256 C 18 248 24 252 30 264 C 34 274 38 284 42 292 C 38 296 30 296 26 290 Z',
      handSkinGrad, false);
    // Finger skin fills
    fl(g, 'M 16 268 C 14 264 16 260 20 260 C 24 262 26 266 26 272 L 22 280 C 18 276 16 272 16 268 Z', '#EDBE8C', false);
    fl(g, 'M 12 268 C 10 264 12 260 16 260 C 20 262 22 266 22 274 L 18 282 C 14 278 12 272 12 268 Z', '#EDBE8C', false);

    // === MIGUEL SKIN — face gradient ===
    const miguelSkinGrad = gd(defs, 'r', [
      ['0%', '#FADCC0', 1], ['40%', '#F5D0A9', 1], ['70%', '#F0C498', 1], ['100%', '#E8B888', 1]
    ], { cx: 216, cy: 118, r: 55 });
    fl(g,
      'M 190 108 C 190 90 196 76 206 70 C 212 68 220 68 226 70 C 236 76 242 90 242 108 C 243 120 242 132 236 142 C 232 148 226 156 218 160 C 210 156 204 148 200 142 C 194 132 190 120 190 108 Z',
      miguelSkinGrad, a);
    // Miguel ears
    feo(g, 'ellipse', { cx: 183, cy: 116, rx: 6, ry: 11, fill: '#F0C8A0' }, 0.9, false);
    feo(g, 'ellipse', { cx: 249, cy: 114, rx: 6, ry: 11, fill: '#F0C8A0' }, 0.9, false);
    // Ear inner
    feo(g, 'ellipse', { cx: 183, cy: 117, rx: 3.5, ry: 7, fill: '#DEB080' }, 0.5, false);
    feo(g, 'ellipse', { cx: 249, cy: 115, rx: 3.5, ry: 7, fill: '#DEB080' }, 0.5, false);
    // Miguel neck
    fl(g,
      'M 208 158 C 210 162 210 168 208 172 L 228 172 C 226 168 226 162 228 158 Z',
      '#F0C8A0', false);

    // Miguel eye whites
    const mEyeW1 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1], ['80%', '#F5F0EA', 1], ['100%', '#EDE6DC', 1]
    ], { cx: 209, cy: 108, r: 10 });
    fl(g, 'M 200 106 C 202 102 206 100 210 100 C 214 100 216 102 218 106 C 218 110 216 114 212 116 C 208 116 202 114 200 110 C 200 108 200 107 200 106 Z', mEyeW1, false);
    const mEyeW2 = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1], ['80%', '#F5F0EA', 1], ['100%', '#EDE6DC', 1]
    ], { cx: 233, cy: 106, r: 10 });
    fl(g, 'M 224 104 C 226 100 230 98 234 98 C 238 98 240 100 242 104 C 242 108 240 112 236 114 C 232 114 226 112 224 108 C 224 106 224 105 224 104 Z', mEyeW2, false);

    // Miguel iris fills
    fe(g, 'circle', { cx: 209, cy: 111, r: 3.8, fill: '#5D4037' }, false);
    fe(g, 'circle', { cx: 209, cy: 111, r: 2.6, fill: '#3E2518' }, false);
    fe(g, 'circle', { cx: 233, cy: 109, r: 3.8, fill: '#5D4037' }, false);
    fe(g, 'circle', { cx: 233, cy: 109, r: 2.6, fill: '#3E2518' }, false);

    // === MIGUEL SWEATER — navy gradient ===
    const sweaterGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1], ['40%', '#1A237E', 1], ['70%', '#151D6B', 1], ['100%', '#0D1552', 1]
    ], { x1: 164, y1: 180, x2: 268, y2: 340 });
    fl(g,
      'M 166 210 C 168 196 180 180 208 172 L 228 172 C 252 180 264 196 266 210 L 268 340 L 164 340 Z',
      sweaterGrad, a);

    // Miguel hand skin
    fl(g,
      'M 198 256 C 194 252 188 252 186 256 C 184 262 186 268 192 266 L 198 262 Z',
      '#F5D0A9', false);
    fl(g,
      'M 234 254 C 238 250 244 250 246 254 C 248 260 246 266 240 264 L 234 260 Z',
      '#F5D0A9', false);
    // Finger fills for Miguel
    feo(g, 'ellipse', { cx: 188, cy: 244, rx: 6, ry: 8, fill: '#F5D0A9' }, 0.7, false);
    feo(g, 'ellipse', { cx: 244, cy: 242, rx: 6, ry: 8, fill: '#F5D0A9' }, 0.7, false);

    // === THIRD PERSON — brown shirt ===
    const thirdGrad = gd(defs, 'l', [
      ['0%', '#8D6E63', 1], ['50%', '#795548', 1], ['100%', '#6D4C41', 1]
    ], { x1: 286, y1: 50, x2: 356, y2: 220 });
    fl(g,
      'M 290 74 C 292 56 306 46 328 46 C 342 50 352 60 354 76 L 356 220 L 286 220 Z',
      thirdGrad, false);
    // Third person skin (hands)
    feo(g, 'ellipse', { cx: 340, cy: 220, rx: 8, ry: 10, fill: '#D4A06A' }, 0.6, false);
    feo(g, 'ellipse', { cx: 298, cy: 220, rx: 8, ry: 10, fill: '#D4A06A' }, 0.6, false);
  },

  // =====================================================================
  // Layer 8: Scene colors — table, objects, hair, background, ambient
  // =====================================================================
  (g, a, defs) => {
    // === BACKGROUND ===
    // Warm ambient fill
    const bgGrad = gd(defs, 'l', [
      ['0%', '#FFF8E1', 0.15], ['50%', '#F5F0E0', 0.1], ['100%', '#E8E0D0', 0.15]
    ], { x1: 0, y1: 0, x2: 360, y2: 340 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 338, fill: bgGrad }, false);

    // Wooden wall panels — left panel
    const woodGrad1 = gd(defs, 'l', [
      ['0%', '#D7CCC8', 0.25], ['50%', '#BCAAA4', 0.2], ['100%', '#D7CCC8', 0.25]
    ], { x1: 0, y1: 0, x2: 140, y2: 0 });
    fe(g, 'rect', { x: 0, y: 0, width: 140, height: 338, fill: woodGrad1 }, false);

    // Background corridor (darker area between/behind figures)
    const corridorGrad = gd(defs, 'l', [
      ['0%', '#5D4037', 0.3], ['50%', '#4E342E', 0.4], ['100%', '#5D4037', 0.3]
    ], { x1: 142, y1: 0, x2: 278, y2: 170 });
    fe(g, 'rect', { x: 142, y: 0, width: 136, height: 170, fill: corridorGrad }, false);

    // Right panel behind third person
    const woodGrad2 = gd(defs, 'l', [
      ['0%', '#D7CCC8', 0.15], ['100%', '#BCAAA4', 0.15]
    ], { x1: 280, y1: 0, x2: 360, y2: 0 });
    fe(g, 'rect', { x: 280, y: 0, width: 80, height: 338, fill: woodGrad2 }, false);

    // Wood grain texture lines
    pps(g, [
      'M 20 20 C 22 60 20 100 22 140',
      'M 70 10 C 68 50 70 90 68 130',
      'M 110 30 C 112 70 110 110 112 150',
      'M 310 20 C 308 60 310 100 308 140',
      'M 340 40 C 342 80 340 120 342 160'
    ], false, 0.3, '#A1887F');

    // Ceiling fluorescent light glow
    const lightGlow = gd(defs, 'r', [
      ['0%', '#FFFDE7', 0.35], ['40%', '#FFF9C4', 0.2], ['100%', '#FFF9C4', 0]
    ], { cx: 180, cy: 14, r: 80 });
    fe(g, 'ellipse', { cx: 180, cy: 14, rx: 60, ry: 20, fill: lightGlow }, false);
    // Light fixture fill
    fe(g, 'rect', { x: 132, y: 6, width: 96, height: 12, rx: 2, fill: '#FFF9C4', opacity: '0.3' }, false);

    // === TABLE ===
    const tableGrad = gd(defs, 'l', [
      ['0%', '#37474F', 1], ['50%', '#2C3E4A', 1], ['100%', '#263238', 1]
    ], { x1: 0, y1: 338, x2: 360, y2: 450 });
    fe(g, 'rect', { x: 0, y: 338, width: 360, height: 112, fill: tableGrad }, false);
    // Table surface highlight strip
    const tableHighlight = gd(defs, 'l', [
      ['0%', '#455A64', 0.3], ['50%', '#546E7A', 0.5], ['100%', '#455A64', 0.3]
    ], { x1: 0, y1: 336, x2: 360, y2: 342 });
    fe(g, 'rect', { x: 0, y: 336, width: 360, height: 4, fill: tableHighlight }, false);

    // === BLUE DISC ON TABLE ===
    const discGrad = gd(defs, 'r', [
      ['0%', '#42A5F5', 1], ['50%', '#1E88E5', 1], ['100%', '#1565C0', 1]
    ], { cx: 176, cy: 326, r: 18 });
    fl(g,
      'M 156 332 C 156 324 166 316 178 316 C 190 316 200 324 200 332 C 200 336 190 340 178 340 C 166 340 156 336 156 332 Z',
      discGrad, a);
    // Disc highlight
    feo(g, 'ellipse', { cx: 174, cy: 322, rx: 6, ry: 4, fill: '#90CAF9' }, 0.5, false);

    // === WHITE CUP ===
    const cupGrad = gd(defs, 'l', [
      ['0%', '#FAFAFA', 1], ['50%', '#F5F5F5', 1], ['100%', '#E0E0E0', 1]
    ], { x1: 242, y1: 318, x2: 262, y2: 338 });
    fl(g,
      'M 244 318 L 242 338 C 246 342 256 342 260 338 L 262 318 Z',
      cupGrad, a);
    // Cup shadow interior
    fo(g, 'M 246 320 C 250 318 256 318 260 320 L 258 322 C 254 320 250 320 246 322 Z', '#BDBDBD', 0.4, false);

    // === TOY ===
    // Blue half
    const toyBlueGrad = gd(defs, 'r', [
      ['0%', '#42A5F5', 1], ['60%', '#1E88E5', 1], ['100%', '#1565C0', 1]
    ], { cx: 206, cy: 262, r: 16 });
    fl(g,
      'M 196 264 C 196 254 204 246 216 246 L 216 280 C 204 280 196 274 196 264 Z',
      toyBlueGrad, a);
    // Red half
    const toyRedGrad = gd(defs, 'r', [
      ['0%', '#EF5350', 1], ['60%', '#E53935', 1], ['100%', '#C62828', 1]
    ], { cx: 226, cy: 262, r: 16 });
    fl(g,
      'M 216 246 C 228 246 236 254 236 264 C 236 274 228 280 216 280 Z',
      toyRedGrad, a);

    // === NAPKIN ===
    fe(g, 'rect', { x: 270, y: 328, width: 30, height: 12, rx: 1, fill: '#FAFAFA' }, false);
    // Napkin shadow
    feo(g, 'rect', { x: 270, y: 336, width: 30, height: 4, rx: 1, fill: '#BDBDBD' }, 0.3, false);

    // === BROWN SAUCE CUP ===
    const sauceGrad = gd(defs, 'r', [
      ['0%', '#FF8F00', 1], ['100%', '#E65100', 1]
    ], { cx: 22, cy: 328, r: 14 });
    fl(g,
      'M 8 328 C 8 322 14 318 22 318 C 30 318 36 322 36 328 C 36 334 30 338 22 338 C 14 338 8 334 8 328 Z',
      sauceGrad, false);

    // === HAIR FILLS ===
    // Bruno buzzcut fill (very dark brown)
    const brunoHairGrad = gd(defs, 'r', [
      ['0%', '#4E342E', 1], ['50%', '#3E2C20', 1], ['100%', '#2E1E14', 1]
    ], { cx: 86, cy: 66, r: 40 });
    fl(g,
      'M 58 90 C 56 78 60 64 66 54 C 72 46 80 42 88 42 C 96 42 104 46 110 54 C 116 64 118 78 118 90 L 116 88 C 116 78 114 68 108 58 C 102 50 94 44 86 44 C 78 44 70 50 66 58 C 62 66 58 78 58 88 Z',
      brunoHairGrad, false);

    // Miguel hair fill (rich dark brown)
    const miguelHairGrad = gd(defs, 'l', [
      ['0%', '#5D4037', 1], ['30%', '#4E342E', 1], ['70%', '#3E2C20', 1], ['100%', '#2E1E14', 1]
    ], { x1: 192, y1: 64, x2: 252, y2: 108 });
    fl(g,
      'M 192 104 C 190 90 194 76 202 68 C 208 64 216 62 224 64 C 232 66 240 72 246 82 C 250 90 252 100 250 108 L 248 104 C 248 94 246 86 242 80 C 236 72 228 68 220 66 C 212 64 204 68 200 74 C 196 82 194 92 194 100 Z',
      miguelHairGrad, false);

    // Poster/artwork on left wall fill
    const posterGrad = gd(defs, 'l', [
      ['0%', '#E53935', 0.15], ['50%', '#FF8F00', 0.15], ['100%', '#43A047', 0.15]
    ], { x1: 4, y1: 80, x2: 28, y2: 120 });
    fe(g, 'rect', { x: 4, y: 80, width: 24, height: 40, rx: 1, fill: posterGrad }, false);
  },

  // =====================================================================
  // Layer 9: Polish — catchlights, shadows, highlights, final details
  // =====================================================================
  (g, a, defs) => {
    // === EYE CATCHLIGHTS — BRUNO ===
    // Primary catchlights (bright white)
    fe(g, 'circle', { cx: 75, cy: 87, r: 1.6, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 102, cy: 85, r: 1.6, fill: '#FFFFFF' }, a);
    // Secondary catchlights (smaller, softer)
    feo(g, 'circle', { cx: 79, cy: 91, r: 0.8, fill: '#FFFFFF' }, 0.7, false);
    feo(g, 'circle', { cx: 106, cy: 89, r: 0.8, fill: '#FFFFFF' }, 0.7, false);
    // Iris detail ring
    feo(g, 'circle', { cx: 77, cy: 89, r: 3.5, fill: 'none', stroke: '#8D6E63', 'stroke-width': '0.3' }, 0.6, false);
    feo(g, 'circle', { cx: 104, cy: 87, r: 3.5, fill: 'none', stroke: '#8D6E63', 'stroke-width': '0.3' }, 0.6, false);

    // === EYE CATCHLIGHTS — MIGUEL ===
    fe(g, 'circle', { cx: 207, cy: 109, r: 1.4, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 231, cy: 107, r: 1.4, fill: '#FFFFFF' }, a);
    feo(g, 'circle', { cx: 211, cy: 112, r: 0.7, fill: '#FFFFFF' }, 0.7, false);
    feo(g, 'circle', { cx: 235, cy: 110, r: 0.7, fill: '#FFFFFF' }, 0.7, false);
    feo(g, 'circle', { cx: 209, cy: 111, r: 3.2, fill: 'none', stroke: '#8D6E63', 'stroke-width': '0.3' }, 0.6, false);
    feo(g, 'circle', { cx: 233, cy: 109, r: 3.2, fill: 'none', stroke: '#8D6E63', 'stroke-width': '0.3' }, 0.6, false);

    // === FACE SHADOWS — BRUNO ===
    // Temple shadow (left side of face, light from right)
    sh(g, 'M 57 94 C 55 82 58 70 62 62 C 64 72 62 82 60 92 C 58 98 57 100 57 94 Z', 0.15, false);
    // Nose shadow (right side)
    sh(g, 'M 88 84 C 90 92 92 100 94 108 C 96 114 98 118 98 114 C 96 108 94 100 92 92 C 90 86 88 82 88 84 Z', 0.12, false);
    // Under-nose shadow
    sh(g, 'M 80 118 C 84 120 88 122 92 120 C 96 118 98 116 98 114 C 94 118 88 120 82 118 C 80 116 80 116 80 118 Z', 0.1, false);
    // Under-chin shadow
    sh(g, 'M 74 144 C 78 148 84 152 90 152 C 94 150 98 146 100 142 C 96 148 90 152 84 152 C 80 152 76 148 74 144 Z', 0.18, false);
    // Neck shadow (deep)
    sh(g, 'M 76 154 C 78 160 80 166 78 174 L 98 174 C 96 166 94 160 96 154 C 92 158 84 160 80 158 Z', 0.2, false);
    // Eye socket shadows
    sh(g, 'M 64 84 C 68 80 74 78 80 78 C 84 80 86 82 86 84 C 82 80 76 78 70 80 C 66 82 64 84 64 84 Z', 0.08, false);
    sh(g, 'M 90 82 C 94 78 100 76 106 76 C 110 78 112 80 113 82 C 108 78 102 76 96 78 C 92 80 90 82 90 82 Z', 0.08, false);

    // Bruno forehead highlight
    hi(g, 'M 72 56 C 78 52 84 52 90 56 C 94 58 96 62 94 66 C 90 60 84 56 78 58 C 74 60 72 62 72 56 Z', 0.15, false);
    // Bruno nose bridge highlight
    hi(g, 'M 86 84 C 87 90 87 96 87 102 C 88 98 88 92 88 86 Z', 0.2, false);
    // Bruno cheekbone highlight (left)
    hi(g, 'M 62 100 C 66 98 70 98 74 100 C 70 100 66 100 62 102 Z', 0.12, false);

    // === FACE SHADOWS — MIGUEL ===
    // Left cheek shadow
    sh(g, 'M 190 108 C 190 120 192 130 196 138 C 194 130 192 120 192 110 Z', 0.1, false);
    // Under-nose shadow
    sh(g, 'M 210 124 C 214 126 218 126 222 124 C 218 128 214 128 210 126 Z', 0.08, false);
    // Under-chin
    sh(g, 'M 206 148 C 210 152 216 156 222 154 C 218 158 212 158 208 154 Z', 0.12, false);
    // Neck shadow
    sh(g, 'M 208 158 C 212 162 216 164 222 162 C 228 160 228 158 228 156 L 228 172 L 208 172 Z', 0.15, false);

    // Miguel forehead highlight
    hi(g, 'M 206 76 C 212 72 220 72 226 76 C 222 74 214 74 210 76 Z', 0.18, false);
    // Miguel nose highlight
    hi(g, 'M 214 100 C 215 106 215 112 214 118 C 216 112 216 106 215 100 Z', 0.2, false);
    // Miguel cheekbone highlights
    hi(g, 'M 196 114 C 200 112 204 112 208 114 C 204 114 200 114 196 116 Z', 0.1, false);
    hi(g, 'M 234 112 C 238 110 242 112 244 114 C 240 112 236 112 234 114 Z', 0.1, false);

    // === MIGUEL CHEEK BLUSH ===
    feo(g, 'ellipse', { cx: 200, cy: 128, rx: 9, ry: 5, fill: '#FFAB91' }, 0.2, a);
    feo(g, 'ellipse', { cx: 236, cy: 126, rx: 9, ry: 5, fill: '#FFAB91' }, 0.2, a);

    // === MOUTH DETAILS ===
    // Bruno mouth interior (slight pinkish tone)
    fo(g, 'M 76 133 C 80 136 86 138 92 138 C 96 136 100 134 104 132 L 100 134 C 96 138 90 140 86 140 C 82 140 78 136 76 133 Z', '#C67070', 0.6, false);
    // Bruno upper lip
    fo(g, 'M 74 132 C 78 130 84 128 88 129 C 92 128 96 130 100 132 L 98 133 C 94 131 90 130 86 130 C 82 130 78 131 76 132 Z', '#B07060', 0.5, false);
    // Bruno lower lip highlight
    hi(g, 'M 80 136 C 84 138 88 139 92 138 C 88 140 84 140 80 138 Z', 0.12, false);

    // Miguel lips
    fo(g, 'M 208 137 C 212 135 216 134 220 134 C 224 135 228 137 230 138 L 228 138 C 224 136 220 135 218 135 C 214 135 210 136 208 138 Z', '#D4878A', 0.6, false);
    fo(g, 'M 210 139 C 214 142 218 144 224 142 C 228 140 230 138 230 138 L 228 140 C 224 143 218 144 214 143 C 210 142 208 140 210 139 Z', '#CC7A7D', 0.5, false);

    // === BEARD STUBBLE SHADOW — BRUNO ===
    // Stippling across jawline, chin, upper lip
    const stubbleDots = [
      [58,118],[60,122],[62,126],[64,130],[66,134],[68,138],[70,142],[72,146],[74,150],
      [78,152],[82,154],[86,156],[90,154],[94,152],
      [98,150],[100,146],[102,142],[104,138],[106,134],[108,130],[110,126],[112,122],[114,118],
      [76,148],[80,150],[84,152],[88,152],[92,150],[96,148],
      [78,156],[82,158],[86,160],[90,158],[94,156],
      [80,126],[84,126],[88,126],[92,126],[96,126],
      [82,128],[86,128],[90,128],[94,128],
      [60,116],[62,120],[64,124],[66,128],[68,132],[70,136],
      [106,132],[108,128],[110,124],[112,120],[114,116]
    ];
    stubbleDots.forEach(([cx, cy]) => {
      feo(g, 'circle', { cx, cy, r: 0.5, fill: '#4A3628' }, 0.6, false);
    });
    // Extra stubble density on chin
    const chinStubble = [
      [79,150],[81,152],[83,154],[85,156],[87,154],[89,152],[91,150],[93,148],
      [80,148],[84,150],[88,154],[92,152],[96,150],
      [77,146],[79,148],[83,150],[87,152],[91,150],[95,148]
    ];
    chinStubble.forEach(([cx, cy]) => {
      feo(g, 'circle', { cx, cy, r: 0.4, fill: '#3E2C20' }, 0.5, false);
    });

    // === JACKET POLISH ===
    // PESSOAL text
    const pt = ce('text', {
      x: 56, y: 242, fill: '#ECEFF1',
      'font-size': '5', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    pt.textContent = 'PESSOAL';
    if (a) pt.classList.add('active-element');
    g.appendChild(pt);
    // Refresh colored dots (brighter)
    fe(g, 'circle', { cx: 62, cy: 248, r: 1.8, fill: '#FF8F00' }, false);
    fe(g, 'circle', { cx: 68, cy: 248, r: 1.8, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 74, cy: 248, r: 1.8, fill: '#42A5F5' }, false);

    // Jacket fabric sheen highlights
    hi(g, 'M 48 212 C 54 208 62 206 70 210 C 62 212 54 214 48 218 Z', 0.08, false);
    hi(g, 'M 102 210 C 108 206 116 204 124 208 C 116 210 108 212 102 216 Z', 0.08, false);

    // Jacket shadow fold details
    sh(g, 'M 84 200 C 84 220 84 240 84 260 C 86 260 88 260 88 240 C 88 220 88 200 86 198 Z', 0.06, false);
    sh(g, 'M 50 260 C 54 270 58 280 56 290 C 54 282 52 272 50 264 Z', 0.08, false);
    sh(g, 'M 120 258 C 116 268 112 278 114 288 C 116 280 118 270 120 262 Z', 0.08, false);

    // === SWEATER POLISH — "95" fill ===
    const t95f = ce('text', {
      x: 202, y: 222, fill: '#ECEFF1',
      'font-size': '16', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '1'
    });
    t95f.textContent = '95';
    if (a) t95f.classList.add('active-element');
    g.appendChild(t95f);
    const tyf = ce('text', {
      x: 207, y: 232, fill: '#B0BEC5',
      'font-size': '4.5', 'font-family': 'Arial, sans-serif',
      'letter-spacing': '0.8'
    });
    tyf.textContent = 'YEARS';
    g.appendChild(tyf);

    // Sweater fabric shadows
    sh(g, 'M 180 240 C 186 250 190 260 188 272 C 186 262 182 252 178 244 Z', 0.08, false);
    sh(g, 'M 248 238 C 242 248 236 258 238 270 C 240 260 244 250 250 242 Z', 0.08, false);

    // === TOY HIGHLIGHTS ===
    feo(g, 'ellipse', { cx: 208, cy: 254, rx: 4, ry: 3, fill: '#90CAF9' }, 0.35, false);
    feo(g, 'ellipse', { cx: 224, cy: 254, rx: 4, ry: 3, fill: '#EF9A9A' }, 0.35, false);
    // Toy edge highlights
    hi(g, 'M 200 258 C 204 252 210 248 216 246 C 210 250 204 254 200 260 Z', 0.15, false);

    // === TABLE REFLECTIONS ===
    // Subtle reflections on dark table surface
    const reflGrad = gd(defs, 'l', [
      ['0%', '#546E7A', 0], ['30%', '#546E7A', 0.06], ['70%', '#546E7A', 0.06], ['100%', '#546E7A', 0]
    ], { x1: 0, y1: 342, x2: 360, y2: 342 });
    fe(g, 'rect', { x: 0, y: 340, width: 360, height: 6, fill: reflGrad }, false);
    // Figure reflections on table (very faint)
    feo(g, 'rect', { x: 30, y: 340, width: 112, height: 20, rx: 4, fill: '#1B2632' }, 0.05, false);
    feo(g, 'rect', { x: 164, y: 340, width: 104, height: 20, rx: 4, fill: '#1A237E' }, 0.05, false);

    // === AMBIENT LIGHTING ===
    // Warm light from fluorescent — hitting faces from above
    const warmLight = gd(defs, 'r', [
      ['0%', '#FFF9C4', 0.08], ['50%', '#FFF9C4', 0.04], ['100%', '#FFF9C4', 0]
    ], { cx: 180, cy: 20, r: 200 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 338, fill: warmLight }, false);

    // Hair highlights — Bruno (scalp sheen)
    hi(g, 'M 78 48 C 84 44 90 44 96 48 C 90 46 84 46 78 48 Z', 0.15, false);
    // Hair highlights — Miguel
    hi(g, 'M 206 68 C 214 64 222 64 230 68 C 222 66 214 66 206 68 Z', 0.2, false);
    hi(g, 'M 200 76 C 208 70 218 68 228 72 C 218 70 208 72 200 78 Z', 0.12, false);

    // === THIRD PERSON — SHIRT PATTERN SHADOW ===
    sh(g, 'M 290 100 C 294 108 296 118 296 128 L 290 128 C 290 118 290 108 290 100 Z', 0.08, false);
    sh(g, 'M 346 96 C 350 104 352 114 352 124 L 356 124 C 354 114 352 104 348 96 Z', 0.08, false);
    // Third person neckline detail
    pps(g, ['M 306 54 C 312 50 320 50 326 54'], false, 0.6, '#5D4037');

    // === FINAL POLISH DETAILS ===
    // Bruno gesturing hand skin highlight
    hi(g, 'M 22 274 C 26 270 30 272 34 278 C 30 274 26 272 22 276 Z', 0.15, false);
    // Miguel finger highlights
    hi(g, 'M 190 248 C 192 244 194 242 196 244 C 194 244 192 246 190 250 Z', 0.1, false);
    hi(g, 'M 242 246 C 240 242 238 240 236 242 C 238 242 240 244 242 248 Z', 0.1, false);

    // Blue disc subtle table shadow
    sh(g, 'M 160 336 C 168 340 186 340 196 336 C 190 340 170 342 160 338 Z', 0.12, false);
    // Cup table shadow
    sh(g, 'M 240 338 C 244 340 256 340 262 338 C 258 342 246 342 240 340 Z', 0.1, false);

    // Sauce cup highlight
    hi(g, 'M 16 322 C 20 320 24 320 28 322 C 24 322 20 322 16 324 Z', 0.2, false);
  }
];
