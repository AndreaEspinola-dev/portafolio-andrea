import { motion } from "framer-motion";
import { GraduationCap, Rocket, Briefcase, Target } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { ABOUT_STATS } from "../data";

const TIMELINE = [
  {
    year: "2023",
    icon: GraduationCap,
    title: "Inicio de carrera",
    desc: "Comienzo Analista Programadora en el Instituto Profesional Santo Tomás. Primeros pasos en programación, bases de datos y arquitectura de software.",
    color: "from-indigo-500 to-purple-500",
    dot: "bg-indigo-500",
  },
  {
    year: "2024",
    icon: Rocket,
    title: "FitnessApp — Primer proyecto colaborativo",
    desc: "Colaboración en app móvil de entrenamientos para mujeres basada en ciclos menstruales. Primeras experiencias en React Native y trabajo en equipo.",
    color: "from-purple-500 to-fuchsia-500",
    dot: "bg-purple-500",
  },
  {
    year: "Ene 2025",
    icon: Briefcase,
    title: "Práctica en Spot Essence",
    desc: "Desarrollo de app web de inventario en tiempo real con Firebase, autenticación por roles y capacitación a los trabajadores de la empresa.",
    color: "from-fuchsia-500 to-pink-500",
    dot: "bg-fuchsia-500",
  },
  {
    year: "Dic 2025",
    icon: Briefcase,
    title: "Mundo Locker — Trabajo actual",
    desc: "Desarrollo de tiendas e-commerce , estrategias SEO/SEM y diseño de interfaces para web y redes sociales.",
    color: "from-pink-500 to-rose-400",
    dot: "bg-pink-500",
    active: true,
  },
  {
    year: "Hoy",
    icon: Target,
    title: "Disponible para nuevos desafíos",
    desc: "Buscando una oportunidad donde seguir creciendo como desarrolladora, aportar desde el día uno y aprender de un equipo con experiencia.",
    color: "from-rose-400 to-orange-400",
    dot: "bg-rose-400",
    highlight: true,
  },
];

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12">
      <SectionTitle
        title="Sobre mí"
        subtitle="Mi camino hasta aquí"
      />

      {/* Stats fila */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {ABOUT_STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm py-5 px-3 text-center"
            >
              <Icon className="h-5 w-5 text-pink-400" />
              <p className="text-2xl font-bold bg-linear-to-r from-pink-300 to-fuchsia-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 leading-tight">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Línea vertical */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-indigo-500 via-pink-500 to-rose-400 opacity-40" />

        <div className="flex flex-col gap-8">
          {TIMELINE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-6 pl-14"
              >
                {/* Dot + icono */}
                <div className={`absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${item.highlight ? "border-rose-400 bg-rose-400/15" : "border-white/15 bg-white/5"} backdrop-blur-sm`}>
                  <Icon className={`h-5 w-5 ${item.highlight ? "text-rose-400" : "text-pink-400"}`} />
                </div>

                {/* Contenido */}
                <div className={`flex-1 rounded-2xl border px-5 py-4 transition-all duration-300 ${
                  item.highlight
                    ? "border-rose-400/40 bg-rose-400/5"
                    : item.active
                    ? "border-pink-500/30 bg-pink-500/5"
                    : "border-white/8 bg-white/3"
                }`}>
                  <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
                    <h3 className={`font-semibold text-sm sm:text-base ${item.highlight ? "text-rose-300" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium shrink-0 ${
                      item.highlight
                        ? "border-rose-400/50 text-rose-300 bg-rose-400/10"
                        : item.active
                        ? "border-pink-500/40 text-pink-300 bg-pink-500/10"
                        : "border-white/15 text-white/50 bg-white/5"
                    }`}>
                      {item.year}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
