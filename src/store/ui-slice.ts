import { CaseReducer, createSlice} from "@reduxjs/toolkit";

interface Ui {
  showCart: boolean;
}

const defaultState: Ui = {
  showCart: false,
};

const toggleCart: CaseReducer<Ui> = (state) => {
  state.showCart = !state.showCart;
};

const uiSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    toggleCart
  }
})

export const uiActions = uiSlice.actions;

export default uiSlice;