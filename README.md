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

## Respaldo opcional de prospectos

El navegador conserva localmente las solicitudes recientes. Para recibir además una copia permanente, configura en
Vercel la variable privada `LEAD_WEBHOOK_URL` con la URL HTTPS de tu automatización, CRM o base de datos. El endpoint
recibirá un objeto JSON con los datos del formulario, la fuente del botón, la página de origen y los parámetros UTM.

La preparación para actualizar a Next.js 16 está documentada en `NEXT16_MIGRATION.md`.
