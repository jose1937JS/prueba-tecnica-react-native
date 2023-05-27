
export interface IProduct {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: object
}

export interface IProductParams {
	data: IProduct
}