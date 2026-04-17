// ===== PREÇO BTC =====
async function atualizarPreco() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const data = await res.json();

    if (!data || !data.bitcoin || !data.bitcoin.usd) {
      document.getElementById("btc-price").innerText = "Erro";
      return;
    }

    document.getElementById("btc-price").innerText =
      "BTC: $" + data.bitcoin.usd;

  } catch (e) {
    console.log(e);
    document.getElementById("btc-price").innerText = "Erro";
  }
}

// ===== SIMULAÇÃO =====
async function simularInvestimento() {
  const valor = document.getElementById("valor-investido").value;

  if (!valor) {
    alert("Digite um valor");
    return;
  }

  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const data = await res.json();

    const precoBTC = data.bitcoin.usd;
    const quantidadeBTC = valor / precoBTC;

    document.getElementById("resultado").innerText =
      `Você compraria ${quantidadeBTC.toFixed(6)} BTC`;

  } catch (erro) {
    console.error("Erro na simulação:", erro);
  }
}

// ===== NOTÍCIAS =====
let currentPage = 1;

async function carregarMaisNoticias() {
  currentPage++;

  try {
    const res = await fetch(`/api/news?page=${currentPage}`);
    const data = await res.json();

    if (!data || !data.articles || !Array.isArray(data.articles)) {
      alert("Erro ao carregar notícias");
      console.log(data);
      return;
    }

    const container = document.getElementById("news-list");

    data.articles.forEach(noticia => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${noticia.title}</h3>
        <button onclick="window.open('${noticia.link}')">Ler</button>
      `;
      container.appendChild(div);
    });

  } catch (e) {
    console.log(e);
  }
}

// ===== SCROLL =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== INIT =====
function init() {
  atualizarPreco();
  setInterval(atualizarPreco, 30000);
}

document.addEventListener("DOMContentLoaded", init);