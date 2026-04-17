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
  }
}

async function simularInvestimento() {
  const valor = document.getElementById("valor-investido").value;

  if (!valor) {
    alert("Digite um valor");
    return;
  }

  try {
    const res = await fetch("/api/price");
    const data = await res.json();

    const preco = data.bitcoin.usd;
    const resultado = (valor / preco) * (preco * 1.1);

    document.getElementById("resultado-investimento").innerText =
      "R$ " + resultado.toFixed(2);

  } catch (e) {
    console.log(e);
  }
}

let page = 1;

async function carregarMaisNoticias() {
  page++;

  try {
    const res = await fetch(`/api/news?page=${page}`);
    const data = await res.json();

    console.log("Resposta da API:", data); // ajuda debug

    if (!data.articles || !Array.isArray(data.articles)) {
      alert("Erro ao carregar notícias");
      return;
    }

    const container = document.getElementById("news-list");

    data.articles.forEach(n => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${n.title}</p>`;
      container.appendChild(div);
    });

  } catch (e) {
    console.log(e);
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarPreco();
});