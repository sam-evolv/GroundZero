---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-10-05"
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
- 🔴 [[project_state/donworth-studio|donworth-studio]]: Private Desktop `main` remains unsigned `a1cec24e…` with exact-head draft v0.18.12 artifacts and signed installed v0.18.9. New draft PR #13 is clean/mergeable at unsigned `6246fabe…` (12 commits / 43 files), adding source-level runtime health and local business automations; it has one successful preview-comment check, no reviews and no release/install/rendered acceptance. The public site remains `104ac7fc…` / Ready `dpl_AcQG…`; its home and direct Here’s Health privacy page still render.
- 🟢 [[project_state/heres-health-app|heres-health-app]]: Paying client; build 8 was last verified Waiting for Review at 21:01 IST, but launch remains NO-GO. Open draft PR #6 now provides a direct matching source candidate for the hosted rota migrations and product surface, but no hosted deployment receipt binds it to that head and build 8 predates the rota tranche. Hosted rows remain 1 tenant, 1 identity, 5 entities, 1 audit row, 2 completed requests and 2 conflict scopes, including `synthetic-test-site`. Production Shopify remains awaiting payment; all 27 Square orders are sandbox-only. Apple, payment, rota UI/device, merchant and client acceptance remain unverified.
- 🟢 [[project_state/ob|ob]]: Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names remote `feat/empire-gym-live` commit `b53f724…`; GymMaster CTAs and the admin login remain rendered. The remote branch is now clean at `603ee53…`, one commit past the deployed tree; authenticated editing/photo isolation, billing/access/payment and downstream enrollment remain unverified.
- 🟢 [[project_state/oh|oh]]: Production source advanced seven verified commits / 60 files to `31a66a14…` and exact-head Ready deployment `dpl_Ddf8…` now owns `portal.openhouseai.ie`. The tranche includes source-level auth, tenant-ownership and tenant-scoped analytics fixes, but no migration path; Supabase advisor counts remain 30/2/17/4 plus disabled leaked-password protection, and no controlled cross-user actor path, persisted-row or authenticated homeowner acceptance was exercised.
- 🔴 [[project_state/personal-agent|personal-agent]]: Installed Hermes remains stable v0.21.5 `e496ccc7` / tree `f8c58d47`; immutable GitHub `main` is unsigned `af8839df…` / tree `26ba6577…`, 1,743 commits / 1,799 net changed paths ahead. The 10-commit / 6-path tail after `32172d46…` is entirely unverified and is dominated by EvalRoute/OMH catalogue changes plus a Google Workspace empty-Gmail-search correctness fix and regression test. The CLI still reports 1,570 behind and understates immutable Git by 173. Saved `gpt-6.1-sol` / `openai-codex` routing with `xhigh` reasoning now has no configured fallbacks, correcting the 20:17 fallback observation but still contradicting the accepted DeepSeek default. Gateway health is `200`; Aire and Cara remain offline and no accepted runtime or physical-device journey advanced.
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

- Dashboard: 2026-10-05 02:15 IST
