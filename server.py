from http.server import SimpleHTTPRequestHandler, HTTPServer
import requests
import json
import os
import xml.etree.ElementTree as ET

class Handler(SimpleHTTPRequestHandler):

    def do_GET(self):

        # ===== PREÇO BTC =====
        if self.path.startswith("/api/price"):
            try:
                r = requests.get(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
                    timeout=5
                )

                data = r.json()

            except Exception as e:
                print("Erro API preço:", e)
                data = {"bitcoin": {"usd": 0}}

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(json.dumps(data).encode())

        # ===== NOTÍCIAS =====
        elif self.path.startswith("/api/news"):
            try:
                url = "https://news.google.com/rss/search?q=bitcoin&hl=pt-BR&gl=BR&ceid=BR:pt-419"
                r = requests.get(url, timeout=5)

                root = ET.fromstring(r.content)

                noticias = []

                for item in root.findall(".//item")[:6]:
                    noticias.append({
                        "title": item.find("title").text,
                        "link": item.find("link").text
                    })

            except Exception as e:
                print("Erro notícias:", e)
                noticias = []

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            self.wfile.write(json.dumps({"articles": noticias}).encode())

        else:
            super().do_GET()


port = int(os.environ.get("PORT", 5000))
server = HTTPServer(("0.0.0.0", port), Handler)

print(f"Servidor rodando na porta {port} 🚀")
server.serve_forever()