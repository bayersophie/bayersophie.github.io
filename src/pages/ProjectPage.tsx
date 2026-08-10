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
      myRole: "My Role",
      technicalSetup: "Technical Setup",
      physicalSystem: "Physical System",
      dataFlow: "Data Flow",
      interaction: "Interaction",
      result: "Outcome",
      graphics: "Graphics",
      hardware: "Hardware",
      results: "Final Interface",
      code: "Code",
      webUI: "Web UI",
      arduinoBackend: "Arduino Backend",
      viewGithub: "View on GitHub →",
    },

    de: {
      back: "← Zurück zu den Projekten",
      notFound: "Projekt nicht gefunden",
      concept: "Konzept",
      visualIdentity: "Visuelle Identität",
      productPhotography: "Produktfotografie",
      aboutProject: "Über das Projekt",
      myRole: "Meine Rolle",
      technicalSetup: "Technischer Aufbau",
      physicalSystem: "Physische Ebene",
      dataFlow: "Datenfluss",
      interaction: "Interaktion",
      result: "Ergebnis",
      graphics: "Grafiken",
      hardware: "Hardware",
      results: "Finale Umsetzung",
      code: "Code",
      webUI: "Web UI",
      arduinoBackend: "Arduino Backend",
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
              INTERACTIVE GREENHOUSE
          ===================================================== */}

          {project.id === "interactive-greenhouse" && (
            <>
              {/* ABOUT THE PROJECT */}
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.aboutProject}</p>
                </div>

                <div className="details-content">
                  {language === "en" ? (
                    <>
                      <p>
                        As part of a university project, we developed a
                        <strong> virtual, interactive greenhouse</strong>{" "}
                        that is connected to a real plant in real time.
                        Sensors monitor the plant and transmit environmental
                        data to a browser interface, where the virtual
                        environment changes dynamically.
                      </p>

                      <p>
                        The virtual world can be explored through
                        <strong> drag & drop and touch interactions</strong>.
                        Moisture triggers a rain animation, light controls the
                        transition between day and night, and movement of the
                        real plant is interpreted as wind.
                      </p>

                      <p>
                        All central visual elements – including the plants,
                        shelf, table and background – were created specifically
                        for the project. The result combines
                        <strong>
                          {" "}
                          hardware, web development and visual design
                        </strong>
                        in one interactive system.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Im Rahmen eines Hochschulprojekts entwickelten wir ein
                        <strong> virtuelles, interaktives Gewächshaus</strong>,
                        das in Echtzeit mit einer echten Pflanze verbunden ist.
                        Sensoren erfassen den Zustand der Pflanze und übertragen
                        die Daten an ein Browserinterface, in dem sich eine
                        digitale Umgebung dynamisch verändert.
                      </p>

                      <p>
                        Die virtuelle Welt kann über
                        <strong> Drag & Drop und Touch-Interaktionen</strong>{" "}
                        erkundet werden. Feuchtigkeit löst beispielsweise eine
                        Regenanimation aus, Helligkeit steuert den Wechsel
                        zwischen Tag und Nacht und Bewegungen der Pflanze werden
                        als Wind interpretiert.
                      </p>

                      <p>
                        Alle zentralen visuellen Elemente – darunter Pflanzen,
                        Regal, Tisch und Hintergrund – wurden für das Projekt
                        selbst gestaltet. Dadurch verbindet das Projekt
                        <strong>
                          {" "}
                          Hardware, Webentwicklung und visuelle Gestaltung
                        </strong>{" "}
                        in einer interaktiven Anwendung.
                      </p>
                    </>
                  )}
                </div>
              </section>

              {/* MY ROLE */}
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.myRole}</p>
                </div>

                <div className="details-content">
                  {language === "en" ? (
                    <>
                      <p>
                        The project was developed collaboratively as a team.
                        My main areas of responsibility were
                        <strong>
                          {" "}
                          hardware, concept development and documentation
                        </strong>
                        .
                      </p>

                      <p>
                        I was involved in selecting and setting up the required
                        sensors and worked with an
                        <strong> Arduino MKR 1000 WiFi</strong>, an
                        accelerometer, a light sensor and a capacitive soil
                        moisture sensor.
                      </p>

                      <p>
                        I was also responsible for the
                        <strong> conceptual development and documentation
                        </strong>{" "}
                        of the project, including documenting the technical
                        setup and the data flow between the real plant and the
                        virtual greenhouse.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Das Projekt wurde in Teamarbeit entwickelt. Mein
                        Schwerpunkt lag auf der
                        <strong>
                          {" "}
                          Hardware, der konzeptionellen Ausarbeitung und der
                          Dokumentation
                        </strong>
                        .
                      </p>

                      <p>
                        Ich war an der Auswahl und dem Aufbau der benötigten
                        Sensorik beteiligt und arbeitete mit einem
                        <strong> Arduino MKR 1000 WiFi</strong>, einem
                        Beschleunigungssensor, einem Helligkeitssensor und einem
                        Bodenfeuchtigkeitssensor.
                      </p>

                      <p>
                        Darüber hinaus war ich für die Ausarbeitung des Konzepts und die Dokumentation
                        des Projekts verantwortlich. Dabei wurde der technische
                        Aufbau und der Datenfluss zwischen der realen Pflanze und
                        dem virtuellen Gewächshaus nachvollziehbar festgehalten.
                      </p>
                    </>
                  )}
                </div>
              </section>

              {/* HARDWARE */}
              <section className="project-gallery-section">
                <div className="section-label">
                  <p className="eyebrow">{text.hardware}</p>
                </div>

                <div className="project-gallery hardware-gallery">
                  {project.images.slice(0, 2).map((image, index) => (
                    <div className="project-gallery-item hardware-gallery-item" key={image}>
                      <img
                        src={image}
                        alt={
                          language === "en"
                            ? `Arduino hardware – ${index + 1}`
                            : `Arduino Hardware – ${index + 1}`
                        }
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* TECHNICAL SETUP */}
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.technicalSetup}</p>
                </div>

                <div className="details-content">
                  <h3>{text.physicalSystem}</h3>

                  <ul>
                    {language === "en" ? (
                      <>
                        <li>Arduino MKR 1000 WiFi</li>
                        <li>MMA8451 Accelerometer</li>
                        <li>LDR (Photoresistor)</li>
                        <li>Capacitive Soil Moisture Sensor</li>
                      </>
                    ) : (
                      <>
                        <li>Arduino MKR 1000 WiFi</li>
                        <li>MMA8451 Beschleunigungssensor</li>
                        <li>LDR (Fotowiderstand)</li>
                        <li>Kapazitiver Bodenfeuchtigkeitssensor</li>
                      </>
                    )}
                  </ul>

                  <h3>{text.dataFlow}</h3>

                  <p className="project-data-flow">
                    {language === "en"
                      ? "Sensors → Arduino → HTTP/state → Browser interface → visual reactions"
                      : "Sensoren → Arduino → HTTP/state → Browserinterface → visuelle Reaktionen"}
                  </p>

                  {language === "en" ? (
                    <p>
                      The Arduino reads, processes and calibrates the sensor values and
                      provides them as JSON data through a web server. The browser interface
                      regularly retrieves this data and uses it to control the virtual
                      environment.
                    </p>
                  ) : (
                    <p>
                      Der Arduino erfasst die Sensorwerte, verarbeitet und kalibriert sie
                      und stellt sie über einen Webserver als JSON-Daten bereit. Das
                      Browserinterface ruft diese Daten regelmäßig ab und nutzt sie zur
                      Steuerung der virtuellen Umgebung.
                    </p>
                  )}
                </div>
              </section>

              {/* GREENHOUSE GRAPHICS */}
              <section className="project-gallery-section">
                <div className="section-label">
                  <p className="eyebrow">{text.graphics}</p>
                </div>

                <div className="project-gallery project-gallery-three">
                  {project.images.slice(2, 8).map((image, index) => (
                    <div className="project-gallery-item" key={image}>
                      <img
                        src={image}
                        alt={
                          language === "en"
                            ? `Own graphic – ${index + 1}`
                            : `Eigene Grafik – ${index + 1}`
                        }
                      />
                    </div>
                  ))}
                </div>
              </section>
              
              {/* INTERACTION */}
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.interaction}</p>
                </div>

                <div className="details-content">
                  {language === "en" ? (
                    <ul>
                      <li>
                        <strong>Soil moisture</strong> → Plant health indicator and rain
                      </li>
                      <li>
                        <strong>Brightness</strong> → Day/night transition
                      </li>
                      <li>
                        <strong>Movement</strong> → Wind animation
                      </li>
                      <li>
                        <strong>Drag & Drop</strong> → Plants can be positioned inside the digital
                        greenhouse
                      </li>
                      <li>
                        <strong>Touch / Click</strong> → Displays the current plant status
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <strong>Bodenfeuchtigkeit</strong> → Lebensanzeige der Pflanze und
                        Regen
                      </li>
                      <li>
                        <strong>Helligkeit</strong> → Tag-/Nachtwechsel
                      </li>
                      <li>
                        <strong>Bewegung</strong> → Windanimation
                      </li>
                      <li>
                        <strong>Drag & Drop</strong> → Pflanzen lassen sich im digitalen Gewächshaus
                        positionieren
                      </li>
                      <li>
                        <strong>Touch / Klick</strong> → Anzeige des aktuellen
                        Pflanzenzustands
                      </li>
                    </ul>
                  )}
                </div>
              </section>

              {/* RESULTS */}
              <section className="project-gallery-section">
                <div className="section-label">
                  <p className="eyebrow">{text.results}</p>
                </div>

                <div className="project-gallery project-gallery-two">
                  {project.images.slice(8, 10).map((image, index) => (
                    <div className="project-gallery-item" key={image}>
                      <img
                        src={image}
                        alt={
                          language === "en"
                            ? `Project result – ${index + 1}`
                            : `Projektergebnis – ${index + 1}`
                        }
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULT DESCRIPTION */}
              <section className="project-details">
                <div className="details-label">
                  <p className="eyebrow">{text.result}</p>
                </div>

                <div className="details-content">
                  {language === "en" ? (
                    <p>
                      The finished system connects a real plant with a
                      playful digital environment. Instead of presenting
                      sensor data only as numbers, the project makes the
                      plant's condition directly
                      <strong>
                        {" "}
                        visible and interactive
                      </strong>{" "}
                      .
                    </p>
                  ) : (
                    <p>
                      Das fertige System verbindet eine reale Pflanze mit einer
                      spielerischen digitalen Umgebung. Dadurch werden
                      abstrakte Sensordaten nicht nur als Zahlen dargestellt,
                      sondern unmittelbar
                      <strong>
                        {" "}
                        visuell und interaktiv erfahrbar
                      </strong>{" "}
                      gemacht.
                    </p>
                  )}
                </div>
              </section>

              
            </>
          )}

          {/* =====================================================
              SOCIAL MEDIA — bespoke layout
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
                        theme of the project: The <strong>Phi symbol</strong>{" "}
                        represents my nickname and is also part of the brand
                        name Phiber Art. Through its organic shape, it resembles
                        a <strong>Monstera leaf</strong> at first glance, while
                        the integrated crochet hook establishes the connection
                        to the craft.
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
                        . Da ich hauptsächlich Tiere häkle, sollte die
                        Gestaltung eine ruhige und{" "}
                        <strong>natürliche Atmosphäre</strong> vermitteln und
                        die Verbindung zur Natur widerspiegeln.
                      </p>

                      <p>
                        Die Farbwelt orientiert sich deshalb an natürlichen
                        Grüntönen. Das Logo verbindet mein persönliches
                        Markenzeichen mit dem Thema des Projekts: Das{" "}
                        <strong>Phi-Symbol</strong> steht für meinen Spitznamen
                        und ist gleichzeitig Bestandteil des Brandnamens Phiber
                        Art. Durch die organische Gestaltung erinnert es auf den
                        ersten Blick an ein <strong>Monstera-Blatt</strong>,
                        während die integrierte Häkelnadel den Bezug zum
                        Handwerk herstellt.
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
                  {["#07140C", "#0D2612", "#13441E", "#ECECEC"].map(
                    (color) => (
                      <div className="color-swatch" key={color}>
                        <div
                          className="color-swatch-preview"
                          style={{ backgroundColor: color }}
                        />

                        <span>{color}</span>
                      </div>
                    )
                  )}
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
                          for my presence under <strong>Phiber Art</strong> and
                          combines my interests in design, illustration,
                          photography and handicraft.
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
                          der Social-Media-Inhalte entwickelt. Dabei lag der
                          Fokus auf einer konsistenten Formsprache, einer
                          natürlichen Farbwelt und einem wiedererkennbaren
                          Erscheinungsbild.
                        </p>

                        <p>
                          Die Gestaltung bildet die visuelle Grundlage für
                          meinen Auftritt unter <strong>Phiber Art</strong> und
                          verbindet meine Interessen an Design, Illustration,
                          Fotografie und Handarbeit.
                        </p>
                      </>
                    )}
                  </div>
                </section>
              )}
            </>
          )}

          {/* =====================================================
              PHOTOGRAPHY PROJECTS
          ===================================================== */}

          {project.category.en === "Photography" && (
            <PhotographyDetail project={project} language={language} />
          )}

          {/* =====================================================
              DEVELOPMENT / DESIGN PROJECTS
          ===================================================== */}

          {project.id !== "social-media-design" &&
            project.id !== "interactive-greenhouse" &&
            project.category.en !== "Photography" && (
              <SimpleProjectDetail
                project={project}
                language={language}
              />
            )}

          {/* =====================================================
              GITHUB
          ===================================================== */}

          {project.github && (
            <section className="project-github">
              <p className="eyebrow">{text.code}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
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