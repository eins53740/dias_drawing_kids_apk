const paitioLayers = [
  // =====================================================================
  // Layer 0: Composition guides - table edge, three figure zones, wall
  // =====================================================================
  (g, a) => {
    // Table edge horizontal guide at y=300
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Table bottom extent
    pp(g, ['M 0 300 L 0 450', 'M 360 300 L 360 450'], a, lt);
    // Bruno zone (left, stocky) — wider zone
    pp(g, ['M 10 40 L 10 300', 'M 140 40 L 140 300'], a, lt);
    // Bruno center crosshair
    pp(g, ['M 75 70 L 75 170', 'M 30 120 L 120 120'], a, lt);
    // Miguel zone (center, child) — narrower
    pp(g, ['M 145 70 L 145 300', 'M 220 70 L 220 300'], a, lt);
    // Miguel center crosshair
    pp(g, ['M 182 90 L 182 200', 'M 150 150 L 215 150'], a, lt);
    // Ricardo zone (right, lean)
    pp(g, ['M 225 30 L 225 300', 'M 350 30 L 350 300'], a, lt);
    // Ricardo center crosshair
    pp(g, ['M 287 60 L 287 170', 'M 240 110 L 335 110'], a, lt);
    // Shoulder alignment guide
    pp(g, ['M 30 180 L 330 180'], a, lt);
    // Wall top line
    pp(g, ['M 0 0 L 360 0'], a, lt);
    // Frame zone guides (three rectangles on wall)
    pp(g, ['M 35 18 L 85 18 L 85 58 L 35 58 Z'], a, lt);
    pp(g, ['M 148 12 L 210 12 L 210 56 L 148 56 Z'], a, lt);
    pp(g, ['M 275 16 L 335 16 L 335 58 L 275 58 Z'], a, lt);
  },

  // =====================================================================
  // Layer 1: Main outlines — three bodies, heads, necks, torsos, arms
  // =====================================================================
  (g, a) => {
    // ---- BRUNO (left, stocky build, x~80) ----
    // Head — wider, rounder for stocky build
    pp(g, [
      'M 52 118 C 50 96 58 78 75 72 C 92 78 100 96 98 118 C 100 134 96 148 90 156 C 84 164 80 168 76 170 C 72 168 68 164 62 156 C 56 148 52 134 52 118 Z'
    ], a);
    // Left ear
    pp(g, ['M 50 112 C 44 108 40 112 40 120 C 40 128 44 132 50 130'], a);
    // Left ear inner fold
    pp(g, ['M 44 116 C 42 120 42 126 44 130'], a, lt);
    // Right ear
    pp(g, ['M 100 110 C 106 106 110 110 110 118 C 110 126 106 130 100 128'], a);
    // Right ear inner fold
    pp(g, ['M 106 114 C 108 118 108 124 106 128'], a, lt);
    // Neck — thick for stocky build
    pp(g, ['M 68 168 L 66 182', 'M 84 168 L 86 182'], a);
    // Body — wide stocky torso
    pp(g, [
      'M 34 210 C 42 192 58 182 76 182 C 94 182 110 192 118 210 L 124 300',
      'M 34 210 L 28 300'
    ], a);
    // Left arm — behind, resting casually
    pp(g, [
      'M 36 214 C 26 230 20 250 18 270 C 16 284 18 294 24 298'
    ], a);
    // Right arm — to table, relaxed
    pp(g, [
      'M 116 214 C 124 234 130 258 134 282 C 136 292 136 298 138 300'
    ], a);

    // ---- MIGUEL (center, child ~4yo, x~182) ----
    // Head — round child proportions, smaller
    pp(g, [
      'M 160 148 C 158 130 166 114 182 108 C 198 114 206 130 204 148 C 206 164 202 176 196 184 C 190 190 186 194 182 196 C 178 194 174 190 168 184 C 162 176 158 164 160 148 Z'
    ], a);
    // Left ear
    pp(g, ['M 158 144 C 152 140 148 144 148 152 C 148 160 152 164 158 162'], a);
    // Right ear
    pp(g, ['M 206 142 C 212 138 216 142 216 150 C 216 158 212 162 206 160'], a);
    // Neck — child thin
    pp(g, ['M 174 194 L 172 206', 'M 190 194 L 192 206'], a);
    // Body — child proportions
    pp(g, [
      'M 152 230 C 158 214 170 206 182 206 C 194 206 206 214 212 230 L 216 300',
      'M 152 230 L 148 300'
    ], a);
    // Left arm — on table
    pp(g, [
      'M 154 234 C 146 252 142 272 140 290 C 138 296 140 300 142 300'
    ], a);
    // Right arm — on table
    pp(g, [
      'M 210 234 C 218 252 222 272 224 290 C 226 296 224 300 222 300'
    ], a);

    // ---- RICARDO (right, lean build, x~287) ----
    // Head — lean, narrower face
    pp(g, [
      'M 264 110 C 262 90 270 74 287 68 C 304 74 312 90 310 110 C 312 126 308 138 302 146 C 296 154 292 158 287 160 C 282 158 278 154 272 146 C 266 138 262 126 264 110 Z'
    ], a);
    // Left ear
    pp(g, ['M 262 106 C 256 102 252 106 252 114 C 252 122 256 126 262 124'], a);
    // Right ear
    pp(g, ['M 312 104 C 318 100 322 104 322 112 C 322 120 318 124 312 122'], a);
    // Neck — lean
    pp(g, ['M 278 158 L 276 172', 'M 296 158 L 298 172'], a);
    // Body — lean, leaning forward toward Miguel
    pp(g, [
      'M 254 200 C 262 184 274 172 287 172 C 300 172 312 184 320 200 L 326 300',
      'M 254 200 L 248 300'
    ], a);
    // Left arm — extended forward showing egg
    pp(g, [
      'M 256 204 C 246 222 234 244 226 264 C 222 276 224 284 228 290'
    ], a);
    // Right arm — at side
    pp(g, [
      'M 318 204 C 326 224 332 248 336 274 C 338 286 336 296 334 300'
    ], a);
  },

  // =====================================================================
  // Layer 2: Face details — all three people
  // =====================================================================
  (g, a) => {
    // ---- BRUNO face ----
    // Left eye — slightly squinting
    pp(g, [
      'M 62 114 C 64 108 70 106 74 110 C 78 114 76 120 72 122 C 68 124 62 120 62 114 Z'
    ], a);
    // Right eye — slightly squinting
    pp(g, [
      'M 82 112 C 84 106 90 104 94 108 C 98 112 96 118 92 120 C 88 122 82 118 82 112 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 70, cy: 116, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 90, cy: 114, r: 3, fill: a ? HL : '#2C1810' }, a);
    // Squint crease — upper eyelid heavy
    pp(g, ['M 64 110 C 68 106 72 104 78 106'], a, lt);
    pp(g, ['M 84 108 C 88 104 92 102 98 104'], a, lt);
    // Eyebrows — thick, defining feature
    pp(g, ['M 58 106 C 64 100 72 98 80 102'], a);
    pp(g, ['M 82 100 C 90 96 98 98 106 104'], a);
    // Eyebrow thickness line
    pp(g, ['M 60 108 C 66 102 74 100 82 104'], a);
    pp(g, ['M 84 102 C 92 98 100 100 108 106'], a);
    // Nose — broad, prominent
    pp(g, ['M 78 108 C 77 116 76 126 74 132'], a);
    pp(g, ['M 70 136 C 74 140 78 142 82 142 C 86 140 88 136 90 132'], a);
    // Nose bridge
    pp(g, ['M 76 106 C 76 112 76 120 76 128'], a, lt);
    // Mouth — relaxed, slightly open
    pp(g, ['M 64 150 C 70 146 76 144 80 146 C 84 144 90 146 96 150'], a);
    // Lower lip
    pp(g, ['M 66 152 C 72 156 78 158 82 158 C 86 156 92 154 96 150'], a);

    // ---- MIGUEL face ----
    // Left eye — looking down, concentrated
    pp(g, [
      'M 170 144 C 172 138 178 136 182 140 C 186 144 184 150 180 152 C 176 154 170 150 170 144 Z'
    ], a);
    // Right eye — looking down
    pp(g, [
      'M 186 142 C 188 136 194 134 198 138 C 202 142 200 148 196 150 C 192 152 186 148 186 142 Z'
    ], a);
    // Left pupil — positioned low (looking down)
    fe(g, 'circle', { cx: 178, cy: 148, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Right pupil — positioned low
    fe(g, 'circle', { cx: 194, cy: 146, r: 2.5, fill: a ? HL : '#3E2518' }, a);
    // Heavy upper eyelids (downcast emphasis)
    pp(g, ['M 170 142 C 174 138 180 136 186 138'], a);
    pp(g, ['M 186 140 C 190 136 196 134 202 136'], a);
    // Eyebrows — softer child brows
    pp(g, ['M 168 136 C 174 132 180 130 188 134'], a);
    pp(g, ['M 188 132 C 194 130 200 132 208 136'], a);
    // Nose — small child button nose
    pp(g, ['M 182 140 C 181 148 180 156 178 162'], a);
    pp(g, ['M 176 164 C 180 168 184 170 188 170 C 192 168 194 164 196 162'], a);
    // Mouth — slightly pursed, concentrating
    pp(g, ['M 174 178 C 178 174 182 172 186 174 C 190 172 194 174 198 178'], a);
    // Lower lip hint
    pp(g, ['M 176 180 C 182 184 190 184 196 180'], a);

    // ---- RICARDO face ----
    // Left eye
    pp(g, [
      'M 274 106 C 276 100 282 98 286 102 C 290 106 288 112 284 114 C 280 116 274 112 274 106 Z'
    ], a);
    // Right eye
    pp(g, [
      'M 292 104 C 294 98 300 96 304 100 C 308 104 306 110 302 112 C 298 114 292 110 292 104 Z'
    ], a);
    // Left pupil
    fe(g, 'circle', { cx: 282, cy: 108, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Right pupil
    fe(g, 'circle', { cx: 300, cy: 106, r: 3, fill: a ? HL : '#3E2518' }, a);
    // Eyelid creases
    pp(g, ['M 276 102 C 280 98 284 96 290 98'], a, lt);
    pp(g, ['M 294 100 C 298 96 302 94 308 96'], a, lt);
    // Eyebrows
    pp(g, ['M 270 98 C 276 92 284 90 292 94'], a);
    pp(g, ['M 294 92 C 300 90 308 92 316 98'], a);
    // Nose — straight, lean
    pp(g, ['M 286 100 C 285 108 284 116 282 122'], a);
    pp(g, ['M 280 124 C 284 128 288 130 292 130 C 296 128 298 124 300 122'], a);
    // Nose bridge subtle
    pp(g, ['M 284 98 C 284 104 284 112 284 118'], a, lt);
    // Mouth — warm smile, wider
    pp(g, ['M 272 140 C 278 134 284 132 290 134 C 296 132 300 134 306 140'], a);
    // Lower lip with smile
    pp(g, ['M 274 142 C 280 148 286 150 290 150 C 294 150 300 148 304 142'], a);
    // Chin definition
    pp(g, ['M 282 156 C 286 160 292 160 296 156'], a, lt);
  },

  // =====================================================================
  // Layer 3: Hair and beard/stubble
  // =====================================================================
  (g, a) => {
    // ---- BRUNO hair — dark, short, buzzcut ----
    // Hairline contour
    pp(g, [
      'M 54 114 C 52 96 60 78 76 72 C 92 68 102 76 106 88 C 110 98 108 110 106 116'
    ], a);
    // Inner volume
    pp(g, [
      'M 58 110 C 58 96 64 82 78 76 C 92 72 100 80 104 90 C 106 98 106 108 104 112'
    ], a);
    // Texture strands
    pp(g, [
      'M 68 74 C 74 70 82 68 88 72',
      'M 62 82 C 70 76 80 74 90 78',
      'M 58 92 C 66 84 78 82 88 86'
    ], a, lt);

    // BRUNO stubble/beard dots — dense array across jawline, chin, upper lip
    const brunoStubble = [
      // Left jawline
      [54, 146], [56, 150], [58, 154], [60, 158], [62, 162], [64, 166],
      // Chin
      [68, 168], [72, 170], [76, 172], [80, 170], [84, 168],
      // Right jawline
      [88, 166], [90, 162], [92, 158], [94, 154], [96, 150], [98, 146],
      // Chin area denser
      [70, 166], [74, 168], [78, 170], [82, 168], [86, 166],
      // Upper lip shadow
      [72, 144], [76, 144], [80, 144], [84, 144], [88, 144],
      // Neck stubble
      [70, 172], [74, 174], [78, 174], [82, 174], [86, 172]
    ];
    brunoStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.6, fill: a ? HL : '#3E2C20' }, a);
    });

    // ---- MIGUEL hair — dark brown, short, child texture ----
    // Hair mass contour
    pp(g, [
      'M 162 144 C 160 126 168 112 184 106 C 200 102 208 110 212 122 C 216 132 214 144 212 150'
    ], a);
    // Inner volume
    pp(g, [
      'M 166 140 C 166 128 174 116 186 112 C 198 108 206 116 208 126 C 210 134 210 142 208 146'
    ], a);
    // Hair texture strands — child, softer
    pp(g, [
      'M 178 108 C 184 104 192 104 198 108',
      'M 172 116 C 180 110 190 108 200 112',
      'M 168 126 C 176 118 188 116 198 120',
      'M 166 136 C 174 128 186 126 196 130'
    ], a, lt);

    // ---- RICARDO hair — short brown, neat ----
    // Hair contour
    pp(g, [
      'M 266 106 C 264 88 272 72 287 66 C 302 62 312 70 316 82 C 320 92 318 106 314 112'
    ], a);
    // Inner volume
    pp(g, [
      'M 270 102 C 270 90 278 76 290 72 C 302 68 310 76 312 86 C 316 94 314 104 312 108'
    ], a);
    // Hair texture
    pp(g, [
      'M 280 68 C 288 64 296 64 304 68',
      'M 274 78 C 284 72 296 70 306 74'
    ], a, lt);

    // Ricardo light stubble dots — sparse, lighter color
    const ricStubble = [
      [270, 140], [274, 144], [278, 148], [282, 150], [287, 152],
      [292, 150], [296, 148], [300, 144], [304, 140],
      [278, 146], [287, 150], [296, 146], [282, 148]
    ];
    ricStubble.forEach(([cx, cy]) => {
      fe(g, 'circle', { cx, cy, r: 0.4, fill: a ? HL : '#8D6E63' }, a);
    });
  },

  // =====================================================================
  // Layer 4: Clothing details — collars, logos, patterns, seams
  // =====================================================================
  (g, a) => {
    // ---- BRUNO gray t-shirt ----
    // Collar
    pp(g, ['M 62 184 C 66 180 72 178 76 178 C 80 178 86 180 90 184'], a);
    // Collar ribbing
    pp(g, ['M 64 186 C 68 182 74 180 78 180 C 82 180 88 182 92 186'], a, lt);
    // SAGRES 0.0 logo area rectangle
    pp(g, ['M 54 214 L 98 214 L 98 248 L 54 248 Z'], a, lt);
    // Wings emblem sketch — left wing
    pp(g, [
      'M 66 222 C 62 218 58 220 58 224 C 58 228 62 232 66 230'
    ], a, lt);
    // Wings emblem sketch — right wing
    pp(g, [
      'M 86 222 C 90 218 94 220 94 224 C 94 228 90 232 86 230'
    ], a, lt);
    // Wings center connecting
    pp(g, ['M 66 226 L 76 224 L 86 226'], a, lt);
    // "SAGRES" text outline guide
    pp(g, ['M 62 240 L 90 240'], a, lt);
    // "0.0" text guide below
    pp(g, ['M 68 246 L 84 246'], a, lt);
    // Shirt seam — sleeve left
    pp(g, ['M 38 216 C 34 224 32 234 32 244'], a, lt);
    // Shirt seam — sleeve right
    pp(g, ['M 114 216 C 118 224 120 234 120 244'], a, lt);

    // ---- MIGUEL white t-shirt with character prints ----
    // Collar
    pp(g, ['M 170 208 C 174 204 178 202 182 202 C 186 202 190 204 194 208'], a);
    // Collar ribbing
    pp(g, ['M 172 210 C 176 206 180 204 184 204 C 188 206 192 208 196 210'], a, lt);
    // Small colorful character pattern dots — cartoon figures suggested
    fe(g, 'circle', { cx: 168, cy: 234, r: 1.5, fill: a ? HL : '#FF7043' }, a);
    fe(g, 'circle', { cx: 178, cy: 226, r: 1.5, fill: a ? HL : '#42A5F5' }, a);
    fe(g, 'circle', { cx: 188, cy: 238, r: 1.5, fill: a ? HL : '#66BB6A' }, a);
    fe(g, 'circle', { cx: 196, cy: 228, r: 1.5, fill: a ? HL : '#FFA726' }, a);
    fe(g, 'circle', { cx: 172, cy: 248, r: 1.5, fill: a ? HL : '#AB47BC' }, a);
    fe(g, 'circle', { cx: 192, cy: 250, r: 1.5, fill: a ? HL : '#26A69A' }, a);
    // Tiny stick figure hints near the dots
    pp(g, [
      'M 168 231 L 168 233', 'M 167 232 L 169 232',
      'M 188 235 L 188 237', 'M 187 236 L 189 236'
    ], a, lt);
    // "W" letter on shirt
    const wt = ce('text', {
      x: 177, y: 262, fill: a ? HL : LP,
      'font-size': '8', 'font-weight': 'bold', 'font-family': 'Arial, sans-serif'
    });
    wt.textContent = 'W';
    if (a) wt.classList.add('active-element');
    g.appendChild(wt);

    // ---- RICARDO dark sports t-shirt ----
    // Collar
    pp(g, ['M 272 174 C 276 170 282 168 287 168 C 292 168 298 170 302 174'], a);
    // Center seam line
    pp(g, ['M 287 174 L 287 300'], a, lt);
    // Shoulder seam lines
    pp(g, ['M 264 204 C 272 208 282 210 292 208 C 302 206 310 204 318 200'], a, lt);
    // Side seam lines
    pp(g, ['M 254 206 C 252 218 250 232 250 248'], a, lt);
    pp(g, ['M 318 206 C 322 218 324 232 326 248'], a, lt);
    // Raglan sleeve line left
    pp(g, ['M 278 174 C 270 180 262 190 256 204'], a, lt);
    // Raglan sleeve line right
    pp(g, ['M 296 174 C 304 180 312 190 318 204'], a, lt);
  },

  // =====================================================================
  // Layer 5: Hands and Easter eggs
  // =====================================================================
  (g, a) => {
    // ---- MIGUEL hands on table with orange egg ----
    // Left hand — palm and fingers resting on table
    pp(g, [
      'M 142 290 C 138 284 134 286 132 292 C 130 298 134 302 140 300'
    ], a);
    // Left hand fingers
    pp(g, [
      'M 136 288 C 132 282 128 278 130 274 C 132 270 136 272 138 276',
      'M 138 286 C 134 280 130 276 132 272 C 134 268 138 270 140 274',
      'M 140 284 C 138 278 134 274 136 270 C 138 268 142 270 142 274'
    ], a);
    // Left thumb
    pp(g, ['M 142 292 C 146 288 150 284 152 280 C 154 278 152 276 150 278'], a);
    // Right hand — palm and fingers
    pp(g, [
      'M 222 290 C 226 284 230 286 232 292 C 234 298 230 302 224 300'
    ], a);
    // Right hand fingers
    pp(g, [
      'M 226 288 C 230 282 234 278 232 274 C 230 270 226 272 224 276',
      'M 224 286 C 228 280 232 276 230 272 C 228 268 224 270 222 274',
      'M 222 284 C 224 278 228 274 226 270 C 224 268 220 270 220 274'
    ], a);
    // Right thumb
    pp(g, ['M 220 292 C 216 288 212 284 210 280 C 208 278 210 276 212 278'], a);

    // Orange egg in Miguel's hands — oval with pattern lines
    pp(g, [
      'M 170 280 C 170 268 176 260 182 260 C 188 260 194 268 194 280 C 194 292 188 298 182 298 C 176 298 170 292 170 280 Z'
    ], a);
    // Egg decorative stripes
    pp(g, [
      'M 172 276 C 178 272 186 272 192 276',
      'M 174 284 C 180 280 186 280 190 284',
      'M 176 292 C 180 290 184 290 188 292'
    ], a, lt);

    // ---- RICARDO hand extended with blue egg ----
    // Left hand — open palm showing egg
    pp(g, [
      'M 228 266 C 224 260 220 262 218 268 C 216 274 220 278 226 276'
    ], a);
    // Fingers spread showing egg
    pp(g, [
      'M 222 264 C 218 258 214 254 216 250 C 218 246 222 248 224 252',
      'M 224 262 C 220 256 216 252 218 248 C 220 244 224 246 226 250',
      'M 226 260 C 224 254 222 250 224 246 C 226 242 230 244 230 248',
      'M 230 262 C 232 256 234 252 236 248 C 238 244 236 242 234 244'
    ], a);
    // Thumb supporting egg from below
    pp(g, ['M 230 276 C 234 272 238 268 240 264 C 242 260 240 258 238 260'], a);
    // Blue egg in Ricardo's palm — oval with decorative dots
    pp(g, [
      'M 224 248 C 224 236 230 228 237 228 C 244 228 250 236 250 248 C 250 260 244 268 237 268 C 230 268 224 260 224 248 Z'
    ], a);
    // Egg dot pattern positions
    pp(g, [
      'M 233 238 C 234 236 236 236 237 238',
      'M 240 246 C 241 244 243 244 244 246',
      'M 232 254 C 233 252 235 252 236 254',
      'M 241 258 C 242 256 244 256 245 258'
    ], a, lt);

    // ---- BRUNO arm/hand near table ----
    // Right arm coming down to table area
    pp(g, [
      'M 118 214 C 126 232 132 254 136 278 C 138 290 138 296 140 300'
    ], a);
    // Bruno hand near table surface
    pp(g, [
      'M 138 290 C 134 284 130 286 128 292 C 126 298 130 302 136 300'
    ], a);
    // Bruno hand fingers hint
    pp(g, [
      'M 132 288 C 128 282 124 280 126 276 C 128 274 132 276 134 280'
    ], a);
  },

  // =====================================================================
  // Layer 6: Background — wall, framed photos, chair, table
  // =====================================================================
  (g, a) => {
    // Wall outline
    pp(g, ['M 0 0 L 360 0 L 360 300 L 0 300 Z'], a, lt);

    // ---- Three framed photos on wall ----
    // Frame 1 (left) — outer frame
    pp(g, ['M 36 20 L 84 20 L 84 58 L 36 58 Z'], a);
    // Frame 1 inner frame
    pp(g, ['M 39 23 L 81 23 L 81 55 L 39 55 Z'], a);
    // Frame 1 content hint — simple head/shoulders silhouette
    pp(g, [
      'M 52 32 C 56 28 64 28 68 32 C 72 36 68 44 60 46 C 52 44 48 38 52 32',
      'M 48 50 C 52 46 58 44 60 44 C 62 44 68 46 72 50'
    ], a, lt);

    // Frame 2 (center) — outer frame
    pp(g, ['M 150 14 L 208 14 L 208 56 L 150 56 Z'], a);
    // Frame 2 inner frame
    pp(g, ['M 153 17 L 205 17 L 205 53 L 153 53 Z'], a);
    // Frame 2 content hint — group silhouette
    pp(g, [
      'M 168 28 C 170 24 176 24 178 28 C 180 32 176 36 172 38 C 168 36 166 32 168 28',
      'M 184 28 C 186 24 192 24 194 28 C 196 32 192 36 188 38 C 184 36 182 32 184 28',
      'M 164 44 L 200 44'
    ], a, lt);

    // Frame 3 (right) — outer frame
    pp(g, ['M 278 18 L 334 18 L 334 58 L 278 58 Z'], a);
    // Frame 3 inner frame
    pp(g, ['M 281 21 L 331 21 L 331 55 L 281 55 Z'], a);
    // Frame 3 content hint — landscape/scene
    pp(g, [
      'M 290 42 C 296 34 304 30 310 34 C 316 38 320 42 326 40',
      'M 286 46 L 326 46'
    ], a, lt);

    // ---- Wooden chair behind Bruno ----
    // Chair back vertical — left post
    pp(g, ['M 18 100 L 18 300'], a);
    // Chair back vertical — right post
    pp(g, ['M 42 100 L 42 182'], a);
    // Chair back top rail
    pp(g, ['M 18 100 L 42 100'], a);
    // Chair horizontal bars
    pp(g, ['M 18 120 L 42 120'], a, lt);
    pp(g, ['M 18 140 L 42 140'], a, lt);
    pp(g, ['M 18 160 L 42 160'], a, lt);
    // Chair seat hint
    pp(g, ['M 14 182 L 46 182'], a, lt);

    // ---- Table ----
    // Table front edge (solid)
    pp(g, ['M 0 300 L 360 300'], a);
    // Table edge thickness
    pp(g, ['M 0 300 L 0 308 L 360 308 L 360 300'], a);
    // Table legs
    pp(g, ['M 30 308 L 30 450', 'M 330 308 L 330 450'], a, lt);
    // Table inner legs
    pp(g, ['M 120 308 L 120 440', 'M 240 308 L 240 440'], a, lt);
  },

  // =====================================================================
  // Layer 7: Color fills — FIGURES (skin, hair, clothing)
  // =====================================================================
  (g, a) => {
    // ---- BRUNO fills ----
    // Face skin
    fl(g,
      'M 52 118 C 50 96 58 78 75 72 C 92 78 100 96 98 118 C 100 134 96 148 90 156 C 84 164 80 168 76 170 C 72 168 68 164 62 156 C 56 148 52 134 52 118 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 44, cy: 120, rx: 6, ry: 10, fill: '#E8C49A' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 106, cy: 118, rx: 6, ry: 10, fill: '#E8C49A' }, false);
    // Hair fill — dark brown buzzcut
    fl(g,
      'M 54 114 C 52 96 60 78 76 72 C 92 68 102 76 106 88 C 110 98 108 110 106 116 L 102 112 C 104 102 102 92 98 84 C 94 78 86 74 78 74 C 68 76 60 86 56 100 Z',
      '#4E342E', false);
    // Neck skin
    fe(g, 'rect', { x: 67, y: 168, width: 18, height: 14, rx: 4, fill: '#E8C49A' }, false);
    // Eye whites
    fl(g, 'M 62 114 C 64 108 70 106 74 110 C 78 114 76 120 72 122 C 68 124 62 120 62 114 Z', '#FFFFFF', false);
    fl(g, 'M 82 112 C 84 106 90 104 94 108 C 98 112 96 118 92 120 C 88 122 82 118 82 112 Z', '#FFFFFF', false);
    // Gray t-shirt
    fl(g,
      'M 34 210 C 42 192 58 182 76 182 C 94 182 110 192 118 210 L 124 300 L 28 300 Z',
      '#BDBDBD', a);

    // ---- MIGUEL fills ----
    // Face skin
    fl(g,
      'M 160 148 C 158 130 166 114 182 108 C 198 114 206 130 204 148 C 206 164 202 176 196 184 C 190 190 186 194 182 196 C 178 194 174 190 168 184 C 162 176 158 164 160 148 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 152, cy: 152, rx: 5, ry: 9, fill: '#F0C8A0' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 212, cy: 150, rx: 5, ry: 9, fill: '#F0C8A0' }, false);
    // Hair fill — dark brown
    fl(g,
      'M 162 144 C 160 126 168 112 184 106 C 200 102 208 110 212 122 C 216 132 214 144 212 150 L 208 146 C 210 136 210 128 206 120 C 202 114 196 108 186 110 C 176 112 168 122 164 134 Z',
      '#4E342E', false);
    // Neck skin
    fe(g, 'rect', { x: 173, y: 194, width: 18, height: 12, rx: 4, fill: '#F0C8A0' }, false);
    // Eye whites
    fl(g, 'M 170 144 C 172 138 178 136 182 140 C 186 144 184 150 180 152 C 176 154 170 150 170 144 Z', '#FFFFFF', false);
    fl(g, 'M 186 142 C 188 136 194 134 198 138 C 202 142 200 148 196 150 C 192 152 186 148 186 142 Z', '#FFFFFF', false);
    // White t-shirt
    fl(g,
      'M 152 230 C 158 214 170 206 182 206 C 194 206 206 214 212 230 L 216 300 L 148 300 Z',
      '#FAFAFA', a);

    // ---- RICARDO fills ----
    // Face skin
    fl(g,
      'M 264 110 C 262 90 270 74 287 68 C 304 74 312 90 310 110 C 312 126 308 138 302 146 C 296 154 292 158 287 160 C 282 158 278 154 272 146 C 266 138 262 126 264 110 Z',
      '#F5D0A9', a);
    // Left ear fill
    fe(g, 'ellipse', { cx: 256, cy: 114, rx: 5, ry: 10, fill: '#E8C49A' }, false);
    // Right ear fill
    fe(g, 'ellipse', { cx: 318, cy: 112, rx: 5, ry: 10, fill: '#E8C49A' }, false);
    // Hair fill — slightly lighter brown
    fl(g,
      'M 266 106 C 264 88 272 72 287 66 C 302 62 312 70 316 82 C 320 92 318 106 314 112 L 310 108 C 312 98 312 90 308 82 C 304 74 296 68 288 68 C 278 70 270 80 268 94 Z',
      '#5D4037', false);
    // Neck skin
    fe(g, 'rect', { x: 277, y: 158, width: 20, height: 14, rx: 4, fill: '#E8C49A' }, false);
    // Eye whites
    fl(g, 'M 274 106 C 276 100 282 98 286 102 C 290 106 288 112 284 114 C 280 116 274 112 274 106 Z', '#FFFFFF', false);
    fl(g, 'M 292 104 C 294 98 300 96 304 100 C 308 104 306 110 302 112 C 298 114 292 110 292 104 Z', '#FFFFFF', false);
    // Dark sports t-shirt
    fl(g,
      'M 254 200 C 262 184 274 172 287 172 C 300 172 312 184 320 200 L 326 300 L 248 300 Z',
      '#263238', a);

    // ---- Hand skin fills ----
    // Miguel left hand
    fe(g, 'ellipse', { cx: 138, cy: 292, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Miguel right hand
    fe(g, 'ellipse', { cx: 224, cy: 292, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Ricardo extended hand
    fe(g, 'ellipse', { cx: 228, cy: 266, rx: 10, ry: 10, fill: '#F5D0A9' }, false);
    // Bruno right hand near table
    fe(g, 'ellipse', { cx: 134, cy: 292, rx: 8, ry: 8, fill: '#F5D0A9' }, false);
    // Bruno left arm/hand (behind)
    fe(g, 'ellipse', { cx: 22, cy: 290, rx: 8, ry: 10, fill: '#F5D0A9' }, false);
  },

  // =====================================================================
  // Layer 8: Color fills — SCENE (wall, tablecloth, frames, eggs, chair)
  // =====================================================================
  (g, a) => {
    // Cream wall
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: '#FFF8E1' }, a);

    // Orange tablecloth
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 150, fill: '#FF8F00' }, a);
    // Table edge strip (slightly darker)
    fe(g, 'rect', { x: 0, y: 300, width: 360, height: 8, fill: '#EF6C00' }, false);

    // Tablecloth fold highlights
    pp(g, [
      'M 40 314 C 60 310 80 312 100 314',
      'M 160 312 C 180 308 200 310 220 312',
      'M 280 314 C 300 310 320 312 340 314'
    ], false, lt);

    // ---- Framed photos fills ----
    // Frame 1 — brown outer + cream inner
    fe(g, 'rect', { x: 36, y: 20, width: 48, height: 38, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 39, y: 23, width: 42, height: 32, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 2
    fe(g, 'rect', { x: 150, y: 14, width: 58, height: 42, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 153, y: 17, width: 52, height: 36, rx: 1, fill: '#EFEBE9' }, false);
    // Frame 3
    fe(g, 'rect', { x: 278, y: 18, width: 56, height: 40, rx: 1, fill: '#8D6E63' }, false);
    fe(g, 'rect', { x: 281, y: 21, width: 50, height: 34, rx: 1, fill: '#EFEBE9' }, false);

    // ---- Orange egg fill ----
    fl(g,
      'M 170 280 C 170 268 176 260 182 260 C 188 260 194 268 194 280 C 194 292 188 298 182 298 C 176 298 170 292 170 280 Z',
      '#FF7043', a);
    // Orange egg stripe highlight
    fl(g,
      'M 172 276 C 178 272 186 272 192 276 L 192 280 C 186 276 178 276 172 280 Z',
      '#FFB74D', false);
    // Orange egg lower stripe
    fl(g,
      'M 176 290 C 180 288 184 288 188 290 L 188 294 C 184 292 180 292 176 294 Z',
      '#FFB74D', false);

    // ---- Blue egg fill ----
    fl(g,
      'M 224 248 C 224 236 230 228 237 228 C 244 228 250 236 250 248 C 250 260 244 268 237 268 C 230 268 224 260 224 248 Z',
      '#64B5F6', a);
    // Blue egg dots
    fe(g, 'circle', { cx: 233, cy: 238, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 241, cy: 246, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 234, cy: 256, r: 2.5, fill: '#1565C0' }, false);
    fe(g, 'circle', { cx: 242, cy: 260, r: 2, fill: '#1565C0' }, false);
    // Blue egg highlight
    fe(g, 'ellipse', { cx: 234, cy: 240, rx: 3, ry: 2, fill: '#90CAF9', opacity: '0.5' }, false);

    // ---- Chair fill ----
    // Chair back panels (semi-transparent wood)
    fe(g, 'rect', { x: 16, y: 100, width: 28, height: 82, rx: 2, fill: '#A1887F', opacity: '0.35' }, false);
    // Chair seat
    fe(g, 'rect', { x: 12, y: 180, width: 36, height: 6, rx: 2, fill: '#A1887F', opacity: '0.4' }, false);
    // Chair legs below seat
    fe(g, 'rect', { x: 16, y: 186, width: 4, height: 114, fill: '#A1887F', opacity: '0.2' }, false);
  },

  // =====================================================================
  // Layer 9: Polish — eye shines, cheeks, logo fills, textures, warmth
  // =====================================================================
  (g, a) => {
    // ---- Eye shines — all three ----
    // Bruno eye shines
    fe(g, 'circle', { cx: 68, cy: 114, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 88, cy: 112, r: 1.5, fill: '#FFFFFF' }, a);
    // Bruno secondary highlights
    fe(g, 'circle', { cx: 72, cy: 118, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 92, cy: 116, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // Miguel eye shines
    fe(g, 'circle', { cx: 176, cy: 146, r: 1.3, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 192, cy: 144, r: 1.3, fill: '#FFFFFF' }, a);
    // Miguel secondary highlights
    fe(g, 'circle', { cx: 180, cy: 150, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 196, cy: 148, r: 0.7, fill: '#FFFFFF', opacity: '0.6' }, false);

    // Ricardo eye shines
    fe(g, 'circle', { cx: 280, cy: 106, r: 1.5, fill: '#FFFFFF' }, a);
    fe(g, 'circle', { cx: 298, cy: 104, r: 1.5, fill: '#FFFFFF' }, a);
    // Ricardo secondary highlights
    fe(g, 'circle', { cx: 284, cy: 110, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);
    fe(g, 'circle', { cx: 302, cy: 108, r: 0.8, fill: '#FFFFFF', opacity: '0.6' }, false);

    // ---- Miguel cheek blush ----
    fe(g, 'ellipse', { cx: 170, cy: 174, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);
    fe(g, 'ellipse', { cx: 196, cy: 174, rx: 8, ry: 4, fill: '#FFAB91', opacity: '0.3' }, a);

    // ---- SAGRES logo filled on Bruno's shirt ----
    // "SAGRES" text
    const sg = ce('text', {
      x: 60, y: 236, fill: '#1A237E',
      'font-size': '6', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif', 'letter-spacing': '0.5'
    });
    sg.textContent = 'SAGRES';
    if (a) sg.classList.add('active-element');
    g.appendChild(sg);
    // "0.0" text below SAGRES
    const sg2 = ce('text', {
      x: 70, y: 244, fill: '#1A237E',
      'font-size': '5', 'font-family': 'Arial, sans-serif'
    });
    sg2.textContent = '0.0';
    g.appendChild(sg2);
    // Wings emblem filled — left wing
    fl(g,
      'M 66 222 C 62 218 58 220 58 224 C 58 228 62 232 66 230 L 76 226 Z',
      '#1A237E', false);
    // Wings emblem filled — right wing
    fl(g,
      'M 86 222 C 90 218 94 220 94 224 C 94 228 90 232 86 230 L 76 226 Z',
      '#1A237E', false);
    // Wings center diamond
    fe(g, 'circle', { cx: 76, cy: 226, r: 2, fill: '#FFC107' }, false);

    // ---- "W" on Miguel's shirt — gray fill ----
    const wf = ce('text', {
      x: 177, y: 262, fill: '#9E9E9E',
      'font-size': '8', 'font-weight': 'bold',
      'font-family': 'Arial, sans-serif'
    });
    wf.textContent = 'W';
    g.appendChild(wf);
    // Pattern dots on Miguel's shirt — brighter fill versions
    fe(g, 'circle', { cx: 168, cy: 234, r: 1.8, fill: '#FF7043' }, false);
    fe(g, 'circle', { cx: 178, cy: 226, r: 1.8, fill: '#42A5F5' }, false);
    fe(g, 'circle', { cx: 188, cy: 238, r: 1.8, fill: '#66BB6A' }, false);
    fe(g, 'circle', { cx: 196, cy: 228, r: 1.8, fill: '#FFA726' }, false);
    fe(g, 'circle', { cx: 172, cy: 248, r: 1.8, fill: '#AB47BC' }, false);
    fe(g, 'circle', { cx: 192, cy: 250, r: 1.8, fill: '#26A69A' }, false);
    // Tiny character figure hints (filled)
    fe(g, 'circle', { cx: 168, cy: 231, r: 0.5, fill: '#BF360C' }, false);
    fe(g, 'circle', { cx: 188, cy: 235, r: 0.5, fill: '#1B5E20' }, false);

    // ---- Ricardo mouth fill (warm smile) ----
    fl(g,
      'M 274 142 C 280 148 286 150 290 150 C 294 150 300 148 304 142 C 300 150 294 152 290 152 C 286 152 280 150 274 142 Z',
      '#E57373', false);

    // ---- Bruno beard shadow under chin ----
    fl(g,
      'M 62 156 C 68 164 74 170 78 172 C 82 170 88 164 94 156 C 90 162 84 168 80 170 C 76 168 68 162 62 156 Z',
      '#5D4037', false);

    // ---- Nasolabial folds — Bruno ----
    pp(g, ['M 68 134 C 66 140 64 146 64 150'], false, lt);
    pp(g, ['M 88 132 C 90 138 92 144 92 148'], false, lt);

    // ---- Tablecloth texture — fold highlights ----
    pp(g, [
      'M 20 320 C 40 316 60 318 80 320',
      'M 140 318 C 160 314 180 316 200 318',
      'M 260 320 C 280 316 300 318 320 320'
    ], a, lt);
    // Tablecloth subtle vertical drape lines
    pp(g, [
      'M 60 308 L 58 440',
      'M 180 308 L 178 440',
      'M 300 308 L 298 440'
    ], false, lt);

    // ---- Warm ambient light overlay ----
    fe(g, 'rect', { x: 0, y: 0, width: 360, height: 300, fill: '#FFF8E1', opacity: '0.05' }, false);
    // Soft warm glow on table area
    fe(g, 'ellipse', { cx: 180, cy: 300, rx: 160, ry: 30, fill: '#FFECB3', opacity: '0.08' }, false);

    // ---- Finger skin refinements ----
    // Miguel left hand fingers
    fe(g, 'ellipse', { cx: 132, cy: 278, rx: 4, ry: 5, fill: '#F5D0A9', opacity: '0.5' }, false);
    // Miguel right hand fingers
    fe(g, 'ellipse', { cx: 228, cy: 278, rx: 4, ry: 5, fill: '#F5D0A9', opacity: '0.5' }, false);
    // Ricardo extended fingers
    fe(g, 'ellipse', { cx: 224, cy: 252, rx: 5, ry: 6, fill: '#F5D0A9', opacity: '0.5' }, false);

    // ---- Egg highlight shines ----
    // Orange egg shine
    fe(g, 'ellipse', { cx: 178, cy: 270, rx: 3, ry: 2, fill: '#FFCCBC', opacity: '0.5' }, false);
    // Blue egg shine
    fe(g, 'ellipse', { cx: 234, cy: 238, rx: 3, ry: 2, fill: '#BBDEFB', opacity: '0.5' }, false);

    // ---- Frame inner shadows (subtle depth) ----
    fe(g, 'rect', { x: 39, y: 50, width: 42, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 153, y: 48, width: 52, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
    fe(g, 'rect', { x: 281, y: 50, width: 50, height: 5, fill: '#D7CCC8', opacity: '0.3' }, false);
  }
];
