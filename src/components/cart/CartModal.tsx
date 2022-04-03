import Modal from "../UI/Modal";
import Cart from "./Cart";
import { useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";

const CartModal: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Modal onClose={() => dispatch(uiActions.toggleCart())}>
      <Cart />
    </Modal>
  );
};

export default CartModal;
