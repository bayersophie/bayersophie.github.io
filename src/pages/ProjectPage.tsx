import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <main>
        <section className="project-page">
          <p>Project not found</p>
          <Link to="/">← Back to Home</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="project-page">
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

        <section className="project-concept">
          <div className="concept-label">
            <p className="eyebrow">Concept</p>
          </div>

          <div className="concept-content">
            <p>
              Das Projekt entstand für meinen eigenen{" "}
              <strong>Social-Media-Auftritt rund um das Häkeln</strong>. Da ich
              hauptsächlich Tiere häkle, sollte die Gestaltung eine ruhige und{" "}
              <strong>natürliche Atmosphäre</strong> vermitteln und die Verbindung
              zur Natur widerspiegeln.
            </p>

            <p>
              Die Farbwelt orientiert sich deshalb an natürlichen Grüntönen. Das Logo
              verbindet mein persönliches Markenzeichen mit dem Thema des Projekts:
              Das <strong>Phi-Symbol</strong> steht für meinen Spitznamen und ist
              gleichzeitig Bestandteil des Brandnamens Phiber Art. Durch die organische
              Gestaltung erinnert es auf den ersten Blick an ein{" "}
              <strong>Monstera-Blatt</strong>, während die integrierte Häkelnadel den
              Bezug zum Handwerk herstellt.
            </p>

            <p>
              <strong>
                So verbindet das Logo persönliche Identität, Naturverbundenheit und das
                Thema Häkeln in einem eigenständigen visuellen Zeichen.
              </strong>
            </p>
          </div>
        </section>

        <section className="project-visual-identity">
          <p className="eyebrow">Visual Identity</p>

          <div className="visual-identity-grid">
            <div className="visual-identity-item visual-identity-header">
              <img
                src={project.images[0]}
                alt={`${project.title} – Social Media Header`}
              />
            </div>

            <div className="visual-identity-item visual-identity-logo">
              <img
                src={project.images[1]}
                alt={`${project.title} – Logo`}
              />
            </div>
          </div>

          <div className="color-palette">
            <div className="color-swatch">
              <div
                className="color-swatch-preview"
                style={{ backgroundColor: "#07140C" }}
              />
              <span>#07140C</span>
            </div>

            <div className="color-swatch">
              <div
                className="color-swatch-preview"
                style={{ backgroundColor: "#0D2612" }}
              />
              <span>#0D2612</span>
            </div>

            <div className="color-swatch">
              <div
                className="color-swatch-preview"
                style={{ backgroundColor: "#13441E" }}
              />
              <span>#13441E</span>
            </div>

            <div className="color-swatch">
              <div
                className="color-swatch-preview"
                style={{ backgroundColor: "#ECECEC" }}
              />
              <span>#ECECEC</span>
            </div>
          </div>
        </section>

        <section className="project-product-photography">
          <div className="product-photography-label">
            <p className="eyebrow">Product Photography</p>
          </div>

          <div className="product-photography-content">
            <p>
              Die Produktfotografie greift die definierte Farbpalette des
              Brandings auf und überträgt sie auf die Bildgestaltung. Die
              verwendeten Hintergründe und Bildelemente orientieren sich an
              den natürlichen Grüntönen und schaffen dadurch eine visuelle
              Verbindung zwischen Produkt, Marke und Social-Media-Auftritt.
            </p>

            <div className="product-photo-grid">
              {project.images.slice(2, 5).map((image, index) => (
                <div className="product-photo" key={image}>
                  <img
                    src={image}
                    alt={`${project.title} – Product Photo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.details && (
          <section className="project-details">
            <div className="details-label">
              <p className="eyebrow">About the Project</p>
            </div>

            <div className="details-content">
              <p>
                Dieses Projekt umfasst die Entwicklung einer eigenständigen
                visuellen Identität für meinen Social-Media-Auftritt rund um
                das Thema Häkeln. Ziel war es, eine Gestaltung zu entwickeln,
                die sowohl persönlich als auch professionell wirkt und
                gleichzeitig meine Verbindung zu Natur, Tieren und Handarbeit
                widerspiegelt.
              </p>

              <p>
                Im Rahmen des Projekts habe ich das{" "}
                <strong>Logo, die Farbpalette und die visuelle Gestaltung</strong>{" "}
                der Social-Media-Inhalte entwickelt. Dabei lag der Fokus auf
                einer konsistenten Formsprache, einer natürlichen Farbwelt und
                einem wiedererkennbaren Erscheinungsbild.
              </p>

              <p>
                Die Gestaltung bildet die visuelle Grundlage für meinen Auftritt
                unter <strong>Phiber Art</strong> und verbindet meine Interessen
                an Design, Illustration, Fotografie und Handarbeit.
              </p>
            </div>
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
      </section>
    </main>
  );
}

export default ProjectPage;