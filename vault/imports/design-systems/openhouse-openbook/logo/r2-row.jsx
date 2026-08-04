// R2 — in-situ mocks + direction rows

function R2Board({ width, height, bg = IVORY, label, children, grid = false }) {
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
          ? 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)'
          : undefined,
        backgroundSize: grid ? '16px 16px' : undefined,
      }}>{children}</div>
    </div>
  );
}

// Browser-chrome mock showing the lockup as a site header
function R2HeaderMock({ Wordmark, bg = '#fff' }) {
  return (
    <div style={{ width: 420, height: 220, background: bg, position: 'relative' }}>
      {/* faux browser chrome */}
      <div style={{
        height: 32, background: '#eae6dc', display: 'flex', alignItems: 'center',
        gap: 6, paddingLeft: 10, borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e06a5e' }}/>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e8b83c' }}/>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#5dc25a' }}/>
        <div style={{
          marginLeft: 16, fontSize: 10, color: 'rgba(0,0,0,0.5)',
          fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em',
        }}>openbook.ie</div>
      </div>
      {/* header */}
      <div style={{
        padding: '22px 28px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ transform: 'scale(0.55)', transformOrigin: 'left center' }}>
          <Wordmark size={44} color={BLACK}/>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 11, fontFamily: 'Inter', color: 'rgba(0,0,0,0.6)' }}>
          <span>For businesses</span>
          <span>Pricing</span>
          <span>Sign in</span>
          <span style={{
            padding: '4px 10px', background: BLACK, color: '#fff',
            borderRadius: 5, fontWeight: 500,
          }}>Get started</span>
        </div>
      </div>
      {/* body hint */}
      <div style={{ padding: '8px 28px' }}>
        <div style={{
          fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: BLACK,
          letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: 340,
        }}>Your booking page, live in 15 minutes.</div>
      </div>
    </div>
  );
}

function R2AppIcon({ Mark, bg }) {
  return (
    <div style={{
      width: 180, height: 180, borderRadius: 40,
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 14px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.1)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 40,
        background: 'linear-gradient(155deg, rgba(255,255,255,0.2), transparent 55%)',
      }}/>
      <Mark size={110} gold={GOLD} dark={bg === BLACK ? '#fff' : BLACK}/>
    </div>
  );
}

function R2Row({ dir }) {
  const { id, title, rationale, Mark, Wordmark, appBg, headerBg = '#fff', lockupGap = 18, wordSize = 42 } = dir;

  return (
    <div style={{ marginBottom: 120 }}>
      <div style={{ padding: '0 0 32px', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', maxWidth: 1400 }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: GOLD_DARK_LABEL,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>{id}</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em' }}>{title}</div>
        <div style={{ flexBasis: '100%', height: 0 }}/>
        <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.65)', maxWidth: 760, lineHeight: 1.55 }}>{rationale}</div>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        {/* Primary — the wordmark, big, on warm paper */}
        <R2Board width={520} height={240} bg={PAPER} label="Primary wordmark">
          <Wordmark size={wordSize + 8} color={BLACK}/>
        </R2Board>

        {/* Mark alone */}
        <R2Board width={200} height={240} bg="#fff" label="Mark" grid>
          <Mark size={110} gold={GOLD} dark={BLACK}/>
        </R2Board>

        {/* On dark */}
        <R2Board width={380} height={240} bg={BLACK} label="On dark">
          <Wordmark size={wordSize} color="#fff"/>
        </R2Board>

        {/* App icon */}
        <R2Board width={240} height={240} bg="#f0eee9" label="App icon">
          <R2AppIcon Mark={Mark} bg={appBg}/>
        </R2Board>

        {/* In-situ: website header */}
        <R2Board width={420} height={240} bg="#fff" label="Website header" padded={false}>
          <R2HeaderMock Wordmark={Wordmark} bg={headerBg}/>
        </R2Board>

        {/* Favicon sizes */}
        <R2Board width={200} height={240} bg="#fff" label="Small sizes">
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            <Mark size={40} gold={GOLD} dark={BLACK}/>
            <Mark size={20} gold={GOLD} dark={BLACK}/>
            <Mark size={14} gold={GOLD} dark={BLACK}/>
          </div>
        </R2Board>
      </div>
    </div>
  );
}

const GOLD_DARK_LABEL = '#8B6428';
Object.assign(window, { R2Row, R2Board });
