'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { trackMetaEvent } from '@/lib/metaPixel';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '349518816713585';
const CONSENT_KEY = 'loeditamos_meta_pixel_consent';

type Consent = 'accepted' | 'rejected' | null;

function initializePixel() {
  if (window.fbq) return;

  const fbq = (...args: unknown[]) => {
    const pixel = fbq as typeof fbq & {
      callMethod?: (...methodArgs: unknown[]) => void;
      queue: unknown[][];
      push: typeof fbq;
      loaded: boolean;
      version: string;
    };

    if (pixel.callMethod) {
      pixel.callMethod(...args);
    } else {
      pixel.queue.push(args);
    }
  };

  Object.assign(fbq, {
    push: fbq,
    loaded: true,
    version: '2.0',
    queue: [] as unknown[][],
  });

  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.dataset.metaPixel = META_PIXEL_ID;
  document.head.appendChild(script);

  window.fbq('init', META_PIXEL_ID);
  trackMetaEvent('PageView');
}

export default function MetaPixel() {
  const [consent, setConsent] = useState<Consent>(null);
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY) as Consent;
    setConsent(savedConsent === 'accepted' || savedConsent === 'rejected' ? savedConsent : null);
    setHasDecision(true);

    if (savedConsent === 'accepted') {
      initializePixel();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    initializePixel();
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setConsent('rejected');
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
