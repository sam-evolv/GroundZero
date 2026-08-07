---
title: Personal agent single-conversation and contextual live-work interface
status: decided
created: 2026-08-07
source: Sam founder voice note and direct review of rejected interface
supersedes: Ask, Doing, Done and You as primary product navigation
---

# Personal agent single-conversation and contextual live-work interface

## Decision

The product will use one continuous assistant conversation as its primary experience. It will not use Doing, Done, You, automations, capabilities, agents, skills or infrastructure concepts as permanent primary navigation.

Desktop may reveal a contextual split-screen work surface when the assistant is browsing or producing something visually useful. Mobile will use a sheet or focused detail view for the same work. History, settings, personal context and connections remain secondary surfaces opened intentionally or surfaced at need.

## Why

The prior multi-surface design translated internal runtime structure into consumer navigation. It felt complicated, poorly made and less usable than Telegram. Ordinary users should experience the outcome, progress, approval boundary and result without learning how Hermes is organised.

A familiar chat lowers learning cost. Contextual live work differentiates the product by making genuine action visible without turning the product into an agent cockpit.

## Consequences

- Sam owns the next visual and interaction design; implementation treats it as the presentation contract.
- Hermes remains the authoritative engine and retains its useful capability breadth.
- Work state is rendered in human language inside or beside the conversation.
- The interface may show elapsed task time but never chain-of-thought or fabricated activity.
- Time Given Back is allowed only through a conservative, versioned and auditable estimation method.
- Personal context is inspectable and correctable but is not exposed as a knowledge-management workload.
- Voice shares the same identity, memory, approvals and tasks as text.
- The existing access-code release and unfinished passkey work remain secondary until the core experience is accepted.
- No revised interface is deployed until responsive and real-runtime verification passes.

## What remains from the prior charter

The delegation-first promise, just-in-time connections, approval gates, completed outcomes, evidence, trust ladder and time-returned positioning remain active. Only the primary information architecture is superseded.

## Connected vault notes

- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]] — founder brief
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]] — prior charter
- [[companies/personal-agent]] — venture record
- [[project_state/personal-agent]] — implementation state
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]] — enduring product promise
- [[decisions/_Index]] — decision log
- [[context/index]] — Ground Zero entry point
