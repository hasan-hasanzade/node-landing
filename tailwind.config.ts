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
        foreground: "#131921",
        gray: "#838383",
      },
      backgroundImage: {
        'body': "url('/bg.png')",
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
      }
    },
  },
  plugins: [],
} satisfies Config;
