# LoEditamos Promo

Landing page promocional de LoEditamos, desarrollada con Next.js, React y TypeScript.

## Desarrollo local

Requiere Node.js 20 o una versión posterior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Mantén el preset de framework **Next.js**.
3. No configures un directorio de salida.
4. Pulsa **Deploy**.

Vercel detectará automáticamente los comandos de instalación y compilación.

## Respaldo de prospectos con Supabase

1. Crea un proyecto en Supabase.
2. Ejecuta `supabase/migrations/202607260001_create_leads.sql` en el SQL Editor.
3. Configura `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` como variables privadas en Vercel.
4. Vuelve a desplegar la aplicación.

La tabla tiene RLS activo y niega acceso a las claves públicas. La clave `service_role` se utiliza exclusivamente
desde la ruta del servidor y nunca debe llevar el prefijo `NEXT_PUBLIC_`.

El navegador también conserva localmente las solicitudes recientes. De manera opcional, `LEAD_WEBHOOK_URL` permite
enviar otra copia a una automatización o CRM.

La preparación para actualizar a Next.js 16 está documentada en `NEXT16_MIGRATION.md`.
