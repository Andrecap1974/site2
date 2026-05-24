import React, { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Search, Globe, Network } from "lucide-react";

export default function SeoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#050505] pt-10 pb-16 px-6 md:px-16 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Toggle Bar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#D4AF37] hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <Network className="w-3.5 h-3.5" />
            {isOpen ? "OCULTAR ÁREA TÉCNICA E SEO LOCAL DE BUSCA" : "VISUALIZAR DETALHES DE COBERTURA & SEO LOCAL (SÃO LEOPOLDO RS)"}
            {isOpen ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
          </button>
          
          <p className="text-[10px] text-gray-500 font-light max-w-sm">
            Seção de metadados estruturados para motores de pesquisa (Google, Bing) e posicionamento geográfico no Vale do Sinos.
          </p>
        </div>

        {/* Collapsible Index Container */}
        {isOpen && (
          <div className="mt-12 bg-white/3 rounded-2xl p-8 border border-white/5 space-y-10 text-gray-300 leading-relaxed text-sm shadow-2xl relative select-all">
            
            {/* Division 1 */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                Página 1 — Adestramento de Cães em São Leopoldo e Vale do Sinos
              </h1>
              <h2 className="text-base font-semibold text-[#D4AF37]">
                Cão Meu Amigo Adestramento – 18 Anos de Experiência em Treinamento Canino
              </h2>
              <p className="font-light text-xs text-gray-300">
                A <strong>Cão Meu Amigo Adestramento</strong> atua há 18 anos oferecendo serviços especializados de adestramento de cães em Novo Hamburgo, São Leopoldo, Campo Bom, Estância Velha, Canoas, Sapiranga e toda a região do Vale do Sinos.
              </p>
              <p className="font-light text-xs text-gray-300">
                Com experiência em comportamento canino, conformidade, socialização e treinamento avançado, a empresa desenvolve métodos personalizados para cada cão e família, respeitando o perfil comportamental do animal e os objetivos dos tutores.
              </p>
              <p className="font-light text-xs text-gray-300">
                O trabalho realizado pelo Cão Meu Amigo Adestramento é reconhecido na região pela dedicação, comprometimento e resultados eficientes no treinamento de cães de diferentes portes, raças e idades.
              </p>

              {/* Sub list */}
              <div className="p-4 bg-black/40 rounded-xl space-y-4 border border-white/5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] border-b border-white/5 pb-1">Serviços de Adestramento de Cães</h3>
                
                <div>
                  <h4 className="text-xs font-semibold text-white">Adestramento básico</h4>
                  <p className="font-light text-[11px] text-gray-400 mt-1">
                    O adestramento básico é indicado para cães filhotes e adultos que necessitam aprender comandos essenciais e melhorar o convívio familiar. Entre os principais exercícios trabalhistas estão: Sentar, Deitar, Ficar, Caminhar sem a guia, Vir quando chamado, de, e Socialização com pessoas e outros cães. O treinamento auxilia na redução de comportamentos indesejados, conforto mais equilíbrio e qualidade de vida para o cão e sua família.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white">Adestramento Avançado</h4>
                  <p className="font-light text-[11px] text-gray-400 mt-1">
                    O adestramento avançado é indicado para cães que já possuem obediência básica e precisam de comandos mais precisos e controle em ambientes externos. São trabalhos realizados como: Obediência à guia, sem guia, Permanência prolongada, Comandos complexos, e Alto nível de concentração. Esse treinamento é muito procurado por tutores que desejam maior segurança e desempenho do animal em diferentes situações.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-white">Guarda e Proteção</h4>
                  <p className="font-light text-[11px] text-gray-400 mt-1">
                    O treinamento de guarda e proteção é realizado com responsabilidade e avaliação comportamental individual. O objetivo é desenvolver segurança, autocontrole e proteção patrimonial sem estimular agressividade desnecessária. O serviço é indicado para: Residências, Empresas, Chácaras, e Segurança familiar.
                  </p>
                </div>
              </div>

              <div className="text-xs font-light text-gray-400 space-y-1">
                <p><strong>Cidades atendidas:</strong> Novo Hamburgo, São Leopoldo, Campo Bom, Sapiranga, Estância Velha, Dois Irmãos, Canoas, Ivoti, Portão e toda a Região do Vale dos Sinos.</p>
                <p><strong>Canais Oficiais:</strong> www.caomeuamigo.com.br | Instagram: @caomeuamigo_adestramento | Telefone/WA: (51) 99656-6493</p>
              </div>
            </div>

            {/* Division 2 */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <Search className="w-5 h-5 text-[#D4AF37]" />
                Página 2 — Especialistas em Comportamento Canino em São Leopoldo
              </h1>
              <h2 className="text-base font-semibold text-[#D4AF37]">
                Adestrador de Cães em São Leopoldo com Atendimento Personalizado
              </h2>
              <p className="font-light text-xs text-gray-300">
                A Cão Meu Amigo Adestramento desenvolve um estudo clínico de comportamento animal diretamente em São Leopoldo. Solucionamos problemas como cães reativos/agressivos, ansiedade de separação, xixi e cocô fora do local, latidos irritantes, destruição de objetos e medos de fogos e rojões.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-black/40 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-xs font-semibold text-white">Adestramento Sanitário para Cães</h4>
                  <p className="font-light text-[11px] text-gray-400">
                    O adestramento sanitário ajuda o cão a aprender o local correto para fazer suas necessidades, eliminando a sujeira e facilitando a rotina da família. Treinamos filhotes e adultos para condomínios, casas e apartamentos.
                  </p>
                </div>

                <div className="p-4 bg-black/40 rounded-xl space-y-2 border border-white/5">
                  <h4 className="text-xs font-semibold text-white">Cães para Terapia, Assistência & Cinema</h4>
                  <p className="font-light text-[11px] text-gray-400">
                    Preparação cuidadosa de cães terapeutas de auto-auxílio com enorme resiliência psicológica, bem como adestramento técnico de elenco canino publicitário e televisivo.
                  </p>
                </div>
              </div>
            </div>

            {/* Division 3 */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2 border-b border-white/10 pb-2">
                <Globe className="w-5 h-5 text-[#D4AF37]" />
                Página 3 — Melhor Adestramento de Cães em São Leopoldo e Região do Sul
              </h1>
              <h2 className="text-base font-semibold text-[#D4AF37]">
                Treinamento Canino Profissional em São Leopoldo e Vale do Sinos
              </h2>
              <p className="font-light text-xs text-gray-300">
                Ao optar pelo Cão Meu Amigo Adestramento, os tutores ganham mais segurança, passeios extremamente tranquilos sem puxar, redução drástica de estresse, eliminação de hábitos destrutivos em casa e um canal aberto com adestradores que possuem quase duas décadas de bagagem acumulada no mercado gaúcho.
              </p>

              <div className="p-4 bg-black/60 rounded-xl border border-white/5">
                <h4 className="text-xs font-semibold text-[#D4AF37] mb-2 uppercase tracking-wide">SEO Tags Locais de Relevância de Busca:</h4>
                <p className="text-[11px] leading-relaxed font-mono text-gray-400">
                  Adestrador de cães em São Leopoldo • Adestramento canino no Vale do Sinos • Treinador de cães em São Leopoldo • Escola para cães em São Leopoldo • Adestramento sanitário para cães • Treinamento de cães de guarda • Apoio emocional de cães de terapia • Adestrador especializado em comportamento canino no Vale do Sinos RS.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
