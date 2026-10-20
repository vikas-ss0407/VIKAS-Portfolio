import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative text-white scroll-smooth min-h-screen w-full overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-white">
      {/* Animated background positioned at z-0 */}
      <Background />

      {/* Main Layout placed above background at z-10 */}
      <div className="relative z-10 w-full flex flex-col min-h-screen pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        <main className="flex-grow pointer-events-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Certificates />
          <Education />
        </main>

        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
