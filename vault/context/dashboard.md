---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-09-06"
---

# Ground Zero Dashboard

> Open this note first. It tells you what needs attention, not just what exists.

## 🔴 Active right now

### OpenHouse AI
  - **Close the tenant data gap before the V2 launch** → [[items/oh-rls-audit]] (🔴 building)
  - ⚠️ Blocked signal in [[project_state/openhouse-ai|OpenHouse AI]]

### OpenBook
  - **OpenBook client self-edit portal plus Stripe billing** → [[items/ob-client-self-edit-portal-billing]] (🔴 building)

## 🟡 Proposed — ready to activate

| Item | Impact | Effort | Signal |
|---|---|---|---|
| [[items/oh-onboarding-cut|Cut agent onboarding to three screens]] | 95 | M | 🔥 |
| [[items/oh-production-migration|Stabilise production migration and drop backup tables]] | 95 | S | 🔥 |
| [[items/ops-accepted-artifact-custody-gate|Block cleanup when an accepted artifact lacks durable custody]] | 94 | S | 🔥 |
| [[items/ops-daily-sync-digest|Daily ops sync digest and anomaly check]] | 92 | M | 🔥 |
| [[items/ob-no-show-deposit-proof-sprint|Validate OpenBook no-show deposits with five venues]] | 91 | S | 🔥 |
| [[items/ops-pr-issue-ageing-escalator|Auto-escalate stale PRs and issues]] | 90 | S | 🔥 |
| [[items/ops-aire-hermes-upstream-impact-triage|Triage upstream Hermes changes into an Aire compatibility queue]] | 89 | S | 🔥 |
| [[items/ob-no-show-deposit-workflow|Automate OpenBook deposits and no-show prevention]] | 88 | M | 🔥 |

## 🟢 Monitoring

- 🔴 [[project_state/cara|cara]]: Deprioritised pending explicit reactivation; ChatGPT voice may now cover enough of the original need.
- 🔴 [[project_state/donworth-studio|donworth-studio]]: The general Astra delivery baseline remains held on included-only routing; Here’s Health has a reviewed imagery baseline live, but its latest nav/personal-usual candidate failed Vera's motion-runtime inspection. Finder replay still awaits Sam and genuine Windows runtime remains untested.
- 🟡 [[project_state/heres-health-app|heres-health-app]]: The public preview serves the independently reviewed 159-slot imagery baseline at `12a7bd5`; local nav fix `14f1162` is accepted with conditions, while Vera found `a56fe56` does not bind its motion runtime and is not releasable as submitted.
- 🟡 [[project_state/ob|ob]]: Empire Gym's public surface still exposes event/lesson CTAs and Stripe checkout links; the clean unpublished GymMaster worktree remains three local commits beyond current template `main`, while the base checkout is conflicted and stale.
- 🟡 [[project_state/oh|oh]]: Enterprise Ireland funding now depends on paid developer validation; OpenHouse resumes Sunday with that commercial objective.
- 🔴 [[project_state/personal-agent|personal-agent]]: Installed Hermes remains at `96e1e3f9`; direct upstream advanced to `6d9c1664`, 298 commits and 479 paths ahead. All three accepted Aire candidates remain clean in their recorded worktrees, but `1004f3e4` is held in a separate Hermes repository rather than the canonical IrelandGPT object store.
- 🟡 [[project_state/renew|renew]]: First commercial rooftop is live. Reporting is still manual.


## 📊 Portfolio at a glance

| Company | WIP | Proposed | Goal | Status |
|---|---|---|---|---|
| Cara | 0 | 0 | — | 🟢 |
| OpenHouse AI | 1 | 13 | Lift new-agent activation to 60% | 🟡 |
| OpenBook | 1 | 7 | Reach 500 live venues in Dublin | 🟡 |
| Evolv Renewables | 0 | 4 | Sign three commercial rooftop deals | 🟢 |


## 🧭 Navigate

- All ideas: [[items/_Index]]
- All opportunities: [[context/business-opportunities-moc]]
- All ops automation: [[context/ops-automation-moc]]
- Daily notes: [[Daily/_Index]]
- Vault structure: [[context/ground-zero-structure]]

## 🔄 Last updated

- Dashboard: 2026-09-06 20:30 IST
