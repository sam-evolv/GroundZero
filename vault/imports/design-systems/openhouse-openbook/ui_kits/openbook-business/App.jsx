function BusinessApp() {
  const [cmd, setCmd] = useState(false);
  React.useEffect(() => {
    const h = e => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCmd(c => !c); } };
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h);
  }, []);
  return (
    <div style={{
      minHeight: '100vh', background: '#0b0c0f', color: '#eef2f8',
      fontFamily: 'Inter, sans-serif', display: 'flex',
    }}>
      <DSidebar active="Overview" />
      <main style={{ flex: 1, padding: 28, overflow: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <div>
            <div style={{ font: '500 11px Inter', color: '#778199', letterSpacing: '.06em',
              textTransform: 'uppercase', marginBottom: 4 }}>Murphy's Barbers · Cork</div>
            <div style={{ font: '600 26px Inter', color: '#eef2f8', letterSpacing: '-0.02em' }}>Overview</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <DarkButton variant="dark" size="md" onClick={() => setCmd(true)}>
              <DIcon name="search" size={13} /> Search <span style={{
                font: '500 10px Inter', padding: '1px 5px', borderRadius: 4,
                background: '#1e2531', marginLeft: 4, color: '#778199' }}>⌘K</span>
            </DarkButton>
            <DarkButton variant="primary" size="md">
              <DIcon name="plus" size={13} color="#080808" /> New booking
            </DarkButton>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 22 }}>
          <StatCard label="Bookings today" value="18" delta="+4 vs Tue" sparkline />
          <StatCard label="Revenue (MTD)" value="€4,215" delta="+12.3%" sparkline />
          <StatCard label="MCP bookings" value="7" delta="39% of today" sparkline />
          <StatCard label="Avg rating" value="4.9" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <BookingsTable />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{
              background: '#0f1115', border: '1px solid rgba(212,175,55,.25)', borderRadius: 12, padding: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                  boxShadow: '0 0 10px #10b981' }} />
                <div style={{ font: '600 12px Inter', color: '#D4AF37', letterSpacing: '.08em',
                  textTransform: 'uppercase' }}>MCP server · live</div>
              </div>
              <div style={{ font: '500 12px "JetBrains Mono", monospace', color: '#9ca8bc',
                background: '#0b0c0f', padding: '8px 10px', borderRadius: 6,
                border: '1px solid #1e2531', marginBottom: 10 }}>mcp.openbook.ie/murphys-cork</div>
              <div style={{ font: '400 12px Inter', color: '#9ca8bc', lineHeight: 1.6 }}>
                Discovered by 3 agents this week. 7 bookings generated, €205 revenue.
              </div>
              <DarkButton variant="ghost" size="sm" style={{ marginTop: 10, padding: 0, color: '#D4AF37' }}>
                View MCP analytics <DIcon name="arrow" size={11} color="#D4AF37" />
              </DarkButton>
            </div>

            <div style={{
              background: '#0f1115', border: '1px solid #1e2531', borderRadius: 12, padding: 18,
            }}>
              <div style={{ font: '600 13px Inter', color: '#eef2f8', marginBottom: 12 }}>Top services</div>
              {[
                { name: 'Men\'s cut', ct: 62, rev: '€1,550' },
                { name: 'Fade + beard', ct: 28, rev: '€1,064' },
                { name: 'Colour', ct: 9, rev: '€765' },
                { name: 'Hot towel shave', ct: 12, rev: '€360' },
              ].map(s => (
                <div key={s.name} style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #12151b' }}>
                  <div style={{ font: '400 13px Inter', color: '#eef2f8' }}>{s.name}</div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ font: '400 12px Inter', color: '#778199' }}>{s.ct}</span>
                    <span style={{ font: '500 13px "JetBrains Mono", monospace', color: '#D4AF37' }}>{s.rev}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BusinessApp />);
