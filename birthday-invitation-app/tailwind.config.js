/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2.5s steps(40, end), blink 0.75s step-end infinite',
        blink: 'blink 1s step-end infinite',
        shrinkbar: "shrinkbar 1s ease-out forwards",
        fadein: "fadein 1s ease-in forwards",
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        shrinkbar: {
           '0%': { height: '2px' },
           '100%': { height: '0', opacity: '0' },
        },
        fadein: {
           '0%': { opacity: '0' },
           '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

