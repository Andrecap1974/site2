import React from "react";
import { Coffee, Bone, Smile } from "lucide-react";

export default function SatiricalFooter() {
  const dogLaws = [
    { rule: "Lei nº 1: Domínio Sanitário", desc: "Se caiu no chão da cozinha, pertence legalmente ao cão por direito indiscutível de gravidade e vácuo espontâneo." },
    { rule: "Lei nº 2: Ergonomia do Sofá", desc: "O sofá pertence ao cão. O humano é acolhido temporariamente em formato de 'S' nas bordas, desde que forneça cafuné contínuo." },
    { rule: "Lei nº 3: O Safári Urbano", desc: "Eu não estou puxando você na guia. Estou conduzindo nosso safári diário com urgência biológica. Você é o passageiro." },
    { rule: "Lei nº 4: O Paradoxo da Porta", desc: "Toda porta fechada representa um ultraje contra os direitos caninos universais. Devo poder fiscalizar ambos os lados." }
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-12 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      
      {/* Absolute graphic background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Satirical Block Grid */}
        <div className="space-y-8">
          <div className="text-center md:text-left space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase flex items-center justify-center md:justify-start gap-1">
              <Smile className="w-3.5 h-3.5 text-[#D4AF37]" />
              ESTUDO COMPORTAMENTAL / SÁTIRA CANINA
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Manual Reverso: Leis Universais Escritas pelos Cães
            </h3>
            <p className="text-xs text-gray-400 font-light max-w-lg">
              Adestramos cães para o futuro, mas sabemos perfeitamente quem manda no presente. Veja as regras secretas vigentes no seu lar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dogLaws.map((law, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-white/3 border border-white/5 space-y-3 transition-all hover:border-[#D4AF37]/35"
              >
                <div className="flex items-center gap-2">
                  <Bone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-xs font-bold text-[#D4AF37] font-mono">{law.rule}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">{law.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lower row: copyright, disclaimers and small credits */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <p className="text-xs text-gray-400 font-light">
              &copy; {new Date().getFullYear()} <strong>Cão Meu Amigo Adestramento</strong>. Todos os direitos reservados para os humanos (e cães).
            </p>
            <p className="text-[10px] text-gray-500 font-light">
              Nossa hospedagem oficial está localizada sob o domínio: <a href="http://www.caomeuamigo.net" className="hover:text-[#D4AF37] transition-colors underline">www.caomeuamigo.net</a>
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono bg-white/3 px-4 py-2 rounded-xl border border-white/5">
            <Coffee className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>MÉTODOS 100% AMIGÁVEIS • SEM BRONCAS SÉRIAS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
