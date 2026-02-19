// ===== SCENE DATA =====
// Each entry represents a full scene to sketch from a family photo.
// Ricardo Duarte = Pai (father), Sandra = Mãe (mother), Bruno Dias = Tio (uncle)
const familyMembers = [
  // ===== O MIGUEL =====
  {
    id: 'miguelbebe', name: 'Miguel Bebé', photo: 'img/miguel-bebe.jpeg',
    description: 'O Miguel quando era bebé!', color: '#FF7043', category: 'O Miguel', difficulty: 5,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos tracados da zona central: tronco, bracos, objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Detalhes finos', description: 'Textura e detalhes adicionais: roupa, sombras, padroes.', tip: 'Usa linhas finas e leves para os detalhes de textura.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Observa as cores e sombras da foto para colorir o desenho.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'batizado', name: 'Batizado', photo: 'img/batizado-miguel.jpg',
    description: 'O batizado do Miguel!', color: '#7E57C2', category: 'O Miguel', difficulty: 5,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos tracados da zona central: tronco, bracos, objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Detalhes finos', description: 'Textura e detalhes adicionais: roupa, sombras, padroes.', tip: 'Usa linhas finas e leves para os detalhes de textura.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Observa as cores e sombras da foto para colorir o desenho.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'miguel', name: 'Miguel a Comer', photo: 'img/Miguel.jpg',
    description: 'O Miguel à mesa!', color: '#FF9800', category: 'O Miguel', difficulty: 5,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos tracados da zona central: tronco, bracos, objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Detalhes finos', description: 'Textura e detalhes adicionais: roupa, sombras, padroes.', tip: 'Usa linhas finas e leves para os detalhes de textura.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Observa as cores e sombras da foto para colorir o desenho.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'matilde', name: 'Matilde', photo: 'img/matilde.jpg',
    description: 'A Matilde!', color: '#F48FB1', category: 'O Miguel', difficulty: 5,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos tracados da zona central: tronco, bracos, objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Detalhes finos', description: 'Textura e detalhes adicionais: roupa, sombras, padroes.', tip: 'Usa linhas finas e leves para os detalhes de textura.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Observa as cores e sombras da foto para colorir o desenho.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'mdd', name: 'Miguel na Aldeia', photo: 'img/mdd.jpeg',
    description: 'O Miguel na aldeia!', color: '#66BB6A', category: 'O Miguel', difficulty: 2,
    steps: [
      { title: 'Composição', description: 'Miguel à esquerda/centro, debruçado sobre um muro de pedra com musgo. Paisagem rural ao fundo com casas de pedra. Pai parcialmente visível à direita.', tip: 'O muro de pedra cruza a imagem na diagonal — cria profundidade.' },
      { title: 'O Miguel — corpo', description: 'Menino (~3-4 anos) debruçado sobre o muro com os braços apoiados. Corpo inclinado para a frente. Olha para a câmara com expressão curiosa e simpática.', tip: 'A posição debruçada dá dinamismo — o corpo faz uma diagonal.' },
      { title: 'Rosto', description: 'Cara redonda infantil. Olhos escuros e expressivos, ligeiramente abertos. Sorriso suave com boca entreaberta. Bochechas rosadas do frio.', tip: 'A expressão é de curiosidade — sobrancelhas ligeiramente levantadas.' },
      { title: 'Cabelo e casaco', description: 'Cabelo castanho-escuro curto. Casaco azul-marinho acolchoado (puffy jacket) com capuz que tem forro laranja/camel. Emblema circular no peito.', tip: 'O casaco acolchoado tem costuras horizontais que criam "tubos" de tecido.' },
      { title: 'Mãos e brinquedo', description: 'As duas mãos seguram um pequeno brinquedo verde (dinossauro/dragão). Os dedos são pequenos e gordinhos. O brinquedo é verde-turquesa vivo.', tip: 'O brinquedo verde contrasta com o azul do casaco.' },
      { title: 'Muro e paisagem', description: 'Muro de pedra de granito com musgo verde/líquenes. Atrás: caminho de terra, casas de pedra da aldeia, construção metálica (armazém), árvores despidas.', tip: 'O granito tem tons de cinza e bege — pedras irregulares com juntas.' },
      { title: 'Pai ao fundo', description: 'À direita, o pai Ricardo parcialmente visível: barba escura, camisa branca, postura relaxada. Árvores sem folhas e céu nublado de inverno.', tip: 'O pai é secundário — apenas uma silhueta suave à direita.' },
      { title: 'Cor — Miguel', description: 'Pele clara com bochechas rosadas. Cabelo castanho-escuro. Casaco azul-marinho. Forro do capuz laranja/camel. Brinquedo verde-turquesa.', tip: 'O azul do casaco e o verde do brinquedo são as cores dominantes.' },
      { title: 'Cor — cenário', description: 'Pedra em cinza/bege com musgo verde. Relva verde. Caminho de terra em castanho. Céu nublado cinza-claro. Casas em pedra bege.', tip: 'A paisagem rural é suave e dessaturada — inverno português.' },
      { title: 'Retoques finais', description: 'Brilho nos olhos. Textura do musgo no muro. Costuras do casaco acolchoado. Detalhe do brinquedo. Sombra sob os braços no muro.', tip: 'O musgo é feito com pequenos pontos e manchas verdes irregulares.' }
    ]
  },
  {
    id: 'mddeamigos', name: 'MDD e Amigos', photo: 'img/mdd-amigos.png',
    description: 'O Miguel e os amigos peluches!', color: '#4DB6AC', category: 'O Miguel', difficulty: 3,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos da zona central: tronco, bracos e objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos da zona inferior: pernas, mesa, chao e fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Regioes de cor', description: 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', tip: 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Usa poucas cores - simplifica para 5-6 tons principais.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'mddsprunkies', name: 'MDD e Sprunkies', photo: 'img/mdd-sprunkies.jpg',
    description: 'O Miguel e os Sprunkies!', color: '#7CB342', category: 'O Miguel', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },

  // ===== OS PAIS =====
  {
    id: 'paisestudio', name: 'Retrato de Família', photo: 'img/pais-estudio.jpeg',
    description: 'Retrato de família no estúdio!', color: '#26A69A', category: 'Os Pais', difficulty: 2,
    steps: [
      { title: 'Composição', description: 'Três figuras em pirâmide: Sandra ao centro com Miguel ao colo (esquerda), Ricardo atrás abraçando Sandra. Fundo verde com pampas grass dos lados.', tip: 'A composição em triângulo é clássica para retratos de família.' },
      { title: 'Sandra — corpo e rosto', description: 'Ao centro, virada para a câmara. Rosto oval elegante. Sorriso aberto e radiante. Cabelo castanho-escuro liso com risca ao meio, até aos ombros. Gola alta verde-escuro/teal.', tip: 'Sandra é o ponto central — o seu sorriso é o foco da imagem.' },
      { title: 'Sandra — detalhes', description: 'Colar dourado de elos grandes (chain link) à volta do pescoço. Brincos dourados pendentes. Sobrancelhas bem definidas. Olhos castanhos luminosos.', tip: 'O colar dourado é um detalhe icónico — elos ovais interligados.' },
      { title: 'Ricardo — rosto e corpo', description: 'Atrás da Sandra, mais alto. Cabelo castanho curto. Barba curta aparada. Sorriso caloroso. Camisola cinza-azulada com fecho de correr parcial (quarter-zip).', tip: 'O Ricardo aparece em segundo plano — a cabeça acima da da Sandra.' },
      { title: 'Miguel — no colo', description: 'À esquerda, no colo da mãe. Cabelo castanho-escuro curto. Sorriso enorme e aberto mostrando dentes de leite. Camisa às riscas xadrez (bege, castanho, branco).', tip: 'O Miguel tem o sorriso mais aberto — pura alegria infantil.' },
      { title: 'Pampas grass e fundo', description: 'Fundo verde-esmeralda (parede). Dos dois lados, arranjos altos de pampas grass (plumas bege/creme). Bolas decorativas verdes e folhas douradas entre as plumas.', tip: 'As plumas de pampas são linhas finas que irradiam para cima — suaves e orgânicas.' },
      { title: 'Detalhes de roupa', description: 'Gola alta teal da Sandra com tecido fino. Quarter-zip cinza do Ricardo com textura de fleece. Xadrez da camisa do Miguel com linhas cruzadas.', tip: 'O padrão xadrez: linhas horizontais + verticais em bege e castanho.' },
      { title: 'Cor — figuras', description: 'Sandra: pele clara, cabelo castanho, top teal escuro, colar dourado. Ricardo: pele clara, cabelo/barba castanho, camisola cinza-azul. Miguel: pele clara, camisa xadrez bege.', tip: 'O teal da Sandra e o cinza do Ricardo enquadram o xadrez quente do Miguel.' },
      { title: 'Cor — cenário', description: 'Parede verde-esmeralda. Pampas em bege/creme. Folhas em dourado/cobre. Bolas decorativas em verde-teal. Almofada/assento creme à esquerda.', tip: 'O verde do fundo harmoniza com o teal da gola da Sandra.' },
      { title: 'Retoques finais', description: 'Brilho nos olhos dos três. Brilho metálico no colar e brincos. Textura suave das plumas. Sombra sob o queixo. Tons quentes na pele.', tip: 'A iluminação de estúdio é suave e uniforme — sem sombras duras.' }
    ]
  },
  {
    id: 'casamento', name: 'Casamento', photo: 'img/casamento-pais.jpg',
    description: 'O casamento dos pais!', color: '#78909C', category: 'Os Pais', difficulty: 2,
    steps: [
      { title: 'Composição', description: 'Cena a preto e branco. Ricardo e Sandra sentados num banco ao centro da igreja de pedra. Convidados em bancos atrás. Paredes de granito, teto de madeira.', tip: 'A foto é a preto e branco — foca-te nos valores tonais (claro/escuro).' },
      { title: 'Ricardo — noivo', description: 'Sentado à esquerda do banco. Fato escuro formal, camisa branca, gravata clara com padrão subtil. Cabelo penteado para trás. Postura erguida, a olhar para a frente.', tip: 'O fato escuro contrasta com a camisa branca — define a silhueta.' },
      { title: 'Sandra — noiva', description: 'Sentada à direita, junto ao Ricardo. Vestido de noiva branco sem alças (strapless), corpete justo e saia de tule volumosa que se espalha no chão. Cabelo apanhado em coque ondulado.', tip: 'A saia de tule é uma massa de camadas suaves — usa traços leves e sobrepostos.' },
      { title: 'Rostos e expressão', description: 'Ricardo: expressão séria e composta, maxilar definido, olhar frontal. Sandra: sorriso suave e emocionado, a olhar ligeiramente para o Ricardo. Flores/acessório no cabelo.', tip: 'Os rostos são secundários nesta composição — a arquitetura domina.' },
      { title: 'Banco e primeiro plano', description: 'Banco moderno escuro e cúbico onde se sentam. Chão de pedra com textura. Uma senhora idosa sentada num banco de madeira à esquerda.', tip: 'O banco moderno contrasta com a igreja antiga — detalhe interessante.' },
      { title: 'Igreja — paredes e arcos', description: 'Paredes de blocos de granito irregulares. Arco de pedra à direita. Colunas. Candeeiro redondo na parede esquerda. Vigas de madeira escura no teto.', tip: 'O granito: retângulos irregulares em tons de cinza com juntas escuras.' },
      { title: 'Convidados', description: 'Filas de convidados sentados em bancos de madeira atrás dos noivos. Silhuetas suaves — não é preciso detalhar cada pessoa. Uma jovem de pé à direita contra a parede.', tip: 'Os convidados são sugestões — manchas de claro e escuro nos bancos.' },
      { title: 'Tons — primeiro plano', description: 'Em cinzentos: fato do noivo em cinza-escuro. Vestido da noiva em branco puro. Pele em cinza-médio. Banco em preto. Chão em cinza-claro.', tip: 'A chave é o contraste: o branco da noiva contra o escuro do ambiente.' },
      { title: 'Tons — cenário', description: 'Paredes em cinzas variados (granito). Madeira do teto em cinza-escuro. Candeeiro com halo claro. Convidados em tons médios.', tip: 'Usa toda a escala de cinzentos — do branco puro ao preto profundo.' },
      { title: 'Retoques finais', description: 'Halo de luz do candeeiro. Textura do tule (linhas finíssimas). Textura do granito. Sombras projetadas no chão. Reflexos suaves.', tip: 'O ambiente é dramático e solene — as sombras são profundas e os brancos brilhantes.' }
    ]
  },
  {
    id: 'pais', name: 'Pais a Saltar', photo: 'img/pais.jpg',
    description: 'Os pais a saltar!', color: '#42A5F5', category: 'Os Pais', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'sandra', name: 'Mãe Sandra', photo: 'img/Sandra.jpg',
    description: 'A mãe a jogar dominó!', color: '#AB47BC', category: 'Os Pais', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos da zona central: tronco, bracos e objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos da zona inferior: pernas, mesa, chao e fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Regioes de cor', description: 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', tip: 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Usa poucas cores - simplifica para 5-6 tons principais.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },

  // ===== A FAMÍLIA =====
  {
    id: 'paitio', name: 'Pai, Tio e Miguel', photo: 'img/pai-tio-miguel.jpg',
    description: 'O pai, o tio e o Miguel!', color: '#FFA726', category: 'A Família', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'brunomiguel', name: 'Tio Bruno + Miguel', photo: 'img/Bruno + Miguel.jpg',
    description: 'O tio Bruno e o Miguel no café!', color: '#5C6BC0', category: 'A Família', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Zona superior em alto contraste preto e branco: cabecas, rostos e cabelo com sombras marcadas.', tip: 'Pensa em preto e branco - sem tons cinzentos, so luz e sombra.' },
      { title: 'Parte central', description: 'Zona central em contraste forte: tronco, bracos e objectos com areas escuras bem definidas.', tip: 'As areas de sombra sao completamente pretas - sem meios tons.' },
      { title: 'Parte inferior', description: 'Zona inferior em contraste: pernas, mesa, chao com texturas de luz e sombra.', tip: 'O efeito de gravura cria padroes interessantes nas texturas.' },
      { title: 'Sombras e texturas', description: 'Camada adicional de sombras e texturas que dao profundidade ao estilo gravura.', tip: 'Usa hachurado (linhas cruzadas) para simular as sombras.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Mesmo a preto e branco, observa onde a luz incide na foto.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'padrinhos', name: 'Padrinhos', photo: 'img/padrinhos.jpg',
    description: 'Os padrinhos do Miguel!', color: '#8D6E63', category: 'A Família', difficulty: 2,
    steps: [
      { title: 'Composição', description: 'Três figuras de pé contra parede de pedra de granito. Madrinha à esquerda com bebé Miguel ao colo. Padrinho à direita a apontar para a câmara. Janela branca atrás.', tip: 'É uma composição vertical — figuras de corpo inteiro.' },
      { title: 'Madrinha', description: 'Mulher com cabelo castanho-escuro longo e liso. Sorriso aberto, a olhar para o bebé. Vestido navy/preto comprido sem mangas. Pulseira preta no pulso.', tip: 'O cabelo comprido cai pelos ombros — linhas longas e lisas.' },
      { title: 'Bebé Miguel', description: 'Ao colo da madrinha (~8-10 meses). Roupa branca de batizado (camisa e calças). Sapatos brancos. Sorriso de bebé. Pele clara.', tip: 'O bebé branco destaca-se contra o vestido escuro da madrinha.' },
      { title: 'Padrinho', description: 'Homem com óculos, cabelo curto escuro, barba/cavanhaque. A apontar com a mão direita para a câmara num gesto divertido. Camisa branca com micro-padrão.', tip: 'O gesto de apontar é divertido e dinâmico — o dedo esticado para a frente.' },
      { title: 'Roupa do padrinho', description: 'Camisa branca com padrão subtil (pequenos pontos). Cinto castanho de couro. Calças escuras. Relógio no pulso. Postura confiante.', tip: 'A camisa branca faz par com a roupa branca do bebé.' },
      { title: 'Parede de pedra', description: 'Parede de granito em tons dourados/bege com pedras irregulares. Janela com moldura branca atrás deles. Textura áspera da pedra.', tip: 'O granito: formas irregulares em tons de bege, dourado e cinza.' },
      { title: 'Detalhes da cena', description: 'Mão da madrinha a segurar o bebé com firmeza. Pé do bebé visível. Sombra projetada na parede de pedra.', tip: 'A sombra na parede dá profundidade e hora do dia (tarde).' },
      { title: 'Cor — figuras', description: 'Madrinha: pele clara, vestido navy, cabelo castanho-escuro. Bebé: roupa toda branca, pele rosada. Padrinho: camisa branca, calças escuras, óculos.', tip: 'O contraste branco (bebé+camisa) e escuro (vestido+calças) estrutura a cena.' },
      { title: 'Cor — cenário', description: 'Pedra dourada/bege quente. Janela branca. Céu/luz natural à volta. Cinto castanho. Pulseira preta.', tip: 'A pedra dourada de granito é quente e natural.' },
      { title: 'Retoques finais', description: 'Brilho nos óculos do padrinho. Textura da pedra. Detalhes do bordado na roupa do bebé. Sorriso do bebé. Movimento no cabelo da madrinha.', tip: 'Os óculos têm um brilho rectangular — reflexo da luz.' }
    ]
  },
  {
    id: 'segundafamilia', name: 'Segunda Família', photo: 'img/segunda-familia.jpeg',
    description: 'O Miguel com os peluches e o app!', color: '#EF5350', category: 'A Família', difficulty: 3,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos tracados da zona superior da imagem: cabeca(s), rosto(s), cabelo.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos tracados da zona central: tronco, bracos, objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos tracados da zona inferior: pernas, mesa, chao, fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Observa as cores e sombras da foto para colorir o desenho.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'diasfamily', name: 'Família Dias', photo: 'img/dias-family.png',
    description: 'A família Dias junta!', color: '#FF7043', category: 'A Família', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'dias66', name: 'Família Dias 66', photo: 'img/dias-family-2.png',
    description: 'A família Dias com o bebé!', color: '#8D6E63', category: 'A Família', difficulty: 3,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Zona superior em alto contraste preto e branco: cabecas, rostos e cabelo com sombras marcadas.', tip: 'Pensa em preto e branco - sem tons cinzentos, so luz e sombra.' },
      { title: 'Parte central', description: 'Zona central em contraste forte: tronco, bracos e objectos com areas escuras bem definidas.', tip: 'As areas de sombra sao completamente pretas - sem meios tons.' },
      { title: 'Parte inferior', description: 'Zona inferior em contraste: pernas, mesa, chao com texturas de luz e sombra.', tip: 'O efeito de gravura cria padroes interessantes nas texturas.' },
      { title: 'Sombras e texturas', description: 'Camada adicional de sombras e texturas que dao profundidade ao estilo gravura.', tip: 'Usa hachurado (linhas cruzadas) para simular as sombras.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Mesmo a preto e branco, observa onde a luz incide na foto.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'espedrada', name: 'Espedrada', photo: 'img/espedrada.jpg',
    description: 'Todos juntos na Espedrada!', color: '#26C6DA', category: 'A Família', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'primosespedrada', name: 'Primos Espedrada', photo: 'img/primos-espedrada.jpg',
    description: 'Os primos na Espedrada!', color: '#EC407A', category: 'A Família', difficulty: 3,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos da zona central: tronco, bracos e objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos da zona inferior: pernas, mesa, chao e fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Regioes de cor', description: 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', tip: 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Usa poucas cores - simplifica para 5-6 tons principais.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },

  // ===== OS AVÓS =====
  {
    id: 'avoesduarte', name: 'Avós Duarte', photo: 'img/avoes-duarte.jpg',
    description: 'Os avós Duarte com o Miguel bebé!', color: '#5C6BC0', category: 'Os Avós', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos da zona central: tronco, bracos e objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos da zona inferior: pernas, mesa, chao e fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Regioes de cor', description: 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', tip: 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Usa poucas cores - simplifica para 5-6 tons principais.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'avosdias', name: 'Avós Dias', photo: 'img/avos-dias.jpg',
    description: 'Os avós Dias com o Miguel bebé!', color: '#26A69A', category: 'Os Avós', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Zona superior em alto contraste preto e branco: cabecas, rostos e cabelo com sombras marcadas.', tip: 'Pensa em preto e branco - sem tons cinzentos, so luz e sombra.' },
      { title: 'Parte central', description: 'Zona central em contraste forte: tronco, bracos e objectos com areas escuras bem definidas.', tip: 'As areas de sombra sao completamente pretas - sem meios tons.' },
      { title: 'Parte inferior', description: 'Zona inferior em contraste: pernas, mesa, chao com texturas de luz e sombra.', tip: 'O efeito de gravura cria padroes interessantes nas texturas.' },
      { title: 'Sombras e texturas', description: 'Camada adicional de sombras e texturas que dao profundidade ao estilo gravura.', tip: 'Usa hachurado (linhas cruzadas) para simular as sombras.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Mesmo a preto e branco, observa onde a luz incide na foto.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'bivo', name: 'Bisavô', photo: 'img/bivo.jpg',
    description: 'O bisavô a celebrar!', color: '#FF8A65', category: 'Os Avós', difficulty: 2,
    steps: [
      { title: 'Composição', description: 'Um senhor idoso sentado a uma mesa de restaurante com toalha laranja. Segura uma garrafa de água. Balões dourados atrás. Pratos e copos na mesa.', tip: 'A toalha laranja vibrante domina a metade inferior da cena.' },
      { title: 'Bisavô — rosto', description: 'Homem muito idoso (~85-90 anos). Calvo com cabelo branco finíssimo nos lados. Sorriso enorme e genuíno, boca aberta mostrando alguns dentes. Rugas profundas de alegria.', tip: 'As rugas contam uma história — cada linha é importante.' },
      { title: 'Rosto — detalhes', description: 'Olhos pequenos e brilhantes entre rugas. Maçãs do rosto proeminentes. Manchas de idade na testa e mãos. Nariz grande e anguloso. Orelhas grandes.', tip: 'O sorriso aberto e os olhos a brilhar transmitem pura felicidade.' },
      { title: 'Corpo e roupa', description: 'Camisa bege/creme clara com colarinho, aberta no pescoço. Ombros magros. Braço direito levantado segurando a garrafa. Mão esquerda na mesa perto do prato.', tip: 'A camisa é simples e elegante — um senhor que se arranjou para a festa.' },
      { title: 'Garrafa de água', description: 'Garrafa plástica grande de água com rótulo azul (marca portuguesa). A segurar com a mão direita, ligeiramente levantada como um brinde.', tip: 'O gesto de levantar a garrafa sugere um brinde — celebração.' },
      { title: 'Mesa — objetos', description: 'Prato branco grande à frente. Copo de vinho vazio. Talheres (faca e garfo). Guardanapo ou cartão decorativo. Toalha laranja com padrão barroco em espiral.', tip: 'O padrão da toalha: espirais e arabescos em laranja.' },
      { title: 'Cenário', description: 'Cadeiras de madeira com encosto em escada. Balões dourados no fundo (festa). Extintor na parede (detalhe realista). Porta/abertura para exterior à direita.', tip: 'Os balões dourados indicam celebração — aniversário ou festa de família.' },
      { title: 'Cor — bisavô', description: 'Pele envelhecida com manchas. Camisa bege-creme. Pouco cabelo branco. Dentes em tom natural.', tip: 'A pele idosa tem mais variação tonal — manchas mais escuras, áreas mais claras.' },
      { title: 'Cor — cenário', description: 'Toalha laranja vibrante com padrão. Cadeiras castanho-mel. Balões dourados. Prato branco. Copo transparente. Parede branca/creme.', tip: 'O laranja da toalha e o dourado dos balões criam um ambiente festivo.' },
      { title: 'Retoques finais', description: 'Brilho nos olhos (felicidade). Textura do padrão barroco na toalha. Reflexo no copo. Transparência da garrafa. Rugas detalhadas. Balões com brilho.', tip: 'Este retrato é sobre alegria — o sorriso genuíno é tudo.' }
    ]
  },
  {
    id: 'tioavo', name: 'Tio + Avô', photo: 'img/tio-avo.jpg',
    description: 'O tio Bruno e o avô nos passadiços!', color: '#66BB6A', category: 'Os Avós', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Contornos superiores', description: 'Contornos fortes e simplificados da zona superior: cabecas, rostos, cabelo - estilo banda desenhada.', tip: 'Usa tracos grossos e decisivos, como numa banda desenhada.' },
      { title: 'Contornos centrais', description: 'Contornos fortes da zona central: tronco, bracos, maos e objectos - linhas limpas e expressivas.', tip: 'Simplifica as formas - menos detalhe, mais expressao.' },
      { title: 'Contornos inferiores', description: 'Contornos fortes da zona inferior: pernas, mesa, chao e fundo.', tip: 'Mantem as linhas grossas e confiantes ate ao final.' },
      { title: 'Expressao e detalhe', description: 'Detalhes adicionais que dao expressao: olhos, bocas, pregas de roupa, pequenos objectos.', tip: 'Estes detalhes finos dao personalidade ao estilo cartoon.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Cores vivas e saturadas combinam bem com o estilo cartoon.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'avosmdd', name: 'Avós e Miguel', photo: 'img/avos-mdd.png',
    description: 'Os avós e o Miguel na aldeia!', color: '#FFA726', category: 'Os Avós', difficulty: 3,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Contornos da zona superior: cabecas, rostos e cabelo com linhas claras e definidas.', tip: 'Segue os contornos da foto - as linhas seguem as formas reais.' },
      { title: 'Parte central', description: 'Contornos da zona central: tronco, bracos e objectos.', tip: 'Mantem a pressao do lapis constante para linhas uniformes.' },
      { title: 'Parte inferior', description: 'Contornos da zona inferior: pernas, mesa, chao e fundo.', tip: 'As linhas mais distantes podem ser mais leves.' },
      { title: 'Regioes de cor', description: 'Limites entre as zonas de cor: areas planas de cor separadas por linhas suaves, estilo poster.', tip: 'Pinta cada regiao com uma cor uniforme - sem degradados.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Usa poucas cores - simplifica para 5-6 tons principais.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'espedradaprimos', name: 'Bisavô e Netos', photo: 'img/espedrada-primos.jpg',
    description: 'O bisavô com os netos!', color: '#AB47BC', category: 'Os Avós', difficulty: 4,
    steps: [
      { title: 'Composicao', description: 'Linhas-guia de composicao: centro vertical, tercos horizontais e moldura.', tip: 'Desenha com linhas muito leves - sao apenas referencias.' },
      { title: 'Parte superior', description: 'Zona superior em alto contraste preto e branco: cabecas, rostos e cabelo com sombras marcadas.', tip: 'Pensa em preto e branco - sem tons cinzentos, so luz e sombra.' },
      { title: 'Parte central', description: 'Zona central em contraste forte: tronco, bracos e objectos com areas escuras bem definidas.', tip: 'As areas de sombra sao completamente pretas - sem meios tons.' },
      { title: 'Parte inferior', description: 'Zona inferior em contraste: pernas, mesa, chao com texturas de luz e sombra.', tip: 'O efeito de gravura cria padroes interessantes nas texturas.' },
      { title: 'Sombras e texturas', description: 'Camada adicional de sombras e texturas que dao profundidade ao estilo gravura.', tip: 'Usa hachurado (linhas cruzadas) para simular as sombras.' },
      { title: 'Referencia de cor', description: 'A foto original como referencia de cores e tons.', tip: 'Mesmo a preto e branco, observa onde a luz incide na foto.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome no fundo da composicao.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  }
];

// ===== APP STATE =====
let currentMember = null;
let currentStep = 0;

// ===== COMPLETION TRACKING =====
function getCompletedScenes() {
  try { return JSON.parse(localStorage.getItem('completedScenes') || '[]'); }
  catch { return []; }
}
function markSceneCompleted(id) {
  const completed = getCompletedScenes();
  if (!completed.includes(id)) { completed.push(id); localStorage.setItem('completedScenes', JSON.stringify(completed)); }
}
function unmarkSceneCompleted(id) {
  const completed = getCompletedScenes().filter(s => s !== id);
  localStorage.setItem('completedScenes', JSON.stringify(completed));
}

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

// Arrow style mapping: scene_id -> CSS class for arrow color
const ARROW_STYLES = {
  // 5-star Canny: gold
  miguelbebe: 'gold', batizado: 'gold', miguel: 'gold', matilde: 'gold',
  // Cartoon: coral
  pais: 'cartoon', paitio: 'cartoon', tioavo: 'cartoon',
  diasfamily: 'cartoon', espedrada: 'cartoon', mddsprunkies: 'cartoon',
  // Adaptive threshold: sepia
  brunomiguel: 'adaptive', avosdias: 'adaptive',
  dias66: 'adaptive', espedradaprimos: 'adaptive',
  // Posterize: purple
  sandra: 'posterize', avoesduarte: 'posterize',
  avosmdd: 'posterize', mddeamigos: 'posterize', primosespedrada: 'posterize',
  // Simple Canny: teal
  segundafamilia: 'simple',
};

function buildCategoryNav() {
  const nav = document.getElementById('category-nav');
  nav.innerHTML = '';
  const cats = [...new Set(familyMembers.map(m => m.category))];
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-nav-btn';
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      const target = document.getElementById('cat-' + cat.replace(/\s/g, '-'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.querySelectorAll('.category-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    nav.appendChild(btn);
  });
}

function buildMenu() {
  familyGrid.innerHTML = '';
  const completed = getCompletedScenes();
  let lastCat = '';
  familyMembers.forEach(member => {
    if (member.category !== lastCat) {
      lastCat = member.category;
      const hdr = document.createElement('div');
      hdr.className = 'category-header';
      hdr.id = 'cat-' + member.category.replace(/\s/g, '-');
      hdr.textContent = member.category;
      familyGrid.appendChild(hdr);
    }
    const isDone = completed.includes(member.id);
    const card = document.createElement('div');
    card.className = 'family-card' + (isDone ? ' completed' : '');
    card.style.borderColor = member.color;
    const stars = '\u2605'.repeat(member.difficulty || 0) + '\u2606'.repeat(5 - (member.difficulty || 0));
    card.innerHTML = `
      <img class="family-card-photo" src="${member.photo}" alt="${member.name}">
      <div class="family-card-info">
        <div class="family-card-name">${member.name}</div>
        <div class="family-card-desc">${member.description}</div>
        <div class="family-card-stars">${stars}</div>
      </div>
      ${isDone ? '<div class="family-card-check" title="Desmarcar"></div>' : ''}
      <div class="family-card-arrow${ARROW_STYLES[member.id] ? ' ' + ARROW_STYLES[member.id] : ''}">\u25B6</div>
    `;
    if (isDone) {
      card.querySelector('.family-card-check').addEventListener('click', (e) => {
        e.stopPropagation();
        unmarkSceneCompleted(member.id);
        buildMenu();
      });
    }
    card.addEventListener('click', () => startDrawing(member));
    familyGrid.appendChild(card);
  });
  // Update overall progress bar
  const total = familyMembers.length;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('overall-progress-bar').style.width = pct + '%';
  document.getElementById('overall-progress-label').textContent = `${done}/${total} desenhos completos (${pct}%)`;
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
  if (svg) {
    drawingCanvas.appendChild(svg);
    drawingCanvas.classList.toggle('landscape', svg.dataset.landscape === '1');
  }

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
  markSceneCompleted(currentMember.id);
  buildMenu();
  doneText.textContent = `Acabaste o desenho "${currentMember.name}"! Ficou espetacular!`;
  donePhoto.src = currentMember.photo;
  donePhoto.alt = currentMember.name;
  doneDrawing.innerHTML = '';
  const finalSvg = renderDrawing(currentMember.id, currentMember.steps.length - 1);
  if (finalSvg) {
    finalSvg.querySelectorAll('.active-element').forEach(el => el.classList.remove('active-element'));
    doneDrawing.appendChild(finalSvg);
    if (finalSvg.dataset.landscape === '1') doneDrawing.classList.add('landscape');
    else doneDrawing.classList.remove('landscape');
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

buildCategoryNav();
buildMenu();
