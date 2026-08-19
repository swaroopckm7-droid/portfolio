import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-[#FACC15] selection:text-black relative overflow-x-hidden">
      {/* Dynamic Background Canvas */}
      <ParticleBackground />

      {/* Main App Container */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
