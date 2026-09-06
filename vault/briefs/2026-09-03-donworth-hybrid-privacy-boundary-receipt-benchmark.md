---
title: Donworth hybrid privacy-boundary receipt benchmark
status: validation-gated
created: 2026-09-03
source: Perplexity first-party launch and research materials, MacStories launch coverage, Ground Zero decisions
company: donworth-ai-solutions
---

# Donworth hybrid privacy-boundary receipt benchmark

## Bounded proposal

Treat Perplexity's shipped Hybrid Compute release as a **falsification benchmark** for Donworth Studio and Aire, not as permission to start a local-model build.

The local/cloud split, phone-to-Mac handoff and visible processing location are no longer credible standalone differentiation. The bounded opportunity is narrower: test whether an ordinary user can understand and later verify a **privacy-boundary receipt** for one task — which device worked, which files stayed local, what exact information left the Mac, what was masked, what approval was used, where the result was written and how access can be revoked.

This promotes an existing hypothesis in [[briefs/2026-08-05-personal-assistant-research-codex]] into a concrete competitive test. It does not change [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]], create an approved product feature or claim proven customer demand.

## Why this is genuinely new evidence

On 1 September 2026, Perplexity announced Hybrid Compute in its Mac app. Its first-party materials say one Computer task can combine cloud research/reasoning with a local model for private files and on-device actions; a task can begin on iPhone while the Mac performs the local step. The product page shows a user-facing `WORK / WHERE / RESULT` summary and a PII prompt that offers local processing or upload.[1][2]

Perplexity says the feature is available to Pro, Max and Enterprise subscribers on Apple-silicon Macs running macOS 15+ with at least 24 GB unified memory, with 32 GB recommended. It launches with three local models and one-click setup.[1][2] That hardware floor independently reinforces the existing Ground Zero decision not to make a 16 GB local-model path part of the current Donworth/Aire build.

A contemporary MacStories report confirms the launch and the phone-to-Mac pattern, but explicitly says the reviewer saw a vendor demo and had not independently used Hybrid Compute.[4] Availability and product claims are therefore verified as first-party launch facts, not as independent task-success or privacy acceptance.

## Evidence ledger

| Claim or question | Status | Evidence | Consequence for Donworth/Aire |
|---|---|---|---|
| Has a major competitor shipped a local/cloud task split on Mac? | **Verified first-party release** | Perplexity's launch post and product page describe availability, setup, supported plans and hardware.[1][2] | Do not position hybrid routing, remote Mac access or local-file processing alone as a moat. |
| Is processing location visible to the user? | **Verified product design claim** | The product page shows local/cloud work labels, protected-step status and a `WORK / WHERE / RESULT` summary.[2] | The older “make local/cloud placement legible” hypothesis is now table stakes; test a stronger post-task receipt. |
| Does the privacy gate make leakage impossible? | **No** | Perplexity says the gate may keep data local, mask it, refuse the action or ask for consent; its UI also permits `Upload anyway`.[1][2] Its own PII-Tracer report gives 0.629 character F1 overall and 0.687 recall for conversations of at least 10,000 characters in a single 4,096-token window; overlapping windows raise reported recall to 0.965.[3] | Treat classification as one control signal, never as proof that all sensitive content was detected. High-risk policy must fail closed or require explicit approval. |
| Is the PII evidence independent and production-representative? | **No** | PII-TRACE is Perplexity-authored and predominantly synthetic; the authors report only one small real human-labelled external set among the five external benchmarks.[3] | Require independent adversarial evaluation before any privacy claim. Do not translate a benchmark score into a customer guarantee. |
| Can Donworth adopt Perplexity's implementation? | **Open** | Reviewed launch materials describe a Perplexity subscription feature, not a public embeddable or white-label product. The research post says PII-TRACE and PII-Tracer are planned for release, while the product page says the classifier is open-sourced.[2][3] | Do not assume API, licence, commercial reuse or source availability. Resolve the first-party inconsistency before technical planning. |
| Does this fit Sam's current Mac and roadmap? | **No immediate build path** | Perplexity's floor is 24 GB; Ground Zero records Sam's current machine as 16 GB and keeps local routing behind hardware, quality, privacy, consequence and cost gates.[1][2] | Run a no-build receipt/comprehension test first. Revisit local inference only on an eligible host or when a smaller model passes the existing acceptance suite. |

## Falsifiable assumption

For sensitive-file work, target users will trust and prefer Donworth/Aire only if the product gives them a clearer, independently checkable account of the data boundary than a preflight PII warning alone.

Disprove or pause this wedge if:

- users cannot accurately explain what stayed local and what left the device after seeing the receipt;
- the receipt becomes a technical activity log rather than a decision-useful assurance;
- the system cannot bind each statement to authoritative runtime events;
- users prefer the incumbent flow once output quality and task completion are held constant; or
- demand is admiration for privacy language rather than repeated sensitive-file work.

## Smallest validation test

### Stage 0 — internal synthetic benchmark, no local-model build

1. Use five synthetic fixtures: a tax return, legal brief, health-result PDF, pricing spreadsheet and ordinary non-sensitive document. Include repeated names, identifiers in tables, one long-context case and one deliberately ambiguous field.
2. Define the expected data boundary before each task: local-only fields, permitted masked query, cloud-allowed public research, output destination and approval requirement.
3. Produce one static receipt prototype from deterministic fixture metadata, not inferred or invented agent narration. It must answer: `Device`, `Local sources`, `Information sent`, `Masking`, `Approval`, `Result`, `Retention/revoke`.
4. Ask Sam to inspect each receipt and state what left the device, what remained, and what action could still be revoked. Record errors rather than coaching the answer.
5. Compare the result against the published Perplexity flow and the existing Aire/Donworth acceptance language. Any false receipt, unexplained transfer, hidden approval or incorrect answer stops the wedge.

**Pass gate:** 5/5 correct boundary explanations, zero false receipt fields and a clear preference for the receipt over a generic “processed locally” label. This only justifies an independently reviewed implementation specification; it does not justify a local-model integration.

### Stage 1 — only after a fresh decision

If Stage 0 passes and an eligible 24 GB+ host exists, Forge may receive a separate isolated-worktree task to test one compact classifier/local worker against the existing five-task acceptance suite plus adversarial PII fixtures. Vera must independently verify the exact artifact and runtime evidence. No customer data, paid provider, tester, installation, release or public privacy claim is authorised by this brief.

## Downside and constraints

- Perplexity has already compressed the feature gap; copying its flow would produce a weaker follower product.
- A receipt is valuable only if every field is derived from authoritative events. Decorative privacy copy would increase liability and false confidence.
- PII detection does not cover all confidential or privileged information, business secrets, harmful instructions or context-dependent sensitivity.
- Local processing shifts risk to the device: malware, backups, logs, model caches, generated files and remote control still need explicit boundaries.
- A 24 GB+ hardware requirement narrows consumer reach and may turn this into a premium managed-business proposition rather than a mainstream default.
- This evidence does not prove Irish SME willingness to pay, legal compliance, enterprise procurement readiness or Perplexity's real-world task success.

## Approval boundary

This brief authorises only durable research capture and a future internal synthetic design test. It authorises no software implementation, model download, hardware purchase, subscription, API or provider activation, customer-data processing, tester invitation, outreach, pricing claim, production mutation, installation, signing, distribution or public privacy statement. Substantial implementation remains Forge-owned in an isolated worktree and exact-artifact verification remains Vera-owned; spending, external testing and release remain Sam-approved.

## Open questions

1. Is PII-Tracer source/model access, licence and commercial reuse actually available now, or only announced?
2. Does Perplexity's production app use the reported overlapping-window method on long files and conversations?
3. What non-PII confidentiality classes and deterministic policies does the production gate enforce?
4. Can users export an exact per-task record of what crossed the boundary, or only see live status and admin audit events?
5. Does a privacy-boundary receipt improve comprehension and repeated use enough to justify implementation complexity?

## Connected vault notes

- [[context/business-opportunities-moc]] — opportunity map
- [[context/index]] — source signal entered through the canonical context index
- [[companies/donworth-ai-solutions]] — parent company and desktop product context
- [[companies/personal-agent]] — Aire venture and invisible-routing principle
- [[project_state/donworth-studio]] — current exact-artifact and private-alpha gates
- [[project_state/personal-agent]] — current Aire runtime and device acceptance state
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]] — unchanged local-model hardware and evidence gate
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — authoritative evidence and receipt standard
- [[briefs/2026-08-05-personal-assistant-research-codex]] — prior competitive thesis and user-legible data-plane hypothesis
- [[briefs/2026-09-01-donworth-imessage-owner-desk-validation-wedge]] — complementary remote owner-control validation path

## Sources

[1] Perplexity, “Introducing Hybrid Compute on Mac,” 1 September 2026: https://www.perplexity.ai/hub/blog/introducing-hybrid-compute-on-mac

[2] Perplexity, “Hybrid Compute on Apple silicon,” accessed 3 September 2026: https://www.perplexity.ai/hub/products/hybrid-compute

[3] Perplexity Secure Intelligence Institute, “PII-TRACE: Detecting Personal Data Before It Leaves a Device,” 1 September 2026: https://www.perplexity.ai/hub/blog/pii-trace-detecting-personal-data-before-it-leaves-the-device

[4] John Voorhees, MacStories, “Perplexity Introduces ‘Hybrid Compute’ for Computer Agent on Apple Silicon Macs,” accessed 3 September 2026: https://www.macstories.net/news/perplexity-introduces-hybrid-compute-to-keep-sensitive-data-local

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-personal-assistant-research-codex]]
- [[briefs/2026-09-01-donworth-imessage-owner-desk-validation-wedge]]
- [[companies/donworth-ai-solutions]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[project_state/donworth-studio]]
- [[project_state/personal-agent]]

