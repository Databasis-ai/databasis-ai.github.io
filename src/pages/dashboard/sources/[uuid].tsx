import SourcesInspect from '@/components/pages/dashboard/sources/inspect';

const SourceInspectViewPage = ({uuid}) => {
	return <SourcesInspect uuid={uuid} />;
}

export const getServerSideProps	= async (context: { params: any; }) => {
	const { params } = context;

	return {
		props: {
			uuid: params?.uuid
		}
	};
}

SourceInspectViewPage.requireAuthorization = true;

export default SourceInspectViewPage;
