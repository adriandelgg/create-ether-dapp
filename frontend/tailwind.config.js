const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: '0.55rem'
			},
			colors: {
				blueGray: colors.blueGray,
				trueGray: colors.trueGray,
				coolGray: colors.coolGray,
				warmGray: colors.warmGray,
				lime: colors.lime,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				orange: colors.orange,
				violet: colors.violet,
				fuchsia: colors.fuchsia,
				rose: colors.rose,
				green: {
					bp1: '#009900',
					bp2: '#99cc00',
					bp3: '#088308'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		base: false
	}
};
