import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/v logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Patents", id: "patents" },
    { label: "Certificates", id: "certificates" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        {/* Brand with Logo */}
        <a 
          href="/" 
          onClick={scrollToTop} 
          className="flex items-center gap-3 text-xl font-bold text-white hover:text-emerald-400 transition-colors group"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="w-8 h-8 rounded-lg object-contain group-hover:scale-105 transition-transform" 
          />
          <span>Vikas S S</span>
        </a>

        {/* Desktop Links (smooth scroll without # in URL) */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden sm:block">
          <a
            href="https://drive.google.com/drive/folders/1tvV92MWocOro8Z5jKdBkIZmVRwvIef_A?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={(e) => {
                setMobileOpen(false);
                scrollToSection(e, item.id);
              }}
              className="block w-full text-left text-slate-300 hover:text-emerald-400 text-sm font-medium py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="https://drive.google.com/drive/folders/1tvV92MWocOro8Z5jKdBkIZmVRwvIef_A?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
