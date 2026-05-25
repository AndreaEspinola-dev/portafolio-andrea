import { Github, Linkedin, Mail } from "lucide-react";
import { INFO } from "../data";

export default function Footer() {
  return (
    <footer className="footer-container py-10 mt-10">
      <div className="flex flex-col items-center gap-4">
        <div className="footer-line" />

        <p className="footer-name">© {new Date().getFullYear()} {INFO.name}</p>

        <div className="flex items-center gap-6 mt-1">
          <a href={INFO.github} target="_blank" rel="noreferrer" className="footer-icon">
            <Github className="h-5 w-5" />
          </a>
          <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="footer-icon">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${INFO.email}`} className="footer-icon">
            <Mail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
