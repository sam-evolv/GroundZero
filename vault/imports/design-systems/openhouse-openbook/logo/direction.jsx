// Lockup — a single direction's set of artboards:
// Mark · Lockup (mark + wordmark) · App icon · Dark variant · Favicon test
//
// Each direction has:
//   { id, title, tagline, Mark, Wordmark, appIconBg, appIconFg }
//
// Rendered in a vertical column so 6 directions stack naturally.

function ArtRow({ children, label }) {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {children}
    </div>
  );
}

function Board({ width, height, bg = IVORY, label, children, padded = true, grid = false, cornerHint }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {label && (
        <div style={{
          position: 'absolute', bottom: '100%', left: 0, paddingBottom: 8,
          fontSize: 11, fontWeight: 500, color: 'rgba(60,50,40,0.65)',
          letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>{label}</div>
      )}
      <div style={{
        width, height, background: bg, borderRadius: 4,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        backgroundImage: grid
          ? `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)`
          : undefined,
        backgroundSize: grid ? '16px 16px' : undefined,
      }}>
        {children}
        {cornerHint && (
          <div style={{
            position: 'absolute', bottom: 10, right: 12,
            fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.35)',
            letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>{cornerHint}</div>
        )}
      </div>
    </div>
  );
}

function AppIcon({ size = 220, bg, children, radius }) {
  const r = radius ?? size * 0.225;
  return (
    <div style={{
      width: size, height: size, borderRadius: r,
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* iOS-style highlight */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: r,
        background: 'linear-gradient(155deg, rgba(255,255,255,0.18), transparent 50%)',
        pointerEvents: 'none',
      }}/>
      {children}
    </div>
  );
}

function DirectionRow({ dir }) {
  const { id, title, tagline, Mark, Wordmark, lockupGap = 20, markSize = 72, wordSize = 44, appBg, appMarkTone = 'lightOnDark' } = dir;

  return (
    <div style={{ marginBottom: 110 }}>
      {/* Title */}
      <div style={{ padding: '0 0 28px', display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: 'rgba(60,50,40,0.45)',
          letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>{id}</div>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'rgba(40,30,20,0.9)', letterSpacing: '-0.02em' }}>
          {title}
        </div>
        <div style={{ fontSize: 14, color: 'rgba(60,50,40,0.6)', maxWidth: 520 }}>{tagline}</div>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        {/* Mark alone */}
        <Board width={220} height={220} bg="#fff" label="Mark" grid>
          <Mark size={128} gold={GOLD} dark={BLACK}/>
        </Board>

        {/* Horizontal lockup on light */}
        <Board width={420} height={220} bg={IVORY} label="Horizontal lockup">
          <div style={{ display: 'flex', alignItems: 'center', gap: lockupGap }}>
            <Mark size={markSize} gold={GOLD} dark={BLACK}/>
            <Wordmark size={wordSize} color={BLACK}/>
          </div>
        </Board>

        {/* Dark variant */}
        <Board width={420} height={220} bg={BLACK} label="On dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: lockupGap }}>
            <Mark size={markSize} gold={GOLD} dark="#fff"/>
            <Wordmark size={wordSize} color="#fff"/>
          </div>
        </Board>

        {/* App icon */}
        <Board width={260} height={260} bg="#f0eee9" label="App icon" padded={false}>
          <AppIcon size={200} bg={appBg}>
            <Mark size={120}
              gold={appMarkTone === 'goldOnDark' ? GOLD : appMarkTone === 'blackOnGold' ? BLACK : GOLD}
              dark={appMarkTone === 'goldOnDark' ? '#fff' : appMarkTone === 'blackOnGold' ? BLACK : '#fff'}/>
          </AppIcon>
        </Board>

        {/* Favicon test row — 48 / 24 / 16 */}
        <Board width={260} height={220} bg="#fff" label="Small sizes">
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Mark size={48} gold={GOLD} dark={BLACK}/>
            <Mark size={24} gold={GOLD} dark={BLACK}/>
            <Mark size={16} gold={GOLD} dark={BLACK}/>
          </div>
        </Board>
      </div>
    </div>
  );
}

Object.assign(window, { DirectionRow, Board, AppIcon });
