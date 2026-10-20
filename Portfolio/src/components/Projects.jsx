import projects from "../data/projects";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tight">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="text-emerald-400 font-medium">
                    {project.subtitle}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {project.patent && (
                  <div className="mb-3 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                    {project.patent}
                  </div>
                )}

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
