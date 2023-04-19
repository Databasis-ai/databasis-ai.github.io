import { prisma } from '../../../db/client';

export type CreateOrEditSourceInput = {
	id?: string
	name: string
	description: string
	provider: string
	premisis: string
	status: string
	connectionString: string
	organizationId: string
}

export default async function handler(
	input: CreateOrEditSourceInput | undefined
) {
	if (!input) return;
	const { id, name, description, provider, premisis, status, connectionString, organizationId } = input;
	return await await prisma.source.upsert({
		where: {
			id: id || ''
		},
		update: {
			name,
			description,
			provider,
			premisis,
			status,
			connectionString,
			organizationId
		},
		create: {
			id,
			name,
			description,
			provider,
			premisis,
			status,
			connectionString,
			organizationId
		}
	});
}
