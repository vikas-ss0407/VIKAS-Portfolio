function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          About Me
        </h2>

        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-slate-800/60 shadow-xl space-y-6">

          <p className="text-slate-300 leading-relaxed text-lg">
            I am a Full Stack Developer currently pursuing B.E. Electronics and Communication Engineering at Sri Eshwar College of Engineering.
          </p>

          <p className="text-slate-300 leading-relaxed text-lg">
            I specialize in React.js, Node.js, Express.js, MongoDB and cloud-based application development.
          </p>

          <p className="text-slate-300 leading-relaxed text-lg">
            My interests include building scalable web applications, integrating IoT devices, leveraging cloud technologies, and solving real-world problems using software engineering.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;