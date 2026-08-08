import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Home() {
    return (
      <main>
        <section className="hero">
          <p className="hero-label">Media Engineering Student</p>
  
          <h1>
            Sophie
            <br />
            Bayer
          </h1>
  
          <p className="hero-description">
            Photography · Development · Design
          </p>
        </section>
  
        <section id="work">
  <p className="eyebrow">Selected Work</p>

  <div className="projects">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</section>
  
        <section id="about">
          <h2>About</h2>
  
          <p>
            I am a Media Engineering student interested in the intersection
            of technology, design and visual media.
          </p>
        </section>
  
        <section id="contact">
          <h2>Contact</h2>
  
          <p>Get in touch.</p>
        </section>
      </main>
    );
  }
  
  export default Home;