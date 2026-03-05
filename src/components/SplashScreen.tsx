import { useEffect } from 'react';
import { T } from "../theme/tokens";


export const SplashScreen = ({ onDone }: { onDone: () => void }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 999,
        background: `linear-gradient(160deg, ${T.plumDk} 0%, ${T.plum} 55%, ${T.plumLt} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}
    >
      <style>{`
        @keyframes splashRib { from { opacity:0; transform:translateX(-40px) } to { opacity:1; transform:translateX(0) } }
        @keyframes splashLogo { from { opacity:0; transform:scale(0.8) } to { opacity:1; transform:scale(1) } }
        @keyframes splashSub  { from { opacity:0; transform:translateY(12px) } to { opacity:0.7; transform:translateY(0) } }
        @keyframes splashDot  { 0%,80%,100% { transform:scale(0) } 40% { transform:scale(1) } }
      `}</style>
      {/* Ribbon decoration */}
      <svg
        viewBox="0 0 393 200"
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          pointerEvents: 'none',
          animation: 'splashRib 0.9s ease both',
        }}
      >
        <defs>
          <linearGradient id="sp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d0fa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#73ffcc" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="sp2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffbaff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#afa3f0" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M-30 60 Q80 10 180 70 Q280 130 420 50"
          fill="none"
          stroke="url(#sp1)"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M-30 110 Q100 160 220 90 Q340 20 430 100"
          fill="none"
          stroke="url(#sp2)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>
      {/* Logo mark */}
      <div
        style={{
          animation: 'splashLogo 0.7s cubic-bezier(.34,1.56,.64,1) 0.3s both',
        }}
      >
        <svg width="110" height="110" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lc_top_s" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d0fa" />
              <stop offset="100%" stopColor="#00e676" />
            </linearGradient>

            <linearGradient id="lc_bot_s" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c4dff" />
              <stop offset="100%" stopColor="#ff00aa" />
            </linearGradient>
          </defs>

          {/* Upper ribbon */}
          <path
            d="M42 6 C42 6 20 8 15 24 C10 40 20 50 32 52 C32 52 12 55 9 70 C6 85 20 78 36 78 C50 78 62 70 60 56 C58 44 46 52 46 52 C46 52 56 44 56 30 C56 16 50 6 42 6Z"
            fill="none"
            stroke="url(#lc_top_s)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Lower ribbon */}
          <path
            d="M32 52 C12 55 9 70 6 82 C10 88 22 84 36 80 C52 76 64 66 62 54 C60 42 46 52 46 52"
            fill="none"
            stroke="url(#lc_bot_s)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Wordmark */}
      <div
        style={{
          animation: 'splashLogo 0.7s cubic-bezier(.34,1.56,.64,1) 0.5s both',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 18,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            City of
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#fff',
              letterSpacing: -1,
              lineHeight: 1,
              fontFamily: "'Poppins',sans-serif",
            }}
          >
            Bristol
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: -0.5,
              fontFamily: "'Poppins',sans-serif",
            }}
          >
            College
          </div>
        </div>
      </div>
      {/* Loading dots */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          marginTop: 40,
          animation: 'splashSub 0.6s ease 1.2s both',
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: [T.cyan, T.mint, T.purple][i],
              animation: `splashDot 1.2s ease ${i * 0.16}s infinite`,
            }}
          />
        ))}
      </div>
      {/* Bottom ribbon */}
      <svg
        viewBox="0 0 393 180"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          pointerEvents: 'none',
          transform: 'scaleY(-1)',
          animation: 'splashRib 0.9s ease 0.2s both',
        }}
      >
        <path
          d="M-30 60 Q80 10 180 70 Q280 130 420 50"
          fill="none"
          stroke="url(#sp2)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M-30 110 Q100 160 220 90 Q340 20 430 100"
          fill="none"
          stroke="url(#sp1)"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};