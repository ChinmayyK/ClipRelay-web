import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Platforms() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.plat-header', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.plat-item', {
      scrollTrigger: {
        trigger: '.plat-grid',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  const platforms = [
    { name: 'macOS', status: 'Production Ready' },
    { name: 'Android', status: 'Production Ready' },
    { name: 'Windows', status: 'In Progress' },
    { name: 'Linux', status: 'Beta / WIP' },
  ];

  return (
    <section ref={container} id="platforms" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <span className="label plat-header">ENVIRONMENTS</span>
        <h2 className="plat-header">Deployment Targets</h2>
        
        <div className="plat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          <div className="plat-item">
            <p style={{ marginBottom: '2rem' }}>
              Native applications tailored for each operating system, sharing a unified, high-performance Rust core.
            </p>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '50%' }}>Operating System</th>
                    <th style={{ width: '50%' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((p, i) => (
                    <tr key={i}>
                      <td style={{ color: 'var(--fg)', fontFamily: 'var(--font-mono)' }}>{p.name}</td>
                      <td style={{ color: p.status.includes('Production') ? 'var(--accent)' : 'var(--fg-dim)', fontFamily: 'var(--font-mono)' }}>
                        {p.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="schematic-card plat-item">
            <span className="label" style={{ marginBottom: '1rem', background: 'var(--border)', color: 'var(--fg)' }}>SOURCE</span>
            <h3 style={{ marginBottom: '1rem' }}>Fully auditable.</h3>
            <p style={{ marginBottom: '2rem' }}>
              ClipRelay is fully open source. Inspect the architecture, build it locally, or contribute to the mesh.
            </p>
            <a href="https://github.com/ChinmayyK/cliprelay" className="button-primary">OPEN_GITHUB_REPO</a>
          </div>
        </div>
      </div>
    </section>
  );
}
