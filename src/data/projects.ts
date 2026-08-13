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
    id: "interactive-greenhouse",

    title: {
      en: "Interactive Greenhouse",
      de: "Interaktives Gewächshaus",
    },

    category: {
      en: "Development",
      de: "Development",
    },

    description: {
  en: "An interaction design project combining physical hardware, sensors and custom programming.",
  de: "Ein Interaktionsdesign-Projekt, das physische Hardware, Sensorik und eigene Programmierung verbindet.",
},

    tools: ["Arduino", "C++", "Sensors"],

    images: [
  "/projects/development/greenhouse/greenhouse-1.jpg",
  "/projects/development/greenhouse/greenhouse-2.jpg",
  "/projects/development/greenhouse/greenhouse-3.png",
  "/projects/development/greenhouse/greenhouse-4.png",
  "/projects/development/greenhouse/greenhouse-5.png",
  "/projects/development/greenhouse/greenhouse-6.png",
  "/projects/development/greenhouse/greenhouse-7.png",
  "/projects/development/greenhouse/greenhouse-8.png",
  "/projects/development/greenhouse/greenhouse-9.png",
  "/projects/development/greenhouse/greenhouse-10.png",
],

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

    images: [
      "/projects/design/streaming/streaming-1.png",
      "/projects/design/streaming/streaming-2.png",
      "/projects/design/streaming/streaming-3.png",
      "/projects/design/streaming/streaming-4.png",
    ],

    details: {
      en: "Design of a complete Twitch stream overlay including a broadcast area, webcam frame, chat window and info panels for Recent Follow and Recent Subscribe. The social media icons are subtly integrated into the bottom bar, keeping the focus on the stream content itself.\n\nThe overlay is complemented by several channel panels, including \"About Me\", \"Instagram\" and \"Hardware\", designed in a consistent dark theme with teal accents. Cohesive typography and decorative frame elements create a recognisable, professional look across the entire channel.",
      de: "Gestaltung eines kompletten Stream-Overlays für Twitch, bestehend aus Broadcast-Bereich, Webcam-Rahmen, Chat-Fenster und Info-Panels für Recent Follow und Recent Subscribe. Die Social-Media-Icons sind dezent in die untere Leiste integriert, sodass der Fokus klar auf dem Stream-Inhalt bleibt.\n\nErgänzt wird das Overlay durch mehrere Panels für den Kanal, darunter „Über mich\", „Instagram\" und „Hardware\", die in einem einheitlichen dunklen Design mit türkisfarbenen Akzenten gehalten sind. Die durchgängige Typografie und die grafischen Rahmenelemente sorgen für einen wiedererkennbaren, professionellen Look über den gesamten Kanal hinweg.",
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

    tools: ["Fujifilm XT-4", "Lightroom"],

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

    tools: ["Fujifilm XT-4", "Lightroom"],

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

    tools: ["Canon EOS 550D", "Lightroom"],

    images: [
      "/projects/photography/animals/animals-1.webp",
      "/projects/photography/animals/animals-2.webp",
      "/projects/photography/animals/animals-3.webp",
      "/projects/photography/animals/animals-4.webp",
      "/projects/photography/animals/animals-5.webp",
      "/projects/photography/animals/animals-6.webp",
      "/projects/photography/animals/animals-7.webp",
      "/projects/photography/animals/animals-8.webp",
    ],

    details: {
      en: "This photographic project features animal portraits created during individual photo sessions. The focus is on quiet and natural moments, as well as the careful observation of expression, posture and character.\n\nEach session took place with animals belonging to different owners, requiring me to adapt to different personalities and behaviours. Rather than following fixed poses or routines, I observed the animals and adjusted the composition to suit the individual situation.\n\nThe resulting series captures the individual character of each animal in a natural and understated way.",

      de: "In diesem fotografischen Projekt entstanden Porträtaufnahmen von Tieren im Rahmen individueller Shootings. Der Schwerpunkt liegt auf ruhigen und natürlichen Momenten sowie der bewussten Wahrnehmung von Ausdruck, Haltung und Charakter.\n\nDa jedes Shooting mit Tieren anderer Halter:innen stattfand, musste ich mich auf unterschiedliche Persönlichkeiten und Verhaltensweisen einstellen. Anstatt feste Abläufe vorzugeben, habe ich die Situationen beobachtet und die Bildgestaltung entsprechend angepasst.\n\nDabei entstand eine Serie von Aufnahmen, die den individuellen Charakter der Tiere auf natürliche und zurückhaltende Weise festhält.",
    },
  },
];