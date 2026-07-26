'use client';

import { META_CONSENT_EVENT } from '@/components/MetaPixel';

export default function MetaPrivacySettings() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(META_CONSENT_EVENT))}
      className="hover:text-[#8bf500] transition-colors"
    >
      Preferencias de medición
    </button>
  );
}
