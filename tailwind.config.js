/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "brand-gold": "#f4b434",
        "brand-gold-dark": "#b8810d",
        "primary-blue": "#1A73E8",
        "primary-green": "#34A853",
        "primary-yellow": "#f4b434",
        "primary-red": "#EA4335",
        "background-light": "#FFFFFF",
        "background-dark": "#202124",
        "surface-light": "#F8F9FA",
        "surface-dark": "#303134",
        "text-primary-light": "#202124",
        "text-primary-dark": "#E8EAED",
        "text-secondary-light": "#5F6368",
        "text-secondary-dark": "#9AA0A6",
      },
      fontFamily: {
        "display": ["Google Sans", "sans-serif"],
        "body": ["Roboto", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
