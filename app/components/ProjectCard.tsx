'use client';

import { Code2, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({ title, description, tags }: ProjectProps) {
  return (
    <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex gap-2 mb-4 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded-md font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#" className="flex items-center gap-1 text-sm hover:underline">
          <Code2 size={16} /> Code
        </a>
        <a href="#" className="flex items-center gap-1 text-sm hover:underline">
          <ExternalLink size={16} /> Live
        </a>
      </div>
    </div>
  );
}