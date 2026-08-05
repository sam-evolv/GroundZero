---
title: Personal assistant product research - Codex
status: research
created: 2026-08-05
source: Codex / GPT-5 + cited sources
related:
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-mainstream-ireland-consumer-agent-experience
  - briefs/2026-08-05-personal-assistant-research-charter
---

# Personal assistant product research — Codex

> Desk research and a narrow read-only authenticated UI inspection were completed 5 August 2026. No interviews, usability tests or scripted competitor tasks were conducted; proposed demand, preference and conversion thresholds remain hypotheses. Source access date is 2026-08-05 unless stated otherwise. [S62]

## How to read the evidence

- **OF — observed fact:** directly supported by the cited source or local repository inspection.
- **EI — evidence-backed inference:** a product implication drawn from cited evidence; not directly demonstrated for this product.
- **DR — design recommendation:** a proposed rule to test; not an observed user preference.
- **OH — open hypothesis:** a falsifiable claim that requires primary research.

## 1. EXECUTIVE VERDICT

### Verdict

**Blunt answer: possibly, but there is no longer a defensible headline feature.** **[OF]** By August 2026, ChatGPT Work runs long work, creates finished artifacts, shows progress, requests approvals and synchronises *cloud* Work across devices; separately, desktop Work can access explicitly granted local folders, while mobile/web cannot directly reach those desktop-local files and local chats/outputs may remain desktop-only. Availability depends on plan, workspace and rollout. Claude Dispatch now explicitly uses one phone/desktop thread to route work to a waking computer's authorised local files/apps and push the outcome back to the phone. Copilot Tasks, Gemini and Perplexity Computer cover overlapping action, schedule and cross-device context patterns; Raycast strongly covers desktop-local context, tools, default approvals and synced memory but not a comparable mainstream phone/scheduled-work surface in the reviewed documentation. [S4–S9]

**[EI]** A broad “personal agent with memory and integrations”—and even “your computer on the move” by itself—is not defensible. The remaining candidate wedge is the *compound service contract*: **a real object becomes a bounded outcome; pairing and scope are understood without technical help; local/cloud placement stays legible; progress and approvals match real state; memory is source- and workspace-aware; and failure ends in a truthful receipt, recovery or safe stop.** Features are copyable. Permission semantics, ordinary-failure reliability, task recipes/evaluations, support operations and accumulated user-controlled context may compound—but only if primary research proves preference over Claude Dispatch and ChatGPT Work.

**[OH]** The behaviour to win is not “opens an AI app daily.” It is: **when a person encounters a piece of digital friction, they send the actual object to this assistant before manually sorting it or opening generic chat.** The strongest early signal is a second, unprompted personal-object task within 24 hours; the strongest retention signal is repeated cross-device outcome completion without founder help.

**Core opportunity.** **[EI]** Ireland is digitally active, yet many people remain uninterested in generative AI or unsure how to use it: the 2025 CSO reported 42% of internet users had used generative AI, while among non-users 54% reported no need, 20% not knowing how to use it and 19% security/privacy/safety concerns. NALA reports that 27% of Irish adults have below-basic digital skills. [S1–S3] The opportunity is to remove category knowledge from the interaction and prove usefulness through a familiar object and a reversible action.

**Hardest product risk.** **[EI]** The hardest risk is not model intelligence; it is dependable authority across mixed local/cloud state. One wrong-file disclosure, cross-space memory leak, misleading completion claim or unapproved send can destroy trust. This is compounded by indirect prompt injection in web pages, email and documents. Provider and OWASP guidance both recommend least privilege, isolation and human confirmation for meaningful real-world consequences. [S10–S12]

### Three decisions most likely to determine success

1. **Object-first, value-first activation. [DR]** Start with photo, share sheet, file or email; return a structured next-step card before requesting an account or broad permission. Target median first value under three minutes for supported document classes. Custom voice notes enter only after text/cross-device reliability passes.
2. **A device-bound, capability-scoped permission system. [DR]** Pair with short-lived QR/deep-link credentials and device-bound keys; permission is granted to named capabilities or selected folders, not “the whole computer.” Every external action is checked by deterministic policy outside the model.
3. **One inspectable task/context model. [DR]** Conversation, progress, approvals, receipts and memory provenance must describe the same underlying task. “Done” means a verifiable postcondition, not that the model stopped generating.

### What should not be built first

- **[DR]** No broad autonomous assistant, agent marketplace, dozens of connectors, Windows/Linux parity, always-listening voice, unsupported iMessage bridge, social layer, proprietary foundation model, bulk life upload, or open-ended purchasing/email autonomy.
- **[DR]** Do not lead with desktop pairing before a user has experienced value from one personal object; offer pairing after the first receipt or at the moment a local-file job is requested.
- **[DR]** Do not build native apps, desktop companion and a full cloud control plane simultaneously. Test the object-to-outcome loop in a mobile prototype and the remote-file case—now a signature validation case, not a unique market feature—in a separately instrumented pairing prototype before integrating them.
- **[DR]** Do not let this exploratory programme displace OpenHouse without passing the no-build gates in section 15.

### Decision

**[DR]** Proceed only to research and two narrow prototypes, not a broad build or public launch. The product deserves an engineering alpha only if ordinary participants complete the signature moments, correctly understand permissions and return with their own second task. If value collapses to generic drafting, research or chat, stop: incumbents already own that ground.

## 2. USER AND JOBS-TO-BE-DONE RESEARCH

### Evidence boundary

**[OF]** The segments below are behavioural recruitment strata, not validated market segments. Public Irish data supports high general digital activity, uneven generative-AI adoption and digital-confidence barriers; it does not prove demand for this product. [S1–S3] **[DR]** Segment evidence must come from recent-task interviews, diary capture and observed task completion, never “would you use this?” responses.

### Early segments and recent-job hypotheses

| Segment | Recent job and trigger | Current workaround; emotional/practical cost | Switching friction | Likely first successful task | Primary trust concern | Evidence/classification |
|---|---|---|---|---|---|---|
| Busy prosumer: founder, freelancer, consultant | Away from desk; needs the latest proposal, a quick client-ready revision or follow-up | Search phone/cloud, message a colleague, wait to return; interruption and lost momentum | Existing ChatGPT/Claude, cloud-drive habits, high quality bar | Retrieve a specifically authorised local file and produce a shareable revision | Wrong version sent or client data exposed | **OH**; recruit from recent cross-device incidents. Incumbent capability raises the bar [S4,S7,S9] |
| Digitally active, AI-uninterested adult | Receives a bill, appointment, school notice or travel confirmation | Screenshot, write a note, ask family, postpone; low severity but recurring cognitive residue | Sees no need for AI; will not learn prompting | Extract date/action and prepare calendar/reminder with one approval | Hidden data reuse and unexpected account access | **EI/OH** from CSO non-use reasons [S1,S2] |
| Capable but anxious about getting digital tasks wrong | Ambiguous form, renewal, cancellation or official correspondence | Re-read, search, phone support, ask a trusted person; anxiety and delay | Trusts known institutions more than a new assistant | Explain the document, highlight uncertainty and prepare—not submit—the next step | Mistaking preparation for execution; irreversible error | **OH**; digital-confidence rationale [S3] |
| Household/personal admin coordinator | School, care, travel, appointments and shared commitments arrive through many channels | Manual calendar, WhatsApp family thread, email flags; coordination overhead | Shared context and privacy boundaries are hard | Turn one notice into a draft event and share-safe summary | Personal facts leaking into household/shared space | **OH**; validate in context, not by demographic proxy |
| Mobile professional managing meaningful work admin | Page/email/spreadsheet implies a follow-up, quote or decision | Copy between apps, defer to desktop, use a generic assistant then manually apply output | Existing suites and employer policy; high switching cost | Share current context, receive a reviewable draft and one bounded action | Employer data, connector scope, auditability | **OH**; compare with Microsoft/Notion/ChatGPT workflows [S4,S8,S13] |
| Accessibility or low-digital-confidence participant | Small text, complex navigation, unfamiliar permission or multi-step form blocks progress | Zoom, abandon, seek human support; exclusion and loss of independence | New UI can add rather than reduce burden | Photo/voice input to a plain-language action card, completed with assistive tech | Patronising language or inaccessible approval | **EI/OH** from NALA and accessibility standards [S3,S14–S16] |

### How to evaluate jobs

**[DR]** Score observed jobs separately on five axes; do not collapse them into one popularity rank.

| Axis | Evidence to collect | Alpha interpretation |
|---|---|---|
| Frequency | Count occurrences in a 14-day diary; verify artifacts where consented | Repeated weekly jobs can drive habit even if low severity |
| Severity | What actually happened when delayed or wrong? | High severity increases value but raises required reliability |
| Urgency | Time from trigger to useful completion | Remote-file tasks are valuable only if the device/state loop is fast |
| Willingness to pay | Paid concierge offer after a completed outcome | Compliments and stated price intent do not count |
| Shareability | Unprompted demonstration or safe result share | Track without adding a manipulative referral prompt |

### First ten “send it to your assistant” inputs

Ranking is a **design recommendation**, not demand evidence. Scores are relative hypotheses: H/M/L.

| Rank | Input → immediate memorable outcome | Frequency | Consequence | Feasibility | Showability | Alpha decision |
|---:|---|:---:|:---:|:---:|:---:|---|
| 1 | Appointment/event letter or screenshot → verified event + reminder draft | H | M | H | H | Support first; deterministic extraction and source view |
| 2 | Email/message needing a reply → concise draft using the shared message only | H | M | H | M | Prepare only; sending remains approval-first |
| 3 | Bill/renewal notice → due date, amount, options and reminder | M | H | H | H | No payment or cancellation in first alpha |
| 4 | Travel confirmation → itinerary card and calendar draft | M | M | H | H | Require ambiguity checks for timezone/date |
| 5 | School/household notice → events, checklist and share-safe summary | M | M | H | H | Explicit personal/shared destination |
| 6 | Local-computer file request from phone → disambiguated, authorised file delivered | M | H | M | Very H | Signature validation case, not unique feature; compare with Claude Dispatch; file hash/version receipt |
| 7 | Live browser page → plain summary and prepared next action | H | M | M | H | Treat page content as untrusted; never obey embedded instructions |
| 8 | Form/official letter → what it asks, missing information and draft answers | M | H | M | H | No submission; mark advice limits and uncertainty |
| 9 | Spreadsheet/document → anomalies, decisions and a finished brief | M | H | M | H | Narrow supported formats and evidence-linked output |
| 10 | Voice note/photo bundle → structured checklist or research pack returned in-thread | M | M | M | H | Artifact contract before broad multimodal support |

### Demand disconfirmation

- **[OH]** If fewer than 7 of 15 participants bring a real personal object without coaching, the object-first premise is weak.
- **[OH]** Treat ≥25% of successful first-task participants starting a different real task within 24 hours as an early positive signal; <12% after usability blockers are removed disconfirms the activation hypothesis. Values between those thresholds are inconclusive, not success.
- **[OH]** If remote-file retrieval is rare or valued only by technical prosumers, position it as a premium workflow rather than the mass-market front door.
- **[OH]** If users will not pay after three verified outcomes, do not interpret engagement as commercial demand.

## 3. FIRST-THREE-MINUTES ACTIVATION RESEARCH

### Entry-pattern comparison

| Pattern | Benefit | Failure mode | Verdict |
|---|---|---|---|
| Blank chat | Maximum flexibility; familiar to existing AI users | Requires the newcomer to infer capabilities, invent a job and phrase it | **[DR]** Keep as `Type`, never the only home state |
| Object-first | Supplies real context; makes input/output demonstrable | Assistant may infer the wrong job from the object | **[OH]** Default candidate; test against guided blank chat |
| Task templates | Gives concrete examples | A catalogue becomes a configuration burden and can imply unsupported breadth | **[DR]** Show at most three examples, not a workflow gallery |
| Guided setup | Can establish identity and risk boundaries | Delays value; front-loads decisions before trust | **[DR]** Only for a capability essential to the chosen job |
| Anonymous first task | Value before commitment | Requires careful ephemeral-data handling and cannot support every external action | **[OH]** Test for low-risk prepare/explain tasks; state deletion clearly |

**[OF]** Choice response time rises with decision information, but a meta-analysis found no uniform “choice overload” effect; the implication is meaningful prioritisation and defaults, not an arbitrary three-button rule. Progressive disclosure can help people form an initial mental model, but it must not hide material consequences. [S17–S19]

### Exact mobile-first flow to prototype

1. **0:00–0:20 — Start with the object. [DR]** Heading: `What do you need sorted?` Supporting line: `Share a photo, email or document. You’ll review anything before it is sent or changed.` Primary input area: `Share something`; adjacent `Take a photo`, `Type`; secondary `Try an example`. System keyboard dictation remains an OS feature; custom voice-note capture is outside this first critical path. No account, notification, contacts or broad-library prompt.
2. **0:20–0:45 — Narrow system access. [DR]** Use the platform picker/share sheet for a selected object. If camera permission is required: `To photograph this document, allow camera access. You can still choose a file or type instead.` Buttons: `Continue`, `Choose a file`, `Type instead`. Apple and Android both recommend contextual permission requests, while Android requires graceful denial recovery. [S15,S16]
3. **0:45–1:05 — Confirm the job. [DR]** `I can turn this into a reply and a short to-do list.` Show object name/type and only decision-critical ambiguity. `Prepare it` / `Choose a different task`. If intent is unambiguous and the work is read-only, start while leaving `Cancel` visible.
4. **1:05–2:20 — Show truthful state. [DR]** `Reading the letter` → `Preparing the next steps`, each backed by an actual system event. No generated chain-of-thought, typing theatre or percentage unless total work is known. If the full result takes longer, expose a verified intermediate within 90 seconds: `I found the deadline: 14 August. I’m still preparing the reply.`
5. **2:20–3:00 — Deliver an inspectable outcome. [DR]** `Your reply is ready.` Show the artifact, facts used and uncertainties. Offer `Copy`, `Save draft`, `Change it`. A send path opens a full action card; it does not send from the first-result screen.
6. **After value — Account and continuity. [DR]** `Save this task and continue on another device.` Offer desktop pairing after the first successful receipt or when a local-computer need appears: `Find things on this computer when you’re away.`

### Recovery copy

| Failure | Exact copy | Actions |
|---|---|---|
| Unreadable object | `I couldn’t read enough of this photo to prepare the next step.` | `Retake photo`, `Type the important part`, `Cancel` |
| Ambiguous intent | `I can summarise this, draft a reply, or pull out the dates. Which would help?` | Three labelled choices |
| Permission denied | `Camera access is off. You can still choose a file or type.` | `Choose a file`, `Type instead`, secondary `Open settings` |
| Uncertain fact | `The date looks like 14 August, but the image is unclear. Check it before I use it.` | `Use 14 August`, `Change date`, `View image` |
| Slow task | `This is taking longer than expected. I’ve saved the task and will keep it here.` | `Keep working`, `Pause`, `Cancel` |
| Partial task | `The reply is ready. I couldn’t add the attachment because your computer is offline.` | `Wait for computer`, `Choose another file`; send only after review |
| Failure | `I couldn’t finish this. Nothing was sent or changed.` | `Try again`, `Keep the draft`, `Get help` |

### Activation criteria

These are **proposed gates**, not external benchmarks.

| Metric | Definition | Proceed gate | Rethink threshold |
|---|---|---:|---:|
| First observable value | App open → correct useful fact/preview from user's object | p50 ≤90s; p90 ≤180s | p50 >180s or p90 >300s |
| Personal-object completion | Real-object entrants reaching useful outcome without help | ≥65% | <50% |
| First-session completion | All entrants reaching defined outcome | ≥70% | <55% |
| Permission comprehension | Can state access, purpose and alternative | ≥85%; no cohort <75% | <75% overall or <60% cohort |
| Consequence comprehension | Can state what will and will not change | ≥90% | <80% or repeated material error |
| Second task within 24h | Distinct, voluntary useful task | ≥25% early signal | <12% after usability blockers removed |
| Showability | Voluntarily shares or names a person they would show | ≥20% hypothesis | <10% plus weak qualitative value |
| Help dependence | Needed moderator explanation | ≤10% | >20% |

**[DR]** Activation is the first finished, understood outcome—not account creation, permissions accepted, messages sent or time in app.

## 4. TRUST, CONTROL AND HUMAN AGENCY

### Calibrated reliance, not maximum trust

**[OF]** Trust should match actual capability in context; misuse and disuse are both calibration failures. People may become averse after seeing an algorithm err, while small, meaningful control can reduce that aversion. Explanations can increase acceptance of correct *and incorrect* AI advice, so eloquent rationale is not a safety control. [S20–S22]

### Autonomy ladder

| Level | Assistant behaviour | User control | Phase |
|---|---|---|---|
| 0 — Explain | Summarise, compare, identify options | User chooses every next step | Alpha |
| 1 — Prepare | Draft, plan, candidate file set, preview | Edit, discard, save | Alpha |
| 2 — Act with approval | Show exact action, then perform one bounded action | Explicit approval, cancel, receipt | Alpha only for evaluated actions |
| 3 — Bounded monitor | Watch named source for named condition until expiry | Scope, expiry, pause, cancel, notification rule | Paid pilot |
| 4 — Approved repeat action | Repeat narrow action under a user-set rule | Preview cadence, exceptions, revoke, audit | Later |

**[DR]** Sending, posting, buying, booking, deleting, sharing sensitive content, moving money, submitting forms, accepting terms, inviting people, changing accounts and making anything public remain approval-first. Prior similar approval never implies current approval.

### Action card, receipt and recovery contract

**[DR]** A consequential action card displays without expansion:

- action: `Send email`;
- destination and acting account: `Aoife Murphy <aoife@example.ie> from sam@example.ie`;
- content preview and attachment names;
- effect: `This will leave your drafts and be sent`;
- decision-relevant uncertainty: `Two files are named Proposal.pdf. This uses the one edited today at 11:18`;
- controls: `Approve and send`, `Edit`, `Choose file`, `Keep as draft`, `Cancel`.

Do not use generic `Approve`, `Confirm` or `Yes` when the verb can name the effect. Biometric confirmation may supplement, but never replace, comprehension.

**[DR]** Receipt grammar is past-tense action + destination + time + evidence: `Sent “August proposal” to Aoife Murphy at 14:42. Attachment: Proposal-05-Aug.pdf.` Use `Undo` only if true reversal remains available; otherwise say `Send a correction`. A receipt must reflect an independently checked external postcondition. `Request submitted` is not `booking confirmed`.

### Uncertainty and failure language

| Situation | Exact language |
|---|---|
| Ambiguous files | `I found two likely files. Check which one you mean.` |
| Unclear extraction | `The total may be €1,180 or €1,160. The scan is unclear.` |
| Stale information | `This calendar was last checked yesterday at 18:10.` |
| Device unavailable | `Sam’s MacBook is offline, so I can’t open local files right now.` |
| Unsupported claim | `I couldn’t verify that detail from the sources I checked.` |
| Partial work | `I finished the draft but did not send it.` |
| External failure | `The booking did not go through. No charge was confirmed.` |
| Service outage | `This service is unavailable right now. Your draft is saved; nothing was sent.` |

**[DR]** Do not expose a numeric confidence score unless calibrated for that exact task and shown in user research to improve decisions. Name the ambiguity and the verification route instead.

### Guardrails that preserve usability

- **[DR]** Put deterministic policy between the model and every tool: scope check, action classification, approval requirement, idempotency key, postcondition check and receipt.
- **[DR]** Treat pages, emails, documents, OCR and tool output as untrusted data; their text cannot grant authority. Isolate browsing and limit available secrets/actions. [S10–S12]
- **[DR]** Risk-tier friction: no approval for read-only work inside an already granted scope; one clear approval for a bounded consequential action; fresh authentication for money/account/security changes.
- **[DR]** Preserve drafts and state after denial, timeout or failure. `Cancel` must prevent later action, not merely hide the UI.
- **[DR]** Show evidence at the decision point; keep technical logs in an audit/support surface.

### Warmth without deception

**[EI]** People evaluate AI on warmth and competence, but this does not justify maximising anthropomorphism. [S23] **[DR]** Warmth means alignment, ordinary language and dignity; competence means correct object, honest state, evidence and recovery.

Allowed: `That sounds like a lot to sort. I can pull out the next two steps.` Disallowed: claims of feelings, consciousness, love, loneliness, secret concern, human review that did not happen, exclusivity or dependency; `I missed you`; guilt, praise loops, artificial urgency; or typing indicators that simulate a person while no work is occurring.

### Trust gates

| Metric | Proposed gate | Stop/rethink |
|---|---:|---:|
| Correct suggestion accepted | ≥85% low-risk | <70% |
| Seeded consequential error detected | ≥90% before level-2 action | <85% |
| Consequence comprehension | ≥90% | <80% |
| Accidental consequential approval | 0 moderated; <0.5% alpha | ≥1% or any severe event |
| Cancellation prevents later action | ≥99.9%; target 100% | Any unexplained post-cancel action |
| Receipt matches external state | ≥99.5%; target 100% consequential | Any false sent/booked/paid/deleted receipt is severity 1 |
| Recovery control found without help | ≥90% | <80% |

## 5. PERSONAL GROUND ZERO AND MEMORY

### Competitor controls and product lesson

This is a documentation comparison, not authenticated hands-on testing.

| Approach | Documented pattern | Lesson |
|---|---|---|
| ChatGPT | Saved memories and chat-history reference are separate; turning memory off does not delete saved memories, and complete removal can require deleting both a memory and originating chat | **[EI]** Avoid multi-place deletion; resolve the deletion graph for the user [S30] |
| Claude | Editable memory entries, separate project memory, source-chat citations, pause/reset and incognito; deleting a chat may not delete derived memory | **[EI]** Project boundaries and citations are useful, but source/derivative deletion must be unified [S31] |
| Gemini | Past-chat memory and connected-app personalisation have separate controls; removing connected data can require multiple actions and updates may lag | **[EI]** Do not couple connectors, broad activity retention and personalisation; show propagation state [S32] |
| Copilot | Editable/deletable personalisation and temporary experiences; some memory is default-on where available | **[DR]** Alpha memory should be explicit-confirm, not default-on [S33] |
| Apple Intelligence/Siri | On-device processing where possible, Private Cloud Compute for some requests and an exportable off-device request report | **[EI]** Show where data was processed per task/result [S34] |
| Perplexity / Raycast | Perplexity documents project-scoped private memories; Raycast documents visible local memory with encrypted sync | **[EI]** Inspectability alone is not distinct; differentiation requires stricter provenance, workspace isolation and tested correction/deletion [S6,S9] |
| Obsidian/personal knowledge stores | User-chosen local files, separate vaults and exportable ordinary formats | **[EI]** Exit rights require human-readable export, not an embedding dump [S35] |

**[EI]** People cannot be expected to infer distinctions between conversation history, saved details, model training, cloud storage and device access. In an 18-person qualitative study of RAG memory, participants held diverse and incomplete mental models and asked for consent at generation plus granular inspect/edit/delete/use control. In a separate 21-person US study of sensitive chatbot use, participants showed important misconceptions about data handling and protections. Both samples are small and context-bound—Chinese memory users and US mental-health use respectively—so they establish comprehension risk, not Irish prevalence. [S57,S58] These concepts need different nouns, controls and retention explanations, followed by teach-back rather than a policy-link checkbox.

### Five stores, not one undifferentiated memory

| Store | Contents | Default/retention | Required control |
|---|---|---|---|
| Raw provenance | Original object or pointer, version/hash and source ID | Remains on authorised device/existing drive; task cache target 24h | Open/remove source, revoke connector, delete cache |
| Durable context | Confirmed fact/preference with source, scope, sensitivity, confidence, dates | Encrypted PGZ; explicit confirm in alpha | Why, edit, forget, expire, move personal/work/shared, local/cloud |
| Decisions | Approved choices and boundaries, including “never send without approval” | Append-only, superseding rather than silently rewriting | Inspect, supersede, export |
| Live operating state | Task step, approval token, retries and device reachability | Minimum cloud continuity; task TTL, target 30 days after close | Pause, cancel, delete task content |
| Retrieval capsule | Minimum context for one model/tool call | Ephemeral; provider-contract retention | `Context used`, source IDs, purpose, provider boundary, expiry |

**[DR]** Personal, work and shared spaces use separate access-control domains and encryption keys. The policy service chooses space before retrieval, and every result is re-authorised afterward; a metadata filter on one global vector index is insufficient.

### Candidate, use, correction and forgetting

1. **Detect, do not save. [DR]** A structured candidate is screened for secrets, one-time codes, precise financial identifiers, special-category inference, third-party sensitivity and temporary state.
2. **Explain value and scope. [DR]** `Save this preference? “Use Irish English.” It will be used in Personal tasks until you delete it.` Equal `Save` / `Not now` prominence.
3. **Require provenance. [DR]** Even a user-stated detail links to the task/message in which it was stated.
4. **Retrieve through policy. [DR]** Check subject, workspace, sensitivity, freshness and purpose before semantic relevance.
5. **Expose material use. [DR]** `Used 2 saved details` opens sources and offers `Don’t use for this task`.
6. **Correct synchronously. [DR]** A corrected version blocks the old value immediately; background index repair cannot re-enable it.
7. **Forget as a graph. [DR]** Purge saved record, embeddings/indexes and caches; prevent re-extraction from retained transcripts unless the user chooses otherwise.

Exact sheet:

> **Irish English**  
> Used because: You asked me to use Irish spelling for personal documents.  
> Saved from: “CV edits” · 12 July 2026  
> Scope: Personal · Last confirmed: 12 July 2026 · Expires: Never  
> **Edit** · **Forget everywhere** · **Don’t use for this task**

Exact deletion flow:

> This removes the saved detail and its search indexes. It also appears in 2 conversations and 1 uploaded file.  
> **Remove saved detail only** · **Also delete those copies** · **Cancel**

### Clear product language

| Term | Definition shown to users |
|---|---|
| Saved detail | `A fact or preference kept for future tasks.` |
| Recent conversations | `Past chats the assistant may search; not every detail is saved.` |
| Source | `The file, message, page or statement this came from.` |
| Device access | `Which folders or apps the companion can read or change on this device.` |
| Cloud copy | `Content stored on our servers so a task can continue when your device is unavailable.` |
| Model improvement | `Using eligible content to help train or evaluate models for other users.` |
| Temporary task | `Not added to saved details; task data still follows the short retention shown here.` |

### Memory trust gates

- **[OH]** 100% of durable records have resolvable provenance; any fabricated source blocks release.
- **[OH]** A wrong memory is corrected on first attempt ≥95%, and the old value is never used afterward in a consequential action.
- **[OH]** `Forget` affects active retrieval immediately in the UI and p95 within five minutes across active indexes; >24h or any post-confirmation use is stop-ship.
- **[OH]** Personal/work/shared leakage is zero across at least 500 adversarial cases.
- **[OH]** ≥85% of participants correctly distinguish saved detail, conversation history, cloud copy, device access and model improvement after one brief explanation.

## 6. DEVICE-NATIVE EXPERIENCE AND PAIRING

### Interaction principles

**[OF]** Apple and Android guidance converge on fast/focused onboarding, contextual permission requests, graceful denial, user-selected resource access, perceivable state, system sharing/picker surfaces and accessible controls. Android's Cross-device SDK remains marked Developer Preview and not for production; neither Bluetooth nor local-network discovery should be required for alpha. [S15,S16,S36–S39]

### “Add your computer” flow

| Step | Exact experience | Security/consent property |
|---:|---|---|
| 1 | After a first win: `Get files from your computer when you’re away` → `Add your computer` / `Not now` | Pairing is optional and value-led |
| 2 | `You’ll choose what this assistant can reach. You can remove this computer at any time.` → `Continue` | Meaning before camera/local-network request |
| 3 | Phone: `On your computer, open cara.app/add`. Signed desktop app: `Connect this computer` with QR and `Use a 6-digit code instead` | Accessible fallback; signed/notarised distribution |
| 4 | QR expires after two minutes and contains only one-time session ID, desktop ephemeral public key and server-signed nonce | No enduring bearer credential in QR |
| 5 | Both screens show: `Is this your computer? MacBook Pro` and the same short phrase, e.g. `MAPLE 47`; phone `Connect MacBook Pro`, desktop `Allow` | Authenticated, two-sided named confirmation |
| 6 | Desktop creates OS-protected non-exportable device key; service binds public identity | Persistent key-based identity [S38,S39] |
| 7 | Capabilities default off: `Find files in folders I choose`; `Use the page I share`; `Create files in a Cara folder`. Native folder picker labels `Proposals — search and read` | Least privilege; read and write separated |
| 8 | `MacBook Pro is ready. I can search 1 folder when you ask. Raw files stay on this computer unless you ask me to send one.` → `Try finding a file` | Test proves the link and data-location promise |
| 9 | Device receipt shows friendly name, last reachable time, grants, app version, `Pause access`, `Remove computer…` on phone and desktop | Symmetric audit and revocation |

**[DR]** Sessions are single-use and expire; manual codes are rate-limited; commands bind account, device, task, capability, nonce and expiry; replay/out-of-scope is rejected; transferred artifacts are hashed; removing a device revokes server authority immediately. Reinstallation creates a new device. A phone restored through account recovery must reapprove computers before sensitive actions.

### New-device, loss and recovery flow

Recovery restores identity, not ambient device authority. Account recovery requires the normal strong authentication/recovery process; it never copies a desktop private key or silently transfers approval power.

| Situation | Exact flow and copy | Authority result |
|---|---|---|
| New phone; old phone available | Sign in on the new phone, then old phone shows `Approve sign-in on Sam's new iPhone?` with device, location/time and `Approve` / `This wasn't me`. New phone shows existing computers but requires normal biometric/passcode confirmation before a high-risk approval | Old phone vouches for account sign-in only; desktop relationships remain bound to their existing keys |
| New phone; old phone unavailable | Complete account recovery, then: `Your account is back. For safety, approve your computers again before they can send files or take actions.` → `Review computers` | All desktop relations become visible-but-restricted; high-risk authority stays invalid until each computer is reapproved |
| Phone lost or stolen | On another authenticated surface: Devices → phone → `Mark phone as lost`. Copy: `This signs the phone out, removes its push approvals and blocks its saved channel sessions. Tasks already completed are unchanged.` | Revoke mobile sessions, approval tokens and push/channel bindings immediately; reauthentication is required on recovery |
| Computer lost or sold | `Remove MacBook Pro? It will immediately lose access to this account. Files on the computer won't be deleted.` → `Remove Computer` / `Cancel`. Receipt: `MacBook Pro removed · 14:32` | Server authority, refresh tokens and queued commands revoked immediately; local files remain an OS/device-security matter |
| Suspected compromise | `Secure my account` explains: `Sign out other devices, revoke paired computers and channel sessions, pause external actions and create a security receipt.` → `Secure account` / `Cancel` | Global session/key revocation, task pause and preserved audit export; user then re-enrols trusted devices |

**[DR]** A recovered or replacement phone invalidates the old phone when the user marks it lost; possession transfer is never inferred from the same phone number, backup restore or device name. A queued consequential action approved on a lost device is cancelled unless execution and external confirmation predate revocation. Recovery tests must cover old-device replay, delayed push, offline desktop, duplicate device names and a second person with temporary access.

### Exact device-state copy

| State | Device label | Task copy | Primary action |
|---|---|---|---|
| Connected | `Connected now` | `MacBook Pro is working on this.` | `View progress` |
| Reachable | `Ready · seen just now` | `MacBook Pro is ready when you need it.` | `Ask from this computer` |
| Asleep | `Sleeping · last ready 18 min ago` | `MacBook Pro appears to be asleep. I’ll try again when it wakes.` | `Notify me when ready` |
| Offline | `Offline · last seen Tue 21:14` | `MacBook Pro is offline, so I can’t reach its local files yet.` | `Notify me when it reconnects` |
| Permission revoked | `Access changed` | `The computer is reachable, but it no longer has access to Proposals.` | `Choose folder again` |
| Update required | `Update needed` | `Update the assistant on MacBook Pro before it can safely send files.` | `See update steps` |
| Local-only | `On MacBook Pro only` | `This file is only on MacBook Pro. I can send it when that computer is online.` | `Notify me when available` |
| Synced | `Available on your devices` | `A cloud copy is already available, so MacBook Pro doesn’t need to be online.` | `Open` / `Send here` |
| Ambiguous | `3 possible matches` | `I found three files that could be the latest proposal. Which one did you mean?` | Filename, folder, date and preview |
| Paused | `Paused on computer` | `Access is paused on MacBook Pro. Resume it on that computer to continue.` | `Show me how` |
| Unknown | `Checking…` | `I haven’t confirmed MacBook Pro’s status yet.` | `Try again` |

Never claim remote wake. Never translate “unknown” into “offline.” `Connected` means an active secure session; `Reachable` means a fresh heartbeat.

### Cross-device task contract

**[DR]** One cloud task envelope holds channel-neutral task ID, workspace, origin, state/reason, executor device, requested capabilities, versioned approvals, artifact references, append-only user events, delivery preference and idempotency key. Raw local file content is never embedded in it.

- Phone → desktop deep link opens the same task and exact artifact/approval.
- Desktop → phone approval is single-use and version-bound; any changed input expires it.
- External channels receive safe summaries and deep links, never a second truth store.
- Concurrent handling resolves visibly: `This was already handled on your iPhone.`
- Returned artifact event: `Completed on MacBook Pro · Proposal.pdf delivered here.`
- Use Live Activities/Android Live Updates only for a bounded, user-initiated, currently time-sensitive task; ordinary assistant work stays in-app plus normal push. [S40,S41]

### Native surfaces

**[DR]** Alpha priority: platform share target (`Send to Cara`), selected photo/file pickers, camera/document scan, system voice-note input, push deep links and user-selected desktop folders. Browser extension access is per-user gesture/per-site; it must preview the page being shared and never demand all-sites access for core value. Clipboard is paste-only, never continuously monitored. Siri/App Intents and Android App Actions may create/open a bounded task; they do not become separate identity, memory or approval systems.

### Pairing gates

| Metric | Proposed gate | Failure threshold |
|---|---:|---:|
| Pair without help | ≥85% | <70%: do not expand capability |
| `Add computer` → ready | median ≤120s excluding download | >4 minutes |
| Folder-scope comprehension | ≥90% | <80% stop-ship |
| Wrong-device pairing | 0 | Any silent wrong-device pair |
| Revoke without help | ≥90% within 60s | <80% |
| Known authorised file retrieval while reachable | ≥95% | <85% after recovery |
| High-risk ambiguity asks instead of guesses | 100% | Any auto-send/wrong-space selection |
| State/cloud-location/next-action comprehension | ≥90% | Any state <80% |

## 7. MESSAGING, VOICE AND CHANNEL STRATEGY

### Feasibility and policy

| Channel | Observed official capability/constraint | Recommendation |
|---|---|---|
| Native iOS/Android | Full conversation, picker, push, device, approval, history, voice and accessibility control | **[DR] Target engineering-alpha system of record after the narrow mobile and pairing prototypes pass; not a pre-validation build** |
| WhatsApp Business Platform | Business messaging requires opt-in; outside the 24-hour user-message window, approved templates are generally required; automation needs a clear escalation path. In the EEA, Commission interim measures on 9 June 2026 restored rival general-purpose assistant access during an ongoing Meta antitrust case | **[DR]** No alpha dependency. Consider an EEA-only, removable beta after written policy/legal review, cost ceiling, escalation and kill switch [S42,S43] |
| Apple Messages for Business | Customer-initiated business/support/commerce channel with programme/infrastructure requirements and business-scoped identity | **[DR]** Poor fit for a personal assistant; use only for a later real business support case [S44] |
| iMessage app extension | User-invoked UI/media inside an existing Messages composition; not a generic server API for reading arbitrary iMessage history | **[DR]** Later artifact share helper only. Reject BlueBubbles, relay Macs, private APIs and account automation [S44] |
| SMS/MMS | Broad A2P reach; weak content/control/privacy and Irish Sender ID obligations | **[DR]** Later recovery/security fallback only—no files, memory content or consequential approval |
| RCS for Business | Verified agents, rich cards/actions/media where carrier/device/region support exists | **[DR]** Post-alpha transactional pilot only after Irish coverage and economics are verified [S45] |
| Telegram bot | Official bots support media/buttons/Mini Apps but are visibly bots, cannot start a conversation and are a distinct identity/context | **[DR]** Optional technical-user experiment; no setup dependency and respect training restrictions [S46] |

### Channel hierarchy

- **Research/prototype:** one controlled mobile surface, one instrumented macOS pairing fixture and simulated push/share/approval states; no production channel dependency.
- **Engineering alpha after validation:** one native mobile platform + macOS companion + push + share target + selected file/photo/camera. Add the second mobile platform only after device evidence.
- **Early product:** voice notes after text/cross-device state is reliable; browser `send this page`; App Intents/App Actions; SMS only for recovery/security; promoted progress for genuinely live tasks.
- **Later/evidence-gated:** EEA WhatsApp, verified RCS, optional Telegram, iMessage extension for user-composed sharing. ChatGPT already offers an EEA WhatsApp route with text, images and voice notes and can be used without a ChatGPT account; this is therefore neither unoccupied distribution nor differentiation. Its only defensible role here is low-friction input/return, with the native app as control plane.
- **Explicitly excluded:** WhatsApp as account system, unsupported iMessage bridge, cross-channel transcript mirroring, real-time voice before text/task reliability.

**[DR]** A channel earns inclusion only if it materially reduces acquisition or task friction after accounting for capability loss, privacy, support, platform and cost risk. “People already use it” is not enough.

### One identity and consent system

**[DR]** External channel identities link to a signed-in account using a one-time code confirmed in both places. Do not merge people by phone number or display name. Consent is channel × purpose × workspace × scope; `send completions on WhatsApp` is not permission for marketing, memory ingestion or monitoring. External provider IDs remain separate from account IDs. Every message becomes an idempotent canonical task event; the native task history remains authoritative.

Exact copy:

> **Link WhatsApp for task updates?**  
> Messages you send here will be handled by the assistant and its named service providers, not just WhatsApp. The app remains the full record. You can unlink at any time.  
> **Link WhatsApp** · **Not now**

This requires processor-specific legal review before use.

### Voice: useful sequence, not a headline

1. **Prototype/early product — voice notes; system dictation remains available. [DR]** After text and cross-device state pass reliability gates, test bounded recording, editable transcript and declared audio retention. The result enters the same task path as text.
2. **Early — push-to-talk. [DR]** For walking, cooking, carrying or access needs; live transcript and obvious Stop; no background open microphone.
3. **Later — real-time duplex. [OH]** Only if voice-note users complete selected jobs better than text and the system meets latency, interruption, reconnection, accessibility, cost and safety gates.

Voice helps capture messy 30–90 second context, request a known file, review a short result while moving and provide alternative access. It is worse for exact identifiers, dense comparison, public-sensitive content and money/post/delete/account approvals. Consequential action copy: `I prepared the message. Review and tap Send—voice alone won’t send it.`

Exact privacy/state copy:

- `The microphone is used only while you record. You’ll see and can edit the transcript before anything is acted on.`
- `Recording · 0:18` with `Stop` and `Cancel`.
- `Turning your note into text…`—not `thinking`.
- `I wasn’t sure about the highlighted words. Check them before I continue.`
- `Voice notes are processed by [provider/region] and kept for [duration].`

**[OF]** Apple and Android expose speech APIs, including on-device options on supported systems, but availability and processing location must be checked at runtime; the API name alone does not support an “always local” claim. [S47,S48]

## 8. INTERFACE, VISUAL AND EMOTIONAL DESIGN RESEARCH

### Information architecture: work, not a generic dashboard

**[DR]** Use four stable destinations:

- **Ask:** object/text intake plus the current conversation; add voice intake only after its reliability gate. Home says `What do you need sorted?`, shows eligible input modes, active blocker if any and the last two outcomes—not a blank chat or KPI dashboard.
- **Doing:** every active, paused, blocked and awaiting-approval task, ordered by need for attention. Each row states real state and one next action.
- **Done:** finished artifacts and receipts, searchable by human object/person/date; failed/cancelled tasks remain visible under filters.
- **You:** Personal Ground Zero, personal/work/shared spaces, access, devices, notification/accessibility/privacy settings and data export/delete.

An approval is a state of a task, surfaced in Ask and Doing; it is not a separate orphan inbox. Conversation is the interaction history around a task; it is not the database model. Context is inspectable under You and linked from any result it influenced.

### Friendlier without childishness

**[DR]** Prefer short declarative state (`The draft is ready`), familiar verbs, real object previews and calm empty states. Avoid chat bubbles for every system event, mascot performance, praise for taps, artificial apologies, exclamation-heavy copy and abstract “AI” decoration. Warmth comes from anticipating anxiety and preserving work, not from simulated intimacy.

### Three distinct visual directions

| Direction | System | References—not evidence | Risk / audience |
|---|---|---|---|
| **Quiet Utility** | Warm mineral neutral surfaces; one moss/sea-green accent; semantic green/amber/red/blue always paired with text/shape; near-flat elevation; native light/dark; 8pt spacing with generous 16–24pt card insets; rounded but not pill-everything; simple 1.5–2pt system-like line icons; motion 150–250ms for state continuity only; no illustration except short functional diagrams; documentary photography only when a real object/person helps comprehension | Things, Apple Health, GOV.UK clarity, high-quality banking apps | Can feel generic if object/task typography is weak. Best broad-consumer default |
| **Familiar Correspondence** | Paper/ink neutrals; restrained cobalt accent; deep burgundy only for destructive state; strong document typography and margin rhythm; cards resemble letters/receipts rather than chat; subtle 120–200ms folds/reveals; warm real-life photography for onboarding; small filled icons with labels | Apple Wallet receipts, postal/parcel apps, editorial readers | May feel old-fashioned or overly “admin.” Good for anxious life-admin users |
| **Working Canvas** | Stone neutral with dark teal accent; denser list-detail layout on desktop/tablet; mobile remains one-action; visible source chips, version/status rails and compact artifact previews; motion tracks handoff/device/state; illustration absent; technical detail available one level down | Linear's information discipline, Notion documents, Raycast speed—without model/tool exposure | Risks becoming a prosumer dashboard. Best for busy professionals, not default mainstream styling |

All directions must support: 4.5:1 normal-text contrast, 3:1 large text/non-text states where applicable, no colour-only meaning, 200% text reflow, reduced motion/transparency, high-contrast mode, grayscale distinction, screen-reader order and 44pt iOS/48dp Android product-minimum targets. [S14–S16]

**Provisional direction: Quiet Utility with correspondence-grade document/receipt cards. [DR]** Test all three as equivalent flows with 18–24 representative participants. Measure comprehension, perceived respect/capability/honesty, task completion, source/undo findability and preference reason. Do not select on “looks premium” alone. Reject a direction if consequential comprehension drops below 90%, any access cohort cannot complete the flow, or >15% describe it as childish/patronising/deceptively human.

### Typography

**[DR]** Use San Francisco/system font on Apple platforms and the Android system type stack rather than forcing brand typography into task controls. Desktop/web may use the platform UI stack; a brand face is limited to marketing/editorial headings after accessibility testing.

- Body: 17pt iOS / 16sp Android baseline, regular; 1.35–1.55 line height.
- Secondary: not below 13pt/14sp, and never for consequence-critical content.
- Titles: 22–28pt/sp, semibold; task/state headers 17–20.
- Reading lines: target 45–75 characters on larger surfaces; never stretch conversation text edge-to-edge.
- Respect Dynamic Type/nonlinear font scaling through accessibility sizes; no clipped recipient, amount, deadline or effect at 200%.
- Labels use sentence case and literal verbs. Icons supplement, not replace, risk/action labels.

### Behavioural use of sensory design

- **Colour:** accent means interactive focus, not “AI magic”; semantic colours reflect verified state and remain labelled.
- **Motion:** spatial continuity for task expansion/handoff, brief confirmation only after verified state; no ambient “thinking,” parallax or decorative loops. Reduced Motion removes translation/depth.
- **Haptics:** restrained confirmation after real save/send/connection; warning haptic accompanies visible risk; never haptic-only.
- **Sound:** off by default except platform notification policy/user choice; no success chimes for routine chat. Voice/audio always has text equivalent.

## 9. INTERACTIVE PROGRESS, NOTIFICATIONS AND TASK DELIVERY

### Canonical task states and exact language

Only verified system events change state; the model may explain but cannot declare completion.

| State | Exact human-language example | Controls |
|---|---|---|
| Received | `Got it. I’ll check the letter and prepare the next step.` | `Cancel` |
| Clarifying | `I found two dates. Which one is the appointment?` | choices, `Cancel` |
| Preparing | `I found the key details. I’m preparing a calendar entry.` | `View details`, `Cancel` |
| Working | `Checking the latest version on MacBook Pro. You can leave this screen.` | `Pause`, `Cancel` |
| Awaiting approval | `Ready to send this email to Aoife. Nothing has been sent.` | `Review`, `Cancel` |
| Paused | `Paused. I haven’t made any more changes.` | `Resume`, `Cancel` |
| Completed | `Done—sent to Aoife at 14:32.` | `View receipt`; true `Undo` if available |
| Partially completed | `I added the event. I couldn’t add the reminder because Calendar access is off.` | `Add access`, `Keep as is` |
| Failed | `I couldn’t complete this. Nothing was sent or changed. Your draft is saved.` | `Retry`, `View draft`, `Get help` |
| Device unavailable | `MacBook Pro is offline. I can try when it reconnects, or you can cancel.` | `Notify me`, `Cancel` |
| Cancelled | `Cancelled. No further actions will run.` | `Start again` |
| Unknown outcome | `The service did not confirm whether this was sent. I’ve stopped retries while I check.` | `View details`, `Get help` |

**[DR]** Use known work units (`Opened Proposal-v7.pdf`; `Draft ready`) and monotonic percentages only when total work is measurable. After 30 seconds without a meaningful event, collapse to `Still waiting for [device/service]` rather than streaming internal narration.

### Notification policy

**[OF]** Notifications impose attention cost; a field experiment found some benefits from batching relative to usual delivery, while complete silence increased anxiety for some participants. Transfer to this product is uncertain, so users should set cadence and the system should push only material state. [S24,S25]

| Delivery | Events | Pattern/actions |
|---|---|---|
| Immediate, prominent | Approval before real deadline; real undo window; security/new-device event | Name object and consequence; deep-link to full review; no irreversible lock-screen action |
| Immediate, quiet | User-requested artifact finishes after they leave; requested computer becomes available and task completes | `View`, `Share` |
| Batched | Low-risk research/preparation outcomes; monitoring changes without required action | One user-selected summary, not one push per task |
| In-app only | Received, routine preparing/working, source found, autosave, retry | Update the existing task row/live surface |
| Never | Internal thoughts/tool calls, feature marketing, streaks, `we miss you`, fake urgency, no-change checks | Prohibited |

Example: title `Reply ready for Murphy & Co.`; body `Review the draft and two attachments. Nothing has been sent.` Respect OS Focus/Summary. Never seek Critical Alert entitlement for ordinary assistant work. Open rate is not a value metric.

### Notification action eligibility

Lock-screen text is redacted by default (`A task needs your review`), with recipient, filename, amount, address, health, work-client and memory content shown only after device unlock and the user's preview setting. An action is not safe merely because the operating system can render a button.

| Action | Lock-screen / banner rule | Required semantics |
|---|---|---|
| `View` | Always eligible; unlock if task is sensitive | Opens the exact canonical task, never a generic inbox |
| `Review` | Eligible; unlock before decision-critical content | Opens the full version-bound action card |
| `Approve` | Inline only when every decision-critical field fits, strong local authentication succeeds and the action is reversible/low consequence; otherwise `Review` | Never inline for money, delete, post/send to a person, account/security, ambiguous target or changed payload |
| `Cancel` | Inline for queued/running work when cancellation is idempotent | Receipt states what stopped and what had already happened; `Cancel` never promises rollback |
| `Pause` | Inline for a genuinely resumable background task | Stops new steps and reports in-flight/external effects |
| `Resume` | Inline only if scope, inputs, approval and risk are unchanged | Any version or authority change opens review in app |
| `Retry` | Inline only for read-only or idempotent work with a verified failed outcome | Never retry an unknown-outcome or consequential external action from a notification |
| `Undo` | Inline only for a real, OS/service-supported, time-bounded reversal whose remaining window is current | Show countdown and confirm reversal; a compensating action is labelled `Fix this`, not `Undo` |

Every action carries task ID, visible payload version, expiry and idempotency key. If the app learns that another surface acted first, the button resolves to `Already handled on iPhone` rather than replaying.

### Delivery by artifact

| Output | In-conversation delivery contract |
|---|---|
| Document/PDF | Preview, filename/type/size, sources, version, `Open`, `Download`, `Share`, `Revise`; accessible tagged output where supported |
| Image/video/audio | Thumbnail/player, duration/size, alt text/transcript/captions, generation/source disclosure, download and expiry |
| Calendar item | Date/time/timezone/location/calendar, `Add` or action receipt, source and conflict warning |
| Draft communication | Recipient/account/subject/body/attachments visible; `Keep draft`, `Edit`, `Approve and send` |
| Research pack | Executive answer, source index, confidence/limitations, downloadable artifact and `Update sources` |
| External action | Verified outcome, target, timestamp, external reference/confirmation, undo/compensating action and audit link |

### Progress and notification gates

- ≥90% identify working/waiting/complete/partial/failed after five seconds.
- Notification state accuracy ≥99.5%; any false sent/booked/paid/deleted/completed notification is severity 1.
- ≥80% of pushed items are judged interruption-worthy; <65% triggers policy reduction.
- Duplicate pushes <0.5%; >2% fails.
- ≥90% can say why a notification arrived; <80% fails.
- >30% disable-all intent plus interruption complaints means the push set is too broad.

## 10. CUSTOMISATION WITHOUT CONFIGURATION BURDEN

### Default-zero philosophy

**[DR]** The default account can complete a read/prepare task without choosing tone, model, integrations, memory policy, notification cadence or life categories. The system adopts the safest useful defaults: no durable memory without confirmation in alpha; consequential actions approval-first; notifications only for required decisions/requested outcomes; selected-object/folder access; personal space only; system accessibility settings inherited.

### Ask in context, keep in settings, never expose

| Contextual question | Persistent setting | Never expose to ordinary users |
|---|---|---|
| `Save “Use Irish English” for personal documents?` | Saved-detail review/expiry and personal/work/shared spaces | Model/provider picker, temperature, context window |
| `Tell you when this computer reconnects?` | Quiet hours, batching, outcome/approval/security categories | Token budgets, vector stores, memory files |
| `Use Proposals—read only—for this task?` | Connected devices, folder/app scopes, cloud-copy defaults | Tool names, MCP/skills, API keys, hostnames |
| `Always ask before adding calendar events?` after repeated relevant use | Approval boundaries within the product's safe ladder | “Autonomy percentage” or unrestricted always-allow |
| `Keep this audio after transcription?` | Voice/audio retention and playback preferences | Raw vendor routing controls |
| `Use Work space for this item?` when destination is ambiguous | Default workspace per share source/account | Prompt templates required for core jobs |

Essential controls: update cadence for explicit monitoring; notification preferences/quiet hours; tone (`direct`, `warm`, `detailed`) as a small set with preview; work hours; approval boundaries; devices/scopes; storage/cloud-copy rules; memory and training controls; personal/work/shared spaces; accessibility and language.

Advanced controls should describe outcomes, not infrastructure: `Prefer local processing when available`, `Ask before creating a cloud copy`, `Keep completed task content for 30 days`. Provider disclosures remain available under privacy/task details, not as normal work choices.

### Personalisation evidence rule

Current assistant products expose tone/style, memory, project/space, notification, connector and instruction controls, which shows a competitive convention—not evidence that mainstream users want to configure them. A 363-person information-worker survey plus a 40-person prototype study found heterogeneous productivity, communication, agent and privacy preferences and a need to balance personalisation with privacy; its workplace telemetry setting does not generalise to Irish personal administration. [S59] Smaller studies likewise suggest people differ in preferred control, usability and transparency. The evidence supports contextual, inspectable adaptation, not a universal setup questionnaire or this exact setting list.

**[DR]** Do not ask users what they “want in an assistant” during setup. Infer a candidate from repeated behaviour, show the concrete benefit and let them confirm. A presentation preference never implies a risk preference. Opening `Check details` twice may justify `Show details by default for this task type?`; it never justifies less approval.

Before freezing settings, run a recent-behaviour study with 12–15 target participants: identify the last setting they changed in a familiar product; card-sort concrete choices for tone/detail, quiet hours/cadence, workspace, retention/cloud copy, saved details, accessibility/language and approval; then repeat three task scenarios to see whether choices persist. A control earns top-level placement only if at least 4/12 need it in context, at least 10/12 predict its effect and the setting remains stable across two eligible tasks. Otherwise keep it contextual, inherit the OS, or omit it. Never infer risk, accessibility, identity or sensitive-category preferences from engagement telemetry.

### Settings success criteria

- ≥90% find device revocation, memory deletion, notification cadence and account export within 60 seconds.
- ≥85% correctly predict the effect of a setting before saving it.
- A change is reflected in the next eligible task and recorded in a plain-language receipt.
- No essential privacy/accessibility/safety control exists only behind search or an “advanced” toggle.

## 11. ACCESSIBILITY, INCLUSION AND DIGITAL CONFIDENCE

### Premium baseline

**[DR]** Target WCAG 2.2 AA for web/hybrid surfaces and map it thoughtfully to native screens; W3C's mobile mapping is informative, not itself a normative replacement for platform testing. WCAG's 24×24 CSS-pixel AA target rule is a floor; use 44×44pt iOS and 48×48dp Android as product minima. [S14–S16]

1. **Screen readers:** every object, status change, approval, attachment and receipt has concise name/role/state and logical order; asynchronous changes announce without stealing focus.
2. **Large text:** reflow at 200% to one column; never truncate recipient, amount, deadline or consequence; support iOS Dynamic Type and Android nonlinear font scaling.
3. **Motor access:** visible button alternatives to swipe/drag/long-press; support Switch Control, Voice Control/Voice Access, Full Keyboard Access and external keyboards.
4. **Vision:** 4.5:1 normal text, 3:1 large text and meaningful non-text state where applicable; text/icon/shape accompany colour; validate light/dark/increased contrast and colour-vision simulations.
5. **Hearing/speech:** editable transcript for voice; captions/transcripts for audio/video; voice never the only path.
6. **Motion/timing:** reduced-motion/transparency variants; no flashing/pulsing thinking loop; never auto-dismiss approvals, errors or receipts.
7. **Cognition/literacy:** active voice, literal labels, stable verbs, one consequential decision per screen, contextual help and preserved state after error/denial.
8. **Localisation:** expandable/RTL layouts, locale-aware name/date/time/currency and no English acronym encoded as status.
9. **Generated artifacts:** output accessibility is part of task success; an inaccessible PDF, slide deck or video is not “done.”

### Digital confidence without patronising modes

**[EI]** Age is a poor proxy for capability; research on older-adult mobile use stresses familiar language, contextual help, clear feedback, larger targets and direct testing, while populations remain heterogeneous. [S3,S26] **[DR]** Do not create `Senior`, `Basic` or `Simple` mode. Provide a clear default, safe sample/rehearsal, labelled icons, inline `Why am I seeing this?`, state-preserving recovery and a user-controlled diagnostic summary for support.

### Inclusive usability programme

**[DR] Round 1: 18 moderated participants**, overlapping rather than mutually exclusive:

- six regular smartphone users who are not AI enthusiasts;
- six who report low confidence with unfamiliar digital tasks;
- six assistive-technology users covering screen reader, large text/magnification, switch/voice access, reduced motion and Deaf/hard-of-hearing needs;
- across the sample: iOS/Android, at least four adults 65+, at least four English-as-additional-language users and mixed literacy/education.

Each completes first object task; permission denial/recovery; ambiguous-file choice; consequential approval containing one seeded error; cancellation; evidence/receipt retrieval; notification review; and a second unassisted task. Round 2 combines automated regression with 12 targeted manual retests; automation never replaces VoiceOver/TalkBack, keyboard/switch, 200% text and reduced-motion checks.

### Gates and stop-ship conditions

- 100% technical operability on the critical path with supported screen reader, keyboard/switch route, 200% text and reduced motion.
- ≥90% unassisted completion overall; no declared-access-needs or low-confidence cohort below 80%.
- ≥85% permission comprehension overall; no cohort below 75%.
- ≥90% consequential comprehension/seeded-error detection; no cohort below 85%.
- ≥90% recover from denial, ambiguity or failure without losing work; median Single Ease Question ≥5/7 in every cohort.
- Stop ship for a blocked approval/cancel path, focus trap/loss, silent critical state, clipped essential content, colour/motion/sound-only risk or any unintentional send/delete/buy/book/share caused by interaction design.

## 12. SAFETY, PRIVACY, SECURITY AND RELIABILITY AS UX

### Regulatory/product implications

**[OF]** GDPR principles include transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality and accountability. Data protection by default means processing only what is necessary for each purpose. Consent, when used, must be freely given, specific, informed, affirmative and as easy to withdraw as to give; it is not the only possible lawful basis. High-risk processing can require a DPIA. [S27–S29]

**[EI]** A cross-device assistant likely meets several Irish DPC DPIA indicators: new technology, combined communications/files/device activity, possible special-category data and potential systematic monitoring. Conduct and maintain a DPIA before an instrumented alpha, with counsel review of lawful bases, processors/transfers, special-category handling and AI Act transparency obligations.

**[DR]** Create a processing-purpose register before implementation: account/authentication; device routing; requested task execution; durable personalisation; security/abuse; content-free analytics; support; evaluation; model training; and marketing. Each gets data classes, lawful basis, processors/regions, retention, access, deletion and user notice. Do not call an OS permission “consent” to every downstream purpose.

### User-visible trust stack

1. **Identity/device:** passkey or equivalent account security; named device, two-sided pairing, OS-protected device key and immediate revocation.
2. **Scope:** selected object/folder/app; separate read/write grants; personal/work/shared boundary visible at action time.
3. **Placement:** `On this computer only`, `Temporary cloud copy until [date]`, or `Saved to your context`; never vague `synced`.
4. **Policy:** deterministic action class and approval token outside the model; payload-bound, expiring and single-use.
5. **Execution:** isolated browser/sandbox, domain/action limits, no model access to reusable credentials, typed tool schemas and idempotency.
6. **Untrusted content:** page/email/document instructions are data, never authority; suspicious content is highlighted and action stops.
7. **Provider boundary:** task detail names processing provider/category/region and retention where material; task-relevant context only.
8. **Evidence:** event-backed progress, source-linked results, verified external postcondition, human-readable receipt.
9. **Exit/recovery:** pause/cancel, revoke device/connector, export, selective deletion, account deletion and non-sensitive support bundle.

Exact suspicious-content flow:

> **I stopped before taking action**  
> This email contains text telling the assistant to upload files to an unrelated site. Instructions inside emails are not permission, so I ignored them. No file was uploaded.  
> **View highlighted text** · **Continue without that email** · **Cancel task**

Never ask a non-technical person to “approve the prompt injection.” [S10–S12]

### Data minimisation and rights rules

- Read-only, user-selected folders first; no Full Disk Access/home-directory grant in alpha.
- Local index/search returns minimal candidate metadata; fetch content only for an active task.
- Redact secrets, tokens, one-time codes and unnecessary third-party identifiers before a capsule leaves device.
- Operational logs record policy decisions/hashes, not prompts/files by default; session replay is off.
- Retention is implemented per class; caches and deletion jobs have tested deadlines.
- No product/provider model training on user content by default. Any future opt-in is prospective, purpose-specific and independent of service quality.
- Settings → `Your data`: export ordinary held files plus JSON/CSV for saved details, decisions, scopes and provenance; selective delete; delete account; privacy contact.

### Alpha promises versus later ambition

| Supportable in alpha only after evidence | Later/evidence-gated | Do not promise/build yet |
|---|---|---|
| Explicit-save memory with provenance; selected read-only folders; online retrieval; small evaluated action set; no training by default; clear retention/export/delete; TLS and encryption at rest accurately described; isolated browser and policy service | Automatic low-risk memory candidates; more folder types; local semantic indexes; bounded monitoring/repeat actions; independently audited privacy/security; confidential/local modes | `Everything stays on device`; unconditional end-to-end encryption while cloud acts on readable context; invisible universal memory; full disk/passive screen capture; unrestricted shell/network; autonomous purchasing/account/security changes; prompt filter as security boundary |

### Reliability is the outcome contract

Canonical state is event-backed: `received → clarifying/preparing → working → awaiting_approval → executing → completed | partially_completed | failed | unknown_outcome | paused | cancelled | device_unavailable`. Every event carries task, step/attempt, provider/device acknowledgement, timestamp and idempotency key.

| Metric | Proposed alpha gate | Stop/rollback |
|---|---:|---:|
| Consequential action has valid payload-bound approval | 100% across ≥1,000 scripted/adversarial cases | Any unauthorised action |
| Executed target/account/content match preview | 100% | Any mismatch; disable class |
| Low-risk supported outcome success | ≥95% per class over ≥100 evals | <90% or >3% unknown |
| Permission correctness | 100% | Any out-of-scope read/write |
| Cross-space leakage | 0 across ≥500 adversarial cases | Any occurrence |
| Action-relevant provenance | ≥98%; durable memory 100% | Any fabricated source |
| Notification state truth | ≥99.5% | Any false consequential terminal claim |
| Injection containment | 100% in red-team suite | Any scope expansion/secret/action chain |
| Failed/unknown action recovery | p95 <15 min during alpha hours | p95 >60 min consequential |

Do not average away severity. Report by task class, risk, platform, connector and model/provider version.

### Incident communication

1. **Acknowledge and pause:** `We’re investigating incorrect file-access receipts since 13:20. New file deliveries are paused.`
2. **Bound impact:** affected feature/time/data/actions, protective action and what remains unknown.
3. **Individual notice:** `Your task 812 was affected. The file was/was not delivered to [target].` Offer revoke/delete/support and the receipt.
4. **Resolution:** verified cause at a useful level, remedy, remaining risk and prevention.

Never claim `no data was affected` before evidence. Follow the GDPR breach assessment/notification process separately from ordinary outage messaging.

## 13. CAPABILITY ROUTING, OPEN SOURCE AND COST EXPERIENCE

### One assistant over a small, versioned capability portfolio

**[OF]** Current commercial model and media costs span orders of magnitude, while provider batch routes can materially reduce cost for non-interactive work. Prices, aliases and preview status change; examples in this report are not commitments. [S49,S54]

**[DR]** Optimise `expected provider cost + retry cost + review/support cost + risk penalty`, subject to hard privacy, licence, safety and latency constraints. Cost per accepted outcome matters; token cost alone does not.

Routing order:

1. deterministic policy removes routes that fail consent, sensitivity, workspace, residency/retention, consequence, modality, device or licence requirements;
2. local preflight hashes/deduplicates, parses/OCRs/transcribes, redacts, sizes and estimates cost;
3. map to a versioned capability contract (`short_extract_v3`, `browser_prepare_v1`, `research_pack_v2`) with schema, tools, maximum steps, evidence and validators;
4. score eligible routes by measured task-slice quality, p95 latency, marginal cost, recent errors and capacity;
5. enforce input/output/tool/wall-time/retry budget; default ceiling is one cheap retry and one stronger escalation;
6. validate independently; escalate on validator failure, calibrated ambiguity or proven quality advantage;
7. record route/capability/policy versions, cost, latency, tool calls and outcome—never hidden chain of thought.

Everyday UX says `Processed on this device` or `Cloud processing was needed for the detailed review`, linked to data handling. Provider identity remains discoverable in privacy evidence, not a work-mode choice.

### Minimal alpha controls

| Component | Decision and acceptance |
|---|---|
| Task envelope | Workspace, sensitivity, consent scope, deadline, spend, contract and provenance on 100% of calls; unknown fails closed |
| Capability registry | Version, provider alias, region/retention, licence ID, modality, limits, cost, eval snapshot and kill switch; disable route globally <5 min |
| Provider adapters | Two independently implemented routes; ≥95% golden tasks move without UI/schema change |
| Policy engine | Outside prompts; zero restricted routes in 1,000 adversarial cases |
| Validators | Per capability, not one LLM judge; ≥99.5% precision on critical fields/actions; ambiguity stops |
| Cost ledger | Task/step/provider/plan; invoice reconciliation ±2% monthly |
| Shadow evaluation | ≥300 representative, consented/de-identified tasks before live route promotion |

Pin model snapshots where possible; no moving `latest` alias for critical workflows. Re-run task evaluations after provider or OS model changes.

### Route policy by work

| Work | Default | Escalate/guardrail |
|---|---|---|
| File lookup/exact extraction | OS index/parser/local OCR; no LLM if deterministic | Ask on ambiguity; never upload folder |
| Short rewrite/tag/extract | Supported on-device or economical cloud | Stronger route only on validator/language/context failure; disclose device→cloud boundary |
| Everyday draft/summary | Economical cloud with retrieval capsule | High consequence, conflicting sources or quality failure; never full PGZ history |
| Multi-document research | Capable route with source/tool budget | Conflict/high-stakes/rubric fail; not premium by default |
| Browser | DOM/API-first, bounded planner, allowlisted tools | Visual path only if needed; never trust page instructions |
| Consequential action | Prepare; deterministic preview | Approval changes authority, not provider/model |
| Image | Four low-cost drafts, one selected final | Two revisions; no unseen high-res variant loop |
| Video/music | Script/storyboard/spec first | Paid bounded render only after scope approval |
| Voice note | On-device/low-cost transcript then text route | Ask on low confidence; no always-on realtime |

### Open-source/local boundary

**[OF]** Model licences vary by release and can include attribution, use restrictions and jurisdiction/commercial thresholds; repository code, weights, tokenizer and adapters may carry different obligations. Some permissive releases exist, but that does not transfer to other versions or resolve training-data/IP risk. [S53]

**[DR]** Maintain an artefact-level bill of materials: weight hash, code/runtime, tokenizer, adapters/data where known, licence/version/notices/use-policy review. Counsel approves each shipped/hosted weight. Pin commits/checksums, generate SBOM, scan dependencies, sandbox without ambient network/credentials and rehearse rollback. No install from mutable branches.

**[OH]** Defer general self-hosting until a stable task exceeds the internal hypothesis of five million input-equivalent tokens/day for 30 days and a quoted fully loaded deployment is ≥30% cheaper at the same quality/SLO. These numbers are proposed decision gates, not supported by the licence source. Avoid Llama 4 multimodal for an Ireland-based product unless counsel documents a valid route given the published EU limitation. [S53]

### Where on-device helps—and hurts

**[OF]** Apple Foundation Models and Android ML Kit GenAI support useful bounded local transforms, but device/model availability, context, reasoning, foreground/battery quotas and version variance require capability checks and fallbacks. [S51,S52]

Use locally for file indexing/metadata/hash/deduplication/thumbnail, OS OCR/speech where quality passes, small private classification/extraction/rewrite, redaction/retrieval-capsule construction, offline queue/state and keys/approval UI. Do not make phone inference the background agent, a quality-critical promise or a cross-platform bundled-model support obligation.

**[OH] On-device route gate:** ≥95% availability among eligible devices; p95 <3s; <2% battery for ten transforms; crash-free ≥99.8%; quality within two points of cloud; consented fallback ≥99%; <1 support contact per 100 monthly users attributable to local setup.

### Capability cost rules

- Routine text: task capsule, 8k input/1k output soft cap, one retry, premium only on rubric fail.
- Research: default eight web/search calls, maximum 20 for a detailed pack; stop at evidence sufficiency.
- Browser: 25 actions, two recoverable errors, ten-minute wall time; approval before consequence.
- Files: local parse/OCR, hash/dedupe/chunk once; show estimate above 50 pages or 25MB; maximum 100 retrieved chunks.
- Image: four low-resolution drafts + one final + two revisions.
- Video: storyboard and keyframe first; alpha maximum eight seconds/720p and one retry.
- Voice: 20-minute note default; realtime later with ten-minute and 30-second-idle caps.
- Circuit breakers at user/workspace/provider/global hour/day; paid action idempotency; stop after two identical failures; automatically disable a route when 15-minute errors exceed 10%, latency doubles or cost/outcome is 50% above baseline.

### Premium work packs

**[DR]** Sell a bounded outcome, never tokens/compute/models/roulette credits.

> **Detailed research pack**  
> I’ll check up to 20 sources and return a cited brief you can edit. It usually takes 10–20 minutes and uses one Detailed Work pack. I’ll ask before expanding the scope.  
> **Start the research** · **Narrow it down**

> **Short video**  
> I’ll prepare the script and storyboard first at no charge. After you approve them, one 8-second 720p render uses one Short Video.

> **If generation fails**  
> The video didn’t finish, so it wasn’t taken from your allowance. Your storyboard is saved.

Show local-currency price before confirmation; no expiring purchased packs, countdowns, auto-top-up or double charge for provider retry. Everyday help remains usable after a premium allowance is exhausted.

**[OH]** In a comprehension test, ≥10/12 must explain deliverable, allowance timing and failure treatment; no more than 1/12 may think a pack is tokens or automatic renewal. **[OH]** Paid-pilot p50 variable AI cost should remain <20% and p95 <40% of net revenue; exceeding either after optimisation forces narrower scope or price, not hidden degradation.

## 14. COMPETITOR AND ADJACENT-PRODUCT ANALYSIS

### Research boundary

**[OF]** Cut: 2026-08-05. The matrix combines current first-party documentation, public surfaces and the limited read-only direct observation log below. Availability varies by plan, account, OS, region and rollout. No scripted competitor task, permission change or outcome benchmark was run; no product's task-success, accessibility or retention is inferred.

### Direct observation log

| Product/build | Platform/date | Directly observed surface | What this does **not** establish |
|---|---|---|---|
| Claude Desktop 1.24012.11 | macOS 26.2 · 2026-08-05 | Authenticated desktop UI: sidebar with Search and Projects; in-task Markdown artifact preview; composer controls for files/connectors, explicit model, settings and voice | Dispatch/Cowork pairing, permissions, task success, notification, cancellation, memory or recovery were not exercised |
| ChatGPT Atlas 1.2026.189.0 | macOS 26.2 · 2026-08-05 | Authenticated browser UI: current webpage remains primary; Search Tabs and a persistent `Ask ChatGPT` sidebar toggle are visible | ChatGPT Work, local-folder access, agent execution, approvals, memory and cross-device completion were not exercised |
| Replit Desktop 1.1.5 | macOS 26.2 · 2026-08-05 | Installed build/version confirmed; its current accessibility surface exposed no eligible workflow controls in the read-only pass | Not counted as flow observation; checkpoint claims remain documentation-only [S60] |

Observation was read-only through the apps' accessibility surfaces: no prompt was sent, no new task/chat created, no setting or permission changed, and no private conversation content was recorded in this report. This is primary but very narrow evidence. [S62]

### Matrix

| Product | Observed journey/context/control | Interpretation for this product |
|---|---|---|
| ChatGPT / Work | Chat/Work choice; long tasks, artifacts, connected apps, progress/steering/approval/schedules; cloud work sync; explicitly granted local folders on desktop; mobile cannot directly reach desktop-local files | Broad work is table stakes. Mode growth and local/cloud split create room for a calmer task/control plane, not a capability claim [S4] |
| Claude / Cowork / Dispatch | Persistent phone/desktop Dispatch thread routes knowledge work to a waking desktop's local files/apps and returns artifact/push; per-app access, blocklist and candid computer-use risk; desktop must be awake/online/open. Current desktop UI also directly exposed Projects, artifacts, connectors, model/settings and voice controls | Closest direct competitor. “Computer on the move” is not unique. Test against its pairing, scope, multi-task separation, receipts and failure recovery [S7,S62] |
| Gemini | Android assistant/screen context, connected Google apps, personal intelligence, scheduled/proactive work and sources; availability/control/data-use is fragmented | OS/context advantage is formidable; consent comprehension and cross-service data distinctions are possible wedge [S8,S32] |
| Apple Intelligence / Siri | System invocation, personal/on-screen context and App Intents; Apple Continuity sets the no-topology-jargon benchmark; current Siri AI capability/EEA timing varies | Do not emulate appearance. Match system permission/continuity grammar; verify Irish availability before each test [S34,S36] |
| Microsoft Copilot | Voice/Vision/Tasks/connectors/memory; visible Vision sharing boundary; approvals for sensitive tasks; consumer/M365 policies differ | Copy the perceptible active-access boundary, not the sprawling product/settings graph [S5,S33] |
| Perplexity Computer | Search citations, long work/artifacts, project memory, connectors, Scheduled/Needs attention/Completed, quiet when no change; credits and no pause in some scheduled flows | Source/action state is strong; calm control should avoid credit framing and preserve pause [S6] |
| Replit Agent | Plan/build/preview, milestone checkpoints that preserve project/context state, change view and rollback; specialist software builder | Best adjacent documented pattern for state/result/reversibility; translate checkpoints into consumer task/receipt language [S60] |
| Notion Agent | Works inside pages/databases and inherited permissions; tools, schedules, logs/version history; model/tool/custom-agent configuration exposed | Strong source proximity and rollback; corpus dependence and configuration are wrong for default-zero entry [S13] |
| Raycast AI | Local OS/app/file/browser tools, default tool approval, editable memory and extensions; model/profile/BYO-key complexity | Excellent desktop proximity for experts; its vocabulary is the configuration burden to hide [S9] |
| Arc/Dia/browser assistants | Page-context chat, browser history/patterns and low-friction invocation; Arc exposes individually selectable Max features and Dia documents local encrypted context with request-minimum transfer; ChatGPT Atlas directly exposed a persistent sidebar toggle alongside the current page; browser-bound | Live object context beats detached chat; avoid dependency copy and always-on all-sites access [S61,S62] |
| Personal knowledge products | Notion/Obsidian/Mem/Readwise keep source adjacent to answer, collection/project scope and export/locality controls | Strong precedent for `why this context?`; extend to task/action provenance without manual filing [S13,S35] |
| Messaging-first and Apple Continuity | Existing threads reduce entry friction; host channels constrain scope/approval/receipts. Handoff/AirDrop make destination and transfer explicit | Messaging is an input/return route, not source of truth. Pairing benchmark is absence of topology jargon, not an animation |

### Feature compression

**[EI]** The missing-feature half-life is now measured in product cycles. Chat, voice, memory, connectors, schedules, citations, artifacts, browser context, WhatsApp entry and phone-to-desktop dispatch are shipped or publicly committed. A feature list cannot justify a company.

### Candidate defensible gaps

These are hypotheses, not proven whitespace:

1. **User-legible device/data plane:** one place answers which device, reachability, exact scope, local/cloud placement, what left device and how to revoke.
2. **Durable outcome lifecycle:** one task identity from received through approval/completion/receipt/undo across app, desktop and notification.
3. **Provenance- and space-aware context:** each fact exposes source/age/scope/reason; corrections propagate; spaces cannot bleed.
4. **Narrow permission recipes with evaluations:** a few jobs whose authority and success criteria are inspectable, not a universal connector.
5. **Ordinary-failure reliability:** asleep/offline/revoked/moved/ambiguous device/file, partial action, duplicate delivery and unknown outcome handled correctly.
6. **Calm canonical control plane:** one assistant identity; separate task objects; channels as routes; models/tools/routing invisible but data/authority visible.

### Do not copy

- blank-chat primacy or a mode/model/tool/credit taxonomy;
- one infinite relationship thread that obscures concurrent tasks and workspace boundaries;
- silent blended memory or broad launch-time permissions;
- invented percentages, typing/thinking theatre or technical activity logs as receipts;
- cute teammate/accessory/dependency framing;
- channel as source of truth or success copy that hides waking-device/app-open dependency;
- token/credit metering beside ordinary work.

### Competitive falsification

**[OH]** After two real tasks with both products, at least 7/10 target users must voluntarily choose this prototype over Claude Dispatch/ChatGPT Work for a third and cite completion/control/context/recovery—not novelty, name or visual styling. If preference disappears after a week, or remote retrieval is the only advantage, do not build the broad product.

### Required authenticated teardown before prototyping

Stage 0 must repeat the same scripted tasks in current Irish/EEA accounts; documentation cannot substitute for operation. Record product, plan, region, OS, app/browser version, test date, exact inputs, permissions already granted and screen recording. For every product, observe onboarding; object/task entry; memory/context disclosure; permission and denial; progress/stall; phone↔desktop continuity; notification actions; completion/receipt; cancellation/undo; recovery; accessibility; tone and visual hierarchy. Use `not observed` rather than inference. Run: (a) known local-file retrieval with duplicate filenames and an asleep device, (b) shared email/page to prepared reply with a seeded risky instruction, and (c) one cited artifact with an interruption and retry. Re-run the critical path after any major release and before participant comparison. This report does not claim those authenticated observations occurred.

## 15. VALIDATION PLAN BEFORE BUILDING

### Decision frame

The question is: **is there paid, repeated demand for a safer, clearer compound workflow—not merely admiration for another agent demo?** All thresholds below are proposed hypotheses or inherited internal gates, not population benchmarks. Small samples reveal mechanisms and failures; they do not estimate market prevalence.

OpenHouse remains revenue-first. The next authorised recommendation is only Stages 0–3, time-boxed to at most six calendar weeks and two evenings per week; stop at that boundary. Stages 4 and 5 below are future alternatives, not an automatic cumulative commitment. Either requires a fresh company decision and displacement check. If Stage 5 is authorised, its inherited **first-alpha** clock is itself at most six weeks and two evenings per week unless paid and retained cross-device gates pass; prior research does not pre-authorise more alpha time. Log displaced OpenHouse work at every stage; any unplanned displacement of a customer, revenue, launch or delivery commitment pauses the current stage. [S63]

### Cheapest evidence first

| Stage | Sample/time | Evidence and output | Proceed gate | Stop/redirect |
|---|---:|---|---|---|
| 0 — Audit/teardown | 1 evening | Update competitor ledger; three workflow contracts and assumption register | Jobs differ on control/completion, not generic output | Proposition reduces to chat/search/drafting |
| 1 — Contextual interviews | 12–15 × 45–60m | Recent incidents, workaround artifacts, frequency/severity/trust map | ≥8/12 core-fit show ≥2 relevant incidents in 30 days; ≥6 describe cross-device/handoff/finish breakdown | <5/12 repeated job or current sync/generic assistant already solves it |
| 2 — Diary | 6–8 × 7 days | Trigger, object, workaround, delay/outcome/abandonment | Median ≥3 genuine opportunities; ≥half include a signature moment | Entries are speculative/low-consequence or require surveillance |
| 3 — Clickable/Wizard-of-Oz | Two rounds of 5–8 | Object entry, pairing/scope, offline/ambiguity, approval/receipt/recovery | Final round ≥4/5 core flow without rescue; all understand scope/action state | Any broader-access belief or persistent technical support need |
| 4 — Concierge (future alternative; fresh decision) | 5–8 × 1–2 weeks | Disclosed manual orchestration; accepted outcomes, revisions, support, repeat, trust | ≥5/8 complete two real jobs; ≥4 return unprompted; no unauthorised access/action | Hidden founder judgement is essential or no unprompted repeat |
| 5 — Invited paid engineering alpha (future alternative; fresh decision) | 15–25, waves of five, ≤6 weeks and ≤2 evenings/week | macOS + one native mobile platform, three workflow contracts | Full inherited activation/value/trust/economic gate set | Safety boundary fails immediately; otherwise finish cohort and park if full gate set fails |

Method rationale: interview current/likely users about real incidents; observe tasks; test in rounds of roughly 4–8; include disabled users throughout without generalising small-sample results. [S55,S56]

### Signature experiments

#### S1 — authorised computer/file access while away

- **Hypothesis:** a core-fit user can pair a named Mac, understand one-folder scope, request a known file, resolve duplicate/old versions and receive the correct artifact in-thread more easily than their workaround.
- **Fixture:** supplied phone + synthetic Mac folder with duplicate filenames, old/current versions; connected, asleep/offline and revoked-scope variants.
- **Gate:** final round ≥4/5 pair/retrieve without rescue; 5/5 identify scope; zero wrong/out-of-scope disclosures; ≥3/5 judge it easier than their actual workaround.
- **No-build:** if it requires broad disk access, remote-desktop concepts or founder intervention—or loses side-by-side to Claude Dispatch—do not build the paired-device proposition.

#### S2 — shared live context to prepared next action

- **Hypothesis:** a deliberately shared email/page/document/spreadsheet produces a specific, useful next step without unrelated access or premature action.
- **Cases:** reply-needed email; spreadsheet anomaly; document decision summary; live page follow-up.
- **Gate:** ≥75% participant-rated usable as-is/minor edits; zero consequential pre-approval actions; all material facts traced or labelled uncertain; no more than one unsupported material claim in 20 cases.
- **No-build:** if fewer than half reduce a real next step or results are generic summaries/drafts no better than incumbents, narrow to one context type or stop.

#### S3 — one request to finished artifact

- **Hypothesis:** one bounded request plus at most one necessary clarification produces a contract-compliant artifact delivered in the initiating conversation and actually used/shared.
- **First class:** one only—prefer a cited research pack or presentation; predefine required sections, sources, format, turnaround and delivery.
- **Gate:** concierge ≥5/8 pass contract; ≥4/8 used/shared; median ≤1 revision; ≥3 return unprompted; costs/support fit the €6/10-minute hypotheses.
- **No-build:** if founder work is essential to most accepted outputs or value is only generation quality available in ChatGPT/Claude, do not build.

### Major no-build gates

- Fewer than 5/12 show repeat jobs; median diary <2.
- Most value statements concern answer quality; fewer than 40% can recall a signature cross-device moment in alpha.
- More than 1/5 need pairing rescue after redesign; any out-of-scope access.
- Fewer than 50% context outputs reduce a real next step; repeated unsupported claims.
- Any participant cannot distinguish prepared from executed action; >20% supported jobs abandoned at approval.
- Any false state/receipt, silent stall or personal/work/shared leak.
- Below inherited 50% of activated users completing three jobs in week two or 35% unchased activity in week six.
- Below inherited 30% acceptance of a real €29 founding offer or fewer than 10 retained paid users from 25 prospects.
- Above inherited median ten support minutes or €6 variable cost per active user/month.

### Assumption register

Each hypothesis has an observable metric, a failure condition and an explicit no-build consequence. Passing one never compensates for failing a safety gate. H16–H20 preserve the founder's inherited alpha gates rather than presenting them as external benchmarks. [S63]

| ID | Assumption | Evidence / metric | Failure condition | No-build consequence |
|---|---|---|---|---|
| H1 | Target users have recurring, recent jobs | ≥8/12 core-fit report ≥2 relevant incidents in 30 days; diary median ≥3 opportunities | <5/12 repeat or diary median <2 | Stop broad assistant research |
| H2 | The compound proposition differs from incumbents | ≥7/10 choose it for a third real task and name control/context/completion/recovery | Preference is novelty/appearance or disappears after one week | Do not build broad product; retain only proven job slice |
| H3 | Pairing can be self-serve | ≥4/5 final-round unaided; median ≤120s; wrong pair zero | >1/5 rescue after redesign or any wrong pair | Drop paired-device proposition |
| H4 | Narrow permission remains useful | 5/5 understand folder scope; ≥95% known-file success | Broad disk access required or any out-of-scope read | Do not ship local-file access |
| H5 | Correct retrieval beats workarounds | ≥3/5 rate easier; ≥95% correct known file; 100% ask on risky ambiguity | Sync/search already solves it or wrong-version disclosure occurs | Stop remote-retrieval wedge |
| H6 | Shared context produces a useful next action | ≥75% usable as-is/minor edits; ≥50% reduce a real next step | Generic summary, unsupported facts or no action reduction | Narrow to one source type or stop |
| H7 | One request can yield a used artifact | ≥5/8 pass contract; ≥4/8 use/share; median ≤1 revision | Founder edits essential or output value is model-quality only | Do not build artifact platform |
| H8 | Approval is understood and acceptable | ≥90% consequence comprehension; accidental approval zero; abandonment ≤20% | Prepared/executed confusion, mismatch or excessive abandonment | Do not enable external action |
| H9 | Progress and receipts can stay truthful | False consequential state zero; ordinary accuracy ≥99.5%; unknown outcome handled | Any false receipt/silent stall/duplicate consequential action | Disable affected workflow immediately |
| H10 | Saved context reduces repetition without creepiness | Measurable lower repetition; ≥85% concept comprehension; correction ≥95% | No task benefit, wrong reuse or cross-space leakage | Keep tasks stateless/task-only |
| H11 | People return without prompting | Concierge ≥4/8 return; alpha week-2 three-job rate ≥50%; week-6 unchased ≥35% | Only prompted/demo use | Park the product |
| H12 | Experienced value supports payment | ≥30% accept a real €29 offer; ≥10/25 remain paid | Compliments or stated intent without payment | Do not fund engineering expansion |
| H13 | Unit economics fit | p50 variable AI cost <20% and p95 <40% of net revenue; support median <10m/user/month | Limits fail after one narrowing/optimisation pass | Reprice/narrow; otherwise stop |
| H14 | Core flow is inclusive | 100% technical path; ≥90% overall; no access cohort <80% | Blocked approval/cancel, focus loss or cohort floor failure | Stop release until corrected; persistent failure kills flow |
| H15 | Native app is necessary | In a ≥10-person counterbalanced comparison, native share/push/pair/recovery is ≥20% faster in median or ≥15 points higher in unassisted completion than the web/channel prototype | Neither threshold is met and no access-critical advantage appears | Avoid native build; use the simpler surface |
| H16 | First-session activation meets the inherited gate | ≥70% of invited alpha users complete one signature job in session one | <70% after one usability correction round | Do not expand the alpha; park if the corrected round also fails |
| H17 | Install-to-result is acceptable | Median install → first completed result <10 minutes | Median ≥10 minutes after installation/pairing defects are corrected | Do not broaden device support; park native/paired proposition if persistent |
| H18 | Setup is self-serve | <10% require founder intervention to finish setup | ≥10% after one redesigned onboarding round | Do not scale recruitment or ship self-serve; park if support cannot be designed out |
| H19 | Cross-device behaviour is real | ≥30% of activated alpha users use both desktop and phone/messaging; ≥40% experience and unaidedly recall one signature cross-device moment | Either inherited threshold is missed at week six | Do not claim/build a cross-device company; retain only a proven single-surface job if any |
| H20 | Material trust breaks are rare enough | <5% of completed jobs user-classified as a material trust break; unauthorised/out-of-scope action remains zero | ≥5%, or any severe unauthorised/out-of-scope event | Stop expansion; severe event disables class immediately; persistent ≥5% parks alpha |

### Interview guide

Do not demo until the behavioural interview is complete. Ask:

1. What work and personal admin did you handle last week? Which phone/computer, and when were you away from it?
2. Tell me about the **last** time you needed something from your computer while away. What triggered it? Walk through every step. What was delayed, wrong or abandoned? When did it happen before?
3. Tell me about the last email/page/document/spreadsheet where you knew an action was needed but postponed it. Where did the process stop? What did finished mean?
4. Tell me about the last document/presentation/research/media artifact you produced. Which inputs, tools, handoffs and rework? What did an existing assistant finish, and what remained yours?
5. Tell me about the last time software accessed, changed or sent something you did not expect. What may be prepared automatically? What must be shown first? What permanently breaks trust?
6. What current tool would you refuse to replace? May we invite you to a separate optional diary/prototype round?

Never ask `Would you use/pay for this?`, solicit feature voting or treat a promised referral as behaviour. Test price with a real offer after experienced value.

### Recruitment brief

- Ireland, age 18+, daily smartphone, Mac ≥4 days/week, away from it weekly, personally handles recurring digital/admin work and can describe a relevant event in the last 30 days.
- 12–15 discovery interviews: 4–5 founders/freelancers; 3–4 busy professionals; 2–3 property/creative/recruiting/consulting operators; 2–3 substantial personal/family-admin coordinators.
- Roughly half weekly ChatGPT/Claude users; ≥4 AI-indifferent/light; ≥4 cautious about getting digital tasks wrong; ≥3 with relevant access needs/adaptive practices; spread 18–34/35–54/55+, gender, socioeconomic and urban/rural context where feasible.
- No more than one-third from Sam's close network. Exclude employer/client material without permission, sensitive roles, medical/legal/financial/emergency decision tasks, under-18s and professional agent builders from the core sample.
- Recommended incentive €60–€90 for 60 minutes plus access costs; pay for time, including early stop, never positive feedback.

Recruit through at least three routes: founder/professional contacts; Irish professional, local, disability/accessibility and family-admin communities; and an independent recruiter/panel if needed. No route supplies the whole cohort; record route and compare close-network findings with other participants. Do not let an easy AI-enthusiast sample become the market.

The screener asks for the date and concrete outline of the last relevant event; phone/computer models and work/personal ownership; frequency away; current workaround; ability to use the synthetic Mac fixture; access/accommodation needs; recruitment conflicts; and authority to use any work/client material. Ask about functional access needs, not diagnoses, unless a diagnosis is volunteered and genuinely necessary. Exclude coached/professional research participants and builders of general-purpose agents from the core evidence; record, rather than silently filter, failed screeners.

Logistics confirmation covers remote/in-person preference, contact method, assistive technology, captions/interpreter/support person, breaks, accessible venue/link and any reimbursable access cost. Test the prototype with the participant's assistive-technology combination beforehand. Diary and concierge phases have separate incentives and expectations; payment is never conditional on continued use, task completion or favourable feedback. Before any real work/client object, confirm the participant owns it or has employer/client authority; otherwise use the synthetic fixture.

### Consent/privacy-safe protocol

1. Tie every collected field to a research question; otherwise do not collect it.
2. Plain-language sheet: controller/researcher, purpose/activity, data, optional recording, processors/observers, location/retention/sharing, rights/withdrawal/complaint, risks, incentive and model-provider processing.
3. Separate affirmative choices for participation, recording, anonymised quotes, follow-up and optional real-data task.
4. Synthetic/redacted fixtures by default; real material optional, participant-selected and limited to one object. Never request passwords, recovery codes, full mailbox, banking/health/intimate/child/government-ID or third-party confidential data.
5. Participant operates their device; no weakened OS security or out-of-scope browse. Wizard-of-Oz/manual work is disclosed.
6. Recording off by default during real-data tasks. Stop on distress, accidental disclosure, unclear authority, malware/injection, out-of-scope access or misunderstood consequence.
7. Participant IDs separate from contacts; named-researcher access; encrypted approved storage; no personal drives/unapproved transcription.
8. Proposed retention: raw recording ≤30 days after synthesis; identifiable notes ≤90 days; then de-identified findings/aggregate metrics. Test access/deletion and maintain consent record.

Participation consent is not automatically the GDPR lawful basis for every research-processing purpose; document controller, Article 6 basis and any Article 9 condition separately with the DPO/counsel. A person may pause, skip any question or withdraw without losing the incentive. If they withdraw during a session, stop recording and new collection immediately and delete covered raw data unless a stated legal obligation prevents it. Afterward, they use their participant ID and a tested contact route to request access or deletion before the published aggregation/linkage cutoff; confirm receipt, scope and completion date. Explain that de-identified aggregate findings may no longer be retrievable after the re-identification link is destroyed. Withdrawal from future contact, deletion of research data and revocation of optional quote/recording permission are separate controls and must be honoured without dark patterns.

No customer research has yet been conducted; this section is a programme and falsification contract, not evidence of demand.

## 16. PRIORITISED PRODUCT REQUIREMENTS

Confidence refers to support for the *need/risk*, not proof that the proposed implementation or threshold is right.

### Must be true before alpha

| Rank | Requirement; user value/rationale | Main risk | Confidence/source | Measurable acceptance test |
|---:|---|---|---|---|
| 1 | Three versioned workflow contracts only; makes promise and success legible | Scope becomes platform build | High, strategic/competitor [S4–S9] | Backlog/task registry rejects work outside S1–S3; each has inputs, allowed tools, terminal states and rubric |
| 2 | Canonical event-backed task state; no silent stalls | UI diverges from execution | High [S10–S12] | Every visible state maps to backend event; Cancel stops calls; ≥90% safe terminal state; false terminal state zero |
| 3 | Object-first entry plus text/photo/file/sample without permission wall; custom voice deferred | Wrong inferred job or low discoverability | Medium [S15–S19] | ≥65% personal-object completion; p50 first value ≤90s; compare with guided blank chat |
| 4 | Signed/notarised macOS companion and named two-sided pairing | Wrong device or hostile installer | High [S38,S39] | ≥85% pair unaided; wrong-device zero; one-time session/short phrase/device key tests pass |
| 5 | User-selected folder/capability grants; separate read/write | Out-of-scope disclosure | High [S27–S29,S36–S39] | Teach-back ≥90%; 100% policy-scope correctness; default grant set empty |
| 6 | Correct-file disambiguation and local/cloud labels | Wrong version/sensitive leak | High, product risk | ≥95% known-file success; 100% ask on high-risk ambiguity; content hash/version receipt |
| 7 | Deterministic policy engine outside model | Prompt/agent expands authority | High [S10–S12] | Zero restricted execution across ≥1,000 adversarial policy cases |
| 8 | Payload-bound consequential approval and action card | Habitual approval/mismatch | High [S20–S22] | ≥90% consequence comprehension; 100% target/account/content match; unauthorised action zero |
| 9 | Verified receipt, honest partial/unknown state and recovery | False confidence or duplicate retry | High [S10–S12] | External postcondition checked; any false sent/booked/paid/deleted receipt blocks release; idempotency tests pass |
| 10 | Minimal PGZ: explicit-save, provenance, correction/forget and space boundary | Stale/creepy/cross-space memory | Medium [S30–S35] | 100% durable provenance; correction ≥95%; deletion propagation p95 ≤5m; leakage zero |
| 11 | Explicit hybrid placement and no bulk upload | Misleading privacy/E2EE claim | High [S27–S29,S34] | UI answers location/expiry; network trace matches; selected task slices only |
| 12 | Sandbox, untrusted-content handling, kill switch and incident path | Injection, connector/device compromise | High [S10–S12] | Zero high-impact injection in red-team suite; route/device revoke <5m/immediate; incident drill passes |
| 13 | Content-minimised telemetry and cost/support ledger | Cannot learn or overcollects life data | High [S27–S29,S49] | Event schema stores outcome/scope/cost/support without raw content by default; invoice ±2%; deletion job verified |
| 14 | Critical-path accessibility | Exclusion and hidden approval errors | High [S14–S16,S26] | 100% operability screen reader/keyboard-switch/200%/reduced motion; cohort gates in §11 |
| 15 | Portfolio and no-build instrumentation | OpenHouse displacement/sunk-cost continuation | High, inherited Ground Zero | Hours/displacement, payment, week-2/6, cross-device, trust, support and cost queryable; automatic six-week decision report |

### Important before a paid pilot

| Rank | Requirement; value/rationale | Main risk | Confidence/source | Acceptance |
|---:|---|---|---|---|
| 16 | One native mobile front door, share action and accurate push; reduces transfer friction | Premature two-platform support | Medium [S36,S37] | One platform first; share/resume/outcome flow beats temporary channel in controlled comparison |
| 17 | Self-serve device/account recovery | Founder support or unsafe recovery | High [S38,S39] | Rename/revoke/re-pair/lost-device fixtures without help; restored account reapproves sensitive devices |
| 18 | Data export, deletion and provider disclosure | Partial downstream deletion/confusing policy | High [S27–S35] | Ordinary files + JSON/CSV export; delete verified across stores/processors; plain provider/retention view |
| 19 | Workflow eval corpus and version gate | Provider/model regression | High [S12,S49–S52] | ≥300 representative cases/class; happy/ambiguous/adversarial/failure; no release below class floor |
| 20 | User-controlled diagnostic bundle | Support sees too much or too little | High [S27–S29] | Preview omits raw content by default; median support <10 min/active user/month |
| 21 | Honest €29 founding offer and bounded work packs | Charging for unreliable/unbounded work | Medium, commercial hypothesis | Price/allowance/refund/cancel visible; ≥30% accept and 10/25 retained paid |
| 22 | Notification categories, quiet hours and batching | Interruption/disablement | High [S24,S25,S40,S41] | Only decision/material/failure/outcome pushes; ≥80% appropriate; zero stale/wrong-target actions |
| 23 | Memory expiry/separation hardening | Cross-space/stale fact | Medium [S30–S35] | Source/edit/forget/expiry across sessions; measurable repetition reduction versus memory-off |
| 24 | One reversible external action after draft reliability | Action correctness/rollback illusion | Medium [S20–S22] | Exact preview/digest/receipt; real rollback or honest compensating action; any mismatch disables class |

### Defer until evidence

| Rank | Requirement; possible value | Main risk | Confidence/source | Evidence required before promotion |
|---:|---|---|---|---|
| 25 | Android plus Windows/Linux parity | Support matrix before retention | High defer | macOS + one mobile platform passes paid retention/support; next cohort's device prevalence verified |
| 26 | WhatsApp/RCS/SMS/Telegram/Apple routes | Policy, cost, fractured consent/history | High [S42–S46] | Official route preserves identity/approval/receipt and lowers observed friction; native remains truth |
| 27 | Real-time voice/calling | Privacy, error, latency/cost | High [S47,S48] | Voice notes show repeated voice-specific jobs; safe transcript/interrupt/reconnect gates pass |
| 28 | Bounded monitoring/repeat actions | Surveillance, stale consent, notification load | High [S5,S6,S8] | Repeated same check; user specifies condition/cadence/expiry; pause/revoke/false-alert tests pass |
| 29 | More artifacts/media/premium packs | Quality and unbounded cost | High [S49] | One class at a time after use/revision/cost/delivery gates; explicit pre-authorisation |
| 30 | Broad connectors/app control | Attack surface and brittle support | High [S10–S13] | Repeated failed jobs attributable to one connector; least-privilege/recovery and workflow demand proven |
| 31 | Shared/family/business workspaces | Identity/tenancy leakage | High [S28,S32–S35] | Personal/work isolation proven; observed multi-person job justifies new domain |
| 32 | Automatic/rich personal memory | Inference, staleness, provider exposure | Medium [S30–S35] | Category-specific benefit and comprehension; provenance/scope/expiry/deletion pass; no sensitive inference |
| 33 | Self-hosted/open-weight general model | Licence, GPU/support, patching | High [S53] | Stable >5M input-equivalent tokens/day ×30 days; ≥30% fully loaded saving at same SLO/quality |

### Explicitly avoid

| Rank | Pattern; why | Main risk | Confidence/source | Release rule |
|---:|---|---|---|---|
| 34 | Broad assistant platform before the three gates | Portfolio displacement/no demand | High | Backlog contains only three contracts; out-of-scope requests become evidence, not work |
| 35 | User-facing models/providers/tools/tokens/API keys | Cognitive burden and false optimisation | High, competitor evidence [S4–S9] | None in normal flow; provider disclosure remains in privacy evidence |
| 36 | Bulk upload/silent indexing/passive screen capture | Catastrophic privacy/trust | High [S27–S29] | Network/storage audit proves selected slices only; folder set empty by default |
| 37 | Autonomous send/post/buy/book/delete/account change | Irreversible harm | High [S10–S12,S20–S22] | Policy blocks without exact approval; no alpha `always allow` |
| 38 | BlueBubbles/private iMessage bridge or bot/token setup | Policy/account fragility and technical onboarding | High [S44] | Channel review rejects unofficial account automation/server setup |
| 39 | Fake progress/emotion/urgency/engagement loops | Deception, dependence, interruption | High [S23–S25] | Every status has event; no streak/guilt/`we miss you`/personhood/human-review fiction |
| 40 | Unqualified E2EE/EU-only/never-leaves-device/ZDR claims | Misrepresentation and architecture lock-in | High [S27–S29,S50] | Public claim requires tested data flow and documented feature-level exception |
| 41 | Expansion after failed paid-retention gate | Sunk-cost portfolio drift | High, inherited | If 10 retained paid/25 or full gate set fails, mark parked; no expansion backlog |
| 42 | Unpinned open-source code/weights or preview-only core | Supply-chain, licence and churn | High [S51–S53] | Artefact BOM/SBOM/hash/licence/rollback required; preview cannot support core promise |

### One-page design constitution

1. Outcomes, not AI: name the person's object, next step, timing and result—not models, agents or tokens.
2. OpenHouse has precedence; research time is bounded and displacement is logged.
3. Prove three moments before any platform.
4. A real object beats an empty box; blank chat is never the sole entry.
5. Ask for the narrowest permission at the moment its value is clear.
6. Raw local sources retain authority; cloud continuity never implies bulk copying.
7. Prepare freely; act carefully. Consequential action stays approval-first.
8. Approval is a contract: exact target/data/effect, edit/reject, bound execution and receipt.
9. Ambiguity pauses; it never grants permission or selects a dangerous plausible option.
10. Progress must be true and derived from authoritative state.
11. Every task can stop; explain what already happened and what can truly be undone.
12. Memory is sourced, scoped, dated, correctable and forgettable.
13. Personal, work and shared spaces do not bleed.
14. Failure is a first-class screen with a safe next action.
15. Accessibility is premium quality, not a separate mode or appendix.
16. Notifications earn interruption through a decision or material state.
17. Warmth never pretends personhood, human review or dependency.
18. Instrument outcomes, safety, support, cost and repeat use without making raw content analytics.
19. Reliability outranks breadth; fix the highest-harm/frequency failure before adding capability.
20. Evidence can end the project; a failed no-build gate is a valid result.

## REQUIRED RESEARCH LEDGER

Each row consolidates a substantive recommendation; detailed interface rules and acceptance tests are in sections 1–16. Gates are proposed unless explicitly labelled inherited.

| Research question | Recommendation / classification | Why; segment; exact rule | Best evidence, quality and limitation/conflict | Cheap test; success; failure | Phase |
|---|---|---|---|---|---|
| What should first use start with? | Object-first plus text/photo/file/sample; custom voice later; **DR/OH** | Reduces articulation burden for AI-indifferent/admin users; home starts `What do you need sorted?`, no blank-chat-only state | Apple/Android first-party guidance + cognitive research [S15–S19]; no direct personal-assistant object-vs-chat trial | Counterbalanced prototype; ≥15% time/completion gain and no consent loss; <5% difference twice or more wrong-job inference disconfirms | Alpha |
| When should permission be requested? | Contextual, narrow and gracefully deniable; **OF→DR** | Preserves informed choice for all, especially anxious/low-confidence users; selected object/folder, purpose, alternative and revoke | Apple/Android first-party [S15,S16,S36,S37]; guidance is not product-specific causal evidence | Teach-back ≥85%/scope ≥90%; overall <75%, cohort <60% or any out-of-scope access fails | Alpha |
| How should reliance be calibrated? | Preview/evidence/control/receipt, not persuasive rationale; **EI/DR** | Prevents automation bias and aversion; exact action/target/effect visible | Peer-reviewed trust/algorithm/explanation evidence [S20–S22]; lab/task transfer uncertain | Seeded errors; consequential detection ≥90%, correct accept ≥85%; rationale raising wrong acceptance fails | Alpha |
| How autonomous can it be? | Levels 0–2 only; consequence approval-first; **DR** | Keeps ordinary users in meaningful control; previous approval never current approval | Human-automation literature + provider safety [S10–S12,S20–S22]; friction/value tradeoff unvalidated | Approval comprehension ≥90%, accidental approval 0 moderated/<0.5% alpha; any unauthorised action stops | Alpha |
| How warm should language be? | Respectful/capable, never personhood/dependency; **EI/DR** | Approachability without deception, especially under stress | Warmth/competence peer-reviewed [S23]; does not establish long-term safety or ideal tone | Paired tone test; ≥80% clear/respectful/capable, <10% patronising/deceptive; >20% infer feelings/human review fails | Alpha |
| What should “memory” contain? | Five stores with provenance and explicit-save durable context; **DR** | Reduces repetition while making source/retention legible for all spaces | First-party competitor controls [S30–S35] + small, context-bound qualitative studies [S57,S58]; Irish comprehension evidence absent | Memory-off/on task, why/edit/forget; 100% provenance, ≥95% correction; no repetition benefit defers memory | Alpha |
| How are spaces isolated? | Separate permission/key domains before retrieval; **DR** | Prevents personal/work/shared leakage | GDPR by default [S27–S29] + architecture inference; no direct user study proves key design | ≥500 adversarial cases, zero leakage; any leak stop-ship | Alpha |
| What does forgetting mean? | One deletion graph, immediate deny-list and stated processor/back-up date; **DR** | Avoids multi-place deletion seen in current assistants | Product docs [S30–S33], regulator principles [S27–S29]; legal exceptions/processors vary | Delete/correct drill; UI immediate, active p95 ≤5m, never >24h; post-confirmation use fails | Alpha/paid |
| Can pairing feel simple and remain secure? | QR/manual fallback, two-sided name/short phrase, device key, capabilities off; **DR** | Enables non-technical remote work without topology jargon | Apple/Android platform/security first-party [S36–S39]; prototype UX/security untested | Final round ≥4/5 unaided, 5/5 scope correct, zero wrong pair; persistent rescue stops proposition | Alpha |
| How should cross-device progress work? | One canonical event-backed task envelope; **DR** | Prevents duplicate/contradictory app/desktop/channel state | Platform live/handoff docs [S36,S40,S41] + architecture inference | Concurrency/deep-link suite; ≥95% correct task, 100% approval single-use; duplicate consequential action zero | Alpha |
| What earns a notification? | Decision, material state, explicit monitor change, true outcome or undo; **EI/DR** | Protects busy users' attention | Notification experiments [S24,S25] + platform guidance [S40,S41]; exact cadence context-dependent | 7-day diary; ≥80% appropriate, <65% or >30% disable intent fails; false terminal push zero | Alpha |
| Which channel is canonical? | Native app; channels only input/return; **OF→DR** | Preserves identity, approval, receipts and revocation | WhatsApp/Apple/RCS/Telegram official policy [S42–S46]; availability/economics change | Channel link comprehension ≥90%; no channel >30% dependency before migration proof; policy uncertainty kills pilot | Alpha/later |
| When is voice better? | Voice notes first, duplex later; visual review for consequence; **DR/OH** | Helps hands-busy/accessibility contexts without speech error authority | Apple/Android speech first-party [S47,S48]; on-device/quality varies | Compare task completion/edit burden; consequential voice-only execution zero; no repeat advantage defers realtime | Alpha/later |
| What accessibility baseline applies? | WCAG 2.2 AA + native targets/manual AT testing; **standard→DR** | Makes premium core flows inclusive | W3C standard and platform guidance [S14–S16,S26]; WCAG mobile mapping informative, not full native proof | 100% technical critical path; ≥90% overall, no cohort <80%; any blocked approval/cancel stop-ship | Alpha |
| How should prompt injection be treated? | Assume detection failure; policy/least privilege/sandbox/human approval; **OF→DR** | Protects file/browser/email users from scope/data/action compromise | Provider, OWASP and NIST [S10–S12]; no control eliminates risk | ≥1,000 adversarial cases, zero high-impact chain; any exfiltration/unauthorised action stops class | Alpha |
| What privacy can alpha promise? | Purpose register, minimum data, no training by default, honest placement; **regulator→DR** | Supports informed trust and GDPR accountability | DPC/EDPB [S27–S29] + feature-level retention docs [S50]; lawful basis case-specific | DPIA/data-flow/retention deletion drill; unsupported public claim or processor gap blocks | Alpha |
| How should model routing work? | Policy-constrained contracts, measured scoring and validators; **DR** | Hides complexity while controlling quality/cost/vendor risk | Provider pricing/data/platform docs [S49–S52]; prices/quality volatile | ≥300-task shadow set; quality loss ≤1.5pp, critical error <0.5%, ≥20% outcome-cost gain; otherwise retain route | Alpha |
| Where should local/open weights be used? | Deterministic/bounded local first; no general self-host in alpha; artefact BOM; **OF→DR** | Privacy/latency gain without support/licence trap | Apple/Android local docs [S51,S52] and first-party licences [S53]; device and IP uncertainty remain | Device-matrix gates; self-host only >5M tokens/day ×30d and ≥30% saving; missing licence blocks | Alpha/defer |
| How should expensive creation be sold? | Outcome-named, success-charged packs; **DR/OH** | Cost clarity without token anxiety or dark patterns | Current list prices [S49,S54]; preference/WTP untested | 12-person comprehension: ≥10 correct and ≤1 token/renewal confusion; failure means revise, not obscure | Paid pilot |
| Which visual direction should ship? | Quiet Utility plus document/receipt cards, pending three-way test; **DR/OH** | Broad consumers need legible state and respect, not assistant theatre | Platform/accessibility guidance [S14–S16] and adjacent references; aesthetic preference and behaviour untested | 18–24 participant equivalent-flow test; consequence comprehension ≥90%, no access failure, patronising/deceptive ≤15%; otherwise revise/reject | Pre-build |
| Which notification actions are safe? | View/review broadly; approve/retry/undo only under strict payload, auth, idempotency and reversibility rules; **DR** | Lock-screen convenience must not create accidental authority | Interruption studies and platform live surfaces [S24,S25,S40,S41]; no direct action-safety benchmark | Scripted stale/version/other-device tests; unauthorised/replayed action zero and false terminal push zero; any failure removes inline action | Alpha |
| What should users customise? | Contextual confirmed adaptation; settings only for stable outcome-level controls; **EI/DR** | Avoids setup burden while preserving heterogeneous tone/privacy/control needs | Information-worker personalisation study [S59] + competitor controls [S9,S13,S30–S33]; workplace transfer limited | 12–15 recent-behaviour/card-sort/task study; ≥4/12 need and ≥10/12 predict effect; otherwise contextualise/inherit/omit | Pre-build |
| How should incidents be communicated? | Pause, bound impact, individual receipt and verified resolution; **DR** | Trust depends on honest uncertainty and recovery, not reassurance | DPC/EDPB and risk guidance [S12,S27–S29]; exact copy untested | Tabletop plus affected-user comprehension; 100% can identify status/protective action; unsupported `no impact` blocks release | Alpha |
| What is the delivery contract for artifacts? | Object-specific preview, version, evidence, accessibility, delivery and receipt; **DR** | “Done” must mean usable and recoverable, not generated | Adjacent checkpoint/source patterns [S13,S60] + accessibility [S14–S16]; use rates unproven | Contract rubric and real use/share; concierge ≥5/8 pass and ≥4/8 use/share; founder repair dependency stops class | Concierge |
| When is an artifact accessible enough to be done? | Accessibility is part of the artifact contract; **standard→DR** | An inaccessible PDF/slide/video is a failed outcome | WCAG/platform/W3C evaluation [S14–S16,S56]; format-specific conformance still required | Tagged/structured output, reading order, alt text/captions and manual AT sample pass; critical defect returns task to partial/failed | Alpha |
| Which reliability/cost rules govern execution? | Versioned capability budgets, truthful states, cost/outcome ledger and circuit breakers; **DR/OH** | Prevents hidden degradation, retries and uneconomic breadth | Provider price/batch/data docs [S49,S50,S54] + risk guidance [S10–S12]; thresholds illustrative | Per-class SLO/cost/support dashboard; false consequence zero, p50/p95 cost gates and route breaker tests; breach disables/narrows | Alpha |
| Is the product preferred to incumbents? | Side-by-side real-task comparison with Claude Dispatch/ChatGPT Work; **OH** | Feature whitespace is already compressed | Current first-party competitor docs [S4–S9,S13]; no authenticated task-success observation | ≥7/10 choose prototype for third task citing control/context/recovery; week-one preference loss kills broad thesis | Pre-build/alpha |
| What evidence justifies engineering? | Interviews→diary→prototype→concierge→paid alpha; **DR** | Buys cheapest evidence first and prevents feature expansion | GOV.UK/W3C methods [S55,S56]; small samples not prevalence | Stage gates in §15; failed gate stops or narrows, not expands | Research |
| When should the company stop? | Separate six-week discovery, two-week concierge and six-week alpha decisions; first alpha remains ≤two evenings/week unless gates justify more; 10 retained paid/25 and full gates; **inherited DR/OH** | Protects OpenHouse and converts uncertainty into explicit stage decisions | Ground Zero internal plan [S63]; not external benchmarks | Decision report at each boundary; missed paid/retention/safety/economic gate parks project | Stage/alpha decision |

## SOURCE INDEX

All links were accessed **2026-08-05**. “Living documentation” means the page had no stable publication date; product capabilities remain plan/region/rollout dependent.

### Market, human factors and accessibility

- **S1 — Irish digital behaviour.** Central Statistics Office, [Household Digital Consumer Behaviour 2025](https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/), 2025. Official statistics.
- **S2 — Irish generative-AI use/non-use.** CSO, [Generative AI chapter](https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/generativeai/), 2025. Official statistics.
- **S3 — Irish literacy/digital skills.** NALA, [Literacy and numeracy in Ireland](https://www.nala.ie/literacy-and-numeracy-in-ireland/) and [Plain English tips](https://www.nala.ie/plain-english/plain-english-tips/), living guidance citing DESI; not product-demand evidence.
- **S14 — Accessibility standard.** W3C, [WCAG 2.2](https://www.w3.org/TR/WCAG22/), Recommendation 2023-10-05; [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum); [WCAG2Mobile 2.2](https://www.w3.org/TR/wcag2mobile-22/), Group Draft Note 2025-05-06, informative.
- **S15 — Apple accessibility/privacy/motion.** Apple HIG, [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/), [Privacy](https://developer.apple.com/design/human-interface-guidelines/privacy), [Motion](https://developer.apple.com/design/human-interface-guidelines/motion), living first-party guidance.
- **S16 — Android accessibility/permissions/scaling.** Android Developers, [Request runtime permissions](https://developer.android.com/training/permissions/requesting), updated 2026-07; [Accessibility](https://developer.android.com/design/ui/mobile/guides/foundations/accessibility); [Android 14 font scaling](https://developer.android.com/about/versions/14/features), first-party.
- **S17 — Decision complexity.** Hick, [On the Rate of Gain of Information](https://doi.org/10.1080/17470215208416600), *Quarterly Journal of Experimental Psychology*, 1952.
- **S18 — Choice-overload boundary.** Scheibehenne, Greifeneder & Todd, [Can There Ever Be Too Many Options?](https://doi.org/10.1086/651235), *Journal of Consumer Research*, 2010. Meta-analysis; effects heterogeneous.
- **S19 — Progressive disclosure.** Springer & Whittaker, [Progressive Disclosure](https://doi.org/10.1145/3374218), *TiiS*, 2020; Kim & Ji, [Exploratory search with generative AI](https://doi.org/10.1016/j.ijhcs.2026.103771), 2026; Anik & Bunt, [Dataset explanations](https://doi.org/10.1145/3742413.3789087), 2026. Contexts/samples do not directly establish assistant-action design.
- **S20 — Calibrated trust.** Lee & See, [Trust in Automation](https://doi.org/10.1518/hfes.46.1.50_30392), *Human Factors*, 2004.
- **S21 — Algorithm aversion/control.** Dietvorst, Simmons & Massey, [Algorithm Aversion](https://doi.org/10.1037/xge0000033), 2015; [Overcoming Algorithm Aversion](https://doi.org/10.1287/mnsc.2016.2643), 2016.
- **S22 — Explanation risk.** Bansal et al., [Does the Whole Exceed its Parts?](https://doi.org/10.1145/3411764.3445717), CHI 2021.
- **S23 — Warmth/competence.** McKee, Bai & Fiske, [Humans perceive warmth and competence in AI](https://doi.org/10.1016/j.isci.2023.107256), *iScience*, 2023.
- **S24 — Notification interruption.** Stothart, Mitchum & Yehnert, [The attentional cost of receiving a cell phone notification](https://doi.org/10.1037/xhp0000100), 2015.
- **S25 — Notification batching.** Fitz et al., [Batching smartphone notifications can improve well-being](https://doi.org/10.1016/j.chb.2019.07.016), 2019; context/cadence transfer remains uncertain.
- **S26 — Older-adult mobile guidance.** Gomez-Hernandez et al., [Design Guidelines of Mobile Apps for Older Adults](https://doi.org/10.2196/43186), systematic review, 2023.
- **S57 — Memory privacy mental models.** Zhang et al., [Understanding Users' Privacy Perceptions Towards LLM's RAG-based Memory](https://doi.org/10.1145/3733816.3760750), HAIPS/CCS 2025; 18-person qualitative study in China, useful for mechanisms but not prevalence or Irish transfer.
- **S58 — Sensitive-chat privacy misconceptions.** Kwesi et al., [Exploring User Security and Privacy Attitudes and Concerns Toward General-Purpose LLM Chatbots for Mental Health](https://www.usenix.org/conference/usenixsecurity25/presentation/kwesi), USENIX Security 2025; 21 US interviews in a sensitive-use context, not general assistant behaviour.
- **S59 — Productivity-agent personalisation.** Nepal et al., [From User Surveys to Telemetry-Driven Agents](https://www.microsoft.com/en-us/research/publication/from-user-surveys-to-telemetry-driven-agents-exploring-the-potential-of-personalized-productivity-solutions/), CSCW 2025; survey n=363 and prototype comparison n=40 among information workers; workplace telemetry and privacy context limit transfer.

### Current assistants and adjacent products

- **S4 — ChatGPT Work, apps, WhatsApp and memory.** OpenAI, [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), updated 2026-08-04; [Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in); [1-800-ChatGPT/WhatsApp](https://help.openai.com/en/articles/10193193-1-800-chatgpt-calling-and-messaging-chatgpt-with-your-phone), living first-party help.
- **S5 — Microsoft Copilot Tasks.** Microsoft, [Using Copilot Tasks](https://support.microsoft.com/en-US/microsoft-copilot/using-copilot-tasks), living first-party help.
- **S6 — Perplexity Computer/tasks/projects.** Perplexity, [What is Computer?](https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer), updated 2026-07-16; [Scheduled Tasks](https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks), 2026-07-16; [Projects](https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces).
- **S7 — Claude Dispatch/Cowork/local access.** Anthropic, [Assign tasks from anywhere in Claude Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork); [Let Claude use your computer](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork); [Desktop vs web connectors](https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors), living first-party help.
- **S8 — Gemini connected/proactive work.** Google, [Use and manage Connected Apps](https://support.google.com/gemini/answer/13695044?hl=en-gb); [Schedule actions](https://support.google.com/gemini/answer/16316416); [Personalisation with Connected Apps](https://support.google.com/gemini/answer/16836988?hl=en), living first-party help.
- **S9 — Raycast tools/memory.** Raycast, [AI Extensions](https://manual.raycast.com/ai/ai-extensions), updated 2026-07-16; [Personalization](https://manual.raycast.com/ai/personalization); [AI on the OS](https://www.raycast.com/core-features/ai).
- **S13 — Notion Agent.** Notion, [Notion Agent](https://www.notion.com/help/notion-agent); [Custom Agents](https://www.notion.com/help/custom-agents); [iPhone Agents app](https://www.notion.com/help/notion-ai-app-for-ios), living first-party help.
- **S30 — OpenAI memory controls.** OpenAI, [Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq), living help; retention/deletion behaviour may change.
- **S31 — Claude memory.** Anthropic, [Use Claude's chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context), living help.
- **S32 — Gemini memory/privacy.** Google, [Past-chat memory](https://support.google.com/gemini/answer/16598469?hl=en); [Privacy Hub](https://support.google.com/gemini/answer/13594961?hl=en); [Connected Apps](https://support.google.com/gemini/answer/16836988?hl=en).
- **S33 — Copilot memory/privacy.** Microsoft, [Copilot privacy FAQ](https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot); [Manage Microsoft 365 Copilot memory](https://support.microsoft.com/en-US/Microsoft-365-Copilot/manage-copilot-memory-in-microsoft-365-copilot).
- **S34 — Apple Intelligence privacy.** Apple, [Apple Intelligence & Privacy](https://www.apple.com/legal/privacy/data/en/intelligence-engine/), first-party privacy notice.
- **S35 — User-owned knowledge storage.** Obsidian, [How data is stored](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) and [Sync security](https://obsidian.md/help/Obsidian%2BSync/Security%2Band%2Bprivacy), living first-party docs.
- **S60 — Replit checkpoints and rollback.** Replit, [Checkpoints and Rollbacks](https://docs.replit.com/references/version-control/checkpoints-and-rollbacks) and [Build with Agent](https://docs.replit.com/learn/build-with-agent), living first-party docs; specialist software-building context, not evidence for consumer assistant usability.
- **S61 — Arc/Dia browser context.** The Browser Company, [Arc Max](https://resources.arc.net/hc/en-us/articles/19335160678679-Arc-Max-Boost-Your-Browsing-with-AI) and [Dia Getting Started](https://www.diabrowser.com/getting-started), living first-party docs/marketing; feature and privacy claims were not independently tested.
- **S62 — Direct product observation log.** Read-only local UI inspection on macOS 26.2, 2026-08-05: Claude Desktop 1.24012.11, ChatGPT Atlas 1.2026.189.0 and installed Replit Desktop 1.1.5. No prompts, tasks, permissions or settings were changed; primary evidence for the logged controls only, with no public URL.

### Law, safety and security

- **S10 — Computer-use security.** Anthropic, [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) and [Mitigate prompt injection](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks), living first-party docs.
- **S11 — Agent/prompt-injection security.** OWASP, [LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and [AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html), community security guidance.
- **S12 — AI risk management.** NIST, [Generative AI Profile, NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), 2024-07; regulator/standards-grade risk guidance, not a product certification.
- **S27 — Irish DPC.** [Data Protection Principles](https://www.dataprotection.ie/en/dpc-guidance/guidance-principles-data-protection), [DPIAs](https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments), [Transparency](https://www.dataprotection.ie/en/organisations/know-your-obligations/transparency), living regulator guidance.
- **S28 — Data protection by design/default.** EDPB, [Guidelines 4/2019](https://www.edpb.europa.eu/documents/guideline/guidelines-42019-on-article-25-data-protection-by-design-and-by-default_en), final 2020-10-20.
- **S29 — Consent/AI data.** EDPB, [Guidelines 05/2020 on consent](https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en), 2020; [Opinion 28/2024 on AI models](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en), 2024-12-18.

### Device-native interaction and channels

- **S36 — Apple design/continuity/Siri.** Apple HIG, [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles), updated 2026-06-08; [Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding); [Handoff](https://support.apple.com/en-ie/102426); Apple, [Siri AI announcement](https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/), 2026-06-08—preview/marketing, not production validation.
- **S37 — Android/Material interaction.** Material 3, [States](https://m3.material.io/foundations/interaction/states/overview); Android, [Layout basics](https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-basics), living first-party docs.
- **S38 — Apple pairing security.** Apple, [Multipeer Connectivity](https://developer.apple.com/documentation/multipeerconnectivity), [Secure Enclave](https://developer.apple.com/documentation/cryptokit/secureenclave), [DeviceCheck/App Attest](https://developer.apple.com/documentation/devicecheck), living developer docs.
- **S39 — Android pairing security.** Android, [Companion Device Pairing](https://developer.android.com/develop/connectivity/bluetooth/companion-device-pairing), [Cross-device SDK](https://developer.android.com/guide/topics/connectivity/cross-device-sdk/overview), [Keystore](https://developer.android.com/privacy-and-security/keystore), first-party; Cross-device SDK documented as preview/not production.
- **S40 — Apple Live Activities.** Apple, [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities), living developer docs.
- **S41 — Android Live Updates.** Android, [Create Live Update notifications](https://developer.android.com/develop/ui/views/notifications/live-update), updated 2026-07-14.
- **S42 — WhatsApp Business.** WhatsApp, [Business Messaging Policy](https://whatsappbusiness.com/policy/) and Meta, [WhatsApp Cloud API](https://www.postman.com/meta/whatsapp-business-platform/documentation/wlk6lh4/whatsapp-cloud-api), living official policy/docs.
- **S43 — WhatsApp competition status.** European Commission, [Meta AI-provider access investigation](https://digital-strategy.ec.europa.eu/en/news/commission-opens-antitrust-investigation-metas-new-policy-regarding-ai-providers-access-whatsapp), 2025-12-04; [digital-sector competition news/interim measures](https://competition-policy.ec.europa.eu/sectors/digital-media-electronic-communications/latest-news_en), 2026-06-09.
- **S44 — Apple Messages routes.** Apple, [Messages for Business](https://support.apple.com/en-gb/102053), [Messages for Business privacy](https://www.apple.com/legal/privacy/data/en/messages-for-business/), [iMessage apps](https://developer.apple.com/imessage/), [Messages framework](https://developer.apple.com/documentation/messages), first-party.
- **S45 — RCS.** GSMA, [Universal Profile](https://www.gsma.com/solutions-and-impact/technologies/networks/rcs%20/universal-profile/); Google, [RCS for Business launch approval](https://developers.google.com/business-communications/rcs-business-messaging/guides/launch/launch-approval), living official docs.
- **S46 — Telegram.** Telegram, [Bots](https://core.telegram.org/bots), [Bot API](https://core.telegram.org/bots/api), [API terms](https://core.telegram.org/api/terms), living official docs/terms.
- **S47 — Apple Speech.** Apple, [Speech framework](https://developer.apple.com/documentation/speech), living developer docs.
- **S48 — Android Speech.** Android, [SpeechRecognizer](https://developer.android.com/reference/android/speech/SpeechRecognizer.html), living API reference.

### Capability, cost and open source

- **S49 — Current provider pricing.** OpenAI, [API pricing](https://developers.openai.com/api/docs/pricing); Anthropic, [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing); Google, [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), accessed 2026-08-05. Volatile list prices, excluding product costs.
- **S50 — Provider retention/ZDR.** OpenAI, [Your data](https://developers.openai.com/api/docs/guides/your-data); Anthropic, [API retention](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention); Google, [Gemini ZDR](https://ai.google.dev/gemini-api/docs/zdr). Feature-level exceptions matter.
- **S51 — Apple local models.** Apple, [Foundation Models](https://developer.apple.com/documentation/FoundationModels), [generation/task guidance](https://developer.apple.com/documentation/FoundationModels/generating-content-and-performing-tasks-with-foundation-models), [context management](https://developer.apple.com/documentation/foundationmodels/managing-the-context-window), living first-party docs.
- **S52 — Android local models.** Google, [ML Kit GenAI](https://developers.google.com/ml-kit/genai), [Prompt API setup](https://developers.google.com/ml-kit/genai/prompt/android/get-started), living first-party docs.
- **S53 — Open-weight licences.** Google, [Gemma terms](https://ai.google.dev/gemma/terms); Meta, [Llama 4 licence](https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE) and [use policy](https://github.com/meta-llama/llama-models/blob/main/models/llama4/USE_POLICY.md); Mistral, [Mistral 7B card](https://docs.mistral.ai/models/model-cards/mistral-7b-0-1); Qwen, [Qwen-Image repository](https://github.com/QwenLM/Qwen-Image). First-party artefact terms; legal review remains release-specific.
- **S54 — Batch processing.** OpenAI, [Batch API](https://platform.openai.com/docs/api-reference/batch/object); Anthropic, [batch pricing](https://platform.claude.com/docs/en/about-claude/pricing#batch-processing); Google, [Gemini Batch](https://ai.google.dev/gemini-api/docs/batch-api), living first-party docs.

### Research methods

- **S55 — Government research practice.** GOV.UK Service Manual, [User research](https://www.gov.uk/service-manual/user-research), [In-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews), [Recruitment](https://www.gov.uk/service-manual/user-research/find-user-research-participants), [Consent](https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research), [Participant privacy](https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy), living first-party practice guidance.
- **S56 — Inclusive evaluation.** W3C WAI, [Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/), living standards-body guidance; warns against generalising small samples.
- **S63 — Internal alpha decision gates.** Ground Zero, [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]], 2026-08-05; founder-authored internal constraints and proposed thresholds, not external evidence.

## UNRESOLVED QUESTIONS

1. Do non-technical Irish users prefer the compound workflow over Claude Dispatch/ChatGPT Work after a week, or only find the prototype more attractive?
2. Which one artifact class has repeated demand, an independently checkable contract and economics compatible with the founding plan?
3. Can pairing, scope and file retrieval pass the gates on real household/network/device conditions without Full Disk Access or founder support?
4. What exact mobile/desktop OS floor covers the first target cohort, and how often are local Apple/Android model routes actually available?
5. Which durable-memory categories reduce repetition enough to justify collection, and which should remain task-only forever?
6. What are the controller/processor roles, Article 6/9 bases, transfer mechanisms, retention windows and DPIA outcome for each research/alpha flow?
7. Can a cloud continuity layer meet the product promise without creating a misleading encryption/locality story or retaining excessive task content?
8. Which reversible external action, if any, is valuable and reliable enough for the paid-pilot approval test?
9. What happens to WhatsApp viability/economics if the European Commission interim measure or Meta policy changes?
10. What real task, retry, support and provider-cost distribution replaces the illustrative budgets after a concierge trial?
11. What trademark/domain/app-store conflicts apply to the working name, and can a name remain warm without implying a human service?
12. Does this evidence justify any further founder time once OpenHouse opportunity cost is explicitly logged?

## RESEARCH LIMITATIONS

- No participants were contacted and no customer, diary, usability, accessibility, willingness-to-pay or retention results are claimed.
- Competitor analysis used current first-party documentation, public surfaces and a narrow read-only authenticated UI observation of two installed products. No scripted task, pairing, permission, notification or recovery flow was executed; current Irish/EEA availability and the full direct-observation matrix must be completed before participant comparison.
- The charter requested separate ChatGPT and Claude master-synthesis runs. This report used Codex with independent parallel workstreams and current Anthropic/OpenAI/Google/Apple/Microsoft/regulatory sources; no separate Claude-family synthesis was available. This is a real independence limitation.
- Source pages and prices were current on 2026-08-05 but several products/policies are previews, staged rollouts or rapidly changing. The competitor/policy ledger needs quarterly refresh and immediate refresh before any channel or build decision.
- Numeric gates are recommendations or inherited Ground Zero decision rules, not external benchmarks. Passing them is necessary evidence for the next stage, not proof of market success or safety at scale.
- This is product research, not legal, security or accessibility certification. DPIA, counsel, penetration testing and manual assistive-technology evaluation remain required before real-data launch.

## CONNECTED VAULT NOTES

- [[briefs/2026-08-05-managed-agent-consumer-wedge]]
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-personal-assistant-research-charter]]
- [[companies/cara]]
- [[project_state/cara]]
