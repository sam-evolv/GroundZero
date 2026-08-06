---
title: IrelandGPT delegation-first product charter
status: active product input
created: 2026-08-06
source: ChatGPT product strategy session supplied by Sam
---

# IrelandGPT delegation-first product charter

## Product promise

IrelandGPT is not another AI chatbot. It is a consumer personal operating system whose visible promise is delegation: a person asks for an outcome, the assistant takes responsibility for the bounded work, requests access or approval only when needed, and returns a useful result or clear receipt.

The company sells time and relief from unwanted responsibility, not models, agents, tokens or intelligence. The north-star language is “I asked it” or “my assistant sorted it.”

## Design benchmark

Benchmark the product against Apple, Superhuman, Linear and Notion rather than ChatGPT or Claude. The experience must feel obvious, calm and premium while hiding technical machinery.

Normal users should never need to understand:

- model or provider names;
- APIs, tokens or prompt engineering;
- agent specialisation;
- connector catalogues;
- routing or orchestration.

Show the outcome, duration, evidence touched, approval boundary and result. Do not show internal machinery unless needed for trust or recovery.

## First-use contract

The opening experience must produce genuine delegation within minutes, not a feature tour or blank chat. Start with one bounded, high-friction job the person already wants removed. The useful result must arrive in the same session.

Candidate Irish jobs to research and validate include:

- arranging or comparing car insurance;
- handling utility or phone-provider administration;
- Revenue paperwork preparation;
- booking and rescheduling appointments;
- chasing invoices;
- organising calendars and meetings;
- gathering files;
- emailing accountants;
- expense reporting;
- producing a presentation or video from one request.

These are hypotheses until direct Irish-user research confirms frequency, pain, feasibility, risk and willingness to pay. IrelandGPT should initially become excellent at a small set of hated jobs rather than claim universal coverage.

## Interaction model

Conversation remains the front door, but the core unit is a durable handoff rather than a disposable chat turn.

- **Ask:** the user describes the desired outcome in ordinary language.
- **Clarify:** the assistant asks only for missing information that changes execution.
- **Connect at need:** a calendar, email, file or other permission appears in context, at the moment it unlocks the requested outcome.
- **Do:** the assistant shows real, human-readable progress through the authoritative Hermes run.
- **Approve:** consequential actions such as sending, booking, buying, deleting or account changes remain explicitly approval-gated.
- **Return:** the user receives the finished result, artifact or receipt where they already are.
- **Remember:** the assistant offers to retain a useful preference or playbook with provenance and an inspectable correction path.

Do not lead with an integrations directory. Capabilities come first and technology appears only when required.

## Main product surfaces

The product should evolve beyond a generic chat clone while preserving conversation as the natural control surface:

- **Doing:** active handoffs, progress, missing details and approvals.
- **Done:** completion receipts, delivered artifacts, recoverable history and repeated jobs.
- **You:** inspectable personal context organised as “What I know,” “I’m unsure about” and “Knowledge gaps.”
- **Ask:** chat, voice, images, video and documents in one continuous assistant identity.

Messaging channels can become optional access surfaces for the same identity and context. They must use supported, policy-compliant product routes and must not become separate assistants or require users to configure bots and bridges.

## Personal knowledge and playbooks

The moat is an earned, user-controlled permission and context layer, not a model. The assistant should build a living, inspectable understanding of:

- people and relationships;
- projects and goals;
- work and household context;
- preferences and habits;
- documents and recurring commitments;
- reusable “when this happens, do it this way” playbooks.

Context must carry source, confidence and recency. Users can inspect, correct, move or forget it. Permissions are earned progressively, scoped narrowly and revocable. Switching cost should come from accumulated usefulness and trust, not lock-in or opacity.

## Invisible routing

Route each subtask to the cheapest option that can reliably meet the quality, freshness, privacy and consequence requirements. Users experience the result, not the supply chain.

Routing must be evidence-led. Do not freeze provider economics or public plan promises before dogfood telemetry shows actual task mix, cost, latency, failure rate and support load. Fresh facts require retrieval, high-consequence actions require assurance and approval, and premium creative work may justify a higher-cost route.

## Pricing hypotheses

Test a low-friction entry plan near €5, a broader tier near €15 and a higher professional tier. Treat these as hypotheses, not committed prices.

The entry tier should make occasional use feel rational. Premium media, expensive models and long-running work may require higher plans or visible work allowances. Measure completed outcomes, retained users, support cost and gross margin rather than token consumption.

## Distribution proof loop

Run and build the company with the product, then turn verified completed work into founder-led proof.

For each proof asset, preserve the original request, result, elapsed time and human corrections. Demonstrate the finished outcome rather than internal logs. Do not claim full autonomy where Sam’s judgement or approval mattered. Nothing is published without Sam’s explicit approval.

The YC walkthrough video is the reference signature moment: a multi-hour recording and editing job completed through Hermes in roughly 15 minutes, including music and export. Future demonstrations should recreate that emotional outcome for ordinary administrative work.

## Long-term expansion

Potential later expansion includes specialist capabilities behind one assistant identity and a household operating system with shared bills, calendars, warranties, school events, holidays, insurance and documents. Personal and shared memory must remain deliberately separated.

Child accounts require a separately researched privacy, trust and safety model. Do not treat surveillance as the default family-safety mechanism.

## Product filter

A feature earns priority only when it materially removes something people hate doing, reduces thinking or returns meaningful time. Technical novelty, model branding and feature breadth do not qualify on their own.

## Immediate design consequences

1. Reframe the existing conversation desk as a delegation and handoff experience without replacing Hermes.
2. Make Doing, Done and You the primary information architecture.
3. Design first-use around one completed hated job, not onboarding education.
4. Add just-in-time connection requests inside the task flow.
5. Make approvals, uncertainty, failure and recovery legible without exposing technical logs.
6. Keep model routing invisible and defer final economics until measured usage exists.
7. Instrument time-to-first-completed-outcome, task completion, repeat delegation, approval comprehension, recovery success, trust failures, cost per completed outcome and willingness to pay.
8. Validate the first Irish admin wedges with real users before expanding scope.

## Connected vault notes

- [[imports/chatgpt/ireland-gpt-product-strategy-session-2026-08-06]] — verbatim source
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]] — adopted product promise
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]] — runtime-first founder thesis and build order
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]] — handoff mechanics and trust comparison
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]] — Irish mainstream-user research
- [[companies/personal-agent]] — canonical venture record
- [[project_state/personal-agent]] — current implementation state
- [[items/personal-agent-founder-dogfood-and-proof-loop]] — active execution loop
- [[context/index]] — Ground Zero entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-06-hark-handoff-irelandgpt-translation]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-06-personal-agent-full-desktop-parity-direction]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[context/model-pack]]
- [[decisions/2026-08-06-personal-agent-delegation-first-promise]]
- [[items/personal-agent-founder-dogfood-and-proof-loop]]
- [[project_state/personal-agent]]

