import { Link } from "react-router-dom";
import classes from "./ProductsNavigation.module.css";

const ProductsNavigation: React.FC = () => {
  const isActive = (navData: any) => (navData.isActive ? classes.active : "");

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/products/">All</Link>
        </li>
        <li>
          <Link to="/products/?category=men%27s%20clothing">Men</Link>
        </li>
        <li>
          <Link to="/products/?category=women%27s%20clothing">Women</Link>
        </li>
        <li>
          <Link to="/products/?category=electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/products/?category=jewelery">Jewelery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsNavigation;
