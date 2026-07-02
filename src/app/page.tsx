import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/Aboutme";
import Skills from "@/components/Skills";
import Projects from "@/components/project";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Experience />
      <ContactSection />
      <Footer />
    </main>
  );
}