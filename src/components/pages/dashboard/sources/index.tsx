/* eslint-disable jsx-a11y/anchor-is-valid */
import { trpc } from '@api';
import AddSource from './overview/AddSource';
import SourceOverlay from "./overview/SourceOverlay";

type Source = {
	uuid: string;
	name: string;
	description: string;
	provider: string;
	premisis: string;
	status: string;
}

const DataSources: Source[] = [
	{
		uuid: "1",
		name: "Rowvolution DB",
		description: "This is a production database I'll fucking dropkick you if you touch it",
		provider: "Postgres",
		premisis: "GCP",
		status: "operational"
	}
];

const SourcesTable = function () {
	return (
		<div className="bg-gray-900 rounded-lg">
			<div className="inline-block min-w-full align-middle">
				<div className="mb-6 flex ">
					<div className="grid grid-cols-3 gap-4 w-full p-6">
						<div className="h-64">
							<AddSource onSaveSource={() => null} />
						</div>
						{
							DataSources.map((source, index) => {
								return (
									<SourceOverlay source={source} key={index} onSaveSource={() => null} />
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