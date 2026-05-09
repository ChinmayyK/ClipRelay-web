import { useRef } from 'react';
import { Mermaid } from './Mermaid';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Architecture() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.arch-header', {
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

    gsap.from('.arch-item', {
      scrollTrigger: {
        trigger: '.arch-grid',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} id="architecture" className="section">
      <div className="container">
        <span className="label arch-header">SCHEMATICS</span>
        <h2 className="arch-header" style={{ marginBottom: '4rem' }}>Internal Routing Logic</h2>

        <div className="arch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '3rem' }}>
          <div className="arch-item">
            <h3>I. High-Level Mesh</h3>
            <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Decentralized peer-to-peer propagation over mDNS. No central broker.
            </p>
            <div className="schematic-card">
              <Mermaid chart={`graph TD
      subgraph "Local Network (WiFi/Ethernet)"
          direction LR
          A["MacBook"] <-->|Mesh| B["Pixel 8"]
          B <-->|Mesh| C["Linux Win"]
          C <-->|Mesh| A
          D["Tablet"] -.->|mDNS| B
      end
      style A fill:transparent,stroke:currentColor,stroke-width:1px,color:currentColor
      style B fill:transparent,stroke:currentColor,stroke-width:1px,color:currentColor
      style C fill:transparent,stroke:currentColor,stroke-width:1px,color:currentColor
      style D fill:transparent,stroke:currentColor,stroke-width:1px,stroke-dasharray: 5 5,color:currentColor`} />
            </div>
          </div>

          <div className="arch-item">
            <h3>II. File Transfer Pipe</h3>
            <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Files streamed in 64KB chunks with ChaCha20 encryption.
            </p>
            <div className="schematic-card">
              <Mermaid chart={`graph LR
      Start((Copy)) --> Announce[Announce]
      Announce --> Accept{Accept?}
      Accept -- No --> Cancel[Cancel]
      Accept -- Yes --> Stream[Chunk Stream]
      Stream --> Verify[SHA-256]
      Verify -- Pass --> Save[Save]
      classDef default fill:transparent,stroke:currentColor,stroke-width:1px,color:currentColor;`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
