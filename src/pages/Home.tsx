import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Home() {
  return (
    <main>
<section className="hero">
  <p className="eyebrow">Media Engineering</p>

  <h1>
    Sophie Bayer
  </h1>

  <p className="hero-description">
    Photography · Development · Design
  </p>

  <p className="hero-intro">
    I combine technical development with visual design
    and digital media.
  </p>
</section>

      <section id="work">
        <p className="eyebrow">Selected Work</p>

        <div className="projects">
  {projects.map((project, index) => (
    <ProjectCard
      key={project.id}
      project={project}
      index={index}
    />
  ))}
</div>
      </section>

      <section id="about">
        <p className="eyebrow">About</p>

        <h2>Media Engineering</h2>

        <p>
          I am a Media Engineering student interested in the intersection
          of technology, design and visual media.
        </p>
      </section>

      <section id="contact">
        <p className="eyebrow">Contact</p>

        <h2>Let's get in touch.</h2>

        <a href="mailto:bayer.sophie@outlook.de">
          bayer.sophie@outlook.de
        </a>
      </section>
    </main>
  );
}

export default Home;