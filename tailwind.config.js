/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a14',
          900: '#070e1e',
          850: '#0a1329',
          800: '#0e1b38',
          700: '#15264e',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'blue-glow': '0 0 35px rgba(59, 130, 246, 0.25)',
        'avatar-glow': '0 0 50px rgba(37, 99, 235, 0.35)',
      }
    },
  },
  plugins: [],
}
