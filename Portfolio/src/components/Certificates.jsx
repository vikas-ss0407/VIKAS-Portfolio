import certificates from "../data/certificates";
import { ExternalLink } from "lucide-react";

function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tight">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/60 rounded-xl p-5 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="text-emerald-400 font-medium">
                    {cert.issuer}
                  </span>
                  <span>{cert.year}</span>
                </div>

                <h3 className="font-semibold text-white text-base leading-snug">
                  {cert.title}
                </h3>
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-3 border-t border-slate-800 flex justify-end">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
