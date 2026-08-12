---
title: Irish decision simulation opportunity
created: 2026-08-12
status: exploratory
kind: opportunity-brief
source_quality: mixed-primary-and-company-claims
companies:
  - personal-agent
  - openhouse-ai
---

# Irish decision simulation opportunity

## Founder question

Could Ireland use AI-driven simulation to stress-test policy, infrastructure, marketing and other major decisions before committing money or creating avoidable externalities? Is this an Aire capability, a separate company, or something currently beyond a solo founder?

This brief follows Sam's Moonshots reflection and connects to [[companies/personal-agent]], [[project_state/personal-agent]], [[companies/openhouse-ai]], [[context/business-opportunities-moc]] and [[briefs/2026-08-12-aire-irish-trust-simplicity-and-sovereignty-thesis]].

## Executive judgement

This is a real and underused technology family, not science fiction. The opportunity is not to build a literal digital replica of Ireland that predicts the future. The credible product is a calibrated decision laboratory that tests explicit scenarios, reports distributions and sensitivities, and makes its assumptions inspectable.

Aire should not absorb a broad "simulate Ireland" promise into its core roadmap now. Aire can eventually become the exceptionally simple conversational front end for specialist simulation engines. The simulation model, validation regime and data pipeline should remain a separate capability, and possibly a separate business, because their scientific and liability requirements differ from a personal agent.

The best first step is a bounded Irish backtest, not a national platform or government sales effort. Pick one historical decision with observed outcomes, build the smallest model that could have informed it, preregister evaluation criteria, compare against a simple baseline and a human expert, and stop if the model does not add decision value.

## What the Moonshots episode actually said

The relevant section of Moonshots episode 278 was checked against the publisher's full audio, not inferred from show notes.

- Around 06:53, the panel says China simulated a society of one billion AI agents with personalities, memory and beliefs.
- Around 07:29, it identifies the Light Society paper.
- Around 08:04, it describes a mixture of full language models and distilled surrogates.
- Around 08:05 to 08:16, it claims four million agents were sent to re-education camps after fourteen hours.
- Around 12:07 to 13:35, the panel discusses policy simulation, a digital twin of civilisation and the risk of confusing a simulation with reality.
- Around 13:49, it imagines one hundred million synthetic customers testing products.
- Around 14:31 to 15:43, Dave Blundin mentions Aaru as a Link Ventures investment doing commercial population simulation.

## Central fact check: the billion-agent story was oversold

The paper is real: [Modeling Earth-Scale Human-Like Societies with One Billion Agents](https://arxiv.org/abs/2506.12078v2). It is a preprint, not a peer-reviewed result. The project is Light Society, which is distinct from Tsinghua FIB Lab's similarly named AgentSociety work.

What it actually demonstrates:

- Light Society is a framework for agent-based social simulation using an event queue and a mixture of full language models and cheaper surrogates.
- The billion-scale experiment uses a one-billion-node social network with 20% influencers and 80% influencees.
- Each node samples from a fixed pool of 10,000 cleaned World Values Survey demographic profiles.
- Each node's relevant state is only one of three positions on a controversial statement: agree, disagree or neutral.
- Direct language-model inference at one billion scale is explicitly described as infeasible.
- Gemini 2.0 Flash generated approximately 400,000 teacher interactions per topic.
- A distilled embedding-MLP surrogate learned those outcomes.
- The system precomputed a 10,000 × 10,000 × 3 × 3 lookup table covering 900 million input combinations.
- The actual billion-node simulation then resolved interactions through vectorised table lookup over 100 rounds.

The paper does not disclose the GPU or CPU specification, runtime, memory footprint, token count, API spend, energy use, code, trained weights, lookup table or reproducible scripts for the reported billion-node run. Its claim of orders-of-magnitude cost reduction therefore cannot be converted into an independently verified bill of materials.

That is technically impressive, but it is not one billion autonomous human-like minds continuously thinking, remembering and making open-ended life decisions. It is a highly optimised opinion-diffusion model with language-model-derived transition rules.

The paper contains no match for "re-education" or "14 hours" in the inspected primary text. Its reported experiment does not support the podcast's dramatic camp story. That claim appears to be a conflation, embellishment or reference to another unlinked experiment and should not be repeated as fact.

The paper itself warns that simulated populations are hypotheses to test empirically, not evidence about real societies. It also names inherited survey and model bias and the possibility of misuse in information operations.

## Aaru: the commercial proof point

[Aaru](https://aaru.com/) is a real commercial company building simulated populations from public, licensed and customer data. Its product is closer to the opportunity Sam described than the Light Society paper.

Aaru's official technical explanation says:

- Customers define the decision, success conditions, populations and questions.
- Populations combine census and public records with licensed transaction, location, search, media and other behavioural signals, plus customer context.
- Traits are modelled jointly rather than as independent spreadsheet columns.
- Models are trained at individual and aggregate levels against observed outcomes.
- Results are distributions under stated conditions, not claims about one named person's next action.
- Validation is use-case-specific and should rely on held-out real outcomes.

Its official EY case study claims a blinded recreation of the 2025 Global Wealth Study:

- 3,600 affluent investors across more than 30 markets
- 53 matched single-choice questions
- a one-day simulation versus six months of fieldwork
- median Spearman correlation of 0.90
- average difference of 7.1 percentage points per question

Those are company and partner claims, not independent peer review. They are still meaningful commercial evidence because the task, benchmark and divergence are described. The strongest part of Aaru's positioning is not "AI people are always better than surveys." It is that a calibrated population can become a repeatable decision asset and can sometimes be tested against subsequent behaviour.

Aaru's site names John Kessler as co-founder and CTO and Cameron Fink as co-founder and CEO. Investor Redpoint also lists Ned Koh as a founder and says it partnered in Aaru's 2026 Series A. The company has offices in New York and Singapore. Its product is enterprise-led: the public route scopes pilots through sales, while fees and deliverables sit in an Order or statement of work. No public price card was found.

Aaru's legal boundary is revealing. Its terms describe outputs as synthetic and inherently probabilistic, without a warranty of accuracy, completeness or reliability. Its acceptable-use policy requires human review and prohibits relying on outputs for medical, legal, financial and similarly consequential decisions. This supports positioning simulation as decision research rather than an oracle.

## There is no single ChatGPT of simulation

Simulation is a family of methods. The correct engine depends on the decision:

- Monte Carlo and sensitivity analysis for uncertainty in financial, operational and risk assumptions
- system dynamics for feedback loops and stocks and flows
- discrete-event simulation for queues, operations, hospitals and service systems
- agent-based modelling for heterogeneous actors and interaction effects
- microsimulation for tax, welfare, health and household-level policy effects
- traffic and mobility simulation for roads, transit, pedestrians and demand
- digital twins for calibrated physical or operational systems updated from live data
- generative-agent simulation for language-rich behaviour, beliefs, negotiation and qualitative response

Language-model agents are useful where natural-language interpretation and heterogeneous behaviour matter. They are not automatically the best choice for traffic flows, queues, engineering physics or fiscal distribution. A credible system combines methods rather than forcing every question through synthetic people.

## What can be built now

A bounded prototype is attainable now on a Mac plus modest cloud compute.

Verified open foundations include:

- [Mesa](https://mesa.readthedocs.io/latest/), an Apache 2.0 Python framework for agent-based models with agent management, spatial grids, data collection and browser visualisation
- [SUMO](https://sumo.dlr.de/docs/), an open-source microscopic traffic simulator supporting large networks, pedestrians, public transport, logistics, emissions, OpenStreetMap import and Python control
- [Concordia](https://github.com/google-deepmind/concordia), Google DeepMind's generative social-simulation library using agents, components and a Game Master to resolve natural-language actions in grounded environments
- conventional Python statistical modelling for Monte Carlo, calibration, uncertainty and held-out validation

For founder-scale work, the software licence cost can be zero. A narrow 100-home, one-year hourly model should run locally, with roughly €0 to €50 per month sufficient for storage, scheduled runs and a small dashboard. A credible toy model may take two to six evenings; a well-instrumented narrow pilot is more plausibly four to eight part-time weeks. The expensive work is cleaning data, encoding defensible domain rules and obtaining measured outcomes for validation, not raw compute.

A country-scale decision capability is not mainly blocked by agent count. Its real constraints are:

- obtaining representative and legally usable data
- defining causal mechanisms rather than demographic resemblance
- calibrating against historical outcomes
- validating outside the training period
- quantifying uncertainty and sensitivity
- exposing assumptions and failure boundaries
- earning domain and institutional trust

Census aggregates can create a plausible synthetic population. They do not reveal how people will respond to a novel policy. That requires behavioural evidence, causal assumptions and repeated validation.

## Opportunity assessment

### National policy and government

High potential value, but a poor first commercial wedge for a solo founder. Procurement is slow, errors are consequential, domain validation is demanding and public bodies should not receive a black-box prediction product.

A credible eventual offer would be "policy scenario stress-testing with transparent assumptions," not "we predict Ireland."

### Infrastructure and traffic

Technically credible and economically valuable. Existing traffic simulators already solve much of the mechanical problem. The commercial work is data preparation, calibration, scenario design, interpretation and a simple decision interface. It likely needs transport-planning or civil-engineering partners.

### Marketing and communications

The easiest generative-agent wedge to prototype and the closest to Aaru. It can test positioning, offers, creative and response variation before spending. It is also crowded and easy to fake. The proof must be prospective: freeze predictions, run a real campaign or panel, then score the model against outcomes and simple baselines.

### Housing and developer aftercare

This has the strongest founder and portfolio adjacency. A bounded model could test homeowner onboarding messages, likely support demand, adoption, recurring questions, defect-reporting routes or service-load scenarios across household profiles. It would share OpenHouse domain knowledge and could later use consented aggregate product outcomes.

It should not delay OpenHouse's developer handover and aftercare execution or Aire's Telegram parity. It is an experiment lane, not a new core roadmap.

## Recommended smallest experiment

Build an Irish homeowner communication simulator as a falsifiable research prototype.

1. Choose one narrow question, such as which of two handover messages produces higher portal activation and fewer avoidable support requests.
2. Build 500 to 5,000 synthetic household profiles from public CSO aggregate distributions and clearly labelled assumptions. Use no identifiable census microdata.
3. Run a hybrid model: conventional response priors plus a small number of language-model agents for qualitative reasons and edge cases.
4. Freeze the predicted ranking, response distribution and subgroup differences before seeing outcomes.
5. Test both messages with a real consented panel, historic campaign data or a future OpenHouse cohort.
6. Compare against a simple demographic baseline and a human expert forecast.
7. Pass only if the simulator improves decisions prospectively, remains calibrated across groups and gives stable sensitivity ranges.

The first Aire experience could then be beautifully simple:

> "Test these two homeowner messages with likely Irish new-build households. Show which wins, for whom, the uncertainty, and what evidence the model is missing."

Aire would orchestrate the job, explain progress in plain English, request approval for data use, and render scenario charts and assumptions. The specialist simulator would produce the evidence. Aire should never silently convert a language-model role-play into a confident prediction.

### Strong second pilot: scheme energy scenarios

If a developer has a real energy, EV-readiness or onboarding decision, a second credible pilot is one anonymised 50-to-200-home scheme with six transparent household archetypes and hourly scenarios for heat pumps, EV charging windows, solar, tariffs and consent. Outputs should be peak-load bands, simultaneous-charging risk, annual-energy bands and sensitivity ranges. It must be called a planning scenario, not grid-capacity approval or a predictive digital twin. Grid, voltage or planning-grade claims require an energy-domain partner and measured validation.

## Product and company recommendation

- Keep Aire's immediate priority on complete Telegram and Hermes outcome parity, speed, beauty, artifacts and trust.
- Treat simulation as a specialist tool Aire can invoke later, not as a headline consumer feature now.
- Explore the simulator as a separate research or venture lane with shared infrastructure: Hermes orchestration, Aire interaction design, Ground Zero provenance and OpenHouse domain access.
- Do not approach government with a national digital-twin promise before a published backtest and an external domain partner.
- Do not pitch synthetic audiences as truth. Pitch faster scenario exploration with measured validation and explicit uncertainty.

The opportunity is real. The moat is not running thousands of agents. It is Irish data rights, validated behavioural models, domain partnerships, transparent assumptions and a calm interface that makes rigorous simulation usable by decision-makers.

## Evidence ledger

### Primary and direct sources

- Moonshots episode 278 on Spotify: https://open.spotify.com/episode/0VzasTApvh3lWwplvGj5cw
- Publisher RSS audio: https://traffic.megaphone.fm/DVVTS1493216813.mp3
- Light Society abstract: https://arxiv.org/abs/2506.12078v2
- Light Society full text: https://arxiv.org/html/2506.12078v2
- Aaru simulation methodology: https://aaru.com/simulation
- Aaru about page: https://aaru.com/about
- Aaru EY case study: https://aaru.com/case-studies/ey-wealth-research
- Aaru Breakwater case study: https://aaru.com/case-studies/breakwater-conviction-advantage
- Redpoint Aaru portfolio page: https://www.redpoint.com/companies/aaru/
- Aaru master terms: https://aaru.com/policies/msaterms
- Aaru acceptable-use policy: https://aaru.com/policies/acceptable-use
- Mesa documentation: https://mesa.readthedocs.io/latest/
- SUMO documentation: https://sumo.dlr.de/docs/
- Concordia repository: https://github.com/google-deepmind/concordia

### Evidence boundary

- Podcast discussion is commentary, not validation.
- Light Society demonstrates a specific scalable social-dynamics architecture, not a complete national behavioural replica.
- Aaru performance figures are first-party and partner-published claims pending independent replication.
- No production change, government outreach, data acquisition or paid service follows from this brief without separate approval.
