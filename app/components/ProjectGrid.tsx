import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

interface ProjectGridProps {
  /** If provided, only show this many projects. Omit to show all. */
  limit?: number;
}

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProjects.map((p) => (
        <ProjectCard key={p.index} {...p} />
      ))}
    </div>
  );
}
