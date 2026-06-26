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
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Pulls the live ops signals, then writes a short daily digest into the vault. It should check GitHub PRs and issues, deployment health, and any blocked validation steps, then flag only the items that need human review.

## Opportunity size
High leverage across every company. This replaces a repetitive daily context sweep and makes the council more proactive. Even a modest 20 to 30 minutes saved per day compounds quickly, and the bigger win is catching regressions earlier across OpenHouse, OpenBook, and Renew.

## Technical approach
- Pull open PRs, review state, and failing checks from GitHub.
- Pull deployment health from Vercel.
- Pull any relevant Supabase or CLI status where credentials allow.
- Score anomalies with simple rules such as stale PRs, blocked checks, deployment failures, and mismatched project states.
- Write a concise Markdown digest into the vault and, when useful, update the affected project notes.

## Risks
- Too many low-signal alerts will make the digest ignored.
- API auth gaps can create blind spots if the automation is not explicit about what it could not check.
- A read-only digest is safer than an auto-remediation loop at this stage.

## Effort
M. Mostly integration and rule-setting. The first useful version is a few hours of data pulls plus Markdown output, but the anomaly logic will take iteration.

## Market timing
Timely. The broader trend is toward agentic ops tooling that compresses status reporting and highlights exceptions rather than asking humans to manually assemble a standup.

## Connects to

- [[items/oh-production-migration]] — OH production migration
- [[items/ops-pr-issue-ageing-escalator]] — OH open issues and PR triage
- [[items/ob-no-show-deposits]] — OB launch hygiene
- [[items/renew-compliance-reporting-automation]] — Renew reporting cadence
- [[items/ops-daily-report-pack]] — sister daily report
- [[items/ops-project-state-reconciler]] — state reconciliation
- [[context/ops-automation-moc]] — MOC hub
- [[goals/oh-v2-launch]] — V2 migration goal


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/ai-money-patterns-2026-06]]
- [[context/automation-ideas]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[items/oh-production-migration]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-report-pack]]
- [[items/ops-index-maintenance-bot]]
- [[items/ops-meeting-followup-assembler]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[items/ops-weekly-status-pack]]

## Recommendation
Strong candidate for a standing internal project. It is broad, cheap to run, and directly improves the quality of every other incubation pass.
