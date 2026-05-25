import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { INFO } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionTitle title="Contacto" subtitle="¿Hablamos?" />

      <div className="grid md:grid-cols-2 gap-6">
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
              <a href={`mailto:${INFO.email}`} className="contact-link inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {INFO.email}
              </a>
            </div>

            <div className="space-y-1">
              <p className="contact-label">LinkedIn</p>
              <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="contact-link inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                /andrea-espinola
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="contact-card flex flex-col"
        >
          <form action="https://formspree.io/f/mdkvvzpb" method="POST" className="space-y-3">
            <input className="contact-input" type="text" name="name" placeholder="Tu nombre" required />
            <input className="contact-input" type="email" name="email" placeholder="Tu email" required />
            <textarea className="contact-textarea" name="message" placeholder="Mensaje" required />
            <div className="mt-5 flex justify-end">
              <button type="submit" className="btn-primary px-6">Enviar</button>
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
