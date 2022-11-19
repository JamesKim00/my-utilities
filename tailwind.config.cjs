/** @type {import('tailwindcss').Config} */

const five = Array.from({ length: 5 }).fill('');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: [...five.map((_, i) => `top-[${i * 20}%]`)]
};
