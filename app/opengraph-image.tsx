import { ImageResponse } from 'next/og';

export const alt = 'Pack Creador de LoEditamos por $5 USD';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090b0a',
          color: '#ffffff',
          padding: '64px 72px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 560,
            height: 560,
            borderRadius: 560,
            right: -140,
            top: -210,
            background: 'rgba(139, 245, 0, 0.13)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 20,
            border: '2px solid rgba(139, 245, 0, 0.35)',
            borderRadius: 34,
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            fontSize: 42,
            fontWeight: 900,
            letterSpacing: -1,
          }}
        >
          <span style={{ color: '#ffffff' }}>LO</span>
          <span style={{ color: '#8bf500' }}>EDITAMOS</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              background: '#8bf500',
              color: '#090b0a',
              borderRadius: 999,
              padding: '10px 22px',
              fontSize: 24,
              fontWeight: 800,
              marginBottom: 24,
            }}
          >
            DISEÑO PROFESIONAL PARA CREADORES
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            PACK CREADOR COMPLETO
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 16,
              fontSize: 34,
              color: '#cbd5e1',
            }}
          >
            5 miniaturas · 1 banner HD · 2 fotos de perfil
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', fontSize: 27, color: '#cbd5e1' }}>
            Entrega estimada en menos de 24 horas
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
              color: '#8bf500',
              fontSize: 64,
              fontWeight: 900,
            }}
          >
            $5 <span style={{ fontSize: 28 }}>USD</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
