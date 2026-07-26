'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  XCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Eye,
  Zap,
  Sliders
} from 'lucide-react';

interface BeforeAfterProps {
  onOpenCheckout: () => void;
}

export default function BeforeAfterTransformation({ onOpenCheckout }: BeforeAfterProps) {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [sliderPos, setSliderPos] = useState(70); // percentage for visual slider

  return (
    <section id="transformacion" className="py-20 bg-[#090b0a] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EL PODER DEL IMPACTO VISUAL</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            MIRA EL CAMBIO RADICAL EN TU <span className="text-[#8bf500]">CANAL</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-medium">
            El algoritmo de YouTube premia a los canales con mayor CTR. Una miniatura y banner profesional cambian completamente las reglas del juego.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#121613] p-1.5 rounded-2xl border border-slate-800 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'after'
                  ? 'bg-[#8bf500] text-black shadow-lg shadow-[#8bf500]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>CON PACK CREADOR (DESPUÉS)</span>
            </button>

            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'before'
                  ? 'bg-rose-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>CANAL TÍPICO (ANTES)</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Mockup Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Main Visual Preview Display */}
          <div className="lg:col-span-8 bg-[#101411] border-2 border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* Header YouTube Mockup Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] ml-2 text-slate-300">youtube.com/@tucanal</span>
              </div>
              <span className="bg-slate-800 px-2.5 py-0.5 rounded text-[10px] font-mono">
                {activeTab === 'after' ? '🔥 VERSIÓN OPTIMIZADA' : '❌ VERSIÓN AMATEUR'}
              </span>
            </div>

            {/* Simulated Banner */}
            <div className="mt-4 relative rounded-xl overflow-hidden h-32 sm:h-40 border border-slate-800">
              {activeTab === 'after' ? (
                <div className="w-full h-full bg-black relative">
                  <Image
                    src="/banner-despues.png"
                    alt="Banner profesional de Manu Emprende para un canal de finanzas y emprendimiento"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    quality={85}
                    className="object-cover object-[center_40%]"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-slate-800 p-4 flex flex-col justify-center items-center text-center text-slate-500">
                  <span className="font-heading font-bold text-lg text-slate-400">
                    SIN BANNER (O IMAGEN DESCALIBRADA)
                  </span>
                  <span className="text-xs text-slate-500 mt-1">Texto cortado en pantallas de teléfono</span>
                </div>
              )}
            </div>

            {/* Profile Avatar & Subscriptions Header */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-14 rounded-full p-0.5 ${
                    activeTab === 'after'
                      ? 'bg-gradient-to-tr from-[#8bf500] to-emerald-400 glow-lime'
                      : 'bg-slate-700'
                  }`}
                >
                  <img
                    src={
                      activeTab === 'after'
                        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
                        : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'
                    }
                    className="w-full h-full object-cover rounded-full"
                    alt={
                      activeTab === 'after'
                        ? 'Ejemplo de foto de perfil profesional para YouTube'
                        : 'Ejemplo de foto de perfil antes de la optimización'
                    }
                  />
                </div>

                <div>
                  <h4 className="font-heading font-black text-base sm:text-lg text-white">
                    Tu Canal de YouTube
                  </h4>
                  <p className="text-xs text-slate-400">
                    {activeTab === 'after' ? '12.4K suscriptores • 140 videos' : '1.2K suscriptores'}
                  </p>
                </div>
              </div>

              <div
                className={`px-4 py-2 rounded-xl text-xs font-bold ${
                  activeTab === 'after'
                    ? 'bg-[#8bf500] text-black font-heading font-black'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {activeTab === 'after' ? 'SUSCRIBIRSE ✓' : 'Suscribirse'}
              </div>
            </div>

            {/* Thumbnails Feed Mockup */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <p className="text-xs font-mono text-slate-400 mb-3 uppercase">Videos Recientes:</p>
              <div className="grid grid-cols-2 gap-3">
                {activeTab === 'after' ? (
                  <>
                    <div className="bg-[#121613] rounded-xl overflow-hidden border border-[#8bf500]/40 p-1">
                      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                        <Image
                          src="/miniatura-1-despues.webp"
                          alt="Miniatura profesional Decidí invertir para un canal de finanzas"
                          fill
                          sizes="(max-width: 1024px) 50vw, 320px"
                          quality={85}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 text-[10px] text-slate-300">
                        <p className="font-bold text-white truncate">Decidí invertir: invierte sin miedo</p>
                        <p className="text-[#8bf500] font-mono mt-0.5">48K visitas • hace 2 días (CTR 12.4%)</p>
                      </div>
                    </div>

                    <div className="bg-[#121613] rounded-xl overflow-hidden border border-[#8bf500]/40 p-1">
                      <div className="relative aspect-video bg-gradient-to-br from-[#122207] to-black rounded-lg p-2 flex flex-col justify-between">
                        <span className="bg-[#8bf500] text-black font-black text-[9px] px-1.5 py-0.5 rounded self-start">
                          CTR PRO
                        </span>
                        <p className="font-heading font-black text-xs text-white">
                          SECRETO PARA MÁS VISITAS
                        </p>
                      </div>
                      <div className="p-2 text-[10px] text-slate-300">
                        <p className="font-bold text-white truncate">Estrategia de miniaturas 2026</p>
                        <p className="text-[#8bf500] font-mono mt-0.5">82K visitas • hace 5 días (CTR 14.1%)</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 p-1 opacity-60">
                      <div className="aspect-video bg-slate-800 rounded-lg p-2 flex items-center justify-center text-center">
                        <p className="text-[10px] text-slate-400 italic">
                          Texto pequeño ilegible, sin rostro recortado
                        </p>
                      </div>
                      <div className="p-2 text-[10px] text-slate-400">
                        <p className="truncate">Mi video de hoy tutorial #3</p>
                        <p className="text-rose-400 font-mono mt-0.5">140 visitas • hace 3 semanas (CTR 1.4%)</p>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 p-1 opacity-60">
                      <div className="aspect-video bg-slate-800 rounded-lg p-2 flex items-center justify-center text-center">
                        <p className="text-[10px] text-slate-400 italic">
                          Fondo oscuro sin contraste ni luz
                        </p>
                      </div>
                      <div className="p-2 text-[10px] text-slate-400">
                        <p className="truncate">Consejos para YouTube</p>
                        <p className="text-rose-400 font-mono mt-0.5">89 visitas • hace 1 mes (CTR 1.1%)</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Right Column Metrics & Difference Breakdown */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <div
              className={`p-6 rounded-3xl border transition-all ${
                activeTab === 'after'
                  ? 'bg-[#121613] border-[#8bf500]/60 glow-lime'
                  : 'bg-rose-950/20 border-rose-800/40'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {activeTab === 'after' ? (
                  <TrendingUp className="w-6 h-6 text-[#8bf500]" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-rose-500" />
                )}
                <span className="font-heading font-black text-lg text-white uppercase">
                  {activeTab === 'after' ? 'RESULTADO OPTIMIZADO' : 'IMPACTO EN TU CANAL'}
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono">Tasa de Clics Estimada (CTR):</span>
                  <span
                    className={`font-heading font-black text-2xl ${
                      activeTab === 'after' ? 'text-[#8bf500]' : 'text-rose-400'
                    }`}
                  >
                    {activeTab === 'after' ? '8.5% - 15.2%' : '1.0% - 2.5%'}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono">Percepción del Espectador:</span>
                  <p className="text-slate-200 font-semibold mt-0.5">
                    {activeTab === 'after'
                      ? '✨ "Este canal es profesional, el contenido debe ser increíble. Me suscribo."'
                      : '❌ "Parece un canal abandonado o de baja calidad. Voy a ver otro video."'
                    }
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 block font-mono">Retención y Crecimiento:</span>
                  <p className="text-slate-300 font-medium mt-0.5">
                    {activeTab === 'after'
                      ? '🚀 El algoritmo detecta alto interés y promociona tus videos en la pestaña de recomendados.'
                      : '⚠️ Pierdes el 90% de las impresiones gratuitas que YouTube le da a tus videos.'
                    }
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              id="before-after-cta"
              className="w-full bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-base py-4 rounded-2xl shadow-xl shadow-[#8bf500]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-black" />
              <span>HABLAR CON UN DISEÑADOR</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
