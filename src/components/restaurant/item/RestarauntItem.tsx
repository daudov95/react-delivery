import React, { FC } from 'react'

interface RestarauntItemDataProps {
    img: string
    name: string
    time: string
    price: string
    rating: string
}

interface RestarauntItemProps {
    data: RestarauntItemDataProps
}

const RestarauntItem: FC<RestarauntItemProps> = ({data, children}) => {
    return (
        <div className="restaraunts-item">
            <div className="restaraunts-item-image">
                <img src={data.img} alt="restaraunt" />
            </div>
            <div className="restaraunts-item-info">
                <h3 className="restaraunts-item-info__title">{data.name}</h3>
                <ul className="restaraunts-item-info__list">
                    <li className="restaraunts-item-info__item">{data.time}</li>
                    <li className="restaraunts-item-info__item">{data.price}</li>
                    <li className="restaraunts-item-info__item rating">
                        <span>
                            <svg width="14" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 0 1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L7 0Z" fill="#FFB82E"/></svg>
                        </span>
                        {data.rating}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RestarauntItem