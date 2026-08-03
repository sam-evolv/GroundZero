# Security

## Threat model

Treat the local model as untrusted input. Model weights may contain hidden behaviors, training-data artifacts or intentionally triggered outputs. A successful checksum proves artifact identity, not benign behavior.

The runner therefore does not expose tools to the model. It accepts only strict JSON containing an explanatory hypothesis and exact text replacements. It validates paths, symlinks, hard links, allowlist membership, payload size, secret-like material and Git diff scope before evaluators run in a Linux container.

## Protected control plane

The model cannot modify:

- experiment configuration;
- evaluator or guard commands unless a human incorrectly allowlists them;
- held-out fixtures;
- the sandbox marker;
- Git remotes or hooks through this API;
- deployment, migration or release configuration unless a human incorrectly allowlists it.

The operator must keep those paths outside `allowed_globs`.

## Supply chain

The selected Ornith artifact is pinned to Hugging Face repository revision:

```text
3296bc7a404871a72ac3f1903f561459c09b5c17
```

Expected Q5_K_M SHA-256:

```text
d1b36095636c096b04ea09e798a7a378956f2fa9099340bd54add1954aaf149c
```

The GGUF repository contains documentation, images and GGUF data artifacts, not executable setup scripts. Loading the GGUF through Ollama does not execute the base repository's `trust_remote_code` Python path.

Hugging Face metadata declares MIT licensing, but the repository's linked `LICENSE` file returned 404 during the 2026-08-03 audit. This is a licensing hygiene defect. Treat commercial redistribution or embedding as not independently cleared until the publisher adds the license text or counsel accepts the model-card declaration. Local internal experimentation has no usage fee, but electricity, storage and review time remain real costs.

## Runtime boundary

Ollama must remain bound to `127.0.0.1`. Do not expose port 11434 to LAN or internet. This workflow was verified with Ollama 0.32.5 and structured JSON output.

Evaluator and guard commands never run under the normal macOS user. The controller copies only tracked regular files into a disposable snapshot and mounts that snapshot read-only inside a Colima Linux VM/Docker container. The container has no network, runs as UID/GID 65534, has a read-only root filesystem, no additional capabilities, `no-new-privileges`, no Docker socket, a disposable no-exec `/tmp`, and CPU, RAM, PID, open-file, file-size, output and wall-time limits. The model process remains outside the container and is unloaded after each proposal.

This is containment, not proof of correctness. The complete tracked snapshot is readable inside the candidate container, so a candidate can inspect visible evaluator code and fixtures. A real hidden holdout must be supplied by a separate trusted driver that sends cases to the candidate without mounting expected answers into the candidate namespace. The included synthetic pilot proves containment and keep/revert mechanics only.

## Residual risks

- A model can propose subtly vulnerable code that passes incomplete tests.
- A weak or gameable metric can reward harmful changes.
- Exact replacement validation cannot prove semantic safety.
- The candidate can inspect visible evaluator logic and game a weak benchmark.
- A trusted evaluator image or command can be compromised; pin and audit its exact digest.
- Parent-directory or Git hooks configured by the operator can have side effects.
- Continuous inference can create memory pressure and thermal throttling.
- Accepted local commits are candidates, not release approvals.

## Required release gate

No accepted experiment is production-ready until an independent reviewer checks the diff, reruns immutable evaluation and project security/build gates, and explicitly approves the exact commit. OpenHouse candidates additionally require current-live/V2 isolation certification. No automatic push, merge, migration or deployment is permitted.
