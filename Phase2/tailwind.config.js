export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b5cff',
        accent: '#0ea5a4',
        warn: '#f97316',
        danger: '#ef4444'
      },
      boxShadow: {
        card: '0 6px 18px rgba(12, 24, 50, 0.06)',
        hover: '0 10px 30px rgba(12, 24, 50, 0.08)'
      }
    }
  },
  plugins: []
}
