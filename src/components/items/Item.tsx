import React from 'react';
import Card from '../UI/Card';

import classes from './Item.module.css'

type ItemProps = {
  id: string,
  name: string,
  price: number,
  imgUrl: string
}

const Item: React.FC<ItemProps> = (props) => {
  return (
    <Card className={classes.item}>
      <img src={props.imgUrl}></img>
      <p>{props.name}</p>
      <p>{props.price} PLN</p>
    </Card>
  );
};

export default Item;