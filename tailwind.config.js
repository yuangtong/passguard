/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF3B30',
          blue: '#007AFF',
          yellow: '#FFCC00',
          green: '#34C759',
        },
        secondary: {
          orange: '#FF9500',
          purple: '#AF52DE',
          teal: '#5AC8FA',
        },
        neutral: {
          light: '#F2F2F7',
          dark: '#1C1C1E',
          offwhite: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};