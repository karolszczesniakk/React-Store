import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserData} from "../types/UserData"

interface Auth {
  isLoggedIn: boolean;
  user: UserData | null;
}

const defaultState: Auth = {
  isLoggedIn: false,
  user: null
};

const login: CaseReducer<Auth, PayloadAction<UserData>> = (state, action) => {
  console.log("loggin in");
  state.isLoggedIn = true;
  state.user = {
    id: action.payload.id,
    name: action.payload.name,
    email: action.payload.email,
    token: action.payload.token
   // token: action.payload.token
  };
  console.log(state.user);

  localStorage.setItem('user', JSON.stringify(state.user));
};

const logout: CaseReducer<Auth> = (state) => {
  state.isLoggedIn = false;
  state.user = null;
  localStorage.removeItem('user');
}

const authSlice = createSlice({
  name: "ui",
  initialState: defaultState,
  reducers: {
    login,
    logout
  },
});

export const authActions = authSlice.actions;

export default authSlice;
