



export default function Heading() {
	return (
		<div className="p-8 py-20 bg-gray-900 overflow-hidden rounded-3xl" style={
			{
				'backgroundImage': `url('logo-cover-transparent.png')`,
				'backgroundSize': '85%',
				'backgroundPosition': 'center',
				'backgroundRepeat': 'no-repeat',
				// backgroundColor: 'rgb(17, 24, 39,.1)'
			}
		}>
			<div className="text-center mx-auto mb-24">
				<span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">endless timespan</span>
				<h1 className="font-heading mb-24 text-5xl lg:text-6xl text-white font-black tracking-tight">
					<span>Build at any point in time</span>
				</h1>
				<p className="pt-12 text-xl text-gray-400 font-bold">
					Thousands of companies trust in our apps, you could be part of our community too.
				</p>
			</div>
		</div>
	)
}