import { motion } from "framer-motion";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from '../env/constants';
import { RoundShape, TextBlock, TextRow } from 'react-placeholder/lib/placeholders';
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import dynamic from 'next/dynamic';

const GitGraph = dynamic(() => import('./GitGraph'), { ssr: false });
const codeString = `
	SELECT
		name,
		address,
		city
	FROM users u JOIN addresses a ON u.id = a.user_id
	AS OF '12-12-2020 12:00:00';
`;

const Phone: React.FC = () => (
	<div className="mockup-window mt-12 border bg-base-300">
		<div className="flex justify-center px-4 py-16 overflow-scroll bg-gradient-to-r from-cyan-500 to-blue-500">
			<div className="p-2">
				<div className="">
					<CopyBlock
						text={codeString}
						language={'postgresql'}
						showLineNumbers={false}
						wrapLines
						theme={dracula}
						style={{ fontSize: '4.5rem' }}
					/>
				</div>
				<motion.ul
					initial="hidden"
					animate="show"
					variants={{
						show: {
							transition: {
								staggerChildren: .25,
							},
						},
					}} className="mt-3 p-0 grid gap-2">
					<motion.li variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
						<div className="grid grid-cols-8 gap-4 p-5 bg-gray-100 rounded-md shadow-lg shadow-indigo-500/40">
							<div className="col-span-2">
								<table className="min-w-full divide-y divide-gray-300 text-center">
									<thead>
										<tr>
											<th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0">
												Column
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										<tr >
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
												name
											</td>
										</tr>
										<tr >
											<td className=" cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 rounded-lg shadow-md hover:shadow-lg bg-blue-500 p-4">
												address
											</td>
										</tr>
										<tr >
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
												city
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-span-6">
								<GitGraph />
							</div>

						</div>
					</motion.li>
					{Array.from({ length: 5 }).map((_, i) => (
						<motion.li key={i} variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
							<div className="flex flex-wrap  p-5 bg-gray-100 rounded-md shadow-lg shadow-indigo-500/40	h-36">
								<div className="w-auto pr-4">
									<RoundShape color='#CDCDCD' style={{ width: 30, height: 30 }} />
								</div>
								<div className="flex-1 mt-2">
									<TextBlock rows={1} color='#CDCDCD' />
								</div>
								<div className="w-full">
									<TextRow style={{ height: 10, width: 125 }} color='#CDCDCD' />
								</div>
								<div className="w-full">
									<TextRow style={{ height: 10, width: 250 }} color='#CDCDCD' />
									<TextRow style={{ height: 10, width: 250 }} color='#CDCDCD' />
									<TextRow style={{ height: 10, width: 250 }} color='#CDCDCD' />
								</div>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</div>
	</div>)

export default Phone;