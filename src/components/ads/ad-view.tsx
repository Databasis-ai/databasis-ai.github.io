import type { FC } from "react";
import { TextRow, RoundShape, TextBlock } from "react-placeholder/lib/placeholders";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from "../../env/constants";
import { motion } from "framer-motion";

const AdFilter: FC = () => {
	return <>
		<motion.ul initial="hidden" animate="show"
			variants={{
				show: {
					transition: {
						staggerChildren: .25,
					},
				},
			}} className="mt-3 overflow-hidden max-h-screen grid gap-2">
			{
				Array.from({ length: 2 }).map((_, i) => (
					<motion.li key={i} variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
						<div className="hover:scale-105	duration-150		cursor-pointer flex flex-wrap  p-5 bg-gray-100 rounded-md shadow-sm shadow-indigo-500/40	h-36">
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
				))
			}
		</motion.ul>
	</>
}


export default AdFilter;