---
title: Ground Zero authority over Hermes memory
date: 2026-08-13
status: adopted
role: decision
---

# Ground Zero authority over Hermes memory

## Decision

Ground Zero is Sam's canonical system of record for durable personal context, project state, decisions, priorities, accepted requirements and handoffs. Hermes `MEMORY.md` and `USER.md` are bootstrap caches only. They may retain the Ground Zero pointer, channel routing and a small number of safety or interaction defaults, but they must not become a competing biography, project database or decision ledger.

## Authority order

1. Sam's explicit current correction
2. Live source or completed task receipt for current operational state
3. Ground Zero canonical notes for durable context
4. Session history for provenance and unresolved gaps
5. Hermes memory only for routing to the sources above

A request materially dependent on Sam's history, projects, people, decisions or current priorities must read Ground Zero through the `filesystem-ground-zero` MCP route before Skippy answers or acts. Session history may identify a missing or stale note, but it does not silently replace Ground Zero.

## Consequences

- Start with [[context/index]] or [[context/model-pack]], then read only the relevant domain notes.
- Keep stable facts in `people/` or `companies/`, live status in `project_state/`, decisions in `decisions/`, active work in `items/`, and source material in `imports/`.
- Preserve provenance and contradictions. Correct or supersede rather than silently rewriting history.
- Keep Ground Zero writes explicit, bounded and approval-gated.
- Use live repositories, deployments, runtimes and devices as authority for their present state.
- Treat stale Ground Zero state as an open gap requiring reconciliation, not permission to guess from injected memory.
- Watchdog checks must fail visibly if the Ground Zero MCP route is disabled, the authority contract disappears, the active Aire project state becomes stale, or a sync job points at the retired Obsidian vault.

## Acceptance checks

- A fresh Skippy session asked about a Sam-specific project must use the Ground Zero MCP route before relying on project context.
- Hermes memory remains a compact bootstrap layer rather than duplicating company and project notes.
- The project-state reconciler reads `/Users/samdonworth/GroundZero/vault`, never `~/Documents/Obsidian Vault`.
- Current project-state notes are reconciled from bounded live evidence and surface conflicts instead of reporting false success.

## Connected vault notes

- [[decisions/ground-zero-canonical]]
- [[context/index]]
- [[context/model-pack]]
- [[context/personal-context-data-contract]]
- [[context/review-workflow]]
- [[project_state/personal-agent]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/model-pack]]
- [[context/personal-context-data-contract]]
- [[context/review-workflow]]
- [[decisions/ground-zero-canonical]]
- [[items/ops-aire-hermes-upstream-impact-triage]]
- [[items/ops-project-state-reconciler]]
- [[project_state/personal-agent]]

