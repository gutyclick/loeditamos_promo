import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Información legal | LoEditamos',
  description: 'Políticas de privacidad, términos del servicio, reembolsos y revisiones de LoEditamos.',
};

const whatsappUrl =
  'https://wa.me/15513090145?text=Hola%2C%20tengo%20una%20consulta%20sobre%20las%20condiciones%20del%20Pack%20Creador';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#090b0a] text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#8bf500] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Pack Creador
        </Link>

        <header className="mt-10 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#8bf500]/10 border border-[#8bf500]/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8bf500] uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            Información legal
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Políticas y condiciones
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Estas condiciones explican de forma sencilla cómo funciona el servicio del Pack Creador de LoEditamos.
            Última actualización: 25 de julio de 2026.
          </p>
        </header>

        <div className="space-y-6">
          <LegalSection id="privacidad" title="Política de privacidad">
            <p>
              Recopilamos únicamente la información que el cliente proporciona voluntariamente para solicitar el
              servicio: nombre del canal o proyecto, enlace y descripción de lo que necesita.
            </p>
            <p>
              Los datos se usan para responder la solicitud, preparar la propuesta, diseñar y entregar el trabajo. Al
              continuar por WhatsApp, la información también queda sujeta a las políticas de esa plataforma.
            </p>
            <p>
              No vendemos la información personal. Podemos conservar las conversaciones y archivos el tiempo
              razonablemente necesario para prestar soporte, resolver incidencias y mantener un historial del trabajo.
              El cliente puede solicitar la eliminación de sus datos escribiéndonos por WhatsApp.
            </p>
          </LegalSection>

          <LegalSection id="terminos" title="Términos del servicio">
            <p>
              El Pack Creador incluye las piezas descritas en la oferta vigente. Antes de iniciar, el cliente debe
              confirmar por WhatsApp el alcance, entregar la información y materiales necesarios y coordinar el pago
              con el equipo de LoEditamos.
            </p>
            <p>
              El cliente confirma que tiene autorización para usar los nombres, marcas, fotografías, videos y demás
              materiales que suministre. LoEditamos puede rechazar contenido ilegal, engañoso, ofensivo o que infrinja
              derechos de terceros.
            </p>
            <p>
              El plazo estimado de entrega comienza únicamente cuando hayamos recibido todos los materiales,
              instrucciones y referencias necesarios, además de la confirmación del pago acordado. Las demoras del
              cliente al responder o entregar archivos pausan ese plazo.
            </p>
          </LegalSection>

          <LegalSection id="reembolsos" title="Política de reembolso">
            <p>
              Si el cliente cancela antes de que el trabajo haya comenzado, puede solicitar el reembolso del importe
              pagado. Una vez iniciado el diseño, el servicio ya implica trabajo personalizado y el reembolso se
              evaluará según el avance realizado.
            </p>
            <p>
              Si LoEditamos no puede prestar el servicio acordado, se ofrecerá una solución, reprogramación o
              reembolso, según corresponda. No se conceden reembolsos por cambios de opinión después de la entrega
              cuando el trabajo cumple el alcance confirmado.
            </p>
          </LegalSection>

          <LegalSection id="revisiones" title="Alcance de las revisiones">
            <p>
              Se incluyen ajustes menores razonables sobre el diseño entregado, como correcciones de texto, cambios de
              color o movimiento de elementos, siempre que mantengan el concepto y alcance aprobados.
            </p>
            <p>
              Un cambio completo de concepto, nuevas piezas, formatos adicionales o instrucciones que no fueron
              incluidas al iniciar el trabajo pueden requerir una cotización adicional. El cliente debe revisar los
              archivos y solicitar ajustes dentro de un plazo razonable después de la entrega.
            </p>
          </LegalSection>
        </div>

        <div className="mt-10 p-6 bg-[#101411] border border-[#8bf500]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-heading font-black text-lg text-white uppercase">¿Tienes alguna duda?</h2>
            <p className="text-sm text-slate-400 mt-1">Consulta las condiciones con nuestro equipo antes de solicitar.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-black text-sm px-5 py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 bg-[#101411] border border-slate-800 rounded-2xl p-6 sm:p-8">
      <h2 className="font-heading font-black text-xl sm:text-2xl text-[#8bf500] uppercase">{title}</h2>
      <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}
