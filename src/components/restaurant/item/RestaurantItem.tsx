import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface RestaurantItemDataProps {
	id: number
	title: string
	image: string
	time: string
	price: number
	rating: number
	is_open: number
	date: {
		dmy: string
		hms: string
		unix: string
	}
}

interface RestaurantItemProps {
	data: RestaurantItemDataProps
}

const RestaurantItem: FC<RestaurantItemProps> = ({ data, children }) => {
	// console.log(data.id);

	return (
		<div className="restaurants-item">
			<div className="restaurants-item-image">
				{!data.is_open && (
					<span className="restaurants-item-image__notice">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
								stroke="#25282B"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
								stroke="#25282B"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				)}

				<Link to={`restaurant/${data.id}`}>
					<img src={data.image} alt="restaurant" />
				</Link>
			</div>
			<div className="restaurants-item-info">
				<h3 className="restaurants-item-info__title">
					<Link to={`restaurant/${data.id}`}>{data.title}</Link>
				</h3>
				<ul className="restaurants-item-info__list">
					<li className="restaurants-item-info__item">{data.time} мин.</li>
					<li className="restaurants-item-info__item">от {data.price} ₽</li>
					<li className="restaurants-item-info__item rating">
						<span>
							<svg
								width="14"
								height="13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m7 0 1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L7 0Z"
									fill="#FFB82E"
								/>
							</svg>
						</span>
						{data.rating}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default RestaurantItem
