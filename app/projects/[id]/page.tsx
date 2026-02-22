import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/data/projects';

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const projectId = Number(params.id);
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const description =
    project.description ||
    `Portfolio project by Terrance Ford: ${project.project_name}.`;
  const firstImage = Array.isArray(project.image_url) ? project.image_url[0] : project.image_url;
  const image = firstImage ? (firstImage.startsWith('/') ? firstImage : `/${firstImage}`) : '/static/img/side-image-no-smile-brighter.png';
  const pagePath = `/projects/${project.id}`;

  return {
    title: `${project.project_name} Project`,
    description,
    alternates: {
      canonical: pagePath
    },
    openGraph: {
      title: `${project.project_name} | Terrance Ford`,
      description,
      url: pagePath,
      images: [
        {
          url: image,
          alt: project.project_name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.project_name} | Terrance Ford`,
      description,
      images: [image]
    }
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const projectId = Number(params.id);
  const project = getProjectById(projectId);

  if (!project) {
    return notFound();
  }

  const images = Array.isArray(project.image_url) ? project.image_url : project.image_url ? [project.image_url] : [];

  return (
    <div className="stack">
      <div className="section-header">
        <div>
          <p className="small-label">Project</p>
          <h2>{project.project_name}</h2>
        </div>
        <Link href="/" className="button secondary">
          ← Back home
        </Link>
      </div>

      <div className="detail-layout">
        <article className="card stack">
          {project.description && <p>{project.description}</p>}

          <div className="hero-actions">
            {project.live_link && (
              <a className="button" href={project.live_link} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
            {project.github_link && (
              <a className="button secondary" href={project.github_link} target="_blank" rel="noreferrer">
                Source code
              </a>
            )}
          </div>

          {images.length > 0 && (
            <div className="gallery-grid">
              {images.map((src) => (
                <img key={src} src={src.startsWith('/') ? src : `/${src}`} alt={project.project_name} loading="lazy" />
              ))}
            </div>
          )}
        </article>

        <aside className="side-panel">
          <p className="small-label">Technologies used</p>
          <ul className="list-muted">
            {project.technologies?.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.role && (
            <p style={{ marginTop: 12 }}>
              <strong>Role:</strong> {project.role}
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
