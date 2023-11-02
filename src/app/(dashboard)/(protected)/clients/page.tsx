// TODO: fetch clients from api

import Link from 'next/link';

export default function Clients() {
	return (
		<>
			<>
				<div className='bg-secondary/70 w-full h-full max-h-[44rem] pb-12 p-8 rounded-xl shadow-lg'>
					<div className='flex justify-between items-center mb-4'>
						<div className='w-32 h-8 bg-accent rounded-lg'></div>

						{/*// TODO: This is redirect to route with form */}
						<Link href='/clients/create' className='bg-primary text-white p-2 rounded-lg'>
							+ Novo Cliente
						</Link>
					</div>

					{/*// TODO: There should be a map here with clients */}
					{/*// TODO: When you click on a client it should redirect to its page, display info and history */}
					<div className=''>
						<a
							href='#'
							className='h-12 bg-secondary/70 items-center rounded-lg flex text-center px-4'
						>
							<Link href='/clients/1' className='font-bold'>
								Cliente #1
							</Link>
						</a>
					</div>
				</div>
			</>
		</>
	);
}
