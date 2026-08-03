---
title: OpenHouse Longview developer proof pack
company_id: openhouse-ai
date: 2026-08-03
status: verified-sendable-draft
source: verified production usage audit, certified reviewer environment, current product code and PR 205 exact-commit checks
---

# OpenHouse Longview developer proof pack

## Purpose

A truthful, reusable evidence pack for developer discovery conversations. It is designed to show what OpenHouse has already operated, what homeowners actually ask, how the developer learning loop works, and how to scope a first measured scheme pilot.

## Sendable proposition

> OpenHouse gives every completed home a living record for its documents, systems, warranties and history. Homeowners get practical answers grounded in their own home. Developers get a consistent handover experience and anonymised evidence about recurring questions and missing information.

## Verified Longview evidence

The following figures come from a read-only production audit completed on 30 July 2026. One explicitly identifiable internal QA home was excluded.

- **4 live Longview developments:** Ardan View, Longview Park, Rathard Lawn and Rathard Park.
- **79 home contexts** with qualifying assistant activity after the corresponding home had a recorded access agreement.
- **259 property-specific questions** and 259 recorded assistant answers in the conservative evidence set.
- **245 typed questions** that did not match the product's built-in suggestion prompts.
- **133 distinct normalised non-default questions.**
- **38 calendar days** with qualifying activity, from 15 January to 29 July 2026.

These are home contexts, not a verified count of unique people, customers or paying accounts.

## What homeowners asked about

The leading non-default production topics included:

- solar panels and reducing energy costs;
- heating systems and EV charging;
- first-year maintenance;
- paint, decoration and upgrades;
- room dimensions and layout;
- warranties;
- utilities, broadband and waste collection;
- contacting the developer;
- schools and local services.

The evidence shows that use extends beyond document retrieval. Homeowners ask about the fabric and systems of the home, aftercare, setup and everyday decisions.

## The operating loop already present

1. OpenHouse assembles the home record from unit data, developer documents and system context.
2. The homeowner asks a question against that exact home context.
3. The product classifies the question into a canonical topic.
4. The developer interface surfaces aggregate categories, repeated questions and knowledge gaps.
5. The developer can add a missing FAQ or source document so future answers improve.
6. The newer analytics path stores PII-redacted question and response text without user, home, conversation, message, IP or device identifiers.

## One concrete trust proof

A dedicated, sanitised and unoccupied show house at 8 Longview Park was independently certified on 1 August 2026.

- The reviewer journey was bound to the exact authorised home.
- Cross-home access was denied.
- 59 documents and one video were available within the authorised home experience.
- A live Assistant answer correctly retrieved the verified AquaBox warranty date from a strict allowlist projection of the home record.
- The projection excluded unknown and private metadata and was capped at 3,200 UTF-8 bytes.
- Direct data-plane testing completed 326 anonymous and reviewer REST requests across 163 tables with zero non-empty responses and zero unexpected errors.
- Browser lifecycle tests covered login, logout, restart, copied foreign URLs, grant expiry and grant revocation.

This is security and grounding evidence for a controlled reviewer experience. It is not evidence that every OpenHouse route is certified for unrestricted portfolio rollout.

## What changed after the answer-quality finding

A production evidence review found that the existing local-amenities guard could replace valid home answers with a generic amenities response. The correction is contained in PR #205.

Exact checkpoint `5d56e3bbf73de57a40231ef8236b68b46dd107d3` passed the full local routing matrix, contextual follow-up checks, pre-stream Places safety, home and document precedence, migration review, focused regression suite, typecheck and production build. The same checkpoint was pushed to PR #205 on 3 August 2026 and passed Unified Portal Quality, PWA and Capacitor audit, Mobile release readiness, Vercel and Vercel Preview Comments. GitHub reports the PR mergeable and `CLEAN`. It has not been merged, promoted to production or applied to Supabase.

Because this defect affected some stored answers, this pack deliberately makes no claim about answer accuracy, workload reduction or resolution rate. Those metrics require a post-fix audit and prospective measurement.

## First measured scheme pilot

Start with one active or upcoming scheme and one named operational owner.

### Scope

- Validate the unit and document input for the agreed cohort.
- Create an exact-home record for each participating home.
- Provide a branded homeowner handover and support experience.
- Ground homeowner answers in the authorised home record and source documents.
- Surface aggregate question topics and missing-information signals to the developer.
- Review the evidence with the developer on a short weekly scorecard.

### Measures agreed before launch

- percentage of homes with complete required handover evidence;
- time from completion evidence to homeowner access;
- number and categories of homeowner questions;
- percentage of questions resolved from approved evidence;
- questions requiring developer or site-team escalation;
- repeated information gaps corrected during the pilot;
- homeowner access and return usage, defined before launch;
- developer time spent on the agreed workflow, measured prospectively rather than estimated retrospectively.

### Decision after the pilot

Continue only if the scheme shows a defensible improvement in handover consistency, homeowner access to trusted information or developer aftercare visibility.

## Discovery questions for Bridgewater or another warm introduction

1. How is handover information currently assembled and shared with each homeowner?
2. After completion, where do questions, snags, warranty requests and documentation live?
3. Is the workflow consistent across schemes, or does each scheme operate differently?
4. Which part creates the most avoidable work or customer friction?
5. Which upcoming scheme gives us the cleanest place to measure a small pilot?
6. Who would own implementation and who decides whether a pilot expands?

## Claims approved for use

- OpenHouse has recorded 259 property-specific questions across 79 home contexts in four Longview developments after excluding an internal QA home.
- 245 of those questions were typed rather than selected from built-in prompts.
- The product classifies questions and surfaces aggregate topics and knowledge gaps to developers.
- A dedicated exact-home reviewer environment passed the recorded grounding, privacy and lifecycle certification on 1 August 2026.
- OpenHouse is designed to improve handover consistency, homeowner guidance and aftercare evidence.

## Claims not approved for use

- 79 unique homeowners, active users or paying customers.
- A measured answer-accuracy percentage.
- A measured reduction in calls, emails or developer workload.
- Measured retention or homeowner satisfaction.
- Independent customer validation by Longview or Bridgewater.
- Portfolio-wide enterprise readiness.

## Evidence register

- [[briefs/2026-07-30-openhouse-yc-usage-evidence]]
- [[briefs/2026-08-01-openhouse-yc-reviewer-production-certification]]
- [[briefs/2026-08-02-pr-205-merge-readiness-audit]]
- [[briefs/bridgewater-openhouse-discovery-brief-2026-07-22]]
- [[items/oh-proof-asset-engine]]
- [[items/oh-developer-outreach-proposal-pack]]
- GitHub PR #205: https://github.com/sam-evolv/property-assistant/pull/205

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-03-openhouse-accelerator-waiting-period-plan]]
- [[decisions/openhouse-live-portal-my-home-isolation-2026-08-03]]
- [[items/oh-bridgewater-warm-introduction]]
- [[items/oh-developer-outreach-proposal-pack]]
- [[items/oh-proof-asset-engine]]
- [[project_state/oh]]
