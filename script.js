// ===== NOTIFICAÇÕES =====
let isNotificationSupported = false;
let notificationPermission = 'default';

async function atualizarPreco() {
  try {
    const data = await fetchWithCache("/api/price");

    const preco = data.bitcoin.usd;

    const elemento = document.getElementById("btc-price");
    elemento.textContent = "BTC: $" + preco;

  } catch (erro) {
    console.error("Erro ao buscar preço:", erro);
  }
}

async function fetchWithCache(url) {
  const response = await fetch(url);
  return await response.json();
}

async function checkNotificationSupport() {
  if (!('Notification' in window)) {
    console.log('Notifications não suportadas');
    return false;
  }

  isNotificationSupported = true;
  notificationPermission = Notification.permission;

  if (notificationPermission === 'default') {
    notificationPermission = await Notification.requestPermission();
  }

  return notificationPermission === 'granted';
}

function showNotification(title, body, icon = null) {
  if (!isNotificationSupported || notificationPermission !== 'granted') {
    return;
  }

  new Notification(title, {
    body: body,
    icon: icon || '/favicon.ico',
    requireInteraction: true
  });
}

// ===== GRÁFICOS INTERATIVOS =====
let chartWidget = null;
let chartInitialized = false;

function initTradingViewChart() {
  if (chartInitialized) return;

  chartWidget = new TradingView.widget({
    "width": "100%",
    "height": 500,
    "symbol": "BINANCE:BTCUSDT",
    "interval": "60",
    "timezone": "America/Sao_Paulo",
    "theme": "dark",
    "style": "1",
    "locale": "br",
    "toolbar_bg": "#f7931a",
    "enable_publishing": false,
    "container_id": "tradingview_btc",
    "debug": false,
    "settings": {
      "studies": [
        "Moving Average 50",
        "Moving Average 200",
        "RSI",
        "MACD"
      ]
    }
  });

  chartInitialized = true;
}

function updateChart(symbol = "BINANCE:BTCUSDT") {
  if (!chartWidget || !chartWidget.activeChart()) return;

  chartWidget.activeChart().setSymbol(symbol, () => {
    console.log(`Gráfico atualizado para ${symbol}`);
  });
}

// ===== DASHBOARD PERSONALIZADO =====
let userPreferences = {
  theme: 'dark',
  notifications: true,
  priceAlerts: [],
  favoriteCoins: ['BTC']
};

function loadUserPreferences() {
  const saved = localStorage.getItem('btc-ancp-preferences');
  if (saved) {
    try {
      userPreferences = JSON.parse(saved);
    } catch (error) {
      console.error('Erro ao carregar preferências:', error);
    }
  }
}

function saveUserPreferences() {
  localStorage.setItem('btc-ancp-preferences', JSON.stringify(userPreferences));
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  userPreferences.theme = newTheme;
  saveUserPreferences();

  // Atualizar ícone do toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.textContent = newTheme === 'dark' ? '⚡' : '🌙';
  themeToggle.setAttribute('aria-label', `Alternar para tema ${newTheme === 'dark' ? 'claro' : 'escuro'}`);
}

function addPriceAlert(price, condition) {
  const alert = {
    id: Date.now(),
    price: price,
    condition: condition,
    active: true,
    createdAt: new Date().toISOString()
  };

  userPreferences.priceAlerts.push(alert);
  saveUserPreferences();
  return alert;
}

function checkPriceAlerts(currentPrice) {
  userPreferences.priceAlerts.forEach(alert => {
    if (!alert.active) return;

    const conditionMet = (alert.condition === 'above' && currentPrice > alert.price) ||
      (alert.condition === 'below' && currentPrice < alert.price) ||
      (alert.condition === 'equal' && currentPrice === alert.price);

    if (conditionMet) {
      showNotification(
        `Alerta de Preço: BTC ${alert.condition} ${alert.price}`,
        `O preço do Bitcoin está ${alert.condition} ${alert.price}$. Preço atual: $${currentPrice}`,
        '/favicon.ico'
      );
      alert.active = false; // Desativar após disparar
      saveUserPreferences();
    }
  });
}

// ===== FORMULÁRIO DE CONTATO =====
async function handleContactForm(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const messageDiv = document.getElementById('form-message');
  messageDiv.textContent = 'Enviando...';
  messageDiv.className = 'form-message loading';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      messageDiv.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      messageDiv.className = 'form-message success';
      form.reset();
    } else {
      throw new Error('Falha ao enviar mensagem');
    }
  } catch (error) {
    messageDiv.textContent = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
    messageDiv.className = 'form-message error';
    console.error('Erro no formulário:', error);
  }
}

// ===== CARREGAR MAIS NOTÍCIAS =====
let currentNewsPage = 1;
const NEWS_PER_PAGE = 6;

async function carregarMaisNoticias() {
  currentNewsPage++;
  const button = event.target;
  button.disabled = true;
  button.textContent = 'Carregando...';

  try {
    const data = await fetchWithCache(`/api/news?q=bitcoin&language=pt&sortBy=publishedAt&pageSize=${NEWS_PER_PAGE}&page=${currentNewsPage}`);

    const noticias = data.articles;
    if (noticias.length === 0) {
      button.textContent = 'Sem mais notícias';
      button.disabled = true;
      return;
    }

    const container = document.getElementById("news-list");
    noticias.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${noticia.title}</h3>
        <p>${noticia.description || "Sem descrição."}</p>
        <button onclick="window.open('${noticia.url}')">Ler mais</button>
      `;

      container.appendChild(card);
    });

    button.disabled = false;
    button.textContent = 'Carregar Mais';
  } catch (erro) {
    console.error("Erro ao carregar mais notícias:", erro);
    button.disabled = false;
    button.textContent = 'Tentar Novamente';
  }
}

// ===== FUNÇÕES DE UTILIDADE =====
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ===== INICIALIZAÇÃO =====
async function initApp() {
  atualizarPreco();
setInterval(atualizarPreco, 30000); // atualiza a cada 30s
  // Verificar suporte a notificações
  await checkNotificationSupport();

  // Carregar preferências do usuário
  loadUserPreferences();

  // Aplicar tema salvo
  document.documentElement.setAttribute('data-theme', userPreferences.theme);
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.textContent = userPreferences.theme === 'dark' ? '⚡' : '🌙';

  // Inicializar gráfico
  initTradingViewChart();

  // Adicionar event listeners
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('contact-form').addEventListener('submit', handleContactForm);

  console.log('Aplicação inicializada com sucesso');
}

// ===== MONITORAMENTO DE PREÇO =====
let priceMonitoringInterval = null;

function startPriceMonitoring() {
  if (priceMonitoringInterval) clearInterval(priceMonitoringInterval);

  priceMonitoringInterval = setInterval(async () => {
    try {
      const data = await fetchWithCache("/api/price");
      const currentPrice = parseFloat(data.bitcoin.usd);

      // Verificar alertas de preço
      checkPriceAlerts(currentPrice);

    } catch (error) {
      console.error('Erro no monitoramento de preço:', error);
    }
  }, 60000); // A cada minuto
}

// Iniciar aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp);
document.addEventListener('DOMContentLoaded', startPriceMonitoring);

async function simularInvestimento() {
  const valor = document.getElementById("valor-investido").value;

  if (!valor) {
    alert("Digite um valor");
    return;
  }

  try {
    const resposta = await fetch("/api/price");
    const data = await resposta.json();

    const precoBTC = data.bitcoin.usd;

    const quantidadeBTC = valor / precoBTC;

    // simular valorização de +10%
    const novoPreco = precoBTC * 1.1;

    const resultado = quantidadeBTC * novoPreco;

    document.getElementById("resultado-investimento").innerText =
      `Se o BTC subir 10% → R$ ${resultado.toFixed(2)}`;

  } catch (erro) {
    console.error(erro);
  }
}