<script lang="ts">
	import { onMount } from 'svelte';

	const lat = '50.110924';
	const long = '8.682127';
	let skycons;

	type Temp = {
		temperature: number;
		summary: string;
		icon: string;
	};

	let currentWeather: Partial<Temp> = {};

	const fetchWeather = async () => {
		const response = await fetch(`/api/weather?lat=${lat}&long=${long}`);
		const { weather } = await response.json();

		currentWeather = weather;

		skycons.add('iconCurrent', currentWeather.icon);
		skycons.play();
	};

	const initializeSkycons = async () => {
		skycons = new Skycons({ color: 'black' });
	};

	onMount(() => {
		fetchWeather();
	});
</script>

<svelte:head>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/skycons/1396634940/skycons.min.js"
		on:load={initializeSkycons}></script>
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<div class="flex items-center">
		<span class="mr-4 text-4xl text-bold">{currentWeather.temperature}°C</span>
		<canvas id="iconCurrent" width="60" height="60" />
	</div>
	<p class="text-xl">{currentWeather.summary}</p>
</div>
