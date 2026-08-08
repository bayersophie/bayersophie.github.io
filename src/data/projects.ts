export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tools: string[];
    image: string;
    details?: string;
    github?: string;
  };
  
  export const projects: Project[] = [
    {
      id: "corporate-photography",
      title: "Corporate Photography",
      category: "Photography",
      description:
        "Business- und Corporate-Fotografie mit Fokus auf authentische und professionelle Bildsprache.",
      tools: ["Photography", "Lightroom"],
      image: "/projects/corporate-photography.jpg",
      details:
        "Fotografische Arbeiten aus dem Business- und Corporate-Bereich.",
    },
  
    {
      id: "arduino-project",
      title: "Arduino Project",
      category: "Development",
      description:
        "Ein Physical-Computing-Projekt mit Arduino, Sensorik und eigener Programmierung.",
      tools: ["Arduino", "C++", "Sensorik"],
      image: "/projects/arduino-project.jpg",
      details:
        "Entwicklung eines interaktiven Hardware-Projekts mit Arduino und Sensorik.",
      github: "https://github.com/",
    },
  
    {
      id: "social-media-design",
      title: "Social Media Design",
      category: "Design",
      description:
        "Konzeption und Gestaltung visueller Inhalte für Social Media, darunter Header und Logo.",
      tools: ["Photoshop", "Illustrator"],
      image: "/projects/social-media-design.jpg",
      details:
        "Entwicklung einer visuellen Gestaltung für Social Media mit Fokus auf Wiedererkennbarkeit und konsistentes Branding.",
    },
  
    {
      id: "streaming-layouts",
      title: "Streaming Layouts",
      category: "Design",
      description:
        "Gestaltung von visuellen Layouts und Grafikelementen für Twitch-Streams.",
      tools: ["Photoshop", "Illustrator"],
      image: "/projects/streaming-layouts.jpg",
      details:
        "Konzeption und Gestaltung verschiedener visueller Elemente für einen Twitch-Auftritt.",
    },
  
    {
      id: "semester-planner",
      title: "Semester Planner",
      category: "Design",
      description:
        "Konzeption und Gestaltung eines digitalen Semesterplaners.",
      tools: ["InDesign", "Layout", "Typography"],
      image: "/projects/semester-planner.jpg",
      details:
        "Gestaltung eines übersichtlichen Planers zur Organisation des Studienalltags.",
    },
  ];