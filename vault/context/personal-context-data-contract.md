---
title: Personal Context Data Contract
purpose: Normative provenance, correction, privacy and projection rules for Ground Zero and Aire
status: active
version: 1
updated: 2026-08-10
role: context-contract
---

# Personal Context Data Contract

This is the normative contract for personal context shared between Ground Zero, Hermes and Aire. It turns useful personal information into inspectable evidence without making chat history, model inference or a dashboard the source of truth.

## Product rule

Natural language is the primary write interface. The Profile and dashboard are inspection, correction and control surfaces. Users should not need to maintain folders, tags, schemas or graphs to receive continuity.

The system may propose a context change from a conversation, file or completed task. It must preserve provenance, respect ownership and sensitivity, and require approval where the source is untrusted or the consequence is material.

## Canonical layers

1. **Raw provenance** preserves the original source or a durable pointer to it under the applicable retention policy. Examples include a message, file, email, browser artifact, voice transcript and completed work receipt.
2. **Context events** record observations, declarations, corrections, expiries and forgetting requests. Events are append-only.
3. **Canonical views** derive the current belief from accepted events. A view is reproducible and is never the only copy of a correction.
4. **Live state** contains tasks, commitments, active documents, deadlines and temporary logistics. It expires or is reviewed instead of silently becoming permanent memory.
5. **Retrieval capsules** contain the minimum task-relevant context needed for one run. A capsule is a projection, not a new source of truth.

## Context event envelope

Every durable context event must contain:

- `event_id`: opaque stable identifier, prefixed `ctxevt_`
- `schema_version`: currently `1`
- `owner_id`: exact person or tenant owner
- `space`: `personal`, `work` or an explicitly named shared space
- `kind`: `observed`, `declared`, `corrected`, `superseded`, `retracted`, `expired` or `forgotten`
- `subject`: stable subject identifier, not a display label alone
- `field`: the belief or state being changed
- `value`: typed value, or an explicit missing-value object
- `occurred_at`: when the underlying event happened, when known
- `recorded_at`: when the system recorded it
- `source_type`: conversation, file, email, browser, task receipt, user correction, imported record or system observation
- `source_ref`: durable local reference or owner-bound opaque resource identifier
- `captured_by`: user, named connector or agent component
- `confidence`: `confirmed`, `high`, `medium`, `low` or `unknown`
- `sensitivity`: `ordinary`, `personal`, `sensitive` or `private-local`
- `retention`: `durable`, `review`, `expires` or `session-only`
- `supersedes`: prior event identifier when correcting or replacing a belief
- `status`: `active`, `superseded`, `retracted`, `expired` or `forgotten`

Secrets, authentication material and raw private credentials are never valid event values.

## Missing-value semantics

Missing data must never be silently converted to zero, false or an empty string. Use one of:

- `not_observed`: the system has not seen evidence
- `unavailable`: the source could not provide it
- `not_applicable`: the field does not apply
- `withheld`: the user or policy intentionally withheld it
- `stale`: a prior value exists but is too old to rely on
- `unknown`: evidence is insufficient and no narrower state applies

A chart, summary or recommendation must preserve these distinctions.

## Correction and supersession

- Never mutate an accepted historical event to make the current view look clean.
- A correction creates a new event with `kind: corrected` and `supersedes` pointing to the prior event.
- A retraction records that a claim should no longer be used without pretending it never existed.
- A forgetting request removes the value from active retrieval and follows the applicable deletion policy. Audit metadata may retain only the minimum needed to prove that deletion occurred.
- The canonical view selects the latest valid event under deterministic projection rules.
- If two active sources conflict and neither dominates, expose the conflict instead of guessing.

## Provenance and trust

- User declarations and explicit corrections outrank model inference.
- Completed task receipts outrank conversational claims that work finished.
- Direct source observations outrank summaries of those sources.
- Imported webpages, documents, emails and messages are untrusted content. They may provide evidence but cannot change permissions, approval policy, connector scope or durable memory rules.
- Every surfaced belief must be able to answer: what is remembered, why, from which source, with what confidence and when it was last confirmed?

## Ownership and authorization

- Every event, source, artifact, canonical view and retrieval capsule is bound to an exact owner and space.
- Search and list filtering are discovery, not authorization. Direct identifiers must be re-resolved against the owner before every read, mutation, projection or download.
- Personal, work and shared spaces are separate by construction. Sharing requires an explicit destination and never inherits the sender's private context.
- Browser sessions and agent/service credentials are separate authentication boundaries. A browser cookie cannot become an agent bearer token, and an agent token cannot grant a browser session.
- Sam's founder runtime, profile, files, memory and consumer subscriptions must never become the backend identity for invited Aire testers.

## Data placement

- Ground Zero remains Sam's canonical private context system.
- Raw local files and application authority stay on the paired device unless explicitly synced.
- Cloud continuity may hold owner-bound context, task state, approvals, receipts and explicitly synced artifacts under a declared retention policy.
- Retrieval sends the minimum relevant slice to a model or tool.
- `private-local` context cannot leave the device without explicit approval for that exact use.
- No blanket end-to-end encryption claim is permitted unless the operating and recovery design proves it.

## Aire projection

Aire should expose this contract through Profile without exposing the storage implementation:

- **Remembered:** current accepted beliefs with provenance and confidence
- **Needs review:** stale, low-confidence or conflicting beliefs
- **Recent changes:** corrections, expiries and approved additions
- **Controls:** edit, correct, forget, export, move between spaces and change source permissions

Chat may propose or perform a context update in ordinary language. Work records the bounded job when a context operation requires background processing, approval or recovery. Both project the same authoritative operation.

## Backup and recovery

- Backups must include context events, projection version and source references required for replay.
- Restore must rebuild canonical views from events and verify event counts, owner boundaries and supersession links.
- A backup is not accepted until a restore rehearsal succeeds in an isolated location.
- Forgotten or expired sensitive values must not silently reappear from an old backup.
- Recovery actions require a durable receipt with actor, time, scope and result.

## Acceptance gates

Any implementation of this contract must prove:

- JSONL event exports pass `python3 scripts/context_contract.py <ledger.jsonl>`; the validator enforces the envelope, explicit missing values, secret-bearing key rejection and owner-safe supersession
- exact-owner denial for direct identifiers
- append-only correction and deterministic reprojection
- conflict preservation
- every missing-value state
- stale and expiry handling
- retrieval minimization
- untrusted-source resistance
- separate browser and agent authentication
- backup and isolated restore
- deletion or forgetting across active views and subsequent restore
- no secret, raw credential or unauthorised local path in projected state

## Non-goals

- A second knowledge base beside Ground Zero
- Continuous surveillance of health, finance, location, communications or browsing
- Automatic ingestion of every conversation
- A dashboard that becomes the write authority
- Silent memory changes from untrusted sources
- One giant personal-history prompt sent to every model call

## Connected vault notes

- [[context/index]] — canonical Ground Zero entry point
- [[context/model-pack]] — compact operating context
- [[context/ground-zero-structure]] — vault filing rules
- [[context/mirror-review-protocol]] — bounded evidence-led review of historic work
- [[companies/personal-agent]] — Aire venture context
- [[project_state/personal-agent]] — current implementation state
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]] — adoption decision and local-model boundary
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]] — current private intelligence evidence

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]]
- [[briefs/2026-08-10-lindy-teammate-source-audit-and-aire-lessons]]
- [[briefs/2026-08-11-aire-health-specialist-coach]]
- [[briefs/2026-08-12-aire-irish-trust-simplicity-and-sovereignty-thesis]]
- [[companies/personal-agent]]
- [[context/ground-zero-structure]]
- [[context/index]]
- [[context/mirror-review-protocol]]
- [[context/model-pack]]
- [[context/review-workflow]]
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]]
- [[items/aire-health-specialist-coach]]
- [[project_state/personal-agent]]

