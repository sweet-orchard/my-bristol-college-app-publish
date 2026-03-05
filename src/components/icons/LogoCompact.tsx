

export const LogoCompact = () => (
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