import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import SpendAllocation from "@/components/reports/spend-allocation";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useSession } from "next-auth/react";

export default function App() {
	const session = useSession({ required: true })
	if (session.status === 'loading') return <></>;

	return (
		<>
			<MaxWidthWrapper>
				<div className="my-10 gird grid-cols-1 gap 5">
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-gray-600">Property Value</h1>
						</div>
						<ParentSize>
							{({ width }) => <SpendAllocation width={width} height={250} />}
						</ParentSize>
					</div>
				</div>
				<div className={`my-10 gird grid-cols-1 gap 5`}>
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div tabIndex={0} className="w-full collapse group">
							<div className=" w-full collapse-title   group-focus:blue-200 ">
								Focus me to see content
							</div>
							<div className="collapse-content   group-focus:blue-200 ">
								<p>tabIndex={0} attribute is necessary to make the div focusable</p>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</>
	);
}
