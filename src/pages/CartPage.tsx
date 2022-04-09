import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CartItem } from "../types/CartItem";

const Cart: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const { cartItems } = cartData;

  let content: string | JSX.Element[] = "Cart is currently empty";

  if (cartItems.length > 0) {
    content = cartItems.map((cartItem: CartItem) => (
      <div key={cartItem.itemData.id}>
        {cartItem.itemData.title} {cartItem.itemData.id} {cartItem.quantity}{" "}
        {cartItem.totalPrice}
      </div>
    ));
  }
  
  return <>{content}</>


};

export default Cart;
