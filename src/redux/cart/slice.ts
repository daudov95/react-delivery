import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, ICartItems } from './types'

const initialState: ICartItems = {
	list: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<ICartItem>) {
			const item = state.list.find((item) => item.id === action.payload.id)
			if (item) {
				item.quantity += 1
				return
			}

			state.list.push({
				id: action.payload.id,
				img: action.payload.img,
				title: action.payload.title,
				description: action.payload.description,
				price: action.payload.price,
				quantity: action.payload.quantity,
				restaurant_id: action.payload.restaurant_id
			})
		},
		addItemQuantity(state, action: PayloadAction<number>) {
			let item = state.list.find((item) => item.id === action.payload)
			if (!item) {
				return
			}
			item.quantity += 1
		},
		removeItemQuantity(state, action: PayloadAction<number>) {
			const item = state.list.find((item) => item.id === action.payload)
			if (!item) {
				return
			}
			if (item.quantity > 1) {
				item.quantity -= 1
			}
		},
		removeItemCart(state, action: PayloadAction<number>) {
			const item = state.list.find((item) => item.id === action.payload)
			if (!item) {
				return
			}
			state.list = state.list.filter((item) => item.id !== action.payload)
		},
		updateItemCount(
			state,
			action: PayloadAction<{ id: number; count: number }>
		) {
			const item = state.list.find((item) => item.id === action.payload.id)
			if (!item) {
				return
			}
			item.quantity = action.payload.count
		}
	}
})

export const {
	addToCart,
	addItemQuantity,
	removeItemQuantity,
	removeItemCart,
	updateItemCount
} = cartSlice.actions

export default cartSlice.reducer
