/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-clr' : '#0B0B0B',
        'secondary-clr' : '#0B0B0B',
        'btn-primary-clr': '#FF444A',
        'bg-primary-clr': '#fffffff2',
      },
    },
  },
  plugins: [require("daisyui")],
}

