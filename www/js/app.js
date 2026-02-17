// ===== SCENE DATA =====
// Each entry represents a full scene to sketch from a family photo.
// Ricardo Duarte = Pai (father), Sandra = Mãe (mother), Bruno Dias = Tio (uncle)
const familyMembers = [
  // ===== O MIGUEL =====
  {
    id: 'miguelbebe', name: 'Miguel Bebé', photo: 'img/miguel-bebe.jpeg',
    description: 'O Miguel quando era bebé!', color: '#FF7043', category: 'O Miguel',
    steps: [
      { title: 'Composição', description: 'Vista de cima (bird\'s eye view). Desenha linhas-guia leves: oval grande para a cabeça no topo, retângulo para o tronco, direções dos braços e pernas.', tip: 'A cabeça fica no topo. O braço direito sobe ao lado da cabeça, o esquerdo desce segurando a letra M.' },
      { title: 'Cabeça e rosto', description: 'Contorno da cabeça grande e redonda. Olhos, nariz, boca, orelhas. A testa é ampla (proporção de recém-nascido). Olhos a olhar para cima.', tip: 'Os olhos ficam no terço inferior da cabeça — bebés têm testas enormes.' },
      { title: 'Corpo e braços', description: 'Tronco curto. Braço direito levantado ao lado da cabeça. Braço esquerdo a descer sobre a barriga segurando a letra M. Casaco aberto mostrando o peito.', tip: 'Segue os contornos da foto — as linhas seguem as formas reais do corpo.' },
      { title: 'Textura da roupa', description: 'Detalhe da malha do casaco de tricot bege. Textura visível nas mangas, tronco e calções. Costuras e pregas do tecido.', tip: 'A malha cria um padrão de pequenos V — observa as sombras entre os pontos.' },
      { title: 'Pernas e botinhas', description: 'Pernas ligeiramente abertas e dobradas (pose natural de recém-nascido). Calções de malha. Botinhas de tricot nos pés com punho canelado.', tip: 'As pernas de bebé são curtas e rechonchudas, com pregas de gordura.' },
      { title: 'Fundo e decoração', description: 'Lençol com riscas verticais finas. Pompons coloridos espalhados. Canto de moldura de madeira. Pregas do tecido à volta do corpo.', tip: 'O fundo emoldura o bebé — as riscas e pompons criam equilíbrio visual.' },
      { title: 'Referência de cor', description: 'Observa as cores da foto original como referência: pele rosada, casaco bege, letra M branca, pompons coloridos, lençol branco-cinza.', tip: 'Usa lápis de cor suaves — as cores da cena são neutras com acentos vivos.' },
      { title: 'Assinatura', description: 'Assina o desenho com o nome "Miguel" em itálico elegante no fundo da composição.', tip: 'Uma assinatura discreta completa o retrato.' }
    ]
  },
  {
    id: 'batizado', name: 'Batizado', photo: 'img/batizado-miguel.jpg',
    description: 'O batizado do Miguel!', color: '#7E57C2', category: 'O Miguel',
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
    description: 'O Miguel à mesa!', color: '#FF9800', category: 'O Miguel',
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
    description: 'A Matilde!', color: '#F48FB1', category: 'O Miguel',
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
    description: 'O Miguel na aldeia!', color: '#66BB6A', category: 'O Miguel',
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

  // ===== OS PAIS =====
  {
    id: 'paisestudio', name: 'Retrato de Família', photo: 'img/pais-estudio.jpeg',
    description: 'Retrato de família no estúdio!', color: '#26A69A', category: 'Os Pais',
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
    description: 'O casamento dos pais!', color: '#78909C', category: 'Os Pais',
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
    description: 'Os pais a saltar!', color: '#42A5F5', category: 'Os Pais',
    steps: [
      { title: 'Composição', description: 'Duas figuras no ar contra céu azul puro. Ricardo à esquerda (mais alto, pernas abertas em estrela), Sandra à direita (braço livre levantado). Mãos dadas ao centro.', tip: 'A foto é de baixo para cima — as figuras parecem voar contra o céu.' },
      { title: 'Ricardo — corpo', description: 'Corpo inteiro em pose de star-jump. Pernas abertas e separadas. Braço esquerdo esticado para baixo. Mão direita segura a de Sandra. Corpo magro e atlético.', tip: 'As pernas fazem quase 180° — é uma pose muito dinâmica.' },
      { title: 'Sandra — corpo', description: 'Corpo inteiro no ar. Pernas abertas mas menos que Ricardo. Braço direito levantado alto em V. Mão esquerda segura a do Ricardo. Cabelo ruivo a voar com o vento.', tip: 'O braço levantado e o cabelo ao vento criam movimento.' },
      { title: 'Rostos e óculos', description: 'Ambos usam óculos de sol escuros. Ricardo: expressão calma/divertida. Sandra: sorriso aberto e radiante. Cabelo escuro curto dele, cabelo ruivo-castanho dela a voar.', tip: 'Os óculos de sol são retângulos arredondados escuros.' },
      { title: 'Roupa — Ricardo', description: 'T-shirt preta com texto "300" ou similar em branco/cinza no peito. Calças pretas. Ténis Nike cinza/preto com swoosh azul. Relógio ou pulseira no pulso.', tip: 'Todo de preto cria uma silhueta forte contra o azul do céu.' },
      { title: 'Roupa — Sandra', description: 'T-shirt preta simples. Jeans azuis de lavagem média (fitted). Sapatos rasos pretos (bailarinas). Relógio/pulseira no pulso.', tip: 'Os jeans azuis são o único toque de cor além do céu.' },
      { title: 'Mãos dadas e detalhes', description: 'As mãos direita dele e esquerda dela encontram-se ao centro — dedos entrelaçados. Swoosh Nike nos ténis. Texto na t-shirt.', tip: 'As mãos unidas são o ponto emocional central da imagem.' },
      { title: 'Cor — figuras', description: 'Pele clara em ambos. T-shirts pretas. Calças dele pretas. Jeans dela azul médio. Ténis cinza/preto com swoosh azul. Sapatos dela pretos. Cabelo ruivo-castanho.', tip: 'As figuras são quase silhuetas escuras contra o azul brilhante.' },
      { title: 'Cor — céu', description: 'Céu azul vivo e puro — gradiente de azul-escuro no topo a azul-claro em baixo. Sem nuvens. Completamente limpo.', tip: 'O azul do céu é vibrante e saturado — é 80% da imagem.' },
      { title: 'Retoques finais', description: 'Sombras nas roupas (dobras em voo). Cabelo da Sandra a esvoaçar. Reflexo nos óculos. Solas dos ténis visíveis. Sensação de movimento no ar.', tip: 'As dobras da roupa seguem a gravidade — puxam para baixo enquanto eles sobem.' }
    ]
  },
  {
    id: 'sandra', name: 'Mãe Sandra', photo: 'img/Sandra.jpg',
    description: 'A mãe a jogar dominó!', color: '#AB47BC', category: 'Os Pais',
    steps: [
      { title: 'Composição', description: 'Sandra sentada atrás de uma mesa com toalha axadrezada (bege/castanho). Está centrada, a olhar para baixo para as peças de dominó nas mãos.', tip: 'A toalha axadrezada cria um padrão rítmico que preenche a metade inferior.' },
      { title: 'Sandra — corpo', description: 'Busto e braços visíveis atrás da mesa. Ligeiramente inclinada para a frente. Braços à frente segurando dominós. Ombros relaxados.', tip: 'A inclinação para a frente mostra concentração no jogo.' },
      { title: 'Rosto', description: 'Rosto oval. Olhos em amêndoa a olhar para baixo (para os dominós). Sobrancelhas arqueadas. Nariz fino. Sorriso suave e concentrado.', tip: 'Os olhos virados para baixo — as pálpebras cobrem parte da íris.' },
      { title: 'Cabelo', description: 'Cabelo castanho ondulado puxado para trás com rabo-de-cavalo. Madeixas soltas emolduram o rosto. Elástico visível. Ondas suaves e naturais.', tip: 'O cabelo ondulado tem linhas curvas que fluem — não é liso nem encaracolado.' },
      { title: 'Roupa', description: 'Casaco rosa-claro aberto sobre camisola preta com texto cursivo branco ("It\'s all good"). Gola do casaco visível. Relógio no pulso.', tip: 'O rosa do casaco contrasta com o preto da camisola.' },
      { title: 'Mãos e dominós', description: 'Mãos elegantes seguram peças de dominó em leque. Dedos finos. 3-4 peças em cada mão — retângulos brancos com linha central e pontos pretos.', tip: 'Os dominós em leque: ligeiramente sobrepostos com pontos visíveis.' },
      { title: 'Mesa e objetos', description: 'Dominós jogados em cadeia na mesa. Telemóvel deitado (ecrã dourado). Comando de TV escuro. Toalha axadrezada bege/castanho cobre tudo.', tip: 'A cadeia de dominós faz uma linha serpenteante na mesa.' },
      { title: 'Cor — Sandra', description: 'Pele clara. Cabelo castanho com reflexos. Casaco rosa-bebé. Camisola preta. Olhos castanhos. Lábios rosados.', tip: 'O rosa suave do casaco é feminino e elegante.' },
      { title: 'Cor — cenário', description: 'Toalha axadrezada em bege e castanho (quadrados alternados). Dominós brancos com pontos pretos. Telemóvel dourado/cinza. Comando preto.', tip: 'Alterna quadrados claros e escuros para o padrão da toalha.' },
      { title: 'Retoques finais', description: 'Texto cursivo "It\'s all good" na camisola. Brilho nos olhos. Pontos nos dominós. Textura do axadrezado. Sombras suaves.', tip: 'O texto cursivo é fino e elegante — usa linhas ligadas e fluidas.' }
    ]
  },

  // ===== A FAMÍLIA =====
  {
    id: 'paitio', name: 'Pai, Tio e Miguel', photo: 'img/pai-tio-miguel.jpg',
    description: 'O pai, o tio e o Miguel!', color: '#FFA726', category: 'A Família',
    steps: [
      { title: 'Composição', description: 'Três figuras à volta de uma mesa com toalha laranja. Bruno (tio) à esquerda, Miguel ao centro, Ricardo (pai) à direita, inclinado para o filho. Parede com quadros atrás.', tip: 'É um triângulo de interação — o Miguel é o foco entre os dois adultos.' },
      { title: 'Bruno (Tio) — corpo', description: 'À esquerda, sentado, encostado para trás com braço na cadeira atrás do Miguel. Corpo mais largo/musculoso. Expressão relaxada a observar. T-shirt cinza clara.', tip: 'O Bruno está numa postura relaxada, de observador — mais afastado da ação.' },
      { title: 'Bruno — rosto e detalhes', description: 'Rosto arredondado, barba escura curta. Cabelo castanho-escuro curto. Olhos a observar o que acontece. T-shirt "SAGRES 0.0" com emblema alado azul-escuro no peito.', tip: 'O logo da Sagres tem asas estilizadas — um detalhe reconhecível.' },
      { title: 'Ricardo (Pai) — corpo e rosto', description: 'À direita, inclinado para a frente em direção ao Miguel. Rosto magro e angular, queixo forte. Pouca barba/barbeado. Sorriso a mostrar ovos ao filho. T-shirt escura de desporto.', tip: 'A posição inclinada do Ricardo mostra envolvimento com o filho.' },
      { title: 'Miguel ao centro', description: 'Sentado entre os dois, a olhar para baixo com concentração. Cabelo castanho-escuro curto. Camisola branca com padrão de bonecos/animais coloridos e letra "W". Mãos sobre a mesa.', tip: 'O padrão da camisola: figuras pequenas em cinza, azul, laranja espalhadas.' },
      { title: 'Mãos e ovos pintados', description: 'O Miguel tem um ovo pintado pequeno (laranja) na mão. Ricardo mostra outro ovo (azul claro) na palma estendida. Atividade de Páscoa — pintar ovos.', tip: 'Os ovos são pequenos e coloridos — pontos de cor focal.' },
      { title: 'Mesa e fundo', description: 'Toalha laranja/amarela na mesa. Parede branca atrás com quadros pequenos emoldurados (fotos de família). Cadeira de madeira visível.', tip: 'Os quadros na parede são simples retângulos com molduras castanhas.' },
      { title: 'Cor — figuras', description: 'Bruno: pele clara, t-shirt cinza-claro com logo azul. Miguel: camisola branca com padrão colorido. Ricardo: t-shirt azul-escuro/preta. Pele natural em todos.', tip: 'O cinza do Bruno, o branco do Miguel e o escuro do Ricardo criam ritmo.' },
      { title: 'Cor — cenário', description: 'Toalha laranja viva. Parede bege/creme. Molduras castanhas. Cadeira madeira mel. Ovos: laranja e azul.', tip: 'A toalha laranja é a cor mais quente e dominante da cena.' },
      { title: 'Retoques finais', description: 'Texto "SAGRES 0.0" no peito do Bruno. Padrão da camisola do Miguel. Brilho nos olhos. Detalhes dos ovos pintados. Sombras sob a mesa.', tip: 'A cena é íntima e quente — iluminação artificial interior amarelada.' }
    ]
  },
  {
    id: 'brunomiguel', name: 'Tio Bruno + Miguel', photo: 'img/Bruno + Miguel.jpg',
    description: 'O tio Bruno e o Miguel no café!', color: '#5C6BC0', category: 'A Família',
    steps: [
      { title: 'Composição', description: 'Duas figuras lado a lado: Bruno (tio) à esquerda, Miguel à direita. Mesa/balcão escuro em baixo. Terceira pessoa (tronco) ao fundo à direita. Interior de café moderno.', tip: 'O Bruno ocupa ~40% da largura, o Miguel ~35%.' },
      { title: 'Bruno — corpo e rosto', description: 'Rosto anguloso e magro. Maxilar definido. Olhos escuros a olhar para o brinquedo do Miguel. Sobrancelhas grossas. Nariz recto e proeminente.', tip: 'O Bruno está ligeiramente virado para o Miguel, a observar.' },
      { title: 'Bruno — cabelo e barba', description: 'Cabelo muito curto (rapado) — pontinhos pequenos. Barba curta/por fazer ao longo do maxilar e queixo. Entradas nas têmporas. Textura de pontos (stippling).', tip: 'Stippling: pontos individuais em vez de linhas para cabelo curto e barba.' },
      { title: 'Bruno — casaco', description: 'Casaco escuro (azul-marinho/preto) com fecho ao centro. Patches laranjas nos ombros. Logo "PESSOAL" no peito com 3 pontos coloridos (laranja, verde, azul).', tip: 'Os detalhes laranjas são a assinatura visual do casaco.' },
      { title: 'Miguel — corpo e rosto', description: 'Ao lado, mais baixo. Cara redonda infantil. Olhos a olhar para baixo (brinquedo nas mãos). Boca ligeiramente aberta. Cabelo castanho-escuro curto.', tip: 'O Miguel nesta foto é mais velho — feições menos redondas que em bebé.' },
      { title: 'Miguel — roupa e brinquedo', description: 'Camisola azul-escura/navy com "95" e "YEARS" em branco. Mãos seguram brinquedo colorido (azul e vermelho). Dedos a manipular o objeto.', tip: 'O "95" é grande e central — o detalhe que identifica a camisola.' },
      { title: 'Mesa e terceira pessoa', description: 'Balcão escuro em baixo. Bola azul na mesa. Copo branco de papel. Mão do Bruno a gesticular. Terceira pessoa ao fundo: camisola castanha, só tronco visível.', tip: 'A terceira pessoa é apenas sugerida — não precisa de detalhe facial.' },
      { title: 'Cor — figuras', description: 'Bruno: pele morena, casaco azul-escuro com laranjas. Miguel: pele clara, camisola navy. Terceira pessoa: camisola castanha.', tip: 'O contraste azul-escuro + laranja do Bruno é forte e reconhecível.' },
      { title: 'Cor — cenário', description: 'Mesa cinza-escura. Bola azul vivo. Copo branco. Brinquedo metade azul/metade vermelho. Fundo quente de café (madeira, luz amarelada).', tip: 'A bola azul é um ponto de cor intenso na mesa escura.' },
      { title: 'Retoques finais', description: 'Texto "PESSOAL" e pontos coloridos no casaco. "95" na camisola do Miguel. Reflexo na mesa. Luz ambiente de café ao fundo.', tip: 'Linhas verticais suaves ao fundo sugerem o interior do café moderno.' }
    ]
  },
  {
    id: 'padrinhos', name: 'Padrinhos', photo: 'img/padrinhos.jpg',
    description: 'Os padrinhos do Miguel!', color: '#8D6E63', category: 'A Família',
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

  // ===== OS AVÓS =====
  {
    id: 'avoesduarte', name: 'Avós Duarte', photo: 'img/avoes-duarte.jpg',
    description: 'Os avós Duarte com o Miguel bebé!', color: '#5C6BC0', category: 'Os Avós',
    steps: [
      { title: 'Composição', description: 'Três figuras sentadas. Avô ao centro com bebé Miguel ao colo. Avó à direita. Parede de pedra com janela de madeira escura atrás. Vasos de plantas à esquerda.', tip: 'O avô com o bebé é o centro da atenção.' },
      { title: 'Avô Duarte', description: 'Homem ~60-70 anos, calvo no topo com cabelo cinzento nos lados. Óculos rectangulares de armação escura. Barba/cavanhaque grisalho. Sorriso caloroso a olhar para o bebé.', tip: 'A calvície é uma forma oval clara no topo — brilhante e lisa.' },
      { title: 'Avô — roupa e mãos', description: 'Camisa de riscas azuis e brancas verticais, colarinho aberto. Relógio metálico no pulso. Mãos grandes a segurar o bebé com carinho. Postura protetora.', tip: 'As riscas verticais da camisa: linhas finas azuis sobre branco.' },
      { title: 'Avó Duarte', description: 'Mulher ~60-70 anos. Cabelo comprido cinzento-loiro puxado para trás. Óculos rectangulares. Sorriso afectuoso a olhar para o bebé. Blusa azul-marinho com decote transparente/chiffon.', tip: 'Os dois usam óculos semelhantes — é um detalhe de casal.' },
      { title: 'Avó — detalhes', description: 'Colar de pérolas (fio simples). Tecido chiffon/transparente no decote. Expressão terna virada para o neto.', tip: 'O colar de pérolas: pequenas esferas claras em fio.' },
      { title: 'Bebé Miguel', description: 'No colo do avô, virado para a câmara. ~6-8 meses. Sorriso enorme com dentes a aparecer. Cabelo fino e claro. Camisa branca e calças azul-escuro. Pés descalços.', tip: 'O sorriso do bebé é irresistível — boca aberta, olhos a brilhar.' },
      { title: 'Cenário', description: 'Parede de pedra de granito atrás. Janela/porta de madeira escura. Floreira de madeira com plantas verdes na parede à esquerda. Pedestal de madeira visível.', tip: 'A pedra e a madeira criam um ambiente rústico português.' },
      { title: 'Cor — figuras', description: 'Avô: pele clara, camisa riscas azul/branco, óculos escuros. Avó: blusa navy, pérolas, óculos, cabelo cinzento-loiro. Bebé: camisa branca, calças azuis, pele rosada.', tip: 'Tonalidades de azul unem as três figuras (riscas, blusa, calças).' },
      { title: 'Cor — cenário', description: 'Pedra cinza/bege. Madeira escura (porta/janela). Floreira em madeira mel. Plantas verdes. Fundo quente natural.', tip: 'Ambiente rústico: cores quentes e naturais.' },
      { title: 'Retoques finais', description: 'Brilho nos óculos de ambos. Textura da pedra. Veio da madeira. Rosado nas bochechas do bebé. Brilho nos olhos do bebé. Textura do chiffon.', tip: 'O brilho nos óculos são dois retângulos brancos pequenos.' }
    ]
  },
  {
    id: 'avosdias', name: 'Avós Dias', photo: 'img/avos-dias.jpg',
    description: 'Os avós Dias com o Miguel bebé!', color: '#26A69A', category: 'Os Avós',
    steps: [
      { title: 'Composição', description: 'Três figuras de pé sob toldo decorativo. Avó à esquerda com bebé ao colo. Avô à direita. Toldo com padrão vermelho/rosa. Restaurante ao ar livre ao fundo.', tip: 'O toldo colorido cria um teto decorativo acima das figuras.' },
      { title: 'Avó Dias', description: 'Mulher ~60-70 anos. Cabelo curto encaracolado castanho-cinzento. Óculos rectangulares com lente levemente escurecida. Sorriso caloroso. Top sem mangas turquesa/teal.', tip: 'O turquesa do top é a cor mais viva da avó.' },
      { title: 'Avó — detalhes', description: 'Fio de ouro fino com pendente ao pescoço. Unhas pintadas de bordeaux/vermelho escuro. A segurar o bebé contra o peito com ambos os braços.', tip: 'As unhas pintadas são um detalhe que dá personalidade.' },
      { title: 'Avô Dias', description: 'Homem ~60-70 anos. Cabelo curto cinzento/sal-e-pimenta. Sobrancelhas escuras e grossas (marca distinta). Rosto angular e magro. Expressão séria a olhar para a câmara.', tip: 'As sobrancelhas grossas e escuras são o traço mais marcante do avô.' },
      { title: 'Avô — roupa', description: 'Polo branco com colarinho. Porte magro e direito. Expressão composta e digna. Mãos ao lado do corpo.', tip: 'O polo branco é simples — foca-te no rosto distinto.' },
      { title: 'Bebé Miguel', description: 'No colo da avó (~10-12 meses). Roupa toda branca de cerimónia (batizado). A olhar para baixo, expressão calma e curiosa. Mão segura um objeto amarelo-verde.', tip: 'O bebé está vestido de branco — possível dia do batizado.' },
      { title: 'Cenário', description: 'Toldo de tecido com padrão vermelho/rosa e branco sobre eles. Candeeiro ao fundo. Pessoas em mesas atrás (sugeridas). Vegetação verde e sol ao fundo.', tip: 'O toldo cria sombra mosqueada — padrão decorativo sobre as figuras.' },
      { title: 'Cor — figuras', description: 'Avó: pele clara, top turquesa, cabelo castanho-cinza, óculos. Avô: pele bronzeada, polo branco, cabelo cinza, sobrancelhas escuras. Bebé: branco, pele rosada.', tip: 'O contraste entre a pele bronzeada do avô e o polo branco é forte.' },
      { title: 'Cor — cenário', description: 'Toldo vermelho/rosa e branco. Fundo luminoso com verde (árvores) e dourado (sol). Candeeiro bege. Cadeiras/mesas sugeridas.', tip: 'A luz é quente e dourada — dia de verão numa esplanada.' },
      { title: 'Retoques finais', description: 'Brilho nos óculos da avó. Sobrancelhas marcadas do avô. Textura do toldo. Luz solar ao fundo. Pendente de ouro no pescoço. Unhas bordeaux.', tip: 'A luz de verão cria sombras suaves e tons dourados na pele.' }
    ]
  },
  {
    id: 'bivo', name: 'Bisavô', photo: 'img/bivo.jpg',
    description: 'O bisavô a celebrar!', color: '#FF8A65', category: 'Os Avós',
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
    description: 'O tio Bruno e o avô nos passadiços!', color: '#66BB6A', category: 'Os Avós',
    steps: [
      { title: 'Composição', description: 'Selfie de duas pessoas na metade inferior. Vale montanhoso dramático na metade superior. Passadiço de madeira visível na encosta à direita. Céu azul com nuvens.', tip: 'A paisagem é tão protagonista quanto as pessoas.' },
      { title: 'Bruno (Tio)', description: 'À esquerda, mais perto da câmara (selfie). Rosto magro angular, maxilar definido. Barba curta/rente. Cabelo escuro curto. Sorriso. T-shirt branca "Quechua".', tip: 'Numa selfie, a pessoa que segura o telemóvel fica ligeiramente maior.' },
      { title: 'Avô Dias', description: 'À direita, ligeiramente atrás. Cabelo cinzento curto. Sobrancelhas escuras e grossas. Rosto angular e magro (como o Bruno). Sorriso com olhos semi-cerrados (sol). Sweatshirt azul-marinho.', tip: 'As sobrancelhas marcadas são o traço familiar — partilhado com o Bruno.' },
      { title: 'Rostos — detalhes', description: 'Bruno: olhos escuros, sobrancelhas grossas, nariz recto, barba rente com pontinhos. Avô: rugas na testa e cantos dos olhos, pele bronzeada, nariz forte.', tip: 'A semelhança familiar é visível — mesma estrutura do rosto.' },
      { title: 'Roupa', description: 'Bruno: t-shirt branca de desporto com logo "Quechua" (marca de caminhada) no ombro/peito. Avô: sweatshirt azul-marinho/navy simples.', tip: 'A roupa é prática de caminhada — simples e funcional.' },
      { title: 'Paisagem — montanhas', description: 'Vale profundo com encostas verdes. Rochas e vegetação mediterrânica (mato baixo). Montanhas em ambos os lados. Caminho/rio no fundo do vale.', tip: 'A perspetiva aérea: as montanhas mais longe são mais claras e azuladas.' },
      { title: 'Passadiço e detalhes', description: 'Passadiço elevado de madeira cruza a encosta direita — estrutura de tábuas e pilares. Céu azul com nuvens brancas. Rochedos grandes na encosta.', tip: 'O passadiço é uma linha horizontal que corta a montanha — madeira clara.' },
      { title: 'Cor — figuras', description: 'Bruno: pele clara, t-shirt branca, cabelo/barba escuros. Avô: pele bronzeada, sweatshirt navy, cabelo cinzento.', tip: 'O branco da t-shirt destaca-se contra a paisagem verde.' },
      { title: 'Cor — paisagem', description: 'Verde variado nas encostas (escuro perto, claro longe). Castanho das rochas. Madeira clara do passadiço. Céu azul com nuvens brancas. Rio/vale em tons profundos.', tip: 'Usa perspetiva atmosférica: longe = mais claro e azulado.' },
      { title: 'Retoques finais', description: 'Brilho nos olhos. Textura das rochas. Vegetação detalhada na encosta. Estrutura do passadiço. Nuvens com volume. Sombras na montanha.', tip: 'A paisagem portuguesa é verde, rochosa e dramática — captura essa energia.' }
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

function buildMenu() {
  familyGrid.innerHTML = '';
  const completed = getCompletedScenes();
  let lastCat = '';
  familyMembers.forEach(member => {
    if (member.category !== lastCat) {
      lastCat = member.category;
      const hdr = document.createElement('div');
      hdr.className = 'category-header';
      hdr.textContent = member.category;
      familyGrid.appendChild(hdr);
    }
    const isDone = completed.includes(member.id);
    const card = document.createElement('div');
    card.className = 'family-card' + (isDone ? ' completed' : '');
    card.style.borderColor = member.color;
    card.innerHTML = `
      <img class="family-card-photo" src="${member.photo}" alt="${member.name}">
      <div class="family-card-info">
        <div class="family-card-name">${member.name}</div>
        <div class="family-card-desc">${member.description}</div>
      </div>
      ${isDone ? '<div class="family-card-check" title="Desmarcar"></div>' : ''}
      <div class="family-card-arrow">\u25B6</div>
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
