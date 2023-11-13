import { ProductDTO } from '@/shared/interfaces/product.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

async function getData(): Promise<ProductDTO[]> {
	const res = await api.get<{ products: ProductDTO[] }>('/products');

	return res.data.products;
}

export default async function Products() {
	const products = await getData();

	return (
		<>
			<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
				<div className='flex justify-between items-center mb-4'>
					<div className='w-32 h-8 bg-accent rounded-lg'></div>

					<Link href='/products/create' className='bg-primary text-white p-2 rounded-lg'>
						+ Novo Produto
					</Link>
				</div>

				{products.length === 0 && <h1 className='text-center'>Nenhum produto</h1>}

				{products.map((product) => {
					return (
						<div className='' key={product.id}>
							<a
								href='#'
								className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
							>
								<Link href={`/products/${product.id}`} className='font-bold'>
									Produto #{product.id}
								</Link>
							</a>
						</div>
					);
				})}
			</div>
		</>
	);
}
