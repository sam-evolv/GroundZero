---
title: Personal assistant prototype start gate
status: superseded-in-part
created: 2026-08-05
superseded_by: decisions/2026-08-06-personal-agent-runtime-first-sequence
verified: 2026-08-05
source: Sam discussion and reviewed research
related:
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-managed-agent-feasibility-and-success-plan
  - briefs/2026-08-05-personal-assistant-research-charter
  - briefs/2026-08-05-personal-assistant-research-claude
---

# Personal assistant prototype start gate

> **Historical gate:** the safety and evidence requirements remain relevant. The folder-retrieval-first milestone was superseded on 6 August 2026 by [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]. Hermes is now required on the primary path from the first usable wrapper.

## Decision

Do not wait for all seven research workstreams before prototyping. Research and implementation can proceed in parallel. Before product code begins, close a short Gate Zero that prevents accidental architecture, privacy and scope drift.

## Gate Zero blockers

### 1. Repository safety

- `sam-evolv/IrelandGPT` is the product repository and should be private before proprietary product work is pushed.
- `sam-evolv/hermes-agent` remains the public upstream-tracking runtime fork.
- No secrets, API keys, personal Ground Zero content or customer data enter either repository.

### 2. Exact prototype scope

The first prototype is a private single-user vertical slice, not a public multi-tenant product. It demonstrates:

1. A simple mobile interaction receives a file, screenshot, URL, voice note or natural request.
2. The assistant shows honest, human-language task state.
3. A Mac companion pairs with the mobile experience and receives access only to a user-selected folder.
4. A request for one named or described file returns candidate matches when ambiguous and delivers the approved artifact into the mobile conversation.
5. A shared document or screenshot can be understood and turned into a prepared next step or finished artifact.

### 3. Safety boundary

The prototype may read, retrieve, explain and prepare. It may not autonomously send, post, buy, book, delete, publish, modify accounts, access Keychain, request Full Disk Access or drive arbitrary applications.

Any external action demonstrated later must use a human-readable approval card and a verified receipt. There is no approval bypass in alpha.

### 4. Data and model boundary

Before first cloud-model processing, document:

- what leaves the device;
- which named provider processes it;
- provider retention/training settings actually in force;
- what is stored in the prototype control plane;
- what remains local;
- how the user deletes task data and revokes a paired device.

Do not promise local-only, end-to-end encrypted or immediate deletion unless implementation and provider contracts prove it.

### 5. Acceptance test

The vertical slice is successful only when Sam can complete all of the following without touching a terminal:

- open the mobile experience;
- pair a named Mac;
- choose one folder;
- leave the Mac companion running;
- request a real file naturally from the phone;
- disambiguate between multiple matches;
- receive the correct file;
- see whether the Mac is online, asleep, offline or permission-blocked;
- stop a task and revoke the device;
- understand from the receipt exactly what was read, returned and not changed.

Every run records task success, latency, wrong-file rate, permission failures and recovery outcome. No polished visual prototype counts as completion without this real exercised path.

## Recommended implementation shape for the prototype

- Cross-platform mobile surface: one shared iOS/Android codebase unless a technical spike disproves it.
- Mac companion: native permission/folder-selection shell plus a constrained local service.
- Control plane: minimal authenticated task relay, task state, approvals, device registry and artifact delivery.
- Hermes adapter: pinned Hermes commit behind a narrow internal interface; do not expose Hermes configuration to the mobile client.
- Personal Ground Zero: start with provenance-bearing task/project context, not full personal-memory ingestion.

Technology choices remain hypotheses until short spikes verify mobile background behaviour, macOS folder access, local indexing, secure pairing and Hermes task isolation.

## Deferred from the first prototype

- public App Store release;
- production multi-tenancy and billing;
- WhatsApp, personal iMessage or Apple Messages for Business;
- Windows/Linux companions;
- broad computer use or screen driving;
- Full Disk Access;
- repeated autonomous external actions;
- whole-drive ingestion;
- full consumer memory migration;
- premium media allowance design;
- final branding and the name `IrelandGPT`.

## Start rule

Building may begin once the product repository is private and Gate Zero is accepted. The first implementation milestone is the real mobile-to-authorised-Mac-folder retrieval loop, not a landing page, generic chatbot or comprehensive architecture.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]

