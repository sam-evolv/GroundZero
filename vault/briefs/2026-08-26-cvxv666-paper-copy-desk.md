---
type: brief
status: monitoring
date: 2026-08-26
tags:
  - paper-trading
  - simulation
  - solana
  - wallet-research
source: local simulator and public Solana chain data
---

# CVXV666 simulation-only copy desk

## Boundary

This is an isolated paper copy book tagged `source=cvxv666-copy`. It mirrors publicly observable activity from Solana wallet `36B1FfW4kweo3xZsTqHBrxz9oV3M8brYRWDo9x4VsR7e` for research only. It has no signing, order submission, broker, wallet-control or real-money surface. The attached token receives no watchlist, entry, promotional or trust treatment.

## Assignment snapshot

The 26 August handoff reported 971 processed source transactions, 781 copied fills, 124 source failures, 26 refused or unmatched rows and 369 matched sell slices. It reported a 29.0% matched-slice win rate, cumulative paper P&L of approximately `-2.920 SOL` / `-$282.94`, and a `-30.68%` return on starting native capital versus `-0.72%` for buy-and-hold SOL and `0.00%` for the inactive same-period main desk.

The win rate is not a conventional completed-trade win rate: it counts matched sell slices. A delayed real copy would probably be worse after latency and slippage, but that remains an inference rather than an observed fill result.

## Fresh verification — 2026-08-26 10:12 IST

Observed from `python3 paperdesk.py cvxv666-copy-status`:

- 781 copied fills, 124 source failures, 26 refused/unmatched rows and 369 closed matched sell slices.
- Matched-slice win rate: `28.9973%`.
- Realized P&L: `-1.977582221 SOL`.
- Unrealized P&L: `-0.980548359 SOL`.
- Cumulative marked paper P&L: `-2.958130580 SOL` / `-$286.55`.
- Return on starting capital: `-31.07%`.
- SOL buy-and-hold benchmark: `-0.748%`.
- Same-period main desk benchmark: `0.00%`.
- Starting capital immediately before the first copied fill: `9.448871028 SOL`.
- External non-trading inflow: `10.11978117 SOL`.
- Public wallet balance: approximately `33.981925959 SOL`.
- All reported copy-book state remains `simulation_only: true`.

The difference from the assignment snapshot reflects a later mark, not a contradiction or repaired historical result.

## Edge assessment

Observed evidence does not support edge. The copy book has materially underperformed both SOL and the inactive same-period main desk. No strategy adoption, capital allocation or promotion follows from this monitor.

The wallet's balance rise toward 34 SOL is not trading-profit evidence because the public chain shows the approximately 10.120 SOL non-trading inflow after launch. Funding flows and trading P&L must remain separate.

## Truthfulness and source hierarchy

Chain data is authoritative for fills. At the latest observation, the public site still said `Paper mode` and `Live size = 0`, while the tape API returned HTTP 500. The site can substitute generated demo rows when its tape fails, so those rows are not treated as trades.

Off-chain vetoes, refusals and nightly rule changes are not independently recoverable from chain data. Any non-zero live-size declaration is an alert condition, not authorization to copy or trade. Telegram material is excluded.

## Operations

- `CVXV666 Copy Desk Cycle` runs every five minutes in simulation-only mode.
- `CVXV666 Copy Desk Digest Gate` checks nightly but is silent until the first 48-hour digest gate on 27 August at 23:30 IST; later reports are weekly.
- The older duplicate wallet watcher is paused.
- Full local verification: `102 passed` on 26 August.

The main volatile-assets desk remains a separate book. Its meme scan, exit review, pipeline report and watchdog were active because Sam had authorized the documented `today-v1` controlled restart on 25 August; the deterministic three-consecutive-loss gate subsequently kept the scan in `exit_only` mode while those jobs remained enabled by design. They were re-paused conservatively during this handoff review while the book was flat. No scheduler bypass or unknown re-enable source was found. A future entry-lane restart should remain blocked pending Sam's approval of a deterministic main-book risk-off gate enforced inside the entry path. The CVXV666 monitor remains active because it is isolated, read-only and simulation-only.

## Missing evidence

- No independent recovery of the operator's off-chain veto/refusal decisions.
- No trustworthy tape while the site's API returns HTTP 500.
- No proof that the operator is trading live; current public copy says the opposite.
- No latency/slippage-adjusted delayed-copy replay yet.

## Connected vault notes

- [[briefs/2026-08-23-hermes-paper-trading-bot-desk]] — parent simulation-desk decision and safety boundary
- [[context/index]] — canonical shared-context entry point
- [[context/model-pack]] — compact portfolio context

## First 48-hour digest — 2026-08-27 23:30 IST

Fresh isolated-copy status reported 1,135 copied fills, 152 source failures, 56 refused/unmatched rows and 530 matched sell slices. The matched-slice win rate was `25.0943%`. Marked paper P&L was `-6.3257053899 SOL` / `-$691.15`, with reported return `-74.94%` versus SOL buy-and-hold `+11.95%` and the main desk `-0.0055%` over the same window. P&L was incomplete because 29 open mints could not be priced, so these figures are not a final-loss estimate. Edge is not established.

Finalized public-chain evidence confirms the tracked wallet was deliberately swept rather than merely returning an unknown balance. At `2026-08-26T19:45:02Z`, wallet-signed transaction `2GdqEv7dmr7WGYudAhtMpN5rNKPR8LUHVJj9jfKRYKoZLDUfiNv3NAiW47TJy9UsSci7rHsmMFGKwn54Fzk5ctqk` transferred `34.180975434 SOL` to `6HQs94U7wSQUd1udJgTezPRoKi8GNwSgYaRDv7QsYfhJ`, leaving the tracked source wallet at zero. The funds later moved through `8JpCzSd5NNcY8gahDzVdiVZJHQLYs2r7JSjd6vSdrJRW` and onward to `iGdFcQoyR2MwbXMHQskhmNsqddZ6rinsipHc4TNSdwu`. This is a funding path only, not an identity, ownership, exchange-deposit or intent claim.

The public site still declared paper mode and live size zero; the tape API still returned HTTP 500. The five-minute monitor had a real observability gap: it alerted large inflows but not large outflows, and its truthiness check suppressed exact-zero balance alerts. The digest surfaced the event. A zero/large-outflow alert and explicit external-outflow ledger field should be added before reusing this monitor pattern.

## Notes that link here
_Auto-generated: updated by wiki-refiner_
- [[briefs/2026-08-23-hermes-paper-trading-bot-desk]]
- [[context/index]]
- [[context/model-pack]]

