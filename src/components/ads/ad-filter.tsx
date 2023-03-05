import type { FC } from "react";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from "../../env/constants";
import { motion } from "framer-motion";
import { EyeIcon, CursorArrowRaysIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const ads = [
	{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	},{
		title: 'Find more for less with',
		description: 'This is a description for everything',
		platform: '',
		stats: [
			{
				name: 'click',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'impression',
				metric: Math.floor(Math.random() *100)
			},
			{
				name: 'conversion',
				metric: Math.floor(Math.random() *100)
			}
		],
	}
];

const AdFilter: FC = () => {
	return <>
		<motion.ul initial="hidden" animate="show"
			variants={{
				show: {
					transition: {
						staggerChildren: .25,
					}
				}
			}} className="pt-24 px-4 grid w-full scrollbar-hide max-h-screen gap-2">
			{
				ads.map((ad, i) => (
					<motion.li key={i} variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
						<div className="hover:scale-105 scrollbar-hide	duration-150		cursor-pointer flex flex-wrap p-5 bg-gray-100 rounded-md shadow-sm shadow-indigo-500/40	h-36">
							<div className="flex-1 mt-2">
								{ad.title}
							</div>
							<div className="w-full">
								{ad.description}
							</div>
							<div className="flex items-center justify-between">
								<div className="text-xs text-gray-600 flex-1 w-full">
									{
										ad.stats.map((stat, idx) => {
											return <div key={`stat-${idx}`} className={'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'}>
												{
													stat.name === 'impression' ?
													<EyeIcon className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-black-500" aria-hidden="true" /> :
													stat.name === 'click' ?
													<CursorArrowRaysIcon className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-black-500" aria-hidden="true" /> :
													stat.name==='conversion' ?
													<CheckCircleIcon className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-black-500" aria-hidden="true" /> :
													<></>
												}
												{stat.metric}
											</div>
										})
									}
								</div>
							</div>
						</div>
					</motion.li>
				))
			}
		</motion.ul>
	</>
}


export default AdFilter;

