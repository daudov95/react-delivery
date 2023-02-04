import React, { FC, useState } from 'react'
import { IRestaurant } from '../models/models'

interface MainProps {
	// onClick: (num: number) => void; // if return string/number and ...
}

const filter = [
	{
		title: 'Акции',
		category: 0
	},
	{
		title: 'Хот-Доги',
		category: 1
	},
	{
		title: 'Салаты',
		category: 2
	},
	{
		title: 'Закуски',
		category: 3
	},
	{
		title: 'Супы',
		category: 4
	},
	{
		title: 'Пицца',
		category: 5
	}
]

const Store: FC<MainProps> = ({ children }) => {
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
	return (
		<main className="main">
			<div className="container">
				<div className="main__wrap">
					<div className="store">
						<div className="store__left">
							<div
								className="store-banner"
								style={{
									backgroundImage: "url('./assets/img/store/banner.jpg')"
								}}
							>
								<a href="src/pages/Store#" className="store-banner__back">
									Все рестораны
								</a>

								<div className="store-banner__block">
									<h1 className="store-banner__title">Точка</h1>
									<div className="store-banner__info">
										<span className="store-banner__time">45 мин.</span>
										<span className="store-banner__price">от 0 ₽</span>
										<span className="store-banner__rating">4,4</span>
									</div>
								</div>
							</div>

							<div className="store-filter">
								{/*<Filter*/}
								{/*	list={filter}*/}
								{/*	restList={server}*/}
								{/*	handler={setRestaurants}*/}
								{/*/>*/}
							</div>

							<div className="store-posts">
								<h2 className="store-posts__title">Акции</h2>

								<div className="store-posts__list">
									<div className="store-item">
										<div className="store-item__img">
											<img src={'./assets/img/store/1.jpg'} alt="Item" />
										</div>

										<div className="store-item__info">
											<h3 className="store-item__title">Чизбургер</h3>
											<p className="store-item__desc">
												Вкусные, обжаренные в растительном фритюре и сле...
											</p>
											<span className="store-item__price">120 P</span>
										</div>
									</div>

									<div className="store-item">
										<div className="store-item__img">
											<img src={'./assets/img/store/1.jpg'} alt="Item" />
										</div>

										<div className="store-item__info">
											<h3 className="store-item__title">Чизбургер</h3>
											<p className="store-item__desc">
												Вкусные, обжаренные в растительном фритюре и сле...
											</p>
											<span className="store-item__price">120 P</span>
										</div>
									</div>

									<div className="store-item">
										<div className="store-item__img">
											<img src={'./assets/img/store/1.jpg'} alt="Item" />
										</div>

										<div className="store-item__info">
											<h3 className="store-item__title">Чизбургер</h3>
											<p className="store-item__desc">
												Вкусные, обжаренные в растительном фритюре и сле...
											</p>
											<span className="store-item__price">120 P</span>
										</div>
									</div>

									<div className="store-item">
										<div className="store-item__img">
											<img src={'./assets/img/store/1.jpg'} alt="Item" />
										</div>

										<div className="store-item__info">
											<h3 className="store-item__title">Чизбургер</h3>
											<p className="store-item__desc">
												Вкусные, обжаренные в растительном фритюре и сле...
											</p>
											<span className="store-item__price">120 P</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="store__right">2</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Store
