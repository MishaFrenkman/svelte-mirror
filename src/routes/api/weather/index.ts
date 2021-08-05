import type { EndpointOutput, Request } from '@sveltejs/kit';
import { variables } from '$lib/utils/variables';

export async function get({ query }: Request): Promise<EndpointOutput> {
	const lat = query.get('lat');
	const long = query.get('long');
	const response = await fetch(`${variables.WEATHER_URL}/${lat},${long}?units=ca`);
	const result = await response.json();

	return {
		body: {
			weather: result
		}
	};
}
