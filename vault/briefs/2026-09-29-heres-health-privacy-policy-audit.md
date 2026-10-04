---
title: Here’s Health privacy-policy and mobile launch audit
date: 2026-09-29
status: draft-complete-confirmations-open
source: Sam’s attached privacy-policy audit request and direct repository/backend/public-policy inspection
---

# Here’s Health privacy-policy and mobile launch audit

Sam requested an evidence-based targeted update to the existing Shopify website privacy policy for the app, preserving valid website provisions and publishing nothing automatically.

## Verified scope and result

- Audited local preflight checkout `/Users/samdonworth/Documents/New project/heres-health-ios-preflight-20260929`, active integration branch `codex/shopify-full-integration`, HEAD `198edc8f3f359de74a75a9a4690682f49d10ef0b`; read-only remote head matched. Existing five tracked edits/five untracked release docs were left unchanged. Inventoried 681 tracked files and searched 618 eligible text files, with relevant production route/storage/Edge/migration review.
- Deliverable directory: `/Users/samdonworth/Documents/New project/heres-health-privacy-audit-20260929`. Exact artifacts: `README.md`, `audit.md`, `data-flow-inventory.md`, `targeted-policy-amendments.md`, `evidence-register.md`, with source snapshots/receipts. Draft is complete; publication and compliance acceptance are not established.
- Preserved public website policy and actual app-linked Donworth notice as HTML/text, with hashes. Website SHA-256 `cffbc7cdf99ee37dc2196f4d3c1374cc15e08c6696c46720cd8d75fef0a6b910`; app notice `c2c4e4df8a2f308046b96504a5603fcfa17b08b00db17fba99a8ea66ccf3701d`.
- Live read-only production metadata: 13 public tables, all RLS enabled; only production-location read and own-Square-order read client policies. Square production/sandbox v30/v26, Shopify v28, deletion v12, install v14. Completed deletion-record cleanup active, Shopify reconciliation inactive. Live deletion deadline default 28 days; completed evidence cleanup after 90 days with documented holds. Both production checkout health gates remain disabled.
- Exported build-3 IPA re-hashed to `b2f0d27b81d61a0896d53c1390c03277c6f065f9c0f6166150f07feb3bbc7282`; all ten extracted manifests agree with archive manifests. Square iOS SDK declares linked product interaction, payment info, user/device IDs and crash data; category tracking flags false. No final-device telemetry or Android category acceptance inferred.

## Material policy corrections

- Square card details remain in provider interface; the app actually stores the payment nonce and optional verification token in SecureStore for interrupted-payment recovery. Server journals hash tokens. Do not claim payment tokens are never stored or that merchant receives no payment-related information.
- Shopify catalogue and checkout processing forward the shopper’s IP. Search requests also reach provider services. Separate Shopify account and hosted checkout data remain distinct from app Auth.
- No production push registration/sender found. Production notification/preferences routes redirect to Account; connected onboarding bypasses dietary/notification preview controls. Existing local fields are not marketing consent, and the public notice should not promise editable production notification preferences.
- Deletion is intake followed by operator handling, with secure receipts; unresolved checkout may block in-app intake. Provider review/Auth deletion and restricted retained sale facts are separate. Server receipt expiry does not itself clear local receipt storage.
- Existing website payment names, old law/business-name references, marketing mailbox typo and cookie anonymity/control claims need targeted review. Preserve valid website/Shopify provisions. The app links to the separate Donworth notice, so both notices need alignment.

## Gaps and next action

Owner/legal confirmation needed for actual bases/necessity, provider retention and transfers/safeguards, current website and Acuity payment configuration, all booking waiver/health/participant forms, minors policy, SDK/cookie runtime and deletion-mailbox/operator fulfilment. No DPO, universal retention period, EU-only processing or blanket absence of health data established.

Next: review exact draft amendments and confirmations, reconcile final signed iOS/Android artifacts and store disclosures, then authorize publication separately. No public policy update, app/provider/database mutation, transaction, booking, real-user deletion, store action, client contact, commit, push or sync occurred. Ground Zero write-back is local; availability to other copies/cross-agent readback is unverified.

Related: [[project_state/heres-health-app]], [[companies/heres-health]].

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/heres-health]]
- [[project_state/heres-health-app]]

