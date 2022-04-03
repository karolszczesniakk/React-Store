import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";

const CartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity)
  
  return (
    <Button onClick={()=> dispatch(uiActions.toggleCart())}>
      <span>Cart</span>
      <span>({cartQuantity})</span>
    </Button>
  );
};

export default CartButton;