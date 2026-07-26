# Migración controlada a Next.js 16

No actualizar en producción hasta completar esta lista en una rama separada:

1. Confirmar Node.js 20.9 o superior en desarrollo y Vercel.
2. Actualizar juntos `next` y `eslint-config-next`.
3. Migrar ESLint a una versión y configuración compatibles con Next.js 16.
4. Revisar opciones eliminadas o modificadas de `next.config.ts`.
5. Ejecutar `npm run lint`, `npm run build` y `npm audit --omit=dev`.
6. Probar navegación, formulario, atribución UTM, webhook, WhatsApp, metadata e imágenes.
7. Crear un despliegue Preview y promoverlo únicamente después de la verificación visual.
