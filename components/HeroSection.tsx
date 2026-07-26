'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Flame,
} from 'lucide-react';

interface HeroSectionProps {
  remainingSlots: number;
  onOpenCheckout: () => void;
}
export default function HeroSection({ remainingSlots, onOpenCheckout }: HeroSectionProps) {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous.seconds > 0) return { ...previous, seconds: previous.seconds - 1 };
        if (previous.minutes > 0) return { ...previous, minutes: previous.minutes - 1, seconds: 59 };
        if (previous.hours > 0) return { hours: previous.hours - 1, minutes: 59, seconds: 59 };
        return previous;
      });
    }, 1_000);

    return () => clearInterval(timer);
  }, []);

  const progressPercentage = Math.round(((100 - remainingSlots) / 100) * 100);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-grid-pattern overflow-hidden">
      {/* Background Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8bf500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#8bf500]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Urgency Header Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#121613] border border-[#8bf500]/40 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-xl shadow-[#8bf500]/10 glow-lime"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#8bf500] animate-ping" />
            <Zap className="w-4 h-4 text-[#8bf500] fill-[#8bf500]" />
            <span>OFERTA LIMITADA A LAS PRIMERAS 100 PERSONAS</span>
            <span className="bg-[#8bf500] text-black px-2 py-0.5 rounded-md font-extrabold text-[11px]">
              89% OFF
            </span>
          </motion.div>
        </div>

        {/* Hero Title & Main Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[1.1]"
          >
            PAQUETE COMPLETO DE DISEÑO Y PRESENCIA DIGITAL POR SOLO{' '}
            <span className="text-[#8bf500] underline decoration-[#8bf500]/50 decoration-wavy underline-offset-8">
              $5 USD
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Obtén <strong className="text-white font-bold">5 Miniaturas de YouTube/Reels</strong>,{' '}
            <strong className="text-white font-bold">1 Banner HD</strong> y{' '}
            <strong className="text-white font-bold">2 Fotos de Perfil Profesional</strong> diseñadas a medida para tu canal o marca.
            <span className="text-[#8bf500] font-bold block mt-2">
              ⚡ Recibe todos tus archivos listos en menos de 24 horas.
            </span>
          </motion.p>

          {/* Pricing & Value Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 bg-[#121613] border border-[#8bf500]/50 p-4 sm:p-5 rounded-2xl shadow-2xl glow-lime"
          >
            <div className="flex items-center gap-3 border-r border-slate-800 pr-4 sm:pr-6">
              <div className="text-left">
                <span className="text-xs text-slate-400 font-mono block uppercase">Valor Regular</span>
                <span className="text-lg text-slate-500 line-through font-bold">$47.00 USD</span>
              </div>
              <div className="text-left">
                <span className="text-xs text-[#8bf500] font-mono block uppercase font-bold">Precio Promo Hoy</span>
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#8bf500]">$5 USD</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#8bf500]" />
              <span>Precio Único</span>
              <span className="text-slate-600">•</span>
              <CheckCircle2 className="w-4 h-4 text-[#8bf500]" />
              <span>Sin Suscripciones</span>
            </div>
          </motion.div>

          {/* Primary Call To Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <button
              onClick={onOpenCheckout}
              id="hero-primary-cta"
              className="w-full sm:w-auto relative group overflow-hidden rounded-2xl bg-[#8bf500] text-black font-heading font-black text-lg sm:text-xl px-8 sm:px-12 py-5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-[#8bf500]/40 hover:shadow-[#8bf500]/70 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Zap className="w-6 h-6 fill-black group-hover:rotate-12 transition-transform" />
              <span>¡QUIERO MI PACK POR $5 USD!</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#8bf500]" /> Atención directa por WhatsApp
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8bf500]" /> Entrega en &lt;24 Horas
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Garantía de Satisfacción
              </span>
            </div>
          </motion.div>

          {/* Scarcity Bar & Countdown */}
          <div className="mt-8 max-w-xl mx-auto bg-[#121613]/90 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5 text-white">
                <Flame className="w-4 h-4 text-[#8bf500] fill-[#8bf500]" />
                Cupos de la Oferta Especial:
              </span>
              <span className="text-[#8bf500] font-mono font-extrabold text-sm">
                ¡Solo quedan {remainingSlots} de 100!
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-lime-500 to-[#8bf500] rounded-full transition-all duration-500 glow-lime"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
              <span>🔥 86% de los cupos ya han sido reclamados</span>
              <div className="flex items-center gap-1 font-mono text-[#8bf500] font-bold">
                <Clock className="w-3 h-3" />
                <span>Expira en: {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
