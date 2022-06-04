import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../restaurant/components/filter/Filter";
import Cart from "../Cart";
import RestaurantItem from "./RestaurantItem";

interface MainProps {
  // onClick: (num: number) => void; // if return string/number and ...
}

const filter = [
  {
    title: "Акции",
    category: 0,
  },
  {
    title: "Хот-Доги",
    category: 1,
  },
  {
    title: "Салаты",
    category: 2,
  },
  {
    title: "Закуски",
    category: 3,
  },
  {
    title: "Супы",
    category: 4,
  },
  {
    title: "Пицца",
    category: 5,
  },
];

const Restaurant: FC<MainProps> = ({ children }) => {
  // const [restaurants, setRestaurants] = useState<IRestaurant[]>(server);
  // const [value, setValue] = useState<number>(0);

  const filterHandler = () => {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      title: "Чизбургер",
      img: "../assets/img/store/3.jpg",
      description: "Вкусные, обжаренные в растительном фритюре и сле...",
      price: 120,
    },
    {
      id: 2,
      title: "Шаурма",
      img: "../assets/img/store/2.jpg",
      description: "Вкусные, обжаренные в растительном фритюре и сле...",
      price: 150,
    },
    {
      id: 3,
      title: "Пицца пепперони",
      img: "../assets/img/store/1.jpg",
      description: "Вкусные, обжаренные в растительном фритюре и сле...",
      price: 350,
    },
    {
      id: 4,
      title: "Пицца ассорти",
      img: "../assets/img/store/1.jpg",
      description: "Вкусные, обжаренные в растительном фритюре и сле...",
      price: 350,
    },
    {
      id: 5,
      title: "Гамбургер",
      img: "../assets/img/store/3.jpg",
      description: "Вкусные, обжаренные в растительном фритюре и сле...",
      price: 350,
    },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__wrap">
          <div className="store">
            <div className="store__left">
              <div
                className="store-banner"
                style={{
                  backgroundImage: "url('../assets/img/store/banner.jpg')",
                }}
              >
                <Link to={"/"} className="store-banner__back">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Все рестораны
                </Link>

                <div className="store-banner__block">
                  <h1 className="store-banner__title">Точка</h1>
                  <div className="store-banner__info">
                    <span className="store-banner__time">45 мин.</span>
                    <span className="store-banner__price">от 0 ₽</span>
                    <span className="store-banner__rating">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                          fill="#FFB82E"
                        />
                      </svg>
                      4.4
                    </span>
                  </div>
                </div>
              </div>

              <div className="store-filter">
                <Filter list={filter} restList={[]} handler={filterHandler} />
              </div>

              <div className="store-posts">
                <h2 className="store-posts__title">Акции</h2>

                <div className="store-posts__list">
                  {data.map((item, i) => (
                    <RestaurantItem key={item.id} data={item} />
                  ))}
                  {/* <RestaurantItem data={data} /> */}
                </div>
              </div>
            </div>

            <div className="store__right">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Restaurant;
