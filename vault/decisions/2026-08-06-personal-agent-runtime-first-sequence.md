---
title: Personal agent runtime-first build sequence
status: decided
created: 2026-08-06
source: Sam founder voice notes
supersedes:
  - briefs/2026-08-05-personal-assistant-prototype-start-gate
---

# Personal agent runtime-first build sequence

## Decision

The personal-agent product will preserve Hermes as the primary runtime and first reproduce Sam's current broadly capable working experience through a simpler web and desktop product shell.

The earlier prototype gate that made mobile-to-folder retrieval the first implementation milestone is superseded. The folder connector remains useful, but it is one capability of the assistant, not the product architecture or first proof.

## Why

Sam already has direct evidence that Hermes plus persistent context is useful. Rebuilding one bounded capability beside Hermes discards the source of that value and produces little product learning. The first product must expose the engine's real breadth, then simplify it through founder dogfood.

## Consequences

- Hermes sessions, runs, tools, approvals and memory stay authoritative.
- The initial web interface and desktop shell may closely follow proven Hermes behaviour.
- A mobile home-screen web experience precedes native store submission.
- The interface will change only after repeated use reveals actual friction.
- Final model routing, plan design and provider economics are deferred until usage telemetry exists.
- The working name remains provisional.
- Marketing will showcase verified completed work produced with the agent, with Sam approving every outward post.
- No product milestone is satisfied by a static shell, narrow retrieval demo or simulated agent activity.

## Superseded decision boundary

[[briefs/2026-08-05-personal-assistant-prototype-start-gate]] remains as historical evidence of the earlier safety-first retrieval plan. Its constraints around secrets, production actions and honest verification remain useful. Its statement that folder retrieval is the first milestone is no longer authoritative.

## Connected vault notes

- [[imports/2026-08-06-personal-agent-founder-voice-notes]] — source
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]] — interpretation
- [[companies/personal-agent]] — venture
- [[project_state/personal-agent]] — implementation state
- [[items/personal-agent-founder-dogfood-and-proof-loop]] — execution
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]] — retained feasibility evidence

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-personal-assistant-prototype-start-gate]]
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]]
- [[briefs/2026-08-06-open-model-enterprise-sovereignty-thesis]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]]
- [[items/personal-agent-founder-dogfood-and-proof-loop]]
- [[project_state/personal-agent]]

