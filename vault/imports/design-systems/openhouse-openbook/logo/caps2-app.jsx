// Caps round 2 — seven directions on one canvas
// For each: mark on ivory, mark on black, wordmark lockup, small-size row.

function Caps2Row({ n, title, rationale, Dir }) {
  return (
    <div style={{ marginBottom: 88, breakInside: 'avoid' }}>
      <div style={{ padding: '0 0 24px', display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', maxWidth: 1400 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#8B6428', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          {n}
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em' }}>
          {title}
        </div>
        <div style={{ flexBasis: '100%', height: 0 }}/>
        <div style={{ fontSize: 13, color: 'rgba(60,50,40,0.7)', maxWidth: 760, lineHeight: 1.6 }}>{rationale}</div>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Cell bg={IVORY} w={300} h={300}>
          <Dir size={220}/>
        </Cell>
        <Cell bg={BLACK} w={300} h={300}>
          <Dir size={220} fg="#fff" bg={BLACK}/>
        </Cell>
        <Cell bg={IVORY} w={420} h={300}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <Dir size={100}/>
            <WM size={40}/>
          </div>
        </Cell>
        <Cell bg="#fff" w={260} h={300} label="Small sizes">
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Dir size={56}/>
            <Dir size={32}/>
            <Dir size={20}/>
          </div>
        </Cell>
        <Cell bg={PAPER} w={240} h={300} label="App icon">
          <div style={{
            width: 180, height: 180, borderRadius: 42, background: BLACK,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 14px 36px rgba(0,0,0,0.22)',
          }}>
            <Dir size={128} fg="#fff" bg={BLACK}/>
          </div>
        </Cell>
      </div>
    </div>
  );
}

function Cell({ bg, w, h, children, label }) {
  return (
    <div>
      {label && (
        <div style={{
          fontSize: 10, fontWeight: 500, color: 'rgba(60,50,40,0.55)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10,
        }}>{label}</div>
      )}
      <div style={{
        width: w, height: h, background: bg, borderRadius: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

function Caps2App() {
  const dirs = [
    { n: '01', title: 'The notch',
      Dir: Dir1,
      rationale: 'Capital B with a precise horizontal gold slice exactly where the upper and lower bowls meet. The held moment sits on the seam between before and after. Closest to Ramp/Linear restraint — one gesture, unmistakable.' },
    { n: '02', title: 'OB ligature',
      Dir: Dir2,
      rationale: 'O and B fuse — a single continuous glyph where they share a vertical axis. No gap. Reads as a mono-mark even at favicon sizes. Technical, typographic.' },
    { n: '03', title: 'Keyhole B',
      Dir: Dir3,
      rationale: 'Instead of two bowls, the counter is one continuous keyhole. Gold bar sits in the narrow waist. Reads as unlocking + holding. Most distinctive silhouette.' },
    { n: '04', title: 'The aperture',
      Dir: Dir4,
      rationale: 'O becomes the ring and B sits concentrically inside it. The booking happens inside the opening. Strongest as a standalone mark; closest to a classic badge without being one.' },
    { n: '05', title: 'Flag B',
      Dir: Dir5,
      rationale: 'Pure slab geometry — no curves. Two stacked flag-shaped rooms; the lower is replaced with solid gold. Architectural. Reads as ‘this slot is yours’.' },
    { n: '06', title: 'Serif cut',
      Dir: Dir6,
      rationale: 'A display-serif B with a single gold hairline drawn across the lower counter. Editorial, Aesop-adjacent. The most ‘hospitality premium’ of the set — feels like a restaurant, not a SaaS.' },
    { n: '07', title: 'Stacked OB',
      Dir: Dir7,
      rationale: 'O above, B below, same width, one vertical axis. A vertical monogram without a badge. Sings as a square app icon; the mark-only use is unambiguous.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f0eee9', fontFamily: 'Inter, sans-serif', paddingBottom: 120 }}>
      <div style={{ padding: '80px 80px 60px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(60,50,40,0.55)', marginBottom: 20,
        }}>OpenBook · Capital B · Seven directions</div>
        <h1 style={{
          fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 36, fontWeight: 400,
          color: 'rgba(20,15,10,0.92)', letterSpacing: '-0.02em', lineHeight: 1.25,
          maxWidth: 900, margin: 0, paddingBottom: 16,
        }}>Seven structural ideas for a capital-B mark.</h1>
        <div style={{ fontSize: 15, color: 'rgba(60,50,40,0.72)', lineHeight: 1.7, maxWidth: 700 }}>
          Same constraints throughout: black letter, single gold accent, Inter wordmark. Each
          direction proposes a different structural idea — not a decorative variation.
          Look at them as marks first; the wordmark rides alongside.
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 80px' }}>
        {dirs.map(d => <Caps2Row key={d.n} {...d}/>)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Caps2App/>);
