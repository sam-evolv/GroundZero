---
title: Ground Zero Dashboard
purpose: Single view of what needs attention across all businesses
kind: dashboard
updated: "2026-06-26"
---

# Ground Zero Dashboard

> Open this note first. It tells you what needs attention, not just what exists.

## 🔴 Active right now

### OpenHouse AI
- **Production migration** still stabilizing — backup tables waiting for clean week → [[items/oh-production-migration]]
- **RLS audit** is `building` state — launch-critical → [[items/oh-rls-audit]]
- **Guardrails** in shadow mode — eval suite needs expansion before flip → [[items/oh-guardrails-eval]]

### OpenBook
- **No-show deposits** — venue replied wanting a pilot with refundable deposit option → [[launch-signals/1782296564720-launch-2026-06-24-launch-openbook-no-show-reduction-wedge]]
- **Realtime availability** is `pr_ready` — PR #214 open → [[items/ob-realtime-availability]]

### Evolv Renewables
- **Grid automation** — 3 hrs/week manual CSV stitching → [[items/renew-grid-automation]]
- **Pipeline goal**: 1 → 3 signed rooftop deals → [[goals/renew-pipeline]]

## 🟡 Proposed — ready to activate

| Item | Impact | Effort | Why now |
|---|---|---|---|
| [[items/oh-onboarding-cut]] | 95 | M | 42% agent drop-off before first listing |
| [[items/oh-warranty-triage-router]] | 84 | M | Manual triage is hidden cost |
| [[items/ops-daily-sync-digest]] | 92 | M | Replaces repetitive daily sweep |
| [[items/ops-pr-issue-ageing-escalator]] | 90 | S | 11 open PRs, 6 open issues |
| [[items/ob-venue-health-radar]] | 79 | M | 362-venue base, churn prediction missing |

## 🟢 Monitoring

- Vercel production: healthy → [[project_state/oh]]
- OpenBook supply: healthy → [[project_state/ob]]
- Renew: 1 generating, 1 in survey → [[project_state/renew]]
- Supabase remote checks: blocked (no token) → [[project_state/oh]]

## 📥 Inbox / unfiled

- [[capture/inbox]] — check for scraps awaiting filing
- [[imports/claude/openhouse-company-memory]] — last updated by council

## 🔮 Parked / exploring

- [[briefs/planet-satellite-opportunity]] — Planet.com satellite data cross-domain wedge
- [[briefs/openhouse-energy-assistant-wedge]] — energy assistant extension
- [[context/healthcare-revenue-cycle-wedge]] — US healthcare claims
- [[context/irish-food-waste-wedge]] — food manufacturing yield
- [[context/irish-prompt-payment-copilot]] — B2B collections

## 📊 Portfolio at a glance

| Company | WIP items | Proposed | Goal | Status |
|---|---|---|---|---|
| [[companies/openhouse-ai]] | 2 (RLS, migration) | 9 | Activation 48→60% | 🟡 Stabilizing |
| [[companies/openbook]] | 0 | 6 | Churn 6.1→4% | 🟢 Growing |
| [[companies/evolv-renewables]] | 0 | 3 | 1→3 deals | 🟡 Early |

## 🔄 Last updated

- Daily sync: [[Daily/2026-06-26]]
- This dashboard: 2026-06-26 (manual refresh)
- Next graph health check: Sunday 10am

## 🧭 Navigate

- All ideas: [[items/_Index]]
- All opportunities: [[context/business-opportunities-moc]]
- All ops automation: [[context/ops-automation-moc]]
- Daily notes: [[Daily/_Index]]
- Vault structure: [[context/ground-zero-structure]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/index]]

