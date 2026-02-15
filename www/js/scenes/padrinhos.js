const padrinhosLayers = [
  // =====================================================================
  // Layer 0: Composition guides
  // =====================================================================
  (g, a) => {
    // Center vertical
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Godmother zone
    pp(g, ['M 25 20 L 25 430', 'M 185 20 L 185 430'], a, lt);
    // Godfather zone
    pp(g, ['M 175 20 L 175 430', 'M 335 20 L 335 430'], a, lt);
    // Head level
    pp(g, ['M 20 85 L 340 85'], a, lt);
    // Baby level
    pp(g, ['M 45 185 L 195 185'], a, lt);
    // Feet level
    pp(g, ['M 20 425 L 340 425'], a, lt);
    // Window guide
    pp(g, ['M 200 8 L 295 8 L 295 115 L 200 115 Z'], a, lt);
    // Godmother head cross
    pp(g, ['M 108 45 L 108 145', 'M 65 90 L 150 90'], a, lt);
    // Godfather head cross
    pp(g, ['M 258 45 L 258 145', 'M 215 85 L 300 85'], a, lt);
    // Baby head cross
    pp(g, ['M 80 155 L 80 220', 'M 50 185 L 115 185'], a, lt);
    // Shoulder alignment
    pp(g, ['M 50 155 L 310 155'], a, lt);
  },

  // =====================================================================
  // Layer 1: Body outlines — godmother, godfather, baby
  // =====================================================================
  (g, a) => {
    // === GODMOTHER — left side, holding baby on her left hip ===
    // Head — oval, slightly tilted right (looking toward baby/camera)
    pp(g, [
      'M 108 48 C 92 48 78 58 74 72 C 70 86 72 100 78 112 C 82 120 88 128 96 134 C 100 137 104 139 108 141 C 112 139 116 137 120 134 C 128 128 134 120 138 112 C 144 100 146 86 142 72 C 138 58 124 48 108 48 Z'
    ], a);
    // Neck — slightly angled, elegant
    pp(g, [
      'M 100 139 C 98 143 96 148 95 153',
      'M 116 139 C 118 143 120 148 121 153'
    ], a);
    // Shoulders and torso — sleeveless, wider at hips for baby-holding pose
    pp(g, [
      'M 60 172 C 68 160 82 152 100 152 C 118 152 132 160 140 172',
      'M 60 172 C 56 188 52 210 50 240 C 48 270 48 310 50 350 L 54 425',
      'M 140 172 C 144 188 148 210 150 240 C 152 270 152 310 150 350 L 146 425'
    ], a);
    // Left arm — bent, holding baby from behind
    pp(g, [
      'M 60 172 C 52 182 46 196 44 212 C 42 228 44 240 52 250 C 58 258 66 262 76 264'
    ], a);
    // Right arm — under baby supporting from below
    pp(g, [
      'M 140 172 C 146 184 148 198 146 214 C 144 228 138 240 130 250 C 124 258 118 264 112 268'
    ], a);

    // === BABY MIGUEL — on godmother's left hip ===
    // Head — large round baby head
    pp(g, [
      'M 80 160 C 80 146 88 134 100 130 C 112 134 120 146 120 160 C 120 174 112 184 104 188 C 98 192 90 190 84 184 C 80 178 78 170 80 160 Z'
    ], a);
    // Baby torso — small chubby body
    pp(g, [
      'M 86 186 C 88 192 94 198 102 200 C 110 198 114 192 116 186',
      'M 86 186 L 80 218 L 78 240',
      'M 116 186 L 122 218 L 124 240'
    ], a);
    // Baby legs — chubby, with socks/shoes
    pp(g, [
      'M 80 218 C 74 230 70 244 72 256 C 74 264 78 270 84 272',
      'M 122 218 C 128 230 132 244 130 256 C 128 264 124 270 118 272'
    ], a);

    // === GODFATHER — right side, pointing at camera ===
    // Head — slightly angular, lean
    pp(g, [
      'M 258 46 C 242 46 228 56 224 70 C 220 84 222 98 228 110 C 232 118 238 126 246 132 C 250 135 254 137 258 139 C 262 137 266 135 270 132 C 278 126 284 118 288 110 C 294 98 296 84 292 70 C 288 56 274 46 258 46 Z'
    ], a);
    // Neck
    pp(g, [
      'M 250 137 C 248 141 246 146 245 151',
      'M 266 137 C 268 141 270 146 271 151'
    ], a);
    // Shoulders and torso — shirt with collar
    pp(g, [
      'M 206 172 C 214 160 232 151 258 151 C 284 160 298 168 306 178',
      'M 206 172 C 202 190 198 214 196 240 C 194 270 194 310 196 350 L 200 425',
      'M 306 178 C 310 196 312 218 312 244 C 312 270 310 310 308 350 L 304 425'
    ], a);
    // Right arm — extended forward, pointing at camera
    pp(g, [
      'M 306 178 C 312 190 320 200 330 208 C 338 214 346 218 354 220'
    ], a);
    // Left arm — at side
    pp(g, [
      'M 206 172 C 198 184 192 200 188 218 C 184 236 184 254 186 272'
    ], a);
  },

  // =====================================================================
  // Layer 2: Extremely detailed faces
  // =====================================================================
  (g, a) => {
    // === GODMOTHER FACE ===
    // Eyes — warm, slightly squinted from smiling, looking toward camera/baby
    // Left eye — almond shape with upper lid curve
    pp(g, [
      'M 92 84 C 94 78 98 76 103 78 C 108 80 110 84 108 89 C 106 93 100 95 95 93 C 92 91 90 88 92 84 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 114 83 C 116 77 120 75 125 77 C 130 79 132 83 130 88 C 128 92 122 94 117 92 C 114 90 112 87 114 83 Z'
    ], a);
    // Iris/pupil left
    fe(g, 'circle', { cx: 101, cy: 86, r: 3.6, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 101, cy: 86, r: 1.8, fill: a ? HL : '#1A0F08' }, a);
    // Iris/pupil right
    fe(g, 'circle', { cx: 123, cy: 85, r: 3.6, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 123, cy: 85, r: 1.8, fill: a ? HL : '#1A0F08' }, a);
    // Upper eyelid creases
    pp(g, ['M 91 80 C 96 76 102 74 108 76'], a, lt);
    pp(g, ['M 113 79 C 118 75 124 73 130 75'], a, lt);
    // Lower lash lines
    pps(g, ['M 93 91 C 97 94 102 95 107 93'], a, 0.6, '#5D4037');
    pps(g, ['M 115 90 C 119 93 124 94 129 92'], a, 0.6, '#5D4037');
    // Eyebrows — feminine, arched, expressive
    pp(g, [
      'M 88 76 C 92 71 98 69 104 71 C 107 72 109 74 110 76',
      'M 112 75 C 116 70 122 68 128 70 C 131 71 133 73 134 76'
    ], a);
    // Nose — feminine, straight bridge, slightly upturned tip
    pp(g, ['M 110 78 C 109 84 108 92 107 98'], a);
    pp(g, ['M 104 102 C 106 105 109 107 113 106 C 116 104 117 102 118 100'], a);
    // Nostril hints
    pps(g, ['M 105 103 C 104 105 105 107 107 106'], a, 0.6, '#8D6E63');
    pps(g, ['M 115 102 C 116 104 115 106 113 106'], a, 0.6, '#8D6E63');
    // Nasolabial folds (subtle, from smile)
    pps(g, ['M 98 100 C 96 106 94 112 92 118'], a, 0.5, '#C9A07A');
    pps(g, ['M 122 100 C 124 106 126 112 128 118'], a, 0.5, '#C9A07A');
    // WIDE JOYFUL SMILE — showing upper teeth
    pp(g, [
      'M 90 118 C 94 112 100 108 108 110 C 116 108 122 112 126 118'
    ], a);
    // Teeth line
    pp(g, ['M 94 118 L 122 118'], a);
    // Upper teeth detail
    pps(g, [
      'M 100 114 L 100 118',
      'M 108 113 L 108 118',
      'M 116 114 L 116 118'
    ], a, 0.4, '#E0E0E0');
    // Lower lip — full, curved
    pp(g, ['M 92 120 C 98 126 106 128 114 128 C 120 126 124 122 126 118'], a);
    // Lip crease
    pps(g, ['M 96 120 C 102 122 108 123 114 122 C 118 121 122 120 124 118'], a, 0.5, '#B07060');
    // Chin
    pps(g, ['M 100 136 C 104 140 108 141 112 140 C 116 138 118 136 120 134'], a, 0.5, '#C9A07A');
    // Right ear (visible)
    pp(g, ['M 142 80 C 148 74 154 78 154 88 C 154 98 150 104 144 102'], a);
    pp(g, ['M 148 82 C 150 88 150 96 148 100'], a, lt);
    // Ear lobe
    pps(g, ['M 144 102 C 142 106 140 108 138 106'], a, 0.5, '#C9A07A');

    // === BABY MIGUEL FACE ===
    // Big round eyes — looking at camera
    // Left eye
    pp(g, [
      'M 86 160 C 88 154 92 152 97 154 C 102 156 104 162 100 166 C 96 170 86 168 86 160 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 104 159 C 106 153 110 151 115 153 C 120 155 122 161 118 165 C 114 169 104 167 104 159 Z'
    ], a);
    // Baby irises — large, dark
    fe(g, 'circle', { cx: 94, cy: 161, r: 3.8, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 94, cy: 161, r: 2.0, fill: a ? HL : '#1A0F08' }, a);
    fe(g, 'circle', { cx: 112, cy: 160, r: 3.8, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 112, cy: 160, r: 2.0, fill: a ? HL : '#1A0F08' }, a);
    // Baby eyebrows — very faint
    pps(g, ['M 86 154 C 90 151 96 150 102 152'], a, 0.5, '#A08060');
    pps(g, ['M 104 153 C 108 150 114 149 120 151'], a, 0.5, '#A08060');
    // Baby nose — tiny, button
    pp(g, ['M 100 162 C 99 166 100 170 102 170 C 104 170 105 166 104 162'], a);
    // Baby mouth — small, slightly open smile
    pp(g, ['M 92 176 C 96 172 100 171 104 172 C 108 171 112 174 114 178'], a);
    // Lower lip
    pp(g, ['M 94 178 C 98 182 104 183 110 182 C 112 180 114 178 114 178'], a);
    // Baby chin dimple
    pps(g, ['M 100 186 C 102 188 104 188 106 186'], a, 0.4, '#D4A882');
    // Baby ears
    pp(g, ['M 78 158 C 74 154 70 156 70 164 C 70 172 74 176 78 174'], a);
    pps(g, ['M 74 160 C 72 164 72 170 74 172'], a, 0.5, '#C9A07A');

    // === GODFATHER FACE ===
    // Rectangular glasses frames — thick black
    pp(g, [
      'M 238 78 L 256 78 L 256 96 L 238 96 Z',
      'M 260 78 L 278 78 L 278 96 L 260 96 Z',
      'M 256 87 L 260 87',
      'M 238 87 L 226 83',
      'M 278 87 L 290 83'
    ], a);
    // Eyes behind glasses — focused, slightly squinted
    // Left eye
    pp(g, [
      'M 241 84 C 243 80 247 78 251 80 C 255 82 255 88 252 92 C 248 94 242 92 241 86 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 263 84 C 265 80 269 78 273 80 C 277 82 277 88 274 92 C 270 94 264 92 263 86 Z'
    ], a);
    // Irises/pupils
    fe(g, 'circle', { cx: 248, cy: 87, r: 3.4, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 248, cy: 87, r: 1.7, fill: a ? HL : '#1A0F08' }, a);
    fe(g, 'circle', { cx: 270, cy: 87, r: 3.4, fill: a ? HL : '#3B2314' }, a);
    fe(g, 'circle', { cx: 270, cy: 87, r: 1.7, fill: a ? HL : '#1A0F08' }, a);
    // Upper lid creases
    pps(g, ['M 240 80 C 244 76 250 74 256 76'], a, 0.6, '#8D6E63');
    pps(g, ['M 262 80 C 266 76 272 74 278 76'], a, 0.6, '#8D6E63');
    // Eyebrows — strong, thick, dark
    pp(g, [
      'M 236 74 C 240 69 246 67 254 70',
      'M 258 69 C 264 66 270 68 278 74'
    ], a);
    // Eyebrow thickness
    pp(g, [
      'M 238 76 C 242 71 248 69 256 72',
      'M 260 71 C 266 68 272 70 280 76'
    ], a);
    // Nose — masculine, defined bridge and tip
    pp(g, ['M 260 78 C 259 86 258 94 257 102'], a);
    pp(g, ['M 254 106 C 256 110 260 112 264 110 C 267 108 268 104 270 102'], a);
    // Nostril detail
    pps(g, ['M 255 107 C 254 109 255 111 257 110'], a, 0.5, '#8D6E63');
    pps(g, ['M 265 106 C 266 108 265 110 263 110'], a, 0.5, '#8D6E63');
    // Nasolabial folds
    pps(g, ['M 250 100 C 248 106 246 114 244 120'], a, 0.5, '#C9A07A');
    pps(g, ['M 272 100 C 274 106 276 114 278 120'], a, 0.5, '#C9A07A');
    // Mouth — slight grin/smirk
    pp(g, ['M 244 120 C 248 116 254 114 260 116 C 266 114 272 116 276 120'], a);
    pp(g, ['M 246 122 C 252 126 260 128 268 126 C 272 124 274 122 276 120'], a);
    // Lip crease
    pps(g, ['M 248 122 C 254 124 262 124 270 122'], a, 0.5, '#B07060');
    // Ears
    pp(g, ['M 222 82 C 216 78 212 82 212 92 C 212 102 216 108 222 106'], a);
    pp(g, ['M 216 86 C 214 92 214 100 216 104'], a, lt);
    pp(g, ['M 294 82 C 300 78 304 82 304 92 C 304 102 300 108 294 106'], a);
    pp(g, ['M 300 86 C 302 92 302 100 300 104'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair — godmother long dark hair, baby wispy, godfather short
  //          + goatee/beard detail
  // =====================================================================
  (g, a) => {
    // === GODMOTHER HAIR — long, dark brown, center-parted, flowing to shoulders ===
    // Hairline contour
    pp(g, [
      'M 76 78 C 74 60 82 46 96 40 C 106 36 116 38 126 44 C 136 52 142 64 142 80'
    ], a);
    // Center part line
    pps(g, ['M 108 40 C 108 44 108 50 108 56'], a, 0.7, '#3E2C20');
    // Hair mass left side — flowing from crown to left shoulder
    pp(g, [
      'M 74 80 C 72 96 68 112 64 128 C 60 144 56 160 52 174 C 48 186 46 196 46 204',
      'M 78 80 C 76 96 74 110 72 124 C 70 138 68 152 66 166 C 64 178 62 188 62 196'
    ], a);
    // Hair mass right side — flowing to right shoulder
    pp(g, [
      'M 142 80 C 144 96 148 112 150 128 C 152 144 154 160 156 174 C 158 184 158 192 158 198',
      'M 138 80 C 140 96 142 110 144 124 C 146 138 148 152 148 166 C 150 178 150 188 150 196'
    ], a);
    // Hair strand textures — left side
    pp(g, [
      'M 84 44 C 94 38 108 36 118 42',
      'M 80 54 C 90 46 104 44 114 50',
      'M 78 66 C 84 58 94 54 106 58',
      'M 76 74 C 80 68 88 64 98 66'
    ], a, lt);
    // Hair strand textures — right side
    pp(g, [
      'M 120 44 C 130 40 138 44 142 52',
      'M 136 58 C 140 52 144 50 146 54'
    ], a, lt);
    // Flowing strands on left
    pps(g, [
      'M 70 100 C 68 108 66 118 64 128',
      'M 66 106 C 64 114 62 124 60 134',
      'M 74 108 C 72 118 70 128 68 138',
      'M 60 140 C 58 150 56 162 54 172',
      'M 54 152 C 52 162 50 172 48 182'
    ], a, lt);
    // Flowing strands on right
    pps(g, [
      'M 146 100 C 148 108 150 118 152 128',
      'M 150 106 C 152 114 154 124 156 134',
      'M 142 108 C 144 118 146 128 148 138',
      'M 156 140 C 158 150 158 162 158 172'
    ], a, lt);
    // Hair highlights (lighter strands)
    pps(g, [
      'M 82 62 C 88 56 96 52 104 56',
      'M 68 110 C 66 120 64 130 62 140'
    ], a, 0.4, '#6D4C3A');

    // === BABY HAIR — very short, fine wisps ===
    pp(g, [
      'M 82 158 C 80 144 88 132 100 128 C 112 132 120 144 122 158'
    ], a);
    // Wispy strands
    pps(g, [
      'M 92 132 C 96 128 102 126 108 130',
      'M 88 138 C 94 134 100 132 106 136',
      'M 86 146 C 92 140 98 138 104 142',
      'M 96 128 C 100 124 106 126 110 130'
    ], a, 0.5, '#8D7050');

    // === GODFATHER HAIR — short, dark, well-groomed ===
    pp(g, [
      'M 226 80 C 224 62 232 48 248 42 C 258 38 268 40 276 46 C 286 54 292 66 292 82'
    ], a);
    // Hair texture — short strokes showing volume
    pp(g, [
      'M 240 44 C 248 38 260 36 272 42',
      'M 234 52 C 244 44 258 42 268 48',
      'M 230 62 C 238 54 252 50 264 56',
      'M 228 72 C 234 66 246 62 258 66',
      'M 226 78 C 230 72 240 68 252 72'
    ], a, lt);
    // Hair detail on sides
    pps(g, [
      'M 224 72 C 222 66 224 58 230 52',
      'M 290 72 C 292 66 290 58 284 52',
      'M 226 84 C 224 78 226 70 232 64',
      'M 292 82 C 294 76 292 68 286 62'
    ], a, 0.5, '#3E2C20');

    // === GOATEE / BEARD — dense stippling ===
    const goateeDots = [
      // Mustache area
      [248, 114], [252, 113], [256, 113], [260, 114], [264, 115],
      [250, 116], [254, 115], [258, 115], [262, 116],
      // Chin beard
      [246, 122], [250, 124], [254, 126], [258, 128], [262, 126], [266, 124], [270, 122],
      [248, 128], [252, 130], [256, 132], [260, 130], [264, 128],
      [250, 134], [254, 136], [258, 136], [262, 134],
      [252, 138], [256, 140], [260, 138],
      // Jawline stubble
      [240, 118], [236, 116], [232, 114], [272, 118], [276, 116], [280, 114],
      [238, 122], [234, 120], [274, 122], [278, 120],
      // Sideburn transitions
      [228, 108], [226, 102], [224, 96],
      [288, 108], [290, 102], [292, 96],
      // Extra density in goatee
      [249, 120], [253, 121], [257, 122], [261, 121], [265, 120],
      [251, 126], [255, 128], [259, 128], [263, 126],
      [253, 132], [257, 134], [261, 132]
    ];
    goateeDots.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.65, fill: a ? HL : '#2C1C12' }, a);
    });

    // Godmother black bracelet on left wrist
    pp(g, [
      'M 50 248 C 46 244 44 240 48 236 C 52 232 58 236 56 240 C 54 244 50 250 50 248 Z'
    ], a);
    // Additional bracelet band detail
    pps(g, ['M 46 244 C 44 240 46 236 50 234', 'M 52 250 C 56 248 58 244 56 240'], a, 0.8, '#212121');
  },

  // =====================================================================
  // Layer 4: Formal clothing — godmother navy dress, godfather shirt/belt/pants
  // =====================================================================
  (g, a) => {
    // === GODMOTHER SLEEVELESS NAVY DRESS ===
    // Neckline — scoop/V shape
    pp(g, [
      'M 92 154 C 96 148 102 146 108 146 C 114 146 120 148 124 154',
      'M 92 154 C 94 160 98 164 104 166',
      'M 124 154 C 122 160 118 164 112 166'
    ], a);
    // Necklace / pendant hint
    pps(g, [
      'M 96 154 C 100 150 106 148 108 148 C 110 148 116 150 120 154',
      'M 108 152 L 108 158'
    ], a, 0.5, '#424242');
    // Pendant dot
    fe(g, 'circle', { cx: 108, cy: 160, r: 1.2, fill: a ? HL : '#424242' }, a);
    // Dress drape fold lines — multiple, showing fabric flow
    pps(g, [
      'M 70 190 C 68 210 66 240 64 270 C 62 300 60 340 58 380',
      'M 82 186 C 80 210 78 240 76 280 C 74 310 72 350 72 390',
      'M 96 192 C 94 220 92 260 90 300 C 88 330 86 360 86 400',
      'M 122 194 C 124 220 126 260 128 300 C 130 330 130 360 130 400',
      'M 136 190 C 138 214 140 250 142 290 C 143 320 144 360 144 400'
    ], a, 0.7, '#0D1666');
    // Dress hemline gathering near feet
    pps(g, [
      'M 54 410 C 56 408 58 410 60 412',
      'M 70 414 C 72 412 76 410 80 412',
      'M 130 414 C 132 412 136 410 140 412',
      'M 142 410 C 144 408 146 410 146 412'
    ], a, 0.5, '#0D1666');
    // Dress shoulder straps (actually sleeveless — bare shoulders)
    pps(g, [
      'M 68 172 C 72 166 78 162 84 158',
      'M 136 172 C 132 166 128 162 122 158'
    ], a, 0.6, '#1A237E');

    // === GODFATHER SHIRT ===
    // Collar — pointed, folded
    pp(g, [
      'M 240 154 C 236 148 230 148 226 152 C 222 158 226 164 234 162',
      'M 276 154 C 280 148 286 148 290 152 C 294 158 290 164 282 162',
      'M 234 162 C 244 168 254 170 264 168 C 270 166 276 164 282 162'
    ], a);
    // Button placket (center line)
    pp(g, ['M 258 170 L 258 310'], a, lt);
    // Buttons — 5 buttons
    fe(g, 'circle', { cx: 258, cy: 182, r: 1.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 202, r: 1.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 222, r: 1.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 242, r: 1.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 258, cy: 262, r: 1.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Shirt fabric wrinkles
    pps(g, [
      'M 220 178 C 224 186 228 194 230 202',
      'M 236 174 C 238 184 240 196 240 208',
      'M 278 176 C 280 186 282 196 282 208',
      'M 294 180 C 292 190 290 202 288 214',
      'M 226 200 C 230 212 234 226 236 240',
      'M 284 200 C 282 212 280 226 278 240'
    ], a, 0.5, '#BDBDBD');
    // Sleeve edges (rolled up slightly)
    pp(g, [
      'M 206 172 C 200 180 196 190 194 200',
      'M 306 178 C 312 186 316 196 318 206'
    ], a, lt);
    // Belt — double lines, centered buckle
    pp(g, ['M 196 310 L 312 310', 'M 196 316 L 312 316'], a);
    // Belt buckle
    pp(g, ['M 250 308 L 266 308 L 266 318 L 250 318 Z'], a);
    // Buckle inner detail
    pp(g, ['M 252 310 L 264 310 L 264 316 L 252 316 Z'], a, lt);
    // Buckle prong
    pps(g, ['M 258 308 L 258 318'], a, 0.5, '#8D6E63');
    // Pants seam
    pp(g, ['M 256 318 L 256 425'], a, lt);
    // Pants legs outlines
    pp(g, ['M 200 350 L 200 425', 'M 304 350 L 304 425'], a, lt);
    // Pants wrinkles
    pps(g, [
      'M 210 320 C 212 340 214 360 216 380',
      'M 240 320 C 238 340 236 360 236 380',
      'M 270 320 C 272 340 274 360 274 380',
      'M 296 320 C 294 340 292 360 292 380'
    ], a, 0.5, '#263238');
    // Micro-dot pattern on shirt (polka dots)
    for (let row = 0; row < 13; row++) {
      for (let col = 0; col < 7; col++) {
        const cx = 216 + col * 12 + (row % 2 === 0 ? 0 : 6);
        const cy = 172 + row * 11;
        if (cy < 308) {
          fe(g, 'circle', { cx, cy, r: 0.45, fill: a ? HL : LP }, a);
        }
      }
    }
  },

  // =====================================================================
  // Layer 5: Hands, baby wrapping, shoes
  // =====================================================================
  (g, a) => {
    // === GODMOTHER LEFT ARM — cradling baby from behind ===
    pp(g, [
      'M 52 250 C 60 258 70 262 82 264 C 90 266 96 266 100 262'
    ], a);
    // Left hand — fingers visible behind baby
    pp(g, [
      'M 76 264 C 72 260 68 258 66 262 C 64 266 68 270 72 270',
      'M 70 262 C 66 258 62 256 60 260 C 58 264 62 268 66 268',
      'M 68 266 C 64 264 60 262 58 266 C 56 270 60 272 64 272',
      'M 74 268 C 72 272 76 276 80 274 C 84 272 82 268 78 268'
    ], a);
    // Thumb
    pp(g, ['M 82 262 C 86 258 90 256 92 260 C 94 264 90 268 86 266'], a);

    // === GODMOTHER RIGHT ARM — supporting baby from underneath ===
    pp(g, [
      'M 130 250 C 126 256 120 262 114 268'
    ], a);
    // Right hand — under baby's legs
    pp(g, [
      'M 114 268 C 118 272 122 276 124 280 C 126 284 122 286 118 284 C 114 282 112 278 112 274',
      'M 116 272 C 120 276 122 280 120 282',
      'M 114 274 C 118 278 118 282 116 284'
    ], a);

    // === BABY WHITE OUTFIT details ===
    // Collar / neckline of baby outfit
    pps(g, [
      'M 90 190 C 94 186 100 184 106 186 C 110 188 114 190 116 194'
    ], a, 0.6, '#BDBDBD');
    // Baby outfit body wrinkles
    pps(g, [
      'M 92 196 C 94 204 96 214 96 222',
      'M 108 196 C 106 204 104 214 104 222',
      'M 100 192 C 100 202 100 212 100 222'
    ], a, 0.4, '#E0E0E0');
    // Baby outfit lower wrinkles
    pps(g, [
      'M 84 224 C 82 232 80 240 82 248',
      'M 118 224 C 120 232 122 240 120 248'
    ], a, 0.4, '#E0E0E0');
    // Baby socks
    pp(g, [
      'M 72 254 C 70 260 70 266 74 270 C 78 274 84 274 88 270',
      'M 130 254 C 132 260 132 266 128 270 C 124 274 118 274 114 270'
    ], a);
    // Baby shoes — small white
    pp(g, [
      'M 70 268 C 66 270 62 276 64 282 C 66 288 72 292 78 290 C 84 288 86 282 84 276 C 82 272 78 268 74 266',
      'M 132 268 C 136 270 140 276 138 282 C 136 288 130 292 124 290 C 118 288 116 282 118 276 C 120 272 124 268 128 266'
    ], a);
    // Shoe sole detail
    pps(g, ['M 64 286 L 80 286', 'M 120 286 L 138 286'], a, 0.5, '#9E9E9E');
    // Shoe strap detail
    pps(g, ['M 68 278 C 72 276 76 278 80 280', 'M 122 278 C 126 276 130 278 134 280'], a, 0.4, '#BDBDBD');

    // === GODFATHER RIGHT HAND — POINTING at camera ===
    // Forearm leading to hand
    pp(g, [
      'M 330 208 C 336 212 342 214 348 216'
    ], a);
    // INDEX FINGER — extended straight toward viewer (foreshortened)
    pp(g, [
      'M 348 216 C 352 213 356 210 358 206 C 358 202 354 200 350 202 C 346 204 344 208 346 212'
    ], a);
    // Index finger other edge
    pp(g, [
      'M 346 212 C 350 210 354 207 356 204'
    ], a);
    // Three curled fingers
    pp(g, [
      'M 348 218 C 352 222 354 226 352 230 C 350 234 346 232 344 228',
      'M 346 220 C 350 224 352 228 350 232 C 348 236 344 234 342 230',
      'M 344 222 C 348 226 350 230 348 234 C 346 238 342 236 340 232'
    ], a);
    // Thumb — visible, curled around
    pp(g, [
      'M 348 216 C 346 220 342 224 338 222 C 334 220 334 216 338 214 C 342 212 346 214 348 216'
    ], a);
    // Knuckle wrinkle detail
    pps(g, ['M 342 218 C 344 220 346 222 348 220', 'M 340 224 C 342 226 344 224'], a, 0.5, '#C9A07A');

    // === GODFATHER LEFT HAND — at side, relaxed ===
    pp(g, [
      'M 186 272 C 184 278 182 286 180 292'
    ], a);
    // Fingers
    pp(g, [
      'M 180 292 C 178 298 176 304 174 308 C 172 312 174 314 178 312 C 182 310 184 306 184 302',
      'M 182 294 C 180 300 178 306 178 310',
      'M 184 292 C 182 298 180 304 180 308',
      'M 178 294 C 176 300 174 306 174 308'
    ], a);
    // Thumb
    pp(g, ['M 186 290 C 190 292 192 298 190 302 C 188 304 186 302 184 298'], a);

    // === GODFATHER WATCH on left wrist ===
    pp(g, ['M 182 268 L 190 266 L 192 274 L 184 276 Z'], a);
    fe(g, 'circle', { cx: 188, cy: 271, r: 3.5, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Watch band
    pps(g, ['M 180 270 L 176 266', 'M 186 278 L 190 284'], a, 0.6, '#5D4037');
    // Watch face details
    pps(g, ['M 188 268 L 188 271 L 190 271'], a, 0.3, '#424242');
  },

  // =====================================================================
  // Layer 6: Stone wall background, window
  // =====================================================================
  (g, a) => {
    // === STONE WALL — irregular blocks with natural shapes ===
    // Row 1 (y=0-42)
    pp(g, [
      'M 2 2 C 4 0 54 0 58 2 C 60 4 60 36 58 38 C 56 40 4 40 2 38 C 0 36 0 4 2 2 Z',
      'M 64 0 C 66 0 124 0 126 2 C 128 4 128 34 126 36 C 124 38 66 38 64 36 C 62 34 62 2 64 0 Z',
      'M 198 2 L 200 0 L 294 0 L 296 2 C 298 4 298 40 296 42 C 294 44 200 44 198 42 Z',
      'M 302 0 L 358 0 L 360 2 L 360 38 L 358 40 L 302 40 L 300 38 L 300 2 Z'
    ], a, lt);
    // Row 2 (y=42-82)
    pp(g, [
      'M 0 44 C 2 42 68 42 70 44 C 72 46 72 76 70 78 C 68 80 2 80 0 78 Z',
      'M 76 42 C 78 40 128 40 130 42 C 132 44 132 74 130 76 C 128 78 78 78 76 76 C 74 74 74 44 76 42 Z',
      'M 200 44 L 296 44 C 298 46 298 78 296 80 L 200 80 C 198 78 198 46 200 44 Z',
      'M 302 42 L 358 42 L 360 44 L 360 80 L 358 82 L 302 82 L 300 80 L 300 44 Z'
    ], a, lt);
    // Row 3 (y=82-120)
    pp(g, [
      'M 0 84 C 2 82 56 82 58 84 C 60 86 60 116 58 118 C 56 120 2 120 0 118 Z',
      'M 64 82 C 66 80 120 80 122 82 C 124 84 124 114 122 116 C 120 118 66 118 64 116 C 62 114 62 84 64 82 Z',
      'M 300 84 C 302 82 356 82 358 84 C 360 86 360 116 358 118 C 356 120 302 120 300 118 Z'
    ], a, lt);
    // Row 4 (y=120-160) — wider stones
    pp(g, [
      'M 0 122 L 66 122 C 68 124 68 156 66 158 L 0 158 Z',
      'M 72 120 L 130 120 C 132 122 132 154 130 156 L 72 156 Z',
      'M 136 118 L 196 118 C 198 120 198 156 196 158 L 136 158 Z',
      'M 300 122 L 358 122 C 360 124 360 156 358 158 L 300 158 Z'
    ], a, lt);
    // Row 5 (y=160-200) — mostly behind figures
    pp(g, [
      'M 0 162 L 48 162 C 50 164 50 196 48 198 L 0 198 Z',
      'M 310 160 L 358 160 C 360 162 360 198 358 200 L 310 200 Z'
    ], a, lt);
    // Row 6 (y=200-240)
    pp(g, [
      'M 0 202 L 40 202 C 42 204 42 236 40 238 L 0 238 Z',
      'M 316 202 L 358 202 C 360 204 360 236 358 238 L 316 238 Z'
    ], a, lt);
    // Row 7 (y=240-280)
    pp(g, [
      'M 0 242 L 34 242 C 36 244 36 276 34 278 L 0 278 Z',
      'M 320 242 L 358 242 C 360 244 360 276 358 278 L 320 278 Z'
    ], a, lt);
    // Stone texture cracks and details
    pps(g, [
      'M 30 12 C 32 16 30 22 28 26',
      'M 96 14 C 98 20 96 28 94 32',
      'M 248 16 C 246 22 248 30 250 36',
      'M 340 14 C 338 20 340 28 342 34',
      'M 36 56 C 34 62 36 68 38 74',
      'M 110 54 C 108 60 110 68 112 74',
      'M 252 58 C 254 64 252 72 250 78',
      'M 30 96 C 28 102 30 108 32 114',
      'M 94 92 C 96 98 94 106 92 112',
      'M 340 96 C 338 102 340 110 342 116'
    ], a, 0.4, '#A09070');

    // === WINDOW — rectangle with frame, cross dividers, and ledge ===
    // Outer frame
    pp(g, ['M 200 10 L 294 10 L 294 108 L 200 108 Z'], a);
    // Inner frame
    pp(g, ['M 204 14 L 290 14 L 290 104 L 204 104 Z'], a);
    // Vertical divider
    pp(g, ['M 247 14 L 247 104'], a);
    // Horizontal divider
    pp(g, ['M 204 59 L 290 59'], a);
    // Window ledge
    pp(g, ['M 196 108 L 298 108 L 298 118 L 196 118 Z'], a);
    // Frame depth detail
    pps(g, [
      'M 202 12 L 202 106',
      'M 292 12 L 292 106',
      'M 202 12 L 292 12',
      'M 202 106 L 292 106'
    ], a, 0.4, '#BDBDBD');

    // === GROUND LINE ===
    pp(g, ['M 0 425 L 360 425'], a);
    pp(g, ['M 0 425 L 0 450 L 360 450 L 360 425'], a, lt);
  },

  // =====================================================================
  // Layer 7: Gradient skin/clothing colors — all figures
  // =====================================================================
  (g, a, defs) => {
    // === SKIN GRADIENTS ===
    const skinGrad = gd(defs, 'l', [
      ['0%', '#F8D8B4', 1],
      ['40%', '#F2C89C', 1],
      ['100%', '#E8B888', 1]
    ], { x1: 0, y1: 0, x2: 0, y2: 450 });

    const skinShadow = gd(defs, 'l', [
      ['0%', '#E2B080', 1],
      ['100%', '#D4A06C', 1]
    ], { x1: 0, y1: 0, x2: 360, y2: 0 });

    const babySkin = gd(defs, 'r', [
      ['0%', '#FDE8D0', 1],
      ['60%', '#FAD8BC', 1],
      ['100%', '#F2C8A8', 1]
    ], { cx: 100, cy: 165, r: 40 });

    // === GODMOTHER ===
    // Face
    fl(g,
      'M 108 48 C 92 48 78 58 74 72 C 70 86 72 100 78 112 C 82 120 88 128 96 134 C 100 137 104 139 108 141 C 112 139 116 137 120 134 C 128 128 134 120 138 112 C 144 100 146 86 142 72 C 138 58 124 48 108 48 Z',
      skinGrad, a);
    // Face shadow (right side — light from left)
    fo(g,
      'M 120 60 C 130 66 138 78 140 92 C 142 106 138 118 130 128 C 126 132 122 136 118 138 L 108 141 C 112 139 116 137 120 134 C 128 128 134 120 138 112 C 144 100 146 86 142 72 C 140 64 132 56 120 52 Z',
      '#C08050', 0.15, false);
    // Ear
    fo(g, 'M 142 76 C 150 72 156 78 156 90 C 156 102 152 108 146 106 C 142 104 140 98 140 90 C 140 82 140 78 142 76 Z', skinGrad, 1.0, false);
    // Neck
    fl(g, 'M 96 138 C 98 142 96 148 95 153 L 121 153 C 120 148 118 142 116 138 Z', skinShadow, false);
    // Neck shadow
    fo(g, 'M 96 138 C 98 142 96 148 95 153 L 108 153 L 108 141 Z', '#B88060', 0.12, false);

    // Hair — dark brown gradient
    const hairGrad = gd(defs, 'l', [
      ['0%', '#3E2C20', 1],
      ['50%', '#4E3628', 1],
      ['100%', '#2E1C14', 1]
    ], { x1: 60, y1: 40, x2: 150, y2: 200 });

    // Hair crown
    fl(g,
      'M 76 78 C 74 60 82 46 96 40 C 106 36 116 38 126 44 C 136 52 142 64 142 80 L 138 78 C 136 66 130 56 122 48 C 114 42 104 40 96 44 C 86 50 80 62 78 76 Z',
      hairGrad, false);
    // Hair left side
    fl(g,
      'M 74 80 C 72 96 68 112 64 128 C 60 144 56 160 52 174 C 48 186 46 196 46 204 L 56 200 C 58 192 60 182 62 170 C 64 156 68 140 72 124 C 76 108 78 92 80 80 Z',
      hairGrad, false);
    // Hair right side
    fl(g,
      'M 142 80 C 144 96 148 112 150 128 C 152 144 154 160 156 174 C 158 184 158 192 158 198 L 150 196 C 150 190 148 180 146 168 C 144 154 142 138 140 122 C 138 108 138 94 138 80 Z',
      hairGrad, false);

    // Navy dress gradient
    const dressGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1],
      ['30%', '#1B2680', 1],
      ['70%', '#141C6A', 1],
      ['100%', '#0D1456', 1]
    ], { x1: 50, y1: 150, x2: 150, y2: 425 });

    fl(g,
      'M 60 172 C 68 160 82 152 100 152 C 118 152 132 160 140 172 C 144 188 148 210 150 240 C 152 270 152 310 150 350 L 146 425 L 54 425 L 50 350 C 48 310 48 270 50 240 C 52 210 56 188 60 172 Z',
      dressGrad, a);
    // Dress highlight on left side (light source)
    hi(g,
      'M 60 172 C 64 180 66 190 68 204 C 70 220 70 240 70 260 L 60 260 C 58 240 56 220 56 200 C 56 188 58 180 60 172 Z',
      0.06, false);
    // Dress shadow on right fold
    sh(g,
      'M 130 190 C 132 210 134 240 136 270 C 138 300 140 340 142 380 L 148 380 C 148 340 148 300 148 270 C 148 240 146 210 140 190 Z',
      0.08, false);

    // Godmother arm skin
    fl(g,
      'M 60 172 C 52 182 46 196 44 212 C 42 228 44 240 52 250 L 58 246 C 52 238 50 228 52 214 C 54 198 58 186 64 176 Z',
      skinGrad, false);
    // Right arm supporting baby
    fl(g,
      'M 140 172 C 146 184 148 198 146 214 C 144 228 138 240 130 250 L 124 246 C 130 238 136 228 138 214 C 140 200 138 188 134 178 Z',
      skinGrad, false);

    // === BABY MIGUEL ===
    // Face
    fl(g,
      'M 80 160 C 80 146 88 134 100 130 C 112 134 120 146 120 160 C 120 174 112 184 104 188 C 98 192 90 190 84 184 C 80 178 78 170 80 160 Z',
      babySkin, a);
    // Baby cheek glow
    fo(g, 'M 84 168 C 82 174 84 180 88 182 C 92 184 96 180 96 174 C 96 168 92 164 88 164 C 86 164 84 166 84 168 Z', '#FFB4A0', 0.2, false);
    fo(g, 'M 108 168 C 106 174 108 180 112 182 C 116 184 120 180 120 174 C 120 168 116 164 112 164 C 110 164 108 166 108 168 Z', '#FFB4A0', 0.2, false);

    // Baby hair
    fo(g,
      'M 82 158 C 80 144 88 132 100 128 C 112 132 120 144 122 158 L 118 156 C 116 146 110 138 102 134 C 94 138 88 146 86 156 Z',
      '#A08060', 0.6, false);

    // Baby white outfit
    const babyOutfit = gd(defs, 'l', [
      ['0%', '#FAFAFA', 1],
      ['50%', '#F5F5F5', 1],
      ['100%', '#EEEEEE', 1]
    ], { x1: 80, y1: 186, x2: 124, y2: 280 });

    fl(g,
      'M 86 186 C 88 192 94 198 102 200 C 110 198 114 192 116 186 L 122 218 L 124 240 L 78 240 L 80 218 Z',
      babyOutfit, false);
    // Baby legs
    fl(g, 'M 80 218 C 74 230 70 244 72 256 L 88 256 L 86 240 Z', babyOutfit, false);
    fl(g, 'M 122 218 C 128 230 132 244 130 256 L 114 256 L 116 240 Z', babyOutfit, false);
    // Baby shoes — white
    fe(g, 'ellipse', { cx: 74, cy: 282, rx: 10, ry: 8, fill: '#FAFAFA' }, false);
    fe(g, 'ellipse', { cx: 130, cy: 282, rx: 10, ry: 8, fill: '#FAFAFA' }, false);
    // Baby socks
    fl(g, 'M 66 262 C 64 268 66 276 72 280 L 84 280 C 82 274 80 266 82 258 Z', '#FAFAFA', false);
    fl(g, 'M 136 262 C 138 268 136 276 130 280 L 118 280 C 120 274 122 266 120 258 Z', '#FAFAFA', false);

    // === GODFATHER ===
    // Face
    fl(g,
      'M 258 46 C 242 46 228 56 224 70 C 220 84 222 98 228 110 C 232 118 238 126 246 132 C 250 135 254 137 258 139 C 262 137 266 135 270 132 C 278 126 284 118 288 110 C 294 98 296 84 292 70 C 288 56 274 46 258 46 Z',
      skinGrad, a);
    // Face shadow left side
    fo(g,
      'M 240 52 C 232 58 226 68 224 80 C 222 92 224 104 230 114 C 234 120 238 126 244 132 L 246 132 C 240 126 234 118 230 110 C 226 100 224 88 226 76 C 228 64 234 56 242 50 Z',
      '#C08050', 0.12, false);
    // Ears
    fo(g, 'M 222 78 C 214 74 210 80 210 92 C 210 104 214 110 222 108 C 224 106 224 100 224 92 C 224 84 224 80 222 78 Z', skinGrad, 1.0, false);
    fo(g, 'M 294 78 C 302 74 306 80 306 92 C 306 104 302 110 294 108 C 292 106 292 100 292 92 C 292 84 292 80 294 78 Z', skinGrad, 1.0, false);
    // Neck
    fl(g, 'M 248 136 L 268 136 L 271 153 L 245 153 Z', skinShadow, false);

    // Godfather hair
    const gfHairGrad = gd(defs, 'l', [
      ['0%', '#2E1C14', 1],
      ['50%', '#3E2820', 1],
      ['100%', '#1E1008', 1]
    ], { x1: 220, y1: 40, x2: 296, y2: 90 });

    fl(g,
      'M 226 80 C 224 62 232 48 248 42 C 258 38 268 40 276 46 C 286 54 292 66 292 82 L 288 80 C 286 70 280 60 272 52 C 264 46 254 44 246 46 C 238 50 232 60 228 74 Z',
      gfHairGrad, false);

    // White shirt gradient
    const shirtGrad = gd(defs, 'l', [
      ['0%', '#FAFAFA', 1],
      ['40%', '#F5F5F5', 1],
      ['70%', '#EEEEEE', 1],
      ['100%', '#E8E8E8', 1]
    ], { x1: 200, y1: 150, x2: 320, y2: 320 });

    fl(g,
      'M 206 172 C 214 160 232 151 258 151 C 284 160 298 168 306 178 L 312 244 L 312 310 L 196 310 L 196 244 Z',
      shirtGrad, a);
    // Shirt shadow under arms
    sh(g,
      'M 206 172 C 204 180 202 190 200 200 L 210 200 C 212 190 214 180 216 172 Z',
      0.06, false);
    sh(g,
      'M 306 178 C 308 186 310 196 312 206 L 302 206 C 300 196 298 186 296 178 Z',
      0.06, false);

    // Belt
    const beltGrad = gd(defs, 'l', [
      ['0%', '#6D4C3A', 1],
      ['50%', '#795548', 1],
      ['100%', '#5D3E2E', 1]
    ], { x1: 196, y1: 310, x2: 312, y2: 316 });

    fl(g, 'M 196 310 L 312 310 L 312 316 L 196 316 Z', beltGrad, false);
    // Belt buckle
    fe(g, 'rect', { x: 251, y: 309, width: 14, height: 8, rx: 1, fill: '#A1887F' }, false);

    // Dark pants
    const pantsGrad = gd(defs, 'l', [
      ['0%', '#37474F', 1],
      ['40%', '#455A64', 1],
      ['100%', '#263238', 1]
    ], { x1: 196, y1: 316, x2: 312, y2: 425 });

    fl(g, 'M 196 316 L 312 316 L 304 425 L 200 425 Z', pantsGrad, a);

    // Right arm skin (pointing)
    fl(g,
      'M 306 178 C 312 190 320 200 330 208 C 338 214 346 218 354 220 L 352 226 C 344 224 336 220 328 214 C 318 206 310 196 304 184 Z',
      skinGrad, false);
    // Left arm skin
    fl(g,
      'M 206 172 C 198 184 192 200 188 218 C 184 236 184 254 186 272 L 192 270 C 190 254 190 236 194 220 C 198 204 204 190 210 178 Z',
      skinGrad, false);

    // Glasses lens tint
    feo(g, 'rect', { x: 238, y: 78, width: 18, height: 18, rx: 1, fill: '#546E7A' }, 0.2, false);
    feo(g, 'rect', { x: 260, y: 78, width: 18, height: 18, rx: 1, fill: '#546E7A' }, 0.2, false);

    // Bracelet fill (godmother)
    fe(g, 'ellipse', { cx: 50, cy: 242, rx: 5, ry: 6, fill: '#1A1A1A' }, false);

    // === HANDS skin fills ===
    // Godmother left hand (behind baby)
    fl(g, 'M 72 264 C 66 260 62 258 60 262 C 58 268 64 272 70 270 L 80 266 Z', skinGrad, false);
    // Godmother right hand (under baby)
    fl(g, 'M 114 268 C 118 272 122 276 124 280 C 126 284 122 286 118 284 C 114 282 112 278 114 268 Z', skinGrad, false);
    // Godfather pointing hand
    fl(g, 'M 346 212 C 350 210 354 207 356 204 C 358 200 354 200 350 202 C 346 204 344 208 346 212 Z', skinGrad, false);
    // Curled fingers
    fl(g, 'M 344 220 C 348 224 350 228 348 232 C 346 236 342 234 340 230 Z', skinGrad, false);
    fl(g, 'M 346 218 C 350 222 352 226 350 230 C 348 234 344 232 342 228 Z', skinGrad, false);
    fl(g, 'M 348 216 C 346 220 342 224 338 222 C 334 220 334 216 338 214 C 342 212 346 214 348 216 Z', skinGrad, false);
    // Godfather left hand
    fl(g, 'M 180 292 C 178 298 176 304 174 308 C 172 312 174 314 178 312 C 182 310 184 306 184 302 L 180 292 Z', skinGrad, false);
  },

  // =====================================================================
  // Layer 8: Stone wall colors, background fills, window
  // =====================================================================
  (g, a, defs) => {
    // === STONE WALL base ===
    const wallGrad = gd(defs, 'l', [
      ['0%', '#D4C49C', 1],
      ['50%', '#C8B88C', 1],
      ['100%', '#B8A87C', 1]
    ], { x1: 0, y1: 0, x2: 360, y2: 450 });

    feo(g, 'rect', { x: 0, y: 0, width: 360, height: 425, fill: wallGrad }, 0.35, a);

    // === INDIVIDUAL STONES with varying colors and natural tones ===
    // Row 1
    const stoneColors = ['#C8A96E', '#D0BA88', '#B8A060', '#D4C09A', '#C0A470', '#BCA268'];
    // Row 1 stones
    feo(g, 'rect', { x: 4, y: 4, width: 52, height: 34, rx: 3, fill: '#C8A96E' }, 0.28, false);
    feo(g, 'rect', { x: 66, y: 2, width: 58, height: 34, rx: 3, fill: '#D4C09A' }, 0.22, false);
    feo(g, 'rect', { x: 200, y: 4, width: 92, height: 38, rx: 3, fill: '#B8A060' }, 0.2, false);
    feo(g, 'rect', { x: 304, y: 2, width: 54, height: 36, rx: 3, fill: '#C8A96E' }, 0.24, false);
    // Row 2 stones
    feo(g, 'rect', { x: 2, y: 46, width: 66, height: 30, rx: 3, fill: '#D0BA88' }, 0.2, false);
    feo(g, 'rect', { x: 78, y: 44, width: 50, height: 30, rx: 3, fill: '#B8A060' }, 0.24, false);
    feo(g, 'rect', { x: 202, y: 46, width: 92, height: 30, rx: 3, fill: '#C0A470' }, 0.22, false);
    feo(g, 'rect', { x: 304, y: 44, width: 54, height: 36, rx: 3, fill: '#D4C09A' }, 0.2, false);
    // Row 3 stones
    feo(g, 'rect', { x: 2, y: 86, width: 54, height: 30, rx: 3, fill: '#BCA268' }, 0.22, false);
    feo(g, 'rect', { x: 66, y: 84, width: 54, height: 30, rx: 3, fill: '#C8A96E' }, 0.2, false);
    feo(g, 'rect', { x: 302, y: 86, width: 56, height: 30, rx: 3, fill: '#D0BA88' }, 0.22, false);
    // Row 4 stones
    feo(g, 'rect', { x: 2, y: 124, width: 62, height: 30, rx: 3, fill: '#C0A470' }, 0.22, false);
    feo(g, 'rect', { x: 74, y: 122, width: 54, height: 30, rx: 3, fill: '#D4C09A' }, 0.2, false);
    feo(g, 'rect', { x: 138, y: 120, width: 56, height: 34, rx: 3, fill: '#B8A060' }, 0.16, false);
    feo(g, 'rect', { x: 302, y: 124, width: 56, height: 30, rx: 3, fill: '#C8A96E' }, 0.22, false);
    // Row 5 stones (sides only)
    feo(g, 'rect', { x: 2, y: 164, width: 44, height: 30, rx: 3, fill: '#BCA268' }, 0.2, false);
    feo(g, 'rect', { x: 312, y: 162, width: 46, height: 34, rx: 3, fill: '#C0A470' }, 0.22, false);
    // Row 6 stones
    feo(g, 'rect', { x: 2, y: 204, width: 36, height: 30, rx: 3, fill: '#D0BA88' }, 0.2, false);
    feo(g, 'rect', { x: 318, y: 204, width: 40, height: 30, rx: 3, fill: '#BCA268' }, 0.22, false);
    // Row 7 stones
    feo(g, 'rect', { x: 2, y: 244, width: 30, height: 30, rx: 3, fill: '#C8A96E' }, 0.18, false);
    feo(g, 'rect', { x: 322, y: 244, width: 36, height: 30, rx: 3, fill: '#D4C09A' }, 0.2, false);

    // Stone mortar texture
    pps(g, [
      'M 0 42 L 130 42', 'M 198 42 L 360 42',
      'M 0 82 L 130 82', 'M 198 80 L 360 80',
      'M 0 120 L 200 120', 'M 296 120 L 360 120',
      'M 0 160 L 200 160', 'M 296 158 L 360 158',
      'M 0 200 L 50 200', 'M 312 200 L 360 200',
      'M 0 240 L 42 240', 'M 318 240 L 360 240',
      'M 0 280 L 36 280', 'M 322 280 L 360 280'
    ], false, 0.5, '#A09070');
    // Vertical mortar
    pps(g, [
      'M 60 0 L 60 42', 'M 128 0 L 128 82',
      'M 72 44 L 72 82', 'M 130 82 L 130 120',
      'M 300 0 L 300 42', 'M 296 42 L 296 82',
      'M 302 82 L 302 120', 'M 68 122 L 68 160',
      'M 132 120 L 132 160', 'M 198 120 L 198 160',
      'M 302 122 L 302 160', 'M 50 162 L 50 200',
      'M 312 160 L 312 200', 'M 42 202 L 42 240',
      'M 318 202 L 318 240', 'M 36 242 L 36 280',
      'M 322 242 L 322 280'
    ], false, 0.4, '#A09070');

    // Stone color variation patches (natural)
    feo(g, 'ellipse', { cx: 30, cy: 22, rx: 14, ry: 8, fill: '#D8C090' }, 0.1, false);
    feo(g, 'ellipse', { cx: 96, cy: 18, rx: 16, ry: 8, fill: '#C0A060' }, 0.08, false);
    feo(g, 'ellipse', { cx: 250, cy: 28, rx: 20, ry: 10, fill: '#D8C890' }, 0.08, false);
    feo(g, 'ellipse', { cx: 330, cy: 20, rx: 14, ry: 8, fill: '#B89858' }, 0.1, false);
    feo(g, 'ellipse', { cx: 36, cy: 62, rx: 16, ry: 8, fill: '#C8B078' }, 0.08, false);
    feo(g, 'ellipse', { cx: 108, cy: 60, rx: 12, ry: 7, fill: '#D0B880' }, 0.1, false);

    // === WINDOW ===
    // Frame fill — white
    feo(g, 'rect', { x: 200, y: 10, width: 94, height: 98, rx: 2, fill: '#FAFAFA' }, 1.0, a);
    // Glass panes — sky blue with subtle variation
    const glassGrad1 = gd(defs, 'l', [
      ['0%', '#90CAF9', 1],
      ['100%', '#64B5F6', 1]
    ], { x1: 204, y1: 14, x2: 245, y2: 57 });
    const glassGrad2 = gd(defs, 'l', [
      ['0%', '#64B5F6', 1],
      ['100%', '#42A5F5', 1]
    ], { x1: 249, y1: 14, x2: 290, y2: 57 });

    feo(g, 'rect', { x: 206, y: 16, width: 39, height: 41, rx: 1, fill: glassGrad1 }, 1.0, false);
    feo(g, 'rect', { x: 249, y: 16, width: 39, height: 41, rx: 1, fill: glassGrad2 }, 1.0, false);
    feo(g, 'rect', { x: 206, y: 61, width: 39, height: 41, rx: 1, fill: '#42A5F5' }, 1.0, false);
    feo(g, 'rect', { x: 249, y: 61, width: 39, height: 41, rx: 1, fill: '#90CAF9' }, 1.0, false);
    // Window dividers
    feo(g, 'rect', { x: 245, y: 14, width: 4, height: 90, fill: '#FAFAFA' }, 1.0, false);
    feo(g, 'rect', { x: 204, y: 57, width: 86, height: 4, fill: '#FAFAFA' }, 1.0, false);
    // Window ledge
    const ledgeGrad = gd(defs, 'l', [
      ['0%', '#E8E8E8', 1],
      ['100%', '#D0D0D0', 1]
    ], { x1: 196, y1: 108, x2: 298, y2: 118 });
    feo(g, 'rect', { x: 196, y: 108, width: 102, height: 10, rx: 1, fill: ledgeGrad }, 1.0, false);
    // Window reflection
    hi(g, 'M 210 20 L 230 20 L 224 50 L 210 50 Z', 0.15, false);
    hi(g, 'M 254 66 L 274 66 L 268 96 L 254 96 Z', 0.1, false);

    // === WALL SHADOW (right edge, darker corner) ===
    const shadowGrad = gd(defs, 'l', [
      ['0%', '#000000', 0],
      ['100%', '#000000', 0.1]
    ], { x1: 300, y1: 0, x2: 360, y2: 0 });
    feo(g, 'rect', { x: 300, y: 0, width: 60, height: 425, fill: shadowGrad }, 1.0, false);

    // === GROUND ===
    const groundGrad = gd(defs, 'l', [
      ['0%', '#A0A0A0', 1],
      ['100%', '#8A8A8A', 1]
    ], { x1: 0, y1: 425, x2: 0, y2: 450 });
    feo(g, 'rect', { x: 0, y: 425, width: 360, height: 25, fill: groundGrad }, 1.0, false);

    // === WATCH fill ===
    fe(g, 'circle', { cx: 188, cy: 271, r: 3, fill: '#607D8B' }, false);
    fe(g, 'circle', { cx: 188, cy: 271, r: 1.5, fill: '#B0BEC5' }, false);

    // Sunlight warm wash on wall (upper area)
    feo(g, 'ellipse', { cx: 100, cy: 120, rx: 80, ry: 50, fill: '#FFE082' }, 0.06, false);
    feo(g, 'ellipse', { cx: 320, cy: 160, rx: 40, ry: 60, fill: '#FFD54F' }, 0.04, false);
  },

  // =====================================================================
  // Layer 9: Polish — catchlights, shadows, highlights, fine details
  // =====================================================================
  (g, a, defs) => {
    // === EYE DETAILS — whites, shines ===

    // Godmother eye whites
    fl(g, 'M 92 84 C 94 78 98 76 103 78 C 108 80 110 84 108 89 C 106 93 100 95 95 93 C 92 91 90 88 92 84 Z', '#FFFFFF', false);
    fl(g, 'M 114 83 C 116 77 120 75 125 77 C 130 79 132 83 130 88 C 128 92 122 94 117 92 C 114 90 112 87 114 83 Z', '#FFFFFF', false);
    // Godmother catchlights
    fe(g, 'circle', { cx: 99, cy: 84, r: 1.8, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 121, cy: 83, r: 1.8, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 103, cy: 88, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 125, cy: 87, r: 0.8, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Baby eye whites
    fl(g, 'M 86 160 C 88 154 92 152 97 154 C 102 156 104 162 100 166 C 96 170 86 168 86 160 Z', '#FFFFFF', false);
    fl(g, 'M 104 159 C 106 153 110 151 115 153 C 120 155 122 161 118 165 C 114 169 104 167 104 159 Z', '#FFFFFF', false);
    // Baby catchlights (larger — baby eyes are bigger)
    fe(g, 'circle', { cx: 92, cy: 159, r: 2.0, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 110, cy: 158, r: 2.0, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 96, cy: 163, r: 0.9, fill: '#FFFFFF', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 114, cy: 162, r: 0.9, fill: '#FFFFFF', opacity: '0.7' }, false);

    // Godfather eye whites
    fl(g, 'M 241 84 C 243 80 247 78 251 80 C 255 82 255 88 252 92 C 248 94 242 92 241 86 Z', '#FFFFFF', false);
    fl(g, 'M 263 84 C 265 80 269 78 273 80 C 277 82 277 88 274 92 C 270 94 264 92 263 86 Z', '#FFFFFF', false);
    // Godfather catchlights (behind glasses)
    fe(g, 'circle', { cx: 246, cy: 85, r: 1.6, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 268, cy: 85, r: 1.6, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 250, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 272, cy: 89, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);

    // === GLASSES GLARE — subtle white rectangles ===
    hi(g, 'M 240 80 L 248 80 L 246 86 L 240 86 Z', 0.2, false);
    hi(g, 'M 262 80 L 270 80 L 268 86 L 262 86 Z', 0.2, false);
    // Glasses frame shadow on face
    sh(g, 'M 238 96 L 256 96 L 256 99 L 238 99 Z', 0.06, false);
    sh(g, 'M 260 96 L 278 96 L 278 99 L 260 99 Z', 0.06, false);

    // === SMILE FILLS ===
    // Godmother — wide joyful smile with teeth
    fl(g,
      'M 92 120 C 98 126 106 128 114 128 C 120 126 124 122 126 118 L 122 118 L 94 118 Z',
      '#D4766A', false);
    // Upper teeth white
    fl(g, 'M 96 114 L 120 114 L 120 118 L 96 118 Z', '#FAFAFA', false);
    // Tooth lines
    pps(g, [
      'M 102 114 L 102 118',
      'M 108 114 L 108 118',
      'M 114 114 L 114 118'
    ], false, 0.3, '#E0E0E0');

    // Godmother lip color
    const lipGrad = gd(defs, 'l', [
      ['0%', '#C9686A', 1],
      ['100%', '#B85860', 1]
    ], { x1: 90, y1: 118, x2: 130, y2: 130 });
    fo(g, 'M 92 120 C 98 126 106 128 114 128 C 120 126 124 122 126 118 C 122 116 108 114 92 120 Z', lipGrad, 0.8, false);

    // Baby smile
    fl(g,
      'M 94 178 C 98 182 104 183 110 182 C 112 180 114 178 114 178 L 92 176 Z',
      '#F0A0A0', false);

    // Godfather mouth
    fl(g,
      'M 246 122 C 252 126 260 128 268 126 C 272 124 274 122 276 120 L 244 120 Z',
      '#C08070', false);

    // === CHEEK BLUSH ===
    // Godmother
    feo(g, 'ellipse', { cx: 90, cy: 112, rx: 8, ry: 4, fill: '#FFAB91' }, 0.25, a);
    feo(g, 'ellipse', { cx: 126, cy: 112, rx: 8, ry: 4, fill: '#FFAB91' }, 0.25, a);
    // Baby
    feo(g, 'ellipse', { cx: 86, cy: 174, rx: 6, ry: 3.5, fill: '#FFB4A0' }, 0.35, a);
    feo(g, 'ellipse', { cx: 116, cy: 174, rx: 6, ry: 3.5, fill: '#FFB4A0' }, 0.35, a);
    // Godfather (subtle)
    feo(g, 'ellipse', { cx: 240, cy: 110, rx: 7, ry: 3, fill: '#FFAB91' }, 0.12, false);
    feo(g, 'ellipse', { cx: 276, cy: 110, rx: 7, ry: 3, fill: '#FFAB91' }, 0.12, false);

    // === GOATEE / BEARD shadow ===
    sh(g,
      'M 244 118 C 248 122 254 126 258 128 C 262 126 268 122 272 118 L 268 124 C 264 128 258 132 254 134 C 250 132 244 128 240 124 Z',
      0.15, false);

    // === FACE SHADOWS ===
    // Godmother — under chin
    sh(g,
      'M 96 138 C 100 140 104 142 108 142 C 112 142 116 140 120 138 L 122 148 L 94 148 Z',
      0.08, false);
    // Godmother — nose shadow
    sh(g,
      'M 110 88 C 112 92 114 96 114 100 L 118 100 C 118 96 116 92 114 88 Z',
      0.06, false);
    // Godfather — under chin
    sh(g,
      'M 248 136 C 252 138 256 140 258 140 C 260 140 264 138 268 136 L 270 148 L 246 148 Z',
      0.08, false);
    // Baby — under chin
    sh(g,
      'M 92 186 C 96 188 100 190 104 190 C 108 188 110 186 112 184 L 114 192 L 88 192 Z',
      0.06, false);

    // === BODY SHADOWS ===
    // Godmother dress — deep fold shadows
    sh(g,
      'M 74 200 C 72 220 70 250 68 280 C 66 310 66 350 66 390 L 72 390 C 72 350 72 310 74 280 C 76 250 78 220 80 200 Z',
      0.1, false);
    sh(g,
      'M 128 200 C 130 220 132 250 134 280 C 136 310 138 350 138 390 L 144 390 C 144 350 142 310 140 280 C 138 250 136 220 134 200 Z',
      0.08, false);
    // Godfather shirt — shadow under collar
    sh(g,
      'M 234 164 C 244 170 254 172 264 170 C 270 168 276 166 282 164 L 286 172 L 230 172 Z',
      0.06, false);
    // Pants crease shadows
    sh(g,
      'M 220 320 C 222 340 224 360 226 380 L 232 380 C 230 360 228 340 226 320 Z',
      0.06, false);
    sh(g,
      'M 282 320 C 284 340 286 360 286 380 L 292 380 C 292 360 290 340 288 320 Z',
      0.06, false);

    // === HIGHLIGHTS ===
    // Godmother face highlight (forehead)
    hi(g,
      'M 98 60 C 104 56 112 56 118 60 C 122 64 124 70 122 76 L 94 76 C 92 70 94 64 98 60 Z',
      0.08, false);
    // Godmother shoulder highlight
    hi(g,
      'M 66 170 C 68 166 72 164 76 166 C 80 168 82 172 80 176 L 66 176 Z',
      0.08, false);
    // Baby forehead highlight
    hi(g,
      'M 92 140 C 96 136 102 134 108 136 C 112 138 114 142 112 148 L 88 148 Z',
      0.1, false);
    // Godfather forehead highlight
    hi(g,
      'M 248 56 C 254 52 262 52 268 56 C 272 60 274 66 272 72 L 244 72 C 242 66 244 60 248 56 Z',
      0.06, false);
    // Shirt highlight (center-left chest)
    hi(g,
      'M 230 180 C 236 178 244 176 252 178 C 258 180 260 186 258 192 L 228 192 Z',
      0.08, false);

    // === HAIR HIGHLIGHTS ===
    // Godmother — light strand reflection
    hi(g,
      'M 88 52 C 94 48 102 46 108 48 L 108 54 L 88 58 Z',
      0.08, false);
    // Godfather — top of head sheen
    hi(g,
      'M 248 44 C 256 40 266 42 272 48 L 268 54 L 244 52 Z',
      0.06, false);

    // === SHIRT MICRO-DOT pattern (godfather — very subtle) ===
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 6; col++) {
        const cx = 218 + col * 13 + (row % 2 === 0 ? 0 : 6);
        const cy = 174 + row * 11;
        if (cy < 308) {
          feo(g, 'circle', { cx, cy, r: 0.35, fill: '#BDBDBD' }, 0.4, false);
        }
      }
    }

    // === SHOE HINTS at bottom ===
    // Godmother shoes (navy, matching dress)
    feo(g, 'ellipse', { cx: 72, cy: 428, rx: 14, ry: 4, fill: '#1A237E' }, 0.5, false);
    feo(g, 'ellipse', { cx: 132, cy: 428, rx: 14, ry: 4, fill: '#1A237E' }, 0.5, false);
    // Godfather shoes (dark)
    feo(g, 'ellipse', { cx: 228, cy: 428, rx: 16, ry: 5, fill: '#263238' }, 0.5, false);
    feo(g, 'ellipse', { cx: 280, cy: 428, rx: 16, ry: 5, fill: '#263238' }, 0.5, false);

    // === GROUND SHADOWS under figures ===
    feo(g, 'ellipse', { cx: 100, cy: 428, rx: 50, ry: 4, fill: '#000000' }, 0.08, false);
    feo(g, 'ellipse', { cx: 258, cy: 428, rx: 50, ry: 4, fill: '#000000' }, 0.08, false);

    // === WINDOW FRAME divider (crisp over glass) ===
    feo(g, 'rect', { x: 245, y: 14, width: 4, height: 90, fill: '#FAFAFA' }, 1.0, false);
    feo(g, 'rect', { x: 204, y: 57, width: 86, height: 4, fill: '#FAFAFA' }, 1.0, false);

    // === NECKLACE glint on godmother ===
    fe(g, 'circle', { cx: 108, cy: 160, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // === AMBIENT LIGHT — warm sunlight wash ===
    feo(g, 'ellipse', { cx: 180, cy: 200, rx: 140, ry: 100, fill: '#FFF8E1' }, 0.03, false);

    // === EDGE VIGNETTE (subtle darkening at corners) ===
    const vigL = gd(defs, 'l', [
      ['0%', '#000000', 0.06],
      ['100%', '#000000', 0]
    ], { x1: 0, y1: 0, x2: 60, y2: 0 });
    const vigR = gd(defs, 'l', [
      ['0%', '#000000', 0],
      ['100%', '#000000', 0.06]
    ], { x1: 300, y1: 0, x2: 360, y2: 0 });
    const vigT = gd(defs, 'l', [
      ['0%', '#000000', 0.04],
      ['100%', '#000000', 0]
    ], { x1: 0, y1: 0, x2: 0, y2: 40 });
    feo(g, 'rect', { x: 0, y: 0, width: 60, height: 450, fill: vigL }, 1.0, false);
    feo(g, 'rect', { x: 300, y: 0, width: 60, height: 450, fill: vigR }, 1.0, false);
    feo(g, 'rect', { x: 0, y: 0, width: 360, height: 40, fill: vigT }, 1.0, false);

    // === BABY ARM / HAND reaching out ===
    pps(g, [
      'M 112 196 C 116 194 120 190 124 188',
      'M 124 188 C 126 186 128 184 128 182'
    ], a, 0.6, '#D4A882');
    // Baby tiny fingers
    pps(g, [
      'M 124 188 C 126 186 128 188 126 190',
      'M 126 186 C 128 184 130 186 128 188',
      'M 128 184 C 130 182 132 184 130 186'
    ], false, 0.4, '#D4A882');
  }
];
