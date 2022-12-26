/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.css","./src/**/*.jsx"],
  theme: {
      extend: {
        keyframes: {
          rubber: {
            '0': { transform: 'scale3d(1, 1, 1)'},
            '30%': { transform: 'scale3d(1.25, 0.75, 1)'},
            '40%': { transform: 'scale3d(0.75, 1.25, 1)'},
            '50%': { transform: 'scale3d(1.15, 0.85, 1)'},
            '65%': { transform: 'scale3d(0.95, 1.05, 1)'},
            '75%': { transform: 'scale3d(1.05, .95, 1)'},
          }

  
          }
        },
        animation: {
        rubber: 'rubber 1s',
      }
  }
}
