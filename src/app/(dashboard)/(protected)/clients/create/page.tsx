import Link from 'next/link';

export default function CreateClient() {
	return (
		<div>
			<div className='flex justify-between p-4'>
				<div>
					<Link href='/clients'>Go back</Link>
				</div>

				<div></div>
			</div>

			<div>
				<h1>Create client here</h1>
			</div>
		</div>
	);
}
