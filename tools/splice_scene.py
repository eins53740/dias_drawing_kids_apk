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

# Scenes using landscape canvas (450x360 instead of 360x450)
LANDSCAPE_SCENES = {
    'batizado', 'miguel', 'matilde', 'paitio',
    'avoesduarte', 'avosdias', 'tioavo',
    'diasfamily', 'espedrada', 'espedradaprimos',
}

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
    'segundafamilia': 'img/segunda-familia.jpeg',
    'avosmdd':        'img/avos-mdd.png',
    'diasfamily':     'img/dias-family.png',
    'dias66':         'img/dias-family-2.png',
    'espedrada':      'img/espedrada.jpg',
    'espedradaprimos':'img/espedrada-primos.jpg',
    'mddeamigos':     'img/mdd-amigos.png',
    'mddsprunkies':   'img/mdd-sprunkies.jpg',
    'primosespedrada':'img/primos-espedrada.jpg',
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
    'segundafamilia': 'Segunda Familia',
    'avosmdd':        'Avos e Miguel',
    'diasfamily':     'Familia Dias',
    'dias66':         'Familia Dias',
    'espedrada':      'Espedrada',
    'espedradaprimos':'Bisavo e Netos',
    'mddeamigos':     'Miguel e Amigos',
    'mddsprunkies':   'Miguel e Sprunkies',
    'primosespedrada':'Primos Espedrada',
}

# Scenes that use 6-layer (no fine detail) variant
SIMPLE_SCENES = {'segundafamilia'}

# Scenes that use 7-layer 4-star variants (style-specific)
FOURSTAR_SCENES = {
    'pais': 'cartoon', 'paitio': 'cartoon', 'tioavo': 'cartoon',
    'brunomiguel': 'adaptive', 'avosdias': 'adaptive',
    'sandra': 'posterize', 'avoesduarte': 'posterize',
    # Phase 2 scenes
    'avosmdd': 'posterize', 'diasfamily': 'cartoon', 'dias66': 'adaptive',
    'espedrada': 'cartoon', 'espedradaprimos': 'adaptive',
    'mddeamigos': 'posterize', 'mddsprunkies': 'cartoon', 'primosespedrada': 'posterize',
}


def get_dims(scene_id):
    """Return (w, h) based on scene orientation."""
    if scene_id in LANDSCAPE_SCENES:
        return 450, 360
    return 360, 450


def make_png_layers(scene_id, photo_path):
    """Generate the JS code for PNG-based layers (7 total)."""
    w, h = get_dims(scene_id)
    cx = w // 2
    t3 = h // 3
    return f'''  // ================================================================
  // PNG TRACED APPROACH: Layers use edge-detected PNG images.
  // Layer 0: construction guides | Layers 1-4: traced outlines
  // Layer 5: color reference | Layer 6: signature
  // Canvas: {w}x{h}
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {{
    pp(g, ['M {cx} 0 L {cx} {h}'], a, lt);
    pp(g, ['M 0 {t3} L {w} {t3}'], a, lt);
    pp(g, ['M 0 {t3*2} L {w} {t3*2}'], a, lt);
    pp(g, ['M 10 5 L {w-10} 5 L {w-10} {h-5} L 10 {h-5} Z'], a, lt);
  }},

  // Layer 1: Top region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step1_hl.png' : 'img/{scene_id}/step1.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 2: Middle region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step2_hl.png' : 'img/{scene_id}/step2.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 3: Bottom region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step3_hl.png' : 'img/{scene_id}/step3.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 4: Fine detail — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step4_hl.png' : 'img/{scene_id}/step4.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 5: Color reference — photo at reduced opacity
  (g, a) => {{
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}', opacity: a ? '0.6' : '0.25' }});
    img.setAttribute('href', '{photo_path}');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 6: Signature
  (g, a) => {{
    const t = ce('text', {{
      x: {cx}, y: {h - 15},
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


def make_png_layers_simple(scene_id, photo_path):
    """Generate JS code for 6-layer variant (no fine detail layer)."""
    w, h = get_dims(scene_id)
    cx = w // 2
    t3 = h // 3
    return f'''  // ================================================================
  // PNG TRACED APPROACH (3-star): 6 layers, no fine detail.
  // Canvas: {w}x{h}
  // ================================================================

  // Layer 0: Construction guides
  (g, a) => {{
    pp(g, ['M {cx} 0 L {cx} {h}'], a, lt);
    pp(g, ['M 0 {t3} L {w} {t3}'], a, lt);
    pp(g, ['M 0 {t3*2} L {w} {t3*2}'], a, lt);
    pp(g, ['M 10 5 L {w-10} 5 L {w-10} {h-5} L 10 {h-5} Z'], a, lt);
  }},

  // Layer 1: Top region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step1_hl.png' : 'img/{scene_id}/step1.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 2: Middle region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step2_hl.png' : 'img/{scene_id}/step2.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 3: Bottom region — traced from photo
  (g, a) => {{
    const src = a ? 'img/{scene_id}/step3_hl.png' : 'img/{scene_id}/step3.png';
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}' }});
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 4: Color reference — photo at reduced opacity
  (g, a) => {{
    const img = ce('image', {{ x: '0', y: '0', width: '{w}', height: '{h}', opacity: a ? '0.6' : '0.25' }});
    img.setAttribute('href', '{photo_path}');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  }},

  // Layer 5: Signature
  (g, a) => {{
    const t = ce('text', {{
      x: {cx}, y: {h - 15},
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


# 6 step descriptions for 3-star scenes (matching 6 layers: 0-5)
STEP_DESCRIPTIONS_SIMPLE = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Parte superior', 'description': 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', 'tip': 'Segue os contornos da foto - as linhas seguem as formas reais.' },
    { 'title': 'Parte central', 'description': 'Contornos tracados da zona central: tronco, bracos, objectos.', 'tip': 'Mantem a pressao do lapis constante para linhas uniformes.' },
    { 'title': 'Parte inferior', 'description': 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', 'tip': 'As linhas mais distantes podem ser mais leves.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Observa as cores e sombras da foto para colorir o desenho.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]

# 7 step descriptions for 5-star Canny scenes (matching 7 layers: 0-6)
STEP_DESCRIPTIONS = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Parte superior', 'description': 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', 'tip': 'Segue os contornos da foto - as linhas seguem as formas reais.' },
    { 'title': 'Parte central', 'description': 'Contornos tracados da zona central: tronco, bracos, objectos.', 'tip': 'Mantem a pressao do lapis constante para linhas uniformes.' },
    { 'title': 'Parte inferior', 'description': 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', 'tip': 'As linhas mais distantes podem ser mais leves.' },
    { 'title': 'Detalhes finos', 'description': 'Textura e detalhes adicionais: roupa, sombras, padroes.', 'tip': 'Usa linhas finas e leves para os detalhes de textura.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Observa as cores e sombras da foto para colorir o desenho.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]

# 7 step descriptions for 4-star cartoon scenes (matching 7 layers: 0-6)
STEP_DESCRIPTIONS_CARTOON = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Contornos superiores', 'description': 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', 'tip': 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
    { 'title': 'Contornos centrais', 'description': 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', 'tip': 'Simplifica as formas - menos detalhe, mais expressao.' },
    { 'title': 'Contornos inferiores', 'description': 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', 'tip': 'Mantem as linhas grossas e confiantes ate ao final.' },
    { 'title': 'Expressao e detalhe', 'description': 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', 'tip': 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]

# 7 step descriptions for 4-star adaptive threshold scenes (matching 7 layers: 0-6)
STEP_DESCRIPTIONS_ADAPTIVE = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Parte superior', 'description': 'Zona superior em alto contraste preto e branco: cabecas, rostos e cabelo com sombras marcadas.', 'tip': 'Pensa em preto e branco - sem tons cinzentos, so luz e sombra.' },
    { 'title': 'Parte central', 'description': 'Zona central em contraste forte: tronco, bracos e objectos com areas escuras bem definidas.', 'tip': 'As areas de sombra sao completamente pretas - sem meios tons.' },
    { 'title': 'Parte inferior', 'description': 'Zona inferior em contraste: pernas, mesa, chao com texturas de luz e sombra.', 'tip': 'O efeito de gravura cria padroes interessantes nas texturas.' },
    { 'title': 'Sombras e texturas', 'description': 'Camada adicional de sombras e texturas que dao profundidade ao estilo gravura.', 'tip': 'Usa hachurado (linhas cruzadas) para simular as sombras.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Mesmo a preto e branco, observa onde a luz incide na foto.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]

# 7 step descriptions for 4-star posterize scenes (matching 7 layers: 0-6)
STEP_DESCRIPTIONS_POSTERIZE = [
    { 'title': 'Composicao', 'description': 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', 'tip': 'Desenha com linhas muito leves - sao apenas referencias.' },
    { 'title': 'Parte superior', 'description': 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', 'tip': 'Segue os contornos da foto - as linhas seguem as formas reais.' },
    { 'title': 'Parte central', 'description': 'Contornos da zona central: tronco, bracos e objectos.', 'tip': 'Mantem a pressao do lapis constante para linhas uniformes.' },
    { 'title': 'Parte inferior', 'description': 'Contornos da zona inferior: pernas, mesa, chao e fundo.', 'tip': 'As linhas mais distantes podem ser mais leves.' },
    { 'title': 'Regioes de cor', 'description': 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', 'tip': 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
    { 'title': 'Referencia de cor', 'description': 'A foto original como referencia de cores e tons.', 'tip': 'Usa poucas cores - simplifica para 5-6 tons principais.' },
    { 'title': 'Assinatura', 'description': 'Assina o desenho com o nome no fundo da composicao.', 'tip': 'Uma assinatura discreta completa o retrato.' },
]

STEP_DESCRIPTIONS_BY_STYLE = {
    'cartoon':   STEP_DESCRIPTIONS_CARTOON,
    'adaptive':  STEP_DESCRIPTIONS_ADAPTIVE,
    'posterize': STEP_DESCRIPTIONS_POSTERIZE,
}


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

    if scene_id in SIMPLE_SCENES:
        layers_code = make_png_layers_simple(scene_id, photo_path)
    else:
        layers_code = make_png_layers(scene_id, photo_path)
    new_array = f"const {scene_id}Layers = [\n{layers_code}\n];"
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
    if scene_id in SIMPLE_SCENES:
        steps = STEP_DESCRIPTIONS_SIMPLE
    elif scene_id in FOURSTAR_SCENES:
        steps = STEP_DESCRIPTIONS_BY_STYLE[FOURSTAR_SCENES[scene_id]]
    else:
        steps = STEP_DESCRIPTIONS
    steps_lines = []
    for s in steps:
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
