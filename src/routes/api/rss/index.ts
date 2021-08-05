// import variables from '$lib/utils/variables';
import type { EndpointOutput } from '@sveltejs/kit';
import { variables } from '$lib/utils/variables';
import xml2json from 'xml2json';

export async function get(): Promise<EndpointOutput> {
	const res = await fetch(variables.RSS_URL);
	const xml = await res.text();

	const rss = xml2json.toJson(xml);

	return {
		body: {
			rss
		}
	};
}
