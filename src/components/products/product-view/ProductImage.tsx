import classes from "./ProductImage.module.css";

interface ProductImageProps {
  imageUrl: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
  return (
      <div className={classes["product-image"]}>
        <img src={imageUrl} alt="product"></img>
      </div>
  );
};

export default ProductImage;
