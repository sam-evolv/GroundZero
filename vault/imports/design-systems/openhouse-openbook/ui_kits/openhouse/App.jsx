function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('sam@evolvai.ie');
  const [pw, setPw] = useState('••••••••••');
  return (
    <div style={{
      minHeight: '100vh', background: '#f9fafb', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 24,
    }}>
      <div style={{ width: 400, background: '#fff', border: '1px solid #e5e7eb',
        borderRadius: 14, padding: 36, boxShadow: '0 4px 20px rgba(212,175,55,.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <img src="../../assets/openhouse-mark-gold.png" style={{ width: 56, height: 56 }} />
        </div>
        <div style={{ font: '700 22px Inter', letterSpacing: '-0.01em', color: '#111827',
          textAlign: 'center', marginBottom: 6 }}>Sign in to OpenHouse AI</div>
        <div style={{ font: '400 14px Inter', color: '#6b7280', textAlign: 'center', marginBottom: 28 }}>
          Developer portal · portal.openhouseai.ie
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Password" type="password" value={pw} onChange={e => setPw(e.target.value)} />
          <Button variant="primary" size="lg" onClick={onLogin} style={{ marginTop: 6 }}>
            Sign in <Icon name="arrow" size={16} color="#fff" />
          </Button>
        </div>
        <div style={{ font: '400 12px Inter', color: '#9ca3af', textAlign: 'center', marginTop: 20 }}>
          OpenHouse AI Limited · Cork, Ireland
        </div>
      </div>
    </div>
  );
}

function DashboardScreen({ onOpenUnit }) {
  const units = [
    { id: '14A', type: '3-bed semi', buyer: 'J. Murphy',  handover: '14 Jun 2026', status: 'Confirmed', tone: 'success' },
    { id: '14B', type: '3-bed semi', buyer: "S. O'Brien", handover: '21 Jun 2026', status: 'Snag open', tone: 'warning' },
    { id: '15A', type: '4-bed detached', buyer: 'Available', handover: '—',           status: 'Available', tone: 'neutral' },
    { id: '15B', type: '4-bed detached', buyer: 'R. Kelly', handover: '28 Jun 2026',  status: 'Reserved',  tone: 'info' },
    { id: '16A', type: '2-bed apt',     buyer: 'M. Doyle', handover: '05 Jul 2026',  status: 'Confirmed', tone: 'success' },
    { id: '16B', type: '2-bed apt',     buyer: 'P. Ryan',  handover: '12 Jul 2026',  status: 'Overdue',   tone: 'error' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <TopBar />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <div style={{ font: '500 12px Inter', letterSpacing: '.06em', textTransform: 'uppercase',
              color: '#6b7280', marginBottom: 4 }}>Riverside Gardens</div>
            <div style={{ font: '700 32px Inter', letterSpacing: '-0.02em', color: '#111827' }}>Development overview</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="outline"><Icon name="file" size={14} /> Export</Button>
            <Button variant="primary"><Icon name="plus" size={14} color="#fff" /> New unit</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 28 }}>
          <KpiCard label="Units reserved" value="48 / 72" delta="+12 this week" deltaTone="up" />
          <KpiCard label="MRR" value="€24,840" delta="8.3%" deltaTone="up" accent />
          <KpiCard label="Open snags" value="17" delta="3 resolved" deltaTone="up" />
          <KpiCard label="Avg handover" value="14d" delta="2d faster" deltaTone="up" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ font: '600 16px Inter', color: '#111827' }}>Units</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Badge tone="neutral">All · 72</Badge>
            <Badge tone="success">Confirmed · 31</Badge>
            <Badge tone="warning">Snag · 8</Badge>
            <Badge tone="error">Overdue · 2</Badge>
          </div>
        </div>
        <UnitsTable units={units} onSelect={onOpenUnit} />
      </div>
    </div>
  );
}

function UnitScreen({ onBack }) {
  const unit = {
    title: 'Unit 14A',
    subtitle: '3-bed semi-detached · 112 m² · South-facing garden',
    status: 'Confirmed',
    tone: 'success',
    stats: [
      { label: 'Price', value: '€485,000' },
      { label: 'Reserved by', value: 'J. Murphy' },
      { label: 'Deposit', value: '€48,500', mono: true },
      { label: 'Handover', value: '14 Jun 2026', mono: true },
    ],
    steps: [
      { n: 1, title: 'Contract signed', detail: 'Both parties executed', date: '02 Mar 2026', status: 'done' },
      { n: 2, title: 'Deposit received', detail: '10% paid via bank transfer', date: '05 Mar 2026', status: 'done' },
      { n: 3, title: 'Snag inspection', detail: '3 items raised, 2 resolved', date: '14 May 2026', status: 'active' },
      { n: 4, title: 'Final walkthrough', detail: 'Scheduled with purchaser', date: '10 Jun 2026', status: 'pending' },
      { n: 5, title: 'Keys handed over', detail: 'Completion + welcome pack', date: '14 Jun 2026', status: 'pending' },
    ],
  };
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <TopBar />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '24px' }}>
        <button onClick={onBack} style={{
          background: 'transparent', border: 'none', font: '500 13px Inter', color: '#6b7280',
          display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginBottom: 18,
        }}>← Back to development</button>
        <UnitProfile unit={unit} />
      </div>
    </div>
  );
}

function PurchaserPortal({ onBack }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Branded purchaser header */}
      <div style={{
        background: 'linear-gradient(135deg,#080808,#1a1a1a)', color: '#fff',
        padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/openhouse-mark-gold.png" style={{ width: 28, height: 28 }} />
          <div style={{ font: '600 14px Inter', color: '#fff' }}>Riverside Gardens · Purchaser portal</div>
        </div>
        <button onClick={onBack} style={{
          background: 'transparent', border: '1px solid rgba(255,255,255,.15)', color: '#d1d5db',
          padding: '6px 12px', borderRadius: 8, font: '500 12px Inter', cursor: 'pointer',
        }}>Back</button>
      </div>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '36px 24px' }}>
        <div style={{ font: '500 12px Inter', color: '#6b7280', letterSpacing: '.06em',
          textTransform: 'uppercase', marginBottom: 4 }}>Good evening, Julia</div>
        <div style={{ fontFamily: 'Source Serif 4, Georgia, serif', font: '600 36px/1.1 Source Serif 4',
          letterSpacing: '-0.01em', color: '#111827' }}>Your new home is 27 days away.</div>
        <div style={{ font: '400 15px Inter', color: '#6b7280', marginTop: 10, maxWidth: 560 }}>
          Unit 14A at Riverside Gardens. Snag inspection completed. Final walkthrough scheduled for 10 June.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginTop: 28 }}>
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24,
            boxShadow: '0 2px 12px rgba(12,12,12,.04)' }}>
            <div style={{ font: '600 14px Inter', color: '#111827', marginBottom: 18 }}>Handover timeline</div>
            {[
              { n: 1, title: 'Contract signed', detail: 'Executed by both parties', date: '02 Mar 2026', status: 'done' },
              { n: 2, title: 'Deposit received', detail: '€48,500 cleared', date: '05 Mar 2026', status: 'done' },
              { n: 3, title: 'Snag inspection', detail: 'Completed, punch list shared', date: '14 May 2026', status: 'done' },
              { n: 4, title: 'Final walkthrough', detail: 'Confirm details on portal', date: '10 Jun 2026', status: 'active' },
              { n: 5, title: 'Keys handed over', detail: 'Welcome pack provided', date: '14 Jun 2026', status: 'pending' },
            ].map((s, i, a) => <TimelineStep key={s.n} step={s} last={i === a.length - 1} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'linear-gradient(135deg,#080808,#1a1a1a)', color: '#fff',
              border: '1px solid rgba(212,175,55,.2)', borderRadius: 12, padding: 20 }}>
              <Icon name="key" size={18} color="#D4AF37" />
              <div style={{ font: '600 15px Inter', color: '#D4AF37', marginTop: 10 }}>Welcome pack</div>
              <div style={{ font: '400 13px Inter', color: '#9ca3af', marginTop: 4, lineHeight: 1.5 }}>
                Warranties, manuals, utility accounts. Ready day of handover.
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
              <div style={{ font: '600 14px Inter', color: '#111827', marginBottom: 10 }}>Ask the property assistant</div>
              <Input placeholder="How do I register my appliance warranties?" />
              <Button variant="primary" size="sm" style={{ marginTop: 10, width: '100%' }}>Send question</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState('login');
  if (screen === 'login') return <LoginScreen onLogin={() => setScreen('dashboard')} />;
  if (screen === 'dashboard') return <DashboardScreen onOpenUnit={() => setScreen('unit')} />;
  if (screen === 'unit') return <UnitScreen onBack={() => setScreen('dashboard')} />;
  if (screen === 'purchaser') return <PurchaserPortal onBack={() => setScreen('dashboard')} />;
  return null;
}

// Tiny nav so the preview lets reviewers cycle screens
function Shell() {
  const [screen, setScreen] = useState('dashboard');
  return (
    <div>
      <div style={{
        position: 'fixed', top: 14, right: 14, zIndex: 100,
        background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(20px)',
        border: '1px solid #e5e7eb', borderRadius: 12, padding: 6, display: 'flex', gap: 4,
        boxShadow: '0 8px 24px rgba(0,0,0,.08)',
      }}>
        {['login', 'dashboard', 'unit', 'purchaser'].map(s => (
          <button key={s} onClick={() => setScreen(s)} style={{
            padding: '6px 12px', font: '500 12px Inter',
            background: screen === s ? '#111827' : 'transparent',
            color: screen === s ? '#fff' : '#6b7280',
            border: 'none', borderRadius: 8, cursor: 'pointer',
          }}>{s}</button>
        ))}
      </div>
      {screen === 'login' && <LoginScreen onLogin={() => setScreen('dashboard')} />}
      {screen === 'dashboard' && <DashboardScreen onOpenUnit={() => setScreen('unit')} />}
      {screen === 'unit' && <UnitScreen onBack={() => setScreen('dashboard')} />}
      {screen === 'purchaser' && <PurchaserPortal onBack={() => setScreen('dashboard')} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Shell />);
