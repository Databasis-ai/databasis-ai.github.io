import { signIn } from 'next-auth/react';

export default function Prices() {
	return (
		<section className="py-16 bg-gray-800 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="mb-12 max-w-2xl mx-auto text-center">
					<h2 className="font-heading text-4xl md:text-5xl text-gray-100 font-black tracking-tight">Pricing that scales with you.</h2>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="w-full md:w-1/3 p-4">
						<div className="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
							<div className="flex-initial mb-6"><span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">Basic</span>
								<h2 className="font-heading text-4xl text-gray-100 font-black tracking-tight">Free</h2>
								<p className="mb-8 text-sm text-gray-700 font-bold">Developer</p>
								<ul>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">1,000,000 Transactions</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">1 GB Storage</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">1 Minute Diffs</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-700 font-bold">Premium Support</p>
									</li>
									<li className="flex items-center">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-700 font-bold">Historical Context</p>
									</li>
								</ul>
							</div>
							<div className="flex-initial">
								<div className="flex flex-wrap -m-2">
									<div className="w-full p-2">
										<div className="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 rounded-full cursor-pointer" onClick={() => signIn()}>
											Get Started Now
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-4">
						<div className="flex flex-col justify-between p-8 h-full bg-blue-500 rounded-3xl">
							<div className="flex-initial mb-6"><span className="inline-block mb-6 text-sm text-white font-bold uppercase tracking-widest">Standard</span>
								<h2 className="font-heading text-4xl text-white font-black tracking-tight">
									<span>$100</span><span className="text-xl text-blue-400 font-bold">/mo</span></h2>
								<p className="mb-8 text-sm text-blue-200 font-bold">Billed Monthly</p>
								<ul>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">10,000,000 Transactions</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">100 GB</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#F3F4F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">Streaming Diffs</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83334" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-blue-300 font-bold">Premium Support</p>
									</li>
									<li className="flex items-center">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83334" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-blue-300 font-bold">Database restoration</p>
									</li>
								</ul>
							</div>
							<div className="flex-initial">
								<div className="flex flex-wrap -m-2">
									<div className="w-full p-2">
										<div className="block w-full px-8 py-3.5 text-lg text-center text-blue-500 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-full cursor-pointer" onClick={() => signIn()}>
											Get Started Now
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-4">
						<div className="flex flex-col justify-between p-8 h-full bg-gray-900 rounded-3xl">
							<div className="flex-initial mb-6">
								<span className="inline-block mb-6 text-sm text-blue-500 font-bold uppercase tracking-widest">
									Pro
								</span>
								<h2 className="font-heading text-4xl text-white font-black tracking-tight">
									<span>Contact</span>
								</h2>
								<p className="mb-8 text-sm text-gray-700 font-bold">
									Contact
								</p>
								<ul>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">
											Unlimited Transactions
										</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">
											Unlimited Storage
										</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8333L7.50033 14.1667L15.8337 5.83333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-100 font-bold">
											Streaming Diffs
										</p>
									</li>
									<li className="flex items-center mb-4">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-700 font-bold">
											Premium Support
										</p>
									</li>
									<li className="flex items-center">
										<svg className="mr-2.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.16699 10.8335L7.50033 14.1668L15.8337 5.8335" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										<p className="text-gray-700 font-bold">
											Database Restoration
										</p>
									</li>
								</ul>
							</div>
							<div className="flex-initial">
								<div className="flex flex-wrap -m-2">
									<div className="w-full p-2">
										<div className="block w-full px-8 py-3.5 text-lg text-center text-gray-100 font-bold bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 rounded-full cursor-pointer" onClick={() => signIn()}>
											Get Started Now
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}