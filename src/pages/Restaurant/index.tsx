import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Filter from '../../components/restaurant/filter/Filter'
import Cart from '../Cart'
import RestaurantItem from './RestaurantItem'
import axios from 'axios'
import { IFilter, IProduct, IRestaurant } from '../../models/models'

interface IProductsData {
	status: boolean
	restaurant: IRestaurant
	items: IProduct[]
}

const Restaurant: FC = ({ children }) => {
	const [restaurant, setRestaurant] = useState<IRestaurant>()
	const [products, setProducts] = useState<IProduct[]>([])
	const [filters, setFilters] = useState<IFilter[]>([])
	const [activeFilter, setActiveFilter] = useState<number>(0)
	const { id } = useParams()

	const filterHandler = (active: number) => {
		setActiveFilter(active)
		console.log('active:', active)
		console.log(filters.findIndex((item) => item.id === active))
	}

	// console.log(id)

	const fetchProducts = async () => {
		const { data } = await axios.get<IProductsData>(
			`http://127.0.0.1:8000/api/v1/restaurants/${id}/items`
		)
		// console.log(data)
		setRestaurant(data.restaurant)
		setFilters(data.restaurant.filters)
		setProducts(data.items)
		setActiveFilter(data.restaurant.filter_default)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		fetchProducts()
	}, [])

	// console.log(products)

	return (
		<main className="main">
			<div className="container">
				<div className="main__wrap">
					<div className="store">
						<div className="store__left">
							<div
								className="store-banner"
								style={{
									backgroundImage: "url('../assets/img/store/banner.jpg')"
								}}
							>
								<Link to={'/'} className="store-banner__back">
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 13L1 7L7 1"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Все рестораны
								</Link>

								<div className="store-banner__block">
									<h1 className="store-banner__title">{restaurant?.title}</h1>
									<div className="store-banner__info">
										<span className="store-banner__time">
											{restaurant?.time} мин.
										</span>
										<span className="store-banner__price">
											от {restaurant?.price} ₽
										</span>
										<span className="store-banner__rating">
											<svg
												width="20"
												height="19"
												viewBox="0 0 20 19"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
													fill="#FFB82E"
												/>
											</svg>
											{restaurant?.rating}
										</span>
									</div>
								</div>
							</div>

							<div className="store-filter">
								<Filter
									list={filters}
									handler={filterHandler}
									active={activeFilter}
								/>
							</div>

							<div className="store-posts">
								<h2 className="store-posts__title">
									{filters.find((item) => item.id === activeFilter)?.title}
								</h2>

								<div className="store-posts__list">
									{products.map((item, i) => (
										<RestaurantItem key={item.id} data={item} />
									))}
								</div>
							</div>
						</div>

						<div className="store__right">
							<Cart />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Restaurant
