'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

const RECENT_PURCHASES = [
  { name: 'Mateo R.', location: 'México', channel: 'Gaming & Tech', time: 'hace 2 min' },
  { name: 'Sofia L.', location: 'España', channel: 'Vlogs & Lifestyle', time: 'hace 4 min' },
  { name: 'Carlos G.', location: 'Colombia', channel: 'Finanzas Personales', time: 'hace 6 min' },
  { name: 'Valentina P.', location: 'Argentina', channel: 'Fitness & Salud', time: 'hace 8 min' },
  { name: 'Diego M.', location: 'Chile', channel: 'Educación & Cursos', time: 'hace 11 min' },
  { name: 'Andrés V.', location: 'Perú', channel: 'Música & Podcast', time: 'hace 14 min' },
];

export default function LiveNotificationToast({ onOpenCheckout }: { onOpenCheckout: () => void }) {
  const [currentNotification, setCurrentNotification] = useState<typeof RECENT_PURCHASES[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentNotification(RECENT_PURCHASES[index % RECENT_PURCHASES.length]);
      setIsVisible(true);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        setIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
      }, 5500);

      return () => clearTimeout(hideTimer);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-40 max-w-sm bg-[#121613]/95 backdrop-blur-md border border-[#8bf500]/40 p-3.5 rounded-2xl shadow-2xl shadow-[#8bf500]/10 flex items-center gap-3 cursor-pointer group"
          onClick={onOpenCheckout}
          id="toast-notification"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#8bf500]/20 border border-[#8bf500] flex items-center justify-center text-[#8bf500] group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8bf500] rounded-full flex items-center justify-center text-black text-[10px] font-bold">
              ✓
            </span>
          </div>

          <div className="flex-1 min-w-0 text-xs">
            <div className="flex items-center justify-between text-slate-300 font-medium">
              <span className="text-white font-bold truncate">
                {currentNotification.name} <span className="text-slate-400 font-normal">({currentNotification.location})</span>
              </span>
              <span className="text-[10px] text-[#8bf500] font-mono">{currentNotification.time}</span>
            </div>
            <p className="text-slate-300 text-[11px] truncate mt-0.5">
              ¡Compró el <span className="text-[#8bf500] font-bold">Pack Creador ($3 USD)</span>!
            </p>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
              <Sparkles className="w-3 h-3 text-[#8bf500]" />
              <span>Nicho: {currentNotification.channel}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
