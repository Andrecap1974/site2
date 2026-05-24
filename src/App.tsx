import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import SatiricalFooter from "./components/SatiricalFooter";
import SeoSection from "./components/SeoSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  // Multi-Section scroll observer to dynamically highlight the active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "servicos", "galeria", "contato"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased selection:bg-[#D4AF37]/35 selection:text-white text-[#F5F5F5] overflow-x-hidden">
      {/* Floating navigation bar for quick access once the user scroll past the fullscreen Hero */}
      <FloatingNav activeSection={activeSection} />

      {/* Main Sections */}
      <HeroSection onNavClick={setActiveSection} activeSection={activeSection} />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <SeoSection />
      <SatiricalFooter />
    </div>
  );
}

// Compact premium floating helper navigation bar
function FloatingNav({ activeSection }: { activeSection: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "galeria", label: "Galeria" },
    { id: "contato", label: "Contato" }
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-lg px-4 hidden md:block">
      <div 
        className="px-6 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-2xl"
        style={{
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"
        }}
      >
        {/* Brand signet */}
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF37] pl-2 uppercase">
          CMA • EST. 2005
        </span>

        {/* Links */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                activeSection === item.id
                  ? "bg-[#D4AF37] text-[#050505] font-bold shadow-md"
                  : "text-gray-400 hover:text-[#F5F5F5] hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
