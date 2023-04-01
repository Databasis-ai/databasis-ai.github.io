
import Image from "next/image";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer: React.FC = () => {
	return <>
		<section className="bg-gray-800 mt-12 overflow-hidden">
			<div className="mx-auto">
				<div className="py-16 bg-gray-900 rounded-3xl">
					<div className="flex flex-col justify-centers">
						<Link className="inline-block max-w-max mx-auto mb-10" href="/">
							<Image src="/images/logo-transparent.png" alt="" width={200} height={25} />
						</Link>
						<ul className="-m-6 mb-7 text-center">
							<li className="inline-flex p-6">
							<Link href="/pricing" className="inline-block text-gray-500 hover:text-gray-600 font-bold">
									Pricing
								</Link>
							</li>
							<li className="inline-flex p-6">
								<Link href="/docs" className="inline-block text-gray-500 hover:text-gray-600 font-bold">
									Docs
								</Link>
							</li>
						</ul>
						<div className="flex flex-wrap justify-center -m-1.5 mb-10">
							<div className="w-auto p-1.5">
								<Link className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href='https://github.com/rovolution' target="_blank" >
									<AiOutlineGithub size={25}></AiOutlineGithub>
								</Link>
							</div>
							<div className="w-auto p-1.5">
								<Link className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href='https://github.com/rovolution' target="_blank" >
									<AiOutlineTwitter size={25}></AiOutlineTwitter>
								</Link>
							</div>
						</div>
						<p className="text-gray-500 text-center font-bold">
							<span>Ⓒ Copyright. All rights reserved by </span>
							<Link href={'/'} className="text-blue-500 hover:text-blue-600">Rowvolution</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
}

export default Footer;