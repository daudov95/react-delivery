import React, { FC, useState } from "react";
// import img from "../../../assets/img/main/restaurants/1.jpg";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";
import RestaurantItem from "../item/RestaurantItem";
import server from "../../../server.json";
import SortSimple from "../components/sort/SortSimple";

const filter = [
    {
        title: "Все",
        category: 0,
    },
    {
        title: "Суши",
        category: 1,
    },
    {
        title: "Бургеры",
        category: 2,
    },
    {
        title: "Пицца",
        category: 3,
    },
    {
        title: "Десерты",
        category: 4,
    },
    {
        title: "Шашлык",
        category: 5,
    },
];

export interface IRestaurant {
    id: number;
    img: string;
    name: string;
    time: string;
    price: number;
    rating: string;
    filter: number;
    is_open: number;
}

// console.log(server);

const Restaurant: FC = () => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>(server);

    const timeSort = ["все", "сейчас", "test"];
    const sort = ["по рейтингу", "по цене +", "по цене -"];

    const timeSortHandle = (selected: number) => {
        console.log("timeSortHandle", selected);

        if (selected === 0) {
            setRestaurants([...restaurants]);
        }

        if (selected === 1) {
            setRestaurants([
                ...restaurants.filter((rest) => rest.is_open === 1),
            ]);
        }
    };

    const sortHandle = (selected: number) => {
        console.log("sortHandle", selected);

        if (selected === 0) {
            setRestaurants([
                ...restaurants.sort((a, b) => (a.rating < b.rating ? 1 : -1)),
            ]);
        }

        if (selected === 1) {
            setRestaurants([
                ...restaurants.sort((a, b) => (a.price > b.price ? 1 : -1)),
            ]);
        }

        if (selected === 2) {
            setRestaurants([
                ...restaurants.sort((a, b) => (a.price < b.price ? 1 : -1)),
            ]);
        }
    };

    const printrestaurants = () => {
        return restaurants.length > 0 ? (
            <div className="main-restaurant__list restaurants">
                {restaurants.map((el: IRestaurant) => (
                    <RestaurantItem key={el.id} data={el} />
                ))}
            </div>
        ) : (
            <h3>Ничего не найдено</h3>
        );
    };

    return (
        <div className="main-restaurant">
            <h1 className="main-restaurant__title">Рестораны</h1>
            <div className="main-restaurant-filter__wrap">
                <Filter
                    list={filter}
                    restList={server}
                    handle={setRestaurants}
                />

                <div className="main-restaurant-filter-sort">
                    <Sort
                        label={"Доставка"}
                        list={timeSort}
                        handle={timeSortHandle}
                    />
                    <SortSimple
                        icon={"assets/img/icons/sort.svg"}
                        label={"Сортировка"}
                        list={sort}
                        handle={sortHandle}
                    />
                </div>
            </div>
            {printrestaurants()}
        </div>
    );
};

export default Restaurant;
