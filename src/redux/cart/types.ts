export interface ICartItem {
	id: number
	img: string
	title: string
	description: string
	price: number
	quantity: number
	restaurant_id: number
}

export interface ICartItems {
	list: ICartItem[]
}
