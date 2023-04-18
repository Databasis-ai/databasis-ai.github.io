import SourceModal from "./SourceModal";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { useCurrentOrganization } from "@/utils/hooks/use-organization";
import { trpc } from '@api';

const EditSource = function ({ source }) {
	const [isOpen, setOpen] = useState(false);
	const { organization } = useCurrentOrganization();
	const { mutate: createOrUpdateSource } = trpc.auth.createOrUpdateSource.useMutation();

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="flex w-full items-center justify-center rounded-lg border-2 border-transparent py-2 font-semibold text-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<span className="sr-only">Edit card</span>
				<HiPencilAlt className="text-lg" />
			</button>
			<SourceModal source={source} title={'Edit source'} sourceIsOpen={isOpen} onCloseSourceModal={() => setOpen(false)} />
		</>
	);
};

export default EditSource;