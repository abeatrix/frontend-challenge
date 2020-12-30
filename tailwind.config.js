module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        yellow: '0 15px 15px 10px rgba(254, 243, 199, var(--tw-text-opacity))',
      },
      colors: {
        transparent: 'transparent',
        starmap: '#213748',
      },
      backgroundImage: theme => ({
        'hero': "url('/images/hero.png')",
       }),
       backgroundSize: {
       '50': '130%',
      },
      fontSize: {
        '2xs': '.2rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
