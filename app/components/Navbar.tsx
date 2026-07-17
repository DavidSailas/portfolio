'use client';

import { useEffect, useState } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#certificates', label: 'Certificates' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close the mobile menu on route/hash navigation, and lock body scroll while open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-ink/85 backdrop-blur-md border-b border-line py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-3 lg:pb-0 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-lg font-semibold tracking-tight text-off whitespace-nowrap"
        >
          David<span className="text-accent">.</span>Villondo
        </a>

        <div className="hidden lg:flex items-center justify-center gap-x-7 gap-y-2 flex-wrap font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-off transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <a
            href="tel:+639938507294"
            className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-muted hover:text-off transition-colors whitespace-nowrap"
          >
            <Phone size={13} strokeWidth={1.75} />
            +63 993 850 7294
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-ink/40 backdrop-blur-sm text-off hover:border-accent/60 active:scale-95 transition-all"
          >
            {menuOpen ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 border-t border-line flex flex-col gap-1 font-mono text-sm uppercase tracking-widest">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-line/60 text-muted hover:text-off transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+639938507294"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 py-4 text-off"
          >
            <Phone size={14} strokeWidth={1.75} />
            +63 993 850 7294
          </a>
        </div>
      </div>
    </nav>
  );
}
