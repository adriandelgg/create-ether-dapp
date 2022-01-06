module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: "0.55rem"
			},
			colors: {
				green: {
					main: "#009C00",
					bp1: "#009900",
					bp2: "#99cc00",
					bp3: "#088308"
				}
			},
			borderRadius: {
				"4xl": "2em",
				"5xl": "3em",
				"6xl": "4em"
			},
			padding: {
				11.5: "2.97em"
			}
		}
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		base: false
	}
};
