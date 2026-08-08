export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tools: string[];
    images: string[];
    details?: string;
    github?: string;
  };
  
  export const projects: Project[] = [
    {
        id: "arduino-project",
        title: "Arduino Project",
        category: "Development",
        description:
          "Ein Physical-Computing-Projekt mit Arduino, Sensorik und eigener Programmierung.",
        tools: ["Arduino", "C++", "Sensorik"],
        images: [
          "/projects/arduino-project.jpg",
        ],
        details:
          "Entwicklung eines interaktiven Hardware-Projekts mit Arduino und Sensorik.",
        github: "https://github.com/",
      },
    
    {
      id: "corporate-photography",
      title: "Corporate Photography",
      category: "Photography",
      description:
        "Business- und Corporate-Fotografie mit Fokus auf authentische und professionelle Bildsprache.",
      tools: ["Photography", "Lightroom"],
      images: [
        "/projects/corporate-photography.jpg",
      ],
      details:
        "Fotografische Arbeiten aus dem Business- und Corporate-Bereich.",
    },
  
    {
      id: "social-media-design",
      title: "Social Media",
      category: "Design, Photography",
      description:
        "Konzeption und Gestaltung visueller Inhalte für Social Media, darunter Header und Logo.",
      tools: ["Photoshop", "Illustrator"],
      images: [
        "/projects/social-media-design.png",
        "/projects/social-media-logo.png",
        "/projects/product-photo-1.png",
        "/projects/product-photo-2.png",
        "/projects/product-photo-3.jpg",
      ],
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
      images: [
        "/projects/streaming-layouts.jpg",
      ],
      details:
        "Konzeption und Gestaltung verschiedener visueller Elemente für einen Twitch-Auftritt.",
    },
  
  ];