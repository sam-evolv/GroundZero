function R3Board({ width, height, bg = IVORY, label, children }) {
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
      }}>{children}</div>
    </div>
  );
}

function R3Row({ id, title, rationale, Logo }) {
  return (
    <div style={{ marginBottom: 110 }}>
      <div style={{ padding: '0 0 28px', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', maxWidth: 1400 }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: '#8B6428',
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>Variant {id}</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em' }}>{title}</div>
        <div style={{ flexBasis: '100%', height: 0 }}/>
        <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.7)', maxWidth: 820, lineHeight: 1.6 }}>{rationale}</div>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        {/* Hero — big gold on ivory */}
        <R3Board width={340} height={340} bg={IVORY} label="Primary">
          <Logo size={260}/>
        </R3Board>

        {/* On black — where this logo sings */}
        <R3Board width={340} height={340} bg={BLACK} label="On black">
          <Logo size={260}/>
        </R3Board>

        {/* Lockup with wordmark */}
        <R3Board width={420} height={340} bg={IVORY} label="Horizontal lockup">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Logo size={120}/>
            <div style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 44,
              letterSpacing: '-0.035em', color: BLACK, lineHeight: 1,
            }}>OpenBook</div>
          </div>
        </R3Board>

        {/* App icon */}
        <R3Board width={240} height={340} bg="#f0eee9" label="App icon">
          <div style={{
            width: 200, height: 200, borderRadius: 45, background: BLACK,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 14px 36px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
            position: 'relative', overflow: 'hidden',
          }}>
            <Logo size={150}/>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 45,
              background: 'linear-gradient(155deg, rgba(255,255,255,0.15), transparent 55%)',
            }}/>
          </div>
        </R3Board>

        {/* Small sizes */}
        <R3Board width={220} height={340} bg="#fff" label="Small sizes">
          <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            <Logo size={52}/>
            <Logo size={28}/>
            <Logo size={18}/>
          </div>
        </R3Board>
      </div>
    </div>
  );
}

function App() {
  const dirs = [
    { id: 'I', title: 'OB Clock', Logo: LogoI,
      rationale: 'Gold ring as the O. A bold B inside where the lower lobe extends outward like a clock hand — the booked moment. Closest to OpenHouse\'s stacked-pictogram formula: ring + monogram + functional glyph.' },
    { id: 'II', title: 'Booking slot badge', Logo: LogoII,
      rationale: 'Ring + O (left) + bookmark flag (right) with a reserved-slot notch. The bookmark reads as a B stem and as a literal booking — three reads in one shape. My pick for OpenBook.' },
    { id: 'III', title: 'Open page + roof', Logo: LogoIII,
      rationale: 'The OpenHouse sibling: a stacked chevron sits above an open book spread, with a booked row highlighted below. Same visual grammar as OH — upward arrow + structure + base slot.' },
    { id: 'IV', title: 'Open B', Logo: LogoIV,
      rationale: 'A bold capital B with the spine split and lobes swung outward like an opening book. Most literal "open" + "book" read. Symmetrical, fills the ring.' },
  ];
  return (
    <DesignCanvas>
      <div style={{ padding: '20px 60px 48px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: 'rgba(60,50,40,0.5)',
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10,
        }}>OpenBook · Logo exploration · Round 3 (OpenHouse sibling)</div>
        <div style={{
          fontSize: 32, fontWeight: 600, color: 'rgba(20,15,10,0.92)',
          letterSpacing: '-0.02em', marginBottom: 10, maxWidth: 960,
        }}>Circle badge. Stacked pictogram. Metallic gold.</div>
        <div style={{ fontSize: 14, color: 'rgba(60,50,40,0.75)', maxWidth: 820, lineHeight: 1.6 }}>
          Matching the OpenHouse formula: a bold geometric monogram that reads as a pictogram,
          contained inside a gold ring, rendered with the same metallic gradient and dark outline.
          Four variants, each tested big, on black, locked up, as an app icon, and at small sizes.
        </div>
      </div>
      <div style={{ padding: '0 60px' }}>
        {dirs.map(d => <R3Row key={d.id} {...d}/>)}
      </div>
      <DCPostIt top={28} right={60} width={240} rotate={-3}>
        My pick: <b>Variant II</b> (booking slot badge) — the bookmark is the only element that reads as <i>booking</i> unambiguously. III is the direct sibling to OpenHouse.
      </DCPostIt>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
