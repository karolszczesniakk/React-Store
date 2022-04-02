import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductView from "../components/products/ProductView";
import DUMMY_DATA from "../dummy-data";

const ProductPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { itemId } = params;

  //check if item of id itemId exists in database

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 /*
  useEffect(() => {
    if (item === undefined) {
      navigate("/not-found", { replace: true });
    }
  }, [item, navigate]);\
  */

  return  <ProductView />

};
export default ProductPage;
