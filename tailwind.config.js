/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'gray-green': '#e3e3e3',
      'gray-dark-green': '#1f5c58',
      ecru: '#F5F5DC',
      'dark-green': '#84A7A8',
      'light-green': '#F7F7F7',
    },

    extend: {
      backgroundImage: {
        'hero-background': "url('/src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
