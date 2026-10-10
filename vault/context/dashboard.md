---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-10-10"
---

# Ground Zero Dashboard

> Open this note first. It tells you what needs attention, not just what exists.

## 🔴 Active right now

### OpenHouse AI
  - **Close the tenant data gap before the V2 launch** → [[items/oh-rls-audit]] (🔴 building)
  - ⚠️ Blocked signal in [[project_state/oh|OpenHouse AI]]

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
- 🔴 [[project_state/donworth-studio|donworth-studio]]: Private Desktop `main` remains unsigned `a1cec24e…`; draft PR #14 remains at unsigned `9086f401…` with focused Hermes v0.21.6 security backports, but its installer run was cancelled and integration/package/account-continuity gates remain open. Feeds remain Windows 0.18.12 / Mac ARM 0.18.2 / Mac Intel 503, signed installed v0.18.9 remains exact and unlaunched, and public site source remains `104ac7fc…` on Ready `dpl_AcQG…`.
- 🟡 [[project_state/heres-health-app|heres-health-app]]: Paying client; GitHub, hosted function versions, commerce outcomes and native acceptance boundaries remain unchanged, while the production Square-event stream reached 131,652 fully processed rows through 16:52:53 UTC. Build 8 remains the last Apple-verified binary and 1.0.1 has no verified native build/upload/device receipt; commerce, deletion, notifications and rota acceptance remain open. Launch remains NO-GO.
- 🟢 [[project_state/ob|ob]]: Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names remote `feat/empire-gym-live` commit `b53f724…`; GymMaster CTAs and the admin login remain rendered. The remote branch is now clean at `603ee53…`, one commit past the deployed tree; authenticated editing/photo isolation, billing/access/payment and downstream enrollment remain unverified.
- 🟢 [[project_state/oh|oh]]: Production source advanced seven verified commits / 60 files to `31a66a14…` and exact-head Ready deployment `dpl_Ddf8…` now owns `portal.openhouseai.ie`. The tranche includes source-level auth, tenant-ownership and tenant-scoped analytics fixes, but no migration path; Supabase advisor counts remain 30/2/17/4 plus disabled leaked-password protection, and no controlled cross-user actor path, persisted-row or authenticated homeowner acceptance was exercised.
- 🔴 [[project_state/personal-agent|personal-agent]]: Official stable remains unsigned `v0.21.6` commit `818c13be…`; current GitHub `main` is unsigned `46d7718a…` / tree `bbb95f10…`, 34 mixed-signature commits / 94 files after checkpoint `b56a1024…`, 373 beyond stable and 1,220 beyond installed unsigned `9aaef03b…`. Installed source and v0.21.5 health remain unchanged, local tracking still stops at `517b5e10…`, the mixed-module restart warning persists, and saved Skippy remains on the unapproved `gpt-6.1-sol` route. No accepted Aire behaviour advanced.
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

- Dashboard: 2026-10-10 02:15 IST
