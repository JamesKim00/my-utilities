/** @type {import('tailwindcss').Config} */

const five = Array.from({ length: 5 }).fill('');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				navbar: '#0f172a',
				darkBlue: '#004366',
				lightBlue: '#A8DADC'
			}
		}
	},
	plugins: [],
	safelist: [...five.map((_, i) => `top-[${i * 20}%]`)]
};
