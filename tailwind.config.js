/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077FF',
          50: '#E6F1FF',
          100: '#CCDFFE',
          200: '#99BFFD',
          300: '#66A0FC',
          400: '#3380FB',
          500: '#0077FF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833'
        },
        secondary: {
          DEFAULT: '#00B4D8',
          50: '#E0F7FC',
          100: '#B3ECF7',
          200: '#80DFF2',
          300: '#4DD1EC',
          400: '#26C6E8',
          500: '#00B4D8',
          600: '#0090AD',
          700: '#006B82',
          800: '#004756',
          900: '#00232B'
        },
        accent: '#48CAE4',
        'water-bg': '#F4FBFF',
        'dark-navy': '#0A1628',
        'navy': '#0D2347'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave2': 'wave 10s ease-in-out infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'ripple': 'ripple 1.5s ease-out',
        'bubble': 'bubble 8s ease-in infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) scaleY(1)' },
          '25%': { transform: 'translateX(-5%) scaleY(1.1)' },
          '50%': { transform: 'translateX(5%) scaleY(0.9)' },
          '75%': { transform: 'translateX(-3%) scaleY(1.05)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        bubble: {
          '0%': { transform: 'translateY(100%)', opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 119, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 119, 255, 0.6), 0 0 80px rgba(0, 180, 216, 0.2)' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        }
      },
      backgroundImage: {
        'water-gradient': 'linear-gradient(135deg, #0077FF 0%, #00B4D8 50%, #48CAE4 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #0D2347 40%, #0077FF 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,119,255,0.1), rgba(0,180,216,0.05))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
      },
      boxShadow: {
        'water': '0 8px 32px rgba(0, 119, 255, 0.15)',
        'water-hover': '0 16px 48px rgba(0, 119, 255, 0.25)',
        'glow': '0 0 30px rgba(0, 119, 255, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
