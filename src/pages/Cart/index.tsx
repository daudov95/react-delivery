import React from 'react'
import CartItem from './CartItem'
import { useAppSelector } from '../../hooks/redux/hook'
import { getCartTotalPrice } from '../../utils/helpers'

const Cart = () => {
	const cartItems = useAppSelector((state) => state.cart.list)
	const total = getCartTotalPrice(cartItems)
	const deliveryPrice = 150

	return (
		<div className="store-cart">
			<div className="store-cart__header">Ваш заказ</div>
			<div className="store-cart__list scroll-block">
				{cartItems.map((item) => (
					<CartItem key={item.id} data={item} />
				))}
			</div>
			<div className="store-cart-info">
				<div className="store-cart-info__wrap">
					<div className="store-cart-info__row">
						<span className="store-cart-info__text">Ваш заказ</span>
						<span className="store-cart-info__value">{total} ₽</span>
					</div>
					<div className="store-cart-info__row">
						<span className="store-cart-info__text">Доставка</span>
						<span className="store-cart-info__value">{deliveryPrice} ₽</span>
					</div>
				</div>
				<div className="store-cart-info__wrap">
					<div className="store-cart-info-total">
						<div className="store-cart-info-total__row">
							<span className="store-cart-info-total__title">
								Время доставки
							</span>
							<span className="store-cart-info-total__value">15-45 мин.</span>
						</div>
						<div className="store-cart-info-total__row">
							<span className="store-cart-info-total__title">Итого</span>
							<span className="store-cart-info-total__value">
								{total + deliveryPrice} ₽
							</span>
						</div>
					</div>
					<button
						className="store-cart-info__btn"
						disabled={total === 0 ? true : false}
					>
						Оформить заказ
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
