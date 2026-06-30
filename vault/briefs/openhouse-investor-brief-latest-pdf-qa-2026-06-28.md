---
title: OpenHouse Latest Investor Brief PDF QA
created: 2026-06-28
status: review
source_pdf: /Users/samdonworth/.hermes/cache/documents/doc_20ba4c2d3f3d_OpenHouse, Investor Brief.pdf
cleaned_salvage_pdf: /Users/samdonworth/.hermes/cache/documents/openhouse_latest_pdf_cleaned_v2/OpenHouse_Investor_Brief_CLEANED.pdf
tags:
  - OpenHouse
  - Investor Deck
  - Pitch Review
  - QA
links:
  - [[companies/openhouse-ai]]
  - [[briefs/openhouse-standalone-investor-brief-qa-2026-06-28]]
  - [[briefs/openhouse-claude-design-final-polish-prompt]]
---

# OpenHouse Latest Investor Brief PDF QA

Reviewed the user-provided PDF `OpenHouse_ Investor Brief.pdf`.

## Verdict

The deck content/design direction remains strong, but this exported PDF is **not investor-send-ready**.

## Export blockers

The PDF was exported as a browser print with the following issues on every page:

- portrait page rather than landscape slide pages
- slide artwork rotated sideways inside the page
- date stamp visible
- title header visible: `OpenHouse, Investor Brief`
- Claudeusercontent URL visible
- page number visible, e.g. `1/22`

This is an investor-readiness blocker.

## Content/copy blockers visible in the PDF

The PDF export also clips some slide text. This clipping appears baked into the exported PDF, not caused by post-processing.

Examples:

- Slide 2 headline appears clipped: `the operating context o...`
- Slide 4 headline appears clipped: `moving into the hor...`
- Slide 13 headline appears clipped: `Recurring intelligen...`

The source deck/export settings need to be fixed rather than relying on this PDF.

## Text scan

Text extraction found:

- `OpenHouse` present
- no `OpalHouse`
- no `$99`
- no visible em dash characters in extracted text
- Claude URL appears 22 times, once per page
- `2026` appears 22 times, likely from browser date/footer artifacts

Text extraction did not reliably extract euro symbols from the deck artwork, so visual QA was used for pricing.

## Salvage attempt

Generated a cleaned salvage PDF by cropping browser margins and rotating the slide artwork:

`/Users/samdonworth/.hermes/cache/documents/openhouse_latest_pdf_cleaned_v2/OpenHouse_Investor_Brief_CLEANED.pdf`

This removes browser URL/date clutter and makes slides landscape/upright, but it cannot fix text that was already clipped in the exported PDF. Use only for internal review, not investor sending.


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-chatgpt-deck-rebuild-context]]
- [[briefs/openhouse-claude-design-final-polish-prompt]]
- [[briefs/openhouse-investor-readiness-operating-plan]]
- [[briefs/openhouse-standalone-investor-brief-qa-2026-06-28]]
- [[companies/openhouse-ai]]


## Recommendation

Return to Claude Design / browser print and export again with:

1. landscape orientation
2. headers and footers disabled
3. background graphics enabled
4. scale set to 100% or Fit to page only if it does not clip text
5. page size matching 16:9 slide aspect if available
6. verify slide 2, slide 4 and slide 13 are not clipped before sending

A clean PDF should have:

- one slide per page
- landscape orientation
- no URL/date/title/page artifacts
- no clipped headlines
- no sidebar/viewer controls

## Bottom line

The strategy/content is close. The current PDF export is not. Fix export settings and re-export from the clean standalone/print view.
