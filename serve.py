import http.server
import socketserver
import os


class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):

        super().__init__(*args, directory="out", **kwargs)

    def end_headers(self):
        self.send_header("Strict-Transport-Security",
                         "max-age=63072000; includeSubdomains;")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-XSS-Protection", "1; mode=block")
        self.send_header("Content-Security-Policy",
                         "default-src 'none'; font-src 'self'; img-src 'self' data:; script-src 'self' https://unpkg.com/; style-src 'self'; connect-src 'self';")
        self.send_header("Referrer-Policy", "same-origin")
        super().end_headers()


# Define the request handler to use for the server
handler = MyRequestHandler

# Define the server
PORT = 8000
httpd = socketserver.TCPServer(("", PORT), handler)

print(f"Serving on port {PORT}")
httpd.serve_forever()
