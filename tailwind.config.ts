import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002B49',
          dark: '#001F3F',
        },
        accent: {
          orange: '#E28743',
          gold: '#EAB308',
          yellow: '#FFDD00',
        },
        canvas: '#F8F9FA',
        cream: '#F3F2F1',
        muted: '#6B7280',
        border: '#D1D5DB',
        yea: '#00703C',
        nay: '#D4351C',
        pending: '#F47738',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #E28743 0%, #EAB308 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,43,73,0.85) 100%)',
        'card-overlay': 'linear-gradient(to top, rgba(0,31,63,0.95) 0%, rgba(0,0,0,0) 70%)',
      },
    },
  },
  plugins: [],
};
export default config;