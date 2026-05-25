import { BookOpen, Rocket, Heart } from "lucide-react";

export const INFO = {
  name: "Andrea Espínola",
  role: "Desarrolladora Full Stack Junior",
  location: "Santiago, Chile",
  email: "andrea.espinola.fuentes@gmail.com",
  linkedin: "https://linkedin.com/in/andrea-espinola",
  github: "https://github.com/AndreaEspinola-dev",
  cv: "./CVAndreaEspinola.pdf",
};

export const NAV_ITEMS = [
  { id: "about",      label: "Sobre mí" },
  { id: "projects",   label: "Proyectos" },
  { id: "skills",     label: "Habilidades" },
  { id: "experience", label: "Experiencia" },
  { id: "courses",    label: "Cursos" },
  { id: "contact",    label: "Contacto" },
];

export const PROJECTS = [
  {
    title: "Roco Import",
    category: "E-commerce",
    desc: "Tienda online de lockers, casilleros, kardex, estanterías, bancas y soluciones de almacenamiento para empresas y particulares.",
    stack: ["Next.js", "React", "Tailwind"],
    repo: null,
    demo: "https://www.rocoimport.cl",
    cover: "/imagenes/rocoimport.png",
  },
  {
    title: "Locker Store",
    category: "E-commerce",
    desc: "E-commerce de casilleros metálicos, guardaequipajes y mobiliario de almacenamiento industrial para empresas y colegios.",
    stack: ["Next.js", "React", "Tailwind"],
    repo: null,
    demo: "https://www.lockerstore.cl",
    cover: "/imagenes/lockersstore.png",
  },
  {
    title: "App de Inventario – Spot Essence",
    category: "App Web",
    desc: "Gestión de stock en tiempo real: fabricación, movimientos, alertas de bajo stock y control de roles para una PyME de cosméticos.",
    stack: ["React", "Firebase", "Tailwind", "Firestore"],
    repo: "https://github.com/AndreaEspinola-dev/spot-essence-inventario",
    demo: "https://docs.google.com/gview?url=https://raw.githubusercontent.com/AndreaEspinola-dev/spot-essence-inventario/main/App%20Spot/App%20Spot%20(1)%20(1).pdf&embedded=true",
    cover: "/imagenes/Spotnegro.jpg",
  },
  {
    title: "FitnessApp",
    category: "App Móvil",
    desc: "App de seguimiento de entrenamientos para mujeres basada en ciclos menstruales, con rutinas personalizadas y registro de progreso.",
    stack: ["React Native", "Expo", "JavaScript"],
    repo: "https://github.com/AndreaEspinola-dev/FitnessApp",
    demo: null,
    cover: "/imagenes/appfitness.jpg",
  },
];

export const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    color: "pink",
    skills: ["React", "Next.js", "JavaScript", "TailwindCSS", "HTML/CSS", "UX/UI"],
  },
  {
    label: "Backend",
    color: "purple",
    skills: ["Node.js", "Python", "Firebase", "REST APIs"],
  },
  {
    label: "Bases de datos",
    color: "indigo",
    skills: ["PostgreSQL", "SQL Server", "Firestore", "Supabase"],
  },
  {
    label: "Marketing & SEO",
    color: "rose",
    skills: ["SEO On-Page", "Google Ads", "SEM", "Diseño Web"],
  },
  {
    label: "Tools",
    color: "fuchsia",
    skills: ["Git", "GitHub", "Figma", "Clean Code"],
  },
];

export const EXPERIENCE = [
  {
    role: "Desarrolladora Web & Marketing Digital",
    company: "Mundo Locker",
    period: "Dic 2025 – Presente",
    bullets: [
      "Desarrollo y mantención de sitios web de e-commerce (rocoimport.cl y lockerstore.cl).",
      "Implementación de estrategias SEO on-page: optimización de contenido, metadatos, velocidad y estructura.",
      "Gestión de campañas SEM en Google Ads para aumentar tráfico y conversiones.",
      "Diseño de interfaces y elementos visuales para web y redes sociales.",
    ],
    tech: ["Next.js", "React", "Tailwind", "SEO", "Google Ads", "Diseño Web"],
  },
  {
    role: "Desarrolladora Full Stack (Práctica)",
    company: "Spot Essence",
    period: "Ene 2025 – Jun 2025",
    bullets: [
      "App web de inventario en tiempo real (fabricación, movimientos, alertas).",
      "Autenticación con roles (admin/operador) y UI responsive.",
      "Firestore para CRUD y suscripciones en vivo.",
      "Capacitación a los trabajadores en el uso de la app durante la adopción de la herramienta.",
    ],
    tech: ["React", "Firebase", "Firestore", "TailwindCSS"],
  },
  {
    role: "Desarrolladora Full Stack (Colaboradora)",
    company: "FitnessApp – Proyecto Colaborativo",
    period: "2024",
    bullets: [
      "Desarrollo de una app móvil de seguimiento de entrenamientos para mujeres.",
      "Colaboración en funcionalidades basadas en ciclos menstruales y métricas de progreso.",
      "Implementación de pantallas, diseño de interfaz y mejora de experiencia de usuaria.",
      "Trabajo colaborativo aplicando buenas prácticas front-end.",
    ],
    tech: ["React Native", "Ionic", "Angular", "TypeScript", "UI Design"],
  },
];

export const COURSES = [
  {
    title: "Desarrollo de Software y Programación",
    school: "Instituto Profesional Santo Tomás · Analista Programador",
    period: "2023 – 2025",
    bullets: [
      "Fundamentos de Programación Orientada a Objetos",
      "Estructuras de Datos y Algoritmos",
      "Programación Web",
      "Programación .NET",
      "Programación Android",
      "Patrones de Diseño y Diseño de Software",
    ],
  },
  {
    title: "Bases de Datos y Arquitectura de Sistemas",
    school: "Instituto Profesional Santo Tomás",
    period: "2023 – 2025",
    bullets: [
      "Consulta de Bases de Datos",
      "Diseño de Bases de Datos",
      "Sistemas Operativos Windows",
      "Sistemas Operativos GNU/Linux",
      "Arquitectura de Sistemas",
    ],
  },
  {
    title: "Cloud, IoT e Innovación Tecnológica",
    school: "Instituto Profesional Santo Tomás",
    period: "2024 – 2025",
    bullets: [
      "Computación en la Nube",
      "Internet de las Cosas",
    ],
  },
  {
    title: "Habilidades Profesionales y Comunicación",
    school: "Instituto Profesional Santo Tomás",
    period: "2023 – 2024",
    bullets: [
      "Taller de Habilidades Comunicativas",
      "Comunicación Profesional Efectiva",
      "Orientación al Empleo y Emprendimiento",
      "Iniciativa y Gestión Personal y Social",
      "Ética Profesional",
    ],
  },
];

export const ABOUT_STATS = [
  { icon: BookOpen, label: "Años estudiando", value: "2+" },
  { icon: Rocket,   label: "Proyectos completados", value: "4" },
  { icon: Heart,    label: "Empleos activos", value: "1" },
];
