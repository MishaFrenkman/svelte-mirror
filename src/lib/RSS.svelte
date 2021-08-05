<script lang="ts">
	import { onMount } from 'svelte';

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
		const body = await response.json();
		const { rss } = JSON.parse(body.rss);

		articles = rss.channel.item;
		articleIndex = 0;
	};

	const replacArticle = () => (articleIndex = (articleIndex + 1) % articles.length);

	let interval = setInterval(fetchRSS, ARTICLE_INTERVAL);
	let timeInterval = setInterval(replacArticle, REPLACE_INTERVAL);

	onMount(async () => {
		fetchRSS();
		return () => {
			clearInterval(interval);
			clearInterval(timeInterval);
		};
	});
</script>

{#if articles.length}
	<h3>{articles[articleIndex].title}</h3>
	<p>{articles[articleIndex].description}</p>
{/if}
