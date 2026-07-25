'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  X,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Lock,
  CreditCard,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Flame,
  User,
  Mail,
  Smartphone,
  Copy,
  Check
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  remainingSlots: number;
}

export default function CheckoutModal({ isOpen, onClose, remainingSlots }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [channelName, setChannelName] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('tech');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [orderId, setOrderId] = useState('');

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!channelName || !contactEmail) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `LC-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderId(generatedId);
      setStep('success');

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8bf500', '#ffffff', '#22c55e', '#a3e635'],
      });
    }, 1200);
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waMessage = encodeURIComponent(
    `Hola LoEditamos! Acabo de adquirir mi Pack Creador ($3 USD).\nMi número de orden es: #${orderId}\nCanal: ${channelName}\nEmail: ${contactEmail}`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0d110e] border-2 border-[#8bf500]/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[#8bf500]/20 z-10 my-8 overflow-hidden glow-lime"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#8bf500] text-slate-300 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'form' ? (
              <div>
                {/* Modal Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/40 px-3.5 py-1 rounded-full text-xs font-bold text-[#8bf500] mb-2">
                    <Flame className="w-3.5 h-3.5 fill-[#8bf500]" />
                    <span>CUPO RESERVADO • QUEDAN {remainingSlots} DISPONIBLES</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
                    OBTÉN TU <span className="text-[#8bf500]">PACK CREADOR</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Ingresa los datos de tu canal. Recibirás todos los archivos en menos de 24 horas.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  {/* Channel Name & URL */}
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
                          onChange={(e) => setChannelName(e.target.value)}
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
                        onChange={(e) => setChannelUrl(e.target.value)}
                        placeholder="youtube.com/@tucanal"
                        className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Niche & Contact Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                        Tu Temática / Nicho Principal
                      </label>
                      <select
                        value={selectedNiche}
                        onChange={(e) => setSelectedNiche(e.target.value)}
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
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white pl-10 pr-4 py-3 rounded-xl text-sm font-semibold outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp contact optional */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      WhatsApp (Opcional - para avisos inmediatos)
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+52 1 55 1234 5678"
                        className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Special notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      ¿Algún color, idea o detalle preferido? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Prefiero colores neón verdes y amarillos, mi canal trata de reviews..."
                      className="w-full bg-[#121613] border border-slate-700 focus:border-[#8bf500] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Order Summary Box */}
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
                      <span>Descuento de Promoción Limitada (93% OFF):</span>
                      <span className="text-rose-400 font-bold">-$44.00 USD</span>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-black text-white">
                      <span className="font-heading uppercase">TOTAL A PAGAR:</span>
                      <span className="font-heading text-2xl text-[#8bf500]">$3.00 USD</span>
                    </div>
                  </div>

                  {/* Submit Payment Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-[#8bf500] hover:bg-[#9eff00] text-black font-heading font-black text-lg py-4 rounded-2xl shadow-xl shadow-[#8bf500]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>PROCESANDO PEDIDO SEGURO...</span>
                      </div>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span>COMPLETAR MI PEDIDO POR $3 USD</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8bf500]" /> Encriptación SSL 256-bit
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8bf500]" /> Entrega en &lt;24 hrs
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Order State */
              <div className="text-center py-4 space-y-5">
                <div className="w-16 h-16 bg-[#8bf500]/20 border-2 border-[#8bf500] rounded-full flex items-center justify-center mx-auto text-[#8bf500] glow-lime">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="bg-[#8bf500] text-black font-black text-xs px-3 py-1 rounded-full uppercase font-mono">
                    ¡PEDIDO CONFIRMADO CON ÉXITO!
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                    ¡BIENVENIDO A <span className="text-[#8bf500]">LOEDITAMOS</span>!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
                    Tu Pack Creador para <strong className="text-white">{channelName}</strong> ya está en cola de producción prioritaria.
                  </p>
                </div>

                {/* Order Receipt Box */}
                <div className="bg-[#121613] border border-[#8bf500]/40 p-4 rounded-2xl text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-mono">Número de Orden:</span>
                    <div className="flex items-center gap-1.5 font-bold text-[#8bf500] font-mono">
                      <span>#{orderId}</span>
                      <button
                        onClick={handleCopyOrderId}
                        className="p-1 hover:bg-slate-800 rounded text-slate-300"
                        title="Copiar ID"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Monto Pagado:</span>
                    <span className="font-bold text-white">$3.00 USD (Pago Único)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tiempo de Entrega:</span>
                    <span className="font-bold text-[#8bf500]">Menos de 24 Horas</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Correo de Entrega:</span>
                    <span className="font-semibold text-slate-200 truncate">{contactEmail}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-black text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-5 h-5 fill-black" />
                    <span>ENVIAR MATERIAL POR WHATSAPP AHORA</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3 rounded-xl transition-colors"
                  >
                    CERRAR Y VOLVER
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
