// OpenBook logo exploration — 6 directions
// Each direction: Mark (standalone) · Horizontal lockup · App icon · Dark variant
//
// Palette (non-negotiable):
//   gold  #D4AF37
//   black #080808
//   ivory #faf7ef (warm light bg)
//
// The target bar: apple.com, stripe.com, linear.app, vercel.com

const GOLD = '#D4AF37';
const GOLD_DARK = '#8B6428';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const GRID = 'rgba(0,0,0,0.04)';

// ─────────────────────────────────────────────────────────────
// D1 — "Open book" geometric. The literal metaphor, done right:
// two folded pages making a gold slab + black slab.
// ─────────────────────────────────────────────────────────────
function MarkBook({ size = 96, gold = GOLD, dark = BLACK }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* left page (gold) */}
      <path d="M14 24 L46 18 L46 78 L14 72 Z" fill={gold}/>
      {/* right page (black) */}
      <path d="M50 18 L82 24 L82 72 L50 78 Z" fill={dark}/>
      {/* spine gap preserved by the 4px channel */}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// D2 — Monogram "OB" ligature. Two concentric capsules, the O
// becoming the B's belly. Geometric, Linear-esque.
// ─────────────────────────────────────────────────────────────
function MarkOBCapsule({ size = 96, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      {/* O ring */}
      <circle cx="34" cy="48" r="22" stroke={dark} strokeWidth="10" fill="none"/>
      {/* B right lobe as stacked half-capsules */}
      <path
        d="M52 26 L62 26 A18 13 0 0 1 62 52 L52 52 Z"
        fill={gold}/>
      <path
        d="M52 44 L62 44 A18 13 0 0 1 62 70 L52 70 Z"
        fill={dark}/>
      {/* B vertical stem */}
      <rect x="48" y="26" width="6" height="44" fill={dark}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// D3 — Calendar slot / bookmark. A single notched rectangle — the
// moment you're booking. Pure geometry, no literal book.
// ─────────────────────────────────────────────────────────────
function MarkSlot({ size = 96, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <rect x="16" y="16" width="64" height="64" rx="14" fill={dark}/>
      {/* notched gold slot */}
      <rect x="28" y="32" width="40" height="10" rx="3" fill={gold}/>
      <rect x="28" y="48" width="28" height="6" rx="2" fill={gold} opacity="0.5"/>
      <rect x="28" y="60" width="18" height="6" rx="2" fill={gold} opacity="0.28"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// D4 — Monogrammed "O". A single serif-weighted O with a gold
// bookmark tab tucked inside. Editorial, Source-Serif-adjacent.
// ─────────────────────────────────────────────────────────────
function MarkSerifO({ size = 96, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      {/* serif O, built as two ellipses */}
      <ellipse cx="48" cy="48" rx="34" ry="32" fill={dark}/>
      <ellipse cx="48" cy="48" rx="18" ry="18" fill={IVORY}/>
      {/* gold bookmark tab */}
      <path d="M58 20 L70 20 L70 42 L64 38 L58 42 Z" fill={gold}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// D5 — Threshold / open door. Two parallel verticals, one gold
// one black, with a gap of light between. Reads as "open".
// Abstract; the most Vercel/Linear-feeling.
// ─────────────────────────────────────────────────────────────
function MarkThreshold({ size = 96, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      {/* left bar */}
      <rect x="18" y="14" width="18" height="68" rx="3" fill={dark}/>
      {/* right bar */}
      <rect x="60" y="14" width="18" height="68" rx="3" fill={gold}/>
      {/* lintel */}
      <rect x="18" y="14" width="60" height="8" rx="3" fill={dark}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// D6 — "Signal O". A circle with a single gold tick mark at the
// 2 o'clock — reads as a confirmation / booking complete / active
// status. AI-native, restrained.
// ─────────────────────────────────────────────────────────────
function MarkSignal({ size = 96, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <circle cx="48" cy="48" r="30" stroke={dark} strokeWidth="10" fill="none"/>
      {/* gold tick / slot at 2 o'clock */}
      <rect x="68" y="20" width="10" height="10" rx="2" fill={gold}
        transform="rotate(30 73 25)"/>
      <circle cx="48" cy="48" r="6" fill={dark}/>
    </svg>
  );
}

Object.assign(window, {
  GOLD, GOLD_DARK, BLACK, IVORY,
  MarkBook, MarkOBCapsule, MarkSlot, MarkSerifO, MarkThreshold, MarkSignal,
});
