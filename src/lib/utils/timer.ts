import { onDestroy } from 'svelte';

type TimerType = (cb: () => void, time: number) => void;

const timer: TimerType = (callback, milliseconds) => {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
};

export default timer;
