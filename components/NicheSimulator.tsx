'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Tv,
  User,
  MousePointerClick,
  Zap,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Palette,
  Layout
} from 'lucide-react';

interface NicheSimulatorProps {
  onOpenCheckout: () => void;
}

const NICHES = [
  {
    id: 'gaming',
    label: 'Gaming & Twitch',
    icon: '🎮',
    slogan: 'MEJORES GAMEPLAYS Y TRUCOS 2026',
    colors: 'from-purple-900 to-cyan-900',
    thumb1: 'MEJOR BUILD PARA GANAR',
    thumb2: 'PRO SETUP GAMING $1000',
    thumb3: 'SECRETOS OCULTOS REVEAL',
    bgImg: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'tech',
    label: 'Tecnología & Software',
    icon: '💻',
    slogan: 'REVIEWS | TUTORIALES | IA',
    colors: 'from-blue-900 to-emerald-900',
    thumb1: 'CÓMO PROGRAMAR IA HOY',
    thumb2: 'TOP 5 GADGETS IMPRESCINDIBLES',
    thumb3: 'MI DESK SETUP FINAL 2026',
    bgImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'finance',
    label: 'Finanzas & Cripto',
    icon: '📈',
    slogan: 'LIBERTAD FINANCIERA E INVERSIONES',
    colors: 'from-emerald-900 to-amber-900',
    thumb1: 'INVIERTE $100 Y DUPLÍCALO',
    thumb2: 'INGRESOS PASIVOS PASO A PASO',
    thumb3: 'ERRORES QUE TE DEJAN SIN DINERO',
    bgImg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'lifestyle',
    label: 'Vlogs & Estilo de Vida',
    icon: '✨',
    slogan: 'LIFESTYLE | VIAJES | RUTINAS',
    colors: 'from-rose-900 to-amber-900',
    thumb1: 'UN DÍA EN MI VIDA EN TOKYO',
    thumb2: 'MI RUTINA DE MAÑANA PRODUCTIVA',
    thumb3: 'ROOM TOUR 2026 ESTILO MINIMALISTA',
    bgImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'fitness',
    label: 'Fitness & Nutrición',
    icon: '💪',
    slogan: 'ENTRENAMIENTO Y SALUD REAL',
    colors: 'from-red-900 to-orange-900',
    thumb1: 'RUTINA EN CASA 15 MINUTOS',
    thumb2: 'QUÉ COMER PARA GANAR MÚSCULO',
    thumb3: 'CAMBIO FÍSICO EN 90 DÍAS',
    bgImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80'
  },
  {
    id: 'edu',
    label: 'Educación & Cursos',
    icon: '📚',
    slogan: 'APRENDE RÁPIDO Y FÁCIL',
    colors: 'from-teal-900 to-indigo-900',
    thumb1: 'APRENDE INGLÉS EN 30 DÍAS',
    thumb2: 'SECRETOS DE MEMORIA RÁPIDA',
    thumb3: 'GUÍA DEFINITIVA DE ESTUDIO',
    bgImg: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
    profileImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
];

export default function NicheSimulator({ onOpenCheckout }: NicheSimulatorProps) {
  const [channelName, setChannelName] = useState('Tu Canal Pro');
  const [selectedNicheId, setSelectedNicheId] = useState('tech');

  const activeNiche = NICHES.find((n) => n.id === selectedNicheId) || NICHES[1];

  return (
    <section id="simulador" className="py-20 bg-[#070908] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>SIMULADOR INTERACTIVO DE CANAL</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            PRUEBA CÓMO LUCIRÍA TU <span className="text-[#8bf500]">CANAL HOY</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-medium">
            Ingresa el nombre de tu canal y selecciona tu nicho para ver una simulación en tiempo real de tu Pack Creador.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="max-w-4xl mx-auto bg-[#121613] border border-slate-800 p-6 rounded-3xl mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Input Channel Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Nombre de tu Canal / Proyecto:
              </label>
              <input
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                placeholder="Ej. Juan Gaming, TechStudio, etc."
                maxLength={30}
                className="w-full bg-[#090b0a] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-3 rounded-xl text-sm font-bold outline-none transition-all focus:ring-2 focus:ring-[#8bf500]/20"
              />
            </div>

            {/* Select Niche */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Selecciona tu Temática / Nicho:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {NICHES.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setSelectedNicheId(n.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 truncate border ${
                      selectedNicheId === n.id
                        ? 'bg-[#8bf500] text-black border-[#8bf500] shadow-md'
                        : 'bg-[#090b0a] text-slate-300 border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span>{n.icon}</span>
                    <span className="truncate">{n.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Simulated Channel Display Card */}
        <div className="max-w-4xl mx-auto bg-[#101411] border-2 border-[#8bf500]/50 rounded-3xl p-4 sm:p-8 shadow-2xl shadow-[#8bf500]/15 glow-lime">
          
          {/* Simulated Header Banner */}
          <div className="relative h-36 sm:h-48 rounded-2xl overflow-hidden bg-black border border-slate-800 flex items-center justify-center p-4">
            <img
              src={activeNiche.bgImg}
              alt="Banner preview"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="relative z-10 text-center px-4">
              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-widest uppercase drop-shadow-lg">
                {channelName || 'TU CANAL PRO'} <span className="text-[#8bf500]">⚡</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#8bf500] font-mono tracking-widest mt-1.5 uppercase font-extrabold bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-[#8bf500]/30 inline-block">
                {activeNiche.slogan}
              </p>
            </div>
          </div>

          {/* Profile & Info Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#8bf500] to-emerald-400 glow-lime shrink-0">
                <img
                  src={activeNiche.profileImg}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h4 className="font-heading font-black text-lg sm:text-xl text-white">
                  {channelName || 'Tu Canal Pro'}
                </h4>
                <p className="text-xs text-[#8bf500] font-mono mt-0.5">
                  @{(channelName || 'tucanal').toLowerCase().replace(/\s+/g, '')} • Pack Creador Activado ✓
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>LO QUIERO PARA MI CANAL POR $5</span>
            </button>
          </div>

          {/* 3 Miniaturas Samples */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading font-black text-xs sm:text-sm text-white uppercase flex items-center gap-2">
                <MousePointerClick className="w-4 h-4 text-[#8bf500]" />
                Muestra de 3 de las 5 Miniaturas Incluidas:
              </span>
              <span className="text-[11px] text-[#8bf500] font-mono font-bold">1920x1080 HD</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[activeNiche.thumb1, activeNiche.thumb2, activeNiche.thumb3].map((tTitle, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-xl border border-[#8bf500]/30 bg-gradient-to-br ${activeNiche.colors} p-3 aspect-video flex flex-col justify-between group hover:border-[#8bf500] transition-all`}
                >
                  <div className="flex justify-between items-center z-10">
                    <span className="bg-[#8bf500] text-black font-black text-[9px] px-1.5 py-0.5 rounded">
                      MINIATURA #0{idx + 1}
                    </span>
                    <span className="text-white text-[10px] font-mono">CTR 10%+</span>
                  </div>

                  <p className="relative z-10 font-heading font-black text-xs sm:text-sm text-white leading-tight drop-shadow-md">
                    {tTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
