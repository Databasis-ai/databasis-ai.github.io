/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCurrentOrganization } from '@/utils/hooks/use-organization';
import AddSource from './overview/AddSource';
import SourceOverlay from "./overview/SourceOverlay";
import { trpc } from '@api';
[
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"name"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"description"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"provider"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"premisis"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"status"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"connectionString"
			],
	},
	{
			"code": "invalid_type",
			"expected": "string",
			"received": "undefined",
			"path": [
					"organizationId"
			],
	}
]

const SourcesTable = function () {
	const { organization } = useCurrentOrganization();
	if (!organization) return <></>

	const { data: sources } = trpc.auth.getSources.useQuery({ organizationId: organization.id });
	const { mutate: createOrUpdateSource } = trpc.auth.createOrUpdateSource.useMutation();

	const saveSource = (source: any) => {
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