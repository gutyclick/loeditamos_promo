export type MetaEventName = 'PageView' | 'InitiateCheckout' | 'Lead';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(event: MetaEventName, parameters?: Record<string, string | number>) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', event, parameters);
}
