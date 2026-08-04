// OpenBook logo — Round 3
// Match the OpenHouse formula: circle badge containing a stacked
// pictogram that doubles as a monogram. Metallic gold gradient,
// bold geometric shapes, thick strokes.
//
// OpenHouse parsed: gold ring + A-roof + H-house + arrow point.
// OpenBook mirror:  gold ring + O (the ring itself) + B/clock/slot inside.

const GOLD_TOP = '#F4D878';
const GOLD_MID = '#E9C045';
const GOLD_BOT = '#B8892E';
const GOLD_EDGE = '#6B4E1C';
const GOLD_HI = '#FFF4C2';
const BLACK = '#080808';
const IVORY = '#faf7ef';

// Reusable gold gradients (id suffixed per variant to avoid collisions)
function GoldDefs({ id }) {
  return (
    <defs>
      <linearGradient id={`g-ring-${id}`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={GOLD_HI}/>
        <stop offset="20%" stopColor={GOLD_TOP}/>
        <stop offset="55%" stopColor={GOLD_MID}/>
        <stop offset="100%" stopColor={GOLD_BOT}/>
      </linearGradient>
      <linearGradient id={`g-shape-${id}`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={GOLD_HI}/>
        <stop offset="30%" stopColor={GOLD_TOP}/>
        <stop offset="70%" stopColor={GOLD_MID}/>
        <stop offset="100%" stopColor={GOLD_BOT}/>
      </linearGradient>
      <linearGradient id={`g-bev-${id}`} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFF6CC" stopOpacity="0.9"/>
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0.15"/>
      </linearGradient>
    </defs>
  );
}

// ─────────────────────────────────────────────────────────────
// Variant I — "OB Clock"
// Gold ring = O. Inside: a bold B shape where the two lobes are
// also clock hands at 3 and 6 o'clock — the booked moment.
// ─────────────────────────────────────────────────────────────
function LogoI({ size = 400 }) {
  const id = 'I';
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <GoldDefs id={id}/>
      {/* Ring */}
      <circle cx="200" cy="200" r="180" fill={`url(#g-ring-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <circle cx="200" cy="200" r="135" fill="#fff"/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-bev-${id})`}/>
      {/* B stem */}
      <rect x="130" y="80" width="34" height="240" fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      {/* B upper lobe */}
      <path d="M164 80 H220 A55 55 0 0 1 220 190 H164 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <path d="M164 110 H210 A25 25 0 0 1 210 160 H164 Z" fill="#fff"/>
      {/* B lower lobe — extended to suggest a clock hand at 3 o'clock */}
      <path d="M164 210 H235 A55 55 0 0 1 235 320 H164 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <path d="M164 240 H222 A25 25 0 0 1 222 290 H164 Z" fill="#fff"/>
      {/* Clock pip — center of B as clock face */}
      <circle cx="147" cy="200" r="6" fill={GOLD_EDGE}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Variant II — "Booking slot badge" (recommended)
// Gold ring with inner pictogram: an O (left) and a bold bookmark /
// slot (right) that together form "OB". The slot has a notched tab
// that reads as both the second letter of "Book" AND a reserved
// calendar slot. Most legible, most on-brand.
// ─────────────────────────────────────────────────────────────
function LogoII({ size = 400 }) {
  const id = 'II';
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <GoldDefs id={id}/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-ring-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <circle cx="200" cy="200" r="140" fill="#fff"/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-bev-${id})`}/>

      {/* Left: O ring */}
      <circle cx="140" cy="200" r="58" fill="none"
        stroke={`url(#g-shape-${id})`} strokeWidth="26"/>
      <circle cx="140" cy="200" r="58" fill="none" stroke={GOLD_EDGE} strokeWidth="2" opacity="0.8"/>
      <circle cx="140" cy="200" r="44" fill="none" stroke={GOLD_EDGE} strokeWidth="1.5" opacity="0.4"/>

      {/* Right: bookmark / reserved slot tab (reads as B stem + flag) */}
      <path d="M220 120 H285 V260 L252 232 L220 260 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      {/* Notch — booking slot line inside the bookmark */}
      <rect x="232" y="155" width="42" height="10" rx="2" fill="#fff" opacity="0.9"/>
      <rect x="232" y="180" width="28" height="8" rx="2" fill="#fff" opacity="0.6"/>
      <rect x="232" y="201" width="20" height="8" rx="2" fill="#fff" opacity="0.35"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Variant III — "Open page"
// Gold ring contains a stacked book-spread pictogram. Two angled
// gold pages form an upward chevron (like OpenHouse's roof arrow),
// a horizontal gold bar below = a booked time-slot on the page.
// Same structural DNA as the OH logo.
// ─────────────────────────────────────────────────────────────
function LogoIII({ size = 400 }) {
  const id = 'III';
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <GoldDefs id={id}/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-ring-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <circle cx="200" cy="200" r="140" fill="#fff"/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-bev-${id})`}/>

      {/* Chevron — two pages meeting at a point */}
      <path d="M200 80 L280 160 L258 182 L200 130 L142 182 L120 160 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>

      {/* Book spread — two leaves */}
      <path d="M118 190 L200 165 L200 260 L118 240 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <path d="M282 190 L200 165 L200 260 L282 240 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>

      {/* Booked slot — a highlighted row inside the book */}
      <rect x="200" y="275" width="70" height="14" rx="2"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="2.5"/>
      <rect x="130" y="275" width="70" height="14" rx="2"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="2.5" opacity="0.5"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Variant IV — "Open B"
// A bold uppercase B with the vertical spine split open — the
// two lobes swing outward like an opening book. Set inside the
// gold ring. Most literal read of "open" + "book".
// ─────────────────────────────────────────────────────────────
function LogoIV({ size = 400 }) {
  const id = 'IV';
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <GoldDefs id={id}/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-ring-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <circle cx="200" cy="200" r="140" fill="#fff"/>
      <circle cx="200" cy="200" r="180" fill={`url(#g-bev-${id})`}/>

      {/* Central spine */}
      <rect x="193" y="90" width="14" height="220" fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="2.5"/>
      {/* Left lobes — swung open */}
      <path d="M193 100 L130 110 L110 200 L193 190 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <path d="M193 210 L110 200 L130 290 L193 300 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      {/* Right lobes */}
      <path d="M207 100 L270 110 L290 200 L207 190 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
      <path d="M207 210 L290 200 L270 290 L207 300 Z"
        fill={`url(#g-shape-${id})`} stroke={GOLD_EDGE} strokeWidth="3"/>
    </svg>
  );
}

Object.assign(window, {
  GOLD_TOP, GOLD_MID, GOLD_BOT, GOLD_EDGE, BLACK, IVORY,
  LogoI, LogoII, LogoIII, LogoIV,
});
