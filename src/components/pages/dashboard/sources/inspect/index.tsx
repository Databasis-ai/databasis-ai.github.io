import { trpc } from '@api';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'flowbite-react';


const Inspect = ({ uuid }) => {
	const [newUUID, setNewUUID] = useState(uuid);
	const now = new Date;
	const timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() ,
	now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

	return <>
		<div className="p-4 relative overflow-x-auto shadow-md rounded-lg">
			<Breadcrumb aria-label="Data source inspection breadcrumbs">
				<Breadcrumb.Item >
					GCP
				</Breadcrumb.Item>
				<Breadcrumb.Item >
					Rowvolution Production
				</Breadcrumb.Item>
			</Breadcrumb>
			<div className='w-full flex justify-start gap-x-5 pb-4'>
				<div className='w-64'>
					<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
					<input type="text" id="first_name" className="caret-blue-500 focus:caret-indigo-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Table" required />
				</div>
				<div className='w-64'>
					<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
					<input type="text" id="first_name" className="caret-blue-500 focus:caret-indigo-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={''+ timestamp} required />
				</div>
			</div>
			<table className="w-full text-sm text-left text-gray-200 dark:text-gray-400">
				<thead className=" text-xs  uppercase  bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Color
						</th>
						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Apple MacBook Pro 17"
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							Laptop
						</td>
						<td className="px-6 py-4">
							$2999
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Microsoft Surface Pro
						</th>
						<td className="px-6 py-4">
							White
						</td>
						<td className="px-6 py-4">
							Laptop PC
						</td>
						<td className="px-6 py-4">
							$1999
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Magic Mouse 2
						</th>
						<td className="px-6 py-4">
							Black
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$99
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Apple Watch
						</th>
						<td className="px-6 py-4">
							Black
						</td>
						<td className="px-6 py-4">
							Watches
						</td>
						<td className="px-6 py-4">
							$199
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Apple iMac
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							PC
						</td>
						<td className="px-6 py-4">
							$2999
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Apple AirPods
						</th>
						<td className="px-6 py-4">
							White
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$399
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							iPad Pro
						</th>
						<td className="px-6 py-4">
							Gold
						</td>
						<td className="px-6 py-4">
							Tablet
						</td>
						<td className="px-6 py-4">
							$699
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Magic Keyboard
						</th>
						<td className="px-6 py-4">
							Black
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$99
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							Smart Folio iPad Air
						</th>
						<td className="px-6 py-4">
							Blue
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$79
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
					<tr className="	 border-b bg-gray-800 dark:border-gray-700 hover: dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
							AirTag
						</th>
						<td className="px-6 py-4">
							Silver
						</td>
						<td className="px-6 py-4">
							Accessories
						</td>
						<td className="px-6 py-4">
							$29
						</td>
						<td className="px-6 py-4">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
			<nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
				<span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold  text-white">1-10</span> of <span className="font-semibold  text-white">1000</span></span>
				<ul className="inline-flex items-center -space-x-px">
					<li>
						<a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 	 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							<span className="sr-only">Previous</span>
							<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</a>
					</li>
					<li>
						<a href="#" className="px-3 py-2 leading-tight text-gray-500 	 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
					</li>
					<li>
						<a href="#" className="px-3 py-2 leading-tight text-gray-500 	 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
					</li>
					<li>
						<a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 bg-gray-700 text-white">3</a>
					</li>
					<li>
						<a href="#" className="px-3 py-2 leading-tight text-gray-500 	 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
					</li>
					<li>
						<a href="#" className="px-3 py-2 leading-tight text-gray-500 	 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
					</li>
					<li>
						<a href="#" className="block px-3 py-2 leading-tight text-gray-500 	 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							<span className="sr-only">Next</span>
							<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>

	</>;
}

export default Inspect;