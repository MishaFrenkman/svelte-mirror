<script lang="ts">
	import { onMount } from 'svelte';

	const lat = '50.110924';
	const long = '8.682127';

	let body: any;
	const fetchWeather = async () => {
		const response = await fetch(`/api/weather?lat=${lat}&long=${long}`);
		body = await response.json();

		console.log(body);
	};

	onMount(fetchWeather);
</script>

<h1>weather</h1>
