---
title: Personal agent Chat, Work and Profile architecture
status: decided
created: 2026-08-07
source: Sam's direct prototype review and independently tested Aire v3 artifact
supersedes: 2026-08-07 personal-agent single-conversation-only interpretation
---

# Personal agent Chat, Work and Profile architecture

## Decision

The product is conversation-led, not conversation-only.

It will use two quiet primary surfaces:

- **Chat** for handing work over, collaborating, clarifying and receiving concise updates.
- **Work** for persistent jobs, approvals, progress, blockers, completed outcomes and files.

**Profile** is a secondary surface opened from the identity control. It governs personal context, evidence-backed learning, autonomy, connected services, devices, privacy and account settings.

Every delegation creates one persistent work object. Chat and Work are two views of that same object, not separate records.

## Why

A single long conversation becomes difficult to scan once Aire is carrying several jobs. The rejected Doing and Done dashboards exposed runtime structure and made the product feel complex. The tested Chat and Work model preserves the familiarity of messaging while giving responsibility and outcomes a durable home.

Work is not an agent-management destination. It is a concise answer to what needs the user, what is moving and what finished.

## Interaction rules

- Chat remains the default entry and identity anchor.
- Work uses ordinary language, not Hermes, agent, skill, tool or runtime terminology.
- A compact Chat card may open the same job in Work.
- A job opened from Work returns to Work.
- A job opened from Chat returns to the conversation.
- Consequential actions show the exact action, consequence, evidence and approval boundary.
- Human-only browser steps may use secure takeover only when Aire truthfully stops observing and resumes from a real hand-back point.
- Profile remains secondary and must not become a technical memory or settings dashboard.
- Desktop may adapt Chat and Work into an optional contextual split without changing the underlying object model.

## Visual source of truth

The current mobile visual baseline is the directly reviewed `Aire conversational interface (3).zip`, SHA-256 `70469b8ab0b2a3cee5b0a8a4f5e8da186743be5990ef48172ca5ce3646463560`.

Its warm ivory, petrol teal, Newsreader and Karla system is accepted as the current direction. The name Aire remains reopenable.

## Implementation conditions

- Demo fixtures must be isolated from real user data.
- Every visible status must map to authoritative Hermes state.
- No fake browser work, payment state, progress or connection status.
- Mobile accessibility and safe-area behaviour must be verified on a real iPhone.
- Desktop remains a separate design task.
- No redesign should be deployed until the vertical slice from Chat to Work to verified outcome passes.

## Connected vault notes

- [[briefs/2026-08-07-aire-v3-independent-design-audit]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[decisions/2026-08-07-personal-agent-single-conversation-live-work-interface]]
- [[companies/personal-agent]]
- [[project_state/personal-agent]]
- [[decisions/_Index]]
- [[context/index]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-07-aire-six-month-autonomous-company-mission]]
- [[briefs/2026-08-07-aire-v3-independent-design-audit]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]]
- [[decisions/2026-08-07-personal-agent-single-conversation-live-work-interface]]
- [[items/ops-graph-engineering-pilot]]
- [[project_state/personal-agent]]

