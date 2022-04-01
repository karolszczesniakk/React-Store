import React from "react";
import ProductsContainer from "../products/ProductsContainer";
import DUMMY_DATA from "../../dummy-data";

import classes from "./Products.module.css";

const Shop: React.FC = () => {
  return (
    <div className={classes.products}>
      <h1>Products</h1>
      <span>Sportowe</span>
      <span> Kurwa szkolne nie wiem </span>
      <span>Link</span>
      <ProductsContainer items={DUMMY_DATA} />
    </div>
  );
};

export default Shop;
