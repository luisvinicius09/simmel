'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const informationFormSchema = z.object({
	name: z.string().min(3),
	documentType: z.enum(['CPF', 'CNPJ']),
	document: z.string(),

	street: z.string(),
	number: z.string(),
	complement: z.string().optional(),
	district: z.string(),
	city: z.string(),
	stateCode: z.string(),
	zipCode: z.number(),
});

type InformationFormInputs = z.infer<typeof informationFormSchema>;

export async function InformationForm() {
	const { register, handleSubmit } = useForm<InformationFormInputs>({
		resolver: zodResolver(informationFormSchema),
	});

	const onSubmit: SubmitHandler<InformationFormInputs> = (data) => {
		const object = {
			name: data.name,
			documentNumber: data.document,
			documentType: data.documentType,
			address: {
				city: data.city,
				complement: data.complement ?? '',
				district: data.district,
				number: data.number,
				stateCode: data.stateCode,
				street: data.street,
				zipCode: data.zipCode,
			},
		};

		console.log(object);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
				<Card>
					<CardHeader>
						<CardTitle>Informações Pessoais</CardTitle>
					</CardHeader>

					<CardContent className='grid gap-2'>
						<fieldset>
							<Label htmlFor='name'>Nome</Label>
							<Input type='text' placeholder='Nome' {...register('name')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='documentType'>Tipo de documento</Label>

							<RadioGroup defaultValue='CPF' className='flex'>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='CPF' id='CPF' {...register('documentType')} />
									<Label htmlFor='CPF'>CPF</Label>
								</div>

								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='CNPJ' id='CNPJ' {...register('documentType')} />
									<Label htmlFor='CNPJ'>CNPJ</Label>
								</div>
							</RadioGroup>
						</fieldset>

						<fieldset>
							<Label htmlFor='document'>Documento</Label>
							<Input type='text' placeholder='Documento' {...register('document')} />
						</fieldset>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Endereço</CardTitle>
					</CardHeader>

					<CardContent className='grid gap-2'>
						<fieldset>
							<Label htmlFor='street'>Rua</Label>
							<Input type='text' placeholder='Rua' {...register('street')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='number'>Numero</Label>
							<Input type='text' placeholder='Numero' {...register('number')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='complement'>
								Complemento <span className='text-muted-foreground'>(opcional)</span>
							</Label>
							<Input type='text' placeholder='Complemento' {...register('complement')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='district'>Bairro</Label>
							<Input type='text' placeholder='Bairro' {...register('district')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='city'>Cidade</Label>
							<Input type='text' placeholder='Cidade' {...register('city')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='stateCode'>Estado</Label>
							<Input type='text' placeholder='Estado' {...register('stateCode')} />
						</fieldset>

						<fieldset>
							<Label htmlFor='zipCode'>Codigo Postal</Label>
							<Input type='text' placeholder='Codigo Postal' {...register('zipCode')} />
						</fieldset>
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
		</>
	);
}
