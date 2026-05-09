export function Footer() {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <img src="/logo.png" alt="" width={20} height={20} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>ClipRelay</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>SYS_END // LOCAL-FIRST</p>
            <div style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--border)', letterSpacing: '0.15em' }}>
              ||| | || || | |||| || | || || |<br/>
              UUID: 8F93-4B22-A1C9
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://github.com/ChinmayyK/cliprelay" className="nav-link">GITHUB</a>
            <a href="https://github.com/ChinmayyK/cliprelay/releases" className="nav-link">RELEASES</a>
            <a href="https://github.com/ChinmayyK/cliprelay/issues" className="nav-link">ISSUES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
