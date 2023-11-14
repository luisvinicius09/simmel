export type CheckoutDTO = {
	id: string;
	chargeId: string;
	userId: string;
	slug: string;
	externalId: string | null;
	digitableLine: string | null;
	barcodeNumber: string | null;
	paymentTypeChosen: string | null;
	createdAt: Date;
	updatedAt: Date;
};
