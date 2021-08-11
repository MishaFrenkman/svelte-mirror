<script lang="ts">
	import Clock from '$lib/Clock.svelte';
	import Rss from '$lib/RSS.svelte';
	import Weather from '$lib/Weather.svelte';
</script>

<div class="grid grid-cols-4 grid-rows-4 p-12 h-screen gap-3">
	<section class="col-span-2">
		<Clock />
	</section>

	<section class="row-start-2 row-span-2 col-start-2 col-span-2 flex items-center justify-center">
		<!-- <div class="h-80 w-80 m-auto"> -->
		<Weather />
		<!-- </div> -->
	</section>

	<section class="row-start-4 col-span-full flex flex-col justify-end">
		<Rss />
	</section>
</div>
