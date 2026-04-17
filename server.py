from http.server import SimpleHTTPRequestHandler, HTTPServer
import requests
import json
import datetime
import time
from urllib.parse import urlparse, parse_qs

RATE_LIMIT = 60
RATE_LIMIT_WINDOW = 60

rate_limit_cache = {}
start_time = time.time()

class Handler(SimpleHTTPRequestHandler):

    def do_GET(self):
        print(f"[{datetime.datetime.now()}] {self.client_address[0]} -> {self.path}")

        # ===== PREÇO BTC =====
        if self.path.startswith("/api/price"):
            url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            r = requests.get(url)

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(r.content)

        # ===== NOTÍCIAS =====
        elif self.path.startswith("/api/news"):
            query = parse_qs(urlparse(self.path).query)

            params = {
                "q": query.get("q", ["bitcoin"])[0],
                "language": query.get("language", ["pt"])[0],
                "sortBy": query.get("sortBy", ["publishedAt"])[0],
                "pageSize": query.get("pageSize", ["6"])[0],
                "page": query.get("page", ["1"])[0],
                "apiKey": "b4fc2cc379de4b7a974d59eefe8c6189"
            }

            r = requests.get("https://newsapi.org/v2/everything", params=params)
            data = r.json()

            if "articles" not in data:
                data["articles"] = []

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(json.dumps(data).encode())

        # ===== HEALTH =====
        elif self.path.startswith("/health"):
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()

            health = {
                "status": "ok",
                "uptime": time.time() - start_time
            }

            self.wfile.write(json.dumps(health).encode())

        # ===== ARQUIVOS =====
        else:
            super().do_GET()

    # ===== FORMULÁRIO =====
    def do_POST(self):
        if self.path == "/api/contact":
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)

            data = json.loads(body)
            print("Mensagem recebida:", data)

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            response = {"status": "ok"}
            self.wfile.write(json.dumps(response).encode())


server = HTTPServer(("localhost", 5500), Handler)
print("Servidor rodando em http://localhost:5500")
server.serve_forever()