export type MetaEventName = 'PageView' | 'InitiateCheckout' | 'Lead';

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
  window.fbq('track', event, parameters);
}
