---
title: OpenHouse YC showhouse product-demo recording run sheet
date: 2026-07-29
company_id: openhouse-ai
status: ready-for-founder-recording
---

# OpenHouse YC showhouse product-demo recording run sheet

## Decision

Use 8 Longview Park, the Longview showhouse and Sam's preserved homeowner test record.

This is stronger than the sparse synthetic tenant because it is a real, fully populated test home. Repository and production checks confirm that it is intentionally maintained as the showhouse rather than an ordinary purchaser record.

Do not give YC Sam's normal login or administrator credentials. Use the narrated walkthrough as the primary demo. Add an interactive login only after creating and verifying a restricted YC-specific account.

## Verified showhouse state

As checked on 2026-07-29:

- Address: 8 Longview Park.
- Display name: Sam Donworth.
- House type: BS01.
- Modern Property Assistant interface is reachable.
- 59 home-scoped documents are visible.
- Document categories include five floorplans, fifteen handover documents, two warranty documents, three specification documents and five fire-safety documents.
- The document library includes the Longview home-user guide and Daikin Altherma material.
- The assistant correctly answers that the home uses a Daikin Altherma air-source heat pump, underfloor heating on the ground floor, radiators upstairs and a Daikin controller.
- The assistant does not reliably connect that answer to the exact Daikin document title. Do not claim document-level citation retrieval.
- Three existing homeowner-originated showhouse test issues each have one image and are classified as medium-severity plumbing issues.
- No structured My Home or energy-system record is currently attached to the showhouse.

## Product claim discipline

Show only functionality that works today.

Do not present a future My Home or energy dashboard as current unless it is genuinely connected, tested and visible before recording.

Do not claim:

- 281 users, customers or completed handovers
- an independent Longview customer relationship
- that the assistant diagnoses defects
- that every answer is sourced to a named document
- that the three test issues are homeowner traction

## Recommended final demo

Target 60 to 80 seconds. Record the screen with Sam narrating naturally. No music, title sequence or login footage.

### 0 to 8 seconds: establish the real home

Visual:

- Open the showhouse record.
- Show the Longview branding and the Property Assistant.

Narration:

> This is OpenHouse running on our Longview showhouse. It is a real test home with the same documents and systems a homeowner receives at handover.

### 8 to 28 seconds: property-specific answer

Visual:

- Ask: `What heating system is installed in my home? Answer only from my home record and say if the record does not know.`
- Cut out the response wait.
- Hold on the answer long enough to read it.

Narration:

> A homeowner can ask a question against the record of this specific home. OpenHouse knows that this house uses a Daikin Altherma air-source heat pump, underfloor heating downstairs, radiators upstairs and a Daikin controller.

### 28 to 45 seconds: handover record

Visual:

- Open Docs.
- Show the 59-document count.
- Select Handover.
- Select Floorplans.
- Do not open a potentially confidential file unless already reviewed.

Narration:

> The same home has 59 scoped documents, including handover information, floorplans, warranties, specifications, fire-safety material and its home-user guide.

### 45 to 65 seconds: aftercare proof

Visual:

- Open the developer aftercare view while authenticated as Sam.
- Select one existing showhouse test issue.
- Show the attached test image, category and status.
- Do not show another purchaser's name or issue.

Narration:

> After handover, an issue arrives with the correct home, photograph and system context instead of becoming an unstructured email or phone call.

### 65 to 75 seconds: close the loop

Visual:

- Return to the showhouse record or developer queue.

Narration:

> OpenHouse gives homebuilders one place to hand over each home, answer homeowner questions and manage aftercare.

## Current visual draft

A silent proof cut has been generated and saved durably:

- `/Users/samdonworth/GroundZero/vault/assets/yc/openhouse-yc-showhouse-demo-visual-cut-2026-07-29.mp4`
- Duration: 34.44 seconds.
- Resolution: 1440 by 900.
- Codec: H.264.
- SHA-256: `091b4afe626289e0570ccfdcdad59ed2e0fdfc45d362ae3465a47fca31c202c3`.

It demonstrates the assistant answer and document library. It is not the final narrated submission asset because it does not yet include the developer aftercare view or Sam's voice.

## Interactive access policy

If the YC form accepts product credentials, create a separate least-privilege account that:

- can see only the showhouse
- cannot access the developer dashboard or other purchasers
- cannot alter production records beyond harmless showhouse test actions
- requires no OTP or email verification
- contains no reusable administrator or service credentials

Verify the login in a private browser window before submission.

The product walkthrough must remain understandable even if YC never uses the interactive login.

## Final QA before upload

- No email address, phone number or access token is visible.
- No other purchaser name or address is visible.
- No browser address bar containing the direct unit token is visible.
- The assistant answer matches the showhouse record.
- Loading time has been removed rather than misrepresented.
- The narration says this is the Longview showhouse and an internal deployment.
- Audio is clear.
- Text is readable on a laptop.
- Video is under the authenticated form's stated duration limit.
- Uploaded link works in a private browser window.
