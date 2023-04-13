
import { env } from '../../../../env/server.mjs';
type GoogleCloudRunAdvertisingInput = {
	website: string
}
type GoogleCloudRunAdvertisingOutput = {
	title: string
	summary: string
}

export default async function handler(
	input: GoogleCloudRunAdvertisingInput
) {

	const rawResponse = await fetch(`${env.GOOGLE_CLOUD_RUN_API}?website=${input.website}`);

	const gcloudJSON = await rawResponse.json() as GoogleCloudRunAdvertisingOutput

	return {
		summary: gcloudJSON.summary,
		title: gcloudJSON.title
	}
}
