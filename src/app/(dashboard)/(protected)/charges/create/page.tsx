import CreateChargeForm from '@/components/create-charge-form';
import Link from 'next/link';

export default async function CreateCharge() {
	return (
		<div>
			<div className='flex justify-between p-4'>
				<div>
					<Link href='/charges'>Go back</Link>
				</div>

				<div></div>
			</div>

			<div>
				<CreateChargeForm />
			</div>
		</div>
	);
}
