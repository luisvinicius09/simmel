import { api } from '@/utils/api';
import Link from 'next/link';

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
					{/*// TODO: This should redirect to a page to create a charge */}
					<Link href='/charges/create' className='bg-primary text-white p-2 rounded-lg'>
						+ Nova cobrança
					</Link>
				</div>

				{data.map((charge, idx) => {
					{
						/*// TODO: This should be a button to redirect to charge info page */
					}
					return (
						<div className='' key={idx}>
							<a
								href='#'
								className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
							>
								<Link href='/charges/1' className='font-bold'>
									{charge?.id}
								</Link>
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
}
