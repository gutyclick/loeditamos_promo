'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
  ChevronRight,
  TrendingUp,
  Tv,
  UserCheck,
  Video
} from 'lucide-react';

interface HeroSectionProps {
  remainingSlots: number;
  onOpenCheckout: () => void;
}

export default function HeroSection({ remainingSlots, onOpenCheckout }: HeroSectionProps) {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });
  const [selectedNiche, setSelectedNiche] = useState<'tech' | 'gaming' | 'vlogs' | 'finance'>('tech');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progressPercentage = Math.round(((100 - remainingSlots) / 100) * 100);

  // Sample niche showcase data
  const nicheData = {
    tech: {
      title: 'Tecnología & Software',
      bannerText: 'LEVEL UP YOUR TECH',
      subBanner: 'TUTORIALES | REVIEWS | GADGETS',
      thumbnails: [
        { title: 'HOW TO GROW FAST', tag: 'STRATEGY', bg: 'from-blue-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=80' },
        { title: 'EDIT LIKE A PRO', tag: 'PREMIERE', bg: 'from-purple-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&auto=format&fit=crop&q=80' },
        { title: 'MAKE $100 A DAY', tag: 'STEP BY STEP', bg: 'from-[#122207] to-[#090b0a]', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80' },
        { title: 'YOUTUBE SEO SECRETS', tag: 'VIRAL 2026', bg: 'from-red-950 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80' },
        { title: 'THUMBNAIL TUTORIAL', tag: 'EASY & FAST', bg: 'from-emerald-950 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80' },
      ],
      profile: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    gaming: {
      title: 'Gaming & Streaming',
      bannerText: 'EPIC GAMING VAULT',
      subBanner: 'HIGHLIGHTS | GAMEPLAY | GUIDES',
      thumbnails: [
        { title: 'PRO SETTINGS 2026', tag: 'SETTINGS', bg: 'from-cyan-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80' },
        { title: 'UNBEATABLE BUILD', tag: 'META', bg: 'from-red-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop&q=80' },
        { title: 'ROAD TO RANK 1', tag: 'CHALLENGE', bg: 'from-amber-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&auto=format&fit=crop&q=80' },
        { title: 'GEAR REVIEW', tag: 'BEST SETUP', bg: 'from-purple-950 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80' },
        { title: 'SECRET LOCATIONS', tag: 'EASTER EGGS', bg: 'from-lime-950 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80' },
      ],
      profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    },
    vlogs: {
      title: 'Vlogs & Estilo de Vida',
      bannerText: 'MY LIFE & VIBES',
      subBanner: 'TRAVEL | LIFESTYLE | DIARY',
      thumbnails: [
        { title: 'DAY IN MY LIFE', tag: 'TOKYO 2026', bg: 'from-rose-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80' },
        { title: 'ROOM TOUR PRO', tag: 'DESK SETUP', bg: 'from-indigo-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80' },
        { title: 'HOW I ORGANIZE', tag: 'ROUTINE', bg: 'from-teal-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&auto=format&fit=crop&q=80' },
        { title: 'SECRET SPOTS', tag: 'TRAVEL VLOG', bg: 'from-amber-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&auto=format&fit=crop&q=80' },
        { title: 'FAVORITE GEAR', tag: 'MUST HAVES', bg: 'from-[#122207] to-[#090b0a]', img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&auto=format&fit=crop&q=80' },
      ],
      profile: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
    },
    finance: {
      title: 'Finanzas & Negocios',
      bannerText: 'FINANCIAL MASTERY',
      subBanner: 'INVERSIONES | CRIPTO | NEGOCIOS',
      thumbnails: [
        { title: 'INVIERTE $100', tag: 'FINANZAS', bg: 'from-emerald-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80' },
        { title: 'LIBERTAD FINANCIERA', tag: 'ESTRATEGIA', bg: 'from-yellow-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80' },
        { title: 'CREA TU NEGOCIO', tag: 'PASO A PASO', bg: 'from-blue-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80' },
        { title: 'ERRORES DE DINERO', tag: 'EVÍTALOS YA', bg: 'from-red-900 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&auto=format&fit=crop&q=80' },
        { title: 'INGRESOS PASIVOS', tag: 'GUÍA 2026', bg: 'from-lime-950 to-[#090b0a]', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&auto=format&fit=crop&q=80' },
      ],
      profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
    }
  };

  const currentNiche = nicheData[selectedNiche];

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
              <span>Un Solo Pago Único</span>
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
              <span>¡QUIERO MI PACK POR $5 USD AHORA!</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#8bf500]" /> Pago 100% Seguro
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

        {false && (
        /* Interactive Replica of the Flyer Graphic Showcase */
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative max-w-5xl mx-auto bg-[#0d110e] border-2 border-[#8bf500]/60 rounded-3xl p-4 sm:p-8 shadow-2xl shadow-[#8bf500]/20 glow-lime"
        >
          {/* Flyer Top Header Replica */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-[#8bf500] text-black px-4 py-1.5 rounded-xl font-heading font-black text-sm uppercase flex items-center gap-1.5">
                <Zap className="w-4 h-4 fill-black" />
                ¿QUÉ INCLUYE EL PAQUETE?
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline-block">
                Selecciona una temática para ver el resultado:
              </span>
            </div>

            {/* Niche selector tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#121613] p-1 rounded-xl border border-slate-800 text-xs">
              {(['tech', 'gaming', 'vlogs', 'finance'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedNiche(key)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    selectedNiche === key
                      ? 'bg-[#8bf500] text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {key === 'tech' && 'Tech / Software'}
                  {key === 'gaming' && 'Gaming'}
                  {key === 'vlogs' && 'Vlogs & Life'}
                  {key === 'finance' && 'Finanzas'}
                </button>
              ))}
            </div>
          </div>

          {/* Main Visual Content Layout (5 Thumbnails + Banner + 2 Profile Pics) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: 5 Miniaturas Grid */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#8bf500]/20 border border-[#8bf500] text-[#8bf500] flex items-center justify-center font-black text-sm">
                    5
                  </span>
                  <span className="font-heading font-extrabold text-sm sm:text-base text-white uppercase">
                    MINIATURAS DE YOUTUBE O REELS
                  </span>
                </div>
                <span className="text-[11px] text-[#8bf500] bg-[#8bf500]/10 border border-[#8bf500]/30 px-2.5 py-0.5 rounded-md font-mono">
                  CTR ALTO (300%+)
                </span>
              </div>

              {/* 5 Thumbnails grid display */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {currentNiche.thumbnails.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative group overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br ${item.bg} p-1 aspect-video flex flex-col justify-between hover:border-[#8bf500] transition-all duration-300 shadow-md`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="bg-black/80 text-[#8bf500] text-[9px] font-mono px-1.5 py-0.5 rounded border border-[#8bf500]/30 uppercase font-bold">
                        {item.tag}
                      </span>
                      <span className="bg-[#8bf500] text-black text-[9px] font-black px-1 rounded">
                        HD
                      </span>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <p className="font-heading font-black text-[11px] sm:text-xs text-white leading-tight drop-shadow-md group-hover:text-[#8bf500] transition-colors">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}

                {/* 5th thumbnail badge card */}
                <div className="relative overflow-hidden rounded-xl border border-[#8bf500]/40 bg-[#121613] p-2 aspect-video flex flex-col items-center justify-center text-center glow-lime">
                  <span className="text-xl font-black text-[#8bf500]">+1 MÁS</span>
                  <span className="text-[10px] text-slate-300 font-medium">100% Medida de tu Nicho</span>
                </div>
              </div>
            </div>

            {/* Right Column: Banner & Profile Pics */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
              
              {/* Banner Card */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Tv className="w-5 h-5 text-[#8bf500]" />
                  <span className="font-heading font-extrabold text-sm text-white uppercase">
                    BANNER PARA YOUTUBE (2560x1440)
                  </span>
                </div>

                <div className="relative h-24 sm:h-28 rounded-xl border border-[#8bf500]/40 overflow-hidden bg-black flex items-center justify-center p-3 group glow-lime">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
                    alt="Banner Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10 text-center">
                    <span className="font-heading font-black text-lg sm:text-2xl tracking-wider text-white flex items-center justify-center gap-2">
                      {currentNiche.bannerText}
                      <span className="text-[#8bf500] text-xl">⚡</span>
                    </span>
                    <p className="text-[10px] sm:text-xs text-[#8bf500] font-mono tracking-widest mt-1 uppercase font-bold">
                      {currentNiche.subBanner}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Pictures (YouTube + Social Media) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#8bf500]" />
                    <span className="font-heading font-extrabold text-sm text-white uppercase">
                      2 FOTOS DE PERFIL PRO
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">YouTube + Redes</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* YouTube Profile Pic */}
                  <div className="bg-[#121613] border border-slate-800 p-3 rounded-xl flex items-center gap-3 hover:border-[#8bf500] transition-colors">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#8bf500] to-emerald-400 shrink-0">
                      <img
                        src={currentNiche.profile}
                        alt="Profile YT"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">Perfil YouTube</p>
                      <span className="text-[10px] text-[#8bf500] font-mono">Fondo Recortado</span>
                    </div>
                  </div>

                  {/* Social Media Profile Pic */}
                  <div className="bg-[#121613] border border-slate-800 p-3 rounded-xl flex items-center gap-3 hover:border-[#8bf500] transition-colors">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#8bf500] to-lime-300 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                        alt="Profile Redes"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">Redes Sociales</p>
                      <span className="text-[10px] text-[#8bf500] font-mono">Alta Resolución</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Features Footer in Flyer */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#8bf500]/10 border border-[#8bf500]/40 flex items-center justify-center text-[#8bf500]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-heading font-black text-sm text-white uppercase">
                PARA CUALQUIER CANAL O PERFIL
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300">
              <div className="flex items-center gap-1.5 bg-[#121613] px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#8bf500]" />
                <span>PAGO SEGURO</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#121613] px-3 py-1.5 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-[#8bf500]" />
                <span>ENTREGA RÁPIDA &lt;24h</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#121613] px-3 py-1.5 rounded-lg border border-slate-800">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>GARANTÍA DE SATISFACCIÓN</span>
              </div>
            </div>
          </div>

        </motion.div>
        )}

      </div>
    </section>
  );
}
