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

## Cross-repo context

Ground Zero is the command centre. The actual product code lives in separate repos:

- **OpenHouse AI**: `sam-evolv/property-assistant` (Next.js + Supabase + Vercel)
  - Local path: `/Users/samdonworth/Documents/property-assistant`
  - Supabase: `mddxbilpjukwskeefakz`
  - Vercel: `prj_okAOLGbRgbTKEvbl1RgD4UsRdZX2`
- **OpenBook**: `sam-evolv/openbook` (if exists)
- **Evolv Renewables**: repo TBD

When the Hermes council approves an item that requires code changes, the execution agent (TODO in `src/app/actions.ts`) should delegate to Claude Code in the relevant repo.

## Vault usage protocol

At the start of a task, read:

1. `GROUND_ZERO.md`
2. `vault/context/index.md`
3. `vault/context/model-pack.md`
4. the relevant `people/`, `companies/`, and `project_state/` notes

At the end of a task, write back:

- progress to the relevant `project_state/` note
- decisions to `decisions/`
- durable facts to `companies/` or `people/`
- temporary material to `capture/inbox.md`

## Hermes cron integration

Ground Zero has its own built-in Hermes council (in `src/lib/hermes/`) that runs via Vercel cron. Additionally, Sam runs external Hermes cron jobs that sync with this vault:

- **Daily Briefing** (7:00 AM): Reads vault, checks GitHub/Vercel/Supabase, briefs Sam via Telegram
- **Project Status Sync** (every 4h): Checks live systems, updates vault project_state files
- **Idea Incubator** (12:00 PM): Researches and expands vault items
- **Automation Scan** (6:00 PM): Finds workflow automation opportunities
- **Leo Weekly** (Monday 9:00 AM): Market opportunity scan

These crons write to the same vault that this app reads from. The vault is the single source of truth across all agents and tools.
