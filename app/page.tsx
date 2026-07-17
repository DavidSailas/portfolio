import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
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
              Fresh graduate turning ideas into clean, efficient, and reliable software.
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

        {/* Bottom row: socials + scroll cue. Stacked on mobile, split corners on desktop */}
        <div className="absolute inset-x-0 bottom-6 md:bottom-8 z-10 px-6 md:px-8 flex flex-col-reverse items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-5 font-mono text-[11px] uppercase tracking-widest text-muted">
            {socials.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-x-4 md:gap-5">
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-2 transition-colors">
                  {label}
                </a>
                {i < socials.length - 1 && <span className="text-line hidden sm:inline">/</span>}
              </span>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-faint">
            Scroll
            <ArrowDown size={14} className="animate-bounce" />
          </div>
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
                Hi, I’m David. I am a software developer based in Minglanilla, Cebu.
                I enjoy taking complex problems and breaking them down into simple, working code.
                As a fresh graduate, I am eager to apply my technical skills to real-world projects
                and help teams build better digital experiences.
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
              className="absolute inset-0 w-full h-full object-contain object-bottom scale-100"
            />
            {/* fade the top/sides into the ink background so the image edge disappears */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent via-55% to-ink" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent md:from-ink/40" />
          </div>
        </div>
      </section>

      {/* ---------------- Experience + Education + Certificates + Stack + Projects ---------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Experience />
        <Education />
        <Certificates />
        <TechStack />

        <section id="projects" className="py-24 md:py-32 border-t border-line">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                06 — Projects
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3">
                Selected work
              </h2>
            </div>
            {/* "Show All" Link */}
            <a 
              href="/projects" 
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors border-b border-muted/30 hover:border-accent"
            >
              Show All →
            </a>
          </div>
          <ProjectGrid limit={6} />
        </section>
      </div>

      {/* ---------------- Contact / Footer ---------------- */}
      <footer id="contact" className="border-t border-white/10 mt-32">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">

          {/* Label */}
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500">
            07 — Let&apos;s Connect
          </span>

          {/* Main Pitch */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-8 tracking-tight">
            Open to new opportunities and creative collaborations.
          </h2>

          {/* Bio - Constrained width for readability */}
          <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-xl mx-auto">
            I’m currently looking for a team where I can contribute to meaningful projects,
            write clean code, and continue growing as a developer.
          </p>

          {/* Call to Action */}
          <a
            href="mailto:davidvillondo@gmail.com"
            className="inline-block text-2xl font-medium text-white hover:text-blue-400 transition-all border-b-2 border-white/20 hover:border-blue-400/50 pb-1"
          >
            davidvillondo@gmail.com
          </a>

          {/* Socials */}
          <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-10">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-20 font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} David Villondo. Built with Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
