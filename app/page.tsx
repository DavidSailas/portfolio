import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import { ArrowDown } from 'lucide-react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/DavidSailas' },
  { label: 'Instagram', href: 'https://www.instagram.com/code_dasai/' },
  { label: 'Facebook', href: 'https://www.facebook.com/dasai2123' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-villondo' },
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-2 transition-colors">
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
                href="mailto:davidvillondo@gmail.com"
                className="inline-block font-mono text-sm text-accent-2 hover:text-accent transition-colors mb-8"
              >
                davidvillondo@gmail.com
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
          <div className="relative min-h-[420px] md:min-h-full bg-ink overflow-hidden">
            {/* soft glow behind the figure so the cutout feels intentional, not pasted */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(60% 55% at 50% 45%, rgba(79,157,255,0.10), transparent 70%)',
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bg1.png"
              alt="David Villondo"
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.15]"
              style={{
                maskImage:
                  'linear-gradient(to bottom, black 55%, transparent 92%), linear-gradient(to left, black 70%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 55%, transparent 92%), linear-gradient(to left, black 70%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
              }}
            />
            {/* fade the top/sides into the ink background so the image edge disappears */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent via-55% to-ink" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent md:from-ink/40" />
          </div>
        </div>
      </section>

      {/* ---------------- Experience + Education + Stack + Projects ---------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Experience />
        <Education />
        <TechStack />

        <section id="projects" className="py-24 md:py-32 border-t border-line">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            05 — Projects
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
            06 — Contact
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-off mt-4 mb-8">
            Let&apos;s build something.
          </h2>
          <a
            href="mailto:davidvillondo@gmail.com"
            className="inline-block font-display text-xl md:text-2xl text-off border-b border-accent/50 hover:text-accent-2 hover:border-accent-2 transition-colors"
          >
            davidvillondo@gmail.com
          </a>

          <div className="mt-14 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-2 transition-colors">
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
