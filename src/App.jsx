import "./App.css";
import "./index.css";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

import GradientBg  from "./components/GradientBg";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Projects    from "./components/Projects";
import Skills      from "./components/Skills";
import Experience  from "./components/Experience";
import Courses     from "./components/Courses";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

export default function App() {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <GradientBg />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 md:px-8">
        <Hero />
        <About />
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
