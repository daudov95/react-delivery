import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hook";
import { addToCart } from "../../../redux/slices/cartSlice";

interface IRestaurantItemData {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
}

interface IRestaurantItem {
  data: IRestaurantItemData;
}

const RestaurantItem: FC<IRestaurantItem> = ({ data }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.list);
  // console.log(data);
  const { id, title, img, description, price } = data;

  function itemClickHandler(id: number) {
    dispatch(
      addToCart({
        id: id,
        img: img,
        title: title,
        description: description,
        price: price,
        quantity: 1,
      })
    );
  }

  return (
    <div className="store-item" onClick={() => itemClickHandler(id)}>
      <div className="store-item__img">
        <img src={img} alt="Item" />
      </div>

      <div className="store-item__info">
        <h3 className="store-item__title">{title}</h3>
        <p className="store-item__desc">{description}</p>
        <span className="store-item__price">{price} ₽</span>
      </div>
    </div>
  );
};

export default RestaurantItem;
