# Verified Autoresearch

A fail-closed local experiment loop inspired by Andrej Karpathy's `autoresearch`, adapted for software projects.

This is not recursive model self-training. A local Ollama model proposes one exact source replacement, deterministic commands evaluate it, and Git either commits an improvement or resets it. The model receives no shell, browser, network, credentials, Git, deployment or arbitrary tool access.

## Safety model

The runner requires all of the following before it will edit anything:

- a Git repository whose root exactly matches the configured workspace;
- a branch beginning with `autoresearch/`;
- a committed `.verified-autoresearch-sandbox` marker containing the exact absolute workspace path;
- a clean worktree;
- an HTTP Ollama endpoint on loopback only;
- model output matching a strict JSON schema;
- existing regular files matching explicit allowlist globs;
- exact old-text replacements with file-count and byte limits;
- fixed evaluator and guard commands stored outside the model-edit allowlist;
- one finite `AUTORESEARCH_METRIC=<number>` from the evaluator;
- a minimum improvement before commit;
- automatic hard reset for rejected or failed experiments;
- maximum iterations, wall-clock budget, command timeouts and a three-attempt no-progress stop;
- append-only JSONL experiment records outside the workspace.

It does not push, deploy, migrate, create files, modify evaluator commands or execute model-generated commands.

## Install

```bash
cd /Users/samdonworth/GroundZero/tools/verified-autoresearch
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python -m pytest -q
```

## Prepare an isolated worktree

Run this from the source repository. Never point the tool at the normal working branch.

```bash
git worktree add /absolute/sandbox/path -b autoresearch/my-pilot HEAD
cd /absolute/sandbox/path
python3 - <<'PY'
import json
from pathlib import Path
root = Path.cwd().resolve()
Path('.verified-autoresearch-sandbox').write_text(
    json.dumps({'workspace': str(root), 'version': 1}), encoding='utf-8'
)
PY
git add .verified-autoresearch-sandbox
git commit -m "chore: mark isolated autoresearch sandbox"
```

Do not configure a push remote for the sandbox. Production projects should additionally isolate credentials and network access at the operating-system/container boundary.

## Configuration

Create a JSON file outside the model-edit allowlist:

```json
{
  "workspace": "/absolute/sandbox/path",
  "model": "ornith-local:q5",
  "ollama_url": "http://127.0.0.1:11434",
  "objective": "Improve held-out retrieval score without changing protected behavior.",
  "allowed_globs": ["src/retrieval.py"],
  "evaluator": ["python3", "evaluate.py"],
  "guards": [["python3", "guard.py"], ["python3", "-m", "pytest", "-q"]],
  "max_iterations": 10,
  "max_minutes": 120,
  "command_timeout_seconds": 300,
  "min_delta": 0.001,
  "max_files": 1,
  "max_edit_bytes": 20000
}
```

Commands are argument arrays, never shell strings. They are trusted human configuration and must not invoke network, deployment or credential-bearing operations.

## Verify before running

```bash
verified-autoresearch verify experiment.json
```

This checks the branch, marker, cleanliness, baseline evaluator and all guards without calling the model or editing files.

## Run a bounded campaign

```bash
verified-autoresearch run experiment.json
```

Results are written to:

```text
<workspace-parent>/.<workspace-name>.autoresearch-state/ledger.jsonl
```

Every accepted experiment becomes a local commit on the `autoresearch/*` branch. Rejected and failed experiments are reset to the previous accepted commit.

## OpenHouse adoption gate

The included `examples/openhouse-retrieval-scratch` is synthetic and contains no production data. It verifies mechanics only. Do not aim this tool at the real OpenHouse retrieval implementation until there is an immutable, source-grounded, held-out benchmark for retrieval recall, exact factual correctness, citation correctness, unsupported claims, latency, cost and tenant isolation.

For OpenHouse:

- use an isolated V2 worktree only;
- keep current-live and My Home boundaries immutable;
- prohibit auth, tenancy, migrations, Vercel, Supabase and production aliases;
- keep evaluators, fixtures and guardrails outside all edit globs;
- require independent GPT-5.6 review before any candidate is promoted;
- never auto-push or auto-deploy.

## Limits

A local 9B model is not a frontier coding model. More iterations can multiply weak hypotheses and review noise. Continue only when accepted candidates reproduce and reduce human/cloud review effort.

See `SECURITY.md` for the threat model and residual risks.
