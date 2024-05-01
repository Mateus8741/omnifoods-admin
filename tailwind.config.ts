import type { Config } from 'tailwindcss'
import { colors } from './src/theme/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    colors,
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
