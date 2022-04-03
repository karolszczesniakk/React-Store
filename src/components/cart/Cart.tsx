import { useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import CartProductsList from "./cart-products/CartProductsList";

import classes from "./Cart.module.css";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      <CartProductsList />
      <div className="centered">
        <Button>Checkout</Button>
        <Button onClick={()=>dispatch(uiActions.toggleCart())}>Close Cart</Button>
      </div>
    </div>
  );
};

export default Cart;
