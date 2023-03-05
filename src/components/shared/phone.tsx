import { motion } from "framer-motion";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from '../../env/constants';
import { RoundShape, TextBlock, TextRow } from 'react-placeholder/lib/placeholders';
import Image from "next/image";

const Phone: React.FC = () => (<div className="mockup-phone ">
	<div className="camera"/>
	<div className="display">
		<div className="artboard artboard-demo phone-1">
			<div className=" overflow-scroll bg-gradient-to-r from-cyan-500 to-blue-500 " >
				<div className="p-2 pt-8">

					<motion.ul
						initial="hidden"
						animate="show"
						variants={{
							show: {
								transition: {
									staggerChildren: .25,
								},
							},
						}}
						className="mt-3 grid gap-2">
						<motion.li variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
							<div className="flex flex-wrap  p-5 bg-gray-100 rounded-md shadow-lg shadow-indigo-500/40	">
								<div className="w-auto pr-4">
									<Image alt='GA logo' src="/images/scraping-ads-website.png" width={20} height={20} quality={100} />
								</div>
								<div className="flex-1">
									<h3 className="text-md text-blue-800 font-xs">Enter your domain to generate an ad</h3>
								</div>
								<div className="w-full">
									<p className='text-xs italic text-gray-500'>https://placeholderurl.com</p>
								</div>
								<div className="w-full">
									<div className="p">
										<p className=" font-small leading-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat...</p>
									</div>
								</div>
							</div>
						</motion.li>
						<motion.li
							variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}
						>
							<div className="flex flex-wrap  p-5 bg-gray-100 rounded-md shadow-lg shadow-indigo-500/40	">
								<div className="w-auto pr-4">
									<Image alt='Facebook logo' src="/images/Facebook_Logo.png" width={20} height={20} quality={100} />
								</div>
								<div className="flex-1">
									<h3 className="text-md text-blue-800 font-xs">Enter your domain to generate an ad</h3>
								</div>
								<div className="w-full">
									<p className='text-xs italic text-gray-500'>https://placeholderurl.co</p>
								</div>
								<div className="w-full">
									<div className="p">
										<p className=" font-small leading-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat...</p>
									</div>
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
					</motion.ul >
				</div>
			</div>
		</div>
	</div>
</div>)

export default Phone;