import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800/60 shadow-xl hover:shadow-emerald-950/20 hover:border-slate-700/80 transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden h-52 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-emerald-400/90 text-xs font-medium tracking-wide mt-1 uppercase">
                  {project.subtitle}
                </p>

                <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900/80 border border-slate-800/80 text-slate-400 px-2.5 py-1 rounded-md text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-800/60">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all flex-1 text-center"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-emerald-500/40 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-4 py-2.5 rounded-lg transition-all flex-1 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;