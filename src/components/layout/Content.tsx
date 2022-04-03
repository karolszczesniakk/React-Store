import { useSelector } from "react-redux";
import CartModal from "../cart/CartModal";
import { RootState } from "../../store";

import classes from "./Content.module.css";
import { uiActions } from "../../store/ui-slice";

const Content: React.FC = (props) => {
  const showCart = useSelector<RootState>(state => state.ui.showCart)
  return (
    <> 
      {showCart && <CartModal />}
      <div className={classes.content}>{props.children}</div>
    </>
  );
};

export default Content;
;
