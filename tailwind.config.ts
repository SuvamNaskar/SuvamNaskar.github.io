import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retroBg: '#e8e8e8',
        retroPanel: '#ffffff',
        retroAccent: '#c3c3c3',
        retroYellow: '#ffde59',
        retroCyan: '#5ce1e6',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'brutalist': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
