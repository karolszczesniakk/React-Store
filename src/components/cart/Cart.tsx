import Button from "../UI/Button";
import CartProductsList from "./cart-products/CartProductsList";

import classes from "./Cart.module.css";

const Cart: React.FC = () => {
  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      <CartProductsList />
      <div className="centered">
        <Button>Witam</Button>
        <Button>Witam</Button>
      </div>
    </div>
  );
};

export default Cart;
