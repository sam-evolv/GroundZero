---
id: ops-daily-sync-digest
company_id: ground-zero
domain: ops
title: Daily ops sync digest and anomaly check
rationale: The current workflow manually checks PRs, issues, deployments, and blocked checks before writing the daily summary.
council_note: Cross-company ops pass · Effort M
effort: M
impact: 92
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-24
run_date: "2026-06-24"
created_at: "2026-06-24T17:02:14Z"
updated_at: "2026-06-24T17:02:14Z"
---

## What the automation does
Pulls the live ops signals, then writes a short daily digest into the vault. It should check GitHub PRs and issues, deployment health, and any blocked validation steps, then flag only the items that need human review.

## Tools and APIs
- GitHub REST or GraphQL API
- Vercel API
- Supabase CLI or Management API
- Hermes cron or another scheduled runner
- Markdown writer into the vault
- Optional: Pipedream or Zapier for glue steps

## Estimated setup effort
M. The first version is mostly read-only data pulls plus Markdown output. The main work is deciding the anomaly rules and which notes get updated.

## Expected time savings
20 to 30 minutes per day, plus less context switching and fewer missed regressions.

## Priority ranking
1. This is the broadest leverage point because it covers every business and replaces the repeated daily status check pattern.
