import { useSelector } from "react-redux";

const CartButton: React.FC = () => {

  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity)
  console.log(cartQuantity);
  return (
    <button className="btn">
      <span>Cart</span>
      <span> ({cartQuantity})</span>
    </button>
  );
};

export default CartButton;