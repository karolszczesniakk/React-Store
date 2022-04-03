import { CaseReducer, createSlice} from "@reduxjs/toolkit";

interface UiState {
  showCart: boolean;
}

const defaultState: UiState = {
  showCart: false
}

const toggleCart: CaseReducer<UiState> = (state) => {
  console.log("siema");
  state.showCart = !state.showCart;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    toggleCart
  }
})

export const uiActions = uiSlice.actions;

export default uiSlice;