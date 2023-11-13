import Link from 'next/link';
import { ClientDTO } from '@/shared/interfaces/client.interface';
import { api } from '@/utils/api';

export const revalidate = 0;

async function getData(): Promise<ClientDTO[]> {
	const res = await api.get<{ clients: ClientDTO[] }>('/clients');

	return res.data.clients;
}

export default async function Clients() {
	const clients = await getData();

	return (
		<>
			<>
				<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
					<div className='flex justify-between items-center mb-4'>
						<div className='w-32 h-8 bg-accent rounded-lg'></div>

						<Link href='/clients/create' className='bg-primary text-white p-2 rounded-lg'>
							+ Novo Cliente
						</Link>
					</div>

					{clients.length === 0 && <h1 className="text-center">Nenhum cliente</h1>}

					{clients.map((client) => {
						return (
							<div className='' key={client.id}>
								<a
									href='#'
									className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
								>
									<Link href={`/clients/${client.id}`} className='font-bold'>
										Cliente #{client.id}
									</Link>
								</a>
							</div>
						);
					})}
				</div>
			</>
		</>
	);
}
