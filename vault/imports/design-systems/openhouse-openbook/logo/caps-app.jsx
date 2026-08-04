function CapsBoard({ bg, width, height, children, label }) {
  return (
    <div>
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
        overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

function CapsApp() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0eee9', fontFamily: 'Inter, sans-serif', paddingBottom: 120 }}>
      <div style={{ padding: '80px 80px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(60,50,40,0.55)', marginBottom: 20,
        }}>OpenBook · Identity · Capital B variant</div>
        <h1 style={{
          fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 36, fontWeight: 400,
          color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em', lineHeight: 1.25,
          maxWidth: 900, margin: 0, paddingBottom: 16,
        }}>A capital B. Two rooms stacked. One held below.</h1>
        <div style={{ fontSize: 15, color: 'rgba(60,50,40,0.72)', lineHeight: 1.7, maxWidth: 640 }}>
          Uppercase to mirror OpenHouse. The capital B has two counters — an empty upper bowl, and a lower
          bowl that holds the single gold slot. Before, the room is open; now, it is reserved.
          Wordmark set in Inter 700 as <i>OpenBook</i> — camelCase, matching the OpenHouse wordmark.
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 80px' }}>

        {/* Mark + caption */}
        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-end', marginBottom: 100 }}>
          <CapsBoard bg={IVORY} width={560} height={560}>
            <MarkB size={340}/>
          </CapsBoard>
          <div style={{ paddingBottom: 20, maxWidth: 320 }}>
            <div style={{
              fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 22,
              color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.015em', marginBottom: 12,
            }}>The mark.</div>
            <div style={{ fontSize: 14, color: 'rgba(60,50,40,0.68)', lineHeight: 1.65 }}>
              Full-height stem, two stacked bowls. Lower bowl is 4 units wider than the upper —
              a small optical lift so the mark doesn't look bottom-heavy. The gold bar sits
              23% of the lower-bowl width, centred in its counter.
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div style={{ marginBottom: 24 }}>
          <CapsBoard bg={PAPER} width={640} height={240}>
            <WordmarkB size={96}/>
          </CapsBoard>
        </div>
        <div style={{ marginBottom: 100, maxWidth: 640, fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
          Inter 700, tracking −0.035em. Capital O, capital B — matching OpenHouse. No ornament.
        </div>

        {/* Lockup light */}
        <div style={{ marginBottom: 24 }}>
          <CapsBoard bg={IVORY} width={700} height={300}>
            <LockupB size={80}/>
          </CapsBoard>
        </div>
        <div style={{ marginBottom: 100, maxWidth: 640, fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
          Primary horizontal lockup. Mark 1.35× wordmark height, optical centre baseline alignment.
        </div>

        {/* Lockup dark */}
        <div style={{ marginBottom: 24 }}>
          <CapsBoard bg={BLACK} width={700} height={300}>
            <LockupB size={80} onDark/>
          </CapsBoard>
        </div>
        <div style={{ marginBottom: 100, maxWidth: 640, fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
          On black. The gold slot is the only chromatic element.
        </div>

        {/* App icon + small sizes */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
          <CapsBoard bg={PAPER} width={360} height={360} label="App icon">
            <div style={{
              width: 220, height: 220, borderRadius: 50, background: BLACK,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
            }}>
              <MarkBOnDark size={150}/>
            </div>
          </CapsBoard>
          <CapsBoard bg="#fff" width={340} height={360} label="Small sizes">
            <div style={{ display: 'flex', gap: 32, alignItems: 'baseline' }}>
              <MarkB size={48}/>
              <MarkB size={24}/>
              <MarkB size={16}/>
            </div>
          </CapsBoard>
        </div>
        <div style={{ marginBottom: 100, maxWidth: 640, fontSize: 13, color: 'rgba(60,50,40,0.68)', lineHeight: 1.6 }}>
          Tile icon is black; mark inverts. Favicon test: 16px still reads, though the gold bar
          approaches 2px and will pixel-fight at low DPR — so at ≤16px drop the bar and ship the
          solid B.
        </div>

        {/* Website header with lockup */}
        <div style={{ marginBottom: 24 }}>
          <CapsBoard bg="#fff" width={760} height={400} label="In situ">
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                height: 28, background: '#efebe0', display: 'flex', alignItems: 'center',
                gap: 6, paddingLeft: 12, borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e06a5e' }}/>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#e8b83c' }}/>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#5dc25a' }}/>
                <div style={{ marginLeft: 20, fontSize: 10, color: 'rgba(0,0,0,0.45)' }}>openbook.ie</div>
              </div>
              <div style={{ padding: '28px 36px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <LockupB size={20}/>
                <div style={{ display: 'flex', gap: 22, fontSize: 12, color: 'rgba(0,0,0,0.6)' }}>
                  <span>For businesses</span>
                  <span>Pricing</span>
                  <span style={{ padding: '6px 14px', background: BLACK, color: '#fff', borderRadius: 7, fontWeight: 500 }}>Sign in</span>
                </div>
              </div>
              <div style={{ flex: 1, padding: '24px 36px' }}>
                <div style={{
                  fontFamily: 'Inter', fontSize: 28, fontWeight: 600, color: BLACK,
                  letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 460,
                }}>Your booking page,<br/>live in 15 minutes.</div>
              </div>
            </div>
          </CapsBoard>
        </div>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CapsApp/>);
