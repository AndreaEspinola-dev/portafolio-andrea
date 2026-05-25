import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { COURSES } from "../data";

export default function Courses() {
  return (
    <section id="courses" className="py-8 sm:py-12">
      <SectionTitle
        title="Cursos y Formación"
        subtitle="Estudios complementarios y aprendizajes formales"
      />

      <div className="grid sm:grid-cols-2 gap-8 place-items-stretch">
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
