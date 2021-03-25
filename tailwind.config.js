module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: '#4b5563',
              },
            },
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
