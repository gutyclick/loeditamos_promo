'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { META_CONSENT_KEY, MetaPixelFunction, trackMetaEvent } from '@/lib/metaPixel';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '349518816713585';
export const META_CONSENT_EVENT = 'loeditamos:open-meta-consent';

type Consent = 'accepted' | 'rejected' | null;

let initialContentEventsTracked = false;

function trackInitialContentEvents() {
  if (initialContentEventsTracked) return;
  initialContentEventsTracked = true;
  trackMetaEvent('PageView');
  trackMetaEvent('ViewContent', {
    content_name: 'Pack Creador',
    content_category: 'Landing Page',
    currency: 'USD',
    value: 5,
  });
}

function initializePixel(consentGranted: boolean) {
  if (window.fbq) {
    window.fbq('consent', consentGranted ? 'grant' : 'revoke');
    if (consentGranted) trackInitialContentEvents();
    return;
  }

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args);
    } else {
      fbq.queue.push(args);
    }
  } as MetaPixelFunction;

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  window.fbq = fbq;
  window._fbq = fbq;

  window.fbq('consent', consentGranted ? 'grant' : 'revoke');

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.dataset.metaPixel = META_PIXEL_ID;
  document.head.appendChild(script);

  window.fbq('init', META_PIXEL_ID);
  if (consentGranted) trackInitialContentEvents();
}

export default function MetaPixel() {
  const [consent, setConsent] = useState<Consent>(null);
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(META_CONSENT_KEY) as Consent;
    setConsent(savedConsent === 'accepted' || savedConsent === 'rejected' ? savedConsent : null);
    setHasDecision(true);

    initializePixel(savedConsent === 'accepted');

    const reopenConsent = () => {
      localStorage.removeItem(META_CONSENT_KEY);
      setConsent(null);
      setHasDecision(true);
    };
    window.addEventListener(META_CONSENT_EVENT, reopenConsent);

    return () => window.removeEventListener(META_CONSENT_EVENT, reopenConsent);
  }, []);

  const accept = () => {
    localStorage.setItem(META_CONSENT_KEY, 'accepted');
    setConsent('accepted');
    initializePixel(true);
  };

  const reject = () => {
    localStorage.setItem(META_CONSENT_KEY, 'rejected');
    setConsent('rejected');
    window.fbq?.('consent', 'revoke');
  };

  if (!hasDecision || consent !== null) return null;

  return (
    <aside
      aria-label="Preferencias de medición"
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-2xl border border-[#8bf500]/40 bg-[#101411]/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-md sm:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#8bf500]/30 bg-[#8bf500]/10 text-[#8bf500] sm:flex">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-sm font-black uppercase text-white">Tu privacidad importa</h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
            Con tu permiso usamos el píxel de Meta para medir campañas y mejorar nuestros anuncios. No enviamos a Meta
            los datos personales que escribas en el formulario. Consulta nuestra{' '}
            <Link href="/legal#privacidad" className="font-bold text-[#8bf500] underline underline-offset-2">
              política de privacidad
            </Link>.
          </p>
          <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={reject}
              className="rounded-xl border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              RECHAZAR
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-xl bg-[#8bf500] px-4 py-2.5 text-xs font-heading font-black text-black transition-transform hover:scale-[1.02]"
            >
              ACEPTAR MEDICIÓN
            </button>
          </div>
        </div>
        <button type="button" onClick={reject} aria-label="Rechazar y cerrar" className="shrink-0 text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
