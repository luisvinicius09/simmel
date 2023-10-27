import { api } from '@/utils/api';

async function getData(): Promise<any[]> {
	const res = await api.get<{ charges: object[] }>('/charges');

	return res.data.charges;
}

export default async function Charges() {
	const data = await getData();

	return (
		<>
			<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
				<div className='flex justify-between items-center mb-4'>
					<div className='w-32 h-8 bg-accent rounded-lg'></div>

					<button className='bg-primary text-white p-2 rounded-lg'>+ Nova cobrança</button>
				</div>

				{data.map((charge, idx) => {
					return (
						<div className='' key={idx}>
							<a
								href='#'
								className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
							>
								<p className='font-bold'>{charge?.id}</p>
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
}
