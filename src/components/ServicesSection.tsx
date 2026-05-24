import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Baby, 
  Tv, 
  Dna, 
  Users, 
  Shuffle, 
  ShieldAlert, 
  Sliders, 
  ShieldCheck, 
  Droplet, 
  Heart, 
  Check, 
  ArrowRight,
  X
} from "lucide-react";
import { Service } from "../types";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: "basico",
      title: "Adestramento Básico",
      description: "Ideal para filhotes e cães adultos aprenderem comandos essenciais e melhorarem o convívio diário.",
      iconName: "basico",
      benefits: [
        "Comandos essenciais: Sentar, Deitar e Ficar",
        "Passeios confortáveis: Caminhar elegantemente ao lado sem puxar",
        "Segurança ativa: Vir rapidamente quando for chamado",
        "Convivência familiar e limites de espaço corretos",
        "Redução de comportamentos indesejados primários"
      ],
      fullDetails: "O plano de adestramento básico foca em comandos operacionais que alteram positivamente a rotina da casa. Construímos hábitos saudáveis de alimentação, sono e passeio para que o cão se integre perfeitamente à rotina da residência urbana ou rural. Indicado para animais de todas as idades, especialmente filhotes em fase de introdução social."
    },
    {
      id: "avancado",
      title: "Adestramento Avançado",
      description: "Para cães com obediência básica estabilizada. Controle absoluto sem guia e comandos complexos em distração.",
      iconName: "avancado",
      benefits: [
        "Obediência absoluta e ágil sem necessidade de guia",
        "Permanência prolongada em locais pré-determinados",
        "Execução de comandos mesmo sob fortes estímulos externos",
        "Foco contínuo e alto nível de concentração",
        "Comandos à distância por sinais visuais e sonoros"
      ],
      fullDetails: "No treinamento avançado, elevamos a capacidade cognitiva e motora do animal a níveis profissionais. O cão desenvolve inteligência tática, autocontrole extremo e uma ligação telepática com o tutor. Muito recomendado para passeios livres na natureza ou segurança total em centros urbanos movimentados."
    },
    {
      id: "correcao",
      title: "Correção Comportamental",
      description: "Tratamento personalizado de desvios sérios de comportamento, agressividade, medos e ansiedades.",
      iconName: "correcao",
      benefits: [
        "Reabilitação de cães agressivos ou reativos",
        "Tratamento especializado para ansiedade de separação",
        "Eliminação de latidos ou uivos excessivos e persistentes",
        "Eliminação de hábitos destrutivos (roer móveis, cavar)",
        "Controle de medos, fobias e inseguranças profundas"
      ],
      fullDetails: "Uma avaliação detalhada é realizada para entender a causa biológica e psicológica dos gatilhos comportamentais. Com paciência e fundamentação científica, remodelamos a resposta do animal, removendo o estresse cumulativo da relação e reestabelecendo a segurança em sua própria casa."
    },
    {
      id: "socializacao",
      title: "Socialização Direcionada",
      description: "Prepara o cão para interagir amigavelmente com novas pessoas, ambientes diversos e outros animais.",
      iconName: "socializacao",
      benefits: [
        "Prevenção eficaz de agressividade ou pânico social",
        "Interações controladas e felizes com outros animais",
        "Preparo psicológico para barulhos, trânsito e multidão",
        "Maior segurança em ambientes externos (parques, cafés)",
        "Equilíbrio emocional frente a visitas em casa"
      ],
      fullDetails: "A socialização é a base de um cão maduro e confiante. Auxiliamos seu melhor amigo a dessensibilizar estímulos incomuns e a reagir de maneira tranquila a outros indivíduos. O resultado é um passaporte livre para incluir seu companheiro em todas as atividades sociais e viagens com a família."
    },
    {
      id: "publicidade",
      title: "Cães para Publicidade e Cinema",
      description: "Preparação de animais para focar sob luzes, câmeras, sets de gravação e realizar comandos teatrais específicos.",
      iconName: "publicidade",
      benefits: [
        "Execução precisa de olhares, poses e caminhadas artísticas",
        "Adaptação completa a sets barulhentos e movimentados",
        "Interação rápida e simpática com atores ou modelos",
        "Comandos expressivos (latir sob sinal, inclinar a cabeça)",
        "Total concentração sob holofotes e equipamentos de vídeo"
      ],
      fullDetails: "Temos vasta experiência em agenciamento e treinamento de estrelas de quatro patas para comerciais, desfiles de moda, produções cinematográficas e editoriais fotográficos. Os animais são condicionados a responder de forma ultra-rápida, garantindo cronogramas eficientes com o máximo de ética animal."
    },
    {
      id: "personalizado",
      title: "Treinamento Personalizado",
      description: "Aulas moldadas 100% de acordo com a sua infraestrutura, rotina e objetivos extraordinários particulares.",
      iconName: "personalizado",
      benefits: [
        "Metodologia desenhada exclusivamente para sua rotina diária",
        "Foco nos problemas exatos sinalizados no ambiente domiciliar",
        "Flexibilidade total no agendamento de sessões",
        "Aproveitamento de espaços reais (ex: escadas, portão)",
        "Apoio constante com canais de comunicação direta"
      ],
      fullDetails: "Se você tem um plano bem específico, uma rotina atípica ou múltiplos cães convivendo sob regras complexas, o Treinamento Personalizado é a resposta ideal. Analisamos sua infraestrutura, desenhamos rotinas funcionais e acompanhamos passo a passo a consolidação de objetivos de estilo de vida específicos."
    },
    {
      id: "guarda",
      title: "Guarda e Proteção Patrimonial",
      description: "Treinamento maduro com foco em alerta de território, discernimento defensivo e autodefesa controlada.",
      iconName: "guarda",
      benefits: [
        "Criação de zoneamento e guarda residencial/patrimonial",
        "Ataque e interrupção técnica imediatos sob comando estrito",
        "Discernimento perfeito entre visitas normais e invasores reais",
        "Segurança familiar preventiva e intimidação técnica inteligente",
        "Desenvolvimento do instinto sem estímulo a agressão desregulada"
      ],
      fullDetails: "Diferente de cães agressivos desgovernados, um cão de proteção patrimonial treinado por nós demonstra frieza operacional, altíssimo autocontrole e fidelidade incondicional. Realizado mediante uma análise rigorosa da índole e potencial genético do animal."
    },
    {
      id: "sanitario",
      title: "Adestramento Sanitário",
      description: "Ensine o local exato das necessidades fisiológicas de maneira permanente dentro de casa ou apartamento.",
      iconName: "sanitario",
      benefits: [
        "Definição de rotas sanitárias seguras para apartamentos",
        "Técnicas de agrado adaptadas às fases fisiológicas",
        "Eliminação definitiva do cheiro e bagunça no lar",
        "Facilidade na rotina de higiene diária da família",
        "Ensino para filhotes e cães maduros recalcitrantes"
      ],
      fullDetails: "Problemas sanitários são as maiores fontes de frustração entre tutores e cães. Com uma metodologia de mapeamento de odores e reforço direcionado baseado na psicologia espacial, ensinamos o animal a expressar suas necessidades biológicas apenas em locais indicados e toleráveis."
    },
    {
      id: "terapia",
      title: "Cães para Terapia e Assistência",
      description: "Condicionamento emocional de cães de apoio emocional e auxílio físico para acompanhar pessoas especiais.",
      iconName: "terapia",
      benefits: [
        "Inabalável estabilidade psicológica e equilíbrio em público",
        "Atenuação de estresses emocionais em hospitais ou lares",
        "Apoio emocional estruturado para portadores de TEA ou ansiedade",
        "Indução de calma mediante toque e presença estimulada",
        "Comandos utilitários de auxílio físico para portadores de necessidades"
      ],
      fullDetails: "Trabalhos complexos e repletos de humanidade. Preparamos cães terapeutas de alto nível para cooperar em terapias assistidas, geriatrias, clínicas odontológicas especiais e suporte a pessoas com fobias graves. O amor canino transformado em intervenção medicinal segura."
    }
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case "basico":
        return <Baby className="w-6 h-6 text-[#D4AF37]" />;
      case "avancado":
        return <Dna className="w-6 h-6 text-[#D4AF37]" />;
      case "correcao":
        return <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />;
      case "socializacao":
        return <Users className="w-6 h-6 text-[#D4AF37]" />;
      case "publicidade":
        return <Tv className="w-6 h-6 text-[#D4AF37]" />;
      case "personalizado":
        return <Sliders className="w-6 h-6 text-[#D4AF37]" />;
      case "guarda":
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case "sanitario":
        return <Droplet className="w-6 h-6 text-[#D4AF37]" />;
      case "terapia":
        return <Heart className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 px-6 md:px-16 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Visual Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center space-y-4">
        <span className="text-xs font-bold font-mono tracking-widest text-[#D4AF37] uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          ESTRUTURA COMPLETA DE TREINO
        </span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
          Soluções e Especialidades Comportamentais
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Nossos serviços cobrem todas as fases do ciclo de desenvolvimento de cães domésticos e de trabalho, assegurando inteligência, alegria e elegância.
        </p>
      </div>

      {/* Grid Layout of Neumorphic Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={`service-${service.id}`}
            className="p-8 rounded-2xl bg-white/3 border border-white/5 flex flex-col justify-between transition-all relative overflow-hidden select-none cursor-pointer"
            style={{
              backdropFilter: "blur(12px)"
            }}
            whileHover={{ 
              y: -5,
              borderColor: "rgba(212, 175, 55, 0.45)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
            onClick={() => setSelectedService(service)}
          >
            {/* Soft backdrop blur accent on core tags */}
            {index < 6 && (
              <div className="absolute top-0 right-0 px-3.5 py-1 text-[9px] font-mono tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] uppercase rounded-bl-xl font-bold border-l border-b border-white/5">
                Programa Principal
              </div>
            )}

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/30">
                {renderIcon(service.iconName)}
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-white tracking-tight">{service.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-3">{service.description}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between group">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase group-hover:text-white transition-colors">
                Detalhes do Programa
              </span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern Pop-up Modal / Dialog for Detailed Insights */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-[#121212] w-full max-w-2xl rounded-2xl p-8 relative overflow-hidden border border-[#D4AF37]/30 text-white"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)"
              }}
              initial={{ scale: 0.93, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {/* Absolute circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />

              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    {renderIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-[#D4AF37] uppercase">Curso Técnico</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Narrative Detail */}
                <div className="space-y-4">
                  <h4 className="text-[#D4AF37] text-xs font-bold font-mono tracking-wider uppercase">Metodologia e Objetivo</h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                    {selectedService.fullDetails}
                  </p>
                </div>

                {/* Practical Bullet benefits */}
                <div className="space-y-3.5 bg-white/3 p-6 rounded-xl border border-white/10">
                  <h4 className="text-white text-xs font-bold font-mono tracking-wider uppercase flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    Resultados e Metas Alcançadas:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-gray-300">
                    {selectedService.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA buttons */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-medium text-gray-300 transition-colors cursor-pointer"
                  >
                    Voltar
                  </button>
                  <a
                    href="#contato"
                    onClick={() => {
                      setSelectedService(null);
                      const el = document.getElementById("contato");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    Agendar Avaliação
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
