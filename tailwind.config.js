/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d1117',
          'bg-secondary': '#161b22',
          'bg-tertiary': '#21262d',
          text: '#58a6ff',
          'text-bright': '#c9d1d9',
          'text-muted': '#8b949e',
          accent: '#79c0ff',
          'accent-bright': '#a5d6ff',
          success: '#3fb950',
          error: '#f85149',
          warning: '#d29922',
          purple: '#bc8cff',
          pink: '#ff7b72',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#58a6ff' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #58a6ff, 0 0 20px #58a6ff' },
          'to': { textShadow: '0 0 20px #58a6ff, 0 0 30px #58a6ff, 0 0 40px #58a6ff' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px #58a6ff, 0 0 20px #58a6ff' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px #58a6ff, 0 0 30px #58a6ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
