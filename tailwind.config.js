/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js,ts,tsx}', 'index.scss','src/styles.css',"./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'primary': '',
      },
      fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']}
    },
  },
  plugins: [],
}

