import { useState, useEffect } from "react";
import { MoonStar, Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { INFO, NAV_ITEMS } from "../data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);

    function handleScroll() {
      const scrollY = window.scrollY + 150;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú al hacer scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0b0b12]/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-wide group">
          <MoonStar className="h-5 w-5 text-pink-400 transition-all duration-300 group-hover:rotate-12 group-hover:text-fuchsia-400 animate-pulse" />
          <span>Andrea<span className="text-pink-400">.</span></span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative inline-block px-3 py-1 rounded-md transition-all ${
                activeSection === item.id ? "text-pink-300" : "text-white/80 hover:text-pink-300"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-3 right-3 bottom-0 h-[2px] rounded-full bg-linear-to-r from-pink-400 to-fuchsia-500 transition-all duration-300 ${
                  activeSection === item.id ? "w-[calc(100%-1.5rem)] opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Derecha: CV + hamburguesa */}
        <div className="flex items-center gap-2">
          <a
            href={INFO.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-pink-300 border border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg px-3 py-1.5 text-sm"
          >
            <Download className="h-4 w-4" />
            CV
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-pink-300 hover:bg-white/5 transition-all"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#0b0b12]/95 backdrop-blur px-5 pb-4 pt-2 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                  activeSection === item.id
                    ? "text-pink-300 bg-pink-500/10"
                    : "text-white/75 hover:text-pink-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
