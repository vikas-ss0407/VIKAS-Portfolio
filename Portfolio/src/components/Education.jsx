import education from "../data/education";

function Education() {
  return (
    <section id="education" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tight">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 rounded-xl p-6 md:p-7 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-xs font-semibold text-emerald-400 block mb-1">
                  {item.period}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {item.institution}
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  {item.degree}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-block bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-emerald-400">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
