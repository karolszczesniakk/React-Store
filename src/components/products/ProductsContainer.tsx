import Product from "./Product";
import { Item } from "../models/Item";

import classes from "./ProductsContainer.module.css";

const ProductsCointainer: React.FC<{ items: Item[] }> = ({ items }) => {
  //logic for sorting and filtring here

  return (
    <div className={classes.ProductsContainer}>
      {items.map((item) => (
        <Product
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ProductsCointainer;
