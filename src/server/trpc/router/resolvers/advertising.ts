
import { env } from '../../../../env/server.mjs';
type AdvertisingResolverInput = {
	website: string
}
type GoogleCloudRunAdvertisingOutput = {
	title: string
	summary: string
}

export default async function handler(
	input: AdvertisingResolverInput
) {

	const rawResponse = await fetch(`${env.GOOGLE_CLOUD_RUN_API}?website=${input.website}`);

	const gcloudJSON = await rawResponse.json() as GoogleCloudRunAdvertisingOutput

	return {
		summary: gcloudJSON.summary,
		title: gcloudJSON.title
	}
}
