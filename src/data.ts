export type Review = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

export type Spot = {
  id: string;
  name: string;
  category: string;
  district: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
  mapQuery: string;
  coords: string;
  reviews: Review[];
};

export const spots: Spot[] = [
  {
    id: "cachoeiras-lidice",
    name: "Cachoeiras de Lídice",
    category: "Cachoeira",
    district: "Lídice",
    short:
      "Quedas d'água deslumbrantes como a das Três Quedas e Sebastião Marinho, cercadas por Mata Atlântica preservada.",
    description:
      "O distrito de Lídice abriga algumas das cachoeiras mais exuberantes de Rio Claro, incluindo a famosa Cachoeira das Três Quedas, a Cachoeira das Borboletas e a Cachoeira Sebastião Marinho. Com poços profundos ideais para nado, escorregadores naturais de pedra e águas extremamente límpidas que descem da Serra do Mar, é o destino perfeito para ecoturistas e aventureiros.",
    image: "/images/cachoeiras_lidice.png",
    highlights: ["Cachoeira das Três Quedas", "Escorrega natural", "Poço para nado"],
    mapQuery: "Cachoeira das Três Quedas, Lídice, Rio Claro, RJ, Brasil",
    coords: "Distrito de Lídice — Rio Claro/RJ",
    reviews: [
      {
        name: "Bárbara Fontes",
        rating: 5,
        date: "Mai 2025",
        text: "A Cachoeira das Três Quedas em Lídice é fantástica! A trilha tem alguns trechos íngremes, mas ver as quedas e tomar banho no poço principal recompensa qualquer esforço.",
      },
      {
        name: "Thiago Neves",
        rating: 5,
        date: "Fev 2025",
        text: "Fomos também na Cachoeira Sebastião Marinho, excelente para relaxar e muito fácil de chegar. Lídice tem cachoeiras incríveis!",
      },
    ],
  },
  {
    id: "lidice",
    name: "Lídice",
    category: "Vila Histórica",
    district: "Lídice",
    short:
      "Charmoso distrito de origem tcheca, com clima de montanha, hortênsias e gastronomia acolhedora.",
    description:
      "Lídice é um dos distritos mais charmosos de Rio Claro, batizado em homenagem à vila tcheca de Lidice. Com clima ameno de montanha, ruas floridas de hortênsias, pousadas aconchegantes e uma gastronomia que mistura tradições europeias e mineiras, é um refúgio perfeito para descanso e turismo rural.",
    image: "/images/lidice.jpg",
    highlights: ["Clima de montanha", "Gastronomia rural", "Pousadas charmosas"],
    mapQuery: "Lídice, Rio Claro, RJ, Brasil",
    coords: "Distrito de Lídice — Rio Claro/RJ",
    reviews: [
      {
        name: "Ana Beatriz",
        rating: 5,
        date: "Fev 2025",
        text: "Lugar lindo e tranquilo, com um friozinho gostoso. A comida das pousadas é maravilhosa. Voltarei com certeza!",
      },
      {
        name: "Roberto Lima",
        rating: 5,
        date: "Dez 2024",
        text: "Cidade de interior no melhor sentido. Hospitalidade do povo é um capítulo à parte.",
      },
    ],
  },
  {
    id: "sao-joao-marcos",
    name: "Ruínas de São João Marcos",
    category: "Patrimônio Histórico",
    district: "São João Marcos",
    short:
      "Sítio histórico da cidade que foi demolida e inundada — um museu a céu aberto.",
    description:
      "O Parque Arqueológico e Ambiental de São João Marcos preserva as ruínas da antiga cidade que foi demolida na década de 1940 para a construção de uma represa. Hoje é um emocionante museu a céu aberto, onde é possível caminhar entre os vestígios da igreja matriz, sobrados e ruas, conhecendo a história e a memória da região.",
    image: "/images/saojoaomarcos.jpg",
    highlights: ["Visita guiada", "História viva", "Centro de visitantes"],
    mapQuery: "Parque Arqueológico São João Marcos, Rio Claro, RJ",
    coords: "Antiga São João Marcos — Rio Claro/RJ",
    reviews: [
      {
        name: "Juliana Martins",
        rating: 5,
        date: "Abr 2025",
        text: "Experiência emocionante e educativa. As visitas guiadas contam histórias incríveis sobre a cidade perdida.",
      },
      {
        name: "Fernando Alves",
        rating: 4,
        date: "Nov 2024",
        text: "Lugar cheio de história e bem cuidado. Recomendo ir com tempo para aproveitar tudo.",
      },
    ],
  },
  {
    id: "represa-lajes",
    name: "Represa de Ribeirão das Lajes",
    category: "Lago / Lazer",
    district: "Lídice / Getulândia",
    short:
      "Espelho d'água cercado de montanhas, ótimo para pesca esportiva, passeios de barco e contemplação.",
    description:
      "A imensa Represa de Ribeirão das Lajes oferece paisagens deslumbrantes, com suas águas calmas refletindo as montanhas verdes ao redor. É um local procurado para pesca esportiva, passeios de barco, esportes náuticos e momentos de paz à beira d'água, com diversos recantos e pousadas no entorno.",
    image: "/images/represa.jpg",
    highlights: ["Passeio de barco", "Pesca esportiva", "Pôr do sol incrível"],
    mapQuery: "Represa de Ribeirão das Lajes, Rio Claro, RJ",
    coords: "Ribeirão das Lajes — Rio Claro/RJ",
    reviews: [
      {
        name: "Patrícia Gomes",
        rating: 5,
        date: "Mar 2025",
        text: "Vista de tirar o fôlego! Fizemos um passeio de barco ao entardecer e foi inesquecível.",
      },
      {
        name: "Diego Santos",
        rating: 4,
        date: "Out 2024",
        text: "Ótimo para relaxar e pescar. Lugar amplo e bonito, leve protetor solar.",
      },
    ],
  },
  {
    id: "trilha-pico",
    name: "Trilhas da Serra do Mar",
    category: "Ecoturismo / Aventura",
    district: "Rio Claro",
    short:
      "Trilhas e mirantes na Serra do Mar com vistas panorâmicas dos vales e da Mata Atlântica.",
    description:
      "Para os amantes de aventura, as trilhas da Serra do Mar em Rio Claro revelam mirantes com vistas panorâmicas de tirar o fôlego. Entre matas preservadas, riachos e formações rochosas, os percursos levam a picos onde se descortinam vales verdejantes e mares de nuvens, ideais para o ecoturismo e a fotografia.",
    image: "/images/trilha.jpg",
    highlights: ["Mirantes panorâmicos", "Observação de aves", "Aventura na natureza"],
    mapQuery: "Serra do Mar, Rio Claro, RJ, Brasil",
    coords: "Serra do Mar — Rio Claro/RJ",
    reviews: [
      {
        name: "Lucas Pereira",
        rating: 5,
        date: "Fev 2025",
        text: "A subida cansa, mas a vista no topo recompensa demais. Natureza preservada e ar puro!",
      },
      {
        name: "Camila Rocha",
        rating: 5,
        date: "Jan 2025",
        text: "Trilha bem sinalizada e paisagens incríveis. Recomendo guia local para conhecer melhor a região.",
      },
    ],
  },
  {
    id: "getulandia",
    name: "Getulândia e Turismo Rural",
    category: "Turismo Rural",
    district: "Getulândia",
    short:
      "Distrito tranquilo com fazendas, cafés coloniais e o autêntico estilo de vida do interior fluminense.",
    description:
      "Getulândia é o coração do turismo rural de Rio Claro. Por entre estradas de terra e paisagens bucólicas, o visitante encontra fazendas históricas, produção artesanal, cafés coloniais fartos e a hospitalidade genuína do interior fluminense. Um convite a desacelerar e viver o ritmo do campo.",
    image: "/images/getulandia.jpg",
    highlights: ["Café colonial", "Fazendas históricas", "Vida no campo"],
    mapQuery: "Getulândia, Rio Claro, RJ, Brasil",
    coords: "Distrito de Getulândia — Rio Claro/RJ",
    reviews: [
      {
        name: "Sandra Oliveira",
        rating: 5,
        date: "Mar 2025",
        text: "Paz total! O café colonial é maravilhoso e as pessoas super acolhedoras. Recomendo demais.",
      },
      {
        name: "Marcelo Dias",
        rating: 4,
        date: "Set 2024",
        text: "Lugar perfeito para fugir da correria. Paisagens lindas e tranquilidade de sobra.",
      },
    ],
  },
  {
    id: "passa-tres",
    name: "Distrito de Passa Três",
    category: "Vila Histórica",
    district: "Passa Três",
    short:
      "Charmoso e histórico distrito, conhecido pelo seu clima bucólico, arquitetura colonial e a tradicional Festa da União.",
    description:
      "Passa Três é um distrito acolhedor de Rio Claro, com ruas tranquilas, praças arborizadas e construções históricas remanescentes da época áurea do café. O local atrai visitantes pelo seu clima pacato de interior, sua rica gastronomia típica que valoriza os produtores locais e eventos comunitários tradicionais, como a famosa Festa da União.",
    image: "/images/passatres.jpg",
    highlights: ["Arquitetura Colonial", "Clima Bucólico", "Festa da União"],
    mapQuery: "Passa Três, Rio Claro, RJ, Brasil",
    coords: "Distrito de Passa Três — Rio Claro/RJ",
    reviews: [
      {
        name: "Carlos Mendes",
        rating: 5,
        date: "Jun 2025",
        text: "Distrito muito aconchegante! Paramos para almoçar e fomos super bem recebidos. A arquitetura preserva muito a história do ciclo do café.",
      },
      {
        name: "Mariana Souza",
        rating: 4,
        date: "Mai 2025",
        text: "Lugar calmo e ótimo para tirar fotos. A Festa da União é excelente e muito animada!",
      },
    ],
  },
  {
    id: "fazenda-sao-joaquim",
    name: "Fazenda São Joaquim da Grama",
    category: "Patrimônio Histórico",
    district: "Passa Três",
    short:
      "Antiga sede do 'Rei do Café' com casarão imperial e capela histórica de 1887.",
    description:
      "A Fazenda São Joaquim da Grama foi uma das propriedades mais importantes do comendador Joaquim José de Souza Breves, o lendário 'Rei do Café' no século XIX. O imponente casarão colonial e a histórica Capela de São Joaquim, erguida em 1887 e tombada pelo Inepac, são marcos de valor inestimável da memória imperial e cafeeira do Sul Fluminense.",
    image: "/images/saojoaquim.png",
    highlights: ["Capela de 1887", "História Imperial", "Barões do Café"],
    mapQuery: "Fazenda São Joaquim da Grama, Rio Claro, RJ, Brasil",
    coords: "Passa Três — Rio Claro/RJ",
    reviews: [
      {
        name: "Julio Cesar",
        rating: 4,
        date: "Abr 2025",
        text: "Uma viagem no tempo. A capela histórica é impressionante e cheia de detalhes da época do império.",
      },
      {
        name: "Aline Costa",
        rating: 5,
        date: "Mar 2025",
        text: "Um patrimônio histórico riquíssimo que merece ser preservado e visitado por todos que gostam de história.",
      },
    ],
  },
  {
    id: "trilhas-motocross",
    name: "Trilhas de Motocross e Off-Road",
    category: "Ecoturismo / Aventura",
    district: "Rio Claro",
    short:
      "Rotas desafiadoras e trilhas em meio à Serra do Mar para entusiastas de motos e esportes de aventura.",
    description:
      "Rio Claro é um destino muito procurado por praticantes de motocross, trilhas de moto e jipes. Aproveitando o relevo montanhoso da Serra do Mar e estradas de terra cercadas por densa vegetação, o município oferece percursos cheios de adrenalina, lama, subidas íngremes e visuais deslumbrantes.",
    image: "/images/motocross.png",
    highlights: ["Trilhas técnicas", "Esportes Radicais", "Off-Road na Serra"],
    mapQuery: "Serra do Mar, Rio Claro, RJ, Brasil",
    coords: "Serra do Mar — Rio Claro/RJ",
    reviews: [
      {
        name: "Rodrigo Silva",
        rating: 5,
        date: "Mai 2025",
        text: "As trilhas de Rio Claro são sensacionais! Muita lama, desafios técnicos e um visual incrível da Serra do Mar lá de cima.",
      },
      {
        name: "Gustavo Abreu",
        rating: 5,
        date: "Fev 2025",
        text: "Sempre reunimos a galera para fazer o circuito off-road da região. O relevo favorece demais a prática do motocross.",
      },
    ],
  },
];
