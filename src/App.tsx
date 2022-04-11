import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ShopPage from "./pages/ShopPage";
import { UserData } from "./types/UserData";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { authActions } from "./store/auth-slice";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import { cartActions, CartState } from "./store/cart-slice";
import Contact from "./pages/ContactPage";
/*
TASKS:
-create checkout contact and about page
-implement authentication
-implement navigation dropdown for smaller screens
-local storage to keep cart data
-clean up folder structure
*/

function App() {
  const dispatch = useAppDispatch();

  //useEffect to get localStorage user data
  useEffect(() => {
    const storedUserDataJSON = localStorage.getItem("user");
    let storedUserData: UserData;

    if (storedUserDataJSON) {
      storedUserData = JSON.parse(storedUserDataJSON);
      console.log(storedUserData);
      dispatch(authActions.login(storedUserData));
    }
  }, [dispatch]);

  //useEffect to get localStorage cart data
  useEffect(() => {
    const storedCartDataJSON = localStorage.getItem("cart");
    let storedCartData: CartState;

    if (storedCartDataJSON) {
      storedCartData = JSON.parse(storedCartDataJSON);
      console.log(storedCartData);
      dispatch(cartActions.setCart(storedCartData));
    }
  }, [dispatch]);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:itemId" element={<ProductPage />} />
        <Route
          path="/contact"
          element={
            <h1 className="centered">
              <Contact />
            </h1>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate replace to="/not-found" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
