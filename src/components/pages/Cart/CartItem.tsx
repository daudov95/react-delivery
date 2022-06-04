import React, { FC } from "react";
import CartCounter from "../../UI/cartcounter";
import { useAppDispatch } from "../../../hooks/redux/hook";
import { removeItemCart } from "../../../redux/slices/cartSlice";

interface CartItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface IData {
  data: CartItemProps;
}

const CartItem: FC<IData> = ({ data }) => {
  const { id, title, price, description, quantity } = data;

  const dispatch = useAppDispatch();

  const removeItemHandler = (id: number) => {
    dispatch(removeItemCart(id));
  };

  return (
    <div className="store-cart-item">
      <div className="store-cart-item__wrap">
        <h4 className="store-cart-item__title">{title}</h4>
        <span className="store-cart-item__price">{price} ₽</span>
      </div>

      <p className="store-cart-item__desc">{description}</p>

      <div className="store-cart-item__button">
        <CartCounter id={id} quantity={quantity} />
        <button
          className="store-cart-item__delete"
          onClick={() => removeItemHandler(id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.7 122.88">
            <path d="M30.46,14.57V5.22A5.18,5.18,0,0,1,32,1.55v0A5.19,5.19,0,0,1,35.68,0H70a5.22,5.22,0,0,1,3.67,1.53l0,0a5.22,5.22,0,0,1,1.53,3.67v9.35h27.08a3.36,3.36,0,0,1,3.38,3.37V29.58A3.38,3.38,0,0,1,102.32,33H98.51l-8.3,87.22a3,3,0,0,1-2.95,2.69H18.43a3,3,0,0,1-3-2.95L7.19,33H3.37A3.38,3.38,0,0,1,0,29.58V17.94a3.36,3.36,0,0,1,3.37-3.37Zm36.27,0V8.51H39v6.06ZM49.48,49.25a3.4,3.4,0,0,1,6.8,0v51.81a3.4,3.4,0,1,1-6.8,0V49.25ZM69.59,49a3.4,3.4,0,1,1,6.78.42L73,101.27a3.4,3.4,0,0,1-6.78-.43L69.59,49Zm-40.26.42A3.39,3.39,0,1,1,36.1,49l3.41,51.8a3.39,3.39,0,1,1-6.77.43L29.33,49.46ZM92.51,33.38H13.19l7.94,83.55H84.56l8-83.55Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
