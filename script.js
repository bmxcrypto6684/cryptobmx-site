/* ============================================================
   BTC Ancap News — Script Principal
   Navegação SPA, dados, busca, simulador BTC, comentários
   ============================================================ */

// ============================================================
// 1. DADOS — Artigos e notícias simuladas
// ============================================================
const ARTICLES = [
  {
    id: 1,
    title: 'Bitcoin volta ou patamar dos 79mil: o que está impulsionando a alta?',
    excerpt: 'Análise aprofundada dos fatores que levaram o Bitcoin a renovar seu recorde absoluto, incluindo adoção institucional, ETFs e cenário macroeconômico global.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+ATH',
    author: 'Lucas Mendes',
    date: '30 abr 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin atingiu um novo marco histórico nesta semana, renovando seu recorde absoluto de preço. O movimento de alta, que vinha se acumulando desde o início do ano, foi catalisado por uma confluência de fatores que merecem análise cuidadosa.</p>

      <h3>Adoção institucional em ritmo acelerado</h3>
      <p>Grandes gestoras de ativos globais continuam aumentando suas alocações em Bitcoin. Após o lançamento bem-sucedido dos ETFs à vista nos Estados Unidos, o fluxo de capital institucional atingiu novos patamares. Dados recentes mostram que mais de US$ 40 bilhões em fluxo líquido entraram nos produtos de Bitcoin no último trimestre.</p>

      <blockquote>Estamos testemunhando a maior transferência de riqueza da história, saindo de ativos fiduciários para dinheiro digital descentralizado. — Relatório Trimestral da Storm Capital</blockquote>

      <h3>Cenário macroeconômico favorável</h3>
      <p>O ambiente macroeconômico global também tem jogado a favor do Bitcoin. Com bancos centrais ao redor do mundo expandindo suas bases monetárias em resposta a desacelerações econômicas, investidores buscam ativos escassos e descentralizados como proteção contra a inflação e a desvalorização monetária.</p>

      <p>A taxa de hash da rede Bitcoin atingiu novos máximos históricos, indicando crescente segurança e participação de mineradores. O halving ocorrido em 2024 já mostra seus efeitos na redução da emissão diária de novos Bitcoins, pressionando a oferta em um momento de demanda crescente.</p>

      <h3>Perspectivas para os próximos meses</h3>
      <p>Analistas apontam que o ciclo de alta pode continuar, com projeções variando entre US$ 180 mil e US$ 220 mil até o final do ano. No entanto, alertam para possíveis correções no curto prazo, dado o ritmo acelerado da valorização.</p>

      <p>O que permanece incontestável é a tendência de longo prazo: o Bitcoin segue se consolidando como a classe de ativo com melhor performance da última década, recompensando aqueles que entendem seu valor como dinheiro sólido e descentralizado.</p>
    `,
    comments: [
      { author: 'Carlos S.', date: '30 abr 2026', text: 'Eu avisei! Desde 2020 que venho dizendo que Bitcoin chegaria a 6 dígitos. HODL!' },
      { author: 'Ana L.', date: '30 abr 2026', text: 'Ainda acho que tem muito espaço para crescer. A adoção institucional está só começando.' },
      { author: 'Pedro R.', date: '29 abr 2026', text: 'Comprei meu primeiro Bitcoin em 2019. Melhor decisão financeira da minha vida.' },
    ]
  },
  {
    id: 2,
    title: 'Governo argentino adota Bitcoin como moeda legal em transações internacionais',
    excerpt: 'Em uma decisão histórica, a Argentina permite que empresas realizem transações comerciais internacionais em Bitcoin, buscando contornar o controle cambial.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Argentina+Bitcoin',
    author: 'Rafael Torres',
    date: '29 abr 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Argentina deu mais um passo significativo em direção à adoção do Bitcoin como ferramenta de liberdade econômica. Em uma medida histórica, o governo argentino anunciou que empresas poderão realizar transações comerciais internacionais utilizando Bitcoin como meio de pagamento.</p>

      <h3>Contornando o controle cambial</h3>
      <p>A decisão visa contornar as rigorosas restrições cambiais que há décadas sufocam o comércio exterior argentino. Com uma inflação anual que ultrapassa os 200% e um peso em constante desvalorização, empresários argentinos vinham buscando alternativas para proteger seus negócios.</p>

      <blockquote>O Bitcoin nos oferece uma saída para o labirinto cambial argentino. Não se trata de ideologia, mas de sobrevivência econômica. — Ministro da Economia argentino</blockquote>

      <h3>Impacto regional</h3>
      <p>A medida argentina pode ter efeitos em toda a América Latina. Países vizinhos como Uruguai, Paraguai e até o Brasil observam atentamente os resultados da experiência argentina. Se bem-sucedida, pode servir de modelo para outras economias que enfrentam desafios semelhantes.</p>

      <p>El Salvador, que adotou o Bitcoin como moeda legal em 2021, já demonstrou os benefícios potenciais, incluindo turismo, remessas e inclusão financeira. A Argentina, no entanto, é a maior economia a dar esse passo até hoje.</p>
    `,
    comments: [
      { author: 'Julio M.', date: '29 abr 2026', text: 'Argentina mostrando o caminho para a América Latina. Brasil precisa prestar atenção.' },
    ]
  },
  {
    id: 3,
    title: 'Ancap na prática: como cidades-zona franca estão prosperando sem regulação estatal',
    excerpt: 'Conheça exemplos reais de zonas econômicas livres ao redor do mundo que aplicam princípios anarcocapitalistas e colhem resultados impressionantes.',
    category: 'ancap',
    categoryLabel: 'Ancap',
    image: 'https://placehold.co/800x400/1a1a2e/d4af37?text=Cidades+Zona+Franca',
    author: 'Gabriela Costa',
    date: '28 abr 2026',
    readTime: '8 min',
    featured: true,
    body: `
      <p>O anarcocapitalismo frequentemente é tratado como utopia ou teoria abstrata. No entanto, ao redor do mundo, existem exemplos concretos de zonas econômicas que aplicam princípios fundamentais da filosofia ancap — e os resultados são impressionantes.</p>

      <h3>O que é uma zona econômica livre?</h3>
      <p>Zonas econômicas especiais (ZEEs) são regiões onde as leis comerciais e tributárias diferem do restante do país. Algumas delas vão muito além, oferecendo liberdade quase total de regulação, tributação mínima e burocracia reduzida ao extremo.</p>

      <blockquote>Onde há liberdade econômica, há prosperidade. Não é coincidência que as regiões mais livres do mundo são também as mais ricas. — Economista da Escola Austríaca</blockquote>

      <h3>Exemplos reais</h3>
      <p>Hong Kong, antes de sua integração mais profunda com a China, era o exemplo clássico de prosperidade baseada em baixa tributação e liberdade comercial. Dubai também figura como um laboratório de liberdade econômica, com suas zonas francas que atraem talentos e capital do mundo inteiro.</p>

      <p>Mais recentemente, projetos como Próspera, em Honduras, e zonas de livre comércio em países como Paraguai mostram que o modelo continua sendo testado e aperfeiçoado.</p>
    `,
    comments: [
      { author: 'Tiago N.', date: '28 abr 2026', text: 'Excelente artigo! Liberdade econômica funciona onde quer que seja testada.' },
      { author: 'Marina F.', date: '28 abr 2026', text: 'Próspera é fascinante. Espero que mais projetos assim surjam.' },
    ]
  },
  {
    id: 4,
    title: 'Ethereum 3.0 promete escalabilidade infinita: o que muda para o ecossistema cripto?',
    excerpt: 'A próxima grande atualização do Ethereum promete resolver o trilema da escalabilidade com soluções inovadoras de sharding e rollups.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/8b5cf6/ffffff?text=Ethereum+3.0',
    author: 'Lucas Mendes',
    date: '27 abr 2026',
    readTime: '7 min',
    featured: true,
    body: `
      <p>O Ethereum, a segunda maior criptomoeda do mundo, está prestes a receber sua maior atualização desde a The Merge. Batizada de Ethereum 3.0, a nova versão promete resolver o chamado "trilema da escalabilidade" — a busca por segurança, descentralização e escalabilidade simultaneamente.</p>

      <h3>O que é o trilema?</h3>
      <p>Cunhado por Vitalik Buterin, o trilema da escalabilidade afirma que blockchains enfrentam um trade-off fundamental entre três propriedades: segurança, descentralização e escalabilidade. Melhorar uma delas geralmente significa sacrificar outra.</p>

      <p>A Ethereum 3.0 propõe uma abordagem inovadora combinando sharding dinâmico e rollups de camada 2 avançados.</p>
    `,
    comments: [
      { author: 'Vitor E.', date: '27 abr 2026', text: 'Se realmente entregarem escalabilidade infinita, o Ethereum pode superar o Bitcoin em uso.' },
    ]
  },
  {
    id: 5,
    title: 'Inflação zero: o sonho impossível ou o futuro do dinheiro sólido?',
    excerpt: 'Especialistas debatem se a inflação zero é um objetivo alcançável ou se políticas monetárias expansionistas são inerentes ao sistema estatal.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/2d3748/ffffff?text=Infla%C3%A7%C3%A3o+Zero',
    author: 'Rafael Torres',
    date: '26 abr 2026',
    readTime: '5 min',
    featured: false,
    body: `
      <p>A busca pela inflação zero sempre foi vista como utopia pelos economistas tradicionais. Porém, com o amadurecimento do Bitcoin e o crescente questionamento dos bancos centrais, o debate volta com força.</p>

      <p>O Bitcoin, com sua oferta rigidamente limitada a 21 milhões de unidades, representa o primeiro experimento em larga escala de dinheiro com inflação zero (na verdade, deflacionário por natureza). E os resultados são eloquentes.</p>

      <blockquote>Bitcoin não é apenas dinheiro sólido. É um padrão de medida que expõe a podridão de todos os sistemas fiduciários. — Saifedean Ammous</blockquote>

      <p>Países que adotaram políticas de "dinheiro fácil" por décadas agora enfrentam crises de inflação que corroem o poder de compra dos cidadãos mais pobres de forma desproporcional.</p>
    `,
    comments: []
  },
  {
    id: 6,
    title: 'Lightning Network atinge 100 milhões de transações mensais pela primeira vez',
    excerpt: 'A camada de pagamentos do Bitcoin atinge um novo recorde de capacidade e transações, consolidando-se como o sistema financeiro mais eficiente do mundo.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Lightning+Network',
    author: 'Gabriela Costa',
    date: '25 abr 2026',
    readTime: '4 min',
    featured: false,
    body: `
      <p>A Lightning Network, a camada de pagamentos instantâneos do Bitcoin, atingiu a marca histórica de 100 milhões de transações mensais. O marco consolida a rede como uma infraestrutura financeira global viável e eficiente.</p>

      <p>Com taxas médias inferiores a US$ 0,01 e liquidação instantânea, a Lightning Network já processa mais transações que sistemas tradicionais como Visa e Mastercard em diversas regiões do mundo.</p>
    `,
    comments: []
  },
  {
    id: 7,
    title: 'O que é a Escola Austríaca de Economia? Um guia para iniciantes',
    excerpt: 'Entenda os fundamentos da Escola Austríaca, sua visão sobre ciclos econômicos, moeda e a crítica ao intervencionismo estatal.',
    category: 'ancap',
    categoryLabel: 'Ancap',
    image: 'https://placehold.co/800x400/1a1a2e/d4af37?text=Escola+Austr%C3%ADaca',
    author: 'Lucas Mendes',
    date: '24 abr 2026',
    readTime: '9 min',
    featured: false,
    body: `
      <p>A Escola Austríaca de Economia é uma das tradições intelectuais mais influentes no pensamento libertário e anarcocapitalista. Seus fundamentos remontam a Carl Menger, Eugen von Böhm-Bawerk e, posteriormente, Ludwig von Mises e Friedrich Hayek.</p>

      <h3>Princípios fundamentais</h3>
      <p>A Escola Austríaca se distingue por sua abordagem metodológica: o individualismo metodológico. Para os austríacos, fenômenos econômicos devem ser explicados a partir das ações dos indivíduos, não de agregados estatísticos.</p>

      <p>Outro pilar é a teoria subjetiva do valor: o valor de um bem não é intrínseco, mas determinado pela avaliação subjetiva que cada indivíduo faz dele.</p>
    `,
    comments: []
  },
  {
    id: 8,
    title: 'Como o Bitcoin está transformando remessas internacionais em países em desenvolvimento',
    excerpt: 'Trabalhadores imigrantes estão economizando bilhões em taxas ao usar Bitcoin e criptomoedas para enviar dinheiro para suas famílias.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/059669/ffffff?text=Remessas+Internacionais',
    author: 'Rafael Torres',
    date: '23 abr 2026',
    readTime: '5 min',
    featured: false,
    body: `
      <p>As remessas internacionais sempre foram um negócio lucrativo para empresas tradicionais como Western Union e MoneyGram, que cobram taxas que podem chegar a 10% ou mais do valor enviado. Para trabalhadores imigrantes que enviam dinheiro para suas famílias, isso representa uma perda bilionária anual.</p>

      <p>O Bitcoin e, especialmente, a Lightning Network estão mudando radicalmente esse cenário. Com transações quase instantâneas e taxas inferiores a 1%, trabalhadores em países desenvolvidos podem enviar dinheiro para suas famílias em países em desenvolvimento de forma mais eficiente.</p>
    `,
    comments: [
      { author: 'Juan P.', date: '23 abr 2026', text: 'Como imigrante, posso confirmar. Economizo mais de US$ 200 por mês desde que comecei a usar Bitcoin.' },
    ]
  },
  {
    id: 9,
    title: 'Análise técnica: resistência de US$ 100 mil pode ser testada antes da próxima perna de alta',
    excerpt: 'Analistas apontam que um recuo para testar a resistência dos US$ 100 mil seria saudável antes da continuidade do movimento altista.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/7c3aed/ffffff?text=An%C3%A1lise+T%C3%A9cnica',
    author: 'Gabriela Costa',
    date: '22 abr 2026',
    readTime: '4 min',
    featured: false,
    body: `
      <p>O mercado de criptomoedas entra em uma fase de consolidação após o forte rali recente. Analistas técnicos apontam que um teste à resistência dos US$ 100 mil para o Bitcoin seria um movimento saudável antes do próximo avanço.</p>

      <p>O indicador RSI (Relative Strength Index) mostra divergência de baixa no curto prazo, sugerindo que o mercado precisa de um período de resfriamento. No entanto, as médias móveis de 50 e 200 dias continuam em tendência fortemente altista.</p>
    `,
    comments: []
  },
  {
    id: 10,
    title: 'Propriedade privada vs. função social: o debate filosófico do século',
    excerpt: 'Uma análise aprofundada sobre os fundamentos filosóficos da propriedade privada e os argumentos libertários contra a intervenção estatal.',
    category: 'ancap',
    categoryLabel: 'Ancap',
    image: 'https://placehold.co/800x400/1a1a2e/d4af37?text=Propriedade+Privada',
    author: 'Lucas Mendes',
    date: '21 abr 2026',
    readTime: '10 min',
    featured: false,
    body: `
      <p>O direito de propriedade é um dos pilares fundamentais da civilização. Filósofos como John Locke, Murray Rothbard e Hans-Hermann Hoppe construíram argumentos robustos sobre a centralidade da propriedade privada para a liberdade individual.</p>

      <p>Em contraste, a teoria da "função social da propriedade" argumenta que o direito de propriedade é condicional — subordinado a supostos interesses coletivos definidos pelo Estado. Para os libertários, essa é a porta de entrada para o confisco e o autoritarismo.</p>

      <p>Este artigo explora os fundamentos de ambas as posições e argumenta por que a propriedade privada absoluta é essencial para uma sociedade livre.</p>
    `,
    comments: [
      { author: 'André B.', date: '21 abr 2026', text: 'Leitura obrigatória. Rothbard explicando propriedade privada de forma cristalina como sempre.' },
      { author: 'Clara M.', date: '21 abr 2026', text: 'Excelente artigo! A função social é usada como justificativa para todo tipo de abuso estatal.' },
    ]
  },
];

// Categories with article counts
const CATEGORIES = [
  { id: 'all', label: 'Todas', count: ARTICLES.length },
  { id: 'bitcoin', label: 'Bitcoin', count: ARTICLES.filter(a => a.category === 'bitcoin').length },
  { id: 'economia', label: 'Economia', count: ARTICLES.filter(a => a.category === 'economia').length },
  { id: 'ancap', label: 'Ancap', count: ARTICLES.filter(a => a.category === 'ancap').length },
  { id: 'cripto', label: 'Cripto', count: ARTICLES.filter(a => a.category === 'cripto').length },
];

// Trending topics
const TRENDING = [
  'BTC em novo recorde histórico',
  'Halving 2024',
  'Lightning Network',
  'ETF de Bitcoin',
  'Inflação na Argentina',
  'Escola Austríaca',
  'Zonas Francas',
  'Propriedade Privada',
];

// Hero banner articles indexes
const FEATURED_ARTICLES = ARTICLES.filter(a => a.featured);
const HERO_MAIN = FEATURED_ARTICLES[0];
const HERO_SIDE = FEATURED_ARTICLES.slice(1, 4);

// Articles per page (news listing)
const ARTICLES_PER_PAGE = 5;

// Live news (from CryptoCompare API)
let liveNewsData = [];
let liveNewsLoaded = false;

// ============================================================
// 2. NAVEGAÇÃO SPA
// ============================================================
let currentPage = 'home';
let currentCategory = 'all';
let currentPageNum = 1;

function navigate(page, category) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));

  // Show target
  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add('active-page');
    currentPage = page;
  }

  // Update nav links
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Category filter for news page
  if (page === 'news') {
    if (category) currentCategory = category;
    currentPageNum = 1;
    renderNewsPage();
  }

  // Render article if on article page with an id
  if (page === 'article') {
    // handled by openArticle
  }

  // Close mobile menu
  closeMobileMenu();
}

function openArticle(event, articleId) {
  // Allow click on parent cards
  const card = event.currentTarget;
  const id = articleId || parseInt(card.dataset.articleId);
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));

  // Show article page
  const articlePage = document.getElementById('page-article');
  articlePage.classList.add('active-page');
  currentPage = 'article';

  // Update nav
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === 'article');
  });

  renderArticle(article);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
}

// ============================================================
// 3. RENDERIZAÇÃO — HOME
// ============================================================
function renderHome() {
  // Hero main
  document.getElementById('heroFeaturedTitle').textContent = HERO_MAIN.title;
  document.getElementById('heroFeaturedExcerpt').textContent = HERO_MAIN.excerpt;
  document.getElementById('heroFeaturedCategory').textContent = HERO_MAIN.categoryLabel;
  document.getElementById('heroFeaturedMeta').textContent = `${HERO_MAIN.author} · ${HERO_MAIN.date} · ${HERO_MAIN.readTime}`;
  const heroImg = document.getElementById('heroFeaturedImg');
  heroImg.style.backgroundImage = `url(${HERO_MAIN.image})`;
  document.getElementById('heroFeatured').dataset.articleId = HERO_MAIN.id;

  // Hero side
  const heroSide = document.getElementById('heroSide');
  heroSide.innerHTML = HERO_SIDE.map(a => `
    <div class="hero__side-item" data-article-id="${a.id}" onclick="openArticle(event)">
      <img class="hero__side-img" src="${a.image}" alt="${a.title}" loading="lazy" />
      <div class="hero__side-body">
        <h4>${a.title}</h4>
        <span>${a.date} · ${a.readTime}</span>
      </div>
    </div>
  `).join('');

  // Latest grid
  const latestGrid = document.getElementById('latestGrid');
  // Show all articles except the hero-main one, take latest 6
  const latestArticles = ARTICLES.filter(a => a.id !== HERO_MAIN.id).slice(0, 6);
  latestGrid.innerHTML = latestArticles.map(a => createNewsCard(a)).join('');

  // Featured list (articles marked featured)
  const featuredList = document.getElementById('featuredList');
  featuredList.innerHTML = FEATURED_ARTICLES.slice(1).map(a => `
    <div class="featured-item" data-article-id="${a.id}" onclick="openArticle(event)">
      <img class="featured-item__img" src="${a.image}" alt="${a.title}" loading="lazy" />
      <div class="featured-item__body">
        <h4>${a.title}</h4>
        <p>${a.excerpt}</p>
        <div class="featured-item__meta">${a.categoryLabel} · ${a.date} · ${a.readTime}</div>
      </div>
    </div>
  `).join('');

  // Sidebar categories
  const sidebarCats = document.getElementById('sidebarCats');
  sidebarCats.innerHTML = CATEGORIES.filter(c => c.id !== 'all').map(c => `
    <li onclick="navigate('news', '${c.id}')">
      ${c.label} <span>${c.count}</span>
    </li>
  `).join('');

  // Sidebar trending
  const sidebarTrending = document.getElementById('sidebarTrending');
  sidebarTrending.innerHTML = TRENDING.map((t, i) => `
    <li onclick="navigate('news')"><span class="trend-num">${i + 1}</span> ${t}</li>
  `).join('');
}

function createNewsCard(article) {
  return `
    <div class="news-card" data-article-id="${article.id}" onclick="openArticle(event)">
      <img class="news-card__img" src="${article.image}" alt="${article.title}" loading="lazy" />
      <div class="news-card__body">
        <span class="news-card__cat">${article.categoryLabel}</span>
        <h3 class="news-card__title">${article.title}</h3>
        <p class="news-card__excerpt">${article.excerpt}</p>
        <div class="news-card__meta">
          <span><i class="far fa-user"></i> ${article.author}</span>
          <span><i class="far fa-calendar"></i> ${article.date}</span>
          <span><i class="far fa-clock"></i> ${article.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 4. RENDERIZAÇÃO — NEWS (listagem completa)
// ============================================================
function renderNewsPage() {
  // Filters
  const filtersContainer = document.getElementById('newsFilters');
  filtersContainer.innerHTML = CATEGORIES.map(c => `
    <button class="${c.id === currentCategory ? 'active' : ''}" data-cat="${c.id}">
      ${c.label} (${c.count})
    </button>
  `).join('');

  // Filter click handlers
  filtersContainer.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      currentPageNum = 1;
      renderNewsPage();
    });
  });

  // Get filtered articles
  let filtered = currentCategory === 'all'
    ? [...ARTICLES]
    : ARTICLES.filter(a => a.category === currentCategory);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const start = (currentPageNum - 1) * ARTICLES_PER_PAGE;
  const paged = filtered.slice(start, start + ARTICLES_PER_PAGE);

  // Grid
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = paged.map(a => createNewsCard(a)).join('');

  // Pagination buttons
  const pagination = document.getElementById('newsPagination');
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }
  let pagHtml = '';

  if (currentPageNum > 1) {
    pagHtml += `<button data-page="${currentPageNum - 1}"><i class="fas fa-chevron-left"></i></button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagHtml += `<button class="${i === currentPageNum ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  if (currentPageNum < totalPages) {
    pagHtml += `<button data-page="${currentPageNum + 1}"><i class="fas fa-chevron-right"></i></button>`;
  }

  pagination.innerHTML = pagHtml;

  pagination.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPageNum = parseInt(btn.dataset.page);
      renderNewsPage();
      window.scrollTo({ top: document.querySelector('.page-banner').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

// ============================================================
// 5. RENDERIZAÇÃO — ARTIGO
// ============================================================
function renderArticle(article) {
  const container = document.getElementById('articleContent');

  container.innerHTML = `
    <div class="article">
      <span class="article__cat">${article.categoryLabel}</span>
      <h1 class="article__title">${article.title}</h1>
      <div class="article__meta">
        <span class="author"><i class="far fa-user"></i> ${article.author}</span>
        <span><i class="far fa-calendar"></i> ${article.date}</span>
        <span><i class="far fa-clock"></i> ${article.readTime} de leitura</span>
      </div>
      <img class="article__img" src="${article.image}" alt="${article.title}" />

      <div class="article__body">
        ${article.body}
      </div>

      <div class="article__share">
        <span>Compartilhe:</span>
        <a href="#" title="Compartilhar no Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" title="Compartilhar no Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" title="Compartilhar no Telegram"><i class="fab fa-telegram"></i></a>
        <a href="#" title="Copiar link"><i class="fas fa-link"></i></a>
      </div>

      <div class="article__comments">
        <h3><i class="far fa-comment"></i> Comentários (${article.comments.length})</h3>
        <div id="commentsList">
          ${article.comments.map(c => `
            <div class="comment">
              <div class="comment__header">
                <span class="comment__author">${c.author}</span>
                <span class="comment__date">${c.date}</span>
              </div>
              <p>${c.text}</p>
            </div>
          `).join('')}
        </div>
        <div class="comment-form">
          <input type="text" id="commentName" placeholder="Seu nome" />
          <textarea id="commentText" placeholder="Deixe seu comentário..." rows="3"></textarea>
          <button class="btn btn--primary" onclick="submitComment(${article.id})">
            <i class="far fa-paper-plane"></i> Comentar
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 6. COMENTÁRIOS (simulado)
// ============================================================
function submitComment(articleId) {
  const nameInput = document.getElementById('commentName');
  const textInput = document.getElementById('commentText');
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (!name || !text) {
    alert('Preencha seu nome e mensagem para comentar.');
    return;
  }

  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  article.comments.push({
    author: name,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/\./g, ''),
    text: text,
  });

  renderArticle(article);
}

// ============================================================
// 7. BITCOIN PRICE — API REAL (CoinGecko)
// ============================================================
let btcPriceData = { usd: 0, brl: 0 };
let btcPriceHistory = [];
let btcInterval = null;
let btcSecondsSinceUpdate = 0;
let btcTimerInterval = null;
let previousBtcPrice = 0;

function fetchBtcPrice() {
  const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL';
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (!data || !data.BTC) throw new Error('Resposta inválida');
      previousBtcPrice = btcPriceData.usd || data.BTC.USD;
      btcPriceData = { usd: data.BTC.USD, brl: data.BTC.BRL };
      btcPriceHistory.push(btcPriceData.usd);
      if (btcPriceHistory.length > 50) btcPriceHistory.shift();
      btcSecondsSinceUpdate = 0;
      updateBtcDisplay();
      drawBtcChart();
      updateSimulatorPrices();
    })
    .catch(err => {
      console.warn('Erro ao buscar preço BTC:', err.message);
      if (btcPriceHistory.length === 0) {
        const fb = 75000 + Math.random() * 10000;
        btcPriceData = { usd: fb, brl: fb * 5.1 };
        btcPriceHistory.push(fb);
        updateBtcDisplay();
        drawBtcChart();
        updateSimulatorPrices();
      }
    });
}

function initBtcWidget() {
  document.getElementById('btcPrice').textContent = '$ ---';
  document.getElementById('btcPriceBrl').textContent = 'R$ ---';
  fetchBtcPrice();
  btcInterval = setInterval(fetchBtcPrice, 10000);
  btcTimerInterval = setInterval(() => {
    btcSecondsSinceUpdate++;
    const el = document.getElementById('btcUpdateTime');
    if (el) el.textContent = btcSecondsSinceUpdate;
  }, 1000);
}

function updateBtcDisplay() {
  const priceUSD = btcPriceData.usd;
  const priceBRL = btcPriceData.brl;
  if (!priceUSD) return;

  document.getElementById('btcPrice').textContent =
    '$' + priceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('btcPriceBrl').textContent =
    'R$ ' + priceBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (previousBtcPrice && previousBtcPrice !== priceUSD) {
    const change = ((priceUSD - previousBtcPrice) / previousBtcPrice) * 100;
    const changeFormatted = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
    const isUp = change >= 0;
    const changeEl = document.getElementById('btcChange');
    changeEl.textContent = 'Hoje: ' + changeFormatted;
    changeEl.className = 'btc-widget__change ' + (isUp ? 'up' : 'down');
  }
  document.getElementById('btcUpdateTime').textContent = '0';
}

function drawBtcChart() {
  const canvas = document.getElementById('btcChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padding = 4;
  const data = btcPriceHistory.slice(-40);

  ctx.clearRect(0, 0, w, h);

  if (data.length < 2) return;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (w - 2 * padding),
    y: h - padding - ((val - min) / range) * (h - 2 * padding),
  }));

  const isUp = data[data.length - 1] >= data[0];
  const color = isUp ? '#10b981' : '#ef4444';

  // Fill gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, isUp ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)');
  gradient.addColorStop(1, isUp ? 'rgba(16, 185, 129, 0.01)' : 'rgba(239, 68, 68, 0.01)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineTo(points[points.length - 1].x, h - padding);
  ctx.lineTo(points[0].x, h - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.stroke();
}

// ============================================================
// 8. BUSCA
// ============================================================
function performSearch(query) {
  if (!query.trim()) return;
  const q = query.toLowerCase().trim();
  const results = ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.categoryLabel.toLowerCase().includes(q) ||
    a.body.toLowerCase().includes(q)
  );

  const modal = document.getElementById('searchResultsModal');
  const body = document.getElementById('searchResultsBody');

  if (results.length === 0) {
    body.innerHTML = '<p class="no-results">Nenhum resultado encontrado para "' + query + '".</p>';
  } else {
    body.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="openArticle(event, ${r.id})" data-article-id="${r.id}">
        <h4>${r.title}</h4>
        <p>${r.excerpt}</p>
        <small style="color:var(--color-text-dim)">${r.categoryLabel} · ${r.date}</small>
      </div>
    `).join('');
  }

  modal.classList.add('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchInputMobile').value = '';
}

function closeSearchResults() {
  document.getElementById('searchResultsModal').classList.remove('open');
}

// ============================================================
// 9. EVENT LISTENERS & INIT
// ============================================================
function init() {
  renderHome();

  // BTC Widget
  initBtcWidget();

  // BTC Simulator
  initSimulator();

  // Live News
  initLiveNews();

  // Search: desktop
  document.getElementById('searchToggle').addEventListener('click', () => {
    const box = document.getElementById('searchBox');
    box.classList.toggle('open');
  });

  document.getElementById('searchSubmit').addEventListener('click', () => {
    performSearch(document.getElementById('searchInput').value);
  });
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(e.target.value);
  });

  // Search: mobile overlay
  document.getElementById('searchInputMobile').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(e.target.value);
  });
  document.getElementById('searchSubmitMobile').addEventListener('click', () => {
    performSearch(document.getElementById('searchInputMobile').value);
  });
  document.getElementById('searchOverlayClose').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.remove('open');
  });

  // Close search modal on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchResults();
      document.getElementById('searchBox').classList.remove('open');
      document.getElementById('searchOverlay').classList.remove('open');
    }
  });

  // Mobile nav toggle
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navToggle').classList.toggle('open');
    document.getElementById('navMenu').classList.toggle('open');
  });

  // Scroll effects
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Scroll to top button
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
  });

  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('contactFeedback');
    feedback.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
    feedback.className = 'contact__feedback show success';
    document.getElementById('contactForm').reset();

    // Reset after 5s
    setTimeout(() => {
      feedback.className = 'contact__feedback';
    }, 5000);
  });

  // Charts on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentPage === 'home') drawBtcChart();
    }, 200);
  });
}

function closeMobileMenu() {
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('navMenu').classList.remove('open');
}

// ============================================================
// 10. SIMULADOR DE COMPRA DE BITCOIN
// ============================================================
function initSimulator() {
  const input = document.getElementById('simInvestBRL');
  if (!input) return;

  input.addEventListener('input', function () {
    // Allow only digits and comma
    let raw = this.value.replace(/[^\d,]/g, '');
    const parts = raw.split(',');
    if (parts.length > 2) {
      raw = parts[0] + ',' + parts.slice(1).join('');
    }
    // Limit to 2 decimal places
    if (raw.includes(',')) {
      const [, dec] = raw.split(',');
      if (dec.length > 2) raw = parts[0] + ',' + dec.slice(0, 2);
    }
    this.value = raw;
    updateSimulatorOutput();
  });

  // Also update on blur (format nicely)
  input.addEventListener('blur', function () {
    const val = parseFloat(this.value.replace(',', '.')) || 0;
    if (val > 0) {
      this.value = val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    updateSimulatorOutput();
  });
}

function updateSimulatorOutput() {
  const input = document.getElementById('simInvestBRL');
  const resultEl = document.getElementById('simBtcAmount');
  if (!input || !resultEl) return;

  const brlValue = parseFloat(input.value.replace(',', '.')) || 0;

  if (brlValue > 0 && btcPriceData.brl > 0) {
    const btcAmount = brlValue / btcPriceData.brl;
    resultEl.textContent = btcAmount.toFixed(8);
  } else {
    resultEl.textContent = '0,00000000';
  }
}

function updateSimulatorPrices() {
  const usdEl = document.getElementById('simUsdPrice');
  const brlEl = document.getElementById('simBrlPrice');
  if (usdEl && btcPriceData.usd) {
    usdEl.textContent = '$' + btcPriceData.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (brlEl && btcPriceData.brl) {
    brlEl.textContent = 'R$ ' + btcPriceData.brl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  updateSimulatorOutput();
}

// ============================================================
// 11. NOTÍCIAS AO VIVO — CryptoCompare API
// ============================================================
function initLiveNews() {
  fetchLiveNews();
  setInterval(fetchLiveNews, 300000); // 5 min
}

function fetchLiveNews() {
  const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&extraParams=BTCAncapNews';
  fetch(url)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (data) {
      if (!data.Data || !data.Data.length) throw new Error('No news data');
      liveNewsData = data.Data.slice(0, 30);
      liveNewsLoaded = true;
      renderLiveNewsOnHome();
    })
    .catch(function (err) {
      console.warn('Erro ao buscar notícias:', err.message);
    });
}

function renderLiveNewsOnHome() {
  var grid = document.getElementById('latestGrid');
  if (!grid || !liveNewsData.length) return;
  grid.innerHTML = '';
  var top6 = liveNewsData.slice(0, 6);
  for (var i = 0; i < top6.length; i++) {
    grid.appendChild(createLiveNewsCard(top6[i]));
  }
  var badge = document.getElementById('liveBadge');
  if (badge) badge.style.display = 'inline-flex';
}

function createLiveNewsCard(item) {
  var card = document.createElement('div');
  card.className = 'news-card news-card--live';
  var title = item.title || 'Sem título';
  var body = item.body || '';
  var excerpt = body.length > 120 ? body.substring(0, 120) + '...' : body;
  var img = item.imageurl || 'https://placehold.co/800x400/1a2231/8899aa?text=News';
  var source = item.source || 'Crypto';
  var timeStr = timeAgo(item.published_on);
  card.innerHTML =
    '<img class="news-card__img" src="' + img + '" alt="' + title.replace(/"/g, '&quot;') + '" loading="lazy" onerror="this.src=\'https://placehold.co/800x400/1a2231/8899aa?text=News\'" />' +
    '<div class="news-card__body">' +
    '<span class="news-card__cat news-card__cat--live"><i class="fas fa-globe"></i> ' + source + '</span>' +
    '<h3 class="news-card__title">' + title + '</h3>' +
    '<p class="news-card__excerpt">' + excerpt + '</p>' +
    '<div class="news-card__meta">' +
    '<span><i class="far fa-clock"></i> ' + timeStr + '</span>' +
    '<span><i class="fas fa-external-link-alt"></i> ' + source + '</span>' +
    '</div>' +
    '</div>';
  card.addEventListener('click', function () {
    if (item.url) window.open(item.url, '_blank', 'noopener,noreferrer');
  });
  return card;
}

function timeAgo(timestamp) {
  if (!timestamp) return 'recentemente';
  var now = Math.floor(Date.now() / 1000);
  var diff = now - timestamp;
  if (diff < 60) return 'agora';
  if (diff < 3600) return Math.floor(diff / 60) + 'min atrás';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h atrás';
  var days = Math.floor(diff / 86400);
  if (days === 1) return 'ontem';
  return days + 'd atrás';
}

// Start
document.addEventListener('DOMContentLoaded', init);
