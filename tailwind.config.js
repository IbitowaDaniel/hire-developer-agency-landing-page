/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#343D48', // body color and primary color
        text_secondary: '#02073E', // secondary body color
        heading: '#02073E', // primary heading color
        heading_secondary: '#343D48', // heading color
        background: '#FFFFFF', // body background color
        background_secondary: '#F9FBFD', // secondary background color
        border_color: '#E9EDF5', // border color
        primary: '#8D448B', // primary button and link color
        secondary: '#793677', // secondary color - can be used for hover states
        black: '#0F2137', // black color
        gray: '#F8FAFC',
        muted: '#7B8188', // muted color
        accent: '#609', // a contrast color for emphasizing UI
      },
      keyframes: {
        playPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        playPulseAnim: 'playPulse 1.5s ease-out infinite',
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },
  },
  plugins: [],
}
