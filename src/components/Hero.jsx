import { motion } from "framer-motion";
import { Github, Linkedin, Code2, User } from "lucide-react";
import { INFO } from "../data";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
            Abierta a nuevas oportunidades
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
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-hero-primary"
            >
              <Code2 className="h-5 w-5" />
              Ver proyectos
            </button>

            <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="btn-hero-secondary">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>

            <a href={INFO.github} target="_blank" rel="noreferrer" className="btn-hero-secondary">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>

          <div className="mt-6 text-sm text-white/60 flex items-center gap-2">
            <User className="h-4 w-4" /> {INFO.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-pink-500 via-fuchsia-500 to-indigo-500 animate-spin-slow shadow-[0_0_25px_rgba(236,72,153,0.4)]" />
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
