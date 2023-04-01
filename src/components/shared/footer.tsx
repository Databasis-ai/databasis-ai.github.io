
import Image from "next/image";

const Footer: React.FC = () => {
	return <>
		<section className="bg-gray-800 overflow-hidden">
			<div className="mx-auto">
				<div className="py-16 bg-gray-900 rounded-3xl">
					<div className="flex flex-col justify-centers">
						<a className="inline-block max-w-max mx-auto mb-10" href="#">
							<img src="zanrly-assets/logos/zanrly-logo-xl-white.svg" alt="" />
						</a>
						<ul className="-m-6 mb-7 text-center">
							<li className="inline-flex p-6">
								<a className="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">
									Features
								</a>
							</li>
							<li className="inline-flex p-6">
								<a className="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">
									Docs
								</a>
							</li>
							<li className="inline-flex p-6">
								<a className="inline-block text-gray-500 hover:text-gray-600 font-bold" href="#">
									Pricing
								</a>
							</li>
						</ul>
						<div className="flex flex-wrap justify-center -m-1.5 mb-10">
							<div className="w-auto p-1.5"><a className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/footers/insta-dark.svg" alt="" /></a></div>
							<div className="w-auto p-1.5"><a className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/footers/twitter-dark.svg" alt="" /></a></div>
							<div className="w-auto p-1.5"><a className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href="#"><img src="zanrly-assets/images/fb-dark.svg" alt="" /></a></div>
						</div>
						<p className="text-gray-500 text-center font-bold">
							<span>Ⓒ Copyright. All rights reserved by </span>
							<a className="text-blue-500 hover:text-blue-600" href="#">
								Rowvolution
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
}

export default Footer;