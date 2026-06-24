---
id: oh-warranty-triage-router
company_id: openhouse-ai
domain: operations
title: Route OpenHouse warranty issues automatically
rationale: Incoming homeowner issues need manual triage for type, urgency, and warranty relevance before they can be handled properly.
council_note: Issue triage pass · Effort M
effort: M
impact: 84
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-24T17:02:14Z"
---

## What the automation does
Classifies each inbound issue, decides whether it is urgent, tags warranty relevance, and routes it to the right queue. It should also draft a reply that asks for the missing details and keeps the premium tone intact.

## Tools and APIs
- Gmail or Outlook inbox integration
- Supabase issue tables or a lightweight queue
- OpenAI classification and response drafting
- Slack or email notifications for urgent cases
- Pipedream or Zapier for orchestration

## Estimated setup effort
M. The router can start as a read-only classifier before it is allowed to write back to the queue.

## Expected time savings
30 to 60 minutes per day and fewer missed or misrouted issues.

## Priority ranking
3. This is valuable operationally, but it should follow the onboarding packet and daily digest.
