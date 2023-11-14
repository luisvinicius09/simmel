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

export function InformationForm() {
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
		console.log(values);
		return;
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
							<Card>
								<CardContent>
									<p>Cartão de Credito</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<p>Boleto</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent>
									<p>Pix</p>
								</CardContent>
							</Card>
						</CardContent>
					</Card>

					<Button type='submit' className='w-full'>
						Finalizar
					</Button>
				</form>
			</Form>
		</>
	);
}
