# Ground Zero

The Git-backed Obsidian vault in this repo is the shared database for Claude Code, Hermes, and the app.

## Session start

Read these in order:

1. `vault/context/index.md`
2. `vault/context/model-pack.md`
3. `vault/people/sam-donworth.md`
4. `vault/companies/openhouse-ai.md`
5. `vault/companies/openbook.md`
6. `vault/companies/evolv-renewables.md`
7. `vault/project_state/oh.md`
8. `vault/project_state/ob.md`
9. `vault/project_state/renew.md`

Then follow the links for the task at hand.

## Session end

Write durable updates back to the vault:

- progress into the relevant `project_state/` note
- decisions into `decisions/`
- tactical work into `items/`
- lasting context into `companies/`, `people/`, or `goals/`
- temporary scraps into `capture/inbox.md`

## Rules

- Treat the vault as the source of truth
- Do not re-litigate decisions already written down
- Do not propose parked ideas again
- Do not store secrets in the vault
- Keep the repo moving, not just the notes
- No em dashes in copy or comments

## Vault schema

See `vault/README.md` for the YAML frontmatter format.

## Claude app and Claude Desktop

Claude app and Claude Desktop both use the same Ground Zero vault through the
`ground-zero-vault` MCP server.

- Server config points at `/Users/samdonworth/GroundZero`
- The vault is the `vault/` folder in this repo
- Read `vault/context/index.md` first when you need shared context
- Write progress, decisions, and durable facts back into the vault
- Treat this repo as the source of truth, not the local mirror vault

If Claude cannot see the vault, restart the app or Desktop after checking the MCP
config.