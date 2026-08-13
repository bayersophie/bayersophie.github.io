import type { Language, Project } from "../data/projects";

type SimpleProjectDetailProps = {
  project: Project;
  language: Language;
};

const labels = {
  en: { aboutProject: "About the Project" },
  de: { aboutProject: "Über das Projekt" },
};

function SimpleProjectDetail({
  project,
  language,
}: SimpleProjectDetailProps) {
  const text = labels[language];
  const detailParagraphs = project.details?.[language].split("\n\n") ?? [];

  return (
    <>
      {project.images.length > 0 && (
        <div
          className={`simple-project-gallery ${
            project.images.length === 2
              ? "simple-project-gallery-two"
              : project.images.length === 4
              ? "simple-project-gallery-four"
              : ""
          }`}
        >
          {project.images.map((image, index) => (
            <div
              className={`simple-project-gallery-item ${
                project.images.length === 4 && index === 0
                  ? "is-featured"
                  : ""
              }`}
              key={image}
            >
              <img
                src={image}
                alt={`${project.title[language]} – ${index + 1}`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.parentElement?.classList.add(
                    "is-hidden"
                  );
                }}
              />
            </div>
          ))}
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