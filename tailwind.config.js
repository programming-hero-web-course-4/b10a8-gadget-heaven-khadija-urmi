/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: ' #9538E2.'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

