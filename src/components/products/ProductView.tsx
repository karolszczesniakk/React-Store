import Card from '../UI/Card';
import ProductInfo from './ProductInfo';
import classes from './ProductView.module.css'

const ProductView: React.FC = () => {
  return (
    <div className={classes["product-view"]}>
      <ProductInfo />
      <div style={{ backgroundColor: 'BLACK' }}>
        Kurwa dane
      </div>
    </div>
  );
};

export default ProductView;