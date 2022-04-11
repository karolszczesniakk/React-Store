import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http";
import { RootState, useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import CartProductsList from "./cart-products/CartProductsList";
import { SendOrderData, sendOrderData } from "../../api/api";

import classes from "./Cart.module.css";
import { cartActions } from "../../store/cart-slice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sendRequest, error } = useHttp<SendOrderData>(sendOrderData);

  const cartData = useSelector((state: RootState) => state.cart);
  const userData = useSelector((state: RootState) => state.auth.user);

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const content =
    totalQuantity > 0 ? <CartProductsList /> : <p>Cart is currently empty!</p>;

  //just a temporary function before I create checkout page
  const sendOrder = () => {
    if (cartData && userData) {
      sendRequest({ cartData, userData });
      dispatch(cartActions.emptyCart());
    }
  };

  if (error) {
    console.log(error);
  }

  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      {content}
      <div className={classes["cart-buttons"]}>
        <Button onClick={() => dispatch(uiActions.toggleCart())}>
          Close Cart
        </Button>
        <Button onClick={sendOrder}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
