import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="mb-10 sm:mb-12 text-left section-title-group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-block">
        <h2 className="relative text-3xl sm:text-4xl font-bold tracking-tight bg-linear-to-r from-white via-pink-200 to-fuchsia-400 bg-clip-text text-transparent section-title-text">
          {title}
          <motion.span
            className="absolute left-0 right-0 mx-auto -bottom-2 h-[3px] rounded-full bg-linear-to-r from-pink-500 via-fuchsia-500 to-indigo-500"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </h2>
      </div>
      <p className="text-white/60 mt-3 max-w-2xl text-sm sm:text-base">{subtitle}</p>
    </motion.div>
  );
}
