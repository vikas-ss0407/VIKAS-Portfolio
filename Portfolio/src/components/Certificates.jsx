import certificates from "../data/certificates";

function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/50 shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 flex items-center group"
            >
              <h3 className="font-medium leading-relaxed text-slate-300 group-hover:text-slate-100 transition-colors text-base">
                {certificate}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;