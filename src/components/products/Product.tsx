import React from "react";
import { Item } from "../models/Item";


import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product: React.FC<{ item: Item }> = ({ item }) => {

  return (
    <div className={classes.item}>
      <div className={classes["item-image"]}>
        <Link to={`/shop/${item.id}`}>
          <img src={item.image} alt="product"></img>
        </Link>
      </div>
      <div>
        <Link to={`/shop/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <p className={classes.price}>{item.price} PLN</p>
      </div>
    </div>
  );
};

export default Product;
