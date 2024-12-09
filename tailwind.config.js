/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#F3743D',
        secondary: '#F3F3F3',
        grey: '#2C2C2C66',
      },
      background: {
        'custom-gradient': 'linear-gradient(90deg, #FFA279 0%, #F3743D 100%)',
      },
    },
  },
  plugins: [],
}
