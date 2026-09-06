---
title: Make iMessage the first remote Donworth control channel
status: decided
created: 2026-09-01
source: Sam explicit product direction
company: donworth-ai-solutions
---

# Make iMessage the first remote Donworth control channel

## Decision

Donworth Studio’s initial macOS product must include iMessage as a first-class external conversation and control surface. A verified owner should be able to use the familiar Messages interface while away from the desktop to ask Donworth for current information, request safe changes, receive completed work or approvals and schedule reminders. This removes the need to build an iPhone app for the initial product.

Simplicity and friction removal control the implementation. iMessage is another surface of the same Donworth identity, profile, context, task state and gateway-owned runtime; it is not a separate assistant or backend.

## Initial product contract

1. **Current information:** an authorised inbound message reaches the same Donworth profile and returns a concise answer from current authoritative runtime data. Offline, unavailable or stale state is labelled rather than fabricated.
2. **Safe changes:** reversible low-risk changes return a precise receipt and correction or undo path. Consequential changes such as sending to third parties, deleting, purchasing, publishing, or changing account/security state require explicit confirmation showing the exact effect.
3. **Reminders:** an explicit request to “remind me” authorises one bounded scheduled iMessage to the verified originating or home recipient. The user can view, edit and cancel it. Delivery is exactly once across restart; downtime produces a truthful late or failed receipt rather than duplicate bursts.
4. **Meaningful outbound updates:** completed long-running work, approvals and material failures may return to the verified thread. Routine progress and engagement messaging remain quiet.
5. **No initial iPhone app:** the iPhone uses Apple Messages as the remote client; Donworth’s initial packaged application remains desktop-first.

## Transport decision

Use Hermes’ existing **Photon iMessage** adapter as the primary low-friction route. On 1 September 2026, live host readback showed Photon already provisioned for Sam, with an assigned iMessage line, stored project credentials, required Node sidecar dependencies and a sidecar listening on loopback only; telemetry was off.

Photon avoids making the customer run BlueBubbles, expose a webhook, manage ports, use a second Apple ID or keep a separate Messages relay configured. BlueBubbles remains an optional self-hosted fallback, not the default product requirement.

The normal setup experience is deliberately narrower: **Settings → iMessage → mobile number → Connect**. The customer never sees or enters project IDs, provider login, sidecars, ports, tokens, bridge details, Apple IDs, BlueBubbles configuration, first/last name, email or terminal commands. Donworth performs account-bound provider provisioning and allowlisting behind the scenes; provider/dashboard credentials stay server-side or in protected service storage and never enter the distributed Desktop package.

If Photon’s first-contact rule makes a user action unavoidable, the only extra step is one plain **Open Messages and send** action with a pre-addressed, prefilled one-time pairing message. The user must not copy a code, visit a dashboard or complete browser device login. Treat that message as single-use number-ownership verification and bind it only to the authenticated Donworth account/profile.

The healthy path should reach truthful **iMessage ready** within 60 seconds of Connect under controlled provider conditions. Show only ordinary-language **Connecting**, **Ready**, **Needs your message**, **Offline** and **Couldn’t connect** states, with retry; never infer readiness from stored configuration alone. Ready exposes one primary **Message Donworth** action plus secondary Change number and Disconnect/Revoke controls. Phone numbers must be masked outside the input, excluded from logs/evidence and handled idempotently across retry, callback delay and restart.

Photon’s shared/free line cannot initiate a conversation with a new recipient until the recipient messages first. The first message is therefore part of onboarding. A stable dedicated business line, provider terms and pricing remain unapproved commercial gates and must be checked before a public SME promise.

## Security and privacy boundaries

- One gateway and one state authority; messaging transports never launch a competing assistant runtime.
- Bind each sender to an explicitly authorised Donworth identity/profile. Unknown senders create no work.
- Deduplicate by stable message and task identifiers; prevent replay, duplicate replies and cross-thread/profile leakage.
- Channel and provider secrets stay outside source, packages, screenshots, logs and receipts.
- No message-history or contacts access is implied by enabling conversation.
- No arbitrary autonomous contact or outbound marketing.
- Keep Photon’s sidecar and local control paths loopback-only by default.
- A real self-message, paid/dedicated line, canonical installation, signing, deployment and distribution remain separately approval-gated.

## Acceptance

The exact packaged macOS candidate must pass synthetic end-to-end Photon-compatible tests for authorised conversation, current-data reads, safe changes and confirmations, reminder create/edit/cancel/due delivery/restart idempotency, cross-surface continuity, offline recovery, Telegram coexistence, one-writer runtime and zero secret leakage. Vera must independently reproduce those behaviors against exact hashes before the candidate is called install-ready.

A later real Apple Messages self-message is a separate user-surface gate after Sam approves the protected local setup and test send.

## Consequences

- Install-readiness now includes Forge task `t_426c6488` and Vera review `t_af2ec80c` after the gateway-owned base package/review chain.
- Forge should not build a separate iOS app for the initial product.
- Product simplification should preserve full runtime capability while making iMessage onboarding and daily use familiar and non-technical.
- Windows-only customers cannot use a Mac-hosted BlueBubbles path; Photon is the cross-host managed route being evaluated for the initial SME experience.

## Task-graph correction — 2 September 2026

The product decision above remains active, but the originally recorded delivery task IDs are historical. Live Kanban readback shows `t_426c6488` and `t_af2ec80c` ended terminally in the superseded recovery chain. Gateway-only package/runtime tasks `t_9daf607a` and `t_5d12b6e5` are now complete, with independent acceptance of exact unsigned `app.asar` `8a32d971e197ad9501c4b27ca372c1303800888b854190758ed0139c21620ab8` subject to pre-distribution disposition of GHSA-g8qq-57p8-ggw5. The actual Photon-first iMessage implementation/review chain is now `t_a442b6c6` → `t_0230ee19`; the live task explicitly preserves Photon as the sole approved messaging authority and forbids BlueBubbles/second authority. No accepted iMessage implementation or real Apple Messages exercise is current, and no installation or release action is authorised.

## Connected vault notes

- [[project_state/donworth-studio]] — current implementation and acceptance state
- [[companies/donworth-ai-solutions]] — parent company context
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]] — tester identity, provider and budget boundary
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — evidence and delivery standard
- [[context/agentic-value-creation-mission]] — capability adoption and approval boundaries

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-09-01-donworth-imessage-owner-desk-validation-wedge]]
- [[companies/donworth-ai-solutions]]
- [[context/agentic-value-creation-mission]]
- [[context/index]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]]
- [[project_state/donworth-studio]]

