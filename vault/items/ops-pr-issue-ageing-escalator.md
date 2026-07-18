---
id: ops-pr-issue-ageing-escalator
company_id: ground-zero
domain: ops
title: Auto-escalate stale PRs and issues
rationale: The daily ops sweep keeps re-checking GitHub for long-running PRs, blocked issues, and unresolved review comments.
council_note: GitHub triage pass | Effort S
effort: S
impact: 90
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-25
run_date: "2026-06-25"
created_at: "2026-06-25T18:02:35+01:00"
updated_at: "2026-06-26T16:56:31+01:00"
sync_status: "Checked 2026-06-26 16:56 IST. Cross-company status unchanged in this sync."
---

## What the automation does
Runs a scheduled GitHub sweep, finds stale or blocked PRs and issues, groups them by repo and age, and writes a short action list into the vault. It can also draft a comment or follow-up task for the highest priority blockers.

## Tools and APIs
- GitHub REST or GraphQL API
- GitHub Actions or a cron runner
- Markdown vault writes
- Optional OpenAI structured classification for severity and routing

## Estimated setup effort
S. Mostly query logic, age thresholds, and a clean Markdown output.

## Expected time savings
20 to 30 minutes per day, plus fewer missed blockers.

## Priority ranking
P1

## Connects to

- [[items/oh-production-migration]] — OH production migration monitoring
- [[items/ops-daily-sync-digest]] — daily ops digest
- [[items/ops-daily-report-pack]] — daily report pack
- [[goals/oh-v2-launch]] — V2 migration goal
- [[companies/openhouse-ai]] — parent company
- [[context/ops-automation-moc]] — MOC hub

## Incubation analysis, 18 July 2026

### Opportunity size
The current OpenHouse queue has 11 open PRs and 6 non-PR issues, with production delivery now 20 days old. This gives the proposal a concrete risk-reduction case, but escalation only creates value if it leads to a disposition decision.

### Technical approach, risks and effort
Use deterministic age, mergeability, check and review-state rules. Produce one ranked queue with owner, recommended disposition and evidence links. Do not auto-comment. Small effort can be folded into the existing daily portfolio check. Alert fatigue and stale mergeability data are the main risks.

### Market timing and recommendation
This is timely internal delivery hygiene, not a market opportunity. Promote it only as a rule set inside [[items/ops-daily-sync-digest]], not as a standalone project. Success is fewer unresolved aged items, not more alerts.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-06-25]]
- [[companies/openhouse-ai]]
- [[context/dashboard]]
- [[context/ops-automation-moc]]
- [[goals/oh-v2-launch]]
- [[items/oh-production-migration]]
- [[items/ops-daily-report-pack]]
- [[items/ops-daily-sync-digest]]

