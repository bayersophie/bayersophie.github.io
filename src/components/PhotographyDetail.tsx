import type { Language, Project } from "../data/projects";

type PhotographyDetailProps = {
  project: Project;
  language: Language;
};

const labels = {
  en: {
    photography: "Photography",
    selectedWork: "Selected Work",
    aboutProject: "About the Project",
  },
  de: {
    photography: "Fotografie",
    selectedWork: "Ausgewählte Arbeiten",
    aboutProject: "Über das Projekt",
  },
};

/**
 * Shared detail layout for all photography projects (corporate,
 * maternity, animals, ...). Renders an intro, an image gallery
 * built from project.images, and an optional details section.
 *
 * Images that haven't been uploaded yet are hidden gracefully
 * instead of showing a broken-image icon.
 */
function PhotographyDetail({ project, language }: PhotographyDetailProps) {
  const text = labels[language];
  const detailParagraphs = project.details?.[language].split("\n\n") ?? [];

  return (
    <>
      <section className="photography-intro">
        <div className="photography-intro-label">
          <p className="eyebrow">{text.photography}</p>
        </div>

        <div className="photography-intro-content">
          <p>{project.description[language]}</p>
        </div>
      </section>

      <section className="photography-gallery">
        <p className="eyebrow">{text.selectedWork}</p>

        <div className="photography-gallery-grid">
          {project.images.map((image, index) => (
            <div className="photography-gallery-item" key={image}>
              <img
                src={image}
                alt={`${project.title[language]} – ${text.selectedWork} ${
                  index + 1
                }`}
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
      </section>

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

export default PhotographyDetail;
