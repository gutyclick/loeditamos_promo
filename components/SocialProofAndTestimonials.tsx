'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, TrendingUp, Sparkles, Youtube } from 'lucide-react';

export default function SocialProofAndTestimonials() {
  const testimonials = [
    {
      name: 'David K.',
      handle: '@davidkgaming',
      channel: 'Gaming & Tech (24K subs)',
      rating: 5,
      comment:
        'Pasé de 300 visitas promedio a superar las 18,000 impresiones en mi último video. El cambio de la miniatura fue la clave total. ¡ $3 USD por todo este pack fue una locura!',
      increase: '+420% Visitas',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Laura S.',
      handle: '@lauravlogs.oficial',
      channel: 'Vlogs & Lifestyle (11K subs)',
      rating: 5,
      comment:
        'El banner me quedó hermoso y las 5 miniaturas tienen un contraste increíble. Además me entregaron todo en menos de 16 horas. 100% recomendado.',
      increase: 'Entrega en 16h',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Roberto M.',
      handle: '@roberto_finanzas',
      channel: 'Finanzas Personales (42K subs)',
      rating: 5,
      comment:
        'Pensé que por $3 USD sería una plantilla genérica, pero se nota el trabajo personalizado. Hicieron recortes limpios y aplicaron la psicología de color perfecta.',
      increase: 'CTR 3.1% ➔ 11.8%',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Gabriel T.',
      handle: '@gabrieltech',
      channel: 'Programación & IA (8K subs)',
      rating: 5,
      comment:
        'Mi canal ahora parece el de un creador verificado de 500k suscriptores. La presencia visual cambió por completo la forma en que me perciben las marcas.',
      increase: '+310% Suscriptores',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#070908] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>TESTIMONIOS REALES DE CREADORES</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            LO QUE DICEN LOS CREADORES QUE YA TIENEN SU <span className="text-[#8bf500]">PACK</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9/5 Calificación Promedio</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Más de 340+ Creadores Satisfechos</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#101411] border border-slate-800 p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between hover:border-[#8bf500]/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800/60 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#8bf500]/40"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1">
                      {t.name} <CheckCircle2 className="w-3.5 h-3.5 text-[#8bf500]" />
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">{t.channel}</p>
                  </div>
                </div>

                <span className="bg-[#8bf500]/10 border border-[#8bf500]/30 text-[#8bf500] font-mono text-xs font-bold px-3 py-1 rounded-full">
                  {t.increase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
