import Link from 'next/link';

export default function Product({ params }: { params: { productId: string } }) {
	return (
		<div>
			<div>
				<Link href='/product'>Voltar</Link>
			</div>

			<h2>Product {params.productId}</h2>
		</div>
	);
}
