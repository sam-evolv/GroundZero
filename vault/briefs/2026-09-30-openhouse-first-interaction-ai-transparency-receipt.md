---
title: OpenHouse first-interaction AI transparency receipt
date: 2026-09-30
type: opportunity-brief
status: proposed
company_id: openhouse-ai
role: brief
source: European Commission Article 50 guidance, Irish DPC guidance, and public OpenHouse surfaces checked 2026-09-30
approval_required: true
---

# OpenHouse first-interaction AI transparency receipt

## Open question

Can OpenHouse turn the now-applicable EU AI Act transparency requirement into a small, defensible developer-buyer trust asset without opening a competing product build?

The narrow test is whether the **actual homeowner assistant**, across text, voice and photo entry, clearly tells a person that they are interacting with AI at the start of the first interaction and does so accessibly. The output would be a first-interaction transparency receipt, not a legal certificate and not a claim that the whole product complies with the AI Act or GDPR.

## Verified evidence

### Official requirements

- Article 50(1) of Regulation (EU) 2024/1689 requires providers of AI systems intended to interact directly with natural persons to design them so people are informed that they are interacting with AI, unless that fact is obvious in context.
- Article 50(5) requires the information to be clear and distinguishable, provided no later than the first interaction or exposure, and to meet applicable accessibility requirements.
- The European Commission's Article 50 guidelines were published on 20 July 2026. Its FAQ states that Article 50 applies from **2 August 2026** and that the “obvious” exception should be interpreted restrictively.
- The Commission distinguishes direct, genuine two-way interaction from background or human-mediated use. OpenHouse's described text, voice and photo assistant appears to fit the direct-interaction shape, but exact provider/deployer roles and legal applicability still require professional confirmation.
- Irish Data Protection Commission guidance separately says organisations using or providing AI should understand what personal data is processed, where it goes, whether it is retained or reused, and should explain processing and rights in an understandable, accessible form. This GDPR guidance complements, but does not replace, the AI Act test.

### Public OpenHouse surface checked on 30 September 2026

- The public homepage's illustrative assistant uses the labels **“AI Online”** and **“Powered by AI”**, links to the Privacy Policy and says answers show their source.
- The public Property Assistant page uses **“AI online”** in illustrative UI and repeatedly describes an assistant that accepts text, voice and photo input.
- The public Privacy Policy calls it an “AI-powered helper” and describes conversation, voice-transcript, image-classification, retention and deletion handling.
- These are useful signals, but they are **not evidence of the authenticated homeowner portal's first interaction**. No controlled account journey, first-run screen, voice disclosure, screen-reader output or photo-entry path was inspected in this research pass. Therefore no compliance or product-acceptance claim follows.

## Inference: the opportunity

OpenHouse already sells trust through exact-home grounding, source-attached answers, refusal when evidence is absent and developer escalation. A compact transparency receipt would extend that proof chain from **“where did this answer come from?”** to **“did the homeowner know they were interacting with AI before relying on it?”**

That could strengthen the existing one-scheme pilot and developer proof pack because it demonstrates a concrete operational trust control using the real product. It should not become a new compliance consultancy, a dashboard or an enterprise-ready claim.

## Bounded proposal

Create one **first-interaction AI transparency receipt** for a controlled, non-customer test account and the exact production-candidate homeowner journey.

The receipt should contain only:

1. exact artifact or deployment identity and test timestamp;
2. the first screen and first AI response for text, voice and photo entry;
3. the exact disclosure words, location and timing;
4. keyboard and screen-reader observations for the disclosure and privacy link;
5. the answer when the user asks what the assistant is and, if relevant, on whose behalf it acts;
6. the visible source, uncertainty/refusal and human-escalation behavior for one safe test question;
7. privacy-notice, conversation-deletion and issue-escalation links as observed, without inferring legal sufficiency;
8. pass, fail and open-gap fields tied to the named evidence.

Do not add code during the evidence pass. If a gap is found, record one smallest fix for separate approval after the active tenant-isolation gate, unless Sam explicitly makes it a release blocker for a named pilot.

## Smallest validation test

Use one authorised test home with synthetic or non-personal content.

1. Start from a fresh browser profile or cleared app state.
2. Enter the homeowner assistant through the real route a buyer receives.
3. Before or at the first interaction, capture the disclosure for text, voice and photo entry.
4. Confirm that a keyboard-only and screen-reader user can perceive the disclosure before relying on an answer.
5. Ask one grounded home question and one question the record cannot answer; capture source attachment, refusal and developer/human escalation.
6. Ask “Are you an AI, and who are you acting for?” and preserve the exact response as supporting evidence rather than treating it as the sole disclosure mechanism.
7. Produce one Markdown/PDF receipt with immutable artifact identity and no customer data.

### Pass condition

- Every tested direct-interaction mode identifies the interaction as AI at or before the first response in a clear, distinguishable and accessible way.
- The receipt binds observations to the exact tested artifact and does not extrapolate beyond it.

### Fail condition

- Disclosure exists only on a marketing page, in the privacy policy, in a footer a user can miss, after the first answer, or on only one interaction mode.
- The tested artifact or user journey cannot be identified exactly.

## Assumptions and open gaps

- The live authenticated homeowner surface may already satisfy the narrow test; this research did not access it.
- Whether OpenHouse is the provider, a developer customer is a deployer, or responsibilities are shared can depend on branding, contracts and operational control. The receipt cannot settle that legal allocation.
- Article 50(2) machine-readable marking of generated content is a separate provider obligation with exceptions and implementation detail. This proposal does not claim whether each OpenHouse answer falls inside it.
- The public privacy policy was checked for presence and wording only. No data-flow, retention, redaction or deletion behavior was technically verified here.
- Counsel confirmation is required before external “AI Act compliant” or equivalent language.

## Downside and constraints

- A receipt can become compliance theatre if it proves only labels and ignores actual data handling, answer quality or tenant isolation.
- Overstated legal claims could damage trust more than no claim.
- This must not displace [[items/oh-rls-audit]], which remains the higher-risk production gate.
- Repeating the test across every release would add maintenance cost; first prove that one exact receipt changes buyer confidence or catches a real gap.

## Commercial validation gate

Do not productise or price this separately. First use it as one appendix to a named, approval-gated developer pilot or to [[items/oh-proof-asset-engine]]. Count it as valuable only if it:

- closes a real first-interaction gap;
- answers a live buyer diligence question; or
- can be reused in a developer proposal without claiming legal certification.

If no buyer values it and the product already passes cleanly, retain it as a release-control receipt rather than a new offer.

## Approval boundary

- No production change, authenticated customer access, personal-data inspection, legal representation, outreach, publication or client communication is authorised by this brief.
- Sam must approve any live account test beyond an existing authorised test account and any external use.
- Legal or DPO review is required before describing the result as compliance assurance.

## Sources

- European Commission, **Guidelines on transparency obligations for providers and deployers of AI systems**, published 20 July 2026: https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
- European Commission, **Transparency obligations under Article 50 of the AI Act**, updated 24 July 2026: https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act
- EU AI Act Service Desk, **Article 50**: https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50
- EUR-Lex, **Regulation (EU) 2024/1689**: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- Irish Data Protection Commission, **AI, Large Language Models and Data Protection**, 18 July 2024: https://www.dataprotection.ie/en/dpc-guidance/blogs/AI-LLMs-and-Data-Protection
- OpenHouse public homepage, checked 30 September 2026: https://www.openhouseai.ie/
- OpenHouse Property Assistant page, checked 30 September 2026: https://www.openhouseai.ie/assistant
- OpenHouse Privacy Policy, checked 30 September 2026: https://www.openhouseai.ie/privacy

## Connected vault notes

- [[companies/openhouse-ai]] - parent company and current strategic boundary
- [[project_state/oh]] - live source, deployment and acceptance state
- [[items/oh-rls-audit]] - higher-priority tenant-isolation gate
- [[items/oh-proof-asset-engine]] - nearest evidence-pack use if the receipt proves useful
- [[items/oh-answer-quality-audit-loop]] - complementary answer-quality evidence
- [[items/oh-guardrails-eval]] - complementary adversarial/grounding control
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]] - prevents this from becoming a competing build
- [[context/business-opportunities-moc]] - opportunity map

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/openhouse-ai]]
- [[context/business-opportunities-moc]]
- [[decisions/openhouse-focus-and-openbook-commercial-unblock-2026-07-24]]
- [[items/oh-answer-quality-audit-loop]]
- [[items/oh-guardrails-eval]]
- [[items/oh-proof-asset-engine]]
- [[items/oh-rls-audit]]
- [[project_state/oh]]

