import React, { FC } from 'react'
import img from '../../../assets/img/main/restaraunts/1.jpg'
import RestarauntItem from '../item/RestarauntItem'

const restItems = [
    {id: 1, img: img, name: "BURGER AVENUE", time: "40-55 мин", price: "от 1000 ₽", rating: "4.0"},
    {id: 2, img: img, name: "Точка", time: "40-55 мин", price: "от 2000 ₽", rating: "2.0"},
    {id: 3, img: img, name: "Криспи", time: "40-55 мин", price: "от 3000 ₽", rating: "3.3"},
    {id: 4, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 5, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 6, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 7, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 8, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 9, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 10, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
    {id: 11, img: img, name: "Дадди пицца", time: "40-55 мин", price: "от 4000 ₽", rating: "5.0"},
];

// console.log();


const Restaraunt: FC = () => {
    return (
        <div className='main-restaraunt'>
            <h1 className='main-restaraunt__title'>Рестораны</h1>


            <div className="main-restaraunt-filter__wrap">
                
                <ul className='main-restaraunt-filter'>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link active'>Все</a></li>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link'>Суши</a></li>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link'>Бургеры</a></li>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link'>Пицца</a></li>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link'>Десерты</a></li>
                    <li className='main-restaraunt-filter__item'><a href="#" className='main-restaraunt-filter__link'>Шашлык</a></li>
                </ul>

                <div className="main-restaraunt-filter-sort">
                    sort
                </div>
            </div>

            <div className="main-restaraunt__list restaraunts">

                {restItems.map(el => <RestarauntItem key={el.id} data={el} />)}

            </div>

        </div>
    )
}

export default Restaraunt