import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { EXPERIENCE } from "../data";

export default function Experience() {
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
