import { signIn, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from "next/link";

const Navigation = () => {

	const session = useSession();

	return <div className="container mx-auto overflow-hidden">
		<div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
			<div className="w-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-auto mr-14">
						<Link href="/">
							<Image width={300} height={100} src="/images/niche-ai-logo.png" alt="logo for homepage" />
						</Link>
					</div>
				</div>
			</div>
			<div className="w-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-auto hidden lg:block">
						<ul className="flex items-center mr-16">
							{
								session.status === 'authenticated' &&
								<li className="mr-9 font-medium hover:text-gray-700">
								<Link href="/portfolio">Portfolio</Link>
							</li>
							}
							<li className="mr-9 font-medium hover:text-gray-700">
								<Link href="/#features">Features</Link>
							</li>
							<li className="mr-9 font-medium hover:text-gray-700">
								<Link href="/#information">Information</Link>
							</li>
							<li className="mr-9 font-medium hover:text-gray-700">
								<Link href="/#pricing">Pricing</Link>
							</li>
							{
								session.status !== 'authenticated' && <li className="font-medium hover:text-gray-700">
								<button onClick={() => signIn()}>
									Sign In
								</button>
							</li>
							}
						</ul>
					</div>
					<div className="w-auto hidden lg:block">
						<div className="inline-block">
							<button onClick={() => {
								session.status === 'authenticated' ? window.location.href = '/api/auth/signout' : signIn();
							}} className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
								{session.status === 'authenticated' ? 'Sign Out' : 'Sign Up for Free'}
							</button>
						</div>
					</div>
					<div className="w-auto lg:hidden">
						<Link href="/">
							<svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="56" height="56" rx="28" fill="currentColor"></rect>
								<path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
			<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
			<nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
				<div className="flex flex-wrap justify-between h-full">
					<div className="w-full">
						<div className="flex items-center justify-between -m-2">
							<div className="w-auto p-2">
								<Link className="inline-block" href="/">
									<Image width={40} height={40} src="/flaro-assets/logos/flaro-logo-black.svg" alt="logo flaro" />
								</Link>
							</div>
							<div className="w-auto p-2">
								<Link className="navbar-burger" href="/">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center py-16 w-full">
						<ul>
							<li className="mb-12">
								<Link className="font-medium hover:text-gray-700" href="/">
									Features
								</Link>
							</li>
							<li className="mb-12">
								<Link className="font-medium hover:text-gray-700" href="/">
									Solutions
								</Link>
							</li>
							<li className="mb-12">
								<Link className="font-medium hover:text-gray-700" href="/">
									Resources
								</Link>
							</li>
							<li>
								<Link className="font-medium hover:text-gray-700" href="/">
									Pricing
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col justify-end w-full pb-8">
						<div className="flex flex-wrap">
							<div className="w-full">
								<div className="block">
									<button className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
}

export default Navigation;