module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			main: ["manrope"],
			type: ["PT mono"],
			script: ["Sacramento"],
		},
		extend: {
			colors: {
				primary: "#6DF3A5",
				secondary: "#7db6aa",
				bg: "#2D2F33",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
