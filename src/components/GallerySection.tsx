import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Camera, Sparkles, SlidersHorizontal, Maximize2, X, 
  Plus, Edit2, Trash2, Globe, RefreshCw, Instagram, Link2, Check, ExternalLink, Settings, Eye
} from "lucide-react";
import { GalleryItem } from "../types";

const DEFAULT_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    title: "Thor - Treino de Foco",
    alt: "Pug feliz praticando foco",
    category: "obediencia",
    seoLink: "http://www.caomeuamigo.net/adestramento-sao-leopoldo",
    seoAnchorText: "Adestramento de Pug em São Leopoldo",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-2",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    title: "Mel - Socialização Parque",
    alt: "Golden Retriever socializando no parque urbano",
    category: "socializacao",
    seoLink: "http://www.caomeuamigo.net/socializacao-novo-hamburgo",
    seoAnchorText: "Socialização Canina Novo Hamburgo",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-3",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800",
    title: "Brutus - Guarda & Presença",
    alt: "Pastor Alemão focado e atento ao comando",
    category: "obediencia",
    seoLink: "http://www.caomeuamigo.net/guarda-protecao-vale-sinos",
    seoAnchorText: "Treinamento de Cães de Guarda RS",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-4",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
    title: "Bento - Suporte Emocional",
    alt: "Labrador Retriever calmo para assistência social",
    category: "comportamento",
    seoLink: "http://www.caomeuamigo.net/terapia-comportamental-caes",
    seoAnchorText: "Terapia Comportamental Canina",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-5",
    imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800",
    title: "Pipoca - Comercial TV",
    alt: "Cão da raça Jack Russell em ensaio publicitário",
    category: "cinema",
    seoLink: "http://www.caomeuamigo.net/caes-cinema-publicidade",
    seoAnchorText: "Agência de Elenco de Cães",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-6",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800",
    title: "Bolt - Obstáculos & Agility",
    alt: "Border Collie saltando alegremente em pista de adestramento",
    category: "obediencia",
    seoLink: "http://www.caomeuamigo.net/escola-caes-sao-leopoldo",
    seoAnchorText: "Escola de Adestramento em São Leopoldo",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-7",
    imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    title: "Grupo - Creche & Recreação",
    alt: "Filhotes brincando de forma harmoniosa",
    category: "socializacao",
    seoLink: "http://www.caomeuamigo.net/creche-socializacao",
    seoAnchorText: "Creche Otimizada para Cães RS",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-8",
    imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
    title: "Toby - Redução de Ansiedade",
    alt: "Bulldog Francês tranquilo focado em seu terapeuta canino",
    category: "comportamento",
    seoLink: "http://www.caomeuamigo.net/ansiedade-separacao-caes",
    seoAnchorText: "Tratamento de Ansiedade Canina RS",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  },
  {
    id: "gal-9",
    imageUrl: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800",
    title: "Zyon - Elenco de Mídia",
    alt: "Cão em gravação profissional no set",
    category: "cinema",
    seoLink: "http://www.caomeuamigo.net/adestramento-cinema",
    seoAnchorText: "Treinamento Técnico para Produção Visual",
    socialMediaName: "Instagram",
    socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
  }
];

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from local storage or fallback to default
  const [items, setItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem("cma_gallery_items");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Erro ao carregar dados salvos da galeria:", e);
      }
    }
    return DEFAULT_ITEMS;
  });

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const saveGallery = (newItems: GalleryItem[]) => {
    setItems(newItems);
    localStorage.setItem("cma_gallery_items", JSON.stringify(newItems));
  };

  const filters = [
    { value: "todos", label: "Ver Todos" },
    { value: "obediencia", label: "Obediência" },
    { value: "socializacao", label: "Socialização" },
    { value: "comportamento", label: "Psicologia Canina" },
    { value: "cinema", label: "Cinema & Mídia" }
  ];

  const handleAddNewItem = () => {
    setEditingItem({
      id: "gal-" + Date.now(),
      imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
      title: "",
      alt: "",
      category: "obediencia",
      seoLink: "http://www.caomeuamigo.net/adestramento-sao-leopoldo",
      seoAnchorText: "Adestrador de Cão no Rio Grande do Sul",
      socialMediaName: "Instagram",
      socialMediaUrl: "https://www.instagram.com/caomeuamigo_adestramento/"
    });
  };

  const handleEditItem = (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering lightbox
    setEditingItem({ ...item });
  };

  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering lightbox
    const filtered = items.filter(item => item.id !== id);
    saveGallery(filtered);
    showToast("A imagem foi removida com sucesso da galeria.");
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (!editingItem.imageUrl || !editingItem.alt) {
      showToast("Por favor, preencha pelo menos a URL da Imagem e a Legenda.");
      return;
    }

    const exists = items.some(item => item.id === editingItem.id);
    let updated: GalleryItem[];

    if (exists) {
      updated = items.map(item => item.id === editingItem.id ? editingItem : item);
      showToast("Foto atualizada com sucesso! SEO e redes sociais otimizadas.");
    } else {
      updated = [...items, editingItem];
      showToast("Nova foto inserida na galeria com as otimizações de SEO!");
    }

    saveGallery(updated);
    setEditingItem(null);
  };

  const handleRestoreDefaults = () => {
    saveGallery(DEFAULT_ITEMS);
    showToast("Galeria padrão restaurada com sucesso!");
  };

  const filteredItems = selectedFilter === "todos"
    ? items
    : items.filter(item => item.category === selectedFilter);

  return (
    <section id="galeria" className="py-24 px-6 md:px-16 bg-[#050505] text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div className="space-y-3">
            <span className="text-xs font-bold font-mono tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              PORTFÓLIO E RESULTADOS
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white flex items-center gap-3">
              Galeria de Nossos Talentos
            </h2>
            <p className="text-sm text-gray-400 max-w-lg font-light leading-relaxed">
              Registros reais de cães que treinaram conosco, alcançando maestria, foco e equilíbrio emocional ao lado de seus donos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Admin Tool Toggle */}
            <button 
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                isEditMode 
                  ? "bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50" 
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
              }`}
            >
              <Settings className={`w-3.5 h-3.5 ${isEditMode ? "animate-spin" : ""}`} />
              {isEditMode ? "Modo Dev Ativo" : "Gerenciar Galeria"}
            </button>

            {/* Filtering Tabs */}
            <div className="p-1 rounded-2xl bg-white/3 border border-white/5 flex flex-wrap gap-1 shadow-2xl">
              {filters.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                    selectedFilter === filter.value
                      ? "bg-[#D4AF37] text-black font-semibold shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Admin controls display when active */}
        <AnimatePresence>
          {isEditMode && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#D4AF37] flex items-center gap-1.5">
                  <SlidersHorizontal className="w-4 h-4" />
                  Painel de Otimização e Controle de SEO
                </p>
                <p className="text-xs text-gray-300">
                  Adicione novas imagens, defina títulos, atribua textos alternativos ("alt") ricos em palavras-chave para o Google e integre links de redirecionamento ou postagens sociais.
                </p>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={handleAddNewItem}
                  className="px-4 py-2.5 bg-[#D4AF37] text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Adicionar Foto
                </button>
                <button
                  onClick={handleRestoreDefaults}
                  className="px-4 py-2.5 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Restaurar elenco original"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Redefinir Padrões
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-2xl overflow-hidden bg-white/3 border border-white/5 cursor-pointer"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cover overlay fade-in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border border-transparent group-hover:border-[#D4AF37]/45 rounded-2xl">
                  
                  {/* Category and edit tags */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {isEditMode ? (
                      <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={(e) => handleEditItem(item, e)}
                          className="p-1.5 rounded-lg bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white transition-colors"
                          title="Editar metadados"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => handleDeleteItem(item.id, e)}
                          className="p-1.5 rounded-lg bg-black/80 hover:bg-red-600 hover:text-white text-white transition-colors"
                          title="Excluir imagem"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-md font-bold border border-[#D4AF37]/25 uppercase">
                        {filters.find(f => f.value === item.category)?.label}
                      </span>
                    )}
                  </div>

                  {/* Caption, links & information area */}
                  <div className="text-white space-y-2 mt-auto">
                    {item.title && (
                      <p className="text-base font-semibold text-white tracking-tight leading-tight">
                        {item.title}
                      </p>
                    )}
                    <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-2">
                      {item.alt}
                    </p>

                    {/* Interactive Links in overlay */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                      {item.seoLink && (
                        <a 
                          href={item.seoLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[10px] text-[#D4AF37] hover:text-white transition-colors bg-white/5 border border-[#D4AF37]/30 px-2 py-0.5 rounded-md font-mono"
                          title={`SEO: ${item.seoAnchorText || 'Saiba mais'}`}
                        >
                          <Globe className="w-2.5 h-2.5 shrink-0" />
                          <span>{item.seoAnchorText || "Link SEO"}</span>
                          <ExternalLink className="w-2 h-2 opacity-60" />
                        </a>
                      )}

                      {item.socialMediaUrl && (
                        <a 
                          href={item.socialMediaUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[10px] text-white hover:text-[#D4AF37] transition-colors bg-white/5 border border-white/10 px-2 py-0.5 rounded-md font-mono"
                          title={`Canal: ${item.socialMediaName || 'Rede Social'}`}
                        >
                          <Instagram className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
                          <span>{item.socialMediaName || "Insta"}</span>
                          <ExternalLink className="w-2 h-2 opacity-60" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Standard zoom cue */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Viewer Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
          >
            <button 
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/25 cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#121212]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[60vh] overflow-hidden flex justify-center bg-black">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[60vh] w-auto object-contain cursor-default"
                />
              </div>

              {/* Informative details and marketing block */}
              <div className="p-6 md:p-8 space-y-4 text-white border-t border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold bg-[#D4AF37]/15 border border-[#D4AF37]/25 px-2 py-0.5 rounded">
                      {filters.find(f => f.value === lightboxItem.category)?.label}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                      {lightboxItem.title || "Caso de Sucesso"}
                    </h3>
                  </div>

                  {/* Render metadata markers link */}
                  <div className="flex flex-wrap items-center gap-2">
                    {lightboxItem.seoLink && (
                      <a 
                        href={lightboxItem.seoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow"
                      >
                        <Globe className="w-3.5 h-3.5 text-black" />
                        <span>{lightboxItem.seoAnchorText || "Saiba mais"}</span>
                        <ExternalLink className="w-3 h-3 text-black opacity-85" />
                      </a>
                    )}

                    {lightboxItem.socialMediaUrl && (
                      <a 
                        href={lightboxItem.socialMediaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Ver no {lightboxItem.socialMediaName || "Instagram"}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-mono font-bold tracking-wider text-gray-500 uppercase">
                    Metadados da Legenda / ALT Tags (Google Images SEO)
                  </p>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {lightboxItem.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editor Modal Form (Stunning theme integration) */}
      <AnimatePresence>
        {editingItem && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-[#121212] border border-[#D4AF37]/50 w-full max-w-2xl rounded-2xl overflow-hidden p-6 md:p-8 space-y-6 text-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest font-extrabold text-[#D4AF37] uppercase flex items-center gap-1">
                    <Settings className="w-3 h-3 animate-spin" /> Admnistração de Metadados
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {items.some(x => x.id === editingItem.id) ? "Editar Detalhes da Imagem" : "Adicionar Nova Imagem de Sucesso"}
                  </h3>
                </div>
                <button
                  onClick={() => setEditingItem(null)}
                  className="p-1.5 rounded-full hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form body */}
              <form onSubmit={handleSaveForm} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Photo Title */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block font-mono">
                      Título curto / Identificador
                    </label>
                    <input 
                      type="text"
                      placeholder="Ex: Rex - Treino Avançado"
                      value={editingItem.title || ""}
                      onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block font-mono">
                      Categoria do Treino
                    </label>
                    <select
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#181818] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="obediencia">Obediência</option>
                      <option value="socializacao">Socialização</option>
                      <option value="comportamento">Psicologia Canina</option>
                      <option value="cinema">Cinema & Mídia</option>
                    </select>
                  </div>
                </div>

                {/* Legend (Alt Text) details */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block font-mono">
                    Legenda da Foto (ALT Text - Cruzeiro crucial para Google Images SEO)
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Descreva detalhes específicos da foto para os leitores e robôs de busca. Use palavras chave como: adestramento de cães, adestrador, etc."
                    value={editingItem.alt}
                    onChange={(e) => setEditingItem({ ...editingItem, alt: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                  />
                </div>

                {/* Image URL */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block font-mono">
                    URL de Origem da Foto
                  </label>
                  <input 
                    type="url"
                    required
                    placeholder="URL absoluta (https://...)"
                    value={editingItem.imageUrl}
                    onChange={(e) => setEditingItem({ ...editingItem, imageUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-white/10 rounded-lg text-sm text-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                {/* SEO Redirection Link Configuration */}
                <div className="p-4 rounded-xl bg-white/3 border border-white/5 space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase block pb-1 border-b border-white/5">
                    1. CONFIGURAÇÃO DE SEO LINK
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block">
                        Página de Destino Otimizada (URL)
                      </label>
                      <input 
                        type="text"
                        placeholder="Ex: http://www.caomeuamigo.net/servicos"
                        value={editingItem.seoLink || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, seoLink: e.target.value })}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block">
                        Texto âncora do Link (Anchor Text Keyword)
                      </label>
                      <input 
                        type="text"
                        placeholder="Ex: Adestrador São Leopoldo"
                        value={editingItem.seoAnchorText || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, seoAnchorText: e.target.value })}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Social media targets */}
                <div className="p-4 rounded-xl bg-white/3 border border-white/5 space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-white/80 font-bold uppercase block pb-1 border-b border-white/5">
                    2. REDE SOCIAL ASSOCIADA
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block">
                        Identificador da rede
                      </label>
                      <input 
                        type="text"
                        placeholder="Ex: Instagram, Post, YouTube"
                        value={editingItem.socialMediaName || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, socialMediaName: e.target.value })}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-wider font-bold text-gray-400 block">
                        Link de Redirecionamento Social (URL)
                      </label>
                      <input 
                        type="url"
                        placeholder="Ex: https://instagram.com/p/..."
                        value={editingItem.socialMediaUrl || ""}
                        onChange={(e) => setEditingItem({ ...editingItem, socialMediaUrl: e.target.value })}
                        className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-mono text-white placeholder-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-5 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-semibold text-gray-300 transition-colors cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 shadow"
                  >
                    <Check className="w-4 h-4" />
                    Salvar Foto e Metadados
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Elegant notification toasting */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-55 bg-[#121212] border border-[#D4AF37] text-white rounded-xl px-5 py-4 shadow-2xl flex items-center gap-3"
            onClick={() => setToastMessage(null)}
            style={{ zIndex: 9999 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
