import React, { FC, useEffect, useState } from 'react'
// import img from "../../../assets/img/main/restaurants/1.jpg";
import Sort from '../sort/Sort'
import RestaurantItem from '../item/RestaurantItem'
import SortSimple from '../sort/SortSimple'
import Skeleton from '../item/Skeleton'
import axios from 'axios'
import { IRestaurant } from '../../../models/models'

interface IRestaurantData {
	status: boolean
	// meta: {}
	data: IRestaurant[]
}

const Restaurant: FC = () => {
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const query = `?order=rating&by=desc`

	useEffect(() => {
		const getRestaurants = async () => {
			const { data } = await axios.get<IRestaurantData>(
				'http://127.0.0.1:8000/api/v1/restaurants' + query
			)

			setRestaurants(data.data)
			setIsLoading(false)
		}

		getRestaurants()
	}, [])

	const timeSort = ['все', 'сейчас', 'test']
	const sort = ['по рейтингу', 'по цене +', 'по цене -']

	const timeSortHandler = (selected: number) => {
		if (selected === 0) {
			setRestaurants([...restaurants])
		}

		if (selected === 1) {
			setRestaurants([...restaurants.filter((rest) => rest.is_open === 1)])
		}
	}

	const sortHandler = (selected: number) => {
		if (selected === 0) {
			setRestaurants([
				...restaurants.sort((a, b) => (a.rating < b.rating ? 1 : -1))
			])
		}

		if (selected === 1) {
			setRestaurants([
				...restaurants.sort((a, b) => (a.price > b.price ? 1 : -1))
			])
		}

		if (selected === 2) {
			setRestaurants([
				...restaurants.sort((a, b) => (a.price < b.price ? 1 : -1))
			])
		}
	}

	const printRestaurants = () => {
		if (isLoading) {
			return (
				<div className="main-restaurant__list restaurants">
					{[...Array(8)].map((_, i) => (
						<Skeleton key={i} />
					))}
				</div>
			)
		}

		return restaurants.length > 0 ? (
			<div className="main-restaurant__list restaurants">
				{restaurants.map((el: IRestaurant) => (
					<RestaurantItem key={el.id} data={el} />
				))}
			</div>
		) : (
			<h3>Ничего не найдено</h3>
		)
	}

	return (
		<div className="main-restaurant">
			<h1 className="main-restaurant__title">Рестораны</h1>
			<div className="main-restaurant-filter__wrap">
				{/*<Filter list={filter} restList={restaurants} handler={setRestaurants} />*/}

				<div className="main-restaurant-filter-sort">
					<Sort label={'Доставка'} list={timeSort} handler={timeSortHandler} />
					<SortSimple
						icon={'assets/img/icons/sort.svg'}
						label={'Сортировка'}
						list={sort}
						handler={sortHandler}
					/>
				</div>
			</div>
			{printRestaurants()}
		</div>
	)
}

export default Restaurant
