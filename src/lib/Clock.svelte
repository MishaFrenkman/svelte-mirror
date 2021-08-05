<script lang="ts">
	import { onDestroy } from 'svelte';

	let date = new Date();
	let interval = setInterval(() => (date = new Date()), 1000);

	$: formattedDate = date.toLocaleDateString().replace(/\//g, '.');
	$: formattedTime = date.toLocaleTimeString();

	onDestroy(() => clearInterval(interval));
</script>

<h2>{formattedDate}</h2>
<h3>{formattedTime}</h3>
