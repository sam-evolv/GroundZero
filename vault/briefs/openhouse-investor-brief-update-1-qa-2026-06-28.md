---
title: OpenHouse Investor Brief Update 1 QA
created: 2026-06-28
status: review
source_pdf: /Users/samdonworth/.hermes/cache/documents/doc_e342e0b60d0d_OpenHouse, Investor Brief update 1.pdf
tags:
  - OpenHouse
  - Investor Deck
  - Pitch Review
  - QA
links:
  - [[companies/openhouse-ai]]
  - [[briefs/openhouse-investor-brief-v1-review-2026-06-28]]
  - [[briefs/investor-pitch-deck-research-openhouse]]
---

# OpenHouse Investor Brief Update 1 QA

Reviewed PDF has 22 pages. Main visual/narrative quality is much improved, but export cleanliness is still a blocker.

## Verdict

This is the best version so far and much closer to investor-ready. The strategic spine is clear: construction-stage intelligence, property assistant, image issue diagnosis, living home model, product loop, Money/Comfort/Risk, agentic roadmap, developer value, business model, data ownership, Ireland/UK scale, team/ask, appendix.

## Major improvement

- Property assistant is now visible and concrete.
- Image upload and issue diagnosis is now visible.
- Living home model slide is strong.
- Agentic roadmap is clearer.
- Data ownership has its own slide.
- Business model now uses euros and includes homeowner subscription and agentic tier.
- Founder/ask slide is stronger.
- No em dashes found in extracted text.
- No OpalHouse typo found in extracted text.

## Still blocking before external send

The exported PDF still contains visible browser/print clutter around every slide:
- date/time
- URL string
- page numbers
- document title side labels

This makes the deck look unfinished. Must export cleanly before sending.

## Secondary issues

- Main deck is still 16 slides before appendix, not exactly 15, but that is acceptable if clean.
- Slide 13 headline says `Developers create the model. Homeowners keep I` and appears truncated. Fix to `Developers create the model. Homeowners keep it.`
- Slide 13 has a weird tab label: `Later` / possible typo around `Agemtic tier`; check carefully.
- Slide 15 includes `Financial scenarios are in the appendix`, but the appendix scenario slide is very high-level and not numeric. Either remove that line or add more actual scenario content.
- Slide 20 proof points list is good, but should maybe be moved deeper or shortened if deck feels long.

## Score

- Visual quality, excluding export clutter: 8.5/10
- Export polish: 2/10
- Narrative clarity: 8.8/10
- Product concreteness: 8.8/10
- Business model: 8.5/10
- Trust/data ownership: 8.5/10
- Fundability: 8/10


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/investor-pitch-deck-research-openhouse]]
- [[briefs/openhouse-claude-design-final-polish-prompt]]
- [[briefs/openhouse-investor-brief-v1-review-2026-06-28]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[briefs/openhouse-standalone-investor-brief-qa-2026-06-28]]
- [[companies/openhouse-ai]]


## Recommendation

Do not rewrite again. Run a final export and typo pass:
1. clean PDF export without browser margins/URLs/date/page clutter
2. fix truncated business-model headline
3. check all pricing labels and spelling
4. decide whether financial scenarios need real numbers or should stay qualitative
5. optionally shorten appendix

Once export clutter is fixed, this is close enough to start testing with friendly investors/advisors.
