// ===== FAMILY DATA =====
const familyMembers = [
  {
    id: 'miguel',
    name: 'Miguel',
    photo: 'img/Miguel.jpg',
    description: 'O menino com energia!',
    color: '#FF7043',
    steps: [
      {
        title: 'Forma da cara',
        description: 'Desenha um oval grande no meio da folha. O Miguel tem uma cara redondinha! Deixa espa\u00E7o em baixo para o corpo.',
        tip: 'Dica: Faz o oval um pouco mais largo em baixo do que em cima.'
      },
      {
        title: 'Olhos e sobrancelhas',
        description: 'Desenha dois olhos grandes e redondos no meio da cara. Adiciona duas sobrancelhas curtas por cima. O Miguel tem olhos vivos e expressivos!',
        tip: 'Dica: Os olhos ficam a meio do oval, n\u00E3o no topo.'
      },
      {
        title: 'Nariz e boca',
        description: 'Desenha um nariz pequeno entre os olhos e a boca. A boca do Miguel tem um sorriso grande e aberto \u2014 ele est\u00E1 a comer!',
        tip: 'Dica: Faz a boca um pouco aberta com um sorriso maroto.'
      },
      {
        title: 'Cabelo',
        description: 'O Miguel tem cabelo curto e claro. Desenha linhas curtas no topo da cabe\u00E7a, cobrindo o topo do oval. O cabelo vai para a direita.',
        tip: 'Dica: Usa riscos curtos e r\u00E1pidos para dar textura ao cabelo.'
      },
      {
        title: 'Orelhas e pesco\u00E7o',
        description: 'Adiciona duas orelhas redondas nos lados da cara. Desenha o pesco\u00E7o com duas linhas para baixo a partir do oval.',
        tip: ''
      },
      {
        title: 'Camisola amarela',
        description: 'O Miguel tem uma camisola amarela com capuz! Desenha os ombros largos e o corpo da camisola. Adiciona o capuz \u00E0 volta do pesco\u00E7o.',
        tip: 'Dica: O capuz parece um "U" grande \u00E0 volta do pesco\u00E7o.'
      },
      {
        title: 'Bra\u00E7os e m\u00E3os',
        description: 'Desenha os dois bra\u00E7os. A m\u00E3o direita est\u00E1 perto da boca (est\u00E1 a comer!). A m\u00E3o esquerda segura um copo.',
        tip: 'Dica: As m\u00E3os podem ser simples \u2014 como luvas redondas.'
      },
      {
        title: 'Colorir \u2014 Cara e cabelo',
        description: 'Agora vamos colorir! Pinta a cara com cor de pele. O cabelo \u00E9 castanho claro/loiro.',
        tip: 'Dica: Pinta suavemente, sem carregar muito no l\u00E1pis.'
      },
      {
        title: 'Colorir \u2014 Camisola',
        description: 'Pinta a camisola de amarelo vivo! \u00C9 a cor favorita do look do Miguel.',
        tip: 'Dica: Usa amarelo forte para a camisola e cinza claro para o capuz.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona os \u00FAltimos detalhes: bochechas rosadas, olhos a brilhar e um contorno mais escuro. Parab\u00E9ns, desenhaste o Miguel!',
        tip: 'Dica: Um ponto branco pequeno em cada olho faz parecer que brilham!'
      }
    ]
  },
  {
    id: 'sandra',
    name: 'Sandra',
    photo: 'img/Sandra.jpg',
    description: 'A m\u00E3e da fam\u00EDlia!',
    color: '#AB47BC',
    steps: [
      {
        title: 'Forma da cara',
        description: 'Desenha um oval elegante no centro da folha. A Sandra tem um rosto bonito e delicado. O oval \u00E9 um pouco mais fino que o do Miguel.',
        tip: 'Dica: Faz o oval um pouco mais comprido e fino.'
      },
      {
        title: 'Olhos e sobrancelhas',
        description: 'Desenha dois olhos em forma de am\u00EAndoa. A Sandra tem olhos expressivos! Adiciona sobrancelhas finas e curvadas por cima.',
        tip: 'Dica: Olhos em am\u00EAndoa s\u00E3o como folhas deitadas.'
      },
      {
        title: 'Nariz e boca',
        description: 'O nariz \u00E9 fino e delicado. A boca tem um sorriso suave. Desenha os l\u00E1bios com uma curva simp\u00E1tica.',
        tip: 'Dica: O sorriso da Sandra \u00E9 gentil \u2014 uma curva suave.'
      },
      {
        title: 'Cabelo',
        description: 'A Sandra tem cabelo comprido e ondulado, apanhado para tr\u00E1s! Desenha o cabelo do topo, puxado para tr\u00E1s, com ondas a cair para baixo.',
        tip: 'Dica: Faz linhas onduladas longas. O cabelo est\u00E1 preso atr\u00E1s.'
      },
      {
        title: 'Orelhas e pesco\u00E7o',
        description: 'As orelhas podem estar parcialmente escondidas pelo cabelo. Desenha o pesco\u00E7o elegante com duas linhas para baixo.',
        tip: ''
      },
      {
        title: 'Casaco rosa',
        description: 'A Sandra usa um casaco rosa aberto sobre uma camisola preta. Desenha os ombros e o casaco aberto, com a camisola escura a aparecer no meio.',
        tip: 'Dica: O casaco tem gola e est\u00E1 aberto \u00E0 frente.'
      },
      {
        title: 'Bra\u00E7os e m\u00E3os',
        description: 'Desenha os bra\u00E7os \u00E0 frente. A Sandra est\u00E1 a segurar pe\u00E7as de domin\u00F3 com as duas m\u00E3os! Os dedos s\u00E3o finos e elegantes.',
        tip: 'Dica: Desenha os dedos como linhas finas e compridas.'
      },
      {
        title: 'Colorir \u2014 Cara e cabelo',
        description: 'Pinta a cara com cor de pele. O cabelo \u00E9 castanho claro com tons dourados.',
        tip: 'Dica: Usa castanho e depois adiciona riscos mais claros para os reflexos.'
      },
      {
        title: 'Colorir \u2014 Roupa',
        description: 'O casaco \u00E9 cor-de-rosa claro! A camisola por baixo \u00E9 preta. Pinta com cuidado as duas cores.',
        tip: 'Dica: Usa rosa beb\u00E9 para o casaco. A camisola pode ter letras brancas.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona os detalhes: pe\u00E7as de domin\u00F3 com pintinhas, um rel\u00F3gio no pulso, e bochechas rosadas. Parab\u00E9ns, desenhaste a Sandra!',
        tip: 'Dica: As pe\u00E7as de domin\u00F3 s\u00E3o rect\u00E2ngulos pequenos com pontos.'
      }
    ]
  },
  {
    id: 'bruno',
    name: 'Bruno',
    photo: 'img/Bruno + Miguel.jpg',
    description: 'O pai da fam\u00EDlia!',
    color: '#42A5F5',
    steps: [
      {
        title: 'Forma da cara',
        description: 'Desenha um oval para a cara do Bruno. \u00C9 uma cara mais quadrada e forte. O queixo \u00E9 mais marcado.',
        tip: 'Dica: Faz a parte de baixo do oval um pouco mais quadrada.'
      },
      {
        title: 'Olhos e sobrancelhas',
        description: 'O Bruno tem olhos escuros e atentos. Desenha dois olhos e sobrancelhas grossas e marcadas por cima.',
        tip: 'Dica: As sobrancelhas s\u00E3o mais grossas que as da Sandra.'
      },
      {
        title: 'Nariz e boca',
        description: 'Desenha um nariz recto e uma boca com express\u00E3o concentrada. O Bruno est\u00E1 focado!',
        tip: 'Dica: A boca est\u00E1 ligeiramente fechada, com ar atento.'
      },
      {
        title: 'Cabelo e barba',
        description: 'O Bruno tem cabelo muito curto, quase rapado. Desenha pequenos pontinhos no topo da cabe\u00E7a. Tem uma barba curta no queixo e lados da cara.',
        tip: 'Dica: Usa pontos pequenos para simular cabelo muito curto.'
      },
      {
        title: 'Orelhas e pesco\u00E7o',
        description: 'Desenha as orelhas nos lados da cara. O pesco\u00E7o \u00E9 mais largo \u2014 o Bruno \u00E9 forte!',
        tip: ''
      },
      {
        title: 'Casaco escuro',
        description: 'O Bruno usa um casaco escuro com detalhes laranjas! Desenha os ombros largos e o casaco com fecho ao centro. Adiciona detalhes cor de laranja nos ombros.',
        tip: 'Dica: O casaco tem um logo no peito. Desenha um pequeno rect\u00E2ngulo.'
      },
      {
        title: 'Bra\u00E7os e m\u00E3os',
        description: 'Desenha os bra\u00E7os. A m\u00E3o esquerda est\u00E1 a fazer um gesto com os dedos, como se estivesse a explicar algo ao Miguel.',
        tip: 'Dica: Os dedos est\u00E3o meio abertos, a apontar.'
      },
      {
        title: 'Colorir \u2014 Cara e cabelo',
        description: 'Pinta a cara com cor de pele. O cabelo curto e a barba s\u00E3o castanho escuro, quase preto.',
        tip: 'Dica: Usa pontos leves de castanho escuro para o cabelo e barba.'
      },
      {
        title: 'Colorir \u2014 Roupa',
        description: 'O casaco \u00E9 azul escuro/preto! Os detalhes s\u00E3o cor de laranja. Pinta com cuidado.',
        tip: 'Dica: Usa azul muito escuro e adiciona toques de laranja nos detalhes.'
      },
      {
        title: 'Detalhes finais',
        description: 'Adiciona os \u00FAltimos detalhes: logo no casaco, detalhes laranjas, e sombra suave no queixo para a barba. Parab\u00E9ns, desenhaste o Bruno!',
        tip: 'Dica: Um pouco de sombra debaixo do queixo d\u00E1 profundidade.'
      }
    ]
  }
];

// ===== APP STATE =====
let currentMember = null;
let currentStep = 0;

// ===== DOM ELEMENTS =====
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

// ===== BUILD MENU =====
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

// ===== NAVIGATION =====
function showScreen(screen) {
  [screenMenu, screenGuide, screenDone].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startDrawing(member) {
  currentMember = member;
  currentStep = 0;
  guideTitle.textContent = `Desenhar ${member.name}`;
  referencePhoto.src = member.photo;
  renderStep();
  showScreen(screenGuide);
}

function renderStep() {
  const step = currentMember.steps[currentStep];
  const total = currentMember.steps.length;

  // Update header
  stepCounter.textContent = `${currentStep + 1}/${total}`;

  // Update drawing badge
  drawingBadge.textContent = `Passo ${currentStep + 1}`;

  // Render the progressive SVG drawing
  drawingCanvas.innerHTML = '';
  const svg = renderDrawing(currentMember.id, currentStep);
  if (svg) {
    drawingCanvas.appendChild(svg);
  }

  // Update text instructions
  stepTitle.textContent = step.title;
  stepDescription.textContent = step.description;

  if (step.tip) {
    stepTip.textContent = step.tip;
    stepTip.classList.add('visible');
  } else {
    stepTip.classList.remove('visible');
  }

  // Progress bar
  progressBar.style.width = `${((currentStep + 1) / total) * 100}%`;

  // Navigation buttons
  btnPrev.disabled = currentStep === 0;
  btnNext.textContent = currentStep === total - 1 ? 'Terminei! \u{1F389}' : 'Seguinte \u2192';

  // Scroll body to top
  document.querySelector('.guide-body').scrollTop = 0;
}

function nextStep() {
  if (currentStep < currentMember.steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    showCompletion();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function showCompletion() {
  doneText.textContent = `Acabaste de desenhar o ${currentMember.name}! O teu desenho ficou lindo!`;
  donePhoto.src = currentMember.photo;
  donePhoto.alt = currentMember.name;

  // Show the final completed drawing
  doneDrawing.innerHTML = '';
  const finalSvg = renderDrawing(currentMember.id, currentMember.steps.length - 1);
  if (finalSvg) {
    // Remove pulse animation on final drawing
    finalSvg.querySelectorAll('.active-element').forEach(el => {
      el.classList.remove('active-element');
    });
    doneDrawing.appendChild(finalSvg);
  }

  showScreen(screenDone);
}

function goToMenu() {
  currentMember = null;
  currentStep = 0;
  showScreen(screenMenu);
}

// ===== EVENT LISTENERS =====
btnBack.addEventListener('click', goToMenu);
btnPrev.addEventListener('click', prevStep);
btnNext.addEventListener('click', nextStep);
btnMenu.addEventListener('click', goToMenu);

// Toggle reference photo size on tap
referenceFloat.addEventListener('click', () => {
  referenceFloat.classList.toggle('expanded');
});

// Swipe support
let touchStartX = 0;
let touchEndX = 0;

screenGuide.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

screenGuide.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 60) {
    if (diff > 0) nextStep();
    else prevStep();
  }
}, { passive: true });

// Keyboard support (desktop testing)
document.addEventListener('keydown', e => {
  if (!screenGuide.classList.contains('active')) return;
  if (e.key === 'ArrowRight') nextStep();
  if (e.key === 'ArrowLeft') prevStep();
  if (e.key === 'Escape') goToMenu();
});

// ===== INIT =====
buildMenu();
