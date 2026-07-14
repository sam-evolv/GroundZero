---
title: Telegram-first Cara founder dogfood control plane
created: 2026-07-14
decision: accepted
status: active
---

# Telegram-first Cara founder dogfood control plane

## Decision

Use a dedicated Telegram bot/profile as Cara’s first **founder-control and asynchronous messaging surface**. It should let Sam message Cara, send voice notes, receive summaries/tasks/follow-ups, and exercise memory and approvals with the existing Hermes messaging infrastructure.

Do **not** treat Telegram as a replacement for the realtime hands-free voice benchmark. The official Telegram Bot API exposes messaging/media interactions but not a bot voice-call interface. A Telegram bot cannot receive or place the long, interruptible live calls required by [[decisions/cara-founder-dogfood-voice-first]].

## Why

- Telegram is already Sam’s low-friction command centre and Hermes is connected there.
- It can rapidly validate Cara’s daily usefulness: memory, task continuity, proactive follow-up, voice-note interpretation, artefacts, approvals and a distinct personality.
- It avoids paying for a phone number or telephony before the useful core is proven.
- A dedicated Cara profile preserves independent soul, memory, tasks and logs.

## Consequences

### Build now

1. Prepare a separate Cara Telegram profile/gateway with its own bot token, isolated SOUL, memory scope and task/audit policy.
2. Support text, voice notes, document/image intake, task capture, short spoken responses, post-conversation artefacts, and proactive follow-ups.
3. Make the first control loop usable from a single private founder chat before adding public onboarding.
4. Keep money/external actions behind explicit owner approval.

### Keep separate

- Native iPhone/direct WebRTC and/or telephony remain the route for live, barge-in-capable, Bluetooth/car voice evaluation.
- Telegram voice notes are asynchronous evidence and a useful fallback, not proof of realtime latency or in-car conversation quality.
- Do not expose a public bot or customer data until the founder loop has a trustworthy identity and memory boundary.

## Current prerequisite

The existing `cara` Hermes profile and gateway are running, but Telegram is not configured for that profile. A distinct BotFather token is required before a separate Cara Telegram bot can be activated; no secret should be pasted into chat or committed. The private founder integration can be prepared without the token.

## Connected vault notes

- [[companies/cara]] — company context
- [[project_state/cara]] — live build state
- [[decisions/cara-founder-dogfood-voice-first]] — live voice loop remains a separate quality gate
- [[briefs/2026-07-14-morning-briefing-golf-cara]] — source journal
- [[context/index]] — shared context entry point
