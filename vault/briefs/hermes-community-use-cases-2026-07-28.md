---
title: Hermes community use cases reviewed for Sam
status: research synthesis
created: "2026-07-28"
source: Hermes Agent user stories collection and selected original posts
scope: 262 stories across 15 categories
---

# Hermes community use cases reviewed for Sam

## Executive judgement

The collection is useful, but not as a list of 262 things to build. Its strongest lesson is architectural:

> Hermes creates the most leverage when a cheap deterministic process notices a real event, a context-rich agent reasons only when needed, a human approves consequential action, and the outcome is written back into durable memory.

That pattern is more valuable to Sam than another dashboard, general-purpose assistant, or fleet of autonomous agents.

The community dataset is heavily skewed toward builders and infrastructure. Discord supplies 116 of 262 stories, or 44.3%. Dev Workflow is 65 stories, or 24.8%. Personal Assistant is 44, or 16.8%. Business Ops is only 16, or 6.1%, and Marketing only 2, or 0.8%. Many entries are feature requests, demos, setup notes, or self-reported outcomes rather than independently verified business results. Treat them as design evidence, not proof of ROI.

## What users are actually using Hermes for

Across all 262 stories, the repeatable patterns are:

1. **A persistent personal operator** that lives in Telegram, Discord, WhatsApp, or a server and handles tasks across sessions.
2. **Scheduled and event-triggered briefings** for news, email, research, project state, health, or market signals.
3. **Durable memory and knowledge workflows** using Obsidian, wikis, SQLite, graph stores, or specialised memory providers.
4. **Multi-agent build loops** where one agent plans, another implements, and another tests or reviews.
5. **Research-to-action pipelines** that monitor sources, rank signal, preserve evidence, and propose next steps.
6. **Business workflow automation** for tickets, CRM, inventory, client research, follow-ups, and reporting.
7. **Voice-first capture and coaching** where the low-friction conversation becomes structured history and feedback.
8. **Self-hosted or cheaper routing** that reserves expensive models for judgement and uses scripts or smaller models for routine work.
9. **Human approval and audit layers** for external replies, production changes, security-sensitive work, and agent compliance.
10. **Self-improving procedures** where repeated successful workflows become skills and failed runs feed test cases.

## Highest-value adaptations for Sam

### 1. Make the existing Ground Zero automations event-driven and exception-only

**Use now:** Yes. Highest cross-portfolio leverage.

The best community implementation is the two-tier email pipeline. A small Python process checks for new mail, manages locks and batches, and launches an LLM only when a real event exists. It produces zero LLM calls while the inbox is idle.

Apply the same contract to:

- a completed Cara call
- a new OpenHouse lead or form submission
- a changed OpenHouse deployment, PR, issue, or production anomaly
- a new Ground Zero capture or imported source
- a failed scheduled job

The deterministic layer should detect, deduplicate, batch, lock, and log. Hermes should wake only to interpret the changed state. This reduces cost, false urgency, repeated summaries, and context drift.

**Do not add another generic daily briefing.** Refactor or consolidate existing briefings around anomalies, decision deadlines, contradictions, and neglected leverage.

Evidence:
- [Two-tier email pipeline so the LLM only fires when needed](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1492347479805530182-Email-Checker-State-Machine.txt)
- [Daily research brief across Discord, Slack, Notion & Obsidian](https://x.com/gkisokay/status/2050026869274395020)
- [The real power is what it does every day without you prompting it](https://x.com/KanikaBK/status/2054572674777797018)

### 2. Turn every Cara founder call into a measured learning loop

**Use now:** Yes, but only inside the existing Phase 0 dogfood item.

The interesting voice examples are not generic voice chat. They use conversation as low-friction structured input, then connect it to longitudinal learning. Cara should do this after every founder call:

1. preserve both sides of the transcript and audio references
2. measure latency, interruptions, barge-in recovery, silence handling, transcription errors, road-noise failures, and continuity
3. identify the single biggest trust break
4. append a reproducible test case
5. propose one bounded change
6. require Sam's approval before changing prompts, memory policy, or production behaviour
7. compare the next call against the prior failure

This is the voice equivalent of the community plan → implement → test → fail → repair → verify loop. It directly serves Cara's current acceptance gate without broadening into an app or dashboard.

Evidence:
- [Voice-first fitness coach that learns my body over time](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1493325531637088429-working-on-a-voice-first-AI-coach-that-learns-your-body-over-time--training---nutrition-feedback.txt)
- [I wanted to talk to my agent for hours, so I fixed the timeout](https://github.com/teknium1/nous-discord-archive/blob/main/archives/plugins-skills-and-skins/1496367052045291540-Hermes-Voice-Call-Timeout-Plugin.txt)
- [Multi-agent auto-build workflow](https://x.com/gkisokay/status/2044339964612362499)
- [Hermes-lab experiment bookkeeper](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1486588376940281937-Hermes-Lab---file-first-experiment-scaffolding-for-autonomous-research.txt)

### 3. Use Hermes as an OpenHouse evidence-to-proof-asset engine

**Use now:** Yes. This reinforces an existing priority rather than creating a new one.

When a verified product event occurs, Hermes should assemble a review-ready proof fragment:

- exact observed fact and timestamp
- provenance and live source
- claim status: fact, reported claim, inference, or unsupported
- safe external wording
- supporting screenshot, metric, or transcript excerpt
- the audience it helps: developer, investor, homeowner, funder
- caveats and what cannot yet be claimed

This turns live Longview work into premium, defensible proof without creating fictional momentum. It also fits the current Bridgewater and marketing-site cycle. Nothing should publish automatically.

Evidence:
- [PM competitive briefing improved over repeated use](https://x.com/aakashgupta/status/2050349093969694825)
- [Research agent saves evidence, links, dates, claims, and why it matters](https://x.com/gkisokay/status/2050026869274395020)
- [Hermes triages tickets and writes documentation back to Obsidian](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1493589434971717763-Small-Win---Hermes---Claude-Code-managing-my-Tickets.txt)

### 4. Add a feedback-aware research loop, not more research volume

**Use now:** Yes, as a correction to existing radars.

The novel element in the better research stories is not scraping more sources. It is remembering what the user ignores, what changes a decision, and which sources repeatedly produce signal.

Each recurring research brief should capture:

- useful / not useful / noisy feedback
- which claim changed a decision or action
- sources that should be promoted or demoted
- unresolved assumptions with a stop rule
- no more than one recommended action

If a briefing has not changed a decision, queue, experiment, or customer action within 30 days, pause it. This matches the existing Founder Execution OS and prevents automation theatre.

Evidence:
- [Daily research brief that tracks what the user ignores](https://x.com/gkisokay/status/2050026869274395020)
- [$200 and 30 skills later, training Hermes as a personal analyst](https://defi0xjeff.substack.com/p/hermes-200-and-30-skills-later-here)
- [Cron jobs triaging news by urgency and contextualising it to active work](https://x.com/emmagine79/status/2053360898501468362)

### 5. Formalise a contained plan → build → independent QA loop

**Use now:** Yes for bounded local code slices. Not for autonomous production shipping.

For OpenHouse, OpenBook, Cara, and Ground Zero code work:

1. planner defines one contained acceptance-tested slice
2. implementer works in isolation
3. independent reviewer runs tests and checks scope, security, and claims
4. implementer repairs failures
5. parent verifies the artifact and creates a local checkpoint
6. Sam approves any push, deploy, migration, or production action

This is more useful than spawning many agents. The community's 12-agent and 18-agent fleets are interesting demonstrations, but they increase coordination, cost, and trust surface. Sam needs a reliable small pod, not an agent company.

Evidence:
- [Multi-agent auto-build workflow](https://x.com/gkisokay/status/2044339964612362499)
- [Codex watches Hermes agent-to-agent workflows and fixes failures live](https://x.com/gkisokay/status/2045048092341555639)
- [12 Hermes instances every day, in parallel](https://x.com/Teknium/status/2047869295686975529)

### 6. Keep one control plane with isolated venture contexts

**Use now:** Yes, gradually.

A chief-of-staff chat can hold cross-portfolio context, but execution should stay isolated by venture or project. Separate Telegram topics or dedicated specialist chats can bind different skills and reduce accidental context bleed. Ground Zero remains the canonical record shared across them.

Recommended topology:

- one founder control plane for priorities and approvals
- one OpenHouse execution context
- one Cara founder-call and build context
- one Ground Zero knowledge context
- optional temporary project contexts for bounded work, then archive

Avoid a universal profile carrying every tool, skill, instruction, and venture history.

Evidence:
- [Hermes as my Chief of Staff with sub-agents per project](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1496117910287024159-Running-Hermes-as-a-Hardcore-Project-Operating-System.txt)
- [Private Telegram topics, each with its own skill bindings](https://mranand.substack.com/p/inside-hermes-agent-how-a-self-improving)
- [One month with Hermes: do not build the whole machine on day one](https://www.reddit.com/r/hermesagent/comments/1t29ogw/one_month_with_hermes_agent_what_i_wish_i_knew/)

### 7. Require approval receipts and audit the agent from outside itself

**Use now:** Yes. This should remain a hard boundary.

The collection contains both approval-gate ideas and a serious warning: one user audited 129 sessions and reported approval violations in 112. That claim has not been independently verified, but the design lesson is sound. A system should not be trusted merely because its own prompt says to ask permission.

For external messages, financial actions, production mutations, publishing, and memory-policy changes:

- show the exact proposed action
- show audience, data used, downside, and rollback
- require explicit approval
- create an append-only receipt
- periodically audit session history independently

Evidence:
- [DM-based approval gate for public and kid-facing bots](https://github.com/NousResearch/hermes-agent/issues/13124)
- [Audited 129 sessions across 23 days](https://github.com/NousResearch/hermes-agent/issues/17619)
- [Every tool call into SQLite with Grafana dashboards](https://github.com/teknium1/nous-discord-archive/blob/main/archives/plugins-skills-and-skins/1503114142117265448-Hermes-Audit-Plugin---Grafana-Dashboards.txt)

### 8. Route models and tools by task value

**Use now:** Yes when cost or latency becomes material.

Use no model for empty queues and deterministic checks. Use a cheap or local model for extraction, classification, and low-risk summaries. Reserve the strongest model for ambiguous planning, consequential review, and final synthesis. Keep the routing rules explicit and observable.

This is not a reason to spend time building local-model infrastructure now. The implementation should follow measured cost, not precede it.

Evidence:
- [Two-tier email pipeline](https://github.com/teknium1/nous-discord-archive/blob/main/archives/community-projects-showcase/1492347479805530182-Email-Checker-State-Machine.txt)
- [Smart-routing tiers that save time and cost](https://www.reddit.com/r/hermesagent/comments/1smgo1i/my_hermes_journey/)
- [Compounding autonomy also compounds cost drift and trust surface](https://dev.to/chintanonweb/hermes-agent-gets-smarter-every-day-so-does-the-bill-4i8o)

### 9. Test one meeting-free, 48-hour evidence brief as a cash product

**Use now:** Worth one bounded demand test after the committed OpenBook billing path, not a new agency.

The commercially useful pattern in the business-ops stories is not autonomous lead generation. It is using Hermes to compress public research, competitive analysis, claim checking, and recommendations into a reviewable deliverable. A Sam-specific offer could be:

> A fixed-price audit of a product, site, competitors, and public customer evidence, returned as a sourced brief with the three trust gaps, the three strongest claims, and the next seven actions. No meeting required.

Use an intake form, payment link, asynchronous clarification, fixed scope, and one anonymised sample. Offer two slots through stranger-transactable online channels, warm introductions, or inbound only. Do not build a CRM, client portal, scraper, or retainer infrastructure. If no one pays after a defined distribution test, kill it.

This is a plausible fit for Sam's after-hours constraints, not proven demand. It should not displace OpenHouse, Cara dogfooding, or the OpenBook billing unblock.

Evidence:
- [Competitor-analysis swarm that finds gaps and builds a strategy](https://github.com/teknium1/nous-discord-archive/blob/main/archives/hermes-agent.txt)
- [Client research, follow-ups, podcasts, and leads on Hermes](https://x.com/mvanhorn/status/2045935785661349956)
- [Hermes as a junior operator across practical money-making workflows](https://www.youtube.com/watch?v=2WZAcWtwoDI)

## Interesting ideas to retain, but not activate now

- **X/bookmark-to-podcast conversion:** useful later for Sam's private research library, but not ahead of product and cash priorities.
- **Voice-first fitness and health loops:** a good demonstration of low-friction longitudinal memory, but it would be a distraction now.
- **Automated competitor swarms and ad studios:** potentially useful for a specific campaign, but should be temporary project tools, not another standing system.
- **Agent-run ticket queues:** useful once a bounded backlog and QA gates are stable. Do not let the agent create and consume its own work without an external priority source.
- **Nightly autonomous micro-app building:** high novelty, low expected value, and likely to create maintenance debt.

## Explicitly reject for now

- autonomous trading bots or self-reported rapid-return systems
- automatic social posting or outreach without review
- large always-on agent fleets
- generic local-business AI-ops selling that depends on local cold outreach or daytime meetings
- replacing Ground Zero with a new memory kernel, graph database, or dashboard
- broadening Cara beyond the founder voice loop
- adding recurring reports that do not feed a named decision or action

## Recommended sequence

1. **OpenHouse:** activate the existing proof-asset engine as a small, human-reviewed slice for Bridgewater and the marketing site.
2. **Cara:** add the post-call measurement and failure-review contract inside the current founder dogfood item.
3. **Ground Zero:** consolidate recurring jobs around event detection, exceptions, and one action-changing output.
4. **Development:** keep using a small planner / implementer / independent reviewer pattern with local verification and explicit external-action approval.
5. **After measurement:** consider task-based model routing only if actual cost or latency data justifies it.

## Source notes

- Canonical collection: https://hermes-agent.nousresearch.com/docs/user-stories
- Triggering X post: https://x.com/HermesWatcher/status/2081767858061652336
- Collection reviewed: 262 records, 15 categories, 11 source types.
- Direct-source spot checks were performed on selected X posts and raw Discord archive files. The collection itself remains a community-curated set of anecdotes, not an independently audited outcomes database.

## Connected vault notes

- [[context/ops-automation-moc]] — operational automation backlog
- [[context/founder-execution-os]] — human-led approvals, evidence, and action discipline
- [[context/business-opportunities-moc]] — cross-venture opportunity patterns
- [[companies/openhouse-ai]] — proof-asset application
- [[project_state/oh]] — current OpenHouse evidence gates
- [[companies/cara]] — founder voice application
- [[project_state/cara]] — current Cara dogfood state
- [[items/oh-proof-asset-engine]] — existing OpenHouse implementation path
- [[items/cara-founder-voice-dogfood]] — existing Cara implementation path
- [[items/ops-project-state-reconciler]] — existing Ground Zero consolidation path

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/business-opportunities-moc]]
- [[context/ops-automation-moc]]

