---
title: Lindy Teammate source audit and Aire lessons
status: research complete, recommendations proposed
created: 2026-08-10
source: Lindy public website and first-party documentation
---

# Lindy Teammate source audit and Aire lessons

## Decisive conclusion

Lindy has moved in Aire's direction at the product-strategy level: away from asking customers to build and manage visible agent graphs, toward one named teammate reached through ordinary conversation that already knows context, runs routines, produces artifacts and asks before consequential actions.

The strongest transfer is not Lindy's B2B feature list. It is the compression layer: **conversation in, one authoritative job, visible milestones, approval where consequence begins, finished output back in the user's normal surface.**

Aire should adopt that compression while keeping its broader consumer scope, accepted Chat, Work and Profile architecture, Hermes runtime breadth and calmer mobile-first presentation. It should not copy Lindy's Slack-first company positioning, credit meter, dense admin navigation, exposed agent/skill catalogue or unsupported time-saved claims.

## Evidence boundary

### Verified on Lindy's current public site

The homepage, pricing, security, skills, integrations, use-case and enterprise pages were fetched directly on 2026-08-10.

Current public positioning:

- "Your next hire is AI."
- Lindy is an AI teammate connected to company tools and context.
- The primary entry point is Slack, with iMessage, Gmail and browser surfaces around the same assistant.
- The product promises answers, multi-step actions and finished artifacts rather than drafts alone.
- Repeated work becomes scheduled routines.
- Lindy advertises 40+ reusable skills, plain editable memory files, a shared meeting library, 1,000+ integrations and MCP support.
- Consequential outside actions wait for approval; read-only work on approved sources can proceed.
- Personal DMs, email, calendar and meetings are separated from shared channel context.
- Public plans are $29.99, $99.99 and $199.99 per user per month, with shared workspace credits and enterprise controls.

### First-party roadmap, not verified live product

Several documentation pages are explicitly under `/coming-soon/`, including Home, Files, Routines, Skills and Meeting Library. Their screenshots and contracts are strong evidence of Lindy's intended product direction, but not proof that every feature is generally available or works as described.

The live authenticated product was not accessed, so reliability, latency, task success, cross-user isolation and actual approval behavior remain unverified.

## What Lindy is really doing

### 1. Repackaging an agent platform as one teammate

Earlier Lindy materials and changelog entries emphasize graph editing, custom agents, tasks, versions and workflow steps. The current homepage emphasizes one teammate in Slack. The underlying platform remains broad, but the user-facing story is no longer "build agents." It is "give Lindy the job."

This validates Aire's decision to hide Hermes' internal agents, tools, skills and orchestration behind one assistant relationship.

### 2. Making the assistant ambient across existing surfaces

Lindy appears in Slack channels and DMs, iMessage/SMS, Gmail through a Chrome extension and its own browser app. The promise is the same Lindy everywhere, not separate bots.

The iMessage documentation is particularly strong: no app to install, text it like a friend, send voice notes, hand over reminders and standing instructions, then receive the result where the user already is.

For Aire, the equivalent is one identity across native mobile, web, desktop companion and optional supported messaging. Channels are projections of the same conversation and Work object, not separate assistants.

### 3. Turning every request into a persistent work object

Lindy describes tasks with retry, terminate, search, filtering, task sharing and version history. The current routine concept is a trigger, plain-English instruction and destination attached to the same teammate rather than a separate bot.

For Aire, this maps directly onto Work:

- one authoritative job behind the Chat card, Work row, Live Activity and notification;
- real status, elapsed time, blockers, approvals, artifacts and terminal receipt;
- retry, pause, cancel and recover without starting a new conversation;
- recurring work as a saved form of an ordinary request, not a builder graph.

### 4. Making memory and skills inspectable as files

Lindy's roadmap exposes Personal, Team and System file scopes, with memory and skills as versioned files. Users can inspect, edit, restore and share them. Skill routing loads only the relevant full instructions when needed.

The architectural idea is excellent. The presentation is too technical for Aire's consumer default.

Aire should preserve the same underlying properties:

- owner-bound personal context;
- separate personal, shared and system scopes;
- provenance, recency, confidence, correction and version history;
- reusable learned workflows that can be disabled and restored;
- narrow retrieval of relevant context rather than loading everything.

But Aire should present this through Profile and natural-language controls, not folders named `memory`, `skills` or `SKILL.md`. A power-user raw view can exist later behind progressive disclosure.

### 5. Building company intelligence from meetings and shared sources

Lindy makes meeting recordings a shared, queryable library. One person attends a call, files it into a controlled folder, and authorized teammates can query the context later. Enterprise positioning adds source links, source precedence, private-by-default meetings and explicit team sources.

This is a major lesson for Aire Business and the AI-operated-company mission: the assistant becomes more valuable when completed work, meetings, decisions, files and corrections accumulate into an inspectable operating memory.

The equivalent for consumer Aire is not "record every meeting." It is an owner-controlled continuity layer across conversations, files, commitments and completed outcomes. For business Aire, meeting and decision ingestion should be a bounded vertical with explicit visibility and source precedence.

### 6. Selling jobs, not capabilities

Lindy's use-case pages name concrete jobs:

- catch me up;
- build the staff meeting deck;
- compare vendors;
- run the deal-won handoff;
- triage the support queue;
- investigate a funnel issue;
- plan the week.

The best framing is "same job, three depths": alert, report or dashboard. This is useful for Aire because output depth can scale without exposing model choice or agent complexity.

Aire's Explore, onboarding and marketing should show completed outcomes grouped by human problem, not connector or agent categories.

### 7. Separating preparation authority from outward authority

Lindy repeatedly says it can investigate, draft and prepare automatically, but external consequences wait for a named approver. It also distinguishes private personal sources from approved team sources.

This matches Aire's approval model and should become a plain-language trust contract:

- look up and prepare within approved sources;
- show what was used;
- ask before sending, publishing, buying, booking, deleting, changing accounts or sharing sensitive material;
- return a receipt after the approved action;
- never mix personal Profile context into a shared Work space.

## What Aire should adopt now

### A. Natural-language routines inside Chat and Work

Let the user say: "Every Friday, check what I have left open and give me a short list at 5." Aire creates a named routine, shows the interpreted schedule, sources and destination, and asks for confirmation only where needed.

The routine is visible in Work with next run, last result, pause and edit. No graph builder.

### B. One job, three output depths

For compatible tasks, let users naturally request:

- tell me only if something matters;
- give me a concise comparison;
- build me the full report or artifact.

Do not expose these as permanent modes. Infer the likely depth and allow a lightweight correction.

### C. Inspectable context in Profile

Add a Profile section that says what Aire knows in human categories such as Priorities, People, Preferences, Projects and Repeated Work. Each item should show why it is known, source, confidence and last confirmation, with correct, forget and history actions.

Keep the raw file/ledger representation behind an advanced view, not in the main consumer interface.

### D. "Teach once" from successful work

After a task succeeds and the user corrects or approves the final result, Aire can offer: "Use this approach next time?" If accepted, save a bounded learned workflow with scope, trigger conditions and approval boundary.

Do not ask users to create or manage skills before they have experienced a useful outcome.

### E. A proper recurring-work timeline in Work

Lindy's routine visual communicates trigger time, sequence and destination clearly. Aire should use the same conceptual clarity but show state, evidence and approval more honestly:

- scheduled;
- checking sources;
- preparing result;
- waiting for approval;
- delivered, with artifact or receipt;
- failed, with retry or recovery.

The timeline must project real Hermes events, not scripted animation.

### F. Meeting and decision continuity as a later business layer

For Aire Business, make meeting outputs feed an owner-controlled decision and commitment ledger. Preserve source timestamps and visibility. Allow teams to state which source wins when two records conflict.

This is relevant to the six-month AI-operated-company proof because Aire itself needs an auditable record of decisions, work, approvals and interventions.

## What Aire should not copy

### Do not copy the exposed platform navigation

Lindy's intended Home sidebar includes Home, Chat, Meetings, Files, Routines, Skills, Agents and Integrations. This is dense and product-centric. It conflicts with Aire's accepted Chat, Work and Profile architecture.

Keep Chat, Work and Profile. Meetings, routines, files, connectors and learned workflows should appear contextually inside those three surfaces.

### Do not expose model selection to ordinary users

The Lindy Chrome extension shows a model picker. Aire's model routing should remain invisible, with quality and cost gates handled by the system.

### Do not make credits the value language

Lindy uses credits because it sells high-value B2B work and needs pooled workspace controls. Aire should meter completed work and sensible plan allowances, not force consumers to translate requests into credits. A resource-heavy task can pause with a clear cost or usage warning without exposing token economics.

### Do not lead with "AI employee" for consumers

"Your next hire is AI" fits Lindy's team buyer. Aire's consumer promise is time and responsibility returned through a trusted personal operator. "Hire" and "employee" create a business mental model and overstate autonomy for ordinary personal use.

### Do not copy the Home dashboard

Lindy's Home screen is clean but dense: next meeting, composer, meetings, needs-to-know items, activity statistics and recent learnings. Aire should not add a fourth Home destination or generic dashboard. The transferable mechanism is contextual summary around the conversation, not the page structure.

### Do not claim time saved from activity counts

Lindy displays estimated time saved beside emails triaged and drafts written. Aire's Time Given Back method already sets a stronger bar: completed eligible tasks, conservative benchmark ranges, provenance, user active time and intervention records.

## Recommended implementation order

1. Keep the accepted Aire v3 Chat, Work and Profile information architecture unchanged.
2. Freeze one authoritative Work object that supports retry, pause, cancel, approval, artifact and receipt.
3. Add plain-English recurring work as a property of that object, including next run and last result.
4. Add Profile context inspection and correction using the existing personal-context data contract.
5. After a verified successful task, test the "use this approach next time" learned-workflow offer.
6. Add cross-surface continuity through native app, web and desktop companion before optional messaging channels.
7. Later, validate an Aire Business shared-memory layer using Aire's own company operations as the first controlled environment.

## Smallest live test

Run one founder-dogfood loop through the accepted Aire interface:

> Every weekday at 5pm, check today's Aire work, identify anything blocked or waiting on me, and send me one concise summary. Do not publish, send messages to anyone else or change external systems.

Success evidence:

- the request creates one Work object;
- schedule, sources, scope and destination are inspectable;
- each run projects real Hermes milestones;
- no summary appears when nothing material changed;
- Sam can pause, edit, run now or cancel;
- the result links to the underlying work and records any intervention;
- a completed run can be offered as a learned reusable pattern without exposing a skill editor.

## Direct first-party sources

- https://www.lindy.ai/
- https://www.lindy.ai/pricing
- https://www.lindy.ai/use-cases
- https://www.lindy.ai/skills
- https://www.lindy.ai/integrations
- https://www.lindy.ai/security
- https://www.lindy.ai/enterprise
- https://www.lindy.ai/chrome-extension
- https://www.lindy.ai/changelog
- https://docs.lindy.ai/index.md
- https://docs.lindy.ai/coming-soon/home.md
- https://docs.lindy.ai/coming-soon/files.md
- https://docs.lindy.ai/coming-soon/routines.md
- https://docs.lindy.ai/coming-soon/skills.md
- https://docs.lindy.ai/features/imessage-sms.md
- https://docs.lindy.ai/features/ad-hoc-tasks.md
- https://docs.lindy.ai/start-here/best-practices.md

## Connected vault notes

- [[companies/personal-agent]] — Aire venture context
- [[project_state/personal-agent]] — current implementation state and blockers
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]] — accepted conversation, Work, Profile and Time Given Back direction
- [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]] — related one-delegation, one-Work-object pattern
- [[briefs/2026-08-10-aire-business-operating-intelligence-thesis]] — shared workplace and management intelligence extension
- [[context/personal-context-data-contract]] — normative Profile and context boundary
- [[goals/personal-agent-ai-operated-company-proof]] — six-month customer and company-operations proof gates
- [[context/business-opportunities-moc]] — opportunity map

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/2026-08-07-vibiz-connector-source-audit-and-aire-lessons]]
- [[briefs/2026-08-10-aire-business-operating-intelligence-thesis]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[context/personal-context-data-contract]]
- [[goals/personal-agent-ai-operated-company-proof]]
- [[project_state/personal-agent]]

