import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { RootState, useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import CartProductsList from "./cart-products/CartProductsList";
import { SendOrderData, sendOrderData } from "../../api/api";

import classes from "./Cart.module.css";
import { cartActions } from "../../store/cart-slice";
import GoogleSignInButton from "../GoogleSignInButton/GoogleSignInButton";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sendRequest, error } = useHttp<SendOrderData>(sendOrderData);

  const cartData = useSelector((state: RootState) => state.cart);
  const userData = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  let content =
    totalQuantity > 0 ? <CartProductsList /> : <p>Cart is currently empty!</p>;

  const sendOrder = () => {
    if (cartData && userData) {
      sendRequest({ cartData, userData });
      dispatch(cartActions.emptyCart());
      dispatch(uiActions.toggleCart())
      alert("Order has been sent!");
    }
  };

  if (error) {
    console.log(error);
    content = <p>{error}</p>
  }

  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      {content}
      <div className={classes["cart-buttons"]}>
        <Button onClick={() => dispatch(uiActions.toggleCart())}>
          Close Cart
        </Button>
        {totalQuantity !== 0 && isLoggedIn && <Button onClick={sendOrder}>Send Order</Button>}
        {!isLoggedIn && <GoogleSignInButton />}
      </div>
    </div>
  );
};

export default Cart;
