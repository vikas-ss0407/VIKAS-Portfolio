import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative text-white scroll-smooth min-h-screen selection:bg-emerald-500/30">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;