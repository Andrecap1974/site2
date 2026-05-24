import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Sparkles, SlidersHorizontal, Maximize2, X } from "lucide-react";
import { GalleryItem } from "../types";

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { value: "todos", label: "Ver Todos" },
    { value: "obediencia", label: "Obediência" },
    { value: "socializacao", label: "Socialização" },
    { value: "comportamento", label: "Psicologia Canina" },
    { value: "cinema", label: "Cinema & Mídia" }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
      alt: "Pug feliz praticando foco",
      category: "obediencia"
    },
    {
      id: "gal-2",
      imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
      alt: "Golden Retriever socializando no parque urbano",
      category: "socializacao"
    },
    {
      id: "gal-3",
      imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800",
      alt: "Pastor Alemão focado e atento ao comando",
      category: "obediencia"
    },
    {
      id: "gal-4",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
      alt: "Labrador Retriever calmo para assistência social",
      category: "comportamento"
    },
    {
      id: "gal-5",
      imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800",
      alt: "Cão da raça Jack Russell em ensaio publicitário",
      category: "cinema"
    },
    {
      id: "gal-6",
      imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=800",
      alt: "Border Collie saltando alegremente em pista de adestramento",
      category: "obediencia"
    },
    {
      id: "gal-7",
      imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
      alt: "Filhotes brincando de forma harmoniosa",
      category: "socializacao"
    },
    {
      id: "gal-8",
      imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
      alt: "Bulldog Francês tranquilo focado em seu terapeuta canino",
      category: "comportamento"
    },
    {
      id: "gal-9",
      imageUrl: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800",
      alt: "Cão em gravação profissional no set",
      category: "cinema"
    }
  ];

  const filteredItems = selectedFilter === "todos"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

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
            <h2 className="text-4xl font-light tracking-tight text-white">
              Galeria de Nossos Talentos
            </h2>
            <p className="text-sm text-gray-400 max-w-lg font-light leading-relaxed">
              Registros reais de cães que treinaram conosco, alcançando maestria, foco e equilíbrio emocional ao lado de seus donos.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border border-transparent group-hover:border-[#D4AF37]/45 rounded-2xl">
                  <div className="text-white space-y-1">
                    <span className="text-[15px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                      {filters.find(f => f.value === item.category)?.label}
                    </span>
                    <p className="text-sm font-medium pr-8">{item.alt}</p>
                  </div>

                  <div className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-[#D4AF37]/25 backdrop-blur-md flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal spectator */}
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
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl border border-[#D4AF37]/30"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl cursor-default"
              />
              <div className="bg-[#121212] p-6 text-white flex items-center justify-between border-t border-white/5">
                <div className="space-y-1">
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    {filters.find(f => f.value === lightboxItem.category)?.label}
                  </span>
                  <p className="text-base font-light text-white/90">{lightboxItem.alt}</p>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-mono tracking-wide text-white transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
