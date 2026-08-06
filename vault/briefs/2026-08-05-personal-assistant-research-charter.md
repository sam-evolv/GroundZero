---
title: Research charter for a device-native personal AI assistant
status: exploratory research programme
created: 2026-08-05
source: Sam discussion
related:
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-mainstream-ireland-consumer-agent-experience
  - briefs/2026-08-05-managed-agent-feasibility-and-success-plan
  - companies/cara
  - project_state/cara
---

# Research charter for a device-native personal AI assistant

## Research objective
Research how to build a consumer/prosumer personal assistant that feels as simple, welcoming and device-native as an Apple product while being materially more useful than a generic chat product. It must help ordinary people and busy prosumers complete real tasks across their phone, paired computer, files, browser, voice and optional familiar messaging channels.

The intended product is not marketed as a model, chatbot, agent framework or technical tool. The person should feel that they have one trustworthy assistant that understands enough context to reduce repetition, prepares and completes useful work, visibly reports progress, and asks before consequential action.

This remains exploratory. Do not recommend a broad build or public launch without evidence. OpenHouse remains the revenue-first company priority. The desired output is a source-backed product and research foundation that makes future design and engineering decisions unusually informed.

## Non-negotiable product thesis

- The product must feel like a calm digital assistant, not generic AI chat.
- Users do not choose models, tools, providers, token budgets, skills, APIs or integrations.
- The core promise is outcomes: “send it to your assistant and it sorts the next step.”
- The assistant works across devices. The defining moment is “your computer on the move”: a person away from home asks naturally for an authorised file or answer from their paired computer and receives it without remote desktop complexity.
- Pairing must feel like AirPods: app-first, QR/short-link based, fast, obvious, reversible and non-technical.
- iOS and Android are expected to be the main entry point. Desktop companion installation, identity transfer and device pairing must be effortless from the mobile app.
- The product should use a beautiful native app as the default messaging surface. WhatsApp and iMessage-style routes can be investigated, but no user should need to create bots, configure BlueBubbles, use terminals or understand a bridge.
- It should show honest, rich progress for meaningful work and support interactive notifications, approval requests, receipts, pause/cancel and delivery of finished artifacts.
- It should have a user-owned, inspectable “Personal Ground Zero” that distinguishes raw sources, durable context, decisions, live state and task-specific retrieval. It must support why-do-you-know-this, edit, forget, privacy scopes and separation between personal, work and shared spaces.
- Raw files should remain on authorised devices or existing cloud drives by default. Cloud stores continuity, task/approval state, selected context and explicitly synced artifacts. Never assume bulk upload of a user’s digital life.
- Consequential actions such as sending, posting, purchasing, booking, deleting, sharing and changing accounts are approval-first by default.
- The product must be safe, truthful and human-centred. It cannot use dark patterns, simulated emotion, manufactured urgency, addictive notification loops or deceptive claims of human involvement.
- Open-source models, specialist GitHub projects and local execution are an opportunity for cost and capability, but must be assessed for commercial licence, safety, quality, latency, maintenance and user-value fit.

## The north-star user experience

A person should be able to complete this story without technical help:

1. They install the iOS or Android app.
2. They see “What do you need sorted?” rather than an empty generic chat screen.
3. They share a real thing: photo, email, document, screenshot, voice note or a short natural request.
4. The assistant visibly understands the relevant facts and prepares a useful next step.
5. The person grants a narrow permission only after understanding the value.
6. The assistant completes a bounded action, or returns an artifact, with a clear receipt and undo where meaningful.
7. Later, the person taps “Add your computer”, scans a QR code or opens a short link on their desktop, approves the named device and selects folders/access scopes in plain English.
8. Away from home, they say “Send me the latest proposal I was working on.” The assistant retrieves the authorised document from the paired device, tells them what it found and delivers it into the same conversation.
9. They never see model names, technical logs, API credentials, hostnames, gateways or file-system jargon.

## Research graph

```text
Personal assistant preference and retention
|
|-- A. Real-world user value
|   |-- high-frequency tasks
|   |-- high-stress tasks
|   |-- jobs postponed because of cognitive load
|   |-- moments worth recommending to another person
|   `-- willingness to pay and switching friction
|
|-- B. First-use activation
|   |-- first three minutes
|   |-- object-first vs blank-chat entry
|   |-- account creation timing
|   |-- permission timing
|   `-- time to first finished outcome
|
|-- C. Trust and agency
|   |-- approval boundaries
|   |-- progress visibility
|   |-- task receipts and undo
|   |-- uncertainty and failure recovery
|   |-- privacy comprehension
|   `-- memory provenance, correction and forgetting
|
|-- D. Device-native interaction
|   |-- mobile-first onboarding
|   |-- AirPods-style computer pairing
|   |-- local file/app/browser access
|   |-- offline and unavailable-device states
|   |-- share sheet, camera, voice and notifications
|   `-- cross-device continuity
|
|-- E. Interface and emotional design
|   |-- cognitive load and progressive disclosure
|   |-- friendly, capable language
|   |-- visual hierarchy, layout, typography and colour
|   |-- motion, haptics and perceived responsiveness
|   |-- accessibility and digital confidence
|   `-- customisation without configuration burden
|
|-- F. Agent quality and operations
|   |-- reliable task orchestration
|   |-- model/tool routing invisible to users
|   |-- evidence and quality checks
|   |-- cost control and premium work packs
|   |-- safety, abuse and prompt-injection resilience
|   `-- support and incident recovery
|
`-- G. Channel and platform strategy
    |-- iOS and Android app requirements
    |-- desktop companion requirements
    |-- WhatsApp feasibility and policy constraints
    |-- Apple Messages / Messages for Business feasibility
    |-- voice surfaces
    `-- one identity and consent system across all channels
```

## Master research prompt

Copy the following prompt into Claude and ChatGPT separately. Ask each to use current sources, carry out the full research, and return a rigorous report. Do not allow either model to write generic product-strategy filler.

```text
You are the Head of Research for a premium consumer technology company preparing to build a device-native personal AI assistant. Produce a rigorous, source-backed research programme and product recommendation. You are not being asked for generic AI trend commentary or a surface-level competitor list.

Your job is to determine, with evidence, how to create a product people prefer to ChatGPT and Claude for everyday real-world help because it is more useful, trustworthy, friendly, contextual and effortless across their devices.

PRODUCT THESIS
We are exploring a consumer/prosumer assistant that should feel as simple, calm and device-native as an Apple product. It is not sold as “an agent”, “a chatbot”, a model wrapper, a prompt tool or a technical workflow platform. It should feel like one trustworthy assistant that helps a person sort the next step.

The assistant should:
- work through iOS and Android apps as the normal front door;
- have an exceptionally simple desktop companion connection, inspired by AirPods pairing: mobile app -> tap “Add your computer” -> QR code or secure short link -> approve named device -> choose clear, narrow permissions -> done;
- support “your computer on the move”: a user away from home can ask naturally for an authorised local file, answer or artifact from their paired desktop/laptop without remote-desktop complexity;
- accept text, voice, photos, screenshots, shared emails/documents and browser/file context;
- show truthful progress for longer work, using rich push notifications, Live Activities/ongoing notifications or equivalent platform surfaces where suitable;
- let users approve, pause, cancel, review, undo and receive a clear receipt for consequential work;
- retain a user-controlled personal context layer, called Personal Ground Zero, which separates raw sources, durable preferences/facts, decisions, live tasks/state and minimal task-specific retrieval;
- let users inspect why it remembers something, correct it, forget it, control privacy scope and separate personal, work and shared spaces;
- keep raw local files on authorised devices by default. Cloud should hold continuity, selected/synced artifacts, task and approval history, and relevant context rather than silently copying a whole digital life;
- hide model/provider/tool decisions. Internal routing should select the cheapest reliable capability and escalate when genuine quality or safety requires it;
- default to approval before sending, posting, buying, booking, deleting, sharing sensitive materials or changing accounts;
- potentially support WhatsApp and an Apple-supported Messages route in future, but must never require users to configure bots, BlueBubbles, gateways, tokens or technical integrations;
- use open-source/local/specialist models where appropriate, but only where commercial licensing, reliability, safety, cost and quality are defensible.

IMPORTANT CONSTRAINTS
- This is exploratory product research, not an instruction to build or launch.
- Do not use dark patterns, addictive engagement tactics, false urgency, fake emotional intimacy or deceptive claims of human involvement.
- The goal is voluntary, informed preference because the product reduces real-world friction and mental load.
- Be explicit about uncertainty, platform constraints, legal/commercial caveats and assumptions.
- Do not use unsupported claims, invented statistics, invented user quotes or fabricated product capabilities.
- Prefer original and authoritative sources: peer-reviewed work, platform owner documentation, regulators, standards bodies, first-party product documentation, official developer policies, app-store rules and direct product observation. Use credible secondary reporting only when primary sources are unavailable.
- Provide direct source URLs and publication/access dates. Every material claim needs a source or an explicit “recommendation, not observed fact” label.
- Do not conflate time spent in an app with user value. Prioritise completed outcomes, comprehension, trust and voluntary repeat use.

DELIVERABLE FORMAT
Write a research report with the exact sections below. Use headings, bullets and compact matrices where useful. Do not use vague phrases such as “seamless”, “delightful” or “AI-powered” unless you operationalise them into a concrete interaction, measurement or design decision.

1. EXECUTIVE VERDICT
- State the core opportunity, the main user behaviour to win, the hardest product risk, and the three design decisions most likely to determine success.
- State what should not be built first.
- Give a blunt verdict on whether this can be meaningfully differentiated from ChatGPT/Claude and what the differentiation actually is.

2. USER AND JOBS-TO-BE-DONE RESEARCH
- Define 4-6 distinct early user segments. Include busy prosumers, digitally active but AI-uninterested people, people anxious about getting digital tasks wrong, and people managing meaningful personal/work admin.
- For each segment: recent real-world jobs, trigger, current workaround, emotional cost, practical cost, switching friction, likely first successful task, likely trust concern, and evidence source.
- Separate task frequency, severity, urgency, willingness to pay and shareability. Do not treat a stated preference as proof of demand.
- Identify the first 10 candidate “send it to your assistant” inputs, ranked by frequency, consequence, feasibility and potential to create an immediate memorable outcome.

3. FIRST-THREE-MINUTES ACTIVATION RESEARCH
- Compare blank chat onboarding, object-first onboarding, task templates, guided setup and anonymous first task before sign-up.
- Recommend an exact mobile-first first-session flow, screen by screen, including copy, input choices, permission timing, account timing, success receipt and the moment to offer desktop pairing.
- Explain why each step reduces cognitive burden or increases informed trust, with sources where available.
- Define measurable activation criteria. Include time-to-first-value, personal-object completion rate, permission comprehension, second task within 24 hours and voluntary referral/showability.
- Identify failure states and recovery copy. Do not assume a perfect model response.

4. TRUST, CONTROL AND HUMAN AGENCY
- Research trust calibration in AI-assisted action, automation bias, algorithm aversion, uncertainty communication, explanation quality, perceived control, reversibility and error recovery.
- Define a practical autonomy ladder for this product: explain, prepare, act with approval, bounded monitoring, approved repeat action. State which actions remain approval-first by default.
- Design action cards, approval requests, receipts, undo, cancellation and audit history in plain human language.
- Define how the assistant should communicate uncertainty, unavailable devices, ambiguous files, stale memory, incomplete work, service outages and failed actions.
- Recommend guardrails that enhance rather than ruin usability.
- Include the policy line between warm supportive language and deceptive anthropomorphism.

5. PERSONAL GROUND ZERO AND MEMORY
- Compare consumer-facing memory approaches used by leading assistants, personal knowledge products and operating systems.
- Propose a memory architecture that separates: raw provenance, durable context, decisions, live operating state and retrieval capsules.
- Define user-facing controls: why do you know this, source links, edit, forget, expiration, privacy scope, local-only/private cloud/shared workspace, export and deletion.
- Research what users actually understand about “memory”, data retention, model training, cloud storage and device access. Recommend language that is clear without being patronising.
- Define memory trust metrics and concrete failure scenarios. Include correction of wrong memory, relationship/context mix-ups, stale facts and cross-workspace leakage.

6. DEVICE-NATIVE EXPERIENCE AND PAIRING
- Research Apple Human Interface Guidelines, Material/Android guidance and leading cross-device pairing/onboarding experiences. Extract interaction principles, not a list of aesthetic references.
- Design the “Add your computer” AirPods-style flow in detail: discovery, QR/deep link, signed-in identity transfer, named-device confirmation, permission selection, success confirmation, device status, revocation, new-device transfer and lost-device recovery.
- Explain how to avoid technical language while preserving meaningful consent.
- Map the device states: connected, reachable, asleep, offline, permission revoked, software update required, local-only item, synced item and ambiguous file match. Provide exact suggested user-facing copy for each.
- Examine cross-device continuation patterns: start on phone, continue on desktop, complete in notification, return to phone. Recommend a coherent task model.
- Address share sheets, camera, files, browser/page context, clipboard, voice, notifications and accessibility surfaces.

7. MESSAGING, VOICE AND CHANNEL STRATEGY
- Research the real feasibility, official policy and commercial constraints of WhatsApp Business Platform, Apple Messages for Business, iMessage app extensions, SMS, RCS, Telegram and native mobile messaging. Distinguish observed official capability from speculative workaround.
- Recommend a channel hierarchy for alpha, early product and later scale. The default must be the native mobile app with conversation-quality UX and push notifications.
- Define a single identity, consent, conversation and task history system across every channel.
- Analyse voice: text-to-speech, speech-to-text, real-time voice conversation, voice notes, privacy and failure handling. Identify which voice moments are genuinely more useful than text.
- Identify where platform policy makes a desired interaction impossible or commercially dangerous. Do not recommend unsupported iMessage bridges as a mass-consumer foundation.

8. INTERFACE, VISUAL AND EMOTIONAL DESIGN RESEARCH
- Study cognitive load, progressive disclosure, choice architecture, comprehension, reading load, information scent, feedback, interruption and emotional safety in consumer software.
- Define how the app should be substantially friendlier and more approachable than ChatGPT/Claude without becoming childish or patronising.
- Recommend the product’s information architecture. It should not be a generic dashboard or a blank chat screen. Define the relationship between conversation, current work, approvals, completed outcomes, context and settings.
- Propose 3 genuinely distinct visual directions, each with rationale, reference products, risks and appropriate audience. Do not default to purple AI gradients, dense dark dashboards, generic SaaS cards or faux Apple glass.
- For each direction specify: neutral surfaces, one primary accent, semantic status colours, light/dark adaptation, motion principles, photography/illustration policy, icon style, spacing/density and accessibility requirements.
- Recommend a provisional direction and explain how to test it rather than treating personal taste as evidence.
- Recommend typography for iOS, Android, desktop and web. Prioritise native familiarity, Dynamic Type/font scaling, line length, reading comfort, hierarchy and accessibility over fashionable fonts. Give practical type-scale guidance and minimum touch-target requirements with source support.
- Specify how colour, typography, motion, haptics and sound should communicate actual state, confirmation and risk. Avoid decoration with no behavioural function.

9. INTERACTIVE PROGRESS, NOTIFICATIONS AND TASK DELIVERY
- Research effective progress disclosure for asynchronous tasks, uncertainty, waiting, notifications and user interruption.
- Design a task-state model: received, clarifying, preparing, working, awaiting approval, paused, completed, partially completed, failed, device unavailable and cancelled.
- Give exact human-language examples for every state. Distinguish true progress from artificial thinking theatre.
- Define rich push notification patterns and actions: view, approve, review, cancel, pause, resume, retry and undo where meaningful.
- Determine which notifications should be immediate, batched, quiet or never sent. Optimise for trust and relevance, not daily engagement.
- Describe delivery patterns for documents, images, video, audio, calendar items, drafts, research packs and external-action receipts.

10. CUSTOMISATION WITHOUT CONFIGURATION BURDEN
- Research what users actually want to personalise in assistants.
- Recommend a default-zero configuration philosophy and a progressive customisation plan.
- Separate essential controls from advanced preferences. Include update cadence, notification preferences, tone, work hours, approval boundaries, connected devices, storage scope, memory, privacy, personal/work/shared spaces and accessibility.
- Define which settings should be asked contextually, which should be in settings, and which should never be exposed because they increase cognitive burden without improving user control.

11. ACCESSIBILITY, INCLUSION AND DIGITAL CONFIDENCE
- Research mobile and desktop accessibility requirements, including WCAG 2.2, Dynamic Type, Android font scaling, touch targets, contrast, screen readers, reduced motion, reduced transparency, hearing needs, colour-blind safety, language complexity, literacy and older-user digital confidence.
- Design accessibility as a first-class premium-quality feature, not a compliance appendix.
- Include design implications for users with low digital confidence. Avoid framing them as incapable or designing a patronising “simple mode.”
- Define inclusive usability tests and success criteria.

12. SAFETY, PRIVACY, SECURITY AND RELIABILITY AS UX
- Map the user-visible trust stack: data minimisation, consent, connector scopes, device access, encryption claims, task/evidence logs, deletion/export, account recovery, revocation, lost-device handling, model-provider data boundaries, prompt injection and suspicious content.
- Separate what can be promised at alpha from what requires stronger engineering/legal evidence. Do not make unconditional end-to-end-encryption claims if cloud background operation needs readable context.
- Define a transparent failure and incident communication model.
- Recommend reliability metrics based on task success and user impact, not only uptime. Include evidence/provenance accuracy, action correctness, permission correctness, notification accuracy and recovery time.

13. CAPABILITY ROUTING, OPEN SOURCE AND COST EXPERIENCE
- Research how a product can use multiple commercial APIs, local execution, open-source models and specialist capability repositories without surfacing technical complexity to users.
- Assess licensing, hosting, security, model quality, latency, maintenance, evaluation and vendor-lock-in risks.
- Propose human language for premium work packs or costly creation without making the product feel token-metered or cheap.
- Identify cost-containment rules for video, image, music, voice, browser actions, file processing and premium reasoning.
- Identify where local/on-device models offer a real user experience advantage and where they create unacceptable support burden.

14. COMPETITOR AND ADJACENT-PRODUCT ANALYSIS
- Compare ChatGPT, Claude, Gemini, Apple Intelligence/Siri, Microsoft Copilot, Perplexity, Replit, Notion, Raycast, Arc/other browser assistants, personal knowledge products, messaging-first assistants and cross-device consumer products.
- For each, assess the actual user journey, onboarding, task completion, memory/context, permissions, progress, cross-device continuity, notifications, device integration, tone, visual hierarchy and trust patterns.
- Separate observed facts from interpretation.
- Identify gaps that are truly defensible rather than merely features competitors have not shipped yet.
- Include a “do not copy” section: patterns that feel technically clever but burden ordinary users or undermine trust.

15. VALIDATION PLAN BEFORE BUILDING
- Recommend a staged research and prototype programme for a solo founder/small team.
- Prioritise the cheapest evidence first: desk research, competitor teardown, 10-15 contextual interviews, diary studies, clickable prototypes, moderated usability, concierge trials and instrumented alpha.
- Define the three signature moments to validate first:
  1. authorised computer/file access while away;
  2. understanding a live page, document, spreadsheet or email and preparing the useful next action;
  3. one request to a finished artifact delivered back through the same conversation.
- Define a falsifiable hypothesis, leading metric, failure threshold, evidence required and no-build decision for every major assumption.
- Recommend an interview guide that asks about recent real behaviour, current workaround, cost and frustration. Avoid hypothetical “would you use this?” questions.
- Include a full research participant-recruitment brief and a consent/privacy-safe research protocol.

16. PRIORITISED PRODUCT REQUIREMENTS
- Produce a ranked list of: must be true before alpha, important before paid pilot, defer until evidence, and explicitly avoid.
- For every requirement include user value, rationale, technical/product risk, research confidence, source links and a measurable acceptance test.
- Finish with a one-page “design constitution” containing 12-20 non-negotiable principles for future designers, engineers, researchers and agents.

QUALITY BAR
- Think like the Head of Research at a leading AI lab and the product/research leader of a world-class consumer company.
- Be evidence-led, precise, opinionated and honest about uncertainty.
- Do not give us a broad feature checklist. Turn every recommendation into an observable user behaviour, interface rule, research question, design requirement or acceptance metric.
- Separate immediate alpha choices from later platform ambition.
- Ensure the final report can be pasted into a version-controlled knowledge base and used as a build/research specification.
```

## Required research ledger

Ask each researcher to append this ledger. This prevents polished but unusable synthesis.

```text
For every substantive recommendation provide:

- Research question
- Recommendation
- Classification: observed fact / evidence-backed inference / design recommendation / open hypothesis
- Why it matters to the product
- Best supporting sources, with direct URLs and dates
- Evidence quality: primary / peer-reviewed / regulator-standard / first-party product documentation / credible secondary / weak
- Conflicting evidence or limitation
- User segment affected
- Exact user behaviour or interface rule that follows
- How to test it cheaply
- Success metric
- Failure threshold or disconfirming evidence
- Build phase: alpha / post-alpha / later / do not build yet
```

## Mandatory source families

Research must include, at minimum:

- Apple Human Interface Guidelines and relevant Apple developer/platform policy pages.
- Android Material guidance and Android accessibility guidance.
- WCAG 2.2 and relevant W3C accessibility material.
- GDPR and European Data Protection Board or Irish Data Protection Commission guidance where applicable.
- Official WhatsApp Business Platform and Apple Messages for Business/iMessage documentation.
- Official documentation for relevant OpenAI, Anthropic, Google, Apple and Microsoft user controls, privacy/memory behaviour and agent/computer-use guidance.
- Peer-reviewed research or reputable scholarly reviews on cognitive load, progressive disclosure, choice overload, trust calibration, automation bias, algorithm aversion, human control, explanations, error recovery, notification interruption and accessible mobile interaction.
- Direct observation of leading consumer products. Clearly state app version, platform and date observed.
- Review mining from App Store, Google Play, Reddit/forums or support communities only as labelled qualitative signal, never as statistically representative proof.

## Research guardrails

- Do not fabricate quotes, metrics, usability findings or app functionality.
- Do not confuse product marketing language with observed capability.
- Do not treat an isolated user comment as market validation.
- Do not recommend surveillance, covert data collection or manipulative behavioural techniques.
- Do not recommend broad autonomous external action before trust, evaluation and approval gates are tested.
- Do not treat iMessage as a generic programmable phone-number channel without first verifying the current official Apple route.
- Do not assume free/open-source model weights are commercially safe or operationally free.
- Do not use model quality benchmarks as proof that ordinary people will prefer a product.
- Do not confuse “more time in the app” with better user outcomes.

## Ground Zero delivery format

If you have access to the Ground Zero repository, save the final research report as:

`/Users/samdonworth/GroundZero/vault/briefs/YYYY-MM-DD-personal-assistant-research-<researcher>.md`

Use this frontmatter:

```yaml
---
title: Personal assistant product research - <researcher>
status: research
created: YYYY-MM-DD
source: <researcher/model> + cited sources
related:
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-mainstream-ireland-consumer-agent-experience
  - briefs/2026-08-05-personal-assistant-research-charter
---
```

Include an executive summary, a source index, the research ledger, direct URLs, an unresolved-questions section and wiki links to the three related notes above. Do not overwrite existing notes. Do not commit, push, deploy, contact anybody or change external accounts.

If you do not have repository access, return one complete Markdown document with the exact frontmatter and filename above so it can be added manually.

## Recommended split for parallel research

Do not ask one model to answer all workstreams shallowly. Give the Master Research Prompt to both models, then assign targeted deep-dives:

1. Human factors, cognitive load, accessibility and emotional design.
2. Mobile onboarding, pairing, native interaction and cross-device continuity.
3. Trust, privacy, memory, consent, user control and reliability UX.
4. Messaging, voice, WhatsApp, Apple routes and channel policy.
5. Competitive teardown and product differentiation.
6. Agent architecture, local/open-source capability, evaluation and cost experience.
7. Research design, recruitment, interview guide, prototype tests and alpha metrics.

Each deep-dive must use the same evidence ledger, cite direct sources and state where it disagrees with the master synthesis.

## Decision rule after research

Do not turn research volume into a build plan automatically. After collecting reports, synthesise only the points that meet this bar:

- the finding is supported by credible evidence;
- it materially changes a design, product or technical decision;
- it is feasible for a small team or has a clearly staged path;
- it improves user value, trust, accessibility, safety or retention;
- it has a falsifiable test;
- it does not undermine the approval-first, privacy-respecting and non-technical product promise.

## Connected vault notes

- [[briefs/2026-08-05-managed-agent-consumer-wedge]] - core opportunity, architecture and product principles
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]] - existing source-backed mainstream-user onboarding and trust research
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]] - technical feasibility and staged success gates
- [[companies/cara]] - earlier voice-first assistant lineage, currently deprioritised
- [[project_state/cara]] - status guardrail, no implicit reactivation

- [[imports/design-systems/openhouse-openbook/SKILL]] — shared signals: openhouse, openbook, design

- [[imports/chatgpt/ireland-gpt-product-strategy-session-2026-08-06]] — shared signals: strategy, product, chatgpt
## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-05-managed-agent-consumer-wedge]]
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-personal-assistant-research-claude]]
- [[briefs/2026-08-05-personal-assistant-research-codex]]
- [[briefs/2026-08-05-personal-assistant-research-first-return-audit]]
- [[briefs/2026-08-05-personal-assistant-research-gemini]]
- [[companies/cara]]
- [[context/index]]
- [[project_state/cara]]

