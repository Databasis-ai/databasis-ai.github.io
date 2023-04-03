import type { FC } from "react";
import { AiFillSetting, AiOutlineRadarChart } from "react-icons/ai";
import { GiSplashyStream } from "react-icons/gi";
import { TbDatabaseImport } from "react-icons/tb";
import Link from "next/link";

const ExampleSidebar: FC = function () {
	return (
		<aside id="cta-button-sidebar" className=" top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<AiOutlineRadarChart color="#6b7280" size={25}/>
							<span className="ml-3">Query</span>
						</a>
					</li>
					<li>
						<Link href="/dashboard/databases" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<TbDatabaseImport color="#6b7280" size={25}/>
							<span className="ml-3">Databases</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
								3
							</span>
						</Link>
					</li>
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<GiSplashyStream color="#6b7280" size={25}/>
							<span className="flex-1 ml-3 whitespace-nowrap">Streams</span>
							<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Pro</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<AiFillSetting	color="#6b7280" size={25}/>
							<span className="flex-1 ml-3 whitespace-nowrap">
								Settings
							</span>
						</a>
					</li>
				</ul>
				<div id="dropdown-cta" className="p-4 mt-6 rounded-lg  bg-blue-900" role="alert">
					<div className="flex items-center mb-3">
						<span className="text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-orange-200">Beta</span>
					</div>
					<p className="mb-3 text-sm  text-blue-400">
						We're currently in beta so don't hate us<br/>
						&nbsp;&nbsp;🥰<br/>
						👉👈
					</p>
				</div>
			</div>
		</aside>

	);
};



export default ExampleSidebar;
