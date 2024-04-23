module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure to include tsx and ts extensions
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        questrial: ['"Questrial"', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
