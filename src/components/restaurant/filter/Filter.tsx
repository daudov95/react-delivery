import React, { FC, useEffect, useState } from 'react'
import { IFilter } from '../../../models/models'

interface IFilterData {
	list: IFilter[]
	active: number
	handler: (active: number) => void
}

const Filter: FC<IFilterData> = ({ list, active, handler }) => {
	const [category, setCategory] = useState<number>(0)

	const filterHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
		const activeFilter = Number(e.currentTarget.dataset.filter)
		setCategory(activeFilter)

		if (activeFilter === 0) {
			// handler([...restList])
			return
		}

		return handler(Number(activeFilter))

		// handler([...restList.filter((item) => item.filters === activeFilter)])
	}

	useEffect(() => {
		setCategory(active)
		// console.log(active)
	}, [])

	return (
		<ul className="main-restaurant-filter">
			{list.map((item, i) => (
				<li className="main-restaurant-filter__item" key={item.id}>
					<span
						data-filter={item.id}
						className={`main-restaurant-filter__link ${
							item.id === category ? 'active' : ''
						}`}
						onClick={filterHandler}
					>
						{item.title}
					</span>
				</li>
			))}
		</ul>
	)
}

export default Filter
