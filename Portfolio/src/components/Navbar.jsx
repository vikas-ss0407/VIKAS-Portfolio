import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Patents", href: "#patents" },
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
          Vikas S S
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
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
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-300 hover:text-emerald-400 text-sm font-medium py-1 transition-colors"
            >
              {item.label}
            </a>
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
