/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCurrentOrganization } from '@/utils/hooks/use-organization';
import AddSource from './overview/AddSource';
import SourceOverlay from "./overview/SourceOverlay";
import { trpc } from '@api';
import { type Source } from '@prisma/client';

const SourcesTable = function () {
	const { organization } = useCurrentOrganization();
	if (!organization) return <></>

	const { data: sources } = trpc.auth.getSources.useQuery({ organizationId: organization.id });
	const { mutate: createOrUpdateSource } = trpc.auth.createOrUpdateSource.useMutation();

	const saveSource = async (source: Source) => {
		createOrUpdateSource({ ...source, organizationId: organization.id });
	};

	return (
		<div className="bg-gray-900 rounded-lg">
			<div className="inline-block min-w-full align-middle">
				<div className="mb-6 flex ">
					<div className="grid grid-cols-3 gap-4 w-full p-6">
						<div className="h-64">
							<AddSource saveSource={saveSource} />
						</div>
						{
							sources?.map((source, index) => {
								return (
									<SourceOverlay source={source} key={index} saveSource={saveSource} />
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};





export default SourcesTable;