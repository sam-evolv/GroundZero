import json
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

import pytest

from verified_autoresearch.ollama import OllamaClient


class Handler(BaseHTTPRequestHandler):
    received = None

    def do_POST(self) -> None:  # noqa: N802
        length = int(self.headers["Content-Length"])
        Handler.received = json.loads(self.rfile.read(length))
        body = json.dumps({
            "message": {
                "role": "assistant",
                "content": json.dumps({
                    "hypothesis": "raise threshold",
                    "edits": [{"path": "src/score.py", "old": "0.5", "new": "0.6"}],
                }),
            }
        }).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args: object) -> None:
        return


def test_requests_strict_json_without_tools() -> None:
    server = HTTPServer(("127.0.0.1", 0), Handler)
    thread = threading.Thread(target=server.handle_request)
    thread.start()
    try:
        client = OllamaClient(f"http://127.0.0.1:{server.server_port}", "ornith-test")
        proposal = client.propose("objective and bounded file contents", timeout_seconds=10)
    finally:
        thread.join(timeout=10)
        server.server_close()

    assert proposal.hypothesis == "raise threshold"
    assert Handler.received["stream"] is False
    assert Handler.received["model"] == "ornith-test"
    assert "tools" not in Handler.received
    assert Handler.received["format"]["type"] == "object"


def test_client_rejects_non_loopback_endpoint() -> None:
    with pytest.raises(ValueError, match="loopback"):
        OllamaClient("https://models.example.com", "ornith-test")
