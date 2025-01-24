import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens:{
		sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2208px",
        "5xl": "2560px",
        "6xl": "3072px",
        "7xl": "3584px",
        "8xl": "4096px",
        "9xl": "4608px",
        "10xl": "5120px",
        "11xl": "5632px",
        "12xl": "6144px",
	},
    extend: {
      fontFamily: {
        forum: ["var(--font-forum)"],
        arizonia: ["var(--font-arizonia)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
