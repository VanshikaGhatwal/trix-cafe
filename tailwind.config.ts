import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:   '#F7F3ED',
        cream:   '#EDE6DA',
        sand:    '#D9CEBC',
        beige:   '#C8B99A',
        espresso:'#2C1A0E',
        charcoal:'#1C1916',
        latte:   '#8B6343',
        gold:    '#B8975A',
        caramel: '#C17A3A',
        mist:    '#F0EBE3',
      },
      fontFamily: {
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        body:      ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
