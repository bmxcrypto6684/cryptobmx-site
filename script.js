// ===== NOTIFICAÇÕES =====
let isNotificationSupported = false;
let notificationPermission = 'default';

// ===== FETCH PADRÃO =====
async function fetchWithCache(url) {
  const response = await fetch(url);
  return await response.json();
}

// ===== PREÇO BTC =====
async function atualizarPreco() {
  try {
    const data = await fetchWithCache("/api/price");

    if (!data.bitcoin || !data.bitcoin.usd) {
      throw new Error("API não retornou preço");
    }

    const preco = data.bitcoin.usd;

    document.getElementById("btc-price").textContent =
      "BTC: $" + preco;

  } catch (erro) {
    console.error("Erro ao buscar preço:", erro);
    document.getElementById("btc-price").textContent =
      "Erro ao carregar preço";
  }
}

// ===== NOTIFICAÇÕES =====
let isNotificationSupported = false;
let notificationPermission = 'default';

async function checkNotificationSupport() {
  if (!('Notification' in window)) return false;

  isNotificationSupported = true;
  notificationPermission = Notification.permission;

  if (notificationPermission === 'default') {
    notificationPermission = await Notification.requestPermission();
  }

  return notificationPermission === 'granted';
}

function showNotification(title, body, icon = null) {
  if (!isNotificationSupported || notificationPermission !== 'granted') return;

  new Notification(title, {
    body: body,
    icon: icon || '/favicon.ico',
    requireInteraction: true
  });
}

// ===== GRÁFICO =====
let chartWidget = null;
let chartInitialized = false;

function initTradingViewChart() {
  if (chartInitialized) return;

  chartWidget = new TradingView.widget({
    width: "100%",
    height: 500,
    symbol: "BINANCE:BTCUSDT",
    interval: "60",
    timezone: "America/Sao_Paulo",
    theme: "dark",
    style: "1",
    locale: "br",
    toolbar_bg: "#f7931a",
    enable_publishing: false,
    container_id: "tradingview_btc"
  });

  chartInitialized = true;
}

// ===== PREFERÊNCIAS =====
let userPreferences = {
  theme: 'dark',
  notifications: true,
  priceAlerts: []
};

function loadUserPreferences() {
  const saved = localStorage.getItem('btc-ancp-preferences');
  if (saved) userPreferences = JSON.parse(saved);
}

function saveUserPreferences() {
  localStorage.setItem('btc-ancp-preferences', JSON.stringify(userPreferences));
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  userPreferences.theme = newTheme;
  saveUserPreferences();

  document.getElementById('theme-toggle').textContent =
    newTheme === 'dark' ? '⚡' : '🌙';
}

// ===== ALERTAS =====
function checkPriceAlerts(currentPrice) {
  userPreferences.priceAlerts.forEach(alert => {
    if (!alert.active) return;

    const ok =
      (alert.condition === 'above' && currentPrice > alert.price) ||
      (alert.condition === 'below' && currentPrice < alert.price);

    if (ok) {
      showNotification(
        "Alerta BTC",
        `Preço: $${currentPrice}`
      );
      alert.active = false;
      saveUserPreferences();
    }
  });
}

// ===== MONITORAMENTO =====
let priceMonitoringInterval = null;

function startPriceMonitoring() {
  if (priceMonitoringInterval) clearInterval(priceMonitoringInterval);

  priceMonitoringInterval = setInterval(async () => {
    try {
      const data = await fetchWithCache("/api/price");

      if (!data.bitcoin || !data.bitcoin.usd) return;

      const price = parseFloat(data.bitcoin.usd);

      checkPriceAlerts(price);

    } catch (e) {
      console.error("Erro monitoramento:", e);
    }
  }, 60000);
}

// ===== NOTÍCIAS =====
let currentNewsPage = 1;
const NEWS_PER_PAGE = 6;

async function carregarMaisNoticias() {
  currentNewsPage++;

  try {
    const data = await fetchWithCache(
      `/api/news?page=${currentNewsPage}&pageSize=${NEWS_PER_PAGE}`
    );

    const container = document.getElementById("news-list");

    data.articles.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${noticia.title}</h3>
        <p>${noticia.description || ""}</p>
        <button onclick="window.open('${noticia.url}')">Ler mais</button>
      `;

      container.appendChild(card);
    });

  } catch (erro) {
    console.error("Erro notícias:", erro);
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
    const data = await fetchWithCache("/api/price");

    if (!data.bitcoin || !data.bitcoin.usd) {
      throw new Error("Preço inválido");
    }

    const precoBTC = data.bitcoin.usd;

    const quantidadeBTC = valor / precoBTC;

    const novoPreco = precoBTC * 1.1;

    const resultado = quantidadeBTC * novoPreco;

    document.getElementById("resultado-investimento").innerText =
      `Se subir 10% → R$ ${resultado.toFixed(2)}`;

  } catch (erro) {
    console.error("Erro simulação:", erro);
  }
}

// ===== UTIL =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ===== INIT =====
async function initApp() {
  await checkNotificationSupport();

  loadUserPreferences();

  document.documentElement.setAttribute('data-theme', userPreferences.theme);

  document.getElementById('theme-toggle').textContent =
    userPreferences.theme === 'dark' ? '⚡' : '🌙';

  initTradingViewChart();

  document.getElementById('theme-toggle')
    .addEventListener('click', toggleTheme);

  atualizarPreco();
  setInterval(atualizarPreco, 30000);

  console.log("App rodando 🚀");
}

// START
document.addEventListener('DOMContentLoaded', initApp);
document.addEventListener('DOMContentLoaded', startPriceMonitoring);