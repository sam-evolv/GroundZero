---
date: 2026-07-27
kind: brief
title: Market and delivery intelligence, 27 July 2026
role: brief
---

# Market and delivery intelligence — 27 July 2026

Source constraint: external web research tools were unavailable this run. Everything below is grounded in live GitHub state, Vercel/vault history, and vault context. Treat competitive claims as standing theses, not fresh news.

## Observations

1. **PR #205 is the only fresh delivery signal and it is high-stakes.** Repo last pushed 22 July (the #205 branch); main is still at 28 June. The PR reveals two silent quality failures at the only live customer: wrong unit specs from NULL fallbacks, and a validator that replaced ~15% of stored answers with a generic amenities message. Competitive read: OpenHouse's core pitch is trustworthy AI answers on real scheme data. This class of bug is the pitch's kill-shot if a prospect finds it first, and its strongest proof point if Sam finds, fixes, and audits it first. Merge #205, then quote only post-fix metrics.

2. **Delivery staleness is now a month old.** 12 open PRs (including new #205), 6 open issues, main unpushed since 2 July, production deploy from 28 June. Fine while the focus is marketing and outreach, but the readiness-audit blockers (production fail-soft config, QR link exposure, legacy subtree decision) are also unmoving. A Bridgewater pilot commitment would collide with this backlog immediately. The cheapest de-risk: merge #205 and #204 (the only clean candidates) before any pilot conversation gets serious.

3. **The live-data demo is the differentiator; instrument the funnel around it.** Vault research already established most proptech competitors sell handover checklists and empty-sandbox demos. Four live Longview schemes with real homeowners is the asset. The gap is that the outreach cycle starting this week has no measurement layer; without UTMs and a booking CTA on site v3, Sam cannot tell which message converts. That is a half-day fix worth more than any new feature this cycle.

4. **OpenBook remains the only near-term cash and it is execution-gated, not idea-gated.** Portal + Stripe €79/mo is committed, locally verified (587 tests), and unpublished. Every week unshipped is a week the existing customer stays unbilled and Grace stays unconverted. Nothing in market conditions changes this; it stays priority one.

5. **Funding calendar tailwind.** Entrepreneur Experience (Oct 16-17) plus AI Ireland / Business Post award cycles mean the proof-asset work (audited accuracy figure, Longview reference case) compounds across four channels at once: investors, Bridgewater, awards, and the marketing site. Build the proof once, spend it four times.

## Priority assessment vs current conditions

1. Ship OpenBook portal + billing (cash).
2. Merge PR #205; run first answer-quality audit ([[items/oh-answer-quality-audit-loop]]).
3. Finish site v3 with instrumentation ([[items/oh-marketing-site-conversion-instrumentation]]); start outreach with tagged links.
4. Bridgewater proposal from audited proof ([[items/oh-developer-outreach-proposal-pack]], [[items/oh-proof-asset-engine]]).
5. Renew and remaining OpenHouse build items hold.

## Connected vault notes
- [[project_state/oh]]
- [[project_state/ob]]
- [[items/_Index]]
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]
