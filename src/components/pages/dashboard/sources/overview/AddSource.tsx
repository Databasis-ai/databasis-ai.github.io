import { useState } from "react";
import SourceModal from './SourceModal';

const AddSource = ({ saveSource }: { saveSource: (source: any) => void }) => {
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
			<SourceModal saveSource={saveSource} title={'Add new source'} sourceIsOpen={isOpen} onCloseSourceModal={() => setOpen(false)} />
		</>
	);
}

export default AddSource;