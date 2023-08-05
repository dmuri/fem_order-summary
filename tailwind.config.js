/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "sans": "var(--font-red-hat)",
    },
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/images/pattern-background-mobile.svg')",
        'desktop-pattern': "url('/images/pattern-background-desktop.svg')",
        'illustration-hero': "url('/images/illustration-hero.svg')",
      },
    },
  },
  plugins: [],
}
