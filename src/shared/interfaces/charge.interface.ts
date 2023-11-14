export type ChargeDTO = {
	id: string;
	userId: number;
	userClientId?: number;
	userProductId?: number;
	amountInCents: number;
	expireDate: Date;
	externalId?: string;
	selectedPaymentTypes: string[];
	createdAt: Date;
	updatedAt: Date;
};
