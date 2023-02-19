/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./index.css","./src/**/*.jsx",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  important: true,
  // darkMode: 'media',
  // plugins: [
  //   require('flowbite/plugin')
  // ],
  theme: {
      extend: {
        fontFamily: {
          'body': ['La Belle Aurore'],
        },
        keyframes: {
          rubber: {
            '0': { transform: 'scale3d(1, 1, 1)'},
            '30%': { transform: 'scale3d(1.25, 0.75, 1)'},
            '40%': { transform: 'scale3d(0.75, 1.25, 1)'},
            '50%': { transform: 'scale3d(1.15, 0.85, 1)'},
            '65%': { transform: 'scale3d(0.95, 1.05, 1)'},
            '75%': { transform: 'scale3d(1.05, .95, 1)'},
          },
          fade: {
            '0%': {opacity: 0,transform: 'translateY(25px)' },
            '100%': {opacity: 1,transform: 'translateY(0)' },
                    },
          wiggle: {
                      '0%, 100%': { transform: 'rotate(-3deg)' },
                      '50%': { transform: 'rotate(3deg)' },
                    }
  
          },
        
        animation: {
          rubber: 'rubber 1s',
          fadein: 'fade 2s linear',
          wiggle: 'wiggle 1s ease-in-out infinite',

      },
     
    },
  }
}
