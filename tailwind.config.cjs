/** Tailwind v3 config — colours/fonts carried over from the original Macbryte design. */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      colors: {
        border: 'hsl(214.3 31.8% 91.4%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        coral: { DEFAULT: '#FF7557', light: '#FF9280', dark: '#C13A1B' },
        purple: { DEFAULT: '#8B7CFF', light: '#9F92FF', dark: '#6B5CE7' },
        yellow: { DEFAULT: '#FFD166', light: '#FFDC8A', dark: '#B8860B' },
        muted: { DEFAULT: 'hsl(210 40% 96.1%)', foreground: 'hsl(215.4 16.3% 46.9%)' },
        primary: { DEFAULT: 'hsl(222.2 47.4% 11.2%)', foreground: 'hsl(210 40% 98%)' },
        card: { DEFAULT: '#fff', foreground: 'hsl(222.2 84% 4.9%)' },
      },
      borderRadius: { lg: '0.75rem', md: 'calc(0.75rem - 2px)', sm: 'calc(0.75rem - 4px)' },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], outfit: ['Outfit', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
