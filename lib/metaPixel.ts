export type MetaEventName = 'PageView' | 'ViewContent' | 'InitiateCheckout' | 'Lead' | 'Contact';
export const META_CONSENT_KEY = 'loeditamos_meta_pixel_consent';

export interface MetaPixelFunction {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: MetaPixelFunction;
  loaded: boolean;
  version: string;
}

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

export function trackMetaEvent(event: MetaEventName, parameters?: Record<string, string | number>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  if (localStorage.getItem(META_CONSENT_KEY) !== 'accepted') return;
  window.fbq('track', event, parameters);
}
