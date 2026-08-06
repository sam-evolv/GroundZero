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

The personal-agent product will preserve Hermes as the primary runtime and first reproduce the full useful Hermes Agent and Hermes Desktop capability surface through an IrelandGPT-branded web, desktop and responsive phone shell.

This is full outcome parity before simplification. The current Quiet Margin interface is an acceptable visual foundation, but it is not the milestone. Capability cards or representative slices do not count as parity. Every useful Desktop outcome must work through a real Hermes resource or an explicitly paired trusted-desktop path before the product is reorganised for mainstream users.

The earlier prototype gate that made mobile-to-folder retrieval the first implementation milestone is superseded. The folder connector remains useful, but it is one capability of the assistant, not the product architecture or first proof.

## Why

Sam already has direct evidence that Hermes plus persistent context is useful. Rebuilding one bounded capability beside Hermes discards the source of that value and produces little product learning. The first product must expose the engine's real breadth, then simplify it through founder dogfood.

## Consequences

- Hermes sessions, runs, tools, approvals and memory stay authoritative.
- The initial web interface and desktop shell may closely follow proven Hermes behaviour and information architecture.
- Full parity includes chat controls, live tool activity, files, previews, artifacts, voice, memory, skills, schedules, profiles, messaging, agents, Command Center and settings outcomes.
- Terminal, filesystem, project and Git outcomes remain available through Hermes or a paired trusted desktop companion rather than unrestricted public-browser endpoints.
- A mobile home-screen web experience precedes native store submission.
- The complete capability set must remain reachable on phone. Responsive adaptation may use sheets, drawers and progressive disclosure rather than shrinking a desktop cockpit.
- The interface will change only after full functional parity and repeated use reveal actual friction.
- Connectors remain discoverable in Settings but are introduced conversationally at the point of need.
- IrelandGPT gets a product-owned Irish soul: Irish English, restrained contextual Irish phrasing and optional personality profiles without caricature.
- Final model routing, plan design and provider economics are deferred until usage telemetry exists.
- The working name remains provisional.
- Marketing will showcase verified completed work produced with the agent, with Sam approving every outward post.
- No product milestone is satisfied by a static shell, narrow retrieval demo or simulated agent activity.

## Superseded decision boundary

[[briefs/2026-08-05-personal-assistant-prototype-start-gate]] remains as historical evidence of the earlier safety-first retrieval plan. Its constraints around secrets, production actions and honest verification remain useful. Its statement that folder retrieval is the first milestone is no longer authoritative.

## Connected vault notes

- [[imports/2026-08-06-personal-agent-founder-voice-notes]] — source
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]] — interpretation
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]] — clarified full-parity source direction
- [[companies/personal-agent]] — venture
- [[project_state/personal-agent]] — implementation state
- [[items/personal-agent-hermes-desktop-parity]] — active parity ledger
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

