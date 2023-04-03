import type { FC } from "react";
import { AiOutlineRadarChart } from "react-icons/ai";
const ExampleSidebar: FC = function () {
	return (
		<aside id="cta-button-sidebar" className=" top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
				<ul className="space-y-2 font-medium">
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<AiOutlineRadarChart color="#6b7280" size={25}/>
							<span className="ml-3">Overview</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover: group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
							<span className="ml-3">Databases</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
								3
							</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover: group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
							<span className="flex-1 ml-3 whitespace-nowrap">Streams</span>
							<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Pro</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700">
							<svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover: group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
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
