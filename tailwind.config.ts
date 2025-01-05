import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#788FBB",
        hoverprimary: "#586887",
        foreground: "#131921",
        gray: "#838383",
        footer: "#101317"
      },
      backgroundImage: {
        'body': "url('/bg.png')",
        'body-mobile': "url('/bg-mobile.png')",
        'action': "url('/action/action-bg.png')",
        'faq': "url('/faq/faq-bg.png')"
        },
      fontFamily: {
  			inter: ["var(--font-inter-regular)", "sans-serif"],
  			'inter-medium': ["var(--font-inter-medium)", "sans-serif"],
  			'inter-semibold': ["var(--font-inter-semibold)", "sans-serif"],
  			'inter-extralight': ["var(--font-inter-extralight)", "sans-serif"]
  		},
      container: {
        center: true,
        padding: '15px',
      },
      screens: {
        'xs': '380px',

        's': '480px',

        'sm': '640px',
  
        'md': '768px',

        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      },
      boxShadow: {
        custom: 'inset 1.18px 1.18px 2px rgba(237, 250, 255, 0.06), inset -1px -1px 2px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
