import React from 'react';


export const Ribbon = ({ style = {} }: { style?: React.CSSProperties }) => (
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

export const RibbonProfile = () => (
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