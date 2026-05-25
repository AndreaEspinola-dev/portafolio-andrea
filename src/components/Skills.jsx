import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { SKILL_CATEGORIES } from "../data";

const COLOR = {
  pink:    { border: "border-pink-500/30",    bg: "bg-pink-500/10",    text: "text-pink-300",    pill: "border-pink-500/25 bg-pink-500/10 text-pink-200",    dot: "bg-pink-400" },
  purple:  { border: "border-purple-500/30",  bg: "bg-purple-500/10",  text: "text-purple-300",  pill: "border-purple-500/25 bg-purple-500/10 text-purple-200",  dot: "bg-purple-400" },
  indigo:  { border: "border-indigo-500/30",  bg: "bg-indigo-500/10",  text: "text-indigo-300",  pill: "border-indigo-500/25 bg-indigo-500/10 text-indigo-200",  dot: "bg-indigo-400" },
  rose:    { border: "border-rose-500/30",    bg: "bg-rose-500/10",    text: "text-rose-300",    pill: "border-rose-500/25 bg-rose-500/10 text-rose-200",    dot: "bg-rose-400" },
  fuchsia: { border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10", text: "text-fuchsia-300", pill: "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-200", dot: "bg-fuchsia-400" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12">
      <SectionTitle title="Habilidades" subtitle="Tecnologías y herramientas organizadas por área" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((cat, i) => {
          const c = COLOR[cat.color];
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm p-5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Encabezado */}
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                <h3 className={`text-sm font-semibold uppercase tracking-widest ${c.text}`}>
                  {cat.label}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05, duration: 0.3 }}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium ${c.pill}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
