---
title: OpenHouse DTC voice stress-test synthesis
company_id: openhouse-ai
date: 2026-07-27
status: reviewed-synthesis
source: ChatGPT shared voice transcript supplied by Sam
---

# OpenHouse DTC voice stress-test synthesis

## Executive synthesis

The conversation did not invalidate the DTC master plan. It clarified the category above it.

OpenHouse is not fundamentally an upgrade-planning product, a bill analyser or an energy dashboard. It is:

> **The home-specific operating assistant that knows how this home is built, how its systems behave, how the household uses it, and what should happen next.**

Energy is the first recurring proof loop because it can create observable, time-bound evidence of value. The deeper product is context plus intervention:

1. Build the trusted model of this home.
2. Observe a relevant condition.
3. Detect a meaningful deviation or decision.
4. Explain it through Money, Comfort and Risk.
5. Recommend one bounded action.
6. Verify what happened.
7. Remember the result.

The conversation therefore strengthens the long-term Home Record and Home Agent thesis, while reopening the question of whether the first paid wedge should be Upgrade Ready or a more operational Home Performance Check.

## What Sam actually decided

### 1. The category is a home operating assistant

Sam's strongest and most durable direction is that the home deserves a dedicated assistant because it is expensive, complex, poorly documented and increasingly full of low-carbon systems that people are expected to operate without support.

The internal architecture can be called an operating system. The consumer promise should stay human:

> **OpenHouse knows your home and helps you run it right.**

### 2. The missing layer is homeowner operation

The problem is not only inefficient fabric or equipment. It is the gap between the technical potential of the home and the person's ability to understand and operate it.

OpenHouse should not tell people they are inefficient or blame them for underperformance. The respectful framing is:

> Modern homes are complicated. OpenHouse helps you get the best from yours.

“A-rated homes need A-rated homeowners” is memorable as an institutional or thought-leadership provocation. It is too blame-oriented for the primary consumer proposition unless testing proves otherwise.

### 3. Energy is the first recurring proof, not the full identity

Energy can support a visible loop:

- establish a baseline
- identify a specific operational opportunity
- recommend an action
- compare the next valid period
- qualify uncertainty and confounders
- add the result to the Home Record

The product must say “usage is down” or “estimated cost was lower under these assumptions” before it says “OpenHouse saved you this amount.” Attribution requires evidence.

### 4. The agent behaviour is the magic

Sam's heat-pump and open-window example is valuable because it defines the desired behaviour, not because that exact inference is ready to ship.

The reusable event-engine contract is:

1. Observe a condition.
2. Compare it with this home's expected state and external context.
3. Generate one or more hypotheses.
4. State confidence and what is not known.
5. Notify only when the likely value exceeds interruption cost.
6. Recommend the safest action.
7. Ask for a quick confirmation where it improves the home model.
8. Verify and record the result.

The language must avoid surveillance and false certainty. For example:

> Your heating system appears to be working harder than expected for today's conditions. If you are cooling the room by opening windows, lowering the set point may be more efficient.

### 5. The digital twin is accumulated, not demanded upfront

The end state is a living spatial, systems, energy and decision model. The first experience should build only enough of it to produce a valuable result.

Every context request must earn its friction immediately. The home model compounds because solving today's job leaves durable structured evidence behind.

### 6. External assistants can become distribution surfaces

The MCP idea is strategically strong if framed as a future permissioned Home Context API, not a raw data endpoint.

A household could eventually allow ChatGPT, Claude, an insurer, an assessor or a contractor to ask a bounded question such as:

- What heat pump and controls are installed?
- Which warranty applies?
- What evidence supports the current fabric description?
- What energy periods are comparable?

OpenHouse would enforce identity, scopes, consent, provenance, freshness, revocation and audit receipts. This makes general assistants complementary interfaces while OpenHouse remains the trusted home context authority.

## New product architecture

The transcript suggests three distinct magic moments.

### Capture magic

> OpenHouse understood my home without making me fill in a giant form.

A guided scan or walkthrough could identify:

- room sequence and approximate topology
- system locations
- visible equipment and nameplates
- furniture and major appliances where relevant
- doors, windows and obvious fabric clues
- external elevations and garden context

This should create candidate facts, not silent truth.

### Insight magic

> OpenHouse noticed something specific about my home that I did not know.

The insight must be based on evidence such as:

- HDF interval patterns
- tariff and bill fields
- BER recommendations
- weather-normalised heating signatures
- known equipment and controls
- user-confirmed behaviour

### Ongoing magic

> OpenHouse quietly noticed a meaningful change and told me what to do.

This requires a real refresh source. In Ireland, recurring live monitoring cannot initially depend on a universal smart-meter API. It may be available first only for homes with a supported vendor connector, a home hub, a retailer arrangement, or user-refreshed files.

## Walkthrough-video feasibility

### What is credible

Apple's official RoomPlan API uses the camera and LiDAR Scanner on supported iPhone and iPad devices to create a 3D room plan containing dimensions and furniture types.

A guided OpenHouse capture can also use multimodal vision to propose rooms, systems, assets, materials and nameplate information.

### What is not credible yet

A generic video from any phone should not be promised to create:

- survey-grade measurements
- a complete multi-storey floor plan
- hidden construction facts
- reliable external dimensions
- safe structural conclusions

Without LiDAR, calibrated scale, adequate coverage and user correction, a monocular video can produce an approximate semantic model but not authoritative geometry.

### Recommended experiment

Run a ten-home capture test before adding this to the product roadmap.

Compare:

1. supported iPhone or iPad RoomPlan capture
2. ordinary guided video
3. guided still photographs
4. an existing floor plan where available

Measure:

- time to capture
- room topology accuracy
- system and nameplate recognition
- material false facts
- correction time
- user-rated feeling that “OpenHouse knows my home”
- whether the captured facts change an actual recommendation

Progress only if at least 80% of job-relevant rooms and systems are captured, correction takes under two minutes, and no unsafe property fact is promoted without confirmation.

## Corrections to the voice discussion

### Smart-meter access

The assistant called smart-meter data universal and easy to connect. That is not established for Ireland.

The credible first route remains a customer-downloaded ESB Networks HDF, supplemented by bills. A universal public third-party ESB Networks API has not been verified. Supplier and device access varies by consent, product and commercial arrangement.

### Savings attribution

A 5% reduction between months is not automatically an OpenHouse saving. Weather, occupancy, billing length, tariffs, exports, holidays and changed equipment can all affect the number.

OpenHouse must separate:

- measured consumption change
- weather-normalised or comparable-period change
- estimated cost difference
- plausible contribution from an action
- verified saving where attribution is sufficiently supported

### Behavioural claims

The claim that 90% of Irish homes can run 25% more efficiently is an untested founder hypothesis. It cannot appear in marketing, funding applications or institutional proposals without a defined study.

### Data moat

A large dataset is not automatically a moat. The defensible asset is the combination of:

- permissioned, home-specific longitudinal context
- field-level provenance
- observed actions and outcomes
- workflows that improve the home model
- trusted distribution
- consumer control and portability

Raw household behaviour is sensitive. It must not be quietly accumulated for sale. Any aggregate research requires explicit purpose, consent, de-identification, minimum cohort thresholds and a DPIA.

## Product decision reopened

The existing Upgrade Ready Plan remains a credible high-intent acquisition product. The voice conversation surfaces a second candidate that may align better with recurring energy value.

### Candidate A: Upgrade Ready Plan

Promise:

> Before you spend thousands upgrading your home, know what to do first.

Strength:

- urgent and expensive decision
- easier willingness to pay
- produces a concrete plan

Risk:

- episodic
- may attract older retrofit homes where live connected-system value is weaker

### Candidate B: Home Performance Check

Promise:

> Find out how your home wants to be run, what is costing you, and what to change first.

Inputs:

- BER or handover information
- bill or HDF where available
- short guided systems capture
- a few operating questions selected by information value

Outputs:

- how this home is intended to operate
- one evidence-backed operational opportunity
- controls and system guide
- Money, Comfort and Risk findings
- a first Home Efficiency baseline with confidence
- one next action and one next evidence request

Strength:

- closer to recurring operation
- strongest for heat-pump, EV, solar and battery homes
- supports developer and institutional narratives

Risk:

- Irish recurring data access remains difficult
- value may be weak without sufficient evidence
- scoring can become gimmicky or misleading


## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[briefs/wiki-refiner-2026-07-28]]
- [[briefs/wiki-refiner-2026-07-29]]
- [[briefs/wiki-refiner-2026-07-30]]
- [[briefs/wiki-refiner-2026-07-31]]
- [[briefs/wiki-refiner-2026-08-01]]
- [[briefs/wiki-refiner-2026-08-02]]
- [[briefs/wiki-refiner-2026-08-03]]
- [[briefs/wiki-refiner-2026-08-04]]
- [[briefs/wiki-refiner-2026-08-05]]
- [[briefs/wiki-refiner-2026-08-06]]
- [[briefs/wiki-refiner-2026-08-07]]
- [[briefs/wiki-refiner-2026-08-08]]
- [[briefs/wiki-refiner-2026-08-09]]
- [[briefs/wiki-refiner-2026-08-10]]
- [[briefs/wiki-refiner-2026-08-11]]
- [[briefs/wiki-refiner-2026-08-12]]
- [[briefs/wiki-refiner-2026-08-13]]
- [[briefs/wiki-refiner-2026-08-14]]
- [[briefs/wiki-refiner-2026-08-15]]
- [[briefs/wiki-refiner-2026-08-16]]
- [[briefs/wiki-refiner-2026-08-17]]
- [[briefs/wiki-refiner-2026-08-18]]
- [[briefs/wiki-refiner-2026-08-19]]
- [[briefs/wiki-refiner-2026-08-20]]
- [[briefs/wiki-refiner-2026-08-21]]
- [[briefs/wiki-refiner-2026-08-22]]
- [[briefs/wiki-refiner-2026-08-23]]
- [[briefs/wiki-refiner-2026-08-24]]
- [[briefs/wiki-refiner-2026-08-25]]
- [[briefs/wiki-refiner-2026-08-26]]
- [[briefs/wiki-refiner-2026-08-27]]
- [[briefs/wiki-refiner-2026-08-28]]
- [[briefs/wiki-refiner-2026-08-29]]
- [[briefs/wiki-refiner-2026-08-30]]
- [[briefs/wiki-refiner-2026-08-31]]
- [[briefs/wiki-refiner-2026-09-01]]
- [[briefs/wiki-refiner-2026-09-02]]
- [[briefs/wiki-refiner-2026-09-03]]
- [[briefs/wiki-refiner-2026-09-04]]
- [[briefs/wiki-refiner-2026-09-05]]
- [[companies/openhouse-ai]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[project_state/oh]]


## Recommendation

Do not discard Upgrade Ready or declare Home Performance the winner from one conversation.

Test both propositions against the same evidence-backed concierge engine:

1. Show both promises to qualified homeowners.
2. Ask for payment or a refundable deposit, not stated preference.
3. Fulfil both from the same Home Record and evidence graph.
4. Measure payment conversion, time-to-value, action taken, second artifact and desire for continued monitoring.
5. Use the winner as the acquisition surface.
6. Keep the home operating assistant as the category and long-term product regardless of which entry message wins.

## The stronger company narrative

> Modern homes are increasingly efficient, connected and complicated, but the homeowner is still handed PDFs and left alone. OpenHouse becomes the assistant that knows this specific home. It explains how the home works, notices costly or confusing patterns, helps the household make better decisions, and remembers the outcome. Every useful interaction builds a permissioned Home Record that can later serve the homeowner through OpenHouse or another assistant they choose.

## Immediate next experiments

1. Produce one premium sample Home Performance Check using real permissioned or synthetic test evidence, clearly labelled.
2. Prototype the walkthrough capture manually before building computer-vision infrastructure.
3. Define five event-engine hypotheses that can run on HDF plus weather and home facts without claiming live monitoring.
4. Design the consumer Home Memory screen before increasing data collection.
5. Test Upgrade Ready against Home Performance with payment commitment.
6. Keep device control, universal live meter access and aggregate-data monetisation outside the first validation.

## Connected vault notes

- [[imports/chatgpt/openhouse-dtc-voice-stress-test-2026-07-27]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[decisions/openhouse-dtc-concierge-validation-2026-07-27]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]
