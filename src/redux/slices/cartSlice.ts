import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface ICartItems {
  list: ICartItem[];
}

const initialState: ICartItems = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const item = state.list.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        return;
      }
      state.list = [
        ...state.list,
        {
          id: action.payload.id,
          img: action.payload.img,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    },
    addItemQuantity(state, action: PayloadAction<number>) {
      let item = state.list.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      item.quantity += 1;
    },
    removeItemQuantity(state, action: PayloadAction<number>) {
      const item = state.list.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItemCart(state, action: PayloadAction<number>) {
      const item = state.list.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    updateItemCount(
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) {
      const item = state.list.find((item) => item.id === action.payload.id);
      if (!item) {
        return;
      }
      console.log("11");

      item.quantity = action.payload.count;
    },
  },
});

export const {
  addToCart,
  addItemQuantity,
  removeItemQuantity,
  removeItemCart,
  updateItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
