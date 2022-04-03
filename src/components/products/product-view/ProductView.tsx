import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import { Item } from '../../../types/Item';
import { useDispatch } from 'react-redux';

import classes from "./ProductView.module.css";


const ProductView: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className={classes["product-view"]}>
      <ProductImage imageUrl={item.image} />
      <ProductDetails item={item} />
    </div>
  );
};

export default ProductView;