---
title: Adopt a provenance-backed personal context ledger and gate local model routing by hardware evidence
date: 2026-08-10
status: active
kind: product-and-architecture-decision
source: three X posts supplied by Sam, retrieved linked article and public model metadata/model card, Ground Zero and Aire context
---

# Adopt a provenance-backed personal context ledger and gate local model routing by hardware evidence

## Decision

Ground Zero and Aire adopt [[context/personal-context-data-contract]] as the normative design for durable personal context. Historical session analysis is available only through the approval-gated [[context/mirror-review-protocol]]. Muse Glimmer is not installed or routed on Sam's current Mac because Meta's own supported local configurations require more memory than this machine has.

## Sources reviewed

- HermesWatcher, “From Chat to Agent System: 9 Steps to Make Hermes Actually Work for You”: https://x.com/hermeswatcher/status/2086854830266675329
- Max Blade post quoting Meta's Muse Glimmer announcement: https://x.com/_maxblade/status/2086791278541312023
- EP post linking the private file-based knowledge base and life-tracker prompt: https://x.com/eptwts/status/2086847906716307743
- Official model repository: https://huggingface.co/meta-models/Muse-Glimmer-30B
- Official GGUF repository: https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF

## Adopted patterns

- Separate project context, durable memory, reusable skills and active work.
- Keep one canonical system rather than creating a parallel life-tracker database.
- Use append-only context events and reproducible current views.
- Preserve provenance, confidence, correction, supersession and explicit missing-value semantics.
- Make natural language the write interface and Profile the inspection and correction surface.
- Separate browser identity from agent/service identity.
- Treat backup and isolated restore as acceptance requirements.
- Permit bounded evidence-led analysis of historic agent work only after explicit scope approval.
- Keep model routing invisible and select the cheapest route that passes privacy, quality and consequence gates.

## Rejected patterns

- Blindly executing a very large prompt that creates a second knowledge system.
- Automatic continuous life surveillance.
- Treating a dashboard as the write authority.
- Mining all historic sessions without bounded scope and approval.
- Treating local inference as unlimited or automatically private.
- Replacing frontier reasoning with a local model before task-level evidence exists.

## Muse Glimmer hardware gate

Verified local machine class: Apple M4 MacBook Air with 16 GB unified memory.

Meta's model card states:

- the compressed language model remains under 20 GB
- the smaller K-Quant build targets a 24 GB envelope
- the dynamic build targets a 32 GB envelope
- the published Apple performance measurements use M4 Max and M5 Max systems

The official GGUF note says its smaller build fits comfortably in 24 GB. The current 16 GB machine cannot provide the stated minimum envelope while leaving reliable space for the operating system, KV cache and Hermes. Downloading the model would consume bandwidth and storage without a credible acceptance path, so no installation or benchmark was attempted.

## Re-evaluation trigger

Reconsider Muse Glimmer when any of these becomes true:

- Aire/Hermes has access to a 24 GB or larger Apple Silicon host
- Meta publishes a supported build with a credible 16 GB envelope
- a smaller local model meets the same five-task acceptance suite
- measured cloud cost or privacy requirements make a dedicated local worker economically justified

## Future local-routing acceptance suite

A candidate local worker must be tested on five bounded, low-consequence jobs:

1. classify a request and choose the correct route
2. extract cited obligations and dates from a local document
3. prepare a retrieval capsule without leaking unrelated context
4. summarise a completed Work receipt into a candidate memory update
5. inspect a screenshot or document page and produce structured evidence

For each job record correctness, unsupported claims, tool-schema compliance, prompt-injection resistance, first-token latency, generation rate, peak memory, energy impact and escalation rate. The local worker may prepare or recommend. It may not send, publish, buy, delete, change permissions or write durable memory without the existing approval and provenance boundaries.

## Consequences

- Ground Zero remains canonical.
- Aire's Profile work now has a concrete provenance and correction contract.
- No competing life-tracker build is started.
- No sensitive Mirror cron is created.
- No 30B model is downloaded onto an unsuitable machine.
- Future local inference remains a bounded routing experiment rather than a product claim.

## Connected vault notes

- [[context/personal-context-data-contract]] — adopted normative contract
- [[context/mirror-review-protocol]] — approved review boundary
- [[companies/personal-agent]] — Aire venture context
- [[project_state/personal-agent]] — current implementation state
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]] — existing private intelligence evidence
- [[briefs/2026-08-06-open-model-enterprise-sovereignty-thesis]] — open-model and provider-agnostic strategy
- [[context/index]] — canonical Ground Zero entry point
- [[decisions/_Index]] — durable decision log

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-personal-intelligence-and-bridgewater-readiness]]
- [[briefs/2026-08-06-open-model-enterprise-sovereignty-thesis]]
- [[briefs/2026-08-12-aire-irish-trust-simplicity-and-sovereignty-thesis]]
- [[companies/personal-agent]]
- [[context/index]]
- [[context/mirror-review-protocol]]
- [[context/personal-context-data-contract]]
- [[items/ops-project-state-reconciler]]
- [[project_state/personal-agent]]

