// R4 presentation — one logo, four moments.
// No variants, no grid, no "pick one of these". Proposed with conviction.

function Board({ bg, children, label, width, height, padded = true }) {
  return (
    <div style={{ position: 'relative' }}>
      {label && (
        <div style={{
          fontSize: 11, fontWeight: 500, color: 'rgba(60,50,40,0.55)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12,
        }}>{label}</div>
      )}
      <div style={{
        width, height, background: bg, borderRadius: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
        overflow: 'hidden', position: 'relative',
      }}>{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <div style={{
      padding: '80px 80px 100px', maxWidth: 1200, margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr', rowGap: 32,
    }}>
      <div style={{
        fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(60,50,40,0.55)',
      }}>OpenBook · Identity</div>
      <h1 style={{
        fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 36, fontWeight: 400,
        color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em', lineHeight: 1.25,
        maxWidth: 900, margin: 0, textWrap: 'balance', display: 'block',
        paddingBottom: 8,
      }}>A lowercase b. An empty bowl. One gold bar held inside.</h1>
      <div style={{
        fontFamily: 'Inter', fontSize: 15, color: 'rgba(60,50,40,0.72)',
        lineHeight: 1.7, maxWidth: 640,
      }}>
        The bar is a reserved slot in time. When you book, a space is held.
        That is the entire product, drawn once. No badge, no container, no gradient.
        The wordmark is plain — Inter, unornamented. Meaning lives in the mark;
        the name lives in the word. They sit side by side in the lockup.
      </div>
    </div>
  );
}

function Moment1() {
  // The mark, large, on ivory. Just the object.
  return (
    <Board bg={IVORY} width={640} height={640}>
      <Mark size={360}/>
    </Board>
  );
}

function Moment2() {
  // The wordmark, clean.
  return (
    <Board bg={PAPER} width={640} height={260}>
      <Wordmark size={96}/>
    </Board>
  );
}

function Lockup_Light() {
  return (
    <Board bg={IVORY} width={640} height={320}>
      <Lockup size={80}/>
    </Board>
  );
}

function Lockup_Dark() {
  return (
    <Board bg={BLACK} width={640} height={320}>
      <Lockup size={80} onDark/>
    </Board>
  );
}

function Moment4() {
  // App icon on an iPhone-ish home-screen tile.
  return (
    <Board bg={PAPER} width={400} height={400}>
      <div style={{
        width: 220, height: 220, borderRadius: 50, background: BLACK,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
        position: 'relative', overflow: 'hidden',
      }}>
        <MarkOnDark size={150}/>
      </div>
    </Board>
  );
}

function Moment5() {
  // Favicon row — 48 / 24 / 16 — proof it survives.
  return (
    <Board bg="#fff" width={400} height={400}>
      <div style={{ display: 'flex', gap: 36, alignItems: 'baseline' }}>
        <Mark size={48}/>
        <Mark size={24}/>
        <Mark size={16}/>
      </div>
    </Board>
  );
}

function Moment6() {
  // Website header — how it actually lives.
  return (
    <Board bg="#fff" width={640} height={400} padded={false}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          height: 28, background: '#efebe0', display: 'flex', alignItems: 'center',
          gap: 6, paddingLeft: 12, borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e06a5e' }}/>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e8b83c' }}/>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#5dc25a' }}/>
          <div style={{
            marginLeft: 20, fontSize: 10, color: 'rgba(0,0,0,0.45)',
            fontFamily: 'Inter',
          }}>openbook.ie</div>
        </div>
        <div style={{
          padding: '28px 36px 20px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Lockup size={20}/>
          <div style={{
            display: 'flex', gap: 22, fontSize: 12,
            fontFamily: 'Inter', color: 'rgba(0,0,0,0.6)',
          }}>
            <span>For businesses</span>
            <span>Pricing</span>
            <span style={{
              padding: '6px 14px', background: BLACK, color: '#fff',
              borderRadius: 7, fontWeight: 500,
            }}>Sign in</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: '24px 36px' }}>
          <div style={{
            fontFamily: 'Inter', fontSize: 28, fontWeight: 600, color: BLACK,
            letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 460,
          }}>Your booking page,<br/>live in 15 minutes.</div>
        </div>
      </div>
    </Board>
  );
}

function App() {
  return (
    <div style={{
      minHeight: '100vh', background: '#f0eee9', fontFamily: 'Inter, sans-serif',
      paddingBottom: 120,
    }}>
      <Hero/>

      {/* Single column, vertical rhythm. Each moment gets breathing room. */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }}>

        {/* 1. The mark, alone */}
        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-end', marginBottom: 120 }}>
          <Moment1/>
          <div style={{ paddingBottom: 20, maxWidth: 320 }}>
            <div style={{
              fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 22, fontWeight: 400,
              color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.015em', marginBottom: 12,
            }}>The mark.</div>
            <div style={{ fontSize: 14, color: 'rgba(60,50,40,0.68)', lineHeight: 1.65 }}>
              Stem and bowl on a 400-unit grid. The counter is an empty room; a single gold bar —
              22% of the bowl width — is the only thing held inside. That bar is the entire identity.
            </div>
          </div>
        </div>

        {/* 2. Wordmark */}
        <div style={{ marginBottom: 32 }}><Moment2/></div>
        <div style={{ marginBottom: 120, maxWidth: 640 }}>
          <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
            Inter 700, tracking −0.045em, all-lowercase. No ornament. The wordmark carries the name;
            the mark carries the concept. They live beside each other.
          </div>
        </div>

        {/* 3. Lockup on light */}
        <div style={{ marginBottom: 32 }}><Lockup_Light/></div>
        <div style={{ marginBottom: 120, maxWidth: 640 }}>
          <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
            The primary lockup. Mark set 1.3× wordmark height, gap 0.28× — tuned so the b of the
            wordmark echoes the b of the mark without competing with it.
          </div>
        </div>

        {/* 4. Lockup on dark */}
        <div style={{ marginBottom: 32 }}><Lockup_Dark/></div>
        <div style={{ marginBottom: 120, maxWidth: 640 }}>
          <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
            On black the b inverts; the gold bar holds. Default for OpenBook Business dashboard.
          </div>
        </div>

        {/* 4. App icon + 5. Small sizes — paired row */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
          <Moment4/>
          <Moment5/>
        </div>
        <div style={{ marginBottom: 120, maxWidth: 640 }}>
          <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
            App icon: black tile, mark centred, nothing else. At 16px the gold bar is still visible
            against the counter — the silhouette test passes.
          </div>
        </div>

        {/* 6. Website header */}
        <div style={{ marginBottom: 32 }}><Moment6/></div>
        <div style={{ maxWidth: 640 }}>
          <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
            In situ. The lockup at 20px — mark + wordmark — sets the tone without overpowering
            the nav. The mark's gold bar is the only coloured pixel in the whole header.
          </div>
        </div>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
