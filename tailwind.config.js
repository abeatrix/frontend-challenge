module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-bg': "url('/images/headerBG.jpg')",
       }),
      boxShadow: {
        yellow: '0 15px 15px 10px rgba(254, 243, 199, var(--tw-text-opacity))',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
