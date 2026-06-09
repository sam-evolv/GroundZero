# Ground Zero

A premium, mobile-first command center across three companies: OpenHouse AI,
OpenBook, and renewables. It renders the daily council brief, lets you act on
each item with one tap, and shows goals and current state per company.

## Source of truth: a git-backed Obsidian vault

There is no database. The single source of truth is a git repo of markdown with
YAML frontmatter, which you also open as an Obsidian vault. Git is the bridge:
your edits in Obsidian, the council's writes, and the app's writes all converge
on one repo that you own.

The app only ever touches the vault from server routes, so no token reaches the
browser. In production each action becomes a commit, which makes the decision
history a clean audit log.

```
vault/
  companies/      one markdown file per company
  items/          the brief cards the app renders
  goals/          goals per company
  project_state/  current state per company
  briefs/         one file per council run (YYYY-MM-DD.md), holds the heartbeat
  decisions/      written when you act on an item (next milestone)
```

See `vault/README.md` for the frontmatter schema.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind v4, pnpm.
- Installable PWA: web manifest plus a basic service worker. No push yet.
- Inter for UI, Source Serif 4 for the masthead. Dark, restrained, gold accent.
- One runtime dependency beyond the framework: `gray-matter` for frontmatter.

## Local development

```bash
pnpm install
pnpm dev
```

The app reads the seed vault in `./vault` (override with `VAULT_DIR`). Edit a
markdown file there and refresh to see it update.

```bash
pnpm build       # production build
pnpm typecheck   # tsc --noEmit
pnpm lint        # eslint
```

## Architecture seams

The data layer sits behind a `VaultStore` interface (`src/lib/vault/store.ts`).
Today `getStore()` returns a `LocalVaultStore` that reads markdown from disk.

To take it live (next milestone):

1. Create a private vault repo, for example `sam-evolv/groundzero-vault`.
2. Add a `GitHubVaultStore` that reads and writes that repo via the GitHub API,
   selected when `GITHUB_VAULT_REPO` is set. See `.env.example`.
3. Add the single-user auth gate.

## Deferred (not built yet, seams left in place)

- Writing decisions and flipping item state on Approve / Reject / Snooze / Discuss.
- The edge trigger that hands an approved item to the council routine.
- The on-demand "ask the council" compose box, push notifications, and audio.
