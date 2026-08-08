---
title: Hark Handoff study and IrelandGPT product translation
status: active product input
created: 2026-08-06
source: Brett Adcock launch post and video, Hark official product and privacy materials, public Online-Mind2Web leaderboard
---

# Hark Handoff study and IrelandGPT product translation

## Decision

Hark validates the personal-agent thesis, but IrelandGPT should not copy Hark's proprietary-model strategy, visual identity or broad transactional permissions. It should adopt Hark's strongest interaction contract: a person hands over an unwanted outcome, the work continues as a durable run, the system asks only for missing detail or consequential approval, and it returns a clear receipt.

IrelandGPT already has stronger trust foundations than Hark's launch demo shows: Hermes-owned runs, exact approval choices, stop and recovery, consumer-safe history and event projection, and no invented progress. The product gap is that IrelandGPT still presents those capabilities as a conversation desk. It now needs to become a calm handoff desk.

## What Hark is doing

Hark describes a personal intelligence spanning speech, text, vision, persistent memory, proactive behaviour, hardware and agentic computers. Handoff is its web-execution layer.[[hark-handoff-source-ledger]]

For each request, Hark says it spins up a dedicated virtual computer with a browser, file system and terminal. The model uses site structure and visual processing, then loops observation, reasoning and cursor or keyboard actions across live websites. Connected accounts supply addresses, preferences and history.[[hark-handoff-source-ledger]]

The launch demonstration uses ordinary life tasks rather than coding. Its opening spoken order combines several people's lunch requests and asks Hark to place the order on a company card. The main task begins with an ambiguous request to "liven this place up." Hark asks what should change, receives a two-bouquet specification, acknowledges that the task may take a few minutes and begins working through a florist website.

Hark also claims internal use for shopping, travel, restaurant search, research, recurring coffee orders, dentist discovery and email, returns, and end-to-end recruiting.

## Evidence boundary

The public Online-Mind2Web human leaderboard lists Hark Handoff at 97.7% average success across a live web benchmark of 300 tasks and 136 websites. Its source column attributes the evaluation to Careerflow human data.[[hark-handoff-source-ledger]]

That supports a narrow claim: Hark currently has a very strong published result on one live-web benchmark. It does not independently verify Hark's internal benchmark, cost claims, every consumer workflow, or the full comparison against frontier models. Hark states that WebTailBench and its internal evaluation were run through its own harness.

The launch video also omits several trust-critical details:

- final flower order receipt;
- price, delivery and payment confirmation;
- exact approval boundary;
- undo or cancellation;
- failed-run recovery;
- account and connector permissions;
- long-running task history;
- research source receipts.

## What makes Hark great

### Handoff is the product verb

The promise is not "chat with a more capable model." It is "hand off what you don't want to deal with." This makes the value legible without explaining agents or tools.

### Clarification signals competence

Hark does not interpret an ambiguous lifestyle request as permission to guess. It asks for the detail that changes the task, then proceeds.

### Duration is reset honestly

"It might take a few minutes" moves the interaction from chat latency to delegated work. The user should be able to leave and return without losing the task.

### The unit is an outcome, not a website

One task can span multiple sites, searches and decisions. The user does not need to translate intent into site-specific steps.

### Personal context removes repeated setup

Saved preferences, addresses and account state make future handoffs faster. The product becomes more useful through use, if the context remains inspectable and correctable.

### Isolation is part of the architecture

Each cloud run receives a separate execution environment. This is the right architecture for untrusted web content, but IrelandGPT must add explicit household, work and personal boundaries.

## Where IrelandGPT should be better

Hark's privacy policy says sandbox task data can include files, commands, code and logs. Its local browser operator sends authorised page content and browser actions to Hark servers. Service information may be retained for the lifetime of the account, and Hark may use personal data to personalise and improve services. The policy also asks users not to provide sensitive financial, identity or health information.[[hark-handoff-source-ledger]]

That creates a product opening for IrelandGPT:

- local-first personal context;
- no training on personal task content by default;
- short declared retention for ephemeral browser runs;
- precise connector scopes;
- visible last-used receipts;
- one-tap revoke, correction, export and deletion;
- separate approvals for send, buy, book, cancel and account change;
- Irish and EU data-lifecycle design from the start.

## Product changes now adopted into the IrelandGPT direction

1. **Conversations become handoffs.** Every consequential request is represented as a durable task tied to the authoritative Hermes run.
2. **Doing becomes a first-class view.** Active, waiting and interrupted work remains visible outside the message scroll.
3. **Done becomes a receipt feed.** Every completed task explains the outcome, sources, changes, messages sent, money committed and undo path.
4. **Missing detail and approval are different states.** The assistant may need a preference without asking permission. Consequential actions require an explicit approval.
5. **The user can leave.** Run state survives app closure and network loss through Hermes-owned recovery.
6. **Attachments become primary inputs.** Photo, file, share and voice are promoted once the safe artifact registry exists.
7. **You becomes the context surface.** Preferences, memories, connectors, permissions and recent use are inspectable and correctable.
8. **Browser use is a bounded Hermes capability.** It does not become a second runtime.

## First Ireland-specific handoff contracts

1. Appointment letter to calendar and travel reminder.
2. Renewal or bill to deadline, comparison and contact draft.
3. Travel confirmation to itinerary, calendar and household summary.
4. Irish shopping research to a checkout-ready basket, stopping before payment.
5. Booking search across several sources, stopping for approval before commitment.

## Implementation sequence

### Phase 1: reshape the existing Hermes seam

- durable task identity;
- active task card with real lifecycle events;
- waiting-for-detail state separate from approval;
- completion receipt shell;
- preserved stop, recovery and exact approval choices.

Gate: one real task can be started, left, resumed, clarified, approved, completed and understood without runtime jargon.

### Phase 2: artifacts and one object-to-action contract

- Hermes-owned safe artifact registry;
- one bounded photo or PDF input;
- structured action card and source receipt;
- appointment-letter contract completed end to end.

Gate: a target user submits a real appointment letter and receives a correct approval-gated calendar action within three minutes.

### Phase 3: isolated browser handoff

- per-run browser sandbox;
- connector capability manifest;
- consequence-specific approvals;
- search and checkout preparation without payment;
- replayable task receipt and interruption recovery.

Gate: at least 80% success on a fixed Irish consumer task set, zero crossed payment or sending boundaries, and safe recovery after interruption.

### Phase 4: personal context and repeat use

- inspectable preferences and boundaries;
- save or reject inferred preferences;
- approved context reuse without cross-context leakage;
- second-task rate and time-saved measurement.

Gate: repeat tasks need materially less setup while the user can see, correct and delete the context used.

## Do not copy

- proprietary model training before demand proves it is the bottleneck;
- benchmark leadership as a substitute for consumer safety;
- broad transactional autonomy in the first alpha;
- one spinner hiding long-running work;
- Hark's brand or product name;
- proactive behaviour before memory controls and notification discipline;
- cloud access to local browser state without a precise boundary.

## Connected vault notes

- [[companies/personal-agent]]: venture context
- [[project_state/personal-agent]]: current build state
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]: founder thesis and build sequence
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]: mainstream Irish experience and three-minute magic
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]: Hermes-first sequencing decision
- [[hark-handoff-source-ledger]]: exact public sources and claim boundaries
- [[context/index]]: shared entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-06-irelandgpt-delegation-product-charter]]
- [[briefs/2026-08-06-personal-agent-founder-operating-brief]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[briefs/hark-handoff-source-ledger]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[items/personal-agent-founder-dogfood-and-proof-loop]]
- [[project_state/personal-agent]]

