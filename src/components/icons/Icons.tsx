import React from 'react';
import { T } from "../../theme/tokens";


export type IconName =
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

export const Ic = ({
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