---
title: OpenHouse YC usage evidence
company_id: openhouse-ai
date: 2026-07-30
status: verified-production-evidence
source: read-only production Supabase audit and current OpenHouse codebase
---

# OpenHouse YC usage evidence

## Recommended application metric

> The OpenHouse assistant has answered 259 property-specific questions across 79 homes in four Longview developments. Of those questions, 245 were typed rather than selected from the product's built-in prompts.

This is the strongest conservative production-use metric available on 30 July 2026.

## How it was derived

A read-only query was run against the production Supabase project using the production environment downloaded from Vercel. No database records were created, updated or deleted.

The four included Longview developments were:

- Ardan View
- Longview Park
- Rathard Lawn
- Rathard Park

The raw message table contained 833 questions across 82 home contexts in those developments. Restricting the set to questions asked after the corresponding home had a recorded access agreement left 824 questions across 80 homes.

One internal QA home accounted for 565 questions and was explicitly identifiable as internal. It was excluded. The conservative set therefore contains:

- 259 questions
- 259 recorded assistant answers
- 79 distinct home contexts
- 245 questions not matching built-in suggestion prompts
- 133 distinct normalised non-default questions
- activity across 38 calendar days
- first included question: 15 January 2026
- latest included question: 29 July 2026

Do not use the unfiltered 824-question figure in the YC application.

## What people ask

The leading non-default topics in the conservative set include:

- solar panels
- first-year maintenance
- contacting the developer
- waste collection
- utilities setup
- broadband
- reducing energy costs
- paint and decoration
- home upgrades
- schools and local services
- EV charging
- room dimensions and layout
- heating systems
- warranties

These are database topic classifications. They demonstrate that the assistant is being used for the home itself, its systems, aftercare and everyday life around it.

## Developer intelligence loop verified in the product

The current code supports a real closed loop rather than only a homeowner chatbot:

1. The assistant answers property-specific questions using the home record, developer documents and system context.
2. It supports photos, conversational continuity, Home Notes and creation of aftercare issues.
3. Homeowner questions are classified into canonical topics.
4. The developer analytics interface shows question categories, most-asked questions and the number of questions analysed.
5. Repeated or unanswered topics become knowledge gaps.
6. A developer can turn a question insight into a new FAQ or upload missing information, improving future answers.
7. The newer multimodal analytics path stores PII-redacted question and response text without user, home, conversation, message, IP or device identifiers.

Relevant implementation paths:

- `apps/unified-portal/components/purchaser/PurchaserChatTab.tsx`
- `apps/unified-portal/app/api/chat/route.ts`
- `apps/unified-portal/app/api/assistant/chat/multimodal/route.ts`
- `apps/unified-portal/lib/question-topic-extractor.ts`
- `apps/unified-portal/lib/assistant-analytics/logger.ts`
- `apps/unified-portal/migrations/064_assistant_analytics_anonymous.sql`
- `apps/unified-portal/app/developer/analytics/analytics-client.tsx`
- `apps/unified-portal/app/developer/knowledge-base/page.tsx`
- `apps/unified-portal/lib/scheme-intelligence/functions.ts`

## Truth boundaries

The evidence supports saying:

- the assistant has answered 259 questions across 79 home contexts after removing the internal QA outlier;
- the questions came through the purchaser portal;
- the current deployment is across four Longview developments;
- questions are classified and surfaced to the developer as aggregate topics and knowledge gaps;
- the product is designed to reduce repeat aftercare questions and create post-handover insight.

The evidence does not yet support saying:

- 79 unique people or 79 active users;
- 79 paying customers;
- independent developer validation;
- a measured percentage reduction in aftercare workload;
- measured retention;
- that every logged question came from a homeowner rather than another authorised user of the home context.

## Connected notes

- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[companies/openhouse-ai]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-business-post-ai-leadership-awards-application]]
- [[briefs/2026-08-04-openhouse-founder-morning-action-brief]]
- [[briefs/2026-08-04-openhouse-product-truth-night-audit]]
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]
- [[briefs/openhouse-yc-fall-2026-first-principles-full-review-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-high-conviction-redraft-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-live-form-candidate-2026-07-30]]
- [[briefs/openhouse-yc-fall-2026-voice-redraft-2026-07-30]]
- [[companies/openhouse-ai]]

