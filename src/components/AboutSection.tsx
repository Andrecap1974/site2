import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, MapPin, Sparkles, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const cities = [
    "São Leopoldo",
    "Novo Hamburgo",
    "Campo Bom",
    "Sapiranga",
    "Estância Velha",
    "Canoas",
    "Dois Irmãos",
    "Ivoti",
    "Portão"
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-16 bg-[#050505] text-[#F5F5F5] relative overflow-hidden border-t border-white/5">
      {/* Decorative blurred circles for an elegant cinematic feeling */}
      <div className="absolute top-24 -right-16 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Modern content card */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                CONHEÇA NOSSA JORNADA
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
                Cão Meu Amigo Adestramento
                <span className="block mt-2 font-serif italic text-[#D4AF37] text-3xl md:text-4xl">
                  18 Anos Educando com Respeito e Conexão
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Fundada há mais de 18 anos, a <strong className="font-semibold text-white">Cão Meu Amigo Adestramento</strong> é referência em treinamento e psicologia canina no Rio Grande do Sul. Nosso trabalho foca em aproximar animais e tutores mediante uma linguagem enriquecedora, clara e respeitosa.
              </p>
              <p>
                Desenvolvemos metodologias sob medida voltadas para o perfil comportamental de cada indivíduo doméstico. Não adestramos simplesmente o animal — construímos uma ponte de inteligência e sensibilidade, gerando harmonia sustentável para o ambiente familiar.
              </p>
            </div>

            {/* Micro bento highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div 
                className="p-5 rounded-2xl bg-white/3 border border-white/5 flex gap-4 hover:border-[#D4AF37]/30 transition-all"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Longa Experiência</h4>
                  <p className="text-xs text-gray-400 mt-1">18 anos de compromisso, resultados validados e tutores satisfeitos.</p>
                </div>
              </div>

              <div 
                className="p-5 rounded-2xl bg-white/3 border border-white/5 flex gap-4 hover:border-[#D4AF37]/30 transition-all"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20 text-[#D4AF37]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Atendimento Científico</h4>
                  <p className="text-xs text-gray-400 mt-1">Técnicas contemporâneas baseadas em reforço positivo, sem agressão.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Glass stats + region focus box */}
          <div className="lg:col-span-5 space-y-8">
            {/* Massive Star Card */}
            <motion.div 
              className="p-8 rounded-2xl bg-black/40 border border-[#D4AF37]/30 relative overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <HeartHandshake className="text-[#D4AF37] w-6 h-6" />
                <span className="text-xs font-mono tracking-widest uppercase font-bold text-[#D4AF37]">NOSSA MARCA</span>
              </div>

              <div className="my-6">
                <span className="block text-7xl font-bold text-white tracking-tight font-sans">
                  18<span className="text-3xl text-[#D4AF37] font-serif italic font-normal ml-1">Anos</span>
                </span>
                <span className="text-gray-300 text-sm block mt-2 font-medium">
                  Educando mentes caninas com afeto de Novo Hamburgo a Porto Alegre.
                </span>
              </div>

              <div className="border-t border-[#D4AF37]/20 pt-4 text-xs font-mono text-[#D4AF37]">
                REF: VALE DO SINOS E GRANDE PORTO ALEGRE
              </div>
            </motion.div>

            {/* Elegant Geography list */}
            <div 
              className="p-8 rounded-2xl bg-white/3 border border-white/5"
              style={{
                backdropFilter: "blur(8px)"
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-semibold text-lg text-white">Atendimento Local e Geral</h3>
              </div>

              <p className="text-sm text-gray-300 mb-6 font-light">
                Levamos consultorias de alto desempenho diretamente ao seu lar. Atendimento nas principais cidades do Vale dos Sinos:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {cities.map((city, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-white/5 text-xs font-medium text-white border border-white/5 shadow-sm transition-all flex items-center gap-2 hover:scale-[1.03] cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
