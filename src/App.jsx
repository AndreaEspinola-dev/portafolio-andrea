import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Download, Sparkles } from "lucide-react";
import { MoonStar,  } from "lucide-react";
import "./App.css";
import "./index.css"
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useState, useEffect } from "react";





// ====== CONFIG EDITABLE ======
const INFO = {
  name: "Andrea Espínola",
  role: "Desarrolladora Full Stack Junior",
  tagline:
    "Analista Programadora apasionada por el desarrollo web y la creación de experiencias digitales útiles, funcionales y orientadas a resolver problemas reales.",
  location: "Santiago, Chile",
  email: "andrea.espinola.fuentes@gmail.com",
  linkedin: "https://linkedin.com/in/andrea-espinola",
  github: "https://github.com/AndreaEspinola-dev",
  cv: "#", // Pon aquí el link a tu CV cuando lo tengas online
};

const PROJECTS = [
  {
    title: "App de Inventario – Spot Essence",
    desc:
      "Gestión de stock en tiempo real: fabricación, movimientos, alertas de bajo stock y roles.",
    stack: ["React", "Firebase", "Tailwind", "Firestore"],
    repo: "https://github.com/AndreaEspinola-dev/spot-essence-inventario",
    demo: "https://docs.google.com/gview?url=https://raw.githubusercontent.com/AndreaEspinola-dev/spot-essence-inventario/main/App%20Spot/App%20Spot%20(1)%20(1).pdf&embedded=true",
    cover:"/imagenes/Spotnegro.jpg"
  },
    // ⭐ FitnessApp
  {
    title: "FitnessApp – Proyecto Colaborativo",
    desc:
      "Aplicación móvil para seguimiento de entrenamientos para mujeres en base a ciclos menstruales, registro de progreso y rutinas personalizadas. Participación como colaboradora en funcionalidades front-end y estructura del proyecto.",
    stack: ["React Native", "Expo", "JavaScript"],
    repo: "https://github.com/AndreaEspinola-dev/FitnessApp",
    demo: "#",
    cover: "/imagenes/appfitness.jpg",
  },
];



const SKILLS = [
  "React",
  "TailwindCSS",
  "Firebase",
  "Firestore",
  "JavaScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Git",
  "UX/UI",
  "Clean Code",
  "REST APIs",
  "SQLserver",
];

const EXPERIENCE = [
  {
    role: "Desarrolladora Full Stack (Práctica)",
    company: "Spot Essence",
    period: "Ene 2025 – Jun 2025",
    bullets: [
      "App web de inventario en tiempo real (fabricación, movimientos, alertas).",
      "Autenticación con roles (admin/operador) y UI responsive.",
      "Firestore para CRUD y suscripciones en vivo.",
      "Capacitación a los trabajadores en el uso de la app, incluyendo demostraciones, acompañamiento y resolución de dudas durante la adopción de la herramienta.",
    ],
    tech: ["React", "Firebase", "Firestore", "TailwindCSS"],
  },
    {
    role: "Desarrolladora Full stack (Colaboradora)",
    company: "FitnessApp – Proyecto Colaborativo",
    period: "2024",
    bullets: [
      "Participación en el desarrollo de una aplicación móvil enfocada en el seguimiento de entrenamientos para mujeres.",
      "Colaboración en funcionalidades basadas en ciclos menstruales, objetivos físicos y métricas de progreso.",
      "Implementación de pantallas, diseño de interfaz y mejora de experiencia de usuaria.",
      "Trabajo colaborativo aplicando buenas prácticas front-end."
    ],
    tech: ["React Native", "Ionic", "Angular","TypeScript", "UI Design"], 
  },
];
const COURSES = [
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


// ============================

export default function App() {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <GradientBg />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 md:px-8">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Courses />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

const NAV_ITEMS = [
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
  { id: "experience", label: "Experiencia" },
  { id: "courses", label: "Cursos" },
  { id: "contact", label: "Contacto" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("projects");

  // Detectar la sección visible mientras se hace scroll
  useEffect(() => {
    const sections = ["projects", "skills", "experience", "courses", "contact"];

    function handleScroll() {
      const scrollY = window.scrollY + 150; // margen para detección más precisa

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_ITEMS = [
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "experience", label: "Experiencia" },
    { id: "courses", label: "Cursos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0b0b12]/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-wide group">
          <MoonStar className="h-5 w-5 text-pink-400 transition-all duration-300 group-hover:rotate-12 group-hover:text-fuchsia-400 animate-pulse" />
          <span>
            Andrea<span className="text-pink-400">.</span>
          </span>
        </a>

        {/* Navbar */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className={`
                relative inline-block px-3 py-1 rounded-md transition-all
                ${activeSection === item.id ? "text-pink-300" : "text-white/80 hover:text-pink-300"}
              `}
            >
              {item.label}

              {/* Línea inferior animada */}
              <span
                className={`
                  absolute left-3 right-3 bottom-0 h-[2px] rounded-full bg-gradient-to-r 
                  from-pink-400 to-fuchsia-500 transition-all duration-300
                  ${activeSection === item.id ? "w-[calc(100%-1.5rem)] opacity-100" : "w-0 opacity-0"}
                `}
              />
            </button>
          ))}
        </nav>

        {/* Botón CV */}
        <a
          href="./CVAndreaEspinola.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-pink-300 border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg px-3 py-1.5"
        >
          <Download className="h-4 w-4" />
          CV
        </a>
      </div>
    </header>
  );
}




function Hero() {
  return (  
    <section className="py-12 md:py-20">
      {/* 2 columnas desde md (>=768px), centrado vertical */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
        {/* === Columna izquierda: texto === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
            Disponible para oportunidades
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
            Andrea Espínola <span className="text-pink-400">—</span>
            <br />
            <span className="text-white/90">Desarrolladora Full Stack Junior</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
            Analista Programadora con experiencia en desarrollo web, bases de datos y
            automatización de procesos. He participado en proyectos full stack con{" "}
            <span className="text-pink-300 font-medium">React</span>,{" "}
            <span className="text-pink-300 font-medium">Firebase</span> y{" "}
            <span className="text-pink-300 font-medium">TailwindCSS</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {/* Botón principal: Ver proyectos */}
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
}

              className="btn-hero-primary"
            >
              <Code2 className="h-5 w-5" />
              Ver proyectos
            </button>

            {/* Botón LinkedIn */}
            <a
              href={INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-secondary"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>

            {/* Botón GitHub */}
            <a
              href={INFO.github}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-secondary"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>

          </div>



          <div className="mt-6 text-sm text-white/60 flex items-center gap-2">
            <User className="h-4 w-4" /> Santiago, Chile
          </div>
        </motion.div>

{/* === Columna derecha: foto con borde giratorio === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Marco animado detrás */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 animate-spin-slow shadow-[0_0_25px_rgba(236,72,153,0.4)]"></div>

            {/* Contenedor interno que tapa el fondo y mantiene el borde visible */}
            <div className="absolute inset-[6px] bg-[#0b0b12] rounded-full overflow-hidden">
              
              <img
                src="/imagenes/Foto_perfil.png"
                alt="Foto de perfil Andrea Espínola"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}




function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="mb-10 sm:mb-12 text-left section-title-group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-block">
        <h2
          className="
            relative text-3xl sm:text-4xl font-bold tracking-tight
            bg-gradient-to-r from-white via-pink-200 to-fuchsia-400 
            bg-clip-text text-transparent
            section-title-text
          "
        >
          {title}

          {/* subrayado animado al aparecer */}
          <motion.span
            className="absolute left-0 right-0 mx-auto -bottom-2 h-[3px] rounded-full 
                      bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </h2>
      </div>

      <p className="text-white/60 mt-3 max-w-2xl text-sm sm:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}





function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12 bg-[#0b0b12] text-white">
      <SectionTitle
        title="Mis Proyectos"
        subtitle="Explora algunos de los desarrollos que he creado."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.05 }}
            className="group card-fx flex flex-col"        // 👈 importante
          >
            {/* Imagen de la card */}
            <div className="card-img">
              <img src={p.cover} alt={p.title} />
            </div>

            {/* Contenido: ahora es flex-col + h-full */}
            <div className="p-5 flex flex-col h-full">
              <h3 className="card-title">
                <span className="project-title-gradient">{p.title}</span>
              </h3>

              <p className="card-desc mt-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>

              {/* mt-auto ⇒ empuja los botones hacia abajo, así todas quedan alineadas */}
              <div className="flex gap-2 mt-auto pt-4">
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost">
                  <Github className="h-4 w-4" /> Repo
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}






function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-12">
      <SectionTitle title="Experiencia" subtitle="Lo más relevante" />

      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="experience-card"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="experience-badge">{e.company}</span>
              <span className="experience-period">{e.period}</span>
            </div>

            <h3 className="experience-role">{e.role}</h3>

            <ul className="list-disc pl-5 space-y-2 text-white/80 mt-3 text-left">

              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            {/* NUEVO: Badge de Tecnologías */}
            <div className="experience-tech-group mt-4">
              {e.tech?.map((t) => (
                <span key={t} className="experience-tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12">
      <SectionTitle
        title="Habilidades"
        subtitle="Tecnologías y herramientas"
      />

      <div className="skills-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


function Courses() {
  return (
    <section id="courses" className="py-8 sm:py-12">
      <SectionTitle
        title="Cursos y Formación"
        subtitle="Estudios complementarios y aprendizajes formales"
      />

      {/* 👉 GRID de tarjetas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 place-items-stretch">

        {COURSES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="course-card h-full"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="course-title text-center leading-tight">{c.title}</h3>
              <span className="course-period">{c.period}</span>
            </div>


            <ul className="course-list mt-3 space-y-1.5 text-left">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionTitle title="Contacto" subtitle="¿Hablamos?" />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="contact-card flex flex-col items-center justify-center text-center"
        >
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="contact-label">Email</p>
              <a
                href={`mailto:${INFO.email}`}
                className="contact-link inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                {INFO.email}
              </a>
            </div>

            <div className="space-y-1">
              <p className="contact-label">LinkedIn</p>
              <a
                href={INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                /andrea-espinola
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card formulario conectado a Formspree */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="contact-card flex flex-col"
        >
          <form
          action="https://formspree.io/f/mdkvvzpb"
          method="POST"
          className="space-y-3"
          >
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Tu email"
              required
            />
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="Mensaje"
              required
            />

            <div className="mt-5 flex justify-end">
              <button type="submit" className="btn-primary px-6">
                Enviar
              </button>
            </div>
          </form>

          <p className="text-xs text-white/40 mt-3 text-center">
            * Este formulario envía tus mensajes directamente a mi correo mediante Formspree.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer-container py-10 mt-10">
      <div className="flex flex-col items-center gap-4">

        {/* Línea decorativa con gradiente */}
        <div className="footer-line" />

        {/* Nombre */}
        <p className="footer-name">
          © {new Date().getFullYear()} {INFO.name}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 mt-1">
          <a
            href={INFO.github}
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${INFO.email}`}
            className="footer-icon"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Texto pequeño */}
        <p className="footer-small">
          Hecho con React + Tailwind · Deployment listo para producción
        </p>
      </div>
    </footer>
  );
}


function GradientBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-20 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}
