import { useState, useEffect } from 'react';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const T = {
  plum: '#450020',
  plumDk: '#2d0015',
  plumLt: '#6b1040',
  pink: '#ff0068',
  blue: '#c6e9f7',
  cyan: '#00d0fa',
  mint: '#73ffcc',
  purple: '#afa3f0',
  lilac: '#ffbaff',
  lemon: '#fff67e',
  green: '#00dd5e',
  peach: '#ffc9da',
  cream: '#fff0df',
  lav: '#facceb',
  bg: '#f0f2f5',
  card: '#ffffff',
  border: '#e4e7ec',
  muted: '#8a94a6',
  shadow: 'rgba(69,0,32,0.08)',
  shadowMd: 'rgba(69,0,32,0.13)',
};

// ─── SPLASH SCREEN ────────────────────────────────────────────────────────────
const SplashScreen = ({ onDone }: { onDone: () => void }) => {
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

// ─── LOGO COMPACT ─────────────────────────────────────────────────────────────
const LogoCompact = () => (
  <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lc_top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d0fa" />
        <stop offset="100%" stopColor="#00e676" />
      </linearGradient>

      <linearGradient id="lc_bot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7c4dff" />
        <stop offset="100%" stopColor="#ff00aa" />
      </linearGradient>
    </defs>

    {/* Upper ribbon */}
    <path
      d="M42 6 C42 6 20 8 15 24 C10 40 20 50 32 52 C32 52 12 55 9 70 C6 85 20 78 36 78 C50 78 62 70 60 56 C58 44 46 52 46 52 C46 52 56 44 56 30 C56 16 50 6 42 6Z"
      fill="none"
      stroke="url(#lc_top)"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Lower ribbon */}
    <path
      d="M32 52 C12 55 9 70 6 82 C10 88 22 84 36 80 C52 76 64 66 62 54 C60 42 46 52 46 52"
      fill="none"
      stroke="url(#lc_bot)"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

// ─── SVG ICON LIBRARY ─────────────────────────────────────────────────────────
type IconName =
  | 'home'
  | 'cal'
  | 'compass'
  | 'wrench'
  | 'person'
  | 'bell'
  | 'chL'
  | 'chR'
  | 'chD'
  | 'chU'
  | 'book'
  | 'bm'
  | 'bmFill'
  | 'print'
  | 'warn'
  | 'card'
  | 'brain'
  | 'users'
  | 'pin'
  | 'heart'
  | 'gear'
  | 'exit'
  | 'cam'
  | 'access'
  | 'sun'
  | 'moon'
  | 'globe'
  | 'info'
  | 'star'
  | 'file'
  | 'link'
  | 'check'
  | 'close'
  | 'award'
  | 'grid'
  | 'db'
  | 'search'
  | 'pen'
  | 'shield'
  | 'zap'
  | 'trend'
  | 'clock'
  | 'layout';

const Ic = ({
  n,
  size = 20,
  c = T.plum,
  sw = 1.8,
}: {
  n: IconName;
  size?: number;
  c?: string;
  sw?: number;
}) => {
  const s: React.CSSProperties = {
    width: size,
    height: size,
    display: 'block',
    flexShrink: 0,
  };
  const p = {
    fill: 'none' as const,
    stroke: c,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const set: Record<string, React.ReactNode> = {
    home: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
        <path {...p} d="M9 21V12h6v9" />
      </svg>
    ),
    cal: (
      <svg style={s} viewBox="0 0 24 24">
        <rect {...p} x="3" y="4" width="18" height="18" rx="2.5" />
        <path {...p} d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    compass: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="9" />
        <path {...p} d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" />
      </svg>
    ),
    wrench: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94z"
        />
      </svg>
    ),
    person: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="8" r="4" />
        <path {...p} d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    bell: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        />
      </svg>
    ),
    chL: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M15 18l-6-6 6-6" />
      </svg>
    ),
    chR: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M9 18l6-6-6-6" />
      </svg>
    ),
    chD: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M6 9l6 6 6-6" />
      </svg>
    ),
    chU: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M18 15l-6-6-6 6" />
      </svg>
    ),
    book: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path {...p} d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    bm: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    ),
    bmFill: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          fill={c}
          stroke="none"
          d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
        />
      </svg>
    ),
    print: (
      <svg style={s} viewBox="0 0 24 24">
        <polyline {...p} points="6 9 6 2 18 2 18 9" />
        <path
          {...p}
          d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"
        />
        <rect {...p} x="6" y="14" width="12" height="8" />
      </svg>
    ),
    warn: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
        <line {...p} x1="12" y1="9" x2="12" y2="13" />
        <line {...p} x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    card: (
      <svg style={s} viewBox="0 0 24 24">
        <rect {...p} x="1" y="4" width="22" height="16" rx="2" />
        <line {...p} x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    brain: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M9.5 2A2.5 2.5 0 007 4.5A2.5 2.5 0 004.5 7H4a2 2 0 00-2 2v6a2 2 0 002 2h.5A2.5 2.5 0 007 19.5A2.5 2.5 0 009.5 22h5A2.5 2.5 0 0017 19.5A2.5 2.5 0 0019.5 17H20a2 2 0 002-2V9a2 2 0 00-2-2h-.5A2.5 2.5 0 0017 4.5A2.5 2.5 0 0014.5 2z"
        />
      </svg>
    ),
    users: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle {...p} cx="9" cy="7" r="4" />
        <path {...p} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    pin: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle {...p} cx="12" cy="10" r="3" />
      </svg>
    ),
    heart: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        />
      </svg>
    ),
    gear: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="3" />
        <path
          {...p}
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        />
      </svg>
    ),
    exit: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
        />
      </svg>
    ),
    cam: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
        />
        <circle {...p} cx="12" cy="13" r="4" />
      </svg>
    ),
    access: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="5" r="1" />
        <path {...p} d="M9 20l3-8m0 0l3 8m-3-8V9m-4-2h12" />
      </svg>
    ),
    sun: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="5" />
        <line {...p} x1="12" y1="1" x2="12" y2="3" />
        <line {...p} x1="12" y1="21" x2="12" y2="23" />
        <line {...p} x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line {...p} x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line {...p} x1="1" y1="12" x2="3" y2="12" />
        <line {...p} x1="21" y1="12" x2="23" y2="12" />
        <line {...p} x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line {...p} x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    moon: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    globe: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="10" />
        <line {...p} x1="2" y1="12" x2="22" y2="12" />
        <path
          {...p}
          d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        />
      </svg>
    ),
    info: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="10" />
        <line {...p} x1="12" y1="8" x2="12" y2="12" />
        <line {...p} x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    star: (
      <svg style={s} viewBox="0 0 24 24">
        <polygon
          {...p}
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        />
      </svg>
    ),
    file: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
        />
        <polyline {...p} points="14 2 14 8 20 8" />
        <line {...p} x1="16" y1="13" x2="8" y2="13" />
        <line {...p} x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    link: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        />
      </svg>
    ),
    check: (
      <svg style={s} viewBox="0 0 24 24">
        <polyline {...p} points="20 6 9 17 4 12" />
      </svg>
    ),
    close: (
      <svg style={s} viewBox="0 0 24 24">
        <line {...p} x1="18" y1="6" x2="6" y2="18" />
        <line {...p} x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    award: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="8" r="6" />
        <path {...p} d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    grid: (
      <svg style={s} viewBox="0 0 24 24">
        <rect {...p} x="3" y="3" width="7" height="7" />
        <rect {...p} x="14" y="3" width="7" height="7" />
        <rect {...p} x="14" y="14" width="7" height="7" />
        <rect {...p} x="3" y="14" width="7" height="7" />
      </svg>
    ),
    db: (
      <svg style={s} viewBox="0 0 24 24">
        <ellipse {...p} cx="12" cy="5" rx="9" ry="3" />
        <path
          {...p}
          d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
        />
      </svg>
    ),
    search: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="11" cy="11" r="8" />
        <line {...p} x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    pen: (
      <svg style={s} viewBox="0 0 24 24">
        <path
          {...p}
          d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"
        />
      </svg>
    ),
    shield: (
      <svg style={s} viewBox="0 0 24 24">
        <path {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    zap: (
      <svg style={s} viewBox="0 0 24 24">
        <polygon {...p} points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    trend: (
      <svg style={s} viewBox="0 0 24 24">
        <polyline {...p} points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline {...p} points="17 6 23 6 23 12" />
      </svg>
    ),
    clock: (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="10" />
        <polyline {...p} points="12 6 12 12 16 14" />
      </svg>
    ),
    layout: (
      <svg style={s} viewBox="0 0 24 24">
        <rect {...p} x="3" y="3" width="18" height="18" rx="2" />
        <line {...p} x1="3" y1="9" x2="21" y2="9" />
        <line {...p} x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  };
  return (
    (set[n] as React.ReactElement) || (
      <svg style={s} viewBox="0 0 24 24">
        <circle {...p} cx="12" cy="12" r="9" />
      </svg>
    )
  );
};

// ─── 3D BRAND RIBBONS ─────────────────────────────────────────────────────────
const Ribbon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 360 140"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'visible',
      ...style,
    }}
  >
    <defs>
      <linearGradient id="rb1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d0fa" />
        <stop offset="40%" stopColor="#afa3f0" />
        <stop offset="100%" stopColor="#ff0068" />
      </linearGradient>
      <linearGradient id="rb2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#73ffcc" />
        <stop offset="50%" stopColor="#00d0fa" />
        <stop offset="100%" stopColor="#ffbaff" />
      </linearGradient>
      <linearGradient id="rb3" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffbaff" />
        <stop offset="100%" stopColor="#afa3f0" />
      </linearGradient>
    </defs>
    <path
      d="M-30 70 Q50 10 120 58 Q190 106 270 45 Q330 0 400 35"
      fill="none"
      stroke="url(#rb1)"
      strokeWidth="22"
      strokeLinecap="round"
      opacity="0.75"
    />
    <path
      d="M-30 95 Q60 130 145 82 Q220 38 305 95 Q360 130 420 75"
      fill="none"
      stroke="url(#rb2)"
      strokeWidth="14"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M10 120 Q95 60 185 105 Q270 148 360 85"
      fill="none"
      stroke="url(#rb3)"
      strokeWidth="9"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const RibbonProfile = () => (
  <svg
    viewBox="0 0 390 130"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'visible',
    }}
  >
    <defs>
      <linearGradient id="rp1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#73ffcc" />
        <stop offset="50%" stopColor="#00d0fa" />
        <stop offset="100%" stopColor="#afa3f0" />
      </linearGradient>
      <linearGradient id="rp2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffbaff" />
        <stop offset="100%" stopColor="#ff0068" />
      </linearGradient>
      <linearGradient id="rp3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fff67e" />
        <stop offset="100%" stopColor="#73ffcc" />
      </linearGradient>
    </defs>
    <path
      d="M-20 45 Q60 0 130 48 Q200 96 290 38 Q350 0 430 40"
      fill="none"
      stroke="url(#rp1)"
      strokeWidth="26"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M-20 80 Q80 120 170 68 Q250 22 340 80 Q390 112 440 70"
      fill="none"
      stroke="url(#rp2)"
      strokeWidth="18"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M20 115 Q110 55 200 100 Q290 144 390 90"
      fill="none"
      stroke="url(#rp3)"
      strokeWidth="11"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

// ─── SHARED PRIMITIVES ────────────────────────────────────────────────────────
const Card = ({
  children,
  style = {},
  onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    style={{
      background: T.card,
      borderRadius: 18,
      border: `1px solid ${T.border}`,
      boxShadow: `0 1px 3px ${T.shadow}, 0 6px 20px ${T.shadow}`,
      padding: '16px 18px',
      marginBottom: 10,
      ...style,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform 0.12s, box-shadow 0.12s',
    }}
  >
    {children}
  </div>
);

const Ring = ({
  value,
  color,
  size = 64,
  label,
}: {
  value: number;
  color: string;
  size?: number;
  label?: string;
}) => (
  <div style={{ textAlign: 'center' }}>
    <svg
      viewBox="0 0 36 36"
      style={{ width: size, height: size, display: 'block', margin: '0 auto' }}
    >
      <path
        d="M18 3a15 15 0 010 30 15 15 0 010-30"
        fill="none"
        stroke={T.border}
        strokeWidth="3.2"
      />
      <path
        d="M18 3a15 15 0 010 30 15 15 0 010-30"
        fill="none"
        stroke={color}
        strokeWidth="3.2"
        strokeDasharray={`${value * 0.94},100`}
        strokeLinecap="round"
        style={{
          transformOrigin: 'center',
          transform: 'rotate(-90deg)',
          transition: 'stroke-dasharray 0.7s',
        }}
      />
      <text
        x="18"
        y="20.5"
        style={{
          fontSize: 7.5,
          fontWeight: 800,
          fill: T.plum,
          textAnchor: 'middle',
          fontFamily: 'Poppins',
        }}
      >
        {value}%
      </text>
    </svg>
    {label && (
      <div
        style={{ fontSize: 11, fontWeight: 600, color: T.muted, marginTop: 4, textAlign: 'center' }}
      >
        {label}
      </div>
    )}
  </div>
);

const Pill = ({
  text,
  color,
  dark = false,
}: {
  text: string;
  color: string;
  dark?: boolean;
}) => (
  <span
    style={{
      background: dark ? color : color + '2a',
      color: dark ? '#fff' : T.plum,
      fontSize: 10,
      fontWeight: 700,
      borderRadius: 8,
      padding: '3px 9px',
      border: `1px solid ${color}${dark ? '' : '44'}`,
      letterSpacing: 0.3,
    }}
  >
    {text}
  </span>
);

const Bar = ({
  value,
  color,
  h = 7,
}: {
  value: number;
  color: string;
  h?: number;
}) => (
  <div
    style={{
      background: '#eceff1',
      borderRadius: 99,
      height: h,
      overflow: 'hidden',
      marginTop: 5,
    }}
  >
    <div
      style={{
        width: `${value}%`,
        height: '100%',
        background: color,
        borderRadius: 99,
        transition: 'width 0.7s cubic-bezier(.4,0,.2,1)',
      }}
    />
  </div>
);

const Toggle = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => (
  <div
    onClick={onToggle}
    style={{
      width: 46,
      height: 26,
      borderRadius: 13,
      background: on ? T.green : '#d1d5db',
      cursor: 'pointer',
      position: 'relative',
      transition: 'background 0.25s',
      flexShrink: 0,
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 3,
        left: on ? 22 : 3,
        width: 20,
        height: 20,
        borderRadius: 10,
        background: 'white',
        boxShadow: '0 1px 5px rgba(0,0,0,0.22)',
        transition: 'left 0.25s',
      }}
    />
  </div>
);

const SecHead = ({
  title,
  action,
  onAction,
}: {
  title: string;
  action?: string;
  onAction?: () => void;
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 6,
    }}
  >
    <span
      style={{
        fontWeight: 800,
        color: T.plum,
        fontSize: 14,
        letterSpacing: 0.1,
      }}
    >
      {title}
    </span>
    {action && (
      <button
        onClick={onAction}
        style={{
          background: 'none',
          border: 'none',
          color: T.cyan,
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {action} →
      </button>
    )}
  </div>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 1,
    name: 'Digital Media Arts',
    desc: 'Design, photography and digital storytelling',
    progress: 72,
    att: 88,
    punc: 90,
    grad: `linear-gradient(138deg,#88c8ee 0%,#b8a4f0 100%)`,
    units: [
      {
        name: 'Graphic Design',
        color: T.cyan,
        att: 88,
        punc: 92,
        assignments: ['Logo Project', 'Brand Guidelines'],
        teacher: 'Ms. Johnson',
      },
      {
        name: 'Photography',
        color: T.mint,
        att: 95,
        punc: 89,
        assignments: ['Portrait Series', 'Landscape Study'],
        teacher: 'Mr. Okafor',
      },
      {
        name: 'Video Production',
        color: T.purple,
        att: 81,
        punc: 85,
        assignments: ['Short Film', 'Interview Edit'],
        teacher: 'Ms. Patel',
      },
    ],
  },
  {
    id: 2,
    name: 'Web Development',
    desc: 'HTML, CSS, JavaScript and modern frameworks',
    progress: 58,
    att: 83,
    punc: 87,
    grad: `linear-gradient(138deg,#7fefd0 0%,#50c8f0 100%)`,
    units: [
      {
        name: 'HTML & CSS',
        color: '#c8b800',
        att: 90,
        punc: 94,
        assignments: ['Portfolio Site', 'Responsive Layout'],
        teacher: 'Mr. Davies',
      },
      {
        name: 'JavaScript',
        color: T.peach,
        att: 76,
        punc: 80,
        assignments: ['DOM Project', 'API Fetch App'],
        teacher: 'Ms. Chen',
      },
    ],
  },
  {
    id: 3,
    name: 'Business Studies',
    desc: 'Marketing, finance and entrepreneurship',
    progress: 45,
    att: 67,
    punc: 71,
    grad: `linear-gradient(138deg,#f9c8df 0%,#e8b4f8 100%)`,
    units: [
      {
        name: 'Marketing',
        color: T.pink,
        att: 70,
        punc: 75,
        assignments: ['Campaign Plan', 'Market Research'],
        teacher: 'Mr. Brown',
      },
      {
        name: 'Finance',
        color: '#90c830',
        att: 65,
        punc: 68,
        assignments: ['Budget Report', 'Investment Analysis'],
        teacher: 'Ms. Williams',
      },
    ],
  },
];

const NEWS = [
  {
    title: 'Open Day Success!',
    icon: 'award' as IconName,
    color: T.blue,
    desc: 'Over 2,000 visitors attended our spring open day.',
  },
  {
    title: 'New Sustainability Initiative',
    icon: 'zap' as IconName,
    color: T.mint,
    desc: 'Bristol College goes green — solar panels campus-wide.',
  },
  {
    title: 'Student Art Exhibition',
    icon: 'star' as IconName,
    color: T.lav,
    desc: 'Digital Media Arts students showcase at Arnolfini Gallery.',
  },
];

const ARTICLES: Record<
  string,
  { icon: IconName; cat: string; color: string; isNew: boolean; body: string }
> = {
  'How to Print': {
    icon: 'print',
    cat: 'Campus Life',
    color: T.blue,
    isNew: true,
    body: '**Printing at City of Bristol College**\n\nAll students have access to college printers across campus. Follow these steps:\n\n1. Log into any college computer with your student credentials.\n2. Open your document and press Ctrl+P (Windows) or Cmd+P (Mac).\n3. Select the nearest printer from the dropdown list.\n4. Choose black & white or colour, then click Print.\n5. Walk to the printer and tap your student ID card to release the job.\n\n**Printer Locations**\n- Library (all floors)\n- CGS 105 Computer Lab\n- Brunel Building Ground Floor\n- Creative Arts Block B\n\n**Costs**\n- A4 B&W: 3p per page\n- A4 Colour: 10p per page\n- A3: 12p per page\n\nYour balance is shown on any college computer. Top up online or at the library desk.',
  },
  'Emergency Info': {
    icon: 'warn',
    cat: 'Safety',
    color: T.peach,
    isNew: false,
    body: '**Emergency Procedures**\n\n**Fire Alarm**\nEvacuate immediately via the nearest fire exit. Do not use lifts. Assemble at your designated point and wait for the all-clear from staff.\n\n**First Aid**\nFirst aiders are available across campus. In a medical emergency, call 999 and inform reception on ext. 2000.\n\n**Mental Health Crisis**\nContact the Student Support team on ext. 3100 or visit Room CGS 108. Samaritans: 116 123 (free, 24/7).\n\n**Lockdown Procedure**\nStay in your current room, lock/barricade the door if safe, silence your phone, and wait for official communication.\n\n**Key Numbers**\n- Reception: 0117 312 5000\n- Security: ext. 2999\n- Student Support: ext. 3100',
  },
  'Top-Up Print Credit': {
    icon: 'card',
    cat: 'Campus Life',
    color: T.mint,
    isNew: true,
    body: "**How to Top Up Your Print Balance**\n\n**Online (Recommended)**\n1. Visit intranet.cityofbristol.ac.uk\n2. Log in with your student credentials\n3. Go to Student Services > Print Balance\n4. Select an amount (minimum £1) and pay by card\n5. Credit appears within 5 minutes\n\n**At the Library**\nVisit the library help desk on the ground floor. Staff can top up with cash or card immediately.\n\n**Self-Service Kiosk**\nLocated in CGS reception lobby. Card payments only. Available 7am–9pm Mon–Fri.\n\n**Current Balance**\nYour balance is shown when you log into any college computer. You'll get a warning email when it drops below 50p.",
  },
  'Study Skills Guide': {
    icon: 'book',
    cat: 'Learning',
    color: T.purple,
    isNew: false,
    body: '**Study Skills for Success**\n\n**Active Recall**\nInstead of re-reading notes, test yourself. Use flashcards, past papers, or explain topics out loud to boost long-term memory.\n\n**Spaced Repetition**\nReview material at increasing intervals: study today, review tomorrow, then in a week, then a month.\n\n**Pomodoro Technique**\nWork for 25 minutes, take a 5-minute break, repeat. After 4 sessions, take a 20-minute break.\n\n**Cornell Note-Taking**\nDivide your page: main notes right, key questions left, summary at bottom. Review the left column to test yourself.\n\n**Digital Tools**\nUse Anki for flashcards, Notion or OneNote for organisation, Forest app to stay focused.',
  },
  'Tutorial Staff Info': {
    icon: 'users',
    cat: 'Support',
    color: T.lav,
    isNew: false,
    body: '**Your Tutorial Team**\n\nYour personal tutor is your first point of contact for academic and personal support.\n\n**What your tutor can help with:**\n- Academic progress and target grades\n- Attendance and punctuality concerns\n- University or apprenticeship applications (UCAS)\n- Welfare and personal issues\n- Signposting to specialist support\n\n**How to contact your tutor:**\nMessage via Moodle, email at firstname.lastname@cityofbristol.ac.uk, or book a one-to-one via the Student Hub.\n\n**Student Support Services**\n- Learning Support: Room CGS 107\n- Mental Health Advisor: Room CGS 108\n- Careers Advisor: Room CGS 110\n- Financial Advice: Room B204',
  },
  'How to Learn Better': {
    icon: 'brain',
    cat: 'Learning',
    color: T.cyan,
    isNew: true,
    body: "**Science-Backed Learning Strategies**\n\n**Interleaving**\nMix up subjects or topics during study sessions rather than blocking one subject. It feels harder but significantly improves retention.\n\n**Elaborative Interrogation**\nAsk yourself 'why?' and 'how?' about everything you learn. Builds deeper understanding and connections.\n\n**Dual Coding**\nCombine verbal information with visuals — draw diagrams, mind maps or timelines alongside written notes.\n\n**Sleep and Memory**\nSleep consolidates memory. Reviewing material just before sleep and getting 7–9 hours dramatically improves recall.\n\n**Exercise**\nEven 20 minutes of moderate exercise before studying improves focus, creativity, and memory formation.",
  },
  'Navigating Campus': {
    icon: 'pin',
    cat: 'Campus Life',
    color: T.lemon,
    isNew: false,
    body: '**Getting Around City of Bristol College**\n\n**Main Campuses**\n- College Green Centre (CGS): Main campus, city centre. Admin, student services, most classrooms.\n- Brunel Building: STEM and engineering, 5-minute walk from CGS.\n- Creative Arts Block: Photography, media, and performing arts studios.\n- Ashley Down Campus: Sports science and health programmes.\n\n**Accessibility**\nAll buildings have step-free access. Lifts in CGS and Brunel. For accessibility needs, contact Inclusion on ext. 3200.\n\n**Travel**\n- Cycle storage at all campuses\n- Bus stop: College Green (routes 1, 2, 8, 9)\n- Train: Bristol Temple Meads (15-min walk from CGS)',
  },
  'Mental Health Support': {
    icon: 'heart',
    cat: 'Wellbeing',
    color: T.peach,
    isNew: false,
    body: '**Mental Health and Wellbeing Support**\n\nYour wellbeing matters. City of Bristol College offers free, confidential support.\n\n**On-Campus Support**\n- Mental Health Advisor: Drop-in Tue/Thu, Room CGS 108, or book via Student Services.\n- Student Counsellor: Weekly sessions available. Referral via personal tutor.\n- Peer Mentors: Trained student mentors in the Student Hub.\n\n**24/7 Resources**\n- Samaritans: 116 123 (free, any time)\n- Crisis text line: Text SHOUT to 85258\n- Student Minds: studentminds.org.uk\n\n**Self-Help**\nThe college subscribes to Headspace — free for all students. Download the app and activate with your college email.',
  },
};

const ARTICLE_LIST = Object.entries(ARTICLES).map(([title, data]) => ({
  title,
  ...data,
}));

type Tool = {
  name: string;
  logo?: string;
  icon?: IconName;
  tag: string;
  desc: string;
  longDesc?: string;
  url: string;
  benefits?: string[];
  features?: string[];
};


const TOOLS: Tool[] = [
  {
    name: 'Office 365',
    logo: '/logos/office 365 logo.jpeg',
    tag: 'Microsoft',
    desc: 'Word, OneNote, Powerpoint, Excel and 1TB OneDrive storage.',
    longDesc:
      'A suite of collaborative IT services to help you enhance your learning experience.',
    url: 'https://www.office.com',
    benefits: [
      'Create and edit Word, OneNote, Powerpoint and Excel from a browser',
      '1TB of cloud storage through OneDrive',
      'Install Office on 5 PCs/Macs, tablets, and phones',
      'Always have the latest versions of your familiar Office apps',
    ],
  },
  {
    name: 'MS Teams',
    logo: '/logos/teams logo.png',
    tag: 'Microsoft',
    desc: 'Chat with classmates and tutors, join meetings and submit work.',
    longDesc:
      'Use Microsoft Teams to chat to classmates and lecturers or receive and send in assignments.',
    url: 'https://teams.microsoft.com',
  },
  {
    name: 'Moodle',
    logo: '/logos/moodle logo.jpeg',
    tag: 'Learning',
    desc: 'Access your course materials, ebooks and online activities.',
    longDesc:
      'Moodle is our Virtual Learning Environment where you can access course materials and activities. You’ll also find a wide range of ebooks, articles and other electronic resources.',
    url: 'https://moodle.cityofbristol.ac.uk',
  },
  {
    name: 'ProPortal',
    logo: '/logos/proprtal logo.png',
    tag: 'Portal',
    desc: 'Check your ILP data, unit progress and assessment grades.',
    longDesc:
      'View your ILP data, unit and assessment grades online. You will need your college user ID and password to log in.',
    url: 'https://proportal.cityofbristol.ac.uk',
  },
  {
    name: 'F: Drive',
    logo: '/logos/microsoft drive logo.jpeg',
    tag: 'Storage',
    desc: 'Access your college "My Documents" storage from anywhere.',
    longDesc: 'Access your "My Documents" (F: drive) from home.',
    url: 'https://mydocuments.cityofbristol.ac.uk',
  },
  {
    name: 'Student Hub',
    logo: '/logos/student hub logo.png',
    tag: 'College',
    desc: 'Everything you need to know about college life and community.',
    longDesc:
      'The CoBC Student Hub is your one-stop shop for everything you need to know about City of Bristol College life and the inclusive community that surrounds us.',
    url: 'https://studenthub.cityofbristol.ac.uk',
  },
  {
    name: 'Grammarly',
    logo: '/logos/grammarly logo.png',
    tag: 'Writing',
    desc: 'AI writing assistant to improve your grammar and clarity.',
    url: 'https://www.grammarly.com',
  },
  {
    name: 'Canva',
    logo: '/logos/canva logo.png',
    tag: 'Design',
    desc: 'Create professional presentations, posters and social graphics.',
    url: 'https://www.canva.com',
  },
];

const CAT_C: Record<string, string> = {
  'Campus Life': T.blue,
  Safety: T.peach,
  Learning: T.purple,
  Support: T.lav,
  Wellbeing: T.peach,
};
const TAG_C: Record<string, string> = {
  Writing: T.cyan,
  Microsoft: '#0078d4',
  Storage: T.mint,
  College: T.lav,
  Research: '#c8b800',
  Design: T.peach,
  Comms: T.lilac,
  Learning: T.purple,
  Portal: T.blue,
  App: T.mint,
};

// ─── ABSENCE MODAL ────────────────────────────────────────────────────────────
const AbsenceModal = ({ onClose }: { onClose: () => void }) => {
  const [reason, setReason] = useState('');
  const [other, setOther] = useState('');
  const [done, setDone] = useState(false);
  const opts = [
    { k: 'Sick', i: 'heart' as IconName },
    { k: 'Emergency', i: 'warn' as IconName },
    { k: 'Transport', i: 'pin' as IconName },
    { k: 'Personal', i: 'person' as IconName },
    { k: 'Other', i: 'info' as IconName },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(45,0,21,0.55)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-end',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{
          background: T.card,
          borderRadius: '24px 24px 0 0',
          padding: '26px 22px 40px',
          width: '100%',
          boxShadow: '0 -12px 48px rgba(0,0,0,0.18)',
        }}
      >
        {done ? (
          <div style={{ textAlign: 'center', padding: '10px 0 6px' }}>
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 34,
                background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 6px 20px ${T.mint}66`,
              }}
            >
              <Ic n="check" size={32} c={T.plum} sw={2.5} />
            </div>
            <div
              style={{
                fontWeight: 900,
                color: T.plum,
                fontSize: 20,
                marginBottom: 6,
              }}
            >
              Absence Reported
            </div>
            <div
              style={{
                color: T.muted,
                fontSize: 14,
                lineHeight: 1.5,
                marginBottom: 24,
              }}
            >
              Your personal tutor has been notified and your record has been
              updated.
            </div>
            <button
              onClick={onClose}
              style={{
                background: T.plum,
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                padding: '14px 48px',
                fontWeight: 800,
                fontSize: 16,
                cursor: 'pointer',
                fontFamily: 'inherit',
                boxShadow: `0 4px 16px ${T.plum}44`,
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 20,
              }}
            >
              <div>
                <div style={{ fontWeight: 900, color: T.plum, fontSize: 19 }}>
                  Report Absence
                </div>
                <div style={{ color: T.muted, fontSize: 13, marginTop: 3 }}>
                  Why can't you attend today?
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: T.bg,
                  border: 'none',
                  borderRadius: 12,
                  width: 34,
                  height: 34,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n="close" size={17} c={T.plum} />
              </button>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
                marginBottom: 14,
              }}
            >
              {opts.map((o) => (
                <button
                  key={o.k}
                  onClick={() => setReason(o.k)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '13px 14px',
                    borderRadius: 14,
                    border: `2px solid ${reason === o.k ? T.plum : T.border}`,
                    background: reason === o.k ? T.plum : T.card,
                    color: reason === o.k ? '#fff' : T.plum,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                  }}
                >
                  <Ic
                    n={o.i}
                    size={17}
                    c={reason === o.k ? '#fff' : T.plum}
                    sw={2}
                  />{' '}
                  {o.k}
                </button>
              ))}
            </div>
            {reason === 'Other' && (
              <textarea
                value={other}
                onChange={(e) => setOther(e.target.value)}
                placeholder="Please describe your reason..."
                rows={2}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  border: `1.5px solid ${T.border}`,
                  padding: '11px 13px',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  marginBottom: 12,
                  boxSizing: 'border-box',
                  resize: 'none',
                  outline: 'none',
                  color: T.plum,
                }}
              />
            )}
            <button
              onClick={() => reason && setDone(true)}
              style={{
                width: '100%',
                background: reason
                  ? `linear-gradient(135deg,${T.plum},${T.plumLt})`
                  : '#e5e7eb',
                color: reason ? '#fff' : '#9ca3af',
                border: 'none',
                borderRadius: 14,
                padding: 15,
                fontWeight: 800,
                fontSize: 16,
                cursor: reason ? 'pointer' : 'default',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                boxShadow: reason ? `0 4px 16px ${T.plum}33` : 'none',
              }}
            >
              Submit Absence
            </button>
          </>
        )}
      </div>
    </div>
  );
};
type Notification = {
  id: number;
  i: IconName;
  title: string;
  msg: string;
  time: string;
  c: string;
  unread: boolean;
};

const NOTIFS_DATA: Notification[] = [
  {
    id: 1,
    i: 'file' as IconName,
    title: 'Assignment Due',
    msg: 'Graphic Design logo project due in 3 days',
    time: '2h ago',
    c: T.cyan,
    unread: true,
  },
  {
    id: 2,
    i: 'cal' as IconName,
    title: 'Timetable Change',
    msg: 'Room change: JavaScript class moved to CGS 204',
    time: '5h ago',
    c: T.mint,
    unread: true,
  },
  {
    id: 3,
    i: 'award' as IconName,
    title: 'College Event',
    msg: 'Student Union social event this Friday 5pm',
    time: '1d ago',
    c: T.lilac,
    unread: true,
  },
  {
    id: 4,
    i: 'warn' as IconName,
    title: 'Attendance Alert',
    msg: 'Attendance in Finance is below 75%',
    time: '2d ago',
    c: T.pink,
    unread: true,
  },
  {
    id: 5,
    i: 'users' as IconName,
    title: 'Tutor Message',
    msg: 'Ms. Johnson left feedback on your portfolio',
    time: '3d ago',
    c: T.lav,
    unread: true,
  },
];

// ─── NOTIFICATIONS PAGE ───────────────────────────────────────────────────────
const NotifsPage = ({
  items,
  onBack,
  onToggleRead,
}: {
  items: Notification[];
  onBack: () => void;
  onToggleRead: (id: number) => void;
}) => {
  const unreadCount = items.filter((n) => n.unread).length;

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div
        style={{
          padding: '15px 18px',
          background: T.card,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: `1px solid ${T.border}`,
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
          }}
        >
          <Ic n="chL" size={22} c={T.plum} />
        </button>
        <span style={{ fontWeight: 900, fontSize: 18, color: T.plum }}>
          Notifications
        </span>
        {unreadCount > 0 && (
          <span
            style={{
              marginLeft: 'auto',
              background: T.pink,
              color: '#fff',
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 800,
              padding: '2px 10px',
            }}
          >
            {unreadCount} new
          </span>
        )}
      </div>
      <div style={{ padding: '14px 14px 24px' }}>
        {items.map((n) => (
          <Card
            key={n.id}
            style={{
              display: 'flex',
              gap: 13,
              alignItems: 'flex-start',
              opacity: n.unread ? 1 : 0.6,
              transition: 'opacity 0.2s',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: n.c + '33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: `1.5px solid ${n.c}44`,
              }}
            >
              <Ic n={n.i} size={19} c={T.plum} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 800, color: T.plum, fontSize: 13 }}>
                  {n.title}
                  {n.unread && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        background: T.pink,
                        marginLeft: 6,
                        verticalAlign: 'middle',
                      }}
                    />
                  )}
                </span>
                <span style={{ color: T.muted, fontSize: 11 }}>{n.time}</span>
              </div>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: 12,
                  margin: '4px 0 10px',
                  lineHeight: 1.5,
                }}
              >
                {n.msg}
              </p>
              <button
                onClick={() => onToggleRead(n.id)}
                style={{
                  background: n.unread ? T.bg : 'none',
                  border: n.unread ? `1px solid ${T.border}` : 'none',
                  borderRadius: 8,
                  padding: n.unread ? '4px 10px' : '4px 0',
                  fontSize: 11,
                  fontWeight: 700,
                  color: n.unread ? T.plum : T.muted,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  textDecoration: n.unread ? 'none' : 'underline',
                }}
              >
                {n.unread ? 'Mark as Read' : 'Mark as Unread'}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── ARTICLE PAGE ─────────────────────────────────────────────────────────────
type Article = {
  title: string;
  icon: IconName;
  cat: string;
  color: string;
  isNew: boolean;
  body: string;
};

const ArticlePage = ({ art, onBack }: { art: Article; onBack: () => void }) => {
  const renderBody = (txt: string) =>
    txt.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**') && line.length > 4)
        return (
          <div
            key={i}
            style={{
              fontWeight: 800,
              color: T.plum,
              fontSize: 14,
              marginTop: 16,
              marginBottom: 5,
            }}
          >
            {line.replace(/\*\*/g, '')}
          </div>
        );
      if (line.match(/^\d+\./))
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 9,
              fontSize: 13,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                fontWeight: 800,
                color: T.plum,
                flexShrink: 0,
                minWidth: 16,
              }}
            >
              {line.match(/^\d+/)![0]}.
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: line
                  .replace(/^\d+\.\s*/, '')
                  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
              }}
            />
          </div>
        );
      if (line.startsWith('- '))
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              gap: 9,
              fontSize: 13,
              color: '#374151',
              lineHeight: 1.7,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                color: art.color,
                fontWeight: 900,
                flexShrink: 0,
                fontSize: 16,
                lineHeight: 1.3,
              }}
            >
              ·
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: line
                  .substring(2)
                  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
              }}
            />
          </div>
        );
      if (line === '') return <div key={i} style={{ height: 5 }} />;
      return (
        <p
          key={i}
          style={{
            fontSize: 13,
            color: '#374151',
            lineHeight: 1.7,
            margin: '0 0 4px',
          }}
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'),
          }}
        />
      );
    });

  const ac = art.color;
  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div
        style={{
          padding: '15px 18px',
          background: T.card,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
          }}
        >
          <Ic n="chL" size={22} c={T.plum} />
        </button>
        <span style={{ fontWeight: 900, fontSize: 16, color: T.plum, flex: 1 }}>
          {art.title}
        </span>
        <Pill text={art.cat} color={ac} />
      </div>
      <div
        style={{
          background: `linear-gradient(140deg,${ac}55,${ac}22)`,
          padding: '22px 20px',
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          borderBottom: `1px solid ${ac}33`,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 18,
            background: 'rgba(255,255,255,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: `0 4px 16px ${ac}44`,
          }}
        >
          <Ic n={art.icon} size={28} c={T.plum} />
        </div>
        <div>
          <div
            style={{
              fontWeight: 900,
              color: T.plum,
              fontSize: 19,
              lineHeight: 1.2,
            }}
          >
            {art.title}
          </div>
          <div style={{ color: T.muted, fontSize: 12, marginTop: 4 }}>
            {art.cat} · City of Bristol College
          </div>
        </div>
      </div>
      <div style={{ padding: '18px 20px 32px' }}>{renderBody(art.body)}</div>
    </div>
  );
};

// ─── UNIT DETAIL ──────────────────────────────────────────────────────────────
type Unit = {
  name: string;
  color: string;
  att: number;
  punc: number;
  assignments: string[];
  teacher: string;
};

const UnitPage = ({ unit, onBack }: { unit: Unit; onBack: () => void }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div
      style={{
        padding: '15px 18px',
        background: T.card,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          display: 'flex',
        }}
      >
        <Ic n="chL" size={22} c={T.plum} />
      </button>
      <span style={{ fontWeight: 900, fontSize: 16, color: T.plum }}>
        {unit.name}
      </span>
    </div>
    <div style={{ padding: 14 }}>
      <div
        style={{
          background: `linear-gradient(140deg,${unit.color}30,${unit.color}15)`,
          border: `1.5px solid ${unit.color}44`,
          borderRadius: 20,
          padding: 18,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontWeight: 900,
            color: T.plum,
            fontSize: 17,
            marginBottom: 14,
          }}
        >
          {unit.name}
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 14,
              padding: 14,
              textAlign: 'center',
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            <Ring
              value={unit.att}
              color={unit.att >= 80 ? T.green : T.pink}
              size={64}
            />
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.muted,
                marginTop: 6,
              }}
            >
              ATTENDANCE
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: 14,
              padding: 14,
              textAlign: 'center',
              boxShadow: `0 2px 8px ${T.shadow}`,
            }}
          >
            <Ring
              value={unit.punc}
              color={unit.punc >= 80 ? T.cyan : '#c8b800'}
              size={64}
            />
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.muted,
                marginTop: 6,
              }}
            >
              PUNCTUALITY
            </div>
          </div>
        </div>
      </div>
      <Card style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Ic n="person" size={22} c={T.plum} />
        </div>
        <div>
          <div style={{ fontWeight: 800, color: T.plum, fontSize: 15 }}>
            {unit.teacher}
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
            Unit Tutor
          </div>
        </div>
      </Card>
      <Card>
        <SecHead title="Assignments" />
        {unit.assignments.map((a, i, arr) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '9px 0',
              borderBottom:
                i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 9,
                background: unit.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{ fontSize: 14, color: T.plum, flex: 1, fontWeight: 500 }}
            >
              {a}
            </span>
            <span
              style={{
                fontSize: 11,
                color: T.muted,
                background: T.bg,
                padding: '3px 9px',
                borderRadius: 7,
                border: `1px solid ${T.border}`,
                fontWeight: 600,
              }}
            >
              Due Soon
            </span>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

// ─── COURSE DETAIL ────────────────────────────────────────────────────────────
type Course = {
  id: number;
  name: string;
  desc: string;
  progress: number;
  grad: string;
  units: Unit[];
};

const CoursePage = ({
  course,
  onBack,
  onUnit,
}: {
  course: Course;
  onBack: () => void;
  onUnit: (u: Unit) => void;
}) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div
      style={{
        padding: '15px 18px',
        background: T.card,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          display: 'flex',
        }}
      >
        <Ic n="chL" size={22} c={T.plum} />
      </button>
      <span style={{ fontWeight: 900, fontSize: 16, color: T.plum }}>
        {course.name}
      </span>
    </div>
    <div style={{ padding: 14 }}>
      <div
        style={{
          borderRadius: 22,
          background: course.grad,
          padding: '22px 20px',
          marginBottom: 14,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 140,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.12)',
          }}
        />
        <Ribbon style={{ zIndex: 0, opacity: 0.6 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontWeight: 900,
              fontSize: 20,
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
              marginBottom: 6,
            }}
          >
            {course.name}
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.55,
              marginBottom: 16,
              textShadow: '0 1px 4px rgba(0,0,0,0.15)',
            }}
          >
            {course.desc}
          </p>
          <div
            style={{
              background: 'rgba(255,255,255,0.28)',
              borderRadius: 99,
              height: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${course.progress}%`,
                height: '100%',
                background: 'rgba(255,255,255,0.92)',
                borderRadius: 99,
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
              }}
            >
              Overall Progress
            </span>
            <span style={{ fontSize: 12, color: '#fff', fontWeight: 800 }}>
              {course.progress}%
            </span>
          </div>
        </div>
      </div>
      <SecHead title={`Units (${course.units.length})`} />
      {course.units.map((u, i) => (
        <Card
          key={i}
          onClick={() => onUnit(u)}
          style={{ display: 'flex', alignItems: 'center', gap: 14 }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: u.color + '33',
              border: `1.5px solid ${u.color}55`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Ic n="book" size={21} c={T.plum} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>
              {u.name}
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>
              Attendance {u.att}% · Punctuality {u.punc}%
            </div>
            <Bar value={u.att} color={u.color} h={5} />
          </div>
          <Ic n="chR" size={18} c={T.border} />
        </Card>
      ))}
    </div>
  </div>
);

// ─── HOME TAB ─────────────────────────────────────────────────────────────────
const HomeTab = ({
  onCourse,
  onUnit,
}: {
  onCourse: (c: Course) => void;
  onUnit: (u: Unit) => void;
}) => {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(true);
  const [modal, setModal] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const c = COURSES[idx];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        {/* Greeting */}
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              color: T.muted,
              fontWeight: 500,
              letterSpacing: 0.3,
            }}
          >
            Good morning
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 23,
              color: T.plum,
              lineHeight: 1.1,
              marginTop: 1,
            }}
          >
            Alex Thompson
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>
            Tuesday · 24 Feb 2026
          </div>
        </div>

        {/* Overall stats
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          <SecHead title="Overall Performance" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              paddingTop: 12,
              marginBottom: 20
            }}
          >
            <Ring value={82} color={T.cyan} size={125} label="Attendance" />
            <Ring value={88} color={T.mint} size={125} label="Punctuality" />
          </div>
        </div> */}

        {/* Course card */}
        <div
          style={{
            perspective: 1200,
            marginBottom: 0,
            height: 168,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front Face */}
            <div
              style={{
                borderRadius: 22,
                background: c.grad,
                padding: '22px 20px 18px',
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                boxShadow: flipped ? 'none' : `0 8px 32px rgba(69,0,32,0.15)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.12)',
                }}
              />
              <Ribbon />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    Course {idx + 1} / {COURSES.length}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourse(c);
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(8px)',
                      border: '1.5px solid rgba(255,255,255,0.4)',
                      borderRadius: 10,
                      padding: '5px 12px',
                      color: '#fff',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    View <Ic n="chR" size={13} c="#fff" />
                  </button>
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: '#fff',
                    textShadow: '0 1px 8px rgba(0,0,0,0.2)',
                    lineHeight: 1.15,
                    marginBottom: 4,
                  }}
                >
                  {c.name}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.88)',
                    marginBottom: 14,
                    lineHeight: 1.5,
                  }}
                >
                  {c.desc}
                </p>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.28)',
                    borderRadius: 99,
                    height: 8,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${c.progress}%`,
                      height: '100%',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: 99,
                      transition: 'width 0.7s',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}
                >
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                    Progress
                  </span>
                  <span style={{ fontSize: 12, color: '#fff', fontWeight: 800 }}>
                    {c.progress}%
                  </span>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div
              style={{
                borderRadius: 22,
                background: T.card,
                padding: '20px',
                border: `1.5px solid ${T.border}`,
                position: 'absolute',
                inset: 0,
                boxShadow: flipped ? `0 8px 32px rgba(69,0,32,0.15)` : 'none',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <div style={{ transform: 'scale(1.1)' }}>
                <Ring value={c.att!} color={T.cyan} size={86} label="Attendance" />
              </div>
              <div style={{ transform: 'scale(1.1)' }}>
                <Ring value={c.punc!} color={T.mint} size={86} label="Punctuality" />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 0 4px',
          }}
        >
          <button
            onClick={() => {
              setIdx(Math.max(0, idx - 1));
              setFlipped(false);
            }}
            style={{
              background: idx > 0 ? T.plum : '#e5e7eb',
              border: 'none',
              borderRadius: 99,
              width: 26,
              height: 26,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: idx > 0 ? `0 2px 8px ${T.plum}44` : 'none',
            }}
          >
            <Ic n="chL" size={13} c={idx > 0 ? '#fff' : '#9ca3af'} />
          </button>
          {COURSES.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === idx ? 20 : 7,
                height: 7,
                borderRadius: 99,
                background: i === idx ? T.plum : '#d1d5db',
                transition: 'all 0.3s',
              }}
            />
          ))}
          <button
            onClick={() => {
              setIdx(Math.min(COURSES.length - 1, idx + 1));
              setFlipped(false);
            }}
            style={{
              background: idx < COURSES.length - 1 ? T.plum : '#e5e7eb',
              border: 'none',
              borderRadius: 99,
              width: 26,
              height: 26,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                idx < COURSES.length - 1 ? `0 2px 8px ${T.plum}44` : 'none',
            }}
          >
            <Ic
              n="chR"
              size={13}
              c={idx < COURSES.length - 1 ? '#fff' : '#9ca3af'}
            />
          </button>
        </div>

        {/* Units strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
            marginTop: 6,
          }}
        >
          <SecHead title="Units" />
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              color: T.muted,
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            {open ? 'Collapse' : 'Expand'}{' '}
            <Ic n={open ? 'chU' : 'chD'} size={13} c={T.muted} />
          </button>
        </div>
        {open && (
          <div
            style={{
              display: 'flex',
              gap: 9,
              overflowX: 'auto',
              paddingBottom: 8,
              marginBottom: 4,
            }}
          >
            {c.units.map((u, i) => (
              <div
                key={i}
                onClick={() => onUnit(u)}
                style={{
                  background: T.card,
                  border: `1.5px solid ${u.color}55`,
                  borderRadius: 16,
                  padding: '12px 15px',
                  flexShrink: 0,
                  cursor: 'pointer',
                  minWidth: 138,
                  boxShadow: `0 2px 8px ${u.color}22`,
                  transition: 'transform 0.1s',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: u.color + '33',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 8,
                  }}
                >
                  <Ic n="book" size={16} c={T.plum} />
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 12,
                    color: T.plum,
                    marginBottom: 5,
                    lineHeight: 1.3,
                  }}
                >
                  {u.name}
                </div>
                <div style={{ fontSize: 11, color: T.muted }}>
                  Att{' '}
                  <b style={{ color: u.att >= 80 ? '#059669' : T.pink }}>
                    {u.att}%
                  </b>
                </div>
                <div style={{ fontSize: 11, color: T.muted }}>
                  Punc <b style={{ color: T.plum }}>{u.punc}%</b>
                </div>
                <Bar value={u.att} color={u.color} h={4} />
              </div>
            ))}
          </div>
        )}

        {/* Print Balance */}
        <div
          style={{
            borderRadius: 20,
            background: `linear-gradient(135deg,${T.mint}44,${T.cyan}22)`,
            border: `1.5px solid ${T.mint}66`,
            padding: '14px 16px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            boxShadow: `0 2px 12px ${T.mint}22`,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 15,
              background: `linear-gradient(135deg,${T.mint},${T.cyan})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 4px 12px ${T.cyan}44`,
            }}
          >
            <Ic n="print" size={22} c={T.plum} sw={2} />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                color: T.muted,
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              Print Balance
            </div>
            <div
              style={{ fontSize: 22, fontWeight: 900, color: T.plum, lineHeight: 1 }}
            >
              £5.00
            </div>
          </div>
          <button
            style={{
              background: T.plum,
              border: 'none',
              borderRadius: 12,
              padding: '8px 14px',
              fontSize: 12,
              fontWeight: 800,
              color: '#fff',
              cursor: 'pointer',
              fontFamily: 'inherit',
              flexShrink: 0,
            }}
          >
            Top Up
          </button>
        </div>

        {/* Quick actions */}
        <SecHead title="Quick Actions" />
        <div
          style={{
            display: 'flex',
            gap: 10,
            overflowX: 'auto',
            paddingBottom: 8,
            marginBottom: 16,
          }}
        >
          {[
            {
              i: 'warn' as IconName,
              label: 'Report Absence',
              c: `linear-gradient(135deg,${T.pink},${T.peach})`,
              a: () => setModal(true),
            },
            {
              i: 'trend' as IconName,
              label: 'View Grades',
              c: `linear-gradient(135deg,${T.cyan},${T.mint})`,
              a: () => { },
            },
            {
              i: 'users' as IconName,
              label: 'My Tutor',
              c: `linear-gradient(135deg,${T.purple},${T.lilac})`,
              a: () => { },
            },
            {
              i: 'book' as IconName,
              label: 'Library',
              c: `linear-gradient(135deg,${T.lemon}cc,${T.mint})`,
              a: () => { },
            },
          ].map((q, i) => (
            <button
              key={i}
              onClick={q.a}
              style={{
                flexShrink: 0,
                background: q.c,
                border: 'none',
                borderRadius: 20,
                padding: '18px 14px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 24,
                width: 130,
                boxShadow: `0 4px 16px rgba(69,0,32,0.15)`,
                transition: 'transform 0.15s',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n={q.i} size={20} c="#fff" sw={2.2} />
              </div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.3,
                  textAlign: 'left',
                }}
              >
                {q.label}
              </span>
            </button>
          ))}
        </div>

        {/* News */}
        <SecHead title="Campus News" action="See all" />
        <div
          style={{
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            paddingBottom: 16,
            marginBottom: 8,
            scrollSnapType: 'x mandatory',
          }}
        >
          {NEWS.map((n, i) => (
            <div
              key={i}
              style={{
                width: 260,
                flexShrink: 0,
                height: 320,
                borderRadius: 24,
                overflow: 'hidden',
                background: `linear-gradient(150deg, ${n.color}, ${n.color}bb)`,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 20,
                boxShadow: `0 8px 24px ${n.color}40`,
                scrollSnapAlign: 'start',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -40,
                  width: 200,
                  height: 200,
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: 100,
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -40,
                  left: -20,
                  width: 150,
                  height: 150,
                  background: 'rgba(0,0,0,0.1)',
                  borderRadius: 75,
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top part: Icon and Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Ic n={n.icon} size={24} c="#fff" sw={2} />
                </div>
                <div
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 99,
                    letterSpacing: 0.5,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  LATEST
                </div>
              </div>

              {/* Bottom part: Title, Desc, and "Read More" */}
              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                <div
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 900,
                    lineHeight: 1.15,
                    marginBottom: 8,
                    textShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  }}
                >
                  {n.title}
                </div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 13,
                    lineHeight: 1.4,
                    marginBottom: 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {n.desc}
                </p>
                <div style={{ display: 'flex' }}>
                  <button
                    style={{
                      background: '#fff',
                      color: T.plum,
                      border: 'none',
                      borderRadius: 12,
                      padding: '10px 16px',
                      fontSize: 12,
                      fontWeight: 800,
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                      display: 'inline-block',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    Read full story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && <AbsenceModal onClose={() => setModal(false)} />}
    </div>
  );
};

// ─── TIMETABLE TAB ────────────────────────────────────────────────────────────
const TimetableTab = () => {
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const [day, setDay] = useState(1);
  const SCHED: Record<
    number,
    { t: string; e: string; s: string; r: string; c: string }[]
  > = {
    0: [{ t: '09:00', e: '10:30', s: 'Graphic Design', r: 'A204', c: T.cyan }],
    1: [
      { t: '09:00', e: '10:30', s: 'Web Dev', r: 'CGS 105', c: T.mint },
      { t: '11:00', e: '12:30', s: 'Photography', r: 'Studio B', c: T.purple },
      { t: '14:00', e: '15:30', s: 'Business Studies', r: 'E112', c: T.peach },
    ],
    2: [
      { t: '10:00', e: '11:30', s: 'JavaScript', r: 'CGS 202', c: '#c8b800' },
      { t: '13:00', e: '14:30', s: 'Finance', r: 'E108', c: T.pink },
    ],
    3: [
      {
        t: '09:00',
        e: '10:30',
        s: 'Video Production',
        r: 'Studio A',
        c: T.lilac,
      },
    ],
    4: [
      { t: '10:00', e: '12:00', s: 'Portfolio Review', r: 'A201', c: T.lav },
      { t: '14:00', e: '15:00', s: 'Tutorial', r: 'Tutor Room 3', c: T.mint },
    ],
  };
  const UPCOMING = [
    { d: 'Wed', s: 'JS Project Due', i: 'file' as IconName, c: '#c8b800' },
    { d: 'Thu', s: 'Portfolio Review', i: 'star' as IconName, c: T.lav },
    { d: 'Fri', s: 'Business Mock Exam', i: 'book' as IconName, c: T.peach },
  ];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: 23,
            color: T.plum,
            marginBottom: 2,
          }}
        >
          Timetable
        </div>
        <div style={{ color: T.muted, fontSize: 12, marginBottom: 16 }}>
          Week of 24 Feb 2026
        </div>

        {/* Upcoming */}
        <Card style={{ marginBottom: 16, padding: '16px 18px' }}>
          <SecHead title="Upcoming This Week" />
          {UPCOMING.map((u, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                padding: '9px 0',
                borderBottom:
                  i < UPCOMING.length - 1 ? `1px solid ${T.border}` : 'none',
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: u.c + '44',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Ic n={u.i} size={17} c={T.plum} />
              </div>
              <span
                style={{
                  fontWeight: 700,
                  color: T.plum,
                  fontSize: 13,
                  flex: 1,
                }}
              >
                {u.s}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#fff',
                  background: T.plum,
                  padding: '3px 10px',
                  borderRadius: 8,
                }}
              >
                {u.d}
              </span>
            </div>
          ))}
        </Card>

        {/* Day picker */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          {DAYS.map((d, i) => (
            <button
              key={d}
              onClick={() => setDay(i)}
              style={{
                flex: 1,
                padding: '10px 4px',
                borderRadius: 13,
                border: `1.5px solid ${i === day ? T.plum : T.border}`,
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: 13,
                fontFamily: 'inherit',
                transition: 'all 0.15s',
                background: i === day ? T.plum : T.card,
                color: i === day ? '#fff' : T.plum,
                boxShadow: i === day ? `0 4px 12px ${T.plum}33` : 'none',
                textAlign: 'center',
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Lessons */}
        {(SCHED[day] || []).length === 0 ? (
          <Card style={{ textAlign: 'center', padding: '32px 20px' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: T.mint + '44',
                margin: '0 auto 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="check" size={28} c={T.plum} sw={2.5} />
            </div>
            <div
              style={{
                fontWeight: 800,
                color: T.plum,
                fontSize: 16,
                marginBottom: 4,
              }}
            >
              Free Day!
            </div>
            <div style={{ color: T.muted, fontSize: 13 }}>
              No lessons scheduled today
            </div>
          </Card>
        ) : (
          (SCHED[day] || []).map((l, i) => (
            <Card
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                borderLeft: `4px solid ${l.c}`,
                paddingLeft: 14,
              }}
            >
              <div style={{ flexShrink: 0, minWidth: 44 }}>
                <div style={{ fontSize: 13, fontWeight: 900, color: T.plum }}>
                  {l.t}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: T.muted,
                    fontWeight: 500,
                    marginTop: 1,
                  }}
                >
                  → {l.e}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>
                  {l.s}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: T.muted,
                    marginTop: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Ic n="pin" size={12} c={T.muted} /> {l.r}
                </div>
              </div>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: l.c,
                  flexShrink: 0,
                  boxShadow: `0 0 0 3px ${l.c}33`,
                }}
              />
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

// ─── INSIGHTS TAB ─────────────────────────────────────────────────────────────
const InsightsTab = () => {
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [showBm, setShowBm] = useState(false);
  const [openArt, setOpenArt] = useState<Article | null>(null);
  const toggle = (t: string) =>
    setBookmarks((b) => {
      const n = new Set(b);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });

  const SECTIONS = [
    { label: '✨ New for You', items: ARTICLE_LIST.filter((a) => a.isNew) },
    {
      label: 'Campus Life',
      items: ARTICLE_LIST.filter((a) => a.cat === 'Campus Life'),
    },
    { label: 'Safety', items: ARTICLE_LIST.filter((a) => a.cat === 'Safety') },
    {
      label: 'Learning',
      items: ARTICLE_LIST.filter((a) => a.cat === 'Learning'),
    },
    {
      label: 'Support & Wellbeing',
      items: ARTICLE_LIST.filter(
        (a) => a.cat === 'Support' || a.cat === 'Wellbeing'
      ),
    },
  ].filter((s) => s.items.length);

  if (openArt)
    return <ArticlePage art={openArt} onBack={() => setOpenArt(null)} />;

  if (showBm)
    return (
      <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
        <div
          style={{
            padding: '15px 18px',
            background: T.card,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderBottom: `1px solid ${T.border}`,
          }}
        >
          <button
            onClick={() => setShowBm(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
            }}
          >
            <Ic n="chL" size={22} c={T.plum} />
          </button>
          <span style={{ fontWeight: 900, fontSize: 18, color: T.plum }}>
            Saved Articles
          </span>
        </div>
        <div style={{ padding: 14 }}>
          {bookmarks.size === 0 ? (
            <Card style={{ textAlign: 'center', padding: 36 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: T.blue + '44',
                  borderRadius: 18,
                  margin: '0 auto 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ic n="bm" size={26} c={T.plum} />
              </div>
              <div style={{ fontWeight: 800, color: T.plum, fontSize: 16 }}>
                No saved articles yet
              </div>
              <div style={{ color: T.muted, fontSize: 13, marginTop: 5 }}>
                Tap the bookmark on any article to save it here
              </div>
            </Card>
          ) : (
            [...bookmarks].map((t) => {
              const a = ARTICLES[t];
              return (
                <Card
                  key={t}
                  onClick={() => setOpenArt({ title: t, ...a })}
                  style={{ display: 'flex', gap: 13, alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 13,
                      background: (CAT_C[a.cat] || T.blue) + '44',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Ic n={a.icon} size={21} c={T.plum} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 800,
                        color: T.plum,
                        fontSize: 13,
                        marginBottom: 3,
                      }}
                    >
                      {t}
                    </div>
                    <Pill text={a.cat} color={CAT_C[a.cat] || T.blue} />
                  </div>
                  <Ic n="chR" size={17} c={T.border} />
                </Card>
              );
            })
          )}
        </div>
      </div>
    );

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      <div style={{ padding: '14px 16px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 3,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 23, color: T.plum }}>
            Insights
          </div>
          <button
            onClick={() => setShowBm(true)}
            style={{
              background: T.lav + '66',
              border: `1px solid ${T.lav}`,
              borderRadius: 12,
              padding: '7px 13px',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <Ic n="bm" size={14} c={T.plum} />
            <span style={{ fontSize: 12, fontWeight: 800, color: T.plum }}>
              {bookmarks.size}
            </span>
          </button>
        </div>
        <p
          style={{
            color: T.muted,
            fontSize: 12,
            marginBottom: 18,
            lineHeight: 1.5,
          }}
        >
          Guides and resources to help you thrive at Bristol College
        </p>

        {SECTIONS.map((sec) => (
          <div key={sec.label} style={{ marginBottom: 24 }}>
            <div
              style={{
                fontWeight: 900,
                color: T.plum,
                fontSize: 14,
                marginBottom: 10,
                paddingLeft: 2,
              }}
            >
              {sec.label}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 10,
                overflowX: 'auto',
                paddingBottom: 4,
              }}
            >
              {sec.items.map((art) => {
                const ac = CAT_C[art.cat] || T.blue;
                return (
                  <div
                    key={art.title}
                    onClick={() => setOpenArt(art)}
                    style={{
                      flexShrink: 0,
                      width: 158,
                      background: T.card,
                      borderRadius: 18,
                      border: `1px solid ${T.border}`,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      boxShadow: `0 2px 8px ${T.shadow}`,
                      transition: 'transform 0.12s',
                    }}
                  >
                    <div
                      style={{
                        background: `linear-gradient(140deg,${ac},${ac}88)`,
                        padding: '16px 14px 12px',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 12,
                          background: 'rgba(255,255,255,0.75)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 2px 8px ${ac}33`,
                        }}
                      >
                        <Ic n={art.icon} size={21} c={T.plum} />
                      </div>
                      {art.isNew && (
                        <span
                          style={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            background: T.plum,
                            color: '#fff',
                            fontSize: 9,
                            fontWeight: 800,
                            borderRadius: 6,
                            padding: '2px 7px',
                            letterSpacing: 0.5,
                          }}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                    <div style={{ padding: '11px 13px 13px' }}>
                      <div
                        style={{
                          fontWeight: 800,
                          color: T.plum,
                          fontSize: 12,
                          lineHeight: 1.4,
                          marginBottom: 7,
                        }}
                      >
                        {art.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Pill text={art.cat} color={ac} />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggle(art.title);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 2,
                            display: 'flex',
                          }}
                        >
                          <Ic
                            n={bookmarks.has(art.title) ? 'bmFill' : 'bm'}
                            size={16}
                            c={bookmarks.has(art.title) ? T.plum : '#d1d5db'}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── TOOL DETAIL PAGE ─────────────────────────────────────────────────────────
const ToolDetailPage = ({ tool, onBack }: { tool: Tool; onBack: () => void }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div
      style={{
        padding: '15px 18px',
        background: T.card,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
      >
        <Ic n="chL" size={22} c={T.plum} />
      </button>
      <span style={{ fontWeight: 900, fontSize: 18, color: T.plum }}>Tool Details</span>
    </div>

    <div style={{ padding: 20 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: 22,
            overflow: 'hidden',
            background: T.card,
            padding: 8,
            boxShadow: T.shadowMd,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {tool.logo ? (
            <img src={tool.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
          ) : (
            <Ic n={tool.icon || 'wrench'} size={36} c={T.plum} />
          )}
        </div>
        <div>
          <h2 style={{ fontWeight: 900, fontSize: 22, color: T.plum, marginBottom: 4 }}>{tool.name}</h2>
          <Pill text={tool.tag} color={TAG_C[tool.tag] || T.blue} />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 8 }}>Description</div>
        <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6 }}>{tool.longDesc || tool.desc}</p>
      </div>

      {tool.benefits && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 12 }}>Benefits</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tool.benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Ic n="check" size={16} c={T.green} sw={3} />
                <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.4 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tool.features && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: T.plum, marginBottom: 12 }}>Features</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {tool.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    background: T.plumLt,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => window.open(tool.url, '_blank')}
        style={{
          width: '100%',
          background: T.plum,
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: '16px 20px',
          fontWeight: 800,
          fontSize: 16,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          boxShadow: `0 8px 24px ${T.plum}44`,
          marginTop: 10,
        }}
      >
        Go to Website <Ic n="link" size={18} c="#fff" />
      </button>
    </div>
  </div>
);

// ─── TOOLS TAB ────────────────────────────────────────────────────────────────
const ToolsTab = ({ onSelect }: { onSelect: (t: Tool) => void }) => (
  <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
    <div style={{ padding: '16px 16px 48px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: 24, color: T.plum }}>Tools & Links</div>
          <p style={{ color: T.muted, fontSize: 13, marginTop: 2 }}>Essential resources for your studies</p>
        </div>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 15,
            background: T.card,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: T.shadow,
          }}
        >
          <Ic n="wrench" size={20} c={T.plum} />
        </div>
      </div>

      {/* Grid view first as requested */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {TOOLS.map((t) => (
          <div
            key={t.name + '_grid'}
            onClick={() => onSelect(t)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 20,
                background: T.card,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: T.shadow,
                border: `1px solid ${T.border}44`,
                overflow: 'hidden',
                padding: 12,
                transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              {t.logo ? (
                <img src={t.logo} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="" />
              ) : (
                <Ic n={t.icon || 'wrench'} size={28} c={T.plum} />
              )}
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: T.plum,
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: 70,
                background: 'rgba(255,255,255,0.7)',
                padding: '2px 4px',
                borderRadius: 4
              }}
            >
              {t.name}
            </span>
          </div>
        ))}
      </div>

      <SecHead title="All Resources" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {TOOLS.map((t) => (
          <Card
            key={t.name}
            onClick={() => onSelect(t)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 14px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: `1px solid ${T.border}44`,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                overflow: 'hidden',
                background: '#f8fafc',
                border: `1px solid ${T.border}66`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {t.logo ? (
                <img src={t.logo} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} alt="" />
              ) : (
                <Ic n={t.icon || 'wrench'} size={22} c={T.plum} />
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ fontWeight: 800, color: T.plum, fontSize: 14 }}>{t.name}</span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: TAG_C[t.tag] || T.blue,
                    background: (TAG_C[t.tag] || T.blue) + '18',
                    padding: '2px 6px',
                    borderRadius: 6,
                    textTransform: 'uppercase',
                    letterSpacing: 0.4,
                  }}
                >
                  {t.tag}
                </span>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: T.muted,
                  lineHeight: 1.4,
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {t.desc}
              </p>
            </div>

            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: T.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="chR" size={16} c={T.muted} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);


// ─── PROFILE TAB ──────────────────────────────────────────────────────────────
const ProfileTab = () => {
  const [darkMode, setDark] = useState(false);
  const [largeText, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [lang, setLang] = useState('English');
  const LANGS = ['English', 'Welsh', 'Arabic', 'Somali', 'Polish', 'Urdu'];

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: T.bg }}>
      {/* Hero */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(150deg,${T.blue} 0%,${T.lav} 55%,${T.peach} 100%)`,
          padding: '36px 20px 30px',
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <RibbonProfile />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              background: `linear-gradient(135deg,${T.cyan} 0%,${T.purple} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid rgba(255,255,255,0.9)',
              boxShadow: `0 8px 28px rgba(69,0,32,0.22)`,
              marginBottom: 12,
            }}
          >
            <Ic n="person" size={38} c="#fff" sw={1.5} />
          </div>
          <div
            style={{
              fontWeight: 900,
              color: T.plum,
              fontSize: 21,
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              marginBottom: 6,
            }}
          >
            Alex Thompson
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.9)',
              borderRadius: 99,
              padding: '5px 20px',
              fontSize: 12,
              fontWeight: 800,
              color: T.plum,
              boxShadow: `0 3px 12px ${T.purple}55`,
              letterSpacing: 0.4,
            }}
          >
            Student — Level 3
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 14px 28px' }}>
        {/* Info card */}
        <Card>
          {(
            [
              ['Student ID', 'BS2024-8821'],
              ['Programme', 'Digital Media Arts'],
              ['Campus', 'College Green Centre'],
              ['Email', 'a.thompson@cityofbristol.ac.uk'],
            ] as [string, string][]
          ).map(([k, v], i, arr) => (
            <div
              key={k}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: T.muted,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {k}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: T.plum,
                  textAlign: 'right',
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </Card>

        {/* Accessibility */}
        <Card>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 11,
                background: T.blue + '66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="access" size={18} c={T.plum} />
            </div>
            <span style={{ fontWeight: 900, color: T.plum, fontSize: 16 }}>
              Accessibility
            </span>
          </div>
          {[
            {
              label: 'Large Text',
              val: largeText,
              set: setLarge,
              desc: 'Increases font size throughout app',
              icon: 'sun' as IconName,
            },
            {
              label: 'High Contrast',
              val: contrast,
              set: setContrast,
              desc: 'WCAG AA contrast ratio compliance',
              icon: 'shield' as IconName,
            },
            {
              label: 'Dark Mode',
              val: darkMode,
              set: setDark,
              desc: 'Reduces eye strain in low light',
              icon: 'moon' as IconName,
            },
          ].map((o) => (
            <div
              key={o.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: `1px solid ${T.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9,
                    background: T.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ic n={o.icon} size={15} c={T.plum} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: T.plum, fontSize: 13 }}>
                    {o.label}
                  </div>
                  <div style={{ fontSize: 11, color: T.muted, marginTop: 1 }}>
                    {o.desc}
                  </div>
                </div>
              </div>
              <Toggle on={o.val} onToggle={() => o.set((v: boolean) => !v)} />
            </div>
          ))}
          <div style={{ paddingTop: 14 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 9,
              }}
            >
              <Ic n="globe" size={15} c={T.plum} />
              <span style={{ fontWeight: 700, color: T.plum, fontSize: 13 }}>
                Language
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: '6px 13px',
                    borderRadius: 99,
                    fontFamily: 'inherit',
                    border: `1.5px solid ${l === lang ? T.plum : T.border}`,
                    background: l === lang ? T.plum : T.card,
                    color: l === lang ? '#fff' : T.plum,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    boxShadow: l === lang ? `0 2px 8px ${T.plum}33` : 'none',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 11,
                background: T.lemon + '66',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ic n="gear" size={18} c={T.plum} />
            </div>
            <span style={{ fontWeight: 900, color: T.plum, fontSize: 16 }}>
              Settings
            </span>
          </div>
          {[
            { label: 'Update Profile Info', icon: 'pen' as IconName },
            { label: 'Change Profile Photo', icon: 'cam' as IconName },
            { label: 'Notification Preferences', icon: 'bell' as IconName },
            { label: 'Privacy & Data Settings', icon: 'shield' as IconName },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '11px 0',
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${T.border}` : 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: T.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Ic n={s.icon} size={15} c={T.plum} />
              </div>
              <span
                style={{
                  fontSize: 14,
                  color: T.plum,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                {s.label}
              </span>
              <Ic n="chR" size={17} c={T.border} />
            </div>
          ))}
        </Card>

        {/* Sign out */}
        <button
          style={{
            width: '100%',
            background: 'none',
            border: `2px solid ${T.pink}`,
            borderRadius: 16,
            padding: 15,
            fontSize: 15,
            fontWeight: 800,
            color: T.pink,
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 9,
            marginBottom: 8,
            transition: 'background 0.15s',
          }}
        >
          <Ic n="exit" size={18} c={T.pink} /> Sign Out
        </button>
      </div>
    </div>
  );
};

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────
const NAV = [
  { id: 'home', label: 'Home', icon: 'home' as IconName, ac: T.cyan },
  { id: 'timetable', label: 'Timetable', icon: 'cal' as IconName, ac: T.mint },
  {
    id: 'insights',
    label: 'Insights',
    icon: 'compass' as IconName,
    ac: T.lilac,
  },
  { id: 'tools', label: 'Tools', icon: 'wrench' as IconName, ac: T.lemon },
  { id: 'profile', label: 'Profile', icon: 'person' as IconName, ac: T.peach },
];

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [splash, setSplash] = useState(true);
  const [tab, setTab] = useState('home');
  const [notifs, setNotifs] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [unit, setUnit] = useState<Unit | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(NOTIFS_DATA);

  const hasUnread = notifications.some((n) => n.unread);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const showNav = !notifs && !unit && !course && !selectedTool;

  const Content = () => {
    if (notifs)
      return (
        <NotifsPage
          items={notifications}
          onBack={() => setNotifs(false)}
          onToggleRead={toggleRead}
        />
      );
    if (unit) return <UnitPage unit={unit} onBack={() => setUnit(null)} />;
    if (course)
      return (
        <CoursePage
          course={course}
          onBack={() => setCourse(null)}
          onUnit={setUnit}
        />
      );
    if (selectedTool) return <ToolDetailPage tool={selectedTool} onBack={() => setSelectedTool(null)} />;
    if (tab === 'home')
      return <HomeTab onCourse={setCourse} onUnit={setUnit} />;
    if (tab === 'timetable') return <TimetableTab />;
    if (tab === 'insights') return <InsightsTab />;
    if (tab === 'tools') return <ToolsTab onSelect={setSelectedTool} />;
    if (tab === 'profile') return <ProfileTab />;
    return null;
  };

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: T.card,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Poppins','Segoe UI',sans-serif",
      }}
    >
      <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; text-align: left; }
        ::-webkit-scrollbar { width: 0; height: 0; }
        body { margin: 0; padding: 0; }
        button { font-family: 'Poppins','Segoe UI',sans-serif; }
        input, textarea { font-family: 'Poppins','Segoe UI',sans-serif; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      {/* Main app container */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Splash screen */}
        {splash && <SplashScreen onDone={() => setSplash(false)} />}

        {/* Header */}
        <div
          style={{
            background: T.card,
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${T.border}`,
            flexShrink: 0,
            paddingTop: 'env(safe-area-inset-top, 12px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <LogoCompact />
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: T.muted,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                City of
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 900,
                  color: T.plum,
                  lineHeight: 1.1,
                  letterSpacing: -0.3,
                }}
              >
                Bristol College App
              </div>
            </div>
          </div>
          <button
            onClick={() => setNotifs(true)}
            style={{
              position: 'relative',
              background: T.bg,
              border: `1.5px solid ${T.border}`,
              borderRadius: 13,
              width: 42,
              height: 42,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 1px 4px ${T.shadow}`,
            }}
          >
            <Ic n="bell" size={19} c={T.plum} />
            {hasUnread && (
              <span
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 9,
                  height: 9,
                  borderRadius: 9,
                  background: T.pink,
                  border: '2px solid white',
                }}
              />
            )}
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <Content />
        </div>

        {/* Bottom nav */}
        {showNav && (
          <div
            style={{
              background: T.card,
              borderTop: `1px solid ${T.border}`,
              display: 'flex',
              flexShrink: 0,
              paddingBottom: 10,
              paddingTop: 2,
            }}
          >
            {NAV.map((n) => {
              const active = tab === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => {
                    setTab(n.id);
                    setCourse(null);
                    setUnit(null);
                    setSelectedTool(null);
                  }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '6px 2px 4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  {active && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 32,
                        height: 3,
                        background: n.ac,
                        borderRadius: '0 0 4px 4px',
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 11,
                      background: active ? n.ac + '33' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s',
                      marginBottom: 2,
                    }}
                  >
                    <Ic
                      n={n.icon}
                      size={20}
                      c={active ? T.plum : '#b0b7c3'}
                      sw={active ? 2.3 : 1.7}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: active ? 900 : 500,
                      color: active ? T.plum : '#b0b7c3',
                      letterSpacing: active ? 0.2 : 0,
                      transition: 'all 0.2s',
                    }}
                  >
                    {n.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
