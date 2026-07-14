import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AILab from "@/components/AILab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AILab />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
