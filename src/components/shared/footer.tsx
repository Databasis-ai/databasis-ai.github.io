
import Image from "next/image";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import { COMMON_PAGES } from "../navigation/Header";

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
							{
								COMMON_PAGES.map((page, index) =>
								<li key={`footer-links-${index}`} className="inline-flex p-6">
								<Link href={page.href} className="inline-block text-gray-500 hover:text-gray-600 font-bold">
										{page.name}
									</Link>
								</li>
								)
							}
						</ul>
						<div className="flex flex-wrap justify-center -m-1.5 mb-10">
							<div className="w-auto p-1.5">
								<Link className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href='https://github.com/rowvolution' target="_blank" >
									<AiOutlineGithub size={25}></AiOutlineGithub>
								</Link>
							</div>
							<div className="w-auto p-1.5">
								<Link className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full" href='https://twitter.com/rowvolution_io' target="_blank" >
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