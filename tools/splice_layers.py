"""
Replace miguelbebeLayers content in drawings.js with PNG-based layers.
"""
import re

DRAWINGS_FILE = "www/js/drawings.js"

NEW_LAYERS = '''
  // Layer 0: Construction guides — light proportional reference lines
  (g, a) => {
    // Vertical center
    pp(g, ['M 180 0 L 180 450'], a, lt);
    // Horizontal thirds
    pp(g, ['M 0 150 L 360 150'], a, lt);
    pp(g, ['M 0 300 L 360 300'], a, lt);
    // Head oval guide
    pp(g, ['M 180 28 C 220 28 252 55 252 90 C 252 125 220 152 180 152 C 140 152 108 125 108 90 C 108 55 140 28 180 28 Z'], a, lt);
    // Eye line
    pp(g, ['M 120 93 L 240 93'], a, lt);
    // Torso guide
    pp(g, ['M 140 155 L 220 155 L 235 290 L 125 290 Z'], a, lt);
    // Right arm direction (UP toward head)
    pp(g, ['M 142 168 L 112 120 L 128 78'], a, lt);
    // Left arm direction (DOWN toward M)
    pp(g, ['M 218 168 L 240 218 L 208 258'], a, lt);
    // Leg directions
    pp(g, ['M 160 280 L 130 335 L 118 382'], a, lt);
    pp(g, ['M 200 280 L 232 335 L 248 382'], a, lt);
    // Blanket frame
    pp(g, ['M 20 10 L 340 10 L 340 440 L 20 440 Z'], a, lt);
  },

  // Layer 1: Head and face — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step1_hl.png' : 'img/miguelbebe/step1.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 2: Body, arms, and objects — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step2_hl.png' : 'img/miguelbebe/step2.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 3: Clothing texture detail — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step3_hl.png' : 'img/miguelbebe/step3.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 4: Legs and booties — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step4_hl.png' : 'img/miguelbebe/step4.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 5: Background (blanket, stripes, pompoms, frame) — traced from photo
  (g, a) => {
    const src = a ? 'img/miguelbebe/step5_hl.png' : 'img/miguelbebe/step5.png';
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450' });
    img.setAttribute('href', src);
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 6: Color reference — photo at reduced opacity
  (g, a) => {
    const img = ce('image', { x: '0', y: '0', width: '360', height: '450', opacity: a ? '0.6' : '0.25' });
    img.setAttribute('href', 'img/miguel-bebe.jpeg');
    if (a) img.classList.add('active-element');
    g.appendChild(img);
  },

  // Layer 7: Final polish — name text
  (g, a) => {
    // Baby name text
    const t = ce('text', {
      x: 180, y: 435,
      fill: a ? HL : '#A08060',
      'font-size': '15',
      'text-anchor': 'middle',
      'font-family': 'Georgia, serif',
      'letter-spacing': '3',
      'font-style': 'italic'
    });
    t.textContent = 'Miguel';
    if (a) t.classList.add('active-element');
    g.appendChild(t);
  }
'''

def main():
    with open(DRAWINGS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the miguelbebeLayers array
    # Pattern: from the layer comments inside the array to the closing ];
    start_marker = "const miguelbebeLayers = ["
    end_marker = "];\n\nconst batizadoLayers = ["

    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)

    if start_idx == -1 or end_idx == -1:
        print("ERROR: Could not find miguelbebeLayers boundaries!")
        return

    # The array content is between the [ and ];
    # We want to keep the header comments but replace all layer functions
    header_end = content.find("// Layer 0:", start_idx)
    if header_end == -1:
        print("ERROR: Could not find Layer 0 marker!")
        return

    # Find the position just before "// Layer 0:"
    # We want to keep everything up to and including the TRACED APPROACH comment
    traced_comment_end = content.find("// Layer 0: Construction guides", start_idx)
    if traced_comment_end == -1:
        print("ERROR: Could not find Layer 0 Construction guides marker!")
        return

    # Build new content: everything before Layer 0 + new layers + everything after ];
    before = content[:traced_comment_end].rstrip()
    after = content[end_idx:]  # starts with ];\n\nconst batizadoLayers

    new_content = before + "\n" + NEW_LAYERS.rstrip() + "\n" + after

    with open(DRAWINGS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Successfully replaced miguelbebeLayers!")
    print(f"  Old file: {len(content)} chars")
    print(f"  New file: {len(new_content)} chars")
    print(f"  Difference: {len(new_content) - len(content)} chars")

if __name__ == '__main__':
    main()
