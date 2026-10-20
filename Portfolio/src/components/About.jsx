function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white tracking-tight">
          About Me
        </h2>

        <div className="bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-800 text-slate-300 text-base md:text-lg leading-relaxed shadow-sm">
          <p>
            I'm a developer who enjoys building web applications and exploring cloud technologies. I work with React, Node.js, and Express to create web applications, and use Docker, Kubernetes, Jenkins, and AWS to automate deployments. I’m always eager to learn new technologies and build reliable solutions to real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
