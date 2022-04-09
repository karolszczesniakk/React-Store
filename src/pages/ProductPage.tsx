import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductView from "../components/products/product-view/ProductView";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleProduct } from "../api/api";

const ProductPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    sendRequest,
    status,
    data: itemData,
    error,
  } = useHttp(getSingleProduct);

  const { itemId } = params;

  //check if item of id itemId exists in database

  useEffect(() => {
    sendRequest(itemId);
  }, [sendRequest, itemId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let content: JSX.Element | null = null;

  if (status === "pending") {
    content = <LoadingSpinner />;
  }

  if (status === "completed" && itemData !== null) {
    content = <ProductView item={itemData} />;
  }

  if ((status === "completed" && itemData === null)) {
    navigate("/not-found", { replace: true });
  }

  if (error) {
    console.log(error)
    navigate("/not-found", { replace: true });
  }

  return <>{content}</>;
};
export default ProductPage;
