'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ArrowRight, Flame, Clock } from 'lucide-react';

interface StickyBottomBarProps {
  remainingSlots: number;
  onOpenCheckout: () => void;
}

export default function StickyBottomBar({ remainingSlots, onOpenCheckout }: StickyBottomBarProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 400px
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d110e]/95 backdrop-blur-md border-t border-[#8bf500]/40 py-3 px-4 shadow-2xl shadow-black/80"
          id="sticky-bottom-bar"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            
            {/* Offer details & stock */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#8bf500] items-center justify-center text-black font-black shrink-0">
                <Zap className="w-5 h-5 fill-black" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-sm sm:text-base text-white truncate">
                    PACK CREADOR <span className="text-[#8bf500]">$5 USD</span>
                  </span>
                  <span className="hidden md:inline-block bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-mono">
                    Antes $47
                  </span>
                </div>
                
                <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 truncate">
                  <Flame className="w-3.5 h-3.5 text-[#8bf500] shrink-0" />
                  <span>Quedan <strong className="text-[#8bf500]">{remainingSlots} de 100 cupos</strong> disponibles</span>
                </p>
              </div>
            </div>

            {/* Fast Buy Action Button */}
            <button
              onClick={onOpenCheckout}
              id="sticky-bottom-cta"
              className="bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-xs sm:text-sm px-5 sm:px-8 py-3 rounded-xl shadow-lg shadow-[#8bf500]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>¡QUIERO MI PACK ($5)!</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
