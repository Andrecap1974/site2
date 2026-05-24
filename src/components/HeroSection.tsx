import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PawPrint, Home, Heart, X, Sparkles } from "lucide-react";
import heroBg from "../assets/images/pomeranian_bg_hd_1779631847463.png";

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function HeroSection({ onNavClick, activeSection }: HeroSectionProps) {
  const [showPhilosophyModal, setShowPhilosophyModal] = useState(false);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    onNavClick(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* EXATAMENTE a imagem anexada como fundo principal */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center select-none z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Subtle dark overlay gradient to ensure high-contrast on different screen sizes */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none z-1" />

      {/* Top section: Paw Button and brand with sleek gold styling */}
      <header className="relative w-full p-8 md:p-12 flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
          <motion.button
            id="paw-button"
            onClick={() => setShowPhilosophyModal(true)}
            className="w-12 h-12 rounded-xl bg-black/50 glass-panel flex items-center justify-center border border-[#D4AF37]/30 active:translate-y-0.5 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#D4AF37",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <PawPrint className="w-5 h-5 text-[#D4AF37]" />
          </motion.button>
          
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white uppercase sm:block">Cão Meu Amigo</span>
            <span className="text-[8px] tracking-[0.4em] text-[#D4AF37] -mt-1 uppercase">ADESTRAMENTO</span>
          </div>
        </div>

        {/* Decorative corner accent badge */}
        <div className="text-[10px] tracking-[0.2em] font-mono text-[#D4AF37]/80 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/5 uppercase select-none">
          EST. 2005
        </div>
      </header>

      {/* Center Left section: Title & Slogan with refined fonts */}
      <main className="relative flex-1 flex flex-col justify-center items-start px-8 md:px-20 max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
            18 ANOS DE EXCELÊNCIA
          </div>
          <h1 className="font-sans text-5xl md:text-8xl font-light text-white leading-[0.95] tracking-tight">
            Treinando <span className="italic font-serif text-[#D4AF37] font-normal">Cães</span><br />
            Para o <span className="font-bold">Futuro.</span>
          </h1>

          {/* Sleek Slogan Pill */}
          <div className="inline-block pt-2">
            <motion.div
              id="slogan-pill"
              className="px-6 py-3.5 rounded-full bg-black/40 glass-panel border border-[#D4AF37]/30 text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2.5"
              whileHover={{ scale: 1.02, borderColor: "#D4AF37" }}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              TREINANDO CÃES PARA O FUTURO
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Bottom section: Navigation tabs styled like glass ribbon */}
      <footer className="relative w-full p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 p-2 rounded-2xl bg-black/50 glass-panel border border-white/5"
          style={{
            boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >
          {/* Active / Início Tab - Neumorphic design exactly as shown in reference but in Sleek colorway */}
          <button
            id="nav-inicio"
            onClick={() => scrollTo("inicio")}
            className={`px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              activeSection === "inicio"
                ? "bg-[#D4AF37] text-black"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Início
          </button>

          {/* Poetic "Não se trata de..." link, creatively presented */}
          <button
            id="nav-philosophy"
            onClick={() => setShowPhilosophyModal(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-serif text-[#D4AF37]/90 hover:text-white text-left transition-all cursor-pointer italic max-w-[190px] truncate md:max-w-none"
          >
            Não se trata de...
          </button>

          <button
            id="nav-sobre"
            onClick={() => scrollTo("sobre")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
              activeSection === "sobre" ? "bg-white/10 text-white border border-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Sobre
          </button>

          <button
            id="nav-servicos"
            onClick={() => scrollTo("servicos")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
              activeSection === "servicos" ? "bg-white/10 text-white border border-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Serviços
          </button>

          <button
            id="nav-galeria"
            onClick={() => scrollTo("galeria")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
              activeSection === "galeria" ? "bg-white/10 text-white border border-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Galeria
          </button>

          <button
            id="nav-contato"
            onClick={() => scrollTo("contato")}
            className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
              activeSection === "contato" ? "bg-white/10 text-white border border-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Contato
          </button>
        </motion.nav>

        {/* Scroll Indicator badge */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 glass-panel text-gray-300 text-[10px] font-mono tracking-widest uppercase"
        >
          <span>ROLE PARA SABER MAIS</span>
          <span className="text-[#D4AF37]">↓</span>
        </motion.div>
      </footer>

      {/* Philosophy Modal ("Não se trata de uma questão de...") */}
      <AnimatePresence>
        {showPhilosophyModal && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#121212] w-full max-w-xl rounded-2xl p-8 md:p-10 relative overflow-hidden border border-[#D4AF37]/30"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.9)"
              }}
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <button 
                onClick={() => setShowPhilosophyModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                  <Heart className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]/10" />
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-bold font-mono tracking-[0.2em] text-[#D4AF37] uppercase">Nossa Visão</span>
                  <h3 className="text-3xl font-light font-serif text-white tracking-tight leading-tight">
                    Não se trata de uma questão de...
                  </h3>
                </div>

                <blockquote className="text-base text-gray-300 italic font-light font-serif leading-relaxed max-w-md">
                  &ldquo;...obrigação ou controle cego. Não se trata de uma questão de força, de submeter o animal ou de punir comportamentos. Trata-se de uma verdadeira conversa com quem ama você, baseada no respeito, na compreensão e na amizade sincera.&rdquo;
                </blockquote>

                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  Adestrar é compreender a mente do cão e integrar o afeto no seu dia a dia. Há 18 anos nós ajudamos famílias a se conectarem de forma profunda com seus cães em São Leopoldo e região.
                </p>

                <button
                  onClick={() => setShowPhilosophyModal(false)}
                  className="px-8 py-3 rounded-full bg-[#D4AF37] text-black hover:bg-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Continuar Explorando
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
