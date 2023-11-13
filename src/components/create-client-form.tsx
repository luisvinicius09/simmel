'use client';

import { z } from 'zod';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { api } from '@/utils/api';

// name         String
// documentType DocumentType
// document     String
// email        String
// phoneNumber  Int

// street       String
// number       String
// complement   String?
// zipCode      String
// city         String
// district     String
// stateCode    String // UF
// userClientId String

const createClientFormSchema = z.object({
	name: z.string(),
	documentType: z.enum(['CPF', 'CNPJ']),
	document: z.string(),
	email: z.string().email(),
	phoneNumber: z.number(),
	address: z.object({
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
		zipCode: z.string(),
		city: z.string(),
		district: z.string(),
		stateCode: z.string(),
	}),
});

type FormValues = z.infer<typeof createClientFormSchema>;

export default function CreateClientForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(createClientFormSchema),
		defaultValues: {
			documentType: 'CPF',
			address: {
				complement: '',
			},
		},
	});

	function onSubmit(values: FormValues) {
		api
			.post('/client/create', {
				...values,
			})
			.then((res) => {
				console.log(res.data);
				return;
			});
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
						phoneNumber: 123456789,
						address: {
							complement: '',
							street: 'Test Rua',
							number: '123',
							zipCode: '123457',
							city: 'Test',
							district: 'Distruct',
							stateCode: 'TE',
						},
					});
				}}
			>
				Criar cliente Automaticamente
			</Button>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
					<Card>
						<CardHeader>
							<h2>Informações Pessoais</h2>
						</CardHeader>

						<CardContent>
							<div className='flex flex-col gap-5'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nome</FormLabel>

											<FormControl>
												<Input placeholder='Nome' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='documentType'
									render={({ field }) => (
										<FormItem>
											{/* <FormLabel>Nome</FormLabel> */}

											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className='flex pb-2'
												>
													<FormItem className='flex items-center space-y-0 space-x-1'>
														<FormControl>
															<RadioGroupItem value='CPF' />
														</FormControl>
														<Label>CPF</Label>
													</FormItem>

													<FormItem className='flex items-center space-y-0 space-x-1'>
														<FormControl>
															<RadioGroupItem value='CNPJ' />
														</FormControl>
														<Label>CNPJ</Label>
													</FormItem>
												</RadioGroup>
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='document'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Documento</FormLabel>

											<FormControl>
												<Input placeholder='Documento' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>

											<FormControl>
												<Input placeholder='Email' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='phoneNumber'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Celular</FormLabel>

											<FormControl>
												<Input placeholder='Celular' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<h2>Endereço</h2>
						</CardHeader>

						<CardContent>
							<div className='flex gap-4 pb-5'>
								<FormField
									control={form.control}
									name='address.street'
									render={({ field }) => (
										<FormItem className='w-full'>
											<FormLabel>Rua</FormLabel>

											<FormControl>
												<Input placeholder='Rua' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

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

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

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

											<FormControl>
												<Input placeholder='Complemento' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<div className='flex gap-4'>
								<FormField
									control={form.control}
									name='address.district'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Bairro</FormLabel>

											<FormControl>
												<Input placeholder='Bairro' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='address.zipCode'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Zip Code</FormLabel>

											<FormControl>
												<Input placeholder='Zip Code' {...field} />
											</FormControl>

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

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

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

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

											{/* <FormDescription>Valor da cobrança</FormDescription> */}

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</CardContent>
					</Card>

					<div className='flex justify-end'>
						<Button type='submit'>Salvar</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
