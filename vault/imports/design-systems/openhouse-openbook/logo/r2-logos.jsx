// OpenBook logo — Round 2
// Wordmark-led. Each direction is ~90% typography, 10% glyph.
// The glyph always references "a booked moment" — a reserved slot in time.
//
// Palette: #D4AF37 gold · #080808 black · #faf7ef ivory (warm, Irish)

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f5f0e3';

// ─────────────────────────────────────────────────────────────
// R2-A — "The reserved moment"
// Wordmark: openbook, Inter, custom-tuned (o's tighter, 'book' slightly
//   wider for balance, crossbar raised on 'e' to match o height).
// Glyph: a single gold segment set into the baseline — a reserved
//   slot. Reads as a confidence bar / progress marker / booking mark.
// ─────────────────────────────────────────────────────────────
function LogoA_Mark({ size = 72, gold = GOLD, dark = BLACK }) {
  // Just the glyph: the reserved-slot mark extracted.
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="28" stroke={dark} strokeWidth="3" fill="none"/>
      <rect x="32" y="14" width="22" height="5" rx="1" fill={gold}/>
    </svg>
  );
}
function LogoA_Wordmark({ size = 44, color = BLACK, accent = GOLD }) {
  // Wordmark is the whole thing; glyph lives as an underbar under the 'o' of book.
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: size,
      letterSpacing: '-0.045em', color, lineHeight: 1,
      fontFeatureSettings: '"cv11", "ss01", "ss02"',
      display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: size * 0.1,
    }}>
      <span>openbook</span>
      <span style={{
        width: size * 0.62, height: size * 0.06, background: accent,
        marginLeft: size * 2.2, // underbar sits under 'book'
        borderRadius: 1,
      }}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// R2-B — "Reservation colon"
// Wordmark: open:book — the colon as time (9:30) doubles as the
// booking gesture. Geometric, Stripe-adjacent. The colon dots are
// gold; the rest is black.
// ─────────────────────────────────────────────────────────────
function LogoB_Mark({ size = 72, gold = GOLD, dark = BLACK }) {
  // Mark-only uses the colon dots stacked with a faint baseline.
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="26" r="5" fill={gold}/>
      <circle cx="36" cy="46" r="5" fill={gold}/>
      <rect x="16" y="58" width="40" height="3" rx="1.5" fill={dark}/>
    </svg>
  );
}
function LogoB_Wordmark({ size = 44, color = BLACK, accent = GOLD }) {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: size,
      letterSpacing: '-0.04em', color, lineHeight: 1, display: 'inline-flex',
      alignItems: 'baseline', fontFeatureSettings: '"cv11", "ss01"',
    }}>
      <span>open</span>
      <span style={{
        display: 'inline-flex', flexDirection: 'column', justifyContent: 'center',
        gap: size * 0.14, margin: `0 ${size * 0.08}px`, alignSelf: 'center',
      }}>
        <span style={{ width: size * 0.15, height: size * 0.15, borderRadius: '50%', background: accent }}/>
        <span style={{ width: size * 0.15, height: size * 0.15, borderRadius: '50%', background: accent }}/>
      </span>
      <span>book</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// R2-C — "Seal"
// Editorial wordmark in Source Serif 4 (Openbook, title case) with
// a small gold seal mark to the left. Irish-premium, hospitality.
// The seal is a filled circle with a single notch (wax stamp).
// ─────────────────────────────────────────────────────────────
function LogoC_Mark({ size = 72, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="26" fill={gold}/>
      {/* wax notch — a triangular cut at the right edge */}
      <path d="M62 30 L72 36 L62 42 Z" fill={gold}/>
      {/* debossed serif 'O' inside */}
      <circle cx="36" cy="36" r="12" fill="none" stroke={dark} strokeWidth="2.5" opacity="0.85"/>
    </svg>
  );
}
function LogoC_Wordmark({ size = 44, color = BLACK }) {
  return (
    <div style={{
      fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 500, fontSize: size,
      letterSpacing: '-0.02em', color, lineHeight: 1,
      fontFeatureSettings: '"liga", "dlig"',
    }}>Openbook</div>
  );
}

// ─────────────────────────────────────────────────────────────
// R2-D — "Bracketed"
// Wordmark: [openbook] — square brackets as the container, a
// reserved slot around the word. Linear/Arc energy, developer-leaning.
// Brackets are gold, weight-matched to the Inter Medium wordmark.
// ─────────────────────────────────────────────────────────────
function LogoD_Mark({ size = 72, gold = GOLD, dark = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <path d="M22 14 L14 14 L14 58 L22 58" stroke={gold} strokeWidth="4" strokeLinecap="square" fill="none"/>
      <path d="M50 14 L58 14 L58 58 L50 58" stroke={gold} strokeWidth="4" strokeLinecap="square" fill="none"/>
      <circle cx="36" cy="36" r="5" fill={dark}/>
    </svg>
  );
}
function LogoD_Wordmark({ size = 44, color = BLACK, accent = GOLD }) {
  const bracketW = size * 0.05;
  const bracketArm = size * 0.18;
  const padX = size * 0.18;
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: size,
      letterSpacing: '-0.035em', color, lineHeight: 1,
      display: 'inline-flex', alignItems: 'stretch', gap: padX,
      fontFeatureSettings: '"cv11", "ss01"',
    }}>
      <span style={{
        display: 'inline-block', width: bracketArm,
        borderLeft: `${bracketW}px solid ${accent}`,
        borderTop: `${bracketW}px solid ${accent}`,
        borderBottom: `${bracketW}px solid ${accent}`,
        height: size * 1.05,
      }}/>
      <span style={{ padding: `${size * 0.02}px 0` }}>openbook</span>
      <span style={{
        display: 'inline-block', width: bracketArm,
        borderRight: `${bracketW}px solid ${accent}`,
        borderTop: `${bracketW}px solid ${accent}`,
        borderBottom: `${bracketW}px solid ${accent}`,
        height: size * 1.05,
      }}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// R2-E — "Hold"
// Pure wordmark. "openbook" in Inter with the counter of the first
// 'o' filled in gold — a booked slot inside the letterform itself.
// Most Aesop/Ramp/Muji — restrained, type-forward, no separate mark.
// ─────────────────────────────────────────────────────────────
function LogoE_Mark({ size = 72, gold = GOLD, dark = BLACK }) {
  // An 'o' with its counter filled — the whole identity in 72x72.
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <circle cx="36" cy="36" r="22" stroke={dark} strokeWidth="8" fill="none"/>
      <circle cx="36" cy="36" r="10" fill={gold}/>
    </svg>
  );
}
function LogoE_Wordmark({ size = 44, color = BLACK, accent = GOLD }) {
  // Render 'openbook' with a gold-filled o (first o). Using SVG text
  // for precise control, with an overlaid gold dot sized to the o counter.
  return (
    <div style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
      <div style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: size,
        letterSpacing: '-0.045em', color, lineHeight: 1,
        fontFeatureSettings: '"cv11", "ss01", "ss02"',
      }}>
        <span>o</span>
        <span>penb</span>
        <span>o</span>
        <span>ok</span>
      </div>
      {/* gold counter overlay on the first 'o' */}
      <div style={{
        position: 'absolute',
        left: size * 0.115,
        top: size * 0.45,
        width: size * 0.17, height: size * 0.17,
        borderRadius: '50%', background: accent,
      }}/>
    </div>
  );
}

Object.assign(window, {
  GOLD, BLACK, IVORY, PAPER,
  LogoA_Mark, LogoA_Wordmark,
  LogoB_Mark, LogoB_Wordmark,
  LogoC_Mark, LogoC_Wordmark,
  LogoD_Mark, LogoD_Wordmark,
  LogoE_Mark, LogoE_Wordmark,
});
