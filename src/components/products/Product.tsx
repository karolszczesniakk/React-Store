import React from "react";
import Card from "../UI/Card";
import Item from "../models/item";


import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product: React.FC<{ item: Item }> = ({ item }) => {

  return (
    <Card className={classes.item}>
      <div className={classes["item-image"]}>
        <Link to={`/shop/${item.id}`}>
          <img src={item.imgUrl} alt="product"></img>
        </Link>
      </div>
      <div>
        <Link to={`/shop/${item.id}`}>
          <p>{item.name}</p>
        </Link>
        <p className={classes.price}>{item.price} PLN</p>
      </div>
    </Card>
  );
};

export default Product;
