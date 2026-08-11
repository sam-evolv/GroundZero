---
title: AI-Augmented Founder Execution OS
purpose: A human-led operating system for turning voice context into decisions, experiments, and neglected high-leverage action
status: active
created: "2026-07-14"
---

# AI-Augmented Founder Execution OS

## The operating principle

AI is the **chief-of-staff layer**, not the founder. It should preserve context, make uncertainty visible, identify neglected leverage, and prepare decisions. Sam retains agenda-setting, judgement, relationship ownership, risk acceptance, and final approval for external or irreversible actions.

The output of the system is not more summaries. It is a small number of evidence-linked commitments that increase cash, learning speed, or strategic option value.

## 1. The record of truth

Every captured claim belongs in exactly one state. Do not collapse these states in synthesis.

- **Fact**: externally verifiable observation, timestamp, source, confidence. Example: `362 live OpenBook venues, source: production snapshot, observed 2026-07-14`.
- **Reported claim**: someone said it, but it is not independently verified. Preserve speaker and date.
- **Assumption**: a necessary but unproven input to a plan. State the falsifier and deadline.
- **Inference**: interpretation derived from named facts, not a fact itself.
- **Forecast**: probability plus time horizon and base rate or reference class.
- **Decision**: a deliberate commitment with owner, trade-off, review trigger, and reversible/irreversible classification.
- **Experiment**: a cheap test of one material assumption with a pass/fail threshold.

Use source IDs in every AI-generated brief. If source, date, or confidence are absent, label the statement **unverified**. AI may propose an inference, but cannot silently promote it to fact.

### Telegram voice capture pipeline

1. Save the original voice note/audio reference, timestamp, and transcript as immutable provenance.
2. AI produces a short extraction, not a polished rewrite: facts, claims, assumptions, decisions spoken aloud, commitments, people to follow up with, and questions.
3. File high-confidence durable information into Ground Zero. Leave ambiguity in `capture/inbox.md` with the original phrasing and a review flag.
4. Ask only one clarification when it materially changes action. Do not turn voice capture into an interview.
5. Create one action only when it has a clear owner, next physical step, and deadline. Otherwise it is evidence, not a task.

**Default output to Telegram:** “Captured: 2 facts, 1 assumption, 1 decision candidate. The single question that changes the plan is: …”

## 2. Decision journal, before outcome is known

Create `decisions/YYYY-MM-DD-<slug>.md` whenever a choice commits money, reputation, more than two focused evenings, a key relationship, or a strategic direction. The purpose is calibration and learning, not bureaucracy.

Required fields:

```markdown
# Decision: <one-line choice>
- Date / owner:
- Decision class: reversible | one-way door
- Commitment and explicit non-choice:
- Objective / metric affected:
- Facts and source IDs:
- Assumptions and their falsifiers:
- Alternatives genuinely considered:
- Base rate / reference class:
- Forecast: P(outcome), date, and confidence rationale:
- Pre-mortem: three ways this fails, earliest signal, mitigation:
- Disconfirming evidence sought:
- Next review date and decision trigger:
- Outcome (complete later, do not edit the original rationale):
- Calibration score / lesson:
```

Rules:

- Write it **before** execution or external validation arrives.
- Timebox routine reversible decisions to 10 minutes. Reserve full journals for consequential calls.
- Record the alternative rejected. A decision without a non-choice is usually an intention.
- Do not use outcome alone to judge quality. A sound decision can lose; an unsound one can get lucky.
- On review, append rather than revise the original rationale. This prevents hindsight laundering.

## 3. One unified opportunity and action triage

Ideas, requests, risks, and projects enter one queue. They compete against the same scarce constraint: founder attention.

### Gate 1: Is it real enough to enter?

An item needs a named customer/problem, a concrete next action, and at least one evidence source. Otherwise it stays as a raw capture, not a project.

### Gate 2: Score the expected value of the next 90 minutes

Rate each 0–5, then explicitly write why:

- **Cash impact** within 90 days
- **Strategic option value** or reusable asset
- **Learning value**: resolves a decision-critical uncertainty
- **Evidence strength**: direct customer/production signal beats AI/web synthesis
- **Founder advantage**: access, credibility, proprietary context
- **Neglect cost**: damage/opportunity if ignored for 30 days
- **Effort and dependency drag**
- **Reversibility / downside**

Use a simple ranking heuristic, not false numerical precision:

`Priority = (cash + option + learning + evidence + founder advantage + neglect cost) − effort − dependency drag − downside`

Then apply two hard constraints:

1. No item may displace the current top priority unless it can explain the trade-off in one sentence.
2. WIP limit: one company-changing build, one sales/distribution motion, and one maintenance obligation. Everything else is queued, delegated, or killed.

### The neglected-leverage scan

Once weekly, the system must search for **absence**, not just new ideas. It should surface no more than three candidate interventions, each with evidence and a proposed 30-minute first move:

- Customer/revenue actions with no logged touchpoint for 14 days.
- Decisions past their review date or assumptions with no test.
- Valuable relationships with no next step.
- A known bottleneck repeated in 3+ notes but lacking an owner or experiment.
- Compounding assets that have gone stale: case studies, product telemetry, referral loops, reusable integrations, sales pipeline.
- Risky work where the latest evidence contradicts the current plan.
- The opportunity cost of ongoing work, measured as what a customer call, offer test, or core product fix was deferred.

Do not call this “proactivity” unless it identifies a named neglected asset, shows the evidence, proposes a bounded action, and makes the displacement cost visible.

## 4. Cadence that does not become productivity theatre

### Daily, 5–10 minutes, founder-led

- Read the live dashboard, not an AI-generated novel.
- Choose one revenue/learning move and one delivery move.
- Review only exceptions: stale decisions, blocked commitments, anomaly signals, and a maximum of one neglected-leverage prompt.
- Send a voice note at day end. AI files evidence and asks whether any commitment changed.

### Weekly executive review, 45 minutes, Monday or Sunday

**Inputs AI prepares, founder reviews:** live metrics, customer/contact events, active WIP, decision journal items due, contradictions, and prior-week commitments. Preparation is evidence-linked and capped at one screen per company.

1. **Reality check (10 min):** What changed in revenue, product reliability, pipeline, customer truth, and personal capacity? Facts first, no narrative.
2. **Decision review (10 min):** Close or extend due decisions. Compare forecast to outcome. Name one calibration error.
3. **Leverage audit (10 min):** Identify the one neglected action with the largest plausible 90-day impact. Specify what stops if it starts.
4. **Portfolio allocation (10 min):** Decide what each venture gets this week. Enforce WIP limits. Explicitly kill or park work.
5. **Commitment (5 min):** Lock three outcomes, each with an observable proof by Friday. AI publishes the brief and schedules prompts, but cannot add commitments itself.

A weekly review succeeds only if it changes the calendar, queue, decision state, or an assumption test. A beautiful summary with no changed commitment is automation theatre.

### Monthly, 60–90 minutes

- Reassess company-level bets against actual traction and founder capacity.
- Audit “zombie projects”, assumptions older than 30 days, and items created but never touched.
- Ask: “What would we stop if this were a fresh portfolio today?”
- Prune notes and automations that do not influence a decision or action.

## 5. Automation design and approval boundaries

### Automate safely

- Transcription, source linking, deduplication, extractive summaries.
- Detecting stale notes, due decision reviews, missing source/confidence fields, repeated bottlenecks, and broken commitments.
- Preparing research briefs, experiment cards, meeting follow-ups, and a proposed ranked queue.
- Logging actions, outcomes, and provenance.

### Never automate without explicit approval

- Contacting prospects, customers, partners, or investors.
- Financial commitments, pricing changes, publishing, deletion, production changes, or reprioritising the founder’s calendar.
- Promoting a claim to fact, closing a decision, or marking an experiment successful.

For any consequential action, require a clear approval screen: action, audience, data used, downside, rollback, and a human confirmation. Keep an action receipt after execution.

## 6. Failure modes and countermeasures

### Automation theatre

**Symptom:** daily dashboards, agent councils, and summaries proliferate while customer contact, shipping, or cash does not change.

**Countermeasure:** Every recurring automation has one owner, one decision/action it feeds, a measurable output, a time budget, and a monthly kill test. Delete or disable the automation if it has not changed a decision in 30 days.

### Over-research

**Symptom:** an item accumulates links and market maps while the critical unknown remains untested.

**Countermeasure:** Research requests must start with the decision they unlock, evidence standard, and stop rule. Default to a 90-minute cap, then run the cheapest customer or product test. No research without a stated falsifier.

### Confirmation bias and AI sycophancy

**Symptom:** the system repeats the founder’s preferred narrative and retrieves only supporting evidence.

**Countermeasure:** Each consequential decision requires a disconfirming-evidence section, competing hypothesis, reference class, and pre-mortem. Configure the coach prompt to challenge the plan from evidence, not to generate contrarian theatre. Surface missing evidence as strongly as supporting evidence.

### Losing human agency

**Symptom:** the founder follows AI rankings, starts tasks they do not endorse, or delegates values/trade-offs to a model.

**Countermeasure:** Founder chooses goals, constraints, final priorities, and all outward actions. The system must show rationale, sources, uncertainty, alternatives, and the cost of its recommendation. Provide “reject”, “park”, and “why not?” controls. Measure whether AI improves judgement, not its autonomy.

### Metric capture and Goodhart’s law

**Symptom:** the system optimises activity counts, streaks, or dashboard freshness rather than economic outcomes.

**Countermeasure:** tie each active item to a cash, retention, activation, learning, or risk metric. Review qualitative customer evidence beside metrics. Rotate audit questions so the system cannot optimise one proxy indefinitely.

### Context rot

**Symptom:** old claims are repeatedly treated as live truth.

**Countermeasure:** include observed date, source, confidence, and expiry/review date in all machine-readable facts. Mark stale evidence. Preserve contradictions, never silently overwrite history.

## 7. Suggested Ground Zero implementation

- `capture/inbox.md`: raw Telegram/voice extraction with source and ambiguity retained.
- `briefs/YYYY-MM-DD-founder-exec-review.md`: weekly evidence-linked review and locked commitments.
- `decisions/`: immutable pre-outcome decision journals plus outcome appendices.
- `items/`: only triaged work with decision link, metric, next action, and review date.
- `context/founder-execution-os.md`: this durable operating protocol.
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]: the recommended voice thinking surface (ChatGPT Voice). Use it for live decision sparring, product review, and drafting; it complements the Telegram voice capture pipeline above. Keep Ground Zero as the durable record and Hermes as the execution layer. Feature availability is plan/region-gated — verify each control in-app before depending on it.
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]: the 14 July revenue/proof-loop plan, retained as an evidence-linked historical operating plan rather than a current Cara activation instruction.
- Dashboard additions: `assumptions due`, `decisions due`, `no-customer-touchpoint >14d`, `repeated bottleneck`, `WIP violations`, and `one recommended neglected-leverage action`.

## Minimum viable rollout, four weeks

**Week 1:** enforce the fact/claim/assumption/decision taxonomy on voice capture. Start decision journals only for consequential choices.

**Week 2:** introduce a 45-minute weekly review. Cap it at three commitments and a strict WIP limit.

**Week 3:** add the neglected-leverage scan using existing Ground Zero data. Require evidence and a 30-minute first action.

**Week 4:** measure: commitments completed, customer conversations/offers sent, assumptions tested, decisions reviewed on time, and AI prompts rejected. Remove anything that failed to change a decision or action.

## Primary references

1. NIST, **AI Risk Management Framework 1.0** (2023), especially the Govern, Map, Measure, Manage functions. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
2. NIST, **AI RMF Generative AI Profile** (2024), risk management practices specific to generative AI systems. https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
3. European Union, **Regulation (EU) 2024/1689 (AI Act)**, Article 14, human oversight requirements. https://eur-lex.europa.eu/eli/reg/2024/1689/oj
4. Richards J. Heuer Jr., CIA Center for the Study of Intelligence, **Psychology of Intelligence Analysis** (1999), chapters on confirmation bias and analysis of competing hypotheses. https://www.cia.gov/resources/csi/books-monographs/psychology-of-intelligence-analysis-2/
5. U.S. Army, **FM 7-0: Training** (2021), Appendix G on after-action reviews and evidence-based learning loops. https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35973-FM_7-0-000-WEB-1.pdf
6. Philip E. Tetlock, **Expert Political Judgment** (2005), empirical work on calibration, accountability, and probabilistic forecasting. Princeton University Press. https://press.princeton.edu/books/paperback/9780691128719/expert-political-judgment

## Connected vault notes

- [[context/index]] — shared context entry point
- [[context/review-workflow]] — existing review loop
- [[context/capture-workflow]] — existing source-to-note process
- [[context/automation-ideas]] — automation backlog
- [[context/llm-wiki-pattern]] — provenance and durable knowledge graph
- [[decisions/_Index]] — decision log
- [[items/_Index]] — active work queue
- [[people/sam-donworth]] — founder constraints and working style

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-21-escape-velocity-income-engine]]
- [[briefs/2026-07-22-six-month-agent-co-pilot-challenge]]
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-phosphen-karpathy-llm-use-source-audit]]
- [[briefs/agentic-value-creation-revenue-cara-proof-plan-2026-07-14]]
- [[briefs/chatgpt-voice-founder-os-2026-07-31]]
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[context/agentic-value-creation-mission]]
- [[context/automation-ideas]]
- [[context/capture-workflow]]
- [[context/index]]
- [[context/llm-wiki-pattern]]
- [[context/mirror-review-protocol]]
- [[context/model-pack]]
- [[context/review-workflow]]
- [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]]
- [[items/ops-graph-engineering-pilot]]
- [[people/sam-donworth]]

