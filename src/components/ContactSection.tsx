import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Instagram, Globe, MessageSquare, Check, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dogName: "",
    dogBreed: "",
    service: "basico",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      dogName: "",
      dogBreed: "",
      service: "basico",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 px-6 md:px-16 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Absolute floating shapes */}
      <div className="absolute top-1/2 -right-44 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Communication cards & contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                VAMOS COMEÇAR?
              </span>
              <h2 className="text-4xl font-light tracking-tight text-white leading-tight">
                Agende uma Avaliação comportamental
              </h2>
              <p className="text-gray-400 font-light max-w-sm leading-relaxed text-sm">
                Entre em contato hoje e dê os primeiros passos rumo a uma convivência rica, tranquila e respeitosa com seu melhor amigo.
              </p>
            </div>

            {/* Contacts list */}
            <div className="space-y-4 pt-4">
              {/* WhatsApp card */}
              <motion.a 
                href="https://wa.me/5551996566493"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/3 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/5 hover:border-[#D4AF37]/30 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-[#25D366] border border-white/5">
                  <Phone className="w-5 h-5 fill-[#25D366]/10" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase block">WhatsApp & Telefone</span>
                  <span className="text-base font-semibold text-white tracking-tight">(51) 99656-6493</span>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a 
                href="https://www.instagram.com/caomeuamigo_adestramento/"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/3 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/5 hover:border-[#D4AF37]/30 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-[#E1306C] border border-white/5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase block">Instagram Oferecido</span>
                  <span className="text-base font-semibold text-white tracking-tight">@caomeuamigo_adestramento</span>
                </div>
              </motion.a>

              {/* Web Card */}
              <motion.a 
                href="http://www.caomeuamigo.net"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white/3 border border-white/5 flex items-center gap-4 transition-all hover:bg-white/5 hover:border-[#D4AF37]/30 hover:scale-[1.02] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-[#D4AF37] border border-white/5">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase block">Site & Hospedagem</span>
                  <span className="text-sm font-semibold text-white tracking-tight">www.caomeuamigo.net</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Block: Neumorphic interactive form */}
          <div className="lg:col-span-7">
            <div 
              className="p-8 md:p-10 rounded-2xl bg-white/3 border border-white/5 relative overflow-hidden"
              style={{
                backdropFilter: "blur(12px)"
              }}
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Seu Nome *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Ex: Carlos Silva"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Contato / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="Ex: (51) 99656-6493"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Dog's Name */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Nome do Cão</label>
                        <input 
                          type="text" 
                          placeholder="Ex: Rex"
                          value={formData.dogName}
                          onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>

                      {/* Dog's Breed */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Raça / Tipo</label>
                        <input 
                          type="text" 
                          placeholder="Ex: Pomerânia, Srd..."
                          value={formData.dogBreed}
                          onChange={(e) => setFormData({ ...formData, dogBreed: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Programa Desejado</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="basico">Adestramento Básico</option>
                        <option value="avancado">Adestramento Avançado</option>
                        <option value="correcao">Correção Comportamental</option>
                        <option value="socializacao">Socialização</option>
                        <option value="publicidade">Cães para Mídia & Cinema</option>
                        <option value="sanitario">Adestramento Sanitário</option>
                        <option value="protecao">Guarda & Proteção</option>
                        <option value="terapia">Cães para Terapia & Assistência</option>
                        <option value="personalizado">Plano Personalizado Especial</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest block">Descreva as Necessidades / Dificuldades</label>
                      <textarea 
                        rows={4}
                        placeholder="Conte-nos um pouco sobre a personalidade do seu cão e quais metas desejam alcançar juntos..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-[#D4AF37] text-black hover:bg-white text-xs font-bold tracking-widest uppercase shadow-lg transition-all active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-black" />
                      Enviar Solicitação de Treino
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="flex flex-col items-center text-center py-12 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold text-white">Sua Mensagem foi Recebida!</h4>
                      <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-light">
                        Muito obrigado por entrar em contato, <strong className="font-semibold text-white">{formData.name}</strong>. Nossa equipe fará a triagem do caso do <strong className="font-semibold text-white">{formData.dogName || "seu cão"}</strong> e retornará em até 24h úteis via WhatsApp.
                      </p>
                    </div>

                    <div className="p-4 bg-white/5 rounded-xl max-w-sm text-xs text-[#D4AF37] font-mono border border-white/5">
                      CÓDIGO DE PROTOCOLO: CMA-{Math.floor(100000 + Math.random() * 900000)}
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-semibold text-gray-300 transition-colors cursor-pointer"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
