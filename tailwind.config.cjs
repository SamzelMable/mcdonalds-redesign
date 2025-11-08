// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mcyellow: '#FFC300',
        mcgold: '#F7B500',
        mcred: '#FF4D4D',
        mcgreen: '#004D40',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
