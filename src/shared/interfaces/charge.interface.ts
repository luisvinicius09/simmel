export type ChargeDTO = {
	id: string;
	userId: number;
	userClientId?: number;
	userProductId?: number;
	amountInCents: number;
	expireDate: Date;
	externalId?: string;
	createdAt: Date;
	updatedAt: Date;
};
