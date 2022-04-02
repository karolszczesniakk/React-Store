import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CartItem } from "../components/models/CartItem";

const Cart: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const { cartItems } = cartData;

  let content: string | JSX.Element[] = "Cart is currently empty";

  if (cartItems.length > 0) {
    content = cartItems.map((cartItem: CartItem) => (
      <div key={cartItem.itemDetails.id}>
        {cartItem.itemDetails.title} {cartItem.itemDetails.id}{" "}
        {cartItem.quantity} {cartItem.totalPrice}
      </div>
    ));
  }
  
  return <>{content}</>;
};

export default Cart;
