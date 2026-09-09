import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
 <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
