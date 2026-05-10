import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F54927',
        'primary-container': '#da3615',
        'on-primary': '#ffffff',
        secondary: '#5f5e5e',
        'on-secondary': '#ffffff',
        'secondary-container': '#e2dfde',
        tertiary: '#5b5c5c',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#737575',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        surface: '#FFF7F2',
        'surface-dim': '#dadada',
        'surface-bright': '#FFF7F2',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f3f3f4',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-surface': '#1a1c1c',
        'surface-variant': '#e2e2e2',
        'on-surface-variant': '#5c403a',
        'surface-tint': '#F54927',
        'inverse-surface': '#2f3131',
        'inverse-on-surface': '#f0f1f1',
        outline: '#906f69',
        'outline-variant': '#e5beb6',
        background: '#FFF7F2',
        'on-background': '#1a1c1c',
      },
      borderRadius: {
        DEFAULT: '40px',
        lg: '40px',
        xl: '40px',
        '2xl': '40px',
        '3xl': '48px',
        full: '9999px',
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['32px', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '700' }],
      },
      spacing: {
        gutter: '24px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
