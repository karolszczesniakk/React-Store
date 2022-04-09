import { useSelector } from "react-redux";
import CartModal from "../cart/CartModal";
import { RootState } from "../../store";

import classes from "./Content.module.css";

const Content: React.FC = (props) => {
  const showCart = useSelector<RootState>(state => state.ui.showCart)
  return (
    <>
      {showCart && <CartModal />}
      <section className={classes.content}>{props.children}</section>
    </>
  );
};

export default Content;
;
