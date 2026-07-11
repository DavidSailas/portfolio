'use client';

const education = [
  {
    date: 'May 2026',
    degree: 'Bachelor of Science in Information Technology',
    school: "St. Cecilia's College – Cebu, Inc.",
    location: 'Minglanilla, Cebu',
    note: 'Thesis: "School Guidance Record Management System (SGRMS)"',
  },
  {
    date: 'June 2022',
    degree: 'Senior High School Graduate — TVL',
    school: "St. Cecilia's College – Cebu, Inc.",
    location: 'Minglanilla, Cebu',
    note: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-line">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            03 — Education
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3">
            Education
          </h2>
        </div>
      </div>

      <div>
        {education.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col md:flex-row md:items-start gap-2 md:gap-10 py-7 border-b border-line last:border-b-0"
          >
            <span className="font-mono text-sm text-accent w-24 shrink-0">{item.date}</span>

            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl text-off font-medium tracking-tight group-hover:text-accent-2 transition-colors">
                {item.degree}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1.5">
                {item.school} <span className="text-faint">— {item.location}</span>
              </p>
              {item.note && (
                <p className="text-muted text-sm italic mt-2 leading-relaxed">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
