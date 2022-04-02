import React, { useEffect } from "react";
import ProductsContainer from "../products/ProductsContainer";

import classes from "./Products.module.css";
import useHttp from "../../hooks/use-http";
import { getProducts } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const Shop: React.FC = () => {
  const { sendRequest, status, data: productsData, error } = useHttp(getProducts);

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  console.log(productsData);

  let content: JSX.Element | null = null;

  if (status === "pending") {
    content= <LoadingSpinner />
  }

  if (status === "completed") {
    content = <ProductsContainer items={productsData} />;
  }

  if (error) {
    content = <div>Products fetch error!</div>
  }
  
  return (
    <div className={classes.products}>
      <h1>Products</h1>
      <span>Sportowe</span>
      <span> Men Women Electronicstuff idk </span>
      <span>Link</span>
      {content}
    </div>
  );
};

export default Shop;
