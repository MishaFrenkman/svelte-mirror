import preprocess from 'svelte-preprocess';
// import node from '@sveltejs/adapter-node';
// import static from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
		// adapter: static(),
		// adapter: node()
	}
};

export default config;
