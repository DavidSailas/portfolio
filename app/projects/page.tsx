import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectGrid from '../components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <main className="bg-ink text-off min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Projects
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-semibold text-off mt-3">
            All Projects
          </h1>
          <p className="text-muted mt-4 max-w-xl leading-relaxed">
            A complete collection of my work — academic, internship, and personal projects.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </main>
  );
}
