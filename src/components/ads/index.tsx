import type { FC } from "react";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import AdView from "./ad-view";
import AdFilter from "./ad-filter";
import Switch from "../shared/switch";
import { useState, useMemo } from "react";

const Ads: FC = () => {
	const [annualBilling, setAnnualBilling] = useState(false);
  const period = useMemo(
    () => (annualBilling ? "yearly" : "monthly"),
    [annualBilling],
  );
	return <div>
		<div className="flex h-36 items-center border-b border-gray-200 bg-white">
			<MaxWidthWrapper>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl text-gray-600">
						Ads for All Sites
					</h1>
				</div>
			</MaxWidthWrapper>
		</div>
		<MaxWidthWrapper>
			<div className={`my-10 grid grid-cols-3 gap-5 max-h-screen`}>
				<div className="max-h-screen flex overflow-y-scroll scrollbar-hide flex-col items-center justify-center rounded-md border border-gray-200 bg-white">
					<div className="sticky top-0 bg-white z-10 flex	 flex-col w-full p-5 border-b-2 shadow-sm">
						<div className="text-center text-gray-600">
						<div className="relative mx-auto mb-14 flex max-w-fit items-center space-x-2">
        <p className="text-gray-600">Disabled</p>
        <Switch
          fn={setAnnualBilling}
          trackDimensions="h-6 w-12"
          thumbDimensions="h-5 w-5"
          thumbTranslate="translate-x-6"
          checked={false}
        />
        <p className="text-gray-600">Acitve</p>
      </div>
						</div>
					</div>
					<AdFilter />
				</div>
				<div className="col-span-2 flex px-4 flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
					<div className="flex items-center justify-between">
						<h1 className="text-2xl text-gray-600">Performance</h1>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	</div>
}

export default Ads;