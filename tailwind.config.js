/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        // Modern Minimalist Palette (Aliased to Slate/Zinc)
        bg: {
          primary: '#09090b', // Zinc 950
          secondary: '#18181b', // Zinc 900
          tertiary: '#27272a', // Zinc 800
        },
        text: {
          primary: '#f4f4f5', // Zinc 100
          secondary: '#a1a1aa', // Zinc 400
          muted: '#71717a', // Zinc 500
        },
        accent: {
          primary: '#3b82f6', // Blue 500
          hover: '#2563eb', // Blue 600
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
