# Verified Autoresearch

A fail-closed local experiment loop inspired by Andrej Karpathy's `autoresearch`, adapted for software projects.

This is not recursive model self-training. A local Ollama model proposes one exact source replacement, deterministic commands evaluate it inside a hostile-code container, and Git either commits a reproduced improvement or resets it. The model receives no shell, browser, network, credentials, Git, deployment or arbitrary tool access.

## Safety model

The runner requires all of the following before it will edit anything:

- a Git repository whose root exactly matches the configured workspace;
- a branch beginning with `autoresearch/`;
- a committed `.verified-autoresearch-sandbox` marker containing the exact absolute workspace path;
- a clean worktree;
- an HTTP Ollama endpoint on loopback only;
- a Linux container image pinned by an immutable SHA-256 digest;
- model output matching a strict JSON schema;
- existing regular files matching explicit allowlist globs;
- exact old-text replacements with file-count and byte limits;
- fixed evaluator and guard commands stored outside the model-edit allowlist;
- one finite `AUTORESEARCH_METRIC=<number>` from the evaluator;
- a minimum improvement before commit;
- automatic hard reset for rejected or failed experiments;
- maximum iterations, wall-clock budget, command timeouts and a three-attempt no-progress stop;
- a networkless, non-root, read-only container with dropped capabilities and CPU, RAM, PID, file and output limits for every guard/evaluator command;
- a controller-owned, fsynced, hash-chained JSONL ledger outside the workspace;
- an exact reproduction run before any candidate is committed.

It does not push, deploy, migrate, create files, modify evaluator commands or execute model-generated commands.

## Install

```bash
cd /Users/samdonworth/GroundZero/tools/verified-autoresearch
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -e .
python -m pytest -q

# Free/open-source Linux VM and Docker runtime
brew install colima docker
colima start verified-autoresearch --cpus 2 --memory 2 --disk 15 \
  --runtime docker --vm-type vz --mount-type virtiofs \
  --mount /Users/samdonworth/GroundZero:w --ssh-agent=false --activate
```

The runner has no host-execution fallback. If Docker/Colima or the exact pinned image is unavailable, verification fails closed.

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

Do not configure a push remote for the sandbox. A Git worktree provides rollback, not security containment; candidate evaluation always occurs in a disposable tracked-file snapshot inside the Linux VM/container.

## Configuration

Create a JSON file outside the model-edit allowlist:

```json
{
  "workspace": "/absolute/sandbox/path",
  "model": "ornith-local:q5",
  "ollama_url": "http://127.0.0.1:11434",
  "container_image": "python@sha256:<exact-64-character-image-digest>",
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

Commands are argument arrays, never shell strings. They run in `/workspace` inside the container, so use container paths and executables such as `python3`, not host virtual-environment paths. They are trusted human configuration and must not invoke deployment or credential-bearing operations.

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

Every accepted experiment becomes a local commit on the `autoresearch/*` branch after a second identical evaluation. Rejected and failed experiments are reset to the previous accepted commit. The ledger is hash-chained to detect modification; it is evidence, not a substitute for independent review.

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

A local 9B model is not a frontier coding model. Ornith is an experimental challenger with incomplete license/safety documentation, not a trusted default. More iterations can multiply weak hypotheses and review noise. Continue only when accepted candidates reproduce and reduce human/cloud review effort.

See `SECURITY.md` for the threat model and residual risks.
