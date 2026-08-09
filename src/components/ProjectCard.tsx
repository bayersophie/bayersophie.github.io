import { Link } from "react-router-dom";
import type { Language, Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  language: Language;
};

function ProjectCard({
  project,
  index,
  language,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        to={`/${language}/projects/${project.id}`}
        className="project-card-link"
      >
        <div className="project-image">
          <img
            src={project.images[0]}
            alt={project.title[language]}
          />
        </div>

        <div className="project-info">
          <div className="project-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <p className="project-category">
            {project.category[language]}
          </p>

          <h3>{project.title[language]}</h3>

          <div className="project-tools">
            {project.tools.map((tool) => (
              <span key={tool} className="chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;