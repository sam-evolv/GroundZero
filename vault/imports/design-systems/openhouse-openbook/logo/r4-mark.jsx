// OpenBook — Ive-principled logo
// One idea: the lowercase 'b' whose bowl holds a single reserved slot.
// Black letter. Gold bar. Nothing else.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// The mark. A single lowercase b, 400x400 canvas.
// The gold bar inside the empty bowl is a reserved slot in time.
function Mark({ size = 400, fg = BLACK, accent = GOLD, counterBg = IVORY }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-label="OpenBook">
      <rect x="96" y="40" width="38" height="320" fill={fg}/>
      <circle cx="232" cy="248" r="112" fill={fg}/>
      <circle cx="232" cy="248" r="74" fill={counterBg}/>
      <rect x="96" y="210" width="38" height="76" fill={fg}/>
      <rect x="188" y="244" width="88" height="8" rx="1" fill={accent}/>
    </svg>
  );
}

function MarkOnDark({ size = 400, bgFallback = BLACK }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <rect x="96" y="40" width="38" height="320" fill="#fff"/>
      <circle cx="232" cy="248" r="112" fill="#fff"/>
      <circle cx="232" cy="248" r="74" fill={bgFallback}/>
      <rect x="96" y="210" width="38" height="76" fill="#fff"/>
      <rect x="188" y="244" width="88" height="8" rx="1" fill={GOLD}/>
    </svg>
  );
}

// Wordmark — plain. No ornament. The mark carries the concept;
// the wordmark carries the name. They sit side-by-side in the lockup.
function Wordmark({ size = 64, color = BLACK }) {
  return (
    <div style={{
      display: 'inline-block', lineHeight: 1,
      fontFamily: 'Inter, sans-serif', fontWeight: 700,
      letterSpacing: '-0.045em', fontSize: size, color,
      fontFeatureSettings: '"cv11", "ss01", "ss02"',
    }}>
      openbook
    </div>
  );
}

function WordmarkOnDark({ size = 64 }) {
  return <Wordmark size={size} color="#fff"/>;
}

// Horizontal lockup — mark + wordmark, optically aligned.
function Lockup({ size = 88, onDark = false, bg }) {
  const markSize = size * 1.3;
  const counterBg = bg || (onDark ? BLACK : IVORY);
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: size * 0.28,
    }}>
      {onDark
        ? <MarkOnDark size={markSize} bgFallback={counterBg}/>
        : <Mark size={markSize} counterBg={counterBg}/>}
      <Wordmark size={size} color={onDark ? '#fff' : BLACK}/>
    </div>
  );
}

Object.assign(window, { Mark, MarkOnDark, Wordmark, WordmarkOnDark, Lockup, GOLD, BLACK, IVORY, PAPER });
