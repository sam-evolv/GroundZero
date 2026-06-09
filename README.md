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

## Data layer

Reads and writes go through the `VaultStore` interface (`src/lib/vault/store.ts`).
`getStore()` returns a `LocalVaultStore` (reads and writes `./vault`) in
development, and a `GitHubVaultStore` (reads and writes the vault repo over the
GitHub API, server side only) when `GITHUB_VAULT_REPO` and a token are set. The
vault lives in `/vault` in this repo.

## Auth

A single-user passcode gate runs in `src/proxy.ts` with a `/login` page. Set
`AUTH_PASSCODE` and `AUTH_SECRET` to turn it on. Unset means open, for local dev.

## Deploy

On Vercel, set these environment variables (server only, never `NEXT_PUBLIC`):

- `GITHUB_VAULT_REPO=sam-evolv/GroundZero`
- `GITHUB_VAULT_BRANCH` the branch the vault lives on
- `GITHUB_VAULT_TOKEN` a fine-grained PAT with contents read and write on the repo
- `AUTH_PASSCODE` and `AUTH_SECRET`

Each action commits to the vault, so consider a Vercel Ignored Build Step that
skips redeploys when only `vault/**` changed.

## Deferred (seams left in place)

- The trigger that hands an approved item to the council routine, in
  `src/app/actions.ts`.
- Sending a discuss note back to the council.
- True cross-device realtime. Today writes are optimistic and revalidate per request.
- The on-demand "ask the council" compose box, push notifications, and audio.
