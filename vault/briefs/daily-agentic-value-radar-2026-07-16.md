---
title: Daily Agentic Value Radar — 16 July 2026
date: 2026-07-16
kind: research-synthesis
status: signal-only
---

# Daily Agentic Value Radar — 16 July 2026

## 1. Hold Hermes at the released version; evaluate an evidence fixture before any update

**Observation:** [Hermes Agent v0.18.0](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1) (1 July 2026) added completion contracts and evidence-oriented completion checks. The official [v0.18.2 release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2) (7 July) is only a WhatsApp Docker dependency patch. This machine already runs v0.18.2, but `hermes --version` reports 486 unreleased upstream commits behind.

**Specific workflow:** Keep the current release pinned; specify one reproducible Cara post-call-artifact fixture (input transcript, expected decision/action fields, evidence receipt) to judge the v0.18 completion-contract workflow before considering an upgrade.

**Value:** risk reduction and reusable capability. **Evidence:** strong that the features exist; weak that unreleased upstream changes improve this installation. **Smallest 30-minute test:** write and manually run the fixture against the current install; define pass/fail before inspecting an update diff. **Effort/risk:** low test / high regression risk if blindly updating. **Approval boundary:** Sam must approve any update, gateway restart, cron change, or config change. **Disprove:** the fixture reveals no measurable completion/evidence failure, or an upgraded test session cannot improve it. **Verdict: ACT — evaluate, do not update.**

## Neglected leverage — Cara’s measurement gate remains unstarted

**Evidence:** Cara’s P0 explicitly requires logged cost, latency, interruptions, corrections and routing decisions; the five-call exit gate requires five substantive calls, two 30+ minute calls, and continuity tests. The current state records a browser-loop round trip but no measured founder-call baseline. ElevenLabs’ official [ElevenAgents documentation](https://elevenlabs.io/docs/eleven-agents/overview) lists testing, experiments, conversation analysis, analytics and post-call webhooks as supported monitoring surfaces; they may reduce implementation work, but are not yet evidence that Cara meets its targets.

**Specific workflow:** A vendor-neutral, one-page scorecard stored with Cara’s canonical call events: first-word latency, interruptions/false cuts, transcript corrections, cost/minute, artefact accuracy, continuity result, and one human “would I choose this again?” rating.

**Value:** product proof, risk reduction, and a reusable quality system. **Evidence:** strong from the accepted P0 and exit-gate notes; the gap is evidenced by the absence of recorded measures. **Smallest 30-minute test:** make the blank scorecard and manually score the next existing browser session—no provider purchase or telephony required. **Effort/risk:** low; risk is false confidence from a single call. **Approval boundary:** no new account, API spend, +353 number, customer call, or production change. **Disprove:** a complete comparable call record already exists and eliminates the unknowns. **Verdict: ACT.**

**Highest-value next move:** Create the Cara scorecard and record the next founder session before evaluating another voice stack.

## Connected vault notes
- [[context/agentic-value-creation-mission]] — adoption gate
- [[project_state/cara]] — active voice constraint and milestone
- [[items/cara-founder-voice-dogfood]] — P0 exit gate
- [[decisions/cara-elevenlabs-webrtc-hermes-custom-llm]] — current transport decision
- [[decisions/cara-founder-dogfood-voice-first]] — founder-use sequencing
- [[briefs/daily-agentic-value-radar-2026-07-15]] — prior radar
- [[context/index]] — shared entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/daily-portfolio-brief-2026-07-16]]

