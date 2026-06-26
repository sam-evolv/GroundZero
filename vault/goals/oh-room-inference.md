---
id: oh-room-inference
company_id: openhouse-ai
title: Infer practical uses from room measurements and photos
status: active
period: "2026-06"
metric: "Room analysis MVP live"
domain: product-feature
---

# Goal: Infer practical uses from room measurements and photos

Use room measurements and photo uploads to auto-identify room types and features. Powers:
- auto-populated descriptions
- smarter issue categorization
- better warranty routing ([[items/oh-warranty-triage-router]])
- warranty evidence pack clustering ([[items/oh-warranty-evidence-pack]])

## Feeding goals

- [[goals/oh-aftercare-os]] — room inference is a building block of the aftercare OS
- [[goals/oh-guardrails-active]] — room inference is a guardrails-sensitive surface

## Feeding items

- [[items/oh-warranty-triage-router]] — same data model powers both
- [[items/oh-warranty-evidence-pack]] — room clustering in evidence packs
- [[items/oh-warranty-filter]] — warranty column on issue_reports

## Grounding

- [[companies/openhouse-ai]] — known gap: `warranty_relevant` only on `assistant_media_analysis`
- [[project_state/oh]] — migration must stabilize first
- [[context/openhouse-product-map]] — homeowner support surface is where this ships
- [[goals/oh-activation]] — room inference can reduce onboarding friction too

## Signals to watch

- room classification accuracy
- deflection of manual categorization work
- developer-side value signal from the insight view

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[context/openhouse-product-map]]
- [[goals/oh-aftercare-os]]
- [[goals/oh-guardrails-active]]
- [[items/oh-warranty-evidence-pack]]
- [[items/oh-warranty-filter]]

