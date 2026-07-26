import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import ReducedMotionProvider from '@/components/ReducedMotionProvider';
import MetaPixel from '@/components/MetaPixel';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pack.loeditamos.com'),
  title: {
    default: 'Pack Creador por $5 USD | LoEditamos',
    template: '%s | LoEditamos',
  },
  description:
    'Transforma la imagen de tu canal con 5 miniaturas, 1 banner HD y 2 fotos de perfil profesionales por $5 USD. Entrega estimada en menos de 24 horas.',
  keywords: [
    'diseño para YouTube',
    'miniaturas de YouTube',
    'banner para YouTube',
    'foto de perfil',
    'diseño para creadores',
    'Pack Creador',
    'LoEditamos',
  ],
  authors: [{ name: 'LoEditamos', url: 'https://loeditamos.com' }],
  creator: 'LoEditamos',
  publisher: 'LoEditamos',
  category: 'Diseño gráfico',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: '/',
    siteName: 'LoEditamos',
    title: 'Pack Creador por $5 USD | LoEditamos',
    description:
      '5 miniaturas, 1 banner HD y 2 fotos de perfil profesionales para transformar la imagen de tu canal.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pack Creador de LoEditamos por $5 USD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pack Creador por $5 USD | LoEditamos',
    description:
      '5 miniaturas, 1 banner HD y 2 fotos de perfil profesionales para transformar la imagen de tu canal.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#090b0a] text-slate-100 font-sans antialiased selection:bg-[#8bf500] selection:text-black min-h-screen">
        <ReducedMotionProvider>
          {children}
          <MetaPixel />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
