import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import { InformationForm } from '../_components/information-form';
import { CheckoutDTO } from '@/shared/interfaces/checkout.interface';
import { ChargeDTO } from '@/shared/interfaces/charge.interface';

const getCheckoutInfo = async (
	slug: string
): Promise<{ checkout: CheckoutDTO; charge: ChargeDTO }> => {
	const res = await axios.get<{ checkout: CheckoutDTO; charge: ChargeDTO }>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/${slug}`
	);

	return res.data;
};

const userInfo = async () => {
	// TODO: fetch user data
};

const clientInfo = async () => {
	// TODO: fetch client data if available
};

export default async function Pay({ params }: { params: { slug: string } }) {
	const checkoutInfo = await getCheckoutInfo(params.slug);
	// console.log(checkoutInfo);

	return (
		<div className='flex justify-center h-full min-h-screen items-center py-12'>
			<Card className='h-full w-[450px]'>
				<CardHeader>
					<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Checkout</h3>

					<CardTitle>Informações</CardTitle>

					<CardDescription>Valor: R${checkoutInfo.charge.amountInCents}</CardDescription>
				</CardHeader>

				<CardContent>
					<InformationForm />
				</CardContent>
			</Card>
		</div>
	);
}
