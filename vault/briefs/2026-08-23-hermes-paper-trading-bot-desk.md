---
type: brief
status: active
date: 2026-08-23
tags:
  - hermes
  - bot-mode
  - simulation
  - paper-trading
source: https://x.com/ridark_eth/status/2091588150103589286
---

# Hermes paper-trading Bot desk

## Decision

Sam approved a simulation-only first version of the eight-agent crypto desk pattern shown in the source post. Real exchange, wallet, broker, DEX, MT4 and authenticated-order execution remain explicitly out of scope. This is an experiment and not a claim that simulated returns predict real returns.

## Implemented

Eight Hermes profiles were created as Desktop Bot identities:

- `desk-head` — Head of Desk
- `desk-search` — Signal Search
- `desk-risk` — Risk Audit
- `desk-sniper` — Sniper (Paper)
- `desk-whale` — Whale Watch
- `desk-rug` — Rug Watch
- `desk-exit` — Exit Manager (Paper)
- `desk-social` — Social Momentum

Each has a role-specific SOUL, a canonical pinned `Bot Chat`, the local paper-desk project as its working directory, and hardened tool configuration. Browser/computer control, delegation, cron mutation and Prime Agent are disabled across the desk. The MT4 demo MCP is disabled for every desk profile; TradingView is also disabled for the two execution-role profiles.

A deterministic local simulator supports only BTC-USD, ETH-USD and SOL-USD public Coinbase spot quotes. It starts with $100,000 paper cash and enforces a $2,000 per-position cap, $10,000 total exposure cap and five-position cap. Entry/exit execution requires `desk-head` and the exact short-lived `PAPER APPROVE <request-id>` phrase. Receipts must contain `simulation: true`, `broker_order_id: null` and `tx_hash: null`.

## Verified

- Simulator unit suite: 7/7 passing.
- Complete $100 BTC-USD paper lifecycle exercised: staged, approved, opened, closed and returned to zero open positions / zero exposure.
- Both open and close receipts carried simulation-only markers and null broker/transaction identifiers.
- All eight profile safety audits passed (titles, workspace, role wording, disabled tools and MCP restrictions).
- Canonical Bot-to-Bot `message_agent` delivery and asynchronous replies were exercised successfully with Risk and Rug.
- Hermes live profile roster reports all eight profiles.

## Paused routines

Two recurring routines exist under `desk-head` and are deliberately paused:

- Simulation Desk Scan — every 30 minutes.
- Simulation Exit Review — every four hours.

The `desk-head` gateway is currently stopped, so these routines cannot fire even if resumed until that profile's gateway service is enabled.

## Open gaps

- Hermes Desktop's native window was present, but computer-use returned a zero-size capture. The backend roster is verified; the roster has not been visually verified on the user-facing Desktop surface in this setup session.
- No Desktop group room was created. Head-of-Desk coordination is verified via canonical one-to-one Bot DMs. The Desktop room limit is six Bots, so the full eight-agent desk would need two rooms if group chat is desired.
- No routine is active, and no real-trading connector exists.

## Connected vault notes

- [[briefs/2026-08-26-cvxv666-paper-copy-desk]] — isolated public-wallet copy-book monitor, evidence and no-edge finding
- [[context/index]] — canonical shared-context entry point

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-26-cvxv666-paper-copy-desk]]
- [[context/index]]

