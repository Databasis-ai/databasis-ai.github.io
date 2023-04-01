export const description =
	'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'
import Timeline from '@/components/Timeline'
import Typewriter from "typewriter-effect";
import { CodeBlock, dracula } from "react-code-blocks";
const CODE = `SELECT
    address
    FROM USERS U
    JOIN ADDRESSES A ON U.ID = A.USER_ID
    WHERE U.ID = '1'
AS OF '12-25-20';`;

export default function Heading() {
	return <>
		<section className="pt-6 pb-20 bg-gray-800 overflow-hidden w-full">
			<div className="w-full">
				<div className="mb-8 p-8 bg-gray-900 rounded-3xl">
					<div className="flex flex-wrap lg:items-center -m-8">
						<div className="w-full md:w-1/2 p-8">
							<div className="md:max-w-lg mx-auto">
								<span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">COLUMN LEVEL HISTORICAL DIFFS</span>
								<h1 className="font-heading mb-4 text-5xl text-white font-black tracking-tight">
									<span>
										POINT IN TIME&nbsp;
									</span>
									<span className="text-red-400">
									<Typewriter
											options={{ loop: true, delay: 25, deleteSpeed: 25 }}
											onInit={(typewriter) => {
												typewriter
													.typeString('FEATURE STORES')
													.pauseFor(3500)
													.deleteChars(14)
													.typeString("DATA LAKES")
													.pauseFor(3500)
													.deleteChars(10)
													.typeString("DATABASES")
													.pauseFor(3500)
													.deleteChars(9)
													.start();
											}} />
									</span>
								</h1>
								<p className="mb-6 text-xl text-gray-500 font-bold">
									Your data is your company. Why lose it?
								</p>
								<div className="flex flex-wrap -m-2">
									<div className="w-full md:w-auto p-2">
										<a className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">
											Get Started
										</a>
									</div>
									<div className="w-full md:w-auto p-2">
										<a className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full" href="#">
											Watch Video
										</a>
									</div>
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
						<div className="w-full sm:w-auto p-2">
							<img className="mx-auto" src="zanrly-assets/images/headers/brand-dark.png" alt="" />
						</div>
						<div className="w-full sm:w-auto p-2">
							<img className="mx-auto" src="zanrly-assets/images/headers/brand-dark2.png" alt="" />
						</div>
						<div className="w-full sm:w-auto p-2">
							<img className="mx-auto" src="zanrly-assets/images/headers/brand-dark3.png" alt="" />
						</div>
						<div className="w-full sm:w-auto p-2">
							<img className="mx-auto" src="zanrly-assets/images/headers/brand-dark4.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
}