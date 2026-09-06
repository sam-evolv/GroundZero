---
title: Agent-Legible System Design Standard
date: "2026-08-31"
status: adopted
decision_owner: Sam Donworth
scope: portfolio-wide
source: https://x.com/doodlestein/status/2094288037458882668
---

# Agent-Legible System Design Standard

## Decision

Sam approved applying the useful part of Jeffrey Emanuel's agent-ergonomic system-design principle across all substantial work, not only the Here’s Health marketing concept.

The principle is adopted as an operating standard for project planning, product architecture, automations, research systems, Kanban briefs, implementation supervision and acceptance review.

## Core rule

A substantial system should be designed so that a capable new agent can understand its current state, sources, objectives, constraints, permitted actions, failure conditions and next useful move from the system artifacts themselves, without reconstructing context from old chats or relying on hidden operator knowledge.

This is not permission for broad autonomous action. Agent legibility and human control are complementary. Outward, irreversible, production, financial and client-facing actions remain approval-gated.

## Required design properties

### Agent-intuitive

- One named source of truth for durable state.
- Explicit object model, state transitions and ownership.
- Current state distinguishable from plans, assumptions and historical records.
- Human-readable and machine-readable representations kept aligned.
- Provenance attached to important facts, requirements and outputs.

### Agent-ergonomic

- The correct next actions are obvious from the available state.
- Tools expose structured inputs, outputs, errors and receipts.
- Constraints, budgets and approval boundaries are explicit before execution.
- Failures are detectable and recoverable, not silently swallowed.
- Reversible actions and previews are preferred before consequential changes.

### Agent-accretive

- Completed work leaves durable evidence, not only a chat summary.
- Approval, rejection and correction signals improve the next run.
- Repeated workflows become reusable skills, templates, tests or structured data.
- Model and provider choices remain replaceable where practical.
- The system becomes easier and cheaper to operate as evidence accumulates.

## Mandatory substantial-work pass

Before implementation or automation, define:

1. Objective and value category.
2. Current verified state and source of truth.
3. Inputs, outputs and responsible owner.
4. Available tools and permitted actions.
5. Constraints, cost or resource ceiling and approval boundary.
6. Failure states, rollback and recovery path.
7. Acceptance criteria and required evidence.
8. Durable artifacts and feedback to retain.

Before acceptance, perform a fresh-agent test:

> Could a capable agent with no chat history understand what exists, what is true, what changed, how it was verified, what remains open and what it is allowed to do next?

If not, the system or handoff is incomplete.

## Kanban application

Every substantial implementation or verification card should include an agent operating contract:

- objective;
- repository or workdir;
- verified starting state;
- owned and unowned scope;
- dependencies and tools;
- constraints and prohibited actions;
- acceptance criteria;
- evidence and artifact requirements;
- approval boundary;
- required handoff state.

Forge remains the implementation owner for substantial Donworth Studio engineering. Vera independently verifies the exact artifact. Skippy integrates the evidence and keeps Sam as the sole human control point.

## Restraint

Do not turn this into process theatre. Trivial questions and one-step actions do not require a large system-design review. Apply the standard where there is persistent state, multiple steps, delegation, automation, meaningful cost, customer impact, production risk or future reuse.

## Connected notes

- [[context/agentic-value-creation-mission]]
- [[context/solo-founder-era]]
- [[context/founder-execution-os]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-01-ios-physical-device-qa-lab-opportunity]]
- [[briefs/2026-09-03-donworth-hybrid-privacy-boundary-receipt-benchmark]]
- [[companies/donworth-ai-solutions]]
- [[context/agentic-value-creation-mission]]
- [[context/founder-execution-os]]
- [[context/index]]
- [[context/solo-founder-era]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]]
- [[decisions/2026-09-01-donworth-imessage-first-remote-control-channel]]
- [[decisions/2026-09-03-hermes-lossless-output-bounding]]
- [[items/donworth-native-evidence-and-route-evaluation]]
- [[items/ops-accepted-artifact-custody-gate]]
- [[items/ops-desktop-ui-approval-readiness-gate]]
- [[items/ops-graph-engineering-pilot]]
- [[project_state/donworth-studio]]

