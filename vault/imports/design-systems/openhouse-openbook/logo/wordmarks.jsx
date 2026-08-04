// Wordmarks — one per direction, tuned to its mark
// All use Inter (system default via CSS); custom kerning per direction

function WM({ children, weight = 600, tracking = '-0.03em', size = 36, color = BLACK, serif = false, style = {} }) {
  return (
    <div style={{
      fontFamily: serif ? '"Source Serif 4", Georgia, serif' : 'Inter, sans-serif',
      fontWeight: weight,
      letterSpacing: tracking,
      fontSize: size,
      color,
      lineHeight: 1,
      fontFeatureSettings: '"cv11", "ss01"',
      ...style,
    }}>{children}</div>
  );
}

// D1 — "openbook" all lowercase, tight geometric
function WordmarkBook({ size = 36, color = BLACK }) {
  return <WM size={size} color={color} weight={600} tracking="-0.035em">openbook</WM>;
}

// D2 — "OpenBook" camelCase, sharp
function WordmarkOB({ size = 36, color = BLACK }) {
  return <WM size={size} color={color} weight={600} tracking="-0.03em">OpenBook</WM>;
}

// D3 — "openbook" with a monospace undertone (caption layer)
function WordmarkSlot({ size = 36, color = BLACK }) {
  return <WM size={size} color={color} weight={500} tracking="-0.02em">openbook</WM>;
}

// D4 — Serif editorial, "Openbook"
function WordmarkSerif({ size = 36, color = BLACK }) {
  return <WM serif size={size} color={color} weight={500} tracking="-0.015em">Openbook</WM>;
}

// D5 — "OPEN BOOK" allcaps, wide tracking
function WordmarkThreshold({ size = 22, color = BLACK }) {
  return <WM size={size} color={color} weight={600} tracking="0.22em">OPEN&nbsp;BOOK</WM>;
}

// D6 — "openbook" with a mid-weight humanist tone
function WordmarkSignal({ size = 36, color = BLACK }) {
  return <WM size={size} color={color} weight={500} tracking="-0.025em">openbook</WM>;
}

Object.assign(window, {
  WM,
  WordmarkBook, WordmarkOB, WordmarkSlot, WordmarkSerif, WordmarkThreshold, WordmarkSignal,
});
