import { ICartItem } from '../redux/cart/types'

export const getCartLS = () => {
	const cart = localStorage.getItem('cart')
	const items: ICartItem[] = cart ? JSON.parse(cart) : []
	return {
		cart,
		items
	}
}

export const getCartTotalPrice = (items: ICartItem[]) => {
	return items.reduce((sum, obj) => obj.price * obj.quantity + sum, 0)
}

export const getCartCount = (items: ICartItem[]) => {
	return items.length
}
