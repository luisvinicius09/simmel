import CreateClientForm from '@/components/create-client-form';
import Link from 'next/link';

export default function CreateClient() {
	return (
		<div>
			<div className='flex justify-between p-4'>
				<div>
					<Link href='/clients'>Voltar</Link>
				</div>

				{/* <h1>Criar Cliente</h1> */}
				<div></div>
			</div>

			<div>
				<CreateClientForm />
			</div>
		</div>
	);
}
