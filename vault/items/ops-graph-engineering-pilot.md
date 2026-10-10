---
id: ops-graph-engineering-pilot
company_id: ground-zero
domain: ops
title: Prove one bounded Hermes execution graph on three internal tasks
rationale: Complex research and audit work currently relies too heavily on one agent producing and judging its own output. A small evidence graph can separate research, synthesis, review and approval without adding a new production framework.
council_note: Graph engineering pilot · Effort M
priority: P1
effort: M
impact: 86
state: proposed
is_one_thing: true
source: graph engineering research 2026-08-04
run_date: "2026-08-04"
created_at: "2026-08-04T22:20:00+01:00"
updated_at: "2026-10-01T18:03:51+01:00"
---

## Objective

Implement one reusable, read-only Hermes workflow graph using existing Kanban dependencies, specialist profiles, structured handoffs and a deterministic evidence gate. Test it on three internal tasks before considering LangGraph or any production integration.

## Graph

```text
scope
→ parallel source, product-state and commercial researchers
→ synthesizer
→ independent adversarial reviewer
→ deterministic evidence gate
→ human approval when consequential
→ Ground Zero artifact and run receipt
```

## Constraints

- No production changes, outreach, publishing, payments or customer communication.
- No node may inherit tools it does not need.
- Reviewer is read-only and returns structured PASS or FAIL.
- Maximum two revision cycles.
- Every run has a graph version, run ID, node IDs, budget and terminal status.
- Ground Zero is shared durable state, not a scratchpad for unrestricted agent writes.

## Three test runs

1. Current AI research brief with primary-source citations.
2. OpenHouse release-readiness or evidence audit against immutable artifacts.
3. Discovery-led commercial meeting brief using verified company and prospect evidence.

## Measures

- human corrections after automated PASS
- unsupported claims caught
- routing and reducer errors
- retries and failure recovery
- time and model cost
- quality versus a single-agent baseline
- removable nodes

## Done when

- A versioned graph contract and node-contract template exist.
- All three runs complete or fail closed with durable receipts.
- One comparison report states whether the graph improved quality enough to justify its cost.
- Sam decides adopt, simplify or stop.

## Material proposal, 13 August 2026 — release evidence receipt assembler

Use the release-readiness test run above to prove one reusable, read-only receipt assembler rather than opening a separate automation item.

### Bottleneck

Release and repair evidence is repeatedly reconstructed by hand across repositories, deployments, runtimes and physical devices. The latest [[project_state/oh]] check proves that OpenHouse `main` advanced directly to `b1629c34` and Vercel served the exact commit, but rendered homeowner acceptance, full type/lint validation and database correctness remained open. The latest [[project_state/personal-agent]] check records Aire source advancing to unpublished `36d769f` with durable Work receipts, while `3556088` remains the last signed, installed and directly rendered physical-iPhone candidate; the newer receipt UI, fresh streaming request, visible Home Screen icon, accessibility findings and currently unavailable private tailnet route remain open. These are the same failure mode: implementation, build, deployment, installation and user-visible acceptance are different states, but the handoff is assembled manually from scattered evidence.

### Value category

- **Risk reduction:** prevents a built, served or installed candidate being reported as user-surface accepted.
- **Time reclaimed and decision quality:** produces one reviewable release receipt instead of re-reading logs, checks and project-state prose.
- **Reusable workflow and proof asset:** supplies the audit trail required by [[goals/personal-agent-ai-operated-company-proof]] without automating release authority.

### Smallest live test

Run the graph read-only against two completed real candidates using evidence that already exists:

1. OpenHouse production commit `b1629c34` and its associated Vercel deployment.
2. Aire physical-device candidate `3556088` and its recorded runtime, signing, installation and screenshot evidence.

The assembler must emit a compact receipt with immutable candidate identity, source receipts, verification layers (`implemented`, `built`, `served/installed`, `rendered`, `accepted`), explicit missing checks, approval state and a terminal `PASS`, `HOLD` or `UNKNOWN`. It must not execute tests, drive a device, change GitHub/Vercel settings, deploy, promote or publish.

### Evidence of success

- It reproduces the known truth boundary: OpenHouse is `served` but not rendered-accepted; Aire is installed and partly rendered-verified but still `HOLD` on fresh streaming, visible icon and accessibility closure.
- Every claim links to a named source or receipt; unavailable evidence becomes `UNKNOWN`, never an inferred pass.
- An independent reviewer can reproduce both classifications from the cited inputs and finds no unsupported completion claim.
- The receipt is shorter to review than the underlying handoff while preserving all release-blocking gaps.

### Downside and failure mode

A receipt can create false confidence if source evidence is stale, candidate identities are mixed or physical-device acceptance is reduced to automated checks. Fail closed on missing or mismatched commit, deployment, runtime or device identity. Keep direct rendered-screen review and independent technical review outside the automation.

### Approval boundary

Automated scope is read-only evidence collection, classification and a draft Ground Zero receipt. Sam must approve any push, merge, repository-rule change, deployment, alias move, migration, device interaction that changes state, production promotion or public proof asset. No secrets belong in the receipt.

### What it replaces

It replaces the ad hoc manual assembly of release handoffs and repeated re-reading needed to answer “what is actually verified?”. It does **not** replace tests, security review, [[items/ops-project-state-reconciler]], physical-device acceptance or human release approval.

### Provenance

Derived from the 13 August live evidence in [[project_state/oh]], [[items/oh-live-portal-boundary-activation]] and [[project_state/personal-agent]], plus the auditable-workflow requirement in [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]] and [[goals/personal-agent-ai-operated-company-proof]].

## Material proposal, 14 August 2026 — accepted-requirement drift check

Use the existing graph pilot for one read-only pre-acceptance check rather than opening another automation item.

### Bottleneck

Accepted product requirements are being reconciled against source changes manually and late. On 14 August the live `/Users/samdonworth/Projects/IrelandGPT` root checkout remained at committed base `d533206b`, but carried five modified tracked files with 159 insertions and 1,059 deletions plus untracked proof artifacts. The diff removes automation and capability loading, removes the current separate product surfaces, and changes contract tests to require those outcomes to be absent. Removing the rejected Doing/Done/You labels is directionally valid, but removing their useful outcomes without the adopted Chat, Work and Profile replacement conflicts with [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] and the live ledger in [[items/personal-agent-hermes-desktop-parity]]. The conflict was found through a manual worktree-versus-vault audit after local code and tests had already drifted together.

### Value category

- **Risk reduction:** catches a locally self-consistent implementation and test rewrite that regresses accepted requirements.
- **Decision quality:** distinguishes an accepted presentation change from removal of the underlying product outcome.
- **Time reclaimed:** replaces repeated manual re-reading of decisions, ledgers and large worktree diffs before candidate acceptance.

### Smallest live test

Run one read-only graph against the current dirty IrelandGPT root checkout. Freeze the base commit, tracked diff digest and untracked manifest; load only the three governing notes above; then emit a compact requirement matrix with `PRESERVED`, `REMOVED`, `NOT YET PROVEN` or `CONTRADICTION`, exact source hunks, decision citations and a terminal `PASS`, `HOLD` or `UNKNOWN`. Do not edit the checkout, execute production paths, commit or treat screenshots as acceptance evidence.

### Evidence of success

- The check marks removal of Doing/Done/You labels as non-blocking by itself.
- It separately flags missing Work/Profile replacement plus removed capability and automation outcomes as `CONTRADICTION` and returns `HOLD`.
- Every finding binds to the frozen diff and a current, non-superseded requirement; ambiguous or stale requirements become `UNKNOWN`.
- An independent reviewer reproduces the classification without finding an accepted requirement omitted or a superseded decision enforced.
- Review time is lower than the manual audit while preserving the exact evidence boundary.

### Downside and failure mode

Product decisions are semantic, may supersede one another and cannot be reduced safely to keyword matching. A stale ledger could create false holds, while a broad LLM comparison could invent requirements. Keep the first test narrow, pin the accepted notes explicitly, fail closed on source or requirement drift, and measure reviewer corrections before reuse.

### Approval boundary

Automation may read immutable Git objects, the protected dirty diff, untracked-file metadata and named Ground Zero notes, then draft a receipt. Sam or an independent reviewer decides whether a contradiction is real and what to change. No automated edit, test rewrite, commit, reset, cleanup, push, merge, deployment, production action or acceptance promotion is authorised.

### What it replaces

It replaces the ad hoc pre-acceptance comparison of candidate source and tests against Ground Zero decisions. It does **not** replace product judgement, code review, test execution, security review, the release evidence receipt assembler above, physical-device verification or rendered-surface acceptance.

### Provenance

Grounded in the 14 August live IrelandGPT status and diff, the reconciled source boundary in [[project_state/personal-agent]], the governing ledger in [[items/personal-agent-hermes-desktop-parity]], and the adopted decisions [[decisions/2026-08-06-personal-agent-runtime-first-sequence]], [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]] and [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]].

## Material proposal, 1 September 2026 — iteration-budget retry evidence capsule

Use the existing graph pilot for one bounded **retry evidence capsule** rather than opening a separate automation item or adding another standing monitor.

### Bottleneck

Long engineering tasks are losing decision-ready continuity at iteration-budget boundaries, so the next worker has to reconstruct the exact artifact, accepted evidence, failed stage and remaining gates before it can make a safe move. [[project_state/donworth-studio]] records three unaccepted package/runtime attempts in `t_c7fe271a`: run 97 timed out without complete positive-path evidence; run 99 found the omitted gateway `owner` contract and produced the independently accepted repair `ac651aa1…`; and run 103 reached the task gateway but the packaged UI entered local bootstrap, tried to fetch a local commit from GitHub, retained central `HERMES AGENT` and failed to render the seeded session. The successor integration lane `t_11738d3b` then exhausted run 104 mid-smoke. Its preserved evidence already bound one unsigned `app.asar` (`a132eb0897…`), 19 matched identity paths, two owned startup-repair paths and one pre-product AF_UNIX path-length failure, but retry 105 still had to inherit that boundary from narrative state. This is a verified recurring handoff problem, not a request to automate packaging or acceptance.

### Value category

- **Delivery reliability and risk reduction:** prevents a fresh worker from mixing candidates, reopening an accepted repair, skipping an open gate or treating preserved evidence as current acceptance.
- **Time and model cost reclaimed:** replaces transcript archaeology and broad rediscovery after an iteration-budget death with one bounded, machine-readable resume point.
- **Agent legibility:** operationalises the fresh-agent test in [[decisions/2026-08-31-agent-legible-system-design-standard]] for real Kanban retries.

### Smallest live test

After Sam activates the pilot, run one read-only assembler against the already active Donworth integration lane `t_11738d3b`. Read only its task contract, structured handoffs/comments, exact worktree Git metadata and named artifact receipts. Produce a draft capsule containing:

1. task and retry identity;
2. objective, owned/unowned scope and prohibited actions;
3. exact base/head/tree plus package and evidence hashes;
4. independently accepted facts and their receipt IDs;
5. last attempted stage, deterministic failure signature and environment constraint;
6. open gates and evidence that must not be promoted;
7. the next single bounded probe; and
8. invalidation rules for source, artifact, runtime or task-contract drift.

Give the capsule and the existing card—not the old transcript—to one fresh Forge retry. For this fixture, the proposed next probe must remain the short task-owned temp/socket-root correction for the AF_UNIX harness failure, reusing the bound package only if source and `app.asar` hashes still match. The test must not edit source, rebuild, launch, install, drive the UI, change the card, or execute the probe; it evaluates whether a fresh worker can identify the safe next move from the capsule.

### Evidence of success

- The fresh worker reproduces the exact candidate and `app.asar` identity, keeps `ac651aa1…` as an independently accepted owner-contract repair, and does not call the replacement package installed or accepted.
- It identifies the AF_UNIX path-length failure as pre-product and the short-path harness probe as next, without re-running or reopening the 19 identity paths merely to rediscover context; any freshness-driven rerun is explicit.
- Changing the head, tree, artifact hash, task contract or runtime identity invalidates the capsule and returns `HOLD` or `UNKNOWN` rather than silently resuming.
- Vera can compare the capsule with the named receipts and finds no missing open gate, unsupported completion claim or mixed candidate.
- Review records whether the capsule reduced duplicate discovery, repeated checks and time-to-first-useful-probe versus run 104; adoption requires a real reduction with zero evidence-boundary regressions.

### Downside and failure mode

A stale capsule can make the wrong next action look authoritative, while copying raw logs or environment data can leak secrets and create another competing state store. Keep the capsule derived, minimal and task-scoped; store receipt references rather than raw transcripts; exclude credentials, phone numbers and environment values; bind every claim to immutable identities; expire it on any governing drift; and fail closed when the live worktree, artifact or card cannot be reconciled. The capsule is a navigation aid, never acceptance evidence by itself.

### Approval boundary

This proposal authorises no implementation. If Sam activates the pilot, automation may read the named task, non-secret Git metadata and existing receipts and draft one capsule for review. It may not edit source or tests, execute commands in the delivery worktree, rerun the package, launch or install an app, drive a user surface, mutate Kanban state, push, merge, sign, notarise, distribute, deploy, spend, contact a provider or promote any acceptance state. Existing Forge ownership, Vera independence and Sam's consequential-action gates remain unchanged.

### What it replaces

It replaces manual resume-point prose, repeated transcript re-reading and broad rediscovery after iteration-budget exhaustion. It does **not** replace the card's operating contract, [[items/ops-project-state-reconciler]], the release evidence receipt assembler above, test execution, Forge judgement, Vera's exact-artifact review, rendered/runtime verification or Sam's release approval.

### Provenance

Grounded in the 1 September run 97/99/103/104/105 sequence and exact preserved identities in [[project_state/donworth-studio]], the portfolio-wide fresh-agent and recoverable-failure requirements in [[decisions/2026-08-31-agent-legible-system-design-standard]], and this pilot's existing measures for retries, failure recovery, time and model cost.

## Material proposal, 23 September 2026 — source-authored verification manifest consistency gate

Extend the existing **release evidence receipt assembler** with one deterministic, read-only **source-authored verification manifest consistency gate**. This checks whether a repository's own status claims are internally coherent before they enter a release receipt; it does not rerun tests or confer acceptance.

### Bottleneck

The paid Here’s Health build now has a verified evidence conflict that the recurring reconciliation sweep must reconstruct manually. At exact remote `main` `a61ff0825f338b4d0fad531eab0675cfc4015af4`, repository-authored `CURRENT-STATUS.md` claims **494 passing tests**, while committed `verification-summary-2026-09-19.json` totals **481** (`285 + 154 + 33 + 9`), names older commit `2669661562e45744afeb6fa0f0aad2992a4d3eb1` as its verification base and records one skipped Shopify live test. [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]] and the 19 September checkpoint in [[items/ops-project-state-reconciler]] all preserve this contradiction and explicitly stop short of treating either record as an independent rerun.

Remote source can advance legitimately, but each advance currently requires a person to reopen status prose, recalculate suite totals, compare the manifest base with the candidate commit and restate the same evidence boundary. On a paid delivery where €10,000 + VAT is due on completion, inconsistent source-authored evidence creates avoidable review work and can make implementation progress look more release-ready than it is. This is a verified evidence-integrity bottleneck, not a proposal to automate completion or client reporting.

### Value category

- **Delivery risk reduction:** prevents a stale or arithmetically inconsistent verification summary from being promoted as evidence for the current candidate.
- **Decision quality:** separates repository-authored claims, internally consistent manifests, independent reruns and exact-artifact acceptance.
- **Time reclaimed:** replaces repeated manual count arithmetic and candidate/base comparison during project-state reconciliation and release review.
- **Commercial clarity:** preserves visible paid-build progress without converting a source claim into a finished-app claim.

### Smallest live test

Use the two committed records at exact `a61ff082…` as a fixed read-only fixture. Extract only the candidate commit/tree, each claim source, declared suite identifiers where present, claimed total, per-suite counts, manifest verification base, skipped/failed counts and generation timestamp. Emit:

1. `COUNT_RELATION`: `MATCH`, `MISMATCH` or `UNKNOWN`;
2. `BASE_RELATION`: `CURRENT`, `STALE`, `DIVERGED` or `UNKNOWN`;
3. `EVIDENCE_INTEGRITY`: `CONSISTENT`, `CONFLICT` or `UNKNOWN`; and
4. a terminal release-receipt contribution of `HOLD` or `UNKNOWN` whenever the records conflict or cannot be bound to the candidate.

Add one controlled consistency fixture with the same schema and matching candidate/count fields to prove the gate does not reject coherent records. Run the fixture twice and require byte-stable output. Stop at the receipt: do not check out source, execute tests, inspect Square/Shopify/Acuity, drive a device or update repository-authored evidence.

### Evidence of success

- The exact `a61ff082…` fixture returns `COUNT_RELATION: MISMATCH`, `BASE_RELATION: STALE`, `EVIDENCE_INTEGRITY: CONFLICT` and `HOLD`; it preserves 494, 481, `26696615…` and the skipped Shopify live test as separately sourced facts.
- The controlled coherent fixture returns `CONSISTENT`, while the receipt still states that internal consistency does **not** prove tests ran, passed independently or satisfy release acceptance.
- Missing suite identity, an unresolvable candidate, incompatible count scopes or absent manifest fields return `UNKNOWN`, never a guessed reconciliation.
- An unchanged second run is byte-stable and creates no additional human-facing alert.
- Manual comparison with the exact committed files and the named Ground Zero notes finds no omitted mismatch, invented test result or claim that the paid app is complete.

### Downside

Different documents can legitimately count different suites, generated evidence may lag a fast-moving branch, and a coherent manifest can still be false or incomplete. Compare totals only when suite scope is explicitly compatible; preserve each source separately; require immutable candidate binding; classify ambiguous scope as `UNKNOWN`; and never turn `CONSISTENT` into a test-pass or acceptance verdict. The first test is deliberately limited to one paid repository and two named committed records.

### Approval boundary

Automation may read the two named non-secret files and immutable commit/tree metadata from `sam-evolv/heres-health-app`, compare them with prior Ground Zero receipts and draft one local consistency receipt. It may not read or expose credentials; inspect provider or customer data; execute tests/builds; check out, edit, commit, sign, push, merge or protect a branch; deploy; drive a device; contact Here’s Health; spend money; declare the app complete; or promote a candidate to accepted. Sam retains approval over source changes, release, completion and client communication; independent Vera review remains required for exact-artifact acceptance.

### What it replaces

It replaces manual verification-total arithmetic, candidate/base comparison and repetitive contradiction prose in the recurring reconciliation and pre-review handoff. It does **not** replace [[items/ops-project-state-reconciler]], the remote source-lineage receipt, test execution, provider-account checks, security review, rendered or physical-device verification, Vera's exact-artifact judgement, or Sam's completion and release decision.

### Provenance

Grounded in the exact source-authored contradiction recorded in [[project_state/heres-health-app]], the paid-delivery work item [[items/heres-health-week-one-discovery-and-technical-proof]], the repeated 19 September comparison in [[items/ops-project-state-reconciler]], the paid terms in [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]], and the evidence-state separation required by [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends the existing release evidence receipt assembler rather than creating another monitor or acceptance authority.

## Material proposal, 24 September 2026 — source-to-hosted release parity gate

Extend the existing **release evidence receipt assembler** with one deterministic, read-only **source-to-hosted release parity gate** for migrations, Edge Functions and hosted CI execution. This is an evidence input to a release receipt, not a deployer, migration runner or completion authority.

### Bottleneck

The paid Here’s Health build is advancing faster than the hosted release state and the recurring reconciliation sweep must rebuild that comparison manually. Ground Zero's 16:12 IST checkpoint recorded draft PR #1 at `ded55d56…`, with five source migrations and `account-deletion` absent from the active Supabase project. Fresh read-only operational checks at 18:04 IST show the PR has already advanced again to exact head `65bfd39d1535639da20aba8dc7824c11e9670fba` over base `a61ff0825f338b4d0fad531eab0675cfc4015af4`.

The immutable head tree contains five post-hosted migration files (`20260924092000_account_deletion_requests`, `20260924094500_square_account_erasure`, `20260924100500_shopify_order_reconciliation`, `20260924160000_shopify_confirmation_recovery` and `20260924170000_account_deletion_operations`) plus source for `account-deletion`. The active hosted project still reports exactly five applied migrations ending at `20260923182949_shopify_checkout_storage` and only active functions `square-api`, `square-sandbox` and `shopify-api`. Two check runs for `65bfd39…` failed with zero steps; both annotations say an Actions budget prevented the jobs from starting, so they are CI-availability failures rather than code-test results. The PR body itself now says "three staged migrations" while the immutable tree contains five post-hosted migrations, reinforcing the need to derive parity from source and provider metadata rather than status prose.

This is a verified release-evidence bottleneck on a paying client build with €10,000 + VAT due on completion. It is not evidence that any migration should now be applied or that the app is otherwise release-ready.

### Value category

- **Delivery risk reduction:** prevents source-only database or function requirements, and CI jobs that never executed, from being mistaken for a releasable backend.
- **Decision quality:** separates source intent, hosted presence, exact code identity, CI availability, independent verification and production acceptance.
- **Time reclaimed:** replaces repeated manual comparison of Git trees, Supabase migration/function listings and check-run annotations after every fast-moving branch advance.
- **Commercial clarity:** lets implementation progress remain visible without implying the finished-app completion gate has been met.

### Smallest live test

Freeze exact PR head `65bfd39…`, base `a61ff082…` and Supabase project identity `eiyxwxyroeviufniabeo`, then run one read-only comparison that emits:

1. the source migration manifest with path, version, name and immutable Git blob identity;
2. the hosted migration ledger with version and name;
3. source and hosted function slugs, preserving deployed version/hash metadata without claiming it is directly comparable to a Git blob;
4. every check run's exact head, status, conclusion, step count and blocking annotation; and
5. per-object classifications such as `APPLIED_NAME_MATCH`, `SOURCE_ONLY`, `HOSTED_ONLY`, `DEPLOYED_SLUG_PRESENT`, `CODE_IDENTITY_UNKNOWN`, `CI_PASSED`, `CI_FAILED_AFTER_STEPS`, `CI_DID_NOT_START_BUDGET` or `UNKNOWN`, followed by terminal `PASS`, `HOLD` or `UNKNOWN` for the release receipt.

The fixture must recognise the timestamp-only relocation of the existing Shopify storage migration as the same Git blob rather than inventing a sixth missing migration. Run the frozen fixture twice and require byte-stable output. A changed PR head invalidates the receipt and requires a new bounded run; it must not silently extend the old candidate.

### Evidence of success

- The current fixture identifies exactly the five named source-only migrations and the absent hosted `account-deletion` slug, while preserving function code identity as `UNKNOWN` unless a trustworthy build-to-deployment binding exists.
- It classifies both current check runs as `CI_DID_NOT_START_BUDGET` from zero steps plus the exact annotations, never as failed code tests or passing CI.
- It does not count the renamed Shopify storage file as an unapplied new migration because the Git blob is unchanged and the hosted ledger contains the replacement version/name.
- The receipt returns `HOLD`; every field links to immutable Git, GitHub check-run or read-only Supabase metadata, and an independent reviewer can reproduce the classification without reading customer rows or secrets.
- A second unchanged run is byte-stable and silent; a new head produces a new candidate identity rather than overwriting history.

### Downside

Migration names do not prove SQL content was safely applied, a deployed function slug does not prove its bytes match source, and intentionally staged changes can be legitimately absent from production. Provider metadata or permissions may also be incomplete. Preserve those limits as `UNKNOWN`; compare Git blobs only within Git; never infer provider-code identity from a slug or timestamp; and keep database integration tests, RLS/role tests, provider flows, signed-device journeys and independent exact-artifact review outside the gate. A `HOLD` is a release-evidence state, not an instruction to deploy.

### Approval boundary

Automation may read immutable Git tree metadata, PR/check-run metadata, non-secret source manifests, the read-only Supabase migration ledger and Edge Function metadata already available to the approved workflow, then draft one local receipt. It may not read customer rows or secrets; change GitHub billing or Actions budgets; rerun or edit workflows; check out or modify source; execute SQL or functions; create a Supabase branch; deploy, apply, rollback or delete a migration/function; enable checkout writes; drive a device; contact Here’s Health; spend money; or declare the app complete. Sam retains approval over spend, source change, hosted mutation, release and client communication; exact-artifact and user-surface acceptance remain independent gates.

### What it replaces

It replaces repeated manual source-versus-hosted-versus-CI comparison across [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[items/ops-project-state-reconciler]]. It does **not** replace those canonical notes, the source-authored manifest consistency gate above, test execution, database review, deployment planning, provider acceptance, Vera's exact-artifact judgement or Sam's completion and release decision.

### Provenance

Grounded in the 24 September canonical checkpoints in [[project_state/heres-health-app]], [[items/heres-health-week-one-discovery-and-technical-proof]] and [[items/ops-project-state-reconciler]], then refreshed against exact live GitHub PR/tree/check-run metadata and read-only Supabase migration/function metadata at 18:04 IST. Commercial and approval boundaries come from [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]], [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]] and [[decisions/2026-08-31-agent-legible-system-design-standard]]. This extends the existing release evidence receipt assembler rather than creating a duplicate monitor or deployment system.

## Material proposal, 1 October 2026 — App Store draft-state parity gate

Extend the existing **release evidence receipt assembler** with one authenticated, read-only **App Store draft-state parity gate** for a named iOS candidate. This is a release-evidence input, not a store operator, compliance decision-maker or completion authority.

### Bottleneck

The paid Here’s Health build has moved through several distinct signed and source-only candidates while the App Store draft has also changed. Between 29 September and 1 October, [[project_state/heres-health-app]] records direct or preserved evidence for builds 1, 3 and 5, source-only build 6, and exact-head release records for signed build 7. Each reconciliation has had to reconstruct manually which IPA was processed or selected, which source it represents, whether Apple still reports `Missing Compliance`, which screenshot slots are populated, and whether privacy and reviewer fields are merely drafted or actually complete.

The latest canonical checkpoint binds signed build 7 to source `0f9ee377…` and IPA `23a778e2…`, and records Apple processing/selection plus a complete but unpublished 12-category privacy draft. A fresh authenticated App Store Connect read was nevertheless blocked before the site loaded because the running Chrome process held the real-profile credential databases. The source record is therefore current repository evidence, not a fresh console readback. This is the same recurring release-evidence gap across successive candidates: a valid signed artifact, a source-authored Apple receipt and the live saved App Store draft are different states.

This does not duplicate [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]], which tests whether declarations match actual data flows, or [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]], which governs account ownership and roles. The missing control is a compact candidate-to-console parity receipt before review or completion decisions.

### Value category

- **Release risk reduction:** prevents a processed or selected older build, stale screenshot set or unpublished declaration draft from being attributed to the current candidate.
- **Decision quality:** separates source record, signed IPA identity, Apple processing, saved draft state, declaration completeness, physical-device acceptance and review submission.
- **Time reclaimed:** replaces repeated manual comparison of release records, IPA metadata and App Store version-page fields after every build replacement.
- **Commercial clarity:** keeps visible progress on the paid build without turning Apple draft movement into the finished-app or €10,000 + VAT completion decision in [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]].

### Smallest live test

Use one historical positive fixture from the preserved build-5 App Store receipt and the current build-7 record as an intentionally unconfirmed fixture. Then, only during a Sam-approved, human-present authenticated window, run one read-only check of the Here’s Health App Store draft:

1. Freeze the candidate source commit/tree, bundle identifier, marketing/build version, IPA SHA-256, Apple app ID and observation time from the named release receipt.
2. Read only the current version-page state needed for parity: version state, selected build number and Apple build ID, processing state, export-compliance state, release mode, populated screenshot-slot counts, reviewer-access completeness as a boolean, and App Privacy publish/completeness state with category count. Do not read, copy or expose credentials, reviewer passwords, legal answers or customer data.
3. Emit `SOURCE_TO_IPA` as `MATCH`, `MISMATCH` or `UNKNOWN`; `IPA_TO_APPLE` as `MATCH`, `STALE`, `MISMATCH` or `UNKNOWN`; and each draft gate as `COMPLETE`, `OPEN`, `UNPUBLISHED` or `UNKNOWN`, followed by terminal `PASS`, `HOLD` or `UNKNOWN` for the release receipt.
4. Treat the current build-7 source record as `UNKNOWN/HOLD` until a fresh console read binds the selected Apple build to that exact candidate. An unavailable or locked authenticated session is a recorded blocker, not a reason to copy browser credential stores or reuse stale UI evidence.
5. Stop at the local receipt. Do not upload, select, save, publish, add for review, submit, release or edit any store field.

### Evidence of success

- The historical build-5 fixture resolves to the exact processed/selected build recorded by its preserved Apple receipt without inheriting later build-6 or build-7 source state.
- Before a fresh read, the build-7 fixture returns `IPA_TO_APPLE: UNKNOWN` and `HOLD`; it does not promote source-authored processing/selection into live console evidence.
- When the approved live read is available, the receipt names one exact selected build and preserves every open compliance, privacy, screenshot and reviewer gate without copying secret or personal field values.
- A changed source commit, IPA hash, build number or selected Apple build invalidates the prior receipt instead of silently updating it; an unchanged second run is byte-stable and creates no new human-facing alert.
- Independent comparison with the named release receipt, the read-only Apple page and [[items/heres-health-week-one-discovery-and-technical-proof]] finds no mixed candidate, omitted blocker or claim that store parity proves device, provider, client or completion acceptance.

### Downside

App Store Connect is session-bound and its UI can change; processing is asynchronous; some fields are not safely or consistently machine-readable; and a complete-looking draft can still contain legally or commercially wrong answers. Preserve `UNKNOWN`, bind observations to time and candidate identity, read only allowlisted fields, and require human review of declaration substance. Do not bypass account security, copy a locked browser profile, or treat selected-build parity as proof of app behavior, merchant acceptance, legal compliance or store approval.

### Approval boundary

This proposal authorises documentation only. After separate explicit approval, the gate may read the named non-secret release receipt, exact IPA metadata and allowlisted App Store draft fields in an already authenticated, human-present session, then draft one local receipt. It may not request or store credentials; copy browser credential databases; change roles; accept terms; upload or select a build; edit, save or publish privacy/compliance/reviewer/metadata fields; add for review; submit or release; drive a physical device; contact Here’s Health or Apple; spend money; push, merge, deploy, declare completion or mutate production. Sam retains every store, release, completion and client-communication decision.

### What it replaces

It replaces repeated manual candidate-versus-App-Store comparison and repetitive reconstruction of selected build, processing and draft-field state in the recurring reconciliation. It does **not** replace [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]], [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]], signed-artifact verification, physical-device/provider/merchant acceptance, independent review, Apple review, [[items/ops-project-state-reconciler]] or Sam’s finished-app and release decisions.

### Provenance

Grounded in the successive 29 September–1 October build and App Store checkpoints in [[project_state/heres-health-app]] and [[items/heres-health-week-one-discovery-and-technical-proof]], including the latest build-7 source receipt and failed fresh-console read; the repeated manual synthesis in [[items/ops-project-state-reconciler]]; the adjacent privacy and account-ownership gates above; the paid completion boundary in [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]]; and the evidence-state separation in [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]. This extends the existing release evidence assembler rather than creating another item, scheduler or store workflow.

## Connected notes

- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[context/ops-automation-moc]]
- [[context/agentic-value-creation-mission]]
- [[context/founder-execution-os]]
- [[companies/openhouse-ai]]
- [[project_state/oh]]
- [[project_state/heres-health-app]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[items/_Index]]

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-04-graph-engineering-research-and-implementation]]
- [[briefs/2026-08-05-phosphen-karpathy-llm-use-source-audit]]
- [[briefs/2026-08-22-heres-health-app-privacy-sdk-drift-release-gate]]
- [[briefs/2026-08-31-heres-health-client-owned-app-store-account-readiness-gate]]
- [[companies/openhouse-ai]]
- [[context/agentic-value-creation-mission]]
- [[context/founder-execution-os]]
- [[context/ops-automation-moc]]
- [[decisions/2026-08-06-personal-agent-runtime-first-sequence]]
- [[decisions/2026-08-07-aire-ai-operated-company-six-month-mission]]
- [[decisions/2026-08-07-personal-agent-chat-work-profile-architecture]]
- [[decisions/2026-08-31-agent-legible-system-design-standard]]
- [[decisions/2026-09-05-donworth-outcome-driven-delivery-standard]]
- [[decisions/2026-09-16-heres-health-deposit-and-completion-terms]]
- [[goals/personal-agent-ai-operated-company-proof]]
- [[items/heres-health-week-one-discovery-and-technical-proof]]
- [[items/oh-live-portal-boundary-activation]]
- [[items/ops-accepted-artifact-custody-gate]]
- [[items/ops-aire-hermes-upstream-impact-triage]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-desktop-ui-approval-readiness-gate]]
- [[items/ops-pr-merge-acceptance-receipt]]
- [[items/ops-project-state-reconciler]]
- [[items/personal-agent-hermes-desktop-parity]]
- [[project_state/donworth-studio]]
- [[project_state/heres-health-app]]
- [[project_state/oh]]
- [[project_state/personal-agent]]

