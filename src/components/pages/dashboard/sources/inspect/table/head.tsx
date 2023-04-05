

const Head = () => {
	return <thead className=" text-xs  uppercase  bg-gray-700 dark:text-gray-400">
		<tr>
			<th scope="col" className="p-4">
				<div className="flex items-center">
					<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
					<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
				</div>
			</th>
			<th scope="col" className="px-6 py-3">
				Product name
			</th>
			<th scope="col" className="px-6 py-3">
				Color
			</th>
			<th scope="col" className="px-6 py-3">
				Category
			</th>
			<th scope="col" className="px-6 py-3">
				Price
			</th>
			<th scope="col" className="px-6 py-3">
				Action
			</th>
		</tr>
	</thead>
}

export default Head;