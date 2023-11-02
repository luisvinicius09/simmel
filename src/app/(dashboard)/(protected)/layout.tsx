import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={''}>
			<div className='flex flex-col h-screen relative'>
				<div className='bg-secondary rounded-b-[150px] absolute top-0 left-0 h-48 w-full z-0 shadow-lg'></div>

				<div className='flex justify-between px-28 py-4 z-10'>
					<div className=''></div>

					<div className='w-12 h-12 bg-primary rounded-full'></div>
				</div>

				<div className='bg-background grow rounded-t-[100px] mx-6 z-10 shadow-lg'>
					{/* <div className='flex pt-20 px-20 h-full gap-12'> */}
					<div className='grid 2xl:grid-cols-8 grid-cols-12 pt-20 px-20 h-full 2xl:gap-12 xl:gap-8'>
						<div className='2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-5 xl:mr-0 mr-8 bg-secondary/70 py-4 text-xl rounded-xl px-4 max-h-[36rem] max-w-64 shadow-lg'>
							<div className='pl-8 my-2'>
								<p className='pt-2'>Menu</p>
							</div>

							<hr className='bg-primary my-4 border-[2px] border-primary' />

							<div className=''>
								<div className='py-2 pl-4 my-2 rounded-xl bg-secondary'>
									<Link href='/dashboard'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-100'>Inicio</p>
										</div>
									</Link>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<Link href='/charges'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Cobranças</p>
										</div>
									</Link>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<Link href='/clients'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Clientes</p>
										</div>
									</Link>
								</div>

								<div className='py-2 pl-4 my-2 rounded-xl'>
									<Link href='/settings'>
										<div className='flex'>
											<p className='text-accent'>icon</p>
											<p className='opacity-60'>Configurações</p>
										</div>
									</Link>
								</div>
							</div>
						</div>

						<main className='2xl:col-span-6 xl:col-span-9 lg:col-span-8 col-span-7 w-full'>
							{children}
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}
