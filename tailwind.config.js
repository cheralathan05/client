/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#000000', // Pure Luxury Jet Black
          900: '#080808', // Deep Obsidian Noir
          850: '#111111', // Matte Black Surface
          800: '#181818', // Border/Card Noir
          700: '#242424', // Line & Divider
          600: '#383838',
        },
        gold: {
          100: '#fbf6ea',
          200: '#f5e8cd',
          300: '#ebd299',
          400: '#dcb46a',
          500: '#c59b4e',
          600: '#a67d32',
        },
        champagne: {
          50: '#fdfcf9',
          100: '#faf5eb',
          200: '#f2e8d5',
          300: '#e5d5ba',
          400: '#cbb692',
          500: '#ae966f',
        },
        studiogreen: {
          950: '#040705',
          900: '#08110b',
          800: '#0f1f14',
          700: '#172d1f',
          600: '#23442f',
          500: '#325d41',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Italiana"', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
