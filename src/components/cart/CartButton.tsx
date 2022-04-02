import { useSelector } from "react-redux";
import Button from "../UI/Button";

const CartButton: React.FC = () => {

  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity)
  console.log(cartQuantity);
  return (
    <Button>
      <span>Cart</span>
      <span>({cartQuantity})</span>
    </Button>
  );
};

export default CartButton;