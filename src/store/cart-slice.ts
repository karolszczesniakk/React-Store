import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/Item";
import { CartItem } from "../types/CartItem";

export interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

export const defaultState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0
};

const emptyCart: CaseReducer<CartState> = state => {
  localStorage.removeItem("cart");
  state.cartItems = [];
  state.totalQuantity = 0;
  state.totalAmount = 0;
}

const setCart: CaseReducer<CartState, PayloadAction<CartState>> = (state, action) => {
  state.cartItems = action.payload.cartItems;
  state.totalAmount = action.payload.totalAmount;
  state.totalQuantity = action.payload.totalQuantity; 
}

const addToCart: CaseReducer<CartState, PayloadAction<Item>> = (state,action) => {
  const newItem = action.payload;
  const existingItem = state.cartItems.find(
    (cartItem) => cartItem.itemData.id === newItem.id
  );

  if (!existingItem) {
    state.totalQuantity += 1;
    state.totalAmount += +newItem.price.toFixed(2);
    state.cartItems.push({
      itemData: newItem,
      totalPrice: +newItem.price.toFixed(2),
      quantity: 1,
    });
  } else {
    state.totalAmount = +(state.totalAmount + existingItem.itemData.price).toFixed(2);
    state.totalQuantity += 1;
    existingItem.quantity += 1;
    existingItem.totalPrice =  +(newItem.price + existingItem.totalPrice).toFixed(2);
  }
  localStorage.setItem('cart', JSON.stringify(state));;
};

const removeFromCart: CaseReducer<CartState, PayloadAction<{id: number}>> = (
  state,
  action
) => {
  const idToRemove = action.payload.id;
  const existingItem = state.cartItems.find(
    (item) => item.itemData.id === idToRemove
  );
  if (!existingItem) return;

  if (existingItem.quantity === 1) {
    state.totalQuantity -= 1;
    state.totalAmount -= +existingItem.itemData.price.toFixed(2);
    const newCartItems = state.cartItems.filter(item => item.itemData.id !== idToRemove);
    state.cartItems = newCartItems
  } else {
    state.totalQuantity -= 1;
    state.totalAmount = +(state.totalAmount - existingItem.itemData.price).toFixed(2);
    existingItem.quantity -= 1;
    existingItem.totalPrice = +(
      existingItem.totalPrice - existingItem.itemData.price
    ).toFixed(2);
  }
  //if no items in state - remove cart from storage
  if (state.totalQuantity === 0) {
    localStorage.removeItem("cart");
  } else {
    localStorage.setItem("cart", JSON.stringify(state));
  }
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addToCart,
    removeFromCart,
    setCart,
    emptyCart
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
