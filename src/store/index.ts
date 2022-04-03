import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;

