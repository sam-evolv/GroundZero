---
id: ops-project-state-reconciler
company_id: ground-zero
domain: ops
title: Reconcile project_state and company memory from live signals
rationale: The daily run keeps rebuilding the same current state from PRs, issues, deployments, and recent notes, then manually patches project_state and company memory.
council_note: State sync pass · Effort M
effort: M
impact: 87
state: proposed
is_one_thing: true
source: ground-zero-ops-scan 2026-06-26
run_date: "2026-06-26"
created_at: "2026-06-26T18:02:52+01:00"
updated_at: "2026-08-15T17:30:00+01:00"
---

## What the automation does
Reads the live signals and compares them with `project_state/` and the OpenHouse company memory, then drafts a minimal update or patch for only the notes that drifted. It should preserve human review for any contradiction and keep the canonical state aligned after each sync.

## Tools and APIs
- Local filesystem access to `vault/project_state/`, `vault/companies/`, and `vault/items/`
- GitHub API for PR and issue state
- Vercel status checks
- Supabase CLI or API where credentials allow
- Optional LLM diff summarisation for deciding what changed

## Estimated setup effort
M. The main work is mapping live signals to the right note fields and making sure the diffs stay small.

## Expected time savings
15 to 25 minutes per day, plus less drift between the live systems and the vault.

## Priority ranking
P1

## Connects to

- [[items/ops-daily-sync-digest]] — daily ops digest
- [[items/ops-daily-report-pack]] — daily report pack
- [[imports/claude/openhouse-company-memory]] — OH company memory
- [[project_state/oh]], [[project_state/ob]], [[project_state/renew]] — project_state notes
- [[context/ops-automation-moc]] — MOC hub


## Incubation analysis, 18 July 2026

### Opportunity size
This has high portfolio leverage because stale state is already affecting decisions: OpenBook and Evolv have not been live-refreshed since 1 July, while OpenHouse checks are current. Better reconciliation reduces repeated research and prevents work being prioritised against old facts.

### Technical approach, risks and effort
Create a source hierarchy, compare timestamped live observations with canonical claims, and draft minimal patches with provenance. Never overwrite unresolved contradictions. Medium setup effort is justified only if the reconciler distinguishes unknown, blocked and unchanged states. The central risk is converting an unavailable check into a false statement that nothing changed.

### Market timing and recommendation
Agentic operations increase the value of reliable shared state, but correctness matters more than automation breadth. This is mature enough for a bounded internal project after Cara's P0 measurement gap. First scope should cover only project_state timestamps, GitHub facts and explicit unavailable checks.

## Material proposal, 15 August 2026 — local source-custody manifest

Extend this existing reconciler with one **read-only local Git custody slice** rather than opening another automation item.

### Bottleneck

Material work is repeatedly discovered late because local branches and worktrees are not represented by remote state and the canonical inventory is rebuilt manually. [[project_state/cara]] was corrected on 15 August only after a live worktree sweep found its parent branch plus three clean, no-upstream worktrees—one seven commits and 20 files beyond the recorded parent—that the earlier summary omitted. [[project_state/ob]] now records two clean unpublished candidates (`658e67a` and `de26b62`) while a separate renderer checkout still has an unresolved conflict. [[project_state/personal-agent]] names installed, startup-verified candidate `83e582c` as a clean local unpublished source of truth while the root checkout contains contradictory uncommitted drift. These are different product states, but they share one recurring custody problem: GitHub alone cannot show what work exists, which candidate is authoritative, or what could be lost or misreported.

### Value category

- **Risk reduction:** surfaces unpublished heads, dirty checkouts, conflicts and candidate-identity ambiguity before cleanup, machine failure or a mistaken handoff.
- **Decision quality:** separates source custody from implementation, deployment, rendered acceptance and venture activation.
- **Time reclaimed:** replaces repeated manual `worktree`, branch-containment and status reconstruction during project-state reconciliation.

### Smallest live test

Run one read-only inventory over the already named local repositories/worktrees for Aire, OpenBook and parked Cara. For each checkout record repository, worktree path, branch or detached state, exact head, clean/dirty/conflicted state, upstream, remote branches containing the head, divergence from the nominated parent/default branch, latest commit date, canonical project status and whether Ground Zero already names that candidate. Emit only a draft custody manifest and exceptions list; do not inspect secrets or source contents beyond Git metadata.

### Evidence of success

- The manifest reproduces the known Aire `83e582c`, OpenBook `658e67a` and `de26b62`, and Cara `196cf3c`, `73de73a`, `464b1ef` and `03b4d99` custody boundaries from their current project-state notes.
- It flags every no-upstream or non-remotely-contained head, the OpenBook conflict and the contradictory dirty Aire root checkout without calling any candidate deployed, accepted or active.
- It keeps Cara explicitly parked and does not turn discovered code into a reactivation signal.
- A manual spot-check of `git status`, `git worktree list`, upstream configuration and remote containment finds no omitted checkout or unsupported classification.
- A second unchanged run produces no alert, while a newly dirty or newly uncontained head produces one concise exception.

### Downside and failure mode

A broad filesystem crawler could collect irrelevant repositories, expose sensitive paths in reports or create noisy warnings for intentionally local work. Stale parent-branch assumptions could also overstate divergence. Keep the first test to repositories already named in Ground Zero, store no source bodies or secrets, distinguish intentional local-only state from unresolved risk, and treat unknown ownership or purpose as `UNKNOWN`, not urgent failure.

### Approval boundary

Automation may read local Git metadata and remote refs, compare them with named Ground Zero notes and draft a manifest. It may not commit, stash, reset, clean, delete a worktree or branch, create or change an upstream, fetch from an unapproved remote, push, open a pull request, merge, deploy, archive, reactivate a parked venture or change candidate authority. Sam approves every custody-changing action.

### What it replaces

It replaces ad hoc local-branch and worktree discovery during project-state audits. It does **not** replace backups, code review, release receipts, physical-device acceptance, [[items/ops-daily-sync-digest]] or human decisions about whether work should be preserved, published, merged or discarded.

### Provenance

Derived from the 15 August reconciliations in [[project_state/cara]], [[project_state/ob]] and [[project_state/personal-agent]], the live-source authority rule in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]], and this reconciler's existing requirement to surface contradictions without false success.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/hermes-community-use-cases-2026-07-28]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/ground-zero-canonical]]
- [[items/ops-daily-report-pack]]
- [[items/ops-daily-sync-digest]]
- [[items/ops-graph-engineering-pilot]]
- [[items/ops-weekly-status-pack]]
- [[project_state/ob]]
- [[project_state/oh]]
- [[project_state/renew]]


## Recommendation
Strong candidate because it removes the most repetitive bookkeeping after the daily status sweep. It also reduces the chance that later analyses run on stale state.
