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
updated_at: "2026-06-24T17:02:14Z"
---

## What the automation does
Adds deposit or pre-authorisation steps at booking, then runs the reminder sequence automatically. It should confirm the visit, enforce the venue policy, send reminders, and handle refunds or releases cleanly when the booking is completed.

## Tools and APIs
- Stripe for deposits or pre-authorisations
- Calendar integration for booking state
- Email or SMS provider for reminders
- Pipedream, Zapier, or a small serverless function
- Optional: venue-facing settings stored in Supabase

## Estimated setup effort
M. The policy logic and payment edge cases are the main work.

## Expected time savings
3 to 5 hours per week if it replaces repeated reminder and exception handling.

## Priority ranking
2. This is one of the strongest revenue-protection automations in the business.
