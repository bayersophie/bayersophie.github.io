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
      aboutText: [
      "I'm a Media Engineering student particularly interested in the intersection of technology, design and visual communication. I enjoy working across disciplines and combining technical solutions with a strong sense of design and aesthetics.",

      "My studies combine programming and technical development with digital media, graphic design and photography. This allows me to approach projects from different perspectives — from technical implementation and visual design to photographic communication. I particularly enjoy the process of turning an idea into a functional and visually convincing result.",

      "My portfolio reflects this versatility: from programming and hardware projects to visual concepts, branding and photography. I aim to combine my technical knowledge with creative approaches to create digital and visual experiences that are both functional and thoughtfully designed.",
    ],
      contact: "Contact",
      contactTitle: "Let's get in touch.",
      contactIntro:
        "I'd love to hear from you — whether it's about a project, an open position, or just to connect.",
      location: "Nuremberg/Fürth, Germany",
      availability: "Open to: working student roles · internships",
      workMode: "Available on-site and remotely",
      downloadCv: "Download CV",
    },

    de: {
      eyebrow: "Media Engineering",
      description: "Fotografie · Development · Design",
      intro:
        "Ich verbinde technische Entwicklung mit visuellem Design und digitalen Medien.",
      work: "Ausgewählte Arbeiten",
      about: "Über mich",
      aboutTitle: "Media Engineering",
      aboutText: [
      "Ich studiere Media Engineering und interessiere mich besonders für die Schnittstelle zwischen Technologie, Gestaltung und visueller Kommunikation. Dabei arbeite ich gerne interdisziplinär und verbinde technische Lösungen mit einem ausgeprägten Gespür für Design und Ästhetik.",

      "Mein Studium verbindet Programmierung und technische Entwicklung mit digitalen Medien, Grafikdesign und Fotografie. Dadurch kann ich Projekte aus unterschiedlichen Perspektiven betrachten – von der technischen Umsetzung über die visuelle Gestaltung bis hin zur fotografischen Kommunikation. Besonders spannend finde ich dabei den Prozess, aus einer Idee ein funktionierendes und visuell überzeugendes Ergebnis zu entwickeln.",

      "Mein Portfolio zeigt diese Vielseitigkeit: von Programmier- und Hardwareprojekten über visuelle Konzepte und Markenauftritte bis hin zu Fotografie. Ich möchte meine technischen Kenntnisse mit kreativen Ansätzen verbinden, um digitale und visuelle Erlebnisse zu gestalten, die sowohl funktional als auch durchdacht sind.",
    ],
      contact: "Kontakt",
      contactTitle: "Lass uns ins Gespräch kommen.",
      contactIntro:
        "Ich freue mich über eine Nachricht – ob zu einem Projekt, einer offenen Stelle oder einfach zum fachlichen Austausch.",
      location: "Nürnberg/Fürth",
      availability: "Offen für: Werkstudentenstellen · Praktika",
      workMode: "Vor Ort und remote verfügbar",
      downloadCv: "Lebenslauf herunterladen",
    },
  };

  const text = content[language];

  const contactLinks = [
    { label: "GitHub", href: "https://github.com/bayersophie" },
    // TODO: LinkedIn-Link ergänzen, sobald vorhanden.
    { label: "LinkedIn", href: "" },
  ];

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

        <div className="about-text">
  {text.aboutText.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className={`reveal ${contactVisible ? "is-visible" : ""}`}
      >
        <SectionTitle eyebrow={text.contact} heading={text.contactTitle} />

        <p className="contact-intro">{text.contactIntro}</p>

        <div className="contact-meta">
          <span className="chip">{text.location}</span>
          <span className="chip">{text.availability}</span>
          <span className="chip">{text.workMode}</span>
        </div>

        <a href="mailto:bayer.sophie@outlook.de" className="contact-email">
          bayer.sophie@outlook.de
        </a>

        <div className="contact-actions">
          <div className="contact-links">
            {contactLinks
              .filter((link) => link.href)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} →
                </a>
              ))}
          </div>

          <a
  href={language === "de" ? "/cv-de.pdf" : "/cv-en.pdf"}
  download
  className="cv-download"
>
  {text.downloadCv}
</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
