import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white tracking-tight">
          Experience
        </h2>

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 rounded-xl p-6 md:p-8 border border-slate-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm">
                    {item.company}
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {item.period}
                </span>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
