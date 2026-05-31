function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900/50 border-t border-slate-900 relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-extrabold text-center tracking-tight text-slate-100">
          Let's Connect
        </h2>

        <p className="text-center text-slate-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">
          Open to internships, collaborations and software development opportunities.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <a
            href="mailto:vikasss0407@gmail.com"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
          >
            Email Me
          </a>

          <a
            href="https://github.com/vikas-ss0407"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white text-sm font-medium px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vikasss0407"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white text-sm font-medium px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-900/80 text-slate-500 text-xs tracking-wider">
          © {new Date().getFullYear()} Vikas. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;