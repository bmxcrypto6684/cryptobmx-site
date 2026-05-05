/* BTC Ancap News — SPA, dados, busca, simulador BTC, comentários */

// 1. DADOS — Artigos
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  {
    id: 11,
    title: 'Bitcoin é acumulado por holders de longo prazo e testa US$ 81 mil',
    excerpt: 'Dados on-chain revelam que investidores de longo prazo adicionaram 330 mil BTC às carteiras, sinalizando confiança no mercado apesar da volatilidade.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+Acumula%C3%A7%C3%A3o',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O Bitcoin atingiu a marca de US$ 81 mil impulsionado por um movimento expressivo de acumulação por parte de detentores de longo prazo (LTHs). Dados on-chain mostram que esses investidores adicionaram cerca de 330 mil BTC às suas posições, um dos maiores acréscimos mensais do ano.</p>

      <h3>O que aconteceu</h3>
      <p>O movimento ocorre em um momento em que o mercado cripto busca direção após meses de consolidação entre US$ 70 mil e US$ 85 mil. A acumulação por LTHs é historicamente vista como um sinal otimista, pois esses investidores tendem a manter suas posições independentemente das flutuações de curto prazo.</p>

      <blockquote>Detentores de longo prazo estão comprando Bitcoin como se não houvesse amanhã. Esse comportamento precedeu todas as grandes altas do ciclo. — Análise on-chain semanal</blockquote>

      <h3>Contexto e impacto no mercado</h3>
      <p>O acúmulo reduziu a oferta circulante de Bitcoin nas exchanges, criando um choque de oferta que pode impulsionar o preço para cima. Analistas técnicos apontam que se o BTC conseguir se sustentar acima dos US$ 81 mil, o próximo alvo pode ser a região dos US$ 95 mil.</p>

      <p>A taxa de financiamento futura permanece estável, sugerindo que o movimento de alta é orgânico e não alavancado em excesso — um sinal saudável para a continuidade do rali.</p>

      <h3>Consequências possíveis</h3>
      <p>Caso o movimento de acumulação continue, o mercado pode enfrentar um aperto de oferta significativo, especialmente com o efeito contínuo do halving de 2024 reduzindo a emissão diária de novos Bitcoins. Combinado com a demanda institucional crescente via ETFs, o cenário é favorável para uma valorização sustentada.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A acumulação por LTHs é um dos indicadores mais confiáveis do mercado. Historicamente, períodos de forte acumulação precederam as maiores altas do Bitcoin. O cenário atual combina oferta reduzida pós-halving com demanda institucional crescente — a receita clássica para uma potencial nova perna de alta. Recomenda-se atenção à região de US$ 95 mil como próximo grande teste.</p>
    `,
    comments: []
  },
  {
    id: 12,
    title: 'Telegram se torna o maior validador da TON e Toncoin dispara 33%',
    excerpt: 'Pavel Durov anuncia que o Telegram assumirá papel central na validação da rede TON, elevando o token em mais de 30% em horas.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0088cc/ffffff?text=Telegram+TON',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>Pavel Durov, fundador do Telegram, anunciou que a plataforma de mensagens se tornará o maior validador da rede TON (The Open Network). A decisão representa um aprofundamento significativo da integração entre o Telegram e o ecossistema TON, que já vinha crescendo com recursos como carteira integrada e pagamentos via criptomoedas.</p>

      <h3>O que aconteceu</h3>
      <p>O TON sempre manteve uma relação simbiótica com o Telegram, embora formalmente fossem entidades separadas. Com este movimento, o Telegram deixa claro que vê a blockchain TON como uma infraestrutura estratégica para o futuro da plataforma, especialmente em áreas como pagamentos, mini-apps descentralizados e verificação de identidade.</p>

      <blockquote>Estamos apenas arranhando a superfície do que é possível quando uma plataforma com centenas de milhões de usuários encontra uma blockchain eficiente e escalável. — Pavel Durov</blockquote>

      <h3>Contexto</h3>
      <p>O Telegram já havia integrado recursos cripto nos últimos anos, incluindo carteira custodiada, negociação de criptomoedas e suporte a mini-apps baseados em TON. A decisão de se tornar validador eleva o envolvimento a um novo patamar, dando ao Telegram influência direta sobre a governança e segurança da rede.</p>

      <h3>Impacto no mercado</h3>
      <p>O token Toncoin reagiu imediatamente ao anúncio, registrando alta de 33,8% nas horas seguintes. O movimento elevou significativamente a capitalização de mercado do ativo, atraindo a atenção de investidores institucionais que antes mantinham distância do projeto.</p>

      <h3>Consequências possíveis</h3>
      <p>A validação direta pelo Telegram pode trazer maior estabilidade e segurança à rede TON, além de abrir caminho para novos recursos integrados ao mensageiro. Com mais de 900 milhões de usuários ativos, o Telegram tem potencial para levar adoção cripto a uma escala sem precedentes.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A decisão do Telegram marca um momento importante para a adoção em massa de criptomoedas. Ter centenas de milhões de usuários com acesso potencial a serviços financeiros descentralizados dentro de um mensageiro que já usam diariamente elimina uma das maiores barreiras de entrada no mercado cripto: a complexidade técnica. O TON se posiciona como uma das blockchains mais promissoras para aplicações reais no curto prazo.</p>
    `,
    comments: []
  },
  {
    id: 13,
    title: 'Produtos cripto registram 5ª semana consecutiva de influxos com US$ 4 bilhões',
    excerpt: 'ETPs de criptomoedas acumulam US$ 4,02 bilhões em influxos, com recuperação forte na sexta-feira após vendas no meio da semana.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=ETPs+Cripto',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Os produtos de investimento em criptomoedas (ETPs) registraram a quinta semana consecutiva de influxos líquidos positivos, totalizando US$ 4,02 bilhões no período. O dado reforça a tendência de adoção institucional contínua, mesmo em meio à volatilidade de curto prazo.</p>

      <h3>O que aconteceu</h3>
      <p>Na última semana, os ETPs cripto enfrentaram um movimento de vendas no meio da semana, com US$ 619 milhões saindo dos produtos entre terça e quinta-feira. No entanto, a sexta-feira registrou uma recuperação expressiva de US$ 737 milhões, salvando a semana e estendendo a sequência positiva para cinco semanas.</p>

      <h3>Contexto</h3>
      <p>O fluxo consistente de capital institucional para ETPs cripto reflete um amadurecimento do mercado. Diferentemente dos ciclos anteriores, impulsionados principalmente por varejo, o atual movimento de alta conta com participação significativa de gestoras de ativos, fundos de pensão e tesourarias corporativas.</p>

      <h3>Impacto no mercado</h3>
      <p>A entrada contínua de capital institucional cria uma pressão de compra estável que contrasta com a volatilidade típica do mercado cripto. Esse fluxo reduz o impacto de vendas de curto prazo e fornece uma camada de suporte para os preços, especialmente do Bitcoin.</p>

      <h3>Consequências possíveis</h3>
      <p>Caso a tendência de influxos se mantenha, o mercado pode ver uma redução significativa da oferta circulante disponível nas exchanges, amplificando o efeito de qualquer movimento de alta. A continuidade desse fluxo também valida o argumento de que o mercado cripto está se consolidando como uma classe de ativos legítima para investidores institucionais.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Cinco semanas seguidas de influxos é um sinal claro de que o capital institucional não é mais um experimento no mercado cripto — é uma tendência estrutural. Mesmo com eventos de venda pontuais, a recuperação rápida mostra que há demanda reprimida significativa. O cenário se alinha com a tese de que o Bitcoin e o mercado cripto estão em um processo de maturação que tende a reduzir a volatilidade extrema ao longo do tempo.</p>
    `,
    comments: []
  },
  {
    id: 14,
    title: 'Bitcoin busca suporte nos US$ 80 mil em meio a tensões geopolíticas',
    excerpt: 'Após volatilidade causada por eventos geopolíticos, BTC busca se firmar acima dos US$ 80 mil com indicadores técnicos mistos.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+80k',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin enfrentou nova onda de volatilidade nesta semana, oscilando em torno dos US$ 80 mil em meio a tensões geopolíticas envolvendo o Irã e seus efeitos sobre os mercados globais. A criptomoeda chegou a recuar, mas se recuperou rapidamente, demonstrando resiliência.</p>

      <h3>O que aconteceu</h3>
      <p>Eventos geopolíticos inesperados abalaram os mercados globais, e o Bitcoin não ficou imune. A criptomoeda chegou a testar regiões abaixo dos US$ 80 mil antes de se recuperar, em um movimento que lembrou os padrões de volatilidade observados em períodos de incerteza geopolítica no passado.</p>

      <h3>Contexto</h3>
      <p>Historicamente, o Bitcoin tem se comportado de forma ambígua em momentos de tensão geopolítica. Em alguns eventos, atuou como proteção (hedge); em outros, como ativo de risco, caindo junto com os mercados tradicionais. Desta vez, a recuperação rápida sugere que a tese de proteção está ganhando força entre investidores.</p>

      <blockquote>A volatilidade geopolítica é temporária, mas a escassez do Bitcoin é permanente. Investidores que entendem isso usam quedas para acumular. — Análise BTC Ancap News</blockquote>

      <h3>Impacto no mercado</h3>
      <p>Apesar da turbulência, o Bitcoin conseguiu se manter acima dos US$ 80 mil, um nível psicologicamente importante. O fato de a criptomoeda ter se recuperado rapidamente das quedas indica que há demanda sólida atuando como suporte nessa região de preços.</p>

      <h3>Consequências possíveis</h3>
      <p>Se o Bitcoin conseguir transformar os US$ 80 mil em suporte sólido, o caminho para testar US$ 85 mil e, posteriormente, US$ 95 mil fica mais claro. Por outro lado, novos eventos geopolíticos podem trazer volatilidade adicional de curto prazo, mas a tendência estrutural de acumulação institucional permanece intacta.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A recuperação rápida do Bitcoin após o susto geopolítico reforça a narrativa de que ele está se consolidando como um ativo de reserva digital. Quedas pontuais por eventos externos têm sido compradas agressivamente, o que é um sinal otimista de médio prazo. O nível dos US$ 80 mil agora funciona como referência crucial: consolidado acima dele, o mercado pode mirar patamares mais altos com confiança.</p>
    `,
    comments: []
  },
  {
    id: 15,
    title: 'Mineração de Bitcoin atrai investimentos com alta da lucratividade',
    excerpt: 'Com Bitcoin acima dos US$ 80 mil, mineradores aumentam receita e expandem operações, sinalizando confiança no pós-halving.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f39c12/1a1a1a?text=Minera%C3%A7%C3%A3o+BTC',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A lucratividade da mineração de Bitcoin voltou a patamares atrativos com o preço do BTC acima dos US$ 80 mil, estimulando novos investimentos em infraestrutura e equipamentos. O movimento marca uma recuperação significativa após o período de ajuste pós-halving.</p>

      <h3>O que aconteceu</h3>
      <p>Com o Bitcoin operando consistentemente acima dos US$ 80 mil, os mineradores viram suas margens de lucro se expandirem significativamente. Dados de rede mostram que o hashprice (receita estimada por unidade de poder computacional) se recuperou, incentivando a expansão da capacidade instalada e a compra de novos equipamentos ASIC.</p>

      <h3>Contexto</h3>
      <p>O halving de 2024 reduziu pela metade a emissão de novos Bitcoins, comprimindo as margens dos mineradores menos eficientes. Muitos foram forçados a desligar equipamentos antigos e buscar operações com custo de energia mais baixo. A alta do preço do BTC agora compensa essa redução na emissão, tornando a mineração novamente lucrativa mesmo para operadores de médio porte.</p>

      <h3>Impacto no mercado</h3>
      <p>Mineradores mais lucrativos tendem a vender menos BTC no mercado aberto para cobrir custos operacionais, reduzindo a pressão vendedora. Além disso, o aumento da taxa de hash fortalece a segurança da rede Bitcoin, um sinal positivo para investidores institucionais que monitoram esses indicadores.</p>

      <h3>Consequências possíveis</h3>
      <p>Se o preço do Bitcoin se mantiver nessa faixa, espera-se um ciclo virtuoso: mais investimento em mineração → maior segurança da rede → mais confiança institucional → maior demanda → preço sustentado. Esse círculo virtuoso é um dos mecanismos mais poderosos da economia do Bitcoin.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A recuperação da lucratividade da mineração é um sinal de que o mercado está absorvendo com sucesso os efeitos do halving. O ajuste pós-halving foi doloroso para mineradores ineficientes, mas a alta do preço do Bitcoin está validando a tese de que a redução da emissão, combinada com demanda crescente, cria um ambiente econômico sustentável para a mineração. Este é um termômetro importante para a saúde de longo prazo da rede.</p>
    `,
    comments: []
  },
  {
    id: 16,
    title: 'Bitcoin atinge US$ 81 mil com sequência recorde de funding rate negativo',
    excerpt: 'BTC sobe 2,9% enquanto taxas de funding perpetuas negativas por 66 dias consecutivos sinalizam hedge institucional, não baixista — e dados históricos apontam alta.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+%2481K',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin atingiu US$ 81.261 nesta segunda-feira (5 de maio de 2026), registrando alta de 2,9% nas últimas 24 horas. O movimento, no entanto, vem acompanhado de um fenômeno incomum: as taxas de funding dos contratos perpétuos de Bitcoin permanecem negativas há 66 dias consecutivos — a sequência mais longa da década.</p>

      <h3>O que aconteceu</h3>
      <p>Dados on-chain mostram que os shorts estão pagando aproximadamente 12% de custo anualizado para manter posições, mas analistas alertam que isso não reflete baixista generalizado do varejo. Segundo Derek Lim, da gestora Caladan, a taxa negativa persistente "reflete a oferta de inventário curto de mesas delta-neutral, e não direcional baixista".</p>

      <p>Andri Fauzan Adziima, da exchange Bitrue, complementa que os ETFs de Bitcoin à vista nos EUA registraram cerca de US$ 2,44 bilhões em influxos em abril — o mês mais forte de 2026 — enquanto instituições acumulam BTC no mercado à vista e vendem futuros para gerenciar risco.</p>

      <h3>Contexto</h3>
      <p>Os fluxos institucionais identificados incluem: fundos de hedge vendendo BTC durante resgates, traders de basis comprando ações da Strategy enquanto vendem futuros perpétuos de Bitcoin, e mineradores fazendo hedge de seus tesouros de BTC enquanto migram para computação de IA.</p>

      <p>Vetle Lund, da K33 Research, analisou seis regimes comparáveis de funding negativo desde 2018. Em todos os seis casos, o Bitcoin produziu retornos positivos em 90 dias, com taxas de acerto entre 83% e 96%, contra 55% a 75% em entradas arbitrárias. O drawdown máximo médio caiu de 16% para apenas 5% nesses cenários.</p>

      <h3>Impacto no mercado</h3>
      <p>Analistas apontam US$ 82 mil como nível crítico, coincidindo com a média exponencial de 200 dias. Matthew Pinnock, da Altura DeFi, afirma que se os shorts forem forçados a desfazer posições, "o funding se torna positivo e o Bitcoin pode se mover fortemente em direção a US$ 100 mil em um squeeze". Se a demanda à vista esfriar primeiro, ele projeta consolidação entre US$ 70 mil e US$ 75 mil.</p>

      <p>Mercados de predição dão 84% de chance de o Bitcoin testar US$ 84 mil nos próximos movimentos.</p>

      <h3>Consequências possíveis</h3>
      <p>O cenário atual é incomum: funding negativo geralmente é associado a quedas prolongadas, mas os influxos em ETFs contam uma história diferente. Se a tese institucional estiver correta, a liquidação forçada de shorts pode impulsionar o Bitcoin a novos patamares no médio prazo.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O funding rate negativo prolongado não é um sinal de fraqueza quando analisado em conjunto com os influxos institucionais. O que parece baixista na superfície é, na verdade, um reflexo da sofisticação crescente do mercado: instituições acumulam BTC no à vista enquanto fazem hedge nos futuros. Esse padrão, historicamente, precede movimentos expressivos de alta quando os shorts são forçados a cobrir. O nível dos US$ 82 mil será o termômetro para o próximo grande movimento.</p>
    `,
    comments: []
  },
  {
    id: 17,
    title: 'Coinbase demite 14% da equipe em meio a mercado baixista e avanço da IA',
    excerpt: 'CEO Brian Armstrong anuncia corte de 14% dos funcionários, elimina cargos puramente gerenciais e aposta em times "nativos de IA" com estrutura organizacional enxuta.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Coinbase+Demite',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Coinbase anunciou nesta segunda-feira (5 de maio de 2026) a demissão de 14% de sua força de trabalho. O CEO Brian Armstrong comunicou a decisão em e-mail interno publicado também em sua conta no X, citando o mercado baixista de criptomoedas e a transformação impulsionada por inteligência artificial como motivos principais.</p>

      <h3>O que aconteceu</h3>
      <p>Armstrong afirmou que "estamos em um mercado baixista e precisamos ajustar nossa estrutura de custos agora". Ele também destacou que engenheiros da empresa "usam IA para entregar em dias o que antes levava semanas com times inteiros". A exchange está se reestruturando para funcionar como "uma inteligência, com humanos em volta", nas palavras do CEO.</p>

      <p>A organização será achatada para no máximo cinco camadas hierárquicas abaixo do CEO e COO. Cargos puramente gerenciais foram eliminados — todos os líderes precisam permanecer contribuidores individuais. As contratações futuras serão focadas em "pods nativos de IA", incluindo times experimentais de uma única pessoa responsável por engenharia, design e produto simultaneamente.</p>

      <h3>Contexto</h3>
      <p>O movimento da Coinbase não é isolado. O Goldman Sachs estima que a substituição por IA está eliminando cerca de 25 mil empregos americanos por mês, com perda líquida de aproximadamente 16 mil posições mensalmente. Grandes empresas de tecnologia também reduziram quadros: Meta cortou 8 mil funcionários (10% da força de trabalho), Microsoft ofereceu buyouts a 7%, e a Block eliminou mais de 4 mil vagas.</p>

      <p>Semanas antes do anúncio, a Coinbase vinha testando agentes de IA modelados a partir do cofundador Fred Ehrsam e do ex-CTO Balaji Srinivasan. Armstrong já havia sinalizado que a empresa "provavelmente teria mais agentes do que funcionários humanos em breve".</p>

      <h3>Impacto no mercado</h3>
      <p>A demissão em massa reflete a pressão contínua sobre as exchanges de criptomoedas em um ciclo de mercado desafiador. A Coinbase, que já havia feito cortes anteriores durante o mercado baixista de 2022-2023, busca preservar caixa e eficiência operacional enquanto investe em automação.</p>

      <p>A severência para funcionários americanos inclui mínimo de 16 semanas de salário base mais duas semanas adicionais por ano de serviço, próximo vesting de equity, seis meses de COBRA e suporte extra para portadores de visto.</p>

      <h3>Consequências possíveis</h3>
      <p>O movimento da Coinbase pode estabelecer um precedente para outras exchanges e empresas do setor cripto. A integração agressiva de IA na operação pode reduzir custos estruturais de forma permanente, mas também levanta questões sobre o futuro do emprego no setor. Se o modelo de "times nativos de IA" provar ser eficaz, outras empresas devem seguir o mesmo caminho.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A Coinbase está antecipando uma tendência que deve atingir todo o setor de tecnologia. A combinação de mercado baixista prolongado com produtividade exponencial da IA está forçando empresas a repensar estruturas herdadas. Para o mercado cripto, a reação será ambígua: por um lado, cortes de custos sinalizam saúde financeira; por outro, indicam que o mercado baixista pode ser mais longo do que muitos esperam. O foco deve estar na capacidade da empresa de manter operações e conformidade regulatória durante a transição.</p>
    `,
    comments: []
  },
  {
    id: 18,
    title: 'TON dispara 36% após Telegram assumir controle da TON Foundation',
    excerpt: 'Pavel Durov anuncia que Telegram se torna o maior validador da rede TON, substitui a fundação e corta taxas da rede em seis vezes, gerando disparada no token.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0088cc/ffffff?text=+TON+Surge+',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O Toncoin (TON) disparou 36% nas últimas 24 horas, negociando a US$ 1,86, após Pavel Durov anunciar que o Telegram assumirá o controle operacional da The Open Network (TON), substituindo a TON Foundation. A notícia gerou euforia no mercado, mas analistas alertam para possível realização de lucros no curto prazo.</p>

      <h3>O que aconteceu</h3>
      <p>Durov anunciou que o Telegram se tornará o maior validador da blockchain TON. As taxas de transação já foram reduzidas em seis vezes, chegando a "quase zero", segundo o comunicado. A promessa inclui novo site, ferramentas para desenvolvedores e atualizações de performance nas próximas 2 a 3 semanas. O domínio ton.org agora exibe uma página indicando que é controlado pela "MTONGA", com expectativa de mudanças iminentes.</p>

      <h3>Contexto</h3>
      <p>A relação entre Telegram e TON sempre foi próxima, mas indireta — a fundação independente gerenciava o desenvolvimento enquanto o Telegram integrava a blockchain em seus produtos. A centralização agora coloca o desenvolvimento sob controle direto de Durov, o que pode acelerar decisões mas também levanta questões sobre descentralização.</p>

      <p>Os problemas legais de Durov foram amenizados recentemente: a justiça francesa suspendeu sua proibição de viagem em novembro passado, após sua prisão em Paris em agosto de 2024 sob acusações de cumplicidade em tráfico de drogas e falha na moderação de conteúdo ilegal. Seu passaporte foi devolvido em março, o que por si só impulsionou o TON em 29%.</p>

      <h3>Impacto no mercado</h3>
      <p>Apesar do salto de 36%, o TON ainda está 77% abaixo de sua máxima histórica de US$ 8,25, registrada em setembro de 2024. Illia Otychenko, da CEX.IO, classifica o movimento como "um pico narrativo de estágio inicial, não uma reprecificação fundamental completa". Ele aponta US$ 2 como nível de resistência chave e alerta que o RSI diário está sobrecomprado.</p>

      <p>Ben Caselin, da VALR, compara o evento ao upgrade Dencun do Ethereum, onde as taxas caíram significativamente mas os ganhos de preço não se sustentaram: "O mercado frequentemente compra no anúncio e realiza lucros na execução".</p>

      <p>No ecossistema TON, as memecoins dispararam ainda mais: $DOGS subiu mais de 100% e $UTYA avançou mais de 140% em 24 horas, com o market cap combinado de memecoins da TON atingindo US$ 156 milhões.</p>

      <h3>Consequências possíveis</h3>
      <p>Se as promessas de ferramentas e performance forem cumpridas, a TON pode atrair mais desenvolvedores e usuários. No entanto, a centralização do controle no Telegram contradiz o ethos descentralizado das blockchains. Taxas mais baixas podem impulsionar adoção, mas Otychenko adverte que isso também pode "erodir a captura direta de valor no nível do token". O mercado observa se o preço conseguirá se sustentar acima de US$ 2 após a euforia inicial.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O movimento da TON é interessante sob a ótica da adoção: ter o Telegram como validador principal e provedor de liquidez pode acelerar a integração da blockchain com os mais de 900 milhões de usuários da plataforma. No entanto, a centralização é uma faca de dois gumes para investidores de criptomoedas que valorizam a descentralização. O ganho de curto prazo é real, mas a sustentabilidade desse modelo precisa ser testada. A resistência de US$ 2 será o primeiro grande teste para o token.</p>
    `,
    comments: []
  },
  {
    id: 19,
    title: 'Western Union lança stablecoin USDPT na Solana e mira 40 países',
    excerpt: 'Gigante de remessas de US$ 50 bilhões em receita entra no mercado cripto com stablecoin própria emitida pelo Anchorage Digital Bank, mirando consumidores em mais de 40 países.',
    category: 'cripto',
    categoryLabel: 'Cripto',
    image: 'https://placehold.co/800x400/0055aa/ffffff?text=Western+Union',
    author: 'Redação BTC Ancap News',
    date: '4 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Western Union, gigante global de remessas com mais de US$ 50 bilhões em receita anual, deu um passo histórico no mercado de criptomoedas ao lançar sua própria stablecoin, a USDPT, na blockchain Solana. A stablecoin é emitida pelo Anchorage Digital Bank N.A., banco de ativos digitais regulado nos Estados Unidos.</p>

      <h3>O que aconteceu</h3>
      <p>A USDPT é uma stablecoin atrelada ao dólar americano, lançada na rede Solana. A emissão é feita pelo Anchorage Digital Bank, que atua como banco custodial e emissor regulado. O movimento representa a primeira incursão direta da Western Union no mercado de stablecoins, sinalizando uma mudança estratégica significativa para a empresa de 170 anos de idade.</p>

      <p>O produto de consumo associado, chamado "Stable by Western Union", deve ser lançado em mais de 40 países ainda em 2026, aproveitando a infraestrutura global existente da empresa e sua base de usuários estabelecida.</p>

      <h3>Contexto</h3>
      <p>A Western Union atende mais de 150 milhões de pessoas em todo o mundo, processando centenas de bilhões de dólares em remessas anualmente. O mercado de remessas globais movimenta mais de US$ 800 bilhões por ano, com taxas médias ainda elevadas — especialmente para trabalhadores que enviam dinheiro de países desenvolvidos para nações em desenvolvimento.</p>

      <p>A escolha da Solana como blockchain base é significativa: a rede oferece transações de baixo custo e alta velocidade, características essenciais para remessas internacionais. A emissão por um banco regulado (Anchorage Digital) também confere credibilidade regulatória que falta a muitas stablecoins concorrentes.</p>

      <h3>Impacto no mercado</h3>
      <p>A entrada da Western Union no mercado de stablecoins valida a tese de que as blockchains públicas podem revolucionar o setor de remessas internacionais. Diferentemente de sistemas tradicionais que podem levar dias para liquidar transferências transfronteiriças com taxas de 5% a 10%, stablecoins como a USDPT podem reduzir custos para frações de centavo e liquidar em segundos.</p>

      <p>Para a Solana, ter uma stablecoin emitida por um banco regulado e vinculada a uma marca global como a Western Union é um selo de aprovação institucional. A medida pode atrair mais empresas tradicionais a considerar a blockchain para aplicações financeiras reais.</p>

      <h3>Consequências possíveis</h3>
      <p>Se o "Stable by Western Union" for bem-sucedido, outras grandes empresas de remessas — como MoneyGram e PayPal — podem ser forçadas a acelerar seus próprios planos de stablecoins. A regulamentação será um fator determinante: a emissão bancária via Anchorage Digital pode servir de modelo para outras empresas que buscam entrar no setor com segurança jurídica. O impacto nas taxas de remessa tradicionais pode ser disruptivo, beneficiando diretamente os consumidores finais, especialmente trabalhadores imigrantes que dependem de remessas internacionais.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A entrada da Western Union no mercado de stablecoins é um marco que não deve ser subestimado. Uma empresa centenária com alcance global adotando blockchain não como experimento, mas como produto central de crescimento, é um sinal claro de amadurecimento do setor. A escolha da Solana, combinada com emissão bancária regulada, aponta para o futuro das finanças: infraestrutura descentralizada combinada com conformidade regulatória. Para o mercado cripto, é mais uma ponte sólida entre o sistema financeiro tradicional e o mundo descentralizado — e um sinal de que a adoção institucional está se acelerando em velocidade real.</p>
    `,
    comments: []
  },
  {
    id: 20,
    title: 'Strive atinge 15.000 BTC em tesouraria e segue estratégia corporativa de acumulação',
    excerpt: 'Empresa de Matt Cole ultrapassa 15 mil Bitcoins em tesouraria com compra recente de 444 BTC por US$ 33,9 milhões, seguindo modelo de Strategy focado em crescimento de BTC por ação.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Strive+15K+BTC',
    author: 'Redação BTC Ancap News',
    date: '4 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Strive, Inc., empresa liderada pelo CEO Matt Cole, anunciou que ultrapassou a marca de 15.000 Bitcoins em sua tesouraria corporativa. A empresa realizou uma compra adicional de 444 BTC por US$ 33,9 milhões, consolidando sua posição como uma das maiores detentoras corporativas de Bitcoin do mundo.</p>

      <h3>O que aconteceu</h3>
      <p>A Strive, que segue uma estratégia de tesouraria focada em Bitcoin similar à da Strategy (antiga MicroStrategy), agora detém mais de 15.000 BTC. A abordagem da empresa prioriza o "crescimento em Bitcoin por ação", métrica que se tornou popular entre empresas que adotam o Bitcoin como ativo de reserva primário.</p>

      <p>A compra mais recente de 444 BTC foi feita ao preço médio de aproximadamente US$ 76.351 por Bitcoin, totalizando US$ 33,9 milhões. A empresa não divulgou o custo médio total de suas participações, mas a marca de 15.000 BTC representa, aos preços atuais, mais de US$ 1,2 bilhão em valor.</p>

      <h3>Contexto</h3>
      <p>A Strive foi fundada por Vivek Ramaswamy, empresário e ex-candidato presidencial americano, com a missão de "promover o capitalismo de stakeholders" e desafiar o capitalismo woke de Wall Street. A empresa entrou no mercado de Bitcoin sob a liderança de Matt Cole, que assumiu como CEO e intensificou a estratégia de acumulação de BTC.</p>

      <p>O movimento faz parte de uma tendência maior de empresas adotando Bitcoin como ativo de tesouraria, inspiradas pelo sucesso da Strategy de Michael Saylor. Empresas como Block (Square), Coinbase, Metaplanet e Semler Scientific também mantêm Bitcoin em seus balanços, mas a Strategy continua sendo a maior detentora corporativa com mais de 500.000 BTC.</p>

      <h3>Impacto no mercado</h3>
      <p>Cada nova compra corporativa de Bitcoin reduz a oferta circulante disponível nas exchanges, criando pressão de compra estrutural. A acumulação por empresas como a Strive — que compram e seguram — contrasta com o comportamento especulativo de curto prazo e contribui para a tese de escassez do Bitcoin.</p>

      <p>A marca de 15.000 BTC coloca a Strive entre as 10 maiores detentoras corporativas públicas de Bitcoin do mundo, um feito notável para uma empresa relativamente nova no espaço. O compromisso com a métrica de "crescimento em BTC por ação" sugere que a empresa continuará comprando em correções de preço.</p>

      <h3>Consequências possíveis</h3>
      <p>A contínua acumulação corporativa de Bitcoin pode levar a um aperto de oferta significativo, especialmente se combinada com os influxos dos ETFs à vista. Mais empresas devem seguir o modelo de tesouraria em Bitcoin, especialmente se o preço continuar mostrando resiliência acima dos US$ 80 mil. No entanto, o risco de concentração em um ativo volátil permanece, e empresas excessivamente alavancadas em BTC podem enfrentar pressão em cenários de queda prolongada.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A Strive representa um caso interessante de adoção corporativa de Bitcoin: uma empresa com missão explicitamente libertária e crítica ao establishment financeiro, usando o Bitcoin como ferramenta de tesouraria. A acumulação consistente reforça a tese de que o Bitcoin está se consolidando como ativo de reserva corporativa legítimo. Se 15.000 BTC é o marco atual, a pergunta é: quantas empresas estão silenciosamente construindo posições similares sem divulgar? O efeito cumulativo dessa demanda corporativa, somada aos ETFs, continua sendo o maior motor estrutural de alta do Bitcoin no médio prazo.</p>
    `,
    comments: []
  },
  {
    id: 21,
    title: 'DTCC prepara lançamento de tokenização com BlackRock e Goldman Sachs para julho',
    excerpt: 'Câmara de compensação central dos EUA inicia pilotos de negociação de títulos tokenizados em julho com apoio dos maiores bancos de Wall Street, rumo ao lançamento completo em outubro.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/1a5276/ffffff?text=DTCC+Token',
    author: 'Redação BTC Ancap News',
    date: '4 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>A Depository Trust & Clearing Corporation (DTCC), a câmara de compensação central que processa trilhões de dólares em transações de valores mobiliários nos Estados Unidos, está se preparando para lançar um serviço de negociação de títulos tokenizados em blockchain. O serviço tem o apoio de gigantes como BlackRock e Goldman Sachs, com pilotos programados para julho e lançamento completo previsto para outubro de 2026.</p>

      <h3>O que aconteceu</h3>
      <p>A DTCC revelou planos para lançar um serviço de tokenização que permitirá a negociação de versões digitais de títulos tradicionais em infraestrutura de blockchain. BlackRock (maior gestora de ativos do mundo, com mais de US$ 11 trilhões sob gestão) e Goldman Sachs estão entre as instituições financeiras que apoiam a iniciativa.</p>

      <p>Pilotos começam em julho de 2026, com uma ampla gama de firmas financeiras participantes. O lançamento completo está programado para outubro, marcando a primeira vez que a infraestrutura central de liquidação de títulos dos EUA adota blockchain de forma oficial e operacional.</p>

      <h3>Contexto</h3>
      <p>A DTCC processa a vasta maioria das transações de títulos nos Estados Unidos, incluindo ações, títulos de dívida e fundos mútuos. Sua adoção de tecnologia blockchain para tokenização representa uma validação sem precedentes da tecnologia por parte do establishment financeiro tradicional.</p>

      <p>O movimento segue uma tendência global de tokenização de ativos do mundo real (RWA). Grandes bancos e gestoras de ativos têm explorado a tokenização como forma de reduzir custos operacionais, aumentar a velocidade de liquidação e permitir a propriedade fracionária de ativos antes inacessíveis. Projetos como o USDC, a BlackRock BUIDL e Ondo Finance já demonstraram o potencial da tokenização de ativos do mundo real em blockchains públicas.</p>

      <h3>Impacto no mercado</h3>
      <p>A entrada da DTCC no mercado de tokenização pode acelerar dramaticamente a adoção de blockchain no setor financeiro tradicional. Diferentemente de iniciativas isoladas de bancos individuais, a participação da câmara de compensação central cria uma infraestrutura compartilhada que todo o mercado pode usar.</p>

      <p>Para o mercado cripto, a tokenização de ativos tradicionais representa um dos maiores vetores de crescimento. O mercado de RWAs tokenizados pode chegar a US$ 16 trilhões até 2030, segundo projeções de consultorias como a BCG e 21.co. A validação da DTCC pode acelerar esse cronograma.</p>

      <h3>Consequências possíveis</h3>
      <p>Se bem-sucedida, a iniciativa da DTCC pode criar um padrão de mercado para títulos tokenizados, reduzindo a fragmentação entre diferentes plataformas. Os impactos incluem: liquidação mais rápida (potencialmente T+0 em vez de T+2), redução de custos com intermediários, maior transparência e abertura para mercados secundários de ativos ilíquidos. No entanto, a centralização da infraestrutura da DTCC contrasta com o ethos descentralizado das blockchains públicas, e o modelo de governança do sistema ainda precisa ser definido.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Ver a DTCC — a espinha dorsal do mercado de títulos americano — adotando blockchain não é apenas mais uma parceria corporativa. É a infraestrutura crítica do sistema financeiro tradicional reconhecendo que a tecnologia de livro-razão distribuído oferece eficiências reais. Isso não significa necessariamente alta do Bitcoin no curto prazo, mas valida a tese mais ampla de que a tecnologia blockchain veio para ficar. O mercado de tokenização de RWAs pode ser o maior vetor de crescimento do setor cripto nos próximos anos — e a DTCC está colocando Wall Street no centro desse movimento.</p>
    `,
    comments: []
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
  'BTC busca suporte nos US$ 80 mil',
  'Influxos institucionais recordes',
  'Mineração de BTC lucrativa',
  'Acumulação de BTC por holders',
  'Telegram validador da TON',
  'ETF de Bitcoin',
  'Mercado cripto resiliente',
  'Escola Austríaca',
];

// Hero banner articles indexes
const FEATURED_ARTICLES = ARTICLES.filter(a => a.featured);
const HERO_MAIN = FEATURED_ARTICLES[0];
const HERO_SIDE = FEATURED_ARTICLES.slice(1, 4);

// Articles per page (news listing)
const ARTICLES_PER_PAGE = 5;

// Live news (desativado: site usa apenas conteúdo original)

// 2. NAVEGAÇÃO SPA
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

// 3. RENDER — HOME
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
      <img class="hero__side-img" src="${a.image}" alt="${a.title}" loading="lazy" width="90" height="70" />
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
      <img class="featured-item__img" src="${a.image}" alt="${a.title}" loading="lazy" width="280" height="200" />
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
      <img class="news-card__img" src="${article.image}" alt="${article.title}" loading="lazy" width="400" height="190" />
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

// 4. RENDER — NEWS
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

// 5. RENDER — ARTIGO
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
      <img class="article__img" src="${article.image}" alt="${article.title}" width="780" height="420" />

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

// 6. COMENTÁRIOS
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

// 7. BITCOIN PRICE (CoinGecko)
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
      // fallback silencioso para fallback price
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

// 8. BUSCA
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

// 9. EVENT LISTENERS & INIT
function init() {
  renderHome();

  // BTC Widget
  initBtcWidget();

  // BTC Simulator
  initSimulator();

  // Live News — usa artigos do próprio BTC Ancap News
  // initLiveNews removido: o site exibe apenas conteúdo original

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

  // Charts on resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', () => {
    if (currentPage !== 'home') return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawBtcChart, 250);
  });
}

function closeMobileMenu() {
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('navMenu').classList.remove('open');
}

// 10. SIMULADOR BTC
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

// 11. NOTÍCIAS AO VIVO — desativado

// Start
document.addEventListener('DOMContentLoaded', init);
