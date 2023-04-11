const Statistics = () => {
	return <section className="py-10 bg-gray-800 overflow-hidden">
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap -m-4">
				<div className="w-full md:w-1/3 p-4">
					<div className="flex flex-col justify-end p-10  bg-gray-900 h-full rounded-3xl">
						<h2 className="font-heading text-3xl text-gray-100 font-bold tracking-tight">
							<span>More than </span>
							<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
								100
							</span>
							<span> databases currently	connected
							</span>
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/3 p-4">
					<div className="flex flex-col justify-end p-10  bg-gray-900 h-full rounded-3xl">
						<h2 className="font-heading text-3xl text-gray-100 font-bold tracking-tight">
							<span>Over
							</span>
							<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-600">
								&nbsp;1500&nbsp;
							</span>
							<span>
								columns tracked
							</span>
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/3 p-4">
					<div className="flex flex-col justify-end p-10  bg-gray-900 h-full rounded-3xl">
						<h2 className="font-heading text-3xl text-gray-100 font-bold tracking-tight">
							<span>
								Over
							</span>
							<span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
								&nbsp;10,000&nbsp;
							</span>
							<span>queries done</span></h2>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default Statistics;