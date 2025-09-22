export const theme = {
  colors: {
    background: {
      primary: '#0a0a0a',
      secondary: '#111111',
      tertiary: '#1a1a1a',
    },
    foreground: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      muted: '#525252',
    },
    accent: {
      primary: '#f59e0b',
      secondary: '#fbbf24',
      hover: '#d97706',
    },
    border: '#262626',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem', 
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  spacing: {
    section: '6rem',
    container: '1.5rem',
  },
  animation: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.6,
      slower: 1.0,
    },
    ease: {
      smooth: [0.25, 0.46, 0.45, 0.94],
      bounce: [0.68, -0.55, 0.265, 1.55],
    },
  },
};