module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: '0.55rem'
			},
			borderRadius: {
				'4xl': '2em',
				'5xl': '3em',
				'6xl': '4em'
			},
			padding: {
				11.5: '2.97em'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
