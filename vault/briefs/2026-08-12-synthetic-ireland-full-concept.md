---
title: Synthetic Ireland / Synthetic Europe full concept
created: 2026-08-12
updated: 2026-08-12
status: active-r-and-d
kind: research-and-business-concept
source: Sam's supplied synthetic_ireland_full_concept.md
companies:
  - personal-agent
  - openhouse-ai
---

# Synthetic Ireland / Synthetic Europe

## Thesis

Synthetic Ireland is an attempt to build a statistically defensible digital population of Ireland and test whether it can predict how real Irish people respond to products, prices, messages, policies and decisions before those outcomes are known. The ambition is a calibrated prediction engine for aggregate human populations, not a collection of convincing AI personas. Ireland is the laboratory; Europe is the eventual market.

The core hypothesis is that a statistically reconstructed population, relevant behavioural information, frozen world-state context, probabilistic AI/statistical models and empirical calibration can predict aggregate human responses more accurately than naive LLM prompting and strong conventional baselines.

The proposed moat is **population reconstruction + proprietary behavioural data + multiple prediction models + calibration + accumulated prediction-to-reality feedback**.

## Intended architecture

1. **Structural population:** defensible geography, age, sex, economic status, education, marital status and related attributes.
2. **Behavioural population:** eventually risk tolerance, price sensitivity, brand loyalty, technology adoption, trust, media consumption, switching behaviour and previous choices.
3. **World state:** dated prices, competitors, inflation, offers and other information available at prediction time.
4. **Decision models:** statistical baselines, national LLM forecasts, profile-conditioned forecasts and model ensembles.
5. **Calibration and uncertainty:** bias correction, prediction intervals, confidence, historical error and data-coverage scores.

Accuracy is the objective. No model family earns a place merely because it uses an LLM.

## Ireland-first foundation

The population work uses official Irish public data: CSO Census 2022 SAPS across 3,420 Electoral Divisions, the official SAPS glossary, Tailte Éireann ED geography, CSO PEA04 age × sex × NUTS3 estimates, higher-order Census tables FY048/FY050/F7024, and IPEADS02/IPEADS08 quarantined as independent comparisons. The pipeline preserves provenance, source vintage, units and hashes.

P0 intentionally assumes independence and exposes pathologies. P1 uses official county age × sex × economic-status relationships with iterative proportional fitting. P2 adds marital status and education using official conditional relationships. The deterministic 10,000-person inference cohort uses fixed-seed stratified sampling across NUTS3 × sex × age.

Reported development checks include approximately 4.37m reweighted age-15+ population, near-zero ED marginal error, sharply reduced implausible age/economic-status combinations, approximately 0.13% structural total-variation error under stratification, and approximately 5.95% weighted relative absolute difference against quarantined IPEADS02 comparisons. These demonstrate numerical consistency and sampling quality, not behavioural validity.

## Experimental programme

- **E000:** pipeline smoke test.
- **E001:** ten source-verified Standard Eurobarometer 102 questions; diagnostic only.
- **E002:** roughly 100–200+ historical question-level comparisons for ablations, model comparison and calibration.
- **E003:** prospective clean-room test with new questions, frozen population/code/prompts/predictions and a representative Irish sample.
- **E004:** proprietary longitudinal behavioural panel.
- **E005:** actual clicks, conversions, purchases, churn, pricing response and A/B-test outcomes.

The provisional E003 green gate is national macro MAE ≤4 percentage points, at least 25% lower MAE than the strongest preregistered non-LLM baseline, and 90th-percentile absolute error ≤8pp. Historical results are development evidence only because published answers may have been present in model training. E003 must freeze predictions before the answers exist.

## Current state at capture

The certified E001 package contains 85,220 registered OpenCode Go requests using DeepSeek V4 Flash and V4 Pro robustness arms. The initial Flash run encountered sustained HTTP 429s; successful responses were preserved and unresolved requests were being repaired with bounded concurrency and a sustained-rate probe. Irish Eurobarometer truth remained sealed at the time of the supplied document.

No predictive-validity claim should be made until the blind evaluation is complete.

## Integrity rules

Keep the inference lab and truth vault separate. Before truth is revealed, freeze and hash the population cohort, questions, world state, prompts, model/config, random seed, code commit and request bundle. Do not change prompts because results look odd, remove difficult questions, tune the population after seeing outcomes, cherry-pick questions, or allow truth access between model arms.

A bad clean result is more valuable than a good contaminated result.

## Commercial direction

If the evidence survives E001 and E002, initially sell high-value simulation/research projects to Irish and UK enterprise customers. Later possibilities include an enterprise scenario platform, simulation credits, calibrated datasets, implementation and API/data licensing. Choose the first vertical empirically from performance, with consumer pricing, concept testing, FMCG/retail, telecom switching, messaging, economic sentiment and housing/developer aftercare as candidates.

The strategic sequence is **Synthetic Ireland → prospective proof → UK/major EU markets → Synthetic Europe**. The product should report distributions, subgroup effects, sensitivity, uncertainty, evidence trails and situations where the model should not be trusted.

## Relationship to Aire and OpenHouse

Aire should remain the simple orchestration and explanation layer, not absorb an unvalidated national-prediction promise into its core roadmap. The specialist simulator can eventually be invoked through Aire, with explicit data-use approval, plain-English progress, scenario charts, assumptions and evidence receipts. OpenHouse provides a possible domain wedge for a bounded homeowner communication or developer-aftercare experiment, but this programme must not delay Aire parity or OpenHouse execution.

## Connected vault notes

- [[briefs/2026-08-12-irish-decision-simulation-opportunity]] — prior evidence audit and bounded wedge recommendation
- [[companies/personal-agent]] — Aire venture and possible orchestration layer
- [[project_state/personal-agent]] — current Aire build state
- [[companies/openhouse-ai]] — possible domain validation partner/wedge
- [[context/business-opportunities-moc]] — opportunity map
- [[context/index]] — Ground Zero entry point

## Source provenance

Full source supplied by Sam as `synthetic_ireland_full_concept.md` on 12 August 2026. Primary foundations named in the source: CSO Census 2022 SAPS, CSO PxStat/PEA04, Tailte Éireann ED geography, European Commission Eurobarometer, and private repository `sam-evolv/synthetic-ireland`. The original supplied source is retained in the chat/document cache; this note is the durable Ground Zero synthesis.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-12-irish-decision-simulation-opportunity]]
- [[companies/openhouse-ai]]
- [[companies/personal-agent]]
- [[context/business-opportunities-moc]]
- [[context/index]]
- [[project_state/personal-agent]]
