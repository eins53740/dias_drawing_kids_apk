// ==============================================================
// SCENE: BISAVO — Great-grandfather celebrating at restaurant
// Elderly man (~85-90) with huge joyful smile, holding water bottle
// Orange baroque tablecloth, balloons, fire extinguisher on wall
// PHOTOREALISTIC VERSION — gradient skin, deep wrinkles, catchlights
// ==============================================================
const bivoLayers = [
  // Layer 0: Composition guides
  (g, a) => {
    // Table edge guide
    pp(g, ['M 0 290 L 360 290'], a, lt);
    // Figure zone verticals
    pp(g, ['M 100 10 L 100 290', 'M 244 10 L 244 290'], a, lt);
    // Head center horizontal
    pp(g, ['M 100 120 L 244 120'], a, lt);
    // Background ceiling line
    pp(g, ['M 0 10 L 360 10'], a, lt);
    // Shoulder line
    pp(g, ['M 100 200 L 244 200'], a, lt);
    // Chair zone right
    pp(g, ['M 270 60 L 330 60 L 330 290'], a, lt);
    // Face thirds — forehead, eyes, nose, mouth
    pp(g, ['M 140 82 L 210 82', 'M 140 108 L 210 108', 'M 140 140 L 210 140'], a, lt);
    // Arm angle guides
    pp(g, ['M 224 216 L 260 162', 'M 120 218 L 106 270'], a, lt);
  },

  // Layer 1: Head, ears, neck, shoulders, seated body — detailed elderly anatomy
  (g, a) => {
    // Head — angular elderly skull, slightly elongated, prominent brow ridge
    pp(g, [
      'M 148 122 C 147 108 148 94 152 82 C 156 72 162 66 170 64 C 176 62 182 62 188 66 C 196 70 202 80 205 92 C 207 102 207 114 206 126 C 204 136 200 146 194 154 C 190 160 184 164 178 168 C 174 170 170 170 166 168 C 160 164 154 158 150 150 C 148 142 147 132 148 122 Z'
    ], a);
    // Temporal ridge left
    pp(g, ['M 148 100 C 146 96 144 92 144 88 C 144 84 146 82 148 82'], a, lt);
    // Temporal ridge right
    pp(g, ['M 206 100 C 208 96 210 92 210 88 C 210 84 208 82 206 82'], a, lt);
    // Jawline left — angular, slightly sagging
    pp(g, ['M 150 150 C 154 156 160 162 166 166 C 168 168 170 168 172 168'], a);
    // Jawline right
    pp(g, ['M 194 154 C 190 158 184 162 178 166 C 176 168 174 168 172 168'], a);
    // Chin prominence
    pp(g, ['M 166 166 C 168 170 170 172 172 172 C 174 172 176 170 178 166'], a);

    // Left ear — large, prominent, elderly cartilage thickened
    pp(g, [
      'M 144 104 C 140 100 134 100 130 106 C 126 112 124 120 126 130 C 128 138 132 144 138 146 C 142 148 144 144 144 138'
    ], a);
    // Left ear inner curve — tragus, antitragus
    pp(g, ['M 138 108 C 134 112 132 120 132 128 C 132 134 136 140 140 140'], a, lt);
    // Left ear helix fold
    pp(g, ['M 136 104 C 130 108 128 116 128 126 C 128 132 130 138 134 142'], a, lt);
    // Left earlobe
    pp(g, ['M 138 146 C 136 150 134 152 132 150 C 130 148 130 144 132 142'], a, lt);

    // Right ear — large, prominent
    pp(g, [
      'M 208 104 C 212 100 218 100 222 106 C 226 112 228 120 226 130 C 224 138 220 144 214 146 C 210 148 208 144 208 138'
    ], a);
    // Right ear inner curve
    pp(g, ['M 214 108 C 218 112 220 120 220 128 C 220 134 216 140 212 140'], a, lt);
    // Right ear helix fold
    pp(g, ['M 216 104 C 222 108 224 116 224 126 C 224 132 222 138 218 142'], a, lt);
    // Right earlobe
    pp(g, ['M 214 146 C 216 150 218 152 220 150 C 222 148 222 144 220 142'], a, lt);

    // Neck — thin, elderly, tendons visible
    pp(g, ['M 164 168 C 162 174 160 180 160 186'], a);
    pp(g, ['M 180 168 C 182 174 184 180 184 186'], a);
    // Neck tendon lines — sternocleidomastoid
    pp(g, ['M 162 170 C 158 178 156 184 156 190'], a, lt);
    pp(g, ['M 182 170 C 186 178 188 184 188 190'], a, lt);
    // Adam's apple hint
    pp(g, ['M 170 176 C 171 174 173 174 174 176'], a, lt);

    // Shoulders — thin, slightly hunched forward, elderly posture
    pp(g, [
      'M 112 214 C 118 200 130 192 148 188 C 160 186 168 186 172 186 C 176 186 184 186 196 188 C 214 192 226 200 232 214'
    ], a);
    // Body sides — torso continuing to table edge
    pp(g, ['M 112 214 L 108 290', 'M 232 214 L 236 290'], a);
    // Shoulder bone protrusions (elderly)
    pp(g, ['M 118 206 C 124 200 132 196 142 194', 'M 226 206 C 220 200 212 196 202 194'], a, lt);
    // Clavicle hints
    pp(g, ['M 158 190 C 154 188 148 188 142 190', 'M 186 190 C 190 188 196 188 202 190'], a, lt);
    // Upper chest wrinkle line
    pp(g, ['M 136 210 C 148 214 160 216 172 216 C 184 216 196 214 208 210'], a, lt);
  },

  // Layer 2: EXTREMELY detailed face — deep wrinkles, age spots, joyful expression
  (g, a) => {
    // === EYES (small, deeply set between heavy folds) ===
    // Left eye — upper lid
    pp(g, [
      'M 154 114 C 156 110 160 108 164 108 C 168 108 172 110 174 114'
    ], a);
    // Left eye — lower lid
    pp(g, [
      'M 154 114 C 156 118 160 120 164 120 C 168 120 172 118 174 114'
    ], a);
    // Left iris
    fe(g, 'circle', { cx: 164, cy: 116, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    // Left pupil
    fe(g, 'circle', { cx: 164, cy: 116, r: 1.6, fill: a ? HL : '#2D1B0E' }, a);

    // Right eye — upper lid
    pp(g, [
      'M 182 114 C 184 110 188 108 192 108 C 196 108 200 110 202 114'
    ], a);
    // Right eye — lower lid
    pp(g, [
      'M 182 114 C 184 118 188 120 192 120 C 196 120 200 118 202 114'
    ], a);
    // Right iris
    fe(g, 'circle', { cx: 192, cy: 116, r: 3.2, fill: a ? HL : '#5E4023' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 192, cy: 116, r: 1.6, fill: a ? HL : '#2D1B0E' }, a);

    // Heavy upper eyelid folds (droopy, elderly skin)
    pp(g, ['M 152 112 C 156 106 162 104 168 106 C 172 108 174 112 174 114'], a, lt);
    pp(g, ['M 180 114 C 180 108 184 104 190 104 C 196 106 200 108 204 112'], a, lt);
    // Double eyelid crease left
    pp(g, ['M 154 108 C 158 102 164 100 170 102'], a, lt);
    // Double eyelid crease right
    pp(g, ['M 180 102 C 186 100 192 102 198 108'], a, lt);

    // Lower eyelid bags — puffy, aged
    pp(g, ['M 154 118 C 158 122 162 124 166 122 C 170 120 174 118 174 116'], a, lt);
    pp(g, ['M 182 116 C 182 118 186 122 190 124 C 194 122 198 118 202 116'], a, lt);
    // Under-eye crease (deep, dark)
    pp(g, ['M 152 122 C 156 126 162 128 168 126', 'M 180 126 C 186 128 192 126 198 122'], a, lt);
    // Under-eye secondary fold
    pp(g, ['M 154 126 C 158 130 164 132 170 130', 'M 182 130 C 188 132 194 130 200 126'], a, lt);

    // === EYEBROWS (sparse, thin, white/gray) ===
    pp(g, ['M 150 104 C 156 98 164 96 172 100'], a, lt);
    pp(g, ['M 184 100 C 190 96 198 98 204 104'], a, lt);
    // Individual sparse brow hairs
    pps(g, [
      'M 154 102 L 156 100', 'M 160 100 L 162 98', 'M 166 98 L 168 97',
      'M 190 98 L 192 97', 'M 196 98 L 198 100', 'M 200 100 L 202 102'
    ], a, 0.5, '#C8C0B4');

    // === LARGE ANGULAR NOSE ===
    // Bridge — starts from brow, angled
    pp(g, ['M 176 104 C 175 108 174 114 173 120 C 172 126 170 132 168 136'], a);
    // Bridge shadow line right
    pp(g, ['M 178 108 C 178 114 178 120 176 128'], a, lt);
    // Nose tip — bulbous, elderly
    pp(g, [
      'M 166 138 C 164 140 162 142 162 144 C 162 146 166 148 172 150 C 178 148 182 146 184 144 C 186 142 184 140 182 138'
    ], a);
    // Nostril left
    pp(g, [
      'M 164 144 C 162 142 160 140 160 138 C 160 136 162 136 164 138'
    ], a);
    // Nostril right
    pp(g, [
      'M 184 144 C 186 142 188 140 188 138 C 188 136 186 136 184 138'
    ], a);
    // Nostril openings
    pp(g, ['M 166 146 C 168 144 170 144 172 146', 'M 176 146 C 178 144 180 144 182 146'], a, lt);
    // Nose width crease lines
    pp(g, ['M 168 132 C 166 136 164 140 162 144', 'M 180 132 C 182 136 184 140 186 144'], a);
    // Nose pore texture hints
    pps(g, [
      'M 170 140 L 170 141', 'M 174 141 L 174 142', 'M 168 142 L 168 143',
      'M 176 140 L 176 141', 'M 172 143 L 172 144'
    ], a, 0.4, '#B89870');

    // === THE HUGE SMILE (the defining feature!) ===
    // Upper lip line — wide open grin, stretching from ear to ear
    pp(g, [
      'M 146 152 C 150 148 156 144 164 142 C 170 140 176 140 182 142 C 190 144 196 148 200 152'
    ], a);
    // Lower lip / jaw — mouth WIDE open with genuine joy
    pp(g, [
      'M 146 152 C 148 162 154 172 162 178 C 168 182 172 184 176 182 C 180 182 186 178 192 172 C 198 164 202 158 200 152'
    ], a);
    // Upper lip cupid's bow
    pp(g, ['M 164 142 C 168 140 174 140 178 142'], a);
    // Teeth line (upper row)
    pp(g, ['M 150 154 L 196 154'], a);
    // Individual teeth separators — 6 teeth visible
    pp(g, [
      'M 158 154 L 158 161',
      'M 164 154 L 164 162',
      'M 170 154 L 170 163',
      'M 176 154 L 176 163',
      'M 182 154 L 182 162',
      'M 188 154 L 188 161'
    ], a, lt);
    // Lower teeth hint
    pp(g, ['M 156 168 L 190 168'], a, lt);
    pp(g, [
      'M 164 166 L 164 170', 'M 172 166 L 172 172',
      'M 180 166 L 180 170', 'M 176 166 L 176 171'
    ], a, lt);
    // Lip corners — deep laugh creases, skin folding
    pp(g, [
      'M 146 152 C 144 150 142 148 142 146 C 142 144 144 142 146 144',
      'M 200 152 C 202 150 204 148 204 146 C 204 144 202 142 200 144'
    ], a);
    // Lower lip volume
    pp(g, ['M 158 174 C 166 180 176 182 186 176'], a, lt);

    // === FOREHEAD WRINKLES (4 deep horizontal creases — parallel to brow) ===
    pp(g, ['M 150 78 C 158 74 168 72 178 72 C 188 74 196 76 204 80'], a, lt);
    pp(g, ['M 148 84 C 156 80 168 78 178 78 C 188 80 196 82 204 86'], a, lt);
    pp(g, ['M 150 90 C 158 86 168 84 178 84 C 188 86 196 88 202 92'], a, lt);
    pp(g, ['M 152 96 C 160 92 170 90 180 90 C 190 92 196 94 200 98'], a, lt);
    // Deep secondary forehead creases
    pp(g, ['M 156 81 C 162 78 172 76 182 78 C 190 80 196 82 200 84'], a, lt);
    // Vertical frown lines between brows
    pp(g, ['M 174 100 C 173 96 172 92 172 88', 'M 180 100 C 181 96 182 92 182 88'], a, lt);

    // === CROW'S FEET (4 lines each side, deep from squinting/smiling) ===
    // Left crow's feet
    pp(g, [
      'M 150 110 C 146 106 142 104 138 104',
      'M 150 114 C 146 112 142 112 138 114',
      'M 150 118 C 146 120 142 122 138 126',
      'M 150 122 C 146 126 142 130 140 136'
    ], a, lt);
    // Right crow's feet
    pp(g, [
      'M 204 110 C 208 106 212 104 216 104',
      'M 204 114 C 208 112 212 112 216 114',
      'M 204 118 C 208 120 212 122 216 126',
      'M 204 122 C 208 126 212 130 214 136'
    ], a, lt);

    // === NASOLABIAL FOLDS (deep creases from nose to mouth corners) ===
    pp(g, [
      'M 160 130 C 158 136 154 144 148 152',
      'M 188 130 C 190 136 194 144 200 152'
    ], a);
    // Secondary nasolabial crease (parallel)
    pp(g, [
      'M 158 134 C 156 140 152 148 146 154',
      'M 190 134 C 192 140 196 148 202 154'
    ], a, lt);

    // === MARIONETTE LINES (below mouth corners) ===
    pp(g, ['M 146 154 C 144 160 144 166 146 172', 'M 200 154 C 202 160 202 166 200 172'], a, lt);

    // === NECK WRINKLES (horizontal bands on thin neck) ===
    pp(g, ['M 158 172 C 164 170 178 170 186 172'], a, lt);
    pp(g, ['M 160 176 C 166 174 178 174 184 176'], a, lt);
    pp(g, ['M 160 180 C 166 178 178 178 184 180'], a, lt);
    pp(g, ['M 162 184 C 168 182 176 182 182 184'], a, lt);

    // === CHIN CREASE ===
    pp(g, ['M 164 180 C 168 184 174 184 180 180'], a, lt);

    // === CHEEK FOLDS (from smiling, bunching up under eyes) ===
    pp(g, ['M 148 130 C 150 134 154 136 158 136', 'M 198 130 C 196 134 192 136 188 136'], a, lt);
    pp(g, ['M 146 136 C 148 140 152 142 156 140', 'M 200 136 C 198 140 194 142 190 140'], a, lt);

    // === AGE SPOTS / LIVER SPOTS (forehead + temples) ===
    fe(g, 'circle', { cx: 158, cy: 82, r: 3.5, fill: a ? HL : '#C49A6C', opacity: '0.35' }, a);
    fe(g, 'circle', { cx: 180, cy: 76, r: 2.5, fill: a ? HL : '#C49A6C', opacity: '0.28' }, a);
    fe(g, 'circle', { cx: 196, cy: 88, r: 2.2, fill: a ? HL : '#C49A6C', opacity: '0.32' }, a);
    fe(g, 'circle', { cx: 168, cy: 74, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.25' }, a);
    fe(g, 'circle', { cx: 148, cy: 94, r: 2.0, fill: a ? HL : '#C49A6C', opacity: '0.22' }, a);
    // Temple spots
    fe(g, 'circle', { cx: 144, cy: 106, r: 1.6, fill: a ? HL : '#C49A6C', opacity: '0.2' }, a);
    fe(g, 'circle', { cx: 210, cy: 104, r: 1.4, fill: a ? HL : '#C49A6C', opacity: '0.18' }, a);
    // Cheek spots
    fe(g, 'circle', { cx: 152, cy: 138, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.2' }, a);
    fe(g, 'circle', { cx: 200, cy: 136, r: 1.5, fill: a ? HL : '#C49A6C', opacity: '0.18' }, a);
  },

  // Layer 3: Hair — bald dome, sparse white wisps on sides, shine
  (g, a) => {
    // Bald dome outline — smooth, shiny top with slight bumps
    pp(g, [
      'M 146 110 C 144 96 146 82 152 72 C 158 64 166 60 174 58 C 182 56 190 58 196 62 C 204 68 210 78 212 92 C 213 100 212 108 210 114'
    ], a);
    // Dome shape refinement — frontal ridge
    pp(g, ['M 150 80 C 156 70 166 64 176 60 C 186 58 196 62 204 72'], a, lt);
    // Shine arc on bald dome — primary highlight
    pp(g, ['M 162 66 C 170 60 182 58 192 64'], a, lt);
    // Secondary shine
    pp(g, ['M 166 72 C 174 68 184 68 190 72'], a, lt);
    // Tertiary subtle shine
    pp(g, ['M 168 76 C 174 74 180 74 186 76'], a, lt);

    // === Left side sparse white hair wisps ===
    // Wispy individual strands — very thin, white
    pps(g, [
      'M 142 106 C 138 102 134 104 132 110',
      'M 140 110 C 136 108 132 110 130 116',
      'M 138 116 C 134 114 130 116 128 122',
      'M 138 122 C 134 120 130 122 128 128',
      'M 140 128 C 136 126 132 128 130 134',
      'M 142 134 C 138 132 134 134 132 140',
      'M 142 140 C 138 138 134 140 134 144'
    ], a, 0.6, '#E8E4E0');
    // Slightly thicker background wisps left
    pps(g, [
      'M 140 108 C 136 106 132 108 132 114',
      'M 138 118 C 134 116 130 118 130 124',
      'M 140 126 C 136 124 132 126 132 132',
      'M 142 136 C 138 134 134 136 134 142'
    ], a, 0.8, '#D8D4D0');

    // === Right side sparse white hair wisps ===
    pps(g, [
      'M 210 106 C 214 102 218 104 220 110',
      'M 212 110 C 216 108 220 110 222 116',
      'M 214 116 C 218 114 222 116 224 122',
      'M 214 122 C 218 120 222 122 224 128',
      'M 212 128 C 216 126 220 128 222 134',
      'M 210 134 C 214 132 218 134 220 140',
      'M 210 140 C 214 138 218 140 218 144'
    ], a, 0.6, '#E8E4E0');
    // Slightly thicker background wisps right
    pps(g, [
      'M 212 108 C 216 106 220 108 220 114',
      'M 214 118 C 218 116 222 118 222 124',
      'M 212 126 C 216 124 220 126 220 132',
      'M 210 136 C 214 134 218 136 218 142'
    ], a, 0.8, '#D8D4D0');

    // One lonely wisp on top of bald head
    pps(g, [
      'M 174 60 C 176 54 180 54 182 60',
      'M 178 58 C 180 52 184 54 184 60'
    ], a, 0.5, '#E0DCD8');

    // Behind-ear hair tufts
    pps(g, [
      'M 128 132 C 124 130 120 132 120 138',
      'M 224 132 C 228 130 232 132 232 138'
    ], a, 0.7, '#D8D4D0');
  },

  // Layer 4: Clothing — cream button-up short-sleeve shirt with collar
  (g, a) => {
    // === COLLAR (open at neck, V-shape) ===
    // Left collar flap — stiff, folded
    pp(g, [
      'M 158 188 C 152 184 146 186 142 192 C 138 198 140 206 146 208 C 150 210 156 208 160 204'
    ], a);
    // Left collar inner fold
    pp(g, ['M 148 192 C 146 196 146 200 148 204'], a, lt);
    // Left collar edge detail
    pp(g, ['M 142 192 C 140 190 138 192 138 196 C 138 200 140 202 142 200'], a, lt);

    // Right collar flap
    pp(g, [
      'M 186 188 C 192 184 198 186 202 192 C 206 198 204 206 198 208 C 194 210 188 208 184 204'
    ], a);
    // Right collar inner fold
    pp(g, ['M 196 192 C 198 196 198 200 196 204'], a, lt);
    // Right collar edge detail
    pp(g, ['M 202 192 C 204 190 206 192 206 196 C 206 200 204 202 202 200'], a, lt);

    // Collar base — connects around neck
    pp(g, [
      'M 146 208 C 156 212 164 214 172 214 C 180 214 188 212 198 208'
    ], a);
    // V-opening center line
    pp(g, ['M 172 214 L 172 290'], a, lt);
    // Inner V shadow lines
    pp(g, ['M 170 216 L 168 290', 'M 174 216 L 176 290'], a, lt);

    // === BUTTONS (3 visible down the front) ===
    fe(g, 'circle', { cx: 172, cy: 228, r: 2.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 250, r: 2.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    fe(g, 'circle', { cx: 172, cy: 272, r: 2.4, fill: 'none', stroke: a ? HL : P, 'stroke-width': a ? HW : PW }, a);
    // Button holes — 4 holes each
    pps(g, [
      'M 171 227 L 171 229', 'M 173 227 L 173 229',
      'M 171 249 L 171 251', 'M 173 249 L 173 251',
      'M 171 271 L 171 273', 'M 173 271 L 173 273'
    ], a, 0.4, '#A09880');

    // === SHOULDER SEAMS ===
    pp(g, [
      'M 146 204 C 136 200 126 200 118 208',
      'M 198 204 C 208 200 218 200 226 208'
    ], a, lt);
    // Shirt seam on shoulder top
    pp(g, ['M 140 198 C 134 196 128 198 122 204', 'M 204 198 C 210 196 216 198 222 204'], a, lt);

    // === SLEEVE HEMS (short sleeves) ===
    pp(g, ['M 114 224 C 118 226 122 228 126 226', 'M 230 224 C 226 226 222 228 218 226'], a, lt);

    // Shirt chest fold lines — fabric draping
    pp(g, [
      'M 134 218 C 140 222 148 224 158 224',
      'M 210 218 C 204 222 196 224 186 224'
    ], a, lt);
    // Shirt mid-body wrinkle
    pp(g, ['M 130 240 C 140 244 152 246 162 244', 'M 214 240 C 204 244 192 246 182 244'], a, lt);
    // Belly drape line
    pp(g, ['M 136 260 C 144 264 156 266 172 266 C 188 266 200 264 208 260'], a, lt);

    // Sleeve wrinkles (left arm)
    pp(g, ['M 116 220 C 120 224 124 222 126 218', 'M 114 228 C 118 232 122 230 124 226'], a, lt);
    // Sleeve wrinkles (right arm)
    pp(g, ['M 228 220 C 224 224 220 222 218 218', 'M 230 228 C 226 232 222 230 220 226'], a, lt);
  },

  // Layer 5: Hands + water bottle (raised right) + left hand near plate
  (g, a) => {
    // === RIGHT ARM — raised, holding water bottle ===
    // Upper arm
    pp(g, [
      'M 228 214 C 234 206 240 196 246 186 C 252 176 256 170 260 164'
    ], a);
    // Forearm inner line
    pp(g, ['M 230 216 C 236 208 244 198 252 188 C 256 182 260 176 262 170'], a, lt);
    // Arm vein/tendon detail
    pp(g, ['M 242 196 C 248 188 254 178 258 172'], a, lt);
    // Elbow crease
    pp(g, ['M 238 198 C 240 196 244 196 246 198'], a, lt);

    // === RIGHT HAND gripping bottle — fingers wrapping around ===
    // Thumb — slightly apart, hooked around bottle
    pp(g, [
      'M 260 160 C 258 154 254 150 252 150 C 250 150 248 154 248 160 C 248 164 250 168 252 168'
    ], a);
    // Index finger
    pp(g, [
      'M 256 158 C 254 152 250 148 248 148 C 246 148 244 152 244 158 C 244 162 246 166 248 166'
    ], a);
    // Index finger knuckle wrinkle
    pp(g, ['M 248 152 C 250 150 252 150 254 152'], a, lt);
    // Middle finger
    pp(g, [
      'M 252 160 C 250 154 246 150 244 150 C 242 150 240 154 240 160 C 240 164 242 168 244 168'
    ], a);
    // Ring finger
    pp(g, [
      'M 248 162 C 246 158 242 154 240 154 C 238 154 236 158 236 164 C 236 168 238 170 240 170'
    ], a);
    // Pinky hint
    pp(g, ['M 244 166 C 242 162 238 160 236 160 C 234 160 232 164 234 168 C 236 172 238 172 240 170'], a, lt);
    // Finger nail hints
    pps(g, [
      'M 250 150 C 252 148 254 150 252 152',
      'M 246 148 C 248 146 250 148 248 150',
      'M 242 150 C 244 148 246 150 244 152',
      'M 238 154 C 240 152 242 154 240 156'
    ], a, 0.5, '#C8B090');
    // Knuckle wrinkles on gripping hand
    pps(g, [
      'M 244 156 L 248 156', 'M 240 158 L 244 158', 'M 236 162 L 240 162'
    ], a, 0.4, '#C8A880');

    // === WATER BOTTLE ===
    // Bottle body (tall cylinder) — left side
    pp(g, ['M 240 94 L 240 170'], a);
    // Bottle body — right side
    pp(g, ['M 264 94 L 264 170'], a);
    // Bottle bottom curve
    pp(g, ['M 240 170 C 240 176 248 178 252 178 C 256 178 264 176 264 170'], a);
    // Bottle neck taper
    pp(g, [
      'M 240 94 C 240 88 244 84 248 82',
      'M 264 94 C 264 88 260 84 256 82'
    ], a);
    // Bottle mouth — cylindrical opening
    pp(g, ['M 248 82 L 248 74 L 256 74 L 256 82'], a);
    // Cap
    pp(g, ['M 246 74 L 246 66 L 258 66 L 258 74'], a);
    // Cap ridges
    pp(g, ['M 247 68 L 257 68', 'M 247 70 L 257 70', 'M 247 72 L 257 72'], a, lt);
    // Label area outline
    pp(g, ['M 242 112 L 262 112 L 262 150 L 242 150 Z'], a, lt);
    // Label inner detail — mountain logo
    pp(g, [
      'M 244 118 L 258 118',
      'M 248 124 L 252 120 L 256 124',
      'M 244 130 L 258 130',
      'M 244 138 L 258 138',
      'M 244 144 L 258 144'
    ], a, lt);
    // Bottle emboss lines
    pp(g, ['M 242 100 L 262 100', 'M 242 106 L 262 106'], a, lt);
    // Water level curved meniscus
    pp(g, ['M 242 134 C 248 132 256 132 262 134'], a, lt);

    // === LEFT ARM — resting near plate on table ===
    pp(g, [
      'M 118 216 C 112 226 108 240 106 256 C 104 268 106 278 112 284'
    ], a);
    // Left forearm inner detail
    pp(g, ['M 116 218 C 110 228 106 242 104 258 C 102 270 104 280 110 286'], a, lt);
    // Arm vein
    pp(g, ['M 112 234 C 110 242 108 252 108 262'], a, lt);

    // === LEFT HAND with fingers near table ===
    // Palm and back of hand
    pp(g, [
      'M 112 284 C 118 280 124 270 130 258 C 134 248 136 238 136 230'
    ], a);
    // Index finger
    pp(g, [
      'M 108 264 C 104 258 100 252 100 248 C 100 244 104 242 106 246 C 108 250 108 256 108 260'
    ], a);
    // Middle finger
    pp(g, [
      'M 110 268 C 106 262 102 256 102 252 C 102 248 106 246 108 250 C 110 254 110 260 110 264'
    ], a);
    // Ring finger
    pp(g, [
      'M 112 272 C 108 266 104 260 106 256 C 108 254 110 256 112 260'
    ], a);
    // Pinky hint
    pp(g, ['M 114 276 C 110 272 108 266 110 262 C 112 260 114 262 114 266'], a, lt);
    // Thumb (left hand)
    pp(g, ['M 118 260 C 122 254 126 250 128 252 C 130 256 128 262 124 266'], a);
    // Finger nail hints left hand
    pps(g, [
      'M 102 246 C 104 244 106 246 104 248',
      'M 104 250 C 106 248 108 250 106 252',
      'M 108 256 C 110 254 112 256 110 258'
    ], a, 0.5, '#C8B090');
    // Knuckle wrinkles
    pps(g, [
      'M 104 252 L 108 254', 'M 106 258 L 110 260', 'M 110 264 L 114 266'
    ], a, 0.4, '#C8A880');

    // === AGE SPOTS on hands ===
    fe(g, 'circle', { cx: 112, cy: 270, r: 2.4, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 120, cy: 262, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.35' }, a);
    fe(g, 'circle', { cx: 116, cy: 256, r: 1.4, fill: a ? HL : '#C49A6C', opacity: '0.25' }, a);
    fe(g, 'circle', { cx: 254, cy: 164, r: 1.8, fill: a ? HL : '#C49A6C', opacity: '0.4' }, a);
    fe(g, 'circle', { cx: 248, cy: 158, r: 1.5, fill: a ? HL : '#C49A6C', opacity: '0.3' }, a);
    fe(g, 'circle', { cx: 244, cy: 166, r: 1.2, fill: a ? HL : '#C49A6C', opacity: '0.25' }, a);
  },

  // Layer 6: Table, tablecloth, plate, glass, cutlery, balloons, chair, fire extinguisher, wall
  (g, a) => {
    // === TABLE EDGE ===
    pp(g, ['M 0 290 L 360 290'], a);
    pp(g, ['M 0 290 L 0 450', 'M 360 290 L 360 450'], a);

    // === BAROQUE TABLECLOTH PATTERN (programmatic spirals/scrolls) ===
    // Row 1 of baroque scrolls
    for (let x = 10; x < 350; x += 50) {
      pp(g, [
        `M ${x} 312 C ${x + 6} 304 ${x + 14} 300 ${x + 24} 304 C ${x + 34} 308 ${x + 34} 318 ${x + 24} 322 C ${x + 18} 324 ${x + 12} 322 ${x + 10} 316 C ${x + 8} 310 ${x + 14} 306 ${x + 20} 308`
      ], a, lt);
      // Inner spiral detail
      pp(g, [
        `M ${x + 14} 308 C ${x + 18} 306 ${x + 22} 308 ${x + 22} 312 C ${x + 22} 316 ${x + 18} 318 ${x + 14} 316`
      ], a, lt);
    }
    // Row 2 of baroque scrolls
    for (let x = 25; x < 350; x += 50) {
      pp(g, [
        `M ${x} 342 C ${x + 6} 334 ${x + 14} 330 ${x + 24} 334 C ${x + 34} 338 ${x + 34} 348 ${x + 24} 352 C ${x + 18} 354 ${x + 12} 352 ${x + 10} 346 C ${x + 8} 340 ${x + 14} 336 ${x + 20} 338`
      ], a, lt);
      pp(g, [
        `M ${x + 14} 338 C ${x + 18} 336 ${x + 22} 338 ${x + 22} 342 C ${x + 22} 346 ${x + 18} 348 ${x + 14} 346`
      ], a, lt);
    }
    // Row 3 of scrolls
    for (let x = 10; x < 350; x += 50) {
      pp(g, [
        `M ${x} 375 C ${x + 6} 367 ${x + 14} 363 ${x + 24} 367 C ${x + 34} 371 ${x + 34} 381 ${x + 24} 385 C ${x + 18} 387 ${x + 12} 385 ${x + 10} 379 C ${x + 8} 373 ${x + 14} 369 ${x + 20} 371`
      ], a, lt);
    }
    // Row 4
    for (let x = 25; x < 350; x += 50) {
      pp(g, [
        `M ${x} 405 C ${x + 6} 397 ${x + 14} 393 ${x + 24} 397 C ${x + 34} 401 ${x + 34} 411 ${x + 24} 415 C ${x + 18} 417 ${x + 12} 415 ${x + 10} 409 C ${x + 8} 403 ${x + 14} 399 ${x + 20} 401`
      ], a, lt);
    }
    // Connecting S-curves between rows
    for (let x = 40; x < 360; x += 50) {
      pp(g, [
        `M ${x} 323 C ${x + 3} 328 ${x + 2} 334 ${x - 2} 338`,
        `M ${x} 353 C ${x + 3} 360 ${x + 2} 367 ${x - 2} 371`,
        `M ${x} 386 C ${x + 3} 392 ${x + 2} 398 ${x - 2} 401`
      ], a, lt);
    }
    // Leaf/floral accents between scrolls
    for (let x = 5; x < 350; x += 50) {
      pp(g, [
        `M ${x + 42} 314 C ${x + 44} 310 ${x + 48} 312 ${x + 46} 316`,
        `M ${x + 42} 346 C ${x + 44} 342 ${x + 48} 344 ${x + 46} 348`
      ], a, lt);
    }

    // === PLATE (oval, white, in front of figure) ===
    // Outer rim
    pp(g, [
      'M 138 316 C 138 304 158 298 180 298 C 202 298 222 304 222 316 C 222 328 202 334 180 334 C 158 334 138 328 138 316 Z'
    ], a);
    // Inner rim
    pp(g, [
      'M 146 316 C 146 308 162 304 180 304 C 198 304 214 308 214 316 C 214 324 198 328 180 328 C 162 328 146 324 146 316 Z'
    ], a, lt);
    // Plate center well
    pp(g, [
      'M 156 316 C 156 312 166 308 180 308 C 194 308 204 312 204 316 C 204 320 194 324 180 324 C 166 324 156 320 156 316 Z'
    ], a, lt);

    // === WINE GLASS (empty, detailed crystal shape) ===
    // Bowl left
    pp(g, [
      'M 78 278 C 78 266 84 260 94 258 C 96 258 98 258 100 260'
    ], a);
    // Bowl right
    pp(g, [
      'M 114 278 C 114 266 108 260 100 260'
    ], a);
    // Bowl bottom curve left
    pp(g, ['M 78 278 C 78 288 86 292 96 294'], a);
    // Bowl bottom curve right
    pp(g, ['M 114 278 C 114 288 106 292 96 294'], a);
    // Stem
    pp(g, ['M 96 294 L 96 320'], a);
    // Stem node
    pp(g, ['M 94 298 C 94 296 98 296 98 298'], a, lt);
    // Base
    pp(g, ['M 82 320 C 82 322 88 324 96 324 C 104 324 110 322 110 320'], a);
    pp(g, ['M 82 320 L 110 320'], a);
    // Glass rim highlight line
    pp(g, ['M 80 260 C 86 256 94 254 100 256 C 106 258 112 262 114 266'], a, lt);

    // === CUTLERY ===
    // Knife (right of plate)
    pp(g, ['M 234 296 L 234 344'], a, lt);
    pp(g, ['M 232 296 C 232 292 234 288 236 292 C 238 296 236 298 234 298'], a, lt);
    // Knife blade edge
    pp(g, ['M 232 298 L 232 344'], a, lt);
    // Fork (left of plate)
    pp(g, ['M 126 296 L 126 344'], a, lt);
    // Fork tines
    pp(g, [
      'M 123 296 L 123 308',
      'M 125 296 L 125 308',
      'M 127 296 L 127 308',
      'M 129 296 L 129 308'
    ], a, lt);
    // Fork neck
    pp(g, ['M 124 308 C 125 310 127 310 128 308'], a, lt);

    // === DECORATIVE NAPKIN/CARD on table ===
    pp(g, [
      'M 248 300 L 272 300 L 272 326 L 248 326 Z'
    ], a, lt);
    // Napkin fold pattern
    pp(g, [
      'M 250 306 L 270 306',
      'M 250 312 L 270 312',
      'M 250 318 L 270 318'
    ], a, lt);
    // Napkin corner fold
    pp(g, ['M 264 300 L 272 308'], a, lt);

    // === BALLOONS (3 gold ovals at top — celebration!) ===
    // Left balloon
    pp(g, [
      'M 74 48 C 64 28 68 6 84 2 C 100 -2 106 18 96 40 C 90 50 80 52 74 48 Z'
    ], a);
    // Center balloon (higher)
    pp(g, [
      'M 170 38 C 160 18 164 -4 180 -8 C 196 -10 202 10 192 32 C 186 42 176 44 170 38 Z'
    ], a);
    // Right balloon
    pp(g, [
      'M 282 54 C 272 34 276 12 292 8 C 308 4 314 24 304 46 C 298 56 288 58 282 54 Z'
    ], a);
    // Balloon strings — curving
    pp(g, [
      'M 84 50 C 86 58 84 64 82 70 C 80 76 82 82 84 86',
      'M 180 40 C 182 48 180 56 178 62 C 176 68 178 74 180 78',
      'M 292 56 C 294 64 292 72 290 76 C 288 80 290 84 292 88'
    ], a, lt);
    // Balloon knots
    pp(g, [
      'M 82 48 L 86 52 L 82 52',
      'M 178 38 L 182 42 L 178 42',
      'M 290 54 L 294 58 L 290 58'
    ], a, lt);

    // === CHAIR (ladder-back design, behind figure on right) ===
    // Vertical posts — tapered
    pp(g, ['M 278 68 L 278 400', 'M 324 68 L 324 400'], a, lt);
    // Horizontal ladder rungs — 4 bars
    pp(g, [
      'M 280 88 L 322 88',
      'M 280 128 L 322 128',
      'M 280 168 L 322 168',
      'M 280 208 L 322 208'
    ], a, lt);
    // Chair top rail (curved, decorative)
    pp(g, ['M 276 68 C 288 58 312 58 324 68'], a, lt);
    // Seat
    pp(g, ['M 276 250 L 326 250'], a, lt);
    // Chair leg front
    pp(g, ['M 278 250 L 280 400', 'M 324 250 L 322 400'], a, lt);
    // Chair back vertical slat
    pp(g, ['M 300 68 L 300 250'], a, lt);

    // === FIRE EXTINGUISHER (on wall, right area) ===
    // Body — cylinder
    pp(g, ['M 22 188 L 50 188 L 50 260 L 22 260 Z'], a, lt);
    // Rounded top
    pp(g, ['M 22 188 C 22 182 30 178 36 178 C 42 178 50 182 50 188'], a, lt);
    // Handle assembly
    pp(g, ['M 30 178 L 30 170 L 42 170 L 42 178'], a, lt);
    // Nozzle hose
    pp(g, ['M 36 170 C 36 164 34 160 30 158 C 26 156 22 158 20 162 L 16 170'], a, lt);
    // Pressure gauge
    fe(g, 'circle', { cx: 36, cy: 202, r: 4.5, fill: 'none', stroke: a ? HL : LP, 'stroke-width': a ? 1.5 : SW }, a);
    // Label band
    pp(g, ['M 24 222 L 48 222 L 48 244 L 24 244 Z'], a, lt);
    // Warning triangle
    pp(g, ['M 36 192 L 40 186 L 44 192 Z'], a, lt);

    // === ANOTHER PERSON'S ARM (left edge hint) ===
    pp(g, ['M 0 248 C 10 244 20 242 30 246 C 40 250 44 258 42 266'], a, lt);
    // Sleeve edge
    pp(g, ['M 0 244 C 8 240 16 238 24 240'], a, lt);

    // === WALL TEXTURE hints — stucco/textured white ===
    pps(g, [
      'M 60 40 C 62 38 64 40 62 42',
      'M 300 110 C 302 108 304 110 302 112',
      'M 340 180 C 342 178 344 180 342 182',
      'M 80 160 C 82 158 84 160 82 162',
      'M 200 30 C 202 28 204 30 202 32'
    ], a, 0.3, '#D0D0D0');

    // === ADDITIONAL WATER BOTTLES on table (right side background) ===
    pp(g, ['M 310 270 L 310 290', 'M 320 270 L 320 290'], a, lt);
    pp(g, ['M 310 270 C 310 266 314 264 315 264 C 316 264 320 266 320 270'], a, lt);
    pp(g, ['M 330 275 L 330 290', 'M 338 275 L 338 290'], a, lt);
    pp(g, ['M 330 275 C 330 272 333 270 334 270 C 335 270 338 272 338 275'], a, lt);
  },

  // Layer 7: Color fills — figure (gradient skin, ears, bald head, hair, shirt, hands)
  (g, a, defs) => {
    // === SKIN GRADIENT (elderly — warm base with cooler shadows on sides) ===
    const skinGrad = gd(defs, 'r', [
      ['0%', '#F0CFA4', 1],
      ['40%', '#EDCBA0', 1],
      ['70%', '#E4BC90', 1],
      ['100%', '#D8A878', 1]
    ], { cx: 172, cy: 120, r: 60 });

    // Head fill with gradient
    fl(g,
      'M 148 122 C 147 108 148 94 152 82 C 156 72 162 66 170 64 C 176 62 182 62 188 66 C 196 70 202 80 205 92 C 207 102 207 114 206 126 C 204 136 200 146 194 154 C 190 160 184 164 178 168 C 174 170 170 170 166 168 C 160 164 154 158 150 150 C 148 142 147 132 148 122 Z',
      skinGrad, a);

    // Face shadow — left side (away from light)
    fo(g,
      'M 148 122 C 147 108 148 94 152 82 C 150 86 148 92 148 100 C 148 110 148 120 148 130 C 148 140 150 148 154 154 L 150 150 C 148 142 147 132 148 122 Z',
      '#B8926C', 0.2, false);

    // Face shadow — right jaw area
    fo(g,
      'M 194 154 C 200 146 204 136 206 126 C 206 120 206 114 206 108 L 208 112 C 208 120 208 130 206 140 C 204 148 200 154 196 158 Z',
      '#C4986E', 0.15, false);

    // Lower face warm undertone
    fo(g,
      'M 154 140 C 156 148 162 158 168 164 L 172 166 L 176 164 C 182 158 188 148 190 140 C 188 150 184 160 178 166 L 172 168 L 166 166 C 160 160 156 150 154 140 Z',
      '#E0B888', 0.25, false);

    // Forehead highlight — catches overhead light
    hi(g,
      'M 158 78 C 164 74 174 72 184 74 C 192 76 198 80 200 84 C 194 78 184 74 174 74 C 164 74 158 76 158 78 Z',
      0.12, false);

    // === EAR FILLS with gradients ===
    const earGrad = gd(defs, 'r', [
      ['0%', '#DEBA88', 1],
      ['60%', '#E8C090', 1],
      ['100%', '#D4A878', 1]
    ], { cx: 134, cy: 126, r: 16 });

    // Left ear
    fl(g,
      'M 144 106 C 140 102 134 102 130 108 C 126 114 124 122 126 132 C 128 140 132 146 138 148 C 142 150 144 146 144 140 C 144 130 142 118 144 106 Z',
      earGrad, false);
    // Right ear
    fl(g,
      'M 208 106 C 212 102 218 102 222 108 C 226 114 228 122 226 132 C 224 140 220 146 214 148 C 210 150 208 146 208 140 C 208 130 210 118 208 106 Z',
      earGrad, false);
    // Inner ear pink — concha
    feo(g, 'ellipse', { cx: 134, cy: 124, rx: 4, ry: 10, fill: '#D4A080' }, 0.5, false);
    feo(g, 'ellipse', { cx: 218, cy: 124, rx: 4, ry: 10, fill: '#D4A080' }, 0.5, false);
    // Earlobe flesh tone
    feo(g, 'circle', { cx: 134, cy: 148, r: 4, fill: '#E0B898' }, 0.4, false);
    feo(g, 'circle', { cx: 218, cy: 148, r: 4, fill: '#E0B898' }, 0.4, false);

    // === BALD HEAD (skin-colored dome with gradient) ===
    const domeGrad = gd(defs, 'r', [
      ['0%', '#F8DCC0', 1],
      ['30%', '#F0CFA4', 1],
      ['60%', '#EDCBA0', 1],
      ['100%', '#D8A878', 1]
    ], { cx: 176, cy: 70, r: 45 });

    fl(g,
      'M 148 112 C 146 98 148 84 154 74 C 160 66 168 62 176 60 C 184 58 192 60 198 64 C 206 70 212 80 214 94 C 215 104 214 112 212 118 L 208 114 C 210 106 210 98 208 92 C 204 80 198 72 190 66 C 182 62 172 62 166 68 C 158 74 152 84 150 98 C 148 106 148 110 148 112 Z',
      domeGrad, false);
    // Dome specular highlight — central
    hi(g,
      'M 168 64 C 174 60 184 58 192 64 C 186 60 178 58 172 60 C 168 62 166 64 168 64 Z',
      0.3, false);
    // Secondary dome highlight
    hi(g,
      'M 164 72 C 172 66 184 66 192 72 C 186 68 176 68 168 70 Z',
      0.2, false);
    // Dome shadow — temple area
    sh(g,
      'M 148 100 C 148 92 150 84 154 78 L 152 80 C 150 86 148 94 148 102 Z',
      0.1, false);
    sh(g,
      'M 208 100 C 210 92 210 84 208 78 L 210 80 C 212 86 212 94 210 102 Z',
      0.1, false);

    // === SIDE HAIR FILL (white/gray with subtle gradient) ===
    const hairGrad = gd(defs, 'l', [
      ['0%', '#F0ECE8', 1],
      ['50%', '#E8E4E0', 1],
      ['100%', '#D8D4D0', 1]
    ], { x1: 130, y1: 108, x2: 145, y2: 140 });
    fl(g,
      'M 144 106 C 140 104 136 106 132 112 C 128 120 128 130 130 138 C 132 144 136 146 142 144 L 144 140 C 142 138 140 132 140 124 C 140 116 142 110 144 106 Z',
      hairGrad, false);
    fl(g,
      'M 208 106 C 212 104 216 106 220 112 C 224 120 224 130 222 138 C 220 144 216 146 210 144 L 208 140 C 210 138 212 132 212 124 C 212 116 210 110 208 106 Z',
      hairGrad, false);

    // === NECK FILL (gradient — slightly darker/reddened) ===
    const neckGrad = gd(defs, 'l', [
      ['0%', '#DEB88C', 1],
      ['50%', '#D8B084', 1],
      ['100%', '#D0A47C', 1]
    ], { x1: 158, y1: 168, x2: 186, y2: 190 });
    fl(g,
      'M 162 168 C 164 172 166 178 166 186 L 178 186 C 178 178 180 172 182 168 L 176 166 L 168 166 Z',
      neckGrad, false);
    // Neck shadow under chin
    sh(g,
      'M 164 168 C 166 170 168 168 172 168 C 176 168 178 170 180 168 L 178 172 C 176 174 170 174 166 172 Z',
      0.15, false);

    // === SHIRT FILL (cream/beige with gradient) ===
    const shirtGrad = gd(defs, 'l', [
      ['0%', '#F0E8D0', 1],
      ['30%', '#F5F0DC', 1],
      ['70%', '#F5F0DC', 1],
      ['100%', '#E8DCC0', 1]
    ], { x1: 108, y1: 200, x2: 236, y2: 290 });
    fl(g,
      'M 114 214 C 120 200 134 192 152 188 C 162 186 168 186 172 186 C 176 186 182 186 192 188 C 210 192 224 200 230 214 L 234 290 L 110 290 Z',
      shirtGrad, a);
    // Shirt shadow left side
    sh(g,
      'M 114 214 C 116 208 120 202 126 198 L 112 290 L 108 290 L 114 214 Z',
      0.08, false);
    // Shirt shadow right side
    sh(g,
      'M 230 214 C 228 208 224 202 218 198 L 232 290 L 236 290 L 230 214 Z',
      0.08, false);
    // Shirt center fold shadow
    sh(g,
      'M 168 216 L 166 290 L 170 290 L 170 216 Z',
      0.06, false);
    sh(g,
      'M 174 216 L 174 290 L 178 290 L 176 216 Z',
      0.06, false);

    // === COLLAR FILL (slightly different tone) ===
    const collarGrad = gd(defs, 'l', [
      ['0%', '#EDE4C8', 1],
      ['50%', '#F2ECD8', 1],
      ['100%', '#E8DCC0', 1]
    ], { x1: 142, y1: 190, x2: 202, y2: 212 });
    fl(g,
      'M 160 190 C 154 186 148 188 144 194 C 140 200 142 208 148 210 C 156 214 166 216 172 216 C 178 216 188 214 196 210 C 202 208 204 200 200 194 C 196 188 190 186 184 190 L 178 202 C 176 206 168 206 166 202 Z',
      collarGrad, false);
    // Collar shadow under fold
    sh(g,
      'M 148 208 C 156 212 166 214 172 214 C 178 214 188 212 196 208 L 198 210 C 190 214 180 216 172 216 C 164 216 154 214 146 210 Z',
      0.12, false);

    // === HAND SKIN FILLS (gradient) ===
    const handGrad = gd(defs, 'r', [
      ['0%', '#F0CFA4', 1],
      ['60%', '#E8C090', 1],
      ['100%', '#D8A878', 1]
    ], { cx: 250, cy: 162, r: 16 });
    // Right hand (gripping bottle)
    fl(g,
      'M 260 158 C 258 152 254 148 250 148 C 246 148 242 152 240 158 C 238 164 238 170 240 172 C 244 174 250 174 254 172 C 258 170 262 164 260 158 Z',
      handGrad, false);
    // Left hand
    fl(g,
      'M 108 260 C 104 254 100 248 100 244 C 102 240 106 242 110 248 C 114 256 116 264 118 272 C 120 278 118 282 114 284 C 110 282 106 276 104 268 C 102 262 104 256 108 260 Z',
      handGrad, false);

    // === ARM SKIN ===
    const armGrad = gd(defs, 'l', [
      ['0%', '#ECC898', 1],
      ['100%', '#DEB088', 1]
    ], { x1: 224, y1: 216, x2: 262, y2: 164 });
    // Right arm fill
    fl(g,
      'M 226 214 C 232 206 240 196 248 186 C 254 178 258 172 260 166 L 264 168 C 262 174 258 182 252 192 C 246 202 238 212 232 220 Z',
      armGrad, false);
    // Left arm fill
    fl(g,
      'M 118 216 C 112 228 108 242 106 256 C 104 268 106 278 112 284 L 116 282 C 112 276 110 268 112 258 C 114 244 118 230 124 220 Z',
      armGrad, false);
    // Arm shadow on right arm (under forearm)
    sh(g,
      'M 232 210 C 238 202 246 192 252 184 L 254 186 C 248 194 240 204 234 212 Z',
      0.08, false);
  },

  // Layer 8: Color fills — scene (tablecloth, plate, glass, balloons, chair, extinguisher, bottle, wall)
  (g, a, defs) => {
    // === WALL (warm off-white with subtle gradient) ===
    const wallGrad = gd(defs, 'l', [
      ['0%', '#FFF8E8', 0.35],
      ['50%', '#FFFBF0', 0.25],
      ['100%', '#F8F0E0', 0.3]
    ], { x1: 0, y1: 0, x2: 360, y2: 290 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 290, fill: wallGrad }, false);

    // Wall light source gradient (from top/right — window)
    const wallLight = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.12],
      ['100%', '#FFFFFF', 0]
    ], { cx: 340, cy: 60, r: 200 });
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 290, fill: wallLight }, false);

    // === ORANGE TABLECLOTH (vibrant gradient) ===
    const clothGrad = gd(defs, 'l', [
      ['0%', '#FF8F00', 1],
      ['30%', '#FFA000', 1],
      ['60%', '#FF8F00', 1],
      ['100%', '#E67E00', 1]
    ], { x1: 0, y1: 290, x2: 360, y2: 450 });
    fe(g, 'rect', { x: 0, y: 290, width: 360, height: 160, fill: clothGrad }, a);

    // === DARKER SPIRAL PATTERN OVERLAY on tablecloth ===
    for (let x = 10; x < 350; x += 50) {
      fo(g,
        `M ${x} 308 C ${x + 6} 300 ${x + 18} 298 ${x + 28} 304 C ${x + 36} 310 ${x + 34} 320 ${x + 26} 324 C ${x + 20} 326 ${x + 14} 322 ${x + 12} 316 C ${x + 10} 310 ${x + 16} 306 ${x + 22} 308 Z`,
        '#E65100', 0.5, false);
      // Inner glow of spiral
      fo(g,
        `M ${x + 12} 310 C ${x + 16} 306 ${x + 22} 306 ${x + 24} 312 C ${x + 26} 318 ${x + 22} 322 ${x + 16} 320 C ${x + 12} 318 ${x + 10} 314 ${x + 12} 310 Z`,
        '#FF9800', 0.2, false);
    }
    for (let x = 25; x < 350; x += 50) {
      fo(g,
        `M ${x} 340 C ${x + 6} 332 ${x + 18} 330 ${x + 28} 336 C ${x + 36} 342 ${x + 34} 352 ${x + 26} 356 C ${x + 20} 358 ${x + 14} 354 ${x + 12} 348 C ${x + 10} 342 ${x + 16} 338 ${x + 22} 340 Z`,
        '#E65100', 0.5, false);
      fo(g,
        `M ${x + 12} 342 C ${x + 16} 338 ${x + 22} 338 ${x + 24} 344 C ${x + 26} 350 ${x + 22} 354 ${x + 16} 352 C ${x + 12} 350 ${x + 10} 346 ${x + 12} 342 Z`,
        '#FF9800', 0.2, false);
    }
    for (let x = 10; x < 350; x += 50) {
      fo(g,
        `M ${x} 374 C ${x + 6} 366 ${x + 18} 364 ${x + 28} 370 C ${x + 36} 376 ${x + 34} 386 ${x + 26} 390 C ${x + 20} 392 ${x + 14} 388 ${x + 12} 382 C ${x + 10} 376 ${x + 16} 372 ${x + 22} 374 Z`,
        '#E65100', 0.5, false);
    }
    for (let x = 25; x < 350; x += 50) {
      fo(g,
        `M ${x} 400 C ${x + 6} 392 ${x + 18} 390 ${x + 28} 396 C ${x + 36} 402 ${x + 34} 412 ${x + 26} 416 C ${x + 20} 418 ${x + 14} 414 ${x + 12} 408 C ${x + 10} 402 ${x + 16} 398 ${x + 22} 400 Z`,
        '#E65100', 0.45, false);
    }
    // Lighter orange accent between rows
    for (let x = 15; x < 340; x += 50) {
      feo(g, 'ellipse', { cx: x + 20, cy: 328, rx: 8, ry: 3, fill: '#FFB74D' }, 0.25, false);
      feo(g, 'ellipse', { cx: x + 20, cy: 360, rx: 8, ry: 3, fill: '#FFB74D' }, 0.25, false);
      feo(g, 'ellipse', { cx: x + 20, cy: 392, rx: 8, ry: 3, fill: '#FFB74D' }, 0.2, false);
    }
    // Tablecloth fold shadow at edge
    sh(g,
      'M 0 288 L 360 288 L 360 296 L 0 296 Z',
      0.1, false);

    // === PLATE (white with gradient — rim highlight, center shadow) ===
    const plateGrad = gd(defs, 'r', [
      ['0%', '#FFFFFF', 1],
      ['50%', '#FAFAFA', 1],
      ['100%', '#F0F0F0', 1]
    ], { cx: 180, cy: 312, r: 40 });
    fl(g,
      'M 140 316 C 140 306 160 300 180 300 C 200 300 220 306 220 316 C 220 326 200 332 180 332 C 160 332 140 326 140 316 Z',
      plateGrad, a);
    // Plate rim highlight
    hi(g,
      'M 148 310 C 158 306 172 304 180 304 C 188 304 202 306 212 310 C 204 304 192 302 180 302 C 168 302 156 304 148 310 Z',
      0.4, false);
    // Plate center well shadow
    sh(g,
      'M 158 318 C 166 322 176 324 180 324 C 184 324 194 322 202 318 C 196 320 188 322 180 322 C 172 322 164 320 158 318 Z',
      0.08, false);

    // === WINE GLASS FILL (transparent with reflections) ===
    const glassGrad = gd(defs, 'l', [
      ['0%', '#F0F0F0', 0.4],
      ['30%', '#E8E8E8', 0.3],
      ['70%', '#F4F4F4', 0.35],
      ['100%', '#E0E0E0', 0.4]
    ], { x1: 78, y1: 258, x2: 114, y2: 294 });
    fl(g,
      'M 80 278 C 80 268 86 262 96 260 C 106 262 112 268 112 278 C 112 288 106 292 96 294 C 86 292 80 288 80 278 Z',
      glassGrad, false);
    // Glass stem
    feo(g, 'rect', { x: 94, y: 294, width: 4, height: 26, fill: '#E0E0E0' }, 0.5, false);
    // Glass base
    feo(g, 'ellipse', { cx: 96, cy: 322, rx: 13, ry: 3, fill: '#DCDCDC' }, 0.5, false);

    // === BALLOON FILLS (gold/yellow with gradients) ===
    const balloonGrad1 = gd(defs, 'r', [
      ['0%', '#FFE082', 1],
      ['40%', '#FFD54F', 1],
      ['100%', '#F9A825', 1]
    ], { cx: 80, cy: 20, r: 30 });
    fl(g,
      'M 74 48 C 64 28 68 6 84 2 C 100 -2 106 18 96 40 C 90 50 80 52 74 48 Z',
      balloonGrad1, a);
    const balloonGrad2 = gd(defs, 'r', [
      ['0%', '#FFE082', 1],
      ['40%', '#FFCA28', 1],
      ['100%', '#F9A825', 1]
    ], { cx: 176, cy: 10, r: 30 });
    fl(g,
      'M 170 38 C 160 18 164 -4 180 -8 C 196 -10 202 10 192 32 C 186 42 176 44 170 38 Z',
      balloonGrad2, false);
    const balloonGrad3 = gd(defs, 'r', [
      ['0%', '#FFE082', 1],
      ['40%', '#FFD54F', 1],
      ['100%', '#F9A825', 1]
    ], { cx: 288, cy: 26, r: 30 });
    fl(g,
      'M 282 54 C 272 34 276 12 292 8 C 308 4 314 24 304 46 C 298 56 288 58 282 54 Z',
      balloonGrad3, false);

    // === CHAIR FILL (brown wood gradient) ===
    const chairGrad = gd(defs, 'l', [
      ['0%', '#8D6E63', 0.25],
      ['50%', '#A1887F', 0.2],
      ['100%', '#795548', 0.25]
    ], { x1: 278, y1: 68, x2: 324, y2: 400 });
    fe(g, 'rect', { x: 278, y: 68, width: 46, height: 332, rx: 3, fill: chairGrad }, false);
    // Chair rungs (slightly darker)
    feo(g, 'rect', { x: 280, y: 86, width: 42, height: 6, rx: 1, fill: '#6D4C41' }, 0.2, false);
    feo(g, 'rect', { x: 280, y: 126, width: 42, height: 6, rx: 1, fill: '#6D4C41' }, 0.2, false);
    feo(g, 'rect', { x: 280, y: 166, width: 42, height: 6, rx: 1, fill: '#6D4C41' }, 0.2, false);
    feo(g, 'rect', { x: 280, y: 206, width: 42, height: 6, rx: 1, fill: '#6D4C41' }, 0.2, false);

    // === FIRE EXTINGUISHER (red with gradient) ===
    const extGrad = gd(defs, 'l', [
      ['0%', '#C62828', 1],
      ['40%', '#E53935', 1],
      ['60%', '#D32F2F', 1],
      ['100%', '#B71C1C', 1]
    ], { x1: 22, y1: 188, x2: 50, y2: 260 });
    fl(g,
      'M 24 188 C 24 182 30 178 36 178 C 42 178 48 182 48 188 L 48 258 L 24 258 Z',
      extGrad, false);
    // Extinguisher handle
    feo(g, 'rect', { x: 30, y: 170, width: 12, height: 8, rx: 1, fill: '#37474F' }, 0.8, false);
    // Label band
    feo(g, 'rect', { x: 26, y: 224, width: 20, height: 18, rx: 1, fill: '#FFEB3B' }, 0.7, false);
    // Extinguisher highlight stripe
    hi(g,
      'M 30 190 L 32 190 L 32 256 L 30 256 Z',
      0.15, false);

    // === WATER BOTTLE FILL ===
    const bottleGrad = gd(defs, 'l', [
      ['0%', '#E3F2FD', 0.8],
      ['30%', '#BBDEFB', 0.6],
      ['70%', '#E1F5FE', 0.7],
      ['100%', '#B3E5FC', 0.8]
    ], { x1: 240, y1: 94, x2: 264, y2: 170 });
    fl(g,
      'M 242 96 L 242 168 C 242 174 250 176 252 176 C 254 176 262 174 262 168 L 262 96 C 262 90 260 86 256 84 L 248 84 C 244 86 242 90 242 96 Z',
      bottleGrad, false);
    // Blue label
    const labelGrad = gd(defs, 'l', [
      ['0%', '#1565C0', 0.6],
      ['50%', '#1976D2', 0.5],
      ['100%', '#0D47A1', 0.6]
    ], { x1: 244, y1: 114, x2: 260, y2: 148 });
    fe(g, 'rect', { x: 244, y: 114, width: 16, height: 34, rx: 1, fill: labelGrad }, false);
    // Cap (blue)
    feo(g, 'rect', { x: 247, y: 67, width: 10, height: 8, rx: 1, fill: '#1565C0' }, 0.9, false);
    // Bottle highlight stripe (plastic reflection)
    hi(g,
      'M 244 96 L 246 96 L 246 168 L 244 168 Z',
      0.25, false);

    // === CUTLERY metal sheen ===
    feo(g, 'rect', { x: 125, y: 296, width: 2, height: 48, rx: 0.5, fill: '#C0C0C0' }, 0.35, false);
    feo(g, 'rect', { x: 233, y: 296, width: 2, height: 48, rx: 0.5, fill: '#C0C0C0' }, 0.35, false);

    // === NAPKIN/CARD FILL ===
    const napkinGrad = gd(defs, 'l', [
      ['0%', '#FFF9C4', 1],
      ['100%', '#FFF59D', 1]
    ], { x1: 248, y1: 300, x2: 272, y2: 326 });
    fe(g, 'rect', { x: 249, y: 301, width: 22, height: 24, rx: 1, fill: napkinGrad }, false);

    // === PERSON'S ARM on left edge ===
    fl(g,
      'M 0 246 C 10 242 22 242 32 248 C 42 254 44 262 42 268 L 38 264 C 40 258 38 252 30 248 C 22 244 12 246 0 250 Z',
      '#F0CFA4', false);

    // Door/opening hint on right background
    feo(g, 'rect', { x: 340, y: 100, width: 20, height: 180, rx: 2, fill: '#E8F5E9' }, 0.12, false);

    // === TABLE SHADOW on tablecloth under objects ===
    // Plate shadow
    feo(g, 'ellipse', { cx: 180, cy: 332, rx: 38, ry: 4, fill: '#BF360C' }, 0.1, false);
    // Glass shadow
    feo(g, 'ellipse', { cx: 96, cy: 324, rx: 14, ry: 3, fill: '#BF360C' }, 0.08, false);
    // Bottle shadow on table
    feo(g, 'ellipse', { cx: 252, cy: 292, rx: 12, ry: 3, fill: '#BF360C' }, 0.08, false);

    // === BACKGROUND WATER BOTTLES (right side) ===
    feo(g, 'rect', { x: 311, y: 271, width: 8, height: 19, rx: 2, fill: '#E3F2FD' }, 0.3, false);
    feo(g, 'rect', { x: 331, y: 276, width: 6, height: 14, rx: 2, fill: '#E3F2FD' }, 0.3, false);
  },

  // Layer 9: Polish — eye catchlights, mouth, teeth, wrinkle shadows, highlights, LUSO label
  (g, a, defs) => {
    // === EYE CATCHLIGHTS (bright, alive eyes despite all the wrinkles!) ===
    // Primary catchlight — bright white dot
    fe(g, 'circle', { cx: 162, cy: 114, r: 1.6, fill: 'white' }, a);
    fe(g, 'circle', { cx: 190, cy: 114, r: 1.6, fill: 'white' }, a);
    // Secondary smaller catchlight
    fe(g, 'circle', { cx: 165, cy: 117, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    fe(g, 'circle', { cx: 193, cy: 117, r: 0.9, fill: 'white', opacity: '0.7' }, false);
    // Iris rim highlight
    feo(g, 'circle', { cx: 164, cy: 116, r: 3.2, fill: '#8B6D40' }, 0.15, false);
    feo(g, 'circle', { cx: 192, cy: 116, r: 3.2, fill: '#8B6D40' }, 0.15, false);
    // Eye white tint
    feo(g, 'ellipse', { cx: 160, cy: 116, rx: 3, ry: 2, fill: '#FFFFF0' }, 0.2, false);
    feo(g, 'ellipse', { cx: 196, cy: 116, rx: 3, ry: 2, fill: '#FFFFF0' }, 0.2, false);

    // === MOUTH INTERIOR — HUGE OPEN SMILE (PURE JOY!) ===
    const mouthGrad = gd(defs, 'l', [
      ['0%', '#D32F2F', 1],
      ['40%', '#E57373', 1],
      ['100%', '#C62828', 1]
    ], { x1: 148, y1: 152, x2: 200, y2: 180 });
    // Main mouth interior
    fl(g,
      'M 150 154 L 196 154 C 194 164 186 174 176 180 C 172 182 168 182 164 178 C 158 172 152 164 150 154 Z',
      mouthGrad, false);
    // Darker throat / mouth back
    sh(g,
      'M 158 162 C 162 170 168 176 174 178 C 180 176 184 172 188 164 L 186 168 C 182 174 178 178 174 180 C 170 178 164 174 160 168 Z',
      0.35, false);
    // Tongue hint
    feo(g, 'ellipse', { cx: 172, cy: 170, rx: 10, ry: 5, fill: '#EF9A9A' }, 0.4, false);

    // === TEETH FILL (white, upper row — slightly yellowed with age) ===
    const teethGrad = gd(defs, 'l', [
      ['0%', '#F5F5F0', 1],
      ['50%', '#FAFAF5', 1],
      ['100%', '#F0F0E8', 1]
    ], { x1: 152, y1: 154, x2: 192, y2: 164 });
    fl(g, 'M 152 154 L 194 154 L 194 163 L 152 163 Z', teethGrad, false);
    // Gap between teeth (slight shadows)
    feo(g, 'rect', { x: 157.5, y: 154, width: 0.8, height: 8, fill: '#D0D0C8' }, 0.5, false);
    feo(g, 'rect', { x: 163.5, y: 154, width: 0.8, height: 9, fill: '#D0D0C8' }, 0.5, false);
    feo(g, 'rect', { x: 169.5, y: 154, width: 0.8, height: 9, fill: '#D0D0C8' }, 0.5, false);
    feo(g, 'rect', { x: 175.5, y: 154, width: 0.8, height: 9, fill: '#D0D0C8' }, 0.5, false);
    feo(g, 'rect', { x: 181.5, y: 154, width: 0.8, height: 9, fill: '#D0D0C8' }, 0.5, false);
    feo(g, 'rect', { x: 187.5, y: 154, width: 0.8, height: 8, fill: '#D0D0C8' }, 0.5, false);
    // Lower teeth hint
    feo(g, 'rect', { x: 158, y: 166, width: 30, height: 5, rx: 1, fill: '#ECECD8' }, 0.5, false);
    // Gum line above upper teeth
    feo(g, 'rect', { x: 154, y: 152, width: 38, height: 2, rx: 0.5, fill: '#E8A0A0' }, 0.3, false);

    // === UPPER LIP COLOR ===
    fo(g,
      'M 146 152 C 150 148 158 144 166 142 C 172 140 178 140 184 142 C 192 144 196 148 200 152 L 196 154 C 192 150 186 146 178 144 C 170 144 162 146 154 150 L 150 154 Z',
      '#C49078', 0.35, false);
    // Lower lip shine
    hi(g,
      'M 160 174 C 166 178 172 180 178 178 C 184 176 188 172 190 168 L 188 170 C 184 174 178 176 172 178 C 166 176 162 174 160 172 Z',
      0.12, false);

    // === AGE SPOT FILLS (forehead — soft brownish circles) ===
    feo(g, 'circle', { cx: 158, cy: 82, r: 3.5, fill: '#B08858' }, 0.18, false);
    feo(g, 'circle', { cx: 180, cy: 76, r: 2.5, fill: '#B08858' }, 0.15, false);
    feo(g, 'circle', { cx: 196, cy: 88, r: 2.2, fill: '#B08858' }, 0.17, false);
    feo(g, 'circle', { cx: 168, cy: 74, r: 1.8, fill: '#B08858' }, 0.13, false);
    feo(g, 'circle', { cx: 148, cy: 94, r: 2, fill: '#B08858' }, 0.15, false);
    feo(g, 'circle', { cx: 190, cy: 78, r: 1.6, fill: '#B08858' }, 0.12, false);

    // === BALLOON SHINE HIGHLIGHTS ===
    hi(g,
      'M 76 14 C 80 8 88 6 94 10 C 90 6 82 6 76 12 Z',
      0.4, false);
    hi(g,
      'M 172 4 C 176 -2 184 -4 190 0 C 186 -4 178 -4 172 2 Z',
      0.4, false);
    hi(g,
      'M 284 20 C 288 14 296 12 302 16 C 298 12 290 12 284 18 Z',
      0.4, false);
    // Balloon bottom shadow
    feo(g, 'ellipse', { cx: 84, cy: 46, rx: 6, ry: 3, fill: '#E6A000' }, 0.3, false);
    feo(g, 'ellipse', { cx: 180, cy: 36, rx: 6, ry: 3, fill: '#E6A000' }, 0.3, false);
    feo(g, 'ellipse', { cx: 292, cy: 52, rx: 6, ry: 3, fill: '#E6A000' }, 0.3, false);

    // === BOTTLE WATER FILL below water line ===
    const waterGrad = gd(defs, 'l', [
      ['0%', '#90CAF9', 0.5],
      ['50%', '#BBDEFB', 0.6],
      ['100%', '#90CAF9', 0.5]
    ], { x1: 242, y1: 134, x2: 262, y2: 176 });
    fl(g,
      'M 244 134 C 248 132 256 132 260 134 L 260 168 C 260 172 254 174 252 174 C 250 174 244 172 244 168 Z',
      waterGrad, false);
    // Water meniscus line highlight
    hi(g,
      'M 246 134 C 250 132 254 132 258 134 L 258 135 C 254 133 250 133 246 135 Z',
      0.3, false);
    // Bottle plastic refraction lines
    pps(g, [
      'M 244 100 L 244 130', 'M 260 100 L 260 130'
    ], a, 0.3, '#B3E5FC');

    // === WRINKLE SHADOW ENHANCEMENT (deeper, more sculptural) ===
    // Forehead wrinkle shadows (below each crease)
    sh(g, 'M 150 80 C 160 76 174 74 186 76 C 196 78 202 82 204 84 L 202 86 C 198 82 190 78 180 78 C 170 78 158 80 150 82 Z', 0.06, false);
    sh(g, 'M 148 86 C 158 82 172 80 184 82 C 194 84 200 88 202 90 L 200 92 C 196 88 188 84 178 84 C 168 84 156 86 148 88 Z', 0.06, false);
    sh(g, 'M 150 92 C 160 88 172 86 184 88 C 192 90 198 94 200 96 L 198 98 C 194 94 186 90 178 90 C 168 90 158 92 150 94 Z', 0.05, false);

    // Nasolabial fold shadows
    sh(g,
      'M 160 132 C 158 138 154 146 150 152 L 148 154 L 150 156 C 154 150 158 142 160 136 Z',
      0.12, false);
    sh(g,
      'M 188 132 C 190 138 194 146 198 152 L 200 154 L 198 156 C 194 150 190 142 188 136 Z',
      0.12, false);

    // Under-eye shadow (deep dark circles)
    sh(g,
      'M 152 120 C 156 124 162 126 168 124 C 164 128 158 128 152 124 Z',
      0.12, false);
    sh(g,
      'M 180 124 C 186 126 192 124 196 120 C 196 124 190 128 184 128 Z',
      0.12, false);

    // Crow's feet shadow deepening
    pps(g, [
      'M 150 112 C 146 108 142 106 138 106',
      'M 204 112 C 208 108 212 106 216 106'
    ], a, 0.4, '#B89870');

    // === CHEEK BLUSH (warm glow — the man is absolutely beaming!) ===
    const blushGrad = gd(defs, 'r', [
      ['0%', '#FFAB91', 0.35],
      ['100%', '#FFAB91', 0]
    ], { cx: 150, cy: 140, r: 14 });
    fe(g, 'ellipse', { cx: 150, cy: 140, rx: 14, ry: 7, fill: blushGrad }, a);
    const blushGrad2 = gd(defs, 'r', [
      ['0%', '#FFAB91', 0.35],
      ['100%', '#FFAB91', 0]
    ], { cx: 196, cy: 140, r: 14 });
    fe(g, 'ellipse', { cx: 196, cy: 140, rx: 14, ry: 7, fill: blushGrad2 }, a);

    // === NOSE TIP HIGHLIGHT ===
    hi(g,
      'M 170 140 C 172 138 176 138 178 140 C 176 140 174 140 172 140 Z',
      0.2, false);
    // Nose side shadow
    sh(g,
      'M 164 140 C 162 138 160 136 160 134 L 162 136 C 162 138 164 140 166 142 Z',
      0.1, false);

    // === LABEL TEXT "LUSO" on water bottle ===
    const lb = ce('text', {
      x: 246, y: 134,
      fill: '#FAFAFA',
      'font-size': '5.5',
      'font-family': 'sans-serif',
      'font-weight': 'bold',
      'letter-spacing': '0.5'
    });
    lb.textContent = 'LUSO';
    if (a) lb.classList.add('active-element');
    g.appendChild(lb);

    // Sub-label hint
    const lb2 = ce('text', {
      x: 248, y: 140,
      fill: '#FAFAFA',
      'font-size': '2.5',
      'font-family': 'sans-serif',
      opacity: '0.7'
    });
    lb2.textContent = 'Natural';
    g.appendChild(lb2);

    // Mountain logo on label
    pps(g, [
      'M 248 122 L 252 118 L 256 122'
    ], false, 0.6, '#FFFFFF');

    // === FIRE EXTINGUISHER DETAILS ===
    // Pressure gauge fill
    feo(g, 'circle', { cx: 36, cy: 202, r: 3, fill: '#4CAF50' }, 0.5, false);
    // Gauge needle
    pps(g, ['M 36 202 L 38 199'], false, 0.5, '#333');
    // Warning triangle on body
    feo(g, 'path', { d: 'M 36 190 L 40 184 L 44 190 Z', fill: '#FFC107' }, 0.5, false);

    // === PLATE SHADOW on tablecloth ===
    feo(g, 'ellipse', { cx: 180, cy: 334, rx: 36, ry: 4, fill: '#BF360C' }, 0.12, false);

    // === GLASS HIGHLIGHTS (crystal refraction) ===
    hi(g,
      'M 86 268 C 88 264 90 266 88 270 Z',
      0.35, false);
    hi(g,
      'M 106 272 C 108 268 110 270 108 274 Z',
      0.25, false);
    // Glass rim highlight
    hi(g,
      'M 82 260 C 90 256 100 256 110 262 C 102 258 90 258 82 262 Z',
      0.2, false);

    // === BALD HEAD SHINE (final specular highlights) ===
    const domeShine = gd(defs, 'r', [
      ['0%', '#FFFFFF', 0.25],
      ['100%', '#FFFFFF', 0]
    ], { cx: 178, cy: 64, r: 16 });
    fe(g, 'ellipse', { cx: 178, cy: 64, rx: 14, ry: 6, fill: domeShine }, false);
    // Secondary dome shine
    hi(g,
      'M 168 68 C 172 64 180 62 186 66 C 182 64 176 64 172 66 Z',
      0.15, false);

    // === SHIRT BUTTON DETAILS ===
    feo(g, 'circle', { cx: 172, cy: 228, r: 1.4, fill: '#D7CEB0' }, 0.8, false);
    feo(g, 'circle', { cx: 172, cy: 250, r: 1.4, fill: '#D7CEB0' }, 0.8, false);
    feo(g, 'circle', { cx: 172, cy: 272, r: 1.4, fill: '#D7CEB0' }, 0.8, false);
    // Button shadows
    sh(g, 'M 170 230 C 171 231 173 231 174 230 L 174 232 C 173 233 171 233 170 232 Z', 0.1, false);
    sh(g, 'M 170 252 C 171 253 173 253 174 252 L 174 254 C 173 255 171 255 170 254 Z', 0.1, false);
    sh(g, 'M 170 274 C 171 275 173 275 174 274 L 174 276 C 173 277 171 277 170 276 Z', 0.1, false);

    // === COLLAR HIGHLIGHT ===
    hi(g,
      'M 148 194 C 152 190 156 192 154 196 Z',
      0.15, false);
    hi(g,
      'M 198 194 C 194 190 190 192 192 196 Z',
      0.15, false);

    // === AMBIENT OCCLUSION — figure shadow on table ===
    sh(g,
      'M 120 286 C 140 284 160 282 172 282 C 184 282 204 284 224 286 L 224 290 L 120 290 Z',
      0.08, false);

    // === AMBIENT LIGHT BOUNCE from orange tablecloth onto chin ===
    feo(g, 'ellipse', { cx: 172, cy: 172, rx: 10, ry: 4, fill: '#FFAB91' }, 0.08, false);

    // === SKIN TEXTURE micro-detail on forehead ===
    pps(g, [
      'M 160 80 L 160 81', 'M 166 78 L 166 79', 'M 172 76 L 172 77',
      'M 178 78 L 178 79', 'M 184 80 L 184 81', 'M 190 82 L 190 83',
      'M 156 86 L 156 87', 'M 162 84 L 162 85', 'M 168 82 L 168 83',
      'M 174 84 L 174 85', 'M 180 86 L 180 87', 'M 186 84 L 186 85',
      'M 192 86 L 192 87'
    ], false, 0.3, '#C8A878');

    // === HAND VEIN HIGHLIGHTS on right hand ===
    pps(g, [
      'M 250 156 C 252 154 254 156 254 160',
      'M 246 158 C 248 156 250 158 250 162'
    ], false, 0.4, '#D8B898');

    // === FINAL WARMTH — overall warm tone overlay on face ===
    feo(g, 'ellipse', { cx: 172, cy: 130, rx: 30, ry: 40, fill: '#FFE0B2' }, 0.04, false);
  }
];
