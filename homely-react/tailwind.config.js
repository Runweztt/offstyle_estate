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
          DEFAULT: '#B5C99A',
          rgb: '181, 201, 154',
        },
        secondary: {
          DEFAULT: '#d8f6b1',
          rgb: '216, 246, 177',
        },
        dark: {
          1: '#092519',
          2: '#111111',
          3: '#222222',
        },
        body: '#707070',
        heading: '#101828',
        'bg-default': '#FCFDFD',
        'bg-light': '#E1EBE2',
        'bg-grey': '#eeeeee',
      },
      fontFamily: {
        body: ['Figtree', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Figtree', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '1.9em' }],
        'h1': ['60px', { lineHeight: '1.15em', letterSpacing: '-0.02em' }],
        'h2': ['48px', { lineHeight: '1.2em', letterSpacing: '-0.015em' }],
        'h3': ['26px', { lineHeight: '1.5em' }],
        'h4': ['20px', { lineHeight: '1.6em' }],
        'h5': ['18px', { lineHeight: '1.6em' }],
        'h6': ['16px', { lineHeight: '1.6em' }],
        '72': ['72px', { lineHeight: '1.1em' }],
        '48': ['48px', { lineHeight: '1.2em' }],
        '40': ['40px', { lineHeight: '1.3em' }],
        '20': ['20px', { lineHeight: '1.6em' }],
        '17': ['17px', { lineHeight: '1.6em' }],
      },
      borderRadius: {
        '1': '20px',
      },
      maxWidth: {
        'container': '1240px',
      },
      spacing: {
        '40px': '40px',
        '60px': '60px',
        '80px': '80px',
        '100': '100px',
        '150px': '150px',
      },
      zIndex: {
        '2': '2',
        '3': '3',
      },
      animation: {
        'slide-left': 'slideLeft 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
