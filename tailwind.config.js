/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-green': '#00856F',
      'black-green': '#00453A',
      'light-green': '#DCE9E2',
      'beige': '#FFFAF1',
      'text-light': '#F7F9F9',
      'gray-h': '#212529',
      'gray-p': '#495057',
      'white': "#FFF"
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}