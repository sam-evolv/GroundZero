---
title: Personal intelligence and Bridgewater readiness synthesis
date: 2026-08-05
status: evidence-backed overnight synthesis
source: Ground Zero context index, vault files, git state, capture tests, cron state, property-assistant worktrees
review_date: "2026-08-05"
---

# Personal intelligence and Bridgewater readiness synthesis

This note is built from what is actually on disk and in git this morning, not from prose memory. It separates verified fact, assumption, local-only work and production reality for two outcomes: (1) the private personal-intelligence system and (2) OpenHouse readiness for Bridgewater. No code was changed, nothing was pushed or deployed, no one was contacted, and no readiness claim is made without evidence.

## Headline

- Personal intelligence is wired and tested but half-starved of input: Spotify capture is live, Substack capture is active but idle because no publication list has been supplied.
- Bridgewater meeting assets (prep brief, card, proof pack PDF, concierge runbook, certified reviewer environment) are ready. The blocking gap is the meeting itself has no date, and the "synthetic first-home" code path is scaffold-only, unverified, and unpushed.
- Spelling note: the company is **Bridgewater** (confirmed by `bridgewaterconstruction.ie`), not Bridgwater or Bridgewater Developments.

---

## Outcome 1: Private personal-intelligence system

### Verified fact

- The library lives at `vault/private/learning-library/`. It is excluded from Git through this machine's `.git/info/exclude` (`git check-ignore` confirms it). It is not committed, pushed, synced or published.
- Structure is present and coherent: `README.md`, `source-registry.md`, `inbox.md`, `quote-bank.md`, plus `books/`, `podcasts/`, `concepts/`, `substack/` folders and the two capture scripts (`spotify_capture.py`, `substack_capture.py`) with their tests.
- Tests pass. `python3 -m pytest` in the folder reports `14 passed`. The README records the capture suite as `10/10` with a final independent PASS and a successful controlled cron run.
- Two capture connectors are active as Hermes cron jobs and both reported `ok` on their last run this morning:
  - `spotify-podcast-capture.py` (every 5 minutes; last ok 2026-08-05 05:17).
  - `substack-feed-capture.py` (every 120 minutes; last ok 2026-08-05 05:10).
- Source contracts are explicit and written down in `README.md` and `source-registry.md`:
  - Spotify: cross-device current-playback poll, qualifies an episode only after 25% or 15 minutes contiguous playback, resolves to publisher RSS/transcript, stores canonical identity + short public excerpt only, never rips audio, dedup by canonical ID.
  - Substack: public RSS only, stores canonical identity + metadata + short public excerpt, never full posts, never account credentials, feed presence is not treated as read-proof.
  - Two podcast feeds are registered: Invest Like the Best and Modern Wisdom.
- One Spotify candidate is already captured and waiting for curation: a Moonshots with Peter Diamandis episode (Dario vs Jensen, EP #275), reported at 85.6% playback position, sitting in the inbox as of 2026-08-04.
- The morning routine cron (`Sam three-question morning routine`, 06:40) is active and pulls a thought from this library when a verified quote exists.

### Assumption / not yet verified

- The README claims the Spotify OAuth connection and live episode detection passed final independent review. I did not re-run that review this session; I only confirmed the cron runs green and the pytest suite passes.
- `spotify-playback-state.json` is empty in the snapshot I read. That does not mean capture is broken (the Moonshots inbox entry shows a real capture landed), but I cannot confirm a continuously-played episode has been fully qualified and curated into a processed note yet.
- The `{"seen":[]}` Substack state means the connector has captured zero publications. That is expected given no feeds are registered, not a defect.

### Local-only work

- All of the library is local-only by design (git-excluded). The scripts, tests, inbox and registry are on this machine.
- The `Private learning-library curator` cron (daily 19:15) is the scheduled curation job; it had not run yet at the time of writing.

### Production reality

- There is no production surface for this system. It is a private local intelligence layer. Nothing here touches OpenHouse, OpenBook, or any external account beyond the Spotify OAuth token held in Hermes' local auth store (never written into the vault).
- Sensitive integrations named in the skill (email, finance, health, location) are explicitly NOT enabled and require Sam's explicit approval before any connector is built. None exist.

### Unresolved input needed

- **Substack publication list.** This is the single missing input. `source-registry.md` lists the connector as `active; awaiting Sam's publication list`. Substack RSS URLs of the form `https://PUBLICATION.substack.com/feed` are needed. Until supplied, the connector runs but captures nothing.
- **Episode selection for the two registered podcast feeds.** Invest Like the Best and Modern Wisdom are registered but marked active only when Sam names an episode.
- **Curation bandwidth.** The loop only creates value when captured items become processed notes. The Moonshots entry is the current backlog item.

### Next sources ranked by value and sensitivity

Ranked highest value first, with sensitivity noted (all current options are low-sensitivity public sources):

1. **Substack publication list (public RSS).** Highest leverage, lowest sensitivity. Unblocks the already-active connector and starts a real intake stream. This is the one input that turns an idle connector into a working one.
2. **Curate the captured Moonshots episode into a processed note.** Closes the capture to teach loop on already-collected evidence and proves the system produces something usable, not just logs.
3. **Named high-priority podcast episodes** from the two registered feeds (e.g. a specific Invest Like the Best or Modern Wisdom episode Sam actually listened to). Low sensitivity, medium value, builds the concepts/quote-bank.
4. **Books Sam is reading.** Low sensitivity, medium value; feeds the `books/` index and the morning thought rotation.
5. **Deferred: sensitive integrations (email, finance, health, location).** High potential value but high sensitivity and explicitly out of scope without Sam's written approval. Do not enable now.

---

## Outcome 2: OpenHouse readiness for Bridgewater

### Verified fact (meeting assets)

- `briefs/2026-08-04-bridgewater-meeting-preparation.md` is complete (423 lines): discovery structure, tailored demo, proof points, pilot conversation, pricing position, objection handling, pre-meeting and post-meeting checklists. Status: active-meeting-brief.
- `briefs/2026-08-04-bridgewater-meeting-card.md` is the concise in-meeting version. Status: ready-for-meeting.
- The six-page Longview developer proof pack exists as a real file: `artifacts/openhouse-proof-pack/OpenHouse_Longview_Developer_Proof_Pack_2026-08-03.pdf` (36,463 bytes) plus `build_proof_pack.py` and `verify_proof_pack.py`. It uses the conservative 259-question, 79-home-context set and excludes unsupported accuracy, workload, retention, payment and customer-endorsement claims.
- `briefs/2026-08-04-openhouse-rapid-onboarding-runbook.md` documents the concierge pilot path (Stage 1 synthetic test home, Stage 2 controlled pilot, Stage 3 phase rollout) with the minimum information to request and the internal execution path.
- The exact-home reviewer environment was independently certified on 2026-08-01: 59 documents, 1 video, and a certified Assistant response retrieving the verified AquaBox warranty date.
- Active items exist: `items/oh-bridgewater-warm-introduction` and `items/oh-bridgewater-rapid-onboarding`.
- Relationship context is verified from the brief: Carol Tallon introduced Sam and David by email on 2026-08-04, said she had shared the OpenHouse interview with David, and proposed a call. David's email is `david@bridgewaterconstruction.ie`. Public reporting suggests director David Walsh, but Carol's email did not state his surname or title, so that is a likely match, not a confirmed fact.
- A separate engineering worktree `fix/onboarding-accuracy-first-pass` (HEAD `93bd2a20b49faa4fc7e30c89494dd4cac66ff859`) has committed fixes versus `origin/main`: 6 files, +84 / -8. It secures developer codes, corrects setup claims, and adds `verify-onboarding-contract.mjs`. This addresses several friction items the runbook flagged.

### Assumptions / not yet verified

- **Meeting scheduling is uncaptured.** The prep brief explicitly states date, duration, format, attendees and whether Carol attends are not yet recorded. This is the central open item.
- **The "one working day" first-home turnaround is not internally dry-run.** The runbook itself says this target must be confirmed by an internal dry run before it is offered as a commitment. No such dry run is evidenced.
- **Vercel feature-flag state for any live demo cannot be verified from this session.** There is no `.vercel/project.json` link in the inspected checkouts, so per the mandatory gate I do not assert flag state. The prep card instructs confirming active flags from the correctly linked Vercel project or dashboard. Trust Sam's confirmation.

### Local-only work (Bridgewater code path)

- A worktree `feat/bridgewater-concierge-dryrun` exists at `repos/property-assistant/.worktrees/bridgewater-concierge-20260805`. Its HEAD is `ad327a4bc337b60dd9bfe3944ff5602b2c29adcc`, which is the SAME commit as `origin/main`. The branch has not diverged from main.
- The only Bridgewater-concierge content in that worktree is **untracked and uncommitted**: `apps/unified-portal/lib/concierge/types.ts` and `vitest.concierge.config.ts`.
- `types.ts` is a well-designed pure port contract: a `PilotPorts` interface, fail-closed `assertProvisionedResources` (no runtime schema or bucket creation), and a `ReadinessChecklist` with an `invitationsEnabled` gate that stays false until every required step passes. It references `orchestrator.ts` and `in-memory-ports.ts` as the implementation and synthetic adapter.
- **Those referenced files do not exist.** There is no `orchestrator.ts` and no `in-memory-ports.ts`. There are zero `*.test.ts` files under `lib/concierge`.
- I attempted to run the concierge vitest (`npx vitest run --config vitest.concierge.config.ts`). It failed to load because `vitest` is not resolvable in the worktree, and even if it loaded it would match no test files. So there are **no verified concierge tests and no implemented orchestrator**. The synthetic first-home code path is scaffold-only.

### Production reality

- Nothing Bridgewater-related is pushed, merged, or deployed. `origin/main` is stale at `ad327a4b` (2026-06-28). The live portal is the Longview production environment; there is no Bridgewater tenant, development, or unit in production.
- The concierge fixes and the onboarding-audit fixes are local-only. The onboarding-audit commit is on its own branch and not in main.
- The runbook's code audit still stands for the public self-service path: runtime table/storage-bucket creation on submit, private-bucket upload with public object URLs (retrieval may fail), new-development wizard preview that does not persist `unitTypes`/`units`, and a client call to a super-admin provisioning endpoint. The P0 server-side "create pilot" action is not implemented.
- PR #205 (separate V2 truth-boundary work, exact commit `5d56e3bb`) passed Unified Portal Quality, typecheck and build, but that is the My Home isolation gate, not the Bridgewater concierge path, and it was not merged or promoted.

### What is ready (evidence-backed)

- Meeting strategy, discovery questions, objection handling, pricing hypothesis and pilot scope are fully written and internally consistent.
- The Longview proof pack PDF and the certified exact-home reviewer environment give Sam defensible, conservative proof to show.
- The concierge design contract (`types.ts`) is sound: fail-closed, framework-free, certifiable against a synthetic adapter with zero production writes. The shape is right; the body is not built.
- The onboarding-audit branch has already closed some accuracy and security gaps (secured codes, corrected claims, a contract-verify script).

### What remains blocked

- Meeting has no date, time, format, or attendee list.
- Synthetic first-home implementation (orchestrator + in-memory adapter + tests) is not written; nothing is verifiable or certifiable yet.
- The "one working day" turnaround claim is unproven.
- The public onboarding path still has the runtime-provisioning and URL-mismatch defects; the safe server-side create-pilot action is missing.
- No production Bridgewater tenant exists; a real pilot still needs the data agreement, content approval, exact-scope access checks, and written sign-off described in the runbook.

### Next founder-dependent action

The single highest-leverage founder step is to **confirm the Bridgewater meeting logistics with David** (date, time, video or in-person, attendees, whether Carol joins, and whether he wants a demo). Carol's 2026-08-04 email is the trigger; everything else in the Bridgewater track waits on this. Once the date is set, the 24-hour pre-meeting verification (demo URL, Vercel flags from the linked project, certified reviewer login, exact-home rehearsal) becomes the next founder task. The build work (finishing the concierge orchestrator and its tests, or running the first test home manually through super-admin + the unit importer) is a Sam-approved engineering decision, not a meeting blocker.

---

## Connected vault notes

- [[companies/openhouse-ai]] — company context
- [[project_state/oh]] — live OpenHouse operating state
- [[briefs/2026-08-04-bridgewater-meeting-preparation]] — full Bridgewater discovery brief
- [[briefs/2026-08-04-bridgewater-meeting-card]] — concise in-meeting card
- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]] — concierge first-home path
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]] — proof pack source
- [[items/oh-bridgewater-warm-introduction]] — active relationship
- [[items/oh-bridgewater-rapid-onboarding]] — active pilot item
- [[briefs/2026-07-22-six-month-agent-co-pilot-challenge]] — private six-month experiment
- [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]] — operating agreement
- [[private/learning-library/README]] — personal-intelligence doctrine and source contracts
- [[private/learning-library/source-registry]] — Substack and podcast feed registry

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-07-22-six-month-agent-co-pilot-challenge]]
- [[briefs/2026-08-04-bridgewater-meeting-card]]
- [[briefs/2026-08-04-bridgewater-meeting-preparation]]
- [[briefs/2026-08-04-openhouse-rapid-onboarding-runbook]]
- [[briefs/openhouse-longview-developer-proof-pack-2026-08-03]]
- [[companies/openhouse-ai]]
- [[context/index]]
- [[context/personal-context-data-contract]]
- [[decisions/2026-07-22-six-month-agent-co-pilot-protocol]]
- [[decisions/2026-08-10-personal-context-ledger-and-local-model-gate]]
- [[items/oh-bridgewater-rapid-onboarding]]
- [[items/oh-bridgewater-warm-introduction]]
- [[project_state/oh]]


## Three priorities for Sam on 5 August (ranked by commercial / proof value)

1. **Lock the Bridgewater meeting.** Reply to David (Carol's intro is the opener) and confirm date, time, format, attendees, and whether he wants a demo. This is the warm route to the first independent developer proof and every other Bridgewater action depends on it.
2. **Run the 24-hour pre-meeting verification now.** With the assets already ready, do a fresh login on the certified reviewer identity, confirm the demo URL returns 200, confirm which Vercel feature flags are actually active from the correctly linked project (not an unlinked checkout), and rehearse the exact-home entry, one certified question, and the developer insight flow. This protects the proof value of the live demo before the date is even set.
3. **Feed the personal-intelligence system its missing input.** Send the Substack publication list (public `https://PUBLICATION.substack.com/feed` URLs) to activate the idle connector, and let the captured Moonshots episode be curated into a processed note so the capture to teach loop actually closes. Lower commercial value than the two Bridgewater items, but quick and it is the one input blocking Outcome 1 from producing anything.

Do not start speculative concierge build work or any production Bridgewater provisioning until the meeting is booked and Sam approves the engineering path.
