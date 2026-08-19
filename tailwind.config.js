/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0B1120',
          light: '#F8F9FA',
          cardDark: '#131C31',
          cardLight: '#FFFFFF',
        },
        brand: {
          yellow: '#FACC15',
          yellowDark: '#EAB308',
          amber: '#F59E0B',
          black: '#111111',
          dark: '#0F172A',
          blue: '#2563EB',
          purple: '#7C3AED',
          cyan: '#0891B2',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'yellow-glow': '0 10px 30px -5px rgba(250, 204, 21, 0.4)',
        'black-glow': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
