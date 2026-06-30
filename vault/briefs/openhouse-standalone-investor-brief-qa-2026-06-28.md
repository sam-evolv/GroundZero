---
title: OpenHouse Standalone Investor Brief QA
created: 2026-06-28
status: review
source_html: /Users/samdonworth/.hermes/cache/documents/doc_8a3b39b2709a_OpenHouse Investor Brief (Standalone).html
tags:
  - OpenHouse
  - Investor Deck
  - Pitch Review
  - QA
links:
  - [[companies/openhouse-ai]]
  - [[briefs/openhouse-investor-brief-update-1-qa-2026-06-28]]
  - [[briefs/openhouse-claude-design-final-polish-prompt]]
---

# OpenHouse Standalone Investor Brief QA

Reviewed the standalone HTML deck on 2026-06-28.

## Verdict

This is a major improvement over the prior exported PDF. The browser print/export clutter is gone inside the standalone deck experience. The main deck now presents as a clean 16-slide investor deck with sidebar navigation in the interactive HTML viewer.

The strategy now lands clearly:

- construction-stage intelligence
- everyday property assistant
- image issue diagnosis
- living home model
- product loop
- Money / Comfort / Risk
- agentic roadmap
- developer value
- business model
- data ownership
- Ireland-to-UK scale
- team and ask

## Checks performed

- Standalone HTML loads successfully.
- No `OpalHouse` typo found in the HTML text.
- No `$99` found, pricing now uses euros.
- `€99` appears, `€9.99` appears.
- `Agentic` spelling appears correct, no `Agemtic` found.
- Slide 13 business model appears fixed visually.
- Slide 13 uses `€99`, `€9.99`, `€19.99`, and notes agentic/network tiers are roadmap, not current revenue.
- Main deck shows 16 slides, acceptable.
- Browser print artifacts from the previous PDF are not visible inside the standalone deck.

## Remaining caveat

The standalone HTML viewer includes a left slide-thumbnail sidebar and deck navigation. This is fine for an interactive standalone file, but for sending as a PDF, export only the designed slides, not the viewer/sidebar.

The HTML source still contains a few em dash characters in the bundle/runtime code, but no visible deck-copy issue was observed from the reviewed slides.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-claude-design-final-polish-prompt]]
- [[briefs/openhouse-investor-brief-latest-pdf-qa-2026-06-28]]
- [[briefs/openhouse-investor-brief-update-1-qa-2026-06-28]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[companies/openhouse-ai]]


## Recommendation

Use this version for friendly investor/advisor review if sharing as an interactive HTML deck is acceptable.

For a cold investor send, export a clean PDF from this standalone version with:

- no sidebar
- no URL/date/browser print artifacts
- no viewer controls
- one slide per page
- full-bleed or clean slide bounds

## Score

- Narrative clarity: 9/10
- Product concreteness: 9/10
- Business model: 8.8/10
- Data ownership/trust: 8.8/10
- Visual quality in standalone viewer: 8.8/10
- Investor send-readiness as standalone HTML: 8.5/10
- Investor send-readiness as PDF: requires clean export check

## Bottom line

The deck is now good enough to test with friendly investors, advisors, and developer contacts. It is no longer a strategy-draft problem. The remaining work is packaging: decide whether to send the standalone interactive HTML or export a clean PDF without the viewer/sidebar.
