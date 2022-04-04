import classes from "./CartProductImage.module.css"

const CartProductImage: React.FC<{ image: string }> = ({ image }) => {

  return (
    <div className={classes["cart-product-image-container"]}>
      <img className={classes["cart-product-image"]}src={image} alt="product"></img>
    </div>
  )
};

export default CartProductImage;