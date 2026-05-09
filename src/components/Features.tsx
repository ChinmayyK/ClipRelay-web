import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Features() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.feat-header', {
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

    gsap.from('.schematic-card', {
      scrollTrigger: {
        trigger: '.schematic-grid',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    });
  }, { scope: container });

  const features = [
    {
      title: "Timeline-First Workflow",
      desc: "Remote clipboard events enter a unified activity feed first. You remain in control to review and apply intentionally, avoiding destructive overwrite behavior."
    },
    {
      title: "Zero-Knowledge Infrastructure",
      desc: "End-to-end encrypted local sessions using ChaCha20-Poly1305 and X25519 ECDH. No central keys, complete trust-on-first-use. All cryptography happens locally."
    },
    {
      title: "True Mesh Routing",
      desc: "A decentralized local mesh where trusted devices relay activity intelligently. Avoids central routing bottlenecks and allows instant peer discovery via mDNS."
    },
    {
      title: "Native File Streams",
      desc: "A dedicated local streaming pipeline optimized for large files. Built with Rust to ensure low latency and maximum local throughput with chunked verification."
    }
  ];

  return (
    <section ref={container} id="features" className="section">
      <div className="container">
        <span className="label feat-header">CAPABILITIES</span>
        <h2 className="feat-header">System Competencies</h2>

        <div className="schematic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <div key={i} className="schematic-card">
              <span style={{ display: 'block', fontFamily: 'var(--font-mono)', color: 'var(--accent-alt)', marginBottom: '0.5rem' }}>MOD_{i + 1}</span>
              <h3 style={{ marginBottom: '1rem', color: 'var(--fg)', fontSize: '1.1rem' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
