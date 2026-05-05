/* BTC Ancap News — SPA, dados, busca, simulador BTC, comentários */

// 1. DADOS — Artigos
const ARTICLES = [
  {
    id: 1,
    title: 'Bitcoin ultrapassa US$ 83 mil e confirma novo recorde: o rali tem fundamento?',
    excerpt: 'Com BTC negociando acima de US$ 83 mil, analistas apontam choque de oferta pós-halving e demanda institucional como motores do movimento. Projeções chegam a US$ 200 mil.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+%2483K',
    author: 'Lucas Mendes',
    date: '30 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin atingiu nesta semana a marca de US$ 83.270, renovando seu recorde absoluto e consolidando um rali que já acumula mais de 60% de valorização no ano. Diferentemente de movimentos anteriores, o atual ciclo de alta é sustentado por fundamentos sólidos que vão muito além do entusiasmo especulativo.</p>

      <h3>Choque de oferta pós-halving</h3>
      <p>O halving de 2024 reduziu a emissão diária de novos Bitcoins de 900 para 450 unidades. Combinado com a demanda crescente dos ETFs à vista, que compram diariamente o equivalente a várias vezes a produção de novos BTC, o mercado enfrenta um aperto de oferta sem precedentes. Dados on-chain mostram que o saldo de Bitcoin nas exchanges atingiu a menor marca em cinco anos, com menos de 1,8 milhão de BTC disponíveis para negociação.</p>

      <blockquote>Estamos vivendo o choque de oferta mais severo da história do Bitcoin. A cada dia, os ETFs absorvem mais BTC do que os mineradores produzem. Isso é matemática básica de oferta e demanda. — Relatório Glassnode</blockquote>

      <h3>Demanda institucional sem precedentes</h3>
      <p>Os ETFs de Bitcoin à vista listados nos Estados Unidos acumulam mais de US$ 50 bilhões em ativos sob gestão, superando as estimativas mais otimistas do lançamento. Gestoras como BlackRock, Fidelity e Ark Invest continuam registrando influxos líquidos positivos, com destaque para semanas em que mais de US$ 2 bilhões entraram nos produtos.</p>

      <p>Além dos ETFs, tesourarias corporativas seguem acumulando BTC. A Strategy (antiga MicroStrategy) agora detém mais de 250 mil BTC, e novas empresas como Strive, KULR e Metaplanet continuam adicionando Bitcoin a seus balanços.</p>

      <h3>Perspectivas para os próximos meses</h3>
      <p>Analistas técnicos apontam que o Bitcoin encontrou suporte sólido acima de US$ 78 mil e agora mira a resistência psicológica dos US$ 100 mil. O presidente da Fidelity, Jurrien Timmer, afirmou recentemente que o Bitcoin ainda está "subvalorizado" em relação às suas métricas de rede e adoção. Projeções para o topo do ciclo variam de US$ 180 mil a US$ 250 mil, com a maioria dos modelos sugerindo que o pico deve ocorrer entre o segundo e o terceiro trimestre de 2026.</p>

      <p>Para o investidor de longo prazo, a mensagem permanece a mesma: tempo no mercado supera timing do mercado. Cada correção dentro deste ciclo tem sido uma oportunidade de acumulação para aqueles que entendem os fundamentos do Bitcoin.</p>
    `,
    comments: [
      { author: 'Carlos S.', date: '30 mai 2026', text: 'Eu avisei! Desde 2020 que venho dizendo que Bitcoin chegaria a 6 dígitos. HODL!' },
      { author: 'Ana L.', date: '30 mai 2026', text: 'Ainda acho que tem muito espaço para crescer. A adoção institucional está só começando.' },
      { author: 'Pedro R.', date: '29 mai 2026', text: 'Comprei meu primeiro Bitcoin em 2019. Melhor decisão financeira da minha vida.' },
    ]
  },
  {
    id: 2,
    title: 'Autocustódia de Bitcoin atinge recorde: 70% do supply está fora de exchanges',
    excerpt: 'Mais de 14,7 milhões de BTC estão em carteiras privadas, o maior nível da história. Movimento reflete amadurecimento dos investidores e busca por soberania financeira.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Autocust%C3%B3dia+BTC',
    author: 'Rafael Torres',
    date: '29 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Um marco histórico para a soberania financeira foi atingido: mais de 70% de todo o Bitcoin em circulação — aproximadamente 14,7 milhões de BTC — está agora fora de exchanges centralizadas, armazenado em carteiras privadas sob controle direto dos detentores. O movimento representa a maior transferência de autocustódia já registrada.</p>

      <h3>O que significa custodiar seus próprios Bitcoins</h3>
      <p>Autocustódia significa deter o controle total das chaves privadas de sua carteira de Bitcoin. Diferentemente de deixar saldos em exchanges ou custodians terceirizados, a autocustódia garante que nenhuma contraparte — seja governo, exchange ou banco — possa congelar ou confiscar seus Bitcoins. O princípio fundamental é: "not your keys, not your coins" (não são suas chaves, não são suas moedas).</p>

      <blockquote>A autocustódia de Bitcoin não é apenas uma questão de segurança — é um ato político. É a afirmação prática de que você confia em si mesmo mais do que em qualquer instituição. — Andreas M. Antonopoulos</blockquote>

      <h3>Por que as pessoas estão tirando BTC das exchanges</h3>
      <p>Vários fatores explicam esse movimento recorde de saída de exchanges. O colapso da FTX em 2022 ainda ecoa na memória dos investidores, que aprenderam da pior forma possível que manter grandes quantidades em exchanges envolve risco de contraparte. O amadurecimento das soluções de autocustódia — como hardware wallets da Ledger e Trezor, além de carteiras mobile como Phoenix e Breez na Lightning Network — tornou o processo mais acessível que nunca.</p>

      <p>Além disso, o crescimento do ecossistema DeFi nativo do Bitcoin, como o protocolo RGB e sidechains como a Liquid, oferece utilidade para Bitcoins mantidos em autocustódia, eliminando a necessidade de depositar em exchanges para obter rendimentos.</p>

      <h3>Impacto no mercado</h3>
      <p>A redução da oferta disponível em exchanges contribui diretamente para o choque de oferta que impulsiona o preço do Bitcoin. Com menos BTC disponíveis para negociação imediata, movimentos de compra têm impacto maior sobre o preço. Historicamente, períodos de forte saída de exchanges precederam as maiores altas do Bitcoin.</p>

      <p>Para o ecossistema, a autocustódia em massa também torna a rede mais resiliente: quanto mais distribuídos os Bitcoins, mais difícil se torna qualquer tentativa de ataque ou regulação adversa. A descentralização não é apenas um ideal filosófico — é a principal vantagem competitiva do Bitcoin sobre sistemas financeiros tradicionais.</p>
    `,
    comments: [
      { author: 'Julio M.', date: '29 mai 2026', text: 'Autocustódia é o caminho. Não abro mão das minhas chaves desde 2021.' },
    ]
  },
  {
    id: 3,
    title: 'ETFs de Bitcoin à vista quebram recordes: US$ 50 bilhões em AUM e demanda crescente',
    excerpt: 'Produto financeiro mais bem-sucedido da história de Wall Street segue atraindo capital institucional e já movimenta mais de US$ 50 bilhões em ativos sob gestão.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=ETF+Bitcoin',
    author: 'Gabriela Costa',
    date: '28 mai 2026',
    readTime: '7 min',
    featured: true,
    body: `
      <p>Os ETFs de Bitcoin à vista listados nos Estados Unidos atingiram a marca histórica de US$ 50 bilhões em ativos sob gestão (AUM), consolidando-se como o lançamento de ETF mais bem-sucedido da história de Wall Street. O fluxo de capital institucional não mostra sinais de desaceleração, com entradas líquidas semanais frequentemente superiores a US$ 1 bilhão.</p>

      <h3>Um sucesso sem precedentes</h3>
      <p>Quando a SEC aprovou os primeiros ETFs de Bitcoin à vista em janeiro de 2024, as projeções mais otimistas estimavam entre US$ 5 bilhões e US$ 10 bilhões no primeiro ano. O resultado real superou todas as expectativas por uma margem esmagadora. Em pouco mais de dois anos, os ETFs de Bitcoin acumulam mais de US$ 50 bilhões — um recorde absoluto que supera até mesmo o lendário QQQ (ETF do Nasdaq) em velocidade de adoção.</p>

      <blockquote>Nunca vimos nada parecido em 30 anos de mercado financeiro. A demanda reprimida por exposição a Bitcoin era imensa, e os ETFs foram a chave que destrancou esse fluxo. — Analista de ETFs da Bloomberg</blockquote>

      <h3>Quem está comprando</h3>
      <p>O perfil dos compradores é variado: desde gestoras multibilionárias como BlackRock e Fidelity até consultores financeiros independentes e investidores de varejo. Dados de participações institucionais revelam que fundos de pensão, dotação de universidades e seguradoras estão entre os detentores, sugerindo que o Bitcoin está sendo integrado a alocações estratégicas de longo prazo.</p>

      <p>O ETF da BlackRock (IBIT) lidera o mercado com mais de US$ 18 bilhões em AUM, seguido pelo FBTC da Fidelity com US$ 12 bilhões. A competição entre os emissores tem reduzido as taxas de administração para tão baixo quanto 0,12% ao ano — comparável a ETFs de índice tradicionais.</p>

      <h3>Impacto no mercado de Bitcoin</h3>
      <p>A existência dos ETFs criou um canal de demanda estrutural que o mercado de Bitcoin nunca havia experimentado. Diferentemente de ciclos anteriores, onde a demanda era puxada por especulação varejista, os ETFs representam capital paciente e institucional. Analistas estimam que os ETFs já absorveram o equivalente a mais de 85% de toda a emissão de novos Bitcoins desde o halving de 2024, exacerbando o choque de oferta.</p>

      <p>Para o investidor brasileiro, existem alternativas como o ETF BITH11 da Hashdex, listado na B3, e fundos de índice internacionais acessíveis através de contas em corretoras globais. A tendência é de que a oferta de produtos regulados continue se expandindo, tornando o Bitcoin cada vez mais acessível ao investidor tradicional.</p>
    `,
    comments: [
      { author: 'Tiago N.', date: '28 mai 2026', text: 'ETF foi a porta de entrada para minha família. Agora todo mundo quer Bitcoin.' },
      { author: 'Marina F.', date: '28 mai 2026', text: 'BlackRock comprando Bitcoin é algo que ninguém previa há 5 anos.' },
    ]
  },
  {
    id: 4,
    title: 'Bitcoin mining com energia renovável atinge 60% da matriz energética global',
    excerpt: 'Levantamento revela que a mineração de Bitcoin utiliza proporção de energia limpa superior a países como Alemanha e Reino Unido, silenciando críticas ambientais.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Green+Mining',
    author: 'Lucas Mendes',
    date: '27 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>Um novo levantamento do Bitcoin Mining Council revela que a mineração de Bitcoin utiliza 60% de energia renovável em sua matriz global — superando países como Alemanha (52%), Reino Unido (42%) e Estados Unidos (22%) em proporção de fontes limpas. O dado enterra de vez o argumento de que o Bitcoin é um "vilão ambiental".</p>

      <h3>Como a mineração se tornou verde</h3>
      <p>A narrativa de que o Bitcoin consome "energia demais" sempre ignorou um fato crucial: mineradores são incentivados economicamente a buscar a energia mais barata disponível, que é frequentemente a energia renovável excedente. Hidrelétricas na China, energia geotérmica na Islândia, solar no Texas e gás natural queimado (flare gas) em campos de petróleo são fontes que, sem a mineração de Bitcoin, seriam simplesmente desperdiçadas.</p>

      <blockquote>Bitcoin é o comprador de último recurso para energia excedente. Mineradores podem se instalar em qualquer lugar do mundo e absorver energia que, de outra forma, seria descartada. Isso transforma a mineração em um complemento perfeito para redes de energia renovável. — Bitcoin Mining Council</blockquote>

      <h3>Inovações na matriz energética mineradora</h3>
      <p>O avanço da mineração renovável é impulsionado por diversas inovações. Nos Estados Unidos, mineradoras fecharam acordos com usinas solares e eólicas no Texas para absorver excedentes de produção durante picos de geração. Na Escandinávia, a energia hidrelétrica abundante é usada para alimentar data centers de mineração. Na África, startups estão testando mineração móvel em contêineres que se conectam a fontes de energia renovável em regiões off-grid.</p>

      <p>A mais recente inovação é o uso de mineração para estabilizar a rede elétrica. Empresas como a MARA Holdings operam como "consumidores flexíveis": quando a demanda de energia da rede aumenta, elas desligam seus equipamentos voluntariamente, liberando energia para uso residencial e comercial. Esse serviço de resposta à demanda é remunerado pelas operadoras, criando uma nova fonte de receita para mineradoras.</p>

      <h3>Contexto e impacto</h3>
      <p>O argumento ambiental contra o Bitcoin sempre foi falho por ignorar a diferença entre consumo de energia e impacto ambiental. O sistema financeiro tradicional — com seus bancos, agências, caixas eletrônicos, data centers e transporte de valores — consome uma quantidade massiva de energia. A grande diferença é que o Bitcoin pode usar energia remota e renovável que de outra forma seria desperdiçada. Com 60% da matriz já renovável e crescendo, a mineração de Bitcoin está no caminho para se tornar a indústria mais verde do planeta.</p>
    `,
    comments: [
      { author: 'Vitor E.', date: '27 mai 2026', text: 'Sempre defendi que Bitcoin não é vilão ambiental. Os números provam isso.' },
    ]
  },
  {
    id: 5,
    title: 'Bitcoin como proteção patrimonial: por que investidores estão migrando do ouro para o BTC',
    excerpt: 'Com valorização superior a 500% nos últimos 5 anos, o Bitcoin supera o ouro como reserva de valor e atrai cada vez mais investidores em busca de proteção patrimonial.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=BTC+vs+Ouro',
    author: 'Rafael Torres',
    date: '26 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin está consolidando sua posição como a principal reserva de valor da era digital, atraindo investidores que tradicionalmente alocavam capital em ouro e outros metais preciosos. Com uma valorização superior a 500% nos últimos cinco anos e uma capitalização de mercado que já ultrapassa US$ 1,6 trilhão, o BTC se estabelece como alternativa superior ao metal amarelo em múltiplos aspectos.</p>

      <h3>Bitcoin vs Ouro: uma comparação objetiva</h3>
      <p>O ouro é valorizado há milênios por suas propriedades físicas: escasso, durável, divisível e portátil. O Bitcoin possui exatamente as mesmas propriedades — mas em formato digital superior. Enquanto o ouro precisa ser extraído, fundido, transportado e armazenado em cofres com custos significativos, o Bitcoin pode ser enviado para qualquer lugar do mundo em minutos com taxas ínfimas.</p>

      <p>Mais importante: a escassez do Bitcoin é absoluta e matematicamente verificável — 21 milhões, nem um a mais. O ouro, por outro lado, continua sendo minerado a taxas crescentes, com estimativas de que a oferta global aumenta de 1% a 2% ao ano. Não há garantia de que novas jazidas ou tecnologias de mineração não tornem o ouro mais abundante no futuro.</p>

      <blockquote>Bitcoin é ouro digital. Ele possui todas as qualidades do ouro como dinheiro, mas em um formato superior para o século XXI. É escasso, portátil, divisível e verificável — sem as limitações físicas do metal. — Saifedean Ammous, autor de "The Bitcoin Standard"</blockquote>

      <h3>O movimento de migração</h3>
      <p>Grandes gestoras de ativos estão liderando a migração. A BlackRock, maior gestora do mundo com mais de US$ 10 trilhões em ativos, recomenda alocações de 1% a 3% em Bitcoin em portfólios multiativos. Fundos de pensão noruegueses, canadenses e americanos já expõem seus cotistas ao BTC através de ETFs e produtos estruturados.</p>

      <p>No Brasil, o movimento segue a mesma tendência. Fundos multimercado passaram a incluir exposição indireta a Bitcoin via ETFs estrangeiros, e assessores de investimento recomendam cada vez mais a diversificação com criptomoedas. A gestora Hashdex oferece produtos regulados que permitem exposição ao Bitcoin com segurança e conformidade.</p>

      <h3>Perspectivas para o mercado</h3>
      <p>Com o aumento da adoção institucional e a redução da oferta disponível pós-halving, a tendência é de que o Bitcoin continue ganhando participação no mercado de reserva de valor. Se o BTC atingir uma capitalização equivalente ao mercado de ouro (cerca de US$ 13 trilhões), cada Bitcoin valeria aproximadamente US$ 620 mil. Mesmo cenários mais conservadores projetam pelo menos US$ 200 mil a US$ 250 mil até o topo do ciclo atual.</p>
    `,
    comments: []
  },
  {
    id: 6,
    title: 'O halving do Bitcoin completa dois anos: os efeitos da escassez programada no preço e na rede',
    excerpt: 'Dois anos após o halving de 2024, a redução da emissão de novos BTC já mostra impacto concreto no mercado. Oferta reduzida e demanda crescente criam cenário único.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Halving+BTC',
    author: 'Gabriela Costa',
    date: '25 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>Em maio de 2026, o halving do Bitcoin de 2024 completa dois anos — tempo suficiente para avaliar seus efeitos concretos no mercado. O evento, que reduziu a emissão diária de novos Bitcoins de 900 para 450 unidades, é o mecanismo central que torna o Bitcoin o ativo com a política monetária mais previsível e rígida já criada.</p>

      <h3>O que é o halving e por que importa</h3>
      <p>A cada 210 mil blocos minerados (aproximadamente quatro anos), a recompensa dos mineradores é cortada pela metade. Esse processo continuará até que todos os 21 milhões de Bitcoins tenham sido emitidos, por volta do ano 2140. Diferentemente de qualquer moeda fiduciária, a política monetária do Bitcoin é imutável e independente de decisões políticas ou econômicas.</p>

      <p>Historicamente, cada halving foi seguido por um rali de alta significativo. Doze meses após o halving de 2012, o Bitcoin subiu 8.000%. Após o halving de 2016, a alta foi de 2.800%. Em 2020, o rali pós-halving atingiu 600%. O padrão é claro: oferta reduzida + demanda crescente = valorização.</p>

      <blockquote>Halvings são o lembrete mais poderoso da diferença fundamental entre Bitcoin e dinheiro estatal. Enquanto bancos centrais podem imprimir trilhões indefinidamente, o Bitcoin corta sua própria emissão pela metade a cada quatro anos, sem pedir permissão a ninguém. — Análise BTC Ancap News</blockquote>

      <h3>O cenário atual pós-halving</h3>
      <p>Dois anos após o halving de 2024, o Bitcoin negocia acima de US$ 80 mil, representando uma valorização de mais de 150% desde o evento. A taxa de hash da rede atingiu máximos históricos, indicando que mineradores eficientes não apenas sobreviveram ao choque de receita, como estão prosperando.</p>

      <p>O choque de oferta criado pelo halving foi amplificado pela demanda dos ETFs de Bitcoin à vista, que absorvem diariamente uma quantidade de BTC superior à nova emissão. Analistas estimam que, mantida a demanda atual, o desequilíbrio entre oferta e demanda se tornará ainda mais severo nos próximos meses, potencialmente impulsionando o preço a novos patamares.</p>

      <h3>O futuro da emissão</h3>
      <p>O próximo halving está previsto para 2028, quando a recompensa dos mineradores cairá para 225 BTC por bloco. A taxa de inflação anual do Bitcoin, atualmente em torno de 0,8%, cairá para aproximadamente 0,4% — inferior à inflação de praticamente qualquer moeda fiduciária estável. Para efeito de comparação, a meta de inflação do Banco Central do Brasil é de 3% ao ano, e a inflação real frequentemente supera os 10%.</p>

      <p>A escassez programada do Bitcoin não é apenas uma característica técnica — é a base de sua proposta de valor como dinheiro sólido. Em um mundo onde governos imprimem dinheiro sem limites, ter um ativo cuja oferta é matematicamente limitada a 21 milhões de unidades é, em si mesmo, um ato de resistência financeira.</p>
    `,
    comments: []
  },
  {
    id: 7,
    title: 'Nações adotam Bitcoin como reserva estratégica: o novo padrão ouro do século XXI',
    excerpt: 'Países como EUA, El Salvador e Argentina estão acumulando Bitcoin em seus balanços nacionais. A tendência de adoção soberana pode transformar o mercado global.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=BTC+Reserva+Estrat%C3%A9gica',
    author: 'Lucas Mendes',
    date: '24 mai 2026',
    readTime: '7 min',
    featured: true,
    body: `
      <p>Uma das tendências mais significativas do mercado de Bitcoin em 2026 é a adoção do ativo como reserva estratégica por nações soberanas. O que começou como uma experiência em El Salvador em 2021 evoluiu para um movimento global, com países de diferentes continentes incluindo Bitcoin em seus balanços nacionais.</p>

      <h3>Quem está comprando e por quê</h3>
      <p>Os Estados Unidos lideram o movimento de forma indireta, com diversos estados americanos — incluindo Texas, Ohio e Wyoming — criando reservas estratégicas de Bitcoin em nível estadual. Projetos de lei em âmbito federal propõem que o Tesouro americano adquira Bitcoin como ativo de reserva, reconhecendo seu valor como proteção contra a desvalorização do dólar e a crescente dívida pública.</p>

      <p>El Salvador continua sendo o exemplo mais avançado de adoção soberana. Com mais de 5.700 BTC em sua tesouraria nacional, o país centro-americano colhe os frutos de sua aposta: a valorização do Bitcoin permitiu ao governo financiar projetos de infraestrutura, escolas e hospitais sem recorrer a emissão monetária ou endividamento externo.</p>

      <blockquote>Bitcoin é uma ferramenta de soberania financeira para nações em desenvolvimento. Permite que países pequenos se protejam da inflação global e do domínio das moedas de reserve. — Nayib Bukele, Presidente de El Salvador</blockquote>

      <h3>O movimento se espalha</h3>
      <p>A Argentina, mesmo com sua abordagem mais cautelosa, deu passos concretos ao permitir transações internacionais em Bitcoin e incluir o ativo em discussões sobre reservas cambiais. O governo de Javier Milei, abertamente libertário, vê no Bitcoin uma ferramenta para dolarizar a economia argentina sem depender exclusivamente do Federal Reserve americano.</p>

      <p>Na Suíça, cidades como Lugano já aceitam Bitcoin para pagamento de impostos, e há discussões em nível nacional sobre a inclusão de BTC nas reservas do Banco Central suíço. O país, conhecido por sua tradição de neutralidade e solidez financeira, seria um marco importante na legitimação do Bitcoin como ativo de reserva.</p>

      <p>Outros países — incluindo Emirados Árabes Unidos, Cingapura e Paraguai — anunciaram estudos ou pilotos para incorporar Bitcoin em suas estratégias de reservas nacionais, sugerindo que a tendência é global e acelerada.</p>

      <h3>Impacto no mercado</h3>
      <p>A adoção soberana de Bitcoin cria uma camada de demanda completamente nova para o mercado. Diferentemente de investidores individuais ou institucionais, nações soberanas operam com horizontes de tempo medidos em décadas e não são influenciadas por flutuações de curto prazo. Cada país que adota Bitcoin como reserva estratégica retira milhões de dólares em BTC do mercado circulante, contribuindo para o choque de oferta que impulsiona o preço.</p>

      <p>Se a tendência continuar, o cenário de "corrida entre nações" por Bitcoin — similar à corrida do ouro do século XIX — pode se materializar, com governos competindo por um ativo cada vez mais escasso. Nesse cenário, projeções de US$ 500 mil a US$ 1 milhão por Bitcoin deixam de ser fantasiosas e se tornam possibilidades concretas.</p>
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
    date: '23 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>As remessas internacionais sempre foram um negócio lucrativo para empresas tradicionais como Western Union e MoneyGram, que cobram taxas que podem chegar a 10% ou mais do valor enviado. Para trabalhadores imigrantes que enviam dinheiro para suas famílias, isso representa uma perda bilionária anual.</p>

      <p>O Bitcoin e, especialmente, a Lightning Network estão mudando radicalmente esse cenário. Com transações quase instantâneas e taxas inferiores a 1%, trabalhadores em países desenvolvidos podem enviar dinheiro para suas famílias em países em desenvolvimento de forma mais eficiente.</p>
    `,
    comments: [
      { author: 'Juan P.', date: '23 mai 2026', text: 'Como imigrante, posso confirmar. Economizo mais de US$ 200 por mês desde que comecei a usar Bitcoin.' },
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
    date: '22 mai 2026',
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
    date: '21 mai 2026',
    readTime: '10 min',
    featured: true,
    body: `
      <p>O direito de propriedade é um dos pilares fundamentais da civilização. Filósofos como John Locke, Murray Rothbard e Hans-Hermann Hoppe construíram argumentos robustos sobre a centralidade da propriedade privada para a liberdade individual.</p>

      <p>Em contraste, a teoria da "função social da propriedade" argumenta que o direito de propriedade é condicional — subordinado a supostos interesses coletivos definidos pelo Estado. Para os libertários, essa é a porta de entrada para o confisco e o autoritarismo.</p>

      <p>Este artigo explora os fundamentos de ambas as posições e argumenta por que a propriedade privada absoluta é essencial para uma sociedade livre.</p>
    `,
    comments: [
      { author: 'André B.', date: '21 mai 2026', text: 'Leitura obrigatória. Rothbard explicando propriedade privada de forma cristalina como sempre.' },
      { author: 'Clara M.', date: '21 mai 2026', text: 'Excelente artigo! A função social é usada como justificativa para todo tipo de abuso estatal.' },
    ]
  },
  {
    id: 11,
    title: 'Bitcoin em US$ 81 mil: "supercycle" ou rali de mercado baixista? Analistas se dividem',
    excerpt: 'Com BTC acima de US$ 81 mil, o mercado se pergunta se estamos no início de um superciclo ou em mais um rali dentro de um mercado baixista. Projeções variam de US$ 180 mil a US$ 250 mil.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f7931a/1a1a1a?text=Bitcoin+Supercycle',
    author: 'Redação BTC Ancap News',
    date: '5 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O Bitcoin voltou a negociar acima de US$ 81 mil nesta segunda-feira, gerando um intenso debate entre analistas sobre a natureza do movimento atual. Enquanto alguns enxergam o início de um "superciclo" que levará o BTC a novos patamares históricos, outros alertam que pode tratar-se apenas de mais um rali dentro de uma tendência baixista de longo prazo.</p>

      <h3>O que aconteceu</h3>
      <p>O Bitcoin atingiu US$ 81.386, registrando alta de 1,26% nas últimas 24 horas. O movimento foi impulsionado por uma combinação de fatores: acumulação por detentores de longo prazo, que adicionaram 330 mil BTC às carteiras no último mês, e influxos robustos em ETFs de Bitcoin à vista, que totalizaram US$ 532 milhões em recuperação pós-acordo de cessar-fogo.</p>

      <p>No entanto, a resistência dos US$ 82 mil — que coincide com a média exponencial de 200 dias — permanece intocada, e o mercado observa atentamente se o BTC conseguirá romper esse nível ou sofrerá um novo rechaço.</p>

      <blockquote>A diferença entre um superciclo e um rali de mercado baixista é a sustentabilidade. Se o Bitcoin não conseguir se firmar acima de US$ 85 mil nas próximas semanas, o movimento atual pode ser apenas mais um fakeout. — Relatório de análise técnica semanal</blockquote>

      <h3>Contexto</h3>
      <p>O termo "superciclo" ganhou popularidade entre analistas que acreditam que o Bitcoin, diferentemente de ciclos anteriores, não passará por um mercado baixista profundo devido à maturidade institucional do mercado. Os argumentos a favor incluem: adoção por ETFs que criam demanda estrutural, escassez crescente pós-halving, e participação de tesourarias corporativas que seguram BTC independentemente do preço.</p>

      <p>Por outro lado, analistas mais cautelosos apontam que o funding rate negativo prolongado — 66 dias consecutivos — sugere que o mercado de derivativos ainda não está convicto da alta. Além disso, o volume de negociação spot não acompanhou a recuperação de preço, um sinal técnico que historicamente precedeu correções.</p>

      <p>Projeções otimistas variam de US$ 180 mil a US$ 250 mil como topo do ciclo, enquanto cenários mais conservadores apontam US$ 95 mil a US$ 100 mil como limite superior antes de uma correção significativa.</p>

      <h3>Impacto no mercado</h3>
      <p>Independentemente do cenário, a volatilidade deve aumentar nas próximas semanas. Se o Bitcoin romper US$ 82 mil, a liquidação forçada de posições vendidas (short squeeze) pode impulsionar o preço rapidamente em direção a US$ 85 mil ou mais. Se o rompimento falhar, uma correção para a região de US$ 75 mil a US$ 70 mil seria considerada saudável antes da próxima tentativa.</p>

      <p>Os mercados de predição dão 84% de chance de o Bitcoin testar US$ 84 mil nos próximos movimentos, refletindo otimismo cauteloso entre traders.</p>

      <h3>Consequências possíveis</h3>
      <p>A definição entre superciclo e rali passageiro deve ocorrer nas próximas duas a quatro semanas. Se o Bitcoin conseguir se sustentar acima de US$ 85 mil e, especialmente, superar a barreira dos US$ 95 mil, a tese do superciclo ganha força. Caso contrário, o mercado pode entrar em uma nova fase de consolidação prolongada. Para investidores de longo prazo, no entanto, o cenário permanece favorável: a acumulação institucional e a escassez estrutural são tendências que transcendem ciclos de curto prazo.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>O debate entre superciclo e rali baixista é, em certa medida, secundário para quem entende a proposta de valor do Bitcoin como dinheiro sólido. A volatilidade de curto prazo é o preço que se paga pela descentralização e pela escassez absoluta. O que importa observar é se os fundamentos — hashrate, endereços ativos, acumulação por LTHs e influxos institucionais — continuam se fortalecendo. Enquanto esses indicadores apontarem para cima, o Bitcoin estará construindo as bases para seu próximo grande movimento, independentemente de quanto tempo leve.</p>
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
    date: '2 mai 2026',
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
    date: '3 mai 2026',
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
    date: '3 mai 2026',
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
    date: '4 mai 2026',
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
    title: 'Mineração de Bitcoin se recupera: Hut 8 refinancia e Capital B levanta US$ 1,3 milhão',
    excerpt: 'Setor de mineração mostra sinais claros de recuperação com Hut 8 refinanciando dívida de US$ 200 milhões em BTC e Capital B levantando capital com apoio de Adam Back.',
    category: 'bitcoin',
    categoryLabel: 'Bitcoin',
    image: 'https://placehold.co/800x400/f39c12/1a1a1a?text=Minera%C3%A7%C3%A3o+Recupera',
    author: 'Redação BTC Ancap News',
    date: '4 mai 2026',
    readTime: '5 min',
    featured: true,
    body: `
      <p>O setor de mineração de Bitcoin está vivendo um momento de recuperação significativa, com duas notícias importantes chegando ao mercado: a Hut 8, uma das maiores mineradoras listadas em bolsa, concluiu o refinanciamento de um empréstimo lastreado em Bitcoin no valor de US$ 200 milhões, e a gestora Capital B levantou US$ 1,3 milhão com o apoio de Adam Back, CEO da Blockstream e uma das figuras mais influentes do ecossistema Bitcoin.</p>

      <h3>O que aconteceu</h3>
      <p>A Hut 8 firmou um acordo com a FalconX para refinanciar sua dívida lastreada em Bitcoin a uma taxa fixa de 7% ao ano. O movimento permitiu à empresa liberar aproximadamente 3.300 BTC que estavam como garantia colateral, dando-lhe mais flexibilidade financeira para operar e expandir. A taxa de 7% fixa é considerada favorável no atual ambiente de juros, especialmente para uma empresa do setor de mineração.</p>

      <p>Paralelamente, a Capital B, uma gestora focada em tesouraria de Bitcoin, anunciou a captação de US$ 1,3 milhão com a participação de Adam Back, criador do Hashcash (precursor técnico do proof-of-work do Bitcoin) e CEO da Blockstream. O investimento sinaliza confiança no modelo de tesouraria corporativa em Bitcoin como estratégia de longo prazo.</p>

      <blockquote>O refinanciamento da Hut 8 mostra que o mercado de crédito para mineradores está voltando. Quando os bancos e credores voltam a emprestar para o setor, é sinal de que a confiança na mineração de Bitcoin foi restaurada. — Análise do setor</blockquote>

      <h3>Contexto</h3>
      <p>O setor de mineração passou por um período de ajuste severo após o halving de 2024, que reduziu pela metade a emissão de novos Bitcoins. Mineradores ineficientes foram forçados a desligar equipamentos, enquanto empresas bem capitalizadas buscaram formas criativas de administrar suas dívidas e tesourarias. O preço do Bitcoin consistentemente acima de US$ 80 mil mudou esse cenário, tornando a mineração novamente lucrativa até para operadores de médio porte.</p>

      <p>A Hut 8, especificamente, vinha carregando uma dívida significativa contraída durante a expansão de 2021-2022. O refinanciamento permite à empresa não apenas reduzir custos financeiros, mas também recuperar controle sobre seus BTC, que podem ser usados como tesouraria estratégica ou para novos investimentos em infraestrutura.</p>

      <h3>Impacto no mercado</h3>
      <p>O movimento de refinanciamento da Hut 8 é um sinal de que o mercado de capitais está reabrindo para o setor de mineração. Com taxas de juros fixas acessíveis e a liberação de BTC como garantia, outras mineradoras devem buscar acordos semelhantes. Isso reduz a pressão vendedora sobre o Bitcoin, já que mineradores precisam vender menos BTC para cobrir custos operacionais.</p>

      <p>A entrada de Adam Back como investidor na Capital B também carrega peso simbólico: uma das mentes fundacionais do Bitcoin apostando em estratégias corporativas de acumulação reforça a tese de que o BTC é um ativo de tesouraria legítimo e veio para ficar.</p>

      <h3>Consequências possíveis</h3>
      <p>Com a mineração novamente lucrativa e o crédito disponível, o setor deve entrar em um ciclo virtuoso: mais investimento em infraestrutura → maior hashrate → maior segurança da rede → mais confiança institucional → mais demanda. No curto prazo, a redução da venda forçada de BTC por mineradores contribui para o choque de oferta que muitos analistas projetam para os próximos meses.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>A recuperação do setor de mineração é um dos termômetros mais importantes da saúde do ecossistema Bitcoin. Ver empresas como Hut 8 conseguindo refinanciar dívidas em condições favoráveis e gestoras como Capital B atraindo investidores do calibre de Adam Back são sinais de que o mercado está amadurecendo. O círculo virtuoso entre preço do BTC, lucratividade da mineração e segurança da rede é o motor fundamental que impulsiona o Bitcoin há mais de uma década — e ele está funcionando perfeitamente.</p>
    `,
    comments: []
  },
  {
    id: 19,
    title: 'SEC atrasa ETFs de mercado de predição enquanto regulação global se intensifica',
    excerpt: 'SEC solicita mais informações sobre ETFs de mercado de predição, Coreia do Sul alerta para excesso de relatórios AML, e Nova York multa Uphold em US$ 5 milhões.',
    category: 'economia',
    categoryLabel: 'Economia',
    image: 'https://placehold.co/800x400/2d3748/ffffff?text=SEC+Regula%C3%A7%C3%A3o',
    author: 'Redação BTC Ancap News',
    date: '4 mai 2026',
    readTime: '6 min',
    featured: true,
    body: `
      <p>O cenário regulatório global para criptomoedas e ativos digitais ganhou novos capítulos importantes nesta semana, com a SEC dos EUA adiando a aprovação de ETFs de mercado de predição, a Coreia do Sul alertando sobre os custos excessivos de novas regras AML, e Nova York impondo uma multa de US$ 5 milhões à exchange Uphold.</p>

      <h3>O que aconteceu</h3>
      <p>A Securities and Exchange Commission (SEC) dos Estados Unidos solicitou informações adicionais sobre ETFs de mercado de predição propostos por gestoras como Roundhill, GraniteShares e Bitwise. A comissão citou preocupações com a mecânica de funcionamento e riscos associados a esses produtos, adiando qualquer decisão de aprovação.</p>

      <p>Na Coreia do Sul, a associação do setor de criptomoedas (DAXA) emitiu um alerta contundente sobre as propostas de combate à lavagem de dinheiro (AML) do governo, argumentando que as novas regras podem gerar mais de 5,4 milhões de relatórios anuais — um volume administrativo que sobrecarregaria o sistema e prejudicaria a inovação.</p>

      <p>Em Nova York, a exchange Uphold foi forçada a pagar US$ 5 milhões em multas por seu envolvimento no esquema fraudulento de investimentos cripto CredEarn, que lesou milhares de investidores.</p>

      <blockquote>Regulação não é o inimigo da inovação. Regulação mal desenhada, que trata todos os ativos digitais como iguais, é que sufoca o desenvolvimento de tecnologias verdadeiramente transformadoras. — Posição do setor sobre a proposta sul-coreana</blockquote>

      <h3>Contexto</h3>
      <p>O ambiente regulatório para criptomoedas continua fragmentado globalmente. Enquanto jurisdições como a União Europeia avanzam com estruturas abrangentes (MiCA), os EUA mantêm uma abordagem caso a caso que gera incerteza para emissores e investidores. A decisão da SEC de adiar os ETFs de predição reflete essa cautela, especialmente em um ano eleitoral americano.</p>

      <p>Na Coreia do Sul, um dos mercados de criptomoedas mais ativos do mundo, a tensão entre inovação e proteção ao investidor atingiu novo patamar. A proposta AML do governo exigiria que as exchanges reportassem transações acima de determinado valor com muito mais frequência, criando uma carga burocrática que a DAXA considera desproporcional.</p>

      <p>A multa da NYDFS (Departamento de Serviços Financeiros de Nova York) à Uphold, por sua vez, demonstra que reguladores estaduais americanos continuam ativos na fiscalização de exchanges, independentemente da posição federal.</p>

      <h3>Impacto no mercado</h3>
      <p>O adiamento dos ETFs de predição pela SEC tem impacto limitado no mercado cripto como um todo, já que esses produtos são nicho. No entanto, sinaliza que a comissão mantém sua postura cautelosa em relação a novos produtos cripto, o que pode afetar o cronograma de aprovação de outros ETFs temáticos no futuro.</p>

      <p>Na Coreia do Sul, a incerteza regulatória pode levar exchanges a reduzir operações ou sair do mercado, diminuindo a liquidez regional. O país é responsável por uma parcela significativa do volume de negociação de altcoins, e mudanças regulatórias lá costumam ter efeito imediato nos preços.</p>

      <h3>Consequências possíveis</h3>
      <p>O cenário regulatório global para criptomoedas deve continuar evoluindo de forma desigual. Países com estruturas claras (como a UE e alguns estados americanos) devem atrair mais investimento institucional, enquanto jurisdições com regras incertas ou excessivamente onerosas podem perder competitividade. Para o investidor de criptomoedas, a diversificação geográfica de exposição e o compliance proativo são cada vez mais importantes.</p>

      <h3>Análise BTC Ancap News</h3>
      <p>Regulação é uma faca de dois gumes para o mercado cripto. Por um lado, regras claras e sensatas trazem segurança jurídica que atrai capital institucional. Por outro, regulação excessiva ou mal planejada pode sufocar a inovação e empurrar projetos para jurisdições mais amigáveis. O movimento atual sugere que estamos em uma fase de "acerto de contas" regulatório, onde cada país define seus termos. Para o Bitcoin especificamente, sua natureza descentralizada e global torna qualquer tentativa de regulação direta ineficaz — mas o ecossistema ao redor (exchanges, custodians, DeFi) continuará sendo alvo de escrutínio crescente.</p>
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
    date: '3 mai 2026',
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
    date: '2 mai 2026',
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
  'BTC supera US$ 81 mil e testa resistência',
  'Superciclo vs rali baixista',
  'SEC atrasa ETFs de predição',
  'Mineração: Hut 8 refinancia dívida',
  'Coinbase demite 14% da equipe',
  'ETFs de Bitcoin batem recorde semanal',
  'Telegram assume controle da TON',
  'Regulação global se intensifica',
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

  // Re-run staggered animations on page transition
  setTimeout(initStaggeredAnimations, 100);

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

function animatePriceChange(element, newValue) {
  const oldValue = parseFloat(element.dataset.prevValue) || 0;
  if (oldValue === newValue) return;
  const isUp = newValue > oldValue;
  element.style.transition = 'color 0.3s ease';
  element.style.color = isUp ? 'var(--color-green)' : 'var(--color-red)';
  setTimeout(() => { element.style.color = ''; }, 600);
  element.dataset.prevValue = newValue;
}

function updateBtcDisplay() {
  const priceUSD = btcPriceData.usd;
  const priceBRL = btcPriceData.brl;
  if (!priceUSD) return;

  const priceEl = document.getElementById('btcPrice');
  const brlEl = document.getElementById('btcPriceBrl');

  animatePriceChange(priceEl, priceUSD);
  animatePriceChange(brlEl, priceBRL);

  priceEl.textContent =
    '$' + priceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  brlEl.textContent =
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

// 9. STAGGERED FADE-IN + IMAGE FALLBACK
function initStaggeredAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || (i * 0.06);
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.news-card, .featured-item, .hero__side-item, .about__card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(15px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.dataset.delay = (i * 0.06).toString();
    observer.observe(el);
  });
}

function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.classList.add('error-fallback');
      this.src = '';
    });
  });
}

// 10. EVENT LISTENERS & INIT
function init() {
  renderHome();

  // BTC Widget
  initBtcWidget();

  // BTC Simulator
  initSimulator();

  // Staggered animations
  initStaggeredAnimations();

  // Image fallbacks
  initImageFallbacks();

  // Inject animation visibility class
  const styleAnim = document.createElement('style');
  styleAnim.textContent = '.animate-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(styleAnim);

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
    const submitBtn = document.getElementById('contactSubmitBtn');
    const btnText = submitBtn.querySelector('.btn__text');
    const btnLoader = submitBtn.querySelector('.btn__loader');

    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';

      feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      feedback.className = 'contact__feedback show success';
      document.getElementById('contactForm').reset();

      setTimeout(() => {
        feedback.className = 'contact__feedback';
      }, 5000);
    }, 1200);
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

  // Flash effect on price update
  [usdEl, brlEl].forEach(el => {
    if (el) {
      el.style.transition = 'opacity 0.15s ease';
      el.style.opacity = '0.5';
      setTimeout(() => { el.style.opacity = '1'; }, 150);
    }
  });

  if (usdEl && btcPriceData.usd) {
    usdEl.textContent = '$ ' + btcPriceData.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (brlEl && btcPriceData.brl) {
    brlEl.textContent = 'R$ ' + btcPriceData.brl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  updateSimulatorOutput();
}

// 11. NOTÍCIAS AO VIVO — desativado

// Start
document.addEventListener('DOMContentLoaded', init);
