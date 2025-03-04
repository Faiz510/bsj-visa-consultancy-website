import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#FEC60D',
        primary: '#00011A',
        secondary: '#242C4F',
        background: '#F3F4F6',
      },
    },
  },
  plugins: [],
};

export default config;
