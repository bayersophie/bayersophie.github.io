import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import useReveal from "../hooks/useReveal";
import { projects, type Language } from "../data/projects";

type HomeProps = {
  language: Language;
};

function Home({ language }: HomeProps) {
  const content = {
    en: {
      eyebrow: "Media Engineering",
      description: "Photography · Development · Design",
      intro:
        "I combine technical development with visual design and digital media.",
      work: "Selected Work",
      about: "About",
      aboutTitle: "Media Engineering",
      aboutText:
        "I'm a Media Engineering student who enjoys moving between code, design and the camera. This portfolio brings together my work across development, visual design and photography — from small hardware experiments to brand identities and photo series.",
      contact: "Contact",
      contactTitle: "Let's get in touch.",
    },

    de: {
      eyebrow: "Media Engineering",
      description: "Fotografie · Development · Design",
      intro:
        "Ich verbinde technische Entwicklung mit visuellem Design und digitalen Medien.",
      work: "Ausgewählte Arbeiten",
      about: "Über mich",
      aboutTitle: "Media Engineering",
      aboutText:
        "Ich studiere Media Engineering und bewege mich gerne zwischen Code, Gestaltung und Kamera. Dieses Portfolio vereint meine Arbeiten aus den Bereichen Development, Design und Fotografie – von kleinen Hardware-Experimenten bis hin zu Markenauftritten und Fotoserien.",
      contact: "Kontakt",
      contactTitle: "Lass uns in Kontakt bleiben.",
    },
  };

  const text = content[language];

  const [workRef, workVisible] = useReveal<HTMLElement>();
  const [aboutRef, aboutVisible] = useReveal<HTMLElement>();
  const [contactRef, contactVisible] = useReveal<HTMLElement>();

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">{text.eyebrow}</p>

        <h1>Sophie Bayer</h1>

        <p className="hero-description">{text.description}</p>

        <p className="hero-intro">{text.intro}</p>
      </section>

      <section
        id="work"
        ref={workRef}
        className={`reveal ${workVisible ? "is-visible" : ""}`}
      >
        <SectionTitle eyebrow={text.work} />

        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className={`reveal ${aboutVisible ? "is-visible" : ""}`}
      >
        <SectionTitle eyebrow={text.about} heading={text.aboutTitle} />

        <p>{text.aboutText}</p>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`reveal ${contactVisible ? "is-visible" : ""}`}
      >
        <SectionTitle eyebrow={text.contact} heading={text.contactTitle} />

        <a href="mailto:bayer.sophie@outlook.de">bayer.sophie@outlook.de</a>
      </section>
    </main>
  );
}

export default Home;
