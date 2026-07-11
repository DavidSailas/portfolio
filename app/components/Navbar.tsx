'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      document.documentElement.classList.add('is-scrolling');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 900);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-lg font-semibold tracking-tight text-off"
        >
          David<span className="text-accent">.</span>Villondo
        </a>

        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="group flex items-center gap-1.5 hover:text-off transition-colors">
              <span className="text-accent/60 group-hover:text-accent transition-colors">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+639938507294"
          className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted hover:text-off transition-colors"
        >
          <Phone size={13} strokeWidth={1.75} />
          +63 993 850 7294
        </a>

        <a
          href="#contact"
          className="lg:hidden font-mono text-[11px] uppercase tracking-widest text-off border border-line rounded-full px-4 py-2"
        >
          Menu
        </a>
      </div>
    </nav>
  );
}