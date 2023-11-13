import { ChargeDTO } from '@/shared/interfaces/charge.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

export const revalidate = 0;

async function getData(): Promise<ChargeDTO[]> {
	const res = await api.get<{ charges: ChargeDTO[] }>('/charges');

	return res.data.charges;
}

export default async function Charges() {
	const charges = await getData();

	return (
		<>
			<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
				<div className='flex justify-between items-center mb-4'>
					<div className='w-32 h-8 bg-accent rounded-lg'></div>

					<Link href='/charges/create' className='bg-primary text-white p-2 rounded-lg'>
						+ Nova cobrança
					</Link>
				</div>

				{charges.length === 0 && <h1 className='text-center'>Nenhuma cobrança</h1>}

				{charges.map((charge) => {
					return (
						<div className='' key={charge.id}>
							<a
								href='#'
								className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
							>
								<Link href={`/charges/${charge.id}`} className='font-bold'>
									{charge.id}
								</Link>
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
}
