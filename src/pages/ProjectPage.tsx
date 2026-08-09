import { Link, useParams } from "react-router-dom";
import { projects, type Language } from "../data/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotographyDetail from "../components/PhotographyDetail";
import SimpleProjectDetail from "../components/SimpleProjectDetail";

type ProjectPageProps = {
  language: Language;
};

function ProjectPage({ language }: ProjectPageProps) {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((project) => project.id === id);

  const content = {
    en: {
      back: "← Back to Work",
      notFound: "Project not found",
      concept: "Concept",
      visualIdentity: "Visual Identity",
      productPhotography: "Product Photography",
      aboutProject: "About the Project",
      code: "Code",
      viewGithub: "View on GitHub →",
    },

    de: {
      back: "← Zurück zu den Projekten",
      notFound: "Projekt nicht gefunden",
      concept: "Konzept",
      visualIdentity: "Visuelle Identität",
      productPhotography: "Produktfotografie",
      aboutProject: "Über das Projekt",
      code: "Code",
      viewGithub: "Auf GitHub ansehen →",
    },
  };

  const text = content[language];

  if (!project) {
    return (
      <>
        <Header language={language} />

        <main>
          <section className="project-page">
            <p>{text.notFound}</p>

            <Link to={`/${language}`}>{text.back}</Link>
          </section>
        </main>

        <Footer language={language} />
      </>
    );
  }

  return (
    <>
      <Header language={language} />

      <main>
        <section className="project-page">
        <Link to={`/${language}`} className="back-link">
          {text.back}
        </Link>

        <p className="eyebrow">{project.category[language]}</p>

        <h1>{project.title[language]}</h1>

        <p className="project-description">
          {project.description[language]}
        </p>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>

        {/* =====================================================
            SOCIAL MEDIA — bespoke layout (brand identity project)
        ===================================================== */}

        {project.id === "social-media-design" && (
          <>
            <section className="project-concept">
              <div className="concept-label">
                <p className="eyebrow">{text.concept}</p>
              </div>

              <div className="concept-content">
                {language === "en" ? (
                  <>
                    <p>
                      This project was created for my own{" "}
                      <strong>
                        social media presence focused on crochet
                      </strong>
                      . Since I mainly crochet animals, the visual identity
                      was designed to create a calm and{" "}
                      <strong>natural atmosphere</strong> while reflecting the
                      connection to nature.
                    </p>

                    <p>
                      The colour palette therefore draws from natural shades
                      of green. The logo combines my personal mark with the
                      theme of the project: The{" "}
                      <strong>Phi symbol</strong> represents my nickname and is
                      also part of the brand name Phiber Art. Through its
                      organic shape, it resembles a{" "}
                      <strong>Monstera leaf</strong> at first glance, while the
                      integrated crochet hook establishes the connection to
                      the craft.
                    </p>

                    <p>
                      <strong>
                        The logo therefore combines personal identity, a
                        connection to nature and the theme of crochet in a
                        distinctive visual mark.
                      </strong>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Dieses Projekt entstand für meinen eigenen{" "}
                      <strong>
                        Social-Media-Auftritt rund um das Häkeln
                      </strong>
                      . Da ich hauptsächlich Tiere häkle, sollte die Gestaltung
                      eine ruhige und{" "}
                      <strong>natürliche Atmosphäre</strong> vermitteln und die
                      Verbindung zur Natur widerspiegeln.
                    </p>

                    <p>
                      Die Farbwelt orientiert sich deshalb an natürlichen
                      Grüntönen. Das Logo verbindet mein persönliches
                      Markenzeichen mit dem Thema des Projekts: Das{" "}
                      <strong>Phi-Symbol</strong> steht für meinen Spitznamen
                      und ist gleichzeitig Bestandteil des Brandnamens Phiber
                      Art. Durch die organische Gestaltung erinnert es auf den
                      ersten Blick an ein{" "}
                      <strong>Monstera-Blatt</strong>, während die integrierte
                      Häkelnadel den Bezug zum Handwerk herstellt.
                    </p>

                    <p>
                      <strong>
                        So verbindet das Logo persönliche Identität,
                        Naturverbundenheit und das Thema Häkeln in einem
                        eigenständigen visuellen Zeichen.
                      </strong>
                    </p>
                  </>
                )}
              </div>
            </section>

            <section className="project-visual-identity">
              <p className="eyebrow">{text.visualIdentity}</p>

              <div className="visual-identity-grid">
                <div className="visual-identity-item visual-identity-header">
                  <img
                    src={project.images[0]}
                    alt={`${project.title[language]} – Social Media Header`}
                  />
                </div>

                <div className="visual-identity-item visual-identity-logo">
                  <img
                    src={project.images[1]}
                    alt={`${project.title[language]} – Logo`}
                  />
                </div>
              </div>

              <div className="color-palette">
                {["#07140C", "#0D2612", "#13441E", "#ECECEC"].map((color) => (
                  <div className="color-swatch" key={color}>
                    <div
                      className="color-swatch-preview"
                      style={{ backgroundColor: color }}
                    />

                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="project-product-photography">
              <div className="product-photography-label">
                <p className="eyebrow">{text.productPhotography}</p>
              </div>

              <div className="product-photography-content">
                <p>
                  {language === "en"
                    ? "The product photography builds on the defined brand colour palette and translates it into the visual language of the images. The backgrounds and visual elements are inspired by natural shades of green, creating a visual connection between the products, the brand and the overall social media presence."
                    : "Die Produktfotografie greift die definierte Farbpalette des Brandings auf und überträgt sie auf die Bildgestaltung. Die verwendeten Hintergründe und Bildelemente orientieren sich an den natürlichen Grüntönen und schaffen dadurch eine visuelle Verbindung zwischen Produkt, Marke und Social-Media-Auftritt."}
                </p>

                <div className="product-photo-grid">
                  {project.images.slice(2, 5).map((image, index) => (
                    <div className="product-photo" key={image}>
                      <img
                        src={image}
                        alt={`${project.title[language]} – Product Photo ${
                          index + 1
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {project.details && (
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.aboutProject}</p>
                </div>

                <div className="details-content">
                  {language === "en" ? (
                    <>
                      <p>
                        This project involved developing a distinctive visual
                        identity for my social media presence focused on
                        crochet. The goal was to create a design that feels
                        both personal and professional while reflecting my
                        connection to nature, animals and handicraft.
                      </p>

                      <p>
                        As part of the project, I developed the{" "}
                        <strong>
                          logo, colour palette and visual design
                        </strong>{" "}
                        for the social media content. The focus was on creating
                        a consistent visual language, a natural colour palette
                        and a recognisable overall appearance.
                      </p>

                      <p>
                        The resulting visual identity provides the foundation
                        for my presence under{" "}
                        <strong>Phiber Art</strong> and combines my interests
                        in design, illustration, photography and handicraft.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Dieses Projekt umfasst die Entwicklung einer
                        eigenständigen visuellen Identität für meinen
                        Social-Media-Auftritt rund um das Thema Häkeln. Ziel
                        war es, eine Gestaltung zu entwickeln, die sowohl
                        persönlich als auch professionell wirkt und
                        gleichzeitig meine Verbindung zu Natur, Tieren und
                        Handarbeit widerspiegelt.
                      </p>

                      <p>
                        Im Rahmen des Projekts habe ich das{" "}
                        <strong>
                          Logo, die Farbpalette und die visuelle Gestaltung
                        </strong>{" "}
                        der Social-Media-Inhalte entwickelt. Dabei lag der Fokus
                        auf einer konsistenten Formsprache, einer natürlichen
                        Farbwelt und einem wiedererkennbaren Erscheinungsbild.
                      </p>

                      <p>
                        Die Gestaltung bildet die visuelle Grundlage für meinen
                        Auftritt unter{" "}
                        <strong>Phiber Art</strong> und verbindet meine
                        Interessen an Design, Illustration, Fotografie und
                        Handarbeit.
                      </p>
                    </>
                  )}
                </div>
              </section>
            )}
          </>
        )}

        {/* =====================================================
            PHOTOGRAPHY PROJECTS — shared gallery layout
        ===================================================== */}

        {project.category.en === "Photography" && (
          <PhotographyDetail project={project} language={language} />
        )}

        {/* =====================================================
            DEVELOPMENT / DESIGN PROJECTS WITHOUT A BESPOKE PAGE
        ===================================================== */}

        {project.id !== "social-media-design" &&
          project.category.en !== "Photography" && (
            <SimpleProjectDetail project={project} language={language} />
          )}

        {/* =====================================================
            GITHUB
        ===================================================== */}

        {project.github && (
          <section className="project-github">
            <p className="eyebrow">{text.code}</p>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {text.viewGithub}
            </a>
          </section>
        )}
      </section>
      </main>

      <Footer language={language} />
    </>
  );
}

export default ProjectPage;
