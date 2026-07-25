'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  ArrowRight,
  Flame,
  User,
  Mail,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  remainingSlots: number;
}

const WHATSAPP_NUMBER = '15513090145';

const nicheLabels: Record<string, string> = {
  tech: 'Tecnología & Software',
  gaming: 'Gaming & Streaming',
  finance: 'Finanzas & Negocios',
  vlogs: 'Vlogs & Estilo de Vida',
  fitness: 'Fitness & Salud',
  education: 'Educación & Tutoriales',
  other: 'Otro Nicho',
};

export default function CheckoutModal({ isOpen, onClose, remainingSlots }: CheckoutModalProps) {
  const [channelName, setChannelName] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('tech');
  const [contactEmail, setContactEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmitOrder = (event: React.FormEvent) => {
    event.preventDefault();

    const message = [
      '¡Hola LoEditamos! Quiero solicitar el Pack Creador de $5 USD.',
      '',
      `Canal / proyecto: ${channelName}`,
      `Enlace o @handle: ${channelUrl || 'No indicado'}`,
      `Temática: ${nicheLabels[selectedNiche]}`,
      `Email: ${contactEmail}`,
      `Indicaciones: ${notes || 'Sin indicaciones adicionales'}`,
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0d110e] border-2 border-[#8bf500]/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#8bf500]/20 z-10 my-8 overflow-hidden glow-lime"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#8bf500] text-slate-300 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8bf500] mb-2">
                  <Flame className="w-3.5 h-3.5 fill-[#8bf500]" />
                  <span>CUPO RESERVADO • QUEDAN {remainingSlots} DISPONIBLES</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                  OBTÉN TU <span className="text-[#8bf500]">PACK CREADOR</span>
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Ingresa los datos de tu canal y continúa la conversación con nuestro equipo por WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Nombre de tu Canal / Proyecto *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={channelName}
                        onChange={(event) => setChannelName(event.target.value)}
                        placeholder="Ej. Tech master, Juan Vlogs"
                        className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white pl-10 pr-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Enlace o @Handle de YouTube / Redes
                    </label>
                    <input
                      type="text"
                      value={channelUrl}
                      onChange={(event) => setChannelUrl(event.target.value)}
                      placeholder="youtube.com/@tucanal"
                      className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Tu Temática / Nicho Principal
                    </label>
                    <select
                      value={selectedNiche}
                      onChange={(event) => setSelectedNiche(event.target.value)}
                      className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all"
                    >
                      <option value="tech">Tecnología & Software</option>
                      <option value="gaming">Gaming & Streaming</option>
                      <option value="finance">Finanzas & Negocios</option>
                      <option value="vlogs">Vlogs & Estilo de Vida</option>
                      <option value="fitness">Fitness & Salud</option>
                      <option value="education">Educación & Tutoriales</option>
                      <option value="other">Otro Nicho</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Tu Correo Electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(event) => setContactEmail(event.target.value)}
                        placeholder="tu@email.com"
                        className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white pl-10 pr-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    ¿Algún color, idea o detalle preferido? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Ej. Prefiero colores neón verdes y amarillos, mi canal trata de reviews..."
                    className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                  />
                </div>

                <div className="bg-[#121613] border border-[#8bf500]/40 p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Pack Creador (5 Miniaturas, Banner, 2 Fotos Perfil):</span>
                    <span className="line-through text-slate-500">$47.00 USD</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Garantía de Entrega &lt;24 Horas:</span>
                    <span className="text-[#8bf500] font-bold">GRATIS</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Descuento de Promoción Limitada (89% OFF):</span>
                    <span className="text-rose-400 font-bold">-$42.00 USD</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-black text-white">
                    <span className="font-heading uppercase">PRECIO DEL PACK:</span>
                    <span className="font-heading text-2xl text-[#8bf500]">$5.00 USD</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-black text-lg py-4 rounded-2xl shadow-xl shadow-[#25D366]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-black" />
                  <span>ENVIAR MI PEDIDO POR WHATSAPP</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8bf500]" /> Atención directa
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#8bf500]" /> Entrega en &lt;24 hrs
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8bf500]" /> Sin suscripciones
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
