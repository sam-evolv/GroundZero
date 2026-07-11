---
title: Cara success strategy
created: 2026-07-11
status: recommended product strategy
---

# Cara success strategy

## Verdict

Cara is a strong idea with a credible wedge, but the current vision is much broader than the first product should be. Its best chance of success is to begin as the easiest, most trustworthy way for an Irish trades business to stop losing valuable calls—not as a general AI employee, personal assistant, app, or autonomous business operating system.

The long-term vision can remain: callable + memory + actions + Irish identity. The day-one promise should be narrower and provable:

> **Cara answers when you can't, captures the job properly, and gets it into your diary.**

Or more commercially:

> **Never lose another good job because you couldn't answer the phone.**

## The product thesis

Cara's real job is not “voice AI.” It is revenue recovery and mental relief for owner-operated businesses. The owner buys three outcomes:

1. Important calls are answered.
2. The facts are captured accurately and turned into the next action.
3. The owner can stop monitoring the phone without losing control.

The phone number is the interface. WhatsApp/SMS is the control surface. The app is optional proof, history, and approvals—not the daily workspace.

## First ideal customer

Start with one narrow vertical: Irish plumbers/heating engineers, electricians, locksmiths, or similar mobile trades where:

- the owner regularly cannot answer while working or driving;
- one recovered call can be worth hundreds or thousands of euro;
- callers need urgency triage and structured fact capture;
- bookings and callbacks are understandable;
- existing reception is voicemail, a spouse, or interrupted work.

Avoid healthcare first despite higher willingness to pay: sensitive data, triage risk, integrations, and compliance increase the cost of learning.

## The first product

### Caller experience

- Answers on divert-on-no-answer or out-of-hours.
- Warm, brief statutory disclosure.
- Knows the business, service area, hours, and emergency policy.
- Captures name, number, location/Eircode, issue, urgency, and preferred time.
- Reads back critical fields.
- Books only within owner-approved rules; otherwise promises a callback rather than bluffing.
- Sends a concise confirmation text.
- Falls back to SMS for Eircodes/names when audio is poor.

### Owner experience

- No app required.
- After each call, one WhatsApp/SMS summary:
  - who called;
  - what they need;
  - urgency;
  - location;
  - suggested next action;
  - one-tap/one-word actions: call, book, decline, ask Cara to clarify.
- Owner changes rules by messaging Cara naturally.
- Daily digest only when useful.
- Plain-English audit trail.

### Trust design

- Never invent price, availability, capability, or commitment.
- Money and quotes always require approval.
- Escalate uncertainty immediately.
- Human fallback is a feature, not failure.
- Every call shows what Cara heard and what she did.

## Make onboarding radically easy

Target: live in 10 minutes, useful with zero integrations.

1. Enter business name and mobile number.
2. Cara imports public website/profile/review information.
3. Owner receives a one-page WhatsApp summary: “Here is what I know—reply with corrections.”
4. Owner chooses a voice from three short business-specific samples.
5. Cara asks five spoken questions: services, area, hours, emergency handling, what never to promise.
6. Owner taps the carrier divert code.
7. Cara calls the owner's phone for a rehearsal.
8. Shadow/test mode runs until owner says “go live.”

No calendar, accounting, inbox, app install, or card wall is required before the first value moment.

## Build strategy

### Principle: buy speed, own the moat

Do not make self-hosted telephony/voice infrastructure the first company-defining challenge. For M1 and the first pilots, benchmark a managed voice path against Pipecat/LiveKit. Use whichever wins the gauntlet on quality, latency, reliability, and build speed. Keep Cara's profile schema, task state, memory, compliance rules, evals, and action log owned and provider-independent.

### Architecture layers

1. **Mouth:** replaceable telephony/ASR/voice runtime.
2. **Policy and orchestration:** Cara-owned rules, task states, approvals, compliance, fallbacks.
3. **Memory:** structured customer/business facts + calls + open threads.
4. **Action layer:** typed booking, messaging, callback, and later financial tools.
5. **Gauntlet:** regression suite for accents, fields, turn-taking, disclosure, and failure handling.

The proprietary asset is not a prompt. It is the combination of Irish call data, correction loops, business profiles, vertical policies, and evals.

## First 90 days

### Days 1–14: prove the call

- One +353 number.
- 50 internal/test calls covering noise, interruptions, accents, names, Eircodes, urgency, and ambiguity.
- Compare at least two mouth stacks.
- Record latency, field accuracy, task completion, cost, and caller frustration.
- Get one call good enough to show publicly.

### Days 15–30: three concierge pilots

- Three trades businesses, preferably warm network introductions.
- Sam manually configures each business behind the scenes.
- Divert-on-no-answer only: low-risk adoption.
- Review every call daily.
- Fix policies and evals from real failures.
- Charge a founding amount or obtain a written commitment to pay after the trial; free praise is weak validation.

### Days 31–60: productise the repeated loop

- Self-serve business ingestion.
- WhatsApp/SMS owner summaries and replies.
- Calendar integration only if pilots repeatedly ask for it.
- Business-level call rules and emergency routing.
- Simple ROI report: calls caught, qualified leads, bookings, estimated/reported value.

### Days 61–90: sell the wedge

- 10–20 paying trade customers in one geography.
- Referral loop: every owner can send a demo number to another owner.
- Public demo line using a fictional/consenting trade business.
- Proof-led landing page using real recordings and metrics.
- Decide whether to deepen trades or open the second vertical only after retention evidence.

## Metrics that matter

- Time from signup to successful rehearsal call.
- Calls caught that would otherwise be missed.
- Qualified opportunities captured.
- Bookings or callbacks completed.
- Revenue recovered/attributed per customer.
- Critical-field accuracy after confirmation.
- Escalation/fallback rate and whether fallback was graceful.
- Owner correction rate.
- Weekly active usage via calls/messages—not app opens.
- Pilot-to-paid conversion and 30/60/90-day retention.
- Gross margin per account.

## What to defer

- Full three-screen native app.
- Personal-assistant/general-knowledge positioning.
- Errand desk and autonomous outbound calling.
- Invoice chasing, payments, and accounting integrations.
- Multiple vertical packs.
- Staff roster and agent network.
- Self-hosting every model/provider.
- Complex dashboards and settings.

These are expansion layers after Cara reliably catches and advances valuable work.

## Positioning improvement

“Hire your first employee for €3/day” is emotionally strong but can create unrealistic expectations and comparison with a real employee. Use it as campaign language after proof. The clearest initial promise is outcome-based:

- **Your phone gets answered when you can't.**
- **Never lose another good job to voicemail.**
- **Cara catches the call, gets the details, and tells you what matters.**

Avoid leading with the word AI, but do not obscure the legally required automated-assistant disclosure or make deceptive human-equivalence claims.

## Pricing hypothesis

Do not anchor too low before understanding support and call costs. Test:

- founding pilots: €49–€99/month with hands-on setup;
- standard trade plan: approximately €99–€149/month with included minutes;
- value framing against one recovered job, not a receptionist salary alone;
- transparent overage/fair use without credits or mid-task interruptions.

The price should preserve enough margin to provide excellent onboarding and support while the product learns.

## Success rule

Cara wins if a tradesperson can say:

> “I tapped one code, tested her once, and stopped worrying about the phone. She caught two jobs this week and didn't promise anything stupid.”

Everything that helps produce that sentence is Phase 1. Everything else waits.

## Connected vault notes

- [[companies/cara]] — company/project context
- [[project_state/cara]] — live state
- [[items/cara-phase0-m1-live-call]] — active build milestone
- [[briefs/cara-starter-product-spec]] — full starter-spec synthesis
- [[context/solo-founder-era]] — strategic operating lens
- [[context/business-opportunities-moc]] — opportunity map
