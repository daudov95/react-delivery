export interface IRestaurant {
	id: number
	title: string
	image: string
	time: string
	price: number
	rating: number
	filters: IFilter[]
	filter_default: number
	is_open: number
	date: {
		dmy: string
		hms: string
		unix: string
	}
}

export interface IProduct {
	id: number
	title: string
	description: string
	image: string
	old_price: number
	price: number
	options: string
	filter_id: number
	date: {
		dmy: string
		hms: string
		unix: string
	}
	restaurant_id: number
}

export interface IFilter {
	id: number
	title: string
}
