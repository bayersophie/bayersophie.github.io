import type { Language, Project } from "../data/projects";

type SimpleProjectDetailProps = {
  project: Project;
  language: Language;
};

const labels = {
  en: { aboutProject: "About the Project" },
  de: { aboutProject: "Über das Projekt" },
};

/**
 * Shared detail layout for projects without a bespoke design
 * (e.g. Arduino, Streaming Layouts). Renders a single hero image
 * plus the project's details text.
 *
 * Falls back gracefully if the image hasn't been uploaded yet.
 */
function SimpleProjectDetail({ project, language }: SimpleProjectDetailProps) {
  const text = labels[language];
  const image = project.images[0];
  const detailParagraphs = project.details?.[language].split("\n\n") ?? [];

  return (
    <>
      {image && (
        <div className="project-page-image">
          <img
            src={image}
            alt={project.title[language]}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.parentElement?.classList.add("is-hidden");
            }}
          />
        </div>
      )}

      {detailParagraphs.length > 0 && (
        <section className="project-details">
          <div className="details-label">
            <p className="eyebrow">{text.aboutProject}</p>
          </div>

          <div className="details-content">
            {detailParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default SimpleProjectDetail;
