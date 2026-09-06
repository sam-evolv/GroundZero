---
id: ops-desktop-ui-approval-readiness-gate
company_id: donworth-ai-solutions
domain: ops
title: Gate desktop UI verification on action-level approval readiness
rationale: A Donworth Finder acceptance run reached the exact control but timed out on computer-use approval even though the live Mac now reports a healthy driver, granted Accessibility and Screen Recording access, and reachable AX.
priority: P1
effort: S
state: proposed
is_one_thing: true
source: Ground Zero evidence-backed automation scan 2026-09-04
created_at: "2026-09-04T18:02:23+01:00"
updated_at: "2026-09-04T18:02:23+01:00"
---

# Gate desktop UI verification on action-level approval readiness

## Material proposal, 4 September 2026 — pre-dispatch approval gate for native UI review

Add a **read-only readiness and approval gate before dispatching any independent reviewer whose acceptance contract requires native desktop input**. This is a task-orchestration check, not a broader computer-control permission or a substitute for real UI verification.

### Bottleneck

[[project_state/donworth-studio]] records that Vera reached the real Finder folder, identified `Start Donworth Evening Test.app` at accessibility node 55, and then timed out when the `computer_use` double-click required interactive approval. Vera correctly refused to substitute Terminal, `open`, or a raw-app launch. Task `t_e3a22ef5` therefore blocked after the source, package-custody, helper-manifest and 16/16 behavioural gates had passed; two Finder Start/Stop and full account/chat/notification replays remain open.

A fresh read-only `hermes computer-use doctor` run at 18:02 IST on 4 September reported cua-driver `0.23.2` healthy on macOS 26.2, an active MCP session, the expected `com.trycua.driver` bundle, granted Accessibility and Screen Recording access, and trusted/reachable AX. Direct ScreenCaptureKit readiness was not exercised because the doctor is read-only. This distinguishes the observed blocker from a missing driver or known TCC denial: the missing prerequisite was action-level approval being available at the moment Vera attempted the real double-click.

The current workflow lets an expensive independent review reach that late human boundary before discovering it cannot perform the decisive user-surface action.

### Value category

- **Delivery reliability:** prevents a reviewer run from being consumed before its mandatory interactive approval is available.
- **Founder time reclaimed:** gives Sam one bounded approval packet instead of an unexpected mid-run interruption followed by re-dispatch and context reconstruction.
- **Acceptance integrity:** preserves the exact ordinary Finder path rather than encouraging shell or harness substitutes after an approval timeout.
- **Security:** keeps approval scoped to named actions and artifacts instead of broad or persistent computer-control allowlisting.

### Smallest live test

Apply the gate only to the next re-dispatch of `t_e3a22ef5`:

1. Detect from the task contract that native Finder input is required and hold the review before worker dispatch.
2. Run the read-only computer-use doctor and attach a non-secret readiness matrix; a failed driver, Accessibility, Screen Recording, AX or session check returns `HOLD`.
3. Produce one approval packet bound to the exact Finder handoff and task. The allowed actions are only: capture the named folder, double-click the named Start launcher, inspect the required Donworth account/chat/notification journey, and double-click the named Stop launcher, repeated twice. It must explicitly forbid Terminal, `open`, raw-app launch, credential entry, real Messages contact, provider activation, spend, installation, signing, distribution and production mutation.
4. Keep the reviewer dependency-gated until Sam approves that packet and indicates an active approval window. Do not create a standing allowlist or infer consent from previous computer-use approval.
5. Immediately before the first action, Vera re-captures the exact Finder surface and re-binds the task/artifact identity. Drift, an unavailable action approval, or a changed task contract returns `HOLD` before the review run begins.

The test ends after the two already-required replays and receipt. It changes no product code, installed app, profile, credential, provider, deployment or production state.

### Evidence of success

- No new Vera run begins until the read-only health matrix and exact action-scope approval receipt both exist.
- The first Finder double-click is not lost to a missing interactive approval. If approval is unavailable, the task remains held without consuming another substantive reviewer run.
- Vera either completes both required Finder Start/Stop and user-journey replays or reports a product/UI failure against the exact handoff; no Terminal or raw-app substitute appears in the receipt.
- The receipt separately records driver/TCC readiness, action approval, delivered input, observed UI effect and final acceptance. A green doctor result is never promoted to user-surface proof.
- Artifact or task-contract drift invalidates the approval packet and returns `HOLD`.
- Sam can approve or reject the complete action scope once, without granting broad persistent desktop authority.

### Downside and failure mode

The gate adds coordination before review and cannot guarantee that a time-bound action approval will remain available. A healthy doctor can also create false confidence because it does not prove the target control will react or that ScreenCaptureKit has been exercised. An approval packet may become unsafe if the artifact, Finder path or requested actions change. Keep the gate narrow, bind it to exact task and artifact identities, expire it on drift, preserve per-action tool policy, and fail closed. Never convert this into blanket unattended permission for native UI, Messages, credentials, payments or system dialogs.

### Approval boundary

Automation may read the named task contract and exact non-secret artifact metadata, run the read-only computer-use doctor, draft the bounded approval packet, and hold or release the reviewer dependency after Sam's explicit approval. It may not approve its own action, change macOS privacy settings, click a permission dialog, broaden computer-use policy, launch the Donworth handoff, enter credentials, contact anyone, activate providers, spend, install, sign, distribute, deploy or mutate production. Vera still owns independent execution and acceptance; Sam remains the sole approval point.

### What it replaces

It replaces premature dispatch into a known human-approval boundary, unexpected mid-run approval prompts, and repeated reviewer context reconstruction after approval timeouts. It does **not** replace `hermes computer-use doctor`, the real Finder double-click, the two full user-journey replays, [[items/ops-graph-engineering-pilot]], Vera's exact-artifact review, or Sam's release and installation decisions.

### Provenance

Grounded in the 4 September Finder handoff and blocked Vera receipt recorded in [[project_state/donworth-studio]] and [[items/donworth-publishable-and-outreach]], the fresh read-only computer-use health report observed at 18:02 IST on 4 September, the fresh-agent and recoverable-failure requirements in [[decisions/2026-08-31-agent-legible-system-design-standard]], and the ordinary-user-path acceptance boundary retained by [[items/ops-graph-engineering-pilot]]. No UI action, task mutation, product change, installation, provider call, spend, deployment or production mutation was performed during this scan.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[project_state/donworth-studio]] — current Finder acceptance blocker and exact task state
- [[items/donworth-publishable-and-outreach]] — user-handoff acceptance context
- [[items/ops-graph-engineering-pilot]] — existing evidence and retry workflow; this gate does not duplicate its receipt assembly
- [[decisions/2026-08-31-agent-legible-system-design-standard]] — preconditions, failure and acceptance evidence standard
- [[companies/donworth-ai-solutions]] — parent company context

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[companies/donworth-ai-solutions]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[items/donworth-publishable-and-outreach]]
- [[items/ops-graph-engineering-pilot]]
- [[project_state/donworth-studio]]

