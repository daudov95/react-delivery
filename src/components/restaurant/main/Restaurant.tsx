import React, { FC, useEffect, useState } from "react";
// import img from "../../../assets/img/main/restaurants/1.jpg";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";
import RestaurantItem from "../item/RestaurantItem";
import server from "../../../server.json";
import SortSimple from "../components/sort/SortSimple";
import Skeleton from "../item/Skeleton";

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
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://628bde6e7886bbbb37c089da.mockapi.io/api/v1/restaurants")
            .then((res) => res.json())
            .then((data) => {
                setRestaurants(data);
                setIsLoading(false);
            });
    }, []);

    const timeSort = ["все", "сейчас", "test"];
    const sort = ["по рейтингу", "по цене +", "по цене -"];

    const timeSortHandler = (selected: number) => {
        console.log("timeSortHandler", selected);

        if (selected === 0) {
            setRestaurants([...restaurants]);
        }

        if (selected === 1) {
            setRestaurants([
                ...restaurants.filter((rest) => rest.is_open === 1),
            ]);
        }
    };

    const sortHandler = (selected: number) => {
        console.log("sortHandler", selected);

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
        if (isLoading) {
            return (
                <div className="main-restaurant__list restaurants">
                    {[...Array(8)].map((_, i) => (
                        <Skeleton key={i} />
                    ))}
                </div>
            );
        }

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
                    handler={setRestaurants}
                />

                <div className="main-restaurant-filter-sort">
                    <Sort
                        label={"Доставка"}
                        list={timeSort}
                        handler={timeSortHandler}
                    />
                    <SortSimple
                        icon={"assets/img/icons/sort.svg"}
                        label={"Сортировка"}
                        list={sort}
                        handler={sortHandler}
                    />
                </div>
            </div>
            {printrestaurants()}
        </div>
    );
};

export default Restaurant;
