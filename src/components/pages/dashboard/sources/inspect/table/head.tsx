type HeadProps = {
	rowNames: string[]
}

const Head = ({rowNames}: HeadProps) => {
	return <thead className=" text-xs  uppercase  bg-gray-700 dark:text-gray-400">
		<tr>
			{
				rowNames.map((name, index) => {
					return <th key={`head-${index}`} scope="col" className="px-6 py-3">
						{name}
					</th>
				})
			}
			<th key={`head-open`} scope="col" className="px-1"></th>
		</tr>
	</thead>
}

export default Head;