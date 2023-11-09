'use client';

import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

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

export default function CreateClientForm() {
	return (
		<>
			<form className="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<h2>Informações Pessoais</h2>
					</CardHeader>

					<CardContent>
						<div className="flex flex-col gap-5">
							<fieldset>
								<Input type='text' placeholder='Nome' />
							</fieldset>

							<fieldset>
								<RadioGroup defaultValue='CPF' className="flex pb-2">
									<div className="flex items-center">
										<RadioGroupItem value='CPF' />
										<Label>CPF</Label>
									</div>

									<div className="flex items-center">
										<RadioGroupItem value='CNPJ' />
										<Label>CNPJ</Label>
									</div>
								</RadioGroup>

								<Input type='text' placeholder='Documento' />
							</fieldset>

							<fieldset>
								<Input type='email' placeholder='Email' />
							</fieldset>

							<fieldset>
								<Input type='number' placeholder='Celular' />
							</fieldset>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<h2>Endereço</h2>
					</CardHeader>

					<CardContent>
						<div className='flex gap-4 pb-5'>
							<fieldset className='w-full'>
								<Input type='text' placeholder='Rua' />
							</fieldset>

							<fieldset className='w-full'>
								<Input type='text' placeholder='Numero' />
							</fieldset>
						</div>

						<div className='flex gap-4 pb-5'>
							<fieldset className='w-full'>
								<Input type='text' placeholder='Complemento' />
							</fieldset>

							<fieldset className='w-full'>
								<Input type='text' placeholder='Bairro' />
							</fieldset>
						</div>

						<div className='flex gap-4'>
							<fieldset className='w-full'>
								<Input type='text' placeholder='Zip Code' />
							</fieldset>

							<fieldset className='w-full'>
								<Input type='text' placeholder='Cidade' />
							</fieldset>

							<fieldset className='w-full'>
								<Input type='text' placeholder='Estado' />
							</fieldset>
						</div>
					</CardContent>
				</Card>

				<div className='flex justify-end'>
					<Button>Salvar</Button>
				</div>
			</form>
		</>
	);
}
