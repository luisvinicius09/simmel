'use client';

import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from './ui/select';

// userClientId: z.string(),
// userProductId: z.string().nullable(),
// amountInCents: z.number(),
// expireDate: z.coerce.date().min(new Date()), // TODO: validation
// selectedPaymentTypes: z.array(
// 	z.enum([PaymentType.BOLETO, PaymentType.PIX, PaymentType.CREDIT_CARD]),
// ),

// TODO: fetch clients ids

export default function CreateChargeForm() {
	return (
		<>
			<form>
				<fieldset>
					<Input type='text' placeholder='Valor' />
				</fieldset>

				<fieldset>
					{/** TODO: https://ui.shadcn.com/docs/components/calendar */}
					<Popover>
						<PopoverTrigger asChild>
							<Button variant={'outline'}>
								<span>Selecione o Vencimento</span>
							</Button>
						</PopoverTrigger>

						<PopoverContent>
							<Calendar />
						</PopoverContent>
					</Popover>
				</fieldset>

				<fieldset>
					<Select>
						<SelectTrigger className='w-[200px]'>
							<SelectValue placeholder='Selecione um produto' />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectLabel>Produtos</SelectLabel>
								<SelectItem value='1'>1</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</fieldset>

				<fieldset>
					<Select>
						<SelectTrigger className='w-[200px]'>
							<SelectValue placeholder='Selecione um cliente' />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectLabel>Clientes</SelectLabel>
								<SelectItem value='1'>1</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</fieldset>

				<fieldset>
					<div>
						<Checkbox id='boleto' />
						<Label htmlFor='boleto'>Boleto</Label>
					</div>
					<div>
						<Checkbox id='credit_card' />
						<Label htmlFor='credit_card'>Cartão de Credito</Label>
					</div>
					<div>
						<Checkbox id='pix' />
						<Label htmlFor='pix'>Pix</Label>
					</div>
				</fieldset>

				<div className='flex justify-end'>
					<Button>Salvar</Button>
				</div>
			</form>
		</>
	);
}
