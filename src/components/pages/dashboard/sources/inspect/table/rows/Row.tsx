import { useState } from 'react';

const Row = ({ row, key }: any) => {
	const [showHistory, setShowHistory] = useState<boolean>(false);

	return (
		<tr key={`row-${key}`} className="hover:scale-[1.003] hover:bg-gray-900	transform-gpu transition-all	duration-175 cursor-pointer	backdrop-blur	border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
			{row.map((columnContent: any, index: number) =>
				<td key={`index-row-${index}`} className='px-6 py-4'> {columnContent}</td>)}
			<td className="px-2 py-4">
				<button onClick={() => setShowHistory(!showHistory)} className="font-medium text-blue-300 dark:text-blue-500 hover:underline">History {!showHistory ? '⬇️' : '⬆️'}</button>
			</td>
		</tr>
	)
}

export default Row;