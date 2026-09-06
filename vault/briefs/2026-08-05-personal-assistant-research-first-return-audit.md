---
title: Audit of first external personal-assistant research return
status: review-required
created: 2026-08-05
source: Unattributed research draft pasted by Sam, reviewed against existing product records and limited direct official documentation checks
related:
  - briefs/2026-08-05-personal-assistant-research-charter
  - briefs/2026-08-05-managed-agent-consumer-wedge
  - briefs/2026-08-05-managed-agent-feasibility-and-success-plan
---

# Audit of first external personal-assistant research return

## Verdict

The return is strategically strong. It captures the right product direction: object-first activation, outcome-led tasks, approval-first external action, Personal Ground Zero, mobile-first interaction, paired-device continuity, calm non-technical language and a research-led design system.

It is **not yet safe to treat as a canonical technical or regulatory specification**. It mixes good product recommendations with several unsupported, over-confident or technically inaccurate statements. It also provides a list of source titles/domains rather than a complete, direct URL-backed evidence ledger as required by [[briefs/2026-08-05-personal-assistant-research-charter]].

Use the accepted product insights now. Require a second source-verification pass before any architecture, platform-policy, compliance or implementation decision relies on the disputed claims below.

## Accepted and high-value insights

- Object-first onboarding is better aligned with the product thesis than an empty chat box. A real photo, file, email, screenshot or voice note can create an early completed outcome before asking for broad access.
- The correct measures are completed outcomes, time-to-first-value, user understanding of permissions, repeat use and trust failure, not generic time-in-app.
- Approval-first external actions, human-readable action cards, receipts, cancellation and recovery are essential trust architecture.
- Personal Ground Zero should distinguish raw provenance, durable context, decisions, live operating state and task-specific retrieval.
- The mobile app must be the default user-facing conversation/notification surface. Cross-device value comes from the mobile-to-companion loop, not a remote-desktop UI.
- Push-to-talk and voice notes are safer initial voice surfaces than always-on ambient listening.
- Accessibility, plain language, error recovery and users with varying digital confidence must be first-class product requirements.
- Open-source/local models are a capability and cost opportunity, but need licensing, quality, hardware and operational evaluation.
- The narrow early alpha should test authorised file retrieval, context-to-next-step and finished-artifact delivery rather than broad autonomy.

## Claims requiring correction or evidence before reuse

### 1. Core Spotlight is not the proposed arbitrary-file retrieval architecture

The draft proposes deep integration with `CSSearchableIndexDelegate`, item “hydration” and custom UTIs to query local files, email and metadata. That is not an established implementation specification for the proposed paired-device file retrieval feature.

Core Spotlight is designed for apps to make their own content discoverable through the system search index. It does not itself grant a sandboxed companion broad authority to query arbitrary user files, emails or Keychain items. A consumer companion must instead be designed around explicit user-selected folder/file access, macOS sandbox/security-scoped access where applicable, a local metadata/indexing strategy for those approved paths, and direct verification of the requested item. The product should not commit to any specific Apple API until an engineering spike confirms the permitted scope, sandbox behaviour, indexing quality and privacy implications.

Official starting points:
- https://developer.apple.com/documentation/corespotlight
- https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate

### 2. Handoff does not solve cross-platform task routing

`NSUserActivity`/Handoff can support continuity between Apple devices for the same app experience. It does not provide the cloud-mediated, iOS-to-Android-to-macOS task routing, device identity, remote file transfer, approval history or offline recovery required by this product. It may be a useful Apple-only enhancement later, not the core continuity architecture.

Official starting point:
- https://developer.apple.com/documentation/foundation/nsuseractivity

### 3. Do not adopt Apple Intelligence visual cues as requirements

The claim that Apple HIG mandates a shimmer outline, a “deference” pattern or source attribution in the stated form for third-party generative-AI interfaces is not accepted without a direct, current Apple source. We should follow Apple’s general native interaction, accessibility, permission and platform guidance, but create our own branded processing and provenance patterns. Do not imitate proprietary Apple Intelligence visual language or describe it as mandatory product guidance.

### 4. WhatsApp policy statements are not source-complete

The assertion that Meta has banned general-purpose AI chatbots while expressly permitting bounded task agents may be directionally relevant, but the supplied sources are secondary explainers. It must be verified against Meta’s current official WhatsApp Business Platform terms, messaging policy and product documentation before becoming a channel decision. The official platform documentation confirms a customer-service window and template/message policy, but a full policy/legal read is still needed.

Official starting point:
- https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform

### 5. iMessage and Apple Messages for Business need careful separation

Apple Messages for Business is a business messaging programme. It is not evidence that the product can turn a user’s personal verified iMessage number into a programmable personal-agent thread. Any future Apple route must be based on verified official eligibility, approval and interaction rules. It must not use BlueBubbles or another unsupported relay as the consumer foundation.

### 6. Legal and privacy wording is too categorical

The draft’s GDPR/DPC language contains useful warnings but should not be presented as legal conclusions. Product copy must not promise “processed and immediately discarded” or “never used to train public models” until exact provider contracts, retention settings, data flows and operational telemetry verify the claim.

The cited DPC fines are not the primary design basis. The relevant design work is a full data map, legal basis, minimisation/retention policy, processor/subprocessor analysis, user rights, incident plan and a DPIA before public scale.

### 7. Some market and competitor statements are overgeneralised

Claims that ChatGPT/Claude “lack native cross-device continuity” or that their memory “degrades performance” are interpretations, not stable factual claims. Treat them as hypotheses to test with direct product observation and user research. Do not make them in public positioning.

### 8. Activation targets should be hypotheses, not requirements

A sub-45-second first value target may be plausible for a small local extraction but is not a universal target for an account, share, permission and reliable completed task flow. For the initial product, measure two stages separately:

- time to visible understanding or first useful intermediate result;
- time to a completed, receipted outcome.

The existing product research standard is a real personal outcome within three minutes where technically feasible, while the feasibility plan proposes under ten minutes from install to the first completed signature job. Test and calibrate rather than treating either figure as external truth.

### 9. “Approved repeat” automation requires stronger boundaries

Repeated workflows are useful, but should not continuously operate merely because a user once approved a similar action. Each repeat permission needs a named workflow, scope, duration, destination, clear revocation, anomaly detection and a re-approval rule when material inputs or consequences change.

### 10. WCAG target-size claim is correctly grounded, but only one requirement

The draft correctly summarises WCAG 2.2 Success Criterion 2.5.8: pointer targets are at least 24 by 24 CSS pixels subject to stated exceptions. This should be one part of a broader mobile accessibility standard, not a substitute for testing Dynamic Type, VoiceOver/TalkBack, contrast, reading order, focus, motion, error recovery and keyboard access.

Official source:
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

## Architecture correction

The product’s core continuity architecture should remain:

1. A native mobile app holding identity, conversation, task state, progress, approval and artifact delivery.
2. A cloud control plane that coordinates authenticated device/task routing and stores only permitted continuity/context state.
3. A signed local desktop companion that has user-selected, least-privilege access to approved folders and device-bound context.
4. A separate local search/index service inside the companion, with its implementation selected after a permission/sandbox/quality spike rather than assumed from Core Spotlight alone.
5. Hermes behind a stable adapter for bounded agent execution, not exposed directly to consumers.

Handoff, Spotlight, Android system services, notifications and share extensions are platform optimisations within this architecture. They are not replacements for it.

## Required second-pass deliverables

Before promoting the research into design or engineering requirements, require:

- Direct source URL for every material factual/platform/legal claim.
- Access/publication date and source quality classification.
- Explicit separation between observed practice, evidence-backed inference, design recommendation and open hypothesis.
- Direct official platform documentation for Apple, Meta/WhatsApp, Android and W3C claims.
- A short engineering feasibility spike specification for local authorised-file retrieval on macOS, including sandbox permissions, offline handling, security-scoped bookmarks if relevant, encrypted relay and duplicate/moved-file evaluation.
- A data-flow and privacy assertion register. Every public privacy statement must map to a proven implementation and contractual setting.
- A product design spec that treats palette, typography, motion and copy as testable hypotheses, not science claims.

## Connected vault notes

- [[briefs/2026-08-05-personal-assistant-research-charter]] - required research quality bar and output ledger
- [[briefs/2026-08-05-managed-agent-consumer-wedge]] - current product thesis
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]] - architecture and alpha constraints
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]] - existing mainstream activation research

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-05-mainstream-ireland-consumer-agent-experience]]
- [[briefs/2026-08-05-managed-agent-consumer-wedge]]
- [[briefs/2026-08-05-managed-agent-feasibility-and-success-plan]]
- [[briefs/2026-08-05-personal-assistant-research-charter]]
- [[briefs/2026-09-01-donworth-imessage-owner-desk-validation-wedge]]
- [[context/index]]

