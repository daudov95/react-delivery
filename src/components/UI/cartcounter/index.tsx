import React, { ChangeEvent, FC } from 'react'
import { useAppDispatch } from '../../../hooks/redux/hook'
import {
	addItemQuantity,
	removeItemQuantity,
	updateItemCount
} from '../../../redux/cart/slice'

interface CartCounterProps {
	id: number
	quantity: number
}

const maxCount = 10

const CartCounter: FC<CartCounterProps> = ({ quantity, id }) => {
	const dispatch = useAppDispatch()

	const buttonMinusHandler = () => {
		if (quantity > 1) {
			dispatch(removeItemQuantity(id))
		}
	}
	const buttonPlusHandler = () => {
		if (quantity < maxCount) {
			dispatch(addItemQuantity(id))
		}
	}

	const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		console.log('change')
		const val = +e.target.value
		if (val <= maxCount) {
			dispatch(updateItemCount({ id: id, count: val }))
		}
	}

	return (
		<div className="store-cart-item__button-wrap">
			<button
				onClick={buttonMinusHandler}
				className="cart-btn store-cart-item__minus"
			>
				<svg
					width="12"
					height="2"
					viewBox="0 0 12 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1H11"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<input
				type="number"
				value={quantity}
				onChange={(e) => changeValueHandler(e)}
				className="store-cart-item__value"
			/>
			<button
				onClick={buttonPlusHandler}
				className="cart-btn store-cart-item__plus"
			>
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 6H11"
						stroke="#212121"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M6 1V11"
						stroke="#212121"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	)
}

export default CartCounter
