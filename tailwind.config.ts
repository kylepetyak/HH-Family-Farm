import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Haskell Homestead
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c6cfc6',
          300: '#a2afa2',
          400: '#7d8c7d',
          500: '#627162',
          600: '#4d5a4d',
          700: '#404940',
          800: '#363c36',
          900: '#2f332f',
          950: '#181b18',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e6',
          300: '#f5e9d4',
          400: '#edd8b8',
          500: '#e4c69c',
          600: '#d4a86f',
          700: '#c28b4b',
          800: '#a17340',
          900: '#845f38',
          950: '#47301c',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fceae4',
          200: '#fad8cd',
          300: '#f5bfaa',
          400: '#ee9b7a',
          500: '#e47850',
          600: '#d15d35',
          700: '#af4b2a',
          800: '#904027',
          900: '#773926',
          950: '#401b10',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#2a2a2a',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#454545',
            '--tw-prose-headings': '#2a2a2a',
            '--tw-prose-links': '#627162',
            '--tw-prose-bold': '#2a2a2a',
            '--tw-prose-quotes': '#454545',
            '--tw-prose-quote-borders': '#627162',
            maxWidth: '75ch',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
