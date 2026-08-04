/* @ds-bundle: {"format":3,"namespace":"OpenHouseOpenBookDesignSystem_7796b9","components":[],"sourceHashes":{"logo/app.jsx":"fd3f602d0476","logo/caps-app.jsx":"86007de78059","logo/caps-mark.jsx":"fd9d63d07637","logo/caps2-app.jsx":"d2dacb1b82fe","logo/caps2-marks.jsx":"1adf3eaa7ffd","logo/design-canvas.jsx":"3fc2600126c0","logo/direction.jsx":"36ef5b43e86e","logo/marks.jsx":"556b52aa0ed3","logo/r2-app.jsx":"5a1af268b3e5","logo/r2-logos.jsx":"f834d4d8b4e5","logo/r2-row.jsx":"75ac3d25754a","logo/r3-app.jsx":"7d4698867e81","logo/r3-logos.jsx":"140186c5bf7e","logo/r4-app.jsx":"b781ca60ff68","logo/r4-mark.jsx":"fc91b22625ac","logo/wordmarks.jsx":"8f7ac10e7a60","ui_kits/openbook-business/App.jsx":"8a7ad6ab21d7","ui_kits/openbook-business/Dashboard.jsx":"7f54e068c7d5","ui_kits/openbook-business/Sidebar.jsx":"f6aaf3fb2715","ui_kits/openbook-consumer/App.jsx":"535ba9465ce5","ui_kits/openbook-consumer/Business.jsx":"10d015d6c577","ui_kits/openbook-consumer/Home.jsx":"d85c92591deb","ui_kits/openbook-consumer/Primitives.jsx":"3680ba4c5600","ui_kits/openhouse/App.jsx":"d784d49d1582","ui_kits/openhouse/Dashboard.jsx":"ac16166b9acf","ui_kits/openhouse/Primitives.jsx":"50e8533a91e3","ui_kits/openhouse/UnitProfile.jsx":"a71a0934618f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpenHouseOpenBookDesignSystem_7796b9 = window.OpenHouseOpenBookDesignSystem_7796b9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// logo/app.jsx
try { (() => {
// App entry — six directions stacked as rows on an infinite canvas.

const directions = [{
  id: 'D1',
  title: 'Folded pages',
  tagline: 'Literal open book, cut to two slabs. Gold + black as the whole brand palette in one glyph. Warmest, most hospitable.',
  Mark: MarkBook,
  Wordmark: WordmarkBook,
  markSize: 64,
  wordSize: 42,
  lockupGap: 18,
  appBg: BLACK,
  appMarkTone: 'goldOnDark'
}, {
  id: 'D2',
  title: 'OB monogram',
  tagline: 'Geometric O + B built from two capsules. Works as a favicon. Most Stripe/Linear-feeling.',
  Mark: MarkOBCapsule,
  Wordmark: WordmarkOB,
  markSize: 64,
  wordSize: 42,
  lockupGap: 16,
  appBg: '#fff',
  appMarkTone: 'default'
}, {
  id: 'D3',
  title: 'Calendar slot',
  tagline: 'The booking itself as the mark — a filled time-slot in a rounded square. Product-forward.',
  Mark: MarkSlot,
  Wordmark: WordmarkSlot,
  markSize: 60,
  wordSize: 40,
  lockupGap: 16,
  appBg: BLACK,
  appMarkTone: 'goldOnDark'
}, {
  id: 'D4',
  title: 'Editorial O',
  tagline: 'Serif O with a tucked gold bookmark. The most hospitality-forward. Pair with Source Serif 4 in-brand moments.',
  Mark: MarkSerifO,
  Wordmark: WordmarkSerif,
  markSize: 64,
  wordSize: 44,
  lockupGap: 18,
  appBg: IVORY,
  appMarkTone: 'default'
}, {
  id: 'D5',
  title: 'Threshold',
  tagline: 'Two bars + a lintel. Reads as a doorway or an open book turned vertical. Most abstract, most Vercel-feeling.',
  Mark: MarkThreshold,
  Wordmark: WordmarkThreshold,
  markSize: 60,
  wordSize: 20,
  lockupGap: 22,
  appBg: '#fff',
  appMarkTone: 'default'
}, {
  id: 'D6',
  title: 'Signal',
  tagline: 'Circle with a gold confirmation tick at 2 o’clock. AI-native, status-forward. Most future-facing.',
  Mark: MarkSignal,
  Wordmark: WordmarkSignal,
  markSize: 60,
  wordSize: 40,
  lockupGap: 16,
  appBg: BLACK,
  appMarkTone: 'goldOnDark'
}];
function App() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 60px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'rgba(60,50,40,0.5)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "OpenBook \xB7 Logo exploration \xB7 Round 1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.9)',
      letterSpacing: '-0.02em',
      marginBottom: 8,
      maxWidth: 900
    }
  }, "Six directions, each tested at five touchpoints."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(60,50,40,0.65)',
      maxWidth: 780,
      lineHeight: 1.55
    }
  }, "Strict brand palette (#D4AF37 gold, #080808 black, warm ivory). Every mark works as a mark alone, in a lockup with the wordmark, on black, as an iOS app icon, and at 48 / 24 / 16 px. Pick one (or two) and I'll pressure-test it with type variations, motion, and the full asset pack (SVG exports, horizontal, stacked, monochrome).")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, directions.map(d => /*#__PURE__*/React.createElement(DirectionRow, {
    key: d.id,
    dir: d
  }))), /*#__PURE__*/React.createElement(DCPostIt, {
    top: 24,
    right: 60,
    width: 220,
    rotate: -3
  }, "Scroll \u2192 pan. Pinch / \u2318+wheel \u2192 zoom.", /*#__PURE__*/React.createElement("br", null), "Zoom in to each mark \u2014 the geometry should hold."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/app.jsx", error: String((e && e.message) || e) }); }

// logo/caps-app.jsx
try { (() => {
function CapsBoard({
  bg,
  width,
  height,
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.55)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: bg,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
      overflow: 'hidden'
    }
  }, children));
}
function CapsApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f0eee9',
      fontFamily: 'Inter, sans-serif',
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 80px 60px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(60,50,40,0.55)',
      marginBottom: 20
    }
  }, "OpenBook \xB7 Identity \xB7 Capital B variant"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: 36,
      fontWeight: 400,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
      maxWidth: 900,
      margin: 0,
      paddingBottom: 16
    }
  }, "A capital B. Two rooms stacked. One held below."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(60,50,40,0.72)',
      lineHeight: 1.7,
      maxWidth: 640
    }
  }, "Uppercase to mirror OpenHouse. The capital B has two counters \u2014 an empty upper bowl, and a lower bowl that holds the single gold slot. Before, the room is open; now, it is reserved. Wordmark set in Inter 700 as ", /*#__PURE__*/React.createElement("i", null, "OpenBook"), " \u2014 camelCase, matching the OpenHouse wordmark.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 60,
      alignItems: 'flex-end',
      marginBottom: 100
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: IVORY,
    width: 560,
    height: 560
  }, /*#__PURE__*/React.createElement(MarkB, {
    size: 340
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: 22,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.015em',
      marginBottom: 12
    }
  }, "The mark."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.65
    }
  }, "Full-height stem, two stacked bowls. Lower bowl is 4 units wider than the upper \u2014 a small optical lift so the mark doesn't look bottom-heavy. The gold bar sits 23% of the lower-bowl width, centred in its counter."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: PAPER,
    width: 640,
    height: 240
  }, /*#__PURE__*/React.createElement(WordmarkB, {
    size: 96
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 100,
      maxWidth: 640,
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "Inter 700, tracking \u22120.035em. Capital O, capital B \u2014 matching OpenHouse. No ornament."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: IVORY,
    width: 700,
    height: 300
  }, /*#__PURE__*/React.createElement(LockupB, {
    size: 80
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 100,
      maxWidth: 640,
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "Primary horizontal lockup. Mark 1.35\xD7 wordmark height, optical centre baseline alignment."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: BLACK,
    width: 700,
    height: 300
  }, /*#__PURE__*/React.createElement(LockupB, {
    size: 80,
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 100,
      maxWidth: 640,
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "On black. The gold slot is the only chromatic element."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: PAPER,
    width: 360,
    height: 360,
    label: "App icon"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: 50,
      background: BLACK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.22)'
    }
  }, /*#__PURE__*/React.createElement(MarkBOnDark, {
    size: 150
  }))), /*#__PURE__*/React.createElement(CapsBoard, {
    bg: "#fff",
    width: 340,
    height: 360,
    label: "Small sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(MarkB, {
    size: 48
  }), /*#__PURE__*/React.createElement(MarkB, {
    size: 24
  }), /*#__PURE__*/React.createElement(MarkB, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 100,
      maxWidth: 640,
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "Tile icon is black; mark inverts. Favicon test: 16px still reads, though the gold bar approaches 2px and will pixel-fight at low DPR \u2014 so at \u226416px drop the bar and ship the solid B."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(CapsBoard, {
    bg: "#fff",
    width: 760,
    height: 400,
    label: "In situ"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      background: '#efebe0',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      paddingLeft: 12,
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e06a5e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e8b83c'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#5dc25a'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 20,
      fontSize: 10,
      color: 'rgba(0,0,0,0.45)'
    }
  }, "openbook.ie")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LockupB, {
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 12,
      color: 'rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "For businesses"), /*#__PURE__*/React.createElement("span", null, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 14px',
      background: BLACK,
      color: '#fff',
      borderRadius: 7,
      fontWeight: 500
    }
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '24px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 600,
      color: BLACK,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      maxWidth: 460
    }
  }, "Your booking page,", /*#__PURE__*/React.createElement("br", null), "live in 15 minutes.")))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CapsApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/caps-app.jsx", error: String((e && e.message) || e) }); }

// logo/caps-mark.jsx
try { (() => {
// OpenBook — capital B variant
// Concept: uppercase B, two stacked bowls. The LOWER bowl is the
// reserved room; a single gold bar sits held inside it. Upper bowl
// is clean — it reads as "before" and "after" the moment.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// The mark — a capital B on a 400-unit grid.
// Stem runs full height. Two bowls on the right. Lower bowl holds bar.
function MarkB({
  size = 400,
  fg = BLACK,
  accent = GOLD,
  counterBg = IVORY
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "OpenBook"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "88",
    y: "56",
    width: "42",
    height: "288",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 56 H238 A72 72 0 0 1 238 200 H130 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 92 H232 A36 36 0 0 1 232 164 H130 Z",
    fill: counterBg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 200 H256 A72 72 0 0 1 256 344 H130 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 236 H250 A36 36 0 0 1 250 308 H130 Z",
    fill: counterBg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "156",
    y: "268",
    width: "92",
    height: "8",
    rx: "1",
    fill: accent
  }));
}
function MarkBOnDark({
  size = 400,
  bgFallback = BLACK
}) {
  return /*#__PURE__*/React.createElement(MarkB, {
    size: size,
    fg: "#fff",
    counterBg: bgFallback
  });
}

// Wordmark — camelCase, matches OpenHouse.
function WordmarkB({
  size = 64,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      lineHeight: 1,
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.035em',
      fontSize: size,
      color
    }
  }, "OpenBook");
}
function WordmarkBOnDark({
  size = 64
}) {
  return /*#__PURE__*/React.createElement(WordmarkB, {
    size: size,
    color: "#fff"
  });
}
function LockupB({
  size = 80,
  onDark = false
}) {
  const markSize = size * 1.35;
  const counterBg = onDark ? BLACK : IVORY;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.3
    }
  }, onDark ? /*#__PURE__*/React.createElement(MarkBOnDark, {
    size: markSize,
    bgFallback: counterBg
  }) : /*#__PURE__*/React.createElement(MarkB, {
    size: markSize,
    counterBg: counterBg
  }), /*#__PURE__*/React.createElement(WordmarkB, {
    size: size,
    color: onDark ? '#fff' : BLACK
  }));
}
Object.assign(window, {
  MarkB,
  MarkBOnDark,
  WordmarkB,
  WordmarkBOnDark,
  LockupB,
  GOLD,
  BLACK,
  IVORY,
  PAPER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/caps-mark.jsx", error: String((e && e.message) || e) }); }

// logo/caps2-app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Caps round 2 — seven directions on one canvas
// For each: mark on ivory, mark on black, wordmark lockup, small-size row.

function Caps2Row({
  n,
  title,
  rationale,
  Dir
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 88,
      breakInside: 'avoid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 24px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap',
      maxWidth: 1400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#8B6428',
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.7)',
      maxWidth: 760,
      lineHeight: 1.6
    }
  }, rationale)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    bg: IVORY,
    w: 300,
    h: 300
  }, /*#__PURE__*/React.createElement(Dir, {
    size: 220
  })), /*#__PURE__*/React.createElement(Cell, {
    bg: BLACK,
    w: 300,
    h: 300
  }, /*#__PURE__*/React.createElement(Dir, {
    size: 220,
    fg: "#fff",
    bg: BLACK
  })), /*#__PURE__*/React.createElement(Cell, {
    bg: IVORY,
    w: 420,
    h: 300
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Dir, {
    size: 100
  }), /*#__PURE__*/React.createElement(WM, {
    size: 40
  }))), /*#__PURE__*/React.createElement(Cell, {
    bg: "#fff",
    w: 260,
    h: 300,
    label: "Small sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Dir, {
    size: 56
  }), /*#__PURE__*/React.createElement(Dir, {
    size: 32
  }), /*#__PURE__*/React.createElement(Dir, {
    size: 20
  }))), /*#__PURE__*/React.createElement(Cell, {
    bg: PAPER,
    w: 240,
    h: 300,
    label: "App icon"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      borderRadius: 42,
      background: BLACK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 14px 36px rgba(0,0,0,0.22)'
    }
  }, /*#__PURE__*/React.createElement(Dir, {
    size: 128,
    fg: "#fff",
    bg: BLACK
  })))));
}
function Cell({
  bg,
  w,
  h,
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.55)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: bg,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)',
      overflow: 'hidden'
    }
  }, children));
}
function Caps2App() {
  const dirs = [{
    n: '01',
    title: 'The notch',
    Dir: Dir1,
    rationale: 'Capital B with a precise horizontal gold slice exactly where the upper and lower bowls meet. The held moment sits on the seam between before and after. Closest to Ramp/Linear restraint — one gesture, unmistakable.'
  }, {
    n: '02',
    title: 'OB ligature',
    Dir: Dir2,
    rationale: 'O and B fuse — a single continuous glyph where they share a vertical axis. No gap. Reads as a mono-mark even at favicon sizes. Technical, typographic.'
  }, {
    n: '03',
    title: 'Keyhole B',
    Dir: Dir3,
    rationale: 'Instead of two bowls, the counter is one continuous keyhole. Gold bar sits in the narrow waist. Reads as unlocking + holding. Most distinctive silhouette.'
  }, {
    n: '04',
    title: 'The aperture',
    Dir: Dir4,
    rationale: 'O becomes the ring and B sits concentrically inside it. The booking happens inside the opening. Strongest as a standalone mark; closest to a classic badge without being one.'
  }, {
    n: '05',
    title: 'Flag B',
    Dir: Dir5,
    rationale: 'Pure slab geometry — no curves. Two stacked flag-shaped rooms; the lower is replaced with solid gold. Architectural. Reads as ‘this slot is yours’.'
  }, {
    n: '06',
    title: 'Serif cut',
    Dir: Dir6,
    rationale: 'A display-serif B with a single gold hairline drawn across the lower counter. Editorial, Aesop-adjacent. The most ‘hospitality premium’ of the set — feels like a restaurant, not a SaaS.'
  }, {
    n: '07',
    title: 'Stacked OB',
    Dir: Dir7,
    rationale: 'O above, B below, same width, one vertical axis. A vertical monogram without a badge. Sings as a square app icon; the mark-only use is unambiguous.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f0eee9',
      fontFamily: 'Inter, sans-serif',
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 80px 60px',
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(60,50,40,0.55)',
      marginBottom: 20
    }
  }, "OpenBook \xB7 Capital B \xB7 Seven directions"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: 36,
      fontWeight: 400,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
      maxWidth: 900,
      margin: 0,
      paddingBottom: 16
    }
  }, "Seven structural ideas for a capital-B mark."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(60,50,40,0.72)',
      lineHeight: 1.7,
      maxWidth: 700
    }
  }, "Same constraints throughout: black letter, single gold accent, Inter wordmark. Each direction proposes a different structural idea \u2014 not a decorative variation. Look at them as marks first; the wordmark rides alongside.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      padding: '0 80px'
    }
  }, dirs.map(d => /*#__PURE__*/React.createElement(Caps2Row, _extends({
    key: d.n
  }, d)))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Caps2App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/caps2-app.jsx", error: String((e && e.message) || e) }); }

// logo/caps2-marks.jsx
try { (() => {
// OpenBook Caps — seven directions
// Same brand constraints: #D4AF37 gold, #080808 black, Inter wordmark.
// Each mark explores a different structural idea.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// ─── 1. The notch ──────────────────────────────────────────────
// Capital B. Gold horizontal slice exactly where the two bowls meet.
// The held moment sits on the seam.
function Dir1({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 300 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "40",
    width: "32",
    height: "220",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 40 H180 A60 55 0 0 1 180 150 H92 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 72 H176 A28 28 0 0 1 176 118 H92 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 150 H194 A60 55 0 0 1 194 260 H92 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 182 H190 A28 28 0 0 1 190 228 H92 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "145",
    width: "140",
    height: "10",
    fill: accent
  }));
}

// ─── 2. OB ligature ────────────────────────────────────────────
// O and B share a spine. Single continuous glyph.
function Dir2({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 380 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "150",
    r: "108",
    fill: fg
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "110",
    cy: "150",
    r: "68",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "218",
    y: "42",
    width: "28",
    height: "216",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M246 42 H300 A52 52 0 0 1 300 146 H246 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M246 74 H294 A22 22 0 0 1 294 114 H246 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M246 146 H314 A56 56 0 0 1 314 258 H246 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M246 178 H306 A24 24 0 0 1 306 226 H246 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "260",
    y: "198",
    width: "44",
    height: "8",
    fill: accent
  }));
}

// ─── 3. Keyhole B ──────────────────────────────────────────────
// Counter is a single vertical keyhole rather than two bowls.
// One continuous interior. Gold bar inside.
function Dir3({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 300 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "40",
    width: "32",
    height: "220",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 40 H200 A70 70 0 0 1 200 180 A60 60 0 0 1 200 260 H92 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 72 H190 A38 38 0 0 1 200 120 L200 180 A28 28 0 0 1 190 228 H92 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "120",
    y: "146",
    width: "76",
    height: "8",
    fill: accent
  }));
}

// ─── 4. The aperture ───────────────────────────────────────────
// O surrounds B. Concentric. The book is inside the opening.
function Dir4({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 300 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "150",
    r: "130",
    fill: fg
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "150",
    cy: "150",
    r: "98",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "100",
    y: "78",
    width: "18",
    height: "144",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 78 H168 A34 34 0 0 1 168 146 H118 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 94 H162 A18 18 0 0 1 162 130 H118 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 146 H174 A38 38 0 0 1 174 222 H118 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 162 H168 A22 22 0 0 1 168 206 H118 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "130",
    y: "178",
    width: "38",
    height: "7",
    fill: accent
  }));
}

// ─── 5. Flag B ─────────────────────────────────────────────────
// Pure slab geometry. No curves. Two stacked flag-shaped rooms.
// One replaced with gold.
function Dir5({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 300 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "40",
    width: "32",
    height: "220",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 40 H220 L240 70 L240 120 L220 150 H92 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108 68 H212 L228 88 L228 102 L212 122 H108 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 150 H230 L252 180 L252 230 L230 260 H92 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108 178 H220 L240 198 L240 212 L220 232 H108 Z",
    fill: accent
  }));
}

// ─── 6. Serif cut ──────────────────────────────────────────────
// Display serif B. Single hairline gold cut across the lower counter.
// Editorial. Aesop-adjacent.
function Dir6({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  // We use a real serif font (Source Serif) so the shape carries
  // the typographic weight. The gold hairline is an absolute overlay.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Source Serif 4", "Playfair Display", Georgia, serif',
      fontWeight: 500,
      fontSize: size * 0.95,
      color: fg,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "B"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: size * 0.24,
      top: size * 0.66,
      width: size * 0.38,
      height: Math.max(2, size * 0.018),
      background: accent
    }
  }));
}

// ─── 7. Stacked OB ─────────────────────────────────────────────
// O above, B below. Same width. Shared vertical axis.
// Vertical monogram without the badge.
function Dir7({
  size = 200,
  fg = BLACK,
  bg = IVORY,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 200 300",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "72",
    r: "56",
    fill: fg
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "72",
    r: "34",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "52",
    y: "154",
    width: "22",
    height: "120",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 154 H132 A36 36 0 0 1 132 212 H74 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 172 H126 A18 18 0 0 1 126 196 H74 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 212 H140 A40 40 0 0 1 140 274 H74 Z",
    fill: fg
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 230 H132 A22 22 0 0 1 132 256 H74 Z",
    fill: bg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "86",
    y: "239",
    width: "42",
    height: "8",
    fill: accent
  }));
}

// Wordmark — consistent across directions.
function WM({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: size,
      color,
      letterSpacing: '-0.035em',
      lineHeight: 1
    }
  }, "OpenBook");
}
Object.assign(window, {
  Dir1,
  Dir2,
  Dir3,
  Dir4,
  Dir5,
  Dir6,
  Dir7,
  WM,
  GOLD,
  BLACK,
  IVORY,
  PAPER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/caps2-marks.jsx", error: String((e && e.message) || e) }); }

// logo/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// No assets, no deps.

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// ─────────────────────────────────────────────────────────────
// Main canvas — transform-based pan/zoom viewport
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DesignCanvas({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button starting on the
    // canvas background (not inside an artboard).
    let drag = null;
    const onPointerDown = e => {
      const onBg = e.target === vp || e.target === worldRef.current;
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px',
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Section — title + subtitle + h-stack of artboards (no wrap)
// ─────────────────────────────────────────────────────────────
function DCSection({
  title,
  subtitle,
  children,
  gap = 48
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.3,
      marginBottom: 4
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Artboard — labeled card
// ─────────────────────────────────────────────────────────────
function DCArtboard({
  label,
  children,
  width,
  height,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      paddingBottom: 8,
      fontSize: 12,
      fontWeight: 500,
      color: DC.label,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/design-canvas.jsx", error: String((e && e.message) || e) }); }

// logo/direction.jsx
try { (() => {
// Lockup — a single direction's set of artboards:
// Mark · Lockup (mark + wordmark) · App icon · Dark variant · Favicon test
//
// Each direction has:
//   { id, title, tagline, Mark, Wordmark, appIconBg, appIconFg }
//
// Rendered in a vertical column so 6 directions stack naturally.

function ArtRow({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, children);
}
function Board({
  width,
  height,
  bg = IVORY,
  label,
  children,
  padded = true,
  grid = false,
  cornerHint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      paddingBottom: 8,
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.65)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: bg,
      borderRadius: 4,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: grid ? `linear-gradient(${GRID} 1px, transparent 1px), linear-gradient(90deg, ${GRID} 1px, transparent 1px)` : undefined,
      backgroundSize: grid ? '16px 16px' : undefined
    }
  }, children, cornerHint && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontSize: 10,
      fontWeight: 500,
      color: 'rgba(0,0,0,0.35)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, cornerHint)));
}
function AppIcon({
  size = 220,
  bg,
  children,
  radius
}) {
  const r = radius ?? size * 0.225;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: r,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: r,
      background: 'linear-gradient(155deg, rgba(255,255,255,0.18), transparent 50%)',
      pointerEvents: 'none'
    }
  }), children);
}
function DirectionRow({
  dir
}) {
  const {
    id,
    title,
    tagline,
    Mark,
    Wordmark,
    lockupGap = 20,
    markSize = 72,
    wordSize = 44,
    appBg,
    appMarkTone = 'lightOnDark'
  } = dir;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 28px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(60,50,40,0.45)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: 'rgba(40,30,20,0.9)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(60,50,40,0.6)',
      maxWidth: 520
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Board, {
    width: 220,
    height: 220,
    bg: "#fff",
    label: "Mark",
    grid: true
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 128,
    gold: GOLD,
    dark: BLACK
  })), /*#__PURE__*/React.createElement(Board, {
    width: 420,
    height: 220,
    bg: IVORY,
    label: "Horizontal lockup"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: lockupGap
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: markSize,
    gold: GOLD,
    dark: BLACK
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: wordSize,
    color: BLACK
  }))), /*#__PURE__*/React.createElement(Board, {
    width: 420,
    height: 220,
    bg: BLACK,
    label: "On dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: lockupGap
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: markSize,
    gold: GOLD,
    dark: "#fff"
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: wordSize,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement(Board, {
    width: 260,
    height: 260,
    bg: "#f0eee9",
    label: "App icon",
    padded: false
  }, /*#__PURE__*/React.createElement(AppIcon, {
    size: 200,
    bg: appBg
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 120,
    gold: appMarkTone === 'goldOnDark' ? GOLD : appMarkTone === 'blackOnGold' ? BLACK : GOLD,
    dark: appMarkTone === 'goldOnDark' ? '#fff' : appMarkTone === 'blackOnGold' ? BLACK : '#fff'
  }))), /*#__PURE__*/React.createElement(Board, {
    width: 260,
    height: 220,
    bg: "#fff",
    label: "Small sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 48,
    gold: GOLD,
    dark: BLACK
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 24,
    gold: GOLD,
    dark: BLACK
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 16,
    gold: GOLD,
    dark: BLACK
  })))));
}
Object.assign(window, {
  DirectionRow,
  Board,
  AppIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/direction.jsx", error: String((e && e.message) || e) }); }

// logo/marks.jsx
try { (() => {
// OpenBook logo exploration — 6 directions
// Each direction: Mark (standalone) · Horizontal lockup · App icon · Dark variant
//
// Palette (non-negotiable):
//   gold  #D4AF37
//   black #080808
//   ivory #faf7ef (warm light bg)
//
// The target bar: apple.com, stripe.com, linear.app, vercel.com

const GOLD = '#D4AF37';
const GOLD_DARK = '#8B6428';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const GRID = 'rgba(0,0,0,0.04)';

// ─────────────────────────────────────────────────────────────
// D1 — "Open book" geometric. The literal metaphor, done right:
// two folded pages making a gold slab + black slab.
// ─────────────────────────────────────────────────────────────
function MarkBook({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  const s = size;
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 96 96",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 24 L46 18 L46 78 L14 72 Z",
    fill: gold
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 18 L82 24 L82 72 L50 78 Z",
    fill: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// D2 — Monogram "OB" ligature. Two concentric capsules, the O
// becoming the B's belly. Geometric, Linear-esque.
// ─────────────────────────────────────────────────────────────
function MarkOBCapsule({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "34",
    cy: "48",
    r: "22",
    stroke: dark,
    strokeWidth: "10",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52 26 L62 26 A18 13 0 0 1 62 52 L52 52 Z",
    fill: gold
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52 44 L62 44 A18 13 0 0 1 62 70 L52 70 Z",
    fill: dark
  }), /*#__PURE__*/React.createElement("rect", {
    x: "48",
    y: "26",
    width: "6",
    height: "44",
    fill: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// D3 — Calendar slot / bookmark. A single notched rectangle — the
// moment you're booking. Pure geometry, no literal book.
// ─────────────────────────────────────────────────────────────
function MarkSlot({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "16",
    width: "64",
    height: "64",
    rx: "14",
    fill: dark
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "32",
    width: "40",
    height: "10",
    rx: "3",
    fill: gold
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "48",
    width: "28",
    height: "6",
    rx: "2",
    fill: gold,
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "60",
    width: "18",
    height: "6",
    rx: "2",
    fill: gold,
    opacity: "0.28"
  }));
}

// ─────────────────────────────────────────────────────────────
// D4 — Monogrammed "O". A single serif-weighted O with a gold
// bookmark tab tucked inside. Editorial, Source-Serif-adjacent.
// ─────────────────────────────────────────────────────────────
function MarkSerifO({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "48",
    cy: "48",
    rx: "34",
    ry: "32",
    fill: dark
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "48",
    cy: "48",
    rx: "18",
    ry: "18",
    fill: IVORY
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 20 L70 20 L70 42 L64 38 L58 42 Z",
    fill: gold
  }));
}

// ─────────────────────────────────────────────────────────────
// D5 — Threshold / open door. Two parallel verticals, one gold
// one black, with a gap of light between. Reads as "open".
// Abstract; the most Vercel/Linear-feeling.
// ─────────────────────────────────────────────────────────────
function MarkThreshold({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "14",
    width: "18",
    height: "68",
    rx: "3",
    fill: dark
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "14",
    width: "18",
    height: "68",
    rx: "3",
    fill: gold
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "14",
    width: "60",
    height: "8",
    rx: "3",
    fill: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// D6 — "Signal O". A circle with a single gold tick mark at the
// 2 o'clock — reads as a confirmation / booking complete / active
// status. AI-native, restrained.
// ─────────────────────────────────────────────────────────────
function MarkSignal({
  size = 96,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: "30",
    stroke: dark,
    strokeWidth: "10",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "68",
    y: "20",
    width: "10",
    height: "10",
    rx: "2",
    fill: gold,
    transform: "rotate(30 73 25)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: "6",
    fill: dark
  }));
}
Object.assign(window, {
  GOLD,
  GOLD_DARK,
  BLACK,
  IVORY,
  MarkBook,
  MarkOBCapsule,
  MarkSlot,
  MarkSerifO,
  MarkThreshold,
  MarkSignal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/marks.jsx", error: String((e && e.message) || e) }); }

// logo/r2-app.jsx
try { (() => {
// R2 app entry

const r2Directions = [{
  id: 'A',
  title: 'The reserved moment',
  rationale: 'Takes D3\'s \"booked slot\" and moves it from a calendar-app container to a pure typographic gesture. A gold underbar under \"book\" — a time slot reserved. The wordmark carries the brand; the mark is a stripped-down circle + slot for favicons only.',
  Mark: LogoA_Mark,
  Wordmark: LogoA_Wordmark,
  appBg: BLACK,
  wordSize: 42
}, {
  id: 'B',
  title: 'Reservation colon',
  rationale: 'open:book. The colon dots are gold — two 9:30 time indicators, dividing and joining at once. Geometric, Stripe-adjacent. Works as a mark at any size because the colon is the memorable element.',
  Mark: LogoB_Mark,
  Wordmark: LogoB_Wordmark,
  appBg: '#fff',
  wordSize: 42
}, {
  id: 'C',
  title: 'Editorial seal',
  rationale: 'Source Serif 4 wordmark with a small gold wax seal. Irish-hospitality, premium, the one direction that earns the serif. The seal\'s notch stops it reading as a plain coin.',
  Mark: LogoC_Mark,
  Wordmark: LogoC_Wordmark,
  appBg: IVORY,
  headerBg: IVORY,
  wordSize: 42
}, {
  id: 'D',
  title: 'Bracketed',
  rationale: '[openbook]. Square brackets as the reservation container — the most developer-native, Linear/Arc-leaning. The wordmark lives inside a literal slot. Medium weight keeps it from feeling like a CLI.',
  Mark: LogoD_Mark,
  Wordmark: LogoD_Wordmark,
  appBg: BLACK,
  wordSize: 38
}, {
  id: 'E',
  title: 'Hold',
  rationale: 'Pure Aesop/Muji move. Wordmark only, bold weight, tight tracking — but the first \"o\" has a gold dot in its counter. A held spot inside the letter. Most restrained, most Irish-quiet.',
  Mark: LogoE_Mark,
  Wordmark: LogoE_Wordmark,
  appBg: '#fff',
  wordSize: 44
}];
function App() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 60px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(60,50,40,0.5)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "OpenBook \xB7 Logo exploration \xB7 Round 2 (based on D3)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em',
      marginBottom: 10,
      maxWidth: 960
    }
  }, "Wordmark-led. Five refinements of \"the booked moment.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(60,50,40,0.7)',
      maxWidth: 820,
      lineHeight: 1.6
    }
  }, "Round 1 was too mark-heavy. The best modern brands (Stripe, Ramp, Aesop, Vercel) are 90% wordmark, 10% glyph. Each direction here does the heavy lifting with type, and uses a tiny gold gesture to signal a reserved slot in time. Every lockup tested in situ on a site header, on dark, as an app icon, and at 40 / 20 / 14 px.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, r2Directions.map(d => /*#__PURE__*/React.createElement(R2Row, {
    key: d.id,
    dir: d
  }))), /*#__PURE__*/React.createElement(DCPostIt, {
    top: 28,
    right: 60,
    width: 240,
    rotate: -3
  }, "My pick: ", /*#__PURE__*/React.createElement("b", null, "E (Hold)"), " for brand, ", /*#__PURE__*/React.createElement("b", null, "A"), " for product surfaces. Tell me which feels right to you."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r2-app.jsx", error: String((e && e.message) || e) }); }

// logo/r2-logos.jsx
try { (() => {
// OpenBook logo — Round 2
// Wordmark-led. Each direction is ~90% typography, 10% glyph.
// The glyph always references "a booked moment" — a reserved slot in time.
//
// Palette: #D4AF37 gold · #080808 black · #faf7ef ivory (warm, Irish)

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f5f0e3';

// ─────────────────────────────────────────────────────────────
// R2-A — "The reserved moment"
// Wordmark: openbook, Inter, custom-tuned (o's tighter, 'book' slightly
//   wider for balance, crossbar raised on 'e' to match o height).
// Glyph: a single gold segment set into the baseline — a reserved
//   slot. Reads as a confidence bar / progress marker / booking mark.
// ─────────────────────────────────────────────────────────────
function LogoA_Mark({
  size = 72,
  gold = GOLD,
  dark = BLACK
}) {
  // Just the glyph: the reserved-slot mark extracted.
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "28",
    stroke: dark,
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "14",
    width: "22",
    height: "5",
    rx: "1",
    fill: gold
  }));
}
function LogoA_Wordmark({
  size = 44,
  color = BLACK,
  accent = GOLD
}) {
  // Wordmark is the whole thing; glyph lives as an underbar under the 'o' of book.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-0.045em',
      color,
      lineHeight: 1,
      fontFeatureSettings: '"cv11", "ss01", "ss02"',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: size * 0.1
    }
  }, /*#__PURE__*/React.createElement("span", null, "openbook"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.62,
      height: size * 0.06,
      background: accent,
      marginLeft: size * 2.2,
      // underbar sits under 'book'
      borderRadius: 1
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// R2-B — "Reservation colon"
// Wordmark: open:book — the colon as time (9:30) doubles as the
// booking gesture. Geometric, Stripe-adjacent. The colon dots are
// gold; the rest is black.
// ─────────────────────────────────────────────────────────────
function LogoB_Mark({
  size = 72,
  gold = GOLD,
  dark = BLACK
}) {
  // Mark-only uses the colon dots stacked with a faint baseline.
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "26",
    r: "5",
    fill: gold
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "46",
    r: "5",
    fill: gold
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "58",
    width: "40",
    height: "3",
    rx: "1.5",
    fill: dark
  }));
}
function LogoB_Wordmark({
  size = 44,
  color = BLACK,
  accent = GOLD
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-0.04em',
      color,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'baseline',
      fontFeatureSettings: '"cv11", "ss01"'
    }
  }, /*#__PURE__*/React.createElement("span", null, "open"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: size * 0.14,
      margin: `0 ${size * 0.08}px`,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.15,
      height: size * 0.15,
      borderRadius: '50%',
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.15,
      height: size * 0.15,
      borderRadius: '50%',
      background: accent
    }
  })), /*#__PURE__*/React.createElement("span", null, "book"));
}

// ─────────────────────────────────────────────────────────────
// R2-C — "Seal"
// Editorial wordmark in Source Serif 4 (Openbook, title case) with
// a small gold seal mark to the left. Irish-premium, hospitality.
// The seal is a filled circle with a single notch (wax stamp).
// ─────────────────────────────────────────────────────────────
function LogoC_Mark({
  size = 72,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "26",
    fill: gold
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62 30 L72 36 L62 42 Z",
    fill: gold
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "12",
    fill: "none",
    stroke: dark,
    strokeWidth: "2.5",
    opacity: "0.85"
  }));
}
function LogoC_Wordmark({
  size = 44,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '-0.02em',
      color,
      lineHeight: 1,
      fontFeatureSettings: '"liga", "dlig"'
    }
  }, "Openbook");
}

// ─────────────────────────────────────────────────────────────
// R2-D — "Bracketed"
// Wordmark: [openbook] — square brackets as the container, a
// reserved slot around the word. Linear/Arc energy, developer-leaning.
// Brackets are gold, weight-matched to the Inter Medium wordmark.
// ─────────────────────────────────────────────────────────────
function LogoD_Mark({
  size = 72,
  gold = GOLD,
  dark = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 14 L14 14 L14 58 L22 58",
    stroke: gold,
    strokeWidth: "4",
    strokeLinecap: "square",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 14 L58 14 L58 58 L50 58",
    stroke: gold,
    strokeWidth: "4",
    strokeLinecap: "square",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "5",
    fill: dark
  }));
}
function LogoD_Wordmark({
  size = 44,
  color = BLACK,
  accent = GOLD
}) {
  const bracketW = size * 0.05;
  const bracketArm = size * 0.18;
  const padX = size * 0.18;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '-0.035em',
      color,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'stretch',
      gap: padX,
      fontFeatureSettings: '"cv11", "ss01"'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: bracketArm,
      borderLeft: `${bracketW}px solid ${accent}`,
      borderTop: `${bracketW}px solid ${accent}`,
      borderBottom: `${bracketW}px solid ${accent}`,
      height: size * 1.05
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: `${size * 0.02}px 0`
    }
  }, "openbook"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: bracketArm,
      borderRight: `${bracketW}px solid ${accent}`,
      borderTop: `${bracketW}px solid ${accent}`,
      borderBottom: `${bracketW}px solid ${accent}`,
      height: size * 1.05
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// R2-E — "Hold"
// Pure wordmark. "openbook" in Inter with the counter of the first
// 'o' filled in gold — a booked slot inside the letterform itself.
// Most Aesop/Ramp/Muji — restrained, type-forward, no separate mark.
// ─────────────────────────────────────────────────────────────
function LogoE_Mark({
  size = 72,
  gold = GOLD,
  dark = BLACK
}) {
  // An 'o' with its counter filled — the whole identity in 72x72.
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "22",
    stroke: dark,
    strokeWidth: "8",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "10",
    fill: gold
  }));
}
function LogoE_Wordmark({
  size = 44,
  color = BLACK,
  accent = GOLD
}) {
  // Render 'openbook' with a gold-filled o (first o). Using SVG text
  // for precise control, with an overlaid gold dot sized to the o counter.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '-0.045em',
      color,
      lineHeight: 1,
      fontFeatureSettings: '"cv11", "ss01", "ss02"'
    }
  }, /*#__PURE__*/React.createElement("span", null, "o"), /*#__PURE__*/React.createElement("span", null, "penb"), /*#__PURE__*/React.createElement("span", null, "o"), /*#__PURE__*/React.createElement("span", null, "ok")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: size * 0.115,
      top: size * 0.45,
      width: size * 0.17,
      height: size * 0.17,
      borderRadius: '50%',
      background: accent
    }
  }));
}
Object.assign(window, {
  GOLD,
  BLACK,
  IVORY,
  PAPER,
  LogoA_Mark,
  LogoA_Wordmark,
  LogoB_Mark,
  LogoB_Wordmark,
  LogoC_Mark,
  LogoC_Wordmark,
  LogoD_Mark,
  LogoD_Wordmark,
  LogoE_Mark,
  LogoE_Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r2-logos.jsx", error: String((e && e.message) || e) }); }

// logo/r2-row.jsx
try { (() => {
// R2 — in-situ mocks + direction rows

function R2Board({
  width,
  height,
  bg = IVORY,
  label,
  children,
  grid = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      paddingBottom: 8,
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.65)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: bg,
      borderRadius: 4,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: grid ? 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)' : undefined,
      backgroundSize: grid ? '16px 16px' : undefined
    }
  }, children));
}

// Browser-chrome mock showing the lockup as a site header
function R2HeaderMock({
  Wordmark,
  bg = '#fff'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      height: 220,
      background: bg,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      background: '#eae6dc',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      paddingLeft: 10,
      borderBottom: '1px solid rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e06a5e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e8b83c'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#5dc25a'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 16,
      fontSize: 10,
      color: 'rgba(0,0,0,0.5)',
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '-0.01em'
    }
  }, "openbook.ie")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(0.55)',
      transformOrigin: 'left center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 44,
    color: BLACK
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontSize: 11,
      fontFamily: 'Inter',
      color: 'rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "For businesses"), /*#__PURE__*/React.createElement("span", null, "Pricing"), /*#__PURE__*/React.createElement("span", null, "Sign in"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: BLACK,
      color: '#fff',
      borderRadius: 5,
      fontWeight: 500
    }
  }, "Get started"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 600,
      color: BLACK,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
      maxWidth: 340
    }
  }, "Your booking page, live in 15 minutes.")));
}
function R2AppIcon({
  Mark,
  bg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      borderRadius: 40,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 14px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 40,
      background: 'linear-gradient(155deg, rgba(255,255,255,0.2), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 110,
    gold: GOLD,
    dark: bg === BLACK ? '#fff' : BLACK
  }));
}
function R2Row({
  dir
}) {
  const {
    id,
    title,
    rationale,
    Mark,
    Wordmark,
    appBg,
    headerBg = '#fff',
    lockupGap = 18,
    wordSize = 42
  } = dir;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 32px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap',
      maxWidth: 1400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: GOLD_DARK_LABEL,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.65)',
      maxWidth: 760,
      lineHeight: 1.55
    }
  }, rationale)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(R2Board, {
    width: 520,
    height: 240,
    bg: PAPER,
    label: "Primary wordmark"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: wordSize + 8,
    color: BLACK
  })), /*#__PURE__*/React.createElement(R2Board, {
    width: 200,
    height: 240,
    bg: "#fff",
    label: "Mark",
    grid: true
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 110,
    gold: GOLD,
    dark: BLACK
  })), /*#__PURE__*/React.createElement(R2Board, {
    width: 380,
    height: 240,
    bg: BLACK,
    label: "On dark"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: wordSize,
    color: "#fff"
  })), /*#__PURE__*/React.createElement(R2Board, {
    width: 240,
    height: 240,
    bg: "#f0eee9",
    label: "App icon"
  }, /*#__PURE__*/React.createElement(R2AppIcon, {
    Mark: Mark,
    bg: appBg
  })), /*#__PURE__*/React.createElement(R2Board, {
    width: 420,
    height: 240,
    bg: "#fff",
    label: "Website header",
    padded: false
  }, /*#__PURE__*/React.createElement(R2HeaderMock, {
    Wordmark: Wordmark,
    bg: headerBg
  })), /*#__PURE__*/React.createElement(R2Board, {
    width: 200,
    height: 240,
    bg: "#fff",
    label: "Small sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 40,
    gold: GOLD,
    dark: BLACK
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 20,
    gold: GOLD,
    dark: BLACK
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 14,
    gold: GOLD,
    dark: BLACK
  })))));
}
const GOLD_DARK_LABEL = '#8B6428';
Object.assign(window, {
  R2Row,
  R2Board
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r2-row.jsx", error: String((e && e.message) || e) }); }

// logo/r3-app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function R3Board({
  width,
  height,
  bg = IVORY,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      paddingBottom: 8,
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.65)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: bg,
      borderRadius: 4,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, children));
}
function R3Row({
  id,
  title,
  rationale,
  Logo
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 28px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      flexWrap: 'wrap',
      maxWidth: 1400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#8B6428',
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, "Variant ", id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flexBasis: '100%',
      height: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.7)',
      maxWidth: 820,
      lineHeight: 1.6
    }
  }, rationale)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(R3Board, {
    width: 340,
    height: 340,
    bg: IVORY,
    label: "Primary"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 260
  })), /*#__PURE__*/React.createElement(R3Board, {
    width: 340,
    height: 340,
    bg: BLACK,
    label: "On black"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 260
  })), /*#__PURE__*/React.createElement(R3Board, {
    width: 420,
    height: 340,
    bg: IVORY,
    label: "Horizontal lockup"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: '-0.035em',
      color: BLACK,
      lineHeight: 1
    }
  }, "OpenBook"))), /*#__PURE__*/React.createElement(R3Board, {
    width: 240,
    height: 340,
    bg: "#f0eee9",
    label: "App icon"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      borderRadius: 45,
      background: BLACK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 14px 36px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 150
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 45,
      background: 'linear-gradient(155deg, rgba(255,255,255,0.15), transparent 55%)'
    }
  }))), /*#__PURE__*/React.createElement(R3Board, {
    width: 220,
    height: 340,
    bg: "#fff",
    label: "Small sizes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 52
  }), /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement(Logo, {
    size: 18
  })))));
}
function App() {
  const dirs = [{
    id: 'I',
    title: 'OB Clock',
    Logo: LogoI,
    rationale: 'Gold ring as the O. A bold B inside where the lower lobe extends outward like a clock hand — the booked moment. Closest to OpenHouse\'s stacked-pictogram formula: ring + monogram + functional glyph.'
  }, {
    id: 'II',
    title: 'Booking slot badge',
    Logo: LogoII,
    rationale: 'Ring + O (left) + bookmark flag (right) with a reserved-slot notch. The bookmark reads as a B stem and as a literal booking — three reads in one shape. My pick for OpenBook.'
  }, {
    id: 'III',
    title: 'Open page + roof',
    Logo: LogoIII,
    rationale: 'The OpenHouse sibling: a stacked chevron sits above an open book spread, with a booked row highlighted below. Same visual grammar as OH — upward arrow + structure + base slot.'
  }, {
    id: 'IV',
    title: 'Open B',
    Logo: LogoIV,
    rationale: 'A bold capital B with the spine split and lobes swung outward like an opening book. Most literal "open" + "book" read. Symmetrical, fills the ring.'
  }];
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 60px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(60,50,40,0.5)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "OpenBook \xB7 Logo exploration \xB7 Round 3 (OpenHouse sibling)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em',
      marginBottom: 10,
      maxWidth: 960
    }
  }, "Circle badge. Stacked pictogram. Metallic gold."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(60,50,40,0.75)',
      maxWidth: 820,
      lineHeight: 1.6
    }
  }, "Matching the OpenHouse formula: a bold geometric monogram that reads as a pictogram, contained inside a gold ring, rendered with the same metallic gradient and dark outline. Four variants, each tested big, on black, locked up, as an app icon, and at small sizes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, dirs.map(d => /*#__PURE__*/React.createElement(R3Row, _extends({
    key: d.id
  }, d)))), /*#__PURE__*/React.createElement(DCPostIt, {
    top: 28,
    right: 60,
    width: 240,
    rotate: -3
  }, "My pick: ", /*#__PURE__*/React.createElement("b", null, "Variant II"), " (booking slot badge) \u2014 the bookmark is the only element that reads as ", /*#__PURE__*/React.createElement("i", null, "booking"), " unambiguously. III is the direct sibling to OpenHouse."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r3-app.jsx", error: String((e && e.message) || e) }); }

// logo/r3-logos.jsx
try { (() => {
// OpenBook logo — Round 3
// Match the OpenHouse formula: circle badge containing a stacked
// pictogram that doubles as a monogram. Metallic gold gradient,
// bold geometric shapes, thick strokes.
//
// OpenHouse parsed: gold ring + A-roof + H-house + arrow point.
// OpenBook mirror:  gold ring + O (the ring itself) + B/clock/slot inside.

const GOLD_TOP = '#F4D878';
const GOLD_MID = '#E9C045';
const GOLD_BOT = '#B8892E';
const GOLD_EDGE = '#6B4E1C';
const GOLD_HI = '#FFF4C2';
const BLACK = '#080808';
const IVORY = '#faf7ef';

// Reusable gold gradients (id suffixed per variant to avoid collisions)
function GoldDefs({
  id
}) {
  return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `g-ring-${id}`,
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: GOLD_HI
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "20%",
    stopColor: GOLD_TOP
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: GOLD_MID
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: GOLD_BOT
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `g-shape-${id}`,
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: GOLD_HI
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "30%",
    stopColor: GOLD_TOP
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "70%",
    stopColor: GOLD_MID
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: GOLD_BOT
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `g-bev-${id}`,
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FFF6CC",
    stopOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#FFFFFF",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#000",
    stopOpacity: "0.15"
  })));
}

// ─────────────────────────────────────────────────────────────
// Variant I — "OB Clock"
// Gold ring = O. Inside: a bold B shape where the two lobes are
// also clock hands at 3 and 6 o'clock — the booked moment.
// ─────────────────────────────────────────────────────────────
function LogoI({
  size = 400
}) {
  const id = 'I';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none"
  }, /*#__PURE__*/React.createElement(GoldDefs, {
    id: id
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-ring-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "135",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-bev-${id})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: "130",
    y: "80",
    width: "34",
    height: "240",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164 80 H220 A55 55 0 0 1 220 190 H164 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164 110 H210 A25 25 0 0 1 210 160 H164 Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164 210 H235 A55 55 0 0 1 235 320 H164 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M164 240 H222 A25 25 0 0 1 222 290 H164 Z",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "147",
    cy: "200",
    r: "6",
    fill: GOLD_EDGE
  }));
}

// ─────────────────────────────────────────────────────────────
// Variant II — "Booking slot badge" (recommended)
// Gold ring with inner pictogram: an O (left) and a bold bookmark /
// slot (right) that together form "OB". The slot has a notched tab
// that reads as both the second letter of "Book" AND a reserved
// calendar slot. Most legible, most on-brand.
// ─────────────────────────────────────────────────────────────
function LogoII({
  size = 400
}) {
  const id = 'II';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none"
  }, /*#__PURE__*/React.createElement(GoldDefs, {
    id: id
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-ring-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "140",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-bev-${id})`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "200",
    r: "58",
    fill: "none",
    stroke: `url(#g-shape-${id})`,
    strokeWidth: "26"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "200",
    r: "58",
    fill: "none",
    stroke: GOLD_EDGE,
    strokeWidth: "2",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "200",
    r: "44",
    fill: "none",
    stroke: GOLD_EDGE,
    strokeWidth: "1.5",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 120 H285 V260 L252 232 L220 260 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "232",
    y: "155",
    width: "42",
    height: "10",
    rx: "2",
    fill: "#fff",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "232",
    y: "180",
    width: "28",
    height: "8",
    rx: "2",
    fill: "#fff",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "232",
    y: "201",
    width: "20",
    height: "8",
    rx: "2",
    fill: "#fff",
    opacity: "0.35"
  }));
}

// ─────────────────────────────────────────────────────────────
// Variant III — "Open page"
// Gold ring contains a stacked book-spread pictogram. Two angled
// gold pages form an upward chevron (like OpenHouse's roof arrow),
// a horizontal gold bar below = a booked time-slot on the page.
// Same structural DNA as the OH logo.
// ─────────────────────────────────────────────────────────────
function LogoIII({
  size = 400
}) {
  const id = 'III';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none"
  }, /*#__PURE__*/React.createElement(GoldDefs, {
    id: id
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-ring-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "140",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-bev-${id})`
  }), /*#__PURE__*/React.createElement("path", {
    d: "M200 80 L280 160 L258 182 L200 130 L142 182 L120 160 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 190 L200 165 L200 260 L118 240 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M282 190 L200 165 L200 260 L282 240 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "200",
    y: "275",
    width: "70",
    height: "14",
    rx: "2",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "130",
    y: "275",
    width: "70",
    height: "14",
    rx: "2",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "2.5",
    opacity: "0.5"
  }));
}

// ─────────────────────────────────────────────────────────────
// Variant IV — "Open B"
// A bold uppercase B with the vertical spine split open — the
// two lobes swing outward like an opening book. Set inside the
// gold ring. Most literal read of "open" + "book".
// ─────────────────────────────────────────────────────────────
function LogoIV({
  size = 400
}) {
  const id = 'IV';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none"
  }, /*#__PURE__*/React.createElement(GoldDefs, {
    id: id
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-ring-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "140",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "200",
    r: "180",
    fill: `url(#g-bev-${id})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: "193",
    y: "90",
    width: "14",
    height: "220",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M193 100 L130 110 L110 200 L193 190 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M193 210 L110 200 L130 290 L193 300 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M207 100 L270 110 L290 200 L207 190 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M207 210 L290 200 L270 290 L207 300 Z",
    fill: `url(#g-shape-${id})`,
    stroke: GOLD_EDGE,
    strokeWidth: "3"
  }));
}
Object.assign(window, {
  GOLD_TOP,
  GOLD_MID,
  GOLD_BOT,
  GOLD_EDGE,
  BLACK,
  IVORY,
  LogoI,
  LogoII,
  LogoIII,
  LogoIV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r3-logos.jsx", error: String((e && e.message) || e) }); }

// logo/r4-app.jsx
try { (() => {
// R4 presentation — one logo, four moments.
// No variants, no grid, no "pick one of these". Proposed with conviction.

function Board({
  bg,
  children,
  label,
  width,
  height,
  padded = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(60,50,40,0.55)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      background: bg,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, children));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 80px 100px',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr',
      rowGap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter, sans-serif',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(60,50,40,0.55)'
    }
  }, "OpenBook \xB7 Identity"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: 36,
      fontWeight: 400,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
      maxWidth: 900,
      margin: 0,
      textWrap: 'balance',
      display: 'block',
      paddingBottom: 8
    }
  }, "A lowercase b. An empty bowl. One gold bar held inside."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 15,
      color: 'rgba(60,50,40,0.72)',
      lineHeight: 1.7,
      maxWidth: 640
    }
  }, "The bar is a reserved slot in time. When you book, a space is held. That is the entire product, drawn once. No badge, no container, no gradient. The wordmark is plain \u2014 Inter, unornamented. Meaning lives in the mark; the name lives in the word. They sit side by side in the lockup."));
}
function Moment1() {
  // The mark, large, on ivory. Just the object.
  return /*#__PURE__*/React.createElement(Board, {
    bg: IVORY,
    width: 640,
    height: 640
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 360
  }));
}
function Moment2() {
  // The wordmark, clean.
  return /*#__PURE__*/React.createElement(Board, {
    bg: PAPER,
    width: 640,
    height: 260
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 96
  }));
}
function Lockup_Light() {
  return /*#__PURE__*/React.createElement(Board, {
    bg: IVORY,
    width: 640,
    height: 320
  }, /*#__PURE__*/React.createElement(Lockup, {
    size: 80
  }));
}
function Lockup_Dark() {
  return /*#__PURE__*/React.createElement(Board, {
    bg: BLACK,
    width: 640,
    height: 320
  }, /*#__PURE__*/React.createElement(Lockup, {
    size: 80,
    onDark: true
  }));
}
function Moment4() {
  // App icon on an iPhone-ish home-screen tile.
  return /*#__PURE__*/React.createElement(Board, {
    bg: PAPER,
    width: 400,
    height: 400
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: 50,
      background: BLACK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(MarkOnDark, {
    size: 150
  })));
}
function Moment5() {
  // Favicon row — 48 / 24 / 16 — proof it survives.
  return /*#__PURE__*/React.createElement(Board, {
    bg: "#fff",
    width: 400,
    height: 400
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 48
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 24
  }), /*#__PURE__*/React.createElement(Mark, {
    size: 16
  })));
}
function Moment6() {
  // Website header — how it actually lives.
  return /*#__PURE__*/React.createElement(Board, {
    bg: "#fff",
    width: 640,
    height: 400,
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      background: '#efebe0',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      paddingLeft: 12,
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e06a5e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#e8b83c'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#5dc25a'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 20,
      fontSize: 10,
      color: 'rgba(0,0,0,0.45)',
      fontFamily: 'Inter'
    }
  }, "openbook.ie")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 12,
      fontFamily: 'Inter',
      color: 'rgba(0,0,0,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "For businesses"), /*#__PURE__*/React.createElement("span", null, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 14px',
      background: BLACK,
      color: '#fff',
      borderRadius: 7,
      fontWeight: 500
    }
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '24px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 600,
      color: BLACK,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      maxWidth: 460
    }
  }, "Your booking page,", /*#__PURE__*/React.createElement("br", null), "live in 15 minutes."))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f0eee9',
      fontFamily: 'Inter, sans-serif',
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 60,
      alignItems: 'flex-end',
      marginBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Moment1, null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: 22,
      fontWeight: 400,
      color: 'rgba(20,15,10,0.92)',
      letterSpacing: '-0.015em',
      marginBottom: 12
    }
  }, "The mark."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.65
    }
  }, "Stem and bowl on a 400-unit grid. The counter is an empty room; a single gold bar \u2014 22% of the bowl width \u2014 is the only thing held inside. That bar is the entire identity."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Moment2, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 120,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "Inter 700, tracking \u22120.045em, all-lowercase. No ornament. The wordmark carries the name; the mark carries the concept. They live beside each other.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Lockup_Light, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 120,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "The primary lockup. Mark set 1.3\xD7 wordmark height, gap 0.28\xD7 \u2014 tuned so the b of the wordmark echoes the b of the mark without competing with it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Lockup_Dark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 120,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "On black the b inverts; the gold bar holds. Default for OpenBook Business dashboard.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Moment4, null), /*#__PURE__*/React.createElement(Moment5, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 120,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "App icon: black tile, mark centred, nothing else. At 16px the gold bar is still visible against the counter \u2014 the silhouette test passes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Moment6, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(60,50,40,0.68)',
      lineHeight: 1.6
    }
  }, "In situ. The lockup at 20px \u2014 mark + wordmark \u2014 sets the tone without overpowering the nav. The mark's gold bar is the only coloured pixel in the whole header."))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r4-app.jsx", error: String((e && e.message) || e) }); }

// logo/r4-mark.jsx
try { (() => {
// OpenBook — Ive-principled logo
// One idea: the lowercase 'b' whose bowl holds a single reserved slot.
// Black letter. Gold bar. Nothing else.

const GOLD = '#D4AF37';
const BLACK = '#080808';
const IVORY = '#faf7ef';
const PAPER = '#f0ece1';

// The mark. A single lowercase b, 400x400 canvas.
// The gold bar inside the empty bowl is a reserved slot in time.
function Mark({
  size = 400,
  fg = BLACK,
  accent = GOLD,
  counterBg = IVORY
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "OpenBook"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "96",
    y: "40",
    width: "38",
    height: "320",
    fill: fg
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "232",
    cy: "248",
    r: "112",
    fill: fg
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "232",
    cy: "248",
    r: "74",
    fill: counterBg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "96",
    y: "210",
    width: "38",
    height: "76",
    fill: fg
  }), /*#__PURE__*/React.createElement("rect", {
    x: "188",
    y: "244",
    width: "88",
    height: "8",
    rx: "1",
    fill: accent
  }));
}
function MarkOnDark({
  size = 400,
  bgFallback = BLACK
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 400 400",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "96",
    y: "40",
    width: "38",
    height: "320",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "232",
    cy: "248",
    r: "112",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "232",
    cy: "248",
    r: "74",
    fill: bgFallback
  }), /*#__PURE__*/React.createElement("rect", {
    x: "96",
    y: "210",
    width: "38",
    height: "76",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "188",
    y: "244",
    width: "88",
    height: "8",
    rx: "1",
    fill: GOLD
  }));
}

// Wordmark — plain. No ornament. The mark carries the concept;
// the wordmark carries the name. They sit side-by-side in the lockup.
function Wordmark({
  size = 64,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      lineHeight: 1,
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.045em',
      fontSize: size,
      color,
      fontFeatureSettings: '"cv11", "ss01", "ss02"'
    }
  }, "openbook");
}
function WordmarkOnDark({
  size = 64
}) {
  return /*#__PURE__*/React.createElement(Wordmark, {
    size: size,
    color: "#fff"
  });
}

// Horizontal lockup — mark + wordmark, optically aligned.
function Lockup({
  size = 88,
  onDark = false,
  bg
}) {
  const markSize = size * 1.3;
  const counterBg = bg || (onDark ? BLACK : IVORY);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28
    }
  }, onDark ? /*#__PURE__*/React.createElement(MarkOnDark, {
    size: markSize,
    bgFallback: counterBg
  }) : /*#__PURE__*/React.createElement(Mark, {
    size: markSize,
    counterBg: counterBg
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: size,
    color: onDark ? '#fff' : BLACK
  }));
}
Object.assign(window, {
  Mark,
  MarkOnDark,
  Wordmark,
  WordmarkOnDark,
  Lockup,
  GOLD,
  BLACK,
  IVORY,
  PAPER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/r4-mark.jsx", error: String((e && e.message) || e) }); }

// logo/wordmarks.jsx
try { (() => {
// Wordmarks — one per direction, tuned to its mark
// All use Inter (system default via CSS); custom kerning per direction

function WM({
  children,
  weight = 600,
  tracking = '-0.03em',
  size = 36,
  color = BLACK,
  serif = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: serif ? '"Source Serif 4", Georgia, serif' : 'Inter, sans-serif',
      fontWeight: weight,
      letterSpacing: tracking,
      fontSize: size,
      color,
      lineHeight: 1,
      fontFeatureSettings: '"cv11", "ss01"',
      ...style
    }
  }, children);
}

// D1 — "openbook" all lowercase, tight geometric
function WordmarkBook({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    size: size,
    color: color,
    weight: 600,
    tracking: "-0.035em"
  }, "openbook");
}

// D2 — "OpenBook" camelCase, sharp
function WordmarkOB({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    size: size,
    color: color,
    weight: 600,
    tracking: "-0.03em"
  }, "OpenBook");
}

// D3 — "openbook" with a monospace undertone (caption layer)
function WordmarkSlot({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    size: size,
    color: color,
    weight: 500,
    tracking: "-0.02em"
  }, "openbook");
}

// D4 — Serif editorial, "Openbook"
function WordmarkSerif({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    serif: true,
    size: size,
    color: color,
    weight: 500,
    tracking: "-0.015em"
  }, "Openbook");
}

// D5 — "OPEN BOOK" allcaps, wide tracking
function WordmarkThreshold({
  size = 22,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    size: size,
    color: color,
    weight: 600,
    tracking: "0.22em"
  }, "OPEN\xA0BOOK");
}

// D6 — "openbook" with a mid-weight humanist tone
function WordmarkSignal({
  size = 36,
  color = BLACK
}) {
  return /*#__PURE__*/React.createElement(WM, {
    size: size,
    color: color,
    weight: 500,
    tracking: "-0.025em"
  }, "openbook");
}
Object.assign(window, {
  WM,
  WordmarkBook,
  WordmarkOB,
  WordmarkSlot,
  WordmarkSerif,
  WordmarkThreshold,
  WordmarkSignal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo/wordmarks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-business/App.jsx
try { (() => {
function BusinessApp() {
  const [cmd, setCmd] = useState(false);
  React.useEffect(() => {
    const h = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmd(c => !c);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#0b0c0f',
      color: '#eef2f8',
      fontFamily: 'Inter, sans-serif',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(DSidebar, {
    active: "Overview"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      padding: 28,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px Inter',
      color: '#778199',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Murphy's Barbers \xB7 Cork"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px Inter',
      color: '#eef2f8',
      letterSpacing: '-0.02em'
    }
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DarkButton, {
    variant: "dark",
    size: "md",
    onClick: () => setCmd(true)
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "search",
    size: 13
  }), " Search ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px Inter',
      padding: '1px 5px',
      borderRadius: 4,
      background: '#1e2531',
      marginLeft: 4,
      color: '#778199'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(DarkButton, {
    variant: "primary",
    size: "md"
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "plus",
    size: 13,
    color: "#080808"
  }), " New booking"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Bookings today",
    value: "18",
    delta: "+4 vs Tue",
    sparkline: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Revenue (MTD)",
    value: "\u20AC4,215",
    delta: "+12.3%",
    sparkline: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "MCP bookings",
    value: "7",
    delta: "39% of today",
    sparkline: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg rating",
    value: "4.9"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BookingsTable, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1115',
      border: '1px solid rgba(212,175,55,.25)',
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#10b981',
      boxShadow: '0 0 10px #10b981'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px Inter',
      color: '#D4AF37',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "MCP server \xB7 live")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px "JetBrains Mono", monospace',
      color: '#9ca8bc',
      background: '#0b0c0f',
      padding: '8px 10px',
      borderRadius: 6,
      border: '1px solid #1e2531',
      marginBottom: 10
    }
  }, "mcp.openbook.ie/murphys-cork"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px Inter',
      color: '#9ca8bc',
      lineHeight: 1.6
    }
  }, "Discovered by 3 agents this week. 7 bookings generated, \u20AC205 revenue."), /*#__PURE__*/React.createElement(DarkButton, {
    variant: "ghost",
    size: "sm",
    style: {
      marginTop: 10,
      padding: 0,
      color: '#D4AF37'
    }
  }, "View MCP analytics ", /*#__PURE__*/React.createElement(DIcon, {
    name: "arrow",
    size: 11,
    color: "#D4AF37"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1115',
      border: '1px solid #1e2531',
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px Inter',
      color: '#eef2f8',
      marginBottom: 12
    }
  }, "Top services"), [{
    name: 'Men\'s cut',
    ct: 62,
    rev: '€1,550'
  }, {
    name: 'Fade + beard',
    ct: 28,
    rev: '€1,064'
  }, {
    name: 'Colour',
    ct: 9,
    rev: '€765'
  }, {
    name: 'Hot towel shave',
    ct: 12,
    rev: '€360'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderBottom: '1px solid #12151b'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px Inter',
      color: '#eef2f8'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px Inter',
      color: '#778199'
    }
  }, s.ct), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px "JetBrains Mono", monospace',
      color: '#D4AF37'
    }
  }, s.rev)))))))), /*#__PURE__*/React.createElement(CommandPalette, {
    open: cmd,
    onClose: () => setCmd(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(BusinessApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-business/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-business/Dashboard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  sparkline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1115',
      border: '1px solid #1e2531',
      borderRadius: 12,
      padding: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px Inter',
      color: '#778199',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px "JetBrains Mono", monospace',
      color: '#eef2f8',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px Inter',
      color: '#34d399',
      marginTop: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "up",
    size: 10,
    color: "#34d399"
  }), " ", delta), sparkline && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 28",
    style: {
      position: 'absolute',
      bottom: 10,
      right: 14,
      width: 88,
      height: 28,
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: "#D4AF37",
    strokeWidth: "1.4",
    points: "0,22 12,18 24,20 36,12 48,15 60,8 72,10 84,4 96,6"
  })));
}
function BookingsTable() {
  const rows = [{
    t: '09:00',
    svc: 'Men\'s cut',
    client: 'Conor Walsh',
    price: '€25',
    src: 'MCP · Claude',
    tone: 'gold'
  }, {
    t: '09:30',
    svc: 'Beard trim',
    client: 'Niamh Byrne',
    price: '€18',
    src: 'Direct',
    tone: 'neutral'
  }, {
    t: '10:00',
    svc: 'Fade + beard',
    client: 'David Moran',
    price: '€38',
    src: 'MCP · ChatGPT',
    tone: 'gold'
  }, {
    t: '10:45',
    svc: 'Colour',
    client: 'Aoife Doyle',
    price: '€85',
    src: 'Direct',
    tone: 'neutral'
  }, {
    t: '11:30',
    svc: 'Kids cut',
    client: 'Sean Murphy',
    price: '€15',
    src: 'Walk-in',
    tone: 'neutral'
  }, {
    t: '12:15',
    svc: 'Men\'s cut',
    client: 'Mark Kelly',
    price: '€25',
    src: 'MCP · Gemini',
    tone: 'gold'
  }, {
    t: '13:00',
    svc: 'Hot towel shave',
    client: 'Paul Ryan',
    price: '€30',
    src: 'Direct',
    tone: 'neutral'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0f1115',
      border: '1px solid #1e2531',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid #1e2531',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#eef2f8'
    }
  }, "Today \u2014 Wed 17 Apr"), /*#__PURE__*/React.createElement(DBadge, {
    tone: "success"
  }, "18 bookings"), /*#__PURE__*/React.createElement(DBadge, {
    tone: "gold"
  }, "7 via MCP")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(DarkButton, {
    variant: "dark",
    size: "sm"
  }, "Day"), /*#__PURE__*/React.createElement(DarkButton, {
    variant: "ghost",
    size: "sm"
  }, "Week"), /*#__PURE__*/React.createElement(DarkButton, {
    variant: "ghost",
    size: "sm"
  }, "Month"))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Time', 'Service', 'Customer', 'Price', 'Source', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      font: '500 10px Inter',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: '#778199',
      textAlign: 'left',
      padding: '8px 16px',
      borderBottom: '1px solid #1e2531',
      background: '#0b0c0f'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      cursor: 'pointer'
    },
    onMouseOver: e => e.currentTarget.style.background = 'rgba(255,255,255,.02)',
    onMouseOut: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b',
      font: '500 13px "JetBrains Mono", monospace',
      color: '#eef2f8'
    }
  }, r.t), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b',
      font: '400 13px Inter',
      color: '#eef2f8'
    }
  }, r.svc), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b',
      font: '400 13px Inter',
      color: '#9ca8bc'
    }
  }, r.client), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b',
      font: '500 13px "JetBrains Mono", monospace',
      color: '#eef2f8',
      textAlign: 'left'
    }
  }, r.price), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b'
    }
  }, /*#__PURE__*/React.createElement(DBadge, {
    tone: r.tone
  }, r.tone === 'gold' && /*#__PURE__*/React.createElement(DIcon, {
    name: "bolt",
    size: 10,
    color: "#D4AF37"
  }), " ", r.src)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid #12151b',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "dot3",
    size: 16,
    color: "#778199"
  })))))));
}
function CommandPalette({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,8,8,.6)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 560,
      background: '#12151b',
      border: '1px solid #1e2531',
      borderRadius: 14,
      boxShadow: '0 24px 60px rgba(0,0,0,.6)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderBottom: '1px solid #1e2531',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "search",
    size: 16,
    color: "#778199"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Type a command or search\u2026",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      font: '400 14px Inter',
      color: '#eef2f8'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px Inter',
      padding: '2px 6px',
      borderRadius: 4,
      background: '#1e2531',
      color: '#778199'
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6
    }
  }, [{
    icon: 'plus',
    label: 'Create booking',
    hint: 'B'
  }, {
    icon: 'calendar',
    label: 'Go to today',
    hint: 'T'
  }, {
    icon: 'bolt',
    label: 'Preview MCP response',
    hint: 'M',
    gold: true
  }, {
    icon: 'users',
    label: 'Add customer',
    hint: 'C'
  }, {
    icon: 'link',
    label: 'Copy booking page link',
    hint: '⇧L'
  }].map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: i.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 8,
      background: idx === 0 ? 'rgba(212,175,55,.08)' : 'transparent',
      color: i.gold ? '#D4AF37' : '#eef2f8',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: i.icon,
    size: 14,
    color: i.gold ? '#D4AF37' : '#9ca8bc'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '400 13px Inter'
    }
  }, i.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px Inter',
      padding: '2px 6px',
      borderRadius: 4,
      background: '#1e2531',
      color: '#778199'
    }
  }, i.hint))))));
}
Object.assign(window, {
  StatCard,
  BookingsTable,
  CommandPalette
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-business/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-business/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

// ───── Dark theme primitives ─────
function DarkButton({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)'
  };
  const sizes = {
    sm: {
      padding: '4px 10px',
      fontSize: 12,
      borderRadius: 8
    },
    md: {
      padding: '6px 14px',
      fontSize: 13,
      borderRadius: 10
    }
  };
  const variants = {
    primary: {
      background: '#D4AF37',
      color: '#080808',
      borderColor: 'rgba(212,175,55,.4)',
      fontWeight: 600
    },
    dark: {
      background: '#161a22',
      color: '#eef2f8',
      borderColor: '#1e2531'
    },
    ghost: {
      background: 'transparent',
      color: '#9ca8bc',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
function DIcon({
  name,
  size = 14,
  color = 'currentColor'
}) {
  const p = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12l9-9 9 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10v10h14V10"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 4 4 5-7"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m10 0h6M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 16.5L21 21"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7"
    })),
    cmd: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"
    })),
    sparkle: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"
    })),
    up: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 19V5M5 12l7-7 7 7"
    })),
    dot3: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.5",
      fill: color
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.5",
      fill: color
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.5",
      fill: color
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    })),
    bolt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M13 2L3 14h9l-1 8 10-12h-9z"
    })),
    link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p[name]);
}
function DBadge({
  tone = 'neutral',
  children
}) {
  const tones = {
    gold: {
      bg: 'rgba(212,175,55,.12)',
      fg: '#D4AF37'
    },
    success: {
      bg: 'rgba(16,185,129,.14)',
      fg: '#34d399'
    },
    error: {
      bg: 'rgba(239,68,68,.14)',
      fg: '#f87171'
    },
    warning: {
      bg: 'rgba(245,158,11,.14)',
      fg: '#fbbf24'
    },
    info: {
      bg: 'rgba(59,130,246,.14)',
      fg: '#60a5fa'
    },
    neutral: {
      bg: 'rgba(255,255,255,.06)',
      fg: '#9ca8bc'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '500 11px Inter',
      padding: '2px 8px',
      borderRadius: 6,
      background: t.bg,
      color: t.fg,
      letterSpacing: '.01em'
    }
  }, children);
}

// ───── Sidebar ─────
function DSidebar({
  active = 'Overview'
}) {
  const items = [{
    label: 'Overview',
    icon: 'home'
  }, {
    label: 'Bookings',
    icon: 'calendar',
    badge: '3'
  }, {
    label: 'Customers',
    icon: 'users'
  }, {
    label: 'Analytics',
    icon: 'chart'
  }, {
    label: 'MCP',
    icon: 'bolt',
    gold: true
  }, {
    label: 'Settings',
    icon: 'settings'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: '#0f1115',
      borderRight: '1px solid #1e2531',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'Inter, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 8px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: 'linear-gradient(135deg,#D4AF37,#8B6428)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 13px Inter',
      color: '#080808'
    }
  }, "O"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#eef2f8',
      letterSpacing: '-0.01em'
    }
  }, "OpenBook")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 10px',
      background: '#12151b',
      border: '1px solid #1e2531',
      borderRadius: 8,
      font: '400 12px Inter',
      color: '#778199',
      cursor: 'pointer',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "search",
    size: 13
  }), " Search"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px Inter',
      padding: '1px 5px',
      borderRadius: 4,
      background: '#1e2531'
    }
  }, "\u2318K")), items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      padding: '7px 10px',
      borderRadius: 7,
      background: active === i.label ? 'rgba(212,175,55,.08)' : 'transparent',
      border: active === i.label ? '1px solid rgba(212,175,55,.2)' : '1px solid transparent',
      color: active === i.label ? '#D4AF37' : i.gold ? '#D4AF37' : '#9ca8bc',
      font: active === i.label ? '500 13px Inter' : '400 13px Inter',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: i.icon,
    size: 14
  }), " ", i.label), i.badge && /*#__PURE__*/React.createElement(DBadge, {
    tone: "gold"
  }, i.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      border: '1px solid rgba(212,175,55,.2)',
      borderRadius: 10,
      background: 'linear-gradient(135deg,rgba(212,175,55,.08),transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(DIcon, {
    name: "bolt",
    size: 12,
    color: "#D4AF37"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px Inter',
      color: '#D4AF37',
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "MCP live")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px Inter',
      color: '#9ca8bc',
      lineHeight: 1.5
    }
  }, "Your business is discoverable by ChatGPT, Claude and Gemini.")));
}
Object.assign(window, {
  DarkButton,
  DIcon,
  DBadge,
  DSidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-business/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-consumer/App.jsx
try { (() => {
function TabBar({
  active = 'home',
  onChange
}) {
  const tabs = [{
    id: 'home',
    icon: 'home',
    label: 'Home'
  }, {
    id: 'search',
    icon: 'search',
    label: 'Explore'
  }, {
    id: 'bookings',
    icon: 'calendar',
    label: 'Bookings'
  }, {
    id: 'account',
    icon: 'user',
    label: 'Account'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 20,
      zIndex: 10,
      padding: '10px 8px',
      background: 'rgba(255,255,255,.75)',
      backdropFilter: 'blur(40px) saturate(200%)',
      border: '1px solid rgba(255,255,255,.7)',
      borderRadius: 28,
      boxShadow: '0 16px 40px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.5)',
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange(t.id),
    style: {
      flex: 1,
      padding: '6px 4px',
      background: 'transparent',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      cursor: 'pointer',
      color: active === t.id ? '#D4AF37' : 'rgba(0,0,0,.5)',
      transition: 'color 150ms'
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: t.icon,
    size: 20,
    color: active === t.id ? '#D4AF37' : 'rgba(0,0,0,.5)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px Inter'
    }
  }, t.label))));
}
function ConsumerApp() {
  const [screen, setScreen] = useState('home');
  const [biz, setBiz] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 10%, #ffe9a8, transparent 50%), radial-gradient(circle at 80% 90%, #f8d5e8, transparent 55%), #f3ecd8',
      fontFamily: 'Inter, sans-serif',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 55,
      background: '#0a0a0a',
      padding: 11,
      boxShadow: '0 40px 120px rgba(0,0,0,.3), 0 0 0 1px rgba(0,0,0,.1)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 44,
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(180deg, #fef3d0 0%, #fff 30%, #fff 60%, #fdf0f6 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 34,
      background: '#0a0a0a',
      borderRadius: 20,
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onPick: b => {
      setBiz(b);
      setScreen('business');
    }
  }), screen === 'business' && biz && /*#__PURE__*/React.createElement(BusinessScreen, {
    biz: biz,
    onBack: () => setScreen('home'),
    onBook: () => setScreen('confirm')
  }), screen === 'confirm' && biz && /*#__PURE__*/React.createElement(ConfirmScreen, {
    biz: biz,
    onDone: () => {
      setScreen('home');
      setBiz(null);
    }
  })), /*#__PURE__*/React.createElement(TabBar, {
    active: screen === 'business' || screen === 'confirm' ? 'home' : screen,
    onChange: s => {
      setScreen(s === 'home' ? 'home' : s);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 134,
      height: 5,
      background: 'rgba(0,0,0,.4)',
      borderRadius: 3,
      zIndex: 100
    }
  }))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
      `));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ConsumerApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-consumer/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-consumer/Business.jsx
try { (() => {
function BusinessScreen({
  biz,
  onBack,
  onBook
}) {
  const [slot, setSlot] = useState('14:30');
  const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];
  const services = [{
    name: "Men's cut",
    time: '30 min',
    price: '€25'
  }, {
    name: 'Beard trim',
    time: '15 min',
    price: '€18'
  }, {
    name: 'Fade + beard',
    time: '45 min',
    price: '€38'
  }, {
    name: 'Hot towel shave',
    time: '30 min',
    price: '€30'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 220,
      background: `linear-gradient(145deg, ${biz.color}, ${shade(biz.color, -25)})`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,.4), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 18,
      left: 16,
      width: 36,
      height: 36,
      borderRadius: 18,
      background: 'rgba(255,255,255,.3)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(255,255,255,.4)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: "back",
    size: 16,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 22,
      left: 20,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BizIcon, {
    color: biz.color,
    icon: biz.icon,
    size: 72
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px Inter',
      color: '#fff',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 8px rgba(0,0,0,.2)'
    }
  }, biz.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px Inter',
      color: 'rgba(255,255,255,.85)',
      marginTop: 2
    }
  }, biz.cat)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 22
    }
  }, [{
    icon: 'star',
    label: `${biz.rating} rating`
  }, {
    icon: 'clock',
    label: 'Open · 09–18'
  }, {
    icon: 'location',
    label: biz.dist
  }].map(p => /*#__PURE__*/React.createElement(GlassCard, {
    key: p.label,
    style: {
      padding: '10px 12px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: p.icon,
    size: 13,
    color: biz.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: '#080808',
      marginTop: 4
    }
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px Inter',
      color: 'rgba(0,0,0,.5)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Services"), /*#__PURE__*/React.createElement(GlassCard, {
    style: {
      padding: '4px 0',
      marginBottom: 22
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      padding: '14px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: i < services.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px Inter',
      color: '#080808'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px Inter',
      color: 'rgba(0,0,0,.5)',
      marginTop: 2
    }
  }, s.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px "JetBrains Mono", monospace',
      color: '#080808'
    }
  }, s.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px Inter',
      color: 'rgba(0,0,0,.5)',
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, "Today \xB7 Wed 17 Apr"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: biz.color
    }
  }, "Change date")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSlot(s),
    style: {
      padding: '11px 0',
      borderRadius: 12,
      cursor: 'pointer',
      font: '500 14px "JetBrains Mono", monospace',
      background: slot === s ? biz.color : 'rgba(255,255,255,.7)',
      color: slot === s ? '#fff' : '#080808',
      border: slot === s ? `1px solid ${biz.color}` : '1px solid rgba(255,255,255,.7)',
      backdropFilter: 'blur(24px)',
      boxShadow: slot === s ? `0 4px 14px ${biz.color}55` : '0 2px 8px rgba(0,0,0,.04)',
      transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 100,
      padding: 14,
      borderRadius: 20,
      background: 'rgba(255,255,255,.85)',
      backdropFilter: 'blur(32px) saturate(200%)',
      border: '1px solid rgba(255,255,255,.8)',
      boxShadow: '0 16px 48px rgba(0,0,0,.16)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px Inter',
      color: 'rgba(0,0,0,.55)'
    }
  }, "Men's cut \xB7 Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px Inter',
      color: '#080808'
    }
  }, slot, " \xB7 \u20AC25")), /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    style: {
      padding: '12px 22px',
      borderRadius: 14,
      cursor: 'pointer',
      background: biz.color,
      color: '#fff',
      border: 'none',
      font: '600 14px Inter',
      letterSpacing: '-0.005em',
      boxShadow: `0 6px 20px ${biz.color}66`,
      transition: 'transform 150ms'
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.95)',
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)'
  }, "Book now")));
}
function ConfirmScreen({
  biz,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: 32,
      background: `linear-gradient(145deg, ${biz.color}, ${shade(biz.color, -25)})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 16px 40px ${biz.color}55`,
      animation: 'pop 400ms cubic-bezier(0.16,1,0.3,1)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: "check",
    size: 44,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 26px Inter',
      letterSpacing: '-0.02em',
      color: '#080808',
      marginBottom: 6
    }
  }, "You're booked"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px Inter',
      color: 'rgba(0,0,0,.6)',
      lineHeight: 1.6,
      maxWidth: 280
    }
  }, "Men's cut at ", biz.name, ", today at 14:30. We've sent a confirmation to your email."), /*#__PURE__*/React.createElement(GlassCard, {
    style: {
      padding: 18,
      width: '100%',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px Inter',
      color: 'rgba(0,0,0,.55)'
    }
  }, "Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px Inter',
      color: '#080808'
    }
  }, "Men's cut")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px Inter',
      color: 'rgba(0,0,0,.55)'
    }
  }, "When"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px "JetBrains Mono"',
      color: '#080808'
    }
  }, "Wed 17 Apr \xB7 14:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px Inter',
      color: 'rgba(0,0,0,.55)'
    }
  }, "Where"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px Inter',
      color: '#080808'
    }
  }, biz.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 12,
      borderTop: '1px solid rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px Inter',
      color: '#080808'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px "JetBrains Mono"',
      color: '#080808'
    }
  }, "\u20AC25.00"))), /*#__PURE__*/React.createElement("button", {
    onClick: onDone,
    style: {
      marginTop: 24,
      padding: '13px 28px',
      borderRadius: 14,
      cursor: 'pointer',
      background: '#080808',
      color: '#fff',
      border: 'none',
      font: '600 14px Inter',
      width: '100%'
    }
  }, "Add to calendar"));
}
Object.assign(window, {
  BusinessScreen,
  ConfirmScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-consumer/Business.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-consumer/Home.jsx
try { (() => {
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 54,
      padding: '0 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      font: '600 16px "SF Pro", Inter',
      color: '#080808'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: "#080808"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 2h2v9h-2z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    stroke: "#080808",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5a9 9 0 0112 0M5 7.5a5 5 0 016 0M8 10v.5"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "12",
    viewBox: "0 0 26 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2",
    width: "22",
    height: "8",
    rx: "2",
    stroke: "#080808",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "14",
    height: "4",
    fill: "#080808"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "24",
    y: "4",
    width: "1.5",
    height: "4",
    rx: ".5",
    fill: "#080808"
  }))));
}
function HomeScreen({
  onPick
}) {
  const recent = [{
    id: 'murphys',
    name: "Murphy's Barbers",
    cat: 'Barbershop · Cork',
    color: '#D4AF37',
    icon: 'scissors',
    rating: 4.9,
    dist: '0.4 km'
  }, {
    id: 'fitcork',
    name: 'FitCork Gym',
    cat: 'Gym · Douglas',
    color: '#ef4444',
    icon: 'dumbbell',
    rating: 4.7,
    dist: '1.2 km'
  }, {
    id: 'soleil',
    name: 'Soleil Hair',
    cat: 'Hair salon · Patrick',
    color: '#ec4899',
    icon: 'sparkles',
    rating: 4.8,
    dist: '0.8 km'
  }, {
    id: 'wellspa',
    name: 'Wellspring Spa',
    cat: 'Spa · Blackrock',
    color: '#8b5cf6',
    icon: 'heart',
    rating: 4.9,
    dist: '2.1 km'
  }];
  const cats = [{
    label: 'Barbershops',
    icon: 'scissors',
    color: '#D4AF37'
  }, {
    label: 'Gyms',
    icon: 'dumbbell',
    color: '#ef4444'
  }, {
    label: 'Salons',
    icon: 'sparkles',
    color: '#ec4899'
  }, {
    label: 'Spas',
    icon: 'heart',
    color: '#8b5cf6'
  }, {
    label: 'Driving',
    icon: 'car',
    color: '#3b82f6'
  }, {
    label: 'Physios',
    icon: 'heart',
    color: '#10b981'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px Inter',
      color: 'rgba(0,0,0,.55)'
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: "location",
    size: 12,
    color: "rgba(0,0,0,.55)"
  }), " Cork, Ireland"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px Inter',
      letterSpacing: '-0.02em',
      color: '#080808',
      marginTop: 2
    }
  }, "Good evening, Julia")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#D4AF37,#8B6428)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 14px Inter',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(212,175,55,.3)'
    }
  }, "JD")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '13px 18px',
      background: 'rgba(255,255,255,.7)',
      backdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.7)',
      borderRadius: 16,
      boxShadow: '0 4px 16px rgba(0,0,0,.06)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: "search",
    size: 18,
    color: "rgba(0,0,0,.4)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Barber near me tomorrow at 6pm",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: '400 15px Inter',
      color: '#080808'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px Inter',
      color: 'rgba(0,0,0,.5)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Browse"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginBottom: 26
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.label,
    style: {
      background: 'transparent',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BizIcon, {
    color: c.color,
    icon: c.icon,
    size: 58
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: '#080808'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px Inter',
      color: 'rgba(0,0,0,.5)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Recent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, recent.map(b => /*#__PURE__*/React.createElement("button", {
    key: b.id,
    onClick: () => onPick(b),
    style: {
      background: 'rgba(255,255,255,.7)',
      backdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.7)',
      borderRadius: 18,
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textAlign: 'left',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0,0,0,.04)',
      transition: 'transform 150ms'
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.97)',
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement(BizIcon, {
    color: b.color,
    icon: b.icon,
    size: 54
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px Inter',
      color: '#080808',
      letterSpacing: '-0.005em'
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px Inter',
      color: 'rgba(0,0,0,.55)',
      marginTop: 2
    }
  }, b.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px Inter',
      color: '#080808',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(GIcon, {
    name: "star",
    size: 11,
    color: "#D4AF37"
  }), " ", b.rating), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px Inter',
      color: 'rgba(0,0,0,.5)'
    }
  }, b.dist))), /*#__PURE__*/React.createElement(GIcon, {
    name: "chev",
    size: 16,
    color: "rgba(0,0,0,.3)"
  })))));
}
Object.assign(window, {
  StatusBar,
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-consumer/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openbook-consumer/Primitives.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function GIcon({
  name,
  size = 22,
  color = '#fff'
}) {
  const p = {
    scissors: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
    })),
    dumbbell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6.5 6.5h11v11h-11z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9v6M21 9v6M6.5 10h11v4h-11z"
    })),
    sparkles: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
    })),
    heart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    })),
    car: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 13l2-6h14l2 6v7h-3v-2H6v2H3z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "17.5",
      r: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.5",
      cy: "17.5",
      r: "1.5"
    })),
    location: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 16.5L21 21"
    })),
    star: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
      points: "12,2 15,9 22,9.3 17,14 19,21 12,17 5,21 7,14 2,9.3 9,9"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2"
    })),
    chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 18l6-6-6-6"
    })),
    back: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M15 18l-6-6 6-6"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    })),
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12l9-9 9 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10v10h14V10"
    })),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21v-1a8 8 0 0116 0v1"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, p[name]);
}

// ───── Glass card ─────
function GlassCard({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.72)',
      backdropFilter: 'blur(32px) saturate(180%)',
      WebkitBackdropFilter: 'blur(32px) saturate(180%)',
      border: '1px solid rgba(255,255,255,.6)',
      borderRadius: 22,
      boxShadow: '0 8px 32px rgba(0,0,0,.08), inset 0 1px 0 rgba(255,255,255,.5)',
      ...style
    }
  }, children);
}

// Per-business gradient glass icon (iOS 26 liquid-glass)
function BizIcon({
  color,
  icon,
  size = 64
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.28,
      background: `linear-gradient(145deg, ${color}, ${shade(color, -18)})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxShadow: `0 8px 24px ${color}55, inset 0 1px 0 rgba(255,255,255,.45), inset 0 -1px 0 rgba(0,0,0,.15)`,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      background: 'linear-gradient(145deg, rgba(255,255,255,.35), transparent 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(GIcon, {
    name: icon,
    size: size * 0.48,
    color: "#fff"
  }));
}
function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + Math.round(255 * pct / 100)));
  const g = Math.max(0, Math.min(255, (n >> 8 & 0xff) + Math.round(255 * pct / 100)));
  const b = Math.max(0, Math.min(255, (n & 0xff) + Math.round(255 * pct / 100)));
  return '#' + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}
Object.assign(window, {
  GIcon,
  GlassCard,
  BizIcon,
  shade
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openbook-consumer/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openhouse/App.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = useState('sam@evolvai.ie');
  const [pw, setPw] = useState('••••••••••');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      padding: 36,
      boxShadow: '0 4px 20px rgba(212,175,55,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/openhouse-mark-gold.png",
    style: {
      width: 56,
      height: 56
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 22px Inter',
      letterSpacing: '-0.01em',
      color: '#111827',
      textAlign: 'center',
      marginBottom: 6
    }
  }, "Sign in to OpenHouse AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px Inter',
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: 28
    }
  }, "Developer portal \xB7 portal.openhouseai.ie"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onLogin,
    style: {
      marginTop: 6
    }
  }, "Sign in ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px Inter',
      color: '#9ca3af',
      textAlign: 'center',
      marginTop: 20
    }
  }, "OpenHouse AI Limited \xB7 Cork, Ireland")));
}
function DashboardScreen({
  onOpenUnit
}) {
  const units = [{
    id: '14A',
    type: '3-bed semi',
    buyer: 'J. Murphy',
    handover: '14 Jun 2026',
    status: 'Confirmed',
    tone: 'success'
  }, {
    id: '14B',
    type: '3-bed semi',
    buyer: "S. O'Brien",
    handover: '21 Jun 2026',
    status: 'Snag open',
    tone: 'warning'
  }, {
    id: '15A',
    type: '4-bed detached',
    buyer: 'Available',
    handover: '—',
    status: 'Available',
    tone: 'neutral'
  }, {
    id: '15B',
    type: '4-bed detached',
    buyer: 'R. Kelly',
    handover: '28 Jun 2026',
    status: 'Reserved',
    tone: 'info'
  }, {
    id: '16A',
    type: '2-bed apt',
    buyer: 'M. Doyle',
    handover: '05 Jul 2026',
    status: 'Confirmed',
    tone: 'success'
  }, {
    id: '16B',
    type: '2-bed apt',
    buyer: 'P. Ryan',
    handover: '12 Jul 2026',
    status: 'Overdue',
    tone: 'error'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f9fafb'
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: '#6b7280',
      marginBottom: 4
    }
  }, "Riverside Gardens"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 32px Inter',
      letterSpacing: '-0.02em',
      color: '#111827'
    }
  }, "Development overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file",
    size: 14
  }), " Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    color: "#fff"
  }), " New unit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "Units reserved",
    value: "48 / 72",
    delta: "+12 this week",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "MRR",
    value: "\u20AC24,840",
    delta: "8.3%",
    deltaTone: "up",
    accent: true
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Open snags",
    value: "17",
    delta: "3 resolved",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "Avg handover",
    value: "14d",
    delta: "2d faster",
    deltaTone: "up"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px Inter',
      color: '#111827'
    }
  }, "Units"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "All \xB7 72"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Confirmed \xB7 31"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Snag \xB7 8"), /*#__PURE__*/React.createElement(Badge, {
    tone: "error"
  }, "Overdue \xB7 2"))), /*#__PURE__*/React.createElement(UnitsTable, {
    units: units,
    onSelect: onOpenUnit
  })));
}
function UnitScreen({
  onBack
}) {
  const unit = {
    title: 'Unit 14A',
    subtitle: '3-bed semi-detached · 112 m² · South-facing garden',
    status: 'Confirmed',
    tone: 'success',
    stats: [{
      label: 'Price',
      value: '€485,000'
    }, {
      label: 'Reserved by',
      value: 'J. Murphy'
    }, {
      label: 'Deposit',
      value: '€48,500',
      mono: true
    }, {
      label: 'Handover',
      value: '14 Jun 2026',
      mono: true
    }],
    steps: [{
      n: 1,
      title: 'Contract signed',
      detail: 'Both parties executed',
      date: '02 Mar 2026',
      status: 'done'
    }, {
      n: 2,
      title: 'Deposit received',
      detail: '10% paid via bank transfer',
      date: '05 Mar 2026',
      status: 'done'
    }, {
      n: 3,
      title: 'Snag inspection',
      detail: '3 items raised, 2 resolved',
      date: '14 May 2026',
      status: 'active'
    }, {
      n: 4,
      title: 'Final walkthrough',
      detail: 'Scheduled with purchaser',
      date: '10 Jun 2026',
      status: 'pending'
    }, {
      n: 5,
      title: 'Keys handed over',
      detail: 'Completion + welcome pack',
      date: '14 Jun 2026',
      status: 'pending'
    }]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#f9fafb'
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'transparent',
      border: 'none',
      font: '500 13px Inter',
      color: '#6b7280',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      marginBottom: 18
    }
  }, "\u2190 Back to development"), /*#__PURE__*/React.createElement(UnitProfile, {
    unit: unit
  })));
}
function PurchaserPortal({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#080808,#1a1a1a)',
      color: '#fff',
      padding: '14px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/openhouse-mark-gold.png",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#fff'
    }
  }, "Riverside Gardens \xB7 Purchaser portal")), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,.15)',
      color: '#d1d5db',
      padding: '6px 12px',
      borderRadius: 8,
      font: '500 12px Inter',
      cursor: 'pointer'
    }
  }, "Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      padding: '36px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: '#6b7280',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, "Good evening, Julia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Source Serif 4, Georgia, serif',
      font: '600 36px/1.1 Source Serif 4',
      letterSpacing: '-0.01em',
      color: '#111827'
    }
  }, "Your new home is 27 days away."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px Inter',
      color: '#6b7280',
      marginTop: 10,
      maxWidth: 560
    }
  }, "Unit 14A at Riverside Gardens. Snag inspection completed. Final walkthrough scheduled for 10 June."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 2px 12px rgba(12,12,12,.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#111827',
      marginBottom: 18
    }
  }, "Handover timeline"), [{
    n: 1,
    title: 'Contract signed',
    detail: 'Executed by both parties',
    date: '02 Mar 2026',
    status: 'done'
  }, {
    n: 2,
    title: 'Deposit received',
    detail: '€48,500 cleared',
    date: '05 Mar 2026',
    status: 'done'
  }, {
    n: 3,
    title: 'Snag inspection',
    detail: 'Completed, punch list shared',
    date: '14 May 2026',
    status: 'done'
  }, {
    n: 4,
    title: 'Final walkthrough',
    detail: 'Confirm details on portal',
    date: '10 Jun 2026',
    status: 'active'
  }, {
    n: 5,
    title: 'Keys handed over',
    detail: 'Welcome pack provided',
    date: '14 Jun 2026',
    status: 'pending'
  }].map((s, i, a) => /*#__PURE__*/React.createElement(TimelineStep, {
    key: s.n,
    step: s,
    last: i === a.length - 1
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#080808,#1a1a1a)',
      color: '#fff',
      border: '1px solid rgba(212,175,55,.2)',
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "key",
    size: 18,
    color: "#D4AF37"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px Inter',
      color: '#D4AF37',
      marginTop: 10
    }
  }, "Welcome pack"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px Inter',
      color: '#9ca3af',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "Warranties, manuals, utility accounts. Ready day of handover.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#111827',
      marginBottom: 10
    }
  }, "Ask the property assistant"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "How do I register my appliance warranties?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    style: {
      marginTop: 10,
      width: '100%'
    }
  }, "Send question"))))));
}
function App() {
  const [screen, setScreen] = useState('login');
  if (screen === 'login') return /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setScreen('dashboard')
  });
  if (screen === 'dashboard') return /*#__PURE__*/React.createElement(DashboardScreen, {
    onOpenUnit: () => setScreen('unit')
  });
  if (screen === 'unit') return /*#__PURE__*/React.createElement(UnitScreen, {
    onBack: () => setScreen('dashboard')
  });
  if (screen === 'purchaser') return /*#__PURE__*/React.createElement(PurchaserPortal, {
    onBack: () => setScreen('dashboard')
  });
  return null;
}

// Tiny nav so the preview lets reviewers cycle screens
function Shell() {
  const [screen, setScreen] = useState('dashboard');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 14,
      right: 14,
      zIndex: 100,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(20px)',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 6,
      display: 'flex',
      gap: 4,
      boxShadow: '0 8px 24px rgba(0,0,0,.08)'
    }
  }, ['login', 'dashboard', 'unit', 'purchaser'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setScreen(s),
    style: {
      padding: '6px 12px',
      font: '500 12px Inter',
      background: screen === s ? '#111827' : 'transparent',
      color: screen === s ? '#fff' : '#6b7280',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, s))), screen === 'login' && /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setScreen('dashboard')
  }), screen === 'dashboard' && /*#__PURE__*/React.createElement(DashboardScreen, {
    onOpenUnit: () => setScreen('unit')
  }), screen === 'unit' && /*#__PURE__*/React.createElement(UnitScreen, {
    onBack: () => setScreen('dashboard')
  }), screen === 'purchaser' && /*#__PURE__*/React.createElement(PurchaserPortal, {
    onBack: () => setScreen('dashboard')
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Shell, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openhouse/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openhouse/Dashboard.jsx
try { (() => {
function TopBar({
  user = 'sam@evolvai.ie',
  role = 'developer',
  onLogout
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#080808',
      borderBottom: '1px solid rgba(212,175,55,.2)',
      padding: '0 24px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/openhouse-mark-gold.png",
    style: {
      width: 28,
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px Inter',
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg,#e8c547,#b88a18)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, "OpenHouse AI")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 0
    }
  }, ['Dashboard', 'Developments', 'Units', 'Purchasers', 'Care'].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      padding: '22px 16px',
      font: '500 13px Inter',
      color: i === 0 ? '#fff' : '#9ca3af',
      borderBottom: i === 0 ? '2px solid #D4AF37' : '2px solid transparent',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: "#9ca3af"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px Inter',
      color: '#d1d5db'
    }
  }, user), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, role), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: 'transparent',
      color: '#9ca3af',
      border: 'none',
      font: '500 13px Inter',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: 8
    }
  }, "Logout")));
}
function KpiCard({
  label,
  value,
  delta,
  deltaTone = 'up',
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: accent ? '1px solid #FEF9C3' : '1px solid #e5e7eb',
      borderRadius: 12,
      padding: 18,
      boxShadow: accent ? '0 4px 20px rgba(212,175,55,.08)' : '0 2px 12px rgba(12,12,12,.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: '#6b7280',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px Inter',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      ...(accent && {
        background: 'linear-gradient(135deg,#D4AF37,#B8934C)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      })
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      marginTop: 8,
      color: deltaTone === 'up' ? '#10b981' : '#ef4444'
    }
  }, deltaTone === 'up' ? '▲' : '▼', " ", delta));
}
function UnitsTable({
  units,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f9fafb'
    }
  }, ['Unit', 'Type', 'Reserved by', 'Handover', 'Status', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      font: '600 11px Inter',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: '#6b7280',
      textAlign: 'left',
      padding: '10px 14px',
      borderBottom: '1px solid #e5e7eb'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, units.map((u, i) => /*#__PURE__*/React.createElement("tr", {
    key: u.id,
    onClick: () => onSelect?.(u),
    style: {
      cursor: 'pointer',
      transition: 'background 150ms'
    },
    onMouseOver: e => e.currentTarget.style.background = '#f9fafb',
    onMouseOut: e => e.currentTarget.style.background = '#fff'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 13,
      fontWeight: 500,
      color: '#111827'
    }
  }, u.id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none',
      color: '#111827'
    }
  }, u.type), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none',
      color: '#374151'
    }
  }, u.buyer), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none',
      fontFamily: 'JetBrains Mono, monospace',
      color: '#374151'
    }
  }, u.handover), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: u.tone
  }, u.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px',
      borderBottom: i < units.length - 1 ? '1px solid #f3f4f6' : 'none',
      textAlign: 'right',
      color: '#9ca3af'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16,
    color: "#9ca3af"
  })))))));
}
Object.assign(window, {
  TopBar,
  KpiCard,
  UnitsTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openhouse/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openhouse/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

// ──────────────── Primitives ────────────────
function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'all 150ms cubic-bezier(0.16,1,0.3,1)',
    letterSpacing: '-0.005em'
  };
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 12,
      borderRadius: 10
    },
    md: {
      padding: '10px 18px',
      fontSize: 14,
      borderRadius: 14
    },
    lg: {
      padding: '12px 22px',
      fontSize: 15,
      borderRadius: 14
    }
  };
  const variants = {
    primary: {
      background: '#D4AF37',
      color: '#fff',
      borderColor: 'rgba(184,147,76,.4)',
      boxShadow: '0 1px 2px rgba(0,0,0,.06)'
    },
    dark: {
      background: '#111827',
      color: '#fff',
      borderColor: 'rgba(0,0,0,.2)'
    },
    outline: {
      background: '#fff',
      color: '#374151',
      borderColor: '#e5e7eb'
    },
    ghost: {
      background: 'transparent',
      color: '#6b7280'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
function Input({
  label,
  error,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 13px Inter',
      color: '#374151'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      padding: '10px 14px',
      font: '400 15px Inter',
      border: `1px solid ${error ? '#ef4444' : '#e5e7eb'}`,
      borderRadius: 10,
      background: '#fff',
      color: '#111827',
      outline: 'none'
    }
  }, rest)), error && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px Inter',
      color: '#991b1b'
    }
  }, error));
}
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    gold: {
      bg: 'rgba(212,175,55,.12)',
      fg: '#8B6428',
      dot: '#D4AF37'
    },
    success: {
      bg: '#ecfdf5',
      fg: '#065f46',
      dot: '#10b981'
    },
    error: {
      bg: '#fef2f2',
      fg: '#991b1b',
      dot: '#ef4444'
    },
    warning: {
      bg: '#fffbeb',
      fg: '#92400e',
      dot: '#f59e0b'
    },
    info: {
      bg: '#eff6ff',
      fg: '#1e40af',
      dot: '#3b82f6'
    },
    neutral: {
      bg: '#f3f4f6',
      fg: '#374151',
      dot: '#6b7280'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 11px Inter',
      padding: '3px 10px',
      borderRadius: 9999,
      background: t.bg,
      color: t.fg,
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot
    }
  }), children);
}

// Tiny Lucide-style icons
function Icon({
  name,
  size = 16,
  color = 'currentColor'
}) {
  const paths = {
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 12l2-2 7-7 7 7 2 2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10"
    })),
    building: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 00-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 010 7.75"
    })),
    chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 4 4 5-7"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
    })),
    arrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 16.5L21 21"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
    })),
    logout: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
    })),
    file: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
    })),
    key: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "15",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.85 12.15L19 4M18 5l3 3M15 8l3 3"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths[name] || null);
}
Object.assign(window, {
  Button,
  Input,
  Badge,
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openhouse/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/openhouse/UnitProfile.jsx
try { (() => {
function TimelineStep({
  step,
  current,
  last
}) {
  const done = step.status === 'done';
  const active = step.status === 'active';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: done ? '#D4AF37' : active ? '#fff' : '#f3f4f6',
      border: active ? '2px solid #D4AF37' : done ? '2px solid #D4AF37' : '2px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: done ? '#fff' : active ? '#D4AF37' : '#9ca3af',
      font: '700 13px Inter',
      boxShadow: active ? '0 0 0 6px rgba(212,175,55,.15)' : 'none'
    }
  }, done ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "#fff"
  }) : step.n), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      flex: 1,
      minHeight: 32,
      marginTop: 4,
      background: done ? '#D4AF37' : '#e5e7eb'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 28,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px Inter',
      color: '#111827',
      letterSpacing: '-0.005em'
    }
  }, step.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px Inter',
      color: '#6b7280',
      marginTop: 2
    }
  }, step.detail), step.date && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px JetBrains Mono',
      color: '#9ca3af',
      marginTop: 6,
      letterSpacing: '.04em'
    }
  }, step.date)));
}
function UnitProfile({
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(12,12,12,.04)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#f9fafb,#fff)',
      padding: 24,
      borderBottom: '1px solid #e5e7eb'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: '#6b7280',
      marginBottom: 6
    }
  }, "Riverside Gardens \xB7 Phase 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 28px Inter',
      letterSpacing: '-0.02em',
      color: '#111827'
    }
  }, unit.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px Inter',
      color: '#6b7280',
      marginTop: 4
    }
  }, unit.subtitle)), /*#__PURE__*/React.createElement(Badge, {
    tone: unit.tone
  }, unit.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 22
    }
  }, unit.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 11px Inter',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: '#9ca3af',
      marginBottom: 4
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px Inter',
      color: '#111827',
      fontFamily: s.mono ? 'JetBrains Mono, monospace' : 'Inter'
    }
  }, s.value))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px Inter',
      color: '#111827',
      marginBottom: 16
    }
  }, "Handover progress"), unit.steps.map((s, i) => /*#__PURE__*/React.createElement(TimelineStep, {
    key: s.n,
    step: s,
    last: i === unit.steps.length - 1
  }))));
}
Object.assign(window, {
  TimelineStep,
  UnitProfile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/openhouse/UnitProfile.jsx", error: String((e && e.message) || e) }); }

})();
