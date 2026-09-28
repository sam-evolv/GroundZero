---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-09-28"
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
- 🔴 [[project_state/donworth-studio|donworth-studio]]: Private Desktop `main` is unsigned `a1cec24e…` / tree `1fd06ba2…`; successful workflow run `36255653159` produced exact-head draft v0.18.12 macOS arm64/x64 and Windows x64 artifacts whose manifests say unsigned and unnotarized. Installed signed v0.18.9 and the source-bound public site remain byte-unchanged; no draft artifact was launched or independently accepted.
- 🔴 [[project_state/heres-health-app|heres-health-app]]: Paying client, app in build. GitHub `main` remains unsigned `a61ff082`; draft PR #1 remains open/draft without review at unsigned `25c8ec4b…` / tree `4299cd40…`, 168 commits / 374 PR-reported files ahead, with both checks failed and no exact-head deployment. Direct Supabase now verifies ACTIVE Square v30/v26 alongside Shopify API v28, account deletion v12 and Shopify install v14, with 17 migrations and 13 listed public tables all RLS-enabled. This closes only the hosted-version evidence gap: exact source/host binding, Shopify `read_orders`, signed-device timing, provider transactions, stores and client acceptance remain open, and launch remains NO-GO.
- 🟢 [[project_state/ob|ob]]: Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names remote `feat/empire-gym-live` commit `b53f724…`; GymMaster CTAs and the admin login remain rendered. The remote branch is now clean at `603ee53…`, one commit past the deployed tree; authenticated editing/photo isolation, billing/access/payment and downstream enrollment remain unverified.
- 🟢 [[project_state/oh|oh]]: Verified `main` advanced seven commits / 60 files to merge `31a66a14…` / tree `a912e8aa…`, and exact-head target-production Ready `dpl_Ddf8…` now owns `portal.openhouseai.ie`. The range includes source-level tenant scoping/auth fixes but no migration path. Supabase remains `ACTIVE_HEALTHY` with unchanged 30/2/17/4 advisor counts; no controlled cross-user actor path, persisted-row, authenticated secondary-surface or rendered homeowner acceptance ran.
- 🔴 [[project_state/personal-agent|personal-agent]]: Installed Hermes remains v0.21.5 `749220ef` / tree `16e4fb22`, while verified GitHub `main` advanced 255 commits / at least 300 paths from `5912ed81…` to `e408d363…` / tree `4f09a757…`, leaving installed 3,710 commits behind. The CLI still reports 3,398, understating immutable Git by 312; direct health is `200`, the gateway remains stale and standalone, Aire `8766` is absent and no rendered Aire acceptance advanced.
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

- Dashboard: 2026-09-28 16:11 IST
