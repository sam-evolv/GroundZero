---
id: oh-answer-quality-audit-loop
company_id: openhouse-ai
title: Homeowner answer-quality audit loop (PR #205 follow-through)
size: S
status: proposed
impact: 85
created_at: "2026-07-27"
updated_at: "2026-07-27"
role: item
---

# Homeowner answer-quality audit loop

## Why now
PR #205 (opened 22 July, currently the only recent delivery movement on sam-evolv/property-assistant) found that roughly 15% of stored homeowner answers over the last 30 days were silently replaced by the generic amenities message due to a guard misfire, plus wrong unit specs for three Longview homes. Two implications:

1. The stored answer log is the single best proof asset OpenHouse has, and it was quietly corrupted. If Sam pitches "X questions answered accurately" to Bridgewater or investors, the number has to be defensible.
2. The class of bug (validator overwriting good answers, NULL unit specs falling back to wrong type-level data) will recur as schemes are added. A cheap recurring audit catches it before a homeowner or a prospect does.

## What
- Merge and deploy PR #205 first; it is reviewed-scoped, recent, and directly fixes live customer-facing data. It also unblocks trusting the answer log again.
- Then run a monthly 30-minute audit: sample 30 stored homeowner Q&A pairs, score correct / partially correct / wrong / replaced-by-guard, and log the percentage in the vault.
- Feed the audited accuracy number into [[items/oh-proof-asset-engine]] as the headline metric. An audited accuracy figure is a differentiator no competitor pitch will have.
- Add a one-line check to the audit: any unit with NULL bedrooms/bathrooms/floor_area gets flagged (the unit 38/25/50 failure mode).

## Not in scope
- No new guardrails build. [[items/oh-guardrails-eval]] stays separate.
- No dashboard. A markdown log in the vault is enough at one live scheme.

## Success
- PR #205 merged and live.
- First audit logged with a defensible accuracy percentage usable in the Bridgewater proposal and award applications.

## Connected vault notes
- [[items/oh-proof-asset-engine]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[project_state/oh]]
- [[briefs/2026-07-24-openhouse-market-readiness-audit]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-27-market-intel]]

