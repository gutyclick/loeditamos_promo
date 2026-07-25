'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo entrego la información, fotos o referencias de mi canal?',
      a: 'Al completar el pago único de $3 USD, se abrirá un formulario inmediato en pantalla donde podrás ingresar el nombre de tu canal, tu temática y adjuntar tus fotos o enlaces. También tendrás acceso a nuestro WhatsApp oficial para chatear directamente con nuestro equipo de diseño.',
    },
    {
      q: '¿Es realmente un pago único de $3.00 USD sin suscripciones?',
      a: 'Sí, 100% garantizado. Pagas exactamente $3.00 USD una sola vez y recibes tus 5 miniaturas, 1 banner HD y las 2 fotos de perfil. Sin membresías mensuales ni costos sorpresa.',
    },
    {
      q: '¿Qué pasa si mi canal recién va empezando o aún no tengo videos?',
      a: '¡Es el mejor momento! Iniciar tu canal con una presencia visual impecable transmite profesionalismo desde el primer día y aumenta la confianza de los primeros espectadores para suscribirse.',
    },
    {
      q: '¿En cuánto tiempo recibiré mis archivos listos?',
      a: 'Recibirás el paquete completo en menos de 24 horas contadas a partir de que nos envíes tus datos y referencias.',
    },
    {
      q: '¿Qué sucede si no tengo canal de YouTube pero uso TikTok, Twitch o Instagram?',
      a: '¡Aplica perfectamente! Adaptamos el paquete para tu plataforma preferida (miniaturas para Reels/Shorts, banners para Twitch/X, o portadas para Facebook).',
    },
    {
      q: '¿Qué pasa si quiero hacer un cambio en alguno de los diseños?',
      a: 'Cuentas con nuestra garantía de satisfacción. Si deseas ajustar un texto, cambiar un color o mover un elemento, lo modificamos gratis para asegurarnos de que quedes 100% complacido.',
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
            Todo lo que necesitas saber antes de asegurar tu Pack Creador por $3 USD.
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
            href="https://wa.me/?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20Pack%20Creador%20de%203%20USD"
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
