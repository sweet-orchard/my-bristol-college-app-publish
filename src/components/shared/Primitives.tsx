import React from 'react';
import { T } from "../../theme/tokens";


export const Card = ({
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

export const Ring = ({
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

export const Pill = ({
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

export const Bar = ({
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

export const Toggle = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => (
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

export const SecHead = ({
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