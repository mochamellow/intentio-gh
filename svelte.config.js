// import adapter from '@sveltejs/adapter-auto';
import preprocessor from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter()
	}
};

export default config;
