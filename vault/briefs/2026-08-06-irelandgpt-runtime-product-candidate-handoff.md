---
title: IrelandGPT runtime and product candidate handoff
status: verified-local-candidate
source: Hermes and IrelandGPT repository execution, tests, real-process smoke, independent immutable review
created: 2026-08-06
---

# IrelandGPT runtime and product candidate handoff

## Outcome

A new local IrelandGPT candidate now combines an authoritative Hermes session-lifecycle runtime with a delegation-first Ask, Doing, Done and You product shell. The exact pair passed independent immutable review. It was not deployed.

- Hermes runtime: `27f142544b3bbe7ef8fdbd5d6db8b7505614ea13`
- IrelandGPT candidate: `d533206b37e0aecb1d48c4a7cb8e972a0a284743`
- Hermes patch SHA-256: `5f1dd391646b9be59bf4c2f6cd4962835570c010506b1cae05999a1e91073411`
- IrelandGPT patch SHA-256: `e93b22a8633ae7f2d38cb8d2a295499544ff4e3744646eeac31799f9a8b12bc6`

## What was built

### Authoritative Hermes lifecycle

- Authenticated active and archived session enumeration.
- Privacy-safe title and identifier search.
- Safe handling of malformed and FTS operator-like search text.
- Persistent pin, unpin, archive and restore state.
- Capability advertisement for the browser adapter.
- Source-bound direct session access. IrelandGPT refuses direct reads, mutations, forks, deletion, message access and run creation unless Hermes reports `source=hermes_browser`.

### IrelandGPT product shell

- Ask remains the primary conversation and delegation surface.
- Doing shows only genuine current-run, approval and founder-automation state.
- Done loads real active and archived conversation resources, supports search, pin, archive and restore, and does not pretend that ordinary history is a completion receipt.
- You shows real connection status and privacy-filtered capabilities and skills. Dead appearance and accessibility controls were removed; CSS follows operating-system preferences.
- A fixed Ask, Doing, Done and You phone navigation contract was added with safe-area and composer clearance.
- The dedicated public archived route is `GET /api/conversations/archived`, with exact local relay and Vercel allowlisting.
- Existing SSE recovery, persisted-run resume, exact-choice approvals, stop, photo input, auth and privacy projection behavior were preserved.

## Verification evidence

- Hermes gateway run: 597 files, 4,829 tests passed, zero failed, with four known baseline or macOS candidates explicitly excluded.
- IrelandGPT: 147 Python tests passed.
- IrelandGPT: 16 Node tests passed.
- JavaScript syntax, Python compilation and Git diff validation passed.
- Real patched Hermes and IrelandGPT processes passed readiness, create, rename, run start, SSE streaming, history, title search, pin, active enumeration, archive, active exclusion, archived enumeration, archived search, restore and cleanup.
- Independent cross-repository review passed Hermes `27f1425` plus IrelandGPT `9c3e0e1` with no release blocker.
- A focused reviewer then caught a stale runtime claim that called recent history finished work. It was reproduced test-first, fixed and independently re-reviewed. The final `d533206` delta passed.

## Product and safety decisions

- Useful Hermes outcomes are translated into consumer resources. Raw terminals, commands, arbitrary files or URLs, providers, models, tokens and operator controls remain hidden.
- Conversation history is not represented as a durable completion receipt. Genuine Done receipts require a future Hermes-owned terminal handoff resource.
- Founder automations remain privacy-filtered and local-delivery only.
- Current source binding prevents cross-platform session access but is not a multi-user ownership model.
- No production deployment was authorised or attempted. Production remains on the known-good rollback build.

## Remaining gates and next work

- Mobile navigation has passing source and Node behavior tests, but phone pixel verification remains unclaimed because the screenshot action required approval and timed out.
- The primary Hermes checkout still points at the candidate commits. Returning it to `origin/main` was blocked pending explicit approval. The exact runtime is safely preserved on `irelandgpt/session-lifecycle-runtime`.
- Build an IrelandGPT-owned artifact registry before exposing generated files or downloads. Use opaque IDs, application-owned principals, fixed MIME and size limits, authenticated retrieval, expiry and revocation. Never parse `MEDIA:` paths, markdown URLs or local paths from model output.
- Generated text can later be saved through an explicit product action. Image artifacts require a real Hermes byte or opaque-handle contract first.
- Continue useful-outcome parity through owner-bound artifacts, durable receipts, inspectable memory, connections, workspaces, notifications, voice and paired-device continuity.
- Multi-user release requires per-user ownership binding for sessions, runs, automations and artifacts.

## Connected vault notes

- [[project_state/personal-agent]]: live implementation state
- [[items/personal-agent-hermes-desktop-parity]]: capability parity ledger
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]: adopted product promise
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]: runtime-first parity direction
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]: sequencing decision
- [[companies/personal-agent]]: venture context
- [[context/index]]: Ground Zero entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/personal-agent]]

