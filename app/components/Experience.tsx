'use client';

const experience = [
  { year: '2026', role: 'Application Developer', org: 'JMS One IT', type: 'Intern' },
  { year: '2026', role: 'Technical IT Support', org: 'CFAI', type: 'Intern' },
  { year: '2025', role: 'Full Stack Developer', org: "St. Cecilia's College", type: 'Student' },
  { year: '2024', role: 'Full Stack Developer', org: "St. Cecilia's College", type: 'Student' },
  { year: '2023', role: 'Developer', org: "St. Cecilia's College", type: 'Student' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            02 — Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3">
            Where I&apos;ve worked
          </h2>
        </div>
        <p className="font-mono text-xs text-faint max-w-xs leading-relaxed">
          Internships and hands-on project work, most recent first.
        </p>
      </div>

      <div>
        {experience.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-10 py-6 border-b border-line last:border-b-0"
          >
            <span className="font-mono text-sm text-accent w-20 shrink-0">{item.year}</span>

            <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="font-display text-lg md:text-xl text-off font-medium tracking-tight group-hover:text-accent-2 transition-colors">
                {item.role}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.org} <span className="text-faint">— {item.type}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
