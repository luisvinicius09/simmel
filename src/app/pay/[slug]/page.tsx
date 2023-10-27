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

const getCheckoutInfo = async (slug: string): Promise<object> => {
	// TODO: fetch data from slug

	const checkout = await axios.get(`/checkout/${slug}`);

	return checkout;
};

const userInfo = async () => {
	// TODO: fetch user data
};

const clientInfo = async () => {
	// TODO: fetch client data if available
};

export default function Pay({ params }: { params: { slug: string } }) {
	// const checkoutInfo = getCheckoutInfo(params.slug);
	// console.log(checkoutInfo);

	return (
		<div className='flex justify-center h-full min-h-screen items-center py-12'>
			<Card className='h-full w-[450px]'>
				<CardHeader>
					<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Checkout</h3>

					<CardTitle>Informações</CardTitle>

					<CardDescription>Valor: R$420.00</CardDescription>
				</CardHeader>

				<CardContent>
					<InformationForm />
				</CardContent>
			</Card>
		</div>
	);
}
