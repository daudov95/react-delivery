import React, { FC, useState } from 'react'
import Restaraunt from './restaurant/main/Restaraunt'
import Slider from './slider/main/Slider'


interface MainProps {
    // onClick: (num: number) => void; // if return string/number and ...
}
const Main: FC<MainProps> = ( 
    {
        children
    }) => {

        const prevRef = React.useRef<HTMLDivElement>(null)
        const nextRef = React.useRef<HTMLDivElement>(null)

    return (
        <main className='main'>
            <div className="container">
                <div className="main__wrap">
                    
                    <Slider/>

                    <Restaraunt />

                </div>
            </div>
            
        </main>
    )
}

export default Main