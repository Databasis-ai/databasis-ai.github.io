import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { SiGooglecloud, SiAmazonaws } from "react-icons/si";
// {
// 	uuid: "1",
// 	name: "Rowvolution DB",
// 	description: "This is a database",
// 	provider: "Postgres",
// 	premisis: "GCP",
// 	status: "operational"
// }
// ];

const AddSource = ({ onSourceAdd }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="h-full flex w-full items-center justify-center whitespace-nowrap rounded-lg border-2 border-dashed border-gray-200 px-5 py-2 font-semibold  hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
			>
				<svg
					className="h-6 w-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
						clipRule="evenodd"
					/>
				</svg>
				Add Source
				<br />
			</button>
			<Modal onClose={() => setOpen(false)} show={isOpen} className="w-full h-full bg-opacity-50">
				<Modal.Header className="border-b !p-6 border-gray-700">
					<strong>Add new source</strong>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="mb-4 grid grid-cols-1 gap-y-2">
							<Label htmlFor="sourceName">Source Name</Label>
							<TextInput
								id="sourceName"
								name="sourceName"
								placeholder="Production DB 🦁"
							/>
						</div>
						<Label htmlFor="provider">Premisis</Label>
						<div className="mb-4 grid grid-cols-2 gap-x-8">
							<div onclick={() => {}} className="w-full cursor-pointer justify-center flex">
								<SiGooglecloud color={'blue'} size={25} />
								<p className="pl-3 text-gray-800">GCP PGSql</p>
							</div>
							<div onclick={() => {}} className="w-full cursor-pointer justify-center flex">
								<SiAmazonaws size={25} color={'red'} />
								<p className="pl-3 text-gray-800">AWS Aurora</p>
							</div>
						</div>
						<div className="mb-4 grid grid-cols-1 gap-y-2">
							<Label htmlFor="description"></Label>
							<Textarea
								id="description"
								name="description"
								placeholder="On line 672 you ..."
								rows={6}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<div className="flex justify-between gap-x-3 w-full">
						<Button color="gray" className="text-red-700 color-black" onClick={() => setOpen(false)}>
							Close
						</Button>
						<Button color="gray" className="text-green-700" onClick={() => {
							onSourceAdd().then(
								() => setOpen(false)
							);
						}}>
							<HiPlus className="text-lg" />
							Add Source
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddSource;