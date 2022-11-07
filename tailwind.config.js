/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/{components,helpers,pages}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
    extend: {
      colors: {
        fenna: '#6366f1',
        github: '#333',
      },
    },
  },
  plugins: [],
};
