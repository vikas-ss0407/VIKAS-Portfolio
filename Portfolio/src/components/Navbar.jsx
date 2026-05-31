import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certificates",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-slate-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
          Vikas
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-200 p-1 hover:text-emerald-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/80 animate-fadeIn">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;