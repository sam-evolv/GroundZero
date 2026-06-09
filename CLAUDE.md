@AGENTS.md

# Ground Zero

Mobile-first command center across three companies: OpenHouse AI, OpenBook, and
a renewables company. Renders the daily council brief and lets Sam act on each
item, plus a goals and state view per company.

## Architecture

- The single source of truth is a git-backed Obsidian vault of markdown with
  YAML frontmatter. There is no database. We deliberately did not use Supabase:
  a new project would cost money on the OpenHouse org, and the vault doubles as
  Sam's owned funnel and single source of truth across tools.
- Reads go through the `VaultStore` interface (`src/lib/vault/store.ts`).
  `LocalVaultStore` reads `./vault` in development. A `GitHubVaultStore` for the
  real private vault repo, plus a single-user auth gate and the write path for
  actions, are the next milestone. Seams are marked with TODOs.
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind v4, pnpm. Minimal
  dependencies; hand-built components, no UI kit. Only extra runtime dep is
  `gray-matter`.

## Conventions

- No em dashes anywhere, in UI copy or code comments.
- Dark, restrained design. Gold `#D4AF37` is the only accent. Tokens live in
  `src/app/globals.css`.
- Keep the app runnable at every commit. Verify with `pnpm typecheck`,
  `pnpm lint`, `pnpm build`.

## Vault schema

See `vault/README.md`.
