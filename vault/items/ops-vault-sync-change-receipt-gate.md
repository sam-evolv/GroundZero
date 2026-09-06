---
id: ops-vault-sync-change-receipt-gate
company_id: ground-zero
domain: ops
title: Gate Ground Zero sync with a reviewed change-set receipt
rationale: Recurring vault writers are accumulating a mixed dirty worktree, while the current sync script can stage and push paths outside the vault without a bounded review manifest.
priority: P1
effort: S
state: proposed
is_one_thing: true
source: Ground Zero evidence-backed automation scan 2026-08-27
created_at: "2026-08-27T18:02:00+01:00"
updated_at: "2026-08-27T18:02:00+01:00"
---

# Gate Ground Zero sync with a reviewed change-set receipt

## Material proposal, 27 August 2026 — change-set receipt before sync

Add a **read-only change-set receipt and explicit scope gate** before any Ground Zero pull, stage, commit or push. This is a review layer for the existing git-backed vault, not another writer or an automatic sync job.

### Bottleneck

At 18:02 IST on 27 August, the live Ground Zero worktree had 84 status entries and was one local commit ahead of `origin/claude/gallant-tesla-YJu9m`. The tracked diff alone spanned 69 files with 769 insertions and 29 deletions, while additional untracked notes and nested repositories were present. The active Hermes job table showed the wiki refiner running daily and the canonical project-state reconciler running every four hours, but no active vault-sync job. Local canonical changes therefore accumulate until a manual sync decision is made.

The current `scripts/sync-vault.sh` path performs `git pull`, runs the wiki refiner, then executes `git add -A`, commits and pushes. A read-only dry run from the script's `vault/` working directory showed that its stage set would include `repos/DavidHowardGolf` and the embedded repository `worktrees/openhouse-myhome-status-overlap/` alongside vault notes. The dry run emitted Git's embedded-repository warning. This proves the stage boundary is the outer repository, not a vault-only manifest, and means an ordinary sync can commingle recurring note updates, unrelated repository pointers and an embedded worktree before an outward push.

This is distinct from [[items/ops-source-to-wiki-ingest]], which governs source-routing precision before canonical note writes, and [[items/ops-project-state-reconciler]], which governs live-system evidence entering project state. This proposal governs the final custody boundary from a locally modified canonical repository to a reviewed Git commit and remote push.

### Value category

- **Data and source-custody risk reduction:** prevents unrelated nested repositories, worktree pointers or unknown files from entering a vault-sync commit.
- **Canonical availability:** makes accumulated local Ground Zero changes visible and reviewable without silently treating the remote as current.
- **Founder time reclaimed:** replaces repeated manual reconstruction of a large mixed `git status` and diff before each safe sync.
- **Auditability:** creates an exact receipt for what was proposed, excluded, approved and eventually synced without conflating a successful push with validated note content.

### Smallest live test

Run one read-only receipt generator against the current Ground Zero worktree. It must not fetch, pull, stage, commit or push. The receipt should:

1. pin the current `HEAD`, tracking ref and local ahead/behind state as observed without refreshing remotes;
2. enumerate every tracked modification, untracked path, nested-repository or submodule-pointer change;
3. classify each entry as `VAULT_NOTE`, `APPROVED_VAULT_ARTIFACT`, `OUTSIDE_VAULT`, `NESTED_REPOSITORY` or `UNKNOWN`;
4. compare the proposed vault-only allowlist with the read-only `git -C vault add -A -n` candidate set and fail closed if the latter contains any outside-vault, nested-repository or unknown path;
5. group the remaining vault changes into a draft commit manifest with source/provenance when supported, while leaving unsupported writer attribution as `UNKNOWN`;
6. output `READY_FOR_REVIEW`, `HOLD` or `UNKNOWN`, plus an exact exclusion list; and
7. produce a byte-identical receipt on a second run when the worktree is unchanged.

The test ends at the receipt. It does not invoke `scripts/sync-vault.sh` or mutate the index.

### Evidence of success

- The receipt reproduces the observed one-commit local lead and all 84 status entries without reading file contents outside the approved vault scope.
- It flags `repos/DavidHowardGolf` and `worktrees/openhouse-myhome-status-overlap/` as outside the vault sync boundary and returns `HOLD` for the unfiltered `git add -A` candidate.
- Every path proposed for a future vault commit is listed explicitly; no nested repository, submodule pointer, secret-bearing environment file or `UNKNOWN` path is silently included.
- A manual comparison with `git status --short`, `git diff --stat` and `git -C vault add -A -n` finds no omitted or misclassified entry.
- An unchanged second run is byte-identical and creates no notification; a changed path, branch head or tracking ref changes the receipt fingerprint.
- Sam can review the bounded manifest without re-reading the full mixed worktree, while the remote remains untouched until he approves the exact sync set.

### Downside and failure mode

A path-only gate can misattribute who or what created a valid note, and concurrent cron writes can make a receipt stale before review. Overly strict exclusions can also leave related backlinks or index changes out of the same commit, while a permanently held queue would leave the canonical remote stale. Freeze the manifest to an exact worktree fingerprint, mark attribution separately from path safety, re-run immediately before any approved stage, keep linked vault changes together, and return `UNKNOWN` rather than guessing when a nested repository or concurrent write changes the candidate.

### Approval boundary

Automation may read Git metadata, approved vault paths, diff metadata and the read-only stage candidate; classify paths; compute a local receipt; and draft an exact proposed commit manifest. It may not fetch, pull, stage, commit, push, reset, stash, clean, remove files, alter submodules or embedded repositories, rewrite history, run the refiner, or change a cron job. Sam must approve the exact included paths, commit action and remote push. Any later execution must re-read the worktree and fail closed if the fingerprint has changed.

### What it replaces

It replaces the ad hoc manual reconstruction of a mixed Ground Zero worktree and the blind all-tree staging step in the current sync path. It does **not** replace [[items/ops-source-to-wiki-ingest]], [[items/ops-project-state-reconciler]], the wiki refiner, backups, note review, human conflict resolution or Sam's approval of commits and pushes.

### Provenance

Grounded in the live Ground Zero Git status, diff statistics, dry-run stage set and active Hermes cron inventory observed at 18:02 IST on 27 August 2026; the current `scripts/sync-vault.sh` implementation; the canonical authority and bounded-write rules in [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]; and the existing writer workflows in [[context/llm-wiki-pattern]], [[items/ops-source-to-wiki-ingest]] and [[items/ops-project-state-reconciler]]. No sync, stage, commit, push or production mutation was performed during this scan.

## Connected vault notes

- [[context/ops-automation-moc]] — operations automation hub
- [[items/_Index]] — portfolio item queue
- [[items/ops-source-to-wiki-ingest]] — precision gate for source-to-note routing
- [[items/ops-project-state-reconciler]] — live evidence to canonical project-state path
- [[context/llm-wiki-pattern]] — current recurring refiner and sync-hook pattern
- [[context/review-workflow]] — review cadence and evidence boundary
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]] — canonical authority and bounded-write decision

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[context/llm-wiki-pattern]]
- [[context/ops-automation-moc]]
- [[context/review-workflow]]
- [[decisions/2026-08-13-ground-zero-authority-over-hermes-memory]]
- [[items/ops-project-state-reconciler]]
- [[items/ops-source-to-wiki-ingest]]

