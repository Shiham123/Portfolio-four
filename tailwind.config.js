/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#1f1f1f",
			secondary: "#28e98c",
			primaryFont: "#ffffff",
			secondaryFont: "#999979",
		},
		extend: {fontFamily: {Inter: ["Inter", "sans-serif"]}},
	},
	plugins: [],
}
