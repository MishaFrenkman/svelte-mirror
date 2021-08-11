<script lang="ts">
	import '../app.postcss';
</script>

<svelte:head>
	<title>Magic Mirror</title>
</svelte:head>

<slot />

<style>
	:global(html) {
		filter: invert(100%);
		background-color: #fff;
	}
</style>
