// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocessor from "svelte-preprocess";

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs", 
			fallback: "index.html"
		}),
		// paths: {
		// 	base: dev ? "" : "/intentio-gh",
		// },
	}
};

export default config;
