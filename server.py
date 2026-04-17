from http.server import SimpleHTTPRequestHandler, HTTPServer
import requests
import json
import os

class Handler(SimpleHTTPRequestHandler):

    def do_GET(self):
        if self.path.startswith("/api/price"):
            r = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()

            self.wfile.write(r.content)

        elif self.path.startswith("/api/news"):
            r = requests.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=SEU_API_KEY")

            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()

            self.wfile.write(r.content)

        else:
            super().do_GET()

port = int(os.environ.get("PORT", 5000))
server = HTTPServer(("0.0.0.0", port), Handler)

print("Servidor rodando...")
server.serve_forever()