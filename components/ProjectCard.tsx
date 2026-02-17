import Link from 'next/link';
import { Project } from '@/data/projects';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const cover = Array.isArray(project.image_url) ? project.image_url[0] : project.image_url;
  const coverSrc = cover ? (cover.startsWith('/') ? cover : `/${cover}`) : undefined;
  const tech = project.technologies?.slice(0, 4) || [];

  return (
    <Link href={`/projects/${project.id}`} className="card project-card" aria-label={`${project.project_name} details`}>
      {coverSrc && <img src={coverSrc} alt={project.project_name} loading="lazy" />}
      <div className="project-meta">
        <span className="small-label">Project #{project.id + 1}</span>
        {project.live_link && (
          <span>
            <span aria-hidden>•</span> Live
          </span>
        )}
      </div>
      <h3 style={{ margin: '8px 0 6px' }}>{project.project_name}</h3>
      {project.description && <p style={{ margin: 0, color: 'var(--muted)' }}>{project.description}</p>}
      {tech.length > 0 && (
        <div className="tags">
          {tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
