import { CartItem } from "../../../types/CartItem";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { useAppDispatch } from "../../../store";
import { cartActions } from "../../../store/cart-slice";

import classes from "./CartProduct.module.css";
import CartProductImage from "./CartProductImage";

const CartProduct: React.FC<CartItem> = (props) => {
  const dispatch = useAppDispatch();
  const { itemData, quantity, totalPrice } = props;
  const { id, title, image } = itemData;

  return (
    <Card className={classes["cart-product"]}>
      <CartProductImage image={image} />
      <div>
        <span>{title} </span>
        <h3>x{quantity} </h3>
      </div>
      <div>
        <h3 className="text-align-center">€{totalPrice}</h3>
        <div className={classes["cart-product-buttons"]}>
          <Button onClick={() => dispatch(cartActions.addToCart(itemData))}>
            +
          </Button>
          <Button onClick={() => dispatch(cartActions.removeFromCart({ id }))}>
            -
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartProduct;
