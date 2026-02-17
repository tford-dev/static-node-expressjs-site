import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

type Props = {
  items: Project[];
};

export default function ProjectGrid({ items }: Props) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
