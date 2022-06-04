import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/header/logo.svg";
import { useAppSelector } from "../hooks/redux/hook";

const Header: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.list);
  const cartCount = cartItems.length;

  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__left">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header__location">
            <div className="header__location-icon">
              <button className="header__location-btn">
                Укажите адрес доставки
              </button>
            </div>
          </div>
        </div>
        <div className="header__right">
          {/* <div className="header__search-input">
                            <input type="text" />
                        </div> */}

          <div className="header__search">
            <button className="header__search-btn">
              <div className="header__search-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 17.4999L14.375 13.8749M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>Поиск</span>
            </button>
          </div>
          <div className="header__auth">
            <button className="header__auth-btn">
              <div className="header__auth-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5M13.3335 5.83333C13.3335 7.67428 11.8411 9.16667 10.0002 9.16667C8.15921 9.16667 6.66683 7.67428 6.66683 5.83333C6.66683 3.99238 8.15921 2.5 10.0002 2.5C11.8411 2.5 13.3335 3.99238 13.3335 5.83333Z"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>Войти</span>
            </button>
          </div>
          <div className="header__cart">
            <button className="header__cart-btn">
              <div className="header__cart-icon">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 1.66669L3 5.00002V16.6667C3 17.1087 3.17559 17.5326 3.48816 17.8452C3.80072 18.1578 4.22464 18.3334 4.66667 18.3334H16.3333C16.7754 18.3334 17.1993 18.1578 17.5118 17.8452C17.8244 17.5326 18 17.1087 18 16.6667V5.00002L15.5 1.66669H5.5Z"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.8332 8.33331C13.8332 9.21737 13.482 10.0652 12.8569 10.6903C12.2317 11.3155 11.3839 11.6666 10.4998 11.6666C9.61578 11.6666 8.76794 11.3155 8.14281 10.6903C7.51769 10.0652 7.1665 9.21737 7.1665 8.33331"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5H18"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="header__cart-count">{cartCount}</span>
              </div>
              <span>Корзина</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
