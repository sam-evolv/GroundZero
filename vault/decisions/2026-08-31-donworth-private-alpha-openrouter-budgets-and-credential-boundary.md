---
title: Donworth private-alpha OpenRouter budgets and credential boundary
date: "2026-08-31"
status: adopted
decision_owner: Sam Donworth
scope: Donworth Studio private alpha
source: Sam direct decision recorded on Donworth Studio Kanban task t_3fad227e
---

# Donworth private-alpha OpenRouter budgets and credential boundary

## Decision

For the initial Donworth Studio Desktop private alpha:

- use Sam's existing OpenRouter API account as the business/developer inference path;
- limit the first cohort to three invited testers;
- enforce a hard ceiling of USD $20 per tester per month and USD $60 per month in aggregate;
- keep all OpenRouter management and provider credentials server-side;
- issue separate tester identities and short-lived Donworth session tokens;
- enforce both a Donworth-side quota ledger and provider-side per-key limits, expiry, disable and revocation;
- never share, embed, proxy or export Sam's ChatGPT/Codex consumer OAuth or a reusable master provider key; and
- keep OpenCode Go optional for Sam's own internal local use only, not for third-party tester benefit.

## Why

The alpha should be free to invited testers without exposing Sam's personal accounts, Mac, profiles, sessions, memory or provider secrets. Two independent budget controls bound spend if either the broker logic or a provider child key fails. Separate identities and revocation make individual tester access auditable and removable.

## Consequences

- The desktop client may receive only a short-lived Donworth entitlement/session token, never a provider secret.
- Tool execution, local profiles, memories, sessions and files remain on each tester's device; the inference broker does not grant access to Sam's Hermes gateway or Mac.
- Provider activation must read the existing secret from approved server-side configuration without printing or copying it into source, artifacts, logs, screenshots, chat or Ground Zero.
- A local credential-free proof with synthetic users must pass tenant isolation, expiry/revocation, quota exhaustion and export-secret checks before any live provider use.
- Hosting choice, account-service implementation, signing/notarisation, provider activation, any spend and tester invitations remain separate approval gates. This decision does not authorise them.

## Open gaps

- No account service, broker, quota ledger or provider child-key lifecycle has yet been independently accepted.
- No paid inference call or external tester invitation has occurred.
- Retention, deletion, model allowlist, support-access and incident-response contracts still require executable proof and independent review.

## Connected vault notes

- [[companies/donworth-ai-solutions]] — parent company context
- [[project_state/donworth-studio]] — live implementation and acceptance state
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — substantial-work operating standard
- [[context/personal-context-data-contract]] — provenance and data-boundary rules
- [[decisions/_Index]] — chronological decision log

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-01-donworth-imessage-owner-desk-validation-wedge]]
- [[companies/donworth-ai-solutions]]
- [[context/index]]
- [[context/model-pack]]
- [[context/personal-context-data-contract]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-01-donworth-imessage-first-remote-control-channel]]
- [[items/donworth-publishable-and-outreach]]
- [[project_state/donworth-studio]]

