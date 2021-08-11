<script lang="ts">
	import timer from './utils/timer';
	import dayjs from 'dayjs';

	let date = dayjs();
	timer(() => (date = dayjs()), 1000);

	$: formattedDate = date.format('dddd, MMMM D');
	$: formattedTime = date.format('HH:mm');
	$: formattedSeconds = date.format('ss');
</script>

<p>
	<span class="text-3xl">{formattedTime}</span>
	<span class="text-lg">{formattedSeconds}</span>
</p>
<p class="text-lg">{formattedDate}</p>
