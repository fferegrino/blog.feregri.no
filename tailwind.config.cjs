/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
		require('@tailwindcss/typography'),
	],
	theme: {
		extend: {
			colors: {
				primary: "#9333EA",
				secondary: "#ff7e33", 
				info: "#0C63E7",
			},
			fontFamily: {
				'urbanist': ['Urbanist', 'sans-serif'],
			},
		},
	},
}