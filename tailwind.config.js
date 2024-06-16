/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		borderRadius: {custom: "30px"},
		screens: {
			xxs: {min: "0px", max: "374px"},
			xs: {min: "375px", max: "639px"},
			sm: {min: "640px", max: "767px"},
			md: {min: "768px", max: "1023px"},
			lg: {min: "1024px", max: "1279px"},
			xl: {min: "1280px", max: "1535px"},
			"2xl": {min: "1536px"},
		},
		colors: {
			primary: "#1f1f1f",
			secondary: "#28e98c",
			primaryFont: "#ffffff",
			secondaryFont: "#999979",
			primaryBorder: "#565656",
			hoverColor: "#2dd986",
			paraColor: "#8a9999",
			bgSidebar: "#191919",
		},
		extend: {fontFamily: {Inter: ["Inter", "sans-serif"]}},
	},
	plugins: [],
}
