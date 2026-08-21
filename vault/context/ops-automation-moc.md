---
title: Operations Automation MOC
purpose: Cross-company ops automation backlog and its relationships
kind: moc
---

# Operations Automation MOC

Every operations automation item lives in `items/ops-*`. This hub links them to each other and to the grounding notes they read/write.

## Why these exist

Sam repeats the same daily context sweep:
- check GitHub PRs, issues, deployments, Vercel, Supabase
- update project_state notes for each company
- draft daily briefings
- file anything captured in the inbox

These items automate that sweep so Sam's time goes into the right work, not the re-reading.

## By function

### Daily sync & digest
- [[items/ops-daily-sync-digest]] — anomaly check + daily digest; the P1 core
- [[items/ops-daily-report-pack]] — daily reporting packs per company
- [[items/ops-project-state-reconciler]] — keep project_state/company memory aligned with live signals; proposed extensions add a read-only local branch/worktree custody manifest and an append-only observation ledger with change-only canonical projections
- [[items/ops-index-maintenance-bot]] — auto-maintain items/_Index.md and daily log entries

### Graph orchestration
- [[items/ops-graph-engineering-pilot]] — prove a bounded research, synthesis, review and approval graph on three internal tasks; first slices are a read-only release evidence receipt assembler and an accepted-requirement drift check grounded in the 13–14 August OpenHouse and Aire evidence gaps

### Triage & escalation
- [[items/ops-pr-issue-ageing-escalator]] — stale PR/issue escalation, P1
- [[items/ops-aire-hermes-upstream-impact-triage]] — convert pinned upstream Hermes ranges into a deduplicated Aire compatibility-impact queue without integrating code
- [[items/oh-warranty-triage-router]] — OH-specific issue triage (AI classification + draft reply)

### Reporting & hygiene
- [[items/ops-weekly-status-pack]] — weekly cross-company brief
- [[items/ops-capture-inbox-refinery]] — auto-file capture inbox scraps
- [[items/ops-source-to-wiki-ingest]] — turn imports/ sources into linked wiki notes

### Communication
- [[items/ops-meeting-followup-assembler]] — post-meeting recap + scheduling
- [[items/oh-developer-outreach-proposal-pack]] — approval-gated paid-developer validation queue; five-row draft-only test, never automated outreach

## Cross-cutting reads/writes

Portfolio-wide ops items commonly read from:
- [[project_state/oh]], [[project_state/ob]], [[project_state/renew]]
- [[companies/openhouse-ai]], [[companies/openbook]], [[companies/evolv-renewables]]
- [[imports/claude/openhouse-company-memory]]

The Aire upstream-impact triage additionally reads:
- [[project_state/personal-agent]], [[companies/personal-agent]]
- [[items/personal-agent-hermes-desktop-parity]] and its governing decisions

Every ops item writes back to:
- [[items/_Index|items/_Index.md]]
- [[Daily/<date>]] (daily notes)
- The relevant project_state note

## Grounding notes

These explain *why* the automation matters, not just what it does:
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]: execution-graph research and implementation playbook
- [[briefs/daily-ai-brief-2026-07-14]] — current evidence for durable background-job contracts and provider-neutral orchestration
- [[briefs/hermes-community-use-cases-2026-07-28]] — review of 262 community stories; event-driven, approval-gated adaptations for OpenHouse, Cara, and Ground Zero
- [[context/automation-ideas]] — general automation principles
- [[context/capture-workflow]] — how sources flow into the wiki
- [[context/review-workflow]] — daily/weekly review job description
- [[context/llm-wiki-pattern]] — why auto-filing matters (Gipp pattern)
- [[briefs/wiki-refiner-2026-06-26]] — actual run output for the refiner


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-24-openbook-prospect-preview-factory]]
- [[briefs/2026-07-24-openhouse-openbook-reset]]
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/daily-ai-brief-2026-07-14]]
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[briefs/wiki-refiner-2026-06-26]]
- [[briefs/wiki-refiner-2026-06-27]]
- [[companies/evolv-renewables]]
- [[companies/openbook]]
- [[companies/openhouse-ai]]
- [[companies/personal-agent]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/dashboard]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/llm-wiki-pattern]]
- [[context/review-workflow]]
- [[items/oh-warranty-triage-router]]
- [[items/ops-aire-hermes-upstream-impact-triage]]
- [[items/ops-capture-inbox-refinery]]
- [[items/ops-daily-report-pack]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-index-maintenance-bot]]
- [[items/ops-meeting-followup-assembler]]
- [[items/ops-pr-issue-ageing-escalator]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]
- [[items/ops-weekly-status-pack]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/personal-agent]]
- [[project_state/renew]]


## See also

- [[items/_Index]] — all active items including ops
- [[context/ground-zero-structure]] — where ops output goes
