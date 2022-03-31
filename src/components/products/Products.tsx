import React from "react";
import ItemsCointainer from "../items/ItemsContainer";
import DUMMY_DATA from "../../dummy-data";

const Shop: React.FC = () => {
  return (
    <>
      <div className="centered">
        <p>
          <h1>Products</h1>
        </p>
        <span>Sportowe</span>
        <span> Kurwa szkolne nie wiem </span>
        <span>Link</span>
      </div>
      <div className="centered">
        <ItemsCointainer items={DUMMY_DATA} />
      </div>
    </>
  );
};

export default Shop;
