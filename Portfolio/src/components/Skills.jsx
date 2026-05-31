import skills from "../data/skills";

function Skills() {
  const renderSkills = (title, items) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700/60 transition-all duration-300 shadow-lg">
        <h3 className="text-lg font-bold text-emerald-400 mb-5 tracking-wide uppercase">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2.5">
          {items.map((skill) => (
            <span
              key={skill}
              className="bg-slate-900/60 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-500 hover:border-emerald-400 hover:text-slate-950 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {renderSkills("Programming Languages", skills?.programming)}
          {renderSkills("Frontend", skills?.frontend)}
          {renderSkills("Backend", skills?.backend)}
          {renderSkills("Cloud & DevOps", skills?.cloud)}
          {renderSkills("Tools & Platforms", skills?.tools)}
        </div>

      </div>
    </section>
  );
}

export default Skills;