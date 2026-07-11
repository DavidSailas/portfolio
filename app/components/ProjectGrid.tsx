import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const projects = [
    { title: 'Project Alpha', description: 'A cool app for X', tags: ['React', 'TypeScript'] },
    { title: 'Project Beta', description: 'A tool for Y', tags: ['Next.js', 'Tailwind'] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, index) => (
        <ProjectCard key={index} index={index} {...p} />
      ))}
    </div>
  );
}
