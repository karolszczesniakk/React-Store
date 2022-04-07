import React, { useEffect } from "react";
import ProductsContainer from "../products/ProductsContainer";
import { Item } from "../../types/Item";
import useHttp from "../../hooks/use-http";
import { getProducts } from "../../api/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsNavigation from "./ProductsNavigation";
import capitalizeFirstLetters from "../../functions/capitalizeFirstLetters";

import classes from "./Products.module.css";


const Shop: React.FC = () => {

  const {
    sendRequest,
    status,
    data: productsData,
    error,
  } = useHttp(getProducts);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category  = queryParams.get("category");

  let displayedCategory;
  let displayedProducts;
  
  //if category exists then filter products and capitalize first letters of category
  if (category && productsData) {
    displayedProducts = productsData.filter((product: Item) => product.category === category);   
    displayedCategory = capitalizeFirstLetters(category);
  } else {
    displayedProducts = productsData;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content: JSX.Element | null = null;

  if (status === "pending") {
    content = <LoadingSpinner />;
  }


  if (status === "completed" && displayedProducts.length > 0) {
    content = <ProductsContainer items={displayedProducts} />;
  }
  if (status === "completed" && displayedProducts.length === 0) {
    content = <h1>Couldnt find a category of name "{displayedCategory}"</h1>;
    setTimeout(() => navigate("/products", { replace: true }),4000);
  }

  if (error) {
    content = <div>Products fetch error!</div>;
  }

  return (
    <div className={classes.products}>
      <h1>
        {category && status === "completed"
          ? `${displayedCategory} Products`
          : "Products"}
      </h1>
      <ProductsNavigation />
      {content}
    </div>
  );
};

export default Shop;
