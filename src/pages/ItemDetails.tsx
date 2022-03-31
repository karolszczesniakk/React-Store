import React from "react";
import { useParams } from "react-router-dom";

type ItemProps = {
  data: any;
};

const ItemDetails: React.FC<ItemProps> = (props) => {
  const params = useParams();
  const { itemId } = params;

  return <h1 className="centered">{itemId}</h1>;
};
export default ItemDetails;
