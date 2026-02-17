"""
Replace a scene's layers in drawings.js with PNG-based layers.

Usage:
  python tools/splice_scene.py <scene_id> [photo_filename]
  python tools/splice_scene.py batizado img/batizado-miguel.jpg
  python tools/splice_scene.py --batch batizado,miguel,matilde
"""
import re
import sys

DRAWINGS_FILE = "www/js/drawings.js"
APP_FILE = "www/js/app.js"

# Scene -> photo mapping (for color reference layer)
PHOTOS = {
    'miguelbebe':   'img/miguel-bebe.jpeg',
    'batizado':     'img/batizado-miguel.jpg',
    'miguel':       'img/Miguel.jpg',
    'matilde':      'img/matilde.jpg',
    'mdd':          'img/mdd.jpeg',
    'paisestudio':  'img/pais-estudio.jpeg',
    'casamento':    'img/casamento-pais.jpg',
    'pais':         'img/pais.jpg',
    'sandra':       'img/Sandra.jpg',
    'paitio':       'img/pai-tio-miguel.jpg',
    'brunomiguel':  'img/Bruno + Miguel.jpg',
    'padrinhos':    'img/padrinhos.jpg',
    'avoesduarte':  'img/avoes-duarte.jpg',
    'avosdias':     'img/avos-dias.jpg',
    'bivo':         'img/bivo.jpg',
    'tioavo':       'img/tio-avo.jpg',
}

# Scene -> display name for signature layer
NAMES = {
    'miguelbebe':   'Miguel',
    'batizado':     'Batizado',
    'miguel':       'Miguel',
    'matilde':      'Matilde',
    'mdd':          'Miguel',
    'paisestudio':  'Familia Dias',
    'casamento':    'Casamento',
    'pais':         'Ricardo & Sandra',
    'sandra':       'Sandra',
    'paitio':       'Pai, Tio & Miguel',
    'brunomiguel':  'Bruno & Miguel',
    'padrinhos':    'Padrinhos',
    'avoesduarte':  'Avos Duarte',
    'avosdias':     'Avos Dias',
    'bivo':         'Bisavo',
    'tioavo':       'Tio & Avo',
}


def make_png_layers(scene_id, photo_path):
    """Generate the JS code for PNG-based layers (6 total)."""
    return f'''  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {{
    // Grid lines
    pp(g, ['M 180 0 L 180 450'], a, lt);
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Frame
    pp(g, ['M 10 5 L 350 5 L 350 445 L 10 445 Z'], a, lt);
  }},

  // Layer 1: Top region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step1_hl.png' : 'img/{scene_id}/step1.png';
    const img = ce('image', {{ x: '0', y: '0', width: '360', height: '450' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 2: Middle region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step2_hl.png' : 'img/{scene_id}/step2.png';
    const img = ce('image', {{ x: '0', y: '0', width: '360', height: '450' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 3: Bottom region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step3_hl.png' : 'img/{scene_id}/step3.png';
    const img = ce('image', {{ x: '0', y: '0', width: '360', height: '450' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 4: Fine detail — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step4_hl.png' : 'img/{scene_id}/step4.png';
    const img = ce('image', {{ x: '0', y: '0', width: '360', height: '450' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {{
    const img = ce('image', {{ x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' }});
    img.setAttribute('href', '{photo_path}');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 6: Signature
  (g, a) => {{
    const t = ce('text', {{
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    }});
    t.textContent = '{NAMES.get(scene_id, scene_id)}';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }}'''


# 7 step descriptions for app.js (matching 7 layers: 0-6)
STEP_DESCRIPTIONS = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Parte superior', 'description': 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', 'tip': 'Segue os contornos da foto - as linhas seguem as formas reais.' },
    { 'title': 'Parte central', 'description': 'Contornos tracados da zona central: tronco, bracos, objectos.', 'tip': 'Mantem a pressao do lapis constante para linhas uniformes.' },
    { 'title': 'Parte inferior', 'description': 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', 'tip': 'As linhas mais distantes podem ser mais leves.' },
    { 'title': 'Detalhes finos', 'description': 'Textura e detalhes adicionais: roupa, sombras, padroes.', 'tip': 'Usa linhas finas e leves para os detalhes de textura.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Observa as cores e sombras da foto para colorir o desenho.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]


def splice_drawings(scene_id, photo_path):
    """Replace scene layers in drawings.js."""
    with open(DRAWINGS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    var_name = f"const {scene_id}Layers = ["
    start_idx = content.find(var_name)
    if start_idx == -1:
        print(f"  ERROR: Cannot find '{var_name}' in drawings.js")
        return False

    # Find the matching closing "];" — need to count bracket depth
    search_start = content.index('[', start_idx)
    depth = 0
    end_idx = None
    for i in range(search_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                end_idx = i + 1  # include the ]
                break

    if end_idx is None:
        print(f"  ERROR: Cannot find closing bracket for {scene_id}Layers")
        return False

    # Check for semicolon after ]
    if end_idx < len(content) and content[end_idx] == ';':
        end_idx += 1

    new_array = f"const {scene_id}Layers = [\n{make_png_layers(scene_id, photo_path)}\n];"
    new_content = content[:start_idx] + new_array + content[end_idx:]

    with open(DRAWINGS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  drawings.js: replaced {scene_id}Layers ({len(content)} -> {len(new_content)} chars)")
    return True


def splice_app_steps(scene_id):
    """Replace step descriptions in app.js."""
    with open(APP_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the scene definition and its steps array
    scene_match = content.find(f"id: '{scene_id}'")
    if scene_match == -1:
        print(f"  ERROR: Cannot find scene '{scene_id}' in app.js")
        return False

    # Find "steps: [" after the scene id
    steps_start = content.find("steps: [", scene_match)
    if steps_start == -1:
        print(f"  ERROR: Cannot find steps array for '{scene_id}'")
        return False

    bracket_start = content.index('[', steps_start)

    # Find matching ]
    depth = 0
    bracket_end = None
    for i in range(bracket_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                bracket_end = i + 1
                break

    if bracket_end is None:
        print(f"  ERROR: Cannot find closing bracket for steps")
        return False

    # Build new steps array
    steps_lines = []
    for s in STEP_DESCRIPTIONS:
        t = s['title'].replace("'", "\\'")
        d = s['description'].replace("'", "\\'")
        tip = s['tip'].replace("'", "\\'")
        steps_lines.append(f"      {{ title: '{t}', description: '{d}', tip: '{tip}' }}")

    new_steps = "[\n" + ",\n".join(steps_lines) + "\n    ]"
    new_content = content[:bracket_start] + new_steps + content[bracket_end:]

    with open(APP_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  app.js: replaced {scene_id} steps ({len(content)} -> {len(new_content)} chars)")
    return True


def process_scene(scene_id):
    photo = PHOTOS.get(scene_id)
    if not photo:
        print(f"Unknown scene: {scene_id}")
        return False

    print(f"\n--- Splicing: {scene_id} ---")
    ok1 = splice_drawings(scene_id, photo)
    ok2 = splice_app_steps(scene_id)
    return ok1 and ok2


def main():
    if len(sys.argv) < 2:
        print("Usage: python tools/splice_scene.py <scene_id>")
        print("       python tools/splice_scene.py --batch scene1,scene2,scene3")
        sys.exit(1)

    if sys.argv[1] == '--batch':
        scenes = sys.argv[2].split(',')
        for sid in scenes:
            process_scene(sid.strip())
    else:
        process_scene(sys.argv[1])


if __name__ == '__main__':
    main()
