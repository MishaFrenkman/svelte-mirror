import type { EndpointOutput, Request } from '@sveltejs/kit';
import { variables } from '$lib/utils/variables';

type Weather = {
	temperature: number;
	summary: string;
	icon: string;
};

export async function get({ query }: Request): Promise<EndpointOutput> {
	const lat = query.get('lat');
	const long = query.get('long');
	const res = await fetch(`${variables.WEATHER_URL}/${lat},${long}?units=ca`);
	const result = await res.json();

	const { temperature, summary, icon } = result.currently;

	const weather: Weather = {
		temperature: Math.round(temperature * 10) / 10,
		summary,
		icon
	};

	return {
		body: {
			weather
		}
	};
}
