/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        shimmer: {
          /* The keyframes section defines a custom animation named "shimmer" that moves an element 100% horizontally over a duration of 1.5 seconds. */
          '100%':{transform: 'translateX(100%)'}
        }
      },
      /*The animation section associates the "shimmer" animation with the class name shimmer and makes it repeat infinitely.*/
      animation:{
        shimmer: 'shimmer 1.5s infinite'
      }
    },
  },
  plugins: [],
}