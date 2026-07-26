'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ImageIcon, MonitorPlay, Sparkles, UserCircle } from 'lucide-react';
import { useState } from 'react';

interface RealWorkShowcaseProps {
  onOpenCheckout: () => void;
}

type CategoryKey = 'banners' | 'thumbnails' | 'profiles';

interface WorkItem {
  src: string;
  title: string;
  alt: string;
}

const categories: Record<
  CategoryKey,
  {
    label: string;
    singular: string;
    icon: typeof MonitorPlay;
    items: WorkItem[];
  }
> = {
  banners: {
    label: 'BANNERS',
    singular: 'Banner',
    icon: MonitorPlay,
    items: [
      {
        src: '/examples/banner-emprendedor.webp',
        title: 'Marca personal y emprendimiento',
        alt: 'Banner profesional para un canal de emprendimiento y marca personal',
      },
      {
        src: '/examples/banner-guzzfi-1.webp',
        title: 'Contenido digital y entretenimiento',
        alt: 'Banner profesional para el canal de contenido digital Guzzfi',
      },
      {
        src: '/examples/banner-guzzfi-2.webp',
        title: 'Identidad visual para creador',
        alt: 'Segunda propuesta de banner profesional para el creador Guzzfi',
      },
      {
        src: '/examples/banner-podcast.webp',
        title: 'Podcast y entrevistas',
        alt: 'Banner profesional para un podcast de entrevistas',
      },
      {
        src: '/examples/banner-sr-gamer-king.webp',
        title: 'Gaming y streaming',
        alt: 'Banner profesional para el canal de gaming Sr Gamer King',
      },
    ],
  },
  thumbnails: {
    label: 'MINIATURAS',
    singular: 'Miniatura',
    icon: ImageIcon,
    items: [
      {
        src: '/examples/miniatura-decidi-invertir.webp',
        title: 'Finanzas e inversión',
        alt: 'Miniatura profesional de finanzas con el texto Decidí invertir',
      },
    ],
  },
  profiles: {
    label: 'FOTOS DE PERFIL',
    singular: 'Perfil',
    icon: UserCircle,
    items: [
      {
        src: '/examples/perfil-redes.png',
        title: 'Perfil profesional para redes',
        alt: 'Foto de perfil profesional para redes sociales con estilo de finanzas',
      },
      {
        src: '/examples/perfil-youtube.png',
        title: 'Identidad para canal de YouTube',
        alt: 'Foto de perfil para YouTube de la marca Manu Emprende',
      },
    ],
  },
};

export default function RealWorkShowcase({ onOpenCheckout }: RealWorkShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('banners');
  const [activeIndex, setActiveIndex] = useState(0);
  const category = categories[activeCategory];
  const activeItem = category.items[activeIndex];
  const isProfile = activeCategory === 'profiles';
  const isBanner = activeCategory === 'banners';

  const selectCategory = (key: CategoryKey) => {
    setActiveCategory(key);
    setActiveIndex(0);
  };

  return (
    <section
      id="trabajos-reales"
      aria-labelledby="real-work-title"
      className="relative py-16 sm:py-20 border-y border-slate-900 bg-[#0b0e0c] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8bf500]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8bf500]/30 bg-[#8bf500]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8bf500]">
            <Sparkles className="w-3.5 h-3.5" />
            Trabajos reales
          </div>
          <h2
            id="real-work-title"
            className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight"
          >
            Diseños que hacen que tu canal <span className="text-[#8bf500]">se vea profesional</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-slate-400 leading-relaxed">
            Explora banners, miniaturas y perfiles creados para marcas y creadores de distintos nichos.
          </p>
        </header>

        <div
          className="mt-8 sm:mt-10 flex snap-x gap-2 overflow-x-auto pb-2 sm:justify-center"
          role="tablist"
          aria-label="Tipo de diseño"
        >
          {(Object.keys(categories) as CategoryKey[]).map((key) => {
            const item = categories[key];
            const Icon = item.icon;
            const isActive = activeCategory === key;

            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(key)}
                className={`inline-flex shrink-0 snap-center items-center gap-2 rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-heading font-black transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#8bf500] bg-[#8bf500] text-black shadow-lg shadow-[#8bf500]/20'
                    : 'border-slate-800 bg-[#121613] text-slate-400 hover:border-[#8bf500]/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] ${isActive ? 'bg-black/15' : 'bg-slate-800'}`}>
                  {item.items.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className={`mt-6 sm:mt-8 mx-auto transition-all ${isProfile ? 'max-w-xl' : 'max-w-6xl'}`}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#8bf500]/40 bg-[#080a08] shadow-2xl shadow-[#8bf500]/10">
            <div
              className={`relative ${
                isProfile ? 'aspect-square' : isBanner ? 'aspect-[3.4/1] sm:aspect-[4/1]' : 'aspect-[3/2]'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.src}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.src}
                    alt=""
                    fill
                    sizes={isProfile ? '(max-width: 640px) 100vw, 576px' : '(max-width: 768px) 100vw, 1152px'}
                    className="object-cover scale-110 blur-2xl opacity-20"
                    aria-hidden="true"
                  />
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    priority={activeCategory === 'banners' && activeIndex === 0}
                    sizes={isProfile ? '(max-width: 640px) 100vw, 576px' : '(max-width: 768px) 100vw, 1152px'}
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-800 bg-[#101411] px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8bf500]">
                  {category.singular} {activeIndex + 1} de {category.items.length}
                </span>
                <p className="truncate text-xs sm:text-sm font-bold text-white">{activeItem.title}</p>
              </div>
              <span className="shrink-0 rounded-lg border border-[#8bf500]/30 bg-[#8bf500]/10 px-2.5 py-1 text-[10px] font-bold text-[#8bf500]">
                DISEÑO REAL
              </span>
            </div>
          </div>

          {category.items.length > 1 && (
            <div
              className={`mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:thin] ${
                isProfile ? 'justify-start sm:justify-center' : ''
              }`}
              aria-label={`Seleccionar ${category.label.toLowerCase()}`}
            >
              {category.items.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeIndex === index}
                  aria-label={`Mostrar ${item.title}`}
                  className={`relative shrink-0 snap-center overflow-hidden rounded-xl border-2 bg-[#101411] transition-all cursor-pointer ${
                    isProfile
                      ? 'aspect-square w-[42%] sm:w-36'
                      : 'aspect-[4/1] w-[72%] sm:w-[38%] lg:w-[calc(20%-0.6rem)]'
                  } ${
                    activeIndex === index
                      ? 'border-[#8bf500] shadow-lg shadow-[#8bf500]/20'
                      : 'border-slate-800 opacity-65 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes={isProfile ? '144px' : '(max-width: 640px) 72vw, (max-width: 1024px) 38vw, 220px'}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onOpenCheckout}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#8bf500]/50 bg-[#121613] px-5 py-3 text-sm font-heading font-black text-white transition-all hover:bg-[#8bf500] hover:text-black cursor-pointer"
            >
              QUIERO UN DISEÑO PARA MI CANAL
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
