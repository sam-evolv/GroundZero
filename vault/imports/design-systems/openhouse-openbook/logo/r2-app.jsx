// R2 app entry

const r2Directions = [
  {
    id: 'A',
    title: 'The reserved moment',
    rationale: 'Takes D3\'s \"booked slot\" and moves it from a calendar-app container to a pure typographic gesture. A gold underbar under \"book\" — a time slot reserved. The wordmark carries the brand; the mark is a stripped-down circle + slot for favicons only.',
    Mark: LogoA_Mark, Wordmark: LogoA_Wordmark,
    appBg: BLACK, wordSize: 42,
  },
  {
    id: 'B',
    title: 'Reservation colon',
    rationale: 'open:book. The colon dots are gold — two 9:30 time indicators, dividing and joining at once. Geometric, Stripe-adjacent. Works as a mark at any size because the colon is the memorable element.',
    Mark: LogoB_Mark, Wordmark: LogoB_Wordmark,
    appBg: '#fff', wordSize: 42,
  },
  {
    id: 'C',
    title: 'Editorial seal',
    rationale: 'Source Serif 4 wordmark with a small gold wax seal. Irish-hospitality, premium, the one direction that earns the serif. The seal\'s notch stops it reading as a plain coin.',
    Mark: LogoC_Mark, Wordmark: LogoC_Wordmark,
    appBg: IVORY, headerBg: IVORY, wordSize: 42,
  },
  {
    id: 'D',
    title: 'Bracketed',
    rationale: '[openbook]. Square brackets as the reservation container — the most developer-native, Linear/Arc-leaning. The wordmark lives inside a literal slot. Medium weight keeps it from feeling like a CLI.',
    Mark: LogoD_Mark, Wordmark: LogoD_Wordmark,
    appBg: BLACK, wordSize: 38,
  },
  {
    id: 'E',
    title: 'Hold',
    rationale: 'Pure Aesop/Muji move. Wordmark only, bold weight, tight tracking — but the first \"o\" has a gold dot in its counter. A held spot inside the letter. Most restrained, most Irish-quiet.',
    Mark: LogoE_Mark, Wordmark: LogoE_Wordmark,
    appBg: '#fff', wordSize: 44,
  },
];

function App() {
  return (
    <DesignCanvas>
      <div style={{ padding: '20px 60px 48px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: 'rgba(60,50,40,0.5)',
          letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10,
        }}>OpenBook · Logo exploration · Round 2 (based on D3)</div>
        <div style={{
          fontSize: 32, fontWeight: 600, color: 'rgba(20,15,10,0.92)',
          letterSpacing: '-0.02em', marginBottom: 10, maxWidth: 960,
        }}>Wordmark-led. Five refinements of "the booked moment."</div>
        <div style={{ fontSize: 14, color: 'rgba(60,50,40,0.7)', maxWidth: 820, lineHeight: 1.6 }}>
          Round 1 was too mark-heavy. The best modern brands (Stripe, Ramp, Aesop, Vercel) are
          90% wordmark, 10% glyph. Each direction here does the heavy lifting with type, and uses a
          tiny gold gesture to signal a reserved slot in time. Every lockup tested in situ on a site
          header, on dark, as an app icon, and at 40 / 20 / 14 px.
        </div>
      </div>

      <div style={{ padding: '0 60px' }}>
        {r2Directions.map(d => <R2Row key={d.id} dir={d}/>)}
      </div>

      <DCPostIt top={28} right={60} width={240} rotate={-3}>
        My pick: <b>E (Hold)</b> for brand, <b>A</b> for product surfaces. Tell me which feels right to you.
      </DCPostIt>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
