import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import SpendAllocation from "@/components/reports/spend-allocation";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Image from '@/components/Image'
import { faker } from '@faker-js/faker';

export default function App() {
	return (
		<>
			<MaxWidthWrapper>
				<div className="my-10 gird grid-cols-1 gap 5">
					<div className="flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
						<div className="flex items-center justify-between">
							<h1 className="text-2xl text-gray-600">Investment Value</h1>
						</div>
						<ParentSize>
							{({ width }) => <SpendAllocation width={width} height={250} />}
						</ParentSize>
					</div>
				</div>
				<div className={`my-10 grid grid-cols-1 gap 5`}>
					{new Array(5).fill(0).map((_, i) => (
						<div key={i} className="mb-10 flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
							<div tabIndex={0} className="w-full collapse group">
								<div className="w-full collapse-title group-focus:blue-200 ">
									<div className="grid grid-cols-3 gap 5">
										<div className="col-span-1">
											<div className="text-lg">
												{faker.address.streetAddress()}
											</div>
											<div>
												<Image alt='image of house' imgClass="rounded-md " src='images/house_1.png' width={200} height={100}></Image>
											</div>
										</div>
										<div className="col-span-2">
											<div className="text-lg text-left">
												<div className="block">
													💵 | {faker.finance.amount()} / per month | {faker.finance.amount()} / per year
												</div>
												<div className="block">
													<div>
														{faker.datatype.number(3)} beds
													</div>
													<div>
														{faker.datatype.number(5)} baths
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="collapse-content group-focus:blue-200 ">
									<ParentSize>
										{({ width }) => <SpendAllocation width={width} height={250} />}
									</ParentSize>
								</div>
							</div>
						</div>
					))}
				</div>
			</MaxWidthWrapper>
		</>
	);
}
