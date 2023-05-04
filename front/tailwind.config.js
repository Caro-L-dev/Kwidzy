/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "darker-primary-color": "var(--darker-primary-color)",
        "txt-primary-color": "var(--txt-primary-color)",

        "secondary-color": "var(--secondary-color)",
        "darker-secondary-color": "var(--darker-secondary-color)",
        "txt-secondary-color": "var(--txt-secondary-color)",

        "tertiary-color": "var(--tertiary-color)",
        "darker-tertiary-color": "var(--darker-tertiary-color)",
        "txt-tertiary-color": "var(--txt-tertiary-color)",

        "correct-color": "var(--correct-color)",
        "darker-correct-color": "var(--darker-correct-color)",
        
        "mistake-color": "var(--mistake-color)",
        "darker-mistake-color": "var(--darker-mistake-color)",
      },
      backgroundImage: {
        'numerique': "url('../public/assets/images/keyboard.jpg')",
      },
    },
  },
  plugins: [],
}
