import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { Comparisons } from './components/Comparisons';
import { Platforms } from './components/Platforms';
import { Footer } from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Philosophy />
        <Features />
        <Comparisons />
        <Architecture />
        <Platforms />
      </main>
      <Footer />
    </div>
  );
}

export default App;
