import SourcesInspect from '@/components/pages/dashboard/sources/inspect';
import { trpc } from '@api';


const SourceInspectViewPage = ({ uuid }: { uuid: string }) => {
	const data = trpc.auth.getSecretMessage.useQuery();
	console.log(data)

	return <SourcesInspect uuid={uuid} />;
}

export const getServerSideProps = async (context: { params: any; }) => {
	const { params } = context;

	return {
		props: {
			uuid: params?.uuid
		}
	};
}

SourceInspectViewPage.requireAuthorization = true;

export default SourceInspectViewPage;
