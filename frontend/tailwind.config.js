module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: '0.55rem'
			},
			colors: {
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
	plugins: []
};
