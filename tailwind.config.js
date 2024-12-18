/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["Poppins", "Arial", "sans-serif"],
		},
		colors: {
		  primarytext: "#383838", // Back text colour
		  primarytextwhite: "#E3E3E3", // White text colour
		  secondarytext: "#9333EA", // Purple text colour
		  primary1: "#159D72", // Primary gradient Green Colour 1
		  primary2: "#07958F", // Primary gradient Green Colour 2
		  primaryHover1: "#2CA680", // Primary hover Green Colour 1
		  primaryHover2: "#1F9F9A", // Primary hover Green Colour 2
		  accent: "#F59E0B", // Secondary Green Colour
		  background: "#EFEFEF", // Custom background color
		},
		spacing: {
		  18: "4.5rem", // Custom spacing value
		  22: "5.5rem",
		},
		boxShadow: {
		  custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom box shadow
		},
		animation: {
		  first: "moveVertical 30s ease infinite",
		  second: "moveInCircle 20s reverse infinite",
		  third: "moveInCircle 40s linear infinite",
		  fourth: "moveHorizontal 40s ease infinite",
		  fifth: "moveInCircle 20s ease infinite",
		},
		keyframes: {
		  moveHorizontal: {
			"0%": {
			  transform: "translateX(-50%) translateY(-10%)",
			},
			"50%": {
			  transform: "translateX(50%) translateY(10%)",
			},
			"100%": {
			  transform: "translateX(-50%) translateY(-10%)",
			},
		  },
		  moveInCircle: {
			"0%": {
			  transform: "rotate(0deg)",
			},
			"50%": {
			  transform: "rotate(180deg)",
			},
			"100%": {
			  transform: "rotate(360deg)",
			},
		  },
		  moveVertical: {
			"0%": {
			  transform: "translateY(-50%)",
			},
			"50%": {
			  transform: "translateY(50%)",
			},
			"100%": {
			  transform: "translateY(-50%)",
			},
		  },
		},
	  },
	},
	plugins: [],
  };
  