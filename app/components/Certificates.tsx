'use client';

const certificates = [
  {
    id: 'INT-01',
    title: 'Application Developer Internship',
    issuer: 'JMS One IT',
    status: 'verified' as const,
  },
  {
    id: 'INT-02',
    title: 'Technical Support Internship',
    issuer: 'CFAI',
    status: 'verified' as const,
  },
  {
    id: 'SEM-01',
    title: 'Cebu ICT Student Congress 2024',
    issuer: 'PSITE Central Visayas',
    status: 'pending' as const,
  },
  {
    id: 'SEM-02',
    title: 'Basic Fiber Optic Installation Seminar',
    issuer: "St. Cecilia's College",
    status: 'pending' as const,
  },
];

function StatusBadge({ status }: { status: 'verified' | 'pending' }) {
  if (status === 'verified') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-3 py-1 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Verified
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-amber-400/80 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
      Pending Retrieval
    </span>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 border-t border-line">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            04 — Certificates
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-off mt-3">
            Certifications &amp; training
          </h2>
        </div>
        <p className="font-mono text-xs text-faint max-w-xs leading-relaxed">
          Credentials from internships and industry seminars.
        </p>
      </div>

      <div className="border border-line rounded-2xl overflow-hidden divide-y divide-line">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-6 py-5 hover:bg-panel/40 transition-colors"
          >
            <span className="font-mono text-xs text-accent w-16 shrink-0">{cert.id}</span>

            <div className="flex-1">
              <h3 className="font-display text-off font-medium tracking-tight">{cert.title}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">
                {cert.issuer}
              </p>
            </div>

            <StatusBadge status={cert.status} />
          </div>
        ))}
      </div>
    </section>
  );
}
