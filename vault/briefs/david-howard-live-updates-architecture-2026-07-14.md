---
title: David Howard Golf — minute-level live updates architecture
created: 2026-07-14
status: proposed
source: live-site inspection
---

# David Howard Golf — minute-level live updates architecture

## Current implementation verified

The deployed site at `https://www.davidhowardgolf.ie` already has a well-designed Championship-week layer:

- a top-page live strip injected into the countdown area;
- `live.json` manual override data;
- `week.json` for tee times, pairings, daily notes, images and video links;
- a `live.js` browser poll every 60 seconds in a visible tab, 120 seconds in a background tab;
- an ESPN PGA leaderboard fallback during the tournament window;
- direct links to The Open live scoring and David’s official Open player page.

## Critical gaps to close before claiming “live on the minute”

1. `live.json` currently has `active: false` and contains no source, timestamp, source freshness, round or update identity.
2. `week.json` is loaded once only. Daily editorial updates do not appear until a visitor refreshes the page.
3. The browser polls a generic ESPN PGA endpoint. It is not tied to The Open event identifier or an official licensed feed. It must not be the canonical source for David’s score.
4. There is no visible `last verified` time, no stale-data state, no update history, no alert if the feed stops, and no safe manual correction path.
5. Static JSON refresh is client-led. A site visitor cannot cause the upstream source to update; that needs server-side polling/ingestion.

## Definition of “live on the minute”

The realistic contract should be:

> During David’s rounds, the site will reflect a newly available **verified source update within 60 seconds**. Every displayed score has a visible verification timestamp and a direct link to the official Open leaderboard.

No system can promise a score before the official feed publishes it. The site must never make up a more-current state than its source.

## Source hierarchy

1. **Primary:** a permitted/contracted official Open score feed or official data endpoint whose use is approved for this purpose.
2. **Manual verified override:** a trusted operator checks the official leaderboard and publishes a correction or contextual note.
3. **Fallback:** retain the last verified data, show its timestamp and direct users to The Open. Do not silently switch to a generic ESPN feed.

## Data contract

```json
{
  "schemaVersion": 1,
  "active": true,
  "state": "on_course",
  "round": 1,
  "score": "-1",
  "position": "T23",
  "thru": "12",
  "today": "-1",
  "rounds": ["71"],
  "leader": "-5",
  "source": "official-open",
  "sourceUrl": "https://www.theopen.com/leaderboard",
  "sourceUpdatedAt": "2026-07-16T12:22:00Z",
  "checkedAt": "2026-07-16T12:22:18Z",
  "publishedAt": "2026-07-16T12:22:18Z",
  "note": "Two birdies in the first six."
}
```

Every state change must also be append-only in an `updates` list: no silent overwrite of history.

## Reliable architecture

```text
Verified tournament data source
          ↓ (poll each 60 seconds, server-side)
Scheduled worker / serverless function
          ↓ validates player + normalises + records freshness
Durable live-state store + append-only update history
          ↓
/api/live (no-store, ETag) → browser polls every 15 seconds when visible
                           → every 60 seconds when background
          ↓
Top-page live card + live timeline + stale/error state
```

### Hosting choice

- If the existing Vercel team/plan supports minute cron jobs, use a Vercel Cron function with a schedule of every minute.
- If it does not, run the one-minute ingestion worker in Cloudflare Workers and keep the existing Vercel site as the presentation layer.
- The website itself should never call a third-party score provider directly. This removes CORS/brittleness, keeps the source hidden, and lets the app make a deliberate stale-data decision.

## Product upgrades

### 1. Replace the hidden/temporary live strip with a permanent founder-quality live card

At the very top of the page during play:

```text
● LIVE — ROUND 1 · ROYAL BIRKDALE
−1          T23          THROUGH 12
TODAY −1    LEADER −5
Verified 12:22 Irish time · Official leaderboard ↗
```

On round completion:

```text
ROUND 1 COMPLETE
71 (−1) · T23
Next: Round 2 · Friday 15:48
```

### 2. Add a concise live timeline

Show the last 3–5 verified updates only:

- `12:22 — Through 12 at −1`
- `11:54 — Birdie at the 8th`
- `10:42 — Started Round 1 from the 1st tee`

This makes the site feel lived-in without pretending it is broadcast commentary.

### 3. Make freshness visible

- green: verified in the last two minutes;
- amber: checked but no fresh source update in over two minutes while the round is live;
- grey: round complete or score feed unavailable;
- always offer the official leaderboard link.

### 4. Make `week.json` live too

Poll it every 60 seconds and render a `last updated` marker. It should show actual status: `Ahead`, `Live now`, `Complete`, or `Cut missed` — never leave an old state on screen.

## Operations: how every update stays current

1. **Automation** checks the approved score source every 60 seconds during David’s tee-to-finish window.
2. It writes only when a score/position/through value changes.
3. It creates an alert to a private operator Telegram chat when:
   - the source is unavailable for two consecutive checks;
   - the source is stale for more than two minutes during play;
   - David’s name cannot be found;
   - the live state differs from a manual override.
4. A trusted operator can send one structured update from a phone for a verified correction or a short editorial note.
5. The page transparently shows source + time; it never displays a false “LIVE” label on stale data.

## Immediate changes to the current code

- Remove the generic ESPN fallback from `live.js` as canonical scoring.
- Add `updatedAt`, `checkedAt`, `source`, `sourceUrl`, `round`, `state` and `version` fields.
- Poll `/api/live` and `/api/week` with no-store semantics; do not rely on static file refresh alone.
- Add stale/error states and an accessible `aria-live="polite"` score announcement.
- Add the short timeline and explicit round-complete/next-tee state.

## Deployment gate

The public site is Vercel production deployment `dpl_E7UMBxKrMDo5awvpPwg1UmQZPpSW` under `openhouseais-projects`. The source repository was not present in the inspected local workspace, so do not edit/deploy until the source location and intended data-source permission are confirmed.
