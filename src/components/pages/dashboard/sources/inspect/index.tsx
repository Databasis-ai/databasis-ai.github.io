import {trpc} from '@api';
import {useEffect, useState} from 'react';



const Inspect = ({uuid}) => {
	const [newUUID, setNewUUID] = useState(uuid);
	const inspect = trpc.public.hello.useQuery({text: uuid});
	useEffect(() => {
		// setTimeout(() => {
		// 	inspect.refetch({text: newUUID});
		// }, 1000)
	})

	return <>{inspect.data?.greeting}</>;
}

export default Inspect;