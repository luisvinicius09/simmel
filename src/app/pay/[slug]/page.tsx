import axios from 'axios';

const getCheckoutInfo = async (slug: string): Promise<object> => {
	// TODO: fetch data from slug

	const checkout = await axios.get(`/checkout/${slug}`);

	return checkout;
};

const userInfo = async () => {
	// TODO: fetch user data
};

const clientInfo = async () => {
	// TODO: fetch client data if available
};

export default function Pay({ params }: { params: { slug: string } }) {
	// const checkoutInfo = getCheckoutInfo(params.slug);
	// console.log(checkoutInfo);

	// 			name: client.name,
	// 			documentNumber: client.document,
	// 			documentType: client.documentType,
	// 			address: {
	// 				city: clientAddress.city,
	// 				complement: clientAddress.complement ?? '',
	// 				district: clientAddress.district,
	// 				number: clientAddress.number,
	// 				stateCode: clientAddress.stateCode,
	// 				street: clientAddress.street,
	// 				zipCode: clientAddress.zipCode,
	// 			},

	return (
		<div className=''>
			<div>
				<p>Informações</p>
				<div>
					<p>Valor: </p>
				</div>
				-{' '}
			</div>

			<div>
				<fieldset>
					<label htmlFor='name'>Nome</label>
					<input name='name' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='name'>Tipo de document</label>

					<div>
						<label htmlFor='cpf'>CPF</label>
						<input name='cpf' type='radio' id='cpf' />
					</div>

					<div>
						<label htmlFor='cnpj'>CNPJ</label>
						<input name='cnpf' type='radio' id='cnpj' />
					</div>
				</fieldset>

				<fieldset>
					<label htmlFor='document'>Document</label>
					<input name='document' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='city'>Cidade</label>
					<input name='city' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='complement'>Complemento</label>
					<input name='complement' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='district'>Bairro</label>
					<input name='district' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='number'>Numero</label>
					<input name='number' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='stateCode'>Estado</label>
					<input name='stateCode' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='street'>Rua</label>
					<input name='street' type='text' />
				</fieldset>

				<fieldset>
					<label htmlFor='zipCode'>Codigo Postal</label>
					<input name='zipCode' type='text' />
				</fieldset>
			</div>
		</div>
	);
}
