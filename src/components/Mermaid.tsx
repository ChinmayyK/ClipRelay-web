import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setTheme(document.documentElement.classList.contains('light') ? 'default' : 'dark');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    setTheme(document.documentElement.classList.contains('light') ? 'default' : 'dark');
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isDark = theme === 'dark';
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        fontFamily: 'JetBrains Mono',
        primaryColor: 'transparent',
        primaryTextColor: isDark ? '#E2E8F0' : '#0F172A',
        primaryBorderColor: isDark ? '#1E3354' : '#CBD5E1',
        lineColor: isDark ? '#38BDF8' : '#0284C7',
        secondaryColor: 'transparent',
        tertiaryColor: 'transparent',
        nodeTextColor: isDark ? '#E2E8F0' : '#0F172A',
        nodeBorder: isDark ? '#1E3354' : '#CBD5E1',
      }
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      mermaid.render('mermaid-svg-' + Math.random().toString(36).substring(7), chart).then((result) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = result.svg;
        }
      });
    }
  }, [chart, theme]);

  return <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', width: '100%', overflowX: 'auto' }} />;
}
