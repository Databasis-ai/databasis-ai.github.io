import EditSource from "./EditSource"
import Link from "next/link"
import { Tag } from "@/components/pages/shared/Tag"
import { SiPostgresql } from "react-icons/si"


const OverlaySource = ({ source, key }: any) => {
	return (
		<div key={`source-id-${key}`} className="h-full max-h-70 rounded-lg bg-sky-50 p-4 shadow-md">
			<div className="flex h-auto items-center justify-between pb-4">
				<div className="text-base font-semibold text-gray-900">
					{source.name}
				</div>
				<div className="w-8">
					<EditSource source={source} />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
					{source.description}
				</div>
				<div className="flex pt-24  h-full justify-between">
					<div className="flex items-center justify-start">
						<Link href={"/dashboard/sources/7486129e-d364-11ed-afa1-0242ac120002"} className="-mr-3 text-blue-500">
							View data
						</Link>
					</div>
					<div className="flex items-center space-x-2 justify-center rounded-lg text-sm font-medium">
						<Tag color={'sky'} >
							operational
						</Tag>
						<Tag color={'amber'} >
							streaming
						</Tag>
						<Tag color={'emerald'} >
							<div className="p-1">
								<SiPostgresql size={20} />
							</div>
						</Tag>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OverlaySource;