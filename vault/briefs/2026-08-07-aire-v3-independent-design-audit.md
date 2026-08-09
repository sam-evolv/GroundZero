---
title: Aire v3 independent design audit
status: reviewed
created: 2026-08-07
artifact: Aire conversational interface (3).zip
sha256: 70469b8ab0b2a3cee5b0a8a4f5e8da186743be5990ef48172ca5ce3646463560
source: Direct extraction, source inspection, WebKit rendering and interaction testing
---

# Aire v3 independent design audit

## Verdict

Aire v3 is the first prototype in this line that should be treated as a credible mobile product architecture and visual source of truth rather than a conceptual direction.

The core product is now conversation-led, not conversation-only:

- Chat is the handover and collaboration surface.
- Work is the persistent responsibility, approval, progress and outcome surface.
- Profile is secondary and governs context, learning, autonomy, connections, devices, privacy and account controls.
- One delegated job persists across Chat and Work rather than becoming separate messages and dashboard records.

The mobile architecture and visual direction are substantially settled. They are not yet an implementation-ready specification for desktop, production data, accessibility or truthful runtime mapping.

## What was inspected directly

- Safely extracted the eight-entry archive.
- Confirmed that `Aire v4.dc.html` is the previous build and `Aire.dc.html` is a genuine newer revision.
- Compared the current 1,909-line prototype against the previous 1,897-line build.
- Served the current prototype locally.
- Rendered it in WebKit at 393 × 852 and 1440 × 1000.
- Tested keyboard activation from Chat into Work.
- Tested Work navigation, payment detail, contextual return to Work, Section 5 detail, secure takeover, Profile and learning evidence.
- Captured the reviewed states under [[assets/aire-v3-review-2026-08-07]].

## What is now strong

### Chat

Chat feels calm, familiar and premium. It behaves like a conversation rather than a runtime console. The morning handoff, compact work card and contextual Work link preserve conversational continuity without forcing all responsibility into a long transcript.

The composer, attachment, voice and send controls fit the real 393 × 852 viewport without obscuring the latest visible content. The revised controls have 44 px hit targets.

### Work

Work solves the failure of the earlier Doing and Done concepts. It is not an agent dashboard. It answers three ordinary questions:

- What needs me?
- What is moving?
- What finished?

The initial summary is concise. Filters, counts and status language are understandable without Hermes vocabulary. Rows expose the next decision and consequence rather than raw execution details.

### Consequential actions

The Murphy Surveys payment detail is unusually strong. It states that nothing was charged, explains why the payment failed, records why Aire stopped, shows the attempted amount and card, and offers three explicit recovery paths.

The revised autonomy model is internally consistent: every payment requires approval, whatever the amount. The former contradiction between standing spending limits and universal payment approval has been removed.

### Secure takeover

The Section 5 takeover communicates the control boundary clearly:

- Aire is not watching.
- Only the identity step is exposed.
- Nothing typed there is recorded.
- Work resumes from the exact hand-back point.

This is a useful product pattern for MyGovID, 2FA, CAPTCHAs, payment confirmation and other human-only steps. The real implementation must be backed by truthful browser state and actual observation suspension.

### Profile and continuity

Profile remains secondary to Chat and Work. It presents personal context, learning, autonomy, connected services and devices as understandable user controls rather than memory graph administration.

The revision removed several invented people, counts, investor claims, session claims and subscription metrics. It also consolidates behavioural preferences under one “How Aire works for you” surface.

### Visual system

The accepted visual system is coherent:

- Warm ivory surfaces
- Petrol-teal primary action and identity colour
- Muted amber for attention
- Newsreader for editorial hierarchy
- Karla for interface text
- Restrained borders, shadows and corner radii
- Low motion and high content legibility

The result feels like a premium personal service rather than generic AI software.

## Issues that remain

### 1. Production data integrity

The prototype still contains many specific-looking fixtures that must never be mistaken for verified user data or live service state, including:

- Payment cards, references and timestamps
- A masked phone number
- Murphy Surveys payment and booking details
- The Wilder booking details
- Council references and Section 5 submission states
- James Corrigan and Barry Walsh workflow details
- OpenHouse waitlist and deck figures
- Property costs, quotations and monitoring conditions
- Connection, device and memory counts

Some may resemble real context. None should enter production unless grounded in an authoritative source. Demo fixtures need an explicit namespace and must never leak into the real memory or audit trail.

### 2. Desktop remains undesigned

At 1440 × 1000 the prototype is a centred 393 × 852 phone mock. It does not define:

- Desktop conversation width and history handling
- Optional conversation plus live-work split
- Persistent contextual browser or document workspace
- Keyboard-heavy navigation
- Resizable panes
- Desktop notifications and background-work return points

The mobile design should remain authoritative while a desktop adaptation is designed separately.

### 3. Voice remains a symbol, not a designed experience

The composer includes a microphone control, but this artifact does not define or prove realtime voice. It does not resolve listening and speaking states, latency, interruption, turn detection, transcript correction, background noise, Bluetooth, privacy, voice handoff into Work, or continuity between spoken and written conversation. Voice remains a separate first-class design and engineering workstream.

### 4. The learning deep link is too broad

“Show me the evidence” successfully opens “How Aire works for you,” but it should land on the exact Irish-English proposal with:

- The three cited corrections
- Why Aire interpreted them as a pattern
- Confidence and scope
- Accept, edit scope, reject and forget controls
- A clear statement that nothing becomes a standing instruction without approval

The broader preference ledger should remain available after the specific decision.

### 5. Accessibility is improved but incomplete

Verified improvements:

- 44 px targets for key controls
- Semantic Chat and Work buttons
- Keyboard activation on custom role buttons
- Focus-visible styling
- Polite live-region toast

Remaining work:

- Add a document language.
- Use complete tablist, tab and panel relationships with `aria-controls` and managed focus.
- Give sheets, detail overlays and takeover states appropriate dialog or application semantics and focus trapping.
- Add a reduced-motion mode for breathing and transition animations.
- Test VoiceOver reading order and labels on a real iPhone.
- Run automated contrast and accessibility checks against production components rather than the Design Composer runtime.

### 6. Runtime truth contract remains open

The design depicts browser work, ongoing jobs, approvals, payment attempts, files, scheduled work, connected services and device state. Implementation must map each state to authoritative Hermes events. It must not simulate:

- Browser activity
- Payment outcomes
- Progress timing
- Connected-account availability
- Mac online status
- File generation
- Notifications
- Task continuation after the app closes

The presentation contract should define which Hermes event creates, updates and closes every visible state.

### 7. Visual prototype limitations

- The prototype loads Google Fonts remotely.
- A missing favicon generated the only console error observed.
- Dark mode is not represented.
- The Work list is intentionally dense and requires scrolling; the bottom tab bar visually cuts into the next row at the initial scroll position, although the content remains reachable.
- The browser and takeover views are illustrative, not a verified embedded-browser implementation.

## Recommended next sequence

1. Freeze v3 as the mobile visual and interaction baseline.
2. Replace every specific fixture with a documented demo-data map or verified user source.
3. Write the Hermes-to-Aire state and event contract.
4. Design the desktop adaptation, including optional contextual live work.
5. Build one vertical slice: Chat delegation → persistent Work object → approval → verified outcome → return to Chat.
6. Verify that slice with real Hermes events, VoiceOver, keyboard, safe-area and app-background tests.
7. Only then expand to takeover, scheduling, files, memory and voice.

## Connected vault notes

- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[project_state/personal-agent]]
- [[companies/personal-agent]]
- [[imports/2026-08-07-chatgpt-personal-agent-design-consultancy]]
- [[context/index]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-07-personal-agent-interface-live-work-and-time-given-back]]
- [[companies/personal-agent]]
- [[context/index]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[project_state/personal-agent]]

