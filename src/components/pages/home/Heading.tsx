
import Timeline from '@/components/pages/shared/Timeline'
import Typewriter from "typewriter-effect";
import { CodeBlock, dracula } from "react-code-blocks";
import useViewportSize from '@/utils/hooks/use-viewport-size';
import { SiPostgresql, SiMysql, SiAmazondynamodb, SiRedis } from 'react-icons/si';
import { signIn } from 'next-auth/react';
const SMALL_SCREEN_CODE = `SELECT address
				FROM USERS
				WHERE ID = '1'
AS OF '12-25-20';`;

const	LARGE_SCREEN_CODE = `SELECT who PARTITION BY 'when' FROM what WHERE `;

export default function Heading() {
	const { width } = useViewportSize();
	const CODE = width < 1500 ? SMALL_SCREEN_CODE : LARGE_SCREEN_CODE;

	return <>
		<section className="pt-6 pb-20 bg-gray-800 overflow-hidden w-full">
			<div className="w-full">
				<div className="mb-8 p-8 bg-gray-900 rounded-3xl">
					<div className="flex flex-wrap lg:items-center -m-8">
						<div className="w-full md:w-1/2 p-8">
							<div className="md:max-w-lg mx-auto">
								<span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
									A Fourth Dimensional, Time-Segmented Data Platform	
									</span>
								<h1 className="font-heading mb-4 text-5xl text-white font-black tracking-tight">
									<span>
										TIME SAVING SOLUTIONS FOR&nbsp;
									</span>
									<span className="text-red-400">
									<Typewriter
											options={{ loop: true, delay: 25, deleteSpeed: 25 }}
											onInit={(typewriter) => {
												typewriter
													.typeString("DATA ENGINEERS")
													.pauseFor(3500)
													.deleteChars(9)
													.typeString("ANALYSTS")
													.pauseFor(3500)
													.deleteChars(8)
													.typeString("SCIENTISTS")
													.pauseFor(3500)
													.deleteChars(15)
													// .typeString('FEATURE STORE')
													// .pauseFor(3500)
													// .deleteChars(14)
													.start();
											}} />
									</span>
								</h1>
								<p className="mb-6 text-xl text-gray-500 font-bold">
									{/* Your data is your company. Why lose it? */}
								</p>
								<div className="flex flex-wrap -m-2">
									<div className="w-full md:w-auto p-2">
										<div className="cursor-pointer block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" onClick={() => signIn()}>
											Get Started 🧑‍🚀
										</div>
									</div>
									{/* <div className="w-full md:w-auto p-2">
										<a className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full" href="#">
											Watch Video
										</a>
									</div> */}
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-8">
							<div className='pb-5'>
								<CodeBlock
									text={CODE}
									language={'postgresql'}
									showLineNumbers={false}
									theme={Object.assign(dracula, { backgroundColor: 'transparent' })}
								/>
							</div>
							<div className="max-w-max  md:mr-0 overflow-hidden p-5">
								<Timeline />
							</div>
						</div>
					</div>
				</div>
				<div className="px-8 py-11 bg-gray-900 rounded-3xl">
					<div className="flex flex-wrap justify-center sm:justify-around -m-2">
						<div className="w-full sm:w-auto p-2 flex justify-center">
							<SiPostgresql size={65}/>
						</div>
						<div className="w-full sm:w-auto p-2 flex justify-center">
							<SiMysql	size={65}/>
						</div>
						<div className="w-full sm:w-auto p-2 flex justify-center">
							<SiAmazondynamodb size={65}/>
						</div>
						<div className="w-full sm:w-auto p-2 flex justify-center">
							<SiRedis size={65}/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
}