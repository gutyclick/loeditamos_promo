'use build';
'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Clock,
  Sparkles,
  Award,
  Download,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Flame,
  ArrowRight
} from 'lucide-react';

interface BenefitsProps {
  onOpenCheckout: () => void;
}

export default function BenefitsSection({ onOpenCheckout }: BenefitsProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento Inmediato de Clics (CTR)',
      desc: 'El 90% de los usuarios deciden ver un video basándose únicamente en la miniatura. Diseñamos con la psicología visual que incita al clic inmediato.',
      highlight: 'CTR +300% estimado',
    },
    {
      icon: Clock,
      title: 'Entrega en <24 Horas Garantizada',
      desc: 'No pierdas tiempo ni semanas esperando diseñadores. Recibe todos tus archivos terminados y en alta resolución directamente en tu correo o WhatsApp en menos de un día.',
      highlight: 'Velocidad Express <24h',
    },
    {
      icon: Award,
      title: '100% Personalizado a tu Nicho',
      desc: 'Nada de plantillas aburridas. Analizamos tu canal, tus colores e ideas para crear piezas únicas para Gaming, Finanzas, Vlogs, Tecnología, Fitness o Educación.',
      highlight: 'Diseño Exclusivo',
    },
    {
      icon: Download,
      title: 'Archivos HD Listos para Subir',
      desc: 'Formatos optimizados PNG/JPG sin marcas de agua y en las resoluciones oficiales que exigen YouTube, Instagram, TikTok y Twitch.',
      highlight: 'Máxima Calidad HD',
    },
    {
      icon: ShieldCheck,
      title: 'Garantía y Ajustes de Satisfacción',
      desc: 'Tu tranquilidad es primero. Si necesitas ajustar algún detalle de tus miniaturas o banner, nuestro equipo lo modifica sin costo adicional.',
      highlight: 'Satisfacción 100%',
    },
    {
      icon: Sparkles,
      title: 'Oferta Especial Limitada ($5 USD)',
      desc: 'Un paquete completo valorado en $47 USD disponible por tiempo limitado para los primeros 100 creadores por el precio único de $5 USD.',
      highlight: 'Ahorro del 89%',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#090b0a] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>¿POR QUÉ ELEGIR EL PACK CREADOR?</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            TODO LO QUE GANAS AL TRABAJAR CON <span className="text-[#8bf500]">LOEDITAMOS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-medium">
            Diseños creados con estrategia comercial para transformar tu presencia digital y destacar sobre la competencia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#121613] border border-slate-800/80 hover:border-[#8bf500]/50 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-[#8bf500]/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#8bf500]/10 border border-[#8bf500]/40 flex items-center justify-center text-[#8bf500] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-[#8bf500]/10 text-[#8bf500] border border-[#8bf500]/30 px-2.5 py-1 rounded-full uppercase">
                      {b.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#8bf500] transition-colors mb-2">
                    {b.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-bold text-[#8bf500]">
                  <CheckCircle2 className="w-4 h-4 text-[#8bf500]" />
                  <span>Incluido en tu Pack de $5 USD</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Conversion Callout Box */}
        <div className="mt-16 bg-[#101411] border-2 border-[#8bf500]/50 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl glow-lime">
          <div className="inline-flex items-center gap-2 bg-[#8bf500] text-black px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase mb-4">
            <Flame className="w-4 h-4 fill-black" />
            <span>SOLO PARA LAS PRIMERAS 100 PERSONAS</span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            DEJA DE PERDER VISITAS POR DISEÑOS AMATEURS
          </h3>

          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Consigue tus 5 miniaturas, banner y fotos de perfil por el ridículo precio de <strong className="text-[#8bf500] font-bold">$5 dólares</strong>. Promoción activa hasta agotar los cupos restantes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenCheckout}
              id="benefits-checkout-cta"
              className="w-full sm:w-auto bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-lg px-10 py-4 rounded-2xl shadow-xl shadow-[#8bf500]/30 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-black" />
              <span>SOLICITAR MI PACK POR WHATSAPP</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
