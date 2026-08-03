from __future__ import annotations

import json
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

from .proposal import Proposal

_SCHEMA = {
    "type": "object",
    "additionalProperties": False,
    "required": ["hypothesis", "edits"],
    "properties": {
        "hypothesis": {"type": "string", "minLength": 1},
        "edits": {
            "type": "array",
            "minItems": 1,
            "items": {
                "type": "object",
                "additionalProperties": False,
                "required": ["path", "old", "new"],
                "properties": {
                    "path": {"type": "string", "minLength": 1},
                    "old": {"type": "string", "minLength": 1},
                    "new": {"type": "string"},
                },
            },
        },
    },
}

_SYSTEM = """You are the proposal component of a fail-closed software experiment.
Return only JSON matching the supplied schema. You have no tools and must not request shell,
network, credentials, deployment, git push, migrations, or changes outside the shown allowlist.
Propose one small, testable exact replacement. The old text must be copied exactly from the
provided file content and occur once. Do not modify tests, evaluators, configuration, security
boundaries, or sandbox markers. If evidence is insufficient, make the smallest reversible edit.
"""


class OllamaClient:
    def __init__(self, base_url: str, model: str) -> None:
        endpoint = urlparse(base_url)
        if endpoint.scheme != "http" or endpoint.hostname not in {
            "127.0.0.1", "localhost", "::1"
        }:
            raise ValueError("Ollama endpoint must use HTTP on loopback")
        if endpoint.path not in {"", "/"} or endpoint.query or endpoint.fragment:
            raise ValueError("Ollama endpoint must not contain a path, query or fragment")
        self.base_url = base_url.rstrip("/")
        self.model = model

    def propose(self, context: str, timeout_seconds: int) -> Proposal:
        payload = {
            "model": self.model,
            "stream": False,
            "format": _SCHEMA,
            "messages": [
                {"role": "system", "content": _SYSTEM},
                {"role": "user", "content": context},
            ],
            "options": {"temperature": 0.2, "top_p": 0.9, "num_ctx": 8192},
            "keep_alive": 0,
        }
        request = Request(
            self.base_url + "/api/chat",
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urlopen(request, timeout=timeout_seconds) as response:  # nosec B310: URL validated above
                body = response.read(131_073)
                if len(body) > 131_072:
                    raise RuntimeError("Ollama response exceeded 128 KiB")
                raw = json.loads(body.decode("utf-8"))
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError) as exc:
            raise RuntimeError(f"local Ollama request failed: {exc}") from exc
        try:
            content = raw["message"]["content"]
        except (KeyError, TypeError) as exc:
            raise RuntimeError("Ollama response lacks assistant content") from exc
        if not isinstance(content, str):
            raise RuntimeError("Ollama assistant content must be text")
        return Proposal.from_json(content)
