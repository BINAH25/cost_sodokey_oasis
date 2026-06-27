/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#022c22',
          900: '#064e3b',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
          200: '#a7f3d0',
          100: '#d1fae5',
          50: '#ecfdf5',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        oasis: {
          dark: '#011e17',
          deep: '#022c22',
          base: '#064e3b',
          mid: '#047857',
          light: '#10b981',
          glow: '#34d399',
          gold: '#d4a843',
          'gold-light': '#f0d78c',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ripple': 'ripple 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'hero-pan': 'heroPan 30s ease-in-out infinite',
        'water-sheen': 'waterSheen 12s ease-in-out infinite',
      },
      keyframes: {
        heroPan: {
          '0%, 100%': { transform: 'scale(1.08) translate(0, 0)' },
          '50%': { transform: 'scale(1.15) translate(-1.5%, -1.5%)' },
        },
        waterSheen: {
          '0%, 100%': { opacity: '0.3', transform: 'translateX(-8%)' },
          '50%': { opacity: '0.7', transform: 'translateX(8%)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.6)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 168, 67, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 168, 67, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
