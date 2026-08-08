import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <p className="project-category">{project.category}</p>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;