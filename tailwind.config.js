/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "Arial", "sans-serif"],
				reddit: ['"Reddit Sans"', 'sans-serif'],
			},
			colors: {
				primarytext: "#383838", //Back text colour
				primarytextwhite: "#E3E3E3", //White text colour
				secondarytext: "#9333EA", //White text colour
				primary1: "#159D72", // Primary gradian Green Colour 1
				primary2: "#07958F", // Primary gradian Green Colour 2
				primaryHover1: "#2CA680", // Primary gradian Green Colour 1
				primaryHover2: "#1F9F9A", // Primary gradian Green Colour 2
				accent: "#F59E0B", //  Secondary Green Colour
				background: "#EFEFEF", // Custom background color
			},
			spacing: {
				// Custom spacing (padding, margin, etc.)
				18: "4.5rem", // Custom spacing value
				22: "5.5rem",
			},
			boxShadow: {
				// Custom box shadows
				custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};