'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Flame, ArrowRight, Lock } from 'lucide-react';

interface NavbarProps {
  remainingSlots: number;
  onOpenCheckout: () => void;
}

export default function Navbar({ remainingSlots, onOpenCheckout }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b0a]/90 backdrop-blur-md border-b border-[#8bf500]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-4'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="brand-logo-link">
          <div className="w-9 h-9 rounded-xl bg-black border border-[#8bf500]/60 flex items-center justify-center glow-lime group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-[#8bf500] fill-[#8bf500]/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
              LO<span className="text-[#8bf500]">EDITAMOS</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
              PACK CREADOR $5 USD
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#que-incluye" className="hover:text-[#8bf500] transition-colors">
            ¿Qué Incluye?
          </a>
          <a href="#transformacion" className="hover:text-[#8bf500] transition-colors">
            Antes vs Después
          </a>
          <a href="#simulador" className="hover:text-[#8bf500] transition-colors">
            Simulador
          </a>
          <a href="#beneficios" className="hover:text-[#8bf500] transition-colors">
            Beneficios
          </a>
          <a href="#faq" className="hover:text-[#8bf500] transition-colors">
            Preguntas
          </a>
        </nav>

        {/* Action Button & Scarcity Counter */}
        <div className="flex items-center gap-3">
          {/* Slots Badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3 py-1.5 rounded-full text-xs font-bold text-[#8bf500] animate-pulse">
            <Flame className="w-3.5 h-3.5 text-[#8bf500] fill-[#8bf500]" />
            <span>¡Solo {remainingSlots} cupos de 100!</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenCheckout}
            id="nav-checkout-btn"
            className="relative group overflow-hidden rounded-xl bg-[#8bf500] text-black font-heading font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#8bf500]/30 hover:shadow-[#8bf500]/50 flex items-center gap-2 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>CONSEGUIR POR $5 USD</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
