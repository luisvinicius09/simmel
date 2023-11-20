'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const informationFormSchema = z.object({
	name: z.string().min(3),
	documentType: z.enum(['CPF', 'CNPJ']),
	document: z.string(),
	email: z.string().email(),

	address: z.object({
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
		district: z.string(),
		city: z.string(),
		stateCode: z.string(),
		zipCode: z.string(),
	}),
});

type InformationFormInputs = z.infer<typeof informationFormSchema>;

type AvailablePaymentMethods = 'credit_card' | 'boleto' | 'pix';

export function InformationForm({ slug }: { slug: string }) {
	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState<AvailablePaymentMethods>('credit_card');

	const form = useForm<InformationFormInputs>({
		resolver: zodResolver(informationFormSchema),
		defaultValues: {
			documentType: 'CPF',
			address: {
				complement: '',
			},
		},
	});

	async function onSubmit(values: InformationFormInputs) {
		const paymentUrl = selectedPaymentMethod;

		axios
			.post(`/checkout/create/${paymentUrl}`, { slug: slug, client: values })
			.then((res) => {
				// check the response and redirect the user

				console.log(res);

				return;
			})
			.catch((err) => {
				console.error(err);

				// handle error, display info
				return;
			});
	}

	function PaymentMethodInfo(selectedPaymentMethod: AvailablePaymentMethods) {
		switch (selectedPaymentMethod) {
			case 'credit_card':
				return (
					<>
						<CardHeader>
							<h3>Cartão de Credito</h3>
						</CardHeader>

						<CardContent>{/** TODO: add form to capture credit card information */}</CardContent>
					</>
				);

			case 'boleto':
				return (
					<>
						<CardHeader>
							<h3>Boleto</h3>
						</CardHeader>

						<CardContent>
							<ul>
								<li>Gere seu boleto</li>
							</ul>
						</CardContent>
					</>
				);

			case 'pix':
				return (
					<>
						<CardHeader>
							<h3>Pix</h3>
						</CardHeader>

						<CardContent>
							<ul>
								<li>Gere seu pix</li>
							</ul>
						</CardContent>
					</>
				);
		}
	}

	return (
		<>
			<Button
				onClick={() => {
					onSubmit({
						name: 'Testando',
						documentType: 'CPF',
						document: '12345678910',
						email: 'test@test.com',
						address: {
							street: 'Test',
							number: '123',
							complement: '',
							district: 'District',
							city: 'Test',
							stateCode: 'TE',
							zipCode: '1234567',
						},
					});
				}}
			>
				Send info auto
			</Button>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>Informações Pessoais</CardTitle>
						</CardHeader>

						<CardContent className='grid gap-2'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>

										<FormControl>
											<Input placeholder='Email' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Nome</FormLabel>

										<FormControl>
											<Input placeholder='Nome' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<fieldset>
								<Label htmlFor='documentType'>Tipo de documento</Label>

								<RadioGroup defaultValue='CPF' className='flex'>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='CPF' id='CPF' {...form.register('documentType')} />
										<Label htmlFor='CPF'>CPF</Label>
									</div>

									<div className='flex items-center space-x-2'>
										<RadioGroupItem value='CNPJ' id='CNPJ' {...form.register('documentType')} />
										<Label htmlFor='CNPJ'>CNPJ</Label>
									</div>
								</RadioGroup>
							</fieldset>

							<FormField
								control={form.control}
								name='document'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Documento</FormLabel>

										<FormControl>
											<Input placeholder='Documento' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Endereço</CardTitle>
						</CardHeader>

						<CardContent className='grid gap-2'>
							<FormField
								control={form.control}
								name='address.street'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Rua</FormLabel>

										<FormControl>
											<Input placeholder='Rua' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.number'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Numero</FormLabel>

										<FormControl>
											<Input placeholder='Numero' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.complement'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Complemento</FormLabel>
										<FormDescription>
											<span className='text-muted-foreground'>(opcional)</span>
										</FormDescription>

										<FormControl>
											<Input placeholder='Complemento' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.district'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Bairro</FormLabel>

										<FormControl>
											<Input placeholder='Bairro' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.city'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Cidade</FormLabel>

										<FormControl>
											<Input placeholder='Cidade' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.stateCode'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Estado</FormLabel>

										<FormControl>
											<Input placeholder='Estado' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='address.zipCode'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Codigo Postal</FormLabel>

										<FormControl>
											<Input placeholder='Codigo Postal' {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Pagamento</CardTitle>
						</CardHeader>

						<CardContent className='flex gap-2'>
							<RadioGroup
								defaultValue='credit_card'
								onValueChange={(value: AvailablePaymentMethods) => setSelectedPaymentMethod(value)}
								className='grid grid-flow-col auto-cols-fr text-center'
							>
								<>
									<RadioGroupItem value='credit_card' id='credit_card' hidden />
									<Label
										htmlFor='credit_card'
										className={clsx(
											'flex items-center justify-center py-4 ring-2 ring-slate-200 rounded hover:cursor-pointer',
											selectedPaymentMethod === 'credit_card' && 'ring-slate-900'
										)}
									>
										<span>Cartão de Credito</span>
									</Label>
								</>

								<>
									<RadioGroupItem value={'boleto'} id='boleto' hidden />
									<Label
										htmlFor='boleto'
										className={clsx(
											'flex items-center justify-center py-4 ring-2 ring-slate-200 rounded hover:cursor-pointer',
											selectedPaymentMethod === 'boleto' && 'ring-slate-900'
										)}
									>
										<span>Boleto</span>
									</Label>
								</>

								<>
									<RadioGroupItem value={'pix'} id='pix' hidden />
									<Label
										htmlFor='pix'
										className={clsx(
											'flex items-center justify-center py-4 ring-2 ring-slate-200 rounded hover:cursor-pointer',
											selectedPaymentMethod === 'pix' && 'ring-slate-900'
										)}
									>
										<span>Pix</span>
									</Label>
								</>
							</RadioGroup>
						</CardContent>

						<Card className='m-4'>{PaymentMethodInfo(selectedPaymentMethod)}</Card>
					</Card>

					<Button type='submit' className='w-full'>
						Finalizar
					</Button>
				</form>
			</Form>
		</>
	);
}
