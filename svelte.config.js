import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const prod = process.env.NODE_ENV === 'prod';
// const dev = 'production' === 'development';
// TODO change whenever deploying
// const dev = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true })],
	kit: {
		adapter: adapter({
			// pages: 'docs',
			// assets: 'docs',
			// fallback: null,
			// precompress: false
		})
		// paths: { base: '/my-utilities' }
		// trailingSlash: 'always',
	}
};

export default config;
