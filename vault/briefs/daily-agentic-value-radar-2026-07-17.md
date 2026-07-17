---
title: Daily Agentic Value Radar — 17 July 2026
date: 2026-07-17
kind: research-synthesis
status: signal-only
---

# Daily Agentic Value Radar — 17 July 2026

## 1. ACT — make Cara’s first controlled founder call a measurement event

**Observation (17 July):** Cara’s active exit gate requires five substantive calls, two 30+ minute calls, continuity tests and post-call artefacts needing only minor edits; the current state records no comparable founder-call baseline. Official [ElevenAgents documentation](https://elevenlabs.io/docs/eleven-agents/overview) confirms testing, experiments, analytics, conversation analysis, real-time monitoring and post-call webhooks are available monitoring surfaces, but does not prove Cara meets the gate.

**Specific workflow:** Create a vendor-neutral scorecard attached to the existing call-event schema: pickup/first-word latency, turn-taking failures, transcript corrections, cost/minute, memory/artefact accuracy, continuity and “would I choose this again?” Then score the next real browser session before changing the voice stack.

**Value category:** customer proof, risk reduction and reusable quality system. **Evidence:** strong for the internal bottleneck; moderate for provider-assisted instrumentation. **Smallest 30-minute test:** make the blank scorecard and manually score one existing session. **Effort/risk:** low; one call must not be treated as proof. **Approval boundary:** no vendor account, spend, +353 number, external call or production change. **Disprove:** a complete, comparable call record already exists and shows the current loop passes the targets. **Verdict: ACT.**

## 2. WATCH — retain OpenAI Realtime as a bounded fallback, not a new stack

**Observation (17 July):** OpenAI’s official [Realtime guide](https://developers.openai.com/api/docs/guides/realtime) recommends `gpt-realtime-2.1` for low-latency voice, and its [conversation guide](https://developers.openai.com/api/docs/guides/realtime-conversations) documents WebRTC-assisted media handling plus interruption/truncation controls. This supports the existing fallback decision; it is not evidence that it will beat the selected ElevenLabs/Hermes route on Sam’s car use.

**Specific workflow:** Define a single parity bake-off script now (same prompt, noisy environment, interruption, memory recall, artefact, cost) and run it only if scorecard results expose an ElevenLabs turn-taking/noise failure.

**Value category:** decision quality and risk reduction. **Evidence:** strong that the capability exists; weak that it is superior for Cara. **Smallest 30-minute test:** write the pass/fail parity script—no integration. **Effort/risk:** low now; medium if integrated, including API cost and memory/artefact plumbing. **Approval boundary:** Sam must approve any OpenAI credentials, spend, integration or real call. **Disprove:** five-call evidence shows ElevenLabs meets the exit gate, or the controlled fallback fails to improve the named metric. **Verdict: WATCH.**

## Neglected leverage
The unmeasured founder-call gate is the live bottleneck: it prevents a defensible choice between voice paths and delays the Irish SME proof spine. Do not add a connector, MCP or agent until it produces a scorecard field Sam is actually using.

**Highest-value next move:** create the Cara scorecard and score the next founder session before evaluating another voice stack.

## Connected vault notes
- [[context/agentic-value-creation-mission]] — adoption gate
- [[project_state/cara]] — active voice constraint and milestone
- [[items/cara-founder-voice-dogfood]] — P0 exit gate
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]] — selected transport and fallback
- [[briefs/daily-agentic-value-radar-2026-07-16]] — prior radar
- [[context/index]] — shared entry point
