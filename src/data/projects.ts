export type Language = "en" | "de";

export type Project = {
  id: string;
  title: {
    en: string;
    de: string;
  };
  category: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  tools: string[];
  images: string[];
  details?: {
    en: string;
    de: string;
  };
  github?: string;
};

export const projects: Project[] = [
  {
    id: "arduino-project",

    title: {
      en: "Arduino",
      de: "Arduino",
    },

    category: {
      en: "Development",
      de: "Development",
    },

    description: {
      en: "A physical computing project combining Arduino, sensors and custom programming.",
      de: "Ein Physical-Computing-Projekt mit Arduino, Sensorik und eigener Programmierung.",
    },

    tools: ["Arduino", "C++", "Sensors"],

    images: ["/projects/arduino-project.jpg"],

    details: {
      en: "Development of an interactive hardware project using Arduino and sensor technology.",
      de: "Entwicklung eines interaktiven Hardware-Projekts mit Arduino und Sensorik.",
    },

    github: "https://github.com/",
  },

  {
    id: "social-media-design",

    title: {
      en: "Social Media",
      de: "Social Media",
    },

    category: {
      en: "Design",
      de: "Design",
    },

    description: {
      en: "Concept and visual design for a social media presence, including branding, graphic design and product photography.",
      de: "Konzeption und visuelle Gestaltung eines Social-Media-Auftritts mit Branding, Grafikdesign und Produktfotografie.",
    },

    tools: ["Photoshop", "Illustrator", "Photography"],

    images: [
      "/projects/social-media-design.png",
      "/projects/social-media-logo.png",
      "/projects/product-photo-1.png",
      "/projects/product-photo-2.png",
      "/projects/product-photo-3.jpg",
    ],

    details: {
      en: "Development of a cohesive visual identity for a social media presence, focusing on recognisable branding, a natural colour palette and consistent visual communication.",
      de: "Entwicklung einer eigenständigen visuellen Identität für einen Social-Media-Auftritt mit Fokus auf Wiedererkennbarkeit, einer natürlichen Farbpalette und konsistenter visueller Kommunikation.",
    },
  },

  {
    id: "streaming-layouts",

    title: {
      en: "Streaming",
      de: "Streaming",
    },

    category: {
      en: "Design",
      de: "Design",
    },

    description: {
      en: "Visual layouts and graphic elements designed for Twitch streaming.",
      de: "Visuelle Layouts und Grafikelemente für Twitch-Streams.",
    },

    tools: ["Photoshop", "Illustrator", "After Effects"],

    images: ["/projects/streaming-layouts.jpg"],

    details: {
      en: "Concept and design of various visual elements for a cohesive Twitch streaming presence.",
      de: "Konzeption und Gestaltung verschiedener visueller Elemente für einen einheitlichen Twitch-Auftritt.",
    },
  },

  {
    id: "corporate-photography",

    title: {
      en: "Corporate",
      de: "Corporate",
    },

    category: {
      en: "Photography",
      de: "Fotografie",
    },

    description: {
      en: "Business and corporate photography with a focus on authentic portraits, professional imagery and natural visual storytelling.",
      de: "Business- und Corporate-Fotografie mit Fokus auf authentischen Porträts, professioneller Bildsprache und natürlichem Storytelling.",
    },

    tools: ["Photography", "Lightroom"],

    images: [
      "/projects/photography/corporate/corporate-1.jpg",
      "/projects/photography/corporate/corporate-2.jpg",
      "/projects/photography/corporate/corporate-3.jpg",
      "/projects/photography/corporate/corporate-4.jpg",
      "/projects/photography/corporate/corporate-5.jpg",
      "/projects/photography/corporate/corporate-7.jpg",
      "/projects/photography/corporate/corporate-8.jpg",
      "/projects/photography/corporate/corporate-9.jpg",
      "/projects/photography/corporate/corporate-10.jpg",
    ],

    details: {
      en: "A selection of photographic work created for a professional business environment. The focus was on authentic portraits, natural expressions and a professional yet approachable visual language.\n\nThe photography focuses on creating a balance between a professional visual language and authentic human moments. Rather than relying on heavily staged poses, the images aim to capture natural expressions and interactions.\n\nThe resulting photographs can be used to communicate personality, professionalism and the atmosphere of a company through a consistent visual language.",
      de: "Eine Auswahl fotografischer Arbeiten aus einem professionellen Business-Umfeld. Der Fokus lag auf authentischen Porträts, natürlichen Ausdrucksformen und einer professionellen, gleichzeitig zugänglichen Bildsprache.\n\nDie Fotografien verbinden eine professionelle Bildsprache mit authentischen menschlichen Momenten. Statt stark inszenierter Posen liegt der Fokus auf natürlichen Ausdrücken und Interaktionen.\n\nDie entstandenen Fotografien vermitteln Persönlichkeit, Professionalität und die Atmosphäre eines Unternehmens durch eine konsistente visuelle Bildsprache.",
    },
  },

  {
    id: "maternity-photography",

    title: {
      en: "Maternity",
      de: "Maternity",
    },

    category: {
      en: "Photography",
      de: "Fotografie",
    },

    description: {
      en: "Maternity photography capturing personal moments, natural emotions and the connection between people.",
      de: "Babybauchfotografie, die persönliche Momente, natürliche Emotionen und die Verbindung zwischen Menschen festhält.",
    },

    tools: ["Photography", "Lightroom"],

    images: [
      "/projects/photography/maternity/maternity-1.jpg",
      "/projects/photography/maternity/maternity-2.jpg",
      "/projects/photography/maternity/maternity-3.jpg",
      "/projects/photography/maternity/maternity-4.jpg",
      "/projects/photography/maternity/maternity-5.jpg",
      "/projects/photography/maternity/maternity-6.jpg",
    ],

    details: {
      en: "A maternity photography series focused on authentic moments and an intimate visual atmosphere.",
      de: "Eine Babybauch-Fotografieserie mit Fokus auf authentischen Momenten und einer intimen Bildatmosphäre.",
    },
  },

  {
    id: "nature-wildlife",

    title: {
      en: "Animals",
      de: "Tiere",
    },

    category: {
      en: "Photography",
      de: "Fotografie",
    },

    description: {
      en: "Animal photography focusing on pets, details and atmospheric moments.",
      de: "Tierfotografie mit Fokus auf Haustiere, Details und atmosphärische Momente.",
    },

    tools: ["Photography", "Lightroom"],

    images: [
      "/projects/photography/animals/animals-1.jpg",
      "/projects/photography/animals/animals-2.jpg",
      "/projects/photography/animals/animals-3.jpg",
      "/projects/photography/animals/animals-4.jpg",
      "/projects/photography/animals/animals-5.jpg",
      "/projects/photography/animals/animals-6.jpg",
      "/projects/photography/animals/animals-7.jpg",
      "/projects/photography/animals/animals-8.jpg",
    ],

    details: {
      en: "A collection of animal photographs exploring personality, natural moments and atmospheric compositions.",
      de: "Eine Sammlung von Tierfotografien, die Persönlichkeit, natürliche Momente und atmosphärische Bildkompositionen festhält.",
    },
  },
];