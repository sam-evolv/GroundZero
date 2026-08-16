---
title: Managed consumer agent feasibility and success plan
status: strategic recommendation
created: 2026-08-05
source: Sam request plus Ground Zero synthesis and verified Hermes v0.20.0 source/docs
confidence: high on technical feasibility, medium on consumer demand and distribution
---

# Managed consumer agent feasibility and success plan

## Executive judgement

This is technically feasible now. The hard part is not wrapping Hermes in a simpler chat interface. Hermes already has a cross-platform desktop app, first-run onboarding, provider setup, files, browser and computer control, memory, skills, messaging, scheduled work, approvals, artefact delivery, an API server and local or remote execution.

The company opportunity is to remove the need to understand any of that and turn it into a trusted managed service for ordinary work.

The right product is:

> A calm digital operator that works from the user's own computer, can be reached from their phone, understands the context they explicitly share, completes bounded work, and asks before anything consequential.

The wrong product is:

> Hermes with a new logo, a cleaner chat box and a bundled model subscription.

A thin wrapper would be easy to copy and would inherit Hermes's complexity, security posture and support burden without creating a defensible customer experience. A successful product needs its own opinionated permission model, task experience, workflow library, local companion, quality routing, audit trail and support operation.

## Founder direction update: mobile-first product bar

The original narrow alpha recommendation remains correct, but the customer-facing entry point has now been clarified: iOS and Android apps are required as the primary consumer experience, not an afterthought after a messaging proof. The alpha may constrain desktop support to macOS, but it must use a simple mobile app flow with app-native conversation, sharing, progress and push rather than exposing Telegram, bots or technical messaging setup. Full Windows/Linux companion parity remains deferred until the macOS/mobile cross-device loop demonstrates retained paid use.

## Strategic recommendation

Run a six-week concierge alpha for 15 to 25 invited macOS prosumers before building a broad platform.

Start with three signature jobs:

1. **Get something from my computer while I am away**
   - The user messages the assistant from their phone.
   - The paired desktop companion searches only approved locations.
   - It returns the file or asks one precise disambiguating question.

2. **Turn this context into a finished deliverable**
   - The user supplies a browser page, document, notes or a short brief.
   - The assistant produces a complete presentation, research pack, document or video.
   - The finished artefact returns to the channel where the request began.

3. **Look at this and prepare the next step**
   - The assistant reads a page, email, document or spreadsheet the user deliberately shares.
   - It prepares the next useful action.
   - Sending, purchasing, publishing, deleting or changing an external system remains approval-gated.

These jobs prove the real product thesis: continuity across phone, computer, context and finished work. They are more distinctive than generic research, drafting or chat.

Do not start with background inbox access, autonomous email, banking, purchases, full-disk access, broad CRM connectors, an agent marketplace or a Windows launch. Those multiply trust and support problems before the core experience is proven.

## What the latest Ground Zero inputs establish

[[briefs/2026-08-05-managed-agent-consumer-wedge]] already defines the core direction correctly:

- outcomes, not models;
- normal people first, but an invited prosumer cohort before mass consumer;
- approval-first action;
- invisible model routing;
- local execution where it improves privacy or cost;
- a persistent assistant rather than a one-off chatbot;
- memorable cross-device moments rather than a feature checklist;
- possible long-term convergence with Cara's voice and messaging surfaces without reactivating the old Cara plan.

[[briefs/hermes-community-use-cases-2026-07-28]] adds useful demand evidence. In the reviewed set of 262 community stories, repeated use clustered around persistent personal operators, scheduled and event-driven work, durable memory, research-to-action pipelines, voice capture, model routing, approval controls and reusable skills. The source set is builder-heavy and self-reported, so it supports product-shape hypotheses rather than proving a mass market.

[[context/agentic-value-creation-mission]] and [[context/founder-execution-os]] provide the correct autonomy boundary. The product should operate mainly as a supervised workflow and bounded asynchronous agent. It should not present internal prompts or its own approval heuristics as a security boundary.

## What is already built in Hermes

Verified locally on 5 August 2026:

- Installed Hermes version: `v0.20.0 (2026.8.3)`.
- Local upstream commit: `6564f319a647b47de391cab2f608660323804a2b`.
- MIT licence confirmed in the upstream repository. Trademark and bundled dependency rights remain separate checks.
- The official desktop app runs on macOS, Windows and Linux.
- It already provides first-run onboarding, provider sign-in, tools, file browser, previews, artefact history, voice, persistent sessions, quick entry, profiles, messaging, scheduled jobs, skills and auto-update.
- A self-contained Electron desktop build can install and launch the Hermes runtime itself.
- The desktop can run a local backend or connect to a remote or cloud backend.
- The API server exposes sessions, long-running runs, streamed tool progress, cancellation, approvals, jobs, skills, toolsets and per-request model selection.
- `computer_use` can control desktop applications in the background without taking the user's real cursor or keyboard focus on macOS, Windows and Linux.
- Messaging adapters already provide a natural phone-side control surface and approval interaction.
- Model choice can be set per request, so invisible routing can sit above the Hermes core without rewriting the agent loop.

This means the first product is not a research project. It is a productisation and trust-engineering project built on a capable engine.

## The critical technical truth

Hermes is currently designed as a single-tenant personal agent. Its own security policy states that the only real boundary against an adversarial model is operating-system isolation. Approvals, output redaction, scanners and tool allowlists are useful accident-prevention layers, not containment.

That has direct product consequences:

- A consumer release cannot simply run an unrestricted Hermes process as the user's normal OS account and describe approval prompts as safety.
- A local agent that can read arbitrary web content, email, files and third-party tool output is exposed to prompt injection and hostile content.
- Terminal-backend isolation only confines shell and file operations. It does not automatically contain every in-process component such as plugins, MCPs and code execution.
- Whole-process isolation is the supported posture for untrusted inputs and production or shared deployments.
- Every connector, skill and plugin expands the trusted computing base and support surface.

The trust design is therefore part of the product, not a legal page added before launch.

## Recommended product architecture

### 1. Own the product shell

Build a separate consumer brand and interface. Do not fork deeply into Hermes core.

The surface should contain:

- one ask box;
- work currently in progress;
- approvals waiting for the user;
- completed work and artefacts;
- activity receipts showing what was read and changed;
- approved devices, folders and connectors;
- simple privacy, export and delete controls.

Do not expose models, providers, toolsets, MCPs, skills, profiles, YAML, terminal backends or token counts in the normal experience.

### 2. Use Hermes behind a stable adapter

Pin a tested Hermes version and talk to it through documented surfaces such as the Runs API, Sessions API and approval endpoint. Keep Sam-owned product state outside the Hermes repository.

The adapter should:

- translate product tasks into bounded Hermes sessions;
- apply an explicit tool policy for each workflow;
- select the model and reasoning level internally;
- stream legible progress events;
- convert tool calls into product-specific action receipts;
- stop or recover failed work;
- maintain compatibility tests against each candidate upstream release.

This protects the product from upstream velocity and makes a future engine swap possible.

### 3. Split the system into cloud control plane and local companion

The best long-term shape is hybrid.

The cloud control plane owns:

- accounts and subscriptions;
- device registry;
- encrypted task routing;
- model routing and budgets;
- workflow versions;
- push notifications and mobile messaging;
- central audit metadata;
- support diagnostics with explicit user consent;
- feature flags, kill switches and release channels.

The signed local companion owns:

- user-mediated file and folder access;
- desktop and browser control;
- local indexing where appropriate;
- execution of device-bound tasks;
- local secret storage in the OS keychain;
- permission prompts and receipts;
- encrypted delivery of artefacts back to the user.

The cloud should not silently obtain broad file or screen access. The local companion should not need full cloud account credentials to run a narrow task.

### 4. Make permissions task-specific

Replace the technical toolset model with user-legible capabilities:

- Can view this selected file or folder.
- Can use this browser tab for this task.
- Can prepare a draft but cannot send it.
- Can monitor this named source until a stated date.
- Can create a new file inside this approved output folder.

Every consequential action needs an approval card containing:

- the exact action;
- the destination or audience;
- the data used;
- the reversible and irreversible consequences;
- a preview where possible;
- approve once, reject and edit controls.

After execution, save an append-only receipt with timestamp, result and rollback status.

### 5. Route models invisibly, but evaluate outcomes visibly

Use deterministic code where no model is needed. Use a cheap model for classification, retrieval selection, rough extraction and progress summaries. Use stronger models only for ambiguity, synthesis, polished artefacts and high-consequence review.

The router should consider:

- complexity and ambiguity;
- freshness requirements;
- tool use;
- privacy policy;
- consequence of error;
- artefact quality;
- latency promise;
- expected cost;
- past success on this workflow.

The product should maintain workflow-level evaluations. A cheaper first pass may be accepted only if a deterministic check or evaluator confirms the output contract. Escalation should happen automatically when quality is weak.

## What creates defensibility

The Hermes engine is not the moat. The moat can become:

1. **A permission and trust graph**
   - What this user has authorised, on which device, for which workflow, with what history of successful execution.

2. **A workflow reliability corpus**
   - Real task traces, failures, recoveries, user edits and acceptance outcomes, stripped of unnecessary personal data.

3. **A task-specific evaluation system**
   - The product knows whether a requested file was the right one, an artefact met its brief, a draft was accepted, and an action completed without trust break.

4. **Cross-device continuity**
   - The same assistant can be reached by desktop, phone, voice and messaging while maintaining one legible task state.

5. **A high-quality workflow library**
   - Not a marketplace of unreviewed agents. A small set of deeply tested jobs with clear permissions, recovery and support playbooks.

6. **Distribution and trust**
   - Real proof that normal people completed meaningful work safely. This is harder to copy than a model router.

## Commercial reality

The product should not launch at €10 to €19 per month if it includes meaningful support and computer execution.

Illustrative economics, not a forecast:

- At €19 per month, assuming 20% combined payments/refunds, €5 compute and infrastructure, and 15 minutes of support at €30 per hour, contribution is only about €2.70 per user per month, a 14.2% contribution margin.
- At €29 under the same heavy-support assumptions, contribution is about €10.70 per user per month, a 36.9% margin.
- At €49 under the same assumptions, contribution is about €26.70 per user per month, a 54.5% margin.
- If a €29 plan can hold payments/refunds to 8%, compute and infrastructure to €5, and support to five minutes per user per month, contribution becomes about €19.18 per user, a 66.1% margin. A three-month contribution payback would cap CAC near €57.54.
- At €29, 50 users produce €1,450 MRR, 500 users produce €14,500 MRR and 1,000 users produce €29,000 MRR.

The implication is direct: support automation and workflow reliability matter more than chasing the cheapest possible model. One confused 20-minute support exchange can cost more than a month of text inference.

Recommended pricing test:

- **Founding plan: €29 per month** for persistent assistant, paired device, three core workflows and a visible fair-use allowance.
- **Operator plan: €49 per month** for heavier artefact work, background monitoring and priority execution.
- Expensive video, long-running research or premium artefact work uses transparent work packs or allowance debits before execution.

Do not sell tokens. Sell completed work with a clear service boundary.

## The initial customer

Do not interpret “normal people” as everyone.

The first customer should be a prosumer who:

- works from a computer every day;
- already uses ChatGPT or Claude but is frustrated that the conversation stops before the work is complete;
- has repeated document, browser, research and follow-up tasks;
- values time more than a €29 to €49 monthly fee;
- can judge whether the output was useful;
- will tolerate an invite-only alpha and report trust breaks clearly.

Good first cohorts include founders, independent professionals, recruiters, consultants, creators and property professionals. This does not require positioning the company as a business product. It simply starts with users who have enough recurring digital work to reveal whether the operator is valuable.

## The activation experience

The first session should take under ten minutes and deliver value before asking for broad access.

1. Sign in.
2. Pair one computer and one phone or messaging channel.
3. Choose one narrow job.
4. Grant access only to the file, folder or browser context needed for that job.
5. Watch the assistant complete it.
6. Receive a finished result and activity receipt.
7. Save the permission only if the user explicitly chooses to reuse it.

Do not begin with a questionnaire about every app, folder, preference and life goal. Progressive context is more trustworthy and produces faster proof.

## Alpha success gates

A six-week alpha should pass all of these before a broader consumer build:

### Activation

- At least 70% of invited users complete one signature job in their first session.
- Median time from install to first completed result is under ten minutes.
- Fewer than 10% require founder intervention to finish setup.

### Value

- At least 50% of activated users complete three or more meaningful jobs during week two.
- At least 35% are still active in week six without being individually chased.
- At least 30% use the assistant from both desktop and phone or messaging.
- At least 40% experience one signature cross-device moment and can describe it unaided.

### Trust and reliability

- No unauthorised external action.
- No unapproved access outside the granted file, folder, tab or connector scope.
- At least 90% of started core workflows end in completed, safely failed or explicitly cancelled state. Silent stalls count as failures.
- Fewer than 5% of completed jobs are classified by the user as a material trust break.
- Every consequential action produces an independently queryable approval and execution receipt.

### Economics

- Median support time below ten minutes per active user per month by the end of the alpha.
- Median variable compute and infrastructure cost below €6 per active user per month for the founding plan.
- At least 30% of users offered the paid founding plan accept €29 per month.

These thresholds are proposed decision gates, not external benchmarks.

## Six-week execution plan

### Week 0: architecture and safety contract

- Choose a temporary consumer brand separate from Hermes and Nous.
- Define the three workflow contracts, tool permissions, failure states and approval cards.
- Pin the Hermes commit and create a compatibility harness around runs, sessions, streaming, stop and approval.
- Define data flow, retention, deletion, export and support-access policy.
- Threat-model prompt injection, malicious documents, connector compromise, local privilege, stolen phone and lost device.
- Decide the whole-process isolation approach for any cloud-side agent execution.

### Week 1: thin local companion

- macOS only.
- Signed app or controlled private build.
- Pairing flow using short-lived codes and device-bound keys.
- User-selected folders only.
- Local task runner with no unrestricted background monitoring.
- Phone or Telegram request reaches the paired desktop.

### Week 2: first signature job

- Implement “get something from my computer”.
- Add file disambiguation, offline handling, explicit authorisation, encrypted delivery and receipts.
- Test wrong-file, duplicate-name, moved-file, sleeping-device, revoked-access and oversized-file cases.

### Week 3: finished deliverable job

- Implement one artefact class first, probably a sourced research pack or presentation.
- Route models internally.
- Add a deterministic output contract and user acceptance feedback.
- Return the finished artefact to the initiating channel.

### Week 4: context-to-next-step job

- Support a deliberately shared browser page or document.
- Prepare the next action without sending or publishing.
- Add an approval card and execution receipt for one reversible external action only after the draft path is reliable.

### Weeks 5 and 6: invited paid alpha

- Recruit 15 to 25 users through Sam's existing network and direct founder-led demonstration.
- Onboard in small waves of five.
- Log setup time, support time, task outcome, trust break, model cost and user acceptance.
- Fix the highest-frequency failure before adding another workflow.
- Charge the founding plan before the end of week six. Compliments without payment do not validate the product.

## What Sam should build personally and what to reuse

### Reuse from Hermes

- agent loop;
- provider integrations;
- tool registry;
- memory and skill primitives;
- sessions and run lifecycle;
- desktop computer control;
- messaging adapters;
- file, browser and artefact tools;
- cron and background process primitives;
- API run, stop and approval endpoints.

### Build as company IP

- consumer identity and subscription;
- device pairing and relay;
- product permission model;
- workflow contracts;
- action receipts;
- model router and per-workflow quality gates;
- workflow telemetry and eval corpus;
- local companion packaging and update channel;
- customer support and recovery tools;
- consumer onboarding and task interface.

### Do not build yet

- proprietary foundation model;
- broad agent marketplace;
- dozens of connectors;
- autonomous email or purchasing;
- enterprise administration;
- Windows and Linux desktop-companion parity before the macOS alpha retains users;
- voice until text and cross-device task state are reliable.

## Founder fit and conflict with current priorities

Sam is unusually well suited to test this because he has already operated the underlying pattern personally: Ground Zero as durable context, Hermes as the execution layer, Telegram as a control surface, finished artefacts returned into the conversation, and strict approval boundaries.

The risk is portfolio displacement. This is a real new product bet and can easily become months of satisfying infrastructure work with no paid demand. It should not silently displace OpenHouse.

Use this gate:

- Allocate no more than six weeks and two evenings per week to the first alpha unless paid users and retained cross-device usage pass the stated thresholds.
- If the alpha cannot produce ten retained paid users from 25 invited prospects, park it.
- If users value only generic chat, drafting or research, do not build the platform. Existing assistants will win that market.
- If users repeatedly value the paired-device and finished-work loop, the opportunity is strong enough to deserve a separate company decision.

## Main failure modes

### Thin-wrapper trap

Users see a different chat UI but still need to understand tools, models, prompts and failures.

**Countermeasure:** hide the engine, sell three tested jobs, and make task state, permissions and receipts the product.

### Trust failure

One surprising file access or unauthorised action can destroy the product.

**Countermeasure:** progressive access, task-specific permissions, OS isolation, fail-closed approvals, append-only receipts and external audit tests.

### Support collapse

Every user's operating system, folders, browser state and connectors behave differently.

**Countermeasure:** macOS-only alpha, narrow workflows, automatic diagnostics, explicit supported environments and cohort onboarding in waves.

### Generic assistant competition

Large model providers can absorb general drafting, research and web use.

**Countermeasure:** own cross-device continuity, local context, action reliability and completed work. Do not compete on chat quality alone.

### Upstream coupling

A Hermes update changes internal behaviour or breaks the branded product.

**Countermeasure:** stable API adapter, pinned versions, staging, compatibility tests, deliberate upgrades and rollback.

### Cost drift

Long tasks, premium models and support consume the plan economics.

**Countermeasure:** route by workflow, estimate before execution, use visible allowances, cap retries, collect per-job cost and price expensive work separately.

### Privacy and regulatory exposure

The product handles personal files, messages and behavioural history.

**Countermeasure:** data minimisation, purpose limitation, clear retention, export/delete, processor contracts, incident response, privacy impact assessment and EU counsel before public scale.

## Final decision

Proceed to a bounded alpha, not a platform build.

The technical feasibility is high because Hermes already supplies most of the engine and cross-platform primitives. Product feasibility is unproven because users may like the idea but refuse installation, permissions, €29 pricing or repeated use. The six-week alpha is designed to answer those specific questions.

The opportunity becomes serious only if users repeatedly pay for this loop:

> Ask from anywhere, safely use the context on my computer, finish the work, show me what happened.

That is meaningfully bigger than a Hermes wrapper and specific enough to build.

## Evidence and source boundary

This review used:

- the latest Ground Zero commits and [[briefs/2026-08-05-managed-agent-consumer-wedge]];
- [[briefs/hermes-community-use-cases-2026-07-28]];
- locally verified Hermes v0.20.0 source at commit `6564f319a647b47de391cab2f608660323804a2b`;
- official local documentation mirrored from `hermes-agent.nousresearch.com`, including Desktop App, API Server, Built-in Tools Reference, Installation and Security;
- upstream `SECURITY.md` for the single-tenant and OS-isolation trust model;
- explicit illustrative unit-economics calculations.

A fresh external competitor and consumer-demand scan was not completed because the configured web-search backend was unavailable in this session. No current competitor claim in this note depends on an unverified search result.

## Connected vault notes

- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]] - mass-market positioning, first three-minute magic, product language, design system and acquisition path
- [[briefs/2026-08-05-managed-agent-consumer-wedge]] - original thesis and latest founder inputs
- [[briefs/hermes-community-use-cases-2026-07-28]] - observed community usage patterns
- [[context/agentic-value-creation-mission]] - autonomy and value-creation rules
- [[context/founder-execution-os]] - evidence, approval and execution system
- [[context/solo-founder-era]] - generic-wrapper and distribution warnings
- [[context/business-opportunities-moc]] - opportunity map
- [[companies/cara]] - possible future voice and messaging surface
- [[project_state/cara]] - currently deprioritised and not implicitly reactivated
- [[people/sam-donworth]] - founder constraints and working style

- [[imports/cara-conversation-summary-2026-07-12]] — shared signals: conversation, summary, cara

- [[imports/2026-08-06-personal-agent-founder-voice-notes]] — shared signals: personal, founder, voice
## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-05-managed-agent-consumer-wedge]]
- [[briefs/2026-08-05-personal-assistant-research-charter]]
- [[briefs/2026-08-05-personal-assistant-research-claude]]
- [[briefs/2026-08-05-personal-assistant-research-codex]]
- [[briefs/2026-08-05-personal-assistant-research-first-return-audit]]
- [[briefs/2026-08-05-personal-assistant-research-gemini]]
- [[briefs/2026-08-06-open-model-enterprise-sovereignty-thesis]]
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[companies/cara]]
- [[context/agentic-value-creation-mission]]
- [[context/business-opportunities-moc]]
- [[context/founder-execution-os]]
- [[context/index]]
- [[context/solo-founder-era]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[people/sam-donworth]]
- [[project_state/cara]]

