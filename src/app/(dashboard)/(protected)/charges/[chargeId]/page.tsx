import { type ChargeDTO } from '@/shared/interfaces/charge.interface';
import { api } from '@/utils/api';
import Link from 'next/link';

const getData = async (chargeId: string): Promise<ChargeDTO> => {
	const res = await api.get<ChargeDTO>(`/charges/${chargeId}`);

	return res.data;
};

export default async function Charge({ params }: { params: { chargeId: string } }) {
	const data = await getData(params.chargeId);

	return (
		<div>
			<Link href='/charges'>Go back</Link>

			<div>
				<h1>Charge ${data.id}</h1>
        <p>Amount: ${data.amountInCents}</p>
			</div>
		</div>
	);
}
