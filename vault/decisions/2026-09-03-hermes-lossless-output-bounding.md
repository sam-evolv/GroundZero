---
id: hermes-lossless-output-bounding-2026-09-03
title: Bound Hermes raw tool payloads without reducing model capability
kind: decision
status: active
decided_at: "2026-09-03T08:04:32+01:00"
owner: Sam Donworth
---

# Bound Hermes raw tool payloads without reducing model capability

## Decision

Reduce only the amount of oversized raw terminal and file output placed into the model context for the default, Forge, and Vera profiles:

- `tool_output.max_bytes`: `50000` → `20000`
- `file_read_max_chars`: `100000` → `40000`

Keep the substantive reasoning and continuity settings unchanged:

- primary model remains `gpt-5.6-sol` through `openai-codex`
- `compression.threshold` remains `0.5` (the installed Codex route may apply its documented effective-threshold override)
- `compression.protect_last_n` remains `20`
- `compression.proactive_prune_tokens` remains disabled
- no weaker auxiliary compression model is enabled

## Why

The safe reduction is at the raw-evidence boundary, not model capability. Oversized terminal results retain head/tail context and persist the full redacted output for targeted recovery. Oversized file reads return a continuation cursor so the agent can page through every line. This reduces automatic prompt bulk while preserving access to exact evidence when it is relevant.

The three X posts supplied by Sam were treated as candidate tuning rather than authoritative configuration. Their 60% claim applies to the two configured caps, not to total end-to-end token usage. Earlier lossy compression and a weaker compression model were rejected without representative quality evidence.

Sources:
- https://x.com/bkashjosi/status/2095403870721810453?s=46
- https://x.com/bkashjosi/status/2095403874798719052?s=46
- https://x.com/bkashjosi/status/2095403863004045507?s=46
- https://hermes-agent.nousresearch.com/docs/user-guide/configuration
- https://hermes-agent.nousresearch.com/docs/user-guide/context-compression

## Verification evidence

- Hermes CLI read-back confirmed both values in all three profiles while the compression settings remained unchanged.
- `44` focused Hermes tests passed: terminal truncation/spill plus file-read guards.
- A live isolated runtime probe was repeated for default, Forge, and Vera:
  - a `45,098`-character terminal result was bounded to `19,925` inline characters and persisted for recovery;
  - a `90,999`-character, `1,000`-line file was reconstructed exactly through three continuation reads;
  - each profile resolved the new `20,000` and `40,000` limits.
- On the terminal fixture, the immediate inline payload fell by `25,173` characters (`55.8%`). Savings on real work depend on how often outputs exceed the caps.
- Independent Vera audit `t_641a2b61` returned **APPROVE** against repository HEAD `375ce8eee51b9d76714cb6fd1f200c4c9ef83c4a`: secret-safe comparison found exactly the two authorised changes in each profile, `44/44` focused tests passed, and three fresh profile-scoped probes proved exact terminal-spill recovery and exact five-page file reconstruction.
- Vera’s reporting condition is binding: these are **character-window reductions that lower immediate prompt payload**, not strict byte/token limits or whole-JSON caps. Existing gateways were intentionally not restarted.

## Rollback

Mode-`0600` pre-change copies of each profile configuration were created with suffix `pre-token-optimization-20260903T080432+0100`. Rollback should restore only the two values above; do not overwrite unrelated later configuration changes from a whole-file backup.

## Consequences

- Agents should use the supplied spill path or `next_offset` when omitted evidence is material.
- Routine short outputs are unchanged.
- Large irrelevant outputs no longer occupy as much immediate context.
- Further changes to compression threshold, protected turns, proactive pruning, or auxiliary models require a representative before/after quality benchmark and independent review.

## Connected vault notes

- [[context/index]] — canonical context entry point
- [[decisions/_Index]] — durable decision log
- [[project_state/donworth-studio]] — Forge and Vera are active delivery profiles
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — evidence and agent-legibility standard

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[project_state/donworth-studio]]

