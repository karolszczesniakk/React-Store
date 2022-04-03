import { Item } from "../../../types/Item"
import { cartActions } from "../../../store/cart-slice"
import Button from "../../UI/Button"
import { useAppDispatch } from "../../../store"

import classes from "./ProductDetails.module.css"
import { uiActions } from "../../../store/ui-slice"



const ProductDetails: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(item));
    dispatch(uiActions.toggleCart());
  }

  return (
    <div className={classes["product-details"]}>
      <h1>{item.title}</h1>
      <h1>€{item.price}</h1>
      <div className={classes["product-details-description"]}>
        <span>{item.description}</span>
      </div>
      <div className={classes["product-details-buttons"]}>
        <Button onClick={handleAddToCart}>Add to cart</Button>
        <Button>Go to Cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails