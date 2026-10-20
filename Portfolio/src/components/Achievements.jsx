import achievements from "../data/achievements";
import { ExternalLink } from "lucide-react";

function Achievements() {
  return (
    <section id="patents" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tight">
          Patents & Achievements
        </h2>

        {/* Patents */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {achievements.patents.map((patent) => (
            <div
              key={patent.id}
              className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="text-emerald-400 font-semibold">
                    Indian Patent Published
                  </span>
                  <span>{patent.publishedYear}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {patent.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium mb-3">
                  {patent.appNo}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {patent.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon & Competitive Programming */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hackathon Card */}
          <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-400 block mb-2">
                Hackathon Recognition
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                {achievements.hackathons[0].title}
              </h3>
              <p className="text-sm font-medium text-slate-200 mb-2">
                {achievements.hackathons[0].award} ({achievements.hackathons[0].year})
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {achievements.hackathons[0].description}
              </p>
            </div>
          </div>

          {/* Competitive Programming Card */}
          <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800">
            <span className="text-xs font-semibold text-emerald-400 block mb-3">
              Competitive Programming
            </span>
            <div className="space-y-3">
              {achievements.codingProfiles.map((cp) => (
                <div
                  key={cp.platform}
                  className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between"
                >
                  <div>
                    <span className="text-white font-semibold text-sm mr-2">
                      {cp.platform}:
                    </span>
                    <span className="text-emerald-400 text-xs font-medium mr-2">
                      {cp.badge}
                    </span>
                    <span className="text-slate-400 text-xs block sm:inline">
                      ({cp.stats})
                    </span>
                  </div>
                  <a
                    href={cp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white p-1"
                    aria-label={cp.platform}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;
