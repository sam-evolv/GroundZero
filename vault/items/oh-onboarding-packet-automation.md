---
id: oh-onboarding-packet-automation
company_id: openhouse-ai
domain: operations
title: Auto-generate the OpenHouse onboarding packet
rationale: New scheme or homeowner onboarding still requires manual assembly of welcome messages, checklists, and requested documents.
council_note: Customer onboarding pass · Effort M
effort: M
impact: 86
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-24T17:02:14Z"
---

## What the automation does
When a deal closes or a scheme moves to onboarding, this automation assembles the customer packet automatically. It should prefill known data, generate the welcome email, create the checklist, request the missing files, and open the internal follow-up tasks.

## Tools and APIs
- Supabase for source-of-truth data
- Email provider such as Gmail, SendGrid, or Outlook
- Google Drive or Docs for the packet output
- OpenAI for draft copy and checklist shaping
- Pipedream or Zapier for event wiring

## Estimated setup effort
M. The first version can be mostly template driven if the source data is clean.

## Expected time savings
30 to 60 minutes per onboarding, plus fewer data-entry mistakes.

## Priority ranking
2. This removes repetitive launch admin and makes the first customer touch feel more polished.
