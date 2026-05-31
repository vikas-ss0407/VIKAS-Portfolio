import profile from "../assets/profile/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        <div className="space-y-6">
          <p className="text-emerald-400 font-semibold tracking-wider uppercase text-sm drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Hi, I'm Vikas
          </h1>

          <p className="text-slate-300 leading-relaxed text-lg max-w-xl">
            Motivated Full Stack Developer passionate
            about building scalable web applications
            using MERN Stack, Cloud Technologies,
            and IoT Integration.
          </p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="https://drive.google.com/drive/folders/1LpuTCFxE9I5w0PNlwnrciKQVH3N3jSLQ"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Resume
            </a>

            <a
              href="https://github.com/vikas-ss0407"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-slate-700 hover:border-emerald-500 px-8 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-40 blur-2xl group-hover:opacity-60 transition duration-500" />
            <img
              src={profile}
              alt="profile"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800/80 shadow-2xl group-hover:border-emerald-400/80 transition-all duration-500 object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;