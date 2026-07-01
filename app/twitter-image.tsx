import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Huntsville Moving Service — Family-Owned Movers Since 1992'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
          background: '#1a2744',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.huntsvillemovingservicetx.com/chatgpt-image-jul-1-2026-11-03-08-am.png"
          alt="Two Huntsville Moving Service crew members handing off a large box at the back of a moving van"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(26,39,68,0.97) 40%, rgba(26,39,68,0.5) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 80px 64px',
            gap: 16,
          }}
        >
          <div style={{ width: 64, height: 5, background: '#f5c518', borderRadius: 3, marginBottom: 8 }} />
          <div style={{ fontSize: 64, fontWeight: 800, color: '#ffffff', letterSpacing: '-1px', lineHeight: 1.1 }}>
            Huntsville Moving Service
          </div>
          <div style={{ fontSize: 28, fontWeight: 400, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>
            Family-Owned Movers Since 1992 &bull; Huntsville, TX
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#f5c518',
              color: '#1a2744',
              fontWeight: 800,
              fontSize: 26,
              padding: '10px 32px',
              borderRadius: 40,
              marginTop: 12,
            }}
          >
            (936) 291-7230
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
