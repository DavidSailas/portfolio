import ProjectCard from './ProjectCard';

const projects = [
  {
    index: '01',
    category: 'Capstone',
    title: 'SGRMS',
    description:
      'School Guidance Record Management System — a robust solution for automating student record tracking and reporting.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Node.js'],
  },
  {
    index: '02',
    category: 'Internship',
    title: 'LGSA',
    description:
      'Customized educational management system built for Lamb of God Special Education Academy.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: '/projects/lgsa.png',
    imagePosition: 'top' as const,
  },
  {
    index: '03',
    category: 'Internship',
    title: 'ITKonek',
    description:
      'Mobile platform for booking IT services, developed during internship at JMS One IT.',
    tags: ['Expo', 'JavaScript', 'Vite', 'Firebase'],
    image: '/projects/itkonek.png',
    imagePosition: 'center' as const,
  },
  {
    index: '04',
    category: 'Academic',
    title: 'BTT',
    description: 'Bank Transaction Tracker — a Java-based financial monitoring tool.',
    tags: ['Java', 'MySQL'],
  },
  {
    index: '05',
    category: 'Academic',
    title: 'Thrifty',
    description: 'E-commerce interface for apparel retail.',
    tags: ['Java', 'MySQL'],
  },
  {
    index: '06',
    category: 'Academic',
    title: 'Retail-Store',
    description: 'Integrated sales and inventory management system.',
    tags: ['Java', 'MySQL'],
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.index} {...p} />
      ))}
    </div>
  );
}
