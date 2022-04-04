import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CartItem } from "../../../types/CartItem";
import CartProduct from "./CartProduct";

const CartProductsList: React.FC = () => {
    const cartData = useSelector((state: RootState) => state.cart);
    const { cartItems } = cartData;
  return (
    <div>
      {cartItems.map((item: CartItem) => (
        <CartProduct
          quantity={item.quantity}
          itemData={item.itemData}
          totalPrice={item.totalPrice}
        />
      ))}
    </div>
  )
}

export default CartProductsList;