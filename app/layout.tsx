import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import './globals.css';

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
  title: 'Pack Creador $5 USD | Mejora tu Canal en <24 hrs | LoEditamos',
  description: 'Obtén 5 Miniaturas Pro de YouTube, 1 Banner HD, 1 Foto de Perfil YouTube y 1 Foto de Perfil Redes por solo $5 USD. Oferta exclusiva limitada a 100 cupos. Entrega en 24 horas.',
  openGraph: {
    title: 'Pack Creador - Diseños Profesionales para tu Canal por $5 USD',
    description: '5 Miniaturas, 1 Banner, Foto de Perfil YouTube y Redes Sociales. ¡Entrega en menos de 24 horas!',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${montserrat.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#090b0a] text-slate-100 font-sans antialiased selection:bg-[#8bf500] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
