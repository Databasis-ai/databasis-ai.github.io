import { useState } from 'react';

const Row = ({ row }: any) => {
	console.log(row);

	const [showHistory, setShowHistory] = useState<boolean>(false);

	return (<tr className="	backdrop-blur	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
		<td className="w-4 p-4">
			<div className="flex items-center">
				<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
				<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
			</div>
		</td>
		<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
			Apple iMac
		</th>
		<td className="px-6 py-4">
			Silver
		</td>
		<td className="px-6 py-4">
			PC
		</td>
		<td className="px-6 py-4">
			$2999
		</td>
		<td className="px-6 py-4">
			<button onClick={() => setShowHistory(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">History</button>
		</td>
	</tr>)
}

export default Row;