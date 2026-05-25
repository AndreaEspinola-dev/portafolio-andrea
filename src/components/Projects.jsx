import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12">
      <SectionTitle
        title="Mis Proyectos"
        subtitle="Explora algunos de los desarrollos que he creado."
      />

      <div className="grid sm:grid-cols-2 gap-6 items-stretch">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group card-fx flex flex-col"
          >
            {/* Imagen con overlay y zoom */}
            <div className="card-img-wrapper">
              <img src={p.cover} alt={p.title} loading="lazy" className="card-img-photo" />
              {/* Degradado inferior */}
              <div className="card-img-gradient" />
              {/* Overlay hover con icono */}
              <div className="card-img-overlay">
                <ExternalLink className="h-7 w-7 text-white opacity-90" />
              </div>
              {/* Badge de categoría sobre la imagen */}
              <span className="card-category-badge">{p.category}</span>
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-1 gap-3">
              <h3 className="project-title-gradient text-lg font-bold leading-snug">
                {p.title}
              </h3>

              <p className="text-white/65 text-sm leading-relaxed">{p.desc}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>

              {/* Separador */}
              <div className="h-px bg-white/8 mt-1" />

              {/* Botones */}
              <div className="flex gap-2 pt-1">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Github className="h-4 w-4" /> Repo
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink className="h-4 w-4" /> Ver sitio
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
