export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tools: string[];
    image: string;
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
    },
  
    {
      id: "arduino-project",
      title: "Arduino Project",
      category: "Development",
      description:
        "Ein Physical-Computing-Projekt mit Arduino, Sensorik und eigener Programmierung.",
      tools: ["Arduino", "C++", "Sensorik"],
      image: "/projects/arduino-project.jpg",
    },
  
    {
      id: "social-media-design",
      title: "Social Media Design",
      category: "Design",
      description:
        "Konzeption und Gestaltung visueller Inhalte für Social Media, darunter Header und Logo.",
      tools: ["Photoshop", "Illustrator"],
      image: "/projects/social-media-design.jpg",
    },
  
    {
      id: "streaming-layouts",
      title: "Streaming Layouts",
      category: "Design",
      description:
        "Gestaltung von visuellen Layouts und Grafikelementen für Twitch-Streams.",
      tools: ["Photoshop", "Illustrator"],
      image: "/projects/streaming-layouts.jpg",
    },
  
    {
      id: "semester-planner",
      title: "Semester Planner",
      category: "Design",
      description:
        "Konzeption und Gestaltung eines digitalen Semesterplaners.",
      tools: ["InDesign", "Layout", "Typography"],
      image: "/projects/semester-planner.jpg",
    },
  ];