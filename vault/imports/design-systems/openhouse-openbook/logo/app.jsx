// App entry — six directions stacked as rows on an infinite canvas.

const directions = [
  {
    id: 'D1',
    title: 'Folded pages',
    tagline: 'Literal open book, cut to two slabs. Gold + black as the whole brand palette in one glyph. Warmest, most hospitable.',
    Mark: MarkBook,
    Wordmark: WordmarkBook,
    markSize: 64, wordSize: 42, lockupGap: 18,
    appBg: BLACK, appMarkTone: 'goldOnDark',
  },
  {
    id: 'D2',
    title: 'OB monogram',
    tagline: 'Geometric O + B built from two capsules. Works as a favicon. Most Stripe/Linear-feeling.',
    Mark: MarkOBCapsule,
    Wordmark: WordmarkOB,
    markSize: 64, wordSize: 42, lockupGap: 16,
    appBg: '#fff', appMarkTone: 'default',
  },
  {
    id: 'D3',
    title: 'Calendar slot',
    tagline: 'The booking itself as the mark — a filled time-slot in a rounded square. Product-forward.',
    Mark: MarkSlot,
    Wordmark: WordmarkSlot,
    markSize: 60, wordSize: 40, lockupGap: 16,
    appBg: BLACK, appMarkTone: 'goldOnDark',
  },
  {
    id: 'D4',
    title: 'Editorial O',
    tagline: 'Serif O with a tucked gold bookmark. The most hospitality-forward. Pair with Source Serif 4 in-brand moments.',
    Mark: MarkSerifO,
    Wordmark: WordmarkSerif,
    markSize: 64, wordSize: 44, lockupGap: 18,
    appBg: IVORY, appMarkTone: 'default',
  },
  {
    id: 'D5',
    title: 'Threshold',
    tagline: 'Two bars + a lintel. Reads as a doorway or an open book turned vertical. Most abstract, most Vercel-feeling.',
    Mark: MarkThreshold,
    Wordmark: WordmarkThreshold,
    markSize: 60, wordSize: 20, lockupGap: 22,
    appBg: '#fff', appMarkTone: 'default',
  },
  {
    id: 'D6',
    title: 'Signal',
    tagline: 'Circle with a gold confirmation tick at 2 o’clock. AI-native, status-forward. Most future-facing.',
    Mark: MarkSignal,
    Wordmark: WordmarkSignal,
    markSize: 60, wordSize: 40, lockupGap: 16,
    appBg: BLACK, appMarkTone: 'goldOnDark',
  },
];

function App() {
  return (
    <DesignCanvas>
      {/* Header */}
      <div style={{ padding: '20px 60px 48px' }}>
        <div style={{
          fontSize: 11, fontWeight: 600, color: 'rgba(60,50,40,0.5)',
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10,
        }}>OpenBook · Logo exploration · Round 1</div>
        <div style={{
          fontSize: 34, fontWeight: 600, color: 'rgba(20,15,10,0.9)',
          letterSpacing: '-0.02em', marginBottom: 8, maxWidth: 900,
        }}>Six directions, each tested at five touchpoints.</div>
        <div style={{ fontSize: 15, color: 'rgba(60,50,40,0.65)', maxWidth: 780, lineHeight: 1.55 }}>
          Strict brand palette (#D4AF37 gold, #080808 black, warm ivory). Every mark works as a mark
          alone, in a lockup with the wordmark, on black, as an iOS app icon, and at 48 / 24 / 16 px.
          Pick one (or two) and I'll pressure-test it with type variations, motion, and the full asset
          pack (SVG exports, horizontal, stacked, monochrome).
        </div>
      </div>

      <div style={{ padding: '0 60px' }}>
        {directions.map(d => <DirectionRow key={d.id} dir={d}/>)}
      </div>

      {/* Post-it */}
      <DCPostIt top={24} right={60} width={220} rotate={-3}>
        Scroll → pan. Pinch / ⌘+wheel → zoom.<br/>
        Zoom in to each mark — the geometry should hold.
      </DCPostIt>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
