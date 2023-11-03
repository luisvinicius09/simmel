export enum DocumentType {
	CPF = 'CPF',
	CNPJ = 'CNPJ',
}

export type ClientDTO = {
	id: string;
	userId: string;
	name: string;
	documentType: DocumentType;
	document: string;
	email: string;
	phoneNumber: number;
	createdAt: Date;
	updatedAt: Date;
};
