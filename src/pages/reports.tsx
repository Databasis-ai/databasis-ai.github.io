import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import SpendAllocation from "@/components/reports/spend-allocation";
import Converions from "@/components/reports/conversions";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useSession } from "next-auth/react";
import Visitors from "@/components/reports/visitors";

export default function App() {
	const session = useSession({ required: true })
	if (session.status === 'loading') return <></>;

	return (
		<>
			<div className="flex h-36 items-center border-b border-gray-200 bg-white">
				<MaxWidthWrapper>
					<div className="flex items-center justify-between">
						<h1 className="text-2xl text-gray-600">Reports for All Properties</h1>
					</div>
				</MaxWidthWrapper>
			</div>
			<MaxWidthWrapper>
				<div className="my-10 gird grid-cols-1 gap 5">
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-gray-600">Property Value</h1>
						</div>
						<ParentSize>
							{({ width }) => <Visitors width={width} height={400} />}
						</ParentSize>
					</div>
				</div>
				<div className={`my-10 grid grid-cols-2 gap-5`}>
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-gray-600">Some investment shit</h1>
						</div>
						<ParentSize>
							{({ width }) => <SpendAllocation width={width} height={400} />}
						</ParentSize>
					</div>
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-gray-600">More shit reporting</h1>
						</div>
						<ParentSize>
							{({ width }) => <Converions width={width} height={400} />}
						</ParentSize>
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	);
}
