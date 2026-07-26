import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LoEditamos — Pack Creador',
    short_name: 'LoEditamos',
    description:
      'Pack de diseño profesional para canales y creadores de contenido.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090b0a',
    theme_color: '#8bf500',
    lang: 'es',
  };
}
