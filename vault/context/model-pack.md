---
title: Ground Zero Model Pack
purpose: Compact context for any connected LLM
---

# Ground Zero Model Pack

Use this note when a model needs quick, high-signal context.

## Read order
1. [[context/index]]
2. [[people/sam-donworth]]
3. [[companies/openhouse-ai]]
4. [[companies/personal-agent]]
5. [[companies/cara]]
6. [[companies/openbook]]
7. [[companies/evolv-renewables]]
8. [[companies/heres-health]]
9. [[project_state/personal-agent]]
10. [[project_state/cara]]
11. [[project_state/oh]]
12. [[project_state/ob]]
13. [[project_state/renew]]
14. [[project_state/heres-health-app]]

## Sam
- Founder of OpenHouse AI, OpenBook, Evolv Renewables and Aire, the active personal-agent venture.
- Wants no-fluff help that saves time, reduces stress, and creates value.
- Works full-time, so plans should fit evenings and weekends and target near-term cash.
- Prefers voice replies only in car mode or after sending a voice note.
- Current LinkedIn source snapshot contains 832 connections through 12 August 2026. Use [[context/linkedin-network]] as a relationship-routing source, not a mailing list, and verify live roles before relying on them.

## Companies
### Personal agent venture
- Active runtime-first build called Aire. The canonical product repository is `/Users/samdonworth/Projects/IrelandGPT`; the current physical-iPhone source-of-truth worktree is clean locally at unpublished `83e582c` with no configured upstream. That exact candidate is installed on Sam’s iPhone and Sam directly confirmed that it opens without the false whole-app connection warning. This verifies the startup-warning boundary only: Profile context still returns `404`, Work still returns `502`, and the Work Receipt detail plus a fresh end-to-end streaming request remain without rendered-screen acceptance. The Hermes userspace Tailscale daemon is running, Serve remains configured for the tailnet-only hostname, and Tailscale's internal resolver now resolves that hostname; ordinary host DNS and direct host-side HTTPS resolution still fail, so tailnet HTTP reachability from the host or iPhone remains unverified. No public route or production deployment was made. Full provenance and open acceptance gaps are tracked in [[project_state/personal-agent]].
- Local Aire/Hermes compatibility branches `944a03e` and `1004f3e` implement a repair tranche but remain unpushed, unloaded by the observed processes, unintegrated and without independent or physical acceptance; they do not supersede `83e582c` or close the Profile and Work gaps. Upstream Hermes `main` is now at `57f1219d`, 758 commits beyond their `f0c222c` base, with the latest verified range isolating relay timeout payloads, normalising sparse OpenAI streaming responses, binding Desktop capability configuration to the selected profile's own gateway, and adding Bot Mode identity plus delegated-CLI refusal coverage; this is review input, not Aire progress.
- Hermes is the engine. Native iPhone founder dogfood is active, while useful web and desktop outcome parity remain required.
- User-facing promise: a delegation-first personal operating system that removes hated work and returns time, not an AI chatbot or visible model wrapper.
- First-use target: complete one bounded, high-friction job within minutes, requesting connectors only when needed and preserving approval gates for consequential actions.
- Primary experience is one continuous assistant conversation. Useful live browser or creation work may open contextually beside chat on desktop and as a focused detail on mobile; runtime jargon and capability inventories stay hidden.
- Product value is completed delegation and conservatively evidenced Time Given Back. Voice and inspectable personal context are first-class but must remain part of the same identity and task state.
- Distribution thesis: verified work completed with the agent becomes founder-led proof, with every outward post approved by Sam.
- Six-month mission: make Aire useful to real customers, then progressively operate Aire through its own agentic system and earn a truthful, auditable claim to Irish AI and automation leadership. See [[briefs/2026-08-07-aire-six-month-autonomous-company-mission]] and [[goals/personal-agent-ai-operated-company-proof]].
- See [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]], [[briefs/2026-08-06-personal-agent-founder-operating-brief]] and [[project_state/personal-agent]].

### Cara
- Deprioritised since Sam's 29 July founder reassessment and not to be resumed without explicit reactivation. The retained concept is an Irish SME callable digital assistant / phone-number-with-a-brain.
- The remote Phase 0 repository exists, but no real +353 call acceptance is recorded. The retained reactivation gate is one excellent live call with transcript and cost logging before app/dashboard work.

### OpenHouse AI
- Core business.
- Premium proptech SaaS for handover, aftercare, and sales pipeline management.
- Current focus: stabilise production migration, close Sprint 5, keep premium quality.

## Connected vault notes

- [[context/index]] — main entry point
- [[people/sam-donworth]] — founder profile
- [[companies/openhouse-ai]], [[companies/cara]], [[companies/openbook]], [[companies/evolv-renewables]] — companies
- [[project_state/cara]], [[project_state/oh]], [[project_state/ob]], [[project_state/renew]] — live status
- [[goals/oh-activation]], [[goals/oh-v2-launch]], [[goals/ob-retention]] — goals
- [[items/_Index]] — active items

### OpenBook
- SMB booking platform for Irish service businesses.
- Founder-led growth.
- Key churn lever: no-shows.
- Lead gen should focus on small local Cork businesses.

### Evolv Renewables
- Commercial rooftop renewables business.
- One install live, one in survey.
- Main pain: manual compliance reporting.

### Here’s Health client engagement
- Discovery-pending mobile app project introduced through Keith Crowley, with Conor as primary client contact.
- Original request is a Square-connected café click-and-collect app. Sam’s proposed commercial direction is Here’s Health Digital Platform, Phase One, spanning Home, Café, Shopify retail, Rewards and Account.
- Version-one architecture keeps Square café commerce and Shopify retail commerce operationally separate while presenting one premium brand experience.
- Six-week production-candidate target is gated on Week 1 proof of Square catalogue/order/fulfilment, Shopify catalogue/basket/checkout, staff hardware workflow and app-account readiness.
- See [[companies/heres-health]], [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[briefs/2026-08-13-heres-health-digital-platform-phase-one]].

## Current operating rules
- Use separate specialist agents in separate chats where possible.
- Keep durable context in the git-backed Ground Zero vault, not scattered across chats or duplicated into Hermes memory. See [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]].
- Do not store secrets in the vault.
- Preserve history rather than overwriting decisions.
- Apply [[context/personal-context-data-contract]] to durable personal context: append-only events, provenance, correction, explicit missing values, exact ownership and recoverable projections.
- Run [[context/mirror-review-protocol]] only after explicit source-scope approval; never schedule broad transcript mining automatically.
- Keep raw external imports in `imports/` and curate the useful parts into the canonical notes.
- Load [[context/openhouse-openbook-design-system]] before any OpenHouse or OpenBook design work.

## How to get the most leverage
- Treat the vault as the system of record, not just a note dump. Hermes memory is a small bootstrap cache, never a competing source of truth.
- File stable facts once, then reuse them everywhere.
- Capture decisions so they are not re-litigated.
- Keep project state current so models can work from live truth.
- Use the vault to generate briefs, plans, follow-ups, and automation triggers.

## Best entry points for models
- For broad context, start here.
- For OpenHouse or OpenBook interface, website, presentation, prototype or visual-asset work, read [[context/openhouse-openbook-design-system]] and its linked source package before designing.
- For a company-specific task, open that company note and current project state.
- For live execution, use the relevant item note.
- For structure and filing, read [[context/ground-zero-structure]] and [[context/capture-workflow]].
- For review and maintenance, read [[context/review-workflow]] and [[context/automation-ideas]].
- For founder execution, decisions, and high-leverage triage, read [[context/founder-execution-os]].
- For agentic strategy, capability adoption and autonomy boundaries, read [[context/agentic-value-creation-mission]].
- For launch-loop strategy, read [[context/autonomous-business-launch-loop]].
- For solo-founder / agentic-commerce strategy, read [[context/solo-founder-era]].
- For learning reusable workflows, read [[context/learn-targets]].
- For Claude app or Claude Desktop setup, read [[context/claude-vault-integration]], [[context/claude-quickstart]], or [[context/claude-access-observed]].
- For a scaling / workflow question, read [[context/scaling-playbook]].
- For source-to-note knowledge base building, read [[context/llm-wiki-pattern]].
- For the Cara phone-number-with-a-brain venture/spec, read [[briefs/cara-starter-product-spec]].

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-30]]
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-07-aire-six-month-autonomous-company-mission]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/2026-08-13-heres-health-digital-platform-phase-one]]
- [[briefs/cara-starter-product-spec]]
- [[companies/cara]]
- [[companies/evolv-renewables]]
- [[companies/heres-health]]
- [[companies/openbook]]
- [[companies/openhouse-ai]]
- [[companies/personal-agent]]
- [[context/agentic-value-creation-mission]]
- [[context/automation-ideas]]
- [[context/autonomous-business-launch-loop]]
- [[context/capture-workflow]]
- [[context/claude-access-observed]]
- [[context/claude-quickstart]]
- [[context/claude-vault-integration]]
- [[context/founder-execution-os]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/learn-targets]]
- [[context/linkedin-network]]
- [[context/llm-wiki-pattern]]
- [[context/mirror-review-protocol]]
- [[context/openhouse-openbook-design-system]]
- [[context/personal-context-data-contract]]
- [[context/review-workflow]]
- [[context/scaling-playbook]]
- [[context/solo-founder-era]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[decisions/ai-founder-coach-operating-agreement-2026-07-14]]
- [[goals/ob-retention]]
- [[goals/oh-activation]]
- [[goals/oh-v2-launch]]
- [[goals/personal-agent-ai-operated-company-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/ops-source-to-wiki-ingest]]
- [[people/sam-donworth]]
- [[project_state/cara]]
- [[project_state/heres-health-app]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/personal-agent]]
- [[project_state/renew]]

