// ===== SCENE DATA =====
// Each entry represents a full scene to sketch (the entire photo, not just the person)
const familyMembers = [
  {
    id: 'miguel',
    name: 'Miguel',
    photo: 'img/Miguel.jpg',
    description: 'O Miguel a comer!',
    color: '#FF7043',
    steps: [
      {
        title: 'Composi\u00E7\u00E3o base',
        description: 'Desenha duas linhas: uma horizontal no meio da folha (a mesa) e divide o espa\u00E7o de cima para o Miguel. A mesa ocupa a metade de baixo.',
        tip: 'Dica: A linha da mesa fica ligeiramente abaixo do meio.'
      },
      {
        title: 'O Miguel \u2014 corpo',
        description: 'Desenha o contorno do Miguel sentado atr\u00E1s da mesa. Ele est\u00E1 ligeiramente inclinado para a frente, com os bra\u00E7os sobre a mesa. A cabe\u00E7a \u00E9 redonda.',
        tip: 'Dica: O Miguel ocupa o lado direito da imagem.'
      },
      {
        title: 'O Miguel \u2014 cara',
        description: 'Desenha a cara: olhos grandes e vivos, nariz pequeno, e um sorriso largo aberto (est\u00E1 a comer!). As orelhas sobressaem um pouco.',
        tip: 'Dica: A boca est\u00E1 aberta com comida \u2014 faz um sorriso maroto.'
      },
      {
        title: 'O Miguel \u2014 cabelo e camisola',
        description: 'Cabelo curto e loiro, penteado para o lado. Camisola amarela com capuz. Desenha o capuz \u00E0 volta do pesco\u00E7o e os cord\u00F5es.',
        tip: 'Dica: A camisola amarela \u00E9 o detalhe mais marcante do Miguel.'
      },
      {
        title: 'M\u00E3os e a\u00E7\u00E3o',
        description: 'A m\u00E3o direita leva comida \u00E0 boca. A m\u00E3o esquerda segura um copo transparente com bebida. Desenha os bra\u00E7os sobre a mesa.',
        tip: 'Dica: O copo \u00E9 pequeno e transparente, com l\u00EDquido amarelado.'
      },
      {
        title: 'A mesa \u2014 toalha e tigela',
        description: 'A mesa tem uma toalha vermelha! Desenha a tigela com comida \u00E0 frente do Miguel. A tigela \u00E9 cinzenta com uma lua.',
        tip: 'Dica: A toalha vermelha cobre toda a mesa.'
      },
      {
        title: 'Garrafas e latas',
        description: 'No centro da mesa: uma garrafa de vinho escura (Quinta do Cardo) com rolha de vidro, e uma garrafa de Tinto de Ver\u00E3o Lemon com tampa amarela. \u00C0 esquerda, uma lata vermelha.',
        tip: 'Dica: A garrafa de vinho \u00E9 mais alta. A de lim\u00E3o tem r\u00F3tulo castanho.'
      },
      {
        title: 'Colorir \u2014 Miguel',
        description: 'Pinta a pele do Miguel, o cabelo loiro, e a camisola amarela viva. O capuz \u00E9 um amarelo mais escuro.',
        tip: 'Dica: Amarelo forte para a camisola, castanho claro para o cabelo.'
      },
      {
        title: 'Colorir \u2014 mesa e objetos',
        description: 'Pinta a toalha de vermelho. A garrafa de vinho \u00E9 verde escura. A de lim\u00E3o \u00E9 castanha. A lata \u00E9 vermelha. A tigela \u00E9 cinza.',
        tip: 'Dica: O vermelho da toalha \u00E9 o fundo mais forte da cena.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona: os r\u00F3tulos das garrafas (texto simples), a rolha de vidro no topo da garrafa de vinho, reflexos no copo, e um fundo com a parede e o frigor\u00EDfico.',
        tip: 'Dica: A rolha de vidro \u00E9 redonda e transparente \u2014 parece uma bolha!'
      }
    ]
  },
  {
    id: 'sandra',
    name: 'Sandra',
    photo: 'img/Sandra.jpg',
    description: 'A Sandra a jogar domin\u00F3!',
    color: '#AB47BC',
    steps: [
      {
        title: 'Composi\u00E7\u00E3o base',
        description: 'Desenha a mesa com toalha axadrezada na metade de baixo. A Sandra est\u00E1 sentada atr\u00E1s da mesa, centrada na imagem.',
        tip: 'Dica: A toalha tem quadrados bege e castanhos.'
      },
      {
        title: 'A Sandra \u2014 corpo',
        description: 'Desenha o contorno da Sandra sentada. Ela est\u00E1 ligeiramente inclinada para baixo, a olhar para as pe\u00E7as de domin\u00F3. Os bra\u00E7os est\u00E3o \u00E0 frente sobre a mesa.',
        tip: 'Dica: A Sandra est\u00E1 concentrada, com a cabe\u00E7a ligeiramente inclinada.'
      },
      {
        title: 'A Sandra \u2014 cara',
        description: 'Rosto oval e elegante. Olhos em am\u00EAndoa a olhar para baixo. Nariz fino. Sorriso suave e concentrado. Sobrancelhas finas e arqueadas.',
        tip: 'Dica: Ela est\u00E1 a olhar para as pe\u00E7as, n\u00E3o para a frente.'
      },
      {
        title: 'A Sandra \u2014 cabelo',
        description: 'Cabelo castanho ondulado, puxado para tr\u00E1s num rabo de cavalo. Algumas madeixas soltas emolduram a cara. El\u00E1stico vis\u00EDvel.',
        tip: 'Dica: O cabelo tem ondas \u2014 usa linhas curvas e soltas.'
      },
      {
        title: 'A Sandra \u2014 roupa',
        description: 'Casaco rosa claro aberto sobre uma camisola preta com texto cursivo branco. O casaco tem gola e est\u00E1 aberto \u00E0 frente.',
        tip: 'Dica: O rosa do casaco contrasta com o preto da camisola.'
      },
      {
        title: 'M\u00E3os e domin\u00F3s',
        description: 'As m\u00E3os seguram pe\u00E7as de domin\u00F3. Os dedos s\u00E3o finos e elegantes. Desenha 2-3 pe\u00E7as em cada m\u00E3o com os pontos vis\u00EDveis.',
        tip: 'Dica: As pe\u00E7as de domin\u00F3 s\u00E3o rect\u00E2ngulos brancos com uma linha no meio e pontos.'
      },
      {
        title: 'Mesa \u2014 domin\u00F3s e objetos',
        description: 'Na mesa: v\u00E1rias pe\u00E7as de domin\u00F3 em fila (j\u00E1 jogadas). Um telem\u00F3vel deitado e um comando de TV ao lado. A toalha axadrezada cobre tudo.',
        tip: 'Dica: Os domin\u00F3s jogados formam uma linha serpenteante na mesa.'
      },
      {
        title: 'Colorir \u2014 Sandra',
        description: 'Pinta a pele, cabelo castanho com reflexos dourados. Casaco rosa beb\u00E9. Camisola preta. Rel\u00F3gio no pulso.',
        tip: 'Dica: Rosa suave para o casaco, preto com texto branco para a camisola.'
      },
      {
        title: 'Colorir \u2014 mesa e cena',
        description: 'Pinta a toalha axadrezada (bege e castanho). Domin\u00F3s brancos com pontos pretos. Telem\u00F3vel cinza/dourado.',
        tip: 'Dica: Alterna quadrados claros e escuros na toalha.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona: texto cursivo na camisola, pontos nos domin\u00F3s, padr\u00E3o da toalha, sombras suaves, e o fundo (cozinha com arm\u00E1rios).',
        tip: 'Dica: O texto da camisola parece "It\'s all good" em letra cursiva.'
      }
    ]
  },
  {
    id: 'brunomiguel',
    name: 'Bruno + Miguel',
    photo: 'img/Bruno + Miguel.jpg',
    description: 'O pai e o filho juntos!',
    color: '#42A5F5',
    steps: [
      {
        title: 'Composi\u00E7\u00E3o base',
        description: 'Desenha duas figuras lado a lado: o Bruno (\u00E0 esquerda, maior) e o Miguel (\u00E0 direita, mais pequeno). Em baixo, uma mesa/balc\u00E3o.',
        tip: 'Dica: O Bruno ocupa ~40% da largura, o Miguel ~35%. H\u00E1 uma terceira pessoa atr\u00E1s (s\u00F3 o tronco).'
      },
      {
        title: 'O Bruno \u2014 corpo e cara',
        description: 'Cara angular e magra, queixo forte. Olhos escuros e atentos, a olhar para o Miguel. Sobrancelhas grossas. Nariz recto e proeminente. Express\u00E3o concentrada.',
        tip: 'Dica: O Bruno est\u00E1 a olhar para baixo, para o que o Miguel tem nas m\u00E3os.'
      },
      {
        title: 'O Bruno \u2014 cabelo e barba',
        description: 'Cabelo muito curto (quase rapado) \u2014 usa pontinhos pequenos. Barba curta/barba por fazer ao longo do maxilar e queixo. Entradas nas t\u00EAmporas.',
        tip: 'Dica: O cabelo e barba s\u00E3o feitos com pontinhos, n\u00E3o linhas.'
      },
      {
        title: 'O Bruno \u2014 casaco',
        description: 'Casaco escuro (azul marinho/preto) com fecho ao centro. Detalhes laranjas nos ombros. Logo "PESSOAL" no peito com 3 pontos coloridos (laranja, verde, azul).',
        tip: 'Dica: Os detalhes laranjas s\u00E3o o que torna o casaco reconhec\u00EDvel.'
      },
      {
        title: 'O Miguel \u2014 corpo e cara',
        description: 'Ao lado do Bruno, mais baixo. Cara redonda de crian\u00E7a. Olhos a olhar para baixo (para o objeto nas m\u00E3os). Boca ligeiramente aberta. Cabelo escuro e curto.',
        tip: 'Dica: O Miguel nesta foto tem cabelo mais escuro e camisola azul escura.'
      },
      {
        title: 'O Miguel \u2014 roupa e m\u00E3os',
        description: 'Camisola azul escura com "95" em branco no peito. As m\u00E3os seguram um brinquedo colorido (azul e vermelho). Os dedos est\u00E3o a manipular o objeto.',
        tip: 'Dica: O "95" \u00E9 o detalhe que identifica a camisola.'
      },
      {
        title: 'Mesa e objetos',
        description: 'Mesa/balc\u00E3o escuro em baixo. Uma bola azul na mesa. Um copo branco. A m\u00E3o do Bruno est\u00E1 a fazer um gesto (a explicar). Terceira pessoa ao fundo (\u00E0 direita, s\u00F3 tronco com camisola castanha).',
        tip: 'Dica: A pessoa ao fundo \u00E9 s\u00F3 um contorno suave \u2014 n\u00E3o precisa de detalhe.'
      },
      {
        title: 'Colorir \u2014 figuras',
        description: 'Bruno: pele morena, casaco azul escuro com laranjas. Miguel: pele clara, camisola azul escura. Pessoa ao fundo: camisola castanha.',
        tip: 'Dica: O contraste entre o casaco escuro do Bruno e o laranja \u00E9 importante.'
      },
      {
        title: 'Colorir \u2014 cena',
        description: 'Mesa escura/cinza. Bola azul vivo. Copo branco. Brinquedo colorido (azul e vermelho). Fundo com tons quentes (ilumina\u00E7\u00E3o de caf\u00E9).',
        tip: 'Dica: A bola azul na mesa \u00E9 um ponto de cor forte.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona: logo PESSOAL e pontos coloridos no casaco do Bruno, "95" na camisola do Miguel, sombras na mesa, e luz ambiente do caf\u00E9 ao fundo.',
        tip: 'Dica: Umas linhas verticais suaves ao fundo sugerem o ambiente do caf\u00E9.'
      }
    ]
  }
];

// ===== APP STATE =====
let currentMember = null;
let currentStep = 0;

// ===== DOM =====
const screenMenu = document.getElementById('screen-menu');
const screenGuide = document.getElementById('screen-guide');
const screenDone = document.getElementById('screen-done');
const familyGrid = document.getElementById('family-grid');
const btnBack = document.getElementById('btn-back');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnMenu = document.getElementById('btn-menu');
const guideTitle = document.getElementById('guide-title');
const stepCounter = document.getElementById('step-counter');
const referencePhoto = document.getElementById('reference-photo');
const referenceFloat = document.getElementById('reference-float');
const drawingCanvas = document.getElementById('drawing-canvas');
const drawingBadge = document.getElementById('drawing-badge');
const stepTitle = document.getElementById('step-title');
const stepDescription = document.getElementById('step-description');
const stepTip = document.getElementById('step-tip');
const progressBar = document.getElementById('progress-bar');
const doneText = document.getElementById('done-text');
const donePhoto = document.getElementById('done-photo');
const doneDrawing = document.getElementById('done-drawing');

function buildMenu() {
  familyGrid.innerHTML = '';
  familyMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'family-card';
    card.innerHTML = `
      <img class="family-card-photo" src="${member.photo}" alt="${member.name}">
      <div class="family-card-info">
        <div class="family-card-name">${member.name}</div>
        <div class="family-card-desc">${member.description}</div>
      </div>
      <div class="family-card-arrow">\u25B6</div>
    `;
    card.addEventListener('click', () => startDrawing(member));
    familyGrid.appendChild(card);
  });
}

function showScreen(screen) {
  [screenMenu, screenGuide, screenDone].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startDrawing(member) {
  currentMember = member;
  currentStep = 0;
  guideTitle.textContent = `Desenhar: ${member.name}`;
  referencePhoto.src = member.photo;
  referenceFloat.classList.remove('expanded');
  renderStep();
  showScreen(screenGuide);
}

function renderStep() {
  const step = currentMember.steps[currentStep];
  const total = currentMember.steps.length;

  stepCounter.textContent = `${currentStep + 1}/${total}`;
  drawingBadge.textContent = `Passo ${currentStep + 1}`;

  drawingCanvas.innerHTML = '';
  const svg = renderDrawing(currentMember.id, currentStep);
  if (svg) drawingCanvas.appendChild(svg);

  stepTitle.textContent = step.title;
  stepDescription.textContent = step.description;

  if (step.tip) {
    stepTip.textContent = step.tip;
    stepTip.classList.add('visible');
  } else {
    stepTip.classList.remove('visible');
  }

  progressBar.style.width = `${((currentStep + 1) / total) * 100}%`;
  btnPrev.disabled = currentStep === 0;
  btnNext.textContent = currentStep === total - 1 ? 'Terminei! \u{1F389}' : 'Seguinte \u2192';
  document.querySelector('.guide-body').scrollTop = 0;
}

function nextStep() {
  if (currentStep < currentMember.steps.length - 1) { currentStep++; renderStep(); }
  else showCompletion();
}

function prevStep() {
  if (currentStep > 0) { currentStep--; renderStep(); }
}

function showCompletion() {
  doneText.textContent = `Acabaste o desenho "${currentMember.name}"! Ficou espetacular!`;
  donePhoto.src = currentMember.photo;
  donePhoto.alt = currentMember.name;
  doneDrawing.innerHTML = '';
  const finalSvg = renderDrawing(currentMember.id, currentMember.steps.length - 1);
  if (finalSvg) {
    finalSvg.querySelectorAll('.active-element').forEach(el => el.classList.remove('active-element'));
    doneDrawing.appendChild(finalSvg);
  }
  showScreen(screenDone);
}

function goToMenu() { currentMember = null; currentStep = 0; showScreen(screenMenu); }

btnBack.addEventListener('click', goToMenu);
btnPrev.addEventListener('click', prevStep);
btnNext.addEventListener('click', nextStep);
btnMenu.addEventListener('click', goToMenu);
referenceFloat.addEventListener('click', () => referenceFloat.classList.toggle('expanded'));

let touchStartX = 0;
screenGuide.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
screenGuide.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 60) { diff > 0 ? nextStep() : prevStep(); }
}, { passive: true });

document.addEventListener('keydown', e => {
  if (!screenGuide.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextStep();
  if (e.key === 'ArrowLeft') prevStep();
  if (e.key === 'Escape') goToMenu();
});

buildMenu();
