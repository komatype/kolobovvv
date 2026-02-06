import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lineyka)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-lineyka)', 'ui-monospace', 'SFMono-Regular'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        fadeUp: 'fadeUp 0.8s ease-out both',
        fadeIn: 'fadeIn 1s ease-out both',
      },
      boxShadow: {
        card: '0 20px 40px -32px rgba(0,0,0,0.35), 0 6px 16px -12px rgba(0,0,0,0.18)',
        cardHover: '0 30px 60px -30px rgba(0,0,0,0.4), 0 12px 24px -10px rgba(0,0,0,0.22)',
      },
    },
  },
  plugins: [],
}

export default config
