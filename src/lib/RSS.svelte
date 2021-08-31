<script lang="ts">
	import { onMount } from 'svelte';
	import timer from './utils/timer';

	const ARTICLE_INTERVAL = 1000 * 60 * 60;
	const REPLACE_INTERVAL = 1000 * 30;

	type Article = {
		category: string;
		description: string;
		'dc:subjext': string;
		pubDate: string;
		title: string;
	};

	let articles: Article[] = [];
	let articleIndex = 0;

	const fetchRSS = async () => {
		const response = await fetch('/api/rss');
		const { rss } = await response.json();

		articles = rss.channel.item;
		articleIndex = 0;
	};

	const replacArticle = () => (articleIndex = (articleIndex + 1) % articles.length);

	timer(fetchRSS, ARTICLE_INTERVAL);
	timer(replacArticle, REPLACE_INTERVAL);

	onMount(async () => {
		fetchRSS();
	});
</script>

{#if articles.length}
	<!-- <h1 class="text-2xl text-center">News</h1> -->
	<h3 class="text-xl my-2">{articles[articleIndex].title}:</h3>
	<p class="text-gray-800">{articles[articleIndex].description}</p>
{/if}
