/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				poppins: "poppins-semibold",
				urbanist: "urbanist-regular",
			},
		},
		colors: {
			pearl: "#E6E1C5",
			vodka: "#B7C3F3",
			lazuli: "#247BA0",
			gray: {
				700: "#262626",
				900: "#120309",
			},
			slate: {
				200: "#E2E8CE",
			},
			"steel-blue": "#348AAE",
		},
	},
	plugins: [],
};
