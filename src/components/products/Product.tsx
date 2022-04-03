import React from "react";
import { Item } from "../../types/Item";
import { Link } from "react-router-dom";

import classes from "./Product.module.css";

const Product: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className={classes.item}>
      <Link to={`/products/${item.id}`}>
        <div className={classes["item-image-container"]}>
          <img src={item.image} alt="product"></img>
        </div>
      </Link>
      <div>
        <Link to={`/products/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <p className={classes.price}>€{item.price}</p>
      </div>
    </div>
  );
};

export default Product;
