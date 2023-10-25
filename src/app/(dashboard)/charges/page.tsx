async function getData(): Promise<any> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/charges`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default function Charges() {
	const data = getData();

	return (
		<>
			<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
				<div className='flex justify-between items-center mb-4'>
					<div className='w-32 h-8 bg-accent rounded-lg'></div>

					<button className='bg-primary text-white p-2 rounded-lg'>+ Nova cobrança</button>
				</div>

				<div className=''>
					<a
						href='#'
						className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
					>
						<p className='font-bold'>Cobrança #1</p>
					</a>
				</div>
			</div>
		</>
	);
}
