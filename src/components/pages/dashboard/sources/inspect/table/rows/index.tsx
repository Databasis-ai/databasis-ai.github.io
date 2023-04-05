import Row from './row';

const Rows = ({ rows }: any) => {
	return <tbody>
		{
			rows.map((row: any, index: any) => <Row key={`row-${index}`} row={row} />)
		}
	</tbody>
}

export default Rows;