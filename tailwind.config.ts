import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate';
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			fillUp: {
				'0%': { backgroundPosition: '0% 100%' }, // Start at bottom
				'100%': { backgroundPosition: '0% 0%' }, // Fill to the top
			  },
		  },
		  animation: {
			'fill-gradient': 'fillUp 3s ease-in forwards infinite', // Customize duration and easing
		  },
  		colors: {
			gradientRed: '#FF0000',
        	gradientOrange: '#FFA500', 
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			mute_foreground: 'hsl(var(--mute-foreground))',
			text_primary: 'hsl(var(--text-primary)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--brand))',
				brand: 'hsl(var(--brand))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: '#0284c7',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border-b))',
  			input: 'hsl(var(--input))',
			input_active: 'hsl(var(--input-active))',
			input_border: 'hsl',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [animate, typography,],
};
export default config;
