import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CartItem } from "../../../types/CartItem";

const CartProductsList: React.FC = () => {
    const cartData = useSelector((state: RootState) => state.cart);
    const { cartItems } = cartData;
  return (
    <div>
      {cartItems.map((item: CartItem) => <div>{item.itemData.title} amount of {item.quantity}</div>)}
    </div>
  )
}

export default CartProductsList;