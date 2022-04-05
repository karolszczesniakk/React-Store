import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CartItem } from "../../../types/CartItem";
import CartProduct from "./CartProduct";

const CartProductsList: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const { cartItems } = cartData;
  return (
    <>
      <div>
        {cartItems.map((item: CartItem) => (
          <CartProduct
            key={item.itemData.id}
            quantity={item.quantity}
            itemData={item.itemData}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <h2>Total amount: €{totalAmount}</h2>
    </>
  );
}

export default CartProductsList;