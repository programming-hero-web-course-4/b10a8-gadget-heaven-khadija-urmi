/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        uniqueColor: ' #9538E2',
        btnPrimary: '#740098',
      },
      lineHeight: {
        'extra-loose': '60px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

