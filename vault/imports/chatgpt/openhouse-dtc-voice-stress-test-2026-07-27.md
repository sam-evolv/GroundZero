---
title: OpenHouse DTC voice stress-test source
company_id: openhouse-ai
date: 2026-07-27
retrieved_at: 2026-07-27T20:18:55+01:00
status: source-import
source_type: ChatGPT shared voice conversation
source_url: https://chatgpt.com/share/6a67adb1-4b54-83ed-b505-1b83097e888f
---

# OpenHouse DTC voice stress-test source

## Provenance

This note preserves the substantive content visible in the shared ChatGPT conversation supplied by Sam on 27 July 2026.

The share page exposed audio-transcription objects inside the visible conversation. This is a transcript synthesis, not a verified recording-level transcript. Short acknowledgements and repeated requests for a markdown export are omitted. Wording below is retained near-verbatim where it records Sam's thinking, but transcription errors may remain.

## Sam's opening challenge

Sam wanted to push OpenHouse into a DTC product people would genuinely pay for and asked whether a walkthrough video could let the product understand:

- the layout
- a rough floor plan
- room and system locations
- external elevations and proportions
- the garden

His governing tension was maximum value with minimum capture friction. He wanted the product designed as a world-class system whose usefulness creates a compounding, defensible network of home context.

## Digital-twin and assistant distribution thesis

Sam described the long-term ambition as a digital twin and corpus of:

- energy consumption
- home usage patterns
- home efficiency
- homeowner habits
- move-in confusion
- common operational errors

He said the product should eventually make OpenHouse complementary to general assistants rather than merely competing with them. His proposed mechanism was an MCP or equivalent permissioned context surface so that ChatGPT, Claude or another daily assistant could ask OpenHouse about the user's specific home, energy habits, systems, consumption and inefficiencies.

Sam clarified that this was not an argument for building a ten-year data platform instead of solving today's problem:

> We need to add value first because there's no way of creating that data moat without adding value first. I'm building for tomorrow, while being cognizant of ten years' time.

## Immediate value thesis

When asked for the first killer job, Sam chose energy-efficiency assistance because a measurable reduction could justify a small subscription.

His distinction was:

- prevention of a €1,000 problem is valuable but hard to prove
- visible energy consumption moving down is easier to show and sell
- a monthly update could show changed consumption and recommend the next action

Sam did not claim that the exact saving mechanism or data access had been solved. He explicitly said onboarding and connection architecture remained unresolved.

## Desired system connections

Sam wants OpenHouse eventually connected, where technically and commercially possible, to:

- smart-meter electricity data
- heat pumps
- solar systems
- HVAC and thermostats
- EV chargers
- other home devices exposing appropriate APIs

He recognised that the richest data sits behind the highest onboarding and permission friction. When forced to prioritise one initial source, he selected smart-meter data, then heat-pump data if smart-meter access was not possible.

## The proposed magic moment

Sam rejected a generic bill diagnosis or a €3 suggestion as insufficiently exciting.

His example concerned first-time buyers who misunderstand low-temperature heating and heat pumps. A homeowner who feels too warm may open a window or door. The home cools, the heat pump works harder, and the user later sees high electricity consumption without understanding the relationship.

Sam imagined OpenHouse using heating activity, thermostat information, weather and energy signals to detect an unexpected pattern and send a carefully framed intervention. His desired effect was:

> This thing is actually always on and looking after your home.

The proposed agent behaviour was subsequently framed as:

1. Observe.
2. Infer.
3. Notify.
4. Explain.
5. Recommend.

The assistant correctly cautioned against claiming that a door or window had opened when the signal only supported an inference.

## Behaviour as the missing layer

Sam identified the central market thesis as optimising the homeowner, not merely installing a more efficient asset.

He argued that:

- many companies improve buildings and systems
- very few help the person operate a modern low-carbon home correctly
- expensive fabric, heat-pump, solar and grant investment can underperform when the homeowner does not understand the system
- education cannot depend on people reading technical PDFs
- guidance must arrive in context at the moment it matters

The phrase that emerged was:

> There is no point in having A-rated homes without A-rated homeowners.

Sam also discussed a possible research and institutional value layer based on understanding recurring operational friction. He suggested this could later support national energy-efficiency objectives, developer learning and renewable-energy companies, while acknowledging that the consumer product must create value first.

## Category vision

Sam's clearest articulation was that the home is the largest purchase most people make, yet the buyer is often handed PDFs and left alone. He wants OpenHouse to become:

- the application for the home
- an always-available assistant with full context of that specific property
- a way to run the home more efficiently and with less stress
- an explanation layer for materials, systems and unfamiliar defects
- a way to identify equipment and retrieve the right manual
- a triage and routing layer when something goes wrong
- eventually, an approval-controlled operating layer

Sam called this an operating assistant or agentic operating system for the home. The consumer-facing language that emerged was simpler:

> OpenHouse knows your home.

The intended product experience is not generic internet knowledge. It is one trusted system that understands this specific house and is quietly looking out for it.

## Ideas raised but not decided

- a guided walkthrough video as a low-friction spatial and asset capture method
- automatic rough floor-plan generation
- a home-efficiency score that can move over time
- a monthly verified-savings or avoided-cost moment
- passive learning of homeowner behaviour
- an institutional education proposition
- aggregate learning across homes
- an MCP or other permissioned home-context interface for external assistants

## Claims from the conversation that remain unsupported

The conversation included several exploratory statements that must not become product claims without evidence:

- that 90% of Irish homes could run 25% more efficiently
- that smart-meter access is universal or straightforward through an API
- that an observed reduction can automatically be attributed to OpenHouse advice
- that a camera walkthrough can create a complete or survey-grade floor plan on all phones
- that heat-pump, solar and EV integrations can be connected uniformly
- that a behavioural dataset can safely or commercially be monetised
- that the product universally pays for itself

## Connected vault notes

- [[briefs/openhouse-dtc-voice-stress-test-synthesis-2026-07-27]]
- [[briefs/openhouse-dtc-master-plan-2026-07-27]]
- [[decisions/openhouse-home-operating-assistant-north-star-2026-07-27]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]
