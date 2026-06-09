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
- Reads and writes go through the `VaultStore` interface
  (`src/lib/vault/store.ts`). `LocalVaultStore` uses `./vault` in development; a
  `GitHubVaultStore` reads and writes the vault repo over the GitHub API when
  `GITHUB_VAULT_REPO` and a token are set. The vault lives in `/vault` in this
  same repo (sam-evolv/GroundZero). One-tap actions and a single-user passcode
  gate are built.
- Hermes is the agent office in `src/lib/hermes/`: a council of domain agents
  (design, innovation, security, bizdev, automation) plus a chief of staff. It
  reads the vault, proposes and ranks grounded moves, and writes items plus the
  daily brief back to the vault. Run it via the in-app control or `POST
  /api/hermes/run`. Live with `ANTHROPIC_API_KEY` (model `claude-opus-4-8`,
  adaptive thinking), dry run without it. The remaining seam is the execution
  agent on approve, a TODO in `src/app/actions.ts`.
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
