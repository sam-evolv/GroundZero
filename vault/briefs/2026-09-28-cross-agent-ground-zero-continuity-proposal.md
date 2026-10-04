---
title: Cross-agent Ground Zero continuity proposal
date: "2026-09-28"
status: proposed
source: Sam's question in Codex on 28 September 2026, plus local Ground Zero inspection
---

# Cross-agent Ground Zero continuity proposal

## Aim

Give ChatGPT, Codex, Hermes and Claude consistent access to relevant durable context and verified task handoffs without making chat memory, a model summary or a second database authoritative. Perfect recall cannot be guaranteed; the operational target is traceable, fresh, conflict-aware continuity.

## Observed state, 28 September 2026

- Ground Zero is already canonical under [[decisions/ground-zero-canonical]] and [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]. Sam authorized meaningful vault write-back under [[decisions/2026-09-28-ground-zero-continuity-capture]].
- Claude's documented `ground-zero-vault` MCP route was repaired and tested on 28 September. See [[context/claude-vault-integration]]. This does not prove every later Claude session still has access.
- Codex in this task read and wrote the local Ground Zero checkout. This does not prove ChatGPT or Hermes connectivity.
- Local Git inspection on 28 September found branch `claude/gallant-tesla-YJu9m` four commits ahead of its configured upstream and 137 working-tree status entries. These figures are a point-in-time local snapshot, not a remote freshness check.
- [[items/ops-vault-sync-change-receipt-gate]] already proposes a reviewed vault-only sync manifest because the existing all-tree sync path can include unrelated repository state.

## Proposed operating contract

1. Give each agent a small bootstrap pointer to the same Ground Zero root and this protocol. On context-dependent requests, verify access, read `GROUND_ZERO.md`, `vault/context/index.md`, `vault/context/model-pack.md`, then only task-relevant notes. Ordinary general questions need no vault read.
2. Resolve current operational claims against live sources or completed receipts. State the exact source, observation time and uncertainty. Preserve conflicts and corrections.
3. After material work, write a concise dated update to the correct canonical note with scope, status, evidence, artifact or commit if applicable, blockers and next action. Read the edited note back. Do not write every conversation turn or infer durable facts from untrusted material.
4. Use a common revision watermark in handoffs: local Git commit plus dirty/clean state, and remote revision where checked. An agent on a different copy must detect lag before trusting current status.
5. Use one bounded sync lane: produce a read-only vault-only change receipt, review the exact manifest, then separately authorize commit and remote push. Do not let ordinary note capture stage unrelated code or nested repositories.
6. Prevent simultaneous writers from silently overwriting one note. Re-read before patching, use small note-scoped edits, detect conflicts, and preserve competing evidence for Sam's correction when needed.
7. Run a four-client acceptance drill: each client reads the same canary note and reports its revision; each authorized writer makes a bounded test update; another client reads it after the approved sync. Fail visibly if access, freshness, write-back, or provenance fails.

## Setup progress, 28 September 2026

- Codex global `/Users/samdonworth/.codex/AGENTS.md` was created with the Ground Zero read and write-back protocol. `codex mcp get ground_zero_vault` reports an enabled stdio route using the same local filesystem proxy and canonical root as Claude. An initial restricted-sandbox probe timed out; an escalated read-only probe then initialized the server, listed read/write tools and read `GROUND_ZERO.md` successfully. Fresh Codex-session write-back acceptance remains open.
- Claude's desktop config lists `ground-zero-vault` pointing at the local canonical root. Its 28 September documented read and scratch-write test is historical evidence; a fresh cross-client canary remains open.
- Hermes live config has `filesystem-ground-zero` enabled and its bootstrap memory points to Ground Zero. The latest 28 September retrieval-canary state says failure: the Hermes session did read a 233,008-character vault note, then reached its eight-iteration limit after a multi-tool-call format error. That is evidence of route access, not successful answer or canary acceptance.
- No ChatGPT Ground Zero app was configured. It needs a separately reviewed remote or tunnel connection and a bounded tool surface. The vault has not been exposed by this work.
- A dedicated private MCP stdio service was installed at `scripts/ground-zero-private-mcp.py`. It exposes bounded revision, search and note-read tools by default; its revision-checked patch tool is absent unless `GZ_ALLOW_WRITE=1`. Synthetic path-traversal, symlink, stale-hash and patch tests passed; the installed server initialized, listed read-only tools and read `context/index.md`. No tunnel or ChatGPT connection was activated.
- No Ground Zero commit, push, sync or remote sharing was performed in this task.

## Product connection boundary

- Codex and Claude on Sam's Mac can use the local repository or approved MCP route, subject to their actual session permissions.
- Hermes should use its documented `filesystem-ground-zero` MCP route and keep `MEMORY.md`/`USER.md` as bootstrap pointers only. Verify the route in a fresh session.
- ChatGPT outside this local machine needs a supported connector to the canonical source. Official OpenAI documentation says custom ChatGPT MCP apps connect to remote MCP servers, with write support dependent on plan and permissions; a local filesystem MCP server is not directly connected. A secure remote bridge or approved sync-backed service would need a separate design and access review. Do not assume this Codex task's local access transfers to every ChatGPT chat.

## ChatGPT Plus or Pro connection plan

Sam reported using ChatGPT Plus or Pro for the target chats. Current official OpenAI developer-mode documentation lists Plus and Pro as eligible for remote MCP apps with read and write tools. The documented Secure MCP Tunnel supports a private stdio MCP server on Sam's Mac with outbound-only HTTPS, avoiding a public listener.

Prepare a dedicated Ground Zero MCP tool surface rather than exposing the whole repository filesystem: `get_revision`, `search_notes`, `read_note` with bounded output, and `propose_note_patch`/`apply_note_patch` limited to `vault/` with exact prior-content or revision checks. Deny paths outside the vault, secret-bearing files, Git control, bulk export, arbitrary commands, and automatic commit/push. Start with read-only tools enabled; test write-back only after the specific vault access scope and tunnel association are approved.

The activation steps would be: create a Platform tunnel identity for Sam's personal organization, run the official tunnel client on the Mac against the dedicated MCP server, enable ChatGPT Developer mode, create a private Ground Zero app by selecting the tunnel, then run a fresh read and bounded write/readback canary. This requires a Platform runtime API key and user review of the exact access being granted. No tunnel client, key, endpoint or ChatGPT app was created in this task.

Official references: https://developers.openai.com/api/docs/guides/developer-mode and https://developers.openai.com/api/docs/guides/secure-mcp-tunnels .

## Next gate

First reconcile and review the existing dirty Ground Zero checkout through the vault-only change receipt. Then verify actual access and revision parity in fresh Codex, Hermes, Claude and ChatGPT sessions. No connector deployment, commit, push, sync or sharing is authorized by this proposal.

## Connected notes

- [[context/personal-context-data-contract]]
- [[context/capture-workflow]]
- [[context/claude-vault-integration]]
- [[items/ops-vault-sync-change-receipt-gate]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/capture-workflow]]
- [[context/claude-vault-integration]]
- [[context/cross-agent-ground-zero-prompts]]
- [[context/personal-context-data-contract]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/2026-09-28-ground-zero-continuity-capture]]
- [[decisions/ground-zero-canonical]]
- [[items/ops-vault-sync-change-receipt-gate]]

