import { ClientDTO } from '@/shared/interfaces/client.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

const getData = async (clientId: string): Promise<ClientDTO> => {
	const res = await api.get<ClientDTO>(`/clients/${clientId}`);

	return res.data;
};

export default async function Client({ params }: { params: { clientId: string } }) {
	const data = await getData(params.clientId);

	return (
		<div>
			<div>
				<Link href='/clients'>Go back</Link>
			</div>

			<h1>Client {data.id}</h1>
		</div>
	);
}
