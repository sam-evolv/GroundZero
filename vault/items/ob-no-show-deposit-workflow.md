---
id: ob-no-show-deposit-workflow
company_id: openbook
domain: operations
title: Automate OpenBook deposits and no-show prevention
rationale: No-shows are the clearest churn driver, and the current workflow still needs manual reminders and follow-up.
council_note: Scheduling and revenue-protection pass · Effort M
effort: M
impact: 88
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. No OpenBook live-system change was checked in this sync."
---

## What the automation does
Adds deposit or pre-authorisation steps at booking, then runs the reminder sequence automatically. It should confirm the visit, enforce the venue policy, send reminders, and handle refunds or releases cleanly when the booking is completed.

## Opportunity size
Very high. No-shows are already a top churn complaint and a direct revenue leak. A workflow that reduces no-shows, protects venue margin, and removes manual follow-up has obvious commercial value because it improves both retention and booking quality.

## Technical approach
- Capture the venue policy at booking time.
- Create a deposit or pre-authorisation using Stripe.
- Trigger reminder messages before the booking window.
- Release or refund the hold after completion.
- Store policy exceptions so high-trust or low-ticket bookings can bypass the hard deposit path.
- Keep an auditable event trail for venue support and dispute handling.

## Risks
- Deposits can reduce conversion if introduced too aggressively.
- Payment edge cases and refund handling need to be bulletproof.
- Venue policies may vary enough that the workflow needs flexible rules from day one.

## Effort
M. The policy logic, payment state handling, and reminder orchestration will take the bulk of the time.

## Market timing
Timely. Venues are increasingly willing to adopt revenue-protection mechanics, especially when no-shows are already hurting them and booking software is expected to do more of the enforcement automatically.

## Connects to

- [[items/ob-no-show-deposits]] — this workflow automates the deposit wedge
- [[items/ob-cancellation-waitlist]] — same payment/reminder infrastructure
- [[items/ob-venue-health-radar]] — reducing no-shows improves health scores
- [[goals/ob-retention]] — primary feeding goal
- [[companies/openbook]] — parent company
- [[project_state/ob]] — live status

## Recommendation
Treat this as the operational implementation path for the no-show deposit wedge. It is strong enough to become a project once the venue policy and payment rules are validated.
