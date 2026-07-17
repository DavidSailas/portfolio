'use client';

import { useState } from 'react';
import { Code2, ExternalLink, Braces } from 'lucide-react';

interface ProjectProps {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imagePosition?: 'top' | 'center' | 'bottom';
  codeUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  index,
  category,
  title,
  description,
  tags,
  image,
  imagePosition = 'top',
  codeUrl,
  liveUrl,
}: ProjectProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(image) && !imgError;
  const hasLinks = Boolean(codeUrl) || Boolean(liveUrl);

  const objectPositionClass =
    imagePosition === 'center' ? 'object-center' : imagePosition === 'bottom' ? 'object-bottom' : 'object-top';

  return (
    <div className="group flex flex-col border border-line rounded-2xl overflow-hidden bg-panel/50 hover:bg-panel transition-colors duration-300 hover:border-accent/40">
      {/* Image / placeholder */}
      <div className="relative h-56 md:h-60 w-full overflow-hidden border-b border-line bg-panel">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover ${objectPositionClass} group-hover:scale-105 transition-transform duration-500`}
          />
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-panel via-ink to-panel flex flex-col items-center justify-center gap-3">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(79,157,255,0.08) 25%, transparent 25%, transparent 50%, rgba(79,157,255,0.08) 50%, rgba(79,157,255,0.08) 75%, transparent 75%, transparent)',
                backgroundSize: '24px 24px',
              }}
            />
            <Braces size={26} className="relative text-accent/50" strokeWidth={1.5} />
            <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Preview coming soon
            </span>
          </div>
        )}

        {/* consistent scrim so the badge stays legible over any screenshot */}
        {showImage && (
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/85 via-ink/20 to-transparent pointer-events-none" />
        )}

        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-off bg-ink/70 backdrop-blur-sm border border-line rounded-full px-2.5 py-1">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl font-semibold text-off tracking-tight">{title}</h3>
          <span className="font-mono text-xs text-faint shrink-0 ml-3">{index}</span>
        </div>

        <p className="text-muted leading-relaxed mb-6 flex-1">{description}</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 border border-line text-faint text-[11px] font-mono uppercase tracking-wide rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex gap-5 pt-5 border-t border-line font-mono text-xs uppercase tracking-widest">
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-off transition-colors"
              >
                <Code2 size={14} /> Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-off transition-colors"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
