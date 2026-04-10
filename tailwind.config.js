/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        claude: {
          bg: '#1A1614',
          card: '#231E1B',
          cardHover: '#2A2421',
          border: '#3D3330',
          orange: '#D4774A',
          orangeLight: '#E8926A',
          orangeDark: '#B85D34',
          warm: '#F5EFE8',
          muted: '#9C8B7E',
          subtle: '#6B5B53',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
