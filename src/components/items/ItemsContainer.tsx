import { classicNameResolver } from "typescript";
import Item from "./Item";

import classes from "./ItemsContainer.module.css"

type ItemProps = {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
};

const ItemsCointainer: React.FC<{ items: ItemProps[] }> = ({ items }) => {
  return (
    <div className={classes.itemsContainer}>
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}

    </div>
  );
};

export default ItemsCointainer;
