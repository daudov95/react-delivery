import React, { FC, useEffect, useRef, useState } from 'react'

interface ISort {
	label: string
	list: string[]
	handler: (selected: number) => void
}

const Sort: FC<ISort> = ({ label, list, handler }) => {
	const [open, setOpen] = useState<boolean>(false)
	const [current, setCurrent] = useState<number>(0)
	const sortRef = useRef(null)

	const sortHandler = () => {
		setOpen(!open)
	}
	const selectHandler = (select: number) => {
		setOpen(!open)
		setCurrent(select)
		handler(select)
	}

	useEffect(() => {
		const OutsideClickHandler = (e: MouseEvent) => {
			if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
				setOpen(false)
			}
		}

		document.body.addEventListener('click', OutsideClickHandler)

		return () => document.body.removeEventListener('click', OutsideClickHandler)
	}, [])

	return (
		<>
			<div ref={sortRef} className="main-restaurant-filter-sort-time">
				<span className="main-restaurant-filter-sort-time__label">
					{label}:
				</span>
				<span
					className="main-restaurant-filter-sort-time__value"
					onClick={sortHandler}
				>
					{list[current]}
					<svg
						width="12"
						height="7"
						viewBox="0 0 12 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L6 6L11 1"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke="#8A8894"
						/>
					</svg>
				</span>
				{open && (
					<div className="main-restaurant-filter-sort-time__popup">
						{list.map((item, i) => (
							<span
								onClick={() => selectHandler(i)}
								className={i === current ? 'active' : ''}
								key={i}
							>
								{item}
							</span>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Sort
