---
title: Donworth iMessage owner-desk validation wedge
status: validation-gated
created: 2026-09-01
source: Ground Zero product decision plus Photon and Hermes first-party documentation
company: donworth-ai-solutions
---

# Donworth iMessage owner-desk validation wedge

## Bounded proposal

Treat the decided iMessage route as a narrow **owner desk** validation wedge for Donworth Studio: one verified SME owner reaches the same desktop agent while away from the Mac for current information, reversible changes, approvals, completed-work receipts and reminders. This is a commercial-validation layer on [[decisions/2026-09-01-donworth-imessage-first-remote-control-channel]], not a new runtime, separate assistant, consumer iPhone app or approved public offer.

Photon presents its Spectrum platform as infrastructure for deploying and managing AI-powered agents across messaging channels.[1]

The new evidence makes a low-cost test possible but does not prove demand. Hermes documents Photon as a managed, persistent-connection iMessage channel with a loopback sidecar, pairing or allowlisting, a free shared-number pool and a dedicated-number Business tier; the free tier is its recommended starting point.[5] Photon currently advertises Free for up to 10 users, Pro at USD $25/month for up to 100 users on managed shared numbers, and Business at USD $250 per line per month for managed dedicated numbers and unlimited users subject to its auto-scale condition.[2]

**Inference:** the free/shared tier is suitable for testing the already bounded three-person alpha without buying a line. If a stable business identity proves necessary, the fixed dedicated-line cost points toward a premium per-business managed offer rather than a cheap per-user consumer feature. Neither conclusion authorises provider activation, invitations, spending or public pricing.

## Evidence ledger

| Question | Status | Evidence | Consequence |
|---|---|---|---|
| Can Donworth test the channel without a Mac relay or public webhook? | **Verified capability** | Hermes describes a managed Photon connection over a persistent gRPC stream and supervised loopback sidecar, with no public URL or tunnel required.[5] | Keep the first proof inside the existing single-writer Donworth runtime; do not build a second relay or iPhone app. |
| Is there a no-spend alpha path? | **Verified vendor offer, not activated** | Photon lists a Free managed-shared plan for up to 10 users; Hermes describes the shared pool as free and recommended for initial use.[2][5] | The three planned testers fit the published user-count envelope, but external invitations and real messages remain approval-gated. |
| Can every user see one stable business number? | **Paid gate** | Photon lists managed dedicated numbers only on Business at USD $250 per line per month; shared plans may allocate different numbers to different users.[2][5] | Do not promise one branded line until exact commercial terms, tax, capacity and identity behaviour are accepted. |
| What message-volume limit can Donworth promise? | **Official-source conflict** | Photon’s pricing page says the Free plan has unlimited daily messages, while the current Hermes Photon guide documents a free quota of 5,000 messages per server per day and 50 new-conversation initiations per shared line per day.[2][5] | Use the lower documented limits for planning and obtain direct provider confirmation before any capacity promise. |
| May Donworth bundle or resell Photon access? | **Uncleared** | Photon’s Terms prohibit reselling, sublicensing or redistributing access without written authorisation and place consent, opt-out and messaging-compliance duties on the user.[3] | Written commercial permission and a responsibility map are gates before any paid customer offer. |
| Is the data boundary ready for Irish SME use? | **Uncleared** | Photon’s Privacy Policy describes account, usage, device, network, log and user-content collection; service-provider sharing; US/international transfers; and deletion or anonymisation within 30 days after account deletion, subject to stated exceptions.[4] | Require a message-level data-flow map, retention detail, subprocessors, transfer safeguards and contractual/DPA review before sensitive customer use. |
| Is delivery guaranteed? | **No** | Photon’s Terms disclaim guaranteed uninterrupted service, message delivery, throughput and carrier acceptance.[3] | Donworth must show truthful offline, late and failed receipts and must not position iMessage as the sole emergency or safety-critical channel. |

## Falsifiable assumption

An owner-led SME will repeatedly choose iMessage over opening the desktop app when away from the Mac, and the value of completed, receipted remote work will be high enough to support a premium managed business bundle if a dedicated line is required.

Disprove or pause the wedge if:

- any unauthorised sender, cross-profile disclosure, duplicate action or unconfirmed consequential action occurs;
- the controlled setup cannot meet the existing truthful-readiness contract;
- fewer than two of the three testers create two genuine away-from-desktop uses after the scripted tasks; or
- neutral price interviews show no willingness to pay enough to absorb the published dedicated-line cost and Donworth support burden.

## Smallest validation test

### Stage 0 — synthetic acceptance, no external side effect

Wait for the existing Donworth single-writer runtime and private-alpha security repairs to pass exact-artifact Forge and Vera review. On that accepted candidate, run synthetic Photon-compatible tests for sender binding, current-data reads, reversible changes and receipts, confirmation-gated actions, reminder create/edit/cancel/due delivery, restart idempotency, offline recovery and Telegram coexistence. Any identity, replay, duplication or secret-leakage failure stops the test.

### Stage 1 — three-person free/shared alpha, separately approved

Only after Sam approves the invitations and real messages:

1. Use the published Free/shared tier; buy no dedicated line.
2. Pair the three already bounded testers to separate Donworth identities.
3. Give each tester five neutral tasks: one current-information read, one reversible change, one confirmation-gated request, one reminder lifecycle and one completed-work receipt.
4. Run for seven days and record setup time, task success, recovery failures, duplicate/late actions, away-from-desktop repeat use and support effort.
5. End with behaviour-first interviews: what they used while away, what they would otherwise have done, what failed, and what they have actually paid for comparable business software or support. Ask willingness to pay only after recent behaviour is established.

**Pass to a paid-line discovery only if** the security gates remain clean, the channel produces repeat away-from-desktop use for at least two testers, and the commercial interviews support a margin above the exact verified provider and support costs. Otherwise keep iMessage as a convenience feature or stop the wedge.

## Downside and constraints

- Shared numbers weaken a single branded identity; a dedicated line introduces a material fixed monthly cost.
- The initial route is iMessage-specific and excludes Android-first users from the same familiar surface.
- Photon is a third-party dependency with mutable pricing, platform rules and delivery behaviour.
- General policy pages do not establish the exact message-content path, retention configuration, processor terms or SME contract required for launch.
- Donworth’s currently installed default runtime and private-alpha broker are not accepted; testing demand on that base would confound product value with known reliability and security failures.
- The older Aire consumer research correctly warns that Apple Messages for Business is not proof of a programmable personal iMessage route. This Donworth provider experiment must not be generalised into Aire’s consumer architecture or marketed as an official Apple integration without separate evidence.

## Approval boundary

This brief authorises no provider activation, account creation, real message, tester invitation, paid or dedicated line, commercial commitment, customer promise, production mutation, signing, distribution or outreach. Those remain with Sam. Forge owns substantial implementation in an isolated worktree; Vera must independently verify the exact artifact before any real-user test is recommended.

## Open questions before a paid offer

1. Will Photon give Donworth written authorisation to bundle or resell the service?
2. What exact contract, tax, support, auto-scale and number-portability terms apply to a dedicated line?
3. Where are message bodies and attachments processed and retained, by which subprocessors, and under what DPA and international-transfer terms?
4. Can a dedicated identity survive account changes, provider migration and service interruption without confusing customers?
5. Does repeat away-from-desktop use survive after the scripted novelty week?

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[companies/donworth-ai-solutions]] — parent company and commercial context
- [[project_state/donworth-studio]] — current implementation and acceptance state
- [[decisions/2026-09-01-donworth-imessage-first-remote-control-channel]] — product and transport decision
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]] — three-tester and spending boundary
- [[items/donworth-publishable-and-outreach]] — future proof and commercialisation path
- [[briefs/2026-08-05-personal-assistant-research-first-return-audit]] — consumer Apple-channel evidence boundary

## Sources

[1] https://photon.codes — Photon — agent messaging infrastructure
[2] https://photon.codes/pricing — Photon pricing
[3] https://app.photon.codes/terms-of-service — Photon Terms of Service
[4] https://app.photon.codes/privacy-policy — Photon Privacy Policy
[5] https://hermes-agent.nousresearch.com/docs/user-guide/messaging/photon — Hermes Agent — Photon iMessage

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-personal-assistant-research-first-return-audit]]
- [[briefs/2026-09-03-donworth-hybrid-privacy-boundary-receipt-benchmark]]
- [[companies/donworth-ai-solutions]]
- [[context/business-opportunities-moc]]
- [[decisions/2026-08-31-donworth-private-alpha-openrouter-budgets-and-credential-boundary]]
- [[decisions/2026-09-01-donworth-imessage-first-remote-control-channel]]
- [[items/donworth-publishable-and-outreach]]
- [[project_state/donworth-studio]]

