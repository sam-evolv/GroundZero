// OpenBook Caps — seven directions
// Same brand constraints: #D4AF37 gold, #080808 black, Inter wordmark.
// Each mark explores a different structural idea.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// ─── 1. The notch ──────────────────────────────────────────────
// Capital B. Gold horizontal slice exactly where the two bowls meet.
// The held moment sits on the seam.
function Dir1({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none">
      <rect x="60" y="40" width="32" height="220" fill={fg}/>
      <path d="M92 40 H180 A60 55 0 0 1 180 150 H92 Z" fill={fg}/>
      <path d="M92 72 H176 A28 28 0 0 1 176 118 H92 Z" fill={bg}/>
      <path d="M92 150 H194 A60 55 0 0 1 194 260 H92 Z" fill={fg}/>
      <path d="M92 182 H190 A28 28 0 0 1 190 228 H92 Z" fill={bg}/>
      {/* Gold notch on the seam */}
      <rect x="60" y="145" width="140" height="10" fill={accent}/>
    </svg>
  );
}

// ─── 2. OB ligature ────────────────────────────────────────────
// O and B share a spine. Single continuous glyph.
function Dir2({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 380 300" fill="none">
      {/* O */}
      <circle cx="110" cy="150" r="108" fill={fg}/>
      <circle cx="110" cy="150" r="68" fill={bg}/>
      {/* Shared stem */}
      <rect x="218" y="42" width="28" height="216" fill={fg}/>
      {/* B upper bowl */}
      <path d="M246 42 H300 A52 52 0 0 1 300 146 H246 Z" fill={fg}/>
      <path d="M246 74 H294 A22 22 0 0 1 294 114 H246 Z" fill={bg}/>
      {/* B lower bowl */}
      <path d="M246 146 H314 A56 56 0 0 1 314 258 H246 Z" fill={fg}/>
      <path d="M246 178 H306 A24 24 0 0 1 306 226 H246 Z" fill={bg}/>
      {/* Gold bar in lower counter of B only */}
      <rect x="260" y="198" width="44" height="8" fill={accent}/>
    </svg>
  );
}

// ─── 3. Keyhole B ──────────────────────────────────────────────
// Counter is a single vertical keyhole rather than two bowls.
// One continuous interior. Gold bar inside.
function Dir3({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none">
      <rect x="60" y="40" width="32" height="220" fill={fg}/>
      <path d="M92 40 H200 A70 70 0 0 1 200 180 A60 60 0 0 1 200 260 H92 Z" fill={fg}/>
      {/* Continuous keyhole counter */}
      <path d="M92 72 H190 A38 38 0 0 1 200 120 L200 180 A28 28 0 0 1 190 228 H92 Z" fill={bg}/>
      {/* Gold bar sits in the narrow waist of the keyhole */}
      <rect x="120" y="146" width="76" height="8" fill={accent}/>
    </svg>
  );
}

// ─── 4. The aperture ───────────────────────────────────────────
// O surrounds B. Concentric. The book is inside the opening.
function Dir4({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none">
      <circle cx="150" cy="150" r="130" fill={fg}/>
      <circle cx="150" cy="150" r="98" fill={bg}/>
      {/* B inside */}
      <rect x="100" y="78" width="18" height="144" fill={fg}/>
      <path d="M118 78 H168 A34 34 0 0 1 168 146 H118 Z" fill={fg}/>
      <path d="M118 94 H162 A18 18 0 0 1 162 130 H118 Z" fill={bg}/>
      <path d="M118 146 H174 A38 38 0 0 1 174 222 H118 Z" fill={fg}/>
      <path d="M118 162 H168 A22 22 0 0 1 168 206 H118 Z" fill={bg}/>
      <rect x="130" y="178" width="38" height="7" fill={accent}/>
    </svg>
  );
}

// ─── 5. Flag B ─────────────────────────────────────────────────
// Pure slab geometry. No curves. Two stacked flag-shaped rooms.
// One replaced with gold.
function Dir5({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 300 300" fill="none">
      <rect x="60" y="40" width="32" height="220" fill={fg}/>
      {/* Upper slab */}
      <path d="M92 40 H220 L240 70 L240 120 L220 150 H92 Z" fill={fg}/>
      <path d="M108 68 H212 L228 88 L228 102 L212 122 H108 Z" fill={bg}/>
      {/* Lower slab — GOLD replaces the fill */}
      <path d="M92 150 H230 L252 180 L252 230 L230 260 H92 Z" fill={fg}/>
      <path d="M108 178 H220 L240 198 L240 212 L220 232 H108 Z" fill={accent}/>
    </svg>
  );
}

// ─── 6. Serif cut ──────────────────────────────────────────────
// Display serif B. Single hairline gold cut across the lower counter.
// Editorial. Aesop-adjacent.
function Dir6({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  // We use a real serif font (Source Serif) so the shape carries
  // the typographic weight. The gold hairline is an absolute overlay.
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        fontFamily: '"Source Serif 4", "Playfair Display", Georgia, serif',
        fontWeight: 500, fontSize: size * 0.95, color: fg, lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>B</div>
      {/* Hairline gold cut across lower counter */}
      <div style={{
        position: 'absolute',
        left: size * 0.24, top: size * 0.66,
        width: size * 0.38, height: Math.max(2, size * 0.018),
        background: accent,
      }}/>
    </div>
  );
}

// ─── 7. Stacked OB ─────────────────────────────────────────────
// O above, B below. Same width. Shared vertical axis.
// Vertical monogram without the badge.
function Dir7({ size = 200, fg = BLACK, bg = IVORY, accent = GOLD }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 300" fill="none">
      {/* O */}
      <circle cx="100" cy="72" r="56" fill={fg}/>
      <circle cx="100" cy="72" r="34" fill={bg}/>
      {/* B */}
      <rect x="52" y="154" width="22" height="120" fill={fg}/>
      <path d="M74 154 H132 A36 36 0 0 1 132 212 H74 Z" fill={fg}/>
      <path d="M74 172 H126 A18 18 0 0 1 126 196 H74 Z" fill={bg}/>
      <path d="M74 212 H140 A40 40 0 0 1 140 274 H74 Z" fill={fg}/>
      <path d="M74 230 H132 A22 22 0 0 1 132 256 H74 Z" fill={bg}/>
      {/* Gold bar in lower counter */}
      <rect x="86" y="239" width="42" height="8" fill={accent}/>
    </svg>
  );
}

// Wordmark — consistent across directions.
function WM({ size = 36, color = BLACK }) {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: size, color,
      letterSpacing: '-0.035em', lineHeight: 1,
    }}>OpenBook</div>
  );
}

Object.assign(window, { Dir1, Dir2, Dir3, Dir4, Dir5, Dir6, Dir7, WM, GOLD, BLACK, IVORY, PAPER });
