import { type ChargeDTO } from '@/shared/interfaces/charge.interface';
import { CheckoutDTO } from '@/shared/interfaces/checkout.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

const getData = async (chargeId: string): Promise<{ charge: ChargeDTO; checkout: CheckoutDTO }> => {
	const res = await api.get<{ charge: ChargeDTO; checkout: CheckoutDTO }>(`/charge/${chargeId}`);

	return res.data;
};

export default async function Charge({ params }: { params: { chargeId: string } }) {
	const data = await getData(params.chargeId);

	console.log(data);

	return (
		<div>
			<Link href='/charges'>Go back</Link>

			<div>
				<h1>Cobrança - {data.charge.id}</h1>
				<p>Valor: ${data.charge.amountInCents}</p>

				<p>
					Formas de pagamento: {data.charge.selectedPaymentTypes.map((payment) => `${payment} `)}
				</p>

				<p>Checkout: {`http://localhost:3000/pay/` + data.checkout.slug}</p>
			</div>
		</div>
	);
}
