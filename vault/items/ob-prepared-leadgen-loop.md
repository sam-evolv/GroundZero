---
id: ob-prepared-leadgen-loop
company_id: openbook
domain: bizdev
title: OpenBook prepared lead-generation loop
rationale: The old manual approach of building bespoke demo sites took roughly 20 minutes each, produced poor reply rates, and burned cloud subscriptions. A constrained, mostly automated loop that prepares ten review-ready leads per day would restore acquisition leverage without the manual cost or the risk of impersonating Sam.
council_note: New idea from 24 July reset gap analysis · Effort M · gated behind portal and billing
effort: M
impact: 74
state: proposed
is_one_thing: false
source: ground-zero-incubation 2026-07-24
run_date: "2026-07-24"
created_at: "2026-07-24T06:32:00+01:00"
updated_at: "2026-07-24T06:32:00+01:00"
sync_status: "Created from the 2026-07-24 OpenHouse/OpenBook reset decision. Existing Supabase plus Claude Code discovery infrastructure noted but not re-verified in this incubation run."
---

## Opportunity size
Medium and leverage-shaped. OpenBook needs a repeatable acquisition engine, but only one that costs a few minutes of founder time per day rather than a full evening. If a prepared-lead loop reliably produces ten review-ready candidates daily and each needs only five to ten minutes to send, it converts a previously loss-making manual grind into a low-cost, high-frequency top-of-funnel. Even a modest reply-to-close rate compounds against a standardised €79/month product.

## Technical approach
- Reuse the existing Supabase plus Claude Code workflow that searches businesses by sector and location, researches them, and scores web-presence need and ability to pay.
- Generate each candidate site from a single constrained standard format, not a bespoke build. This is the change that kills the 20-minutes-per-site cost.
- Auto-draft outreach copy per lead, tailored from the research but templated.
- Output each lead into a sheet with a direct Instagram link and a copy-paste-ready message.
- Keep the Instagram DM strictly manual. The system prepares the lead, link and message; it must never impersonate Sam or auto-send.
- Prove the loop with one small end-to-end pilot slice before building a larger agent, to confirm the existing infrastructure supports it cheaply.

## Risks
- Rebuilding the expensive manual pattern in disguise. The guardrail is the single constrained site format and a hard cost ceiling per lead.
- Poor reply rates persisting despite automation, meaning the bottleneck was message quality or targeting, not speed. The pilot must measure reply rate, not just throughput.
- Platform risk if any part looks like automated DMing. Manual send is non-negotiable.
- Cloud subscription burn creeping back up if generation is not cost-capped.

## Effort
M. The discovery and scoring infrastructure largely exists. The new work is the constrained site generator, templated outreach copy, and the review sheet with links and messages. Bounded by starting with a small pilot slice.

## Market timing
Neutral to favourable. Automated research and drafting are cheap and capable now, which is exactly what makes the constrained loop viable where the manual version was not. No external clock forces this; it is gated behind revenue.

## Connects to
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] — scopes this as a follow-on, not a first move
- [[briefs/2026-07-24-openhouse-openbook-reset]] — full context and the ten-leads-per-day target
- [[items/ob-client-self-edit-portal-billing]] — the prerequisite commercial unblock
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status
- [[goals/ob-supply]] — grows venue supply


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[items/ob-client-self-edit-portal-billing]]

## Recommendation
Do not activate until the self-edit portal and Stripe charging path are moving. Then run a single small end-to-end pilot to prove the existing infrastructure produces cheap, review-ready leads with an acceptable reply rate before committing to a larger agent build. Success metric is reply rate per prepared lead, not sites generated.
