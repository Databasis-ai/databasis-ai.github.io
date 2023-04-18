import { useState } from 'react';
import { HiPlus } from "react-icons/hi";
import { SiGooglecloud, SiAmazonaws } from "react-icons/si";
import { Modal, Label, TextInput, Textarea, Button } from "flowbite-react";
import { type Source } from "@prisma/client";

const SourceForm = ({ source, saveSource, onCloseSourceModal }: { source: Source, saveSource: (source: Source) => Promise<void>, onCloseSourceModal: () => void }) => {

	const [editingSource, setEditingSource] = useState<Source>(source);
	const handleChange = (e: { target: { id: string; value: string; }; }) => {
		setEditingSource(values => ({ ...values, [e.target.id]: e.target.value }));
	}

	return <>
		<Modal.Body>
			<form>
				<div className="mb-4 grid grid-cols-1 gap-y-2">
					<Label htmlFor="name">Source Name</Label>
					<TextInput
						id="name"
						name="name"
						value={editingSource.name || ""}
						onChange={handleChange}
						placeholder="Production DB 🦁"
					/>
				</div>
				<div className="mb-4 grid grid-cols-1 gap-y-2">
					<Label htmlFor="connectionString">Connection String</Label>
					<TextInput
						id="connectionString"
						name="connectionString"
						type="password"
						value={editingSource.connectionString || ""}
						onChange={handleChange}
						placeholder="postgres://postgres:password@0.0.0.0:5432/mydb"
					/>
				</div>
				<Label htmlFor="provider">Premisis</Label>
				<div className="mb-4 grid grid-cols-2 gap-x-8">
					<div className={`w-full cursor-pointer justify-center flex border-2 rounded-lg p-2 ${editingSource.provider == 'gcp' && 'border-blue-500'}`} onClick={() => handleChange({target: {id: 'provider', value: 'gcp'}})}>
						<SiGooglecloud color={'blue'} size={25} />
						<p className="pl-3 text-gray-800">GCP PGSql</p>
					</div>
					<div className={`w-full cursor-pointer justify-center flex border-2 rounded-lg p-2 ${editingSource.provider == 'aws' && 'border-blue-500'}`} onClick={() => handleChange({target: {id: 'provider', value: 'aws'}})}>
						<SiAmazonaws size={25} color={'red'} />
						<p className="pl-3 text-gray-800">AWS Aurora</p>
					</div>
				</div>
				<div className="mb-4 grid grid-cols-1 gap-y-2">
					<Label htmlFor="description">Source Description</Label>
					<Textarea
						id="description"
						name="description"
						onChange={handleChange}
						placeholder="Super kewl	production database"
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
	</>
}

export default SourceForm;