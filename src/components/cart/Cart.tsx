import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import CartProductsList from "./cart-products/CartProductsList";

import classes from "./Cart.module.css";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const content = totalQuantity > 0 ? <CartProductsList /> : <p>Cart is currently empty!</p>;

  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      {content}
      <div className={classes["cart-buttons"]}>
        <Button onClick={() => dispatch(uiActions.toggleCart())}>
          Close Cart
        </Button>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
