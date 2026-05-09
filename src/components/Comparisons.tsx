import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Comparisons() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.comp-header', {
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

    gsap.from('.comp-table', {
      scrollTrigger: {
        trigger: '.comp-table',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  const competitors = [
    {
      feature: "Platform Support",
      cliprelay: "Universal (Win/Mac/Lin/And)",
      apple: "Apple Hardware Only",
      windows: "Windows + Mobile Only",
      kde: "Universal",
      oplus: "Oppo/OnePlus + Win"
    },
    {
      feature: "Network Routing",
      cliprelay: "100% Local (mDNS Mesh)",
      apple: "Local + iCloud Relay",
      windows: "Microsoft Cloud Servers",
      kde: "Local Network",
      oplus: "Cloud / Local"
    },
    {
      feature: "Account Requirement",
      cliprelay: "None (Trust on First Use)",
      apple: "Mandatory Apple ID",
      windows: "Mandatory MS Account",
      kde: "None",
      oplus: "Mandatory O+ Account"
    },
    {
      feature: "Clipboard Action",
      cliprelay: "Timeline Feed (Manual Sync)",
      apple: "Silent System Overwrite",
      windows: "Silent System Overwrite",
      kde: "Silent System Overwrite",
      oplus: "Silent System Overwrite"
    },
    {
      feature: "Core Technology",
      cliprelay: "Rust Native (Tokio)",
      apple: "Swift / Objective-C",
      windows: "C# / C++",
      kde: "C++ (Qt Framework)",
      oplus: "Java / C++"
    }
  ];

  return (
    <section ref={container} id="comparisons" className="section">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <span className="label comp-header">MARKET_ANALYSIS</span>
        <h2 className="comp-header">Competitive Matrix</h2>

        <div className="comp-table table-responsive" style={{ background: 'var(--bg-surface)' }}>
          <table style={{ minWidth: '900px' }}>
            <thead>
              <tr>
                <th style={{ width: '16%' }}>Feature Vector</th>
                <th style={{ width: '16%', color: 'var(--accent)' }}>ClipRelay</th>
                <th style={{ width: '16%', color: 'var(--fg-dim)' }}>Apple Ecosystem</th>
                <th style={{ width: '16%', color: 'var(--fg-dim)' }}>Windows Link</th>
                <th style={{ width: '16%', color: 'var(--fg-dim)' }}>KDE Connect</th>
                <th style={{ width: '16%', color: 'var(--fg-dim)' }}>O+ Connect</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c, i) => (
                <tr key={i}>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}><strong>{c.feature}</strong></td>
                  <td style={{ color: 'var(--accent-alt)', fontWeight: 600 }}>{c.cliprelay}</td>
                  <td>{c.apple}</td>
                  <td>{c.windows}</td>
                  <td>{c.kde}</td>
                  <td>{c.oplus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
