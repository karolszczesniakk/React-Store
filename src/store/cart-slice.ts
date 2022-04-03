import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";
import { CartItem } from "../types/CartItem";

interface CartState {
  cartItems: CartItem[],
  totalQuantity: number,
};

const defaultState: CartState = {
  cartItems: [],
  totalQuantity: 0,
};

const addToCart: CaseReducer<CartState, PayloadAction<Item>> = (state,action) => {
  const newItem = action.payload;
  const existingItem = state.cartItems.find(
    (cartItem) => cartItem.itemData.id === newItem.id
  );

  if (!existingItem) {
    state.totalQuantity += 1;
    state.cartItems.push({
      itemData: newItem,
      totalPrice: newItem.price,
      quantity: 1,
    });
  } else {
    state.totalQuantity += 1;
    existingItem.quantity += 1;
    existingItem.totalPrice +=  newItem.price;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addToCart,
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
