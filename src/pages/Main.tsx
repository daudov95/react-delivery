import React, { FC, useState } from 'react'
import Restaurant from '../components/restaurant/main/Restaurant'
import Slider from '../components/slider/main/Slider'

interface MainProps {
	// onClick: (num: number) => void; // if return string/number and ...
}

const Main: FC<MainProps> = ({ children }) => {
	return (
		<main className="main">
			<div className="container">
				<div className="main__wrap">
					<Slider />

					<Restaurant />
				</div>
			</div>
		</main>
	)
}

export default Main
