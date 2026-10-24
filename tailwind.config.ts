import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const token = (name: string): string => `oklch(var(--${name}) / <alpha-value>)`;

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: token('background'),
  			foreground: token('foreground'),
  			card: {
  				DEFAULT: token('card'),
  				foreground: token('card-foreground')
  			},
  			popover: {
  				DEFAULT: token('popover'),
  				foreground: token('popover-foreground')
  			},
  			primary: {
  				DEFAULT: token('primary'),
  				foreground: token('primary-foreground')
  			},
  			secondary: {
  				DEFAULT: token('secondary'),
  				foreground: token('secondary-foreground')
  			},
  			muted: {
  				DEFAULT: token('muted'),
  				foreground: token('muted-foreground')
  			},
  			accent: {
  				DEFAULT: token('accent'),
  				foreground: token('accent-foreground')
  			},
  			brand: token('brand'),
  			border: token('border'),
  			input: token('input'),
  			ring: token('ring')
  		},
  		fontFamily: {
  			sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
  			mono: [
  				['var(--font-mono)', ...defaultTheme.fontFamily.mono],
  				{ fontVariationSettings: '"wdth" 87.5' }
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'var(--radius)',
  			sm: 'var(--radius)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
