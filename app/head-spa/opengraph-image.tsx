import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFF7F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#F54927',
            letterSpacing: '-2px',
          }}
        >
          Head Spa
        </div>
        <div
          style={{
            fontSize: 38,
            color: '#1a1c1c',
            opacity: 0.75,
          }}
        >
          Ainoa Coiffure · Saint-Cyr-sur-Loire
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#1a1c1c',
            opacity: 0.5,
            marginTop: 8,
          }}
        >
          Soin relaxant · Soin profond · Rituel signature
        </div>
      </div>
    ),
    { ...size }
  )
}
