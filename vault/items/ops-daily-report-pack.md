---
id: ops-daily-report-pack
company_id: ground-zero
domain: ops
title: Assemble daily reporting packs for each company
rationale: Sam keeps manually checking the same operational signals and then writing separate status notes for the companies.
council_note: Daily reporting pass | Effort M
effort: M
impact: 88
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-25T18:02:35+01:00"
---

## What the automation does
Builds a daily report pack for OpenHouse, OpenBook, and Renew by pulling the live signals, summarising what changed, and writing the ready-to-file note back into the vault. It should keep the summary short, exception focused, and aligned to the current project_state notes.

## Tools and APIs
- Local vault reads and writes
- GitHub API for repo health
- Vercel status checks
- Supabase status where available
- Optional OpenAI summarisation for the final Markdown draft

## Estimated setup effort
M. It is mostly orchestration and formatting, but the signal selection needs to stay tight.

## Expected time savings
20 to 30 minutes per day, plus less context switching between projects.

## Priority ranking
P1

## Connects to
- daily ops digest
- project_state notes
- company memory updates
