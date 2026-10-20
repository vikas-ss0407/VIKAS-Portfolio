import profile from "../assets/profile/profile.png";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-emerald-400 font-semibold text-base tracking-wide">
              Full Stack Developer | DevOps Engineer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-emerald-400">Vikas S S</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Turning ideas into working applications and streamlining the journey from development to deployment.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://drive.google.com/drive/folders/1tvV92MWocOro8Z5jKdBkIZmVRwvIef_A?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Me
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/vikas-ss0407"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/vikasss0407/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center">
            <div className="relative">
              <img
                src={profile}
                alt="Vikas S S"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
