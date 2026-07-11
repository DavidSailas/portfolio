import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import { ArrowDown } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export default function Home() {
  return (
    <main className="bg-ink text-off min-h-screen">
      <Navbar />

      {/* ---------------- Hero ---------------- */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto h-full px-6 md:px-8 flex items-center">
          <div className="max-w-2xl">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent-2">
              Software Engineer — Cebu, PH
            </span>

            <h1 className="font-display leading-[0.9] mt-6">
              <span className="block text-4xl md:text-6xl font-medium tracking-tight text-muted">
                David
              </span>
              <span className="block text-6xl md:text-[7.5rem] font-bold tracking-tight text-off">
                Villondo
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted mt-6 max-w-md leading-relaxed">
              Fresh graduate turning complex logic into clean, maintainable, high&#8209;performance
              software.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full border border-line text-off text-xs uppercase tracking-widest hover:border-accent/60 hover:bg-white/5 transition-colors"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-off text-ink text-xs font-medium uppercase tracking-widest hover:bg-accent-2 transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom-left social row, matching reference */}
        <div className="absolute left-6 md:left-8 bottom-8 z-10 flex items-center gap-5 font-mono text-[11px] uppercase tracking-widest text-muted">
          {socials.map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-5">
              <a href={href} className="hover:text-accent-2 transition-colors">
                {label}
              </a>
              {i < socials.length - 1 && <span className="text-line">/</span>}
            </span>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute right-6 md:right-8 bottom-8 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-faint">
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="about" className="relative border-t border-line">
        <div className="grid md:grid-cols-2 min-h-[640px]">
          {/* Left: text */}
          <div className="flex items-center px-6 md:px-16 py-20 md:py-0">
            <div className="max-w-lg">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                01 — About
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-off mt-4 mb-3 leading-tight">
                About Me
              </h2>
              <a
                href="mailto:hello@youremail.com"
                className="inline-block font-mono text-sm text-accent-2 hover:text-accent transition-colors mb-8"
              >
                hello@youremail.com
              </a>
              <p className="text-lg md:text-xl leading-relaxed text-muted">
                I&apos;m a fresh graduate based in Minglanilla, Cebu. I translate complex logic into
                clean, maintainable, and high&#8209;performance digital solutions — and I&apos;m
                looking for a team to grow that craft with.
              </p>

              <div className="mt-12 pl-4 border-l-2 border-accent font-mono text-xs uppercase tracking-widest text-muted">
                Minglanilla, Cebu
                <br />
                Philippines
              </div>
            </div>
          </div>

          {/* Right: portrait, clean split like reference */}
          <div className="relative min-h-[420px] md:min-h-full bg-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bg1.png"
              alt="David Villondo"
              className="absolute inset-0 w-full h-full object-contain object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ---------------- Stack + Projects ---------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <TechStack />

        <section id="projects" className="py-24 md:py-32 border-t border-line">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            03 — Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3 mb-12">
            Selected work
          </h2>
          <ProjectGrid />
        </section>
      </div>

      {/* ---------------- Contact / Footer ---------------- */}
      <footer id="contact" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            04 — Contact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-off mt-4 mb-8">
            Let&apos;s build something.
          </h2>
          <a
            href="mailto:hello@youremail.com"
            className="inline-block font-display text-xl md:text-2xl text-off border-b border-accent/50 hover:text-accent-2 hover:border-accent-2 transition-colors"
          >
            hello@youremail.com
          </a>

          <div className="mt-14 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-accent-2 transition-colors">
                {label}
              </a>
            ))}
          </div>

          <p className="mt-16 font-mono text-[11px] text-faint tracking-widest">
            © {new Date().getFullYear()} DAVID VILLONDO — BUILT WITH NEXT.JS
          </p>
        </div>
      </footer>
    </main>
  );
}
