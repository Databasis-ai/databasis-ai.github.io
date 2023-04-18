import { Modal } from "flowbite-react";
import { type Source } from "@prisma/client";
import SourceForm from "./SourceForm";

const SourceModal = ({
	saveSource,
	sourceIsOpen,
	onCloseSourceModal,
	source,
	title }: {
		sourceIsOpen: boolean;
		onCloseSourceModal: () => void;
		source: Source;
		title: string;
		saveSource: (source: Source) => Promise<void>;
	}) => {

	return (
		<Modal onClose={() => onCloseSourceModal()} show={sourceIsOpen} className="w-full h-full bg-opacity-50">
			<Modal.Header className="border-b !p-6 border-gray-700">
				<strong>{title}</strong>
			</Modal.Header>
			<SourceForm source={source} saveSource={saveSource} onCloseSourceModal={onCloseSourceModal} />
		</Modal>
	)
}

export default SourceModal;