/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'markazi': ['Markazi Text', 'serif'],
      },
      colors: {
        "light-color": "#D9D9D9",
        "background-color-2": "#495E57",
        "text-color-1": "#F4CE14",
      },
    },
  },
  plugins: [],
};
