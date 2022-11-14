/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'mobile': {'max': '375px'},
      'destkop': '1366px',
    },
    extend: {
      colors: {
        pink: 'hsl(var(--color-pink) / <alpha-value>)',
        lightpink: 'hsl(var(--color-lightpink) / <alpha-value>)',
        lightred: 'hsl(var(--color-lightred) / <alpha-value>)',
        verydarkcyan:  'hsl(var(--color-verydarkcyan) / <alpha-value>)',
        verypaleblue: 'hsl(var(--color-verypaleblue) / <alpha-value>)',
      },

      fontFamily: {
        poppins: ['Poppins'],
        opensans: ['Open Sans'],
      }
    },
  },
  plugins: [],
}
