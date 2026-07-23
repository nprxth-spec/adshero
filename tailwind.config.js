/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate 900 - very elegant primary text
          dark: '#020617', // Slate 950
          light: '#1E293B', // Slate 800
        },
        accent: {
          DEFAULT: '#2563EB', // Royal Blue
          hover: '#1D4ED8',
          light: '#EFF6FF',
        },
        gold: {
          DEFAULT: '#C5A880', // Elegant champagne gold
          light: '#E2D4C0',
          dark: '#A68758',
        },
        border: 'rgba(226, 232, 240, 0.8)', // Slate 200 soft border
        background: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Outfit', 'Prompt', 'sans-serif'],
        sans: ['Prompt', 'Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
