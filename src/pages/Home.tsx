import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Experience from '../sections/Experience';

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] text-[#4A5759] font-sans selection:bg-[#EDAFB8]/40 selection:text-[#4A5759] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
