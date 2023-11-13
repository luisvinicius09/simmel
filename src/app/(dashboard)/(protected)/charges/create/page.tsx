import CreateChargeForm from '@/components/create-charge-form';
import { ClientDTO } from '@/shared/interfaces/client.interface';
import { ProductDTO } from '@/shared/interfaces/product.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

async function getClients(): Promise<ClientDTO[]> {
	const res = await api.get<{ clients: ClientDTO[] }>('/clients');

	return res.data.clients;
}

async function getProducts(): Promise<ProductDTO[]> {
	// const res = await api.get<{ products: ProductDTO[] }>('/products');

	// return res.data;
	return [];
}

export default async function CreateCharge() {
	const products = await getProducts();
	const clients = await getClients();

	return (
		<div>
			<div className='flex justify-between p-4'>
				<div>
					<Link href='/charges'>Go back</Link>
				</div>

				<div></div>
			</div>

			<div>
				<CreateChargeForm products={products} clients={clients} />
			</div>
		</div>
	);
}
