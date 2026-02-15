const mddLayers = [
  // =====================================================================
  // Layer 0: Composition guides
  // =====================================================================
  (g, a, defs) => {
    // Wall horizontal band
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a, lt);
    // Miguel zone
    pp(g, ['M 60 20 L 60 300', 'M 220 20 L 220 300'], a, lt);
    // Miguel vertical center
    pp(g, ['M 140 20 L 140 260'], a, lt);
    // Head circle guide
    pp(g, ['M 140 52 C 168 52 188 72 188 96 C 188 120 168 140 140 140 C 112 140 92 120 92 96 C 92 72 112 52 140 52 Z'], a, lt);
    // Father zone
    pp(g, ['M 280 40 L 280 200', 'M 360 40 L 360 200'], a, lt);
    // Ground line
    pp(g, ['M 0 380 L 360 380'], a, lt);
    // Village skyline guide
    pp(g, ['M 0 120 L 360 120'], a, lt);
    // Shoulder line
    pp(g, ['M 80 170 L 200 170'], a, lt);
    // Diagonal lean guide
    pp(g, ['M 140 96 L 140 260'], a, lt);
    // Arm reach guides
    pp(g, ['M 92 190 L 78 256', 'M 188 190 L 202 256'], a, lt);
  },

  // =====================================================================
  // Layer 1: Body outlines - Miguel and father
  // =====================================================================
  (g, a, defs) => {
    // Head - large round child head with slight tilt
    pp(g, [
      'M 140 48 C 148 46 156 46 164 48 C 172 50 178 56 182 64 C 185 72 186 80 186 88 C 186 96 184 104 180 112 C 176 118 170 124 164 130 C 158 134 150 138 142 140 C 134 140 126 138 118 134 C 112 130 106 124 102 118 C 98 112 96 104 96 96 C 96 88 96 80 98 72 C 100 64 104 58 110 52 C 116 48 126 46 134 46 C 136 46 138 47 140 48 Z'
    ], a);
    // Neck - short, child proportions with slight forward lean
    pp(g, [
      'M 128 138 C 126 142 125 148 124 154 C 124 156 124 158 126 160',
      'M 152 138 C 154 142 155 148 156 154 C 156 156 156 158 154 160'
    ], a);
    // Shoulders and torso - leaning forward on wall
    pp(g, [
      'M 86 188 C 90 180 96 174 104 168 C 112 163 122 160 132 158 C 138 157 144 157 150 158 C 160 160 170 163 178 168 C 186 174 192 180 196 188 C 198 194 198 202 198 210 C 198 220 198 230 198 240 C 198 248 196 256 196 260 L 84 260 C 84 256 84 248 84 240 C 84 230 84 220 84 210 C 84 202 84 194 86 188 Z'
    ], a);
    // Left arm - resting on wall top, bent at elbow
    pp(g, [
      'M 90 192 C 86 198 82 206 78 214 C 74 222 72 230 70 238 C 68 244 68 250 70 254 C 72 256 76 258 80 256 C 86 254 94 250 102 246 C 108 244 112 242 114 244'
    ], a);
    // Left arm underside
    pp(g, [
      'M 94 198 C 90 206 86 214 82 222 C 80 228 78 236 78 242 C 78 248 80 254 84 256'
    ], a);
    // Right arm - resting on wall, holding toy
    pp(g, [
      'M 190 192 C 194 198 198 206 202 214 C 206 222 208 230 210 238 C 212 244 212 250 210 254 C 208 256 204 258 200 256 C 194 254 186 250 178 246 C 172 244 168 242 166 244'
    ], a);
    // Right arm underside
    pp(g, [
      'M 186 198 C 190 206 194 214 198 222 C 200 228 202 236 202 242 C 202 248 200 254 196 256'
    ], a);
    // Father - partial head peeking from right
    pp(g, [
      'M 298 104 C 298 96 300 88 304 82 C 308 76 314 72 320 68 C 326 66 332 66 338 68 C 344 72 348 76 352 82 C 354 88 356 96 356 104 C 356 110 354 116 350 122 C 346 128 342 132 336 136 C 332 138 328 140 324 142'
    ], a);
    // Father neck + shoulders partial
    pp(g, [
      'M 316 140 C 314 146 314 150 314 154',
      'M 336 140 C 338 146 338 150 338 154'
    ], a);
    pp(g, [
      'M 288 178 C 294 170 302 164 310 158 C 316 155 322 154 328 154 C 334 154 340 156 346 158 C 354 164 360 170 360 178 L 360 260 L 280 260 Z'
    ], a);
    // Father right ear hint
    pp(g, [
      'M 356 94 C 360 90 362 94 362 100 C 362 106 360 110 358 106'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face - extremely detailed
  // =====================================================================
  (g, a, defs) => {
    // Left eye - round child eye, almond shape
    pp(g, [
      'M 118 86 C 120 80 124 76 130 76 C 134 76 138 78 140 82 C 142 86 142 90 140 94 C 138 98 134 100 130 100 C 124 100 120 98 118 94 C 117 92 117 88 118 86 Z'
    ], a);
    // Left upper eyelid thickness
    pp(g, [
      'M 118 86 C 120 82 124 78 130 77 C 136 78 140 82 141 86'
    ], a);
    // Left lower eyelid
    pp(g, [
      'M 119 92 C 122 96 126 98 130 99 C 134 98 138 96 140 92'
    ], a, lt);
    // Left iris outline
    pp(g, [
      'M 126 82 C 130 80 134 80 136 82 C 138 86 138 90 136 94 C 134 96 130 96 126 94 C 124 90 124 86 126 82 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 130, cy: 89, r: 4.2, fill: a ? HL : '#2D1B0E' }, a);
    // Left iris color ring
    fe(g, 'circle', { cx: 130, cy: 89, r: 6.5, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': a ? HW : '1.2' }, a);

    // Right eye
    pp(g, [
      'M 146 86 C 148 80 152 76 158 76 C 162 76 166 78 168 82 C 170 86 170 90 168 94 C 166 98 162 100 158 100 C 152 100 148 98 146 94 C 145 92 145 88 146 86 Z'
    ], a);
    // Right upper eyelid thickness
    pp(g, [
      'M 146 86 C 148 82 152 78 158 77 C 164 78 168 82 169 86'
    ], a);
    // Right lower eyelid
    pp(g, [
      'M 147 92 C 150 96 154 98 158 99 C 162 98 166 96 168 92'
    ], a, lt);
    // Right iris outline
    pp(g, [
      'M 154 82 C 158 80 162 80 164 82 C 166 86 166 90 164 94 C 162 96 158 96 154 94 C 152 90 152 86 154 82 Z'
    ], a);
    // Right pupil
    fe(g, 'circle', { cx: 158, cy: 89, r: 4.2, fill: a ? HL : '#2D1B0E' }, a);
    // Right iris color ring
    fe(g, 'circle', { cx: 158, cy: 89, r: 6.5, fill: 'none', stroke: a ? HL : '#5D4037', 'stroke-width': a ? HW : '1.2' }, a);

    // Left eyelid crease
    pp(g, ['M 116 80 C 120 76 126 74 132 76 C 136 77 140 80 142 84'], a, lt);
    // Right eyelid crease
    pp(g, ['M 144 84 C 146 80 150 77 154 76 C 160 74 166 76 170 80'], a, lt);

    // Left eyebrow - natural arch, multi-stroke
    pp(g, ['M 114 74 C 118 68 126 66 134 68 C 138 70 140 72 142 76'], a);
    pp(g, ['M 116 76 C 120 70 128 68 136 70'], a, lt);
    // Right eyebrow
    pp(g, ['M 146 76 C 148 72 152 70 158 68 C 164 66 172 68 176 74'], a);
    pp(g, ['M 148 70 C 154 68 162 68 168 72'], a, lt);

    // Nose bridge - subtle curve
    pp(g, ['M 140 80 C 139 86 138 92 137 98'], a, lt);
    pp(g, ['M 142 80 C 141 86 140 92 139 98'], a, lt);
    // Nose tip - rounded child nose
    pp(g, [
      'M 136 98 C 134 102 132 106 130 108 C 132 112 136 114 140 115 C 144 114 148 112 150 108 C 148 106 146 102 144 98'
    ], a);
    // Nostril curves
    pp(g, [
      'M 132 110 C 134 112 136 113 138 112',
      'M 148 110 C 146 112 144 113 142 112'
    ], a, lt);
    // Nose bottom shadow line
    pp(g, ['M 133 108 C 136 110 140 111 144 110 C 147 109 149 108 150 107'], a, lt);

    // Mouth - slightly open, cute smile showing teeth
    // Upper lip
    pp(g, [
      'M 122 120 C 126 116 132 114 136 115 C 138 116 140 118 140 118 C 140 118 142 116 144 115 C 148 114 154 116 158 120'
    ], a);
    // Upper lip cupid's bow detail
    pp(g, ['M 136 116 C 138 114 140 113 142 114 C 143 115 144 116 144 116'], a, lt);
    // Lower lip - full child lip
    pp(g, [
      'M 122 120 C 124 126 128 132 134 134 C 138 136 142 136 146 134 C 152 132 156 126 158 120'
    ], a);
    // Mouth opening line
    pp(g, ['M 124 120 L 156 120'], a);
    // Upper teeth row - small child teeth
    pp(g, [
      'M 128 120 L 128 124',
      'M 133 120 L 133 125',
      'M 138 120 L 138 126',
      'M 143 120 L 143 126',
      'M 148 120 L 148 125',
      'M 153 120 L 153 124'
    ], a, lt);
    // Lip corners
    pp(g, [
      'M 122 120 C 120 120 118 122 118 124',
      'M 158 120 C 160 120 162 122 162 124'
    ], a, lt);

    // Left ear - child ear, slightly prominent
    pp(g, [
      'M 96 84 C 92 80 88 82 86 88 C 84 94 84 100 86 106 C 88 110 92 112 96 108'
    ], a);
    // Left ear inner cartilage
    pp(g, [
      'M 92 86 C 90 90 88 94 88 98 C 88 102 90 106 92 108',
      'M 90 92 C 88 96 88 100 90 104'
    ], a, lt);
    // Left ear tragus
    pp(g, ['M 96 96 C 94 94 92 96 94 98'], a, lt);

    // Right ear
    pp(g, [
      'M 186 84 C 190 80 194 82 196 88 C 198 94 198 100 196 106 C 194 110 190 112 186 108'
    ], a);
    // Right ear inner cartilage
    pp(g, [
      'M 190 86 C 192 90 194 94 194 98 C 194 102 192 106 190 108',
      'M 192 92 C 194 96 194 100 192 104'
    ], a, lt);
    // Right ear tragus
    pp(g, ['M 186 96 C 188 94 190 96 188 98'], a, lt);

    // Chin dimple hint
    pp(g, ['M 138 140 C 140 142 142 142 142 140'], a, lt);

    // Nasolabial folds (very subtle on a child)
    pp(g, [
      'M 126 108 C 124 112 122 116 122 118',
      'M 154 108 C 156 112 158 116 158 118'
    ], a, lt);

    // Father partial face - one eye
    pp(g, [
      'M 314 96 C 316 90 322 88 328 92 C 332 96 330 104 326 106 C 322 108 318 104 316 100 Z'
    ], a);
    fe(g, 'circle', { cx: 324, cy: 99, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Father eyebrow
    pp(g, ['M 312 88 C 318 84 326 84 334 88'], a);
    // Father nose hint
    pp(g, ['M 326 100 C 324 108 322 114 320 118'], a, lt);
    // Father beard stubble - dense dots
    const bd = [
      [308, 122], [312, 126], [316, 130], [320, 133], [324, 135],
      [328, 136], [332, 134], [336, 132], [340, 128], [342, 124],
      [316, 136], [320, 138], [324, 140], [328, 139], [332, 138],
      [312, 132], [316, 134], [326, 132], [334, 130], [338, 126],
      [310, 128], [314, 130], [318, 132], [322, 136], [326, 138],
      [330, 136], [334, 134], [336, 130], [340, 126], [338, 128],
      [320, 140], [324, 142], [328, 140], [326, 134]
    ];
    bd.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a);
    });
    // Father mouth hint
    pp(g, ['M 318 120 C 322 118 326 118 330 120'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair with strand detail + puffy jacket + hood
  // =====================================================================
  (g, a, defs) => {
    // Hair outline - dark brown, short, with natural volume
    pp(g, [
      'M 100 82 C 98 70 100 58 106 48 C 112 40 120 34 130 32 C 138 30 146 30 154 32 C 162 34 170 40 176 48 C 182 58 184 70 182 82'
    ], a);
    // Hair inner volume layers
    pp(g, [
      'M 104 78 C 106 66 112 54 122 46 C 132 40 142 38 152 40 C 162 44 170 54 174 66 C 176 72 176 78 174 82'
    ], a);
    // Hair strand detail - many individual strands for realism
    pp(g, [
      'M 112 36 C 118 32 126 30 134 32',
      'M 130 30 C 138 28 146 28 154 32',
      'M 106 42 C 114 36 124 34 134 36',
      'M 132 34 C 142 32 152 34 160 40',
      'M 104 50 C 112 44 122 40 132 42',
      'M 136 40 C 146 38 156 42 164 48',
      'M 102 58 C 110 52 120 48 130 50',
      'M 134 48 C 144 46 154 50 162 56',
      'M 100 66 C 108 60 118 56 128 58',
      'M 132 56 C 142 54 152 58 160 64',
      'M 102 72 C 110 66 120 62 130 64',
      'M 134 62 C 144 60 154 64 162 70'
    ], a, lt);
    // Hair wisp on forehead - natural fall
    pp(g, [
      'M 122 42 C 126 46 132 48 138 46 C 142 44 146 42 148 44',
      'M 118 50 C 122 54 128 56 134 54 C 138 52 140 50 142 52',
      'M 116 58 C 120 62 126 64 132 62',
      'M 148 44 C 152 48 158 52 162 50'
    ], a, lt);
    // Hair side texture - left temple
    pp(g, [
      'M 100 76 C 102 72 106 68 110 66',
      'M 98 82 C 100 78 104 74 108 72',
      'M 96 86 C 98 82 102 78 106 76'
    ], a, lt);
    // Hair side texture - right temple
    pp(g, [
      'M 180 76 C 178 72 174 68 170 66',
      'M 182 82 C 180 78 176 74 172 72',
      'M 184 86 C 182 82 178 78 174 76'
    ], a, lt);
    // Hair crown detail
    pp(g, [
      'M 126 34 C 132 30 140 28 148 30 C 154 32 158 36 160 40',
      'M 120 38 C 128 34 136 32 144 34'
    ], a, lt);
    // Hair nape at back of head
    pp(g, [
      'M 108 126 C 106 120 106 112 108 106',
      'M 172 126 C 174 120 174 112 172 106'
    ], a, lt);

    // Jacket body - navy puffy quilted with detailed outline
    pp(g, [
      'M 86 188 C 90 180 98 172 108 166 C 118 162 130 158 140 158 C 150 158 162 162 172 166 C 182 172 190 180 194 188 L 198 260 L 84 260 Z'
    ], a);
    // Horizontal quilting lines - puffy tube sections
    pp(g, [
      'M 88 196 C 100 193 120 191 140 190 C 160 191 180 193 192 196',
      'M 86 210 C 100 207 120 205 140 204 C 160 205 180 207 194 210',
      'M 85 224 C 100 221 120 219 140 218 C 160 219 180 221 195 224',
      'M 84 238 C 100 235 120 233 140 232 C 160 233 180 235 196 238',
      'M 84 252 C 100 249 120 247 140 246 C 160 247 180 249 196 252'
    ], a, lt);
    // Quilting side seams - puffiness on left
    pp(g, [
      'M 88 196 C 86 200 85 204 86 210',
      'M 86 210 C 84 216 84 220 85 224',
      'M 85 224 C 83 230 83 234 84 238',
      'M 84 238 C 82 244 82 248 84 252'
    ], a, lt);
    // Quilting side seams - puffiness on right
    pp(g, [
      'M 192 196 C 194 200 195 204 194 210',
      'M 194 210 C 196 216 196 220 195 224',
      'M 195 224 C 197 230 197 234 196 238',
      'M 196 238 C 198 244 198 248 196 252'
    ], a, lt);
    // Quilting vertical center line
    pp(g, ['M 140 190 L 140 260'], a, lt);

    // Hood - draped behind neck with volume
    pp(g, [
      'M 98 166 C 94 162 88 162 84 168 C 80 174 80 182 84 188 C 88 192 94 194 100 192',
      'M 182 166 C 186 162 192 162 196 168 C 200 174 200 182 196 188 C 192 192 186 194 180 192'
    ], a);
    // Hood back curve
    pp(g, [
      'M 100 192 C 112 196 126 198 140 198 C 154 198 168 196 180 192'
    ], a);
    // Hood lining - orange/camel visible strip
    pp(g, [
      'M 100 188 C 112 193 126 195 140 196 C 154 195 168 193 180 188'
    ], a);
    pp(g, [
      'M 102 186 C 114 190 128 192 140 192 C 152 192 166 190 178 186'
    ], a);
    // Hood lining inner edge
    pp(g, [
      'M 104 184 C 116 188 130 190 140 190 C 150 190 164 188 176 184'
    ], a, lt);
    // Hood outer fabric folds
    pp(g, [
      'M 86 172 C 88 168 92 166 96 168',
      'M 194 172 C 192 168 188 166 184 168'
    ], a, lt);

    // Emblem circle on chest - round patch
    fe(g, 'circle', { cx: 140, cy: 212, r: 9, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Emblem inner circle
    fe(g, 'circle', { cx: 140, cy: 212, r: 6, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.2 : SW }, a);
    // Emblem inner design hint
    fe(g, 'circle', { cx: 140, cy: 212, r: 3, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1 : 0.5 }, a);

    // Father shirt collar and collar details
    pp(g, [
      'M 308 152 C 314 154 320 156 326 158 C 332 156 338 154 344 152 C 348 150 352 148 354 146'
    ], a);
    pp(g, ['M 316 142 C 320 146 326 148 332 146 C 336 144 338 142 340 140'], a, lt);
    // Father shirt v-neck
    pp(g, ['M 320 154 C 324 160 326 164 326 168'], a, lt);
  },

  // =====================================================================
  // Layer 4: Jacket details - zipper, pockets, sleeves, stitching
  // =====================================================================
  (g, a, defs) => {
    // Center zipper line
    pp(g, ['M 140 194 L 140 260'], a);
    // Zipper teeth marks
    for (let y = 198; y < 258; y += 4) {
      pp(g, [`M 138 ${y} L 142 ${y}`], a, lt);
    }
    // Zipper pull tab
    pp(g, [
      'M 138 195 L 136 200 L 144 200 L 142 195 Z'
    ], a, lt);
    // Zipper pull ring
    pp(g, ['M 139 198 C 137 200 141 202 143 200'], a, lt);

    // Left pocket outline with flap
    pp(g, ['M 94 228 L 122 228 L 122 254 L 94 254 Z'], a, lt);
    pp(g, ['M 94 228 L 122 228'], a);
    // Left pocket flap stitching
    pp(g, ['M 96 230 L 120 230'], a, lt);
    // Left pocket snap button
    fe(g, 'circle', { cx: 108, cy: 234, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1 : 0.5 }, a);

    // Right pocket outline with flap
    pp(g, ['M 158 228 L 186 228 L 186 254 L 158 254 Z'], a, lt);
    pp(g, ['M 158 228 L 186 228'], a);
    // Right pocket flap stitching
    pp(g, ['M 160 230 L 184 230'], a, lt);
    // Right pocket snap button
    fe(g, 'circle', { cx: 172, cy: 234, r: 1.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1 : 0.5 }, a);

    // Hood drawstrings hanging from neckline
    pp(g, [
      'M 128 192 C 126 200 124 210 122 220 C 121 224 120 228 120 232',
      'M 152 192 C 154 200 156 210 158 220 C 159 224 160 228 160 232'
    ], a, lt);
    // Drawstring tips - small plastic aglets
    pp(g, [
      'M 119 232 C 118 236 120 238 122 236 C 124 234 122 230 120 230',
      'M 159 232 C 158 236 160 238 162 236 C 164 234 162 230 160 230'
    ], a, lt);

    // Left sleeve seam
    pp(g, ['M 90 192 C 86 200 84 210 82 220'], a, lt);
    // Right sleeve seam
    pp(g, ['M 190 192 C 194 200 196 210 198 220'], a, lt);

    // Left sleeve quilting lines
    pp(g, [
      'M 88 200 C 82 202 76 206 72 210',
      'M 86 212 C 80 214 74 218 70 222',
      'M 84 224 C 78 226 74 230 70 234',
      'M 82 236 C 76 238 72 242 70 246',
      'M 80 248 C 76 250 72 252 70 254'
    ], a, lt);
    // Right sleeve quilting lines
    pp(g, [
      'M 192 200 C 198 202 204 206 208 210',
      'M 194 212 C 200 214 206 218 210 222',
      'M 196 224 C 202 226 206 230 210 234',
      'M 198 236 C 204 238 208 242 210 246',
      'M 200 248 C 204 250 208 252 210 254'
    ], a, lt);

    // Shoulder seam stitching
    pp(g, [
      'M 100 170 C 108 166 118 162 130 160',
      'M 180 170 C 172 166 162 162 150 160'
    ], a, lt);

    // Jacket hem stitching line
    pp(g, ['M 86 258 C 100 256 120 255 140 254 C 160 255 180 256 194 258'], a, lt);

    // Collar stand detail
    pp(g, [
      'M 108 166 C 116 162 128 160 140 160 C 152 160 164 162 172 166'
    ], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands + green toy dinosaur/dragon
  // =====================================================================
  (g, a, defs) => {
    // Left hand - chubby child fingers on wall
    pp(g, [
      'M 114 244 C 112 240 108 238 104 240 C 100 242 98 248 100 252 C 102 256 108 258 112 256'
    ], a);
    // Left thumb - rounded
    pp(g, [
      'M 114 244 C 118 240 120 234 118 230 C 116 226 112 226 110 230 C 108 234 110 240 112 244'
    ], a);
    // Left index finger
    pp(g, [
      'M 106 242 C 102 236 98 230 100 226 C 102 222 106 222 108 226 C 110 230 108 236 106 242'
    ], a);
    // Left middle finger
    pp(g, [
      'M 102 244 C 98 238 94 232 96 228 C 98 224 102 224 104 228 C 106 232 104 238 102 244'
    ], a);
    // Left ring finger
    pp(g, [
      'M 100 248 C 96 244 94 238 96 234 C 98 230 100 232 100 236'
    ], a);
    // Left pinky
    pp(g, [
      'M 98 252 C 94 248 92 244 94 240 C 96 238 98 240 98 244'
    ], a, lt);
    // Left hand knuckle creases
    pp(g, [
      'M 106 240 C 104 242 102 244 100 246',
      'M 108 236 C 106 238 104 240 102 242'
    ], a, lt);
    // Left wrist crease
    pp(g, ['M 112 246 C 108 248 104 250 100 254'], a, lt);

    // Right hand - chubby child fingers
    pp(g, [
      'M 166 244 C 168 240 172 238 176 240 C 180 242 182 248 180 252 C 178 256 172 258 168 256'
    ], a);
    // Right thumb
    pp(g, [
      'M 166 244 C 162 240 160 234 162 230 C 164 226 168 226 170 230 C 172 234 170 240 168 244'
    ], a);
    // Right index finger
    pp(g, [
      'M 174 242 C 178 236 182 230 180 226 C 178 222 174 222 172 226 C 170 230 172 236 174 242'
    ], a);
    // Right middle finger
    pp(g, [
      'M 178 244 C 182 238 186 232 184 228 C 182 224 178 224 176 228 C 174 232 176 238 178 244'
    ], a);
    // Right ring finger
    pp(g, [
      'M 180 248 C 184 244 186 238 184 234 C 182 230 180 232 180 236'
    ], a);
    // Right pinky
    pp(g, [
      'M 182 252 C 186 248 188 244 186 240 C 184 238 182 240 182 244'
    ], a, lt);
    // Right hand knuckle creases
    pp(g, [
      'M 174 240 C 176 242 178 244 180 246',
      'M 172 236 C 174 238 176 240 178 242'
    ], a, lt);
    // Right wrist crease
    pp(g, ['M 168 246 C 172 248 176 250 180 254'], a, lt);

    // Green toy dinosaur/dragon - detailed figurine on wall
    // Toy body - rounded shape
    pp(g, [
      'M 120 240 C 118 234 120 226 126 222 C 130 220 136 218 142 220 C 146 218 152 216 158 218 C 164 220 170 226 172 232 C 174 236 174 240 172 242'
    ], a);
    // Toy head/neck sticking up
    pp(g, [
      'M 126 222 C 124 216 124 210 128 204 C 130 200 134 198 138 196 C 142 198 144 202 144 206 C 144 210 144 216 142 222'
    ], a);
    // Toy head shape
    pp(g, [
      'M 128 204 C 126 200 128 194 132 192 C 136 190 140 192 142 196 C 144 200 142 204 140 206'
    ], a);
    // Toy snout
    pp(g, [
      'M 130 196 C 128 194 126 192 124 194 C 122 196 124 198 128 198'
    ], a);
    // Toy eye
    fe(g, 'circle', { cx: 134, cy: 198, r: 2, fill: a ? HL : P }, a);
    // Toy pupil
    fe(g, 'circle', { cx: 134.5, cy: 198, r: 0.8, fill: a ? HL : '#000' }, a);
    // Toy spine bumps along back
    pp(g, [
      'M 132 208 C 130 204 132 200 134 202',
      'M 138 206 C 136 202 138 198 140 200',
      'M 144 208 C 142 204 144 200 146 202',
      'M 150 210 C 148 206 150 202 152 204',
      'M 156 214 C 154 210 156 206 158 208',
      'M 162 218 C 160 214 162 210 164 212'
    ], a);
    // Toy legs - two pairs hanging down
    pp(g, [
      'M 130 236 L 126 246 C 124 248 126 250 128 248',
      'M 138 238 L 136 248 C 134 250 136 252 138 250',
      'M 158 238 L 160 248 C 162 250 160 252 158 250',
      'M 166 236 L 170 246 C 172 248 170 250 168 248'
    ], a, lt);
    // Toy tail curving right
    pp(g, [
      'M 162 222 C 168 224 176 222 182 218 C 188 214 192 210 194 206 C 196 202 194 200 192 202'
    ], a);
    // Toy tail tip
    pp(g, ['M 192 202 C 190 200 188 202 190 204'], a, lt);
    // Toy belly ridge
    pp(g, ['M 128 232 C 136 234 148 234 160 232 C 166 230 170 228 172 226'], a, lt);
    // Toy texture lines on body
    pp(g, [
      'M 132 226 C 136 224 142 224 148 226',
      'M 134 232 C 140 230 148 230 154 232'
    ], a, lt);
  },

  // =====================================================================
  // Layer 6: Background environment - wall, houses, trees, sky
  // =====================================================================
  (g, a, defs) => {
    // Stone wall - top and bottom edges
    pp(g, ['M 0 260 L 360 260', 'M 0 300 L 360 300'], a);
    // Wall top surface line (perspective)
    pp(g, ['M 0 258 C 60 256 120 254 180 256 C 240 258 300 256 360 258'], a, lt);

    // Upper row stone outlines - irregular shapes
    pp(g, [
      'M 0 260 L 36 262 L 38 280 L 0 278 Z',
      'M 36 262 L 86 258 L 88 282 L 38 280 Z',
      'M 86 258 L 146 260 L 144 284 L 88 282 Z',
      'M 146 260 L 206 262 L 204 280 L 144 284 Z',
      'M 206 262 L 266 258 L 268 282 L 204 280 Z',
      'M 266 258 L 326 260 L 328 278 L 268 282 Z',
      'M 326 260 L 360 262 L 360 280 L 328 278 Z'
    ], a);
    // Lower row stone outlines
    pp(g, [
      'M 0 278 L 46 282 L 44 300 L 0 300 Z',
      'M 46 282 L 116 278 L 118 300 L 44 300 Z',
      'M 116 278 L 176 282 L 174 300 L 118 300 Z',
      'M 176 282 L 236 280 L 238 300 L 174 300 Z',
      'M 236 280 L 306 282 L 308 300 L 238 300 Z',
      'M 306 282 L 360 278 L 360 300 L 308 300 Z'
    ], a);
    // Stone internal crack lines (more detail)
    pp(g, [
      'M 18 266 L 20 278',
      'M 60 264 L 62 280',
      'M 112 262 L 114 282',
      'M 170 264 L 168 282',
      'M 232 262 L 234 280',
      'M 290 264 L 292 278',
      'M 22 286 L 24 298',
      'M 78 284 L 80 298',
      'M 142 286 L 144 298',
      'M 200 284 L 202 298',
      'M 268 286 L 270 298',
      'M 340 284 L 342 298'
    ], a, lt);
    // Stone surface texture (random pitting)
    pp(g, [
      'M 14 270 C 16 268 18 270 16 272',
      'M 58 274 C 60 272 62 274 60 276',
      'M 108 268 C 110 266 112 268 110 270',
      'M 168 272 C 170 270 172 272 170 274',
      'M 240 270 C 242 268 244 270 242 272',
      'M 300 274 C 302 272 304 274 302 276'
    ], a, lt);

    // Moss patches on top of wall - organic shapes
    pp(g, [
      'M 16 258 C 20 254 28 252 34 253 C 40 254 44 256 42 258 C 38 260 24 260 16 258 Z',
      'M 76 256 C 82 252 90 250 96 251 C 102 252 106 256 100 258 C 94 260 82 260 76 256 Z',
      'M 156 257 C 162 253 170 251 178 253 C 184 255 186 258 180 260 C 172 260 160 260 156 257 Z',
      'M 246 256 C 252 252 260 250 266 252 C 272 254 274 258 268 258 C 260 260 250 258 246 256 Z'
    ], a);
    // Smaller moss spots
    pp(g, [
      'M 50 258 C 54 256 58 254 62 256 C 64 258 62 260 56 260 L 50 258 Z',
      'M 128 257 C 132 254 136 254 140 256 C 142 258 140 260 134 260 L 128 257 Z',
      'M 208 258 C 212 256 216 254 220 256 C 222 258 220 260 214 260 L 208 258 Z',
      'M 310 257 C 314 255 318 254 322 256 C 324 258 322 260 316 260 L 310 257 Z'
    ], a, lt);

    // Village houses background
    // House 1 - stone cottage, left
    pp(g, ['M 8 148 L 8 260 L 56 260 L 56 126 Z'], a, lt);
    pp(g, ['M 8 148 L 32 116 L 56 126'], a, lt);
    // House 1 chimney
    pp(g, ['M 20 132 L 20 116 L 28 116 L 28 128'], a, lt);
    // House 1 windows
    pp(g, [
      'M 18 168 L 36 168 L 36 186 L 18 186 Z',
      'M 22 210 L 42 210 L 42 240 L 22 240 Z'
    ], a, lt);
    // House 1 window cross bars
    pp(g, [
      'M 27 168 L 27 186', 'M 18 177 L 36 177',
      'M 32 210 L 32 240', 'M 22 225 L 42 225'
    ], a, lt);
    // House 1 door
    pp(g, ['M 28 230 L 42 230 L 42 260 L 28 260 Z'], a, lt);
    // House 1 stone texture lines
    pp(g, [
      'M 10 160 L 30 162', 'M 12 180 L 50 178',
      'M 10 200 L 48 198', 'M 14 220 L 52 218',
      'M 8 240 L 54 238'
    ], a, lt);

    // House 2 - taller, right of house 1
    pp(g, ['M 56 136 L 56 260 L 104 260 L 104 156 Z'], a, lt);
    pp(g, ['M 56 136 L 80 106 L 104 156'], a, lt);
    // House 2 windows
    pp(g, [
      'M 64 168 L 80 168 L 80 184 L 64 184 Z',
      'M 84 168 L 96 168 L 96 184 L 84 184 Z'
    ], a, lt);
    // House 2 window cross bars
    pp(g, [
      'M 72 168 L 72 184', 'M 64 176 L 80 176',
      'M 90 168 L 90 184', 'M 84 176 L 96 176'
    ], a, lt);
    // House 2 stone texture
    pp(g, [
      'M 58 170 L 100 168', 'M 60 190 L 102 188',
      'M 58 210 L 100 208', 'M 60 230 L 102 228',
      'M 58 250 L 100 248'
    ], a, lt);

    // Metal shed/warehouse - far background
    pp(g, ['M 232 180 L 232 260 L 278 260 L 278 170 Z'], a, lt);
    pp(g, ['M 230 180 L 280 170'], a, lt);
    // Shed corrugated ridges
    pp(g, [
      'M 238 180 L 238 260', 'M 244 179 L 244 260',
      'M 250 178 L 250 260', 'M 256 177 L 256 260',
      'M 262 176 L 262 260', 'M 268 175 L 268 260',
      'M 274 174 L 274 260'
    ], a, lt);
    // Shed door/opening
    pp(g, ['M 248 220 L 262 220 L 262 260 L 248 260 Z'], a, lt);

    // Bare winter trees
    // Tree 1 - between houses and shed
    pp(g, ['M 189 128 L 189 260', 'M 191 128 L 191 260'], a, lt);
    // Tree 1 branches - detailed
    pp(g, [
      'M 190 148 C 180 136 174 126 168 116',
      'M 190 162 C 200 150 206 140 212 130',
      'M 190 176 C 182 166 176 156 170 146',
      'M 190 186 C 198 176 204 166 210 156',
      'M 190 196 C 184 190 178 184 174 178'
    ], a, lt);
    // Small branches and twigs
    pp(g, [
      'M 168 116 C 164 112 160 110 158 112',
      'M 168 116 C 166 110 164 106 162 108',
      'M 212 130 C 216 126 220 124 222 126',
      'M 212 130 C 214 124 218 120 216 118',
      'M 170 146 C 166 142 162 140 160 142',
      'M 210 156 C 214 152 218 150 216 148',
      'M 174 178 C 170 174 168 172 166 174'
    ], a, lt);

    // Tree 2 - far right area
    pp(g, ['M 299 158 L 299 260', 'M 301 158 L 301 260'], a, lt);
    pp(g, [
      'M 300 176 C 292 164 286 156 282 148',
      'M 300 188 C 308 178 314 170 318 162',
      'M 300 200 C 294 192 288 186 284 180'
    ], a, lt);
    // Tree 2 twigs
    pp(g, [
      'M 282 148 C 278 144 276 142 274 144',
      'M 318 162 C 322 158 324 156 322 154',
      'M 284 180 C 280 176 278 174 276 176'
    ], a, lt);

    // Stone path/yard hint between houses
    pp(g, ['M 104 260 L 128 252 L 166 254 L 190 260'], a, lt);
    // Path texture
    pp(g, [
      'M 112 256 C 118 254 126 254 134 256',
      'M 144 254 C 152 252 160 254 168 258'
    ], a, lt);

    // Ground/grass area below wall
    pp(g, ['M 0 300 L 0 450 L 360 450 L 360 300 Z'], a, lt);
    // Grass tufts
    pp(g, [
      'M 20 310 C 24 304 28 300 30 304',
      'M 50 308 C 54 302 58 298 60 302',
      'M 80 312 C 84 306 88 302 90 306',
      'M 120 310 C 124 304 128 300 130 304',
      'M 160 308 C 164 302 168 298 170 302',
      'M 200 312 C 204 306 208 302 210 306',
      'M 240 310 C 244 304 248 300 250 304',
      'M 280 308 C 284 302 288 298 290 302',
      'M 320 312 C 324 306 328 302 330 306',
      'M 340 310 C 344 304 348 300 350 304'
    ], a, lt);

    // Sky area
    pp(g, ['M 0 0 L 360 0 L 360 120 L 0 120 Z'], a, lt);
    // Cloud shapes
    pp(g, [
      'M 20 30 C 40 22 60 28 80 20 C 100 14 120 22 140 16',
      'M 200 40 C 220 32 240 38 260 30 C 280 24 300 32 320 26',
      'M 60 60 C 80 54 100 58 120 52 C 140 46 160 54 180 48'
    ], a, lt);
    // Distant horizon hills
    pp(g, [
      'M 0 108 C 30 100 60 104 90 98 C 120 92 150 96 180 90 C 210 86 240 92 270 88 C 300 84 330 90 360 84'
    ], a, lt);
  },

  // =====================================================================
  // Layer 7: Gradient skin/clothing colors with realistic shading
  // =====================================================================
  (g, a, defs) => {
    // Sky gradient - overcast
    const skyGrad = gd(defs, 'l', [
      ['0%', '#B0BEC5', 1], ['40%', '#CFD8DC', 1], ['100%', '#ECEFF1', 1]
    ], { x1: 180, y1: 0, x2: 180, y2: 260 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 260, fill: skyGrad }, false);

    // Miguel face skin gradient - warm tones
    const skinGrad = gd(defs, 'r', [
      ['0%', '#F5D4B0', 1], ['60%', '#F0C8A0', 1], ['100%', '#E8BB92', 1]
    ], { cx: 140, cy: 90, r: 55 });
    fl(g,
      'M 140 48 C 164 48 184 66 186 88 C 188 104 182 118 174 128 C 166 136 154 142 140 142 C 126 142 114 136 106 128 C 98 118 94 104 96 88 C 98 66 116 48 140 48 Z',
      skinGrad, a);
    // Neck skin with slight shadow
    const neckGrad = gd(defs, 'l', [
      ['0%', '#EDBE94', 1], ['100%', '#E0AD82', 1]
    ], { x1: 140, y1: 140, x2: 140, y2: 160 });
    fl(g,
      'M 128 138 L 124 160 L 156 160 L 152 138 Z',
      neckGrad, false);
    // Left ear fill with warm tone
    const earGrad = gd(defs, 'r', [
      ['0%', '#EDB88C', 1], ['100%', '#F5D0A9', 1]
    ], { cx: 90, cy: 96, r: 10 });
    fe(g, 'ellipse', { cx: 90, cy: 96, rx: 7, ry: 12, fill: earGrad }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 192, cy: 96, rx: 7, ry: 12, fill: earGrad }, false);

    // Miguel hair - dark brown with gradient depth
    const hairGrad = gd(defs, 'r', [
      ['0%', '#5D4037', 1], ['50%', '#4E342E', 1], ['100%', '#3E2723', 1]
    ], { cx: 140, cy: 60, r: 50 });
    fl(g,
      'M 100 82 C 98 68 102 52 112 42 C 120 34 132 30 144 30 C 156 30 168 34 176 42 C 184 52 188 68 186 82 L 182 80 C 184 72 180 62 174 54 C 168 46 158 42 148 42 C 138 42 128 44 120 50 C 114 56 108 64 104 72 C 102 76 100 80 100 82 Z',
      hairGrad, a);

    // Jacket navy gradient - realistic fabric sheen
    const jacketGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1], ['30%', '#1E2A8A', 1], ['50%', '#283593', 1], ['70%', '#1E2A8A', 1], ['100%', '#0D1544', 1]
    ], { x1: 84, y1: 200, x2: 198, y2: 200 });
    fl(g,
      'M 86 188 C 96 172 116 160 140 160 C 164 160 184 172 194 188 L 198 260 L 84 260 Z',
      jacketGrad, a);

    // Hood - navy matching jacket
    const hoodGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1], ['50%', '#1E2888', 1], ['100%', '#0D1544', 1]
    ], { x1: 90, y1: 180, x2: 190, y2: 180 });
    fl(g,
      'M 98 166 C 94 162 86 162 82 170 C 78 178 80 186 86 190 C 92 194 100 196 112 198 C 124 200 134 200 140 200 C 146 200 156 200 168 198 C 180 196 188 194 194 190 C 200 186 202 178 198 170 C 194 162 186 162 182 166 L 156 172 L 124 172 Z',
      hoodGrad, false);

    // Hood orange lining strip - visible at neckline
    const orangeGrad = gd(defs, 'l', [
      ['0%', '#E68A00', 1], ['30%', '#FF9800', 1], ['60%', '#FFA726', 1], ['100%', '#E68A00', 1]
    ], { x1: 96, y1: 188, x2: 184, y2: 188 });
    fl(g,
      'M 96 186 C 112 192 126 194 140 194 C 154 194 168 192 184 186 C 168 190 154 192 140 192 C 126 192 112 190 96 186 Z',
      orangeGrad, a);
    // Second lining strip (inner, lighter orange)
    fl(g,
      'M 100 184 C 114 188 128 190 140 190 C 152 190 166 188 180 184 C 166 186 152 188 140 188 C 128 188 114 186 100 184 Z',
      '#FFB74D', false);
    // Third lining strip for depth
    fl(g,
      'M 104 182 C 116 186 130 188 140 188 C 150 188 164 186 176 182 C 164 184 150 186 140 186 C 130 186 116 184 104 182 Z',
      '#FFCC80', false);

    // Left hand skin
    const handGrad = gd(defs, 'r', [
      ['0%', '#F5D4B0', 1], ['100%', '#EDBE94', 1]
    ], { cx: 106, cy: 246, r: 14 });
    fe(g, 'ellipse', { cx: 106, cy: 246, rx: 12, ry: 10, fill: handGrad }, false);
    // Right hand skin
    fe(g, 'ellipse', { cx: 174, cy: 246, rx: 12, ry: 10, fill: handGrad }, false);

    // Left arm jacket fill
    const armGrad = gd(defs, 'l', [
      ['0%', '#1A237E', 1], ['100%', '#0D1544', 1]
    ], { x1: 92, y1: 220, x2: 70, y2: 220 });
    fl(g,
      'M 90 192 C 82 206 74 226 70 242 C 68 250 72 256 78 254 L 114 244 Z',
      armGrad, false);
    // Right arm jacket fill
    fl(g,
      'M 190 192 C 198 206 206 226 210 242 C 212 250 208 256 202 254 L 166 244 Z',
      armGrad, false);

    // Green toy fill - turquoise/teal with gradient
    const toyGrad = gd(defs, 'r', [
      ['0%', '#4DB6AC', 1], ['40%', '#26A69A', 1], ['100%', '#009688', 1]
    ], { cx: 148, cy: 222, r: 30 });
    // Toy body
    fl(g,
      'M 120 240 C 118 234 120 226 126 222 C 130 220 136 218 142 220 C 146 218 152 216 158 218 C 164 220 170 226 172 232 C 174 238 172 242 170 244 L 120 244 Z',
      toyGrad, a);
    // Toy head+neck
    fl(g,
      'M 126 222 C 124 216 124 208 128 202 C 130 198 134 196 138 194 C 142 196 144 200 144 206 C 144 212 142 218 142 222 Z',
      '#2BBBAD', false);
    // Toy tail
    fl(g,
      'M 162 222 C 168 224 176 222 182 218 C 188 214 192 210 194 206 C 194 204 192 204 190 206 C 186 210 180 216 172 220 C 168 222 164 222 162 222 Z',
      '#26A69A', false);

    // Father skin - partial face
    const fatherSkinGrad = gd(defs, 'r', [
      ['0%', '#F0C8A0', 1], ['100%', '#E8B882', 1]
    ], { cx: 328, cy: 100, r: 30 });
    fl(g,
      'M 300 104 C 300 88 308 76 320 68 C 332 68 342 76 350 88 C 354 96 356 104 354 112 C 352 120 348 126 342 132 C 338 136 332 140 326 142 C 320 140 314 136 310 132 C 304 126 300 118 300 112 Z',
      fatherSkinGrad, false);
    // Father neck
    fl(g,
      'M 316 140 L 314 156 L 338 156 L 336 140 Z',
      '#E0AD82', false);
    // Father shirt - white with slight gradient
    const shirtGrad = gd(defs, 'l', [
      ['0%', '#F5F5F5', 1], ['50%', '#FAFAFA', 1], ['100%', '#EEEEEE', 1]
    ], { x1: 290, y1: 200, x2: 360, y2: 200 });
    fl(g,
      'M 288 178 C 300 164 314 156 328 156 C 342 156 354 164 360 178 L 360 260 L 280 260 Z',
      shirtGrad, false);

    // Father hair
    fl(g,
      'M 302 100 C 300 86 308 76 320 70 C 330 68 340 72 346 80 C 350 86 352 94 350 100 L 346 98 C 348 92 346 84 342 78 C 338 74 332 72 326 72 C 320 72 314 76 310 82 C 306 88 304 94 304 98 Z',
      '#4E342E', false);
  },

  // =====================================================================
  // Layer 8: Scene colors - houses, wall, ground, sky details
  // =====================================================================
  (g, a, defs) => {
    // Cloud layers - overcast sky
    const cloudGrad1 = gd(defs, 'l', [
      ['0%', '#B0BEC5', 0.9], ['50%', '#CFD8DC', 0.7], ['100%', '#B0BEC5', 0.9]
    ], { x1: 0, y1: 10, x2: 360, y2: 10 });
    fl(g,
      'M 0 18 C 30 12 60 16 90 10 C 120 4 150 14 180 8 C 210 2 240 12 270 6 C 300 0 330 10 360 4 L 360 0 L 0 0 Z',
      cloudGrad1, false);
    fl(g,
      'M 0 46 C 40 40 80 44 120 38 C 160 32 200 42 240 36 C 280 30 320 40 360 34 L 360 18 C 330 24 300 14 270 18 C 240 24 210 14 180 20 C 150 26 120 16 90 22 C 60 28 30 24 0 30 Z',
      '#B0BEC5', false);
    // Lighter cloud wisps
    fo(g,
      'M 40 60 C 60 54 80 58 100 52 C 120 46 140 56 160 50 L 160 58 C 140 64 120 54 100 60 C 80 66 60 62 40 68 Z',
      '#ECEFF1', 0.5, false);
    fo(g,
      'M 200 50 C 220 44 240 48 260 42 C 280 38 300 46 320 40 L 320 50 C 300 56 280 48 260 52 C 240 58 220 54 200 58 Z',
      '#ECEFF1', 0.4, false);

    // House 1 fill - warm stone
    const houseGrad1 = gd(defs, 'l', [
      ['0%', '#D7CCC8', 1], ['100%', '#C7B7B0', 1]
    ], { x1: 8, y1: 200, x2: 56, y2: 200 });
    fl(g, 'M 8 148 L 8 260 L 56 260 L 56 126 Z', houseGrad1, false);
    // House 1 roof - terracotta
    fl(g, 'M 8 148 L 32 116 L 56 126 Z', '#A1887F', false);
    // House 1 chimney fill
    fl(g, 'M 20 132 L 20 116 L 28 116 L 28 128 Z', '#8D6E63', false);

    // House 2 fill
    const houseGrad2 = gd(defs, 'l', [
      ['0%', '#BCAAA4', 1], ['100%', '#B09E96', 1]
    ], { x1: 56, y1: 200, x2: 104, y2: 200 });
    fl(g, 'M 56 136 L 56 260 L 104 260 L 104 156 Z', houseGrad2, false);
    fl(g, 'M 56 136 L 80 106 L 104 156 Z', '#8D6E63', false);

    // House windows - dark with blue tint
    fe(g, 'rect', { x: 18, y: 168, width: 18, height: 18, fill: '#455A64' }, false);
    fe(g, 'rect', { x: 22, y: 210, width: 20, height: 30, fill: '#455A64' }, false);
    fe(g, 'rect', { x: 64, y: 168, width: 16, height: 16, fill: '#455A64' }, false);
    fe(g, 'rect', { x: 84, y: 168, width: 12, height: 16, fill: '#455A64' }, false);
    // Window reflections
    feo(g, 'rect', { x: 19, y: 169, width: 5, height: 7, fill: '#78909C' }, 0.4, false);
    feo(g, 'rect', { x: 65, y: 169, width: 4, height: 6, fill: '#78909C' }, 0.4, false);
    feo(g, 'rect', { x: 85, y: 169, width: 3, height: 6, fill: '#78909C' }, 0.3, false);

    // Metal shed fill - corrugated metal gray
    const shedGrad = gd(defs, 'l', [
      ['0%', '#78909C', 1], ['50%', '#90A4AE', 1], ['100%', '#607D8B', 1]
    ], { x1: 232, y1: 200, x2: 278, y2: 200 });
    fl(g, 'M 232 180 L 232 260 L 278 260 L 278 170 Z', shedGrad, false);
    // Shed roof highlight
    fl(g, 'M 230 180 L 280 170 L 278 174 L 232 184 Z', '#90A4AE', false);

    // Stone wall fills - alternating warm gray/brown tones
    const wallTone1 = '#9E9E9E';
    const wallTone2 = '#BDBDBD';
    const wallTone3 = '#8D6E63';
    const wallTone4 = '#A1887F';
    // Upper row
    fl(g, 'M 0 260 L 36 262 L 38 280 L 0 278 Z', wallTone1, false);
    fl(g, 'M 36 262 L 86 258 L 88 282 L 38 280 Z', wallTone2, false);
    fl(g, 'M 86 258 L 146 260 L 144 284 L 88 282 Z', wallTone3, false);
    fl(g, 'M 146 260 L 206 262 L 204 280 L 144 284 Z', wallTone4, false);
    fl(g, 'M 206 262 L 266 258 L 268 282 L 204 280 Z', wallTone2, false);
    fl(g, 'M 266 258 L 326 260 L 328 278 L 268 282 Z', wallTone3, false);
    fl(g, 'M 326 260 L 360 262 L 360 280 L 328 278 Z', wallTone1, false);
    // Lower row
    fl(g, 'M 0 278 L 46 282 L 44 300 L 0 300 Z', wallTone2, false);
    fl(g, 'M 46 282 L 116 278 L 118 300 L 44 300 Z', wallTone1, false);
    fl(g, 'M 116 278 L 176 282 L 174 300 L 118 300 Z', wallTone4, false);
    fl(g, 'M 176 282 L 236 280 L 238 300 L 174 300 Z', wallTone3, false);
    fl(g, 'M 236 280 L 306 282 L 308 300 L 238 300 Z', wallTone1, false);
    fl(g, 'M 306 282 L 360 278 L 360 300 L 308 300 Z', wallTone2, false);

    // Moss green patches on wall top
    fl(g, 'M 16 258 C 20 254 28 252 34 253 C 40 254 44 256 42 258 C 38 260 24 260 16 258 Z', '#558B2F', false);
    fl(g, 'M 76 256 C 82 252 90 250 96 251 C 102 252 106 256 100 258 C 94 260 82 260 76 256 Z', '#558B2F', false);
    fl(g, 'M 156 257 C 162 253 170 251 178 253 C 184 255 186 258 180 260 C 172 260 160 260 156 257 Z', '#558B2F', false);
    fl(g, 'M 246 256 C 252 252 260 250 266 252 C 272 254 274 258 268 258 C 260 260 250 258 246 256 Z', '#558B2F', false);
    // Lighter moss spots
    fl(g, 'M 50 258 C 54 256 58 254 62 256 C 64 258 62 260 56 260 L 50 260 Z', '#689F38', false);
    fl(g, 'M 128 257 C 132 254 136 254 140 256 C 142 258 140 260 134 260 L 128 260 Z', '#7CB342', false);
    fl(g, 'M 208 258 C 212 256 216 254 220 256 C 222 258 220 260 214 260 L 208 260 Z', '#689F38', false);
    fl(g, 'M 310 257 C 314 255 318 254 322 256 C 324 258 322 260 316 260 L 310 260 Z', '#7CB342', false);
    // Lichen spots on stones (yellowish-green)
    feo(g, 'circle', { cx: 30, cy: 272, r: 3, fill: '#9E9D24' }, 0.3, false);
    feo(g, 'circle', { cx: 70, cy: 268, r: 2.5, fill: '#9E9D24' }, 0.25, false);
    feo(g, 'circle', { cx: 130, cy: 274, r: 3, fill: '#9E9D24' }, 0.3, false);
    feo(g, 'circle', { cx: 190, cy: 270, r: 2, fill: '#9E9D24' }, 0.2, false);
    feo(g, 'circle', { cx: 250, cy: 272, r: 2.5, fill: '#9E9D24' }, 0.25, false);

    // Green grass ground with gradient
    const grassGrad = gd(defs, 'l', [
      ['0%', '#689F38', 1], ['20%', '#7CB342', 1], ['60%', '#8BC34A', 1], ['100%', '#689F38', 1]
    ], { x1: 0, y1: 300, x2: 0, y2: 450 });
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: grassGrad }, false);
    // Grass variation - darker band at top (near wall shadow)
    fl(g,
      'M 0 300 C 20 296 40 298 60 300 C 80 302 100 298 120 300 C 140 302 160 296 180 300 C 200 304 220 298 240 300 C 260 302 280 296 300 300 C 320 302 340 298 360 300 L 360 314 L 0 314 Z',
      '#558B2F', false);
    // Lighter grass patch
    fo(g,
      'M 0 322 C 40 318 80 320 120 318 C 160 316 200 320 240 318 C 280 316 320 320 360 318 L 360 342 L 0 342 Z',
      '#8BC34A', 0.5, false);
    // Grass shadow from wall
    fo(g,
      'M 0 300 L 360 300 L 360 308 L 0 308 Z',
      '#33691E', 0.2, false);

    // Tree trunk fills
    const trunkGrad = gd(defs, 'l', [
      ['0%', '#5D4037', 1], ['50%', '#6D4C41', 1], ['100%', '#4E342E', 1]
    ], { x1: 188, y1: 0, x2: 192, y2: 0 });
    fl(g, 'M 188 128 L 188 260 L 192 260 L 192 128 Z', trunkGrad, false);
    fl(g, 'M 298 158 L 298 260 L 302 260 L 302 158 Z', trunkGrad, false);

    // Stone path fill between houses
    fl(g,
      'M 104 260 L 128 252 L 166 254 L 190 260 Z',
      '#BCAAA4', false);
  },

  // =====================================================================
  // Layer 9: Polish - catchlights, shadows, highlights, blush, fine details
  // =====================================================================
  (g, a, defs) => {
    // === EYE DETAILS ===
    // Left eye white fill
    fo(g,
      'M 118 86 C 120 80 124 76 130 76 C 134 76 138 78 140 82 C 142 86 142 90 140 94 C 138 98 134 100 130 100 C 124 100 120 98 118 94 C 117 92 117 88 118 86 Z',
      '#FAFAFA', 0.7, false);
    // Right eye white fill
    fo(g,
      'M 146 86 C 148 80 152 76 158 76 C 162 76 166 78 168 82 C 170 86 170 90 168 94 C 166 98 162 100 158 100 C 152 100 148 98 146 94 C 145 92 145 88 146 86 Z',
      '#FAFAFA', 0.7, false);
    // Left iris fill - brown
    fe(g, 'circle', { cx: 130, cy: 89, r: 6, fill: '#5D4037' }, false);
    // Right iris fill
    fe(g, 'circle', { cx: 158, cy: 89, r: 6, fill: '#5D4037' }, false);
    // Left pupil dark
    fe(g, 'circle', { cx: 130, cy: 89, r: 3.8, fill: '#1A1A1A' }, false);
    // Right pupil dark
    fe(g, 'circle', { cx: 158, cy: 89, r: 3.8, fill: '#1A1A1A' }, false);

    // Eye catchlights - primary (bright white)
    fe(g, 'circle', { cx: 128, cy: 87, r: 2.2, fill: 'white' }, a);
    fe(g, 'circle', { cx: 156, cy: 87, r: 2.2, fill: 'white' }, a);
    // Eye catchlights - secondary (smaller)
    feo(g, 'circle', { cx: 132, cy: 92, r: 1.2, fill: 'white' }, 0.7, false);
    feo(g, 'circle', { cx: 160, cy: 92, r: 1.2, fill: 'white' }, 0.7, false);
    // Eye catchlights - tertiary (tiny)
    feo(g, 'circle', { cx: 127, cy: 90, r: 0.6, fill: 'white' }, 0.5, false);
    feo(g, 'circle', { cx: 155, cy: 90, r: 0.6, fill: 'white' }, 0.5, false);
    // Upper eyelash shadow
    sh(g, 'M 120 86 C 124 84 130 82 136 84 C 140 85 142 87 142 88 L 140 86 C 136 84 130 82 124 84 C 120 86 118 88 118 90 Z', 0.15, false);
    sh(g, 'M 148 86 C 152 84 158 82 164 84 C 168 85 170 87 170 88 L 168 86 C 164 84 158 82 152 84 C 148 86 146 88 146 90 Z', 0.15, false);

    // === ROSY COLD CHEEKS ===
    // Main blush spots - warm pink (winter outdoor cold)
    feo(g, 'ellipse', { cx: 116, cy: 114, rx: 12, ry: 7, fill: '#FF8A65' }, 0.45, a);
    feo(g, 'ellipse', { cx: 164, cy: 114, rx: 12, ry: 7, fill: '#FF8A65' }, 0.45, a);
    // Inner blush (more red)
    feo(g, 'ellipse', { cx: 114, cy: 116, rx: 7, ry: 4, fill: '#EF5350' }, 0.2, false);
    feo(g, 'ellipse', { cx: 166, cy: 116, rx: 7, ry: 4, fill: '#EF5350' }, 0.2, false);
    // Nose tip blush (cold weather)
    feo(g, 'ellipse', { cx: 140, cy: 110, rx: 5, ry: 3, fill: '#FFAB91' }, 0.25, false);

    // === MOUTH DETAILS ===
    // Mouth interior fill (dark)
    fl(g,
      'M 124 120 C 128 128 134 134 140 134 C 146 134 152 128 156 120 L 154 120 C 150 126 146 130 140 130 C 134 130 130 126 126 120 Z',
      '#C62828', false);
    // Tongue hint
    fl(g,
      'M 132 124 C 134 128 138 130 142 128 C 144 126 146 122 144 120 L 136 120 C 134 122 132 124 132 124 Z',
      '#EF9A9A', false);
    // Teeth fill (white with slight shadow)
    fl(g,
      'M 126 120 L 154 120 L 152 125 C 148 126 144 127 140 127 C 136 127 132 126 128 125 Z',
      '#FAFAFA', false);
    // Individual tooth shadows
    pps(g, [
      'M 133 120 L 133 124',
      'M 138 120 L 138 125',
      'M 143 120 L 143 125',
      'M 148 120 L 148 124'
    ], false, 0.3, '#E0E0E0');
    // Upper lip shadow
    sh(g,
      'M 124 118 C 130 114 136 112 140 114 C 144 112 150 114 156 118 C 152 116 146 114 140 116 C 134 114 128 116 124 118 Z',
      0.1, false);
    // Lower lip highlight
    hi(g,
      'M 130 128 C 134 132 138 134 140 134 C 142 134 146 132 150 128 C 146 130 142 132 140 132 C 138 132 134 130 130 128 Z',
      0.15, false);

    // === FACE SHADOWS AND HIGHLIGHTS ===
    // Forehead highlight
    hi(g,
      'M 120 62 C 128 58 136 56 144 58 C 152 60 158 64 162 68 C 156 62 148 58 140 58 C 132 58 126 60 120 62 Z',
      0.2, false);
    // Left temple shadow
    sh(g,
      'M 100 86 C 102 78 106 72 112 68 C 108 74 104 80 102 88 Z',
      0.08, false);
    // Right temple shadow
    sh(g,
      'M 182 86 C 180 78 176 72 170 68 C 174 74 178 80 180 88 Z',
      0.08, false);
    // Under-chin shadow
    sh(g,
      'M 118 136 C 126 140 134 142 140 142 C 146 142 154 140 162 136 C 154 138 146 140 140 140 C 134 140 126 138 118 136 Z',
      0.15, false);
    // Nose shadow (left side)
    sh(g,
      'M 136 88 C 134 94 132 100 130 106 C 132 102 134 96 136 90 Z',
      0.1, false);
    // Nose bridge highlight
    hi(g,
      'M 140 82 C 141 88 141 94 140 100 C 139 94 139 88 140 82 Z',
      0.2, false);
    // Under-nose shadow
    sh(g,
      'M 130 110 C 134 114 140 116 146 114 C 150 112 152 110 154 108 C 148 110 142 112 136 112 C 132 112 130 110 130 110 Z',
      0.1, false);
    // Jawline shadow (left)
    sh(g,
      'M 100 102 C 98 110 98 118 100 126 C 104 132 110 136 116 138 C 108 134 102 128 100 120 C 98 114 98 108 100 102 Z',
      0.1, false);
    // Jawline shadow (right)
    sh(g,
      'M 180 102 C 182 110 182 118 180 126 C 176 132 170 136 164 138 C 172 134 178 128 180 120 C 182 114 182 108 180 102 Z',
      0.1, false);

    // === JACKET POLISH ===
    // Jacket emblem fill
    fe(g, 'circle', { cx: 140, cy: 212, r: 7, fill: '#283593' }, false);
    feo(g, 'circle', { cx: 140, cy: 212, r: 4.5, fill: '#FFD740' }, 0.9, false);
    // Emblem inner design
    pps(g, [
      'M 137 210 L 143 214',
      'M 143 210 L 137 214',
      'M 140 208 L 140 216'
    ], false, 0.4, '#1A237E');

    // Jacket puffiness highlights (tube section light)
    hi(g,
      'M 90 198 C 110 195 130 193 140 192 C 150 193 170 195 190 198 C 170 196 150 195 140 194 C 130 195 110 196 90 198 Z',
      0.12, false);
    hi(g,
      'M 88 212 C 110 209 130 207 140 206 C 150 207 170 209 192 212 C 170 210 150 209 140 208 C 130 209 110 210 88 212 Z',
      0.1, false);
    hi(g,
      'M 87 226 C 110 223 130 221 140 220 C 150 221 170 223 193 226 C 170 224 150 223 140 222 C 130 223 110 224 87 226 Z',
      0.1, false);
    // Jacket shadow at bottom
    sh(g,
      'M 86 254 C 110 252 130 250 140 250 C 150 250 170 252 194 254 C 170 256 150 258 140 258 C 130 258 110 256 86 254 Z',
      0.15, false);
    // Jacket center zipper shadow
    sh(g,
      'M 138 196 L 138 258 L 140 258 L 140 196 Z',
      0.08, false);
    // Jacket side shadow (left)
    sh(g,
      'M 84 200 C 86 210 84 220 84 230 C 84 240 84 250 84 258 L 88 258 C 88 250 88 240 88 230 C 88 220 90 210 88 200 Z',
      0.12, false);
    // Jacket side shadow (right)
    sh(g,
      'M 196 200 C 194 210 196 220 196 230 C 196 240 196 250 196 258 L 192 258 C 192 250 192 240 192 230 C 192 220 190 210 192 200 Z',
      0.12, false);

    // === HOOD LINING GLOW ===
    // Orange lining warm highlight
    hi(g,
      'M 110 188 C 120 190 130 192 140 192 C 150 192 160 190 170 188 C 160 190 150 191 140 191 C 130 191 120 190 110 188 Z',
      0.2, false);

    // === TOY DETAILS ===
    // Toy eye color
    fe(g, 'circle', { cx: 134, cy: 198, r: 1.4, fill: '#1B5E20' }, false);
    // Toy eye shine
    feo(g, 'circle', { cx: 133, cy: 197, r: 0.5, fill: 'white' }, 0.8, false);
    // Toy nostril
    fe(g, 'circle', { cx: 131, cy: 196, r: 0.5, fill: '#004D40' }, false);
    // Toy belly highlight
    hi(g,
      'M 134 228 C 140 226 148 226 156 228 C 148 226 140 226 134 228 Z',
      0.2, false);
    // Toy spine bump highlights
    feo(g, 'circle', { cx: 133, cy: 204, r: 1, fill: '#4DB6AC' }, 0.5, false);
    feo(g, 'circle', { cx: 139, cy: 202, r: 1, fill: '#4DB6AC' }, 0.5, false);
    feo(g, 'circle', { cx: 145, cy: 204, r: 1, fill: '#4DB6AC' }, 0.5, false);

    // === WALL DETAILS ===
    // Wall mortar texture (subtle cracks)
    pps(g, [
      'M 8 270 L 28 272',
      'M 50 268 L 70 270',
      'M 96 272 L 126 270',
      'M 156 268 L 186 272',
      'M 216 270 L 250 268',
      'M 280 272 L 316 270',
      'M 20 288 L 40 290',
      'M 60 286 L 90 288',
      'M 130 290 L 160 288',
      'M 188 286 L 220 290',
      'M 250 288 L 280 286',
      'M 320 290 L 350 288'
    ], false, 0.3, '#8D6E63');
    // Wall top edge shadow
    sh(g,
      'M 0 260 L 360 260 L 360 264 L 0 264 Z',
      0.1, false);
    // Wall stone joint shadows
    pps(g, [
      'M 36 262 L 38 280',
      'M 86 258 L 88 282',
      'M 146 260 L 144 284',
      'M 206 262 L 204 280',
      'M 266 258 L 268 282',
      'M 326 260 L 328 278'
    ], false, 0.4, '#795548');
    // Moss highlights (lighter green spots)
    feo(g, 'ellipse', { cx: 28, cy: 256, rx: 3, ry: 1.5, fill: '#8BC34A' }, 0.3, false);
    feo(g, 'ellipse', { cx: 88, cy: 254, rx: 3, ry: 1.5, fill: '#8BC34A' }, 0.3, false);
    feo(g, 'ellipse', { cx: 168, cy: 255, rx: 3, ry: 1.5, fill: '#8BC34A' }, 0.3, false);
    feo(g, 'ellipse', { cx: 258, cy: 254, rx: 3, ry: 1.5, fill: '#8BC34A' }, 0.3, false);

    // === TREE DETAILS ===
    // Tree bark texture
    pps(g, [
      'M 189 138 L 189 200',
      'M 191 148 L 191 210',
      'M 190 160 L 190 220',
      'M 299 168 L 299 220',
      'M 301 178 L 301 230'
    ], false, 0.3, '#4E342E');
    // Branch knots
    fe(g, 'circle', { cx: 190, cy: 168, r: 1.8, fill: '#4E342E' }, false);
    fe(g, 'circle', { cx: 190, cy: 188, r: 1.2, fill: '#4E342E' }, false);
    fe(g, 'circle', { cx: 300, cy: 192, r: 1.4, fill: '#4E342E' }, false);

    // === FATHER POLISH ===
    // Father eye shine
    fe(g, 'circle', { cx: 322, cy: 97, r: 1.4, fill: 'white' }, false);
    feo(g, 'circle', { cx: 326, cy: 101, r: 0.7, fill: 'white' }, 0.5, false);
    // Father shirt wrinkle shadows
    sh(g,
      'M 308 170 C 318 174 328 174 338 170 C 328 172 318 172 308 170 Z',
      0.06, false);
    sh(g,
      'M 304 186 C 314 190 324 190 334 186 C 324 188 314 188 304 186 Z',
      0.06, false);
    sh(g,
      'M 300 200 C 312 204 324 204 340 200 C 324 202 312 202 300 200 Z',
      0.06, false);
    // Father beard shadow
    sh(g,
      'M 310 120 C 316 128 322 134 328 138 C 334 134 338 128 342 122 C 336 128 330 132 324 134 C 318 132 314 128 310 120 Z',
      0.08, false);

    // === GRASS DETAILS ===
    // Individual grass blade strokes
    pps(g, [
      'M 28 318 C 32 312 34 308 36 312',
      'M 58 316 C 62 310 64 306 66 310',
      'M 88 320 C 92 314 94 310 96 314',
      'M 148 318 C 152 312 154 308 156 312',
      'M 188 316 C 192 310 194 306 196 310',
      'M 218 320 C 222 314 224 310 226 314',
      'M 258 318 C 262 312 264 308 266 312',
      'M 298 316 C 302 310 304 306 306 310',
      'M 338 320 C 342 314 344 310 346 314'
    ], false, 0.5, '#558B2F');
    // Darker grass near wall base
    pps(g, [
      'M 8 302 C 12 298 14 296 16 300',
      'M 48 304 C 52 300 54 298 56 302',
      'M 98 302 C 102 298 104 296 106 300',
      'M 158 304 C 162 300 164 298 166 302',
      'M 238 302 C 242 298 244 296 246 300',
      'M 318 304 C 322 300 324 298 326 302'
    ], false, 0.4, '#33691E');
    // Light grass highlights
    pps(g, [
      'M 38 330 C 42 324 44 320 46 324',
      'M 118 332 C 122 326 124 322 126 326',
      'M 208 330 C 212 324 214 320 216 324',
      'M 288 332 C 292 326 294 322 296 326'
    ], false, 0.4, '#AED581');

    // === CLOUD HIGHLIGHTS ===
    fo(g,
      'M 200 68 C 210 60 220 64 230 58 C 240 52 250 62 260 56 L 260 66 C 250 72 240 62 230 68 C 220 74 210 70 200 76 Z',
      '#CFD8DC', 0.4, false);
    fo(g,
      'M 300 48 C 310 42 320 46 330 40 L 330 50 C 320 56 310 52 300 56 Z',
      '#ECEFF1', 0.3, false);

    // === HAND DETAIL SHADOWS ===
    // Left hand knuckle shadows
    sh(g,
      'M 104 240 C 100 244 98 248 98 252 C 100 248 102 244 106 240 Z',
      0.1, false);
    // Right hand knuckle shadows
    sh(g,
      'M 176 240 C 180 244 182 248 182 252 C 180 248 178 244 174 240 Z',
      0.1, false);
    // Hand skin highlight
    hi(g,
      'M 108 242 C 110 240 112 240 114 242 C 112 240 110 240 108 242 Z',
      0.2, false);
    hi(g,
      'M 172 242 C 170 240 168 240 166 242 C 168 240 170 240 172 242 Z',
      0.2, false);

    // === AMBIENT OCCLUSION ===
    // Shadow under Miguel on wall
    sh(g,
      'M 70 256 C 90 254 120 252 140 252 C 160 252 190 254 210 256 L 210 260 L 70 260 Z',
      0.12, false);
    // Shadow behind jacket on hood
    sh(g,
      'M 104 178 C 120 182 132 184 140 184 C 148 184 160 182 176 178 C 160 180 148 182 140 182 C 132 182 120 180 104 178 Z',
      0.1, false);

    // === HAIR HIGHLIGHTS ===
    // Top of head light reflection
    hi(g,
      'M 126 36 C 134 32 142 32 150 36 C 142 34 134 34 126 36 Z',
      0.2, false);
    hi(g,
      'M 130 42 C 138 38 148 38 156 42 C 148 40 138 40 130 42 Z',
      0.15, false);
    // Hair side sheen
    hi(g,
      'M 106 56 C 110 48 118 44 126 42 C 118 46 112 52 108 60 Z',
      0.1, false);
  }
];
