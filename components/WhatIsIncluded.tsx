'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  Image as ImageIcon,
  Video,
  User,
  Zap,
  ArrowRight,
  MousePointerClick,
  Monitor,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

interface WhatIsIncludedProps {
  onOpenCheckout: () => void;
}

export default function WhatIsIncluded({ onOpenCheckout }: WhatIsIncludedProps) {
  const items = [
    {
      num: '01',
      title: '5 Miniaturas de YouTube o Reels',
      subtitle: 'Diseño de Alto CTR e Impacto Visual',
      description:
        'El 90% de las decisiones de clic dependen de la miniatura. Diseñamos 5 miniaturas únicas con recortado profesional, efectos de iluminación, texto persuasivo y colores estratégicos para tu nicho.',
      specs: ['1920x1080 HD / 1080x1920 Vertical', 'Diseñadas para maximizar tus CTR', 'Texto legible en pantallas móviles', 'Formatos JPG / PNG listos'],
      tag: 'CTR BOOSTER',
      icon: MousePointerClick,
      color: 'from-[#8bf500]/20 to-emerald-950/40',
      badge: '5 Diseños Incluidos'
    },
    {
      num: '02',
      title: '1 Banner Profesional de YouTube',
      subtitle: 'Optimizado para TV, PC y Smartphones',
      description:
        'Tu banner es la carta de presentación de tu canal. Creamos un header impactante con el área segura garantizada para que se vea perfecto en cualquier dispositivo.',
      specs: ['2560x1440px Resolución Oficial', 'Área segura garantizada (Mobile & TV)', 'Slogan, temática y redes integradas', 'Branding 100% coherente'],
      tag: 'BRANDING PRO',
      icon: Monitor,
      color: 'from-blue-900/30 to-[#090b0a]',
      badge: '1 Banner Completo'
    },
    {
      num: '03',
      title: '1 Foto de Perfil para YouTube',
      subtitle: 'Destaca en Comentarios y Buscadores',
      description:
        'Un perfil con contorno de luz o recorte limpio logra que las personas recuerden tu canal al instante cuando comentas en otros videos o apareces en búsquedas.',
      specs: ['Formato circular perfecto (800x800px)', 'Fondo con brillo neón o gradiente', 'Sujeto o logo en alta nitidez', 'Listo para subir en 1-clic'],
      tag: 'AUTORIDAD',
      icon: User,
      color: 'from-purple-900/30 to-[#090b0a]',
      badge: '1 Foto de Perfil YT'
    },
    {
      num: '04',
      title: '1 Foto de Perfil para Redes Sociales',
      subtitle: 'Imagen Única en Instagram, TikTok o Twitch',
      description:
        'Lleva la misma identidad profesional a tus redes. Manten la coherencia visual de tu marca personal o canal para que tus seguidores te reconozcan en todas partes.',
      specs: ['Adaptada para IG, TikTok, Twitch, X', 'Consistencia de marca en 360°', 'Alta resolución HD sin pérdida', 'Archivos PNG transparentes opcionales'],
      tag: 'REDES SOCIALES',
      icon: Smartphone,
      color: 'from-emerald-900/30 to-[#090b0a]',
      badge: '1 Foto Redes'
    },
  ];

  return (
    <section id="que-incluye" className="py-20 bg-[#070908] border-t border-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8bf500]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DESGLOSE DEL PAQUETE COMPLETO</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            TODO LO QUE RECIBES DENTRO DEL <span className="text-[#8bf500]">PACK CREADOR</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-medium">
            Un paquete gráfico valorado en <span className="text-slate-200 font-bold">$47 USD</span>, diseñado para transformar la percepción de tu canal hoy por solo <span className="text-[#8bf500] font-bold">$5 USD</span>.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-[#101411] border border-slate-800/80 hover:border-[#8bf500]/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#8bf500]/10 flex flex-col justify-between overflow-hidden`}
              >
                {/* Glowing border hover line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8bf500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#8bf500]/40 group-hover:text-[#8bf500] transition-colors">
                      {item.num}
                    </span>
                    <span className="bg-[#8bf500]/10 text-[#8bf500] border border-[#8bf500]/30 font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#8bf500]/10 border border-[#8bf500]/40 flex items-center justify-center text-[#8bf500] shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-[#8bf500] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8bf500] font-mono font-bold mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-800/60 pt-4 text-xs font-medium text-slate-300">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8bf500] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 font-mono">LISTO PARA USAR EN 24H</span>
                  <span className="text-[#8bf500] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer" onClick={onOpenCheckout}>
                    Incluido en $5 USD <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA Callout */}
        <div className="mt-14 bg-gradient-to-r from-[#121613] via-[#1a231b] to-[#121613] border border-[#8bf500]/40 rounded-3xl p-6 sm:p-10 text-center flex flex-col md:flex-row items-center justify-between gap-6 glow-lime">
          <div className="text-left max-w-2xl">
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              ¿Listo para transformar la cara de tu canal?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Llévate el paquete completo de 8 piezas gráficas por un precio único de <strong className="text-[#8bf500] font-bold">$5 USD</strong>. Sin trucos ni cobros recurrentes.
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            id="what-included-cta"
            className="w-full md:w-auto bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#8bf500]/30 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-black" />
            <span>SOLICITAR MI PACK POR WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
}
