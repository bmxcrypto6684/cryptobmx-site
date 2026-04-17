// ===== PREÇO BTC =====
async function atualizarPreco() {
  try {
    const res = await fetch("/api/price");
    const data = await res.json();

    if (!data.bitcoin || !data.bitcoin.usd) {
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
    const res = await fetch("/api/price");
    const data = await res.json();

    if (!data.bitcoin || !data.bitcoin.usd) {
      alert("Erro ao pegar preço");
      return;
    }

    const preco = data.bitcoin.usd;

    const qtd = valor / preco;
    const resultado = qtd * (preco * 1.1);

    document.getElementById("resultado-investimento").innerText =
      "Resultado: R$ " + resultado.toFixed(2);

  } catch (e) {
    console.log(e);
  }
}

// ===== NOTÍCIAS =====
let currentPage = 1;

async function carregarMaisNoticias() {
  currentPage++;

  try {
    const res = await fetch(`/api/news?page=${currentPage}`);
    const data = await res.json();

    const container = document.getElementById("news-list");

    data.articles.forEach(noticia => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${noticia.title}</h3>
        <p>${noticia.description || ""}</p>
        <button onclick="window.open('${noticia.url}')">Ler</button>
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
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ===== INIT =====
function init() {
  atualizarPreco();
  setInterval(atualizarPreco, 30000);
}

document.addEventListener("DOMContentLoaded", init);