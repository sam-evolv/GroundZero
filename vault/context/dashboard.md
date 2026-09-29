---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-09-29"
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
- 🔴 [[project_state/donworth-studio|donworth-studio]]: Private Desktop `main` remains unsigned `a1cec24e…` with exact-head draft v0.18.12 artifacts; installed signed v0.18.9 remains unlaunched. The public site advanced to `104ac7fc…` / Ready `dpl_AcQG…`, removing the Here’s Health privacy link from all 17 inspected page footers while leaving the direct privacy URL rendered and available.
- 🟡 [[project_state/heres-health-app|heres-health-app]]: Paying client, app in build. Café image PR #5 is merged as `198edc8f…`; broad draft PR #1 now points to the same head, 171 commits / 376 files ahead of unchanged `main`, with zero reviews and two failed checks. Seven genuine 6.9-inch iPhone screenshots remain local and unuploaded. Apple authentication/readback, build selection, declarations, reviewer access, signed-device, provider-transaction, store and client acceptance remain open. Launch remains NO-GO.
- 🟢 [[project_state/ob|ob]]: Empire Gym production moved to Ready CLI deployment `dpl_Es9HL…`, whose metadata names remote `feat/empire-gym-live` commit `b53f724…`; GymMaster CTAs and the admin login remain rendered. The remote branch is now clean at `603ee53…`, one commit past the deployed tree; authenticated editing/photo isolation, billing/access/payment and downstream enrollment remain unverified.
- 🟢 [[project_state/oh|oh]]: Production source advanced seven verified commits / 60 files to `31a66a14…` and exact-head Ready deployment `dpl_Ddf8…` now owns `portal.openhouseai.ie`. The tranche includes source-level auth, tenant-ownership and tenant-scoped analytics fixes, but no migration path; Supabase advisor counts remain 30/2/17/4 plus disabled leaked-password protection, and no controlled cross-user actor path, persisted-row or authenticated homeowner acceptance was exercised.
- 🔴 [[project_state/personal-agent|personal-agent]]: Installed Hermes remains v0.21.5 `749220ef` / tree `16e4fb22`, while verified GitHub `main` advanced another 63 commits / 154 paths to `30a8b539…` / tree `23441fc1…`, leaving installed 4,090 commits behind. The CLI now reports the same 4,090-commit gap; direct health is `200`, the gateway remains stale and standalone, Aire `8766` is absent and no rendered Aire acceptance advanced.
- 🟡 [[project_state/renew|renew]]: First commercial rooftop is live. Reporting is still manual.

## 📥 Inbox (2 unfiled)

- **New facts to file**: 2 items

→ [[capture/inbox]]

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

- Dashboard: 2026-09-29 04:07 IST
