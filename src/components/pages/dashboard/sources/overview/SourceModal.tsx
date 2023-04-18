import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { SiGooglecloud, SiAmazonaws } from "react-icons/si";
import { useState } from "react";

const SourceModal = ({
	saveSource,
	sourceIsOpen,
	onCloseSourceModal,
	source = {
		id: null,
		organizationId: '',
		name: 'source name',
		description: 'source description',
		provider: 'google',
		premisis: 'gcp',
		status: 'active',
		connectionString: 'postgres://localhost:5432',
	},
	title = '' }: {
		sourceIsOpen: boolean;
		onCloseSourceModal: () => void;
		source?: any;
		title?: string;
		saveSource: (source: any) => Promise<void>;
	}) => {

	const [editingSource, setEditingSource] = useState(source);

	return (
		<Modal onClose={() => onCloseSourceModal()} show={sourceIsOpen} className="w-full h-full bg-opacity-50">
			<Modal.Header className="border-b !p-6 border-gray-700">
				<strong>{title}</strong>
			</Modal.Header>
			<Modal.Body>
				<form>
					<div className="mb-4 grid grid-cols-1 gap-y-2">
						<Label htmlFor="sourceName">{editingSource.name}</Label>
						<TextInput
							id="sourceName"
							name="sourceName"
							placeholder="Production DB 🦁"
						/>
					</div>
					<Label htmlFor="provider">Premisis</Label>
					<div className="mb-4 grid grid-cols-2 gap-x-8">
						<div  className="w-full cursor-pointer justify-center flex">
							<SiGooglecloud color={'blue'} size={25} />
							<p className="pl-3 text-gray-800">GCP PGSql</p>
						</div>
						<div className="w-full cursor-pointer justify-center flex">
							<SiAmazonaws size={25} color={'red'} />
							<p className="pl-3 text-gray-800">AWS Aurora</p>
						</div>
					</div>
					<div className="mb-4 grid grid-cols-1 gap-y-2">
						<Label htmlFor="description"></Label>
						<Textarea
							id="description"
							name="description"
							placeholder=""
							rows={6}
						/>
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<div className="flex justify-between gap-x-3 w-full">
					<Button color="gray" className="text-red-700 color-black" onClick={onCloseSourceModal}>
						Close
					</Button>
					<Button color="gray" className="text-green-700" onClick={() => {
						saveSource(editingSource).then(
							() => onCloseSourceModal()
						);
					}}>
						<HiPlus className="text-lg" />
						Save Source
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	)
}

export default SourceModal;