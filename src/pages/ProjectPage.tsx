import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <main>
        <h1>Project not found</h1>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="project-page">
      <Link to="/" className="back-link">
        ← Back to Work
      </Link>

      <p className="eyebrow">{project.category}</p>

      <h1>{project.title}</h1>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-tools">
        {project.tools.map((tool) => (
          <span key={tool} className="chip">
            {tool}
          </span>
        ))}
      </div>

      <div className="project-hero-image">
        <img src={project.image} alt={project.title} />
      </div>

      {project.details && (
        <section className="project-details">
          <p className="eyebrow">About the Project</p>
          <p>{project.details}</p>
        </section>
      )}

      {project.github && (
        <section className="project-github">
          <p className="eyebrow">Code</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </section>
      )}
    </main>
  );
}

export default ProjectPage;