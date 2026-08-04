// OpenBook — capital B variant
// Concept: uppercase B, two stacked bowls. The LOWER bowl is the
// reserved room; a single gold bar sits held inside it. Upper bowl
// is clean — it reads as "before" and "after" the moment.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// The mark — a capital B on a 400-unit grid.
// Stem runs full height. Two bowls on the right. Lower bowl holds bar.
function MarkB({ size = 400, fg = BLACK, accent = GOLD, counterBg = IVORY }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-label="OpenBook">
      {/* Stem */}
      <rect x="88" y="56" width="42" height="288" fill={fg}/>
      {/* Upper bowl — outer */}
      <path d="M130 56 H238 A72 72 0 0 1 238 200 H130 Z" fill={fg}/>
      {/* Upper counter */}
      <path d="M130 92 H232 A36 36 0 0 1 232 164 H130 Z" fill={counterBg}/>
      {/* Lower bowl — outer, slightly larger */}
      <path d="M130 200 H256 A72 72 0 0 1 256 344 H130 Z" fill={fg}/>
      {/* Lower counter */}
      <path d="M130 236 H250 A36 36 0 0 1 250 308 H130 Z" fill={counterBg}/>
      {/* Reserved slot — inside the lower counter */}
      <rect x="156" y="268" width="92" height="8" rx="1" fill={accent}/>
    </svg>
  );
}

function MarkBOnDark({ size = 400, bgFallback = BLACK }) {
  return <MarkB size={size} fg="#fff" counterBg={bgFallback}/>;
}

// Wordmark — camelCase, matches OpenHouse.
function WordmarkB({ size = 64, color = BLACK }) {
  return (
    <div style={{
      display: 'inline-block', lineHeight: 1,
      fontFamily: 'Inter, sans-serif', fontWeight: 700,
      letterSpacing: '-0.035em', fontSize: size, color,
    }}>
      OpenBook
    </div>
  );
}

function WordmarkBOnDark({ size = 64 }) {
  return <WordmarkB size={size} color="#fff"/>;
}

function LockupB({ size = 80, onDark = false }) {
  const markSize = size * 1.35;
  const counterBg = onDark ? BLACK : IVORY;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3 }}>
      {onDark
        ? <MarkBOnDark size={markSize} bgFallback={counterBg}/>
        : <MarkB size={markSize} counterBg={counterBg}/>}
      <WordmarkB size={size} color={onDark ? '#fff' : BLACK}/>
    </div>
  );
}

Object.assign(window, { MarkB, MarkBOnDark, WordmarkB, WordmarkBOnDark, LockupB, GOLD, BLACK, IVORY, PAPER });
