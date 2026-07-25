'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Star,
  ShoppingBag,
  ArrowUpRight,
  Globe,
  Instagram,
  Youtube
} from 'lucide-react';

export default function GuaranteeFooter({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  return (
    <footer className="bg-[#050706] border-t border-slate-900 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Guarantee Cards Banner */}
        <div className="bg-[#0f1310] border border-[#8bf500]/30 rounded-3xl p-6 sm:p-10 mb-12 glow-lime">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Title */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#8bf500]/10 border border-[#8bf500] flex items-center justify-center text-[#8bf500] shrink-0">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase">
                  PARA CUALQUIER CANAL O PERFIL
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Gaming, Vlogs, Finanzas, Educación, Tecnología, Fitness, Podcasts y más.
                </p>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="bg-[#151b16] border border-slate-800 p-3.5 rounded-2xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8bf500] shrink-0" />
                <div className="text-left">
                  <p className="font-heading font-extrabold text-xs text-white uppercase">PAGO SEGURO</p>
                  <p className="text-[10px] text-slate-400">Encriptación SSL 256-bit</p>
                </div>
              </div>

              <div className="bg-[#151b16] border border-slate-800 p-3.5 rounded-2xl flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-[#8bf500] shrink-0" />
                <div className="text-left">
                  <p className="font-heading font-extrabold text-xs text-white uppercase">ENTREGA RÁPIDA</p>
                  <p className="text-[10px] text-slate-400">Listo en &lt;24 horas</p>
                </div>
              </div>

              <div className="bg-[#151b16] border border-slate-800 p-3.5 rounded-2xl flex items-center gap-2.5">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                <div className="text-left">
                  <p className="font-heading font-extrabold text-xs text-white uppercase">SATISFACCIÓN</p>
                  <p className="text-[10px] text-slate-400">Garantía de ajustes</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Social Handle & Brand Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-900">
          <div>
            <span className="font-heading font-black text-2xl text-white tracking-widest flex items-center gap-2">
              <span className="text-[#8bf500]">@LOEDITAMOS</span> - LOEDITAMOS.COM
            </span>
            <p className="text-xs text-slate-400 mt-1">
              Agencia de Diseño y Edición para Creadores de Contenido
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://loeditamos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-[#8bf500] transition-colors bg-[#121613] px-4 py-2 rounded-xl border border-slate-800"
            >
              <Globe className="w-4 h-4 text-[#8bf500]" />
              <span>LOEDITAMOS.COM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenCheckout}
              className="bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-[#8bf500]/20"
            >
              COMPRAR PACK $3 USD
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <p>© 2026 LOEDITAMOS. Todos los derechos reservados.</p>
          <p className="uppercase text-[#8bf500]">APLICAN CONDICIONES* - OFERTA LIMITADA A PRIMEROS 100 USUARIOS</p>
        </div>

      </div>
    </footer>
  );
}
