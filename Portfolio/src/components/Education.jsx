import education from "../data/education";

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Education
        </h2>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">

          {education.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline Bullet Anchor */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-emerald-400 transition-colors duration-300" />
              
              <div className="bg-slate-900/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-800/60 shadow-lg group-hover:border-slate-700/80 transition-all">
                <span className="text-xs font-mono text-emerald-400/80 font-semibold uppercase tracking-wider block mb-2">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                  {item.institution}
                </h3>

                <p className="text-slate-300 font-medium mt-1">
                  {item.degree}
                </p>

                <div className="inline-block bg-slate-800/60 border border-slate-700/50 rounded-lg px-3 py-1 mt-4 text-sm font-semibold text-emerald-400">
                  Score: {item.score}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;