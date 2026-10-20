import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tight">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, category]) => (
            <div
              key={key}
              className="bg-slate-900/60 rounded-xl p-6 border border-slate-800"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-800">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-200 text-sm font-medium hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
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

export default Skills;
