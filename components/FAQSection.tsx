'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo entrego la información, fotos o referencias de mi canal?',
      a: 'Al solicitar tu Pack Creador de $5 USD, se abrirá un formulario breve para ingresar el nombre y enlace de tu canal, además de lo que necesitas o su temática. Al enviarlo, podrás chatear directamente con nuestro equipo de diseño por WhatsApp.',
    },
    {
      q: '¿El Pack Creador cuesta realmente $5.00 USD sin suscripciones?',
      a: 'Sí, 100% garantizado. El precio es exactamente $5.00 USD por tus 5 miniaturas, 1 banner HD y las 2 fotos de perfil. Sin membresías mensuales ni costos sorpresa. Nuestro equipo coordinará contigo el pedido y el pago directamente por WhatsApp.',
    },
    {
      q: '¿Qué pasa si mi canal recién va empezando o aún no tengo videos?',
      a: '¡Es el mejor momento! Iniciar tu canal con una presencia visual impecable transmite profesionalismo desde el primer día y aumenta la confianza de los primeros espectadores para suscribirse.',
    },
    {
      q: '¿En cuánto tiempo recibiré mis archivos listos?',
      a: 'El plazo estimado comienza cuando recibimos todos tus datos, materiales y referencias, además de la confirmación del pago coordinado por WhatsApp. A partir de ese momento, recibirás el paquete completo en menos de 24 horas.',
    },
    {
      q: '¿Qué sucede si no tengo canal de YouTube pero uso TikTok, Twitch o Instagram?',
      a: '¡Aplica perfectamente! Adaptamos el paquete para tu plataforma preferida (miniaturas para Reels/Shorts, banners para Twitch/X, o portadas para Facebook).',
    },
    {
      q: '¿Qué pasa si quiero hacer un cambio en alguno de los diseños?',
      a: 'Se incluyen ajustes menores razonables, como corregir un texto, cambiar un color o mover un elemento. Los rediseños completos, conceptos nuevos, piezas o formatos adicionales pueden requerir una cotización aparte.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#090b0a] border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            ¿TIENES DUDAS? TE <span className="text-[#8bf500]">RESPONDEMOS</span>
          </h2>

          <p className="mt-4 text-base text-slate-400 font-medium">
            Todo lo que necesitas saber antes de asegurar tu Pack Creador por $5 USD.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#121613] border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#8bf500]/60 shadow-lg shadow-[#8bf500]/5' : 'border-slate-800'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full px-6 py-5 text-left font-heading font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 cursor-pointer hover:text-[#8bf500] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8bf500] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 bg-[#101411] border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#8bf500]/10 border border-[#8bf500]/30 flex items-center justify-center text-[#8bf500]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-white">¿Tienes otra pregunta específica?</p>
              <p className="text-xs text-slate-400">Escríbenos directamente a @loeditamos o loeditamos.com</p>
            </div>
          </div>

          <a
            href="https://wa.me/15513090145?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20Pack%20Creador%20de%205%20USD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-black bg-[#8bf500] hover:bg-[#9eff00] px-5 py-2.5 rounded-xl transition-all font-heading uppercase"
          >
            Chatear por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
