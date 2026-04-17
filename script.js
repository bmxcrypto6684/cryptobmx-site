async function atualizarPreco() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,brl&include_24hr_change=true");
    const data = await res.json();

    if (!data.bitcoin) {
      document.getElementById("btc-price").innerText = "Erro";
      return;
    }

    const precoUSD = data.bitcoin.usd;
    const precoBRL = data.bitcoin.brl;
    const variacao24h = data.bitcoin.usd_24h_change;

    const variacaoTexto = variacao24h > 0 ? `(+${variacao24h.toFixed(2)}%)` : `(${variacao24h.toFixed(2)}%)`;

    document.getElementById("btc-price").innerHTML = `
      BTC: $${precoUSD.toLocaleString()} ${variacaoTexto}
      <span style="color: ${variacao24h > 0 ? '#51cf66' : '#ff6b6b'}">(${precoBRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})})</span>
    `;

  } catch (e) {
    console.log(e);
    document.getElementById("btc-price").innerText = "Erro";
  }
}

async function simularInvestimento() {
  const valor = document.getElementById("valor-investido").value;

  if (!valor) {
    alert("Digite um valor");
    return;
  }

  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,brl&include_24hr_change=true");
    const data = await res.json();

    if (!data || !data.bitcoin || !data.bitcoin.usd) {
      alert("Erro ao pegar preço do BTC");
      return;
    }

    const preco = data.bitcoin.usd;
    const resultado = (valor / preco) * (preco * 1.1);

    document.getElementById("resultado-investimento").innerText =
      "R$ " + resultado.toFixed(2);

  } catch (e) {
    console.log(e);
    alert("Erro ao calcular investimento");
  }
}



let page = 1;

async function carregarMaisNoticias() {
  page++;

  try {
    const res = await fetch(`/api/news?page=${page}`);
    const data = await res.json();

    if (!data || !data.articles || !Array.isArray(data.articles)) {
      alert("Erro ao carregar notícias");
      console.log(data);
      return;
    }

    const container = document.getElementById("news-list");

    data.articles.forEach(n => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${n.title}</p>
        <button onclick="window.open('${n.link}')">Ler</button>
      `;
      container.appendChild(div);
    });

  } catch (e) {
  console.log(e);
  }
}
const container = document.getElementById("news-list");

data.articles.forEach(n => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${n.title}</p>
    <button onclick="window.open('${n.link}')">Ler</button>
  `;
  container.appendChild(div);
});
    
  console.log(e);



function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Função para inicializar gráfico TradingView
function inicializarGrafico() {
  new TradingView.widget({
    "width": "100%",
    "height": 500,
    "symbol": "BITSTAMP:BTCUSD",
    "interval": "1",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "pt_BR",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_btc"
  });
}

// Função para atualizar gráfico em tempo real
function atualizarGrafico() {
  const widget = document.getElementById("tradingview_btc");
  if (widget) {
    widget.innerHTML = "";
    inicializarGrafico();
  }
}

// Função para obter preço BTC atual
async function obterPrecoBTC() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,brl&include_24hr_change=true");
    const data = await res.json();

    if (!data.bitcoin) {
      document.getElementById("btc-price").innerText = "Erro ao obter preço";
      return;
    }

    const precoUSD = data.bitcoin.usd;
    const precoBRL = data.bitcoin.brl;
    const variacao24h = data.bitcoin.usd_24h_change;

    const variacaoTexto = variacao24h > 0 ? `(+${variacao24h.toFixed(2)}%)` : `(${variacao24h.toFixed(2)}%)`;

    document.getElementById("btc-price").innerHTML = `
      BTC: $${precoUSD.toLocaleString()} ${variacaoTexto}
      <span style="color: ${variacao24h > 0 ? '#51cf66' : '#ff6b6b'}">(${precoBRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})})</span>
    `;

  } catch (e) {
    console.log(e);
    document.getElementById("btc-price").innerText = "Erro ao obter preço";
  }
}

// Inicialização do gráfico e preço
document.addEventListener("DOMContentLoaded", () => {
  inicializarGrafico();
  obterPrecoBTC();

  // Atualizar preço a cada 60 segundos
  setInterval(obterPrecoBTC, 60000);

  // Atualizar gráfico a cada 5 minutos
  setInterval(atualizarGrafico, 300000);
});