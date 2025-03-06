/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    keyframes: {
      scroll: {
        '0%': { transform: 'translate(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      customPing: {
        '0%': { transform: 'scale(0.7)', opacity: '1' },
        '50%': { transform: 'scale(1.2)', opacity: '0.5' },
        '100%': { transform: 'scale(2)', opacity: '0' },
      },
    },
    animation: {
      scroll: 'scroll 50s linear infinite',
      spin: 'spin 1s linear infinite',
      customPing: 'customPing 1.5s linear infinite',
    },
  },
  plugins: [],
};
