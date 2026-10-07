---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-10-07"
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
- 🔴 [[project_state/donworth-studio|donworth-studio]]: Private Desktop `main` remains unsigned `a1cec24e…`; draft PR #13 remains clean at unsigned `6246fabe…`, feeds remain Windows 0.18.12 / Mac ARM 0.18.2 / Mac Intel 503, and signed installed v0.18.9 remains exact and unlaunched. Public site source and Vercel remain `104ac7fc…` / Ready `dpl_AcQG…` with exact root/privacy bytes. A reconciliation command unintentionally created statusless GitHub deployment record `6857393213` against the unchanged site SHA; it did not move Vercel or public bytes and awaits Sam's deletion/retention decision.
- 🟢 [[project_state/heres-health-app|heres-health-app]]: Paying client; build 8 was last verified Waiting for Review at 21:01 IST, but launch remains NO-GO. Open draft PR #6 now provides a direct matching source candidate for the hosted rota migrations and product surface, but no hosted deployment receipt binds it to that head and build 8 predates the rota tranche. Hosted rows remain 1 tenant, 1 identity, 5 entities, 1 audit row, 2 completed requests and 2 conflict scopes, including `synthetic-test-site`. Production Shopify remains awaiting payment; all 27 Square orders are sandbox-only. Apple, payment, rota UI/device, merchant and client acceptance remain unverified.
- 🟢 [[project_state/ob|ob]]: Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names remote `feat/empire-gym-live` commit `b53f724…`; GymMaster CTAs and the admin login remain rendered. The remote branch is now clean at `603ee53…`, one commit past the deployed tree; authenticated editing/photo isolation, billing/access/payment and downstream enrollment remain unverified.
- 🟢 [[project_state/oh|oh]]: Production source advanced seven verified commits / 60 files to `31a66a14…` and exact-head Ready deployment `dpl_Ddf8…` now owns `portal.openhouseai.ie`. The tranche includes source-level auth, tenant-ownership and tenant-scoped analytics fixes, but no migration path; Supabase advisor counts remain 30/2/17/4 plus disabled leaked-password protection, and no controlled cross-user actor path, persisted-row or authenticated homeowner acceptance was exercised.
- 🔴 [[project_state/personal-agent|personal-agent]]: Installed Hermes fast-forwarded to v0.21.5 `9aaef03b` / tree `f2eafe43`, 3,062 commits / 2,818 net changed paths beyond the prior installed cut. Immutable GitHub `main` is unsigned `59a3866e…` / tree `4b2a5129…`, 159 commits ahead; the comparison hit GitHub's 300-file cap, so no exact current path count is asserted. The CLI reports only 44 behind. Saved routing remains `gpt-6.1-sol` / `openai-codex`, `xhigh`, with xAI/GLM fallbacks, still contradicting the accepted DeepSeek default. Gateway health is `200`, but its health payload exposes no exact source SHA; port `8766` remains non-Aire, Cara remains offline, and no authenticated/rendered Aire or physical-device acceptance advanced.
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

- Dashboard: 2026-10-07 02:15 IST
