'use client';

import { z } from 'zod';
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
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Card, CardContent, CardHeader } from './ui/card';
import { api } from '@/utils/api';
import { IMaskMixin } from 'react-imask';
import { Ref } from 'react';

enum PaymentType {
	BOLETO = 'BOLETO',
	PIX = 'PIX',
	CREDIT_CARD = 'CREDIT_CARD',
}

const createChargeFormSchema = z.object({
	userClientId: z.string().nullable(),
	userProductId: z.string().nullable(),
	amountInCents: z.string(),
	expireDate: z.coerce.date().min(new Date()),
	selectedPaymentTypes: z.array(
		z.enum([PaymentType.BOLETO, PaymentType.PIX, PaymentType.CREDIT_CARD])
	),
});

type FormValues = z.infer<typeof createChargeFormSchema>;

// TODO: fetch clients ids

const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
	<Input {...props} ref={inputRef as Ref<HTMLInputElement>} />
));

export default function CreateChargeForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(createChargeFormSchema),
		defaultValues: {
			selectedPaymentTypes: [],
			userClientId: null,
			userProductId: null,
		},
	});

	function onSubmit(values: FormValues) {
		api
			.post('/charge/create', {
				...values,
				amountInCents: Number(values.amountInCents),
			})
			.then((res) => {
				console.log(res.data);
				return;
			});
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
					<Card>
						<CardHeader />

						<CardContent className='flex flex-col gap-4'>
							<FormField
								control={form.control}
								name='userProductId'
								render={({ field }) => (
									<FormItem className='w-full'>
										<div className='flex flex-col'>
											<FormLabel>Produto</FormLabel>
											<FormDescription>Opcional</FormDescription>
										</div>

										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Selecione um produto' />
												</SelectTrigger>
											</FormControl>

											<SelectContent>
												<SelectGroup>
													<SelectLabel>Produtos</SelectLabel>
													<SelectItem value='1'>1</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='userClientId'
								render={({ field }) => (
									<FormItem className='w-full'>
										<div className='flex flex-col'>
											<FormLabel>Cliente</FormLabel>
											<FormDescription>Opcional</FormDescription>
										</div>

										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Selecione um cliente' />
												</SelectTrigger>
											</FormControl>

											<SelectContent>
												<SelectGroup>
													<SelectLabel>Clientes</SelectLabel>
													<SelectItem value='1'>1</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader />

						<CardContent className='flex flex-col gap-4'>
							<FormField
								control={form.control}
								name='amountInCents'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Valor da cobrança</FormLabel>

										<FormControl>
											<Input placeholder='Valor' {...field} />
											{/* <MaskedInput placeholder='Valor' {...field} mask={Number} radix='.' /> */}
										</FormControl>

										{/* <FormDescription>Valor da cobrança</FormDescription> */}

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='selectedPaymentTypes'
								render={() => (
									<FormItem className='flex flex-col'>
										<FormLabel>Formas de Pagamento</FormLabel>
										{/* <FormDescription>Valor da cobrança</FormDescription> */}

										<FormField
											control={form.control}
											name='selectedPaymentTypes'
											render={({ field }) => (
												<FormItem className='flex flex-row space-x-2 space-y-0 items-center'>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(PaymentType.BOLETO)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, PaymentType.BOLETO])
																	: field.onChange(
																			field.value?.filter((value) => value !== PaymentType.BOLETO)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className='text-sm font-normal'>
														{PaymentType.BOLETO}
													</FormLabel>
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name='selectedPaymentTypes'
											render={({ field }) => (
												<FormItem className='flex flex-row space-x-2 space-y-0 items-center'>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(PaymentType.CREDIT_CARD)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, PaymentType.CREDIT_CARD])
																	: field.onChange(
																			field.value?.filter(
																				(value) => value !== PaymentType.CREDIT_CARD
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className='text-sm font-normal'>
														{PaymentType.CREDIT_CARD}
													</FormLabel>
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name='selectedPaymentTypes'
											render={({ field }) => (
												<FormItem className='flex flex-row space-x-2 space-y-0 items-center'>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(PaymentType.PIX)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, PaymentType.PIX])
																	: field.onChange(
																			field.value?.filter((value) => value !== PaymentType.PIX)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className='text-sm font-normal'>{PaymentType.PIX}</FormLabel>
												</FormItem>
											)}
										/>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='expireDate'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Vencimento</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button variant={'outline'} className=''>
														{field.value ? (
															format(field.value, 'PPP', {
																locale: ptBR,
															})
														) : (
															<span>Selecione o vencimento</span>
														)}
													</Button>
												</FormControl>
											</PopoverTrigger>

											<PopoverContent>
												<Calendar
													mode='single'
													selected={field.value}
													onSelect={field.onChange}
													// disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
													initialFocus
													locale={ptBR}
												/>
											</PopoverContent>
										</Popover>

										<FormMessage />
									</FormItem>
								)}
							/>
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
