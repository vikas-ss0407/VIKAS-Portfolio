import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./SocialIcons";

function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-slate-900 bg-slate-950/60 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
            Contact
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vikasss0407@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-emerald-400 text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>vikasss0407@gmail.com</span>
          </a>

          <a
            href="https://drive.google.com/drive/folders/1tvV92MWocOro8Z5jKdBkIZmVRwvIef_A?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold transition-colors"
          >
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
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

          <a
            href="https://leetcode.com/u/vikasss0407/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="LeetCode"
          >
            <LeetcodeIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="text-slate-500 text-xs pt-8 border-t border-slate-900">
          © {new Date().getFullYear()} Vikas S S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
