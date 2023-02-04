import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hook'
import { IProduct } from '../../models/models'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../redux/cart/slice'

interface IRestaurantItem {
	data: IProduct
}

const RestaurantItem: FC<IRestaurantItem> = ({ data }) => {
	const dispatch = useAppDispatch()
	const cart = useAppSelector((state) => state.cart.list)
	const { id, title, image, description, price } = data
	const restaurant_id = Number(useParams().id)

	function itemClickHandler(id: number) {
		if (cart[0] && cart[0].restaurant_id !== restaurant_id) {
			console.log('Очистите корзину')
			// TODO: Сделать уведомление что нельзя добавить в карзину товары из двух разных магазинов и предложить очистить корзину
			return
		}

		dispatch(
			addToCart({
				id: id,
				img: image,
				title: title,
				description: description,
				price: price,
				quantity: 1,
				restaurant_id: restaurant_id
			})
		)
	}

	return (
		<div className="store-item" onClick={() => itemClickHandler(id)}>
			<div className="store-item__img">
				<img src={image} alt="Item" />
			</div>

			<div className="store-item__info">
				<h3 className="store-item__title">{title}</h3>
				<p className="store-item__desc">{description}</p>
				<span className="store-item__price">{price} ₽</span>
			</div>
		</div>
	)
}

export default RestaurantItem
