'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

type LoginInputs = {
	email: string;
	password: string;
};

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<LoginInputs>({ resolver: zodResolver(loginSchema) });

	const onSubmit: SubmitHandler<LoginInputs> = (data) => {
		console.log(data);
	};

	return (
		<div className='justify-center flex h-screen items-center'>
			<div className='bg-background flex flex-col rounded-xl px-12 pb-12 pt-8 gap-4 shadow-lg'>
				<div className='text-center'>
					<p>Logo? </p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<section>
						<div className='flex flex-col'>
							<label className='font-bold'>Login</label>
							<input
								{...register('email', { required: true })}
								className='bg-secondary rounded-md text-md p-2 shadow-md'
							/>
						</div>
					</section>

					<section>
						<div className='flex flex-col'>
							<label className='font-bold'>Password</label>
							<input
								{...register('password', { required: true })}
								className='bg-secondary rounded-md text-md p-2 shadow-md'
							/>
						</div>
					</section>

					<section>
						{/* <p className='text-red-600'>Email ou senha incorretos</p> */}

						<button
							type='submit'
							className='bg-primary text-white uppercase rounded-md py-2 w-full'
						>
							Login
						</button>
					</section>
				</form>
			</div>
		</div>
	);
}
