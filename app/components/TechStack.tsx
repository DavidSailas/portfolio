'use client';

const techs = [
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'TypeScript', level: 78 },
  { name: 'Node.js', level: 76 },
  { name: 'PHP', level: 70 },
  { name: 'Laravel', level: 68 },
  { name: 'MySQL', level: 75 },
  { name: 'Git', level: 82 },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 border-t border-line">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">05 — Stack</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3">
            Tools &amp; technologies
          </h2>
        </div>
        <p className="font-mono text-xs text-faint max-w-xs leading-relaxed">
          What I reach for day to day, roughly ranked by hands-on experience.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
        {techs.map((tech, i) => (
          <div key={tech.name} className="group">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display text-off font-medium tracking-tight">{tech.name}</h3>
              <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="w-full bg-panel h-[3px] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-700 group-hover:brightness-125"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
